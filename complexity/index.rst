======================
Why's my program slow? 
======================

Algorithmic Complexity and You

http://www.vrplumber.com/programming/runsnakerun/


Hello
=====

* who am i
* who are you
* why am i telling you this

What's complexity?
==================

<picture: "it's complicated">

<wiki definition>

simple examples: naive vs optimized code, short-circuiting

introduce formalism of big-oh, big-omega, big-theta notation 
<joke about frats>

more example code, maybe from rosettacode

how to analyze complexity of recursive functions
example where you halve the complexity by reusing results of a call

.. note:: 

    `CMU intro CS notes <http://www.cs.cmu.edu/~adamchik/15-121/lectures/Algorithmic%20Complexity/complexity.html>`_
    `topcoder tutorial <http://community.topcoder.com/tc?module=Static&d1=tutorials&d2=complexity1>`_
    `study guide <http://www.studytonight.com/data-structures/time-complexity-of-algorithms>`_

abstract concepts
-----------------

turing machine, deterministic vs nondeterministic, halting problem, P vs NP

Big-O
-----

<dare i use that pic from that restraunt scene?>

derive how it's constant * thing as a function of inputs n

pepople ignore the factor -- show why that's a bad idea

best vs worst case
------------------

* best
* worst
* average
* amortized

.. note:: 

    `explanation of amortized <http://stackoverflow.com/questions/15079327/amortized-complexity-in-laymans-terms>`_


In The Real World
=================

<comic about premature optimization>
<screenshot of size of a gh repo for a decent sized project>

* it's hard to see where an algorithm spends its time
* working from a wrong guess about where the bottleneck is will waste yours

"a slow program" could mean two things: code that's not performant, or code
that takes forever to acutally get written. sometimes one is worse than the
other.

Algorithmic complexity in real code
-----------------------------------

* "the pros" can look at a section of code and tell you its best, worst, and
  average-case performance
* they do this by recognizing patterns from having read a lot of other code
* if the patterns aren't clear to you, write out what your code is doing --
  psuedo-code -- simplify it till all you have are bits that'll take constant
  time, and loops

Expected Use Case
-----------------

graphs of how exponential time with a really tiny constant compares to linear
time with a really huge constant, especially for small n

So, why **is** my program slow?
-------------------------------

<picture representing bad news>

It's probably not how you structured your algorithm. Or you fix the obvious
algorithmic stupidity and it's still bad. 

* Profiling tools are your friends

* platform-agnostic -- how to get a graph of performance for various inputs
* language-specific profiling tools
* maybe it's slow in the real world because reality is different from your
  test cases
