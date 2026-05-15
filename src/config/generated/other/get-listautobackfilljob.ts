import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_listautobackfilljobEndpoint: ApiEndpoint = {
  "id": "get-listautobackfilljob",
  "name": "List all auto backfill jobs",
  "description": "",
  "method": "GET",
  "path": "/v1/uno/data-backfill/propagation/jobs",
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
