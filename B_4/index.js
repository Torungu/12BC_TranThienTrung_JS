// 1
let hoTen1="Dong"
let hoTen2="Khai"
let comparision1=hoTen1 == hoTen2
console.log(comparision1)

// 2
let diemToan=9
let diemVan="9"
let comparision2=diemToan == diemVan
let comparision3=diemToan !=diemVan
console.log(comparision2,comparision3)

// 3
let comparision4 = diemToan === diemVan
console.log(comparision4)

// 4
let comparision5 = hoTen1 !== hoTen2
console.log(comparision5)

//5
let you = false
console.log(you,!you)

//6
let diemTrungBinh1 =8
let diemTrungBinh2 =7
let thanhTich="gioi"
if(diemTrungBinh1>=8 && thanhTich==="gioi"){
    console.log("hoc sinh gioi")
}
else{
    console.log("hoc sinh kha")
}
if(diemTrungBinh2>=8 || thanhTich==="gioi"){
    console.log("hoc sinh gioi")
}
else{
    console.log("hoc sinh kha")
}

//7
let monSu = 7
let monAnh = 3
let monDia = 6
let diemTb=(monAnh+monDia+monSu)/3
if(diemTb>8){
    console.log("Good")
}
else{
    console.log("Bad")
}

//Credit Card Fine Fee
document.getElementById("check").onclick=function(){
    let loan = document.getElementById('loan').value*1
    let payment =document.getElementById('payment').value*1
    let check=0
    let checkResult=document.querySelector('#checkResult')
    if (payment>=loan){
        check="Payment Done"     
        checkResult.classList.add('bg-success')
        checkResult.classList.remove('bg-danger')
        checkResult.innerHTML=check       
    }
    else{
        check=(loan-payment)*(1.5/100)
        checkResult.classList.add('bg-danger')
        checkResult.classList.remove('bg-success')
        checkResult.innerHTML=check.toLocaleString(
             "en-US", {style:"currency", currency:"USD"}
        )    
    }
}

//Salary Payment
document.getElementById('check2').onclick=function(){
    let wage=document.getElementById('wage').value*1
    let hour=document.getElementById('hour').value*1
    let payment=wage*hour
    let checkResult=document.querySelector('#result2')
    if(hour>=40){
        payment=wage*(40+(hour-40)*1.5)
    }
    checkResult.innerHTML=`Your Payment This Week: ${payment.toLocaleString(
        "en-US", {style:"currency", currency:"USD"})}`
}

//Diem Trung Binh

document.getElementById('formNhapDiem').onsubmit=function(event){ 
    event.preventDefault()
    console.log("ok")
    
    let toan =document.getElementById('diemToan').value*1
    let van =document.getElementById('diemVan').value*1
    let anh =document.getElementById('diemAnh').value*1
    let su=document.getElementById('diemSu').value*1
    let dia =document.getElementById('diemDia').value*1
    let dtb = (toan+van+anh+su+dia)/5
    let hocLuc=""
    dtb <=5 ? hocLuc="Yeu" : dtb<=7 && dtb>5 ? hocLuc="Kha" : dtb>7 && dtb<9 ? hocLuc="Gioi" : hocLuc="Xuat Sac"
    document.getElementById('result3').innerHTML=`diem trung binh la: ${dtb} va hoc luc ${hocLuc}`
    event.target.reset()
}

//Admin Rights
document.querySelector('#button4').onclick=function(){
    let user=document.getElementById('User').value
    let hello =""

    switch (user){
        case "Chi":
            {hello="Chao Onee-chan"}
            break;
        case "Me":
            {hello="Khoe khong a"}
            break;
        case "Ong":
            {hello="Chuc suc khoe"}
            break;
        default:{
            hello="Who is that ????"
        }
    }
    document.getElementById('result4').innerHTML=`Hello ${user} va ${hello} `
}