export function convertToSlug(Text) {
    return Text
            .toLowerCase()
            .replace(/[^a-zA-Z0-9\s]+/g,'')
            .replace(/\s+/g,'-')
            .replace(/^-+/g,'')
            .replace(/-+$/g,'');
}

export function toTitleCase(phrase) {
    return phrase
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
export function getCurrentDate(separator=''){

    let myCurrentDate = new Date()
    let date = myCurrentDate.getDate();
    let month = myCurrentDate.getMonth() + 1;
    let year = myCurrentDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }
    