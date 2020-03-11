import {User} from '../../../project-0-TaSayed/src/JS/models/User'
import { InternalServerError } from "../errors/internal-server";
import { BadCredentialsError } from "../errors/bad-credentials-error";;




export async function proj0Login(username: string, password: string): Promise<User> {
    let credentials = {
        username,
        password
    }
    try {

        //ec2: 
        let response:any = "attempt?"
        response = await fetch('http://localhost:2002/login', {
            method: 'POST',
            mode: "cors",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },  
            body: JSON.stringify(credentials)
        });
        
        response = "unsuccess?"
        if(response.status === 404){
            throw new BadCredentialsError()
        }

        return await response.json()
    } catch (e) {
        if(e.status === 404){
            throw e
        } else{
            console.log(e.message);
            
            throw new InternalServerError()
        }
    }
}