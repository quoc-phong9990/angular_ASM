import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../../project.service';
@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent {
  api = 'http://localhost:3000/employee'
  projettask: any;
  id = 0;
  constructor(private route: ActivatedRoute, private sevice: ProjectService, private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    // // console.log(this.id);
    // this.http.get(this.api + '/' + this.id).subscribe(res => {
    //   this.projettask = res
    //   console.log(res);
    // })
    this.sevice.Detailemployee(this.id).subscribe(res=>{
      this.projettask=res
    })

  }
  onEdit(data:any):void{
    // this.http.put (this.api + '/' + this.id,data).subscribe(res =>{
    //   alert('edit thanh cong')
    //   this.router.navigate(['/listEmployee'])
    // })
    this.sevice.editemployee(this.id,data).subscribe(res=>{
      alert("cap nhat thanh cong")
      this.router.navigate(['/listEmployee'])
    })
  }
}
