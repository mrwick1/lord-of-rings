import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Filter from '../components/Filter/Filter'
import Table from '../components/Table/Table'
import TableFooter from '../components/TableFooter/TableFooter'
import Title from '../components/Title/Title'
import { CharURL, headers } from '../consts/apiConfig'
import { Container } from '../consts/theme'
import { Box } from './HomeStyle';
import { setCharacters, setPages, setRaces } from '../features/characters/charactersSlice'

const Home = () => {
    const { characters } = useSelector(state => state.characters)
    const { rows } = useSelector(state => state.characters);
    const { activePage } = useSelector(state => state.characters);
    const { searchName } = useSelector(state => state.characters);
    const { gender } = useSelector(state => state.characters);
    const { selectedRaces } = useSelector(state => state.characters);
    const { sortBy } = useSelector(state => state.characters);
    const dispatch = useDispatch();

    const listCharacters = () => {
        axios.get(`${CharURL}?page=${activePage}&limit=${rows}&name=${searchName}&sort=name:${sortBy}&gender=${gender}&race=${selectedRaces}`, {
            headers: headers
        })
            .then((res) => {
                dispatch(setCharacters(res.data.docs));
                dispatch(setPages(res.data.pages));
            })
            .catch((error) => {
                console.error(error)
            })
    }
    const getRaces = () =>{
        axios.get(CharURL, {
            headers: headers
        })
            .then((res) => {
                const racesResp = []
                res.data.docs.filter(doc => !racesResp.includes(doc.race) && racesResp.push(doc.race)) ;
                dispatch(setRaces(racesResp))
            })
            .catch((error) => {
                console.error(error)
            })
    }

    useEffect(() => {
        listCharacters();
        getRaces();
    }, []);
    useEffect(() => {
        listCharacters();
    }, [rows,activePage])

    return (
        <Container>
            <Box>
                <Title title='Characters' />
                <Filter />
                <Table data={characters} />
                <TableFooter />
            </Box>

        </Container>
    )
}

export default Home