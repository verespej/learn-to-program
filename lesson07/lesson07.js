javascript: (function(){
	var element = document.createElement('script');
	element.src = '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js';
	document.getElementsByTagName('head')[0].appendChild(element);

	var name = $('.full-name').text();
	$('.profile-card').append(name);
})();

