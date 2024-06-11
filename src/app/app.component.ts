import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  logout():void{
    const userinfo = localStorage.getItem('user')
    if (userinfo !==null){
      localStorage.removeItem('user')
      alert('Đăng xuất thành công')
    }

  }
}
