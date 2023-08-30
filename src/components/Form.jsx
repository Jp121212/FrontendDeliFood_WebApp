import '../styles/Form.css';

function Form(props) {
  const form = {
    WebkitBorderRadius: '10px 10px 10px 10px',
    borderRadius: '10px 10px 10px 10px',
    backgroundColor: '#000000',
    padding: '25px',
    margin: 'auto',
    width: props.width,
    height: props.height,
    maxHeight: '80vh',
    display: 'flex',
    overflow: 'hidden',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    position: 'relative',
    zIndex: 2,
    transform: 'translateY(-100%)',
    animation: 'slideInFromTop 0.5s ease-in-out forwards'
  };

  return (
    <form style={form} onSubmit={props.submit}>
      {props.children}
    </form>
  );
}
export default Form;
