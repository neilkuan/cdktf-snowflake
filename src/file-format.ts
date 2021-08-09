// https://www.terraform.io/docs/providers/snowflake/r/file_format.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileFormatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Boolean that specifies to allow duplicate object field names (only the last one will be preserved).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#allow_duplicate FileFormat#allow_duplicate}
  */
  readonly allowDuplicate?: boolean;
  /**
  * Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#binary_as_text FileFormat#binary_as_text}
  */
  readonly binaryAsText?: boolean;
  /**
  * Defines the encoding format for binary input or output.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#binary_format FileFormat#binary_format}
  */
  readonly binaryFormat?: string;
  /**
  * Specifies a comment for the file format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#comment FileFormat#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the current compression algorithm for the data file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#compression FileFormat#compression}
  */
  readonly compression?: string;
  /**
  * The database in which to create the file format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#database FileFormat#database}
  */
  readonly database: string;
  /**
  * Defines the format of date values in the data files (data loading) or table (data unloading).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#date_format FileFormat#date_format}
  */
  readonly dateFormat?: string;
  /**
  * Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#disable_auto_convert FileFormat#disable_auto_convert}
  */
  readonly disableAutoConvert?: boolean;
  /**
  * Boolean that specifies whether the XML parser disables recognition of Snowflake semi-structured data tags.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#disable_snowflake_data FileFormat#disable_snowflake_data}
  */
  readonly disableSnowflakeData?: boolean;
  /**
  * Specifies whether to insert SQL NULL for empty fields in an input file, which are represented by two successive delimiters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#empty_field_as_null FileFormat#empty_field_as_null}
  */
  readonly emptyFieldAsNull?: boolean;
  /**
  * Boolean that enables parsing of octal numbers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#enable_octal FileFormat#enable_octal}
  */
  readonly enableOctal?: boolean;
  /**
  * String (constant) that specifies the character set of the source data when loading data into a table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#encoding FileFormat#encoding}
  */
  readonly encoding?: string;
  /**
  * Boolean that specifies whether to generate a parsing error if the number of delimited columns (i.e. fields) in an input file does not match the number of columns in the corresponding table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#error_on_column_count_mismatch FileFormat#error_on_column_count_mismatch}
  */
  readonly errorOnColumnCountMismatch?: boolean;
  /**
  * Single character string used as the escape character for field values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#escape FileFormat#escape}
  */
  readonly escape?: string;
  /**
  * Single character string used as the escape character for unenclosed field values only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#escape_unenclosed_field FileFormat#escape_unenclosed_field}
  */
  readonly escapeUnenclosedField?: string;
  /**
  * Specifies one or more singlebyte or multibyte characters that separate fields in an input file (data loading) or unloaded file (data unloading).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#field_delimiter FileFormat#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Character used to enclose strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#field_optionally_enclosed_by FileFormat#field_optionally_enclosed_by}
  */
  readonly fieldOptionallyEnclosedBy?: string;
  /**
  * Specifies the extension for files unloaded to a stage.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#file_extension FileFormat#file_extension}
  */
  readonly fileExtension?: string;
  /**
  * Specifies the format of the input files (for data loading) or output files (for data unloading).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#format_type FileFormat#format_type}
  */
  readonly formatType: string;
  /**
  * Boolean that specifies whether UTF-8 encoding errors produce error conditions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#ignore_utf8_errors FileFormat#ignore_utf8_errors}
  */
  readonly ignoreUtf8Errors?: boolean;
  /**
  * Specifies the identifier for the file format; must be unique for the database and schema in which the file format is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#name FileFormat#name}
  */
  readonly name: string;
  /**
  * String used to convert to and from SQL NULL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#null_if FileFormat#null_if}
  */
  readonly nullIf?: string[];
  /**
  * Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#preserve_space FileFormat#preserve_space}
  */
  readonly preserveSpace?: boolean;
  /**
  * Specifies one or more singlebyte or multibyte characters that separate records in an input file (data loading) or unloaded file (data unloading).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#record_delimiter FileFormat#record_delimiter}
  */
  readonly recordDelimiter?: string;
  /**
  * Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#replace_invalid_characters FileFormat#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: boolean;
  /**
  * The schema in which to create the file format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#schema FileFormat#schema}
  */
  readonly schema: string;
  /**
  * Boolean that specifies to skip any blank lines encountered in the data files.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#skip_blank_lines FileFormat#skip_blank_lines}
  */
  readonly skipBlankLines?: boolean;
  /**
  * Boolean that specifies whether to skip the BOM (byte order mark), if present in a data file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#skip_byte_order_mark FileFormat#skip_byte_order_mark}
  */
  readonly skipByteOrderMark?: boolean;
  /**
  * Number of lines at the start of the file to skip.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#skip_header FileFormat#skip_header}
  */
  readonly skipHeader?: number;
  /**
  * Boolean that instructs the JSON parser to remove object fields or array elements containing null values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#strip_null_values FileFormat#strip_null_values}
  */
  readonly stripNullValues?: boolean;
  /**
  * Boolean that instructs the JSON parser to remove outer brackets.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#strip_outer_array FileFormat#strip_outer_array}
  */
  readonly stripOuterArray?: boolean;
  /**
  * Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#strip_outer_element FileFormat#strip_outer_element}
  */
  readonly stripOuterElement?: boolean;
  /**
  * Defines the format of time values in the data files (data loading) or table (data unloading).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#time_format FileFormat#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Defines the format of timestamp values in the data files (data loading) or table (data unloading).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#timestamp_format FileFormat#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * Boolean that specifies whether to remove white space from fields.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#trim_space FileFormat#trim_space}
  */
  readonly trimSpace?: boolean;
  /**
  * Boolean that specifies whether to validate UTF-8 character encoding in string column data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html#validate_utf8 FileFormat#validate_utf8}
  */
  readonly validateUtf8?: boolean;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html snowflake_file_format}
*/
export class FileFormat extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/file_format.html snowflake_file_format} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileFormatConfig
  */
  public constructor(scope: Construct, id: string, config: FileFormatConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_file_format',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowDuplicate = config.allowDuplicate;
    this._binaryAsText = config.binaryAsText;
    this._binaryFormat = config.binaryFormat;
    this._comment = config.comment;
    this._compression = config.compression;
    this._database = config.database;
    this._dateFormat = config.dateFormat;
    this._disableAutoConvert = config.disableAutoConvert;
    this._disableSnowflakeData = config.disableSnowflakeData;
    this._emptyFieldAsNull = config.emptyFieldAsNull;
    this._enableOctal = config.enableOctal;
    this._encoding = config.encoding;
    this._errorOnColumnCountMismatch = config.errorOnColumnCountMismatch;
    this._escape = config.escape;
    this._escapeUnenclosedField = config.escapeUnenclosedField;
    this._fieldDelimiter = config.fieldDelimiter;
    this._fieldOptionallyEnclosedBy = config.fieldOptionallyEnclosedBy;
    this._fileExtension = config.fileExtension;
    this._formatType = config.formatType;
    this._ignoreUtf8Errors = config.ignoreUtf8Errors;
    this._name = config.name;
    this._nullIf = config.nullIf;
    this._preserveSpace = config.preserveSpace;
    this._recordDelimiter = config.recordDelimiter;
    this._replaceInvalidCharacters = config.replaceInvalidCharacters;
    this._schema = config.schema;
    this._skipBlankLines = config.skipBlankLines;
    this._skipByteOrderMark = config.skipByteOrderMark;
    this._skipHeader = config.skipHeader;
    this._stripNullValues = config.stripNullValues;
    this._stripOuterArray = config.stripOuterArray;
    this._stripOuterElement = config.stripOuterElement;
    this._timeFormat = config.timeFormat;
    this._timestampFormat = config.timestampFormat;
    this._trimSpace = config.trimSpace;
    this._validateUtf8 = config.validateUtf8;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_duplicate - computed: false, optional: true, required: false
  private _allowDuplicate?: boolean;
  public get allowDuplicate() {
    return this.getBooleanAttribute('allow_duplicate');
  }
  public set allowDuplicate(value: boolean ) {
    this._allowDuplicate = value;
  }
  public resetAllowDuplicate() {
    this._allowDuplicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicateInput() {
    return this._allowDuplicate
  }

  // binary_as_text - computed: false, optional: true, required: false
  private _binaryAsText?: boolean;
  public get binaryAsText() {
    return this.getBooleanAttribute('binary_as_text');
  }
  public set binaryAsText(value: boolean ) {
    this._binaryAsText = value;
  }
  public resetBinaryAsText() {
    this._binaryAsText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAsTextInput() {
    return this._binaryAsText
  }

  // binary_format - computed: false, optional: true, required: false
  private _binaryFormat?: string;
  public get binaryFormat() {
    return this.getStringAttribute('binary_format');
  }
  public set binaryFormat(value: string ) {
    this._binaryFormat = value;
  }
  public resetBinaryFormat() {
    this._binaryFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryFormatInput() {
    return this._binaryFormat
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

  // compression - computed: false, optional: true, required: false
  private _compression?: string;
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string ) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression
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

  // date_format - computed: false, optional: true, required: false
  private _dateFormat?: string;
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }
  public set dateFormat(value: string ) {
    this._dateFormat = value;
  }
  public resetDateFormat() {
    this._dateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFormatInput() {
    return this._dateFormat
  }

  // disable_auto_convert - computed: false, optional: true, required: false
  private _disableAutoConvert?: boolean;
  public get disableAutoConvert() {
    return this.getBooleanAttribute('disable_auto_convert');
  }
  public set disableAutoConvert(value: boolean ) {
    this._disableAutoConvert = value;
  }
  public resetDisableAutoConvert() {
    this._disableAutoConvert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoConvertInput() {
    return this._disableAutoConvert
  }

  // disable_snowflake_data - computed: false, optional: true, required: false
  private _disableSnowflakeData?: boolean;
  public get disableSnowflakeData() {
    return this.getBooleanAttribute('disable_snowflake_data');
  }
  public set disableSnowflakeData(value: boolean ) {
    this._disableSnowflakeData = value;
  }
  public resetDisableSnowflakeData() {
    this._disableSnowflakeData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSnowflakeDataInput() {
    return this._disableSnowflakeData
  }

  // empty_field_as_null - computed: false, optional: true, required: false
  private _emptyFieldAsNull?: boolean;
  public get emptyFieldAsNull() {
    return this.getBooleanAttribute('empty_field_as_null');
  }
  public set emptyFieldAsNull(value: boolean ) {
    this._emptyFieldAsNull = value;
  }
  public resetEmptyFieldAsNull() {
    this._emptyFieldAsNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyFieldAsNullInput() {
    return this._emptyFieldAsNull
  }

  // enable_octal - computed: false, optional: true, required: false
  private _enableOctal?: boolean;
  public get enableOctal() {
    return this.getBooleanAttribute('enable_octal');
  }
  public set enableOctal(value: boolean ) {
    this._enableOctal = value;
  }
  public resetEnableOctal() {
    this._enableOctal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOctalInput() {
    return this._enableOctal
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string;
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string ) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding
  }

  // error_on_column_count_mismatch - computed: false, optional: true, required: false
  private _errorOnColumnCountMismatch?: boolean;
  public get errorOnColumnCountMismatch() {
    return this.getBooleanAttribute('error_on_column_count_mismatch');
  }
  public set errorOnColumnCountMismatch(value: boolean ) {
    this._errorOnColumnCountMismatch = value;
  }
  public resetErrorOnColumnCountMismatch() {
    this._errorOnColumnCountMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOnColumnCountMismatchInput() {
    return this._errorOnColumnCountMismatch
  }

  // escape - computed: false, optional: true, required: false
  private _escape?: string;
  public get escape() {
    return this.getStringAttribute('escape');
  }
  public set escape(value: string ) {
    this._escape = value;
  }
  public resetEscape() {
    this._escape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeInput() {
    return this._escape
  }

  // escape_unenclosed_field - computed: false, optional: true, required: false
  private _escapeUnenclosedField?: string;
  public get escapeUnenclosedField() {
    return this.getStringAttribute('escape_unenclosed_field');
  }
  public set escapeUnenclosedField(value: string ) {
    this._escapeUnenclosedField = value;
  }
  public resetEscapeUnenclosedField() {
    this._escapeUnenclosedField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeUnenclosedFieldInput() {
    return this._escapeUnenclosedField
  }

  // field_delimiter - computed: false, optional: true, required: false
  private _fieldDelimiter?: string;
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string ) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter
  }

  // field_optionally_enclosed_by - computed: false, optional: true, required: false
  private _fieldOptionallyEnclosedBy?: string;
  public get fieldOptionallyEnclosedBy() {
    return this.getStringAttribute('field_optionally_enclosed_by');
  }
  public set fieldOptionallyEnclosedBy(value: string ) {
    this._fieldOptionallyEnclosedBy = value;
  }
  public resetFieldOptionallyEnclosedBy() {
    this._fieldOptionallyEnclosedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldOptionallyEnclosedByInput() {
    return this._fieldOptionallyEnclosedBy
  }

  // file_extension - computed: false, optional: true, required: false
  private _fileExtension?: string;
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }
  public set fileExtension(value: string ) {
    this._fileExtension = value;
  }
  public resetFileExtension() {
    this._fileExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionInput() {
    return this._fileExtension
  }

  // format_type - computed: false, optional: false, required: true
  private _formatType: string;
  public get formatType() {
    return this.getStringAttribute('format_type');
  }
  public set formatType(value: string) {
    this._formatType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatTypeInput() {
    return this._formatType
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_utf8_errors - computed: false, optional: true, required: false
  private _ignoreUtf8Errors?: boolean;
  public get ignoreUtf8Errors() {
    return this.getBooleanAttribute('ignore_utf8_errors');
  }
  public set ignoreUtf8Errors(value: boolean ) {
    this._ignoreUtf8Errors = value;
  }
  public resetIgnoreUtf8Errors() {
    this._ignoreUtf8Errors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUtf8ErrorsInput() {
    return this._ignoreUtf8Errors
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

  // null_if - computed: false, optional: true, required: false
  private _nullIf?: string[];
  public get nullIf() {
    return this.getListAttribute('null_if');
  }
  public set nullIf(value: string[] ) {
    this._nullIf = value;
  }
  public resetNullIf() {
    this._nullIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullIfInput() {
    return this._nullIf
  }

  // preserve_space - computed: false, optional: true, required: false
  private _preserveSpace?: boolean;
  public get preserveSpace() {
    return this.getBooleanAttribute('preserve_space');
  }
  public set preserveSpace(value: boolean ) {
    this._preserveSpace = value;
  }
  public resetPreserveSpace() {
    this._preserveSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSpaceInput() {
    return this._preserveSpace
  }

  // record_delimiter - computed: false, optional: true, required: false
  private _recordDelimiter?: string;
  public get recordDelimiter() {
    return this.getStringAttribute('record_delimiter');
  }
  public set recordDelimiter(value: string ) {
    this._recordDelimiter = value;
  }
  public resetRecordDelimiter() {
    this._recordDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordDelimiterInput() {
    return this._recordDelimiter
  }

  // replace_invalid_characters - computed: false, optional: true, required: false
  private _replaceInvalidCharacters?: boolean;
  public get replaceInvalidCharacters() {
    return this.getBooleanAttribute('replace_invalid_characters');
  }
  public set replaceInvalidCharacters(value: boolean ) {
    this._replaceInvalidCharacters = value;
  }
  public resetReplaceInvalidCharacters() {
    this._replaceInvalidCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidCharactersInput() {
    return this._replaceInvalidCharacters
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

  // skip_blank_lines - computed: false, optional: true, required: false
  private _skipBlankLines?: boolean;
  public get skipBlankLines() {
    return this.getBooleanAttribute('skip_blank_lines');
  }
  public set skipBlankLines(value: boolean ) {
    this._skipBlankLines = value;
  }
  public resetSkipBlankLines() {
    this._skipBlankLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipBlankLinesInput() {
    return this._skipBlankLines
  }

  // skip_byte_order_mark - computed: false, optional: true, required: false
  private _skipByteOrderMark?: boolean;
  public get skipByteOrderMark() {
    return this.getBooleanAttribute('skip_byte_order_mark');
  }
  public set skipByteOrderMark(value: boolean ) {
    this._skipByteOrderMark = value;
  }
  public resetSkipByteOrderMark() {
    this._skipByteOrderMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipByteOrderMarkInput() {
    return this._skipByteOrderMark
  }

  // skip_header - computed: false, optional: true, required: false
  private _skipHeader?: number;
  public get skipHeader() {
    return this.getNumberAttribute('skip_header');
  }
  public set skipHeader(value: number ) {
    this._skipHeader = value;
  }
  public resetSkipHeader() {
    this._skipHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipHeaderInput() {
    return this._skipHeader
  }

  // strip_null_values - computed: false, optional: true, required: false
  private _stripNullValues?: boolean;
  public get stripNullValues() {
    return this.getBooleanAttribute('strip_null_values');
  }
  public set stripNullValues(value: boolean ) {
    this._stripNullValues = value;
  }
  public resetStripNullValues() {
    this._stripNullValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripNullValuesInput() {
    return this._stripNullValues
  }

  // strip_outer_array - computed: false, optional: true, required: false
  private _stripOuterArray?: boolean;
  public get stripOuterArray() {
    return this.getBooleanAttribute('strip_outer_array');
  }
  public set stripOuterArray(value: boolean ) {
    this._stripOuterArray = value;
  }
  public resetStripOuterArray() {
    this._stripOuterArray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripOuterArrayInput() {
    return this._stripOuterArray
  }

  // strip_outer_element - computed: false, optional: true, required: false
  private _stripOuterElement?: boolean;
  public get stripOuterElement() {
    return this.getBooleanAttribute('strip_outer_element');
  }
  public set stripOuterElement(value: boolean ) {
    this._stripOuterElement = value;
  }
  public resetStripOuterElement() {
    this._stripOuterElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripOuterElementInput() {
    return this._stripOuterElement
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string;
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string ) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat
  }

  // timestamp_format - computed: false, optional: true, required: false
  private _timestampFormat?: string;
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string ) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat
  }

  // trim_space - computed: false, optional: true, required: false
  private _trimSpace?: boolean;
  public get trimSpace() {
    return this.getBooleanAttribute('trim_space');
  }
  public set trimSpace(value: boolean ) {
    this._trimSpace = value;
  }
  public resetTrimSpace() {
    this._trimSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimSpaceInput() {
    return this._trimSpace
  }

  // validate_utf8 - computed: false, optional: true, required: false
  private _validateUtf8?: boolean;
  public get validateUtf8() {
    return this.getBooleanAttribute('validate_utf8');
  }
  public set validateUtf8(value: boolean ) {
    this._validateUtf8 = value;
  }
  public resetValidateUtf8() {
    this._validateUtf8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateUtf8Input() {
    return this._validateUtf8
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_duplicate: cdktf.booleanToTerraform(this._allowDuplicate),
      binary_as_text: cdktf.booleanToTerraform(this._binaryAsText),
      binary_format: cdktf.stringToTerraform(this._binaryFormat),
      comment: cdktf.stringToTerraform(this._comment),
      compression: cdktf.stringToTerraform(this._compression),
      database: cdktf.stringToTerraform(this._database),
      date_format: cdktf.stringToTerraform(this._dateFormat),
      disable_auto_convert: cdktf.booleanToTerraform(this._disableAutoConvert),
      disable_snowflake_data: cdktf.booleanToTerraform(this._disableSnowflakeData),
      empty_field_as_null: cdktf.booleanToTerraform(this._emptyFieldAsNull),
      enable_octal: cdktf.booleanToTerraform(this._enableOctal),
      encoding: cdktf.stringToTerraform(this._encoding),
      error_on_column_count_mismatch: cdktf.booleanToTerraform(this._errorOnColumnCountMismatch),
      escape: cdktf.stringToTerraform(this._escape),
      escape_unenclosed_field: cdktf.stringToTerraform(this._escapeUnenclosedField),
      field_delimiter: cdktf.stringToTerraform(this._fieldDelimiter),
      field_optionally_enclosed_by: cdktf.stringToTerraform(this._fieldOptionallyEnclosedBy),
      file_extension: cdktf.stringToTerraform(this._fileExtension),
      format_type: cdktf.stringToTerraform(this._formatType),
      ignore_utf8_errors: cdktf.booleanToTerraform(this._ignoreUtf8Errors),
      name: cdktf.stringToTerraform(this._name),
      null_if: cdktf.listMapper(cdktf.stringToTerraform)(this._nullIf),
      preserve_space: cdktf.booleanToTerraform(this._preserveSpace),
      record_delimiter: cdktf.stringToTerraform(this._recordDelimiter),
      replace_invalid_characters: cdktf.booleanToTerraform(this._replaceInvalidCharacters),
      schema: cdktf.stringToTerraform(this._schema),
      skip_blank_lines: cdktf.booleanToTerraform(this._skipBlankLines),
      skip_byte_order_mark: cdktf.booleanToTerraform(this._skipByteOrderMark),
      skip_header: cdktf.numberToTerraform(this._skipHeader),
      strip_null_values: cdktf.booleanToTerraform(this._stripNullValues),
      strip_outer_array: cdktf.booleanToTerraform(this._stripOuterArray),
      strip_outer_element: cdktf.booleanToTerraform(this._stripOuterElement),
      time_format: cdktf.stringToTerraform(this._timeFormat),
      timestamp_format: cdktf.stringToTerraform(this._timestampFormat),
      trim_space: cdktf.booleanToTerraform(this._trimSpace),
      validate_utf8: cdktf.booleanToTerraform(this._validateUtf8),
    };
  }
}
