describe('Kata', function() {    
    beforeEach(function() { 
    });

    it('should be able to test', function() {
      expect(true).toBeTruthy();
    });


    describe ('getLeftOfNumber',function(){
        it('should return the number if no comma ', function() {
            var number = 13,
              expected = '13';

            expect(getLeftOfNumber(number)).toEqual(expected,'getLeftOfNumber('+ number + ') should be : ' + expected+'.');  
        });

        it('should return xx when number of type xx.yy ', function() {
            var number = 13.23,
              expected = '13';

            expect(getLeftOfNumber(number)).toEqual(expected,'getLeftOfNumber('+ number + ') should be : ' + expected+'.');  
        });

        it('should return 0 when number of type .yy ', function() {
            var number = .23,
              expected = '0';

            expect(getLeftOfNumber(number)).toEqual(expected,'getLeftOfNumber('+ number + ') should be : ' + expected+'.');  
        });
    });

    describe ('getRightOfNumber',function(){
        it('should return empty string if no comma ', function() {
            var number = 13,
              expected = '';

            expect(getRightOfNumber(number)).toEqual(expected,'getRightOfNumber('+ number + ') should be : ' + expected+'.');  
        });

        it('should return yy when number of type xx.yy ', function() {
            var number = 13.23,
              expected = '23';

            expect(getRightOfNumber(number)).toEqual(expected,'getRightOfNumber('+ number + ') should be : ' + expected+'.');  
        });

        it('should return yy when number of type .yy ', function() {
            var number = .23,
              expected = '23';

            expect(getRightOfNumber(number)).toEqual(expected,'getRightOfNumber('+ number + ') should be : ' + expected+'.');  
        });
    });

    /*describe ('removeLeftCeros',function(){
        it('should remove ceros from 0x.x ', function() {
            var number = '01.3',
              expected = '1.3';

            expect(removeLeftCeros(number)).toEqual(expected,'removeLeftCeros('+ number + ') should be : ' + expected+'.');  
        });

        it('should remove ceros from 00x.x ', function() {
            var number = '001.3',
              expected = '1.3';

            expect(removeLeftCeros(number)).toEqual(expected,'removeLeftCeros('+ number + ') should be : ' + expected+'.');  
        });

        it('should not remove ceros from x.x ', function() {
            var number = '1.3',
              expected = '1.3';

            expect(removeLeftCeros(number)).toEqual(expected,'removeLeftCeros('+ number + ') should be : ' + expected+'.');  
        });

        it('should remove ceros from .x ', function() {
            var number = '.3',
              expected = '.3';

            expect(removeLeftCeros(number)).toEqual(expected,'removeLeftCeros('+ number + ') should be : ' + expected+'.');  
        });
    });*/

    describe ('Bad numbers',function(){

        it('should not calculate add without parameter ', function() {
          var expected = NaN;
              
          expect(add()).toEqual(expected,'add() should be : ' + expected+'.');
        });

        it('should calculate add of one parameter ', function() {
          var num1 = 13,
              expected = '13';
              
          expect(add(num1)).toEqual(expected,'add(' + num1 + ') should be : ' + expected+'.');
        });

    });

    describe ('Add more than two numbers',function(){

        it('should calculate add of 1 , 2 and 3', function() {
          var expected = '6';
              
          expect(add(1,2,3)).toEqual(expected,'add(1,2,3) should be : ' + expected+'.');
        });

        it('should calculate add of 1 , 2, 3 and 4', function() {
          var expected = '10';
              
          expect(add(1,2,3,4)).toEqual(expected,'add(1,2,3,4) should be : ' + expected+'.');
        });

    });    

    describe ('Large integer numbers',function(){

        it('should calculate add of 111111111111111 and 222222222222222', function() {
          var num1 = 111111111111111,
              num2 = 222222222222222,
              expected = '333333333333333';
              
          expect(add(num1,num2)).toEqual(expected,'add(' + num1 + ',' + num2 + ') should be : ' + expected+'.');
        });

        it('should calculate add of "111111111111111" and 222222222222222', function() {
          var num1 = '111111111111111',
              num2 = 222222222222222,
              expected = '333333333333333';
              
          expect(add(num1,num2)).toEqual(expected,'add(' + num1 + ',' + num2 + ') should be : ' + expected+'.');
        });

        it('should calculate add of 111111111111111 and "222222222222222"', function() {
          var num1 = 111111111111111,
              num2 = '222222222222222',
              expected = '333333333333333';
              
          expect(add(num1,num2)).toEqual(expected,'add(' + num1 + ',' + num2 + ') should be : ' + expected+'.');
        });

        it('should calculate add of "111111111111111" and "222222222222222"', function() {
          var num1 = '111111111111111',
              num2 = '222222222222222',
              expected = '333333333333333';
              
          expect(add(num1,num2)).toEqual(expected,'add(' + num1 + ',' + num2 + ') should be : ' + expected+'.');
        });

        it('should calculate add of 111111111111111, 222222222222222 and 333333333333333', function() {
          var num1 = 111111111111111,
              num2 = 222222222222222,
              num3 = 333333333333333,
              expected = '666666666666666';
              
          expect(add(num1,num2,num3)).toEqual(expected,'add(' + num1 + ',' + num2 + ') should be : ' + expected+'.');
        });

    }); 

    describe ('Float numbers',function(){

        it('should calculate add of 1 and 2.3', function() {
          var num1 = 1,
              num2 = 2.3,
              expected = '3.3';
              
          expect(add(num1,num2)).toEqual(expected,'add(' + num1 + ',' + num2 + ') should be : ' + expected+'.');
        });

        it('should calculate add of .1 and 2.3', function() {
          var num1 = .1,
              num2 = 2.3,
              expected = '2.4';
              
          expect(add(num1,num2)).toEqual(expected,'add(' + num1 + ',' + num2 + ') should be : ' + expected+'.');
        });

        it('should calculate add of .1 and .3', function() {
          var num1 = .1,
              num2 = .3,
              expected = '0.4';
              
          expect(add(num1,num2)).toEqual(expected,'add(' + num1 + ',' + num2 + ') should be : ' + expected+'.');
        });

        it('should calculate add of 1.1 and 1.2', function() {
          var num1 = 1.1,
              num2 = 1.2,
              expected = '2.3';
              
          expect(add(num1,num2)).toEqual(expected,'add(' + num1 + ',' + num2 + ') should be : ' + expected+'.');
        }); 
    });

    describe ('Kata samples',function(){

        it('should calculate add of 123 and "321"', function() {
          var num1 = 123,
              num2 = '321',
              expected = '444';
              
          expect(add(num1,num2)).toEqual(expected,'add(' + num1 + ',' + num2 + ') should be : ' + expected+'.');
        });

        it('should calculate add of "1234567890.0987654321" and "8765432109.9012345678"', function() {
          var num1 = '1234567890.0987654321',
              num2 = '8765432109.9012345678',
              expected = '9999999999.9999999999';
              
          expect(add(num1,num2)).toEqual(expected,'add(' + num1 + ',' + num2 + ') should be : ' + expected+'.');
        });        

        it('should not calculate add of "1.2.3" and 1.23', function() {
          var num1 = '1.2.3',
              num2 = '1.23',
              expected = NaN;
              
          expect(add(num1,num2)).toEqual(expected,'add(' + num1 + ',' + num2 + ') should be : ' + expected+'.');
        });

        it('should calculate add of "0.1" and "0.0001"', function() {
          var num1 = '0.1',
              num2 = '0.0001',
              expected = '0.1001';
              
          expect(add(num1,num2)).toEqual(expected,'add(' + num1 + ',' + num2 + ') should be : ' + expected+'.');
        }); 
    });
});