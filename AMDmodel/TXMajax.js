/*

 (new AjaxRequest()).send({
 type: 'GET',
 url: _url,
 timeout: 10 * 1000,
 dataType: 'json',
 success: success_personal_query,
 error: error_personal_query
 });
 */
define(function () {
	function AjaxRequest() {
		// Try the XMLHttpRequest object first
		if (window.XMLHttpRequest) {
			try {
				this.request = new XMLHttpRequest();
			} catch (e) {
				this.request = null;
			}
			// Now try the ActiveX (IE) version
		} else if (window.ActiveXObject) {
			try {
				this.request = new ActiveXObject("Msxml2.XMLHTTP");
				// Try the older ActiveX object for older versions of IE
			} catch (e) {
				try {
					this.request = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e) {
					this.request = null;
				}
			}
		}
		// If the request creation failed, notify the user
		if (this.request == null) {
			console.log("Ajax error creating the request.\n" + "Details: " + e);
		}

		this.timeout;
		this.global = false;
	}

	AjaxRequest.sendBefore = function () {
	};

	AjaxRequest.sendSuccess = function () {
	};

	AjaxRequest.sendError = function () {
	};

// Send an Ajax request to the server  type, url, asyn, handler, dataType, timeout, postDataType, postData, beforeSend, success, error
	AjaxRequest.prototype.send = function (opt) {
		var self = this;

		if (self.request != null) {
			// Kill the previous request
			self.request.abort();
			//set timeout
			if (opt.timeout) {
				self.timeout = setTimeout(function () {
					self.request.abort();
					opt.error(self.request, 'timeout');
					clearTimeout(self.timeout);
				}, opt.timeout);
			}
			//set asyn
			opt.asyn = !opt.asyn ? opt.asyn : true;
			//set dataType
			opt.dataType = opt.dataType ? opt.dataType : 'text';
			//set global
			self.global = opt.global ? opt.global : false;
			//run sendBefore
			if (self.global && typeof AjaxRequest.sendBefore == 'function') {
				AjaxRequest.sendBefore({type: 'ajaxSend'}, self.request, opt);
			}
			//run beforeSend
			if (opt.beforeSend) {
				opt.beforeSend();
			}
			try {
				self.request.onreadystatechange = function () {
					if (self.getReadyState() == 4) {
						var _status = self.getStatus();
						if ((_status >= 200 && _status < 300) || _status == 304) {
							clearTimeout(self.timeout);
							switch (opt.dataType) {
								case 'text':
									opt.success(self.getResponseText(), _status);
									break;
								case 'xml':
									opt.success(self.getResponseXML(), _status);
									break;
								case 'json':
									opt.success(JSON.parse(self.getResponseText()), _status);
									break;
							}
							if (self.global && typeof AjaxRequest.sendSuccess == 'function') {
								AjaxRequest.sendSuccess({type: 'ajaxSuccess'}, self.request, opt);
							}
						} else if (_status >= 400) {
							clearTimeout(self.timeout);
							switch (opt.dataType) {
								case 'text':
									opt.error(self.request, self.getStatus(), null, self.getResponseText());
									break;
								case 'xml':
									opt.error(self.request, self.getStatus(), null, self.getResponseXML());
									break;
								case 'json':
									opt.error(self.request, self.getStatus(), null, JSON.parse(self.getResponseText()));
									break;
								default:
									opt.error(self.request, self.getStatus(), null, self.getResponseText());
									break;
							}
						}
					}
				}
				self.request.open(opt.type, opt.url, opt.asyn); // always asynchronous (true)
				if (opt.type.toLowerCase() == "get") {
					// Send a GET request; no data involved
					self.request.send(null);
				} else {
					// Send a POST request; the last argument is data
					opt.postDataType = opt.postDataType ? opt.postDataType : 'application/x-www-form-urlencoded';
					self.request.setRequestHeader("Content-Type", opt.postDataType);
					self.request.send(opt.postData);
				}
			} catch (e) {
				clearTimeout(self.timeout);
				switch (opt.dataType) {
					case 'text':
						opt.error(self.request, self.getStatus(), e, self.getResponseText());
						break;
					case 'xml':
						opt.error(self.request, self.getStatus(), e, self.getResponseXML());
						break;
					case 'json':
						opt.error(self.request, self.getStatus(), e, JSON.parse(self.getResponseText()));
						break;
					default:
						opt.error(self.request, self.getStatus(), e, self.getResponseText());
						break;
				}

				if (self.global && typeof AjaxRequest.sendError == 'function') {
					AjaxRequest.sendError({type: 'ajaxError'}, self.request, opt);
				}
				console.log("Ajax error communicating with the server.\n" + "Details: " + e);
			}
		}
	}

	AjaxRequest.prototype.getReadyState = function () {
		return this.request.readyState;
	};

	AjaxRequest.prototype.getStatus = function () {
		return this.request.status;
	};

	AjaxRequest.prototype.getResponseText = function () {
		return this.request.responseText;
	};

	AjaxRequest.prototype.getResponseXML = function () {
		return this.request.responseXML;
	};
	return AjaxRequest;
});



