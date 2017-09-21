import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {
  public options = {
    timeOut: 5000,
    lastOnBottom: true,
    clickToClose: true,
    maxLength: 0,
    maxStack: 7,
    showProgressBar: true,
    pauseOnHover: true,
    preventDuplicates: false,
    preventLastDuplicates: 'visible',
    rtl: false,
    animate: 'fromRight',
    position: ['right', 'bottom']

  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  errorDestroyed (event){
    console.log(event);
    if (event.title=="Congrats! Your Account has been created. You will be redirected to the login page."){
      this.router.navigate(['/signin', {login: 'Success'}]);
    }
    return null;

  }

}
