/**
 * JQuery plugin
 * Extracts the code from rendered html and displays it
 *
 * @author   Daniel Chavira <danielchavira1@gmail.com>
 */
(function($) {

	$.fn.htmlToCode = function( options ) {

		var template = '<pre><code></code></pre>';

		//Default settings
		var settings = $.extend({
			classes: null, //Classes to add to the rendered pre
			callback: null,
		}, options);

		return this.each( function() {
			var $this = $( this );
			var html = $this.html();
			var $pre = $this.append( template ).find('pre');
			var $code = $this.find('code');
			$code.text( html );


			if ( settings.classes ) {
				$(this).find('pre').addClass( settings.classes );
			}

			if ( $.isFunction( settings.callback ) ) {
				settings.callback.call(this);
			}

		});

	};

}(jQuery));