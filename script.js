const btn = document.getElementById("btn");
const ipt = document.getElementById("ipt");
var vetorNum = [];
var result;

btn.addEventListener("click", () => {

    ipt.value.forEach(n => {
        if(ipt.value !== '-' || ipt.value !== '+') {
            vetorNum = n;
        }
        console.log(vetorNum);
    })
});