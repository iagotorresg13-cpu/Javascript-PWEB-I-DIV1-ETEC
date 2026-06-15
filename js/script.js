//function = funçao ou procedure do pascal
// { = ao begin
// } = ao end 
// let = var
function calcular(){
        let num1 = document.getElementById('edtnum1').value;
        let num2 = document.getElementById('edtnum2').value;
        //console.log(num1);
        //console.log(num2);
        let soma = num1 + num2;
        console.log('Soma '+soma);
        let sub = num1-num2;
        console.log('subtração '+sub);
        let div = num1/num2;
        console.log('Divisão '+div);
        let mut = num1*num2;
        console.log('multiplicação '+mult);
}