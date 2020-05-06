//Задаем первый массив
let arr1=[];

function getRandom() {
    return Math.trunc(Math.random()*100 + 1);
}

while(arr1.length<100){
    let rand=getRandom();
    if (arr1.indexOf(rand)===-1){
        arr1.push(rand);
    }
}

//Задаем второй массив
let tmpArr=arr1.concat([]);
let arr2=tmpArr.reverse();

//Задаем третий массив
let arr3=[];
let i=0;
while(i<100){
    arr3[i]=arr1[i]-arr2[i];
    i+=1;
}

//Находим среднее арифметическое третьего массива
let sum=0;
arr3.forEach(function (n) {
    sum+=n;
});
let average=sum/100;



