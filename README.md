## ngTriStateCheckbox

### Why?
Currently, Angular doesn't provide a binding for the checkbox **indeterminate** state, so you can't set a checkbox as indeterminate without tinkering with the DOM. This component provides a wrapper around the checkbox so that you don't have to do the DOM tinkering yourself.

### Getting Started

You need to clone/download this repo and copy the `src/app/tr-state-checkbox` folder to your project

Import `TriStateCheckboxModule` in your module
```typescript
import { TriStateCheckboxModule } from './tri-state-checkbox.module';
```
Declare `TriStateCheckboxModule` in the module imports
```typescript
@NgModule({
  ..
  imports: [
    ..,
    TriStateCheckboxModule
  ],
  ..
})

```
Use the `<tri-state-checkbox>` directive as follows in your `*.component.html` or in the component `template` according to your preference
```html
..
<tri-state-checkbox 
    [state]="yourStateVariable" 
    (onStateChange)="yourChangeEventHandler($event)">
</tri-state-checkbox>
..
```

`state` could be one of the following three states,
1. `true`  (checked)
2. `false` (unchecked)
3. `null`  (indeterminate)

Since `yourStateVariable` could either be a `boolean` or `null`, it should be declared with the `any` type.
```typescript
public yourStateVariable: any;
```

`onStateChange` emits an event whenever a change occurs in the checkbox as a result of user interaction.
the `$event` value will be either `true` or `false` depending on whether the checkbox is checked or unchecked.

It is important to note that `state` is a one way binding and changes that happen as a result of user manually clicking on the checkbox won't be reflected unless it is handled appropriately in `onStateChanged` event handler method.

### Example:
The sample code below demmonstrates how the state variable can be updated in the event handler method.

**app.component.html**
```html
..
<tri-state-checkbox 
    [(state)]="checkboxState" 
    (onStateChange)="onCheckboxStateChange($event)">
</tri-state-checkbox>
..
```

**app.component.ts**
```typescript
public onCheckboxStateChange(value: boolean) {
    this.checkboxState = value;
}
```
