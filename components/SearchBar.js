import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term : ''
        }
    }
    onInputChange = (event)=>{
        //console.log(event);
        this.setState({term : event.target.value});
    };
    onFormSubmit = (event)=>{
        event.preventDefault();
        console.log(event);
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return (
        <div className = "search-bar ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Video Search</label> 
                    <div className="ui input focus">
                        <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                    </div>
                 </div>   
            </form>   
        </div>
        );
    }
}
export default SearchBar;