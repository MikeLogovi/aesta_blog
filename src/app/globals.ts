import { Injectable } from "@angular/core";


@Injectable()
export class Globals{
    backend="https://aestadmin.herokuapp.com";
    backendEndpoint(){
        return this.backend
    }
}