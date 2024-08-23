let mhs = {
    name: "fulan",
    age: "20",
    major:"TATA BOGA",
    skiils: ['Sys admin' , 'OOP' , 'DESINGER' ],
    poor: true,
}

//  console.log('Mahasiswa boleh daftar : ' + (mhs.age > 17));

// if (mhs.major =="TRMG") {
//     console.log(mhs.name + "Jurusan TRMG");
// }else if (mhs.major==TRKJ){
//     console.log(mhs.name + "Jurusan TRKJ");
//     else if (mhs.major==TRPL) {
//         console.log(mhs.name + "Jurusan TRPL");
//     }

// }
// Ternary
// console.log(mhs.major == "TRPL" ? mhs.name + "Jurusan TRPL" : mhs.name + "Bukan TRPL")

//Swith case
// Switch (mhs.major) {
//     case "TRMG":
//     console.log(mhs.name + "Jurusan TRMG");
//     break;
//     case "TRKJ":
//     console.log(mhs.name + "Jurusan TRKJ");
//     break;
//     case "TRPL":
//     console.log(mhs.name + "Jurusan TRPL");
//     break;
//     deafult:
//     console.log(mhs.name + "Bukan anak IDN");
// }

//conditional function
//keriteria : umur kurang dari 21 , miskin,skill lebih dari 2

function cekKelulusan(peserta) {
    let name = peserta.name;
    let age = peserta.age;
    let poor = peserta.poor;
    let skiils  = peserta.skiils;
    // console.log('function jalan' , peserta)
    if ( age < 21 && poor == true && skiils.length > 2){
        // Peserta lulus
        console.log (name + " kamu lulus " );

    }else if (age < 21 ||  poor == true || skiils.length > 1){ 
        // peserta hampir lulus
        console.log (name + " kamu hampir lulus " );
    }else{

        // peserta tidak lulus
        console.log (name + " kamu tidak lulus " );
    }

}
cekKelulusan(mhs);
