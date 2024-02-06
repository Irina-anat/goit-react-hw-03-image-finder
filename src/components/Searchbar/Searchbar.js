//import { ReactComponent as AddIcon } from 'icons/serch.svg';
import { FaSearch } from "react-icons/fa";
import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import css from  './Searchbar.module.css';


class Searchbar extends Component  {

    state = {
        searchQuery: '',
    };

    handleNameChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
    };
    
    handleSubmit = event => {
        event.preventDefault();
    if (this.state.searchQuery.trim() === '') {
    return  toast.info('Please enter the search data.');
        };
        this.props.onSubmitImage(this.state.searchQuery);
        this.setState({searchQuery: ''});
    };

    render() {
         return (
             <header className={css.searchbar}>
                 <form  onSubmit={this.handleSubmit} className={css.search__form} >
                <button type="submit"  className={css.search__button}>
                    <FaSearch className={css.search__icon}/>
                    <span className={css.search__label}>Search</span>
                </button>
                
                    <input
                    className={css.search__input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.searchQuery}
                    onChange={this.handleNameChange}/>
            </form>
        </header>
    );
    };   
};

Searchbar.propTypes = {
    onSubmitImage: PropTypes.func.isRequired,
};

export default Searchbar;

