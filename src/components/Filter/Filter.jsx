import React, { useEffect, useState } from 'react'
import { AbsoluteSVG, FilterContainer, FlexIn, FlexIn2, GenderSection, GridR1, GridR2, Label, RaceSection, Relative, Search, Select, SortBy, SubCenter, Submit } from './FilterStyle'
import { AiOutlineSearch } from 'react-icons/ai'
import Multiselect from 'multiselect-react-dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { setActivePage, setCharacters, setPages, setSearchName, setSelectedGender, setSelectedRaces, setSortBy } from '../../features/characters/charactersSlice'
import axios from 'axios'
import { CharURL, headers } from '../../consts/apiConfig'

const Filter = () => {
    const { races } = useSelector(state => state.characters);
    const { gender } = useSelector(state => state.characters);
    const { searchName } = useSelector(state => state.characters);
    const { sortBy } = useSelector(state => state.characters);
    const { rows } = useSelector(state => state.characters);
    const { activePage } = useSelector(state => state.characters);
    const { selectedRaces } = useSelector(state => state.characters);
    const [ racesSelected, setSelectedRacess] = useState([]);
    const dispatch = useDispatch();
    
    const searchInputHandler = e => {
        dispatch(setSearchName(e.target.value.trim()))
    }
    
    const sortChangeHandler = e => {
        dispatch(setSortBy(e.target.value))
    }
    
    const genderChangeHandler = e => {
        dispatch(setSelectedGender(e.target.value))
    }
    
    const raceSelectHandler = e => {
        setSelectedRacess(e)
        dispatch(setSelectedRaces(racesSelected));
    }

    useEffect(() =>{
        console.log(selectedRaces)
    },[selectedRaces])

    

    

    const  getFilteredData = async () => {
        dispatch(setActivePage(1));
        await axios.get(`${CharURL}?page=${activePage}&limit=${rows}&name=${searchName}&sort=name:${sortBy}&gender=${gender}&race=${selectedRaces}`, {
            headers: headers 
        })
        .then((res) => {
            console.log(res)
            dispatch(setCharacters(res.data.docs));
            dispatch(setPages(res.data.pages));
        })
        .catch((error) => {
            console.error(error)
        })
    }

    return (
        <FilterContainer>
            <GridR1>
                <FlexIn>
                    <Label>Search</Label>
                    <Relative>
                        <Search type='text' onChange={searchInputHandler} />
                        <AbsoluteSVG>
                            <AiOutlineSearch />
                        </AbsoluteSVG>
                    </Relative>
                </FlexIn>
                <SortBy>

                    <FlexIn>
                        <Label>Sort By </Label>
                        <Select onChange={sortChangeHandler}>
                            <option value="asc">by name (asc/desc)</option>
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </Select>
                    </FlexIn>
                </SortBy>
            </GridR1>

            <GridR2>
                <FlexIn2>

                    <RaceSection>
                        <FlexIn>
                            <Label>Race</Label>
                            <Multiselect
                                isObject={false}
                                onRemove={(e) => {raceSelectHandler(e)}}
                                onSelect={(e) => {raceSelectHandler(e)}}
                                placeholder='List of races , multiselection'
                                options={races}
                            />
                        </FlexIn>
                    </RaceSection>

                    <GenderSection>
                        <FlexIn>
                            <Label>Gender</Label>
                            <Select onChange={genderChangeHandler}>
                                <option value="">male/female/any</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="any">Any</option>
                            </Select>
                        </FlexIn>
                    </GenderSection>

                </FlexIn2>
                <SubCenter>
                    <Submit onClick={getFilteredData}>Submit</Submit>
                </SubCenter>
            </GridR2>

        </FilterContainer>
    )
}

export default Filter