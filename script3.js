const allboxes = document.querySelectorAll('[name="visitPlace"]');
const noofpersons = document.getElementById("noofpersons");
const message = document.getElementById("message");
const noofdays = document.getElementById("noofdays");
const discountmessage = document.getElementById("discountmessage");
const yes = document.getElementById("yes");

function calculateCost() {
  event.preventDefault();
  totalCost = 0;
  count = 0;
  for (i = 0; i < allboxes.length; i++) {
    if (allboxes[i].checked) {
      count = count + 1;
      totalCost = totalCost + parseInt(allboxes[i].value);
    }
    let discountprice = 0;
    if (count > 2) {
      discountprice = totalCost * (15 / 100);
    }

    totalCost = totalCost + 150 * parseInt(noofdays.value);
    console.log(`totalcost${totalCost}  checkbox${i}`);
    message.innerHTML = `you have to pay ${
      totalCost * parseInt(noofpersons.value) - discountprice
    }`;
    discountmessage.innerHTML = `you got a discount on this trip ${discountprice}`;
  }
}
function okeyfunction() {
  if (yes.checked) {
    noofdays.disabled = false;
  } else {
    noofdays.disabled = true;
  }
}
