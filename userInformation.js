const userName = 'Ben Bonno';
const age = 37;
const passions = ['Music', 'Dance', 'Radio'];

function displayPassions() {
    console.log(`my passions are :`);
    for (let i = 0; i < passions.length; i++) {
        console.log("-" + passions[i]);
    }
}

module.exports = {
    userName: userName,
    age: age,
    displayPassions: displayPassions
}
