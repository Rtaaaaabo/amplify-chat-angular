import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Amplify from 'aws-amplify';

// Amplifyについて
import PubSub from '@aws-amplify/pubsub';
import API from '@aws-amplify/api';
import awsmobile from './aws-exports';
import { Auth } from 'aws-amplify';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

Amplify.configure(awsmobile);
API.configure(awsmobile);
PubSub.configure(awsmobile);
Auth.configure(awsmobile);
