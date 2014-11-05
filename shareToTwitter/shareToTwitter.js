var shareInfo = {
	PAGE : 0,
	VOTE_MORE : 1,
	DOWNLOADED : 2,

	team : null,
	type : this.PAGE,
	preview: null,
}

function sharePage(){
	console.log("sharePage");
	if(!window.CTKJavaScriptHandler){
		return;
	}

	window.shareInfo.team = null;
	window.shareInfo.type = shareInfo.PAGE;
	window.CTKJavaScriptHandler.shareMessage(JSON.stringify({
		"type" : window.tpConfig.SHARE_CHANNEL,
		"msg" : window.tpConfig.share_msg.SHARE_PAGE,
		"callback" : "onShared",
	}));
}

function doShare(){
	var type = window.shareInfo.type;
	var team = window.shareInfo.team;
	var info = window.tpConfig.getShareInfo(type, team);
	if(!info){
		return;
	}

	var imageUrl = "";
	if(team && team.skin && team.skin.length > 0){
		imageUrl = location.href.substring(0, location.href.lastIndexOf('/') + 1) + "skin/" + team.skin[0].preview;
	}

	if(window.CTKJavaScriptHandler){
		if(type == window.tpConfig.SHARE_TYPE_VOTED && team){
			voteForTeam(team, true);
		}
		gaEvent("share", "do-share", team ? team.id : "null");
		shareTwitterViaHandler(info.actionSummary, imageUrl, team ? team.id : "null");
	}else if(type == window.tpConfig.SHARE_TYPE_NO_TOUCHPAL){
		if(isAndroidDevice()){
			window.location.href = "http://play.google.com/store/apps/details?id=com.cootek.smartinputv5";
			gaEvent("redirect", "market", team ? team.id : "null");
		}else{
			window.location.href = "https://play.google.com/store/apps/details?id=com.cootek.smartinputv5";
			gaEvent("redirect", "web-google-play", team ? team.id : "null");
		}
	}else{
		shareTwitterViaWeb(info.actionSummary);
	}

	hideShareDialog();
}

function shareTwitterViaHandler(text, imageUrl, id){
	if(!window.CTKJavaScriptHandler){
		return;
	}

	if(window.CTKJavaScriptHandler.isInstalled("com.twitter.android", "")){
		console.log("launchLocalApp");
		gaEvent("share", "localApp2");
		text = text.replace("#TouchPalWC", "#TouchPal_WC");
		window.CTKJavaScriptHandler.launchLocalApp("com.twitter.android", "android.intent.action.VIEW", "twitter://post?text=" + encodeURIComponent(text), "", false);
	}else{
		console.log("shareMessage");
		gaEvent("share", "shareSDK2");
		window.CTKJavaScriptHandler.shareMessage(JSON.stringify({
			"type" : "twitter",
			"msg" : text,
			"callback" : "onShared",
			"imageUrl" : imageUrl,
		}));
	}
}
