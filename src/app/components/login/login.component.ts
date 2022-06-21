import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    if (this.loginForm.valid) {
      this.user = Object.assign({}, this.loginForm.value);
      this.loginService.login(this.user).subscribe((data) => {
        if(data[0]){
          localStorage.setItem('token', "token geldi");
          alert('Giriş Başarılı');
        }
        else{
          alert("Wrong way")
        }

  })
}}}