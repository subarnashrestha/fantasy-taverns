import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    templateUrl: './signup.component.html',
})
export class SignupComponent {

    userName = '';
    password = '';

    constructor(private router: Router, private authService: AuthService) {}

    login(): void {
        console.log(this.userName);
        console.log(this.password);
    }

    
    cancel(): void {      
            this.router.navigateByUrl('/login');
            
        }

}
