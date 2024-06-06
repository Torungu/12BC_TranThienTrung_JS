// let buocNhay=1;
// while (buocNhay<=10){
//     console.log(`District${buocNhay}`)
//     buocNhay++
// }
document.querySelector('#button1').onclick=()=>{
    let soN = document.querySelector('#soN').value*1
    let sum=0
    // while(soN>=0){     
    //     if(soN%2===0){
    //         sum = sum+soN
    //     }
    //     soN--
    // }
    let i=2
    while (i<=soN){
        sum+=i
        i+=2
    }
    document.querySelector('#result1').value=`Tổng các số chẵn từ 0 đến ${soN} là ${sum}`
}

document.querySelector('#button2').onclick=()=>{
    let soN1=document.querySelector('#soN1').value*1
    let count=0
    let i=0
    do {
        if(i%3===0){
            count++
        }
        i++
    }
    while (i<=soN1)
    document.querySelector('#result2').value=`Có ${count} số chia hết cho 3 từ 0 đến ${soN1}`
}
    