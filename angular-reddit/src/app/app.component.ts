import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'angular-reddit';
  AddArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article value:${title.value} and link: ${link.value}`);
    return false;
  }
}
