
module.exports = (date) => {
    let newDate = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate()
    let newMonth = ((date.getMonth() + 1) < 10)  ? '0' + (date.getMonth() + 1) : (date.getMonth()+1)
    let newYear = date.getFullYear()
    let hasil = `${newYear}-${newMonth}-${newDate}` 
    return hasil
}