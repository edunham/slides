% Servo Infrastructure

Open Infrastructure Day
2017-03-02


# Contact

* talks.edunham.net/openinfra2017
* @QEDunham
* openinfraday@edunham.net


# 15 minutes

* What's Rust, what's Servo?
* Life cycle of a Servo change
* The Code
* How you can help

# What's Rust?

<div style="text-align: center; margin-top: 10px">
<img src="http://www.rust-lang.org/logos/rust-logo-256x256-blk.png">
</div>

# www.rust-lang.org

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="rlo.png">
</div>

# Design Goals

* Safe, concurrent, fast
* Systems programming, fewer footguns
* Hack Without Fear

# Rustaceans

* github.com/rust-lang/rust
* 27 @mozilla.com contributors
* 1528 non-mozilla.com contributors
* 2% of contributors, 15% of commits are @mozilla.com

# Community

"The Rust community seems to be populated entirely by human beings.  I have no
idea how this was done."

- http://scattered-thoughts.net/blog/2015/06/04/three-months-of-rust/

# Conduct

* "Please be kind and courteous."
* "Please keep unstructured critique to a minimum"
* Dedicated moderation team
* "We will exclude you from interaction if you insult, demean or harass anyone"

    - https://www.rust-lang.org/conduct.html

# Exclusion

"The Rust community gives me a particularly bad feeling. They're rather
tyrannical about enforcing their code of conduct. They even have a moderation
attack squad to go after anyone they deem to be an enemy!"

- https://developers.slashdot.org/comments.pl?sid=8652809&cid=51352141

# Other processes

* Weekly updates (This Week In Rust, etc)
* Mandatory RFCs for major changes
* Consistent PR review process
* Distributed team & public discussions

# What's Servo?

<div style="text-align: center; margin-top: 10px">
<img src="https://avatars1.githubusercontent.com/u/4368172?v=3&s=400">
</div>

* ~12 full-time engineers
* ~612 code contributors
* ~21k commits into servo/servo
* ~4% of contributors, ~25% of commits from @mozilla.com

# How?

* Put robots to work
* Rent others' expertise
* Value volunteers
* Leverage free stuff

# www.servo.org

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="servodotorg.png">
</div>


# Architecture

<div style="text-align: center; margin-top: 10px">
<img src="https://github.com/mozilla/servo/wiki/tasks-sup.png">
</div>


# Further Reading

https://github.com/servo/servo/wiki/Videos-and-presentations

https://github.com/servo/servo/wiki/Design

# Infrastructure Philosophy

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="rocketscience.png">
</div>

# PR Life Cycle

* Highfive
* Homu (Bors)
* Mach
* Buildbot

# Greetings, human

<div style="text-align: center; margin-top: 10px">
<img src="highfive-in-action.png">
</div>

# Travis kicks off tests

<div style="text-align: center; margin-top: 10px">
<img src="travis.png">
</div>

# Human reviews code

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="rplus.png">
</div>

# Homu

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="borsservo.png">
</div>

# The Queue

<div style="text-align: center; margin-top: 10px">
<img src="homu-queue.png">
</div>

# Buildbot

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="http://buildbot.net/img/nut.png">
</div>

# The Waterfall

<div style="text-align: center; margin-top: 10px">
<img src="servo-build-waterfall.png">
</div>

# Homu

<div style="text-align: center; margin-top: 10px">
<img src="homu-on-github.png">
</div>

# Buildbot

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="linux-nightly.png">
</div>

# download.servo.org

<div style="text-align: center; margin-top: 10px">
<img src="dl-dot-servo.png">
</div>

# The Infrastructure

<div style="text-align: center; margin-top: 10px">
<img src="http://python.net/~goodger/projects/graphics/python/newlogo-repro.png">
</div>

# Highfive

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="servo-highfive-python.png">
</div>

# Homu

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="servo-homu-python.png">
</div>

# Buildbot

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="servo-buildbot-python.png">
</div>

# Upstream Buildbot

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="buildbot-dot-net.png">
</div>

# S3

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="http://www.iperiusbackup.net/wp-content/uploads/2014/11/amazon-s3-logo-150x118.png">
</div>


* Artifact storage as Someone Else's Problem


# Mach

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="servo-mach-python.png">
</div>

# Upstream Mach

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="moz-mach.png">
</div>

# Mach's Tree

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="mach-vcs.png">
</div>


# Salt Configs

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="servo-saltfs-python.png">
</div>

# Upstream Salt

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="salt-upstream.png">
</div>

# Questions?

* Highfive
* Homu
* BuildBot
* Mach
* SaltStack

# Getting Started with Rust

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="rust-resources.png">
</div>

# Getting Started with Servo

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="starters.png">
</div>

# Thank you!

* talks.edunham.net/openinfra2017
* @QEDunham

