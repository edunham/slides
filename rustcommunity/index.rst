
.. Life is better with Rust's Community Automation slides file, created by
   hieroglyph-quickstart on Sun Jan 31 18:41:53 2016.

.. slide::

    .. figure:: /hieroglyph-static/titleslide.png
        :class: fill


=========================
talks.edunham.net/lca2016
=========================

lca2016@edunham.net
@qedunham

.. slide::

    .. figure:: /hieroglyph-static/rustlogo.png
        :class: fill 

        
.. slide:: 

    .. figure:: /hieroglyph-static/first-rust-commit.png
        :align: center


Rust
----

* Safe
* Concurrent
* Fast

.. note:: 
    
    How?

    * Ownership
    * Borrowing
    * Lifetimes


    Out of these requirements fall zero-cost abstraction, a type system
    that makes Haskellers happy, etc

.. slide:: 

    "Fortunately, perhaps the most impressive aspect of Rust is the welcoming
    community that supports it. This community could become Rust’s not-so-secret
    weapon."

    - http://www.infoworld.com/article/2947214/open-source-tools/two-reasons-the-rust-language-will-succeed.html

.. slide::

    .. figure:: /hieroglyph-static/humans-quote.png
        :align: center

    http://scattered-thoughts.net/blog/2015/06/04/three-months-of-rust/


.. slide:: 

    .. figure:: /hieroglyph-static/automate.png
        :class: scale


.. slide:: 

    .. figure:: /hieroglyph-static/habit.png
        :class: scale


.. slide:: 

    .. figure:: /hieroglyph-static/life-is-better.png
        :class: fill

    .. note::

        The Rust community isn't free of problems, but there are some issues that
        I've seen show up pretty consistently in other places where I've been
        involved, which Rust seems to lack. I've had a unique opportunity to pick
        the brains of the core team members about how things got this way, and I'm
        here to share what I wish I'd known earlier. 

.. slide::

    .. figure:: /hieroglyph-static/diversity.png
        :class: scale

    .. note:: 

        Diversity of thought causes problems. Yes, you heard that correctly. A
        community who all thinks the same is not diverse. 

        When you get enough diverse viewpoints, some will oppose others. When this
        happens about non-technical things, people get hurt and offended -- I can
        genuinely think it's cool to tell you how pretty you are and you can
        genuinely think it's horribly uncool and harrassing, and it doesn't matter
        who's right or wrong but most communities end up resolving "right" and
        "wrong" with trial by verbal combat. 

.. slide:: 

    .. figure:: /hieroglyph-static/CoC.png
        :class: scale

    https://www.rust-lang.org/conduct.html

    .. note::

        Setting a CoC differentiates 2 kinds of people: Those who'll follow it and
        those who won't. "I'll just be nice" -> what about when your definition of
        "nice" violates CoC?

        Laying these ground rules before they're needed *homogenizes* the
        community by *excluding* the people who are unwilling to change. This
        gives us a chance at resolving disputes civilly, and it usually works!

        We plaster it everywhere -- discourse automatically shows it, it's all
        over github, Rust meetups flaunt it -- because keeping out the people who
        see trial by combat as the best solution makes the community a much more
        enjoyable place for the rest of us.     



.. slide:: 

    .. epigraph:: 

        tyrannical about enforcing their code of conduct ... moderation
        attack squad ...

        -- http://developers.slashdot.org/comments.pl?sid=8652809&cid=51352141

    .. note:: 

        The Rust community gives me a particularly bad feeling. They're rather
        tyrannical about enforcing their code of conduct. They even have a moderation
        attack squad [rust-lang.org] to go after anyone they deem to be an enemy! I've
        never seen this kind of orchestrated control exerted over the community of any
        other programming language. This sets off warning alarms for me.
            

Unappreciated Contributions
===========================

.. note::

    TODO: Graph up and to the right of time invested vs pain of rejection

    People get sad and angry when they put a bunch of their life into a new
    feature only to be told it's not what the project wants or needs. 

    Combine that with "pull requests welcome" as a synonym for "I don't want
    to explain all the things I dislike about that, but I don't think it's
    possible anyway, so please leave me alone", and you get people feeling
    rejected a lot.

.. slide::

    .. figure:: /hieroglyph-static/time-vs-pain.png
        :class: fill 

RFC process
-----------

.. figure:: /hieroglyph-static/rfcs-repo.png
    :class: scale

.. note:: 
    You don't get as attached to a written proposal that's explicitly only a
    suggestion. 

Recognition
-----------

* Weekly newsletter names "friend of the tree"
* First commits recognized in TWIR
* Community members built http://edunham.github.io/rust-org-stats/

Broken Tree
===========

.. note:: Why's it bad when the tree breaks? 

.. slide:: 

    .. figure:: /hieroglyph-static/not-rocket-science.png
        :align: center
        :scale: 80%

    http://graydon.livejournal.com/186550.html

    .. note:: 

        The Not Rocket Science Rule of Software Engineering


.. slide::

    .. figure:: /hieroglyph-static/rocketscience.png
        :class: fill

.. slide::

    .. figure:: /hieroglyph-static/bors-commits.png
        :class: scale

.. slide:: 

    .. figure:: /hieroglyph-static/borscommits.png
        :class: scale

Bors
====

.. figure:: /hieroglyph-static/bors-book.jpg
    :class: scale
    :align: center

.. note:: 

    I'm used to a paradigm where it's newbie vs maintainer

    Bors changes the conversation. By personifying the testing system, we
    shift away from newbies maintainers... <slide>


.. slide:: 

    .. figure:: /hieroglyph-static/humans-vs-robots.png
        :class: fill











