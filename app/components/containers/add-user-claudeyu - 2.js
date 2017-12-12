import axios from 'axios';

class UsersBook extends Component

constructor(props) {
    super(props);
    
    
    this.handleName = this.handleName.bind(this);
    this.handleGithub = this.handleGithub.bind(this);
    this.handleInstagram = this.handleInstagram.bind(this);
    this.handleTwitter = this.handleTwitter.bind(this);
    this.handleFacebook = this.handleFacebook.bind(this);
    this.handleWorksOn = this.handleWorksOn.bind(this);
    
    
    this.state = {
      name: "",
      github: "",
      instagram: "",
      twitter: "",
      facebook: "",
      worksOn: ""
    };
    
    
   componentDidMount () {
       
    fetch('mongodb://localhost:27017/React')
    .then(results => {
      return results.json();   
       
 const listuser = data.map((user) => {
        
        return(
            
          <li key={user.results}>
            {user}
           </li> };
            return (
        <ul> {listuser} </ul>
        );

             
       );
    }
        
       this.setState({name: name});
        this.setState({github: github});
        this.setState({instagram: instagram});
        this.setState({twitter: twitter});
        this.setState({facebook: facebook});
        this.setState({worksOn: worksOn});
        
        
         );
   });

   };
    
    
    
    
    
    
    
    
    
    
    handleName(event) {
    this.setState({ name: event.target.value });
  }
  handleGithub(event) {
      this.setState({ github: event.target.value });
    }
    handleInstagram(event) {
    this.setState({ instagram: event.target.value });
  }
  handleTwitter(event) {
      this.setState({ twitter: event.target.value });
    }
    handleFacebook(event) {
    this.setState({ facebook: event.target.value });
  }
  handleWorksOn(event) {
      this.setState({ worksOn: event.target.value });
    }
    
    
    
    addUser = event => {
    event.preventDefault();
    this.setState({
      name: event.target.value,
      github: event.target.value,
      instagam: event.target.value,
      twitter: event.target.value,
      facebook: event.target.value,
      worksOn: event.target.value,
});


    
    
    axios.post('mongodb://localhost:27017/React', {
        name: this.state.name,
        github: this.state.github,
        instagram: this.state.instagram,
        twitter: this.state.twitter,
        facebook: this.state.facebook,
        worksOn: this.state.worksOn,
      })
    .then(response => {
      console.log(response, 'User added!');
    })
    .catch(err => {
      console.log(err, 'User not added, try again');
    });
    
    // Clear input data function here
    
    
    
    // -------------------------------
    
    
    
    <input onChange={this.handleName} name="name" className="name" value={this.state.name} placeholder="Name"/>
    
    <input onChange={this.handleGithub} name="github" className="github" value={this.state.github} placeholder="Github"/>
    
    <input onChange={this.handleInstagram} name="instagram" className="instagram" value={this.state.instagram} placeholder="Instagram"/>
    
    <input onChange={this.handleTwitter} name="twitter" className="twitter" value={this.state.twitter} placeholder="Twitter"/>
    
    <input onChange={this.handleFacebook} name="facebook" className="facebook" value={this.state.facebook} placeholder="Facebook"/>
    
    <input onChange={this.handleWorksOn} name="worksOn" className="worksOn" value={this.state.worksOn} placeholder="WorksOn"/>
    
    
    <button
            className="submitbuttonaddUser"
            type="submit"
            onClick={this.addUser}
              >
            Submit to Users<i className="addUserButton" aria-hidden="true" />
            </button>
    
    
    
    
   export default UsersBook;