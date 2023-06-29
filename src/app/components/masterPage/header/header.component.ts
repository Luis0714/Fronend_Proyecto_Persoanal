import { ChangeDetectorRef, Component, NgModule, ViewChild } from '@angular/core';
import { GetUserModel } from 'src/app/Models/Users/GetUserModel';
import { TokenService } from 'src/app/services/Tokens/token.service';
import { faAngleUp, faAngleDown, faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout'
import { faRightFromBracket,faUsers,faPhone, faUserSecret} from '@fortawesome/free-solid-svg-icons';
import { MenuMobileComponent } from '../../modals/menu-mobile/menu-mobile.component';
import { Dialog } from '@angular/cdk/dialog';
import { JutificationModalComponent } from '../../modals/jutification-modal/jutification-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  loggedIn : boolean = this.tokenService.getToken() != null;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faBars = faBars;
  faXmark = faXmark;
  faRightFromBracket = faRightFromBracket;
  faUsers = faUsers;
  faPhone = faPhone;
  faUserSecret = faUserSecret;
  user : GetUserModel | null = null;
  isMenuOpen: boolean = false;
  constructor(
   private tokenService:TokenService,
   private router : Router,
   private observer :BreakpointObserver,
   private cd:ChangeDetectorRef,
   private dialog:Dialog
  ){
   this.getUserLogged()
  }
  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
     console.log(this.isMenuOpen)
  }


  toggleMenuMobile() {
    this.isMenuOpen = !this.isMenuOpen;
    this.router.navigateByUrl('/menu-moblie')
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }
  ngOnInit(): void {
    this.getUserLogged()
  }

  signOff(){
    this.loggedIn = false;
    localStorage.removeItem('UserSesion')
    localStorage.removeItem('Token')
  }
  getUserLogged(){
    if(this.loggedIn){
      const userJSON = localStorage.getItem('UserSesion');
      if (userJSON) {
         this.user = JSON.parse(userJSON);
         console.log("Usuario en sesion: ", this.user)
      }
    }
  }
  openModal(){
    this.dialog.open(JutificationModalComponent,{
      minWidth:'300px',
      maxWidth:'50%'
    });
  }
}
