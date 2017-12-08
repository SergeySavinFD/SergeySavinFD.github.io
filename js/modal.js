var link = document.querySelector(".contacts-button");
    var popup = document.querySelector(".modal");
    var close = document.querySelector(".modal-close");
    var form = popup.querySelector("form");
    var username = popup.querySelector("[name=username]");
    var email = popup.querySelector("[name=email]");
    var storage = localStorage.getItem("username");


    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
      if (storage) {
        username.value = storage;
        email.focus();
      } else {
        username.focus();
      }
    });

    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    });

    form.addEventListener("submit", function (evt) {
      if (!username.value || !email.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
      } else {
        localStorage.setItem("username", username.value);
      }
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        }
      }
    });