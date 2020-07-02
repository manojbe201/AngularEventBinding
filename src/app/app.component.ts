import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  serverElements = [{type:'server', name:'ABSAppServer01', content: 'Server Content'},
  {type:'blueprint', name:'ABSWebServer01', content: 'Server Content'}];

  onServerCreated(ServerData :{Servername :string, Servercontent:string}) {
   this.serverElements.push({
    type: 'server',
    name: ServerData.Servername,
    content: ServerData.Servercontent
    });
    }
  
     onBluePrintCreated(ServerData :{Servername :string, Servercontent:string}) {
   this.serverElements.push({
    type: 'blueprint',
    name: ServerData.Servername,
    content: ServerData.Servercontent
    });
  }
}

