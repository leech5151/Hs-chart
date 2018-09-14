	
	
	function init_echarts2() {
		if( typeof (echarts) === 'undefined'){ return; }
		console.log('과제중');
	
	
		var theme = {
				color: [
					'#26B99A', '#34495E', '#BDC3C7', '#3498DB',
					'#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
					],
	
					title: {
						itemGap: 8,
						textStyle: {
							fontWeight: 'normal',
							color: '#408829'
						}
					},
	
					dataRange: {
						color: ['#1f610a', '#97b58d']
					},
	
					toolbox: {
						color: ['#408829', '#408829', '#408829', '#408829']
					},
	
					tooltip: {
						backgroundColor: 'rgba(0,0,0,0.5)',
						axisPointer: {
							type: 'line',
							lineStyle: {
								color: '#408829',
								type: 'dashed'
							},
							crossStyle: {
								color: '#408829'
							},
							shadowStyle: {
								color: 'rgba(200,200,200,0.3)'
							}
						}
					},
	
					dataZoom: {
						dataBackgroundColor: '#eee',
						fillerColor: 'rgba(64,136,41,0.2)',
						handleColor: '#408829'
					},
					grid: {
						borderWidth: 0
					},
	
					categoryAxis: {
						axisLine: {
							lineStyle: {
								color: '#408829'
							}
						},
						splitLine: {
							lineStyle: {
								color: ['#eee']
							}
						}
					},
	
					valueAxis: {
						axisLine: {
							lineStyle: {
								color: '#408829'
							}
						},
						splitArea: {
							show: true,
							areaStyle: {
								color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
							}
						},
						splitLine: {
							lineStyle: {
								color: ['#eee']
							}
						}
					},
					timeline: {
						lineStyle: {
							color: '#408829'
						},
						controlStyle: {
							normal: {color: '#408829'},
							emphasis: {color: '#408829'}
						}
					},
	
					k: {
						itemStyle: {
							normal: {
								color: '#68a54a',
								color0: '#a9cba2',
								lineStyle: {
									width: 1,
									color: '#408829',
									color0: '#86b379'
								}
							}
						}
					},
					map: {
						itemStyle: {
							normal: {
								areaStyle: {
									color: '#ddd'
								},
								label: {
									textStyle: {
										color: '#c12e34'
									}
								}
							},
							emphasis: {
								areaStyle: {
									color: '#99d2dd'
								},
								label: {
									textStyle: {
										color: '#c12e34'
									}
								}
							}
						}
					},
					force: {
						itemStyle: {
							normal: {
								linkStyle: {
									strokeColor: '#408829'
								}
							}
						}
					},
					chord: {
						padding: 4,
						itemStyle: {
							normal: {
								lineStyle: {
									width: 1,
									color: 'rgba(128, 128, 128, 0.5)'
								},
								chordStyle: {
									lineStyle: {
										width: 1,
										color: 'rgba(128, 128, 128, 0.5)'
									}
								}
							},
							emphasis: {
								lineStyle: {
									width: 1,
									color: 'rgba(128, 128, 128, 0.5)'
								},
								chordStyle: {
									lineStyle: {
										width: 1,
										color: 'rgba(128, 128, 128, 0.5)'
									}
								}
							}
						}
					},
					gauge: {
						startAngle: 225,
						endAngle: -45,
						axisLine: {
							show: true,
							lineStyle: {
								color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#408829']],
								width: 8
							}
						},
						axisTick: {
							splitNumber: 10,
							length: 12,
							lineStyle: {
								color: 'auto'
							}
						},
						axisLabel: {
							textStyle: {
								color: 'auto'
							}
						},
						splitLine: {
							length: 18,
							lineStyle: {
								color: 'auto'
							}
						},
						pointer: {
							length: '90%',
							color: 'auto'
						},
						title: {
							textStyle: {
								color: '#333'
							}
						},
						detail: {
							textStyle: {
								color: 'auto'
							}
						}
					},
					textStyle: {
						fontFamily: 'Arial, Verdana, sans-serif'
					}
		};
	
	
	
		//echart Bar Horizontal2
	
		if ($('#echart_bar_horizontal2').length ){ 
	
			var echartBar = echarts.init(document.getElementById('echart_bar_horizontal2'), theme);
	
			echartBar.setOption({
				title: {
					show: false,
					text: 'Bar Graph',
					subtext: 'Graph subtitle'
				},
				grid: {
					width: '50%',
//					height: '150%',
					height: '150%',/* function (params,ticket,callback){
						console.log("이높이머지");
						console.log(params);
						console.log(params.length);
						var res = '';
						res = params;
						return '150%';
					},*/
					top: '4%',
					left: 'auto',
					tooltip:{
						position: ['50%', '50%'],
						extraCssText: 'overflow: scroll;',
					}
				},
				showDetail: true,
				tooltip: {
					trigger: 'axis',
				},
				legend: {
					type: scroll,
					show: false,
					x: 100,
					data: ['2015'],
					scrollDataIndex : 7,
				
				},
				toolbox: {
					show: true,
					feature: {
						saveAsImage: {
							show: false,
							title: "Save Image"
						}
					}
				},
				calculable: true,
				xAxis: [{
					type: 'value',
					boundaryGap: [0, 0.01]
				}],
				yAxis: [{
					axisLabel: {
						show: true,
						clickable: true,
						formatter:  function (params,ticket,callback){
							console.log(echarts.grid);
							var res = '';
							res = params;
							
							return res;
						},
						textStyle: {
							fontsize: 10,
						},
					},
					type: 'category',
					data: ['Medication-lost','Allergy-known-patient ordered\nreceived med' ,'Allergy not documented' ,'Medication-incorrect' ,'Other(please spectify)', 'Dose-omitted' ,'Dose-incorrect','Delay','Delay','Delay','Delay','Delay','Delay'],
				}],
				series: [{
					name: '2015',
					type: 'bar',
//					barWidth: 100,
					barCategoryGap: '25%',
//					barGap: '150%',
//					barMaxWidth: 500,
					data: [124, 125, 127, 129, 130, 175, 413, 422, 422, 422, 422, 422, 422]
				}]
			});
	
		} 
	
		//echart Bar Horizontal3
	
		if ($('#echart_bar_horizontal3').length ){ 
	
			var echartBar = echarts.init(document.getElementById('echart_bar_horizontal3'), theme);
	
			echartBar.setOption({
				title: {
					show: false,
					text: 'Bar Graph',
					subtext: 'Graph subtitle'
				},
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					show: false,
					x: 100,
					data: ['2015']
				},
				grid: {
					width: '50%',
					height: '90%',
					top: '4%',
					left: 'auto',
					tooltop:{
						position: ['50%', '50%']
					}
				},
				toolbox: {
					show: true,
					feature: {
						saveAsImage: {
							show: false,
							title: "Save Image"
						}
					}
				},
				calculable: true,
				xAxis: [{
					type: 'value',
					boundaryGap: [0, 0.01]
				}],
				yAxis: [{
					type: 'category',
					data: ['Patient Education','Storage' ,'Purchasing' ,'Monitoring' ,'Trancribing', 'Prescribing/ordering' ,'Administering','Dispensing']
				}],
				series: [{
					name: '2015',
					type: 'bar',
					data: [124, 125, 127, 129, 130, 175, 413, 422]
				}]
			});
	
		} 
	
		
		if ($('#echart_bar_horizontal4').length ){ 
			var keywords = {
		              "visualMap": 22199,
		              "continuous": 10288,
		              "contoller": 620,
		              "series": 274470,
		              "gauge": 12311,
		              "detail": 1206,
		              "piecewise": 4885,
		              "textStyle": 32294,
		              "markPoint": 18574,
		              "pie": 38929,
		              "roseType": 969,
		              "label": 37517,
		              "emphasis": 12053,
		              "yAxis": 57299,
		              "name": 15418,
		              "type": 22905,
		              "gridIndex": 5146,
		              "normal": 49487,
		              "itemStyle": 33837,
		              "min": 4500,
		              "silent": 5744,
		              "animation": 4840,
		              "offsetCenter": 232,
		              "inverse": 3706,
		              "borderColor": 4812,
		              "markLine": 16578,
		              "line": 76970,
		              "radiusAxis": 6704,
		              "radar": 15964,
		              "data": 60679,
		              "dataZoom": 24347,
		              "tooltip": 43420,
		              "toolbox": 25222,
		              "geo": 16904,
		              "parallelAxis": 4029,
		              "parallel": 5319,
		              "max": 3393,
		              "bar": 43066,
		              "heatmap": 3110,
		              "map": 20285,
		              "animationDuration": 3425,
		              "animationDelay": 2431,
		              "splitNumber": 5175,
		              "axisLine": 12738,
		              "lineStyle": 19601,
		              "splitLine": 7133,
		              "axisTick": 8831,
		              "axisLabel": 17516,
		              "pointer": 590,
		              "color": 23426,
		              "title": 38497,
		              "formatter": 15214,
		              "slider": 7236,
		              "legend": 66514,
		              "grid": 28516,
		              "smooth": 1295,
		              "smoothMonotone": 696,
		              "sampling": 757,
		              "feature": 12815,
		              "saveAsImage": 2616,
		              "polar": 6279,
		              "calculable": 879,
		              "backgroundColor": 9419,
		              "excludeComponents": 130,
		              "show": 20620,
		              "text": 2592,
		              "icon": 2782,
		              "dimension": 478,
		              "inRange": 1060,
		              "animationEasing": 2983,
		              "animationDurationUpdate": 2259,
		              "animationDelayUpdate": 2236,
		              "animationEasingUpdate": 2213,
		              "xAxis": 89459,
		              "angleAxis": 5469,
		              "showTitle": 484,
		              "dataView": 2754,
		              "restore": 932,
		              "timeline": 10104,
		              "range": 477,
		              "value": 5732,
		              "precision": 878,
		              "target": 1433,
		              "zlevel": 5361,
		              "symbol": 8718,
		              "interval": 7964,
		              "symbolSize": 5300,
		              "showSymbol": 1247,
		              "inside": 8913,
		              "xAxisIndex": 3843,
		              "orient": 4205,
		              "boundaryGap": 5073,
		              "nameGap": 4896,
		              "zoomLock": 571,
		              "hoverAnimation": 2307,
		              "legendHoverLink": 3553,
		              "stack": 2907,
		              "throttle": 466,
		              "connectNulls": 897,
		              "clipOverflow": 826,
		              "startValue": 551,
		              "minInterval": 3292,
		              "opacity": 3097,
		              "splitArea": 4775,
		              "filterMode": 635,
		              "end": 409,
		              "left": 6475,
		              "funnel": 2238,
		              "lines": 6403,
		              "baseline": 431,
		              "align": 2608,
		              "coord": 897,
		              "nameTextStyle": 7477,
		              "width": 4338,
		              "shadowBlur": 4493,
		              "effect": 929,
		              "period": 225,
		              "areaColor": 631,
		              "borderWidth": 3654,
		              "nameLocation": 4418,
		              "position": 11723,
		              "containLabel": 1701,
		              "scatter": 10718,
		              "areaStyle": 5310,
		              "scale": 3859,
		              "pieces": 414,
		              "categories": 1000,
		              "selectedMode": 3825,
		              "itemSymbol": 273,
		              "effectScatter": 7147,
		              "fontStyle": 3376,
		              "fontSize": 3386,
		              "margin": 1034,
		              "iconStyle": 2257,
		              "link": 1366,
		              "axisPointer": 5245,
		              "showDelay": 896,
		              "graph": 22194,
		              "subtext": 1442,
		              "selected": 2881,
		              "barCategoryGap": 827,
		              "barGap": 1094,
		              "barWidth": 1521,
		              "coordinateSystem": 3622,
		              "barBorderRadius": 284,
		              "z": 4014,
		              "polarIndex": 1456,
		              "shadowOffsetX": 3046,
		              "shadowColor": 3771,
		              "shadowOffsetY": 2475,
		              "height": 1988,
		              "barMinHeight": 575,
		              "lang": 131,
		              "symbolRotate": 2752,
		              "symbolOffset": 2549,
		              "showAllSymbol": 942,
		              "transitionDuration": 993,
		              "bottom": 3724,
		              "fillerColor": 229,
		              "nameMap": 1249,
		              "barMaxWidth": 747,
		              "radius": 2103,
		              "center": 2425,
		              "magicType": 3276,
		              "labelPrecision": 248,
		              "option": 654,
		              "seriesIndex": 935,
		              "controlPosition": 121,
		              "itemGap": 3188,
		              "padding": 3481,
		              "shadowStyle": 347,
		              "boxplot": 1394,
		              "labelFormatter": 264,
		              "realtime": 631,
		              "dataBackgroundColor": 239,
		              "showDetail": 247,
		              "showDataShadow": 217,
		              "x": 684,
		              "valueDim": 499,
		              "onZero": 931,
		              "right": 3255,
		              "clockwise": 1035,
		              "itemWidth": 1732,
		              "trigger": 3840,
		              "axis": 379,
		              "selectedOffset": 670,
		              "startAngle": 1293,
		              "minAngle": 590,
		              "top": 4637,
		              "avoidLabelOverlap": 870,
		              "labelLine": 3785,
		              "sankey": 2933,
		              "endAngle": 213,
		              "start": 779,
		              "roam": 1738,
		              "fontWeight": 2828,
		              "fontFamily": 2490,
		              "subtextStyle": 2066,
		              "indicator": 853,
		              "sublink": 708,
		              "zoom": 1038,
		              "subtarget": 659,
		              "length": 1060,
		              "itemSize": 505,
		              "controlStyle": 452,
		              "yAxisIndex": 2529,
		              "edgeLabel": 1188,
		              "radiusAxisIndex": 354,
		              "scaleLimit": 1313,
		              "geoIndex": 535,
		              "regions": 1892,
		              "itemHeight": 1290,
		              "nodes": 644,
		              "candlestick": 3166,
		              "crossStyle": 466,
		              "edges": 369,
		              "links": 3277,
		              "layout": 846,
		              "barBorderColor": 721,
		              "barBorderWidth": 498,
		              "treemap": 3865,
		              "y": 367,
		              "valueIndex": 704,
		              "showLegendSymbol": 482,
		              "mapValueCalculation": 492,
		              "optionToContent": 264,
		              "handleColor": 187,
		              "handleSize": 271,
		              "showContent": 1853,
		              "angleAxisIndex": 406,
		              "endValue": 327,
		              "triggerOn": 1720,
		              "contentToOption": 169,
		              "buttonColor": 71,
		              "rotate": 1144,
		              "hoverLink": 335,
		              "outOfRange": 491,
		              "textareaColor": 58,
		              "textareaBorderColor": 58,
		              "textColor": 60,
		              "buttonTextColor": 66,
		              "category": 336,
		              "hideDelay": 786,
		              "alwaysShowContent": 1267,
		              "extraCssText": 901,
		              "effectType": 277,
		              "force": 1820,
		              "rippleEffect": 723,
		              "edgeSymbolSize": 329,
		              "showEffectOn": 271,
		              "gravity": 199,
		              "edgeLength": 193,
		              "layoutAnimation": 152,
		              "length2": 169,
		              "enterable": 957,
		              "dim": 83,
		              "readOnly": 143,
		              "levels": 444,
		              "textGap": 256,
		              "pixelRatio": 84,
		              "nodeScaleRatio": 232,
		              "draggable": 249,
		              "brushType": 158,
		              "radarIndex": 152,
		              "large": 182,
		              "edgeSymbol": 675,
		              "largeThreshold": 132,
		              "leafDepth": 73,
		              "childrenVisibleMin": 73,
		              "minSize": 35,
		              "maxSize": 35,
		              "sort": 90,
		              "funnelAlign": 61,
		              "source": 336,
		              "nodeClick": 200,
		              "curveness": 350,
		              "areaSelectStyle": 104,
		              "parallelIndex": 52,
		              "initLayout": 359,
		              "trailLength": 116,
		              "boxWidth": 20,
		              "back": 53,
		              "rewind": 110,
		              "zoomToNodeRatio": 80,
		              "squareRatio": 60,
		              "parallelAxisDefault": 358,
		              "checkpointStyle": 440,
		              "nodeWidth": 49,
		              "color0": 62,
		              "layoutIterations": 56,
		              "nodeGap": 54,
		              "color(Array": 76,
		              "<string>)": 76,
		              "repulsion": 276,
		              "tiled": 105,
		              "currentIndex": 145,
		              "axisType": 227,
		              "loop": 97,
		              "playInterval": 112,
		              "borderColor0": 23,
		              "gap": 43,
		              "autoPlay": 123,
		              "showPlayBtn": 25,
		              "breadcrumb": 119,
		              "colorMappingBy": 85,
		              "id": 18,
		              "blurSize": 85,
		              "minOpacity": 50,
		              "maxOpacity": 54,
		              "prevIcon": 12,
		              "children": 21,
		              "shape": 98,
		              "nextIcon": 12,
		              "showNextBtn": 17,
		              "stopIcon": 21,
		              "visibleMin": 83,
		              "visualDimension": 97,
		              "colorSaturation": 56,
		              "colorAlpha": 66,
		              "emptyItemWidth": 10,
		              "inactiveOpacity": 4,
		              "activeOpacity": 4,
		              "showPrevBtn": 19,
		              "playIcon": 26,
		              "ellipsis": 19,
		              "gapWidth": 19,
		              "borderColorSaturation": 10,
		              "handleIcon": 2,
		              "handleStyle": 6,
		              "borderType": 1,
		              "constantSpeed": 1,
		              "polyline": 2,
		              "blendMode": 1,
		              "dataBackground": 1,
		              "textAlign": 1,
		              "textBaseline": 1,
		              "brush": 3
		            };
			 var data = [];
            for (var name in keywords) {
                data.push({
                    name: name,
                    value: Math.sqrt(keywords[name])
                })
            }
            var maskImage = new Image();
			var echarts = require('echarts');
			require('echarts-wordcloud');
			var echartBar = echarts.init(document.getElementById('echart_bar_horizontal4'), theme);

			function createRandomItemStyle() {
			    return {
			        normal: {
			            color: 'rgb(' + [
			                Math.round(Math.random() * 160),
			                Math.round(Math.random() * 160),
			                Math.round(Math.random() * 160)
			            ].join(',') + ')'
			        }
			    };
			}

			echartBar.setOption({
			    tooltip: {
			        show: true
			    },
			    series: [ {
                    type: 'wordCloud',
                    sizeRange: [10, 100],
                    rotationRange: [-90, 90],
                    rotationStep: 45,
                    gridSize: 2,
                    shape: 'pentagon',
                    maskImage: maskImage,
                    drawOutOfBound: false,
                    textStyle: {
                        normal: {
                            color: function () {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            color: 'red'
                        }
                    },
                    data: data.sort(function (a, b) {
                        return b.value  - a.value;
                    })
                } ]
			});
			maskImage.onload = function () {
                option.series[0].maskImage
                chart.setOption(option);
            }
            maskImage.src = './logo.png';
            window.onresize = function () {
                chart.resize();
            }
		}
		
		
		if ($('#echart_bar_mix').length ){ 
			
			var echartBar = echarts.init(document.getElementById('echart_bar_mix'), theme);
			var echartBar2 = echarts.init(document.getElementById('echart_bar_mix2'), theme);
			
//			echarts.connect([echartBar, echartBar2]);
			
			echartBar.setOption({
			    tooltip : {
			        trigger: 'axis'
			    },
			    toolbox: {
			        show : false,
			        y: 'bottom',
			        feature : {
			            mark : {show: false},
			            dataView : {show: true, readOnly: false},
			            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
			            restore : {show: false},
			            saveAsImage : {show: false}
			        }
			    },
			    calculable : true,
			    legend: {
			    	show: false,
			        data:['1','2','3','4','5','6','7','8','9']
			    },
			    grid: {
			    	top: '35%',
			    	left: '5%',
			    	width: '90%',
			    	height: '55%',
			    	
			    },
			    xAxis : [
			        {
			            type : 'category',
			            position: 'bottom',
			            axisLabel : {
			                show:true,
			                margin: 8,
			                textStyle: {
			                    fontSize: 15,
			                }
			            },
			            splitLine : {
			                show:true,
			            },
			            data : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
			        },
			        {
			        	postion: 'top',
			            type : 'category',
			            data : ['2015']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value',
			            position: 'left',
			            splitNumber: 3,
			            axisLabel : {
			                show:true,
			                interval: 'auto',    // {number}
			                textStyle: {
			                    fontSize: 10,
			                    fontStyle: 'normal',
			                    fontWeight: 'bold'
			                }
			            },
			        },
			        {
			        	position: 'right',
			            type : 'value',
			            splitNumber: 2,
			        },
			    ],
			    series : [
			    	{
			        	yAxisIndex: 1,
			            name:'Error Rate',
			            type:'line',
			            data:[4.2, 5.1, 3.9, 4.7, 5.4, 5.8, 4.3, 5.4, 6.6, 5.7, 6.6, 7.2]
			        },
			        { 
			        	yAxisIndex: 0,
			            name:'known',
			            type:'bar',
//			            tooltip : {trigger: 'item'},
			            stack: '广告',
			            data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			        },
			        {
			        	label: {
			        		position: 'inside',
			        	},
			        	yAxisIndex: 0,
			            name:'High Alert Yes',
			            type:'bar',
//			            tooltip : {trigger: 'item'},
			            stack: '广告',
			            data:[47, 34, 30, 36, 34, 39, 25, 35, 19, 24, 33, 54]
			        },
			        {
			        	yAxisIndex: 0,
			            name:'High Alert No',
			            type:'bar',
//			            tooltip : {trigger: 'item'},
			            stack: '广告',
			            data:[97, 127, 98, 112, 148, 154, 104, 111, 49, 84, 152, 240]
			        },
			    ]
			});
			
			echartBar2.setOption({
			    tooltip : {
			        trigger: 'axis'
			    },
			    toolbox: {
			        show : false,
			        y: 'bottom',
			        feature : {
			            mark : {show: false},
			            dataView : {show: true, readOnly: false},
			            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
			            restore : {show: false},
			            saveAsImage : {show: false}
			        }
			    },
			    calculable : true,
			    legend: {
			    	show: false,
			        data:['1','2','3','4','5','6','7','8','9']
			    },
			    xAxis : [
			        {
			        	show:false,
			            type : 'category',
			            position: 'bottom',
			            axisLabel : {
			                show:true,
			                textStyle: {
			                    fontSize: 15,
			                }
			            },
			            splitLine : {
			                show:true,
			            },
			            data : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
			        },
			        {
			        	position: 'top',
			            type : 'category',
			            data : ['2015','2016']
			        }
			    ],
			    yAxis : [
			        {
			        	position: 'left',
			            type : 'value',
			            splitNumber: 2,
			        }
			    ],
			    series : [
			        {
			        	yAxisIndex: 0,
			            name:'Error Rate',
			            type:'line',
			            data:[4.2, 5.1, 3.9, 4.7, 5.4, 5.8, 4.3, 5.4, 6.6, 5.7, 6.6, 7.2, 1.2]
			        }
			    ]
			});
	
		}
		
	}  
	
	$(document).ready(function() {
		init_echarts2();
	});	
	
	
