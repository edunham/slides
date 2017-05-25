% Servo Infrastructure

PDX Python
2017-05-25


# Contact

* talks.edunham.net/pdxpython2017
* @QEDunham
* pdxpython@edunham.net


# Tonight

* What's Rust, what's Servo?
* Life cycle of a Servo change
* The Python Code
* How you can help
* Q&A Throughout

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

# What's the Servo project?

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

# What's Servo?

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

# Any questions?

* What's Rust?
* What's Servo?

# Infrastructure Philosophy

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="rocketscience.png">
</div>

# PR Life Cycle

* Highfive
* Homu (Bors)
* Mach
* Buildbot

# Highfive greets the contributor

<div style="text-align: center; margin-top: 10px">
<img src="highfive-in-action.png">
</div>

# Alternatives to Highfive

* GitHub PR templates
* Configure new PR notifications
* Script your bot of choice
* https://github.com/facebook/mention-bot
* http://danger.systems/

# Travis kicks off tests

<div style="text-align: center; margin-top: 10px">
<img src="travis.png">
</div>

# Alternatives to Travis

* Your own Jenkins/Buildbot/in-house CI
* Paid options like CircleCI
* Appveyor for Windows
* GitLab pipelines

# Team member reviews the change

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="rplus.png">
</div>

# Homu tests the change

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="borsservo.png">
</div>

# Alternatives to Homu

* OpenStack's Zuul (more complex, fancier features)
* Roll your own

# Change waits in Homu's queue

<div style="text-align: center; margin-top: 10px">
<img src="homu-queue.png">
</div>


# Buildbot delegates the tests

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="http://buildbot.net/img/nut.png">
</div>

# Buildbot's waterfalls shows test status

<div style="text-align: center; margin-top: 10px">
<img src="servo-build-waterfall.png">
</div>

# Homu lands the change

<div style="text-align: center; margin-top: 10px">
<img src="homu-on-github.png">
</div>

# Buildbot later makes+publishes nightlies

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="linux-nightly.png">
</div>

# download.servo.org

<div style="text-align: center; margin-top: 10px">
<img src="dl-dot-servo.png">
</div>

# Any questions?

* Highfive greets the contributor
* Travis tests all the things
* Servo person reviews the change
* Homu (@bors-servo) lands the change upon r+
* Buildbot builds things

# The Infrastructure

<div style="text-align: center; margin-top: 10px">
<img src="http://python.net/~goodger/projects/graphics/python/newlogo-repro.png">
</div>

# Highfive

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="servo-highfive-python.png">
</div>

# Contribute to Highfive!

* Rust Highfive != Servo Highfive :(
* Small codebase, good practices
* Python 2.7

# Homu

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="servo-homu-python.png">
</div>

# Contribute to Homu!

* Use the servo/homu fork
* Testing story is... scary bad
* Accidental home-grown state machine
* Regex!
* Sqlite!
* All python3!

# Buildbot

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="servo-buildbot-python.png">
</div>

# Contribute to our Buildbot!

* https://github.com/servo/saltfs/tree/master/buildbot
* Configs built with Python scripts
* Requires grokking Buildbot

# Upstream Buildbot

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="buildbot-dot-net.png">
</div>

# Maybe don't hack on upstream Buildbot

* http://trac.buildbot.net/wiki/Development
* Original authors moved on to https://docs.taskcluster.net/

# Python for nightly uploads

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="http://www.iperiusbackup.net/wp-content/uploads/2014/11/amazon-s3-logo-150x118.png">
</div>

* S3
* Somebody Else's Problem

# Mach runs Servo's tests

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="servo-mach-python.png">
</div>

# Contribute to our Mach?

* https://github.com/servo/servo/labels/A-mach

# Upstream Mach

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="moz-mach.png">
</div>

# Mach's Tree

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="mach-vcs.png">
</div>

# Contribute to upstream Mach?

* https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/mach
* Python 2.7, "Python 3 compliant"
* I hope you like Mercurial

# Mercurial...

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="legodude.jpg">
</div>

# Tidy (Rust linting in Python)

* https://github.com/servo/servo/tree/master/python/tidy
* Checks licenses
* These days, use Clippy or Rustfmt


# Servo's Salt Configs

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="servo-saltfs-python.png">
</div>

# Contribute to our Salt configs!

* https://github.com/servo/saltfs
* Good tests
* Infra practice
* Aneesh knows best practices & has high standards

# Upstream SaltStack

<div class="elide" style="text-align: center; margin-top: 10px">
<img src="salt-upstream.png">
</div>

# Contribute to upstream Salt?

* https://github.com/saltstack
* They're nice!

# Infra Questions?

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

* talks.edunham.net/pdxpython2017
* @QEDunham
* pdxpython@edunham.net
