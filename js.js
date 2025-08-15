'use strict';
document.addEventListener("DOMContentLoaded", function () {
    
    let langueg=document.getElementById("langSelect"); //console.log(langueg);
    let sectionEN=document.getElementById('en'); //console.log(sectionEN);
    let sectionUK=document.getElementById('uk'); //console.log(sectionUK);

    // ===========================================================================

    langueg.addEventListener('change', function() {
        const isUK = this.value === 'uk';
        
        sectionEN.classList.toggle('visibl', !isUK);   // показываем EN, если не UK
        sectionEN.classList.toggle('invisibl', isUK);  // скрываем EN, если UK

        sectionUK.classList.toggle('visibl', isUK);    // показываем UK, если UK
        sectionUK.classList.toggle('invisibl', !isUK); // скрываем UK, если не UK
    });
});

