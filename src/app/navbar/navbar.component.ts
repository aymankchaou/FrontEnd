import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  supportLanguages = ['FR', 'EN'];


  constructor(private tokenStorageService: TokenStorageService,private router: Router,private translateService: TranslateService) {
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('FR');

    const browserlang = this.translateService.getBrowserLang();

    console.log('Browser Language => ', browserlang);

    if (this.supportLanguages.includes(browserlang)) {
      this.translateService.use(browserlang);
    }
   }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    
    this.router.navigate(['/home']);
  }
  useLang(lang: string) {
    console.log('selected language ==> ', lang);
    this.translateService.use(lang);
  }

}
