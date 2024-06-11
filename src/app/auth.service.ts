import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  // dangky
  registeradd = (data: any) => {
    return this.http.post(this.api + '/register', data)
  }

  login = (data: any): Observable<any> => {
    return this.http.post(this.api + '/login', data)
  }
  checkoutUser = (): boolean => {
    let valid = false;
    try {
      const userinfo = localStorage.getItem('user');
      if (userinfo !== null) {
        const useObj = JSON.parse(userinfo)
        const token = jwtDecode(useObj?.token)

        if (token.exp as any > Date.now() / 1000) {
          valid = true
        } else {
          valid = false;
        }
      }
    } catch (error) {
      alert(error)
      return false;
    }
    return valid
  }




}
