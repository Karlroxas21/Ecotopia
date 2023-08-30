import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';  

  constructor(private http: HttpClient, private router: Router) { }

  login(){
    const formData = {
      username: this.username,
      password: this.password
    }

    this.http.post('http://localhost:80/login', formData).subscribe((response: any) =>{
      localStorage.setItem('token', response.token);

      // Insert toaster here "Success logging in"
      this.router.navigate(['/admin-current-issues-ph']);

    },(error) =>{
      console.error('Login failed:', error);
    })

  }

}
