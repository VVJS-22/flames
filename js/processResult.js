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
    if (!flamesCount) {
        return flames[0];
    }
    let currentIndex = 0;
    while (flames.length > 1) {
        currentIndex = (flamesCount % flames.length - 1 + currentIndex) % flames.length;
        flames.splice(currentIndex, 1)
    }
    return flames[0];
}