# **feature/introduction**
created `FirstComponent` with properties, added it to the `AppComponent` template;

added shared folder for storing models, enums, etc. files;

created `IProductModel` interface, `ECategoryEnum` enum;

created `ProductComponent`, added handler for button `click` action, added `@Input() product: IProductModel` property;

created `ProductsService` as a `productsList: IProductModel` provider, created `ProductListComponent`;

created `CartListComponent`, added to the `AppComponent` template;

implemented interaction between `ProductListComponent` and `CartListComponent`

migrated to the scss extension from css

folders structure was changed
