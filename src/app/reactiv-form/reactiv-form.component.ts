import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiv-form',
  templateUrl: './reactiv-form.component.html',
  styleUrls: ['./reactiv-form.component.css']
})
export class ReactivFormComponent implements OnInit {
  eventDetail: any = []

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.eventDetail = this.formBuilder.group({
      fullName:['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]*$')])]
    })
  }

  onRegister(){
    console.log(this.eventDetail.value)
  }

}
