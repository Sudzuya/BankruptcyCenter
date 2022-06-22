let buttons = document.querySelectorAll('.quiz-step-button')
let allSteps = document.querySelectorAll('.quiz__inner');

if (allSteps.length != 0) {
    let lastQuizPageInputs = allSteps[allSteps.length - 1].querySelectorAll('input');

    lastQuizPageInputs.forEach(function(item) {
        item.addEventListener('click', function() {
            item.closest('.quiz__item').querySelector('.quiz-action').classList.add('active');
            item.classList.add('active')
        })
    })
}

buttons.forEach(function(item) {
    item.addEventListener('click', function() {
<<<<<<< HEAD
=======
        let allSteps = document.querySelectorAll('.quiz__inner');
>>>>>>> d2c6428594bb17b77c7e56ffea90b73ecab20991
        // let allStepsNumber = document.querySelectorAll('.steps__item');
        let currentStep = document.querySelector('.quiz__inner.active');
        let currentStepNumber = Number(currentStep.getAttribute('data-step'));
    
        if (item.classList.contains('quiz__next') && currentStepNumber + 1 < allSteps.length) {
            let nextStepRadio = allSteps[currentStepNumber + 1].querySelectorAll('input');
            let radioInput = currentStep.querySelectorAll('input');
            let radioValid = false;
            let lastPageActive = false

            radioInput.forEach(function(radio) {
                if (radio.checked) {
                    radioValid = true
                }
                if (currentStepNumber + 1 == allSteps.length - 1) {
                    nextStepRadio.forEach(function(radioNext) {
                        if (radioNext.classList.contains('active')) {
                            lastPageActive = true;
                        }
                    })
                }
            })

            if (radioValid) {
                let nextNum = currentStepNumber + 1;
                let nextEl = allSteps[currentStepNumber + 1];
                let  consultationButton = document.querySelector('.quiz-action');

                if (currentStepNumber + 1 == allSteps.length - 1 && lastPageActive == true) {
                    consultationButton.classList.add('active');
                    consultationButton.classList.remove('progress')
                }

                currentStep.classList.remove('active');
                nextEl.classList.add('active');

                if (nextEl.getAttribute('data-step') > 0) {
                    consultationButton.classList.add('proggress');
                } else if (nextEl.getAttribute('data-step') == allSteps.length - 1) {
                    consultationButton.classList.remove('proggress');
                }
            }
<<<<<<< HEAD
=======

            if (nextEl.getAttribute('data-step') > 0){
                consultationButton.classList.add('proggress');
            } else if (nextEl.getAttribute('data-step') == allSteps.length - 1){
                consultationButton.classList.remove('proggress');
            }

>>>>>>> d2c6428594bb17b77c7e56ffea90b73ecab20991
        } else if (item.classList.contains('quiz__prev') && currentStepNumber - 1 >= 0) {
            let prevNum = currentStepNumber - 1;
            let prevEl = allSteps[prevNum];
            let  consultationButton = document.querySelector('.quiz-action');
            
            currentStep.classList.remove('active');
            prevEl.classList.add('active');

            if (prevEl.getAttribute('data-step') == 0 && consultationButton.classList.contains('proggress')){
                consultationButton.classList.remove('proggress');
            }
            
            if (consultationButton.classList.contains('active')) {
                consultationButton.classList.remove('active');           
            }
        } 

    })
})


let selectCity = document.querySelector('.location__select-city span')
let headerMobile = document.querySelector('.header__mobile');
let city = document.querySelector('.form-city')


selectCity.addEventListener('click', function(){
    document.querySelector('.form-city').classList.toggle('active');
    document.querySelector('.location__select-city').classList.toggle('active');
        if (headerMobile.classList.contains('active')){
            document.querySelector('html').classList.add('lock')
            city.classList.toggle('full')
            document.querySelector('.form-city__close-search').addEventListener('click', function(){
                city.classList.remove('full')
                city.classList.remove('active')
                document.querySelector('.location__select-city').classList.remove('active')
              
            })
        }

})


let burgerBtn = document.querySelector('.header__burger')

burgerBtn.addEventListener('click', function(){
    document.querySelector('.header__mobile').classList.toggle('active');
    document.querySelector('html').classList.toggle('lock')
})

let forms = document.querySelectorAll('form')

forms.forEach(function(form){
    let submitBtn = form.querySelector('[type=submit]')
    let input = form.querySelectorAll('input[required]')
    let warningMassage = form.querySelector('.form__warning')
        input.forEach(function(field){
            field.addEventListener('input', function(){
                if (field.value.length === 0 && field.classList.contains('valid') ){
                    field.classList.remove('valid')
                    field.classList.add('invalid')
                } else if (field.classList.contains('invalid') && field.value.length > 0) {
                    field.classList.remove('invalid')
                    field.classList.add('valid')
                }
                if (field.type === 'tel'){
                    let valueTel = field.value.length;
                    if (valueTel < 18){
                        field.classList.add('invalid')
                    } else if (field.classList.contains('invalid')){
                        field.classList.remove('invalid')
                        field.classList.add('valid')
                    }
                    if (warningMassage.classList.contains('invalid') && valueTel === 18){
                        warningMassage.classList.remove('invalid')
                        warningMassage.classList.add('valid')
                    }
                }
             
            })
            submitBtn.addEventListener('click', function(){
                if (field.value.length === 0 ){
                    field.classList.add('invalid')
                    warningMassage.classList.add('invalid')
                }
                if (field.type === 'tel'){
                    let valueTel = field.value.length;
                    if (valueTel < 18){
                        field.classList.add('invalid')
                        warningMassage.classList.add('invalid')
                    } else if (field.classList.contains('invalid')){
                        field.classList.remove('invalid')
                        field.classList.add('valid')
                    }
                    if (warningMassage.classList.contains('invalid') && valueTel === 18){
                        warningMassage.classList.remove('invalid')
                        warningMassage.classList.add('valid')
                    }
                }
            })
        }) 
})



window.addEventListener('DOMContentLoaded', function() {
    [].forEach.call( document.querySelectorAll('[type=tel]'), function(input) {
      var keyCode;
      function mask(event) {
          event.keyCode && (keyCode = event.keyCode);
          var pos = this.selectionStart;
          if (pos < 3) event.preventDefault();
          var matrix = "+7 (___) ___-__-__",
              i = 0,
              def = matrix.replace(/\D/g, ""),
              val = this.value.replace(/\D/g, ""),
              new_value = matrix.replace(/[_\d]/g, function(a) {
                  return i < val.length ? val.charAt(i++) || def.charAt(i) : a
              });
          i = new_value.indexOf("_");
          if (i != -1) {
              i < 5 && (i = 3);
              new_value = new_value.slice(0, i)
          }
          var reg = matrix.substr(0, this.value.length).replace(/_+/g,
              function(a) {
                  return "\\d{1," + a.length + "}"
              }).replace(/[+()]/g, "\\$&");
          reg = new RegExp("^" + reg + "$");
          if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
          if (event.type == "blur" && this.value.length < 5)  this.value = ""
      }
  
      input.addEventListener("input", mask, false);
      input.addEventListener("click", function(e) {
        if (e.target.value == 0) {
          e.target.value = '+7'
        }
      })
    });

    let article = document.querySelectorAll('.news .articles-bankruptcy .article__item');
    let showMoreBtn = document.querySelector('.articles-bankruptcy__show-more');
    let activeArticlesNumber = 0;

    if (window.innerWidth > 992) {
        var articleNumber = 9;
    } else if (window.innerWidth > 576) {
        var articleNumber = 4;
    } else {
        var articleNumber = 3;
    }

<<<<<<< HEAD
    
=======
>>>>>>> d2c6428594bb17b77c7e56ffea90b73ecab20991
    activeArticlesNumber = activeArticlesNumber + articleNumber;
    
    article.forEach(function(item, i) {
        if (i < activeArticlesNumber) {
            item.classList.add('active');
        }
    })


<<<<<<< HEAD

=======
>>>>>>> d2c6428594bb17b77c7e56ffea90b73ecab20991
    if (showMoreBtn){
        showMoreBtn.addEventListener('click', function() {
            activeArticlesNumber = activeArticlesNumber + articleNumber;
            if (article.length >= activeArticlesNumber) {
                article.forEach(function(item, i) {
                    if (i < activeArticlesNumber) {
                        item.classList.add('active');
                    }
                })
                if (article.length == activeArticlesNumber) {
<<<<<<< HEAD
                    showMoreBtn.classList.add('hidden')
=======
                    showMoreBtn.style.display = 'none'
>>>>>>> d2c6428594bb17b77c7e56ffea90b73ecab20991
                }
            }
        })
    }
<<<<<<< HEAD
    
    let questionShowMoreButton = document.querySelector('.nine__link-full');
    
    if (questionShowMoreButton) {
        let allQuestionBlocks = document.querySelectorAll('.spollers__item');

        questionShowMoreButton.addEventListener('click', function () {
            allQuestionBlocks.forEach(function(item) {
                item.classList.remove('_spoiler-hidden');
                questionShowMoreButton.classList.add('hidden');
            })
        })
    }
=======
>>>>>>> d2c6428594bb17b77c7e56ffea90b73ecab20991
}) 

let popupThanks = document.querySelector('.popup__thanks');

popupThanks.addEventListener('click', function(e) {
    let target = e.target;
    
    if (target.classList.contains('popup__close') || target.classList.contains('popup__btn'))  {
        popupThanks.classList.remove('popup_show')
    }
})