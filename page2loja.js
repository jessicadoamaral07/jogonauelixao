var prateleiraimg, sacoimg, tesouraimg, colaimg, cxFimg;
var prateleira, saco, tesoura, cola, cxF;
var maisimg, menosimg;
var mais1, menos1, mais2, menos2, mais3, menos3, mais4, menos4;
var qareia = 0, qcola = 0, qtesoura = 0, qcx = 0, saldo = 100;
var qareiaAux = 0, qcolaAux = 0, qtesouraAux = 0, qcxAux = 0, saldoAux = 100;
var qareiaLocal, qcolaLocal, qtesouraLocal, qcxLocal, saldoLocal; // pega valor local como string
var indexLoja = 0, indexLojaLocal;
var cont = 0;

function preload(){

  prateleiraimg = loadImage( "prateleira.jpg" );
  sacoimg = loadImage( "saco_de_areia.png" );
  tesouraimg = loadImage( "tesoura.png" );
  colaimg = loadImage( "cola.png" );
  cxFimg = loadImage( "caixa_fechada.png" );
  maisimg = loadImage( "mais.jpg" );
  menosimg = loadImage( "menos.jpg" );

}

function setup() {

    createCanvas( 984, 656 );

    prateleira = createSprite( 492, 328 );
    prateleira.addImage( prateleiraimg );
    prateleira.scale = 0.25;

    saco = createSprite( 200, 150 );
    saco.addImage( sacoimg );
    saco.scale = 0.06;

    cola = createSprite( 520, 160 );
    cola.addImage( colaimg );
    cola.scale = 0.1;

    tesoura = createSprite( 770, 180 );
    tesoura.addImage( tesouraimg );
    tesoura.scale = 0.2;

    cxF=createSprite( 520, 450 );
    cxF.addImage( cxFimg );
    cxF.scale = 0.1;


    //Mais e menos do saco de areia
    mais1 = createSprite( 230, 250 );
    mais1.addImage( maisimg );
    mais1.scale = 0.06;
    menos1 = createSprite( 130, 250 );
    menos1.addImage( menosimg );
    menos1.scale = 0.06;

    //mais e menos da cola
    mais2 = createSprite( 580, 250 );
    mais2.addImage( maisimg );
    mais2.scale = 0.06;
    menos2 = createSprite( 480, 250 );
    menos2.addImage( menosimg );
    menos2.scale = 0.06;

    //mais e menos da tesoura
    mais3 = createSprite( 820, 250 );
    mais3.addImage( maisimg );
    mais3.scale = 0.06;
    menos3 = createSprite( 720, 250 );
    menos3.addImage( menosimg );
    menos3.scale = 0.06;

    //mais e menos da caixa
    mais4 = createSprite( 580, 515 );
    mais4.addImage( maisimg );
    mais4.scale = 0.06;
    menos4 = createSprite( 460, 515 );
    menos4.addImage( menosimg );
    menos4.scale = 0.06;

}

function draw() {
    
    background( "red" );

    if( mousePressedOver( mais1 ) && cont == 0 && saldo >= 30 ) {

        qareia = qareia + 1;
        saldo = saldo - 30;
        cont = 1;

    }

    if( mousePressedOver( menos1 ) && cont == 0 && qareia > 0 ) {

        qareia = qareia - 1;
        saldo = saldo + 30;
        cont = 1;

    }

    if( mousePressedOver( mais2 ) && cont == 0 && saldo >= 10 ) {

        qcola = qcola + 1;
        saldo = saldo - 10;
        cont = 1;

    }

    if( mousePressedOver( menos2 ) && cont == 0 && qcola > 0 ) {

        qcola = qcola - 1;
        saldo = saldo + 10;
        cont = 1;

    }

    if( mousePressedOver( mais3 ) && cont == 0 && saldo >= 10 ) {

        qtesoura = qtesoura + 1;
        saldo = saldo - 10;
        cont = 1;

    }

    if( mousePressedOver( menos3 ) && cont == 0 && qtesoura > 0 ) {

        qtesoura = qtesoura - 1;
        saldo = saldo + 10;
        cont = 1;

    }

    if( mousePressedOver( mais4 ) && cont == 0 && saldo >= 5 ) {

        qcx = qcx + 1;
        saldo = saldo - 5;
        cont = 1;

    }

    if( mousePressedOver( menos4 ) && cont == 0 && qcx > 0) {

        qcx = qcx - 1;
        saldo = saldo + 5;
        cont = 1;

    }

    //CONTROLADOR PARA CONTABILIZAR APENAS 1 QUANDO CLICAR NO + E -
    if( cont == 1 ){
        setTimeout( function() {
            cont = cont + 1;
            if( cont == 4 ){
                cont = 0;
          }
        }, 70 );
    }
    //FIM DO CONTROLADOR

    drawSprites();

    //exibição das quantidades selecionadas
    fill( "white" );
    textSize( 20 );
    text( qareia, 175, 260 );
    text( qcola, 525, 260 );
    text( qtesoura, 765, 260 );
    text( qcx, 510, 528 );
    //Exibição preço dos produtos
    fill( "blue" );
    textSize( 25 );
    text ( "R$: 30,00", 285, 200 );//preço areia
    text ( "R$: 10,00", 550, 200 );//preço cola
    text ( "R$: 10,00", 800, 200 );//preço tesoura
    text ( "R$: 5,00", 600, 480 );//preço caixa
    //Exibição do Saldo
    fill( "black" );
    textSize( 30 );
    text ( "Saldo R$: " + saldo, 750, 70 );

    //ARMAZENAMENTO LOCAL
    indexLoja = localStorage.getItem( 'indexLoja' );

    if ( indexLoja == 1 ) {

        qareiaLocal =  localStorage.getItem( 'qareia' );
        qareiaAux = parseInt( qareiaLocal );

        if ( qareia > 0 || qareiaAux > 0 ) {

            qareia = parseInt( qareiaLocal );

        }

        qcolaLocal =  localStorage.getItem( 'qcola' );
        qcolaAux = parseInt( qcolaLocal );

        if ( qcola > 0 || qcolaAux > 0 ) {

            qcola = parseInt( qcolaLocal );

        }

        qtesouraLocal =  localStorage.getItem( 'qtesoura' );
        qtesouraAux = parseInt( qtesouraLocal );

        if ( qtesoura > 0 || qtesouraAux > 0 ) {

            qtesoura = parseInt( qtesouraLocal );

        }

        qcxLocal =  localStorage.getItem( 'qcx' );
        qcxAux = parseInt( qcxLocal );

        if ( qcx > 0 || qcxAux > 0 ) {

            qcx = parseInt( qcxLocal );

        }

        saldoLocal = localStorage.getItem( 'saldo' );
        saldoAux = parseInt ( saldoLocal );

        if ( saldo < 100 || saldoAux < 100 || saldo > 100 || saldoAux > 100) {

            saldo = parseInt ( saldoLocal );

        }

        localStorage.setItem( 'indexLoja', 0 );

  }

}

function mudarPagina() {

    window.location = "index.html";

    localStorage.setItem( 'index', 1 );

    localStorage.setItem( 'qareia', qareia );
    localStorage.setItem( 'qcola', qcola );
    localStorage.setItem( 'qtesoura', qtesoura );
    localStorage.setItem( 'qcx', qcx );
    localStorage.setItem( 'saldo', saldo );
    

}

function mudarPagina2() {

    window.location = "page3central.html";

    localStorage.setItem( 'indexCentral', 1 );

    localStorage.setItem( 'qareia', qareia );
    localStorage.setItem( 'qcola', qcola );
    localStorage.setItem( 'qtesoura', qtesoura );
    localStorage.setItem( 'qcx', qcx );
    localStorage.setItem( 'saldo', saldo );

}

function mudarPagina3() {

    window.location = "page4venda.html";

    localStorage.setItem( 'indexVenda', 1 );

    localStorage.setItem( 'qareia', qareia );
    localStorage.setItem( 'qcola', qcola );
    localStorage.setItem( 'qtesoura', qtesoura );
    localStorage.setItem( 'qcx', qcx );
    localStorage.setItem( 'saldo', saldo );

}