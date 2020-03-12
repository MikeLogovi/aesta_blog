import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.scss']
})
export class AproposComponent implements OnInit {
  public title="A propos"
  public breadcrumb="A propos de nous"
  constructor() { }

  ngOnInit() {
  }

}
