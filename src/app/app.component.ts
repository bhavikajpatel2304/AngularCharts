import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-frontend-angular';
  showHeader: boolean = true;

  constructor(private router: Router) {
    router.events.subscribe((val:any) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/dashboard') {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    });
  }
}
