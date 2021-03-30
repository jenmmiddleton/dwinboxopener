var main_inbox_url = "https://www.dreamwidth.org/inbox/";
var inbox_unread_url = window.location.href;

if not(document.getElementsById('NoMessageTD') {

    Number index = 0;
    do {
        try {
          document.getElementsByClassName('InboxItem_Content usercontent')[{index}].getElementsByClassName('actions')[0].getElementsByTagName("a")[2].click();
          console.log(`Clicked a Parent link`);
          window.open(inbox_unread_url, '_blank');
        } catch ( errParentlink ) {
          if (errParentlink instanceof TypeError) {
            try {
              document.getElementsByClassName('InboxItem_Content usercontent')[{index}].getElementsByClassName('InboxItem_Unread')[0].getElementsByTagName("a")[1].click();
              console.log(`Clicked an Entry or top-level link`);
              window.open(inbox_unread_url, '_blank');
            } catch ( errEntryLink) {
              if (errParentlink instanceof TypeError) {
                index = index + 1;
                console.log(`This is either a Message, a Circle Update, a Site Notice, or an Unauthorized comment.`)
              }
            }
          }
        }
    } while (index <= 10);

    console.log(`No more unread tags on current page`);
    var next_button = document.getElementsById('Page_Next_1');
    if (next_button.disabled) {
        console.log(`This is the last page of the inbox`);
        window.open(main_inbox_url, '_self');
    } else {
        next_button.click();
    }
} else {
    console.log(`No unread tags`);
    window.open(main_inbox_url, '_self');
}