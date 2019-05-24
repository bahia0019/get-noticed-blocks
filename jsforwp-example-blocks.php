<?php
/**
 *
 * @package     Get_Noticed_Blocks
 * @author      William Bay
 * @license     GPL2+
 *
 * @wordpress-plugin
 * Plugin Name: Get Noticed Blocks
 * GitHub Plugin URI: https://github.com/bahia0019/get-noticed-blocks
 * Description: Get Noticed with Flaunt Sites Blocks plugin.
 * Version:     0.1.1
 * Author:      William Bay
 * Author URI:  https://getnoticed.flauntsite.com
 * Text Domain: fsblocks
 * Domain Path: /languages
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */
 
namespace Get_Noticed_Blocks;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

// Enqueue JS and CSS
include __DIR__ . '/lib/enqueue-scripts.php';

// Register meta boxes
include __DIR__ . '/lib/meta-boxes.php';

// Block Templates
include __DIR__ . '/lib/block-templates.php';
