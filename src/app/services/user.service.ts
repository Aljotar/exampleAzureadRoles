import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventType, EventMessage, AuthenticationResult } from '@azure/msal-browser';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { filter } from 'rxjs';
import { protectedResources } from 'src/auth-config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public requestAcces: string | undefined;

  todoListEndpoint: string = protectedResources.todoListApi.endpoint

  constructor(public http: HttpClient, 
              private authService: MsalService, 
              private msalBroadcastService: MsalBroadcastService) 
              { }

getProfile() {
  this.msalBroadcastService.msalSubject$
    .pipe(filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS || msg.eventType === EventType.SSO_SILENT_SUCCESS))
    .subscribe((result: EventMessage) =>{
        const payload = result.payload as AuthenticationResult;
        this.authService.instance.setActiveAccount(payload.account);
        this.requestAcces = `bearer ${payload.accessToken}`;

        return this.requestAcces
    })
}

getEmployeeData() {
  this.http.get(this.todoListEndpoint)
    .subscribe(resp =>{
        console.log(resp);
    })
}


}
