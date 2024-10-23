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

let priceValue = document.querySelector('#priceValue')
let priceInput = document.querySelector('#priceInput');
let wordInput = document.querySelector('#wordInput');
// label
let minimoValore = document.querySelector('#minimoValore');
let massimoValore = document.querySelector('#massimoValore');


// input
let crescente = document.querySelector('#crescente');
let decrescente = document.querySelector('#decrescente');






fetch('./annunci.json').then(response => response.json()).then(data => {
data.sort((a,b)=> a.price - b.price);


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

    let bottoneID;




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
                    // filterByCategories(btn.id)
                    bottoneID = btn.id
                    globalFilter()
                })
            })

        })

    }

    radioCreate()


    function filterByCategories(array, categoria) {
        if (categoria != 'All') {
            let filtered = array.filter(annuncio => annuncio.category == categoria)
            
            
            conteinerCards.innerHTML = ``
            // showCards(filtered)
            return filtered
        } else {
            conteinerCards.innerHTML = ``
            return array

            // showCards(data)
            
        }
    }
    let maxPrice;
    let minPrice;
    function setPriceinput(){
    let prices = data.map(annuncio=> Number(annuncio.price));
    prices.sort((a, b)=> a - b);
    maxPrice = prices.pop();
    minPrice = prices.shift();
    priceInput.max = maxPrice;
    priceInput.value = maxPrice;
    priceValue.innerHTML = `${maxPrice} $`;

 }

setPriceinput()
  // ordine decrescente
  massimoValore.innerHTML = `${maxPrice} $ - ${minPrice}$`;
  //ordine crescente
  minimoValore.innerHTML = `${minPrice} $ - ${maxPrice}$`;

  crescente.addEventListener('click', ()=>{
      data.sort((a,b)=> a.price - b.price)
      conteinerCards.innerHTML = ``
      showCards(data)
  })

  decrescente.addEventListener('click', ()=>{
      data.sort((a,b)=> b.price - a.price)
      conteinerCards.innerHTML = ``
      showCards(data)
  })


  function filterByPrice(array){
    
    let filtered = array.filter(annuncio=> Number(annuncio.price) <= priceInput.value);
    conteinerCards.innerHTML = ``;
    // showCards(filtered);
    return filtered;
    
    
  }


priceInput.addEventListener('input', ()=>{
    priceValue.innerHTML = priceInput.value;

            // filterByPrice()
            globalFilter();
    
})

function filterByWord(array){
    let filtered = array.filter(annuncio=> annuncio.name.includes(wordInput.value));
    conteinerCards.innerHTML = ``;
    // showCards(filtered);
    return filtered;

}
wordInput.addEventListener('input', ()=>{
    // filterByWord(data);
    globalFilter();
   })

function globalFilter() {
    let filtratiPerCategoria = filterByCategories(data, bottoneID);    
    let filtratiPerPrezzo = filterByPrice(filtratiPerCategoria);
    let filtratiPerParola = filterByWord(filtratiPerPrezzo); 


    showCards(filtratiPerParola);
}

let reset = document.querySelector('#reset');
  let All = document.querySelector('#All')
  reset.addEventListener('click', ()=>{
    crescente.checked = false;
    decrescente.checked = false;
    All.checked = true;
    wordInput.value = '';
    priceInput.value = maxPrice;
    conteinerCards.innerHTML = '';
    showCards(data)
  })
  

})