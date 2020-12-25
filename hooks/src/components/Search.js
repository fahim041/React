import React, {
    useState,
    useEffect
} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, sTerm] = useState('React');
    const [results, setResults] = useState([]);

    console.log(results);

    useEffect(() => {
        const search = async() => {
            const {
                data
            } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });

            setResults(data.query.search);
        };

        search();

    }, [term])

    const renderResult = results.map((result) => {
        return (
          <div className = "item" >
            <div className = "content" >
              <div className = "header" > { result.title }
              </div> { result.snippet }
            </div>
          </div>
        )
    })

    return (
      <div>
        <div className="ui form">
          <div className = "field" >
            <label > Enter Search Term </label>
            <input className = "input"
            style = {{ width: '40%' } }
            onChange = { e => sTerm(e.target.value) }>
            </input>
            yes
          </div>
        </div>
      </div>
    )
}

export default Search;
