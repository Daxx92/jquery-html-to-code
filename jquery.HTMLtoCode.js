/**
 * JQuery plugin
 * Extracts the code from rendered html and displays it
 *
 * @author   Daniel Chavira <danielchavira1@gmail.com>
 */
(function($) {

	$.fn.htmlToCode = function( options ) {

		//Code to append to the element
		var template = '<pre><code></code></pre>';

		//Default settings
		var settings = $.extend({
			classes: null,  //Classes to add to the rendered pre
			callback: null, //Function callback
		}, options);

		//Loop through the elements
		return this.each( function() {
			//Save the element for future reference
			var $this = $( this );
			//Get the HTML, ONLY what's inside the element
			var html = $this.html();
			//Append the template (pre>code)
			$this.append( template )
			//Save pre reference
			var $pre = $this.find('pre');
			//Save code reference
			var $code = $this.find('code');
			//Set code content to be the escaped HTML
			$code.text( html );

			//If any classes are defined, add them
			if ( settings.classes ) {
				$(this).find('pre').addClass( settings.classes );
			}

			//If a callback was passed, call it
			if ( $.isFunction( settings.callback ) ) {
				settings.callback.call(this);
			}

		});

	};

}(jQuery));