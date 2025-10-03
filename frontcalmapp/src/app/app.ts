import { Component, OnInit, signal } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';  // Add this if you use menus
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule, NgIf,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('frontcalmapp');
   role: string = '';
   username: string = '';
   constructor(private loginService: LoginService, private router:Router) {}

   ngOnInit(): void {}
   verificar() {
    this.role = this.loginService.showRole();
    this.username = this.loginService.showUsername();
    return this.loginService.verificar();
  }

   eliminar(){
    sessionStorage.clear();
    console.log("se cerró sesión con éxito!!")
  }

  isAdmin() {
    return this.role === 'ADMIN';
  }

  isStudent() {
    return this.role === 'STUDENT';
  }

  isPsychologist() {
    return this.role === 'PSYCHOGIST';
  }
}
