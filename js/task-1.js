const categories = document.querySelectorAll('categories, li.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const item = category.querySelectorAll('ul li');
    console.log(`Category: ${title}`);
    console.log(`Elements: ${item.length}`);
}
)

