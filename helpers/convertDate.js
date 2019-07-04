
module.exports = (date) => {
    let newDate = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate()
    let newMonth = date.getMonth() + 1
    let newYear = date.getFullYear()
    switch (newMonth) {
        case 1:
            return `January ${newDate} ${newYear}`
            break;
        case 2:
            return `February ${newDate} ${newYear}`
            break;
        case 3:
            return `March ${newDate} ${newYear}`
            break;
        case 4:
            return `April ${newDate} ${newYear}`
            break;
        case 5:
            return `May ${newDate} ${newYear}`
            break;
        case 6:
            return `June ${newDate} ${newYear}`
            break;
        case 7:
            return `July ${newDate} ${newYear}`
            break;
        case 8:
            return `August ${newDate} ${newYear}`
            break;
        case 9:
            return `September ${newDate} ${newYear}`
            break;
        case 10:
            return `October ${newDate} ${newYear}`
            break;
        case 11:
            return `November ${newDate} ${newYear}`
            break;
        case 12:
            return `December ${newDate} ${newYear}`
            break;
        default:
            break;
    }
}