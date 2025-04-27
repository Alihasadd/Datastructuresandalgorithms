//

const pairs = (elements) => {
    let deb = [ ] // <-- deb is empty inside
    for (let i = 0; i < elements.length; i++){
      
      for (let j = i + 1; j < elements.length; j++){
        
        deb.push([elements[i], elements[j]])
      }
    }
    return deb // <-- Finally proud of Ali
  };
  
  pairs(["a", "b", "c"]); // ->
  // [
  //    ["a", "b"],
  //    ["a", "c"],
  //    ["b", "c"]
  // ]
  
  
  module.exports = {
    pairs,
  };