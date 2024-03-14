// POST - GETALL
export const BOOK = 'http://localhost:9000/book';
export const BOOKCATEGORY = (id) => `http://localhost:9000/book?category_id=${id}`;

// PUT - DELETE - GETBYID
export const BOOKID = (id) => `http://localhost:9000/book/${id}`;


// POST - GETALL
export const CATEGORY = 'http://localhost:9000/category'
// PUT - DELETE -
export const CATEGORYID = (id) => `http://localhost:9000/category/${id}`;