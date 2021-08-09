// https://www.terraform.io/docs/providers/snowflake/r/stream.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of the stream that will be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream.html#append_only Stream#append_only}
  */
  readonly appendOnly?: boolean;
  /**
  * Specifies a comment for the stream.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream.html#comment Stream#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the stream.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream.html#database Stream#database}
  */
  readonly database: string;
  /**
  * Specifies the identifier for the stream; must be unique for the database and schema in which the stream is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream.html#name Stream#name}
  */
  readonly name: string;
  /**
  * Name of the table the stream will monitor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream.html#on_table Stream#on_table}
  */
  readonly onTable?: string;
  /**
  * The schema in which to create the stream.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream.html#schema Stream#schema}
  */
  readonly schema: string;
  /**
  * Specifies whether to return all existing rows in the source table as row inserts the first time the stream is consumed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream.html#show_initial_rows Stream#show_initial_rows}
  */
  readonly showInitialRows?: boolean;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/stream.html snowflake_stream}
*/
export class Stream extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/stream.html snowflake_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamConfig
  */
  public constructor(scope: Construct, id: string, config: StreamConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_stream',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appendOnly = config.appendOnly;
    this._comment = config.comment;
    this._database = config.database;
    this._name = config.name;
    this._onTable = config.onTable;
    this._schema = config.schema;
    this._showInitialRows = config.showInitialRows;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // append_only - computed: false, optional: true, required: false
  private _appendOnly?: boolean;
  public get appendOnly() {
    return this.getBooleanAttribute('append_only');
  }
  public set appendOnly(value: boolean ) {
    this._appendOnly = value;
  }
  public resetAppendOnly() {
    this._appendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendOnlyInput() {
    return this._appendOnly
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

  // on_table - computed: false, optional: true, required: false
  private _onTable?: string;
  public get onTable() {
    return this.getStringAttribute('on_table');
  }
  public set onTable(value: string ) {
    this._onTable = value;
  }
  public resetOnTable() {
    this._onTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onTableInput() {
    return this._onTable
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

  // show_initial_rows - computed: false, optional: true, required: false
  private _showInitialRows?: boolean;
  public get showInitialRows() {
    return this.getBooleanAttribute('show_initial_rows');
  }
  public set showInitialRows(value: boolean ) {
    this._showInitialRows = value;
  }
  public resetShowInitialRows() {
    this._showInitialRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInitialRowsInput() {
    return this._showInitialRows
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      append_only: cdktf.booleanToTerraform(this._appendOnly),
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      name: cdktf.stringToTerraform(this._name),
      on_table: cdktf.stringToTerraform(this._onTable),
      schema: cdktf.stringToTerraform(this._schema),
      show_initial_rows: cdktf.booleanToTerraform(this._showInitialRows),
    };
  }
}
