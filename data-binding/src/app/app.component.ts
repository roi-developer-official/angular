import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name:'Testserver', content: 'just a test'}];
  
  onServerAdded(serverData :{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {bluePrintName:string,bluePrintContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.bluePrintName,
      content: blueprintData.bluePrintContent
    });
  }

}
