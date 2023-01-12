import React, { useEffect } from "react";

const GPrac = () => {
    // clientId = "912261331462-b0djg7gejgt99fevqhjv472t9t501c2i.apps.googleusercontent.com"
    
    

    useEffect(() => {
        // google.accounts.id.initialize({
        //     client_id: "912261331462-b0djg7gejgt99fevqhjv472t9t501c2i.apps.googleusercontent.com",
        //     callback: handleCallbackResponse
        // })
        window.google.accounts.id.initialize({
            client_id: "912261331462-pjch2la17j498rndl5ca36sajm5312o5.apps.googleusercontent.com",
            callback: handleCallbackResponse
          });
        
        window.google.accounts.id.renderButton(
            document.getElementById("dignInDiv"),
            {theme: "outline", size:"large"}
        );
          
          // window.google.accounts.id.prompt();
    },[])

    const handleCallbackResponse = (res) => {
        console.log("response",res.credential)
    }

    return(
        <>
            <div id="dignInDiv" style={{width: "10%"}}></div> 
        </>
    )
}

export default GPrac