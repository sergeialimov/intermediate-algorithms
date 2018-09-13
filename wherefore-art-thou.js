function whatIsInAName(collection, obj2) {
  const arr = [];
  let keys = Object.keys(obj2);
  
  collection.forEach((obj) => {
    let result = 0;
    keys.forEach((key) => {
      if (obj[key] === obj2[key]) {
        result++;
      }
    })
    
    if (result >= keys.length) {
      arr.push(obj);
    }
  });
  return arr;
};

whatIsInAName([
  { "apple": 1, "bat": 2, "cookie": 2 },
  { "apple": 1, "bat": 2, "cookie": 2 }

], { "apple": 1, "bat": 2 })