const categories = document.querySelectorAll('#categories li.item');
console.log("Number of categories:", categories.length);

categories.forEach(category => {
    console.log("Category:", category.firstElementChild.textContent);
    const elements = category.querySelectorAll('ul li');
    console.log("Elements:", elements.length);
});