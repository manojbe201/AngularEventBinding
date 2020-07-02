import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

 @Output() serverCreated = new EventEmitter<{Servername: string, Servercontent:string}>();
 @Output() blueprintCreated= new EventEmitter<{Servername: string, Servercontent:string}>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  
   onAddServer() {
    this.serverCreated.emit({Servername: this.newServerName, Servercontent:this.newServerContent});
  }

   onAddBlueprint() { 
    this.blueprintCreated.emit({Servername: this.newServerName, Servercontent: this.newServerContent});

   }  
}
