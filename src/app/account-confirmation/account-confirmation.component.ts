import { Component, OnInit } from '@angular/core';
import { AccountConfirmationService } from './account-confirmation.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-confirmation',
  templateUrl: './account-confirmation.component.html',
  styleUrls: ['./account-confirmation.component.css']
})
export class AccountConfirmationComponent implements OnInit {

  constructor(private accountService: AccountConfirmationService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params =>{
      const emailToken = params['emailToken'];
      this.validateAccount(emailToken);
    })
  }
  

  validateAccount(emailToken: string){
    this.accountService.validateAccount(emailToken).subscribe(() =>{
      console.log("Account with email token: ", emailToken, "has been verified")
    })
  }
}
