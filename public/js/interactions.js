const mirror = document.querySelector('#mirror');
const mirrorText = document.querySelector('#mirrorText');
const mirrorGlow = document.querySelector('#mirrorGlow');
const clock = document.querySelector('#clock');
const clockText = document.querySelector('#clockText');

//mirror interaction

mirror.addEventListener('click', () => {
   
 if (mirrorText.getAttribute('visible') === true || mirrorText.getAttribute('visible') === 'true') {
        return;
    }


   mirrorGlow.setAttribute(
    'visible',
    false);
   
    mirrorText.setAttribute(
        'value',
        'Who am I, really?'
    );

    mirrorText.setAttribute(
        'visible',
        true
    );

   


    setTimeout(() => {
        mirrorText.setAttribute(
            'value',
            'Who am I, really? \n\n The mirror offers no answer.' //adds response after 3.5 seconds
        );
    }, 3500);

    setTimeout(() => {
        mirrorText.setAttribute(
            'visible',
            false
        );

        mirrorGlow.setAttribute(
            'visible',
             true);

    }, 8000);

});

//clock interaction
clock.addEventListener('click', () => {
   
 if (clockText.getAttribute('visible') === true || clockText.getAttribute('visible') === 'true') {
        return;
    }

    clockText.setAttribute(
        'value',
        'You are late.'
    );

    clockText.setAttribute(
        'visible',
        true
    );

    setTimeout(() => {
        clockText.setAttribute(
            'value',
            'You are late. \n\n The clock is watching you.'
        );
    }, 3500);

    setTimeout(() => {
        clockText.setAttribute(
            'visible',
            false
        );
    }, 8000);

});