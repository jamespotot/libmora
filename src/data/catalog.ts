import data from './catalog.json';
import type { Resource, ProjectKit, Area } from './types';

export const resources = data as Resource[];
export const areas: Area[] = [
  'Embedded & IoT','Hardware & Components','Libraries & Dependencies','Circuit Design','Simulation','Diagrams',
  'Programming','Languages','Digital Logic','Web & Databases','Mobile & Connectivity','CAD & Prototyping',
  'Networking','AI & Vision','Robotics','Signals & Computing','Developer Utilities','Documentation','Learning & Community','Research'
];
export const coreAreas = areas.slice(0,12);
export const kits: ProjectKit[] = [
  {
    id:'blink-an-led',
    title:'Make an LED blink',
    summary:'Write and run your first tiny program: turn an LED on and off at a steady rhythm.',
    tags:['First project','Digital output','Arduino'],
    resources:['arduino-uno','arduino-ide','led','resistor'],
    task:'Start with the built-in LED on an Arduino Uno, or use the online simulator. Change the on/off delay, then make the blink pattern communicate a simple status such as ready or waiting.',
    level:'Beginner',
    time:'20–30 minutes',
    beforeStart:['Open the linked guide or simulator before you begin.','Use the built-in LED to skip external wiring.'],
    materials:['Arduino Uno with USB cable, or the linked browser simulator.','If using an external LED: breadboard, LED, and a suitable current-limiting resistor.'],
    learningGoals:['Relate a short program to a physical output.','Recognize setup code, a repeating loop, and timed state changes.','Use a resistor when wiring an external LED.'],
    sourceUrl:'https://docs.arduino.cc/built-in-examples/basics/Blink/',
    sourceLabel:'Arduino: Blink example',
    simulatorUrl:'https://wokwi.com/projects/new/arduino-uno'
  },
  {
    id:'button-controlled-led',
    title:'Control an LED with a button',
    summary:'Build a simple digital input: pressing a button changes what the microcontroller does.',
    tags:['Beginner','Digital input','Breadboard'],
    resources:['arduino-uno','arduino-ide','led','resistor','breadboard','pushbutton'],
    task:'Wire a pushbutton and LED, then change the program so each press toggles the LED state. If you see unstable readings, investigate the input wiring and the example’s pull-up or pull-down approach.',
    level:'Beginner',
    time:'30–45 minutes',
    beforeStart:['Review the Button guide and identify the pins you will use.','Choose the guide’s internal pull-up or external-resistor wiring.'],
    materials:['Arduino Uno with USB cable.','Breadboard, pushbutton, LED, resistors, and jumper wires.'],
    learningGoals:['Tell digital inputs and outputs apart.','Read a button state and respond to it in code.','Understand why an input needs a defined electrical state.'],
    sourceUrl:'https://docs.arduino.cc/built-in-examples/digital/Button/',
    sourceLabel:'Arduino: Button example',
    simulatorUrl:'https://wokwi.com/projects/new/arduino-uno'
  },
  {
    id:'potentiometer-dimmer',
    title:'Build a smooth LED dimmer',
    summary:'Use a knob as an analog input and pulse-width modulation (PWM) to control LED brightness.',
    tags:['Beginner','Analog input','PWM'],
    resources:['arduino-uno','arduino-ide','led','resistor','breadboard','potentiometer'],
    task:'Read a potentiometer value, map the range to a PWM output, and use it to change LED brightness. Print both values to the serial monitor and explain how the input range maps to the output.',
    level:'Beginner',
    time:'45–60 minutes',
    beforeStart:['Know how to upload a sketch and open the serial monitor.','Check the board’s analog-input and PWM-capable pins.'],
    materials:['Arduino Uno with USB cable.','Breadboard, potentiometer, LED, current-limiting resistor, and jumper wires.'],
    learningGoals:['Distinguish analog readings from digital HIGH/LOW states.','Use a PWM-capable output to vary brightness.','Observe input and output values through serial communication.'],
    sourceUrl:'https://docs.arduino.cc/built-in-examples/',
    sourceLabel:'Arduino built-in examples: Analog and PWM sections',
    simulatorUrl:'https://wokwi.com/projects/new/arduino-uno'
  },
  {
    id:'temperature-monitor',
    title:'Read temperature and humidity',
    summary:'Connect a digital environmental sensor, display measurements in the serial monitor, and add a threshold warning.',
    tags:['Beginner+','Sensors','Serial output'],
    resources:['arduino-uno','arduino-ide','dht11','dht22'],
    task:'Follow the sensor guide to read temperature and humidity. Add a clear warning when temperature crosses a threshold you choose, and note how often the sensor should be read.',
    level:'Intermediate',
    time:'60–90 minutes',
    beforeStart:['Review the sensor guide and confirm you can install its library.','Check whether your sensor module needs a pull-up resistor.'],
    materials:['Arduino-compatible board and a DHT sensor module.','USB cable, jumper wires, and any pull-up component required by your sensor module.'],
    learningGoals:['Connect a library to a hardware sensor.','Read and interpret measurements with units.','Handle unavailable or invalid readings without treating them as real data.'],
    sourceUrl:'https://learn.adafruit.com/dht',
    sourceLabel:'Adafruit: DHT sensor guide'
  },
  {
    id:'traffic-light-sequencer',
    title:'Program a traffic-light sequence',
    summary:'Combine multiple outputs and timing into a predictable sequence, then add a pedestrian-request button as a stretch goal.',
    tags:['Beginner','Digital outputs','State and timing'],
    resources:['arduino-uno','arduino-ide','led','resistor','breadboard','pushbutton'],
    task:'Create red, yellow, and green LED phases with safe, non-overlapping transitions. Draw a state diagram before coding; as an extension, use a button to request a walk phase.',
    level:'Intermediate',
    time:'60–90 minutes',
    beforeStart:['Identify LED polarity and use a current-limiting resistor.','Plan the light sequence before writing code.'],
    materials:['Arduino Uno with USB cable.','Three LEDs, suitable resistors, breadboard, and jumper wires. Optional: pushbutton and additional resistor.'],
    learningGoals:['Plan program behavior as states and transitions.','Coordinate several outputs over time.','Test edge cases such as switching phases and button presses.'],
    sourceUrl:'https://docs.arduino.cc/built-in-examples/',
    sourceLabel:'Arduino built-in examples: Blink and Button',
    simulatorUrl:'https://wokwi.com/projects/new/arduino-uno'
  },
  {
    id:'ultrasonic-distance-meter',
    title:'Measure distance with an ultrasonic sensor',
    summary:'Trigger a distance measurement, convert the echo time into a distance, and show the reading in the serial monitor.',
    tags:['Intermediate','Sensors','Timing'],
    resources:['arduino-uno','arduino-ide','hc-sr04'],
    task:'Wire an HC-SR04 to a compatible board, measure the echo pulse, convert the result to centimeters, and print a labeled reading. Test it at several known distances and describe where readings become unreliable.',
    level:'Intermediate',
    time:'60–90 minutes',
    beforeStart:['Check board-to-sensor logic-level compatibility, especially the Echo pin.','Review the sensor range; soft or angled surfaces can affect readings.'],
    materials:['Arduino-compatible board with USB cable.','HC-SR04 sensor, jumper wires, and a breadboard if needed.'],
    learningGoals:['Connect pulse timing to a physical measurement.','Convert a raw duration into a meaningful unit.','Compare repeated measurements and discuss error and sensor limits.'],
    sourceUrl:'https://docs.wokwi.com/parts/wokwi-hc-sr04',
    sourceLabel:'Wokwi: HC-SR04 guide',
    simulatorUrl:'https://wokwi.com/projects/new/arduino-uno'
  },
  {
    id:'iot-environment-monitor',
    title:'Build an IoT environment monitor',
    summary:'Combine sensor readings, an ESP32, Wi-Fi, and a message dashboard into a connected monitoring system.',
    tags:['Advanced','ESP32','IoT','MQTT'],
    resources:['esp32-devkit','dht22','adafruit-dht-sensor-library','esp-idf','mqtt-explorer'],
    task:'Build a monitoring prototype that reads temperature and humidity, publishes labeled readings over MQTT, and displays them in a client. Add connection-loss handling and record how often data is sent. Keep credentials out of source control and do not expose a broker without understanding its access controls.',
    level:'Advanced',
    time:'Half day or more',
    beforeStart:['Confirm the ESP32 setup, pinout, and sensor voltage.','Use an MQTT broker you are authorized to access.','Keep Wi-Fi and broker credentials out of public code.'],
    materials:['ESP32 development board and USB cable.','DHT22 sensor or compatible breakout, jumper wires, and any pull-up component required by the module.','Wi-Fi network and an MQTT broker/client that you are authorized to use.'],
    learningGoals:['Integrate sensing, embedded software, and network messaging.','Use topics and payloads to represent telemetry.','Handle connection failures and treat sensor readings as data with limits.','Apply basic credential handling and broker access controls.'],
    sourceUrl:'https://github.com/espressif/esp-idf/tree/master/examples/protocols/mqtt',
    sourceLabel:'Espressif: ESP-IDF MQTT examples'
  },
];
export const byId = new Map(resources.map(resource => [resource.id, resource]));
