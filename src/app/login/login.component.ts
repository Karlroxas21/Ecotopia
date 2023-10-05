import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';  
  loginAttempts: number = 0;

  constructor(private http: HttpClient, 
    private router: Router,
    private toastr: ToastrService) { }

  sessionCheck(): boolean{
    if(!localStorage.getItem('token')){

      return true;

    }

    return false;
  }

  redirectAdmin(){
    this.router.navigate(['/admin-current-issues-ph'])
  }


    login() {
      if (!this.username || !this.password) {
        this.toastr.error('Username and password are required.', 'Login Failed');
        return;
      }
    
      // to check for harmful characters
      const harmfulCharsRegex = /[<>&'"`;@^$#%()*!]/;
    
      if (harmfulCharsRegex.test(this.username) || harmfulCharsRegex.test(this.password)) {
        this.toastr.error('Username or password must not include any malicious or unsafe characters.', 'Login Failed');
        return;
      }
    
      const lastFailedLoginTime = localStorage.getItem('lastFailedLoginTime');
      if (lastFailedLoginTime) {
        const currentTime = new Date().getTime();
        const timeDifference = currentTime - parseInt(lastFailedLoginTime, 10);
    
        // If less than 20 minutes (20 * 60 * 1000 milliseconds), show error and return
        if (timeDifference < 20 * 60 * 1000) {
          const remainingTime = Math.ceil((20 * 60 * 1000 - timeDifference) / 1000);
          this.toastr.error(
            `Too many login attempts. Please try again in ${remainingTime} seconds.`,
            'Login Failed'
          );
          return;
        }
      }
    
      const formData = {
        username: this.username,
        password: this.password,
      };
    
      this.http.post('http://localhost:80/login', formData).subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token);
    
          // Reset login attempts and lastFailedLoginTime upon successful login
          this.loginAttempts = 0;
          localStorage.removeItem('lastFailedLoginTime');
    
          this.toastr.success('You have successfully logged in', 'Login Success!');
          this.router.navigate(['/admin-current-issues-ph']);
        },
        (error) => {
          this.loginAttempts++; // Increment login attempts
    
          if (this.loginAttempts === 5) {
            // Store the timestamp of the last failed login attempt
            localStorage.setItem('lastFailedLoginTime', new Date().getTime().toString());
    
            this.toastr.error(
              'Too many login attempts. Please try again in 20 minutes.',
              'Login Failed'
            );
          } else {
            this.toastr.error(
              'User is not authenticated. Please try again.',
              'Login Failed',
              error
            );
          }
        }
      );
    }
  }    