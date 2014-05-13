===============
Thinking in Git
===============

    Git is the most popular source code management and version control system in
    the open source community. Its complexity and power make it the best choice
    for most projects, while simultaneously giving it a daunting learning curve
    for newcomers. This talk will assume no background knowledge of version
    control, and will teach the basics of Git in order to give you an accurate
    mental model of what the tool does, and help you fix mistakes then ask the
    right questions if you run into problems using it later.

Agenda
======

* How to look at software development 
* What's Git
* How to learn it
    * Real life vs. tutorials

Thinking about Software Development
===================================

* Changing files
    * Some changes manual, other changes automatic
    * Changes for different reasons
        * Add feature, fix bug, test idea
        * Sometimes have several reasons at once, want changes separate

Why version control?
====================

.. figure:: _static/think/phdcomic.gif
    :align: center
    :scale: 75%

Types of version control
========================

* Centralized vs. decentralized
* Concurrent vs. locking
* Diffs/patches vs. snapshots

Git's buzzwords
===============

Thinking about snapshots
========================

* Represented as changes to a file plus pointers to unchanged files
* Not a diff (tracks all files)
* Not a duplicate of everything (points to unchanged files)

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
* Pick a project to work on

What's a **repository**?
------------------------

Database of snapshots of your code

IMAGE: film strip

Getting a repo
--------------

.. code-block:: shell

    $ git init

    $ git clone <git clone url>

    # git@github.com:organization/reponame.git
    # https://github.com/organization/reponame.git

Looking at a repo
-----------------

.. code-block:: shell

    $ git show
    fatal: bad default revision 'HEAD'
    # To be expected with nothing in the repo yet

    $ git show
    fatal: Not a git repository (or any of the parent directories): .git
    # not in a repo

Oops!
-----

.. warning:: This deletes your history. Only do it if you really want to stop
    having a Git repo here.

 .. code-block:: shell
    
    $ rm -rf .git


What're **staged changes**?
---------------------------

* Staging area is like backstage -- decide what changes go into your snapshot

* Files or parts of files can be added or removed

Staging changes
---------------

.. code-block:: shell

    $ touch foo
    $ git add foo

Looking at staged changes
-------------------------

.. code-block:: shell

    $ touch bar
    $ git status
    On branch master

    Initial commit

    Changes to be committed:
      (use "git rm --cached <file>..." to unstage)

        new file:   foo

        Untracked files:
          (use "git add <file>..." to include in what will be committed)

            bar

Oops!
-----

* Git doesn't know about it yet

.. code-block:: shell
    $ git rm --cached foo

* It was in version control before

.. code-block:: shell
    $ git reset HEAD foo

What's a **commit**?
--------------------

Snapshot of changes

Includes snapshot (with pointers to unchanged files), author, date, committer
(can differ from author), parent commit

Making a commit
---------------

.. code-block:: shell
    $ git commit

Commit creation options
-----------------------

Looking at a commit
-------------------

.. code-block:: shell
    $ git show
    $ git log

Commit display options
----------------------

Oops!
-----

What's a **remote**?
--------------------

Another *clone* of more or less the same repo

(remember when we cloned to get a copy?)

Adding a remote
---------------

.. code-block:: shell
    $ man git-remote
    $ git remote add <name> <url>

Looking at remotes
------------------

.. code-block:: shell
    $ git config -e
    $ git remote show <name>

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

.. figure:: _static/think/forking.gif
    :align: center
    :scale: 150%

* Parallel repos (or possibly divergent)
* Duplicating the "center" of the centralized VCS

Pull Requests
-------------

|

.. figure:: _static/think/pr-button.png
    :align: center

* Formalizes "Hi, please merge my changes"


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

