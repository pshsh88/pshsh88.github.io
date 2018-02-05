import React from 'react';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
    updateContent(menuName) {
        this.setState({
            activeMenuName: menuName
        });
    }
    
    constructor(props) {
        super(props);
        this.state = {
            activeMenuName: "Home"
        }
        this.updateContent = this.updateContent.bind(this);
    }
    
    render(){

        return (
            <div>
                <Header 
                        title="PSHSH88"
                        activeMenuName={this.state.activeMenuName} 
                        updateContent={this.updateContent} />
                <Content activeMenuName={this.state.activeMenuName} />
            </div>
        );
    }
}

export default App;