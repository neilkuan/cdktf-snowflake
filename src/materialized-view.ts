// https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaterializedViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a comment for the view.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html#comment MaterializedView#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the view. Don't use the | character.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html#database MaterializedView#database}
  */
  readonly database: string;
  /**
  * Specifies that the view is secure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html#is_secure MaterializedView#is_secure}
  */
  readonly isSecure?: boolean;
  /**
  * Specifies the identifier for the view; must be unique for the schema in which the view is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html#name MaterializedView#name}
  */
  readonly name: string;
  /**
  * Overwrites the View if it exists.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html#or_replace MaterializedView#or_replace}
  */
  readonly orReplace?: boolean;
  /**
  * The schema in which to create the view. Don't use the | character.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html#schema MaterializedView#schema}
  */
  readonly schema: string;
  /**
  * Specifies the query used to create the view.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html#statement MaterializedView#statement}
  */
  readonly statement: string;
  /**
  * The warehouse name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html#warehouse MaterializedView#warehouse}
  */
  readonly warehouse: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html snowflake_materialized_view}
*/
export class MaterializedView extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html snowflake_materialized_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaterializedViewConfig
  */
  public constructor(scope: Construct, id: string, config: MaterializedViewConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_materialized_view',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._comment = config.comment;
    this._database = config.database;
    this._isSecure = config.isSecure;
    this._name = config.name;
    this._orReplace = config.orReplace;
    this._schema = config.schema;
    this._statement = config.statement;
    this._warehouse = config.warehouse;
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

  // is_secure - computed: false, optional: true, required: false
  private _isSecure?: boolean;
  public get isSecure() {
    return this.getBooleanAttribute('is_secure');
  }
  public set isSecure(value: boolean ) {
    this._isSecure = value;
  }
  public resetIsSecure() {
    this._isSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecureInput() {
    return this._isSecure
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

  // or_replace - computed: false, optional: true, required: false
  private _orReplace?: boolean;
  public get orReplace() {
    return this.getBooleanAttribute('or_replace');
  }
  public set orReplace(value: boolean ) {
    this._orReplace = value;
  }
  public resetOrReplace() {
    this._orReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orReplaceInput() {
    return this._orReplace
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

  // statement - computed: false, optional: false, required: true
  private _statement: string;
  public get statement() {
    return this.getStringAttribute('statement');
  }
  public set statement(value: string) {
    this._statement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement
  }

  // warehouse - computed: false, optional: false, required: true
  private _warehouse: string;
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      is_secure: cdktf.booleanToTerraform(this._isSecure),
      name: cdktf.stringToTerraform(this._name),
      or_replace: cdktf.booleanToTerraform(this._orReplace),
      schema: cdktf.stringToTerraform(this._schema),
      statement: cdktf.stringToTerraform(this._statement),
      warehouse: cdktf.stringToTerraform(this._warehouse),
    };
  }
}
