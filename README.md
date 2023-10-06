# daily-scheduler
A simple calendar application that allows a user to save events for each hour of the day

The purpose of this project was to create a simple daily scheduler app that would allow you to create schedules throughout a work day.
The day split up by the hour, from 9am - 5pm. There is also a color scheme by the hour. Red for current hour; grey for past hours; and
green to represent future hour(s). If you wanted to schedule a todo or meeting, you'd update the field for that hour and then click
a save button on the right. The data is stored locally in your browser and will remain until you remove it.


## Developering the project. 

This is a relatively easy project due to the fact there was some starter code to work with. I took an html page and created some javascript and
jquery code together to allow the parsing of the html given and then be able to dynamicaly update the data on the web page. The finished product should have
been to have a nice calendar with color schemes based on the hour and the ability to update the cells with todo items. I got everything except for the
the color schemes to dynamically move. I got the code there, but there is a bug in it and I ran out of time.

## Some resources used.

There was plenty of Googling done, along with youtube, chatgpt and some tutoring sessions. I was able to get most of the code I needed and then would research issues on line by having checkers look it over. Sometimes they came back with good results, sometimes not.



## How the program will work

<h2>Here we have the layout as the browser sees it</h2>

![Front Page to Quiz](./assets/images/front_page_quiz.png)


<h2>Same view but with a button highlighted as if to be selected</h>

![Button Selected on Site](./assets/images/Front_page_with_selection.png)

<h2> And finally, here's the snippet of the index.html ... mostly simple.

```html
<body>
<div class="itBegins">
    <h1> Hello and Welcom to the Simple Quiz</h1>
    <div class="putQHere">
        <h2 class="questionH2">Question Goes Here</h2>
        <div class="ansButtons">
            <button class="button">answershere1</button>
            <button class="button">answershere2</button>
            <button class="button">answershere3</button>
            <button class="button">answershere4</button>
        </div>
        <button class="nextButton">NextQ</button>
    </div>

    <div class="correctAnsDiv">
        <h2 class="correctAnsH2"></h2>
    </div>
</div>```


## Thoughts on this project

Looking back, if I had at least completed the javascript to answer the questions, it would have been a success to me as it would not take much more time to get the help needed to present the answers into the web-page. Will do that next time to complete what I can/know first and unblock self with help.

## Where to find this code and website
| Links to Code        | Resource URL           |
| ------------- |:-------------:|
| Simple Quiz Run Page   | [https://flimits.github.io/simple_quiz/](https://flimits.github.io/simple_quiz/) |
| GitHub Repo | [https://github.com/flimits/simple_quiz](https://github.com/flimits/simple_quiz)     |

## Some Technologies Relyed upon to complete this task
| Technology Used         | Resource URL           |
| ------------- |:-------------:|
| CSS W3School for functions    | [https://www.w3schools.com/css](https://www.w3schools.com/css)      |
| Mozilla Web docs for functions | [https://developer.mozilla.org/](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
| GitHub | [https://github.com/](https://github.com/)     |
| Youtube University | [https://youtube.com/](https://youtube.com/)     |
| Docs from Class | Hitting the class notes and materials and drills    |



## My Pseudo code used when creating the code to create this program.

****

- There will be a web page with a title.
- There will be a an area for the question and several buttons with answers to choose from.
- you will need variales to store
   - Your score: wons and losses
   - The counter
   - Presenting the questions
   - presenting the answer and storing correct one.
   - creating local storage so answers can be persistant on refresh
- A timer will need to be running as soon as a start button is clicked.
- Present the first question.
- Compare the answer with the questions presented, and decided if the answer is true or false.
- Save that score off and present it to the screen.
- If the answer is correct, add some time to the timer (or pause it if possible).
- Keep asking questions until you run out of them or the timer hits zero.
- Your final score will be the time left on the timer.