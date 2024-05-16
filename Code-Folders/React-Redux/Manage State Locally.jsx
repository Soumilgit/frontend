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
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    })
  }
  submitAlert(){
    this.setState({
      input: '',
      alerts: [...this.state.alerts, this.state.input]
    })
  }
  submitSpam(){
    this.setState({
      input: '',
      spam: [...this.state.messages, this.state.input]
    })
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
          {this.state.messages.map((x, i)=>{
            return <li key={i}>{x}</li>
          })}
          {this.state.alerts.map((x, i)=>{
            return <li key={i}>{x}</li>
          })}
          {this.state.spam.map((x, i)=>{
            return <li key={i}>{x}</li>
          })}
          
        </ul>
        
        { /* change code above this line */ }
      </div>
    );
  }
};

