Popsicle
========

The easier way to open a window popup.


##Purpose
More than a few times, I've needed an easy way to share via some social network. Why add all those 3rd party scripts from sites like Facebook, Twitter, Pinterest when you can just open a window with the url yourself. Not to mention, you can hardly style those little iFrames in the way you want. The url sometimes can be a bit tedious to make but this little library aims to make that process a little bit easier with custom sticks explained below.

In all honesty though, this doesn't just have to be for social sharing. You can open whatever url you'd like.

##Creating custom Popsicle sticks
Who isn't fond of Popsicle sticks? They always have the best jokes. I probably wouldn't be where I am today without reading popsicle sticks. It has made life better and most importantly easier. Same goes with this library.

After creating a new Popsicle, you can easily add a new stick by doing something like the following:
```js
var popsicle = new Popsicle();

popsicle.stick('twitter', {
    // options specific to this stick
});
```

You can then later call upon your new stick like so:

```js
popsicle.open('twitter');
```

Feel free to start off with any of the already provided sticks.
