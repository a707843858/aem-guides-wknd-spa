import { Page } from '@adobe/aem-react-editable-components';
import * as React from 'react';

// This component is the application entry point
class App extends Page<any, any> {
    render() {
        return (
            <div>
                {this.childComponents}
                {this.childPages}
            </div>
        );
    }
}

export default App;
