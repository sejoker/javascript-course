/// <reference path="deepcopy.js" />

test('deepCopy_ComplexObject_ReturnsNewInstance', function () {
    var input = { a: 'b', c: { d: 'f' } };
    var copy = deepCopy(input);
    input.c = 2;
    equal(true, typeof copy !== 'undefined');
    equal(true, copy.hasOwnProperty('c'));
    equal('f', copy.c.d);
});

test('deepCopy_ObjectWithArray_ReturnsCopyInstance', function () {
    var input = { a: [1, 'b'] };
    var copy = deepCopy(input);
    input.a[0] = 'c';
    equal(false, copy == undefined);
    equal(true, copy.hasOwnProperty('a'));
    equal(1, copy.a[0]);
});

test('deepCopy_Undefined_ReturnsUndefined', function () {
    var copy = deepCopy(undefined);
    equal(undefined, copy);
});

test('deepCopy_Null_ReturnsNull', function () {
    var copy = deepCopy(null);
    equal(null, copy);
});

test('deepCopy_Number_ReturnsNumber', function () {
    var copy = deepCopy(12);
    equal(12, copy);
});