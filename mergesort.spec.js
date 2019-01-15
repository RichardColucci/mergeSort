  describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      const newArr = makeRamdonNumsArray(11, 0, 100);
      const splitedArr = split(newArr);
      const left = splitedArr[0].length;
      const right = splitedArr[1].length;
      expect(left + right).toBe(newArr.length);
      // }
    });
  });
  
  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        //initially empty
      const newArr = makeRamdonNumsArray(11, 0, 100);
      const splitedArr = split(newArr);
      const mergedArr = merge(splitedArr[0], splitedArr[1]);
      expect(mergedArr).toEqual(newArr);
    });
  });
  
  describe('MergeSort function', function(){
    it('should sort an array correctly', function(){
      for (let i = 0; i < 10; i++) {
        const unsortedArr = makeRamdonNumsArray(11, 0, 100);
        const sortedArr = unsortedArr.sort((a, b) => a - b);
  
        expect(merge(unsortedArr)).toEqual(sortedArr);
      }
    });
  });