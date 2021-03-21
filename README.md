# Mentor task

Mentoring app task using React-Native.

## Installation

Install Expo globally on your system

```bash
npm install --global expo-cli
```

Use the package manager "npm" to install the packages

```bash
npm install
```

## Running it

```
expo start
```

## Questions and answers
**Q:Which routing framework would you consider using and why?**

A: React Navigation. It is the most popular and stable framework for routing and has a huge community so developers would be always working on maintaining it, fixing bugs, adding new features and etc...

---

**Q:Which state management paradigm would you prefer and why (keeping in mind that our application is going to scale).**

A:Redux. A scalable app means more components. if we have a lot of components then using local states and passing down props all the way from the top would be a huge problem which redux solves it by having a global state where we call the state wherever needed. In addition to that, redux will avoid unnecessary renders unlike ContextAPI for example which re renders all the components that are within the context.

---

**Q:Would you pick any UI framework? Which framework and why?**

A: On a scalable project, yes. I would go for React Native Elements. A UI framework would make a scalable project easier to manage and it is much more efficient if the design of the application is compatible with the framework's style. The code can get cleaner with less components and less styling files. As for React Native Elements, I would go for it for its elegant style and straightforward documentation.
