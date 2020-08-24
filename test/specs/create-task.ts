import { expect } from 'chai';
import { Key } from 'selenium-webdriver';
import * as moment from 'moment';
import { hooks } from '../hooks';
import { tasksPage } from '../pages/tasks-page';

describe('Creating tasks on app', function () {
    let app;

    this.beforeAll(async () => {
        app = await hooks.startApp();
    });

    it('shows the initial window', async () => {
        const count = await app.client.getWindowCount();
        expect(count).to.equal(1);
    });

    it('shows the right date', async () => {
        const dayOfTheWeek = moment().format('dddd');
        const month = moment().format('MMMM');
        const dayOfTheMonth = moment().format('DD');

        const dateOnApp = await (
            await app.client.$(tasksPage.actualDate)
        ).getText();

        expect(dateOnApp).to.equal(
            `${dayOfTheWeek}, ${month} ${dayOfTheMonth}`,
        );
    });

    it('shows the right title', async () => {
        const title = await app.client.getTitle();
        expect(title).to.equal('Todolist');
    });

    it("shows the first task's name with create date", async () => {
        const taskName = 'My first task';

        await (await app.client.$(tasksPage.inputCreateTask)).setValue(
            taskName + Key.ENTER,
        );

        const taskNameOnApp = await (
            await app.client.$(tasksPage.name)
        ).getText();
        const taskDateOnApp = await (
            await app.client.$(tasksPage.date)
        ).getText();

        expect(taskNameOnApp).to.equal(taskName);
        expect(taskDateOnApp).to.match(/\d{1,2}:\d{1,2}:\d{1,2}.(AM|PM)/gm);

        // This sleep is unnecessary for the test, it's only to see the result (on-screen)
        await app.client.pause(5000);
    });

    this.afterAll(async () => {
        await hooks.stopApp(app);
    });
});
