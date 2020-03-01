let accept_button = document.getElementById("accept");
let cancel_button = document.getElementById("cancel");
let popup_accept = document.querySelector(".popup-accept");
let popup_cancel = document.querySelector(".popup-cancel");
let is_button_clicked = false;
let timer_accept;
let timer_cancel;

// accept button handler
accept_button.addEventListener("click", function() {

    // popup slide into view
    popup_accept.classList.add("view");
    is_button_clicked = false;
    
    // remove popup after 8 seconds
    if (is_button_clicked === false) {
        popup_accept_timeout();
    }
});

// cancel button handler
cancel_button.addEventListener("click", function() {

    // popup slide into view
    popup_cancel.classList.add("view");
    is_button_clicked = false;
    
    // remove popup after 8 seconds
    if (is_button_clicked === false) {
        popup_cancel_timeout();
    }
});

// remove popups if clicked anywhere but the buttons or popups
let main_function = (e) => {

    is_button_clicked = true;

    if (e.target !== accept_button && e.target !== cancel_button && e.currentTarget.className !== "popup" && is_button_clicked === true) {
        popup_accept.classList.remove("view");
        popup_accept_cleartime();
        popup_cancel.classList.remove("view");
        popup_cancel_cleartime();
    }
};

// functions for setting / clearing time

function popup_accept_timeout() {
    timer_accept = setTimeout(function() {
        popup_accept.classList.remove("view");
    }, 8000);
}

function popup_accept_cleartime() {
    clearTimeout(timer_accept);
}

function popup_cancel_timeout() {
    timer_cancel = setTimeout(function() {
        popup_cancel.classList.remove("view");
    }, 8000);
}

function popup_cancel_cleartime() {
    clearTimeout(timer_cancel);
}