// https://www.terraform.io/docs/providers/snowflake/r/row_access_policy_grant.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RowAccessPolicyGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the database containing the row access policy on which to grant privileges.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy_grant.html#database_name RowAccessPolicyGrant#database_name}
  */
  readonly databaseName: string;
  /**
  * The privilege to grant on the row access policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy_grant.html#privilege RowAccessPolicyGrant#privilege}
  */
  readonly privilege?: string;
  /**
  * Grants privilege to these roles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy_grant.html#roles RowAccessPolicyGrant#roles}
  */
  readonly roles?: string[];
  /**
  * The name of the row access policy on which to grant privileges immediately.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy_grant.html#row_access_policy_name RowAccessPolicyGrant#row_access_policy_name}
  */
  readonly rowAccessPolicyName: string;
  /**
  * The name of the schema containing the row access policy on which to grant privileges.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy_grant.html#schema_name RowAccessPolicyGrant#schema_name}
  */
  readonly schemaName: string;
  /**
  * When this is set to true, allows the recipient role to grant the privileges to other roles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy_grant.html#with_grant_option RowAccessPolicyGrant#with_grant_option}
  */
  readonly withGrantOption?: boolean;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy_grant.html snowflake_row_access_policy_grant}
*/
export class RowAccessPolicyGrant extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy_grant.html snowflake_row_access_policy_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RowAccessPolicyGrantConfig
  */
  public constructor(scope: Construct, id: string, config: RowAccessPolicyGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_row_access_policy_grant',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._databaseName = config.databaseName;
    this._privilege = config.privilege;
    this._roles = config.roles;
    this._rowAccessPolicyName = config.rowAccessPolicyName;
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

  // row_access_policy_name - computed: false, optional: false, required: true
  private _rowAccessPolicyName: string;
  public get rowAccessPolicyName() {
    return this.getStringAttribute('row_access_policy_name');
  }
  public set rowAccessPolicyName(value: string) {
    this._rowAccessPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowAccessPolicyNameInput() {
    return this._rowAccessPolicyName
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
      privilege: cdktf.stringToTerraform(this._privilege),
      roles: cdktf.listMapper(cdktf.stringToTerraform)(this._roles),
      row_access_policy_name: cdktf.stringToTerraform(this._rowAccessPolicyName),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      with_grant_option: cdktf.booleanToTerraform(this._withGrantOption),
    };
  }
}
