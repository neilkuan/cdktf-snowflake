// https://www.terraform.io/docs/providers/snowflake/r/role_grants.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleGrantsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the role we are granting.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/role_grants.html#role_name RoleGrants#role_name}
  */
  readonly roleName: string;
  /**
  * Grants role to this specified role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/role_grants.html#roles RoleGrants#roles}
  */
  readonly roles?: string[];
  /**
  * Grants role to this specified user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/role_grants.html#users RoleGrants#users}
  */
  readonly users?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/role_grants.html snowflake_role_grants}
*/
export class RoleGrants extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/role_grants.html snowflake_role_grants} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleGrantsConfig
  */
  public constructor(scope: Construct, id: string, config: RoleGrantsConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_role_grants',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._roleName = config.roleName;
    this._roles = config.roles;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName: string;
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName
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

  // users - computed: false, optional: true, required: false
  private _users?: string[];
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[] ) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      role_name: cdktf.stringToTerraform(this._roleName),
      roles: cdktf.listMapper(cdktf.stringToTerraform)(this._roles),
      users: cdktf.listMapper(cdktf.stringToTerraform)(this._users),
    };
  }
}
