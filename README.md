# yahooEmailNotSpamScript
Script the checks if there is any spam emails and transfer them to the inbox

const targetUrl = window.location.href; // get the opened URL in your browser
function sendToInbox() {
  if (targetUrl === "https://mail.yahoo.com/b/folders/6?.src=ym&reason=myc&folderType=BULK" /*that's the yahoo spam link*/) {
    const checkSpamEmail = document.getElementsByTagName("input");
    for (let i = 0; i < checkSpamEmail.length; i++) {
      if (checkSpamEmail[i].type === "checkbox") {
        checkSpamEmail[i].checked = true;  /* check every input with type checkbox in the spam */
      }
    }
    const notSpamBtn = document.getElementsByTagName("button");
    for (let j = 0; j < notSpamBtn.length; j++) {
      if (notSpamBtn[j].value === "markAsNotSpam") {
        notSpamBtn[j].click();  /* here it search for the button with the value `markAsSpam` and clicks it */
      }
    }
  } else window.location.assign("https://mail.yahoo.com/b/folders/6?.src=ym&reason=myc&folderType=BULK"); // if the URL is not the spam's got to it
}
sendToInbox(); // calling the funtion
