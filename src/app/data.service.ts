import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  services: Array<Object>=[]
  serviceData! : any;
  constructor() { }

  setService(data:Array<object>){
    for(let each of data){
      this.services.push(each);
      
    }
  }

  getService():any{
    return this.services;
    console.log(this.services);  
  }

  setserviceData(Data:any){
    this.serviceData = Data;
  }

  getserviceData(){
    return this.serviceData;
  }

}
