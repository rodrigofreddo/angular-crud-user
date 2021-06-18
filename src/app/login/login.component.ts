import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @Input() title!: string;
  
  username!: string;
  password!: string;
  
  router: Router;
  constructor(router: Router) {
    this.router = router;
  }

  public authenticate() {
    this.router.navigate(['dashboard', this.username]);
  }

  ngOnInit(): void {
    
  }

}
