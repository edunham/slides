===============
Thinking in Git
===============

Agenda
======

What we'll cover
    * Why you need Git
    * Philosophies
    * Commands


How I'll teach stuff
    * Here's a thing
    * How to look at it
    * How to undo it

Why?
====

.. figure:: phdcomic.gif
    :align: center
    :scale: 75%

Thinking about Software Development
===================================

* Changing files
  * Some changes manual, other changes automatic
  * Changes for different reasons
    * Add feature, fix bug, test idea
    * Sometimes have several reasons at once, want changes separate

Thinking about snapshots
========================

* Represented as changes to a file plus pointers to unchanged files

How Git sees your project
=========================

Unstaged | Staged | Committed

Goals of Distributed Version Control
====================================

* Reliability
* No SPOF
* Eliminate network dependencies

How?
====

Setting Up
----------

* Tell Git who you are
* You'll need SSH keys later
* Install Git
  * also tk and tcl if you want the GUI later
* Set preferred editor

What's a **repository**?
------------------------

Getting a repo
--------------

Looking at a repo
-----------------

Oops!
-----

What're **staged changes**?
---------------------------

Staging changes
---------------

Looking at staged changes
-------------------------

Oops!
-----

What's a **commit**?
--------------------

Making a commit
---------------

Looking at a commit
-------------------

Oops!
-----

What's a **remote**?
--------------------

Adding a remote
---------------

Looking at remotes
------------------

Oops!
-----

What's a **tag**?
-----------------

Adding a tag
------------

Looking at tags
---------------

Oops!
-----

What's a **branch**?
--------------------

Making a branch
---------------

Looking at branches
-------------------

Oops!
-----

What's a **merge**?
-------------------

Making a merge
--------------

Looking at merges
-----------------

Oops!
-----

What's a **rebase**?
--------------------

Rebasing
--------

Can you look at a rebase?
-------------------------

Oops!
-----

GitHub Stuff
============

GH is not exactly Git. 

* Less distributed paradigm
* Git carefully never told us who to trust

Watch `Linus's talk <https://www.youtube.com/watch?v=4XpnKHJAok8>`_ for enlightenment

Forking
-------

Pull Requests
-------------

Annoying tricks
---------------

* Branches keep adding their content to PRs
* Group management and access rights
* No project license required

Extra features
--------------

* Wiki
* Gist
* Issue trackers
* Cool graphs
* Repo descriptions and automatic README display

Hooks and CI
============

Hooks
-----

Jenkins
-------

Travis
------

Playing Well with Others
========================

