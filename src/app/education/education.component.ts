import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from '../department.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public departmentCategory="Enseignement et apprentissage"
  public departmentName="DEPARTEMENT EDUCATIF"
  public departmentDescription="DEPARTEMENT parlons peu parlons bien"
  public breadcrumb="departement-education"
  public department={};
  public color={'background-color':"#28a745"}
  constructor(private http:HttpClient,private departmentService:DepartmentService,private globals:Globals) { }

  ngOnInit() {
      this.departmentService.serve('education').then(data=>{
        this.department=data
        console.log(this.department)
      })
  }

}
