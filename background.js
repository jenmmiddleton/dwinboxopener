function openParentLink() {
  let url = chrome.runtime.getURL("https://www.dreamwidth.org/inbox/");
  let tab = await chrome.tabs.create({ url });
  console.log(`Created tab ${tab.id}`);
  document.getElementById('$0').click();
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: openParentLink
  });
});