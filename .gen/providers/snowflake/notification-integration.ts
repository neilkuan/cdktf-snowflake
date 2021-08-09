// https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS SQS queue ARN for notification integration to connect to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#aws_sqs_arn NotificationIntegration#aws_sqs_arn}
  */
  readonly awsSqsArn?: string;
  /**
  * AWS IAM role ARN for notification integration to assume
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#aws_sqs_role_arn NotificationIntegration#aws_sqs_role_arn}
  */
  readonly awsSqsRoleArn?: string;
  /**
  * The queue ID for the Azure Queue Storage queue created for Event Grid notifications
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#azure_storage_queue_primary_uri NotificationIntegration#azure_storage_queue_primary_uri}
  */
  readonly azureStorageQueuePrimaryUri?: string;
  /**
  * The ID of the Azure Active Directory tenant used for identity management
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#azure_tenant_id NotificationIntegration#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#comment NotificationIntegration#comment}
  */
  readonly comment?: string;
  /**
  * Direction of the cloud messaging with respect to Snowflake (required only for error notifications)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#direction NotificationIntegration#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#enabled NotificationIntegration#enabled}
  */
  readonly enabled?: boolean;
  /**
  * The subscription id that Snowflake will listen to when using the GCP_PUBSUB provider.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#gcp_pubsub_subscription_name NotificationIntegration#gcp_pubsub_subscription_name}
  */
  readonly gcpPubsubSubscriptionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#name NotificationIntegration#name}
  */
  readonly name: string;
  /**
  * The third-party cloud message queuing service (e.g. AZURE_STORAGE_QUEUE, AWS_SQS)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#notification_provider NotificationIntegration#notification_provider}
  */
  readonly notificationProvider?: string;
  /**
  * A type of integration
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#type NotificationIntegration#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html snowflake_notification_integration}
*/
export class NotificationIntegration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html snowflake_notification_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_notification_integration',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._awsSqsArn = config.awsSqsArn;
    this._awsSqsRoleArn = config.awsSqsRoleArn;
    this._azureStorageQueuePrimaryUri = config.azureStorageQueuePrimaryUri;
    this._azureTenantId = config.azureTenantId;
    this._comment = config.comment;
    this._direction = config.direction;
    this._enabled = config.enabled;
    this._gcpPubsubSubscriptionName = config.gcpPubsubSubscriptionName;
    this._name = config.name;
    this._notificationProvider = config.notificationProvider;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_sqs_arn - computed: false, optional: true, required: false
  private _awsSqsArn?: string;
  public get awsSqsArn() {
    return this.getStringAttribute('aws_sqs_arn');
  }
  public set awsSqsArn(value: string ) {
    this._awsSqsArn = value;
  }
  public resetAwsSqsArn() {
    this._awsSqsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSqsArnInput() {
    return this._awsSqsArn
  }

  // aws_sqs_external_id - computed: true, optional: false, required: false
  public get awsSqsExternalId() {
    return this.getStringAttribute('aws_sqs_external_id');
  }

  // aws_sqs_iam_user_arn - computed: true, optional: false, required: false
  public get awsSqsIamUserArn() {
    return this.getStringAttribute('aws_sqs_iam_user_arn');
  }

  // aws_sqs_role_arn - computed: false, optional: true, required: false
  private _awsSqsRoleArn?: string;
  public get awsSqsRoleArn() {
    return this.getStringAttribute('aws_sqs_role_arn');
  }
  public set awsSqsRoleArn(value: string ) {
    this._awsSqsRoleArn = value;
  }
  public resetAwsSqsRoleArn() {
    this._awsSqsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSqsRoleArnInput() {
    return this._awsSqsRoleArn
  }

  // azure_storage_queue_primary_uri - computed: false, optional: true, required: false
  private _azureStorageQueuePrimaryUri?: string;
  public get azureStorageQueuePrimaryUri() {
    return this.getStringAttribute('azure_storage_queue_primary_uri');
  }
  public set azureStorageQueuePrimaryUri(value: string ) {
    this._azureStorageQueuePrimaryUri = value;
  }
  public resetAzureStorageQueuePrimaryUri() {
    this._azureStorageQueuePrimaryUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageQueuePrimaryUriInput() {
    return this._azureStorageQueuePrimaryUri
  }

  // azure_tenant_id - computed: false, optional: true, required: false
  private _azureTenantId?: string;
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string ) {
    this._azureTenantId = value;
  }
  public resetAzureTenantId() {
    this._azureTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string;
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string ) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string;
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string ) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // gcp_pubsub_subscription_name - computed: false, optional: true, required: false
  private _gcpPubsubSubscriptionName?: string;
  public get gcpPubsubSubscriptionName() {
    return this.getStringAttribute('gcp_pubsub_subscription_name');
  }
  public set gcpPubsubSubscriptionName(value: string ) {
    this._gcpPubsubSubscriptionName = value;
  }
  public resetGcpPubsubSubscriptionName() {
    this._gcpPubsubSubscriptionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpPubsubSubscriptionNameInput() {
    return this._gcpPubsubSubscriptionName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // notification_provider - computed: false, optional: true, required: false
  private _notificationProvider?: string;
  public get notificationProvider() {
    return this.getStringAttribute('notification_provider');
  }
  public set notificationProvider(value: string ) {
    this._notificationProvider = value;
  }
  public resetNotificationProvider() {
    this._notificationProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationProviderInput() {
    return this._notificationProvider
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string ) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_sqs_arn: cdktf.stringToTerraform(this._awsSqsArn),
      aws_sqs_role_arn: cdktf.stringToTerraform(this._awsSqsRoleArn),
      azure_storage_queue_primary_uri: cdktf.stringToTerraform(this._azureStorageQueuePrimaryUri),
      azure_tenant_id: cdktf.stringToTerraform(this._azureTenantId),
      comment: cdktf.stringToTerraform(this._comment),
      direction: cdktf.stringToTerraform(this._direction),
      enabled: cdktf.booleanToTerraform(this._enabled),
      gcp_pubsub_subscription_name: cdktf.stringToTerraform(this._gcpPubsubSubscriptionName),
      name: cdktf.stringToTerraform(this._name),
      notification_provider: cdktf.stringToTerraform(this._notificationProvider),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
