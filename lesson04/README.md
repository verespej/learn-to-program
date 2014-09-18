# Lesson 04

jQuery!

```
javascript: (function(){
	var element = document.createElement('script');
	element.src = '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js';
	document.getElementsByTagName('head')[0].appendChild(element);

	alert('Page title: ' + document.title);
})();
```

## About

Take a look inside lesson04.js (copied above for convenience).

This is another lesson where what our program does is the same as 
in the previous lesson. However, we're adding a very powerful tool 
here called jQuery.

jQuery makes it much easier to work with the webpage's document, 
including allowing us to find items on the page and even change 
the page!

There a fair amount going on here, so we won't cover it all, but 
let's take a look at it from a high level.

A webpage document is formatted as HTML. HTML is composed of 
'elements', which represent different parts of the webpage. For 
example, an image is contained in an 'img' element.

When javascript is used on a webpage, it's contained in an element 
too. Not surprisingly, the type of element that contains javascript 
is a 'script' element.

In the code here, we're:

1. Telling the document to create a script element for us
1. Setting the content of the script element jQuery by pointing it to a URL that holds jQuery
1. Adding the script element to the document (specifically, we are attaching it to another element in the document that's a 'head' element)

When this program executes, it will load jQuery, then create the 
same alert we created in lesson 03.

## What to do

1. Open lesson04.js and copy the contents.
1. Visit the [Javascript Compressor](http://www.minifyjs.com/javascript-compressor/).
1. Paste the contents into the upper text box there and click 'Compress JavaScript'.
1. Copy the resulting output from the lower text box.
1. Right-click the bookmarklet you create in lesson 01 and click 'Edit...'.
1. Delete the text in the 'URL' textbox and paste the text you copied.
1. Click 'Save'.
1. Click on your updated bookmarklet. Even though we added jQuery, it should behave exactly the same as lesson 03 behaved.

