;
(function() {

    //ОТПРАВКА ФОРМЫ 

    const delPhone = document.querySelector('.delivery__phone');

    delPhone.addEventListener('keydown', function(event) {
        let isDigit = false;
        let isDash = false;
        let isControl = false;
        let isBack = false;

        if (event.key >= 0 || event.key <= 9) {
            isDigit = true;
        } 
        if (event.key == '-') {
            isDash = true;
        }
        if (event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
            isControl = true;
        }
        if (event.key == 'Backspace') {
            isBack = true;
        }

        if (!isDigit && !isDash && !isControl && !isBack) {
            event.preventDefault();
        }
    });

    const delForm = document.querySelector('.delivery__content'),
        sendBtn = document.querySelector('.delivery__button');

    sendBtn.addEventListener('click', event => {
        event.preventDefault();

            if (validateForm(delForm)) {

                const formData = new FormData();
                const modalMessage = document.querySelector('.modal');
                const modalBtn = document.querySelector('.modal__button');
                const modalText = document.querySelector('.modal__text');

                formData.append('name', delForm.elements.name.value);
                formData.append('phone', delForm.elements.phone.value);
                formData.append('comment', delForm.elements.comment.value);
                formData.append('to', 'mail@mail.com');

                modalBtn.addEventListener('click', function() {
                    modalMessage.style.display = "none";
                    document.body.style.overflow = 'auto';
                    $('.modal').removeClass('modal__active');
                });

                const xhr = new XMLHttpRequest();
                xhr.responseType = 'json';
                xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
                xhr.send(formData);
                xhr.addEventListener('load', () => {
                    if(xhr.status) {
                        modalMessage.style.display = "flex";
                        modalText.textContent = 'Сообщение отправлено';
                        sendBtn.disabled = true;
                        $('.modal').addClass('modal__active');
                    } else {
                        modalMessage.style.display = "flex";
                        modalText.textContent = 'Произошла ошибка';
                        $('.modal').addClass('modal__active');

                        setTimeout(function(){
                            sendBtn.disabled = false;
                        },10000);
                    }
                });
            }
    });

    function validateForm(form) {
        let valid = true;

        if (!validateField(form.elements.name)) {
            valid = false;
        }
        if (!validateField(form.elements.phone)) {
            valid = false;
        }
        if (!validateField(form.elements.street)) {
            valid = false;
        }
        if (!validateField(form.elements.house)) {
            valid = false;
        }
        if (!validateField(form.elements.corp)) {
            valid = false;
        }
        if (!validateField(form.elements.appart)) {
            valid = false;
        }
        if (!validateField(form.elements.floor)) {
            valid = false;
        }
        if (!validateField(form.elements.comment)) {
            valid = false;
        }

        return valid;
    }

    function validateField(field) {
        field.nextElementSibling.textContent = field.validationMessage;
        return field.checkValidity();
    }

})()