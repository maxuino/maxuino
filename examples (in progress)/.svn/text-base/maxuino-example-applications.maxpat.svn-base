{
	"patcher" : 	{
		"fileversion" : 1,
		"rect" : [ 4.0, 44.0, 1415.0, 690.0 ],
		"bgcolor" : [ 0.32549, 0.34902, 0.258824, 1.0 ],
		"bglocked" : 0,
		"defrect" : [ 4.0, 44.0, 1415.0, 690.0 ],
		"openrect" : [ 0.0, 0.0, 0.0, 0.0 ],
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Trebuchet MS",
		"gridonopen" : 0,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 0,
		"toolbarvisible" : 1,
		"boxanimatetime" : 200,
		"imprint" : 0,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"boxes" : [ 			{
				"box" : 				{
					"maxclass" : "comment",
					"text" : "NOTE: pin numberings may vary depending on the hardware you use; before turning on an example, make sure of the following for your pins: \n0) select the appropriate USB Serial port and type of hardware\n1) they have the  functionality possible (i.e. only some pins can put out PWM, only some pins can be analog inputs)\n2) they have been set to the right mode with the /pinNumber/mode messages",
					"linecount" : 4,
					"id" : "obj-28",
					"fontname" : "Trebuchet MS",
					"numinlets" : 1,
					"frgb" : [ 1.0, 0.627451, 0.0, 1.0 ],
					"numoutlets" : 0,
					"fontsize" : 12.0,
					"textcolor" : [ 1.0, 0.627451, 0.0, 1.0 ],
					"patching_rect" : [ 16.333954, 38.0, 782.0, 62.0 ]
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "newobj",
					"text" : "p 4-analog-inputs-controlling-pwm-outputs",
					"id" : "obj-27",
					"fontname" : "Trebuchet MS",
					"numinlets" : 0,
					"numoutlets" : 1,
					"fontsize" : 12.0,
					"patching_rect" : [ 601.0, 110.0, 241.0, 20.0 ],
					"outlettype" : [ "" ],
					"color" : [ 1.0, 0.627451, 0.0, 1.0 ],
					"patcher" : 					{
						"fileversion" : 1,
						"rect" : [ 14.0, 44.0, 917.0, 624.0 ],
						"bgcolor" : [ 0.470588, 0.54902, 0.239216, 1.0 ],
						"bglocked" : 0,
						"defrect" : [ 14.0, 44.0, 917.0, 624.0 ],
						"openrect" : [ 0.0, 0.0, 0.0, 0.0 ],
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 0,
						"gridsize" : [ 15.0, 15.0 ],
						"gridsnaponopen" : 0,
						"toolbarvisible" : 1,
						"boxanimatetime" : 200,
						"imprint" : 0,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"boxes" : [ 							{
								"box" : 								{
									"maxclass" : "comment",
									"text" : "NOTE: messages from maxuino (i.e. /analog and /digital messages for sensor inputs readings) \nare sent to the name \"from-maxuino\" and used in some of the above examples",
									"linecount" : 4,
									"id" : "obj-26",
									"fontname" : "Trebuchet MS",
									"numinlets" : 1,
									"frgb" : [ 1.0, 0.627451, 0.0, 1.0 ],
									"numoutlets" : 0,
									"fontsize" : 12.0,
									"textcolor" : [ 1.0, 0.627451, 0.0, 1.0 ],
									"patching_rect" : [ 536.333984, 26.0, 272.0, 62.0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "comment",
									"text" : "we're playing with pins 38-40 for analog input (i.e. Teensy++ style)",
									"linecount" : 4,
									"id" : "obj-37",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 0,
									"fontsize" : 12.0,
									"patching_rect" : [ 288.0, 366.0, 125.0, 62.0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "button",
									"id" : "obj-38",
									"numinlets" : 1,
									"numoutlets" : 1,
									"patching_rect" : [ 251.0, 197.0, 20.0, 20.0 ],
									"outlettype" : [ "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "sprintf /%d/mode 2",
									"id" : "obj-39",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 251.0, 432.0, 111.0, 20.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "+ 37",
									"id" : "obj-40",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 251.0, 367.0, 34.0, 20.0 ],
									"outlettype" : [ "int" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "uzi 3",
									"id" : "obj-41",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 3,
									"fontsize" : 12.0,
									"patching_rect" : [ 251.0, 312.0, 46.0, 20.0 ],
									"outlettype" : [ "bang", "bang", "int" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "comment",
									"text" : "we're playing with pins 24-26 for pwm outputs",
									"linecount" : 3,
									"id" : "obj-36",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 0,
									"fontsize" : 12.0,
									"patching_rect" : [ 76.0, 366.0, 125.0, 48.0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "/16/mode 3",
									"id" : "obj-21",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 39.0, 507.0, 76.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "comment",
									"text" : "1.  set the right pin modes",
									"id" : "obj-34",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 0,
									"fontsize" : 12.0,
									"patching_rect" : [ 78.0, 155.0, 149.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "button",
									"id" : "obj-16",
									"numinlets" : 1,
									"numoutlets" : 1,
									"patching_rect" : [ 39.0, 197.0, 20.0, 20.0 ],
									"outlettype" : [ "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "sprintf /%d/mode 3",
									"id" : "obj-22",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 39.0, 432.0, 111.0, 20.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "+ 13",
									"id" : "obj-35",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 39.0, 367.0, 34.0, 20.0 ],
									"outlettype" : [ "int" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "uzi 3",
									"id" : "obj-24",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 3,
									"fontsize" : 12.0,
									"patching_rect" : [ 39.0, 312.0, 46.0, 20.0 ],
									"outlettype" : [ "bang", "bang", "int" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "prepend /16/analogWrite",
									"id" : "obj-33",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 742.0, 497.0, 142.0, 20.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "prepend /15/analogWrite",
									"id" : "obj-32",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 593.0, 497.0, 142.0, 20.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "prepend /14/analogWrite",
									"id" : "obj-31",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 446.0, 497.0, 142.0, 20.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "comment",
									"text" : "you can use the function object to scale!",
									"id" : "obj-30",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 0,
									"fontsize" : 12.0,
									"patching_rect" : [ 505.0, 336.0, 224.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "function",
									"id" : "obj-28",
									"domain" : 1.0,
									"pointcolor" : [ 0.321569, 0.321569, 0.321569, 1.0 ],
									"linecolor" : [ 0.333333, 0.333333, 0.333333, 1.0 ],
									"numinlets" : 1,
									"bordercolor" : [ 0.0, 0.0, 0.0, 1.0 ],
									"numoutlets" : 4,
									"patching_rect" : [ 742.0, 230.5, 100.0, 95.0 ],
									"outlettype" : [ "float", "", "", "bang" ],
									"addpoints" : [ 0.0, 0.0, 0, 0.136364, 0.0, 0, 0.295455, 0.0, 0, 0.409091, 0.0, 0, 0.477273, 0.407143, 0, 0.602273, 0.721429, 0, 0.784091, 1.0, 0, 1.0, 1.0, 0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "function",
									"id" : "obj-27",
									"domain" : 1.0,
									"pointcolor" : [ 0.321569, 0.321569, 0.321569, 1.0 ],
									"linecolor" : [ 0.333333, 0.333333, 0.333333, 1.0 ],
									"numinlets" : 1,
									"bordercolor" : [ 0.0, 0.0, 0.0, 1.0 ],
									"numoutlets" : 4,
									"patching_rect" : [ 593.0, 230.5, 100.0, 95.0 ],
									"outlettype" : [ "float", "", "", "bang" ],
									"addpoints" : [ 0.0, 0.0, 0, 0.170455, 0.0, 0, 0.295455, 0.035714, 0, 0.522727, 0.15, 0, 0.681818, 0.35, 0, 0.784091, 0.592857, 0, 0.818182, 1.0, 0, 0.954545, 1.0, 0, 1.0, 1.0, 0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "function",
									"id" : "obj-7",
									"domain" : 1.0,
									"pointcolor" : [ 0.321569, 0.321569, 0.321569, 1.0 ],
									"linecolor" : [ 0.333333, 0.333333, 0.333333, 1.0 ],
									"numinlets" : 1,
									"bordercolor" : [ 0.0, 0.0, 0.0, 1.0 ],
									"numoutlets" : 4,
									"patching_rect" : [ 447.0, 230.5, 100.0, 95.0 ],
									"outlettype" : [ "float", "", "", "bang" ],
									"addpoints" : [ 0.0, 0.0, 0, 0.136364, 0.0, 0, 0.272727, 0.0, 0, 0.409091, 0.0, 0, 0.784091, 1.0, 0, 1.0, 1.0, 0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "live.slider",
									"varname" : "analog[3]",
									"id" : "obj-17",
									"fontname" : "Trebuchet MS",
									"numinlets" : 1,
									"numoutlets" : 2,
									"fontface" : 0,
									"patching_rect" : [ 742.0, 371.0, 60.0, 71.0 ],
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 1,
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_order" : 0,
											"parameter_units" : "",
											"parameter_speedlim" : 0,
											"parameter_steps" : 0,
											"parameter_exponent" : 1.0,
											"parameter_unitstyle" : 1,
											"parameter_mmax" : 1.0,
											"parameter_mmin" : 0.0,
											"parameter_type" : 0,
											"parameter_initial_enable" : 0,
											"parameter_shortname" : "analog[2]",
											"parameter_invisible" : 0,
											"parameter_modmax" : 127.0,
											"parameter_annotation_name" : "",
											"parameter_longname" : "analog[3]",
											"parameter_modmin" : 0.0,
											"parameter_linknames" : 0,
											"parameter_modmode" : 0,
											"parameter_info" : ""
										}

									}

								}

							}
, 							{
								"box" : 								{
									"maxclass" : "live.slider",
									"varname" : "analog[4]",
									"id" : "obj-18",
									"fontname" : "Trebuchet MS",
									"numinlets" : 1,
									"numoutlets" : 2,
									"fontface" : 0,
									"patching_rect" : [ 593.0, 371.0, 60.0, 71.0 ],
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 1,
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_order" : 0,
											"parameter_units" : "",
											"parameter_speedlim" : 0,
											"parameter_steps" : 0,
											"parameter_exponent" : 1.0,
											"parameter_unitstyle" : 1,
											"parameter_mmax" : 1.0,
											"parameter_mmin" : 0.0,
											"parameter_type" : 0,
											"parameter_initial_enable" : 0,
											"parameter_shortname" : "analog[1]",
											"parameter_invisible" : 0,
											"parameter_modmax" : 127.0,
											"parameter_annotation_name" : "",
											"parameter_longname" : "analog[4]",
											"parameter_modmin" : 0.0,
											"parameter_linknames" : 1,
											"parameter_modmode" : 0,
											"parameter_info" : ""
										}

									}

								}

							}
, 							{
								"box" : 								{
									"maxclass" : "live.slider",
									"varname" : "analog[5]",
									"id" : "obj-19",
									"fontname" : "Trebuchet MS",
									"numinlets" : 1,
									"numoutlets" : 2,
									"fontface" : 0,
									"patching_rect" : [ 447.0, 371.0, 60.0, 71.0 ],
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 1,
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_order" : 0,
											"parameter_units" : "",
											"parameter_speedlim" : 0,
											"parameter_steps" : 0,
											"parameter_exponent" : 1.0,
											"parameter_unitstyle" : 1,
											"parameter_mmax" : 1.0,
											"parameter_mmin" : 0.0,
											"parameter_type" : 0,
											"parameter_initial_enable" : 0,
											"parameter_shortname" : "analog[0]",
											"parameter_invisible" : 0,
											"parameter_modmax" : 127.0,
											"parameter_annotation_name" : "",
											"parameter_longname" : "analog[5]",
											"parameter_modmin" : 0.0,
											"parameter_linknames" : 0,
											"parameter_modmode" : 0,
											"parameter_info" : ""
										}

									}

								}

							}
, 							{
								"box" : 								{
									"maxclass" : "live.slider",
									"varname" : "analog[2]",
									"id" : "obj-13",
									"fontname" : "Trebuchet MS",
									"numinlets" : 1,
									"numoutlets" : 2,
									"fontface" : 0,
									"patching_rect" : [ 742.0, 140.0, 60.0, 71.0 ],
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 1,
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_order" : 0,
											"parameter_units" : "",
											"parameter_speedlim" : 0,
											"parameter_steps" : 0,
											"parameter_exponent" : 1.0,
											"parameter_unitstyle" : 1,
											"parameter_mmax" : 1.0,
											"parameter_mmin" : 0.0,
											"parameter_type" : 0,
											"parameter_initial_enable" : 0,
											"parameter_shortname" : "analog[2]",
											"parameter_invisible" : 0,
											"parameter_modmax" : 127.0,
											"parameter_annotation_name" : "",
											"parameter_longname" : "analog[2]",
											"parameter_modmin" : 0.0,
											"parameter_linknames" : 0,
											"parameter_modmode" : 0,
											"parameter_info" : ""
										}

									}

								}

							}
, 							{
								"box" : 								{
									"maxclass" : "live.slider",
									"varname" : "analog[1]",
									"id" : "obj-11",
									"fontname" : "Trebuchet MS",
									"numinlets" : 1,
									"numoutlets" : 2,
									"fontface" : 0,
									"patching_rect" : [ 593.0, 140.0, 60.0, 71.0 ],
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 1,
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_order" : 0,
											"parameter_units" : "",
											"parameter_speedlim" : 0,
											"parameter_steps" : 0,
											"parameter_exponent" : 1.0,
											"parameter_unitstyle" : 1,
											"parameter_mmax" : 1.0,
											"parameter_mmin" : 0.0,
											"parameter_type" : 0,
											"parameter_initial_enable" : 0,
											"parameter_shortname" : "analog[1]",
											"parameter_invisible" : 0,
											"parameter_modmax" : 127.0,
											"parameter_annotation_name" : "",
											"parameter_longname" : "analog[1]",
											"parameter_modmin" : 0.0,
											"parameter_linknames" : 1,
											"parameter_modmode" : 0,
											"parameter_info" : ""
										}

									}

								}

							}
, 							{
								"box" : 								{
									"maxclass" : "live.slider",
									"varname" : "analog[0]",
									"id" : "obj-10",
									"fontname" : "Trebuchet MS",
									"numinlets" : 1,
									"numoutlets" : 2,
									"fontface" : 0,
									"patching_rect" : [ 447.0, 140.0, 60.0, 71.0 ],
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 1,
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_order" : 0,
											"parameter_units" : "",
											"parameter_speedlim" : 0,
											"parameter_steps" : 0,
											"parameter_exponent" : 1.0,
											"parameter_unitstyle" : 1,
											"parameter_mmax" : 1.0,
											"parameter_mmin" : 0.0,
											"parameter_type" : 0,
											"parameter_initial_enable" : 0,
											"parameter_shortname" : "analog[0]",
											"parameter_invisible" : 0,
											"parameter_modmax" : 127.0,
											"parameter_annotation_name" : "",
											"parameter_longname" : "analog[0]",
											"parameter_modmin" : 0.0,
											"parameter_linknames" : 0,
											"parameter_modmode" : 0,
											"parameter_info" : ""
										}

									}

								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "route /0 /1 /2",
									"id" : "obj-8",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 4,
									"fontsize" : 12.0,
									"patching_rect" : [ 447.0, 75.0, 78.0, 20.0 ],
									"outlettype" : [ "", "", "", "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "route /analog",
									"id" : "obj-3",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"fontsize" : 12.0,
									"patching_rect" : [ 447.0, 46.0, 81.0, 20.0 ],
									"outlettype" : [ "", "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "r from-maxuino",
									"id" : "obj-23",
									"fontname" : "Trebuchet MS",
									"numinlets" : 0,
									"numoutlets" : 1,
									"fontsize" : 10.0,
									"patching_rect" : [ 447.0, 24.0, 80.0, 18.0 ],
									"outlettype" : [ "" ],
									"color" : [ 0.792157, 0.0, 0.0, 1.0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "outlet",
									"id" : "obj-1",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 417.0, 575.0, 25.0, 25.0 ],
									"comment" : ""
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"source" : [ "obj-17", 0 ],
									"destination" : [ "obj-33", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-33", 0 ],
									"destination" : [ "obj-1", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-18", 0 ],
									"destination" : [ "obj-32", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-32", 0 ],
									"destination" : [ "obj-1", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-19", 0 ],
									"destination" : [ "obj-31", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-31", 0 ],
									"destination" : [ "obj-1", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-40", 0 ],
									"destination" : [ "obj-39", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-41", 2 ],
									"destination" : [ "obj-40", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-35", 0 ],
									"destination" : [ "obj-22", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-24", 2 ],
									"destination" : [ "obj-35", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-23", 0 ],
									"destination" : [ "obj-3", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-3", 0 ],
									"destination" : [ "obj-8", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-8", 0 ],
									"destination" : [ "obj-10", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-8", 1 ],
									"destination" : [ "obj-11", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-8", 2 ],
									"destination" : [ "obj-13", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-10", 0 ],
									"destination" : [ "obj-7", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-11", 0 ],
									"destination" : [ "obj-27", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-7", 0 ],
									"destination" : [ "obj-19", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-27", 0 ],
									"destination" : [ "obj-18", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-16", 0 ],
									"destination" : [ "obj-24", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-22", 0 ],
									"destination" : [ "obj-21", 1 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-22", 0 ],
									"destination" : [ "obj-1", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-38", 0 ],
									"destination" : [ "obj-41", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-39", 0 ],
									"destination" : [ "obj-1", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-28", 0 ],
									"destination" : [ "obj-17", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-13", 0 ],
									"destination" : [ "obj-28", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
 ]
					}
,
					"saved_object_attributes" : 					{
						"fontname" : "Arial",
						"default_fontface" : 0,
						"globalpatchername" : "",
						"fontface" : 0,
						"fontsize" : 12.0,
						"default_fontname" : "Arial",
						"default_fontsize" : 12.0
					}

				}

			}
, 			{
				"box" : 				{
					"maxclass" : "comment",
					"text" : "NOTE: messages from maxuino (i.e. /analog and /digital messages for sensor inputs readings) \nare sent to the name \"from-maxuino\" and used in some of the above examples",
					"linecount" : 2,
					"id" : "obj-26",
					"fontname" : "Trebuchet MS",
					"numinlets" : 1,
					"frgb" : [ 1.0, 0.627451, 0.0, 1.0 ],
					"numoutlets" : 0,
					"fontsize" : 12.0,
					"textcolor" : [ 1.0, 0.627451, 0.0, 1.0 ],
					"patching_rect" : [ 105.333954, 609.0, 522.0, 34.0 ]
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "newobj",
					"text" : "s from-maxuino",
					"id" : "obj-23",
					"fontname" : "Trebuchet MS",
					"numinlets" : 1,
					"numoutlets" : 0,
					"fontsize" : 10.0,
					"patching_rect" : [ 14.0, 609.0, 81.0, 18.0 ],
					"color" : [ 0.792157, 0.0, 0.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "newobj",
					"text" : "p 3-video-analysis-to-pwm-example",
					"id" : "obj-12",
					"fontname" : "Trebuchet MS",
					"numinlets" : 0,
					"numoutlets" : 1,
					"fontsize" : 12.0,
					"patching_rect" : [ 376.0, 109.0, 203.0, 20.0 ],
					"outlettype" : [ "" ],
					"color" : [ 1.0, 0.627451, 0.0, 1.0 ],
					"patcher" : 					{
						"fileversion" : 1,
						"rect" : [ 35.0, 61.0, 995.0, 736.0 ],
						"bgcolor" : [ 0.470588, 0.54902, 0.239216, 1.0 ],
						"bglocked" : 0,
						"defrect" : [ 35.0, 61.0, 995.0, 736.0 ],
						"openrect" : [ 0.0, 0.0, 0.0, 0.0 ],
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 0,
						"gridsize" : [ 15.0, 15.0 ],
						"gridsnaponopen" : 0,
						"toolbarvisible" : 1,
						"boxanimatetime" : 200,
						"imprint" : 0,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"boxes" : [ 							{
								"box" : 								{
									"maxclass" : "comment",
									"text" : "we're playing with pins 2-10",
									"id" : "obj-12",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 0,
									"fontsize" : 12.0,
									"patching_rect" : [ 125.0, 385.0, 158.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "/10/mode 3",
									"id" : "obj-2",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 86.0, 498.0, 76.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "comment",
									"text" : "1.  set the right pin modes",
									"id" : "obj-4",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 0,
									"fontsize" : 12.0,
									"patching_rect" : [ 14.0, 154.0, 149.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "button",
									"id" : "obj-5",
									"numinlets" : 1,
									"numoutlets" : 1,
									"patching_rect" : [ 44.0, 188.0, 20.0, 20.0 ],
									"outlettype" : [ "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "sprintf /%d/mode 3",
									"id" : "obj-6",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 46.0, 423.0, 111.0, 20.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "+ 1",
									"id" : "obj-7",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 87.0, 358.0, 32.5, 20.0 ],
									"outlettype" : [ "int" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "uzi 9",
									"id" : "obj-9",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 3,
									"fontsize" : 12.0,
									"patching_rect" : [ 54.0, 303.0, 46.0, 20.0 ],
									"outlettype" : [ "bang", "bang", "int" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "outlet",
									"id" : "obj-1",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 236.0, 665.0, 25.0, 25.0 ],
									"comment" : ""
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "comment",
									"text" : "This is an example of using video to control the pwm output of several pins",
									"linecount" : 4,
									"id" : "obj-66",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 0,
									"fontsize" : 12.0,
									"bgcolor" : [ 0.501961, 0.717647, 0.764706, 1.0 ],
									"patching_rect" : [ 207.0, 160.0, 140.0, 62.0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "comment",
									"text" : "switch between grabber and player",
									"linecount" : 4,
									"id" : "obj-65",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 0,
									"fontsize" : 12.0,
									"bgcolor" : [ 0.827451, 0.827451, 0.827451, 1.0 ],
									"patching_rect" : [ 334.0, 33.0, 69.0, 62.0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "close",
									"id" : "obj-64",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 463.0, 51.0, 39.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "getvdevlist",
									"id" : "obj-47",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 537.0, 81.0, 67.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "open",
									"id" : "obj-48",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 423.0, 50.0, 37.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "getinputlist",
									"id" : "obj-49",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 465.0, 80.0, 68.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "print",
									"id" : "obj-50",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 0,
									"fontsize" : 11.595187,
									"patching_rect" : [ 805.0, 169.0, 31.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "iter",
									"id" : "obj-51",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"fontsize" : 11.595187,
									"patching_rect" : [ 517.0, 148.0, 25.0, 20.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "t clear",
									"id" : "obj-52",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"fontsize" : 11.595187,
									"patching_rect" : [ 612.0, 169.0, 40.0, 20.0 ],
									"outlettype" : [ "clear" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "t clear",
									"id" : "obj-53",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"fontsize" : 11.595187,
									"patching_rect" : [ 763.0, 169.0, 40.0, 20.0 ],
									"outlettype" : [ "clear" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "input $1",
									"id" : "obj-54",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 11.595187,
									"patching_rect" : [ 668.0, 217.0, 50.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "umenu",
									"id" : "obj-55",
									"fontname" : "Arial",
									"numinlets" : 1,
									"types" : [  ],
									"numoutlets" : 3,
									"fontsize" : 11.595187,
									"patching_rect" : [ 668.0, 193.0, 145.0, 20.0 ],
									"outlettype" : [ "int", "", "" ],
									"items" : "iSight"
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "prepend append",
									"id" : "obj-56",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"fontsize" : 11.595187,
									"patching_rect" : [ 668.0, 169.0, 93.0, 20.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "iter",
									"id" : "obj-57",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"fontsize" : 11.595187,
									"patching_rect" : [ 668.0, 148.0, 25.0, 20.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "p other",
									"id" : "obj-58",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"fontsize" : 11.595187,
									"patching_rect" : [ 805.0, 147.0, 45.0, 20.0 ],
									"outlettype" : [ "" ],
									"patcher" : 									{
										"fileversion" : 1,
										"rect" : [ 107.0, 474.0, 286.0, 179.0 ],
										"bglocked" : 0,
										"defrect" : [ 107.0, 474.0, 286.0, 179.0 ],
										"openrect" : [ 0.0, 0.0, 0.0, 0.0 ],
										"openinpresentation" : 0,
										"default_fontsize" : 10.0,
										"default_fontface" : 0,
										"default_fontname" : "Arial",
										"gridonopen" : 0,
										"gridsize" : [ 15.0, 15.0 ],
										"gridsnaponopen" : 0,
										"toolbarvisible" : 1,
										"boxanimatetime" : 200,
										"imprint" : 0,
										"enablehscroll" : 1,
										"enablevscroll" : 1,
										"devicewidth" : 0.0,
										"boxes" : [ 											{
												"box" : 												{
													"maxclass" : "outlet",
													"id" : "obj-1",
													"numinlets" : 1,
													"numoutlets" : 0,
													"patching_rect" : [ 228.0, 107.0, 25.0, 25.0 ],
													"comment" : ""
												}

											}
, 											{
												"box" : 												{
													"maxclass" : "newobj",
													"text" : "s iidcstate",
													"id" : "obj-2",
													"fontname" : "Arial",
													"numinlets" : 1,
													"numoutlets" : 0,
													"fontsize" : 11.595187,
													"patching_rect" : [ 178.25, 78.0, 62.0, 20.0 ]
												}

											}
, 											{
												"box" : 												{
													"maxclass" : "newobj",
													"text" : "s iidccsr",
													"id" : "obj-3",
													"fontname" : "Arial",
													"numinlets" : 1,
													"numoutlets" : 0,
													"fontsize" : 11.595187,
													"patching_rect" : [ 128.5, 98.0, 52.0, 20.0 ]
												}

											}
, 											{
												"box" : 												{
													"maxclass" : "newobj",
													"text" : "s iidccaps",
													"id" : "obj-4",
													"fontname" : "Arial",
													"numinlets" : 1,
													"numoutlets" : 0,
													"fontsize" : 11.595187,
													"patching_rect" : [ 78.75, 118.0, 61.0, 20.0 ]
												}

											}
, 											{
												"box" : 												{
													"maxclass" : "newobj",
													"text" : "s iidclist",
													"id" : "obj-5",
													"fontname" : "Arial",
													"numinlets" : 1,
													"numoutlets" : 0,
													"fontsize" : 11.595187,
													"patching_rect" : [ 29.0, 139.0, 51.0, 20.0 ]
												}

											}
, 											{
												"box" : 												{
													"maxclass" : "newobj",
													"text" : "route iidclist iidc_caps iidc_csr iidc_state",
													"id" : "obj-6",
													"fontname" : "Arial",
													"numinlets" : 1,
													"numoutlets" : 5,
													"fontsize" : 11.595187,
													"patching_rect" : [ 29.0, 56.0, 218.0, 20.0 ],
													"outlettype" : [ "", "", "", "", "" ]
												}

											}
, 											{
												"box" : 												{
													"maxclass" : "inlet",
													"id" : "obj-7",
													"numinlets" : 0,
													"numoutlets" : 1,
													"patching_rect" : [ 29.0, 27.0, 25.0, 25.0 ],
													"outlettype" : [ "" ],
													"comment" : ""
												}

											}
 ],
										"lines" : [ 											{
												"patchline" : 												{
													"source" : [ "obj-6", 4 ],
													"destination" : [ "obj-1", 0 ],
													"hidden" : 0,
													"midpoints" : [  ]
												}

											}
, 											{
												"patchline" : 												{
													"source" : [ "obj-6", 3 ],
													"destination" : [ "obj-2", 0 ],
													"hidden" : 0,
													"midpoints" : [  ]
												}

											}
, 											{
												"patchline" : 												{
													"source" : [ "obj-6", 2 ],
													"destination" : [ "obj-3", 0 ],
													"hidden" : 0,
													"midpoints" : [  ]
												}

											}
, 											{
												"patchline" : 												{
													"source" : [ "obj-6", 1 ],
													"destination" : [ "obj-4", 0 ],
													"hidden" : 0,
													"midpoints" : [  ]
												}

											}
, 											{
												"patchline" : 												{
													"source" : [ "obj-6", 0 ],
													"destination" : [ "obj-5", 0 ],
													"hidden" : 0,
													"midpoints" : [  ]
												}

											}
, 											{
												"patchline" : 												{
													"source" : [ "obj-7", 0 ],
													"destination" : [ "obj-6", 0 ],
													"hidden" : 0,
													"midpoints" : [  ]
												}

											}
 ]
									}
,
									"saved_object_attributes" : 									{
										"fontname" : "Arial",
										"default_fontface" : 0,
										"globalpatchername" : "",
										"fontface" : 0,
										"fontsize" : 10.0,
										"default_fontname" : "Arial",
										"default_fontsize" : 10.0
									}

								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "vdevice $1",
									"id" : "obj-59",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 11.595187,
									"patching_rect" : [ 517.0, 217.0, 64.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "umenu",
									"id" : "obj-60",
									"fontname" : "Arial",
									"numinlets" : 1,
									"types" : [  ],
									"numoutlets" : 3,
									"fontsize" : 11.595187,
									"patching_rect" : [ 517.0, 193.0, 145.0, 20.0 ],
									"outlettype" : [ "int", "", "" ],
									"items" : [ "DVCPRO HD (1080i50)", ",", "DVCPRO HD (1080i60)", ",", "DVCPRO HD (720p60)", ",", "DVCPRO HD (720p25/50)", ",", "DV Video", ",", "IIDC FireWire Video", ",", "Google Camera Adapter 0", ",", "Google Camera Adapter 1", ",", "USB Video Class Video" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "prepend append",
									"id" : "obj-61",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"fontsize" : 11.595187,
									"patching_rect" : [ 517.0, 169.0, 93.0, 20.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "route vdevlist inputlist",
									"id" : "obj-62",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 3,
									"fontsize" : 11.595187,
									"patching_rect" : [ 517.0, 118.0, 119.0, 20.0 ],
									"outlettype" : [ "", "", "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "jit.qt.grab 3 3",
									"id" : "obj-63",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"fontsize" : 12.0,
									"patching_rect" : [ 423.0, 115.0, 80.0, 20.0 ],
									"outlettype" : [ "jit_matrix", "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "toggle",
									"id" : "obj-46",
									"numinlets" : 1,
									"numoutlets" : 1,
									"patching_rect" : [ 356.0, 99.0, 20.0, 20.0 ],
									"outlettype" : [ "int" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "gswitch",
									"id" : "obj-45",
									"numinlets" : 3,
									"numoutlets" : 1,
									"patching_rect" : [ 357.0, 161.0, 41.0, 32.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "/10/analogWrite $1",
									"id" : "obj-42",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 542.0, 621.0, 111.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "/9/analogWrite $1",
									"id" : "obj-43",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 427.0, 621.0, 104.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "/8/analogWrite $1",
									"id" : "obj-44",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 293.0, 621.0, 104.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "/7/analogWrite $1",
									"id" : "obj-39",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 540.0, 551.0, 104.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "/6/analogWrite $1",
									"id" : "obj-40",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 425.0, 551.0, 104.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "/5/analogWrite $1",
									"id" : "obj-41",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 291.0, 551.0, 104.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "/ 255.",
									"id" : "obj-36",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 778.0, 430.0, 41.0, 20.0 ],
									"outlettype" : [ "float" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "/ 255.",
									"id" : "obj-37",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 723.0, 430.0, 41.0, 20.0 ],
									"outlettype" : [ "float" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "/ 255.",
									"id" : "obj-38",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 672.0, 430.0, 41.0, 20.0 ],
									"outlettype" : [ "float" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "/ 255.",
									"id" : "obj-33",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 621.0, 430.0, 41.0, 20.0 ],
									"outlettype" : [ "float" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "/ 255.",
									"id" : "obj-34",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 566.0, 430.0, 41.0, 20.0 ],
									"outlettype" : [ "float" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "/ 255.",
									"id" : "obj-35",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 515.0, 430.0, 41.0, 20.0 ],
									"outlettype" : [ "float" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "/ 255.",
									"id" : "obj-31",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 463.0, 430.0, 41.0, 20.0 ],
									"outlettype" : [ "float" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "/4/analogWrite $1",
									"id" : "obj-32",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 540.0, 484.0, 104.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "/ 255.",
									"id" : "obj-28",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 408.0, 430.0, 41.0, 20.0 ],
									"outlettype" : [ "float" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "/3/analogWrite $1",
									"id" : "obj-30",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 425.0, 484.0, 104.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "/ 255.",
									"id" : "obj-27",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 357.0, 430.0, 41.0, 20.0 ],
									"outlettype" : [ "float" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "/2/analogWrite $1",
									"id" : "obj-18",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 291.0, 484.0, 104.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "jit.spill",
									"id" : "obj-3",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"fontsize" : 12.0,
									"patching_rect" : [ 357.0, 372.0, 43.0, 20.0 ],
									"outlettype" : [ "", "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "jit.pwindow",
									"id" : "obj-16",
									"numinlets" : 1,
									"numoutlets" : 2,
									"srcrect" : [ 0, 0, 3, 3 ],
									"patching_rect" : [ 357.0, 300.0, 85.333336, 64.0 ],
									"outlettype" : [ "", "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "jit.rgb2luma",
									"id" : "obj-15",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"fontsize" : 12.0,
									"patching_rect" : [ 357.0, 269.0, 73.0, 20.0 ],
									"outlettype" : [ "jit_matrix", "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "jit.qt.movie 3 3",
									"id" : "obj-8",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"fontsize" : 11.595187,
									"patching_rect" : [ 203.0, 124.0, 85.0, 20.0 ],
									"outlettype" : [ "jit_matrix", "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "jit.pwindow",
									"id" : "obj-10",
									"numinlets" : 1,
									"numoutlets" : 2,
									"srcrect" : [ 0, 0, 3, 3 ],
									"patching_rect" : [ 357.0, 199.0, 85.333336, 64.0 ],
									"outlettype" : [ "", "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "flonum",
									"id" : "obj-11",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"triscale" : 0.9,
									"fontsize" : 11.595187,
									"patching_rect" : [ 293.0, 591.16217, 50.0, 20.0 ],
									"outlettype" : [ "float", "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "flonum",
									"id" : "obj-13",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"triscale" : 0.9,
									"fontsize" : 11.595187,
									"patching_rect" : [ 411.540527, 591.16217, 50.0, 20.0 ],
									"outlettype" : [ "float", "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "flonum",
									"id" : "obj-14",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"triscale" : 0.9,
									"fontsize" : 11.595187,
									"patching_rect" : [ 510.83783, 591.16217, 50.0, 20.0 ],
									"outlettype" : [ "float", "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "flonum",
									"id" : "obj-19",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"triscale" : 0.9,
									"fontsize" : 11.595187,
									"patching_rect" : [ 292.0, 525.081055, 50.0, 20.0 ],
									"outlettype" : [ "float", "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "flonum",
									"id" : "obj-20",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"triscale" : 0.9,
									"fontsize" : 11.595187,
									"patching_rect" : [ 409.540527, 525.081055, 50.0, 20.0 ],
									"outlettype" : [ "float", "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "flonum",
									"id" : "obj-21",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"triscale" : 0.9,
									"fontsize" : 11.595187,
									"patching_rect" : [ 507.83783, 525.081055, 50.0, 20.0 ],
									"outlettype" : [ "float", "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "flonum",
									"id" : "obj-22",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"triscale" : 0.9,
									"fontsize" : 11.595187,
									"patching_rect" : [ 291.0, 457.0, 50.0, 20.0 ],
									"outlettype" : [ "float", "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "flonum",
									"id" : "obj-23",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"triscale" : 0.9,
									"fontsize" : 11.595187,
									"patching_rect" : [ 408.540527, 458.0, 50.0, 20.0 ],
									"outlettype" : [ "float", "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "flonum",
									"id" : "obj-24",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"triscale" : 0.9,
									"fontsize" : 11.595187,
									"patching_rect" : [ 510.83783, 458.0, 50.0, 20.0 ],
									"outlettype" : [ "float", "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "unpack 0. 0. 0. 0. 0. 0. 0. 0. 0.",
									"id" : "obj-25",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 9,
									"fontsize" : 12.0,
									"patching_rect" : [ 357.0, 401.0, 439.0, 20.0 ],
									"outlettype" : [ "float", "float", "float", "float", "float", "float", "float", "float", "float" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "stop",
									"id" : "obj-26",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 11.595187,
									"patching_rect" : [ 256.351074, 89.0, 32.5, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "read",
									"id" : "obj-29",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 11.595187,
									"patching_rect" : [ 218.563843, 89.0, 34.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "flonum",
									"id" : "obj-78",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"triscale" : 0.9,
									"minimum" : 0.5,
									"fontsize" : 11.595187,
									"patching_rect" : [ 247.0, 30.0, 50.0, 20.0 ],
									"outlettype" : [ "float", "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "toggle",
									"id" : "obj-79",
									"numinlets" : 1,
									"numoutlets" : 1,
									"patching_rect" : [ 203.0, 30.0, 20.0, 20.0 ],
									"outlettype" : [ "int" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "qmetro 30",
									"id" : "obj-80",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 11.595187,
									"patching_rect" : [ 203.0, 54.0, 63.0, 20.0 ],
									"outlettype" : [ "bang" ]
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"source" : [ "obj-42", 0 ],
									"destination" : [ "obj-1", 0 ],
									"hidden" : 0,
									"midpoints" : [ 551.5, 651.0, 245.5, 651.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-43", 0 ],
									"destination" : [ "obj-1", 0 ],
									"hidden" : 0,
									"midpoints" : [ 436.5, 651.0, 245.5, 651.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-44", 0 ],
									"destination" : [ "obj-1", 0 ],
									"hidden" : 0,
									"midpoints" : [ 302.5, 651.0, 245.5, 651.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-39", 0 ],
									"destination" : [ "obj-1", 0 ],
									"hidden" : 0,
									"midpoints" : [ 549.5, 575.0, 245.5, 575.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-40", 0 ],
									"destination" : [ "obj-1", 0 ],
									"hidden" : 0,
									"midpoints" : [ 434.5, 574.0, 245.5, 574.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-41", 0 ],
									"destination" : [ "obj-1", 0 ],
									"hidden" : 0,
									"midpoints" : [ 300.5, 575.0, 245.5, 575.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-32", 0 ],
									"destination" : [ "obj-1", 0 ],
									"hidden" : 0,
									"midpoints" : [ 549.5, 504.0, 245.5, 504.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-30", 0 ],
									"destination" : [ "obj-1", 0 ],
									"hidden" : 0,
									"midpoints" : [ 434.5, 504.0, 245.5, 504.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-18", 0 ],
									"destination" : [ "obj-1", 0 ],
									"hidden" : 0,
									"midpoints" : [ 300.5, 504.0, 245.5, 504.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-64", 0 ],
									"destination" : [ "obj-63", 0 ],
									"hidden" : 0,
									"midpoints" : [ 472.5, 77.0, 432.0, 77.0, 432.0, 101.0, 432.5, 101.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-80", 0 ],
									"destination" : [ "obj-63", 0 ],
									"hidden" : 0,
									"midpoints" : [ 212.5, 78.0, 337.0, 78.0, 337.0, 78.0, 432.5, 78.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-3", 0 ],
									"destination" : [ "obj-25", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-16", 0 ],
									"destination" : [ "obj-3", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-15", 0 ],
									"destination" : [ "obj-16", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-10", 0 ],
									"destination" : [ "obj-15", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-80", 0 ],
									"destination" : [ "obj-8", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-29", 0 ],
									"destination" : [ "obj-8", 0 ],
									"hidden" : 0,
									"midpoints" : [ 228.063843, 115.0, 228.0, 115.0, 228.0, 115.0, 212.5, 115.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-26", 0 ],
									"destination" : [ "obj-8", 0 ],
									"hidden" : 0,
									"midpoints" : [ 265.851074, 115.0, 265.0, 115.0, 265.0, 115.0, 212.5, 115.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-78", 0 ],
									"destination" : [ "obj-80", 1 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-79", 0 ],
									"destination" : [ "obj-80", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-27", 0 ],
									"destination" : [ "obj-22", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-25", 0 ],
									"destination" : [ "obj-27", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-22", 0 ],
									"destination" : [ "obj-18", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-25", 1 ],
									"destination" : [ "obj-28", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-25", 2 ],
									"destination" : [ "obj-31", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-31", 0 ],
									"destination" : [ "obj-24", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-28", 0 ],
									"destination" : [ "obj-23", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-23", 0 ],
									"destination" : [ "obj-30", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-24", 0 ],
									"destination" : [ "obj-32", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-25", 3 ],
									"destination" : [ "obj-35", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-25", 4 ],
									"destination" : [ "obj-34", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-25", 5 ],
									"destination" : [ "obj-33", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-25", 6 ],
									"destination" : [ "obj-38", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-25", 7 ],
									"destination" : [ "obj-37", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-25", 8 ],
									"destination" : [ "obj-36", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-35", 0 ],
									"destination" : [ "obj-19", 0 ],
									"hidden" : 0,
									"midpoints" : [ 524.5, 470.0, 563.0, 470.0, 563.0, 517.0, 301.5, 517.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-34", 0 ],
									"destination" : [ "obj-20", 0 ],
									"hidden" : 0,
									"midpoints" : [ 575.5, 517.0, 419.040527, 517.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-33", 0 ],
									"destination" : [ "obj-21", 0 ],
									"hidden" : 0,
									"midpoints" : [ 630.5, 517.0, 517.33783, 517.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-19", 0 ],
									"destination" : [ "obj-41", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-20", 0 ],
									"destination" : [ "obj-40", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-21", 0 ],
									"destination" : [ "obj-39", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-38", 0 ],
									"destination" : [ "obj-11", 0 ],
									"hidden" : 0,
									"midpoints" : [ 681.5, 587.0, 368.0, 587.0, 368.0, 587.0, 302.5, 587.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-37", 0 ],
									"destination" : [ "obj-13", 0 ],
									"hidden" : 0,
									"midpoints" : [ 732.5, 587.0, 421.040527, 587.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-36", 0 ],
									"destination" : [ "obj-14", 0 ],
									"hidden" : 0,
									"midpoints" : [ 787.5, 587.0, 520.33783, 587.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-11", 0 ],
									"destination" : [ "obj-44", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-13", 0 ],
									"destination" : [ "obj-43", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-14", 0 ],
									"destination" : [ "obj-42", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-45", 0 ],
									"destination" : [ "obj-10", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-8", 0 ],
									"destination" : [ "obj-45", 1 ],
									"hidden" : 0,
									"midpoints" : [ 212.5, 152.0, 377.5, 152.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-46", 0 ],
									"destination" : [ "obj-45", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-47", 0 ],
									"destination" : [ "obj-63", 0 ],
									"hidden" : 0,
									"midpoints" : [ 546.5, 105.0, 432.5, 105.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-48", 0 ],
									"destination" : [ "obj-63", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-49", 0 ],
									"destination" : [ "obj-63", 0 ],
									"hidden" : 0,
									"midpoints" : [ 474.5, 105.0, 433.0, 105.0, 433.0, 110.0, 432.5, 110.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-59", 0 ],
									"destination" : [ "obj-63", 0 ],
									"hidden" : 0,
									"midpoints" : [ 526.5, 242.0, 454.0, 242.0, 454.0, 185.0, 409.0, 185.0, 409.0, 104.0, 432.5, 104.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-54", 0 ],
									"destination" : [ "obj-63", 0 ],
									"hidden" : 0,
									"midpoints" : [ 677.5, 242.0, 454.0, 242.0, 454.0, 185.0, 409.0, 185.0, 409.0, 104.0, 432.5, 104.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-58", 0 ],
									"destination" : [ "obj-50", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-62", 2 ],
									"destination" : [ "obj-58", 0 ],
									"hidden" : 0,
									"midpoints" : [ 626.5, 138.0, 814.5, 138.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-62", 1 ],
									"destination" : [ "obj-53", 0 ],
									"hidden" : 0,
									"midpoints" : [ 576.5, 138.0, 772.5, 138.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-55", 0 ],
									"destination" : [ "obj-54", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-53", 0 ],
									"destination" : [ "obj-55", 0 ],
									"hidden" : 0,
									"midpoints" : [ 772.5, 189.0, 677.5, 189.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-56", 0 ],
									"destination" : [ "obj-55", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-57", 0 ],
									"destination" : [ "obj-56", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-62", 1 ],
									"destination" : [ "obj-57", 0 ],
									"hidden" : 0,
									"midpoints" : [ 576.5, 138.0, 677.5, 138.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-62", 0 ],
									"destination" : [ "obj-52", 0 ],
									"hidden" : 0,
									"midpoints" : [ 526.5, 142.0, 621.5, 142.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-60", 0 ],
									"destination" : [ "obj-59", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-52", 0 ],
									"destination" : [ "obj-60", 0 ],
									"hidden" : 0,
									"midpoints" : [ 621.5, 189.0, 526.5, 189.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-61", 0 ],
									"destination" : [ "obj-60", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-51", 0 ],
									"destination" : [ "obj-61", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-62", 0 ],
									"destination" : [ "obj-51", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-63", 0 ],
									"destination" : [ "obj-45", 2 ],
									"hidden" : 0,
									"midpoints" : [ 432.5, 152.0, 388.5, 152.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-63", 1 ],
									"destination" : [ "obj-62", 0 ],
									"hidden" : 0,
									"midpoints" : [ 493.5, 137.0, 514.0, 137.0, 514.0, 113.0, 526.5, 113.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-5", 0 ],
									"destination" : [ "obj-9", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-9", 2 ],
									"destination" : [ "obj-7", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-7", 0 ],
									"destination" : [ "obj-6", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-6", 0 ],
									"destination" : [ "obj-1", 0 ],
									"hidden" : 0,
									"midpoints" : [ 55.5, 548.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-6", 0 ],
									"destination" : [ "obj-2", 1 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
 ]
					}
,
					"saved_object_attributes" : 					{
						"fontname" : "Arial",
						"default_fontface" : 0,
						"globalpatchername" : "",
						"fontface" : 0,
						"fontsize" : 12.0,
						"default_fontname" : "Arial",
						"default_fontsize" : 12.0
					}

				}

			}
, 			{
				"box" : 				{
					"maxclass" : "newobj",
					"varname" : "2-probablistic-digi-outs",
					"text" : "p 2-probablistic-digi-outs",
					"id" : "obj-14",
					"fontname" : "Trebuchet MS",
					"numinlets" : 0,
					"numoutlets" : 1,
					"fontsize" : 12.0,
					"patching_rect" : [ 219.0, 109.0, 147.0, 20.0 ],
					"outlettype" : [ "" ],
					"color" : [ 1.0, 0.627451, 0.0, 1.0 ],
					"patcher" : 					{
						"fileversion" : 1,
						"rect" : [ 25.0, 69.0, 616.0, 667.0 ],
						"bgcolor" : [ 0.470588, 0.54902, 0.239216, 1.0 ],
						"bglocked" : 0,
						"defrect" : [ 25.0, 69.0, 616.0, 667.0 ],
						"openrect" : [ 0.0, 0.0, 0.0, 0.0 ],
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 0,
						"gridsize" : [ 15.0, 15.0 ],
						"gridsnaponopen" : 0,
						"toolbarvisible" : 1,
						"boxanimatetime" : 200,
						"imprint" : 0,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"boxes" : [ 							{
								"box" : 								{
									"maxclass" : "comment",
									"text" : "we're playin with pins 19-22",
									"id" : "obj-25",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 0,
									"fontsize" : 12.0,
									"patching_rect" : [ 305.0, 335.0, 158.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "/22/mode 1",
									"id" : "obj-21",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 110.0, 486.0, 76.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "comment",
									"text" : "1.  set the right pin modes",
									"id" : "obj-18",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 0,
									"fontsize" : 12.0,
									"patching_rect" : [ 38.0, 142.0, 149.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "button",
									"id" : "obj-16",
									"numinlets" : 1,
									"numoutlets" : 1,
									"patching_rect" : [ 68.0, 176.0, 20.0, 20.0 ],
									"outlettype" : [ "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "sprintf /%d/mode 1",
									"id" : "obj-22",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 70.0, 411.0, 111.0, 20.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "+ 18",
									"id" : "obj-23",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 111.0, 346.0, 34.0, 20.0 ],
									"outlettype" : [ "int" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "uzi 4",
									"id" : "obj-24",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 3,
									"fontsize" : 12.0,
									"patching_rect" : [ 78.0, 291.0, 46.0, 20.0 ],
									"outlettype" : [ "bang", "bang", "int" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "comment",
									"text" : "a 'makenote' object is used to handle the on/off in case of potential overlap due to longer on-times.",
									"id" : "obj-20",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 0,
									"fontsize" : 12.0,
									"patching_rect" : [ 19.0, 61.0, 533.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "/22/digitalWrite 0",
									"id" : "obj-19",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 330.0, 582.0, 145.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "comment",
									"text" : "use a probability table (itable object) to turn digital outputs on and off;",
									"id" : "obj-17",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 0,
									"fontsize" : 12.0,
									"patching_rect" : [ 19.0, 34.0, 377.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"varname" : "u858005066",
									"text" : "autopattr",
									"id" : "obj-11",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 4,
									"fontsize" : 12.0,
									"patching_rect" : [ 527.0, 90.0, 59.5, 20.0 ],
									"outlettype" : [ "", "", "", "" ],
									"restore" : 									{
										"itable" : [ 110, 107, 107, 107 ],
										"number" : [ 300 ],
										"number[1]" : [ 500 ]
									}

								}

							}
, 							{
								"box" : 								{
									"maxclass" : "comment",
									"varname" : "comment",
									"text" : "on-time in msec",
									"id" : "obj-10",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 0,
									"fontsize" : 12.0,
									"patching_rect" : [ 457.0, 407.0, 95.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "number",
									"varname" : "number",
									"id" : "obj-15",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"fontsize" : 12.0,
									"patching_rect" : [ 313.0, 128.0, 50.0, 20.0 ],
									"outlettype" : [ "int", "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "> 1",
									"id" : "obj-14",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 294.0, 449.0, 32.5, 20.0 ],
									"outlettype" : [ "int" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "pack 1 1",
									"id" : "obj-13",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 257.0, 499.0, 56.0, 20.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "toggle",
									"id" : "obj-12",
									"numinlets" : 1,
									"numoutlets" : 1,
									"patching_rect" : [ 254.0, 141.0, 20.0, 20.0 ],
									"outlettype" : [ "int" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "metro 300",
									"id" : "obj-9",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 261.0, 180.0, 65.0, 20.0 ],
									"outlettype" : [ "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "+ 19",
									"id" : "obj-8",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 268.0, 338.0, 34.0, 20.0 ],
									"outlettype" : [ "int" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "number",
									"varname" : "number[1]",
									"id" : "obj-7",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"fontsize" : 12.0,
									"patching_rect" : [ 401.0, 405.0, 50.0, 20.0 ],
									"outlettype" : [ "int", "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "append 127",
									"id" : "obj-5",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 270.0, 380.0, 74.0, 20.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "itable",
									"hint" : "x 3 y 126",
									"varname" : "itable",
									"name" : "",
									"range" : 128,
									"id" : "obj-4",
									"bgcolor2" : [ 1.0, 1.0, 1.0, 0.0 ],
									"numinlets" : 2,
									"numoutlets" : 2,
									"bgcolor" : [ 0.929412, 0.929412, 0.929412, 1.0 ],
									"patching_rect" : [ 270.0, 228.0, 106.0, 97.0 ],
									"outlettype" : [ "int", "bang" ],
									"size" : 4,
									"table_data" : [ 0, 110, 107, 107, 107 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "makenote 500",
									"id" : "obj-2",
									"fontname" : "Arial",
									"numinlets" : 3,
									"numoutlets" : 2,
									"fontsize" : 12.0,
									"patching_rect" : [ 260.0, 416.0, 87.0, 20.0 ],
									"outlettype" : [ "float", "float" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "sprintf /%d/digitalWrite %d",
									"id" : "obj-1",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 270.0, 537.0, 150.0, 20.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "outlet",
									"id" : "obj-6",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 103.0, 628.0, 25.0, 25.0 ],
									"comment" : ""
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"source" : [ "obj-1", 0 ],
									"destination" : [ "obj-19", 1 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-1", 0 ],
									"destination" : [ "obj-6", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-13", 0 ],
									"destination" : [ "obj-1", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-12", 0 ],
									"destination" : [ "obj-9", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-9", 0 ],
									"destination" : [ "obj-4", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-14", 0 ],
									"destination" : [ "obj-13", 1 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-8", 0 ],
									"destination" : [ "obj-5", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-4", 0 ],
									"destination" : [ "obj-8", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-15", 0 ],
									"destination" : [ "obj-9", 1 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-2", 1 ],
									"destination" : [ "obj-14", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-2", 0 ],
									"destination" : [ "obj-13", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-5", 0 ],
									"destination" : [ "obj-2", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-7", 0 ],
									"destination" : [ "obj-2", 2 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-11", 0 ],
									"destination" : [ "obj-15", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-11", 0 ],
									"destination" : [ "obj-4", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-22", 0 ],
									"destination" : [ "obj-21", 1 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-16", 0 ],
									"destination" : [ "obj-24", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-24", 2 ],
									"destination" : [ "obj-23", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-23", 0 ],
									"destination" : [ "obj-22", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-22", 0 ],
									"destination" : [ "obj-6", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-11", 0 ],
									"destination" : [ "obj-7", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
 ]
					}
,
					"saved_object_attributes" : 					{
						"fontname" : "Arial",
						"default_fontface" : 0,
						"globalpatchername" : "",
						"fontface" : 0,
						"fontsize" : 12.0,
						"default_fontname" : "Arial",
						"default_fontsize" : 12.0
					}

				}

			}
, 			{
				"box" : 				{
					"maxclass" : "newobj",
					"text" : "p 1-metro-counter-digital-outputs",
					"id" : "obj-21",
					"fontname" : "Trebuchet MS",
					"numinlets" : 0,
					"numoutlets" : 1,
					"fontsize" : 12.0,
					"patching_rect" : [ 14.0, 110.0, 194.0, 20.0 ],
					"outlettype" : [ "" ],
					"color" : [ 1.0, 0.627451, 0.0, 1.0 ],
					"patcher" : 					{
						"fileversion" : 1,
						"rect" : [ 46.0, 85.0, 546.0, 603.0 ],
						"bgcolor" : [ 0.470588, 0.54902, 0.239216, 1.0 ],
						"bglocked" : 0,
						"defrect" : [ 46.0, 85.0, 546.0, 603.0 ],
						"openrect" : [ 0.0, 0.0, 0.0, 0.0 ],
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 0,
						"gridsize" : [ 15.0, 15.0 ],
						"gridsnaponopen" : 0,
						"toolbarvisible" : 1,
						"boxanimatetime" : 200,
						"imprint" : 0,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"boxes" : [ 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "/26/mode 1",
									"id" : "obj-20",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 74.0, 419.0, 76.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "comment",
									"text" : "2.  start metro",
									"id" : "obj-19",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 0,
									"fontsize" : 12.0,
									"patching_rect" : [ 236.0, 78.0, 85.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "comment",
									"text" : "1.  set the right pin modes",
									"id" : "obj-18",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 0,
									"fontsize" : 12.0,
									"patching_rect" : [ 23.0, 95.0, 149.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "button",
									"id" : "obj-16",
									"numinlets" : 1,
									"numoutlets" : 1,
									"patching_rect" : [ 53.0, 129.0, 20.0, 20.0 ],
									"outlettype" : [ "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "sprintf /%d/mode 1",
									"id" : "obj-14",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 55.0, 364.0, 111.0, 20.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "+ 17",
									"id" : "obj-13",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 96.0, 299.0, 34.0, 20.0 ],
									"outlettype" : [ "int" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "uzi 9",
									"id" : "obj-11",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 3,
									"fontsize" : 12.0,
									"patching_rect" : [ 63.0, 244.0, 46.0, 20.0 ],
									"outlettype" : [ "bang", "bang", "int" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "comment",
									"text" : "turn digital outputs pins 18 to 26 on then off, with a metro and a counter",
									"id" : "obj-8",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 0,
									"fontsize" : 12.0,
									"patching_rect" : [ 23.0, 8.0, 389.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "number",
									"id" : "obj-12",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"fontsize" : 12.0,
									"patching_rect" : [ 327.0, 113.0, 50.0, 20.0 ],
									"outlettype" : [ "int", "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "message",
									"text" : "/23/digitalWrite 1",
									"linecount" : 2,
									"id" : "obj-9",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 261.0, 447.0, 76.0, 32.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "int",
									"id" : "obj-7",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 234.0, 342.0, 32.5, 20.0 ],
									"outlettype" : [ "int" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "t b 1 b 0",
									"id" : "obj-6",
									"fontname" : "Arial",
									"numinlets" : 1,
									"numoutlets" : 4,
									"fontsize" : 12.0,
									"patching_rect" : [ 254.0, 216.0, 59.5, 20.0 ],
									"outlettype" : [ "bang", "int", "bang", "int" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "sprintf /%d/digitalWrite %d",
									"id" : "obj-5",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 218.0, 396.0, 150.0, 20.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "counter 18 26",
									"id" : "obj-4",
									"fontname" : "Arial",
									"numinlets" : 5,
									"numoutlets" : 4,
									"fontsize" : 12.0,
									"patching_rect" : [ 222.0, 289.0, 84.0, 20.0 ],
									"outlettype" : [ "int", "", "", "int" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "toggle",
									"id" : "obj-2",
									"numinlets" : 1,
									"numoutlets" : 1,
									"patching_rect" : [ 244.0, 100.0, 20.0, 20.0 ],
									"outlettype" : [ "int" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "metro 100",
									"id" : "obj-17",
									"fontname" : "Arial",
									"numinlets" : 2,
									"numoutlets" : 1,
									"fontsize" : 12.0,
									"patching_rect" : [ 243.0, 149.0, 65.0, 20.0 ],
									"outlettype" : [ "bang" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "outlet",
									"id" : "obj-1",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 50.0, 539.0, 25.0, 25.0 ],
									"comment" : ""
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"source" : [ "obj-5", 0 ],
									"destination" : [ "obj-1", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-5", 0 ],
									"destination" : [ "obj-9", 1 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-6", 1 ],
									"destination" : [ "obj-5", 1 ],
									"hidden" : 0,
									"midpoints" : [ 334.0, 333.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-7", 0 ],
									"destination" : [ "obj-5", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-6", 3 ],
									"destination" : [ "obj-5", 1 ],
									"hidden" : 0,
									"midpoints" : [ 451.0, 258.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-12", 0 ],
									"destination" : [ "obj-17", 1 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-4", 0 ],
									"destination" : [ "obj-7", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-6", 0 ],
									"destination" : [ "obj-4", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-6", 2 ],
									"destination" : [ "obj-7", 0 ],
									"hidden" : 0,
									"midpoints" : [ 362.0, 295.0 ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-17", 0 ],
									"destination" : [ "obj-6", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-2", 0 ],
									"destination" : [ "obj-17", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-11", 2 ],
									"destination" : [ "obj-13", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-13", 0 ],
									"destination" : [ "obj-14", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-14", 0 ],
									"destination" : [ "obj-1", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-16", 0 ],
									"destination" : [ "obj-11", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-14", 0 ],
									"destination" : [ "obj-20", 1 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
 ]
					}
,
					"saved_object_attributes" : 					{
						"fontname" : "Arial",
						"default_fontface" : 0,
						"globalpatchername" : "",
						"fontface" : 0,
						"fontsize" : 12.0,
						"default_fontname" : "Arial",
						"default_fontsize" : 12.0
					}

				}

			}
, 			{
				"box" : 				{
					"maxclass" : "gswitch2",
					"id" : "obj-24",
					"numinlets" : 2,
					"numoutlets" : 2,
					"patching_rect" : [ 246.333954, 436.0, 39.0, 32.0 ],
					"outlettype" : [ "", "" ]
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "newobj",
					"text" : "print from-gui",
					"id" : "obj-25",
					"fontname" : "Trebuchet MS",
					"numinlets" : 1,
					"numoutlets" : 0,
					"fontsize" : 10.0,
					"patching_rect" : [ 266.333954, 471.0, 75.0, 18.0 ]
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "gswitch2",
					"id" : "obj-10",
					"numinlets" : 2,
					"numoutlets" : 2,
					"patching_rect" : [ 246.333954, 525.0, 39.0, 32.0 ],
					"outlettype" : [ "", "" ]
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "newobj",
					"text" : "print from-maxuino",
					"id" : "obj-9",
					"fontname" : "Trebuchet MS",
					"numinlets" : 1,
					"numoutlets" : 0,
					"fontsize" : 10.0,
					"patching_rect" : [ 266.333954, 565.0, 99.0, 18.0 ]
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "comment",
					"text" : "<< double-click!",
					"id" : "obj-6",
					"fontname" : "Trebuchet MS",
					"numinlets" : 1,
					"numoutlets" : 0,
					"fontsize" : 10.0,
					"patching_rect" : [ 73.333969, 513.0, 83.0, 18.0 ]
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "comment",
					"text" : "arg1: serial port",
					"id" : "obj-4",
					"fontname" : "Trebuchet MS",
					"numinlets" : 1,
					"numoutlets" : 0,
					"fontsize" : 10.0,
					"patching_rect" : [ 152.333954, 512.0, 84.0, 18.0 ]
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "newobj",
					"text" : "p version",
					"id" : "obj-11",
					"fontname" : "Trebuchet MS",
					"numinlets" : 1,
					"numoutlets" : 1,
					"fontsize" : 10.0,
					"patching_rect" : [ 95.333969, 543.0, 52.0, 18.0 ],
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"rect" : [ 0.0, 0.0, 640.0, 480.0 ],
						"bglocked" : 0,
						"defrect" : [ 0.0, 0.0, 640.0, 480.0 ],
						"openrect" : [ 0.0, 0.0, 0.0, 0.0 ],
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 0,
						"gridsize" : [ 15.0, 15.0 ],
						"gridsnaponopen" : 0,
						"toolbarvisible" : 1,
						"boxanimatetime" : 200,
						"imprint" : 0,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"boxes" : [ 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "prepend set",
									"id" : "obj-148",
									"fontname" : "Trebuchet MS",
									"numinlets" : 1,
									"numoutlets" : 1,
									"fontsize" : 10.0,
									"patching_rect" : [ 50.0, 147.0, 65.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "sprintf firmata_version_%s",
									"id" : "obj-150",
									"fontname" : "Trebuchet MS",
									"numinlets" : 1,
									"numoutlets" : 1,
									"fontsize" : 10.0,
									"patching_rect" : [ 50.0, 124.0, 131.0, 18.0 ],
									"outlettype" : [ "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "newobj",
									"text" : "route version",
									"id" : "obj-151",
									"fontname" : "Trebuchet MS",
									"numinlets" : 1,
									"numoutlets" : 2,
									"fontsize" : 10.0,
									"patching_rect" : [ 50.0, 100.0, 80.0, 18.0 ],
									"outlettype" : [ "", "" ]
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "inlet",
									"id" : "obj-9",
									"numinlets" : 0,
									"numoutlets" : 1,
									"patching_rect" : [ 50.0, 40.0, 25.0, 25.0 ],
									"outlettype" : [ "" ],
									"comment" : ""
								}

							}
, 							{
								"box" : 								{
									"maxclass" : "outlet",
									"id" : "obj-10",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 50.0, 225.0, 25.0, 25.0 ],
									"comment" : ""
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"source" : [ "obj-151", 0 ],
									"destination" : [ "obj-150", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-150", 0 ],
									"destination" : [ "obj-148", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-9", 0 ],
									"destination" : [ "obj-151", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
, 							{
								"patchline" : 								{
									"source" : [ "obj-148", 0 ],
									"destination" : [ "obj-10", 0 ],
									"hidden" : 0,
									"midpoints" : [  ]
								}

							}
 ]
					}
,
					"saved_object_attributes" : 					{
						"fontname" : "Arial",
						"default_fontface" : 0,
						"globalpatchername" : "",
						"fontface" : 0,
						"fontsize" : 12.0,
						"default_fontname" : "Arial",
						"default_fontsize" : 12.0
					}

				}

			}
, 			{
				"box" : 				{
					"maxclass" : "bpatcher",
					"varname" : "maxuino-gui[1]",
					"name" : "maxuino-gui.maxpat",
					"id" : "obj-233",
					"args" : [  ],
					"numinlets" : 2,
					"presentation_rect" : [ 23.727276, 5.0, 1415.0, 184.0 ],
					"numoutlets" : 2,
					"patching_rect" : [ 14.333969, 240.0, 1410.0, 172.0 ],
					"outlettype" : [ "", "" ],
					"presentation" : 1
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "message",
					"text" : "version",
					"id" : "obj-5",
					"fontname" : "Trebuchet MS",
					"numinlets" : 2,
					"numoutlets" : 1,
					"fontsize" : 10.0,
					"patching_rect" : [ 30.908829, 477.0, 49.0, 16.0 ],
					"outlettype" : [ "" ]
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "message",
					"text" : "firmata_version_2.10",
					"id" : "obj-149",
					"fontname" : "Trebuchet MS",
					"numinlets" : 2,
					"numoutlets" : 1,
					"fontsize" : 10.0,
					"patching_rect" : [ 95.333969, 567.0, 108.0, 16.0 ],
					"outlettype" : [ "" ]
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "panel",
					"id" : "obj-152",
					"numinlets" : 1,
					"numoutlets" : 0,
					"rounded" : 0,
					"bgcolor" : [ 0.666667, 0.615686, 0.878431, 1.0 ],
					"patching_rect" : [ 103.333969, 562.0, 130.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "newobj",
					"text" : "maxuino a",
					"id" : "obj-166",
					"fontname" : "Trebuchet MS",
					"numinlets" : 2,
					"numoutlets" : 1,
					"fontsize" : 10.0,
					"patching_rect" : [ 14.333969, 512.0, 57.0, 18.0 ],
					"outlettype" : [ "" ],
					"color" : [ 1.0, 0.627451, 0.0, 1.0 ]
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"source" : [ "obj-233", 1 ],
					"destination" : [ "obj-166", 1 ],
					"hidden" : 0,
					"midpoints" : [ 1414.833984, 506.0, 185.0, 506.0, 185.0, 506.0, 61.833969, 506.0 ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-11", 0 ],
					"destination" : [ "obj-149", 0 ],
					"hidden" : 0,
					"midpoints" : [  ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-5", 0 ],
					"destination" : [ "obj-166", 0 ],
					"hidden" : 0,
					"midpoints" : [ 40.408829, 508.0, 23.833969, 508.0 ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-166", 0 ],
					"destination" : [ "obj-11", 0 ],
					"hidden" : 0,
					"midpoints" : [ 23.833969, 538.0, 104.833969, 538.0 ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-166", 0 ],
					"destination" : [ "obj-10", 1 ],
					"hidden" : 0,
					"midpoints" : [ 23.833969, 535.0, 239.333984, 535.0, 239.333984, 520.0, 275.833954, 520.0 ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-166", 0 ],
					"destination" : [ "obj-233", 1 ],
					"hidden" : 0,
					"midpoints" : [ 23.833969, 594.0, 70.0, 594.0, 70.0, 594.0, 1435.0, 594.0, 1435.0, 227.0, 1414.833984, 227.0 ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-233", 0 ],
					"destination" : [ "obj-24", 1 ],
					"hidden" : 0,
					"midpoints" : [ 23.833969, 423.0, 45.0, 423.0, 45.0, 423.0, 275.833954, 423.0 ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-24", 1 ],
					"destination" : [ "obj-25", 0 ],
					"hidden" : 0,
					"midpoints" : [  ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-10", 1 ],
					"destination" : [ "obj-9", 0 ],
					"hidden" : 0,
					"midpoints" : [  ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-166", 0 ],
					"destination" : [ "obj-23", 0 ],
					"hidden" : 0,
					"midpoints" : [  ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-21", 0 ],
					"destination" : [ "obj-233", 0 ],
					"hidden" : 0,
					"midpoints" : [  ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-14", 0 ],
					"destination" : [ "obj-233", 0 ],
					"hidden" : 0,
					"midpoints" : [  ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-12", 0 ],
					"destination" : [ "obj-233", 0 ],
					"hidden" : 0,
					"midpoints" : [  ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-27", 0 ],
					"destination" : [ "obj-233", 0 ],
					"hidden" : 0,
					"midpoints" : [  ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-233", 0 ],
					"destination" : [ "obj-166", 0 ],
					"hidden" : 0,
					"midpoints" : [  ]
				}

			}
 ],
		"parameters" : 		{
			"obj-233::obj-718::obj-11" : [ "live.toggle[40]", "live.toggle", 0 ],
			"obj-233::obj-646::obj-480" : [ "pwm[47]", "pwm", 0 ],
			"obj-233::obj-53::obj-2" : [ "live.toggle[8]", "live.toggle", 0 ],
			"obj-233::obj-758::obj-10" : [ "live.toggle[125]", "live.toggle", 0 ],
			"obj-233::obj-56::obj-2" : [ "live.toggle[5]", "live.toggle", 0 ],
			"obj-233::obj-716::obj-10" : [ "live.toggle[36]", "live.toggle", 0 ],
			"obj-233::obj-692::obj-480" : [ "pwm[16]", "pwm", 0 ],
			"obj-233::obj-687::obj-10" : [ "live.toggle[82]", "live.toggle", 0 ],
			"obj-233::obj-658::obj-2" : [ "live.toggle[100]", "live.toggle", 0 ],
			"obj-233::obj-647::obj-480" : [ "pwm[46]", "pwm", 0 ],
			"obj-233::obj-645::obj-11" : [ "live.toggle[113]", "live.toggle", 0 ],
			"obj-233::obj-644::obj-10" : [ "live.toggle[173]", "live.toggle", 0 ],
			"obj-27::obj-17" : [ "analog[3]", "analog[2]", 0 ],
			"obj-233::obj-59::obj-2" : [ "live.toggle[2]", "live.toggle", 0 ],
			"obj-233::obj-768::obj-480" : [ "pwm[3]", "pwm", 0 ],
			"obj-233::obj-718::obj-480" : [ "pwm[12]", "pwm", 0 ],
			"obj-233::obj-672::obj-10" : [ "live.toggle[150]", "live.toggle", 0 ],
			"obj-233::obj-677::obj-11" : [ "live.toggle[78]", "live.toggle", 0 ],
			"obj-233::obj-642::obj-2" : [ "live.toggle[118]", "live.toggle", 0 ],
			"obj-233::obj-642::obj-10" : [ "live.toggle[175]", "live.toggle", 0 ],
			"obj-27::obj-10" : [ "analog[0]", "analog[0]", 0 ],
			"obj-233::obj-47::obj-2" : [ "live.toggle[14]", "live.toggle", 0 ],
			"obj-233::obj-758::obj-480" : [ "pwm[1]", "pwm", 0 ],
			"obj-233::obj-690::obj-480" : [ "pwm[14]", "pwm", 0 ],
			"obj-233::obj-693::obj-10" : [ "live.toggle[50]", "live.toggle", 0 ],
			"obj-233::obj-676::obj-480" : [ "pwm[30]", "pwm", 0 ],
			"obj-233::obj-643::obj-480" : [ "pwm[50]", "pwm", 0 ],
			"obj-233::obj-50::obj-2" : [ "live.toggle[11]", "live.toggle", 0 ],
			"obj-233::obj-694::obj-480" : [ "pwm[18]", "pwm", 0 ],
			"obj-233::obj-652::obj-11" : [ "live.toggle[160]", "live.toggle", 0 ],
			"obj-233::obj-653::obj-2" : [ "live.toggle[90]", "live.toggle", 0 ],
			"obj-233::obj-655::obj-480" : [ "pwm[39]", "pwm", 0 ],
			"obj-233::obj-711::obj-2" : [ "live.toggle[129]", "live.toggle", 0 ],
			"obj-233::obj-717::obj-11" : [ "live.toggle[38]", "live.toggle", 0 ],
			"obj-233::obj-714::obj-2" : [ "live.toggle[32]", "live.toggle", 0 ],
			"obj-233::obj-674::obj-11" : [ "live.toggle[152]", "live.toggle", 0 ],
			"obj-233::obj-54::obj-2" : [ "live.toggle[7]", "live.toggle", 0 ],
			"obj-233::obj-712::obj-10" : [ "live.toggle[28]", "live.toggle", 0 ],
			"obj-233::obj-691::obj-2" : [ "live.toggle[139]", "live.toggle", 0 ],
			"obj-233::obj-707::obj-10" : [ "live.toggle[147]", "live.toggle", 0 ],
			"obj-233::obj-707::obj-11" : [ "live.toggle[63]", "live.toggle", 0 ],
			"obj-233::obj-657::obj-11" : [ "live.toggle[99]", "live.toggle", 0 ],
			"obj-233::obj-647::obj-2" : [ "live.toggle[109]", "live.toggle", 0 ],
			"obj-233::obj-643::obj-2" : [ "live.toggle[117]", "live.toggle", 0 ],
			"obj-233::obj-642::obj-480" : [ "pwm[51]", "pwm", 0 ],
			"obj-233::obj-57::obj-5" : [ "A_in[3]", "A_in", 0 ],
			"obj-233::obj-717::obj-480" : [ "pwm[11]", "pwm", 0 ],
			"obj-233::obj-727::obj-480" : [ "pwm[13]", "pwm", 0 ],
			"obj-233::obj-690::obj-10" : [ "live.toggle[138]", "live.toggle", 0 ],
			"obj-233::obj-674::obj-2" : [ "live.toggle[73]", "live.toggle", 0 ],
			"obj-233::obj-653::obj-10" : [ "live.toggle[91]", "live.toggle", 0 ],
			"obj-233::obj-657::obj-2" : [ "live.toggle[165]", "live.toggle", 0 ],
			"obj-233::obj-667::obj-11" : [ "live.toggle[103]", "live.toggle", 0 ],
			"obj-233::obj-45::obj-2" : [ "live.toggle[16]", "live.toggle", 0 ],
			"obj-233::obj-757::obj-2" : [ "live.toggle[17]", "live.toggle", 0 ],
			"obj-233::obj-712::obj-11" : [ "live.toggle[130]", "live.toggle", 0 ],
			"obj-233::obj-692::obj-2" : [ "live.toggle[48]", "live.toggle", 0 ],
			"obj-233::obj-672::obj-11" : [ "live.toggle[69]", "live.toggle", 0 ],
			"obj-233::obj-651::obj-11" : [ "live.toggle[87]", "live.toggle", 0 ],
			"obj-233::obj-48::obj-2" : [ "live.toggle[13]", "live.toggle", 0 ],
			"obj-233::obj-727::obj-2" : [ "live.toggle[42]", "live.toggle", 0 ],
			"obj-233::obj-687::obj-2" : [ "live.toggle[157]", "live.toggle", 0 ],
			"obj-233::obj-51::obj-5" : [ "A_in[9]", "A_in", 0 ],
			"obj-233::obj-759::obj-10" : [ "live.toggle[126]", "live.toggle", 0 ],
			"obj-233::obj-696::obj-2" : [ "live.toggle[144]", "live.toggle", 0 ],
			"obj-233::obj-670::obj-2" : [ "live.toggle[65]", "live.toggle", 0 ],
			"obj-233::obj-674::obj-480" : [ "pwm[28]", "pwm", 0 ],
			"obj-233::obj-687::obj-11" : [ "live.toggle[83]", "live.toggle", 0 ],
			"obj-233::obj-644::obj-11" : [ "live.toggle[114]", "live.toggle", 0 ],
			"obj-233::obj-643::obj-11" : [ "live.toggle[174]", "live.toggle", 0 ],
			"obj-27::obj-13" : [ "analog[2]", "analog[2]", 0 ],
			"obj-233::obj-710::obj-11" : [ "live.toggle[25]", "live.toggle", 0 ],
			"obj-233::obj-695::obj-10" : [ "live.toggle[54]", "live.toggle", 0 ],
			"obj-233::obj-696::obj-480" : [ "pwm[20]", "pwm", 0 ],
			"obj-233::obj-670::obj-11" : [ "live.toggle[148]", "live.toggle", 0 ],
			"obj-233::obj-672::obj-480" : [ "pwm[26]", "pwm", 0 ],
			"obj-233::obj-641::obj-10" : [ "live.toggle[120]", "live.toggle", 0 ],
			"obj-233::obj-504::obj-2" : [ "live.toggle[177]", "live.toggle", 0 ],
			"obj-233::obj-759::obj-11" : [ "live.toggle[20]", "live.toggle", 0 ],
			"obj-233::obj-727::obj-11" : [ "live.toggle[43]", "live.toggle", 0 ],
			"obj-233::obj-652::obj-10" : [ "live.toggle[88]", "live.toggle", 0 ],
			"obj-233::obj-653::obj-11" : [ "live.toggle[161]", "live.toggle", 0 ],
			"obj-233::obj-768::obj-2" : [ "live.toggle[127]", "live.toggle", 0 ],
			"obj-233::obj-713::obj-480" : [ "pwm[7]", "pwm", 0 ],
			"obj-233::obj-504::obj-10" : [ "live.toggle[122]", "live.toggle", 0 ],
			"obj-233::obj-713::obj-2" : [ "live.toggle[31]", "live.toggle", 0 ],
			"obj-233::obj-675::obj-11" : [ "live.toggle[153]", "live.toggle", 0 ],
			"obj-233::obj-678::obj-10" : [ "live.toggle[81]", "live.toggle", 0 ],
			"obj-233::obj-54::obj-5" : [ "A_in[6]", "A_in", 0 ],
			"obj-233::obj-768::obj-10" : [ "live.toggle[22]", "live.toggle", 0 ],
			"obj-233::obj-710::obj-480" : [ "pwm[4]", "pwm", 0 ],
			"obj-233::obj-691::obj-480" : [ "pwm[15]", "pwm", 0 ],
			"obj-233::obj-697::obj-2" : [ "live.toggle[145]", "live.toggle", 0 ],
			"obj-233::obj-657::obj-480" : [ "pwm[41]", "pwm", 0 ],
			"obj-233::obj-646::obj-11" : [ "live.toggle[171]", "live.toggle", 0 ],
			"obj-233::obj-646::obj-10" : [ "live.toggle[111]", "live.toggle", 0 ],
			"obj-233::obj-643::obj-10" : [ "live.toggle[116]", "live.toggle", 0 ],
			"obj-233::obj-57::obj-2" : [ "live.toggle[4]", "live.toggle", 0 ],
			"obj-233::obj-696::obj-11" : [ "live.toggle[56]", "live.toggle", 0 ],
			"obj-233::obj-671::obj-480" : [ "pwm[25]", "pwm", 0 ],
			"obj-233::obj-675::obj-10" : [ "live.toggle[74]", "live.toggle", 0 ],
			"obj-233::obj-655::obj-11" : [ "live.toggle[163]", "live.toggle", 0 ],
			"obj-233::obj-656::obj-480" : [ "pwm[40]", "pwm", 0 ],
			"obj-233::obj-649::obj-10" : [ "live.toggle[104]", "live.toggle", 0 ],
			"obj-233::obj-45::obj-5" : [ "A_in[15]", "A_in", 0 ],
			"obj-233::obj-758::obj-2" : [ "live.toggle[18]", "live.toggle", 0 ],
			"obj-233::obj-693::obj-480" : [ "pwm[17]", "pwm", 0 ],
			"obj-233::obj-650::obj-2" : [ "live.toggle[85]", "live.toggle", 0 ],
			"obj-233::obj-654::obj-480" : [ "pwm[38]", "pwm", 0 ],
			"obj-233::obj-48::obj-5" : [ "A_in[12]", "A_in", 0 ],
			"obj-233::obj-718::obj-10" : [ "live.toggle[41]", "live.toggle", 0 ],
			"obj-233::obj-51::obj-2" : [ "live.toggle[10]", "live.toggle", 0 ],
			"obj-233::obj-715::obj-11" : [ "live.toggle[35]", "live.toggle", 0 ],
			"obj-233::obj-677::obj-10" : [ "live.toggle[155]", "live.toggle", 0 ],
			"obj-233::obj-695::obj-11" : [ "live.toggle[143]", "live.toggle", 0 ],
			"obj-233::obj-671::obj-10" : [ "live.toggle[66]", "live.toggle", 0 ],
			"obj-233::obj-678::obj-480" : [ "pwm[32]", "pwm", 0 ],
			"obj-233::obj-667::obj-10" : [ "live.toggle[102]", "live.toggle", 0 ],
			"obj-233::obj-641::obj-480" : [ "pwm[52]", "pwm", 0 ],
			"obj-27::obj-18" : [ "analog[4]", "analog[1]", 0 ],
			"obj-233::obj-711::obj-11" : [ "live.toggle[27]", "live.toggle", 0 ],
			"obj-233::obj-694::obj-11" : [ "live.toggle[53]", "live.toggle", 0 ],
			"obj-233::obj-697::obj-10" : [ "live.toggle[58]", "live.toggle", 0 ],
			"obj-233::obj-671::obj-2" : [ "live.toggle[149]", "live.toggle", 0 ],
			"obj-233::obj-676::obj-2" : [ "live.toggle[77]", "live.toggle", 0 ],
			"obj-233::obj-655::obj-10" : [ "live.toggle[94]", "live.toggle", 0 ],
			"obj-233::obj-658::obj-10" : [ "live.toggle[166]", "live.toggle", 0 ],
			"obj-233::obj-648::obj-2" : [ "live.toggle[107]", "live.toggle", 0 ],
			"obj-233::obj-641::obj-2" : [ "live.toggle[176]", "live.toggle", 0 ],
			"obj-233::obj-52::obj-5" : [ "A_in[8]", "A_in", 0 ],
			"obj-233::obj-759::obj-2" : [ "live.toggle[21]", "live.toggle", 0 ],
			"obj-233::obj-715::obj-10" : [ "live.toggle[133]", "live.toggle", 0 ],
			"obj-233::obj-673::obj-11" : [ "live.toggle[71]", "live.toggle", 0 ],
			"obj-233::obj-55::obj-2" : [ "live.toggle[6]", "live.toggle", 0 ],
			"obj-233::obj-690::obj-11" : [ "live.toggle[45]", "live.toggle", 0 ],
			"obj-233::obj-654::obj-11" : [ "live.toggle[162]", "live.toggle", 0 ],
			"obj-233::obj-58::obj-5" : [ "A_in[2]", "A_in", 0 ],
			"obj-233::obj-710::obj-2" : [ "live.toggle[128]", "live.toggle", 0 ],
			"obj-233::obj-46::obj-5" : [ "A_in[14]", "A_in", 0 ],
			"obj-233::obj-641::obj-11" : [ "live.toggle[121]", "live.toggle", 0 ],
			"obj-233::obj-49::obj-2" : [ "live.toggle[12]", "live.toggle", 0 ],
			"obj-233::obj-63::obj-5" : [ "A_in", "A_in", 0 ],
			"obj-233::obj-714::obj-11" : [ "live.toggle[33]", "live.toggle", 0 ],
			"obj-233::obj-678::obj-2" : [ "live.toggle[80]", "live.toggle", 0 ],
			"obj-233::obj-656::obj-11" : [ "live.toggle[97]", "live.toggle", 0 ],
			"obj-233::obj-648::obj-480" : [ "pwm[45]", "pwm", 0 ],
			"obj-233::obj-768::obj-11" : [ "live.toggle[23]", "live.toggle", 0 ],
			"obj-233::obj-693::obj-11" : [ "live.toggle[141]", "live.toggle", 0 ],
			"obj-233::obj-698::obj-10" : [ "live.toggle[146]", "live.toggle", 0 ],
			"obj-233::obj-687::obj-480" : [ "pwm[33]", "pwm", 0 ],
			"obj-233::obj-691::obj-10" : [ "live.toggle[46]", "live.toggle", 0 ],
			"obj-233::obj-675::obj-480" : [ "pwm[29]", "pwm", 0 ],
			"obj-233::obj-654::obj-10" : [ "live.toggle[93]", "live.toggle", 0 ],
			"obj-233::obj-656::obj-2" : [ "live.toggle[164]", "live.toggle", 0 ],
			"obj-233::obj-714::obj-10" : [ "live.toggle[132]", "live.toggle", 0 ],
			"obj-233::obj-672::obj-2" : [ "live.toggle[68]", "live.toggle", 0 ],
			"obj-233::obj-651::obj-2" : [ "live.toggle[159]", "live.toggle", 0 ],
			"obj-233::obj-651::obj-10" : [ "live.toggle[86]", "live.toggle", 0 ],
			"obj-233::obj-757::obj-10" : [ "live.toggle[124]", "live.toggle", 0 ],
			"obj-233::obj-714::obj-480" : [ "pwm[8]", "pwm", 0 ],
			"obj-233::obj-715::obj-2" : [ "live.toggle[34]", "live.toggle", 0 ],
			"obj-233::obj-676::obj-11" : [ "live.toggle[154]", "live.toggle", 0 ],
			"obj-233::obj-650::obj-10" : [ "live.toggle[84]", "live.toggle", 0 ],
			"obj-233::obj-694::obj-2" : [ "live.toggle[142]", "live.toggle", 0 ],
			"obj-233::obj-670::obj-10" : [ "live.toggle[64]", "live.toggle", 0 ],
			"obj-233::obj-645::obj-2" : [ "live.toggle[112]", "live.toggle", 0 ],
			"obj-233::obj-645::obj-10" : [ "live.toggle[172]", "live.toggle", 0 ],
			"obj-233::obj-642::obj-11" : [ "live.toggle[119]", "live.toggle", 0 ],
			"obj-27::obj-11" : [ "analog[1]", "analog[1]", 0 ],
			"obj-233::obj-711::obj-10" : [ "live.toggle[26]", "live.toggle", 0 ],
			"obj-233::obj-698::obj-2" : [ "live.toggle[60]", "live.toggle", 0 ],
			"obj-233::obj-676::obj-10" : [ "live.toggle[76]", "live.toggle", 0 ],
			"obj-233::obj-655::obj-2" : [ "live.toggle[95]", "live.toggle", 0 ],
			"obj-233::obj-649::obj-11" : [ "live.toggle[168]", "live.toggle", 0 ],
			"obj-233::obj-648::obj-10" : [ "live.toggle[106]", "live.toggle", 0 ],
			"obj-233::obj-52::obj-2" : [ "live.toggle[9]", "live.toggle", 0 ],
			"obj-233::obj-758::obj-11" : [ "live.toggle[19]", "live.toggle", 0 ],
			"obj-233::obj-717::obj-2" : [ "live.toggle[135]", "live.toggle", 0 ],
			"obj-233::obj-674::obj-10" : [ "live.toggle[72]", "live.toggle", 0 ],
			"obj-233::obj-652::obj-2" : [ "live.toggle[89]", "live.toggle", 0 ],
			"obj-233::obj-55::obj-5" : [ "A_in[5]", "A_in", 0 ],
			"obj-233::obj-715::obj-480" : [ "pwm[9]", "pwm", 0 ],
			"obj-233::obj-58::obj-2" : [ "live.toggle[3]", "live.toggle", 0 ],
			"obj-233::obj-716::obj-2" : [ "live.toggle[37]", "live.toggle", 0 ],
			"obj-233::obj-46::obj-2" : [ "live.toggle[15]", "live.toggle", 0 ],
			"obj-233::obj-504::obj-11" : [ "live.toggle[123]", "live.toggle", 0 ],
			"obj-233::obj-49::obj-5" : [ "A_in[11]", "A_in", 0 ],
			"obj-233::obj-711::obj-480" : [ "pwm[5]", "pwm", 0 ],
			"obj-233::obj-713::obj-10" : [ "live.toggle[30]", "live.toggle", 0 ],
			"obj-233::obj-697::obj-480" : [ "pwm[21]", "pwm", 0 ],
			"obj-233::obj-707::obj-2" : [ "live.toggle[62]", "live.toggle", 0 ],
			"obj-233::obj-673::obj-2" : [ "live.toggle[151]", "live.toggle", 0 ],
			"obj-233::obj-657::obj-10" : [ "live.toggle[98]", "live.toggle", 0 ],
			"obj-233::obj-647::obj-11" : [ "live.toggle[170]", "live.toggle", 0 ],
			"obj-233::obj-646::obj-2" : [ "live.toggle[110]", "live.toggle", 0 ],
			"obj-233::obj-757::obj-11" : [ "live.toggle", "live.toggle", 0 ],
			"obj-233::obj-710::obj-10" : [ "live.toggle[24]", "live.toggle", 0 ],
			"obj-233::obj-718::obj-2" : [ "live.toggle[136]", "live.toggle", 0 ],
			"obj-233::obj-695::obj-2" : [ "live.toggle[55]", "live.toggle", 0 ],
			"obj-233::obj-695::obj-480" : [ "pwm[19]", "pwm", 0 ],
			"obj-233::obj-667::obj-480" : [ "pwm[43]", "pwm", 0 ],
			"obj-233::obj-63::obj-2" : [ "live.toggle[1]", "live.toggle", 0 ],
			"obj-233::obj-691::obj-11" : [ "live.toggle[47]", "live.toggle", 0 ],
			"obj-233::obj-649::obj-2" : [ "live.toggle[105]", "live.toggle", 0 ],
			"obj-233::obj-644::obj-480" : [ "pwm[49]", "pwm", 0 ],
			"obj-233::obj-713::obj-11" : [ "live.toggle[131]", "live.toggle", 0 ],
			"obj-233::obj-671::obj-11" : [ "live.toggle[67]", "live.toggle", 0 ],
			"obj-233::obj-650::obj-11" : [ "live.toggle[158]", "live.toggle", 0 ],
			"obj-233::obj-53::obj-5" : [ "A_in[7]", "A_in", 0 ],
			"obj-233::obj-652::obj-480" : [ "pwm[36]", "pwm", 0 ],
			"obj-233::obj-56::obj-5" : [ "A_in[4]", "A_in", 0 ],
			"obj-233::obj-712::obj-480" : [ "pwm[6]", "pwm", 0 ],
			"obj-233::obj-698::obj-480" : [ "pwm[22]", "pwm", 0 ],
			"obj-233::obj-678::obj-11" : [ "live.toggle[156]", "live.toggle", 0 ],
			"obj-233::obj-658::obj-11" : [ "live.toggle[101]", "live.toggle", 0 ],
			"obj-233::obj-59::obj-5" : [ "A_in[1]", "A_in", 0 ],
			"obj-233::obj-694::obj-10" : [ "live.toggle[52]", "live.toggle", 0 ],
			"obj-233::obj-650::obj-480" : [ "pwm[34]", "pwm", 0 ],
			"obj-233::obj-658::obj-480" : [ "pwm[42]", "pwm", 0 ],
			"obj-233::obj-649::obj-480" : [ "pwm[44]", "pwm", 0 ],
			"obj-233::obj-504::obj-480" : [ "pwm[53]", "pwm", 0 ],
			"obj-27::obj-19" : [ "analog[5]", "analog[0]", 0 ],
			"obj-233::obj-47::obj-5" : [ "A_in[13]", "A_in", 0 ],
			"obj-233::obj-692::obj-10" : [ "live.toggle[49]", "live.toggle", 0 ],
			"obj-233::obj-697::obj-11" : [ "live.toggle[59]", "live.toggle", 0 ],
			"obj-233::obj-656::obj-10" : [ "live.toggle[96]", "live.toggle", 0 ],
			"obj-233::obj-667::obj-2" : [ "live.toggle[167]", "live.toggle", 0 ],
			"obj-233::obj-647::obj-10" : [ "live.toggle[108]", "live.toggle", 0 ],
			"obj-233::obj-50::obj-5" : [ "A_in[10]", "A_in", 0 ],
			"obj-233::obj-716::obj-11" : [ "live.toggle[134]", "live.toggle", 0 ],
			"obj-233::obj-670::obj-480" : [ "pwm[24]", "pwm", 0 ],
			"obj-233::obj-673::obj-10" : [ "live.toggle[70]", "live.toggle", 0 ],
			"obj-233::obj-645::obj-480" : [ "pwm[48]", "pwm", 0 ],
			"obj-233::obj-690::obj-2" : [ "live.toggle[44]", "live.toggle", 0 ],
			"obj-233::obj-653::obj-480" : [ "pwm[37]", "pwm", 0 ],
			"obj-233::obj-717::obj-10" : [ "live.toggle[39]", "live.toggle", 0 ],
			"obj-233::obj-651::obj-480" : [ "pwm[35]", "pwm", 0 ],
			"obj-233::obj-712::obj-2" : [ "live.toggle[29]", "live.toggle", 0 ],
			"obj-233::obj-692::obj-11" : [ "live.toggle[140]", "live.toggle", 0 ],
			"obj-233::obj-698::obj-11" : [ "live.toggle[61]", "live.toggle", 0 ],
			"obj-233::obj-673::obj-480" : [ "pwm[27]", "pwm", 0 ],
			"obj-233::obj-677::obj-480" : [ "pwm[31]", "pwm", 0 ],
			"obj-233::obj-677::obj-2" : [ "live.toggle[79]", "live.toggle", 0 ],
			"obj-233::obj-648::obj-11" : [ "live.toggle[169]", "live.toggle", 0 ],
			"obj-233::obj-644::obj-2" : [ "live.toggle[115]", "live.toggle", 0 ],
			"obj-233::obj-759::obj-480" : [ "pwm[2]", "pwm", 0 ],
			"obj-233::obj-727::obj-10" : [ "live.toggle[137]", "live.toggle", 0 ],
			"obj-233::obj-693::obj-2" : [ "live.toggle[51]", "live.toggle", 0 ],
			"obj-233::obj-696::obj-10" : [ "live.toggle[57]", "live.toggle", 0 ],
			"obj-233::obj-675::obj-2" : [ "live.toggle[75]", "live.toggle", 0 ],
			"obj-233::obj-654::obj-2" : [ "live.toggle[92]", "live.toggle", 0 ],
			"obj-233::obj-757::obj-480" : [ "pwm", "pwm", 0 ],
			"obj-233::obj-716::obj-480" : [ "pwm[10]", "pwm", 0 ],
			"obj-233::obj-707::obj-480" : [ "pwm[23]", "pwm", 0 ]
		}

	}

}
