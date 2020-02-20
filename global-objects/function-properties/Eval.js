/* eslint-disable no-unused-vars */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-eval */

/*
  The eval() function evaluates JavaScript code represented as a string.
*/

console.log(eval('2 + 2'));
// expected output: 4

console.log(eval(new String('2 + 2')));
// expected output: 2 + 2

console.log(eval('2 + 2') === eval('4'));
// expected output: true

console.log(eval('2 + 2') === eval(new String('2 + 2')));
// expected output: false

/*
* PARAMETERS

** string **
  A string representing a JavaScript expression, statement, or sequence of statements.
  The expression can include variables and properties of existing objects.

** Return value **

  The completion value of evaluating the given code. If the completion value is empty,
  undefined is returned.


* DESCRIPTION

  The argument of the eval() function is a string. If the string represents an expression,
  eval() evaluates the expression. If the argument represents one or more JavaScript statements,
  eval() evaluates the statements. Do not call eval() to evaluate an arithmetic expression;
  JavaScript evaluates arithmetic expressions automatically.

  If you construct an arithmetic expression as a string, you can use eval() to evaluate it at a later time.
  For example, suppose you have a variable x.
  You can postpone evaluation of an expression involving x by assigning the string value of the expression,
  say "3 * x + 2", to a variable, and then calling eval() at a later point in your script.

  If the argument of eval() is not a string, eval() returns the argument unchanged.
  In the following example,
  the String constructor is specified and eval() returns a String object rather than evaluating the string.

*/

console.log(eval(new String('2 + 2'))); // returns a String object containing "2 + 2"
console.log(eval('2 + 2')); // returns 4

/* You can work around this limitation in a generic fashion by using toString(). */
const expression = new String('2 + 2');
console.log(
  eval(expression.toString()),
  "const expression = new String('2 + 2')"
);

/*
  If you use the eval function indirectly, by invoking it via a reference other than eval,
  as of ECMAScript 5 it works in the global scope rather than the local scope.
  This means, for instance, that function declarations create global functions,
  and that the code being evaluated doesn't have access to local variables within the scope where it's being called.
*/
function test() {
  const x = 2;
  const y = 4;
  console.log(eval('x + y'), 'Direct call, uses local scope, result is 6'); // Direct call, uses local scope, result is 6
  // const geval = eval; // equivalent to calling eval in the global scope
  // console.log(geval('x + y')); // Indirect call, uses global scope, throws ReferenceError because `x` is undefined
  // (0, eval)('x + y'); // another example of Indirect call
}

test();

/*
 * Do not ever use eval!
    eval() is a dangerous function, which executes the code it's passed with the privileges of the caller.
    If you run eval() with a string that could be affected by a malicious party,
    you may end up running malicious code on the user's machine with the permissions of your webpage / extension.
    More importantly, a third-party code can see the scope in which eval() was invoked,
    which can lead to possible attacks in ways to which the similar Function is not susceptible.

    eval() is also slower than the alternatives, since it has to invoke the JS interpreter,
    while many other constructs are optimized by modern JS engines.

    Additionally, modern javascript interpreters convert javascript to machine code.
    This means that any concept of variable naming gets obliterated.
    Thus, any use of eval will force the browser to do long expensive variable name
    lookups to figure out where the variable exists in the machine code and set it's value.
    Additonally, new things can be introduced to that variable through eval()
    such as changing the type of that variable,
    forcing the browser to reevaluate all of the generated machine code to compensate.
    However, there (thankfully) exists a very good alternative to eval: simply using window.Function.
    As an example of how you convert code using evil eval() to using Function(), see below.
 */

// Bad code with eval:
function badLooseJsonParse(obj) {
  return eval(obj);
}
// throw exception
// console.log(badLooseJsonParse('{a:(4-1), b:function(){}, c:new Date()}'));

// Better code without eval:
function betterLooseJsonParse(obj) {
  // eslint-disable-next-line no-new-func
  return Function(`"use strict";return (${obj})`)();
}
console.log(betterLooseJsonParse('{a:(4-1), b:function(){}, c:new Date()}'));
