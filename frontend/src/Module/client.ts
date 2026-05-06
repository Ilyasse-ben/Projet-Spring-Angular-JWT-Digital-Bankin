export interface ClientDATA{
    id:number,
    name:string,
    email:string
}
export interface OpreationDATA{
    id:number,
    operationDate:Date,
    type:string,
    amount:number
}
export interface AccountBank{
    id:string,
    balance:number,
    createdAt:Date,
    customer:ClientDATA,
    operations:OpreationDATA[]
}
export interface trnsaction{
    acountId:string,
    amount:number,
    desp:string,
}
export interface tronsfer {
    fromAccount: string,
    toAccount:string,
    amount: number,
    desp: string,
}