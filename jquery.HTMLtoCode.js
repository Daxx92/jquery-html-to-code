/**
 * JQuery plugin
 * Extracts the code from rendered html and displays it
 *
 * @author   Daniel Chavira <danielchavira1@gmail.com>
 */
(function($) {

	$.fn.HTMLtoCode = function( options ) {

		//Needed to identify where to append the code, can be anything jQuery can select
		var target = '.html-to-code'; 
		//HTML that will be appended to parent element
		var template = '<pre><code class="html-to-code"></code></pre>';

		//Default settings
		var settings = $.extend({
			target: target, //Where to put the HTML in
			template: template //What to wrap the HTML code in
		}, options);

		//Loop through the elements and return it to allow method chaining
		return this.each( function() {
			//Save the element for future reference
			var $this = $( this );
			//Get the HTML, ONLY what's inside the element
			var html = $this.html();

			//Append the template
			$this.append( settings.template )

			//Find target and add the code as escaped HTML
			var $target = $this.find( settings.target ).text( html );

			//If a callback was passed, call it
			if ( $.isFunction( settings.callback ) ) {
				settings.callback.call(this);
			}

		});

	};

}(jQuery));