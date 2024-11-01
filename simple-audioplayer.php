<?php
/**
 * Plugin Name: Simple Audioplayer
 * Description: Creates a simple audioplayer based on a shortcode, which looks somewhat nicer than the default media player of WordPress.
 * Version: 1.1
 * Author: Florian Meier
 * Author URI: https://www.flomei.de/
 * Plugin URI: https://www.flomei.de/projekte/simple-audioplayer/
 */

function flomeipunktde_simple_audioplayer($atts) {
	$a = shortcode_atts(array(
        'title' => '',
        'subtitle' => '',
        'mp3' => '',
        'ogg' => '',
        'image' => '',
        'color' => '#000'
    ), $atts );
    
    $title = $a['title'];
    $subtitle = $a['subtitle'];
    $mp3 = $a['mp3'];
    $ogg = $a['ogg'];
    $image = $a['image'];
    $color = $a['color'];
    $id = uniqid('player');

    if(strlen($image) > 0) { $output .= '<div class="audioplayer"><img class="showimage" src="' . $image . '">'; }
    else { $output .= '<div class="audioplayer no-image">'; }
    $output .= '<div class="player" id="' . $id . '">
                <div class="track-controls">
                    <svg class="btn-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="' . $color . '" width="4em" height="4em"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                    <svg class="btn-pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="' . $color . '" width="4em" height="4em"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </div>
                <div class="track-information">
                    <span class="title">' . $title . '</span>
                    <span class="subtitle">' . $subtitle . '</span>
                </div>
                <div class="advanced-controls">
                    <svg class="btn-stop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="' . $color . '" width="1.25em" height="1.25em"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 6h12v12H6z"/></svg>
                    <span class="time"></span>
                    <svg class="btn-vol-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="' . $color . '" width="1.25em" height="1.25em"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                    <span class="vol-value"></span>
                    <svg class="btn-vol-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="' . $color . '" width="1.25em" height="1.25em"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </div>
            </div>
        </div>
        <script>
            var player = createSimpleAudioplayer("' . $id . '", "' . $mp3 . '", "' . $ogg . '");
            if(typeof(SimpleAudioplayers) === "undefined") {
                var SimpleAudioplayers = new Array();
                SimpleAudioplayers.push(player);
            } else {
                SimpleAudioplayers.push(player);
            }
        </script>
    ';

    return $output;
}
add_shortcode('simple-audioplayer', 'flomeipunktde_simple_audioplayer');

# register resources
function flomeipunktde_enqueue_files() {
    $filenameJS = plugin_dir_url( __FILE__ ).'js/simple-audioplayer.min.js';
    wp_enqueue_script('simple-audioplayer-js', $filenameJS, false);

    $filenameCSS = plugin_dir_url( __FILE__ ).'css/simple-audioplayer.min.css';
    wp_enqueue_style('simple-audioplayer', $filenameCSS, false );    
}
add_action('wp_enqueue_scripts', 'flomeipunktde_enqueue_files');