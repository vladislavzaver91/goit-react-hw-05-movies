import PropTypes from 'prop-types';
import {SearchWrapp, SearchForm, SearchBtn, SearchIcon, SearchInput} from './SearchMovie.styled';

export const SearchMovie = ({ onSubmit }) => {
    const handleSubmit = ev => {
        ev.preventDefault();
        onSubmit(ev.target.query.value);

        ev.target.reset();
    };
    
    return (
    <SearchWrapp>
        <SearchForm onSubmit={handleSubmit}>
            <SearchInput 
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            />
            <SearchBtn type="submit">
                <SearchIcon/>
            </SearchBtn>
        </SearchForm>
    </SearchWrapp>
    );
};

SearchMovie.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};