let buttondouble =  document.querySelector("#buttondouble")
let buttonhalve = document.querySelector("#buttonhalve")
let counter = 1

buttondouble.addEventListener('click', function () {
    counter = counter * 2
    document.querySelector("#actualcounting").innerHTML = counter
});

buttonhalve.addEventListener('click', function () {
    counter = counter / 2;
    document.querySelector("#actualcounting").innerText = counter
});