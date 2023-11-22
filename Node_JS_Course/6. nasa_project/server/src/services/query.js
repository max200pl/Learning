const DEFAULT_PAGE_LIMIT = 0; // if 0 return all documents
const DEFAULT_PAGE = 1;


function getPagination(query) {
    const page = Math.abs(query.page) || DEFAULT_PAGE;
    const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT; // Math.abs() convert negative to positive value, convert string to number
    const skip = (page - 1) * limit; // ( 1 - 1 ) * 50;

    return {
        skip,
        limit
    }
}

module.exports = { getPagination };