import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../auth.service";

export const canActivateGuardGuard: CanActivateFn = (router,state)=>{
    let test='123'
    if(test=='123'){
        const authService =inject(AuthService);
        const router =new Router()
        if (authService.checkoutUser()) {
          
            return true
          
        }else{
            router.navigate(['login'])
   
            return false
        }
    }
    return false
}