import {Link} from "react-router-dom";
import Nav from "../../nav.js";

function HelloWorld() {
    return (
        <div>
            {/*<Link to="/">Lab</Link> |*/}
            {/*<Link to="/hello">Hello</Link> |*/}
            {/*<Link to="/tuiter">Tuiter</Link>*/}
            <Nav/>
            <h1>Hello World!</h1>
        </div>
    );
};
export default HelloWorld;