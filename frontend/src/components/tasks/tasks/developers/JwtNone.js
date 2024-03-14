export default function JwtNone(){
    return(<>
   
      <center><h3>a page to learn about jwt </h3></center>  
        <ol>
           <li>
          <h4>  what is jwt overview</h4>
                <ul>
                        <li>
                            jwt stands for json web token
                        </li>
                        <li>it can be used for authentication,authoriztion or info exchange</li>
                </ul>
           </li>
            <li>
                <h4>more about jwt</h4>
                    <ul>
                        <li>
                                jwt has 3 fields like header,payload,signature
                        </li>
                        <li>header has the alogrithm used like hs256,none,rsa</li>
                        <li>payload has the needed data like user name etc</li>
                        <li>to maintaine the authentiity we use signature</li>
                    </ul>
            </li>
           <li>
                        <h4>what is the task</h4>  
                        <ul>
                            <li>one has to review the code</li>
                            <li>identify where there is weak/flawed authentication meachanism</li>
                            <li>try to login as 'admin'</li>
                            <li>the password of admin need to be submiited as part of verification</li>

                        </ul>
           </li>
           <li>
                <h4>how to acess the lab</h4>
               
                    
                    just run this script
                    https://hub.docker.com/r/radham0wn1ka1/
                    <code>
                    docker pull radham0wn1ka1/jwt_frontend
                    docker pull radham0wn1ka1/jwt_backend
                    docker run -dp 127.0.0.1:4003:4003 docker.io/radham0wn1ka1/jwt_backend
                    docker run -dp 127.0.0.1:3000:3000 docker.io/radham0wn1ka1/jwt_frontend
                    </code>
                    <b>making the link as anchor todo</b>
                <p>if u need a white box u can refer https://github.com/m0wn1ka/mini_project/tree/branch1/step1/tasks/developer/jwt_none</p>


           </li>
           
           <center><h3>hints needed to be come out one after another todo </h3></center> 
           <li>  <h4>what is the solution/hints</h4>
                    <ul>
                        <li>check how backend is identifying a user to give profile</li>
                        <li>what is the role of jwt token</li>

                    </ul>



           </li>
           <li><h4>resouces to refer more and blogs to read</h4>
                <ul>
                    <li>https://auth0.com/docs/secure/tokens/json-web-tokens</li>
                    <li>https://jwt.io/introduction</li>
                </ul>
           </li>
        
    </ol>
        

    </>)
}