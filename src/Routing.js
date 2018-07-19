const TodoController=require('./controllers/TodoController');

class Routing {
    List(router) {
        router.get('/api/todo/list',TodoController.GetAllTodo);
        router.get('/api/todo/list/:id', TodoController.GetOneTodo);
        router.post("/api/todo/add", TodoController.addTodo);
        router.delete("/api/todo/delete/:id", TodoController.deleteTodo);
        router.put("/api/todo/completed/:id", TodoController.completedTodo);
        router.put("/api/todo/in-complete/:id", TodoController.incompleteTodo);
        router.put("/api/todo/update/:id", TodoController.updateTodo);
    }
}

module.exports=new Routing();