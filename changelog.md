# **feature/http-client**

**task 1, 2 done**: added json-server lib as a fake backend for app.

**task 3, 4 done**: Added `CartPromiseService` and `OrderObservableService`, changed application structure for working with that services as data-providers.
**task 5 done**: Added `TimingInterceptor` with that counting time for any `cart` requests.

**task 6 partially done**: Added `AppSettingsService`, that trying to read data from localStorage (through LocalStorageService) If there is no data in LS - it reads JSON file from file system `**(not the API-call)**` and save that data to LS.
