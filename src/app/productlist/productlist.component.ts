import { Component, OnInit } from '@angular/core';
import { MandiService } from '../service/mandi.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{

  // selectedCategory: any = null;
  id:any
  mandi:any
  categories:any
constructor(private service :MandiService){}


ngOnInit(): void {
  this.service.listCategories().subscribe(res=>this.categories=res)

  this.service.getAllMandi().subscribe(res=>this.mandi=res)
}
getProductByCategory(cat:any){
  console.log(cat);
  this.service.filterProductsByCategory(cat).subscribe(res=>this.mandi=res)
}

}
