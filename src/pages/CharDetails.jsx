import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import SingleChar from '../components/SingleChar/SingleChar';
import Title from '../components/Title/Title';
import { CharURL, headers } from '../consts/apiConfig';
import { Container } from '../consts/theme';
import { Close } from './CharDetailsStyle';
import { Box } from './HomeStyle';

const CharDetails = () => {
    const params = useParams();
    const navigation = useNavigate()
    const [selectedChar , setSelectedChar] = useState();
    const getCharByID = () => {
      axios.get(`${CharURL}/${params.id}`, {
        headers: headers
    })
        .then((res) => {
            setSelectedChar(res.data.docs[0]);
        })
        .catch((error) => {
            console.error(error)
        })
    }
    useEffect(()=>{
      getCharByID();
    },[])

    return (
    <Container>
      <Box>

      <Title title='Characters' name={selectedChar?.name || '_'} />
      <SingleChar title='Name' value={selectedChar?.name || '_'} />
      <SingleChar title='WikiURL' value={selectedChar?.wikiUrl || '_'} />
      <SingleChar title='Race' value={selectedChar?.race || '_'} />
      <SingleChar title='Height' value={selectedChar?.height || '_'} />
      <SingleChar title='Hair' value={selectedChar?.hair || '_'} />
      <SingleChar title='Birth' value={selectedChar?.birth || '_'} />
      <SingleChar title='Spause' value={selectedChar?.spouse || '_'} />
      <SingleChar title='Death' value={selectedChar?.death || '_'} />
      <Close onClick={()=>navigation(-1)}>Close</Close>
      </Box>
    </Container>
  )
}

export default CharDetails