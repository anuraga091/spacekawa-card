import React from "react";
import styled from 'styled-components';

class TopCard extends React.Component {
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
            <UpperCard>
        
                <div class="main-box shadow">                     
                    <div class="main-box-info">
                            <div class="main-box-caption">
                            <div class="main left"><img src={item.picture.thumbnail} alt=""/></div>
                            <div class="main right"><u>{item.name.title}&nbsp;{item.name.first}&nbsp;{item.name.last}</u>
                            <p class="location-1"><span>{item.location.street.number + ","}</span>&nbsp;{item.location.street.name}&nbsp;{item.location.city}&nbsp;{item.location.state}&nbsp;<b>{item.location.country}</b>&nbsp;{item.location.postcode}</p>
                            <p class="location-2">{item.location.timezone.offset}&nbsp;{item.location.timezone.description}</p>
                            <p class="gender">{item.gender} </p>
                            </div>
                            </div>
                        </div>
                    </div>
                
                </UpperCard> 
             ))
    )};
};

const UpperCard = styled.div`
    align-items: center;
    width: 50%;
    .main-box{
        .main-box-caption{
            display: flex;
            .left{
                margin-right: 40px;
                margin-top: 20px;
                img{
                    width: 80px;
                    border-radius: 50%;
                }
            }
            .right{
                u{
                    color: rgb(250,128,114);
                    font-size: 26px;
                    font-weight: 700;
                }
                .location-1{
                    
                    span{
                        color: rgba(138,43,226,0.85);
                        font-weight: 600;
                    }
                }
                .location-2{

                }
                .gender{
                    text-transform: capitalize;
                    color: #A9A9A9;
                }
            }
        }
    }
`;



export default TopCard;





