import {Injectable, OnInit} from '@angular/core';
import { Http,Response,Headers } from "@angular/http";

@Injectable()
export class EmployeeDetailsService implements OnInit{

  constructor(private http:Http) { }

  fetchData = function(){
    this.http.get("./employeeData.json").subscribe(
      (res:Response) => this.employees = res.json()
    )

  }

  ngOnInit(){
    this.fetchData() ;
  }
}
