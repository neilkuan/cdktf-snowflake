// https://www.terraform.io/docs/providers/snowflake/r/task.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the predecessor task in the same database and schema of the current task. When a run of the predecessor task finishes successfully, it triggers this task (after a brief lag).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#after Task#after}
  */
  readonly after?: string;
  /**
  * Specifies a comment for the task.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#comment Task#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the task.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#database Task#database}
  */
  readonly database: string;
  /**
  * Specifies if the task should be started (enabled) after creation or should remain suspended (default).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#enabled Task#enabled}
  */
  readonly enabled?: boolean;
  /**
  * Specifies the identifier for the task; must be unique for the database and schema in which the task is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#name Task#name}
  */
  readonly name: string;
  /**
  * The schedule for periodically running the task. This can be a cron or interval in minutes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#schedule Task#schedule}
  */
  readonly schedule?: string;
  /**
  * The schema in which to create the task.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#schema Task#schema}
  */
  readonly schema: string;
  /**
  * Specifies session parameters to set for the session when the task runs. A task supports all session parameters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#session_parameters Task#session_parameters}
  */
  readonly sessionParameters?: { [key: string]: string };
  /**
  * Any single SQL statement, or a call to a stored procedure, executed when the task runs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#sql_statement Task#sql_statement}
  */
  readonly sqlStatement: string;
  /**
  * Specifies the time limit on a single run of the task before it times out (in milliseconds).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#user_task_timeout_ms Task#user_task_timeout_ms}
  */
  readonly userTaskTimeoutMs?: number;
  /**
  * The warehouse the task will use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#warehouse Task#warehouse}
  */
  readonly warehouse: string;
  /**
  * Specifies a Boolean SQL expression; multiple conditions joined with AND/OR are supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#when Task#when}
  */
  readonly when?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/task.html snowflake_task}
*/
export class Task extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/task.html snowflake_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TaskConfig
  */
  public constructor(scope: Construct, id: string, config: TaskConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_task',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._after = config.after;
    this._comment = config.comment;
    this._database = config.database;
    this._enabled = config.enabled;
    this._name = config.name;
    this._schedule = config.schedule;
    this._schema = config.schema;
    this._sessionParameters = config.sessionParameters;
    this._sqlStatement = config.sqlStatement;
    this._userTaskTimeoutMs = config.userTaskTimeoutMs;
    this._warehouse = config.warehouse;
    this._when = config.when;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // after - computed: false, optional: true, required: false
  private _after?: string;
  public get after() {
    return this.getStringAttribute('after');
  }
  public set after(value: string ) {
    this._after = value;
  }
  public resetAfter() {
    this._after = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
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

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string;
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string ) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
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

  // session_parameters - computed: false, optional: true, required: false
  private _sessionParameters?: { [key: string]: string };
  public get sessionParameters() {
    return this.interpolationForAttribute('session_parameters') as any;
  }
  public set sessionParameters(value: { [key: string]: string } ) {
    this._sessionParameters = value;
  }
  public resetSessionParameters() {
    this._sessionParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionParametersInput() {
    return this._sessionParameters
  }

  // sql_statement - computed: false, optional: false, required: true
  private _sqlStatement: string;
  public get sqlStatement() {
    return this.getStringAttribute('sql_statement');
  }
  public set sqlStatement(value: string) {
    this._sqlStatement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlStatementInput() {
    return this._sqlStatement
  }

  // user_task_timeout_ms - computed: false, optional: true, required: false
  private _userTaskTimeoutMs?: number;
  public get userTaskTimeoutMs() {
    return this.getNumberAttribute('user_task_timeout_ms');
  }
  public set userTaskTimeoutMs(value: number ) {
    this._userTaskTimeoutMs = value;
  }
  public resetUserTaskTimeoutMs() {
    this._userTaskTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTaskTimeoutMsInput() {
    return this._userTaskTimeoutMs
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

  // when - computed: false, optional: true, required: false
  private _when?: string;
  public get when() {
    return this.getStringAttribute('when');
  }
  public set when(value: string ) {
    this._when = value;
  }
  public resetWhen() {
    this._when = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      after: cdktf.stringToTerraform(this._after),
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      schedule: cdktf.stringToTerraform(this._schedule),
      schema: cdktf.stringToTerraform(this._schema),
      session_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._sessionParameters),
      sql_statement: cdktf.stringToTerraform(this._sqlStatement),
      user_task_timeout_ms: cdktf.numberToTerraform(this._userTaskTimeoutMs),
      warehouse: cdktf.stringToTerraform(this._warehouse),
      when: cdktf.stringToTerraform(this._when),
    };
  }
}
