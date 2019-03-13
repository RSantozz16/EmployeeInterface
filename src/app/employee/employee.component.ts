import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  messageForm: FormGroup;
  success = false;
  submited = false;

  form = {name:'', address:'', phone:0}
  
  users: Object;

  constructor(private data: DataService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required]
    });
    this.select();
  }

  select(){
    this.users = []
    this.data.getEmployee().subscribe(data => {
      this.users = data
      console.log(data);
      }
    );
  }

  onSubmit(){
    this.data.postEmployee({name:this.form.name, address:this.form.address, phone:this.form.phone})
    .subscribe(em => {
      console.log(em);
      this.select();
    })
  }

}
