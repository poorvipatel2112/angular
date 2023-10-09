import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
  addServerStatus = 'no server created';

  getServerStatus(){
    return this.serverStatus;
  }

  allowNewServer = false;

  constructor(){
    setTimeout(() =>{
      this.allowNewServer =  true;
    },2000);
  }

  createNewServer(){
    this.addServerStatus = 'server added';
  }
  
}
