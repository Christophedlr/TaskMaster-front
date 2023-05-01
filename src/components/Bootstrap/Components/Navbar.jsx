import React from "react";
import Container from "../Layout/Container";

export class Navbar extends React.Component {
    render() {
        return (
            <>
                <nav className={`navbar navbar-expand-${(this.props.expand) ? this.props.expand : "lg"} ${(this.props.className) ? this.props.className : ""}`} data-bs-toggle={"collapse"} data-bs-target={`#${(this.props.target) ? this.props.target : "navbar"}`}>
                    <Container type={"fluid"}>
                        <a href={this.props.link} className="navbar-brand">{this.props.title}</a>
                        <button className="navbar-toggler"><span className="navbar-toggler-icon"/></button>
                        <div className="collapse navbar-collapse" id={`${(this.props.target) ? this.props.target : "navbar"}`}>
                            <ul className={"navbar-nav"}>
                                {this.props.children}
                            </ul>
                        </div>
                    </Container>
                </nav>
            </>
        );
    }
}

export class NavbarElement extends React.Component {
    render() {
    if (this.props.type==="dropdown") {
        return (
            <>
                <li className={`nav-item dropdown ${(this.props.className) ? this.props.className : ""}`}>
                    <a href={"#"} role={"button"} data-bs-toggle={"dropdown"} className={"nav-link dropdown-toggle"}>
                        {this.props.pos === "right" && this.props.text}
                        {this.props.icon && <span className={`${this.props.icon} ${this.props.pos === "right" ? "icon-right" : "icon-left"}`}/>}
                        {this.props.pos !== "right" && this.props.text}
                    </a>

                    <ul className={"dropdown-menu"}>
                        {this.props.children}
                    </ul>
                </li>
            </>
        )
    } else if (this.props.type==="dropdown-item") {
            return (
                <>
                    <li>
                        <a href={this.props.link} className={`dropdown-item ${(this.props.className ? " "+this.props.className : "")}`}>
                            {this.props.pos === "right" && this.props.text}
                            {this.props.icon && <span className={`${this.props.icon} ${this.props.pos === "right" ? "icon-right" : "icon-left"}`}/>}
                            {this.props.pos !== "right" && this.props.text}
                        </a>
                    </li>
                </>
            )
        } else if (this.props.type==="dropdown-hr") {
            return (
                <>
                    <li><hr className={`dropdown-divider ${this.props.className}`} /></li>
                </>
            )
        } else {
            return (
                <>
                    <li className="nav-item">
                        <a href={this.props.link} className={`nav-link${(this.props.className ? " "+this.props.className : "")}`}>
                            {this.props.pos === "right" && this.props.text}
                            {this.props.icon && <span className={`${this.props.icon} ${this.props.pos === "right" ? "icon-right" : "icon-left"}`}/>}
                            {this.props.pos !== "right" && this.props.text}
                        </a>
                    </li>
                </>
            );
        }
    }
}
