import React, {useState} from "react";
import ConnectModal from "./components/ConnectModal";
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "./utils/firebase.config";

const App = () => {
    const [user, setUser] = useState(null);

    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    });
    return (
        <div>
            <div className="App">
                <ConnectModal/>
            </div>
        </div>
    );
}
export default App;
