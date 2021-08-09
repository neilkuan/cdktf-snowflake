// https://www.terraform.io/docs/providers/snowflake/r/scim_integration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScimIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the name of the SCIM integration. This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/scim_integration.html#name ScimIntegration#name}
  */
  readonly name: string;
  /**
  * Specifies an existing network policy active for your account. The network policy restricts the list of user IP addresses when exchanging an authorization code for an access or refresh token and when using a refresh token to obtain a new access token. If this parameter is not set, the network policy for the account (if any) is used instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/scim_integration.html#network_policy ScimIntegration#network_policy}
  */
  readonly networkPolicy?: string;
  /**
  * Specify the SCIM role in Snowflake that owns any users and roles that are imported from the identity provider into Snowflake using SCIM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/scim_integration.html#provisioner_role ScimIntegration#provisioner_role}
  */
  readonly provisionerRole: string;
  /**
  * Specifies the client type for the scim integration
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/scim_integration.html#scim_client ScimIntegration#scim_client}
  */
  readonly scimClient: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/scim_integration.html snowflake_scim_integration}
*/
export class ScimIntegration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/scim_integration.html snowflake_scim_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScimIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ScimIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_scim_integration',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._networkPolicy = config.networkPolicy;
    this._provisionerRole = config.provisionerRole;
    this._scimClient = config.scimClient;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
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

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy?: string;
  public get networkPolicy() {
    return this.getStringAttribute('network_policy');
  }
  public set networkPolicy(value: string ) {
    this._networkPolicy = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy
  }

  // provisioner_role - computed: false, optional: false, required: true
  private _provisionerRole: string;
  public get provisionerRole() {
    return this.getStringAttribute('provisioner_role');
  }
  public set provisionerRole(value: string) {
    this._provisionerRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerRoleInput() {
    return this._provisionerRole
  }

  // scim_client - computed: false, optional: false, required: true
  private _scimClient: string;
  public get scimClient() {
    return this.getStringAttribute('scim_client');
  }
  public set scimClient(value: string) {
    this._scimClient = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scimClientInput() {
    return this._scimClient
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      network_policy: cdktf.stringToTerraform(this._networkPolicy),
      provisioner_role: cdktf.stringToTerraform(this._provisionerRole),
      scim_client: cdktf.stringToTerraform(this._scimClient),
    };
  }
}
