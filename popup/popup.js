document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
// document.getElementById('fillForm').addEventListener('click', autoInput, false);

function handleFileSelect(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    const content = e.target.result;
    const data = parseContent(content);
    chrome.storage.local.set({ formData: data });

  };
  reader.readAsText(file);
}

function parseContent(content) {
//   var arraydata = content.split('\r\n');
//   $.each(arraydata, function(index, value) {
//     console.log(index + " : " + value);
// });

  // 假设文本文件每行一个字段，使用换行符分隔
  return content.split('\n').map(line => line.trim());
}


document.getElementById('fillForm').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'setValue' });
  });
});
document.getElementById('searchForm').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'getValue' });
  });
});


function autoInput(){

  // alert(6666);
  
  // chrome.tabs.executeScript({
  //   code : 'console.log(123);'
  // });


}