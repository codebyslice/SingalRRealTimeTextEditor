import { Component } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public hubConnection: HubConnection;
  public message: string;

  ngOnInit() {
    let builder = new HubConnectionBuilder();

    // this should match the startup.cs
    this.hubConnection = builder.withUrl('/hubs/text').build();

    // message coming from the server
    this.hubConnection.on("Send", (message) => {
      this.message = message;
    });

    this.hubConnection.start();
  }

  send() {
    // message sent from the client to the server
    this.hubConnection.invoke("Text", this.message);
  }
}
