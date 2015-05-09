======================================
Teaching DevOps to University Students
======================================

.. slide:: 

    |
    |

    Emily Dunham

    edunham@edunham.net

    edunham on IRC, no Twitter

    talks.edunham.net/openwest2015/devops

Agenda
------

* Storytime

* Analysis

* Recommendations


.. slide::

    .. figure:: /_static/corvallis.png
        :class: fill

    .. note:: Hi. I'm Emily Dunham. CS student at Oregon State University. 

              * FIRST team 847 captain, programmer, mechanical design
              * OSU Robotics Club VP for ~2yrs
              * OSU Linux Users Group VP then president
              * TA and peer advisor for OSU EECS department
              * ... and assorted other stuff.

.. slide::

    .. figure:: /_static/osl_logo.png
        :class: fill

    .. note:: 
        Been coding on and off since 2008, but didn't get into OSS till
        joining OSL in spring 2011 (recruited at Beaver BarCamp)

        ... I almost didn't get involved with OSS at all. 

        I thought I might want to sysadmin, interviewed and they made me a
        dev. Did that for a year including summer, interned at Intel the next
        summer, TAed for a while, came back to OSL as a sysadmin in December
        2012.  

.. slide::

    .. figure:: /_static/teddybear.jpg
        :class: fill

    .. note:: Founded in 2004, primarily student-driven
        There was a brief time when there were no full-timers at all. Thanks
        to support from wonderful humans including Shay Dakan and Curt
        Pedersen among many many others, we continued growing and hosting lots
        of projects. See osuosl.org for details...

        OSL was originally part of network services and operated almost
        independently of the academic departments. 

        I happily sysadminned for that year and the next summer before some
        major transitions...
         ~20 students, 4 full-timers in 2014

.. slide::

    .. figure:: /_static/oregonian.png
        :class: fill

    .. note::  Due to some bureaucracy, the OSL got moved from network
        services to the school of Electrical Engineering and Computer Science. 

.. slide::

    .. figure:: /_static/eecssite.png
        :class: fill

    .. note:: So I start hearing about how the goal is to reach *a hundred*
        students a year... this sounds pretty crazy, also awesome. 

.. slide::

    .. figure:: /_static/calendar.png
        :align: center

    .. note:: Some time passes and it becomes obvious that no way will anyone
        have sufficient free time to make this happen. It's "somebody else's
        problem". 

.. slide::

    .. figure:: /_static/brain.jpg
        :align: center

    .. note:: So a few of us sysadmins start talking about how we could fix
        this.

.. slide:: 

    .. figure:: /_static/braindump.png
        :align: center

    .. note:: Portland State University does this neat Brain Dump program,
        which was originally for training new network admin students more
        efficiently... 

        * Clear, focused purpose (make PSU sysadmins), good win criterion
        * ~10yrs old, well-established, grew organically out of mentorship
        * infrastructure in place, real systems to administer
        * The Deal

.. slide:: 

    .. figure:: /_static/opsschool.png
        :class: fill

    .. note:: There's kind of an online sysadmin training program called
        opsschool, great for self-teaching to fill in the gaps if you already
        know a bit... 

        * curriculum is very incomplete right now
        * tends to be extremely old-school
        * only really text -- few hands-on exercises w/ sufficient guidance

.. slide:: 

    .. figure:: /_static/cookies.jpg
        :class: fill

    .. note:: Did you know that opsschool sends you cookies once you
        contribute enough? You should contribute.

.. slide:: 

    .. figure:: /_static/cs312.png
        :class: fill

    .. note:: My boss used to teach a course in Linux systems administration.
        The problem... not offered ever, despite interest from students,
        because none of the fulltimers have time to teach it. The curriculum
        is licensed CC noncommercial sharealike :)
        http://osuosl.org/students/cs312

.. slide:: 

    We're combining these things:

    * Audience is total newbies
    * Goal is make open source contributors
    * Teaching devops
    * Extracurricular through school year
    * Hands-on
    * "The Deal"

.. slide:: 

    .. figure:: /_static/nametag.png
        :class: fill

    .. note:: Naming things is HARD.

        Brought the partially-complete idea to boss, tentatively calling
        it mindmelt after braindump... argued about name until settling on his
        suggestion of DevOps Bootcamp. Buzzwordy but descriptive and not taken
        elsewhere.

.. slide:: 

    .. figure:: /_static/dobcsite.png
        :class: fill

    .. note:: Centralized a site and wrote down mission, goals, audience, etc.
        Super important to do this early so everybody's on the same page -- it
        solves so many arguments before they start. 

        Using Sphinx (the readthedocs thing) but locally hosted because we
        have the infra, though RTD would've been ok too

        Now it's time to start on curriculum...

.. slide:: 

    .. figure:: /_static/puzzle.jpg
        :class: fill

    .. note:: Have you ever tried to pull apart your knowledge of a subject
        with which you're intimately familiar? Saying to a newbie "let me just
        step back and begin at the beginning" then realizing you don't know
        where the "actual beginning" even is? Welcome to writing curriculum.

.. slide:: 

    .. figure:: /_static/gplus.png
        :class: fill

    .. note:: Format of our meetings: 2 hours each thursday, roughly half and
        half development / ops topics

        Screencast over Google Hangouts -- early feedback is that the videos
        help people not in Corvallis, plus makes it easier for students to
        catch up ("the deal")

        Unifying the hardware -- should have a single boot USB that brings up
        EVERYTHING 

            * logged-in g+ account with hangout perms
            * working VM
            * all the slides
            * able to talk to projector

        

.. slide:: 

    .. figure:: /_static/balance.jpg
        :class: fill

    .. note:: Time management is hard, keeping it hands-on is hard, balancing
        dev stuff and ops stuff is hard. Keeping it interesting and engaging
        is hard. 

.. slide:: 

    .. figure:: /_static/thinker.jpg
        :class: fill

    .. note:: The fix is self-awareness. Pay attention to what you're doing,
        how it's recieved. Constantly adapt based on subtle feedback. Analyze
        each meeting afterwards for how things worked, what went well, ideas
        of what to try next time. Don't be mean.

.. slide:: 

    .. figure:: /_static/hourglass.jpg
        :align: center
        :scale: 30%

    .. note:: Time management is hard for everybody. To help...
        * students: Have clear expectations and send appropriate reminder
          emails
        * Presenters: Communicate about when to remind of talk, schedule early
          to be flexible with their schedules
        * yourself: Keep a calendar or list that you check regularly of
          deadlines, broken into the smallest pieces you find useful (big
          tasks are scary)

.. slide:: 

    .. figure:: /_static/youtube.png
        :align: center

    .. note:: We've done 10 lessons so far through the year. 
        * Several hands-on review/catchup days
        * All students have VM running an app that they can hack on
            * text editor
            * git
            * databases, networking, how servers boot, filesystems,
              configuration
        * 1/2 to 2/3 have dropped since start, several new have joined through
          the year
            * Each lesson builds on the next, and student is better off in
              tech-related career for having been exposed to each set of
              concepts
        * Earlier in the year it was clearer where to go / what to do, spent
          more time preparing... time goes VERY fast. 

.. slide:: 

    .. figure:: /_static/dobc.jpg
        :align: center

    .. note:: Other results
        * good press
        * great resume thing
        * improved confidence and skills for speakers
        * better employment pipeline for osl -- we've actually seen these
          kids' skills, how fast they learn, how hard they work
        * continued interest from students, especially new students joining,
          is almost a problem
        * Preparing to run it again next year
            * passing the torch, documenting everything

.. slide:: 

    .. figure:: /_static/audience.jpg
        :class: fill

    .. note:: What do YOU want out of this? Why are you here? What do you want
        to learn from me? What are you trying to build? How can I help you?

Analysis
--------

* Diverse group

* Impact tough to measure

* Currently in 2nd year

* DevOps Daycamp kickoff

===========  
Application
===========

======================
Identify your Audience
======================

.. note:: 

    Best target a group that an organizer remembers being in

    Identify their goals and resources

====================
Find your Supporters
====================

.. note:: 

    Community members, groups, businesses with an interest in achieving your
    goal

    * Hiring?

    * Formed for diversity? 

    * Academic institutions?

    Assess their resources and goals

===================
Goals and Resources
===================

.. note:: 

    Yours, Students', Supporters

=============    
Naming Things
=============    

.. note:: 

    Googleable

    Unique for the space

    Not A Jerk (puPHPet, vm building wizard)

    Pronounceable (consistently, at least... XKCD vs gif)

===================
Define Expectations
===================

https://www.recurse.com/manual

https://adainitiative.org/2014/02/howto-design-a-code-of-conduct-for-your-community/

.. note:: 

    CODE OF CONDUCT BEFORE YOU HAVE USERS

    Somebody will hate your name (bootcamp thing)

    Best fix: "Here's how to make it better"

    Figure out how finances will work (make them SEP)

===============
Find your Users
===============

.. note:: 
    
    This is a good time to make sure they exist and want what you think

    Talk to some

    Ask them how they find out about programs, how much time they have, etc.

==================
Writing Curriculum
==================

.. note:: 

    Identify what they'll need to know; draw pictures

    Circular dependencies


================================
Break into Circular Dependencies
================================

.. note:: 

    Online docs will cross-link sections into a circle

    You can't do this in real time; where would they "click"?

    Best course: Minimum summary on first introduction ("link")

    Better docs later on

==================
Leverage Resources
==================

.. note:: 

    Volunteers from your supporting organizations -- what do they love? Teach?

    Times, places, sponsors for pizza?

=====================
Pick a Time and Place
=====================

.. note:: 

    Based on your target users' commitments and availability

    Bring food if it's at a mealtime -- understand special reqs

    Be careful not to exclude (ASSUMPTIONS: car, no kids?)

=========
Advertise
=========

.. note:: 

    Maybe some of this before picking time/place

    Back to when you identified your audience, how they find things to do

    User groups, meetups, posters IRL (engineering buildings, restaraunts near
    campus, meeting places  like kids' schools or places of worship?)

    Tell people to tell their friends; be clear about requirements


========
Practice
========

.. note:: 

    Write the slides, test the demos, fight the projector, check links

    Speaker can be volunteer or you


=====    
Teach
=====

.. note:: 

    First lesson give roadmap and reassurance

    Be clear on if it's ok to join partway through

    Keep it interactive, solicit feedback


======
Refine
======

.. note:: 

    Assess after every lesson, keep notes for later

    Meetings among organizers on regular basis help lots

    Review days will be needed

    Check expectations for time outside class


======    
Repeat
======

.. note::

    Every month or two, assess whether the work is sustainable for YOU
    
    Check in with supporters

    Constantly refine your checklists

====
Brag
====

.. note:: 

    Starting or working a lot on this kind of thing makes you An Expert

    Want job offers, consulting gigs? Brag lots. 

    Super humble? Brag anyway; find more supporters, find more routes to
    students

======    
Retire
======

.. note:: 

    I found this a burnout-prone job (also school)

    Don't keep going once it stops making you happy

    Don't keep going if you're becoming a curmudgeonly jerk

    Hand it off to someone newer and more enthusiastic

    * They benefit from leading it, too


==========    
Good Luck!    
==========

.. note:: Questions? Advice? 

.. slide:: 

    |
    |

    Emily Dunham

    edunham@edunham.net

    edunham on IRC, no Twitter

    talks.edunham.net/openwest2015/devops

    devopsbootcamp.osuosl.org

    devopsbootcamp@osuosl.org (organizers list)

