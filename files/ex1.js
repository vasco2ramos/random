
function f(result, src1, src2){
    if(result.length != (src1.length+src2.length)) {
        return false;
    }

    while(result != ""){
      min1 = compare(result, src1);
      min2 = compare(result, src2);
      if(min2 <= min1){
        result = result.substring(min1);
        src1 = src1.substring(min1);
      } else{
      	result = result.substring(min2);
        src2 = src2.substring(min2);
      }
    }
    return true;
}

function compare(a, b) {
	var count = 0,
	    len = a.length < b.length ? a.length : b.length;
	while (count < len && a[count] === b[count]) count++;
	return count;
}


var t = []
t[0]=f("12","1","2");
t[1]=f("alvasbecorto","alberto","vasco");
t[2]=f("testing","test","ing")
t[3]=f("","","")
t[4]=f("1234","1234","")
t[5]=f("1234","","1234")
t[6]=f("aecabcda","abcda","aecd")
t[7]=f("alvasbecort","alberto","vasco")
t[8]=f("alvasbecort","alberto","vasco")
t[9]=f("aecabcd","aebcd","aecd")
console.log(t);
//return t;
