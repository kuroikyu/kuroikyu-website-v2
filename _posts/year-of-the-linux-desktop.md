---
title: "Year of the Linux Desktop"
excerpt: "It might not be for everyone, but it is the year of the Linux desktop for me!"
coverImage: "/assets/blog/posts/year-of-the-linux-desktop/cover.png"
date: "2024-11-12T17:25:11.367Z"
author:
  name: Kuroi Kyu
  picture: "/assets/blog/authors/kk.png"
ogImage:
  url: "/assets/blog/posts/year-of-the-linux-desktop/cover.png"
---

Linux was far from a new concept to me. Although I never had it as my primary OS, I played around with different flavours many times before. I remember having multiple VMs throughout the years with *[Mint](https://www.linuxmint.com/)*, *[Ubuntu](https://ubuntu.com/)*, and *[Debian](https://www.debian.org/)* to name a few. The closest to a main machine running Linux was a Windows laptop I had used during my study years that got a second wind thanks to *[elementary OS](https://elementary.io/)*, it worked great for another couple of years! I also used *macOS* for many years at work so I'm pretty used to the terminal.

On top of that, I had a co-worker that was a Linux enthusiast and had many coffees discussing why it was worth the jump. Another close friend had it setup as the main dual-boot option in their home PC and we had chatted multiple times about what was the experience like. Of course, the *Steam Deck* and the progress Proton has made towards gaming on Linux was not lost on me either.

## The Incident

I was just a regular Windows user. I had all my stuff there: Steam with all the games I'll never finish, a Plex server running as a service to feed the TV in the living room, WSL2 with Neovim setup just how I liked it, and many other small hobbies that I pick up from time to time. [Neovim](https://neovim.io/) was the most recent addition. I was a VSCode fan since it came out as an alternative to Atom but when I discovered *nvim*, it fascinated me and I spent a decent amount of time configuring it, as it is tradition.

One day, Microsoft thought I had nothing better to do so it decided that as part of a regular system update it should also break my WSL installation. All the content was gone, it still worked but it was a fresh install of WSL for some reason. I looked for a fix for hours. I tried as many ways to recover my data as I could but to no avail. All my projects were backed up to GitHub but my Neovim config was not. I know this was my mistake but still I was sad to see it gone.

Messing with my Neovim config was the last straw. [Microslop](https://www.pcworld.com/article/3075135/microsoft-says-stop-calling-it-microslop-or-youre-banned.html) and I were no longer friends and I had to do something about it.

![Friendship ended meme](/assets/blog/posts/year-of-the-linux-desktop/friendship-ended-meme.jpg)
*Internet meme*

## Leap of Faith

 In a rare (for me) compulsive purchase I bought a new NVMe drive online and started looking for a distribution that would fit my needs. I knew that I was going to dual-boot but I wanted a distro that could game in hopes that it would reduce the amount of times I had to boot into Windows. I focused on gaming because I knew that, for the most part, all distros would cover the rest of my needs regardless of which one I picked. That meant that a lot of popular options moved down the list and one distro particularly stood out: [Pop!\_OS](https://system76.com/pop). I had heard many good things about *System76* and knowing that their distribution supported Nvidia graphics meant it was perfect for my use case.

As soon as the drive arrived, I installed Pop!\_OS and made a list of all the things it had to do to truly replace Windows. One by one I started installing what was necessary to cover them. [Jellyfin](https://jellyfin.org/) replaced Plex, I installed Neovim and setup a dotfiles repo, and games were running in Steam so easy I couldn't believe it. I did it, I made the switch, and the grass was greener!

Over the next days and weeks I looked for a solution to those small bits and pieces I was missing: A small script to switch between speakers and headphones, an automation to download and process the latest Critical Role episode VOD, enabling mouse middle-click scroll on Firefox, etc. It's by no means perfect, but it feels stable and comfortable which is more than enough for me.

## What the Future Holds

My wish for the future would be to finally ditch Windows. I know, I'm asking too much. As long as gaming is involved, there's no guarantee you wont be forced to boot to Windows. It's mostly for anti-cheats or external launchers in my case, although this last one seems to be less of a problem nowadays.

At some point I'll want to distro-hop. I want to try *Arch* just to see if it's really that different, but for now I just need a system I can rely on for my *personal computing*. Oh, and exploring the world of tilling window managers is also on the horizon.

![Hackerman](/assets/blog/posts/year-of-the-linux-desktop/hackerman.jpg)
*Hackerman - Kung Fury (2015)*

## A Parting Gift

If you're on the fence, I recommend you follow in my footsteps (except the losing the Neovim config if you can avoid it). The best advice I can give you is, going in with a plan to have a replacement read for each of my use cases was the winning move. It reduced the friction and gave me goals I could work towards each time I sat down at my computer. I enjoyed the journey as much as I now enjoy the "end" result.

One day I'll talk about the move from VSCode to Neovim :)  
Thanks for reading!
