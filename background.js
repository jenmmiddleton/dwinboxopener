chrome.action.onClicked.addListener(async () => {
  let url = "https://www.dreamwidth.org/inbox/";
  let tab = await chrome.tabs.create({ url });
  console.log("Created tab ${tab.id}");
  sleep(2000);
  document.getElementsByClassName("InboxItem_Content usercontent").getElementsByClassName("actions")[0].getElementsByTagName("a")[2].click();
  console.log("Clicked link");
});