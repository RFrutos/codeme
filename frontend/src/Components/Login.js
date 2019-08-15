import React, {Component, Fragment} from 'react';
import { ApolloConsumer } from 'react-apollo';
import {Redirect} from "react-router-dom";
import gql from 'graphql-tag'

//imagenes
import logo from '../img/logo_frontal.jpeg'


//Queries

const LOGIN_QUERY= gql`query Login($name: String!, $password: String!)
                        {
                        loginUser(name: $name password: $password)
                            {
                                token
                            }
                        }`;


class Login extends Component{
    constructor(){
        super()
        this.state={
            username: "",
            password: "",
            isloged: false
        };
        this.onSubmit= this.onSubmit.bind(this);
    };
    
    onSubmit(data){
        if(data.loginUser.token !== null ){
            console.log("ValidToken")
            this.setState( {username: "", password: "", isloged: true })
        }
        else {  
            alert("Datos incorrectos")
            this.setState( {username: "", password: "", isloged: false })
        };

    };
    render(){
        return(
        <ApolloConsumer>
            {client => (
                <div className= "container log-box">
                {this.state.isloged ?
                    <Redirect to= "/dashboard"/>
                :
                    <div className= "container-box">
                        <img className="logo-frontal" src={logo} />
                        <h2 className= "title"></h2>
                        <form   className= "form"
                                onSubmit= {async (e) => {
                                    e.preventDefault()
                                    const { data } = await client.query({
                                        query: LOGIN_QUERY,
                                        variables: { name: this.state.username, password: this.state.password }
                                        });
                                        this.onSubmit(data);
                                }}>
                            <div className= "data">
                                <label className= "box-label" >Email o Username</label>
                                <input className= "box-data"
                                    type= "text"
                                    value= {this.state.username}
                                    onChange= {(e)=> {this.setState({username: e.target.value})}}></input>
                            </div>
                            <div className= "data">
                                <label className= "box-label" >Contraseña</label>
                                <input className= "box-data"
                                    type= "password"
                                    value= {this.state.password}
                                    onChange= {(e)=> {this.setState({password: e.target.value})}}></input>
                            </div>
                            <button className="login-button" type= "submit">Loggin</button>
                        </form>
                    </div>
                }
            </div>
            )}
          </ApolloConsumer>
              
        )
    };
};

export default Login