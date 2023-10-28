import axios from 'axios';
import { getAllMoviesUrl } from './urlsList';

export default class API_SERVICE {
  private token: string = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTZlMjYwZjU4ZjQ4ZjI4NzBhNmZlMWUyMzM2NjIyYyIsInN1YiI6IjY1Mzg1NDNmMGZiMTdmMDEzOGZjNzNiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YGPfXYK9rowV3BGiI2862uIiNxrgleUmA4WnQciN1nM';

  private options = (searchName: string, page: number) => {
    return {
      method: 'GET',
      url: getAllMoviesUrl,
      params: {
        query: searchName,
        include_adult: 'true',
        language: 'en-US',
        page: page,
      },
      headers: {
        accept: 'application/json',
        Authorization: this.token,
      },
    };
  };

  public getSearchedData = async (name: string, page: number) => {
    try {
      const data = await axios.request(this.options(name, page)).then((data) => data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}
