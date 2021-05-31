import { InjectionToken } from "@angular/core";

import { AppConstants } from "./services/constants.service";

export const APP_CONSTANTS = new InjectionToken<AppConstants>('appConstants');

export const APP_RANDOM_STRING = new InjectionToken<string>(
    'appRandomString'
);