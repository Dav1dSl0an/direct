import { Routes, RouterModule } from "@angular/router";
import {PublicComponent} from "./layout/public/public.component";
import {HomepageComponent} from "./homepage/homepage.component";
//import {SignupComponent} from "./auth/signup/signup.component";
//import {SigninComponent} from "./auth/signin/signin.component";
import {SecureComponent} from "./layout/secure/secure.component";
//import {LoggedInGuard} from "./auth/logged-in.guard";
//import {HomeComponent} from "./home/home.component";
//import {NewsComponent} from "./shared/news/news.component";
import {ManageComponent} from "./layout/manage/manage.component";
//import {LogoutComponent} from "./auth/logout/logout.component";




const APP_ROUTES: Routes = [
  
  {
    path: '', component: PublicComponent,
    children: [
      {path: '', component: HomepageComponent},
     // {path: 'signup', component: SignupComponent},
     // {path: 'signin', component: SigninComponent},
     // {path: 'contact', component: ContactIframeComponent},
     // {path: 'password-reset-by-email', component: PasswordresetbyemailComponent}
    ]
  },
  {path: 'members', component: SecureComponent,
    children: [
     // {path: 'home', component: HomeComponent, canActivate: [LoggedInGuard]},
     // {path: 'logout', component: LogoutComponent, canActivate: [LoggedInGuard]},

    ]},
  { path: 'manage', component: ManageComponent,
    children: [
    //  {path: 'news', component: NewsComponent}
    ]
  },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(APP_ROUTES);
