import { style } from '@angular/animations';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    const chk = document.getElementById('chk')
  chk!.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})
  }


}
