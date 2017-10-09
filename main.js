var mainwin;

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create(
    'main.html',
    {
      id: "mainwin",
      innerBounds: { width: 1024, height: 768}
    },
    function(win) {
      mainwin = win;

      win.contentWindow.addEventListener('DOMContentLoaded', onChange);
      win.onBoundsChanged.addListener(onChange);

      // var webview = win.contentWindow.document.getElementById('webview');
      // webview.style.height = bounds.height + 'px';
      // webview.style.width = bounds.width + 'px';
    }
  );
});

function onChange() {
  var bounds = mainwin.innerBounds;

  var webview = mainwin.contentWindow.document.getElementById('webview');
  webview.style.height = bounds.height + 'px';
  webview.style.width = bounds.width + 'px';
}
