# disallow using v-for index as key (`no-v-for-index-as-key`)

## Rule Details

This rule aims to prevent the use of v-for index as key.

Examples of **incorrect** code for this rule:

```html
<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <p>{{item}}</p>
    </div>
  </div>
</template>

<script>
  export default {}
</script>
```

Examples of **correct** code for this rule:

```html
<template>
  <div>
    <div v-for="(item, index) in items" :key="item.id">
      <p>{{item}}</p>
    </div>
  </div>
</template>

<script>
  export default {}
</script>
```
