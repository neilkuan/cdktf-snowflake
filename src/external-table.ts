// https://www.terraform.io/docs/providers/snowflake/r/external_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether to automatically refresh the external table metadata once, immediately after the external table is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#auto_refresh ExternalTable#auto_refresh}
  */
  readonly autoRefresh?: boolean;
  /**
  * Specifies the aws sns topic for the external table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#aws_sns_topic ExternalTable#aws_sns_topic}
  */
  readonly awsSnsTopic?: string;
  /**
  * Specifies a comment for the external table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#comment ExternalTable#comment}
  */
  readonly comment?: string;
  /**
  * Specifies to retain the access permissions from the original table when an external table is recreated using the CREATE OR REPLACE TABLE variant
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#copy_grants ExternalTable#copy_grants}
  */
  readonly copyGrants?: boolean;
  /**
  * The database in which to create the external table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#database ExternalTable#database}
  */
  readonly database: string;
  /**
  * Specifies the file format for the external table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#file_format ExternalTable#file_format}
  */
  readonly fileFormat: string;
  /**
  * Specifies a location for the external table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#location ExternalTable#location}
  */
  readonly location: string;
  /**
  * Specifies the identifier for the external table; must be unique for the database and schema in which the externalTable is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#name ExternalTable#name}
  */
  readonly name: string;
  /**
  * Specifies any partition columns to evaluate for the external table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#partition_by ExternalTable#partition_by}
  */
  readonly partitionBy?: string[];
  /**
  * Specifies weather to refresh when an external table is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#refresh_on_create ExternalTable#refresh_on_create}
  */
  readonly refreshOnCreate?: boolean;
  /**
  * The schema in which to create the external table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#schema ExternalTable#schema}
  */
  readonly schema: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#column ExternalTable#column}
  */
  readonly column: ExternalTableColumn[];
}
export interface ExternalTableColumn {
  /**
  * String that specifies the expression for the column. When queried, the column returns results derived from this expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#as ExternalTable#as}
  */
  readonly as: string;
  /**
  * Column name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#name ExternalTable#name}
  */
  readonly name: string;
  /**
  * Column type, e.g. VARIANT
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#type ExternalTable#type}
  */
  readonly type: string;
}

function externalTableColumnToTerraform(struct?: ExternalTableColumn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    as: cdktf.stringToTerraform(struct!.as),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html snowflake_external_table}
*/
export class ExternalTable extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html snowflake_external_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalTableConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalTableConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_external_table',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoRefresh = config.autoRefresh;
    this._awsSnsTopic = config.awsSnsTopic;
    this._comment = config.comment;
    this._copyGrants = config.copyGrants;
    this._database = config.database;
    this._fileFormat = config.fileFormat;
    this._location = config.location;
    this._name = config.name;
    this._partitionBy = config.partitionBy;
    this._refreshOnCreate = config.refreshOnCreate;
    this._schema = config.schema;
    this._column = config.column;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_refresh - computed: false, optional: true, required: false
  private _autoRefresh?: boolean;
  public get autoRefresh() {
    return this.getBooleanAttribute('auto_refresh');
  }
  public set autoRefresh(value: boolean ) {
    this._autoRefresh = value;
  }
  public resetAutoRefresh() {
    this._autoRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRefreshInput() {
    return this._autoRefresh
  }

  // aws_sns_topic - computed: false, optional: true, required: false
  private _awsSnsTopic?: string;
  public get awsSnsTopic() {
    return this.getStringAttribute('aws_sns_topic');
  }
  public set awsSnsTopic(value: string ) {
    this._awsSnsTopic = value;
  }
  public resetAwsSnsTopic() {
    this._awsSnsTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSnsTopicInput() {
    return this._awsSnsTopic
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

  // copy_grants - computed: false, optional: true, required: false
  private _copyGrants?: boolean;
  public get copyGrants() {
    return this.getBooleanAttribute('copy_grants');
  }
  public set copyGrants(value: boolean ) {
    this._copyGrants = value;
  }
  public resetCopyGrants() {
    this._copyGrants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyGrantsInput() {
    return this._copyGrants
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

  // file_format - computed: false, optional: false, required: true
  private _fileFormat: string;
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }
  public set fileFormat(value: string) {
    this._fileFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // partition_by - computed: false, optional: true, required: false
  private _partitionBy?: string[];
  public get partitionBy() {
    return this.getListAttribute('partition_by');
  }
  public set partitionBy(value: string[] ) {
    this._partitionBy = value;
  }
  public resetPartitionBy() {
    this._partitionBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionByInput() {
    return this._partitionBy
  }

  // refresh_on_create - computed: false, optional: true, required: false
  private _refreshOnCreate?: boolean;
  public get refreshOnCreate() {
    return this.getBooleanAttribute('refresh_on_create');
  }
  public set refreshOnCreate(value: boolean ) {
    this._refreshOnCreate = value;
  }
  public resetRefreshOnCreate() {
    this._refreshOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshOnCreateInput() {
    return this._refreshOnCreate
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
  private _column: ExternalTableColumn[];
  public get column() {
    return this.interpolationForAttribute('column') as any;
  }
  public set column(value: ExternalTableColumn[]) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_refresh: cdktf.booleanToTerraform(this._autoRefresh),
      aws_sns_topic: cdktf.stringToTerraform(this._awsSnsTopic),
      comment: cdktf.stringToTerraform(this._comment),
      copy_grants: cdktf.booleanToTerraform(this._copyGrants),
      database: cdktf.stringToTerraform(this._database),
      file_format: cdktf.stringToTerraform(this._fileFormat),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      partition_by: cdktf.listMapper(cdktf.stringToTerraform)(this._partitionBy),
      refresh_on_create: cdktf.booleanToTerraform(this._refreshOnCreate),
      schema: cdktf.stringToTerraform(this._schema),
      column: cdktf.listMapper(externalTableColumnToTerraform)(this._column),
    };
  }
}
