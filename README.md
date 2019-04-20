# Daily Bruin External Sites Training Guide

Presented by: Richard Yang and Kevin Qian

## Section 1: HTML and CSS

**HTML** is used to make websites which run in browsers like Google Chrome, Firefox, or Safari. HTML is basically a format, a markup, that all browsers have agreed to read a certain way. If you are familiar with Markdown, think of HTML as a very complex version of that.

HTML files are composed of **tags**. A tag is just a particular type of element on the web page. For example, you have tags for paragraphs, for titles/headings, for images, etc. Tags usually come in pairs: having an **opening** and a **closing** tag, although a very few select tags are known as **self-closing**, as they do not have a closing tag.

### Exercise 1: HTML Page

Make a file called `index.html` with a head, body, heading (`<h1></h1>`), two paragraphs, and an image. 

```html
<head>
  <meta charset="UTF-8">
	<title>External Sites Rules!</title>
</head>
<body>
	<h1>im dustin</h1>
	<p>heres a dog!</p>
	<p>and heres my second paragraph</p>
</body>
```



Further, every HTML element can have **attributes**. Think of attributes as properties of a certain tag. For example, images can have widths, links can have URLs, and buttons can have types.

### Exercise 2: Attributes

Modify your `index.html` to have an image with two attributes: a `src` and an `alt` (alternative) description in case the image does not load (and required for screen readers!)

```html
<img src="https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg" alt="Brown dog smiling" />
```



HTML is great for marking up your content - saying I want a paragraph here, an image here, a title here, etc., but what about displaying it? For that, we use a language known as **CSS**: Cascading Style Sheets. CSS is how we do things like make some text red, change font sizes, center elements horizontally, etc.

CSS is made up of **rules**. A rule is essentially just a **selector** (“what do you want to style?”) and a list of **properties** to change (“what do you want it to look like?”). Remember: *what do you want to style* and *what do you want it to look like?* 

Note that not all CSS properties will make sense for all selectors. For example, changing the font size of text is fairly obvious in what it means, but changing the font size of an image is basically non-sense.

### Exercise 3: CSS

Make a file called `styles.css` in the same directory as your previous `index.html` and write a CSS rule that makes all paragraphs red.

```html
<!-- index.html -->
<link rel="stylesheet" href="./styles.css" type="text/css" />
```

```css
/* styles.css */
p {
  color: red;
}
```



## Section 2: JavaScript

*Note*: Run the following code at [https://jsbin.com](https://jsbin.com/)

**JavaScript** is the “language of the Web.” No language is perfect, but JavaScript in particular gets a lot of criticism because it is dynamically and weakly-typed. If you don’t know what this means, no problem! Just know that when you declare variables in JavaScript, you don’t specify the type.

**Variables** in JavaScript are declared using let or const if you never plan on changing the value of the variable.

### Exercise 1: For Loops

```javascript
let addMe = 0;
const dont = 5;

for (addMe = 0; addMe < 10; addMe++) {
  console.log("addMe is " + addMe);
  console.log("dont is " + dont);
}
```



JavaScript also has **objects**. On a technical nerdy note, they look similar to C++ with the class word but are actually prototypal-based, NOT class-based. Google that later if you’re interested. Objects are written in JSON. You’ll see JSON all over the place on the web.

Objects are similar to dictionaries in Python.

### Exercise 2: Objects

```javascript
let myObject = {
  name: "Dustin",
  age: 20,
  favClub: "Daily Bruin"
};

console.log("My name is " + myObject.name);
```



**Functions** in JavaScript are declared using the `function` keyword or using **arrow syntax**. If you are familiar with functional languages such as ML or Lisp, these are anonymous functions. 

### Exercise 3: Functions

```javascript
function add(a, b) {
  console.log(a);
  console.log(b);
  return a + b;
}
// same thing as
const add = (a, b) => {
  console.log(a);
  console.log(b);
  return a + b;
}
```



## Section 3: Node.js

Before Node.js, you could *only* run JavaScript in the browser. It had no other applications or uses. As such, it’s hard to overstate how revolutionary Node.js was/is. For the first, it allowed developers to run JavaScript on their machine. This meant you could not only run a server on JavaScript (before this was basically a nonsense statement: *JavaScript??? On a server??*) but you could have a full JavaScript stack, from the frontend to backend. Since JavaScript is the most known language among developers, this was a huge advantage. 

You can write hundreds of articles and spend hours and hours on the topic of Node.js and its internals, but the only thing we care about here is making sure you have it installed (along with NPM or Yarn).

### Exercise 1: Installation

```shell
brew install node
```

You should be able to type `node -v` into your Terminal and get out a version number

### Exercise 2: Execution

Make a new file in your current directory, say `training.js`

Let's write the following program into `training.js`:

```javascript
const path = require("path");

console.log("Node.js rules! I am running in " + path.dirname(__filename));

let myObject = {
    numOfDogs: 0,
    numOfCats: 0
};

for(let i = 0; i < 10; i++) {
    console.log(`Iteration ${i}`);
    myObject.numOfDogs++;
    myObject["numOfCats"] = i;
}

console.log(`I have ${myObject.numOfDogs} dogs and ${myObject.numOfCats} cats`);
```

Now, we can execute this file just by typing:

```shell
node training.js
```

### Exercise 3: REPL

If you just type `node` into your Terminal without a file, it brings up what's known as a REPL (read, eval, print, loop) where you can execute a Node.js program statement by statement without making a file!

Try the following:

```javascript
> let db = "awesome";
// undefined
> console.log(db);
awesome
// undefined
```

Don't worry about the `undefined` being printed out, this executes after every successful evaluation.

## Section 4: TypeScript

If you’ve ever written in JavaScript and experienced the impending terror created from dynamic typing, well fear no longer because **TypeScript** is here! TypeScript is basically JavaScript with types and **interfaces** which tends to create more robust and less buggy programs. This is helpful for larger teams such as External Sites. 

Note that TypeScript always compiles down to JavaScript and these extra types and interfaces are just to let IDEs like VSCode spot potential errors or bugs. This means that *any valid JavaScript is valid TypeScript* and *any JavaScript program is also a TypeScript program*. This relation does NOT go the other way around.



Sadly, there does not exist a runtime for TypeScript like there does for JavaScript (yet! One is in progress by the creator of Node.js and it's called [Deno](<https://github.com/denoland/deno>)), so we'll be using the online playground [here](<https://www.typescriptlang.org/play/index.html>).

### [TODO: TS Exercise]

## Section 5: React

For all the talk and flash around React™, at the end of the day, it's just a JavaScript library. That's it! Of course, there's now also a huge developer community using React and other libraries that depend on it, but React itself is just a library. And it doesn't have to be scary! In fact, it was built to make your life *easier*, not harder.

React was made by Facebook and is built on the idea of "**components**": reusable snippets of JavaScript that ultimately compile into HTML. That's all a component is: a JavaScript function that returns HTML. To do this, Facebook made their own format called **JSX** (JavaScript eXtension).

JSX can be as simple as this:

```jsx
function MyComponent() {
  return <h1>Hello I am a component!</h1>;
}
```

Or as complex as entire websites and pages.

Follow [this link](https://jsbin.com/viwasetoli/edit?html,js,output) to see React live



If you rely on **state**, that is properties of an object that the object keeps track of, you will need to use a class rather than a function.

When you use React component classes, it's helpful to use arrow functions by default over traditional `function` declaration. If you do decide to use `function` however, just make sure to do what is known as `this` binding in the constructor

```react
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blankets: 0
    };
  }
  
  addBlankets = () => {
    this.setState({
      blankets: this.state.blankets + 1
    })
  }
  
  render() {
    return (
      <div>
        <button onClick={this.addBlankets}>Add Blankets</button>
        <p>I have {this.state.blankets} blankets</p>
      </div>
    )
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("container"))
```



With `this` binding

```react
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blankets: 0
    };
    this.addBlankets = this.addBlankets.bind(this);
  }
  
  addBlankets() {
    this.setState({
      blankets: this.state.blankets + 1
    })
  }
  
  render() {
    return (
      <div>
        <button onClick={this.addBlankets}>Add Blankets</button>
        <p>I have {this.state.blankets} blankets</p>
      </div>
    )
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("container"))
```

## Section 6: Docker

When working on teams, it can quickly get difficult to coordinate the fact that everyone uses a different computer. Even if you get everyone to use the exact same MacBook, what if your app has a dependency on a library (say, React) and Alice has version `16.4.1` and Bob has version `16.4.0`? Sure, you can get Bob to upgrade this time, but not only is it difficult to determine the problem between two people when you have more than one dependency but imagine if your team is Alice, Bob, Charlie, Dave, Eve, AND Faith??? Now the task becomes a lot more difficult, potentially taking up the whole meeting! Not good.

To fix this, we use a tool called **Docker**. Docker essentially builds a smaller, "mini" computer inside yours with its own operating system and everything! This means that when you build the same "Docker-ized" applications on different computers, even Windows vs Mac, you can guarantee the app is gonna behave the same! Because it runs on the exact same mini-computer regardless of the actual physical computer you're running on.

Download Docker [here](<https://docs.docker.com/install/linux/docker-ce/ubuntu/>).

