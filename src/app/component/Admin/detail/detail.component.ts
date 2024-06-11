import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../project.service';


@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
id =0;
product:any={};
constructor (private routes:ActivatedRoute,private sevice:ProjectService){
 this.id=this.routes.snapshot.params['id']
 console.log(this.id);
 
}

ngOnInit(id:any):void{
  // let apiUrl ='http://localhost:3000/project/'+this.id;
  // this.http.get(apiUrl).subscribe(response =>{
  //   this.product =response
    
  // })
  this.sevice.DetailAdmin(this.id).subscribe(res=>{
    this.product=res;
    

  })
}
 
}
