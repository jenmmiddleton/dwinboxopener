chrome.action.onClicked.addListener(async () => {
  let url = "https://www.dreamwidth.org/inbox/";
  let tab = await chrome.tabs.create({ url });
  console.log(`Created tab ${tab.id}`);
});