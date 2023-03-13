import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventType, EventMessage, AuthenticationResult } from '@azure/msal-browser';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { filter, Observable } from 'rxjs';
import { protectedResources } from 'src/auth-config';
import { tap, BehaviorSubject } from 'rxjs'
import { User } from '../auth/model/user.interface';
import { Profile } from '../auth/model/roles.type';


export interface AccionResult {
  descripcion: string,
  id: string
}

export interface UserResponse {
  failed: boolean,
  listUser: User,
  valid: boolean
}


@Injectable({
  providedIn: 'root'
})

export class UserService {

  private dataUser: User = {
    active: false,
    client: '',
    country: '',
    name: '',
    pbxExt: 0,
    profile: 'Admin',
    profileId: 0,
    userId: '',
  };

  private user = new BehaviorSubject<User>(this.dataUser);
  user$ = this.user.asObservable();

  public requestAcces!: string;

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
  return this.http.get<UserResponse>(this.todoListEndpoint)
          .subscribe(resp => {
              this.dataUser = resp.listUser;
              console.log(this.dataUser);
              console.log(this.user);
              console.log(this.user$);
          })
          

}

GetAccion(): Observable<AccionResult[]>{
  return this.http.get<AccionResult[]>('https://localhost:7261/api/Permiso/GetAccion');
}

}
