
Meteor.startup(function() {

    // remove the loading box
    $('.loading-box').remove();

    // ENABLE FASTCLICK
    new FastClick(document.body);


    // SET default language
    if(Cookie.get('TAPi18next')) {
        TAPi18n.setLanguage(Cookie.get('TAPi18next'));
    } else {
        var userLang = navigator.language || navigator.userLanguage,
        availLang = TAPi18n.getLanguages();

        // set default language
        if (availLang[userLang]) {
            TAPi18n.setLanguage(userLang);
            // lang = userLang; 
        } else if (availLang[userLang.substr(0,2)]) {
            TAPi18n.setLanguage(userLang.substr(0,2));
            // lang = userLang.substr(0,2);
        } else {
            TAPi18n.setLanguage('en');
            // lang = 'en';
        }
    }
    // change moment language, when language changes
    Tracker.autorun(function(){
        moment.locale(TAPi18n.getLanguage());
    });

});