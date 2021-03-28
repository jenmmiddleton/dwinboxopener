chrome.runtime.onInstalled.addListener(async () => {
  let url = chrome.runtime.getURL("https://www.dreamwidth.org/inbox/");
  let tab = await chrome.tabs.create({ url });
  console.log(`Created tab ${tab.id}`);
});