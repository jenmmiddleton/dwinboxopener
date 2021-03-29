var inbox_unread_url = "https://www.dreamwidth.org/inbox/?view=unread";

try {
  document.getElementsByClassName('InboxItem_Content usercontent')[0].getElementsByClassName('actions')[0].getElementsByTagName("a")[2].click();
  console.log(`Clicked link`);
  window.open(inbox_unread_url, '_blank');
} catch ( err ) {
  if (err instanceof TypeError) {
    console.log(`No unread tags`);
    window.close();
  }
}