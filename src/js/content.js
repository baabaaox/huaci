function butty(data) {
  html = '\
  <div id="huaciWarpper">\
    <div id="huaciMain">\
      <div id="huaciHead">\
        <b>' + data['query'] + '</b>\
        <span>/' + data['basic']['phonetic'] + '/</span>\
      </div>\
      <div id="huaciBody">\
        <p>' + data['translation'] + '</p>\
      </div>\
    </div>\
  </div>\
  <div id="huaciArrow">\
    <div id="huaciArrowInner"></div>\
    <div id="huaciArrowOuter"></div>\
  </div>';
  if (document.getElementById('huaci')) {
    document.body.removeChild(document.getElementById('huaci'));
  }
  huaci = document.createElement('div');
  huaci.id = 'huaci';
  document.body.appendChild(huaci);
  huaci.innerHTML = html;
  selection = document.getSelection();
  pos = selection.getRangeAt(0).getClientRects()[0];
  x = parseInt(pos.left);
  y = parseInt(pos.top);
  huaci.style.left = (x + document.body.scrollLeft - 30) + 'px';
  huaci.style.top = (y + document.body.scrollTop - 120) + 'px';

}

function trans(msg) {
  chrome.extension.sendRequest({msg: msg}, function(response) {
    data = JSON.parse(response.msg);
    butty(data);
  });
}

word = '';
document.ondblclick = function() {
  word = document.getSelection().toString();
  trans(word);
};
document.onclick = function() {
  if (document.getElementById('huaci')) {
    document.body.removeChild(document.getElementById('huaci'));
  }
}