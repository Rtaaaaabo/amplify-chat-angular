import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Amplifyについて
import Amplify from 'aws-amplify';
import PubSub from '@aws-amplify/pubsub';
import API from '@aws-amplify/api';
import awsmobile from './aws-exports';
import { Auth } from 'aws-amplify';

Amplify.configure(awsmobile);
API.configure(awsmobile);
PubSub.configure(awsmobile);
Auth.configure(awsmobile);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


