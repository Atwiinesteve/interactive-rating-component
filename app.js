(function() {

    const btnCover = document.querySelectorAll('.rate');

    btnCover.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('span__color');
        })
    });

}());