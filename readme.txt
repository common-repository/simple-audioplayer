=== Simple-Audioplayer ===
Contributors: flomei
Donate link: https://gumroad.com/l/SFvhy
Tags: audio, media, mediaplayer, audioplayer
Requires at least: 4.7
Tested up to: 5.4
Stable tag: trunk
Requires PHP: 7.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Creates a simple audioplayer based on a shortcode, which looks somewhat nicer than the default media player of WordPress.

== Description ==

"Simple Audioplayer" is a plugin for WordPress which aims to provide a somewhat better experience for playing audiofiles in your WordPress site.

While other Audioplayers for WordPress try to impress with visualization and features nobody really needs, the main focus for developing "Simple Audioplayer" was simplicity, ease of use and customizability right through CSS.

By using HTML5 features and pure JavaScript it is compatible to a wide variety of browsers and brings no overhead with itself. It's a simple, sleek solution to play MP3 or OGG files.

If you're looking to run a podcast site, you might need something different, but if you want to occasionally integrate an audiofile, probably look no further.

== Features ==
While being quite simplistic, Simple Audioplayer packs all the features you'll need.

* **Automatic detection whether the browser can play OGG files.** If you provide OGG files, you'll save on traffic and your user on bandwith due to better compression of this format.
* **The player can show an image of your choice right next to its controls.** Use it for "cover art", your logo or whatever. Leave it out and the player will adapt to that, too.
* **SVG elements for controls.** Vector-based graphics for the control elements make sure that the player looks great on any display and resolution. No "pixelated edges". The controls are inspired by material design to provide an unobstrusive, yet good looking experience.
* **Easy styling.** All player elements can either be styled by CSS instructions or, in case of the controls, directly from within the shortcode. This allows you to seamlessly integrate the player into your page. Default styles look good, though and will inherit the design from your page.
* **Multiple players on one page.** You can have multiple players on one page and they are all independent from each other. Each one will keep its own settings, like track position and volume, and starting to play one player will pause any other running player at its current position.

== Purchase & Installation ==
"Simple Audioplayer" is free and can be installed from the WordPress plugin directory.

If you want to feel better, you can purchase a "PREMIUM DELUXE GOLD EDITION" of this plugin from Gumroad (see donation link). This will add nothing in features, change nothing in how the plugin works, you don't even have to enter a serial number.

It's only purpose is to have a good feeling about supporting free software and its authors (and their caffeine addiction), especially in times where the WP ecosystem is getting more and more commercialized and the plugin and theme directory have become a place to lure you into buying "premium versions", because the free versions of items are totally feature-crippled.

== Usage ==
After installing and activating the plugin, you can use it through a shortcode in your posts and pages:

`[simple-audioplayer title="" subtitle="" mp3="" ogg="" color="" image=""]`

Theoretically you could omit everything but the mp3-parameter, but that would be no fun. So, let's have a look at the parameters.

* **title** This can be any text value, like episode name, title of the track and whatnot. Your imagination is the limit.
* **subtitle** Subtitle could be the name of your podcast, additional information on the speaker or the topic.
* **mp3** This must be a link to a MP3 file. Although it must not be saved in your WordPress site this is recommended for maximum performance.
* **ogg** Optionally you can also provide a link to an OGG file. OGG has better compression than MP3 and will therefore save traffic. Not all browsers support OGG but the player will check that by itself.
* **color** This can be any valid CSS color value, default ist `#000` for black controls. Change it to your needs or omit the parameter for black controls.
* **image** Optionally show an image on the left side of the player for cover art or something else. Quadratic images look best.

== Screenshots ==
1. Sample integration with all options on top and almost minimal integration on bottom.

== Questions ==
Feel free to use the WordPress support system for further questions regarding use or features of the plugin. Please do not contact me regarding problems like general plugin installation and alike. There are really good tutorials regarding those topics out here in the internet.

== Changelog ==
2020-06-04: Version 1.1 - Added minified JS and CSS files, those are loaded now