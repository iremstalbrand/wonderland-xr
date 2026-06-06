const mirror = document.querySelector('#mirror');
const mirrorText = document.querySelector('#mirrorText');

mirror.addEventListener('click', () => {
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

});
