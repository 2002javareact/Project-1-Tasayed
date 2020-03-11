import React, { SyntheticEvent } from 'react'
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap'
import {User} from '../../../project-0-TaSayed/src/JS/models/User'
import { Redirect } from 'react-router'
import { proj0Login } from '../remote/proj0-login'

interface ILoginState {
    username: string
    password: string
    errorMessage: string
    user: User | undefined
}

export class LoginComponent extends React.Component<any, ILoginState>{
    constructor(props: any) {
        super(props)
        this.state = {
            username: '',
            password: '',
            errorMessage: '',
            user: undefined
        }
        
    }


    submitLogin = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            
            let user:User = await proj0Login(this.state.username, this.state.password)
           // this.props.history.push('/clicker') // if we run this, it takes them to that path
            
           
           
           this.setState({
                username: '',
                password: '',
                user: user,
            })
        } catch (e) {
            if (e.status === 404) {
                this.setState({
                    password: '',
                    errorMessage: e.message
                })
            } else {
                this.setState({
                    password: '',
                    errorMessage: e.message
                    //errorMessage: 'Something Went Wrong. Oops!'
                })
            }
        }
    }


    updateUser = (e: any) => {
        
        this.setState({
            username: e.currentTarget.value,
            
            
        })
    }
    updatePassword = (e: any) => {

        this.setState({
            password: e.currentTarget.value
        })
    }
    print = ()=>{
        console.log("print");
        console.log(this.state);
        
    }

    render() {
        return (
            this.state.user ? 
            <Redirect to='/clicker'/>
            :
            <> 
            {/* a react Fragment, disappears on render */}
        <p>{this.state.username}</p>
                <Form onSubmit={this.submitLogin}>
                    <FormGroup row>
                        <Label for="username" sm={2}>Username</Label>
                        <Col sm={6}>
                            <Input onChange={this.updateUser} value={this.state.username} type="text" name="username" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={2}>Password</Label>
                        <Col sm={6}>
                            <Input onChange={this.updatePassword} value={this.state.password} type="password" name="password" required />
                        </Col>
                    </FormGroup>
                    <Button color='info' onClick={this.submitLogin}>Submit</Button>
                </Form>
                <p>{this.state.errorMessage}</p>
            </>
               
        )
    }
}