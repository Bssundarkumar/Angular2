import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  serverId: number= 10;
  serverStatus: string="offline";
  constructor() { 
    this.serverStatus=Math.random()> 0.5? 'online': 'offline';
  }

  ngOnInit() {
  }

  getColor(){
    return this.serverStatus === 'online' ? 'pink' : 'blue';
  }

}
