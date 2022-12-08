import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { eventData } from './templete';
import jsPDF, { jsPDFAPI } from 'jspdf';


@Component({
  selector: 'app-templete-form',
  templateUrl: './templete-form.component.html',
  styleUrls: ['./templete-form.component.css']
})
export class TempleteFormComponent implements OnInit {
  eventDetail: eventData
  events:any=[]

  @ViewChild('content',{static:false})el!:ElementRef


  constructor() {
    this.eventDetail = new eventData()
    this.events = ["games","dance","singing"]
  }
  addEvent(){
    console.log(this.eventDetail)
  }



  makePDf(){
    let pdf = new jsPDF('p','pt','a4')
    pdf.html(this.el.nativeElement,{callback:(pdf)=>{
      pdf.save('demo.pdf')
    }})
  }


  ngOnInit(): void {
    console.log(this.el)
  }

}
