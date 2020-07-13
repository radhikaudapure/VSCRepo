import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-rf-demo1',
  templateUrl: './rf-demo1.component.html',
  styleUrls: ['./rf-demo1.component.css']
})
export class RfDemo1Component implements OnInit {

// This FormGroup contains fullName and Email form controls
employeeForm: FormGroup;

constructor() { }

// Initialise the FormGroup with the 2 FormControls we need.
// ngOnInit ensures the FormGroup and it's form controls are
// created when the component is initialised
ngOnInit() {
  this.employeeForm = new FormGroup({
    fullName: new FormControl(),
    email: new FormControl(),
    // Create skills form group
    skills: new FormGroup({
      skillName: new FormControl(),
      experienceInYears: new FormControl(),
      proficiency: new FormControl()
    })
  });
}

onSubmit(): void {
  console.log(this.employeeForm.value);
}

onLoadDataClickBySetValue(): void {
  this.employeeForm.setValue({
    fullName: 'Pragim Technologies',
    email: 'pragim@pragimtech.com',
    // skills: {
    //   skillName: 'C#',
    //   experienceInYears: 5,
    //   proficiency: 'beginner'
    // }
  });
}

onLoadDataClickByPatchValue(): void {
  this.employeeForm.patchValue({
    fullName: 'Pragim Technologies',
    email: 'pragim@pragimtech.com',
    // skills: {
    //   skillName: 'C#',
    //   experienceInYears: 5,
    //   proficiency: 'beginner'
    // }
  });
}

onClearDataClick(){
  this.employeeForm.reset();
}

}
