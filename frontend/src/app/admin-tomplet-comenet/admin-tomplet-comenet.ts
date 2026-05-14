import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-tomplet-comenet',
  imports: [Navbar,RouterLink,RouterOutlet],
  templateUrl: './admin-tomplet-comenet.html',
  styleUrl: './admin-tomplet-comenet.css',
})
export class AdminTompletComenet {}
