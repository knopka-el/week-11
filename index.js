let total = document.querySelectorAll('.product-price');
console.log(total);
let sum = 0;
for (let i = 0; i < total.length; i++) {
    sum = sum + (+total[i].textContent);
}
document.querySelector('.final-price').textContent = sum;

console.log(sum);

function useCoupon() {
    return sum * 0.8;
}
console.log(sum);


document.getElementById("discount-btn").addEventListener("click", function () {
    let total = parseFloat(document.getElementsByClassName(".total").value);
    let discountedTotal = useCoupon(total);
    document.querySelector('.final-price').textContent = discountedTotal.toFixed(2)
});