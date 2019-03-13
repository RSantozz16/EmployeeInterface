import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
// import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  // insertForm: FormGroup;
  empName: string = '';
  empAddress: string = '';
  empPhone: number = 0;
  success = false;
  submited = false;
  
  users: Object;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.getEmployee().subscribe(data => {
        this.users = data
        console.log(data);
      }
    );
  }

  // onFormSubmit(form:NgForm){
  //   this.data.postEmployee(form).subscribe(res => {
  //     let id = res['_id'];
  //   })
  // }

}
