import React from 'react'

function Userprofile({user,logged,logout}) {
    return (
<>
        {logged ?
        // <div>
            

         
                ( 
                    <section class="message-list ">
                           
                           
                            <div class="nes-balloon is-small from-left ">
                                
                            <p>Welcome {user}</p>
                           
                          
                            </div>
                            <button type="button" class="nes-btn is-warning is-small"  onClick={logout}>Logout</button>
                    
                            </section>
                )
     
        :
        (<div>Not Logged In</div>)}
        </>
    )
}

export default Userprofile;
  