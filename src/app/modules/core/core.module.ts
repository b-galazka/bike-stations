import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { translocoConfig, TRANSLOCO_CONFIG, TRANSLOCO_LOADER } from '@ngneat/transloco';

import { environment } from 'src/environments/environment';
import { ENVIRONMENT } from './injection-tokens/environment.token';
import { TranslationsLoaderService } from './services/translations-loader.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    { provide: ENVIRONMENT, useValue: environment },

    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['pl'],
        prodMode: environment.production,
        defaultLang: 'pl',

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
