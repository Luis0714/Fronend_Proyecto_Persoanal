import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpInterceptor } from '@angular/common/http';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from '@angular/cdk/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/masterPage/header/header.component';
import { FooterComponent } from './components/masterPage/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TimeResponseInterceptor } from './interceptors/time-response.interceptor';
import { TokenInterceptor } from './interceptors/Token/token.interceptor';
import { HomeComponent } from './components/Pages/home/home.component';
import { NotFoundComponent } from './components/Pages/Errors/not-found/not-found.component';
import { InternalServerErrorComponent } from './components/Pages/Errors/internal-server-error/internal-server-error.component';
import { LoginComponent } from './components/Pages/login/login.component';
import { RegisterComponent } from './components/Pages/register/register.component';
import { ResetPasswordComponent } from './components/Pages/reset-password/reset-password.component';
import { ChangePasswordComponent } from './components/Pages/change-password/change-password.component';
import { SengEmailComponent } from './components/pages/seng-email/seng-email.component';
import { MenuDesktopComponent } from './components/modals/menu-desktop/menu-desktop.component';
import { MenuMobileComponent } from './components/modals/menu-mobile/menu-mobile.component';
import { ButtonAceptarComponent } from './components/general/button-aceptar/button-aceptar.component';
import { ButtonPrimaryComponent } from './components/general/button-primary/button-primary.component';
import { LoaderComponent } from './components/general/loader/loader.component';
import { UsersComponent } from './components/pages/users/users.component';
import { HomeSingOutComponent } from './components/Pages/home-sing-out/home-sing-out.component';

import 'firebase/compat/storage';
import { RolsComponent } from './components/pages/rols/rols.component';
import { ContactenosComponent } from './components/pages/contactenos/contactenos.component'
import {DialogModule} from '@angular/cdk/dialog';
import { ResponseModalComponent } from './components/modals/response-modal/response-modal.component';
import { ConfimationModalComponent } from './components/modals/confimation-modal/confimation-modal.component';
import { JutificationModalComponent } from './components/modals/jutification-modal/jutification-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    InternalServerErrorComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    SengEmailComponent,
    MenuDesktopComponent,
    MenuMobileComponent,
    ButtonAceptarComponent,
    ButtonPrimaryComponent,
    LoaderComponent,
    HomeSingOutComponent,
    UsersComponent,
    RolsComponent,
    ContactenosComponent,
    ResponseModalComponent,
    ConfimationModalComponent,
    JutificationModalComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    CdkAccordionModule,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    MatSidenavModule,
    DialogModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TimeResponseInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
