# eslint-plugin-vue-hare

disallow using v-for index as key

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-vue-hare`:

```sh
npm install eslint-plugin-vue-hare --save-dev
```

## Usage

Add `vue-hare` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["vue-hare"]
}
```

or

```json
{
  "extends": ["plugin:vue-hare/recommended"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "vue-hare/no-v-for-index-as-key": 2
  }
}
```