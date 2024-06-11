import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponentUser {
constructor(private sevice:ProjectService, private router: Router){}
onAdd(data:any):void{
  this.sevice.adduser(data).subscribe(res=>{
   alert("Add Thanh Cong")
   this.router.navigate(['user/listuser'])
  })
}
}
