import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import {
  translocoConfig,
  TranslocoModule,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER
} from '@ngneat/transloco';
import * as Leaflet from 'leaflet';
import 'leaflet.gridlayer.googlemutant';

import { config } from 'src/config';
import { environment } from 'src/environments/environment';
import { CONFIG } from './injection-tokens/config.token';
import { ENVIRONMENT } from './injection-tokens/environment.token';
import { LEAFLET } from './injection-tokens/leaflet.token';
import { NAVIGATOR } from './injection-tokens/navigator.token';
import { TranslationsLoaderService } from './services/translations-loader.service';

@NgModule({
  imports: [HttpClientModule, TranslocoModule],
  providers: [
    { provide: ENVIRONMENT, useValue: environment },
    { provide: CONFIG, useValue: config },
    { provide: NAVIGATOR, useValue: navigator },
    { provide: LEAFLET, useValue: Leaflet },

    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en'],
        prodMode: environment.production,
        defaultLang: 'en',

        flatten: {
          aot: environment.production
        }
      })
    },

    {
      provide: TRANSLOCO_LOADER,
      useClass: TranslationsLoaderService
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import Core modules in the AppModule only.'
      );
    }
  }
}
