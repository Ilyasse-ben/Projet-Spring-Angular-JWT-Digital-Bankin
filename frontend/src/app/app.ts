import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './inter/app-http-interceptor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }
  ],
})
export class App {
  protected readonly title = signal('frontend');
}
