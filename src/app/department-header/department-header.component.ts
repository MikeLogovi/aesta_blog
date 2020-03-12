import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-department-header',
  templateUrl: './department-header.component.html',
  styleUrls: ['./department-header.component.scss']
})
export class DepartmentHeaderComponent implements OnInit {
 @Input() public title;
 @Input() public breadCrumb;
 @Input() public colorHeader;
 @Input() public name;
 @Input() public description;
  constructor() { }

  ngOnInit() {
  }

}
