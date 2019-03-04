module.exports = function check(str, bracketsConfig) {
  
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    
    //для каждого символа строки опреляем, открывающий он, закрывающий, или особый случай
    for (let j = 0; j < bracketsConfig.length; j++) {
    
      if (bracketsConfig[j][0] === str[i] && bracketsConfig[j][1] === str[i]) {          
        
        //для особого случая, если прошлый символ был такой же - удаляем последний символ
        //иначе - добавляем его в стек
        if (stack[stack.length-1] === str[i]) {
          stack.pop();        
        } else {
          stack.push(str[i]);          
        }
        break;

      } else if (bracketsConfig[j][0] === str[i]) {
        stack.push(str[i]);
        break;

      } else if (bracketsConfig[j][1] === str[i]) {        
        //если стек начнется с закрывающей скобки или
        //последняя открывающая скобка в стеке не соответствует закрывающей- false
        if (stack.length === 0 || stack[stack.length-1] !== bracketsConfig[j][0]) {
          return false;
        }
        stack.pop();
        break;
      }
    }
  }

  //если стек пустой, то все скобки закрылись:)
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }

}
