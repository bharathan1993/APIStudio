import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_listbookingdatebackfilljobsEndpoint: ApiEndpoint = {
  "id": "get-listbookingdatebackfilljobs",
  "name": "List all booking date backfill jobs",
  "description": "",
  "method": "GET",
  "path": "/v1/uno/data-backfill/bookingdate/jobs",
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
