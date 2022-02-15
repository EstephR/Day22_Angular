import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  count: number = 0;

  constructor() { }

  increase() {
    return this.count += 10;
  }

  ngOnInit(): void {
  }

}
