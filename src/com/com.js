var com = {
	com_api: null,
	bookmarkingData: null,
    settings: {
		config: {
			endpoint: 'https://cloud.scorm.com/lrs/MV8DROTIUE/sandbox/',
			username: 'p76t_fbqCRjfbYiCUNE',
			password: 'VBsCEqKbVbc6ncGq0-o',
			allowFail: false,
			extended: null
		},
        active: false,
        type: false,
        version: false,
        suspendData: {},
		location: false,
		interactions: [],
		assessments:[]
    },
    debug: [{
        key: "cmi.suspend_data",
        value: {}
        // value: '{"loStatus":[],"progressMeasure":0.03,"attempts":0}'
        // value: '{"loStatus":[{"id":"lo_00_01","status":1},{"id":"lo_00_02","status":1},{"id":"lo_00_03","status":1},{"id":"lo_00_04","status":1},{"id":"lo_01_01","status":1},{"id":"lo_01_02","status":0.5}],"progressMeasure":0.38,"location":"lo_01_02","attempts":0}'
        // value: '{"loStatus":[{"id":"lo_02_00","status":1},{"id":"lo_02_01","status":0}],"progressMeasure":0.5}'
        // value: '{"loStatus":[{"id":"lo_02_00","status":1},{"id":"lo_02_01","status":0}],"progressMeasure":0}',
        // interactionData: {
		// 	id: 'q1',
		// 	interaction_type: "choice",
		// 	description: "A customer wants to avoid bouncing checks. What overdraft protection solution would you offer them?",
		// 	learner_response: "a",
		// 	result: "correct",
        // }
    }],
    init(type, version, callback) {
        // console.log("COM INIT")
        com.settings.type = type;
        com.settings.version = version;

        switch (com.settings.type) {
			case "TINCAN":
				var actor = new TinCan.Agent({
					// name: "Fabian Herrera",
					// name: "Nilton Paes",
					// name: "Jan Yalda",
					// name: "Actor_01",
					// name: "Actor_02",
					// name: "Actor_03",
					name: "Actor_04",
					// name: "Actor_05",
					// name: "Actor_06",
					account: {
						homePage: "http://localhost.com",
						// name: "0000000000|fabian.herrera@tuesdayafternoon.net"
						// name: "0000000001|nilton.paes@tuesdayafternoon.net"
						// name: "0000000002|jan.yalda@tuesdayafternoon.net"
						// name: "0000000003|actor_1@tuesdayafternoon.net"
						// name: "0000000004|actor_2@tuesdayafternoon.net"
						// name: "0000000005|actor_3@tuesdayafternoon.net"
						name: "0000000006|actor_4@tuesdayafternoon.net"
						// name: "0000000007|actor_5@tuesdayafternoon.net"
						// name: "0000000008|actor_6@tuesdayafternoon.net"
					}
				});
				// To Do: Get activity from tincan.xml file
				var activity = new TinCan.Activity({
					id: "http://test.xapi/citi-xapi-prototype"
				});
				var initParams = {};
				if(location.hostname === "localhost"){
					initParams.actor = actor;
					initParams.activity = activity;
				}else{
					initParams.url = window.location.href;
				}
				try {
					com.com_api = new TinCan(initParams);
					// Forces to set the LRS from settings.config. This line should be commented out when delivering to client's LMS/LRS.
					com.com_api.recordStores = [new TinCan.LRS (com.settings.config)];
					console.log('TinCan is ready: ');
				} catch (ex) {
					console.log('Failed to setup TinCan object: ', ex);
					if (app) {
                        app.errorMessage = app.$t("errors.lostcommunication");
                        app.$bvModal.show("errorModal");
                    }
				}
				if(com.com_api){
					com.settings.active = true;
					com.bookmarkingData = new BookmarkingTracking();
					com.set({
						statement: {
							verb: verbs.initialized,
							result: {
								duration: "PT0S"
							}
						},
						callback: function () {}
					});
					var attemptedStatement = {
						verb: verbs.attempted,
						result: {
							duration: "PT0S"
						}
					};
					//get activity_id bookmark if it exists
					com.bookmarkingData.get(function(bookmark){
						if (bookmark !== null) {
							app.$bvModal.msgBoxConfirm(app.$t("bookmark.message"), {
								noCloseOnBackdrop: true,
								noCloseOnEsc: true,
								title: app.$t("bookmark.title"),
								size: 'lg',
								okVariant: 'primary',
								okTitle: app.$t("bookmark.ok"),
								cancelTitle: app.$t("bookmark.cancel"),
								headerClass: 'border-0',
								contentClass: 'rounded-0 border-0',
								footerClass: 'd-flex justify-content-center border-0'
							  })
								.then(function (value) {
									if (value) {
										com.bookmarkingData.initFromBookmark(bookmark);
										com.return_suspendData(com.bookmarkingData.getSuspendData());

										// get interactions saved on bookmarking
										com.settings.interactions = _.cloneDeep(com.bookmarkingData.getInteractions());
										// get assessments saved on bookmarking
										com.settings.assessments = _.cloneDeep(com.bookmarkingData.getAssessments());

										rte.load(com.bookmarkingData.getPage());
										if (!com.bookmarkingData.getCompletion()) {
											com.set({
												statement: {
													verb: verbs.resumed,
													result: {
														duration: TinCan.Utils.convertMillisecondsToISO8601Duration(bookmark.attemptDuration)
													}
												},
												callback: function () {}
											});
										}
										if (callback && typeof callback !== "undefined") {
											callback();
										}
									} else {
										com.bookmarkingData.reset();
										com.set({
											statement: attemptedStatement,
											callback: function () {}
										});
										com.bookmarkingData.save(function(){
											console.log('New attempt')
										});
										if (callback && typeof callback !== "undefined") {
											callback();
										}
									}
								})
								.catch(function (err) {
									console.log('An error occurred:' + err);
									if (callback && typeof callback !== "undefined") {
										callback();
									}
								})
						} else {
							com.set({
								statement: attemptedStatement,
								callback: function () {}
							});
							if (callback && typeof callback !== "undefined") {
								callback();
							}
						}
					});
				}else{
					console.log("COM", "API Error: API not found.");
                    if (app) {
                        app.errorMessage = app.$t("errors.lostcommunication");
                        app.$bvModal.show("errorModal");
					}
					if (callback && typeof callback !== "undefined") {
						callback();
					}
				}
			break;
            case "SCORM":
                // case SCORM
                com.com_api = pipwerks.SCORM;
                com.com_api.version = "2004";
                // First LMS Call
                console.log("COM", "Initializing course.");
                var callSucceeded = false;
                if (com.settings.active) {
                    callSucceeded = true;
                } else {
                    callSucceeded = com.com_api.init();
                }
                console.log("COM", "Call succeeded? " + callSucceeded);
                if (callSucceeded) {
                    com.settings.active = true;
                    switch (com.settings.version) {
                        case "1.2":
							com.set("cmi.core.exit", "suspend");
							timeUtility.sco_start();
							com.return_suspendData(com.get("cmi.suspend_data"));
                            com.settings.location = com.get("cmi.core.lesson_location");
                            break;
                        case "2004":
							// Successfactors - Chrome Bug Fix
							com.set("cmi.exit", "suspend");
							timeUtility.sco_start();
							com.return_suspendData(com.get("cmi.suspend_data"));
							com.settings.interactions = com.getAllInteractions(); //Interactions are READ ONLY in SCORM 1.2
                            com.settings.location = com.get("cmi.location");
                            break;
                    }
                    com.com_api.save();
                } else {
                    console.log("COM", "API Error: API not found.");
                    if (app) {
                        app.errorMessage = app.$t("errors.lostcommunication");
                        app.$bvModal.show("errorModal");
                    }
				}
				if (callback && typeof callback !== "undefined") {
					callback();
				}
                break;
            case "DEBUG":
                console.log("COM", "INIT'ING IN DEBUG MODE ()");
                com.settings.active = true;
                timeUtility.sco_start();
				com.return_suspendData(com.get("cmi.suspend_data"));
				if (callback && typeof callback !== "undefined") {
					callback();
				}
                break;
        }
    },
    exit: function() {
        switch (com.settings.type) {
			case "TINCAN":
                com.bookmarkingData.save(function(){
					if (!com.bookmarkingData.getCompletion()){
						com.set({
							statement: {
								verb: verbs.suspended,
								result: {
									duration: TinCan.Utils.convertMillisecondsToISO8601Duration(com.bookmarkingData.getAttemptDuration())
								}
							},
							callback: function () {}
						});
					}
					com.set({
						statement: {
							verb: verbs.terminated,
							result: {
								duration: TinCan.Utils.convertMillisecondsToISO8601Duration(com.bookmarkingData.getSessionDuration())
							}
						},
						callback: function () {
							top.window.close();
						}
					});
				}); 
                break;
            case "SCORM":
                timeUtility.sco_set_session_time();
                console.log("COM", "Terminating connection.");
                var callSucceeded = com.com_api.quit();
				console.log("COM", "Call succeeded? " + callSucceeded);
				if(callSucceeded){
					top.window.close();
				}
                break;
            case "DEBUG":
                console.log("COM", "(DEBUG) Terminating connection.");
                break;
        }
    },
    set: function(payload, value) {
        switch (com.settings.type) {
			case "TINCAN":
				if (payload === "cmi.suspend_data") {
					com.bookmarkingData.setSuspendData(value);
					com.bookmarkingData.save(function (){
						console.log('Suspend Data saved');
					});
					if(com.settings.suspendData.progressMeasure > 0){
						com.set({
							statement: {
								verb: verbs.progressed,
								result: {
									score:{
										scaled: com.settings.suspendData.progressMeasure
									 },
									duration: TinCan.Utils.convertMillisecondsToISO8601Duration(com.bookmarkingData.getAttemptDuration())
								}
							},
							callback: function () {}
						});
					}
				}else{
					console.log("COM", "Sending: '" + payload.statement.verb.id + "'");
					new Promise(function (resolve, reject) {
						com.com_api.sendStatement(
							payload.statement,
							function (errorArray, data) {
								var error = _.find(errorArray, function(item) { 
									return item.err !== null; 
								});
								if (error) {
									if (app) {
										app.errorMessage = 'Failed to save statement: ' + error.xhr.responseText + ' (error code: '+ error.err + ')';
										app.$bvModal.show("errorModal");
									}
									console.log('Failed to save statement: ' + error.xhr.responseText + ' (error code: '+ error.err + ')');
									reject(error);
								} else {
									if (payload.callback) payload.callback(data);
									console.log('Statement saved');
									resolve();
								}
							}
						);
					});
				}
				break;
            case "SCORM":
				console.log("COM:", "Sending: '" + value + "'");
                var callSucceeded = com.com_api.set(payload, value);
                if (!callSucceeded) {
                    console.log("COM:", "Call failed? " + callSucceeded);
                    if (payload === "cmi.suspend_data") {
                        app.errorMessage = app.$t("errors.lostcommunication");
                        app.$bvModal.show("errorModal");
                    }
                }
                break;
            case "DEBUG":
                console.log("COM:", "(DEBUG) Sending: " + payload + " = " + value);
                break;
        }
    },
    get: function(payload) {
        switch (com.settings.type) {
			case "TINCAN":
				new Promise(function (resolve, reject){
					if(payload.params.id){
						console.log("COM", "Getting statement by ID: " + payload.params.id);
						com.com_api.getStatement(
							payload.params.id,
							function (err, data) {
								if (err) {
									if (app) {
										app.errorMessage = 'Failed to query statement by ID: ' + data.responseText + ' (error code: '+ err + ')';
										app.$bvModal.show('errorModal');
									}
									console.log('Failed to query statement by ID: ' + data.responseText + ' (error code: '+ err + ')');
									reject(err);
								} else {
									if (payload.callback) payload.callback([data]);
									resolve();
								}
							}
						);
					}else{
						console.log("COM", "Getting statements: '" + payload.params.activity + " "+ payload.params.verb + "'");
						com.com_api.getStatements({
							params: payload.params,
							callback: function (err, data) {
								if (err) {
									if (app) {
										app.errorMessage = 'Failed to query statements: ' + data.responseText + ' (error code: '+ err + ')';
										app.$bvModal.show("errorModal");
									}
									console.log('Failed to query statements: ' + data.responseText + ' (error code: '+ err + ')');
									reject(err);
								} else {
									if (data.more !== null) {
										// TODO: additional page(s) of statements should be fetched
									}
									if (payload.callback) payload.callback(data.statements);
									resolve();
								}
							}
						});
					}
				});
				break;
            case "SCORM":
                console.log("COM", "Getting: '" + payload + "'");
                var returnValue = com.com_api.get(payload);
                return returnValue;
            case "DEBUG":
                console.log("COM", "(DEBUG) Getting: '" + payload + "'");
                for (var i = 0; i < com.debug.length; i++) {
                    if ((com.debug[i].key = payload)) {
                        return com.debug[i].value;
                    }
                }
                break;
        }
    },
    setCompletion: function(value) {
        switch (com.settings.type) {
			case "TINCAN":
				if(value === "completed"){
					com.bookmarkingData.setCompletion(true);
					com.bookmarkingData.save(function(){
						console.log('Completion saved');
					});
					com.set({
						statement: {
							verb: verbs.completed,
							result: {
								completion: true,
								duration: TinCan.Utils.convertMillisecondsToISO8601Duration(com.bookmarkingData.getAttemptDuration())
							}
						},
						callback: function () {}
					});
				}
				break;
            case "SCORM":
                switch (com.settings.version) {
                    case "1.2":
                        return com.set("cmi.core.lesson_status", value);
                    case "2004":
                        return com.set("cmi.completion_status", value);
                }
			case "DEBUG":
				console.log("com", "setCompletion called");
				break;
        }
    },
    getCompletion: function() {
        switch (com.settings.type) {
			case "TINCAN":
				return com.bookmarkingData.getCompletion();
            case "SCORM":
                switch (com.settings.version) {
                    case "1.2":
                        return com.get("cmi.core.lesson_status");
                    case "2004":
                        return com.get("cmi.completion_status");
                }
			case "DEBUG":
				console.log("com", "getCompletion called");
				break;
        }
    },
    setSuccessStatus: function(value, set12Status) {
        switch (com.settings.type) {
            case "SCORM":
                switch (com.settings.version) {
                    case "1.2":
                        if (set12Status !== undefined && set12Status === true) {
                            return com.set("cmi.core.lesson_status", value);
                        }
                        break;
                    case "2004":
                        return com.set("cmi.success_status", value);
                }
			case "DEBUG":
				console.log("com", "setSuccessStatus called");
				break;
        }
    },
    getSuccessStatus: function() {
        switch (com.settings.type) {
            case "SCORM":
                switch (com.settings.version) {
                    case "1.2":
                        return com.get("cmi.core.lesson_status");
                    case "2004":
                        return com.get("cmi.success_status");
                }
			case "DEBUG":
				console.log("com", "getSuccessStatus called");
				break;
        }
    },
    setLocation: function(page_id) {
        switch (com.settings.type) {
			case "TINCAN":
				com.bookmarkingData.setPage(page_id);
				com.bookmarkingData.save(function (){
					com.settings.location = page_id;
				});
				break;
            case "SCORM":
                switch (com.settings.version) {
                    case "1.2":
                        com.set("cmi.core.lesson_location", page_id);
                        break;
                    case "2004":
                        com.set("cmi.location", page_id);
                        break;
                }
			case "DEBUG":
				console.log("com", "setLocation called");
				break;
        }
	},
	setLanguage: function(lang) {
        switch (com.settings.type) {
            case "SCORM":
                switch (com.settings.version) {
                    case "1.2":
                        com.set("cmi.student_preference.language", lang);
                        break;
                    case "2004":
                        com.set("cmi.learner_preference.language", lang);
                        break;
                }
			case "DEBUG":
				console.log("com", "setLanguage called");
				break;
        }
	},
	getLanguage: function() {
        switch (com.settings.type) {
            case "SCORM":
                switch (com.settings.version) {
                    case "1.2":
                        return com.get("cmi.student_preference.language");
                    case "2004":
                        return com.get("cmi.learner_preference.language");
                }
			case "DEBUG":
				console.log("com", "getLanguage called");
				break;
        }
    },
	getAllInteractions: function (payload) {
		switch (com.settings.type) {
            case "SCORM":
				var interactionsChildrenArr = ['id', 'type', 'learner_response', 'description', 'result'];
				var interactions = [];
				var interactionsCount = parseInt(com.get("cmi.interactions._count"), 10);
				if (interactionsCount > 0) {
					for (var n = 0; n < interactionsCount; n++) {
						var interaction = { cmiIndex: n.toString() };
						for (var i = 0; i < interactionsChildrenArr.length; i++) {
							var key = interactionsChildrenArr[i];
							var keyString = 'cmi.interactions.' + n + '.' + key;
							interaction[key] = com.get(keyString);
						}
						interactions.push(interaction);
					}
				}
				return interactions;
			case "DEBUG":
				console.log("com", "getAllInteractions called");
				break;
        }
	},	
	getAssessmentByIdFromBookMarking: function (payload) {
		switch (com.settings.type) {
			case "TINCAN":
				var temp_assessment = activities.assessment.id;
				temp_assessment += "/" + payload.id.toLowerCase();
				return _.find(com.settings.assessments, { 'id': temp_assessment });
        }
	},		
	getInteractionById: function (payload) {
		switch (com.settings.type) {
			case "TINCAN":
				var temp_activity = payload.activityId;
				temp_activity += "/" + payload.id.toLowerCase();
				return _.find(com.settings.interactions, { 'id': temp_activity });
            case "SCORM":
                switch (com.settings.version) {
                    case "1.2":
						return _.find(com.settings.suspendData.interactions, { 'id': payload.id });
                    case "2004":
                        return _.find(com.settings.interactions, { 'id': payload.id });
                }
			case "DEBUG":
				console.log("com", "getInteractionById called");
				break;
        }
	},
	setAssessment: function (payload) {
		var temp_obj = {};
		// using assign to not directly edit the activites obj
		_.assign(temp_obj, activities.assessment);
		temp_obj.id += "/" + payload.id.toLowerCase();

		var verb = verbs[payload.verb];

		com.set({
			statement: {
				verb: verb,
				object: temp_obj,
				result: {
					completion: (payload.result==true || payload.result==false) ? true : false,
					success: payload.result,
					score: payload.score
				}
			},
			callback: function (statement) {
				// save/update assessments used for bookmarking
				var found = _.find(com.settings.assessments, { 'id': statement.target.id });
				if (found) {
					found.verb = payload.verb;
				}
				else {
					var assessment = {
						id: statement.target.id,
						verb: payload.verb
					};
					com.settings.assessments.push(assessment);
				}				

				// save bookmarking
				com.bookmarkingData.setAssessments(com.settings.assessments);
				com.bookmarkingData.save(function(){
					console.log('Assessments saved');
				});
			}
		});
	},
	setInteraction: function (interaction) {
		switch (com.settings.type) {
			case "TINCAN":
				var temp_obj = {};
				// using assign to not directly edit the activites obj
				_.assign(temp_obj, interaction.activity);
				temp_obj.id += "/" + interaction.id.toLowerCase();
				temp_obj.definition.interactionType = interaction.interaction_type.toLowerCase();
				com.set({
					statement: {
						verb: verbs.answered,
						object: temp_obj,
						result: {
							completion: interaction.submitted,
							response: JSON.stringify(interaction.learner_response),
							success: interaction.result == "correct" ? true : false
						},
						context: {
							contextActivities: {  
								parent: [  
								{  
									id: activities.assessment.id + "/" + interaction.assessmentId,  
									objectType: "Activity"  
								}  
								]  	
							}							
						}							
					},
					callback: function (statement) {
						// save/update interactions used for bookmarking
						var found = _.find(com.settings.interactions, { 'id': statement.target.id });
						if (found) {
							found.response = statement.result.response;
						}
						else {
							var interaction = {
								id: statement.target.id,
								response: statement.result.response
							};
							com.settings.interactions.push(interaction);
						}

						// save bookmarking
						com.bookmarkingData.setInteractions(com.settings.interactions);
						com.bookmarkingData.save(function(){
							console.log('Interactions saved');
						});
					}
				});
				break;
            case "SCORM":
				var interact, cmiIndex;
				switch (com.settings.version) {
                    case "1.2":
						interact = _.find(com.settings.suspendData.interactions, { 'id': interaction.id });
						if(interact){
							cmiIndex = interact.cmiIndex;
						}else{
							if ("interactions" in com.settings.suspendData) {
								cmiIndex = com.settings.suspendData.interactions.length.toString();
							}else{
								cmiIndex = '0';
							}
							interaction.cmiIndex = cmiIndex;
						}
						break;
                    case "2004":
						interact = _.find(com.settings.interactions, { 'id': interaction.id });
						cmiIndex = interact ? interact.cmiIndex ? interact.cmiIndex : com.settings.interactions.length.toString() : com.settings.interactions.length.toString();
						break;
				}
				var keyStem = 'cmi.interactions.' + cmiIndex + '.';
				var succeded = com.set(keyStem + 'id', interaction.id);
				if (interaction.interaction_type) {
					com.set(keyStem + 'type', interaction.interaction_type);
				}
				if (interaction.latency) {
					com.set(keyStem + 'latency', interaction.latency);
				}
				if (interaction.weighting) {
					com.set(keyStem + 'weighting', interaction.weighting);
				}
				if (interaction.correct_responses) {
					switch (interaction.interaction_type) {
						case "choice":
							com.set(keyStem + 'correct_responses.0.pattern', interaction.correct_responses);
							break;
					}
				}
                switch (com.settings.version) {
                    case "1.2":
                        if (interaction.learner_response) {
							com.set(keyStem + 'student_response', interaction.learner_response);
						}
						if (interaction.result) {
							com.set(keyStem + 'result', interaction.result == "incorrect" ? "wrong" : interaction.result);
						}
						if (interaction.timestamp) {
							com.set(keyStem + 'time', interaction.timestamp);
						}
						com.update_interaction(interaction);
						break;
                    case "2004":
						if (interaction.learner_response) {
							com.set(keyStem + 'learner_response', interaction.learner_response);
                        }
                        if (interaction.result) {
							com.set(keyStem + 'result', interaction.result);
						}
						if (interaction.timestamp) {
							com.set(keyStem + 'timestamp', interaction.timestamp);
                        }
                        if (interaction.description) {
							com.set(keyStem + 'description', interaction.description);
						}
						com.settings.interactions.push(interaction);
                        break;
                }
			case "DEBUG":
				console.log("com", "setInteraction called");
				break;
        }
		return succeded;
	},
	update_interaction: function(interaction){
		if (!("interactions" in com.settings.suspendData)) {
            com.settings.suspendData.interactions = [];
        }
		var found = false;
		for (var i = 0; i < com.settings.suspendData.interactions.length; i++) {
			if (com.settings.suspendData.interactions[i].id === interaction.id) {
				com.settings.suspendData.interactions[i] = interaction;
				found = true;
			}
		}
		if (!found) {
			com.settings.suspendData.interactions.push(interaction);
		}
		com.set("cmi.suspend_data", JSON.stringify(com.settings.suspendData));
        timeUtility.sco_set_session_time();
	},
    update_suspendData: function(page_id) {
		switch (com.settings.type) {
			case "TINCAN":
				var page = _.find(manifest.content, { 'id': page_id });
				if(page){
					var verb = null;
					var temp_obj = {};
					_.assign(temp_obj, activities.page);
					temp_obj.id += page_id.toLowerCase();
					if(page.status === 0.5){
						verb = verbs.initialized;
					}else{
						if(page.status === 1){
							verb = verbs.completed;
						}
					}
					com.set({
						statement: {
							verb: verb,
							object: temp_obj
						},
						callback: function (statement) {
							console.log("page status updated","page_id: " + page_id + " is now: " + statement.verb);
						}
					});
				}else{
					console.log("page with id: " +page_id+ " doesn't exist");
				}
				break;
		}
		// count for progress
		var count = 0;
		// first time creating suspend data !("key" in obj)
		if (!("loStatus" in com.settings.suspendData)) {
			com.settings.suspendData.loStatus = [];
		}
		for (var i = 0; i < manifest.content.length; i++) {
			if (page_id === manifest.content[i].id) {
				var found = false;
				for (var j = 0; j < com.settings.suspendData.loStatus.length; j++) {
					if (com.settings.suspendData.loStatus[j].id === page_id) {
						com.settings.suspendData.loStatus[j].status = manifest.content[i].status;
						console.log("update_suspendData","page_id: " + page_id);
						found = true;
					}
				}
				if (!found) {
					var loStatusObject = {
						id: manifest.content[i].id,
						status: manifest.content[i].status
					};
					com.settings.suspendData.loStatus.push(loStatusObject);
				}
			}
		}
		// count for progress
		for (var i = 0; i < manifest.content.length; i++) {
			if(manifest.content[i].status == 1){
				count++;
			}
		}
		com.settings.suspendData.progressMeasure = Math.round((count / manifest.content.length) * 100) / 100;
		com.settings.suspendData.attempts = manifest.settings.tracking.attempts;
		com.set("cmi.suspend_data", JSON.stringify(com.settings.suspendData));
		timeUtility.sco_set_session_time();
		if (manifest.settings.tracking.progressMeasure && com.settings.suspendData.progressMeasure == 1) {
			// progressMeasure to set complete
			com.setCompletion("completed");
			com.setSuccessStatus("passed", true);
		}
    },
    return_suspendData: function(suspendData) {
        console.log("return_suspendData", suspendData);
        if (suspendData.length > 1 && suspendData != null && suspendData != "") {
            rte.settings.return = true;
            try {
                var _suspendData = $.parseJSON(suspendData);
                if (typeof _suspendData.loStatus !== "undefined") {
                    com.settings.suspendData = _suspendData;
                }
            } catch (error) {
                console.log(
                    "Found cmi.suspendData, but encountered error parsing JSON, will reset."
                );
                console.warn(error);
            }
        }
	},
	return_interactions: function(interactions) {

	},
	isOwnStatement: function (statement) {
		var isOwn = false;
		if (statement.actor.mbox !== null) {
			isOwn = com.com_api.actor.mbox === statement.actor.mbox;
		}else{
			if(statement.actor.account !== null){
				isOwn = com.com_api.actor.account.name === statement.actor.account.name;
			}
		}
		return isOwn;
	}
};
var timeUtility = {
    ///// SESSION TIME
    timeInitialized: false,
    sco_start: function() {
        timeUtility.timeInitialized = new Date();
    },
    sco_set_session_time: function() {
        if (timeUtility.timeInitialized) {
            var dtm = new Date();
            var n = dtm.getTime() - timeUtility.timeInitialized.getTime();
            switch (com.settings.type) {
                case "SCORM":
                    switch (com.settings.version) {
                        case "1.2":
                            com.set("cmi.core.session_time", timeUtility.MillisecondsToCMIDuration(n));
                            break;
                        case "2004":
                            com.set("cmi.session_time", timeUtility.CentisecsToISODuration(Math.floor(n / 10)));
                            break;
                    }
				case "DEBUG":
					console.log("cmi.session_time");
					break;
            }
        }
    },
    MillisecondsToCMIDuration: function(n) {
        //Convert duration from milliseconds to 0000:00:00.00 format
        let hms = "";
        let dtm = new Date();
        dtm.setTime(n);
        let h = "000" + Math.floor(n / 3600000);
        let m = "0" + dtm.getMinutes();
        let s = "0" + dtm.getSeconds();
        let cs = "0" + Math.round(dtm.getMilliseconds() / 10);
        hms = h.substr(h.length - 4) + ":" + m.substr(m.length - 2) + ":";
        hms += s.substr(s.length - 2) + "." + cs.substr(cs.length - 2);
        return hms;
    },
    CentisecsToISODuration: function(n) {
        n = Math.max(n, 0); // there is no such thing as a negative duration
        var str = "P";
        var nCs = n;
        // Next set of operations uses whole seconds
        var nY = Math.floor(nCs / 3155760000);
        nCs -= nY * 3155760000;
        var nM = Math.floor(nCs / 262980000);
        nCs -= nM * 262980000;
        var nD = Math.floor(nCs / 8640000);
        nCs -= nD * 8640000;
        var nH = Math.floor(nCs / 360000);
        nCs -= nH * 360000;
        var nMin = Math.floor(nCs / 6000);
        nCs -= nMin * 6000;
        // Now we can construct string
        if (nY > 0) str += nY + "Y";
        if (nM > 0) str += nM + "M";
        if (nD > 0) str += nD + "D";
        if (nH > 0 || nMin > 0 || nCs > 0) {
            str += "T";
            if (nH > 0) str += nH + "H";
            if (nMin > 0) str += nMin + "M";
            if (nCs > 0) str += nCs / 100 + "S";
        }
        if (str == "P") str = "PT0H0M0S"; // technically PT0S should do but SCORM test suite assumes longer form.
        return str;
    }
};
// Failsafe for exit window
window.onunload = function() {
    if (com.settings.active) {
        com.exit();
    }
};