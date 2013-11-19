/// <reference path="getfriends.js" />

test('getFriends_TomWith2Friends_ReturnsBothFriendsArray', function() {
    var people = [
        { id: 1, name: 'Brad', friends: [2, 5, 6] },
        { id: 2, name: 'John', friends: [1, 3] },
        { id: 3, name: 'Tom', friends: [2, 5] },
        { id: 4, name: 'Fil', friends: null },
        { id: 5, name: 'John', friends: [1, 3] },
        { id: 6, name: 'Jim', friends: [1] }
    ];

    var friends = getFriends(people, 2);
    equal(true, friends !== undefined);
    equal(friends.length, 2);
    equal(friends[0].name, 'Brad');
    equal(friends[1].name, 'Tom');
});

test('getFriends_FillWithNoFriends_ReturnsEmptyArray', function () {
    var people = [
        { id: 1, name: 'Brad', friends: [2, 5, 6] },
        { id: 2, name: 'John', friends: [1, 3] },
        { id: 3, name: 'Tom', friends: [2, 5] },
        { id: 4, name: 'Fil', friends: null },
        { id: 5, name: 'John', friends: [1, 3] },
        { id: 6, name: 'Jim', friends: [1] }
    ];

    var friends = getFriends(people, 4);
    equal(true, friends !== undefined);
    equal(true, friends !== null);
    equal(friends.length, 0);
});

test('getFriends_InvalidId_ReturnsNull', function () {
    var people = [
        { id: 1, name: 'Brad', friends: [2, 5, 6] },
        { id: 2, name: 'John', friends: [1, 3] },
        { id: 3, name: 'Tom', friends: [2, 5] },
        { id: 4, name: 'Fil', friends: null },
        { id: 5, name: 'John', friends: [1, 3] },
        { id: 6, name: 'Jim', friends: [1] }
    ];

    var friends = getFriends(people, 423);
    equal(true, friends === null);
});