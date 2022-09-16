import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

// const alanKey = 'de4757e66d300ce7bc64e2ebfd14cff82e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{

    useEffect(() => {
        alanBtn({
            key: 'de4757e66d300ce7bc64e2ebfd14cff82e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({command, articles}) => {
              if (command === 'newHeadlines') {
                    console.log(articles);
                    console.log("Hii");
              }
            }
        });
      }, []);

    return(

        <div>
            <h1>Alan AI News Application</h1>
        </div>
    );
}

export default App;