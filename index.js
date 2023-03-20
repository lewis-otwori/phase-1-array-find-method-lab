// code your solution here
function superbowlWin(arr) {
    const result = arr.find(obj => obj.result === 'W');
    return result ? result.year : undefined;
  }
  
