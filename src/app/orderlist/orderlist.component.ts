import { Component, OnInit } from '@angular/core';
import { MandiService } from '../service/mandi.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit{
  orders:any
  constructor(private service:MandiService){}



  ngOnInit(): void {
    this.service.listOrder().subscribe(res=>this.orders=res)
  }
}
