import * as React from "react";
import Toolbar from "../../Toolbar/Toolbar"
import PageFooter from "../../PageFooter/PageFooter"
import "./PageTemplate.scss";

const Page = (props) => (
    <div className="Page">
        <Toolbar />
        <div className="pageContainer">
            <div className="middleContainer">
                <div className="pageContent">
                    <main>
                        {props.children}
                    </main>
                    
                </div>
            </div>
            <PageFooter />
            
        </div>
    </div>
);

export default Page;