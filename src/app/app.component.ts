import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inform2';

  constructor(private router: Router) {}

  navigateToView() {
    this.router.navigate(['/view']);
  }
}
