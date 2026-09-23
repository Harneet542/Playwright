# Playwright Fundamentals

A small end-to-end testing project built with [Playwright Test](https://playwright.dev/) and TypeScript. It runs against Chromium, Firefox and WebKit.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer (the project was set up with Node 24)
- npm (bundled with Node.js)
- [Git](https://git-scm.com/)

Check your versions:

```bash
node -v
npm -v
```

## Project setup

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Harneet542/Playwright.git
cd Playwright
npm install
```

### Installing Playwright

`npm install` installs the `@playwright/test` package listed in `package.json`. Playwright also needs its own browser binaries, which are installed separately:

```bash
npx playwright install
```

To install only one browser, or to include the system dependencies on Linux:

```bash
npx playwright install chromium
npx playwright install --with-deps
```

Confirm the installation:

```bash
npx playwright --version
```

<details>
<summary>Starting a new project from scratch</summary>

If you are creating a fresh project instead of cloning this one:

```bash
npm init playwright@latest
```

The wizard asks for the language (TypeScript/JavaScript), the test folder, whether to add a GitHub Actions workflow, and whether to install the browsers.

</details>

## Project structure

```
.
├── tests/                  # Test files
│   ├── example.spec.ts
│   └── thetestingacademy-codegen.spec.ts
├── playwright.config.ts    # Playwright configuration
├── package.json
├── playwright-report/      # HTML report (generated, git-ignored)
└── test-results/           # Traces, screenshots, videos (generated, git-ignored)
```

Key settings in [playwright.config.ts](playwright.config.ts):

| Setting | Value |
| --- | --- |
| `testDir` | `./tests` |
| Browsers (projects) | chromium, firefox, webkit |
| Reporter | `html` |
| `headless` | `false` (browsers open visibly) |
| Retries / workers | 2 retries and 1 worker on CI, otherwise none and automatic |

> **Tip:** Playwright only picks up files named `*.spec.ts` or `*.test.ts` by default, so a misspelled extension (for example `.spect.ts`) means the test silently will not run.

## Running tests

Run everything (all browsers, all files):

```bash
npx playwright test
```

Common variations:

```bash
# Run a single file
npx playwright test tests/example.spec.ts

# Run one browser only
npx playwright test --project=chromium

# Run tests whose title matches a string
npx playwright test -g "has title"

# Run headless (overrides headless: false in the config)
npx playwright test --headless

# Run in headed mode, one worker, for easier watching
npx playwright test --headed --workers=1

# Debug step by step with the Playwright Inspector
npx playwright test --debug

# Interactive UI mode (watch, time-travel, filter)
npx playwright test --ui
```

### Viewing the report

After a run, open the HTML report:

```bash
npx playwright show-report
```

When a test is retried, a trace is recorded (`trace: 'on-first-retry'`). Open one with:

```bash
npx playwright show-trace path/to/trace.zip
```

## Using Playwright Codegen

Codegen records your interactions in a real browser and generates test code for you. It is a quick way to get selectors and a first draft of a test.

### Start recording

```bash
npx playwright codegen https://playwright.dev
```

Two windows open:

1. **Browser**: interact with the page (click, type, navigate).
2. **Playwright Inspector**: shows the generated code as you go.

Use the toolbar in the browser to:

- **Record / Stop**: toggle recording.
- **Pick locator**: hover over an element to see its best locator, then click to copy it.
- **Assert visibility / text / value**: add `expect` assertions to the recording.

When you are finished, copy the code from the Inspector into a new file under `tests/`, for example `tests/my-recording.spec.ts`. Make sure the name ends in `.spec.ts`.

### Useful options

```bash
# Save the generated test straight to a file
npx playwright codegen -o tests/my-recording.spec.ts https://playwright.dev

# Choose a browser
npx playwright codegen --browser=firefox https://playwright.dev
npx playwright codegen --browser=webkit https://playwright.dev

# Emulate a device
npx playwright codegen --device="iPhone 13" https://playwright.dev

# Set viewport size, color scheme or language
npx playwright codegen --viewport-size=800,600 https://playwright.dev
npx playwright codegen --color-scheme=dark https://playwright.dev
npx playwright codegen --lang="en-GB" https://playwright.dev

# Generate in another language (e.g. Python, Java, C#)
npx playwright codegen --target=python https://playwright.dev

# Save and reuse login state
npx playwright codegen --save-storage=auth.json https://example.com
npx playwright codegen --load-storage=auth.json https://example.com
```

Run `npx playwright codegen --help` for the full list.

> Do not commit `auth.json` or other saved sessions. They contain cookies and tokens.

### Codegen inside VS Code

With the [Playwright Test for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) extension, open the **Testing** sidebar and choose **Record new** (or **Record at cursor** to add to an existing test).

## Useful links

- [Playwright documentation](https://playwright.dev/docs/intro)
- [Codegen guide](https://playwright.dev/docs/codegen)
- [Locators](https://playwright.dev/docs/locators)
- [Trace Viewer](https://playwright.dev/docs/trace-viewer)
