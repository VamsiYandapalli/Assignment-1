import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

@ViewChild('form') contactsForm:NgForm;
submitted=false;
  contacts=[];
  // feildNames=['First Name:','Last Name','Company Name:','Job Title','Email 1:','Email 2:','Company Phone:','Mobile Phone']

  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(formData:NgForm){
  //   console.log(formData);
  // }

  onSubmit(){
    this.submitted=true;
    // console.log(this.contactsForm.value);
    this.contacts.push(this.contactsForm.value);
    console.log(this.contacts);
  }
  onReset(){
    this.contactsForm.reset();
  }

}
