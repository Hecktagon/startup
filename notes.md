# **GIT & GITHUB**


## *Markdown syntax*
Headings :  
`#` First priority heading  
`##` Second priority heading  
`###` Third priority heading  

Text Styling:  
**Bold:** `** **` or `__ __`  
*Italics:* `* *` or `_ _`  
~~Strikethrough:~~ `~~ ~~`  
**Bold with nested _Italics_**  `** **` and `_ _`  
***Bold and Italics*** `*** ***`  
<sub>Subscript:</sub> `<sub> </sub>`  
<sup>Superscript:</sup> `<sup> </sup>`  

Other:  
newline: `<br>` or two spaces at the end of a line  
To quote or unspecialise keywords/code use backticks (same key as tilda)  
To quote text (indents and changes the color) use `>`  
for more info go [here](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)  


## *Git Basics:*  
`Git init`: initiates current directory for git  
`Git status`: tells user of any un-committed changes to the git directory, as well as other useful information  
`Git add`: adds changes to standby, from where they can be committed. `Git add .` adds all changes.  
`Git commit`: commits changes to the git directory. Using `-m` allows for the addition of an update message  


## *GitHub Basics:*  
GitHub allows for a cloud version of a git repository to be accessed/edited by multiple users.   
from the console you can interract with GitHub using the following:  
`Git clone <url>`: copies the repository to your local system  
`Git pull` attempts to apply all changes to the GitHub to your local copy  
`Git push` attempts to apply all changes to your local copy to the GitHub  

# **HTML**

## *Common HTML Elements:*  
`html`: The root element of an HTML document. All other elements must be inside this.  
`head`: Contains meta-information about the document, like its title and links to scripts and stylesheets.  
`title`: Sets the title of the webpage, shown in the browser’s title bar or tab.  
`meta`: Defines metadata such as the character set, viewport settings, and SEO keywords.  
`script`: Embeds or references JavaScript code for dynamic behavior.  
`include`: Not a standard HTML tag. Typically used in templating languages to include external content.  
`body`: Contains all the content of the webpage, such as text, images, and links.  
`header`: Represents introductory content, typically a group of introductory or navigational aids.  
`footer`: Represents the footer of a section or page, often containing author information, copyright, and links.  
`nav`: Defines a set of navigation links.  
`main`: Specifies the main content of the document, unique to the page.  
`section`: Defines a section in a document, used for thematic grouping of content.  
`aside`: Represents content indirectly related to the main content, like sidebars.  
`div`: A generic container for flow content, useful for styling or scripting.  
`span`: An inline container for text, useful for applying styles or scripts to a part of the text.  
`h1` to `h9`: Defines headings, with h1 being the highest level and h9 the lowest.  
`p`: Defines a paragraph of text.  
`b`: Makes text bold, used for drawing attention.  
`table`: Defines a table.  
`tr`: Defines a row in a table.  
`th`: Defines a header cell in a table.  
`td`: Defines a standard cell in a table.  
`ol`, `ul`: Defines ordered (numbered) and unordered (bulleted) lists.  
`li`: Defines a list item.  
`a`: Defines a hyperlink.  
`img`: Embeds an image.  
`dialog`: Represents a dialog box or other interactive component.  
`form`: Defines a form for user input.  
`input`: Defines an input field within a form.  
`audio`: Embeds audio content.  
`video`: Embeds video content.  
`svg`: Embeds scalable vector graphics.  
`iframe`: Embeds another HTML page within the current page.  
`em`: Emphasizes text, usually displayed in italics.  
`strong`: Indicates strong importance, usually displayed in bold.  
`br`: Inserts a line break.  
`hr`: Inserts a horizontal rule (line).  
`label`: Defines a label for an input element.  
`button`: Defines a clickable button.  
`textarea`: Defines a multi-line text input control.  
`select`: Defines a drop-down list.  
`option`: Defines an option in a drop-down list.  
`link`: Defines the relationship between the current document and an external resource (most commonly used to link to stylesheets).  
`style`: Embeds CSS styles within the HTML document.  
blockquote: Defines a section that is quoted from another source.  
`pre`: Defines preformatted text, which preserves both spaces and line breaks.  
`code`: Defines a piece of computer code.  
`cite`: Defines the title of a work.  
`abbr`: Defines an abbreviation or acronym, with an optional title attribute to provide the full term.  
`<!-- (text here) -->`: Makes a comment.

## *Special Character Codes:*  
`&`	`&amp;`  
`<`	`&lt;`  
`>`	`&gt;`  
`"`	`&quot;`  
`'`	`&apos;`  
`😀`	`&#128512;`  

## *User Input Elements*
`form`: A container for user input elements that allows you to collect and submit data to a server, like this: `<form action="form.html" method="post"></form>`.  

`fieldset`: Groups related input elements together within a form, often with a label to describe the group, for example: `<fieldset> ... </fieldset>`.  

`input`: A versatile element for various types of user input, such as text, passwords, checkboxes, and more. Example: `<input type="" />`.  

`select`: Creates a dropdown menu for users to choose from a list of options, like this: `<select><option>1</option></select>`.  

`optgroup`: Groups related options within a dropdown menu, making it easier to navigate. Example: `<optgroup><option>1</option></optgroup>`.  

`option`: Represents an individual item within a dropdown menu or list, for instance: `<option selected>option2</option>`.  

`textarea`: Provides a multi-line text input field for users to enter larger amounts of text, such as: `<textarea></textarea>`.  

`label`: Associates a text label with a specific input element, improving accessibility and usability. Example: `<label for="range">Range: </label>`.  

`output`: Displays the result of a calculation or user action, often used with forms, like this: `<output for="range">0</output>`.  

`meter`: Visualizes a value within a known range, such as a progress bar or rating. Example: `<meter min="0" max="100" value="50"></meter>`  
  
### Types for Input:  
These change the way that the user input interactable appears, and what kind of input it expects. For example:  
```
<form action="form.html" method="post">
    <label for="phone">Phone Number:<label>
    <input type="tel" id="phone">
</form>
```  
will display a textbox that expects the users phone number.  

`text`	Single line textual value  
`password`	Obscured password  
`email`	Email address  
`tel`	Telephone number  
`url`	`URL` address  
`number`	Numerical value  
`checkbox`	Inclusive selection  
`radio`	Exclusive selection  
`range`	Range limited number  
`date`	Year, month, day  
`datetime-local`	Date and time  
`month`	Year, month  
`week`	Week of year  
`color`	Color  
`file`	Local file  
`submit`	button to trigger form submission  


Each of these input types have the following additional attributes:  

`name`	The name of the input. This is submitted as the name of the input if used in a form  
`disabled`	Disables the ability for the user to interact with the input  
`value`	The initial value of the input  
`required`	Signifies that a value is required in order to be valid  

# **CSS**

## *Selectors*
*selectors are how we specify which part of our HTML we want to stylize*  
the simplest form of selector looks like this:  
```
tagtype {
    apply special effects to all items with specified tagtype
}
```

### *Combinators*
more specific ways to specify tags:  
Descendant:	A list of descendants	`body section`	Any section that is a descendant of a body  
Child:	A list of direct children	`section > p`	Any p that is a direct child of a section  
General sibling:	A list of siblings	`div ~ p`	Any p that has a div sibling  
Adjacent sibling:	A list of adjacent sibling	`div + p`	Any p that has an adjacent div sibling  
Multiple tags: `p, h1` all p and h1 tags  

### *Class Selectors*
If we want to stylize HTML by class we do this :
```
(optionally specify tag type).class {
    insert stylization
}
```

### *Id Selectors*
If we want to stylize HTML by id we do this :
```
#id {
    insert stylization
}
```

### *Attribute Selectors*
If we want to stylize HTML based on attributes we do this :
```
tagtype[desired attribute EX: href*="https://"] {
    insert stylization
}
```

## *Declarations*  

`background-color: color=red` Fill the background color  
`border: color=#fad width=solid style=medium` Sets the border using shorthand where any or all of the values may be provided  
`border-radius: unit=50%` The size of the border radius  
`box-shadow: x-offset=2px y-offset=2px blur-radius=2px color=gray` Creates a shadow  
`columns: number=3` Number of textual columns  
`column-rule: color=solid width=thin style=black` Sets the border used between columns using border shorthand  
`color: color=rgb(128, 0, 0)` Sets the text color  
`cursor: type=grab` Sets the cursor to display when hovering over the element  
`display: type=none` Defines how to display the element and its children  
`filter: filter-function=grayscale(30%)` Applies a visual filter  
`float: direction=right` Places the element to the left or right in the flow  
`flex`: Flex layout. Used for responsive design  
`font: family=Arial size=1.2em style=bold` Defines the text font using shorthand  
`grid`: Grid layout. Used for responsive design  
`height: unit=.25em` Sets the height of the box  
`margin: unit=5px 5px 0 0` Sets the margin spacing  
`max-[width/height]: unit=20%` Restricts the width or height to no more than the unit  
`min-[width/height]: unit=10vh` Restricts the width or height to no less than the unit  
`opacity: number=.9` Sets how opaque the element is  
`overflow: [visible/hidden/scroll/auto]=scroll` Defines what happens when the content does not fit in its box   
`position: [static/relative/absolute/sticky]=absolute` Defines how the element is positioned in the document  
`padding: unit=1em 2em` Sets the padding spacing  
`left: unit=10rem` The horizontal value of a positioned element  
`text-align: [start/end/center/justify]=end` Defines how the text is aligned in the element  
`top: unit=50px` The vertical value of a positioned element  
`transform: transform-function=rotate(0.5turn)` Applies a transformation to the element  
`width: unit=25vmin` Sets the width of the box  
`z-index: number=100` Controls the positioning of the element on the z axis  


## *Fonts:*  

There are four major families of fonts: Serif, sans-serif, fixed, and symbol. A serif is a small stroke attached to the ends of a character's major strokes. Serif fonts have the extra strokes; sans-serif fonts do not. Fixed fonts characters all are the same size. This is useful for lining up text when doing things like coding or displaying tabular data. Symbol fonts represent non-language characters such as arrows or emojis.

### *Importing Fonts:*

`@font-face` allows you to load a font included in your app, so that any user, regardless of whther they have the font downloaded, sees that font:  
```
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.ttf');
}

p {
  font-family: Quicksand;
}
```

`@import` allows you to instead pull a font from another source:
```
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```


## *Animation:*  

Animation is CSS works by providing different keyframes with different phases in that animation, which CSS will smothly transition between.  

`animation-name: name_of_animation)`  specifies which block of CSS we want to apply our animation to, and creates an animation name to refer to later.  

`animation_duration: 3s` specifies how long the animation will last  

`@keyframes name_of_animation` contains the `from ` and `to` keywords, allowing a start and end keyframe fo rthe animation. additional keytframes can be inserted using the percent of the way through the animation we want the keyframe to appear, for example 50% will insert a keyframe 50% of the way through the animation.  

In this example, we make an animation where some text grows from nothing to 20% of the view height (vh), but towars the end of the animation grows a little too big and then shrinks back down:  

```
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}
@keyframes demo {
  from {
    font-size: 0vh;
  }

  to {
    font-size: 20vh;
  }
}
```

## *CSS Display*   
The display element of CSS is used for resizing your website to fit differnt sized screens differently.  

`none`	Don't display this element. The element still exists, but the browser will not render it.  
`block`	Display this element with a width that fills its parent element. A p or div element has block display by default.  
`inline`	Display this element with a width that is only as big as its content. A b or span element has inline display by default.  
`flex`	Display this element's children in a flexible orientation.  
`grid`	Display this element's children in a grid orientation.  

<meta name="viewport" content="width=device-width,initial-scale=1" />  
This meta tag should be included in the head element if your website uses CCS display, because by default mobile devices scale down websites.  

### Other usefull display elements/attributes:  
`float` The float property displays text to the side of an element and causes the text to wrap around the element.  
`@media` the @media selector allow oyu to check if the website is displayed in portrait or landscape mode, and apply certian changes to your display accordingly.  
`grid` a value of display that allows us to display elements in a grid shape that reshapes according to the size of the screen.  
`flex` a value of display that allows you to partition elements into their own subsections that expand and contract to fit the screen.  


# **Javascript**

Javascript has similar syntax to C languages, using {} to delimit scopes, and conventinally ; to end statements. 

## *Syntax:*  

### Varibles & Types:  
**Variables:**  
`var variable_name` - This one is outdated, and should be avoided to avoid hard-to-debug errors. The problem with var, unlike const or let, is that it ignores block scope. Variables declared with var are always logically hoisted to the top of the function.   
`let variable_name` - a normal variable, can be changed.  
`const const_name` - a varible that throws an error if you try to change it.   

**Types:**  
`Null` - variable that hasnt been asigned a value.  
`Undefined` -	The type of a variable that has not been defined.  
`Boolean` -	true or false.  
`Number` -	A 64-bit signed number.  
`BigInt` -	A number of arbitrary magnitude.  
`String` - A textual sequence of characters.  
`Symbol` -	A unique value.  

**Object Types:**  
`Object`	A collection of properties represented by name-value pairs. Values can be of any type.	`{a:3, b:'fish'}`  
`Function`	An object that has the ability to be called.	`function a() {}`  
`Date`	Calendar dates and times.	`new Date('1995-12-17')`  
`Array`	An ordered sequence of any type.	`[3, 'fish']`  
`Map`	A collection of key-value pairs that support efficient lookups.	`new Map()`  
`JSON`	A lightweight data-interchange format used to share information across programs.	`{"a":3, "b":"fish"}`  

### General Syntax:  

Ternary Operator - `a === 1 ? console.log(1) : console.log('not 1');`  

For Loop - 
```
for (let i = 0; i < 2; i++) {
  console.log(i);
}
```  

Do While - 
```
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1
```  

while - 
```
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1
```

For In-
The for in statement iterates over an object's property names.
```
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b
```

For Of - 
The for of statement iterates over an iterable's (Array, Map, Set, ...) property values.
```
const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'
```  

`break` - exits a loop  
`continue` - goes to next iteration  

=> Function -
```
const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
```

=> functions can also use {} to change functionality - 
```
() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3
```


### String:  
strings are indicated using `''` `""` or backticks. backticks indicate a string literal that may contain JavaScript that is evaluated in place and concatenated into the string. A string literal replacement specifier is declared with a dollar sign followed by a curly brace pair. Anything inside the curly braces is evaluated as JavaScript. You can also use backticks to create multiline strings without having to explicitly escape the newline characters using \n.  
```
'quoted text'; // " also works

const l = 'literal';
console.log(`string ${l + (1 + 1)} text`);
// OUTPUT: string literal2 text
```
**String Functions:**  
`length`	The number of characters in the string  
`indexOf()`	The starting index of a given substring  
`split()`	Split the string into an array on the given delimiter string  
`startsWith()`	True if the string has a given prefix  
`endsWith()`	True if the string has a given suffix  
`toLowerCase()`	Converts all characters to lowercase  
```
const s = 'Example:조선글';

console.log(s.length);
// OUTPUT: 11
console.log(s.indexOf('조선글'));
// OUTPUT: 8
console.log(s.split(':'));
// OUTPUT: ['Example', '조선글']
console.log(s.startsWith('Ex'));
// OUTPUT: true
console.log(s.endsWith('조선글'));
// OUTPUT: true
console.log(s.toLowerCase());
// OUTPUT: example:조선글
```

### Arrays:  
**Array functions:**  
`push`	Add an item to the end of the array	`a.push(4)`  
`pop`	Remove an item from the end of the array	`x = a.pop()`  
`slice`	Return a sub-array	`a.slice(1,-1)`  
`sort`	Run a function to sort an array in place	`a.sort((a,b) => b-a)`  
`values`	Creates an iterator for use with a for of loop	`for (i of a.values()) {...}`  
`find`	Find the first item satisfied by a test function	`a.find(i => i < 2)`  
`forEach`	Run a function on each array item	`a.forEach(console.log)`  
`reduce`	Run a function to reduce each array item to a single item	`a.reduce((a, c) => a + c)`  
`map`	Run a function to map an array to a new array	`a.map(i => i+i)`  
`filter`	Run a function to remove items	`a.filter(i => i%2)`  
`every`	Run a function to test if all items match	`a.every(i => i < 3)`  
`some`	Run a function to test if any items match	`a.some(i => i < 1)`  


## *Built in Javascript Functions:*
`console.log(message)` - outputs a message to console. placeholders can be used in the message to allow for the insertion of variables into the message, %s for strings:  
%d or %i for integers  
%f for floating-point numbers  
%o or %O for objects  
%c for CSS styling on the output  

`console.time('timerlabel')` and `console.timeEnd('timerlabel')` - time starts a timer and outputs the time elapsed when timeEnd is called with the same label. can be used to see how long a piece of code is taking to run.  

`console.count('counterlabel')` outputs the number of times a count function with that label has been run, useful for checking to see how often a block of code runs.  


## Using Javascript in HTML:  

Javascript, similarly to CSS, can be accesed in the HTML by importing a javascript page in the HTML file, or by directly inserting it within a <script> tag.   

### Useful tag attributes for Javascript:  
`onclick = "functionName()"` allows for a call to any linked javascript function when the tag is clicked.  

## JSON:  
Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square brackets and commas delimit arrays, and strings are always delimited with double quotes.  

Here is an example of a JSON document.  
```
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
```  

You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions.  
```
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
```

## Objects and Classes:  
Objects can be created with the new operator. This causes the object's constructor to be called. Once declared you can add properties to the object by simply referencing the property name in an assignment. Any type of variable can be assigned to a property. This includes a sub-object, array, or function. The properties of an object can be referenced either with dot (obj.prop) or bracket notation (obj['prop']).  
```
const obj = new Object({ a: 3 });
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
```  

### Object built-in Functions:   
`entries`	Returns an array of key value pairs  
`keys`	Returns an array of keys  
`values`	Returns an array of values  

### Constructors:   
A constructor is a function that returns an object. Objects have "this" pointers, ass seen below, that operate similarly to python "self".  
```
function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

### Classes:  
You can use classes to define objects. Using a class clarifies the intent to create a reusable component rather than a one-off object. Class declarations look similar to declaring an object, but classes have an explicit constructor and assumed function declarations. The person object from above would look like the following when converted to a class.  
```
class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```  
You can make properties and functions of classes private by prefixing them with a #.  
```
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

const p = new Person('Eich');
p.#name = 'Lie';
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
```   

Classes can be extended by using the extends keyword to define inheritance. Parameters that need to be passed to the parent class are delivered using the super function. Any functions defined on the child that have the same name as the parent override the parent's implementation. A parent's function can be explicitly accessed using the super keyword.  
```
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer
```

## RegEx:  
You can create a regular expression using the class constructor or a regular expression literal.  
```
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
```  
The string class has several functions that accept regular expressions. This includes match, replace, search, and split. For a quick test to see if there is a match you can use the regular expression object's test function.
```  
const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true
```

## Rest & Spread:
Sometimes you want a function to take an unknown number of parameters. JavaScript provides the rest syntax to make this easier. To turn the last parameter of any function into a rest parameter you prefix it with three periods. You can then call it with any number of parameters and they are all automatically combined into an array.
```
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
```  
Note that you can only make the last parameter a rest parameter. Otherwise JavaScript would not know which parameters to combine into the array.  

Spread does the opposite of rest. It take an object that is iterable (e.g. array or string) and expands it into a function's parameters.
```
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
```

## Exceptions & Error Handling:  
JS has try, catch, and throw capabilities, which match up pretty well with pythons try, except, and raise. On top of a catch, you can add an additionally, which will run whether or not an error is caught.   
```
try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}
```

## Destructuring:  
Destructuring, not to be confused with destructing, is the process of pulling individual items out of an existing one, or removing structure. You can do this with either arrays or objects. This is helpful when you only care about a few items in the original structure.  

An example of destructuring arrays looks like the following.  
```
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
```
Note that even though it looks like you are declaring an array with the syntax on the left side of the expression, it is only specifying that you want to destructure those values out of the array.  

You can also combine multiple items from the original object using rest syntax.  
```
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
```

## "This":  
The keyword this represents a variable that points to an object that contains the context within the scope of the currently executing line of code. The this variable is automatically declared and you can reference this anywhere in a JavaScript program. Because the value of this depends upon the context in which it is referenced, there are three different contexts to which this can refer:

Global - When this is referenced outside a function or object it refers to the globalThis object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser's window object.
Function - When this is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running in JavaScript strict mode, a global function's this variable is undefined instead of globalThis.
Object - When this is referenced in an object it refers to the object.  

## DOM:  
The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.  
Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The DOM Element Interface provides the means for iterating child elements, accessing the parent element, and manipulating the element's attributes. From your JavaScript code, you can start with the document variable and walk through every element in the tree.  

You can provide a CSS selector to the querySelectorAll function in order to select elements from the document. The textContent property contains all of the element's text. You can even access a textual representation of an element's HTML content with the innerHTML property.
```
const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
```

The DOM supports the ability to insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.  
```
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
```  
To delete elements call the removeChild function on the parent element.
```
function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');
```  
The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first div element in the DOM and replaces all the HTML it contains.
```
const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
```  
However, directly injecting HTML as a block of text is a common attack vector for hackers.  

### Listeners:  
All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called event listeners. Here is an example of an event listener that gets called when an element gets clicked.
```
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```
There are lots of possible events that you can add a listener to. This includes things like mouse, keyboard, scrolling, animation, video, audio, WebSocket, and clipboard events. You can see the full list on MDN. Here are a few of the more commonly used events.  

`Clipboard`	Cut, copied, pasted  
`Focus`	An element gets focus  
`Keyboard`	Keys are pressed  
`Mouse`	Click events  
`Text selection`	When text is selected  

## Local Storage:  
The browser's localStorage API provides the ability to persistently store and retrieve data (i.e. scores, usernames, etc.,) on a user's browser across user sessions and HTML page renderings. For example, your frontend JavaScript code could store a user's name on one HTML page, and then retrieve the name later when a different HTML page is loaded.  

Functions for local storage:  
`setItem(name, value)`	Sets a named item's value into local storage  
`getItem(name)`	Gets a named item's value from local storage  
`removeItem(name)`	Removes a named item from local storage  
`clear()`	Clears all items in local storage  

A local storage value must be of type string, number, or boolean. If you want to store a JavaScript object or array, then you must first convert it to a JSON string with JSON.stringify() on insertion, and parse it back to JavaScript with JSON.parse() when retrieved.  

## Promises:  
The rendering process of your HTML executes on a single thread. That means that you cannot take a long time processing JavaScript on the main rendering thread. Long running, or blocking tasks, should be executed with the use of a JavaScript Promise. The execution of a promise allows the main rendering thread to continue while some action is executed in the background. You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs. The state of the promise execution is always in one of three possible states.  

pending - Currently running asynchronously  
fulfilled - Completed successfully  
rejected - Failed to complete  

We need to be able to set the state to fulfilled when things complete correctly, or to rejected when an error happens. The promise executor function takes two functions as parameters, resolve and reject. Calling resolve sets the promise to the fulfilled state, and calling reject sets the promise to the rejected state.  



