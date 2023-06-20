import { Component, OnInit } from '@angular/core';
import { MandiService } from '../service/mandi.service';
import { ActivatedRoute,Router} from '@angular/router';
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit{
  id:any
  mandi:any
  reviewForm=new FormGroup({
    comment:new FormControl(),
    rating:new FormControl() 
  })
  addReview(){
    let formData=this.reviewForm.value
    this.service.addReview(this.id,formData).subscribe(res=>this.ngOnInit())
    
  }
  constructor(private route:ActivatedRoute,private service:MandiService,private router:Router){
    this.id=this.route.snapshot.params['id']
    console.log(this.id)
    
  }
  ngOnInit(): void {
      this.service.getMandiDetail(this.id).subscribe(res=>this.mandi=res)
  }
  cartAdd(){
    this.service.addToCart(this.id).subscribe(res=>
      this.router.navigateByUrl("products"))
  }
  
} 
