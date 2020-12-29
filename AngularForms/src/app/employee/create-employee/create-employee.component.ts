import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) {} //FormBuilder is present as a service so we need to inject it in order to use it

  ngOnInit(): void {
    // this.employeeForm = new FormGroup({
    //   fullName: new FormControl(),
    //   email: new FormControl(),

    //   //create skills Form Group
    //   skills: new FormGroup({
    //     skillName: new FormControl(),
    //     experienceInYears: new FormControl(),
    //     proficiency: new FormControl(),
    //   }),
    // });

    // Using Form Builder class
    this.createEmployee();
  }

  createEmployee(){
    this.employeeForm = this.fb.group({
      fullName: ['', Validators.required],
      email: [''],
      skills: this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['beginner'],
      }),
    });
  }

  onSubmit() {
    // var fullName = this.employeeForm.fullName?.value();
    console.log(this.employeeForm.value);
    // console.log(this.employeeForm.controls.fullName.value);
  }

  onLoadDataClick(): void {
    this.employeeForm.setValue({
      fullName: 'Used to update all form controls at once',
      email: 'riteshjoshi022@gmail.com',
      skills: {
        skillName: 'Angular',
        experienceInYears: '2',
        proficiency: 'advanced',
      },
    });
  }

  onPatchValueClick(): void {
    this.employeeForm.patchValue({
      fullName: 'Used to update few form controls',
      email: 'riteshjoshi022@gmail.com',
    });
  }
}
