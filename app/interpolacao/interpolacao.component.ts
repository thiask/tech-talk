import { Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'interpolacao',
    templateUrl: 'interpolacao.component.html'
})
export class InterpolacaoComponent {
    url = ['http://fretebras.com.br', 'http://google.com.br'];

    urlImg = 'https://raw.githubusercontent.com/thiask/tek-talk/master/IMG_1314.JPG'

    getValor(){
        return 1+1;
    }
}
