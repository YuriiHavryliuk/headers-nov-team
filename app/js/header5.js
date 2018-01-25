var touches = document.querySelectorAll('.js-touch__btn'),
    left = document.querySelector('.js-arrow__left'),
    right = document.querySelector('.js-arrow__right'),    
    active = 'fifth__touch--active',
    activeClass = '.fifth__touch--active';

for(var i = 0; i < touches.length; i++) {
    touches[i].addEventListener('click', function() {
            clearClasses();
            this.classList.add(active);
    }
    );
}


left.addEventListener('click', function() {
    var previous = document.querySelector(activeClass).previousElementSibling;
    if (previous === null) {
        clearClasses();
        touches[touches.length - 1].classList.add(active);
    }
    else {
        clearClasses();
        previous.classList.add(active);
    }
} );

right.addEventListener('click', function() {
    var next = document.querySelector(activeClass).nextElementSibling;
    if (next === null) {
        clearClasses();
        touches[0].classList.add(active);
    }
    else {
        clearClasses();
        next.classList.add(active);
    }
} );

function clearClasses() {    
    for(var j = 0; j < touches.length; j++) {
        touches[j].classList.remove(active);
    }
}
