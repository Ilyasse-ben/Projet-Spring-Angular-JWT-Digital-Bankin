import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AcountService } from '../service/acount-service';
import { AccountBank, trnsaction, tronsfer } from '../../Module/client';

@Component({
  selector: 'app-account',
  imports: [ReactiveFormsModule],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account implements OnInit{
  formgroup!:FormGroup;
  accountData!:AccountBank;
  formgroupTron!:FormGroup;
  type: string = 'DEBIT';
  showMessage: boolean = false;
  constructor(private fb:FormBuilder,private accountser:AcountService, private fbTr:FormBuilder){

  }
  ngOnInit(): void {
    this.formgroup=this.fb.group({
      accountId:this.fb.control("")
    })
    this.formgroupTron=this.fbTr.group({
      montant:this.fbTr.control(""),
      desp: this.fbTr.control(""),
      accountIdTre:this.fbTr.control(""),
    })
  }
  saveOperation() {
    // ton code save ici (API ou logique)

    
  }
  sercheAccount(){
    this.accountser.getAccount(this.formgroup.value.accountId).subscribe({
      next:(data)=>{this.accountData=data},
      error:(err)=>{alert(err.message)}
    })

  }
  addOpreration(){
    let accountId = this.formgroup.value.accountId
    if (this.type =="TRANSFER"){
      let tronsaction: tronsfer = { fromAccount: accountId, toAccount: this.formgroupTron.value.accountIdTre, 
        amount: this.formgroupTron.value.montant, desp: this.formgroupTron.value.desp};
      this.accountser.trandferOper(tronsaction).subscribe({
        next: (data) => {
          this.saveOperation();
           this.formgroupTron.reset(); this.sercheAccount() },
        error: (err) => { alert(err.message) }
      })

    }else{
      let tronsaction: trnsaction = {
        acountId: accountId,amount: this.formgroupTron.value.montant, desp: this.formgroupTron.value.desp
      };
      if (this.type =="DEBIT")
        this.accountser.debetOper(tronsaction).subscribe({
          next: (data) => { 
            this.showMessage = true;

            setTimeout(() => {
              this.showMessage = false;
            }, 1000);
            this.formgroupTron.reset();  this.sercheAccount()},
          error:(err)=>{alert(err.message)}
        })
      else{
        this.accountser.creditOper(tronsaction).subscribe({
          next: (data) => { 
            this.saveOperation();
            this.formgroupTron.reset(); this.sercheAccount() },
          error: (err) => { alert(err.message) }
        })

      }

    }
  }
}
