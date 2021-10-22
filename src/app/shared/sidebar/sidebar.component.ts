import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menus: any=[];

  constructor() { }

  ngOnInit() {

    axios.get('/assets/menus.json').then(response => (
      this.menus = response.data
    ));
  }

}
