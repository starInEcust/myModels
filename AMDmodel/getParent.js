/**
 * Created by 星 on 2014/8/29 0029.
 */
function getParent(containerId,parentClassName,callBack) {
	document.getElementById(containerId).addEventListener('click', function (e) {
		e.preventDefault();
		var myTarget = e.target;
		for(var i = 0; i < 10; i++){
			if(myTarget.className == parentClassName){
				callBack();
				break;
			}else{
				myTarget = myTarget.offsetParent;
//				console.log(myTarget.className);
			}
		}
	});
}
