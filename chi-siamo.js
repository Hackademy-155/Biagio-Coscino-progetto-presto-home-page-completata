let chiSiamo = [
    {
        name:'Giorgia Rossi',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus tempore illum veniam ipsum.',
        job: 'CEO',
        img:'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name:'Luca Bianchi',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus tempore illum veniam ipsum.',
        job: 'CTO',
        img:'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name:'Sophia Neri',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus tempore illum veniam ipsum.',
        job: 'Student',
        img:'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
]

let navbar = document.querySelector('nav');


document.addEventListener('scroll', () => {

    if (window.scrollY > 895) {
        navbar.classList.add('navbarScroll');
    } else {
        navbar.classList.remove('navbarScroll');
    }
})



let containerTeam = document.querySelector('#containerTeam');


chiSiamo.forEach(persona => {
    let div = document.createElement('div');
    div.classList.add('col-6', 'col-md-3');
    div.innerHTML = `<div class="card my-2">
  <img src="${persona.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${persona.name}</h5>
    <p class="card-text text-truncate">${persona.description}</p>
    <p class="card-text">${persona.job}</p>
  </div>
</div>`
   containerTeam.appendChild(div);
})
