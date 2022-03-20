function destroyPopup(item) {
    item.remove();
}

function createPopup(id) {
    var popup = document.createElement("div");
    popup.id = id;
    popup.classList.add('popup');
    popup.classList.add('active');
    title = data[id].title;
    content = data[id].content;
    popup.innerHTML = `<div class="overlay"></div><div class="content"><div onclick="destroyPopup(${id})" class="close-btn ">&times</div><h2>${title}</h2><div class="text"><p>${content}</p></div><a class="button-1" onclick="destroyPopup(${id}), createPopup('${data[id].link1.href}')">${data[id].link1.label}</a><a class="button-1" onclick="destroyPopup(${id}), createPopup('${data[id].link2.href}')">${data[id].link2.label}</a></div></div>`;

    document.body.appendChild(popup);
}