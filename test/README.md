# Employsure testing jumble function.

Jumble function expects a string input and an integer n that is between
1 and 1000. It will transform each character of the input string
using the following instructions:

```
If it is a letter of the alphabet(a,b..z) shift to the right by n letters,
if you reach z return to a and continue, however many times is required.

If it is a number(1,2,3..) or space leave it the same.
Example :

   jumble('test 123',0) == 'test 123'
   jumble('test 123',1) == 'uftu 123'
   jumble('test 123',100) == 'paop 123'
   jumble('test 123',26) == 'test 123'

```





## To unit test the application locally
  - Install Mocha by running the command $ npm install --global mocha
  - Install Chai by running the command $ npm install chai



```
   To run the unit test locally under the root project folder run
   $ npm test

```




