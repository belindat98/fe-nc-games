export const formatCategoryName = (category) => {
    let catArr = category.split("-").join(" ")
    let readableCat = catArr[0].toUpperCase() + catArr.slice(1)
    return readableCat
}