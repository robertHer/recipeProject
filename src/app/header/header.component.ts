import { Component , Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
@Output() featureSelected = new EventEmitter<string>();

    selectedFeature(feature: string){
this.featureSelected.emit(feature);
    }
    
}