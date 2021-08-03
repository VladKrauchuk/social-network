import React from 'react';
import styles from "./Paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.pagination}>
            {pages.map(page =>
                <span
                    onClick={() => onPageChanged(page)}
                    className={page === currentPage && styles.selectedPage}>{page}</span>)}
        </div>
    )
};

export default Paginator;
