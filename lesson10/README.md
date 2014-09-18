# Lesson 10

Unleash your inner programmer!

```
javascript: (function(){
	var element = document.createElement('script');
	element.src = '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js';
	document.getElementsByTagName('head')[0].appendChild(element);

	jQuery('.views-row').each(function(index) {
		var name = jQuery(this).find('.views-field-nothing').text().trim();
		if (name.length > 0) {
			var title = jQuery(this).find('.views-field-field-badge-job-title').text().trim().replace(',', '');
			var company = jQuery(this).find('.views-field-field-badge-org').text().trim().replace(',', '');
			jQuery('.view-filters').append(name + ', ' + company + ', ' + title + '<br />');
		}
	});
})();
```

## About

Take a look inside lesson10.js (copied above for convenience).

\[Todo...\]

## What to do

1. Open lesson10.js and copy the contents.
1. Visit the [Javascript Compressor](http://www.minifyjs.com/javascript-compressor/).
1. Paste the contents into the upper text box there and click 'Compress JavaScript'.
1. Copy the resulting output from the lower text box.
1. Right-click the bookmarklet you create in lesson 01 and click 'Edit...'.
1. Delete the text in the 'URL' textbox and paste the text you copied.
1. Click 'Save'.
1. Visit [DrupalCon 2014](https://austin2014.drupal.org/community).
1. Click on your updated bookmarklet.
1. Scroll down to see the data scraped from the page.
1. Click the link to the next page and repeat.

