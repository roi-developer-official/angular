import { rejects } from 'assert';

export class AuthService{
    isLoggedIn = false;

    isAuth(){
        const promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(this.isLoggedIn)
            },80)
        })
        return promise;
    }
    login(){
        this.isLoggedIn = true;
    }

    logout(){
        this.isLoggedIn = false;
    }
}