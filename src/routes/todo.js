'use strict';

const TodoController=require('../controllers/TodoController');

router.get('/list',TodoController.GetAllTodo);
router.get('/list/:id',TodoController.GetOneTodo);
router.post("/add",TodoController.addTodo);
router.delete("/delete/:id",TodoController.deleteTodo);
router.put("/completed/:id",TodoController.completedTodo);
router.put("/in-complete/:id",TodoController.incompleteTodo);
router.put("/update/:id",TodoController.updateTodo);

module.exports=router;