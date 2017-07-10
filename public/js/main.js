function validateForm() {
    var formName = document.forms["js-contact-form"]["form-firstname"].value;
    var formLastName = document.forms["js-contact-form"]["form-lastname"].value;
    var formMessage = document.forms["js-contact-form"]["form-message"].value;
    var reg = /([A-Za-z])\w+/ig;

    if (!reg.test(formName)) {
        alert("Name must be filled properly");
        return false;
    } else if(reg.test(formLastName)) {
        console.log(formLastName);
        alert("Last name must be filled properly");
        return false;
    } else if(formMessage == ""){
        alert("Message can\'t be empty");
        return false;
    }
}


var theBody = document.getElementsByTagName("BODY")[0];
var burgerButton = document.getElementById("js-burger-menu-button");
var burgerMenu = document.getElementById("menu-responsive");

burgerButton.addEventListener("click", function(){
	theBody.classList.add('noScroll');
	burgerButton.classList.add('hamburger--stand', 'js-hamburger');
	burgerMenu.classList.add('active');
}, false);

var innerMenuParent = document.getElementsByClassName("r-nav-main__list-item_has-child"); 

Element.prototype.next = function(){
    if(this.nextElementSibling){
        return this.nextElementSibling;
    }
    var sib = this.nextSibling;
    while(sib && sib.nodeType !== 1){
        sib = sib.nextSibling;
    }
    return sib;
}

for(var i = 0; innerMenuParent.length > i; i++){
var innerMenuList = innerMenuParent[i].firstElementChild;
    innerMenuList.addEventListener("click", function(){
        var e = this.next();
        if (e.classList.contains('r-inner-list_active')) {
            e.classList.remove('r-inner-list_active');
        } else{
            e.classList.add('r-inner-list_active');
        }
    }, false);
}

var closeButton = document.getElementById("js-burger-close");

closeButton.addEventListener("click", function(){
    burgerMenu.classList.remove('active');
    theBody.classList.remove('noScroll');
});
