import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-driving',
  templateUrl: './reactive-driving.component.html',
  styleUrls: ['./reactive-driving.component.css']
})
export class ReactiveDrivingComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm : FormGroup;
  hobbies = ['code', 'sport'];
  forbidderUsernames=['chris', 'anna'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required,this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email],this.forbiddenEmail)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value)=>console.log(value)
    // )
    this.signupForm.statusChanges.subscribe(
      (status)=>console.log(status)
    )
    this.signupForm.setValue({
      'userData': {
        'username': 'Me',
        'email': 'me@test.com'
      },
      'gender': 'male',
      'hobbies':[]
    })
  }

  getControls() {
    //1
    return (this.signupForm.get('hobbies') as FormArray).controls;
    //2
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  //our own validators
  forbiddenNames(control:FormControl): {[s:string]: boolean}{
    if(this.forbidderUsernames.indexOf(control.value) !== - 1){
      return {'nameIsForbidden': true}
    }
    return null;
  }

  forbiddenEmail(control:FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden': true})
        }
        else{
          resolve(null)
        }
      },1500)
    })
    return promise;
  }

  onAddHobbie(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  onSubmit(){
    console.log(this.signupForm)
    this.signupForm.reset();
  }
}
