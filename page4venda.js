var prateleiraimg, papelRimg, garrafaRimg, papelaoimg, maisimg, menosimg, vendaimg;//imagens
var prateleira, papelR, garrafaR, papelao, mais1, menos1, mais2, menos2, mais3, menos3, venda;//sprites
var vpapelR = 0, vgarrafaR = 0, vpapelao = 0;
var qpapelR = 0, qgarrafaR = 0, qpapelao = 0, saldo;//central
var qpapelRAux = 0, qgarrafaRAux = 0, qpapelaoAux = 0
var qpapelRLocal, qgarrafaRLocal, qpapelaoLocal, saldoLocal;//central
var indexVenda = 0;
var cont = 0;//controlador
var q1 = 0, q2 = 0, q3 = 0;//Quantidade escolhida para vender

function preload(){

    prateleiraimg = loadImage( "prateleira.jpg" );
    papelRimg = loadImage( "papel_reciclado.png" );
    garrafaRimg = loadImage( "garrafa-pet-reciclada.jpg" );
    papelaoimg = loadImage( "papelao.png" );
    maisimg = loadImage( "mais.jpg" );
    menosimg = loadImage( "menos.jpg" );
    vendaimg = loadImage( "venda.png" );

}

function setup() {

    createCanvas( 984, 656 );

    prateleira = createSprite( 492, 328 );
    prateleira.addImage( prateleiraimg );
    prateleira.scale = 0.25;

    papelR = createSprite( 200, 180 );
    papelR.addImage( papelRimg );
    papelR.scale = 0.04;

    garrafaR = createSprite( 520, 180 );
    garrafaR.addImage( garrafaRimg );
    garrafaR.scale = 0.2;

    papelao = createSprite( 770, 180 );
    papelao.addImage( papelaoimg );
    papelao.scale = 0.2;

    //Mais e menos do papel reciclado
    mais1 = createSprite( 250, 250 );
    mais1.addImage( maisimg );
    mais1.scale = 0.06;
    menos1 = createSprite( 150, 250 );
    menos1.addImage( menosimg );
    menos1.scale = 0.06;

    //mais e menos da garrafa reciclada
    mais2 = createSprite( 580, 250 );
    mais2.addImage( maisimg );
    mais2.scale = 0.06;
    menos2 = createSprite( 480, 250 );
    menos2.addImage( menosimg );
    menos2.scale = 0.06;

    //mais e menos do papelão
    mais3 = createSprite( 820, 250 );
    mais3.addImage( maisimg );
    mais3.scale = 0.06;
    menos3 = createSprite( 720, 250 );
    menos3.addImage( menosimg );
    menos3.scale = 0.06;

    venda = createSprite( 520, 450 );
    venda.addImage( vendaimg );
    venda.scale = 0.5;


}

function draw() {

    background( "red" );

    //ESCOLHENDO AS QUANTIDADES PARA VENDER: Q1 = QPAPELR, Q2 = QGARRAFAR E Q3 =  QPAPELAO
    if( mousePressedOver( menos1 ) && cont == 0 && q1 > 0) {

        q1 = q1 - 1;
        cont = 1;

    }

    if( mousePressedOver( mais1 ) && cont == 0 && qpapelR > q1 ) {

        q1 = q1 + 1;
        cont = 1;

    }

    if( mousePressedOver( menos2 ) && cont == 0 && q2 > 0 ) {

        q2 = q2 - 1;
        cont = 1;

    }

    if( mousePressedOver( mais2 ) && cont == 0 && qgarrafaR > q2 ) {

        q2 = q2 + 1;
        cont = 1;

    }

    if( mousePressedOver( menos3 ) && cont == 0 && q3 > 0 ) {

        q3 = q3 - 1;
        cont = 1;

    }

    if( mousePressedOver( mais3 ) && cont == 0 && qpapelao > q3 ) {

        q3 = q3 + 1;
        cont = 1;

    }

    //BOTÃO VENDA
    if ( mousePressedOver( venda ) && cont == 0 ){

        saldo = saldo + ( q1 * 30 ) + ( q2 * 20 ) + ( q3 * 10 );
        qpapelR = qpapelR - q1;
        qgarrafaR = qgarrafaR - q2;
        qpapelao = qpapelao - q3;
        q1 = 0;
        q2 = 0;
        q3 = 0;
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

    //Exibição preço dos produtos
    fill( "blue" );
    textSize(25);
    text ( "R$: 30,00", 270, 200 );//preço papelR
    text ( "R$: 20,00", 575, 200 );//preço garrafaR
    text ( "R$: 10,00", 830, 200 );//preço papelao
    //Exibição das quantidades
    text( "Quant: " + qpapelR, 270, 170 );
    text( "Quant: " + qgarrafaR, 575, 170 );
    text( "Quant: " + qpapelao, 830, 170 );

    fill( "white" );
    textSize( 20 );
    text( q1, 195, 260 );
    text( q2, 525, 260 );
    text( q3, 765, 260 );
    
    //Exibição do Saldo //NOVO
    fill( "black" );
    textSize( 30 );
    text ( "Saldo R$: " + saldo, 750, 70 );

    //ARMAZENAMENTO LOCAL
    indexVenda = localStorage.getItem( 'indexVenda' );

    if ( indexVenda == 1 ) {

        saldoLocal = localStorage.getItem( 'saldo' );
        saldo = parseInt ( saldoLocal );
        qpapelRLocal = localStorage.getItem( 'qpapelR', qpapelR );
        qpapelRAux = parseInt ( qpapelRLocal );

        if ( qpapelR > 0 || qpapelRAux > 0 ) {

            qpapelR = parseInt ( qpapelRLocal );

        }
        
        qgarrafaRLocal = localStorage.getItem( 'qgarrafaR', qgarrafaR );
        qgarrafaRAux = parseInt ( qgarrafaRLocal );

        if ( qgarrafaR > 0 || qgarrafaRAux > 0 ) {

            qgarrafaR = parseInt ( qgarrafaRLocal );

        }
        
        qpapelaoLocal = localStorage.getItem( 'qpapelao', qpapelao );
        qpapelaoAux = parseInt ( qpapelaoLocal );

        if ( qpapelao > 0 || qpapelaoAux > 0 ) {

            qpapelao = parseInt ( qpapelaoLocal );

        }
        

        localStorage.setItem( 'indexVenda', 0 );

  }
   
}

function mudarPagina() {

    window.location = "index.html";

    localStorage.setItem( 'index', 1 );

    localStorage.setItem( 'saldo', saldo );
    localStorage.setItem( 'qpapelR', qpapelR );
    localStorage.setItem( 'qgarrafaR', qgarrafaR );
    localStorage.setItem( 'qpapelao', qpapelao );

}

function mudarPagina2() {

    window.location = "page2loja.html";

    localStorage.setItem( 'indexLoja', 1 );

    localStorage.setItem( 'saldo', saldo );
    localStorage.setItem( 'qpapelR', qpapelR );
    localStorage.setItem( 'qgarrafaR', qgarrafaR );
    localStorage.setItem( 'qpapelao', qpapelao );

}

function mudarPagina3() {

    window.location = "page3central.html";

    localStorage.setItem( 'indexCentral', 1 );

    localStorage.setItem( 'saldo', saldo );
    localStorage.setItem( 'qpapelR', qpapelR );
    localStorage.setItem( 'qgarrafaR', qgarrafaR );
    localStorage.setItem( 'qpapelao', qpapelao );

}