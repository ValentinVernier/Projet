import { Injectable } from "@angular/core";


@Injectable()

export class BananeService {

    fruit:string = "Banane Plantain";

    constructor(){}

    getFruit(){
        console.log(this.fruit);
    }


} 