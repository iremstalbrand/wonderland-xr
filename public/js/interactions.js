const mirror = document.querySelector('#mirror');
const mirrorText = document.querySelector('#mirrorText');
const mirrorGlow = document.querySelector('#mirrorGlow');
const clock = document.querySelector('#clock');
const clockText = document.querySelector('#clockText');
const clockGlow = document.querySelector('#clockGlow');
const potion = document.querySelector('#potion');
const potionText = document.querySelector('#potionText');
const potionGlow = document.querySelector('#potionGlow');

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

    clockGlow.setAttribute(
        'visible',
        false
    );

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

        clockGlow.setAttribute(
            'visible',
            true

        );

    }, 8000);

});

// potion interaction
potion.addEventListener('click', () => {

    if (
        potionText.getAttribute('visible') === true ||
        potionText.getAttribute('visible') === 'true'
    ) {
        return;
    }

    potionGlow.setAttribute(
        'visible',
        false
    );

    potionText.setAttribute(
        'value',
        "What will happen if I drink?"
    );

    potionText.setAttribute(
        'visible',
        true
    );

    setTimeout(() => {
        potionText.setAttribute(
            'value',
            "What will happen if I drink?\n\nThe bottle refuses to say."
        );
    }, 3500);

    setTimeout(() => {

        potionText.setAttribute(
            'visible',
            false
        );

        potionGlow.setAttribute(
            'visible',
            true
        );

    }, 8000);

});

const ambientAudio = document.querySelector('#ambientAudio');

document.addEventListener(
  'click',
  () => {
    ambientAudio.components.sound.playSound();
  },
  { once: true }
);