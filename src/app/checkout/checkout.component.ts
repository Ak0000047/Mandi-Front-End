import { Component } from '@angular/core';
import { MandiService } from '../service/mandi.service';
import { ActivatedRoute, Router } from '@angular/router';
import{FormGroup,FormControl} from '@angular/forms'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  id:any
  checkOutForm=new FormGroup({
    total_amount:new FormControl(),
    quantity:new FormControl()
    

  })
  constructor(private service:MandiService,private route:ActivatedRoute,private router:Router){
    this.id=this.route.snapshot.params['id']
  }
  checkOut(){
    let formData=this.checkOutForm.value
    this.service.placeOrder(this.id,formData).subscribe(res=>{
      Swal.fire("Your order has been placed successfully")
      this.router.navigateByUrl("products")})
    }
  }
