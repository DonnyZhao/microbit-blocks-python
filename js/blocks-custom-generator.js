'use strict';

goog.provide('Blockly.Python.device');

goog.require('Blockly.Python');

Blockly.Python.addReservedWords('microbit');

function codeGenNotImplemented(blockName) {
  var b = Blockly.Block.obtain(Blockly.mainWorkspace, blockName);
  if (b.outputConnection) {
    return ['("Generator for block ' + blockName + ' not yet implemented")'];
  } else {
    return '("Generator for block ' + blockName + ' not yet implemented")';
  }
}

Blockly.Python['device_print_message'] = function(block) {
  return codeGenNotImplemented('device_print_message');
};

Blockly.Python['device_show_number'] = function(block) {
  return codeGenNotImplemented('device_show_number');
};

Blockly.Python['device_shake_event'] = function(block) {
  return codeGenNotImplemented('device_shake_event');
};

Blockly.Python['device_gesture_event'] = function(block) {
  return codeGenNotImplemented('device_gesture_event');
};

Blockly.Python['device_pin_event'] = function(block) {
  return codeGenNotImplemented('device_pin_event');
};

Blockly.Python['device_button_event'] = function(block) {
  return codeGenNotImplemented('device_button_event');
};

Blockly.Python['device_get_button'] = function(block) {
  return codeGenNotImplemented('device_get_button');
};

// The new "button is pressed" that doesn't have A+B.
Blockly.Python['device_get_button2'] = function(block) {
  return codeGenNotImplemented('device_get_button2');
};

Blockly.Python['device_get_digital_pin'] = function(block) {
  return codeGenNotImplemented('device_get_digital_pin');
};

Blockly.Python['device_set_digital_pin'] = function(block) {
  return codeGenNotImplemented('device_set_digital_pin');
};

Blockly.Python['device_get_analog_pin'] = function(block) {
  return codeGenNotImplemented('device_get_analog_pin');
};

Blockly.Python['device_set_analog_pin'] = function(block) {
  return codeGenNotImplemented('device_set_analog_pin');
};

Blockly.Python['device_set_analog_period'] = function(block) {
  return codeGenNotImplemented('device_set_analog_period');
};

Blockly.Python['device_set_servo_pin'] = function(block) {
  return codeGenNotImplemented('device_set_servo_pin');
};

Blockly.Python['device_set_servo_pulse'] = function(block) {
  return codeGenNotImplemented('device_set_servo_pulse');
};

Blockly.Python['math_map'] = function(block) {
  return codeGenNotImplemented('math_map');
};

Blockly.Python['device_get_brightness'] = function(block) {
  return codeGenNotImplemented('device_get_brightness');
};

Blockly.Python['device_set_brightness'] = function(block) {
  return codeGenNotImplemented('device_set_brightness');
};

Blockly.Python['device_get_acceleration'] = function(block) {
  return codeGenNotImplemented('device_get_acceleration');
};

Blockly.Python['device_get_rotation'] = function(block) {
  return codeGenNotImplemented('device_get_rotation');
};

Blockly.Python['device_get_magnetic_force'] = function(block) {
  return codeGenNotImplemented('device_get_magnetic_force');
};

Blockly.Python['device_get_light_level'] = function(block) {
  return codeGenNotImplemented('device_get_light_level');
};

Blockly.Python['device_get_running_time'] = function(block) {
  return codeGenNotImplemented('device_get_running_time');
};

Blockly.Python['device_clear_display'] = function(block) {
  return codeGenNotImplemented('device_clear_display');
};

Blockly.Python['device_plot'] = function(block) {
  return codeGenNotImplemented('device_plot');
};

Blockly.Python['device_unplot'] = function(block) {
  return codeGenNotImplemented('device_unplot');
};

Blockly.Python['device_stop_animation'] = function(block) {
  return codeGenNotImplemented('device_stop_animation');
};

Blockly.Python['device_point'] = function(block) {
  return codeGenNotImplemented('device_point');
};

Blockly.Python['device_plot_bar_graph'] = function(block) {
  return codeGenNotImplemented('device_plot_bar_graph');
};

Blockly.Python['device_temperature'] = function(block) {
  return codeGenNotImplemented('device_temperature');
};

Blockly.Python['device_heading'] = function(block) {
  return codeGenNotImplemented('device_heading');
};

Blockly.Python['device_show_leds'] = function(block) {
  return codeGenNotImplemented('device_show_leds');
};

Blockly.Python['device_build_image'] = function(block) {
  return codeGenNotImplemented('device_build_image');
};

Blockly.Python['device_build_big_image'] = function(block) {
  return codeGenNotImplemented('device_build_big_image');
};

Blockly.Python['device_show_image_offset'] = function(block) {
  return codeGenNotImplemented('device_show_image_offset');
};

Blockly.Python['device_scroll_image'] = function(block) {
  return codeGenNotImplemented('device_scroll_image');
};

Blockly.Python['device_pause'] = function(block) {
  return codeGenNotImplemented('device_pause');
};

Blockly.Python['device_forever'] = function(block) {
  return codeGenNotImplemented('device_forever');
};

Blockly.Python['device_comment2'] = function(block) {
  return codeGenNotImplemented('device_comment2');
};

Blockly.Python['device_comment'] = function(block) {
  return codeGenNotImplemented('device_comment');
};

Blockly.Python['math_op2'] = function(block) {
  return codeGenNotImplemented('math_op2');
};

Blockly.Python['math_op3'] = function(block) {
  return codeGenNotImplemented('math_op3');
};

Blockly.Python['device_while'] = function(block) {
  return codeGenNotImplemented('device_while');
};

Blockly.Python['device_random'] = function(block) {
  return codeGenNotImplemented('device_random');
};

Blockly.Python['game_start_countdown'] = function(block) {
  return codeGenNotImplemented('game_start_countdown');
};

Blockly.Python['game_score'] = function(block) {
  return codeGenNotImplemented('game_score');
};

Blockly.Python['game_add_score'] = function(block) {
  return codeGenNotImplemented('game_add_score');
};

Blockly.Python['game_game_over'] = function(block) {
  return codeGenNotImplemented('game_game_over');
};

Blockly.Python['game_create_sprite'] = function(block) {
  return codeGenNotImplemented('game_create_sprite');
};

Blockly.Python['game_move_sprite'] = function(block) {
  return codeGenNotImplemented('game_move_sprite');
};

Blockly.Python['game_turn_sprite'] = function(block) {
  return codeGenNotImplemented('game_turn_sprite');
};

Blockly.Python['game_sprite_bounce'] = function(block) {
  return codeGenNotImplemented('game_sprite_bounce');
};

Blockly.Python['game_sprite_touching_sprite'] = function(block) {
  return codeGenNotImplemented('game_sprite_touching_sprite');
};

Blockly.Python['game_sprite_touching_edge'] = function(block) {
  return codeGenNotImplemented('game_sprite_touching_edge');
};

Blockly.Python['game_sprite_property'] = function(block) {
  return codeGenNotImplemented('game_sprite_property');
};

Blockly.Python['game_sprite_change_xy'] = function(block) {
  return codeGenNotImplemented('game_sprite_change_xy');
};

Blockly.Python['game_sprite_set_property'] = function(block) {
  return codeGenNotImplemented('game_sprite_set_property');
};

Blockly.Python['devices_camera'] = function(block) {
  return codeGenNotImplemented('devices_camera');
};

Blockly.Python['devices_alert'] = function(block) {
  return codeGenNotImplemented('devices_alert');
};

Blockly.Python['devices_remote_control'] = function(block) {
  return codeGenNotImplemented('devices_remote_control');
};

Blockly.Python['devices_gamepad_event'] = function(block) {
  return codeGenNotImplemented('devices_gamepad_event');
};

Blockly.Python['devices_device_info_event'] = function(block) {
  return codeGenNotImplemented('devices_device_info_event');
};

Blockly.Python['devices_signal_strength'] = function(block) {
  return codeGenNotImplemented('devices_signal_strength');
};

Blockly.Python['devices_signal_strength_changed_event'] = function(block) {
  return codeGenNotImplemented('devices_signal_strength_changed_event');
};

Blockly.Python['radio_set_group'] = function(block) {
  return codeGenNotImplemented('radio_set_group');
};

Blockly.Python['radio_broadcast'] = function(block) {
  return codeGenNotImplemented('radio_broadcast');
};

Blockly.Python['radio_broadcast_received_event'] = function(block) {
  return codeGenNotImplemented('radio_broadcast_received_event');
};

Blockly.Python['radio_datagram_send'] = function(block) {
  return codeGenNotImplemented('radio_datagram_send');
};

Blockly.Python['radio_datagram_send_numbers'] = function(block) {
  return codeGenNotImplemented('radio_datagram_send_numbers');
};

Blockly.Python['radio_datagram_receive'] = function(block) {
  return codeGenNotImplemented('radio_datagram_receive');
};

Blockly.Python['radio_datagram_received_number_at'] = function(block) {
  return codeGenNotImplemented('radio_datagram_received_number_at');
};

Blockly.Python['radio_datagram_rssi'] = function(block) {
  return codeGenNotImplemented('radio_datagram_rssi');
};

Blockly.Python['radio_datagram_received_event'] = function(block) {
  return codeGenNotImplemented('radio_datagram_received_event');
};

Blockly.Python['controls_simple_for'] = function(block) {
  return codeGenNotImplemented('controls_simple_for');
};

Blockly.Python['device_note'] = function(block) {
  return codeGenNotImplemented('device_note');
};

["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"].forEach(function (x) {
  Blockly.Python['device_note_'+x]  = function(block) {
    return codeGenNotImplemented('device_note_'+x);
  };
});

["1", "1/2", "1/4", "1/8", "1/16"].forEach(function (x) {
  Blockly.Python['device_duration_'+x] = function(block) {
    return codeGenNotImplemented('device_duration_'+x);
  };
});

Blockly.Python['device_play_note'] = function(block) {
  return codeGenNotImplemented('device_play_note');
};

Blockly.Python['device_ring'] = function(block) {
  return codeGenNotImplemented('device_ring');
};

Blockly.Python['device_rest'] = function(block) {
  return codeGenNotImplemented('device_rest');
};

Blockly.Python['device_beat'] = function(block) {
  return codeGenNotImplemented('device_beat');
};

Blockly.Python['device_tempo'] = function(block) {
  return codeGenNotImplemented('device_tempo');
};

Blockly.Python['device_change_tempo'] = function(block) {
  return codeGenNotImplemented('device_change_tempo');
};

Blockly.Python['device_set_tempo'] = function(block) {
  return codeGenNotImplemented('device_set_tempo');
};

Blockly.Python['variables_change'] = function(block) {
  return codeGenNotImplemented('variables_change');
};
