// let listSV=['Trung',123,""]
// console.log(listSV.length)

let arrNumber=[]
document.querySelector('.btn-dark').onclick=()=>{
    let soN=document.querySelector('#soN').value*1
    arrNumber.push(soN)
    document.querySelector('#result1').innerHTML=arrNumber
    console.log(arrNumber)
    return arrNumber
}

document.querySelector('.btn-success').onclick=()=>{    
    let result=0
    for(i=0;i<arrNumber.length;i++){
        result+=arrNumber[i]
    }
    document.querySelector('#result2').innerHTML=`${result}`
}

document.querySelector('.btn-info').onclick=()=>{
    let count=0
    for(i=0;i<arrNumber.length;i++){
        if(arrNumber[i]%2===0){
            count++
        }
    }
    document.querySelector('#result3').innerHTML=`${count}`
}

let arrString=['h','e','l','l','o']
let arrNew=[]
for(i=0;i<arrString.length;i++){
    arrNew[arrString.length-(i+1)]=arrString[i]
}
console.log(arrNew)

// let string1="hello"
// let newArrString=string1.split("")
// let arr1=[]
// for(i=0;i<newArrString.length;i++){
//     arr1[newArrString.length-(i+1)]=newArrString[i]
// }
// console.log(arr1)

let arrHocVien=["Toan","Van","Dong","Kien","Mai","Hoang"]
console.log(arrHocVien)
//                  remove
// console.log(arrHocVien.splice(0,4))

//                   add
// arrHocVien.splice(2,0,"Sang","Nguyen","Khai")
// console.log(arrHocVien)

let arrSoXo=[2,64,78]
let arrSoLo=[34,4,8]
let newSo=arrSoLo.concat(arrSoXo)
console.log(newSo)


let arrNumCustom=[1,1,1,45,21,3,67,45,53,67,21,98,143,678,8,67,2,67]
//          C1
// for(i=0;i<arrNumCustom.length;i++){
//     let a=arrNumCustom[i]
//     for(j=i+1;j<arrNumCustom.length;j++){
//         if(a===arrNumCustom[j]){
//             arrNumCustom.splice(j,1)
//         }        
//     }
// }
//          C2
// let object={}
// for(i=0;i<arrNumCustom.length;i++){
//     if(object[arrNumCustom[i]]!=arrNumCustom[i]){
//         object[arrNumCustom[i]]=arrNumCustom[i]
//     }
//     else{
//         arrNumCustom.splice(i,1)
//     }
// }
//          C3
for(i=0;i<arrNumCustom.length;i++){
    if(arrNumCustom.indexOf(arrNumCustom[i])!==i){
        arrNumCustom.splice(i,1)
        i--
    }
}
console.log(arrNumCustom)



let arrFood=['Food1','Food2','Food3','Food1','Food4','Food5','Food6']
for(let i in arrFood){
    console.log(i)
}
for(item of arrFood){
    console.log(item)
}
arrFood.forEach((index,item)=>{
    console.log(index,item)
})
let food1=arrFood.filter((food)=>food=="Food1")
console.log(food1)

let arrNewFood=arrFood.map((food,i)=>'Order '+food)
console.log(arrNewFood)

let arrInput=document.querySelectorAll('#baiTap2 input,#baiTap2 button');
for(dom of arrInput){
    console.log(dom.id)
}
let arrButtonSuccess=document.getElementsByClassName('btn-success')
console.log(arrButtonSuccess)


// function powerOfNumber(b, e) {
//     // Your code here
//     let arr=[]
//     let result=0
//     for(i=1;i<=e;i++){
//         arr.push(b)
//     }
//     for(i=0;i<arr.length;i++){
//         result=arr[i]
//         result*=arr[arr.length-i+1]
//     }
//     console.log(arr)
//     console.log(result)
// }
// powerOfNumber(2,4)