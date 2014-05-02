// Run this after initiating your own popsicle instance like:
// var popsicle = new Popsicle();

popsicle.stick('linkedin', {
    url: function() {
        var url = 'http://www.linkedin.com/shareArticle?mini=true';

        url += '&url=http://sean.is'
        url += '&title=' + encodeURIComponent(this.title);
        url += '&summary=' + encodeURIComponent(this.message);

        return url;
    },
    title: 'My new linkedin post',
    message: 'This is a sample message that would populate your linkedin post.',
    width: 640,
    height: 320
});

// Then you can call:
// popsicle.open('linkedin')


