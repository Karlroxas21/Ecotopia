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

  login(){
    const formData = {
      username: this.username,
      password: this.password
    }

    this.http.post('http://localhost:80/login', formData).subscribe((response: any) =>{
      localStorage.setItem('token', response.token);

      this.toastr.success('You have successfully logged in', 'Login Success!');
      this.router.navigate(['/admin-current-issues-ph']);

    },(error) =>{
      this.toastr.error('User is not authenticated. Please try again.', 'Login Failed', error);
    })

  }

}
