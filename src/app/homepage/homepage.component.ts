import { Component, OnInit } from '@angular/core';
import { NotificationsService } from "angular2-notifications";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _service: NotificationsService) { }

  ngOnInit() {
  }

  goMe(){
    this._service.success("hello","dave");
  }

}
