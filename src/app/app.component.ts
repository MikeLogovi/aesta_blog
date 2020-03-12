import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AESTA';
  isHome=true;
  constructor(private router:Router){
    this.isHome=this.router.url=='/'? true:false
  }
  public message='Hello mike';
  public message1;
}
