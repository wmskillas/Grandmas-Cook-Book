import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
// import {Link} from 'react-router-dom';
import axios from 'axios';
export default class Breakfast extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            ingredients:'',
            description:'',
            post:[]}
                    }
   
    componentDidMount(){
        // this.props.fetchBreakfast()
        axios.get('http://localhost:3000/api/breakfast')
        .then(response =>{
            this.setState({post: response.data})
        })
        .catch((err)=> {
            console.log(err);
        })
    }
    render(){
    return(

        <section className="breakfast">
            
            <div className='flex-row meal'>
                <div className="title">
                   <h1>Title:</h1>
                    {/* {this.state.title} */}
                </div>
                <div className="ingredients">
                    <h3>Ingredients:</h3>
                    {/* {this.props.ingredients} */}
                </div>
                <div className="directions">
                    <h3>Directions:</h3>
                    {/* {this.props.directions} */}
                </div>

            </div>
        </section>
    )
}};
