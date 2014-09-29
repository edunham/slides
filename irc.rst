================
Intermediate IRC
================
by edunham

10/22/2013

.. note:: also include /msg memoserv help send
         also include etiquette -- don't assume gender, don't asktoask
         also /ns vs /msg nickserv@services vs /msg nickserv when splitty
         in the "do not list on freenode", we have /msg alis help list
         alis is a lady protagonist from a book; freenode-specific services

You already know
================

* Start an IRC client
* Connect to a network
* Join a channel
* Take actions
    * /me does things
* Have private message conversations
* Leave a channel (``\part``) or network (``disconnect``)

We'll talk about
================

* The IRC protocol
* Network Topology
* Using multiple networks
* Bots
  * Freenode's services (alis, memoserv, nickserv)
* Identity management (NickServ)
* Channel administration

The IRC Protocol
================

* RFC 1459 in 1993 & 2812 in 2000
* Vocabulary
    * Network
    * Server
    * Client
    * Channel

Network Topology
================

to·pol·o·gy

təˈpäləjē/

.. figure:: /_static/irc/topo_map.jpg
    :scale: 50%
    :align: center

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

Multiple Networks
=================

.. figure:: /_static/irc/multiple_networks.gif
    :scale: 70%

Irssi: Multiple networks
========================

.. code-block::
    /connect irc.freenode.net
    /connect cat.pdx.edu
    alt+1 # go to status buffer
    ctrl+x # switch contexts
    /msg -freenode <person> <message>
    /join -pdx <channel>

Q. Different nicks in different channels?

A. Multiple connections to same network.

Bots...
=======

* "Services"
* Client automated to perform some behaviors
* Any level of complexity you want

...can be this easy
===================

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

GitHub Integration
==================

.. figure:: /_static/irc/github.jpg
   :align: center

GitHub can join your channel and notify you that something happened. 

Settings -> service hooks -> IRC

Remember to check 'active'!

::

 [13:58]       --> | GitHub66 [~GitHub66@192.30.252.51] has joined #edunham
 [13:58] GitHub66- | (#edunham) [slides] edunham pushed 1 new commit to master: 
           https://github.com/edunham/slides/commit/332a5e983267f503faa054abe7798f1a557b5254
 [13:58] GitHub66- | (#edunham) slides/master 332a5e9 edunham: remember to activate the github bot
 [13:58]       <-- | GitHub66 [~GitHub66@192.30.252.51] has left #edunham

Write your own!
===============

* Common first project for a new language
* Practice with databases, sockets/networking, UI, machine learning
* any API -> bot functionality
* Machine learning is easier than it looks
    * Markov chains
    * NLTK

Other Useful Bots
=================

* Bouncers
    * Remember, a bot is just an automated client

Freenode's Services:

* NickServ
* ChanServ
* alis
* MemoServ

/ns vs /msg nickserv
====================




Identity Management on Freenode
===============================

::

 12:39 -NickServ- ***** NickServ Help *****
 12:39 -NickServ- NickServ allows users to 'register' a nickname, and stop
 12:39 -NickServ- others from using that nick. NickServ allows the owner of a
 12:39 -NickServ- nickname to disconnect a user from the network that is using
 12:39 -NickServ- their nickname.
 12:39 -NickServ-  
 12:39 -NickServ- For more information on a command, type:
 12:39 -NickServ- /msg NickServ help <command>
 12:39 -NickServ- For a verbose listing of all commands, type:
 12:39 -NickServ- /msg NickServ help commands
 12:39 -NickServ-  
 12:39 -NickServ- The following commands are available:
 12:39 -NickServ- GHOST           Reclaims use of a nickname.
 12:39 -NickServ- IDENTIFY        Identifies to services for a nickname.
 12:39 -NickServ- INFO            Displays information on registrations.
 12:39 -NickServ- LISTCHANS       Lists channels that you have access to.
 12:39 -NickServ- REGISTER        Registers a nickname.
 12:39 -NickServ- RELEASE         Releases a services enforcer.
 12:39 -NickServ-  
 12:39 -NickServ- Other commands: ACC, ACCESS, CERT, DROP, HELP, LOGOUT, 
 12:39 -NickServ-                 REGAIN, SETPASS, STATUS, TAXONOMY, VERIFY
 12:39 -NickServ- ***** End of Help *****
 

/whois <person>

/mode <yourusername> +i 

* Prevents you from appearing in global WHO/WHOIS by normal users, and
  hides which channels you are on. 

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
    * Public channels are often logged publiclyi
* Asking for too much information crashes client
    * Don't `/list` on freenode

Channel Management
==================
::
 
 12:44 -ChanServ- ***** ChanServ Help *****
 12:44 -ChanServ- ChanServ gives normal users the ability to maintain control
 12:44 -ChanServ- of a channel, without the need of a bot. Channel takeovers are
 12:44 -ChanServ- virtually impossible when a channel is registered with ChanServ.
 12:44 -ChanServ- Registration is a quick and painless process. Once registered,
 12:44 -ChanServ- the founder can maintain complete and total control over the channel.
 12:44 -ChanServ- Please note that channels will expire if there are no eligible channel successors.
 12:44 -ChanServ- Successors are primarily those who have the +R flag
 12:44 -ChanServ- set on their account in the channel, although other
 12:44 -ChanServ- people may be chosen depending on their access
 12:44 -ChanServ- level and activity.
 12:44 -ChanServ-  
 12:44 -ChanServ- For more information on a command, type:
 12:44 -ChanServ- /msg ChanServ help <command>
 12:44 -ChanServ- For a verbose listing of all commands, type:
 12:44 -ChanServ- /msg ChanServ help commands
 12:44 -ChanServ-  
 12:44 -ChanServ- The following commands are available:
 12:44 -ChanServ- FLAGS           Manipulates specific permissions on a channel.
 12:44 -ChanServ- INVITE          Invites you to a channel.
 12:44 -ChanServ- OP              Gives channel ops to a user.
 12:44 -ChanServ- RECOVER         Regain control of your channel.
 12:44 -ChanServ- SET             Sets various control flags.
 12:44 -ChanServ-  
 12:44 -ChanServ- Other commands: ACCESS, AKICK, CLEAR, COUNT, DEOP, DEVOICE, 
 12:44 -ChanServ-                 DROP, GETKEY, HELP, INFO, STATUS, SYNC, 
 12:44 -ChanServ-                 TAXONOMY, TEMPLATE, TOPIC, TOPICAPPEND, 
 12:44 -ChanServ-                 TOPICPREPEND, VOICE, WHY
 12:44 -ChanServ- ***** End of Help *****
 
* Joining creates a channel
* /topic & /topicappend

Flags 
=====
::
 
 12:46 -ChanServ- Syntax: FLAGS <#channel> [nickname|hostmask|group template]
 12:46 -ChanServ- Syntax: FLAGS <#channel> [nickname|hostmask|group flag_changes]
 12:46 -ChanServ-  
 12:46 -ChanServ- Permissions:
 12:46 -ChanServ-     +v - Enables use of the voice/devoice commands.
 12:46 -ChanServ-     +V - Enables automatic voice.
 12:46 -ChanServ-     +o - Enables use of the op/deop commands.
 12:46 -ChanServ-     +O - Enables automatic op.
 12:46 -ChanServ-     +s - Enables use of the set command.
 12:46 -ChanServ-     +i - Enables use of the invite and getkey commands.
 12:46 -ChanServ-     +r - Enables use of the unban command.
 12:46 -ChanServ-     +R - Enables use of the recover and clear commands.
 12:46 -ChanServ-     +f - Enables modification of channel access lists.
 12:46 -ChanServ-     +t - Enables use of the topic and topicappend commands.
 12:46 -ChanServ-     +A - Enables viewing of channel access lists.
 12:46 -ChanServ-     +S - Marks the user as a successor.
 12:46 -ChanServ-     +F - Grants full founder access.
 12:46 -ChanServ-     +b - Enables automatic kickban.
 12:46 -ChanServ-  
 12:46 -ChanServ- The special permission +* adds all permissions except +b, +S, and +F.
 12:46 -ChanServ- The special permission -* removes all permissions including +b and +F.
 12:46 -ChanServ-  
 12:46 -ChanServ- Examples:
 12:46 -ChanServ-     /msg ChanServ FLAGS #foo
 12:46 -ChanServ-     /msg ChanServ FLAGS #foo foo!*@bar.com VOP
 12:46 -ChanServ-     /msg ChanServ FLAGS #foo foo!*@bar.com -V+oO
 12:46 -ChanServ-     /msg ChanServ FLAGS #foo foo!*@bar.com -*
 12:46 -ChanServ-     /msg ChanServ FLAGS #foo foo +oOtsi
 12:46 -ChanServ-     /msg ChanServ FLAGS #foo TroubleUser!*@*.troubleisp.net +b
 12:46 -ChanServ-     /msg ChanServ FLAGS #foo !baz +*
 12:46 -ChanServ- ***** End of Help *****
 
Private Channels
================

::
 
 [11:06] - ChanServ-  ***** ChanServ Help *****
 [11:06] - ChanServ-  Help for SET:
 [11:06] - ChanServ-   
 [11:06] - ChanServ-  SET allows you to set various control flags
 [11:06] - ChanServ-  for channels that change the way certain
 [11:06] - ChanServ-  operations are performed on them.
 [11:06] - ChanServ-   
 [11:06] - ChanServ-  The following subcommands are available:
 [11:06] - ChanServ-  EMAIL     Sets the channel e-mail address.
 [11:06] - ChanServ-  ENTRYMSG  Sets the channel's entry message.
 [11:06] - ChanServ-  FOUNDER   Transfers foundership of a channel.
 [11:06] - ChanServ-  GUARD     Sets whether or not services will inhabit the channel.
 [11:06] - ChanServ-  KEEPTOPIC    Enables topic retention.
 [11:06] - ChanServ-  MLOCK     Sets channel mode lock.
 [11:06] - ChanServ-  NOSYNC    Disables automatic channel ACL syncing.
 [11:06] - ChanServ-  PRIVATE   Hides information about a channel.
 [11:06] - ChanServ-  PROPERTY  Manipulates channel metadata.
 [11:06] - ChanServ-  RESTRICTED   Restricts access to the channel to users on the access list. 
     (Other users are kickbanned.)
 [11:06] - ChanServ-  SECURE    Prevents unauthorized users from gaining operator status.
 [11:06] - ChanServ-  TOPICLOCK    Restricts who can change the topic.
 [11:06] - ChanServ-  URL    Sets the channel URL.
 [11:06] - ChanServ-  VERBOSE   Notifies channel about access list modifications.
 [11:06] - ChanServ-   
 [11:06] - ChanServ-  For more specific help use /msg ChanServ HELP SET command.
 [11:06] - ChanServ-  ***** End of Help *****

/msg chanserv list #channel


What next?
==========

* Go forth and participate!
* Set up a toy IRC server
* Write a bot 
