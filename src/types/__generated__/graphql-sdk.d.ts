export type Maybe<T> = T | undefined | null;
export type InputMaybe<T> = T | undefined | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Alias: { input: string; output: string };
  Blob: { input: string; output: string };
  /**
   * A datetime with timezone offset.
   *
   * The input is a string in RFC3339 format, e.g. "2022-01-12T04:00:19.12345Z"
   * or "2022-01-12T04:00:19+03:00". The output is also a string in RFC3339
   * format, but it is always normalized to the UTC (Z) offset, e.g.
   * "2022-01-12T04:00:19.12345Z".
   */
  DateTime: { input: Date; output: Date };
  HTTPQL: { input: string; output: string };
  Image: { input: string; output: string };
  /** A scalar that can represent any JSON value. */
  JSON: { input: Record<string, unknown>; output: Record<string, unknown> };
  JsonObject: {
    input: Record<string, unknown>;
    output: Record<string, unknown>;
  };
  Port: { input: number; output: number };
  Rank: { input: string; output: string };
  Sensitive: { input: string; output: string };
  Snapshot: { input: number; output: number };
  Timestamp: { input: Date; output: Date };
  Token: { input: string; output: string };
  Upload: { input: File; output: File };
  Uri: { input: string; output: string };
  /** URL is a String implementing the [URL Standard](http://url.spec.whatwg.org/) */
  Url: { input: string; output: string };
};

export type AliasTakenUserError = UserError & {
  alias: Scalars["String"]["output"];
  code: Scalars["String"]["output"];
};

export const Alteration = {
  Manual: "MANUAL",
  None: "NONE",
  Tamper: "TAMPER",
} as const;

export type Alteration = (typeof Alteration)[keyof typeof Alteration];
export const AssistantErrorReason = {
  ContextExceeded: "CONTEXT_EXCEEDED",
  InvalidModel: "INVALID_MODEL",
  Offline: "OFFLINE",
  QuotaExceeded: "QUOTA_EXCEEDED",
  Unknown: "UNKNOWN",
} as const;

export type AssistantErrorReason =
  (typeof AssistantErrorReason)[keyof typeof AssistantErrorReason];
export type AssistantMessage = {
  content: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  role: AssistantMessageRole;
  session: AssistantSession;
};

/** An edge in a connection. */
export type AssistantMessageEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: AssistantMessage;
};

export const AssistantMessageRole = {
  Assistant: "ASSISTANT",
  System: "SYSTEM",
  User: "USER",
} as const;

export type AssistantMessageRole =
  (typeof AssistantMessageRole)[keyof typeof AssistantMessageRole];
export type AssistantMessageTask = {
  error?: Maybe<AssistantMessageTaskError>;
  id: Scalars["ID"]["output"];
  message?: Maybe<AssistantMessage>;
  session: AssistantSession;
};

export type AssistantMessageTaskError =
  | AssistantUserError
  | AuthenticationUserError
  | OtherUserError;

export type AssistantModel = {
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  tokenCredit: Scalars["Int"]["output"];
};

export type AssistantSession = {
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  messages: Array<AssistantMessage>;
  modelId: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

/** An edge in a connection. */
export type AssistantSessionEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: AssistantSession;
};

export type AssistantUsage = {
  balance: Scalars["Int"]["output"];
};

export type AssistantUserError = UserError & {
  code: Scalars["String"]["output"];
  reason: AssistantErrorReason;
};

export const AuthenticationErrorReason = {
  CloudError: "CLOUD_ERROR",
  CloudUnavailable: "CLOUD_UNAVAILABLE",
  Denied: "DENIED",
  Expired: "EXPIRED",
  Internal: "INTERNAL",
  Invalid: "INVALID",
  StaleDate: "STALE_DATE",
} as const;

export type AuthenticationErrorReason =
  (typeof AuthenticationErrorReason)[keyof typeof AuthenticationErrorReason];
export type AuthenticationRequest = {
  expiresAt: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  userCode: Scalars["String"]["output"];
  verificationUrl: Scalars["Url"]["output"];
};

export const AuthenticationScope = {
  Assistant: "ASSISTANT",
  Offline: "OFFLINE",
  ProfileRead: "PROFILE_READ",
} as const;

export type AuthenticationScope =
  (typeof AuthenticationScope)[keyof typeof AuthenticationScope];
export type AuthenticationToken = {
  accessToken: Scalars["Token"]["output"];
  expiresAt: Scalars["DateTime"]["output"];
  refreshToken?: Maybe<Scalars["Token"]["output"]>;
  scopes: Array<AuthenticationScope>;
};

export type AuthenticationUserError = UserError & {
  code: Scalars["String"]["output"];
  reason: AuthenticationErrorReason;
};

export type AutomateConcurrencySetting = {
  delay: Scalars["Int"]["output"];
  workers: Scalars["Int"]["output"];
};

export type AutomateConcurrencySettingInput = {
  delay: Scalars["Int"]["input"];
  workers: Scalars["Int"]["input"];
};

export type AutomateEntry = {
  connection: ConnectionInfo;
  createdAt: Scalars["Timestamp"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  raw: Scalars["Blob"]["output"];
  requests: AutomateEntryRequestConnection;
  requestsByOffset: AutomateEntryRequestConnection;
  session: AutomateSession;
  settings: AutomateSettings;
};

export type AutomateEntryRequestsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<AutomateEntryRequestOrderInput>;
};

export type AutomateEntryRequestsByOffsetArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<AutomateEntryRequestOrderInput>;
};

/** An edge in a connection. */
export type AutomateEntryEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: AutomateEntry;
};

export type AutomateEntryRequest = {
  automateEntryId: Scalars["ID"]["output"];
  error?: Maybe<Scalars["String"]["output"]>;
  payloads: Array<AutomateEntryRequestPayload>;
  request: Request;
  sequenceId: Scalars["ID"]["output"];
};

export type AutomateEntryRequestConnection = {
  count: Count;
  /** A list of edges. */
  edges: Array<AutomateEntryRequestEdge>;
  /** A list of nodes. */
  nodes: Array<AutomateEntryRequest>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  snapshot: Scalars["Snapshot"]["output"];
};

/** An edge in a connection. */
export type AutomateEntryRequestEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: AutomateEntryRequest;
};

export const AutomateEntryRequestOrderBy = {
  Id: "ID",
  Payload_0: "PAYLOAD_0",
  Payload_1: "PAYLOAD_1",
  Payload_2: "PAYLOAD_2",
  Payload_3: "PAYLOAD_3",
  Payload_4: "PAYLOAD_4",
  Position: "POSITION",
  RespLength: "RESP_LENGTH",
  RespRoundtripTime: "RESP_ROUNDTRIP_TIME",
  RespStatusCode: "RESP_STATUS_CODE",
} as const;

export type AutomateEntryRequestOrderBy =
  (typeof AutomateEntryRequestOrderBy)[keyof typeof AutomateEntryRequestOrderBy];
export type AutomateEntryRequestOrderInput = {
  by: AutomateEntryRequestOrderBy;
  ordering: Ordering;
};

export type AutomateEntryRequestPayload = {
  position?: Maybe<Scalars["Int"]["output"]>;
  raw?: Maybe<Scalars["Blob"]["output"]>;
};

export type AutomateHostedFilePayload = {
  delimiter?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
};

export type AutomateHostedFilePayloadInput = {
  delimiter?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
};

export type AutomateNullPayload = {
  quantity: Scalars["Int"]["output"];
};

export type AutomateNullPayloadInput = {
  quantity: Scalars["Int"]["input"];
};

export type AutomatePayload = {
  kind: AutomatePayloadKind;
  options: AutomatePayloadOptions;
  preprocessors: Array<AutomatePreprocessor>;
  urlEncode: AutomateUrlEncodeOptions;
};

export type AutomatePayloadInput = {
  kind: AutomatePayloadKind;
  options: AutomatePayloadOptionsInput;
  preprocessors: Array<AutomatePreprocessorInput>;
  urlEncode: AutomateUrlEncodeOptionsInput;
};

export const AutomatePayloadKind = {
  HostedFile: "HOSTED_FILE",
  Null: "NULL",
  SimpleList: "SIMPLE_LIST",
} as const;

export type AutomatePayloadKind =
  (typeof AutomatePayloadKind)[keyof typeof AutomatePayloadKind];
export type AutomatePayloadOptions =
  | AutomateHostedFilePayload
  | AutomateNullPayload
  | AutomateSimpleListPayload;

export type AutomatePayloadOptionsInput = {
  hostedFile?: InputMaybe<AutomateHostedFilePayloadInput>;
  null?: InputMaybe<AutomateNullPayloadInput>;
  simpleList?: InputMaybe<AutomateSimpleListPayloadInput>;
};

export const AutomatePayloadStrategy = {
  All: "ALL",
  Matrix: "MATRIX",
  Parallel: "PARALLEL",
  Sequential: "SEQUENTIAL",
} as const;

export type AutomatePayloadStrategy =
  (typeof AutomatePayloadStrategy)[keyof typeof AutomatePayloadStrategy];
export type AutomatePlaceholder = {
  end: Scalars["Int"]["output"];
  start: Scalars["Int"]["output"];
};

export type AutomatePlaceholderInput = {
  end: Scalars["Int"]["input"];
  start: Scalars["Int"]["input"];
};

export type AutomatePrefixPreprocessor = {
  value: Scalars["String"]["output"];
};

export type AutomatePrefixPreprocessorInput = {
  value: Scalars["String"]["input"];
};

export type AutomatePreprocessor = {
  kind: AutomatePreprocessorKind;
  options: AutomatePreprocessorOptions;
};

export type AutomatePreprocessorInput = {
  kind: AutomatePreprocessorKind;
  options: AutomatePreprocessorOptionsInput;
};

export const AutomatePreprocessorKind = {
  Prefix: "PREFIX",
  Suffix: "SUFFIX",
} as const;

export type AutomatePreprocessorKind =
  (typeof AutomatePreprocessorKind)[keyof typeof AutomatePreprocessorKind];
export type AutomatePreprocessorOptions =
  | AutomatePrefixPreprocessor
  | AutomateSuffixPreprocessor;

export type AutomatePreprocessorOptionsInput = {
  prefix?: InputMaybe<AutomatePrefixPreprocessorInput>;
  suffix?: InputMaybe<AutomateSuffixPreprocessorInput>;
};

export type AutomateRetryOnFailureSetting = {
  backoff: Scalars["Int"]["output"];
  maximumRetries: Scalars["Int"]["output"];
};

export type AutomateRetryOnFailureSettingInput = {
  backoff: Scalars["Int"]["input"];
  maximumRetries: Scalars["Int"]["input"];
};

export type AutomateSession = {
  connection: ConnectionInfo;
  createdAt: Scalars["Timestamp"]["output"];
  entries: Array<AutomateEntry>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  raw: Scalars["Blob"]["output"];
  settings: AutomateSettings;
};

export type AutomateSessionConnection = {
  count: Count;
  /** A list of edges. */
  edges: Array<AutomateSessionEdge>;
  /** A list of nodes. */
  nodes: Array<AutomateSession>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  snapshot: Scalars["Snapshot"]["output"];
};

/** An edge in a connection. */
export type AutomateSessionEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: AutomateSession;
};

export type AutomateSettings = {
  closeConnection: Scalars["Boolean"]["output"];
  concurrency?: Maybe<AutomateConcurrencySetting>;
  payloads: Array<AutomatePayload>;
  placeholders: Array<AutomatePlaceholder>;
  retryOnFailure: AutomateRetryOnFailureSetting;
  strategy: AutomatePayloadStrategy;
  updateContentLength: Scalars["Boolean"]["output"];
};

export type AutomateSettingsInput = {
  closeConnection: Scalars["Boolean"]["input"];
  concurrency?: InputMaybe<AutomateConcurrencySettingInput>;
  payloads: Array<AutomatePayloadInput>;
  placeholders: Array<AutomatePlaceholderInput>;
  retryOnFailure: AutomateRetryOnFailureSettingInput;
  strategy: AutomatePayloadStrategy;
  updateContentLength: Scalars["Boolean"]["input"];
};

export type AutomateSimpleListPayload = {
  list: Array<Scalars["String"]["output"]>;
};

export type AutomateSimpleListPayloadInput = {
  list: Array<Scalars["String"]["input"]>;
};

export type AutomateSuffixPreprocessor = {
  value: Scalars["String"]["output"];
};

export type AutomateSuffixPreprocessorInput = {
  value: Scalars["String"]["input"];
};

export type AutomateTask = {
  entry: AutomateEntry;
  id: Scalars["ID"]["output"];
  paused: Scalars["Boolean"]["output"];
};

export type AutomateTaskConnection = {
  count: Count;
  /** A list of edges. */
  edges: Array<AutomateTaskEdge>;
  /** A list of nodes. */
  nodes: Array<AutomateTask>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  snapshot: Scalars["Snapshot"]["output"];
};

/** An edge in a connection. */
export type AutomateTaskEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: AutomateTask;
};

export const AutomateTaskErrorReason = {
  Internal: "INTERNAL",
  InvalidHostedFile: "INVALID_HOSTED_FILE",
} as const;

export type AutomateTaskErrorReason =
  (typeof AutomateTaskErrorReason)[keyof typeof AutomateTaskErrorReason];
export type AutomateTaskUserError = UserError & {
  code: Scalars["String"]["output"];
  reason: AutomateTaskErrorReason;
};

export type AutomateUrlEncodeOptions = {
  charset?: Maybe<Scalars["String"]["output"]>;
  enabled: Scalars["Boolean"]["output"];
  nonAscii: Scalars["Boolean"]["output"];
};

export type AutomateUrlEncodeOptionsInput = {
  charset?: InputMaybe<Scalars["String"]["input"]>;
  enabled: Scalars["Boolean"]["input"];
  nonAscii: Scalars["Boolean"]["input"];
};

export type Backup = {
  createdAt: Scalars["DateTime"]["output"];
  downloadUri?: Maybe<Scalars["Uri"]["output"]>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  path: Scalars["String"]["output"];
  project?: Maybe<Project>;
  size: Scalars["Int"]["output"];
  status: BackupStatus;
  updatedAt: Scalars["DateTime"]["output"];
};

export const BackupErrorReason = {
  Invalid: "INVALID",
  NotDone: "NOT_DONE",
} as const;

export type BackupErrorReason =
  (typeof BackupErrorReason)[keyof typeof BackupErrorReason];
export type BackupSource =
  | { backupId: Scalars["ID"]["input"]; file?: never }
  | { backupId?: never; file: Scalars["Upload"]["input"] };

export const BackupStatus = {
  Done: "DONE",
  Error: "ERROR",
  Processing: "PROCESSING",
} as const;

export type BackupStatus = (typeof BackupStatus)[keyof typeof BackupStatus];
export type BackupTask = {
  backup: Backup;
  id: Scalars["ID"]["output"];
};

export type BackupTaskError =
  | BackupUserError
  | InternalUserError
  | OtherUserError;

export type BackupUserError = UserError & {
  code: Scalars["String"]["output"];
  reason: BackupErrorReason;
};

export type Browser = {
  id: Scalars["ID"]["output"];
  installedAt: Scalars["DateTime"]["output"];
  latest: Scalars["Boolean"]["output"];
  path: Scalars["String"]["output"];
  size: Scalars["Int"]["output"];
  version: Scalars["String"]["output"];
};

export type CancelAutomateTaskError = OtherUserError | UnknownIdUserError;

export type CancelAutomateTaskPayload = {
  cancelledId?: Maybe<Scalars["ID"]["output"]>;
  userError?: Maybe<CancelAutomateTaskError>;
};

export type CancelBackupTaskError = OtherUserError | UnknownIdUserError;

export type CancelBackupTaskPayload = {
  cancelledId?: Maybe<Scalars["ID"]["output"]>;
  error?: Maybe<CancelBackupTaskError>;
};

export type CancelDataExportTaskPayload = {
  cancelledId?: Maybe<Scalars["ID"]["output"]>;
  userError?: Maybe<CancelExportTaskError>;
};

export type CancelExportTaskError = OtherUserError | UnknownIdUserError;

export type CancelReplayTaskPayload = {
  cancelledId: Scalars["ID"]["output"];
};

export type CancelRestoreBackupTaskError = OtherUserError | UnknownIdUserError;

export type CancelRestoreBackupTaskPayload = {
  cancelledId?: Maybe<Scalars["ID"]["output"]>;
  error?: Maybe<CancelRestoreBackupTaskError>;
};

export type ConnectionInfo = {
  host: Scalars["String"]["output"];
  isTls: Scalars["Boolean"]["output"];
  port: Scalars["Port"]["output"];
};

export type ConnectionInfoInput = {
  host: Scalars["String"]["input"];
  isTLS: Scalars["Boolean"]["input"];
  port: Scalars["Port"]["input"];
};

export type Count = {
  snapshot: Scalars["Snapshot"]["output"];
  value: Scalars["Int"]["output"];
};

export type CreateAssistantSessionError =
  | OtherUserError
  | PermissionDeniedUserError;

export type CreateAssistantSessionInput = {
  modelId: Scalars["ID"]["input"];
  systemMessage?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateAssistantSessionPayload = {
  error?: Maybe<CreateAssistantSessionError>;
  session?: Maybe<AssistantSession>;
};

export type CreateAutomateSessionInput = {
  requestSource?: InputMaybe<RequestSourceInput>;
};

export type CreateAutomateSessionPayload = {
  session?: Maybe<AutomateSession>;
};

export type CreateBackupError =
  | OtherUserError
  | PermissionDeniedUserError
  | TaskInProgressUserError;

export type CreateBackupPayload = {
  error?: Maybe<CreateBackupError>;
  task?: Maybe<BackupTask>;
};

export type CreateFilterPresetError =
  | AliasTakenUserError
  | NameTakenUserError
  | OtherUserError
  | PermissionDeniedUserError;

export type CreateFilterPresetInput = {
  alias: Scalars["Alias"]["input"];
  clause: Scalars["JSON"]["input"];
  name: Scalars["String"]["input"];
};

export type CreateFilterPresetPayload = {
  error?: Maybe<CreateFilterPresetError>;
  filter?: Maybe<FilterPreset>;
};

export type CreateProjectInput = {
  name: Scalars["String"]["input"];
};

export type CreateProjectPayload = {
  error?: Maybe<CreateProjectPayloadError>;
  project?: Maybe<Project>;
};

export type CreateProjectPayloadError =
  | NameTakenUserError
  | OtherUserError
  | PermissionDeniedUserError;

export type CreateReplaySessionCollectionInput = {
  name: Scalars["String"]["input"];
};

export type CreateReplaySessionCollectionPayload = {
  collection?: Maybe<ReplaySessionCollection>;
};

export type CreateReplaySessionInput = {
  collectionId?: InputMaybe<Scalars["ID"]["input"]>;
  requestSource?: InputMaybe<RequestSourceInput>;
};

export type CreateReplaySessionPayload = {
  session?: Maybe<ReplaySession>;
};

export type CreateScopeError = InvalidGlobTermsUserError | OtherUserError;

export type CreateScopeInput = {
  allowlist: Array<Scalars["String"]["input"]>;
  denylist: Array<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
};

export type CreateScopePayload = {
  error?: Maybe<CreateScopeError>;
  scope?: Maybe<Scope>;
};

export type CreateSitemapEntriesError = OtherUserError | UnknownIdUserError;

export type CreateSitemapEntriesPayload = {
  error?: Maybe<CreateSitemapEntriesError>;
};

export type CreateTamperRuleCollectionInput = {
  name: Scalars["String"]["input"];
};

export type CreateTamperRuleCollectionPayload = {
  collection?: Maybe<TamperRuleCollection>;
};

export type CreateTamperRuleError =
  | InvalidHttpqlUserError
  | InvalidRegexUserError
  | OtherUserError;

export type CreateTamperRuleInput = {
  collectionId: Scalars["ID"]["input"];
  condition?: InputMaybe<Scalars["HTTPQL"]["input"]>;
  isEnabled: Scalars["Boolean"]["input"];
  isRegex: Scalars["Boolean"]["input"];
  matchTerm: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  replaceTerm: Scalars["String"]["input"];
  strategy: TamperStrategy;
};

export type CreateTamperRulePayload = {
  error?: Maybe<CreateTamperRuleError>;
  rule?: Maybe<TamperRule>;
};

export type CreateUpstreamProxyInput = {
  allowlist: Array<Scalars["String"]["input"]>;
  auth?: InputMaybe<UpstreamProxyAuthInput>;
  denylist: Array<Scalars["String"]["input"]>;
  enabled: Scalars["Boolean"]["input"];
  host: Scalars["String"]["input"];
  kind: UpstreamProxyKind;
  port: Scalars["Port"]["input"];
};

export type CreateUpstreamProxyPayload = {
  proxy?: Maybe<UpstreamProxy>;
};

export type CreateWorkflowError = OtherUserError | WorkflowUserError;

export type CreateWorkflowInput = {
  definition: Scalars["JsonObject"]["input"];
  global: Scalars["Boolean"]["input"];
};

export type CreateWorkflowPayload = {
  error?: Maybe<CreateWorkflowError>;
  workflow?: Maybe<Workflow>;
};

export type CreatedAssistantMessagePayload = {
  messageEdge: AssistantMessageEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type CreatedAssistantMessageTaskPayload = {
  task: AssistantMessageTask;
};

export type CreatedAssistantSessionPayload = {
  sessionEdge: AssistantSessionEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type CreatedAuthenticationTokenError =
  | AuthenticationUserError
  | OtherUserError;

export type CreatedAuthenticationTokenPayload = {
  error?: Maybe<CreatedAuthenticationTokenError>;
  token?: Maybe<AuthenticationToken>;
};

export type CreatedAutomateEntryPayload = {
  automateEntryEdge: AutomateEntryEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type CreatedAutomateEntryRequestPayload = {
  automateEntryRequestEdge: AutomateEntryRequestEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type CreatedAutomateEntryRequestPayloadAutomateEntryRequestEdgeArgs = {
  order?: InputMaybe<AutomateEntryRequestOrderInput>;
};

export type CreatedAutomateSessionPayload = {
  automateSessionEdge: AutomateSessionEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type CreatedAutomateTaskPayload = {
  automateTaskEdge: AutomateTaskEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type CreatedBackupPayload = {
  backup: Backup;
};

export type CreatedDataExportPayload = {
  dataExportEdge: DataExportEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type CreatedDataExportTaskPayload = {
  exportTaskEdge: DataExportTaskEdge;
};

export type CreatedFilterPresetPayload = {
  filterEdge: FilterPresetEdge;
};

export type CreatedFindingPayload = {
  findingEdge: FindingEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type CreatedFindingPayloadFindingEdgeArgs = {
  order?: InputMaybe<FindingOrderInput>;
};

export type CreatedInterceptEntryPayload = {
  interceptEntryEdge: InterceptEntryEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type CreatedInterceptEntryPayloadInterceptEntryEdgeArgs = {
  order?: InputMaybe<InterceptEntryOrderInput>;
};

export type CreatedInterceptMessagePayload = {
  messageEdge: InterceptMessageEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type CreatedProjectPayload = {
  project: Project;
};

export type CreatedReplaySessionCollectionPayload = {
  collectionEdge: ReplaySessionCollectionEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type CreatedReplaySessionPayload = {
  sessionEdge: ReplaySessionEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type CreatedRequestPayload = {
  requestEdge: RequestEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type CreatedRequestPayloadRequestEdgeArgs = {
  order?: InputMaybe<RequestResponseOrderInput>;
};

export type CreatedScopePayload = {
  scopeEdge: ScopeEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type CreatedSitemapEntryPayload = {
  ancestorIds: Array<Scalars["ID"]["output"]>;
  requestEdge?: Maybe<RequestEdge>;
  sitemapEntryEdge: SitemapEntryEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type CreatedSitemapEntryPayloadRequestEdgeArgs = {
  order?: InputMaybe<RequestResponseOrderInput>;
};

export type CreatedStreamPayload = {
  snapshot: Scalars["Snapshot"]["output"];
  streamEdge: StreamEdge;
};

export type CreatedStreamPayloadStreamEdgeArgs = {
  order?: InputMaybe<StreamOrderInput>;
};

export type CreatedStreamWsMessagePayload = {
  messageEdge: StreamWsMessageEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type CreatedStreamWsMessagePayloadMessageEdgeArgs = {
  order?: InputMaybe<StreamWsMessageOrderInput>;
};

export type CreatedTamperRuleCollectionPayload = {
  collectionEdge: TamperRuleCollectionEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type CreatedTamperRulePayload = {
  ruleEdge: TamperRuleEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type CreatedWorkflowPayload = {
  workflowEdge: WorkflowEdge;
};

export type DataExport = {
  createdAt: Scalars["DateTime"]["output"];
  downloadUri?: Maybe<Scalars["Uri"]["output"]>;
  error?: Maybe<Scalars["String"]["output"]>;
  format: DataExportFormat;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  path: Scalars["String"]["output"];
  size: Scalars["Int"]["output"];
  status: DataExportStatus;
};

/** An edge in a connection. */
export type DataExportEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: DataExport;
};

export const DataExportFormat = {
  Csv: "CSV",
  Json: "JSON",
} as const;

export type DataExportFormat =
  (typeof DataExportFormat)[keyof typeof DataExportFormat];
export type DataExportSettings = {
  includeRaw: Scalars["Boolean"]["input"];
};

export const DataExportStatus = {
  Cancelled: "CANCELLED",
  Done: "DONE",
  Error: "ERROR",
  Processing: "PROCESSING",
} as const;

export type DataExportStatus =
  (typeof DataExportStatus)[keyof typeof DataExportStatus];
export type DataExportTask = {
  export: DataExport;
  id: Scalars["ID"]["output"];
};

/** An edge in a connection. */
export type DataExportTaskEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: DataExportTask;
};

export type DeleteAssistantSessionPayload = {
  deletedId?: Maybe<Scalars["ID"]["output"]>;
};

export type DeleteAutomateEntriesPayload = {
  deletedIds: Array<Scalars["ID"]["output"]>;
  errors: Array<DeleteAutomateEntryError>;
};

export type DeleteAutomateEntryError = OtherUserError | TaskInProgressUserError;

export type DeleteAutomateSessionPayload = {
  deletedId?: Maybe<Scalars["ID"]["output"]>;
};

export type DeleteBackupError = OtherUserError | TaskInProgressUserError;

export type DeleteBackupPayload = {
  deletedId?: Maybe<Scalars["ID"]["output"]>;
  error?: Maybe<DeleteBackupError>;
};

export type DeleteBrowserPayload = {
  deletedId?: Maybe<Scalars["ID"]["output"]>;
};

export type DeleteDataExportError = OtherUserError | TaskInProgressUserError;

export type DeleteDataExportPayload = {
  deletedId?: Maybe<Scalars["ID"]["output"]>;
  userError?: Maybe<DeleteDataExportError>;
};

export type DeleteFilterPresetPayload = {
  deletedId?: Maybe<Scalars["ID"]["output"]>;
};

export type DeleteFindingsPayload = {
  deletedIds?: Maybe<Array<Scalars["ID"]["output"]>>;
};

export type DeleteHostedFilePayload = {
  deletedId?: Maybe<Scalars["ID"]["output"]>;
};

export type DeleteInterceptEntriesError =
  | OtherUserError
  | TaskInProgressUserError;

export type DeleteInterceptEntriesPayload = {
  task?: Maybe<DeleteInterceptEntriesTask>;
  userError?: Maybe<DeleteInterceptEntriesError>;
};

export type DeleteInterceptEntriesTask = {
  deletedEntryIds: Array<Scalars["ID"]["output"]>;
  id: Scalars["ID"]["output"];
};

export type DeleteInterceptEntriesTaskError =
  | InternalUserError
  | OtherUserError;

export type DeleteInterceptEntryError = OtherUserError | UnknownIdUserError;

export type DeleteInterceptEntryPayload = {
  deletedId?: Maybe<Scalars["ID"]["output"]>;
  userError?: Maybe<DeleteInterceptEntryError>;
};

export type DeleteProjectPayload = {
  deletedId?: Maybe<Scalars["ID"]["output"]>;
  error?: Maybe<DeleteProjectPayloadError>;
};

export type DeleteProjectPayloadError = OtherUserError | ProjectLockedUserError;

export type DeleteReplaySessionCollectionPayload = {
  deletedId?: Maybe<Scalars["ID"]["output"]>;
};

export type DeleteReplaySessionsPayload = {
  deletedIds?: Maybe<Array<Scalars["ID"]["output"]>>;
};

export type DeleteScopePayload = {
  deletedId: Scalars["ID"]["output"];
};

export type DeleteTamperRuleCollectionPayload = {
  deletedId?: Maybe<Scalars["ID"]["output"]>;
};

export type DeleteTamperRulePayload = {
  deletedId?: Maybe<Scalars["ID"]["output"]>;
};

export type DeleteUpstreamProxyPayload = {
  deletedId?: Maybe<Scalars["ID"]["output"]>;
};

export type DeleteWorkflowPayload = {
  deletedId?: Maybe<Scalars["ID"]["output"]>;
};

export type DeletedAssistantSessionPayload = {
  deletedSessionId: Scalars["ID"]["output"];
  snapshot: Scalars["Snapshot"]["output"];
};

export type DeletedAutomateEntryPayload = {
  deletedAutomateEntryId: Scalars["ID"]["output"];
  snapshot: Scalars["Snapshot"]["output"];
};

export type DeletedAutomateSessionPayload = {
  deletedAutomateSessionId: Scalars["ID"]["output"];
  snapshot: Scalars["Snapshot"]["output"];
};

export type DeletedAutomateTaskError = AutomateTaskUserError | OtherUserError;

export type DeletedAutomateTaskPayload = {
  deletedAutomateTaskId: Scalars["ID"]["output"];
  error?: Maybe<DeletedAutomateTaskError>;
  snapshot: Scalars["Snapshot"]["output"];
};

export type DeletedBackupPayload = {
  deletedBackupId: Scalars["ID"]["output"];
};

export type DeletedBrowserPayload = {
  deletedBrowserId: Scalars["ID"]["output"];
};

export type DeletedDataExportPayload = {
  deletedDataExportId: Scalars["ID"]["output"];
  snapshot: Scalars["Snapshot"]["output"];
};

export type DeletedDataExportTaskPayload = {
  deletedExportTaskId: Scalars["ID"]["output"];
};

export type DeletedFilterPresetPayload = {
  deletedFilterId: Scalars["ID"]["output"];
};

export type DeletedFindingsPayload = {
  deletedFindingIds: Array<Scalars["ID"]["output"]>;
  snapshot: Scalars["Snapshot"]["output"];
};

export type DeletedHostedFilePayload = {
  deletedHostedFileId: Scalars["ID"]["output"];
};

export type DeletedInterceptEntryPayload = {
  deletedEntryId: Scalars["ID"]["output"];
  snapshot: Scalars["Snapshot"]["output"];
};

export type DeletedInterceptMessagePayload = {
  deletedMessageId: Scalars["ID"]["output"];
  snapshot: Scalars["Snapshot"]["output"];
};

export type DeletedProjectPayload = {
  deletedProjectId: Scalars["ID"]["output"];
};

export type DeletedReplaySessionCollectionPayload = {
  deletedCollectionId: Scalars["ID"]["output"];
  snapshot: Scalars["Snapshot"]["output"];
};

export type DeletedReplaySessionPayload = {
  deletedSessionId: Scalars["ID"]["output"];
  snapshot: Scalars["Snapshot"]["output"];
};

export type DeletedScopePayload = {
  deletedScopeId: Scalars["ID"]["output"];
  snapshot: Scalars["Snapshot"]["output"];
};

export type DeletedTamperRuleCollectionPayload = {
  deletedCollectionId: Scalars["ID"]["output"];
  snapshot: Scalars["Snapshot"]["output"];
};

export type DeletedTamperRulePayload = {
  deletedRuleId: Scalars["ID"]["output"];
  snapshot: Scalars["Snapshot"]["output"];
};

export type DeletedWorkflowPayload = {
  deletedWorkflowId: Scalars["ID"]["output"];
};

export type DisableTamperRulePayload = {
  rule?: Maybe<TamperRule>;
};

export type DropInterceptMessagePayload = {
  droppedId?: Maybe<Scalars["ID"]["output"]>;
};

export type DuplicateAutomateSessionPayload = {
  session?: Maybe<AutomateSession>;
};

export type EnableTamperRulePayload = {
  rule?: Maybe<TamperRule>;
};

export type FilterClauseFindingInput = {
  reporter?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterClauseInterceptEntryInput = {
  AND?: InputMaybe<Array<FilterClauseInterceptEntryInput>>;
  OR?: InputMaybe<Array<FilterClauseInterceptEntryInput>>;
  preset?: InputMaybe<FilterExprPresetInput>;
  request?: InputMaybe<FilterClauseRequestInput>;
  response?: InputMaybe<FilterClauseResponseInput>;
};

export type FilterClauseRequestInput = {
  fileExtension?: InputMaybe<FilterExprStringInput>;
  host?: InputMaybe<FilterExprStringInput>;
  method?: InputMaybe<FilterExprStringInput>;
  path?: InputMaybe<FilterExprStringInput>;
  port?: InputMaybe<FilterExprIntInput>;
  query?: InputMaybe<FilterExprStringInput>;
  raw?: InputMaybe<FilterExprStringInput>;
};

export type FilterClauseRequestResponseInput = {
  AND?: InputMaybe<Array<FilterClauseRequestResponseInput>>;
  OR?: InputMaybe<Array<FilterClauseRequestResponseInput>>;
  preset?: InputMaybe<FilterExprPresetInput>;
  request?: InputMaybe<FilterClauseRequestInput>;
  response?: InputMaybe<FilterClauseResponseInput>;
  source?: InputMaybe<FilterExprStringInput>;
};

export type FilterClauseResponseInput = {
  raw?: InputMaybe<FilterExprStringInput>;
  statusCode?: InputMaybe<FilterExprIntInput>;
};

export type FilterExprIntInput = {
  operator: FilterOperatorInt;
  value?: InputMaybe<Scalars["Int"]["input"]>;
};

export type FilterExprPresetInput = {
  id: Scalars["ID"]["input"];
};

export type FilterExprStringInput = {
  operator: FilterOperatorString;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

export const FilterOperatorInt = {
  Eq: "EQ",
  Gt: "GT",
  Gte: "GTE",
  Lt: "LT",
  Lte: "LTE",
  Ne: "NE",
} as const;

export type FilterOperatorInt =
  (typeof FilterOperatorInt)[keyof typeof FilterOperatorInt];
export const FilterOperatorString = {
  Cont: "CONT",
  Eq: "EQ",
  Like: "LIKE",
  Ncont: "NCONT",
  Ne: "NE",
  Nlike: "NLIKE",
  Nregex: "NREGEX",
  Regex: "REGEX",
} as const;

export type FilterOperatorString =
  (typeof FilterOperatorString)[keyof typeof FilterOperatorString];
export type FilterPreset = {
  alias: Scalars["Alias"]["output"];
  clause: Scalars["JSON"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

/** An edge in a connection. */
export type FilterPresetEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: FilterPreset;
};

export type Finding = {
  createdAt: Scalars["Timestamp"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  host: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  path: Scalars["String"]["output"];
  reporter: Scalars["String"]["output"];
  request: Request;
  title: Scalars["String"]["output"];
};

export type FindingConnection = {
  count: Count;
  /** A list of edges. */
  edges: Array<FindingEdge>;
  /** A list of nodes. */
  nodes: Array<Finding>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  snapshot: Scalars["Snapshot"]["output"];
};

/** An edge in a connection. */
export type FindingEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Finding;
};

export const FindingOrderBy = {
  CreatedAt: "CREATED_AT",
  Host: "HOST",
  Id: "ID",
  Path: "PATH",
  Reporter: "REPORTER",
  Title: "TITLE",
} as const;

export type FindingOrderBy =
  (typeof FindingOrderBy)[keyof typeof FindingOrderBy];
export type FindingOrderInput = {
  by: FindingOrderBy;
  ordering: Ordering;
};

export type FinishedBackupTaskCancelled = {
  taskId: Scalars["ID"]["output"];
};

export type FinishedBackupTaskError = {
  error: BackupTaskError;
  taskId: Scalars["ID"]["output"];
};

export type FinishedBackupTaskPayload =
  | FinishedBackupTaskCancelled
  | FinishedBackupTaskError
  | FinishedBackupTaskSuccess;

export type FinishedBackupTaskSuccess = {
  task: BackupTask;
};

export type FinishedDeleteInterceptEntriesTaskPayload = {
  error?: Maybe<DeleteInterceptEntriesTaskError>;
  task: DeleteInterceptEntriesTask;
};

export type FinishedRestoreBackupTaskCancelled = {
  taskId: Scalars["ID"]["output"];
};

export type FinishedRestoreBackupTaskError = {
  error: RestoreBackupTaskError;
  taskId: Scalars["ID"]["output"];
};

export type FinishedRestoreBackupTaskPayload =
  | FinishedRestoreBackupTaskCancelled
  | FinishedRestoreBackupTaskError
  | FinishedRestoreBackupTaskSuccess;

export type FinishedRestoreBackupTaskSuccess = {
  task: RestoreBackupTask;
};

export type ForwardInterceptMessageInput =
  | { request: ForwardInterceptRequestMessageInput; response?: never }
  | { request?: never; response: ForwardInterceptResponseMessageInput };

export type ForwardInterceptMessagePayload = {
  forwardedId?: Maybe<Scalars["ID"]["output"]>;
};

export type ForwardInterceptRequestMessageInput = {
  updateContentLength: Scalars["Boolean"]["input"];
  updateRaw: Scalars["Blob"]["input"];
};

export type ForwardInterceptResponseMessageInput = {
  updateContentLength: Scalars["Boolean"]["input"];
  updateRaw: Scalars["Blob"]["input"];
};

export type GlobalConfig = {
  address: Scalars["String"]["output"];
  onboarding: OnboardingState;
};

export type GlobalizeWorkflowError =
  | OtherUserError
  | UnknownIdUserError
  | WorkflowUserError;

export type GlobalizeWorkflowPayload = {
  error?: Maybe<GlobalizeWorkflowError>;
  workflow?: Maybe<Workflow>;
};

export type HostedFile = {
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  path: Scalars["String"]["output"];
  size: Scalars["Int"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type InstallBrowserError = OtherUserError | UnsupportedPlatformUserError;

export type InstallBrowserPayload = {
  browser?: Maybe<Browser>;
  error?: Maybe<InstallBrowserError>;
};

export type InterceptEntry = {
  id: Scalars["ID"]["output"];
  request: Request;
};

export type InterceptEntryConnection = {
  count: Count;
  /** A list of edges. */
  edges: Array<InterceptEntryEdge>;
  /** A list of nodes. */
  nodes: Array<InterceptEntry>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  snapshot: Scalars["Snapshot"]["output"];
};

/** An edge in a connection. */
export type InterceptEntryEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: InterceptEntry;
};

export const InterceptEntryOrderBy = {
  Id: "ID",
  ReqCreatedAt: "REQ_CREATED_AT",
  ReqFileExtension: "REQ_FILE_EXTENSION",
  ReqHost: "REQ_HOST",
  ReqMethod: "REQ_METHOD",
  ReqPath: "REQ_PATH",
  ReqQuery: "REQ_QUERY",
  RespLength: "RESP_LENGTH",
  RespRoundtripTime: "RESP_ROUNDTRIP_TIME",
  RespStatusCode: "RESP_STATUS_CODE",
} as const;

export type InterceptEntryOrderBy =
  (typeof InterceptEntryOrderBy)[keyof typeof InterceptEntryOrderBy];
export type InterceptEntryOrderInput = {
  by: InterceptEntryOrderBy;
  ordering: Ordering;
};

export const InterceptKind = {
  Request: "REQUEST",
  Response: "RESPONSE",
} as const;

export type InterceptKind = (typeof InterceptKind)[keyof typeof InterceptKind];
export type InterceptMessage = {
  id: Scalars["ID"]["output"];
};

export type InterceptMessageConnection = {
  count: Count;
  /** A list of edges. */
  edges: Array<InterceptMessageEdge>;
  /** A list of nodes. */
  nodes: Array<InterceptMessage>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  snapshot: Scalars["Snapshot"]["output"];
};

/** An edge in a connection. */
export type InterceptMessageEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: InterceptMessage;
};

export type InterceptOptions = {
  request: InterceptRequestOptions;
  response: InterceptResponseOptions;
  scope?: Maybe<InterceptScopeOptions>;
};

export type InterceptOptionsInput = {
  request: InterceptRequestOptionsInput;
  response: InterceptResponseOptionsInput;
  scope?: InputMaybe<InterceptScopeOptionsInput>;
};

export type InterceptRequestMessage = InterceptMessage & {
  id: Scalars["ID"]["output"];
  request: Request;
};

export type InterceptRequestOptions = {
  enabled: Scalars["Boolean"]["output"];
};

export type InterceptRequestOptionsInput = {
  enabled: Scalars["Boolean"]["input"];
};

export type InterceptResponseMessage = InterceptMessage & {
  id: Scalars["ID"]["output"];
  request: Request;
  response: Response;
};

export type InterceptResponseOptions = {
  enabled: Scalars["Boolean"]["output"];
};

export type InterceptResponseOptionsInput = {
  enabled: Scalars["Boolean"]["input"];
};

export type InterceptScopeOptions = {
  scopeId: Scalars["ID"]["output"];
};

export type InterceptScopeOptionsInput = {
  scopeId: Scalars["ID"]["input"];
};

export const InterceptStatus = {
  Paused: "PAUSED",
  Running: "RUNNING",
} as const;

export type InterceptStatus =
  (typeof InterceptStatus)[keyof typeof InterceptStatus];
export type InternalUserError = UserError & {
  code: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

export type InvalidGlobTermsUserError = UserError & {
  code: Scalars["String"]["output"];
  terms: Array<Scalars["String"]["output"]>;
};

export type InvalidHttpqlUserError = UserError & {
  code: Scalars["String"]["output"];
  query: Scalars["String"]["output"];
};

export type InvalidRegexUserError = UserError & {
  code: Scalars["String"]["output"];
  term: Scalars["String"]["output"];
};

export type LogoutPayload = {
  success: Scalars["Boolean"]["output"];
};

export type MoveReplaySessionPayload = {
  session?: Maybe<ReplaySession>;
};

export type MoveTamperRulePayload = {
  rule?: Maybe<TamperRule>;
};

export type MutationRoot = {
  cancelAutomateTask: CancelAutomateTaskPayload;
  cancelBackupTask: CancelBackupTaskPayload;
  cancelDataExportTask: CancelDataExportTaskPayload;
  cancelReplayTask: CancelReplayTaskPayload;
  cancelRestoreBackupTask: CancelRestoreBackupTaskPayload;
  createAssistantSession: CreateAssistantSessionPayload;
  createAutomateSession: CreateAutomateSessionPayload;
  createBackup: CreateBackupPayload;
  createFilterPreset: CreateFilterPresetPayload;
  createProject: CreateProjectPayload;
  createReplaySession: CreateReplaySessionPayload;
  createReplaySessionCollection: CreateReplaySessionCollectionPayload;
  createScope: CreateScopePayload;
  createSitemapEntries: CreateSitemapEntriesPayload;
  createTamperRule: CreateTamperRulePayload;
  createTamperRuleCollection: CreateTamperRuleCollectionPayload;
  createUpstreamProxy: CreateUpstreamProxyPayload;
  createWorkflow: CreateWorkflowPayload;
  deleteAssistantSession: DeleteAssistantSessionPayload;
  deleteAutomateEntries: DeleteAutomateEntriesPayload;
  deleteAutomateSession: DeleteAutomateSessionPayload;
  deleteBackup: DeleteBackupPayload;
  deleteBrowser: DeleteBrowserPayload;
  deleteDataExport: DeleteDataExportPayload;
  deleteFilterPreset: DeleteFilterPresetPayload;
  deleteFindings: DeleteFindingsPayload;
  deleteHostedFile: DeleteHostedFilePayload;
  deleteInterceptEntries: DeleteInterceptEntriesPayload;
  deleteInterceptEntry: DeleteInterceptEntryPayload;
  deleteProject: DeleteProjectPayload;
  deleteReplaySessionCollection: DeleteReplaySessionCollectionPayload;
  deleteReplaySessions: DeleteReplaySessionsPayload;
  deleteScope: DeleteScopePayload;
  deleteTamperRule: DeleteTamperRulePayload;
  deleteTamperRuleCollection: DeleteTamperRuleCollectionPayload;
  deleteUpstreamProxy: DeleteUpstreamProxyPayload;
  deleteWorkflow: DeleteWorkflowPayload;
  disableTamperRule: DisableTamperRulePayload;
  dropInterceptMessage: DropInterceptMessagePayload;
  duplicateAutomateSession: DuplicateAutomateSessionPayload;
  enableTamperRule: EnableTamperRulePayload;
  forwardInterceptMessage: ForwardInterceptMessagePayload;
  globalizeWorkflow: GlobalizeWorkflowPayload;
  installBrowser: InstallBrowserPayload;
  logout: LogoutPayload;
  moveReplaySession: MoveReplaySessionPayload;
  moveTamperRule: MoveTamperRulePayload;
  pauseAutomateTask: PauseAutomateTaskPayload;
  pauseIntercept: PauseInterceptPayload;
  rankTamperRule: RankTamperRulePayload;
  rankUpstreamProxy: RankUpstreamProxyPayload;
  refreshAuthenticationToken: RefreshAuthenticationTokenPayload;
  renameAssistantSession: RenameAssistantSessionPayload;
  renameAutomateEntry: RenameAutomateEntryPayload;
  renameAutomateSession: RenameAutomateSessionPayload;
  renameBackup: RenameBackupPayload;
  renameDataExport: RenameDataExportPayload;
  renameHostedFile: RenameHostedFilePayload;
  renameProject: RenameProjectPayload;
  renameReplaySession: RenameReplaySessionPayload;
  renameReplaySessionCollection: RenameReplaySessionCollectionPayload;
  renameScope: RenameScopePayload;
  renameTamperRule: RenameTamperRulePayload;
  renameTamperRuleCollection: RenameTamperRuleCollectionPayload;
  renameWorkflow: RenameWorkflowPayload;
  renderRequest: RenderRequestPayload;
  restoreBackup: RestoreBackupPayload;
  resumeAutomateTask: ResumeAutomateTaskPayload;
  resumeIntercept: ResumeInterceptPayload;
  runConvertWorkflow: RunConvertWorkflowPayload;
  selectProject: SelectProjectPayload;
  sendAssistantMessage: SendAssistantMessagePayload;
  /** @deprecated Remove usage, no replacement */
  setActiveReplaySessionEntry: SetActiveReplaySessionEntryPayload;
  setGlobalConfigOnboarding: SetConfigOnboardingPayload;
  setGlobalConfigPort: SetConfigPortPayload;
  setInterceptOptions: SetInterceptOptionsPayload;
  startAuthenticationFlow: StartAuthenticationFlowPayload;
  startAutomateTask: StartAutomateTaskPayload;
  startExportRequestsTask: StartExportRequestsTaskPayload;
  startReplayTask: StartReplayTaskPayload;
  testTamperRule: TestTamperRulePayload;
  testUpstreamProxy: TestUpstreamProxyPayload;
  toggleWorkflow: ToggleWorkflowPayload;
  updateAutomateSession: UpdateAutomateSessionPayload;
  updateBrowser: UpdateBrowserPayload;
  updateFilterPreset: UpdateFilterPresetPayload;
  updateRequestMetadata: UpdateRequestMetadataPayload;
  updateScope: UpdateScopePayload;
  updateTamperRule: UpdateTamperRulePayload;
  updateUpstreamProxy: UpdateUpstreamProxyPayload;
  updateViewerSettings: UpdateViewerSettingsPayload;
  updateWorkflow: UpdateWorkflowPayload;
  uploadHostedFile: UploadHostedFilePayload;
};

export type MutationRootCancelAutomateTaskArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootCancelBackupTaskArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootCancelDataExportTaskArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootCancelReplayTaskArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootCancelRestoreBackupTaskArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootCreateAssistantSessionArgs = {
  input: CreateAssistantSessionInput;
};

export type MutationRootCreateAutomateSessionArgs = {
  input: CreateAutomateSessionInput;
};

export type MutationRootCreateBackupArgs = {
  projectId: Scalars["ID"]["input"];
};

export type MutationRootCreateFilterPresetArgs = {
  input: CreateFilterPresetInput;
};

export type MutationRootCreateProjectArgs = {
  input: CreateProjectInput;
};

export type MutationRootCreateReplaySessionArgs = {
  input: CreateReplaySessionInput;
};

export type MutationRootCreateReplaySessionCollectionArgs = {
  input: CreateReplaySessionCollectionInput;
};

export type MutationRootCreateScopeArgs = {
  input: CreateScopeInput;
};

export type MutationRootCreateSitemapEntriesArgs = {
  requestId: Scalars["ID"]["input"];
};

export type MutationRootCreateTamperRuleArgs = {
  input: CreateTamperRuleInput;
};

export type MutationRootCreateTamperRuleCollectionArgs = {
  input: CreateTamperRuleCollectionInput;
};

export type MutationRootCreateUpstreamProxyArgs = {
  input: CreateUpstreamProxyInput;
};

export type MutationRootCreateWorkflowArgs = {
  input: CreateWorkflowInput;
};

export type MutationRootDeleteAssistantSessionArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootDeleteAutomateEntriesArgs = {
  ids: Array<Scalars["ID"]["input"]>;
};

export type MutationRootDeleteAutomateSessionArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootDeleteBackupArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootDeleteDataExportArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootDeleteFilterPresetArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootDeleteFindingsArgs = {
  ids: Array<Scalars["ID"]["input"]>;
};

export type MutationRootDeleteHostedFileArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootDeleteInterceptEntriesArgs = {
  filter?: InputMaybe<FilterClauseInterceptEntryInput>;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationRootDeleteInterceptEntryArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootDeleteProjectArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootDeleteReplaySessionCollectionArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootDeleteReplaySessionsArgs = {
  ids: Array<Scalars["ID"]["input"]>;
};

export type MutationRootDeleteScopeArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootDeleteTamperRuleArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootDeleteTamperRuleCollectionArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootDeleteUpstreamProxyArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootDeleteWorkflowArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootDisableTamperRuleArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootDropInterceptMessageArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootDuplicateAutomateSessionArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootEnableTamperRuleArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootForwardInterceptMessageArgs = {
  id: Scalars["ID"]["input"];
  input?: InputMaybe<ForwardInterceptMessageInput>;
};

export type MutationRootGlobalizeWorkflowArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootMoveReplaySessionArgs = {
  collectionId: Scalars["ID"]["input"];
  id: Scalars["ID"]["input"];
};

export type MutationRootMoveTamperRuleArgs = {
  collectionId: Scalars["ID"]["input"];
  id: Scalars["ID"]["input"];
};

export type MutationRootPauseAutomateTaskArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootRankTamperRuleArgs = {
  id: Scalars["ID"]["input"];
  input: RankTamperRuleInput;
};

export type MutationRootRankUpstreamProxyArgs = {
  id: Scalars["ID"]["input"];
  input: RankUpstreamProxyInput;
};

export type MutationRootRefreshAuthenticationTokenArgs = {
  refreshToken: Scalars["Token"]["input"];
};

export type MutationRootRenameAssistantSessionArgs = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationRootRenameAutomateEntryArgs = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationRootRenameAutomateSessionArgs = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationRootRenameBackupArgs = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationRootRenameDataExportArgs = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationRootRenameHostedFileArgs = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationRootRenameProjectArgs = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationRootRenameReplaySessionArgs = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationRootRenameReplaySessionCollectionArgs = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationRootRenameScopeArgs = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationRootRenameTamperRuleArgs = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationRootRenameTamperRuleCollectionArgs = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationRootRenameWorkflowArgs = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationRootRenderRequestArgs = {
  id: Scalars["ID"]["input"];
  input: RenderRequestInput;
};

export type MutationRootRestoreBackupArgs = {
  input: RestoreBackupInput;
};

export type MutationRootResumeAutomateTaskArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootRunConvertWorkflowArgs = {
  id: Scalars["ID"]["input"];
  input: Scalars["Blob"]["input"];
};

export type MutationRootSelectProjectArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRootSendAssistantMessageArgs = {
  message?: InputMaybe<Scalars["String"]["input"]>;
  sessionId: Scalars["ID"]["input"];
};

export type MutationRootSetActiveReplaySessionEntryArgs = {
  entryId: Scalars["ID"]["input"];
  id: Scalars["ID"]["input"];
};

export type MutationRootSetGlobalConfigOnboardingArgs = {
  input: SetConfigOnboardingInput;
};

export type MutationRootSetGlobalConfigPortArgs = {
  input: Scalars["Int"]["input"];
};

export type MutationRootSetInterceptOptionsArgs = {
  input: InterceptOptionsInput;
};

export type MutationRootStartAutomateTaskArgs = {
  automateSessionId: Scalars["ID"]["input"];
};

export type MutationRootStartExportRequestsTaskArgs = {
  input: StartExportRequestsTaskInput;
};

export type MutationRootStartReplayTaskArgs = {
  input: StartReplayTaskInput;
  replaySessionId: Scalars["ID"]["input"];
};

export type MutationRootTestTamperRuleArgs = {
  input: TestTamperRuleInput;
};

export type MutationRootTestUpstreamProxyArgs = {
  input: TestUpstreamProxyInput;
};

export type MutationRootToggleWorkflowArgs = {
  enabled: Scalars["Boolean"]["input"];
  id: Scalars["ID"]["input"];
};

export type MutationRootUpdateAutomateSessionArgs = {
  id: Scalars["ID"]["input"];
  input: UpdateAutomateSessionInput;
};

export type MutationRootUpdateFilterPresetArgs = {
  id: Scalars["ID"]["input"];
  input: UpdateFilterPresetInput;
};

export type MutationRootUpdateRequestMetadataArgs = {
  id: Scalars["ID"]["input"];
  input: UpdateRequestMetadataInput;
};

export type MutationRootUpdateScopeArgs = {
  id: Scalars["ID"]["input"];
  input: UpdateScopeInput;
};

export type MutationRootUpdateTamperRuleArgs = {
  id: Scalars["ID"]["input"];
  input: UpdateTamperRuleInput;
};

export type MutationRootUpdateUpstreamProxyArgs = {
  id: Scalars["ID"]["input"];
  input: UpdateUpstreamProxyInput;
};

export type MutationRootUpdateViewerSettingsArgs = {
  input: UpdateViewerSettingsInput;
};

export type MutationRootUpdateWorkflowArgs = {
  id: Scalars["ID"]["input"];
  input: UpdateWorkflowInput;
};

export type MutationRootUploadHostedFileArgs = {
  input: UploadHostedFileInput;
};

export type NameTakenUserError = UserError & {
  code: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

export type OnboardingState = {
  caCertificate: Scalars["Boolean"]["output"];
  license: Scalars["Boolean"]["output"];
  project: Scalars["Boolean"]["output"];
};

export const Ordering = {
  Asc: "ASC",
  Desc: "DESC",
} as const;

export type Ordering = (typeof Ordering)[keyof typeof Ordering];
export type OtherUserError = UserError & {
  code: Scalars["String"]["output"];
};

/** Information about pagination in a connection */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]["output"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

export type PauseAutomateTaskError = OtherUserError | UnknownIdUserError;

export type PauseAutomateTaskPayload = {
  automateTask?: Maybe<AutomateTask>;
  userError?: Maybe<PauseAutomateTaskError>;
};

export type PauseInterceptPayload = {
  status: InterceptStatus;
};

export const PermissionDeniedErrorReason = {
  Entitlement: "ENTITLEMENT",
} as const;

export type PermissionDeniedErrorReason =
  (typeof PermissionDeniedErrorReason)[keyof typeof PermissionDeniedErrorReason];
export type PermissionDeniedUserError = UserError & {
  code: Scalars["String"]["output"];
  reason: PermissionDeniedErrorReason;
};

export type Project = {
  backups: Array<Backup>;
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  path: Scalars["String"]["output"];
  size: Scalars["Int"]["output"];
  status: ProjectStatus;
  updatedAt: Scalars["DateTime"]["output"];
  version: Scalars["String"]["output"];
};

export const ProjectLockedErrorReason = {
  Deleting: "DELETING",
  Exporting: "EXPORTING",
  NotReady: "NOT_READY",
} as const;

export type ProjectLockedErrorReason =
  (typeof ProjectLockedErrorReason)[keyof typeof ProjectLockedErrorReason];
export type ProjectLockedUserError = UserError & {
  code: Scalars["String"]["output"];
  reason: ProjectLockedErrorReason;
};

export const ProjectStatus = {
  Error: "ERROR",
  Ready: "READY",
  Restoring: "RESTORING",
} as const;

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];
export type QueryRoot = {
  assistantModels: Array<AssistantModel>;
  assistantSession?: Maybe<AssistantSession>;
  assistantSessions: Array<AssistantSession>;
  automateEntry?: Maybe<AutomateEntry>;
  automateSession?: Maybe<AutomateSession>;
  automateSessions: AutomateSessionConnection;
  automateTasks: AutomateTaskConnection;
  backup?: Maybe<Backup>;
  backupTasks: Array<BackupTask>;
  backups: Array<Backup>;
  browser?: Maybe<Browser>;
  currentProject?: Maybe<Project>;
  dataExport?: Maybe<DataExport>;
  dataExportTasks: Array<DataExportTask>;
  dataExports: Array<DataExport>;
  filterPreset?: Maybe<FilterPreset>;
  filterPresets: Array<FilterPreset>;
  finding?: Maybe<Finding>;
  findingReporters: Array<Scalars["String"]["output"]>;
  findings: FindingConnection;
  findingsByOffset: FindingConnection;
  globalConfig: GlobalConfig;
  hostedFiles: Array<HostedFile>;
  interceptEntries: InterceptEntryConnection;
  interceptEntriesByOffset: InterceptEntryConnection;
  interceptEntry?: Maybe<InterceptEntry>;
  interceptMessages: InterceptMessageConnection;
  interceptOptions: InterceptOptions;
  interceptStatus: InterceptStatus;
  projects: Array<Project>;
  replayEntry?: Maybe<ReplayEntry>;
  replaySession?: Maybe<ReplaySession>;
  replaySessionCollections: ReplaySessionCollectionConnection;
  replaySessions: ReplaySessionConnection;
  request?: Maybe<Request>;
  requests: RequestConnection;
  requestsByOffset: RequestConnection;
  response?: Maybe<Response>;
  restoreBackupTasks: Array<RestoreBackupTask>;
  runtime: Runtime;
  scope?: Maybe<Scope>;
  scopes: Array<Scope>;
  sitemapDescendantEntries: SitemapEntryConnection;
  sitemapEntry?: Maybe<SitemapEntry>;
  sitemapRootEntries: SitemapEntryConnection;
  stream?: Maybe<Stream>;
  streamWsMessage?: Maybe<StreamWsMessage>;
  streamWsMessages: StreamWsMessageConnection;
  streamWsMessagesByOffset: StreamWsMessageConnection;
  streams: StreamConnection;
  streamsByOffset: StreamConnection;
  tamperRule?: Maybe<TamperRule>;
  tamperRuleCollection?: Maybe<TamperRuleCollection>;
  tamperRuleCollections: TamperRuleCollectionConnection;
  upstreamProxies: Array<UpstreamProxy>;
  viewer: User;
  workflow?: Maybe<Workflow>;
  workflowNodeDefinitions: Array<WorkflowNodeDefinition>;
  workflows: Array<Workflow>;
};

export type QueryRootAssistantSessionArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRootAutomateEntryArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRootAutomateSessionArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRootAutomateSessionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryRootAutomateTasksArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryRootBackupArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRootDataExportArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRootFilterPresetArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRootFindingArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRootFindingsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<FilterClauseFindingInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<FindingOrderInput>;
};

export type QueryRootFindingsByOffsetArgs = {
  filter?: InputMaybe<FilterClauseFindingInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<FindingOrderInput>;
};

export type QueryRootInterceptEntriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<FilterClauseInterceptEntryInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<InterceptEntryOrderInput>;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryRootInterceptEntriesByOffsetArgs = {
  filter?: InputMaybe<FilterClauseInterceptEntryInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<InterceptEntryOrderInput>;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryRootInterceptEntryArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRootInterceptMessagesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  kind: InterceptKind;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryRootReplayEntryArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRootReplaySessionArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRootReplaySessionCollectionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryRootReplaySessionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryRootRequestArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRootRequestsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<FilterClauseRequestResponseInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<RequestResponseOrderInput>;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryRootRequestsByOffsetArgs = {
  filter?: InputMaybe<FilterClauseRequestResponseInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<RequestResponseOrderInput>;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryRootResponseArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRootScopeArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRootSitemapDescendantEntriesArgs = {
  depth: SitemapDescendantsDepth;
  parentId: Scalars["ID"]["input"];
};

export type QueryRootSitemapEntryArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRootSitemapRootEntriesArgs = {
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryRootStreamArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRootStreamWsMessageArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRootStreamWsMessagesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<StreamWsMessageOrderInput>;
  streamId: Scalars["ID"]["input"];
};

export type QueryRootStreamWsMessagesByOffsetArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<StreamWsMessageOrderInput>;
  streamId: Scalars["ID"]["input"];
};

export type QueryRootStreamsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<StreamOrderInput>;
  protocol: StreamProtocol;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryRootStreamsByOffsetArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<StreamOrderInput>;
  protocol: StreamProtocol;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryRootTamperRuleArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRootTamperRuleCollectionArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRootTamperRuleCollectionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryRootWorkflowArgs = {
  id: Scalars["ID"]["input"];
};

export type RankTamperRuleInput = {
  afterId?: InputMaybe<Scalars["ID"]["input"]>;
  beforeId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type RankTamperRulePayload = {
  rule?: Maybe<TamperRule>;
};

export type RankUpstreamProxyInput = {
  afterId?: InputMaybe<Scalars["ID"]["input"]>;
  beforeId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type RankUpstreamProxyPayload = {
  proxy?: Maybe<UpstreamProxy>;
};

export type RefreshAuthenticationTokenError =
  | AuthenticationUserError
  | OtherUserError;

export type RefreshAuthenticationTokenPayload = {
  error?: Maybe<RefreshAuthenticationTokenError>;
  token?: Maybe<AuthenticationToken>;
};

export type Release = {
  links: Array<ReleaseLink>;
  releasedAt: Scalars["DateTime"]["output"];
  version: Scalars["String"]["output"];
};

export type ReleaseLink = {
  display: Scalars["String"]["output"];
  link: Scalars["String"]["output"];
  platform: Scalars["String"]["output"];
};

export type RenameAssistantSessionPayload = {
  session?: Maybe<AssistantSession>;
};

export type RenameAutomateEntryPayload = {
  entry?: Maybe<AutomateEntry>;
};

export type RenameAutomateSessionPayload = {
  session?: Maybe<AutomateSession>;
};

export type RenameBackupPayload = {
  backup?: Maybe<Backup>;
};

export type RenameDataExportPayload = {
  export?: Maybe<DataExport>;
};

export type RenameHostedFilePayload = {
  hostedFile?: Maybe<HostedFile>;
};

export type RenameProjectPayload = {
  error?: Maybe<RenameProjectPayloadError>;
  project?: Maybe<Project>;
};

export type RenameProjectPayloadError = NameTakenUserError | OtherUserError;

export type RenameReplaySessionCollectionPayload = {
  collection?: Maybe<ReplaySessionCollection>;
};

export type RenameReplaySessionPayload = {
  session?: Maybe<ReplaySession>;
};

export type RenameScopePayload = {
  scope: Scope;
};

export type RenameTamperRuleCollectionPayload = {
  collection?: Maybe<TamperRuleCollection>;
};

export type RenameTamperRulePayload = {
  rule?: Maybe<TamperRule>;
};

export type RenameWorkflowError = OtherUserError | UnknownIdUserError;

export type RenameWorkflowPayload = {
  error?: Maybe<RenameWorkflowError>;
  workflow?: Maybe<Workflow>;
};

export const RenderFailedErrorReason = {
  Internal: "INTERNAL",
  NoBrowser: "NO_BROWSER",
  NoData: "NO_DATA",
  Timeout: "TIMEOUT",
} as const;

export type RenderFailedErrorReason =
  (typeof RenderFailedErrorReason)[keyof typeof RenderFailedErrorReason];
export type RenderFailedUserError = UserError & {
  code: Scalars["String"]["output"];
  reason: RenderFailedErrorReason;
};

export type RenderRequestError = OtherUserError | RenderFailedUserError;

export type RenderRequestInput = {
  height: Scalars["Int"]["input"];
  width: Scalars["Int"]["input"];
};

export type RenderRequestPayload = {
  error?: Maybe<RenderRequestError>;
  render?: Maybe<Scalars["Image"]["output"]>;
};

export type ReplayEntry = {
  error?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  request: Request;
  sessionId: Scalars["ID"]["output"];
};

export type ReplayEntryConnection = {
  count: Count;
  /** A list of edges. */
  edges: Array<ReplayEntryEdge>;
  /** A list of nodes. */
  nodes: Array<ReplayEntry>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  snapshot: Scalars["Snapshot"]["output"];
};

/** An edge in a connection. */
export type ReplayEntryEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: ReplayEntry;
};

export const ReplayEntryOrderBy = {
  Id: "ID",
} as const;

export type ReplayEntryOrderBy =
  (typeof ReplayEntryOrderBy)[keyof typeof ReplayEntryOrderBy];
export type ReplayEntryOrderInput = {
  by: ReplayEntryOrderBy;
  ordering: Ordering;
};

export type ReplaySession = {
  activeEntry?: Maybe<ReplayEntry>;
  collection: ReplaySessionCollection;
  entries: ReplayEntryConnection;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type ReplaySessionEntriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<ReplayEntryOrderInput>;
};

export type ReplaySessionCollection = {
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  sessions: Array<ReplaySession>;
};

export type ReplaySessionCollectionConnection = {
  count: Count;
  /** A list of edges. */
  edges: Array<ReplaySessionCollectionEdge>;
  /** A list of nodes. */
  nodes: Array<ReplaySessionCollection>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  snapshot: Scalars["Snapshot"]["output"];
};

/** An edge in a connection. */
export type ReplaySessionCollectionEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: ReplaySessionCollection;
};

export type ReplaySessionConnection = {
  count: Count;
  /** A list of edges. */
  edges: Array<ReplaySessionEdge>;
  /** A list of nodes. */
  nodes: Array<ReplaySession>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  snapshot: Scalars["Snapshot"]["output"];
};

/** An edge in a connection. */
export type ReplaySessionEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: ReplaySession;
};

export type ReplayTask = {
  error?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  replayEntry?: Maybe<ReplayEntry>;
};

/** An edge in a connection. */
export type ReplayTaskEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: ReplayTask;
};

export type Request = {
  alteration: Alteration;
  createdAt: Scalars["Timestamp"]["output"];
  edited: Scalars["Boolean"]["output"];
  edits: Array<Request>;
  fileExtension?: Maybe<Scalars["String"]["output"]>;
  host: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  isTls: Scalars["Boolean"]["output"];
  length: Scalars["Int"]["output"];
  metadata: RequestMetadata;
  method: Scalars["String"]["output"];
  path: Scalars["String"]["output"];
  port: Scalars["Port"]["output"];
  query: Scalars["String"]["output"];
  raw: Scalars["Blob"]["output"];
  response?: Maybe<Response>;
  source: Source;
  stream?: Maybe<Stream>;
};

export type RequestConnection = {
  count: Count;
  /** A list of edges. */
  edges: Array<RequestEdge>;
  /** A list of nodes. */
  nodes: Array<Request>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  snapshot: Scalars["Snapshot"]["output"];
};

/** An edge in a connection. */
export type RequestEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Request;
};

export type RequestMetadata = {
  color?: Maybe<Scalars["String"]["output"]>;
};

export type RequestOptions = {
  withTls: Scalars["Boolean"]["input"];
  withUpdatedContentLength: Scalars["Boolean"]["input"];
};

export type RequestRawInput = {
  connectionInfo: ConnectionInfoInput;
  raw: Scalars["Blob"]["input"];
};

export const RequestResponseOrderBy = {
  CreatedAt: "CREATED_AT",
  FileExtension: "FILE_EXTENSION",
  Host: "HOST",
  Id: "ID",
  Method: "METHOD",
  Path: "PATH",
  Query: "QUERY",
  RespLength: "RESP_LENGTH",
  RespRoundtripTime: "RESP_ROUNDTRIP_TIME",
  RespStatusCode: "RESP_STATUS_CODE",
  Source: "SOURCE",
} as const;

export type RequestResponseOrderBy =
  (typeof RequestResponseOrderBy)[keyof typeof RequestResponseOrderBy];
export type RequestResponseOrderInput = {
  by: RequestResponseOrderBy;
  ordering: Ordering;
};

export type RequestSourceInput =
  | { id: Scalars["ID"]["input"]; raw?: never }
  | { id?: never; raw: RequestRawInput };

export type Response = {
  alteration: Alteration;
  createdAt: Scalars["Timestamp"]["output"];
  edited: Scalars["Boolean"]["output"];
  edits: Array<Response>;
  id: Scalars["ID"]["output"];
  length: Scalars["Int"]["output"];
  raw: Scalars["Blob"]["output"];
  roundtripTime: Scalars["Int"]["output"];
  statusCode: Scalars["Int"]["output"];
};

export type RestoreBackupError =
  | NameTakenUserError
  | OtherUserError
  | PermissionDeniedUserError;

export type RestoreBackupInput = {
  name: Scalars["String"]["input"];
  source: BackupSource;
};

export type RestoreBackupPayload = {
  error?: Maybe<RestoreBackupError>;
  task?: Maybe<RestoreBackupTask>;
};

export type RestoreBackupTask = {
  backup?: Maybe<Backup>;
  id: Scalars["ID"]["output"];
  project: Project;
};

export type RestoreBackupTaskError =
  | BackupUserError
  | InternalUserError
  | OtherUserError;

export type ResumeAutomateTaskError = OtherUserError | UnknownIdUserError;

export type ResumeAutomateTaskPayload = {
  automateTask?: Maybe<AutomateTask>;
  userError?: Maybe<ResumeAutomateTaskError>;
};

export type ResumeInterceptPayload = {
  status: InterceptStatus;
};

export type RunConvertWorkflowError =
  | OtherUserError
  | PermissionDeniedUserError
  | WorkflowUserError;

export type RunConvertWorkflowPayload = {
  error?: Maybe<RunConvertWorkflowError>;
  output?: Maybe<Scalars["Blob"]["output"]>;
};

export type Runtime = {
  availableUpdate?: Maybe<Release>;
  platform: Scalars["String"]["output"];
  version: Scalars["String"]["output"];
};

export type Scope = {
  allowlist: Array<Scalars["String"]["output"]>;
  denylist: Array<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  indexed: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
};

/** An edge in a connection. */
export type ScopeEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Scope;
};

export type SelectProjectPayload = {
  error?: Maybe<SelectProjectPayloadError>;
  project?: Maybe<Project>;
};

export type SelectProjectPayloadError = OtherUserError | ProjectLockedUserError;

export type SendAssistantMessageError =
  | OtherUserError
  | PermissionDeniedUserError
  | TaskInProgressUserError;

export type SendAssistantMessagePayload = {
  error?: Maybe<SendAssistantMessageError>;
  task?: Maybe<AssistantMessageTask>;
};

export type SetActiveReplaySessionEntryPayload = {
  session?: Maybe<ReplaySession>;
};

export type SetConfigOnboardingInput = {
  caCertificate: Scalars["Boolean"]["input"];
  license: Scalars["Boolean"]["input"];
  project: Scalars["Boolean"]["input"];
};

export type SetConfigOnboardingPayload = {
  config: GlobalConfig;
};

export type SetConfigPortPayload = {
  config: GlobalConfig;
};

export type SetInterceptOptionsPayload = {
  options: InterceptOptions;
};

export const SitemapDescendantsDepth = {
  All: "ALL",
  Direct: "DIRECT",
} as const;

export type SitemapDescendantsDepth =
  (typeof SitemapDescendantsDepth)[keyof typeof SitemapDescendantsDepth];
export type SitemapEntry = {
  hasDescendants: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  kind: SitemapEntryKind;
  label: Scalars["String"]["output"];
  metadata?: Maybe<SitemapEntryMetadata>;
  parentId?: Maybe<Scalars["ID"]["output"]>;
  request?: Maybe<Request>;
  requests: RequestConnection;
};

export type SitemapEntryRequestsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<RequestResponseOrderInput>;
};

export type SitemapEntryConnection = {
  count: Count;
  /** A list of edges. */
  edges: Array<SitemapEntryEdge>;
  /** A list of nodes. */
  nodes: Array<SitemapEntry>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  snapshot: Scalars["Snapshot"]["output"];
};

/** An edge in a connection. */
export type SitemapEntryEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: SitemapEntry;
};

export const SitemapEntryKind = {
  Directory: "DIRECTORY",
  Domain: "DOMAIN",
  Request: "REQUEST",
  RequestBody: "REQUEST_BODY",
  RequestQuery: "REQUEST_QUERY",
} as const;

export type SitemapEntryKind =
  (typeof SitemapEntryKind)[keyof typeof SitemapEntryKind];
export type SitemapEntryMetadata = SitemapEntryMetadataDomain;

export type SitemapEntryMetadataDomain = {
  isTls: Scalars["Boolean"]["output"];
  port: Scalars["Port"]["output"];
};

export const Source = {
  Automate: "AUTOMATE",
  Intercept: "INTERCEPT",
  Replay: "REPLAY",
  Workflow: "WORKFLOW",
} as const;

export type Source = (typeof Source)[keyof typeof Source];
export type StartAuthenticationFlowError =
  | AuthenticationUserError
  | OtherUserError;

export type StartAuthenticationFlowPayload = {
  error?: Maybe<StartAuthenticationFlowError>;
  request?: Maybe<AuthenticationRequest>;
};

export type StartAutomateTaskPayload = {
  automateTask?: Maybe<AutomateTask>;
};

export type StartExportRequestsTaskInput = {
  filter?: InputMaybe<FilterClauseRequestResponseInput>;
  format: DataExportFormat;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
  settings: DataExportSettings;
};

export type StartExportRequestsTaskPayload = {
  error?: Maybe<StartExportRequestsTaskPayloadError>;
  task?: Maybe<DataExportTask>;
};

export type StartExportRequestsTaskPayloadError =
  | OtherUserError
  | PermissionDeniedUserError;

export type StartReplayTaskInput = {
  host: Scalars["String"]["input"];
  options: RequestOptions;
  port: Scalars["Port"]["input"];
  raw: Scalars["Blob"]["input"];
};

export type StartReplayTaskPayload = {
  task: ReplayTask;
};

export type StartedBackupTaskPayload = {
  task: BackupTask;
};

export type StartedDeleteInterceptEntriesTaskPayload = {
  task: DeleteInterceptEntriesTask;
};

export type StartedRestoreBackupTaskPayload = {
  task: RestoreBackupTask;
};

export type Stream = {
  createdAt: Scalars["Timestamp"]["output"];
  direction: StreamDirection;
  host: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  isTls: Scalars["Boolean"]["output"];
  path: Scalars["String"]["output"];
  port: Scalars["Port"]["output"];
  protocol: StreamProtocol;
  source: Source;
};

export type StreamConnection = {
  count: Count;
  /** A list of edges. */
  edges: Array<StreamEdge>;
  /** A list of nodes. */
  nodes: Array<Stream>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  snapshot: Scalars["Snapshot"]["output"];
};

export const StreamDirection = {
  Both: "BOTH",
  Client: "CLIENT",
  Server: "SERVER",
} as const;

export type StreamDirection =
  (typeof StreamDirection)[keyof typeof StreamDirection];
/** An edge in a connection. */
export type StreamEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Stream;
};

export const StreamMessageDirection = {
  Client: "CLIENT",
  Server: "SERVER",
} as const;

export type StreamMessageDirection =
  (typeof StreamMessageDirection)[keyof typeof StreamMessageDirection];
export const StreamOrderBy = {
  Id: "ID",
} as const;

export type StreamOrderBy = (typeof StreamOrderBy)[keyof typeof StreamOrderBy];
export type StreamOrderInput = {
  by: StreamOrderBy;
  ordering: Ordering;
};

export const StreamProtocol = {
  Sse: "SSE",
  Ws: "WS",
} as const;

export type StreamProtocol =
  (typeof StreamProtocol)[keyof typeof StreamProtocol];
export type StreamWsMessage = {
  alteration: Alteration;
  createdAt: Scalars["Timestamp"]["output"];
  direction: StreamMessageDirection;
  edited: Scalars["Boolean"]["output"];
  format: StreamWsMessageFormat;
  id: Scalars["ID"]["output"];
  length: Scalars["Int"]["output"];
  raw: Scalars["Blob"]["output"];
  streamId: Scalars["ID"]["output"];
};

export type StreamWsMessageConnection = {
  count: Count;
  /** A list of edges. */
  edges: Array<StreamWsMessageEdge>;
  /** A list of nodes. */
  nodes: Array<StreamWsMessage>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  snapshot: Scalars["Snapshot"]["output"];
};

/** An edge in a connection. */
export type StreamWsMessageEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: StreamWsMessage;
};

export const StreamWsMessageFormat = {
  Binary: "BINARY",
  Text: "TEXT",
} as const;

export type StreamWsMessageFormat =
  (typeof StreamWsMessageFormat)[keyof typeof StreamWsMessageFormat];
export const StreamWsMessageOrderBy = {
  Id: "ID",
} as const;

export type StreamWsMessageOrderBy =
  (typeof StreamWsMessageOrderBy)[keyof typeof StreamWsMessageOrderBy];
export type StreamWsMessageOrderInput = {
  by: StreamWsMessageOrderBy;
  ordering: Ordering;
};

export type SubscriptionRoot = {
  createdAssistantMessage: CreatedAssistantMessagePayload;
  createdAssistantMessageTask: CreatedAssistantMessageTaskPayload;
  createdAssistantSession: CreatedAssistantSessionPayload;
  createdAuthenticationToken: CreatedAuthenticationTokenPayload;
  createdAutomateEntry: CreatedAutomateEntryPayload;
  createdAutomateEntryRequest: CreatedAutomateEntryRequestPayload;
  createdAutomateSession: CreatedAutomateSessionPayload;
  createdAutomateTask: CreatedAutomateTaskPayload;
  createdBackup: CreatedBackupPayload;
  createdDataExport: CreatedDataExportPayload;
  createdDataExportTask: CreatedDataExportTaskPayload;
  createdFilterPreset: CreatedFilterPresetPayload;
  createdFinding: CreatedFindingPayload;
  createdInterceptEntry: CreatedInterceptEntryPayload;
  createdInterceptMessage: CreatedInterceptMessagePayload;
  createdProject: CreatedProjectPayload;
  createdReplaySession: CreatedReplaySessionPayload;
  createdReplaySessionCollection: CreatedReplaySessionCollectionPayload;
  createdRequest: CreatedRequestPayload;
  createdScope: CreatedScopePayload;
  createdSitemapEntry: CreatedSitemapEntryPayload;
  createdStream: CreatedStreamPayload;
  createdStreamWsMessage: CreatedStreamWsMessagePayload;
  createdTamperRule: CreatedTamperRulePayload;
  createdTamperRuleCollection: CreatedTamperRuleCollectionPayload;
  createdWorkflow: CreatedWorkflowPayload;
  deletedAssistantSession: DeletedAssistantSessionPayload;
  deletedAutomateEntry: DeletedAutomateEntryPayload;
  deletedAutomateSession: DeletedAutomateSessionPayload;
  deletedAutomateTask: DeletedAutomateTaskPayload;
  deletedBackup: DeletedBackupPayload;
  deletedBrowser: DeletedBrowserPayload;
  deletedDataExport: DeletedDataExportPayload;
  deletedDataExportTask: DeletedDataExportTaskPayload;
  deletedFilterPreset: DeletedFilterPresetPayload;
  deletedFindings: DeletedFindingsPayload;
  deletedHostedFile: DeletedHostedFilePayload;
  deletedInterceptEntry: DeletedInterceptEntryPayload;
  deletedInterceptMessage: DeletedInterceptMessagePayload;
  deletedProject: DeletedProjectPayload;
  deletedReplaySession: DeletedReplaySessionPayload;
  deletedReplaySessionCollection: DeletedReplaySessionCollectionPayload;
  deletedScope: DeletedScopePayload;
  deletedTamperRule: DeletedTamperRulePayload;
  deletedTamperRuleCollection: DeletedTamperRuleCollectionPayload;
  deletedWorkflow: DeletedWorkflowPayload;
  finishedBackupTask: FinishedBackupTaskPayload;
  finishedDeleteInterceptEntriesTask: FinishedDeleteInterceptEntriesTaskPayload;
  finishedRestoreBackupTask: FinishedRestoreBackupTaskPayload;
  installedBrowser: UploadedBrowserPayload;
  startedBackupTask: StartedBackupTaskPayload;
  startedDeleteInterceptEntriesTask: StartedDeleteInterceptEntriesTaskPayload;
  startedRestoreBackupTask: StartedRestoreBackupTaskPayload;
  updatedAssistantMessageTask: UpdatedAssistantMessageTaskPayload;
  updatedAssistantSession: UpdatedAssistantSessionPayload;
  updatedAutomateEntry: UpdatedAutomateEntryPayload;
  updatedAutomateSession: UpdatedAutomateSessionPayload;
  updatedAutomateTask: UpdatedAutomateTaskPayload;
  updatedBackup: UpdatedBackupPayload;
  updatedBrowser: UpdatedBrowserPayload;
  updatedDataExport: UpdatedDataExportPayload;
  updatedDeleteInterceptEntriesTask: UpdatedDeleteInterceptEntriesTaskPayload;
  updatedFilterPreset: UpdatedFilterPresetPayload;
  updatedHostedFile: UpdatedHostedFilePayload;
  updatedInterceptEntry: UpdatedInterceptEntryPayload;
  updatedInterceptOptions: UpdatedInterceptOptionsPayload;
  updatedInterceptStatus: UpdatedInterceptStatusPayload;
  updatedProject: UpdatedProjectPayload;
  updatedReplaySession: UpdatedReplaySessionPayload;
  updatedReplaySessionCollection: UpdatedReplaySessionCollectionPayload;
  updatedReplayTask: UpdatedReplayTaskPayload;
  updatedRequest: UpdatedRequestPayload;
  updatedRequestMetadata: UpdatedRequestMetadataPayload;
  updatedScope: UpdatedScopePayload;
  updatedSitemapEntry: UpdatedSitemapEntryPayload;
  updatedTamperRule: UpdatedTamperRulePayload;
  updatedTamperRuleCollection: UpdatedTamperRuleCollectionPayload;
  updatedViewerAssistantUsage: UpdatedViewerAssistantUsagePayload;
  updatedViewerSettings: UpdatedViewerSettingsPayload;
  updatedWorkflow: UpdatedWorkflowPayload;
  uploadedHostedFile: UploadedHostedFilePayload;
};

export type SubscriptionRootCreatedAuthenticationTokenArgs = {
  requestId: Scalars["ID"]["input"];
};

export type SubscriptionRootCreatedInterceptEntryArgs = {
  filter?: InputMaybe<FilterClauseInterceptEntryInput>;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type SubscriptionRootCreatedRequestArgs = {
  filter?: InputMaybe<FilterClauseRequestResponseInput>;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type SubscriptionRootCreatedSitemapEntryArgs = {
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type SubscriptionRootCreatedStreamArgs = {
  protocol: StreamProtocol;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type SubscriptionRootUpdatedInterceptEntryArgs = {
  filter?: InputMaybe<FilterClauseInterceptEntryInput>;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type SubscriptionRootUpdatedRequestArgs = {
  filter?: InputMaybe<FilterClauseRequestResponseInput>;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type SubscriptionRootUpdatedSitemapEntryArgs = {
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type TamperRule = {
  collection: TamperRuleCollection;
  condition?: Maybe<Scalars["HTTPQL"]["output"]>;
  id: Scalars["ID"]["output"];
  isEnabled: Scalars["Boolean"]["output"];
  isRegex: Scalars["Boolean"]["output"];
  matchTerm: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  rank: Scalars["Rank"]["output"];
  replaceTerm: Scalars["String"]["output"];
  strategy: TamperStrategy;
};

export type TamperRuleCollection = {
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  rules: Array<TamperRule>;
};

export type TamperRuleCollectionConnection = {
  count: Count;
  /** A list of edges. */
  edges: Array<TamperRuleCollectionEdge>;
  /** A list of nodes. */
  nodes: Array<TamperRuleCollection>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  snapshot: Scalars["Snapshot"]["output"];
};

/** An edge in a connection. */
export type TamperRuleCollectionEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: TamperRuleCollection;
};

/** An edge in a connection. */
export type TamperRuleEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: TamperRule;
};

export const TamperStrategy = {
  RequestBody: "REQUEST_BODY",
  RequestFirstLine: "REQUEST_FIRST_LINE",
  RequestHeader: "REQUEST_HEADER",
  ResponseBody: "RESPONSE_BODY",
  ResponseFirstLine: "RESPONSE_FIRST_LINE",
  ResponseHeader: "RESPONSE_HEADER",
} as const;

export type TamperStrategy =
  (typeof TamperStrategy)[keyof typeof TamperStrategy];
export type TaskInProgressUserError = UserError & {
  code: Scalars["String"]["output"];
  taskId: Scalars["ID"]["output"];
};

export type TestTamperRuleError = InvalidRegexUserError | OtherUserError;

export type TestTamperRuleInput = {
  isRegex: Scalars["Boolean"]["input"];
  matchTerm: Scalars["String"]["input"];
  raw: Scalars["Blob"]["input"];
  replaceTerm: Scalars["String"]["input"];
  strategy: TamperStrategy;
};

export type TestTamperRulePayload = {
  error?: Maybe<TestTamperRuleError>;
  raw?: Maybe<Scalars["Blob"]["output"]>;
};

export type TestUpstreamProxyInput = {
  auth?: InputMaybe<UpstreamProxyAuthInput>;
  host: Scalars["String"]["input"];
  kind: UpstreamProxyKind;
  port: Scalars["Port"]["input"];
};

export type TestUpstreamProxyPayload = {
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ToggleWorkflowError = OtherUserError | UnknownIdUserError;

export type ToggleWorkflowPayload = {
  error?: Maybe<ToggleWorkflowError>;
  workflow?: Maybe<Workflow>;
};

export type UnknownIdUserError = UserError & {
  code: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
};

export type UnsupportedPlatformUserError = UserError & {
  code: Scalars["String"]["output"];
};

export type UpdateAutomateSessionInput = {
  connection: ConnectionInfoInput;
  raw: Scalars["Blob"]["input"];
  settings: AutomateSettingsInput;
};

export type UpdateAutomateSessionPayload = {
  session?: Maybe<AutomateSession>;
};

export type UpdateBrowserError =
  | OtherUserError
  | RenderFailedUserError
  | UnsupportedPlatformUserError;

export type UpdateBrowserPayload = {
  browser?: Maybe<Browser>;
  error?: Maybe<UpdateBrowserError>;
};

export type UpdateFilterPresetError =
  | AliasTakenUserError
  | NameTakenUserError
  | OtherUserError;

export type UpdateFilterPresetInput = {
  alias: Scalars["Alias"]["input"];
  clause: Scalars["JSON"]["input"];
  name: Scalars["String"]["input"];
};

export type UpdateFilterPresetPayload = {
  error?: Maybe<UpdateFilterPresetError>;
  filter?: Maybe<FilterPreset>;
};

export type UpdateRequestMetadataInput = {
  color?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateRequestMetadataPayload = {
  metadata?: Maybe<RequestMetadata>;
  snapshot?: Maybe<Scalars["Snapshot"]["output"]>;
};

export type UpdateScopeError = InvalidGlobTermsUserError | OtherUserError;

export type UpdateScopeInput = {
  allowlist: Array<Scalars["String"]["input"]>;
  denylist: Array<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
};

export type UpdateScopePayload = {
  error?: Maybe<UpdateScopeError>;
  scope?: Maybe<Scope>;
};

export type UpdateTamperRuleError =
  | InvalidHttpqlUserError
  | InvalidRegexUserError
  | OtherUserError
  | UnknownIdUserError;

export type UpdateTamperRuleInput = {
  condition?: InputMaybe<Scalars["HTTPQL"]["input"]>;
  isEnabled: Scalars["Boolean"]["input"];
  isRegex: Scalars["Boolean"]["input"];
  matchTerm: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  replaceTerm: Scalars["String"]["input"];
  strategy: TamperStrategy;
};

export type UpdateTamperRulePayload = {
  error?: Maybe<UpdateTamperRuleError>;
  rule?: Maybe<TamperRule>;
};

export type UpdateUpstreamProxyInput = {
  allowlist: Array<Scalars["String"]["input"]>;
  auth?: InputMaybe<UpstreamProxyAuthInput>;
  denylist: Array<Scalars["String"]["input"]>;
  enabled: Scalars["Boolean"]["input"];
  host: Scalars["String"]["input"];
  kind: UpstreamProxyKind;
  port: Scalars["Port"]["input"];
};

export type UpdateUpstreamProxyPayload = {
  proxy?: Maybe<UpstreamProxy>;
};

export type UpdateViewerSettingsInput = {
  data: Scalars["JSON"]["input"];
  migrations: Scalars["JSON"]["input"];
};

export type UpdateViewerSettingsPayload = {
  settings?: Maybe<UserSettings>;
};

export type UpdateWorkflowError =
  | OtherUserError
  | UnknownIdUserError
  | WorkflowUserError;

export type UpdateWorkflowInput = {
  definition: Scalars["JsonObject"]["input"];
};

export type UpdateWorkflowPayload = {
  error?: Maybe<UpdateWorkflowError>;
  workflow?: Maybe<Workflow>;
};

export type UpdatedAssistantMessageTaskPayload = {
  task: AssistantMessageTask;
};

export type UpdatedAssistantSessionPayload = {
  sessionEdge: AssistantSessionEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type UpdatedAutomateEntryPayload = {
  automateEntryEdge: AutomateEntryEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type UpdatedAutomateSessionPayload = {
  automateSessionEdge: AutomateSessionEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type UpdatedAutomateTaskPayload = {
  automateTaskEdge: AutomateTaskEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type UpdatedBackupPayload = {
  backup: Backup;
};

export type UpdatedBrowserPayload = {
  browser: Browser;
};

export type UpdatedDataExportPayload = {
  dataExportEdge: DataExportEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type UpdatedDeleteInterceptEntriesTaskPayload = {
  snapshot: Scalars["Snapshot"]["output"];
  task: DeleteInterceptEntriesTask;
};

export type UpdatedFilterPresetPayload = {
  filterEdge: FilterPresetEdge;
};

export type UpdatedHostedFilePayload = {
  hostedFile: HostedFile;
};

export type UpdatedInterceptEntryPayload = {
  interceptEntryEdge: InterceptEntryEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type UpdatedInterceptEntryPayloadInterceptEntryEdgeArgs = {
  order?: InputMaybe<InterceptEntryOrderInput>;
};

export type UpdatedInterceptOptionsPayload = {
  options: InterceptOptions;
};

export type UpdatedInterceptStatusPayload = {
  status: InterceptStatus;
};

export type UpdatedProjectPayload = {
  project: Project;
};

export type UpdatedReplaySessionCollectionPayload = {
  collectionEdge: ReplaySessionCollectionEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type UpdatedReplaySessionPayload = {
  sessionEdge: ReplaySessionEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type UpdatedReplayTaskPayload = {
  replayTaskEdge: ReplayTaskEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type UpdatedRequestMetadataPayload = {
  metadata: RequestMetadata;
  requestId: Scalars["ID"]["output"];
  snapshot: Scalars["Snapshot"]["output"];
};

export type UpdatedRequestPayload = {
  requestEdge: RequestEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type UpdatedRequestPayloadRequestEdgeArgs = {
  order?: InputMaybe<RequestResponseOrderInput>;
};

export type UpdatedScopePayload = {
  scopeEdge: ScopeEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type UpdatedSitemapEntryPayload = {
  ancestorIds: Array<Scalars["ID"]["output"]>;
  oldRequest?: Maybe<Request>;
  requestEdge: RequestEdge;
  sitemapEntryEdge: SitemapEntryEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type UpdatedSitemapEntryPayloadRequestEdgeArgs = {
  order?: InputMaybe<RequestResponseOrderInput>;
};

export type UpdatedTamperRuleCollectionPayload = {
  collectionEdge: TamperRuleCollectionEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type UpdatedTamperRulePayload = {
  ruleEdge: TamperRuleEdge;
  snapshot: Scalars["Snapshot"]["output"];
};

export type UpdatedViewerAssistantUsagePayload = {
  usage: AssistantUsage;
};

export type UpdatedViewerSettingsPayload = {
  settings: UserSettings;
};

export type UpdatedWorkflowPayload = {
  workflowEdge: WorkflowEdge;
};

export type UploadHostedFileInput = {
  file: Scalars["Upload"]["input"];
  name: Scalars["String"]["input"];
};

export type UploadHostedFilePayload = {
  hostedFile?: Maybe<HostedFile>;
};

export type UploadedBrowserPayload = {
  browser: Browser;
};

export type UploadedHostedFilePayload = {
  hostedFile: HostedFile;
};

export type UpstreamProxy = {
  allowlist: Array<Scalars["String"]["output"]>;
  auth?: Maybe<UpstreamProxyAuth>;
  denylist: Array<Scalars["String"]["output"]>;
  enabled: Scalars["Boolean"]["output"];
  host: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  kind: UpstreamProxyKind;
  port: Scalars["Port"]["output"];
  rank: Scalars["Rank"]["output"];
};

export type UpstreamProxyAuth = UpstreamProxyAuthBasic;

export type UpstreamProxyAuthBasic = {
  password: Scalars["Sensitive"]["output"];
  username: Scalars["String"]["output"];
};

export type UpstreamProxyAuthBasicInput = {
  password: Scalars["Sensitive"]["input"];
  username: Scalars["String"]["input"];
};

export type UpstreamProxyAuthInput = { basic: UpstreamProxyAuthBasicInput };

export const UpstreamProxyKind = {
  Http: "HTTP",
  Https: "HTTPS",
} as const;

export type UpstreamProxyKind =
  (typeof UpstreamProxyKind)[keyof typeof UpstreamProxyKind];
export type User = {
  assistantUsage: AssistantUsage;
  id: Scalars["ID"]["output"];
  profile: UserProfile;
  settings?: Maybe<UserSettings>;
};

export type UserEntitlement = {
  name: Scalars["String"]["output"];
};

export type UserError = {
  code: Scalars["String"]["output"];
};

export type UserIdentity = {
  email: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

export type UserProfile = {
  identity: UserIdentity;
  subscription: UserSubscription;
};

export type UserSettings = {
  data: Scalars["JSON"]["output"];
  migrations: Scalars["JSON"]["output"];
};

export type UserSubscription = {
  entitlements: Array<UserEntitlement>;
  plan: UserSubscriptionPlan;
};

export type UserSubscriptionPlan = {
  name: Scalars["String"]["output"];
};

export type Workflow = {
  createdAt: Scalars["DateTime"]["output"];
  definition: Scalars["JsonObject"]["output"];
  enabled: Scalars["Boolean"]["output"];
  global: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  kind: WorkflowKind;
  name: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

/** An edge in a connection. */
export type WorkflowEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Workflow;
};

export const WorkflowErrorReason = {
  ExecutionError: "EXECUTION_ERROR",
  InvalidInput: "INVALID_INPUT",
  InvalidProperty: "INVALID_PROPERTY",
  InvalidWorkflow: "INVALID_WORKFLOW",
} as const;

export type WorkflowErrorReason =
  (typeof WorkflowErrorReason)[keyof typeof WorkflowErrorReason];
export const WorkflowKind = {
  Convert: "CONVERT",
  Passive: "PASSIVE",
} as const;

export type WorkflowKind = (typeof WorkflowKind)[keyof typeof WorkflowKind];
export type WorkflowNodeDefinition = {
  raw: Scalars["JsonObject"]["output"];
};

export type WorkflowUserError = UserError & {
  code: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
  nodeId?: Maybe<Scalars["ID"]["output"]>;
  reason: WorkflowErrorReason;
};

export type AssistantMessageFullFragment = {
  __typename: "AssistantMessage";
  id: string;
  content: string;
  role: AssistantMessageRole;
  session: { id: string };
};

export type AssistantModelFullFragment = {
  __typename: "AssistantModel";
  id: string;
  name: string;
  tokenCredit: number;
};

export type AssistantSessionMetaFragment = {
  __typename: "AssistantSession";
  id: string;
  modelId: string;
  name: string;
  updatedAt: Date;
  createdAt: Date;
};

export type AssistantSessionFullFragment = {
  __typename: "AssistantSession";
  id: string;
  modelId: string;
  name: string;
  updatedAt: Date;
  createdAt: Date;
  messages: Array<{
    __typename: "AssistantMessage";
    id: string;
    content: string;
    role: AssistantMessageRole;
    session: { id: string };
  }>;
};

export type AssistantMessageTaskFullFragment = {
  __typename: "AssistantMessageTask";
  id: string;
  message?:
    | {
        __typename: "AssistantMessage";
        id: string;
        content: string;
        role: AssistantMessageRole;
        session: { id: string };
      }
    | undefined
    | null;
  session: {
    __typename: "AssistantSession";
    id: string;
    modelId: string;
    name: string;
    updatedAt: Date;
    createdAt: Date;
  };
  error?:
    | {
        __typename: "AssistantUserError";
        code: string;
        assistantReason: AssistantErrorReason;
      }
    | {
        __typename: "AuthenticationUserError";
        reason: AuthenticationErrorReason;
        code: string;
      }
    | { __typename: "OtherUserError"; code: string }
    | undefined
    | null;
};

export type AssistantUsageFullFragment = {
  __typename: "AssistantUsage";
  balance: number;
};

export type AuthenticationRequestFullFragment = {
  __typename: "AuthenticationRequest";
  id: string;
  expiresAt: Date;
  userCode: string;
  verificationUrl: string;
};

export type AuthenticationTokenFullFragment = {
  __typename: "AuthenticationToken";
  accessToken: string;
  expiresAt: Date;
  refreshToken?: string | undefined | null;
  scopes: Array<AuthenticationScope>;
};

export type AutomateEntryMetaFragment = {
  __typename: "AutomateEntry";
  id: string;
  name: string;
  createdAt: Date;
  session: { id: string };
};

export type AutomateEntryFullFragment = {
  __typename: "AutomateEntry";
  id: string;
  name: string;
  createdAt: Date;
  settings: {
    __typename: "AutomateSettings";
    closeConnection: boolean;
    updateContentLength: boolean;
    strategy: AutomatePayloadStrategy;
    concurrency?:
      | {
          __typename: "AutomateConcurrencySetting";
          delay: number;
          workers: number;
        }
      | undefined
      | null;
    retryOnFailure: {
      __typename: "AutomateRetryOnFailureSetting";
      backoff: number;
      maximumRetries: number;
    };
    payloads: Array<{
      __typename: "AutomatePayload";
      kind: AutomatePayloadKind;
      options:
        | {
            __typename: "AutomateHostedFilePayload";
            id: string;
            delimiter?: string | undefined | null;
          }
        | { __typename: "AutomateNullPayload"; quantity: number }
        | { __typename: "AutomateSimpleListPayload"; list: Array<string> };
      preprocessors: Array<{
        __typename: "AutomatePreprocessor";
        kind: AutomatePreprocessorKind;
        options: { value: string } | { value: string };
      }>;
      urlEncode: {
        __typename: "AutomateUrlEncodeOptions";
        charset?: string | undefined | null;
        enabled: boolean;
        nonAscii: boolean;
      };
    }>;
    placeholders: Array<{
      __typename: "AutomatePlaceholder";
      start: number;
      end: number;
    }>;
  };
  session: { id: string };
};

export type AutomateEntryRequestPayloadFullFragment = {
  __typename: "AutomateEntryRequestPayload";
  position?: number | undefined | null;
  raw?: string | undefined | null;
};

export type AutomateEntryRequestMetaFragment = {
  __typename: "AutomateEntryRequest";
  sequenceId: string;
  automateEntryId: string;
  error?: string | undefined | null;
  request: {
    __typename: "Request";
    id: string;
    host: string;
    port: number;
    path: string;
    query: string;
    method: string;
    edited: boolean;
    isTls: boolean;
    length: number;
    alteration: Alteration;
    fileExtension?: string | undefined | null;
    source: Source;
    createdAt: Date;
    metadata: { color?: string | undefined | null };
    response?:
      | {
          __typename: "Response";
          id: string;
          statusCode: number;
          roundtripTime: number;
          length: number;
          createdAt: Date;
          alteration: Alteration;
          edited: boolean;
        }
      | undefined
      | null;
  };
  payloads: Array<{
    __typename: "AutomateEntryRequestPayload";
    position?: number | undefined | null;
    raw?: string | undefined | null;
  }>;
};

export type AutomateEntryRequestEdgeMetaFragment = {
  __typename: "AutomateEntryRequestEdge";
  cursor: string;
  node: {
    __typename: "AutomateEntryRequest";
    sequenceId: string;
    automateEntryId: string;
    error?: string | undefined | null;
    request: {
      __typename: "Request";
      id: string;
      host: string;
      port: number;
      path: string;
      query: string;
      method: string;
      edited: boolean;
      isTls: boolean;
      length: number;
      alteration: Alteration;
      fileExtension?: string | undefined | null;
      source: Source;
      createdAt: Date;
      metadata: { color?: string | undefined | null };
      response?:
        | {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
          }
        | undefined
        | null;
    };
    payloads: Array<{
      __typename: "AutomateEntryRequestPayload";
      position?: number | undefined | null;
      raw?: string | undefined | null;
    }>;
  };
};

export type AutomateSessionMetaFragment = {
  __typename: "AutomateSession";
  id: string;
  name: string;
  createdAt: Date;
  entries: Array<{
    __typename: "AutomateEntry";
    id: string;
    name: string;
    createdAt: Date;
    session: { id: string };
  }>;
};

export type AutomateSessionFullFragment = {
  __typename: "AutomateSession";
  raw: string;
  id: string;
  name: string;
  createdAt: Date;
  connection: {
    __typename: "ConnectionInfo";
    host: string;
    port: number;
    isTls: boolean;
  };
  settings: {
    __typename: "AutomateSettings";
    closeConnection: boolean;
    updateContentLength: boolean;
    strategy: AutomatePayloadStrategy;
    concurrency?:
      | {
          __typename: "AutomateConcurrencySetting";
          delay: number;
          workers: number;
        }
      | undefined
      | null;
    retryOnFailure: {
      __typename: "AutomateRetryOnFailureSetting";
      backoff: number;
      maximumRetries: number;
    };
    payloads: Array<{
      __typename: "AutomatePayload";
      kind: AutomatePayloadKind;
      options:
        | {
            __typename: "AutomateHostedFilePayload";
            id: string;
            delimiter?: string | undefined | null;
          }
        | { __typename: "AutomateNullPayload"; quantity: number }
        | { __typename: "AutomateSimpleListPayload"; list: Array<string> };
      preprocessors: Array<{
        __typename: "AutomatePreprocessor";
        kind: AutomatePreprocessorKind;
        options: { value: string } | { value: string };
      }>;
      urlEncode: {
        __typename: "AutomateUrlEncodeOptions";
        charset?: string | undefined | null;
        enabled: boolean;
        nonAscii: boolean;
      };
    }>;
    placeholders: Array<{
      __typename: "AutomatePlaceholder";
      start: number;
      end: number;
    }>;
  };
  entries: Array<{
    __typename: "AutomateEntry";
    id: string;
    name: string;
    createdAt: Date;
    session: { id: string };
  }>;
};

export type AutomateSettingsFullFragment = {
  __typename: "AutomateSettings";
  closeConnection: boolean;
  updateContentLength: boolean;
  strategy: AutomatePayloadStrategy;
  concurrency?:
    | {
        __typename: "AutomateConcurrencySetting";
        delay: number;
        workers: number;
      }
    | undefined
    | null;
  retryOnFailure: {
    __typename: "AutomateRetryOnFailureSetting";
    backoff: number;
    maximumRetries: number;
  };
  payloads: Array<{
    __typename: "AutomatePayload";
    kind: AutomatePayloadKind;
    options:
      | {
          __typename: "AutomateHostedFilePayload";
          id: string;
          delimiter?: string | undefined | null;
        }
      | { __typename: "AutomateNullPayload"; quantity: number }
      | { __typename: "AutomateSimpleListPayload"; list: Array<string> };
    preprocessors: Array<{
      __typename: "AutomatePreprocessor";
      kind: AutomatePreprocessorKind;
      options: { value: string } | { value: string };
    }>;
    urlEncode: {
      __typename: "AutomateUrlEncodeOptions";
      charset?: string | undefined | null;
      enabled: boolean;
      nonAscii: boolean;
    };
  }>;
  placeholders: Array<{
    __typename: "AutomatePlaceholder";
    start: number;
    end: number;
  }>;
};

export type ConcurrencySettingFullFragment = {
  __typename: "AutomateConcurrencySetting";
  delay: number;
  workers: number;
};

export type RetryOnFailureSettingFullFragment = {
  __typename: "AutomateRetryOnFailureSetting";
  backoff: number;
  maximumRetries: number;
};

export type AutomatePayloadFullFragment = {
  __typename: "AutomatePayload";
  kind: AutomatePayloadKind;
  options:
    | {
        __typename: "AutomateHostedFilePayload";
        id: string;
        delimiter?: string | undefined | null;
      }
    | { __typename: "AutomateNullPayload"; quantity: number }
    | { __typename: "AutomateSimpleListPayload"; list: Array<string> };
  preprocessors: Array<{
    __typename: "AutomatePreprocessor";
    kind: AutomatePreprocessorKind;
    options: { value: string } | { value: string };
  }>;
  urlEncode: {
    __typename: "AutomateUrlEncodeOptions";
    charset?: string | undefined | null;
    enabled: boolean;
    nonAscii: boolean;
  };
};

export type AutomatePlaceholderFullFragment = {
  __typename: "AutomatePlaceholder";
  start: number;
  end: number;
};

export type SimpleListPayloadOptionsFullFragment = {
  __typename: "AutomateSimpleListPayload";
  list: Array<string>;
};

export type HostedFilePayloadOptionsFullFragment = {
  __typename: "AutomateHostedFilePayload";
  id: string;
  delimiter?: string | undefined | null;
};

export type NullPayloadOptionsFullFragment = {
  __typename: "AutomateNullPayload";
  quantity: number;
};

export type AutomateTaskMetaFragment = {
  id: string;
  paused: boolean;
  entry: {
    __typename: "AutomateEntry";
    id: string;
    name: string;
    createdAt: Date;
    session: { id: string };
  };
};

export type AutomateTaskEdgeMetaFragment = {
  node: {
    id: string;
    paused: boolean;
    entry: {
      __typename: "AutomateEntry";
      id: string;
      name: string;
      createdAt: Date;
      session: { id: string };
    };
  };
};

export type BackupMetaFragment = {
  __typename: "Backup";
  id: string;
  name: string;
  path: string;
  size: number;
  status: BackupStatus;
  createdAt: Date;
  updatedAt: Date;
  project?: { id: string } | undefined | null;
};

export type BackupTaskMetaFragment = {
  __typename: "BackupTask";
  id: string;
  backup: {
    __typename: "Backup";
    id: string;
    name: string;
    path: string;
    size: number;
    status: BackupStatus;
    createdAt: Date;
    updatedAt: Date;
    project?: { id: string } | undefined | null;
  };
};

export type RestoreBackupTaskMetaFragment = {
  __typename: "RestoreBackupTask";
  id: string;
  backup?:
    | {
        __typename: "Backup";
        id: string;
        name: string;
        path: string;
        size: number;
        status: BackupStatus;
        createdAt: Date;
        updatedAt: Date;
        project?: { id: string } | undefined | null;
      }
    | undefined
    | null;
  project: {
    __typename: "Project";
    id: string;
    name: string;
    path: string;
    version: string;
    status: ProjectStatus;
    size: number;
    createdAt: Date;
    updatedAt: Date;
    backups: Array<{ id: string }>;
  };
};

export type FinishedBackupTaskSuccessFullFragment = {
  __typename: "FinishedBackupTaskSuccess";
  task: {
    __typename: "BackupTask";
    id: string;
    backup: {
      __typename: "Backup";
      id: string;
      name: string;
      path: string;
      size: number;
      status: BackupStatus;
      createdAt: Date;
      updatedAt: Date;
      project?: { id: string } | undefined | null;
    };
  };
};

export type FinishedBackupTaskCancelledFullFragment = {
  __typename: "FinishedBackupTaskCancelled";
  taskId: string;
};

export type FinishedBackupTaskErrorFullFragment = {
  __typename: "FinishedBackupTaskError";
  taskId: string;
  error:
    | { __typename: "BackupUserError"; reason: BackupErrorReason; code: string }
    | { __typename: "InternalUserError"; message: string; code: string }
    | { __typename: "OtherUserError"; code: string };
};

export type FinishedRestoreBackupTaskSuccessFullFragment = {
  __typename: "FinishedRestoreBackupTaskSuccess";
  task: {
    __typename: "RestoreBackupTask";
    id: string;
    backup?:
      | {
          __typename: "Backup";
          id: string;
          name: string;
          path: string;
          size: number;
          status: BackupStatus;
          createdAt: Date;
          updatedAt: Date;
          project?: { id: string } | undefined | null;
        }
      | undefined
      | null;
    project: {
      __typename: "Project";
      id: string;
      name: string;
      path: string;
      version: string;
      status: ProjectStatus;
      size: number;
      createdAt: Date;
      updatedAt: Date;
      backups: Array<{ id: string }>;
    };
  };
};

export type FinishedRestoreBackupTaskCancelledFullFragment = {
  __typename: "FinishedRestoreBackupTaskCancelled";
  taskId: string;
};

export type FinishedRestoreBackupTaskErrorFullFragment = {
  __typename: "FinishedRestoreBackupTaskError";
  taskId: string;
  error:
    | { __typename: "BackupUserError"; reason: BackupErrorReason; code: string }
    | { __typename: "InternalUserError"; message: string; code: string }
    | { __typename: "OtherUserError"; code: string };
};

export type BrowserFullFragment = {
  __typename: "Browser";
  id: string;
  installedAt: Date;
  latest: boolean;
  path: string;
  size: number;
  version: string;
};

export type AuthenticationUserErrorFullFragment = {
  __typename: "AuthenticationUserError";
  reason: AuthenticationErrorReason;
  code: string;
};

export type InvalidRegexUserErrorFullFragment = {
  __typename: "InvalidRegexUserError";
  term: string;
  code: string;
};

export type NameTakenUserErrorFullFragment = {
  __typename: "NameTakenUserError";
  name: string;
  code: string;
};

export type AliasTakenUserErrorFullFragment = {
  __typename: "AliasTakenUserError";
  alias: string;
  code: string;
};

export type InternalUserErrorFullFragment = {
  __typename: "InternalUserError";
  message: string;
  code: string;
};

export type BackupUserErrorFullFragment = {
  __typename: "BackupUserError";
  reason: BackupErrorReason;
  code: string;
};

export type OtherUserErrorFullFragment = {
  __typename: "OtherUserError";
  code: string;
};

export type RenderFailedUserErrorFullFragment = {
  __typename: "RenderFailedUserError";
  reason: RenderFailedErrorReason;
  code: string;
};

export type TaskInProgressUserErrorFullFragment = {
  __typename: "TaskInProgressUserError";
  taskId: string;
  code: string;
};

export type UnknownIdUserErrorFullFragment = {
  __typename: "UnknownIdUserError";
  id: string;
  code: string;
};

export type UnsupportedPlatformUserErrorFullFragment = {
  __typename: "UnsupportedPlatformUserError";
  code: string;
};

export type PermissionDeniedUserErrorFullFragment = {
  __typename: "PermissionDeniedUserError";
  code: string;
  permissionDeniedReason: PermissionDeniedErrorReason;
};

export type AssistantUserErrorFullFragment = {
  __typename: "AssistantUserError";
  code: string;
  assistantReason: AssistantErrorReason;
};

export type WorkflowUserErrorFullFragment = {
  __typename: "WorkflowUserError";
  nodeId?: string | undefined | null;
  message: string;
  reason: WorkflowErrorReason;
  code: string;
};

export type InvalidGlobTermsUserErrorFullFragment = {
  __typename: "InvalidGlobTermsUserError";
  terms: Array<string>;
  code: string;
};

type UserErrorFull_AliasTakenUserError_Fragment = {
  __typename: "AliasTakenUserError";
  code: string;
};

type UserErrorFull_AssistantUserError_Fragment = {
  __typename: "AssistantUserError";
  code: string;
};

type UserErrorFull_AuthenticationUserError_Fragment = {
  __typename: "AuthenticationUserError";
  code: string;
};

type UserErrorFull_AutomateTaskUserError_Fragment = {
  __typename: "AutomateTaskUserError";
  code: string;
};

type UserErrorFull_BackupUserError_Fragment = {
  __typename: "BackupUserError";
  code: string;
};

type UserErrorFull_InternalUserError_Fragment = {
  __typename: "InternalUserError";
  code: string;
};

type UserErrorFull_InvalidGlobTermsUserError_Fragment = {
  __typename: "InvalidGlobTermsUserError";
  code: string;
};

type UserErrorFull_InvalidHttpqlUserError_Fragment = {
  __typename: "InvalidHTTPQLUserError";
  code: string;
};

type UserErrorFull_InvalidRegexUserError_Fragment = {
  __typename: "InvalidRegexUserError";
  code: string;
};

type UserErrorFull_NameTakenUserError_Fragment = {
  __typename: "NameTakenUserError";
  code: string;
};

type UserErrorFull_OtherUserError_Fragment = {
  __typename: "OtherUserError";
  code: string;
};

type UserErrorFull_PermissionDeniedUserError_Fragment = {
  __typename: "PermissionDeniedUserError";
  code: string;
};

type UserErrorFull_ProjectLockedUserError_Fragment = {
  __typename: "ProjectLockedUserError";
  code: string;
};

type UserErrorFull_RenderFailedUserError_Fragment = {
  __typename: "RenderFailedUserError";
  code: string;
};

type UserErrorFull_TaskInProgressUserError_Fragment = {
  __typename: "TaskInProgressUserError";
  code: string;
};

type UserErrorFull_UnknownIdUserError_Fragment = {
  __typename: "UnknownIdUserError";
  code: string;
};

type UserErrorFull_UnsupportedPlatformUserError_Fragment = {
  __typename: "UnsupportedPlatformUserError";
  code: string;
};

type UserErrorFull_WorkflowUserError_Fragment = {
  __typename: "WorkflowUserError";
  code: string;
};

export type UserErrorFullFragment =
  | UserErrorFull_AliasTakenUserError_Fragment
  | UserErrorFull_AssistantUserError_Fragment
  | UserErrorFull_AuthenticationUserError_Fragment
  | UserErrorFull_AutomateTaskUserError_Fragment
  | UserErrorFull_BackupUserError_Fragment
  | UserErrorFull_InternalUserError_Fragment
  | UserErrorFull_InvalidGlobTermsUserError_Fragment
  | UserErrorFull_InvalidHttpqlUserError_Fragment
  | UserErrorFull_InvalidRegexUserError_Fragment
  | UserErrorFull_NameTakenUserError_Fragment
  | UserErrorFull_OtherUserError_Fragment
  | UserErrorFull_PermissionDeniedUserError_Fragment
  | UserErrorFull_ProjectLockedUserError_Fragment
  | UserErrorFull_RenderFailedUserError_Fragment
  | UserErrorFull_TaskInProgressUserError_Fragment
  | UserErrorFull_UnknownIdUserError_Fragment
  | UserErrorFull_UnsupportedPlatformUserError_Fragment
  | UserErrorFull_WorkflowUserError_Fragment;

export type InvalidHttpqlUserErrorFullFragment = {
  __typename: "InvalidHTTPQLUserError";
  query: string;
  code: string;
};

export type DataExportMetaFragment = {
  __typename: "DataExport";
  id: string;
  name: string;
  path: string;
  size: number;
  status: DataExportStatus;
  format: DataExportFormat;
  error?: string | undefined | null;
  createdAt: Date;
};

export type DataExportMetaFieldsFragment = {
  __typename: "DataExport";
  id: string;
  name: string;
  path: string;
  size: number;
  status: DataExportStatus;
  format: DataExportFormat;
  error?: string | undefined | null;
  createdAt: Date;
};

export type DataExportFullFragment = {
  __typename: "DataExport";
  downloadUri?: string | undefined | null;
  id: string;
  name: string;
  path: string;
  size: number;
  status: DataExportStatus;
  format: DataExportFormat;
  error?: string | undefined | null;
  createdAt: Date;
};

export type DataExportFullFieldsFragment = {
  __typename: "DataExport";
  downloadUri?: string | undefined | null;
  id: string;
  name: string;
  path: string;
  size: number;
  status: DataExportStatus;
  format: DataExportFormat;
  error?: string | undefined | null;
  createdAt: Date;
};

export type DataExportTaskMetaFragment = {
  __typename: "DataExportTask";
  id: string;
  export: {
    __typename: "DataExport";
    id: string;
    name: string;
    path: string;
    size: number;
    status: DataExportStatus;
    format: DataExportFormat;
    error?: string | undefined | null;
    createdAt: Date;
  };
};

export type DataExportTaskMetaFieldsFragment = {
  __typename: "DataExportTask";
  id: string;
  export: {
    __typename: "DataExport";
    id: string;
    name: string;
    path: string;
    size: number;
    status: DataExportStatus;
    format: DataExportFormat;
    error?: string | undefined | null;
    createdAt: Date;
  };
};

export type FilterPresetFullFragment = {
  __typename: "FilterPreset";
  id: string;
  alias: string;
  name: string;
  clause: Record<string, unknown>;
};

export type FilterPresetEdgeFullFragment = {
  cursor: string;
  node: {
    __typename: "FilterPreset";
    id: string;
    alias: string;
    name: string;
    clause: Record<string, unknown>;
  };
};

export type FindingMetaFragment = {
  id: string;
  title: string;
  description?: string | undefined | null;
  reporter: string;
  host: string;
  path: string;
  createdAt: Date;
  request: {
    __typename: "Request";
    id: string;
    host: string;
    port: number;
    path: string;
    query: string;
    method: string;
    edited: boolean;
    isTls: boolean;
    length: number;
    alteration: Alteration;
    fileExtension?: string | undefined | null;
    source: Source;
    createdAt: Date;
    metadata: { color?: string | undefined | null };
    response?:
      | {
          __typename: "Response";
          id: string;
          statusCode: number;
          roundtripTime: number;
          length: number;
          createdAt: Date;
          alteration: Alteration;
          edited: boolean;
        }
      | undefined
      | null;
  };
};

export type FindingEdgeMetaFragment = {
  cursor: string;
  node: {
    id: string;
    title: string;
    description?: string | undefined | null;
    reporter: string;
    host: string;
    path: string;
    createdAt: Date;
    request: {
      __typename: "Request";
      id: string;
      host: string;
      port: number;
      path: string;
      query: string;
      method: string;
      edited: boolean;
      isTls: boolean;
      length: number;
      alteration: Alteration;
      fileExtension?: string | undefined | null;
      source: Source;
      createdAt: Date;
      metadata: { color?: string | undefined | null };
      response?:
        | {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
          }
        | undefined
        | null;
    };
  };
};

export type OnboardingFullFragment = {
  __typename: "OnboardingState";
  caCertificate: boolean;
  license: boolean;
  project: boolean;
};

export type InterceptEntryFullFragment = {
  __typename: "InterceptEntry";
  id: string;
  request: {
    __typename: "Request";
    id: string;
    host: string;
    port: number;
    path: string;
    query: string;
    method: string;
    edited: boolean;
    isTls: boolean;
    length: number;
    alteration: Alteration;
    fileExtension?: string | undefined | null;
    source: Source;
    createdAt: Date;
    raw: string;
    metadata: { color?: string | undefined | null };
    response?:
      | {
          __typename: "Response";
          id: string;
          statusCode: number;
          roundtripTime: number;
          length: number;
          createdAt: Date;
          alteration: Alteration;
          edited: boolean;
        }
      | undefined
      | null;
    edits: Array<{
      __typename: "Request";
      id: string;
      host: string;
      port: number;
      path: string;
      query: string;
      method: string;
      edited: boolean;
      isTls: boolean;
      length: number;
      alteration: Alteration;
      fileExtension?: string | undefined | null;
      source: Source;
      createdAt: Date;
      metadata: { color?: string | undefined | null };
      response?:
        | {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
          }
        | undefined
        | null;
    }>;
  };
};

export type InterceptEntryMetaFragment = {
  __typename: "InterceptEntry";
  id: string;
  request: {
    __typename: "Request";
    id: string;
    host: string;
    port: number;
    path: string;
    query: string;
    method: string;
    edited: boolean;
    isTls: boolean;
    length: number;
    alteration: Alteration;
    fileExtension?: string | undefined | null;
    source: Source;
    createdAt: Date;
    metadata: { color?: string | undefined | null };
    response?:
      | {
          __typename: "Response";
          id: string;
          statusCode: number;
          roundtripTime: number;
          length: number;
          createdAt: Date;
          alteration: Alteration;
          edited: boolean;
        }
      | undefined
      | null;
  };
};

export type InterceptEntryEdgeWithMetaFragment = {
  __typename: "InterceptEntryEdge";
  cursor: string;
  node: {
    __typename: "InterceptEntry";
    id: string;
    request: {
      __typename: "Request";
      id: string;
      host: string;
      port: number;
      path: string;
      query: string;
      method: string;
      edited: boolean;
      isTls: boolean;
      length: number;
      alteration: Alteration;
      fileExtension?: string | undefined | null;
      source: Source;
      createdAt: Date;
      metadata: { color?: string | undefined | null };
      response?:
        | {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
          }
        | undefined
        | null;
    };
  };
};

export type DeleteInterceptEntriesTaskFullFragment = {
  __typename: "DeleteInterceptEntriesTask";
  id: string;
  deletedEntryIds: Array<string>;
};

export type HostedFileFullFragment = {
  __typename: "HostedFile";
  id: string;
  name: string;
  path: string;
  size: number;
  updatedAt: Date;
  createdAt: Date;
};

export type InterceptRequestMessageMetaFragment = {
  __typename: "InterceptRequestMessage";
  id: string;
  request: {
    __typename: "Request";
    id: string;
    host: string;
    port: number;
    path: string;
    query: string;
    method: string;
    edited: boolean;
    isTls: boolean;
    length: number;
    alteration: Alteration;
    fileExtension?: string | undefined | null;
    source: Source;
    createdAt: Date;
    metadata: { color?: string | undefined | null };
    response?:
      | {
          __typename: "Response";
          id: string;
          statusCode: number;
          roundtripTime: number;
          length: number;
          createdAt: Date;
          alteration: Alteration;
          edited: boolean;
        }
      | undefined
      | null;
  };
};

export type InterceptResponseMessageMetaFragment = {
  __typename: "InterceptResponseMessage";
  id: string;
  response: {
    __typename: "Response";
    id: string;
    statusCode: number;
    roundtripTime: number;
    length: number;
    createdAt: Date;
    alteration: Alteration;
    edited: boolean;
  };
  request: {
    __typename: "Request";
    id: string;
    host: string;
    port: number;
    path: string;
    query: string;
    method: string;
    edited: boolean;
    isTls: boolean;
    length: number;
    alteration: Alteration;
    fileExtension?: string | undefined | null;
    source: Source;
    createdAt: Date;
    metadata: { color?: string | undefined | null };
    response?:
      | {
          __typename: "Response";
          id: string;
          statusCode: number;
          roundtripTime: number;
          length: number;
          createdAt: Date;
          alteration: Alteration;
          edited: boolean;
        }
      | undefined
      | null;
  };
};

type InterceptMessageMeta_InterceptRequestMessage_Fragment = {
  __typename: "InterceptRequestMessage";
  id: string;
  request: {
    __typename: "Request";
    id: string;
    host: string;
    port: number;
    path: string;
    query: string;
    method: string;
    edited: boolean;
    isTls: boolean;
    length: number;
    alteration: Alteration;
    fileExtension?: string | undefined | null;
    source: Source;
    createdAt: Date;
    metadata: { color?: string | undefined | null };
    response?:
      | {
          __typename: "Response";
          id: string;
          statusCode: number;
          roundtripTime: number;
          length: number;
          createdAt: Date;
          alteration: Alteration;
          edited: boolean;
        }
      | undefined
      | null;
  };
};

type InterceptMessageMeta_InterceptResponseMessage_Fragment = {
  __typename: "InterceptResponseMessage";
  id: string;
  response: {
    __typename: "Response";
    id: string;
    statusCode: number;
    roundtripTime: number;
    length: number;
    createdAt: Date;
    alteration: Alteration;
    edited: boolean;
  };
  request: {
    __typename: "Request";
    id: string;
    host: string;
    port: number;
    path: string;
    query: string;
    method: string;
    edited: boolean;
    isTls: boolean;
    length: number;
    alteration: Alteration;
    fileExtension?: string | undefined | null;
    source: Source;
    createdAt: Date;
    metadata: { color?: string | undefined | null };
    response?:
      | {
          __typename: "Response";
          id: string;
          statusCode: number;
          roundtripTime: number;
          length: number;
          createdAt: Date;
          alteration: Alteration;
          edited: boolean;
        }
      | undefined
      | null;
  };
};

export type InterceptMessageMetaFragment =
  | InterceptMessageMeta_InterceptRequestMessage_Fragment
  | InterceptMessageMeta_InterceptResponseMessage_Fragment;

export type InterceptOptionsMetaFragment = {
  request: { enabled: boolean };
  response: { enabled: boolean };
  scope?: { scopeId: string } | undefined | null;
};

export type InterceptRequestOptionsMetaFragment = { enabled: boolean };

export type InterceptResponseOptionsMetaFragment = { enabled: boolean };

export type InterceptScopeOptionsMetaFragment = { scopeId: string };

export type UpstreamProxyFullFragment = {
  __typename: "UpstreamProxy";
  id: string;
  allowlist: Array<string>;
  denylist: Array<string>;
  enabled: boolean;
  host: string;
  kind: UpstreamProxyKind;
  port: number;
  rank: string;
  auth?:
    | {
        __typename: "UpstreamProxyAuthBasic";
        username: string;
        password: string;
      }
    | undefined
    | null;
};

export type UpstreamProxyAuthBasicFullFragment = {
  __typename: "UpstreamProxyAuthBasic";
  username: string;
  password: string;
};

export type CountFullFragment = {
  __typename: "Count";
  value: number;
  snapshot: number;
};

export type PageInfoFullFragment = {
  __typename: "PageInfo";
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  startCursor?: string | undefined | null;
  endCursor?: string | undefined | null;
};

export type ProjectFullFragment = {
  __typename: "Project";
  id: string;
  name: string;
  path: string;
  version: string;
  status: ProjectStatus;
  size: number;
  createdAt: Date;
  updatedAt: Date;
  backups: Array<{ id: string }>;
};

export type ReplayEntryMetaFragment = {
  __typename: "ReplayEntry";
  id: string;
  error?: string | undefined | null;
  sessionId: string;
  request: {
    __typename: "Request";
    id: string;
    host: string;
    port: number;
    path: string;
    query: string;
    method: string;
    edited: boolean;
    isTls: boolean;
    length: number;
    alteration: Alteration;
    fileExtension?: string | undefined | null;
    source: Source;
    createdAt: Date;
    metadata: { color?: string | undefined | null };
    response?:
      | {
          __typename: "Response";
          id: string;
          statusCode: number;
          roundtripTime: number;
          length: number;
          createdAt: Date;
          alteration: Alteration;
          edited: boolean;
        }
      | undefined
      | null;
  };
};

export type ReplaySessionMetaFragment = {
  __typename: "ReplaySession";
  id: string;
  name: string;
  activeEntry?:
    | {
        __typename: "ReplayEntry";
        id: string;
        error?: string | undefined | null;
        sessionId: string;
        request: {
          __typename: "Request";
          id: string;
          host: string;
          port: number;
          path: string;
          query: string;
          method: string;
          edited: boolean;
          isTls: boolean;
          length: number;
          alteration: Alteration;
          fileExtension?: string | undefined | null;
          source: Source;
          createdAt: Date;
          metadata: { color?: string | undefined | null };
          response?:
            | {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
              }
            | undefined
            | null;
        };
      }
    | undefined
    | null;
  collection: { id: string };
  entries: {
    edges: Array<{
      cursor: string;
      node: {
        __typename: "ReplayEntry";
        id: string;
        error?: string | undefined | null;
        sessionId: string;
        request: {
          __typename: "Request";
          id: string;
          host: string;
          port: number;
          path: string;
          query: string;
          method: string;
          edited: boolean;
          isTls: boolean;
          length: number;
          alteration: Alteration;
          fileExtension?: string | undefined | null;
          source: Source;
          createdAt: Date;
          metadata: { color?: string | undefined | null };
          response?:
            | {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
              }
            | undefined
            | null;
        };
      };
    }>;
    pageInfo: {
      __typename: "PageInfo";
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor?: string | undefined | null;
      endCursor?: string | undefined | null;
    };
    count: { __typename: "Count"; value: number; snapshot: number };
  };
};

export type ReplaySessionCollectionMetaFragment = {
  __typename: "ReplaySessionCollection";
  id: string;
  name: string;
  sessions: Array<{
    __typename: "ReplaySession";
    id: string;
    name: string;
    activeEntry?:
      | {
          __typename: "ReplayEntry";
          id: string;
          error?: string | undefined | null;
          sessionId: string;
          request: {
            __typename: "Request";
            id: string;
            host: string;
            port: number;
            path: string;
            query: string;
            method: string;
            edited: boolean;
            isTls: boolean;
            length: number;
            alteration: Alteration;
            fileExtension?: string | undefined | null;
            source: Source;
            createdAt: Date;
            metadata: { color?: string | undefined | null };
            response?:
              | {
                  __typename: "Response";
                  id: string;
                  statusCode: number;
                  roundtripTime: number;
                  length: number;
                  createdAt: Date;
                  alteration: Alteration;
                  edited: boolean;
                }
              | undefined
              | null;
          };
        }
      | undefined
      | null;
    collection: { id: string };
    entries: {
      edges: Array<{
        cursor: string;
        node: {
          __typename: "ReplayEntry";
          id: string;
          error?: string | undefined | null;
          sessionId: string;
          request: {
            __typename: "Request";
            id: string;
            host: string;
            port: number;
            path: string;
            query: string;
            method: string;
            edited: boolean;
            isTls: boolean;
            length: number;
            alteration: Alteration;
            fileExtension?: string | undefined | null;
            source: Source;
            createdAt: Date;
            metadata: { color?: string | undefined | null };
            response?:
              | {
                  __typename: "Response";
                  id: string;
                  statusCode: number;
                  roundtripTime: number;
                  length: number;
                  createdAt: Date;
                  alteration: Alteration;
                  edited: boolean;
                }
              | undefined
              | null;
          };
        };
      }>;
      pageInfo: {
        __typename: "PageInfo";
        hasPreviousPage: boolean;
        hasNextPage: boolean;
        startCursor?: string | undefined | null;
        endCursor?: string | undefined | null;
      };
      count: { __typename: "Count"; value: number; snapshot: number };
    };
  }>;
};

export type ReplayTaskMetaFragment = {
  __typename: "ReplayTask";
  id: string;
  error?: string | undefined | null;
  replayEntry?:
    | {
        __typename: "ReplayEntry";
        id: string;
        error?: string | undefined | null;
        sessionId: string;
        request: {
          __typename: "Request";
          id: string;
          host: string;
          port: number;
          path: string;
          query: string;
          method: string;
          edited: boolean;
          isTls: boolean;
          length: number;
          alteration: Alteration;
          fileExtension?: string | undefined | null;
          source: Source;
          createdAt: Date;
          metadata: { color?: string | undefined | null };
          response?:
            | {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
              }
            | undefined
            | null;
        };
      }
    | undefined
    | null;
};

export type ReplayTaskEdgeMetaFragment = {
  __typename: "ReplayTaskEdge";
  cursor: string;
  node: {
    __typename: "ReplayTask";
    id: string;
    error?: string | undefined | null;
    replayEntry?:
      | {
          __typename: "ReplayEntry";
          id: string;
          error?: string | undefined | null;
          sessionId: string;
          request: {
            __typename: "Request";
            id: string;
            host: string;
            port: number;
            path: string;
            query: string;
            method: string;
            edited: boolean;
            isTls: boolean;
            length: number;
            alteration: Alteration;
            fileExtension?: string | undefined | null;
            source: Source;
            createdAt: Date;
            metadata: { color?: string | undefined | null };
            response?:
              | {
                  __typename: "Response";
                  id: string;
                  statusCode: number;
                  roundtripTime: number;
                  length: number;
                  createdAt: Date;
                  alteration: Alteration;
                  edited: boolean;
                }
              | undefined
              | null;
          };
        }
      | undefined
      | null;
  };
};

export type ConnectionInfoFullFragment = {
  __typename: "ConnectionInfo";
  host: string;
  port: number;
  isTls: boolean;
};

export type RequestEdgeMetaFragment = {
  __typename: "RequestEdge";
  cursor: string;
  node: {
    __typename: "Request";
    id: string;
    host: string;
    port: number;
    path: string;
    query: string;
    method: string;
    edited: boolean;
    isTls: boolean;
    length: number;
    alteration: Alteration;
    fileExtension?: string | undefined | null;
    source: Source;
    createdAt: Date;
    metadata: { color?: string | undefined | null };
    response?:
      | {
          __typename: "Response";
          id: string;
          statusCode: number;
          roundtripTime: number;
          length: number;
          createdAt: Date;
          alteration: Alteration;
          edited: boolean;
        }
      | undefined
      | null;
  };
};

export type RequestFullFragment = {
  __typename: "Request";
  raw: string;
  id: string;
  host: string;
  port: number;
  path: string;
  query: string;
  method: string;
  edited: boolean;
  isTls: boolean;
  length: number;
  alteration: Alteration;
  fileExtension?: string | undefined | null;
  source: Source;
  createdAt: Date;
  edits: Array<{
    __typename: "Request";
    id: string;
    host: string;
    port: number;
    path: string;
    query: string;
    method: string;
    edited: boolean;
    isTls: boolean;
    length: number;
    alteration: Alteration;
    fileExtension?: string | undefined | null;
    source: Source;
    createdAt: Date;
    metadata: { color?: string | undefined | null };
    response?:
      | {
          __typename: "Response";
          id: string;
          statusCode: number;
          roundtripTime: number;
          length: number;
          createdAt: Date;
          alteration: Alteration;
          edited: boolean;
        }
      | undefined
      | null;
  }>;
  metadata: { color?: string | undefined | null };
  response?:
    | {
        __typename: "Response";
        id: string;
        statusCode: number;
        roundtripTime: number;
        length: number;
        createdAt: Date;
        alteration: Alteration;
        edited: boolean;
      }
    | undefined
    | null;
};

export type RequestFullFieldsFragment = {
  __typename: "Request";
  raw: string;
  id: string;
  host: string;
  port: number;
  path: string;
  query: string;
  method: string;
  edited: boolean;
  isTls: boolean;
  length: number;
  alteration: Alteration;
  fileExtension?: string | undefined | null;
  source: Source;
  createdAt: Date;
  edits: Array<{
    __typename: "Request";
    id: string;
    host: string;
    port: number;
    path: string;
    query: string;
    method: string;
    edited: boolean;
    isTls: boolean;
    length: number;
    alteration: Alteration;
    fileExtension?: string | undefined | null;
    source: Source;
    createdAt: Date;
    metadata: { color?: string | undefined | null };
    response?:
      | {
          __typename: "Response";
          id: string;
          statusCode: number;
          roundtripTime: number;
          length: number;
          createdAt: Date;
          alteration: Alteration;
          edited: boolean;
        }
      | undefined
      | null;
  }>;
  metadata: { color?: string | undefined | null };
  response?:
    | {
        __typename: "Response";
        id: string;
        statusCode: number;
        roundtripTime: number;
        length: number;
        createdAt: Date;
        alteration: Alteration;
        edited: boolean;
      }
    | undefined
    | null;
};

export type RequestMetaFragment = {
  __typename: "Request";
  id: string;
  host: string;
  port: number;
  path: string;
  query: string;
  method: string;
  edited: boolean;
  isTls: boolean;
  length: number;
  alteration: Alteration;
  fileExtension?: string | undefined | null;
  source: Source;
  createdAt: Date;
  metadata: { color?: string | undefined | null };
  response?:
    | {
        __typename: "Response";
        id: string;
        statusCode: number;
        roundtripTime: number;
        length: number;
        createdAt: Date;
        alteration: Alteration;
        edited: boolean;
      }
    | undefined
    | null;
};

export type RequestMetadataFullFragment = { color?: string | undefined | null };

export type ResponseMetaFragment = {
  __typename: "Response";
  id: string;
  statusCode: number;
  roundtripTime: number;
  length: number;
  createdAt: Date;
  alteration: Alteration;
  edited: boolean;
};

export type ResponseFullFragment = {
  __typename: "Response";
  raw: string;
  id: string;
  statusCode: number;
  roundtripTime: number;
  length: number;
  createdAt: Date;
  alteration: Alteration;
  edited: boolean;
  edits: Array<{
    __typename: "Response";
    id: string;
    statusCode: number;
    roundtripTime: number;
    length: number;
    createdAt: Date;
    alteration: Alteration;
    edited: boolean;
  }>;
};

export type RuntimeFullFragment = {
  __typename: "Runtime";
  version: string;
  platform: string;
  availableUpdate?:
    | {
        __typename: "Release";
        releasedAt: Date;
        version: string;
        links: Array<{
          __typename: "ReleaseLink";
          display: string;
          link: string;
          platform: string;
        }>;
      }
    | undefined
    | null;
};

export type ReleaseFullFragment = {
  __typename: "Release";
  releasedAt: Date;
  version: string;
  links: Array<{
    __typename: "ReleaseLink";
    display: string;
    link: string;
    platform: string;
  }>;
};

export type ScopeFullFragment = {
  __typename: "Scope";
  id: string;
  name: string;
  allowlist: Array<string>;
  denylist: Array<string>;
  indexed: boolean;
};

export type SitemapEntryEdgeMetaFragment = {
  __typename: "SitemapEntryEdge";
  cursor: string;
  node: {
    __typename: "SitemapEntry";
    id: string;
    label: string;
    kind: SitemapEntryKind;
    parentId?: string | undefined | null;
    hasDescendants: boolean;
    metadata?: { isTls: boolean; port: number } | undefined | null;
  };
};

export type SitemapEntryMetaFragment = {
  __typename: "SitemapEntry";
  id: string;
  label: string;
  kind: SitemapEntryKind;
  parentId?: string | undefined | null;
  hasDescendants: boolean;
  metadata?: { isTls: boolean; port: number } | undefined | null;
};

export type StreamMetaFragment = {
  __typename: "Stream";
  id: string;
  createdAt: Date;
  direction: StreamDirection;
  host: string;
  isTls: boolean;
  path: string;
  port: number;
  protocol: StreamProtocol;
  source: Source;
};

export type StreamEdgeMetaFragment = {
  __typename: "StreamEdge";
  cursor: string;
  node: {
    __typename: "Stream";
    id: string;
    createdAt: Date;
    direction: StreamDirection;
    host: string;
    isTls: boolean;
    path: string;
    port: number;
    protocol: StreamProtocol;
    source: Source;
  };
};

export type StreamWsMessageMetaFragment = {
  id: string;
  length: number;
  createdAt: Date;
  direction: StreamMessageDirection;
  edited: boolean;
  alteration: Alteration;
  format: StreamWsMessageFormat;
  streamId: string;
};

export type StreamWsMessageFullFragment = {
  raw: string;
  id: string;
  length: number;
  createdAt: Date;
  direction: StreamMessageDirection;
  edited: boolean;
  alteration: Alteration;
  format: StreamWsMessageFormat;
  streamId: string;
};

export type StreamWsMessageEdgeMetaFragment = {
  __typename: "StreamWsMessageEdge";
  cursor: string;
  node: {
    id: string;
    length: number;
    createdAt: Date;
    direction: StreamMessageDirection;
    edited: boolean;
    alteration: Alteration;
    format: StreamWsMessageFormat;
    streamId: string;
  };
};

export type TamperRuleCollectionFullFragment = {
  __typename: "TamperRuleCollection";
  id: string;
  name: string;
  rules: Array<{
    __typename: "TamperRule";
    id: string;
    isEnabled: boolean;
    isRegex: boolean;
    name: string;
    matchTerm: string;
    replaceTerm: string;
    strategy: TamperStrategy;
    rank: string;
    condition?: string | undefined | null;
    collection: { id: string };
  }>;
};

export type TamperRuleFullFragment = {
  __typename: "TamperRule";
  id: string;
  isEnabled: boolean;
  isRegex: boolean;
  name: string;
  matchTerm: string;
  replaceTerm: string;
  strategy: TamperStrategy;
  rank: string;
  condition?: string | undefined | null;
  collection: { id: string };
};

export type UserProfileFullFragment = {
  __typename: "UserProfile";
  identity: { __typename: "UserIdentity"; name: string; email: string };
  subscription: {
    __typename: "UserSubscription";
    entitlements: Array<{ __typename: "UserEntitlement"; name: string }>;
    plan: { __typename: "UserSubscriptionPlan"; name: string };
  };
};

export type UserSettingsFullFragment = {
  __typename: "UserSettings";
  data: Record<string, unknown>;
  migrations: Record<string, unknown>;
};

export type WorkflowFullFragment = {
  __typename: "Workflow";
  id: string;
  kind: WorkflowKind;
  name: string;
  enabled: boolean;
  global: boolean;
  definition: Record<string, unknown>;
};

export type WorkflowNodeDefinitionFullFragment = {
  __typename: "WorkflowNodeDefinition";
  raw: Record<string, unknown>;
};

export type SendAssistantMessageMutationVariables = Exact<{
  sessionId: Scalars["ID"]["input"];
  message?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type SendAssistantMessageMutation = {
  sendAssistantMessage: {
    error?:
      | { __typename: "OtherUserError"; code: string }
      | {
          __typename: "PermissionDeniedUserError";
          code: string;
          permissionDeniedReason: PermissionDeniedErrorReason;
        }
      | { __typename: "TaskInProgressUserError"; taskId: string; code: string }
      | undefined
      | null;
    task?:
      | {
          __typename: "AssistantMessageTask";
          id: string;
          message?:
            | {
                __typename: "AssistantMessage";
                id: string;
                content: string;
                role: AssistantMessageRole;
                session: { id: string };
              }
            | undefined
            | null;
          session: {
            __typename: "AssistantSession";
            id: string;
            modelId: string;
            name: string;
            updatedAt: Date;
            createdAt: Date;
          };
          error?:
            | {
                __typename: "AssistantUserError";
                code: string;
                assistantReason: AssistantErrorReason;
              }
            | {
                __typename: "AuthenticationUserError";
                reason: AuthenticationErrorReason;
                code: string;
              }
            | { __typename: "OtherUserError"; code: string }
            | undefined
            | null;
        }
      | undefined
      | null;
  };
};

export type CreateAssistantSessionMutationVariables = Exact<{
  input: CreateAssistantSessionInput;
}>;

export type CreateAssistantSessionMutation = {
  createAssistantSession: {
    error?:
      | { __typename: "OtherUserError"; code: string }
      | {
          __typename: "PermissionDeniedUserError";
          code: string;
          permissionDeniedReason: PermissionDeniedErrorReason;
        }
      | undefined
      | null;
    session?:
      | {
          __typename: "AssistantSession";
          id: string;
          modelId: string;
          name: string;
          updatedAt: Date;
          createdAt: Date;
        }
      | undefined
      | null;
  };
};

export type DeleteAssistantSessionMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteAssistantSessionMutation = {
  deleteAssistantSession: { deletedId?: string | undefined | null };
};

export type RenameAssistantSessionMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
}>;

export type RenameAssistantSessionMutation = {
  renameAssistantSession: {
    session?:
      | {
          __typename: "AssistantSession";
          id: string;
          modelId: string;
          name: string;
          updatedAt: Date;
          createdAt: Date;
        }
      | undefined
      | null;
  };
};

export type StartAuthenticationFlowMutationVariables = Exact<{
  [key: string]: never;
}>;

export type StartAuthenticationFlowMutation = {
  startAuthenticationFlow: {
    request?:
      | {
          __typename: "AuthenticationRequest";
          id: string;
          expiresAt: Date;
          userCode: string;
          verificationUrl: string;
        }
      | undefined
      | null;
    error?:
      | {
          __typename: "AuthenticationUserError";
          reason: AuthenticationErrorReason;
          code: string;
        }
      | { __typename: "OtherUserError"; code: string }
      | undefined
      | null;
  };
};

export type RefreshAuthenticationTokenMutationVariables = Exact<{
  refreshToken: Scalars["Token"]["input"];
}>;

export type RefreshAuthenticationTokenMutation = {
  refreshAuthenticationToken: {
    token?:
      | {
          __typename: "AuthenticationToken";
          accessToken: string;
          expiresAt: Date;
          refreshToken?: string | undefined | null;
          scopes: Array<AuthenticationScope>;
        }
      | undefined
      | null;
  };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { logout: { success: boolean } };

export type DeleteAutomateEntriesMutationVariables = Exact<{
  ids: Array<Scalars["ID"]["input"]> | Scalars["ID"]["input"];
}>;

export type DeleteAutomateEntriesMutation = {
  deleteAutomateEntries: {
    deletedIds: Array<string>;
    errors: Array<
      | { __typename: "OtherUserError"; code: string }
      | { __typename: "TaskInProgressUserError"; taskId: string; code: string }
    >;
  };
};

export type RenameAutomateEntryMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
}>;

export type RenameAutomateEntryMutation = {
  renameAutomateEntry: {
    entry?:
      | {
          __typename: "AutomateEntry";
          id: string;
          name: string;
          createdAt: Date;
          settings: {
            __typename: "AutomateSettings";
            closeConnection: boolean;
            updateContentLength: boolean;
            strategy: AutomatePayloadStrategy;
            concurrency?:
              | {
                  __typename: "AutomateConcurrencySetting";
                  delay: number;
                  workers: number;
                }
              | undefined
              | null;
            retryOnFailure: {
              __typename: "AutomateRetryOnFailureSetting";
              backoff: number;
              maximumRetries: number;
            };
            payloads: Array<{
              __typename: "AutomatePayload";
              kind: AutomatePayloadKind;
              options:
                | {
                    __typename: "AutomateHostedFilePayload";
                    id: string;
                    delimiter?: string | undefined | null;
                  }
                | { __typename: "AutomateNullPayload"; quantity: number }
                | {
                    __typename: "AutomateSimpleListPayload";
                    list: Array<string>;
                  };
              preprocessors: Array<{
                __typename: "AutomatePreprocessor";
                kind: AutomatePreprocessorKind;
                options: { value: string } | { value: string };
              }>;
              urlEncode: {
                __typename: "AutomateUrlEncodeOptions";
                charset?: string | undefined | null;
                enabled: boolean;
                nonAscii: boolean;
              };
            }>;
            placeholders: Array<{
              __typename: "AutomatePlaceholder";
              start: number;
              end: number;
            }>;
          };
          session: { id: string };
        }
      | undefined
      | null;
  };
};

export type CreateAutomateSessionMutationVariables = Exact<{
  input: CreateAutomateSessionInput;
}>;

export type CreateAutomateSessionMutation = {
  createAutomateSession: {
    session?:
      | {
          __typename: "AutomateSession";
          raw: string;
          id: string;
          name: string;
          createdAt: Date;
          connection: {
            __typename: "ConnectionInfo";
            host: string;
            port: number;
            isTls: boolean;
          };
          settings: {
            __typename: "AutomateSettings";
            closeConnection: boolean;
            updateContentLength: boolean;
            strategy: AutomatePayloadStrategy;
            concurrency?:
              | {
                  __typename: "AutomateConcurrencySetting";
                  delay: number;
                  workers: number;
                }
              | undefined
              | null;
            retryOnFailure: {
              __typename: "AutomateRetryOnFailureSetting";
              backoff: number;
              maximumRetries: number;
            };
            payloads: Array<{
              __typename: "AutomatePayload";
              kind: AutomatePayloadKind;
              options:
                | {
                    __typename: "AutomateHostedFilePayload";
                    id: string;
                    delimiter?: string | undefined | null;
                  }
                | { __typename: "AutomateNullPayload"; quantity: number }
                | {
                    __typename: "AutomateSimpleListPayload";
                    list: Array<string>;
                  };
              preprocessors: Array<{
                __typename: "AutomatePreprocessor";
                kind: AutomatePreprocessorKind;
                options: { value: string } | { value: string };
              }>;
              urlEncode: {
                __typename: "AutomateUrlEncodeOptions";
                charset?: string | undefined | null;
                enabled: boolean;
                nonAscii: boolean;
              };
            }>;
            placeholders: Array<{
              __typename: "AutomatePlaceholder";
              start: number;
              end: number;
            }>;
          };
          entries: Array<{
            __typename: "AutomateEntry";
            id: string;
            name: string;
            createdAt: Date;
            session: { id: string };
          }>;
        }
      | undefined
      | null;
  };
};

export type DeleteAutomateSessionMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteAutomateSessionMutation = {
  deleteAutomateSession: { deletedId?: string | undefined | null };
};

export type RenameAutomateSessionMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
}>;

export type RenameAutomateSessionMutation = {
  renameAutomateSession: {
    session?:
      | {
          __typename: "AutomateSession";
          raw: string;
          id: string;
          name: string;
          createdAt: Date;
          connection: {
            __typename: "ConnectionInfo";
            host: string;
            port: number;
            isTls: boolean;
          };
          settings: {
            __typename: "AutomateSettings";
            closeConnection: boolean;
            updateContentLength: boolean;
            strategy: AutomatePayloadStrategy;
            concurrency?:
              | {
                  __typename: "AutomateConcurrencySetting";
                  delay: number;
                  workers: number;
                }
              | undefined
              | null;
            retryOnFailure: {
              __typename: "AutomateRetryOnFailureSetting";
              backoff: number;
              maximumRetries: number;
            };
            payloads: Array<{
              __typename: "AutomatePayload";
              kind: AutomatePayloadKind;
              options:
                | {
                    __typename: "AutomateHostedFilePayload";
                    id: string;
                    delimiter?: string | undefined | null;
                  }
                | { __typename: "AutomateNullPayload"; quantity: number }
                | {
                    __typename: "AutomateSimpleListPayload";
                    list: Array<string>;
                  };
              preprocessors: Array<{
                __typename: "AutomatePreprocessor";
                kind: AutomatePreprocessorKind;
                options: { value: string } | { value: string };
              }>;
              urlEncode: {
                __typename: "AutomateUrlEncodeOptions";
                charset?: string | undefined | null;
                enabled: boolean;
                nonAscii: boolean;
              };
            }>;
            placeholders: Array<{
              __typename: "AutomatePlaceholder";
              start: number;
              end: number;
            }>;
          };
          entries: Array<{
            __typename: "AutomateEntry";
            id: string;
            name: string;
            createdAt: Date;
            session: { id: string };
          }>;
        }
      | undefined
      | null;
  };
};

export type UpdateAutomateSessionMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  input: UpdateAutomateSessionInput;
}>;

export type UpdateAutomateSessionMutation = {
  updateAutomateSession: {
    session?:
      | {
          __typename: "AutomateSession";
          raw: string;
          id: string;
          name: string;
          createdAt: Date;
          connection: {
            __typename: "ConnectionInfo";
            host: string;
            port: number;
            isTls: boolean;
          };
          settings: {
            __typename: "AutomateSettings";
            closeConnection: boolean;
            updateContentLength: boolean;
            strategy: AutomatePayloadStrategy;
            concurrency?:
              | {
                  __typename: "AutomateConcurrencySetting";
                  delay: number;
                  workers: number;
                }
              | undefined
              | null;
            retryOnFailure: {
              __typename: "AutomateRetryOnFailureSetting";
              backoff: number;
              maximumRetries: number;
            };
            payloads: Array<{
              __typename: "AutomatePayload";
              kind: AutomatePayloadKind;
              options:
                | {
                    __typename: "AutomateHostedFilePayload";
                    id: string;
                    delimiter?: string | undefined | null;
                  }
                | { __typename: "AutomateNullPayload"; quantity: number }
                | {
                    __typename: "AutomateSimpleListPayload";
                    list: Array<string>;
                  };
              preprocessors: Array<{
                __typename: "AutomatePreprocessor";
                kind: AutomatePreprocessorKind;
                options: { value: string } | { value: string };
              }>;
              urlEncode: {
                __typename: "AutomateUrlEncodeOptions";
                charset?: string | undefined | null;
                enabled: boolean;
                nonAscii: boolean;
              };
            }>;
            placeholders: Array<{
              __typename: "AutomatePlaceholder";
              start: number;
              end: number;
            }>;
          };
          entries: Array<{
            __typename: "AutomateEntry";
            id: string;
            name: string;
            createdAt: Date;
            session: { id: string };
          }>;
        }
      | undefined
      | null;
  };
};

export type CancelAutomateTaskMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type CancelAutomateTaskMutation = {
  cancelAutomateTask: {
    cancelledId?: string | undefined | null;
    userError?:
      | { __typename: "OtherUserError"; code: string }
      | { __typename: "UnknownIdUserError"; id: string; code: string }
      | undefined
      | null;
  };
};

export type PauseAutomateTaskMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type PauseAutomateTaskMutation = {
  pauseAutomateTask: {
    automateTask?:
      | {
          id: string;
          paused: boolean;
          entry: {
            __typename: "AutomateEntry";
            id: string;
            name: string;
            createdAt: Date;
            session: { id: string };
          };
        }
      | undefined
      | null;
    userError?:
      | { __typename: "OtherUserError"; code: string }
      | { __typename: "UnknownIdUserError"; id: string; code: string }
      | undefined
      | null;
  };
};

export type ResumeAutomateTaskMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type ResumeAutomateTaskMutation = {
  resumeAutomateTask: {
    automateTask?:
      | {
          id: string;
          paused: boolean;
          entry: {
            __typename: "AutomateEntry";
            id: string;
            name: string;
            createdAt: Date;
            session: { id: string };
          };
        }
      | undefined
      | null;
    userError?:
      | { __typename: "OtherUserError"; code: string }
      | { __typename: "UnknownIdUserError"; id: string; code: string }
      | undefined
      | null;
  };
};

export type StartAutomateTaskMutationVariables = Exact<{
  automateSessionId: Scalars["ID"]["input"];
}>;

export type StartAutomateTaskMutation = {
  startAutomateTask: {
    automateTask?:
      | {
          id: string;
          paused: boolean;
          entry: {
            __typename: "AutomateEntry";
            id: string;
            name: string;
            createdAt: Date;
            session: { id: string };
          };
        }
      | undefined
      | null;
  };
};

export type CreateBackupMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type CreateBackupMutation = {
  createBackup: {
    task?:
      | {
          __typename: "BackupTask";
          id: string;
          backup: {
            __typename: "Backup";
            id: string;
            name: string;
            path: string;
            size: number;
            status: BackupStatus;
            createdAt: Date;
            updatedAt: Date;
            project?: { id: string } | undefined | null;
          };
        }
      | undefined
      | null;
    error?:
      | { __typename: "OtherUserError"; code: string }
      | {
          __typename: "PermissionDeniedUserError";
          code: string;
          permissionDeniedReason: PermissionDeniedErrorReason;
        }
      | { __typename: "TaskInProgressUserError"; taskId: string; code: string }
      | undefined
      | null;
  };
};

export type DeleteBackupMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteBackupMutation = {
  deleteBackup: {
    deletedId?: string | undefined | null;
    error?:
      | { __typename: "OtherUserError"; code: string }
      | { __typename: "TaskInProgressUserError"; taskId: string; code: string }
      | undefined
      | null;
  };
};

export type RenameBackupMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
}>;

export type RenameBackupMutation = {
  renameBackup: {
    backup?:
      | {
          __typename: "Backup";
          id: string;
          name: string;
          path: string;
          size: number;
          status: BackupStatus;
          createdAt: Date;
          updatedAt: Date;
          project?: { id: string } | undefined | null;
        }
      | undefined
      | null;
  };
};

export type RestoreBackupFromFileMutationVariables = Exact<{
  name: Scalars["String"]["input"];
  file: Scalars["Upload"]["input"];
}>;

export type RestoreBackupFromFileMutation = {
  restoreBackup: {
    error?:
      | { __typename: "NameTakenUserError"; name: string; code: string }
      | { __typename: "OtherUserError"; code: string }
      | {
          __typename: "PermissionDeniedUserError";
          code: string;
          permissionDeniedReason: PermissionDeniedErrorReason;
        }
      | undefined
      | null;
    task?:
      | {
          __typename: "RestoreBackupTask";
          id: string;
          backup?:
            | {
                __typename: "Backup";
                id: string;
                name: string;
                path: string;
                size: number;
                status: BackupStatus;
                createdAt: Date;
                updatedAt: Date;
                project?: { id: string } | undefined | null;
              }
            | undefined
            | null;
          project: {
            __typename: "Project";
            id: string;
            name: string;
            path: string;
            version: string;
            status: ProjectStatus;
            size: number;
            createdAt: Date;
            updatedAt: Date;
            backups: Array<{ id: string }>;
          };
        }
      | undefined
      | null;
  };
};

export type RestoreBackupMutationVariables = Exact<{
  name: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
}>;

export type RestoreBackupMutation = {
  restoreBackup: {
    error?:
      | { __typename: "NameTakenUserError"; name: string; code: string }
      | { __typename: "OtherUserError"; code: string }
      | {
          __typename: "PermissionDeniedUserError";
          code: string;
          permissionDeniedReason: PermissionDeniedErrorReason;
        }
      | undefined
      | null;
    task?:
      | {
          __typename: "RestoreBackupTask";
          id: string;
          backup?:
            | {
                __typename: "Backup";
                id: string;
                name: string;
                path: string;
                size: number;
                status: BackupStatus;
                createdAt: Date;
                updatedAt: Date;
                project?: { id: string } | undefined | null;
              }
            | undefined
            | null;
          project: {
            __typename: "Project";
            id: string;
            name: string;
            path: string;
            version: string;
            status: ProjectStatus;
            size: number;
            createdAt: Date;
            updatedAt: Date;
            backups: Array<{ id: string }>;
          };
        }
      | undefined
      | null;
  };
};

export type CancelBackupTaskMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type CancelBackupTaskMutation = {
  cancelBackupTask: {
    cancelledId?: string | undefined | null;
    error?:
      | { __typename: "OtherUserError"; code: string }
      | { __typename: "UnknownIdUserError"; id: string; code: string }
      | undefined
      | null;
  };
};

export type CancelRestoreBackupTaskMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type CancelRestoreBackupTaskMutation = {
  cancelRestoreBackupTask: {
    cancelledId?: string | undefined | null;
    error?:
      | { __typename: "OtherUserError"; code: string }
      | { __typename: "UnknownIdUserError"; id: string; code: string }
      | undefined
      | null;
  };
};

export type DeleteBrowserMutationVariables = Exact<{ [key: string]: never }>;

export type DeleteBrowserMutation = {
  deleteBrowser: { deletedId?: string | undefined | null };
};

export type InstallBrowserMutationVariables = Exact<{ [key: string]: never }>;

export type InstallBrowserMutation = {
  installBrowser: {
    browser?:
      | {
          __typename: "Browser";
          id: string;
          installedAt: Date;
          latest: boolean;
          path: string;
          size: number;
          version: string;
        }
      | undefined
      | null;
    error?:
      | { __typename: "OtherUserError"; code: string }
      | { __typename: "UnsupportedPlatformUserError"; code: string }
      | undefined
      | null;
  };
};

export type UpdateBrowserMutationVariables = Exact<{ [key: string]: never }>;

export type UpdateBrowserMutation = {
  updateBrowser: {
    browser?:
      | {
          __typename: "Browser";
          id: string;
          installedAt: Date;
          latest: boolean;
          path: string;
          size: number;
          version: string;
        }
      | undefined
      | null;
    error?:
      | { __typename: "OtherUserError"; code: string }
      | {
          __typename: "RenderFailedUserError";
          reason: RenderFailedErrorReason;
          code: string;
        }
      | { __typename: "UnsupportedPlatformUserError"; code: string }
      | undefined
      | null;
  };
};

export type UpdateOnboardingMutationVariables = Exact<{
  input: SetConfigOnboardingInput;
}>;

export type UpdateOnboardingMutation = {
  setGlobalConfigOnboarding: {
    config: {
      onboarding: {
        __typename: "OnboardingState";
        caCertificate: boolean;
        license: boolean;
        project: boolean;
      };
    };
  };
};

export type RenameDataExportMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
}>;

export type RenameDataExportMutation = {
  renameDataExport: {
    export?:
      | {
          __typename: "DataExport";
          id: string;
          name: string;
          path: string;
          size: number;
          status: DataExportStatus;
          format: DataExportFormat;
          error?: string | undefined | null;
          createdAt: Date;
        }
      | undefined
      | null;
  };
};

export type DeleteDataExportMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteDataExportMutation = {
  deleteDataExport: {
    deletedId?: string | undefined | null;
    userError?:
      | { __typename: "OtherUserError"; code: string }
      | { __typename: "TaskInProgressUserError"; taskId: string; code: string }
      | undefined
      | null;
  };
};

export type CancelDataExportTaskMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type CancelDataExportTaskMutation = {
  cancelDataExportTask: {
    cancelledId?: string | undefined | null;
    userError?:
      | { __typename: "OtherUserError"; code: string }
      | { __typename: "UnknownIdUserError"; id: string; code: string }
      | undefined
      | null;
  };
};

export type CreateFilterPresetMutationVariables = Exact<{
  input: CreateFilterPresetInput;
}>;

export type CreateFilterPresetMutation = {
  createFilterPreset: {
    filter?:
      | {
          __typename: "FilterPreset";
          id: string;
          alias: string;
          name: string;
          clause: Record<string, unknown>;
        }
      | undefined
      | null;
    error?:
      | { __typename: "AliasTakenUserError"; alias: string; code: string }
      | { __typename: "NameTakenUserError"; name: string; code: string }
      | { __typename: "OtherUserError"; code: string }
      | {
          __typename: "PermissionDeniedUserError";
          code: string;
          permissionDeniedReason: PermissionDeniedErrorReason;
        }
      | undefined
      | null;
  };
};

export type UpdateFilterPresetMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  input: UpdateFilterPresetInput;
}>;

export type UpdateFilterPresetMutation = {
  updateFilterPreset: {
    filter?:
      | {
          __typename: "FilterPreset";
          id: string;
          alias: string;
          name: string;
          clause: Record<string, unknown>;
        }
      | undefined
      | null;
    error?:
      | { __typename: "AliasTakenUserError"; alias: string; code: string }
      | { __typename: "NameTakenUserError"; name: string; code: string }
      | { __typename: "OtherUserError"; code: string }
      | undefined
      | null;
  };
};

export type DeleteFilterPresetMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteFilterPresetMutation = {
  deleteFilterPreset: { deletedId?: string | undefined | null };
};

export type DeleteFindingsMutationVariables = Exact<{
  ids: Array<Scalars["ID"]["input"]> | Scalars["ID"]["input"];
}>;

export type DeleteFindingsMutation = {
  deleteFindings: { deletedIds?: Array<string> | undefined | null };
};

export type DeleteInterceptEntriesMutationVariables = Exact<{
  filter?: InputMaybe<FilterClauseInterceptEntryInput>;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;

export type DeleteInterceptEntriesMutation = {
  deleteInterceptEntries: {
    task?:
      | {
          __typename: "DeleteInterceptEntriesTask";
          id: string;
          deletedEntryIds: Array<string>;
        }
      | undefined
      | null;
    error?:
      | { __typename: "OtherUserError"; code: string }
      | { __typename: "TaskInProgressUserError"; taskId: string; code: string }
      | undefined
      | null;
  };
};

export type DeleteInterceptEntryMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteInterceptEntryMutation = {
  deleteInterceptEntry: {
    deletedId?: string | undefined | null;
    error?:
      | { __typename: "OtherUserError"; code: string }
      | { __typename: "UnknownIdUserError"; id: string; code: string }
      | undefined
      | null;
  };
};

export type DeleteHostedFileMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteHostedFileMutation = {
  deleteHostedFile: { deletedId?: string | undefined | null };
};

export type RenameHostedFileMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
}>;

export type RenameHostedFileMutation = {
  renameHostedFile: {
    hostedFile?:
      | {
          __typename: "HostedFile";
          id: string;
          name: string;
          path: string;
          size: number;
          updatedAt: Date;
          createdAt: Date;
        }
      | undefined
      | null;
  };
};

export type UploadHostedFileMutationVariables = Exact<{
  input: UploadHostedFileInput;
}>;

export type UploadHostedFileMutation = {
  uploadHostedFile: {
    hostedFile?:
      | {
          __typename: "HostedFile";
          id: string;
          name: string;
          path: string;
          size: number;
          updatedAt: Date;
          createdAt: Date;
        }
      | undefined
      | null;
  };
};

export type ForwardInterceptMessageMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  input?: InputMaybe<ForwardInterceptMessageInput>;
}>;

export type ForwardInterceptMessageMutation = {
  forwardInterceptMessage: { forwardedId?: string | undefined | null };
};

export type DropInterceptMesageMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DropInterceptMesageMutation = {
  dropInterceptMessage: { droppedId?: string | undefined | null };
};

export type SetInterceptOptionsMutationVariables = Exact<{
  input: InterceptOptionsInput;
}>;

export type SetInterceptOptionsMutation = {
  setInterceptOptions: {
    options: {
      request: { enabled: boolean };
      response: { enabled: boolean };
      scope?: { scopeId: string } | undefined | null;
    };
  };
};

export type PauseInterceptMutationVariables = Exact<{ [key: string]: never }>;

export type PauseInterceptMutation = {
  pauseIntercept: { status: InterceptStatus };
};

export type ResumeInterceptMutationVariables = Exact<{ [key: string]: never }>;

export type ResumeInterceptMutation = {
  resumeIntercept: { status: InterceptStatus };
};

export type CreateUpstreamProxyMutationVariables = Exact<{
  input: CreateUpstreamProxyInput;
}>;

export type CreateUpstreamProxyMutation = {
  createUpstreamProxy: {
    proxy?:
      | {
          __typename: "UpstreamProxy";
          id: string;
          allowlist: Array<string>;
          denylist: Array<string>;
          enabled: boolean;
          host: string;
          kind: UpstreamProxyKind;
          port: number;
          rank: string;
          auth?:
            | {
                __typename: "UpstreamProxyAuthBasic";
                username: string;
                password: string;
              }
            | undefined
            | null;
        }
      | undefined
      | null;
  };
};

export type UpdateUpstreamProxyMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  input: UpdateUpstreamProxyInput;
}>;

export type UpdateUpstreamProxyMutation = {
  updateUpstreamProxy: {
    proxy?:
      | {
          __typename: "UpstreamProxy";
          id: string;
          allowlist: Array<string>;
          denylist: Array<string>;
          enabled: boolean;
          host: string;
          kind: UpstreamProxyKind;
          port: number;
          rank: string;
          auth?:
            | {
                __typename: "UpstreamProxyAuthBasic";
                username: string;
                password: string;
              }
            | undefined
            | null;
        }
      | undefined
      | null;
  };
};

export type DeleteUpstreamProxyMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteUpstreamProxyMutation = {
  deleteUpstreamProxy: { deletedId?: string | undefined | null };
};

export type TestUpstreamProxyMutationVariables = Exact<{
  input: TestUpstreamProxyInput;
}>;

export type TestUpstreamProxyMutation = {
  testUpstreamProxy: { success?: boolean | undefined | null };
};

export type RankUpstreamProxyMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  input: RankUpstreamProxyInput;
}>;

export type RankUpstreamProxyMutation = {
  rankUpstreamProxy: {
    proxy?:
      | {
          __typename: "UpstreamProxy";
          id: string;
          allowlist: Array<string>;
          denylist: Array<string>;
          enabled: boolean;
          host: string;
          kind: UpstreamProxyKind;
          port: number;
          rank: string;
          auth?:
            | {
                __typename: "UpstreamProxyAuthBasic";
                username: string;
                password: string;
              }
            | undefined
            | null;
        }
      | undefined
      | null;
  };
};

export type CreateProjectMutationVariables = Exact<{
  input: CreateProjectInput;
}>;

export type CreateProjectMutation = {
  createProject: {
    project?:
      | {
          __typename: "Project";
          id: string;
          name: string;
          path: string;
          version: string;
          status: ProjectStatus;
          size: number;
          createdAt: Date;
          updatedAt: Date;
          backups: Array<{ id: string }>;
        }
      | undefined
      | null;
    error?:
      | { __typename: "NameTakenUserError"; name: string; code: string }
      | { __typename: "OtherUserError"; code: string }
      | {
          __typename: "PermissionDeniedUserError";
          code: string;
          permissionDeniedReason: PermissionDeniedErrorReason;
        }
      | undefined
      | null;
  };
};

export type SelectProjectMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type SelectProjectMutation = {
  selectProject: {
    project?:
      | {
          __typename: "Project";
          id: string;
          name: string;
          path: string;
          version: string;
          status: ProjectStatus;
          size: number;
          createdAt: Date;
          updatedAt: Date;
          backups: Array<{ id: string }>;
        }
      | undefined
      | null;
  };
};

export type DeleteProjectMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteProjectMutation = {
  deleteProject: { deletedId?: string | undefined | null };
};

export type RenameProjectMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
}>;

export type RenameProjectMutation = {
  renameProject: {
    project?:
      | {
          __typename: "Project";
          id: string;
          name: string;
          path: string;
          version: string;
          status: ProjectStatus;
          size: number;
          createdAt: Date;
          updatedAt: Date;
          backups: Array<{ id: string }>;
        }
      | undefined
      | null;
    error?:
      | { __typename: "NameTakenUserError"; name: string; code: string }
      | { __typename: "OtherUserError"; code: string }
      | undefined
      | null;
  };
};

export type RenameReplaySessionCollectionMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
}>;

export type RenameReplaySessionCollectionMutation = {
  renameReplaySessionCollection: {
    collection?:
      | {
          __typename: "ReplaySessionCollection";
          id: string;
          name: string;
          sessions: Array<{
            __typename: "ReplaySession";
            id: string;
            name: string;
            activeEntry?:
              | {
                  __typename: "ReplayEntry";
                  id: string;
                  error?: string | undefined | null;
                  sessionId: string;
                  request: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: { color?: string | undefined | null };
                    response?:
                      | {
                          __typename: "Response";
                          id: string;
                          statusCode: number;
                          roundtripTime: number;
                          length: number;
                          createdAt: Date;
                          alteration: Alteration;
                          edited: boolean;
                        }
                      | undefined
                      | null;
                  };
                }
              | undefined
              | null;
            collection: { id: string };
            entries: {
              edges: Array<{
                cursor: string;
                node: {
                  __typename: "ReplayEntry";
                  id: string;
                  error?: string | undefined | null;
                  sessionId: string;
                  request: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: { color?: string | undefined | null };
                    response?:
                      | {
                          __typename: "Response";
                          id: string;
                          statusCode: number;
                          roundtripTime: number;
                          length: number;
                          createdAt: Date;
                          alteration: Alteration;
                          edited: boolean;
                        }
                      | undefined
                      | null;
                  };
                };
              }>;
              pageInfo: {
                __typename: "PageInfo";
                hasPreviousPage: boolean;
                hasNextPage: boolean;
                startCursor?: string | undefined | null;
                endCursor?: string | undefined | null;
              };
              count: { __typename: "Count"; value: number; snapshot: number };
            };
          }>;
        }
      | undefined
      | null;
  };
};

export type CreateReplaySessionCollectionMutationVariables = Exact<{
  input: CreateReplaySessionCollectionInput;
}>;

export type CreateReplaySessionCollectionMutation = {
  createReplaySessionCollection: {
    collection?:
      | {
          __typename: "ReplaySessionCollection";
          id: string;
          name: string;
          sessions: Array<{
            __typename: "ReplaySession";
            id: string;
            name: string;
            activeEntry?:
              | {
                  __typename: "ReplayEntry";
                  id: string;
                  error?: string | undefined | null;
                  sessionId: string;
                  request: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: { color?: string | undefined | null };
                    response?:
                      | {
                          __typename: "Response";
                          id: string;
                          statusCode: number;
                          roundtripTime: number;
                          length: number;
                          createdAt: Date;
                          alteration: Alteration;
                          edited: boolean;
                        }
                      | undefined
                      | null;
                  };
                }
              | undefined
              | null;
            collection: { id: string };
            entries: {
              edges: Array<{
                cursor: string;
                node: {
                  __typename: "ReplayEntry";
                  id: string;
                  error?: string | undefined | null;
                  sessionId: string;
                  request: {
                    __typename: "Request";
                    id: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    method: string;
                    edited: boolean;
                    isTls: boolean;
                    length: number;
                    alteration: Alteration;
                    fileExtension?: string | undefined | null;
                    source: Source;
                    createdAt: Date;
                    metadata: { color?: string | undefined | null };
                    response?:
                      | {
                          __typename: "Response";
                          id: string;
                          statusCode: number;
                          roundtripTime: number;
                          length: number;
                          createdAt: Date;
                          alteration: Alteration;
                          edited: boolean;
                        }
                      | undefined
                      | null;
                  };
                };
              }>;
              pageInfo: {
                __typename: "PageInfo";
                hasPreviousPage: boolean;
                hasNextPage: boolean;
                startCursor?: string | undefined | null;
                endCursor?: string | undefined | null;
              };
              count: { __typename: "Count"; value: number; snapshot: number };
            };
          }>;
        }
      | undefined
      | null;
  };
};

export type DeleteReplaySessionCollectionMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteReplaySessionCollectionMutation = {
  deleteReplaySessionCollection: { deletedId?: string | undefined | null };
};

export type RenameReplaySessionMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
}>;

export type RenameReplaySessionMutation = {
  renameReplaySession: {
    session?:
      | {
          __typename: "ReplaySession";
          id: string;
          name: string;
          activeEntry?:
            | {
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                sessionId: string;
                request: {
                  __typename: "Request";
                  id: string;
                  host: string;
                  port: number;
                  path: string;
                  query: string;
                  method: string;
                  edited: boolean;
                  isTls: boolean;
                  length: number;
                  alteration: Alteration;
                  fileExtension?: string | undefined | null;
                  source: Source;
                  createdAt: Date;
                  metadata: { color?: string | undefined | null };
                  response?:
                    | {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                      }
                    | undefined
                    | null;
                };
              }
            | undefined
            | null;
          collection: { id: string };
          entries: {
            edges: Array<{
              cursor: string;
              node: {
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                sessionId: string;
                request: {
                  __typename: "Request";
                  id: string;
                  host: string;
                  port: number;
                  path: string;
                  query: string;
                  method: string;
                  edited: boolean;
                  isTls: boolean;
                  length: number;
                  alteration: Alteration;
                  fileExtension?: string | undefined | null;
                  source: Source;
                  createdAt: Date;
                  metadata: { color?: string | undefined | null };
                  response?:
                    | {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                      }
                    | undefined
                    | null;
                };
              };
            }>;
            pageInfo: {
              __typename: "PageInfo";
              hasPreviousPage: boolean;
              hasNextPage: boolean;
              startCursor?: string | undefined | null;
              endCursor?: string | undefined | null;
            };
            count: { __typename: "Count"; value: number; snapshot: number };
          };
        }
      | undefined
      | null;
  };
};

export type SetActiveReplaySessionEntryMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  entryId: Scalars["ID"]["input"];
}>;

export type SetActiveReplaySessionEntryMutation = {
  setActiveReplaySessionEntry: {
    session?:
      | {
          __typename: "ReplaySession";
          id: string;
          name: string;
          activeEntry?:
            | {
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                sessionId: string;
                request: {
                  __typename: "Request";
                  id: string;
                  host: string;
                  port: number;
                  path: string;
                  query: string;
                  method: string;
                  edited: boolean;
                  isTls: boolean;
                  length: number;
                  alteration: Alteration;
                  fileExtension?: string | undefined | null;
                  source: Source;
                  createdAt: Date;
                  metadata: { color?: string | undefined | null };
                  response?:
                    | {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                      }
                    | undefined
                    | null;
                };
              }
            | undefined
            | null;
          collection: { id: string };
          entries: {
            edges: Array<{
              cursor: string;
              node: {
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                sessionId: string;
                request: {
                  __typename: "Request";
                  id: string;
                  host: string;
                  port: number;
                  path: string;
                  query: string;
                  method: string;
                  edited: boolean;
                  isTls: boolean;
                  length: number;
                  alteration: Alteration;
                  fileExtension?: string | undefined | null;
                  source: Source;
                  createdAt: Date;
                  metadata: { color?: string | undefined | null };
                  response?:
                    | {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                      }
                    | undefined
                    | null;
                };
              };
            }>;
            pageInfo: {
              __typename: "PageInfo";
              hasPreviousPage: boolean;
              hasNextPage: boolean;
              startCursor?: string | undefined | null;
              endCursor?: string | undefined | null;
            };
            count: { __typename: "Count"; value: number; snapshot: number };
          };
        }
      | undefined
      | null;
  };
};

export type DeleteReplaySessionsMutationVariables = Exact<{
  ids: Array<Scalars["ID"]["input"]> | Scalars["ID"]["input"];
}>;

export type DeleteReplaySessionsMutation = {
  deleteReplaySessions: { deletedIds?: Array<string> | undefined | null };
};

export type CreateReplaySessionMutationVariables = Exact<{
  input: CreateReplaySessionInput;
}>;

export type CreateReplaySessionMutation = {
  createReplaySession: {
    session?:
      | {
          __typename: "ReplaySession";
          id: string;
          name: string;
          collection: {
            __typename: "ReplaySessionCollection";
            id: string;
            name: string;
            sessions: Array<{
              __typename: "ReplaySession";
              id: string;
              name: string;
              activeEntry?:
                | {
                    __typename: "ReplayEntry";
                    id: string;
                    error?: string | undefined | null;
                    sessionId: string;
                    request: {
                      __typename: "Request";
                      id: string;
                      host: string;
                      port: number;
                      path: string;
                      query: string;
                      method: string;
                      edited: boolean;
                      isTls: boolean;
                      length: number;
                      alteration: Alteration;
                      fileExtension?: string | undefined | null;
                      source: Source;
                      createdAt: Date;
                      metadata: { color?: string | undefined | null };
                      response?:
                        | {
                            __typename: "Response";
                            id: string;
                            statusCode: number;
                            roundtripTime: number;
                            length: number;
                            createdAt: Date;
                            alteration: Alteration;
                            edited: boolean;
                          }
                        | undefined
                        | null;
                    };
                  }
                | undefined
                | null;
              collection: { id: string };
              entries: {
                edges: Array<{
                  cursor: string;
                  node: {
                    __typename: "ReplayEntry";
                    id: string;
                    error?: string | undefined | null;
                    sessionId: string;
                    request: {
                      __typename: "Request";
                      id: string;
                      host: string;
                      port: number;
                      path: string;
                      query: string;
                      method: string;
                      edited: boolean;
                      isTls: boolean;
                      length: number;
                      alteration: Alteration;
                      fileExtension?: string | undefined | null;
                      source: Source;
                      createdAt: Date;
                      metadata: { color?: string | undefined | null };
                      response?:
                        | {
                            __typename: "Response";
                            id: string;
                            statusCode: number;
                            roundtripTime: number;
                            length: number;
                            createdAt: Date;
                            alteration: Alteration;
                            edited: boolean;
                          }
                        | undefined
                        | null;
                    };
                  };
                }>;
                pageInfo: {
                  __typename: "PageInfo";
                  hasPreviousPage: boolean;
                  hasNextPage: boolean;
                  startCursor?: string | undefined | null;
                  endCursor?: string | undefined | null;
                };
                count: { __typename: "Count"; value: number; snapshot: number };
              };
            }>;
          };
          activeEntry?:
            | {
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                sessionId: string;
                request: {
                  __typename: "Request";
                  id: string;
                  host: string;
                  port: number;
                  path: string;
                  query: string;
                  method: string;
                  edited: boolean;
                  isTls: boolean;
                  length: number;
                  alteration: Alteration;
                  fileExtension?: string | undefined | null;
                  source: Source;
                  createdAt: Date;
                  metadata: { color?: string | undefined | null };
                  response?:
                    | {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                      }
                    | undefined
                    | null;
                };
              }
            | undefined
            | null;
          entries: {
            edges: Array<{
              cursor: string;
              node: {
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                sessionId: string;
                request: {
                  __typename: "Request";
                  id: string;
                  host: string;
                  port: number;
                  path: string;
                  query: string;
                  method: string;
                  edited: boolean;
                  isTls: boolean;
                  length: number;
                  alteration: Alteration;
                  fileExtension?: string | undefined | null;
                  source: Source;
                  createdAt: Date;
                  metadata: { color?: string | undefined | null };
                  response?:
                    | {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                      }
                    | undefined
                    | null;
                };
              };
            }>;
            pageInfo: {
              __typename: "PageInfo";
              hasPreviousPage: boolean;
              hasNextPage: boolean;
              startCursor?: string | undefined | null;
              endCursor?: string | undefined | null;
            };
            count: { __typename: "Count"; value: number; snapshot: number };
          };
        }
      | undefined
      | null;
  };
};

export type MoveReplaySessionMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  collectionId: Scalars["ID"]["input"];
}>;

export type MoveReplaySessionMutation = {
  moveReplaySession: {
    session?:
      | {
          __typename: "ReplaySession";
          id: string;
          name: string;
          activeEntry?:
            | {
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                sessionId: string;
                request: {
                  __typename: "Request";
                  id: string;
                  host: string;
                  port: number;
                  path: string;
                  query: string;
                  method: string;
                  edited: boolean;
                  isTls: boolean;
                  length: number;
                  alteration: Alteration;
                  fileExtension?: string | undefined | null;
                  source: Source;
                  createdAt: Date;
                  metadata: { color?: string | undefined | null };
                  response?:
                    | {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                      }
                    | undefined
                    | null;
                };
              }
            | undefined
            | null;
          collection: { id: string };
          entries: {
            edges: Array<{
              cursor: string;
              node: {
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                sessionId: string;
                request: {
                  __typename: "Request";
                  id: string;
                  host: string;
                  port: number;
                  path: string;
                  query: string;
                  method: string;
                  edited: boolean;
                  isTls: boolean;
                  length: number;
                  alteration: Alteration;
                  fileExtension?: string | undefined | null;
                  source: Source;
                  createdAt: Date;
                  metadata: { color?: string | undefined | null };
                  response?:
                    | {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                      }
                    | undefined
                    | null;
                };
              };
            }>;
            pageInfo: {
              __typename: "PageInfo";
              hasPreviousPage: boolean;
              hasNextPage: boolean;
              startCursor?: string | undefined | null;
              endCursor?: string | undefined | null;
            };
            count: { __typename: "Count"; value: number; snapshot: number };
          };
        }
      | undefined
      | null;
  };
};

export type StartReplayTaskMutationVariables = Exact<{
  replaySessionId: Scalars["ID"]["input"];
  input: StartReplayTaskInput;
}>;

export type StartReplayTaskMutation = {
  startReplayTask: {
    task: {
      __typename: "ReplayTask";
      id: string;
      error?: string | undefined | null;
      replayEntry?:
        | {
            __typename: "ReplayEntry";
            id: string;
            error?: string | undefined | null;
            sessionId: string;
            request: {
              __typename: "Request";
              id: string;
              host: string;
              port: number;
              path: string;
              query: string;
              method: string;
              edited: boolean;
              isTls: boolean;
              length: number;
              alteration: Alteration;
              fileExtension?: string | undefined | null;
              source: Source;
              createdAt: Date;
              metadata: { color?: string | undefined | null };
              response?:
                | {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                  }
                | undefined
                | null;
            };
          }
        | undefined
        | null;
    };
  };
};

export type CancelReplayTaskMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type CancelReplayTaskMutation = {
  cancelReplayTask: { cancelledId: string };
};

export type UpdateRequestMetadataMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  input: UpdateRequestMetadataInput;
}>;

export type UpdateRequestMetadataMutation = {
  updateRequestMetadata: {
    snapshot?: number | undefined | null;
    metadata?: { color?: string | undefined | null } | undefined | null;
  };
};

export type StartExportRequestsTaskMutationVariables = Exact<{
  input: StartExportRequestsTaskInput;
}>;

export type StartExportRequestsTaskMutation = {
  startExportRequestsTask: {
    task?:
      | {
          __typename: "DataExportTask";
          id: string;
          export: {
            __typename: "DataExport";
            id: string;
            name: string;
            path: string;
            size: number;
            status: DataExportStatus;
            format: DataExportFormat;
            error?: string | undefined | null;
            createdAt: Date;
          };
        }
      | undefined
      | null;
    error?:
      | { __typename: "OtherUserError"; code: string }
      | {
          __typename: "PermissionDeniedUserError";
          code: string;
          permissionDeniedReason: PermissionDeniedErrorReason;
        }
      | undefined
      | null;
  };
};

export type RenderRequestMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  input: RenderRequestInput;
}>;

export type RenderRequestMutation = {
  renderRequest: {
    render?: string | undefined | null;
    error?:
      | { __typename: "OtherUserError"; code: string }
      | {
          __typename: "RenderFailedUserError";
          reason: RenderFailedErrorReason;
          code: string;
        }
      | undefined
      | null;
  };
};

export type CreateScopeMutationVariables = Exact<{
  input: CreateScopeInput;
}>;

export type CreateScopeMutation = {
  createScope: {
    error?:
      | {
          __typename: "InvalidGlobTermsUserError";
          terms: Array<string>;
          code: string;
        }
      | { __typename: "OtherUserError"; code: string }
      | undefined
      | null;
    scope?:
      | {
          __typename: "Scope";
          id: string;
          name: string;
          allowlist: Array<string>;
          denylist: Array<string>;
          indexed: boolean;
        }
      | undefined
      | null;
  };
};

export type UpdateScopeMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  input: UpdateScopeInput;
}>;

export type UpdateScopeMutation = {
  updateScope: {
    error?:
      | {
          __typename: "InvalidGlobTermsUserError";
          terms: Array<string>;
          code: string;
        }
      | { __typename: "OtherUserError"; code: string }
      | undefined
      | null;
    scope?:
      | {
          __typename: "Scope";
          id: string;
          name: string;
          allowlist: Array<string>;
          denylist: Array<string>;
          indexed: boolean;
        }
      | undefined
      | null;
  };
};

export type DeleteScopeMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteScopeMutation = { deleteScope: { deletedId: string } };

export type RenameTamperRuleCollectionMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
}>;

export type RenameTamperRuleCollectionMutation = {
  renameTamperRuleCollection: {
    collection?:
      | {
          __typename: "TamperRuleCollection";
          id: string;
          name: string;
          rules: Array<{
            __typename: "TamperRule";
            id: string;
            isEnabled: boolean;
            isRegex: boolean;
            name: string;
            matchTerm: string;
            replaceTerm: string;
            strategy: TamperStrategy;
            rank: string;
            condition?: string | undefined | null;
            collection: { id: string };
          }>;
        }
      | undefined
      | null;
  };
};

export type CreateTamperRuleCollectionMutationVariables = Exact<{
  input: CreateTamperRuleCollectionInput;
}>;

export type CreateTamperRuleCollectionMutation = {
  createTamperRuleCollection: {
    collection?:
      | {
          __typename: "TamperRuleCollection";
          id: string;
          name: string;
          rules: Array<{
            __typename: "TamperRule";
            id: string;
            isEnabled: boolean;
            isRegex: boolean;
            name: string;
            matchTerm: string;
            replaceTerm: string;
            strategy: TamperStrategy;
            rank: string;
            condition?: string | undefined | null;
            collection: { id: string };
          }>;
        }
      | undefined
      | null;
  };
};

export type DeleteTamperRuleCollectionMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteTamperRuleCollectionMutation = {
  deleteTamperRuleCollection: { deletedId?: string | undefined | null };
};

export type CreateTamperRuleMutationVariables = Exact<{
  input: CreateTamperRuleInput;
}>;

export type CreateTamperRuleMutation = {
  createTamperRule: {
    error?:
      | { __typename: "InvalidHTTPQLUserError"; query: string; code: string }
      | { __typename: "InvalidRegexUserError"; term: string; code: string }
      | { __typename: "OtherUserError"; code: string }
      | undefined
      | null;
    rule?:
      | {
          __typename: "TamperRule";
          id: string;
          isEnabled: boolean;
          isRegex: boolean;
          name: string;
          matchTerm: string;
          replaceTerm: string;
          strategy: TamperStrategy;
          rank: string;
          condition?: string | undefined | null;
          collection: { id: string };
        }
      | undefined
      | null;
  };
};

export type DeleteTamperRuleMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteTamperRuleMutation = {
  deleteTamperRule: { deletedId?: string | undefined | null };
};

export type UpdateTamperRuleMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  input: UpdateTamperRuleInput;
}>;

export type UpdateTamperRuleMutation = {
  updateTamperRule: {
    error?:
      | { __typename: "InvalidHTTPQLUserError"; query: string; code: string }
      | { __typename: "InvalidRegexUserError"; term: string; code: string }
      | { __typename: "OtherUserError"; code: string }
      | { __typename: "UnknownIdUserError"; id: string; code: string }
      | undefined
      | null;
    rule?:
      | {
          __typename: "TamperRule";
          id: string;
          isEnabled: boolean;
          isRegex: boolean;
          name: string;
          matchTerm: string;
          replaceTerm: string;
          strategy: TamperStrategy;
          rank: string;
          condition?: string | undefined | null;
          collection: { id: string };
        }
      | undefined
      | null;
  };
};

export type RenameTamperRuleMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
}>;

export type RenameTamperRuleMutation = {
  renameTamperRule: {
    rule?:
      | {
          __typename: "TamperRule";
          id: string;
          isEnabled: boolean;
          isRegex: boolean;
          name: string;
          matchTerm: string;
          replaceTerm: string;
          strategy: TamperStrategy;
          rank: string;
          condition?: string | undefined | null;
          collection: { id: string };
        }
      | undefined
      | null;
  };
};

export type TestTamperRuleMutationVariables = Exact<{
  input: TestTamperRuleInput;
}>;

export type TestTamperRuleMutation = {
  testTamperRule: {
    raw?: string | undefined | null;
    error?:
      | { __typename: "InvalidRegexUserError"; term: string; code: string }
      | { __typename: "OtherUserError"; code: string }
      | undefined
      | null;
  };
};

export type EnableTamperRuleMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type EnableTamperRuleMutation = {
  enableTamperRule: {
    rule?:
      | {
          __typename: "TamperRule";
          id: string;
          isEnabled: boolean;
          isRegex: boolean;
          name: string;
          matchTerm: string;
          replaceTerm: string;
          strategy: TamperStrategy;
          rank: string;
          condition?: string | undefined | null;
          collection: { id: string };
        }
      | undefined
      | null;
  };
};

export type DisableTamperRuleMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DisableTamperRuleMutation = {
  disableTamperRule: {
    rule?:
      | {
          __typename: "TamperRule";
          id: string;
          isEnabled: boolean;
          isRegex: boolean;
          name: string;
          matchTerm: string;
          replaceTerm: string;
          strategy: TamperStrategy;
          rank: string;
          condition?: string | undefined | null;
          collection: { id: string };
        }
      | undefined
      | null;
  };
};

export type RankTamperRuleMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  input: RankTamperRuleInput;
}>;

export type RankTamperRuleMutation = {
  rankTamperRule: {
    rule?:
      | {
          __typename: "TamperRule";
          id: string;
          isEnabled: boolean;
          isRegex: boolean;
          name: string;
          matchTerm: string;
          replaceTerm: string;
          strategy: TamperStrategy;
          rank: string;
          condition?: string | undefined | null;
          collection: { id: string };
        }
      | undefined
      | null;
  };
};

export type MoveTamperRuleMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  collectionId: Scalars["ID"]["input"];
}>;

export type MoveTamperRuleMutation = {
  moveTamperRule: {
    rule?:
      | {
          __typename: "TamperRule";
          id: string;
          isEnabled: boolean;
          isRegex: boolean;
          name: string;
          matchTerm: string;
          replaceTerm: string;
          strategy: TamperStrategy;
          rank: string;
          condition?: string | undefined | null;
          collection: { id: string };
        }
      | undefined
      | null;
  };
};

export type UpdateViewerSettingsMutationVariables = Exact<{
  input: UpdateViewerSettingsInput;
}>;

export type UpdateViewerSettingsMutation = {
  updateViewerSettings: {
    settings?:
      | {
          __typename: "UserSettings";
          data: Record<string, unknown>;
          migrations: Record<string, unknown>;
        }
      | undefined
      | null;
  };
};

export type CreateWorkflowMutationVariables = Exact<{
  input: CreateWorkflowInput;
}>;

export type CreateWorkflowMutation = {
  createWorkflow: {
    error?:
      | { __typename: "OtherUserError"; code: string }
      | {
          __typename: "WorkflowUserError";
          nodeId?: string | undefined | null;
          message: string;
          reason: WorkflowErrorReason;
          code: string;
        }
      | undefined
      | null;
    workflow?:
      | {
          __typename: "Workflow";
          id: string;
          kind: WorkflowKind;
          name: string;
          enabled: boolean;
          global: boolean;
          definition: Record<string, unknown>;
        }
      | undefined
      | null;
  };
};

export type DeleteWorkflowMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteWorkflowMutation = {
  deleteWorkflow: { deletedId?: string | undefined | null };
};

export type ToggleWorkflowMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  enabled: Scalars["Boolean"]["input"];
}>;

export type ToggleWorkflowMutation = {
  toggleWorkflow: {
    error?:
      | { __typename: "OtherUserError"; code: string }
      | { __typename: "UnknownIdUserError"; id: string; code: string }
      | undefined
      | null;
    workflow?:
      | {
          __typename: "Workflow";
          id: string;
          kind: WorkflowKind;
          name: string;
          enabled: boolean;
          global: boolean;
          definition: Record<string, unknown>;
        }
      | undefined
      | null;
  };
};

export type RenameWorkflowMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
}>;

export type RenameWorkflowMutation = {
  renameWorkflow: {
    error?:
      | { __typename: "OtherUserError"; code: string }
      | { __typename: "UnknownIdUserError"; id: string; code: string }
      | undefined
      | null;
    workflow?:
      | {
          __typename: "Workflow";
          id: string;
          kind: WorkflowKind;
          name: string;
          enabled: boolean;
          global: boolean;
          definition: Record<string, unknown>;
        }
      | undefined
      | null;
  };
};

export type UpdateWorkflowMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  input: UpdateWorkflowInput;
}>;

export type UpdateWorkflowMutation = {
  updateWorkflow: {
    error?:
      | { __typename: "OtherUserError"; code: string }
      | { __typename: "UnknownIdUserError"; id: string; code: string }
      | {
          __typename: "WorkflowUserError";
          nodeId?: string | undefined | null;
          message: string;
          reason: WorkflowErrorReason;
          code: string;
        }
      | undefined
      | null;
    workflow?:
      | {
          __typename: "Workflow";
          id: string;
          kind: WorkflowKind;
          name: string;
          enabled: boolean;
          global: boolean;
          definition: Record<string, unknown>;
        }
      | undefined
      | null;
  };
};

export type RunConvertWorkflowMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  input: Scalars["Blob"]["input"];
}>;

export type RunConvertWorkflowMutation = {
  runConvertWorkflow: {
    output?: string | undefined | null;
    error?:
      | { __typename: "OtherUserError"; code: string }
      | {
          __typename: "PermissionDeniedUserError";
          code: string;
          permissionDeniedReason: PermissionDeniedErrorReason;
        }
      | {
          __typename: "WorkflowUserError";
          nodeId?: string | undefined | null;
          message: string;
          reason: WorkflowErrorReason;
          code: string;
        }
      | undefined
      | null;
  };
};

export type GlobalizeWorkflowMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GlobalizeWorkflowMutation = {
  globalizeWorkflow: {
    error?:
      | { __typename: "OtherUserError"; code: string }
      | { __typename: "UnknownIdUserError"; id: string; code: string }
      | {
          __typename: "WorkflowUserError";
          nodeId?: string | undefined | null;
          message: string;
          reason: WorkflowErrorReason;
          code: string;
        }
      | undefined
      | null;
    workflow?:
      | {
          __typename: "Workflow";
          id: string;
          kind: WorkflowKind;
          name: string;
          enabled: boolean;
          global: boolean;
          definition: Record<string, unknown>;
        }
      | undefined
      | null;
  };
};

export type AssistantModelsQueryVariables = Exact<{ [key: string]: never }>;

export type AssistantModelsQuery = {
  assistantModels: Array<{
    __typename: "AssistantModel";
    id: string;
    name: string;
    tokenCredit: number;
  }>;
};

export type AssistantSessionsQueryVariables = Exact<{ [key: string]: never }>;

export type AssistantSessionsQuery = {
  assistantSessions: Array<{
    __typename: "AssistantSession";
    id: string;
    modelId: string;
    name: string;
    updatedAt: Date;
    createdAt: Date;
  }>;
};

export type AssistantSessionQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type AssistantSessionQuery = {
  assistantSession?:
    | {
        __typename: "AssistantSession";
        id: string;
        modelId: string;
        name: string;
        updatedAt: Date;
        createdAt: Date;
        messages: Array<{
          __typename: "AssistantMessage";
          id: string;
          content: string;
          role: AssistantMessageRole;
          session: { id: string };
        }>;
      }
    | undefined
    | null;
};

export type AssistantUsageQueryVariables = Exact<{ [key: string]: never }>;

export type AssistantUsageQuery = {
  viewer: {
    id: string;
    assistantUsage: { __typename: "AssistantUsage"; balance: number };
  };
};

export type AutomateEntryQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type AutomateEntryQuery = {
  automateEntry?:
    | {
        __typename: "AutomateEntry";
        id: string;
        name: string;
        createdAt: Date;
        settings: {
          __typename: "AutomateSettings";
          closeConnection: boolean;
          updateContentLength: boolean;
          strategy: AutomatePayloadStrategy;
          concurrency?:
            | {
                __typename: "AutomateConcurrencySetting";
                delay: number;
                workers: number;
              }
            | undefined
            | null;
          retryOnFailure: {
            __typename: "AutomateRetryOnFailureSetting";
            backoff: number;
            maximumRetries: number;
          };
          payloads: Array<{
            __typename: "AutomatePayload";
            kind: AutomatePayloadKind;
            options:
              | {
                  __typename: "AutomateHostedFilePayload";
                  id: string;
                  delimiter?: string | undefined | null;
                }
              | { __typename: "AutomateNullPayload"; quantity: number }
              | {
                  __typename: "AutomateSimpleListPayload";
                  list: Array<string>;
                };
            preprocessors: Array<{
              __typename: "AutomatePreprocessor";
              kind: AutomatePreprocessorKind;
              options: { value: string } | { value: string };
            }>;
            urlEncode: {
              __typename: "AutomateUrlEncodeOptions";
              charset?: string | undefined | null;
              enabled: boolean;
              nonAscii: boolean;
            };
          }>;
          placeholders: Array<{
            __typename: "AutomatePlaceholder";
            start: number;
            end: number;
          }>;
        };
        session: { id: string };
      }
    | undefined
    | null;
};

export type AutomateEntryRequestsQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<AutomateEntryRequestOrderInput>;
}>;

export type AutomateEntryRequestsQuery = {
  automateEntry?:
    | {
        __typename: "AutomateEntry";
        id: string;
        name: string;
        createdAt: Date;
        requests: {
          snapshot: number;
          edges: Array<{
            __typename: "AutomateEntryRequestEdge";
            cursor: string;
            node: {
              __typename: "AutomateEntryRequest";
              sequenceId: string;
              automateEntryId: string;
              error?: string | undefined | null;
              request: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: { color?: string | undefined | null };
                response?:
                  | {
                      __typename: "Response";
                      id: string;
                      statusCode: number;
                      roundtripTime: number;
                      length: number;
                      createdAt: Date;
                      alteration: Alteration;
                      edited: boolean;
                    }
                  | undefined
                  | null;
              };
              payloads: Array<{
                __typename: "AutomateEntryRequestPayload";
                position?: number | undefined | null;
                raw?: string | undefined | null;
              }>;
            };
          }>;
        };
        settings: {
          __typename: "AutomateSettings";
          closeConnection: boolean;
          updateContentLength: boolean;
          strategy: AutomatePayloadStrategy;
          concurrency?:
            | {
                __typename: "AutomateConcurrencySetting";
                delay: number;
                workers: number;
              }
            | undefined
            | null;
          retryOnFailure: {
            __typename: "AutomateRetryOnFailureSetting";
            backoff: number;
            maximumRetries: number;
          };
          payloads: Array<{
            __typename: "AutomatePayload";
            kind: AutomatePayloadKind;
            options:
              | {
                  __typename: "AutomateHostedFilePayload";
                  id: string;
                  delimiter?: string | undefined | null;
                }
              | { __typename: "AutomateNullPayload"; quantity: number }
              | {
                  __typename: "AutomateSimpleListPayload";
                  list: Array<string>;
                };
            preprocessors: Array<{
              __typename: "AutomatePreprocessor";
              kind: AutomatePreprocessorKind;
              options: { value: string } | { value: string };
            }>;
            urlEncode: {
              __typename: "AutomateUrlEncodeOptions";
              charset?: string | undefined | null;
              enabled: boolean;
              nonAscii: boolean;
            };
          }>;
          placeholders: Array<{
            __typename: "AutomatePlaceholder";
            start: number;
            end: number;
          }>;
        };
        session: { id: string };
      }
    | undefined
    | null;
};

export type AutomateEntryRequestsByOffsetQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<AutomateEntryRequestOrderInput>;
}>;

export type AutomateEntryRequestsByOffsetQuery = {
  automateEntry?:
    | {
        __typename: "AutomateEntry";
        id: string;
        name: string;
        createdAt: Date;
        requestsByOffset: {
          snapshot: number;
          edges: Array<{
            __typename: "AutomateEntryRequestEdge";
            cursor: string;
            node: {
              __typename: "AutomateEntryRequest";
              sequenceId: string;
              automateEntryId: string;
              error?: string | undefined | null;
              request: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: { color?: string | undefined | null };
                response?:
                  | {
                      __typename: "Response";
                      id: string;
                      statusCode: number;
                      roundtripTime: number;
                      length: number;
                      createdAt: Date;
                      alteration: Alteration;
                      edited: boolean;
                    }
                  | undefined
                  | null;
              };
              payloads: Array<{
                __typename: "AutomateEntryRequestPayload";
                position?: number | undefined | null;
                raw?: string | undefined | null;
              }>;
            };
          }>;
        };
        settings: {
          __typename: "AutomateSettings";
          closeConnection: boolean;
          updateContentLength: boolean;
          strategy: AutomatePayloadStrategy;
          concurrency?:
            | {
                __typename: "AutomateConcurrencySetting";
                delay: number;
                workers: number;
              }
            | undefined
            | null;
          retryOnFailure: {
            __typename: "AutomateRetryOnFailureSetting";
            backoff: number;
            maximumRetries: number;
          };
          payloads: Array<{
            __typename: "AutomatePayload";
            kind: AutomatePayloadKind;
            options:
              | {
                  __typename: "AutomateHostedFilePayload";
                  id: string;
                  delimiter?: string | undefined | null;
                }
              | { __typename: "AutomateNullPayload"; quantity: number }
              | {
                  __typename: "AutomateSimpleListPayload";
                  list: Array<string>;
                };
            preprocessors: Array<{
              __typename: "AutomatePreprocessor";
              kind: AutomatePreprocessorKind;
              options: { value: string } | { value: string };
            }>;
            urlEncode: {
              __typename: "AutomateUrlEncodeOptions";
              charset?: string | undefined | null;
              enabled: boolean;
              nonAscii: boolean;
            };
          }>;
          placeholders: Array<{
            __typename: "AutomatePlaceholder";
            start: number;
            end: number;
          }>;
        };
        session: { id: string };
      }
    | undefined
    | null;
};

export type AutomateEntryRequestsCountQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type AutomateEntryRequestsCountQuery = {
  automateEntry?:
    | {
        __typename: "AutomateEntry";
        id: string;
        name: string;
        createdAt: Date;
        requests: {
          count: { __typename: "Count"; value: number; snapshot: number };
        };
        settings: {
          __typename: "AutomateSettings";
          closeConnection: boolean;
          updateContentLength: boolean;
          strategy: AutomatePayloadStrategy;
          concurrency?:
            | {
                __typename: "AutomateConcurrencySetting";
                delay: number;
                workers: number;
              }
            | undefined
            | null;
          retryOnFailure: {
            __typename: "AutomateRetryOnFailureSetting";
            backoff: number;
            maximumRetries: number;
          };
          payloads: Array<{
            __typename: "AutomatePayload";
            kind: AutomatePayloadKind;
            options:
              | {
                  __typename: "AutomateHostedFilePayload";
                  id: string;
                  delimiter?: string | undefined | null;
                }
              | { __typename: "AutomateNullPayload"; quantity: number }
              | {
                  __typename: "AutomateSimpleListPayload";
                  list: Array<string>;
                };
            preprocessors: Array<{
              __typename: "AutomatePreprocessor";
              kind: AutomatePreprocessorKind;
              options: { value: string } | { value: string };
            }>;
            urlEncode: {
              __typename: "AutomateUrlEncodeOptions";
              charset?: string | undefined | null;
              enabled: boolean;
              nonAscii: boolean;
            };
          }>;
          placeholders: Array<{
            __typename: "AutomatePlaceholder";
            start: number;
            end: number;
          }>;
        };
        session: { id: string };
      }
    | undefined
    | null;
};

export type AutomateSessionsQueryVariables = Exact<{ [key: string]: never }>;

export type AutomateSessionsQuery = {
  automateSessions: {
    edges: Array<{
      node: {
        __typename: "AutomateSession";
        id: string;
        name: string;
        createdAt: Date;
        entries: Array<{
          __typename: "AutomateEntry";
          id: string;
          name: string;
          createdAt: Date;
          session: { id: string };
        }>;
      };
    }>;
  };
};

export type AutomateSessionQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type AutomateSessionQuery = {
  automateSession?:
    | {
        __typename: "AutomateSession";
        raw: string;
        id: string;
        name: string;
        createdAt: Date;
        connection: {
          __typename: "ConnectionInfo";
          host: string;
          port: number;
          isTls: boolean;
        };
        settings: {
          __typename: "AutomateSettings";
          closeConnection: boolean;
          updateContentLength: boolean;
          strategy: AutomatePayloadStrategy;
          concurrency?:
            | {
                __typename: "AutomateConcurrencySetting";
                delay: number;
                workers: number;
              }
            | undefined
            | null;
          retryOnFailure: {
            __typename: "AutomateRetryOnFailureSetting";
            backoff: number;
            maximumRetries: number;
          };
          payloads: Array<{
            __typename: "AutomatePayload";
            kind: AutomatePayloadKind;
            options:
              | {
                  __typename: "AutomateHostedFilePayload";
                  id: string;
                  delimiter?: string | undefined | null;
                }
              | { __typename: "AutomateNullPayload"; quantity: number }
              | {
                  __typename: "AutomateSimpleListPayload";
                  list: Array<string>;
                };
            preprocessors: Array<{
              __typename: "AutomatePreprocessor";
              kind: AutomatePreprocessorKind;
              options: { value: string } | { value: string };
            }>;
            urlEncode: {
              __typename: "AutomateUrlEncodeOptions";
              charset?: string | undefined | null;
              enabled: boolean;
              nonAscii: boolean;
            };
          }>;
          placeholders: Array<{
            __typename: "AutomatePlaceholder";
            start: number;
            end: number;
          }>;
        };
        entries: Array<{
          __typename: "AutomateEntry";
          id: string;
          name: string;
          createdAt: Date;
          session: { id: string };
        }>;
      }
    | undefined
    | null;
};

export type AutomateTasksQueryVariables = Exact<{
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type AutomateTasksQuery = {
  automateTasks: {
    edges: Array<{
      node: {
        id: string;
        paused: boolean;
        entry: {
          __typename: "AutomateEntry";
          id: string;
          name: string;
          createdAt: Date;
          session: { id: string };
        };
      };
    }>;
    pageInfo: {
      __typename: "PageInfo";
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor?: string | undefined | null;
      endCursor?: string | undefined | null;
    };
  };
};

export type BackupsQueryVariables = Exact<{ [key: string]: never }>;

export type BackupsQuery = {
  backups: Array<{
    __typename: "Backup";
    id: string;
    name: string;
    path: string;
    size: number;
    status: BackupStatus;
    createdAt: Date;
    updatedAt: Date;
    project?: { id: string } | undefined | null;
  }>;
};

export type BackupUriQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type BackupUriQuery = {
  backup?: { downloadUri?: string | undefined | null } | undefined | null;
};

export type BackupTasksQueryVariables = Exact<{ [key: string]: never }>;

export type BackupTasksQuery = {
  backupTasks: Array<{
    __typename: "BackupTask";
    id: string;
    backup: {
      __typename: "Backup";
      id: string;
      name: string;
      path: string;
      size: number;
      status: BackupStatus;
      createdAt: Date;
      updatedAt: Date;
      project?: { id: string } | undefined | null;
    };
  }>;
};

export type RestoreBackupTasksQueryVariables = Exact<{ [key: string]: never }>;

export type RestoreBackupTasksQuery = {
  restoreBackupTasks: Array<{
    __typename: "RestoreBackupTask";
    id: string;
    backup?:
      | {
          __typename: "Backup";
          id: string;
          name: string;
          path: string;
          size: number;
          status: BackupStatus;
          createdAt: Date;
          updatedAt: Date;
          project?: { id: string } | undefined | null;
        }
      | undefined
      | null;
    project: {
      __typename: "Project";
      id: string;
      name: string;
      path: string;
      version: string;
      status: ProjectStatus;
      size: number;
      createdAt: Date;
      updatedAt: Date;
      backups: Array<{ id: string }>;
    };
  }>;
};

export type BrowserQueryVariables = Exact<{ [key: string]: never }>;

export type BrowserQuery = {
  browser?:
    | {
        __typename: "Browser";
        id: string;
        installedAt: Date;
        latest: boolean;
        path: string;
        size: number;
        version: string;
      }
    | undefined
    | null;
};

export type GlobalConfigQueryVariables = Exact<{ [key: string]: never }>;

export type GlobalConfigQuery = {
  globalConfig: {
    address: string;
    onboarding: {
      __typename: "OnboardingState";
      caCertificate: boolean;
      license: boolean;
      project: boolean;
    };
  };
};

export type DataExportsQueryVariables = Exact<{ [key: string]: never }>;

export type DataExportsQuery = {
  dataExports: Array<{
    __typename: "DataExport";
    id: string;
    name: string;
    path: string;
    size: number;
    status: DataExportStatus;
    format: DataExportFormat;
    error?: string | undefined | null;
    createdAt: Date;
  }>;
};

export type DataExportQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DataExportQuery = {
  dataExport?:
    | {
        __typename: "DataExport";
        downloadUri?: string | undefined | null;
        id: string;
        name: string;
        path: string;
        size: number;
        status: DataExportStatus;
        format: DataExportFormat;
        error?: string | undefined | null;
        createdAt: Date;
      }
    | undefined
    | null;
};

export type DataExportTasksQueryVariables = Exact<{ [key: string]: never }>;

export type DataExportTasksQuery = {
  dataExportTasks: Array<{
    __typename: "DataExportTask";
    id: string;
    export: {
      __typename: "DataExport";
      id: string;
      name: string;
      path: string;
      size: number;
      status: DataExportStatus;
      format: DataExportFormat;
      error?: string | undefined | null;
      createdAt: Date;
    };
  }>;
};

export type FilterPresetsQueryVariables = Exact<{ [key: string]: never }>;

export type FilterPresetsQuery = {
  filterPresets: Array<{
    __typename: "FilterPreset";
    id: string;
    alias: string;
    name: string;
    clause: Record<string, unknown>;
  }>;
};

export type FilterPresetQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type FilterPresetQuery = {
  filterPreset?:
    | {
        __typename: "FilterPreset";
        id: string;
        alias: string;
        name: string;
        clause: Record<string, unknown>;
      }
    | undefined
    | null;
};

export type GetFindingsBeforeQueryVariables = Exact<{
  before: Scalars["String"]["input"];
  last: Scalars["Int"]["input"];
  filter: FilterClauseFindingInput;
  order: FindingOrderInput;
}>;

export type GetFindingsBeforeQuery = {
  findings: {
    snapshot: number;
    edges: Array<{
      cursor: string;
      node: {
        id: string;
        title: string;
        description?: string | undefined | null;
        reporter: string;
        host: string;
        path: string;
        createdAt: Date;
        request: {
          __typename: "Request";
          id: string;
          host: string;
          port: number;
          path: string;
          query: string;
          method: string;
          edited: boolean;
          isTls: boolean;
          length: number;
          alteration: Alteration;
          fileExtension?: string | undefined | null;
          source: Source;
          createdAt: Date;
          metadata: { color?: string | undefined | null };
          response?:
            | {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
              }
            | undefined
            | null;
        };
      };
    }>;
    pageInfo: {
      __typename: "PageInfo";
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor?: string | undefined | null;
      endCursor?: string | undefined | null;
    };
  };
};

export type GetFindingsAfterQueryVariables = Exact<{
  after: Scalars["String"]["input"];
  first: Scalars["Int"]["input"];
  filter: FilterClauseFindingInput;
  order: FindingOrderInput;
}>;

export type GetFindingsAfterQuery = {
  findings: {
    snapshot: number;
    edges: Array<{
      cursor: string;
      node: {
        id: string;
        title: string;
        description?: string | undefined | null;
        reporter: string;
        host: string;
        path: string;
        createdAt: Date;
        request: {
          __typename: "Request";
          id: string;
          host: string;
          port: number;
          path: string;
          query: string;
          method: string;
          edited: boolean;
          isTls: boolean;
          length: number;
          alteration: Alteration;
          fileExtension?: string | undefined | null;
          source: Source;
          createdAt: Date;
          metadata: { color?: string | undefined | null };
          response?:
            | {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
              }
            | undefined
            | null;
        };
      };
    }>;
    pageInfo: {
      __typename: "PageInfo";
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor?: string | undefined | null;
      endCursor?: string | undefined | null;
    };
  };
};

export type GetFindingsByOffsetQueryVariables = Exact<{
  offset: Scalars["Int"]["input"];
  limit: Scalars["Int"]["input"];
  filter: FilterClauseFindingInput;
  order: FindingOrderInput;
}>;

export type GetFindingsByOffsetQuery = {
  findingsByOffset: {
    snapshot: number;
    edges: Array<{
      cursor: string;
      node: {
        id: string;
        title: string;
        description?: string | undefined | null;
        reporter: string;
        host: string;
        path: string;
        createdAt: Date;
        request: {
          __typename: "Request";
          id: string;
          host: string;
          port: number;
          path: string;
          query: string;
          method: string;
          edited: boolean;
          isTls: boolean;
          length: number;
          alteration: Alteration;
          fileExtension?: string | undefined | null;
          source: Source;
          createdAt: Date;
          metadata: { color?: string | undefined | null };
          response?:
            | {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
              }
            | undefined
            | null;
        };
      };
    }>;
    pageInfo: {
      __typename: "PageInfo";
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor?: string | undefined | null;
      endCursor?: string | undefined | null;
    };
  };
};

export type GetFindingsCountQueryVariables = Exact<{
  filter: FilterClauseFindingInput;
}>;

export type GetFindingsCountQuery = {
  findings: { count: { __typename: "Count"; value: number; snapshot: number } };
};

export type FindingReportersQueryVariables = Exact<{ [key: string]: never }>;

export type FindingReportersQuery = { findingReporters: Array<string> };

export type HostedFilesQueryVariables = Exact<{ [key: string]: never }>;

export type HostedFilesQuery = {
  hostedFiles: Array<{
    __typename: "HostedFile";
    id: string;
    name: string;
    path: string;
    size: number;
    updatedAt: Date;
    createdAt: Date;
  }>;
};

export type InterceptRequestMessagesQueryVariables = Exact<{
  first: Scalars["Int"]["input"];
}>;

export type InterceptRequestMessagesQuery = {
  interceptMessages: {
    nodes: Array<
      | {
          __typename: "InterceptRequestMessage";
          id: string;
          request: {
            __typename: "Request";
            id: string;
            host: string;
            port: number;
            path: string;
            query: string;
            method: string;
            edited: boolean;
            isTls: boolean;
            length: number;
            alteration: Alteration;
            fileExtension?: string | undefined | null;
            source: Source;
            createdAt: Date;
            metadata: { color?: string | undefined | null };
            response?:
              | {
                  __typename: "Response";
                  id: string;
                  statusCode: number;
                  roundtripTime: number;
                  length: number;
                  createdAt: Date;
                  alteration: Alteration;
                  edited: boolean;
                }
              | undefined
              | null;
          };
        }
      | {
          __typename: "InterceptResponseMessage";
          id: string;
          response: {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
          };
          request: {
            __typename: "Request";
            id: string;
            host: string;
            port: number;
            path: string;
            query: string;
            method: string;
            edited: boolean;
            isTls: boolean;
            length: number;
            alteration: Alteration;
            fileExtension?: string | undefined | null;
            source: Source;
            createdAt: Date;
            metadata: { color?: string | undefined | null };
            response?:
              | {
                  __typename: "Response";
                  id: string;
                  statusCode: number;
                  roundtripTime: number;
                  length: number;
                  createdAt: Date;
                  alteration: Alteration;
                  edited: boolean;
                }
              | undefined
              | null;
          };
        }
    >;
  };
};

export type InterceptResponseMessagesQueryVariables = Exact<{
  first: Scalars["Int"]["input"];
}>;

export type InterceptResponseMessagesQuery = {
  interceptMessages: {
    nodes: Array<
      | {
          __typename: "InterceptRequestMessage";
          id: string;
          request: {
            __typename: "Request";
            id: string;
            host: string;
            port: number;
            path: string;
            query: string;
            method: string;
            edited: boolean;
            isTls: boolean;
            length: number;
            alteration: Alteration;
            fileExtension?: string | undefined | null;
            source: Source;
            createdAt: Date;
            metadata: { color?: string | undefined | null };
            response?:
              | {
                  __typename: "Response";
                  id: string;
                  statusCode: number;
                  roundtripTime: number;
                  length: number;
                  createdAt: Date;
                  alteration: Alteration;
                  edited: boolean;
                }
              | undefined
              | null;
          };
        }
      | {
          __typename: "InterceptResponseMessage";
          id: string;
          response: {
            __typename: "Response";
            id: string;
            statusCode: number;
            roundtripTime: number;
            length: number;
            createdAt: Date;
            alteration: Alteration;
            edited: boolean;
          };
          request: {
            __typename: "Request";
            id: string;
            host: string;
            port: number;
            path: string;
            query: string;
            method: string;
            edited: boolean;
            isTls: boolean;
            length: number;
            alteration: Alteration;
            fileExtension?: string | undefined | null;
            source: Source;
            createdAt: Date;
            metadata: { color?: string | undefined | null };
            response?:
              | {
                  __typename: "Response";
                  id: string;
                  statusCode: number;
                  roundtripTime: number;
                  length: number;
                  createdAt: Date;
                  alteration: Alteration;
                  edited: boolean;
                }
              | undefined
              | null;
          };
        }
    >;
  };
};

export type InterceptOptionsQueryVariables = Exact<{ [key: string]: never }>;

export type InterceptOptionsQuery = {
  interceptOptions: {
    request: { enabled: boolean };
    response: { enabled: boolean };
    scope?: { scopeId: string } | undefined | null;
  };
};

export type InterceptStatusQueryVariables = Exact<{ [key: string]: never }>;

export type InterceptStatusQuery = { interceptStatus: InterceptStatus };

export type InterceptEntriesQueryVariables = Exact<{
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<InterceptEntryOrderInput>;
  filter?: InputMaybe<FilterClauseInterceptEntryInput>;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;

export type InterceptEntriesQuery = {
  interceptEntries: {
    snapshot: number;
    edges: Array<{
      __typename: "InterceptEntryEdge";
      cursor: string;
      node: {
        __typename: "InterceptEntry";
        id: string;
        request: {
          __typename: "Request";
          id: string;
          host: string;
          port: number;
          path: string;
          query: string;
          method: string;
          edited: boolean;
          isTls: boolean;
          length: number;
          alteration: Alteration;
          fileExtension?: string | undefined | null;
          source: Source;
          createdAt: Date;
          metadata: { color?: string | undefined | null };
          response?:
            | {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
              }
            | undefined
            | null;
        };
      };
    }>;
    pageInfo: {
      __typename: "PageInfo";
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor?: string | undefined | null;
      endCursor?: string | undefined | null;
    };
  };
};

export type InterceptEntriesByOffsetQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<InterceptEntryOrderInput>;
  filter?: InputMaybe<FilterClauseInterceptEntryInput>;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;

export type InterceptEntriesByOffsetQuery = {
  interceptEntriesByOffset: {
    snapshot: number;
    edges: Array<{
      __typename: "InterceptEntryEdge";
      cursor: string;
      node: {
        __typename: "InterceptEntry";
        id: string;
        request: {
          __typename: "Request";
          id: string;
          host: string;
          port: number;
          path: string;
          query: string;
          method: string;
          edited: boolean;
          isTls: boolean;
          length: number;
          alteration: Alteration;
          fileExtension?: string | undefined | null;
          source: Source;
          createdAt: Date;
          metadata: { color?: string | undefined | null };
          response?:
            | {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
              }
            | undefined
            | null;
        };
      };
    }>;
    pageInfo: {
      __typename: "PageInfo";
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor?: string | undefined | null;
      endCursor?: string | undefined | null;
    };
  };
};

export type InterceptEntryQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type InterceptEntryQuery = {
  interceptEntry?:
    | {
        __typename: "InterceptEntry";
        id: string;
        request: {
          __typename: "Request";
          id: string;
          host: string;
          port: number;
          path: string;
          query: string;
          method: string;
          edited: boolean;
          isTls: boolean;
          length: number;
          alteration: Alteration;
          fileExtension?: string | undefined | null;
          source: Source;
          createdAt: Date;
          raw: string;
          metadata: { color?: string | undefined | null };
          response?:
            | {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
              }
            | undefined
            | null;
          edits: Array<{
            __typename: "Request";
            id: string;
            host: string;
            port: number;
            path: string;
            query: string;
            method: string;
            edited: boolean;
            isTls: boolean;
            length: number;
            alteration: Alteration;
            fileExtension?: string | undefined | null;
            source: Source;
            createdAt: Date;
            metadata: { color?: string | undefined | null };
            response?:
              | {
                  __typename: "Response";
                  id: string;
                  statusCode: number;
                  roundtripTime: number;
                  length: number;
                  createdAt: Date;
                  alteration: Alteration;
                  edited: boolean;
                }
              | undefined
              | null;
          }>;
        };
      }
    | undefined
    | null;
};

export type InterceptEntryCountQueryVariables = Exact<{
  filter?: InputMaybe<FilterClauseInterceptEntryInput>;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;

export type InterceptEntryCountQuery = {
  interceptEntries: {
    count: { __typename: "Count"; value: number; snapshot: number };
  };
};

export type UpstreamProxiesQueryVariables = Exact<{ [key: string]: never }>;

export type UpstreamProxiesQuery = {
  upstreamProxies: Array<{
    __typename: "UpstreamProxy";
    id: string;
    allowlist: Array<string>;
    denylist: Array<string>;
    enabled: boolean;
    host: string;
    kind: UpstreamProxyKind;
    port: number;
    rank: string;
    auth?:
      | {
          __typename: "UpstreamProxyAuthBasic";
          username: string;
          password: string;
        }
      | undefined
      | null;
  }>;
};

export type CurrentProjectQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentProjectQuery = {
  currentProject?:
    | {
        __typename: "Project";
        id: string;
        name: string;
        path: string;
        version: string;
        status: ProjectStatus;
        size: number;
        createdAt: Date;
        updatedAt: Date;
        backups: Array<{ id: string }>;
      }
    | undefined
    | null;
};

export type ProjectsQueryVariables = Exact<{ [key: string]: never }>;

export type ProjectsQuery = {
  projects: Array<{
    __typename: "Project";
    id: string;
    name: string;
    path: string;
    version: string;
    status: ProjectStatus;
    size: number;
    createdAt: Date;
    updatedAt: Date;
    backups: Array<{ id: string }>;
  }>;
};

export type ReplayEntryQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type ReplayEntryQuery = {
  replayEntry?:
    | {
        __typename: "ReplayEntry";
        id: string;
        error?: string | undefined | null;
        sessionId: string;
        request: {
          __typename: "Request";
          id: string;
          host: string;
          port: number;
          path: string;
          query: string;
          method: string;
          edited: boolean;
          isTls: boolean;
          length: number;
          alteration: Alteration;
          fileExtension?: string | undefined | null;
          source: Source;
          createdAt: Date;
          metadata: { color?: string | undefined | null };
          response?:
            | {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
              }
            | undefined
            | null;
        };
      }
    | undefined
    | null;
};

export type ActiveReplayEntryBySessionQueryVariables = Exact<{
  sessionId: Scalars["ID"]["input"];
}>;

export type ActiveReplayEntryBySessionQuery = {
  replaySession?:
    | {
        __typename: "ReplaySession";
        id: string;
        name: string;
        activeEntry?:
          | {
              __typename: "ReplayEntry";
              id: string;
              error?: string | undefined | null;
              sessionId: string;
              request: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: { color?: string | undefined | null };
                response?:
                  | {
                      __typename: "Response";
                      id: string;
                      statusCode: number;
                      roundtripTime: number;
                      length: number;
                      createdAt: Date;
                      alteration: Alteration;
                      edited: boolean;
                    }
                  | undefined
                  | null;
              };
            }
          | undefined
          | null;
        collection: { id: string };
        entries: {
          edges: Array<{
            cursor: string;
            node: {
              __typename: "ReplayEntry";
              id: string;
              error?: string | undefined | null;
              sessionId: string;
              request: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: { color?: string | undefined | null };
                response?:
                  | {
                      __typename: "Response";
                      id: string;
                      statusCode: number;
                      roundtripTime: number;
                      length: number;
                      createdAt: Date;
                      alteration: Alteration;
                      edited: boolean;
                    }
                  | undefined
                  | null;
              };
            };
          }>;
          pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
          };
          count: { __typename: "Count"; value: number; snapshot: number };
        };
      }
    | undefined
    | null;
};

export type ReplayEntriesBySessionQueryVariables = Exact<{
  sessionId: Scalars["ID"]["input"];
}>;

export type ReplayEntriesBySessionQuery = {
  replaySession?:
    | {
        __typename: "ReplaySession";
        id: string;
        name: string;
        entries: {
          edges: Array<{
            cursor: string;
            node: {
              __typename: "ReplayEntry";
              id: string;
              error?: string | undefined | null;
              sessionId: string;
              request: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: { color?: string | undefined | null };
                response?:
                  | {
                      __typename: "Response";
                      id: string;
                      statusCode: number;
                      roundtripTime: number;
                      length: number;
                      createdAt: Date;
                      alteration: Alteration;
                      edited: boolean;
                    }
                  | undefined
                  | null;
              };
            };
          }>;
          pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
          };
          count: { __typename: "Count"; value: number; snapshot: number };
        };
        activeEntry?:
          | {
              __typename: "ReplayEntry";
              id: string;
              error?: string | undefined | null;
              sessionId: string;
              request: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: { color?: string | undefined | null };
                response?:
                  | {
                      __typename: "Response";
                      id: string;
                      statusCode: number;
                      roundtripTime: number;
                      length: number;
                      createdAt: Date;
                      alteration: Alteration;
                      edited: boolean;
                    }
                  | undefined
                  | null;
              };
            }
          | undefined
          | null;
        collection: { id: string };
      }
    | undefined
    | null;
};

export type ReplaySessionEntriesQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type ReplaySessionEntriesQuery = {
  replaySession?:
    | {
        activeEntry?:
          | {
              __typename: "ReplayEntry";
              id: string;
              error?: string | undefined | null;
              sessionId: string;
              request: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: { color?: string | undefined | null };
                response?:
                  | {
                      __typename: "Response";
                      id: string;
                      statusCode: number;
                      roundtripTime: number;
                      length: number;
                      createdAt: Date;
                      alteration: Alteration;
                      edited: boolean;
                    }
                  | undefined
                  | null;
              };
            }
          | undefined
          | null;
        entries: {
          edges: Array<{
            cursor: string;
            node: {
              __typename: "ReplayEntry";
              id: string;
              error?: string | undefined | null;
              sessionId: string;
              request: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: { color?: string | undefined | null };
                response?:
                  | {
                      __typename: "Response";
                      id: string;
                      statusCode: number;
                      roundtripTime: number;
                      length: number;
                      createdAt: Date;
                      alteration: Alteration;
                      edited: boolean;
                    }
                  | undefined
                  | null;
              };
            };
          }>;
          pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
          };
          count: { __typename: "Count"; value: number; snapshot: number };
        };
      }
    | undefined
    | null;
};

export type ReplaySessionCollectionsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type ReplaySessionCollectionsQuery = {
  replaySessionCollections: {
    edges: Array<{
      node: {
        __typename: "ReplaySessionCollection";
        id: string;
        name: string;
        sessions: Array<{
          __typename: "ReplaySession";
          id: string;
          name: string;
          activeEntry?:
            | {
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                sessionId: string;
                request: {
                  __typename: "Request";
                  id: string;
                  host: string;
                  port: number;
                  path: string;
                  query: string;
                  method: string;
                  edited: boolean;
                  isTls: boolean;
                  length: number;
                  alteration: Alteration;
                  fileExtension?: string | undefined | null;
                  source: Source;
                  createdAt: Date;
                  metadata: { color?: string | undefined | null };
                  response?:
                    | {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                      }
                    | undefined
                    | null;
                };
              }
            | undefined
            | null;
          collection: { id: string };
          entries: {
            edges: Array<{
              cursor: string;
              node: {
                __typename: "ReplayEntry";
                id: string;
                error?: string | undefined | null;
                sessionId: string;
                request: {
                  __typename: "Request";
                  id: string;
                  host: string;
                  port: number;
                  path: string;
                  query: string;
                  method: string;
                  edited: boolean;
                  isTls: boolean;
                  length: number;
                  alteration: Alteration;
                  fileExtension?: string | undefined | null;
                  source: Source;
                  createdAt: Date;
                  metadata: { color?: string | undefined | null };
                  response?:
                    | {
                        __typename: "Response";
                        id: string;
                        statusCode: number;
                        roundtripTime: number;
                        length: number;
                        createdAt: Date;
                        alteration: Alteration;
                        edited: boolean;
                      }
                    | undefined
                    | null;
                };
              };
            }>;
            pageInfo: {
              __typename: "PageInfo";
              hasPreviousPage: boolean;
              hasNextPage: boolean;
              startCursor?: string | undefined | null;
              endCursor?: string | undefined | null;
            };
            count: { __typename: "Count"; value: number; snapshot: number };
          };
        }>;
      };
    }>;
  };
};

export type RequestsQueryVariables = Exact<{
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<RequestResponseOrderInput>;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
  filter?: InputMaybe<FilterClauseRequestResponseInput>;
}>;

export type RequestsQuery = {
  requests: {
    snapshot: number;
    edges: Array<{
      __typename: "RequestEdge";
      cursor: string;
      node: {
        __typename: "Request";
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        metadata: { color?: string | undefined | null };
        response?:
          | {
              __typename: "Response";
              id: string;
              statusCode: number;
              roundtripTime: number;
              length: number;
              createdAt: Date;
              alteration: Alteration;
              edited: boolean;
            }
          | undefined
          | null;
      };
    }>;
    pageInfo: {
      __typename: "PageInfo";
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor?: string | undefined | null;
      endCursor?: string | undefined | null;
    };
  };
};

export type RequestCountQueryVariables = Exact<{
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
  filter?: InputMaybe<FilterClauseRequestResponseInput>;
}>;

export type RequestCountQuery = {
  requests: {
    snapshot: number;
    count: { __typename: "Count"; value: number; snapshot: number };
  };
};

export type RequestQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type RequestQuery = {
  request?:
    | {
        __typename: "Request";
        raw: string;
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        edits: Array<{
          __typename: "Request";
          id: string;
          host: string;
          port: number;
          path: string;
          query: string;
          method: string;
          edited: boolean;
          isTls: boolean;
          length: number;
          alteration: Alteration;
          fileExtension?: string | undefined | null;
          source: Source;
          createdAt: Date;
          metadata: { color?: string | undefined | null };
          response?:
            | {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
              }
            | undefined
            | null;
        }>;
        metadata: { color?: string | undefined | null };
        response?:
          | {
              __typename: "Response";
              id: string;
              statusCode: number;
              roundtripTime: number;
              length: number;
              createdAt: Date;
              alteration: Alteration;
              edited: boolean;
            }
          | undefined
          | null;
      }
    | undefined
    | null;
};

export type RequestsByOffsetQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<RequestResponseOrderInput>;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
  filter?: InputMaybe<FilterClauseRequestResponseInput>;
}>;

export type RequestsByOffsetQuery = {
  requestsByOffset: {
    snapshot: number;
    edges: Array<{
      __typename: "RequestEdge";
      cursor: string;
      node: {
        __typename: "Request";
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        metadata: { color?: string | undefined | null };
        response?:
          | {
              __typename: "Response";
              id: string;
              statusCode: number;
              roundtripTime: number;
              length: number;
              createdAt: Date;
              alteration: Alteration;
              edited: boolean;
            }
          | undefined
          | null;
      };
    }>;
    pageInfo: {
      __typename: "PageInfo";
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor?: string | undefined | null;
      endCursor?: string | undefined | null;
    };
  };
};

export type ResponseQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type ResponseQuery = {
  response?:
    | {
        __typename: "Response";
        raw: string;
        id: string;
        statusCode: number;
        roundtripTime: number;
        length: number;
        createdAt: Date;
        alteration: Alteration;
        edited: boolean;
        edits: Array<{
          __typename: "Response";
          id: string;
          statusCode: number;
          roundtripTime: number;
          length: number;
          createdAt: Date;
          alteration: Alteration;
          edited: boolean;
        }>;
      }
    | undefined
    | null;
};

export type GetRuntimeQueryVariables = Exact<{ [key: string]: never }>;

export type GetRuntimeQuery = {
  runtime: {
    __typename: "Runtime";
    version: string;
    platform: string;
    availableUpdate?:
      | {
          __typename: "Release";
          releasedAt: Date;
          version: string;
          links: Array<{
            __typename: "ReleaseLink";
            display: string;
            link: string;
            platform: string;
          }>;
        }
      | undefined
      | null;
  };
};

export type ScopesQueryVariables = Exact<{ [key: string]: never }>;

export type ScopesQuery = {
  scopes: Array<{
    __typename: "Scope";
    id: string;
    name: string;
    allowlist: Array<string>;
    denylist: Array<string>;
    indexed: boolean;
  }>;
};

export type SitemapRootEntriesQueryVariables = Exact<{
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;

export type SitemapRootEntriesQuery = {
  sitemapRootEntries: {
    edges: Array<{
      __typename: "SitemapEntryEdge";
      cursor: string;
      node: {
        __typename: "SitemapEntry";
        id: string;
        label: string;
        kind: SitemapEntryKind;
        parentId?: string | undefined | null;
        hasDescendants: boolean;
        metadata?: { isTls: boolean; port: number } | undefined | null;
      };
    }>;
  };
};

export type SitemapEntryChildrenQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type SitemapEntryChildrenQuery = {
  sitemapDescendantEntries: {
    edges: Array<{
      cursor: string;
      node: {
        __typename: "SitemapEntry";
        id: string;
        label: string;
        kind: SitemapEntryKind;
        parentId?: string | undefined | null;
        hasDescendants: boolean;
        metadata?: { isTls: boolean; port: number } | undefined | null;
      };
    }>;
  };
};

export type SitemapEntryRequestsQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type SitemapEntryRequestsQuery = {
  sitemapEntry?:
    | {
        __typename: "SitemapEntry";
        id: string;
        label: string;
        kind: SitemapEntryKind;
        parentId?: string | undefined | null;
        hasDescendants: boolean;
        requests: {
          edges: Array<{
            cursor: string;
            node: {
              __typename: "Request";
              id: string;
              host: string;
              port: number;
              path: string;
              query: string;
              method: string;
              edited: boolean;
              isTls: boolean;
              length: number;
              alteration: Alteration;
              fileExtension?: string | undefined | null;
              source: Source;
              createdAt: Date;
              metadata: { color?: string | undefined | null };
              response?:
                | {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                  }
                | undefined
                | null;
            };
          }>;
        };
        metadata?: { isTls: boolean; port: number } | undefined | null;
      }
    | undefined
    | null;
};

export type WebsocketStreamsBeforeQueryVariables = Exact<{
  before?: InputMaybe<Scalars["String"]["input"]>;
  last: Scalars["Int"]["input"];
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
  order: StreamOrderInput;
}>;

export type WebsocketStreamsBeforeQuery = {
  streams: {
    snapshot: number;
    edges: Array<{
      __typename: "StreamEdge";
      cursor: string;
      node: {
        __typename: "Stream";
        id: string;
        createdAt: Date;
        direction: StreamDirection;
        host: string;
        isTls: boolean;
        path: string;
        port: number;
        protocol: StreamProtocol;
        source: Source;
      };
    }>;
    pageInfo: {
      __typename: "PageInfo";
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor?: string | undefined | null;
      endCursor?: string | undefined | null;
    };
  };
};

export type WebsocketStreamsAfterQueryVariables = Exact<{
  after?: InputMaybe<Scalars["String"]["input"]>;
  first: Scalars["Int"]["input"];
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
  order: StreamOrderInput;
}>;

export type WebsocketStreamsAfterQuery = {
  streams: {
    snapshot: number;
    edges: Array<{
      __typename: "StreamEdge";
      cursor: string;
      node: {
        __typename: "Stream";
        id: string;
        createdAt: Date;
        direction: StreamDirection;
        host: string;
        isTls: boolean;
        path: string;
        port: number;
        protocol: StreamProtocol;
        source: Source;
      };
    }>;
    pageInfo: {
      __typename: "PageInfo";
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor?: string | undefined | null;
      endCursor?: string | undefined | null;
    };
  };
};

export type WebsocketStreamsByOffsetQueryVariables = Exact<{
  offset: Scalars["Int"]["input"];
  limit: Scalars["Int"]["input"];
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
  order: StreamOrderInput;
}>;

export type WebsocketStreamsByOffsetQuery = {
  streamsByOffset: {
    snapshot: number;
    edges: Array<{
      __typename: "StreamEdge";
      cursor: string;
      node: {
        __typename: "Stream";
        id: string;
        createdAt: Date;
        direction: StreamDirection;
        host: string;
        isTls: boolean;
        path: string;
        port: number;
        protocol: StreamProtocol;
        source: Source;
      };
    }>;
    pageInfo: {
      __typename: "PageInfo";
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor?: string | undefined | null;
      endCursor?: string | undefined | null;
    };
  };
};

export type WebsocketStreamCountQueryVariables = Exact<{
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;

export type WebsocketStreamCountQuery = {
  streams: { count: { __typename: "Count"; value: number; snapshot: number } };
};

export type WebsocketMessagesAfterQueryVariables = Exact<{
  after?: InputMaybe<Scalars["String"]["input"]>;
  first: Scalars["Int"]["input"];
  order: StreamWsMessageOrderInput;
  streamId: Scalars["ID"]["input"];
}>;

export type WebsocketMessagesAfterQuery = {
  streamWsMessages: {
    snapshot: number;
    edges: Array<{
      __typename: "StreamWsMessageEdge";
      cursor: string;
      node: {
        id: string;
        length: number;
        createdAt: Date;
        direction: StreamMessageDirection;
        edited: boolean;
        alteration: Alteration;
        format: StreamWsMessageFormat;
        streamId: string;
      };
    }>;
    pageInfo: {
      __typename: "PageInfo";
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor?: string | undefined | null;
      endCursor?: string | undefined | null;
    };
  };
};

export type WebsocketMessagesBeforeQueryVariables = Exact<{
  before?: InputMaybe<Scalars["String"]["input"]>;
  last: Scalars["Int"]["input"];
  order: StreamWsMessageOrderInput;
  streamId: Scalars["ID"]["input"];
}>;

export type WebsocketMessagesBeforeQuery = {
  streamWsMessages: {
    snapshot: number;
    edges: Array<{
      __typename: "StreamWsMessageEdge";
      cursor: string;
      node: {
        id: string;
        length: number;
        createdAt: Date;
        direction: StreamMessageDirection;
        edited: boolean;
        alteration: Alteration;
        format: StreamWsMessageFormat;
        streamId: string;
      };
    }>;
    pageInfo: {
      __typename: "PageInfo";
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor?: string | undefined | null;
      endCursor?: string | undefined | null;
    };
  };
};

export type WebsocketMessagesByOffsetQueryVariables = Exact<{
  offset: Scalars["Int"]["input"];
  limit: Scalars["Int"]["input"];
  order: StreamWsMessageOrderInput;
  streamId: Scalars["ID"]["input"];
}>;

export type WebsocketMessagesByOffsetQuery = {
  streamWsMessagesByOffset: {
    snapshot: number;
    edges: Array<{
      __typename: "StreamWsMessageEdge";
      cursor: string;
      node: {
        id: string;
        length: number;
        createdAt: Date;
        direction: StreamMessageDirection;
        edited: boolean;
        alteration: Alteration;
        format: StreamWsMessageFormat;
        streamId: string;
      };
    }>;
    pageInfo: {
      __typename: "PageInfo";
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor?: string | undefined | null;
      endCursor?: string | undefined | null;
    };
  };
};

export type WebsocketMessageCountQueryVariables = Exact<{
  streamId: Scalars["ID"]["input"];
}>;

export type WebsocketMessageCountQuery = {
  streamWsMessages: {
    count: { __typename: "Count"; value: number; snapshot: number };
  };
};

export type WebsocketMessageQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type WebsocketMessageQuery = {
  streamWsMessage?:
    | {
        raw: string;
        id: string;
        length: number;
        createdAt: Date;
        direction: StreamMessageDirection;
        edited: boolean;
        alteration: Alteration;
        format: StreamWsMessageFormat;
        streamId: string;
      }
    | undefined
    | null;
};

export type TamperRuleCollectionsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type TamperRuleCollectionsQuery = {
  tamperRuleCollections: {
    snapshot: number;
    nodes: Array<{
      __typename: "TamperRuleCollection";
      id: string;
      name: string;
      rules: Array<{
        __typename: "TamperRule";
        id: string;
        isEnabled: boolean;
        isRegex: boolean;
        name: string;
        matchTerm: string;
        replaceTerm: string;
        strategy: TamperStrategy;
        rank: string;
        condition?: string | undefined | null;
        collection: { id: string };
      }>;
    }>;
    pageInfo: {
      __typename: "PageInfo";
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor?: string | undefined | null;
      endCursor?: string | undefined | null;
    };
  };
};

export type UserProfileQueryVariables = Exact<{ [key: string]: never }>;

export type UserProfileQuery = {
  viewer: {
    id: string;
    profile: {
      __typename: "UserProfile";
      identity: { __typename: "UserIdentity"; name: string; email: string };
      subscription: {
        __typename: "UserSubscription";
        entitlements: Array<{ __typename: "UserEntitlement"; name: string }>;
        plan: { __typename: "UserSubscriptionPlan"; name: string };
      };
    };
  };
};

export type UserSettingsQueryVariables = Exact<{ [key: string]: never }>;

export type UserSettingsQuery = {
  viewer: {
    id: string;
    settings?:
      | {
          __typename: "UserSettings";
          data: Record<string, unknown>;
          migrations: Record<string, unknown>;
        }
      | undefined
      | null;
  };
};

export type WorkflowQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type WorkflowQuery = {
  workflow?:
    | {
        __typename: "Workflow";
        id: string;
        kind: WorkflowKind;
        name: string;
        enabled: boolean;
        global: boolean;
        definition: Record<string, unknown>;
      }
    | undefined
    | null;
};

export type WorkflowsQueryVariables = Exact<{ [key: string]: never }>;

export type WorkflowsQuery = {
  workflows: Array<{
    __typename: "Workflow";
    id: string;
    kind: WorkflowKind;
    name: string;
    enabled: boolean;
    global: boolean;
    definition: Record<string, unknown>;
  }>;
};

export type WorkflowNodeDefinitionsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type WorkflowNodeDefinitionsQuery = {
  workflowNodeDefinitions: Array<{
    __typename: "WorkflowNodeDefinition";
    raw: Record<string, unknown>;
  }>;
};

export type CreatedAssistantMessageSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type CreatedAssistantMessageSubscription = {
  createdAssistantMessage: {
    snapshot: number;
    messageEdge: {
      cursor: string;
      node: {
        __typename: "AssistantMessage";
        id: string;
        content: string;
        role: AssistantMessageRole;
        session: { id: string };
      };
    };
  };
};

export type CreatedAssistantMessageTaskSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type CreatedAssistantMessageTaskSubscription = {
  createdAssistantMessageTask: {
    task: {
      __typename: "AssistantMessageTask";
      id: string;
      message?:
        | {
            __typename: "AssistantMessage";
            id: string;
            content: string;
            role: AssistantMessageRole;
            session: { id: string };
          }
        | undefined
        | null;
      session: {
        __typename: "AssistantSession";
        id: string;
        modelId: string;
        name: string;
        updatedAt: Date;
        createdAt: Date;
      };
      error?:
        | {
            __typename: "AssistantUserError";
            code: string;
            assistantReason: AssistantErrorReason;
          }
        | {
            __typename: "AuthenticationUserError";
            reason: AuthenticationErrorReason;
            code: string;
          }
        | { __typename: "OtherUserError"; code: string }
        | undefined
        | null;
    };
  };
};

export type UpdatedAssistantMessageTaskSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type UpdatedAssistantMessageTaskSubscription = {
  updatedAssistantMessageTask: {
    task: {
      __typename: "AssistantMessageTask";
      id: string;
      message?:
        | {
            __typename: "AssistantMessage";
            id: string;
            content: string;
            role: AssistantMessageRole;
            session: { id: string };
          }
        | undefined
        | null;
      session: {
        __typename: "AssistantSession";
        id: string;
        modelId: string;
        name: string;
        updatedAt: Date;
        createdAt: Date;
      };
      error?:
        | {
            __typename: "AssistantUserError";
            code: string;
            assistantReason: AssistantErrorReason;
          }
        | {
            __typename: "AuthenticationUserError";
            reason: AuthenticationErrorReason;
            code: string;
          }
        | { __typename: "OtherUserError"; code: string }
        | undefined
        | null;
    };
  };
};

export type UpdatedViewerAssistantUsageSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type UpdatedViewerAssistantUsageSubscription = {
  updatedViewerAssistantUsage: {
    usage: { __typename: "AssistantUsage"; balance: number };
  };
};

export type CreatedAuthenticationTokenSubscriptionVariables = Exact<{
  requestId: Scalars["ID"]["input"];
}>;

export type CreatedAuthenticationTokenSubscription = {
  createdAuthenticationToken: {
    token?:
      | {
          __typename: "AuthenticationToken";
          accessToken: string;
          expiresAt: Date;
          refreshToken?: string | undefined | null;
          scopes: Array<AuthenticationScope>;
        }
      | undefined
      | null;
    error?:
      | {
          __typename: "AuthenticationUserError";
          reason: AuthenticationErrorReason;
          code: string;
        }
      | { __typename: "OtherUserError"; code: string }
      | undefined
      | null;
  };
};

export type CreatedAutomateEntryRequestSubscriptionVariables = Exact<{
  order?: InputMaybe<AutomateEntryRequestOrderInput>;
}>;

export type CreatedAutomateEntryRequestSubscription = {
  createdAutomateEntryRequest: {
    snapshot: number;
    automateEntryRequestEdge: {
      __typename: "AutomateEntryRequestEdge";
      cursor: string;
      node: {
        __typename: "AutomateEntryRequest";
        sequenceId: string;
        automateEntryId: string;
        error?: string | undefined | null;
        request: {
          __typename: "Request";
          id: string;
          host: string;
          port: number;
          path: string;
          query: string;
          method: string;
          edited: boolean;
          isTls: boolean;
          length: number;
          alteration: Alteration;
          fileExtension?: string | undefined | null;
          source: Source;
          createdAt: Date;
          metadata: { color?: string | undefined | null };
          response?:
            | {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
              }
            | undefined
            | null;
        };
        payloads: Array<{
          __typename: "AutomateEntryRequestPayload";
          position?: number | undefined | null;
          raw?: string | undefined | null;
        }>;
      };
    };
  };
};

export type CreatedAutomateTaskSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type CreatedAutomateTaskSubscription = {
  createdAutomateTask: {
    snapshot: number;
    automateTaskEdge: {
      node: {
        id: string;
        paused: boolean;
        entry: {
          __typename: "AutomateEntry";
          id: string;
          name: string;
          createdAt: Date;
          session: { id: string };
        };
      };
    };
  };
};

export type DeletedAutomateTaskSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type DeletedAutomateTaskSubscription = {
  deletedAutomateTask: { deletedAutomateTaskId: string; snapshot: number };
};

export type UpdatedAutomateTaskSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type UpdatedAutomateTaskSubscription = {
  updatedAutomateTask: {
    snapshot: number;
    automateTaskEdge: {
      node: {
        id: string;
        paused: boolean;
        entry: {
          __typename: "AutomateEntry";
          id: string;
          name: string;
          createdAt: Date;
          session: { id: string };
        };
      };
    };
  };
};

export type CreatedBackupSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type CreatedBackupSubscription = {
  createdBackup: {
    backup: {
      __typename: "Backup";
      id: string;
      name: string;
      path: string;
      size: number;
      status: BackupStatus;
      createdAt: Date;
      updatedAt: Date;
      project?: { id: string } | undefined | null;
    };
  };
};

export type UpdatedBackupSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type UpdatedBackupSubscription = {
  updatedBackup: {
    backup: {
      __typename: "Backup";
      id: string;
      name: string;
      path: string;
      size: number;
      status: BackupStatus;
      createdAt: Date;
      updatedAt: Date;
      project?: { id: string } | undefined | null;
    };
  };
};

export type DeletedBackupSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type DeletedBackupSubscription = {
  deletedBackup: { deletedBackupId: string };
};

export type StartedBackupTaskSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type StartedBackupTaskSubscription = {
  startedBackupTask: {
    task: {
      __typename: "BackupTask";
      id: string;
      backup: {
        __typename: "Backup";
        id: string;
        name: string;
        path: string;
        size: number;
        status: BackupStatus;
        createdAt: Date;
        updatedAt: Date;
        project?: { id: string } | undefined | null;
      };
    };
  };
};

export type FinishedBackupTaskSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type FinishedBackupTaskSubscription = {
  finishedBackupTask:
    | { __typename: "FinishedBackupTaskCancelled"; taskId: string }
    | {
        __typename: "FinishedBackupTaskError";
        taskId: string;
        error:
          | {
              __typename: "BackupUserError";
              reason: BackupErrorReason;
              code: string;
            }
          | { __typename: "InternalUserError"; message: string; code: string }
          | { __typename: "OtherUserError"; code: string };
      }
    | {
        __typename: "FinishedBackupTaskSuccess";
        task: {
          __typename: "BackupTask";
          id: string;
          backup: {
            __typename: "Backup";
            id: string;
            name: string;
            path: string;
            size: number;
            status: BackupStatus;
            createdAt: Date;
            updatedAt: Date;
            project?: { id: string } | undefined | null;
          };
        };
      };
};

export type StartedRestoreBackupTaskSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type StartedRestoreBackupTaskSubscription = {
  startedRestoreBackupTask: {
    task: {
      __typename: "RestoreBackupTask";
      id: string;
      backup?:
        | {
            __typename: "Backup";
            id: string;
            name: string;
            path: string;
            size: number;
            status: BackupStatus;
            createdAt: Date;
            updatedAt: Date;
            project?: { id: string } | undefined | null;
          }
        | undefined
        | null;
      project: {
        __typename: "Project";
        id: string;
        name: string;
        path: string;
        version: string;
        status: ProjectStatus;
        size: number;
        createdAt: Date;
        updatedAt: Date;
        backups: Array<{ id: string }>;
      };
    };
  };
};

export type FinishedRetoreBackupTaskSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type FinishedRetoreBackupTaskSubscription = {
  finishedRestoreBackupTask:
    | { __typename: "FinishedRestoreBackupTaskCancelled"; taskId: string }
    | {
        __typename: "FinishedRestoreBackupTaskError";
        taskId: string;
        error:
          | {
              __typename: "BackupUserError";
              reason: BackupErrorReason;
              code: string;
            }
          | { __typename: "InternalUserError"; message: string; code: string }
          | { __typename: "OtherUserError"; code: string };
      }
    | {
        __typename: "FinishedRestoreBackupTaskSuccess";
        task: {
          __typename: "RestoreBackupTask";
          id: string;
          backup?:
            | {
                __typename: "Backup";
                id: string;
                name: string;
                path: string;
                size: number;
                status: BackupStatus;
                createdAt: Date;
                updatedAt: Date;
                project?: { id: string } | undefined | null;
              }
            | undefined
            | null;
          project: {
            __typename: "Project";
            id: string;
            name: string;
            path: string;
            version: string;
            status: ProjectStatus;
            size: number;
            createdAt: Date;
            updatedAt: Date;
            backups: Array<{ id: string }>;
          };
        };
      };
};

export type DeletedBrowserSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type DeletedBrowserSubscription = {
  deletedBrowser: { deletedBrowserId: string };
};

export type InstalledBrowserSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type InstalledBrowserSubscription = {
  installedBrowser: {
    browser: {
      __typename: "Browser";
      id: string;
      installedAt: Date;
      latest: boolean;
      path: string;
      size: number;
      version: string;
    };
  };
};

export type UpdatedBrowserSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type UpdatedBrowserSubscription = {
  updatedBrowser: {
    browser: {
      __typename: "Browser";
      id: string;
      installedAt: Date;
      latest: boolean;
      path: string;
      size: number;
      version: string;
    };
  };
};

export type CreatedDataExportSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type CreatedDataExportSubscription = {
  createdDataExport: {
    snapshot: number;
    dataExportEdge: {
      cursor: string;
      node: {
        __typename: "DataExport";
        id: string;
        name: string;
        path: string;
        size: number;
        status: DataExportStatus;
        format: DataExportFormat;
        error?: string | undefined | null;
        createdAt: Date;
      };
    };
  };
};

export type UpdatedDataExportSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type UpdatedDataExportSubscription = {
  updatedDataExport: {
    snapshot: number;
    dataExportEdge: {
      cursor: string;
      node: {
        __typename: "DataExport";
        id: string;
        name: string;
        path: string;
        size: number;
        status: DataExportStatus;
        format: DataExportFormat;
        error?: string | undefined | null;
        createdAt: Date;
      };
    };
  };
};

export type DeletedDataExportSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type DeletedDataExportSubscription = {
  deletedDataExport: { deletedDataExportId: string; snapshot: number };
};

export type CreatedDataExportTaskSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type CreatedDataExportTaskSubscription = {
  createdDataExportTask: {
    exportTaskEdge: {
      cursor: string;
      node: {
        __typename: "DataExportTask";
        id: string;
        export: {
          __typename: "DataExport";
          id: string;
          name: string;
          path: string;
          size: number;
          status: DataExportStatus;
          format: DataExportFormat;
          error?: string | undefined | null;
          createdAt: Date;
        };
      };
    };
  };
};

export type DeletedDataExportTaskSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type DeletedDataExportTaskSubscription = {
  deletedDataExportTask: { deletedExportTaskId: string };
};

export type CreatedFilterPresetSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type CreatedFilterPresetSubscription = {
  createdFilterPreset: {
    filterEdge: {
      cursor: string;
      node: {
        __typename: "FilterPreset";
        id: string;
        alias: string;
        name: string;
        clause: Record<string, unknown>;
      };
    };
  };
};

export type UpdatedFilterPresetSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type UpdatedFilterPresetSubscription = {
  updatedFilterPreset: {
    filterEdge: {
      cursor: string;
      node: {
        __typename: "FilterPreset";
        id: string;
        alias: string;
        name: string;
        clause: Record<string, unknown>;
      };
    };
  };
};

export type DeletedFilterPresetSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type DeletedFilterPresetSubscription = {
  deletedFilterPreset: { deletedFilterId: string };
};

export type CreatedFindingSubscriptionVariables = Exact<{
  order?: InputMaybe<FindingOrderInput>;
}>;

export type CreatedFindingSubscription = {
  createdFinding: {
    snapshot: number;
    findingEdge: {
      cursor: string;
      node: {
        id: string;
        title: string;
        description?: string | undefined | null;
        reporter: string;
        host: string;
        path: string;
        createdAt: Date;
        request: {
          __typename: "Request";
          id: string;
          host: string;
          port: number;
          path: string;
          query: string;
          method: string;
          edited: boolean;
          isTls: boolean;
          length: number;
          alteration: Alteration;
          fileExtension?: string | undefined | null;
          source: Source;
          createdAt: Date;
          metadata: { color?: string | undefined | null };
          response?:
            | {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
              }
            | undefined
            | null;
        };
      };
    };
  };
};

export type DeletedFindingsSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type DeletedFindingsSubscription = {
  deletedFindings: { deletedFindingIds: Array<string>; snapshot: number };
};

export type CreatedInterceptMessageSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type CreatedInterceptMessageSubscription = {
  createdInterceptMessage: {
    snapshot: number;
    messageEdge: {
      node:
        | {
            __typename: "InterceptRequestMessage";
            id: string;
            request: {
              __typename: "Request";
              id: string;
              host: string;
              port: number;
              path: string;
              query: string;
              method: string;
              edited: boolean;
              isTls: boolean;
              length: number;
              alteration: Alteration;
              fileExtension?: string | undefined | null;
              source: Source;
              createdAt: Date;
              metadata: { color?: string | undefined | null };
              response?:
                | {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                  }
                | undefined
                | null;
            };
          }
        | {
            __typename: "InterceptResponseMessage";
            id: string;
            response: {
              __typename: "Response";
              id: string;
              statusCode: number;
              roundtripTime: number;
              length: number;
              createdAt: Date;
              alteration: Alteration;
              edited: boolean;
            };
            request: {
              __typename: "Request";
              id: string;
              host: string;
              port: number;
              path: string;
              query: string;
              method: string;
              edited: boolean;
              isTls: boolean;
              length: number;
              alteration: Alteration;
              fileExtension?: string | undefined | null;
              source: Source;
              createdAt: Date;
              metadata: { color?: string | undefined | null };
              response?:
                | {
                    __typename: "Response";
                    id: string;
                    statusCode: number;
                    roundtripTime: number;
                    length: number;
                    createdAt: Date;
                    alteration: Alteration;
                    edited: boolean;
                  }
                | undefined
                | null;
            };
          };
    };
  };
};

export type UpdatedInterceptOptionsSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type UpdatedInterceptOptionsSubscription = {
  updatedInterceptOptions: {
    options: {
      request: { enabled: boolean };
      response: { enabled: boolean };
      scope?: { scopeId: string } | undefined | null;
    };
  };
};

export type CreatedInterceptEntrySubscriptionVariables = Exact<{
  order?: InputMaybe<InterceptEntryOrderInput>;
  filter?: InputMaybe<FilterClauseInterceptEntryInput>;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;

export type CreatedInterceptEntrySubscription = {
  createdInterceptEntry: {
    snapshot: number;
    interceptEntryEdge: {
      __typename: "InterceptEntryEdge";
      cursor: string;
      node: {
        __typename: "InterceptEntry";
        id: string;
        request: {
          __typename: "Request";
          id: string;
          host: string;
          port: number;
          path: string;
          query: string;
          method: string;
          edited: boolean;
          isTls: boolean;
          length: number;
          alteration: Alteration;
          fileExtension?: string | undefined | null;
          source: Source;
          createdAt: Date;
          metadata: { color?: string | undefined | null };
          response?:
            | {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
              }
            | undefined
            | null;
        };
      };
    };
  };
};

export type UpdatedInterceptEntrySubscriptionVariables = Exact<{
  order?: InputMaybe<InterceptEntryOrderInput>;
  filter?: InputMaybe<FilterClauseInterceptEntryInput>;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;

export type UpdatedInterceptEntrySubscription = {
  updatedInterceptEntry: {
    snapshot: number;
    interceptEntryEdge: {
      __typename: "InterceptEntryEdge";
      cursor: string;
      node: {
        __typename: "InterceptEntry";
        id: string;
        request: {
          __typename: "Request";
          id: string;
          host: string;
          port: number;
          path: string;
          query: string;
          method: string;
          edited: boolean;
          isTls: boolean;
          length: number;
          alteration: Alteration;
          fileExtension?: string | undefined | null;
          source: Source;
          createdAt: Date;
          metadata: { color?: string | undefined | null };
          response?:
            | {
                __typename: "Response";
                id: string;
                statusCode: number;
                roundtripTime: number;
                length: number;
                createdAt: Date;
                alteration: Alteration;
                edited: boolean;
              }
            | undefined
            | null;
        };
      };
    };
  };
};

export type DeletedInterceptEntrySubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type DeletedInterceptEntrySubscription = {
  deletedInterceptEntry: { deletedEntryId: string; snapshot: number };
};

export type StartedDeleteInterceptEntriesTaskSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type StartedDeleteInterceptEntriesTaskSubscription = {
  startedDeleteInterceptEntriesTask: {
    task: {
      __typename: "DeleteInterceptEntriesTask";
      id: string;
      deletedEntryIds: Array<string>;
    };
  };
};

export type UpdatedDeleteInterceptEntriesTaskSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type UpdatedDeleteInterceptEntriesTaskSubscription = {
  updatedDeleteInterceptEntriesTask: {
    snapshot: number;
    task: {
      __typename: "DeleteInterceptEntriesTask";
      id: string;
      deletedEntryIds: Array<string>;
    };
  };
};

export type FinishedDeleteInterceptEntriesTaskSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type FinishedDeleteInterceptEntriesTaskSubscription = {
  finishedDeleteInterceptEntriesTask: {
    task: {
      __typename: "DeleteInterceptEntriesTask";
      id: string;
      deletedEntryIds: Array<string>;
    };
    error?:
      | { __typename: "InternalUserError"; message: string; code: string }
      | { __typename: "OtherUserError"; code: string }
      | undefined
      | null;
  };
};

export type CreatedProjectSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type CreatedProjectSubscription = {
  createdProject: {
    project: {
      __typename: "Project";
      id: string;
      name: string;
      path: string;
      version: string;
      status: ProjectStatus;
      size: number;
      createdAt: Date;
      updatedAt: Date;
      backups: Array<{ id: string }>;
    };
  };
};

export type UpdatedProjectSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type UpdatedProjectSubscription = {
  updatedProject: {
    project: {
      __typename: "Project";
      id: string;
      name: string;
      path: string;
      version: string;
      status: ProjectStatus;
      size: number;
      createdAt: Date;
      updatedAt: Date;
      backups: Array<{ id: string }>;
    };
  };
};

export type DeletedProjectSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type DeletedProjectSubscription = {
  deletedProject: { deletedProjectId: string };
};

export type UpdatedReplaySessionSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type UpdatedReplaySessionSubscription = {
  updatedReplaySession: {
    snapshot: number;
    sessionEdge: {
      node: {
        __typename: "ReplaySession";
        id: string;
        name: string;
        activeEntry?:
          | {
              __typename: "ReplayEntry";
              id: string;
              error?: string | undefined | null;
              sessionId: string;
              request: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: { color?: string | undefined | null };
                response?:
                  | {
                      __typename: "Response";
                      id: string;
                      statusCode: number;
                      roundtripTime: number;
                      length: number;
                      createdAt: Date;
                      alteration: Alteration;
                      edited: boolean;
                    }
                  | undefined
                  | null;
              };
            }
          | undefined
          | null;
        collection: { id: string };
        entries: {
          edges: Array<{
            cursor: string;
            node: {
              __typename: "ReplayEntry";
              id: string;
              error?: string | undefined | null;
              sessionId: string;
              request: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: { color?: string | undefined | null };
                response?:
                  | {
                      __typename: "Response";
                      id: string;
                      statusCode: number;
                      roundtripTime: number;
                      length: number;
                      createdAt: Date;
                      alteration: Alteration;
                      edited: boolean;
                    }
                  | undefined
                  | null;
              };
            };
          }>;
          pageInfo: {
            __typename: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | undefined | null;
            endCursor?: string | undefined | null;
          };
          count: { __typename: "Count"; value: number; snapshot: number };
        };
      };
    };
  };
};

export type UpdatedReplayTaskSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type UpdatedReplayTaskSubscription = {
  updatedReplayTask: {
    snapshot: number;
    replayTaskEdge: {
      __typename: "ReplayTaskEdge";
      cursor: string;
      node: {
        __typename: "ReplayTask";
        id: string;
        error?: string | undefined | null;
        replayEntry?:
          | {
              __typename: "ReplayEntry";
              id: string;
              error?: string | undefined | null;
              sessionId: string;
              request: {
                __typename: "Request";
                id: string;
                host: string;
                port: number;
                path: string;
                query: string;
                method: string;
                edited: boolean;
                isTls: boolean;
                length: number;
                alteration: Alteration;
                fileExtension?: string | undefined | null;
                source: Source;
                createdAt: Date;
                metadata: { color?: string | undefined | null };
                response?:
                  | {
                      __typename: "Response";
                      id: string;
                      statusCode: number;
                      roundtripTime: number;
                      length: number;
                      createdAt: Date;
                      alteration: Alteration;
                      edited: boolean;
                    }
                  | undefined
                  | null;
              };
            }
          | undefined
          | null;
      };
    };
  };
};

export type CreatedRequestSubscriptionVariables = Exact<{
  order?: InputMaybe<RequestResponseOrderInput>;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
  filter?: InputMaybe<FilterClauseRequestResponseInput>;
}>;

export type CreatedRequestSubscription = {
  createdRequest: {
    snapshot: number;
    requestEdge: {
      __typename: "RequestEdge";
      cursor: string;
      node: {
        __typename: "Request";
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        metadata: { color?: string | undefined | null };
        response?:
          | {
              __typename: "Response";
              id: string;
              statusCode: number;
              roundtripTime: number;
              length: number;
              createdAt: Date;
              alteration: Alteration;
              edited: boolean;
            }
          | undefined
          | null;
      };
    };
  };
};

export type UpdatedRequestSubscriptionVariables = Exact<{
  order?: InputMaybe<RequestResponseOrderInput>;
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
  filter?: InputMaybe<FilterClauseRequestResponseInput>;
}>;

export type UpdatedRequestSubscription = {
  updatedRequest: {
    snapshot: number;
    requestEdge: {
      __typename: "RequestEdge";
      cursor: string;
      node: {
        __typename: "Request";
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        metadata: { color?: string | undefined | null };
        response?:
          | {
              __typename: "Response";
              id: string;
              statusCode: number;
              roundtripTime: number;
              length: number;
              createdAt: Date;
              alteration: Alteration;
              edited: boolean;
            }
          | undefined
          | null;
      };
    };
  };
};

export type UpdatedRequestMetadataSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type UpdatedRequestMetadataSubscription = {
  updatedRequestMetadata: {
    requestId: string;
    snapshot: number;
    metadata: { color?: string | undefined | null };
  };
};

export type CreatedScopeSubscriptionVariables = Exact<{ [key: string]: never }>;

export type CreatedScopeSubscription = {
  createdScope: {
    snapshot: number;
    scopeEdge: {
      node: {
        __typename: "Scope";
        id: string;
        name: string;
        allowlist: Array<string>;
        denylist: Array<string>;
        indexed: boolean;
      };
    };
  };
};

export type UpdatedScopeSubscriptionVariables = Exact<{ [key: string]: never }>;

export type UpdatedScopeSubscription = {
  updatedScope: {
    snapshot: number;
    scopeEdge: {
      node: {
        __typename: "Scope";
        id: string;
        name: string;
        allowlist: Array<string>;
        denylist: Array<string>;
        indexed: boolean;
      };
    };
  };
};

export type CreatedSitemapEntrySubscriptionVariables = Exact<{
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;

export type CreatedSitemapEntrySubscription = {
  createdSitemapEntry: {
    ancestorIds: Array<string>;
    snapshot: number;
    requestEdge?:
      | {
          __typename: "RequestEdge";
          cursor: string;
          node: {
            __typename: "Request";
            id: string;
            host: string;
            port: number;
            path: string;
            query: string;
            method: string;
            edited: boolean;
            isTls: boolean;
            length: number;
            alteration: Alteration;
            fileExtension?: string | undefined | null;
            source: Source;
            createdAt: Date;
            metadata: { color?: string | undefined | null };
            response?:
              | {
                  __typename: "Response";
                  id: string;
                  statusCode: number;
                  roundtripTime: number;
                  length: number;
                  createdAt: Date;
                  alteration: Alteration;
                  edited: boolean;
                }
              | undefined
              | null;
          };
        }
      | undefined
      | null;
    sitemapEntryEdge: {
      __typename: "SitemapEntryEdge";
      cursor: string;
      node: {
        __typename: "SitemapEntry";
        id: string;
        label: string;
        kind: SitemapEntryKind;
        parentId?: string | undefined | null;
        hasDescendants: boolean;
        metadata?: { isTls: boolean; port: number } | undefined | null;
      };
    };
  };
};

export type UpdatedSitemapEntrySubscriptionVariables = Exact<{
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
}>;

export type UpdatedSitemapEntrySubscription = {
  updatedSitemapEntry: {
    ancestorIds: Array<string>;
    snapshot: number;
    oldRequest?: { id: string } | undefined | null;
    requestEdge: {
      __typename: "RequestEdge";
      cursor: string;
      node: {
        __typename: "Request";
        id: string;
        host: string;
        port: number;
        path: string;
        query: string;
        method: string;
        edited: boolean;
        isTls: boolean;
        length: number;
        alteration: Alteration;
        fileExtension?: string | undefined | null;
        source: Source;
        createdAt: Date;
        metadata: { color?: string | undefined | null };
        response?:
          | {
              __typename: "Response";
              id: string;
              statusCode: number;
              roundtripTime: number;
              length: number;
              createdAt: Date;
              alteration: Alteration;
              edited: boolean;
            }
          | undefined
          | null;
      };
    };
    sitemapEntryEdge: {
      __typename: "SitemapEntryEdge";
      cursor: string;
      node: {
        __typename: "SitemapEntry";
        id: string;
        label: string;
        kind: SitemapEntryKind;
        parentId?: string | undefined | null;
        hasDescendants: boolean;
        metadata?: { isTls: boolean; port: number } | undefined | null;
      };
    };
  };
};

export type CreatedWsStreamSubscriptionVariables = Exact<{
  scopeId?: InputMaybe<Scalars["ID"]["input"]>;
  order: StreamOrderInput;
}>;

export type CreatedWsStreamSubscription = {
  createdStream: {
    snapshot: number;
    streamEdge: {
      __typename: "StreamEdge";
      cursor: string;
      node: {
        __typename: "Stream";
        id: string;
        createdAt: Date;
        direction: StreamDirection;
        host: string;
        isTls: boolean;
        path: string;
        port: number;
        protocol: StreamProtocol;
        source: Source;
      };
    };
  };
};

export type CreatedStreamWsMessageSubscriptionVariables = Exact<{
  order: StreamWsMessageOrderInput;
}>;

export type CreatedStreamWsMessageSubscription = {
  createdStreamWsMessage: {
    snapshot: number;
    messageEdge: {
      __typename: "StreamWsMessageEdge";
      cursor: string;
      node: {
        id: string;
        length: number;
        createdAt: Date;
        direction: StreamMessageDirection;
        edited: boolean;
        alteration: Alteration;
        format: StreamWsMessageFormat;
        streamId: string;
      };
    };
  };
};

export type CreatedWorkflowSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type CreatedWorkflowSubscription = {
  createdWorkflow: {
    workflowEdge: {
      cursor: string;
      node: {
        __typename: "Workflow";
        id: string;
        kind: WorkflowKind;
        name: string;
        enabled: boolean;
        global: boolean;
        definition: Record<string, unknown>;
      };
    };
  };
};

export type DeletedWorkflowSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type DeletedWorkflowSubscription = {
  deletedWorkflow: { deletedWorkflowId: string };
};

export type UpdatedWorkflowSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type UpdatedWorkflowSubscription = {
  updatedWorkflow: {
    workflowEdge: {
      cursor: string;
      node: {
        __typename: "Workflow";
        id: string;
        kind: WorkflowKind;
        name: string;
        enabled: boolean;
        global: boolean;
        definition: Record<string, unknown>;
      };
    };
  };
};

export const AssistantModelFullFragmentDoc = `
    fragment assistantModelFull on AssistantModel {
  __typename
  id
  name
  tokenCredit
}
    `;
export const AssistantSessionMetaFragmentDoc = `
    fragment assistantSessionMeta on AssistantSession {
  __typename
  id
  modelId
  name
  updatedAt
  createdAt
}
    `;
export const AssistantMessageFullFragmentDoc = `
    fragment assistantMessageFull on AssistantMessage {
  __typename
  id
  content
  role
  session {
    id
  }
}
    `;
export const AssistantSessionFullFragmentDoc = `
    fragment assistantSessionFull on AssistantSession {
  ...assistantSessionMeta
  messages {
    ...assistantMessageFull
  }
}
    `;
export const UserErrorFullFragmentDoc = `
    fragment userErrorFull on UserError {
  __typename
  code
}
    `;
export const AssistantUserErrorFullFragmentDoc = `
    fragment assistantUserErrorFull on AssistantUserError {
  ...userErrorFull
  assistantReason: reason
}
    `;
export const AuthenticationUserErrorFullFragmentDoc = `
    fragment authenticationUserErrorFull on AuthenticationUserError {
  ...userErrorFull
  reason
}
    `;
export const OtherUserErrorFullFragmentDoc = `
    fragment otherUserErrorFull on OtherUserError {
  ...userErrorFull
}
    `;
export const AssistantMessageTaskFullFragmentDoc = `
    fragment assistantMessageTaskFull on AssistantMessageTask {
  __typename
  id
  message {
    ...assistantMessageFull
  }
  session {
    ...assistantSessionMeta
  }
  error {
    ... on AssistantUserError {
      ...assistantUserErrorFull
    }
    ... on AuthenticationUserError {
      ...authenticationUserErrorFull
    }
    ... on OtherUserError {
      ...otherUserErrorFull
    }
  }
}
    `;
export const AssistantUsageFullFragmentDoc = `
    fragment assistantUsageFull on AssistantUsage {
  __typename
  balance
}
    `;
export const AuthenticationRequestFullFragmentDoc = `
    fragment authenticationRequestFull on AuthenticationRequest {
  __typename
  id
  expiresAt
  userCode
  verificationUrl
}
    `;
export const AuthenticationTokenFullFragmentDoc = `
    fragment authenticationTokenFull on AuthenticationToken {
  __typename
  accessToken
  expiresAt
  refreshToken
  scopes
}
    `;
export const AutomateEntryMetaFragmentDoc = `
    fragment automateEntryMeta on AutomateEntry {
  __typename
  id
  name
  createdAt
  session {
    id
  }
}
    `;
export const ConcurrencySettingFullFragmentDoc = `
    fragment concurrencySettingFull on AutomateConcurrencySetting {
  __typename
  delay
  workers
}
    `;
export const RetryOnFailureSettingFullFragmentDoc = `
    fragment retryOnFailureSettingFull on AutomateRetryOnFailureSetting {
  __typename
  backoff
  maximumRetries
}
    `;
export const SimpleListPayloadOptionsFullFragmentDoc = `
    fragment simpleListPayloadOptionsFull on AutomateSimpleListPayload {
  __typename
  list
}
    `;
export const HostedFilePayloadOptionsFullFragmentDoc = `
    fragment hostedFilePayloadOptionsFull on AutomateHostedFilePayload {
  __typename
  id
  delimiter
}
    `;
export const NullPayloadOptionsFullFragmentDoc = `
    fragment nullPayloadOptionsFull on AutomateNullPayload {
  __typename
  quantity
}
    `;
export const AutomatePayloadFullFragmentDoc = `
    fragment automatePayloadFull on AutomatePayload {
  __typename
  kind
  options {
    ... on AutomateSimpleListPayload {
      ...simpleListPayloadOptionsFull
    }
    ... on AutomateHostedFilePayload {
      ...hostedFilePayloadOptionsFull
    }
    ... on AutomateNullPayload {
      ...nullPayloadOptionsFull
    }
  }
  preprocessors {
    __typename
    kind
    options {
      ... on AutomatePrefixPreprocessor {
        value
      }
      ... on AutomateSuffixPreprocessor {
        value
      }
    }
  }
  urlEncode {
    __typename
    charset
    enabled
    nonAscii
  }
}
    `;
export const AutomatePlaceholderFullFragmentDoc = `
    fragment automatePlaceholderFull on AutomatePlaceholder {
  __typename
  start
  end
}
    `;
export const AutomateSettingsFullFragmentDoc = `
    fragment automateSettingsFull on AutomateSettings {
  __typename
  closeConnection
  updateContentLength
  strategy
  concurrency {
    ...concurrencySettingFull
  }
  retryOnFailure {
    ...retryOnFailureSettingFull
  }
  payloads {
    ...automatePayloadFull
  }
  placeholders {
    ...automatePlaceholderFull
  }
}
    `;
export const AutomateEntryFullFragmentDoc = `
    fragment automateEntryFull on AutomateEntry {
  ...automateEntryMeta
  settings {
    ...automateSettingsFull
  }
}
    `;
export const RequestMetadataFullFragmentDoc = `
    fragment requestMetadataFull on RequestMetadata {
  color
}
    `;
export const ResponseMetaFragmentDoc = `
    fragment responseMeta on Response {
  __typename
  id
  statusCode
  roundtripTime
  length
  createdAt
  alteration
  edited
}
    `;
export const RequestMetaFragmentDoc = `
    fragment requestMeta on Request {
  __typename
  id
  host
  port
  path
  query
  method
  edited
  isTls
  length
  alteration
  metadata {
    ...requestMetadataFull
  }
  fileExtension
  source
  createdAt
  response {
    ...responseMeta
  }
}
    `;
export const AutomateEntryRequestPayloadFullFragmentDoc = `
    fragment automateEntryRequestPayloadFull on AutomateEntryRequestPayload {
  __typename
  position
  raw
}
    `;
export const AutomateEntryRequestMetaFragmentDoc = `
    fragment automateEntryRequestMeta on AutomateEntryRequest {
  __typename
  sequenceId
  automateEntryId
  error
  request {
    ...requestMeta
  }
  payloads {
    ...automateEntryRequestPayloadFull
  }
}
    `;
export const AutomateEntryRequestEdgeMetaFragmentDoc = `
    fragment automateEntryRequestEdgeMeta on AutomateEntryRequestEdge {
  __typename
  node {
    ...automateEntryRequestMeta
  }
  cursor
}
    `;
export const AutomateSessionMetaFragmentDoc = `
    fragment automateSessionMeta on AutomateSession {
  __typename
  id
  name
  createdAt
  entries {
    ...automateEntryMeta
  }
}
    `;
export const ConnectionInfoFullFragmentDoc = `
    fragment connectionInfoFull on ConnectionInfo {
  __typename
  host
  port
  isTls
}
    `;
export const AutomateSessionFullFragmentDoc = `
    fragment automateSessionFull on AutomateSession {
  ...automateSessionMeta
  connection {
    ...connectionInfoFull
  }
  settings {
    ...automateSettingsFull
  }
  raw
}
    `;
export const AutomateTaskMetaFragmentDoc = `
    fragment automateTaskMeta on AutomateTask {
  id
  paused
  entry {
    ...automateEntryMeta
  }
}
    `;
export const AutomateTaskEdgeMetaFragmentDoc = `
    fragment automateTaskEdgeMeta on AutomateTaskEdge {
  node {
    ...automateTaskMeta
  }
}
    `;
export const BackupMetaFragmentDoc = `
    fragment backupMeta on Backup {
  __typename
  id
  name
  path
  size
  status
  createdAt
  updatedAt
  project {
    id
  }
}
    `;
export const BackupTaskMetaFragmentDoc = `
    fragment backupTaskMeta on BackupTask {
  __typename
  id
  backup {
    ...backupMeta
  }
}
    `;
export const FinishedBackupTaskSuccessFullFragmentDoc = `
    fragment finishedBackupTaskSuccessFull on FinishedBackupTaskSuccess {
  __typename
  task {
    ...backupTaskMeta
  }
}
    `;
export const FinishedBackupTaskCancelledFullFragmentDoc = `
    fragment finishedBackupTaskCancelledFull on FinishedBackupTaskCancelled {
  __typename
  taskId
}
    `;
export const InternalUserErrorFullFragmentDoc = `
    fragment internalUserErrorFull on InternalUserError {
  ...userErrorFull
  message
}
    `;
export const BackupUserErrorFullFragmentDoc = `
    fragment backupUserErrorFull on BackupUserError {
  ...userErrorFull
  reason
}
    `;
export const FinishedBackupTaskErrorFullFragmentDoc = `
    fragment finishedBackupTaskErrorFull on FinishedBackupTaskError {
  __typename
  taskId
  error {
    ... on OtherUserError {
      ...otherUserErrorFull
    }
    ... on InternalUserError {
      ...internalUserErrorFull
    }
    ... on BackupUserError {
      ...backupUserErrorFull
    }
  }
}
    `;
export const ProjectFullFragmentDoc = `
    fragment projectFull on Project {
  __typename
  id
  name
  path
  version
  status
  size
  createdAt
  updatedAt
  backups {
    id
  }
}
    `;
export const RestoreBackupTaskMetaFragmentDoc = `
    fragment restoreBackupTaskMeta on RestoreBackupTask {
  __typename
  id
  backup {
    ...backupMeta
  }
  project {
    ...projectFull
  }
}
    `;
export const FinishedRestoreBackupTaskSuccessFullFragmentDoc = `
    fragment finishedRestoreBackupTaskSuccessFull on FinishedRestoreBackupTaskSuccess {
  __typename
  task {
    ...restoreBackupTaskMeta
  }
}
    `;
export const FinishedRestoreBackupTaskCancelledFullFragmentDoc = `
    fragment finishedRestoreBackupTaskCancelledFull on FinishedRestoreBackupTaskCancelled {
  __typename
  taskId
}
    `;
export const FinishedRestoreBackupTaskErrorFullFragmentDoc = `
    fragment finishedRestoreBackupTaskErrorFull on FinishedRestoreBackupTaskError {
  __typename
  taskId
  error {
    ... on OtherUserError {
      ...otherUserErrorFull
    }
    ... on InternalUserError {
      ...internalUserErrorFull
    }
    ... on BackupUserError {
      ...backupUserErrorFull
    }
  }
}
    `;
export const BrowserFullFragmentDoc = `
    fragment browserFull on Browser {
  __typename
  id
  installedAt
  latest
  path
  size
  version
}
    `;
export const InvalidRegexUserErrorFullFragmentDoc = `
    fragment invalidRegexUserErrorFull on InvalidRegexUserError {
  ...userErrorFull
  term
}
    `;
export const NameTakenUserErrorFullFragmentDoc = `
    fragment nameTakenUserErrorFull on NameTakenUserError {
  ...userErrorFull
  name
}
    `;
export const AliasTakenUserErrorFullFragmentDoc = `
    fragment aliasTakenUserErrorFull on AliasTakenUserError {
  ...userErrorFull
  alias
}
    `;
export const RenderFailedUserErrorFullFragmentDoc = `
    fragment renderFailedUserErrorFull on RenderFailedUserError {
  ...userErrorFull
  reason
}
    `;
export const TaskInProgressUserErrorFullFragmentDoc = `
    fragment taskInProgressUserErrorFull on TaskInProgressUserError {
  ...userErrorFull
  taskId
}
    `;
export const UnknownIdUserErrorFullFragmentDoc = `
    fragment unknownIdUserErrorFull on UnknownIdUserError {
  ...userErrorFull
  id
}
    `;
export const UnsupportedPlatformUserErrorFullFragmentDoc = `
    fragment unsupportedPlatformUserErrorFull on UnsupportedPlatformUserError {
  ...userErrorFull
}
    `;
export const PermissionDeniedUserErrorFullFragmentDoc = `
    fragment permissionDeniedUserErrorFull on PermissionDeniedUserError {
  ...userErrorFull
  permissionDeniedReason: reason
}
    `;
export const WorkflowUserErrorFullFragmentDoc = `
    fragment workflowUserErrorFull on WorkflowUserError {
  ...userErrorFull
  nodeId
  message
  reason
}
    `;
export const InvalidGlobTermsUserErrorFullFragmentDoc = `
    fragment invalidGlobTermsUserErrorFull on InvalidGlobTermsUserError {
  ...userErrorFull
  terms
}
    `;
export const InvalidHttpqlUserErrorFullFragmentDoc = `
    fragment invalidHTTPQLUserErrorFull on InvalidHTTPQLUserError {
  ...userErrorFull
  query
}
    `;
export const DataExportMetaFieldsFragmentDoc = `
    fragment dataExportMetaFields on DataExport {
  __typename
  id
  name
  path
  size
  status
  format
  error
  createdAt
}
    `;
export const DataExportMetaFragmentDoc = `
    fragment dataExportMeta on DataExport {
  ...dataExportMetaFields
}
    `;
export const DataExportFullFieldsFragmentDoc = `
    fragment dataExportFullFields on DataExport {
  ...dataExportMeta
  downloadUri
}
    `;
export const DataExportFullFragmentDoc = `
    fragment dataExportFull on DataExport {
  ...dataExportFullFields
}
    `;
export const DataExportTaskMetaFieldsFragmentDoc = `
    fragment dataExportTaskMetaFields on DataExportTask {
  __typename
  id
  export {
    ...dataExportMeta
  }
}
    `;
export const DataExportTaskMetaFragmentDoc = `
    fragment dataExportTaskMeta on DataExportTask {
  ...dataExportTaskMetaFields
}
    `;
export const FilterPresetFullFragmentDoc = `
    fragment filterPresetFull on FilterPreset {
  __typename
  id
  alias
  name
  clause
}
    `;
export const FilterPresetEdgeFullFragmentDoc = `
    fragment filterPresetEdgeFull on FilterPresetEdge {
  cursor
  node {
    ...filterPresetFull
  }
}
    `;
export const FindingMetaFragmentDoc = `
    fragment findingMeta on Finding {
  id
  title
  description
  reporter
  host
  path
  createdAt
  request {
    ...requestMeta
  }
}
    `;
export const FindingEdgeMetaFragmentDoc = `
    fragment findingEdgeMeta on FindingEdge {
  cursor
  node {
    ...findingMeta
  }
}
    `;
export const OnboardingFullFragmentDoc = `
    fragment onboardingFull on OnboardingState {
  __typename
  caCertificate
  license
  project
}
    `;
export const InterceptEntryMetaFragmentDoc = `
    fragment interceptEntryMeta on InterceptEntry {
  __typename
  id
  request {
    ...requestMeta
  }
}
    `;
export const RequestFullFieldsFragmentDoc = `
    fragment requestFullFields on Request {
  ...requestMeta
  raw
  edits {
    ...requestMeta
  }
}
    `;
export const RequestFullFragmentDoc = `
    fragment requestFull on Request {
  ...requestFullFields
}
    `;
export const InterceptEntryFullFragmentDoc = `
    fragment interceptEntryFull on InterceptEntry {
  ...interceptEntryMeta
  request {
    ...requestFull
  }
}
    `;
export const InterceptEntryEdgeWithMetaFragmentDoc = `
    fragment interceptEntryEdgeWithMeta on InterceptEntryEdge {
  __typename
  cursor
  node {
    ...interceptEntryMeta
  }
}
    `;
export const DeleteInterceptEntriesTaskFullFragmentDoc = `
    fragment deleteInterceptEntriesTaskFull on DeleteInterceptEntriesTask {
  __typename
  id
  deletedEntryIds
}
    `;
export const HostedFileFullFragmentDoc = `
    fragment hostedFileFull on HostedFile {
  __typename
  id
  name
  path
  size
  updatedAt
  createdAt
}
    `;
export const InterceptRequestMessageMetaFragmentDoc = `
    fragment interceptRequestMessageMeta on InterceptRequestMessage {
  __typename
  id
  request {
    ...requestMeta
  }
}
    `;
export const InterceptResponseMessageMetaFragmentDoc = `
    fragment interceptResponseMessageMeta on InterceptResponseMessage {
  __typename
  id
  response {
    ...responseMeta
  }
  request {
    ...requestMeta
  }
}
    `;
export const InterceptMessageMetaFragmentDoc = `
    fragment interceptMessageMeta on InterceptMessage {
  __typename
  ... on InterceptRequestMessage {
    ...interceptRequestMessageMeta
  }
  ... on InterceptResponseMessage {
    ...interceptResponseMessageMeta
  }
}
    `;
export const InterceptRequestOptionsMetaFragmentDoc = `
    fragment interceptRequestOptionsMeta on InterceptRequestOptions {
  enabled
}
    `;
export const InterceptResponseOptionsMetaFragmentDoc = `
    fragment interceptResponseOptionsMeta on InterceptResponseOptions {
  enabled
}
    `;
export const InterceptScopeOptionsMetaFragmentDoc = `
    fragment interceptScopeOptionsMeta on InterceptScopeOptions {
  scopeId
}
    `;
export const InterceptOptionsMetaFragmentDoc = `
    fragment interceptOptionsMeta on InterceptOptions {
  request {
    ...interceptRequestOptionsMeta
  }
  response {
    ...interceptResponseOptionsMeta
  }
  scope {
    ...interceptScopeOptionsMeta
  }
}
    `;
export const UpstreamProxyAuthBasicFullFragmentDoc = `
    fragment upstreamProxyAuthBasicFull on UpstreamProxyAuthBasic {
  __typename
  username
  password
}
    `;
export const UpstreamProxyFullFragmentDoc = `
    fragment upstreamProxyFull on UpstreamProxy {
  __typename
  id
  allowlist
  denylist
  auth {
    ... on UpstreamProxyAuthBasic {
      ...upstreamProxyAuthBasicFull
    }
  }
  enabled
  host
  kind
  port
  rank
}
    `;
export const ReplayEntryMetaFragmentDoc = `
    fragment replayEntryMeta on ReplayEntry {
  __typename
  id
  error
  sessionId
  request {
    ...requestMeta
  }
}
    `;
export const PageInfoFullFragmentDoc = `
    fragment pageInfoFull on PageInfo {
  __typename
  hasPreviousPage
  hasNextPage
  startCursor
  endCursor
}
    `;
export const CountFullFragmentDoc = `
    fragment countFull on Count {
  __typename
  value
  snapshot
}
    `;
export const ReplaySessionMetaFragmentDoc = `
    fragment replaySessionMeta on ReplaySession {
  __typename
  id
  name
  activeEntry {
    ...replayEntryMeta
  }
  collection {
    id
  }
  entries {
    edges {
      cursor
      node {
        ...replayEntryMeta
      }
    }
    pageInfo {
      ...pageInfoFull
    }
    count {
      ...countFull
    }
  }
}
    `;
export const ReplaySessionCollectionMetaFragmentDoc = `
    fragment replaySessionCollectionMeta on ReplaySessionCollection {
  __typename
  id
  name
  sessions {
    ...replaySessionMeta
  }
}
    `;
export const ReplayTaskMetaFragmentDoc = `
    fragment replayTaskMeta on ReplayTask {
  __typename
  id
  error
  replayEntry {
    ...replayEntryMeta
  }
}
    `;
export const ReplayTaskEdgeMetaFragmentDoc = `
    fragment replayTaskEdgeMeta on ReplayTaskEdge {
  __typename
  node {
    ...replayTaskMeta
  }
  cursor
}
    `;
export const RequestEdgeMetaFragmentDoc = `
    fragment requestEdgeMeta on RequestEdge {
  __typename
  cursor
  node {
    ...requestMeta
  }
}
    `;
export const ResponseFullFragmentDoc = `
    fragment responseFull on Response {
  ...responseMeta
  raw
  edits {
    ...responseMeta
  }
}
    `;
export const ReleaseFullFragmentDoc = `
    fragment releaseFull on Release {
  __typename
  links {
    __typename
    display
    link
    platform
  }
  releasedAt
  version
}
    `;
export const RuntimeFullFragmentDoc = `
    fragment runtimeFull on Runtime {
  __typename
  version
  platform
  availableUpdate {
    ...releaseFull
  }
}
    `;
export const ScopeFullFragmentDoc = `
    fragment scopeFull on Scope {
  __typename
  id
  name
  allowlist
  denylist
  indexed
}
    `;
export const SitemapEntryMetaFragmentDoc = `
    fragment sitemapEntryMeta on SitemapEntry {
  __typename
  id
  label
  kind
  parentId
  metadata {
    ... on SitemapEntryMetadataDomain {
      isTls
      port
    }
  }
  hasDescendants
}
    `;
export const SitemapEntryEdgeMetaFragmentDoc = `
    fragment sitemapEntryEdgeMeta on SitemapEntryEdge {
  __typename
  cursor
  node {
    ...sitemapEntryMeta
  }
}
    `;
export const StreamMetaFragmentDoc = `
    fragment streamMeta on Stream {
  __typename
  id
  createdAt
  direction
  host
  isTls
  path
  port
  protocol
  source
}
    `;
export const StreamEdgeMetaFragmentDoc = `
    fragment streamEdgeMeta on StreamEdge {
  __typename
  cursor
  node {
    ...streamMeta
  }
}
    `;
export const StreamWsMessageMetaFragmentDoc = `
    fragment streamWsMessageMeta on StreamWsMessage {
  id
  length
  createdAt
  direction
  edited
  alteration
  format
  streamId
}
    `;
export const StreamWsMessageFullFragmentDoc = `
    fragment streamWsMessageFull on StreamWsMessage {
  ...streamWsMessageMeta
  raw
}
    `;
export const StreamWsMessageEdgeMetaFragmentDoc = `
    fragment streamWsMessageEdgeMeta on StreamWsMessageEdge {
  __typename
  cursor
  node {
    ...streamWsMessageMeta
  }
}
    `;
export const TamperRuleFullFragmentDoc = `
    fragment tamperRuleFull on TamperRule {
  __typename
  id
  isEnabled
  isRegex
  name
  matchTerm
  replaceTerm
  strategy
  rank
  condition
  collection {
    id
  }
}
    `;
export const TamperRuleCollectionFullFragmentDoc = `
    fragment tamperRuleCollectionFull on TamperRuleCollection {
  __typename
  id
  name
  rules {
    ...tamperRuleFull
  }
}
    `;
export const UserProfileFullFragmentDoc = `
    fragment userProfileFull on UserProfile {
  __typename
  identity {
    __typename
    name
    email
  }
  subscription {
    __typename
    entitlements {
      __typename
      name
    }
    plan {
      __typename
      name
    }
  }
}
    `;
export const UserSettingsFullFragmentDoc = `
    fragment userSettingsFull on UserSettings {
  __typename
  data
  migrations
}
    `;
export const WorkflowFullFragmentDoc = `
    fragment workflowFull on Workflow {
  __typename
  id
  kind
  name
  enabled
  global
  definition
}
    `;
export const WorkflowNodeDefinitionFullFragmentDoc = `
    fragment workflowNodeDefinitionFull on WorkflowNodeDefinition {
  __typename
  raw
}
    `;
export const SendAssistantMessageDocument = `
    mutation sendAssistantMessage($sessionId: ID!, $message: String) {
  sendAssistantMessage(sessionId: $sessionId, message: $message) {
    error {
      ... on PermissionDeniedUserError {
        ...permissionDeniedUserErrorFull
      }
      ... on TaskInProgressUserError {
        ...taskInProgressUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
    task {
      ...assistantMessageTaskFull
    }
  }
}
    ${PermissionDeniedUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${TaskInProgressUserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}
${AssistantMessageTaskFullFragmentDoc}
${AssistantMessageFullFragmentDoc}
${AssistantSessionMetaFragmentDoc}
${AssistantUserErrorFullFragmentDoc}
${AuthenticationUserErrorFullFragmentDoc}`;
export const CreateAssistantSessionDocument = `
    mutation createAssistantSession($input: CreateAssistantSessionInput!) {
  createAssistantSession(input: $input) {
    error {
      ... on PermissionDeniedUserError {
        ...permissionDeniedUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
    session {
      ...assistantSessionMeta
    }
  }
}
    ${PermissionDeniedUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}
${AssistantSessionMetaFragmentDoc}`;
export const DeleteAssistantSessionDocument = `
    mutation deleteAssistantSession($id: ID!) {
  deleteAssistantSession(id: $id) {
    deletedId
  }
}
    `;
export const RenameAssistantSessionDocument = `
    mutation renameAssistantSession($id: ID!, $name: String!) {
  renameAssistantSession(id: $id, name: $name) {
    session {
      ...assistantSessionMeta
    }
  }
}
    ${AssistantSessionMetaFragmentDoc}`;
export const StartAuthenticationFlowDocument = `
    mutation startAuthenticationFlow {
  startAuthenticationFlow {
    request {
      ...authenticationRequestFull
    }
    error {
      ... on AuthenticationUserError {
        ...authenticationUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${AuthenticationRequestFullFragmentDoc}
${AuthenticationUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const RefreshAuthenticationTokenDocument = `
    mutation refreshAuthenticationToken($refreshToken: Token!) {
  refreshAuthenticationToken(refreshToken: $refreshToken) {
    token {
      ...authenticationTokenFull
    }
  }
}
    ${AuthenticationTokenFullFragmentDoc}`;
export const LogoutDocument = `
    mutation logout {
  logout {
    success
  }
}
    `;
export const DeleteAutomateEntriesDocument = `
    mutation deleteAutomateEntries($ids: [ID!]!) {
  deleteAutomateEntries(ids: $ids) {
    deletedIds
    errors {
      ... on TaskInProgressUserError {
        ...taskInProgressUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${TaskInProgressUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const RenameAutomateEntryDocument = `
    mutation renameAutomateEntry($id: ID!, $name: String!) {
  renameAutomateEntry(id: $id, name: $name) {
    entry {
      ...automateEntryFull
    }
  }
}
    ${AutomateEntryFullFragmentDoc}
${AutomateEntryMetaFragmentDoc}
${AutomateSettingsFullFragmentDoc}
${ConcurrencySettingFullFragmentDoc}
${RetryOnFailureSettingFullFragmentDoc}
${AutomatePayloadFullFragmentDoc}
${SimpleListPayloadOptionsFullFragmentDoc}
${HostedFilePayloadOptionsFullFragmentDoc}
${NullPayloadOptionsFullFragmentDoc}
${AutomatePlaceholderFullFragmentDoc}`;
export const CreateAutomateSessionDocument = `
    mutation createAutomateSession($input: CreateAutomateSessionInput!) {
  createAutomateSession(input: $input) {
    session {
      ...automateSessionFull
    }
  }
}
    ${AutomateSessionFullFragmentDoc}
${AutomateSessionMetaFragmentDoc}
${AutomateEntryMetaFragmentDoc}
${ConnectionInfoFullFragmentDoc}
${AutomateSettingsFullFragmentDoc}
${ConcurrencySettingFullFragmentDoc}
${RetryOnFailureSettingFullFragmentDoc}
${AutomatePayloadFullFragmentDoc}
${SimpleListPayloadOptionsFullFragmentDoc}
${HostedFilePayloadOptionsFullFragmentDoc}
${NullPayloadOptionsFullFragmentDoc}
${AutomatePlaceholderFullFragmentDoc}`;
export const DeleteAutomateSessionDocument = `
    mutation deleteAutomateSession($id: ID!) {
  deleteAutomateSession(id: $id) {
    deletedId
  }
}
    `;
export const RenameAutomateSessionDocument = `
    mutation renameAutomateSession($id: ID!, $name: String!) {
  renameAutomateSession(id: $id, name: $name) {
    session {
      ...automateSessionFull
    }
  }
}
    ${AutomateSessionFullFragmentDoc}
${AutomateSessionMetaFragmentDoc}
${AutomateEntryMetaFragmentDoc}
${ConnectionInfoFullFragmentDoc}
${AutomateSettingsFullFragmentDoc}
${ConcurrencySettingFullFragmentDoc}
${RetryOnFailureSettingFullFragmentDoc}
${AutomatePayloadFullFragmentDoc}
${SimpleListPayloadOptionsFullFragmentDoc}
${HostedFilePayloadOptionsFullFragmentDoc}
${NullPayloadOptionsFullFragmentDoc}
${AutomatePlaceholderFullFragmentDoc}`;
export const UpdateAutomateSessionDocument = `
    mutation updateAutomateSession($id: ID!, $input: UpdateAutomateSessionInput!) {
  updateAutomateSession(id: $id, input: $input) {
    session {
      ...automateSessionFull
    }
  }
}
    ${AutomateSessionFullFragmentDoc}
${AutomateSessionMetaFragmentDoc}
${AutomateEntryMetaFragmentDoc}
${ConnectionInfoFullFragmentDoc}
${AutomateSettingsFullFragmentDoc}
${ConcurrencySettingFullFragmentDoc}
${RetryOnFailureSettingFullFragmentDoc}
${AutomatePayloadFullFragmentDoc}
${SimpleListPayloadOptionsFullFragmentDoc}
${HostedFilePayloadOptionsFullFragmentDoc}
${NullPayloadOptionsFullFragmentDoc}
${AutomatePlaceholderFullFragmentDoc}`;
export const CancelAutomateTaskDocument = `
    mutation cancelAutomateTask($id: ID!) {
  cancelAutomateTask(id: $id) {
    cancelledId
    userError {
      ... on UnknownIdUserError {
        ...unknownIdUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${UnknownIdUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const PauseAutomateTaskDocument = `
    mutation pauseAutomateTask($id: ID!) {
  pauseAutomateTask(id: $id) {
    automateTask {
      ...automateTaskMeta
    }
    userError {
      ... on UnknownIdUserError {
        ...unknownIdUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${AutomateTaskMetaFragmentDoc}
${AutomateEntryMetaFragmentDoc}
${UnknownIdUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const ResumeAutomateTaskDocument = `
    mutation resumeAutomateTask($id: ID!) {
  resumeAutomateTask(id: $id) {
    automateTask {
      ...automateTaskMeta
    }
    userError {
      ... on UnknownIdUserError {
        ...unknownIdUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${AutomateTaskMetaFragmentDoc}
${AutomateEntryMetaFragmentDoc}
${UnknownIdUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const StartAutomateTaskDocument = `
    mutation startAutomateTask($automateSessionId: ID!) {
  startAutomateTask(automateSessionId: $automateSessionId) {
    automateTask {
      ...automateTaskMeta
    }
  }
}
    ${AutomateTaskMetaFragmentDoc}
${AutomateEntryMetaFragmentDoc}`;
export const CreateBackupDocument = `
    mutation createBackup($id: ID!) {
  createBackup(projectId: $id) {
    task {
      ...backupTaskMeta
    }
    error {
      ... on OtherUserError {
        ...otherUserErrorFull
      }
      ... on TaskInProgressUserError {
        ...taskInProgressUserErrorFull
      }
      ... on PermissionDeniedUserError {
        ...permissionDeniedUserErrorFull
      }
    }
  }
}
    ${BackupTaskMetaFragmentDoc}
${BackupMetaFragmentDoc}
${OtherUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${TaskInProgressUserErrorFullFragmentDoc}
${PermissionDeniedUserErrorFullFragmentDoc}`;
export const DeleteBackupDocument = `
    mutation deleteBackup($id: ID!) {
  deleteBackup(id: $id) {
    deletedId
    error {
      ... on OtherUserError {
        ...otherUserErrorFull
      }
      ... on TaskInProgressUserError {
        ...taskInProgressUserErrorFull
      }
    }
  }
}
    ${OtherUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${TaskInProgressUserErrorFullFragmentDoc}`;
export const RenameBackupDocument = `
    mutation renameBackup($id: ID!, $name: String!) {
  renameBackup(id: $id, name: $name) {
    backup {
      ...backupMeta
    }
  }
}
    ${BackupMetaFragmentDoc}`;
export const RestoreBackupFromFileDocument = `
    mutation restoreBackupFromFile($name: String!, $file: Upload!) {
  restoreBackup(input: {name: $name, source: {file: $file}}) {
    error {
      ... on NameTakenUserError {
        ...nameTakenUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
      ... on PermissionDeniedUserError {
        ...permissionDeniedUserErrorFull
      }
    }
    task {
      ...restoreBackupTaskMeta
    }
  }
}
    ${NameTakenUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}
${PermissionDeniedUserErrorFullFragmentDoc}
${RestoreBackupTaskMetaFragmentDoc}
${BackupMetaFragmentDoc}
${ProjectFullFragmentDoc}`;
export const RestoreBackupDocument = `
    mutation restoreBackup($name: String!, $id: ID!) {
  restoreBackup(input: {name: $name, source: {backupId: $id}}) {
    error {
      ... on NameTakenUserError {
        ...nameTakenUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
      ... on PermissionDeniedUserError {
        ...permissionDeniedUserErrorFull
      }
    }
    task {
      ...restoreBackupTaskMeta
    }
  }
}
    ${NameTakenUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}
${PermissionDeniedUserErrorFullFragmentDoc}
${RestoreBackupTaskMetaFragmentDoc}
${BackupMetaFragmentDoc}
${ProjectFullFragmentDoc}`;
export const CancelBackupTaskDocument = `
    mutation cancelBackupTask($id: ID!) {
  cancelBackupTask(id: $id) {
    cancelledId
    error {
      ... on UnknownIdUserError {
        ...unknownIdUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${UnknownIdUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const CancelRestoreBackupTaskDocument = `
    mutation cancelRestoreBackupTask($id: ID!) {
  cancelRestoreBackupTask(id: $id) {
    cancelledId
    error {
      ... on UnknownIdUserError {
        ...unknownIdUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${UnknownIdUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const DeleteBrowserDocument = `
    mutation deleteBrowser {
  deleteBrowser {
    deletedId
  }
}
    `;
export const InstallBrowserDocument = `
    mutation installBrowser {
  installBrowser {
    browser {
      ...browserFull
    }
    error {
      ... on UnsupportedPlatformUserError {
        ...unsupportedPlatformUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${BrowserFullFragmentDoc}
${UnsupportedPlatformUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const UpdateBrowserDocument = `
    mutation updateBrowser {
  updateBrowser {
    browser {
      ...browserFull
    }
    error {
      ... on RenderFailedUserError {
        ...renderFailedUserErrorFull
      }
      ... on UnsupportedPlatformUserError {
        ...unsupportedPlatformUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${BrowserFullFragmentDoc}
${RenderFailedUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${UnsupportedPlatformUserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const UpdateOnboardingDocument = `
    mutation updateOnboarding($input: SetConfigOnboardingInput!) {
  setGlobalConfigOnboarding(input: $input) {
    config {
      onboarding {
        ...onboardingFull
      }
    }
  }
}
    ${OnboardingFullFragmentDoc}`;
export const RenameDataExportDocument = `
    mutation renameDataExport($id: ID!, $name: String!) {
  renameDataExport(id: $id, name: $name) {
    export {
      ...dataExportMeta
    }
  }
}
    ${DataExportMetaFragmentDoc}
${DataExportMetaFieldsFragmentDoc}`;
export const DeleteDataExportDocument = `
    mutation deleteDataExport($id: ID!) {
  deleteDataExport(id: $id) {
    deletedId
    userError {
      ... on TaskInProgressUserError {
        ...taskInProgressUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${TaskInProgressUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const CancelDataExportTaskDocument = `
    mutation cancelDataExportTask($id: ID!) {
  cancelDataExportTask(id: $id) {
    cancelledId
    userError {
      ... on UnknownIdUserError {
        ...unknownIdUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${UnknownIdUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const CreateFilterPresetDocument = `
    mutation createFilterPreset($input: CreateFilterPresetInput!) {
  createFilterPreset(input: $input) {
    filter {
      ...filterPresetFull
    }
    error {
      ... on NameTakenUserError {
        ...nameTakenUserErrorFull
      }
      ... on AliasTakenUserError {
        ...aliasTakenUserErrorFull
      }
      ... on PermissionDeniedUserError {
        ...permissionDeniedUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${FilterPresetFullFragmentDoc}
${NameTakenUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${AliasTakenUserErrorFullFragmentDoc}
${PermissionDeniedUserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const UpdateFilterPresetDocument = `
    mutation updateFilterPreset($id: ID!, $input: UpdateFilterPresetInput!) {
  updateFilterPreset(id: $id, input: $input) {
    filter {
      ...filterPresetFull
    }
    error {
      ... on NameTakenUserError {
        ...nameTakenUserErrorFull
      }
      ... on AliasTakenUserError {
        ...aliasTakenUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${FilterPresetFullFragmentDoc}
${NameTakenUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${AliasTakenUserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const DeleteFilterPresetDocument = `
    mutation deleteFilterPreset($id: ID!) {
  deleteFilterPreset(id: $id) {
    deletedId
  }
}
    `;
export const DeleteFindingsDocument = `
    mutation deleteFindings($ids: [ID!]!) {
  deleteFindings(ids: $ids) {
    deletedIds
  }
}
    `;
export const DeleteInterceptEntriesDocument = `
    mutation deleteInterceptEntries($filter: FilterClauseInterceptEntryInput, $scopeId: ID) {
  deleteInterceptEntries(filter: $filter, scopeId: $scopeId) {
    task {
      ...deleteInterceptEntriesTaskFull
    }
    error: userError {
      ... on TaskInProgressUserError {
        ...taskInProgressUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${DeleteInterceptEntriesTaskFullFragmentDoc}
${TaskInProgressUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const DeleteInterceptEntryDocument = `
    mutation deleteInterceptEntry($id: ID!) {
  deleteInterceptEntry(id: $id) {
    deletedId
    error: userError {
      ... on UnknownIdUserError {
        ...unknownIdUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${UnknownIdUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const DeleteHostedFileDocument = `
    mutation deleteHostedFile($id: ID!) {
  deleteHostedFile(id: $id) {
    deletedId
  }
}
    `;
export const RenameHostedFileDocument = `
    mutation renameHostedFile($id: ID!, $name: String!) {
  renameHostedFile(id: $id, name: $name) {
    hostedFile {
      ...hostedFileFull
    }
  }
}
    ${HostedFileFullFragmentDoc}`;
export const UploadHostedFileDocument = `
    mutation uploadHostedFile($input: UploadHostedFileInput!) {
  uploadHostedFile(input: $input) {
    hostedFile {
      ...hostedFileFull
    }
  }
}
    ${HostedFileFullFragmentDoc}`;
export const ForwardInterceptMessageDocument = `
    mutation forwardInterceptMessage($id: ID!, $input: ForwardInterceptMessageInput) {
  forwardInterceptMessage(id: $id, input: $input) {
    forwardedId
  }
}
    `;
export const DropInterceptMesageDocument = `
    mutation dropInterceptMesage($id: ID!) {
  dropInterceptMessage(id: $id) {
    droppedId
  }
}
    `;
export const SetInterceptOptionsDocument = `
    mutation setInterceptOptions($input: InterceptOptionsInput!) {
  setInterceptOptions(input: $input) {
    options {
      ...interceptOptionsMeta
    }
  }
}
    ${InterceptOptionsMetaFragmentDoc}
${InterceptRequestOptionsMetaFragmentDoc}
${InterceptResponseOptionsMetaFragmentDoc}
${InterceptScopeOptionsMetaFragmentDoc}`;
export const PauseInterceptDocument = `
    mutation pauseIntercept {
  pauseIntercept {
    status
  }
}
    `;
export const ResumeInterceptDocument = `
    mutation resumeIntercept {
  resumeIntercept {
    status
  }
}
    `;
export const CreateUpstreamProxyDocument = `
    mutation createUpstreamProxy($input: CreateUpstreamProxyInput!) {
  createUpstreamProxy(input: $input) {
    proxy {
      ...upstreamProxyFull
    }
  }
}
    ${UpstreamProxyFullFragmentDoc}
${UpstreamProxyAuthBasicFullFragmentDoc}`;
export const UpdateUpstreamProxyDocument = `
    mutation updateUpstreamProxy($id: ID!, $input: UpdateUpstreamProxyInput!) {
  updateUpstreamProxy(id: $id, input: $input) {
    proxy {
      ...upstreamProxyFull
    }
  }
}
    ${UpstreamProxyFullFragmentDoc}
${UpstreamProxyAuthBasicFullFragmentDoc}`;
export const DeleteUpstreamProxyDocument = `
    mutation deleteUpstreamProxy($id: ID!) {
  deleteUpstreamProxy(id: $id) {
    deletedId
  }
}
    `;
export const TestUpstreamProxyDocument = `
    mutation testUpstreamProxy($input: TestUpstreamProxyInput!) {
  testUpstreamProxy(input: $input) {
    success
  }
}
    `;
export const RankUpstreamProxyDocument = `
    mutation rankUpstreamProxy($id: ID!, $input: RankUpstreamProxyInput!) {
  rankUpstreamProxy(id: $id, input: $input) {
    proxy {
      ...upstreamProxyFull
    }
  }
}
    ${UpstreamProxyFullFragmentDoc}
${UpstreamProxyAuthBasicFullFragmentDoc}`;
export const CreateProjectDocument = `
    mutation createProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    project {
      ...projectFull
    }
    error {
      ... on NameTakenUserError {
        ...nameTakenUserErrorFull
      }
      ... on PermissionDeniedUserError {
        ...permissionDeniedUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${ProjectFullFragmentDoc}
${NameTakenUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${PermissionDeniedUserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const SelectProjectDocument = `
    mutation selectProject($id: ID!) {
  selectProject(id: $id) {
    project {
      ...projectFull
    }
  }
}
    ${ProjectFullFragmentDoc}`;
export const DeleteProjectDocument = `
    mutation deleteProject($id: ID!) {
  deleteProject(id: $id) {
    deletedId
  }
}
    `;
export const RenameProjectDocument = `
    mutation renameProject($id: ID!, $name: String!) {
  renameProject(id: $id, name: $name) {
    project {
      ...projectFull
    }
    error {
      ... on NameTakenUserError {
        ...nameTakenUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${ProjectFullFragmentDoc}
${NameTakenUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const RenameReplaySessionCollectionDocument = `
    mutation renameReplaySessionCollection($id: ID!, $name: String!) {
  renameReplaySessionCollection(id: $id, name: $name) {
    collection {
      ...replaySessionCollectionMeta
    }
  }
}
    ${ReplaySessionCollectionMetaFragmentDoc}
${ReplaySessionMetaFragmentDoc}
${ReplayEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${PageInfoFullFragmentDoc}
${CountFullFragmentDoc}`;
export const CreateReplaySessionCollectionDocument = `
    mutation createReplaySessionCollection($input: CreateReplaySessionCollectionInput!) {
  createReplaySessionCollection(input: $input) {
    collection {
      ...replaySessionCollectionMeta
    }
  }
}
    ${ReplaySessionCollectionMetaFragmentDoc}
${ReplaySessionMetaFragmentDoc}
${ReplayEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${PageInfoFullFragmentDoc}
${CountFullFragmentDoc}`;
export const DeleteReplaySessionCollectionDocument = `
    mutation deleteReplaySessionCollection($id: ID!) {
  deleteReplaySessionCollection(id: $id) {
    deletedId
  }
}
    `;
export const RenameReplaySessionDocument = `
    mutation renameReplaySession($id: ID!, $name: String!) {
  renameReplaySession(id: $id, name: $name) {
    session {
      ...replaySessionMeta
    }
  }
}
    ${ReplaySessionMetaFragmentDoc}
${ReplayEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${PageInfoFullFragmentDoc}
${CountFullFragmentDoc}`;
export const SetActiveReplaySessionEntryDocument = `
    mutation setActiveReplaySessionEntry($id: ID!, $entryId: ID!) {
  setActiveReplaySessionEntry(id: $id, entryId: $entryId) {
    session {
      ...replaySessionMeta
    }
  }
}
    ${ReplaySessionMetaFragmentDoc}
${ReplayEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${PageInfoFullFragmentDoc}
${CountFullFragmentDoc}`;
export const DeleteReplaySessionsDocument = `
    mutation deleteReplaySessions($ids: [ID!]!) {
  deleteReplaySessions(ids: $ids) {
    deletedIds
  }
}
    `;
export const CreateReplaySessionDocument = `
    mutation createReplaySession($input: CreateReplaySessionInput!) {
  createReplaySession(input: $input) {
    session {
      ...replaySessionMeta
      collection {
        ...replaySessionCollectionMeta
      }
    }
  }
}
    ${ReplaySessionMetaFragmentDoc}
${ReplayEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${PageInfoFullFragmentDoc}
${CountFullFragmentDoc}
${ReplaySessionCollectionMetaFragmentDoc}`;
export const MoveReplaySessionDocument = `
    mutation moveReplaySession($id: ID!, $collectionId: ID!) {
  moveReplaySession(collectionId: $collectionId, id: $id) {
    session {
      ...replaySessionMeta
    }
  }
}
    ${ReplaySessionMetaFragmentDoc}
${ReplayEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${PageInfoFullFragmentDoc}
${CountFullFragmentDoc}`;
export const StartReplayTaskDocument = `
    mutation startReplayTask($replaySessionId: ID!, $input: StartReplayTaskInput!) {
  startReplayTask(replaySessionId: $replaySessionId, input: $input) {
    task {
      ...replayTaskMeta
    }
  }
}
    ${ReplayTaskMetaFragmentDoc}
${ReplayEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}`;
export const CancelReplayTaskDocument = `
    mutation cancelReplayTask($id: ID!) {
  cancelReplayTask(id: $id) {
    cancelledId
  }
}
    `;
export const UpdateRequestMetadataDocument = `
    mutation updateRequestMetadata($id: ID!, $input: UpdateRequestMetadataInput!) {
  updateRequestMetadata(id: $id, input: $input) {
    snapshot
    metadata {
      ...requestMetadataFull
    }
  }
}
    ${RequestMetadataFullFragmentDoc}`;
export const StartExportRequestsTaskDocument = `
    mutation startExportRequestsTask($input: StartExportRequestsTaskInput!) {
  startExportRequestsTask(input: $input) {
    task {
      ...dataExportTaskMeta
    }
    error {
      ... on OtherUserError {
        ...otherUserErrorFull
      }
      ... on PermissionDeniedUserError {
        ...permissionDeniedUserErrorFull
      }
    }
  }
}
    ${DataExportTaskMetaFragmentDoc}
${DataExportTaskMetaFieldsFragmentDoc}
${DataExportMetaFragmentDoc}
${DataExportMetaFieldsFragmentDoc}
${OtherUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${PermissionDeniedUserErrorFullFragmentDoc}`;
export const RenderRequestDocument = `
    mutation renderRequest($id: ID!, $input: RenderRequestInput!) {
  renderRequest(id: $id, input: $input) {
    render
    error {
      ... on RenderFailedUserError {
        ...renderFailedUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${RenderFailedUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const CreateScopeDocument = `
    mutation createScope($input: CreateScopeInput!) {
  createScope(input: $input) {
    error {
      ... on InvalidGlobTermsUserError {
        ...invalidGlobTermsUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
    scope {
      ...scopeFull
    }
  }
}
    ${InvalidGlobTermsUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}
${ScopeFullFragmentDoc}`;
export const UpdateScopeDocument = `
    mutation updateScope($id: ID!, $input: UpdateScopeInput!) {
  updateScope(id: $id, input: $input) {
    error {
      ... on InvalidGlobTermsUserError {
        ...invalidGlobTermsUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
    scope {
      ...scopeFull
    }
  }
}
    ${InvalidGlobTermsUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}
${ScopeFullFragmentDoc}`;
export const DeleteScopeDocument = `
    mutation deleteScope($id: ID!) {
  deleteScope(id: $id) {
    deletedId
  }
}
    `;
export const RenameTamperRuleCollectionDocument = `
    mutation renameTamperRuleCollection($id: ID!, $name: String!) {
  renameTamperRuleCollection(id: $id, name: $name) {
    collection {
      ...tamperRuleCollectionFull
    }
  }
}
    ${TamperRuleCollectionFullFragmentDoc}
${TamperRuleFullFragmentDoc}`;
export const CreateTamperRuleCollectionDocument = `
    mutation createTamperRuleCollection($input: CreateTamperRuleCollectionInput!) {
  createTamperRuleCollection(input: $input) {
    collection {
      ...tamperRuleCollectionFull
    }
  }
}
    ${TamperRuleCollectionFullFragmentDoc}
${TamperRuleFullFragmentDoc}`;
export const DeleteTamperRuleCollectionDocument = `
    mutation deleteTamperRuleCollection($id: ID!) {
  deleteTamperRuleCollection(id: $id) {
    deletedId
  }
}
    `;
export const CreateTamperRuleDocument = `
    mutation createTamperRule($input: CreateTamperRuleInput!) {
  createTamperRule(input: $input) {
    error {
      ... on InvalidRegexUserError {
        ...invalidRegexUserErrorFull
      }
      ... on InvalidHTTPQLUserError {
        ...invalidHTTPQLUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
    rule {
      ...tamperRuleFull
    }
  }
}
    ${InvalidRegexUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${InvalidHttpqlUserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}
${TamperRuleFullFragmentDoc}`;
export const DeleteTamperRuleDocument = `
    mutation deleteTamperRule($id: ID!) {
  deleteTamperRule(id: $id) {
    deletedId
  }
}
    `;
export const UpdateTamperRuleDocument = `
    mutation updateTamperRule($id: ID!, $input: UpdateTamperRuleInput!) {
  updateTamperRule(id: $id, input: $input) {
    error {
      ... on UnknownIdUserError {
        ...unknownIdUserErrorFull
      }
      ... on InvalidRegexUserError {
        ...invalidRegexUserErrorFull
      }
      ... on InvalidHTTPQLUserError {
        ...invalidHTTPQLUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
    rule {
      ...tamperRuleFull
    }
  }
}
    ${UnknownIdUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${InvalidRegexUserErrorFullFragmentDoc}
${InvalidHttpqlUserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}
${TamperRuleFullFragmentDoc}`;
export const RenameTamperRuleDocument = `
    mutation renameTamperRule($id: ID!, $name: String!) {
  renameTamperRule(id: $id, name: $name) {
    rule {
      ...tamperRuleFull
    }
  }
}
    ${TamperRuleFullFragmentDoc}`;
export const TestTamperRuleDocument = `
    mutation testTamperRule($input: TestTamperRuleInput!) {
  testTamperRule(input: $input) {
    raw
    error {
      ... on InvalidRegexUserError {
        ...invalidRegexUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${InvalidRegexUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const EnableTamperRuleDocument = `
    mutation enableTamperRule($id: ID!) {
  enableTamperRule(id: $id) {
    rule {
      ...tamperRuleFull
    }
  }
}
    ${TamperRuleFullFragmentDoc}`;
export const DisableTamperRuleDocument = `
    mutation disableTamperRule($id: ID!) {
  disableTamperRule(id: $id) {
    rule {
      ...tamperRuleFull
    }
  }
}
    ${TamperRuleFullFragmentDoc}`;
export const RankTamperRuleDocument = `
    mutation rankTamperRule($id: ID!, $input: RankTamperRuleInput!) {
  rankTamperRule(id: $id, input: $input) {
    rule {
      ...tamperRuleFull
    }
  }
}
    ${TamperRuleFullFragmentDoc}`;
export const MoveTamperRuleDocument = `
    mutation moveTamperRule($id: ID!, $collectionId: ID!) {
  moveTamperRule(id: $id, collectionId: $collectionId) {
    rule {
      ...tamperRuleFull
    }
  }
}
    ${TamperRuleFullFragmentDoc}`;
export const UpdateViewerSettingsDocument = `
    mutation updateViewerSettings($input: UpdateViewerSettingsInput!) {
  updateViewerSettings(input: $input) {
    settings {
      ...userSettingsFull
    }
  }
}
    ${UserSettingsFullFragmentDoc}`;
export const CreateWorkflowDocument = `
    mutation createWorkflow($input: CreateWorkflowInput!) {
  createWorkflow(input: $input) {
    error {
      ... on WorkflowUserError {
        ...workflowUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
    workflow {
      ...workflowFull
    }
  }
}
    ${WorkflowUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}
${WorkflowFullFragmentDoc}`;
export const DeleteWorkflowDocument = `
    mutation deleteWorkflow($id: ID!) {
  deleteWorkflow(id: $id) {
    deletedId
  }
}
    `;
export const ToggleWorkflowDocument = `
    mutation toggleWorkflow($id: ID!, $enabled: Boolean!) {
  toggleWorkflow(id: $id, enabled: $enabled) {
    error {
      ... on UnknownIdUserError {
        ...unknownIdUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
    workflow {
      ...workflowFull
    }
  }
}
    ${UnknownIdUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}
${WorkflowFullFragmentDoc}`;
export const RenameWorkflowDocument = `
    mutation renameWorkflow($id: ID!, $name: String!) {
  renameWorkflow(id: $id, name: $name) {
    error {
      ... on UnknownIdUserError {
        ...unknownIdUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
    workflow {
      ...workflowFull
    }
  }
}
    ${UnknownIdUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}
${WorkflowFullFragmentDoc}`;
export const UpdateWorkflowDocument = `
    mutation updateWorkflow($id: ID!, $input: UpdateWorkflowInput!) {
  updateWorkflow(id: $id, input: $input) {
    error {
      ... on UnknownIdUserError {
        ...unknownIdUserErrorFull
      }
      ... on WorkflowUserError {
        ...workflowUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
    workflow {
      ...workflowFull
    }
  }
}
    ${UnknownIdUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${WorkflowUserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}
${WorkflowFullFragmentDoc}`;
export const RunConvertWorkflowDocument = `
    mutation runConvertWorkflow($id: ID!, $input: Blob!) {
  runConvertWorkflow(id: $id, input: $input) {
    error {
      ... on WorkflowUserError {
        ...workflowUserErrorFull
      }
      ... on PermissionDeniedUserError {
        ...permissionDeniedUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
    output
  }
}
    ${WorkflowUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${PermissionDeniedUserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const GlobalizeWorkflowDocument = `
    mutation globalizeWorkflow($id: ID!) {
  globalizeWorkflow(id: $id) {
    error {
      ... on UnknownIdUserError {
        ...unknownIdUserErrorFull
      }
      ... on WorkflowUserError {
        ...workflowUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
    workflow {
      ...workflowFull
    }
  }
}
    ${UnknownIdUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${WorkflowUserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}
${WorkflowFullFragmentDoc}`;
export const AssistantModelsDocument = `
    query assistantModels {
  assistantModels {
    ...assistantModelFull
  }
}
    ${AssistantModelFullFragmentDoc}`;
export const AssistantSessionsDocument = `
    query assistantSessions {
  assistantSessions {
    ...assistantSessionMeta
  }
}
    ${AssistantSessionMetaFragmentDoc}`;
export const AssistantSessionDocument = `
    query assistantSession($id: ID!) {
  assistantSession(id: $id) {
    ...assistantSessionFull
  }
}
    ${AssistantSessionFullFragmentDoc}
${AssistantSessionMetaFragmentDoc}
${AssistantMessageFullFragmentDoc}`;
export const AssistantUsageDocument = `
    query assistantUsage {
  viewer {
    id
    assistantUsage {
      ...assistantUsageFull
    }
  }
}
    ${AssistantUsageFullFragmentDoc}`;
export const AutomateEntryDocument = `
    query automateEntry($id: ID!) {
  automateEntry(id: $id) {
    ...automateEntryFull
  }
}
    ${AutomateEntryFullFragmentDoc}
${AutomateEntryMetaFragmentDoc}
${AutomateSettingsFullFragmentDoc}
${ConcurrencySettingFullFragmentDoc}
${RetryOnFailureSettingFullFragmentDoc}
${AutomatePayloadFullFragmentDoc}
${SimpleListPayloadOptionsFullFragmentDoc}
${HostedFilePayloadOptionsFullFragmentDoc}
${NullPayloadOptionsFullFragmentDoc}
${AutomatePlaceholderFullFragmentDoc}`;
export const AutomateEntryRequestsDocument = `
    query automateEntryRequests($id: ID!, $after: String, $first: Int, $before: String, $last: Int, $order: AutomateEntryRequestOrderInput) {
  automateEntry(id: $id) {
    ...automateEntryFull
    requests(
      after: $after
      before: $before
      first: $first
      last: $last
      order: $order
    ) {
      snapshot
      edges {
        ...automateEntryRequestEdgeMeta
      }
    }
  }
}
    ${AutomateEntryFullFragmentDoc}
${AutomateEntryMetaFragmentDoc}
${AutomateSettingsFullFragmentDoc}
${ConcurrencySettingFullFragmentDoc}
${RetryOnFailureSettingFullFragmentDoc}
${AutomatePayloadFullFragmentDoc}
${SimpleListPayloadOptionsFullFragmentDoc}
${HostedFilePayloadOptionsFullFragmentDoc}
${NullPayloadOptionsFullFragmentDoc}
${AutomatePlaceholderFullFragmentDoc}
${AutomateEntryRequestEdgeMetaFragmentDoc}
${AutomateEntryRequestMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${AutomateEntryRequestPayloadFullFragmentDoc}`;
export const AutomateEntryRequestsByOffsetDocument = `
    query automateEntryRequestsByOffset($id: ID!, $limit: Int, $offset: Int, $order: AutomateEntryRequestOrderInput) {
  automateEntry(id: $id) {
    ...automateEntryFull
    requestsByOffset(limit: $limit, offset: $offset, order: $order) {
      snapshot
      edges {
        ...automateEntryRequestEdgeMeta
      }
    }
  }
}
    ${AutomateEntryFullFragmentDoc}
${AutomateEntryMetaFragmentDoc}
${AutomateSettingsFullFragmentDoc}
${ConcurrencySettingFullFragmentDoc}
${RetryOnFailureSettingFullFragmentDoc}
${AutomatePayloadFullFragmentDoc}
${SimpleListPayloadOptionsFullFragmentDoc}
${HostedFilePayloadOptionsFullFragmentDoc}
${NullPayloadOptionsFullFragmentDoc}
${AutomatePlaceholderFullFragmentDoc}
${AutomateEntryRequestEdgeMetaFragmentDoc}
${AutomateEntryRequestMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${AutomateEntryRequestPayloadFullFragmentDoc}`;
export const AutomateEntryRequestsCountDocument = `
    query automateEntryRequestsCount($id: ID!) {
  automateEntry(id: $id) {
    ...automateEntryFull
    requests(first: 0) {
      count {
        ...countFull
      }
    }
  }
}
    ${AutomateEntryFullFragmentDoc}
${AutomateEntryMetaFragmentDoc}
${AutomateSettingsFullFragmentDoc}
${ConcurrencySettingFullFragmentDoc}
${RetryOnFailureSettingFullFragmentDoc}
${AutomatePayloadFullFragmentDoc}
${SimpleListPayloadOptionsFullFragmentDoc}
${HostedFilePayloadOptionsFullFragmentDoc}
${NullPayloadOptionsFullFragmentDoc}
${AutomatePlaceholderFullFragmentDoc}
${CountFullFragmentDoc}`;
export const AutomateSessionsDocument = `
    query automateSessions {
  automateSessions {
    edges {
      node {
        ...automateSessionMeta
      }
    }
  }
}
    ${AutomateSessionMetaFragmentDoc}
${AutomateEntryMetaFragmentDoc}`;
export const AutomateSessionDocument = `
    query automateSession($id: ID!) {
  automateSession(id: $id) {
    ...automateSessionFull
  }
}
    ${AutomateSessionFullFragmentDoc}
${AutomateSessionMetaFragmentDoc}
${AutomateEntryMetaFragmentDoc}
${ConnectionInfoFullFragmentDoc}
${AutomateSettingsFullFragmentDoc}
${ConcurrencySettingFullFragmentDoc}
${RetryOnFailureSettingFullFragmentDoc}
${AutomatePayloadFullFragmentDoc}
${SimpleListPayloadOptionsFullFragmentDoc}
${HostedFilePayloadOptionsFullFragmentDoc}
${NullPayloadOptionsFullFragmentDoc}
${AutomatePlaceholderFullFragmentDoc}`;
export const AutomateTasksDocument = `
    query automateTasks($after: String, $before: String, $first: Int, $last: Int) {
  automateTasks(after: $after, before: $before, first: $first, last: $last) {
    edges {
      node {
        ...automateTaskMeta
      }
    }
    pageInfo {
      ...pageInfoFull
    }
  }
}
    ${AutomateTaskMetaFragmentDoc}
${AutomateEntryMetaFragmentDoc}
${PageInfoFullFragmentDoc}`;
export const BackupsDocument = `
    query backups {
  backups {
    ...backupMeta
  }
}
    ${BackupMetaFragmentDoc}`;
export const BackupUriDocument = `
    query backupUri($id: ID!) {
  backup(id: $id) {
    downloadUri
  }
}
    `;
export const BackupTasksDocument = `
    query backupTasks {
  backupTasks {
    ...backupTaskMeta
  }
}
    ${BackupTaskMetaFragmentDoc}
${BackupMetaFragmentDoc}`;
export const RestoreBackupTasksDocument = `
    query restoreBackupTasks {
  restoreBackupTasks {
    ...restoreBackupTaskMeta
  }
}
    ${RestoreBackupTaskMetaFragmentDoc}
${BackupMetaFragmentDoc}
${ProjectFullFragmentDoc}`;
export const BrowserDocument = `
    query browser {
  browser {
    ...browserFull
  }
}
    ${BrowserFullFragmentDoc}`;
export const GlobalConfigDocument = `
    query globalConfig {
  globalConfig {
    address
    onboarding {
      ...onboardingFull
    }
  }
}
    ${OnboardingFullFragmentDoc}`;
export const DataExportsDocument = `
    query dataExports {
  dataExports {
    ...dataExportMeta
  }
}
    ${DataExportMetaFragmentDoc}
${DataExportMetaFieldsFragmentDoc}`;
export const DataExportDocument = `
    query dataExport($id: ID!) {
  dataExport(id: $id) {
    ...dataExportFull
  }
}
    ${DataExportFullFragmentDoc}
${DataExportFullFieldsFragmentDoc}
${DataExportMetaFragmentDoc}
${DataExportMetaFieldsFragmentDoc}`;
export const DataExportTasksDocument = `
    query dataExportTasks {
  dataExportTasks {
    ...dataExportTaskMeta
  }
}
    ${DataExportTaskMetaFragmentDoc}
${DataExportTaskMetaFieldsFragmentDoc}
${DataExportMetaFragmentDoc}
${DataExportMetaFieldsFragmentDoc}`;
export const FilterPresetsDocument = `
    query filterPresets {
  filterPresets {
    ...filterPresetFull
  }
}
    ${FilterPresetFullFragmentDoc}`;
export const FilterPresetDocument = `
    query filterPreset($id: ID!) {
  filterPreset(id: $id) {
    ...filterPresetFull
  }
}
    ${FilterPresetFullFragmentDoc}`;
export const GetFindingsBeforeDocument = `
    query getFindingsBefore($before: String!, $last: Int!, $filter: FilterClauseFindingInput!, $order: FindingOrderInput!) {
  findings(before: $before, last: $last, filter: $filter, order: $order) {
    edges {
      ...findingEdgeMeta
    }
    pageInfo {
      ...pageInfoFull
    }
    snapshot
  }
}
    ${FindingEdgeMetaFragmentDoc}
${FindingMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${PageInfoFullFragmentDoc}`;
export const GetFindingsAfterDocument = `
    query getFindingsAfter($after: String!, $first: Int!, $filter: FilterClauseFindingInput!, $order: FindingOrderInput!) {
  findings(after: $after, first: $first, filter: $filter, order: $order) {
    edges {
      ...findingEdgeMeta
    }
    pageInfo {
      ...pageInfoFull
    }
    snapshot
  }
}
    ${FindingEdgeMetaFragmentDoc}
${FindingMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${PageInfoFullFragmentDoc}`;
export const GetFindingsByOffsetDocument = `
    query getFindingsByOffset($offset: Int!, $limit: Int!, $filter: FilterClauseFindingInput!, $order: FindingOrderInput!) {
  findingsByOffset(offset: $offset, limit: $limit, filter: $filter, order: $order) {
    edges {
      ...findingEdgeMeta
    }
    pageInfo {
      ...pageInfoFull
    }
    snapshot
  }
}
    ${FindingEdgeMetaFragmentDoc}
${FindingMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${PageInfoFullFragmentDoc}`;
export const GetFindingsCountDocument = `
    query getFindingsCount($filter: FilterClauseFindingInput!) {
  findings(first: 0, filter: $filter) {
    count {
      ...countFull
    }
  }
}
    ${CountFullFragmentDoc}`;
export const FindingReportersDocument = `
    query findingReporters {
  findingReporters
}
    `;
export const HostedFilesDocument = `
    query hostedFiles {
  hostedFiles {
    ...hostedFileFull
  }
}
    ${HostedFileFullFragmentDoc}`;
export const InterceptRequestMessagesDocument = `
    query interceptRequestMessages($first: Int!) {
  interceptMessages(first: $first, kind: REQUEST) {
    nodes {
      ...interceptMessageMeta
    }
  }
}
    ${InterceptMessageMetaFragmentDoc}
${InterceptRequestMessageMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${InterceptResponseMessageMetaFragmentDoc}`;
export const InterceptResponseMessagesDocument = `
    query interceptResponseMessages($first: Int!) {
  interceptMessages(first: $first, kind: RESPONSE) {
    nodes {
      ...interceptMessageMeta
    }
  }
}
    ${InterceptMessageMetaFragmentDoc}
${InterceptRequestMessageMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${InterceptResponseMessageMetaFragmentDoc}`;
export const InterceptOptionsDocument = `
    query interceptOptions {
  interceptOptions {
    ...interceptOptionsMeta
  }
}
    ${InterceptOptionsMetaFragmentDoc}
${InterceptRequestOptionsMetaFragmentDoc}
${InterceptResponseOptionsMetaFragmentDoc}
${InterceptScopeOptionsMetaFragmentDoc}`;
export const InterceptStatusDocument = `
    query interceptStatus {
  interceptStatus
}
    `;
export const InterceptEntriesDocument = `
    query interceptEntries($after: String, $first: Int, $before: String, $last: Int, $order: InterceptEntryOrderInput, $filter: FilterClauseInterceptEntryInput, $scopeId: ID) {
  interceptEntries(
    after: $after
    first: $first
    before: $before
    last: $last
    order: $order
    filter: $filter
    scopeId: $scopeId
  ) {
    edges {
      ...interceptEntryEdgeWithMeta
    }
    snapshot
    pageInfo {
      ...pageInfoFull
    }
  }
}
    ${InterceptEntryEdgeWithMetaFragmentDoc}
${InterceptEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${PageInfoFullFragmentDoc}`;
export const InterceptEntriesByOffsetDocument = `
    query interceptEntriesByOffset($limit: Int, $offset: Int, $order: InterceptEntryOrderInput, $filter: FilterClauseInterceptEntryInput, $scopeId: ID) {
  interceptEntriesByOffset(
    limit: $limit
    offset: $offset
    order: $order
    filter: $filter
    scopeId: $scopeId
  ) {
    edges {
      ...interceptEntryEdgeWithMeta
    }
    snapshot
    pageInfo {
      ...pageInfoFull
    }
  }
}
    ${InterceptEntryEdgeWithMetaFragmentDoc}
${InterceptEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${PageInfoFullFragmentDoc}`;
export const InterceptEntryDocument = `
    query interceptEntry($id: ID!) {
  interceptEntry(id: $id) {
    ...interceptEntryFull
  }
}
    ${InterceptEntryFullFragmentDoc}
${InterceptEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${RequestFullFragmentDoc}
${RequestFullFieldsFragmentDoc}`;
export const InterceptEntryCountDocument = `
    query interceptEntryCount($filter: FilterClauseInterceptEntryInput, $scopeId: ID) {
  interceptEntries(first: 0, filter: $filter, scopeId: $scopeId) {
    count {
      ...countFull
    }
  }
}
    ${CountFullFragmentDoc}`;
export const UpstreamProxiesDocument = `
    query upstreamProxies {
  upstreamProxies {
    ...upstreamProxyFull
  }
}
    ${UpstreamProxyFullFragmentDoc}
${UpstreamProxyAuthBasicFullFragmentDoc}`;
export const CurrentProjectDocument = `
    query currentProject {
  currentProject {
    ...projectFull
  }
}
    ${ProjectFullFragmentDoc}`;
export const ProjectsDocument = `
    query projects {
  projects {
    ...projectFull
  }
}
    ${ProjectFullFragmentDoc}`;
export const ReplayEntryDocument = `
    query replayEntry($id: ID!) {
  replayEntry(id: $id) {
    ...replayEntryMeta
  }
}
    ${ReplayEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}`;
export const ActiveReplayEntryBySessionDocument = `
    query activeReplayEntryBySession($sessionId: ID!) {
  replaySession(id: $sessionId) {
    ...replaySessionMeta
    activeEntry {
      ...replayEntryMeta
    }
  }
}
    ${ReplaySessionMetaFragmentDoc}
${ReplayEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${PageInfoFullFragmentDoc}
${CountFullFragmentDoc}`;
export const ReplayEntriesBySessionDocument = `
    query replayEntriesBySession($sessionId: ID!) {
  replaySession(id: $sessionId) {
    ...replaySessionMeta
    entries {
      edges {
        cursor
        node {
          ...replayEntryMeta
        }
      }
      pageInfo {
        ...pageInfoFull
      }
      count {
        ...countFull
      }
    }
  }
}
    ${ReplaySessionMetaFragmentDoc}
${ReplayEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${PageInfoFullFragmentDoc}
${CountFullFragmentDoc}`;
export const ReplaySessionEntriesDocument = `
    query replaySessionEntries($id: ID!) {
  replaySession(id: $id) {
    activeEntry {
      ...replayEntryMeta
    }
    entries {
      edges {
        cursor
        node {
          ...replayEntryMeta
        }
      }
      pageInfo {
        ...pageInfoFull
      }
      count {
        ...countFull
      }
    }
  }
}
    ${ReplayEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${PageInfoFullFragmentDoc}
${CountFullFragmentDoc}`;
export const ReplaySessionCollectionsDocument = `
    query replaySessionCollections {
  replaySessionCollections {
    edges {
      node {
        ...replaySessionCollectionMeta
      }
    }
  }
}
    ${ReplaySessionCollectionMetaFragmentDoc}
${ReplaySessionMetaFragmentDoc}
${ReplayEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${PageInfoFullFragmentDoc}
${CountFullFragmentDoc}`;
export const RequestsDocument = `
    query requests($after: String, $before: String, $first: Int, $last: Int, $order: RequestResponseOrderInput, $scopeId: ID, $filter: FilterClauseRequestResponseInput) {
  requests(
    after: $after
    before: $before
    first: $first
    last: $last
    order: $order
    scopeId: $scopeId
    filter: $filter
  ) {
    edges {
      ...requestEdgeMeta
    }
    pageInfo {
      ...pageInfoFull
    }
    snapshot
  }
}
    ${RequestEdgeMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${PageInfoFullFragmentDoc}`;
export const RequestCountDocument = `
    query requestCount($scopeId: ID, $filter: FilterClauseRequestResponseInput) {
  requests(first: 0, scopeId: $scopeId, filter: $filter) {
    count {
      ...countFull
    }
    snapshot
  }
}
    ${CountFullFragmentDoc}`;
export const RequestDocument = `
    query request($id: ID!) {
  request(id: $id) {
    ...requestFull
  }
}
    ${RequestFullFragmentDoc}
${RequestFullFieldsFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}`;
export const RequestsByOffsetDocument = `
    query requestsByOffset($limit: Int, $offset: Int, $order: RequestResponseOrderInput, $scopeId: ID, $filter: FilterClauseRequestResponseInput) {
  requestsByOffset(
    limit: $limit
    offset: $offset
    order: $order
    scopeId: $scopeId
    filter: $filter
  ) {
    edges {
      ...requestEdgeMeta
    }
    snapshot
    pageInfo {
      ...pageInfoFull
    }
  }
}
    ${RequestEdgeMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${PageInfoFullFragmentDoc}`;
export const ResponseDocument = `
    query response($id: ID!) {
  response(id: $id) {
    ...responseFull
  }
}
    ${ResponseFullFragmentDoc}
${ResponseMetaFragmentDoc}`;
export const GetRuntimeDocument = `
    query getRuntime {
  runtime {
    ...runtimeFull
  }
}
    ${RuntimeFullFragmentDoc}
${ReleaseFullFragmentDoc}`;
export const ScopesDocument = `
    query scopes {
  scopes {
    ...scopeFull
  }
}
    ${ScopeFullFragmentDoc}`;
export const SitemapRootEntriesDocument = `
    query sitemapRootEntries($scopeId: ID) {
  sitemapRootEntries(scopeId: $scopeId) {
    edges {
      ...sitemapEntryEdgeMeta
    }
  }
}
    ${SitemapEntryEdgeMetaFragmentDoc}
${SitemapEntryMetaFragmentDoc}`;
export const SitemapEntryChildrenDocument = `
    query sitemapEntryChildren($id: ID!) {
  sitemapDescendantEntries(parentId: $id, depth: DIRECT) {
    edges {
      cursor
      node {
        ...sitemapEntryMeta
      }
    }
  }
}
    ${SitemapEntryMetaFragmentDoc}`;
export const SitemapEntryRequestsDocument = `
    query sitemapEntryRequests($id: ID!, $after: String, $before: String, $first: Int, $last: Int) {
  sitemapEntry(id: $id) {
    ...sitemapEntryMeta
    requests(after: $after, before: $before, first: $first, last: $last) {
      edges {
        cursor
        node {
          ...requestMeta
        }
      }
    }
  }
}
    ${SitemapEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}`;
export const WebsocketStreamsBeforeDocument = `
    query websocketStreamsBefore($before: String, $last: Int!, $scopeId: ID, $order: StreamOrderInput!) {
  streams(
    before: $before
    last: $last
    scopeId: $scopeId
    order: $order
    protocol: WS
  ) {
    edges {
      ...streamEdgeMeta
    }
    pageInfo {
      ...pageInfoFull
    }
    snapshot
  }
}
    ${StreamEdgeMetaFragmentDoc}
${StreamMetaFragmentDoc}
${PageInfoFullFragmentDoc}`;
export const WebsocketStreamsAfterDocument = `
    query websocketStreamsAfter($after: String, $first: Int!, $scopeId: ID, $order: StreamOrderInput!) {
  streams(
    after: $after
    first: $first
    scopeId: $scopeId
    order: $order
    protocol: WS
  ) {
    edges {
      ...streamEdgeMeta
    }
    pageInfo {
      ...pageInfoFull
    }
    snapshot
  }
}
    ${StreamEdgeMetaFragmentDoc}
${StreamMetaFragmentDoc}
${PageInfoFullFragmentDoc}`;
export const WebsocketStreamsByOffsetDocument = `
    query websocketStreamsByOffset($offset: Int!, $limit: Int!, $scopeId: ID, $order: StreamOrderInput!) {
  streamsByOffset(
    offset: $offset
    limit: $limit
    scopeId: $scopeId
    order: $order
    protocol: WS
  ) {
    edges {
      ...streamEdgeMeta
    }
    pageInfo {
      ...pageInfoFull
    }
    snapshot
  }
}
    ${StreamEdgeMetaFragmentDoc}
${StreamMetaFragmentDoc}
${PageInfoFullFragmentDoc}`;
export const WebsocketStreamCountDocument = `
    query websocketStreamCount($scopeId: ID) {
  streams(first: 0, scopeId: $scopeId, protocol: WS) {
    count {
      ...countFull
    }
  }
}
    ${CountFullFragmentDoc}`;
export const WebsocketMessagesAfterDocument = `
    query websocketMessagesAfter($after: String, $first: Int!, $order: StreamWsMessageOrderInput!, $streamId: ID!) {
  streamWsMessages(
    after: $after
    first: $first
    order: $order
    streamId: $streamId
  ) {
    edges {
      ...streamWsMessageEdgeMeta
    }
    pageInfo {
      ...pageInfoFull
    }
    snapshot
  }
}
    ${StreamWsMessageEdgeMetaFragmentDoc}
${StreamWsMessageMetaFragmentDoc}
${PageInfoFullFragmentDoc}`;
export const WebsocketMessagesBeforeDocument = `
    query websocketMessagesBefore($before: String, $last: Int!, $order: StreamWsMessageOrderInput!, $streamId: ID!) {
  streamWsMessages(
    before: $before
    last: $last
    order: $order
    streamId: $streamId
  ) {
    edges {
      ...streamWsMessageEdgeMeta
    }
    pageInfo {
      ...pageInfoFull
    }
    snapshot
  }
}
    ${StreamWsMessageEdgeMetaFragmentDoc}
${StreamWsMessageMetaFragmentDoc}
${PageInfoFullFragmentDoc}`;
export const WebsocketMessagesByOffsetDocument = `
    query websocketMessagesByOffset($offset: Int!, $limit: Int!, $order: StreamWsMessageOrderInput!, $streamId: ID!) {
  streamWsMessagesByOffset(
    offset: $offset
    limit: $limit
    order: $order
    streamId: $streamId
  ) {
    edges {
      ...streamWsMessageEdgeMeta
    }
    pageInfo {
      ...pageInfoFull
    }
    snapshot
  }
}
    ${StreamWsMessageEdgeMetaFragmentDoc}
${StreamWsMessageMetaFragmentDoc}
${PageInfoFullFragmentDoc}`;
export const WebsocketMessageCountDocument = `
    query websocketMessageCount($streamId: ID!) {
  streamWsMessages(first: 0, streamId: $streamId) {
    count {
      ...countFull
    }
  }
}
    ${CountFullFragmentDoc}`;
export const WebsocketMessageDocument = `
    query websocketMessage($id: ID!) {
  streamWsMessage(id: $id) {
    ...streamWsMessageFull
  }
}
    ${StreamWsMessageFullFragmentDoc}
${StreamWsMessageMetaFragmentDoc}`;
export const TamperRuleCollectionsDocument = `
    query tamperRuleCollections {
  tamperRuleCollections {
    nodes {
      ...tamperRuleCollectionFull
    }
    pageInfo {
      ...pageInfoFull
    }
    snapshot
  }
}
    ${TamperRuleCollectionFullFragmentDoc}
${TamperRuleFullFragmentDoc}
${PageInfoFullFragmentDoc}`;
export const UserProfileDocument = `
    query userProfile {
  viewer {
    id
    profile {
      ...userProfileFull
    }
  }
}
    ${UserProfileFullFragmentDoc}`;
export const UserSettingsDocument = `
    query userSettings {
  viewer {
    id
    settings {
      ...userSettingsFull
    }
  }
}
    ${UserSettingsFullFragmentDoc}`;
export const WorkflowDocument = `
    query workflow($id: ID!) {
  workflow(id: $id) {
    ...workflowFull
  }
}
    ${WorkflowFullFragmentDoc}`;
export const WorkflowsDocument = `
    query workflows {
  workflows {
    ...workflowFull
  }
}
    ${WorkflowFullFragmentDoc}`;
export const WorkflowNodeDefinitionsDocument = `
    query workflowNodeDefinitions {
  workflowNodeDefinitions {
    ...workflowNodeDefinitionFull
  }
}
    ${WorkflowNodeDefinitionFullFragmentDoc}`;
export const CreatedAssistantMessageDocument = `
    subscription createdAssistantMessage {
  createdAssistantMessage {
    messageEdge {
      cursor
      node {
        ...assistantMessageFull
      }
    }
    snapshot
  }
}
    ${AssistantMessageFullFragmentDoc}`;
export const CreatedAssistantMessageTaskDocument = `
    subscription createdAssistantMessageTask {
  createdAssistantMessageTask {
    task {
      ...assistantMessageTaskFull
    }
  }
}
    ${AssistantMessageTaskFullFragmentDoc}
${AssistantMessageFullFragmentDoc}
${AssistantSessionMetaFragmentDoc}
${AssistantUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${AuthenticationUserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const UpdatedAssistantMessageTaskDocument = `
    subscription updatedAssistantMessageTask {
  updatedAssistantMessageTask {
    task {
      ...assistantMessageTaskFull
    }
  }
}
    ${AssistantMessageTaskFullFragmentDoc}
${AssistantMessageFullFragmentDoc}
${AssistantSessionMetaFragmentDoc}
${AssistantUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${AuthenticationUserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const UpdatedViewerAssistantUsageDocument = `
    subscription updatedViewerAssistantUsage {
  updatedViewerAssistantUsage {
    usage {
      ...assistantUsageFull
    }
  }
}
    ${AssistantUsageFullFragmentDoc}`;
export const CreatedAuthenticationTokenDocument = `
    subscription createdAuthenticationToken($requestId: ID!) {
  createdAuthenticationToken(requestId: $requestId) {
    token {
      ...authenticationTokenFull
    }
    error {
      ... on AuthenticationUserError {
        ...authenticationUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${AuthenticationTokenFullFragmentDoc}
${AuthenticationUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const CreatedAutomateEntryRequestDocument = `
    subscription createdAutomateEntryRequest($order: AutomateEntryRequestOrderInput) {
  createdAutomateEntryRequest {
    automateEntryRequestEdge(order: $order) {
      ...automateEntryRequestEdgeMeta
    }
    snapshot
  }
}
    ${AutomateEntryRequestEdgeMetaFragmentDoc}
${AutomateEntryRequestMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${AutomateEntryRequestPayloadFullFragmentDoc}`;
export const CreatedAutomateTaskDocument = `
    subscription createdAutomateTask {
  createdAutomateTask {
    automateTaskEdge {
      ...automateTaskEdgeMeta
    }
    snapshot
  }
}
    ${AutomateTaskEdgeMetaFragmentDoc}
${AutomateTaskMetaFragmentDoc}
${AutomateEntryMetaFragmentDoc}`;
export const DeletedAutomateTaskDocument = `
    subscription deletedAutomateTask {
  deletedAutomateTask {
    deletedAutomateTaskId
    snapshot
  }
}
    `;
export const UpdatedAutomateTaskDocument = `
    subscription updatedAutomateTask {
  updatedAutomateTask {
    automateTaskEdge {
      ...automateTaskEdgeMeta
    }
    snapshot
  }
}
    ${AutomateTaskEdgeMetaFragmentDoc}
${AutomateTaskMetaFragmentDoc}
${AutomateEntryMetaFragmentDoc}`;
export const CreatedBackupDocument = `
    subscription createdBackup {
  createdBackup {
    backup {
      ...backupMeta
    }
  }
}
    ${BackupMetaFragmentDoc}`;
export const UpdatedBackupDocument = `
    subscription updatedBackup {
  updatedBackup {
    backup {
      ...backupMeta
    }
  }
}
    ${BackupMetaFragmentDoc}`;
export const DeletedBackupDocument = `
    subscription deletedBackup {
  deletedBackup {
    deletedBackupId
  }
}
    `;
export const StartedBackupTaskDocument = `
    subscription startedBackupTask {
  startedBackupTask {
    task {
      ...backupTaskMeta
    }
  }
}
    ${BackupTaskMetaFragmentDoc}
${BackupMetaFragmentDoc}`;
export const FinishedBackupTaskDocument = `
    subscription finishedBackupTask {
  finishedBackupTask {
    ... on FinishedBackupTaskSuccess {
      ...finishedBackupTaskSuccessFull
    }
    ... on FinishedBackupTaskCancelled {
      ...finishedBackupTaskCancelledFull
    }
    ... on FinishedBackupTaskError {
      ...finishedBackupTaskErrorFull
    }
  }
}
    ${FinishedBackupTaskSuccessFullFragmentDoc}
${BackupTaskMetaFragmentDoc}
${BackupMetaFragmentDoc}
${FinishedBackupTaskCancelledFullFragmentDoc}
${FinishedBackupTaskErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${InternalUserErrorFullFragmentDoc}
${BackupUserErrorFullFragmentDoc}`;
export const StartedRestoreBackupTaskDocument = `
    subscription startedRestoreBackupTask {
  startedRestoreBackupTask {
    task {
      ...restoreBackupTaskMeta
    }
  }
}
    ${RestoreBackupTaskMetaFragmentDoc}
${BackupMetaFragmentDoc}
${ProjectFullFragmentDoc}`;
export const FinishedRetoreBackupTaskDocument = `
    subscription finishedRetoreBackupTask {
  finishedRestoreBackupTask {
    ... on FinishedRestoreBackupTaskSuccess {
      ...finishedRestoreBackupTaskSuccessFull
    }
    ... on FinishedRestoreBackupTaskCancelled {
      ...finishedRestoreBackupTaskCancelledFull
    }
    ... on FinishedRestoreBackupTaskError {
      ...finishedRestoreBackupTaskErrorFull
    }
  }
}
    ${FinishedRestoreBackupTaskSuccessFullFragmentDoc}
${RestoreBackupTaskMetaFragmentDoc}
${BackupMetaFragmentDoc}
${ProjectFullFragmentDoc}
${FinishedRestoreBackupTaskCancelledFullFragmentDoc}
${FinishedRestoreBackupTaskErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${InternalUserErrorFullFragmentDoc}
${BackupUserErrorFullFragmentDoc}`;
export const DeletedBrowserDocument = `
    subscription deletedBrowser {
  deletedBrowser {
    deletedBrowserId
  }
}
    `;
export const InstalledBrowserDocument = `
    subscription installedBrowser {
  installedBrowser {
    browser {
      ...browserFull
    }
  }
}
    ${BrowserFullFragmentDoc}`;
export const UpdatedBrowserDocument = `
    subscription updatedBrowser {
  updatedBrowser {
    browser {
      ...browserFull
    }
  }
}
    ${BrowserFullFragmentDoc}`;
export const CreatedDataExportDocument = `
    subscription createdDataExport {
  createdDataExport {
    dataExportEdge {
      cursor
      node {
        ...dataExportMeta
      }
    }
    snapshot
  }
}
    ${DataExportMetaFragmentDoc}
${DataExportMetaFieldsFragmentDoc}`;
export const UpdatedDataExportDocument = `
    subscription updatedDataExport {
  updatedDataExport {
    dataExportEdge {
      cursor
      node {
        ...dataExportMeta
      }
    }
    snapshot
  }
}
    ${DataExportMetaFragmentDoc}
${DataExportMetaFieldsFragmentDoc}`;
export const DeletedDataExportDocument = `
    subscription deletedDataExport {
  deletedDataExport {
    deletedDataExportId
    snapshot
  }
}
    `;
export const CreatedDataExportTaskDocument = `
    subscription createdDataExportTask {
  createdDataExportTask {
    exportTaskEdge {
      cursor
      node {
        ...dataExportTaskMeta
      }
    }
  }
}
    ${DataExportTaskMetaFragmentDoc}
${DataExportTaskMetaFieldsFragmentDoc}
${DataExportMetaFragmentDoc}
${DataExportMetaFieldsFragmentDoc}`;
export const DeletedDataExportTaskDocument = `
    subscription deletedDataExportTask {
  deletedDataExportTask {
    deletedExportTaskId
  }
}
    `;
export const CreatedFilterPresetDocument = `
    subscription createdFilterPreset {
  createdFilterPreset {
    filterEdge {
      ...filterPresetEdgeFull
    }
  }
}
    ${FilterPresetEdgeFullFragmentDoc}
${FilterPresetFullFragmentDoc}`;
export const UpdatedFilterPresetDocument = `
    subscription updatedFilterPreset {
  updatedFilterPreset {
    filterEdge {
      ...filterPresetEdgeFull
    }
  }
}
    ${FilterPresetEdgeFullFragmentDoc}
${FilterPresetFullFragmentDoc}`;
export const DeletedFilterPresetDocument = `
    subscription deletedFilterPreset {
  deletedFilterPreset {
    deletedFilterId
  }
}
    `;
export const CreatedFindingDocument = `
    subscription createdFinding($order: FindingOrderInput) {
  createdFinding {
    findingEdge(order: $order) {
      ...findingEdgeMeta
    }
    snapshot
  }
}
    ${FindingEdgeMetaFragmentDoc}
${FindingMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}`;
export const DeletedFindingsDocument = `
    subscription deletedFindings {
  deletedFindings {
    deletedFindingIds
    snapshot
  }
}
    `;
export const CreatedInterceptMessageDocument = `
    subscription createdInterceptMessage {
  createdInterceptMessage {
    messageEdge {
      node {
        ...interceptMessageMeta
      }
    }
    snapshot
  }
}
    ${InterceptMessageMetaFragmentDoc}
${InterceptRequestMessageMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${InterceptResponseMessageMetaFragmentDoc}`;
export const UpdatedInterceptOptionsDocument = `
    subscription updatedInterceptOptions {
  updatedInterceptOptions {
    options {
      ...interceptOptionsMeta
    }
  }
}
    ${InterceptOptionsMetaFragmentDoc}
${InterceptRequestOptionsMetaFragmentDoc}
${InterceptResponseOptionsMetaFragmentDoc}
${InterceptScopeOptionsMetaFragmentDoc}`;
export const CreatedInterceptEntryDocument = `
    subscription createdInterceptEntry($order: InterceptEntryOrderInput, $filter: FilterClauseInterceptEntryInput, $scopeId: ID) {
  createdInterceptEntry(filter: $filter, scopeId: $scopeId) {
    interceptEntryEdge(order: $order) {
      ...interceptEntryEdgeWithMeta
    }
    snapshot
  }
}
    ${InterceptEntryEdgeWithMetaFragmentDoc}
${InterceptEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}`;
export const UpdatedInterceptEntryDocument = `
    subscription updatedInterceptEntry($order: InterceptEntryOrderInput, $filter: FilterClauseInterceptEntryInput, $scopeId: ID) {
  updatedInterceptEntry(filter: $filter, scopeId: $scopeId) {
    interceptEntryEdge(order: $order) {
      ...interceptEntryEdgeWithMeta
    }
    snapshot
  }
}
    ${InterceptEntryEdgeWithMetaFragmentDoc}
${InterceptEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}`;
export const DeletedInterceptEntryDocument = `
    subscription deletedInterceptEntry {
  deletedInterceptEntry {
    deletedEntryId
    snapshot
  }
}
    `;
export const StartedDeleteInterceptEntriesTaskDocument = `
    subscription startedDeleteInterceptEntriesTask {
  startedDeleteInterceptEntriesTask {
    task {
      ...deleteInterceptEntriesTaskFull
    }
  }
}
    ${DeleteInterceptEntriesTaskFullFragmentDoc}`;
export const UpdatedDeleteInterceptEntriesTaskDocument = `
    subscription updatedDeleteInterceptEntriesTask {
  updatedDeleteInterceptEntriesTask {
    snapshot
    task {
      ...deleteInterceptEntriesTaskFull
    }
  }
}
    ${DeleteInterceptEntriesTaskFullFragmentDoc}`;
export const FinishedDeleteInterceptEntriesTaskDocument = `
    subscription finishedDeleteInterceptEntriesTask {
  finishedDeleteInterceptEntriesTask {
    task {
      ...deleteInterceptEntriesTaskFull
    }
    error {
      ... on InternalUserError {
        ...internalUserErrorFull
      }
      ... on OtherUserError {
        ...otherUserErrorFull
      }
    }
  }
}
    ${DeleteInterceptEntriesTaskFullFragmentDoc}
${InternalUserErrorFullFragmentDoc}
${UserErrorFullFragmentDoc}
${OtherUserErrorFullFragmentDoc}`;
export const CreatedProjectDocument = `
    subscription createdProject {
  createdProject {
    project {
      ...projectFull
    }
  }
}
    ${ProjectFullFragmentDoc}`;
export const UpdatedProjectDocument = `
    subscription updatedProject {
  updatedProject {
    project {
      ...projectFull
    }
  }
}
    ${ProjectFullFragmentDoc}`;
export const DeletedProjectDocument = `
    subscription deletedProject {
  deletedProject {
    deletedProjectId
  }
}
    `;
export const UpdatedReplaySessionDocument = `
    subscription updatedReplaySession {
  updatedReplaySession {
    sessionEdge {
      node {
        ...replaySessionMeta
      }
    }
    snapshot
  }
}
    ${ReplaySessionMetaFragmentDoc}
${ReplayEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${PageInfoFullFragmentDoc}
${CountFullFragmentDoc}`;
export const UpdatedReplayTaskDocument = `
    subscription updatedReplayTask {
  updatedReplayTask {
    replayTaskEdge {
      ...replayTaskEdgeMeta
    }
    snapshot
  }
}
    ${ReplayTaskEdgeMetaFragmentDoc}
${ReplayTaskMetaFragmentDoc}
${ReplayEntryMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}`;
export const CreatedRequestDocument = `
    subscription createdRequest($order: RequestResponseOrderInput, $scopeId: ID, $filter: FilterClauseRequestResponseInput) {
  createdRequest(scopeId: $scopeId, filter: $filter) {
    requestEdge(order: $order) {
      ...requestEdgeMeta
    }
    snapshot
  }
}
    ${RequestEdgeMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}`;
export const UpdatedRequestDocument = `
    subscription updatedRequest($order: RequestResponseOrderInput, $scopeId: ID, $filter: FilterClauseRequestResponseInput) {
  updatedRequest(scopeId: $scopeId, filter: $filter) {
    requestEdge(order: $order) {
      ...requestEdgeMeta
    }
    snapshot
  }
}
    ${RequestEdgeMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}`;
export const UpdatedRequestMetadataDocument = `
    subscription updatedRequestMetadata {
  updatedRequestMetadata {
    metadata {
      ...requestMetadataFull
    }
    requestId
    snapshot
  }
}
    ${RequestMetadataFullFragmentDoc}`;
export const CreatedScopeDocument = `
    subscription createdScope {
  createdScope {
    scopeEdge {
      node {
        ...scopeFull
      }
    }
    snapshot
  }
}
    ${ScopeFullFragmentDoc}`;
export const UpdatedScopeDocument = `
    subscription updatedScope {
  updatedScope {
    scopeEdge {
      node {
        ...scopeFull
      }
    }
    snapshot
  }
}
    ${ScopeFullFragmentDoc}`;
export const CreatedSitemapEntryDocument = `
    subscription createdSitemapEntry($scopeId: ID) {
  createdSitemapEntry(scopeId: $scopeId) {
    requestEdge {
      ...requestEdgeMeta
    }
    sitemapEntryEdge {
      ...sitemapEntryEdgeMeta
    }
    ancestorIds
    snapshot
  }
}
    ${RequestEdgeMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${SitemapEntryEdgeMetaFragmentDoc}
${SitemapEntryMetaFragmentDoc}`;
export const UpdatedSitemapEntryDocument = `
    subscription updatedSitemapEntry($scopeId: ID) {
  updatedSitemapEntry(scopeId: $scopeId) {
    oldRequest {
      id
    }
    requestEdge {
      ...requestEdgeMeta
    }
    sitemapEntryEdge {
      ...sitemapEntryEdgeMeta
    }
    ancestorIds
    snapshot
  }
}
    ${RequestEdgeMetaFragmentDoc}
${RequestMetaFragmentDoc}
${RequestMetadataFullFragmentDoc}
${ResponseMetaFragmentDoc}
${SitemapEntryEdgeMetaFragmentDoc}
${SitemapEntryMetaFragmentDoc}`;
export const CreatedWsStreamDocument = `
    subscription createdWsStream($scopeId: ID, $order: StreamOrderInput!) {
  createdStream(protocol: WS, scopeId: $scopeId) {
    snapshot
    streamEdge(order: $order) {
      ...streamEdgeMeta
    }
  }
}
    ${StreamEdgeMetaFragmentDoc}
${StreamMetaFragmentDoc}`;
export const CreatedStreamWsMessageDocument = `
    subscription createdStreamWsMessage($order: StreamWsMessageOrderInput!) {
  createdStreamWsMessage {
    snapshot
    messageEdge(order: $order) {
      ...streamWsMessageEdgeMeta
    }
  }
}
    ${StreamWsMessageEdgeMetaFragmentDoc}
${StreamWsMessageMetaFragmentDoc}`;
export const CreatedWorkflowDocument = `
    subscription createdWorkflow {
  createdWorkflow {
    workflowEdge {
      cursor
      node {
        ...workflowFull
      }
    }
  }
}
    ${WorkflowFullFragmentDoc}`;
export const DeletedWorkflowDocument = `
    subscription deletedWorkflow {
  deletedWorkflow {
    deletedWorkflowId
  }
}
    `;
export const UpdatedWorkflowDocument = `
    subscription updatedWorkflow {
  updatedWorkflow {
    workflowEdge {
      cursor
      node {
        ...workflowFull
      }
    }
  }
}
    ${WorkflowFullFragmentDoc}`;
export type Requester<C = {}> = <R, V>(
  doc: string,
  vars?: V,
  options?: C,
) => Promise<R> | AsyncIterable<R>;
export function getSdk<C>(requester: Requester<C>) {
  return {
    sendAssistantMessage(
      variables: SendAssistantMessageMutationVariables,
      options?: C,
    ): Promise<SendAssistantMessageMutation> {
      return requester<
        SendAssistantMessageMutation,
        SendAssistantMessageMutationVariables
      >(
        SendAssistantMessageDocument,
        variables,
        options,
      ) as Promise<SendAssistantMessageMutation>;
    },
    createAssistantSession(
      variables: CreateAssistantSessionMutationVariables,
      options?: C,
    ): Promise<CreateAssistantSessionMutation> {
      return requester<
        CreateAssistantSessionMutation,
        CreateAssistantSessionMutationVariables
      >(
        CreateAssistantSessionDocument,
        variables,
        options,
      ) as Promise<CreateAssistantSessionMutation>;
    },
    deleteAssistantSession(
      variables: DeleteAssistantSessionMutationVariables,
      options?: C,
    ): Promise<DeleteAssistantSessionMutation> {
      return requester<
        DeleteAssistantSessionMutation,
        DeleteAssistantSessionMutationVariables
      >(
        DeleteAssistantSessionDocument,
        variables,
        options,
      ) as Promise<DeleteAssistantSessionMutation>;
    },
    renameAssistantSession(
      variables: RenameAssistantSessionMutationVariables,
      options?: C,
    ): Promise<RenameAssistantSessionMutation> {
      return requester<
        RenameAssistantSessionMutation,
        RenameAssistantSessionMutationVariables
      >(
        RenameAssistantSessionDocument,
        variables,
        options,
      ) as Promise<RenameAssistantSessionMutation>;
    },
    startAuthenticationFlow(
      variables?: StartAuthenticationFlowMutationVariables,
      options?: C,
    ): Promise<StartAuthenticationFlowMutation> {
      return requester<
        StartAuthenticationFlowMutation,
        StartAuthenticationFlowMutationVariables
      >(
        StartAuthenticationFlowDocument,
        variables,
        options,
      ) as Promise<StartAuthenticationFlowMutation>;
    },
    refreshAuthenticationToken(
      variables: RefreshAuthenticationTokenMutationVariables,
      options?: C,
    ): Promise<RefreshAuthenticationTokenMutation> {
      return requester<
        RefreshAuthenticationTokenMutation,
        RefreshAuthenticationTokenMutationVariables
      >(
        RefreshAuthenticationTokenDocument,
        variables,
        options,
      ) as Promise<RefreshAuthenticationTokenMutation>;
    },
    logout(
      variables?: LogoutMutationVariables,
      options?: C,
    ): Promise<LogoutMutation> {
      return requester<LogoutMutation, LogoutMutationVariables>(
        LogoutDocument,
        variables,
        options,
      ) as Promise<LogoutMutation>;
    },
    deleteAutomateEntries(
      variables: DeleteAutomateEntriesMutationVariables,
      options?: C,
    ): Promise<DeleteAutomateEntriesMutation> {
      return requester<
        DeleteAutomateEntriesMutation,
        DeleteAutomateEntriesMutationVariables
      >(
        DeleteAutomateEntriesDocument,
        variables,
        options,
      ) as Promise<DeleteAutomateEntriesMutation>;
    },
    renameAutomateEntry(
      variables: RenameAutomateEntryMutationVariables,
      options?: C,
    ): Promise<RenameAutomateEntryMutation> {
      return requester<
        RenameAutomateEntryMutation,
        RenameAutomateEntryMutationVariables
      >(
        RenameAutomateEntryDocument,
        variables,
        options,
      ) as Promise<RenameAutomateEntryMutation>;
    },
    createAutomateSession(
      variables: CreateAutomateSessionMutationVariables,
      options?: C,
    ): Promise<CreateAutomateSessionMutation> {
      return requester<
        CreateAutomateSessionMutation,
        CreateAutomateSessionMutationVariables
      >(
        CreateAutomateSessionDocument,
        variables,
        options,
      ) as Promise<CreateAutomateSessionMutation>;
    },
    deleteAutomateSession(
      variables: DeleteAutomateSessionMutationVariables,
      options?: C,
    ): Promise<DeleteAutomateSessionMutation> {
      return requester<
        DeleteAutomateSessionMutation,
        DeleteAutomateSessionMutationVariables
      >(
        DeleteAutomateSessionDocument,
        variables,
        options,
      ) as Promise<DeleteAutomateSessionMutation>;
    },
    renameAutomateSession(
      variables: RenameAutomateSessionMutationVariables,
      options?: C,
    ): Promise<RenameAutomateSessionMutation> {
      return requester<
        RenameAutomateSessionMutation,
        RenameAutomateSessionMutationVariables
      >(
        RenameAutomateSessionDocument,
        variables,
        options,
      ) as Promise<RenameAutomateSessionMutation>;
    },
    updateAutomateSession(
      variables: UpdateAutomateSessionMutationVariables,
      options?: C,
    ): Promise<UpdateAutomateSessionMutation> {
      return requester<
        UpdateAutomateSessionMutation,
        UpdateAutomateSessionMutationVariables
      >(
        UpdateAutomateSessionDocument,
        variables,
        options,
      ) as Promise<UpdateAutomateSessionMutation>;
    },
    cancelAutomateTask(
      variables: CancelAutomateTaskMutationVariables,
      options?: C,
    ): Promise<CancelAutomateTaskMutation> {
      return requester<
        CancelAutomateTaskMutation,
        CancelAutomateTaskMutationVariables
      >(
        CancelAutomateTaskDocument,
        variables,
        options,
      ) as Promise<CancelAutomateTaskMutation>;
    },
    pauseAutomateTask(
      variables: PauseAutomateTaskMutationVariables,
      options?: C,
    ): Promise<PauseAutomateTaskMutation> {
      return requester<
        PauseAutomateTaskMutation,
        PauseAutomateTaskMutationVariables
      >(
        PauseAutomateTaskDocument,
        variables,
        options,
      ) as Promise<PauseAutomateTaskMutation>;
    },
    resumeAutomateTask(
      variables: ResumeAutomateTaskMutationVariables,
      options?: C,
    ): Promise<ResumeAutomateTaskMutation> {
      return requester<
        ResumeAutomateTaskMutation,
        ResumeAutomateTaskMutationVariables
      >(
        ResumeAutomateTaskDocument,
        variables,
        options,
      ) as Promise<ResumeAutomateTaskMutation>;
    },
    startAutomateTask(
      variables: StartAutomateTaskMutationVariables,
      options?: C,
    ): Promise<StartAutomateTaskMutation> {
      return requester<
        StartAutomateTaskMutation,
        StartAutomateTaskMutationVariables
      >(
        StartAutomateTaskDocument,
        variables,
        options,
      ) as Promise<StartAutomateTaskMutation>;
    },
    createBackup(
      variables: CreateBackupMutationVariables,
      options?: C,
    ): Promise<CreateBackupMutation> {
      return requester<CreateBackupMutation, CreateBackupMutationVariables>(
        CreateBackupDocument,
        variables,
        options,
      ) as Promise<CreateBackupMutation>;
    },
    deleteBackup(
      variables: DeleteBackupMutationVariables,
      options?: C,
    ): Promise<DeleteBackupMutation> {
      return requester<DeleteBackupMutation, DeleteBackupMutationVariables>(
        DeleteBackupDocument,
        variables,
        options,
      ) as Promise<DeleteBackupMutation>;
    },
    renameBackup(
      variables: RenameBackupMutationVariables,
      options?: C,
    ): Promise<RenameBackupMutation> {
      return requester<RenameBackupMutation, RenameBackupMutationVariables>(
        RenameBackupDocument,
        variables,
        options,
      ) as Promise<RenameBackupMutation>;
    },
    restoreBackupFromFile(
      variables: RestoreBackupFromFileMutationVariables,
      options?: C,
    ): Promise<RestoreBackupFromFileMutation> {
      return requester<
        RestoreBackupFromFileMutation,
        RestoreBackupFromFileMutationVariables
      >(
        RestoreBackupFromFileDocument,
        variables,
        options,
      ) as Promise<RestoreBackupFromFileMutation>;
    },
    restoreBackup(
      variables: RestoreBackupMutationVariables,
      options?: C,
    ): Promise<RestoreBackupMutation> {
      return requester<RestoreBackupMutation, RestoreBackupMutationVariables>(
        RestoreBackupDocument,
        variables,
        options,
      ) as Promise<RestoreBackupMutation>;
    },
    cancelBackupTask(
      variables: CancelBackupTaskMutationVariables,
      options?: C,
    ): Promise<CancelBackupTaskMutation> {
      return requester<
        CancelBackupTaskMutation,
        CancelBackupTaskMutationVariables
      >(
        CancelBackupTaskDocument,
        variables,
        options,
      ) as Promise<CancelBackupTaskMutation>;
    },
    cancelRestoreBackupTask(
      variables: CancelRestoreBackupTaskMutationVariables,
      options?: C,
    ): Promise<CancelRestoreBackupTaskMutation> {
      return requester<
        CancelRestoreBackupTaskMutation,
        CancelRestoreBackupTaskMutationVariables
      >(
        CancelRestoreBackupTaskDocument,
        variables,
        options,
      ) as Promise<CancelRestoreBackupTaskMutation>;
    },
    deleteBrowser(
      variables?: DeleteBrowserMutationVariables,
      options?: C,
    ): Promise<DeleteBrowserMutation> {
      return requester<DeleteBrowserMutation, DeleteBrowserMutationVariables>(
        DeleteBrowserDocument,
        variables,
        options,
      ) as Promise<DeleteBrowserMutation>;
    },
    installBrowser(
      variables?: InstallBrowserMutationVariables,
      options?: C,
    ): Promise<InstallBrowserMutation> {
      return requester<InstallBrowserMutation, InstallBrowserMutationVariables>(
        InstallBrowserDocument,
        variables,
        options,
      ) as Promise<InstallBrowserMutation>;
    },
    updateBrowser(
      variables?: UpdateBrowserMutationVariables,
      options?: C,
    ): Promise<UpdateBrowserMutation> {
      return requester<UpdateBrowserMutation, UpdateBrowserMutationVariables>(
        UpdateBrowserDocument,
        variables,
        options,
      ) as Promise<UpdateBrowserMutation>;
    },
    updateOnboarding(
      variables: UpdateOnboardingMutationVariables,
      options?: C,
    ): Promise<UpdateOnboardingMutation> {
      return requester<
        UpdateOnboardingMutation,
        UpdateOnboardingMutationVariables
      >(
        UpdateOnboardingDocument,
        variables,
        options,
      ) as Promise<UpdateOnboardingMutation>;
    },
    renameDataExport(
      variables: RenameDataExportMutationVariables,
      options?: C,
    ): Promise<RenameDataExportMutation> {
      return requester<
        RenameDataExportMutation,
        RenameDataExportMutationVariables
      >(
        RenameDataExportDocument,
        variables,
        options,
      ) as Promise<RenameDataExportMutation>;
    },
    deleteDataExport(
      variables: DeleteDataExportMutationVariables,
      options?: C,
    ): Promise<DeleteDataExportMutation> {
      return requester<
        DeleteDataExportMutation,
        DeleteDataExportMutationVariables
      >(
        DeleteDataExportDocument,
        variables,
        options,
      ) as Promise<DeleteDataExportMutation>;
    },
    cancelDataExportTask(
      variables: CancelDataExportTaskMutationVariables,
      options?: C,
    ): Promise<CancelDataExportTaskMutation> {
      return requester<
        CancelDataExportTaskMutation,
        CancelDataExportTaskMutationVariables
      >(
        CancelDataExportTaskDocument,
        variables,
        options,
      ) as Promise<CancelDataExportTaskMutation>;
    },
    createFilterPreset(
      variables: CreateFilterPresetMutationVariables,
      options?: C,
    ): Promise<CreateFilterPresetMutation> {
      return requester<
        CreateFilterPresetMutation,
        CreateFilterPresetMutationVariables
      >(
        CreateFilterPresetDocument,
        variables,
        options,
      ) as Promise<CreateFilterPresetMutation>;
    },
    updateFilterPreset(
      variables: UpdateFilterPresetMutationVariables,
      options?: C,
    ): Promise<UpdateFilterPresetMutation> {
      return requester<
        UpdateFilterPresetMutation,
        UpdateFilterPresetMutationVariables
      >(
        UpdateFilterPresetDocument,
        variables,
        options,
      ) as Promise<UpdateFilterPresetMutation>;
    },
    deleteFilterPreset(
      variables: DeleteFilterPresetMutationVariables,
      options?: C,
    ): Promise<DeleteFilterPresetMutation> {
      return requester<
        DeleteFilterPresetMutation,
        DeleteFilterPresetMutationVariables
      >(
        DeleteFilterPresetDocument,
        variables,
        options,
      ) as Promise<DeleteFilterPresetMutation>;
    },
    deleteFindings(
      variables: DeleteFindingsMutationVariables,
      options?: C,
    ): Promise<DeleteFindingsMutation> {
      return requester<DeleteFindingsMutation, DeleteFindingsMutationVariables>(
        DeleteFindingsDocument,
        variables,
        options,
      ) as Promise<DeleteFindingsMutation>;
    },
    deleteInterceptEntries(
      variables?: DeleteInterceptEntriesMutationVariables,
      options?: C,
    ): Promise<DeleteInterceptEntriesMutation> {
      return requester<
        DeleteInterceptEntriesMutation,
        DeleteInterceptEntriesMutationVariables
      >(
        DeleteInterceptEntriesDocument,
        variables,
        options,
      ) as Promise<DeleteInterceptEntriesMutation>;
    },
    deleteInterceptEntry(
      variables: DeleteInterceptEntryMutationVariables,
      options?: C,
    ): Promise<DeleteInterceptEntryMutation> {
      return requester<
        DeleteInterceptEntryMutation,
        DeleteInterceptEntryMutationVariables
      >(
        DeleteInterceptEntryDocument,
        variables,
        options,
      ) as Promise<DeleteInterceptEntryMutation>;
    },
    deleteHostedFile(
      variables: DeleteHostedFileMutationVariables,
      options?: C,
    ): Promise<DeleteHostedFileMutation> {
      return requester<
        DeleteHostedFileMutation,
        DeleteHostedFileMutationVariables
      >(
        DeleteHostedFileDocument,
        variables,
        options,
      ) as Promise<DeleteHostedFileMutation>;
    },
    renameHostedFile(
      variables: RenameHostedFileMutationVariables,
      options?: C,
    ): Promise<RenameHostedFileMutation> {
      return requester<
        RenameHostedFileMutation,
        RenameHostedFileMutationVariables
      >(
        RenameHostedFileDocument,
        variables,
        options,
      ) as Promise<RenameHostedFileMutation>;
    },
    uploadHostedFile(
      variables: UploadHostedFileMutationVariables,
      options?: C,
    ): Promise<UploadHostedFileMutation> {
      return requester<
        UploadHostedFileMutation,
        UploadHostedFileMutationVariables
      >(
        UploadHostedFileDocument,
        variables,
        options,
      ) as Promise<UploadHostedFileMutation>;
    },
    forwardInterceptMessage(
      variables: ForwardInterceptMessageMutationVariables,
      options?: C,
    ): Promise<ForwardInterceptMessageMutation> {
      return requester<
        ForwardInterceptMessageMutation,
        ForwardInterceptMessageMutationVariables
      >(
        ForwardInterceptMessageDocument,
        variables,
        options,
      ) as Promise<ForwardInterceptMessageMutation>;
    },
    dropInterceptMesage(
      variables: DropInterceptMesageMutationVariables,
      options?: C,
    ): Promise<DropInterceptMesageMutation> {
      return requester<
        DropInterceptMesageMutation,
        DropInterceptMesageMutationVariables
      >(
        DropInterceptMesageDocument,
        variables,
        options,
      ) as Promise<DropInterceptMesageMutation>;
    },
    setInterceptOptions(
      variables: SetInterceptOptionsMutationVariables,
      options?: C,
    ): Promise<SetInterceptOptionsMutation> {
      return requester<
        SetInterceptOptionsMutation,
        SetInterceptOptionsMutationVariables
      >(
        SetInterceptOptionsDocument,
        variables,
        options,
      ) as Promise<SetInterceptOptionsMutation>;
    },
    pauseIntercept(
      variables?: PauseInterceptMutationVariables,
      options?: C,
    ): Promise<PauseInterceptMutation> {
      return requester<PauseInterceptMutation, PauseInterceptMutationVariables>(
        PauseInterceptDocument,
        variables,
        options,
      ) as Promise<PauseInterceptMutation>;
    },
    resumeIntercept(
      variables?: ResumeInterceptMutationVariables,
      options?: C,
    ): Promise<ResumeInterceptMutation> {
      return requester<
        ResumeInterceptMutation,
        ResumeInterceptMutationVariables
      >(
        ResumeInterceptDocument,
        variables,
        options,
      ) as Promise<ResumeInterceptMutation>;
    },
    createUpstreamProxy(
      variables: CreateUpstreamProxyMutationVariables,
      options?: C,
    ): Promise<CreateUpstreamProxyMutation> {
      return requester<
        CreateUpstreamProxyMutation,
        CreateUpstreamProxyMutationVariables
      >(
        CreateUpstreamProxyDocument,
        variables,
        options,
      ) as Promise<CreateUpstreamProxyMutation>;
    },
    updateUpstreamProxy(
      variables: UpdateUpstreamProxyMutationVariables,
      options?: C,
    ): Promise<UpdateUpstreamProxyMutation> {
      return requester<
        UpdateUpstreamProxyMutation,
        UpdateUpstreamProxyMutationVariables
      >(
        UpdateUpstreamProxyDocument,
        variables,
        options,
      ) as Promise<UpdateUpstreamProxyMutation>;
    },
    deleteUpstreamProxy(
      variables: DeleteUpstreamProxyMutationVariables,
      options?: C,
    ): Promise<DeleteUpstreamProxyMutation> {
      return requester<
        DeleteUpstreamProxyMutation,
        DeleteUpstreamProxyMutationVariables
      >(
        DeleteUpstreamProxyDocument,
        variables,
        options,
      ) as Promise<DeleteUpstreamProxyMutation>;
    },
    testUpstreamProxy(
      variables: TestUpstreamProxyMutationVariables,
      options?: C,
    ): Promise<TestUpstreamProxyMutation> {
      return requester<
        TestUpstreamProxyMutation,
        TestUpstreamProxyMutationVariables
      >(
        TestUpstreamProxyDocument,
        variables,
        options,
      ) as Promise<TestUpstreamProxyMutation>;
    },
    rankUpstreamProxy(
      variables: RankUpstreamProxyMutationVariables,
      options?: C,
    ): Promise<RankUpstreamProxyMutation> {
      return requester<
        RankUpstreamProxyMutation,
        RankUpstreamProxyMutationVariables
      >(
        RankUpstreamProxyDocument,
        variables,
        options,
      ) as Promise<RankUpstreamProxyMutation>;
    },
    createProject(
      variables: CreateProjectMutationVariables,
      options?: C,
    ): Promise<CreateProjectMutation> {
      return requester<CreateProjectMutation, CreateProjectMutationVariables>(
        CreateProjectDocument,
        variables,
        options,
      ) as Promise<CreateProjectMutation>;
    },
    selectProject(
      variables: SelectProjectMutationVariables,
      options?: C,
    ): Promise<SelectProjectMutation> {
      return requester<SelectProjectMutation, SelectProjectMutationVariables>(
        SelectProjectDocument,
        variables,
        options,
      ) as Promise<SelectProjectMutation>;
    },
    deleteProject(
      variables: DeleteProjectMutationVariables,
      options?: C,
    ): Promise<DeleteProjectMutation> {
      return requester<DeleteProjectMutation, DeleteProjectMutationVariables>(
        DeleteProjectDocument,
        variables,
        options,
      ) as Promise<DeleteProjectMutation>;
    },
    renameProject(
      variables: RenameProjectMutationVariables,
      options?: C,
    ): Promise<RenameProjectMutation> {
      return requester<RenameProjectMutation, RenameProjectMutationVariables>(
        RenameProjectDocument,
        variables,
        options,
      ) as Promise<RenameProjectMutation>;
    },
    renameReplaySessionCollection(
      variables: RenameReplaySessionCollectionMutationVariables,
      options?: C,
    ): Promise<RenameReplaySessionCollectionMutation> {
      return requester<
        RenameReplaySessionCollectionMutation,
        RenameReplaySessionCollectionMutationVariables
      >(
        RenameReplaySessionCollectionDocument,
        variables,
        options,
      ) as Promise<RenameReplaySessionCollectionMutation>;
    },
    createReplaySessionCollection(
      variables: CreateReplaySessionCollectionMutationVariables,
      options?: C,
    ): Promise<CreateReplaySessionCollectionMutation> {
      return requester<
        CreateReplaySessionCollectionMutation,
        CreateReplaySessionCollectionMutationVariables
      >(
        CreateReplaySessionCollectionDocument,
        variables,
        options,
      ) as Promise<CreateReplaySessionCollectionMutation>;
    },
    deleteReplaySessionCollection(
      variables: DeleteReplaySessionCollectionMutationVariables,
      options?: C,
    ): Promise<DeleteReplaySessionCollectionMutation> {
      return requester<
        DeleteReplaySessionCollectionMutation,
        DeleteReplaySessionCollectionMutationVariables
      >(
        DeleteReplaySessionCollectionDocument,
        variables,
        options,
      ) as Promise<DeleteReplaySessionCollectionMutation>;
    },
    renameReplaySession(
      variables: RenameReplaySessionMutationVariables,
      options?: C,
    ): Promise<RenameReplaySessionMutation> {
      return requester<
        RenameReplaySessionMutation,
        RenameReplaySessionMutationVariables
      >(
        RenameReplaySessionDocument,
        variables,
        options,
      ) as Promise<RenameReplaySessionMutation>;
    },
    setActiveReplaySessionEntry(
      variables: SetActiveReplaySessionEntryMutationVariables,
      options?: C,
    ): Promise<SetActiveReplaySessionEntryMutation> {
      return requester<
        SetActiveReplaySessionEntryMutation,
        SetActiveReplaySessionEntryMutationVariables
      >(
        SetActiveReplaySessionEntryDocument,
        variables,
        options,
      ) as Promise<SetActiveReplaySessionEntryMutation>;
    },
    deleteReplaySessions(
      variables: DeleteReplaySessionsMutationVariables,
      options?: C,
    ): Promise<DeleteReplaySessionsMutation> {
      return requester<
        DeleteReplaySessionsMutation,
        DeleteReplaySessionsMutationVariables
      >(
        DeleteReplaySessionsDocument,
        variables,
        options,
      ) as Promise<DeleteReplaySessionsMutation>;
    },
    createReplaySession(
      variables: CreateReplaySessionMutationVariables,
      options?: C,
    ): Promise<CreateReplaySessionMutation> {
      return requester<
        CreateReplaySessionMutation,
        CreateReplaySessionMutationVariables
      >(
        CreateReplaySessionDocument,
        variables,
        options,
      ) as Promise<CreateReplaySessionMutation>;
    },
    moveReplaySession(
      variables: MoveReplaySessionMutationVariables,
      options?: C,
    ): Promise<MoveReplaySessionMutation> {
      return requester<
        MoveReplaySessionMutation,
        MoveReplaySessionMutationVariables
      >(
        MoveReplaySessionDocument,
        variables,
        options,
      ) as Promise<MoveReplaySessionMutation>;
    },
    startReplayTask(
      variables: StartReplayTaskMutationVariables,
      options?: C,
    ): Promise<StartReplayTaskMutation> {
      return requester<
        StartReplayTaskMutation,
        StartReplayTaskMutationVariables
      >(
        StartReplayTaskDocument,
        variables,
        options,
      ) as Promise<StartReplayTaskMutation>;
    },
    cancelReplayTask(
      variables: CancelReplayTaskMutationVariables,
      options?: C,
    ): Promise<CancelReplayTaskMutation> {
      return requester<
        CancelReplayTaskMutation,
        CancelReplayTaskMutationVariables
      >(
        CancelReplayTaskDocument,
        variables,
        options,
      ) as Promise<CancelReplayTaskMutation>;
    },
    updateRequestMetadata(
      variables: UpdateRequestMetadataMutationVariables,
      options?: C,
    ): Promise<UpdateRequestMetadataMutation> {
      return requester<
        UpdateRequestMetadataMutation,
        UpdateRequestMetadataMutationVariables
      >(
        UpdateRequestMetadataDocument,
        variables,
        options,
      ) as Promise<UpdateRequestMetadataMutation>;
    },
    startExportRequestsTask(
      variables: StartExportRequestsTaskMutationVariables,
      options?: C,
    ): Promise<StartExportRequestsTaskMutation> {
      return requester<
        StartExportRequestsTaskMutation,
        StartExportRequestsTaskMutationVariables
      >(
        StartExportRequestsTaskDocument,
        variables,
        options,
      ) as Promise<StartExportRequestsTaskMutation>;
    },
    renderRequest(
      variables: RenderRequestMutationVariables,
      options?: C,
    ): Promise<RenderRequestMutation> {
      return requester<RenderRequestMutation, RenderRequestMutationVariables>(
        RenderRequestDocument,
        variables,
        options,
      ) as Promise<RenderRequestMutation>;
    },
    createScope(
      variables: CreateScopeMutationVariables,
      options?: C,
    ): Promise<CreateScopeMutation> {
      return requester<CreateScopeMutation, CreateScopeMutationVariables>(
        CreateScopeDocument,
        variables,
        options,
      ) as Promise<CreateScopeMutation>;
    },
    updateScope(
      variables: UpdateScopeMutationVariables,
      options?: C,
    ): Promise<UpdateScopeMutation> {
      return requester<UpdateScopeMutation, UpdateScopeMutationVariables>(
        UpdateScopeDocument,
        variables,
        options,
      ) as Promise<UpdateScopeMutation>;
    },
    deleteScope(
      variables: DeleteScopeMutationVariables,
      options?: C,
    ): Promise<DeleteScopeMutation> {
      return requester<DeleteScopeMutation, DeleteScopeMutationVariables>(
        DeleteScopeDocument,
        variables,
        options,
      ) as Promise<DeleteScopeMutation>;
    },
    renameTamperRuleCollection(
      variables: RenameTamperRuleCollectionMutationVariables,
      options?: C,
    ): Promise<RenameTamperRuleCollectionMutation> {
      return requester<
        RenameTamperRuleCollectionMutation,
        RenameTamperRuleCollectionMutationVariables
      >(
        RenameTamperRuleCollectionDocument,
        variables,
        options,
      ) as Promise<RenameTamperRuleCollectionMutation>;
    },
    createTamperRuleCollection(
      variables: CreateTamperRuleCollectionMutationVariables,
      options?: C,
    ): Promise<CreateTamperRuleCollectionMutation> {
      return requester<
        CreateTamperRuleCollectionMutation,
        CreateTamperRuleCollectionMutationVariables
      >(
        CreateTamperRuleCollectionDocument,
        variables,
        options,
      ) as Promise<CreateTamperRuleCollectionMutation>;
    },
    deleteTamperRuleCollection(
      variables: DeleteTamperRuleCollectionMutationVariables,
      options?: C,
    ): Promise<DeleteTamperRuleCollectionMutation> {
      return requester<
        DeleteTamperRuleCollectionMutation,
        DeleteTamperRuleCollectionMutationVariables
      >(
        DeleteTamperRuleCollectionDocument,
        variables,
        options,
      ) as Promise<DeleteTamperRuleCollectionMutation>;
    },
    createTamperRule(
      variables: CreateTamperRuleMutationVariables,
      options?: C,
    ): Promise<CreateTamperRuleMutation> {
      return requester<
        CreateTamperRuleMutation,
        CreateTamperRuleMutationVariables
      >(
        CreateTamperRuleDocument,
        variables,
        options,
      ) as Promise<CreateTamperRuleMutation>;
    },
    deleteTamperRule(
      variables: DeleteTamperRuleMutationVariables,
      options?: C,
    ): Promise<DeleteTamperRuleMutation> {
      return requester<
        DeleteTamperRuleMutation,
        DeleteTamperRuleMutationVariables
      >(
        DeleteTamperRuleDocument,
        variables,
        options,
      ) as Promise<DeleteTamperRuleMutation>;
    },
    updateTamperRule(
      variables: UpdateTamperRuleMutationVariables,
      options?: C,
    ): Promise<UpdateTamperRuleMutation> {
      return requester<
        UpdateTamperRuleMutation,
        UpdateTamperRuleMutationVariables
      >(
        UpdateTamperRuleDocument,
        variables,
        options,
      ) as Promise<UpdateTamperRuleMutation>;
    },
    renameTamperRule(
      variables: RenameTamperRuleMutationVariables,
      options?: C,
    ): Promise<RenameTamperRuleMutation> {
      return requester<
        RenameTamperRuleMutation,
        RenameTamperRuleMutationVariables
      >(
        RenameTamperRuleDocument,
        variables,
        options,
      ) as Promise<RenameTamperRuleMutation>;
    },
    testTamperRule(
      variables: TestTamperRuleMutationVariables,
      options?: C,
    ): Promise<TestTamperRuleMutation> {
      return requester<TestTamperRuleMutation, TestTamperRuleMutationVariables>(
        TestTamperRuleDocument,
        variables,
        options,
      ) as Promise<TestTamperRuleMutation>;
    },
    enableTamperRule(
      variables: EnableTamperRuleMutationVariables,
      options?: C,
    ): Promise<EnableTamperRuleMutation> {
      return requester<
        EnableTamperRuleMutation,
        EnableTamperRuleMutationVariables
      >(
        EnableTamperRuleDocument,
        variables,
        options,
      ) as Promise<EnableTamperRuleMutation>;
    },
    disableTamperRule(
      variables: DisableTamperRuleMutationVariables,
      options?: C,
    ): Promise<DisableTamperRuleMutation> {
      return requester<
        DisableTamperRuleMutation,
        DisableTamperRuleMutationVariables
      >(
        DisableTamperRuleDocument,
        variables,
        options,
      ) as Promise<DisableTamperRuleMutation>;
    },
    rankTamperRule(
      variables: RankTamperRuleMutationVariables,
      options?: C,
    ): Promise<RankTamperRuleMutation> {
      return requester<RankTamperRuleMutation, RankTamperRuleMutationVariables>(
        RankTamperRuleDocument,
        variables,
        options,
      ) as Promise<RankTamperRuleMutation>;
    },
    moveTamperRule(
      variables: MoveTamperRuleMutationVariables,
      options?: C,
    ): Promise<MoveTamperRuleMutation> {
      return requester<MoveTamperRuleMutation, MoveTamperRuleMutationVariables>(
        MoveTamperRuleDocument,
        variables,
        options,
      ) as Promise<MoveTamperRuleMutation>;
    },
    updateViewerSettings(
      variables: UpdateViewerSettingsMutationVariables,
      options?: C,
    ): Promise<UpdateViewerSettingsMutation> {
      return requester<
        UpdateViewerSettingsMutation,
        UpdateViewerSettingsMutationVariables
      >(
        UpdateViewerSettingsDocument,
        variables,
        options,
      ) as Promise<UpdateViewerSettingsMutation>;
    },
    createWorkflow(
      variables: CreateWorkflowMutationVariables,
      options?: C,
    ): Promise<CreateWorkflowMutation> {
      return requester<CreateWorkflowMutation, CreateWorkflowMutationVariables>(
        CreateWorkflowDocument,
        variables,
        options,
      ) as Promise<CreateWorkflowMutation>;
    },
    deleteWorkflow(
      variables: DeleteWorkflowMutationVariables,
      options?: C,
    ): Promise<DeleteWorkflowMutation> {
      return requester<DeleteWorkflowMutation, DeleteWorkflowMutationVariables>(
        DeleteWorkflowDocument,
        variables,
        options,
      ) as Promise<DeleteWorkflowMutation>;
    },
    toggleWorkflow(
      variables: ToggleWorkflowMutationVariables,
      options?: C,
    ): Promise<ToggleWorkflowMutation> {
      return requester<ToggleWorkflowMutation, ToggleWorkflowMutationVariables>(
        ToggleWorkflowDocument,
        variables,
        options,
      ) as Promise<ToggleWorkflowMutation>;
    },
    renameWorkflow(
      variables: RenameWorkflowMutationVariables,
      options?: C,
    ): Promise<RenameWorkflowMutation> {
      return requester<RenameWorkflowMutation, RenameWorkflowMutationVariables>(
        RenameWorkflowDocument,
        variables,
        options,
      ) as Promise<RenameWorkflowMutation>;
    },
    updateWorkflow(
      variables: UpdateWorkflowMutationVariables,
      options?: C,
    ): Promise<UpdateWorkflowMutation> {
      return requester<UpdateWorkflowMutation, UpdateWorkflowMutationVariables>(
        UpdateWorkflowDocument,
        variables,
        options,
      ) as Promise<UpdateWorkflowMutation>;
    },
    runConvertWorkflow(
      variables: RunConvertWorkflowMutationVariables,
      options?: C,
    ): Promise<RunConvertWorkflowMutation> {
      return requester<
        RunConvertWorkflowMutation,
        RunConvertWorkflowMutationVariables
      >(
        RunConvertWorkflowDocument,
        variables,
        options,
      ) as Promise<RunConvertWorkflowMutation>;
    },
    globalizeWorkflow(
      variables: GlobalizeWorkflowMutationVariables,
      options?: C,
    ): Promise<GlobalizeWorkflowMutation> {
      return requester<
        GlobalizeWorkflowMutation,
        GlobalizeWorkflowMutationVariables
      >(
        GlobalizeWorkflowDocument,
        variables,
        options,
      ) as Promise<GlobalizeWorkflowMutation>;
    },
    assistantModels(
      variables?: AssistantModelsQueryVariables,
      options?: C,
    ): Promise<AssistantModelsQuery> {
      return requester<AssistantModelsQuery, AssistantModelsQueryVariables>(
        AssistantModelsDocument,
        variables,
        options,
      ) as Promise<AssistantModelsQuery>;
    },
    assistantSessions(
      variables?: AssistantSessionsQueryVariables,
      options?: C,
    ): Promise<AssistantSessionsQuery> {
      return requester<AssistantSessionsQuery, AssistantSessionsQueryVariables>(
        AssistantSessionsDocument,
        variables,
        options,
      ) as Promise<AssistantSessionsQuery>;
    },
    assistantSession(
      variables: AssistantSessionQueryVariables,
      options?: C,
    ): Promise<AssistantSessionQuery> {
      return requester<AssistantSessionQuery, AssistantSessionQueryVariables>(
        AssistantSessionDocument,
        variables,
        options,
      ) as Promise<AssistantSessionQuery>;
    },
    assistantUsage(
      variables?: AssistantUsageQueryVariables,
      options?: C,
    ): Promise<AssistantUsageQuery> {
      return requester<AssistantUsageQuery, AssistantUsageQueryVariables>(
        AssistantUsageDocument,
        variables,
        options,
      ) as Promise<AssistantUsageQuery>;
    },
    automateEntry(
      variables: AutomateEntryQueryVariables,
      options?: C,
    ): Promise<AutomateEntryQuery> {
      return requester<AutomateEntryQuery, AutomateEntryQueryVariables>(
        AutomateEntryDocument,
        variables,
        options,
      ) as Promise<AutomateEntryQuery>;
    },
    automateEntryRequests(
      variables: AutomateEntryRequestsQueryVariables,
      options?: C,
    ): Promise<AutomateEntryRequestsQuery> {
      return requester<
        AutomateEntryRequestsQuery,
        AutomateEntryRequestsQueryVariables
      >(
        AutomateEntryRequestsDocument,
        variables,
        options,
      ) as Promise<AutomateEntryRequestsQuery>;
    },
    automateEntryRequestsByOffset(
      variables: AutomateEntryRequestsByOffsetQueryVariables,
      options?: C,
    ): Promise<AutomateEntryRequestsByOffsetQuery> {
      return requester<
        AutomateEntryRequestsByOffsetQuery,
        AutomateEntryRequestsByOffsetQueryVariables
      >(
        AutomateEntryRequestsByOffsetDocument,
        variables,
        options,
      ) as Promise<AutomateEntryRequestsByOffsetQuery>;
    },
    automateEntryRequestsCount(
      variables: AutomateEntryRequestsCountQueryVariables,
      options?: C,
    ): Promise<AutomateEntryRequestsCountQuery> {
      return requester<
        AutomateEntryRequestsCountQuery,
        AutomateEntryRequestsCountQueryVariables
      >(
        AutomateEntryRequestsCountDocument,
        variables,
        options,
      ) as Promise<AutomateEntryRequestsCountQuery>;
    },
    automateSessions(
      variables?: AutomateSessionsQueryVariables,
      options?: C,
    ): Promise<AutomateSessionsQuery> {
      return requester<AutomateSessionsQuery, AutomateSessionsQueryVariables>(
        AutomateSessionsDocument,
        variables,
        options,
      ) as Promise<AutomateSessionsQuery>;
    },
    automateSession(
      variables: AutomateSessionQueryVariables,
      options?: C,
    ): Promise<AutomateSessionQuery> {
      return requester<AutomateSessionQuery, AutomateSessionQueryVariables>(
        AutomateSessionDocument,
        variables,
        options,
      ) as Promise<AutomateSessionQuery>;
    },
    automateTasks(
      variables?: AutomateTasksQueryVariables,
      options?: C,
    ): Promise<AutomateTasksQuery> {
      return requester<AutomateTasksQuery, AutomateTasksQueryVariables>(
        AutomateTasksDocument,
        variables,
        options,
      ) as Promise<AutomateTasksQuery>;
    },
    backups(
      variables?: BackupsQueryVariables,
      options?: C,
    ): Promise<BackupsQuery> {
      return requester<BackupsQuery, BackupsQueryVariables>(
        BackupsDocument,
        variables,
        options,
      ) as Promise<BackupsQuery>;
    },
    backupUri(
      variables: BackupUriQueryVariables,
      options?: C,
    ): Promise<BackupUriQuery> {
      return requester<BackupUriQuery, BackupUriQueryVariables>(
        BackupUriDocument,
        variables,
        options,
      ) as Promise<BackupUriQuery>;
    },
    backupTasks(
      variables?: BackupTasksQueryVariables,
      options?: C,
    ): Promise<BackupTasksQuery> {
      return requester<BackupTasksQuery, BackupTasksQueryVariables>(
        BackupTasksDocument,
        variables,
        options,
      ) as Promise<BackupTasksQuery>;
    },
    restoreBackupTasks(
      variables?: RestoreBackupTasksQueryVariables,
      options?: C,
    ): Promise<RestoreBackupTasksQuery> {
      return requester<
        RestoreBackupTasksQuery,
        RestoreBackupTasksQueryVariables
      >(
        RestoreBackupTasksDocument,
        variables,
        options,
      ) as Promise<RestoreBackupTasksQuery>;
    },
    browser(
      variables?: BrowserQueryVariables,
      options?: C,
    ): Promise<BrowserQuery> {
      return requester<BrowserQuery, BrowserQueryVariables>(
        BrowserDocument,
        variables,
        options,
      ) as Promise<BrowserQuery>;
    },
    globalConfig(
      variables?: GlobalConfigQueryVariables,
      options?: C,
    ): Promise<GlobalConfigQuery> {
      return requester<GlobalConfigQuery, GlobalConfigQueryVariables>(
        GlobalConfigDocument,
        variables,
        options,
      ) as Promise<GlobalConfigQuery>;
    },
    dataExports(
      variables?: DataExportsQueryVariables,
      options?: C,
    ): Promise<DataExportsQuery> {
      return requester<DataExportsQuery, DataExportsQueryVariables>(
        DataExportsDocument,
        variables,
        options,
      ) as Promise<DataExportsQuery>;
    },
    dataExport(
      variables: DataExportQueryVariables,
      options?: C,
    ): Promise<DataExportQuery> {
      return requester<DataExportQuery, DataExportQueryVariables>(
        DataExportDocument,
        variables,
        options,
      ) as Promise<DataExportQuery>;
    },
    dataExportTasks(
      variables?: DataExportTasksQueryVariables,
      options?: C,
    ): Promise<DataExportTasksQuery> {
      return requester<DataExportTasksQuery, DataExportTasksQueryVariables>(
        DataExportTasksDocument,
        variables,
        options,
      ) as Promise<DataExportTasksQuery>;
    },
    filterPresets(
      variables?: FilterPresetsQueryVariables,
      options?: C,
    ): Promise<FilterPresetsQuery> {
      return requester<FilterPresetsQuery, FilterPresetsQueryVariables>(
        FilterPresetsDocument,
        variables,
        options,
      ) as Promise<FilterPresetsQuery>;
    },
    filterPreset(
      variables: FilterPresetQueryVariables,
      options?: C,
    ): Promise<FilterPresetQuery> {
      return requester<FilterPresetQuery, FilterPresetQueryVariables>(
        FilterPresetDocument,
        variables,
        options,
      ) as Promise<FilterPresetQuery>;
    },
    getFindingsBefore(
      variables: GetFindingsBeforeQueryVariables,
      options?: C,
    ): Promise<GetFindingsBeforeQuery> {
      return requester<GetFindingsBeforeQuery, GetFindingsBeforeQueryVariables>(
        GetFindingsBeforeDocument,
        variables,
        options,
      ) as Promise<GetFindingsBeforeQuery>;
    },
    getFindingsAfter(
      variables: GetFindingsAfterQueryVariables,
      options?: C,
    ): Promise<GetFindingsAfterQuery> {
      return requester<GetFindingsAfterQuery, GetFindingsAfterQueryVariables>(
        GetFindingsAfterDocument,
        variables,
        options,
      ) as Promise<GetFindingsAfterQuery>;
    },
    getFindingsByOffset(
      variables: GetFindingsByOffsetQueryVariables,
      options?: C,
    ): Promise<GetFindingsByOffsetQuery> {
      return requester<
        GetFindingsByOffsetQuery,
        GetFindingsByOffsetQueryVariables
      >(
        GetFindingsByOffsetDocument,
        variables,
        options,
      ) as Promise<GetFindingsByOffsetQuery>;
    },
    getFindingsCount(
      variables: GetFindingsCountQueryVariables,
      options?: C,
    ): Promise<GetFindingsCountQuery> {
      return requester<GetFindingsCountQuery, GetFindingsCountQueryVariables>(
        GetFindingsCountDocument,
        variables,
        options,
      ) as Promise<GetFindingsCountQuery>;
    },
    findingReporters(
      variables?: FindingReportersQueryVariables,
      options?: C,
    ): Promise<FindingReportersQuery> {
      return requester<FindingReportersQuery, FindingReportersQueryVariables>(
        FindingReportersDocument,
        variables,
        options,
      ) as Promise<FindingReportersQuery>;
    },
    hostedFiles(
      variables?: HostedFilesQueryVariables,
      options?: C,
    ): Promise<HostedFilesQuery> {
      return requester<HostedFilesQuery, HostedFilesQueryVariables>(
        HostedFilesDocument,
        variables,
        options,
      ) as Promise<HostedFilesQuery>;
    },
    interceptRequestMessages(
      variables: InterceptRequestMessagesQueryVariables,
      options?: C,
    ): Promise<InterceptRequestMessagesQuery> {
      return requester<
        InterceptRequestMessagesQuery,
        InterceptRequestMessagesQueryVariables
      >(
        InterceptRequestMessagesDocument,
        variables,
        options,
      ) as Promise<InterceptRequestMessagesQuery>;
    },
    interceptResponseMessages(
      variables: InterceptResponseMessagesQueryVariables,
      options?: C,
    ): Promise<InterceptResponseMessagesQuery> {
      return requester<
        InterceptResponseMessagesQuery,
        InterceptResponseMessagesQueryVariables
      >(
        InterceptResponseMessagesDocument,
        variables,
        options,
      ) as Promise<InterceptResponseMessagesQuery>;
    },
    interceptOptions(
      variables?: InterceptOptionsQueryVariables,
      options?: C,
    ): Promise<InterceptOptionsQuery> {
      return requester<InterceptOptionsQuery, InterceptOptionsQueryVariables>(
        InterceptOptionsDocument,
        variables,
        options,
      ) as Promise<InterceptOptionsQuery>;
    },
    interceptStatus(
      variables?: InterceptStatusQueryVariables,
      options?: C,
    ): Promise<InterceptStatusQuery> {
      return requester<InterceptStatusQuery, InterceptStatusQueryVariables>(
        InterceptStatusDocument,
        variables,
        options,
      ) as Promise<InterceptStatusQuery>;
    },
    interceptEntries(
      variables?: InterceptEntriesQueryVariables,
      options?: C,
    ): Promise<InterceptEntriesQuery> {
      return requester<InterceptEntriesQuery, InterceptEntriesQueryVariables>(
        InterceptEntriesDocument,
        variables,
        options,
      ) as Promise<InterceptEntriesQuery>;
    },
    interceptEntriesByOffset(
      variables?: InterceptEntriesByOffsetQueryVariables,
      options?: C,
    ): Promise<InterceptEntriesByOffsetQuery> {
      return requester<
        InterceptEntriesByOffsetQuery,
        InterceptEntriesByOffsetQueryVariables
      >(
        InterceptEntriesByOffsetDocument,
        variables,
        options,
      ) as Promise<InterceptEntriesByOffsetQuery>;
    },
    interceptEntry(
      variables: InterceptEntryQueryVariables,
      options?: C,
    ): Promise<InterceptEntryQuery> {
      return requester<InterceptEntryQuery, InterceptEntryQueryVariables>(
        InterceptEntryDocument,
        variables,
        options,
      ) as Promise<InterceptEntryQuery>;
    },
    interceptEntryCount(
      variables?: InterceptEntryCountQueryVariables,
      options?: C,
    ): Promise<InterceptEntryCountQuery> {
      return requester<
        InterceptEntryCountQuery,
        InterceptEntryCountQueryVariables
      >(
        InterceptEntryCountDocument,
        variables,
        options,
      ) as Promise<InterceptEntryCountQuery>;
    },
    upstreamProxies(
      variables?: UpstreamProxiesQueryVariables,
      options?: C,
    ): Promise<UpstreamProxiesQuery> {
      return requester<UpstreamProxiesQuery, UpstreamProxiesQueryVariables>(
        UpstreamProxiesDocument,
        variables,
        options,
      ) as Promise<UpstreamProxiesQuery>;
    },
    currentProject(
      variables?: CurrentProjectQueryVariables,
      options?: C,
    ): Promise<CurrentProjectQuery> {
      return requester<CurrentProjectQuery, CurrentProjectQueryVariables>(
        CurrentProjectDocument,
        variables,
        options,
      ) as Promise<CurrentProjectQuery>;
    },
    projects(
      variables?: ProjectsQueryVariables,
      options?: C,
    ): Promise<ProjectsQuery> {
      return requester<ProjectsQuery, ProjectsQueryVariables>(
        ProjectsDocument,
        variables,
        options,
      ) as Promise<ProjectsQuery>;
    },
    replayEntry(
      variables: ReplayEntryQueryVariables,
      options?: C,
    ): Promise<ReplayEntryQuery> {
      return requester<ReplayEntryQuery, ReplayEntryQueryVariables>(
        ReplayEntryDocument,
        variables,
        options,
      ) as Promise<ReplayEntryQuery>;
    },
    activeReplayEntryBySession(
      variables: ActiveReplayEntryBySessionQueryVariables,
      options?: C,
    ): Promise<ActiveReplayEntryBySessionQuery> {
      return requester<
        ActiveReplayEntryBySessionQuery,
        ActiveReplayEntryBySessionQueryVariables
      >(
        ActiveReplayEntryBySessionDocument,
        variables,
        options,
      ) as Promise<ActiveReplayEntryBySessionQuery>;
    },
    replayEntriesBySession(
      variables: ReplayEntriesBySessionQueryVariables,
      options?: C,
    ): Promise<ReplayEntriesBySessionQuery> {
      return requester<
        ReplayEntriesBySessionQuery,
        ReplayEntriesBySessionQueryVariables
      >(
        ReplayEntriesBySessionDocument,
        variables,
        options,
      ) as Promise<ReplayEntriesBySessionQuery>;
    },
    replaySessionEntries(
      variables: ReplaySessionEntriesQueryVariables,
      options?: C,
    ): Promise<ReplaySessionEntriesQuery> {
      return requester<
        ReplaySessionEntriesQuery,
        ReplaySessionEntriesQueryVariables
      >(
        ReplaySessionEntriesDocument,
        variables,
        options,
      ) as Promise<ReplaySessionEntriesQuery>;
    },
    replaySessionCollections(
      variables?: ReplaySessionCollectionsQueryVariables,
      options?: C,
    ): Promise<ReplaySessionCollectionsQuery> {
      return requester<
        ReplaySessionCollectionsQuery,
        ReplaySessionCollectionsQueryVariables
      >(
        ReplaySessionCollectionsDocument,
        variables,
        options,
      ) as Promise<ReplaySessionCollectionsQuery>;
    },
    requests(
      variables?: RequestsQueryVariables,
      options?: C,
    ): Promise<RequestsQuery> {
      return requester<RequestsQuery, RequestsQueryVariables>(
        RequestsDocument,
        variables,
        options,
      ) as Promise<RequestsQuery>;
    },
    requestCount(
      variables?: RequestCountQueryVariables,
      options?: C,
    ): Promise<RequestCountQuery> {
      return requester<RequestCountQuery, RequestCountQueryVariables>(
        RequestCountDocument,
        variables,
        options,
      ) as Promise<RequestCountQuery>;
    },
    request(
      variables: RequestQueryVariables,
      options?: C,
    ): Promise<RequestQuery> {
      return requester<RequestQuery, RequestQueryVariables>(
        RequestDocument,
        variables,
        options,
      ) as Promise<RequestQuery>;
    },
    requestsByOffset(
      variables?: RequestsByOffsetQueryVariables,
      options?: C,
    ): Promise<RequestsByOffsetQuery> {
      return requester<RequestsByOffsetQuery, RequestsByOffsetQueryVariables>(
        RequestsByOffsetDocument,
        variables,
        options,
      ) as Promise<RequestsByOffsetQuery>;
    },
    response(
      variables: ResponseQueryVariables,
      options?: C,
    ): Promise<ResponseQuery> {
      return requester<ResponseQuery, ResponseQueryVariables>(
        ResponseDocument,
        variables,
        options,
      ) as Promise<ResponseQuery>;
    },
    getRuntime(
      variables?: GetRuntimeQueryVariables,
      options?: C,
    ): Promise<GetRuntimeQuery> {
      return requester<GetRuntimeQuery, GetRuntimeQueryVariables>(
        GetRuntimeDocument,
        variables,
        options,
      ) as Promise<GetRuntimeQuery>;
    },
    scopes(
      variables?: ScopesQueryVariables,
      options?: C,
    ): Promise<ScopesQuery> {
      return requester<ScopesQuery, ScopesQueryVariables>(
        ScopesDocument,
        variables,
        options,
      ) as Promise<ScopesQuery>;
    },
    sitemapRootEntries(
      variables?: SitemapRootEntriesQueryVariables,
      options?: C,
    ): Promise<SitemapRootEntriesQuery> {
      return requester<
        SitemapRootEntriesQuery,
        SitemapRootEntriesQueryVariables
      >(
        SitemapRootEntriesDocument,
        variables,
        options,
      ) as Promise<SitemapRootEntriesQuery>;
    },
    sitemapEntryChildren(
      variables: SitemapEntryChildrenQueryVariables,
      options?: C,
    ): Promise<SitemapEntryChildrenQuery> {
      return requester<
        SitemapEntryChildrenQuery,
        SitemapEntryChildrenQueryVariables
      >(
        SitemapEntryChildrenDocument,
        variables,
        options,
      ) as Promise<SitemapEntryChildrenQuery>;
    },
    sitemapEntryRequests(
      variables: SitemapEntryRequestsQueryVariables,
      options?: C,
    ): Promise<SitemapEntryRequestsQuery> {
      return requester<
        SitemapEntryRequestsQuery,
        SitemapEntryRequestsQueryVariables
      >(
        SitemapEntryRequestsDocument,
        variables,
        options,
      ) as Promise<SitemapEntryRequestsQuery>;
    },
    websocketStreamsBefore(
      variables: WebsocketStreamsBeforeQueryVariables,
      options?: C,
    ): Promise<WebsocketStreamsBeforeQuery> {
      return requester<
        WebsocketStreamsBeforeQuery,
        WebsocketStreamsBeforeQueryVariables
      >(
        WebsocketStreamsBeforeDocument,
        variables,
        options,
      ) as Promise<WebsocketStreamsBeforeQuery>;
    },
    websocketStreamsAfter(
      variables: WebsocketStreamsAfterQueryVariables,
      options?: C,
    ): Promise<WebsocketStreamsAfterQuery> {
      return requester<
        WebsocketStreamsAfterQuery,
        WebsocketStreamsAfterQueryVariables
      >(
        WebsocketStreamsAfterDocument,
        variables,
        options,
      ) as Promise<WebsocketStreamsAfterQuery>;
    },
    websocketStreamsByOffset(
      variables: WebsocketStreamsByOffsetQueryVariables,
      options?: C,
    ): Promise<WebsocketStreamsByOffsetQuery> {
      return requester<
        WebsocketStreamsByOffsetQuery,
        WebsocketStreamsByOffsetQueryVariables
      >(
        WebsocketStreamsByOffsetDocument,
        variables,
        options,
      ) as Promise<WebsocketStreamsByOffsetQuery>;
    },
    websocketStreamCount(
      variables?: WebsocketStreamCountQueryVariables,
      options?: C,
    ): Promise<WebsocketStreamCountQuery> {
      return requester<
        WebsocketStreamCountQuery,
        WebsocketStreamCountQueryVariables
      >(
        WebsocketStreamCountDocument,
        variables,
        options,
      ) as Promise<WebsocketStreamCountQuery>;
    },
    websocketMessagesAfter(
      variables: WebsocketMessagesAfterQueryVariables,
      options?: C,
    ): Promise<WebsocketMessagesAfterQuery> {
      return requester<
        WebsocketMessagesAfterQuery,
        WebsocketMessagesAfterQueryVariables
      >(
        WebsocketMessagesAfterDocument,
        variables,
        options,
      ) as Promise<WebsocketMessagesAfterQuery>;
    },
    websocketMessagesBefore(
      variables: WebsocketMessagesBeforeQueryVariables,
      options?: C,
    ): Promise<WebsocketMessagesBeforeQuery> {
      return requester<
        WebsocketMessagesBeforeQuery,
        WebsocketMessagesBeforeQueryVariables
      >(
        WebsocketMessagesBeforeDocument,
        variables,
        options,
      ) as Promise<WebsocketMessagesBeforeQuery>;
    },
    websocketMessagesByOffset(
      variables: WebsocketMessagesByOffsetQueryVariables,
      options?: C,
    ): Promise<WebsocketMessagesByOffsetQuery> {
      return requester<
        WebsocketMessagesByOffsetQuery,
        WebsocketMessagesByOffsetQueryVariables
      >(
        WebsocketMessagesByOffsetDocument,
        variables,
        options,
      ) as Promise<WebsocketMessagesByOffsetQuery>;
    },
    websocketMessageCount(
      variables: WebsocketMessageCountQueryVariables,
      options?: C,
    ): Promise<WebsocketMessageCountQuery> {
      return requester<
        WebsocketMessageCountQuery,
        WebsocketMessageCountQueryVariables
      >(
        WebsocketMessageCountDocument,
        variables,
        options,
      ) as Promise<WebsocketMessageCountQuery>;
    },
    websocketMessage(
      variables: WebsocketMessageQueryVariables,
      options?: C,
    ): Promise<WebsocketMessageQuery> {
      return requester<WebsocketMessageQuery, WebsocketMessageQueryVariables>(
        WebsocketMessageDocument,
        variables,
        options,
      ) as Promise<WebsocketMessageQuery>;
    },
    tamperRuleCollections(
      variables?: TamperRuleCollectionsQueryVariables,
      options?: C,
    ): Promise<TamperRuleCollectionsQuery> {
      return requester<
        TamperRuleCollectionsQuery,
        TamperRuleCollectionsQueryVariables
      >(
        TamperRuleCollectionsDocument,
        variables,
        options,
      ) as Promise<TamperRuleCollectionsQuery>;
    },
    userProfile(
      variables?: UserProfileQueryVariables,
      options?: C,
    ): Promise<UserProfileQuery> {
      return requester<UserProfileQuery, UserProfileQueryVariables>(
        UserProfileDocument,
        variables,
        options,
      ) as Promise<UserProfileQuery>;
    },
    userSettings(
      variables?: UserSettingsQueryVariables,
      options?: C,
    ): Promise<UserSettingsQuery> {
      return requester<UserSettingsQuery, UserSettingsQueryVariables>(
        UserSettingsDocument,
        variables,
        options,
      ) as Promise<UserSettingsQuery>;
    },
    workflow(
      variables: WorkflowQueryVariables,
      options?: C,
    ): Promise<WorkflowQuery> {
      return requester<WorkflowQuery, WorkflowQueryVariables>(
        WorkflowDocument,
        variables,
        options,
      ) as Promise<WorkflowQuery>;
    },
    workflows(
      variables?: WorkflowsQueryVariables,
      options?: C,
    ): Promise<WorkflowsQuery> {
      return requester<WorkflowsQuery, WorkflowsQueryVariables>(
        WorkflowsDocument,
        variables,
        options,
      ) as Promise<WorkflowsQuery>;
    },
    workflowNodeDefinitions(
      variables?: WorkflowNodeDefinitionsQueryVariables,
      options?: C,
    ): Promise<WorkflowNodeDefinitionsQuery> {
      return requester<
        WorkflowNodeDefinitionsQuery,
        WorkflowNodeDefinitionsQueryVariables
      >(
        WorkflowNodeDefinitionsDocument,
        variables,
        options,
      ) as Promise<WorkflowNodeDefinitionsQuery>;
    },
    createdAssistantMessage(
      variables?: CreatedAssistantMessageSubscriptionVariables,
      options?: C,
    ): AsyncIterable<CreatedAssistantMessageSubscription> {
      return requester<
        CreatedAssistantMessageSubscription,
        CreatedAssistantMessageSubscriptionVariables
      >(
        CreatedAssistantMessageDocument,
        variables,
        options,
      ) as AsyncIterable<CreatedAssistantMessageSubscription>;
    },
    createdAssistantMessageTask(
      variables?: CreatedAssistantMessageTaskSubscriptionVariables,
      options?: C,
    ): AsyncIterable<CreatedAssistantMessageTaskSubscription> {
      return requester<
        CreatedAssistantMessageTaskSubscription,
        CreatedAssistantMessageTaskSubscriptionVariables
      >(
        CreatedAssistantMessageTaskDocument,
        variables,
        options,
      ) as AsyncIterable<CreatedAssistantMessageTaskSubscription>;
    },
    updatedAssistantMessageTask(
      variables?: UpdatedAssistantMessageTaskSubscriptionVariables,
      options?: C,
    ): AsyncIterable<UpdatedAssistantMessageTaskSubscription> {
      return requester<
        UpdatedAssistantMessageTaskSubscription,
        UpdatedAssistantMessageTaskSubscriptionVariables
      >(
        UpdatedAssistantMessageTaskDocument,
        variables,
        options,
      ) as AsyncIterable<UpdatedAssistantMessageTaskSubscription>;
    },
    updatedViewerAssistantUsage(
      variables?: UpdatedViewerAssistantUsageSubscriptionVariables,
      options?: C,
    ): AsyncIterable<UpdatedViewerAssistantUsageSubscription> {
      return requester<
        UpdatedViewerAssistantUsageSubscription,
        UpdatedViewerAssistantUsageSubscriptionVariables
      >(
        UpdatedViewerAssistantUsageDocument,
        variables,
        options,
      ) as AsyncIterable<UpdatedViewerAssistantUsageSubscription>;
    },
    createdAuthenticationToken(
      variables: CreatedAuthenticationTokenSubscriptionVariables,
      options?: C,
    ): AsyncIterable<CreatedAuthenticationTokenSubscription> {
      return requester<
        CreatedAuthenticationTokenSubscription,
        CreatedAuthenticationTokenSubscriptionVariables
      >(
        CreatedAuthenticationTokenDocument,
        variables,
        options,
      ) as AsyncIterable<CreatedAuthenticationTokenSubscription>;
    },
    createdAutomateEntryRequest(
      variables?: CreatedAutomateEntryRequestSubscriptionVariables,
      options?: C,
    ): AsyncIterable<CreatedAutomateEntryRequestSubscription> {
      return requester<
        CreatedAutomateEntryRequestSubscription,
        CreatedAutomateEntryRequestSubscriptionVariables
      >(
        CreatedAutomateEntryRequestDocument,
        variables,
        options,
      ) as AsyncIterable<CreatedAutomateEntryRequestSubscription>;
    },
    createdAutomateTask(
      variables?: CreatedAutomateTaskSubscriptionVariables,
      options?: C,
    ): AsyncIterable<CreatedAutomateTaskSubscription> {
      return requester<
        CreatedAutomateTaskSubscription,
        CreatedAutomateTaskSubscriptionVariables
      >(
        CreatedAutomateTaskDocument,
        variables,
        options,
      ) as AsyncIterable<CreatedAutomateTaskSubscription>;
    },
    deletedAutomateTask(
      variables?: DeletedAutomateTaskSubscriptionVariables,
      options?: C,
    ): AsyncIterable<DeletedAutomateTaskSubscription> {
      return requester<
        DeletedAutomateTaskSubscription,
        DeletedAutomateTaskSubscriptionVariables
      >(
        DeletedAutomateTaskDocument,
        variables,
        options,
      ) as AsyncIterable<DeletedAutomateTaskSubscription>;
    },
    updatedAutomateTask(
      variables?: UpdatedAutomateTaskSubscriptionVariables,
      options?: C,
    ): AsyncIterable<UpdatedAutomateTaskSubscription> {
      return requester<
        UpdatedAutomateTaskSubscription,
        UpdatedAutomateTaskSubscriptionVariables
      >(
        UpdatedAutomateTaskDocument,
        variables,
        options,
      ) as AsyncIterable<UpdatedAutomateTaskSubscription>;
    },
    createdBackup(
      variables?: CreatedBackupSubscriptionVariables,
      options?: C,
    ): AsyncIterable<CreatedBackupSubscription> {
      return requester<
        CreatedBackupSubscription,
        CreatedBackupSubscriptionVariables
      >(
        CreatedBackupDocument,
        variables,
        options,
      ) as AsyncIterable<CreatedBackupSubscription>;
    },
    updatedBackup(
      variables?: UpdatedBackupSubscriptionVariables,
      options?: C,
    ): AsyncIterable<UpdatedBackupSubscription> {
      return requester<
        UpdatedBackupSubscription,
        UpdatedBackupSubscriptionVariables
      >(
        UpdatedBackupDocument,
        variables,
        options,
      ) as AsyncIterable<UpdatedBackupSubscription>;
    },
    deletedBackup(
      variables?: DeletedBackupSubscriptionVariables,
      options?: C,
    ): AsyncIterable<DeletedBackupSubscription> {
      return requester<
        DeletedBackupSubscription,
        DeletedBackupSubscriptionVariables
      >(
        DeletedBackupDocument,
        variables,
        options,
      ) as AsyncIterable<DeletedBackupSubscription>;
    },
    startedBackupTask(
      variables?: StartedBackupTaskSubscriptionVariables,
      options?: C,
    ): AsyncIterable<StartedBackupTaskSubscription> {
      return requester<
        StartedBackupTaskSubscription,
        StartedBackupTaskSubscriptionVariables
      >(
        StartedBackupTaskDocument,
        variables,
        options,
      ) as AsyncIterable<StartedBackupTaskSubscription>;
    },
    finishedBackupTask(
      variables?: FinishedBackupTaskSubscriptionVariables,
      options?: C,
    ): AsyncIterable<FinishedBackupTaskSubscription> {
      return requester<
        FinishedBackupTaskSubscription,
        FinishedBackupTaskSubscriptionVariables
      >(
        FinishedBackupTaskDocument,
        variables,
        options,
      ) as AsyncIterable<FinishedBackupTaskSubscription>;
    },
    startedRestoreBackupTask(
      variables?: StartedRestoreBackupTaskSubscriptionVariables,
      options?: C,
    ): AsyncIterable<StartedRestoreBackupTaskSubscription> {
      return requester<
        StartedRestoreBackupTaskSubscription,
        StartedRestoreBackupTaskSubscriptionVariables
      >(
        StartedRestoreBackupTaskDocument,
        variables,
        options,
      ) as AsyncIterable<StartedRestoreBackupTaskSubscription>;
    },
    finishedRetoreBackupTask(
      variables?: FinishedRetoreBackupTaskSubscriptionVariables,
      options?: C,
    ): AsyncIterable<FinishedRetoreBackupTaskSubscription> {
      return requester<
        FinishedRetoreBackupTaskSubscription,
        FinishedRetoreBackupTaskSubscriptionVariables
      >(
        FinishedRetoreBackupTaskDocument,
        variables,
        options,
      ) as AsyncIterable<FinishedRetoreBackupTaskSubscription>;
    },
    deletedBrowser(
      variables?: DeletedBrowserSubscriptionVariables,
      options?: C,
    ): AsyncIterable<DeletedBrowserSubscription> {
      return requester<
        DeletedBrowserSubscription,
        DeletedBrowserSubscriptionVariables
      >(
        DeletedBrowserDocument,
        variables,
        options,
      ) as AsyncIterable<DeletedBrowserSubscription>;
    },
    installedBrowser(
      variables?: InstalledBrowserSubscriptionVariables,
      options?: C,
    ): AsyncIterable<InstalledBrowserSubscription> {
      return requester<
        InstalledBrowserSubscription,
        InstalledBrowserSubscriptionVariables
      >(
        InstalledBrowserDocument,
        variables,
        options,
      ) as AsyncIterable<InstalledBrowserSubscription>;
    },
    updatedBrowser(
      variables?: UpdatedBrowserSubscriptionVariables,
      options?: C,
    ): AsyncIterable<UpdatedBrowserSubscription> {
      return requester<
        UpdatedBrowserSubscription,
        UpdatedBrowserSubscriptionVariables
      >(
        UpdatedBrowserDocument,
        variables,
        options,
      ) as AsyncIterable<UpdatedBrowserSubscription>;
    },
    createdDataExport(
      variables?: CreatedDataExportSubscriptionVariables,
      options?: C,
    ): AsyncIterable<CreatedDataExportSubscription> {
      return requester<
        CreatedDataExportSubscription,
        CreatedDataExportSubscriptionVariables
      >(
        CreatedDataExportDocument,
        variables,
        options,
      ) as AsyncIterable<CreatedDataExportSubscription>;
    },
    updatedDataExport(
      variables?: UpdatedDataExportSubscriptionVariables,
      options?: C,
    ): AsyncIterable<UpdatedDataExportSubscription> {
      return requester<
        UpdatedDataExportSubscription,
        UpdatedDataExportSubscriptionVariables
      >(
        UpdatedDataExportDocument,
        variables,
        options,
      ) as AsyncIterable<UpdatedDataExportSubscription>;
    },
    deletedDataExport(
      variables?: DeletedDataExportSubscriptionVariables,
      options?: C,
    ): AsyncIterable<DeletedDataExportSubscription> {
      return requester<
        DeletedDataExportSubscription,
        DeletedDataExportSubscriptionVariables
      >(
        DeletedDataExportDocument,
        variables,
        options,
      ) as AsyncIterable<DeletedDataExportSubscription>;
    },
    createdDataExportTask(
      variables?: CreatedDataExportTaskSubscriptionVariables,
      options?: C,
    ): AsyncIterable<CreatedDataExportTaskSubscription> {
      return requester<
        CreatedDataExportTaskSubscription,
        CreatedDataExportTaskSubscriptionVariables
      >(
        CreatedDataExportTaskDocument,
        variables,
        options,
      ) as AsyncIterable<CreatedDataExportTaskSubscription>;
    },
    deletedDataExportTask(
      variables?: DeletedDataExportTaskSubscriptionVariables,
      options?: C,
    ): AsyncIterable<DeletedDataExportTaskSubscription> {
      return requester<
        DeletedDataExportTaskSubscription,
        DeletedDataExportTaskSubscriptionVariables
      >(
        DeletedDataExportTaskDocument,
        variables,
        options,
      ) as AsyncIterable<DeletedDataExportTaskSubscription>;
    },
    createdFilterPreset(
      variables?: CreatedFilterPresetSubscriptionVariables,
      options?: C,
    ): AsyncIterable<CreatedFilterPresetSubscription> {
      return requester<
        CreatedFilterPresetSubscription,
        CreatedFilterPresetSubscriptionVariables
      >(
        CreatedFilterPresetDocument,
        variables,
        options,
      ) as AsyncIterable<CreatedFilterPresetSubscription>;
    },
    updatedFilterPreset(
      variables?: UpdatedFilterPresetSubscriptionVariables,
      options?: C,
    ): AsyncIterable<UpdatedFilterPresetSubscription> {
      return requester<
        UpdatedFilterPresetSubscription,
        UpdatedFilterPresetSubscriptionVariables
      >(
        UpdatedFilterPresetDocument,
        variables,
        options,
      ) as AsyncIterable<UpdatedFilterPresetSubscription>;
    },
    deletedFilterPreset(
      variables?: DeletedFilterPresetSubscriptionVariables,
      options?: C,
    ): AsyncIterable<DeletedFilterPresetSubscription> {
      return requester<
        DeletedFilterPresetSubscription,
        DeletedFilterPresetSubscriptionVariables
      >(
        DeletedFilterPresetDocument,
        variables,
        options,
      ) as AsyncIterable<DeletedFilterPresetSubscription>;
    },
    createdFinding(
      variables?: CreatedFindingSubscriptionVariables,
      options?: C,
    ): AsyncIterable<CreatedFindingSubscription> {
      return requester<
        CreatedFindingSubscription,
        CreatedFindingSubscriptionVariables
      >(
        CreatedFindingDocument,
        variables,
        options,
      ) as AsyncIterable<CreatedFindingSubscription>;
    },
    deletedFindings(
      variables?: DeletedFindingsSubscriptionVariables,
      options?: C,
    ): AsyncIterable<DeletedFindingsSubscription> {
      return requester<
        DeletedFindingsSubscription,
        DeletedFindingsSubscriptionVariables
      >(
        DeletedFindingsDocument,
        variables,
        options,
      ) as AsyncIterable<DeletedFindingsSubscription>;
    },
    createdInterceptMessage(
      variables?: CreatedInterceptMessageSubscriptionVariables,
      options?: C,
    ): AsyncIterable<CreatedInterceptMessageSubscription> {
      return requester<
        CreatedInterceptMessageSubscription,
        CreatedInterceptMessageSubscriptionVariables
      >(
        CreatedInterceptMessageDocument,
        variables,
        options,
      ) as AsyncIterable<CreatedInterceptMessageSubscription>;
    },
    updatedInterceptOptions(
      variables?: UpdatedInterceptOptionsSubscriptionVariables,
      options?: C,
    ): AsyncIterable<UpdatedInterceptOptionsSubscription> {
      return requester<
        UpdatedInterceptOptionsSubscription,
        UpdatedInterceptOptionsSubscriptionVariables
      >(
        UpdatedInterceptOptionsDocument,
        variables,
        options,
      ) as AsyncIterable<UpdatedInterceptOptionsSubscription>;
    },
    createdInterceptEntry(
      variables?: CreatedInterceptEntrySubscriptionVariables,
      options?: C,
    ): AsyncIterable<CreatedInterceptEntrySubscription> {
      return requester<
        CreatedInterceptEntrySubscription,
        CreatedInterceptEntrySubscriptionVariables
      >(
        CreatedInterceptEntryDocument,
        variables,
        options,
      ) as AsyncIterable<CreatedInterceptEntrySubscription>;
    },
    updatedInterceptEntry(
      variables?: UpdatedInterceptEntrySubscriptionVariables,
      options?: C,
    ): AsyncIterable<UpdatedInterceptEntrySubscription> {
      return requester<
        UpdatedInterceptEntrySubscription,
        UpdatedInterceptEntrySubscriptionVariables
      >(
        UpdatedInterceptEntryDocument,
        variables,
        options,
      ) as AsyncIterable<UpdatedInterceptEntrySubscription>;
    },
    deletedInterceptEntry(
      variables?: DeletedInterceptEntrySubscriptionVariables,
      options?: C,
    ): AsyncIterable<DeletedInterceptEntrySubscription> {
      return requester<
        DeletedInterceptEntrySubscription,
        DeletedInterceptEntrySubscriptionVariables
      >(
        DeletedInterceptEntryDocument,
        variables,
        options,
      ) as AsyncIterable<DeletedInterceptEntrySubscription>;
    },
    startedDeleteInterceptEntriesTask(
      variables?: StartedDeleteInterceptEntriesTaskSubscriptionVariables,
      options?: C,
    ): AsyncIterable<StartedDeleteInterceptEntriesTaskSubscription> {
      return requester<
        StartedDeleteInterceptEntriesTaskSubscription,
        StartedDeleteInterceptEntriesTaskSubscriptionVariables
      >(
        StartedDeleteInterceptEntriesTaskDocument,
        variables,
        options,
      ) as AsyncIterable<StartedDeleteInterceptEntriesTaskSubscription>;
    },
    updatedDeleteInterceptEntriesTask(
      variables?: UpdatedDeleteInterceptEntriesTaskSubscriptionVariables,
      options?: C,
    ): AsyncIterable<UpdatedDeleteInterceptEntriesTaskSubscription> {
      return requester<
        UpdatedDeleteInterceptEntriesTaskSubscription,
        UpdatedDeleteInterceptEntriesTaskSubscriptionVariables
      >(
        UpdatedDeleteInterceptEntriesTaskDocument,
        variables,
        options,
      ) as AsyncIterable<UpdatedDeleteInterceptEntriesTaskSubscription>;
    },
    finishedDeleteInterceptEntriesTask(
      variables?: FinishedDeleteInterceptEntriesTaskSubscriptionVariables,
      options?: C,
    ): AsyncIterable<FinishedDeleteInterceptEntriesTaskSubscription> {
      return requester<
        FinishedDeleteInterceptEntriesTaskSubscription,
        FinishedDeleteInterceptEntriesTaskSubscriptionVariables
      >(
        FinishedDeleteInterceptEntriesTaskDocument,
        variables,
        options,
      ) as AsyncIterable<FinishedDeleteInterceptEntriesTaskSubscription>;
    },
    createdProject(
      variables?: CreatedProjectSubscriptionVariables,
      options?: C,
    ): AsyncIterable<CreatedProjectSubscription> {
      return requester<
        CreatedProjectSubscription,
        CreatedProjectSubscriptionVariables
      >(
        CreatedProjectDocument,
        variables,
        options,
      ) as AsyncIterable<CreatedProjectSubscription>;
    },
    updatedProject(
      variables?: UpdatedProjectSubscriptionVariables,
      options?: C,
    ): AsyncIterable<UpdatedProjectSubscription> {
      return requester<
        UpdatedProjectSubscription,
        UpdatedProjectSubscriptionVariables
      >(
        UpdatedProjectDocument,
        variables,
        options,
      ) as AsyncIterable<UpdatedProjectSubscription>;
    },
    deletedProject(
      variables?: DeletedProjectSubscriptionVariables,
      options?: C,
    ): AsyncIterable<DeletedProjectSubscription> {
      return requester<
        DeletedProjectSubscription,
        DeletedProjectSubscriptionVariables
      >(
        DeletedProjectDocument,
        variables,
        options,
      ) as AsyncIterable<DeletedProjectSubscription>;
    },
    updatedReplaySession(
      variables?: UpdatedReplaySessionSubscriptionVariables,
      options?: C,
    ): AsyncIterable<UpdatedReplaySessionSubscription> {
      return requester<
        UpdatedReplaySessionSubscription,
        UpdatedReplaySessionSubscriptionVariables
      >(
        UpdatedReplaySessionDocument,
        variables,
        options,
      ) as AsyncIterable<UpdatedReplaySessionSubscription>;
    },
    updatedReplayTask(
      variables?: UpdatedReplayTaskSubscriptionVariables,
      options?: C,
    ): AsyncIterable<UpdatedReplayTaskSubscription> {
      return requester<
        UpdatedReplayTaskSubscription,
        UpdatedReplayTaskSubscriptionVariables
      >(
        UpdatedReplayTaskDocument,
        variables,
        options,
      ) as AsyncIterable<UpdatedReplayTaskSubscription>;
    },
    createdRequest(
      variables?: CreatedRequestSubscriptionVariables,
      options?: C,
    ): AsyncIterable<CreatedRequestSubscription> {
      return requester<
        CreatedRequestSubscription,
        CreatedRequestSubscriptionVariables
      >(
        CreatedRequestDocument,
        variables,
        options,
      ) as AsyncIterable<CreatedRequestSubscription>;
    },
    updatedRequest(
      variables?: UpdatedRequestSubscriptionVariables,
      options?: C,
    ): AsyncIterable<UpdatedRequestSubscription> {
      return requester<
        UpdatedRequestSubscription,
        UpdatedRequestSubscriptionVariables
      >(
        UpdatedRequestDocument,
        variables,
        options,
      ) as AsyncIterable<UpdatedRequestSubscription>;
    },
    updatedRequestMetadata(
      variables?: UpdatedRequestMetadataSubscriptionVariables,
      options?: C,
    ): AsyncIterable<UpdatedRequestMetadataSubscription> {
      return requester<
        UpdatedRequestMetadataSubscription,
        UpdatedRequestMetadataSubscriptionVariables
      >(
        UpdatedRequestMetadataDocument,
        variables,
        options,
      ) as AsyncIterable<UpdatedRequestMetadataSubscription>;
    },
    createdScope(
      variables?: CreatedScopeSubscriptionVariables,
      options?: C,
    ): AsyncIterable<CreatedScopeSubscription> {
      return requester<
        CreatedScopeSubscription,
        CreatedScopeSubscriptionVariables
      >(
        CreatedScopeDocument,
        variables,
        options,
      ) as AsyncIterable<CreatedScopeSubscription>;
    },
    updatedScope(
      variables?: UpdatedScopeSubscriptionVariables,
      options?: C,
    ): AsyncIterable<UpdatedScopeSubscription> {
      return requester<
        UpdatedScopeSubscription,
        UpdatedScopeSubscriptionVariables
      >(
        UpdatedScopeDocument,
        variables,
        options,
      ) as AsyncIterable<UpdatedScopeSubscription>;
    },
    createdSitemapEntry(
      variables?: CreatedSitemapEntrySubscriptionVariables,
      options?: C,
    ): AsyncIterable<CreatedSitemapEntrySubscription> {
      return requester<
        CreatedSitemapEntrySubscription,
        CreatedSitemapEntrySubscriptionVariables
      >(
        CreatedSitemapEntryDocument,
        variables,
        options,
      ) as AsyncIterable<CreatedSitemapEntrySubscription>;
    },
    updatedSitemapEntry(
      variables?: UpdatedSitemapEntrySubscriptionVariables,
      options?: C,
    ): AsyncIterable<UpdatedSitemapEntrySubscription> {
      return requester<
        UpdatedSitemapEntrySubscription,
        UpdatedSitemapEntrySubscriptionVariables
      >(
        UpdatedSitemapEntryDocument,
        variables,
        options,
      ) as AsyncIterable<UpdatedSitemapEntrySubscription>;
    },
    createdWsStream(
      variables: CreatedWsStreamSubscriptionVariables,
      options?: C,
    ): AsyncIterable<CreatedWsStreamSubscription> {
      return requester<
        CreatedWsStreamSubscription,
        CreatedWsStreamSubscriptionVariables
      >(
        CreatedWsStreamDocument,
        variables,
        options,
      ) as AsyncIterable<CreatedWsStreamSubscription>;
    },
    createdStreamWsMessage(
      variables: CreatedStreamWsMessageSubscriptionVariables,
      options?: C,
    ): AsyncIterable<CreatedStreamWsMessageSubscription> {
      return requester<
        CreatedStreamWsMessageSubscription,
        CreatedStreamWsMessageSubscriptionVariables
      >(
        CreatedStreamWsMessageDocument,
        variables,
        options,
      ) as AsyncIterable<CreatedStreamWsMessageSubscription>;
    },
    createdWorkflow(
      variables?: CreatedWorkflowSubscriptionVariables,
      options?: C,
    ): AsyncIterable<CreatedWorkflowSubscription> {
      return requester<
        CreatedWorkflowSubscription,
        CreatedWorkflowSubscriptionVariables
      >(
        CreatedWorkflowDocument,
        variables,
        options,
      ) as AsyncIterable<CreatedWorkflowSubscription>;
    },
    deletedWorkflow(
      variables?: DeletedWorkflowSubscriptionVariables,
      options?: C,
    ): AsyncIterable<DeletedWorkflowSubscription> {
      return requester<
        DeletedWorkflowSubscription,
        DeletedWorkflowSubscriptionVariables
      >(
        DeletedWorkflowDocument,
        variables,
        options,
      ) as AsyncIterable<DeletedWorkflowSubscription>;
    },
    updatedWorkflow(
      variables?: UpdatedWorkflowSubscriptionVariables,
      options?: C,
    ): AsyncIterable<UpdatedWorkflowSubscription> {
      return requester<
        UpdatedWorkflowSubscription,
        UpdatedWorkflowSubscriptionVariables
      >(
        UpdatedWorkflowDocument,
        variables,
        options,
      ) as AsyncIterable<UpdatedWorkflowSubscription>;
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
