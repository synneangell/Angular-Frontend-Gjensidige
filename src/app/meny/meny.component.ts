import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './meny.component.html',
  styleUrls: ['./meny.component.css']
})
export class Meny {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}