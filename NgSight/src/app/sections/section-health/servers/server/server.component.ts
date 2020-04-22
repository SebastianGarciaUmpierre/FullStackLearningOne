import { Component, OnInit, Input } from '@angular/core';
import { Server} from '../../../../shared/server'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Input() serverInput: Server;
  color: string;
  buttonText: string;

  constructor() { }

  ngOnInit() {
    this.setServerStatus(this.serverInput.status)
  }

  setServerStatus(isOnline:boolean) {
    if (isOnline){
      this.serverInput.status = true;
      this.color = '#66cc66'
      this.buttonText = 'Shut Down'
    }
    else {
      this.serverInput.status = false;
      this.color = '#ff4d4d'
      this.buttonText = 'Start'
    }
  }

  toggleStatus(onlineStatus: boolean) {
    this.setServerStatus(!this.serverInput.status)
    
  }
}
