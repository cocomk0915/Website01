/*
  Step 1. Correct the variable scope so that the console.log()
  call outputs the correct value (5) for x. You must still use
  `x` as the variable inside the function, however.
*/

x = 5;

function double(num) {
  var x = num * 2;
  return x;
}

double(1);
console.log('The Value of x is', x, '-- it should be 5.');

/*
  Step 2. Rewrite the JavaScript `double()` function above so that
  it does not pollute the global namespace: that is, neither its
  variables nor the `double()` function itself can be accessed
  directly via the global `window` object, like `window.x`).

  Be sure to comment out the original `double()` function so you
  can accurately test your work.
*/
(function() {
  var x = 5;
  function double (num) {
    var x = num * 2;
    return x;
  }

double (1);
console.log('The Value of x is', x, '-- it should be 5.');
}
);

/*
  Step 3. Rewrite your corrected `double()` function from Step 2.
  so that non-number values passed into the function are handled
  in some reasonable way.
*/

(function() {
  var x = 5;
  function double (num) {
    if (typeof(num) = "number") {
      var x = num * 2;
      return x;
    }
    else{
      return ('Input is not a correct number.')
    }
  }

  double (1);
  console.log('The Value of x is', x, '-- it should be 5.');
})();
