import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../../project.service';



@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  apiUrl = 'http://localhost:3000/project'
  project: any;
  id = 0;
  constructor(private route: ActivatedRoute, private sevice: ProjectService, private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    // console.log(this.id);

    // this.http.get(this.apiUrl + '/' + this.id).subscribe(res =>{
    //   this.project =res
    // })
    // console.log(this.project);
    this.sevice.DetailAdmin(this.id).subscribe(res => {
      this.project = res
    })

  }
  onEdit(data:any): void {
    // this.http.put  (this.apiUrl + '/' +this.id,data ).subscribe(res=>{
    //   alert('cap nhat thanh cong')
    //   this.router.navigate(['/list'])
    // })
    this.sevice.editadmin(this.id, data).subscribe(res => {
      alert("cap nhat thanh cong")
      this.router.navigate(['admin/list'])
    })

  }

}
