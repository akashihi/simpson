Simpson's rule - a method for numerical integration.
====================================================


Just playing with requirjs/bootstrap for learning purposes. Feel free to use it on your as or as
a library in your project.


js/simpson.js
-------------

*** Requires math.js module (http://www.mathjs.org) ***

A javascript module, that implements Simpson's rule. There are two public functions:

* integrate: function(expression, b, a, N)
* inaccuracy: function(expression, b, a, N)

They have same parameters list:

* expression --- a function, dependant on x (and only on x) variable.
* b --- Upper domain bound.
* a --- Lower domain bound.
* N --- Number of steps to calculate. The bigger the number, the slower calculations is, but the
results will be more precise.

integrate function calculates value of a definite integral expression(x) dx in a reange [a;b].

inaccuracy function estimates integral's value inaccuracy using Runge rule.


 (C) Denis V Chapligin, 2013. Released under terms of GPLv3.