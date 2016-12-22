describe('Kata', function() {    
    beforeEach(function() { 
    });

    it('should be able to test', function() {
      expect(true).toBeTruthy();
    });

    it('should calculate add of .1 and .2', function() {
          var num1 = .1,
              num2 = .2,
              expected = '.3';
              
          expect(add(num1,num2)).toEqual(expected,'add(' + num1 + ',' + num2 + ') should be : ' + expected+'.');
    }); 
});