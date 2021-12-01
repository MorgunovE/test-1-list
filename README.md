# List

Create list application. Design is in **list.xd** file, which can be opened in
[Adobe XD](https://www.adobe.com/products/xd.html).

## Project setup

```bash
# install
npm ci
# serve with hot-reload for development
npm run serve
```

## Requirements

- List data should be stored in
  [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- List should be sortable by either string value (a-z) or by added date (newest
  first)
- List item should display the delete button on mouse over
- New item # should be equal to maximum number from list plus 1 (starting
  from 1)
- Each item should keep track of when the item was added
- Search bar should have multiple functionality
  - Non-empty value can be cleared through the clear button, or by pressing
    Escape key
  - If searched string (case insensitive) is already present in the list, the
    add button is disabled and appropriate item is marked as "Exact match"
  - If no exact match is found, the add button is enabled and click on it or
    press of Enter key should add the string to the list
- Search bar, list item and icons (svg files in assets) should be individual
  components
- All components should use typescript for its `<script>` part with composition
  api (setup) and scss module for its `<style>` part
- All colors should be defined in `_color.scss` file

## Libraries

The following libraries are available, you can import any utility you'll need.

- [date-fns](https://date-fns.org/) `import { } from "date-fns"`
- [lodash](https://lodash.com/) `import { } from "lodash"`
