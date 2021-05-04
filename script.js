const stringLongs = (arrays)=>{
  return (arrays.map((str)=> str.length));
}

// const longsSorted = (arrays) =>{
//   const longs = stringLongs(arrays);
//   return (longs.sort((a,b)=>b-a));
// }
const longsSorted = (arrays) =>{
  const longs = stringLongs(arrays);
  const newArray =[];
  
  for(let j =longs.length;j>0;j--){
    let t = longs[0];
    for(let i=0; i< longs.length;i++){
      if(longs[i] > t){ 
        t = longs[i];
      }
    }
    const index = longs.indexOf(t)
    longs.splice(index,1);
    newArray.push(t);
  }
  console.log(newArray)
}

const findNumber = (numbers, num)=>{
  const index = numbers.indexOf(num)
  if(index != -1){
    return(index);
  }else{
    return('no se encuentra el número')
  }
}
const saludo=(a)=>{
  const lastWord =(b)=>{
    return (`${a} ${b}`)
  }
  return lastWord;
}

const string_array = ["str1", "str22", "str333", "str4444"]
const numbers = [1,2,3,4,5,6,7,8,9];
console.log(stringLongs(string_array));
console.log(longsSorted(string_array));
console.log(findNumber(numbers,5));
console.log(saludo("Hola")("Mundo"))