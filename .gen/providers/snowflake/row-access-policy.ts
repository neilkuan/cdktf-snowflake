// https://www.terraform.io/docs/providers/snowflake/r/row_access_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RowAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a comment for the row access policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy.html#comment RowAccessPolicy#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the row access policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy.html#database RowAccessPolicy#database}
  */
  readonly database: string;
  /**
  * Specifies the identifier for the row access policy; must be unique for the database and schema in which the row access policy is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy.html#name RowAccessPolicy#name}
  */
  readonly name: string;
  /**
  * Specifies the SQL expression. The expression can be any boolean-valued SQL expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy.html#row_access_expression RowAccessPolicy#row_access_expression}
  */
  readonly rowAccessExpression: string;
  /**
  * The schema in which to create the row access policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy.html#schema RowAccessPolicy#schema}
  */
  readonly schema: string;
  /**
  * Specifies signature (arguments) for the row access policy (uppercase and sorted to avoid recreation of resource). A signature specifies a set of attributes that must be considered to determine whether the row is accessible. The attribute values come from the database object (e.g. table or view) to be protected by the row access policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy.html#signature RowAccessPolicy#signature}
  */
  readonly signature: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy.html snowflake_row_access_policy}
*/
export class RowAccessPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy.html snowflake_row_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RowAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: RowAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_row_access_policy',
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
    this._name = config.name;
    this._rowAccessExpression = config.rowAccessExpression;
    this._schema = config.schema;
    this._signature = config.signature;
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

  // row_access_expression - computed: false, optional: false, required: true
  private _rowAccessExpression: string;
  public get rowAccessExpression() {
    return this.getStringAttribute('row_access_expression');
  }
  public set rowAccessExpression(value: string) {
    this._rowAccessExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowAccessExpressionInput() {
    return this._rowAccessExpression
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

  // signature - computed: false, optional: false, required: true
  private _signature: { [key: string]: string };
  public get signature() {
    return this.interpolationForAttribute('signature') as any;
  }
  public set signature(value: { [key: string]: string }) {
    this._signature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      name: cdktf.stringToTerraform(this._name),
      row_access_expression: cdktf.stringToTerraform(this._rowAccessExpression),
      schema: cdktf.stringToTerraform(this._schema),
      signature: cdktf.hashMapper(cdktf.anyToTerraform)(this._signature),
    };
  }
}
