import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
 
  WayNo: number = 0;
  newService: Array<any>=[];
  selectOption!: string;
  patient_name! :string;
  patient_service!:string;
  referd_by!:string;
  referd_ss!:string;
  patient_contact_id!:string;
  patient_age!:string;
  patient_gender!:string;
  patient_ID!: string;





  ways =[
    {id:0, way:"Contact No", wt:"cntact"},
    {id:1, way:"Patient Id", wt:"pid"}
  ]

  PaDetails=[
    {name:"Ashik",
      refd_by:"Dr.Anis",
      refd_ss:"Dr.Anis",
      service:"service_4",
      contact:"01234567890",
      pid:"1234560",
      age:"2000-01-12",
      gender:"m",
      id:0},
    {name:"Hasan",
      refd_by:"Dr.Mukaddas",
      refd_ss:"Dr.Mukaddas",
      service:"service_5",
      contact:"01234567891",
      pid:"1234561",
      age:"2001-03-03",
      gender:"m",
      id:1},
    {name:"Anik",
      refd_by:"Dr.Alam",
      refd_ss:"Dr.Alam",
      service:"service_6",
      contact:"01234567892",
      pid:"1234562",
      age:"2002-12-12",
      gender:"m",
      id:2},
    {name:"Sajid",
      refd_by:"Dr.Monir",
      refd_ss:"Dr.Monir",
      service:"service_1",
      contact:"01234567893",
      pid:"1234563",
      age:"2002-01-20",
      gender:"m",
      id:3},
    {name:"Nafiz",
      refd_by:"Dr.Tanvir",
      refd_ss:"Dr.Tanvir",
      service:"service_2",
      contact:"01234567894",
      pid:"1234564",
      age:"2002-01-16",
      gender:"m",
      id:4},
    {name:"Asraf",
      refd_by:"Dr.Saima",
      refd_ss:"Dr.Saima",
      service:"service_3",
      contact:"01234567895",
      pid:"1234565",
      age:"2003-11-20",
      gender:"m",
      id:5},
  ];

  service=[
    {id:1,particular:'Napa',qty:3,rate:2,dis:10,service:"service_1"},
    {id:1,particular:'Paracitamol',qty:10,rate:1.5,dis:20,service:"service_2"},
    {id:1,particular:'Omeprazole',qty:30,rate:10,dis:30,service:"service_3"},
    {id:1,particular:'Esomeprazole',qty:3,rate:15,dis:5,service:"service_4"},
    {id:1,particular:'Pantoprazole',qty:15,rate:20,dis:40,service:"service_5"},
    {id:1,particular:'Ranitidine',qty:3,rate:25,dis:10,service:"service_6"},
    {id:1,particular:'Rabeprazole',qty:2,rate:12,dis:20,service:"service_7"},
    {id:1,particular:'Antacid',qty:6,rate:2,dis:5,service:"service_8"},
  ]

  total_price = 0;

  visible: boolean = false;


  showDialog(){
    this.visible = true;
  };
  

 
  onChangeContact(){
    this.PaDetails.forEach((pa)=>{
      if(pa.contact == this.selectOption || pa.pid == this.selectOption){
        this.patient_name = pa.name;
        this.referd_by = pa.refd_by;
        this.referd_ss = pa.refd_ss;
        this.patient_age = pa.age;
        this.patient_contact_id = pa.contact;
        this.patient_gender = pa.gender
        this.patient_ID = pa.pid
      }
    });
  }
  
  onChangePatient(){
    this.PaDetails.forEach((pa)=>{
      if(pa.pid == this.selectOption){
        this.patient_name = pa.name;
        this.patient_service = pa.service;
        this.referd_by = pa.refd_by;
        this.referd_ss = pa.refd_ss;
        this.patient_age = pa.age;
        this.patient_contact_id = pa.contact;
        this.patient_gender = pa.gender;
        this.patient_ID = pa.pid
      }
    })
  }

  constructor(private shared:DataService) {
     
  }

  onServiceChange(){
    if(this.newService.length > 0){
      this.newService = [];
    }
    this.service.forEach((p)=>{
      if(p.particular == this.patient_service){
        this.newService.push(p);
        console.log(this.newService);
        
      }
      }
    )
    this.shared.setService(this.newService);

  }



   ngOnInit(): void {
    
   }
   WeyNo: number = 0;



}

