const menuBtn = document.getElementById('menuBtn');
const menuContent = document.getElementById('mobile-menu-container');

menuBtn.addEventListener('click',function (){
    const state = menuContent.getAttribute('state');
    if (state == 'not-active'){
        menuContent.setAttribute('state','active');
    } else if (state == 'active'){
        menuContent.setAttribute('state','not-active');
    }
})

window.addEventListener('click',function(e){
    if (!menuBtn.contains(e.target) & !menuContent.contains(e.target)){
        menuContent.setAttribute('state','not-active');
    }
})