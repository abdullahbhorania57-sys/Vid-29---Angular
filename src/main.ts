import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="container">
      <h1>Angular + GitHub Actions</h1>
      <p>My first automated Angular build workflow.</p>
      <span>Build → Test → Deploy</span>
    </main>
  `,
  styles: [`
    :host { display: block; min-height: 100vh; }
    .container {
      max-width: 700px;
      margin: 100px auto;
      padding: 40px;
      text-align: center;
      font-family: Arial, sans-serif;
    }
    h1 { margin-bottom: 12px; }
    p { margin-bottom: 24px; }
    span {
      display: inline-block;
      padding: 10px 16px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
  `]
})
export class AppComponent {}

bootstrapApplication(AppComponent).catch(err => console.error(err));
