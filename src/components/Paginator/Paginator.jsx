import React, {useEffect, useState} from "react";
import classes from './Paginator.module.css';


const Paginator = ({changeCurrentPage, totalCount, pageSize, currentPage, items, portionSize = 10}) => {
    const [pagesNumbersForDisplayLayout, setPages] = useState([]);
    const pagesLength = Math.ceil(totalCount / pageSize);


    useEffect(() => {
        const setPageNumbersToArray = () => {
            const temporaryStorageOfPages = [];
            for (let i = 1; i <= pagesLength; i++) {
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
        <>
            <div className={classes.pagination}>
                <ul className={" pagination"}>
                    <li className={leftPortionNumber !== 1 ? "waves-effect" : 'disabled'}>
                        {
                            leftPortionNumber !== 1 &&
                            <span onClick={firstPortion}>
                                <i className="material-icons">first_page</i>
                            </span>
                        }
                        {
                            leftPortionNumber === 1 &&
                            <span>
                                <i className="material-icons">first_page</i>
                            </span>
                        }
                    </li>
                    <li className={leftPortionNumber !== 1 ? "waves-effect" : 'disabled'}>
                        {
                            leftPortionNumber !== 1 &&
                            <span  onClick={previewPortion}>
                                <i className="material-icons">chevron_left</i>
                            </span>
                        }
                        {
                            leftPortionNumber === 1 &&
                            <span>
                                <i className="material-icons">chevron_left</i>
                            </span>
                        }
                    </li>
                    {pageItem}
                    <li className={portionCount > currentPortion ? "waves-effect" : 'disabled'}>
                        {
                            portionCount > currentPortion &&
                            <span onClick={nextPortion}>
                                <i className="material-icons">chevron_right</i>
                            </span>
                        }
                        {
                            portionCount <= currentPortion &&
                            <span>
                                <i className="material-icons">chevron_right</i>
                            </span>
                        }
                    </li>
                    <li className={portionCount > currentPortion ? "waves-effect" : 'disabled'}>
                        {
                            portionCount > currentPortion &&
                            <span onClick={lastPortion}>
                                <i className="material-icons">last_page</i>
                            </span>
                        }
                        {
                            portionCount <= currentPortion &&
                            <span>
                                <i className="material-icons">last_page</i>
                            </span>
                        }
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Paginator;
