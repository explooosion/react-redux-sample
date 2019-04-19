let nextTodoId = 0;

// Actions
// 功能如同 controller, 將每個動作自訂一種 type 名稱，
// 其餘參數則自行添增。

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});