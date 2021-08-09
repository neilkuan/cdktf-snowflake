// https://www.terraform.io/docs/providers/snowflake/r/masking_policy_grant.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaskingPolicyGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the database containing the masking policy on which to grant privileges.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy_grant.html#database_name MaskingPolicyGrant#database_name}
  */
  readonly databaseName: string;
  /**
  * The name of the masking policy on which to grant privileges immediately.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy_grant.html#masking_policy_name MaskingPolicyGrant#masking_policy_name}
  */
  readonly maskingPolicyName: string;
  /**
  * The privilege to grant on the masking policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy_grant.html#privilege MaskingPolicyGrant#privilege}
  */
  readonly privilege?: string;
  /**
  * Grants privilege to these roles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy_grant.html#roles MaskingPolicyGrant#roles}
  */
  readonly roles?: string[];
  /**
  * The name of the schema containing the masking policy on which to grant privileges.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy_grant.html#schema_name MaskingPolicyGrant#schema_name}
  */
  readonly schemaName: string;
  /**
  * When this is set to true, allows the recipient role to grant the privileges to other roles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy_grant.html#with_grant_option MaskingPolicyGrant#with_grant_option}
  */
  readonly withGrantOption?: boolean;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy_grant.html snowflake_masking_policy_grant}
*/
export class MaskingPolicyGrant extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy_grant.html snowflake_masking_policy_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaskingPolicyGrantConfig
  */
  public constructor(scope: Construct, id: string, config: MaskingPolicyGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_masking_policy_grant',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._databaseName = config.databaseName;
    this._maskingPolicyName = config.maskingPolicyName;
    this._privilege = config.privilege;
    this._roles = config.roles;
    this._schemaName = config.schemaName;
    this._withGrantOption = config.withGrantOption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_name - computed: false, optional: false, required: true
  private _databaseName: string;
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // masking_policy_name - computed: false, optional: false, required: true
  private _maskingPolicyName: string;
  public get maskingPolicyName() {
    return this.getStringAttribute('masking_policy_name');
  }
  public set maskingPolicyName(value: string) {
    this._maskingPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingPolicyNameInput() {
    return this._maskingPolicyName
  }

  // privilege - computed: false, optional: true, required: false
  private _privilege?: string;
  public get privilege() {
    return this.getStringAttribute('privilege');
  }
  public set privilege(value: string ) {
    this._privilege = value;
  }
  public resetPrivilege() {
    this._privilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeInput() {
    return this._privilege
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[];
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[] ) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName: string;
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName
  }

  // with_grant_option - computed: false, optional: true, required: false
  private _withGrantOption?: boolean;
  public get withGrantOption() {
    return this.getBooleanAttribute('with_grant_option');
  }
  public set withGrantOption(value: boolean ) {
    this._withGrantOption = value;
  }
  public resetWithGrantOption() {
    this._withGrantOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withGrantOptionInput() {
    return this._withGrantOption
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_name: cdktf.stringToTerraform(this._databaseName),
      masking_policy_name: cdktf.stringToTerraform(this._maskingPolicyName),
      privilege: cdktf.stringToTerraform(this._privilege),
      roles: cdktf.listMapper(cdktf.stringToTerraform)(this._roles),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      with_grant_option: cdktf.booleanToTerraform(this._withGrantOption),
    };
  }
}
