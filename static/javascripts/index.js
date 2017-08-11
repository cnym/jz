function openDoor () {
	//http://develop.zlketang.com/wxpub/app/backdoor?openid=oUCIls8bDa1gGCmWuQoyYAcG3Tjk
	$.myAjax(
		'/wxpub/app/backdoor?openid=oUCIls8bDa1gGCmWuQoyYAcG3Tjk',
		{},
		function () {
			console.log('成功')
		},
		function () {
			console.log('失败')
		},
		function () {
			console.log('出错')
		}
	);
}
window.onload = function () {
	openDoor();
}

function getData() {
	//http://develop.zlketang.com/wxpub/api/exercise?subject_id=22
	$.myAjax(
		'/wxpub/api/exercise?subject_id=22',
		{
		
		},
		function () {
			console.log('成功')
		},
		function () {
			console.log('失败')
		},
		function () {
			console.log('出错')
		}
	);
}