// Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không?
 
// let a = Number(prompt(" a = "));
// let b= Number(prompt(" b = "));
// if (a%b=== 0){
//     console.log(a + " chia het cho " + b);
//     alert(a + " chia het cho " + b);
// }
// else {
//     console.log(a + " ko chia het cho " + b);
//     alert(a + "  khong chia het cho " + b);
// }



// bai 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.


//  let T = Number(prompt("nhap tuoi cua ban "));
//   if(T >= 16){ 
//     console.log("ban du tuoi hoc lop 10");
//   }
//   else (console.log("ban khong du tuoi hoc lop 10"));





// bai 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình
//  để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0.


//   let a = Number(prompt(" a= "));
//   if(Number.isInteger(a)){
//     if (a>0){
//         console.log(a + " > 0");
//     }
//     else(console.log(a + " < 0"));
//   }
//   else {
//     console.log(" so ban nhap khong phai so nguyen, moi nhap lai");
//   }




// bai 4:Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó.


// let a = Number(prompt(" a = "));
// let b = Number(prompt(" b = "));
// let c = Number(prompt(" c = "));
// if (a>=b & a>=c){
//     console.log("max = " + a);
// }
// else if (b>=a & b >= c){
//     console.log("max = " + b);
// }
// else if ( c>=a & c>=b){
//     console.log(" max = " + c)
// }
// else {};


// Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm
//  bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ


// let KT = Number(prompt(" Diem kiem tra = "));
// let GK = Number(prompt(" Diem Thi Giua Ki "));
// let CK = Number(prompt(" Diem thi Cuoi Ki"));
// let TB = (KT + GK*2 + CK*3)/6;
// if (KT >= 0 & KT <=10 & GK >= 0 & GK <=10 & CK >= 0 & CK <=10){

// if (TB< 4 & TB >=0){
//     console.log(" may hoc ngu lam, hoc luc kem");
// }
// else if( TB>=4 & TB<5){ 
//     console.log(" Hoc luc  Yeu")
// }
// else if ( TB>=5 & TB < 6.5) {
//     console.log(" hoc luc trung Binh");
// }
// else if (TB >= 6.5 & TB < 8.5){
//     console.log(" hoc luc Kha ");
// }
// else if (TB >= 8.5 & TB <9.5){
//     console.log("hoc luc loai gioi");
// }
// else if (TB >= 9.5 & TB <= 10){
//     console.log(" ban qua xuat sac");
// }
// }
// else {console.log(" ban nhap sai diem")}



// Bai6 :
// Bài 6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng
 let sp = Number(prompt( "san pham ban duoc : "));
 let pt;
 let hh;
 if ( sp >0){
 if ( sp>0 & sp <=10){
    pt = 0.01;
//    hh = sp*0.01;
// console.log(" hoa hong nhan duoc la " + hh);
 } 
 else if ( sp > 10 & sp <= 30){
    pt = 0.02;
    // hh = sp * pt;
    // console.log(" hoa hong nhan duoc la " + hh);
 }
  else if ( sp > 30 & sp <= 50){
    pt = 0.03;
    // hh = sp * pt;
    // console.log(" hoa hong nhan duoc la " + hh);
 }
else if ( sp > 50 & sp <=70){
    pt = 0.04;
    // hh = sp * pt;
    // console.log(" hoa hong nhan duoc la " + hh);
 }
 else if ( sp > 70 & sp <= 100){
    pt = 0.04;
//     hh = sp * pt;
//     console.log(" hoa hong nhan duoc la " + hh);
 }
else if (sp > 100){
        pt = 0.05;
        hh = sp * pt;
        console.log(" hoa hong nhan duoc la " + hh);
   }   else{}
}
 else { console.log(" sanpham ban ra khong hop le")};
 hh= pt * sp;
 console.log(" hoa hong nhan duoc " + hh);
