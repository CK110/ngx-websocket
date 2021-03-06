import { Component } from '@angular/core';
import {WebsocketService} from '../websocket/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  messageList: any[] = [];

  message: any = '';

  constructor(public websocketService: WebsocketService) {
    this.websocketService.getMessage().subscribe((message) => {
      if(message.data) {
        this.messageList.push(message.data);
      }
    });
  }

  send() {
    this.websocketService.send(this.message);
  }

  close() {
    this.websocketService.close();
  }


}
