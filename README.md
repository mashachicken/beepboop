# Mr. Roboger's Neighborhood

#### An Independent Project for Epicodus/Arrays and Loops Exercise, Jun 11, 2021

#### By Masha Ivy

## Description

a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
* These exceptions are written from least to most important.

## Tests
```
Test: The program returns a range of numbers from 0 to the users inputted number
Input: "4"
wordCounter(text);
Output: "0, 1, 2, 3, 4"

```
Test: The program will replace user inputted numbers with either "Boop", "Beep" or "Won't you be my neighbor?"
Input: "1"
Output: "Beep!"
Input: "2"
Output: "Boop!"
Input: "3"
Output: "Won't you be my neighbor?"

```
Test: The program returns a list of values (numbers from 0 to user inputted) with exception of 1,2 and 3 that will be replaced with words.
Input: "5"
Output: "0", "Beep!", "Boop", "Won't you be my neighbor?", 4, 5

```
Test: The program will priorotize the exceptions listed above from most importnat (will appply first) to least important (if the more important ones didn't apply)
Input: "13"
Output: "Won't you be my neighbor?"

```
## Setup/Installation Requirements

To check out my website, visit my GitHub page. Below I will attach a direct link to my repository

* Open the terminal and enter "git clone https://github.com/mashachicken/beepboop.git"
* Press enter. Your local clone will be created
* Open the index.html file in a browser of your choice

## Known Bugs
No known bugs, if you find any,  please contact me

## Support and contact details
Feel free to contact me via my email:
mashaivy9@gmail.com

## Technologies Used
This website has been created using HTML, CSS and JavaScript.

### License
MIT license

Copyright (c) 2021 **Masha Ivy**