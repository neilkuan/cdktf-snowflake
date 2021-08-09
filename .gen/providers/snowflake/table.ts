// https://www.terraform.io/docs/providers/snowflake/r/table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether to enable change tracking on the table. Default false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#change_tracking Table#change_tracking}
  */
  readonly changeTracking?: boolean;
  /**
  * A list of one or more table columns/expressions to be used as clustering key(s) for the table
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#cluster_by Table#cluster_by}
  */
  readonly clusterBy?: string[];
  /**
  * Specifies a comment for the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#comment Table#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the retention period for the table so that Time Travel actions (SELECT, CLONE, UNDROP) can be performed on historical data in the table. Default value is 1, if you wish to inherit the parent schema setting then pass in the schema attribute to this argument.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#data_retention_days Table#data_retention_days}
  */
  readonly dataRetentionDays?: number;
  /**
  * The database in which to create the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#database Table#database}
  */
  readonly database: string;
  /**
  * Specifies the identifier for the table; must be unique for the database and schema in which the table is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#name Table#name}
  */
  readonly name: string;
  /**
  * The schema in which to create the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#schema Table#schema}
  */
  readonly schema: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#column Table#column}
  */
  readonly column: TableColumn[];
  /**
  * primary_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#primary_key Table#primary_key}
  */
  readonly primaryKey?: TablePrimaryKey[];
}
export interface TableColumn {
  /**
  * Column comment
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#comment Table#comment}
  */
  readonly comment?: string;
  /**
  * Column name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#name Table#name}
  */
  readonly name: string;
  /**
  * Whether this column can contain null values. **Note**: Depending on your Snowflake version, the default value will not suffice if this column is used in a primary key constraint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#nullable Table#nullable}
  */
  readonly nullable?: boolean;
  /**
  * Column type, e.g. VARIANT
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#type Table#type}
  */
  readonly type: string;
}

function tableColumnToTerraform(struct?: TableColumn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface TablePrimaryKey {
  /**
  * Columns to use in primary key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#keys Table#keys}
  */
  readonly keys: string[];
  /**
  * Name of constraint
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#name Table#name}
  */
  readonly name?: string;
}

function tablePrimaryKeyToTerraform(struct?: TablePrimaryKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.keys),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/table.html snowflake_table}
*/
export class Table extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/table.html snowflake_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TableConfig
  */
  public constructor(scope: Construct, id: string, config: TableConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_table',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._changeTracking = config.changeTracking;
    this._clusterBy = config.clusterBy;
    this._comment = config.comment;
    this._dataRetentionDays = config.dataRetentionDays;
    this._database = config.database;
    this._name = config.name;
    this._schema = config.schema;
    this._column = config.column;
    this._primaryKey = config.primaryKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_tracking - computed: false, optional: true, required: false
  private _changeTracking?: boolean;
  public get changeTracking() {
    return this.getBooleanAttribute('change_tracking');
  }
  public set changeTracking(value: boolean ) {
    this._changeTracking = value;
  }
  public resetChangeTracking() {
    this._changeTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTrackingInput() {
    return this._changeTracking
  }

  // cluster_by - computed: false, optional: true, required: false
  private _clusterBy?: string[];
  public get clusterBy() {
    return this.getListAttribute('cluster_by');
  }
  public set clusterBy(value: string[] ) {
    this._clusterBy = value;
  }
  public resetClusterBy() {
    this._clusterBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterByInput() {
    return this._clusterBy
  }

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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // schema - computed: false, optional: false, required: true
  private _schema: string;
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema
  }

  // column - computed: false, optional: false, required: true
  private _column: TableColumn[];
  public get column() {
    return this.interpolationForAttribute('column') as any;
  }
  public set column(value: TableColumn[]) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: TablePrimaryKey[];
  public get primaryKey() {
    return this.interpolationForAttribute('primary_key') as any;
  }
  public set primaryKey(value: TablePrimaryKey[] ) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      change_tracking: cdktf.booleanToTerraform(this._changeTracking),
      cluster_by: cdktf.listMapper(cdktf.stringToTerraform)(this._clusterBy),
      comment: cdktf.stringToTerraform(this._comment),
      data_retention_days: cdktf.numberToTerraform(this._dataRetentionDays),
      database: cdktf.stringToTerraform(this._database),
      name: cdktf.stringToTerraform(this._name),
      schema: cdktf.stringToTerraform(this._schema),
      column: cdktf.listMapper(tableColumnToTerraform)(this._column),
      primary_key: cdktf.listMapper(tablePrimaryKeyToTerraform)(this._primaryKey),
    };
  }
}
