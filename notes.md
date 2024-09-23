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
