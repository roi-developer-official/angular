import { Component, ElementRef, EventEmitter, Output,ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output('svCreated') serverCreated = new EventEmitter<{serverName:string, serverContent:string}>()
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>()
  @ViewChild('serverInput',{static: true}) serverInput : ElementRef
  newServerName = ''
  newServerContent = ''

  onAddServer(serverInput: HTMLInputElement) {
    console.log(serverInput) // the input element
    console.log(this.serverInput.nativeElement) // the input element although this is not a recommended way to directly get a element like this
    this.serverCreated.emit({serverName: this.newServerName, serverContent : this.newServerContent})
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent : this.newServerContent})
  }
}

