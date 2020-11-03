// Bonus:
// i pallini si evidenziano in accordo alla img corrispondente
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// altro esempio: Generiamo i pallini con JS (ma quello che volete liberamente)
// Consiglio del giorno:
// Come sempre è importante usare la documentazione di jQuery per scoprire/rinfrescare memoria sulle funzioni che potrebbero esserci utili.
// Anche perchè qui come gestire eventi da tastiera dovrò vedermelo li.

$( document ).ready(function() {
    
    $(document).keydown = function(e) {
        e.preventDefault();
        if (e === 39) {
            prossimaImmagine;
        } else if (e === 37) {
            immaginePrecedente;
        }
    };

    $("div.prev").click(immaginePrecedente);
    $("div.next").click(prossimaImmagine);
    
    /* Funzioni */
    
    function immaginePrecedente() {
        var imgAttiva = $(".active");
        imgAttiva.removeClass("active");

        if (imgAttiva.hasClass("first")) {
            $(".last").addClass("active");
        } else {
            imgAttiva.prev().addClass("active");
        }
    }

    function prossimaImmagine() {
        var imgAttiva = $(".active");
        imgAttiva.removeClass("active");

        if (imgAttiva.hasClass("last")) {
            $(".first").addClass("active");
        } else {
            imgAttiva.next().addClass("active");
        }
    }

});