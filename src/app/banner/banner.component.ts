import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() public title;
  @Input() public breadCrumb;
  public test;
  constructor() { }

  ngOnInit() {
    this.test=this.title;
  }

}
