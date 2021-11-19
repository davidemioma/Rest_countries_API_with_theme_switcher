// //Display Pagination
// const displayPagination = function (data) {
//   const numPages = Math.ceil(data.length / resultPerPage);

//   const curPage = page;

//   //Page 1 and other pages
//   if (numPages > 1 && curPage === 1) {
//     return `
//         <button
//           data-goto="${curPage + 1}"
//           class="pagination_btn pagination_btn-next"
//         >
//           <span>Page ${curPage + 1}</span>
//           <svg class="search_icon">
//             <use href="./images/icons.svg#icon-arrow-right"></use>
//           </svg>
//         </button>`;
//   }

//   //Other page
//   if (numPages > 1 && curPage < numPages) {
//     return `
//         <button
//           data-goto="${curPage - 1}"
//           class="pagination_btn pagination_btn-prev"
//         >
//           <svg class="search_icon">
//             <use href="./images/icons.svg#icon-arrow-left"></use>
//           </svg>
//           <span>Page ${curPage - 1}</span>
//         </button>

//         <button
//           data-goto="${curPage + 1}"
//           class="pagination_btn pagination_btn-next"
//         >
//           <span>Page ${curPage + 1}</span>
//           <svg class="search_icon">
//             <use href="./images/icons.svg#icon-arrow-right"></use>
//           </svg>
//         </button>`;
//   }

//   if (numPages > 1 && curPage === numPages) {
//     return `
//         <button
//           data-goto="${curPage - 1}"
//           class="pagination_btn pagination_btn-prev"
//         >
//           <svg class="search_icon">
//             <use href="./images/icons.svg#icon-arrow-left"></use>
//           </svg>
//           <span>Page ${curPage - 1}</span>
//         </button>`;
//   }

//   //Page 1 and no other pages
//   return "";
// };

// const goToPage = function (pageNo = page, data) {
//   pageNo = page;

//   const start = (pageNo - 1) * resultPerpageNo;
//   const end = pageNo * resultPerPage;

//   return data.slice(start, end);
// };

// const getPageResult = function (data) {
//   const parentElement = document.querySelector(".pagination");

//   parentElement.addEventListener("click", function (e) {
//     const btn = e.target.closest(".pagination_btn");

//     const page = btn.dataset.goto;

//     goToPage(page, data);
//   });
// };
