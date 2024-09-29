// ==UserScript==
// @name        webpack-userscript-template
// @namespace   https://trim21.me/
// @version     0.0.2
// @author      Trim21 <trim21me@gmail.com>
// @source      https://github.com/Trim21/webpack-userscript-template
// @match       http://www.example.com/*
// @require     file://C:\Dev\GitHub\tampermonkey-userscript-template\dist\index.prod.user.js
// @grant       GM.xmlHttpRequest
// @connect     httpbin.org
// @run-at      document-end
// ==/UserScript==
!function(){"use strict";if($("#validate-step4").length>0){$("#AdresaEmail").val("Botihtc@gmail.com"),$("#ConfirmareAdresaEmail").val("Botihtc@gmail.com");var e=setInterval((function(){$("#Nume").prop("disabled")||(clearInterval(e),$("#Nume").val("Bartha"),$("#Prenume").val("Botond"),$("#SerieCI").val("ZS"),$("#NumarCI").val("304990"),$("#CiValabilDeLa").val("11.04.2023"),$("#CiValabilPanaLa").val("03.08.2031"),$("#CNP").val("1771209264373"),$("#Adresa").val("Jud.MS Sat.Panet (Com.Panet) nr.56"),$("#Judet").val("Mures"),$("#Telefon").val("0740969979"),setTimeout((function(){$("#validate-step2").click()}),1e3))}),1e3),a=setInterval((function(){if(!$("#document_1").hasClass("disabled")){clearInterval(a);for(let e=1;e<=4;e++)$("#document_"+e).click()}}),1e3);$("#validate-step3").click((function(){var e=setInterval((function(){$("#CheckDeAcord2").prop("disabled")||(clearInterval(e),$("#CheckDeAcord").prop("checked",!0),$("#CheckDeAcord2").prop("checked",!0),$("#CheckDeAcord3").prop("checked",!0),$("#CheckDeAcord4").prop("checked",!0),checkDeAcord())}),1e3)}))}}();