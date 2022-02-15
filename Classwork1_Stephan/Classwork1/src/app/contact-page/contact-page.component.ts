import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  contact = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    eMail: new FormControl(""),
    textArea: new FormControl(""),
    newsletter: new FormControl("")
  })
  constructor() { }

  ngOnInit(): void {
  }

submitForm() {
  var a = this.contact.value;
  console.log(a);
}

}
