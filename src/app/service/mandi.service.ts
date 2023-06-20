import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MandiService {
  baseUrl=`http://127.0.0.1:8000/api`
  headers=new HttpHeaders({
    'content-type':'application/json'
  })
  constructor(private http:HttpClient ) { }


  createAccount(data:any){
    return this.http.post(`${this.baseUrl}/register/`,data)
  }

  authorize(data:any){
    return this.http.post(`${this.baseUrl}/token/`,data)
  }

  getAllMandi(){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    return this.http.get(`${this.baseUrl}/mandiitem/`,{"headers":header})
  }
  getMandiDetail(id:any){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    return this.http.get(`${this.baseUrl}/mandiitem/${id}/`,{"headers":header})
  }
  addToCart(id:any){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    return this.http.post(`${this.baseUrl}/mandiitem/${id}/add_to_cart/`,null,{"headers":header})
  }
  listCarts(){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    return this.http.get(`${this.baseUrl}/carts/`,{"headers":header})
  }
  placeOrder(id:any,data:any){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    return this.http.post(`${this.baseUrl}/mandiitem/${id}/place_order/`,data,{"headers":header})
  }
  listOrder(){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    return this.http.get(`${this.baseUrl}/orders/`,{"headers":header})
  }
  addReview(id:any,data:any){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    return this.http.post(`${this.baseUrl}/mandiitem/${id}/add_review/`,data,{"headers":header})
  }
  isAuthenticated(){
    return 'token' in localStorage
  }

  listCategories(){
  let header=new HttpHeaders({
    'content-type':'application/json',
    'Authorization':localStorage.getItem('token')??''
  })
  return this.http.get(`${this.baseUrl}/category/`,{"headers":header})

}
  filterProductsByCategory(cat:any){
  let header=new HttpHeaders({
    'content-type':'application/json',
    'Authorization':localStorage.getItem('token')??''
  })
  return this.http.get(`${this.baseUrl}/mandiitem/?category=${cat.id}`,{"headers":header})

}
  deleteFromCart(id:any){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
  })
    return this.http.delete(`${this.baseUrl}/mandiitem/${id}/delete_from_cart/`,{"headers":header})
}
}