import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  topped=false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll',['$event'])
  scroll(event){
    this.topped=window.pageYOffset>75;
  }
}
