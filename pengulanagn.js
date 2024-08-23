var a= [];

for (var i = 0; i < 10 ; i++){
    a.push(i)
}

console.log(a);
console.log('panjang a = ' + a.length + "elemen");

for ( var j = 0; j < a.length; j++){
    b.push(a[j] * 2);

    
}

var c;

for (var k = 0, len = a.length; k < len; k++) {
    if (a[k] === 5) {
        c= a[k];
    }
}
console.log('data: ' + c + ' ditemukan di indeks ' + k);

// for-in

var list = ['a', 'b', 'c'];
var message;
for (var i in list) {

    message = 'indeks ' + i + ' berisi data ' + list[index];
    console.log(message);
};

a=[];
i= 0;

// selama i kurang dari 4
// break condation : i == 4
while (i < 4 ){
    a.push(i)

    // naikan i untuk peroses selanjut nya 
    i++;

};

console.log(a);// [0,1,2,3]