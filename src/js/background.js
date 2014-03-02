chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	var resp = '';
	var url = 'http://fanyi.youdao.com/openapi.do?keyfrom=huacicha&key=199079426&type=data&doctype=json&version=1.1&q=' + request.msg
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
	    var resp = xhr.responseText;
	    sendResponse({msg: resp});
	  }
	}
	xhr.send();
});