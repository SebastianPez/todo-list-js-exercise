function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// NEW DRIVER CODE

const task1 = newTask("Clean the litter", "Remove all excrement from the litter box.");
const task2 = newTask("Do laundry", "Wash, dry and fold them beautiful clothes!");
const tasks = [task1, task2];

task1.logState(); // Cat litter needs cleaning.
task1.markCompleted();
task1.logState(); // Cat litter has been cleaned.

console.log(tasks);

