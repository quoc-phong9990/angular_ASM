import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { ProjectService } from '../../../project.service';
@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [RouterOutlet, FormsModule,RouterLink,HttpClientModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {
  
 lisproduct:any;
 id=0;
 constructor(private service:ProjectService){}
ngOnInit():void{
  // let apiUrl ='http://localhost:3000/project'
  // this.phongnq.get(apiUrl).subscribe(response =>{
  //   this.lisproduct =response
  // })
  this.service.getlistadmin().subscribe(res =>{
    this.lisproduct=res
  })
};

delete(id:any){
  if(confirm("ban co muon xoa san pham nay khong")) {
    // let apiUrl ='http://localhost:3000/project/'+id;
    // console.log(id);
    // this.phongnq.delete(apiUrl).subscribe(response =>{
    //   this.lisproduct =response
    //   this.ngOnInit()
    // })
    this.service.deleteadmin(id).subscribe(res =>{
      alert('xoa thanh cong')
      this.ngOnInit()
    })

  }
}









  name = '';
  count = 0
  countclickTang(): void {
    this.count++
    console.log(this.count);
  }

  countclickGiam(): void {
    const count = 0
    if (count > 0) {

      console.log(this.count);
    } else {
      this.count--
    }
  }
}
