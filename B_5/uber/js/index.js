const UBER_CAR="uberCar"
const UBER_SUV="uberSUV"
const UBER_BLACK="uberBlack"
let pay=0
let fee=0
let tongTien=0

let giaTienKmDauTien=(uberType)=>{
    switch(uberType){
        case UBER_CAR:
            return 8000
        case UBER_SUV:
            return 9000
        case UBER_BLACK:
            return 10000
    }
}
let giaTienKmDuoi19 =(uberType)=>{
    switch(uberType){
        case UBER_CAR:
            return 7500
        case UBER_SUV:
            return 8500
        case UBER_BLACK:
            return 9500
    }
}
let giaTienKmTren19=(uberType)=>{
    switch(uberType){
        case UBER_CAR:
            return 7000
        case UBER_SUV:
            return 8000
        case UBER_BLACK:
            return 9000
    }
}
let giaTienMoi3Phut=(uberType)=>{
    switch(uberType){
        case UBER_CAR:
            return 2000
        case UBER_SUV:
            return 3000
        case UBER_BLACK:
            return 3500
    }
}
let giaTienKm = (uberType,soKm)=>{
    switch(uberType){
        case UBER_CAR:{
            if(soKm<=1){
                return pay = giaTienKmDauTien(uberType)
            }
            else if(soKm>1 && soKm<=19){
                return pay=giaTienKmDauTien(uberType)+7500*(soKm-1)
            }
            else{
                return pay=giaTienKmDauTien(uberType)+7500*18+7000*(soKm-19)
            }
        }
        case UBER_SUV:{
            if(soKm<=1){
                return pay = giaTienKmDauTien(uberType)
            }
            else if(soKm>1 && soKm<=19){
                return pay=giaTienKmDauTien(uberType)+8500*(soKm-1)
            }
            else{
                return pay=giaTienKmDauTien(uberType)+8500*18+8000*(soKm-19)
            }
        }
        case UBER_BLACK:{   
            if(soKm<=1){
                return pay = giaTienKmDauTien(uberType)
            }
            else if(soKm>1 && soKm<=19){
                return pay=giaTienKmDauTien(uberType)+9500*(soKm-1)
            }
            else{
                return pay=giaTienKmDauTien(uberType)+9500*18+9000*(soKm-19)
            }
        }
    }
}
let giaTienPhat =(uberType,thoiGianCho)=>{
    switch (uberType){
        case UBER_CAR:{
            if(thoiGianCho>3){
                return fee = Math.floor((thoiGianCho)/3)*2000}
            else{
                return fee = 0
            }
        }
        case UBER_SUV:{     
            if(thoiGianCho>3){
                return fee = Math.floor((thoiGianCho)/3)*3000}
            else{
                return fee = 0
            }
        }
        case UBER_BLACK:{     
            if(thoiGianCho>3){
                return fee = Math.floor((thoiGianCho)/3)*3500}
            else{
                return fee = 0
            }
        }
    }
}

document.querySelector('#tinhTien').onclick=function(){
    let uberType=document.querySelector("input[type='radio']:checked").value;
    let soKm=parseFloat(document.querySelector('#txt-km').value)
    let thoiGianCho=parseFloat(document.querySelector('#txt-thoiGianCho').value)
    let tongTien=giaTienKm(uberType,soKm)-giaTienPhat(uberType,thoiGianCho)
    document.querySelector('#divThanhTien').style.display="block"
    document.querySelector('#xuatTien').innerHTML=`${tongTien.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}`
}

document.querySelector('#hoaDon').onclick=function
(){ 
    $('#exampleModal').modal('show')
    let uberType=document.querySelector("input[type='radio']:checked").value;
    document.querySelector('.modal-title').innerHTML=`Hóa Đơn Loại Xe ${uberType.toUpperCase()}`

    let soKm=parseFloat(document.querySelector('#txt-km').value)
    let thoiGianCho=parseFloat(document.querySelector('#txt-thoiGianCho').value)
    let tongTien=(giaTienKm(uberType,soKm)-giaTienPhat(uberType,thoiGianCho)).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})

    let kmDauTien=giaTienKmDauTien(uberType).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
    let tienMoi3Phut=giaTienMoi3Phut(uberType)
    let kmDuoi19=giaTienKmDuoi19(uberType)
    let kmTren19=giaTienKmTren19(uberType)
    if(thoiGianCho<=3){
        tienMoi3Phut=0
    }
    if(soKm<=1){
        document.querySelector('#modal_body tbody').innerHTML=`
        <tr>
            <td scope="row">Km Đầu Tiên</td>
            <td>${soKm} Km</td>
            <td>${kmDauTien}</td>
            <td>+${kmDauTien}</td>
        </tr>
        <tr>
            <td scope="row">Thời gian chờ</td>
            <td scope="row">${thoiGianCho} Phút</td>
            <td>${tienMoi3Phut.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</td>
            <td>-${giaTienPhat(uberType,thoiGianCho).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</td>
        </tr>
        <tr>
            <th scope="col">TỔNG:</th>
            <th scope="col">${tongTien}</th>
            <td></td>
            <td></td>
        </tr>`
    }
    else if(soKm>1 && soKm<=19){
        document.querySelector('#modal_body tbody').innerHTML=`
        <tr>
            <td scope="row">Km Đầu Tiên</td>
            <td>1 Km</td>
            <td>${kmDauTien}</td>
            <td>+${kmDauTien}</td>
        </tr>
        <tr>
            <td scope="row">Từ 1 Km Đến ${soKm} Km</td>
            <td>${Math.round((soKm-1)*100)/100} Km</td>
            <td>${kmDuoi19.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
        }</td>
            <td>+${(kmDuoi19*(soKm-1)).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
        }</td>
        </tr>
        <tr>
            <td scope="row">Thời gian chờ</td>
            <td scope="row">${thoiGianCho} Phút</td>
            <td>${tienMoi3Phut.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</td>
            <td>-${giaTienPhat(uberType,thoiGianCho).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</td>
        </tr>
        <tr>
            <th scope="col">TỔNG:</th>
            <th scope="col">${tongTien}</th>
            <td></td>
            <td></td>
        </tr>`
    }
    else{
        document.querySelector('#modal_body tbody').innerHTML=`
        <tr>
            <td scope="row">Km Đầu Tiên</td>
            <td>1 Km</td>
            <td>${kmDauTien}</td>
            <td>+${kmDauTien}</td>
        </tr>
        <tr>
            <td scope="row">Từ 1 Km Đến 19 Km</td>
            <td>18 Km</td>
            <td>${kmDuoi19.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
        }</td>
            <td>+${(kmDuoi19*18).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
        }</td>
        </tr>
        <tr>
            <td scope="row">Từ 19 Km Đến ${soKm} Km</td>
            <td>${Math.round((soKm-19)*100)/100} Km</td>
            <td>${kmTren19.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
        }</td>
            <td>+${(kmTren19*(soKm-19)).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
        }</td>
        </tr>
        <tr>
            <td scope="row">Thời gian chờ</td>
            <td scope="row">${thoiGianCho} Phút</td>
            <td>${tienMoi3Phut.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</td>
            <td>-${giaTienPhat(uberType,thoiGianCho).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</td>
        </tr>
        <tr>
            <th scope="col">TỔNG:</th>
            <th scope="col">${tongTien}</th>
            <td></td>
            <td></td>
        </tr>`
    }
}
