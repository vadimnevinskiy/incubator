import React, {useEffect, useState} from "react";
import classes from './Paginator.module.css';


const Paginator = ({changeCurrentPage, totalCount, pageSize, currentPage, items, portionSize = 10}) => {
    const [pagesNumbersForDisplayLayout, setPages] = useState([]);
    const pagesLength = Math.ceil(totalCount / pageSize);


    useEffect(() => {
        const setPageNumbersToArray = () => {
            const temporaryStorageOfPages = [];
            for (let i = 1; i < pagesLength; i++) {
                temporaryStorageOfPages.push(i)
            }
            setPages(temporaryStorageOfPages)
        }
        setPageNumbersToArray()
    }, [pagesLength])


    // @{pagesLength: number} Количество всех страниц
    // @{portionSize: number} Количество показанных страниц в пагинаторе
    const portionCount = Math.ceil(pagesLength / portionSize)

    // @{portionNumber: number} текущая порция для отображения
    const [currentPortion, setPortionNumber] = useState(1)
    const leftPortionNumber = (currentPortion - 1) * portionSize + 1;
    const rightPortionNumber = currentPortion * portionSize;


    const nextPortion = () => {
        setPortionNumber(currentPortion + 1)
    }
    const previewPortion = () => {
        setPortionNumber(currentPortion - 1)
    }
    const firstPortion = () => {
        setPortionNumber(1)
    }
    const lastPortion = () => {
        setPortionNumber(portionCount)
    }


    let pageItem = pagesNumbersForDisplayLayout
        .filter(p => p >= leftPortionNumber && p < rightPortionNumber)
        .map(pageItem => {
            return (
                <li className={currentPage === pageItem ? "active" : "waves-effect"} key={pageItem}>
                    <span onClick={e => {
                        changeCurrentPage(pageItem)
                    }}>{pageItem}</span>
                </li>
            )
        })


    return (
        <ul className={classes.pagination + " pagination"}>
            <li className="waves-effect"><a href="#!" onClick={firstPortion}><i
                className="material-icons">first_page</i></a></li>
            <li className="waves-effect"><a href="#!" onClick={previewPortion}><i
                className="material-icons">chevron_left</i></a></li>
            {pageItem}
            <li className="waves-effect"><a href="#!" onClick={nextPortion}><i
                className="material-icons">chevron_right</i></a></li>
            <li className="waves-effect"><a href="#!" onClick={lastPortion}><i className="material-icons">last_page</i></a>
            </li>
        </ul>
    )
}
export default Paginator;
