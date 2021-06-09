function calculate() {
    var result = 0;
    var coupon = document.getElementById('coupon');
    var checked = document.querySelectorAll('[type="checkbox"]:checked');
    checked.forEach(function(element) {
      result += parseInt(element.value);
    });
    if (coupon.value.toLowerCase() === 'promo30') {
      var sconto = result / 100 * 30;
      result -= sconto;
    }
    if (coupon.value.toLowerCase() === 'xottavio') {
        var sconto = result / 100 * 50;
        result -= sconto;
      }
    result /= 100;
    document.getElementById('output').innerHTML = "$" + result.toFixed(2);
  }
