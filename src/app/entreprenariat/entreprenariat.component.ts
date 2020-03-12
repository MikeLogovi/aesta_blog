import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-entreprenariat',
  templateUrl: './entreprenariat.component.html',
  styleUrls: ['./entreprenariat.component.scss']
})
export class EntreprenariatComponent implements OnInit {
  public departmentCategory="Innovation et leadership"
  public departmentName="DEPARTEMENT ENTREPRENARIAL"
  public departmentDescription="DEPARTEMENT parlon peu parlons bien"
  public breadcrumb="departement-entreprenarial"
  public department={};
  public color={'background-color':"#28a745"}
  constructor(private http:HttpClient,private departmentService:DepartmentService,private globals:Globals) { }

  ngOnInit() {
      this.departmentService.serve('entreprenarial').then(data=>{
        this.department=data
      })
  }


}
