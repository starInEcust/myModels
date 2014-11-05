

function doShare(shareMessage) {
	window.CTKJavaScriptHandler.shareMessage(JSON.stringify({
		"type" : shareMessage.sharetype,
		"msg" : shareMessage.text,
		"title" : shareMessage.title,
		"callback" : "onShared",
		"imageUrl" : shareMessage.imageUrl
	}));
}
function onShared() {

}
