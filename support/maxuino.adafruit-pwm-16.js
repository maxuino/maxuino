//from Adafruit_PWMServoDriver.h
var  PCA9685_SUBADR1 = 0x2;
var  PCA9685_SUBADR2 = 0x3;
var  PCA9685_SUBADR3 = 0x4;

var  PCA9685_MODE1 = 0x0;
var  PCA9685_PRESCALE = 0xFE;

var  LED0_ON_L = 0x6;
var  LED0_ON_H = 0x7;
var  LED0_OFF_L = 0x8;
var  LED0_OFF_H = 0x9;

var  ALLLED_ON_L = 0xFA;
var  ALLLED_ON_H = 0xFB;
var  ALLLED_OFF_L = 0xFC;
var  ALLLED_OFF_H = 0xFD;

//slave address
var _i2caddr = 0x40;

//from Adafruit_PWMServoDriver.cpp

/*
Adafruit_PWMServoDriver::Adafruit_PWMServoDriver(uint8_t addr) {
  _i2caddr = addr;
}


void Adafruit_PWMServoDriver::begin(void) {
 Wire.begin();
 reset();
}
*/

function reset() {
 wireWrite(PCA9685_MODE1, 0x0);
}


function setPWMFreq(freq) {
  //Serial.print("Attempting to set freq ");
  //Serial.println(freq);
  
  var prescaleval = 25000000;
  prescaleval /= 4096;
  prescaleval /= freq;
  prescaleval -= 1;
  //Serial.print("Estimated pre-scale: "); Serial.println(prescaleval);
  var prescale = Math.floor(prescaleval + 0.5);
  //Serial.print("Final pre-scale: "); Serial.println(prescale);  
  
 //ali says: this needs reply from i2c
  var oldmode = read8(PCA9685_MODE1);
  var newmode = (oldmode&0x7F) | 0x10; // sleep
  //wireWrite(PCA9685_MODE1, newmode); // go to sleep
  write8(PCA9685_MODE1, newmode); // go to sleep
  //wireWrite(PCA9685_PRESCALE, prescale); // set the prescaler
  write8(PCA9685_PRESCALE, prescale)
    //ali says: this needs reply from i2c
  //write8(PCA9685_MODE1, oldmode);
  //delay(5);
  //write8(PCA9685_MODE1, oldmode | 0x80);
  //write8(PCA9685_MODE1, oldmode | 0xa1);  //  This sets the MODE1 register to turn on auto increment.
                                          // This is why the beginTransmission below was not working.
  //  Serial.print("Mode now 0x"); Serial.println(read8(PCA9685_MODE1), HEX);
}

function setPWM(num, on, off) {
  // hmm doesnt work, whyso?  (  Not in AI mode.  See line 54 above.  ( Works now!!  :D  )
  //Wire.beginTransmission(_i2caddr);
	
  	Wire_beginTransmission(_i2caddr);
  	//Wire_write(LED0_ON_L+4*num);
	write8help(LED0_ON_L+4*num);
  	//Wire_write(on);
  	//Wire_write(on>>8);
	write8help(on);
  	//Wire_write(off);
  	//Wire_write(off>>8);
	write8help(off);
  	Wire_endTransmission();


  //Wire.endTransmission();

/*  
  write8(LED0_ON_L+4*num, on);
  write8(LED0_ON_H+4*num, on >> 8);
  write8(LED0_OFF_L+4*num, off);
  write8(LED0_OFF_H+4*num, off >> 8);
*/
}

function Wire_beginTransmission(addr) {
	outlet(0,0xF0); //start sysex
  	outlet(0,0x74); //i2c_requst
  	outlet(0,addr); //slave address	
	
}


function write8( addr, d) {
  	Wire_beginTransmission(_i2caddr);
  	write8help(addr);
  	write8help(d);
  	Wire_endTransmission();
}


function write8help(d) {

	outlet(0,d % 128); 
	var d_MSB = Math.floor(d / 128);
	outlet(0,d_MSB); 
}

function Wire_endTransmission() {	
	outlet(0,0xF7);
}
	
	


//ali says read8 needs help

function read8(addr) {
  //Wire.beginTransmission(_i2caddr);
  //outlet(0,addr);
  //Wire.endTransmission();

  //ali says: this needs reply from i2c
  //Wire.requestFrom((uint8_t)_i2caddr, (uint8_t)1);
  //return Wire.read();
}
/*
function write8(addr,  d) {
  ////Wire.beginTransmission(_i2caddr);
  	outlet(0,addr);			
	outlet(0,d % 128); 
	//post("d: ", d);
	//post();
	var d_MSB = Math.floor(d / 128);
	if ( d_MSB > 0) { outlet(0,d_MSB); }
  //Wire.endTransmission();

}
*/

/* originals
uint8_t Adafruit_PWMServoDriver::read8(uint8_t addr) {
  Wire.beginTransmission(_i2caddr);
  Wire.write(addr);
  Wire.endTransmission();

  Wire.requestFrom((uint8_t)_i2caddr, (uint8_t)1);
  return Wire.read();
}

void Adafruit_PWMServoDriver::write8(uint8_t addr, uint8_t d) {
  Wire.beginTransmission(_i2caddr);
  Wire.write(addr);
  Wire.write(d);
  Wire.endTransmission();
}*/

	