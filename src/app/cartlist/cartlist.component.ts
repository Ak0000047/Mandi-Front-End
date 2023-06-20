import { Component, OnInit } from '@angular/core';
import { MandiService } from '../service/mandi.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit{
  carts:any
  
  constructor(private service:MandiService){}
  ngOnInit(): void {
      this.service.listCarts().subscribe(res=>this.carts=res)
  }
  deleteCart(id:any){
    this.service.deleteFromCart(id).subscribe(res=>this.carts=res)
  }
}
