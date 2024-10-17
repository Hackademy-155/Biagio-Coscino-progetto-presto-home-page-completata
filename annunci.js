let navbar = document.querySelector('nav');


document.addEventListener('scroll', () => {

    if (window.scrollY > 895) {
        navbar.classList.add('navbarScroll');
    } else {
        navbar.classList.remove('navbarScroll');
    }
})
let conteinerCards = document.querySelector('#conteinerCards');




let containerCategory = document.querySelector('#containerCategory');





fetch('./annunci.json').then(response => response.json()).then(data => {



    function showCards(array) {
        conteinerCards.innerHTML=``
        array.forEach(card => {
            let div = document.createElement('div');
            div.classList.add('col-6', 'col-md-3', 'my-4')
            div.innerHTML = `<div class="card" style="width: 16rem;">
  <img src="${card.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${card.name}</h5>
    <p class="card-text">${card.category}</p>
    <p class="card-text fw-light">${card.price} euro</p>
  </div>
</div>`

            
            conteinerCards.appendChild(div)

        });
    }
    showCards(data)




    function radioCreate() {
        let categories = data.map(annuncio => annuncio.category);

        let uniqueCategories = new Set(categories);
        uniqueCategories.forEach(categoria => {
            let div = document.createElement('div');
            div.innerHTML = `<input class="form-check-input" type="radio" id="${categoria}" name="category">
                <label class="form-check-label" for="${categoria}">
                  ${categoria}
                </label>`
            containerCategory.appendChild(div);
            

            let radioBtn = document.querySelectorAll('.form-check-input');
            

            radioBtn.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterByCategories(btn.id)
                })
            })

        })

    }

    radioCreate()


    function filterByCategories(categoria) {
        if (categoria != 'All') {
            let filtered = data.filter(annuncio => annuncio.category == categoria)
            conteinerCards.innerHTML = ``
            showCards(filtered)
        } else {

            showCards(data)
            
        }
    }



})