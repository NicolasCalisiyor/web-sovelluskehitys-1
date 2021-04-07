
var notes = (function() {
    var list = [];

    return {
        add: function(note) {
            if (note && !/^\s+$/gmi.test(note)) {
                var item = {timestamp: Date.now(), text: note};
                list.push(item);
                return true;
            }
            return false;
        },

        remove: function(index) {

        },

        count: function() {
            return list.length;
        },

        list: function() {
            return list;
        },

        find: function(str) {

        },

        clear: function() {
            list.splice(0, list.length);
        }
    }
}());

describe('notes module', function () {

    beforeEach(function() {
        notes.clear();
        notes.add('first note');
        notes.add('second note');
        notes.add('third note');
        notes.add('fourth note');
        notes.add('fifth note');
    });

    describe('adding notes', function () {

        it("should be able to add a new note", function () {
            expect(notes.add('sixth note')).toBe(true);
            expect(notes.count()).toBe(6);
        });
    });

    describe('ignoring notes', function () {

        it("should ignore blank notes", function () {
            expect(notes.add('')).toBe(false);
            expect(notes.count()).toBe(5);
        });
    });

    describe('ignoring whitespace', function () {

        it('should ignore notes containing only whitespace', function() {
            expect(notes.add('   ')).toBe(false);
            expect(notes.count()).toBe(5);
        });
    });

    describe('require string parameter', function () {

        it('should require a string parameter', function() {
            expect(notes.add()).toBe(false);
            expect(notes.count()).toBe(5);
        });
    });
});





