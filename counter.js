let buttondouble =  document.querySelector("#buttondouble")
let counter = 0

buttondouble.addEventListener('click', function () {
    counter++
    document.querySelector("#actualcounting").innerHTML = counter
})