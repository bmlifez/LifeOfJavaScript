// React is loaded and is available as React and ReactDOM
class Input extends React.PureComponent {
    render() {
      let { forwardedRef, ...otherProps } = this.props;
      return <input {...otherProps} ref={forwardedRef} />;
    }
  }
  
  const TextInput = React.forwardRef((props, ref) => {
    return <Input {...props} forwardedRef={ref} />;
  });
  
  class FocusableInput extends React.Component {
    ref = React.createRef();
  
    componentDidUpdate(prevProps) {
      if (!prevProps.focused && this.props.focused) {
        this.ref.current.focus();
      }
    }
  
    componentDidMount() {
      if (this.props.focused) {
        this.ref.current.focus();
      }
    }
  
    render() {
      return <TextInput ref={this.ref} />;
    }
  }
  
  FocusableInput.defaultProps = {
    focused: false,
  };
  
  const App = (props) => <FocusableInput focused={props.focused} />;
  
  document.body.innerHTML = "<div id='root'></div>";
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
  