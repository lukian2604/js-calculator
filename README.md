# js-calculator

Timer, Calculator & Stopwatch

Description

This is a first JavaScript project that combines three practical tools into a single web application:
	1.	Timer – Set a countdown by specifying hours, minutes, and seconds. Includes buttons to start, pause, and reset the timer.
	2.	Calculator – A functional calculator supporting basic operations (+, -, ×, ÷), percentages, sign change (±), and decimal numbers.
	3.	Stopwatch – A digital stopwatch displaying hours, minutes, seconds, and hundredths of a second, with start, pause, and reset functionality.

The interface is modern and responsive, using gradients and subtle effects to enhance user experience.

Technologies Used
	•	HTML5 – Structure of the page
	•	CSS3 / Flexbox / Grid – Styling and responsive layout
	•	JavaScript – Logic for timer, calculator, and stopwatch
	•	Event listeners handle button clicks and dynamic display updates

Features:
Timer
	•	Set hours, minutes, and seconds
	•	Start countdown
	•	Pause timer
	•	Reset to zero
	•	Alert when the countdown reaches zero

Calculator
	•	Basic operations: +, -, ×, ÷
	•	Percentage and sign change (±)
	•	Decimal numbers
	•	Clear (C) and Clear Entry (CE) buttons

Stopwatch
	•	Measures hours, minutes, seconds, and hundredths of a second
	•	Start, pause, and reset
	•	Resumes from paused time

File Structure:
project-folder/
│
├─ index.html          # Main webpage
├─ style.css           # CSS styles for timer, calculator, and stopwatch
├─ calculator.js       # Calculator logic
├─ timer.js            # Timer logic
├─ stopwatch.js        # Stopwatch logic
└─ images/
   └─ calculator-icon.png


How to Use:
	1.	Open index.html in a modern browser.
	2.	Use the Timer by entering hours, minutes, and seconds, then click “Set Timer” and “Start”.
	3.	Use the Calculator by clicking numbers and operator buttons to perform calculations.
	4.	Use the Stopwatch to start, pause, or reset the timer.

Notes:
	•	This project is fully front-end and does not require a server.
	•	All numeric inputs are validated with Number() and default to 0 to prevent errors.
	•	Buttons and inputs are styled with gradients and hover effects for a modern look.
	•	This project helped practice JavaScript basics such as DOM manipulation, events, intervals, and working with numbers.
