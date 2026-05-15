import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_sourcecomponentdetailsEndpoint: ApiEndpoint = {
  "id": "get-sourcecomponentdetails",
  "name": "List all details of source components",
  "description": "",
  "method": "GET",
  "path": "/deployment-manager/deployment_artifacts/retrieve-settings",
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
