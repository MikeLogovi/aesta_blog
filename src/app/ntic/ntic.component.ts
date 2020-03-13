import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Globals} from '../globals'
import {DepartmentService} from '../department.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ntic',
  templateUrl: './ntic.component.html',
  styleUrls: ['./ntic.component.scss']
})
export class NticComponent implements OnInit {
  public departmentCategory="Sciences et Technologies"
  public departmentName="DEPARTEMENT NTICS"
  public departmentDescription="DEPARTEMENT parlon peu parlons bien"
  public breadcrumb="departement-ntic"
 
  public department={};
  public config:any
  public color={'background-color':"#28a745"}
  constructor(private http:HttpClient,private departmentService:DepartmentService,private globals:Globals,private route:ActivatedRoute,private router:Router) {
    
   }
 
  ngOnInit() {
      this.departmentService.serve('ntic').then(data=>{
        this.department=data
      })
  }

}
