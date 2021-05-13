import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.css']
})
export class ProfileMainComponent implements OnInit {


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onEditProfile() {
    this.router.navigate(['1'], {relativeTo: this.route});
  }

}
