var btnContac = document.querySelector('.jl-btn-contact');

btnContac.addEventListener('click', function(){
    var boxContact = document.querySelector('.jl-contact-info');

    boxContact.classList.toggle('jl-is-open');

    this.classList.toggle('jl-change-icon');
});