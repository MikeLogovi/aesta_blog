import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from '../department.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-ancien',
  templateUrl: './ancien.component.html',
  styleUrls: ['./ancien.component.scss']
})
export class AncienComponent implements OnInit {
  public departmentCategory="Sagesse et Experiences"
  public departmentName="DEPARTEMENT ANCESTRAL"
  public departmentDescription="DEPARTEMENT parlons peu parlons bien"
  public breadcrumb="departement-ancien"
  public department={};
  public color={'background-color':"#28a745"}
  constructor(private http:HttpClient,private departmentService:DepartmentService,private globals:Globals) { }

  ngOnInit() {
      this.departmentService.serve('ancien').then(data=>{
        this.department=data
        console.log(this.department)
      })
  }

}
