[![Action Status](https://github.com/WarleyGabriel/e2e-tests-spectron-example/workflows/CI/badge.svg)](https://github.com/WarleyGabriel/e2e-tests-spectron-example/actions)

# E2E tests with Spectron and Mocha

This project is a simple project to demonstrate how we can develop tests using [Spectron](https://www.electronjs.org/spectron) for [Electron](https://www.electronjs.org/) apps.

## Requirements

1. node >= 12.x
2. npm >= 6.x
3. Todolist == 0.28.1

**Make sure that you have already installed [Todolist](https://github.com/blaadje/Todolist) on your machine.**

If you use MacOS, after installing the app you have to open it, otherwise, MacOS will block the test execution.  
After this step, you can set the app's path on `./test/hooks.ts` line 6;

```javascript
async startApp() {
    const app = await new Application({
        // On my machine TodoList is in this path
        path: '/Applications/Todolist.app/Contents/MacOS/Todolist',
    });
    return app.start();
}
```

## Getting started

Install the dependencies:

```bash
npm install
```

Compile the TS code:

```bash
npm run build
```

Run tests:

```bash
npm run tests
```

## Reports

After running the tests we can see the results using [Allure report](https://github.com/allure-framework/allure2) or [Mochawesome](https://github.com/adamgruber/mochawesome#readme).

Using Allure:

```bash
npm run report:generate
npm run report:open
```

To use Mochawesome you can open `./reports/mochawesome/mochawesome.html`

## Contributing

Check code's format after some changes in the code:

```bash
npm run format
```
