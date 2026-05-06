import { Routes } from '@angular/router';
import { Account } from './account/account';
import { App } from './app';
import { Client } from './client/client';
import { NewClient } from './new-client/new-client';


export const routes: Routes = [
    { path: "clients", component:  Client},
    { path: "accounts", component: Account },
    { path: "newClient", component: NewClient }
];

