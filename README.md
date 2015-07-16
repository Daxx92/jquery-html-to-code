# HTMLtoCode jQuery Plugin

## What does it do?

This plugin allows to show the code used to create a piece of html, which helps when building documentation.

Instead of having to duplicate code to show both the rendered html and its source, simply wrap it within an element, set its class (which you can define) and let HTMLtoCode do the rest.

## Dependencies

- [jQuery](https://jquery.com/)

## Usage

Simply wrap the html part you want to get the code inside a div, give this div a descriptive class, select it with jQuery and call HTMLtoCode on it.

**It's important to wrap the code in another element, since only what is inside appears**

### Options

HTMLtoCode has two options that can be set when it's called by passing a configuration object.

|Option    | Default                           | Description                                                                                  |
|:--------:|:---------------------------------:|:--------------------------------------------------------------------------------------------:|
| target   | ``` .html-to-code ```             | Query selector that points to an element in the template markup where code is inserted       |
| template | ``` <pre><code></code></pre> ```  | HTML where the code will be displayed, one element should be returned by ``` $( target ) ``` |

### Usage examples

**HTML**

```html

	<div class="wrapper">
		<h1> Hello Input! </h1>
		<input type="text" name="input" id="input" /> 
	</div>
```

**Default Parameters**

```javascript

	$('div.wrapper').HTMLtoCode( options );

```

**Custom parameters**

```javascript

	var options = {
		target: '.code',
		template: '<div> <code class=".code"> </code> </div>'
	};

	$('div.wrapper').HTMLtoCode( options );

```


[jQuery HTML to Code in action](http://daxx92.github.io/jquery-html-to-code/)

## License

Licensed under the MIT and GPL licenses.
