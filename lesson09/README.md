# Lesson 09

The difference between lesson 08ers and us? We make this look good!

```
javascript: (function(){
	var element = document.createElement('script');
	element.src = '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js';
	document.getElementsByTagName('head')[0].appendChild(element);

	var name = $('.full-name').text();
	var company = $('header a[name="company"]').first().text();
	var title = $('header a[name="title"]').first().text().replace(/,/g, ' |');
	$('.profile-card').append(name + ', ' + company + ', ' + title);
})();
```

## About

Take a look inside lesson09.js (copied above for convenience).

\[Todo...\]

## What to do

1. Open lesson09.js and copy the contents.
1. Visit the [Javascript Compressor](http://www.minifyjs.com/javascript-compressor/).
1. Paste the contents into the upper text box there and click 'Compress JavaScript'.
1. Copy the resulting output from the lower text box.
1. Right-click the bookmarklet you create in lesson 01 and click 'Edit...'.
1. Delete the text in the 'URL' textbox and paste the text you copied.
1. Click 'Save'.
1. Open a LinkedIn profile.
1. Click on your updated bookmarklet.

