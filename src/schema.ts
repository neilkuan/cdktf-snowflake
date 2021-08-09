// https://www.terraform.io/docs/providers/snowflake/r/schema.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a comment for the schema.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/schema.html#comment Schema#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the schema, as well as specifying the default Time Travel retention time for all tables created in the schema.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/schema.html#data_retention_days Schema#data_retention_days}
  */
  readonly dataRetentionDays?: number;
  /**
  * The database in which to create the schema.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/schema.html#database Schema#database}
  */
  readonly database: string;
  /**
  * Specifies a managed schema. Managed access schemas centralize privilege management with the schema owner.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/schema.html#is_managed Schema#is_managed}
  */
  readonly isManaged?: boolean;
  /**
  * Specifies a schema as transient. Transient schemas do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/schema.html#is_transient Schema#is_transient}
  */
  readonly isTransient?: boolean;
  /**
  * Specifies the identifier for the schema; must be unique for the database in which the schema is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/schema.html#name Schema#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/schema.html snowflake_schema}
*/
export class Schema extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/schema.html snowflake_schema} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_schema',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._comment = config.comment;
    this._dataRetentionDays = config.dataRetentionDays;
    this._database = config.database;
    this._isManaged = config.isManaged;
    this._isTransient = config.isTransient;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // data_retention_days - computed: false, optional: true, required: false
  private _dataRetentionDays?: number;
  public get dataRetentionDays() {
    return this.getNumberAttribute('data_retention_days');
  }
  public set dataRetentionDays(value: number ) {
    this._dataRetentionDays = value;
  }
  public resetDataRetentionDays() {
    this._dataRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionDaysInput() {
    return this._dataRetentionDays
  }

  // database - computed: false, optional: false, required: true
  private _database: string;
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_managed - computed: false, optional: true, required: false
  private _isManaged?: boolean;
  public get isManaged() {
    return this.getBooleanAttribute('is_managed');
  }
  public set isManaged(value: boolean ) {
    this._isManaged = value;
  }
  public resetIsManaged() {
    this._isManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isManagedInput() {
    return this._isManaged
  }

  // is_transient - computed: false, optional: true, required: false
  private _isTransient?: boolean;
  public get isTransient() {
    return this.getBooleanAttribute('is_transient');
  }
  public set isTransient(value: boolean ) {
    this._isTransient = value;
  }
  public resetIsTransient() {
    this._isTransient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTransientInput() {
    return this._isTransient
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
      comment: cdktf.stringToTerraform(this._comment),
      data_retention_days: cdktf.numberToTerraform(this._dataRetentionDays),
      database: cdktf.stringToTerraform(this._database),
      is_managed: cdktf.booleanToTerraform(this._isManaged),
      is_transient: cdktf.booleanToTerraform(this._isTransient),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
