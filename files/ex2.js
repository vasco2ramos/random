function f(entry){
    entry = entry.sort();
    var median = Math.floor(entry.length/2);
    var out = [];
    for(var i=0; i!=entry.length;i++){
        out[i] = (i%2==1)? entry[Math.floor(i/2)] : entry[entry.length-Math.floor(i/2)-1];
    }
    console.log(out);
}


var t = []
t[0]=f([1,2,3,4,5]);
t[1]=f([1,2,3,4,5,6]);
t[1]=f([6,5,-2,-5,3,8]);
//return t;
