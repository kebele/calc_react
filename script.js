function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ["/", "*", "-", "+"];
const ids = {
  7: "seven",
  8: "eight",
  9: "nine",
  4: "four",
  5: "five",
  6: "six",
  1: "one",
  2: "two",
  3: "three",
  0: "zero",
  "/": "divide",
  "*": "multiply",
  "-": "subtract",
  "+": "add" };


class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      lastPressed: undefined,
      calc: "0",
      operation: undefined });_defineProperty(this, "backClick",


    e => {
      const { calc, lastPressed } = this.state;
      const { innerText } = e.target;
      // console.log(innerText);
      const sil = calc.substring(0, calc.length - 1);

      this.setState({
        calc: sil });

      // console.log(calc)
    });_defineProperty(this, "temizle",

    e => {
      const { calc, lastPressed } = this.state;
      const { innerText } = e.target;
      this.setState({
        calc: "0" });

    });_defineProperty(this, "esittir",

    e => {
      const { calc, lastPressed } = this.state;
      const { innerText } = e.target;
      const evaluated = eval(calc);
      // alert(calc);
      this.setState({
        calc: evaluated });

    });_defineProperty(this, "islem",

    e => {
      const { calc, lastPressed } = this.state;
      const { innerText } = e.target;
      // console.log(innerText);

      switch (innerText) {
        case ".":{
            const splitted = calc.split(/[+\-\*\/]/);
            const last = splitted.slice(-1)[0];
            if (!last.includes(".")) {
              this.setState({
                calc: calc + "." });

            }
            break;
          }
        default:{
            let e = undefined;
            if (ops.includes(innerText)) {
              if (ops.includes(lastPressed) && innerText !== "-") {
                const lastNumberIndex = calc.
                split("").
                reverse().
                findIndex(char => char !== " " && nums.includes(+char));
                e = calc.slice(0, calc.length - lastNumberIndex) + ` ${innerText} `;
              } else {
                e = `${calc} ${innerText} `;
              }
            } else {
              e = calc === "0" ? innerText : calc + innerText;
            }
            this.setState({
              calc: e });

          }}

      this.setState({
        lastPressed: innerText });

    });}

  render() {
    const { currentNumber, calc } = this.state;
    return (
      React.createElement("div", { className: "calculator" },
      React.createElement("div", { id: "display", className: "display" },
      calc),


      React.createElement("div", { className: "nums-container" },
      React.createElement("button", {
        className: "big-h light-grey ac",
        id: "clear",
        onClick: this.temizle }, "AC"),



      React.createElement("button", { className: "back", id: "back", onClick: this.backClick }, "back"),


      nums.map((sayi) =>
      React.createElement("button", {
        className: `dark-grey ${sayi == 0 && "big-h"}`,
        key: sayi,
        onClick: this.islem,
        id: ids[sayi] },

      sayi)),


      React.createElement("button", {
        className: "light-grey",
        id: "decimal",
        onClick: this.islem }, ".")),




      React.createElement("div", { className: "ops-container" },
      ops.map((isaret) =>
      React.createElement("button", {
        className: "orange",
        key: isaret,
        onClick: this.islem,
        id: ids[isaret] },

      isaret)),


      React.createElement("button", { className: "orange", id: "equals", onClick: this.esittir }, "="))));





  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("app"));