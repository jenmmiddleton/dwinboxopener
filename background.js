//function openParentLink() {
//}
//
//chrome.action.onClicked.addListener((tab) => {
//  chrome.scripting.executeScript({
//    target: { tabId: tab.id },
//    function: openParentLink
//  });
//});

function reddenPage() {
  document.body.style.backgroundColor = 'red';
  let url = "https://www.dreamwidth.org/inbox/";
  let tab = await chrome.tabs.create({ url });
  console.log(`Created tab ${tab.id}`);
  document.getElementById('$0').click();
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: reddenPage
  });
});