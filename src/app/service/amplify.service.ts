import { Injectable } from '@angular/core';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import awsmobile from '../../aws-exports';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AmplifyService {

  amplifyClient;

  constructor() {
    const client = new AWSAppSyncClient({
      url: awsmobile.aws_appsync_graphqlEndpoint,
      region: awsmobile.aws_appsync_region,
      auth: {
        type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
        jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken()
      }
    });
    this.amplifyClient = client;
  }

  amplifyAuth() {
    console.log('amplifyAuth');
    return this.amplifyClient.hydrated();
  }
}
