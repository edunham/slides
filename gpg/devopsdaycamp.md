% GPG in the Real World 
% edunham 
% October 3, 2015

---

# Me 

> - "DevOps Engineer", Mozilla Reasearch 
> - Routinely need to share secret information with international colleagues
> - Still have to Google this stuff a lot.

<div class="notes">

    On a distributed DevOps team, securely communicating secret information is
    essential. GPG keys have two primary uses: Signing files to verify the
    identity of the person or machine who created them, and encrypting
    communication so that files can only be decrypted by their intended 
    recipient.  Although it sounds simple, GPG's implementations are notorious 
    for being difficult to use and understand. 

</div>


---

# You

> - Heard of GPG?
> - Been to a key signing party?
> - Have a keybase.io account?
> - Feel like you understand these tools?

<div class="notes">

    This talk will refresh your memory about GPG without delving too deeply into
    the underlying mathematics, then focus mainly on common practical applications
    beyond the scope of your average key-signing party: 

    * Best practices for keeping your keys safe, without losing them
    * Revoking compromised keys (and ensuring that you don't trust any key that
      has been compromised)
    * Sharing the use of a signing key between team members
    * And more!

</div>

---

# What's GPG? 

<section>

# OpenPGP

- RFC4880

<div class="notes">

    OpenPGP is the "proposed standard" implemented by both PGP and GPG

    standard, not a program

    https://tools.ietf.org/html/rfc4880

</div>

# PGP

- OpenPGP-compatible

Zimmermann, Philip (1995). PGP Source Code and
Internals. MIT Press. ISBN 0-262-24039-4.

<div class="notes">

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

</div>


# GnuPG

- OpenPGP-compatible

- No proprietary algorithms

<div class="notes">

    # GnuPG

    GPG is a software package that's also compliant with the OpenPGP standard, but
    doesn't use any patented or non-free algorithms. (PGP uses IDEA, whose
    patent expired in 2012)

</div>

</section>

---

# "Best" Practices
 
<section>

---

!["Vankahvalti" by Tanyel - Own work. Licensed under CC BY-SA 3.0 via Commons
- https://commons.wikimedia.org/wiki/File:Vankahvalti.jpg#/media/File:Vankahvalti.jpg](pics/breakfast.jpg)

---

## 3-5 years

- RSA-2048 lasts till ~2030 (https://www.gnupg.org/faq/gnupg-faq.html)

---

## Threat model

- Mossad vs Not Mossad
- https://www.usenix.org/system/files/1401_08-12_mickens.pdf

---

## "Security Through Obscurity"

- If you could eavesdrop on everything, which messages would interest you
  most?

</section>

-------------------------------------------------------------------------------

# Anatomy of a GPG key

<div class="notes">

    * Public key
    * private key
    * ID
    * fingerprint

</div>

<section>

# Public Key

# Private Key

# Key ID

# Fingerprint


</section>

# Different kinds of keys

<section>

* RSA
* Elgamal
* DSA

---

## What's the best?

</section>

<div class="notes">

    See page 64 of http://csrc.nist.gov/publications/nistpubs/800-57/sp800-57_part1_rev3_general.pdf

    RSA: both encrypt and decrypt

    DSA: Signing only

    Elgamal: Encryption only

    This is why you have the RSA vs DSA/ElGamal choice

</div>

# Creating a Key

<section>

---

## Why?

---

## Choose your Passphrase

-- 

## Mark your Calendar

---

    $ gpg --gen-key

--- 

    Not enough random bytes available.  Please do some other work to give
    the OS a chance to collect more entropy!

---

</section>

# Expiration

<section>

    $ gpg --list-keys
    $ gpg --edit-key ABCD1234

---

    gpg> list

`usage: E` means "editing this key"

---

    gpg> expire
    gpg> 1y

--- 

## Maybe

    $ gpg --keyserver pgp.mit.edu --send-keys ABCD1234

</section>

# Revocation

<section>

---

    $ gpg -o revoke.asc --gen-revoke <key specifier>

--- 

    Please select the reason for the revocation:
      0 = No reason specified
      1 = Key has been compromised
      2 = Key is superseded
      3 = Key is no longer used
      Q = Cancel
    (Probably you want to select 1 here)

---

## Back up that cert.

---

</section>

# Signing

<div class="notes">

    Use PRIVATE key to create a code that can be VERIFIED by the public key

    compare to checksums

    signature proves that HOLDER OF PRIVATE KEY signed it

</div>


# Encryption

<div class="notes>

    Use pubkey to transform message into something indistinguishable from
    gibberish to anyone without the private key

</div>

# Decryption

<div class="notes">
    HOLDER OF PRIVATE KEY can reverse the transformation and get the message out
</div>


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
