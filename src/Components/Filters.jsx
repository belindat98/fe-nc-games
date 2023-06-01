const Filters = ({categories}) => {
    return <form className="filters">
        <label for="filter-category">Category</label>
        <select id="filter-category">
            {categories.map(category => {
                return <option>{category.slug}</option>
            })}
        </select>
        <label for="filter-sort-by">Sort By</label>
        <select id="filter-sort-by">
            <option>Title</option>
            <option>Date posted</option>
            <option>Popularity</option>
        </select>
        <label for="filter-order">Order</label>
        <select id="filter-order">
            <option>Ascending</option>
            <option>Descending</option>
        </select>
        <button type="submit">Submit</button>
    </form>
}

export default Filters