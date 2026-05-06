import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountBank, OpreationDATA, trnsaction, tronsfer } from '../../Module/client';

@Injectable({
  providedIn: 'root',
})
export class AcountService {
  api: string = "http://localhost:8080/api/accounts";
  apiOpreaDebit: string ="http://localhost:8080/api/opreration/debit"
  apiOpreaCredit: string = "http://localhost:8080/api/opreration/credit"
  apiOpreaTransfer: string = "http://localhost:8080/api/opreration/transfer"
  constructor(private http:HttpClient){}
  getAccount(id: string): Observable<AccountBank>{
    return this.http.get<AccountBank>(this.api+"/"+id);
  }
  debetOper(dto: trnsaction): Observable<OpreationDATA>{
    return this.http.post<OpreationDATA>(this.apiOpreaDebit,dto)
  }
  creditOper(dto: trnsaction): Observable<OpreationDATA> {
    return this.http.post<OpreationDATA>(this.apiOpreaCredit, dto)
  }
  trandferOper(dto: tronsfer): Observable<OpreationDATA> {
    return this.http.post<OpreationDATA>(this.apiOpreaTransfer, dto)
  }

}
