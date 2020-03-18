import { Injectable } from "@angular/core";


@Injectable()
export class Globals{
    backend="http://127.0.0.1:8000";
    backendEndpoint(){
        return this.backend
    }
}