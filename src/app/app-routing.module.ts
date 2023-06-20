import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'products',component:ProductlistComponent},
  {path:'products/:id',component:ProductdetailComponent},
  {path:'carts',component:CartlistComponent},
  {path:'orders',component:OrderlistComponent},
  {path:'checkout/:id',component:CheckoutComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
