chrome.action.onClicked.addListener(async () => {
  let url = "https://www.dreamwidth.org/inbox/";
  let tab = await chrome.tabs.create({ url });
  console.log(`Created tab ${tab.id}`);
  let parentLink = await document.getElementsByClassName("InboxItem_Content usercontent").getElementsByClassName("actions")[0].getElementsByTagName("a")[2];
  parentLink.click();
  console.log(`Clicked link`);
});