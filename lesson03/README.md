# Lesson 03

Okay, time for something a bit more interesting!

```
javascript: (function(){
  var pageTitle = document.title;
  alert('Page title: ' + pageTitle);
})();
```

## About

Look inside lesson03.js (copied above for convenience).

Although this still looks like a minor update, there are a bunch 
important concepts covered here. We've added a 'variable' by using 
the keyword `var`. As you'll remember from back in algebra, a 
variable can be thought of as a placeholder that can contain any 
value. In javascript, variables aren't just limited to holding 
numbers, but can hold text (and more!).

Under the covers, HTML is a document. In javascript you can access 
the HTML document of a webpage by using the `document` variable. 
This is a special variable that's built into javascript, so you 
don't have to use `var` to create it.

When you use `.` on a variable, you access it's contents. Here, 
we're retrieving the webpage's title from the webpage document 
when we do `document.title`.

So, to sum what's happening in line 2 of the code, we're getting 
the webpage's title from the webpage document and storing it in 
the variable called 'pageTitle'.

In javascript, phrases/sentences (called 'strings' in javascript) 
can be created by 'adding' them together. This is what's happening 
on line 3. We add the contents of the variable pageTitle to the 
string 'Page title: '.

Let's give this a try!

## What to do

1. Open lesson03.js and copy the contents.
1. Visit the [Javascript Compressor](http://www.minifyjs.com/javascript-compressor/).
1. Paste the contents into the upper text box there and click 'Compress JavaScript'.
1. Copy the resulting output from the lower text box.
1. Right-click the bookmarklet you create in lesson 01 and click 'Edit...'.
1. Delete the text in the 'URL' textbox and paste the text you copied.
1. Click 'Save'.
1. Click on your updated bookmarklet.

