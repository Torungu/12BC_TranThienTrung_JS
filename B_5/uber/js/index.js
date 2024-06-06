const UBER_CAR="uberCar"
const UBER_SUV="uberSUV"
const UBER_BLACK="uberBlack"
let check =0
let fee=0
let tongTien=0
let giaTienKm = (uberType,soKm)=>{
    switch(uberType){
        case UBER_CAR:{
            if(soKm>=19){
                return check=8000+7500*18+7000*(soKm-19)
            }
            else{
                return check=8000+7500*(soKm-1)
            }
        }
        case UBER_SUV:{
            if(soKm>=19){
                return check=9000+8500*18+8000*(soKm-19)
            }
            else{
                return check=9000+8500*(soKm-1)
            }
        }
        case UBER_BLACK:{   
            if(soKm>=19){
                return check=10000+9500*18+9000*(soKm-19)
            }
            else{
                return check=10000+9500*(soKm-1)
            }
        }
    }
}

let giaTienPhat =(uberType,thoiGianCho)=>{
    switch (uberType){
        case UBER_CAR:{
            return fee = Math.floor((thoiGianCho-3)/3)*2000
        }
        case UBER_SUV:{     
            return fee = Math.floor((thoiGianCho-3)/3)*3000
        }
        case UBER_BLACK:{     
            return fee = Math.floor((thoiGianCho-3)/3)*3500
        }
    }
}

document.querySelector('#tinhTien').onclick=function(){
    let uberType=document.querySelector("input[type='radio']:checked").value;
    console.log(uberType)
    let soKm=parseFloat(document.querySelector('#txt-km').value)
    let thoiGianCho=parseFloat(document.querySelector('#txt-thoiGianCho').value)
    giaTienKm(uberType,soKm)
    giaTienPhat(uberType,thoiGianCho)
    let tongTien=giaTienKm(uberType,soKm)-giaTienPhat(uberType,thoiGianCho)
    document.querySelector('#divThanhTien').style.display="block"
    document.querySelector('#xuatTien').innerHTML=`${tongTien.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}`
}

document.querySelector('#hoaDon').onclick=function
(){
    // document.querySelector('#modal_body').innerHTML
    $('#exampleModal').modal('show')
}