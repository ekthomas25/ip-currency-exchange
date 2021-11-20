# _Currency Exchanger_

#### By _Liz Thomas_

#### _This is a web app that allows a user to enter an amount in USD and have it converted and displayed in another currency._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery 3.6.0._
* _webpack_
* _Babel_
* _eslint_
* _Node_
* _[ExchangeRate-API](https://www.exchangerate-api.com/)_


## Description

This web application is a currency exchanger that takes an inputted USD amount and converts it into a selected foreign currency. There are 160 different currencies to choose from in the dropdown menu. The menu is organized alphabetically by currency code. The web application does not take any amount less than or equal to 0. This program was built using an ExchangeRate API for Epicodus' Week 6 Independent Project.

## Setup/Installation Requirements

#### Your computer will need to have the following Installed:
* [GIT](https://docs.github.com/en/get-started/quickstart/set-up-git)
* [Visual Studio Code](https://code.visualstudio.com/download)
* [Node](https://nodejs.dev/learn/how-to-install-nodejs)

#### You will need an API Key for this program to run properly.
  * _Navigate to [ExchangeRate-API](https://www.exchangerate-api.com/) and enter your email to obtain a free API Key._
  * _After verifying your email, you will receive an email with your API Key._
  * **Do not share your API Key, it is exclusive to you and should remain secret.**

* _Once you have VSCode, Node, and GIT set up, you will need to open up your terminal and type the command:_ git clone https://github.com/ekthomas25/i-p-currency-exchange.git

* _This will clone the repository to your desktop and you will be able to then open the folder in VSCode._
* _Open the terminal in VSCode and type the following command:_ npm install
* _This will install and generate the neccessary files for this project._
* _Enter_ npm run build _into the terminal_
* _Create a .env file by entering_ touch .env _in your terminal. Click on the file in your Explorer sidebar and copy and paste the following:_ API_KEY= _followed directly by your API Key, then save_.
* _Enter_ npm run start _into your terminal and the application will open in your browser._

## Known Bugs

* _No known issues_

## License

_If you have any questions or would like to reach out for any reason, please don't hesitate to send and email to [thomas.elizabeth.k@gmail.com](mailto:thomas.elizabeth.k@gmail.com)._

MIT License

Copyright (c) 2021 Elizabeth Thomas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.