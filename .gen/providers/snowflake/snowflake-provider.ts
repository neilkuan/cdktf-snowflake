// https://www.terraform.io/docs/providers/snowflake
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnowflakeProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#account SnowflakeProvider#account}
  */
  readonly account: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#browser_auth SnowflakeProvider#browser_auth}
  */
  readonly browserAuth?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_access_token SnowflakeProvider#oauth_access_token}
  */
  readonly oauthAccessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_client_id SnowflakeProvider#oauth_client_id}
  */
  readonly oauthClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_client_secret SnowflakeProvider#oauth_client_secret}
  */
  readonly oauthClientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_endpoint SnowflakeProvider#oauth_endpoint}
  */
  readonly oauthEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_redirect_url SnowflakeProvider#oauth_redirect_url}
  */
  readonly oauthRedirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_refresh_token SnowflakeProvider#oauth_refresh_token}
  */
  readonly oauthRefreshToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#password SnowflakeProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#private_key SnowflakeProvider#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#private_key_path SnowflakeProvider#private_key_path}
  */
  readonly privateKeyPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#region SnowflakeProvider#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#role SnowflakeProvider#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#username SnowflakeProvider#username}
  */
  readonly username: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#alias SnowflakeProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake snowflake}
*/
export class SnowflakeProvider extends cdktf.TerraformProvider {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake snowflake} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnowflakeProviderConfig
  */
  public constructor(scope: Construct, id: string, config: SnowflakeProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersionConstraint: '~> 0.25.15'
      },
      terraformProviderSource: 'chanzuckerberg/snowflake'
    });
    this._account = config.account;
    this._browserAuth = config.browserAuth;
    this._oauthAccessToken = config.oauthAccessToken;
    this._oauthClientId = config.oauthClientId;
    this._oauthClientSecret = config.oauthClientSecret;
    this._oauthEndpoint = config.oauthEndpoint;
    this._oauthRedirectUrl = config.oauthRedirectUrl;
    this._oauthRefreshToken = config.oauthRefreshToken;
    this._password = config.password;
    this._privateKey = config.privateKey;
    this._privateKeyPath = config.privateKeyPath;
    this._region = config.region;
    this._role = config.role;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: false, required: true
  private _account: string;
  public get account() {
    return this._account;
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account
  }

  // browser_auth - computed: false, optional: true, required: false
  private _browserAuth?: boolean;
  public get browserAuth() {
    return this._browserAuth;
  }
  public set browserAuth(value: boolean  | undefined) {
    this._browserAuth = value;
  }
  public resetBrowserAuth() {
    this._browserAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserAuthInput() {
    return this._browserAuth
  }

  // oauth_access_token - computed: false, optional: true, required: false
  private _oauthAccessToken?: string;
  public get oauthAccessToken() {
    return this._oauthAccessToken;
  }
  public set oauthAccessToken(value: string  | undefined) {
    this._oauthAccessToken = value;
  }
  public resetOauthAccessToken() {
    this._oauthAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAccessTokenInput() {
    return this._oauthAccessToken
  }

  // oauth_client_id - computed: false, optional: true, required: false
  private _oauthClientId?: string;
  public get oauthClientId() {
    return this._oauthClientId;
  }
  public set oauthClientId(value: string  | undefined) {
    this._oauthClientId = value;
  }
  public resetOauthClientId() {
    this._oauthClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientIdInput() {
    return this._oauthClientId
  }

  // oauth_client_secret - computed: false, optional: true, required: false
  private _oauthClientSecret?: string;
  public get oauthClientSecret() {
    return this._oauthClientSecret;
  }
  public set oauthClientSecret(value: string  | undefined) {
    this._oauthClientSecret = value;
  }
  public resetOauthClientSecret() {
    this._oauthClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientSecretInput() {
    return this._oauthClientSecret
  }

  // oauth_endpoint - computed: false, optional: true, required: false
  private _oauthEndpoint?: string;
  public get oauthEndpoint() {
    return this._oauthEndpoint;
  }
  public set oauthEndpoint(value: string  | undefined) {
    this._oauthEndpoint = value;
  }
  public resetOauthEndpoint() {
    this._oauthEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthEndpointInput() {
    return this._oauthEndpoint
  }

  // oauth_redirect_url - computed: false, optional: true, required: false
  private _oauthRedirectUrl?: string;
  public get oauthRedirectUrl() {
    return this._oauthRedirectUrl;
  }
  public set oauthRedirectUrl(value: string  | undefined) {
    this._oauthRedirectUrl = value;
  }
  public resetOauthRedirectUrl() {
    this._oauthRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRedirectUrlInput() {
    return this._oauthRedirectUrl
  }

  // oauth_refresh_token - computed: false, optional: true, required: false
  private _oauthRefreshToken?: string;
  public get oauthRefreshToken() {
    return this._oauthRefreshToken;
  }
  public set oauthRefreshToken(value: string  | undefined) {
    this._oauthRefreshToken = value;
  }
  public resetOauthRefreshToken() {
    this._oauthRefreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRefreshTokenInput() {
    return this._oauthRefreshToken
  }

  // password - computed: false, optional: true, required: false
  private _password?: string;
  public get password() {
    return this._password;
  }
  public set password(value: string  | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string;
  public get privateKey() {
    return this._privateKey;
  }
  public set privateKey(value: string  | undefined) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey
  }

  // private_key_path - computed: false, optional: true, required: false
  private _privateKeyPath?: string;
  public get privateKeyPath() {
    return this._privateKeyPath;
  }
  public set privateKeyPath(value: string  | undefined) {
    this._privateKeyPath = value;
  }
  public resetPrivateKeyPath() {
    this._privateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPathInput() {
    return this._privateKeyPath
  }

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region;
  }
  public set region(value: string  | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // role - computed: false, optional: true, required: false
  private _role?: string;
  public get role() {
    return this._role;
  }
  public set role(value: string  | undefined) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // username - computed: false, optional: false, required: true
  private _username: string;
  public get username() {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string;
  public get alias() {
    return this._alias;
  }
  public set alias(value: string  | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.stringToTerraform(this._account),
      browser_auth: cdktf.booleanToTerraform(this._browserAuth),
      oauth_access_token: cdktf.stringToTerraform(this._oauthAccessToken),
      oauth_client_id: cdktf.stringToTerraform(this._oauthClientId),
      oauth_client_secret: cdktf.stringToTerraform(this._oauthClientSecret),
      oauth_endpoint: cdktf.stringToTerraform(this._oauthEndpoint),
      oauth_redirect_url: cdktf.stringToTerraform(this._oauthRedirectUrl),
      oauth_refresh_token: cdktf.stringToTerraform(this._oauthRefreshToken),
      password: cdktf.stringToTerraform(this._password),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_path: cdktf.stringToTerraform(this._privateKeyPath),
      region: cdktf.stringToTerraform(this._region),
      role: cdktf.stringToTerraform(this._role),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
