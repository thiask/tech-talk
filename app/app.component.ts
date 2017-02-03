import { Component } from '@angular/core';

import { TesteComponent } from './teste/teste.component';
import { FretesComponent } from './fretes/fretes.component';

import { InterpolacaoComponent } from './interpolacao/interpolacao.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Fretebras</h1>
        <p>(!ruitaoTemQuePedirPermissaoParaPegarCargas)</p>
        <teste></teste>
        <lista-fretes></lista-fretes>
        <interpolacao></interpolacao>
    `,
    directives: [TesteComponent, FretesComponent, InterpolacaoComponent]
})
export class AppComponent { }
