async function recommended() {
    const response = await fetch('https://bookbuddies-api.herokuapp.com/api/bestsellers', {
        headers: {
            'Authorization': 'x0G4Q1Rceqa907jhTmrD'
        },
    })
    return response.json();
}
export default recommended;