% Servo Infrastructure

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="titleslide.png">
</div>

Behind the Scenes
E. Dunham, 10/01/2016, PyDX

# talks.edunham.net/pydx

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="intro-outro.png">
</div>

@QEDunham

pydx@edunham.net

# 40 minutes

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="outline.png">
</div>

. What's Rust, what's Servo?
. Life cycle of a change to Servo
. Look at the Python
. We'd ♥ your help
. Q & A

# What's Rust?

<div style="text-align: center; margin-top: 10px">
<img src="http://www.rust-lang.org/logos/rust-logo-256x256-blk.png">
</div>

# What's Rust?

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="rlo.png">
</div>


. Safe, concurrent, fast
. Systems programming
. Types, lifetimes, memory safety

# What's Servo?

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="servodotorg.png">
</div>

. https://github.com/servo/servo/wiki/Videos-and-presentations
. Highly parallel
. Safe

# Servo Doge

<div style="text-align: center; margin-top: 10px">
<img src="https://avatars1.githubusercontent.com/u/4368172?v=3&s=400">
</div>


# Architecture

<div style="text-align: center; margin-top: 10px">
<img src="https://github.com/mozilla/servo/wiki/tasks-sup.png">
</div>


# Further Reading

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="servo-further-reading.png">
</div>

. https://github.com/servo/servo/wiki/Design

# Infrastructure Philosophy

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="rocketscience.png">
</div>

Automatically maintain a repository of code that always passes all the tests.

# A Servo Change

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="lifecycle.png">
</div>

. Highfive
. Homu (aka Bors)
. Mach
. Nightly

# Greetings, human

<div style="text-align: center; margin-top: 10px">
<img src="highfive-in-action.png">
</div>

# Human reviews code

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="rplus.png">
</div>

@bors-servo r+

# Homu

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="borsservo.png">
</div>


. @bors-servo
. "Will the tests pass after merging this?"

# The Queue

<div style="text-align: center; margin-top: 10px">
<img src="homu-queue.png">
</div>

# Buildbot

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="http://buildbot.net/img/nut.png">
</div>

. Runs tests

# The Waterfall

<div style="text-align: center; margin-top: 10px">
<img src="servo-build-waterfall.png">
</div>

# Homu

. Reports test status

<div style="text-align: center; margin-top: 10px">
<img src="homu-on-github.png">
</div>

# Buildbot

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="linux-nightly.png">
</div>

. Makes nightly with the changes!

# download.servo.org

<div style="text-align: center; margin-top: 10px">
<img src="dl-dot-servo.png">
</div>

# The Python

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

# Mach

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="servo-mach-python.png">
</div>

# More on Mach

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="mach-vcs.png">
</div>

# Upstream Mach

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="moz-mach.png">
</div>

# Salt Configs

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="servo-saltfs-python.png">
</div>

# Upstream Salt

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="salt-upstream.png">
</div>

# Getting Started

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="starters.png">
</div>

# talks.edunham.net/pydx

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="intro-outro.png">
</div>


@QEDunham

pydx@edunham.net


