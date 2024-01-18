let btn = document.querySelector('.btn-menu');

let menu = document.querySelector('.menu');
let open = false;

function openclose() {
    if (!open) {
        // Código o menu está aberto 
        open = true;
        menu.classList.remove('close');
        menu.classList.add('open');
        
    } else {
        // Código menu JÁ está aberto
        open = false;
        menu.classList.remove('open');
        menu.classList.add('close');
       
    }
    
}
