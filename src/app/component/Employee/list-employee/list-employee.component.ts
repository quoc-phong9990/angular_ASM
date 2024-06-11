import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { response } from 'express';
import { ProjectService } from '../../../project.service';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink, HttpClientModule],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent {
  listemployee: any;
  id = 0;
  constructor(private sevice: ProjectService) { }
  ngOnInit(): void {
    // let api = 'http://localhost:3000/employee'
    // this.http.get(api).subscribe(res => {
    //   this.listemployee = res
    //   // console.log(this.listemployee);  
    // })
    this.sevice.getlistemployee().subscribe(res=>{
      this.listemployee=res
    })
  }
  delete(id: any) {
    if (confirm('ban co chac chan')) {
      // let api = 'http://localhost:3000/employee/' + id;
      // this.http.delete(api).subscribe(response => {
      //   this.listemployee = response;
      //   this.ngOnInit()

      // })
      this.sevice.deleteemployee(id).subscribe(res=>{
        this.listemployee=res
        this.ngOnInit()
      })
    }
  }
}
