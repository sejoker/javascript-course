/// <reference path="getobject.js" />

test('getObject_existsPath_ReturnsPrimitive', function() {
    var o = { a: { b: 'c' } };
    equal(getObject('a.b', o), 'c');
});

test('getObject_existsPath_ReturnsObjectProperty', function () {
    var o = { a: { b: 'c' } };
    equal(getObject('a', o), o.a);
});

test('getObject_notExistsPath_ReturnsUndefined', function () {
    var o = { a: { b: 'c' } };
    equal(getObject('d', o), undefined);
});

test('getObject_undefinedObject_ReturnsUndefined', function () {
    equal(getObject('d', undefined), undefined);
});

test('getObject_nullObject_ReturnsUndefined', function () {
    equal(getObject('d', null), undefined);
});

test('getObject_nullPath_ReturnsUndefined', function () {
    equal(getObject(null, {}), undefined);
});

test('getObject_undefinedPath_ReturnsUndefined', function () {
    equal(getObject(undefined, {}), undefined);
});

test('getObject_numberPath_RaisesError', function () {
    raises(function() {
        getObject(12, {});
    });
});