import { Component } from '@angular/core';
import { MandiService } from '../service/mandi.service';
import { Router } from '@angular/router';
import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  regForm=new FormGroup({
    username:new FormControl(),
    email:new FormControl(),
    password:new FormControl()
  })

  constructor(private service:MandiService,private router:Router){}
  register(){
    let formData=this.regForm.value
    this.service.createAccount(formData).subscribe(res=>{
      this.router.navigateByUrl("")
    })
  }
}
