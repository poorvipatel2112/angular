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
  serverName = '';
  //assignement 2
  username = '';
  output=''
  

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
    this.addServerStatus = 'server added with name ' + this.serverName;
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  //assignment 2
  updateUsername(){
    this.output = 'user saved with username ' + this.username;
    setTimeout(()=>{
      this.username= '';
      this.output = '';
    },1000);
  }

}
