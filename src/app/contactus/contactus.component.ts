import { Component, OnInit } from '@angular/core';
import { ContactUs } from './../shared/contactus';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactUsComponent implements OnInit {
  states = [
    {value: 'CA', text: 'California'},
    {value: 'VA', text: 'Virginia'},
    {value: 'NC', text: 'North Carolina'}
  ];
  contact: ContactUs = {
      name: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    };

    hide = true;

    constructor() { }

    ngOnInit() {
    }

    onSubmit() {
      console.log('Contact', this.contact);
    }

}
