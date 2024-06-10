import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {

  userData: any;

   constructor(private userDataService: UserDataService) {}

  ngOnInit() {
    this.userData = this.userDataService.getUserData();
  }
}


