document.addEventListener('DOMContentLoaded',()=> {
    const elementosCarousel=document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration:150,
        dist:-80,
        shift: 5,
        padding: 5,
        numVisible:6,
        indicators:true,
        

    });

});

jQuery('document').ready(function($){
var menuBtn=$('.menu-icon'),
    menu=$('.navigation ul');
        menu.removeClass('show');
    menuBtn.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }else{
            menu.addClass('show');
        }
    });
});

jQuery('document').ready(function($){
    var menuBtn=$('.menu-icon'),
        menu=$('.navigation ul');
            menu.removeClass('show1');
        menuBtn.click(function(){
            if(menu.hasClass('show1')){
                menu.removeClass('show1');
            }else{
                menu.addClass('show1');
            }
        });
    });

