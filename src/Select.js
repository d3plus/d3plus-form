/**
    @external BaseClass
    @see https://github.com/d3plus/d3plus-common#BaseClass
*/
import {select} from "d3-selection";
import {accessor, BaseClass, constant, stylize} from "d3plus-common";

/**
    @class Select
    @extends external:BaseClass
    @desc Creates an HTML select element.
*/
export default class Select extends BaseClass {

  /**
      @memberof Select
      @desc Invoked when creating a new class instance, and sets any default parameters.
      @private
  */
  constructor() {

    super();

    this._labelStyle = {
      "font-family": "Verdana",
      "font-size": "12px",
      "margin-right": "5px"
    };
    this._options = [];
    this._optionStyle = {
      "font-family": "Verdana",
      "font-size": "12px"
    };
    this._selectStyle = {
      "background": "#fafafa",
      "border": "1px solid #ccc",
      "border-radius": "0",
      "font-family": "Verdana",
      "font-size": "12px",
      "outline": "0",
      "padding": "3px 5px 4px"
    };
    this._text = accessor("text");
    this._value = accessor("value");

  }

  /**
      @memberof Select
      @desc Renders the element to the page.
      @chainable
  */
  render() {

    if (this._container === void 0) this.container(select("body").append("div").node());
    const that = this;

    let container = this._container.selectAll(`div#d3plus-Form-${this._uuid}`).data([0]);
    const svg = this._container.node().tagName.toLowerCase() === "foreignobject";

    container = container.enter().append(svg ? "xhtml:div" : "div")
        .attr("id", `d3plus-Form-${this._uuid}`)
        .attr("class", "d3plus-Form d3plus-Form-Select")
      .merge(container);

    let select = container.selectAll(`select#d3plus-Select-${this._uuid}`).data([0]);
    select = select.enter().append("select")
        .attr("id", `d3plus-Select-${this._uuid}`)
        .attr("class", "d3plus-Select")
      .merge(select)
        .call(stylize, this._selectStyle)
        .on("change.d3plus", function() {
          that.selected(this.value);
        });

    for (const event in this._on) {
      if ({}.hasOwnProperty.call(this._on, event)) select.on(event, this._on[event]);
    }

    const options = select.selectAll("option")
      .data(this._options, (d, i) => this._value(d, i));

    options.exit().remove();

    options.enter().append("option")
        .attr("class", "d3plus-Option")
      .merge(options)
        .call(stylize, this._optionStyle)
        .attr("value", (d, i) => this._value(d, i))
        .html((d, i) => this._text(d, i))
        .property("selected", (d, i) => this._selected === void 0 ? !i : `${this._value(d, i)}` === `${this._selected}`);

    const label = container.selectAll(`label#d3plus-Label-${this._uuid}`)
      .data(this._label ? [0] : []);
    label.exit().remove();
    label.enter().insert("label", `#d3plus-Select-${this._uuid}`)
        .attr("id", `d3plus-Label-${this._uuid}`)
        .attr("class", "d3plus-Label")
        .attr("for", `d3plus-Select-${this._uuid}`)
      .merge(label)
        .call(stylize, this._labelStyle)
        .html(this._label);

    return this;

  }

  /**
      @memberof Select
      @desc If *selector* is specified, sets the SVG container element to the specified d3 selector or DOM element and returns the current class instance. If *selector* is not specified, returns the current SVG container element, which is `undefined` by default.
      @param {String|HTMLElement} [*selector*]
      @chainable
  */
  container(_) {
    return arguments.length ? (this._container = select(_), this) : this._container;
  }

  /**
      @memberof Select
      @desc Creates a <label> tag for the <select> element.
      @param {String} [*value*]
      @chainable
  */
  label(_) {
    return arguments.length ? (this._label = _, this) : this._label;
  }

  /**
      @memberof Select
      @desc Sets the css styles for the <label> element.
      @param {Object} [*value*]
      @chainable
  */
  labelStyle(_) {
    return arguments.length ? (this._labelStyle = _, this) : this._labelStyle;
  }

  /**
      @memberof Select
      @desc Defines the array of values to be used as <option> tags inside of the <select> element. If no value is passed, the current array is returned.
      @param {Array} [*value* = []]
      @chainable
  */
  options(_) {
    return arguments.length ? (this._options = _, this) : this._options;
  }

  /**
      @memberof Select
      @desc Sets the css styles for the <option> elements.
      @param {Object} [*value*]
      @chainable
  */
  optionStyle(_) {
    return arguments.length ? (this._optionStyle = _, this) : this._optionStyle;
  }

  /**
      @memberof Select
      @desc Defines the selected option.
      @param {Function} [*value*]
      @chainable
  */
  selected(_) {
    return arguments.length ? (this._selected = _, this) : this._selected;
  }

  /**
      @memberof Select
      @desc Sets the css styles for the <select> element.
      @param {Object} [*value*]
      @chainable
  */
  selectStyle(_) {
    return arguments.length ? (this._selectStyle = _, this) : this._selectStyle;
  }

  /**
      @memberof Select
      @desc Sets the inner text for each <option> element.
      @param {Function|String} [*value* = function(d) { return d.text; }]
      @chainable
  */
  text(_) {
    return arguments.length ? (this._text = typeof _ === "function" ? _ : constant(_), this) : this._text;
  }

  /**
      @memberof Select
      @desc Sets the value for each <option> element.
      @param {Function} [*value* = function(d) { return d.value; }]
      @chainable
  */
  value(_) {
    return arguments.length ? (this._value = _, this) : this._value;
  }

}
