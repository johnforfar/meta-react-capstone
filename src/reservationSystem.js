var m = 2 ** 35 - 31;
var a = 185852;

// Generate a random number in the range [0, 1) based on a seed
function seededRandom(seed) {
    var s = seed % m;
    return () => {
      return (s = (s * a) % m) / m;
    };
  };
  
// Generate an array of time slots for a given date
  export function fetchAPI(date) {
    let result = [];
    let dt = new Date(date);
    let seed = dt.getDate();
  
    let random = seededRandom(seed);

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) result.push(i + ":00");
      if (random() < 0.5) result.push(i + ":30");
    }
    
    return result;
  }
  
  export function submitAPI(formData) {
    return true;
  }
  