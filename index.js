var check = function(n){
    var x = n.toString();//Convert number to string
    var str = x.split('');//Split up digits
    var num;
    var arr = [];
    var z;
    var arr2 = [];
    for(var i = 0; i < str.length; i++){
        num = Number(str[i]);//Converts back to number?
        arr.push(num);//Save numbers in array
    }
    for(var x = 0; x < arr.length; x++){
        z = pow(arr[x], 2);//square each number in array
        arr2.push(z);//save new numbers in another array
    }
    x = 0;
    for(var i in arr2){
        x += arr2[i];//Add values in the array
    }
    if(x===1){
        return true;
    }
    else{
        arr2.splice(0, arr2.length);
        arr.splice(0, arr.length);
        return check(x);
    }
};
println(check(31));
