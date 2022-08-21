export const environment = {
    production: false,
    name: 'dev',
    firebase: {
        config: {
            apiKey: "AIzaSyDGAAPVzDhISiV0Gm8gT9dMjvdDbpE02dI",
            authDomain: "cloudfirestream.firebaseapp.com",
            projectId: "cloudfirestream",
            storageBucket: "cloudfirestream.appspot.com",
            messagingSenderId: "1076586885479",
            appId: "1:1076586885479:web:c979e85f7e16f7a302bfc2",
            databaseURL: 'https://cloudfirestream.firebaseio.com'
        },
        actionCodeSettings: {
            url: 'http://localhost:5200/profile/new',
            handleCodeInApp: true
        }
    }
};
