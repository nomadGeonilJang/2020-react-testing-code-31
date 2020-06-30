import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns new state', () => {
      const previousState = {
        taskTitle: '',
      };

      const action = {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: 'New Title',
        },
      };

      const state = reducer(previousState, action);
      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('add task', () => {
    it('task new state', () => {
      const previousState = {
        taskTitle: '',
        tasks: [],
      };

      const action = {
        type: 'addTask',
        payload: {
          taskTitle: 'New Title',
        },
      };

      const state = reducer(previousState, action);
      expect(state.tasks).toHaveLength(1);
    });
  });
});
