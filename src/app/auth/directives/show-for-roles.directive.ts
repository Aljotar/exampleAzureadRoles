import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { distinctUntilChanged, map, Subscription, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Profile } from '../model/roles.type';

@Directive({
  selector: '[akoShowForRoles]',
})
export class ShowForRolesDirective implements OnInit, OnDestroy {
  @Input('akoShowForRoles') allowedRoles?: Profile[];
  private sub?: Subscription;

  constructor(
    private authService: UserService,
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}
  ngOnInit(): void {
    this.sub = this.authService.user$
      
      .pipe(
        map((user) => Boolean(user && this.allowedRoles?.includes(user.profile))),
        distinctUntilChanged(),
        tap((hasRole) =>
          hasRole
            ? this.viewContainerRef.createEmbeddedView(this.templateRef)
            : this.viewContainerRef.clear()
        )
      )
      .subscribe();
      console.log(this.sub)
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
