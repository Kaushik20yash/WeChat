let container = document.getElementsByClassName('online')[0];
let messages = document.querySelectorAll('.messages')
let dynamicMessages = document.getElementsByClassName('dynamic-messages')[0];

messages.forEach(message => {
    message.addEventListener('click', function() {
        container.style.display = 'none';
        dynamicMessages.style.display = 'flex';
        let name = message.querySelector('.message-text p').textContent;
        let nameSplit = name.split(" ");
    let firstName = nameSplit[0];
    let lastName = nameSplit[nameSplit.length-1];
    let firstInitial = firstName[0];
    let lastInitial = lastName[0];
    let initials = firstInitial+lastInitial;
    if(nameSplit.length==1) {
        initials = firstInitial;
    }
    dynamicMessages.innerHTML = `
    <nav style="width: 100% ; display: flex; justify-content: space-between; padding: 1em; align-items: center; box-sizing: border-box; border-top-left-radius: 1em; border-top-right-radius: 1em;">
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
`;
    });
});
