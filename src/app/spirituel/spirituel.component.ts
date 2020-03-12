import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from '../department.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-spirituel',
  templateUrl: './spirituel.component.html',
  styleUrls: ['./spirituel.component.scss']
})
export class SpirituelComponent implements OnInit {

  public departmentCategory="Amour et Paix"
  public departmentName="DEPARTEMENT DIVIN"
  public departmentDescription="DEPARTEMENT parlons peu parlons bien"
  public breadcrumb="departement-spirituel"
  public department={};
  public color={'background-color':"#28a745"}
  constructor(private http:HttpClient,private departmentService:DepartmentService,private globals:Globals) { }

  ngOnInit() {
      this.departmentService.serve('spirituel').then(data=>{
        this.department=data
        console.log(this.department)
      })
  }


}
