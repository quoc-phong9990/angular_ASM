
import { CanDeactivateFn } from "@angular/router";

export const canDeactivateGuard:CanDeactivateFn<unknown>=(component, currentRoute, currentState, nextState)=>{
    alert ('Bạn có chắc chắn muốn rời trang web') 
    return true
}