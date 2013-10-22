================
Intermediate IRC
================
by edunham
10/22/2013


You already know:
=================

* Start an IRC client
* Connect to a network
* Join a channel
* Take actions
    * /me does things
* Have private message conversations
* Leave a channel or network

We'll talk about:
=================

* The IRC protocol
    * RFC 1459 & 2812
* Network Topology
    * What's a netsplit? 
    * How channels work across servers
* Using multiple networks
    * Switching context in irssi

We'll talk about:
=================

* Identity management (Freenode's NickServ)
    * Cloaks
    * Multiple nicks from one account
    * Getting your name back (ghost)
* Channel administration
    * Freenode's Chanserv
    * Private channels
    * Invite-only channels

We'll talk about:
=================

* Bots
    * Using others' bots
        * Hamper
        * Manatee
        * Bucket
        * GitHub
    * Writing your own

The IRC Protocol:
=================

* RFC 1459 & 2812
* Vocabulary
    * Network
    * Server
    * Client
    * Channel

Network Topology:
=================

to·pol·o·gy

təˈpäləjē/

2. the way in which constituent parts are interrelated or arranged.
"the topology of a computer network"

Network Topology:
=================

.. figure:: /_static/irc/example_network.gif
    :class: fill
    :scale: 75%

Netsplits:
==========

.. figure:: /_static/irc/example_netsplit.gif
    :class: fill
    :scale: 75%

Irssi: Multiple networks:
=========================

/connect irc.freenode.net

/connect cat.pdx.edu

alt+1 # go to status buffer

ctrl+x # switch contexts

/msg -freenode <person> <message>

/join -pdx <channel>

Q. Different nicks in different channels?

A. Multiple connections to same network.

Identity Management on Freenode:
================================

/msg nickserv help

/whois <person>

/mode <yourusername> +i 

* This prevents you from appearing in global WHO/WHOIS by normal users, and
  hides which channels you are on. It is enabled by default.

Channel Management:
===================

* Joining creates a channel
* /msg chanserv help 
* /topic & /topicappend

Flags: 
======

* /msg chanserv help flags
* All but +b are nice
* +* for co-owners

Etiquette:
==========

* Don't ask to ask
    * Lure help out of hiding with details of your problem
* Follow channel rules
    * /topic
* Use pastebins for code
* Some strangers don't like PMs

Mistakes:
=========

* Sending PM to channel
    * Compose in server buffer (typically #1)
* Misspelling a nick
    * Use tab-complete
* Wrong window
    * Be attentive, or patient if you have lag
* Accidental kick/ban
    * Use +*

Bots:
=====

"Services"


