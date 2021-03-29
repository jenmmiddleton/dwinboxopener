chrome.action.onClicked.addListener(async () => {
  var url = "https://www.dreamwidth.org/inbox/?view=unread";
  let window = await chrome.windows.create({ url });
  console.log(`Created window ${window.id}`);
});