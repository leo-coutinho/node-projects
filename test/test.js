    'use strict';

    const chai = require('chai');
    const expect = require('chai').expect;

    chai.use(require('chai-http'));

    const jumble = require('../caesarCipher/jumble.js');
//    const jumble = require('../index.js'); // Our app

    describe('jumble()', function() {
      it('should return test 123', function() {
       var result = jumble('test 123', 0);

           expect(result).equal('test 123');

      });

      it('should return uftu 123', function() {
       var result = jumble('test 123', 1);

           expect(result).equal('uftu 123');

      });

       it('should return paop 123', function() {
         var result = jumble('test 123', 100);

             expect(result).equal('paop 123');

        });
        it('should return test 123', function() {
          var result = jumble('test 123', 26);

              expect(result).equal('test 123');

         });
    });