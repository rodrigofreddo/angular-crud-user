import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public userID: number = 0;

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.userID = params['id']);
    console.log(this.userID);
  }

  ngOnInit(): void {
    
  }

}
