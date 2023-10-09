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
  output='';
  updateUser = false;
  

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
    this.updateUser = true;

    setTimeout(()=>{
      this.username= '';
      this.output = '';
    },2000);
  }

}
