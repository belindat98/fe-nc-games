import { useState } from "react"
import { formatCategoryName } from "../utils/utils"

const Filters = ({categories, setSearchParams}) => {
    const defaultFilters = {
        category: "",
        order: "DESC",
        sort_by: "created_at"
    }
    const [filterOptions, setFilterOptions] = useState(defaultFilters)

    const handleFilterSubmit = (event) => {
        event.preventDefault()
        setSearchParams(filterOptions)
        setFilterOptions(defaultFilters)
    }

    const handleClear = () => {
        setSearchParams({})
        setFilterOptions(defaultFilters)
    }

    const handleChangeOption = (event) => {
        setFilterOptions((currentFilterOptions) => {
            return {...currentFilterOptions, [event.target.id]: event.target.value}
        })
    }

    return (<><form className="filters" onSubmit={handleFilterSubmit}>
        <label htmlFor="category">Category</label>
        <select id="category" onChange={handleChangeOption} value={filterOptions.category}>
        <option value="">All Categories</option>
            {categories.map(category => {
                return <option key={category.slug} value={category.slug}>{formatCategoryName(category.slug)}</option>
            })}
        </select>
        <label htmlFor="sort_by">Sort By</label>
        <select id="sort_by" onChange={handleChangeOption} value={filterOptions.sort_by}>
            <option value="comment_count">Comments</option>
            <option value="created_at">Date posted</option>
            <option value="votes">Votes</option>
        </select>
        <label htmlFor="order">Order</label>
        <select id="order" onChange={handleChangeOption} value={filterOptions.order}>
            <option value="ASC">Ascending</option>
            <option value="DESC">Descending</option>
        </select>
        <button type="submit">Submit</button>
    </form>
    <button onClick={handleClear}>Clear Filters</button>
    </>)
}

export default Filters