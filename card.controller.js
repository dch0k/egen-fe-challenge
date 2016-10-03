(function() {
  'use strict';

  angular.module('creditcardcheck').controller('CardController', CardController);

  function CardController() {
    
    var cardVm = this;
    cardVm.cardType = null;

    cardVm.checkNum = function(ccnumber) {
      console.log(ccnumber);

      var Vregex = /^4[0-9]{12}(?:[0-9]{3})?$/;
      var Mregex = /^5[1-5][0-9]{14}|222[1-9][0-9]{12}|22[3-9][0-9]{13}|2[3-6][0-9]{14}|27[01][0-9]{12}|2720[0-9]{12}$/;
      var Aregex = /^3[47][0-9]{13}$/;
      var Dregex = /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/;

      if (Vregex.test(ccnumber)) {
        cardVm.cardType = "visa";
      } else if (Mregex.test(ccnumber)) {
        cardVm.cardType = "masterCard";
        return
      } else if (Aregex.test(ccnumber)) {
        cardVm.cardType = "amex";
        return
      } else if (Dregex.test(ccnumber)) {
        cardVm.cardType = "discover";
        return
      } else {
        cardVm.cardType = "dummy";
      }
    }
  }
})();