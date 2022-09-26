!function(){const t={catalogList:document.querySelectorAll("#catalog-list"),cotalogBtn:document.querySelector(".catalog-collapse"),titleCollapse:document.querySelectorAll(".catalog-collapse__title")};t.cotalogBtn.addEventListener("click",(l=>{l.target.classList.contains("catalog-collapse__title")&&(t.cotalogBtn.classList.toggle("catalog-visible"),t.catalogList.forEach((t=>t.classList.toggle("catalog-list--hidden"))),"Свернуть"===t.titleCollapse[0].innerText&&(t.titleCollapse[0].classList.toggle("hidden"),t.titleCollapse[1].classList.toggle("vissible")))}))}();



// loading
const offerBtn = document.querySelector('.offer-btn');

offerBtn.addEventListener('click', e => {
    offerBtn.classList.add('offer-btn--await')
    setTimeout(() => {
        offerBtn.classList.remove('offer-btn--await')
    }, 7500)
})