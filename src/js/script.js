let pack = document.getElementById('pack'), 
controller = document.getElementById('controller'), 
bandeau = document.getElementById('bandeau');

pack.addEventListener("mouseover", function(){
    pack.textContent="449€";
});

pack.addEventListener("mouseout", function(){
    pack.textContent="Pack complet";
});

controller.addEventListener("mouseover", function(){
    controller.textContent="79€";
});

controller.addEventListener("mouseout", function(){
    controller.textContent="Oculus Touch";
});

bandeau.addEventListener("mouseover", function(){
    bandeau.textContent="69€";
});

bandeau.addEventListener("mouseout", function(){
    bandeau.textContent="Bandeau";
});





// Utilisation de la librairie WAYPOINT

// Définitions des ids visé
var ids = ['confort', 'buy'];

ids.forEach(function(id){

    var element = document.getElementById(id);

    var waypoint = new Waypoint({
        element: element,
        handler: function(direction) {
            element.classList.add('is-reached');
        },
        offset: '20%'
    })

});


  