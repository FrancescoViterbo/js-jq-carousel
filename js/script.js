/* Attivo lo script quando il documento è caricato */
$( document ).ready(function() {
    /* Al keypress di destra e sinistra attivo le funzioni per scorrere le immagini */
    $(document).keydown(function(e) {
        if ( e.keyCode === 37 ) {
            e.preventDefault();
            immaginePrecedente();
        } else if (e.keyCode === 39) {
            e.preventDefault();
            prossimaImmagine();
        }
    });

    /* Al click sui pulsanti collego le funzioni relative per scorrere le immagini */
    $("div.prev").click(immaginePrecedente);
    $("div.next").click(prossimaImmagine);
    $(".nav").children().click(immagineCollegata);
    
    /* Funzioni */
    /* Sposto la classe "active" all'elemento precendente */
    function immaginePrecedente() {
        var imgAttiva = $(".active");
        imgAttiva.removeClass("active");

        if (imgAttiva.hasClass("first")) {
            $(".last").addClass("active");
        } else {
            imgAttiva.prev().addClass("active");
        }
    }
    /* Sposto la classe "active" all'elemento successivo */
    function prossimaImmagine() {
        var imgAttiva = $(".active");
        imgAttiva.removeClass("active");

        if (imgAttiva.hasClass("last")) {
            $(".first").addClass("active");
        } else {
            imgAttiva.next().addClass("active");
        }
    }
    /* Ad ogni pulsante della nav faccio corrispondere un'immagine e attivo
    la classe active su questa */
    function immagineCollegata() {
        /* Rimuovo la classe "active" dal pulsante precedentemente attivato */
        $(".nav > .active").removeClass("active");
        /* Aggiungo la classe "active" sul pulsante cliccato */
        $(this).addClass("active");
        /* prendo l'index del pulsante cliccato */
        var indexElemento = $(this).index();
        /* Rimuovo la classe "active" dall'immagine precedentemente attivata */
        $("img.active").removeClass("active");
        /* Con una variabile, collego l'index del pulsante cliccato alle varie immagini */
        var immagineSpecifica = "img:nth-child(" + (indexElemento + 1) + ")";
        $(immagineSpecifica).addClass("active");
    }

});