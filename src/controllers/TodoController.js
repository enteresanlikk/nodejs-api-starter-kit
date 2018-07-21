'use strict';
import Todo from '../models/TodoModel';

class TodoController{
    GetAllTodo(req,res){
        console.log(setJson(200,"sdasd"));
        let {status}=req.headers;
        status=status || 1;
        const getAll=Todo.find({status});
        getAll
            .then(todos=>{
                res.json(todos);
            })
            .catch(err=>{
                res.json(err);
            });
    }

    GetOneTodo(req,res){
        const {id}=req.params;
        let {status}=req.headers;
        status=status || 1;
        const getOne=Todo.findOne({_id:mongoose.Types.ObjectId(id),status});
        getOne
            .then(todos=>{
                res.json(todos);
            })
            .catch(err=>{
                res.json(err);
            });
    };

    addTodo(req,res){
        const {
            title,
            content
        } = req.body;
        const newTodo=new Todo({
            title,
            content
        });
        const newTodoPromise=newTodo.save();
        newTodoPromise
            .then(todo=>{
                res.json(todo);
            })
            .catch(err=>{
                res.json(err);
            });
    };

    deleteTodo(req,res){
        const {id}=req.params;
        const getOne=Todo.findByIdAndUpdate(id,{status:0},{new: true});
        getOne
            .then(todo=>{
                res.json(todo);
            })
            .catch(err=>{
                res.json(err);
            });
    };

    completedTodo(req,res){
        const {id}=req.params;
        const getOne=Todo.findByIdAndUpdate(id,{isDone:1},{new: true});
        getOne
            .then(todo=>{
                res.json(todo);
            })
            .catch(err=>{
                res.json(err);
            });
    };

    incompleteTodo(req,res){
        const {id}=req.params;
        const getOne=Todo.findByIdAndUpdate(id,{isDone:0},{new: true});
        getOne
            .then(todo=>{
                res.json(todo);
            })
            .catch(err=>{
                res.json(err);
            });
    };

    updateTodo(req,res){
        const {id}=req.params;
        const {
            title,
            content
        } = req.body;
        const getOne=Todo.findByIdAndUpdate(id,{title,content},{new: true});
        getOne
            .then(todo=>{
                res.json(todo);
            })
            .catch(err=>{
                res.json(err);
            });
    };

    mysqlTest(req,res,next){
        mysqlDb.query('SELECT * FROM messages', function(err, result) {
            res.json(result);
        });
    }
}

module.exports=new TodoController();
