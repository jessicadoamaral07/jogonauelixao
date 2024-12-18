var cxAimg, cxFimg, salaimg,confeteimg, papelRimg, garrafaRimg, papelaoimg;//imagens
var cxF, cxA, sala, confete, papelR, garrafaR, papelao;//sprites
var contador = 0, cont = 0;//controladores
var lataPonto = 0, garrafaPonto = 0, papelPonto = 0, vidroPonto = 0;//lixao
var papelLocal, lataPontoLocal, garrafaPontoLocal, vidroPontoLocal;//lixao
var qareia = 0, qcola = 0, qtesoura = 0, qcx = 0, saldo;//loja
var qareiaLocal, qcolaLocal, qtesouraLocal, qcxLocal, saldoLocal;//loja
var qparafuso = 0, qmartelo = 0, qtinta = 0, qchave = 0, qcxVazia = 0;//central
var qparafusoAux = 0, qmarteloAux = 0, qtintaAux = 0, qchaveAux = 0, qcxVaziaAux = 0;//central
var qparafusoLocal, qmarteloLocal, qtintaLocal, qchaveLocal, qcxVaziaLocal;//central
var qpapelR = 0, qgarrafaR = 0, qpapelao = 0;//central
var qpapelRAux = 0, qgarrafaRAux = 0, qpapelaoAux = 0;//central
var qpapelRLocal, qgarrafaRLocal, qpapelaoLocal;//central
var indexCentral = 0;
var matExtra;
var cupom;

function preload(){

  cxAimg = loadImage( "caixa_aberta.png" );
  cxFimg = loadImage( "caixa_fechada.png" );
  salaimg = loadImage( "sala.jpg" );
  confeteimg = loadImage( "confete.png" );
  papelRimg = loadImage( "papel_reciclado.png" );
  garrafaRimg = loadImage( "garrafa_reciclada.png" );
  papelaoimg = loadImage( "papelao.png" );

}

function setup() {

    createCanvas( 984, 656 );

    sala = createSprite( 492, 328 );
    sala.addImage( salaimg );

    cxF = createSprite( 520, 580 );
    cxF.addImage( cxFimg );
    cxF.scale = 0.1;

    cxA = createSprite( 520, 580 );
    cxA.addImage( cxAimg );
    cxA.scale = 0.3;
    cxA.visible = false;

    confete = createSprite( 520, 540 );
    confete.addImage( confeteimg );
    confete.scale = 0.05;
    confete.visible = false;

    papelR = createSprite( 900, 70 );
    papelR.addImage( papelRimg );
    papelR.scale = 0.05;

    garrafaR = createSprite( 900, 200 );
    garrafaR.addImage( garrafaRimg );
    garrafaR.scale = 0.2;

    papelao = createSprite( 900, 350 );
    papelao.addImage( papelaoimg );
    papelao.scale = 0.2;
    
}

function draw() {
  
    background("white");
    
    drawSprites();
  
    //Exibir quantidades na tela
    fill( "white" );
    textSize( 20 );
    text( "Lata: " + lataPonto, 10, 20 );
    text( "Papel: " + papelPonto, 10, 50 );
    text( "Garrafa: " + garrafaPonto, 10, 80 );
    text( "Vidro: " + vidroPonto, 10, 110 );
    text( "Saco de Areia: " + qareia, 10, 140 );
    text( "Cola: " + qcola, 10, 170 );
    text( "Tesoura: " + qtesoura, 10, 200 );
    text( "Caixa: " + qcx, 10, 230 );

    //Texto dos produtos
    textSize( 12 );
    text( "Para fazer: Desconto de 3 papéis", 800, 130 );  
    text( "Para fazer: Desconto de \n 1 garrafa + 1 areia \n + 1 tesoura + 1 tinta", 830, 270 );
    text( "Para fazer: Desconto de \n 1 caixa vazia", 830, 400 );
    
    //Texto do que ganha nas caixas
    textSize( 20 );
    text( "Caixa Vazia: " + qcxVazia , 120, 230 );
    text( "Martelo: " + qmartelo , 120, 250 );
    text( "Parafuso: " + qparafuso , 120, 270 );
    text( "Chave de Fenda: " + qchave , 120, 290 );
    text( "Tinta: " + qtinta , 120, 310 );

    //Texto dos produtos feitos
    if( qpapelR > 0 ) {

        textSize( 20 );
        text( "Papel reciclado: " + qpapelR , 120, 50 );

    }

    if( qgarrafaR > 0 ) {

        textSize( 20 );
        text( "Garrafa reciclada: " + qgarrafaR , 120, 80 );

    }

    if( qpapelao > 0 ) {

        textSize( 20 );
        text( "Papelão: " + qpapelao , 120, 110 );

    }

    //COMPRA DE PRODUTOS RECICLÁVEIS
    if  ( mousePressedOver( papelR ) && papelPonto >= 3 && cont == 0 ) {
        
        qpapelR = qpapelR + 1;
        papelPonto = papelPonto - 3;
        cont = 1;
        
    }

    if  ( mousePressedOver( garrafaR ) && garrafaPonto >= 1 && qareia >= 1 && qtinta >= 1 && qtesoura >= 1 && cont == 0 ) {
        
        qgarrafaR = qgarrafaR + 1;
        garrafaPonto = garrafaPonto - 1;
        qareia = qareia - 1;
        qtinta = qtinta - 1;
        cont = 1;
        //Não descontar a tesoura
        
    }

    if  ( mousePressedOver( papelao ) && qcxVazia >= 1 && cont == 0 ) {
        
        qpapelao = qpapelao + 1;
        qcxVazia = qcxVazia - 1;
        cont = 1;
        
    }
    

    //CÓDIGO PARA ABRIR E FECHAR A CAIXA DEPOIS DE ALGUNS SEGUNDOS
    if ( mousePressedOver( cxF ) && cxF.visible == true && qcx > 0 ) {
        cxF.visible = false;
        cxA.visible = true;
        confete.visible = true;
        qcx = qcx -1 ;
        qcxVazia = qcxVazia + 1;
        contador = 1;
        matExtra = materialExtra();

        if ( matExtra == "Martelo" ) {

            qmartelo = qmartelo + 1;

        }

        if ( matExtra == "Parafuso" ) {

            qparafuso = qparafuso + 1;

        }

        if ( matExtra == "Chave de Fenda" ) {

            qchave = qchave + 1;

        }

        if ( matExtra == "Tinta" ) {

            qtinta = qtinta + 1;

        }

    }

    if( contador == 1 ) {
        text( "Você abriu a caixa e ganhou: " + matExtra, 380, 430 );
        setTimeout( function() {
            contador = contador + 1;
            if( contador ==  15 ) {
                cxA.visible = false;
                confete.visible = false;
                cxF.visible = true;
                contador = 0;
            }
        }, 1000 );

    }
    //FIM DO CÓDIGO PARA ABRIR E FECHAR A CAIXA DEPOIS DE ALGUNS SEGUNDOS


    //CONTROLADOR PARA CONTABILIZAR APENAS 1 QUANDO CLICAR NO PRODUTO
    if( cont == 1 ) {
        setTimeout( function() {
            cont = cont + 1;
            if( cont == 4 ){
                cont = 0;
            }
        }, 70 );
    }
    //FIM DO CONTROLADOR

    // CUPOM
    if ( cupom == "NAUE10" ) {

        qmartelo = qmartelo + 10;
        qparafuso = qparafuso + 10;
        qtinta = qtinta + 10;
        qchave = qchave + 10;
        qcxVazia = qcxVazia + 10;
        qareia = qareia + 10;
        qcola = qcola + 10;
        qtesoura = qtesoura + 10;
        qcx = qcx + 10;
        papelPonto = papelPonto + 10;
        garrafaPonto = garrafaPonto + 10;
        lataPonto = lataPonto + 10;
        vidroPonto = vidroPonto + 10;

        cupom = "NAUE11";//para parar o cupom

    }

    //ARMAZENAMENTO LOCAL
    indexCentral = localStorage.getItem( 'indexCentral' );

    if( indexCentral == 1 ) {

        //lixao
        papelLocal =  localStorage.getItem( 'papelPonto' );
        papelPonto = parseInt( papelLocal );
        lataPontoLocal =  localStorage.getItem( 'lataPonto' );
        lataPonto = parseInt( lataPontoLocal );
        garrafaPontoLocal =  localStorage.getItem( 'garrafaPonto' );
        garrafaPonto = parseInt( garrafaPontoLocal );
        vidroPontoLocal =  localStorage.getItem( 'vidroPonto' );
        vidroPonto = parseInt( vidroPontoLocal );

        //loja
        qareiaLocal =  localStorage.getItem( 'qareia' );
        qareia = parseInt( qareiaLocal );
        qcolaLocal =  localStorage.getItem( 'qcola' );
        qcola = parseInt( qcolaLocal);
        qtesouraLocal =  localStorage.getItem( 'qtesoura' );
        qtesoura = parseInt( qtesouraLocal);
        qcxLocal =  localStorage.getItem( 'qcx' );
        qcx = parseInt( qcxLocal );
        saldoLocal = localStorage.getItem( 'saldo' );
        saldo = parseInt ( saldoLocal );

        //central
        qmarteloLocal = localStorage.getItem( 'qmartelo', qmartelo );
        qmarteloAux = parseInt( qmarteloLocal );

        if ( qmartelo > 0 || qmarteloAux > 0 ){

            qmartelo = parseInt( qmarteloLocal );

        }

        qparafusoLocal = localStorage.getItem( 'qparafuso', qparafuso );
        qparafusoAux = parseInt ( qparafusoLocal );

        if ( qparafuso > 0 || qparafusoAux > 0 ){

            qparafuso = parseInt ( qparafusoLocal );

        }

        qchaveLocal = localStorage.getItem( 'qchave', qchave );
        qchaveAux = parseInt ( qchaveLocal );

        if ( qchave > 0 || qchaveAux > 0 ){

            qchave = parseInt ( qchaveLocal );

        }
        
        qtintaLocal = localStorage.getItem( 'qtinta', qtinta );
        qtintaAux = parseInt ( qtintaLocal );

        if ( qtinta > 0 || qtintaAux > 0 ){

            qtinta = parseInt ( qtintaLocal );

        }
        
        qcxVaziaLocal = localStorage.getItem( 'qcxVazia', qcxVazia );
        qcxVaziaAux = parseInt ( qcxVaziaLocal );

        if ( qcxVazia > 0 || qcxVaziaAux > 0 ){

            qcxVazia = parseInt ( qcxVaziaLocal );

        }

        qpapelRLocal = localStorage.getItem( 'qpapelR', qpapelR );
        qpapelRAux = parseInt ( qpapelRLocal );

        if ( qpapelR > 0 || qpapelRAux > 0 ){

            qpapelR = parseInt ( qpapelRLocal );

        }
        
        qgarrafaRLocal = localStorage.getItem( 'qpapelR', qgarrafaR );
        qgarrafaRAux = parseInt ( qgarrafaRLocal );

        if ( qgarrafaR > 0 || qgarrafaRAux > 0 ){

            qgarrafaR = parseInt ( qgarrafaRLocal );

        }
        
        qpapelaoLocal = localStorage.getItem( 'qpapelao', qpapelao );
        qpapelaoAux = parseInt ( qpapelaoLocal );

        if ( qpapelao > 0 || qpapelaoAux > 0 ){

            qpapelao = parseInt ( qpapelaoLocal );

        }
        
        localStorage.setItem( 'indexCentral', 0 );

    }

}

function materialExtra() {

    numale = Math.round( random( 1, 4 ) );

    if( numale == 1) {

        mat = "Martelo";
    
    }

    if( numale == 2) {

        mat = "Parafuso";

    }

    if( numale == 3) {

        mat = "Chave de Fenda";

    }

    if( numale == 4){

        mat = "Tinta";

    }

    return mat;

}

function mudarPagina() {

    window.location = "index.html";

    localStorage.setItem( 'index', 1 );
    
    //lixao
    localStorage.setItem( 'papel', papelPonto );
    localStorage.setItem( 'lataPonto', lataPonto );
    localStorage.setItem( 'garrafaPonto', garrafaPonto );
    localStorage.setItem( 'vidroPonto', vidroPonto );
    //loja
    localStorage.setItem( 'qareia', qareia );
    localStorage.setItem( 'qcola', qcola );
    localStorage.setItem( 'qtesoura', qtesoura );
    localStorage.setItem( 'qcx', qcx );
    localStorage.setItem( 'saldo', saldo );
    //central
    localStorage.setItem( 'qmartelo', qmartelo );
    localStorage.setItem( 'qparafuso', qparafuso );
    localStorage.setItem( 'qchave', qchave );
    localStorage.setItem( 'qtinta', qtinta );
    localStorage.setItem( 'qcxVazia', qcxVazia );
    localStorage.setItem( 'qpapelR', qpapelR );
    localStorage.setItem( 'qgarrafaR', qgarrafaR );
    localStorage.setItem( 'qpapelao', qpapelao );

}

function mudarPagina2() {

    window.location = "page2loja.html";

    localStorage.setItem( 'indexLoja', 1 );
    
    //lixao
    localStorage.setItem( 'papel', papelPonto );
    localStorage.setItem( 'lataPonto', lataPonto );
    localStorage.setItem( 'garrafaPonto', garrafaPonto );
    localStorage.setItem( 'vidroPonto', vidroPonto );
    //loja
    localStorage.setItem( 'qareia', qareia );
    localStorage.setItem( 'qcola', qcola );
    localStorage.setItem( 'qtesoura', qtesoura );
    localStorage.setItem( 'qcx', qcx );
    localStorage.setItem( 'saldo', saldo );
    //central
    localStorage.setItem( 'qmartelo', qmartelo );
    localStorage.setItem( 'qparafuso', qparafuso );
    localStorage.setItem( 'qchave', qchave );
    localStorage.setItem( 'qtinta', qtinta );
    localStorage.setItem( 'qcxVazia', qcxVazia );
    localStorage.setItem( 'qpapelR', qpapelR );
    localStorage.setItem( 'qgarrafaR', qgarrafaR );
    localStorage.setItem( 'qpapelao', qpapelao );

}

function mudarPagina3() {

    window.location = "page4venda.html";

    localStorage.setItem( 'indexVenda', 1 );
    
    //lixao
    localStorage.setItem( 'papel', papelPonto );
    localStorage.setItem( 'lataPonto', lataPonto );
    localStorage.setItem( 'garrafaPonto', garrafaPonto );
    localStorage.setItem( 'vidroPonto', vidroPonto );
    //loja
    localStorage.setItem( 'qareia', qareia );
    localStorage.setItem( 'qcola', qcola );
    localStorage.setItem( 'qtesoura', qtesoura );
    localStorage.setItem( 'qcx', qcx );
    localStorage.setItem( 'saldo', saldo );
    //central
    localStorage.setItem( 'qmartelo', qmartelo );
    localStorage.setItem( 'qparafuso', qparafuso );
    localStorage.setItem( 'qchave', qchave );
    localStorage.setItem( 'qtinta', qtinta );
    localStorage.setItem( 'qcxVazia', qcxVazia );
    localStorage.setItem( 'qpapelR', qpapelR );
    localStorage.setItem( 'qgarrafaR', qgarrafaR );
    localStorage.setItem( 'qpapelao', qpapelao );

}