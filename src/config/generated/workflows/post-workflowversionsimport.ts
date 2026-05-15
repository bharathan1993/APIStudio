import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_workflowversionsimportEndpoint: ApiEndpoint = {
  "id": "post-workflowversionsimport",
  "name": "Import a workflow version",
  "description": "",
  "method": "POST",
  "path": "/workflows/{workflow_id}/versions/import",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "workflow_id",
      "label": "Workflow Id",
      "type": "number",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "version",
      "label": "Version",
      "type": "string",
      "required": true
    },
    {
      "name": "activate",
      "label": "Activate",
      "type": "boolean",
      "required": false
    }
  ],
  "bodyFields": [
    {
      "name": "linkages",
      "label": "Linkages",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "linkage_type",
          "label": "Linkage Type",
          "type": "string",
          "required": false,
          "enum": [
            "Start",
            "Success",
            "Failure",
            "Iterate",
            "True",
            "False",
            "Approve",
            "Reject"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "source_task_id",
          "label": "Source Task Id",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "source_workflow_id",
          "label": "Source Workflow Id",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "target_task_id",
          "label": "Target Task Id",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "tasks",
      "label": "Tasks",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "action_type",
          "label": "Action Type",
          "type": "string",
          "required": false,
          "enum": [
            "Approval",
            "Attachment",
            "Billing::BillRun",
            "Billing::CurrencyConversion",
            "Billing::CustomInvoice",
            "Callout",
            "Cancel",
            "Create",
            "CustomObject::Create",
            "CustomObject::Delete",
            "CustomObject::Query",
            "CustomObject::Update",
            "Data::BillingPreviewRun",
            "Data::Link",
            "Delay",
            "Delete",
            "Download::SFTP",
            "Email",
            "Export",
            "File::CustomPDF::CustomDocument",
            "If",
            "InvoiceGenerate",
            "Iterate",
            "Logic::CSVTranslator",
            "Logic::Case",
            "Logic::CustomCode",
            "Logic::JSONTransform",
            "Logic::Lambda",
            "Logic::ResponseFormatter",
            "Logic::XMLTransform",
            "NewProduct",
            "Notifications::GoogleCloudPrint",
            "Notifications::PhoneCall",
            "Notifications::SMS",
            "Payment::GatewayReconciliation",
            "Payment::PaymentRun",
            "Query",
            "RemoveProduct",
            "Reporting::ReportData",
            "Reporting::RunReport",
            "Resume",
            "Suspend",
            "UI::Page",
            "UI::Stop",
            "Update",
            "Upload::FTP",
            "Upload::SFTP",
            "WriteOff"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "call_type",
          "label": "Call Type",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "concurrent_limit",
          "label": "Concurrent Limit",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "data",
          "label": "Data",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "end_time",
          "label": "End Time",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "error",
          "label": "Error",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "error_class",
          "label": "Error Class",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "error_details",
          "label": "Error Details",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "id",
          "label": "Id",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "instance",
          "label": "Instance",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "object",
          "label": "Object",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "object_id",
          "label": "Object Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "original_task_id",
          "label": "Original Task Id",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "original_workflow_id",
          "label": "Original Workflow Id",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "parameters",
          "label": "Parameters",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "start_time",
          "label": "Start Time",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "status",
          "label": "Status",
          "type": "string",
          "required": false,
          "enum": [
            "Queued",
            "Processing",
            "Pending",
            "Success",
            "Stopped",
            "Error"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "tags",
          "label": "Tags",
          "type": "array",
          "required": false,
          "itemType": "string",
          "section": "Additional Fields"
        },
        {
          "name": "task_id",
          "label": "Task Id",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "workflow_id",
          "label": "Workflow Id",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "workflow",
      "label": "Workflow",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "call_type",
          "label": "Call Type",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "calloutTrigger",
          "label": "Callout Trigger",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "createdAt",
          "label": "Created At",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "finished_at",
          "label": "Finished At",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "id",
          "label": "Id",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "interval",
          "label": "Interval",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "ondemandTrigger",
          "label": "Ondemand Trigger",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "original_workflow_id",
          "label": "Original Workflow Id",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "priority",
          "label": "Priority",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "scheduledTrigger",
          "label": "Scheduled Trigger",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "started_at",
          "label": "Started At",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "status",
          "label": "Status",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "sync_trigger",
          "label": "Sync Trigger",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "timezone",
          "label": "Timezone",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": false,
          "enum": [
            "Workflow::Setup",
            "Workflow::Instance"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "updatedAt",
          "label": "Updated At",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "version",
          "label": "Version",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
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
