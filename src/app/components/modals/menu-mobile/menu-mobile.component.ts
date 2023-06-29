import { Component, Input } from '@angular/core';
import { faRightFromBracket, faEnvelope, faXmark,faUsers,faPhone, faUserSecret} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent {
  faRightFromBracket = faRightFromBracket;
  faUsers = faUsers;
  faPhone = faPhone;
  faUserSecret = faUserSecret;
  faEnvelope = faEnvelope;
  faXmark = faXmark;
  @Input() showMenu: boolean = false;
  @Input() handleClose: (() => void) | undefined;

  closeMenu(){
    this.showMenu = !this.showMenu;
  }
}


