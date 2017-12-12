import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


// the parent
var MyContainer = React.createClass({
    getInitialState: function() {
        return { checked: false };
    },
    onChildChanged: function(newState) {
        this.setState({ checked: newState });
    },
    render: function() {
        return  <div>
                  <div>Are you checked ? {this.state.checked ? 'yes' : 'no'}</div>
                  <ToggleButton text="Toggle me"
                                initialChecked={this.state.checked}
                                callbackParent={this.onChildChanged} />
                </div>;
    }
});
 
// the child
var ToggleButton = React.createClass({
  getInitialState: function() {
    // we set our initial state from our props
    return { checked: this.props.initialChecked };
  },
  onTextChanged: function() {
    var newState = !this.state.checked;
    this.setState({ checked: newState }); // we update our state
    this.props.callbackParent(newState); // we notify our parent
  },
  render: function() {
    return <label>{this.props.text}: <input type="checkbox"
                                            checked={this.state.checked}
                                            onChange={this.onTextChanged}/></label>;
  }
});
