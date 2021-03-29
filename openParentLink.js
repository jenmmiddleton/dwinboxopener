var inbox_unread_url = "https://www.dreamwidth.org/inbox/?view=unread";

var allCookies;
var maxTags;
var originalMaxTags;
var tag_name = "maxTags=";
var allCookies = decodeURIComponent(document.cookie);
var ca = allCookies.split(';');
for(var i = 0; i <ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0) == ' ') {
    c = c.substring(1);
  }
  if (c.indexOf(tag_name) == 0) {
    originalMaxTags = c.substring(tag_name.length, c.length);
  }
}

if (originalMaxTags) {
  maxTags = originalMaxTags;
  console.log(`Max tags: ` + maxTags)
} else {
  maxTags = prompt("Please enter the max number of Tags to open: ", 25);
}

if (parseInt(maxTags) > 0) {
  try {
    document.getElementsByClassName('InboxItem_Content usercontent')[0].getElementsByClassName('actions')[0].getElementsByTagName("a")[2].click();
    console.log(`Clicked link`);

    var newValue = parseInt(maxTags) - 1;
    var oldStr = "maxTags=" + maxTags;
    var newStr = "maxTags=" + newValue;
    if (originalMaxTags) {
      document.cookie = String(document.cookie).replace(oldStr, newStr);
    } else {
      var thirtyDays = 1000*60*60*24*30;
      var expires = new Date((new Date()).valueOf() + thirtyDays);
      var metadata = ";visited=true;expires=" + expires.toUTCString();
      document.cookie = document.cookie + newStr + metadata;
    }
    window.open(inbox_unread_url, '_blank');
  } catch ( err ) {
    if (err instanceof TypeError) {
      console.log(`No unread tags`);
      setTimeout(() => {  window.close(); }, 1800);
    }
  }
} else {
  console.log(`Max number of open tags reached.`);
}