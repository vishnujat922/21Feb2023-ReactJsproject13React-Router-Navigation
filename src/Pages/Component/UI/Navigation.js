//1. Import Area

import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

//2. Definition Area
export default function Navigation() {
    return (
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Link className="nav-link active" to="/">Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="/Login">Login</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link " to='/Register'>Register</Link>
                </Nav.Item>
            </Nav>
        )
    }

//3. Definition Area
//3.1 Default Export Area
//3.2 Named Export Area