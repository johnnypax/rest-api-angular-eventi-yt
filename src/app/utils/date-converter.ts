export function convertiData(data: string | undefined){
    if(!data)
        return '01/01/1970';

    const [anno, mese, giorno] = data.split("-");
    return `${giorno}/${mese}/${anno}`
}

export function convertiDataIso(data: string | undefined){
    if(!data)
        return '1970-01-01';

    const [giorno, mese, anno] = data.split("/");
    return `${anno}-${mese}-${giorno}`
}
