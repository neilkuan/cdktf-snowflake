// https://www.terraform.io/docs/providers/snowflake/r/database_grant.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the database on which to grant privileges.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database_grant.html#database_name DatabaseGrant#database_name}
  */
  readonly databaseName: string;
  /**
  * The privilege to grant on the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database_grant.html#privilege DatabaseGrant#privilege}
  */
  readonly privilege?: string;
  /**
  * Grants privilege to these roles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database_grant.html#roles DatabaseGrant#roles}
  */
  readonly roles?: string[];
  /**
  * Grants privilege to these shares.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database_grant.html#shares DatabaseGrant#shares}
  */
  readonly shares?: string[];
  /**
  * When this is set to true, allows the recipient role to grant the privileges to other roles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database_grant.html#with_grant_option DatabaseGrant#with_grant_option}
  */
  readonly withGrantOption?: boolean;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/database_grant.html snowflake_database_grant}
*/
export class DatabaseGrant extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/database_grant.html snowflake_database_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseGrantConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_database_grant',
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
    this._shares = config.shares;
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

  // shares - computed: false, optional: true, required: false
  private _shares?: string[];
  public get shares() {
    return this.getListAttribute('shares');
  }
  public set shares(value: string[] ) {
    this._shares = value;
  }
  public resetShares() {
    this._shares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharesInput() {
    return this._shares
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
      shares: cdktf.listMapper(cdktf.stringToTerraform)(this._shares),
      with_grant_option: cdktf.booleanToTerraform(this._withGrantOption),
    };
  }
}
