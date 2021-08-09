// https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProcedureGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the database containing the current or future procedures on which to grant privileges.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#database_name ProcedureGrant#database_name}
  */
  readonly databaseName: string;
  /**
  * When this is set to true and a schema_name is provided, apply this grant on all future procedures in the given schema. When this is true and no schema_name is provided apply this grant on all future procedures in the given database. The procedure_name and shares fields must be unset in order to use on_future.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#on_future ProcedureGrant#on_future}
  */
  readonly onFuture?: boolean;
  /**
  * The privilege to grant on the current or future procedure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#privilege ProcedureGrant#privilege}
  */
  readonly privilege?: string;
  /**
  * The name of the procedure on which to grant privileges immediately (only valid if on_future is false).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#procedure_name ProcedureGrant#procedure_name}
  */
  readonly procedureName?: string;
  /**
  * The return type of the procedure (must be present if procedure_name is present)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#return_type ProcedureGrant#return_type}
  */
  readonly returnType?: string;
  /**
  * Grants privilege to these roles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#roles ProcedureGrant#roles}
  */
  readonly roles?: string[];
  /**
  * The name of the schema containing the current or future procedures on which to grant privileges.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#schema_name ProcedureGrant#schema_name}
  */
  readonly schemaName: string;
  /**
  * Grants privilege to these shares (only valid if on_future is false).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#shares ProcedureGrant#shares}
  */
  readonly shares?: string[];
  /**
  * When this is set to true, allows the recipient role to grant the privileges to other roles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#with_grant_option ProcedureGrant#with_grant_option}
  */
  readonly withGrantOption?: boolean;
  /**
  * arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#arguments ProcedureGrant#arguments}
  */
  readonly arguments?: ProcedureGrantArguments[];
}
export interface ProcedureGrantArguments {
  /**
  * The argument name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#name ProcedureGrant#name}
  */
  readonly name: string;
  /**
  * The argument type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#type ProcedureGrant#type}
  */
  readonly type: string;
}

function procedureGrantArgumentsToTerraform(struct?: ProcedureGrantArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html snowflake_procedure_grant}
*/
export class ProcedureGrant extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html snowflake_procedure_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProcedureGrantConfig
  */
  public constructor(scope: Construct, id: string, config: ProcedureGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_procedure_grant',
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
    this._procedureName = config.procedureName;
    this._returnType = config.returnType;
    this._roles = config.roles;
    this._schemaName = config.schemaName;
    this._shares = config.shares;
    this._withGrantOption = config.withGrantOption;
    this._arguments = config.arguments;
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

  // procedure_name - computed: false, optional: true, required: false
  private _procedureName?: string;
  public get procedureName() {
    return this.getStringAttribute('procedure_name');
  }
  public set procedureName(value: string ) {
    this._procedureName = value;
  }
  public resetProcedureName() {
    this._procedureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procedureNameInput() {
    return this._procedureName
  }

  // return_type - computed: false, optional: true, required: false
  private _returnType?: string;
  public get returnType() {
    return this.getStringAttribute('return_type');
  }
  public set returnType(value: string ) {
    this._returnType = value;
  }
  public resetReturnType() {
    this._returnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnTypeInput() {
    return this._returnType
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

  // arguments - computed: false, optional: true, required: false
  private _arguments?: ProcedureGrantArguments[];
  public get arguments() {
    return this.interpolationForAttribute('arguments') as any;
  }
  public set arguments(value: ProcedureGrantArguments[] ) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_name: cdktf.stringToTerraform(this._databaseName),
      on_future: cdktf.booleanToTerraform(this._onFuture),
      privilege: cdktf.stringToTerraform(this._privilege),
      procedure_name: cdktf.stringToTerraform(this._procedureName),
      return_type: cdktf.stringToTerraform(this._returnType),
      roles: cdktf.listMapper(cdktf.stringToTerraform)(this._roles),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      shares: cdktf.listMapper(cdktf.stringToTerraform)(this._shares),
      with_grant_option: cdktf.booleanToTerraform(this._withGrantOption),
      arguments: cdktf.listMapper(procedureGrantArgumentsToTerraform)(this._arguments),
    };
  }
}
