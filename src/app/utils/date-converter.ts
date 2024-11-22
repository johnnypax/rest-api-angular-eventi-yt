export default function convertiData(data: string | undefined){
    if(!data)
        return '01/01/1970';

    const [anno, mese, giorno] = data.split("-");
    return `${giorno}/${mese}/${anno}`
}