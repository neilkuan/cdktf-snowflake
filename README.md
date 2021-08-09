# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### AccountGrant <a name="cdktf-snowflake.AccountGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/account_grant.html snowflake_account_grant}.

#### Initializer <a name="cdktf-snowflake.AccountGrant.Initializer"></a>

```typescript
import { AccountGrant } from 'cdktf-snowflake'

new AccountGrant(scope: Construct, id: string, config?: AccountGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.AccountGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.AccountGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="cdktf-snowflake.AccountGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.AccountGrantConfig`](#cdktf-snowflake.AccountGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetPrivilege` <a name="cdktf-snowflake.AccountGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetRoles` <a name="cdktf-snowflake.AccountGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.AccountGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.AccountGrant.property.id"></a>

- *Type:* `string`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.AccountGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.AccountGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.AccountGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.AccountGrant.property.privilege"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.AccountGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.AccountGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


### ApiIntegration <a name="cdktf-snowflake.ApiIntegration"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/api_integration.html snowflake_api_integration}.

#### Initializer <a name="cdktf-snowflake.ApiIntegration.Initializer"></a>

```typescript
import { ApiIntegration } from 'cdktf-snowflake'

new ApiIntegration(scope: Construct, id: string, config: ApiIntegrationConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.parameter.config"></a>

- *Type:* [`cdktf-snowflake.ApiIntegrationConfig`](#cdktf-snowflake.ApiIntegrationConfig)

---

#### Methods <a name="Methods"></a>

##### `resetApiAwsRoleArn` <a name="cdktf-snowflake.ApiIntegration.resetApiAwsRoleArn"></a>

```typescript
public resetApiAwsRoleArn()
```

##### `resetApiBlockedPrefixes` <a name="cdktf-snowflake.ApiIntegration.resetApiBlockedPrefixes"></a>

```typescript
public resetApiBlockedPrefixes()
```

##### `resetAzureAdApplicationId` <a name="cdktf-snowflake.ApiIntegration.resetAzureAdApplicationId"></a>

```typescript
public resetAzureAdApplicationId()
```

##### `resetAzureTenantId` <a name="cdktf-snowflake.ApiIntegration.resetAzureTenantId"></a>

```typescript
public resetAzureTenantId()
```

##### `resetEnabled` <a name="cdktf-snowflake.ApiIntegration.resetEnabled"></a>

```typescript
public resetEnabled()
```


#### Properties <a name="Properties"></a>

##### `apiAllowedPrefixesInput`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.property.apiAllowedPrefixesInput"></a>

- *Type:* `string`[]

---

##### `apiAwsExternalId`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.property.apiAwsExternalId"></a>

- *Type:* `string`

---

##### `apiAwsIamUserArn`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.property.apiAwsIamUserArn"></a>

- *Type:* `string`

---

##### `apiProviderInput`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.property.apiProviderInput"></a>

- *Type:* `string`

---

##### `azureConsentUrl`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.property.azureConsentUrl"></a>

- *Type:* `string`

---

##### `azureMultiTenantAppName`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.property.azureMultiTenantAppName"></a>

- *Type:* `string`

---

##### `createdOn`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.property.createdOn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.property.nameInput"></a>

- *Type:* `string`

---

##### `apiAwsRoleArnInput`<sup>Optional</sup> <a name="cdktf-snowflake.ApiIntegration.property.apiAwsRoleArnInput"></a>

- *Type:* `string`

---

##### `apiBlockedPrefixesInput`<sup>Optional</sup> <a name="cdktf-snowflake.ApiIntegration.property.apiBlockedPrefixesInput"></a>

- *Type:* `string`[]

---

##### `azureAdApplicationIdInput`<sup>Optional</sup> <a name="cdktf-snowflake.ApiIntegration.property.azureAdApplicationIdInput"></a>

- *Type:* `string`

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="cdktf-snowflake.ApiIntegration.property.azureTenantIdInput"></a>

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="cdktf-snowflake.ApiIntegration.property.enabledInput"></a>

- *Type:* `boolean`

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.property.apiAllowedPrefixes"></a>

- *Type:* `string`[]

---

##### `apiAwsRoleArn`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.property.apiAwsRoleArn"></a>

- *Type:* `string`

---

##### `apiBlockedPrefixes`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.property.apiBlockedPrefixes"></a>

- *Type:* `string`[]

---

##### `apiProvider`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.property.apiProvider"></a>

- *Type:* `string`

---

##### `azureAdApplicationId`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.property.azureAdApplicationId"></a>

- *Type:* `string`

---

##### `azureTenantId`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.property.azureTenantId"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.property.enabled"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegration.property.name"></a>

- *Type:* `string`

---


### Database <a name="cdktf-snowflake.Database"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/database.html snowflake_database}.

#### Initializer <a name="cdktf-snowflake.Database.Initializer"></a>

```typescript
import { Database } from 'cdktf-snowflake'

new Database(scope: Construct, id: string, config: DatabaseConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.Database.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Database.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.Database.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DatabaseConfig`](#cdktf-snowflake.DatabaseConfig)

---

#### Methods <a name="Methods"></a>

##### `resetComment` <a name="cdktf-snowflake.Database.resetComment"></a>

```typescript
public resetComment()
```

##### `resetDataRetentionTimeInDays` <a name="cdktf-snowflake.Database.resetDataRetentionTimeInDays"></a>

```typescript
public resetDataRetentionTimeInDays()
```

##### `resetFromDatabase` <a name="cdktf-snowflake.Database.resetFromDatabase"></a>

```typescript
public resetFromDatabase()
```

##### `resetFromShare` <a name="cdktf-snowflake.Database.resetFromShare"></a>

```typescript
public resetFromShare()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Database.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.Database.property.nameInput"></a>

- *Type:* `string`

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.Database.property.commentInput"></a>

- *Type:* `string`

---

##### `dataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="cdktf-snowflake.Database.property.dataRetentionTimeInDaysInput"></a>

- *Type:* `number`

---

##### `fromDatabaseInput`<sup>Optional</sup> <a name="cdktf-snowflake.Database.property.fromDatabaseInput"></a>

- *Type:* `string`

---

##### `fromShareInput`<sup>Optional</sup> <a name="cdktf-snowflake.Database.property.fromShareInput"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.Database.property.comment"></a>

- *Type:* `string`

---

##### `dataRetentionTimeInDays`<sup>Required</sup> <a name="cdktf-snowflake.Database.property.dataRetentionTimeInDays"></a>

- *Type:* `number`

---

##### `fromDatabase`<sup>Required</sup> <a name="cdktf-snowflake.Database.property.fromDatabase"></a>

- *Type:* `string`

---

##### `fromShare`<sup>Required</sup> <a name="cdktf-snowflake.Database.property.fromShare"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.Database.property.name"></a>

- *Type:* `string`

---


### DatabaseGrant <a name="cdktf-snowflake.DatabaseGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/database_grant.html snowflake_database_grant}.

#### Initializer <a name="cdktf-snowflake.DatabaseGrant.Initializer"></a>

```typescript
import { DatabaseGrant } from 'cdktf-snowflake'

new DatabaseGrant(scope: Construct, id: string, config: DatabaseGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DatabaseGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DatabaseGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.DatabaseGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DatabaseGrantConfig`](#cdktf-snowflake.DatabaseGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetPrivilege` <a name="cdktf-snowflake.DatabaseGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetRoles` <a name="cdktf-snowflake.DatabaseGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetShares` <a name="cdktf-snowflake.DatabaseGrant.resetShares"></a>

```typescript
public resetShares()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.DatabaseGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `databaseNameInput`<sup>Required</sup> <a name="cdktf-snowflake.DatabaseGrant.property.databaseNameInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DatabaseGrant.property.id"></a>

- *Type:* `string`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `sharesInput`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseGrant.property.sharesInput"></a>

- *Type:* `string`[]

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.DatabaseGrant.property.databaseName"></a>

- *Type:* `string`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.DatabaseGrant.property.privilege"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.DatabaseGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `shares`<sup>Required</sup> <a name="cdktf-snowflake.DatabaseGrant.property.shares"></a>

- *Type:* `string`[]

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.DatabaseGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


### DataSnowflakeCurrentAccount <a name="cdktf-snowflake.DataSnowflakeCurrentAccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/current_account.html snowflake_current_account}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeCurrentAccount.Initializer"></a>

```typescript
import { DataSnowflakeCurrentAccount } from 'cdktf-snowflake'

new DataSnowflakeCurrentAccount(scope: Construct, id: string, config?: DataSnowflakeCurrentAccountConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeCurrentAccount.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeCurrentAccount.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeCurrentAccount.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeCurrentAccountConfig`](#cdktf-snowflake.DataSnowflakeCurrentAccountConfig)

---



#### Properties <a name="Properties"></a>

##### `account`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeCurrentAccount.property.account"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeCurrentAccount.property.id"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeCurrentAccount.property.region"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeCurrentAccount.property.url"></a>

- *Type:* `string`

---


### DataSnowflakeExternalFunctions <a name="cdktf-snowflake.DataSnowflakeExternalFunctions"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/external_functions.html snowflake_external_functions}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeExternalFunctions.Initializer"></a>

```typescript
import { DataSnowflakeExternalFunctions } from 'cdktf-snowflake'

new DataSnowflakeExternalFunctions(scope: Construct, id: string, config: DataSnowflakeExternalFunctionsConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctions.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctions.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctions.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeExternalFunctionsConfig`](#cdktf-snowflake.DataSnowflakeExternalFunctionsConfig)

---

#### Methods <a name="Methods"></a>

##### `externalFunctions` <a name="cdktf-snowflake.DataSnowflakeExternalFunctions.externalFunctions"></a>

```typescript
public externalFunctions(index: string)
```

###### `index`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctions.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctions.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctions.property.id"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctions.property.schemaInput"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctions.property.database"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctions.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeExternalTables <a name="cdktf-snowflake.DataSnowflakeExternalTables"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/external_tables.html snowflake_external_tables}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeExternalTables.Initializer"></a>

```typescript
import { DataSnowflakeExternalTables } from 'cdktf-snowflake'

new DataSnowflakeExternalTables(scope: Construct, id: string, config: DataSnowflakeExternalTablesConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTables.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTables.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTables.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeExternalTablesConfig`](#cdktf-snowflake.DataSnowflakeExternalTablesConfig)

---

#### Methods <a name="Methods"></a>

##### `externalTables` <a name="cdktf-snowflake.DataSnowflakeExternalTables.externalTables"></a>

```typescript
public externalTables(index: string)
```

###### `index`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTables.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTables.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTables.property.id"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTables.property.schemaInput"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTables.property.database"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTables.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeFileFormats <a name="cdktf-snowflake.DataSnowflakeFileFormats"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/file_formats.html snowflake_file_formats}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeFileFormats.Initializer"></a>

```typescript
import { DataSnowflakeFileFormats } from 'cdktf-snowflake'

new DataSnowflakeFileFormats(scope: Construct, id: string, config: DataSnowflakeFileFormatsConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormats.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormats.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormats.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeFileFormatsConfig`](#cdktf-snowflake.DataSnowflakeFileFormatsConfig)

---

#### Methods <a name="Methods"></a>

##### `fileFormats` <a name="cdktf-snowflake.DataSnowflakeFileFormats.fileFormats"></a>

```typescript
public fileFormats(index: string)
```

###### `index`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormats.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormats.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormats.property.id"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormats.property.schemaInput"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormats.property.database"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormats.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeMaskingPolicies <a name="cdktf-snowflake.DataSnowflakeMaskingPolicies"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/masking_policies.html snowflake_masking_policies}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeMaskingPolicies.Initializer"></a>

```typescript
import { DataSnowflakeMaskingPolicies } from 'cdktf-snowflake'

new DataSnowflakeMaskingPolicies(scope: Construct, id: string, config: DataSnowflakeMaskingPoliciesConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPolicies.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPolicies.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPolicies.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeMaskingPoliciesConfig`](#cdktf-snowflake.DataSnowflakeMaskingPoliciesConfig)

---

#### Methods <a name="Methods"></a>

##### `maskingPolicies` <a name="cdktf-snowflake.DataSnowflakeMaskingPolicies.maskingPolicies"></a>

```typescript
public maskingPolicies(index: string)
```

###### `index`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPolicies.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPolicies.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPolicies.property.id"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPolicies.property.schemaInput"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPolicies.property.database"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPolicies.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeMaterializedViews <a name="cdktf-snowflake.DataSnowflakeMaterializedViews"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/materialized_views.html snowflake_materialized_views}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeMaterializedViews.Initializer"></a>

```typescript
import { DataSnowflakeMaterializedViews } from 'cdktf-snowflake'

new DataSnowflakeMaterializedViews(scope: Construct, id: string, config: DataSnowflakeMaterializedViewsConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViews.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViews.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViews.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeMaterializedViewsConfig`](#cdktf-snowflake.DataSnowflakeMaterializedViewsConfig)

---

#### Methods <a name="Methods"></a>

##### `materializedViews` <a name="cdktf-snowflake.DataSnowflakeMaterializedViews.materializedViews"></a>

```typescript
public materializedViews(index: string)
```

###### `index`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViews.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViews.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViews.property.id"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViews.property.schemaInput"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViews.property.database"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViews.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakePipes <a name="cdktf-snowflake.DataSnowflakePipes"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/pipes.html snowflake_pipes}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakePipes.Initializer"></a>

```typescript
import { DataSnowflakePipes } from 'cdktf-snowflake'

new DataSnowflakePipes(scope: Construct, id: string, config: DataSnowflakePipesConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakePipes.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakePipes.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakePipes.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakePipesConfig`](#cdktf-snowflake.DataSnowflakePipesConfig)

---

#### Methods <a name="Methods"></a>

##### `pipes` <a name="cdktf-snowflake.DataSnowflakePipes.pipes"></a>

```typescript
public pipes(index: string)
```

###### `index`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakePipes.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakePipes.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakePipes.property.id"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakePipes.property.schemaInput"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakePipes.property.database"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakePipes.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeResourceMonitors <a name="cdktf-snowflake.DataSnowflakeResourceMonitors"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/resource_monitors.html snowflake_resource_monitors}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeResourceMonitors.Initializer"></a>

```typescript
import { DataSnowflakeResourceMonitors } from 'cdktf-snowflake'

new DataSnowflakeResourceMonitors(scope: Construct, id: string, config?: DataSnowflakeResourceMonitorsConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeResourceMonitors.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeResourceMonitors.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeResourceMonitors.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeResourceMonitorsConfig`](#cdktf-snowflake.DataSnowflakeResourceMonitorsConfig)

---

#### Methods <a name="Methods"></a>

##### `resourceMonitors` <a name="cdktf-snowflake.DataSnowflakeResourceMonitors.resourceMonitors"></a>

```typescript
public resourceMonitors(index: string)
```

###### `index`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeResourceMonitors.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeResourceMonitors.property.id"></a>

- *Type:* `string`

---


### DataSnowflakeRowAccessPolicies <a name="cdktf-snowflake.DataSnowflakeRowAccessPolicies"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/row_access_policies.html snowflake_row_access_policies}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeRowAccessPolicies.Initializer"></a>

```typescript
import { DataSnowflakeRowAccessPolicies } from 'cdktf-snowflake'

new DataSnowflakeRowAccessPolicies(scope: Construct, id: string, config: DataSnowflakeRowAccessPoliciesConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPolicies.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPolicies.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPolicies.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeRowAccessPoliciesConfig`](#cdktf-snowflake.DataSnowflakeRowAccessPoliciesConfig)

---

#### Methods <a name="Methods"></a>

##### `rowAccessPolicies` <a name="cdktf-snowflake.DataSnowflakeRowAccessPolicies.rowAccessPolicies"></a>

```typescript
public rowAccessPolicies(index: string)
```

###### `index`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPolicies.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPolicies.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPolicies.property.id"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPolicies.property.schemaInput"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPolicies.property.database"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPolicies.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeSchemas <a name="cdktf-snowflake.DataSnowflakeSchemas"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/schemas.html snowflake_schemas}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeSchemas.Initializer"></a>

```typescript
import { DataSnowflakeSchemas } from 'cdktf-snowflake'

new DataSnowflakeSchemas(scope: Construct, id: string, config: DataSnowflakeSchemasConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSchemas.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSchemas.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSchemas.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeSchemasConfig`](#cdktf-snowflake.DataSnowflakeSchemasConfig)

---

#### Methods <a name="Methods"></a>

##### `schemas` <a name="cdktf-snowflake.DataSnowflakeSchemas.schemas"></a>

```typescript
public schemas(index: string)
```

###### `index`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSchemas.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSchemas.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSchemas.property.id"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSchemas.property.database"></a>

- *Type:* `string`

---


### DataSnowflakeSequences <a name="cdktf-snowflake.DataSnowflakeSequences"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/sequences.html snowflake_sequences}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeSequences.Initializer"></a>

```typescript
import { DataSnowflakeSequences } from 'cdktf-snowflake'

new DataSnowflakeSequences(scope: Construct, id: string, config: DataSnowflakeSequencesConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSequences.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSequences.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSequences.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeSequencesConfig`](#cdktf-snowflake.DataSnowflakeSequencesConfig)

---

#### Methods <a name="Methods"></a>

##### `sequences` <a name="cdktf-snowflake.DataSnowflakeSequences.sequences"></a>

```typescript
public sequences(index: string)
```

###### `index`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSequences.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSequences.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSequences.property.id"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSequences.property.schemaInput"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSequences.property.database"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSequences.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeStages <a name="cdktf-snowflake.DataSnowflakeStages"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/stages.html snowflake_stages}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeStages.Initializer"></a>

```typescript
import { DataSnowflakeStages } from 'cdktf-snowflake'

new DataSnowflakeStages(scope: Construct, id: string, config: DataSnowflakeStagesConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStages.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStages.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStages.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeStagesConfig`](#cdktf-snowflake.DataSnowflakeStagesConfig)

---

#### Methods <a name="Methods"></a>

##### `stages` <a name="cdktf-snowflake.DataSnowflakeStages.stages"></a>

```typescript
public stages(index: string)
```

###### `index`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStages.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStages.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStages.property.id"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStages.property.schemaInput"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStages.property.database"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStages.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeStorageIntegrations <a name="cdktf-snowflake.DataSnowflakeStorageIntegrations"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/storage_integrations.html snowflake_storage_integrations}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeStorageIntegrations.Initializer"></a>

```typescript
import { DataSnowflakeStorageIntegrations } from 'cdktf-snowflake'

new DataSnowflakeStorageIntegrations(scope: Construct, id: string, config?: DataSnowflakeStorageIntegrationsConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStorageIntegrations.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStorageIntegrations.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeStorageIntegrations.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeStorageIntegrationsConfig`](#cdktf-snowflake.DataSnowflakeStorageIntegrationsConfig)

---

#### Methods <a name="Methods"></a>

##### `storageIntegrations` <a name="cdktf-snowflake.DataSnowflakeStorageIntegrations.storageIntegrations"></a>

```typescript
public storageIntegrations(index: string)
```

###### `index`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStorageIntegrations.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStorageIntegrations.property.id"></a>

- *Type:* `string`

---


### DataSnowflakeStreams <a name="cdktf-snowflake.DataSnowflakeStreams"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/streams.html snowflake_streams}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeStreams.Initializer"></a>

```typescript
import { DataSnowflakeStreams } from 'cdktf-snowflake'

new DataSnowflakeStreams(scope: Construct, id: string, config: DataSnowflakeStreamsConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStreams.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStreams.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStreams.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeStreamsConfig`](#cdktf-snowflake.DataSnowflakeStreamsConfig)

---

#### Methods <a name="Methods"></a>

##### `streams` <a name="cdktf-snowflake.DataSnowflakeStreams.streams"></a>

```typescript
public streams(index: string)
```

###### `index`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStreams.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStreams.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStreams.property.id"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStreams.property.schemaInput"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStreams.property.database"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStreams.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeSystemGenerateScimAccessToken <a name="cdktf-snowflake.DataSnowflakeSystemGenerateScimAccessToken"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/system_generate_scim_access_token.html snowflake_system_generate_scim_access_token}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeSystemGenerateScimAccessToken.Initializer"></a>

```typescript
import { DataSnowflakeSystemGenerateScimAccessToken } from 'cdktf-snowflake'

new DataSnowflakeSystemGenerateScimAccessToken(scope: Construct, id: string, config: DataSnowflakeSystemGenerateScimAccessTokenConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGenerateScimAccessToken.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGenerateScimAccessToken.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGenerateScimAccessToken.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeSystemGenerateScimAccessTokenConfig`](#cdktf-snowflake.DataSnowflakeSystemGenerateScimAccessTokenConfig)

---



#### Properties <a name="Properties"></a>

##### `accessToken`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGenerateScimAccessToken.property.accessToken"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGenerateScimAccessToken.property.id"></a>

- *Type:* `string`

---

##### `integrationNameInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGenerateScimAccessToken.property.integrationNameInput"></a>

- *Type:* `string`

---

##### `integrationName`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGenerateScimAccessToken.property.integrationName"></a>

- *Type:* `string`

---


### DataSnowflakeSystemGetAwsSnsIamPolicy <a name="cdktf-snowflake.DataSnowflakeSystemGetAwsSnsIamPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_aws_sns_iam_policy.html snowflake_system_get_aws_sns_iam_policy}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer"></a>

```typescript
import { DataSnowflakeSystemGetAwsSnsIamPolicy } from 'cdktf-snowflake'

new DataSnowflakeSystemGetAwsSnsIamPolicy(scope: Construct, id: string, config: DataSnowflakeSystemGetAwsSnsIamPolicyConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetAwsSnsIamPolicy.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetAwsSnsIamPolicy.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetAwsSnsIamPolicy.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeSystemGetAwsSnsIamPolicyConfig`](#cdktf-snowflake.DataSnowflakeSystemGetAwsSnsIamPolicyConfig)

---



#### Properties <a name="Properties"></a>

##### `awsSnsTopicArnInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetAwsSnsIamPolicy.property.awsSnsTopicArnInput"></a>

- *Type:* `string`

---

##### `awsSnsTopicPolicyJson`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetAwsSnsIamPolicy.property.awsSnsTopicPolicyJson"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetAwsSnsIamPolicy.property.id"></a>

- *Type:* `string`

---

##### `awsSnsTopicArn`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetAwsSnsIamPolicy.property.awsSnsTopicArn"></a>

- *Type:* `string`

---


### DataSnowflakeSystemGetPrivatelinkConfig <a name="cdktf-snowflake.DataSnowflakeSystemGetPrivatelinkConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_privatelink_config.html snowflake_system_get_privatelink_config}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeSystemGetPrivatelinkConfig.Initializer"></a>

```typescript
import { DataSnowflakeSystemGetPrivatelinkConfig } from 'cdktf-snowflake'

new DataSnowflakeSystemGetPrivatelinkConfig(scope: Construct, id: string, config?: DataSnowflakeSystemGetPrivatelinkConfigConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetPrivatelinkConfig.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetPrivatelinkConfig.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetPrivatelinkConfig.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeSystemGetPrivatelinkConfigConfig`](#cdktf-snowflake.DataSnowflakeSystemGetPrivatelinkConfigConfig)

---



#### Properties <a name="Properties"></a>

##### `accountName`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetPrivatelinkConfig.property.accountName"></a>

- *Type:* `string`

---

##### `accountUrl`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetPrivatelinkConfig.property.accountUrl"></a>

- *Type:* `string`

---

##### `awsVpceId`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetPrivatelinkConfig.property.awsVpceId"></a>

- *Type:* `string`

---

##### `azurePlsId`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetPrivatelinkConfig.property.azurePlsId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetPrivatelinkConfig.property.id"></a>

- *Type:* `string`

---

##### `oscpUrl`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetPrivatelinkConfig.property.oscpUrl"></a>

- *Type:* `string`

---


### DataSnowflakeSystemGetSnowflakePlatformInfo <a name="cdktf-snowflake.DataSnowflakeSystemGetSnowflakePlatformInfo"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_snowflake_platform_info.html snowflake_system_get_snowflake_platform_info}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer"></a>

```typescript
import { DataSnowflakeSystemGetSnowflakePlatformInfo } from 'cdktf-snowflake'

new DataSnowflakeSystemGetSnowflakePlatformInfo(scope: Construct, id: string, config?: DataSnowflakeSystemGetSnowflakePlatformInfoConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetSnowflakePlatformInfo.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetSnowflakePlatformInfo.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetSnowflakePlatformInfo.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeSystemGetSnowflakePlatformInfoConfig`](#cdktf-snowflake.DataSnowflakeSystemGetSnowflakePlatformInfoConfig)

---



#### Properties <a name="Properties"></a>

##### `awsVpcIds`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetSnowflakePlatformInfo.property.awsVpcIds"></a>

- *Type:* `string`[]

---

##### `azureVnetSubnetIds`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetSnowflakePlatformInfo.property.azureVnetSubnetIds"></a>

- *Type:* `string`[]

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetSnowflakePlatformInfo.property.id"></a>

- *Type:* `string`

---


### DataSnowflakeTables <a name="cdktf-snowflake.DataSnowflakeTables"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/tables.html snowflake_tables}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeTables.Initializer"></a>

```typescript
import { DataSnowflakeTables } from 'cdktf-snowflake'

new DataSnowflakeTables(scope: Construct, id: string, config: DataSnowflakeTablesConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTables.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTables.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTables.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeTablesConfig`](#cdktf-snowflake.DataSnowflakeTablesConfig)

---

#### Methods <a name="Methods"></a>

##### `tables` <a name="cdktf-snowflake.DataSnowflakeTables.tables"></a>

```typescript
public tables(index: string)
```

###### `index`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTables.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTables.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTables.property.id"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTables.property.schemaInput"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTables.property.database"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTables.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeTasks <a name="cdktf-snowflake.DataSnowflakeTasks"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/tasks.html snowflake_tasks}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeTasks.Initializer"></a>

```typescript
import { DataSnowflakeTasks } from 'cdktf-snowflake'

new DataSnowflakeTasks(scope: Construct, id: string, config: DataSnowflakeTasksConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTasks.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTasks.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTasks.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeTasksConfig`](#cdktf-snowflake.DataSnowflakeTasksConfig)

---

#### Methods <a name="Methods"></a>

##### `tasks` <a name="cdktf-snowflake.DataSnowflakeTasks.tasks"></a>

```typescript
public tasks(index: string)
```

###### `index`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTasks.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTasks.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTasks.property.id"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTasks.property.schemaInput"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTasks.property.database"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTasks.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeViews <a name="cdktf-snowflake.DataSnowflakeViews"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/views.html snowflake_views}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeViews.Initializer"></a>

```typescript
import { DataSnowflakeViews } from 'cdktf-snowflake'

new DataSnowflakeViews(scope: Construct, id: string, config: DataSnowflakeViewsConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeViews.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeViews.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeViews.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeViewsConfig`](#cdktf-snowflake.DataSnowflakeViewsConfig)

---

#### Methods <a name="Methods"></a>

##### `views` <a name="cdktf-snowflake.DataSnowflakeViews.views"></a>

```typescript
public views(index: string)
```

###### `index`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeViews.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeViews.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeViews.property.id"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeViews.property.schemaInput"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeViews.property.database"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeViews.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeWarehouses <a name="cdktf-snowflake.DataSnowflakeWarehouses"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/warehouses.html snowflake_warehouses}.

#### Initializer <a name="cdktf-snowflake.DataSnowflakeWarehouses.Initializer"></a>

```typescript
import { DataSnowflakeWarehouses } from 'cdktf-snowflake'

new DataSnowflakeWarehouses(scope: Construct, id: string, config?: DataSnowflakeWarehousesConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeWarehouses.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeWarehouses.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeWarehouses.parameter.config"></a>

- *Type:* [`cdktf-snowflake.DataSnowflakeWarehousesConfig`](#cdktf-snowflake.DataSnowflakeWarehousesConfig)

---

#### Methods <a name="Methods"></a>

##### `warehouses` <a name="cdktf-snowflake.DataSnowflakeWarehouses.warehouses"></a>

```typescript
public warehouses(index: string)
```

###### `index`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeWarehouses.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeWarehouses.property.id"></a>

- *Type:* `string`

---


### ExternalFunction <a name="cdktf-snowflake.ExternalFunction"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html snowflake_external_function}.

#### Initializer <a name="cdktf-snowflake.ExternalFunction.Initializer"></a>

```typescript
import { ExternalFunction } from 'cdktf-snowflake'

new ExternalFunction(scope: Construct, id: string, config: ExternalFunctionConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.parameter.config"></a>

- *Type:* [`cdktf-snowflake.ExternalFunctionConfig`](#cdktf-snowflake.ExternalFunctionConfig)

---

#### Methods <a name="Methods"></a>

##### `resetArg` <a name="cdktf-snowflake.ExternalFunction.resetArg"></a>

```typescript
public resetArg()
```

##### `resetComment` <a name="cdktf-snowflake.ExternalFunction.resetComment"></a>

```typescript
public resetComment()
```

##### `resetCompression` <a name="cdktf-snowflake.ExternalFunction.resetCompression"></a>

```typescript
public resetCompression()
```

##### `resetContextHeaders` <a name="cdktf-snowflake.ExternalFunction.resetContextHeaders"></a>

```typescript
public resetContextHeaders()
```

##### `resetHeader` <a name="cdktf-snowflake.ExternalFunction.resetHeader"></a>

```typescript
public resetHeader()
```

##### `resetMaxBatchRows` <a name="cdktf-snowflake.ExternalFunction.resetMaxBatchRows"></a>

```typescript
public resetMaxBatchRows()
```

##### `resetNullInputBehavior` <a name="cdktf-snowflake.ExternalFunction.resetNullInputBehavior"></a>

```typescript
public resetNullInputBehavior()
```

##### `resetReturnNullAllowed` <a name="cdktf-snowflake.ExternalFunction.resetReturnNullAllowed"></a>

```typescript
public resetReturnNullAllowed()
```


#### Properties <a name="Properties"></a>

##### `apiIntegrationInput`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.apiIntegrationInput"></a>

- *Type:* `string`

---

##### `createdOn`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.createdOn"></a>

- *Type:* `string`

---

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.nameInput"></a>

- *Type:* `string`

---

##### `returnBehaviorInput`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.returnBehaviorInput"></a>

- *Type:* `string`

---

##### `returnTypeInput`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.returnTypeInput"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.schemaInput"></a>

- *Type:* `string`

---

##### `urlOfProxyAndResourceInput`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.urlOfProxyAndResourceInput"></a>

- *Type:* `string`

---

##### `argInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunction.property.argInput"></a>

- *Type:* [`cdktf-snowflake.ExternalFunctionArg`](#cdktf-snowflake.ExternalFunctionArg)[]

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunction.property.commentInput"></a>

- *Type:* `string`

---

##### `compressionInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunction.property.compressionInput"></a>

- *Type:* `string`

---

##### `contextHeadersInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunction.property.contextHeadersInput"></a>

- *Type:* `string`[]

---

##### `headerInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunction.property.headerInput"></a>

- *Type:* [`cdktf-snowflake.ExternalFunctionHeader`](#cdktf-snowflake.ExternalFunctionHeader)[]

---

##### `maxBatchRowsInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunction.property.maxBatchRowsInput"></a>

- *Type:* `number`

---

##### `nullInputBehaviorInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunction.property.nullInputBehaviorInput"></a>

- *Type:* `string`

---

##### `returnNullAllowedInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunction.property.returnNullAllowedInput"></a>

- *Type:* `boolean`

---

##### `apiIntegration`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.apiIntegration"></a>

- *Type:* `string`

---

##### `arg`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.arg"></a>

- *Type:* [`cdktf-snowflake.ExternalFunctionArg`](#cdktf-snowflake.ExternalFunctionArg)[]

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.comment"></a>

- *Type:* `string`

---

##### `compression`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.compression"></a>

- *Type:* `string`

---

##### `contextHeaders`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.contextHeaders"></a>

- *Type:* `string`[]

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.database"></a>

- *Type:* `string`

---

##### `header`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.header"></a>

- *Type:* [`cdktf-snowflake.ExternalFunctionHeader`](#cdktf-snowflake.ExternalFunctionHeader)[]

---

##### `maxBatchRows`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.maxBatchRows"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.name"></a>

- *Type:* `string`

---

##### `nullInputBehavior`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.nullInputBehavior"></a>

- *Type:* `string`

---

##### `returnBehavior`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.returnBehavior"></a>

- *Type:* `string`

---

##### `returnNullAllowed`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.returnNullAllowed"></a>

- *Type:* `boolean`

---

##### `returnType`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.returnType"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.schema"></a>

- *Type:* `string`

---

##### `urlOfProxyAndResource`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunction.property.urlOfProxyAndResource"></a>

- *Type:* `string`

---


### ExternalTable <a name="cdktf-snowflake.ExternalTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html snowflake_external_table}.

#### Initializer <a name="cdktf-snowflake.ExternalTable.Initializer"></a>

```typescript
import { ExternalTable } from 'cdktf-snowflake'

new ExternalTable(scope: Construct, id: string, config: ExternalTableConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.parameter.config"></a>

- *Type:* [`cdktf-snowflake.ExternalTableConfig`](#cdktf-snowflake.ExternalTableConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAutoRefresh` <a name="cdktf-snowflake.ExternalTable.resetAutoRefresh"></a>

```typescript
public resetAutoRefresh()
```

##### `resetAwsSnsTopic` <a name="cdktf-snowflake.ExternalTable.resetAwsSnsTopic"></a>

```typescript
public resetAwsSnsTopic()
```

##### `resetComment` <a name="cdktf-snowflake.ExternalTable.resetComment"></a>

```typescript
public resetComment()
```

##### `resetCopyGrants` <a name="cdktf-snowflake.ExternalTable.resetCopyGrants"></a>

```typescript
public resetCopyGrants()
```

##### `resetPartitionBy` <a name="cdktf-snowflake.ExternalTable.resetPartitionBy"></a>

```typescript
public resetPartitionBy()
```

##### `resetRefreshOnCreate` <a name="cdktf-snowflake.ExternalTable.resetRefreshOnCreate"></a>

```typescript
public resetRefreshOnCreate()
```


#### Properties <a name="Properties"></a>

##### `columnInput`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.columnInput"></a>

- *Type:* [`cdktf-snowflake.ExternalTableColumn`](#cdktf-snowflake.ExternalTableColumn)[]

---

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.databaseInput"></a>

- *Type:* `string`

---

##### `fileFormatInput`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.fileFormatInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.id"></a>

- *Type:* `string`

---

##### `locationInput`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.locationInput"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.nameInput"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.owner"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.schemaInput"></a>

- *Type:* `string`

---

##### `autoRefreshInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTable.property.autoRefreshInput"></a>

- *Type:* `boolean`

---

##### `awsSnsTopicInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTable.property.awsSnsTopicInput"></a>

- *Type:* `string`

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTable.property.commentInput"></a>

- *Type:* `string`

---

##### `copyGrantsInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTable.property.copyGrantsInput"></a>

- *Type:* `boolean`

---

##### `partitionByInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTable.property.partitionByInput"></a>

- *Type:* `string`[]

---

##### `refreshOnCreateInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTable.property.refreshOnCreateInput"></a>

- *Type:* `boolean`

---

##### `autoRefresh`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.autoRefresh"></a>

- *Type:* `boolean`

---

##### `awsSnsTopic`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.awsSnsTopic"></a>

- *Type:* `string`

---

##### `column`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.column"></a>

- *Type:* [`cdktf-snowflake.ExternalTableColumn`](#cdktf-snowflake.ExternalTableColumn)[]

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.comment"></a>

- *Type:* `string`

---

##### `copyGrants`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.copyGrants"></a>

- *Type:* `boolean`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.database"></a>

- *Type:* `string`

---

##### `fileFormat`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.fileFormat"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.location"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.name"></a>

- *Type:* `string`

---

##### `partitionBy`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.partitionBy"></a>

- *Type:* `string`[]

---

##### `refreshOnCreate`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.refreshOnCreate"></a>

- *Type:* `boolean`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTable.property.schema"></a>

- *Type:* `string`

---


### ExternalTableGrant <a name="cdktf-snowflake.ExternalTableGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/external_table_grant.html snowflake_external_table_grant}.

#### Initializer <a name="cdktf-snowflake.ExternalTableGrant.Initializer"></a>

```typescript
import { ExternalTableGrant } from 'cdktf-snowflake'

new ExternalTableGrant(scope: Construct, id: string, config: ExternalTableGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.ExternalTableGrantConfig`](#cdktf-snowflake.ExternalTableGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetExternalTableName` <a name="cdktf-snowflake.ExternalTableGrant.resetExternalTableName"></a>

```typescript
public resetExternalTableName()
```

##### `resetOnFuture` <a name="cdktf-snowflake.ExternalTableGrant.resetOnFuture"></a>

```typescript
public resetOnFuture()
```

##### `resetPrivilege` <a name="cdktf-snowflake.ExternalTableGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetRoles` <a name="cdktf-snowflake.ExternalTableGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetShares` <a name="cdktf-snowflake.ExternalTableGrant.resetShares"></a>

```typescript
public resetShares()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.ExternalTableGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `databaseNameInput`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableGrant.property.databaseNameInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableGrant.property.id"></a>

- *Type:* `string`

---

##### `schemaNameInput`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableGrant.property.schemaNameInput"></a>

- *Type:* `string`

---

##### `externalTableNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableGrant.property.externalTableNameInput"></a>

- *Type:* `string`

---

##### `onFutureInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableGrant.property.onFutureInput"></a>

- *Type:* `boolean`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `sharesInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableGrant.property.sharesInput"></a>

- *Type:* `string`[]

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableGrant.property.databaseName"></a>

- *Type:* `string`

---

##### `externalTableName`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableGrant.property.externalTableName"></a>

- *Type:* `string`

---

##### `onFuture`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableGrant.property.onFuture"></a>

- *Type:* `boolean`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableGrant.property.privilege"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableGrant.property.schemaName"></a>

- *Type:* `string`

---

##### `shares`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableGrant.property.shares"></a>

- *Type:* `string`[]

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


### FileFormat <a name="cdktf-snowflake.FileFormat"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html snowflake_file_format}.

#### Initializer <a name="cdktf-snowflake.FileFormat.Initializer"></a>

```typescript
import { FileFormat } from 'cdktf-snowflake'

new FileFormat(scope: Construct, id: string, config: FileFormatConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.parameter.config"></a>

- *Type:* [`cdktf-snowflake.FileFormatConfig`](#cdktf-snowflake.FileFormatConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAllowDuplicate` <a name="cdktf-snowflake.FileFormat.resetAllowDuplicate"></a>

```typescript
public resetAllowDuplicate()
```

##### `resetBinaryAsText` <a name="cdktf-snowflake.FileFormat.resetBinaryAsText"></a>

```typescript
public resetBinaryAsText()
```

##### `resetBinaryFormat` <a name="cdktf-snowflake.FileFormat.resetBinaryFormat"></a>

```typescript
public resetBinaryFormat()
```

##### `resetComment` <a name="cdktf-snowflake.FileFormat.resetComment"></a>

```typescript
public resetComment()
```

##### `resetCompression` <a name="cdktf-snowflake.FileFormat.resetCompression"></a>

```typescript
public resetCompression()
```

##### `resetDateFormat` <a name="cdktf-snowflake.FileFormat.resetDateFormat"></a>

```typescript
public resetDateFormat()
```

##### `resetDisableAutoConvert` <a name="cdktf-snowflake.FileFormat.resetDisableAutoConvert"></a>

```typescript
public resetDisableAutoConvert()
```

##### `resetDisableSnowflakeData` <a name="cdktf-snowflake.FileFormat.resetDisableSnowflakeData"></a>

```typescript
public resetDisableSnowflakeData()
```

##### `resetEmptyFieldAsNull` <a name="cdktf-snowflake.FileFormat.resetEmptyFieldAsNull"></a>

```typescript
public resetEmptyFieldAsNull()
```

##### `resetEnableOctal` <a name="cdktf-snowflake.FileFormat.resetEnableOctal"></a>

```typescript
public resetEnableOctal()
```

##### `resetEncoding` <a name="cdktf-snowflake.FileFormat.resetEncoding"></a>

```typescript
public resetEncoding()
```

##### `resetErrorOnColumnCountMismatch` <a name="cdktf-snowflake.FileFormat.resetErrorOnColumnCountMismatch"></a>

```typescript
public resetErrorOnColumnCountMismatch()
```

##### `resetEscape` <a name="cdktf-snowflake.FileFormat.resetEscape"></a>

```typescript
public resetEscape()
```

##### `resetEscapeUnenclosedField` <a name="cdktf-snowflake.FileFormat.resetEscapeUnenclosedField"></a>

```typescript
public resetEscapeUnenclosedField()
```

##### `resetFieldDelimiter` <a name="cdktf-snowflake.FileFormat.resetFieldDelimiter"></a>

```typescript
public resetFieldDelimiter()
```

##### `resetFieldOptionallyEnclosedBy` <a name="cdktf-snowflake.FileFormat.resetFieldOptionallyEnclosedBy"></a>

```typescript
public resetFieldOptionallyEnclosedBy()
```

##### `resetFileExtension` <a name="cdktf-snowflake.FileFormat.resetFileExtension"></a>

```typescript
public resetFileExtension()
```

##### `resetIgnoreUtf8Errors` <a name="cdktf-snowflake.FileFormat.resetIgnoreUtf8Errors"></a>

```typescript
public resetIgnoreUtf8Errors()
```

##### `resetNullIf` <a name="cdktf-snowflake.FileFormat.resetNullIf"></a>

```typescript
public resetNullIf()
```

##### `resetPreserveSpace` <a name="cdktf-snowflake.FileFormat.resetPreserveSpace"></a>

```typescript
public resetPreserveSpace()
```

##### `resetRecordDelimiter` <a name="cdktf-snowflake.FileFormat.resetRecordDelimiter"></a>

```typescript
public resetRecordDelimiter()
```

##### `resetReplaceInvalidCharacters` <a name="cdktf-snowflake.FileFormat.resetReplaceInvalidCharacters"></a>

```typescript
public resetReplaceInvalidCharacters()
```

##### `resetSkipBlankLines` <a name="cdktf-snowflake.FileFormat.resetSkipBlankLines"></a>

```typescript
public resetSkipBlankLines()
```

##### `resetSkipByteOrderMark` <a name="cdktf-snowflake.FileFormat.resetSkipByteOrderMark"></a>

```typescript
public resetSkipByteOrderMark()
```

##### `resetSkipHeader` <a name="cdktf-snowflake.FileFormat.resetSkipHeader"></a>

```typescript
public resetSkipHeader()
```

##### `resetStripNullValues` <a name="cdktf-snowflake.FileFormat.resetStripNullValues"></a>

```typescript
public resetStripNullValues()
```

##### `resetStripOuterArray` <a name="cdktf-snowflake.FileFormat.resetStripOuterArray"></a>

```typescript
public resetStripOuterArray()
```

##### `resetStripOuterElement` <a name="cdktf-snowflake.FileFormat.resetStripOuterElement"></a>

```typescript
public resetStripOuterElement()
```

##### `resetTimeFormat` <a name="cdktf-snowflake.FileFormat.resetTimeFormat"></a>

```typescript
public resetTimeFormat()
```

##### `resetTimestampFormat` <a name="cdktf-snowflake.FileFormat.resetTimestampFormat"></a>

```typescript
public resetTimestampFormat()
```

##### `resetTrimSpace` <a name="cdktf-snowflake.FileFormat.resetTrimSpace"></a>

```typescript
public resetTrimSpace()
```

##### `resetValidateUtf8` <a name="cdktf-snowflake.FileFormat.resetValidateUtf8"></a>

```typescript
public resetValidateUtf8()
```


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.databaseInput"></a>

- *Type:* `string`

---

##### `formatTypeInput`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.formatTypeInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.nameInput"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.schemaInput"></a>

- *Type:* `string`

---

##### `allowDuplicateInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.allowDuplicateInput"></a>

- *Type:* `boolean`

---

##### `binaryAsTextInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.binaryAsTextInput"></a>

- *Type:* `boolean`

---

##### `binaryFormatInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.binaryFormatInput"></a>

- *Type:* `string`

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.commentInput"></a>

- *Type:* `string`

---

##### `compressionInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.compressionInput"></a>

- *Type:* `string`

---

##### `dateFormatInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.dateFormatInput"></a>

- *Type:* `string`

---

##### `disableAutoConvertInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.disableAutoConvertInput"></a>

- *Type:* `boolean`

---

##### `disableSnowflakeDataInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.disableSnowflakeDataInput"></a>

- *Type:* `boolean`

---

##### `emptyFieldAsNullInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.emptyFieldAsNullInput"></a>

- *Type:* `boolean`

---

##### `enableOctalInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.enableOctalInput"></a>

- *Type:* `boolean`

---

##### `encodingInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.encodingInput"></a>

- *Type:* `string`

---

##### `errorOnColumnCountMismatchInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.errorOnColumnCountMismatchInput"></a>

- *Type:* `boolean`

---

##### `escapeInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.escapeInput"></a>

- *Type:* `string`

---

##### `escapeUnenclosedFieldInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.escapeUnenclosedFieldInput"></a>

- *Type:* `string`

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.fieldDelimiterInput"></a>

- *Type:* `string`

---

##### `fieldOptionallyEnclosedByInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.fieldOptionallyEnclosedByInput"></a>

- *Type:* `string`

---

##### `fileExtensionInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.fileExtensionInput"></a>

- *Type:* `string`

---

##### `ignoreUtf8ErrorsInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.ignoreUtf8ErrorsInput"></a>

- *Type:* `boolean`

---

##### `nullIfInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.nullIfInput"></a>

- *Type:* `string`[]

---

##### `preserveSpaceInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.preserveSpaceInput"></a>

- *Type:* `boolean`

---

##### `recordDelimiterInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.recordDelimiterInput"></a>

- *Type:* `string`

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.replaceInvalidCharactersInput"></a>

- *Type:* `boolean`

---

##### `skipBlankLinesInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.skipBlankLinesInput"></a>

- *Type:* `boolean`

---

##### `skipByteOrderMarkInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.skipByteOrderMarkInput"></a>

- *Type:* `boolean`

---

##### `skipHeaderInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.skipHeaderInput"></a>

- *Type:* `number`

---

##### `stripNullValuesInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.stripNullValuesInput"></a>

- *Type:* `boolean`

---

##### `stripOuterArrayInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.stripOuterArrayInput"></a>

- *Type:* `boolean`

---

##### `stripOuterElementInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.stripOuterElementInput"></a>

- *Type:* `boolean`

---

##### `timeFormatInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.timeFormatInput"></a>

- *Type:* `string`

---

##### `timestampFormatInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.timestampFormatInput"></a>

- *Type:* `string`

---

##### `trimSpaceInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.trimSpaceInput"></a>

- *Type:* `boolean`

---

##### `validateUtf8Input`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormat.property.validateUtf8Input"></a>

- *Type:* `boolean`

---

##### `allowDuplicate`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.allowDuplicate"></a>

- *Type:* `boolean`

---

##### `binaryAsText`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.binaryAsText"></a>

- *Type:* `boolean`

---

##### `binaryFormat`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.binaryFormat"></a>

- *Type:* `string`

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.comment"></a>

- *Type:* `string`

---

##### `compression`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.compression"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.database"></a>

- *Type:* `string`

---

##### `dateFormat`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.dateFormat"></a>

- *Type:* `string`

---

##### `disableAutoConvert`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.disableAutoConvert"></a>

- *Type:* `boolean`

---

##### `disableSnowflakeData`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.disableSnowflakeData"></a>

- *Type:* `boolean`

---

##### `emptyFieldAsNull`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.emptyFieldAsNull"></a>

- *Type:* `boolean`

---

##### `enableOctal`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.enableOctal"></a>

- *Type:* `boolean`

---

##### `encoding`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.encoding"></a>

- *Type:* `string`

---

##### `errorOnColumnCountMismatch`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.errorOnColumnCountMismatch"></a>

- *Type:* `boolean`

---

##### `escape`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.escape"></a>

- *Type:* `string`

---

##### `escapeUnenclosedField`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.escapeUnenclosedField"></a>

- *Type:* `string`

---

##### `fieldDelimiter`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.fieldDelimiter"></a>

- *Type:* `string`

---

##### `fieldOptionallyEnclosedBy`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.fieldOptionallyEnclosedBy"></a>

- *Type:* `string`

---

##### `fileExtension`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.fileExtension"></a>

- *Type:* `string`

---

##### `formatType`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.formatType"></a>

- *Type:* `string`

---

##### `ignoreUtf8Errors`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.ignoreUtf8Errors"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.name"></a>

- *Type:* `string`

---

##### `nullIf`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.nullIf"></a>

- *Type:* `string`[]

---

##### `preserveSpace`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.preserveSpace"></a>

- *Type:* `boolean`

---

##### `recordDelimiter`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.recordDelimiter"></a>

- *Type:* `string`

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.replaceInvalidCharacters"></a>

- *Type:* `boolean`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.schema"></a>

- *Type:* `string`

---

##### `skipBlankLines`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.skipBlankLines"></a>

- *Type:* `boolean`

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.skipByteOrderMark"></a>

- *Type:* `boolean`

---

##### `skipHeader`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.skipHeader"></a>

- *Type:* `number`

---

##### `stripNullValues`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.stripNullValues"></a>

- *Type:* `boolean`

---

##### `stripOuterArray`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.stripOuterArray"></a>

- *Type:* `boolean`

---

##### `stripOuterElement`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.stripOuterElement"></a>

- *Type:* `boolean`

---

##### `timeFormat`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.timeFormat"></a>

- *Type:* `string`

---

##### `timestampFormat`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.timestampFormat"></a>

- *Type:* `string`

---

##### `trimSpace`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.trimSpace"></a>

- *Type:* `boolean`

---

##### `validateUtf8`<sup>Required</sup> <a name="cdktf-snowflake.FileFormat.property.validateUtf8"></a>

- *Type:* `boolean`

---


### FileFormatGrant <a name="cdktf-snowflake.FileFormatGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/file_format_grant.html snowflake_file_format_grant}.

#### Initializer <a name="cdktf-snowflake.FileFormatGrant.Initializer"></a>

```typescript
import { FileFormatGrant } from 'cdktf-snowflake'

new FileFormatGrant(scope: Construct, id: string, config: FileFormatGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.FileFormatGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.FileFormatGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.FileFormatGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.FileFormatGrantConfig`](#cdktf-snowflake.FileFormatGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetFileFormatName` <a name="cdktf-snowflake.FileFormatGrant.resetFileFormatName"></a>

```typescript
public resetFileFormatName()
```

##### `resetOnFuture` <a name="cdktf-snowflake.FileFormatGrant.resetOnFuture"></a>

```typescript
public resetOnFuture()
```

##### `resetPrivilege` <a name="cdktf-snowflake.FileFormatGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetRoles` <a name="cdktf-snowflake.FileFormatGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.FileFormatGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `databaseNameInput`<sup>Required</sup> <a name="cdktf-snowflake.FileFormatGrant.property.databaseNameInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.FileFormatGrant.property.id"></a>

- *Type:* `string`

---

##### `schemaNameInput`<sup>Required</sup> <a name="cdktf-snowflake.FileFormatGrant.property.schemaNameInput"></a>

- *Type:* `string`

---

##### `fileFormatNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatGrant.property.fileFormatNameInput"></a>

- *Type:* `string`

---

##### `onFutureInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatGrant.property.onFutureInput"></a>

- *Type:* `boolean`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.FileFormatGrant.property.databaseName"></a>

- *Type:* `string`

---

##### `fileFormatName`<sup>Required</sup> <a name="cdktf-snowflake.FileFormatGrant.property.fileFormatName"></a>

- *Type:* `string`

---

##### `onFuture`<sup>Required</sup> <a name="cdktf-snowflake.FileFormatGrant.property.onFuture"></a>

- *Type:* `boolean`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.FileFormatGrant.property.privilege"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.FileFormatGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.FileFormatGrant.property.schemaName"></a>

- *Type:* `string`

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.FileFormatGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


### FunctionGrant <a name="cdktf-snowflake.FunctionGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant.html snowflake_function_grant}.

#### Initializer <a name="cdktf-snowflake.FunctionGrant.Initializer"></a>

```typescript
import { FunctionGrant } from 'cdktf-snowflake'

new FunctionGrant(scope: Construct, id: string, config: FunctionGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.FunctionGrantConfig`](#cdktf-snowflake.FunctionGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetArguments` <a name="cdktf-snowflake.FunctionGrant.resetArguments"></a>

```typescript
public resetArguments()
```

##### `resetFunctionName` <a name="cdktf-snowflake.FunctionGrant.resetFunctionName"></a>

```typescript
public resetFunctionName()
```

##### `resetOnFuture` <a name="cdktf-snowflake.FunctionGrant.resetOnFuture"></a>

```typescript
public resetOnFuture()
```

##### `resetPrivilege` <a name="cdktf-snowflake.FunctionGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetReturnType` <a name="cdktf-snowflake.FunctionGrant.resetReturnType"></a>

```typescript
public resetReturnType()
```

##### `resetRoles` <a name="cdktf-snowflake.FunctionGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetShares` <a name="cdktf-snowflake.FunctionGrant.resetShares"></a>

```typescript
public resetShares()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.FunctionGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `databaseNameInput`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrant.property.databaseNameInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrant.property.id"></a>

- *Type:* `string`

---

##### `schemaNameInput`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrant.property.schemaNameInput"></a>

- *Type:* `string`

---

##### `argumentsInput`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrant.property.argumentsInput"></a>

- *Type:* [`cdktf-snowflake.FunctionGrantArguments`](#cdktf-snowflake.FunctionGrantArguments)[]

---

##### `functionNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrant.property.functionNameInput"></a>

- *Type:* `string`

---

##### `onFutureInput`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrant.property.onFutureInput"></a>

- *Type:* `boolean`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `returnTypeInput`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrant.property.returnTypeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `sharesInput`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrant.property.sharesInput"></a>

- *Type:* `string`[]

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `arguments`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrant.property.arguments"></a>

- *Type:* [`cdktf-snowflake.FunctionGrantArguments`](#cdktf-snowflake.FunctionGrantArguments)[]

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrant.property.databaseName"></a>

- *Type:* `string`

---

##### `functionName`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrant.property.functionName"></a>

- *Type:* `string`

---

##### `onFuture`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrant.property.onFuture"></a>

- *Type:* `boolean`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrant.property.privilege"></a>

- *Type:* `string`

---

##### `returnType`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrant.property.returnType"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrant.property.schemaName"></a>

- *Type:* `string`

---

##### `shares`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrant.property.shares"></a>

- *Type:* `string`[]

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


### IntegrationGrant <a name="cdktf-snowflake.IntegrationGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/integration_grant.html snowflake_integration_grant}.

#### Initializer <a name="cdktf-snowflake.IntegrationGrant.Initializer"></a>

```typescript
import { IntegrationGrant } from 'cdktf-snowflake'

new IntegrationGrant(scope: Construct, id: string, config: IntegrationGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.IntegrationGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.IntegrationGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.IntegrationGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.IntegrationGrantConfig`](#cdktf-snowflake.IntegrationGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetPrivilege` <a name="cdktf-snowflake.IntegrationGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetRoles` <a name="cdktf-snowflake.IntegrationGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.IntegrationGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.IntegrationGrant.property.id"></a>

- *Type:* `string`

---

##### `integrationNameInput`<sup>Required</sup> <a name="cdktf-snowflake.IntegrationGrant.property.integrationNameInput"></a>

- *Type:* `string`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.IntegrationGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.IntegrationGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.IntegrationGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `integrationName`<sup>Required</sup> <a name="cdktf-snowflake.IntegrationGrant.property.integrationName"></a>

- *Type:* `string`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.IntegrationGrant.property.privilege"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.IntegrationGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.IntegrationGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


### ManagedAccount <a name="cdktf-snowflake.ManagedAccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/managed_account.html snowflake_managed_account}.

#### Initializer <a name="cdktf-snowflake.ManagedAccount.Initializer"></a>

```typescript
import { ManagedAccount } from 'cdktf-snowflake'

new ManagedAccount(scope: Construct, id: string, config: ManagedAccountConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccount.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccount.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccount.parameter.config"></a>

- *Type:* [`cdktf-snowflake.ManagedAccountConfig`](#cdktf-snowflake.ManagedAccountConfig)

---

#### Methods <a name="Methods"></a>

##### `resetComment` <a name="cdktf-snowflake.ManagedAccount.resetComment"></a>

```typescript
public resetComment()
```

##### `resetType` <a name="cdktf-snowflake.ManagedAccount.resetType"></a>

```typescript
public resetType()
```


#### Properties <a name="Properties"></a>

##### `adminNameInput`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccount.property.adminNameInput"></a>

- *Type:* `string`

---

##### `adminPasswordInput`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccount.property.adminPasswordInput"></a>

- *Type:* `string`

---

##### `cloud`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccount.property.cloud"></a>

- *Type:* `string`

---

##### `createdOn`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccount.property.createdOn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccount.property.id"></a>

- *Type:* `string`

---

##### `locator`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccount.property.locator"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccount.property.nameInput"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccount.property.region"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccount.property.url"></a>

- *Type:* `string`

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.ManagedAccount.property.commentInput"></a>

- *Type:* `string`

---

##### `typeInput`<sup>Optional</sup> <a name="cdktf-snowflake.ManagedAccount.property.typeInput"></a>

- *Type:* `string`

---

##### `adminName`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccount.property.adminName"></a>

- *Type:* `string`

---

##### `adminPassword`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccount.property.adminPassword"></a>

- *Type:* `string`

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccount.property.comment"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccount.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccount.property.type"></a>

- *Type:* `string`

---


### MaskingPolicy <a name="cdktf-snowflake.MaskingPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy.html snowflake_masking_policy}.

#### Initializer <a name="cdktf-snowflake.MaskingPolicy.Initializer"></a>

```typescript
import { MaskingPolicy } from 'cdktf-snowflake'

new MaskingPolicy(scope: Construct, id: string, config: MaskingPolicyConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicy.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicy.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicy.parameter.config"></a>

- *Type:* [`cdktf-snowflake.MaskingPolicyConfig`](#cdktf-snowflake.MaskingPolicyConfig)

---

#### Methods <a name="Methods"></a>

##### `resetComment` <a name="cdktf-snowflake.MaskingPolicy.resetComment"></a>

```typescript
public resetComment()
```


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicy.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicy.property.id"></a>

- *Type:* `string`

---

##### `maskingExpressionInput`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicy.property.maskingExpressionInput"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicy.property.nameInput"></a>

- *Type:* `string`

---

##### `returnDataTypeInput`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicy.property.returnDataTypeInput"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicy.property.schemaInput"></a>

- *Type:* `string`

---

##### `valueDataTypeInput`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicy.property.valueDataTypeInput"></a>

- *Type:* `string`

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.MaskingPolicy.property.commentInput"></a>

- *Type:* `string`

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicy.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicy.property.database"></a>

- *Type:* `string`

---

##### `maskingExpression`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicy.property.maskingExpression"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicy.property.name"></a>

- *Type:* `string`

---

##### `returnDataType`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicy.property.returnDataType"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicy.property.schema"></a>

- *Type:* `string`

---

##### `valueDataType`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicy.property.valueDataType"></a>

- *Type:* `string`

---


### MaskingPolicyGrant <a name="cdktf-snowflake.MaskingPolicyGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy_grant.html snowflake_masking_policy_grant}.

#### Initializer <a name="cdktf-snowflake.MaskingPolicyGrant.Initializer"></a>

```typescript
import { MaskingPolicyGrant } from 'cdktf-snowflake'

new MaskingPolicyGrant(scope: Construct, id: string, config: MaskingPolicyGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.MaskingPolicyGrantConfig`](#cdktf-snowflake.MaskingPolicyGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetPrivilege` <a name="cdktf-snowflake.MaskingPolicyGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetRoles` <a name="cdktf-snowflake.MaskingPolicyGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.MaskingPolicyGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `databaseNameInput`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyGrant.property.databaseNameInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyGrant.property.id"></a>

- *Type:* `string`

---

##### `maskingPolicyNameInput`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyGrant.property.maskingPolicyNameInput"></a>

- *Type:* `string`

---

##### `schemaNameInput`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyGrant.property.schemaNameInput"></a>

- *Type:* `string`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.MaskingPolicyGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.MaskingPolicyGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.MaskingPolicyGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyGrant.property.databaseName"></a>

- *Type:* `string`

---

##### `maskingPolicyName`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyGrant.property.maskingPolicyName"></a>

- *Type:* `string`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyGrant.property.privilege"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyGrant.property.schemaName"></a>

- *Type:* `string`

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


### MaterializedView <a name="cdktf-snowflake.MaterializedView"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html snowflake_materialized_view}.

#### Initializer <a name="cdktf-snowflake.MaterializedView.Initializer"></a>

```typescript
import { MaterializedView } from 'cdktf-snowflake'

new MaterializedView(scope: Construct, id: string, config: MaterializedViewConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedView.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedView.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedView.parameter.config"></a>

- *Type:* [`cdktf-snowflake.MaterializedViewConfig`](#cdktf-snowflake.MaterializedViewConfig)

---

#### Methods <a name="Methods"></a>

##### `resetComment` <a name="cdktf-snowflake.MaterializedView.resetComment"></a>

```typescript
public resetComment()
```

##### `resetIsSecure` <a name="cdktf-snowflake.MaterializedView.resetIsSecure"></a>

```typescript
public resetIsSecure()
```

##### `resetOrReplace` <a name="cdktf-snowflake.MaterializedView.resetOrReplace"></a>

```typescript
public resetOrReplace()
```


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedView.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedView.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedView.property.nameInput"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedView.property.schemaInput"></a>

- *Type:* `string`

---

##### `statementInput`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedView.property.statementInput"></a>

- *Type:* `string`

---

##### `warehouseInput`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedView.property.warehouseInput"></a>

- *Type:* `string`

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedView.property.commentInput"></a>

- *Type:* `string`

---

##### `isSecureInput`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedView.property.isSecureInput"></a>

- *Type:* `boolean`

---

##### `orReplaceInput`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedView.property.orReplaceInput"></a>

- *Type:* `boolean`

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedView.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedView.property.database"></a>

- *Type:* `string`

---

##### `isSecure`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedView.property.isSecure"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedView.property.name"></a>

- *Type:* `string`

---

##### `orReplace`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedView.property.orReplace"></a>

- *Type:* `boolean`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedView.property.schema"></a>

- *Type:* `string`

---

##### `statement`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedView.property.statement"></a>

- *Type:* `string`

---

##### `warehouse`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedView.property.warehouse"></a>

- *Type:* `string`

---


### MaterializedViewGrant <a name="cdktf-snowflake.MaterializedViewGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view_grant.html snowflake_materialized_view_grant}.

#### Initializer <a name="cdktf-snowflake.MaterializedViewGrant.Initializer"></a>

```typescript
import { MaterializedViewGrant } from 'cdktf-snowflake'

new MaterializedViewGrant(scope: Construct, id: string, config: MaterializedViewGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.MaterializedViewGrantConfig`](#cdktf-snowflake.MaterializedViewGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetMaterializedViewName` <a name="cdktf-snowflake.MaterializedViewGrant.resetMaterializedViewName"></a>

```typescript
public resetMaterializedViewName()
```

##### `resetOnFuture` <a name="cdktf-snowflake.MaterializedViewGrant.resetOnFuture"></a>

```typescript
public resetOnFuture()
```

##### `resetPrivilege` <a name="cdktf-snowflake.MaterializedViewGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetRoles` <a name="cdktf-snowflake.MaterializedViewGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetShares` <a name="cdktf-snowflake.MaterializedViewGrant.resetShares"></a>

```typescript
public resetShares()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.MaterializedViewGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `databaseNameInput`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewGrant.property.databaseNameInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewGrant.property.id"></a>

- *Type:* `string`

---

##### `schemaNameInput`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewGrant.property.schemaNameInput"></a>

- *Type:* `string`

---

##### `materializedViewNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewGrant.property.materializedViewNameInput"></a>

- *Type:* `string`

---

##### `onFutureInput`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewGrant.property.onFutureInput"></a>

- *Type:* `boolean`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `sharesInput`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewGrant.property.sharesInput"></a>

- *Type:* `string`[]

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewGrant.property.databaseName"></a>

- *Type:* `string`

---

##### `materializedViewName`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewGrant.property.materializedViewName"></a>

- *Type:* `string`

---

##### `onFuture`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewGrant.property.onFuture"></a>

- *Type:* `boolean`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewGrant.property.privilege"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewGrant.property.schemaName"></a>

- *Type:* `string`

---

##### `shares`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewGrant.property.shares"></a>

- *Type:* `string`[]

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


### NetworkPolicy <a name="cdktf-snowflake.NetworkPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/network_policy.html snowflake_network_policy}.

#### Initializer <a name="cdktf-snowflake.NetworkPolicy.Initializer"></a>

```typescript
import { NetworkPolicy } from 'cdktf-snowflake'

new NetworkPolicy(scope: Construct, id: string, config: NetworkPolicyConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicy.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicy.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicy.parameter.config"></a>

- *Type:* [`cdktf-snowflake.NetworkPolicyConfig`](#cdktf-snowflake.NetworkPolicyConfig)

---

#### Methods <a name="Methods"></a>

##### `resetBlockedIpList` <a name="cdktf-snowflake.NetworkPolicy.resetBlockedIpList"></a>

```typescript
public resetBlockedIpList()
```

##### `resetComment` <a name="cdktf-snowflake.NetworkPolicy.resetComment"></a>

```typescript
public resetComment()
```


#### Properties <a name="Properties"></a>

##### `allowedIpListInput`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicy.property.allowedIpListInput"></a>

- *Type:* `string`[]

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicy.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicy.property.nameInput"></a>

- *Type:* `string`

---

##### `blockedIpListInput`<sup>Optional</sup> <a name="cdktf-snowflake.NetworkPolicy.property.blockedIpListInput"></a>

- *Type:* `string`[]

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.NetworkPolicy.property.commentInput"></a>

- *Type:* `string`

---

##### `allowedIpList`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicy.property.allowedIpList"></a>

- *Type:* `string`[]

---

##### `blockedIpList`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicy.property.blockedIpList"></a>

- *Type:* `string`[]

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicy.property.comment"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicy.property.name"></a>

- *Type:* `string`

---


### NetworkPolicyAttachment <a name="cdktf-snowflake.NetworkPolicyAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/network_policy_attachment.html snowflake_network_policy_attachment}.

#### Initializer <a name="cdktf-snowflake.NetworkPolicyAttachment.Initializer"></a>

```typescript
import { NetworkPolicyAttachment } from 'cdktf-snowflake'

new NetworkPolicyAttachment(scope: Construct, id: string, config: NetworkPolicyAttachmentConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicyAttachment.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicyAttachment.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicyAttachment.parameter.config"></a>

- *Type:* [`cdktf-snowflake.NetworkPolicyAttachmentConfig`](#cdktf-snowflake.NetworkPolicyAttachmentConfig)

---

#### Methods <a name="Methods"></a>

##### `resetSetForAccount` <a name="cdktf-snowflake.NetworkPolicyAttachment.resetSetForAccount"></a>

```typescript
public resetSetForAccount()
```

##### `resetUsers` <a name="cdktf-snowflake.NetworkPolicyAttachment.resetUsers"></a>

```typescript
public resetUsers()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicyAttachment.property.id"></a>

- *Type:* `string`

---

##### `networkPolicyNameInput`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicyAttachment.property.networkPolicyNameInput"></a>

- *Type:* `string`

---

##### `setForAccountInput`<sup>Optional</sup> <a name="cdktf-snowflake.NetworkPolicyAttachment.property.setForAccountInput"></a>

- *Type:* `boolean`

---

##### `usersInput`<sup>Optional</sup> <a name="cdktf-snowflake.NetworkPolicyAttachment.property.usersInput"></a>

- *Type:* `string`[]

---

##### `networkPolicyName`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicyAttachment.property.networkPolicyName"></a>

- *Type:* `string`

---

##### `setForAccount`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicyAttachment.property.setForAccount"></a>

- *Type:* `boolean`

---

##### `users`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicyAttachment.property.users"></a>

- *Type:* `string`[]

---


### NotificationIntegration <a name="cdktf-snowflake.NotificationIntegration"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html snowflake_notification_integration}.

#### Initializer <a name="cdktf-snowflake.NotificationIntegration.Initializer"></a>

```typescript
import { NotificationIntegration } from 'cdktf-snowflake'

new NotificationIntegration(scope: Construct, id: string, config: NotificationIntegrationConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegration.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegration.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegration.parameter.config"></a>

- *Type:* [`cdktf-snowflake.NotificationIntegrationConfig`](#cdktf-snowflake.NotificationIntegrationConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAwsSqsArn` <a name="cdktf-snowflake.NotificationIntegration.resetAwsSqsArn"></a>

```typescript
public resetAwsSqsArn()
```

##### `resetAwsSqsRoleArn` <a name="cdktf-snowflake.NotificationIntegration.resetAwsSqsRoleArn"></a>

```typescript
public resetAwsSqsRoleArn()
```

##### `resetAzureStorageQueuePrimaryUri` <a name="cdktf-snowflake.NotificationIntegration.resetAzureStorageQueuePrimaryUri"></a>

```typescript
public resetAzureStorageQueuePrimaryUri()
```

##### `resetAzureTenantId` <a name="cdktf-snowflake.NotificationIntegration.resetAzureTenantId"></a>

```typescript
public resetAzureTenantId()
```

##### `resetComment` <a name="cdktf-snowflake.NotificationIntegration.resetComment"></a>

```typescript
public resetComment()
```

##### `resetDirection` <a name="cdktf-snowflake.NotificationIntegration.resetDirection"></a>

```typescript
public resetDirection()
```

##### `resetEnabled` <a name="cdktf-snowflake.NotificationIntegration.resetEnabled"></a>

```typescript
public resetEnabled()
```

##### `resetGcpPubsubSubscriptionName` <a name="cdktf-snowflake.NotificationIntegration.resetGcpPubsubSubscriptionName"></a>

```typescript
public resetGcpPubsubSubscriptionName()
```

##### `resetNotificationProvider` <a name="cdktf-snowflake.NotificationIntegration.resetNotificationProvider"></a>

```typescript
public resetNotificationProvider()
```

##### `resetType` <a name="cdktf-snowflake.NotificationIntegration.resetType"></a>

```typescript
public resetType()
```


#### Properties <a name="Properties"></a>

##### `awsSqsExternalId`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegration.property.awsSqsExternalId"></a>

- *Type:* `string`

---

##### `awsSqsIamUserArn`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegration.property.awsSqsIamUserArn"></a>

- *Type:* `string`

---

##### `createdOn`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegration.property.createdOn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegration.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegration.property.nameInput"></a>

- *Type:* `string`

---

##### `awsSqsArnInput`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegration.property.awsSqsArnInput"></a>

- *Type:* `string`

---

##### `awsSqsRoleArnInput`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegration.property.awsSqsRoleArnInput"></a>

- *Type:* `string`

---

##### `azureStorageQueuePrimaryUriInput`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegration.property.azureStorageQueuePrimaryUriInput"></a>

- *Type:* `string`

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegration.property.azureTenantIdInput"></a>

- *Type:* `string`

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegration.property.commentInput"></a>

- *Type:* `string`

---

##### `directionInput`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegration.property.directionInput"></a>

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegration.property.enabledInput"></a>

- *Type:* `boolean`

---

##### `gcpPubsubSubscriptionNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegration.property.gcpPubsubSubscriptionNameInput"></a>

- *Type:* `string`

---

##### `notificationProviderInput`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegration.property.notificationProviderInput"></a>

- *Type:* `string`

---

##### `typeInput`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegration.property.typeInput"></a>

- *Type:* `string`

---

##### `awsSqsArn`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegration.property.awsSqsArn"></a>

- *Type:* `string`

---

##### `awsSqsRoleArn`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegration.property.awsSqsRoleArn"></a>

- *Type:* `string`

---

##### `azureStorageQueuePrimaryUri`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegration.property.azureStorageQueuePrimaryUri"></a>

- *Type:* `string`

---

##### `azureTenantId`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegration.property.azureTenantId"></a>

- *Type:* `string`

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegration.property.comment"></a>

- *Type:* `string`

---

##### `direction`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegration.property.direction"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegration.property.enabled"></a>

- *Type:* `boolean`

---

##### `gcpPubsubSubscriptionName`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegration.property.gcpPubsubSubscriptionName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegration.property.name"></a>

- *Type:* `string`

---

##### `notificationProvider`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegration.property.notificationProvider"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegration.property.type"></a>

- *Type:* `string`

---


### Pipe <a name="cdktf-snowflake.Pipe"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/pipe.html snowflake_pipe}.

#### Initializer <a name="cdktf-snowflake.Pipe.Initializer"></a>

```typescript
import { Pipe } from 'cdktf-snowflake'

new Pipe(scope: Construct, id: string, config: PipeConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.Pipe.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Pipe.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.Pipe.parameter.config"></a>

- *Type:* [`cdktf-snowflake.PipeConfig`](#cdktf-snowflake.PipeConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAutoIngest` <a name="cdktf-snowflake.Pipe.resetAutoIngest"></a>

```typescript
public resetAutoIngest()
```

##### `resetAwsSnsTopicArn` <a name="cdktf-snowflake.Pipe.resetAwsSnsTopicArn"></a>

```typescript
public resetAwsSnsTopicArn()
```

##### `resetComment` <a name="cdktf-snowflake.Pipe.resetComment"></a>

```typescript
public resetComment()
```

##### `resetErrorIntegration` <a name="cdktf-snowflake.Pipe.resetErrorIntegration"></a>

```typescript
public resetErrorIntegration()
```

##### `resetIntegration` <a name="cdktf-snowflake.Pipe.resetIntegration"></a>

```typescript
public resetIntegration()
```


#### Properties <a name="Properties"></a>

##### `copyStatementInput`<sup>Required</sup> <a name="cdktf-snowflake.Pipe.property.copyStatementInput"></a>

- *Type:* `string`

---

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.Pipe.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Pipe.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.Pipe.property.nameInput"></a>

- *Type:* `string`

---

##### `notificationChannel`<sup>Required</sup> <a name="cdktf-snowflake.Pipe.property.notificationChannel"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="cdktf-snowflake.Pipe.property.owner"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.Pipe.property.schemaInput"></a>

- *Type:* `string`

---

##### `autoIngestInput`<sup>Optional</sup> <a name="cdktf-snowflake.Pipe.property.autoIngestInput"></a>

- *Type:* `boolean`

---

##### `awsSnsTopicArnInput`<sup>Optional</sup> <a name="cdktf-snowflake.Pipe.property.awsSnsTopicArnInput"></a>

- *Type:* `string`

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.Pipe.property.commentInput"></a>

- *Type:* `string`

---

##### `errorIntegrationInput`<sup>Optional</sup> <a name="cdktf-snowflake.Pipe.property.errorIntegrationInput"></a>

- *Type:* `string`

---

##### `integrationInput`<sup>Optional</sup> <a name="cdktf-snowflake.Pipe.property.integrationInput"></a>

- *Type:* `string`

---

##### `autoIngest`<sup>Required</sup> <a name="cdktf-snowflake.Pipe.property.autoIngest"></a>

- *Type:* `boolean`

---

##### `awsSnsTopicArn`<sup>Required</sup> <a name="cdktf-snowflake.Pipe.property.awsSnsTopicArn"></a>

- *Type:* `string`

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.Pipe.property.comment"></a>

- *Type:* `string`

---

##### `copyStatement`<sup>Required</sup> <a name="cdktf-snowflake.Pipe.property.copyStatement"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.Pipe.property.database"></a>

- *Type:* `string`

---

##### `errorIntegration`<sup>Required</sup> <a name="cdktf-snowflake.Pipe.property.errorIntegration"></a>

- *Type:* `string`

---

##### `integration`<sup>Required</sup> <a name="cdktf-snowflake.Pipe.property.integration"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.Pipe.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.Pipe.property.schema"></a>

- *Type:* `string`

---


### PipeGrant <a name="cdktf-snowflake.PipeGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/pipe_grant.html snowflake_pipe_grant}.

#### Initializer <a name="cdktf-snowflake.PipeGrant.Initializer"></a>

```typescript
import { PipeGrant } from 'cdktf-snowflake'

new PipeGrant(scope: Construct, id: string, config: PipeGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.PipeGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.PipeGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.PipeGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.PipeGrantConfig`](#cdktf-snowflake.PipeGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetOnFuture` <a name="cdktf-snowflake.PipeGrant.resetOnFuture"></a>

```typescript
public resetOnFuture()
```

##### `resetPipeName` <a name="cdktf-snowflake.PipeGrant.resetPipeName"></a>

```typescript
public resetPipeName()
```

##### `resetPrivilege` <a name="cdktf-snowflake.PipeGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetRoles` <a name="cdktf-snowflake.PipeGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.PipeGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `databaseNameInput`<sup>Required</sup> <a name="cdktf-snowflake.PipeGrant.property.databaseNameInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.PipeGrant.property.id"></a>

- *Type:* `string`

---

##### `schemaNameInput`<sup>Required</sup> <a name="cdktf-snowflake.PipeGrant.property.schemaNameInput"></a>

- *Type:* `string`

---

##### `onFutureInput`<sup>Optional</sup> <a name="cdktf-snowflake.PipeGrant.property.onFutureInput"></a>

- *Type:* `boolean`

---

##### `pipeNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.PipeGrant.property.pipeNameInput"></a>

- *Type:* `string`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.PipeGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.PipeGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.PipeGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.PipeGrant.property.databaseName"></a>

- *Type:* `string`

---

##### `onFuture`<sup>Required</sup> <a name="cdktf-snowflake.PipeGrant.property.onFuture"></a>

- *Type:* `boolean`

---

##### `pipeName`<sup>Required</sup> <a name="cdktf-snowflake.PipeGrant.property.pipeName"></a>

- *Type:* `string`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.PipeGrant.property.privilege"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.PipeGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.PipeGrant.property.schemaName"></a>

- *Type:* `string`

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.PipeGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


### ProcedureGrant <a name="cdktf-snowflake.ProcedureGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html snowflake_procedure_grant}.

#### Initializer <a name="cdktf-snowflake.ProcedureGrant.Initializer"></a>

```typescript
import { ProcedureGrant } from 'cdktf-snowflake'

new ProcedureGrant(scope: Construct, id: string, config: ProcedureGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.ProcedureGrantConfig`](#cdktf-snowflake.ProcedureGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetArguments` <a name="cdktf-snowflake.ProcedureGrant.resetArguments"></a>

```typescript
public resetArguments()
```

##### `resetOnFuture` <a name="cdktf-snowflake.ProcedureGrant.resetOnFuture"></a>

```typescript
public resetOnFuture()
```

##### `resetPrivilege` <a name="cdktf-snowflake.ProcedureGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetProcedureName` <a name="cdktf-snowflake.ProcedureGrant.resetProcedureName"></a>

```typescript
public resetProcedureName()
```

##### `resetReturnType` <a name="cdktf-snowflake.ProcedureGrant.resetReturnType"></a>

```typescript
public resetReturnType()
```

##### `resetRoles` <a name="cdktf-snowflake.ProcedureGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetShares` <a name="cdktf-snowflake.ProcedureGrant.resetShares"></a>

```typescript
public resetShares()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.ProcedureGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `databaseNameInput`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrant.property.databaseNameInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrant.property.id"></a>

- *Type:* `string`

---

##### `schemaNameInput`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrant.property.schemaNameInput"></a>

- *Type:* `string`

---

##### `argumentsInput`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrant.property.argumentsInput"></a>

- *Type:* [`cdktf-snowflake.ProcedureGrantArguments`](#cdktf-snowflake.ProcedureGrantArguments)[]

---

##### `onFutureInput`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrant.property.onFutureInput"></a>

- *Type:* `boolean`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `procedureNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrant.property.procedureNameInput"></a>

- *Type:* `string`

---

##### `returnTypeInput`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrant.property.returnTypeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `sharesInput`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrant.property.sharesInput"></a>

- *Type:* `string`[]

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `arguments`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrant.property.arguments"></a>

- *Type:* [`cdktf-snowflake.ProcedureGrantArguments`](#cdktf-snowflake.ProcedureGrantArguments)[]

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrant.property.databaseName"></a>

- *Type:* `string`

---

##### `onFuture`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrant.property.onFuture"></a>

- *Type:* `boolean`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrant.property.privilege"></a>

- *Type:* `string`

---

##### `procedureName`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrant.property.procedureName"></a>

- *Type:* `string`

---

##### `returnType`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrant.property.returnType"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrant.property.schemaName"></a>

- *Type:* `string`

---

##### `shares`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrant.property.shares"></a>

- *Type:* `string`[]

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


### ResourceMonitor <a name="cdktf-snowflake.ResourceMonitor"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html snowflake_resource_monitor}.

#### Initializer <a name="cdktf-snowflake.ResourceMonitor.Initializer"></a>

```typescript
import { ResourceMonitor } from 'cdktf-snowflake'

new ResourceMonitor(scope: Construct, id: string, config: ResourceMonitorConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitor.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitor.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitor.parameter.config"></a>

- *Type:* [`cdktf-snowflake.ResourceMonitorConfig`](#cdktf-snowflake.ResourceMonitorConfig)

---

#### Methods <a name="Methods"></a>

##### `resetCreditQuota` <a name="cdktf-snowflake.ResourceMonitor.resetCreditQuota"></a>

```typescript
public resetCreditQuota()
```

##### `resetEndTimestamp` <a name="cdktf-snowflake.ResourceMonitor.resetEndTimestamp"></a>

```typescript
public resetEndTimestamp()
```

##### `resetFrequency` <a name="cdktf-snowflake.ResourceMonitor.resetFrequency"></a>

```typescript
public resetFrequency()
```

##### `resetNotifyTriggers` <a name="cdktf-snowflake.ResourceMonitor.resetNotifyTriggers"></a>

```typescript
public resetNotifyTriggers()
```

##### `resetStartTimestamp` <a name="cdktf-snowflake.ResourceMonitor.resetStartTimestamp"></a>

```typescript
public resetStartTimestamp()
```

##### `resetSuspendImmediateTriggers` <a name="cdktf-snowflake.ResourceMonitor.resetSuspendImmediateTriggers"></a>

```typescript
public resetSuspendImmediateTriggers()
```

##### `resetSuspendTriggers` <a name="cdktf-snowflake.ResourceMonitor.resetSuspendTriggers"></a>

```typescript
public resetSuspendTriggers()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitor.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitor.property.nameInput"></a>

- *Type:* `string`

---

##### `creditQuotaInput`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitor.property.creditQuotaInput"></a>

- *Type:* `number`

---

##### `endTimestampInput`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitor.property.endTimestampInput"></a>

- *Type:* `string`

---

##### `frequencyInput`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitor.property.frequencyInput"></a>

- *Type:* `string`

---

##### `notifyTriggersInput`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitor.property.notifyTriggersInput"></a>

- *Type:* `number`[]

---

##### `startTimestampInput`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitor.property.startTimestampInput"></a>

- *Type:* `string`

---

##### `suspendImmediateTriggersInput`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitor.property.suspendImmediateTriggersInput"></a>

- *Type:* `number`[]

---

##### `suspendTriggersInput`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitor.property.suspendTriggersInput"></a>

- *Type:* `number`[]

---

##### `creditQuota`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitor.property.creditQuota"></a>

- *Type:* `number`

---

##### `endTimestamp`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitor.property.endTimestamp"></a>

- *Type:* `string`

---

##### `frequency`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitor.property.frequency"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitor.property.name"></a>

- *Type:* `string`

---

##### `notifyTriggers`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitor.property.notifyTriggers"></a>

- *Type:* `number`[]

---

##### `startTimestamp`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitor.property.startTimestamp"></a>

- *Type:* `string`

---

##### `suspendImmediateTriggers`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitor.property.suspendImmediateTriggers"></a>

- *Type:* `number`[]

---

##### `suspendTriggers`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitor.property.suspendTriggers"></a>

- *Type:* `number`[]

---


### ResourceMonitorGrant <a name="cdktf-snowflake.ResourceMonitorGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor_grant.html snowflake_resource_monitor_grant}.

#### Initializer <a name="cdktf-snowflake.ResourceMonitorGrant.Initializer"></a>

```typescript
import { ResourceMonitorGrant } from 'cdktf-snowflake'

new ResourceMonitorGrant(scope: Construct, id: string, config: ResourceMonitorGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitorGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitorGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitorGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.ResourceMonitorGrantConfig`](#cdktf-snowflake.ResourceMonitorGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetPrivilege` <a name="cdktf-snowflake.ResourceMonitorGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetRoles` <a name="cdktf-snowflake.ResourceMonitorGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.ResourceMonitorGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitorGrant.property.id"></a>

- *Type:* `string`

---

##### `monitorNameInput`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitorGrant.property.monitorNameInput"></a>

- *Type:* `string`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `monitorName`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitorGrant.property.monitorName"></a>

- *Type:* `string`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitorGrant.property.privilege"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitorGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitorGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


### Role <a name="cdktf-snowflake.Role"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/role.html snowflake_role}.

#### Initializer <a name="cdktf-snowflake.Role.Initializer"></a>

```typescript
import { Role } from 'cdktf-snowflake'

new Role(scope: Construct, id: string, config: RoleConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.Role.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Role.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.Role.parameter.config"></a>

- *Type:* [`cdktf-snowflake.RoleConfig`](#cdktf-snowflake.RoleConfig)

---

#### Methods <a name="Methods"></a>

##### `resetComment` <a name="cdktf-snowflake.Role.resetComment"></a>

```typescript
public resetComment()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Role.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.Role.property.nameInput"></a>

- *Type:* `string`

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.Role.property.commentInput"></a>

- *Type:* `string`

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.Role.property.comment"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.Role.property.name"></a>

- *Type:* `string`

---


### RoleGrants <a name="cdktf-snowflake.RoleGrants"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/role_grants.html snowflake_role_grants}.

#### Initializer <a name="cdktf-snowflake.RoleGrants.Initializer"></a>

```typescript
import { RoleGrants } from 'cdktf-snowflake'

new RoleGrants(scope: Construct, id: string, config: RoleGrantsConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.RoleGrants.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.RoleGrants.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.RoleGrants.parameter.config"></a>

- *Type:* [`cdktf-snowflake.RoleGrantsConfig`](#cdktf-snowflake.RoleGrantsConfig)

---

#### Methods <a name="Methods"></a>

##### `resetRoles` <a name="cdktf-snowflake.RoleGrants.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetUsers` <a name="cdktf-snowflake.RoleGrants.resetUsers"></a>

```typescript
public resetUsers()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.RoleGrants.property.id"></a>

- *Type:* `string`

---

##### `roleNameInput`<sup>Required</sup> <a name="cdktf-snowflake.RoleGrants.property.roleNameInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.RoleGrants.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `usersInput`<sup>Optional</sup> <a name="cdktf-snowflake.RoleGrants.property.usersInput"></a>

- *Type:* `string`[]

---

##### `roleName`<sup>Required</sup> <a name="cdktf-snowflake.RoleGrants.property.roleName"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.RoleGrants.property.roles"></a>

- *Type:* `string`[]

---

##### `users`<sup>Required</sup> <a name="cdktf-snowflake.RoleGrants.property.users"></a>

- *Type:* `string`[]

---


### RowAccessPolicy <a name="cdktf-snowflake.RowAccessPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy.html snowflake_row_access_policy}.

#### Initializer <a name="cdktf-snowflake.RowAccessPolicy.Initializer"></a>

```typescript
import { RowAccessPolicy } from 'cdktf-snowflake'

new RowAccessPolicy(scope: Construct, id: string, config: RowAccessPolicyConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicy.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicy.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicy.parameter.config"></a>

- *Type:* [`cdktf-snowflake.RowAccessPolicyConfig`](#cdktf-snowflake.RowAccessPolicyConfig)

---

#### Methods <a name="Methods"></a>

##### `resetComment` <a name="cdktf-snowflake.RowAccessPolicy.resetComment"></a>

```typescript
public resetComment()
```


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicy.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicy.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicy.property.nameInput"></a>

- *Type:* `string`

---

##### `rowAccessExpressionInput`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicy.property.rowAccessExpressionInput"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicy.property.schemaInput"></a>

- *Type:* `string`

---

##### `signatureInput`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicy.property.signatureInput"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.RowAccessPolicy.property.commentInput"></a>

- *Type:* `string`

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicy.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicy.property.database"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicy.property.name"></a>

- *Type:* `string`

---

##### `rowAccessExpression`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicy.property.rowAccessExpression"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicy.property.schema"></a>

- *Type:* `string`

---

##### `signature`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicy.property.signature"></a>

- *Type:* {[ key: string ]: `string`}

---


### RowAccessPolicyGrant <a name="cdktf-snowflake.RowAccessPolicyGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy_grant.html snowflake_row_access_policy_grant}.

#### Initializer <a name="cdktf-snowflake.RowAccessPolicyGrant.Initializer"></a>

```typescript
import { RowAccessPolicyGrant } from 'cdktf-snowflake'

new RowAccessPolicyGrant(scope: Construct, id: string, config: RowAccessPolicyGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.RowAccessPolicyGrantConfig`](#cdktf-snowflake.RowAccessPolicyGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetPrivilege` <a name="cdktf-snowflake.RowAccessPolicyGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetRoles` <a name="cdktf-snowflake.RowAccessPolicyGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.RowAccessPolicyGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `databaseNameInput`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyGrant.property.databaseNameInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyGrant.property.id"></a>

- *Type:* `string`

---

##### `rowAccessPolicyNameInput`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyGrant.property.rowAccessPolicyNameInput"></a>

- *Type:* `string`

---

##### `schemaNameInput`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyGrant.property.schemaNameInput"></a>

- *Type:* `string`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.RowAccessPolicyGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.RowAccessPolicyGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.RowAccessPolicyGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyGrant.property.databaseName"></a>

- *Type:* `string`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyGrant.property.privilege"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `rowAccessPolicyName`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyGrant.property.rowAccessPolicyName"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyGrant.property.schemaName"></a>

- *Type:* `string`

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


### Schema <a name="cdktf-snowflake.Schema"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/schema.html snowflake_schema}.

#### Initializer <a name="cdktf-snowflake.Schema.Initializer"></a>

```typescript
import { Schema } from 'cdktf-snowflake'

new Schema(scope: Construct, id: string, config: SchemaConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.Schema.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Schema.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.Schema.parameter.config"></a>

- *Type:* [`cdktf-snowflake.SchemaConfig`](#cdktf-snowflake.SchemaConfig)

---

#### Methods <a name="Methods"></a>

##### `resetComment` <a name="cdktf-snowflake.Schema.resetComment"></a>

```typescript
public resetComment()
```

##### `resetDataRetentionDays` <a name="cdktf-snowflake.Schema.resetDataRetentionDays"></a>

```typescript
public resetDataRetentionDays()
```

##### `resetIsManaged` <a name="cdktf-snowflake.Schema.resetIsManaged"></a>

```typescript
public resetIsManaged()
```

##### `resetIsTransient` <a name="cdktf-snowflake.Schema.resetIsTransient"></a>

```typescript
public resetIsTransient()
```


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.Schema.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Schema.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.Schema.property.nameInput"></a>

- *Type:* `string`

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.Schema.property.commentInput"></a>

- *Type:* `string`

---

##### `dataRetentionDaysInput`<sup>Optional</sup> <a name="cdktf-snowflake.Schema.property.dataRetentionDaysInput"></a>

- *Type:* `number`

---

##### `isManagedInput`<sup>Optional</sup> <a name="cdktf-snowflake.Schema.property.isManagedInput"></a>

- *Type:* `boolean`

---

##### `isTransientInput`<sup>Optional</sup> <a name="cdktf-snowflake.Schema.property.isTransientInput"></a>

- *Type:* `boolean`

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.Schema.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.Schema.property.database"></a>

- *Type:* `string`

---

##### `dataRetentionDays`<sup>Required</sup> <a name="cdktf-snowflake.Schema.property.dataRetentionDays"></a>

- *Type:* `number`

---

##### `isManaged`<sup>Required</sup> <a name="cdktf-snowflake.Schema.property.isManaged"></a>

- *Type:* `boolean`

---

##### `isTransient`<sup>Required</sup> <a name="cdktf-snowflake.Schema.property.isTransient"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.Schema.property.name"></a>

- *Type:* `string`

---


### SchemaGrant <a name="cdktf-snowflake.SchemaGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/schema_grant.html snowflake_schema_grant}.

#### Initializer <a name="cdktf-snowflake.SchemaGrant.Initializer"></a>

```typescript
import { SchemaGrant } from 'cdktf-snowflake'

new SchemaGrant(scope: Construct, id: string, config: SchemaGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.SchemaGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.SchemaGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.SchemaGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.SchemaGrantConfig`](#cdktf-snowflake.SchemaGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetOnFuture` <a name="cdktf-snowflake.SchemaGrant.resetOnFuture"></a>

```typescript
public resetOnFuture()
```

##### `resetPrivilege` <a name="cdktf-snowflake.SchemaGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetRoles` <a name="cdktf-snowflake.SchemaGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetSchemaName` <a name="cdktf-snowflake.SchemaGrant.resetSchemaName"></a>

```typescript
public resetSchemaName()
```

##### `resetShares` <a name="cdktf-snowflake.SchemaGrant.resetShares"></a>

```typescript
public resetShares()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.SchemaGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `databaseNameInput`<sup>Required</sup> <a name="cdktf-snowflake.SchemaGrant.property.databaseNameInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.SchemaGrant.property.id"></a>

- *Type:* `string`

---

##### `onFutureInput`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaGrant.property.onFutureInput"></a>

- *Type:* `boolean`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `schemaNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaGrant.property.schemaNameInput"></a>

- *Type:* `string`

---

##### `sharesInput`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaGrant.property.sharesInput"></a>

- *Type:* `string`[]

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.SchemaGrant.property.databaseName"></a>

- *Type:* `string`

---

##### `onFuture`<sup>Required</sup> <a name="cdktf-snowflake.SchemaGrant.property.onFuture"></a>

- *Type:* `boolean`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.SchemaGrant.property.privilege"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.SchemaGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.SchemaGrant.property.schemaName"></a>

- *Type:* `string`

---

##### `shares`<sup>Required</sup> <a name="cdktf-snowflake.SchemaGrant.property.shares"></a>

- *Type:* `string`[]

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.SchemaGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


### ScimIntegration <a name="cdktf-snowflake.ScimIntegration"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/scim_integration.html snowflake_scim_integration}.

#### Initializer <a name="cdktf-snowflake.ScimIntegration.Initializer"></a>

```typescript
import { ScimIntegration } from 'cdktf-snowflake'

new ScimIntegration(scope: Construct, id: string, config: ScimIntegrationConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.ScimIntegration.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ScimIntegration.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.ScimIntegration.parameter.config"></a>

- *Type:* [`cdktf-snowflake.ScimIntegrationConfig`](#cdktf-snowflake.ScimIntegrationConfig)

---

#### Methods <a name="Methods"></a>

##### `resetNetworkPolicy` <a name="cdktf-snowflake.ScimIntegration.resetNetworkPolicy"></a>

```typescript
public resetNetworkPolicy()
```


#### Properties <a name="Properties"></a>

##### `createdOn`<sup>Required</sup> <a name="cdktf-snowflake.ScimIntegration.property.createdOn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ScimIntegration.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.ScimIntegration.property.nameInput"></a>

- *Type:* `string`

---

##### `provisionerRoleInput`<sup>Required</sup> <a name="cdktf-snowflake.ScimIntegration.property.provisionerRoleInput"></a>

- *Type:* `string`

---

##### `scimClientInput`<sup>Required</sup> <a name="cdktf-snowflake.ScimIntegration.property.scimClientInput"></a>

- *Type:* `string`

---

##### `networkPolicyInput`<sup>Optional</sup> <a name="cdktf-snowflake.ScimIntegration.property.networkPolicyInput"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.ScimIntegration.property.name"></a>

- *Type:* `string`

---

##### `networkPolicy`<sup>Required</sup> <a name="cdktf-snowflake.ScimIntegration.property.networkPolicy"></a>

- *Type:* `string`

---

##### `provisionerRole`<sup>Required</sup> <a name="cdktf-snowflake.ScimIntegration.property.provisionerRole"></a>

- *Type:* `string`

---

##### `scimClient`<sup>Required</sup> <a name="cdktf-snowflake.ScimIntegration.property.scimClient"></a>

- *Type:* `string`

---


### Sequence <a name="cdktf-snowflake.Sequence"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/sequence.html snowflake_sequence}.

#### Initializer <a name="cdktf-snowflake.Sequence.Initializer"></a>

```typescript
import { Sequence } from 'cdktf-snowflake'

new Sequence(scope: Construct, id: string, config: SequenceConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.Sequence.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Sequence.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.Sequence.parameter.config"></a>

- *Type:* [`cdktf-snowflake.SequenceConfig`](#cdktf-snowflake.SequenceConfig)

---

#### Methods <a name="Methods"></a>

##### `resetComment` <a name="cdktf-snowflake.Sequence.resetComment"></a>

```typescript
public resetComment()
```

##### `resetIncrement` <a name="cdktf-snowflake.Sequence.resetIncrement"></a>

```typescript
public resetIncrement()
```


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.Sequence.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Sequence.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.Sequence.property.nameInput"></a>

- *Type:* `string`

---

##### `nextValue`<sup>Required</sup> <a name="cdktf-snowflake.Sequence.property.nextValue"></a>

- *Type:* `number`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.Sequence.property.schemaInput"></a>

- *Type:* `string`

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.Sequence.property.commentInput"></a>

- *Type:* `string`

---

##### `incrementInput`<sup>Optional</sup> <a name="cdktf-snowflake.Sequence.property.incrementInput"></a>

- *Type:* `number`

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.Sequence.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.Sequence.property.database"></a>

- *Type:* `string`

---

##### `increment`<sup>Required</sup> <a name="cdktf-snowflake.Sequence.property.increment"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.Sequence.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.Sequence.property.schema"></a>

- *Type:* `string`

---


### SequenceGrant <a name="cdktf-snowflake.SequenceGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/sequence_grant.html snowflake_sequence_grant}.

#### Initializer <a name="cdktf-snowflake.SequenceGrant.Initializer"></a>

```typescript
import { SequenceGrant } from 'cdktf-snowflake'

new SequenceGrant(scope: Construct, id: string, config: SequenceGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.SequenceGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.SequenceGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.SequenceGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.SequenceGrantConfig`](#cdktf-snowflake.SequenceGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetOnFuture` <a name="cdktf-snowflake.SequenceGrant.resetOnFuture"></a>

```typescript
public resetOnFuture()
```

##### `resetPrivilege` <a name="cdktf-snowflake.SequenceGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetRoles` <a name="cdktf-snowflake.SequenceGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetSequenceName` <a name="cdktf-snowflake.SequenceGrant.resetSequenceName"></a>

```typescript
public resetSequenceName()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.SequenceGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `databaseNameInput`<sup>Required</sup> <a name="cdktf-snowflake.SequenceGrant.property.databaseNameInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.SequenceGrant.property.id"></a>

- *Type:* `string`

---

##### `schemaNameInput`<sup>Required</sup> <a name="cdktf-snowflake.SequenceGrant.property.schemaNameInput"></a>

- *Type:* `string`

---

##### `onFutureInput`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceGrant.property.onFutureInput"></a>

- *Type:* `boolean`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `sequenceNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceGrant.property.sequenceNameInput"></a>

- *Type:* `string`

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.SequenceGrant.property.databaseName"></a>

- *Type:* `string`

---

##### `onFuture`<sup>Required</sup> <a name="cdktf-snowflake.SequenceGrant.property.onFuture"></a>

- *Type:* `boolean`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.SequenceGrant.property.privilege"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.SequenceGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.SequenceGrant.property.schemaName"></a>

- *Type:* `string`

---

##### `sequenceName`<sup>Required</sup> <a name="cdktf-snowflake.SequenceGrant.property.sequenceName"></a>

- *Type:* `string`

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.SequenceGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


### Share <a name="cdktf-snowflake.Share"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/share.html snowflake_share}.

#### Initializer <a name="cdktf-snowflake.Share.Initializer"></a>

```typescript
import { Share } from 'cdktf-snowflake'

new Share(scope: Construct, id: string, config: ShareConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.Share.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Share.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.Share.parameter.config"></a>

- *Type:* [`cdktf-snowflake.ShareConfig`](#cdktf-snowflake.ShareConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAccounts` <a name="cdktf-snowflake.Share.resetAccounts"></a>

```typescript
public resetAccounts()
```

##### `resetComment` <a name="cdktf-snowflake.Share.resetComment"></a>

```typescript
public resetComment()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Share.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.Share.property.nameInput"></a>

- *Type:* `string`

---

##### `accountsInput`<sup>Optional</sup> <a name="cdktf-snowflake.Share.property.accountsInput"></a>

- *Type:* `string`[]

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.Share.property.commentInput"></a>

- *Type:* `string`

---

##### `accounts`<sup>Required</sup> <a name="cdktf-snowflake.Share.property.accounts"></a>

- *Type:* `string`[]

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.Share.property.comment"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.Share.property.name"></a>

- *Type:* `string`

---


### SnowflakeProvider <a name="cdktf-snowflake.SnowflakeProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake snowflake}.

#### Initializer <a name="cdktf-snowflake.SnowflakeProvider.Initializer"></a>

```typescript
import { SnowflakeProvider } from 'cdktf-snowflake'

new SnowflakeProvider(scope: Construct, id: string, config: SnowflakeProviderConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.SnowflakeProvider.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.SnowflakeProvider.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.SnowflakeProvider.parameter.config"></a>

- *Type:* [`cdktf-snowflake.SnowflakeProviderConfig`](#cdktf-snowflake.SnowflakeProviderConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAlias` <a name="cdktf-snowflake.SnowflakeProvider.resetAlias"></a>

```typescript
public resetAlias()
```

##### `resetBrowserAuth` <a name="cdktf-snowflake.SnowflakeProvider.resetBrowserAuth"></a>

```typescript
public resetBrowserAuth()
```

##### `resetOauthAccessToken` <a name="cdktf-snowflake.SnowflakeProvider.resetOauthAccessToken"></a>

```typescript
public resetOauthAccessToken()
```

##### `resetOauthClientId` <a name="cdktf-snowflake.SnowflakeProvider.resetOauthClientId"></a>

```typescript
public resetOauthClientId()
```

##### `resetOauthClientSecret` <a name="cdktf-snowflake.SnowflakeProvider.resetOauthClientSecret"></a>

```typescript
public resetOauthClientSecret()
```

##### `resetOauthEndpoint` <a name="cdktf-snowflake.SnowflakeProvider.resetOauthEndpoint"></a>

```typescript
public resetOauthEndpoint()
```

##### `resetOauthRedirectUrl` <a name="cdktf-snowflake.SnowflakeProvider.resetOauthRedirectUrl"></a>

```typescript
public resetOauthRedirectUrl()
```

##### `resetOauthRefreshToken` <a name="cdktf-snowflake.SnowflakeProvider.resetOauthRefreshToken"></a>

```typescript
public resetOauthRefreshToken()
```

##### `resetPassword` <a name="cdktf-snowflake.SnowflakeProvider.resetPassword"></a>

```typescript
public resetPassword()
```

##### `resetPrivateKey` <a name="cdktf-snowflake.SnowflakeProvider.resetPrivateKey"></a>

```typescript
public resetPrivateKey()
```

##### `resetPrivateKeyPath` <a name="cdktf-snowflake.SnowflakeProvider.resetPrivateKeyPath"></a>

```typescript
public resetPrivateKeyPath()
```

##### `resetRegion` <a name="cdktf-snowflake.SnowflakeProvider.resetRegion"></a>

```typescript
public resetRegion()
```

##### `resetRole` <a name="cdktf-snowflake.SnowflakeProvider.resetRole"></a>

```typescript
public resetRole()
```


#### Properties <a name="Properties"></a>

##### `accountInput`<sup>Required</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.accountInput"></a>

- *Type:* `string`

---

##### `usernameInput`<sup>Required</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.usernameInput"></a>

- *Type:* `string`

---

##### `aliasInput`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.aliasInput"></a>

- *Type:* `string`

---

##### `browserAuthInput`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.browserAuthInput"></a>

- *Type:* `boolean`

---

##### `oauthAccessTokenInput`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.oauthAccessTokenInput"></a>

- *Type:* `string`

---

##### `oauthClientIdInput`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.oauthClientIdInput"></a>

- *Type:* `string`

---

##### `oauthClientSecretInput`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.oauthClientSecretInput"></a>

- *Type:* `string`

---

##### `oauthEndpointInput`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.oauthEndpointInput"></a>

- *Type:* `string`

---

##### `oauthRedirectUrlInput`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.oauthRedirectUrlInput"></a>

- *Type:* `string`

---

##### `oauthRefreshTokenInput`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.oauthRefreshTokenInput"></a>

- *Type:* `string`

---

##### `passwordInput`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.passwordInput"></a>

- *Type:* `string`

---

##### `privateKeyInput`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.privateKeyInput"></a>

- *Type:* `string`

---

##### `privateKeyPathInput`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.privateKeyPathInput"></a>

- *Type:* `string`

---

##### `regionInput`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.regionInput"></a>

- *Type:* `string`

---

##### `roleInput`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.roleInput"></a>

- *Type:* `string`

---

##### `account`<sup>Required</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.account"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.username"></a>

- *Type:* `string`

---

##### `alias`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.alias"></a>

- *Type:* `string`

---

##### `browserAuth`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.browserAuth"></a>

- *Type:* `boolean`

---

##### `oauthAccessToken`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.oauthAccessToken"></a>

- *Type:* `string`

---

##### `oauthClientId`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.oauthClientId"></a>

- *Type:* `string`

---

##### `oauthClientSecret`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.oauthClientSecret"></a>

- *Type:* `string`

---

##### `oauthEndpoint`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.oauthEndpoint"></a>

- *Type:* `string`

---

##### `oauthRedirectUrl`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.oauthRedirectUrl"></a>

- *Type:* `string`

---

##### `oauthRefreshToken`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.oauthRefreshToken"></a>

- *Type:* `string`

---

##### `password`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.password"></a>

- *Type:* `string`

---

##### `privateKey`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.privateKey"></a>

- *Type:* `string`

---

##### `privateKeyPath`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.privateKeyPath"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.region"></a>

- *Type:* `string`

---

##### `role`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProvider.property.role"></a>

- *Type:* `string`

---


### Stage <a name="cdktf-snowflake.Stage"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/stage.html snowflake_stage}.

#### Initializer <a name="cdktf-snowflake.Stage.Initializer"></a>

```typescript
import { Stage } from 'cdktf-snowflake'

new Stage(scope: Construct, id: string, config: StageConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.Stage.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Stage.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.Stage.parameter.config"></a>

- *Type:* [`cdktf-snowflake.StageConfig`](#cdktf-snowflake.StageConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAwsExternalId` <a name="cdktf-snowflake.Stage.resetAwsExternalId"></a>

```typescript
public resetAwsExternalId()
```

##### `resetComment` <a name="cdktf-snowflake.Stage.resetComment"></a>

```typescript
public resetComment()
```

##### `resetCopyOptions` <a name="cdktf-snowflake.Stage.resetCopyOptions"></a>

```typescript
public resetCopyOptions()
```

##### `resetCredentials` <a name="cdktf-snowflake.Stage.resetCredentials"></a>

```typescript
public resetCredentials()
```

##### `resetEncryption` <a name="cdktf-snowflake.Stage.resetEncryption"></a>

```typescript
public resetEncryption()
```

##### `resetFileFormat` <a name="cdktf-snowflake.Stage.resetFileFormat"></a>

```typescript
public resetFileFormat()
```

##### `resetSnowflakeIamUser` <a name="cdktf-snowflake.Stage.resetSnowflakeIamUser"></a>

```typescript
public resetSnowflakeIamUser()
```

##### `resetStorageIntegration` <a name="cdktf-snowflake.Stage.resetStorageIntegration"></a>

```typescript
public resetStorageIntegration()
```

##### `resetUrl` <a name="cdktf-snowflake.Stage.resetUrl"></a>

```typescript
public resetUrl()
```


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.Stage.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Stage.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.Stage.property.nameInput"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.Stage.property.schemaInput"></a>

- *Type:* `string`

---

##### `awsExternalIdInput`<sup>Optional</sup> <a name="cdktf-snowflake.Stage.property.awsExternalIdInput"></a>

- *Type:* `string`

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.Stage.property.commentInput"></a>

- *Type:* `string`

---

##### `copyOptionsInput`<sup>Optional</sup> <a name="cdktf-snowflake.Stage.property.copyOptionsInput"></a>

- *Type:* `string`

---

##### `credentialsInput`<sup>Optional</sup> <a name="cdktf-snowflake.Stage.property.credentialsInput"></a>

- *Type:* `string`

---

##### `encryptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.Stage.property.encryptionInput"></a>

- *Type:* `string`

---

##### `fileFormatInput`<sup>Optional</sup> <a name="cdktf-snowflake.Stage.property.fileFormatInput"></a>

- *Type:* `string`

---

##### `snowflakeIamUserInput`<sup>Optional</sup> <a name="cdktf-snowflake.Stage.property.snowflakeIamUserInput"></a>

- *Type:* `string`

---

##### `storageIntegrationInput`<sup>Optional</sup> <a name="cdktf-snowflake.Stage.property.storageIntegrationInput"></a>

- *Type:* `string`

---

##### `urlInput`<sup>Optional</sup> <a name="cdktf-snowflake.Stage.property.urlInput"></a>

- *Type:* `string`

---

##### `awsExternalId`<sup>Required</sup> <a name="cdktf-snowflake.Stage.property.awsExternalId"></a>

- *Type:* `string`

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.Stage.property.comment"></a>

- *Type:* `string`

---

##### `copyOptions`<sup>Required</sup> <a name="cdktf-snowflake.Stage.property.copyOptions"></a>

- *Type:* `string`

---

##### `credentials`<sup>Required</sup> <a name="cdktf-snowflake.Stage.property.credentials"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.Stage.property.database"></a>

- *Type:* `string`

---

##### `encryption`<sup>Required</sup> <a name="cdktf-snowflake.Stage.property.encryption"></a>

- *Type:* `string`

---

##### `fileFormat`<sup>Required</sup> <a name="cdktf-snowflake.Stage.property.fileFormat"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.Stage.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.Stage.property.schema"></a>

- *Type:* `string`

---

##### `snowflakeIamUser`<sup>Required</sup> <a name="cdktf-snowflake.Stage.property.snowflakeIamUser"></a>

- *Type:* `string`

---

##### `storageIntegration`<sup>Required</sup> <a name="cdktf-snowflake.Stage.property.storageIntegration"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="cdktf-snowflake.Stage.property.url"></a>

- *Type:* `string`

---


### StageGrant <a name="cdktf-snowflake.StageGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html snowflake_stage_grant}.

#### Initializer <a name="cdktf-snowflake.StageGrant.Initializer"></a>

```typescript
import { StageGrant } from 'cdktf-snowflake'

new StageGrant(scope: Construct, id: string, config: StageGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.StageGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.StageGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.StageGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.StageGrantConfig`](#cdktf-snowflake.StageGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetOnFuture` <a name="cdktf-snowflake.StageGrant.resetOnFuture"></a>

```typescript
public resetOnFuture()
```

##### `resetPrivilege` <a name="cdktf-snowflake.StageGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetRoles` <a name="cdktf-snowflake.StageGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetShares` <a name="cdktf-snowflake.StageGrant.resetShares"></a>

```typescript
public resetShares()
```

##### `resetStageName` <a name="cdktf-snowflake.StageGrant.resetStageName"></a>

```typescript
public resetStageName()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.StageGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `databaseNameInput`<sup>Required</sup> <a name="cdktf-snowflake.StageGrant.property.databaseNameInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.StageGrant.property.id"></a>

- *Type:* `string`

---

##### `schemaNameInput`<sup>Required</sup> <a name="cdktf-snowflake.StageGrant.property.schemaNameInput"></a>

- *Type:* `string`

---

##### `onFutureInput`<sup>Optional</sup> <a name="cdktf-snowflake.StageGrant.property.onFutureInput"></a>

- *Type:* `boolean`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.StageGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.StageGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `sharesInput`<sup>Optional</sup> <a name="cdktf-snowflake.StageGrant.property.sharesInput"></a>

- *Type:* `string`[]

---

##### `stageNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.StageGrant.property.stageNameInput"></a>

- *Type:* `string`

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.StageGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.StageGrant.property.databaseName"></a>

- *Type:* `string`

---

##### `onFuture`<sup>Required</sup> <a name="cdktf-snowflake.StageGrant.property.onFuture"></a>

- *Type:* `boolean`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.StageGrant.property.privilege"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.StageGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.StageGrant.property.schemaName"></a>

- *Type:* `string`

---

##### `shares`<sup>Required</sup> <a name="cdktf-snowflake.StageGrant.property.shares"></a>

- *Type:* `string`[]

---

##### `stageName`<sup>Required</sup> <a name="cdktf-snowflake.StageGrant.property.stageName"></a>

- *Type:* `string`

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.StageGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


### StorageIntegration <a name="cdktf-snowflake.StorageIntegration"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html snowflake_storage_integration}.

#### Initializer <a name="cdktf-snowflake.StorageIntegration.Initializer"></a>

```typescript
import { StorageIntegration } from 'cdktf-snowflake'

new StorageIntegration(scope: Construct, id: string, config: StorageIntegrationConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.parameter.config"></a>

- *Type:* [`cdktf-snowflake.StorageIntegrationConfig`](#cdktf-snowflake.StorageIntegrationConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAzureTenantId` <a name="cdktf-snowflake.StorageIntegration.resetAzureTenantId"></a>

```typescript
public resetAzureTenantId()
```

##### `resetComment` <a name="cdktf-snowflake.StorageIntegration.resetComment"></a>

```typescript
public resetComment()
```

##### `resetEnabled` <a name="cdktf-snowflake.StorageIntegration.resetEnabled"></a>

```typescript
public resetEnabled()
```

##### `resetStorageAwsRoleArn` <a name="cdktf-snowflake.StorageIntegration.resetStorageAwsRoleArn"></a>

```typescript
public resetStorageAwsRoleArn()
```

##### `resetStorageBlockedLocations` <a name="cdktf-snowflake.StorageIntegration.resetStorageBlockedLocations"></a>

```typescript
public resetStorageBlockedLocations()
```

##### `resetType` <a name="cdktf-snowflake.StorageIntegration.resetType"></a>

```typescript
public resetType()
```


#### Properties <a name="Properties"></a>

##### `azureConsentUrl`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.property.azureConsentUrl"></a>

- *Type:* `string`

---

##### `azureMultiTenantAppName`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.property.azureMultiTenantAppName"></a>

- *Type:* `string`

---

##### `createdOn`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.property.createdOn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.property.nameInput"></a>

- *Type:* `string`

---

##### `storageAllowedLocationsInput`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.property.storageAllowedLocationsInput"></a>

- *Type:* `string`[]

---

##### `storageAwsExternalId`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.property.storageAwsExternalId"></a>

- *Type:* `string`

---

##### `storageAwsIamUserArn`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.property.storageAwsIamUserArn"></a>

- *Type:* `string`

---

##### `storageGcpServiceAccount`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.property.storageGcpServiceAccount"></a>

- *Type:* `string`

---

##### `storageProviderInput`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.property.storageProviderInput"></a>

- *Type:* `string`

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="cdktf-snowflake.StorageIntegration.property.azureTenantIdInput"></a>

- *Type:* `string`

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.StorageIntegration.property.commentInput"></a>

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="cdktf-snowflake.StorageIntegration.property.enabledInput"></a>

- *Type:* `boolean`

---

##### `storageAwsRoleArnInput`<sup>Optional</sup> <a name="cdktf-snowflake.StorageIntegration.property.storageAwsRoleArnInput"></a>

- *Type:* `string`

---

##### `storageBlockedLocationsInput`<sup>Optional</sup> <a name="cdktf-snowflake.StorageIntegration.property.storageBlockedLocationsInput"></a>

- *Type:* `string`[]

---

##### `typeInput`<sup>Optional</sup> <a name="cdktf-snowflake.StorageIntegration.property.typeInput"></a>

- *Type:* `string`

---

##### `azureTenantId`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.property.azureTenantId"></a>

- *Type:* `string`

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.property.comment"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.property.enabled"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.property.name"></a>

- *Type:* `string`

---

##### `storageAllowedLocations`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.property.storageAllowedLocations"></a>

- *Type:* `string`[]

---

##### `storageAwsRoleArn`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.property.storageAwsRoleArn"></a>

- *Type:* `string`

---

##### `storageBlockedLocations`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.property.storageBlockedLocations"></a>

- *Type:* `string`[]

---

##### `storageProvider`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.property.storageProvider"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegration.property.type"></a>

- *Type:* `string`

---


### Stream <a name="cdktf-snowflake.Stream"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/stream.html snowflake_stream}.

#### Initializer <a name="cdktf-snowflake.Stream.Initializer"></a>

```typescript
import { Stream } from 'cdktf-snowflake'

new Stream(scope: Construct, id: string, config: StreamConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.Stream.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Stream.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.Stream.parameter.config"></a>

- *Type:* [`cdktf-snowflake.StreamConfig`](#cdktf-snowflake.StreamConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAppendOnly` <a name="cdktf-snowflake.Stream.resetAppendOnly"></a>

```typescript
public resetAppendOnly()
```

##### `resetComment` <a name="cdktf-snowflake.Stream.resetComment"></a>

```typescript
public resetComment()
```

##### `resetOnTable` <a name="cdktf-snowflake.Stream.resetOnTable"></a>

```typescript
public resetOnTable()
```

##### `resetShowInitialRows` <a name="cdktf-snowflake.Stream.resetShowInitialRows"></a>

```typescript
public resetShowInitialRows()
```


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.Stream.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Stream.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.Stream.property.nameInput"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="cdktf-snowflake.Stream.property.owner"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.Stream.property.schemaInput"></a>

- *Type:* `string`

---

##### `appendOnlyInput`<sup>Optional</sup> <a name="cdktf-snowflake.Stream.property.appendOnlyInput"></a>

- *Type:* `boolean`

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.Stream.property.commentInput"></a>

- *Type:* `string`

---

##### `onTableInput`<sup>Optional</sup> <a name="cdktf-snowflake.Stream.property.onTableInput"></a>

- *Type:* `string`

---

##### `showInitialRowsInput`<sup>Optional</sup> <a name="cdktf-snowflake.Stream.property.showInitialRowsInput"></a>

- *Type:* `boolean`

---

##### `appendOnly`<sup>Required</sup> <a name="cdktf-snowflake.Stream.property.appendOnly"></a>

- *Type:* `boolean`

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.Stream.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.Stream.property.database"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.Stream.property.name"></a>

- *Type:* `string`

---

##### `onTable`<sup>Required</sup> <a name="cdktf-snowflake.Stream.property.onTable"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.Stream.property.schema"></a>

- *Type:* `string`

---

##### `showInitialRows`<sup>Required</sup> <a name="cdktf-snowflake.Stream.property.showInitialRows"></a>

- *Type:* `boolean`

---


### StreamGrant <a name="cdktf-snowflake.StreamGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant.html snowflake_stream_grant}.

#### Initializer <a name="cdktf-snowflake.StreamGrant.Initializer"></a>

```typescript
import { StreamGrant } from 'cdktf-snowflake'

new StreamGrant(scope: Construct, id: string, config: StreamGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.StreamGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.StreamGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.StreamGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.StreamGrantConfig`](#cdktf-snowflake.StreamGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetOnFuture` <a name="cdktf-snowflake.StreamGrant.resetOnFuture"></a>

```typescript
public resetOnFuture()
```

##### `resetPrivilege` <a name="cdktf-snowflake.StreamGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetRoles` <a name="cdktf-snowflake.StreamGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetStreamName` <a name="cdktf-snowflake.StreamGrant.resetStreamName"></a>

```typescript
public resetStreamName()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.StreamGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `databaseNameInput`<sup>Required</sup> <a name="cdktf-snowflake.StreamGrant.property.databaseNameInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.StreamGrant.property.id"></a>

- *Type:* `string`

---

##### `schemaNameInput`<sup>Required</sup> <a name="cdktf-snowflake.StreamGrant.property.schemaNameInput"></a>

- *Type:* `string`

---

##### `onFutureInput`<sup>Optional</sup> <a name="cdktf-snowflake.StreamGrant.property.onFutureInput"></a>

- *Type:* `boolean`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.StreamGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.StreamGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `streamNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.StreamGrant.property.streamNameInput"></a>

- *Type:* `string`

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.StreamGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.StreamGrant.property.databaseName"></a>

- *Type:* `string`

---

##### `onFuture`<sup>Required</sup> <a name="cdktf-snowflake.StreamGrant.property.onFuture"></a>

- *Type:* `boolean`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.StreamGrant.property.privilege"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.StreamGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.StreamGrant.property.schemaName"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="cdktf-snowflake.StreamGrant.property.streamName"></a>

- *Type:* `string`

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.StreamGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


### Table <a name="cdktf-snowflake.Table"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/table.html snowflake_table}.

#### Initializer <a name="cdktf-snowflake.Table.Initializer"></a>

```typescript
import { Table } from 'cdktf-snowflake'

new Table(scope: Construct, id: string, config: TableConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.Table.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Table.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.Table.parameter.config"></a>

- *Type:* [`cdktf-snowflake.TableConfig`](#cdktf-snowflake.TableConfig)

---

#### Methods <a name="Methods"></a>

##### `resetChangeTracking` <a name="cdktf-snowflake.Table.resetChangeTracking"></a>

```typescript
public resetChangeTracking()
```

##### `resetClusterBy` <a name="cdktf-snowflake.Table.resetClusterBy"></a>

```typescript
public resetClusterBy()
```

##### `resetComment` <a name="cdktf-snowflake.Table.resetComment"></a>

```typescript
public resetComment()
```

##### `resetDataRetentionDays` <a name="cdktf-snowflake.Table.resetDataRetentionDays"></a>

```typescript
public resetDataRetentionDays()
```

##### `resetPrimaryKey` <a name="cdktf-snowflake.Table.resetPrimaryKey"></a>

```typescript
public resetPrimaryKey()
```


#### Properties <a name="Properties"></a>

##### `columnInput`<sup>Required</sup> <a name="cdktf-snowflake.Table.property.columnInput"></a>

- *Type:* [`cdktf-snowflake.TableColumn`](#cdktf-snowflake.TableColumn)[]

---

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.Table.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Table.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.Table.property.nameInput"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="cdktf-snowflake.Table.property.owner"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.Table.property.schemaInput"></a>

- *Type:* `string`

---

##### `changeTrackingInput`<sup>Optional</sup> <a name="cdktf-snowflake.Table.property.changeTrackingInput"></a>

- *Type:* `boolean`

---

##### `clusterByInput`<sup>Optional</sup> <a name="cdktf-snowflake.Table.property.clusterByInput"></a>

- *Type:* `string`[]

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.Table.property.commentInput"></a>

- *Type:* `string`

---

##### `dataRetentionDaysInput`<sup>Optional</sup> <a name="cdktf-snowflake.Table.property.dataRetentionDaysInput"></a>

- *Type:* `number`

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="cdktf-snowflake.Table.property.primaryKeyInput"></a>

- *Type:* [`cdktf-snowflake.TablePrimaryKey`](#cdktf-snowflake.TablePrimaryKey)[]

---

##### `changeTracking`<sup>Required</sup> <a name="cdktf-snowflake.Table.property.changeTracking"></a>

- *Type:* `boolean`

---

##### `clusterBy`<sup>Required</sup> <a name="cdktf-snowflake.Table.property.clusterBy"></a>

- *Type:* `string`[]

---

##### `column`<sup>Required</sup> <a name="cdktf-snowflake.Table.property.column"></a>

- *Type:* [`cdktf-snowflake.TableColumn`](#cdktf-snowflake.TableColumn)[]

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.Table.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.Table.property.database"></a>

- *Type:* `string`

---

##### `dataRetentionDays`<sup>Required</sup> <a name="cdktf-snowflake.Table.property.dataRetentionDays"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.Table.property.name"></a>

- *Type:* `string`

---

##### `primaryKey`<sup>Required</sup> <a name="cdktf-snowflake.Table.property.primaryKey"></a>

- *Type:* [`cdktf-snowflake.TablePrimaryKey`](#cdktf-snowflake.TablePrimaryKey)[]

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.Table.property.schema"></a>

- *Type:* `string`

---


### TableGrant <a name="cdktf-snowflake.TableGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant.html snowflake_table_grant}.

#### Initializer <a name="cdktf-snowflake.TableGrant.Initializer"></a>

```typescript
import { TableGrant } from 'cdktf-snowflake'

new TableGrant(scope: Construct, id: string, config: TableGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.TableGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.TableGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.TableGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.TableGrantConfig`](#cdktf-snowflake.TableGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetOnFuture` <a name="cdktf-snowflake.TableGrant.resetOnFuture"></a>

```typescript
public resetOnFuture()
```

##### `resetPrivilege` <a name="cdktf-snowflake.TableGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetRoles` <a name="cdktf-snowflake.TableGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetSchemaName` <a name="cdktf-snowflake.TableGrant.resetSchemaName"></a>

```typescript
public resetSchemaName()
```

##### `resetShares` <a name="cdktf-snowflake.TableGrant.resetShares"></a>

```typescript
public resetShares()
```

##### `resetTableName` <a name="cdktf-snowflake.TableGrant.resetTableName"></a>

```typescript
public resetTableName()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.TableGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `databaseNameInput`<sup>Required</sup> <a name="cdktf-snowflake.TableGrant.property.databaseNameInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.TableGrant.property.id"></a>

- *Type:* `string`

---

##### `onFutureInput`<sup>Optional</sup> <a name="cdktf-snowflake.TableGrant.property.onFutureInput"></a>

- *Type:* `boolean`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.TableGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.TableGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `schemaNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.TableGrant.property.schemaNameInput"></a>

- *Type:* `string`

---

##### `sharesInput`<sup>Optional</sup> <a name="cdktf-snowflake.TableGrant.property.sharesInput"></a>

- *Type:* `string`[]

---

##### `tableNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.TableGrant.property.tableNameInput"></a>

- *Type:* `string`

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.TableGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.TableGrant.property.databaseName"></a>

- *Type:* `string`

---

##### `onFuture`<sup>Required</sup> <a name="cdktf-snowflake.TableGrant.property.onFuture"></a>

- *Type:* `boolean`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.TableGrant.property.privilege"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.TableGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.TableGrant.property.schemaName"></a>

- *Type:* `string`

---

##### `shares`<sup>Required</sup> <a name="cdktf-snowflake.TableGrant.property.shares"></a>

- *Type:* `string`[]

---

##### `tableName`<sup>Required</sup> <a name="cdktf-snowflake.TableGrant.property.tableName"></a>

- *Type:* `string`

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.TableGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


### Task <a name="cdktf-snowflake.Task"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/task.html snowflake_task}.

#### Initializer <a name="cdktf-snowflake.Task.Initializer"></a>

```typescript
import { Task } from 'cdktf-snowflake'

new Task(scope: Construct, id: string, config: TaskConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.Task.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Task.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.Task.parameter.config"></a>

- *Type:* [`cdktf-snowflake.TaskConfig`](#cdktf-snowflake.TaskConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAfter` <a name="cdktf-snowflake.Task.resetAfter"></a>

```typescript
public resetAfter()
```

##### `resetComment` <a name="cdktf-snowflake.Task.resetComment"></a>

```typescript
public resetComment()
```

##### `resetEnabled` <a name="cdktf-snowflake.Task.resetEnabled"></a>

```typescript
public resetEnabled()
```

##### `resetSchedule` <a name="cdktf-snowflake.Task.resetSchedule"></a>

```typescript
public resetSchedule()
```

##### `resetSessionParameters` <a name="cdktf-snowflake.Task.resetSessionParameters"></a>

```typescript
public resetSessionParameters()
```

##### `resetUserTaskTimeoutMs` <a name="cdktf-snowflake.Task.resetUserTaskTimeoutMs"></a>

```typescript
public resetUserTaskTimeoutMs()
```

##### `resetWhen` <a name="cdktf-snowflake.Task.resetWhen"></a>

```typescript
public resetWhen()
```


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.Task.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Task.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.Task.property.nameInput"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.Task.property.schemaInput"></a>

- *Type:* `string`

---

##### `sqlStatementInput`<sup>Required</sup> <a name="cdktf-snowflake.Task.property.sqlStatementInput"></a>

- *Type:* `string`

---

##### `warehouseInput`<sup>Required</sup> <a name="cdktf-snowflake.Task.property.warehouseInput"></a>

- *Type:* `string`

---

##### `afterInput`<sup>Optional</sup> <a name="cdktf-snowflake.Task.property.afterInput"></a>

- *Type:* `string`

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.Task.property.commentInput"></a>

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="cdktf-snowflake.Task.property.enabledInput"></a>

- *Type:* `boolean`

---

##### `scheduleInput`<sup>Optional</sup> <a name="cdktf-snowflake.Task.property.scheduleInput"></a>

- *Type:* `string`

---

##### `sessionParametersInput`<sup>Optional</sup> <a name="cdktf-snowflake.Task.property.sessionParametersInput"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `userTaskTimeoutMsInput`<sup>Optional</sup> <a name="cdktf-snowflake.Task.property.userTaskTimeoutMsInput"></a>

- *Type:* `number`

---

##### `whenInput`<sup>Optional</sup> <a name="cdktf-snowflake.Task.property.whenInput"></a>

- *Type:* `string`

---

##### `after`<sup>Required</sup> <a name="cdktf-snowflake.Task.property.after"></a>

- *Type:* `string`

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.Task.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.Task.property.database"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="cdktf-snowflake.Task.property.enabled"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.Task.property.name"></a>

- *Type:* `string`

---

##### `schedule`<sup>Required</sup> <a name="cdktf-snowflake.Task.property.schedule"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.Task.property.schema"></a>

- *Type:* `string`

---

##### `sessionParameters`<sup>Required</sup> <a name="cdktf-snowflake.Task.property.sessionParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `sqlStatement`<sup>Required</sup> <a name="cdktf-snowflake.Task.property.sqlStatement"></a>

- *Type:* `string`

---

##### `userTaskTimeoutMs`<sup>Required</sup> <a name="cdktf-snowflake.Task.property.userTaskTimeoutMs"></a>

- *Type:* `number`

---

##### `warehouse`<sup>Required</sup> <a name="cdktf-snowflake.Task.property.warehouse"></a>

- *Type:* `string`

---

##### `when`<sup>Required</sup> <a name="cdktf-snowflake.Task.property.when"></a>

- *Type:* `string`

---


### TaskGrant <a name="cdktf-snowflake.TaskGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/task_grant.html snowflake_task_grant}.

#### Initializer <a name="cdktf-snowflake.TaskGrant.Initializer"></a>

```typescript
import { TaskGrant } from 'cdktf-snowflake'

new TaskGrant(scope: Construct, id: string, config: TaskGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.TaskGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.TaskGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.TaskGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.TaskGrantConfig`](#cdktf-snowflake.TaskGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetOnFuture` <a name="cdktf-snowflake.TaskGrant.resetOnFuture"></a>

```typescript
public resetOnFuture()
```

##### `resetPrivilege` <a name="cdktf-snowflake.TaskGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetRoles` <a name="cdktf-snowflake.TaskGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetTaskName` <a name="cdktf-snowflake.TaskGrant.resetTaskName"></a>

```typescript
public resetTaskName()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.TaskGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `databaseNameInput`<sup>Required</sup> <a name="cdktf-snowflake.TaskGrant.property.databaseNameInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.TaskGrant.property.id"></a>

- *Type:* `string`

---

##### `schemaNameInput`<sup>Required</sup> <a name="cdktf-snowflake.TaskGrant.property.schemaNameInput"></a>

- *Type:* `string`

---

##### `onFutureInput`<sup>Optional</sup> <a name="cdktf-snowflake.TaskGrant.property.onFutureInput"></a>

- *Type:* `boolean`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.TaskGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.TaskGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `taskNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.TaskGrant.property.taskNameInput"></a>

- *Type:* `string`

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.TaskGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.TaskGrant.property.databaseName"></a>

- *Type:* `string`

---

##### `onFuture`<sup>Required</sup> <a name="cdktf-snowflake.TaskGrant.property.onFuture"></a>

- *Type:* `boolean`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.TaskGrant.property.privilege"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.TaskGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.TaskGrant.property.schemaName"></a>

- *Type:* `string`

---

##### `taskName`<sup>Required</sup> <a name="cdktf-snowflake.TaskGrant.property.taskName"></a>

- *Type:* `string`

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.TaskGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


### User <a name="cdktf-snowflake.User"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/user.html snowflake_user}.

#### Initializer <a name="cdktf-snowflake.User.Initializer"></a>

```typescript
import { User } from 'cdktf-snowflake'

new User(scope: Construct, id: string, config: UserConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.User.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.User.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.User.parameter.config"></a>

- *Type:* [`cdktf-snowflake.UserConfig`](#cdktf-snowflake.UserConfig)

---

#### Methods <a name="Methods"></a>

##### `resetComment` <a name="cdktf-snowflake.User.resetComment"></a>

```typescript
public resetComment()
```

##### `resetDefaultNamespace` <a name="cdktf-snowflake.User.resetDefaultNamespace"></a>

```typescript
public resetDefaultNamespace()
```

##### `resetDefaultRole` <a name="cdktf-snowflake.User.resetDefaultRole"></a>

```typescript
public resetDefaultRole()
```

##### `resetDefaultWarehouse` <a name="cdktf-snowflake.User.resetDefaultWarehouse"></a>

```typescript
public resetDefaultWarehouse()
```

##### `resetDisabled` <a name="cdktf-snowflake.User.resetDisabled"></a>

```typescript
public resetDisabled()
```

##### `resetDisplayName` <a name="cdktf-snowflake.User.resetDisplayName"></a>

```typescript
public resetDisplayName()
```

##### `resetEmail` <a name="cdktf-snowflake.User.resetEmail"></a>

```typescript
public resetEmail()
```

##### `resetFirstName` <a name="cdktf-snowflake.User.resetFirstName"></a>

```typescript
public resetFirstName()
```

##### `resetLastName` <a name="cdktf-snowflake.User.resetLastName"></a>

```typescript
public resetLastName()
```

##### `resetLoginName` <a name="cdktf-snowflake.User.resetLoginName"></a>

```typescript
public resetLoginName()
```

##### `resetMustChangePassword` <a name="cdktf-snowflake.User.resetMustChangePassword"></a>

```typescript
public resetMustChangePassword()
```

##### `resetPassword` <a name="cdktf-snowflake.User.resetPassword"></a>

```typescript
public resetPassword()
```

##### `resetRsaPublicKey` <a name="cdktf-snowflake.User.resetRsaPublicKey"></a>

```typescript
public resetRsaPublicKey()
```

##### `resetRsaPublicKey2` <a name="cdktf-snowflake.User.resetRsaPublicKey2"></a>

```typescript
public resetRsaPublicKey2()
```


#### Properties <a name="Properties"></a>

##### `hasRsaPublicKey`<sup>Required</sup> <a name="cdktf-snowflake.User.property.hasRsaPublicKey"></a>

- *Type:* `boolean`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.User.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.User.property.nameInput"></a>

- *Type:* `string`

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.User.property.commentInput"></a>

- *Type:* `string`

---

##### `defaultNamespaceInput`<sup>Optional</sup> <a name="cdktf-snowflake.User.property.defaultNamespaceInput"></a>

- *Type:* `string`

---

##### `defaultRoleInput`<sup>Optional</sup> <a name="cdktf-snowflake.User.property.defaultRoleInput"></a>

- *Type:* `string`

---

##### `defaultWarehouseInput`<sup>Optional</sup> <a name="cdktf-snowflake.User.property.defaultWarehouseInput"></a>

- *Type:* `string`

---

##### `disabledInput`<sup>Optional</sup> <a name="cdktf-snowflake.User.property.disabledInput"></a>

- *Type:* `boolean`

---

##### `displayNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.User.property.displayNameInput"></a>

- *Type:* `string`

---

##### `emailInput`<sup>Optional</sup> <a name="cdktf-snowflake.User.property.emailInput"></a>

- *Type:* `string`

---

##### `firstNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.User.property.firstNameInput"></a>

- *Type:* `string`

---

##### `lastNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.User.property.lastNameInput"></a>

- *Type:* `string`

---

##### `loginNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.User.property.loginNameInput"></a>

- *Type:* `string`

---

##### `mustChangePasswordInput`<sup>Optional</sup> <a name="cdktf-snowflake.User.property.mustChangePasswordInput"></a>

- *Type:* `boolean`

---

##### `passwordInput`<sup>Optional</sup> <a name="cdktf-snowflake.User.property.passwordInput"></a>

- *Type:* `string`

---

##### `rsaPublicKey2Input`<sup>Optional</sup> <a name="cdktf-snowflake.User.property.rsaPublicKey2Input"></a>

- *Type:* `string`

---

##### `rsaPublicKeyInput`<sup>Optional</sup> <a name="cdktf-snowflake.User.property.rsaPublicKeyInput"></a>

- *Type:* `string`

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.User.property.comment"></a>

- *Type:* `string`

---

##### `defaultNamespace`<sup>Required</sup> <a name="cdktf-snowflake.User.property.defaultNamespace"></a>

- *Type:* `string`

---

##### `defaultRole`<sup>Required</sup> <a name="cdktf-snowflake.User.property.defaultRole"></a>

- *Type:* `string`

---

##### `defaultWarehouse`<sup>Required</sup> <a name="cdktf-snowflake.User.property.defaultWarehouse"></a>

- *Type:* `string`

---

##### `disabled`<sup>Required</sup> <a name="cdktf-snowflake.User.property.disabled"></a>

- *Type:* `boolean`

---

##### `displayName`<sup>Required</sup> <a name="cdktf-snowflake.User.property.displayName"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="cdktf-snowflake.User.property.email"></a>

- *Type:* `string`

---

##### `firstName`<sup>Required</sup> <a name="cdktf-snowflake.User.property.firstName"></a>

- *Type:* `string`

---

##### `lastName`<sup>Required</sup> <a name="cdktf-snowflake.User.property.lastName"></a>

- *Type:* `string`

---

##### `loginName`<sup>Required</sup> <a name="cdktf-snowflake.User.property.loginName"></a>

- *Type:* `string`

---

##### `mustChangePassword`<sup>Required</sup> <a name="cdktf-snowflake.User.property.mustChangePassword"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.User.property.name"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="cdktf-snowflake.User.property.password"></a>

- *Type:* `string`

---

##### `rsaPublicKey`<sup>Required</sup> <a name="cdktf-snowflake.User.property.rsaPublicKey"></a>

- *Type:* `string`

---

##### `rsaPublicKey2`<sup>Required</sup> <a name="cdktf-snowflake.User.property.rsaPublicKey2"></a>

- *Type:* `string`

---


### UserPublicKeys <a name="cdktf-snowflake.UserPublicKeys"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/user_public_keys.html snowflake_user_public_keys}.

#### Initializer <a name="cdktf-snowflake.UserPublicKeys.Initializer"></a>

```typescript
import { UserPublicKeys } from 'cdktf-snowflake'

new UserPublicKeys(scope: Construct, id: string, config: UserPublicKeysConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.UserPublicKeys.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.UserPublicKeys.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.UserPublicKeys.parameter.config"></a>

- *Type:* [`cdktf-snowflake.UserPublicKeysConfig`](#cdktf-snowflake.UserPublicKeysConfig)

---

#### Methods <a name="Methods"></a>

##### `resetRsaPublicKey` <a name="cdktf-snowflake.UserPublicKeys.resetRsaPublicKey"></a>

```typescript
public resetRsaPublicKey()
```

##### `resetRsaPublicKey2` <a name="cdktf-snowflake.UserPublicKeys.resetRsaPublicKey2"></a>

```typescript
public resetRsaPublicKey2()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.UserPublicKeys.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.UserPublicKeys.property.nameInput"></a>

- *Type:* `string`

---

##### `rsaPublicKey2Input`<sup>Optional</sup> <a name="cdktf-snowflake.UserPublicKeys.property.rsaPublicKey2Input"></a>

- *Type:* `string`

---

##### `rsaPublicKeyInput`<sup>Optional</sup> <a name="cdktf-snowflake.UserPublicKeys.property.rsaPublicKeyInput"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.UserPublicKeys.property.name"></a>

- *Type:* `string`

---

##### `rsaPublicKey`<sup>Required</sup> <a name="cdktf-snowflake.UserPublicKeys.property.rsaPublicKey"></a>

- *Type:* `string`

---

##### `rsaPublicKey2`<sup>Required</sup> <a name="cdktf-snowflake.UserPublicKeys.property.rsaPublicKey2"></a>

- *Type:* `string`

---


### View <a name="cdktf-snowflake.View"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/view.html snowflake_view}.

#### Initializer <a name="cdktf-snowflake.View.Initializer"></a>

```typescript
import { View } from 'cdktf-snowflake'

new View(scope: Construct, id: string, config: ViewConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.View.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.View.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.View.parameter.config"></a>

- *Type:* [`cdktf-snowflake.ViewConfig`](#cdktf-snowflake.ViewConfig)

---

#### Methods <a name="Methods"></a>

##### `resetComment` <a name="cdktf-snowflake.View.resetComment"></a>

```typescript
public resetComment()
```

##### `resetIsSecure` <a name="cdktf-snowflake.View.resetIsSecure"></a>

```typescript
public resetIsSecure()
```

##### `resetOrReplace` <a name="cdktf-snowflake.View.resetOrReplace"></a>

```typescript
public resetOrReplace()
```


#### Properties <a name="Properties"></a>

##### `databaseInput`<sup>Required</sup> <a name="cdktf-snowflake.View.property.databaseInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.View.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.View.property.nameInput"></a>

- *Type:* `string`

---

##### `schemaInput`<sup>Required</sup> <a name="cdktf-snowflake.View.property.schemaInput"></a>

- *Type:* `string`

---

##### `statementInput`<sup>Required</sup> <a name="cdktf-snowflake.View.property.statementInput"></a>

- *Type:* `string`

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.View.property.commentInput"></a>

- *Type:* `string`

---

##### `isSecureInput`<sup>Optional</sup> <a name="cdktf-snowflake.View.property.isSecureInput"></a>

- *Type:* `boolean`

---

##### `orReplaceInput`<sup>Optional</sup> <a name="cdktf-snowflake.View.property.orReplaceInput"></a>

- *Type:* `boolean`

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.View.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.View.property.database"></a>

- *Type:* `string`

---

##### `isSecure`<sup>Required</sup> <a name="cdktf-snowflake.View.property.isSecure"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.View.property.name"></a>

- *Type:* `string`

---

##### `orReplace`<sup>Required</sup> <a name="cdktf-snowflake.View.property.orReplace"></a>

- *Type:* `boolean`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.View.property.schema"></a>

- *Type:* `string`

---

##### `statement`<sup>Required</sup> <a name="cdktf-snowflake.View.property.statement"></a>

- *Type:* `string`

---


### ViewGrant <a name="cdktf-snowflake.ViewGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/view_grant.html snowflake_view_grant}.

#### Initializer <a name="cdktf-snowflake.ViewGrant.Initializer"></a>

```typescript
import { ViewGrant } from 'cdktf-snowflake'

new ViewGrant(scope: Construct, id: string, config: ViewGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.ViewGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ViewGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.ViewGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.ViewGrantConfig`](#cdktf-snowflake.ViewGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetOnFuture` <a name="cdktf-snowflake.ViewGrant.resetOnFuture"></a>

```typescript
public resetOnFuture()
```

##### `resetPrivilege` <a name="cdktf-snowflake.ViewGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetRoles` <a name="cdktf-snowflake.ViewGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetSchemaName` <a name="cdktf-snowflake.ViewGrant.resetSchemaName"></a>

```typescript
public resetSchemaName()
```

##### `resetShares` <a name="cdktf-snowflake.ViewGrant.resetShares"></a>

```typescript
public resetShares()
```

##### `resetViewName` <a name="cdktf-snowflake.ViewGrant.resetViewName"></a>

```typescript
public resetViewName()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.ViewGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `databaseNameInput`<sup>Required</sup> <a name="cdktf-snowflake.ViewGrant.property.databaseNameInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.ViewGrant.property.id"></a>

- *Type:* `string`

---

##### `onFutureInput`<sup>Optional</sup> <a name="cdktf-snowflake.ViewGrant.property.onFutureInput"></a>

- *Type:* `boolean`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.ViewGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.ViewGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `schemaNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.ViewGrant.property.schemaNameInput"></a>

- *Type:* `string`

---

##### `sharesInput`<sup>Optional</sup> <a name="cdktf-snowflake.ViewGrant.property.sharesInput"></a>

- *Type:* `string`[]

---

##### `viewNameInput`<sup>Optional</sup> <a name="cdktf-snowflake.ViewGrant.property.viewNameInput"></a>

- *Type:* `string`

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.ViewGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.ViewGrant.property.databaseName"></a>

- *Type:* `string`

---

##### `onFuture`<sup>Required</sup> <a name="cdktf-snowflake.ViewGrant.property.onFuture"></a>

- *Type:* `boolean`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.ViewGrant.property.privilege"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.ViewGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.ViewGrant.property.schemaName"></a>

- *Type:* `string`

---

##### `shares`<sup>Required</sup> <a name="cdktf-snowflake.ViewGrant.property.shares"></a>

- *Type:* `string`[]

---

##### `viewName`<sup>Required</sup> <a name="cdktf-snowflake.ViewGrant.property.viewName"></a>

- *Type:* `string`

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.ViewGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


### Warehouse <a name="cdktf-snowflake.Warehouse"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse.html snowflake_warehouse}.

#### Initializer <a name="cdktf-snowflake.Warehouse.Initializer"></a>

```typescript
import { Warehouse } from 'cdktf-snowflake'

new Warehouse(scope: Construct, id: string, config: WarehouseConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.Warehouse.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Warehouse.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.Warehouse.parameter.config"></a>

- *Type:* [`cdktf-snowflake.WarehouseConfig`](#cdktf-snowflake.WarehouseConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAutoResume` <a name="cdktf-snowflake.Warehouse.resetAutoResume"></a>

```typescript
public resetAutoResume()
```

##### `resetAutoSuspend` <a name="cdktf-snowflake.Warehouse.resetAutoSuspend"></a>

```typescript
public resetAutoSuspend()
```

##### `resetComment` <a name="cdktf-snowflake.Warehouse.resetComment"></a>

```typescript
public resetComment()
```

##### `resetInitiallySuspended` <a name="cdktf-snowflake.Warehouse.resetInitiallySuspended"></a>

```typescript
public resetInitiallySuspended()
```

##### `resetMaxClusterCount` <a name="cdktf-snowflake.Warehouse.resetMaxClusterCount"></a>

```typescript
public resetMaxClusterCount()
```

##### `resetMaxConcurrencyLevel` <a name="cdktf-snowflake.Warehouse.resetMaxConcurrencyLevel"></a>

```typescript
public resetMaxConcurrencyLevel()
```

##### `resetMinClusterCount` <a name="cdktf-snowflake.Warehouse.resetMinClusterCount"></a>

```typescript
public resetMinClusterCount()
```

##### `resetResourceMonitor` <a name="cdktf-snowflake.Warehouse.resetResourceMonitor"></a>

```typescript
public resetResourceMonitor()
```

##### `resetScalingPolicy` <a name="cdktf-snowflake.Warehouse.resetScalingPolicy"></a>

```typescript
public resetScalingPolicy()
```

##### `resetStatementQueuedTimeoutInSeconds` <a name="cdktf-snowflake.Warehouse.resetStatementQueuedTimeoutInSeconds"></a>

```typescript
public resetStatementQueuedTimeoutInSeconds()
```

##### `resetStatementTimeoutInSeconds` <a name="cdktf-snowflake.Warehouse.resetStatementTimeoutInSeconds"></a>

```typescript
public resetStatementTimeoutInSeconds()
```

##### `resetWaitForProvisioning` <a name="cdktf-snowflake.Warehouse.resetWaitForProvisioning"></a>

```typescript
public resetWaitForProvisioning()
```

##### `resetWarehouseSize` <a name="cdktf-snowflake.Warehouse.resetWarehouseSize"></a>

```typescript
public resetWarehouseSize()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.Warehouse.property.id"></a>

- *Type:* `string`

---

##### `nameInput`<sup>Required</sup> <a name="cdktf-snowflake.Warehouse.property.nameInput"></a>

- *Type:* `string`

---

##### `autoResumeInput`<sup>Optional</sup> <a name="cdktf-snowflake.Warehouse.property.autoResumeInput"></a>

- *Type:* `boolean`

---

##### `autoSuspendInput`<sup>Optional</sup> <a name="cdktf-snowflake.Warehouse.property.autoSuspendInput"></a>

- *Type:* `number`

---

##### `commentInput`<sup>Optional</sup> <a name="cdktf-snowflake.Warehouse.property.commentInput"></a>

- *Type:* `string`

---

##### `initiallySuspendedInput`<sup>Optional</sup> <a name="cdktf-snowflake.Warehouse.property.initiallySuspendedInput"></a>

- *Type:* `boolean`

---

##### `maxClusterCountInput`<sup>Optional</sup> <a name="cdktf-snowflake.Warehouse.property.maxClusterCountInput"></a>

- *Type:* `number`

---

##### `maxConcurrencyLevelInput`<sup>Optional</sup> <a name="cdktf-snowflake.Warehouse.property.maxConcurrencyLevelInput"></a>

- *Type:* `number`

---

##### `minClusterCountInput`<sup>Optional</sup> <a name="cdktf-snowflake.Warehouse.property.minClusterCountInput"></a>

- *Type:* `number`

---

##### `resourceMonitorInput`<sup>Optional</sup> <a name="cdktf-snowflake.Warehouse.property.resourceMonitorInput"></a>

- *Type:* `string`

---

##### `scalingPolicyInput`<sup>Optional</sup> <a name="cdktf-snowflake.Warehouse.property.scalingPolicyInput"></a>

- *Type:* `string`

---

##### `statementQueuedTimeoutInSecondsInput`<sup>Optional</sup> <a name="cdktf-snowflake.Warehouse.property.statementQueuedTimeoutInSecondsInput"></a>

- *Type:* `number`

---

##### `statementTimeoutInSecondsInput`<sup>Optional</sup> <a name="cdktf-snowflake.Warehouse.property.statementTimeoutInSecondsInput"></a>

- *Type:* `number`

---

##### `waitForProvisioningInput`<sup>Optional</sup> <a name="cdktf-snowflake.Warehouse.property.waitForProvisioningInput"></a>

- *Type:* `boolean`

---

##### `warehouseSizeInput`<sup>Optional</sup> <a name="cdktf-snowflake.Warehouse.property.warehouseSizeInput"></a>

- *Type:* `string`

---

##### `autoResume`<sup>Required</sup> <a name="cdktf-snowflake.Warehouse.property.autoResume"></a>

- *Type:* `boolean`

---

##### `autoSuspend`<sup>Required</sup> <a name="cdktf-snowflake.Warehouse.property.autoSuspend"></a>

- *Type:* `number`

---

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.Warehouse.property.comment"></a>

- *Type:* `string`

---

##### `initiallySuspended`<sup>Required</sup> <a name="cdktf-snowflake.Warehouse.property.initiallySuspended"></a>

- *Type:* `boolean`

---

##### `maxClusterCount`<sup>Required</sup> <a name="cdktf-snowflake.Warehouse.property.maxClusterCount"></a>

- *Type:* `number`

---

##### `maxConcurrencyLevel`<sup>Required</sup> <a name="cdktf-snowflake.Warehouse.property.maxConcurrencyLevel"></a>

- *Type:* `number`

---

##### `minClusterCount`<sup>Required</sup> <a name="cdktf-snowflake.Warehouse.property.minClusterCount"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.Warehouse.property.name"></a>

- *Type:* `string`

---

##### `resourceMonitor`<sup>Required</sup> <a name="cdktf-snowflake.Warehouse.property.resourceMonitor"></a>

- *Type:* `string`

---

##### `scalingPolicy`<sup>Required</sup> <a name="cdktf-snowflake.Warehouse.property.scalingPolicy"></a>

- *Type:* `string`

---

##### `statementQueuedTimeoutInSeconds`<sup>Required</sup> <a name="cdktf-snowflake.Warehouse.property.statementQueuedTimeoutInSeconds"></a>

- *Type:* `number`

---

##### `statementTimeoutInSeconds`<sup>Required</sup> <a name="cdktf-snowflake.Warehouse.property.statementTimeoutInSeconds"></a>

- *Type:* `number`

---

##### `waitForProvisioning`<sup>Required</sup> <a name="cdktf-snowflake.Warehouse.property.waitForProvisioning"></a>

- *Type:* `boolean`

---

##### `warehouseSize`<sup>Required</sup> <a name="cdktf-snowflake.Warehouse.property.warehouseSize"></a>

- *Type:* `string`

---


### WarehouseGrant <a name="cdktf-snowflake.WarehouseGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse_grant.html snowflake_warehouse_grant}.

#### Initializer <a name="cdktf-snowflake.WarehouseGrant.Initializer"></a>

```typescript
import { WarehouseGrant } from 'cdktf-snowflake'

new WarehouseGrant(scope: Construct, id: string, config: WarehouseGrantConfig)
```

##### `scope`<sup>Required</sup> <a name="cdktf-snowflake.WarehouseGrant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.WarehouseGrant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="cdktf-snowflake.WarehouseGrant.parameter.config"></a>

- *Type:* [`cdktf-snowflake.WarehouseGrantConfig`](#cdktf-snowflake.WarehouseGrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetPrivilege` <a name="cdktf-snowflake.WarehouseGrant.resetPrivilege"></a>

```typescript
public resetPrivilege()
```

##### `resetRoles` <a name="cdktf-snowflake.WarehouseGrant.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetWithGrantOption` <a name="cdktf-snowflake.WarehouseGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="cdktf-snowflake.WarehouseGrant.property.id"></a>

- *Type:* `string`

---

##### `warehouseNameInput`<sup>Required</sup> <a name="cdktf-snowflake.WarehouseGrant.property.warehouseNameInput"></a>

- *Type:* `string`

---

##### `privilegeInput`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseGrant.property.privilegeInput"></a>

- *Type:* `string`

---

##### `rolesInput`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseGrant.property.rolesInput"></a>

- *Type:* `string`[]

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseGrant.property.withGrantOptionInput"></a>

- *Type:* `boolean`

---

##### `privilege`<sup>Required</sup> <a name="cdktf-snowflake.WarehouseGrant.property.privilege"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="cdktf-snowflake.WarehouseGrant.property.roles"></a>

- *Type:* `string`[]

---

##### `warehouseName`<sup>Required</sup> <a name="cdktf-snowflake.WarehouseGrant.property.warehouseName"></a>

- *Type:* `string`

---

##### `withGrantOption`<sup>Required</sup> <a name="cdktf-snowflake.WarehouseGrant.property.withGrantOption"></a>

- *Type:* `boolean`

---


## Structs <a name="Structs"></a>

### AccountGrantConfig <a name="cdktf-snowflake.AccountGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AccountGrantConfig } from 'cdktf-snowflake'

const accountGrantConfig: AccountGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.AccountGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.AccountGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.AccountGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.AccountGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.AccountGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/account_grant.html#privilege AccountGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.AccountGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/account_grant.html#roles AccountGrant#roles}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.AccountGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/account_grant.html#with_grant_option AccountGrant#with_grant_option}

---

### ApiIntegrationConfig <a name="cdktf-snowflake.ApiIntegrationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApiIntegrationConfig } from 'cdktf-snowflake'

const apiIntegrationConfig: ApiIntegrationConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.ApiIntegrationConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.ApiIntegrationConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.ApiIntegrationConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.ApiIntegrationConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegrationConfig.property.apiAllowedPrefixes"></a>

- *Type:* `string`[]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service endpoints and resources within those proxies.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/api_integration.html#api_allowed_prefixes ApiIntegration#api_allowed_prefixes}

---

##### `apiProvider`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegrationConfig.property.apiProvider"></a>

- *Type:* `string`

Specifies the HTTPS proxy service type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/api_integration.html#api_provider ApiIntegration#api_provider}

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.ApiIntegrationConfig.property.name"></a>

- *Type:* `string`

Specifies the name of the API integration.

This name follows the rules for Object Identifiers. The name should be unique among api integrations in your account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/api_integration.html#name ApiIntegration#name}

---

##### `apiAwsRoleArn`<sup>Optional</sup> <a name="cdktf-snowflake.ApiIntegrationConfig.property.apiAwsRoleArn"></a>

- *Type:* `string`

ARN of a cloud platform role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/api_integration.html#api_aws_role_arn ApiIntegration#api_aws_role_arn}

---

##### `apiBlockedPrefixes`<sup>Optional</sup> <a name="cdktf-snowflake.ApiIntegrationConfig.property.apiBlockedPrefixes"></a>

- *Type:* `string`[]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/api_integration.html#api_blocked_prefixes ApiIntegration#api_blocked_prefixes}

---

##### `azureAdApplicationId`<sup>Optional</sup> <a name="cdktf-snowflake.ApiIntegrationConfig.property.azureAdApplicationId"></a>

- *Type:* `string`

The 'Application (client) id' of the Azure AD app for your remote service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/api_integration.html#azure_ad_application_id ApiIntegration#azure_ad_application_id}

---

##### `azureTenantId`<sup>Optional</sup> <a name="cdktf-snowflake.ApiIntegrationConfig.property.azureTenantId"></a>

- *Type:* `string`

Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/api_integration.html#azure_tenant_id ApiIntegration#azure_tenant_id}

---

##### `enabled`<sup>Optional</sup> <a name="cdktf-snowflake.ApiIntegrationConfig.property.enabled"></a>

- *Type:* `boolean`

Specifies whether this API integration is enabled or disabled.

If the API integration is disabled, any external function that relies on it will not work.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/api_integration.html#enabled ApiIntegration#enabled}

---

### DatabaseConfig <a name="cdktf-snowflake.DatabaseConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DatabaseConfig } from 'cdktf-snowflake'

const databaseConfig: DatabaseConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.DatabaseConfig.property.name"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database.html#name Database#name}.

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseConfig.property.comment"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database.html#comment Database#comment}.

---

##### `dataRetentionTimeInDays`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseConfig.property.dataRetentionTimeInDays"></a>

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database.html#data_retention_time_in_days Database#data_retention_time_in_days}.

---

##### `fromDatabase`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseConfig.property.fromDatabase"></a>

- *Type:* `string`

Specify a database to create a clone from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database.html#from_database Database#from_database}

---

##### `fromShare`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseConfig.property.fromShare"></a>

- *Type:* {[ key: string ]: `string`}

Specify a provider and a share in this map to create a database from a share.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database.html#from_share Database#from_share}

---

### DatabaseGrantConfig <a name="cdktf-snowflake.DatabaseGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DatabaseGrantConfig } from 'cdktf-snowflake'

const databaseGrantConfig: DatabaseGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.DatabaseGrantConfig.property.databaseName"></a>

- *Type:* `string`

The name of the database on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database_grant.html#database_name DatabaseGrant#database_name}

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database_grant.html#privilege DatabaseGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database_grant.html#roles DatabaseGrant#roles}

---

##### `shares`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseGrantConfig.property.shares"></a>

- *Type:* `string`[]

Grants privilege to these shares.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database_grant.html#shares DatabaseGrant#shares}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.DatabaseGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/database_grant.html#with_grant_option DatabaseGrant#with_grant_option}

---

### DataSnowflakeCurrentAccountConfig <a name="cdktf-snowflake.DataSnowflakeCurrentAccountConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeCurrentAccountConfig } from 'cdktf-snowflake'

const dataSnowflakeCurrentAccountConfig: DataSnowflakeCurrentAccountConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeCurrentAccountConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeCurrentAccountConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeCurrentAccountConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeCurrentAccountConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

### DataSnowflakeExternalFunctionsConfig <a name="cdktf-snowflake.DataSnowflakeExternalFunctionsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeExternalFunctionsConfig } from 'cdktf-snowflake'

const dataSnowflakeExternalFunctionsConfig: DataSnowflakeExternalFunctionsConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctionsConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctionsConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctionsConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctionsConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctionsConfig.property.database"></a>

- *Type:* `string`

The database from which to return the schemas from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/external_functions.html#database DataSnowflakeExternalFunctions#database}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctionsConfig.property.schema"></a>

- *Type:* `string`

The schema from which to return the external functions from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/external_functions.html#schema DataSnowflakeExternalFunctions#schema}

---

### DataSnowflakeExternalTablesConfig <a name="cdktf-snowflake.DataSnowflakeExternalTablesConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeExternalTablesConfig } from 'cdktf-snowflake'

const dataSnowflakeExternalTablesConfig: DataSnowflakeExternalTablesConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTablesConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTablesConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTablesConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTablesConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTablesConfig.property.database"></a>

- *Type:* `string`

The database from which to return the schemas from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/external_tables.html#database DataSnowflakeExternalTables#database}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTablesConfig.property.schema"></a>

- *Type:* `string`

The schema from which to return the external tables from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/external_tables.html#schema DataSnowflakeExternalTables#schema}

---

### DataSnowflakeFileFormatsConfig <a name="cdktf-snowflake.DataSnowflakeFileFormatsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeFileFormatsConfig } from 'cdktf-snowflake'

const dataSnowflakeFileFormatsConfig: DataSnowflakeFileFormatsConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormatsConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormatsConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormatsConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormatsConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormatsConfig.property.database"></a>

- *Type:* `string`

The database from which to return the schemas from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/file_formats.html#database DataSnowflakeFileFormats#database}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormatsConfig.property.schema"></a>

- *Type:* `string`

The schema from which to return the file formats from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/file_formats.html#schema DataSnowflakeFileFormats#schema}

---

### DataSnowflakeMaskingPoliciesConfig <a name="cdktf-snowflake.DataSnowflakeMaskingPoliciesConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeMaskingPoliciesConfig } from 'cdktf-snowflake'

const dataSnowflakeMaskingPoliciesConfig: DataSnowflakeMaskingPoliciesConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPoliciesConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPoliciesConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPoliciesConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPoliciesConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPoliciesConfig.property.database"></a>

- *Type:* `string`

The database from which to return the schemas from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/masking_policies.html#database DataSnowflakeMaskingPolicies#database}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPoliciesConfig.property.schema"></a>

- *Type:* `string`

The schema from which to return the maskingPolicies from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/masking_policies.html#schema DataSnowflakeMaskingPolicies#schema}

---

### DataSnowflakeMaterializedViewsConfig <a name="cdktf-snowflake.DataSnowflakeMaterializedViewsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeMaterializedViewsConfig } from 'cdktf-snowflake'

const dataSnowflakeMaterializedViewsConfig: DataSnowflakeMaterializedViewsConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViewsConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViewsConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViewsConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViewsConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViewsConfig.property.database"></a>

- *Type:* `string`

The database from which to return the schemas from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/materialized_views.html#database DataSnowflakeMaterializedViews#database}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViewsConfig.property.schema"></a>

- *Type:* `string`

The schema from which to return the views from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/materialized_views.html#schema DataSnowflakeMaterializedViews#schema}

---

### DataSnowflakePipesConfig <a name="cdktf-snowflake.DataSnowflakePipesConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakePipesConfig } from 'cdktf-snowflake'

const dataSnowflakePipesConfig: DataSnowflakePipesConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakePipesConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakePipesConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakePipesConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakePipesConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakePipesConfig.property.database"></a>

- *Type:* `string`

The database from which to return the schemas from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/pipes.html#database DataSnowflakePipes#database}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakePipesConfig.property.schema"></a>

- *Type:* `string`

The schema from which to return the pipes from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/pipes.html#schema DataSnowflakePipes#schema}

---

### DataSnowflakeResourceMonitorsConfig <a name="cdktf-snowflake.DataSnowflakeResourceMonitorsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeResourceMonitorsConfig } from 'cdktf-snowflake'

const dataSnowflakeResourceMonitorsConfig: DataSnowflakeResourceMonitorsConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeResourceMonitorsConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeResourceMonitorsConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeResourceMonitorsConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeResourceMonitorsConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

### DataSnowflakeRowAccessPoliciesConfig <a name="cdktf-snowflake.DataSnowflakeRowAccessPoliciesConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeRowAccessPoliciesConfig } from 'cdktf-snowflake'

const dataSnowflakeRowAccessPoliciesConfig: DataSnowflakeRowAccessPoliciesConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPoliciesConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPoliciesConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPoliciesConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPoliciesConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPoliciesConfig.property.database"></a>

- *Type:* `string`

The database from which to return the schemas from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/row_access_policies.html#database DataSnowflakeRowAccessPolicies#database}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPoliciesConfig.property.schema"></a>

- *Type:* `string`

The schema from which to return the row access policyfrom.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/row_access_policies.html#schema DataSnowflakeRowAccessPolicies#schema}

---

### DataSnowflakeSchemasConfig <a name="cdktf-snowflake.DataSnowflakeSchemasConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeSchemasConfig } from 'cdktf-snowflake'

const dataSnowflakeSchemasConfig: DataSnowflakeSchemasConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSchemasConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSchemasConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSchemasConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSchemasConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSchemasConfig.property.database"></a>

- *Type:* `string`

The database from which to return the schemas from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/schemas.html#database DataSnowflakeSchemas#database}

---

### DataSnowflakeSequencesConfig <a name="cdktf-snowflake.DataSnowflakeSequencesConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeSequencesConfig } from 'cdktf-snowflake'

const dataSnowflakeSequencesConfig: DataSnowflakeSequencesConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSequencesConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSequencesConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSequencesConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSequencesConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSequencesConfig.property.database"></a>

- *Type:* `string`

The database from which to return the schemas from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/sequences.html#database DataSnowflakeSequences#database}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSequencesConfig.property.schema"></a>

- *Type:* `string`

The schema from which to return the sequences from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/sequences.html#schema DataSnowflakeSequences#schema}

---

### DataSnowflakeStagesConfig <a name="cdktf-snowflake.DataSnowflakeStagesConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeStagesConfig } from 'cdktf-snowflake'

const dataSnowflakeStagesConfig: DataSnowflakeStagesConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeStagesConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeStagesConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeStagesConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeStagesConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStagesConfig.property.database"></a>

- *Type:* `string`

The database from which to return the schemas from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/stages.html#database DataSnowflakeStages#database}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStagesConfig.property.schema"></a>

- *Type:* `string`

The schema from which to return the stages from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/stages.html#schema DataSnowflakeStages#schema}

---

### DataSnowflakeStorageIntegrationsConfig <a name="cdktf-snowflake.DataSnowflakeStorageIntegrationsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeStorageIntegrationsConfig } from 'cdktf-snowflake'

const dataSnowflakeStorageIntegrationsConfig: DataSnowflakeStorageIntegrationsConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeStorageIntegrationsConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeStorageIntegrationsConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeStorageIntegrationsConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeStorageIntegrationsConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

### DataSnowflakeStreamsConfig <a name="cdktf-snowflake.DataSnowflakeStreamsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeStreamsConfig } from 'cdktf-snowflake'

const dataSnowflakeStreamsConfig: DataSnowflakeStreamsConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeStreamsConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeStreamsConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeStreamsConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeStreamsConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStreamsConfig.property.database"></a>

- *Type:* `string`

The database from which to return the streams from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/streams.html#database DataSnowflakeStreams#database}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStreamsConfig.property.schema"></a>

- *Type:* `string`

The schema from which to return the streams from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/streams.html#schema DataSnowflakeStreams#schema}

---

### DataSnowflakeSystemGenerateScimAccessTokenConfig <a name="cdktf-snowflake.DataSnowflakeSystemGenerateScimAccessTokenConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeSystemGenerateScimAccessTokenConfig } from 'cdktf-snowflake'

const dataSnowflakeSystemGenerateScimAccessTokenConfig: DataSnowflakeSystemGenerateScimAccessTokenConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `integrationName`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.integrationName"></a>

- *Type:* `string`

SCIM Integration Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/system_generate_scim_access_token.html#integration_name DataSnowflakeSystemGenerateScimAccessToken#integration_name}

---

### DataSnowflakeSystemGetAwsSnsIamPolicyConfig <a name="cdktf-snowflake.DataSnowflakeSystemGetAwsSnsIamPolicyConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeSystemGetAwsSnsIamPolicyConfig } from 'cdktf-snowflake'

const dataSnowflakeSystemGetAwsSnsIamPolicyConfig: DataSnowflakeSystemGetAwsSnsIamPolicyConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `awsSnsTopicArn`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.awsSnsTopicArn"></a>

- *Type:* `string`

Amazon Resource Name (ARN) of the SNS topic for your S3 bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_aws_sns_iam_policy.html#aws_sns_topic_arn DataSnowflakeSystemGetAwsSnsIamPolicy#aws_sns_topic_arn}

---

### DataSnowflakeSystemGetPrivatelinkConfigConfig <a name="cdktf-snowflake.DataSnowflakeSystemGetPrivatelinkConfigConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeSystemGetPrivatelinkConfigConfig } from 'cdktf-snowflake'

const dataSnowflakeSystemGetPrivatelinkConfigConfig: DataSnowflakeSystemGetPrivatelinkConfigConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

### DataSnowflakeSystemGetSnowflakePlatformInfoConfig <a name="cdktf-snowflake.DataSnowflakeSystemGetSnowflakePlatformInfoConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeSystemGetSnowflakePlatformInfoConfig } from 'cdktf-snowflake'

const dataSnowflakeSystemGetSnowflakePlatformInfoConfig: DataSnowflakeSystemGetSnowflakePlatformInfoConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

### DataSnowflakeTablesConfig <a name="cdktf-snowflake.DataSnowflakeTablesConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeTablesConfig } from 'cdktf-snowflake'

const dataSnowflakeTablesConfig: DataSnowflakeTablesConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeTablesConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeTablesConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeTablesConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeTablesConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTablesConfig.property.database"></a>

- *Type:* `string`

The database from which to return the schemas from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/tables.html#database DataSnowflakeTables#database}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTablesConfig.property.schema"></a>

- *Type:* `string`

The schema from which to return the tables from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/tables.html#schema DataSnowflakeTables#schema}

---

### DataSnowflakeTasksConfig <a name="cdktf-snowflake.DataSnowflakeTasksConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeTasksConfig } from 'cdktf-snowflake'

const dataSnowflakeTasksConfig: DataSnowflakeTasksConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeTasksConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeTasksConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeTasksConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeTasksConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTasksConfig.property.database"></a>

- *Type:* `string`

The database from which to return the schemas from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/tasks.html#database DataSnowflakeTasks#database}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTasksConfig.property.schema"></a>

- *Type:* `string`

The schema from which to return the tasks from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/tasks.html#schema DataSnowflakeTasks#schema}

---

### DataSnowflakeViewsConfig <a name="cdktf-snowflake.DataSnowflakeViewsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeViewsConfig } from 'cdktf-snowflake'

const dataSnowflakeViewsConfig: DataSnowflakeViewsConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeViewsConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeViewsConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeViewsConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeViewsConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeViewsConfig.property.database"></a>

- *Type:* `string`

The database from which to return the schemas from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/views.html#database DataSnowflakeViews#database}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeViewsConfig.property.schema"></a>

- *Type:* `string`

The schema from which to return the views from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/views.html#schema DataSnowflakeViews#schema}

---

### DataSnowflakeWarehousesConfig <a name="cdktf-snowflake.DataSnowflakeWarehousesConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataSnowflakeWarehousesConfig } from 'cdktf-snowflake'

const dataSnowflakeWarehousesConfig: DataSnowflakeWarehousesConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeWarehousesConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeWarehousesConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeWarehousesConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.DataSnowflakeWarehousesConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

### ExternalFunctionArg <a name="cdktf-snowflake.ExternalFunctionArg"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ExternalFunctionArg } from 'cdktf-snowflake'

const externalFunctionArg: ExternalFunctionArg = { ... }
```

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunctionArg.property.name"></a>

- *Type:* `string`

Argument name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html#name ExternalFunction#name}

---

##### `type`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunctionArg.property.type"></a>

- *Type:* `string`

Argument type, e.g. VARCHAR.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html#type ExternalFunction#type}

---

### ExternalFunctionConfig <a name="cdktf-snowflake.ExternalFunctionConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ExternalFunctionConfig } from 'cdktf-snowflake'

const externalFunctionConfig: ExternalFunctionConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunctionConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunctionConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunctionConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunctionConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `apiIntegration`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunctionConfig.property.apiIntegration"></a>

- *Type:* `string`

The name of the API integration object that should be used to authenticate the call to the proxy service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html#api_integration ExternalFunction#api_integration}

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunctionConfig.property.database"></a>

- *Type:* `string`

The database in which to create the external function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html#database ExternalFunction#database}

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunctionConfig.property.name"></a>

- *Type:* `string`

Specifies the identifier for the external function.

The identifier can contain the schema name and database name, as well as the function name. The function's signature (name and argument data types) must be unique within the schema.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html#name ExternalFunction#name}

---

##### `returnBehavior`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunctionConfig.property.returnBehavior"></a>

- *Type:* `string`

Specifies the behavior of the function when returning results.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html#return_behavior ExternalFunction#return_behavior}

---

##### `returnType`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunctionConfig.property.returnType"></a>

- *Type:* `string`

Specifies the data type returned by the external function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html#return_type ExternalFunction#return_type}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunctionConfig.property.schema"></a>

- *Type:* `string`

The schema in which to create the external function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html#schema ExternalFunction#schema}

---

##### `urlOfProxyAndResource`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunctionConfig.property.urlOfProxyAndResource"></a>

- *Type:* `string`

This is the invocation URL of the proxy service and resource through which Snowflake calls the remote service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html#url_of_proxy_and_resource ExternalFunction#url_of_proxy_and_resource}

---

##### `arg`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunctionConfig.property.arg"></a>

- *Type:* [`cdktf-snowflake.ExternalFunctionArg`](#cdktf-snowflake.ExternalFunctionArg)[]

arg block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html#arg ExternalFunction#arg}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunctionConfig.property.comment"></a>

- *Type:* `string`

A description of the external function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html#comment ExternalFunction#comment}

---

##### `compression`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunctionConfig.property.compression"></a>

- *Type:* `string`

If specified, the JSON payload is compressed when sent from Snowflake to the proxy service, and when sent back from the proxy service to Snowflake.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html#compression ExternalFunction#compression}

---

##### `contextHeaders`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunctionConfig.property.contextHeaders"></a>

- *Type:* `string`[]

Binds Snowflake context function results to HTTP headers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html#context_headers ExternalFunction#context_headers}

---

##### `header`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunctionConfig.property.header"></a>

- *Type:* [`cdktf-snowflake.ExternalFunctionHeader`](#cdktf-snowflake.ExternalFunctionHeader)[]

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html#header ExternalFunction#header}

---

##### `maxBatchRows`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunctionConfig.property.maxBatchRows"></a>

- *Type:* `number`

This specifies the maximum number of rows in each batch sent to the proxy service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html#max_batch_rows ExternalFunction#max_batch_rows}

---

##### `nullInputBehavior`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunctionConfig.property.nullInputBehavior"></a>

- *Type:* `string`

Specifies the behavior of the external function when called with null inputs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html#null_input_behavior ExternalFunction#null_input_behavior}

---

##### `returnNullAllowed`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalFunctionConfig.property.returnNullAllowed"></a>

- *Type:* `boolean`

Indicates whether the function can return NULL values or must return only NON-NULL values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html#return_null_allowed ExternalFunction#return_null_allowed}

---

### ExternalFunctionHeader <a name="cdktf-snowflake.ExternalFunctionHeader"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ExternalFunctionHeader } from 'cdktf-snowflake'

const externalFunctionHeader: ExternalFunctionHeader = { ... }
```

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunctionHeader.property.name"></a>

- *Type:* `string`

Header name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html#name ExternalFunction#name}

---

##### `value`<sup>Required</sup> <a name="cdktf-snowflake.ExternalFunctionHeader.property.value"></a>

- *Type:* `string`

Header value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function.html#value ExternalFunction#value}

---

### ExternalTableColumn <a name="cdktf-snowflake.ExternalTableColumn"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ExternalTableColumn } from 'cdktf-snowflake'

const externalTableColumn: ExternalTableColumn = { ... }
```

##### `as`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableColumn.property.as"></a>

- *Type:* `string`

String that specifies the expression for the column. When queried, the column returns results derived from this expression.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#as ExternalTable#as}

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableColumn.property.name"></a>

- *Type:* `string`

Column name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#name ExternalTable#name}

---

##### `type`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableColumn.property.type"></a>

- *Type:* `string`

Column type, e.g. VARIANT.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#type ExternalTable#type}

---

### ExternalTableConfig <a name="cdktf-snowflake.ExternalTableConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ExternalTableConfig } from 'cdktf-snowflake'

const externalTableConfig: ExternalTableConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `column`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableConfig.property.column"></a>

- *Type:* [`cdktf-snowflake.ExternalTableColumn`](#cdktf-snowflake.ExternalTableColumn)[]

column block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#column ExternalTable#column}

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableConfig.property.database"></a>

- *Type:* `string`

The database in which to create the external table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#database ExternalTable#database}

---

##### `fileFormat`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableConfig.property.fileFormat"></a>

- *Type:* `string`

Specifies the file format for the external table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#file_format ExternalTable#file_format}

---

##### `location`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableConfig.property.location"></a>

- *Type:* `string`

Specifies a location for the external table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#location ExternalTable#location}

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableConfig.property.name"></a>

- *Type:* `string`

Specifies the identifier for the external table;

must be unique for the database and schema in which the externalTable is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#name ExternalTable#name}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableConfig.property.schema"></a>

- *Type:* `string`

The schema in which to create the external table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#schema ExternalTable#schema}

---

##### `autoRefresh`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableConfig.property.autoRefresh"></a>

- *Type:* `boolean`

Specifies whether to automatically refresh the external table metadata once, immediately after the external table is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#auto_refresh ExternalTable#auto_refresh}

---

##### `awsSnsTopic`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableConfig.property.awsSnsTopic"></a>

- *Type:* `string`

Specifies the aws sns topic for the external table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#aws_sns_topic ExternalTable#aws_sns_topic}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableConfig.property.comment"></a>

- *Type:* `string`

Specifies a comment for the external table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#comment ExternalTable#comment}

---

##### `copyGrants`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableConfig.property.copyGrants"></a>

- *Type:* `boolean`

Specifies to retain the access permissions from the original table when an external table is recreated using the CREATE OR REPLACE TABLE variant.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#copy_grants ExternalTable#copy_grants}

---

##### `partitionBy`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableConfig.property.partitionBy"></a>

- *Type:* `string`[]

Specifies any partition columns to evaluate for the external table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#partition_by ExternalTable#partition_by}

---

##### `refreshOnCreate`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableConfig.property.refreshOnCreate"></a>

- *Type:* `boolean`

Specifies weather to refresh when an external table is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table.html#refresh_on_create ExternalTable#refresh_on_create}

---

### ExternalTableGrantConfig <a name="cdktf-snowflake.ExternalTableGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ExternalTableGrantConfig } from 'cdktf-snowflake'

const externalTableGrantConfig: ExternalTableGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableGrantConfig.property.databaseName"></a>

- *Type:* `string`

The name of the database containing the current or future external tables on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table_grant.html#database_name ExternalTableGrant#database_name}

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.ExternalTableGrantConfig.property.schemaName"></a>

- *Type:* `string`

The name of the schema containing the current or future external tables on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table_grant.html#schema_name ExternalTableGrant#schema_name}

---

##### `externalTableName`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableGrantConfig.property.externalTableName"></a>

- *Type:* `string`

The name of the external table on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table_grant.html#external_table_name ExternalTableGrant#external_table_name}

---

##### `onFuture`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableGrantConfig.property.onFuture"></a>

- *Type:* `boolean`

When this is set to true and a schema_name is provided, apply this grant on all future external tables in the given schema.

When this is true and no schema_name is provided apply this grant on all future external tables in the given database. The external_table_name and shares fields must be unset in order to use on_future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table_grant.html#on_future ExternalTableGrant#on_future}

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the current or future external table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table_grant.html#privilege ExternalTableGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table_grant.html#roles ExternalTableGrant#roles}

---

##### `shares`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableGrantConfig.property.shares"></a>

- *Type:* `string`[]

Grants privilege to these shares (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table_grant.html#shares ExternalTableGrant#shares}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.ExternalTableGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table_grant.html#with_grant_option ExternalTableGrant#with_grant_option}

---

### FileFormatConfig <a name="cdktf-snowflake.FileFormatConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { FileFormatConfig } from 'cdktf-snowflake'

const fileFormatConfig: FileFormatConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.FileFormatConfig.property.database"></a>

- *Type:* `string`

The database in which to create the file format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#database FileFormat#database}

---

##### `formatType`<sup>Required</sup> <a name="cdktf-snowflake.FileFormatConfig.property.formatType"></a>

- *Type:* `string`

Specifies the format of the input files (for data loading) or output files (for data unloading).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#format_type FileFormat#format_type}

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.FileFormatConfig.property.name"></a>

- *Type:* `string`

Specifies the identifier for the file format;

must be unique for the database and schema in which the file format is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#name FileFormat#name}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.FileFormatConfig.property.schema"></a>

- *Type:* `string`

The schema in which to create the file format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#schema FileFormat#schema}

---

##### `allowDuplicate`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.allowDuplicate"></a>

- *Type:* `boolean`

Boolean that specifies to allow duplicate object field names (only the last one will be preserved).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#allow_duplicate FileFormat#allow_duplicate}

---

##### `binaryAsText`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.binaryAsText"></a>

- *Type:* `boolean`

Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#binary_as_text FileFormat#binary_as_text}

---

##### `binaryFormat`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.binaryFormat"></a>

- *Type:* `string`

Defines the encoding format for binary input or output.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#binary_format FileFormat#binary_format}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.comment"></a>

- *Type:* `string`

Specifies a comment for the file format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#comment FileFormat#comment}

---

##### `compression`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.compression"></a>

- *Type:* `string`

Specifies the current compression algorithm for the data file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#compression FileFormat#compression}

---

##### `dateFormat`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.dateFormat"></a>

- *Type:* `string`

Defines the format of date values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#date_format FileFormat#date_format}

---

##### `disableAutoConvert`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.disableAutoConvert"></a>

- *Type:* `boolean`

Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#disable_auto_convert FileFormat#disable_auto_convert}

---

##### `disableSnowflakeData`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.disableSnowflakeData"></a>

- *Type:* `boolean`

Boolean that specifies whether the XML parser disables recognition of Snowflake semi-structured data tags.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#disable_snowflake_data FileFormat#disable_snowflake_data}

---

##### `emptyFieldAsNull`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.emptyFieldAsNull"></a>

- *Type:* `boolean`

Specifies whether to insert SQL NULL for empty fields in an input file, which are represented by two successive delimiters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#empty_field_as_null FileFormat#empty_field_as_null}

---

##### `enableOctal`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.enableOctal"></a>

- *Type:* `boolean`

Boolean that enables parsing of octal numbers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#enable_octal FileFormat#enable_octal}

---

##### `encoding`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.encoding"></a>

- *Type:* `string`

String (constant) that specifies the character set of the source data when loading data into a table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#encoding FileFormat#encoding}

---

##### `errorOnColumnCountMismatch`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.errorOnColumnCountMismatch"></a>

- *Type:* `boolean`

Boolean that specifies whether to generate a parsing error if the number of delimited columns (i.e. fields) in an input file does not match the number of columns in the corresponding table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#error_on_column_count_mismatch FileFormat#error_on_column_count_mismatch}

---

##### `escape`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.escape"></a>

- *Type:* `string`

Single character string used as the escape character for field values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#escape FileFormat#escape}

---

##### `escapeUnenclosedField`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.escapeUnenclosedField"></a>

- *Type:* `string`

Single character string used as the escape character for unenclosed field values only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#escape_unenclosed_field FileFormat#escape_unenclosed_field}

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.fieldDelimiter"></a>

- *Type:* `string`

Specifies one or more singlebyte or multibyte characters that separate fields in an input file (data loading) or unloaded file (data unloading).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#field_delimiter FileFormat#field_delimiter}

---

##### `fieldOptionallyEnclosedBy`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.fieldOptionallyEnclosedBy"></a>

- *Type:* `string`

Character used to enclose strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#field_optionally_enclosed_by FileFormat#field_optionally_enclosed_by}

---

##### `fileExtension`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.fileExtension"></a>

- *Type:* `string`

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#file_extension FileFormat#file_extension}

---

##### `ignoreUtf8Errors`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.ignoreUtf8Errors"></a>

- *Type:* `boolean`

Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#ignore_utf8_errors FileFormat#ignore_utf8_errors}

---

##### `nullIf`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.nullIf"></a>

- *Type:* `string`[]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#null_if FileFormat#null_if}

---

##### `preserveSpace`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.preserveSpace"></a>

- *Type:* `boolean`

Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#preserve_space FileFormat#preserve_space}

---

##### `recordDelimiter`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.recordDelimiter"></a>

- *Type:* `string`

Specifies one or more singlebyte or multibyte characters that separate records in an input file (data loading) or unloaded file (data unloading).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#record_delimiter FileFormat#record_delimiter}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.replaceInvalidCharacters"></a>

- *Type:* `boolean`

Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#replace_invalid_characters FileFormat#replace_invalid_characters}

---

##### `skipBlankLines`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.skipBlankLines"></a>

- *Type:* `boolean`

Boolean that specifies to skip any blank lines encountered in the data files.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#skip_blank_lines FileFormat#skip_blank_lines}

---

##### `skipByteOrderMark`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.skipByteOrderMark"></a>

- *Type:* `boolean`

Boolean that specifies whether to skip the BOM (byte order mark), if present in a data file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#skip_byte_order_mark FileFormat#skip_byte_order_mark}

---

##### `skipHeader`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.skipHeader"></a>

- *Type:* `number`

Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#skip_header FileFormat#skip_header}

---

##### `stripNullValues`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.stripNullValues"></a>

- *Type:* `boolean`

Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#strip_null_values FileFormat#strip_null_values}

---

##### `stripOuterArray`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.stripOuterArray"></a>

- *Type:* `boolean`

Boolean that instructs the JSON parser to remove outer brackets.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#strip_outer_array FileFormat#strip_outer_array}

---

##### `stripOuterElement`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.stripOuterElement"></a>

- *Type:* `boolean`

Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#strip_outer_element FileFormat#strip_outer_element}

---

##### `timeFormat`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.timeFormat"></a>

- *Type:* `string`

Defines the format of time values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#time_format FileFormat#time_format}

---

##### `timestampFormat`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.timestampFormat"></a>

- *Type:* `string`

Defines the format of timestamp values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#timestamp_format FileFormat#timestamp_format}

---

##### `trimSpace`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.trimSpace"></a>

- *Type:* `boolean`

Boolean that specifies whether to remove white space from fields.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#trim_space FileFormat#trim_space}

---

##### `validateUtf8`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatConfig.property.validateUtf8"></a>

- *Type:* `boolean`

Boolean that specifies whether to validate UTF-8 character encoding in string column data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#validate_utf8 FileFormat#validate_utf8}

---

### FileFormatGrantConfig <a name="cdktf-snowflake.FileFormatGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { FileFormatGrantConfig } from 'cdktf-snowflake'

const fileFormatGrantConfig: FileFormatGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.FileFormatGrantConfig.property.databaseName"></a>

- *Type:* `string`

The name of the database containing the current or future file formats on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format_grant.html#database_name FileFormatGrant#database_name}

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.FileFormatGrantConfig.property.schemaName"></a>

- *Type:* `string`

The name of the schema containing the current or future file formats on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format_grant.html#schema_name FileFormatGrant#schema_name}

---

##### `fileFormatName`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatGrantConfig.property.fileFormatName"></a>

- *Type:* `string`

The name of the file format on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format_grant.html#file_format_name FileFormatGrant#file_format_name}

---

##### `onFuture`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatGrantConfig.property.onFuture"></a>

- *Type:* `boolean`

When this is set to true and a schema_name is provided, apply this grant on all future file formats in the given schema.

When this is true and no schema_name is provided apply this grant on all future file formats in the given database. The file_format_name field must be unset in order to use on_future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format_grant.html#on_future FileFormatGrant#on_future}

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the current or future file format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format_grant.html#privilege FileFormatGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format_grant.html#roles FileFormatGrant#roles}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.FileFormatGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format_grant.html#with_grant_option FileFormatGrant#with_grant_option}

---

### FunctionGrantArguments <a name="cdktf-snowflake.FunctionGrantArguments"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { FunctionGrantArguments } from 'cdktf-snowflake'

const functionGrantArguments: FunctionGrantArguments = { ... }
```

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrantArguments.property.name"></a>

- *Type:* `string`

The argument name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant.html#name FunctionGrant#name}

---

##### `type`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrantArguments.property.type"></a>

- *Type:* `string`

The argument type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant.html#type FunctionGrant#type}

---

### FunctionGrantConfig <a name="cdktf-snowflake.FunctionGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { FunctionGrantConfig } from 'cdktf-snowflake'

const functionGrantConfig: FunctionGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrantConfig.property.databaseName"></a>

- *Type:* `string`

The name of the database containing the current or future functions on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant.html#database_name FunctionGrant#database_name}

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.FunctionGrantConfig.property.schemaName"></a>

- *Type:* `string`

The name of the schema containing the current or future functions on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant.html#schema_name FunctionGrant#schema_name}

---

##### `arguments`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrantConfig.property.arguments"></a>

- *Type:* [`cdktf-snowflake.FunctionGrantArguments`](#cdktf-snowflake.FunctionGrantArguments)[]

arguments block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant.html#arguments FunctionGrant#arguments}

---

##### `functionName`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrantConfig.property.functionName"></a>

- *Type:* `string`

The name of the function on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant.html#function_name FunctionGrant#function_name}

---

##### `onFuture`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrantConfig.property.onFuture"></a>

- *Type:* `boolean`

When this is set to true and a schema_name is provided, apply this grant on all future functions in the given schema.

When this is true and no schema_name is provided apply this grant on all future functions in the given database. The function_name, arguments, return_type, and shares fields must be unset in order to use on_future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant.html#on_future FunctionGrant#on_future}

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the current or future function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant.html#privilege FunctionGrant#privilege}

---

##### `returnType`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrantConfig.property.returnType"></a>

- *Type:* `string`

The return type of the function (must be present if function_name is present).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant.html#return_type FunctionGrant#return_type}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant.html#roles FunctionGrant#roles}

---

##### `shares`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrantConfig.property.shares"></a>

- *Type:* `string`[]

Grants privilege to these shares (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant.html#shares FunctionGrant#shares}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.FunctionGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant.html#with_grant_option FunctionGrant#with_grant_option}

---

### IntegrationGrantConfig <a name="cdktf-snowflake.IntegrationGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { IntegrationGrantConfig } from 'cdktf-snowflake'

const integrationGrantConfig: IntegrationGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.IntegrationGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.IntegrationGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.IntegrationGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.IntegrationGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `integrationName`<sup>Required</sup> <a name="cdktf-snowflake.IntegrationGrantConfig.property.integrationName"></a>

- *Type:* `string`

Identifier for the integration; must be unique for your account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/integration_grant.html#integration_name IntegrationGrant#integration_name}

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.IntegrationGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the integration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/integration_grant.html#privilege IntegrationGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.IntegrationGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/integration_grant.html#roles IntegrationGrant#roles}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.IntegrationGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/integration_grant.html#with_grant_option IntegrationGrant#with_grant_option}

---

### ManagedAccountConfig <a name="cdktf-snowflake.ManagedAccountConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ManagedAccountConfig } from 'cdktf-snowflake'

const managedAccountConfig: ManagedAccountConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.ManagedAccountConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.ManagedAccountConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.ManagedAccountConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.ManagedAccountConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `adminName`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccountConfig.property.adminName"></a>

- *Type:* `string`

Identifier, as well as login name, for the initial user in the managed account.

This user serves as the account administrator for the account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/managed_account.html#admin_name ManagedAccount#admin_name}

---

##### `adminPassword`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccountConfig.property.adminPassword"></a>

- *Type:* `string`

Password for the initial user in the managed account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/managed_account.html#admin_password ManagedAccount#admin_password}

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.ManagedAccountConfig.property.name"></a>

- *Type:* `string`

Identifier for the managed account; must be unique for your account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/managed_account.html#name ManagedAccount#name}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.ManagedAccountConfig.property.comment"></a>

- *Type:* `string`

Specifies a comment for the managed account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/managed_account.html#comment ManagedAccount#comment}

---

##### `type`<sup>Optional</sup> <a name="cdktf-snowflake.ManagedAccountConfig.property.type"></a>

- *Type:* `string`

Specifies the type of managed account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/managed_account.html#type ManagedAccount#type}

---

### MaskingPolicyConfig <a name="cdktf-snowflake.MaskingPolicyConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { MaskingPolicyConfig } from 'cdktf-snowflake'

const maskingPolicyConfig: MaskingPolicyConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.MaskingPolicyConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.MaskingPolicyConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.MaskingPolicyConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.MaskingPolicyConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyConfig.property.database"></a>

- *Type:* `string`

The database in which to create the masking policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy.html#database MaskingPolicy#database}

---

##### `maskingExpression`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyConfig.property.maskingExpression"></a>

- *Type:* `string`

Specifies the SQL expression that transforms the data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy.html#masking_expression MaskingPolicy#masking_expression}

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyConfig.property.name"></a>

- *Type:* `string`

Specifies the identifier for the masking policy;

must be unique for the database and schema in which the masking policy is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy.html#name MaskingPolicy#name}

---

##### `returnDataType`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyConfig.property.returnDataType"></a>

- *Type:* `string`

Specifies the data type to return.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy.html#return_data_type MaskingPolicy#return_data_type}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyConfig.property.schema"></a>

- *Type:* `string`

The schema in which to create the masking policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy.html#schema MaskingPolicy#schema}

---

##### `valueDataType`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyConfig.property.valueDataType"></a>

- *Type:* `string`

Specifies the data type to mask.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy.html#value_data_type MaskingPolicy#value_data_type}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.MaskingPolicyConfig.property.comment"></a>

- *Type:* `string`

Specifies a comment for the masking policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy.html#comment MaskingPolicy#comment}

---

### MaskingPolicyGrantConfig <a name="cdktf-snowflake.MaskingPolicyGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { MaskingPolicyGrantConfig } from 'cdktf-snowflake'

const maskingPolicyGrantConfig: MaskingPolicyGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.MaskingPolicyGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.MaskingPolicyGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.MaskingPolicyGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.MaskingPolicyGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyGrantConfig.property.databaseName"></a>

- *Type:* `string`

The name of the database containing the masking policy on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy_grant.html#database_name MaskingPolicyGrant#database_name}

---

##### `maskingPolicyName`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyGrantConfig.property.maskingPolicyName"></a>

- *Type:* `string`

The name of the masking policy on which to grant privileges immediately.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy_grant.html#masking_policy_name MaskingPolicyGrant#masking_policy_name}

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.MaskingPolicyGrantConfig.property.schemaName"></a>

- *Type:* `string`

The name of the schema containing the masking policy on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy_grant.html#schema_name MaskingPolicyGrant#schema_name}

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.MaskingPolicyGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the masking policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy_grant.html#privilege MaskingPolicyGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.MaskingPolicyGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy_grant.html#roles MaskingPolicyGrant#roles}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.MaskingPolicyGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/masking_policy_grant.html#with_grant_option MaskingPolicyGrant#with_grant_option}

---

### MaterializedViewConfig <a name="cdktf-snowflake.MaterializedViewConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { MaterializedViewConfig } from 'cdktf-snowflake'

const materializedViewConfig: MaterializedViewConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewConfig.property.database"></a>

- *Type:* `string`

The database in which to create the view. Don't use the | character.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html#database MaterializedView#database}

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewConfig.property.name"></a>

- *Type:* `string`

Specifies the identifier for the view; must be unique for the schema in which the view is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html#name MaterializedView#name}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewConfig.property.schema"></a>

- *Type:* `string`

The schema in which to create the view. Don't use the | character.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html#schema MaterializedView#schema}

---

##### `statement`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewConfig.property.statement"></a>

- *Type:* `string`

Specifies the query used to create the view.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html#statement MaterializedView#statement}

---

##### `warehouse`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewConfig.property.warehouse"></a>

- *Type:* `string`

The warehouse name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html#warehouse MaterializedView#warehouse}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewConfig.property.comment"></a>

- *Type:* `string`

Specifies a comment for the view.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html#comment MaterializedView#comment}

---

##### `isSecure`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewConfig.property.isSecure"></a>

- *Type:* `boolean`

Specifies that the view is secure.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html#is_secure MaterializedView#is_secure}

---

##### `orReplace`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewConfig.property.orReplace"></a>

- *Type:* `boolean`

Overwrites the View if it exists.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view.html#or_replace MaterializedView#or_replace}

---

### MaterializedViewGrantConfig <a name="cdktf-snowflake.MaterializedViewGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { MaterializedViewGrantConfig } from 'cdktf-snowflake'

const materializedViewGrantConfig: MaterializedViewGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewGrantConfig.property.databaseName"></a>

- *Type:* `string`

The name of the database containing the current or future materialized views on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view_grant.html#database_name MaterializedViewGrant#database_name}

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.MaterializedViewGrantConfig.property.schemaName"></a>

- *Type:* `string`

The name of the schema containing the current or future materialized views on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view_grant.html#schema_name MaterializedViewGrant#schema_name}

---

##### `materializedViewName`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewGrantConfig.property.materializedViewName"></a>

- *Type:* `string`

The name of the materialized view on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view_grant.html#materialized_view_name MaterializedViewGrant#materialized_view_name}

---

##### `onFuture`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewGrantConfig.property.onFuture"></a>

- *Type:* `boolean`

When this is set to true and a schema_name is provided, apply this grant on all future materialized views in the given schema.

When this is true and no schema_name is provided apply this grant on all future materialized views in the given database. The materialized_view_name and shares fields must be unset in order to use on_future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view_grant.html#on_future MaterializedViewGrant#on_future}

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the current or future materialized view view.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view_grant.html#privilege MaterializedViewGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view_grant.html#roles MaterializedViewGrant#roles}

---

##### `shares`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewGrantConfig.property.shares"></a>

- *Type:* `string`[]

Grants privilege to these shares (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view_grant.html#shares MaterializedViewGrant#shares}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.MaterializedViewGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/materialized_view_grant.html#with_grant_option MaterializedViewGrant#with_grant_option}

---

### NetworkPolicyAttachmentConfig <a name="cdktf-snowflake.NetworkPolicyAttachmentConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { NetworkPolicyAttachmentConfig } from 'cdktf-snowflake'

const networkPolicyAttachmentConfig: NetworkPolicyAttachmentConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.NetworkPolicyAttachmentConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.NetworkPolicyAttachmentConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.NetworkPolicyAttachmentConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.NetworkPolicyAttachmentConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `networkPolicyName`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicyAttachmentConfig.property.networkPolicyName"></a>

- *Type:* `string`

Specifies the identifier for the network policy;

must be unique for the account in which the network policy is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/network_policy_attachment.html#network_policy_name NetworkPolicyAttachment#network_policy_name}

---

##### `setForAccount`<sup>Optional</sup> <a name="cdktf-snowflake.NetworkPolicyAttachmentConfig.property.setForAccount"></a>

- *Type:* `boolean`

Specifies whether the network policy should be applied globally to your Snowflake account<br><br>**Note:** The Snowflake user running `terraform apply` must be on an IP address allowed by the network policy to set that policy globally on the Snowflake account.<br><br>Additionally, a Snowflake account can only have one network policy set globally at any given time. This resource does not enforce one-policy-per-account, it is the user's responsibility to enforce this. If multiple network policy resources have `set_for_account: true`, the final policy set on the account will be non-deterministic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/network_policy_attachment.html#set_for_account NetworkPolicyAttachment#set_for_account}

---

##### `users`<sup>Optional</sup> <a name="cdktf-snowflake.NetworkPolicyAttachmentConfig.property.users"></a>

- *Type:* `string`[]

Specifies which users the network policy should be attached to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/network_policy_attachment.html#users NetworkPolicyAttachment#users}

---

### NetworkPolicyConfig <a name="cdktf-snowflake.NetworkPolicyConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { NetworkPolicyConfig } from 'cdktf-snowflake'

const networkPolicyConfig: NetworkPolicyConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.NetworkPolicyConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.NetworkPolicyConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.NetworkPolicyConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.NetworkPolicyConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `allowedIpList`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicyConfig.property.allowedIpList"></a>

- *Type:* `string`[]

Specifies one or more IPv4 addresses (CIDR notation) that are allowed access to your Snowflake account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/network_policy.html#allowed_ip_list NetworkPolicy#allowed_ip_list}

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.NetworkPolicyConfig.property.name"></a>

- *Type:* `string`

Specifies the identifier for the network policy;

must be unique for the account in which the network policy is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/network_policy.html#name NetworkPolicy#name}

---

##### `blockedIpList`<sup>Optional</sup> <a name="cdktf-snowflake.NetworkPolicyConfig.property.blockedIpList"></a>

- *Type:* `string`[]

Specifies one or more IPv4 addresses (CIDR notation) that are denied access to your Snowflake account<br><br>**Do not** add `0.0.0.0/0` to `blocked_ip_list`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/network_policy.html#blocked_ip_list NetworkPolicy#blocked_ip_list}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.NetworkPolicyConfig.property.comment"></a>

- *Type:* `string`

Specifies a comment for the network policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/network_policy.html#comment NetworkPolicy#comment}

---

### NotificationIntegrationConfig <a name="cdktf-snowflake.NotificationIntegrationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { NotificationIntegrationConfig } from 'cdktf-snowflake'

const notificationIntegrationConfig: NotificationIntegrationConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegrationConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegrationConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegrationConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegrationConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.NotificationIntegrationConfig.property.name"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#name NotificationIntegration#name}.

---

##### `awsSqsArn`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegrationConfig.property.awsSqsArn"></a>

- *Type:* `string`

AWS SQS queue ARN for notification integration to connect to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#aws_sqs_arn NotificationIntegration#aws_sqs_arn}

---

##### `awsSqsRoleArn`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegrationConfig.property.awsSqsRoleArn"></a>

- *Type:* `string`

AWS IAM role ARN for notification integration to assume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#aws_sqs_role_arn NotificationIntegration#aws_sqs_role_arn}

---

##### `azureStorageQueuePrimaryUri`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegrationConfig.property.azureStorageQueuePrimaryUri"></a>

- *Type:* `string`

The queue ID for the Azure Queue Storage queue created for Event Grid notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#azure_storage_queue_primary_uri NotificationIntegration#azure_storage_queue_primary_uri}

---

##### `azureTenantId`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegrationConfig.property.azureTenantId"></a>

- *Type:* `string`

The ID of the Azure Active Directory tenant used for identity management.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#azure_tenant_id NotificationIntegration#azure_tenant_id}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegrationConfig.property.comment"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#comment NotificationIntegration#comment}.

---

##### `direction`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegrationConfig.property.direction"></a>

- *Type:* `string`

Direction of the cloud messaging with respect to Snowflake (required only for error notifications).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#direction NotificationIntegration#direction}

---

##### `enabled`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegrationConfig.property.enabled"></a>

- *Type:* `boolean`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#enabled NotificationIntegration#enabled}.

---

##### `gcpPubsubSubscriptionName`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegrationConfig.property.gcpPubsubSubscriptionName"></a>

- *Type:* `string`

The subscription id that Snowflake will listen to when using the GCP_PUBSUB provider.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#gcp_pubsub_subscription_name NotificationIntegration#gcp_pubsub_subscription_name}

---

##### `notificationProvider`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegrationConfig.property.notificationProvider"></a>

- *Type:* `string`

The third-party cloud message queuing service (e.g. AZURE_STORAGE_QUEUE, AWS_SQS).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#notification_provider NotificationIntegration#notification_provider}

---

##### `type`<sup>Optional</sup> <a name="cdktf-snowflake.NotificationIntegrationConfig.property.type"></a>

- *Type:* `string`

A type of integration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration.html#type NotificationIntegration#type}

---

### PipeConfig <a name="cdktf-snowflake.PipeConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { PipeConfig } from 'cdktf-snowflake'

const pipeConfig: PipeConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.PipeConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.PipeConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.PipeConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.PipeConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `copyStatement`<sup>Required</sup> <a name="cdktf-snowflake.PipeConfig.property.copyStatement"></a>

- *Type:* `string`

Specifies the copy statement for the pipe.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe.html#copy_statement Pipe#copy_statement}

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.PipeConfig.property.database"></a>

- *Type:* `string`

The database in which to create the pipe.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe.html#database Pipe#database}

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.PipeConfig.property.name"></a>

- *Type:* `string`

Specifies the identifier for the pipe;

must be unique for the database and schema in which the pipe is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe.html#name Pipe#name}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.PipeConfig.property.schema"></a>

- *Type:* `string`

The schema in which to create the pipe.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe.html#schema Pipe#schema}

---

##### `autoIngest`<sup>Optional</sup> <a name="cdktf-snowflake.PipeConfig.property.autoIngest"></a>

- *Type:* `boolean`

Specifies a auto_ingest param for the pipe.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe.html#auto_ingest Pipe#auto_ingest}

---

##### `awsSnsTopicArn`<sup>Optional</sup> <a name="cdktf-snowflake.PipeConfig.property.awsSnsTopicArn"></a>

- *Type:* `string`

Specifies the Amazon Resource Name (ARN) for the SNS topic for your S3 bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe.html#aws_sns_topic_arn Pipe#aws_sns_topic_arn}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.PipeConfig.property.comment"></a>

- *Type:* `string`

Specifies a comment for the pipe.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe.html#comment Pipe#comment}

---

##### `errorIntegration`<sup>Optional</sup> <a name="cdktf-snowflake.PipeConfig.property.errorIntegration"></a>

- *Type:* `string`

Specifies the name of the notification integration used for error notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe.html#error_integration Pipe#error_integration}

---

##### `integration`<sup>Optional</sup> <a name="cdktf-snowflake.PipeConfig.property.integration"></a>

- *Type:* `string`

Specifies an integration for the pipe.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe.html#integration Pipe#integration}

---

### PipeGrantConfig <a name="cdktf-snowflake.PipeGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { PipeGrantConfig } from 'cdktf-snowflake'

const pipeGrantConfig: PipeGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.PipeGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.PipeGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.PipeGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.PipeGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.PipeGrantConfig.property.databaseName"></a>

- *Type:* `string`

The name of the database containing the current or future pipes on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe_grant.html#database_name PipeGrant#database_name}

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.PipeGrantConfig.property.schemaName"></a>

- *Type:* `string`

The name of the schema containing the current or future pipes on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe_grant.html#schema_name PipeGrant#schema_name}

---

##### `onFuture`<sup>Optional</sup> <a name="cdktf-snowflake.PipeGrantConfig.property.onFuture"></a>

- *Type:* `boolean`

When this is set to true and a schema_name is provided, apply this grant on all future pipes in the given schema.

When this is true and no schema_name is provided apply this grant on all future pipes in the given database. The pipe_name field must be unset in order to use on_future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe_grant.html#on_future PipeGrant#on_future}

---

##### `pipeName`<sup>Optional</sup> <a name="cdktf-snowflake.PipeGrantConfig.property.pipeName"></a>

- *Type:* `string`

The name of the pipe on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe_grant.html#pipe_name PipeGrant#pipe_name}

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.PipeGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the current or future pipe.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe_grant.html#privilege PipeGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.PipeGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe_grant.html#roles PipeGrant#roles}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.PipeGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe_grant.html#with_grant_option PipeGrant#with_grant_option}

---

### ProcedureGrantArguments <a name="cdktf-snowflake.ProcedureGrantArguments"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ProcedureGrantArguments } from 'cdktf-snowflake'

const procedureGrantArguments: ProcedureGrantArguments = { ... }
```

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrantArguments.property.name"></a>

- *Type:* `string`

The argument name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#name ProcedureGrant#name}

---

##### `type`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrantArguments.property.type"></a>

- *Type:* `string`

The argument type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#type ProcedureGrant#type}

---

### ProcedureGrantConfig <a name="cdktf-snowflake.ProcedureGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ProcedureGrantConfig } from 'cdktf-snowflake'

const procedureGrantConfig: ProcedureGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrantConfig.property.databaseName"></a>

- *Type:* `string`

The name of the database containing the current or future procedures on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#database_name ProcedureGrant#database_name}

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.ProcedureGrantConfig.property.schemaName"></a>

- *Type:* `string`

The name of the schema containing the current or future procedures on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#schema_name ProcedureGrant#schema_name}

---

##### `arguments`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrantConfig.property.arguments"></a>

- *Type:* [`cdktf-snowflake.ProcedureGrantArguments`](#cdktf-snowflake.ProcedureGrantArguments)[]

arguments block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#arguments ProcedureGrant#arguments}

---

##### `onFuture`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrantConfig.property.onFuture"></a>

- *Type:* `boolean`

When this is set to true and a schema_name is provided, apply this grant on all future procedures in the given schema.

When this is true and no schema_name is provided apply this grant on all future procedures in the given database. The procedure_name and shares fields must be unset in order to use on_future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#on_future ProcedureGrant#on_future}

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the current or future procedure.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#privilege ProcedureGrant#privilege}

---

##### `procedureName`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrantConfig.property.procedureName"></a>

- *Type:* `string`

The name of the procedure on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#procedure_name ProcedureGrant#procedure_name}

---

##### `returnType`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrantConfig.property.returnType"></a>

- *Type:* `string`

The return type of the procedure (must be present if procedure_name is present).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#return_type ProcedureGrant#return_type}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#roles ProcedureGrant#roles}

---

##### `shares`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrantConfig.property.shares"></a>

- *Type:* `string`[]

Grants privilege to these shares (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#shares ProcedureGrant#shares}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.ProcedureGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant.html#with_grant_option ProcedureGrant#with_grant_option}

---

### ResourceMonitorConfig <a name="cdktf-snowflake.ResourceMonitorConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ResourceMonitorConfig } from 'cdktf-snowflake'

const resourceMonitorConfig: ResourceMonitorConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitorConfig.property.name"></a>

- *Type:* `string`

Identifier for the resource monitor; must be unique for your account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html#name ResourceMonitor#name}

---

##### `creditQuota`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorConfig.property.creditQuota"></a>

- *Type:* `number`

The number of credits allocated monthly to the resource monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html#credit_quota ResourceMonitor#credit_quota}

---

##### `endTimestamp`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorConfig.property.endTimestamp"></a>

- *Type:* `string`

The date and time when the resource monitor suspends the assigned warehouses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html#end_timestamp ResourceMonitor#end_timestamp}

---

##### `frequency`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorConfig.property.frequency"></a>

- *Type:* `string`

The frequency interval at which the credit usage resets to 0.

If you set a frequency for a resource monitor, you must also set START_TIMESTAMP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html#frequency ResourceMonitor#frequency}

---

##### `notifyTriggers`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorConfig.property.notifyTriggers"></a>

- *Type:* `number`[]

A list of percentage thresholds at which to send an alert to subscribed users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html#notify_triggers ResourceMonitor#notify_triggers}

---

##### `startTimestamp`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorConfig.property.startTimestamp"></a>

- *Type:* `string`

The date and time when the resource monitor starts monitoring credit usage for the assigned warehouses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html#start_timestamp ResourceMonitor#start_timestamp}

---

##### `suspendImmediateTriggers`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorConfig.property.suspendImmediateTriggers"></a>

- *Type:* `number`[]

A list of percentage thresholds at which to immediately suspend all warehouses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html#suspend_immediate_triggers ResourceMonitor#suspend_immediate_triggers}

---

##### `suspendTriggers`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorConfig.property.suspendTriggers"></a>

- *Type:* `number`[]

A list of percentage thresholds at which to suspend all warehouses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor.html#suspend_triggers ResourceMonitor#suspend_triggers}

---

### ResourceMonitorGrantConfig <a name="cdktf-snowflake.ResourceMonitorGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ResourceMonitorGrantConfig } from 'cdktf-snowflake'

const resourceMonitorGrantConfig: ResourceMonitorGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `monitorName`<sup>Required</sup> <a name="cdktf-snowflake.ResourceMonitorGrantConfig.property.monitorName"></a>

- *Type:* `string`

Identifier for the resource monitor; must be unique for your account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor_grant.html#monitor_name ResourceMonitorGrant#monitor_name}

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the resource monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor_grant.html#privilege ResourceMonitorGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor_grant.html#roles ResourceMonitorGrant#roles}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.ResourceMonitorGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/resource_monitor_grant.html#with_grant_option ResourceMonitorGrant#with_grant_option}

---

### RoleConfig <a name="cdktf-snowflake.RoleConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RoleConfig } from 'cdktf-snowflake'

const roleConfig: RoleConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.RoleConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.RoleConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.RoleConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.RoleConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.RoleConfig.property.name"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/role.html#name Role#name}.

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.RoleConfig.property.comment"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/role.html#comment Role#comment}.

---

### RoleGrantsConfig <a name="cdktf-snowflake.RoleGrantsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RoleGrantsConfig } from 'cdktf-snowflake'

const roleGrantsConfig: RoleGrantsConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.RoleGrantsConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.RoleGrantsConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.RoleGrantsConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.RoleGrantsConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `roleName`<sup>Required</sup> <a name="cdktf-snowflake.RoleGrantsConfig.property.roleName"></a>

- *Type:* `string`

The name of the role we are granting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/role_grants.html#role_name RoleGrants#role_name}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.RoleGrantsConfig.property.roles"></a>

- *Type:* `string`[]

Grants role to this specified role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/role_grants.html#roles RoleGrants#roles}

---

##### `users`<sup>Optional</sup> <a name="cdktf-snowflake.RoleGrantsConfig.property.users"></a>

- *Type:* `string`[]

Grants role to this specified user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/role_grants.html#users RoleGrants#users}

---

### RowAccessPolicyConfig <a name="cdktf-snowflake.RowAccessPolicyConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RowAccessPolicyConfig } from 'cdktf-snowflake'

const rowAccessPolicyConfig: RowAccessPolicyConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.RowAccessPolicyConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.RowAccessPolicyConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.RowAccessPolicyConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.RowAccessPolicyConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyConfig.property.database"></a>

- *Type:* `string`

The database in which to create the row access policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy.html#database RowAccessPolicy#database}

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyConfig.property.name"></a>

- *Type:* `string`

Specifies the identifier for the row access policy;

must be unique for the database and schema in which the row access policy is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy.html#name RowAccessPolicy#name}

---

##### `rowAccessExpression`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyConfig.property.rowAccessExpression"></a>

- *Type:* `string`

Specifies the SQL expression. The expression can be any boolean-valued SQL expression.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy.html#row_access_expression RowAccessPolicy#row_access_expression}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyConfig.property.schema"></a>

- *Type:* `string`

The schema in which to create the row access policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy.html#schema RowAccessPolicy#schema}

---

##### `signature`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyConfig.property.signature"></a>

- *Type:* {[ key: string ]: `string`}

Specifies signature (arguments) for the row access policy (uppercase and sorted to avoid recreation of resource).

A signature specifies a set of attributes that must be considered to determine whether the row is accessible. The attribute values come from the database object (e.g. table or view) to be protected by the row access policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy.html#signature RowAccessPolicy#signature}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.RowAccessPolicyConfig.property.comment"></a>

- *Type:* `string`

Specifies a comment for the row access policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy.html#comment RowAccessPolicy#comment}

---

### RowAccessPolicyGrantConfig <a name="cdktf-snowflake.RowAccessPolicyGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RowAccessPolicyGrantConfig } from 'cdktf-snowflake'

const rowAccessPolicyGrantConfig: RowAccessPolicyGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.RowAccessPolicyGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.RowAccessPolicyGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.RowAccessPolicyGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.RowAccessPolicyGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyGrantConfig.property.databaseName"></a>

- *Type:* `string`

The name of the database containing the row access policy on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy_grant.html#database_name RowAccessPolicyGrant#database_name}

---

##### `rowAccessPolicyName`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyGrantConfig.property.rowAccessPolicyName"></a>

- *Type:* `string`

The name of the row access policy on which to grant privileges immediately.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy_grant.html#row_access_policy_name RowAccessPolicyGrant#row_access_policy_name}

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.RowAccessPolicyGrantConfig.property.schemaName"></a>

- *Type:* `string`

The name of the schema containing the row access policy on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy_grant.html#schema_name RowAccessPolicyGrant#schema_name}

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.RowAccessPolicyGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the row access policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy_grant.html#privilege RowAccessPolicyGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.RowAccessPolicyGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy_grant.html#roles RowAccessPolicyGrant#roles}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.RowAccessPolicyGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/row_access_policy_grant.html#with_grant_option RowAccessPolicyGrant#with_grant_option}

---

### SchemaConfig <a name="cdktf-snowflake.SchemaConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SchemaConfig } from 'cdktf-snowflake'

const schemaConfig: SchemaConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.SchemaConfig.property.database"></a>

- *Type:* `string`

The database in which to create the schema.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/schema.html#database Schema#database}

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.SchemaConfig.property.name"></a>

- *Type:* `string`

Specifies the identifier for the schema; must be unique for the database in which the schema is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/schema.html#name Schema#name}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaConfig.property.comment"></a>

- *Type:* `string`

Specifies a comment for the schema.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/schema.html#comment Schema#comment}

---

##### `dataRetentionDays`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaConfig.property.dataRetentionDays"></a>

- *Type:* `number`

Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the schema, as well as specifying the default Time Travel retention time for all tables created in the schema.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/schema.html#data_retention_days Schema#data_retention_days}

---

##### `isManaged`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaConfig.property.isManaged"></a>

- *Type:* `boolean`

Specifies a managed schema. Managed access schemas centralize privilege management with the schema owner.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/schema.html#is_managed Schema#is_managed}

---

##### `isTransient`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaConfig.property.isTransient"></a>

- *Type:* `boolean`

Specifies a schema as transient.

Transient schemas do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/schema.html#is_transient Schema#is_transient}

---

### SchemaGrantConfig <a name="cdktf-snowflake.SchemaGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SchemaGrantConfig } from 'cdktf-snowflake'

const schemaGrantConfig: SchemaGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.SchemaGrantConfig.property.databaseName"></a>

- *Type:* `string`

The name of the database containing the schema on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/schema_grant.html#database_name SchemaGrant#database_name}

---

##### `onFuture`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaGrantConfig.property.onFuture"></a>

- *Type:* `boolean`

When this is set to true, apply this grant on all future schemas in the given database.

The schema_name and shares fields must be unset in order to use on_future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/schema_grant.html#on_future SchemaGrant#on_future}

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the current or future schema.

Note that if "OWNERSHIP" is specified, ensure that the role that terraform is using is granted access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/schema_grant.html#privilege SchemaGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/schema_grant.html#roles SchemaGrant#roles}

---

##### `schemaName`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaGrantConfig.property.schemaName"></a>

- *Type:* `string`

The name of the schema on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/schema_grant.html#schema_name SchemaGrant#schema_name}

---

##### `shares`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaGrantConfig.property.shares"></a>

- *Type:* `string`[]

Grants privilege to these shares (only valid if on_future is unset).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/schema_grant.html#shares SchemaGrant#shares}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.SchemaGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/schema_grant.html#with_grant_option SchemaGrant#with_grant_option}

---

### ScimIntegrationConfig <a name="cdktf-snowflake.ScimIntegrationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ScimIntegrationConfig } from 'cdktf-snowflake'

const scimIntegrationConfig: ScimIntegrationConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.ScimIntegrationConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.ScimIntegrationConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.ScimIntegrationConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.ScimIntegrationConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.ScimIntegrationConfig.property.name"></a>

- *Type:* `string`

Specifies the name of the SCIM integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/scim_integration.html#name ScimIntegration#name}

---

##### `provisionerRole`<sup>Required</sup> <a name="cdktf-snowflake.ScimIntegrationConfig.property.provisionerRole"></a>

- *Type:* `string`

Specify the SCIM role in Snowflake that owns any users and roles that are imported from the identity provider into Snowflake using SCIM.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/scim_integration.html#provisioner_role ScimIntegration#provisioner_role}

---

##### `scimClient`<sup>Required</sup> <a name="cdktf-snowflake.ScimIntegrationConfig.property.scimClient"></a>

- *Type:* `string`

Specifies the client type for the scim integration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/scim_integration.html#scim_client ScimIntegration#scim_client}

---

##### `networkPolicy`<sup>Optional</sup> <a name="cdktf-snowflake.ScimIntegrationConfig.property.networkPolicy"></a>

- *Type:* `string`

Specifies an existing network policy active for your account.

The network policy restricts the list of user IP addresses when exchanging an authorization code for an access or refresh token and when using a refresh token to obtain a new access token. If this parameter is not set, the network policy for the account (if any) is used instead.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/scim_integration.html#network_policy ScimIntegration#network_policy}

---

### SequenceConfig <a name="cdktf-snowflake.SequenceConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SequenceConfig } from 'cdktf-snowflake'

const sequenceConfig: SequenceConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.SequenceConfig.property.database"></a>

- *Type:* `string`

The database in which to create the sequence. Don't use the | character.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/sequence.html#database Sequence#database}

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.SequenceConfig.property.name"></a>

- *Type:* `string`

Specifies the name for the sequence.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/sequence.html#name Sequence#name}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.SequenceConfig.property.schema"></a>

- *Type:* `string`

The schema in which to create the sequence. Don't use the | character.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/sequence.html#schema Sequence#schema}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceConfig.property.comment"></a>

- *Type:* `string`

Specifies a comment for the sequence.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/sequence.html#comment Sequence#comment}

---

##### `increment`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceConfig.property.increment"></a>

- *Type:* `number`

The amount the sequence will increase by each time it is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/sequence.html#increment Sequence#increment}

---

### SequenceGrantConfig <a name="cdktf-snowflake.SequenceGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SequenceGrantConfig } from 'cdktf-snowflake'

const sequenceGrantConfig: SequenceGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.SequenceGrantConfig.property.databaseName"></a>

- *Type:* `string`

The name of the database containing the current or future sequences on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/sequence_grant.html#database_name SequenceGrant#database_name}

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.SequenceGrantConfig.property.schemaName"></a>

- *Type:* `string`

The name of the schema containing the current or future sequences on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/sequence_grant.html#schema_name SequenceGrant#schema_name}

---

##### `onFuture`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceGrantConfig.property.onFuture"></a>

- *Type:* `boolean`

When this is set to true and a schema_name is provided, apply this grant on all future sequences in the given schema.

When this is true and no schema_name is provided apply this grant on all future sequences in the given database. The sequence_name field must be unset in order to use on_future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/sequence_grant.html#on_future SequenceGrant#on_future}

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the current or future sequence.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/sequence_grant.html#privilege SequenceGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/sequence_grant.html#roles SequenceGrant#roles}

---

##### `sequenceName`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceGrantConfig.property.sequenceName"></a>

- *Type:* `string`

The name of the sequence on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/sequence_grant.html#sequence_name SequenceGrant#sequence_name}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.SequenceGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/sequence_grant.html#with_grant_option SequenceGrant#with_grant_option}

---

### ShareConfig <a name="cdktf-snowflake.ShareConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ShareConfig } from 'cdktf-snowflake'

const shareConfig: ShareConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.ShareConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.ShareConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.ShareConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.ShareConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.ShareConfig.property.name"></a>

- *Type:* `string`

Specifies the identifier for the share; must be unique for the account in which the share is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/share.html#name Share#name}

---

##### `accounts`<sup>Optional</sup> <a name="cdktf-snowflake.ShareConfig.property.accounts"></a>

- *Type:* `string`[]

A list of accounts to be added to the share.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/share.html#accounts Share#accounts}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.ShareConfig.property.comment"></a>

- *Type:* `string`

Specifies a comment for the managed account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/share.html#comment Share#comment}

---

### SnowflakeProviderConfig <a name="cdktf-snowflake.SnowflakeProviderConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SnowflakeProviderConfig } from 'cdktf-snowflake'

const snowflakeProviderConfig: SnowflakeProviderConfig = { ... }
```

##### `account`<sup>Required</sup> <a name="cdktf-snowflake.SnowflakeProviderConfig.property.account"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#account SnowflakeProvider#account}.

---

##### `username`<sup>Required</sup> <a name="cdktf-snowflake.SnowflakeProviderConfig.property.username"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#username SnowflakeProvider#username}.

---

##### `alias`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProviderConfig.property.alias"></a>

- *Type:* `string`

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#alias SnowflakeProvider#alias}

---

##### `browserAuth`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProviderConfig.property.browserAuth"></a>

- *Type:* `boolean`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#browser_auth SnowflakeProvider#browser_auth}.

---

##### `oauthAccessToken`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProviderConfig.property.oauthAccessToken"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_access_token SnowflakeProvider#oauth_access_token}.

---

##### `oauthClientId`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProviderConfig.property.oauthClientId"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_client_id SnowflakeProvider#oauth_client_id}.

---

##### `oauthClientSecret`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProviderConfig.property.oauthClientSecret"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_client_secret SnowflakeProvider#oauth_client_secret}.

---

##### `oauthEndpoint`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProviderConfig.property.oauthEndpoint"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_endpoint SnowflakeProvider#oauth_endpoint}.

---

##### `oauthRedirectUrl`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProviderConfig.property.oauthRedirectUrl"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_redirect_url SnowflakeProvider#oauth_redirect_url}.

---

##### `oauthRefreshToken`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProviderConfig.property.oauthRefreshToken"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_refresh_token SnowflakeProvider#oauth_refresh_token}.

---

##### `password`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProviderConfig.property.password"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#password SnowflakeProvider#password}.

---

##### `privateKey`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProviderConfig.property.privateKey"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#private_key SnowflakeProvider#private_key}.

---

##### `privateKeyPath`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProviderConfig.property.privateKeyPath"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#private_key_path SnowflakeProvider#private_key_path}.

---

##### `region`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProviderConfig.property.region"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#region SnowflakeProvider#region}.

---

##### `role`<sup>Optional</sup> <a name="cdktf-snowflake.SnowflakeProviderConfig.property.role"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#role SnowflakeProvider#role}.

---

### StageConfig <a name="cdktf-snowflake.StageConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { StageConfig } from 'cdktf-snowflake'

const stageConfig: StageConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.StageConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.StageConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.StageConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.StageConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.StageConfig.property.database"></a>

- *Type:* `string`

The database in which to create the stage.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage.html#database Stage#database}

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.StageConfig.property.name"></a>

- *Type:* `string`

Specifies the identifier for the stage;

must be unique for the database and schema in which the stage is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage.html#name Stage#name}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.StageConfig.property.schema"></a>

- *Type:* `string`

The schema in which to create the stage.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage.html#schema Stage#schema}

---

##### `awsExternalId`<sup>Optional</sup> <a name="cdktf-snowflake.StageConfig.property.awsExternalId"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage.html#aws_external_id Stage#aws_external_id}.

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.StageConfig.property.comment"></a>

- *Type:* `string`

Specifies a comment for the stage.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage.html#comment Stage#comment}

---

##### `copyOptions`<sup>Optional</sup> <a name="cdktf-snowflake.StageConfig.property.copyOptions"></a>

- *Type:* `string`

Specifies the copy options for the stage.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage.html#copy_options Stage#copy_options}

---

##### `credentials`<sup>Optional</sup> <a name="cdktf-snowflake.StageConfig.property.credentials"></a>

- *Type:* `string`

Specifies the credentials for the stage.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage.html#credentials Stage#credentials}

---

##### `encryption`<sup>Optional</sup> <a name="cdktf-snowflake.StageConfig.property.encryption"></a>

- *Type:* `string`

Specifies the encryption settings for the stage.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage.html#encryption Stage#encryption}

---

##### `fileFormat`<sup>Optional</sup> <a name="cdktf-snowflake.StageConfig.property.fileFormat"></a>

- *Type:* `string`

Specifies the file format for the stage.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage.html#file_format Stage#file_format}

---

##### `snowflakeIamUser`<sup>Optional</sup> <a name="cdktf-snowflake.StageConfig.property.snowflakeIamUser"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage.html#snowflake_iam_user Stage#snowflake_iam_user}.

---

##### `storageIntegration`<sup>Optional</sup> <a name="cdktf-snowflake.StageConfig.property.storageIntegration"></a>

- *Type:* `string`

Specifies the name of the storage integration used to delegate authentication responsibility for external cloud storage to a Snowflake identity and access management (IAM) entity.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage.html#storage_integration Stage#storage_integration}

---

##### `url`<sup>Optional</sup> <a name="cdktf-snowflake.StageConfig.property.url"></a>

- *Type:* `string`

Specifies the URL for the stage.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage.html#url Stage#url}

---

### StageGrantConfig <a name="cdktf-snowflake.StageGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { StageGrantConfig } from 'cdktf-snowflake'

const stageGrantConfig: StageGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.StageGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.StageGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.StageGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.StageGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.StageGrantConfig.property.databaseName"></a>

- *Type:* `string`

The name of the database containing the current stage on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html#database_name StageGrant#database_name}

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.StageGrantConfig.property.schemaName"></a>

- *Type:* `string`

The name of the schema containing the current stage on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html#schema_name StageGrant#schema_name}

---

##### `onFuture`<sup>Optional</sup> <a name="cdktf-snowflake.StageGrantConfig.property.onFuture"></a>

- *Type:* `boolean`

When this is set to true and a schema_name is provided, apply this grant on all future stages in the given schema.

When this is true and no schema_name is provided apply this grant on all future stages in the given database. The stage_name and shares fields must be unset in order to use on_future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html#on_future StageGrant#on_future}

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.StageGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the stage.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html#privilege StageGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.StageGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html#roles StageGrant#roles}

---

##### `shares`<sup>Optional</sup> <a name="cdktf-snowflake.StageGrantConfig.property.shares"></a>

- *Type:* `string`[]

Grants privilege to these shares (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html#shares StageGrant#shares}

---

##### `stageName`<sup>Optional</sup> <a name="cdktf-snowflake.StageGrantConfig.property.stageName"></a>

- *Type:* `string`

The name of the stage on which to grant privilege (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html#stage_name StageGrant#stage_name}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.StageGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage_grant.html#with_grant_option StageGrant#with_grant_option}

---

### StorageIntegrationConfig <a name="cdktf-snowflake.StorageIntegrationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { StorageIntegrationConfig } from 'cdktf-snowflake'

const storageIntegrationConfig: StorageIntegrationConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.StorageIntegrationConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.StorageIntegrationConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.StorageIntegrationConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.StorageIntegrationConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegrationConfig.property.name"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html#name StorageIntegration#name}.

---

##### `storageAllowedLocations`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegrationConfig.property.storageAllowedLocations"></a>

- *Type:* `string`[]

Explicitly limits external stages that use the integration to reference one or more storage locations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html#storage_allowed_locations StorageIntegration#storage_allowed_locations}

---

##### `storageProvider`<sup>Required</sup> <a name="cdktf-snowflake.StorageIntegrationConfig.property.storageProvider"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html#storage_provider StorageIntegration#storage_provider}.

---

##### `azureTenantId`<sup>Optional</sup> <a name="cdktf-snowflake.StorageIntegrationConfig.property.azureTenantId"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html#azure_tenant_id StorageIntegration#azure_tenant_id}.

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.StorageIntegrationConfig.property.comment"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html#comment StorageIntegration#comment}.

---

##### `enabled`<sup>Optional</sup> <a name="cdktf-snowflake.StorageIntegrationConfig.property.enabled"></a>

- *Type:* `boolean`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html#enabled StorageIntegration#enabled}.

---

##### `storageAwsRoleArn`<sup>Optional</sup> <a name="cdktf-snowflake.StorageIntegrationConfig.property.storageAwsRoleArn"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html#storage_aws_role_arn StorageIntegration#storage_aws_role_arn}.

---

##### `storageBlockedLocations`<sup>Optional</sup> <a name="cdktf-snowflake.StorageIntegrationConfig.property.storageBlockedLocations"></a>

- *Type:* `string`[]

Explicitly prohibits external stages that use the integration from referencing one or more storage locations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html#storage_blocked_locations StorageIntegration#storage_blocked_locations}

---

##### `type`<sup>Optional</sup> <a name="cdktf-snowflake.StorageIntegrationConfig.property.type"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/storage_integration.html#type StorageIntegration#type}.

---

### StreamConfig <a name="cdktf-snowflake.StreamConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { StreamConfig } from 'cdktf-snowflake'

const streamConfig: StreamConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.StreamConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.StreamConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.StreamConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.StreamConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.StreamConfig.property.database"></a>

- *Type:* `string`

The database in which to create the stream.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream.html#database Stream#database}

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.StreamConfig.property.name"></a>

- *Type:* `string`

Specifies the identifier for the stream;

must be unique for the database and schema in which the stream is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream.html#name Stream#name}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.StreamConfig.property.schema"></a>

- *Type:* `string`

The schema in which to create the stream.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream.html#schema Stream#schema}

---

##### `appendOnly`<sup>Optional</sup> <a name="cdktf-snowflake.StreamConfig.property.appendOnly"></a>

- *Type:* `boolean`

Type of the stream that will be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream.html#append_only Stream#append_only}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.StreamConfig.property.comment"></a>

- *Type:* `string`

Specifies a comment for the stream.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream.html#comment Stream#comment}

---

##### `onTable`<sup>Optional</sup> <a name="cdktf-snowflake.StreamConfig.property.onTable"></a>

- *Type:* `string`

Name of the table the stream will monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream.html#on_table Stream#on_table}

---

##### `showInitialRows`<sup>Optional</sup> <a name="cdktf-snowflake.StreamConfig.property.showInitialRows"></a>

- *Type:* `boolean`

Specifies whether to return all existing rows in the source table as row inserts the first time the stream is consumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream.html#show_initial_rows Stream#show_initial_rows}

---

### StreamGrantConfig <a name="cdktf-snowflake.StreamGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { StreamGrantConfig } from 'cdktf-snowflake'

const streamGrantConfig: StreamGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.StreamGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.StreamGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.StreamGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.StreamGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.StreamGrantConfig.property.databaseName"></a>

- *Type:* `string`

The name of the database containing the current or future streams on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant.html#database_name StreamGrant#database_name}

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.StreamGrantConfig.property.schemaName"></a>

- *Type:* `string`

The name of the schema containing the current or future streams on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant.html#schema_name StreamGrant#schema_name}

---

##### `onFuture`<sup>Optional</sup> <a name="cdktf-snowflake.StreamGrantConfig.property.onFuture"></a>

- *Type:* `boolean`

When this is set to true and a schema_name is provided, apply this grant on all future streams in the given schema.

When this is true and no schema_name is provided apply this grant on all future streams in the given database. The stream_name field must be unset in order to use on_future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant.html#on_future StreamGrant#on_future}

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.StreamGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the current or future stream.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant.html#privilege StreamGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.StreamGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant.html#roles StreamGrant#roles}

---

##### `streamName`<sup>Optional</sup> <a name="cdktf-snowflake.StreamGrantConfig.property.streamName"></a>

- *Type:* `string`

The name of the stream on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant.html#stream_name StreamGrant#stream_name}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.StreamGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant.html#with_grant_option StreamGrant#with_grant_option}

---

### TableColumn <a name="cdktf-snowflake.TableColumn"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TableColumn } from 'cdktf-snowflake'

const tableColumn: TableColumn = { ... }
```

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.TableColumn.property.name"></a>

- *Type:* `string`

Column name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#name Table#name}

---

##### `type`<sup>Required</sup> <a name="cdktf-snowflake.TableColumn.property.type"></a>

- *Type:* `string`

Column type, e.g. VARIANT.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#type Table#type}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.TableColumn.property.comment"></a>

- *Type:* `string`

Column comment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#comment Table#comment}

---

##### `nullable`<sup>Optional</sup> <a name="cdktf-snowflake.TableColumn.property.nullable"></a>

- *Type:* `boolean`

Whether this column can contain null values.

**Note**: Depending on your Snowflake version, the default value will not suffice if this column is used in a primary key constraint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#nullable Table#nullable}

---

### TableConfig <a name="cdktf-snowflake.TableConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TableConfig } from 'cdktf-snowflake'

const tableConfig: TableConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.TableConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.TableConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.TableConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.TableConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `column`<sup>Required</sup> <a name="cdktf-snowflake.TableConfig.property.column"></a>

- *Type:* [`cdktf-snowflake.TableColumn`](#cdktf-snowflake.TableColumn)[]

column block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#column Table#column}

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.TableConfig.property.database"></a>

- *Type:* `string`

The database in which to create the table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#database Table#database}

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.TableConfig.property.name"></a>

- *Type:* `string`

Specifies the identifier for the table;

must be unique for the database and schema in which the table is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#name Table#name}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.TableConfig.property.schema"></a>

- *Type:* `string`

The schema in which to create the table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#schema Table#schema}

---

##### `changeTracking`<sup>Optional</sup> <a name="cdktf-snowflake.TableConfig.property.changeTracking"></a>

- *Type:* `boolean`

Specifies whether to enable change tracking on the table. Default false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#change_tracking Table#change_tracking}

---

##### `clusterBy`<sup>Optional</sup> <a name="cdktf-snowflake.TableConfig.property.clusterBy"></a>

- *Type:* `string`[]

A list of one or more table columns/expressions to be used as clustering key(s) for the table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#cluster_by Table#cluster_by}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.TableConfig.property.comment"></a>

- *Type:* `string`

Specifies a comment for the table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#comment Table#comment}

---

##### `dataRetentionDays`<sup>Optional</sup> <a name="cdktf-snowflake.TableConfig.property.dataRetentionDays"></a>

- *Type:* `number`

Specifies the retention period for the table so that Time Travel actions (SELECT, CLONE, UNDROP) can be performed on historical data in the table.

Default value is 1, if you wish to inherit the parent schema setting then pass in the schema attribute to this argument.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#data_retention_days Table#data_retention_days}

---

##### `primaryKey`<sup>Optional</sup> <a name="cdktf-snowflake.TableConfig.property.primaryKey"></a>

- *Type:* [`cdktf-snowflake.TablePrimaryKey`](#cdktf-snowflake.TablePrimaryKey)[]

primary_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#primary_key Table#primary_key}

---

### TableGrantConfig <a name="cdktf-snowflake.TableGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TableGrantConfig } from 'cdktf-snowflake'

const tableGrantConfig: TableGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.TableGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.TableGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.TableGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.TableGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.TableGrantConfig.property.databaseName"></a>

- *Type:* `string`

The name of the database containing the current or future tables on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant.html#database_name TableGrant#database_name}

---

##### `onFuture`<sup>Optional</sup> <a name="cdktf-snowflake.TableGrantConfig.property.onFuture"></a>

- *Type:* `boolean`

When this is set to true and a schema_name is provided, apply this grant on all future tables in the given schema.

When this is true and no schema_name is provided apply this grant on all future tables in the given database. The table_name and shares fields must be unset in order to use on_future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant.html#on_future TableGrant#on_future}

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.TableGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the current or future table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant.html#privilege TableGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.TableGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant.html#roles TableGrant#roles}

---

##### `schemaName`<sup>Optional</sup> <a name="cdktf-snowflake.TableGrantConfig.property.schemaName"></a>

- *Type:* `string`

The name of the schema containing the current or future tables on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant.html#schema_name TableGrant#schema_name}

---

##### `shares`<sup>Optional</sup> <a name="cdktf-snowflake.TableGrantConfig.property.shares"></a>

- *Type:* `string`[]

Grants privilege to these shares (only valid if on_future is unset).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant.html#shares TableGrant#shares}

---

##### `tableName`<sup>Optional</sup> <a name="cdktf-snowflake.TableGrantConfig.property.tableName"></a>

- *Type:* `string`

The name of the table on which to grant privileges immediately (only valid if on_future is unset).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant.html#table_name TableGrant#table_name}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.TableGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant.html#with_grant_option TableGrant#with_grant_option}

---

### TablePrimaryKey <a name="cdktf-snowflake.TablePrimaryKey"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TablePrimaryKey } from 'cdktf-snowflake'

const tablePrimaryKey: TablePrimaryKey = { ... }
```

##### `keys`<sup>Required</sup> <a name="cdktf-snowflake.TablePrimaryKey.property.keys"></a>

- *Type:* `string`[]

Columns to use in primary key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#keys Table#keys}

---

##### `name`<sup>Optional</sup> <a name="cdktf-snowflake.TablePrimaryKey.property.name"></a>

- *Type:* `string`

Name of constraint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table.html#name Table#name}

---

### TaskConfig <a name="cdktf-snowflake.TaskConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TaskConfig } from 'cdktf-snowflake'

const taskConfig: TaskConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.TaskConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.TaskConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.TaskConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.TaskConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.TaskConfig.property.database"></a>

- *Type:* `string`

The database in which to create the task.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#database Task#database}

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.TaskConfig.property.name"></a>

- *Type:* `string`

Specifies the identifier for the task;

must be unique for the database and schema in which the task is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#name Task#name}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.TaskConfig.property.schema"></a>

- *Type:* `string`

The schema in which to create the task.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#schema Task#schema}

---

##### `sqlStatement`<sup>Required</sup> <a name="cdktf-snowflake.TaskConfig.property.sqlStatement"></a>

- *Type:* `string`

Any single SQL statement, or a call to a stored procedure, executed when the task runs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#sql_statement Task#sql_statement}

---

##### `warehouse`<sup>Required</sup> <a name="cdktf-snowflake.TaskConfig.property.warehouse"></a>

- *Type:* `string`

The warehouse the task will use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#warehouse Task#warehouse}

---

##### `after`<sup>Optional</sup> <a name="cdktf-snowflake.TaskConfig.property.after"></a>

- *Type:* `string`

Specifies the predecessor task in the same database and schema of the current task.

When a run of the predecessor task finishes successfully, it triggers this task (after a brief lag).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#after Task#after}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.TaskConfig.property.comment"></a>

- *Type:* `string`

Specifies a comment for the task.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#comment Task#comment}

---

##### `enabled`<sup>Optional</sup> <a name="cdktf-snowflake.TaskConfig.property.enabled"></a>

- *Type:* `boolean`

Specifies if the task should be started (enabled) after creation or should remain suspended (default).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#enabled Task#enabled}

---

##### `schedule`<sup>Optional</sup> <a name="cdktf-snowflake.TaskConfig.property.schedule"></a>

- *Type:* `string`

The schedule for periodically running the task. This can be a cron or interval in minutes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#schedule Task#schedule}

---

##### `sessionParameters`<sup>Optional</sup> <a name="cdktf-snowflake.TaskConfig.property.sessionParameters"></a>

- *Type:* {[ key: string ]: `string`}

Specifies session parameters to set for the session when the task runs. A task supports all session parameters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#session_parameters Task#session_parameters}

---

##### `userTaskTimeoutMs`<sup>Optional</sup> <a name="cdktf-snowflake.TaskConfig.property.userTaskTimeoutMs"></a>

- *Type:* `number`

Specifies the time limit on a single run of the task before it times out (in milliseconds).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#user_task_timeout_ms Task#user_task_timeout_ms}

---

##### `when`<sup>Optional</sup> <a name="cdktf-snowflake.TaskConfig.property.when"></a>

- *Type:* `string`

Specifies a Boolean SQL expression; multiple conditions joined with AND/OR are supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task.html#when Task#when}

---

### TaskGrantConfig <a name="cdktf-snowflake.TaskGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TaskGrantConfig } from 'cdktf-snowflake'

const taskGrantConfig: TaskGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.TaskGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.TaskGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.TaskGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.TaskGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.TaskGrantConfig.property.databaseName"></a>

- *Type:* `string`

The name of the database containing the current or future tasks on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task_grant.html#database_name TaskGrant#database_name}

---

##### `schemaName`<sup>Required</sup> <a name="cdktf-snowflake.TaskGrantConfig.property.schemaName"></a>

- *Type:* `string`

The name of the schema containing the current or future tasks on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task_grant.html#schema_name TaskGrant#schema_name}

---

##### `onFuture`<sup>Optional</sup> <a name="cdktf-snowflake.TaskGrantConfig.property.onFuture"></a>

- *Type:* `boolean`

When this is set to true and a schema_name is provided, apply this grant on all future tasks in the given schema.

When this is true and no schema_name is provided apply this grant on all future tasks in the given database. The task_name field must be unset in order to use on_future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task_grant.html#on_future TaskGrant#on_future}

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.TaskGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the current or future task.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task_grant.html#privilege TaskGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.TaskGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task_grant.html#roles TaskGrant#roles}

---

##### `taskName`<sup>Optional</sup> <a name="cdktf-snowflake.TaskGrantConfig.property.taskName"></a>

- *Type:* `string`

The name of the task on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task_grant.html#task_name TaskGrant#task_name}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.TaskGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/task_grant.html#with_grant_option TaskGrant#with_grant_option}

---

### UserConfig <a name="cdktf-snowflake.UserConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { UserConfig } from 'cdktf-snowflake'

const userConfig: UserConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.UserConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.UserConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.UserConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.UserConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.UserConfig.property.name"></a>

- *Type:* `string`

Name of the user. Note that if you do not supply login_name this will be used as login_name. [doc](https://docs.snowflake.net/manuals/sql-reference/sql/create-user.html#required-parameters).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user.html#name User#name}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.UserConfig.property.comment"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user.html#comment User#comment}.

---

##### `defaultNamespace`<sup>Optional</sup> <a name="cdktf-snowflake.UserConfig.property.defaultNamespace"></a>

- *Type:* `string`

Specifies the namespace (database only or database and schema) that is active by default for the user’s session upon login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user.html#default_namespace User#default_namespace}

---

##### `defaultRole`<sup>Optional</sup> <a name="cdktf-snowflake.UserConfig.property.defaultRole"></a>

- *Type:* `string`

Specifies the role that is active by default for the user’s session upon login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user.html#default_role User#default_role}

---

##### `defaultWarehouse`<sup>Optional</sup> <a name="cdktf-snowflake.UserConfig.property.defaultWarehouse"></a>

- *Type:* `string`

Specifies the virtual warehouse that is active by default for the user’s session upon login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user.html#default_warehouse User#default_warehouse}

---

##### `disabled`<sup>Optional</sup> <a name="cdktf-snowflake.UserConfig.property.disabled"></a>

- *Type:* `boolean`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user.html#disabled User#disabled}.

---

##### `displayName`<sup>Optional</sup> <a name="cdktf-snowflake.UserConfig.property.displayName"></a>

- *Type:* `string`

Name displayed for the user in the Snowflake web interface.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user.html#display_name User#display_name}

---

##### `email`<sup>Optional</sup> <a name="cdktf-snowflake.UserConfig.property.email"></a>

- *Type:* `string`

Email address for the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user.html#email User#email}

---

##### `firstName`<sup>Optional</sup> <a name="cdktf-snowflake.UserConfig.property.firstName"></a>

- *Type:* `string`

First name of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user.html#first_name User#first_name}

---

##### `lastName`<sup>Optional</sup> <a name="cdktf-snowflake.UserConfig.property.lastName"></a>

- *Type:* `string`

Last name of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user.html#last_name User#last_name}

---

##### `loginName`<sup>Optional</sup> <a name="cdktf-snowflake.UserConfig.property.loginName"></a>

- *Type:* `string`

The name users use to log in. If not supplied, snowflake will use name instead.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user.html#login_name User#login_name}

---

##### `mustChangePassword`<sup>Optional</sup> <a name="cdktf-snowflake.UserConfig.property.mustChangePassword"></a>

- *Type:* `boolean`

Specifies whether the user is forced to change their password on next login (including their first/initial login) into the system.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user.html#must_change_password User#must_change_password}

---

##### `password`<sup>Optional</sup> <a name="cdktf-snowflake.UserConfig.property.password"></a>

- *Type:* `string`

**WARNING:** this will put the password in the terraform state file. Use carefully.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user.html#password User#password}

---

##### `rsaPublicKey`<sup>Optional</sup> <a name="cdktf-snowflake.UserConfig.property.rsaPublicKey"></a>

- *Type:* `string`

Specifies the user’s RSA public key; used for key-pair authentication. Must be on 1 line without header and trailer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user.html#rsa_public_key User#rsa_public_key}

---

##### `rsaPublicKey2`<sup>Optional</sup> <a name="cdktf-snowflake.UserConfig.property.rsaPublicKey2"></a>

- *Type:* `string`

Specifies the user’s second RSA public key;

used to rotate the public and private keys for key-pair authentication based on an expiration schedule set by your organization. Must be on 1 line without header and trailer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user.html#rsa_public_key_2 User#rsa_public_key_2}

---

### UserPublicKeysConfig <a name="cdktf-snowflake.UserPublicKeysConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { UserPublicKeysConfig } from 'cdktf-snowflake'

const userPublicKeysConfig: UserPublicKeysConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.UserPublicKeysConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.UserPublicKeysConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.UserPublicKeysConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.UserPublicKeysConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.UserPublicKeysConfig.property.name"></a>

- *Type:* `string`

Name of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user_public_keys.html#name UserPublicKeys#name}

---

##### `rsaPublicKey`<sup>Optional</sup> <a name="cdktf-snowflake.UserPublicKeysConfig.property.rsaPublicKey"></a>

- *Type:* `string`

Specifies the user’s RSA public key; used for key-pair authentication. Must be on 1 line without header and trailer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user_public_keys.html#rsa_public_key UserPublicKeys#rsa_public_key}

---

##### `rsaPublicKey2`<sup>Optional</sup> <a name="cdktf-snowflake.UserPublicKeysConfig.property.rsaPublicKey2"></a>

- *Type:* `string`

Specifies the user’s second RSA public key;

used to rotate the public and Public keys for key-pair authentication based on an expiration schedule set by your organization. Must be on 1 line without header and trailer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user_public_keys.html#rsa_public_key_2 UserPublicKeys#rsa_public_key_2}

---

### ViewConfig <a name="cdktf-snowflake.ViewConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ViewConfig } from 'cdktf-snowflake'

const viewConfig: ViewConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.ViewConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.ViewConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.ViewConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.ViewConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.ViewConfig.property.database"></a>

- *Type:* `string`

The database in which to create the view. Don't use the | character.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view.html#database View#database}

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.ViewConfig.property.name"></a>

- *Type:* `string`

Specifies the identifier for the view;

must be unique for the schema in which the view is created. Don't use the | character.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view.html#name View#name}

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.ViewConfig.property.schema"></a>

- *Type:* `string`

The schema in which to create the view. Don't use the | character.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view.html#schema View#schema}

---

##### `statement`<sup>Required</sup> <a name="cdktf-snowflake.ViewConfig.property.statement"></a>

- *Type:* `string`

Specifies the query used to create the view.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view.html#statement View#statement}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.ViewConfig.property.comment"></a>

- *Type:* `string`

Specifies a comment for the view.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view.html#comment View#comment}

---

##### `isSecure`<sup>Optional</sup> <a name="cdktf-snowflake.ViewConfig.property.isSecure"></a>

- *Type:* `boolean`

Specifies that the view is secure.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view.html#is_secure View#is_secure}

---

##### `orReplace`<sup>Optional</sup> <a name="cdktf-snowflake.ViewConfig.property.orReplace"></a>

- *Type:* `boolean`

Overwrites the View if it exists.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view.html#or_replace View#or_replace}

---

### ViewGrantConfig <a name="cdktf-snowflake.ViewGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ViewGrantConfig } from 'cdktf-snowflake'

const viewGrantConfig: ViewGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.ViewGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.ViewGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.ViewGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.ViewGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `databaseName`<sup>Required</sup> <a name="cdktf-snowflake.ViewGrantConfig.property.databaseName"></a>

- *Type:* `string`

The name of the database containing the current or future views on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view_grant.html#database_name ViewGrant#database_name}

---

##### `onFuture`<sup>Optional</sup> <a name="cdktf-snowflake.ViewGrantConfig.property.onFuture"></a>

- *Type:* `boolean`

When this is set to true and a schema_name is provided, apply this grant on all future views in the given schema.

When this is true and no schema_name is provided apply this grant on all future views in the given database. The view_name and shares fields must be unset in order to use on_future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view_grant.html#on_future ViewGrant#on_future}

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.ViewGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the current or future view.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view_grant.html#privilege ViewGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.ViewGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view_grant.html#roles ViewGrant#roles}

---

##### `schemaName`<sup>Optional</sup> <a name="cdktf-snowflake.ViewGrantConfig.property.schemaName"></a>

- *Type:* `string`

The name of the schema containing the current or future views on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view_grant.html#schema_name ViewGrant#schema_name}

---

##### `shares`<sup>Optional</sup> <a name="cdktf-snowflake.ViewGrantConfig.property.shares"></a>

- *Type:* `string`[]

Grants privilege to these shares (only valid if on_future is unset).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view_grant.html#shares ViewGrant#shares}

---

##### `viewName`<sup>Optional</sup> <a name="cdktf-snowflake.ViewGrantConfig.property.viewName"></a>

- *Type:* `string`

The name of the view on which to grant privileges immediately (only valid if on_future is unset).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view_grant.html#view_name ViewGrant#view_name}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.ViewGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/view_grant.html#with_grant_option ViewGrant#with_grant_option}

---

### WarehouseConfig <a name="cdktf-snowflake.WarehouseConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { WarehouseConfig } from 'cdktf-snowflake'

const warehouseConfig: WarehouseConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.WarehouseConfig.property.name"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse.html#name Warehouse#name}.

---

##### `autoResume`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseConfig.property.autoResume"></a>

- *Type:* `boolean`

Specifies whether to automatically resume a warehouse when a SQL statement (e.g. query) is submitted to it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse.html#auto_resume Warehouse#auto_resume}

---

##### `autoSuspend`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseConfig.property.autoSuspend"></a>

- *Type:* `number`

Specifies the number of seconds of inactivity after which a warehouse is automatically suspended.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse.html#auto_suspend Warehouse#auto_suspend}

---

##### `comment`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseConfig.property.comment"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse.html#comment Warehouse#comment}.

---

##### `initiallySuspended`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseConfig.property.initiallySuspended"></a>

- *Type:* `boolean`

Specifies whether the warehouse is created initially in the ‘Suspended’ state.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse.html#initially_suspended Warehouse#initially_suspended}

---

##### `maxClusterCount`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseConfig.property.maxClusterCount"></a>

- *Type:* `number`

Specifies the maximum number of server clusters for the warehouse.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse.html#max_cluster_count Warehouse#max_cluster_count}

---

##### `maxConcurrencyLevel`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseConfig.property.maxConcurrencyLevel"></a>

- *Type:* `number`

Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by a warehouse.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse.html#max_concurrency_level Warehouse#max_concurrency_level}

---

##### `minClusterCount`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseConfig.property.minClusterCount"></a>

- *Type:* `number`

Specifies the minimum number of server clusters for the warehouse (only applies to multi-cluster warehouses).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse.html#min_cluster_count Warehouse#min_cluster_count}

---

##### `resourceMonitor`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseConfig.property.resourceMonitor"></a>

- *Type:* `string`

Specifies the name of a resource monitor that is explicitly assigned to the warehouse.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse.html#resource_monitor Warehouse#resource_monitor}

---

##### `scalingPolicy`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseConfig.property.scalingPolicy"></a>

- *Type:* `string`

Specifies the policy for automatically starting and shutting down clusters in a multi-cluster warehouse running in Auto-scale mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse.html#scaling_policy Warehouse#scaling_policy}

---

##### `statementQueuedTimeoutInSeconds`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseConfig.property.statementQueuedTimeoutInSeconds"></a>

- *Type:* `number`

Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on a warehouse before it is canceled by the system.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse.html#statement_queued_timeout_in_seconds Warehouse#statement_queued_timeout_in_seconds}

---

##### `statementTimeoutInSeconds`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseConfig.property.statementTimeoutInSeconds"></a>

- *Type:* `number`

Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse.html#statement_timeout_in_seconds Warehouse#statement_timeout_in_seconds}

---

##### `waitForProvisioning`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseConfig.property.waitForProvisioning"></a>

- *Type:* `boolean`

Specifies whether the warehouse, after being resized, waits for all the servers to provision before executing any queued or new queries.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse.html#wait_for_provisioning Warehouse#wait_for_provisioning}

---

##### `warehouseSize`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseConfig.property.warehouseSize"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse.html#warehouse_size Warehouse#warehouse_size}.

---

### WarehouseGrantConfig <a name="cdktf-snowflake.WarehouseGrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { WarehouseGrantConfig } from 'cdktf-snowflake'

const warehouseGrantConfig: WarehouseGrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseGrantConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseGrantConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseGrantConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseGrantConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `warehouseName`<sup>Required</sup> <a name="cdktf-snowflake.WarehouseGrantConfig.property.warehouseName"></a>

- *Type:* `string`

The name of the warehouse on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse_grant.html#warehouse_name WarehouseGrant#warehouse_name}

---

##### `privilege`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseGrantConfig.property.privilege"></a>

- *Type:* `string`

The privilege to grant on the warehouse.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse_grant.html#privilege WarehouseGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseGrantConfig.property.roles"></a>

- *Type:* `string`[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse_grant.html#roles WarehouseGrant#roles}

---

##### `withGrantOption`<sup>Optional</sup> <a name="cdktf-snowflake.WarehouseGrantConfig.property.withGrantOption"></a>

- *Type:* `boolean`

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/warehouse_grant.html#with_grant_option WarehouseGrant#with_grant_option}

---

## Classes <a name="Classes"></a>

### DataSnowflakeExternalFunctionsExternalFunctions <a name="cdktf-snowflake.DataSnowflakeExternalFunctionsExternalFunctions"></a>

#### Initializer <a name="cdktf-snowflake.DataSnowflakeExternalFunctionsExternalFunctions.Initializer"></a>

```typescript
import { DataSnowflakeExternalFunctionsExternalFunctions } from 'cdktf-snowflake'

new DataSnowflakeExternalFunctionsExternalFunctions(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctionsExternalFunctions.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctionsExternalFunctions.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctionsExternalFunctions.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctionsExternalFunctions.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctionsExternalFunctions.property.database"></a>

- *Type:* `string`

---

##### `language`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctionsExternalFunctions.property.language"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctionsExternalFunctions.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalFunctionsExternalFunctions.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeExternalTablesExternalTables <a name="cdktf-snowflake.DataSnowflakeExternalTablesExternalTables"></a>

#### Initializer <a name="cdktf-snowflake.DataSnowflakeExternalTablesExternalTables.Initializer"></a>

```typescript
import { DataSnowflakeExternalTablesExternalTables } from 'cdktf-snowflake'

new DataSnowflakeExternalTablesExternalTables(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTablesExternalTables.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTablesExternalTables.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTablesExternalTables.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTablesExternalTables.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTablesExternalTables.property.database"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTablesExternalTables.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeExternalTablesExternalTables.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeFileFormatsFileFormats <a name="cdktf-snowflake.DataSnowflakeFileFormatsFileFormats"></a>

#### Initializer <a name="cdktf-snowflake.DataSnowflakeFileFormatsFileFormats.Initializer"></a>

```typescript
import { DataSnowflakeFileFormatsFileFormats } from 'cdktf-snowflake'

new DataSnowflakeFileFormatsFileFormats(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormatsFileFormats.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormatsFileFormats.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormatsFileFormats.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormatsFileFormats.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormatsFileFormats.property.database"></a>

- *Type:* `string`

---

##### `formatType`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormatsFileFormats.property.formatType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormatsFileFormats.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeFileFormatsFileFormats.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeMaskingPoliciesMaskingPolicies <a name="cdktf-snowflake.DataSnowflakeMaskingPoliciesMaskingPolicies"></a>

#### Initializer <a name="cdktf-snowflake.DataSnowflakeMaskingPoliciesMaskingPolicies.Initializer"></a>

```typescript
import { DataSnowflakeMaskingPoliciesMaskingPolicies } from 'cdktf-snowflake'

new DataSnowflakeMaskingPoliciesMaskingPolicies(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPoliciesMaskingPolicies.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPoliciesMaskingPolicies.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPoliciesMaskingPolicies.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPoliciesMaskingPolicies.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPoliciesMaskingPolicies.property.database"></a>

- *Type:* `string`

---

##### `kind`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPoliciesMaskingPolicies.property.kind"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPoliciesMaskingPolicies.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaskingPoliciesMaskingPolicies.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeMaterializedViewsMaterializedViews <a name="cdktf-snowflake.DataSnowflakeMaterializedViewsMaterializedViews"></a>

#### Initializer <a name="cdktf-snowflake.DataSnowflakeMaterializedViewsMaterializedViews.Initializer"></a>

```typescript
import { DataSnowflakeMaterializedViewsMaterializedViews } from 'cdktf-snowflake'

new DataSnowflakeMaterializedViewsMaterializedViews(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViewsMaterializedViews.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViewsMaterializedViews.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViewsMaterializedViews.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViewsMaterializedViews.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViewsMaterializedViews.property.database"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViewsMaterializedViews.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeMaterializedViewsMaterializedViews.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakePipesPipes <a name="cdktf-snowflake.DataSnowflakePipesPipes"></a>

#### Initializer <a name="cdktf-snowflake.DataSnowflakePipesPipes.Initializer"></a>

```typescript
import { DataSnowflakePipesPipes } from 'cdktf-snowflake'

new DataSnowflakePipesPipes(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakePipesPipes.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakePipesPipes.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakePipesPipes.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakePipesPipes.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakePipesPipes.property.database"></a>

- *Type:* `string`

---

##### `integration`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakePipesPipes.property.integration"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakePipesPipes.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakePipesPipes.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeResourceMonitorsResourceMonitors <a name="cdktf-snowflake.DataSnowflakeResourceMonitorsResourceMonitors"></a>

#### Initializer <a name="cdktf-snowflake.DataSnowflakeResourceMonitorsResourceMonitors.Initializer"></a>

```typescript
import { DataSnowflakeResourceMonitorsResourceMonitors } from 'cdktf-snowflake'

new DataSnowflakeResourceMonitorsResourceMonitors(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeResourceMonitorsResourceMonitors.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeResourceMonitorsResourceMonitors.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeResourceMonitorsResourceMonitors.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeResourceMonitorsResourceMonitors.property.comment"></a>

- *Type:* `string`

---

##### `creditQuota`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeResourceMonitorsResourceMonitors.property.creditQuota"></a>

- *Type:* `string`

---

##### `frequency`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeResourceMonitorsResourceMonitors.property.frequency"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeResourceMonitorsResourceMonitors.property.name"></a>

- *Type:* `string`

---


### DataSnowflakeRowAccessPoliciesRowAccessPolicies <a name="cdktf-snowflake.DataSnowflakeRowAccessPoliciesRowAccessPolicies"></a>

#### Initializer <a name="cdktf-snowflake.DataSnowflakeRowAccessPoliciesRowAccessPolicies.Initializer"></a>

```typescript
import { DataSnowflakeRowAccessPoliciesRowAccessPolicies } from 'cdktf-snowflake'

new DataSnowflakeRowAccessPoliciesRowAccessPolicies(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPoliciesRowAccessPolicies.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPoliciesRowAccessPolicies.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPoliciesRowAccessPolicies.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPoliciesRowAccessPolicies.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPoliciesRowAccessPolicies.property.database"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPoliciesRowAccessPolicies.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeRowAccessPoliciesRowAccessPolicies.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeSchemasSchemas <a name="cdktf-snowflake.DataSnowflakeSchemasSchemas"></a>

#### Initializer <a name="cdktf-snowflake.DataSnowflakeSchemasSchemas.Initializer"></a>

```typescript
import { DataSnowflakeSchemasSchemas } from 'cdktf-snowflake'

new DataSnowflakeSchemasSchemas(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSchemasSchemas.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSchemasSchemas.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSchemasSchemas.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSchemasSchemas.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSchemasSchemas.property.database"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSchemasSchemas.property.name"></a>

- *Type:* `string`

---


### DataSnowflakeSequencesSequences <a name="cdktf-snowflake.DataSnowflakeSequencesSequences"></a>

#### Initializer <a name="cdktf-snowflake.DataSnowflakeSequencesSequences.Initializer"></a>

```typescript
import { DataSnowflakeSequencesSequences } from 'cdktf-snowflake'

new DataSnowflakeSequencesSequences(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSequencesSequences.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSequencesSequences.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSequencesSequences.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSequencesSequences.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSequencesSequences.property.database"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSequencesSequences.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeSequencesSequences.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeStagesStages <a name="cdktf-snowflake.DataSnowflakeStagesStages"></a>

#### Initializer <a name="cdktf-snowflake.DataSnowflakeStagesStages.Initializer"></a>

```typescript
import { DataSnowflakeStagesStages } from 'cdktf-snowflake'

new DataSnowflakeStagesStages(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStagesStages.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStagesStages.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStagesStages.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStagesStages.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStagesStages.property.database"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStagesStages.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStagesStages.property.schema"></a>

- *Type:* `string`

---

##### `storageIntegration`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStagesStages.property.storageIntegration"></a>

- *Type:* `string`

---


### DataSnowflakeStorageIntegrationsStorageIntegrations <a name="cdktf-snowflake.DataSnowflakeStorageIntegrationsStorageIntegrations"></a>

#### Initializer <a name="cdktf-snowflake.DataSnowflakeStorageIntegrationsStorageIntegrations.Initializer"></a>

```typescript
import { DataSnowflakeStorageIntegrationsStorageIntegrations } from 'cdktf-snowflake'

new DataSnowflakeStorageIntegrationsStorageIntegrations(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStorageIntegrationsStorageIntegrations.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStorageIntegrationsStorageIntegrations.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStorageIntegrationsStorageIntegrations.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStorageIntegrationsStorageIntegrations.property.comment"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStorageIntegrationsStorageIntegrations.property.enabled"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStorageIntegrationsStorageIntegrations.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStorageIntegrationsStorageIntegrations.property.type"></a>

- *Type:* `string`

---


### DataSnowflakeStreamsStreams <a name="cdktf-snowflake.DataSnowflakeStreamsStreams"></a>

#### Initializer <a name="cdktf-snowflake.DataSnowflakeStreamsStreams.Initializer"></a>

```typescript
import { DataSnowflakeStreamsStreams } from 'cdktf-snowflake'

new DataSnowflakeStreamsStreams(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStreamsStreams.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStreamsStreams.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStreamsStreams.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStreamsStreams.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStreamsStreams.property.database"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStreamsStreams.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStreamsStreams.property.schema"></a>

- *Type:* `string`

---

##### `table`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeStreamsStreams.property.table"></a>

- *Type:* `string`

---


### DataSnowflakeTablesTables <a name="cdktf-snowflake.DataSnowflakeTablesTables"></a>

#### Initializer <a name="cdktf-snowflake.DataSnowflakeTablesTables.Initializer"></a>

```typescript
import { DataSnowflakeTablesTables } from 'cdktf-snowflake'

new DataSnowflakeTablesTables(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTablesTables.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTablesTables.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTablesTables.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTablesTables.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTablesTables.property.database"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTablesTables.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTablesTables.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeTasksTasks <a name="cdktf-snowflake.DataSnowflakeTasksTasks"></a>

#### Initializer <a name="cdktf-snowflake.DataSnowflakeTasksTasks.Initializer"></a>

```typescript
import { DataSnowflakeTasksTasks } from 'cdktf-snowflake'

new DataSnowflakeTasksTasks(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTasksTasks.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTasksTasks.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTasksTasks.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTasksTasks.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTasksTasks.property.database"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTasksTasks.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTasksTasks.property.schema"></a>

- *Type:* `string`

---

##### `warehouse`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeTasksTasks.property.warehouse"></a>

- *Type:* `string`

---


### DataSnowflakeViewsViews <a name="cdktf-snowflake.DataSnowflakeViewsViews"></a>

#### Initializer <a name="cdktf-snowflake.DataSnowflakeViewsViews.Initializer"></a>

```typescript
import { DataSnowflakeViewsViews } from 'cdktf-snowflake'

new DataSnowflakeViewsViews(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeViewsViews.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeViewsViews.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeViewsViews.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeViewsViews.property.comment"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeViewsViews.property.database"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeViewsViews.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeViewsViews.property.schema"></a>

- *Type:* `string`

---


### DataSnowflakeWarehousesWarehouses <a name="cdktf-snowflake.DataSnowflakeWarehousesWarehouses"></a>

#### Initializer <a name="cdktf-snowflake.DataSnowflakeWarehousesWarehouses.Initializer"></a>

```typescript
import { DataSnowflakeWarehousesWarehouses } from 'cdktf-snowflake'

new DataSnowflakeWarehousesWarehouses(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeWarehousesWarehouses.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeWarehousesWarehouses.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeWarehousesWarehouses.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeWarehousesWarehouses.property.comment"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeWarehousesWarehouses.property.name"></a>

- *Type:* `string`

---

##### `scalingPolicy`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeWarehousesWarehouses.property.scalingPolicy"></a>

- *Type:* `string`

---

##### `size`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeWarehousesWarehouses.property.size"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeWarehousesWarehouses.property.state"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="cdktf-snowflake.DataSnowflakeWarehousesWarehouses.property.type"></a>

- *Type:* `string`

---



