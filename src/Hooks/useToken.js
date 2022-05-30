import { useEffect, useState } from "react";

const useToken = (user) =>{
    
    const [token, setToken] = useState('');
    const email = user?.user?.email;
    console.log(email)
    const currentUser = {email : email}
    useEffect(()=>{
        // console.log('user inside useToken', user);
        if(email){
            fetch(`https://immense-sands-56460.herokuapp.com/user/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                console.log('data inside useToken', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }
    },[user]);
    return [token];
}
export default useToken;