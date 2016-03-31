$(function () {

  var slideAuto = setInterval(slideGo, 3000);

  $('.control span').click(function(){
    clearInterval(slideAuto);
    if(!$(this).hasClass('active')) {
      var goTo = $(this).attr('id');
      $('.slide_item.first').fadeOut(400, function () {
        $('.slide_item').fadeOut().removeClass('first');
        $('.slide_item:eq(' + goTo + ')').fadeIn().addClass('first');
        slideMark();
      });
    }
  });

  // Botão para avançar o slide
  function slideGo() {
    if ($('.slide_item.first').next('.slide_item').size()) {
      $('.slide_item.first').fadeOut(400, function (){
        $('.slide_item').fadeOut().removeClass('first');
        $(this).next().fadeIn().addClass('first');
        slideMark();
      });
    } else {
      $('.slide_item.first').fadeOut(400, function (){
        $('.slide_item').removeClass('first');
        $('.slide_item:eq(0)').fadeIn().addClass('first');
        slideMark();
      });
    }
  };


  // Botão para voltar o slide
  function slideBack() {
    if ($('.slide_item.first').index() > 1) {
      $('.slide_item.first').fadeOut(400, function (){
        $('.slide_item').fadeOut();removeClass('first');
        $(this).prev().fadeIn().addClass('first');
        slideMark();
      });
    } else {
        $('.slide_item.first').fadeOut(400, function (){
        $('.slide_item').removeClass('first');
        $('.slide_item:last-of-type').fadeIn().addClass('first');
        slideMark();
      });
    }
  };


  // Marca a posição no numeral
  function slideMark() {
    var slideThis = $('.slide_item.first').index() - 1;
    $('.control span').removeClass('active');
    $('.control span:eq(' + slideThis + ')').addClass('active');
  };


  // Filtro de categorias

  $('.navCategorias a').click(function() {
    $('.navCategorias a').removeClass('current');
    $(this).addClass('current');
    
    // Recupera o valor para passar a categoria selecionada
    var filterVal = $(this).attr('rel');
    
    // Verifica se a categoria é a mesma passada pelo atributo rel  
    $('#listaCategorias .categoria').each(function() {
      if(!$(this).hasClass(filterVal)) {
        $(this).fadeOut('normal').addClass('hidden');
      } else {
        $(this).fadeIn('slow').removeClass('hidden');
      }
    });
        
    return false;
  });


});


