"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var InterpolacaoComponent = (function () {
    function InterpolacaoComponent() {
        this.url = ['http://fretebras.com.br', 'http://google.com.br'];
        this.urlImg = 'https://raw.githubusercontent.com/thiask/tek-talk/master/IMG_1314.JPG';
    }
    InterpolacaoComponent.prototype.getValor = function () {
        return 1 + 1;
    };
    InterpolacaoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'interpolacao',
            templateUrl: 'interpolacao.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], InterpolacaoComponent);
    return InterpolacaoComponent;
}());
exports.InterpolacaoComponent = InterpolacaoComponent;
//# sourceMappingURL=interpolacao.component.js.map