import React from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux'
import { setActivePage, setRows } from '../../features/characters/charactersSlice';

import { FlexBetween, FlexPage, FooterContainer, PageDot, PageNo, Paginate, Selects } from './TableFooterStyle'

const TableFooter = () => {
    const dispatch = useDispatch();
    const { pages } = useSelector(state => state.characters);
    const rowChangeHandler = e => {
        dispatch(setRows(e.target.value));
    }
    const pageChangeHandler = e =>{
        dispatch(setActivePage(parseInt(e.selected)+1))
    }
    return (
        <FooterContainer>

            <FlexBetween>
                    <Paginate>
                        <ReactPaginate
                            previousLabel={"<"}
                            nextLabel={">"}
                            breakLabel={"..."}
                            pageCount={pages}
                            marginPagesDisplayed={2}
                            disableInitialCallback={ true }
                            pageRangeDisplayed={3}
                            onPageChange={pageChangeHandler}
                            containerClassName={"pagination"}
                            activeClassName={"active"}
                        />
                    </Paginate>
                <Selects onClick={e => rowChangeHandler(e)}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </Selects>
            </FlexBetween>
        </FooterContainer>
    )
}

export default TableFooter