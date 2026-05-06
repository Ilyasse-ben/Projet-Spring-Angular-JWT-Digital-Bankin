import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientDATA } from '../../Module/client';
import { ClientService } from '../service/client-service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-new-client',
  imports: [ReactiveFormsModule],
  templateUrl: './new-client.html',
  styleUrl: './new-client.css',
})
export class NewClient implements OnInit{
  formgroup!:FormGroup;
  clientdata!:ClientDATA;
  constructor(private fb:FormBuilder, private clientService:ClientService, private route:Router){}
  ngOnInit(): void {
    this.formgroup=this.fb.group({
      name:this.fb.control("",[Validators.required,Validators.minLength(4)]),
      email:this.fb.control("",[Validators.email,Validators.required])
    })
    
  }
  addClient(){
    let newClient=this.formgroup.value;
    this.clientService.addclient(newClient).subscribe({
      next:(data)=>{
        alert("le client "+data.name+" d'email "+data.email+" est bien enrégéstré");
        this.formgroup.reset();
        this.route.navigateByUrl("/clients");
      },
      error:(err)=>{alert(err.message)}
    })

  }
}
