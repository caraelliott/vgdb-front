import React ,{useState} from 'react'



const LoginForm=({login,error}) =>{
    const [details, setDetails]= useState({name:"", email:"",password:""});

    const submitHandler= e =>{
        e.preventDefault();
        login(details);
        setDetails({name:"", email:"", password:""})

    }



    return (
    <>
    <form onSubmit={submitHandler}>
        <div class= "nes-container with-title" style={{ background:'rgba(196, 196, 196, 0.8)' }}>
            <span class="title">Login</span>
            {(error != "") ? (<span>{error}</span>) :"" }
            <div class="nes-field">
                <label for="name_field">Your name</label>
                <input type="text" id="name_field" class="nes-input is-success" onChange={e =>setDetails({...details, name:e.target.value})} value={details.name}/>
            </div>

            <div class="nes-field">
            <label for="name_field">email</label>
            <input type="text" id="name_field" class="nes-input is-warning" onChange={e =>setDetails({...details, email:e.target.value})} value={details.email}/>
            </div>

            <div class="nes-field">
            <label for="name_field">password</label> 
            <input type="text" id="name_field" class="nes-input is-error" onChange={e =>setDetails({...details, password:e.target.value})} value={details.password}/>
            </div>
            <div>
            <h2>  &nbsp;  </h2>
            <input type="submit" style={{marginRight:'10px' }} class="nes-btn is-primary" value="LOGIN" onClick={submitHandler}/>
            <input type="submit" style={{ marginLeft:'10px' }} class="nes-btn is-error" value="REGISTER"/>
            </div>

        </div>
        </form>
    </>
    )
}

export default LoginForm
