import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { InteractionStatus } from '@azure/msal-browser';
import { Subject, interval, timer } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserService } from './services/user.service';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'exampleRoles';
  
  isIframe: boolean = false;

  loginDisplay: boolean = false;

  private readonly _destroying$ = new Subject<void>();

  constructor(private broadcastService: MsalBroadcastService, private authService: MsalService,
              private userService: UserService, private spinnerService: SpinnerService ) { }

  ngOnInit() {
    this.isIframe = window !== window.parent && !window.opener;

    this.broadcastService.inProgress$
    .pipe(
      filter((status: InteractionStatus) => status === InteractionStatus.None),
      takeUntil(this._destroying$)
    )
    .subscribe(() => {
      this.setLoginDisplay();
    })

  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  logout() { // Add log out function here

    this.userService.userLogOut();

    const logoutAction = timer(2000)

    logoutAction.subscribe(() =>{
      this.authService.logoutRedirect({
        postLogoutRedirectUri: `${environment.login}`
      });
    })

    window.localStorage.clear();

  }


  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}