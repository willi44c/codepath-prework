# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Carissa Willis**

Time spent: **15** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [] "Start" button toggles between "Start" and "Stop" when clicked. 
* [] Game buttons each light up and play a sound when clicked. 
* [] Computer plays back sequence of clues including sound and visual cue for each button
* [] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [] User wins the game after guessing a complete pattern
* [] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [] Computer picks a different pattern each time the game is played
* [] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![]https://cdn.glitch.global/56247602-5938-4dfc-b6db-3c5c24bea360/codepath%20gif%20recording.gif?v=1648489699857
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

GeeksForGeeks reference article: "Genreating random numbers in Java" https://www.geeksforgeeks.org/generating-random-numbers-in-java/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

While working on the prework I found it difficult to implement the guess function in a way that made logical and practical sense. My first challenge was mapping the logic of what results I wanted based on the user input (clicks in this case), and once I had that logic down implementation was a challenge. It took some time to make sure every aspect of the game was taken into account when guesses were being made, that is, when the user is guessing correctly but the pattern is not yet complete. Once I had the basic function down, I reworked the guess function to accommodate for the ‘lives’ game element I decided to add. This added a new level of complication as I had to be sure that for every wrong guess, the pattern replayed without adding a new step and made sure to update the lives. Another challenge that was invisible at first was making sure that the lives counter was updated for each time the game started, otherwise a myriad of bugs would ensue while I tested the game multiple times in a row. Overall, a large part of my problem solving came from working through the logic both mentally and on paper before attempting to implement, I found myself returning to this strategy more than once while troubleshooting and debugging my code when I added new features. I also believe that the way the prework was designed properly equipped me to be able to implement extra features by thoroughly introducing the materials I was working with as I coded, it is intuitive, constructive, and very engaging.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I want to learn more about the process behind creating accessible and intuitive website user interfaces. Because this program was an introduction, and relatively simplistic, how does my novice implementation strategy compare to professional in the field? I want to learn the steps behind creating more complex systems that remain usable to the average user, I want to gain the skills to tackle larger projects revolving around web design. 
How do we manage the necessary complexities of a website while also being sure to not make overly burdened or needlessly complex code on the back end? Are there specific strategies used to create functional and less cumbersome designs that are still effective?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

Given more time to learn the possibilities of the material, I would have enjoyed designing a system of levels. I would love to make difficulty settings, or perhaps an interface that allowed a user to select different features to change the game. Elements that could be changed would include pattern tick-speed, the number of buttons, the length of the pattern, and the number of lives. All of these could either be made to change individually (i.e. a game could be set to have a pattern length of 10, 3 lives available, fast tick-speed, and 4 buttons) or ‘presets’ could be available, (such as “easy, medium, hard”) where the settings would be selected automatically. Adding these features would have been a fun challenge and provide more interactive gameplay.



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
