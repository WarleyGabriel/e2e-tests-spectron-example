class TasksPage {
    get inputCreateTask() {
        return '//input[@placeholder="Create a task"]';
    }

    get name() {
        return '//label[@class="label_1e86q"]';
    }

    get date() {
        return '//span[@class="date_1DS-z"]';
    }

    get actualDate() {
        return '//span[@class="dateFormatted_u4PEK"]';
    }
}

export const tasksPage = new TasksPage();
