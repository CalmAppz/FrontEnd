import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lobby',
  imports: [],
  templateUrl: './lobby.html',
  styleUrl: './lobby.css'
})
export class Lobby implements OnInit {
  username: string = '';
  currentTime: string = '';
  whatsappLink: string = 'https://wa.me/994221927';
  whatsappLinkAdmin: string = 'https://wa.me/984540420';

  constructor(private loginService: LoginService) {}
  ngOnInit(): void {
    this.updateTime();
    this.username = this.loginService.showUsername();
    setInterval(() => {
      this.updateTime();
    }, 1000); // Actualiza la hora cada segundo
  }

  updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
}