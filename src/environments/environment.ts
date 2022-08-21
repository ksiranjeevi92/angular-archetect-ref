// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    name: 'default',
    firebase: {
        config: {
            apiKey: "AIzaSyDGAAPVzDhISiV0Gm8gT9dMjvdDbpE02dI",
            authDomain: "cloudfirestream.firebaseapp.com",
            projectId: "cloudfirestream",
            storageBucket: "cloudfirestream.appspot.com",
            messagingSenderId: "1076586885479",
            appId: "1:1076586885479:web:c979e85f7e16f7a302bfc2",
            databaseURL: 'https://courseapp-3cbec.firebaseio.com',
        },
        actionCodeSettings: {
            url: 'http://localhost:5200/demo',
            handleCodeInApp: true
        }
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
