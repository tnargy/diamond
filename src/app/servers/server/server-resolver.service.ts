import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server > {

    constructor(private serversService: ServersService) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Server | Observable<Server > | Promise<Server > {
        return this.serversService.getServer(+route.params['id']);
    }

}
