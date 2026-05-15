import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updateopenpaymentmethodtypeEndpoint: ApiEndpoint = {
  "id": "put-updateopenpaymentmethodtype",
  "name": "Update a custom payment method type",
  "description": "",
  "method": "PUT",
  "path": "/open-payment-method-types/{paymentMethodTypeName}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "paymentMethodTypeName",
      "label": "Payment Method Type Name",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "entityId",
      "label": "Entity Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "fields",
      "label": "Fields",
      "type": "array",
      "required": true,
      "itemType": "object",
      "itemFields": [
        {
          "name": "checksum",
          "label": "Checksum",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "defaultValue",
          "label": "Default Value",
          "type": "string",
          "required": false,
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "editable",
          "label": "Editable",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "index",
          "label": "Index",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "label",
          "label": "Label",
          "type": "string",
          "required": false,
          "maxLength": 30,
          "section": "Additional Fields"
        },
        {
          "name": "maxLength",
          "label": "Max Length",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "minLength",
          "label": "Min Length",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": false,
          "maxLength": 30,
          "section": "Account Settings"
        },
        {
          "name": "representer",
          "label": "Representer",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "required",
          "label": "Required",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": false,
          "enum": [
            "string",
            "date",
            "datetime",
            "number",
            "boolean"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "visible",
          "label": "Visible",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "label",
      "label": "Label",
      "type": "string",
      "required": true,
      "maxLength": 40,
      "section": "Additional Fields"
    },
    {
      "name": "methodReferenceIdField",
      "label": "Method Reference Id Field",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "subTypeField",
      "label": "Sub Type Field",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "tenantId",
      "label": "Tenant Id",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "userReferenceIdField",
      "label": "User Reference Id Field",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "internalName",
      "label": "Internal Name",
      "type": "string",
      "required": true,
      "maxLength": 19,
      "section": "Account Settings"
    },
    {
      "name": "isSupportAsyncPayment",
      "label": "Is Support Async Payment",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Payment Settings"
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
