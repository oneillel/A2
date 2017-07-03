//module//
var app = angular.module('Todo', []); 
//controller//
app.controller('TodoCtrl', function() {
  this.newTodo = '';

  this.todos = [];

  this.done = function(todo) {
    var indexOf = this.todos.indexOf(todo);
    if (indexOf !== -1) {
      this.todos.splice(indexOf, 1);
    }
  };

//check for blanks before submit and submit new tasks//
  this.add = function(e) {
    if (this.newTodo === "") {
      alert("Please enter a task before submitting");
    } else {
      if (e == 'submit' || e.which === 10) {
        this.todos.push(this.newTodo);
        this.newTodo = '';
      }
    }
  };

});