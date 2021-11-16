import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.sass']
})
export class CreateAccountComponent implements OnInit {

  @ViewChild('f') createAccountForm: NgForm
  @Output('close') close = new EventEmitter<any>()
  @Output('submit') submit = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.createAccountForm.value)
    this.submit.emit();
  }

  onClose() {
    this.close.emit()
  }

}
