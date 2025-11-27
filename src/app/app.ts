import { MoviesListComponent } from './movies-list/movies-list';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, MoviesListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  // 1) Интерполяция
  title = 'About Us';
  mission = ' 🚀';

  // 2) Property binding
  photoUrl = 'https://picsum.photos/400/250'; // или 'assets/team.jpg'
  likes = 0;

  // 3) Event binding
  showThanks = false;
  like() { this.likes++; }
  toggle() { this.showThanks = !this.showThanks; }

  // 4) Two-way binding
  name = '';
  email = '';
  subscribed = false;
  get emailValid() { return /\S+@\S+\.\S+/.test(this.email); }
  subscribe() { if (this.emailValid) this.subscribed = true; }

  // Контакты через биндинги
  contactEmail = 'you@example.com';
  telegramHandle = '@your_handle';
  telegramUrl = 'https://t.me/your_handle';
  githubUrl = 'https://github.com/your-username';
}
