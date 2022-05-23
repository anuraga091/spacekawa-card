import React from 'react';
import styled from "styled-components";
import MainCard from './main_card';
import TopCard from './top_card';

class Users extends React.Component {
    constructor(props){
        super(props);
        
        this.componentDidMount = this.componentDidMount.bind(this);
    
        //default State:
        this.state = {
            users: []
        }
    };
   componentDidMount(){
        fetch('https:randomuser.me/api/?results=19')
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
        <CardBottom>
            <TopCard/>
            <div class='row'>
            <MainCard/> 
                {this.state.users.map(item =>(        
                <div class="col-lg-3 col-md-6">
                    <div class="project-box shadow">                     
                        <div class="info">
                                <div class="caption">
                                <p class="gender">{item.gender} <span>{item.nat} </span></p>
                                <h6>{item.name.title}&nbsp;{item.name.first}&nbsp;{item.name.last}</h6>
                                <p class="email">{item.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}          
            </div>
        </CardBottom>
    )};
};


const CardBottom = styled.div`
.main-box{
        margin-top: 15px;
        padding: 5px;
        width: 100%;
        position: relative;     
        align-items: center;
        left: 50%;
        border-radius: 10px;  
        
        .main-box-caption{
            margin-left: 2rem;

        }
    }
    

.row{

        padding: 2rem 4rem;
        width: 100%;
        position: relative;     
       .project-box{
        border-radius: 10px;
        margin-bottom: 20px;
        }
       .top-left{
           background-color: rgba(138,43,226,0.85);
           color: whitesmoke;
           .email{
               color: whitesmoke;
           }
           .gender{
               color: whitesmoke;
           }
       }
       .caption{
           padding: 5px ;
       }  
        .info{
            margin-left: 1rem;     
        }
        h6{
            font-size: 20px;
            font-family: Arial, Helvetica, sans-serif;
            display: block;
            font-weight: 600;
        }
        span{
            margin-left: 1rem;
        }
        .email{
            color: red;
        }
        .gender{
            text-transform: capitalize;
            color: #A9A9A9;    
        } 
    }`;

export default Users;