import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder){}
  Register!:FormGroup ;

  ngOnInit(){

  this.Register=this.fb.group({
    name:['',Validators.required],
    phone:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required]
  })
  }
  OnSubmit()
  {
    console.log(this.Register.value);
  }

}
