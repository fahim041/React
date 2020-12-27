import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({song}) => {
    if(!song){
        return <div>Select a song</div>
    }
    return(
        <div style={{marginLeft: '20px'}}>
            <h3>Song Deatils</h3>
            <label>Song Name: {song.title}</label>
            <br></br>
            <label>Duration : {song.duration}</label>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return { song : state.selectedSong}
}

export default connect(mapStateToProps) (SongDetails);