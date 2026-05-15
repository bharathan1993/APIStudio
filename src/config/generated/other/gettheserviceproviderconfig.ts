import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const gettheserviceproviderconfigEndpoint: ApiEndpoint = {
  "id": "gettheserviceproviderconfig",
  "name": "Retrieve the service provider configuration",
  "description": "",
  "method": "GET",
  "path": "/scim/v2/ServiceProviderConfig",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
