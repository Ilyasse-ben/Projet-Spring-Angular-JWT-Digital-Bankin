import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client-service';
import { ClientDATA } from '../../Module/client';
import { FormBuilder, FormGroup, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  imports: [ɵInternalFormsSharedModule,ReactiveFormsModule],
  templateUrl: './client.html',
  styleUrl: './client.css',
})
export class Client implements OnInit{

  data!:Array<ClientDATA>;
  errorMessage!:string;
  formgroup!:FormGroup;

  constructor(private clientSer:ClientService,private fb:FormBuilder, private router:Router){

  }

  ngOnInit(): void {
    this.formgroup=this.fb.group({
      keyword:this.fb.control("")
    });
    this.getAllData();
    
  }
  getAllData(){
    this.clientSer.getAllclient().subscribe({
      next:(data)=>{this.data=data; },
      error: (err) => { this.errorMessage = err.message; console.log(err.message) }
    });
  }
  serchClients(){
    this.clientSer.getAllclientByKewords(this.formgroup.value.keyword).subscribe({
      next:(data)=>{this.data=data},
      error:(err)=>{this.errorMessage=err}
    })
  }
  deleteClient(clt:ClientDATA){
    console.log(clt)
    let cltDelet=clt;
    let confimrDelet=confirm("vous avez sur que vous devez supprimer le client "+clt.name)
    if(confimrDelet){
      this.clientSer.deleteClient(clt.id).subscribe({
        next: (data) => { alert("le client " + clt.name + " est bien supprimer"); this.ngOnInit},
        error: (err) => { this.errorMessage = err.message }
      })
    }
   
  }
  goToAddCustemer(){
    this.router.navigateByUrl("newClient")

  }
}
