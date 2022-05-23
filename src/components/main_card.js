import React from 'react';


class MainCard extends React.Component {
    constructor(props){
        super(props);
        
        this.componentDidMount = this.componentDidMount.bind(this);
    
        //default State:
        this.state = {
            users: []
        }
    };
   componentDidMount(){
        fetch('https:randomuser.me/api/?results')
            .then( res => res.json())
            .then(
                //change the users with setState function:
                json => {
                this.setState({
                    //call the main array with the name of "results"
                    users:json.results 
                })
                
            })
};

render(){
    return(        
        this.state.users.map(item =>(
            
                <div class="col-lg-3 col-md-6">
                    <div class="project-box top-left shadow">                     
                        <div class="info">
                                <div class="caption">
                                <p class="gender">{item.gender} <span>{item.nat} </span></p>
                                <h6>{item.name.title}&nbsp;{item.name.first}&nbsp;{item.name.last}</h6>
                                <p class="email">{item.email}</p>
                                </div>
                        </div>
                    </div>
                </div>
         
        )) 
    )};
};






export default MainCard;