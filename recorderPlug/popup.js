document.getElementById('start-recording').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ['content.js']
    });
  });
});

document.getElementById('stop-recording').addEventListener('click', () => {
  // 可以在这里添加停止录制的逻辑
});

document.getElementById('save-recording').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { type: 'saveRecording' });
  });
});