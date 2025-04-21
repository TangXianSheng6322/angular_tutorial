import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { createInvalidDomainValidator } from './invalidEmailDomain';

const invalidEmailDomain = createInvalidDomainValidator([
  'icloud.com',
  'qq.com',
]);

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [
      Validators.required,
      Validators.email,
      invalidEmailDomain,
    ]),
    senderMessage: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  submitForm() {
    console.log(this.contactForm.value);
    console.log(this.contactForm.valid);

    // if (this.senderNameControl.dirty) {
    //   alert('You changed the name field.');
    // }
  }
}
