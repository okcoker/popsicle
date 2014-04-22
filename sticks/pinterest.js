// Run this after initiating your own popsicle instance like:
// var popsicle = new Popsicle();

popsicle.stick('pinterest', {
    url: function() {
        var image = 'http://i.memery.io/oC9afXS.jpg',
            page_url = 'http://memery.io/memes/oC9afXS',
            url = 'http://pinterest.com/pin/create/bookmarklet/?media=';

        url += image;
        url += '&url=';
        url += page_url;
        url += '&title=' + encodeURIComponent(this.title);
        url += '&description=' + encodeURIComponent(this.message);

        return url;
    },
    title: 'I wonder.',
    message: 'This is a sample message that would populate your pinterest post.',
    width: 630,
    height: 240
});

// Then you can call:
// popsicle.open('pinterest')
