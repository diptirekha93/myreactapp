import React  from "react";

class SearchInput extends  React.Component{
    // onInputChange(event){
    // console.log(event.target.value)
    // constructor(){
    //     super()
    //     this.onFormSubmit= this.onFormSubmit.bind(this)
    // }
    state ={entry:''}
    onFormSubmit=(event)=>{
        event.preventDefault()
        console.log(this.state.entry)
        this.props.onSearchSubmit(this.state.entry)
    }
    
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form" action="">
                    <div className="filed">
                    <div className="ui fluid icon input">
                    <input type="text" placeholder="Search..." onChange={(event)=>this.setState({entry:event.target.value})} value={this.state.entry}/>
                    <i className="search icon"></i>
                    </div>
                    </div>
                
                </form>
            </div>
        )
    }
}

export default SearchInput;