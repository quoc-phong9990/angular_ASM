import { Routes } from '@angular/router';
import { ListProductComponent } from './component/Admin/list-product/list-product.component';
import { AddproductComponent } from './component/Admin/addproduct/addproduct.component';
import { HomeComponent } from './User/home/home.component';
import { EditComponent } from './component/Admin/edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { canActivateGuardGuard } from './guard/can-activate-guard.guard';
import { canDeactivateGuard } from './guard/can-deactivate.guard';
import { DetailComponent } from './component/Admin/detail/detail.component';
import { EditEmployeeComponent } from './component/Employee/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './component/Employee/add-employee/add-employee.component';
import { ListEmployeeComponent } from './component/Employee/list-employee/list-employee.component';
import { DetailEmployeeComponent } from './component/Employee/detail-employee/detail-employee.component';
import {  AddComponentUser } from './User/add/add.component';
import { EditComponentUser } from './User/edit/edit.component';
import { DetailComponentUser } from './User/detail/detail.component';
import { ListComponentuser } from './User/list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [


    {
        path: 'admin', canActivate: [canActivateGuardGuard], children: [
            { path: 'edit/:id', component: EditComponent, canDeactivate: [canDeactivateGuard] },
            { path: 'list', component: ListProductComponent, canDeactivate: [canDeactivateGuard] },
            { path: 'add', component: AddproductComponent, canActivate: [canActivateGuardGuard], canDeactivate: [canDeactivateGuard] },
            { path: 'detail/:id', component: DetailComponent, canDeactivate: [canDeactivateGuard] },
        ]
    },

    { path: 'edit/:id', component: EditEmployeeComponent, canDeactivate: [canDeactivateGuard] },
    { path: 'add', component: AddEmployeeComponent, canActivate: [canActivateGuardGuard], canDeactivate: [canDeactivateGuard] },
    { path: 'listEmployee', component: ListEmployeeComponent, canDeactivate: [canDeactivateGuard] },
    { path: 'detail/:id', component: DetailEmployeeComponent, canDeactivate: [canDeactivateGuard] },


    { path: 'login', component: LoginComponent, canDeactivate: [canDeactivateGuard] },
    { path: 'register', component: RegisterComponent, canDeactivate: [canDeactivateGuard] },
    {
        path: 'user', children: [
            { path: 'adduser', component: AddComponentUser },
            {path: 'edituser/:id', component: EditComponentUser},
            {path:'detailuser/:id', component: DetailComponentUser},
            {path: 'listuser', component:ListComponentuser}
        ]
    },
    { path: '**', component: NotFoundComponent }
];
