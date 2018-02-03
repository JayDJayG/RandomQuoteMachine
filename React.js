// ReactDOM

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <div>
        <h1>Random Quote Machine</h1>
      </div>
    );

  }
}

//Render React
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
