import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commissioning',
  templateUrl: './commissioning.component.html',
  styleUrls: ['./commissioning.component.css']
})
export class CommissioningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  assignment(x: number){
   if(x==1){
     this.sourcing();
   }else if(x==2){
     this.marktanalyse();
   }else if(x==3){
     this.schulung();
   }
  }

  sourcing(){

  }

  marktanalyse(){

   }

  schulung(){

   }

}
