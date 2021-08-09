// https://www.terraform.io/docs/providers/snowflake/r/warehouse_grant.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WarehouseGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * The privilege to grant on the warehouse.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse_grant.html#privilege WarehouseGrant#privilege}
  */
  readonly privilege?: string;
  /**
  * Grants privilege to these roles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse_grant.html#roles WarehouseGrant#roles}
  */
  readonly roles?: string[];
  /**
  * The name of the warehouse on which to grant privileges.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse_grant.html#warehouse_name WarehouseGrant#warehouse_name}
  */
  readonly warehouseName: string;
  /**
  * When this is set to true, allows the recipient role to grant the privileges to other roles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse_grant.html#with_grant_option WarehouseGrant#with_grant_option}
  */
  readonly withGrantOption?: boolean;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse_grant.html snowflake_warehouse_grant}
*/
export class WarehouseGrant extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse_grant.html snowflake_warehouse_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WarehouseGrantConfig
  */
  public constructor(scope: Construct, id: string, config: WarehouseGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_warehouse_grant',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._privilege = config.privilege;
    this._roles = config.roles;
    this._warehouseName = config.warehouseName;
    this._withGrantOption = config.withGrantOption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // warehouse_name - computed: false, optional: false, required: true
  private _warehouseName: string;
  public get warehouseName() {
    return this.getStringAttribute('warehouse_name');
  }
  public set warehouseName(value: string) {
    this._warehouseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseNameInput() {
    return this._warehouseName
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
      privilege: cdktf.stringToTerraform(this._privilege),
      roles: cdktf.listMapper(cdktf.stringToTerraform)(this._roles),
      warehouse_name: cdktf.stringToTerraform(this._warehouseName),
      with_grant_option: cdktf.booleanToTerraform(this._withGrantOption),
    };
  }
}
