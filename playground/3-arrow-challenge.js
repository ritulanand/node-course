// Goal : create method to get incomplete tasks
// 1. Define getTasksToDo method
// 2. use filter to do return just the incompeted tasks
// 3. test your work by running the script

const tasks = {
    tasks : [{
        text: 'grocery shopping',
        completed: true
    },{
        text: 'clean yard',
        completed: false
    },{
        text: 'film course',
        completed: false
    }],
    getTasksToDo() {
        return  this.tasks.filter((task) => 
             task.completed === false
        )
    }
}

console.log(tasks.getTasksToDo())