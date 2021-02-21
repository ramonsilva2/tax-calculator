const btn = document.getElementById("btn");
const ipt = document.getElementById("ipt");
const rst = document.getElementById("result");



btn.addEventListener("click", () => {
    let vetorNum = [];
    let vetorSignal = [];
    let contNum = 0;
    let contSig = 0;
    let result;

    for(let i=0;i<ipt.value.length;i++){
        if(ipt.value[i] == "-" || ipt.value[i] == "+") {
            vetorSignal[contSig] = ipt.value[i];
            contSig++;
        }
    }
    for(let i=0;i<ipt.value.length;i++){
        if(ipt.value[i] == "-" || ipt.value[i] == "+") {

        } else {
            vetorNum[contNum] = ipt.value[i];
            contNum++;
        }
    }
    result = parseInt(vetorNum[0]);
    for(let i=0;i<vetorSignal.length;i++){
        if(vetorSignal[i]=='+') {
            result += parseInt(vetorNum[i+1]);
        }
    }
    for(let i=0;i<vetorSignal.length;i++){
        if(vetorSignal[i]=='-') {
            result -= parseInt(vetorNum[i+1]);
        }
    }
    rst.innerHTML = `<h3>${result}</h3>`

});