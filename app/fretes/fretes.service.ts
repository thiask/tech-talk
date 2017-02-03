import { Injectable } from '@angular/core';

@Injectable()

export class FretesService
{
    getFretes(){
        return ['Catalao', 'Caldas Novas', 'Goiania', 'Catilandia'];
    }
}