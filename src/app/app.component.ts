import { Component, ViewChild  } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menus-analisis';
  
  @ViewChild('americamenu') americamenu: MatMenuTrigger;
  @ViewChild('europamenu') europamenu: MatMenuTrigger;

  constructor() {
    this.initKeyboardEvents();
  }

  initKeyboardEvents() {
    window.addEventListener('keydown', (event: KeyboardEvent) => {
      // Fall back to event.which if event.keyCode is null
      console.log('event key', event.keyCode)
      this.openMenu(event.keyCode);
     });
  }


  openMenu(key: number) {
    switch(key){
      case 49: {
        if(this.americamenu.menuOpen) {
          this.americamenu.closeMenu();
        } else {
          this.americamenu.openMenu();
        }
        break;
      }
      case 50: {
        if(this.europamenu.menuOpen) {
          this.europamenu.closeMenu();
        } else {
          this.europamenu.openMenu();
        }
        break;
      }
    }
  }
}
