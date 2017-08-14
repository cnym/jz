function openDoor () {
	$.myAjax(
		'/wxpub/app/backdoor',
		{
			openid: 'oVcu4v4dVN2rXfrPpSvzQWfJAcL0'
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
window.onload = function () {
	openDoor();
}

function getData() {
	$.myAjax(
		'/wxpub/api/exercise',
		{
			subject_id: 22,
			name: {
				a: 'b',
				c: 'q'
			}
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