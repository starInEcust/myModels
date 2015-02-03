function Common() {}
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
	}
};

