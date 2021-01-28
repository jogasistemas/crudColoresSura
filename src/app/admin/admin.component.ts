import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  template: `
    <app-header [user]="user" (logout)="logout()"></app-header>
    <section class="hero is-fullheight-with-navbar is-light">
        <div class="hero-body">
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </div>
        <div class="hero-foot">
            <app-footer></app-footer>
        </div>
    </section>
  `,
  styles: [`
    .hero-body {
        align-items: flex-start !important;
    }
  `]
})
export class AdminComponent implements OnInit {
  user: User;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.currentUserValue;
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

}
