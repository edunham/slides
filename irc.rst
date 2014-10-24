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

.. note:: you know not to /list, right?

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

.. note:: 

    it's a bunch of servers

    servers have CHANNELS on them

    servers have PERMISSIONS and PORTS and ACCESS LISTS and stuff

    channels have PERMISIONS and FLAGS and stuff

Netsplits
=========

.. figure:: /_static/irc/example_netsplit.gif
    :class: fill
    :scale: 75% 

.. note:: 

    the CHANNEL exists on both sides

Multiple Networks
=================

.. figure:: /_static/irc/multiple_networks.gif
    :scale: 60%

Irssi: Multiple networks
========================

.. code-block::

    /connect irc.freenode.net
    /connect cat.pdx.edu
    alt+1 # go to status buffer
    ctrl+x # switch contexts
    /msg -freenode <person> <message>
    /join -pdx <channel>

Different nicks in different channels?

Bots...
=======

.. figure:: /_static/irc/musicrobots.jpg
    :class: fill
    

.. note:: 
    * "Services"
    * Client automated to perform some behaviors
    * Any level of complexity you want
    * Freenode bots have @services in their cloaks

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

.. figure:: /_static/irc/pen.jpg
    :class: fill

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

.. note:: the official services bots have @services in their cloaks
    
    if you're paranoid, /msg them for help first then check the cloak


ChanServ
========

::

     ***** ChanServ Help *****
     ...     
     The following commands are available:
     FLAGS           Manipulates specific permissions on a channel.
     INVITE          Invites you to a channel.
     OP              Gives channel ops to a user.
     RECOVER         Regain control of your channel.
     REGISTER        Registers a channel.
     SET             Sets various control flags.
     UNBAN           Unbans you on a channel.
      
     Other commands: ACCESS, AKICK, CLEAR, COUNT, DEOP, DEVOICE, 
                     DROP, GETKEY, HELP, INFO, QUIET, STATUS, 
                     SYNC, TAXONOMY, TEMPLATE, TOPIC, TOPICAPPEND, 
                     TOPICPREPEND, UNQUIET, VOICE, WHY
     ***** End of Help *****

.. note::

     ChanServ gives normal users the ability to maintain control
     of a channel, without the need of a bot. Channel takeovers are
     virtually impossible when a channel is registered with ChanServ.
     Registration is a quick and painless process. Once registered,
     the founder can maintain complete and total control over the channel.
     Please note that channels will expire if there are no eligible channel successors.
     Successors are primarily those who have the +R flag
     set on their account in the channel, although other
     people may be chosen depending on their access
     level and activity.

     For more information on a command, type:
     /msg ChanServ help <command>
     For a verbose listing of all commands, type:
     /msg ChanServ help commands
 

MemoServ
========

.. figure:: _static/irc/mailboxes.jpg
    :align: center 
    :scale: 50%

:: 

    ***** MemoServ Help *****
    MemoServ allows users to send memos to registered users.
    The following commands are available:
    DEL             Alias for DELETE
    DELETE          Deletes memos.
    FORWARD         Forwards a memo.
    HELP            Displays contextual help information.
    IGNORE          Ignores memos.
    LIST            Lists all of your memos.
    READ            Reads a memo.
    SEND            Sends a memo to a user.
    SENDOPS         Sends a memo to all ops on a channel.
    ***** End of Help *****

alis
====

.. figure:: /_static/irc/alice.png
    :align: center
    :scale: 50%

::

    /msg alis help <command>
     
    The following commands are available:

    HELP            Displays contextual help information.
    LIST            Lists channels matching given parameters.

Identity Management on Freenode
===============================

.. figure:: /_static/irc/identity.jpg
    :class: scale

NickServ
========

::

     ***** NickServ Help *****
     The following commands are available:
     GHOST           Reclaims use of a nickname.
     IDENTIFY        Identifies to services for a nickname.
     INFO            Displays information on registrations.
     LISTCHANS       Lists channels that you have access to.
     REGISTER        Registers a nickname.
     RELEASE         Releases a services enforcer.
     ***** End of Help *****
     /whois <person>
     /mode <yourusername> +i 


.. note::

     NickServ allows users to 'register' a nickname, and stop
     others from using that nick. NickServ allows the owner of a
     nickname to disconnect a user from the network that is using
     their nickname.
      
     For more information on a command, type:
     /msg NickServ help <command>
     For a verbose listing of all commands, type:
     /msg NickServ help commands

* Prevents you from appearing in global WHO/WHOIS by normal users, and
  hides which channels you are on (default on Freenode)

Etiquette
=========

.. figure:: /_static/irc/fancytable.jpg
    :align: center
    :scale: 40%

* Don't ask to ask
    * Lure help out of hiding with details of your problem
* Follow channel rules
    * /topic
* Use pastebins for code
* Some strangers don't like PMs
* Choose your nick carefully

Mistakes
========

.. figure:: /_static/irc/facepalm.jpg
    :align: right
    :scale: 50%

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

Client Configuration
====================

|

.. figure:: /_static/irc/irssiweechat.png
    :align: center

|

Irssi, Weechat, ZNC (bouncer), GUIs

Personal preference... I use Irssi


Neat Features
-------------

* hilight
* /lastlog
* alt+#
* ctrl+n, ctrl+p, alt+n, alt+p
* smartfilter or /ignore CRAP
* /ignore (or /silence if flooding)
* usermode +g == "callerid"
* moving windows (/window move # or /buffer move #)
* autolog

Buffers
-------

.. figure:: /_static/irc/buffering.gif
    :align: center

::

    /win #
    /buf #
    /b <name>
    /join #channel (if already connected)
    /window move

Connection Configuration
------------------------

.. figure:: /_static/irc/connection.jpg
    :align: center

:: 

    /connect -ssl
    sasl (cap_sasl.pl)

.. note::

    SSL = secure socket layer, tls = transport layer security
    sasl = simple authentication and security layer

Channel Management
==================

::
 
  ***** ChanServ Help *****
  The following commands are available:
  FLAGS           Manipulates specific permissions on a channel.
  INVITE          Invites you to a channel.
  OP              Gives channel ops to a user.
  RECOVER         Regain control of your channel.
  SET             Sets various control flags.
   
  Other commands: ACCESS, AKICK, CLEAR, COUNT, DEOP, DEVOICE, 
                  DROP, GETKEY, HELP, INFO, STATUS, SYNC, 
                  TAXONOMY, TEMPLATE, TOPIC, TOPICAPPEND, 
                  TOPICPREPEND, VOICE, WHY
  ***** End of Help *****
 
* Joining creates a channel
* /topic & /topicappend

Flags 
=====

::
 
  Syntax: FLAGS <#channel> [nickname|hostmask|group template]
  Syntax: FLAGS <#channel> [nickname|hostmask|group flag_changes]
      +v - Enables use of the voice/devoice commands.
      +V - Enables automatic voice.
      +o - Enables use of the op/deop commands.
      +O - Enables automatic op.
      +s - Enables use of the set command.
      +i - Enables use of the invite and getkey commands.
      +r - Enables use of the unban command.
      +R - Enables use of the recover and clear commands.
      +f - Enables modification of channel access lists.
      +t - Enables use of the topic and topicappend commands.
      +A - Enables viewing of channel access lists.
      +S - Marks the user as a successor.
      +F - Grants full founder access.
      +b - Enables automatic kickban.

Flags Examples
==============

::

  The special permission +* adds all permissions except +b, +S, and +F.
  The special permission -* removes all permissions including +b and +F.
   
  Examples:
      /msg ChanServ FLAGS #foo
      /msg ChanServ FLAGS #foo foo!*@bar.com VOP
      /msg ChanServ FLAGS #foo foo!*@bar.com -V+oO
      /msg ChanServ FLAGS #foo foo!*@bar.com -*
      /msg ChanServ FLAGS #foo foo +oOtsi
      /msg ChanServ FLAGS #foo TroubleUser!*@*.troubleisp.net +b
      /msg ChanServ FLAGS #foo !baz +*
  ***** End of Help *****
 
Private Channels
================

::
 
   ***** ChanServ Help *****
   Help for SET:
   
   The following subcommands are available:
   EMAIL     Sets the channel e-mail address.
   ENTRYMSG  Sets the channel's entry message.
   FOUNDER   Transfers foundership of a channel.
   GUARD     Sets whether or not services will inhabit the channel.
   KEEPTOPIC    Enables topic retention.
   MLOCK     Sets channel mode lock.
   NOSYNC    Disables automatic channel ACL syncing.
   PRIVATE   Hides information about a channel.
   PROPERTY  Manipulates channel metadata.
   RESTRICTED   Restricts access to the channel to users on the access list. 
     (Other users are kickbanned.)
   SECURE    Prevents unauthorized users from gaining operator status.
   TOPICLOCK    Restricts who can change the topic.
   URL    Sets the channel URL.
   VERBOSE   Notifies channel about access list modifications.
    
   For more specific help use /msg ChanServ HELP SET command.
   ***** End of Help *****


What next?
==========

* Go forth and participate!
* Set up a toy IRC server
* Write a bot 
