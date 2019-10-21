import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    templateUrl: './signup.component.html',
})
export class SignupComponent {

    userName = '';
    password = '';
    roleId = '';
    tavernsName = '';
    //tavern : tavern = {tavernname : "Moes", id : 1};
    taverns = ['Moe\'s Tavern',
           'Joe\'s Tavern',
           'Blasphemy Bar',
           'Rejected Reality',
           'Brianna\'s'];
        
           constructor(private router: Router, private authService: AuthService) {}

    
           login(): void {
            let user = {
                userName: this.userName,
                password: this.password,
                roleId : this.roleId,
                tavernsName : this.tavernsName,
                
            }

            console.log(JSON.stringify(user));
            user.userName = '';
            user.password = ''; 
            user.roleId = '';
            user.tavernsName = '';

    
            
    }

    
    cancel(): void {      
            this.router.navigateByUrl('/login');
            
        }

}
