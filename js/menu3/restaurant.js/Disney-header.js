
let header = document.querySelector('header'),
        nav = document.querySelector('nav');
        

        nav.addEventListener('mouseover', ()=>{
            header.style.height = '280px';
        })

        nav.addEventListener('mouseout', ()=>{
            header.style.height = '100px';
        })
