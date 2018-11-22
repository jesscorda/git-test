import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
      expand()
  ]
})
export class AboutComponent implements OnInit {

  leader:Leader[]=LEADERS;

  constructor(private leaderService: LeaderService) { }

  ngOnInit() {
    this.leader = this.leaderService.getLeader();
  }

}
