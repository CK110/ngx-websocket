import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {WebsocketService} from './websocket.service';

export const ConfigToken = new InjectionToken<any>('USERCONFIG');


@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [],
})
export class WebsocketModule {
  static forRoot(config: any = null): ModuleWithProviders {
    return {
      ngModule : WebsocketModule,
      providers: [
        // useValue: bootstrap values
        { provide: ConfigToken, useValue: config },


        WebsocketService
      ]
    };
  }
}
