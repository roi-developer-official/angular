import { Component, EventEmitter, Output } from '@angular/core'
import {RouterLink} from '@angular/router'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: []

})
export class Header{
    @Output() featureSelected = new EventEmitter<string>();


    onSelect(feature:string){
        this.featureSelected.emit(feature)
    }

}