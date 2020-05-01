import React, {Component} from 'react';
import ComponentF from "./ComponentF";

class ComponentE extends Component {
    render() {
        return (
            <div>
                ComponentE
              <ComponentF/>
            </div>
        );
    }
}

export default ComponentE;