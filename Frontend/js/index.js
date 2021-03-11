
(function ($) {
    "use strict";

    // Loader
    $(function () {
        var loader = function () {
            setTimeout(function () {
                if ($('#loader').length > 0) {
                    $('#loader').removeClass('show');
                }
            }, 1);
        };
        loader();
    });

    // Auto Init 
    M.AutoInit();

    // Carousel
    var elems = document.querySelectorAll('.carousel');
    var options = {
        fullWidth: false,
        indicators: false
    };
    var instance = M.Carousel.init(elems, options);
    setInterval(function () {
        $('.carousel').carousel('next');
    }, 5000);

})(jQuery);

function submitDraft() {
    var email = document.getElementById("email").value;
    var registration_number = document.getElementById("registration_number").value;
    var name = document.getElementById("name").value;
    var mobile_number = document.getElementById("mobile_number").value;
    var data_link = document.getElementById("data_link").value;
    if (name != "" && registration_number != "" && email != "" && mobile_number != "" && data_link != "") {
        document.getElementById("regBtn").disabled = true;
        grecaptcha.ready(() => {
            grecaptcha.execute('6LdVV3kaAAAAAOdPoch4qj8g5DKmHAAdS9ZmlFlo', {
                action: '/'
            }).then((token) => {
                var data = {
                    email,
                    registration_number,
                    name,
                    mobile_number,
                    data_link,
                    captcha: token
                }
                var xh = new XMLHttpRequest();
                xh.open("POST", "https://techchronicle.herokuapp.com/register/addUser", true)
                xh.setRequestHeader('Content-Type', 'application/json')
                xh.send(JSON.stringify(data))
                xh.onload = function () {
                    if (this.status == 201) {
                        M.toast({ html: 'You have been successfully registered 🎉' });
                        document.getElementById("regBtn").disabled = false;
                    } else if (this.status == 400) {
                        M.toast({ html: 'Seems like you didn\'t enter something 😔' });
                        document.getElementById("regBtn").disabled = false;
                    } else if (this.status == 401 || this.status == 409) {
                        M.toast({ html: 'Looks like you are already registered with us ✨' });
                        document.getElementById("regBtn").disabled = false;
                    } else if (this.status == 401) {
                        M.toast({ html: 'Invalid reCaptcha token 😨' });
                        document.getElementById("regBtn").disabled = false;
                    }
                    else {
                        M.toast({ html: 'Oops something seems to be wrong. Our team is finding out what went wrong 😢' });
                        document.getElementById("regBtn").disabled = false;
                    }
                }
            });
        });
    }
    else {
        M.toast({ html: 'Seems like you didn\'t enter something 😔' });
    }
}

console.clear();