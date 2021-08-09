// https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StageGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the database containing the current stage on which to grant privileges.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html#database_name StageGrant#database_name}
  */
  readonly databaseName: string;
  /**
  * When this is set to true and a schema_name is provided, apply this grant on all future stages in the given schema. When this is true and no schema_name is provided apply this grant on all future stages in the given database. The stage_name and shares fields must be unset in order to use on_future.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html#on_future StageGrant#on_future}
  */
  readonly onFuture?: boolean;
  /**
  * The privilege to grant on the stage.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html#privilege StageGrant#privilege}
  */
  readonly privilege?: string;
  /**
  * Grants privilege to these roles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html#roles StageGrant#roles}
  */
  readonly roles?: string[];
  /**
  * The name of the schema containing the current stage on which to grant privileges.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html#schema_name StageGrant#schema_name}
  */
  readonly schemaName: string;
  /**
  * Grants privilege to these shares (only valid if on_future is false).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html#shares StageGrant#shares}
  */
  readonly shares?: string[];
  /**
  * The name of the stage on which to grant privilege (only valid if on_future is false).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html#stage_name StageGrant#stage_name}
  */
  readonly stageName?: string;
  /**
  * When this is set to true, allows the recipient role to grant the privileges to other roles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html#with_grant_option StageGrant#with_grant_option}
  */
  readonly withGrantOption?: boolean;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html snowflake_stage_grant}
*/
export class StageGrant extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html snowflake_stage_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StageGrantConfig
  */
  public constructor(scope: Construct, id: string, config: StageGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_stage_grant',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._databaseName = config.databaseName;
    this._onFuture = config.onFuture;
    this._privilege = config.privilege;
    this._roles = config.roles;
    this._schemaName = config.schemaName;
    this._shares = config.shares;
    this._stageName = config.stageName;
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

  // on_future - computed: false, optional: true, required: false
  private _onFuture?: boolean;
  public get onFuture() {
    return this.getBooleanAttribute('on_future');
  }
  public set onFuture(value: boolean ) {
    this._onFuture = value;
  }
  public resetOnFuture() {
    this._onFuture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFutureInput() {
    return this._onFuture
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

  // stage_name - computed: false, optional: true, required: false
  private _stageName?: string;
  public get stageName() {
    return this.getStringAttribute('stage_name');
  }
  public set stageName(value: string ) {
    this._stageName = value;
  }
  public resetStageName() {
    this._stageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageNameInput() {
    return this._stageName
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
      on_future: cdktf.booleanToTerraform(this._onFuture),
      privilege: cdktf.stringToTerraform(this._privilege),
      roles: cdktf.listMapper(cdktf.stringToTerraform)(this._roles),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      shares: cdktf.listMapper(cdktf.stringToTerraform)(this._shares),
      stage_name: cdktf.stringToTerraform(this._stageName),
      with_grant_option: cdktf.booleanToTerraform(this._withGrantOption),
    };
  }
}
