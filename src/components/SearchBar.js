import React from 'react';

class SearchBar extends React.Component{

    
    state = { sterm: "" };

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = event => {
        //to prevent browser to submit automaticall, anytime the user submits.
        event.preventDefault();
        // Make sure we call callback from parent component  
        
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        type="text" 
                        value={this.state.term} 
                        placeholder="Search ..."
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;