import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponentUser {
  project:any
  id =0
  constructor(private sevice:ProjectService, private route:ActivatedRoute, private router: Router){}
  ngOnInit():void{
    this.id =this.route.snapshot.params['id']
    this.sevice.detailuser(this.id).subscribe(res=>{
      this.project=res
      // this.router.navigate(['/user/listuser'])
    })
  }

  onEdit(data:any){
    this.sevice.edituser(this.id,data).subscribe(res=>{
      alert("cap nhat thanh cong")
      this.router.navigate(['user/listuser'])
    })
  }

}
