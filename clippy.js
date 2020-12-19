"use strict";
function clippy (selector) {
    let text;
    let elem = document.querySelector(selector);
    if (elem.hasAttribute("data-clippy")) {
        text = elem.getAttribute("data-clippy");
    } else {
        text = elem.innerText;
    };
    document.body.innerHTML += `<input type="text" id="clippy-temp" value="${text}" style="width: 0px; height: 0px;">`;
    let h = document.querySelector("#clippy-temp");
    h.select();
    h.setSelectionRange(0, text.lenght + 9);
    document.execCommand("copy");
    h.remove();
};