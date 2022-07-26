var subtotal = (13+1)*5;

var shippinng = 0.5 * (13+1);

var total = subtotal + shippinng;

var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent= total;
