# jest-graphql-transformer

A Jest transformer that allows GraphQL queries in separate files, similar to the `graphql-tag` loader for Webpack, but adapted for Jest, which does not support Webpack loaders. This package provides the same transformation within Jest, enabling seamless GraphQL query imports.

---

## 🚀 Installation

Install the package using **npm** or **yarn**:

```sh
npm install --save-dev jest-graphql-transformer
```

or

```sh
yarn add --dev jest-graphql-transformer
```

---

## 🔧 Usage

### ✅ Configure Jest to Use the Transformer

#### 📌 **In `package.json`**

Add the following to your Jest configuration:

```json
"jest": {
  "transform": {
    "\\.(gql|graphql)$": "jest-graphql-transformer",
    ".*": "babel-jest"
  }
}
```

#### 📌 **Or in `jest.config.js` / `jest.config.ts`**

```javascript
export default {
  transform: {
    '\\.(gql|graphql)$': 'jest-graphql-transformer',
  },
};
```

### ⚠️ **Note:**

Once you define the `transform` property, **Jest's default transformations will be overridden**.
If you need Babel for other files, make sure to include it:

```javascript
export default {
  transform: {
    '\\.(gql|graphql)$': 'jest-graphql-transformer',
    '.*': 'babel-jest', // Keep Babel for other files
  },
};
```

---

## 📜 License

MIT License © 2024 [hamidyfine](https://github.com/hamidyfine)
