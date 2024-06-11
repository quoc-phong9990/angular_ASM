import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../project.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterOutlet,RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponentuser {
    listuser: any
    constructor(private sevice: ProjectService) {}
    ngOnInit(): void {
      this.sevice.getlistuser().subscribe(res =>{
        this.listuser=res
        console.log(this.listuser);
        
      })
    }
    delete(id:any){
      confirm ("do you want delete now")
        this.sevice.Deleteuser(id).subscribe(res=>{
          this.listuser= res
          this.ngOnInit();
        })
      }
    
}

