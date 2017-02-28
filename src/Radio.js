/**
    @external BaseClass
    @see https://github.com/d3plus/d3plus-common#BaseClass
*/
import {select} from "d3-selection";
import {accessor, BaseClass, constant, stylize} from "d3plus-common";

/**
    @class Radio
    @extends external:BaseClass
    @desc Creates a set of HTML radio input elements.
*/
export default class Radio extends BaseClass {

  /**
      @memberof Radio
      @desc Invoked when creating a new class instance, and sets any default parameters.
      @private
  */
  constructor() {

    super();

    this._labelStyle = {
      "font-family": "Verdana",
      "font-size": "12px",
      "padding-right": "5px"
    };
    this._legendStyle = {
      "font-family": "Verdana",
      "font-size": "12px",
      "padding-right": "5px"
    };
    this._options = [];
    this._radioStyle = {
      "margin-right": "10px"
    };
    this._text = accessor("text");
    this._value = accessor("value");

  }

  /**
      @memberof Radio
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
        .attr("class", "d3plus-Form d3plus-Form-Radio")
      .merge(container);

    let radios = container.selectAll("label")
      .data(this._options, (d, i) => this._value(d, i));

    radios.exit()
      .each(function() {
        select(this.nextSibling).remove();
      })
      .remove();

    radios = radios.enter().append("label")
        .attr("class", "d3plus-Label")
        .attr("for", (d, i) => this._value(d, i))
        .each(function(d, i) {
          const input = document.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("name", `d3plus-Radio-${that._uuid}`);
          input.setAttribute("id", that._value(d, i));
          input.setAttribute("value", that._value(d, i));
          this.parentNode.insertBefore(input, this.nextSibling);
        })
      .merge(radios)
        .call(stylize, this._labelStyle)
        .html((d, i) => this._text(d, i))
        .each(function(d, i) {
          const checked = that._checked === void 0 ? !i : `${that._value(d, i)}` === `${that._checked}`;
          select(this)
            .classed("active", checked)
            .style("cursor", checked ? "default" : "pointer");
          const input = select(this.nextSibling)
            .property("checked", checked)
            .call(stylize, that._radioStyle)
            .style("cursor", checked ? "default" : "pointer")
            .on("change.d3plus", function() {
              that.checked(this.value);
              radios.each(function(d, i) {
                const checked = `${that._value(d, i)}` === `${that._checked}`;
                select(this).classed("active", checked).style("cursor", checked ? "default" : "pointer");
                select(this.nextSibling).style("cursor", checked ? "default" : "pointer");
              });
            });

          for (const event in that._on) {
            if ({}.hasOwnProperty.call(that._on, event)) input.on(event, that._on[event]);
          }

        });

    const legend = container.selectAll(`legend#d3plus-Legend-${this._uuid}`)
      .data(this._legend ? [0] : []);
    legend.exit().remove();
    legend.enter().insert("legend", ".d3plus-Label")
        .attr("id", `d3plus-Legend-${this._uuid}`)
        .attr("class", "d3plus-Legend")
      .merge(legend)
        .call(stylize, this._legendStyle)
        .html(this._legend);

    return this;

  }

  /**
      @memberof Radio
      @desc Defines the checked input.
      @param {Function} [*value*]
      @chainable
  */
  checked(_) {
    return arguments.length ? (this._checked = _, this) : this._checked;
  }

  /**
      @memberof Radio
      @desc If *selector* is specified, sets the SVG container element to the specified d3 selector or DOM element and returns the current class instance. If *selector* is not specified, returns the current SVG container element, which is `undefined` by default.
      @param {String|HTMLElement} [*selector*]
      @chainable
  */
  container(_) {
    return arguments.length ? (this._container = select(_), this) : this._container;
  }

  /**
      @memberof Radio
      @desc Sets the css styles for the <label> element.
      @param {Object} [*value*]
      @chainable
  */
  labelStyle(_) {
    return arguments.length ? (this._labelStyle = _, this) : this._labelStyle;
  }

  /**
      @memberof Radio
      @desc Creates a <legend> tag for the <select> element.
      @param {String} [*value*]
      @chainable
  */
  legend(_) {
    return arguments.length ? (this._legend = _, this) : this._legend;
  }

  /**
      @memberof Radio
      @desc Sets the css styles for the <legend> element.
      @param {Object} [*value*]
      @chainable
  */
  legendStyle(_) {
    return arguments.length ? (this._legendStyle = _, this) : this._legendStyle;
  }

  /**
      @memberof Radio
      @desc Defines the array of values to be used as <option> tags inside of the <select> element. If no value is passed, the current array is returned.
      @param {Array} [*value* = []]
      @chainable
  */
  options(_) {
    return arguments.length ? (this._options = _, this) : this._options;
  }

  /**
      @memberof Radio
      @desc Sets the css styles for the <input type="radio"> elements.
      @param {Object} [*value*]
      @chainable
  */
  radioStyle(_) {
    return arguments.length ? (this._radioStyle = _, this) : this._radioStyle;
  }

  /**
      @memberof Radio
      @desc Sets the inner text for each <option> element.
      @param {Function|String} [*value* = function(d) { return d.text; }]
      @chainable
  */
  text(_) {
    return arguments.length ? (this._text = typeof _ === "function" ? _ : constant(_), this) : this._text;
  }

  /**
      @memberof Radio
      @desc Sets the value for each <option> element.
      @param {Function} [*value* = function(d) { return d.value; }]
      @chainable
  */
  value(_) {
    return arguments.length ? (this._value = _, this) : this._value;
  }

}
