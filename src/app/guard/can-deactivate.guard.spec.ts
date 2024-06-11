import { TestBed } from "@angular/core/testing";
import { canDeactivateGuard } from "./can-deactivate.guard";
import { CanDeactivateFn } from "@angular/router";

describe ('canDeactivateGuard', ()=>{
    const executeGuard: CanDeactivateFn = (...guardParameters)=>
        TestBed.runInInjectionContext(()=> canDeactivateGuard (...guardParameters))

    beforeEach(()=>{
        TestBed.configureTestingModule({})
    });
    it('should be created', () => {
        expect(executeGuard).toBeTruthy();
      });
    }
)