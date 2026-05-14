import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../service/login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{

  formgroup!:FormGroup;

  constructor(private fb:FormBuilder, private loginService:LoginService, private router:Router){
    this.formgroup=this.fb.group({
      userName:this.fb.control(''),
      password:this.fb.control('')
    })

  }

  ngOnInit(): void {
    
  }
  login(){
    console.log(this.formgroup.value)
    console.log()
    this.loginService.login(this.formgroup.value.userName, this.formgroup.value.password).subscribe({
      next:(data)=>{this.loginService.loadProfile(data),
        this.router.navigateByUrl("/admin")
      },
      error:(err)=>{console.log(err)}
    })
    
  }
}
