import React from "react";

/**
 * Container Boostrap
 * @extends React.Component
 */
class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "type": (props.type) ? "container-"+props.type : "container",
            "className": (props.className) ? " " + props.className : ""
        }
    }

    render() {
        return (
            <>
                <div className={this.state.type + this.state.className}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Container;
