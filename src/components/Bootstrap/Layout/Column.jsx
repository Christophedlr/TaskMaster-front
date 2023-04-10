import React from "react";

class Column extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "className": (props.className) ? " " + props.className : "",
            "col": (props.col) ? props.col : "col",
            "offset": (props.offset) ? " "+props.offset : ""
        }
    }

    render() {
        return (
            <>
              <div className={this.state.col+this.state.offset}>
                  {this.props.children}
              </div>
            </>
        );
    }
}

export default Column;
