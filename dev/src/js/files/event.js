let buttons = document.querySelectorAll('.quiz-step-button')

buttons.forEach(function(item) {
    item.addEventListener('click', function(){
        let allSteps = document.querySelectorAll('.quiz-inner');
        // let allStepsNumber = document.querySelectorAll('.steps__item');
        let currentStep = document.querySelector('.quiz-inner.active');
        let currentStepNumber = Number(currentStep.getAttribute('data-step'));
    
        if (item.classList.contains('quiz__next') && currentStepNumber + 1 < allSteps.length) {
            let nextNum = currentStepNumber + 1;
            let nextEl = allSteps[currentStepNumber + 1];

            currentStep.classList.remove('active');
            nextEl.classList.add('active');

            // allStepsNumber.forEach(function(num, idx) {
            //     if (idx <= nextNum) {
            //         num.classList.add('active')
            //     } else {
            //         num.classList.remove('active')
            //     }
            // });
            if (currentStepNumber + 1 == allSteps.length - 1) {
                let  consultationButton = document.querySelector('.quiz-action');

                consultationButton.classList.add('active');
            }
        } else if (item.classList.contains('quiz__prev') && currentStepNumber - 1 >= 0) {
            let prevNum = currentStepNumber - 1;
            let prevEl = allSteps[prevNum];
            let  consultationButton = document.querySelector('.quiz-action');
            
            currentStep.classList.remove('active');
            prevEl.classList.add('active');

            
            // allStepsNumber.forEach(function(num, idx) {
            //     if (idx <= prevNum) {
            //         num.classList.add('active')
            //     } else {
            //         num.classList.remove('active')
            //     }
            // });
            if (consultationButton.classList.contains('active')) {
                consultationButton.classList.remove('active');
            }
        } 
    })
})


// let quizButtonNext = document.querySelector('.two-block__step-next');
// let stepNumber = 1;

// quizButtonNext.addEventListener('click', function(el) {
//     let quizAll = document.querySelectorAll('.steps__info');

//     quizAll.forEach(function(item) {
//         let quizNumber = item.getAttribute('data-step');
//         if (item.classList.contains('active')) {
//             stepNumber = quizNumber;
//             item.classList.remove('active');
//         }
//         if (button.classList.)
//     })
    
//     console.log(nextQuizBlock)
//     quizAll.classList.remove('active');
//     nextQuizBlock.classList.add('active')
// })

// function quizChange (quizAll, step, button) {

//     quizAll.forEach(function(item,i) {
//         let quizNumber = item.getAttribute('data-step');

//         if (item.classList.contains('active')) {
//             stepNumber = quizNumber;
//             item.classList.remove('active');
//         }
//         if (button.classList.contains('next')) {

//         } else if (button.classList.contains('prew')) {
//             if (i == stepNumber) {

//             }
//         }
//     })
// }