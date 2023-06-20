import { Component } from '@angular/core';
import { MandiService } from '../service/mandi.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logForm=new FormGroup({
    username:new FormControl(),
    password:new FormControl()


  })



  constructor(private service:MandiService,private router:Router){

  }
  authenticate(){
    let formData=this.logForm.value
     this.service.authorize(formData).subscribe((res:any)=>{
      let token=res.token
      localStorage.setItem('token',`Token ${token}`)
      this.router.navigateByUrl('products')
    }
    )

}
}
