const targetUrl = window.location.href;
function sendToInbox() {
  if (targetUrl === "https://mail.yahoo.com/b/folders/6?.src=ym&reason=myc&folderType=BULK") {
    const checkSpamEmail = document.getElementsByTagName("input");
    for (let i = 0; i < checkSpamEmail.length; i++) {
      if (checkSpamEmail[i].type === "checkbox") {
        checkSpamEmail[i].checked = true;
      }
    }
    const notSpamBtn = document.getElementsByTagName("button");
    for (let j = 0; j < notSpamBtn.length; j++) {
      if (notSpamBtn[j].value === "markAsNotSpam") {
        notSpamBtn[j].click();
      }
    }
  } else window.location.assign("https://mail.yahoo.com/b/folders/6?.src=ym&reason=myc&folderType=BULK");
}
sendToInbox();
