import React from "react";

class Row extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "className": (props.className) ? " " + props.className : "",
            "cols": (props.cols) ? " row-cols-"+props.cols : ""
        }
    }

    render() {
        return (
            <>
                <div className={"row" + this.state.cols+this.state.className}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Row;
