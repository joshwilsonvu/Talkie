# Talkie
A chatroom for talking about things.

![](/public/img/icon.png)

## About
Talkie is written by Josh Wilson for the final project of Vanderbilt University's Network Security
class, taught by Professor Zhenkai Zhang. It implements a fully functional, secure chatroom that 
operates in real time (and looks minimalistic and slick in doing so).

Talkie is currently deployed at [https://www.joshwilsonvu.com](https://www.joshwilsonvu.com).
All are welcome to create an account and post (but be nice, posts stay forever).

## Tech Stack
Talkie is built with [Node.js](https://nodejs.org/) using the [Express framework](https://expressjs.com/), 
[Socket.io](https://socket.io/), [React](https://reactjs.org/), [Redux](https://redux.js.org/), 
[Redis](https://redis.io/), and [PostgreSQL](https://www.postgresql.org/).

It is hosted on an [EC2](https://aws.amazon.com/ec2/) instance running in the Amazon cloud, 
only accessible by SSH with a private key.

## Security
Talkie includes the following security aspects:

### HTTPS and WSS
Talkie is certified by the free Let's Encrypt certificate authority. Using asymmetric cryptography,
Node.js and the browser encrypt all communication between connected client-server pairs, including 
transmitted passwords. This includes traditional HTTP requests and bidirectional Websocket messages.
 
### Authentication
Users may read Talkie posts without any authentication, but to write a post, a user must sign up for
or log into an account. An account currently consists of just a unique username and a password. A user
may sign up for multiple accounts, and may even post from different accounts at the same time using
separate tags. 

However, once an account is created, it is unique, and a new account with that username
may not be created. This means that if you see a post from e.g. `ronrivest`, following posts with the
same username certainly come from the original poster (technically, someone who knows the original
poster's password). 

If you lose your passcode, there is no mechanism to recover it, not even on the server. Password 
resets could potentially be supported if user accounts stored email addresses or phone numbers, but
this was out of the scope of this project. You should sign up for a new account instead.

### Password storage
Talkie, like any secure application should, does not store user passwords. Rather, it stores an 
irreversible hash of the password, along with a random salt used to make the password harder to crack.
Talkie uses the [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt) algorithm to encrypt user passwords, which
conveniently emits a single string containing the salt and the hash together. The Bcrypt cost factor,
an integer controlling how long it takes to encrypt text, is set in the configuration high enough to
resist modern brute-force attacks. Furthermore, Bcrypt allows this factor to be increased as
computational power grows, enabling Talkie to resist attacks of the future.

### Rate-limiting
Limiting websocket traffic is a difficult undertaking, for which there are few available packages to
handle. To fit within the scope of the project, the rate limiting implementation is focused on the event
of logging users in. To prevent an attacker from compromising another user's password with a brute-force
attack, over and above the computational difficulty of the task provided by bcrypt, users must wait a
short delay (about one second) after entering an incorrect password before attempting to enter a correct
one. This technique effectively raises the amount of time needed to break a password to years, while
only slightly affecting valid login attempts.
 
### Secure database administration
The deployed instance of Talkie uses password-protected Redis and PostgreSQL servers to maximize security.
In the event that the servers were accessed, attackers would need to crack extremely strong passwords in
order to access or modify the data that they contain. Redis was secured by opening `/etc/redis/redis.conf`
and setting the `requirepass` field to a strong random password. Similarly, PostgreSQL was secured by
running the following commands:
    
    postgres=# GRANT ALL PRIVILEGES ON DATABASE talkie TO ubuntu;
    postgres=# ALTER ROLE ubuntu WITH LOGIN;
    postgres=# ALTER ROLE ubuntu WITH PASSWORD '[REDACTED]';

### Configuration via environment variables
This is perhaps the most crucial part of Talkie's security, because if Talkie's configuration was stored in
the source code, anyone with access to GitHub (read: everyone) could learn 1. the database passwords, rendering
the defense above useless, and 2. the session secret, letting an attacker sign in as another active user **without
a passcode**. Talkie's `.env` configuration file is intentionally not checked into git; rather, it was written
locally on the server. Different environment variables control different behaviors, outlined below:

    # App config
    NODE_ENV=development
    TITLE=Talkie
    RECENT=30
    WRONG_PASS_DELAY=1000
    # HTTPS config
    HTTPS_KEY_PATH=/path/to/privkey.pem
    HTTPS_CERT_PATH=/path/to/cert.pem
    HTTPS_CA_PATH=/path/to/chain.pem
    REQUEST_CERT=false
    # Cookie encryption
    SESSION_SECRET=[REDACTED]
    # SQL database config
    SQL_URI=postgres://ubuntu:[REDACTED]@host/talkie
    # Redis cache config
    REDIS_URI=redis://:[REDACTED]@host
    # Bcrypt password hashing config
    BCRYPT_COST_FACTOR=12

## Installation
Assuming [`node`](https://nodejs.org/) and `npm` are installed, run the standard `git clone` and `npm install`
commands. Then, create a `.env` file in the root directory of the project and add configuration as described 
above. Note that you must have an instance of Redis and PostgreSQL running, and you must provide `redis://...`
and `postgres://...` formatted URLs.
