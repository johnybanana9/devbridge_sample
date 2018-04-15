document.getElementById("mainDropdown").onmouseover = function() {mouseOver()};
document.getElementById("mainDropdown").onmouseout = function() {mouseOut()};
function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}

function mouseOver() {
    let el = document.getElementById("dd");
    addClass(el, 'active');
}

function mouseOut() {
  let el = document.getElementById("dd");
  removeClass(el, 'active');
}
function validateForm() {
    let f = document.contactForm.firstname.value;
    let l = document.contactForm.lastname.value;
    let msg = document.contactForm.message.value;
    let errors = '';

    if (f.length < 5) {
        errors += '<br>First name must be filled out!';
        document.contactForm.firstname.focus();
    }
    if (l.length < 5) {
        errors += '<br>Last name must be filled out!';
        document.contactForm.lastname.focus();
    }
    if (msg.length <= 10) {
        errors += '<br>Message must be filled out and have atleast 10 characters!';
        document.contactForm.message.focus();
    }

    if (errors)
    {
      document.getElementById('response').innerHTML = errors;
      document.getElementById('response').setAttribute("style", "display:block");
    }
    else {
      document.getElementById('response').innerHTML = 'Form submitted!';
      document.getElementById('response').setAttribute("style", "background-color: #0071BC; display:block");
    }
    return false;
}
