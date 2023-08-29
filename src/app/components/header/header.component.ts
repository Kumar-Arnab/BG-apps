import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GitaService } from 'src/app/services/gita.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private router: Router,
    private gitaService: GitaService
  ) {}

  chapterList() {
    this.router.navigate(['/chapters']);
  }

  logout() {
    this.gitaService.logout().subscribe(res => {
      localStorage.removeItem('access_token');
      this.router.navigate(['/login']);
    });
  }

}
