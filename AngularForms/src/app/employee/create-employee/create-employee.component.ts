import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  fullNameLength: number = 0;

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
    this.employeeForm.get('fullName')?.valueChanges.subscribe((value: string) => {
      this.fullNameLength = value.length;
    });
  }

  createEmployee() {
    this.employeeForm = this.fb.group({
      'fullName': ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      'email': ['', Validators.required],
      'skills': this.fb.group({
        'skillName': ['', Validators.required],
        'experienceInYears': ['', Validators.required],
        'proficiency': ['beginner', Validators.required],
      }),
    });
  }

  onSubmit() {
    console.log(this.employeeForm);

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
