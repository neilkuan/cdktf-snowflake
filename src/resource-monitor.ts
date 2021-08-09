// https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of credits allocated monthly to the resource monitor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html#credit_quota ResourceMonitor#credit_quota}
  */
  readonly creditQuota?: number;
  /**
  * The date and time when the resource monitor suspends the assigned warehouses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html#end_timestamp ResourceMonitor#end_timestamp}
  */
  readonly endTimestamp?: string;
  /**
  * The frequency interval at which the credit usage resets to 0. If you set a frequency for a resource monitor, you must also set START_TIMESTAMP.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html#frequency ResourceMonitor#frequency}
  */
  readonly frequency?: string;
  /**
  * Identifier for the resource monitor; must be unique for your account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html#name ResourceMonitor#name}
  */
  readonly name: string;
  /**
  * A list of percentage thresholds at which to send an alert to subscribed users.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html#notify_triggers ResourceMonitor#notify_triggers}
  */
  readonly notifyTriggers?: number[];
  /**
  * The date and time when the resource monitor starts monitoring credit usage for the assigned warehouses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html#start_timestamp ResourceMonitor#start_timestamp}
  */
  readonly startTimestamp?: string;
  /**
  * A list of percentage thresholds at which to immediately suspend all warehouses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html#suspend_immediate_triggers ResourceMonitor#suspend_immediate_triggers}
  */
  readonly suspendImmediateTriggers?: number[];
  /**
  * A list of percentage thresholds at which to suspend all warehouses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html#suspend_triggers ResourceMonitor#suspend_triggers}
  */
  readonly suspendTriggers?: number[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html snowflake_resource_monitor}
*/
export class ResourceMonitor extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html snowflake_resource_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_resource_monitor',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._creditQuota = config.creditQuota;
    this._endTimestamp = config.endTimestamp;
    this._frequency = config.frequency;
    this._name = config.name;
    this._notifyTriggers = config.notifyTriggers;
    this._startTimestamp = config.startTimestamp;
    this._suspendImmediateTriggers = config.suspendImmediateTriggers;
    this._suspendTriggers = config.suspendTriggers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credit_quota - computed: true, optional: true, required: false
  private _creditQuota?: number;
  public get creditQuota() {
    return this.getNumberAttribute('credit_quota');
  }
  public set creditQuota(value: number) {
    this._creditQuota = value;
  }
  public resetCreditQuota() {
    this._creditQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditQuotaInput() {
    return this._creditQuota
  }

  // end_timestamp - computed: false, optional: true, required: false
  private _endTimestamp?: string;
  public get endTimestamp() {
    return this.getStringAttribute('end_timestamp');
  }
  public set endTimestamp(value: string ) {
    this._endTimestamp = value;
  }
  public resetEndTimestamp() {
    this._endTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimestampInput() {
    return this._endTimestamp
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string;
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency
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

  // notify_triggers - computed: false, optional: true, required: false
  private _notifyTriggers?: number[];
  public get notifyTriggers() {
    return this.interpolationForAttribute('notify_triggers') as any;
  }
  public set notifyTriggers(value: number[] ) {
    this._notifyTriggers = value;
  }
  public resetNotifyTriggers() {
    this._notifyTriggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyTriggersInput() {
    return this._notifyTriggers
  }

  // start_timestamp - computed: true, optional: true, required: false
  private _startTimestamp?: string;
  public get startTimestamp() {
    return this.getStringAttribute('start_timestamp');
  }
  public set startTimestamp(value: string) {
    this._startTimestamp = value;
  }
  public resetStartTimestamp() {
    this._startTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimestampInput() {
    return this._startTimestamp
  }

  // suspend_immediate_triggers - computed: false, optional: true, required: false
  private _suspendImmediateTriggers?: number[];
  public get suspendImmediateTriggers() {
    return this.interpolationForAttribute('suspend_immediate_triggers') as any;
  }
  public set suspendImmediateTriggers(value: number[] ) {
    this._suspendImmediateTriggers = value;
  }
  public resetSuspendImmediateTriggers() {
    this._suspendImmediateTriggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendImmediateTriggersInput() {
    return this._suspendImmediateTriggers
  }

  // suspend_triggers - computed: false, optional: true, required: false
  private _suspendTriggers?: number[];
  public get suspendTriggers() {
    return this.interpolationForAttribute('suspend_triggers') as any;
  }
  public set suspendTriggers(value: number[] ) {
    this._suspendTriggers = value;
  }
  public resetSuspendTriggers() {
    this._suspendTriggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendTriggersInput() {
    return this._suspendTriggers
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credit_quota: cdktf.numberToTerraform(this._creditQuota),
      end_timestamp: cdktf.stringToTerraform(this._endTimestamp),
      frequency: cdktf.stringToTerraform(this._frequency),
      name: cdktf.stringToTerraform(this._name),
      notify_triggers: cdktf.listMapper(cdktf.numberToTerraform)(this._notifyTriggers),
      start_timestamp: cdktf.stringToTerraform(this._startTimestamp),
      suspend_immediate_triggers: cdktf.listMapper(cdktf.numberToTerraform)(this._suspendImmediateTriggers),
      suspend_triggers: cdktf.listMapper(cdktf.numberToTerraform)(this._suspendTriggers),
    };
  }
}
