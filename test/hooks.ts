import { Application } from 'spectron';

class Hooks {
    async startApp() {
        const app = new Application({
            path: '/Applications/Todolist.app/Contents/MacOS/Todolist',
        });
        return app.start();
    }

    async stopApp(app) {
        if (app && app.isRunning()) {
            await app.stop();
        }
    }
}

export const hooks = new Hooks();
