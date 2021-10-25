let calculator = (() => {
    let entries = [];
    let operationsHistory = [];
  
    const addition = (x, y) => x + y;
    const subtraction = (x, y) => x - y;
    const multiplication = (x, y) => x * y;
    const division = (x, y) => y !== 0 ? x / y : 'Please enter a valid number.';
  
    const operatorTypes = {
      '+': addition,
      '-': subtraction,
      '*': multiplication,
      '/': division
    };
  
    const enter = (entry) => {
      entries = [...entries, entry];
      
    };
  
    const equals = () => {
      const [x, operator, y] = entries;
  
      if (typeof x !== 'number' || typeof y !== 'number') {
       
        
        return 'Please enter valid numbers.';
      }
  
      
      let result = operatorTypes[operator](x, y);
      
      let newEquation = `${x} ${operator} ${y} = ${result}`
  
    
     operationsHistory = [...operationsHistory, newEquation];
  
      return result;
    };
  
     
    const reset = () => {
      operationsHistory = [];
      entries = [];
      
    };
  
    return {
      enter,
      equals,
      reset
    };
  })();