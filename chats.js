let container = document.getElementsByClassName("online")[0];
let messages = document.querySelectorAll(".messages");
let dynamicMessages = document.getElementsByClassName("dynamic-messages")[0];

messages.forEach((message) => {
  message.addEventListener("click", function () {
    container.style.display = "none";
    dynamicMessages.style.display = "flex";
    let name = message.querySelector(".message-text p").textContent;
    let nameSplit = name.split(" ");
    let firstName = nameSplit[0];
    let lastName = nameSplit[nameSplit.length - 1];
    let firstInitial = firstName[0];
    let lastInitial = lastName[0];
    let initials = firstInitial + lastInitial;
    if (nameSplit.length == 1) {
      initials = firstInitial;
    }
    dynamicMessages.innerHTML = `
    <nav style="height: 10% ; width: 100% ; display: flex; justify-content: space-between; padding: 1em; align-items: center; box-sizing: border-box; border-top-left-radius: 1em; border-top-right-radius: 1em;">
    <div style="display: flex; gap: 1em;">
    <div style="font-size: 1em; padding: 0.2em; width: 1.4em; height: 1.4em; border-radius: 50%; background-color: rgb(28, 126, 246); color: white; display: flex; justify-content: center; align-items: center;" id="mess-profile">${initials}</div>
    <h3>${name}</h3>
    </div>
    <div id="icons" style="display: flex; gap: 1em;">
        <div class="iconItem"><i class="fa-solid fa-video"></i></div>
        <div class="iconItem"><i class="fa-solid fa-phone"></i></div>
        <div class="iconItem"><i class="fa-solid fa-magnifying-glass"></i></div>
    </div>
    </nav>
    <div id="chatArea"></div>
    <div id="messaging">
    <i class="fa-solid fa-face-smile" style="width: 5%; cursor: pointer;" id="emoji-button"></i>
    <i class="fa-solid fa-paperclip" style="width: 5%;"></i>
    <input type="text" id="input" class="no-border" placeholder="Type a message" style="width: 80%; height: 100%;border-radius:1.2em">
    <i class="fa-solid fa-paper-plane" style="width: 5%; cursor: pointer;" id="send"></i>
    <i class="fa-solid fa-microphone" style="width: 5%;"></i>
</div>
`;
    let messageField = document.getElementById("input");
    let send = document.getElementById("send");
    send.addEventListener("click", function () {
      let message = document.createElement("div");
      message.style.padding = "0.6em";
      message.style.backgroundColor = "rgba(0, 0, 255, 0.574)";
      message.style.color = "white";
      message.style.borderRadius = "0.2em";
      message.style.borderTopLeftRadius = "0.7em";
      message.style.borderTopRightRadius = "0.7em";
      message.style.borderBottomLeftRadius = "0.7em";
      message.style.borderBottomRightRadius = "0.2em";
      message.style.margin = "0.5em";
      message.style.width = "50%";
      message.style.boxSizing = "border-box";
      message.style.display = "flex";
      message.style.justifySelf = "flex-end";
      message.textContent = messageField.value;
      messageField.value = "";
      document.querySelector("#chatArea").appendChild(message);
      let compareValue = message.textContent.toLowerCase();
      if (compareValue == "hello") {
        let reply = document.createElement("div");
        reply.style.padding = "0.6em";
        reply.style.backgroundColor = "rgba(185, 182, 182, 0.73)";
        reply.style.color = "white";
        reply.style.borderTopLeftRadius = "0.7em";
        reply.style.borderTopRightRadius = "0.7em";
        reply.style.borderBottomLeftRadius = "0.2em";
        reply.style.borderBottomRightRadius = "0.7em";
        reply.style.margin = "0.5em";
        reply.style.width = "50%";
        reply.style.boxSizing = "border-box";
        reply.style.display = "flex";
        reply.style.flexWrap = "wrap";
        reply.style.justifySelf = "flex-start";
        reply.textContent = "Hi";
        document.querySelector("#chatArea").appendChild(reply);
      } else if (compareValue == "how are you?") {
        let reply = document.createElement("div");
        reply.style.padding = "0.6em";
        reply.style.backgroundColor = "rgba(185, 182, 182, 0.73)";
        reply.style.borderTopLeftRadius = "0.7em";
        reply.style.borderTopRightRadius = "0.7em";
        reply.style.borderBottomLeftRadius = "0.2em";
        reply.style.borderBottomRightRadius = "0.7em";
        reply.style.color = "white";
        reply.style.margin = "0.5em";
        reply.style.width = "50%";
        reply.style.boxSizing = "border-box";
        reply.style.display = "flex";
        reply.style.flexWrap = "wrap";
        reply.style.justifySelf = "flex-start";
        reply.textContent = "I am fine, what about you?";
        document.querySelector("#chatArea").appendChild(reply);
      }
    });
  });
});
