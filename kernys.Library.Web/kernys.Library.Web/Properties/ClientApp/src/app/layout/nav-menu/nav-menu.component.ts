import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/security/security.service';
import { Auth } from 'src/app/security/Auth';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit  {
  isExpanded = false;

  auth:Auth;

  constructor(private securityService:SecurityService){

    this.securityService.authEmitter.subscribe(resp=>
      this.auth=resp)}
 

  ngOnInit(){

    this.auth=this.securityService.getAuth();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
