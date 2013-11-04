autowatch = 1;
inlets = 1;
outlets = 1;

// storage byte array
var sbyte = new Array();
// storage byte array
var pinsbyte = new Array(); //stores pinmode for digital ins

for (var k = 0; k < 10; k++) pinsbyte[k] = 0; //make sure it starts zeroed out

var pinsbyte2 = new Array();//stores pinmode for servo option

for (var m = 0; m < 4; m++) pinsbyte2[m] = 0;
function reset() {
    post("reset!");
    for (var k = 0; k < 10; k++) pinsbyte[k] = 0;
    for (var m = 0; m < 3; m++) pinsbyte2[m] = 0;
    for (var n = 0; m < 3; n++) sbyte2[n] = 0;
    for (var p = 0; p < 3; p++) command[p] = 0;
    outlet(0, 255);
}


// global area
post("Initialized!");

function analogIns(a, b) {
    if (a<0)    a = 0;
    if (a>15)    a = 15;
    outlet(0, 192+a, b);
}

function version() {
    outlet(0, 249);
}

function pinMode(a, b)
{
    
    if (a>127)    a = 127;
    if (b<0)    b = 0;
    if (b>4)    b = 4;
    var port = Math.floor(a / 8);
    if (b==4) {
        pinsbyte2[port] = pinsbyte2[port] | (1<<(a%8));
    }else if (b==0) {  //take care of turning on and off digital ports automatically
        if (pinsbyte[port] == 0) { 
            outlet(0, 208+port, 1);//digital port on and off handled by 208
        }
        pinsbyte[port] = pinsbyte[port] | (1<<(a%8));
        pinsbyte2[port] = pinsbyte2[port] & (255-(1<<(a%8)));
    } else{
        pinsbyte[port] = pinsbyte[port] & (255-(1<<(a%8)));
        pinsbyte2[port] = pinsbyte2[port] & (255-(1<<(a%8)));
        if (pinsbyte[port] == 0) outlet(0, 208+port, 0);
    }
    
    outlet(0, 244, a, b); //pin mode changes are set with 244
}



function pwm(a, b) {
    if (a<0)    a = 0;
    if (a>15)    a = 15;
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


function digital(a, b)
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

/*===========================================
the following code deciphers the incoming signals
============================================*/

digitalCode.local = 1;
analogCode.local = 1;

var command = new Array();
var sbyte2 = new Array();
var i = 0;

function msg_int(a) {
    //post(" raw "+a +"\n");
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
                outlet(0, "/version", command[1]+command[2]/10);
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
            outlet(0, "/digital", "/"+pin, 1);
        }
        else if(((sbyte2[port] ^ command[1]) & 1<<j) != 0) {
                var pin = j+(port*8);            
                //post ("digital " + pin + " "+ "0"+ "\n");
                outlet(0, "/digital", "/"+pin, 0);
        }
    }
    sbyte2[port] = command[1];
}

function analogCode() {
    var aport = command[0] - 224;
    var reading = (command[2]*128 + command[1])/1024;
    outlet(0, "/analog", "/"+aport, reading);
}
