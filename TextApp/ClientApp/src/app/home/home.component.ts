import { Component } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public hubConnection: HubConnection;
  public messages: string[] = [];
  public message: string;

  ngOnInit() {
    let builder = new HubConnectionBuilder();

    // as per setup in the startup.cs
    this.hubConnection = builder.withUrl('/hubs/text').build();

    // message coming from the server
    this.hubConnection.on("Send", (message) => {
      debugger;
      //  this.messages.push(message);
      this.message = message;
    });

    // starting the connection
    this.hubConnection.start();
  }

  send() {
    debugger;
    // message sent from the client to the server
    this.hubConnection.invoke("Text", this.message);
    //this.message = "";
  }
}
