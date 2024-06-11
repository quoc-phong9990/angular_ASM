import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../project.service';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  apiUrl = 'http://localhost:3000/project';

  constructor(
    private sevice: ProjectService,
    private router: Router
  ) { }

  onCreate(data: any): void {
    let isValid = true;

    // Ensure data and data.tenduan are defined
    if (!data || !data.tenduan) {
      isValid = false;
    } else {
      const trimmedName = data.tenduan.trim();
      if (trimmedName === '' || trimmedName.length < 3 || trimmedName.length > 10) {
        isValid = false;
      }
    }

    // Proceed if valid
    if (isValid) {
      this.sevice.Createadmin(data).subscribe(
        res => {
          alert('Thêm mới thành công');
          this.router.navigate(['admin/list']);
        },
     
      );
    } else {
      alert('Dữ liệu không hợp lệ');
    }
  }
}
