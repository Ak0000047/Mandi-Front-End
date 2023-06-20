import { Component } from '@angular/core';
import { MandiService } from './service/mandi.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MandiFrontEnd';
  isLoggedIn=false

  constructor(private service:MandiService){
    this.isLoggedIn=this.service.isAuthenticated()
    
  }
}
