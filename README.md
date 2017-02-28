# d3plus-form

[![NPM Release](http://img.shields.io/npm/v/d3plus-form.svg?style=flat)](https://www.npmjs.org/package/d3plus-form)
[![Build Status](https://travis-ci.org/d3plus/d3plus-form.svg?branch=master)](https://travis-ci.org/d3plus/d3plus-form)
[![Dependency Status](http://img.shields.io/david/d3plus/d3plus-form.svg?style=flat)](https://david-dm.org/d3plus/d3plus-form)
[![Slack](https://img.shields.io/badge/Slack-Click%20to%20Join!-green.svg?style=social)](https://goo.gl/forms/ynrKdvusekAwRMPf2)

Javascript rendered input forms.

## Installing

If you use NPM, `npm install d3plus-form`. Otherwise, download the [latest release](https://github.com/d3plus/d3plus-form/releases/latest). The released bundle supports AMD, CommonJS, and vanilla environments. Create a [custom bundle using Rollup](https://github.com/rollup/rollup) or your preferred bundler. You can also load directly from [d3plus.org](https://d3plus.org):

```html
<script src="https://d3plus.org/js/d3plus-form.v0.2.full.min.js"></script>
```


## API Reference
### Classes

<dl>
<dt><a href="#Radio">Radio</a> ⇐ <code><a href="https://github.com/d3plus/d3plus-common#BaseClass">BaseClass</a></code></dt>
<dd></dd>
<dt><a href="#Select">Select</a> ⇐ <code><a href="https://github.com/d3plus/d3plus-common#BaseClass">BaseClass</a></code></dt>
<dd></dd>
</dl>

<a name="Radio"></a>

### Radio ⇐ <code>[BaseClass](https://github.com/d3plus/d3plus-common#BaseClass)</code>
**Kind**: global class  
**Extends:** <code>[BaseClass](https://github.com/d3plus/d3plus-common#BaseClass)</code>  

* [Radio](#Radio) ⇐ <code>[BaseClass](https://github.com/d3plus/d3plus-common#BaseClass)</code>
    * [new Radio()](#new_Radio_new)
    * [.render()](#Radio.render) ↩︎
    * [.checked([*value*])](#Radio.checked) ↩︎
    * [.container([*selector*])](#Radio.container) ↩︎
    * [.labelStyle([*value*])](#Radio.labelStyle) ↩︎
    * [.legend([*value*])](#Radio.legend) ↩︎
    * [.legendStyle([*value*])](#Radio.legendStyle) ↩︎
    * [.options([*value*])](#Radio.options) ↩︎
    * [.radioStyle([*value*])](#Radio.radioStyle) ↩︎
    * [.text([*value*])](#Radio.text) ↩︎
    * [.value([*value*])](#Radio.value) ↩︎

<a name="new_Radio_new"></a>

#### new Radio()
Creates a set of HTML radio input elements.

<a name="Radio.render"></a>

#### Radio.render() ↩︎
Renders the element to the page.

**Kind**: static method of <code>[Radio](#Radio)</code>  
**Chainable**  
<a name="Radio.checked"></a>

#### Radio.checked([*value*]) ↩︎
Defines the checked input.

**Kind**: static method of <code>[Radio](#Radio)</code>  
**Chainable**  

| Param | Type |
| --- | --- |
| [*value*] | <code>function</code> | 

<a name="Radio.container"></a>

#### Radio.container([*selector*]) ↩︎
If *selector* is specified, sets the SVG container element to the specified d3 selector or DOM element and returns the current class instance. If *selector* is not specified, returns the current SVG container element, which is `undefined` by default.

**Kind**: static method of <code>[Radio](#Radio)</code>  
**Chainable**  

| Param | Type |
| --- | --- |
| [*selector*] | <code>String</code> &#124; <code>HTMLElement</code> | 

<a name="Radio.labelStyle"></a>

#### Radio.labelStyle([*value*]) ↩︎
Sets the css styles for the <label> element.

**Kind**: static method of <code>[Radio](#Radio)</code>  
**Chainable**  

| Param | Type |
| --- | --- |
| [*value*] | <code>Object</code> | 

<a name="Radio.legend"></a>

#### Radio.legend([*value*]) ↩︎
Creates a <legend> tag for the <select> element.

**Kind**: static method of <code>[Radio](#Radio)</code>  
**Chainable**  

| Param | Type |
| --- | --- |
| [*value*] | <code>String</code> | 

<a name="Radio.legendStyle"></a>

#### Radio.legendStyle([*value*]) ↩︎
Sets the css styles for the <legend> element.

**Kind**: static method of <code>[Radio](#Radio)</code>  
**Chainable**  

| Param | Type |
| --- | --- |
| [*value*] | <code>Object</code> | 

<a name="Radio.options"></a>

#### Radio.options([*value*]) ↩︎
Defines the array of values to be used as <option> tags inside of the <select> element. If no value is passed, the current array is returned.

**Kind**: static method of <code>[Radio](#Radio)</code>  
**Chainable**  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>Array</code> | <code>[]</code> | 

<a name="Radio.radioStyle"></a>

#### Radio.radioStyle([*value*]) ↩︎
Sets the css styles for the <input type="radio"> elements.

**Kind**: static method of <code>[Radio](#Radio)</code>  
**Chainable**  

| Param | Type |
| --- | --- |
| [*value*] | <code>Object</code> | 

<a name="Radio.text"></a>

#### Radio.text([*value*]) ↩︎
Sets the inner text for each <option> element.

**Kind**: static method of <code>[Radio](#Radio)</code>  
**Chainable**  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | <code>function(d) { return d.text; }</code> | 

<a name="Radio.value"></a>

#### Radio.value([*value*]) ↩︎
Sets the value for each <option> element.

**Kind**: static method of <code>[Radio](#Radio)</code>  
**Chainable**  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> | <code>function(d) { return d.value; }</code> | 

<a name="Select"></a>

### Select ⇐ <code>[BaseClass](https://github.com/d3plus/d3plus-common#BaseClass)</code>
**Kind**: global class  
**Extends:** <code>[BaseClass](https://github.com/d3plus/d3plus-common#BaseClass)</code>  

* [Select](#Select) ⇐ <code>[BaseClass](https://github.com/d3plus/d3plus-common#BaseClass)</code>
    * [new Select()](#new_Select_new)
    * [.render()](#Select.render) ↩︎
    * [.container([*selector*])](#Select.container) ↩︎
    * [.label([*value*])](#Select.label) ↩︎
    * [.labelStyle([*value*])](#Select.labelStyle) ↩︎
    * [.options([*value*])](#Select.options) ↩︎
    * [.optionStyle([*value*])](#Select.optionStyle) ↩︎
    * [.selected([*value*])](#Select.selected) ↩︎
    * [.selectStyle([*value*])](#Select.selectStyle) ↩︎
    * [.text([*value*])](#Select.text) ↩︎
    * [.value([*value*])](#Select.value) ↩︎

<a name="new_Select_new"></a>

#### new Select()
Creates an HTML select element.

<a name="Select.render"></a>

#### Select.render() ↩︎
Renders the element to the page.

**Kind**: static method of <code>[Select](#Select)</code>  
**Chainable**  
<a name="Select.container"></a>

#### Select.container([*selector*]) ↩︎
If *selector* is specified, sets the SVG container element to the specified d3 selector or DOM element and returns the current class instance. If *selector* is not specified, returns the current SVG container element, which is `undefined` by default.

**Kind**: static method of <code>[Select](#Select)</code>  
**Chainable**  

| Param | Type |
| --- | --- |
| [*selector*] | <code>String</code> &#124; <code>HTMLElement</code> | 

<a name="Select.label"></a>

#### Select.label([*value*]) ↩︎
Creates a <label> tag for the <select> element.

**Kind**: static method of <code>[Select](#Select)</code>  
**Chainable**  

| Param | Type |
| --- | --- |
| [*value*] | <code>String</code> | 

<a name="Select.labelStyle"></a>

#### Select.labelStyle([*value*]) ↩︎
Sets the css styles for the <label> element.

**Kind**: static method of <code>[Select](#Select)</code>  
**Chainable**  

| Param | Type |
| --- | --- |
| [*value*] | <code>Object</code> | 

<a name="Select.options"></a>

#### Select.options([*value*]) ↩︎
Defines the array of values to be used as <option> tags inside of the <select> element. If no value is passed, the current array is returned.

**Kind**: static method of <code>[Select](#Select)</code>  
**Chainable**  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>Array</code> | <code>[]</code> | 

<a name="Select.optionStyle"></a>

#### Select.optionStyle([*value*]) ↩︎
Sets the css styles for the <option> elements.

**Kind**: static method of <code>[Select](#Select)</code>  
**Chainable**  

| Param | Type |
| --- | --- |
| [*value*] | <code>Object</code> | 

<a name="Select.selected"></a>

#### Select.selected([*value*]) ↩︎
Defines the selected option.

**Kind**: static method of <code>[Select](#Select)</code>  
**Chainable**  

| Param | Type |
| --- | --- |
| [*value*] | <code>function</code> | 

<a name="Select.selectStyle"></a>

#### Select.selectStyle([*value*]) ↩︎
Sets the css styles for the <select> element.

**Kind**: static method of <code>[Select](#Select)</code>  
**Chainable**  

| Param | Type |
| --- | --- |
| [*value*] | <code>Object</code> | 

<a name="Select.text"></a>

#### Select.text([*value*]) ↩︎
Sets the inner text for each <option> element.

**Kind**: static method of <code>[Select](#Select)</code>  
**Chainable**  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> &#124; <code>String</code> | <code>function(d) { return d.text; }</code> | 

<a name="Select.value"></a>

#### Select.value([*value*]) ↩︎
Sets the value for each <option> element.

**Kind**: static method of <code>[Select](#Select)</code>  
**Chainable**  

| Param | Type | Default |
| --- | --- | --- |
| [*value*] | <code>function</code> | <code>function(d) { return d.value; }</code> | 



###### <sub>Documentation generated on Tue, 28 Feb 2017 19:30:22 GMT</sub>
