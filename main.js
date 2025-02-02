#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
//  print welcome message
console.log(chalk.bold.rgb(204, 204, 204)('\n  \t\t <<<=======================================>>>'));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<===============>>>  ${chalk.bold.hex('#9999FF')('Wellcome To \'Code With Abdullah\' - Todo-List App')}  <<<================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t  <<<=========================================>>>\n`));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
    }
};
//  function to add new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task:"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-list`);
};
// function to view all Todo-list Tasks
let viewTask = () => {
    console.log("\n Your Todo-list: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
//  function to delete a task from the list 
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index number' of the task you want to delete:",
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} this task has been deleted successfully from your Todo-list`);
};
//  function to update a Task
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index number' of the task you want to update:"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now enter the 'new task' name:",
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index number. ${update_task_index.index - 1} updated successfully [for updated list check option: "View Todo-List"]`);
};
main();
