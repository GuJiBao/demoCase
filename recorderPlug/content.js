const recordedActions = [];
const port = chrome.runtime.connect({ name: 'content-script' });


function logAction(action) {
  recordedActions.push(action);
  console.log('Recorded action:', action);
}

document.addEventListener('click', (event) => {
  logAction({
    type: 'click',
    target: event.target.tagName,
    timestamp: Date.now(),
  });
});

document.addEventListener('keydown', (event) => {
  logAction({
    type: 'keydown',
    key: event.key,
    timestamp: Date.now(),
  });
});

window.addEventListener('load', (event) => {
  logAction({
    type: 'navigate',
    url: window.location.href,
    timestamp: Date.now(),
  });
});

