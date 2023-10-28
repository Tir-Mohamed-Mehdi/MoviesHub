import API_SERVICE from '../../services/api.service';

export const moviesGetFunction = async (name: string, page: number) => {
    try {
        const data = await new API_SERVICE().getSearchedData(name, page);
        return data;
    } catch (error) {
        console.log(error);
    }
};
