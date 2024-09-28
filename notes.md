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


### *Animation:*  

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
