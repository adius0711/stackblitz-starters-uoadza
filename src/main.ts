import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/header/header.component';
import { UserComponent } from './app/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  template: `
    <app-header />
    <main>
    <ul id="users">
      <li>
      <app-user />
      </li>
    </ul>
    </main>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
