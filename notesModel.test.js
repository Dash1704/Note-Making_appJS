const NotesModel = require('./notesModel')

describe(NotesModel, () => {
  describe('getNotes', () => {
    let model = new NotesModel
    it('should return an empty array', () => {
      expect(model.getNotes()).toEqual([])
    }); 
  });
  describe('addNote', () => {
    let model = new NotesModel
    it('should add an item', () => {
      model.addNote('Buy milk');
      model.addNote('Go to the gym');
      expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym'])
    });
  });
  describe('reset', () => {
    let model = new NotesModel
    it('should reset the notes app', () => {
      model.addNote('Buy milk');
      model.addNote('Go to the gym');
      model.reset();
      expect(model.getNotes()).toEqual([])
    });
  });
});

