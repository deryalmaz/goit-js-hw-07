
const ul = document.querySelectorAll('ul li.item')
console.log("Number of categories:", ul.length)

ul.forEach(e => {
    console.log("Category:", e.firstElementChild.textContent);
    const li = e.querySelectorAll('ul li'); 
    console.log("Elements:", li.length)
});