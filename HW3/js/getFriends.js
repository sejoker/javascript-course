function getFriends(people, userId) {
    var friends = [],
        getIndexById = function (id) {
            return id - 1;
        },
        friend = people[getIndexById(userId)],
        i;

    if (friend === undefined || friend === null) {
        return null;
    }
    
    if (!friend.friends) {
        return friends;
    }

    for (i = 0; i < friend.friends.length; i += 1) {
        if (friend.friends[i] > 0 && friend.friends[i] <= people.length &&
            typeof people[getIndexById(friend.friends[i])] !== "undefined") {
            friends.push(people[getIndexById(friend.friends[i])]);
        }
    }

    return friends;
}