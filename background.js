chrome.action.onClicked.addListener(async () => {
  var url = "https://www.dreamwidth.org/inbox/?view=unread";
  let tab = await chrome.tabs.create({ url });
  console.log(`Created tab ${tab.id}`);
});