import React from 'react';
import SongDetails from './SongDetails';
import SongList from './SongList';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetails />
        </div>
      </div>
	  <div>
	    <small>You are running this application in <b>development</b> mode.
		{process.env.REACT_APP_NOT_SECRET_CODE}</small>
	    <form>
	      <input type="hidden" value="abcdef" />
	    </form>
	  </div>
	 </div>
  );
};

export default App;
