const NotesModel = require('./notesModel')

describe(NotesModel, () => {
  describe('getNotes', () => {
    let model = new NotesModel
    it('should return an empty array', () => {
      expect(model.getNotes()).toStrictEqual([])
    }); 
  });
  describe('addNote', () => {
    let model = new NotesModel
    it('should add an item', () => {
      model.addNote('Buy milk');
      model.addNote('Go to the gym');
      expect(model.getNotes()).toStrictEqual(['Buy milk', 'Go to the gym'])
    });
  });



});