# Project::Braveheart Front-End

This project was created as part of the ConUHacks V hackaton.

Written by:
- Benjamin Lanthier
- Karl Noory
- Nahej Lefebvre
- Pierre-Olivier Trottier

This is the front-end for the project.

## Useful Commands

**Install project dependencies**

- Needs to be run every time the dependencies are modified

```
npm install
```

**Unlock the environment variables**

- Use the password provided in the Teams FAQ Wiki
- Needs to be run the first time you clone the repository
- Needs to be run every time the environment variables are updated

```
npm run unlock "PASSWORD"
```

**Lock the environment variables**

- Use the password provided in the Teams FAQ Wiki
- Needs to be run whenever the environment variables are modified
- You should run the "unlock" command after locking to make sure the process was successful

```
npm run lock "PASSWORD"
```

**Compile and hot-reload for development**

- This is what you should use when you work on the project locally

```
npm run serve
```

**Compile and minify for production**

- You shouldn't have to run that command too often
- Only used when deploying to production

```
npm run build
```

**Run unit tests**

- This command should be ran whenever you're working on unit tests
- Otherwise this is run by the pipeline to make sure we don't break the live website

```
npm run test
```

**Lint and fix all files**

- You will use this command quite often
- Whenever you want to format the code properly, run this command
- Sometimes it might require manual fixes but otherwise it will auto-fix the code

```
npm run lint
```

### Bonus Command

**Vue.JS UI**

- This command will provide you with a UI to manage the Vue.JS Front-End
- This can be used instead of using the "serve" command

```
vue ui
```

## How-To ?

Here are a few things that are good to know...

### Components

We use the **Vuetify Component Library**.

The documentation for that library can be found [here](https://vuetifyjs.com/en/components/api-explorer).

This library should help you dramatically minimize the amount of custom css required.

### Environment

Whenever you handle sensitive data (such as secret keys), the data should be stored in
the project's environment variables. To do so, add the variable to the ".env" file
located in the root of the "frontend" directory. Then, lock the environment variables
to make sure that the changes will be pushed to GIT. When using environment variables
in ".vue" or ".js" files, simply use:

```
system.process.env.YOUR_ENV_VARIABLE
```

It is important in a Vue.JS application that the environment variables start with the
prefix "VUE_APP_".
