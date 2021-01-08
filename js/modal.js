$(document).ready(function () {

  $('.imagen-proyecto').on('click', function () {

    var rutaImagen = $(this).attr('src');
    var modal = '<div class="modal" id="modal"><img src="'+ rutaImagen  +'" alt=""><div class="btn-cerrar" id="btnCerrar"><p>x</p></div></div>';

    $('#Portafolio').after(modal);

    $('#btnCerrar').on('click', function () {
      $('#modal').remove();
    })
  })

  $(document).on('keyup', function (e) {
    if (e.which==27) {
      $('#modal').remove();
    }
  })

});
