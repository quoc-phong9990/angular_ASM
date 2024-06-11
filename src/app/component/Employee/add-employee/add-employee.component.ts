import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router } from '@angular/router';
import { ProjectService } from '../../../project.service';


@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  constructor(private service:ProjectService,
    private router:Router
  ) { }
  onCreate(data:any): void {
    // this.http.post(
    //   this.apiUrl,
    //   data
    // ).subscribe(res=>{
    //   alert ('them moi thanh cong')
    //   this.router.navigate(['/listEmployee'])
    // })
    
      this.service.Create (data).subscribe(res=>{
        alert('them moi thanh cong')
        this.router.navigate(['/listEmployee'])
      })  

  }
}
