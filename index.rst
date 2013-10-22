================
Intermediate IRC
================
by edunham
10/22/2013


You already know
================

* Start an IRC client
* Connect to a network
* Join a channel
* Take actions
    * /me does things
* Have private message conversations
* Leave a channel or network

We'll talk about
================

* The IRC protocol
    * RFC 1459 & 2812
* Network Topology
    * What's a netsplit? 
    * How channels work across servers
* Using multiple networks
    * Switching context in irssi

We'll talk about
================

* Identity management (Freenode's NickServ)
    * Cloaks
    * Multiple nicks from one account
    * Getting your name back (ghost)
* Channel administration
    * Freenode's Chanserv
    * Private channels
    * Invite-only channels

We'll talk about
================

* Bots
    * Using others' bots
        * Hamper
        * Manatee
        * GitHub
    * Writing your own

The IRC Protocol
================

* RFC 1459 & 2812
* Vocabulary
    * Network
    * Server
    * Client
    * Channel

Network Topology
================

to·pol·o·gy

təˈpäləjē/

2. the way in which constituent parts are interrelated or arranged.
"the topology of a computer network"

Network Topology
================

.. figure:: /_static/irc/example_network.gif
    :class: fill
    :scale: 75%

Netsplits
=========

.. figure:: /_static/irc/example_netsplit.gif
    :class: fill
    :scale: 75%

Irssi: Multiple networks
========================

/connect irc.freenode.net

/connect cat.pdx.edu

alt+1 # go to status buffer

ctrl+x # switch contexts

/msg -freenode <person> <message>

/join -pdx <channel>

Q. Different nicks in different channels?

A. Multiple connections to same network.

Identity Management on Freenode
===============================
::

 12:39 -NickServ(NickServ@services.)- ***** NickServ Help *****
 12:39 -NickServ(NickServ@services.)- NickServ allows users to 'register' a nickname, and stop
 12:39 -NickServ(NickServ@services.)- others from using that nick. NickServ allows the owner of a
 12:39 -NickServ(NickServ@services.)- nickname to disconnect a user from the network that is using
 12:39 -NickServ(NickServ@services.)- their nickname.
 12:39 -NickServ(NickServ@services.)-  
 12:39 -NickServ(NickServ@services.)- For more information on a command, type:
 12:39 -NickServ(NickServ@services.)- /msg NickServ help <command>
 12:39 -NickServ(NickServ@services.)- For a verbose listing of all commands, type:
 12:39 -NickServ(NickServ@services.)- /msg NickServ help commands
 12:39 -NickServ(NickServ@services.)-  
 12:39 -NickServ(NickServ@services.)- The following commands are available:
 12:39 -NickServ(NickServ@services.)- GHOST           Reclaims use of a nickname.
 12:39 -NickServ(NickServ@services.)- IDENTIFY        Identifies to services for a nickname.
 12:39 -NickServ(NickServ@services.)- INFO            Displays information on registrations.
 12:39 -NickServ(NickServ@services.)- LISTCHANS       Lists channels that you have access to.
 12:39 -NickServ(NickServ@services.)- REGISTER        Registers a nickname.
 12:39 -NickServ(NickServ@services.)- RELEASE         Releases a services enforcer.
 12:39 -NickServ(NickServ@services.)-  
 12:39 -NickServ(NickServ@services.)- Other commands: ACC, ACCESS, CERT, DROP, HELP, LOGOUT, 
 12:39 -NickServ(NickServ@services.)-                 REGAIN, SETPASS, STATUS, TAXONOMY, VERIFY
 12:39 -NickServ(NickServ@services.)- ***** End of Help *****
 

/whois <person>

/mode <yourusername> +i 

* Prevents you from appearing in global WHO/WHOIS by normal users, and
  hides which channels you are on. Enabled by default.

Channel Management
==================
::
 
 12:44 -ChanServ(ChanServ@services.)- ***** ChanServ Help *****
 12:44 -ChanServ(ChanServ@services.)- ChanServ gives normal users the ability to maintain control
 12:44 -ChanServ(ChanServ@services.)- of a channel, without the need of a bot. Channel takeovers are
 12:44 -ChanServ(ChanServ@services.)- virtually impossible when a channel is registered with ChanServ.
 12:44 -ChanServ(ChanServ@services.)- Registration is a quick and painless process. Once registered,
 12:44 -ChanServ(ChanServ@services.)- the founder can maintain complete and total control over the channel.
 12:44 -ChanServ(ChanServ@services.)- Please note that channels will expire if there are no eligible channel successors.
 12:44 -ChanServ(ChanServ@services.)- Successors are primarily those who have the +R flag
 12:44 -ChanServ(ChanServ@services.)- set on their account in the channel, although other
 12:44 -ChanServ(ChanServ@services.)- people may be chosen depending on their access
 12:44 -ChanServ(ChanServ@services.)- level and activity.
 12:44 -ChanServ(ChanServ@services.)-  
 12:44 -ChanServ(ChanServ@services.)- For more information on a command, type:
 12:44 -ChanServ(ChanServ@services.)- /msg ChanServ help <command>
 12:44 -ChanServ(ChanServ@services.)- For a verbose listing of all commands, type:
 12:44 -ChanServ(ChanServ@services.)- /msg ChanServ help commands
 12:44 -ChanServ(ChanServ@services.)-  
 12:44 -ChanServ(ChanServ@services.)- The following commands are available:
 12:44 -ChanServ(ChanServ@services.)- FLAGS           Manipulates specific permissions on a channel.
 12:44 -ChanServ(ChanServ@services.)- INVITE          Invites you to a channel.
 12:44 -ChanServ(ChanServ@services.)- OP              Gives channel ops to a user.
 12:44 -ChanServ(ChanServ@services.)- RECOVER         Regain control of your channel.
 12:44 -ChanServ(ChanServ@services.)- SET             Sets various control flags.
 12:44 -ChanServ(ChanServ@services.)-  
 12:44 -ChanServ(ChanServ@services.)- Other commands: ACCESS, AKICK, CLEAR, COUNT, DEOP, DEVOICE, 
 12:44 -ChanServ(ChanServ@services.)-                 DROP, GETKEY, HELP, INFO, STATUS, SYNC, 
 12:44 -ChanServ(ChanServ@services.)-                 TAXONOMY, TEMPLATE, TOPIC, TOPICAPPEND, 
 12:44 -ChanServ(ChanServ@services.)-                 TOPICPREPEND, VOICE, WHY
 12:44 -ChanServ(ChanServ@services.)- ***** End of Help *****
 
* Joining creates a channel
* /topic & /topicappend

Flags 
=====
::
 
 12:46 -ChanServ(ChanServ@services.)- Syntax: FLAGS <#channel> [nickname|hostmask|group template]
 12:46 -ChanServ(ChanServ@services.)- Syntax: FLAGS <#channel> [nickname|hostmask|group flag_changes]
 12:46 -ChanServ(ChanServ@services.)-  
 12:46 -ChanServ(ChanServ@services.)- Permissions:
 12:46 -ChanServ(ChanServ@services.)-     +v - Enables use of the voice/devoice commands.
 12:46 -ChanServ(ChanServ@services.)-     +V - Enables automatic voice.
 12:46 -ChanServ(ChanServ@services.)-     +o - Enables use of the op/deop commands.
 12:46 -ChanServ(ChanServ@services.)-     +O - Enables automatic op.
 12:46 -ChanServ(ChanServ@services.)-     +s - Enables use of the set command.
 12:46 -ChanServ(ChanServ@services.)-     +i - Enables use of the invite and getkey commands.
 12:46 -ChanServ(ChanServ@services.)-     +r - Enables use of the unban command.
 12:46 -ChanServ(ChanServ@services.)-     +R - Enables use of the recover and clear commands.
 12:46 -ChanServ(ChanServ@services.)-     +f - Enables modification of channel access lists.
 12:46 -ChanServ(ChanServ@services.)-     +t - Enables use of the topic and topicappend commands.
 12:46 -ChanServ(ChanServ@services.)-     +A - Enables viewing of channel access lists.
 12:46 -ChanServ(ChanServ@services.)-     +S - Marks the user as a successor.
 12:46 -ChanServ(ChanServ@services.)-     +F - Grants full founder access.
 12:46 -ChanServ(ChanServ@services.)-     +b - Enables automatic kickban.
 12:46 -ChanServ(ChanServ@services.)-  
 12:46 -ChanServ(ChanServ@services.)- The special permission +* adds all permissions except +b, +S, and +F.
 12:46 -ChanServ(ChanServ@services.)- The special permission -* removes all permissions including +b and +F.
 12:46 -ChanServ(ChanServ@services.)-  
 12:46 -ChanServ(ChanServ@services.)- Examples:
 12:46 -ChanServ(ChanServ@services.)-     /msg ChanServ FLAGS #foo
 12:46 -ChanServ(ChanServ@services.)-     /msg ChanServ FLAGS #foo foo!*@bar.com VOP
 12:46 -ChanServ(ChanServ@services.)-     /msg ChanServ FLAGS #foo foo!*@bar.com -V+oO
 12:46 -ChanServ(ChanServ@services.)-     /msg ChanServ FLAGS #foo foo!*@bar.com -*
 12:46 -ChanServ(ChanServ@services.)-     /msg ChanServ FLAGS #foo foo +oOtsi
 12:46 -ChanServ(ChanServ@services.)-     /msg ChanServ FLAGS #foo TroubleUser!*@*.troubleisp.net +b
 12:46 -ChanServ(ChanServ@services.)-     /msg ChanServ FLAGS #foo !baz +*
 12:46 -ChanServ(ChanServ@services.)- ***** End of Help *****
 

Etiquette
=========

* Don't ask to ask
    * Lure help out of hiding with details of your problem
* Follow channel rules
    * /topic
* Use pastebins for code
* Some strangers don't like PMs
* Choose your nick carefully

Mistakes
========

* Sending PM to channel
    * Compose in server buffer (typically #1)
* Misspelling a nick
    * Use tab-complete
* Wrong window
    * Be attentive, or patient if you have lag
* Accidental kick/ban
    * Use +*
* Regrettable remarks
    * Public channels are often logged publicly

Bots
====

* "Services"
* Client automated to perform some behaviors
* Any level of complexity you want

Bots
====

From http://oreilly.com/pub/h/1968::

 import sys
 import socket
 import string
 
 HOST="irc.freenode.net"
 PORT=6667
 NICK="MauBot"
 IDENT="maubot"
 REALNAME="MauritsBot"
 readbuffer=""
 
 s=socket.socket( )
 s.connect((HOST, PORT))
 s.send("NICK %s\r\n" % NICK)
 s.send("USER %s %s bla :%s\r\n" % (IDENT, HOST, REALNAME))
 
 while 1:
     readbuffer=readbuffer+s.recv(1024)
     temp=string.split(readbuffer, "\n")
     readbuffer=temp.pop( )
 
     for line in temp:
         line=string.rstrip(line)
         line=string.split(line)
 
         if(line[0]=="PING"):
             s.send("PONG %s\r\n" % line[1])

Hamper
======

https://github.com/mythmon/hamper

from friendly.py::
 import random
 import re
 from datetime import datetime
 
 from hamper.interfaces import ChatPlugin
 
 
 class Friendly(ChatPlugin):
     """Be polite. When people say hello, response."""
 
     name = 'friendly'
     priority = 2
 
     def setup(self, factory):
         self.greetings = ['hi', 'hello', 'hey', 'sup', 'yo', 'hola', 'ping', 'pong']
 
     def message(self, bot, comm):
         if not comm['directed']:
             return
 
         if comm['message'].strip() in self.greetings:
             bot.reply(comm, '{0} {1[user]}'
                 .format(random.choice(self.greetings), comm))
             return True


Manatee
=======

https://github.com/marineam/hackabot

Mostly an OSL thing; not recommended for personal projects

::
 
 #!/usr/bin/perl -w
 
 ##HACKABOT_HELP##
 # Get the url of a wikipedia article
 # !wikipedia some article
 ##HACKABOT_HELP##
 
 use strict;
 use URI::Escape;
 use Hackabot::Client;
 
 my $hbc = Hackabot::Client->new;
 my $search = $hbc->readline;
 my $asker = $hbc->sent_by;
 
 if ($search) {
     $search = uri_escape($search);
     my $google = `lynx --head --dump
 "http://en.wikipedia.org/wiki/Special:Search?search=$search\&go=Go"`;
     my $url;
     foreach(split(/\n/,$google)) {
         if (/^Location:\s*(.+)/) {
             $url = $1;
         }
     }
     if (defined $url) {
         print "send $asker: Wikipedia says $url\n";
     }
     else {
         print "send $asker: Wikipedia didn't say much :-/\n";
     }
 }

GitHub
======

.. figure:: /_static/irc/github.jpg
   :align: center

GitHub can join your channel and notify you that something happened. 

Settings -> service hooks -> IRC
 
Markov Chains
=============

 
