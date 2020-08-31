# **feature/pipes**
**implemented features**: Added `HeaderComponent` for render navigation buttons,
Created `ButtonStyleDirective` for applying button styles from Tailwind.css,
created `@Confirm` method decorator for avoid accidentally loosing data on form.
Added `LocalStorageService` for interacting with `localstorage` for saving and restoring cart and orders data.
Created `AuthComponent` and `LoginComponent` for mimic authentication process.
Added `SpinnerComponent` and `SpinnerService` for displaying the spinner that imitate API requests.

**task 1 done**: created `routing` for `ProductsList` feature.

**task 2 done**: created `ProductCard` component for displaying only one Product - productId (for rendering) passed through URL params. 
Added `routing` for `ProductCard`, and created `Random Product` button in `Header` for displaying random Product from list.

**task 3 done**: created `CartComponent` as a root component for Cart feature, added `routing` for `Cart` feature. Implemented saving cart items to localstorage via `LocalStorageService` for storing while Order not confirmed.

**task 4 done**: added `OrderModule`, `OrderComponent` and `OrderFormComponent`. Implemented Saving confirmed orders to localstorage through `LocalStorageService`, clear `Cart` data from localstorage when Order confirmed.

**task 5 done**: added `AdminModule` with `ProductsListComponent`, `OrdersListComponent`, `AddProductComponent` and `AdminComponent` and included into `AppModule` as a `lazy module`.
Created `AdminService` and added basic markup for components. Added `CanActivate` and `ProductResolve` guards.

**tasks 6, 7 done**
