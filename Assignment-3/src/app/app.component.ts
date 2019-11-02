import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isOpened = false;
  logs = [];

  onDisplayDetailsClick(): void {
    this.isOpened = !this.isOpened;
    const currentTime = new Date();
    this.logs.push(`Time: ${currentTime}; Action: ${this.isOpened ? 'Shown' : 'Hidden'}`);
  }
}
