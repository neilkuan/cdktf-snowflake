// https://www.terraform.io/docs/providers/snowflake/r/database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database.html#comment Database#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database.html#data_retention_time_in_days Database#data_retention_time_in_days}
  */
  readonly dataRetentionTimeInDays?: number;
  /**
  * Specify a database to create a clone from.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database.html#from_database Database#from_database}
  */
  readonly fromDatabase?: string;
  /**
  * Specify a provider and a share in this map to create a database from a share.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database.html#from_share Database#from_share}
  */
  readonly fromShare?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database.html#name Database#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/database.html snowflake_database}
*/
export class Database extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/database.html snowflake_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_database',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._comment = config.comment;
    this._dataRetentionTimeInDays = config.dataRetentionTimeInDays;
    this._fromDatabase = config.fromDatabase;
    this._fromShare = config.fromShare;
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

  // data_retention_time_in_days - computed: true, optional: true, required: false
  private _dataRetentionTimeInDays?: number;
  public get dataRetentionTimeInDays() {
    return this.getNumberAttribute('data_retention_time_in_days');
  }
  public set dataRetentionTimeInDays(value: number) {
    this._dataRetentionTimeInDays = value;
  }
  public resetDataRetentionTimeInDays() {
    this._dataRetentionTimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionTimeInDaysInput() {
    return this._dataRetentionTimeInDays
  }

  // from_database - computed: false, optional: true, required: false
  private _fromDatabase?: string;
  public get fromDatabase() {
    return this.getStringAttribute('from_database');
  }
  public set fromDatabase(value: string ) {
    this._fromDatabase = value;
  }
  public resetFromDatabase() {
    this._fromDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromDatabaseInput() {
    return this._fromDatabase
  }

  // from_share - computed: false, optional: true, required: false
  private _fromShare?: { [key: string]: string };
  public get fromShare() {
    return this.interpolationForAttribute('from_share') as any;
  }
  public set fromShare(value: { [key: string]: string } ) {
    this._fromShare = value;
  }
  public resetFromShare() {
    this._fromShare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromShareInput() {
    return this._fromShare
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
      comment: cdktf.stringToTerraform(this._comment),
      data_retention_time_in_days: cdktf.numberToTerraform(this._dataRetentionTimeInDays),
      from_database: cdktf.stringToTerraform(this._fromDatabase),
      from_share: cdktf.hashMapper(cdktf.anyToTerraform)(this._fromShare),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
