import { Component, AfterViewInit, OnInit  } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-cash-memo',
  templateUrl: './cash-memo.component.html',
  styleUrls: ['./cash-memo.component.css']
})
export class CashMemoComponent implements OnInit,AfterViewInit {

  newService: Array<any>=[];
  disModelper:Array<number>=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
  disModels: Array<number>=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
  constructor(private shared:DataService) {

  }

    ngOnInit():void{
      this.newService = this.shared.getService();
      console.log(this.newService);
      
    }
  
    getInput(value:any,i:any){
      this.disModelper[i]=value;
    }

    getInput1(value:any,i:any){
      this.disModelper[i]=value;
      this.disModels[i]=(this.newService[i].qty * this.newService[i].rate * this.disModelper[i]) / 100;
    }
  
    getInput2(value:any,i:any){
      this.disModelper[i] = (value*100)/(this.newService[i].qty * this.newService[i].rate);
    }
  
    sumoftotal(){
      let total = this.newService.
      map(t=>(t.qty*t.rate)).
      reduce((a,b)=> a+b,0);
      return total;
    }
  
    calculateTotalDisLS(): number {
      let totalDisLS = 0;
      for (let i = 0; i < this.newService.length; i++) {
        totalDisLS += (this.newService[i].qty * this.newService[i].rate * this.disModelper[i]) / 100;
      }
      return totalDisLS;
    }
    calculateTotalNet(): number {
      let totalNet = 0;
      for (let i = 0; i < this.newService.length; i++) {
        totalNet += this.newService[i].qty * this.newService[i].rate - ((this.newService[i].qty * this.newService[i].rate * this.disModelper[i]) / 100);
      }
      return totalNet;
    }
  
    Dis(){
      let mainDis =(this.calculateTotalDisLS()*100)/this.sumoftotal();
      return Math.ceil(mainDis);
    }

  ngAfterViewInit(): void {
  }
}
