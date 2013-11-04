autowatch = 1;
inlets = 1;
outlets = 3;

// global area
function loadbang() {
    post("Initialized!");
    outlet(0, 240, 107, 247); //query the board for capabilities
}
//2D array with all pin capabilities and states
var pinModes = createArray(127, 14);

//boolean for quiet status update
var infoMode = false;
//2D array for storing stepper configs
var stepDevices = createArray(6, 6);
cleanArray(pinModes);
cleanArray(stepDevices);
// stores digital port status
var portsbyte = createArray(8);
var digiCombo = createArray(8);
for (var p = 0; p < portsbyte.length; p++) { portsbyte[p] = 0; }
for (var q = 0; q < digiCombo.length; q++) { digiCombo[q] = 0; }
//track pin total for the current board
var pinTotal = 0;

function reset() {
    post("reset!");
    cleanArray(pinModes);
    cleanArray(stepDevices);
    for (var p = 0; p < portsbyte.length; p++) { portsbyte[p] = 0; }
    for (var q = 0; q < digiCombo.length; q++) { digiCombo[q] = 0; }
    outlet(0, 255);
    outlet(0, 240, 107, 247);
}

function version() {
    outlet(2, 249);
}

function save() { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var saveString = '';
    for (var pin = 0; pin < pinModes.length; pin++) {
        var setting = pinModes[pin][12];
        if(setting >= 0) saveString += 'pinMode ' + pin + ' ' + setting + ', ';
    }
    for (var stepCon = 0; stepCon < stepDevices.length; stepCon++) {
        var savedStep = stepDevices[stepCon][0];
        if(savedStep > 0) {
            if(savedStep == 1) saveString += 'stepperConfig ' + stepCon + ' ' + stepDevices[stepCon][0] + ' ' + stepDevices[stepCon][1] + ' ' + stepDevices[stepCon][2] + ' ' + stepDevices[stepCon][3] + ', ';
            else saveString += 'stepperConfig ' + stepCon + ' ' + stepDevices[stepCon][0] + ' ' + stepDevices[stepCon][1] + ' ' + stepDevices[stepCon][2] + ' ' + stepDevices[stepCon][3] + ' ' + stepDevices[stepCon][4] + ' ' + stepDevices[stepCon][5] + ', ';
        }
    }
    saveString = saveString.slice(0, saveString.length - 2);
    outlet(2, saveString);
}

function pinMode(a, b)
{
    if (a>127)    a = 127;
    if (b<0)    b = 0;
    if (b>4)    b = 4;
    var port = Math.floor(a / 8);

    if(pinModes[a][b] == -1) {
        outlet(2, "For pin " + a + " Firmata reports this as an invalid pinMode");
    }
    if (b==0) {  //take care of turning on and off digital ports automatically
        if (portsbyte[port] == 0) {
            outlet(0, 208+port, 1);//digital port on and off handled by 208
            portsbyte[port] = 1;
        }
        pinModes[a][12] = b;
        outlet(0, 244, a, b); //pin mode changes are set with 244
    }else{
        var check = false;
        if(pinModes[a][12] == 0) {
            check = true;
        }
        pinModes[a][12] = b;
        outlet(0, 244, a, b); //pin mode changes are set with 244
        if(check) {
            var stillOn = false;
                for (var z = 0+(port*8); z < 8+(port*8); z++) {
                    if(pinModes[z][12]==0) {
                        stillOn = true;
                    }
                }
            if(!stillOn) {
                outlet(0, 208+port, 0);
                portsbyte[port] = 0;
            }
        }
    }
}

function analogWrite(a, b) {
    if (a<0)    a = 0;
    if (a>127)    a = 127;
    if (pinModes[a][12]==3) { 
        b *= 255;
    }else{ b *= 180;}
    var bytetwo;
    var bytethree;
    bytetwo = (b & 127);
    bytethree = ((b & 128) > 0);
    if(a>15) outlet(0, 240, 111, a, bytetwo, bytethree, 247);
    else outlet(0, 224+a, bytetwo, bytethree);
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
        digiCombo[pointer] = (digiCombo[pointer] & temp);     // and we turn off the bit
    } else {
        digiCombo[pointer] = (digiCombo[pointer] | temp);      // here's where we turn on the necessary bit
    }

    byteone = 144 + pointer;
    bytetwo = (digiCombo[pointer] & 127);
    bytethree = ((digiCombo[pointer] & 128) > 0);

    outlet(0, byteone, bytetwo, bytethree);
}


function servoConfig(a, b, c) {
    var minlsb;
    var minmsb;
    minlsb = (b & 127);
    minmsb = ((b & 128) > 0);
    var maxlsb;
    var maxmsb;
    maxlsb = (c & 127);
    maxmsb = ((c & 128) > 0);
    outlet(0,240, 112, a, minlsb, minmsb, maxlsb, maxmsb, 247);
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

function boardInfo() {
    infoMode = true;
    for (var pin = 0; pin < pinTotal; pin++) {
        pinState(pin);
    };
}

function stepperConfig() {
    var cases = 0;
    var deviceNum = arguments[0];
    var interfac = arguments[1];
    var stepsPerRev = arguments[2];
    var dirPin = arguments[3];
    var stepPin = arguments[4];
    if (interfac == 2 || interfac == 4)
        { 
            var pin3 = arguments[5];
            var pin4 = arguments[6];
            cases = 1;
        }
    var stepsPerRevLSB = stepsPerRev % 128;
    var stepsPerRevMSB = Math.round(stepsPerRev / 128);
    pinModes[dirPin][10] = deviceNum;
    pinModes[stepPin][11] = deviceNum;
    stepDevices[deviceNum][0]=interfac;
    stepDevices[deviceNum][1]=stepsPerRev;
    stepDevices[deviceNum][2]=dirPin;
    stepDevices[deviceNum][3]=stepPin;

    switch (cases) {
            case 0:    
                outlet(0, 240, 114,0, deviceNum, interfac, stepsPerRevLSB,stepsPerRevMSB, dirPin, stepPin, 247);
                break;
            case 1:    
                outlet(0, 240, 114,0, deviceNum, interfac, stepsPerRevLSB,stepsPerRevMSB, dirPin, stepPin, pin3, pin4, 247);
                stepDevices[deviceNum][4]=pin3;
                stepDevices[deviceNum][5]=pin4;
                break;
    }
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
            case 0:    
                outlet(0, 240, 114,1, deviceNum, dir, stepsLSB,stepsLSB,stepsMSB,speedLSB,speedMSB, 247);
                break;
            case 1:    
                outlet(0, 240, 114,1, deviceNum, dir, stepsLSB,stepsLSB,stepsMSB,speedLSB,speedMSB, accelLSB, accelMSB, 247);
                break;
            case 2:    
                outlet(0, 240, 114,1, deviceNum, dir, stepsLSB,stepsLSB,stepsMSB,speedLSB,speedMSB, accelLSB, accelMSB, deaccelLSB, deaccelMSB,  247);
                break;
    }
}

/*===========================================
the following code deciphers the incoming signals
============================================*/

digitalCode.local = 1;
analogCode.local = 1;
createArray.local = 1;
cleanArray.local = 1;

var command = new Array();
var sbyte2 = new Array();
cleanArray(command);
cleanArray(sbyte2);

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
            boardConfigA();
        }else if(command[1] == 108) { 
            boardConfig(); 
        }else if(command[1] == 114) {
            outlet(1, "stepper "+command[2]+ " done");
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
                    outlet(2, "Firmata version", command[1]+command[2]/10);
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
            outlet(1, "digital", pin, 1);
        }
        else if(((sbyte2[port] ^ command[1]) & 1<<j) != 0) {
                var pin = j+(port*8);            
                //post ("digital " + pin + " "+ "0"+ "\n");
                outlet(1, "digital", pin, 0);
        }
    }
    sbyte2[port] = command[1];
}

function analogCode() {
    var aport = command[0] - 224;
    var reading = (command[2]*128 + command[1])/1024;
    outlet(1, "analog",aport, reading);
}

function pinStatus() {
    var value = command[4];
    if(command[5] != -1) value += command[5]*128;
    if(command[3] == 3) value /= 255;
    if(command[3] == 4) value /= 180;
    if(!infoMode) outlet(2, "pinState", command[2], command[3], value);
    pinModes[command[2]][12] = command[3];
    pinModes[command[2]][13] = value;
    if(infoMode) outlet(2, "boardInfo", command[2], pinModes[command[2]]);
    if(command[2] == pinTotal-1) infoMode = false;
}



function boardConfig() {
    var pinNum = 0;
    var tempArray = new Array();
    var tempCount = 0;
    
    for (var i=2; i<command.length; i++) {
        
        if(command[i]==127) {
            for (var v = 0; v < tempArray.length; v+=2) {
                pinModes[pinNum][tempArray[v]]=1;
            };
            outlet(2, "pin Configuration options for pin " + pinNum + '= ', pinModes[pinNum]);
            pinNum++;
            tempCount = 0;
            tempArray = new Array();
        }else{
            tempArray[tempCount] = command[i];
            tempCount++;
        }
    } 
    pinTotal = pinNum;
    cleanArray(command);
}

function boardConfigA() {
    for (var i=2; i<command.length; i++) {
        if(command[i]>=0 && command[i]<127){
            outlet(2, "pin", i-2, "is analog",command[i]);
        }
    }
    cleanArray(command);
}

//Helpers
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function cleanArray(vectors) {
    for (var x = 0; x < vectors.length; x++) {
        if (vectors[x].length > 1) {
            for (var y = 0; y < vectors[x].length; y++) {
                vectors[x][y] = -1;
            }
        }else {vectors[x] = -1;}
    }
}
