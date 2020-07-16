import { Injectable } from '@angular/core';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import awsmobile from 'src/aws-exports.js';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AmplifyService {

  _hc;

  constructor() {
    const client = new AWSAppSyncClient({
      url: awsmobile.aws_appsync_graphqlEndpoint,
      region: awsmobile.aws_appsync_region,
      auth: {
        type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
        jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken()
      }
    });
    this._hc = client;
  }

  hc() {
    return this._hc.hydrated();
  }
}
