import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templete-driving',
  templateUrl: './template-driving.component.html',
  styleUrls: ['./template-driving.component.css']
})
export class TemplateDrivingComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username:'',
    email:'',
    gender:'',
    answer:''
  }
  submitted = false;

  suggestUsername() {
    const suggestedName = 'Superuser';

    // one way: error: Must supply a value for form control with name: 'username'
    // this.signupForm.setValue({
    //   userData:{
    //     // username: suggestedName, 
    //     email:'test@test.com'
    //   },
    //   secret: 'teacher',
    //   questionAnswer: '',
    //   gender: 'male'
    // })


    // second way:
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })

  }

  //1 way of accessing the form
  // onSubmit(form:NgForm){
  //     console.log(form)
  //  }


  // 2'nd way
  onSubmit() {
    console.log(this.signupForm);
    this.submitted=true
    this.user.username = this.signupForm.value.userData.username
    this.user.email = this.signupForm.value.userData.email
    this.user.answer = this.signupForm.value.questionAnswer
    this.user.gender = this.signupForm.value.gender
    
    this.signupForm.reset();
  }

}
