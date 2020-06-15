import React, {Fragment} from 'react';
import Film from './Film.js'

const FilmsList = (props) => {

  const filmNodes = props.films.map((film, index) => {
    return <Film film={film} key={index}/>
  });

  return (
    <Fragment>
      {filmNodes}
    </Fragment>
  )
}

export default FilmsList;
