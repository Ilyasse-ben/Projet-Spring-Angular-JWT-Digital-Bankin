import { Routes } from '@angular/router';
import { Account } from './account/account';
import { App } from './app';
import { Client } from './client/client';
import { NewClient } from './new-client/new-client';
import { Login } from './login/login';
import { AdminTompletComenet } from './admin-tomplet-comenet/admin-tomplet-comenet';


export const routes: Routes = [
   
    {path:"",redirectTo:"/login",pathMatch:"full"},
    { path: "login", component: Login },

    {
        path: "admin", component: AdminTompletComenet, children: [
            { path: "accounts", component: Account },
            { path: "newClient", component: NewClient },
            { path: "clients", component: Client },
        ]
    },
   
];

