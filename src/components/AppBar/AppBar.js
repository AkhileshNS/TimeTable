
// External Libraries
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

// Internal Libraries
import './AppBar.css';
import menu from '../../assets/menu.svg';

class AppBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    render() {

        let options, hasOptions = false;

        if ("options" in this.props) {
            options = [];
            for (let option of this.props.options) {
                hasOptions = true;
                let optionClicked = () => {
                    if ('click' in option) {
                        option.click();
                    }
                    this.setState({open: false})
                }
                if (!('options' in option)) {
                    options.push(<p key={option.text} className="btn" onClick={() => optionClicked()}>{option.text}</p>);
                } else {
                    let droptions = [];
                    for (let droption of option.options) {
                        let droptionClicked = () => {
                            if ('click' in droption) {
                                droption.click();
                            }
                            this.setState({open: false});
                        }
                        droptions.push(<p key={droption.text} onClick={() => droptionClicked()}>{droption.text}</p>);
                    }
                    options.push(<div key={option.text} className="dropdown">
                        <p className="btn" style={{cursor: "default"}}>{option.text}</p>
                        <div className="dropdown-content">{droptions}</div>
                    </div>);
                }
            }
        }

        return <div className="AppBar">
            {( hasOptions ? <img src={menu} alt="Menu" onClick={() => this.setState({open: true})}/> : null)}
            <h3 className="small">{this.props.title}</h3>
            {options}
            <div className="Sidedrawer" style={(this.state.open ? {transform: 'translateX(0)'} : null)}>{options}</div>
            {(this.state.open ? <div className="Backdrop" onClick={() => this.setState({open: false})} /> : null)}
        </div>;
    }

}

export default withRouter(AppBar);