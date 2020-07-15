// __________________________________________
// _________________FORM_____________________
// __________________________________________

var contactsLink = document.querySelector(".contacts-link");
var contactsPopup = document.querySelector(".form-window");
var contactsClose = contactsPopup.querySelector(".form-window-close-button");
var contactsForm = contactsPopup.querySelector(".form-window-form");
var contactsName = contactsPopup.querySelector(".form-window-name-user");
var contactsEmail = contactsPopup.querySelector(".form-window-email-user");
var contactsText = contactsPopup.querySelector(".form-window-text-user");

contactsLink.addEventListener("click", function (evt){
    evt.preventDefault();
    contactsPopup.classList.add("element-display-block-form");
    contactsPopup.classList.remove("element-display-none");
    contactsName.focus();
});

contactsClose.addEventListener("click", function (evt){
    evt.preventDefault();
    contactsPopup.classList.remove("element-display-block-form");
    contactsPopup.classList.add("element-display-none");
    contactsPopup.classList.remove("modal-error");
});

contactsForm.addEventListener("submit", function (evt){
    if (!contactsName.value || !contactsEmail.value || !contactsText.value){
        evt.preventDefault();
        contactsPopup.classList.remove("modal-error");
        contactsPopup.offsetWidth = contactsPopup.offsetWidth;
        contactsPopup.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function (evt){
    if (evt.keyCode === 27){
      if (contactsPopup.classList.contains("element-display-block-form")){
        evt.preventDefault();
        contactsPopup.classList.remove("element-display-block-form");
        contactsPopup.classList.add("element-display-none");
        contactsPopup.classList.remove("modal-error");
      }
    }
});

// __________________________________________
// _________________SLIDER_1_________________
// __________________________________________

var adItem1 = document.querySelector(".ad-item-li-1");
var adItem2 = document.querySelector(".ad-item-li-2");
var adItem3 = document.querySelector(".ad-item-li-3");


var adItem1_button2 = adItem1.querySelector(".ad-button-2");
var adItem1_button3 = adItem1.querySelector(".ad-button-3");

var adItem2_button1 = adItem2.querySelector(".ad-button-1");
var adItem2_button3 = adItem2.querySelector(".ad-button-3");

var adItem3_button1 = adItem3.querySelector(".ad-button-1");
var adItem3_button2 = adItem3.querySelector(".ad-button-2");



adItem1_button2.addEventListener("click", function (evt){
    evt.preventDefault();
    adItem2.classList.remove("element-display-none");
    adItem1.classList.add("element-display-none");
});

adItem1_button3.addEventListener("click", function (evt){
    evt.preventDefault();
    adItem3.classList.remove("element-display-none");
    adItem1.classList.add("element-display-none");
});


adItem2_button1.addEventListener("click", function (evt){
    evt.preventDefault();
    adItem1.classList.remove("element-display-none");
    adItem2.classList.add("element-display-none");
});

adItem2_button3.addEventListener("click", function (evt){
    evt.preventDefault();
    adItem3.classList.remove("element-display-none");
    adItem2.classList.add("element-display-none");
});


adItem3_button1.addEventListener("click", function (evt){
    evt.preventDefault();
    adItem1.classList.remove("element-display-none");
    adItem3.classList.add("element-display-none");
});

adItem3_button2.addEventListener("click", function (evt){
    evt.preventDefault();
    adItem2.classList.remove("element-display-none");
    adItem3.classList.add("element-display-none");
});

// __________________________________________
// _________________SLIDER_2_________________
// __________________________________________

var serviceLeft1 = document.querySelector(".service-left-li-1");
var serviceLeft2 = document.querySelector(".service-left-li-2");
var serviceLeft3 = document.querySelector(".service-left-li-3");

var serviceLeftButton1 = serviceLeft1.querySelector(".service-button-1");
var serviceLeftButton2 = serviceLeft2.querySelector(".service-button-2");
var serviceLeftButton3 = serviceLeft3.querySelector(".service-button-3");

var serviceRight1 = document.querySelector(".service-right-li-1");
var serviceRight2 = document.querySelector(".service-right-li-2");
var serviceRight3 = document.querySelector(".service-right-li-3");


serviceLeftButton1.addEventListener("click", function (evt){
    evt.preventDefault();

    serviceLeft2.classList.remove("service-left-selected-li");
    serviceLeft3.classList.remove("service-left-selected-li");
    serviceLeft1.classList.add("service-left-selected-li");

    serviceLeftButton1.classList.remove("service-left-button-3-1");
    serviceLeftButton1.classList.remove("service-left-button-2-1");
    serviceLeftButton1.classList.add("service-left-button-1-1");

    serviceLeftButton2.classList.remove("service-left-button-3-2");
    serviceLeftButton2.classList.remove("service-left-button-2-2");
    serviceLeftButton2.classList.add("service-left-button-1-2");

    serviceLeftButton3.classList.remove("service-left-button-3-3");
    serviceLeftButton3.classList.remove("service-left-button-2-3");
    serviceLeftButton3.classList.add("service-left-button-1-3");

    serviceRight2.classList.add("element-display-none");
    serviceRight3.classList.add("element-display-none");
    serviceRight1.classList.remove("element-display-none");
});

serviceLeftButton2.addEventListener("click", function (evt){
    evt.preventDefault();

    serviceLeft1.classList.remove("service-left-selected-li");
    serviceLeft3.classList.remove("service-left-selected-li");
    serviceLeft2.classList.add("service-left-selected-li");

    serviceLeftButton1.classList.remove("service-left-button-1-1");
    serviceLeftButton1.classList.remove("service-left-button-3-1");
    serviceLeftButton1.classList.add("service-left-button-2-1");

    serviceLeftButton2.classList.remove("service-left-button-1-2");
    serviceLeftButton2.classList.remove("service-left-button-3-2");
    serviceLeftButton2.classList.add("service-left-button-2-2");

    serviceLeftButton3.classList.remove("service-left-button-1-3");
    serviceLeftButton3.classList.remove("service-left-button-3-3");
    serviceLeftButton3.classList.add("service-left-button-2-3");

    serviceRight1.classList.add("element-display-none");
    serviceRight3.classList.add("element-display-none");
    serviceRight2.classList.remove("element-display-none");
});

serviceLeftButton3.addEventListener("click", function (evt){
    evt.preventDefault();

    serviceLeft1.classList.remove("service-left-selected-li");
    serviceLeft2.classList.remove("service-left-selected-li");
    serviceLeft3.classList.add("service-left-selected-li");

    serviceLeftButton1.classList.remove("service-left-button-1-1");
    serviceLeftButton1.classList.remove("service-left-button-2-1");
    serviceLeftButton1.classList.add("service-left-button-3-1");

    serviceLeftButton2.classList.remove("service-left-button-1-2");
    serviceLeftButton2.classList.remove("service-left-button-2-2");
    serviceLeftButton2.classList.add("service-left-button-3-2");

    serviceLeftButton3.classList.remove("service-left-button-1-3");
    serviceLeftButton3.classList.remove("service-left-button-2-3");
    serviceLeftButton3.classList.add("service-left-button-3-3");

    serviceRight2.classList.add("element-display-none");
    serviceRight1.classList.add("element-display-none");
    serviceRight3.classList.remove("element-display-none");
});

// __________________________________________
// _________________MAP______________________
// __________________________________________

var contactsLinkMap = document.querySelector(".map-link");
var contactsPopupMap = document.querySelector(".map-window");
var contactsCloseMap = contactsPopupMap.querySelector(".map-window-close-button");

contactsLinkMap.addEventListener("click", function (evt){
    evt.preventDefault();
    contactsPopupMap.classList.remove("element-display-none");
    contactsPopupMap.classList.add("element-display-block");
});

contactsCloseMap.addEventListener("click", function (evt){
    evt.preventDefault();
    contactsPopupMap.classList.add("element-display-none");
    contactsPopupMap.classList.remove("element-display-block");
});

window.addEventListener("keydown", function (evt){
    if (evt.keyCode === 27){
      if (contactsPopupMap.classList.contains("element-display-block")){
        evt.preventDefault();
        contactsPopupMap.classList.remove("element-display-block");
        contactsPopupMap.classList.add("element-display-none");
      }
    }
});