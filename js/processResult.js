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

export function getFlamesCount(remainingName, remainingPartnerName) {
    return remainingName.length + remainingPartnerName.length;
}

export function getResult(flamesCount, flames) {
    while (flames.length > 1) {
        let indexToRemove;
        if (flamesCount > flames.length) {
            indexToRemove = flamesCount % flames.length - 1;
        } else {
            indexToRemove = flamesCount - 1;
        }
        flames.splice(indexToRemove, 1);
        if (indexToRemove > 0) {
            flames = [...flames.slice(indexToRemove), ...flames.slice(undefined, indexToRemove)];
        }
    }
    return flames[0];
}