// https://www.terraform.io/docs/providers/snowflake/r/view.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a comment for the view.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view.html#comment View#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the view. Don't use the | character.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view.html#database View#database}
  */
  readonly database: string;
  /**
  * Specifies that the view is secure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view.html#is_secure View#is_secure}
  */
  readonly isSecure?: boolean;
  /**
  * Specifies the identifier for the view; must be unique for the schema in which the view is created. Don't use the | character.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view.html#name View#name}
  */
  readonly name: string;
  /**
  * Overwrites the View if it exists.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view.html#or_replace View#or_replace}
  */
  readonly orReplace?: boolean;
  /**
  * The schema in which to create the view. Don't use the | character.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view.html#schema View#schema}
  */
  readonly schema: string;
  /**
  * Specifies the query used to create the view.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view.html#statement View#statement}
  */
  readonly statement: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/view.html snowflake_view}
*/
export class View extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/view.html snowflake_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ViewConfig
  */
  public constructor(scope: Construct, id: string, config: ViewConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_view',
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
    };
  }
}
