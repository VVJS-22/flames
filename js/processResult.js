export function getNames(form) {
    return [form.name.value, form.partnerName.value];
}

export function removeSimilarities(name, partnerName) {
    name = name.trim().toLowerCase();
    partnerName = partnerName.trim().toLowerCase();
    let nameArray = name.split('');
    nameArray.forEach(letter => {
        let initialLength = partnerName.length;
        partnerName =  partnerName.replace(letter, '');
        let finalLength = partnerName.length;
        if (initialLength > finalLength) {
            name = name.replace(letter, '');
        }
    })
    return [name, partnerName]
}