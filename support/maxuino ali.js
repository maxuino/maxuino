autowatch = 1;
inlets = 1;
outlets = 2;

// storage byte array
var sbyte = new Array();
// storage byte array
var pinsbyte = new Array(); //stores pinmode for digital ins
var stepPins = new Array(); //stores pinmode for stepperPins
var dirPins = new Array(); //stores pinmode for dirPins

for (var k = 0; k < 10; k++) pinsbyte[k] = 0; //make sure it starts zeroed out
for (var r = 0; r < 6; r++) stepPins[r] = 0;
for (var s = 0; s < 6; s++) dirPins[s] = 0;

var pinsbyte2 = new Array();//stores pinmode for servo option

for (var m = 0; m < 4; m++) pinsbyte2[m] = 0;
function reset() {
    post("reset!");
    for (var k = 0; k < 10; k++) pinsbyte[k] = 0;
    for (var m = 0; m < 3; m++) pinsbyte2[m] = 0;
    for (var n = 0; m < 3; n++) sbyte2[n] = 0;
    for (var p = 0; p < 100; p++) command[p] = 0;
    for (var r = 0; r < 6; r++) stepPins[r] = 0;
    for (var s = 0; s < 6; s++) dirPins[s] = 0;
    outlet(0, 255);
}

var analogCall = false;

// global area
post("Initialized!");

function analogRead(a, b) {
    if (a<0)    a = 0;
    if (a>15)    a = 15;
    outlet(0, 192+a, b);
}

function version() {
    outlet(0, 249);
}

function pinMode(a, b, c)
{
    
    if (a>127)    a = 127;
    if (b<0)    b = 0;
    if (b>6)    b = 6;
    var port = Math.floor(a / 8);
    if (b==4) {
        pinsbyte2[port] = pinsbyte2[port] | (1<<(a%8));
        outlet(0, 244, a, b); //pin mode changes are set with 244
    }else if (b==0) {  //take care of turning on and off digital ports automatically
        if (pinsbyte[port] == 0) { 
            outlet(0, 208+port, 1);//digital port on and off handled by 208
        }
        pinsbyte[port] = pinsbyte[port] | (1<<(a%8));
        pinsbyte2[port] = pinsbyte2[port] & (255-(1<<(a%8)));
        outlet(0, 244, a, b); //pin mode changes are set with 244
    }else if (b>4) {
        if(b==5){
            stepPins[c]=a;
        }else if(b==6){
            dirPins[c]=a;
        }
        for(var g=0; g<6;g++) {
            if(stepPins[g]!=0 && dirPins[g]!=0) {
                outlet(0,240,103,0,g,200, dirPins[g], stepPins[g], 247);
            }
        } 
    }else{
        pinsbyte[port] = pinsbyte[port] & (255-(1<<(a%8)));
        pinsbyte2[port] = pinsbyte2[port] & (255-(1<<(a%8)));
        outlet(0, 244, a, b); //pin mode changes are set with 244
        if (pinsbyte[port] == 0) outlet(0, 208+port, 0);
    }
    
    
}



function analogWrite(a, b) {
    if (a<0)    a = 0;
    if (a>127)    a = 127;
    var port2 = Math.floor(a / 8);
    if ((pinsbyte2[port2] & 1<<(a%8))==0) { 
        b *= 255;
    }else{ b *= 180;}
    var bytetwo;
    var bytethree;
    bytetwo = (b & 127);
    bytethree = ((b & 128) > 0);
    outlet(0, 224+a, bytetwo, bytethree);
}


function digitalWrite(a, b)
{
    var item = a % 8;                         // "item" is the bit that we are affecting
    var pointer = Math.floor(a / 8);   // "pointer" is the byte we are affecting 
    var temp = 1 << item;                // turn on the bit that we will switch

    var byteone;
    var bytetwo;
    var bytethree;

    if (b == 0) {
        temp = 255 - temp;                                    // if we are turning off, we need to make sure not to turn the others off, too.
        sbyte[pointer] = (sbyte[pointer] & temp);     // and we turn off the bit
    } else {
        sbyte[pointer] = (sbyte[pointer] | temp);      // here's where we turn on the necessary bit
    }

    byteone = 144 + pointer;
    bytetwo = (sbyte[pointer] & 127);
    bytethree = ((sbyte[pointer] & 128) > 0);

    outlet(0, byteone, bytetwo, bytethree);
}


function servoConfig(a, b, c) {
    if (a<0)    a = 0;
    if (a>15)    a = 15;
    outlet(0, 112, a, b, c);
}


function board(a) {
    var choice = 0;
    if (a==0) {
        choice = 107;
    } else if(a==1) { 
        choice = 105;
    }
    outlet(0, 240, choice, 247);
}

function pinState(a) {
    outlet(0, 240, 109, a, 247);
}



function stepperConfig(deviceNum, interface, stepsPerRev, dirPin, stepPin) {
    var stepsPerRevLSB = stepsPerRev % 128;
    var stepsPerRevMSB = Math.round(stepsPerRev / 128);
    outlet(0, 240, 114,0, deviceNum, interface, stepsPerRevLSB,stepsPerRevMSB, dirPin, stepPin, 247);
}

function stepperStep() {
    var cases = 0;
    var deviceNum = arguments[0];
    var dir = arguments[1];
    var steps = arguments[2];
    var stepsLSB = steps % 128;
    var stepsOSB = Math.round(steps / 128);
    var stepsMSB = Math.round(steps / 128 / 128);
    
    var speed = arguments[3];
    var speedLSB = speed % 128;
    var speedMSB = Math.round(speed / 128);
    
    if (arguments[4]!= null )
        { var accel = arguments[4];
            var accelLSB = speed % 128;
            var accelMSB = Math.round(speed / 128);
            cases = 1;}
    if (arguments[5]!= null )
        { var deaccel = arguments[5];
            var deaccelLSB = speed % 128;
            var deaccelMSB = Math.round(speed / 128);
            cases = 2;}

    switch (cases) {
            case 0:    outlet(0, 240, 114,1, deviceNum, dir, stepsLSB,stepsLSB,stepsMSB,speedLSB,speedMSB, 247);
            case 1:    outlet(0, 240, 114,1, deviceNum, dir, stepsLSB,stepsLSB,stepsMSB,speedLSB,speedMSB, accelLSB, accelMSB, 247);
            case 2:    outlet(0, 240, 114,1, deviceNum, dir, stepsLSB,stepsLSB,stepsMSB,speedLSB,speedMSB, accelLSB, accelMSB, deaccelLSB, deaccelMSB,  247);
    }
}

/*===========================================
the following code deciphers the incoming signals
============================================*/

digitalCode.local = 1;
analogCode.local = 1;

var command = new Array();
var sbyte2 = new Array();
var i = 0;
var gather = false;

function msg_int(a) {
    //post(" raw "+a +"\n");
    if (a == 240) {
        gather = true;
        i=0;
    } else if (a == 247) {
        gather = false;
        if (command[1] == 110) {
            pinStatus();
        }else if(command[1] == 106) {
            boardStatusA();
        }else if(command[1] == 108) { 
            boardStatusD(); 
        }else if(command[1] == 103) {
            outlet(1, "/stepper", "/"+command[2]);
        }
    }
    if (gather) {
        command[i] = a;
        i++;
    }else{
        if (a > 128) {
            command[0] = a;
           i=1;
        
        } else { 
            if (i<3) {
                command[i] = a;
                i++;
            }
             if (i == 3) {
                i=0;
                if (command[0] > 143 && command[0] < 160) {   //digital pin inputs
                    digitalCode();
                }else if (command[0] > 223 && command[0] < 240) {
                    analogCode();
                }else if (command[0] == 249) {
                    outlet(1, "/board", "/version", command[1]+command[2]/10);
                }
            }        
        }
    }
}

function digitalCode() {
    var port = command[0] - 144;
    if(command[2] == 1) {
        command[1] += 128;
    }
    for (var j = 0; j<8;j++) {
        if((command[1] & 1<<j) != 0) {
            var pin = j+(port*8);            
            //post ("digital " + pin + " "+ "1"+ "\n");
            outlet(1, "/digital/"+pin, 1);
        }
        else if(((sbyte2[port] ^ command[1]) & 1<<j) != 0) {
                var pin = j+(port*8);            
                //post ("digital " + pin + " "+ "0"+ "\n");
                outlet(1, "/digital/"+pin, 0);
        }
    }
    sbyte2[port] = command[1];
}

function analogCode() {
    var aport = command[0] - 224;
    var reading = (command[2]*128 + command[1])/1024;
    outlet(1, "/analog/"+aport, reading);
}

function pinStatus() {
    outlet(1, "/"+command[2], "/state", command[3], command[4]);
}

function boardStatusD() {
    var pinNum = 0;
    var tempArray = new Array();
    var tempCount = 0;
    
    for (var i=2; i<command.length; i++) {
        
        if(command[i]==127) {
            outlet(1, "/board/digital","/"+ pinNum, "/info",tempArray);
            //post("/board/digital"+"/"+ pinNum + "/info "+ tempArray);
            pinNum++;
            tempCount = 0;
            tempArray = new Array();
        }else{
            tempArray[tempCount] = command[i];
            tempCount++;
        }
    } 
    
}

function boardStatusA() {
    for (var i=2; i<command.length; i++) {
        outlet(1, "/board","/"+ (i-2), "/analog",command[i]);
    }
}


