import React from 'react';
import './Search.css';

class Search extends React.Component{
    state ={
        search: "",
        type: "all"
    }

    handlerKey = (event) => {
        if(event.key === "Enter"){
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    handlerFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        })
    }

    render(){
        return(
            <>
                <div className="search">
                    <input 
                        type="search" 
                        placeholder='search'
                        value={this.state.search}
                        onChange={(event) => this.setState({search: event.target.value})}
                        onKeyDown={this.handlerKey}
                    />
                    <button className='btn' 
                            onClick={() => this.props.searchMovies(this.state.search, this.state.type )}>
                        Search
                    </button>
                    
                </div>
                <div className='radio'>
                    <input type="radio" name="type" data-type="all" checked={this.state.type === 'all'} onChange={this.handlerFilter} /> <span>All</span>
                    <input type="radio" name="type" data-type="movie" checked={this.state.type === 'movie'} onChange={this.handlerFilter} /> <span>Movies only</span>
                    <input type="radio" name="type" data-type="series" checked={this.state.type === 'series'} onChange={this.handlerFilter} /> <span>Series only</span>
                    <input type="radio" name="type" data-type="game" checked={this.state.type === 'game'} onChange={this.handlerFilter} /> <span>Games only</span>
                </div>
            </>
        )
    }
}

export default Search;