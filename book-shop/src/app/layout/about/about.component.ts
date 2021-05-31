import { Component, Optional } from '@angular/core';
import { ConfigOptions } from 'src/app/models/config-options.model';

import { ConfigOptionsService } from 'src/app/services/config-options.service';
import { ConstantsService } from 'src/app/services/constants.service';
import {
  GeneratorFactory,
  GeneratorService,
} from 'src/app/services/generator.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { APP_CONSTANTS, APP_RANDOM_STRING } from '../../provider-tokens';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    GeneratorService,
    {
      provide: LocalStorageService,
      useClass: LocalStorageService,
    },
    {
      provide: APP_CONSTANTS,
      useValue: ConstantsService,
    },
    {
      provide: APP_RANDOM_STRING,
      useFactory: GeneratorFactory(10),
      deps: [GeneratorService],
    },
  ],
})
export class AboutComponent {
  configOptions: ConfigOptions;
  localStorage: Storage;

  constructor(
    @Optional() configOprtionService: ConfigOptionsService,
    @Optional() localStorageService: LocalStorageService,
    @Optional() generatorService: GeneratorService,
    private config: ConfigOptionsService
  ) {}

}
