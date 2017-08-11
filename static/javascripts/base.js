jQuery.myAjax = function (url, data, successfn, failCallback, errorCallback, async) {
	data = (data == null || data == '' || typeof(data) == 'undefined') ? {
		'date': new Date().getTime()
	} : data;
	
	async = (!async && async !== false) ? true : async;
	
	$.ajax({
		url: url,
		type: 'get',
		dataType: 'json',
		async: async,
		contentType: 'application/json',
		processData: false,
		//data: JSON.stringify(data),
		success: function (d) {
			if (d.resultCode == 0) { //请求成功
				successfn(d);
			} else if (d.resultCode == -3) {
				console.log('没有session');
				location.reload();
			} else { //其他情况显示后台返回的resultMsg
				/*$('body').myAlert({
					message: d.resultMsg
				});*/
				
				if (failCallback) failCallback(d);
			}
		},
		complete: function (XMLHttpRequest, textStatus) {
			//
		},
		error: function (e) {
			errorCallback && errorCallback(e);
		}
	});
};