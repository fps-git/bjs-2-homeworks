function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    } else {
        if(arr1.every((element, index) => element === arr2[index])) {
            return true;
        } else {
            return false;
        }
    }
}

function getUsersNamesInAgeRange(users, gender) {
    let filtered = users.filter(user => user.gender === gender);
    if (filtered.length == 0) {
        return 0;
    } else {
        let result = filtered.reduce((a,b) => a + b.age, 0) / filtered.length;
        return result;
    }
}