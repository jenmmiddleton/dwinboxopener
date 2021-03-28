chrome.runtime.onInstalled.addListener(async () => {
  let url = chrome.runtime.getURL("https://www.dreamwidth.org/inbox/");
  let tab = await chrome.tabs.create({ url });
  console.log(`Created tab ${tab.id}`);
});

//function reddenPage() {
//  document.body.style.backgroundColor = 'red';
//  url = "https://www.dreamwidth.org/inbox/";
//  let tab = await chrome.tabs.create(url);
//  console.log(`Created tab ${tab.id}`);
//  document.getElementById('$0').click();
//}
//
//chrome.action.onClicked.addListener((tab) => {
//  chrome.scripting.executeScript({
//    function: reddenPage
//  });
//});