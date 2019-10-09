let tax = 0
function taxBracket(x) {
  if (x< 30000) {
  return 8;
  }
else if (x > 30000 && x < 99999) {
  return 15;
  }
else {
  return 25;
  }
  }
btnSubmit.onclick=function(){
  let income = inptIncome.value;
  lblTaxBracket.value =`With your income of $${income}, you are in a tax bracket of ${taxBracket(Number(income))}\%`
}


btnGoAgain.onclick=function(){
  inptIncome.value = '';
  lblTaxBracket.value = '';
}
