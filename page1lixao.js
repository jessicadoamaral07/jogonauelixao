var lataimg, papelimg, garrafaimg, vidroimg, lixaoimg;
var lata, papel, garrafa, vidro, lixao;
var numale;
var lataAux = 0, garrafaAux = 0, papelAux = 0, vidroAux = 0;// controlar qual aparece no momento
var lataPonto = 0, garrafaPonto = 0, papelPonto = 0, vidroPonto = 0;
var papelPontoLocal, lataPontoLocal, garrafaPontoLocal, vidroPontoLocal;// pega valor local como string
var index = 0;

function preload(){

  lataimg = loadImage( "lata.png" );
  papelimg = loadImage( "papel.png" ); 
  garrafaimg = loadImage( "garrafa.png" ); 
  lixaoimg = loadImage( "lixao.jpg" );
  vidroimg = loadImage( "vidro.png" );

}

function setup() {
  
  createCanvas( 984, 656 );

  lixao = createSprite( 492, 328 );
  lixao.addImage( lixaoimg );

  lata = createSprite( 500, 350 );
  lata.addImage( lataimg );
  lata.scale = 0.05;
  lata.visible = false;

  garrafa = createSprite( 200, 350 );
  garrafa.addImage( garrafaimg );
  garrafa.scale = 0.1;
  garrafa.visible = true;

  papel = createSprite( 700, 350 );
  papel.addImage( papelimg );
  papel.scale = 0.1;
  papel.visible = false;

  vidro =  createSprite( 300, 350 );
  vidro.addImage( vidroimg );
  vidro.scale = 0.25;
  vidro.visible = false;

}

function draw() {
  
  background("red");

  numale = Math.round( random( 1, 4 ) );
    
  if ( numale == 1 && lataAux == 0 && garrafaAux == 0 && papelAux == 0 && vidroAux == 0 ) {

      lata.x = Math.round( random( 10, 900 ) );
      lata.y = Math.round( random( 300, 600 ) );
      lata.visible = true;
      lataAux = 1;//exibida no momento
  
  } else if ( ( numale == 2 && lataAux == 0 && garrafaAux == 0 && papelAux == 0 && vidroAux == 0 )) {

      garrafa.x = Math.round( random( 10, 900 ) );
      garrafa.y = Math.round( random( 300, 600 ) );
      garrafa.visible = true;
      garrafaAux = 1;//exibida no momento

  } else if ( ( numale == 3 && lataAux == 0 && garrafaAux == 0 && papelAux == 0 && vidroAux == 0 )) {

    papel.x = Math.round( random( 10, 900 ) );
    papel.y = Math.round( random( 300, 600 ) );
    papel.visible = true;
    papelAux = 1;//exibida no momento
  
  } else if ( ( numale == 4 && lataAux == 0 && garrafaAux == 0 && papelAux == 0 && vidroAux == 0 )) {

    vidro.x = Math.round( random( 10, 900 ) );
    vidro.y = Math.round( random( 300, 600 ) );
    vidro.visible = true;
    vidroAux = 1;//exibida no momento

  }

  if ( mousePressedOver( lata ) && lata.visible == true ) {

    lata.visible = false;
    lataAux = 0;//deixou de ser exibida
    lataPonto = lataPonto + 1;

  }

  if ( mousePressedOver( garrafa )  && garrafa.visible == true ) {

    garrafa.visible = false;;
    garrafaAux = 0;//deixou de ser exibida
    garrafaPonto = garrafaPonto + 1;

  }

  if ( mousePressedOver( papel )  && papel.visible == true ) {

    papel.visible = false;;
    papelAux = 0;//deixou de ser exibida
    papelPonto = papelPonto + 1;

  }

  if ( mousePressedOver( vidro )  && vidro.visible == true ) {

    vidro.visible = false;;
    vidroAux = 0;//deixou de ser exibida
    vidroPonto = vidroPonto + 1;

  }
  
  drawSprites();

  textSize( 20 );
  fill( "red" );
  text( "Quantidade Lata: " + lataPonto, 10,20 ); 
  fill( "green" );
  text( "Quantidade Garrafa: " + garrafaPonto, 10,40 ); 
  fill( "blue" );
  text( "Quantidade Papel: " + papelPonto, 10,60 ); 
  fill( "yellow" );
  text( "Quantidade Vidro: " + vidroPonto, 10,80 );
    
  //ARMAZENAMENTO LOCAL
  index =  localStorage.getItem( 'index' );

  if ( index == 1 ){

    papelPontoLocal =  localStorage.getItem( 'papelPonto' );
    papelPonto = parseInt( papelPontoLocal );
    lataPontoLocal =  localStorage.getItem( 'lataPonto' );
    lataPonto = parseInt( lataPontoLocal );
    garrafaPontoLocal =  localStorage.getItem( 'garrafaPonto' );
    garrafaPonto = parseInt( garrafaPontoLocal );
    vidroPontoLocal =  localStorage.getItem( 'vidroPonto' );
    vidroPonto = parseInt( vidroPontoLocal );

    localStorage.setItem( 'index', 0 );

  }
    
}

function mudarPagina() {

  window.location = "page2loja.html";

  localStorage.setItem( 'indexLoja', 1 );

  localStorage.setItem( 'papelPonto', papelPonto );
  localStorage.setItem( 'lataPonto', lataPonto );
  localStorage.setItem( 'garrafaPonto', garrafaPonto );
  localStorage.setItem( 'vidroPonto', vidroPonto );
    
}

function mudarPagina2() {

  window.location = "page3central.html";

  localStorage.setItem( 'indexCentral', 1 );

  localStorage.setItem( 'papelPonto', papelPonto );
  localStorage.setItem( 'lataPonto', lataPonto );
  localStorage.setItem( 'garrafaPonto', garrafaPonto );
  localStorage.setItem( 'vidroPonto', vidroPonto );

}

function mudarPagina3() {

  window.location = "page4venda.html";
  
  localStorage.setItem( 'indexVenda', 1 );
  
  localStorage.setItem( 'papelPonto', papelPonto );
  localStorage.setItem( 'lataPonto', lataPonto );
  localStorage.setItem( 'garrafaPonto', garrafaPonto );
  localStorage.setItem( 'vidroPonto', vidroPonto );

}