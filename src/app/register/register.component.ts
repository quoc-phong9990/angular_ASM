import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { error } from 'console';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private auth: AuthService, private router: Router) {}

  onSubmitregister(data: any) {
      this.auth.registeradd(data).subscribe(res => {
        console.log(data);
        
        alert("thanh cong")
        this.router.navigate(['login'])
      }
      )
    

  }
}
