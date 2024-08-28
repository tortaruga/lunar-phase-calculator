- [intro](#introduction)
- [description and disclaimer](#description-and-disclaimer)
- [how it works](#how-it-works)
- [notes](#notes)

# Introduction

It's moon day! 🌙
(Or rather, it was when I started the project. Then it refused to work for a couple of days, so... no longer moon day.)

As I am writing this the moon is staring at me blood-red.
I'm lucky today is a good day, or I would be spiraling down into delirious terrors and tying the unusual color of the evening-sky with some ominous foreboding.

(come look for me in the smearing of my words when i finally slip away for good)

It's the anniversary of the foot on the moon, and I was suddenly possessed by the compulsion to put together two things that make me lose my sanity but that for reasons that will never be clear my mind just cannot stop obsessing over: coding and her majesty the moon. ✨

# description and disclaimer

It's a very simple moon phase calculator, that doesn't take into consideration all the various astronomical calculations because I am not an astronomer and I know absolutely nothing about nothing.

It's not the most accurate thing as a result, especially on the cusp points, but anyway what do you need this silly thing for? if you need it accurate go ask NASA!

(The design sucks, but nobody is surprised about that.)
update: the design doesn't suck anymore!!! I mean, it probably does, but it's the first thing designed by me that i could almost call pretty! 💜💜 I'm over the moon! ...bad pun? 

# how it works

If you're interested in how it works, although I doubt it, here goes:

- Julian Date conversion: 
First it converts the date into a Julian Date, which is the number of days that have passed since the 1st January 4713 before christ (don't ask me why I have no idea);

- Age of the Moon: 
it then calculates how many days have passed between our date and the Julian equivalent of the 6th of January 2000, which is just a random day we know for sure there was a New Moon, and not because we're glorifying the Capitol Attack of 2021. It's just a coincidence;

- how many new moons: 
we then divide the age of our moon by the duration of a full moon cycle (roughly 29.53 days) and get the remainder, so we know how many days have passed since the last new moon. 

- determine the phase: 
knowing the duration of the full cycle and the number of phases we can calculate how many days a phase more or less lasts, and we use that to calculate the phase we are loking for.

If it doesn't make sense you can look it up online where countless people have explained it better than me.

# notes

- for the month and day, for numbers before ten both 1, 2, 3... and 01, 02, 03 will work the same;

- for the year, if you enter any number with less than 2 digits it defaults to the 2000s, and less than 3 to the 1900s:
1 will default to 2001, 50 to 1950, so if you want the year 50 write it with 0s preceding it: 0050.
