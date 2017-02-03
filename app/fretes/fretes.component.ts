import { Component } from '@angular/core';
import { FretesService } from './fretes.service'

@Component({
    moduleId: module.id,
    selector: 'lista-fretes',
    // template: `
    // <br>
    // <h3>Cidades próximas com cargas para {{ motorista }}</h3>
    // <ul>
    //     <li *ngFor="let frete of fretes">
    //         {{frete}}
    //     </li>
    // </ul>
    // `
    templateUrl: 'fretes.component.html',
    providers: [FretesService]
})

export class FretesComponent{
    motorista = 'Ruiter';
    fretes;

    constructor(getFretes: FretesService){
        this.fretes = getFretes.getFretes();
    }
}
