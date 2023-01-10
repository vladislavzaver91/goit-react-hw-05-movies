import { MutatingDots } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

export const Loader = () => {
    return (
    <Spinner>
        <MutatingDots 
            height="100"
            width="100"
            color="grey"
            secondaryColor="grey"
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </Spinner>
    );
};