import css from  './Searchbar.module.css';
import { ReactComponent as AddIcon } from 'icons/serch.svg';
import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';


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
            <form type="submit"   onSubmit={this.handleSubmit} className={css.search__form} >
                <div  className={css.search__button}>
                    <AddIcon className={css.search__icon}/>
                    <span className={css.search__label}>Search</span>
                </div>
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

