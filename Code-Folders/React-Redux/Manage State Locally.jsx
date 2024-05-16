class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [],
      alerts:[],
      spam:[]
    }
  }
  // Add handleChange() and submitMessage() methods here
 handleChange(event){
   this.setState({
      input:event.target.value,
      messages:this.state.messages,
      alerts:this.state.alerts,
      spam:this.state.spam

   })
 }
  submitMessage(){
    const currentMessage = this.state.input;
    this.setState({
      input: '',
      messages: this.state.messages.concat(currentMessage)
      });
  }
  submitAlert(){
    const currentAlert = this.state.input;
    this.setState({
      input: '',
      alerts: this.state.messages.concat(currentAlert)
      });
  }
  submitSpam(){
    const currentSpam = this.state.input;
    this.setState({
      input: '',
      spams: this.state.messages.concat(currentSpams)
      });
  }
  render() {
    return (
      <div>
        <h2>Type a new message HERE⬇️!</h2>
        <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
        <button onClick={this.submitMessage.bind(this)}>Submit</button>
        <h2>Type a new alert HERE⬇️!</h2>
        <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
        <button onClick={this.submitAlert.bind(this)}>Submit</button>
        <h2>Type a new spam HERE⬇️!</h2>
        <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
        <button onClick={this.submitSpam.bind(this)}>Submit</button>
        { /* Render an input, button, and ul below this line */ }
        
        
        
        <ul>
          {this.state.messages.map((message, i)=>{
            return <li key={i}>{message}</li>
          })}
          {this.state.alerts.map((alert, i)=>{
            return <li key={i}>{alert}</li>
          })}
          {this.state.spam.map((spam, i)=>{
            return <li key={i}>{spam}</li>
          })}
          
        </ul>
        
        { /* change code above this line */ }
      </div>
    );
  }
};

const ADD = "ADD";
const addMessage = message => {
  return {
    type: ADD,
    message
  };
};
const addAlert = alert => {
  return {
    type: ADD,
    alert
  };
};
const addSpam = spam => {
  return {
    type: ADD,
    spam
  };
};


// Use ES6 default paramter to give the 'previousState' parameter an initial value.
const messageReducer = (previousState = [], action) => {
  // Use switch statement to lay out the reducer logic in response to different action type
  switch (action.type) {
    case ADD:
      // Use ES6 spread operator to return a new array where the new message is added to previousState
      return [...previousState, action.message];
      break;

    default:
      // A default case to fall back on in case if the update to Redux store is not for this specific state.
      return previousState;
  }
};
const alertReducer = (previousState = [], action) => {
  
  switch (action.type) {
    case ADD:
    
      return [...previousState, action.alert];
      break;

    default:
  
      return previousState;
  }
};
const spamReducer = (previousState = [], action) => {
 
  switch (action.type) {
    case ADD:
   
      return [...previousState, action.spam];
      break;

    default:
      
      return previousState;
  }
};

const store = Redux.createStore(messageReducer);
const alertstore = Redux.createStore(alertReducer);
const spamstore = Redux.createStore(spamReducer);

const Provider = ReactRedux.Provider;

  class AppWrapper extends React.Component {
    // Below is the code required to pass the test
    render() {
      return (
        <Provider store={store}>
         <DisplayMessages />
        </Provider> 
        <Provider alertstore={alertstore}>
         <DisplayMessages />
        </Provider>
        <Provider spamstore={spamstore}>
        <DisplayMessages />
        </Provider>
          
      );
    }
    
  };
