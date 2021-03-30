var main_inbox_url = "https://www.dreamwidth.org/inbox/";
var inbox_unread_url = window.location.href;
var max_index = 10;

if (document.getElementById('NoMessageTD')) {
  console.log(`No unread tags`);
  window.open(main_inbox_url, '_self');
} else {
    var index = 0;
    for ( ; index <= max_index; index++) {
        try {
          document.getElementsByClassName('InboxItem_Content usercontent')[index].getElementsByClassName('actions')[0].getElementsByTagName("a")[2].click();
          console.log(`Clicked parent link`);
          setTimeout(() => {  window.open(inbox_unread_url, '_blank'); }, 900);
          break;
        } catch ( errParentlink ) {
          if (errParentlink instanceof TypeError) {
            try {
              document.getElementsByClassName('InboxItem_Content usercontent')[index].getElementsByClassName('actions')[0].getElementsByTagName("a")[1].click();
              console.log(`Clicked an Entry or top-level link`);
              setTimeout(() => {  window.open(inbox_unread_url, '_blank'); }, 900);
              break;
            } catch ( errEntryLink) {
              if (errEntryLink instanceof TypeError) {
                console.log(`This is either a Message, a Circle Update, a Site Notice, Delete notifications, or an Unauthorized comment.`)
              }
            }
          }
        }
    }
    if (index > max_index) {
      console.log(`No more unread tags on current page`);
      var next_button = document.getElementById('Page_Next_1');
      if (next_button.disabled) {
          console.log(`This is the last page of the inbox`);
          window.open(main_inbox_url, '_self');
      } else {
          next_button.click();
      }
    }
}