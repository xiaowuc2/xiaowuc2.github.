---
title: Can computers generate truly random numbers?
date: 2022/10/16
description: Yes, but not using math.random or random() module. Can we prove it? Yes. To demonstrate how the numbers are not truly random, I undertook few experiments. These numbers are generated by pseudorandom number generator (PRNG), which is a technique for creating data that appears random but is nevertheless repeatable.
tag: Random Number Generator, CSPRNG, PRNG, Python
author: Rohit Prasan Mandal
---

import Image from 'next/image'

## Can computers generate truly random numbers?


> "Anyone who attempts to generate random numbers by deterministic means is, of course, living in a state of sin." - John von Neumann

<Image
  src="/images/rand.jpg"
  alt="Photo"
  width={4592}
  height={2584}
  priority
  className="next-image"
/>

We can not generate truly random numbers using traditional modules used in python or other programming languages like *math.random* or *random()*. The numbers generated by these modules eventually has to repeat or cycle since there are a finite number of internal states, which does not conform to the definition of random number generation[^1]. These numbers are simply generated with **pseudorandom number generator** (PRNG), a technique/algorithm for creating data that appears random but is nevertheless repeatable. I'll describe how these algorithms work and few other popular PRNG algorithms we can use. I ran two tests, and the results show that random() does not return genuine random numbers to prove how these numbers generated by these modules are not really random and are not cryptographically secure[^2]. Now **Cryptographically Secure Pseudorandom Number Generator** (CSPRNG), which produces random number which are computationally indistinguishable from uniformly random bits and hence not predictable. CSPRNG has many uses in the field of cryptography, science, art, statistics, gambling, gaming, etc. I've depicted few examples of PRNGs and CSPRNGs along with citing our work on creating few custom CSRNGs from scratch.

A pseudo-random number is suitable for most purposes. For example, if we wish to do a random sampling of a large dataset, we need numbers to enter into the programme so that the samples are more or less fairly distributed. In this scenario, using pseudo-random numbers is totally appropriate because the degree of unpredictability has no quantitative advantage. Similarly, a music player in "shuffle" mode is likely to be playing in pseudo-random mode, with a discernible pattern if one listen hard enough. However, if we truly want to create a True Random Number Generator, we must rely on external data or use a Hardware Random Number Generator.

> Can computers generate truly random numbers? 

Computers can generate truly random numbers by observing and relying on the unpredictability in outside data, such as mouse movements, fan noise, thermal noise, photoelectric effect, the atmosphere noise and creating data from it, which are not predictable. This is referred to as entropy. Other times, they generate "pseudorandom" numbers using an algorithm to make the results appear random when they aren't.

Here are few examples of True Random Numbers: Random walk, electric current of tv static over time, radioactive decay, the molecules of a gas, leaf falling from tree etc

#### PRNG : 
- **Linear Feedback Shift Registers(LFSR) :** Many so-called random number generators, such as those based on LFSR are not cryptographically secure, as it is possible to predict the sequence from a short prefix of the sequence. This approach with a long binary might take lifetime to repeat itself but with previous outputs it becomes easier to decipher the linear function and predict the next outcomes. But if two LFSR are combined together with another xor gate creating nonlinear functions then it's robust technique of generating random numbers, almost as good as flipping a coin at random.

Example : 4 bit will generate 2^4 - 1 number of elements before it repeats
```
state = 0b1001
for i in range(20):
  print(state & 1, end = "")
  newbit = (state ^ (state >> 1)) & 1
  state = (state >> 1) | (newbit << 3) 
```
Example : 128 bit will generate 2^128 -1 no of elements before it repeats
```
state = (1 << 127) | 1                 # 1000...0001
for i in range(20):
  print(state & 1, end = "")
  newbit = (state ^ (state >> 1) ^ (state >> 2) ^ (state >> 7)) & 1
  state = (state >> 1) | (newbit << 127 ) 
```

- **Middle Square Method :**

```
seed = int(input("Please enter a four-digit number : "))
number = seed
already_seen = set()
counter = 0

while number not in already_seen:
    counter += 1
    already_seen.add(number)
    number = int(str(number * number).zfill(8)[2:6])  # zfill adds padding of zeroes
    print(f"#{counter}: {number}")

print(f"We began with {seed} and"
      f" have repeated ourselves after {counter} steps"
      f" with {number}.")
```



#### CSPRNG :

A CSPRNG should typically begin with an unpredictable random seed from the operating system, specialised hardware, or an external source. A pseudo-random computation is typically used to generate random numbers after seed initialization, but this does not compromise security.

- **Hardware Based Random Generator :** In python, under OS module `os.urandom()` returns a string of size random bytes suitable for cryptographic use. It can returns a string and random bytes. Random bytes returned by this function depend on the underlying operating system's random data source


- **Our work on CSPRNG :** 
  1. Hardware based CSPRNG [Early Access]() 
  2. CSPRNG using Generative Adversarial Networks [Under Development]()
  3. Quantum Random Number Generator - Cloud [Under Development]()

---

I ran two tests, and the results show that.random() does not return genuine random numbers.

### Test 1 : Visualization 
The change  in standard deviation & mean with respect to the number of iterations.

### Test 2 : Statistical Randomness Test 
This test[^3] is used to analyze the distribution of a set of data to see if it can be described as random (patternless).


[^1]: Random number generation is a process by which, often by means of a random number generator, a sequence of numbers or symbols that cannot be reasonably predicted better than by random chance is generated.
[^2]: A PRNG is said to be cryptographically secure if, assuming that it operates over a wide enough unknown n-bit key, its output is computationally indistinguishable from uniformly random bits.
[^3]: Randomness-Test is a method of evaluating data; it examines the distribution of a collection of data to see whether it can be characterised as random.

