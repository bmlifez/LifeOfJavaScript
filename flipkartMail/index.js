const Unread = document.getElementById('Unread');
const Read = document.getElementById('Read');
const Favourites = document.getElementById('Favourites');
const leftPanel = document.getElementById('leftPanel');
const rightPanel = document.getElementById('rightPanel');
const nameHeadline = document.getElementById('nameHeadline');

let readEmails = [];
let unReadEmails = [];
let favouritesEmails = [];

let currentPage = 1;

document.addEventListener('DOMContentLoaded', () => {
    showLeftPanel();
});

Unread.addEventListener('click', function () {
    Unread.classList.add('selected');
    Read.classList.remove('selected');
    Favourites.classList.remove('selected');
});

Read.addEventListener('click', function () {
    Read.classList.add('selected');
    Unread.classList.remove('selected');
    Favourites.classList.remove('selected');
});

Favourites.addEventListener('click', function () {
    Favourites.classList.add('selected');
    Read.classList.remove('selected');
    Unread.classList.remove('selected');
});

const showLeftPanel = async () => {
    const response = await fetch('https://flipkart-email-mock.now.sh/?page=' + currentPage);
    const emailList = await response.json();
    if (emailList.total > 0) {
        outputHTML(emailList);
    }
    if (emailList.total === 0) {
        outputHTML([]);
    }
}

const outputHTML = (emailList) => {
    const html = emailList.list.map(mail => {
        var mailDate = new Date(mail.date);
        return (
            `<div id="${mail.id}" onClick=updatePanel("${mail.id}","show") class="leftPanel-element">
                <div>
                    <span class="span-li">From: ${mail.from.name} < ${mail.from.email} > </span>
                </div>
                <div>
                    <span>Subject: ${mail.subject}</span>
                </div>
                <div>
                    <span>${mail.short_description}</span>
                </div>
                <div>
                    <span>${mailDate.getDate()}/${mailDate.getMonth()}/${mailDate.getFullYear()}  ${mailDate.getUTCHours()}:${mailDate.getUTCMinutes()}</span>
                </div>
            </div>`
        )
    }).join('');
    leftPanel.innerHTML = html;
}

const updatePanel = async (id, viewMode) => {
    const response = await fetch('https://flipkart-email-mock.now.sh/?id=' + id);
    const bodyView = await response.json();
    if (viewMode === "show") {
        rightPanel.innerHTML = bodyView.body;
        readEmails.push(id);
    }
}