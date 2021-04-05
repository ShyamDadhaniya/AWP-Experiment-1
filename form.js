var emailPattern = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
var email = document.forms['userRegForm'].email;
var password = document.forms['userRegForm'].password;
var passwordConfirm = document.forms[0].passwordConfirm;
var firstName = document.forms['userRegForm'].firstName;
var lastName = document.forms['userRegForm'].lastName;

// Email length regex pattern.
var emailLengthPattern = new RegExp($(email).attr('pattern'));

// Password regex pattern.
var passwordPattern = new RegExp($(password).attr('pattern'));

// Initialize popover for all inputs
$('input[required]').popover({
placement: 'bottom',
container: 'body',
trigger: 'manual',
selector: 'true',
content: function() {
    return $(this).attr('title');
},
template: '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
}).focus(function() {
$(this).popover('hide');
});

function validateForm(form) {

// Email validation.
if (!emailPattern.test(email.value) || !emailLengthPattern.test(email.value)) {
  $(email).popover('show');
    return false;
} else {
    $(email).addClass('valid')
}

// Password validation.
if (!passwordPattern.test(password.value)) {
    $(password).popover('show');
    return false;
}

// Password confirm validation.
if (!passwordPattern.test(passwordConfirm.value)) {
    $(passwordConfirm).popover('show');
    return false;
}

// Password match validation.
if (password.value !== passwordConfirm.value) {
    $(passwordConfirm).popover('show');
    return false;
}

// First name validation.
if (firstName.value.length === 0) {
    $(firstName).popover('show');
    return false;
}

// Last name validation.
if (lastName.value.length === 0) {
    $(lastName).popover('show');
    return false;
}

// No validation errors.
alert('Submitted successfully');

// In this demo, prevent the form from submitting.
return false;
}

function validateEmail(input) {
if (emailPattern.test(input.value) && emailLengthPattern.test(input.value)) {
    $(input).addClass('valid')
} else {
    $(input).removeClass('valid');
}
}

/*
Sets a custom validation to require both password fields to match each other
*/
function validatePassword(input) {

if (input.setCustomValidity) {
    input.setCustomValidity('');
    
    if (input.validity && !input.validity.valid) {
        input.setCustomValidity(input.title);
    }
}

if (passwordConfirm.setCustomValidity) {
    if (password.value !== passwordConfirm.value) {
            passwordConfirm.setCustomValidity(passwordConfirm.title);
    } else {
        passwordConfirm.setCustomValidity('');
    }
} else {

    if (passwordPattern.test(input.value)) {
        $(input).addClass('valid');

        if (password.value === passwordConfirm.value) {
            $(passwordConfirm).addClass('valid');
        } else {
            $(passwordConfirm).removeClass('valid');
        }
    } else {
        $(input).removeClass('valid');
    }
}
}

function validateRequired(input) {

if (input.setCustomValidity) {
    input.setCustomValidity('');
    
    if (input.validity && !input.validity.valid) {
        input.setCustomValidity(input.title);
    }
}

if (input.value.length > 0) {
  $(input).addClass('valid');
} else {
    $(input).removeClass('valid');
}
}


