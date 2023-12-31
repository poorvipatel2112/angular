import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  genders = ['male', 'female'];
  signupForm !: FormGroup;

  ngOnInit() {
      this.signupForm = new FormGroup({
        'userData' : new FormGroup({
          'username' : new FormControl(null, Validators.required),
          'email' : new FormControl(null , [
            Validators.required,
            Validators.email
          ])
        }),
        'gender' : new FormControl('female'),
        'hobbies' : new FormArray([])
      });
  }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
   }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby(){
    const control =new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
}
