import { Component, OnInit } from '@angular/core';
import { AdminAccountCreationService } from './admin-account-create.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-account-create',
  templateUrl: './admin-account-create.component.html',
  styleUrls: ['./admin-account-create.component.css']
})
export class AdminAccountCreateComponent implements OnInit {

  accounts!: any[];
  selectedAccount: any;
  editingAccount: any;

  constructor(private accountService: AdminAccountCreationService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  accountModel = {
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    full_name: '',
    phone_number: '',
    role: '',
    status: 'Not Verified'
  };

  passwordVisible = false;
  confirmPasswordVisible = false;

  isPasswordValid() {
    const passwordRegex = new RegExp('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}');
    return passwordRegex.test(this.accountModel.password);
  }

  isConfirmPasswordValid() {
    return this.accountModel.password === this.accountModel.confirmPassword;
  }

  isPhoneNumberValid() {
    const numberRegex = new RegExp('[0-9]*');
    return numberRegex.test(this.accountModel.phone_number);
  }

  newAdminAccount(form: NgForm) {
    if (form.valid && this.isPasswordValid() && this.isConfirmPasswordValid() && this.isConfirmPasswordValid()) {
      this.createAccount(this.accountModel);
      this.toastr.success(this.accountModel.email, "Email has been sent to: ", {
        timeOut: 0, extendedTimeOut: 0,
        closeButton: true, progressBar: false
      })
      this.clearAccountModel();
    }

    if (!this.isPhoneNumberValid()) {
      return;
    }
  }

  togglePasswordVisibility() {
    const passwordField = document.getElementById('InputPassword') as HTMLInputElement;

    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      this.passwordVisible = true;
    } else {
      passwordField.type = 'password';
      this.passwordVisible = false;
    }
  }

  toggleConfirmPasswordVisibility() {
    const confirmPasswordField = document.getElementById('InputConfirmPassword') as HTMLInputElement;

    if (confirmPasswordField.type === 'password') {
      confirmPasswordField.type = 'text';
      this.confirmPasswordVisible = true;
    } else {
      confirmPasswordField.type = 'password';
      this.confirmPasswordVisible = false;
    }
  }

  clearAccountModel() {
    this.accountModel = {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      full_name: '',
      phone_number: '',
      role: '',
      status: 'Not Verified'
    };
  }

  getAccount(id: string) {
    this.accountService.getAccount(id).subscribe(accounts => {
      return accounts;
    })
  }

  getAccounts() {
    this.accountService.getAccounts().subscribe(accounts => {
      this.accounts = accounts;
    })
  }

  deleteAccount(account: any): void {
    if (account.default === 'true') {
      this.toastr.error('You cannot delete default account!');
      return;
    }
    
    this.accountService.deleteAccount(account._id).subscribe(() => {
      this.accounts = this.accounts.filter(account => account.id !== account._id);
      this.toastr.success(account.username, "Deleted user: ");
    });

  }

  createAccount(account: any) {
    this.accountService.createAccount(account).subscribe(newAccount => {
      this.accounts.push(newAccount);
    })
  }

  updateAccount(id: string, account: any): void {
    this.accountService.updateAccount(id, account).subscribe(updatedAccount => {
      const index = this.accounts.findIndex(account => account.id === id);
      this.accounts[index] = updatedAccount;
      this.toastr.success(account.username, "Updated user: ");
    });
  }

  selectAccount(account: any): void {
    this.editingAccount = { ...account };
  }

  doesChange() {

  }

}
