async function topSearch() {
    const response = await fetch('https://bookbuddies-api.herokuapp.com/api/top-searched', {
        headers: {
            'Authorization': 'x0G4Q1Rceqa907jhTmrD'
        },
    })
    return response.json();
}
export default topSearch;