// https://www.terraform.io/docs/providers/snowflake/r/masking_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaskingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a comment for the masking policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy.html#comment MaskingPolicy#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the masking policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy.html#database MaskingPolicy#database}
  */
  readonly database: string;
  /**
  * Specifies the SQL expression that transforms the data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy.html#masking_expression MaskingPolicy#masking_expression}
  */
  readonly maskingExpression: string;
  /**
  * Specifies the identifier for the masking policy; must be unique for the database and schema in which the masking policy is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy.html#name MaskingPolicy#name}
  */
  readonly name: string;
  /**
  * Specifies the data type to return.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy.html#return_data_type MaskingPolicy#return_data_type}
  */
  readonly returnDataType: string;
  /**
  * The schema in which to create the masking policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy.html#schema MaskingPolicy#schema}
  */
  readonly schema: string;
  /**
  * Specifies the data type to mask.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy.html#value_data_type MaskingPolicy#value_data_type}
  */
  readonly valueDataType: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy.html snowflake_masking_policy}
*/
export class MaskingPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy.html snowflake_masking_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaskingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MaskingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_masking_policy',
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
    this._maskingExpression = config.maskingExpression;
    this._name = config.name;
    this._returnDataType = config.returnDataType;
    this._schema = config.schema;
    this._valueDataType = config.valueDataType;
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

  // masking_expression - computed: false, optional: false, required: true
  private _maskingExpression: string;
  public get maskingExpression() {
    return this.getStringAttribute('masking_expression');
  }
  public set maskingExpression(value: string) {
    this._maskingExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingExpressionInput() {
    return this._maskingExpression
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

  // return_data_type - computed: false, optional: false, required: true
  private _returnDataType: string;
  public get returnDataType() {
    return this.getStringAttribute('return_data_type');
  }
  public set returnDataType(value: string) {
    this._returnDataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get returnDataTypeInput() {
    return this._returnDataType
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

  // value_data_type - computed: false, optional: false, required: true
  private _valueDataType: string;
  public get valueDataType() {
    return this.getStringAttribute('value_data_type');
  }
  public set valueDataType(value: string) {
    this._valueDataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueDataTypeInput() {
    return this._valueDataType
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      masking_expression: cdktf.stringToTerraform(this._maskingExpression),
      name: cdktf.stringToTerraform(this._name),
      return_data_type: cdktf.stringToTerraform(this._returnDataType),
      schema: cdktf.stringToTerraform(this._schema),
      value_data_type: cdktf.stringToTerraform(this._valueDataType),
    };
  }
}
