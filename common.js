function Common() {
}
Common.prototype.isSkinInstalled = function (skinPkg) {
	if (window.IMEHandler) {
		return window.IMEHandler.isSkinPackageInstalled(skinPkg)
	}
};
Common.prototype.toast = function (msg) {
	if (window.CTKJavaScriptHandler) {
		window.CTKJavaScriptHandler.showToast(msg, 1);
	}
};
Common.prototype.downloadSkinPackage = function (pkgName, apkUrl, pkgTitle) {
	if (window.IMEHandler) {
		window.IMEHandler.downloadSkinPackage(pkgName, apkUrl, pkgTitle);
	} else {
		return false
	}
};
Common.prototype.isInstall = function (pkgName) {
	if (window.CTKJavaScriptHandler) {
		return window.CTKJavaScriptHandler.isInstalled(pkgName, null)
	}
};
Common.prototype.moreShare = function (msg) {
	if (window.CTKJavaScriptHandler) {
		window.CTKJavaScriptHandler.showSystemShareDialog(msg);
	}
};
Common.prototype.shareMessage = function (obj) {
	if (window.CTKJavaScriptHandler) {
		window.CTKJavaScriptHandler.shareMessage(JSON.stringify(obj));
	}
};
Common.prototype.isIOS = function () {
	return (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent));
};
Common.prototype.launchGooglePlayWithPkg = function (url) {
	if (!window.CTKJavaScriptHandler || !window.CTKJavaScriptHandler.launchLocalApp) {
		return false;
	}
	window.CTKJavaScriptHandler.launchLocalApp('com.android.vending', 'android.intent.action.VIEW', url, "", false)
};

