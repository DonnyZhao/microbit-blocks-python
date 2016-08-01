
var microbitToolbox = '<xml id="blockly-toolbox" style="display: none">' +
'  <category name="Basic" colour="190">' +
'    <block type="device_show_number" gap="8">' +
'      <value name="number">' +
'        <shadow type="math_number">' +
'          <field name="NUM">2</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="device_show_leds" gap="8">' +
'    </block>' +
'    <block type="device_print_message">' +
'      <value name="message">' +
'        <shadow type="text">' +
'          <field name="TEXT">Hello!</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="device_clear_display"></block>' +
'    <block type="device_forever" gap="8"></block>' +
'    <block type="device_pause">' +
'      <value name="pause">' +
'        <shadow type="math_number">' +
'          <field name="NUM">100</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'  </category>' +
'  <category name="Input" colour="300">' +
'    <block type="device_button_event"></block>' +
'    <block type="device_gesture_event"></block>' +
'    <block type="device_pin_event"></block>' +
'    <block type="device_get_button2" gap="8"></block>' +
'    <block type="device_heading" gap="8"></block>' +
'    <block type="device_temperature" gap="8"></block>' +
'    <block type="device_get_acceleration" gap="8"></block>' +
'    <block type="device_get_light_level" gap="8"></block>' +
'    <block type="device_get_rotation" gap="8"></block>' +
'    <block type="device_get_magnetic_force" gap="8"></block>' +
'    <block type="device_get_running_time" gap="8"></block>' +
'  </category>' +
'  <category name="Loops" colour="120">' +
'    <block type="controls_repeat_ext">' +
'      <value name="TIMES">' +
'        <shadow type="math_number">' +
'          <field name="NUM">4</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="device_while">' +
'        <value name="COND">' +
'            <block type="logic_boolean"></block>' +
'        </value>' +
'    </block>' +
'    <block type="controls_simple_for">' +
'      <value name="TO">' +
'        <shadow type="math_number">' +
'          <field name="NUM">4</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'  </category>' +
'  <category name="Logic" colour="210">' +
'    <block type="controls_if"></block>' +
'    <block type="logic_compare" gap="8">' +
'        <field name="OP">LT</field>' +
'        <value name="A">' +
'            <shadow type="math_number">' +
'            <field name="NUM">0</field>' +
'            </shadow>' +
'        </value>' +
'        <value name="B">' +
'            <shadow type="math_number">' +
'            <field name="NUM">0</field>' +
'            </shadow>' +
'        </value>' +
'    </block>' +
'    <block type="logic_compare" gap="8">' +
'        <value name="A">' +
'            <shadow type="math_number">' +
'            <field name="NUM">0</field>' +
'            </shadow>' +
'        </value>' +
'        <value name="B">' +
'            <shadow type="math_number">' +
'            <field name="NUM">0</field>' +
'            </shadow>' +
'        </value>' +
'    </block>' +
'    <block type="logic_compare" >' +
'        <field name="OP">GT</field>' +
'        <value name="A">' +
'            <shadow type="math_number">' +
'            <field name="NUM">0</field>' +
'            </shadow>' +
'        </value>' +
'        <value name="B">' +
'            <shadow type="math_number">' +
'            <field name="NUM">0</field>' +
'            </shadow>' +
'        </value>' +
'    </block>' +
'    <block type="logic_operation" gap="8"></block>' +
'    <block type="logic_operation" gap="8">' +
'        <field name="OP">OR</field>' +
'    </block>' +
'    <block type="logic_negate"></block>' +
'    <block type="logic_boolean" gap="8"></block>' +
'    <block type="logic_boolean">' +
'        <field name="BOOL">FALSE</field>' +
'    </block>' +
'  </category>' +
'  <category name="Variables"  colour="330" custom="VARIABLE"></category>' +
'  <category name="Maths" colour="230">' +
'    <block type="math_arithmetic" gap="8">' +
'      <value name="A">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'      <value name="B">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="math_arithmetic" gap="8">' +
'      <value name="A">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'      <value name="B">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'       <field name="OP">MINUS</field>' +
'    </block>' +
'    <block type="math_arithmetic" gap="8">' +
'      <value name="A">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'      <value name="B">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'       <field name="OP">MULTIPLY</field>' +
'    </block>' +
'    <block type="math_arithmetic">' +
'      <value name="A">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'      <value name="B">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'       <field name="OP">DIVIDE</field>' +
'    </block>' +
'    <block type="device_random">' +
'      <field name="limit">4</field>' +
'    </block>' +
'    <block type="math_op2" gap="8">' +
'      <value name="x">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'      <value name="y">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="math_op2" gap="8">' +
'      <value name="x">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'      <value name="y">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'       <field name="op">max</field>' +
'    </block>' +
'    <block type="math_op3">' +
'      <value name="x">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="math_number">' +
'      <field name="NUM">0</field>' +
'    </block>' +
'  </category>' +
'  <category name="LED" colour="3">' +
'    <block type="device_plot" gap="8">' +
'      <value name="x">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'      <value name="y">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="device_unplot" gap="8">' +
'      <value name="x">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'      <value name="y">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="device_point">' +
'      <value name="x">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'      <value name="y">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="device_get_brightness"  gap="8"></block>' +
'    <block type="device_set_brightness">' +
'        <value name="value">' +
'            <shadow type="math_number">' +
'                <field name="NUM">255</field>' +
'            </shadow>' +
'        </value>' +
'    </block>' +
'    <block type="device_stop_animation"></block>' +
'    <block type="device_plot_bar_graph">' +
'        <value name="value">' +
'            <shadow type="math_number">' +
'                <field name="NUM">0</field>' +
'            </shadow>' +
'        </value>' +
'        <value name="high">' +
'            <shadow type="math_number">' +
'                <field name="NUM">1023</field>' +
'            </shadow>' +
'        </value>' +
'    </block>' +
'  </category>' +
'  <category name="Radio" colour="270">' +
'      <block type="radio_broadcast" gap="12">' +
'        <value name="MESSAGE">' +
'            <shadow type="math_number">' +
'                <field name="NUM">0</field>' +
'            </shadow>' +
'        </value>' +
'      </block>' +
'      <block type="radio_broadcast_received_event">' +
'        <field name="MESSAGE">0</field>' +
'      </block>' +
'      <block type="radio_datagram_send" gap="8">' +
'        <value name="MESSAGE">' +
'            <shadow type="math_number">' +
'                <field name="NUM">0</field>' +
'            </shadow>' +
'        </value>' +
'      </block>' +
'      <block type="radio_datagram_receive" gap="8"></block>' +
'      <block type="radio_datagram_rssi" gap="14"></block>' +
'      <block type="radio_datagram_received_event"></block>' +
'      ' +
'      <block type="radio_datagram_send_numbers" gap="8">' +
'        <value name="VALUE0">' +
'            <shadow type="math_number">' +
'                <field name="NUM">0</field>' +
'            </shadow>' +
'        </value>' +
'        <value name="VALUE1">' +
'            <shadow type="math_number">' +
'                <field name="NUM">0</field>' +
'            </shadow>' +
'        </value>' +
'        <value name="VALUE2">' +
'            <shadow type="math_number">' +
'                <field name="NUM">0</field>' +
'            </shadow>' +
'        </value>' +
'        <value name="VALUE3">' +
'            <shadow type="math_number">' +
'                <field name="NUM">0</field>' +
'            </shadow>' +
'        </value>' +
'      </block>' +
'      <block type="radio_datagram_received_number_at">' +
'        <value name="VALUE">' +
'            <shadow type="math_number">' +
'                <field name="NUM">1</field>' +
'            </shadow>' +
'        </value>' +
'      </block>' +
'      ' +
'      <block type="radio_set_group" gap="8">' +
'        <value name="ID">' +
'            <shadow type="math_number">' +
'                <field name="NUM">0</field>' +
'            </shadow>' +
'        </value>' +
'      </block>' +
'  </category>' +
'  <category name="Music" colour="52">' +
'    <block type="device_play_note" gap="8">' +
'      <value name="note">' +
'        <shadow type="device_note"></shadow>' +
'      </value>' +
'      <value name="duration">' +
'        <shadow type="device_beat">' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="device_ring" gap="8">' +
'      <value name="note">' +
'        <shadow type="device_note"></shadow>' +
'      </value>' +
'    </block>' +
'    <block type="device_note"></block>' +
'    <block type="device_rest">' +
'      <value name="duration">' +
'        <shadow type="device_beat">' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="device_tempo" gap="8"></block>' +
'    <block type="device_set_tempo" gap="8">' +
'        <value name="value">' +
'            <shadow type="math_number">' +
'                <field name="NUM">120</field>' +
'            </shadow>' +
'        </value>' +
'    </block>' +
'    <block type="device_change_tempo" gap="8">' +
'        <value name="value">' +
'            <shadow type="math_number">' +
'                <field name="NUM">20</field>' +
'            </shadow>' +
'        </value>' +
'    </block>' +
'  </category>' +
'  <category name="Game" colour="176">' +
'    <block type="game_create_sprite">' +
'      <value name="x">' +
'        <shadow type="math_number">' +
'          <field name="NUM">2</field>' +
'        </shadow>' +
'      </value>' +
'      <value name="y">' +
'        <shadow type="math_number">' +
'          <field name="NUM">2</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="game_move_sprite" gap="8">' +
'      <value name="leds">' +
'        <shadow type="math_number">' +
'          <field name="NUM">1</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="game_turn_sprite">' +
'      <value name="angle">' +
'        <shadow type="math_number">' +
'          <field name="NUM">45</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="game_sprite_change_xy" gap="8">' +
'      <value name="value">' +
'        <shadow type="math_number">' +
'          <field name="NUM">1</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="game_sprite_set_property" gap="8">' +
'      <value name="value">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="game_sprite_property"></block>' +
'    <block type="game_sprite_touching_sprite" gap="8"></block>' +
'    <block type="game_sprite_touching_edge" gap="8"></block>' +
'    <block type="game_sprite_bounce"></block>' +
'    <block type="game_add_score" gap="8">' +
'      <value name="points">' +
'        <shadow type="math_number">' +
'          <field name="NUM">1</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="game_score" gap="8"></block>' +
'    <block type="game_start_countdown" gap="8">' +
'      <value name="duration">' +
'        <shadow type="math_number">' +
'          <field name="NUM">10000</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="game_game_over"></block>' +
'  </category>' +
'  <category name="Images" colour="45">' +
'    <block type="device_show_image_offset" gap="8">' +
'      <value name="offset">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="device_scroll_image">' +
'        <value name="frame offset">' +
'            <shadow type="math_number">' +
'                <field name="NUM">5</field>' +
'            </shadow>' +
'        </value>' +
'        <value name="delay">' +
'            <shadow type="math_number">' +
'                <field name="NUM">200</field>' +
'            </shadow>' +
'        </value>' +
'    </block>' +
'    <block type="device_build_image" gap="8"></block>' +
'    <block type="device_build_big_image"></block>' +
'  </category>' +
'  <category name="Pins" colour="351">' +
'      <block type="device_get_digital_pin" gap="8"></block>' +
'      <block type="device_set_digital_pin">' +
'        <value name="value">' +
'          <shadow type="math_number">' +
'            <field name="NUM">1</field>' +
'          </shadow>' +
'        </value>' +
'      </block>' +
'      <block type="device_get_analog_pin" gap="8"></block>' +
'      <block type="device_set_analog_pin" gap="8">' +
'        <value name="value">' +
'          <shadow type="math_number">' +
'            <field name="NUM">1023</field>' +
'          </shadow>' +
'        </value>' +
'      </block>' +
'      <block type="device_set_analog_period">' +
'        <value name="micros">' +
'          <shadow type="math_number">' +
'            <field name="NUM">20000</field>' +
'          </shadow>' +
'        </value>' +
'      </block>' +
'      <block type="device_set_servo_pin" gap="8">' +
'        <value name="value">' +
'          <shadow type="math_number">' +
'            <field name="NUM">180</field>' +
'          </shadow>' +
'        </value>' +
'      </block>' +
'      <block type="device_set_servo_pulse">' +
'        <value name="micros">' +
'          <shadow type="math_number">' +
'            <field name="NUM">1500</field>' +
'          </shadow>' +
'        </value>' +
'      </block>' +
'      <block type="math_map">' +
'        <value name="value">' +
'          <shadow type="math_number">' +
'            <field name="NUM">0</field>' +
'          </shadow>' +
'        </value>' +
'        <value name="fromLow">' +
'          <shadow type="math_number">' +
'            <field name="NUM">0</field>' +
'          </shadow>' +
'        </value>' +
'        <value name="fromHigh">' +
'          <shadow type="math_number">' +
'            <field name="NUM">1023</field>' +
'          </shadow>' +
'        </value>' +
'        <value name="toLow">' +
'          <shadow type="math_number">' +
'            <field name="NUM">0</field>' +
'          </shadow>' +
'        </value>' +
'        <value name="toHigh">' +
'          <shadow type="math_number">' +
'            <field name="NUM">4</field>' +
'          </shadow>' +
'        </value>' +
'      </block>' +
'  </category>' +
'  <category name="Devices" colour="156">' +
'      <block type="devices_camera" gap="8"></block>' +
'      <block type="devices_remote_control" gap="8"></block>' +
'      <block type="devices_alert" gap="14"></block>' +
'      <block type="devices_device_info_event"></block>' +
'      <block type="devices_gamepad_event"></block>' +
'      <block type="devices_signal_strength" gap="14"></block>' +
'      <block type="devices_signal_strength_changed_event"></block>' +
'  </category>' +
'</xml>';
