import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment'
import { Title } from '@angular/platform-browser';
import { LoginService } from './login.service';

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
    private toastr: ToastrService,
    private titleService: Title,
    private loginService: LoginService) { }

  ngOnInit() {
    this.titleService.setTitle("Admin Login");
  }

  sessionCheck(): boolean {
    if (!localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  redirectAdmin() {
    this.router.navigate(['/admin-news']);
  }

  superAdminPage(){
    if(localStorage.getItem('role') === 'superadmin'){
      this.router.navigate(['/admin-account-create']);
      return;
    }
    this.router.navigate(['/admin-news']);
  }

  login() {
    if (!this.username || !this.password) {
      this.toastr.error('Username and password are required.', 'Login Failed');
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

    this.loginService.login(this.username, this.password).subscribe(account => {

      if(account.status === 'Not Verified'){
        this.toastr.error('Account is not verified.', "Login Failed");
        return;
      }

      if(account.status === 'Disabled'){
        this.toastr.error('Account is disabled. Contact your administrator', "Login Failed");
        return;
      }

      localStorage.setItem('token', account.token);
      localStorage.setItem('role', account.role);
      localStorage.setItem('username', account.username);

      // Reset login attempts and lastFailedLoginTime upon successful login
      this.loginAttempts = 0;
      localStorage.removeItem('lastFailedLoginTime');
      
      this.router.navigate(['/admin-news'])
      this.toastr.success('You have successfully logged in', 'Login Success!');
      
    },(err) =>{
      this.loginAttempts++;

      if(this.loginAttempts === 5){
        localStorage.setItem('lastFailedLoginTime', new Date().getTime().toString());

        this.toastr.error(
          'Too many login attempts. Please try again in 20minutes.',
          'Login Failed');
      }else{
        console.log(err);
        this.toastr.error('User is not authenticated. Please try again.', 'Login Failed')
      }
    })
  }

  // login() {
  //   if (!this.username || !this.password) {
  //     this.toastr.error('Username and password are required.', 'Login Failed');
  //     return;
  //   }

  //   // to check for harmful characters
  //   const harmfulCharsRegex = /[<>&'"`;@^$#%()*!]/;

  //   const lastFailedLoginTime = localStorage.getItem('lastFailedLoginTime');
  //   if (lastFailedLoginTime) {
  //     const currentTime = new Date().getTime();
  //     const timeDifference = currentTime - parseInt(lastFailedLoginTime, 10);

  //     // If less than 20 minutes (20 * 60 * 1000 milliseconds), show error and return
  //     if (timeDifference < 20 * 60 * 1000) {
  //       const remainingTime = Math.ceil((20 * 60 * 1000 - timeDifference) / 1000);
  //       this.toastr.error(
  //         `Too many login attempts. Please try again in ${remainingTime} seconds.`,
  //         'Login Failed'
  //       );
  //       return;
  //     }
  //   }

  //   const formData = {
  //     username: this.username,
  //     password: this.password,
  //   };

  //   this.http.post(`${environment.apiUrl}login`, formData).subscribe(
  //     (response: any) => {
  //       localStorage.setItem('token', response.token);

  //       // Reset login attempts and lastFailedLoginTime upon successful login
  //       this.loginAttempts = 0;
  //       localStorage.removeItem('lastFailedLoginTime');

  //       this.toastr.success('You have successfully logged in', 'Login Success!');
  //       this.router.navigate(['/admin-current-issues-ph']);
  //     },
  //     (error) => {
  //       this.loginAttempts++; // Increment login attempts

  //       if (this.loginAttempts === 5) {
  //         // Store the timestamp of the last failed login attempt
  //         localStorage.setItem('lastFailedLoginTime', new Date().getTime().toString());

  //         this.toastr.error(
  //           'Too many login attempts. Please try again in 20 minutes.',
  //           'Login Failed'
  //         );
  //       } else {
  //         this.toastr.error(
  //           'User is not authenticated. Please try again.',
  //           'Login Failed',
  //           error
  //         );
  //       }
  //     }
  //   );
  // }
}    