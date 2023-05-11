import React from "react";
import {Navbar, NavbarElement} from "./Bootstrap/Components/Navbar";

class Header extends React.Component {
    render() {
        return (
            <>
                <header>
                    <Navbar expand={"md"} title={"TaskMaster"} className={"bg-light"}>
                        <NavbarElement className={"active"} icon={"fa-solid fa-house"} />
                        <NavbarElement text={"Forum"} link={"#"} />
                        <NavbarElement text={"Contact"} link={"#"} />

                        <NavbarElement text={"Project"} type={"dropdown"}>
                            <NavbarElement text={"List"} type={"dropdown-item"} icon={"fa-solid fa-table-list"} />
                            <NavbarElement text={"Add"} type={"dropdown-item"} icon={"fa-solid fa-plus"} />
                        </NavbarElement>

                        <NavbarElement text={"Tasks"} type={"dropdown"}>
                            <NavbarElement text={"List"} type={"dropdown-item"} icon={"fa-solid fa-table-list"} />
                            <NavbarElement text={"Add"} type={"dropdown-item"} icon={"fa-solid fa-plus"} />
                        </NavbarElement>

                        <NavbarElement text={"Bug report"} type={"dropdown"}>
                            <NavbarElement text={"List"} type={"dropdown-item"} icon={"fa-solid fa-table-list"} />
                            <NavbarElement text={"Add"} type={"dropdown-item"} icon={"fa-solid fa-plus"} />
                        </NavbarElement>

                        <NavbarElement  link={"#"} type={"dropdown"} icon={"fa-solid fa-user"}>
                            <NavbarElement text={" Log in"} link={"#"} type={"dropdown-item"} icon={"fa-solid fa-right-to-bracket"} />
                        </NavbarElement>
                    </Navbar>
                </header>
            </>
        );
    }
}

export default Header;
