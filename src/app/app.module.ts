import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from "./app.routing";
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PublicComponent } from "./layout/public/public.component";
import { SecureComponent } from "./layout/secure/secure.component";
import { ManageComponent } from "./layout/manage/manage.component";
import { BlankComponent } from "./layout/blank/blank.component";
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SimpleNotificationsModule } from "angular2-notifications";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PublicComponent,
    SecureComponent,
    ManageComponent,
    BlankComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
