import React, {Component} from 'react';

class ProfileStatus extends Component {

    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }

    deactivateEditMode = () => {
        this.setState({editMode: false});
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? (<div onDoubleClick={this.activateEditMode}>
                        {this.props.status}
                    </div>)
                    : (<div>
                        <input autoFocus onBlur={this.deactivateEditMode} value={this.props.status} type="text"/>
                    </div>)}
            </div>
        );
    }
}

export default ProfileStatus;
