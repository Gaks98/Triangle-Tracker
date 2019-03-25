# Triangle Tracker Application
This is a triangle tracker website that identifies and gives description of a triangle., {22rd March 2019} By Yvonne Gakii Gitonga

# Description
This is a triangle tracker website that identifies and gives description of a triangle.
it is a web-based application in that it is capable of working on the web. It identifies whether the values entered are numbers or not. It gives back a text to tell whether the inputed values by the user are valid numbers or not. After this it estimates whether if the inputed values can make up a triangle or not 

# Setup/Installation Requirements
No set up requirements or Installation needed to view this website. The site is fully run on its own originally set codes and links and does not depend on any other code to function.

# Known Bugs
The website is not suitable for phones less than 200px of width. 

# Technologies Used
I have use CSS3 to give the links a few animations such as increase in font-size when hovered over and also change color.

# BDD
## About
This is stands for behaviour driven development that explains the blueprint that was uesd to create this application.

## Features

## | behaviour         |         input                               |    output
  |--------------------|:---------------------------------------------|----------------------------------------
  | no input           | isNaN(sideA) || isNaN(sideB) || isNaN(sideC) | input numbers only
  
  |negative or 0 input | sideA <=0 ||  sideB <= 0 || sideC <= 0       | values too small to form triangle
  
  |all sides equal     | sideA===sideB && sideB===sideC               | triangle equilateral
  
  |two sides and their |sideA+sideB <= sideC || sideA+sideC <= sideB  |
  |sum greater than the| || sideB+sideC <= sideA                      | triangle equilateral
  |third side          |                                              |
  
  |no equal side       |sideA!==sideB && sideB!==sideC                |triangle isosceles

## How to run
Just input numbers in the input fields.

# Support and contact details
In case you run into some issues will trying to use this site feel free to reach me at yvonnegax98@gmail.com

# License
MIT License

Copyright (c) [2019] [Yvonne Gakii Gitonga]
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
