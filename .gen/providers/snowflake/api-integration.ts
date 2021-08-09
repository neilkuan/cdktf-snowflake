// https://www.terraform.io/docs/providers/snowflake/r/api_integration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service endpoints and resources within those proxies.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/api_integration.html#api_allowed_prefixes ApiIntegration#api_allowed_prefixes}
  */
  readonly apiAllowedPrefixes: string[];
  /**
  * ARN of a cloud platform role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/api_integration.html#api_aws_role_arn ApiIntegration#api_aws_role_arn}
  */
  readonly apiAwsRoleArn?: string;
  /**
  * Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/api_integration.html#api_blocked_prefixes ApiIntegration#api_blocked_prefixes}
  */
  readonly apiBlockedPrefixes?: string[];
  /**
  * Specifies the HTTPS proxy service type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/api_integration.html#api_provider ApiIntegration#api_provider}
  */
  readonly apiProvider: string;
  /**
  * The 'Application (client) id' of the Azure AD app for your remote service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/api_integration.html#azure_ad_application_id ApiIntegration#azure_ad_application_id}
  */
  readonly azureAdApplicationId?: string;
  /**
  * Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/api_integration.html#azure_tenant_id ApiIntegration#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Specifies whether this API integration is enabled or disabled. If the API integration is disabled, any external function that relies on it will not work.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/api_integration.html#enabled ApiIntegration#enabled}
  */
  readonly enabled?: boolean;
  /**
  * Specifies the name of the API integration. This name follows the rules for Object Identifiers. The name should be unique among api integrations in your account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/api_integration.html#name ApiIntegration#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/api_integration.html snowflake_api_integration}
*/
export class ApiIntegration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/api_integration.html snowflake_api_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ApiIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_api_integration',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiAllowedPrefixes = config.apiAllowedPrefixes;
    this._apiAwsRoleArn = config.apiAwsRoleArn;
    this._apiBlockedPrefixes = config.apiBlockedPrefixes;
    this._apiProvider = config.apiProvider;
    this._azureAdApplicationId = config.azureAdApplicationId;
    this._azureTenantId = config.azureTenantId;
    this._enabled = config.enabled;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_allowed_prefixes - computed: false, optional: false, required: true
  private _apiAllowedPrefixes: string[];
  public get apiAllowedPrefixes() {
    return this.getListAttribute('api_allowed_prefixes');
  }
  public set apiAllowedPrefixes(value: string[]) {
    this._apiAllowedPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAllowedPrefixesInput() {
    return this._apiAllowedPrefixes
  }

  // api_aws_external_id - computed: true, optional: false, required: false
  public get apiAwsExternalId() {
    return this.getStringAttribute('api_aws_external_id');
  }

  // api_aws_iam_user_arn - computed: true, optional: false, required: false
  public get apiAwsIamUserArn() {
    return this.getStringAttribute('api_aws_iam_user_arn');
  }

  // api_aws_role_arn - computed: false, optional: true, required: false
  private _apiAwsRoleArn?: string;
  public get apiAwsRoleArn() {
    return this.getStringAttribute('api_aws_role_arn');
  }
  public set apiAwsRoleArn(value: string ) {
    this._apiAwsRoleArn = value;
  }
  public resetApiAwsRoleArn() {
    this._apiAwsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAwsRoleArnInput() {
    return this._apiAwsRoleArn
  }

  // api_blocked_prefixes - computed: false, optional: true, required: false
  private _apiBlockedPrefixes?: string[];
  public get apiBlockedPrefixes() {
    return this.getListAttribute('api_blocked_prefixes');
  }
  public set apiBlockedPrefixes(value: string[] ) {
    this._apiBlockedPrefixes = value;
  }
  public resetApiBlockedPrefixes() {
    this._apiBlockedPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiBlockedPrefixesInput() {
    return this._apiBlockedPrefixes
  }

  // api_provider - computed: false, optional: false, required: true
  private _apiProvider: string;
  public get apiProvider() {
    return this.getStringAttribute('api_provider');
  }
  public set apiProvider(value: string) {
    this._apiProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiProviderInput() {
    return this._apiProvider
  }

  // azure_ad_application_id - computed: false, optional: true, required: false
  private _azureAdApplicationId?: string;
  public get azureAdApplicationId() {
    return this.getStringAttribute('azure_ad_application_id');
  }
  public set azureAdApplicationId(value: string ) {
    this._azureAdApplicationId = value;
  }
  public resetAzureAdApplicationId() {
    this._azureAdApplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdApplicationIdInput() {
    return this._azureAdApplicationId
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_allowed_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._apiAllowedPrefixes),
      api_aws_role_arn: cdktf.stringToTerraform(this._apiAwsRoleArn),
      api_blocked_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._apiBlockedPrefixes),
      api_provider: cdktf.stringToTerraform(this._apiProvider),
      azure_ad_application_id: cdktf.stringToTerraform(this._azureAdApplicationId),
      azure_tenant_id: cdktf.stringToTerraform(this._azureTenantId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
