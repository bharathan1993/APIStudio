import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createproductrateplandefinitionEndpoint: ApiEndpoint = {
  "id": "post-createproductrateplandefinition",
  "name": "Create a product rate plan definition",
  "description": "",
  "method": "POST",
  "path": "/v1/product-rateplan-definitions",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "productRatePlanChargeId",
      "label": "Product Rate Plan Charge Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "productRatePlanId",
      "label": "Product Rate Plan Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "productRatePlanChargeNumber",
      "label": "Product Rate Plan Charge Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "productRatePlanNumber",
      "label": "Product Rate Plan Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
