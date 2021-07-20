// This file is home for any helper functions like calculating offset for pagination...

function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage]; // formula found on page addressed in readme
}

function emptyOrRows(rows) {
    if (!rows) {
        return [];
    }
    return rows;
}

module.exports = {
    getOffset,
    emptyOrRows
}