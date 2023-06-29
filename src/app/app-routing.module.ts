import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Pages/home/home.component';
import { LoginComponent } from './components/Pages/login/login.component';
import { RegisterComponent } from './components/Pages/register/register.component';
import { ChangePasswordComponent } from './components/Pages/change-password/change-password.component';
import { MenuDesktopComponent } from './components/modals/menu-desktop/menu-desktop.component';
import { SengEmailComponent } from './components/pages/seng-email/seng-email.component';
import { MenuMobileComponent } from './components/modals/menu-mobile/menu-mobile.component';
import { ButtonAceptarComponent } from './components/general/button-aceptar/button-aceptar.component';
import { ButtonPrimaryComponent } from './components/general/button-primary/button-primary.component';
import { LoaderComponent } from './components/general/loader/loader.component';
import { UsersComponent } from './components/pages/users/users.component';
import { RolsComponent } from './components/pages/rols/rols.component';
import { ContactenosComponent } from './components/pages/contactenos/contactenos.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/register',
    pathMatch:'full'
  },
  {
    path:'C',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'change-password',
    component: ChangePasswordComponent
  },
  {
    path:'send-email',
    component: SengEmailComponent
  },
  {
    path:'menu-desktop',
    component: MenuDesktopComponent
  },
  {
    path:'menu-mobile',
    component: MenuMobileComponent
  },
  {
    path:'button-aceptar',
    component: ButtonAceptarComponent
  },
  {
    path:'button-primary',
    component: ButtonPrimaryComponent
  },
  {
    path:'loader',
    component: LoaderComponent
  },
  {
    path:'users',
    component: UsersComponent
  },
  {
    path:'rols',
    component: RolsComponent
  },
  {
    path:'contactenos',
    component: ContactenosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
