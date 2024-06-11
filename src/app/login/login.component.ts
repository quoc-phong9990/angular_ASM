import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // styleUrl -> styleUrls
})
export class LoginComponent {
  user: any;

  constructor(private auth: AuthService, private router: Router) {}

  onSubmilogin(data: any) {
    this.auth.login(data).subscribe(res => {
const token =res?.accessToken;
const email= res?.user.email;
const userinfo ={token:token, email:email}
      localStorage.setItem('user', JSON.stringify(userinfo));
      console.log(data);
      
      alert("Đăng nhập thành công");
      this.router.navigate(['admin/list']);
    });
  }
}
