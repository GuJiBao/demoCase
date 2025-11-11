chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'saveRecording') {
    saveRecording(message.data);
  }
});

function saveRecording(data) {
  console.log('Saving recording:', data);
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.target = '_blank';
  a.download = 'recording.crsaw';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}