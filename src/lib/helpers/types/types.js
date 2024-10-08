/**
 * @typedef {Object} UserModel
 * @property {string} id - The user id.
 * @property {string} [user_name] - User name
 * @property {string} [first_name] - The user first name.
 * @property {string} [last_name] - The user last name.
 * @property {string} [full_name] - The user full name.
 * @property {string} [email] - The user email.
 * @property {string} source - Account source.
 * @property {string} [external_id] - The user external id.
 * @property {string} [create_date] - The user create date.
 * @property {string} [update_date] - The user update date.
 * @property {string} [role] - The user role.
 * @property {string} [avatar] - The user avatar.
 * @property {string} [color]
 * @property {string} [token]
 */

/**
 * @typedef {Object} Pagination
 * @property {number} page - The plugin full name.
 * @property {number} size - The plugin name.
 * @property {number} count - Row count.
 */

/**
 * @typedef {Object} KeyValuePair
 * @property {string} key - The key.
 * @property {string} value - The value.
 */

/**
 * @typedef {Object} IdName
 * @property {string} id - The id.
 * @property {string} name - The name.
 */

/**
 * @template T
 * @typedef {Object} PagedItems<T>
 * @property {number} count - Row count.
 * @property {T[]} items - Items.
 */

/**
 * @typedef {Object} PluginDefModel
 * @property {string} id - The plugin full name.
 * @property {string} name - The plugin name.
 * @property {string} description - The plugin description.
 * @property {string} assembly - The plugin assembly.
 * @property {boolean} is_core
 * @property {string} icon_url
 * @property {string} [settings_name]
 * @property {string[]} agent_ids
 * @property {boolean} enabled
 */

/**
 * @typedef {Object} PluginMenuDefModel
 * @property {string} label
 * @property {string} icon
 * @property {string} link
 * @property {boolean} isHeader
 */

/**
 * @typedef {Object} PluginFilter
 * @property {Pagination} pager - Pagination
 */

/**
 * @typedef {Object} AgentWelcomeInfo
 * @property {string[]} messages - The welcome messages in Rich content format.
 */

/**
 * @typedef {Object} AgentTemplate
 * @property {string} name
 * @property {string} content
 */

/**
 * @typedef {Object} AgentLlmConfig
 * @property {boolean} is_inherit - Inherited from default Agent settings
 * @property {string?} provider 
 * @property {string?} model
 * @property {number} max_recursion_depth
 */

/**
 * @typedef {Object} ChannelInstruction
 * @property {string} channel 
 * @property {string} instruction
 */

/**
 * @typedef {Object} LlmModelSetting
 * @property {string} name
 * @property {string} type
 */

/**
 * @typedef {Object} FunctionDef
 * @property {string} name 
 * @property {string} description
 */

/** 
 * @typedef {Object} AgentFilter
 * @property {Pagination} pager - Pagination
 * @property {string} [type]
 * @property {boolean} [isPublic]
 * @property {boolean} [disabled]
 * @property {string[]} [agentIds]
 */

/**
 * @typedef {Object} AgentModel
 * @property {string} id - Agent Id.
 * @property {string} name - Agent name.
 * @property {string} description - Agent description.
 * @property {string} type - Agent type
 * @property {string} instruction - System prompt
 * @property {ChannelInstruction[]} channel_instructions - Channel instructions
 * @property {boolean} disabled
 * @property {boolean} is_public
 * @property {boolean} is_host
 * @property {boolean} allow_routing
 * @property {string} icon_url - Icon
 * @property {string[]} profiles - The agent profiles.
 * @property {string[]} utilities - The agent utilities.
 * @property {Date} created_datetime
 * @property {Date} updated_datetime
 * @property {AgentLlmConfig} llm_config - LLM settings.
 * @property {PluginDefModel} plugin
 * @property {FunctionDef[]} functions
 * @property {AgentTemplate[]} templates
 * @property {Object[]} responses
 * @property {RoutingRule[]} routing_rules
 * @property {AgentWelcomeInfo} welcome_info - Welcome information.
 * @property {boolean} editable
 */

/**
 * @typedef {Object} AgentSettings
 * @property {string} dataDir
 * @property {string} templateFormat
 * @property {AgentLlmConfig} llmConfig - LLM settings.
 */

/** 
 * @typedef {Object} AgentTaskFilter
 * @property {Pagination} pager - Pagination
 * @property {string} [agentId] - The agent id.
 */

/**
 * @typedef {Object} AgentTaskModel
 * @property {string} id - Task id.
 * @property {string} name - Task name.
 * @property {string} description - Description.
 * @property {string} content - Task detail.
 * @property {boolean} enabled
 * @property {Date} created_datetime
 * @property {Date} updated_datetime
 * @property {string} agent_id - Description.
 * @property {string} agent_name - Task detail.
 * @property {string} direct_agent_id - Run task directly in this agent.
 */


/**
 * @typedef {Object} InstructMessageModel
 * @property {string} [instruction] - User provided prompt instead of predefined template.
 * @property {string} [template] - The template name.
 */

/**
 * @typedef {Object} RoutingRule
 * @property {string} type
 * @property {string} field
 * @property {string} description
 * @property {string} fieldType
 * @property {boolean} required
 * @property {string} redirectTo
 * @property {string?} [redirect_to_agent]
 */

/**
 * @typedef {Object} RouterSettings
 * @property {string} planner
 */

/**
 * @typedef {Object} MessageConfig
 * @property {string} [taskId] - Optional task id.
 */

/**
 * @typedef {Object} ConversationFilter
 * @property {Pagination} pager - Pagination
 * @property {string?} [agentId] - The agent id.
 * @property {string?} [channel] - The conversation channel.
 * @property {string?} [status] - The conversation status.
 * @property {string?} [taskId] - The task id.
 * @property {KeyValuePair[]} [states] - The conversation status.
 */

/**
 * @typedef {Object} ConversationModel
 * @property {string} id - The conversation id.
 * @property {string} title - The conversation title.
 * @property {UserModel} user - The conversation initializer.
 * @property {string} agent_id - The conversation agent id.
 * @property {string} agent_name - The conversation entry agent name.
 * @property {string} channel - The conversation status.
 * @property {string} [task_id] - Optional task id.
 * @property {string} status - The conversation status.
 * @property {Object[]} states - The conversation states. 
 * @property {Date} updated_time - The conversation updated time.
 * @property {Date} created_time - The conversation created time.
 */


// File models
/**
 * @typedef {Object} FileModel
 * @property {string} file_name - The file name.
 * @property {string} file_data - The file data.
 * @property {string} file_url - The file url.
 */

/**
 * @typedef {Object} TextFileModel
 * @property {string} file_name - The file name.
 * @property {string} [file_extension] - The file extension.
 * @property {string} file_data - The file data or url.
 */

/**
 * @typedef {Object} AudioFileModel
 * @property {string} name - The audio name.
 * @property {string} [artist] - The audio author.
 * @property {string} cover - The audio cover.
 * @property {string} url - The audio url.
 * @property {string} [theme] - The audio theme.
 */


// Speech
/**
 * @typedef {Object} SpeechModel
 * @property {string} id
 * @property {SpeechSynthesis} synth
 * @property {SpeechSynthesisUtterance} utterThis
 * @property {() => void} stop
 * @property {() => boolean} isPlaying
 */

/**
 * @typedef {Object} AudioModel
 * @property {string} id
 * @property {HTMLAudioElement} player
 * @property {() => void} stop
 */


/**
 * @interface
 * @class
 * @classdesc A basic rich content interface.
 */
function IRichContent() {}

/**
 * The type of the rich content.
 *
 * @name rich_type
 * @type {string}
 * @instance
 */
IRichContent.prototype.rich_type;

/**
 * The text of the rich content.
 *
 * @name text
 * @type {string}
 * @instance
 */
IRichContent.prototype.text;

/**
 * The options of the rich content.
 *
 * @name options
 * @type {any[]}
 * @instance
 */
IRichContent.prototype.options;

/**
 * The buttons of the rich content.
 *
 * @name buttons
 * @type {any[]}
 * @instance
 */
IRichContent.prototype.buttons;

/**
 * The elements of the rich content.
 *
 * @name elements
 * @type {any[]}
 * @instance
 */
IRichContent.prototype.elements;

/**
 * The quick replies of the rich content.
 *
 * @name quick_replies
 * @type {any[]}
 * @instance
 */
IRichContent.prototype.quick_replies;

/**
 * @typedef {Object} TextMessage
 * @property {string} text
 * @property {string} rich_type 
 */

/**
 * @typedef {Object} QuickReplyElement
 * @property {string} content_type
 * @property {string} title
 * @property {string} payload
 * @property {string} image_url 
 */

/**
 * @typedef {Object} QuickReplyMessage
 * @property {string} text
 * @property {string} rich_type
 * @property {QuickReplyElement[]} quick_replies
 */

/**
 * @typedef {Object} RichContent
 * @property {string} messaging_type
 * @property {boolean} fill_postback
 * @property {string} editor
 * @property {string?} [editor_attributes]
 * @property {IRichContent} message
 */

/**
 * @typedef {Object} ChatResponseModel
 * @property {string} conversation_id - The conversation id.
 * @property {UserModel} sender - The message sender.
 * @property {string} message_id - The message id.
 * @property {string} text - The message content.
 * @property {string} editor - The message editor.
 * @property {string} function - The function name.
 * @property {RichContent} rich_content - Rich content.
 * @property {string} post_action_disclaimer - The message disclaimer.
 * @property {string} data - The message data.
 * @property {Date} created_at - The message sent time.
 * @property {boolean} has_message_files
 * @property {boolean} is_chat_message
 */

/**
 * @typedef {Object} ConversationContentLogModel
 * @property {string} conversation_id - The conversation id.
 * @property {string} message_id - The message id.
 * @property {string} name - The sender name.
 * @property {string} agent_id = The agent id.
 * @property {string} role - The sender role.
 * @property {string} source - The log source.
 * @property {string} content - The log content.
 * @property {Date} created_at - The log sent time.
 */

/**
 * @typedef {Object} ConversationStateLogModel
 * @property {string} conversation_id - The conversation id.
 * @property {string} message_id - The message id.
 * @property {Object} states - The states content.
 * @property {Date} created_at - The log sent time.
 */

/**
 * @typedef {Object} MessageStateLogModel
 * @property {string} conversation_id - The conversation id.
 * @property {string} message_id - The message id.
 * @property {string} before_value - The value before change.
 * @property {number?} before_active_rounds - The state active rounds before change.
 * @property {string} after_value - The value after change.
 * @property {number?} after_active_rounds - The state active rounds after change.
 * @property {string} data_type - The state value data type.
 * @property {string} source - The state source.
 * @property {Date} created_at - The log sent time.
 */

/**
 * @typedef {Object} AgentQueueLogModel
 * @property {string} conversation_id - The conversation id.
 * @property {string} log - The log content.
 * @property {Date} created_at - The log sent time.
 */

/** 
 * Conversation states added by user
 * 
 * @typedef {Object} UserStateDetailModel
 * @property {{data: string, isValid: boolean}} key - The state key.
 * @property {{data: string, isValid: boolean}} value - The state value.
 * @property {{data: number, isValid: boolean}} active_rounds - The state active rounds.
 */

/** 
 * Conversation states added by user
 * 
 * @typedef {Object} ConversationUserStateModel
 * @property {string} conversationId - The conversation id.
 * @property {UserStateDetailModel[]} states - The states added by user.
 */


/** 
 * Conversation sender action
 * 
 * @typedef {Object} ConversationSenderActionModel
 * @property {string} conversation_id - The conversation id.
 * @property {number} sender_action - The sender action.
 * @property {string} [indication] - The function indication.
 */

/** 
 * Conversation message deleted
 * 
 * @typedef {Object} ConversationMessageDeleteModel
 * @property {string} conversation_id - The conversation id.
 * @property {string} message_id - The message id.
 */

/** 
 * Conversation postback
 * 
 * @typedef {Object} Postback
 * @property {string?} functionName - The function name.
 * @property {string?} payload - The payload.
 * @property {string?} parentId - The parent message id.
 */

/** 
 * Conversation send message data
 * 
 * @typedef {Object} MessageData
 * @property {string?} [truncateMsgId] - The truncated message.
 * @property {string?} [inputMessageId] - The input message.
 * @property {string[]?} [states] - The states input by user.
 * @property {Postback?} [postback] - The parent message id.
 * @property {string?} [payload] - The payload message.
 */

// Knowledgebase
/**
 * @typedef {Object} SearchKnowledgeRequest
 * @property {string} text - The text.
 * @property {string[]} [fields] - Data fields.
 * @property {number} [limit] - Data limit.
 * @property {number} [confidence] - Confidence.
 * @property {boolean} [with_vector] - Include vector or not.
 */

/**
 * @typedef {Object} KnowledgeFilter
 * @property {string | null} [start_id] - The start id.
 * @property {number} size - Page size.
 * @property {boolean} [with_vector] - Include vector or not.
 */

/**
 * @typedef {Object} KnowledgeSearchViewModel
 * @property {string} id - The knowledge data id.
 * @property {any} data - The knowledge data.
 * @property {number} [score] - The knowledge score.
 * @property {number[]} [vector] - The knowledge vector.
 */

/**
 * @typedef {Object} KnowledgeSearchPageResult
 * @property {number} count - The total data count.
 * @property {KnowledgeSearchViewModel[]} items - The data items.
 * @property {string} [next_id] - The next id.
 */


/**
 * Invoked when a new conersation is created.
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback OnConversationInitialized
 * @param {ConversationModel} conversation
 */

/**
 * Invoked when message is received form chatHub.
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback OnMessageReceived
 * @param {ChatResponseModel} message
 */

/**
 * Invoked when speech to text is detected.
 *
 * @callback OnSpeechToTextDetected
 * @param {string} text
 */

/** 
 * Conversation content log
 * 
 * @callback OnConversationContentLogReceived
 * @param {ConversationContentLogModel} log
 */

/** 
 * Conversation state log
 * 
 * @callback OnConversationStateLogGenerated
 * @param {ConversationStateLogModel} log
 */

/** 
 * Conversation state change log
 * 
 * @callback OnStateChangeGenerated
 * @param {MessageStateLogModel} log
 */

/** 
 * Agent queue changed log
 * 
 * @callback OnAgentQueueChanged
 * @param {AgentQueueLogModel} log
 */

/** 
 * Conversation sender action
 * 
 * @callback OnSenderActionGenerated
 * @param {ConversationSenderActionModel} data
 */

/** 
 * Conversation message deleted
 * 
 * @callback OnConversationMessageDeleted
 * @param {ConversationMessageDeleteModel} data
 */

// having to export an empty object here is annoying, 
// but required for vscode to pass on your types. 
export default {};