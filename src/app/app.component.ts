import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { CommonModule } from '@angular/common';
import axios from 'axios';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public layoutOption: string;
  showHeader:boolean = true;
  showFooter:boolean = false;



  constructor(private router: Router) {
    // Removing Sidebar, Navbar, Footer for Documentation, Error and Auth pages
    router.events.forEach((event) => { 
      if(event instanceof NavigationStart) {
        if((event['url'] == '/general-pages/signin') || (event['url'] == '/general-pages/signup') || (event['url'] == '/general-pages/page-404') ) {
          this.showHeader = false;
          this.showFooter = false;
        } else {
          this.showHeader = true;
          this.showFooter = false;
        }

        if(window.matchMedia('(max-width: 991px)').matches) {
          document.querySelector('body').classList.remove('az-header-menu-show');
        }
      }
    });
  }

  ngOnInit() {
  
    axios.interceptors.response.use(function (response) {
      return response.data
    })
    // navbar backdrop for mobile only
    const navbarBackdrop = document.createElement('div');
    navbarBackdrop.classList.add('az-navbar-backdrop');
    document.querySelector('body').appendChild(navbarBackdrop);
  }

}
