var list1 = [];

for (let i in window) {
  if (typeof(window[i]) === "function") list1.push(i);
}

console.log(list1.filter((item) => { return list1.indexOf(item)})
            
