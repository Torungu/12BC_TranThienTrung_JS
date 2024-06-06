// let buocNhay=1;
// while (buocNhay<=10){
//     console.log(`District${buocNhay}`)
//     buocNhay++
// }
//              Tổng các số chẵn
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

//              Đếm số chia hết cho 3
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

//              Tạo layout HTML
// ----------------- Cách1 -------------------
// document.querySelector('#button3').onclick=()=>{
// let content="";
// for(let i=1;i<=10;i++){
//     if(i%2===1){
//         content+="<div class='bg-danger text-white text-center fw-bold p-3'>Lẻ</div>"
//     }
//     else{
//         content+="<div class='bg-primary text-white text-center fw-bold p-3'>Chẵn</div>"
//     }
//      document.querySelector('#baiTap1').innerHTML=content
// }
// }


// ----------------- Cách2 -------------------
document.querySelector('#button3').onclick=()=>{
    let baiTap=document.querySelector('#baiTap1')
    for(let i=1;i<=10;i++){
        let renderDiv=document.createElement("div")
        if(i % 2==1){
            renderDiv.className='bg-danger p-3'
        }
        else{
            renderDiv.className='bg-primary p-3'
        }
        baiTap.appendChild(renderDiv)
    }
}

//              Tạo ô vuông và tam giác
document.querySelector('#button4').onclick=()=>{
    let dongNgoiSao='* * * * *'
    let ketQua=''
    for(i=0;i<=4;i++){
        ketQua+=dongNgoiSao+"<br>"
    }
    document.querySelector('#result4').innerHTML=ketQua
}


let taoTamGiac=(soDong)=>{
    let ketQua=''
    for(i=0;i<=soDong-1;i++){
        let dongNgoiSao=''
        for(z=0;z<=i;z++){
            dongNgoiSao+="* "
        }
        ketQua+=dongNgoiSao+'<br>'
    }
    return ketQua
}
document.querySelector('#button5').onclick=()=>{
    document.querySelector('#result4').innerHTML=taoTamGiac(5)
}