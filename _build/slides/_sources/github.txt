========================
Hands-On Intro to GitHub
========================

edunham 10/29/2013


What We'll Cover
================

* What's Git
* What's GitHub
* Setting up an account
* Adding a project
* Contributing to someone else's project
* Help, everything's broken!
* More resources

Version Control is Hard
=======================

.. figure:: /_static/github/xkcd_1053.png

Image from `XKCD <http://xkcd.com/1053/>`_

Why Bother?
===========

.. figure:: /_static/github/phd_final.gif

Image from
`PhD Comics <http://www.phdcomics.com/comics/archive.php?comicid=1531>`_

Better Options: Version Control
===============================

* Commit = Snapshot of part of your project's state
* Centralized (SVN, CVS) vs. Decentralized (Git, hg)
* We'll look at Git today
    * Easier to learn other VCS from Git
    * Widely used in the open source world

Git
===

.. figure:: /_static/github/Linus_Torvalds.jpeg

git, noun. Brit.informal. 
1. an unpleasant or contemptible person.

Using Git Locally
=================

.. code-block:: bash
$ git init

$ git add <filename>

$ git commit -m "I did a thing!"

# Undo things?
# `http://git-scm.com/book/en/Git-Basics-Undoing-Things`_

# Did I remember to commit that?
$ git status

# What commits have I made lately?
$ git log

What Not To Do
==============

* Don't delete the .git files
* Stop keeping version number information in your filenames
    * This info goes in your commit messages
* Avoid redundant copies of the same work in one revision
* Don't make "oops, undoing that" commits.
    * Use git commit --amend
* Don't wait too long between commits
    * You can squash them all together later
* Don't commit secrets...

.. figure:: /_static/github/dont_do_this.jpg

http://arstechnica.com/security/2013/01/psa-dont-upload-your-important-passwords-to-github/

Daily workflow
==============

Pull -> Work -> Add changes -> Commit -> Push

Larger projects have more complex workflows

.. figure:: /_static/github/gitflow.png

GitHub!
=======

.. figure:: /_static/github/octocat.jpg

Let's Walk Through
==================

* Creating an account
    * Gravatar
    * How to read a profile
* Creating SSH keys
* Uploading your SSH key
* Creating a new repository
* Fork somebody else's repo
* Edit files online
* Submit a pull request
