import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from '../department.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-sante',
  templateUrl: './sante.component.html',
  styleUrls: ['./sante.component.scss']
})
export class SanteComponent implements OnInit {
  public departmentCategory="Hygiene et Bien-Etre"
  public departmentName="DEPARTEMENT SANITAIRE"
  public departmentDescription="DEPARTEMENT parlons peu parlons bien"
  public breadcrumb="departement-sante"
  public department={};
  public color={'background-color':"#28a745"}
  constructor(private http:HttpClient,private departmentService:DepartmentService,private globals:Globals) { }

  ngOnInit() {
      this.departmentService.serve('sante').then(data=>{
        this.department=data
        console.log(this.department)
      })
  }

}
