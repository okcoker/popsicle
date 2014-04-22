// Run this after initiating your own popsicle instance like:
// var popsicle = new Popsicle();

popsicle.stick('twitter', {
    url: function() {
        var hashtags = ['hashtag', 'all', 'the', 'things'],
            handle = 'thememery',
            link = 'http://memery.io/memes/oC9afXS',
            url = 'http://twitter.com/share?text=' + encodeURIComponent(this.message);

        url += '&url=';
        url += '&hashtags=';
        url += hashtags.join(',');

        url += '&via=' + handle;
        return url;
    },
    message: 'This is a sample twitter post',
    width: 575,
    height: 400
});

// Then you can call:
// popsicle.open('twitter')
