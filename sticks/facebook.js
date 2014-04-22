// Run this after initiating your own popsicle instance like:
// var popsicle = new Popsicle();

popsicle.stick('facebook', {
    url: function() {
        var url = 'https://www.facebook.com/sharer/sharer.php?u=';

        url += 'http://memery.io';
        url += '&p[title]=' + encodeURIComponent(this.title);
        url += '&p[summary]=' + encodeURIComponent(this.message);

        return url;
    },
    title: 'My new facebook post',
    message: 'This is a sample message that would populate your facebook post.',
    width: 640,
    height: 320
});

// Then you can call:
// popsicle.open('facebook')


