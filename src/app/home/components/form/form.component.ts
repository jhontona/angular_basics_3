import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from './../../../core/validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  emailField: FormControl;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
      Validators.pattern('[a-zA-Z]*')
    ]);
    this.emailField.valueChanges
    .subscribe(value => {
      console.log(value);
    });

    this.buildFormContact();
  }

  ngOnInit(): void {
  }

  private buildFormContact() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      subject: ['', [Validators.required, CustomValidator.isTest]],
      description: ['', [Validators.required]]
    });
  }

}
