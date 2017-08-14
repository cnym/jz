jQuery.myAjax = function (url, data, successfn, failCallback, errorCallback, completeCallback) {
	data = (data == null || data == '' || typeof(data) == 'undefined') ? {
		'date': new Date().getTime()
	} : data;
	
	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'json',
		contentType: 'application/json',
		data: data,
		success: function (d, textStatus) {
			console.log(222222)
			if (d.errcode == 0) { //请求成功
				successfn(d);
			} else if (d.errcode == -3) {
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
			completeCallback && completeCallback(arguments);
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			errorCallback && errorCallback(errorThrown);
		}
	});
};