import { Component } from '@angular/core';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponentUser {
  user:any;
id=0
 constructor (private sevice:ProjectService){}
 ngOnInit():void{
  this.sevice.detailuser(this.id).subscribe(res=>{
    this.user=res
  })
 }
}
