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

