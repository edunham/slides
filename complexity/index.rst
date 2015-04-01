======================
Why's my program slow? 
======================

Algorithmic Complexity and You

http://www.vrplumber.com/programming/runsnakerun/
http://bigocheatsheet.com/
http://accidentallyquadratic.tumblr.com/

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

.. note:: 

    `CMU intro CS notes <http://www.cs.cmu.edu/~adamchik/15-121/lectures/Algorithmic%20Complexity/complexity.html>`_
    `topcoder tutorial <http://community.topcoder.com/tc?module=Static&d1=tutorials&d2=complexity1>`_
    `study guide <http://www.studytonight.com/data-structures/time-complexity-of-algorithms>`_


Time Complexity
---------------

how long does it take?

.. note:: 

    TODO: find example of something n^2 vs log(n) or something. graphs?

Constant + Factor * N
---------------------

* Disregarding the constant

.. note:: 

    TODO: graph of when disregarding the constant is BAD


Example: Searching a sorted array
---------------------------------

Brute Force

.. code-block:: python

    def brute_force_search(l, value):
        for i in range(len(l)):
            if l[i] == value:
                return i
        return -1 
    

Binary Search

.. code-block:: python

    def binary_search(l, value):
        low = 0
        high = len(l)-1
        while low <= high: 
            mid = (low+high)//2
            if l[mid] > value: high = mid-1
            elif l[mid] < value: low = mid+1
            else: return mid
        return -1

(from `rosettacode <http://rosettacode.org/wiki/Binary_search#Python>`_)

Big-O
-----

<dare i use that pic from that restraunt scene?>

.. note::

    TODO: the scary-looking maths from wikipedia

derive how it's constant * thing as a function of inputs n

pepople ignore the factor -- show why that's a bad idea

Space Complexity
----------------

how much memory does it take? 

In-place sorting vs sorting by copying the array

* What if your array is > 1/2 your disk?
* Constant is the size of an item being sorted

.. note::
    
    TODO: sorting algos, in-place vs otherwise. example of very large arrays
    or very small memory, where this would actually matter

Reversing an Array
------------------

copy elements::

    function reverse(a[0..n - 1])
        allocate b[0..n - 1]
        for i from 0 to n - 1
            b[n − 1 − i] := a[i]
            return b

vs in-place::

    function reverse_in_place(a[0..n-1])
        for i from 0 to floor((n-2)/2)
            tmp := a[i]
            a[i] := a[n − 1 − i]
            a[n − 1 − i] := tmp 


What about recursive functions?
-------------------------------

* time complexity: expected number of calls * time in call
* space complexity: risk running out of stack

.. note::

    TODO: example where you halve the complexity by reusing results of a call;
    fibonnacci?

best vs worst case
------------------

* best
* worst
* average
* amortized

.. note:: 
    
    TODO: explain big theta and big omega; look them up in the book
    `explanation of amortized <http://stackoverflow.com/questions/15079327/amortized-complexity-in-laymans-terms>`_

Relative Times
--------------

.. note:: 

    Grace Hopper and the Nanoseconds
    TODO: bring nanoseconds?

metaphor: going to the fridge vs going to the store vs going to the moon

Throwing out that constant...
-----------------------------

.. note:: 

    TODO graphs again of big constant and log time vs tiny constant and linear
    time

In The Real World
=================

.. figure:: images/xkcd1205.png
    :align: center

.. note:: 
    same things apply to saving time in your algorithm

Good Code
---------

* Correct
* **Efficient**
* Simple
* Readable
* Maintainable

.. note:: from cracking the coding interview, p. 56

Is my program slow?
-------------------

* What have you tested it with?
* What will it have to handle in real life?

.. note:: 

    TODO: tools/frameworks for mocking heavy load on a program
    Worst case vs expected case

    Slow to perform vs slow to write

Why is my program slow?
-----------------------

<picture representing bad news>

It's probably not how you structured your algorithm. Or you fix the obvious
algorithmic stupidity and it's still bad. 

.. note::

    * Profiling tools are your friends
    * platform-agnostic -- how to get a graph of performance for various inputs
    * language-specific profiling tools
    * maybe it's slow in the real world because reality is different from your
      test cases

Why's my program slow? 
----------------------

<screenshot of size of a gh repo for a decent sized project>

* it's hard to see where an algorithm spends its time
* working from a wrong guess about where the bottleneck is will waste yours

.. note::

    "a slow program" could mean two things: code that's not performant, or
    code that takes forever to acutally get written. sometimes one is worse
    than the other.

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

.. note:: 

    TODO: GRAPHS of high constant vs low constant, fast vs slow

Analysis Tools
--------------

.. note::

    TODO: sort them
    * specific vs general
    * automated vs manual
    * language-specific vs platform-agnostic

Languages

Python: Run Snake Run <pictures>

C: GDB/`gprof <https://sourceware.org/binutils/docs/gprof/>`_

Testing
-------

.. note:: TODO

    examples of frameworks and stuff being applied


Troubleshooting
---------------

