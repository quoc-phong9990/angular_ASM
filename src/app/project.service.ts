import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  apiUrl = 'http://localhost:3000/project'
  apiUrl1 = 'http://localhost:3000/employee'
  api2 = "http://localhost:3000/user"
  constructor(private http: HttpClient) { }

  Createadmin(data: any) {
    return this.http.post(this.apiUrl, data)
  }
  DetailAdmin(id: any) {
    return this.http.get(this.apiUrl + '/' + id)

  }
  editadmin(id: any, data: any) {
    return this.http.put(this.apiUrl + '/' + id, data)
  }

  getlistadmin() {
    return this.http.get(this.apiUrl);
  }
  deleteadmin(id: any) {
    return this.http.delete(this.apiUrl + '/' + id)
  }
// user
getlistuser(){
  return this.http.get(this.api2)
}
Deleteuser(id:any){
  return this.http.delete(this.api2 + '/' +id)
}
adduser(data:any){
  return this.http.post(this.api2,data)
}
edituser(id:any, data:any){
  return this.http.put(this.api2 + '/' + id,data)
}
detailuser(id:any){
  return this.http.get(this.api2 + '/'+id)
}




// employee
  Create(data: any) {
    return this.http.post(this.apiUrl1, data)
  }
  Detailemployee(id:any){
    return this.http.get(this.apiUrl1 + '/' +id)
  }
  editemployee(id:any, data:any){
    return this.http.put (this.apiUrl1 + '/' +id,data)
  }
  getlistemployee(){
    return this.http.get(this.apiUrl1)
  }
  deleteemployee(id:any){
    return this.http.delete(this.apiUrl1 + '/' +id)
  }

}
