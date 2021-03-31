var main_inbox_url = "https://www.dreamwidth.org/inbox/";
var inbox_unread_url = window.location.href;
var next_button = document.getElementById('Page_Next_1');

var max_tags_key = "max_tags";
var max_tags_value = localStorage.getItem(max_tags_key);
if (max_tags_value === null) {
    max_tags_value = prompt("Please enter the max number of Tags to open: ", 5);
}

if (document.getElementById('NoMessageTD')) {
  window.open(main_inbox_url, '_self');
  console.log(`No unread tags`);
} else if (parseInt(max_tags_value) == 0) {
  setTimeout(() => { window.open(main_inbox_url, '_self'); }, 900);
  console.log(`Maximum number of open tags reached.`);
  localStorage.removeItem(max_tags_key);
} else {
    var user_elements = document.getElementsByClassName('InboxItem_Content usercontent');
    console.log(`Number of interactable elements: ${user_elements.length}`);
    if (user_elements.length == 0) {
        if (next_button.disabled) {
            console.log(`This is the last page of the inbox`);
            window.open(main_inbox_url, '_self');
        } else {
            next_button.click();
        }
    } else {
        var index = 0;
        var max_index = Math.min(max_tags_value, user_elements.length);
        for ( ; index <= max_index; index++) {
            try {
                var actions_area = user_elements[index].getElementsByClassName('actions');
                var actions_links = actions_area[0].getElementsByTagName("a");

                if (actions_area === null || actions_links === null) {
                  console.log(`This is either a Message, a Circle Update, a Site Notice, Delete notifications, or an Unauthorized comment.`);
                } else if (actions_links.length == 2) {

                  actions_links[1].click();
                  setTimeout(() => { console.log(`Clicked an Entry or top-level link`); }, 900);
                  localStorage.removeItem(max_tags_key);
                  var new_max_tags = parseInt(max_tags_value) - 1;
                  localStorage.setItem(max_tags_key, new_max_tags);
                  console.log(`New Max Tags: ${new_max_tags}`);
                  window.open(inbox_unread_url, '_blank');
                  break;

                } else {

                  actions_links[2].click();
                  setTimeout(() => { console.log(`Clicked parent link`); }, 900);
                  localStorage.removeItem(max_tags_key);
                  var new_max_tags = parseInt(max_tags_value) - 1;
                  localStorage.setItem(max_tags_key, new_max_tags);
                  console.log(`New Max Tags: ${new_max_tags}`);
                  window.open(inbox_unread_url, '_blank');
                  break;

                }
            } catch ( err ) {
                console.log(`There are no links in the action area to click.`)
            }
        }
        if (index > max_index) {

          console.log(`No more unread tags on current page`);
          if (next_button.disabled) {
              console.log(`This is the last page of the inbox`);
              window.open(main_inbox_url, '_self');
          } else {
              next_button.click();
          }

        }
    }
}