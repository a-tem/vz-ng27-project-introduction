# **feature/services-and-di**

task 1 done: renamed methods in `CartService`. Added separate `totalQuantity` and `totalSum` properties, added `updateCartData` method for updating those properties when `cartProducts` array is changed.

task 2 done: created `LocalStorageService`, injected into `CartListService` via `providers` property and `useClass` option.

task 3 done: created `ConfigOptionsService` with get/set data methods.

task 4 done: created `ConstantsService`, inject it into `FirstComponent` and provide via `useValue` property.

task 5 done: created `GeneratorService` and registered via useFactory + deps properties in `FirstComponent`. Also was created `random-generator.factory`.

task 6 done: created `LayoutModule` and `AboutCompoennt`. Moved all services related to this task list into `AboutComponent`, decoreted them with `@Optional`.

task 7 done: created `ToggleOnClickDirective` toggle css-class (class name is `@Input`) on clicked element. Applied directive to the `ProductComponent` element. 
