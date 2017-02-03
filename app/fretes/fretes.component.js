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
var fretes_service_1 = require('./fretes.service');
var FretesComponent = (function () {
    function FretesComponent(getFretes) {
        this.motorista = 'Ruiter';
        this.fretes = getFretes.getFretes();
    }
    FretesComponent = __decorate([
        core_1.Component({
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
            providers: [fretes_service_1.FretesService]
        }), 
        __metadata('design:paramtypes', [fretes_service_1.FretesService])
    ], FretesComponent);
    return FretesComponent;
}());
exports.FretesComponent = FretesComponent;
//# sourceMappingURL=fretes.component.js.map