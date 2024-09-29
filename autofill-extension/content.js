if ($('#validate-step4').length > 0) {
  $('#AdresaEmail').val('Botihtc@gmail.com');
  $('#ConfirmareAdresaEmail').val('Botihtc@gmail.com');

  var checkPas2 = setInterval(function() {
    if (!$('#Nume').prop('disabled')) {
      clearInterval(checkPas2);
      $('#Nume').val('Bartha');
      $('#Prenume').val('Botond');
      $('#SerieCI').val('ZS');
      $('#NumarCI').val('304990');
      $('#CiValabilDeLa').val('11.04.2023');
      $('#CiValabilPanaLa').val('03.08.2031');
      $('#CNP').val('1771209264373');
      $('#Adresa').val('Jud.MS Sat.Panet (Com.Panet) nr.56');
      $('#Judet').val('Mures');
      $('#Telefon').val('0740969979');
      setTimeout(function() {
        $('#validate-step2').click();
      }, 1000);
    }
  }, 1000);

  var checkPas3 = setInterval(function() {
    if (!$('#document_1').hasClass('disabled')) {
      clearInterval(checkPas3);
      for (let i = 1; i <= 4; i++) {
        $('#document_' + i).click();
      }
    }
  }, 1000);

  $('#validate-step3').click(function() {
    var checkPas4 = setInterval(function() {
      if (!$('#CheckDeAcord2').prop('disabled')) {
        clearInterval(checkPas4);
        $('#CheckDeAcord').prop('checked', true);
        $('#CheckDeAcord2').prop('checked', true);
        $('#CheckDeAcord3').prop('checked', true);
        $('#CheckDeAcord4').prop('checked', true);
        checkDeAcord();
      }
    }, 1000);
  });
}