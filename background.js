chrome.action.onClicked.addListener(async () => {
  let url = "https://www.dreamwidth.org/inbox/";
  let tab = await chrome.tabs.create({ url });
  console.log(`Created tab ${tab.id}`);

  let user_content = await document.getElementsByClassName('InboxItem_Content usercontent');
  var first_comment_actions = user_content.getElementsByClassName('actions')[0];
  var parentLink = first_comment_actions.getElementsByTagName("a")[2];
  parentLink.click();
  console.log(`Clicked link`);
});