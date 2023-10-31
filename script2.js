const callMeButton = document.getElementById("call-me");
const reasonInput = document.getElementById("reason");

const webhookURL = "https://discord.com/api/webhooks/1166332916092108820/sjmXorqVPG-3hWLO3_Dl31Ed0HBv-voyLHW72Kf6WFhwU9I5LMag5WSA_eSfDtIW0Frp";

function sendMessageWithMention(content, userId) {
  const mention = `<@${userId}>`;
  content = `${mention}\n${content}`;

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: content,
    }),
  });
}

callMeButton.addEventListener("click", () => {
  const userId = "964511260160970793"; 
  const reason = reasonInput.value;
  const content = `:speech_left: de Inconnue:${reason ? ` "${reason}"` : ""}`;
  sendMessageWithMention(content, userId);
});

document.getElementById('call-me').addEventListener('click', function() {
  var message = document.getElementById('reason').value;

  if (message.trim() !== '') {
      var messageSent = document.getElementById('message-sent');
      messageSent.style.display = 'block';

      setTimeout(function() {
          messageSent.style.display = 'none';
      }, 2000);
  }
});
