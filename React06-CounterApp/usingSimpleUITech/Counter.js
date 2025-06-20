var count = 0;

function increaseCount() {
    var pref = document.querySelector('p');
    pref.innerText = "Count Value is :: " + ++count;
}