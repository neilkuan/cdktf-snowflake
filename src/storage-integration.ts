// https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html#azure_tenant_id StorageIntegration#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html#comment StorageIntegration#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html#enabled StorageIntegration#enabled}
  */
  readonly enabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html#name StorageIntegration#name}
  */
  readonly name: string;
  /**
  * Explicitly limits external stages that use the integration to reference one or more storage locations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html#storage_allowed_locations StorageIntegration#storage_allowed_locations}
  */
  readonly storageAllowedLocations: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html#storage_aws_role_arn StorageIntegration#storage_aws_role_arn}
  */
  readonly storageAwsRoleArn?: string;
  /**
  * Explicitly prohibits external stages that use the integration from referencing one or more storage locations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html#storage_blocked_locations StorageIntegration#storage_blocked_locations}
  */
  readonly storageBlockedLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html#storage_provider StorageIntegration#storage_provider}
  */
  readonly storageProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html#type StorageIntegration#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html snowflake_storage_integration}
*/
export class StorageIntegration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html snowflake_storage_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: StorageIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_storage_integration',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._azureTenantId = config.azureTenantId;
    this._comment = config.comment;
    this._enabled = config.enabled;
    this._name = config.name;
    this._storageAllowedLocations = config.storageAllowedLocations;
    this._storageAwsRoleArn = config.storageAwsRoleArn;
    this._storageBlockedLocations = config.storageBlockedLocations;
    this._storageProvider = config.storageProvider;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_consent_url - computed: true, optional: false, required: false
  public get azureConsentUrl() {
    return this.getStringAttribute('azure_consent_url');
  }

  // azure_multi_tenant_app_name - computed: true, optional: false, required: false
  public get azureMultiTenantAppName() {
    return this.getStringAttribute('azure_multi_tenant_app_name');
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

  // storage_allowed_locations - computed: false, optional: false, required: true
  private _storageAllowedLocations: string[];
  public get storageAllowedLocations() {
    return this.getListAttribute('storage_allowed_locations');
  }
  public set storageAllowedLocations(value: string[]) {
    this._storageAllowedLocations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAllowedLocationsInput() {
    return this._storageAllowedLocations
  }

  // storage_aws_external_id - computed: true, optional: false, required: false
  public get storageAwsExternalId() {
    return this.getStringAttribute('storage_aws_external_id');
  }

  // storage_aws_iam_user_arn - computed: true, optional: false, required: false
  public get storageAwsIamUserArn() {
    return this.getStringAttribute('storage_aws_iam_user_arn');
  }

  // storage_aws_role_arn - computed: false, optional: true, required: false
  private _storageAwsRoleArn?: string;
  public get storageAwsRoleArn() {
    return this.getStringAttribute('storage_aws_role_arn');
  }
  public set storageAwsRoleArn(value: string ) {
    this._storageAwsRoleArn = value;
  }
  public resetStorageAwsRoleArn() {
    this._storageAwsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAwsRoleArnInput() {
    return this._storageAwsRoleArn
  }

  // storage_blocked_locations - computed: false, optional: true, required: false
  private _storageBlockedLocations?: string[];
  public get storageBlockedLocations() {
    return this.getListAttribute('storage_blocked_locations');
  }
  public set storageBlockedLocations(value: string[] ) {
    this._storageBlockedLocations = value;
  }
  public resetStorageBlockedLocations() {
    this._storageBlockedLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBlockedLocationsInput() {
    return this._storageBlockedLocations
  }

  // storage_gcp_service_account - computed: true, optional: false, required: false
  public get storageGcpServiceAccount() {
    return this.getStringAttribute('storage_gcp_service_account');
  }

  // storage_provider - computed: false, optional: false, required: true
  private _storageProvider: string;
  public get storageProvider() {
    return this.getStringAttribute('storage_provider');
  }
  public set storageProvider(value: string) {
    this._storageProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProviderInput() {
    return this._storageProvider
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
      azure_tenant_id: cdktf.stringToTerraform(this._azureTenantId),
      comment: cdktf.stringToTerraform(this._comment),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      storage_allowed_locations: cdktf.listMapper(cdktf.stringToTerraform)(this._storageAllowedLocations),
      storage_aws_role_arn: cdktf.stringToTerraform(this._storageAwsRoleArn),
      storage_blocked_locations: cdktf.listMapper(cdktf.stringToTerraform)(this._storageBlockedLocations),
      storage_provider: cdktf.stringToTerraform(this._storageProvider),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
