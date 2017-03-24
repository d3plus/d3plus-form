/**
    @external BaseClass
    @see https://github.com/d3plus/d3plus-common#BaseClass
*/
import {select} from "d3-selection";
import {accessor, BaseClass, constant, stylize} from "d3plus-common";

/**
    @class Button
    @extends external:BaseClass
    @desc Creates a set of HTML radio input elements.
*/
export default class Button extends BaseClass {

  /**
      @memberof Button
      @desc Invoked when creating a new class instance, and sets any default parameters.
      @private
  */
  constructor() {

    super();

    this._buttonStyle = {
      margin: "0 5px"
    };
    this._data = [];
    this._text = accessor("text");
    this._value = accessor("value");

  }

  /**
      @memberof Button
      @desc Renders the element to the page.
      @chainable
  */
  render() {

    if (this._container === void 0) this.container(select("body").append("div").node());

    let container = this._container.selectAll(`div#d3plus-Form-${this._uuid}`).data([0]);
    const svg = this._container.node().tagName.toLowerCase() === "foreignobject";

    container = container.enter().append(svg ? "xhtml:div" : "div")
        .attr("id", `d3plus-Form-${this._uuid}`)
        .attr("class", "d3plus-Form d3plus-Form-Button")
      .merge(container);

    let button = container.selectAll("button")
      .data(this._data, (d, i) => this._value(d, i));

    button.exit().remove();

    button = button.enter().append("button")
        .attr("class", "d3plus-Button")
        .attr("type", "button")
      .merge(button)
        .call(stylize, this._buttonStyle)
        .html((d, i) => this._text(d, i));

    for (const event in this._on) {
      if ({}.hasOwnProperty.call(this._on, event)) button.on(event, this._on[event]);
    }

    return this;

  }

  /**
      @memberof Button
      @desc Sets the css styles for the <input type="radio"> elements.
      @param {Object} [*value*]
      @chainable
  */
  buttonStyle(_) {
    return arguments.length ? (this._buttonStyle = _, this) : this._buttonStyle;
  }

  /**
      @memberof Button
      @desc If *selector* is specified, sets the SVG container element to the specified d3 selector or DOM element and returns the current class instance. If *selector* is not specified, returns the current SVG container element, which is `undefined` by default.
      @param {String|HTMLElement} [*selector*]
      @chainable
  */
  container(_) {
    return arguments.length ? (this._container = select(_), this) : this._container;
  }

  /**
      @memberof Radio
      @desc Defines the array of values to be created as <button> tags. If no value is passed, the current array is returned.
      @param {Array} [*value* = []]
      @chainable
  */
  data(_) {
    return arguments.length ? (this._data = _, this) : this._data;
  }

  /**
      @memberof Button
      @desc Sets the inner text for each <button> element.
      @param {Function|String} [*value* = function(d) { return d.text; }]
      @chainable
  */
  text(_) {
    return arguments.length ? (this._text = typeof _ === "function" ? _ : constant(_), this) : this._text;
  }

  /**
      @memberof Button
      @desc Sets the value for each <button> element.
      @param {Function} [*value* = function(d) { return d.value; }]
      @chainable
  */
  value(_) {
    return arguments.length ? (this._value = _, this) : this._value;
  }

}
