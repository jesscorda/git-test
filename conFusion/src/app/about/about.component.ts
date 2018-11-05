import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  leader:Leader[]=LEADERS;

  constructor(private leaderService: LeaderService) { }

  ngOnInit() {
    this.leader = this.leaderService.getLeader();
  }

}
