
Intermediate IRC
================
by edunham, 10/22/2013


You already know:
=================

* Start an IRC client
* Connect to a network
* Join a channel
* Take actions
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

* Identity management
    * Cloaks
    * Multiple nicks from one account
    * Getting your name back (ghost)
    * Freenode's NickServ
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

Network Topology:
=================

to·pol·o·gy

təˈpäləjē/

1. Mathematics: the study of geometric properties and spatial relations
unaffected by the continuous change of shape or size of figures. a family of
open subsets of an abstract space such that the union and the intersection of
any two of them are members of the family, and that includes the space itself
and the empty set.

plural noun: topologies

2. the way in which constituent parts are interrelated or arranged.
"the topology of a computer network"

Network Topology:
=================

.. figure:: /_static/irc/well_connected_topo.gif

Netsplits:
==========


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

Bots:
=====

"Services"


