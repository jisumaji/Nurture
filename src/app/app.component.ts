import { Component } from '@angular/core';
import { IToggle } from './services/IToggle'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nurture';
  collapsed = false;
  screenWidth = 0;
  toggleSide(data: IToggle): void {
    this.collapsed = data.collapsed;
    this.screenWidth = data.screenWidth
  }
}
