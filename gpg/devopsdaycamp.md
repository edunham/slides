% GPG in the Real World 
% edunham 
% October 3, 2015

# GPG in the Real World

On a distributed DevOps team, securely communicating secret information is
essential. GPG keys have two primary uses: Signing files to verify the
identity of the person or machine who created them, and encrypting
communication so that files can only be decrypted by their intended recipient.
Although it sounds simple, GPG's implementations are notorious for being
difficult to use and understand. 

---

#

This talk will refresh your memory about GPG without delving too deeply into
the underlying mathematics, then focus mainly on common practical applications
beyond the scope of your average key-signing party: 

---

#

* Best practices for keeping your keys safe, without losing them
* Revoking compromised keys (and ensuring that you don't trust any key that
  has been compromised)
* Sharing the use of a signing key between team members
* And more!

---

# What's GPG? 

## Abbreviation Disambiguation

OpenPGP is the "proposed standard" implemented by both PGP and GPG

https://tools.ietf.org/html/rfc4880

# PGP

A specific data encryption and decryption program, authored by Phil Zimmerman
and originally released in 1991, for singing and encrypting/decrypting files.

Originally meant to develop a "decentralized, fault-tolerant" web of trust,
now supports "trust signatures" to allow creation of certificate authorities

Source was published as Zimmermann, Philip (1995). PGP Source Code and
Internals. MIT Press. ISBN 0-262-24039-4. -- you could scan the book, OCR it,
and have PGP, because book export is legal under 1st amendment

https://en.wikipedia.org/wiki/Bernstein_v._United_States and
https://en.wikipedia.org/wiki/Junger_v._Daley have ruled that source code to
encryption software is "speech"

# GnuPG

GPG is a software package that's also compliant with the OpenPGP standard, but
doesn't use any patented or non-free algorithms. (PGP uses IDEA, whose
patent expired in 2012)


# Disclaimer

GPG is part of a healthy security diet. 

* Mossad vs Not Mossad
* Assume all encryption will break in 3-5 years
* RSA-2048 is expected to hold till 2030 or so, according to https://www.gnupg.org/faq/gnupg-faq.html

* Threat models
  * Opportunists
        * full-disk encryption
        * careful backups
  * Jerks
        * identify adversaries' goals + knowledge + resources
        * keyloggers, network monitoring... go to Pono's talk
* encrypting only certain messages makes them MORE interesting to an eavesdropper

# Anatomy of a GPG/PGP key

* Public key
* private key
* ID
* fingerprint

# Different kinds of keys

A key is still basically some magic numbers. There are different ways to get
these numbers. 

* RSA
* Elgamal
* DSA

# How Signing Works

Use PRIVATE key to create a code that can be VERIFIED by the public key

compare to checksums

signature proves that HOLDER OF PRIVATE KEY signed it

# How Encryption Works

Use pubkey to transform message into something indistinguishable from
gibberish to anyone without the private key

HOLDER OF PRIVATE KEY can reverse the transformation and get the message out

# Recap

Signing tells you something about where a message came from, encryption tells
you something about who can read a message. 

# Common Mistakes

* Failing to set an expiration date (you can always extend it! always!)
* Failing to make revocation certs
* Losing passphrases
* Messing up backups

# Making your key

TODO


# Managing your keys

* Correct permissions -- no rwx for group or other, and chown to you:you
* This means you can miss your keys in a backup of the entire filesystem
* Back up your keys and TEST YOUR BACKUPS. To be really secure, put them on
  redundant media in case one fails (ie 2 USB sticks from the career fair) and
  store them somewhere physically safe (ie a relative's family keepsake or
  lockbox)
* Back up your PASSPHRASE as well. This is easier if you choose a passphrase
  that's extremely memorable to you but relatively meaningless to others --
  emotionally charged events from middle school / high school are good for
  this, or in-jokes you shared with less-technical friends, or song lyrics you
  embarrassingly mis-heard, etc.  If there's an image that will jog your
  memory of the passphrase, store it with your backups. Or draw a picture on a
  piece of paper, or write down the nth letter of each word in the
  passphrase... the *act of making* the hint will make the passphrase more
  memorable to you. 
* Optionally set a Google alert on your key fingerprint, just to know where
  it's showing up
* Use full-disk encryption on your laptop



# 2mins about the Trustweb

(getting someone's key, internet utopia edition)

If I trust Alice, and Alice trust Bob, and Bob trusts Eve, then I trust Eve...
right?

Go to a keysigning party.

# keybase.io

* let's link peoples' GPG keys (mathematical proofs of identity) with their
  social media accounts (real-life trustweb)! 
* can be a very nice addendum, or a very bad one
    * Nice; use it from command line; additional verification of key
    * Nasty: What if you give keybase your private key and they get hacked?
* Bottom line: Still don't ever hand out your private keys, and personally
  confirm you have the right key with the human you're talking to.

# Getting someone's key, real life edition

Remember all the bits about how GPG only proves things about *whoever holds
the key*? We want to map "person holding key" onto "human in real life". 

Good: Use email. Send them your public key.
    * Think about the threat model.. if someone is already in your email
      account, you are probably some kind of screwed.
Better: use email and IRC/Slack/Hipchat. 
    * Threat model to email: Ernest intercepts my message to Brian, subs a key
      in and forwards it along, decrypts what Brian sends me then re-encrypts
      it with the key I originally sent. Very quickly. 
    * Now how much harder is it to do that on email and IRC/Slack/Hipchat
      synchronously and consistently? 1 compromised mail server no longer cuts
      it.
Best: use voice/video chat to confirm key fingerprint. 
    * Brian knows what I look/sound like because he interviewed me, and vice
      versa. Confirm identities (usually just by looking at the person +
      exchanging pleasantries) then read key fingerprint out loud.
    * Only way to sabotage this would be if one of us was a bad actor from the
      beginning, which is far outside the scope of GPG... or really, REALLY
      good fast 3D rendering + natural language processing + speech generation
      (basically strong AI)

Optimal: Exchange keys in meatspace. 
    * This would require not only strong AI but perfect robotics to intercept.
      Not gonna happen.

(let's all have a meeting together where Alice introduces me to Bob and Bob
introduces me to Eve and now I know Eve and social pleasantries have proven
that the introductions were real and not somebody hacking Bob's laptop. If
you're scared that the Mossad is pointing a gun at any of the participants,
you have gotten yourself into some deep shit that I am not qualified to advise
you on.)

# Subkeys!

* elgamal is encrypt-only, dsa is sign-only, rsa was patented for a long time

* If you make a subkey, you can sign stuff with it and someone who trusts your
  main key can figure out to trust the signature

* if someone encrypts stuff for your subkey, you can decrypt it with that
  subkey, but if they encrypt it for your main key, your subkey can't decrypt
  it (?)

# Secret Sharing Schemes!

* gfshare, ssss/ssss-combine (for passphrases)

* Mathematically force x of the y keyholders to get together to sign or
  decrypt a file

# What do we use GPG for?

# Signing packages

* Signing automation concerns
* Keyservers+revocation matter somewhat
* Keys are supposed to go to humans; should an org hold a key?
    * sign members' keys? But what about when Dylan the Disgruntled Departer
      quits with malice?
    * subkeys? But what about when everything's broken and only one person is
      awake?
* How not to lose keys (sane backups)

# Sharing secrets

* Key management concerns
* Proper treatment of decrypted information
