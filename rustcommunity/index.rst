
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

    .. note::

        Rust development started in earnest in 2010, and picked up speed till
        Rust 1.0 was released on May 15, 2015. Since then we've rolled a Rust
        Stable minor version every 6 weeks -- 1.6 just came out on January 21. 

        What's Rust?

.. slide:: 

    .. figure:: /hieroglyph-static/safe-concurrent-fast.png
        :class: fill
    
    .. note:: 
        
        Rust is a systems programming language 

        How?

        * Ownership
        * Borrowing
        * Lifetimes

        Oh, and that little guy is Ferris. He's a Rustacean. 

        Out of these requirements fall zero-cost abstraction, a type system
        that makes Haskellers happy, etc

        There is *much* more than 40mins worth of things to say about how Rust
        works. Here are the main changes. 


.. slide:: 

    .. figure:: /hieroglyph-static/nested-boxes.png
        :class: fill

    .. note:: 

        We could spend all day on language details, but basically it's set up
        to guarantee that no program written in safe Rust code can leak
        memory, suffer overflow errors, or hit a type error during execution.
    
        This does mean that occasionally there'll be a valid program which the
        compiler does not accept. In this case, you can use Unsafe and maybe
        file a bug.


        The cost of zero-cost abstraction is the learning curve. 


Ownership, Borrowing, Lifetimes
-------------------------------

* Prevent use-after-free (at compile time)
* Memory safety prevents data races

.. code-block:: rust

    fn annotated_input<'a>(x: &'a i32) {
        println!("Annotated input result is {}", x)
    }
    fn elide_input(x: &i32) {
        println!("Elided input is also {}", x)
    }
    fn main() {
        let x = 3;
        elide_input(&x);
        annotated_input(&x);
    }


.. note::

    The most important thing to know about lifetimes on day 1 of Rust use is
    that the compiler is very smart and can often figure them out for you.
   
    Variable bindings own their values. When the binding goes out of scope,
    the compiler knows it's ok to free the memory. 

    You'll soon learn that a reference can be mutable or shared, never both.

    Doing lifetimes at compile time eliminates the need for GC. Compiler knows
    when to free memory. 

    The borrow checker is like a curmudgeonly mentor who enforces best
    practices.

Getting Rust
------------

* https://github.com/brson/multirust

* https://play.rust-lang.org/


Nightly, Beta, Stable
---------------------

.. figure:: /hieroglyph-static/stable.png
    :class: scale

.. note:: 

    Committing to stability


    In the process of developing Rust, we’ve encountered a lot of dead ends, and so it’s been
    essential to have the freedom to change the language as needed.

    But Rust has matured, and core aspects of the language have been steady for a
    long time. The design feels right. And there is a huge amount of pent up
    interest in Rust, waiting for 1.0 to ship so that there is a stable foundation
    to build on.

    It’s important to be clear about what we mean by stable. We don’t mean that
    Rust will stop evolving. We will release new versions of Rust on a regular,
    frequent basis, and we hope that people will upgrade just as regularly. But
    for that to happen, those upgrades need to be painless.

    To put it simply, our responsibility is to ensure that you never dread
    upgrading Rust. If your code compiles on Rust stable 1.0, it should compile
    with Rust stable 1.x with a minimum of hassle.

.. slide:: 

    .. figure:: /hieroglyph-static/not-so-secret.png
        :class: fill


    .. note:: 

        But building an amazing language isn't the only thing we're known for. 

.. slide::

    .. figure:: /hieroglyph-static/humans-quote.png
        :class: fill

    .. note:: 

        I've met them. It's true. They're kind of amazing. Actually very
        amazing. 


        But I lured all *you* amazing humans here with promises that I'd talk
        about... 

.. slide:: 

    .. figure:: /hieroglyph-static/automate.png
        :class: scale

    .. note:: 

        Automation! I think of automation as offloading a human task onto a
        machine, in other words, teaching a system a habit. 


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

        I think these work so well because *it's always been that way*. 

        
.. slide:: 

    .. figure:: /hieroglyph-static/define-diverse.png
        :class: scale

    .. note:: 

        Do a root cause analysis on pretty much any conflict. If you keep
        asking "why", you will land on... 

.. slide::

    .. figure:: /hieroglyph-static/diversity.png
        :class: scale

    .. note:: 

        TODO FIXME: nuke one of these slides in favor of words about selecting
        for willingness to have moderated discussion

        Diversity of thought causes problems. Yes, you heard that correctly. A
        community who all thinks the same is not diverse. 

        When you get enough diverse viewpoints, some will oppose others. When this
        happens about non-technical things, people get hurt and offended -- I can
        genuinely think it's cool to tell you how pretty you are and you can
        genuinely think it's horribly uncool and harrassing, and it doesn't matter
        who's right or wrong but most communities end up resolving "right" and
        "wrong" with trial by verbal combat. 

.. slide:: 

    .. figure:: /hieroglyph-static/trial-by-combat.jpg
        :class: fill

    .. note:: 

        https://en.wikipedia.org/wiki/German_school_of_fencing#/media/File:Augsburg_Cod.I.6.4%C2%BA.2_%28Codex_Wallerstein%29_107v.jpg

        Disagreements in some other communities that I've been part of have
        been resolved by trial by verbal combat. This does not happen nearly
        as much in the Rust community, because we have...


.. slide:: 

    .. figure:: /hieroglyph-static/CoC.png
        :class: fill


    .. note::

        https://www.rust-lang.org/conduct.html

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

        Who are we excluding?

.. slide:: 

    .. figure:: /hieroglyph-static/conduct-everywhere.png
        :class: fill

    .. note:: 

        We also have a presence on diverse platforms, but CoC is the unified
        "party line" across all of them. 

        This is also the first example of VIRALITY of good practices. 

        Is that kinda scary? Some poeple think so. 


.. slide:: 

    .. figure:: /hieroglyph-static/attacksquad.png

    -- http://developers.slashdot.org/comments.pl?sid=8652809&cid=51352141

    .. note:: 

        The Rust community gives me a particularly bad feeling. They're rather
        tyrannical about enforcing their code of conduct. They even have a moderation
        attack squad [rust-lang.org] to go after anyone they deem to be an enemy! I've
        never seen this kind of orchestrated control exerted over the community of any
        other programming language. This sets off warning alarms for me.
        

        That's one of the indiduals whom we have intentionally excluded from
        participating in the Rust community. We think that this is okay.


.. slide::

    .. figure:: /hieroglyph-static/disclaimer.png
        :class: fill

    .. note:: 

        This works for Rust because everyone in the current community either
        wanted the CoC or joined after it was enstated (thus is ok with it). I
        know somebody's going to ask me how you get a CoC *in*. That's a really
        huge, difficult problem that I'm not going to talk about here. 

        The moral of the story is to get everyone on the same page about the
        community's values ASAP, preferably before the project gets big. 


.. slide::

    .. figure:: /hieroglyph-static/agreement.png
        :class: fill
 
    .. note::

        Now we have people who agree on *how* they want to build code. *what* do they
        build?

        In other communities, people guess. Then they put lots of time into
        something, and then the rest of the community doesn't want it, and then
        they're sad.

.. slide:: 

    .. figure:: /hieroglyph-static/rubbish.png
        :class: fill

    .. note::

        People get sad and angry when they put a bunch of their life into a new
        feature only to be told it's not what the project wants or needs. 

        Combine that with "pull requests welcome" as a synonym for "I don't want
        to explain all the things I dislike about that, but I don't think it's
        possible anyway, so please leave me alone", and you get people feeling
        rejected a lot.

.. slide::

    .. figure:: /hieroglyph-static/time-vs-pain.png
        :class: fill 

    .. note:: 

        One way to feel unappreciated is if you spent a bunch of time building
        the wrong code. Rust's solution is the RFC process.  


RFC process
-----------

.. figure:: /hieroglyph-static/rfcs-repo.png
    :class: scale

.. note:: 

    You don't get as attached to a written proposal that's explicitly only a
    suggestion. 

    Another way that I've seen other communities be unappreciative is to take
    good contributions and contributors for granted. 

    And in a big, distributed community, it's easy to feel left out. There's
    no totally automatic fix, but a good newsletter really helps:

This Week In Rust
-----------------

* News & Blog Posts
* Notable New Crates & Project Updates
* Updates from Rust Core
* New Contributors
* Approved RFCs
* Final Comment Period
* New RFCs
* Upcoming Events
* fn work(on: RustProject) -> Money
* Crate of the Week
* Quote of the Week

.. note:: 

    There're always these main sections, and sometimes also...

.. slide::

    .. figure:: hieroglyph-static/friends-of-the-tree.png
        :class: fill

    .. note:: 
        The This Week In Rust newsletter names the project's new contributors and
        often thanks a Friend Of The Tree

        * Community members built http://edunham.github.io/rust-org-stats/

        The Tree is important to us. Because the next huge problem that open
        source projects face is.... broken tree!

.. slide:: 

    .. figure:: /hieroglyph-static/broken-tree.png
        :class: fill

    .. note:: 

        Why's it bad when the tree breaks?

        Our friends of the tree are super important, because it hurts everyone
        when the tree gets broken. 

        * Developers
        * Users
        * Public image
        * Confidence in project

.. slide:: 

    .. figure:: /hieroglyph-static/not-rocket-science.png
        :class: fill

    http://graydon.livejournal.com/186550.html

    .. note:: 

        The Not Rocket Science Rule of Software Engineering. It sounds
        obvious, but *actually doing it* can sound almost impossible. 


.. slide::

    .. figure:: /hieroglyph-static/rocketscience.png
        :class: fill

    .. note:: 

        This sounds simple, but it actually takes a huge amount of code review
        and diligence to adhere to. 

        That's why the AUTOMATICALLY.

        But when you try to keep your build green all the time, what happens? 

.. slide:: 

    .. figure:: /hieroglyph-static/humans-vs-humans.png
        :class: fill

    .. note:: 

        Typical code review pits person against person. This is problematic
        because forcing a nice person to say no to other nice people makes
        them feel kind of bad. 

        How does telling a really enthusiastic, passionate new contriutor that
        their code isn't good enough make you feel?

        One easy tweak reduces this stress...

.. slide:: 

    .. figure:: /hieroglyph-static/humans-vs-robots.png
        :class: fill

    .. note:: 

        When you want code into the tree and something says no, there's still
        a conflict. Still an Us Vs Them. But we can change who's in the 'us'
        and who's in the 'them'.

        So yeah, who's Us?

.. slide:: 

    .. figure:: /hieroglyph-static/borscommits.png
        :class: scale

    .. note:: 

        Who's this Bors guy? He sure seems to be doing a lot of work.

.. slide::

    .. figure:: /hieroglyph-static/bors-commits.png
        :class: scale

    .. note:: 

        Yep, he's doing a lot of the work. Does that name ring a bell from
        somewhere?

Bors
====

.. figure:: /hieroglyph-static/bors-book.jpg
    :class: scale
    :align: center

.. note:: 

    I'm used to a paradigm where it's newbie vs maintainer

    Bors changes the conversation. By personifying the testing system, we
    shift away from newbies maintainers... <slide>

Bors Logic
==========

.. code-block:: shell 

    if state==UNREVIEWED or DISCUSSING, look for r+ or r-:
        if r+, set APPROVED
        if r-, set DISAPPROVED

    if state==APPROVED, merge pull.sha + master => test_ref:
        if merge ok, set PENDING
        if merge fail, set ERROR (pull req bitrotted)

    if state==PENDING, look at buildbot for test results:
        if failed, set FAILED
        if passed, set TESTED
        (if no test status, exit; waiting for results)

    if state==TESTED, fast-forward master to test_ref
        if ffwd works, close pull req
        if ffwd fails, set ERROR (someone moved master on us)

.. note:: 

    The general cycle of bors' operation is as follows:

    load all pull reqs
    load all statuses and comments
    sort them by the STATE_* values below

    pick the ripest (latest-state) one and try to advance it, meaning:

        if state==UNREVIEWED or DISCUSSING, look for r+ or r-:
            if r+, set APPROVED
            if r-, set DISAPPROVED
            (if nothing is said, exit; nothing to do!)

        if state==APPROVED, merge pull.sha + master => test_ref:
            if merge ok, set PENDING
            if merge fail, set ERROR (pull req bitrotted)

        if state==PENDING, look at buildbot for test results:
            if failed, set FAILED
            if passed, set TESTED
            (if no test status, exit; waiting for results)

        if state==TESTED, fast-forward master to test_ref
            if ffwd works, close pull req
            if ffwd fails, set ERROR (someone moved master on us)

Bors vs Homu
============

https://github.com/graydon/bors

    * Stateless
    * Polls all PRs on cron job

https://github.com/barosl/homu

    * Keeps state
    * Runs when triggered by GitHub hooks
    * Supports `rollup` and `try`
    * Account is named Bors

.. note:: 

    The Bors account is actually running on a Homu instance, and Homu's
    probably the guy you should be using if you're rolling this out.

    Homu is an incremental improvement on Bors; carries state, allows try
    builds, listens for pushes from Git hooks rather than polling the repo

.. slide:: 

    .. figure:: /hieroglyph-static/buildbot-nut.png
        :class: scale

    .. note:: 

        Starting at the bottom of the stack, we have a comprehensive test
        suite run by a Buildbot instance.

        Buildbot allows us to run community builders for platforms that aren't
        officially supported. It helps turn "no" into "PRs welcome". Of course
        we have to be choosy about who if anyone we take snaps from, and
        communicate endorsement or lack thereof to the community. 

        And as you may have noticed, we have a *lot* of comunity
        buzz/hype/popularity at the moment. This means a lot of newbies. More
        on  that later.


Solved Problems
===============

* Get nice humans
* Show that we appreciate them
* Keep the tree from breaking


.. note:: 

    Next problem... things are awesome and we're building a cool product and
    now EVERYBODY wants to get involved!

.. slide::

    .. figure:: hieroglyph-static/crowd-of-newbies.png
        :class: fill

    .. note:: 

        Ok, there's really no such thing as too many contributors. 
        
        But in other communities, I've seen core
        contributors become more and more grumpy the more times they have to say
        the same thing over and over again to a stream of newcomers. 

        I've even experienced it myself, and realized it's called burnout. 

        But the Rust community has some automation to reduce the overhead that
        these new contributors place on core team folks. 


Highfive
========

.. figure:: /hieroglyph-static/rust-highfive.png
    :class: scale

.. note:: 

    Highfive is a bot who helps create a welcoming environment. 

    This shows off Highfive's 3 key features: Assigning reviewer,
    welcoming newbie, and providing useful information on appropriate repos. 


Highfive Configuration
======================

.. code-block:: json

    {
    "groups": {
        "all": ["core"],
        "compiler": ["@pnkfelix", "@nrc", "@Aatch", "@jroesch", "@arielb1"],
        "syntax": ["@pnkfelix", "@nrc", "@sfackler"],
        "libs": ["@aturon"]
    },
    "dirs": {
        "doc":              ["doc", "@manishearth"],
        "liballoc":         ["libs"],
        "libarena":         ["libs"],
        "libbacktrace":     [],
        "libcollections":   ["libs", "@Gankro"],
    ...

.. note:: 

    Rust's highfive knows there's separate teams for each repository, and
    knows what teams+individuals should be assigned to review changes in
    each directory of the tree. 

    Servo has a highfive too, which we've diverged from a bit, who handles
    things differently. This is another case of VIRALITY -- we actually
    inherited the highfive idea from servo

.. slide::

    .. figure:: /hieroglyph-static/confused-newbie.png
        :class: fill

    .. note:: 

        Problem: Newbies are lost and confused. They want to get involved but
        don't necessarily know how to start. 


        http://www.joshmatthews.net/fsoss15/contribution.html
        

.. slide:: 

    .. figure:: /hieroglyph-static/starters.png
        :class: fill

    .. note:: 

        https://starters.servo.org/

        Martin Feckie wrote the first Starters; I use Servo's as an example
        because they've been rolling it out first

.. slide:: 

    TODO FIXME: So the newbie has made a PR. Sometimes PRs get abandoned, but
    we have triage!

    https://mail.mozilla.org/pipermail/rust-dev/2013-April/003668.html

.. slide::

    .. figure:: /hieroglyph-static/crates.png
        :class: fill

    .. note:: 

        We have an awesome collection of community code. 

        Here's a place where the Not Rocket Science Rule kind of went viral. 

        We're applying it to testing the compiler itself. 

        It's all very well to make the code pass all its tests, but there's another
        definition of "broken" as well: A new stable release that regresses
        someone's code that worked on the old stable release. 

        brson is a wizard and y'all should ping him and ask him to come give a
        talk on it. 

Crater: Testing The Compiler
----------------------------

* https://github.com/brson/taskcluster-crater

.. figure:: /hieroglyph-static/crater-concept.png
    :class: scale


.. slide::

    .. figure:: /hieroglyph-static/rocketscience.png
        :class: fill


talks.edunham.net/lca2016
=========================

lca2016@edunham.net

@qedunham

Rust-lang BoF downstairs after this!
