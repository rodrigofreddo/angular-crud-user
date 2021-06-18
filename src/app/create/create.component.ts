import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  router: Router;
  constructor(router: Router) { 
    this.router = router;
  }

  fullname: string = '';
  username!: string;
  mail: string = '';
  password!: string;
  confirmPassword!: string;

  createUser() {
    console.log(this.fullname, this.username, this.password, this.mail, this.confirmPassword);
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
