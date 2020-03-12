import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  @Input() public name;
  @Input() public description;
  @Input() public colorHeader;

  constructor() { }

  ngOnInit() {

  }

}
