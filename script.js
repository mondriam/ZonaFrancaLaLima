(function(){
    var script = { "definitions": [
 {
  "easing": "cubic_in_out",
  "id": "effect_D372A0B8_DE61_E320_41EA_4D2D33B33972",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_474FEAEC_160C_229C_41B5_A893F886FCB3_camera"
 },
 {
  "popupMaxHeight": "95%",
  "hideDuration": 500,
  "yaw": -73.96,
  "showDuration": 500,
  "class": "PopupPanoramaOverlay",
  "rotationY": 0,
  "hideEasing": "cubic_out",
  "rotationX": 0,
  "rotationZ": 0,
  "hfov": 6.64,
  "id": "popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_1.jpg",
     "width": 1024,
     "class": "ImageResourceLevel",
     "height": 748
    }
   ]
  },
  "pitch": 7.67,
  "popupDistance": 100,
  "popupMaxWidth": "95%",
  "showEasing": "cubic_in"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_E359A214_ED68_4575_41DB_B895523643F9",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D37720C7_DE61_E360_419B_7A8098D42EE3",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "mapLocations": [
   {
    "map": {
     "fieldOfViewOverlayInsideColor": "#000000",
     "class": "Map",
     "fieldOfViewOverlayOutsideColor": "#000000",
     "thumbnailUrl": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_t.png",
     "id": "map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
     "minimumZoomFactor": 0.5,
     "overlays": [
      {
       "useHandCursor": true,
       "map": {
        "width": 80,
        "x": 241.15,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_0_map.gif",
           "width": 40,
           "class": "ImageResourceLevel",
           "height": 40
          }
         ]
        },
        "offsetY": 0,
        "height": 80,
        "y": 382.75
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Entrada"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_C85F514D_DD1A_7E64_41E9_30CB45494AAF",
       "image": {
        "x": 241.15,
        "class": "HotspotMapOverlayImage",
        "y": 382.75,
        "width": 80,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_0.png",
           "width": 80,
           "class": "ImageResourceLevel",
           "height": 80
          }
         ]
        },
        "height": 80
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 40,
        "x": 262.7,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_1_map.gif",
           "width": 20,
           "class": "ImageResourceLevel",
           "height": 20
          }
         ]
        },
        "offsetY": 0,
        "height": 40,
        "y": 286.8
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Rotonda"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 29)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_CA4EA4DE_DD1B_A664_41E0_AE0B0C78521C",
       "image": {
        "x": 262.7,
        "class": "HotspotMapOverlayImage",
        "y": 286.8,
        "width": 40,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_1.png",
           "width": 40,
           "class": "ImageResourceLevel",
           "height": 40
          }
         ]
        },
        "height": 40
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 20,
        "x": 286.9,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_2_map.gif",
           "width": 10,
           "class": "ImageResourceLevel",
           "height": 10
          }
         ]
        },
        "offsetY": 0,
        "height": 20,
        "y": 323.85
       },
       "rollOverDisplay": true,
       "data": {
        "label": "CC"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 30)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_CB611BF8_DD1A_A22C_41D9_CBADF82A7516",
       "image": {
        "x": 286.9,
        "class": "HotspotMapOverlayImage",
        "y": 323.85,
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_2.png",
           "width": 20,
           "class": "ImageResourceLevel",
           "height": 20
          }
         ]
        },
        "height": 20
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 40,
        "x": 69.75,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_3_map.gif",
           "width": 20,
           "class": "ImageResourceLevel",
           "height": 20
          }
         ]
        },
        "offsetY": 0,
        "height": 40,
        "y": 287.7
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Esquina Izquierda"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 26)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_CB150A1A_DD16_ADEC_41E0_7B7C63D3E43F",
       "image": {
        "x": 69.75,
        "class": "HotspotMapOverlayImage",
        "y": 287.7,
        "width": 40,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_3.png",
           "width": 40,
           "class": "ImageResourceLevel",
           "height": 40
          }
         ]
        },
        "height": 40
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 20,
        "x": 82.35,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_4_map.gif",
           "width": 10,
           "class": "ImageResourceLevel",
           "height": 10
          }
         ]
        },
        "offsetY": 0,
        "height": 20,
        "y": 360.9
       },
       "rollOverDisplay": true,
       "data": {
        "label": "Izquierda 2"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 27)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_CA475950_DD17_AE7D_41E8_4EEDBA4F4AC7",
       "image": {
        "x": 82.35,
        "class": "HotspotMapOverlayImage",
        "y": 360.9,
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_4.png",
           "width": 20,
           "class": "ImageResourceLevel",
           "height": 20
          }
         ]
        },
        "height": 20
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 40,
        "x": 76.9,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_5_map.gif",
           "width": 20,
           "class": "ImageResourceLevel",
           "height": 20
          }
         ]
        },
        "offsetY": 0,
        "height": 40,
        "y": 415.15
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Izquierda 3"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 28)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_C5D00BE4_DD09_E224_4193_1E7B3F21AC96",
       "image": {
        "x": 76.9,
        "class": "HotspotMapOverlayImage",
        "y": 415.15,
        "width": 40,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_5.png",
           "width": 40,
           "class": "ImageResourceLevel",
           "height": 40
          }
         ]
        },
        "height": 40
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 20,
        "x": 72.45,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_6_map.gif",
           "width": 10,
           "class": "ImageResourceLevel",
           "height": 10
          }
         ]
        },
        "offsetY": 0,
        "height": 20,
        "y": 208.05
       },
       "rollOverDisplay": true,
       "data": {
        "label": "Edwards-Hareus"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 25)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_CAE100A4_DD0B_BE24_41EB_507D59E649BA",
       "image": {
        "x": 72.45,
        "class": "HotspotMapOverlayImage",
        "y": 208.05,
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_6.png",
           "width": 20,
           "class": "ImageResourceLevel",
           "height": 20
          }
         ]
        },
        "height": 20
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 40,
        "x": 58.4,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_7_map.gif",
           "width": 20,
           "class": "ImageResourceLevel",
           "height": 20
          }
         ]
        },
        "offsetY": 0,
        "height": 40,
        "y": 118.6
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Esquina Atras"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 24)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_CB9F085C_DD0A_AE64_41AF_81B501144D5C",
       "image": {
        "x": 58.4,
        "class": "HotspotMapOverlayImage",
        "y": 118.6,
        "width": 40,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_7.png",
           "width": 40,
           "class": "ImageResourceLevel",
           "height": 40
          }
         ]
        },
        "height": 40
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 20,
        "x": 152.3,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_8_map.gif",
           "width": 10,
           "class": "ImageResourceLevel",
           "height": 10
          }
         ]
        },
        "offsetY": 0,
        "height": 20,
        "y": 126.95
       },
       "rollOverDisplay": true,
       "data": {
        "label": "Atras1"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 23)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_CABD30AB_DD0E_9E23_41E5_2606484DA696",
       "image": {
        "x": 152.3,
        "class": "HotspotMapOverlayImage",
        "y": 126.95,
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_8.png",
           "width": 20,
           "class": "ImageResourceLevel",
           "height": 20
          }
         ]
        },
        "height": 20
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 40,
        "x": 227.75,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_9_map.gif",
           "width": 20,
           "class": "ImageResourceLevel",
           "height": 20
          }
         ]
        },
        "offsetY": 0,
        "height": 40,
        "y": 118.55
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Atras2"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 22)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_C422196A_DD0E_6E2D_41E0_5F593066B4B9",
       "image": {
        "x": 227.75,
        "class": "HotspotMapOverlayImage",
        "y": 118.55,
        "width": 40,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_9.png",
           "width": 40,
           "class": "ImageResourceLevel",
           "height": 40
          }
         ]
        },
        "height": 40
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 20,
        "x": 283.95,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_10_map.gif",
           "width": 10,
           "class": "ImageResourceLevel",
           "height": 10
          }
         ]
        },
        "offsetY": 0,
        "height": 20,
        "y": 206.9
       },
       "rollOverDisplay": true,
       "data": {
        "label": "Plantas de tratamiento"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 21)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_C53D65EB_DD09_A62C_41B4_A4FE1383C9E0",
       "image": {
        "x": 283.95,
        "class": "HotspotMapOverlayImage",
        "y": 206.9,
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_10.png",
           "width": 20,
           "class": "ImageResourceLevel",
           "height": 20
          }
         ]
        },
        "height": 20
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 20,
        "x": 372.9,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_11_map.gif",
           "width": 10,
           "class": "ImageResourceLevel",
           "height": 10
          }
         ]
        },
        "offsetY": 0,
        "height": 20,
        "y": 291.95
       },
       "rollOverDisplay": true,
       "data": {
        "label": "Derecha 1"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 20)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_CA1A2975_DD0B_AE24_41D6_FDACEA0678CB",
       "image": {
        "x": 372.9,
        "class": "HotspotMapOverlayImage",
        "y": 291.95,
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_11.png",
           "width": 20,
           "class": "ImageResourceLevel",
           "height": 20
          }
         ]
        },
        "height": 20
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 40,
        "x": 419.1,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_12_map.gif",
           "width": 20,
           "class": "ImageResourceLevel",
           "height": 20
          }
         ]
        },
        "offsetY": 0,
        "height": 40,
        "y": 145.3
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Derecha Atras"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 19)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_CA99B622_DD0A_A5DD_41E3_37E965944C63",
       "image": {
        "x": 419.1,
        "class": "HotspotMapOverlayImage",
        "y": 145.3,
        "width": 40,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_12.png",
           "width": 40,
           "class": "ImageResourceLevel",
           "height": 40
          }
         ]
        },
        "height": 40
       }
      }
     ],
     "label": "Zona Franca",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6.png",
        "width": 500,
        "class": "ImageResourceLevel",
        "height": 485
       }
      ]
     },
     "width": 500,
     "initialZoomFactor": 1,
     "fieldOfViewOverlayRadiusScale": 0.24,
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "maximumZoomFactor": 1.2,
     "fieldOfViewOverlayInsideOpacity": 0.31,
     "height": 485
    },
    "x": 296.9,
    "angle": 44.34,
    "class": "PanoramaMapLocation",
    "y": 333.85
   }
  ],
  "vfov": 180,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_t.jpg",
  "id": "panorama_5F372E49_160C_6584_4186_1E0077946A37",
  "label": "2-Frente_edificio_6",
  "pitch": 0,
  "hfov": 360,
  "hfovMin": 80,
  "cardboardMenu": {
   "opacity": 0.4,
   "fontFamily": "Arial",
   "rollOverOpacity": 0.8,
   "children": [
    {
     "label": "Main Acces",
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "class": "MenuItem"
    },
    {
     "label": "Lobby",
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "class": "MenuItem"
    },
    {
     "label": "Restrooms",
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "class": "MenuItem"
    },
    {
     "label": "Main Floor",
     "click": "this.mainPlayList.set('selectedIndex', 3)",
     "class": "MenuItem"
    },
    {
     "label": "Dining Room",
     "click": "this.mainPlayList.set('selectedIndex', 4)",
     "class": "MenuItem"
    },
    {
     "label": "Conference Room",
     "click": "this.mainPlayList.set('selectedIndex', 5)",
     "class": "MenuItem"
    },
    {
     "label": "Empty Shell",
     "click": "this.mainPlayList.set('selectedIndex', 6)",
     "class": "MenuItem"
    },
    {
     "label": "Parking Garage",
     "click": "this.mainPlayList.set('selectedIndex', 7)",
     "class": "MenuItem"
    },
    {
     "label": "3_1",
     "click": "this.mainPlayList.set('selectedIndex', 8)",
     "class": "MenuItem"
    },
    {
     "label": "CC_Project_1",
     "click": "this.mainPlayList.set('selectedIndex', 9)",
     "class": "MenuItem"
    },
    {
     "label": "CC_Project_2",
     "click": "this.mainPlayList.set('selectedIndex', 10)",
     "class": "MenuItem"
    },
    {
     "label": "CC_Project_3",
     "click": "this.mainPlayList.set('selectedIndex', 11)",
     "class": "MenuItem"
    },
    {
     "label": "CC_Project_4",
     "click": "this.mainPlayList.set('selectedIndex', 12)",
     "class": "MenuItem"
    },
    {
     "label": "CC_Project_5",
     "click": "this.mainPlayList.set('selectedIndex', 13)",
     "class": "MenuItem"
    },
    {
     "label": "CC_Project_6",
     "click": "this.mainPlayList.set('selectedIndex', 14)",
     "class": "MenuItem"
    },
    {
     "label": "CC_Project_7",
     "click": "this.mainPlayList.set('selectedIndex', 15)",
     "class": "MenuItem"
    },
    {
     "label": "CC_Project_8",
     "click": "this.mainPlayList.set('selectedIndex', 16)",
     "class": "MenuItem"
    },
    {
     "label": "CC_Project_9",
     "click": "this.mainPlayList.set('selectedIndex', 17)",
     "class": "MenuItem"
    },
    {
     "label": "Cartago City",
     "click": "this.mainPlayList.set('selectedIndex', 18)",
     "class": "MenuItem"
    },
    {
     "label": "14 derecha_3",
     "click": "this.mainPlayList.set('selectedIndex', 19)",
     "class": "MenuItem"
    },
    {
     "label": "12-derecha_1",
     "click": "this.mainPlayList.set('selectedIndex', 20)",
     "class": "MenuItem"
    },
    {
     "label": "11-Cemtro_1",
     "click": "this.mainPlayList.set('selectedIndex', 21)",
     "class": "MenuItem"
    },
    {
     "label": "10-atras 3",
     "click": "this.mainPlayList.set('selectedIndex', 22)",
     "class": "MenuItem"
    },
    {
     "label": "9-atras2",
     "click": "this.mainPlayList.set('selectedIndex', 23)",
     "class": "MenuItem"
    },
    {
     "label": "7-Esquina Izquierda_atras_2",
     "click": "this.mainPlayList.set('selectedIndex', 24)",
     "class": "MenuItem"
    },
    {
     "label": "6-Izquierda_3",
     "click": "this.mainPlayList.set('selectedIndex', 25)",
     "class": "MenuItem"
    },
    {
     "label": "5-Esquina Izquierda_1",
     "click": "this.mainPlayList.set('selectedIndex', 26)",
     "class": "MenuItem"
    },
    {
     "label": "4-Izquierdo_2",
     "click": "this.mainPlayList.set('selectedIndex', 27)",
     "class": "MenuItem"
    },
    {
     "label": "3-Esquina izquierda",
     "click": "this.mainPlayList.set('selectedIndex', 28)",
     "class": "MenuItem"
    },
    {
     "label": "2-Frente CC_3",
     "click": "this.mainPlayList.set('selectedIndex', 29)",
     "class": "MenuItem"
    },
    {
     "label": "2-Frente_edificio_6",
     "click": "this.mainPlayList.set('selectedIndex', 30)",
     "class": "MenuItem"
    },
    {
     "label": "9",
     "click": "this.mainPlayList.set('selectedIndex', 31)",
     "class": "MenuItem"
    },
    {
     "label": "14",
     "click": "this.mainPlayList.set('selectedIndex', 32)",
     "class": "MenuItem"
    },
    {
     "label": "18",
     "click": "this.mainPlayList.set('selectedIndex', 33)",
     "class": "MenuItem"
    },
    {
     "label": "20",
     "click": "this.mainPlayList.set('selectedIndex', 34)",
     "class": "MenuItem"
    },
    {
     "label": "19",
     "click": "this.mainPlayList.set('selectedIndex', 35)",
     "class": "MenuItem"
    },
    {
     "label": "parking2",
     "click": "this.mainPlayList.set('selectedIndex', 36)",
     "class": "MenuItem"
    },
    {
     "label": "asensores",
     "click": "this.mainPlayList.set('selectedIndex', 37)",
     "class": "MenuItem"
    }
   ],
   "label": "Media",
   "id": "Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
   "class": "Menu",
   "rollOverFontColor": "#FFFFFF",
   "rollOverBackgroundColor": "#000000",
   "selectedBackgroundColor": "#202020",
   "fontColor": "#FFFFFF",
   "backgroundColor": "#404040",
   "selectedFontColor": "#FFFFFF"
  },
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_D3506D4B_DE61_DD60_41A9_79891BEB37F3); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.33,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_0_HS_0_0.png",
           "width": 140,
           "class": "ImageResourceLevel",
           "height": 140
          }
         ]
        },
        "pitch": -5.55,
        "yaw": 53.21
       }
      ],
      "id": "overlay_51EB4792_1634_2284_41B5_0C972AE8FCB9",
      "enabledInCardboard": true
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7, this.camera_D3230D4B_DE61_DD60_41E5_E5AB01168CB8); this.mainPlayList.set('selectedIndex', 17)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.03,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_0_HS_1_0.png",
           "width": 119,
           "class": "ImageResourceLevel",
           "height": 119
          }
         ]
        },
        "pitch": 2.19,
        "yaw": 103.06
       }
      ],
      "id": "overlay_51F0DF07_1634_638C_41B2_9A4E63809788",
      "enabledInCardboard": true
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1, this.camera_D3446D3C_DE61_DD20_41CD_81E5403E7E8E); this.mainPlayList.set('selectedIndex', 29)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.85,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_0_HS_2_0.png",
           "width": 118,
           "class": "ImageResourceLevel",
           "height": 119
          }
         ]
        },
        "pitch": -6.87,
        "yaw": -109.06
       }
      ],
      "id": "overlay_5E155A5E_1634_2DBC_41B1_FF60E5DE5478",
      "enabledInCardboard": true
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 20)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.9,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_0_HS_3_0.png",
           "width": 118,
           "class": "ImageResourceLevel",
           "height": 118
          }
         ]
        },
        "pitch": -1.63,
        "yaw": 2.03
       }
      ],
      "id": "overlay_594362D6_161C_228C_41AC_CB29F9722029",
      "enabledInCardboard": true
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 21)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.88,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_0_HS_4_0.png",
           "width": 117,
           "class": "ImageResourceLevel",
           "height": 118
          }
         ]
        },
        "pitch": -3.91,
        "yaw": -47.37
       }
      ],
      "id": "overlay_4E7D4D1E_160C_67BC_418A_DF582ABC0F4E",
      "enabledInCardboard": true
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "image",
        "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.13,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_0_HS_5_0.png",
           "width": 118,
           "class": "ImageResourceLevel",
           "height": 118
          }
         ]
        },
        "pitch": 26.59,
        "yaw": -83.56
       }
      ],
      "id": "overlay_40C9F966_1634_EF8C_41A2_3D0C21E87BB3"
     },
     {
      "bleaching": 0.7,
      "yaw": 82.16,
      "class": "LensFlarePanoramaOverlay",
      "pitch": 58.65,
      "id": "overlay_39D2CB6A_37C3_AC40_41A9_BE5EE8895F34",
      "bleachingDistance": 0.4
     }
    ],
    "thumbnailUrl": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_hq.jpeg",
       "width": 5376,
       "tags": [
        "oculusgo",
        "ipadpro"
       ],
       "class": "ImageResourceLevel",
       "height": 2688
      },
      {
       "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel",
       "height": 1608
      }
     ]
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "adjacentPanoramas": [
   {
    "backwardYaw": -40.82,
    "panorama": {
     "mapLocations": [
      {
       "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
       "x": 282.7,
       "angle": 136.49,
       "class": "PanoramaMapLocation",
       "y": 306.8
      }
     ],
     "vfov": 180,
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_t.jpg",
     "id": "panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1",
     "label": "2-Frente CC_3",
     "pitch": 0,
     "hfov": 360,
     "hfovMin": 80,
     "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
     "frames": [
      {
       "overlays": [
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15, this.camera_D237BC61_DE62_2320_41B5_ED8DE093D610); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.87,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_0_0.png",
              "width": 118,
              "class": "ImageResourceLevel",
              "height": 119
             }
            ]
           },
           "pitch": -4.81,
           "yaw": 20.72
          }
         ],
         "id": "overlay_386F356F_1674_679C_41AB_45D7D10D951D",
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "image",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_14DC7652_1AFD_7168_41B0_2871B449D01E, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, true) } else { this.showPopupMedia(this.window_D5A5F731_DE62_2D21_41EA_A008C140FFFA, this.video_14581B06_1AFD_10E9_41B7_EBE2377910B5, this.PlayList_D2BAAB57_DE62_2560_4197_8530CCB4BC6B, '95%', '95%', true, true) }",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.69,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_1_0.png",
              "width": 118,
              "class": "ImageResourceLevel",
              "height": 119
             }
            ]
           },
           "pitch": -13.45,
           "yaw": -109.65
          }
         ],
         "id": "overlay_39BB0967_1674_EF8C_4188_3E87C5B6962A",
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_3D79D3BF_1674_22FC_4196_7C67831E524C, this.camera_D222EC42_DE62_2360_41D2_B88AD0409E8F); this.mainPlayList.set('selectedIndex', 26)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.02,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_2_0.png",
              "width": 120,
              "class": "ImageResourceLevel",
              "height": 120
             }
            ]
           },
           "pitch": -2.99,
           "yaw": 130.67
          }
         ],
         "id": "overlay_38EA0EC1_1675_E284_41AE_F7FC482A7B4D",
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_5F372E49_160C_6584_4186_1E0077946A37, this.camera_D2289C61_DE62_2320_41C1_69669820906A); this.mainPlayList.set('selectedIndex', 30)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.84,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_3_0.png",
              "width": 118,
              "class": "ImageResourceLevel",
              "height": 119
             }
            ]
           },
           "pitch": -7.23,
           "yaw": -40.82
          }
         ],
         "id": "overlay_2B56ABDE_1613_E2BC_41AF_E2CC7D148DC8",
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_474FEAEC_160C_229C_41B5_A893F886FCB3, this.camera_D226BC51_DE62_2360_41E2_415A715AACF0); this.mainPlayList.set('selectedIndex', 21)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.85,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_5_0.png",
              "width": 118,
              "class": "ImageResourceLevel",
              "height": 119
             }
            ]
           },
           "pitch": -6.3,
           "yaw": -123.06
          }
         ],
         "id": "overlay_299B8510_1614_6784_41AB_976344A899D8",
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.showPopupPanoramaOverlay(this.popup_94B2E7EE_160C_E29C_41AF_8F6F1B527001, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, this.ImageResource_9C57885A_1634_6D84_41A1_9B25A7190911, null, null, null, null, false)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.14,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_6_0.png",
              "width": 122,
              "class": "ImageResourceLevel",
              "height": 104
             }
            ]
           },
           "pitch": 8.92,
           "yaw": -172.08
          }
         ],
         "id": "overlay_5860B00C_1614_3D9C_4191_7FC67CA38654",
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 10.24,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_7_0.png",
              "width": 170,
              "class": "ImageResourceLevel",
              "height": 169
             }
            ]
           },
           "pitch": 26.34,
           "yaw": 114.77
          }
         ],
         "id": "overlay_4035AF50_163C_2384_41A2_0F3A3A6E8E9E"
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56, this.camera_D23D8C71_DE62_2321_41DD_C6790FEE3144); this.mainPlayList.set('selectedIndex', 20)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.9,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_8_0.png",
              "width": 118,
              "class": "ImageResourceLevel",
              "height": 119
             }
            ]
           },
           "pitch": -1.94,
           "yaw": -79.36
          }
         ],
         "id": "overlay_6FCAB64F_1614_659C_41B3_E272D6EFCE0B",
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.showPopupPanoramaOverlay(this.popup_940D3F6C_160D_E39C_4182_27B26B33C63C, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, this.ImageResource_9C5AF85C_1634_6DBC_41A3_32718963AC15, null, null, null, null, false)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.23,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_9_0.png",
              "width": 123,
              "class": "ImageResourceLevel",
              "height": 104
             }
            ]
           },
           "pitch": -1.24,
           "yaw": 0.97
          }
         ],
         "id": "overlay_97F366C7_160C_228C_4189_0D54D95674F4",
         "enabledInCardboard": true
        },
        {
         "popupMaxHeight": "95%",
         "hideDuration": 500,
         "yaw": 0.97,
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "rotationY": 0,
         "hideEasing": "cubic_out",
         "rotationX": 0,
         "rotationZ": 0,
         "hfov": 8.23,
         "id": "popup_940D3F6C_160D_E39C_4182_27B26B33C63C",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "url": "media/popup_940D3F6C_160D_E39C_4182_27B26B33C63C_0_1.jpg",
            "width": 1024,
            "class": "ImageResourceLevel",
            "height": 682
           }
          ]
         },
         "pitch": -1.24,
         "popupDistance": 100,
         "popupMaxWidth": "95%",
         "showEasing": "cubic_in"
        },
        {
         "popupMaxHeight": "95%",
         "hideDuration": 500,
         "yaw": -172.08,
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "rotationY": 0,
         "hideEasing": "cubic_out",
         "rotationX": 0,
         "rotationZ": 0,
         "hfov": 8.14,
         "id": "popup_94B2E7EE_160C_E29C_41AF_8F6F1B527001",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "url": "media/popup_94B2E7EE_160C_E29C_41AF_8F6F1B527001_0_1.jpg",
            "width": 1024,
            "class": "ImageResourceLevel",
            "height": 576
           }
          ]
         },
         "pitch": 8.92,
         "popupDistance": 100,
         "popupMaxWidth": "95%",
         "showEasing": "cubic_in"
        },
        {
         "popupMaxHeight": "95%",
         "hideDuration": 500,
         "yaw": -109.65,
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "rotationY": 0,
         "hideEasing": "cubic_out",
         "rotationX": 0,
         "autoplay": true,
         "hfov": 7.69,
         "loop": false,
         "id": "popup_14DC7652_1AFD_7168_41B0_2871B449D01E",
         "pitch": -13.45,
         "rotationZ": 0,
         "popupDistance": 100,
         "popupMaxWidth": "95%",
         "showEasing": "cubic_in",
         "video": {
          "width": 1280,
          "height": 720,
          "class": "VideoResource",
          "mp4Url": "media/video_14581B06_1AFD_10E9_41B7_EBE2377910B5.mp4"
         }
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.mainPlayList.set('selectedIndex', 17)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.96,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_10_0.png",
              "width": 119,
              "class": "ImageResourceLevel",
              "height": 117
             }
            ]
           },
           "pitch": 1.99,
           "yaw": -16.66
          }
         ],
         "id": "overlay_15E8F9D5_1B2D_360E_41B4_C826F748F6D7",
         "enabledInCardboard": true
        },
        {
         "bleaching": 0.7,
         "yaw": -19.83,
         "class": "LensFlarePanoramaOverlay",
         "pitch": 63.18,
         "id": "overlay_39D82917_37C3_ADC0_41B1_848C5093B06F",
         "bleachingDistance": 0.4
        }
       ],
       "thumbnailUrl": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_hq.jpeg",
          "width": 5376,
          "tags": [
           "oculusgo",
           "ipadpro"
          ],
          "class": "ImageResourceLevel",
          "height": 2688
         },
         {
          "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1.jpeg",
          "width": 3217,
          "class": "ImageResourceLevel",
          "height": 1608
         }
        ]
       }
      }
     ],
     "hfovMax": 120,
     "partial": false,
     "adjacentPanoramas": [
      {
       "backwardYaw": 31.68,
       "panorama": {
        "mapLocations": [
         {
          "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
          "x": 89.75,
          "angle": 54.31,
          "class": "PanoramaMapLocation",
          "y": 307.7
         }
        ],
        "vfov": 180,
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_t.jpg",
        "id": "panorama_3D79D3BF_1674_22FC_4196_7C67831E524C",
        "label": "5-Esquina Izquierda_1",
        "pitch": 0,
        "hfov": 360,
        "hfovMin": 80,
        "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
        "frames": [
         {
          "overlays": [
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1, this.camera_D12FBF3F_DE61_DD20_41E4_25318A4CC7D3); this.mainPlayList.set('selectedIndex', 29)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.89,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_0_0.png",
                 "width": 117,
                 "class": "ImageResourceLevel",
                 "height": 118
                }
               ]
              },
              "pitch": -3.01,
              "yaw": 31.68
             }
            ],
            "id": "overlay_2757F538_167C_2784_41A3_A596A7C83C5C",
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_3D7997D7_1674_228C_41AA_D403F76C06DC, this.camera_D138AF4F_DE61_DD60_41D4_E807B9903D81); this.mainPlayList.set('selectedIndex', 27)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.87,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_1_0.png",
                 "width": 117,
                 "class": "ImageResourceLevel",
                 "height": 118
                }
               ]
              },
              "pitch": -5.49,
              "yaw": 119.09
             }
            ],
            "id": "overlay_24D0F661_167C_2584_4190_B60E876415EB",
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_35E83422_1617_E584_4186_08583C185C08, this.camera_D1099F60_DE61_DD20_41CA_2A349B26E286); this.mainPlayList.set('selectedIndex', 25)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.88,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_2_0.png",
                 "width": 117,
                 "class": "ImageResourceLevel",
                 "height": 118
                }
               ]
              },
              "pitch": -4.21,
              "yaw": -62.51
             }
            ],
            "id": "overlay_2447874C_167C_239C_4189_A71E4FED3221",
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.showPopupPanoramaOverlay(this.popup_4F3F1249_1634_DD84_41B1_1B09E44C11EB, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, null, null, null, null, null, false)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.98,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_3_0.png",
                 "width": 123,
                 "class": "ImageResourceLevel",
                 "height": 104
                }
               ]
              },
              "pitch": 14.26,
              "yaw": 1.2
             }
            ],
            "id": "overlay_40372E91_163C_2284_41A6_C3CB81F3601B",
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.showPopupPanoramaOverlay(this.popup_4AC282AC_160C_E29C_41A5_60234192F5B3, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, this.ImageResource_69C4237A_160C_2384_41A8_784DA62FB6ED, null, null, null, null, false)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.11,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_4_0.png",
                 "width": 123,
                 "class": "ImageResourceLevel",
                 "height": 104
                }
               ]
              },
              "pitch": 10,
              "yaw": -21.34
             }
            ],
            "id": "overlay_41596D4A_163C_6784_4193_56C0B893F942",
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.showPopupPanoramaOverlay(this.popup_72B251D5_160C_5E8C_418F_F3A0A38135F3, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, null, null, null, null, null, false)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.14,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_5_0.png",
                 "width": 123,
                 "class": "ImageResourceLevel",
                 "height": 104
                }
               ]
              },
              "pitch": 8.82,
              "yaw": -33.18
             }
            ],
            "id": "overlay_4E5FC6EB_163C_2284_417B_761BA55450F2",
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.showPopupPanoramaOverlay(this.popup_4AF7186F_1614_2D9C_419D_7F5145DBB3BC, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, null, null, null, null, null, false)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.18,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_6_0.png",
                 "width": 123,
                 "class": "ImageResourceLevel",
                 "height": 104
                }
               ]
              },
              "pitch": 6.96,
              "yaw": -43.89
             }
            ],
            "id": "overlay_4C3A859B_163F_E684_41A0_6D1D2079D309",
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.showPopupPanoramaOverlay(this.popup_4A0C3726_1614_238F_4172_E61A531742AA, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, this.ImageResource_69C3B37A_160C_2384_419C_79046B4034AF, null, null, null, null, false)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.2,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_7_0.png",
                 "width": 123,
                 "class": "ImageResourceLevel",
                 "height": 104
                }
               ]
              },
              "pitch": 5.62,
              "yaw": -172.76
             }
            ],
            "id": "overlay_4EB4E7FB_163C_6284_418E_63D196C15D47",
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.19,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_8_0.png",
                 "width": 118,
                 "class": "ImageResourceLevel",
                 "height": 118
                }
               ]
              },
              "pitch": 25.6,
              "yaw": 44.29
             }
            ],
            "id": "overlay_4EBE53C3_1634_2285_4168_9EB3D6A93FAC"
           },
           {
            "popupMaxHeight": "95%",
            "hideDuration": 500,
            "yaw": 1.2,
            "showDuration": 500,
            "class": "PopupPanoramaOverlay",
            "rotationY": 0,
            "hideEasing": "cubic_out",
            "rotationX": 0,
            "rotationZ": 0,
            "hfov": 7.98,
            "id": "popup_4F3F1249_1634_DD84_41B1_1B09E44C11EB",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "url": "media/popup_4F3F1249_1634_DD84_41B1_1B09E44C11EB_0_0.jpg",
               "width": 850,
               "class": "ImageResourceLevel",
               "height": 625
              },
              {
               "url": "media/popup_4F3F1249_1634_DD84_41B1_1B09E44C11EB_0_1.jpg",
               "width": 511,
               "class": "ImageResourceLevel",
               "height": 376
              }
             ]
            },
            "pitch": 14.26,
            "popupDistance": 100,
            "popupMaxWidth": "95%",
            "showEasing": "cubic_in"
           },
           {
            "popupMaxHeight": "95%",
            "hideDuration": 500,
            "yaw": -21.34,
            "showDuration": 500,
            "class": "PopupPanoramaOverlay",
            "rotationY": 0,
            "hideEasing": "cubic_out",
            "rotationX": 0,
            "rotationZ": 0,
            "hfov": 8.11,
            "id": "popup_4AC282AC_160C_E29C_41A5_60234192F5B3",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "url": "media/popup_4AC282AC_160C_E29C_41A5_60234192F5B3_0_1.jpg",
               "width": 1023,
               "class": "ImageResourceLevel",
               "height": 721
              }
             ]
            },
            "pitch": 10,
            "popupDistance": 100,
            "popupMaxWidth": "95%",
            "showEasing": "cubic_in"
           },
           {
            "popupMaxHeight": "95%",
            "hideDuration": 500,
            "yaw": -33.18,
            "showDuration": 500,
            "class": "PopupPanoramaOverlay",
            "rotationY": 0,
            "hideEasing": "cubic_out",
            "rotationX": 0,
            "rotationZ": 0,
            "hfov": 8.14,
            "id": "popup_72B251D5_160C_5E8C_418F_F3A0A38135F3",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "url": "media/popup_72B251D5_160C_5E8C_418F_F3A0A38135F3_0_0.jpg",
               "width": 807,
               "class": "ImageResourceLevel",
               "height": 752
              },
              {
               "url": "media/popup_72B251D5_160C_5E8C_418F_F3A0A38135F3_0_1.jpg",
               "width": 512,
               "class": "ImageResourceLevel",
               "height": 477
              }
             ]
            },
            "pitch": 8.82,
            "popupDistance": 100,
            "popupMaxWidth": "95%",
            "showEasing": "cubic_in"
           },
           {
            "popupMaxHeight": "95%",
            "hideDuration": 500,
            "yaw": -43.89,
            "showDuration": 500,
            "class": "PopupPanoramaOverlay",
            "rotationY": 0,
            "hideEasing": "cubic_out",
            "rotationX": 0,
            "rotationZ": 0,
            "hfov": 8.18,
            "id": "popup_4AF7186F_1614_2D9C_419D_7F5145DBB3BC",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "url": "media/popup_4AF7186F_1614_2D9C_419D_7F5145DBB3BC_0_0.jpg",
               "width": 581,
               "class": "ImageResourceLevel",
               "height": 421
              },
              {
               "url": "media/popup_4AF7186F_1614_2D9C_419D_7F5145DBB3BC_0_1.jpg",
               "width": 512,
               "class": "ImageResourceLevel",
               "height": 371
              }
             ]
            },
            "pitch": 6.96,
            "popupDistance": 100,
            "popupMaxWidth": "95%",
            "showEasing": "cubic_in"
           },
           {
            "popupMaxHeight": "95%",
            "hideDuration": 500,
            "yaw": -172.76,
            "showDuration": 500,
            "class": "PopupPanoramaOverlay",
            "rotationY": 0,
            "hideEasing": "cubic_out",
            "rotationX": 0,
            "rotationZ": 0,
            "hfov": 8.2,
            "id": "popup_4A0C3726_1614_238F_4172_E61A531742AA",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "url": "media/popup_4A0C3726_1614_238F_4172_E61A531742AA_0_1.jpg",
               "width": 1024,
               "class": "ImageResourceLevel",
               "height": 682
              }
             ]
            },
            "pitch": 5.62,
            "popupDistance": 100,
            "popupMaxWidth": "95%",
            "showEasing": "cubic_in"
           },
           {
            "bleaching": 0.7,
            "yaw": 86.32,
            "class": "LensFlarePanoramaOverlay",
            "pitch": 51.47,
            "id": "overlay_39D23F00_37C3_A5C0_41C5_0716DB8457E3",
            "bleachingDistance": 0.4
           }
          ],
          "thumbnailUrl": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_hq.jpeg",
             "width": 5376,
             "tags": [
              "oculusgo",
              "ipadpro"
             ],
             "class": "ImageResourceLevel",
             "height": 2688
            },
            {
             "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C.jpeg",
             "width": 3217,
             "class": "ImageResourceLevel",
             "height": 1608
            }
           ]
          }
         }
        ],
        "hfovMax": 120,
        "partial": false,
        "adjacentPanoramas": [
         {
          "backwardYaw": 130.67,
          "panorama": "this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1",
          "yaw": 31.68,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "backwardYaw": -50.06,
          "panorama": {
           "mapLocations": [
            {
             "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
             "x": 92.35,
             "angle": 43.65,
             "class": "PanoramaMapLocation",
             "y": 370.9
            }
           ],
           "vfov": 180,
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_3D7997D7_1674_228C_41AA_D403F76C06DC_t.jpg",
           "id": "panorama_3D7997D7_1674_228C_41AA_D403F76C06DC",
           "label": "4-Izquierdo_2",
           "pitch": 0,
           "hfov": 360,
           "hfovMin": 80,
           "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
           "frames": [
            {
             "overlays": [
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_3D79DBC0_1674_E284_418F_8382C3D75914, this.camera_D3E3FD8A_DE61_DDE0_41E0_6D5E844F25D9); this.mainPlayList.set('selectedIndex', 28)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.9,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_3D7997D7_1674_228C_41AA_D403F76C06DC_0_HS_0_0.png",
                    "width": 118,
                    "class": "ImageResourceLevel",
                    "height": 118
                   }
                  ]
                 },
                 "pitch": -0.09,
                 "yaw": 129.44
                }
               ],
               "id": "overlay_261051F1_167D_DE84_41AD_4433EE752517",
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_3D79D3BF_1674_22FC_4196_7C67831E524C, this.camera_D3171D7A_DE61_DD20_41E3_C568CC913C3B); this.mainPlayList.set('selectedIndex', 26)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.73,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_3D7997D7_1674_228C_41AA_D403F76C06DC_0_HS_1_0.png",
                    "width": 118,
                    "class": "ImageResourceLevel",
                    "height": 118
                   }
                  ]
                 },
                 "pitch": -11.95,
                 "yaw": -50.06
                }
               ],
               "id": "overlay_2494017B_167C_5F84_418F_2EBE67C00F50",
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.56,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_3D7997D7_1674_228C_41AA_D403F76C06DC_0_HS_2_0.png",
                    "width": 118,
                    "class": "ImageResourceLevel",
                    "height": 118
                   }
                  ]
                 },
                 "pitch": 18.39,
                 "yaw": 7.53
                }
               ],
               "id": "overlay_4037BDB8_163C_2684_419C_4B67846338E3"
              },
              {
               "bleaching": 0.7,
               "yaw": 85.94,
               "class": "LensFlarePanoramaOverlay",
               "pitch": 51.09,
               "id": "overlay_39D47865_37C3_EC40_418D_902B267BFD0B",
               "bleachingDistance": 0.4
              }
             ],
             "thumbnailUrl": "media/panorama_3D7997D7_1674_228C_41AA_D403F76C06DC_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_3D7997D7_1674_228C_41AA_D403F76C06DC_hq.jpeg",
                "width": 5376,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "class": "ImageResourceLevel",
                "height": 2688
               },
               {
                "url": "media/panorama_3D7997D7_1674_228C_41AA_D403F76C06DC.jpeg",
                "width": 3217,
                "class": "ImageResourceLevel",
                "height": 1608
               }
              ]
             }
            }
           ],
           "hfovMax": 120,
           "partial": false,
           "adjacentPanoramas": [
            {
             "backwardYaw": 119.09,
             "panorama": "this.panorama_3D79D3BF_1674_22FC_4196_7C67831E524C",
             "yaw": -50.06,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": 135.39,
             "panorama": {
              "mapLocations": [
               {
                "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                "x": 96.9,
                "angle": -110.47,
                "class": "PanoramaMapLocation",
                "y": 435.15
               }
              ],
              "vfov": 180,
              "class": "Panorama",
              "thumbnailUrl": "media/panorama_3D79DBC0_1674_E284_418F_8382C3D75914_t.jpg",
              "id": "panorama_3D79DBC0_1674_E284_418F_8382C3D75914",
              "label": "3-Esquina izquierda",
              "pitch": 0,
              "hfov": 360,
              "hfovMin": 80,
              "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
              "frames": [
               {
                "overlays": [
                 {
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_3D7997D7_1674_228C_41AA_D403F76C06DC, this.camera_D2C6304A_DE61_E360_41E3_9FD912765B96); this.mainPlayList.set('selectedIndex', 27)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.82,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_3D79DBC0_1674_E284_418F_8382C3D75914_0_HS_0_0.png",
                       "width": 117,
                       "class": "ImageResourceLevel",
                       "height": 118
                      }
                     ]
                    },
                    "pitch": -8.43,
                    "yaw": 135.39
                   }
                  ],
                  "id": "overlay_2604F7BF_167C_22FC_4193_617054DB2FCA",
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "image",
                    "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.09,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_3D79DBC0_1674_E284_418F_8382C3D75914_0_HS_1_0.png",
                       "width": 118,
                       "class": "ImageResourceLevel",
                       "height": 117
                      }
                     ]
                    },
                    "pitch": 27.14,
                    "yaw": 164.68
                   }
                  ],
                  "id": "overlay_40316135_163D_DF8C_41A9_4D9D3925AEC7"
                 },
                 {
                  "bleaching": 0.7,
                  "yaw": -84.05,
                  "class": "LensFlarePanoramaOverlay",
                  "pitch": 42.78,
                  "id": "overlay_39CA657B_37C3_E440_41C7_9AF4D5A18AFA",
                  "bleachingDistance": 0.4
                 }
                ],
                "thumbnailUrl": "media/panorama_3D79DBC0_1674_E284_418F_8382C3D75914_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_3D79DBC0_1674_E284_418F_8382C3D75914_hq.jpeg",
                   "width": 5376,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ],
                   "class": "ImageResourceLevel",
                   "height": 2688
                  },
                  {
                   "url": "media/panorama_3D79DBC0_1674_E284_418F_8382C3D75914.jpeg",
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "height": 1608
                  }
                 ]
                }
               }
              ],
              "hfovMax": 120,
              "partial": false,
              "adjacentPanoramas": [
               {
                "backwardYaw": 129.44,
                "panorama": "this.panorama_3D7997D7_1674_228C_41AA_D403F76C06DC",
                "yaw": 135.39,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ]
             },
             "yaw": 129.44,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ]
          },
          "yaw": 119.09,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "backwardYaw": -148.94,
          "panorama": {
           "mapLocations": [
            {
             "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
             "x": 82.45,
             "angle": -31.01,
             "class": "PanoramaMapLocation",
             "y": 218.05
            }
           ],
           "vfov": 180,
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_35E83422_1617_E584_4186_08583C185C08_t.jpg",
           "id": "panorama_35E83422_1617_E584_4186_08583C185C08",
           "label": "6-Izquierda_3",
           "pitch": 0,
           "hfov": 360,
           "hfovMin": 80,
           "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
           "frames": [
            {
             "overlays": [
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_3D795AB8_1674_6284_41B2_996F167C34AA, this.camera_D0978EF1_DE61_DF20_41D6_B0D5D07F595D); this.mainPlayList.set('selectedIndex', 24)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.83,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_35E83422_1617_E584_4186_08583C185C08_0_HS_0_0.png",
                    "width": 118,
                    "class": "ImageResourceLevel",
                    "height": 118
                   }
                  ]
                 },
                 "pitch": -7.62,
                 "yaw": 32.75
                }
               ],
               "id": "overlay_35E03B27_1614_238C_41A5_92F66155D17A",
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_3D79D3BF_1674_22FC_4196_7C67831E524C, this.camera_D160CF01_DE61_DEE0_41C3_972B968F8F9B); this.mainPlayList.set('selectedIndex', 26)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.89,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_35E83422_1617_E584_4186_08583C185C08_0_HS_1_0.png",
                    "width": 118,
                    "class": "ImageResourceLevel",
                    "height": 118
                   }
                  ]
                 },
                 "pitch": -3.12,
                 "yaw": -148.94
                }
               ],
               "id": "overlay_32E6ECA3_1614_6684_41AE_CC855598CE63",
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 9.66,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_35E83422_1617_E584_4186_08583C185C08_0_HS_2_0.png",
                    "width": 170,
                    "class": "ImageResourceLevel",
                    "height": 169
                   }
                  ]
                 },
                 "pitch": 32.27,
                 "yaw": 172.33
                }
               ],
               "id": "overlay_4034DA81_163C_6284_41B0_6084DC4BB113"
              },
              {
               "bleaching": 0.7,
               "yaw": 170.18,
               "class": "LensFlarePanoramaOverlay",
               "pitch": 61.29,
               "id": "overlay_39D734D3_37C3_A440_41B4_6F4CA957785E",
               "bleachingDistance": 0.4
              }
             ],
             "thumbnailUrl": "media/panorama_35E83422_1617_E584_4186_08583C185C08_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_35E83422_1617_E584_4186_08583C185C08_hq.jpeg",
                "width": 5376,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "class": "ImageResourceLevel",
                "height": 2688
               },
               {
                "url": "media/panorama_35E83422_1617_E584_4186_08583C185C08.jpeg",
                "width": 3217,
                "class": "ImageResourceLevel",
                "height": 1608
               }
              ]
             }
            }
           ],
           "hfovMax": 120,
           "partial": false,
           "adjacentPanoramas": [
            {
             "backwardYaw": -160.71,
             "panorama": {
              "mapLocations": [
               {
                "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                "x": 78.4,
                "angle": 346.8,
                "class": "PanoramaMapLocation",
                "y": 138.6
               }
              ],
              "vfov": 180,
              "class": "Panorama",
              "thumbnailUrl": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_t.jpg",
              "id": "panorama_3D795AB8_1674_6284_41B2_996F167C34AA",
              "label": "7-Esquina Izquierda_atras_2",
              "pitch": 0,
              "hfov": 360,
              "hfovMin": 80,
              "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
              "frames": [
               {
                "overlays": [
                 {
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_3D79567C_1674_627C_41A0_54E172548A16, this.camera_D2E6ACA0_DE62_23DF_41B9_71FD1627CE9C); this.mainPlayList.set('selectedIndex', 23)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.85,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_0_HS_0_0.png",
                       "width": 117,
                       "class": "ImageResourceLevel",
                       "height": 118
                      }
                     ]
                    },
                    "pitch": -6.41,
                    "yaw": 113.6
                   }
                  ],
                  "id": "overlay_25390383_167C_6284_41B1_AF3FF6CEB78D",
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_35E83422_1617_E584_4186_08583C185C08, this.camera_D218FC90_DE62_23E0_41C3_6A435FC77598); this.mainPlayList.set('selectedIndex', 25)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.88,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_0_HS_1_0.png",
                       "width": 117,
                       "class": "ImageResourceLevel",
                       "height": 118
                      }
                     ]
                    },
                    "pitch": -3.9,
                    "yaw": -160.71
                   }
                  ],
                  "id": "overlay_2074083D_167C_6DFC_41AB_875BA2A40641",
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "image",
                    "click": "this.showPopupPanoramaOverlay(this.popup_4B7F179F_4511_AA24_41C8_4D4C956B0736, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, this.ImageResource_4AF68F62_4510_BA1D_4190_FDDC2A486BCE, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.21,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_0_HS_2_0.png",
                       "width": 122,
                       "class": "ImageResourceLevel",
                       "height": 103
                      }
                     ]
                    },
                    "pitch": -4.31,
                    "yaw": -101.83
                   }
                  ],
                  "id": "overlay_4006720B_163C_5D84_4184_2BB8C097FC47",
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "image",
                    "click": "this.showPopupPanoramaOverlay(this.popup_4AC31A49_1614_6D84_41A8_70E2088E8A0A, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, this.ImageResource_69DDF38B_160C_2284_41B3_8E5E6CAD0985, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.06,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_0_HS_3_0.png",
                       "width": 122,
                       "class": "ImageResourceLevel",
                       "height": 103
                      }
                     ]
                    },
                    "pitch": 11.77,
                    "yaw": 164.95
                   }
                  ],
                  "id": "overlay_4ED70D3D_163C_27FC_41B5_9BAF8B91B9D0",
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "image",
                    "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.83,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_0_HS_4_0.png",
                       "width": 118,
                       "class": "ImageResourceLevel",
                       "height": 117
                      }
                     ]
                    },
                    "pitch": 30.98,
                    "yaw": 175.62
                   }
                  ],
                  "id": "overlay_40167EA4_163D_E28C_41A6_BC6472463BC6"
                 },
                 {
                  "popupMaxHeight": "95%",
                  "hideDuration": 500,
                  "yaw": 164.95,
                  "showDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "rotationY": 0,
                  "hideEasing": "cubic_out",
                  "rotationX": 0,
                  "rotationZ": 0,
                  "hfov": 8.06,
                  "id": "popup_4AC31A49_1614_6D84_41A8_70E2088E8A0A",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "url": "media/popup_4AC31A49_1614_6D84_41A8_70E2088E8A0A_0_2.jpg",
                     "width": 1023,
                     "class": "ImageResourceLevel",
                     "height": 682
                    }
                   ]
                  },
                  "pitch": 11.77,
                  "popupDistance": 100,
                  "popupMaxWidth": "95%",
                  "showEasing": "cubic_in"
                 },
                 {
                  "bleaching": 0.7,
                  "yaw": 161.11,
                  "class": "LensFlarePanoramaOverlay",
                  "pitch": 51.09,
                  "id": "overlay_39C964A8_37C3_A4CF_41BF_69267FCD914E",
                  "bleachingDistance": 0.4
                 },
                 {
                  "popupMaxHeight": "95%",
                  "hideDuration": 500,
                  "yaw": -101.83,
                  "showDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "rotationY": 0,
                  "hideEasing": "cubic_out",
                  "rotationX": 0,
                  "rotationZ": 0,
                  "hfov": 8.21,
                  "id": "popup_4B7F179F_4511_AA24_41C8_4D4C956B0736",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "url": "media/popup_4B7F179F_4511_AA24_41C8_4D4C956B0736_0_1.jpg",
                     "width": 1024,
                     "class": "ImageResourceLevel",
                     "height": 573
                    }
                   ]
                  },
                  "pitch": -4.31,
                  "popupDistance": 100,
                  "popupMaxWidth": "95%",
                  "showEasing": "cubic_in"
                 }
                ],
                "thumbnailUrl": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_hq.jpeg",
                   "width": 5376,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ],
                   "class": "ImageResourceLevel",
                   "height": 2688
                  },
                  {
                   "url": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA.jpeg",
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "height": 1608
                  }
                 ]
                }
               }
              ],
              "hfovMax": 120,
              "partial": false,
              "adjacentPanoramas": [
               {
                "backwardYaw": 32.75,
                "panorama": "this.panorama_35E83422_1617_E584_4186_08583C185C08",
                "yaw": -160.71,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "backwardYaw": -151.94,
                "panorama": {
                 "mapLocations": [
                  {
                   "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                   "x": 162.3,
                   "angle": 79.57,
                   "class": "PanoramaMapLocation",
                   "y": 136.95
                  }
                 ],
                 "vfov": 180,
                 "class": "Panorama",
                 "thumbnailUrl": "media/panorama_3D79567C_1674_627C_41A0_54E172548A16_t.jpg",
                 "id": "panorama_3D79567C_1674_627C_41A0_54E172548A16",
                 "label": "9-atras2",
                 "pitch": 0,
                 "hfov": 360,
                 "hfovMin": 80,
                 "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
                 "frames": [
                  {
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_3D795AB8_1674_6284_41B2_996F167C34AA, this.camera_D28CE099_DE61_E3E1_41E3_3FDFD12A1FA9); this.mainPlayList.set('selectedIndex', 24)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.78,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_3D79567C_1674_627C_41A0_54E172548A16_0_HS_0_0.png",
                          "width": 118,
                          "class": "ImageResourceLevel",
                          "height": 118
                         }
                        ]
                       },
                       "pitch": -9.91,
                       "yaw": -151.94
                      }
                     ],
                     "id": "overlay_2599046B_1674_2584_41AE_134F6F970C38",
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF, this.camera_D29BF0A8_DE61_E320_41AB_1647CFDB8F8F); this.mainPlayList.set('selectedIndex', 22)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.88,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_3D79567C_1674_627C_41A0_54E172548A16_0_HS_1_0.png",
                          "width": 118,
                          "class": "ImageResourceLevel",
                          "height": 118
                         }
                        ]
                       },
                       "pitch": -3.96,
                       "yaw": -7.8
                      }
                     ],
                     "id": "overlay_239E9F13_1674_E384_41B1_3CB1B3553A5C",
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "image",
                       "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.47,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_3D79567C_1674_627C_41A0_54E172548A16_0_HS_2_0.png",
                          "width": 119,
                          "class": "ImageResourceLevel",
                          "height": 118
                         }
                        ]
                       },
                       "pitch": 20.44,
                       "yaw": 101.05
                      }
                     ],
                     "id": "overlay_4006DCE8_163C_6684_41B4_AE76AF064B1D"
                    },
                    {
                     "bleaching": 0.7,
                     "yaw": 62.14,
                     "class": "LensFlarePanoramaOverlay",
                     "pitch": 57.89,
                     "id": "overlay_39D4DAA8_37C3_6CCF_41C9_8498C94239EB",
                     "bleachingDistance": 0.4
                    }
                   ],
                   "thumbnailUrl": "media/panorama_3D79567C_1674_627C_41A0_54E172548A16_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_3D79567C_1674_627C_41A0_54E172548A16_hq.jpeg",
                      "width": 5376,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ],
                      "class": "ImageResourceLevel",
                      "height": 2688
                     },
                     {
                      "url": "media/panorama_3D79567C_1674_627C_41A0_54E172548A16.jpeg",
                      "width": 3217,
                      "class": "ImageResourceLevel",
                      "height": 1608
                     }
                    ]
                   }
                  }
                 ],
                 "hfovMax": 120,
                 "partial": false,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": 113.6,
                   "panorama": "this.panorama_3D795AB8_1674_6284_41B2_996F167C34AA",
                   "yaw": -151.94,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "backwardYaw": 156.41,
                   "panorama": {
                    "mapLocations": [
                     {
                      "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                      "x": 247.75,
                      "angle": 83.78,
                      "class": "PanoramaMapLocation",
                      "y": 138.55
                     }
                    ],
                    "vfov": 180,
                    "class": "Panorama",
                    "thumbnailUrl": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_t.jpg",
                    "id": "panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF",
                    "label": "10-atras 3",
                    "pitch": 0,
                    "hfov": 360,
                    "hfovMin": 80,
                    "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
                    "frames": [
                     {
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "maps": [],
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_3D79567C_1674_627C_41A0_54E172548A16, this.camera_D2F9ECAF_DE62_2320_41B1_824E6D14198A); this.mainPlayList.set('selectedIndex', 23)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.88,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_0_HS_0_0.png",
                             "width": 117,
                             "class": "ImageResourceLevel",
                             "height": 119
                            }
                           ]
                          },
                          "pitch": -4.63,
                          "yaw": 156.41
                         }
                        ],
                        "id": "overlay_22BBB7ED_1674_229C_41B4_D76F4986B173",
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "maps": [],
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_474FEAEC_160C_229C_41B5_A893F886FCB3, this.camera_D2EC0CA0_DE62_23DF_41E2_46C616A546D5); this.mainPlayList.set('selectedIndex', 21)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.89,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_0_HS_1_0.png",
                             "width": 117,
                             "class": "ImageResourceLevel",
                             "height": 119
                            }
                           ]
                          },
                          "pitch": -3.2,
                          "yaw": 63.17
                         }
                        ],
                        "id": "overlay_20A50E33_1674_6584_4198_4F0BDE9A7BBF",
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "maps": [],
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2, this.camera_D2C7ACBF_DE62_2320_41B8_AC65114883F4); this.mainPlayList.set('selectedIndex', 19)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.9,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_0_HS_2_0.png",
                             "width": 117,
                             "class": "ImageResourceLevel",
                             "height": 119
                            }
                           ]
                          },
                          "pitch": -1.93,
                          "yaw": 0.22
                         }
                        ],
                        "id": "overlay_2131C2D9_1674_6284_41B5_025E21A38F30",
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "maps": [],
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "image",
                          "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.28,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_0_HS_3_0.png",
                             "width": 119,
                             "class": "ImageResourceLevel",
                             "height": 117
                            }
                           ]
                          },
                          "pitch": 24.08,
                          "yaw": 107.42
                         }
                        ],
                        "id": "overlay_400529F0_163C_2E84_41B0_9650B5319C54"
                       },
                       {
                        "bleaching": 0.7,
                        "yaw": 47.41,
                        "class": "LensFlarePanoramaOverlay",
                        "pitch": 57.51,
                        "id": "overlay_39CF8087_37C3_7CC1_41C3_2BAB3D14C7EF",
                        "bleachingDistance": 0.4
                       }
                      ],
                      "thumbnailUrl": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_hq.jpeg",
                         "width": 5376,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ],
                         "class": "ImageResourceLevel",
                         "height": 2688
                        },
                        {
                         "url": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF.jpeg",
                         "width": 3217,
                         "class": "ImageResourceLevel",
                         "height": 1608
                        }
                       ]
                      }
                     }
                    ],
                    "hfovMax": 120,
                    "partial": false,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": -81.43,
                      "panorama": {
                       "mapLocations": [
                        {
                         "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                         "x": 293.95,
                         "angle": 422.74,
                         "class": "PanoramaMapLocation",
                         "y": 216.9
                        }
                       ],
                       "vfov": 180,
                       "class": "Panorama",
                       "thumbnailUrl": "media/panorama_474FEAEC_160C_229C_41B5_A893F886FCB3_t.jpg",
                       "id": "panorama_474FEAEC_160C_229C_41B5_A893F886FCB3",
                       "label": "11-Cemtro_1",
                       "pitch": 0,
                       "hfov": 360,
                       "hfovMin": 80,
                       "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
                       "frames": [
                        {
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF, this.camera_D3F9BD9A_DE61_DDE3_41DB_4E7785E5E305); this.mainPlayList.set('selectedIndex', 22)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 7.9,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_474FEAEC_160C_229C_41B5_A893F886FCB3_0_HS_0_0.png",
                                "width": 117,
                                "class": "ImageResourceLevel",
                                "height": 118
                               }
                              ]
                             },
                             "pitch": -2.08,
                             "yaw": -81.43
                            }
                           ],
                           "id": "overlay_47E57275_1634_7D8C_4185_8CEBB4823AB9",
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1, this.camera_D3EE8D8A_DE61_DDE0_41E4_67C265CE5D89); this.mainPlayList.set('selectedIndex', 29)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 7.87,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_474FEAEC_160C_229C_41B5_A893F886FCB3_0_HS_1_0.png",
                                "width": 117,
                                "class": "ImageResourceLevel",
                                "height": 118
                               }
                              ]
                             },
                             "pitch": -4.84,
                             "yaw": 125.92
                            }
                           ],
                           "id": "overlay_43FA09A5_1634_2E8C_4185_528ED1192B2D",
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "image",
                             "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 10.01,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_474FEAEC_160C_229C_41B5_A893F886FCB3_0_HS_2_0.png",
                                "width": 170,
                                "class": "ImageResourceLevel",
                                "height": 169
                               }
                              ]
                             },
                             "pitch": 28.8,
                             "yaw": -164.46
                            }
                           ],
                           "id": "overlay_403C2208_1633_FD84_4190_F21D840213AC"
                          },
                          {
                           "bleaching": 0.7,
                           "yaw": 78.38,
                           "class": "LensFlarePanoramaOverlay",
                           "pitch": 59.4,
                           "id": "overlay_39D53355_37C2_9C40_41C5_F3918D442D8E",
                           "bleachingDistance": 0.4
                          }
                         ],
                         "thumbnailUrl": "media/panorama_474FEAEC_160C_229C_41B5_A893F886FCB3_t.jpg",
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_474FEAEC_160C_229C_41B5_A893F886FCB3_hq.jpeg",
                            "width": 5376,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ],
                            "class": "ImageResourceLevel",
                            "height": 2688
                           },
                           {
                            "url": "media/panorama_474FEAEC_160C_229C_41B5_A893F886FCB3.jpeg",
                            "width": 3217,
                            "class": "ImageResourceLevel",
                            "height": 1608
                           }
                          ]
                         }
                        }
                       ],
                       "hfovMax": 120,
                       "partial": false,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": -123.06,
                         "panorama": "this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1",
                         "yaw": 125.92,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "backwardYaw": 63.17,
                         "panorama": "this.panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF",
                         "yaw": -81.43,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        }
                       ]
                      },
                      "yaw": 63.17,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "backwardYaw": -7.8,
                      "panorama": "this.panorama_3D79567C_1674_627C_41A0_54E172548A16",
                      "yaw": 156.41,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "backwardYaw": -100.12,
                      "panorama": {
                       "mapLocations": [
                        {
                         "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                         "x": 439.1,
                         "angle": 359.73,
                         "class": "PanoramaMapLocation",
                         "y": 165.3
                        }
                       ],
                       "vfov": 180,
                       "class": "Panorama",
                       "thumbnailUrl": "media/panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2_t.jpg",
                       "id": "panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2",
                       "label": "14 derecha_3",
                       "pitch": 0,
                       "hfov": 360,
                       "hfovMin": 80,
                       "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
                       "frames": [
                        {
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF, this.camera_D3573BF4_DE62_2527_41E2_238137255759); this.mainPlayList.set('selectedIndex', 22)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 7.9,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2_0_HS_0_0.png",
                                "width": 118,
                                "class": "ImageResourceLevel",
                                "height": 119
                               }
                              ]
                             },
                             "pitch": -1.45,
                             "yaw": -100.12
                            }
                           ],
                           "id": "overlay_2E4B3D72_1674_6784_41A6_95533FAF44D6",
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56, this.camera_D3235C03_DE62_22E0_41B7_85392A06F734); this.mainPlayList.set('selectedIndex', 20)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 7.9,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2_0_HS_1_0.png",
                                "width": 118,
                                "class": "ImageResourceLevel",
                                "height": 119
                               }
                              ]
                             },
                             "pitch": -0.59,
                             "yaw": -172.27
                            }
                           ],
                           "id": "overlay_2E390388_160C_6284_41B0_A9866C7CCB19",
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "image",
                             "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 7.39,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2_0_HS_2_0.png",
                                "width": 119,
                                "class": "ImageResourceLevel",
                                "height": 117
                               }
                              ]
                             },
                             "pitch": 22.03,
                             "yaw": -147.78
                            }
                           ],
                           "id": "overlay_4005B68C_163C_229C_4185_099E355858EC"
                          },
                          {
                           "bleaching": 0.7,
                           "yaw": 95.01,
                           "class": "LensFlarePanoramaOverlay",
                           "pitch": 68.09,
                           "id": "overlay_39CA1F05_37C2_A5C0_41B2_095B0FE8C7F0",
                           "bleachingDistance": 0.4
                          }
                         ],
                         "thumbnailUrl": "media/panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2_t.jpg",
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2_hq.jpeg",
                            "width": 5376,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ],
                            "class": "ImageResourceLevel",
                            "height": 2688
                           },
                           {
                            "url": "media/panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2.jpeg",
                            "width": 3217,
                            "class": "ImageResourceLevel",
                            "height": 1608
                           }
                          ]
                         }
                        }
                       ],
                       "hfovMax": 120,
                       "partial": false,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": 0.22,
                         "panorama": "this.panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF",
                         "yaw": -100.12,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "backwardYaw": -89.72,
                         "panorama": {
                          "mapLocations": [
                           {
                            "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                            "x": 382.9,
                            "angle": 159.2,
                            "class": "PanoramaMapLocation",
                            "y": 301.95
                           }
                          ],
                          "vfov": 180,
                          "class": "Panorama",
                          "thumbnailUrl": "media/panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56_t.jpg",
                          "id": "panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56",
                          "label": "12-derecha_1",
                          "pitch": 0,
                          "hfov": 360,
                          "hfovMin": 80,
                          "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
                          "frames": [
                           {
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "maps": [],
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1, this.camera_D2CC5CBF_DE62_2320_41D0_1F2ADF39FA28); this.mainPlayList.set('selectedIndex', 29)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 7.82,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56_0_HS_0_0.png",
                                   "width": 118,
                                   "class": "ImageResourceLevel",
                                   "height": 118
                                  }
                                 ]
                                },
                                "pitch": -8.08,
                                "yaw": 105.2
                               }
                              ],
                              "id": "overlay_1706E455_1AA3_6DA9_419E_DCA62F92E2B5",
                              "enabledInCardboard": true
                             },
                             {
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "maps": [],
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2, this.camera_D2D9BCCE_DE62_2360_41EA_B461DB6DB2DB); this.mainPlayList.set('selectedIndex', 19)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 7.86,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56_0_HS_2_0.png",
                                   "width": 118,
                                   "class": "ImageResourceLevel",
                                   "height": 118
                                  }
                                 ]
                                },
                                "pitch": -5.91,
                                "yaw": -89.72
                               }
                              ],
                              "id": "overlay_14442551_1AA3_EFA9_41B2_B2FE35E19AFB",
                              "enabledInCardboard": true
                             },
                             {
                              "bleaching": 0.7,
                              "yaw": -16.81,
                              "class": "LensFlarePanoramaOverlay",
                              "pitch": 63.56,
                              "id": "overlay_39C8F945_37C2_AC40_41A0_C161645E482D",
                              "bleachingDistance": 0.4
                             },
                             {
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "maps": [],
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "image",
                                "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 7.61,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56_0_HS_3_0.png",
                                   "width": 117,
                                   "class": "ImageResourceLevel",
                                   "height": 119
                                  }
                                 ]
                                },
                                "pitch": 15.71,
                                "yaw": 140.05
                               }
                              ],
                              "id": "overlay_892E9712_9CCD_D654_41D9_2E3CCD5FB7BE"
                             }
                            ],
                            "thumbnailUrl": "media/panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56_hq.jpeg",
                               "width": 5376,
                               "tags": [
                                "oculusgo",
                                "ipadpro"
                               ],
                               "class": "ImageResourceLevel",
                               "height": 2688
                              },
                              {
                               "url": "media/panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56.jpeg",
                               "width": 3217,
                               "class": "ImageResourceLevel",
                               "height": 1608
                              }
                             ]
                            }
                           }
                          ],
                          "hfovMax": 120,
                          "partial": false,
                          "adjacentPanoramas": [
                           {
                            "backwardYaw": -79.36,
                            "panorama": "this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1",
                            "yaw": 105.2,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "backwardYaw": -172.27,
                            "panorama": "this.panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2",
                            "yaw": -89.72,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           }
                          ]
                         },
                         "yaw": -172.27,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        }
                       ]
                      },
                      "yaw": 0.22,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     }
                    ]
                   },
                   "yaw": -7.8,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ]
                },
                "yaw": 113.6,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ]
             },
             "yaw": 32.75,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": -62.51,
             "panorama": "this.panorama_3D79D3BF_1674_22FC_4196_7C67831E524C",
             "yaw": -148.94,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ]
          },
          "yaw": -62.51,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ]
       },
       "yaw": 130.67,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "backwardYaw": 125.92,
       "panorama": "this.panorama_474FEAEC_160C_229C_41B5_A893F886FCB3",
       "yaw": -123.06,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "mapLocations": [
         {
          "map": {
           "fieldOfViewOverlayInsideColor": "#FFFFFF",
           "class": "Map",
           "fieldOfViewOverlayOutsideColor": "#000000",
           "thumbnailUrl": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_t.png",
           "id": "map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
           "minimumZoomFactor": 0.5,
           "overlays": [
            {
             "useHandCursor": true,
             "map": {
              "width": 20,
              "x": 16.55,
              "class": "HotspotMapOverlayMap",
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_0_map.gif",
                 "width": 9,
                 "class": "ImageResourceLevel",
                 "height": 9
                }
               ]
              },
              "offsetY": 0,
              "height": 20,
              "y": 149.55
             },
             "rollOverDisplay": true,
             "data": {
              "label": "Image"
             },
             "class": "AreaHotspotMapOverlay",
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 9)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "id": "overlay_FCFECF03_DD1A_A3DC_41C3_A9E15DF295E9",
             "image": {
              "x": 16.55,
              "class": "HotspotMapOverlayImage",
              "y": 149.55,
              "width": 20,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_0.png",
                 "width": 19,
                 "class": "ImageResourceLevel",
                 "height": 19
                }
               ]
              },
              "height": 20
             }
            },
            {
             "useHandCursor": true,
             "map": {
              "width": 20,
              "x": 83.5,
              "class": "HotspotMapOverlayMap",
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_1_map.gif",
                 "width": 9,
                 "class": "ImageResourceLevel",
                 "height": 9
                }
               ]
              },
              "offsetY": 0,
              "height": 20,
              "y": 151.55
             },
             "rollOverDisplay": true,
             "data": {
              "label": "Image"
             },
             "class": "AreaHotspotMapOverlay",
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 10)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "id": "overlay_FFCF2D2D_DD19_A627_41B8_CFCAE1C65CD2",
             "image": {
              "x": 83.5,
              "class": "HotspotMapOverlayImage",
              "y": 151.55,
              "width": 20,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_1.png",
                 "width": 19,
                 "class": "ImageResourceLevel",
                 "height": 19
                }
               ]
              },
              "height": 20
             }
            },
            {
             "useHandCursor": true,
             "map": {
              "width": 20,
              "x": 24.05,
              "class": "HotspotMapOverlayMap",
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_2_map.gif",
                 "width": 9,
                 "class": "ImageResourceLevel",
                 "height": 9
                }
               ]
              },
              "offsetY": 0,
              "height": 20,
              "y": 6.6
             },
             "rollOverDisplay": true,
             "data": {
              "label": "Image"
             },
             "class": "AreaHotspotMapOverlay",
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 11)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "id": "overlay_FEA879B1_DD16_6E3C_41E7_2FF39A318D51",
             "image": {
              "x": 24.05,
              "class": "HotspotMapOverlayImage",
              "y": 6.6,
              "width": 20,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_2.png",
                 "width": 19,
                 "class": "ImageResourceLevel",
                 "height": 19
                }
               ]
              },
              "height": 20
             }
            },
            {
             "useHandCursor": true,
             "map": {
              "width": 20,
              "x": 138,
              "class": "HotspotMapOverlayMap",
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_3_map.gif",
                 "width": 9,
                 "class": "ImageResourceLevel",
                 "height": 9
                }
               ]
              },
              "offsetY": 0,
              "height": 20,
              "y": 5.6
             },
             "rollOverDisplay": true,
             "data": {
              "label": "Image"
             },
             "class": "AreaHotspotMapOverlay",
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 12)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "id": "overlay_FF9139DD_DD16_AE64_41E7_9B2CF203BB6B",
             "image": {
              "x": 138,
              "class": "HotspotMapOverlayImage",
              "y": 5.6,
              "width": 20,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_3.png",
                 "width": 19,
                 "class": "ImageResourceLevel",
                 "height": 19
                }
               ]
              },
              "height": 20
             }
            },
            {
             "useHandCursor": true,
             "map": {
              "width": 20,
              "x": 141.5,
              "class": "HotspotMapOverlayMap",
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_4_map.gif",
                 "width": 9,
                 "class": "ImageResourceLevel",
                 "height": 9
                }
               ]
              },
              "offsetY": 0,
              "height": 20,
              "y": 96.5
             },
             "rollOverDisplay": true,
             "data": {
              "label": "Image"
             },
             "class": "AreaHotspotMapOverlay",
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 16)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "id": "overlay_FEFCC206_DD17_9DE5_41C8_3ECC72F63227",
             "image": {
              "x": 141.5,
              "class": "HotspotMapOverlayImage",
              "y": 96.5,
              "width": 20,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_4.png",
                 "width": 19,
                 "class": "ImageResourceLevel",
                 "height": 19
                }
               ]
              },
              "height": 20
             }
            },
            {
             "useHandCursor": true,
             "map": {
              "width": 20,
              "x": 271,
              "class": "HotspotMapOverlayMap",
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_5_map.gif",
                 "width": 9,
                 "class": "ImageResourceLevel",
                 "height": 9
                }
               ]
              },
              "offsetY": 0,
              "height": 20,
              "y": 12.6
             },
             "rollOverDisplay": true,
             "data": {
              "label": "Image"
             },
             "class": "AreaHotspotMapOverlay",
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 14)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "id": "overlay_FF91DE69_DD17_A22C_41DE_D1342F576EA9",
             "image": {
              "x": 271,
              "class": "HotspotMapOverlayImage",
              "y": 12.6,
              "width": 20,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_5.png",
                 "width": 19,
                 "class": "ImageResourceLevel",
                 "height": 19
                }
               ]
              },
              "height": 20
             }
            },
            {
             "useHandCursor": true,
             "map": {
              "width": 20,
              "x": 206.1,
              "class": "HotspotMapOverlayMap",
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_6_map.gif",
                 "width": 9,
                 "class": "ImageResourceLevel",
                 "height": 9
                }
               ]
              },
              "offsetY": 0,
              "height": 20,
              "y": 162
             },
             "rollOverDisplay": true,
             "data": {
              "label": "Image"
             },
             "class": "AreaHotspotMapOverlay",
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 15)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "id": "overlay_FFB50497_DD16_A6E4_41E4_5BEA266BE86F",
             "image": {
              "x": 206.1,
              "class": "HotspotMapOverlayImage",
              "y": 162,
              "width": 20,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_6.png",
                 "width": 19,
                 "class": "ImageResourceLevel",
                 "height": 19
                }
               ]
              },
              "height": 20
             }
            },
            {
             "useHandCursor": true,
             "map": {
              "width": 20,
              "x": 141.5,
              "class": "HotspotMapOverlayMap",
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_7_map.gif",
                 "width": 9,
                 "class": "ImageResourceLevel",
                 "height": 9
                }
               ]
              },
              "offsetY": 0,
              "height": 20,
              "y": 81.55
             },
             "rollOverDisplay": true,
             "data": {
              "label": "Image"
             },
             "class": "AreaHotspotMapOverlay",
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 13)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "id": "overlay_FE5AF794_DD09_A2E4_41D0_61777F7E15D3",
             "image": {
              "x": 141.5,
              "class": "HotspotMapOverlayImage",
              "y": 81.55,
              "width": 20,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_7.png",
                 "width": 19,
                 "class": "ImageResourceLevel",
                 "height": 19
                }
               ]
              },
              "height": 20
             }
            },
            {
             "useHandCursor": true,
             "map": {
              "width": 20.27,
              "x": 37.65,
              "class": "HotspotMapOverlayMap",
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_8_map.gif",
                 "width": 10,
                 "class": "ImageResourceLevel",
                 "height": 10
                }
               ]
              },
              "offsetY": 0,
              "height": 20.27,
              "y": 72.45
             },
             "rollOverDisplay": true,
             "data": {
              "label": "Image"
             },
             "class": "AreaHotspotMapOverlay",
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 17)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "id": "overlay_01B54DAD_1A41_CF78_41A6_909B29F94B5F",
             "image": {
              "x": 37.65,
              "class": "HotspotMapOverlayImage",
              "y": 72.45,
              "width": 20.27,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_8.png",
                 "width": 20,
                 "class": "ImageResourceLevel",
                 "height": 20
                }
               ]
              },
              "height": 20.27
             }
            }
           ],
           "label": "Centro Corporativo",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17.png",
              "width": 300,
              "class": "ImageResourceLevel",
              "height": 209
             }
            ]
           },
           "width": 300,
           "initialZoomFactor": 1,
           "fieldOfViewOverlayRadiusScale": 0.19,
           "scaleMode": "fit_inside",
           "fieldOfViewOverlayOutsideOpacity": 0,
           "maximumZoomFactor": 1.2,
           "fieldOfViewOverlayInsideOpacity": 0.4,
           "height": 209
          },
          "x": 47.79,
          "angle": 202.59,
          "class": "PanoramaMapLocation",
          "y": 82.59
         }
        ],
        "vfov": 180,
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_t.jpg",
        "id": "panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7",
        "label": "CC_Project_9",
        "pitch": 0,
        "hfov": 360,
        "hfovMin": 80,
        "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
        "frames": [
         {
          "overlays": [
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E, this.camera_D0375E45_DE61_DF60_41C8_1036022F2725); this.mainPlayList.set('selectedIndex', 9)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.55,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_0_HS_0_0.png",
                 "width": 120,
                 "class": "ImageResourceLevel",
                 "height": 120
                }
               ]
              },
              "pitch": -0.53,
              "yaw": -20.63
             }
            ],
            "id": "overlay_4A56E6F5_161C_628C_41A8_2F0FD3F1AE41",
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_2C7FFD45_279C_C425_4191_328659A964C7, this.camera_D000CE55_DE61_DF60_41C7_CAEDD575D5C7); this.mainPlayList.set('selectedIndex', 11)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.37,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_0_HS_2_0.png",
                 "width": 117,
                 "class": "ImageResourceLevel",
                 "height": 119
                }
               ]
              },
              "pitch": 0.74,
              "yaw": 138.73
             }
            ],
            "id": "overlay_49345E89_161C_6284_4190_2B15006E97A0",
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337, this.camera_D0267E36_DE61_DF20_41E8_4FB93FA675AD); this.mainPlayList.set('selectedIndex', 16)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 9.68,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_0_HS_3_0.png",
                 "width": 119,
                 "class": "ImageResourceLevel",
                 "height": 117
                }
               ]
              },
              "pitch": 22.22,
              "yaw": -115.43
             }
            ],
            "id": "overlay_4A551A94_1613_E28C_41B1_242B46338C0C",
            "enabledInCardboard": true
           },
           {
            "bleaching": 0.7,
            "yaw": 92.74,
            "class": "LensFlarePanoramaOverlay",
            "pitch": 63.56,
            "id": "overlay_39E68CB3_37C5_64C0_41C2_93E192773C97",
            "bleachingDistance": 0.4
           },
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 13.18,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_0_HS_4_0.png",
                 "width": 150,
                 "class": "ImageResourceLevel",
                 "height": 150
                }
               ]
              },
              "pitch": 0.22,
              "yaw": 12.92
             }
            ],
            "id": "overlay_3215E5FC_3C9B_9A6D_41BA_6C657A221EE9",
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_5F372E49_160C_6584_4186_1E0077946A37, this.camera_D0126E65_DE61_DF20_41CC_292A9D504162); this.mainPlayList.set('selectedIndex', 30)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 9.38,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_0_HS_5_0.png",
                 "width": 118,
                 "class": "ImageResourceLevel",
                 "height": 119
                }
               ]
              },
              "pitch": -25.3,
              "yaw": 163.35
             }
            ],
            "id": "overlay_2F385F6A_3C8A_8794_41CD_54DF555CB5E8",
            "enabledInCardboard": true
           }
          ],
          "thumbnailUrl": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_hq.jpeg",
             "width": 4096,
             "tags": [
              "oculusgo",
              "ipadpro"
             ],
             "class": "ImageResourceLevel",
             "height": 2048
            },
            {
             "url": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7.jpeg",
             "width": 3217,
             "class": "ImageResourceLevel",
             "height": 1608
            }
           ]
          }
         }
        ],
        "hfovMax": 120,
        "partial": false,
        "adjacentPanoramas": [
         {
          "backwardYaw": 8.58,
          "panorama": {
           "mapLocations": [
            {
             "map": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
             "x": 151.5,
             "angle": 271.87,
             "class": "PanoramaMapLocation",
             "y": 106.5
            }
           ],
           "vfov": 180,
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_t.jpg",
           "id": "panorama_2C00DBFF_279B_43E5_418A_2C175D957337",
           "label": "CC_Project_8",
           "pitch": 0,
           "hfov": 360,
           "hfovMin": 80,
           "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
           "frames": [
            {
             "overlays": [
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E, this.camera_D219B00C_DE61_E2E0_41E3_D9CF0870C17A); this.mainPlayList.set('selectedIndex', 9)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 4.07,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_0_0.png",
                    "width": 60,
                    "class": "ImageResourceLevel",
                    "height": 60
                   }
                  ]
                 },
                 "pitch": -39.47,
                 "yaw": -29.95
                }
               ],
               "id": "overlay_2C00BC00_279B_441A_41A9_2E76910C36F0",
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_2BBC8600_279C_C41B_41AA_7212826C3A68, this.camera_D217500C_DE61_E2E0_41C2_DD2C63A64896); this.mainPlayList.set('selectedIndex', 10)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 3.2,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_1_0.png",
                    "width": 60,
                    "class": "ImageResourceLevel",
                    "height": 60
                   }
                  ]
                 },
                 "pitch": -52.58,
                 "yaw": -43.54
                }
               ],
               "id": "overlay_2C007C00_279B_441A_41C0_E3A7B6A036C8",
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_2C7FFD45_279C_C425_4191_328659A964C7, this.camera_D2F0D03B_DE61_E320_41D1_0F6895F4E283); this.mainPlayList.set('selectedIndex', 11)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 4.13,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_2_0.png",
                    "width": 60,
                    "class": "ImageResourceLevel",
                    "height": 60
                   }
                  ]
                 },
                 "pitch": -38.39,
                 "yaw": 32.03
                }
               ],
               "id": "overlay_2C005C00_279B_441B_41C2_4F5A683D497C",
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7, this.camera_D2E6102B_DE61_E320_41E6_6F938C4BAD82); this.mainPlayList.set('selectedIndex', 17)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 3.55,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_3_0.png",
                    "width": 60,
                    "class": "ImageResourceLevel",
                    "height": 60
                   }
                  ]
                 },
                 "pitch": -47.65,
                 "yaw": 8.58
                }
               ],
               "id": "overlay_2C004C00_279B_441B_41B2_C9CF4743FEA0",
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E, this.camera_D20C7FFC_DE61_DD20_41DB_4BA464FA2EC2); this.mainPlayList.set('selectedIndex', 15)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 2.88,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_4_0.png",
                    "width": 60,
                    "class": "ImageResourceLevel",
                    "height": 60
                   }
                  ]
                 },
                 "pitch": -56.91,
                 "yaw": -121.05
                }
               ],
               "id": "overlay_2C001C00_279B_441B_41BD_8BC16CC38810",
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686, this.camera_D2FFD04A_DE61_E360_41D5_574C9637E1EB); this.mainPlayList.set('selectedIndex', 13)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 0.29,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_5_0.png",
                    "width": 60,
                    "class": "ImageResourceLevel",
                    "height": 60
                   }
                  ]
                 },
                 "pitch": -86.86,
                 "yaw": 24.93
                }
               ],
               "id": "overlay_2C000C00_279B_441B_41B8_87BF4CC774E8",
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA, this.camera_D2E3001C_DE61_E2E7_41E5_DD4C4AAA2DC7); this.mainPlayList.set('selectedIndex', 12)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 3.37,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_6_0.png",
                    "width": 60,
                    "class": "ImageResourceLevel",
                    "height": 60
                   }
                  ]
                 },
                 "pitch": -50.28,
                 "yaw": 85.67
                }
               ],
               "id": "overlay_2C07DC00_279B_441B_41C1_A9C8777E703C",
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1, this.camera_D2EF702B_DE61_E320_41EA_A01342DC5FA2); this.mainPlayList.set('selectedIndex', 14)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 4.66,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_7_0.png",
                    "width": 60,
                    "class": "ImageResourceLevel",
                    "height": 60
                   }
                  ]
                 },
                 "pitch": -27.99,
                 "yaw": 158.83
                }
               ],
               "id": "overlay_2C079C00_279B_441B_41BB_F6AA42D4FAA8",
               "enabledInCardboard": true
              },
              {
               "bleaching": 0.7,
               "yaw": 27.39,
               "class": "LensFlarePanoramaOverlay",
               "pitch": 62.42,
               "id": "overlay_39CCA57D_37C5_6440_41CB_8528AECC6E40",
               "bleachingDistance": 0.4
              },
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.mainPlayList.set('selectedIndex', 0)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.79,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_9_0.png",
                    "width": 119,
                    "class": "ImageResourceLevel",
                    "height": 118
                   }
                  ]
                 },
                 "pitch": -32.85,
                 "yaw": -23.46
                }
               ],
               "id": "overlay_326DF1C8_3C8A_FA95_41C2_A1F274D2FEED",
               "enabledInCardboard": true
              }
             ],
             "thumbnailUrl": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_hq.jpeg",
                "width": 4096,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "class": "ImageResourceLevel",
                "height": 2048
               },
               {
                "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337.jpeg",
                "width": 3217,
                "class": "ImageResourceLevel",
                "height": 1608
               }
              ]
             }
            }
           ],
           "hfovMax": 100,
           "partial": false,
           "adjacentPanoramas": [
            {
             "backwardYaw": -84.17,
             "panorama": {
              "mapLocations": [
               {
                "map": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
                "x": 216.1,
                "angle": 54.63,
                "class": "PanoramaMapLocation",
                "y": 172
               }
              ],
              "vfov": 180,
              "class": "Panorama",
              "thumbnailUrl": "media/panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E_t.jpg",
              "id": "panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E",
              "hfov": 360,
              "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
              "pitch": 0,
              "hfovMax": 120,
              "label": "CC_Project_7",
              "frames": [
               {
                "overlays": [
                 {
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1, this.camera_D0ECBE84_DE61_DFE0_41EA_5908528D3709); this.mainPlayList.set('selectedIndex', 14)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.27,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E_0_HS_0_0.png",
                       "width": 71,
                       "class": "ImageResourceLevel",
                       "height": 72
                      }
                     ]
                    },
                    "pitch": -1.02,
                    "yaw": -17.47
                   }
                  ],
                  "id": "overlay_2CCFDB45_279C_CC25_41B5_E014B5E1933D",
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337, this.camera_D0E34E74_DE61_DF20_4178_7F0B50F02F88); this.mainPlayList.set('selectedIndex', 16)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.91,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E_0_HS_1_0.png",
                       "width": 72,
                       "class": "ImageResourceLevel",
                       "height": 71
                      }
                     ]
                    },
                    "pitch": 20.97,
                    "yaw": -84.17
                   }
                  ],
                  "id": "overlay_2CC80B45_279C_CC25_41A0_92921E9D8840",
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_2BBC8600_279C_C41B_41AA_7212826C3A68, this.camera_D0FDCE94_DE61_DFE7_41E2_0810AEE09217); this.mainPlayList.set('selectedIndex', 10)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.27,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E_0_HS_2_0.png",
                       "width": 71,
                       "class": "ImageResourceLevel",
                       "height": 72
                      }
                     ]
                    },
                    "pitch": -2.36,
                    "yaw": -132.65
                   }
                  ],
                  "id": "overlay_2CC82B45_279C_CC25_41B5_00FF5FF50D0E",
                  "enabledInCardboard": true
                 },
                 {
                  "bleaching": 0.7,
                  "yaw": -107.09,
                  "class": "LensFlarePanoramaOverlay",
                  "pitch": 63.18,
                  "id": "overlay_39CFC332_37C2_9DC0_41C7_D1100F9CF9C7",
                  "bleachingDistance": 0.4
                 }
                ],
                "thumbnailUrl": "media/panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E_hq.jpeg",
                   "width": 4096,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ],
                   "class": "ImageResourceLevel",
                   "height": 2048
                  },
                  {
                   "url": "media/panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E.jpeg",
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "height": 1608
                  }
                 ]
                }
               }
              ],
              "hfovMin": 80,
              "partial": false,
              "adjacentPanoramas": [
               {
                "backwardYaw": -121.05,
                "panorama": "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337",
                "yaw": -84.17,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "backwardYaw": -110.73,
                "panorama": {
                 "mapLocations": [
                  {
                   "map": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
                   "x": 281,
                   "angle": 317.08,
                   "class": "PanoramaMapLocation",
                   "y": 22.6
                  }
                 ],
                 "vfov": 180,
                 "class": "Panorama",
                 "thumbnailUrl": "media/panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1_t.jpg",
                 "id": "panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1",
                 "hfov": 360,
                 "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
                 "pitch": 0,
                 "hfovMax": 120,
                 "label": "CC_Project_6",
                 "frames": [
                  {
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA, this.camera_D2B8ACEE_DE62_2320_417A_09D3640DC166); this.mainPlayList.set('selectedIndex', 12)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.12,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1_0_HS_0_0.png",
                          "width": 58,
                          "class": "ImageResourceLevel",
                          "height": 59
                         }
                        ]
                       },
                       "pitch": -9.09,
                       "yaw": -52.44
                      }
                     ],
                     "id": "overlay_2CA6D3E3_279C_DC1E_41B9_36A15A92DBCF",
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E, this.camera_D2B39CDE_DE62_2360_41D1_E6050B7CDBEF); this.mainPlayList.set('selectedIndex', 15)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.18,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1_0_HS_2_0.png",
                          "width": 58,
                          "class": "ImageResourceLevel",
                          "height": 59
                         }
                        ]
                       },
                       "pitch": -2.72,
                       "yaw": -110.73
                      }
                     ],
                     "id": "overlay_2CA6C3E3_279C_DC1E_41A2_5AA02B788064",
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337, this.camera_D2A6BCDE_DE62_2360_41E5_377E16F5C7C8); this.mainPlayList.set('selectedIndex', 16)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 6.14,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1_0_HS_3_0.png",
                          "width": 72,
                          "class": "ImageResourceLevel",
                          "height": 71
                         }
                        ]
                       },
                       "pitch": 14.07,
                       "yaw": -82.08
                      }
                     ],
                     "id": "overlay_2CA6F3E3_279C_DC1E_4181_D55F82F8B7F7",
                     "enabledInCardboard": true
                    },
                    {
                     "bleaching": 0.7,
                     "yaw": -28.14,
                     "class": "LensFlarePanoramaOverlay",
                     "pitch": 63.56,
                     "id": "overlay_39CACAA0_37C2_ACFF_4197_1DF153490C33",
                     "bleachingDistance": 0.4
                    }
                   ],
                   "thumbnailUrl": "media/panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1_hq.jpeg",
                      "width": 4096,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ],
                      "class": "ImageResourceLevel",
                      "height": 2048
                     },
                     {
                      "url": "media/panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1.jpeg",
                      "width": 3217,
                      "class": "ImageResourceLevel",
                      "height": 1608
                     }
                    ]
                   }
                  }
                 ],
                 "hfovMin": 80,
                 "partial": false,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": 158.83,
                   "panorama": "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337",
                   "yaw": -82.08,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "backwardYaw": -17.47,
                   "panorama": "this.panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E",
                   "yaw": -110.73,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "backwardYaw": -175.82,
                   "panorama": {
                    "mapLocations": [
                     {
                      "map": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
                      "x": 148,
                      "angle": 260.49,
                      "class": "PanoramaMapLocation",
                      "y": 15.6
                     }
                    ],
                    "vfov": 180,
                    "class": "Panorama",
                    "thumbnailUrl": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_t.jpg",
                    "id": "panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA",
                    "hfov": 360,
                    "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
                    "pitch": 0,
                    "hfovMax": 120,
                    "label": "CC_Project_4",
                    "frames": [
                     {
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "maps": [],
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686, this.camera_D2083FED_DE61_DD20_41E4_1A24B12E7A5B); this.mainPlayList.set('selectedIndex', 13)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.09,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_0_HS_0_0.png",
                             "width": 71,
                             "class": "ImageResourceLevel",
                             "height": 72
                            }
                           ]
                          },
                          "pitch": -13.93,
                          "yaw": -81.03
                         }
                        ],
                        "id": "overlay_2C01C4C3_279C_C41E_41BA_71279D90A134",
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "maps": [],
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337, this.camera_D1D1CF8F_DE61_DDE0_41B1_07472A841B54); this.mainPlayList.set('selectedIndex', 16)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.03,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_0_HS_1_0.png",
                             "width": 72,
                             "class": "ImageResourceLevel",
                             "height": 71
                            }
                           ]
                          },
                          "pitch": 17.62,
                          "yaw": -82.7
                         }
                        ],
                        "id": "overlay_2C01D4C3_279C_C41D_418F_88428E219946",
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "maps": [],
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_2C7FFD45_279C_C425_4191_328659A964C7, this.camera_D1ACBF9F_DE61_DDE1_41E0_C8F5C30A5BB8); this.mainPlayList.set('selectedIndex', 11)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.27,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_0_HS_2_0.png",
                             "width": 71,
                             "class": "ImageResourceLevel",
                             "height": 72
                            }
                           ]
                          },
                          "pitch": 1.49,
                          "yaw": 10.35
                         }
                        ],
                        "id": "overlay_2C0224C3_279C_C41D_41B1_7F652BAD75D7",
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "maps": [],
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1, this.camera_D1A33F9F_DE61_DDE1_41DF_BC9AA4B6FBF5); this.mainPlayList.set('selectedIndex', 14)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.27,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_0_HS_3_0.png",
                             "width": 71,
                             "class": "ImageResourceLevel",
                             "height": 72
                            }
                           ]
                          },
                          "pitch": 3.16,
                          "yaw": -175.82
                         }
                        ],
                        "id": "overlay_2C0234C3_279C_C41D_41B7_F9A8028F8DC4",
                        "enabledInCardboard": true
                       },
                       {
                        "bleaching": 0.7,
                        "yaw": 37.59,
                        "class": "LensFlarePanoramaOverlay",
                        "pitch": 61.29,
                        "id": "overlay_39D43F68_37C2_A440_41C4_E6449E3E2B65",
                        "bleachingDistance": 0.4
                       }
                      ],
                      "thumbnailUrl": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_hq.jpeg",
                         "width": 4096,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ],
                         "class": "ImageResourceLevel",
                         "height": 2048
                        },
                        {
                         "url": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA.jpeg",
                         "width": 3217,
                         "class": "ImageResourceLevel",
                         "height": 1608
                        }
                       ]
                      }
                     }
                    ],
                    "hfovMin": 80,
                    "partial": false,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": 85.67,
                      "panorama": "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337",
                      "yaw": -82.7,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "backwardYaw": -52.44,
                      "panorama": "this.panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1",
                      "yaw": -175.82,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "backwardYaw": -141.39,
                      "panorama": {
                       "mapLocations": [
                        {
                         "map": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
                         "x": 34.05,
                         "angle": 233.38,
                         "class": "PanoramaMapLocation",
                         "y": 16.6
                        }
                       ],
                       "vfov": 180,
                       "class": "Panorama",
                       "thumbnailUrl": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_t.jpg",
                       "id": "panorama_2C7FFD45_279C_C425_4191_328659A964C7",
                       "hfov": 360,
                       "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
                       "pitch": 0,
                       "hfovMax": 120,
                       "label": "CC_Project_3",
                       "frames": [
                        {
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7, this.camera_D287D099_DE61_E3E1_41E3_69B4C32571BC); this.mainPlayList.set('selectedIndex', 17)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 4.97,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_0_HS_0_0.png",
                                "width": 58,
                                "class": "ImageResourceLevel",
                                "height": 59
                               }
                              ]
                             },
                             "pitch": -16.61,
                             "yaw": -86
                            }
                           ],
                           "id": "overlay_2C7FCD46_279C_C426_41B2_B92E5530F0B6",
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E, this.camera_D2AD3079_DE61_E320_41E9_AE8181465A7C); this.mainPlayList.set('selectedIndex', 9)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5.17,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_0_HS_1_0.png",
                                "width": 58,
                                "class": "ImageResourceLevel",
                                "height": 59
                               }
                              ]
                             },
                             "pitch": -5.03,
                             "yaw": -55.33
                            }
                           ],
                           "id": "overlay_2C7FDD46_279C_C426_4185_A258B7CEF2E8",
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA, this.camera_D2BA5089_DE61_E3E0_41DA_81BB17456C37); this.mainPlayList.set('selectedIndex', 12)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5.11,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_0_HS_2_0.png",
                                "width": 58,
                                "class": "ImageResourceLevel",
                                "height": 59
                               }
                              ]
                             },
                             "pitch": -9.96,
                             "yaw": -141.39
                            }
                           ],
                           "id": "overlay_2C783D46_279C_C426_41B6_2DE1D84A1212",
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337, this.camera_D2A7D079_DE61_E320_41DB_13A878EFE4DE); this.mainPlayList.set('selectedIndex', 16)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5.15,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_0_HS_3_0.png",
                                "width": 59,
                                "class": "ImageResourceLevel",
                                "height": 58
                               }
                              ]
                             },
                             "pitch": 10.03,
                             "yaw": -102.17
                            }
                           ],
                           "id": "overlay_2C780D46_279C_C426_41B9_2EF3D1867274",
                           "enabledInCardboard": true
                          },
                          {
                           "bleaching": 0.7,
                           "yaw": 68.94,
                           "class": "LensFlarePanoramaOverlay",
                           "pitch": 62.05,
                           "id": "overlay_39CFA664_37C2_E440_4192_D5E0E8F22285",
                           "bleachingDistance": 0.4
                          },
                          {
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "image",
                             "click": "this.mainPlayList.set('selectedIndex', 0)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.76,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_0_HS_5_0.png",
                                "width": 99,
                                "class": "ImageResourceLevel",
                                "height": 99
                               }
                              ]
                             },
                             "pitch": -4.51,
                             "yaw": -46.26
                            }
                           ],
                           "id": "overlay_32528A50_3C97_89B4_41CB_0C680996E5DD",
                           "enabledInCardboard": true
                          }
                         ],
                         "thumbnailUrl": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_t.jpg",
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_hq.jpeg",
                            "width": 4096,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ],
                            "class": "ImageResourceLevel",
                            "height": 2048
                           },
                           {
                            "url": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7.jpeg",
                            "width": 3217,
                            "class": "ImageResourceLevel",
                            "height": 1608
                           }
                          ]
                         }
                        }
                       ],
                       "hfovMin": 80,
                       "partial": false,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": 32.03,
                         "panorama": "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337",
                         "yaw": -102.17,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "mapLocations": [
                           {
                            "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                            "x": 281.15,
                            "angle": 0,
                            "class": "PanoramaMapLocation",
                            "y": 422.75
                           }
                          ],
                          "vfov": 180,
                          "class": "Panorama",
                          "thumbnailUrl": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_t.jpg",
                          "id": "panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15",
                          "label": "Main Acces",
                          "pitch": 0,
                          "hfov": 360,
                          "hfovMin": 80,
                          "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
                          "frames": [
                           {
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "maps": [],
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1, this.camera_D20BBC80_DE62_23E0_41EB_36EDCD5081A3); this.mainPlayList.set('selectedIndex', 29)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 7.87,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_0_0.png",
                                   "width": 119,
                                   "class": "ImageResourceLevel",
                                   "height": 119
                                  }
                                 ]
                                },
                                "pitch": -11.7,
                                "yaw": 2.7
                               }
                              ],
                              "id": "overlay_D75F5845_D8F2_D78D_41C5_11AB9C06DCE7",
                              "enabledInCardboard": true
                             },
                             {
                              "bleaching": 0.7,
                              "yaw": 150.67,
                              "class": "LensFlarePanoramaOverlay",
                              "pitch": 42.76,
                              "id": "overlay_D4C76E50_DC47_E1C9_41C3_9FDE3321574E",
                              "bleachingDistance": 0.4
                             },
                             {
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "maps": [],
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "image",
                                "click": "this.showPopupPanoramaOverlay(this.popup_D67F207D_DCE6_3169_41C5_15346C9DD144, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, this.ImageResource_D0B2815B_DCEA_70A9_41E8_E7BBC7DE2A6B, null, null, null, null, false)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 8.03,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_1_0.png",
                                   "width": 120,
                                   "class": "ImageResourceLevel",
                                   "height": 120
                                  }
                                 ]
                                },
                                "pitch": 2.22,
                                "yaw": -108.06
                               }
                              ],
                              "id": "overlay_D5516A0E_DCE6_30A8_41E8_FE694E725AE4",
                              "enabledInCardboard": true
                             },
                             {
                              "popupMaxHeight": "95%",
                              "hideDuration": 500,
                              "yaw": -108.06,
                              "showDuration": 500,
                              "class": "PopupPanoramaOverlay",
                              "rotationY": 0,
                              "hideEasing": "cubic_out",
                              "rotationX": 0,
                              "rotationZ": 0,
                              "hfov": 8.03,
                              "id": "popup_D67F207D_DCE6_3169_41C5_15346C9DD144",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "url": "media/popup_D67F207D_DCE6_3169_41C5_15346C9DD144_0_2.jpg",
                                 "width": 1024,
                                 "class": "ImageResourceLevel",
                                 "height": 682
                                }
                               ]
                              },
                              "pitch": 2.22,
                              "popupDistance": 100,
                              "popupMaxWidth": "95%",
                              "showEasing": "cubic_in"
                             },
                             {
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "maps": [],
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "image",
                                "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 6.29,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_3_0.png",
                                   "width": 120,
                                   "class": "ImageResourceLevel",
                                   "height": 120
                                  }
                                 ]
                                },
                                "pitch": 38.43,
                                "yaw": 3.25
                               }
                              ],
                              "id": "overlay_EEB0B142_DD76_BE5D_41D0_2BBD62BD6380"
                             },
                             {
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "maps": [],
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B, this.camera_D2129C80_DE62_23E0_41E1_B384C41DB352); this.mainPlayList.set('selectedIndex', 18)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 8.95,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_5_0.png",
                                   "width": 137,
                                   "class": "ImageResourceLevel",
                                   "height": 130
                                  }
                                 ]
                                },
                                "pitch": 14.24,
                                "yaw": 175.65
                               }
                              ],
                              "id": "overlay_E5576D9D_EF14_5C9B_41D9_618184C5D0AE",
                              "enabledInCardboard": true
                             },
                             {
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_6_0_map.gif",
                                   "width": 59,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ]
                                },
                                "yaw": 160.88,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 13.91,
                                "hfov": 24.24
                               }
                              ],
                              "data": {
                               "label": "Cartago City"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 24.24,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_6_0.png",
                                   "width": 370,
                                   "class": "ImageResourceLevel",
                                   "height": 100
                                  }
                                 ]
                                },
                                "pitch": 13.91,
                                "yaw": 160.88,
                                "distance": 50
                               }
                              ],
                              "id": "overlay_E5CE6902_EF90_2799_418E_AA622D462845",
                              "enabledInCardboard": true
                             },
                             {
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_7_0_map.gif",
                                   "width": 67,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ]
                                },
                                "yaw": 75.88,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 2.22,
                                "hfov": 23.83
                               }
                              ],
                              "data": {
                               "label": "Short Intro"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 23.83,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_7_0.png",
                                   "width": 354,
                                   "class": "ImageResourceLevel",
                                   "height": 84
                                  }
                                 ]
                                },
                                "pitch": 2.22,
                                "yaw": 75.88,
                                "distance": 50
                               }
                              ],
                              "id": "overlay_E30D676E_EFB0_6A69_41EC_2EF65EBAC682",
                              "enabledInCardboard": true
                             },
                             {
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "maps": [],
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "image",
                                "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_86BC6426_88BB_A07B_41C5_61F799090724, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, true) } else { this.showPopupMedia(this.window_D5ABE731_DE62_2D21_41E9_2ED5ED01B107, this.video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787, this.PlayList_D2BAFB48_DE62_2560_41E3_0B3A98EB503D, '95%', '95%', true, true) }",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 7.96,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_9_0.png",
                                   "width": 118,
                                   "class": "ImageResourceLevel",
                                   "height": 118
                                  }
                                 ]
                                },
                                "pitch": 2.02,
                                "yaw": 60.38
                               }
                              ],
                              "id": "overlay_FAC3B108_F023_B5C2_41D0_0924B5263A18",
                              "enabledInCardboard": true
                             },
                             {
                              "popupMaxHeight": "95%",
                              "hideDuration": 500,
                              "yaw": 60.38,
                              "showDuration": 500,
                              "class": "PopupPanoramaOverlay",
                              "rotationY": 0,
                              "hideEasing": "cubic_out",
                              "rotationX": 0,
                              "autoplay": true,
                              "hfov": 7.96,
                              "loop": false,
                              "id": "popup_86BC6426_88BB_A07B_41C5_61F799090724",
                              "pitch": 2.02,
                              "rotationZ": 0,
                              "popupDistance": 100,
                              "popupMaxWidth": "95%",
                              "showEasing": "cubic_in",
                              "video": {
                               "width": 1280,
                               "height": 720,
                               "class": "VideoResource",
                               "mp4Url": "media/video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787.mp4"
                              }
                             }
                            ],
                            "thumbnailUrl": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_t.jpg",
                            "cube": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_hq.jpeg",
                               "width": 10224,
                               "tags": [
                                "oculusgo",
                                "ipadpro"
                               ],
                               "class": "ImageResourceLevel",
                               "height": 1704
                              },
                              {
                               "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15.jpeg",
                               "width": 6144,
                               "class": "ImageResourceLevel",
                               "height": 1024
                              }
                             ]
                            },
                            "class": "CubicPanoramaFrame"
                           }
                          ],
                          "hfovMax": 120,
                          "partial": false,
                          "adjacentPanoramas": [
                           {
                            "backwardYaw": 20.72,
                            "panorama": "this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1",
                            "yaw": 2.7,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "backwardYaw": -144.74,
                            "panorama": {
                             "mapLocations": [
                              {
                               "map": {
                                "fieldOfViewOverlayInsideColor": "#000000",
                                "class": "Map",
                                "fieldOfViewOverlayOutsideColor": "#000000",
                                "thumbnailUrl": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_t.png",
                                "id": "map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
                                "minimumZoomFactor": 0.5,
                                "overlays": [
                                 {
                                  "useHandCursor": true,
                                  "map": {
                                   "width": 50,
                                   "x": 280.3,
                                   "class": "HotspotMapOverlayMap",
                                   "offsetX": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_HS_0_map.gif",
                                      "width": 25,
                                      "class": "ImageResourceLevel",
                                      "height": 24
                                     }
                                    ]
                                   },
                                   "offsetY": 0,
                                   "height": 50,
                                   "y": 228.1
                                  },
                                  "rollOverDisplay": false,
                                  "data": {
                                   "label": "Image"
                                  },
                                  "class": "AreaHotspotMapOverlay",
                                  "areas": [
                                   {
                                    "mapColor": "#FF0000",
                                    "click": "this.mainPlayList.set('selectedIndex', 18)",
                                    "class": "HotspotMapOverlayArea"
                                   }
                                  ],
                                  "id": "overlay_E2A9E771_EFFC_6DAB_41ED_732E2F091F5A",
                                  "image": {
                                   "x": 280.3,
                                   "class": "HotspotMapOverlayImage",
                                   "y": 228.1,
                                   "width": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_HS_0.png",
                                      "width": 50,
                                      "class": "ImageResourceLevel",
                                      "height": 49
                                     }
                                    ]
                                   },
                                   "height": 50
                                  }
                                 }
                                ],
                                "label": "Costa-Rica-Map",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C.png",
                                   "width": 500,
                                   "class": "ImageResourceLevel",
                                   "height": 563
                                  }
                                 ]
                                },
                                "width": 500,
                                "initialZoomFactor": 1,
                                "fieldOfViewOverlayRadiusScale": 0.33,
                                "scaleMode": "fit_inside",
                                "fieldOfViewOverlayOutsideOpacity": 0,
                                "maximumZoomFactor": 1.2,
                                "fieldOfViewOverlayInsideOpacity": 0.4,
                                "height": 563
                               },
                               "x": 305.3,
                               "angle": 93.36,
                               "class": "PanoramaMapLocation",
                               "y": 253.1
                              }
                             ],
                             "vfov": 180,
                             "class": "Panorama",
                             "thumbnailUrl": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_t.jpg",
                             "id": "panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
                             "label": "Cartago City",
                             "pitch": 0,
                             "hfov": 360,
                             "hfovMin": 80,
                             "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [],
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "image",
                                   "click": "this.startPanoramaWithCamera(this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15, this.camera_D054FE26_DE61_DF20_41CD_C3BDCF669BB1); this.mainPlayList.set('selectedIndex', 0)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 7.9,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_7_0.png",
                                      "width": 118,
                                      "class": "ImageResourceLevel",
                                      "height": 118
                                     }
                                    ]
                                   },
                                   "pitch": 1.37,
                                   "yaw": -144.74
                                  }
                                 ],
                                 "id": "overlay_E5CD8369_EF1C_25BA_41E1_3E44CA6907EB",
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [],
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "image",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, null, null, null, null, null, false)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.24,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_5_0.png",
                                      "width": 122,
                                      "class": "ImageResourceLevel",
                                      "height": 106
                                     }
                                    ]
                                   },
                                   "pitch": 0.52,
                                   "yaw": 85.84
                                  }
                                 ],
                                 "id": "overlay_E5DFA8E5_EF2C_64AA_41E7_45A9551591C4",
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [],
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "image",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, null, null, null, null, null, false)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.24,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_4_0.png",
                                      "width": 122,
                                      "class": "ImageResourceLevel",
                                      "height": 104
                                     }
                                    ]
                                   },
                                   "pitch": 0.27,
                                   "yaw": 43.77
                                  }
                                 ],
                                 "id": "overlay_E420ED42_EF2C_5DE9_41E2_85CF49AA9D29",
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [],
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "image",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, this.ImageResource_E252A6BD_EF1D_EC9A_41D3_31F4A8966575, null, null, null, null, false)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 6.64,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_3_0.png",
                                      "width": 99,
                                      "class": "ImageResourceLevel",
                                      "height": 104
                                     }
                                    ]
                                   },
                                   "pitch": 7.67,
                                   "yaw": -73.96
                                  }
                                 ],
                                 "id": "overlay_E5C47084_EF2D_E36A_41D0_6FB86F1AA8C0",
                                 "enabledInCardboard": true
                                },
                                {
                                 "popupMaxHeight": "95%",
                                 "hideDuration": 500,
                                 "yaw": 43.77,
                                 "showDuration": 500,
                                 "class": "PopupPanoramaOverlay",
                                 "rotationY": 0,
                                 "hideEasing": "cubic_out",
                                 "rotationX": 0,
                                 "rotationZ": 0,
                                 "hfov": 8.24,
                                 "id": "popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6",
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "url": "media/popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6_0_0.jpg",
                                    "width": 787,
                                    "class": "ImageResourceLevel",
                                    "height": 552
                                   },
                                   {
                                    "url": "media/popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6_0_1.jpg",
                                    "width": 512,
                                    "class": "ImageResourceLevel",
                                    "height": 359
                                   }
                                  ]
                                 },
                                 "pitch": 0.27,
                                 "popupDistance": 100,
                                 "popupMaxWidth": "95%",
                                 "showEasing": "cubic_in"
                                },
                                {
                                 "popupMaxHeight": "95%",
                                 "hideDuration": 500,
                                 "yaw": 85.84,
                                 "showDuration": 500,
                                 "class": "PopupPanoramaOverlay",
                                 "rotationY": 0,
                                 "hideEasing": "cubic_out",
                                 "rotationX": 0,
                                 "rotationZ": 0,
                                 "hfov": 8.24,
                                 "id": "popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C",
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "url": "media/popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C_0_0.jpg",
                                    "width": 800,
                                    "class": "ImageResourceLevel",
                                    "height": 535
                                   },
                                   {
                                    "url": "media/popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C_0_1.jpg",
                                    "width": 512,
                                    "class": "ImageResourceLevel",
                                    "height": 342
                                   }
                                  ]
                                 },
                                 "pitch": 0.52,
                                 "popupDistance": 100,
                                 "popupMaxWidth": "95%",
                                 "showEasing": "cubic_in"
                                },
                                "this.popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865",
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_2_0_map.gif",
                                      "width": 53,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "yaw": -132.82,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 1.59,
                                   "hfov": 17.78
                                  }
                                 ],
                                 "data": {
                                  "label": "La Lima"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 17.78,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_2_0.png",
                                      "width": 265,
                                      "class": "ImageResourceLevel",
                                      "height": 80
                                     }
                                    ]
                                   },
                                   "pitch": 1.59,
                                   "yaw": -132.82,
                                   "distance": 50
                                  }
                                 ],
                                 "id": "overlay_E37E9453_EF2C_E3EE_41CE_DD0115CEB1E5",
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_1_0_map.gif",
                                      "width": 80,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "yaw": 61,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 0.49,
                                   "hfov": 27.31
                                  }
                                 ],
                                 "data": {
                                  "label": "TEC University"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 27.31,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_1_0.png",
                                      "width": 407,
                                      "class": "ImageResourceLevel",
                                      "height": 81
                                     }
                                    ]
                                   },
                                   "pitch": 0.49,
                                   "yaw": 61,
                                   "distance": 50
                                  }
                                 ],
                                 "id": "overlay_E29702E5_EF2C_24AA_41DF_D1E8119A0A3F",
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [],
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "image",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, this.ImageResource_E253E6BD_EF1D_EC9A_41EA_C503E65D3053, null, null, null, null, false)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 6.66,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_0_0.png",
                                      "width": 99,
                                      "class": "ImageResourceLevel",
                                      "height": 99
                                     }
                                    ]
                                   },
                                   "pitch": -5.64,
                                   "yaw": -123.25
                                  }
                                 ],
                                 "id": "overlay_E4BB9F35_EF34_3DAA_41DC_06016B04BD96",
                                 "enabledInCardboard": true
                                },
                                {
                                 "popupMaxHeight": "95%",
                                 "hideDuration": 500,
                                 "yaw": -123.25,
                                 "showDuration": 500,
                                 "class": "PopupPanoramaOverlay",
                                 "rotationY": 0,
                                 "hideEasing": "cubic_out",
                                 "rotationX": 0,
                                 "rotationZ": 0,
                                 "hfov": 6.66,
                                 "id": "popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43",
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_1.jpg",
                                    "width": 1024,
                                    "class": "ImageResourceLevel",
                                    "height": 632
                                   }
                                  ]
                                 },
                                 "pitch": -5.64,
                                 "popupDistance": 100,
                                 "popupMaxWidth": "95%",
                                 "showEasing": "cubic_in"
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_11_0_map.gif",
                                      "width": 24,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "yaw": -116.34,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -5.8,
                                   "hfov": 8.66
                                  }
                                 ],
                                 "data": {
                                  "label": "INA"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.66,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_11_0.png",
                                      "width": 129,
                                      "class": "ImageResourceLevel",
                                      "height": 85
                                     }
                                    ]
                                   },
                                   "pitch": -5.8,
                                   "yaw": -116.34,
                                   "distance": 50
                                  }
                                 ],
                                 "id": "overlay_E63D12C8_F662_39DB_4170_7EF640601D86",
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_10_0_map.gif",
                                      "width": 52,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "yaw": 97.38,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 1.23,
                                   "hfov": 15.83
                                  }
                                 ],
                                 "data": {
                                  "label": "Basilica"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 15.83,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_10_0.png",
                                      "width": 236,
                                      "class": "ImageResourceLevel",
                                      "height": 72
                                     }
                                    ]
                                   },
                                   "pitch": 1.23,
                                   "yaw": 97.38,
                                   "distance": 50
                                  }
                                 ],
                                 "id": "overlay_E75D89D8_F662_2BFB_41BB_D9250A0A17F6",
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_9_0_map.gif",
                                      "width": 39,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "yaw": -64.87,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 7.99,
                                   "hfov": 12.22
                                  }
                                 ],
                                 "data": {
                                  "label": "Irazu"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 12.22,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_9_0.png",
                                      "width": 184,
                                      "class": "ImageResourceLevel",
                                      "height": 74
                                     }
                                    ]
                                   },
                                   "pitch": 7.99,
                                   "yaw": -64.87,
                                   "distance": 50
                                  }
                                 ],
                                 "id": "overlay_E6D140FE_F662_D9B7_41ED_B6DDE5F11AEE",
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [],
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "image",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_3CC23B7F_107F_4540_4180_ABF478E71F9A, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, this.ImageResource_20FB6245_107F_4740_41A8_9C0A46A92B4D, null, null, null, null, false)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 6.7,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_12_0.png",
                                      "width": 99,
                                      "class": "ImageResourceLevel",
                                      "height": 104
                                     }
                                    ]
                                   },
                                   "pitch": -0.52,
                                   "yaw": -105.77
                                  }
                                 ],
                                 "id": "overlay_39C6394A_1091_C543_41A0_4400E90D35FB",
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_13_0_map.gif",
                                      "width": 63,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "yaw": -104.29,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 3.74,
                                   "hfov": 19.47
                                  }
                                 ],
                                 "data": {
                                  "label": "Bus Station"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 19.47,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_13_0.png",
                                      "width": 291,
                                      "class": "ImageResourceLevel",
                                      "height": 73
                                     }
                                    ]
                                   },
                                   "pitch": 3.74,
                                   "yaw": -104.29,
                                   "distance": 50
                                  }
                                 ],
                                 "id": "overlay_381D894C_1071_C540_41AF_D6F0E2E79C30",
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [],
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "image",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_3BBE3C5B_107F_C340_4178_756995F5135C, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, null, null, null, null, null, false)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 6.69,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_14_0.png",
                                      "width": 99,
                                      "class": "ImageResourceLevel",
                                      "height": 103
                                     }
                                    ]
                                   },
                                   "pitch": -2.91,
                                   "yaw": -99.48
                                  }
                                 ],
                                 "id": "overlay_3A9BE60C_1071_4EC7_41AC_F23BD1106998",
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_15_0_map.gif",
                                      "width": 66,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "yaw": -85.73,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -2.84,
                                   "hfov": 22.05
                                  }
                                 ],
                                 "data": {
                                  "label": "Train Station"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 22.05,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_15_0.png",
                                      "width": 329,
                                      "class": "ImageResourceLevel",
                                      "height": 79
                                     }
                                    ]
                                   },
                                   "pitch": -2.84,
                                   "yaw": -85.73,
                                   "distance": 50
                                  }
                                 ],
                                 "id": "overlay_3BFABA4C_1071_4740_4194_C4FC9991EEE4",
                                 "enabledInCardboard": true
                                },
                                {
                                 "popupMaxHeight": "95%",
                                 "hideDuration": 500,
                                 "yaw": -105.77,
                                 "showDuration": 500,
                                 "class": "PopupPanoramaOverlay",
                                 "rotationY": 0,
                                 "hideEasing": "cubic_out",
                                 "rotationX": 0,
                                 "rotationZ": 0,
                                 "hfov": 6.7,
                                 "id": "popup_3CC23B7F_107F_4540_4180_ABF478E71F9A",
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_1.jpg",
                                    "width": 1024,
                                    "class": "ImageResourceLevel",
                                    "height": 767
                                   }
                                  ]
                                 },
                                 "pitch": -0.52,
                                 "popupDistance": 100,
                                 "popupMaxWidth": "95%",
                                 "showEasing": "cubic_in"
                                },
                                {
                                 "popupMaxHeight": "95%",
                                 "hideDuration": 500,
                                 "yaw": -99.48,
                                 "showDuration": 500,
                                 "class": "PopupPanoramaOverlay",
                                 "rotationY": 0,
                                 "hideEasing": "cubic_out",
                                 "rotationX": 0,
                                 "rotationZ": 0,
                                 "hfov": 6.69,
                                 "id": "popup_3BBE3C5B_107F_C340_4178_756995F5135C",
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "url": "media/popup_3BBE3C5B_107F_C340_4178_756995F5135C_0_0.jpg",
                                    "width": 941,
                                    "class": "ImageResourceLevel",
                                    "height": 641
                                   },
                                   {
                                    "url": "media/popup_3BBE3C5B_107F_C340_4178_756995F5135C_0_1.jpg",
                                    "width": 511,
                                    "class": "ImageResourceLevel",
                                    "height": 348
                                   }
                                  ]
                                 },
                                 "pitch": -2.91,
                                 "popupDistance": 100,
                                 "popupMaxWidth": "95%",
                                 "showEasing": "cubic_in"
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [],
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "image",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_209897EC_11B3_4D40_41A2_837DB50E3A59, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, null, null, null, null, null, false)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 6.69,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_16_0.png",
                                      "width": 99,
                                      "class": "ImageResourceLevel",
                                      "height": 103
                                     }
                                    ]
                                   },
                                   "pitch": 2,
                                   "yaw": -80.67
                                  }
                                 ],
                                 "id": "overlay_212C2018_11B1_C2CF_4164_CA1A96AC721E",
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_17_0_map.gif",
                                      "width": 59,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "yaw": -69.51,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 1.99,
                                   "hfov": 17.1
                                  }
                                 ],
                                 "data": {
                                  "label": "COVAO"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 17.1,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_17_0.png",
                                      "width": 255,
                                      "class": "ImageResourceLevel",
                                      "height": 69
                                     }
                                    ]
                                   },
                                   "pitch": 1.99,
                                   "yaw": -69.51,
                                   "distance": 50
                                  }
                                 ],
                                 "id": "overlay_21F8CB1B_11B7_C6C1_41A4_790E87B46214",
                                 "enabledInCardboard": true
                                },
                                {
                                 "popupMaxHeight": "95%",
                                 "hideDuration": 500,
                                 "yaw": -80.67,
                                 "showDuration": 500,
                                 "class": "PopupPanoramaOverlay",
                                 "rotationY": 0,
                                 "hideEasing": "cubic_out",
                                 "rotationX": 0,
                                 "rotationZ": 0,
                                 "hfov": 6.69,
                                 "id": "popup_209897EC_11B3_4D40_41A2_837DB50E3A59",
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "url": "media/popup_209897EC_11B3_4D40_41A2_837DB50E3A59_0_0.jpg",
                                    "width": 960,
                                    "class": "ImageResourceLevel",
                                    "height": 720
                                   },
                                   {
                                    "url": "media/popup_209897EC_11B3_4D40_41A2_837DB50E3A59_0_1.jpg",
                                    "width": 512,
                                    "class": "ImageResourceLevel",
                                    "height": 384
                                   }
                                  ]
                                 },
                                 "pitch": 2,
                                 "popupDistance": 100,
                                 "popupMaxWidth": "95%",
                                 "showEasing": "cubic_in"
                                }
                               ],
                               "thumbnailUrl": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_t.jpg",
                               "cube": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_hq.jpeg",
                                  "width": 10224,
                                  "tags": [
                                   "oculusgo",
                                   "ipadpro"
                                  ],
                                  "class": "ImageResourceLevel",
                                  "height": 1704
                                 },
                                 {
                                  "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B.jpeg",
                                  "width": 6144,
                                  "class": "ImageResourceLevel",
                                  "height": 1024
                                 }
                                ]
                               },
                               "class": "CubicPanoramaFrame"
                              }
                             ],
                             "hfovMax": 120,
                             "partial": false,
                             "adjacentPanoramas": [
                              {
                               "backwardYaw": 175.65,
                               "panorama": "this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15",
                               "yaw": -144.74,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              }
                             ]
                            },
                            "yaw": 175.65,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           }
                          ]
                         }
                        },
                        {
                         "backwardYaw": -145.66,
                         "panorama": {
                          "mapLocations": [
                           {
                            "map": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
                            "x": 26.55,
                            "angle": 136.79,
                            "class": "PanoramaMapLocation",
                            "y": 159.55
                           }
                          ],
                          "vfov": 180,
                          "class": "Panorama",
                          "thumbnailUrl": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_t.jpg",
                          "id": "panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E",
                          "hfov": 360,
                          "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
                          "pitch": 0,
                          "hfovMax": 120,
                          "label": "CC_Project_1",
                          "frames": [
                           {
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "maps": [],
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_2C7FFD45_279C_C425_4191_328659A964C7, this.camera_D3725D2C_DE61_DD20_41E3_6C449B4E3716); this.mainPlayList.set('selectedIndex', 11)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.27,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_0_HS_0_0.png",
                                   "width": 59,
                                   "class": "ImageResourceLevel",
                                   "height": 59
                                  }
                                 ]
                                },
                                "pitch": 2.72,
                                "yaw": -145.66
                               }
                              ],
                              "id": "overlay_2BCB7F16_279C_C426_41B9_765CC69671D6",
                              "enabledInCardboard": true
                             },
                             {
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "maps": [],
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_2BBC8600_279C_C41B_41AA_7212826C3A68, this.camera_D365BD1D_DE62_22E1_41E9_8FDDB177C48C); this.mainPlayList.set('selectedIndex', 10)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.27,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_0_HS_1_0.png",
                                   "width": 59,
                                   "class": "ImageResourceLevel",
                                   "height": 59
                                  }
                                 ]
                                },
                                "pitch": -2.54,
                                "yaw": -53.51
                               }
                              ],
                              "id": "overlay_2BCB6F16_279C_C426_41BF_B6222A173D20",
                              "enabledInCardboard": true
                             },
                             {
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "maps": [],
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337, this.camera_D298CD0D_DE62_22E0_41D3_D22902961E97); this.mainPlayList.set('selectedIndex', 16)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 7.28,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_0_HS_2_0.png",
                                   "width": 87,
                                   "class": "ImageResourceLevel",
                                   "height": 86
                                  }
                                 ]
                                },
                                "pitch": 19.18,
                                "yaw": -66.61
                               }
                              ],
                              "id": "overlay_2BCB4F16_279C_C426_4133_E14B33B03FC4",
                              "enabledInCardboard": true
                             },
                             {
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "maps": [],
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7, this.camera_D37F7D2C_DE61_DD20_41E4_8D7BA098EDDA); this.mainPlayList.set('selectedIndex', 17)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.18,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_0_HS_4_0.png",
                                   "width": 58,
                                   "class": "ImageResourceLevel",
                                   "height": 59
                                  }
                                 ]
                                },
                                "pitch": -2.31,
                                "yaw": -129.41
                               }
                              ],
                              "id": "overlay_2BCB8F16_279C_C427_41AE_7785314B102C",
                              "enabledInCardboard": true
                             },
                             {
                              "bleaching": 0.7,
                              "yaw": 153.93,
                              "class": "LensFlarePanoramaOverlay",
                              "pitch": 62.05,
                              "id": "overlay_39C85BAF_37C2_ECC0_41C5_2D737B82A895",
                              "bleachingDistance": 0.4
                             },
                             {
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "maps": [],
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "image",
                                "click": "this.mainPlayList.set('selectedIndex', 0)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 13.01,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_0_HS_5_0.png",
                                   "width": 150,
                                   "class": "ImageResourceLevel",
                                   "height": 150
                                  }
                                 ]
                                },
                                "pitch": -9.27,
                                "yaw": 49.94
                               }
                              ],
                              "id": "overlay_32611913_3C9A_8BBB_41AA_B761E002E74F",
                              "enabledInCardboard": true
                             }
                            ],
                            "thumbnailUrl": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_hq.jpeg",
                               "width": 4096,
                               "tags": [
                                "oculusgo",
                                "ipadpro"
                               ],
                               "class": "ImageResourceLevel",
                               "height": 2048
                              },
                              {
                               "url": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E.jpeg",
                               "width": 3217,
                               "class": "ImageResourceLevel",
                               "height": 1608
                              }
                             ]
                            }
                           }
                          ],
                          "hfovMin": 80,
                          "partial": false,
                          "adjacentPanoramas": [
                           {
                            "backwardYaw": -29.95,
                            "panorama": "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337",
                            "yaw": -66.61,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15"
                           },
                           {
                            "backwardYaw": 149.67,
                            "panorama": {
                             "mapLocations": [
                              {
                               "map": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
                               "x": 93.5,
                               "angle": 118.81,
                               "class": "PanoramaMapLocation",
                               "y": 161.55
                              }
                             ],
                             "vfov": 180,
                             "class": "Panorama",
                             "thumbnailUrl": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_t.jpg",
                             "id": "panorama_2BBC8600_279C_C41B_41AA_7212826C3A68",
                             "hfov": 360,
                             "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
                             "pitch": 0,
                             "hfovMax": 120,
                             "label": "CC_Project_2",
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [],
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "image",
                                   "click": "this.mainPlayList.set('selectedIndex', 11)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 6.27,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_0_HS_0_0.png",
                                      "width": 71,
                                      "class": "ImageResourceLevel",
                                      "height": 72
                                     }
                                    ]
                                   },
                                   "pitch": 1.33,
                                   "yaw": -144.52
                                  }
                                 ],
                                 "id": "overlay_2BBCE600_279C_C41B_41A5_3384CAD7C738",
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [],
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "image",
                                   "click": "this.startPanoramaWithCamera(this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E, this.camera_D1E5FF70_DE61_DD20_41DB_00BF36013DA9); this.mainPlayList.set('selectedIndex', 9)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 6.26,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_0_HS_1_0.png",
                                      "width": 71,
                                      "class": "ImageResourceLevel",
                                      "height": 72
                                     }
                                    ]
                                   },
                                   "pitch": -3.74,
                                   "yaw": 149.67
                                  }
                                 ],
                                 "id": "overlay_2BBCD600_279C_C41B_41B7_32915E7BCA74",
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [],
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "image",
                                   "click": "this.mainPlayList.set('selectedIndex', 17)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 6.18,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_0_HS_2_0.png",
                                      "width": 71,
                                      "class": "ImageResourceLevel",
                                      "height": 72
                                     }
                                    ]
                                   },
                                   "pitch": -10.22,
                                   "yaw": -147.58
                                  }
                                 ],
                                 "id": "overlay_2BBCC600_279C_C41B_41AE_900AEF9C3B88",
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [],
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "image",
                                   "click": "this.startPanoramaWithCamera(this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337, this.camera_D1F74F7F_DE61_DD20_41D0_A45A9DB1E0C5); this.mainPlayList.set('selectedIndex', 16)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 6.13,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_0_HS_3_0.png",
                                      "width": 72,
                                      "class": "ImageResourceLevel",
                                      "height": 71
                                     }
                                    ]
                                   },
                                   "pitch": 14.28,
                                   "yaw": -81.45
                                  }
                                 ],
                                 "id": "overlay_2BBD3600_279C_C41B_41C0_C312927E4A82",
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [],
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "image",
                                   "click": "this.startPanoramaWithCamera(this.panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E, this.camera_D11ADF60_DE61_DD20_41CA_FD4F0E609C96); this.mainPlayList.set('selectedIndex', 15)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.18,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_0_HS_5_0.png",
                                      "width": 58,
                                      "class": "ImageResourceLevel",
                                      "height": 59
                                     }
                                    ]
                                   },
                                   "pitch": -2.56,
                                   "yaw": -34.91
                                  }
                                 ],
                                 "id": "overlay_2BBD1600_279C_C41B_41BA_AED3959B497C",
                                 "enabledInCardboard": true
                                },
                                {
                                 "bleaching": 0.7,
                                 "yaw": 169.42,
                                 "class": "LensFlarePanoramaOverlay",
                                 "pitch": 63.93,
                                 "id": "overlay_39D5CF6C_37C2_E447_41A8_3301DA4EA642",
                                 "bleachingDistance": 0.4
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [],
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "image",
                                   "click": "this.mainPlayList.set('selectedIndex', 0)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 12.5,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_0_HS_6_0.png",
                                      "width": 150,
                                      "class": "ImageResourceLevel",
                                      "height": 150
                                     }
                                    ]
                                   },
                                   "pitch": -18.56,
                                   "yaw": 145.47
                                  }
                                 ],
                                 "id": "overlay_32585F73_3C96_8674_415C_ACF54E6DE46E",
                                 "enabledInCardboard": true
                                }
                               ],
                               "thumbnailUrl": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_hq.jpeg",
                                  "width": 4096,
                                  "tags": [
                                   "oculusgo",
                                   "ipadpro"
                                  ],
                                  "class": "ImageResourceLevel",
                                  "height": 2048
                                 },
                                 {
                                  "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68.jpeg",
                                  "width": 3217,
                                  "class": "ImageResourceLevel",
                                  "height": 1608
                                 }
                                ]
                               }
                              }
                             ],
                             "hfovMin": 80,
                             "partial": false,
                             "adjacentPanoramas": [
                              {
                               "backwardYaw": -132.65,
                               "panorama": "this.panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E",
                               "yaw": -34.91,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "backwardYaw": -53.51,
                               "panorama": "this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E",
                               "yaw": 149.67,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7"
                              },
                              {
                               "backwardYaw": -43.54,
                               "panorama": "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337",
                               "yaw": -81.45,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15"
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_2C7FFD45_279C_C425_4191_328659A964C7"
                              }
                             ]
                            },
                            "yaw": -53.51,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "backwardYaw": -55.33,
                            "panorama": "this.panorama_2C7FFD45_279C_C425_4191_328659A964C7",
                            "yaw": -145.66,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "backwardYaw": -20.63,
                            "panorama": "this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7",
                            "yaw": -129.41,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           }
                          ]
                         },
                         "yaw": -55.33,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "backwardYaw": 10.35,
                         "panorama": "this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA",
                         "yaw": -141.39,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "backwardYaw": 138.73,
                         "panorama": "this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7",
                         "yaw": -86,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        }
                       ]
                      },
                      "yaw": 10.35,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "backwardYaw": 88.96,
                      "panorama": {
                       "mapLocations": [
                        {
                         "map": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
                         "x": 151.5,
                         "angle": 277.61,
                         "class": "PanoramaMapLocation",
                         "y": 91.55
                        }
                       ],
                       "vfov": 180,
                       "class": "Panorama",
                       "thumbnailUrl": "media/panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686_t.jpg",
                       "id": "panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686",
                       "hfov": 360,
                       "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
                       "pitch": 0,
                       "hfovMax": 120,
                       "label": "CC_Project_5",
                       "frames": [
                        {
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA, this.camera_D3397D6B_DE61_DD20_41DB_69F413D313D6); this.mainPlayList.set('selectedIndex', 12)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 11.23,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686_0_HS_0_0.png",
                                "width": 128,
                                "class": "ImageResourceLevel",
                                "height": 130
                               }
                              ]
                             },
                             "pitch": 7.6,
                             "yaw": 88.96
                            }
                           ],
                           "id": "overlay_2CFA6C5B_279C_C42D_41BA_47146D607154",
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337, this.camera_D32E7D5B_DE61_DD60_41E1_439ACDC2BB0F); this.mainPlayList.set('selectedIndex', 16)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 2.25,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686_0_HS_1_0.png",
                                "width": 130,
                                "class": "ImageResourceLevel",
                                "height": 128
                               }
                              ]
                             },
                             "pitch": 78.67,
                             "yaw": -3.16
                            }
                           ],
                           "id": "overlay_2CFA9C5B_279C_C42D_41AF_1F1894A7C795",
                           "enabledInCardboard": true
                          },
                          {
                           "bleaching": 0.7,
                           "yaw": 29.28,
                           "class": "LensFlarePanoramaOverlay",
                           "pitch": 62.05,
                           "id": "overlay_39C862BC_37C2_BCC7_41B5_FB4C51602CA1",
                           "bleachingDistance": 0.4
                          }
                         ],
                         "thumbnailUrl": "media/panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686_t.jpg",
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686_hq.jpeg",
                            "width": 4096,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ],
                            "class": "ImageResourceLevel",
                            "height": 2048
                           },
                           {
                            "url": "media/panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686.jpeg",
                            "width": 3217,
                            "class": "ImageResourceLevel",
                            "height": 1608
                           }
                          ]
                         }
                        }
                       ],
                       "hfovMin": 80,
                       "partial": false,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": 24.93,
                         "panorama": "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337",
                         "yaw": -3.16,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "backwardYaw": -81.03,
                         "panorama": "this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA",
                         "yaw": 88.96,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        }
                       ]
                      },
                      "yaw": -81.03,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     }
                    ]
                   },
                   "yaw": -52.44,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ]
                },
                "yaw": -17.47,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "backwardYaw": -34.91,
                "panorama": "this.panorama_2BBC8600_279C_C41B_41AA_7212826C3A68",
                "yaw": -132.65,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ]
             },
             "yaw": -121.05,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15"
            },
            {
             "backwardYaw": -81.45,
             "panorama": "this.panorama_2BBC8600_279C_C41B_41AA_7212826C3A68",
             "yaw": -43.54,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": -66.61,
             "panorama": "this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E",
             "yaw": -29.95,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": -82.7,
             "panorama": "this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA",
             "yaw": 85.67,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": -115.43,
             "panorama": "this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7",
             "yaw": 8.58,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": -82.08,
             "panorama": "this.panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1",
             "yaw": 158.83,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": -102.17,
             "panorama": "this.panorama_2C7FFD45_279C_C425_4191_328659A964C7",
             "yaw": 32.03,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": -3.16,
             "panorama": "this.panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686",
             "yaw": 24.93,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ]
          },
          "yaw": -115.43,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15"
         },
         {
          "backwardYaw": -129.41,
          "panorama": "this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E",
          "yaw": -20.63,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "backwardYaw": -86,
          "panorama": "this.panorama_2C7FFD45_279C_C425_4191_328659A964C7",
          "yaw": 138.73,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "backwardYaw": 103.06,
          "panorama": "this.panorama_5F372E49_160C_6584_4186_1E0077946A37",
          "yaw": 163.35,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ]
       }
      },
      {
       "backwardYaw": -109.06,
       "panorama": "this.panorama_5F372E49_160C_6584_4186_1E0077946A37",
       "yaw": -40.82,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "backwardYaw": 2.7,
       "panorama": "this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15",
       "yaw": 20.72,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "backwardYaw": 105.2,
       "panorama": "this.panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56",
       "yaw": -79.36,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ]
    },
    "yaw": -109.06,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "backwardYaw": -91.69,
    "panorama": {
     "mapLocations": [
      {
       "map": {
        "fieldOfViewOverlayInsideColor": "#000000",
        "class": "Map",
        "fieldOfViewOverlayOutsideColor": "#000000",
        "thumbnailUrl": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_t.png",
        "id": "map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
        "minimumZoomFactor": 0.5,
        "overlays": [
         {
          "useHandCursor": true,
          "map": {
           "width": 30,
           "x": 202.7,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_0_map.gif",
              "width": 14,
              "class": "ImageResourceLevel",
              "height": 15
             }
            ]
           },
           "offsetY": 0,
           "height": 30,
           "y": 419.55
          },
          "rollOverDisplay": true,
          "data": {
           "label": "Image"
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 1)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "id": "overlay_C10F34C4_DD09_E665_41EB_0E9F8F32C5EE",
          "image": {
           "x": 202.7,
           "class": "HotspotMapOverlayImage",
           "y": 419.55,
           "width": 30,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_0.png",
              "width": 29,
              "class": "ImageResourceLevel",
              "height": 30
             }
            ]
           },
           "height": 30
          }
         },
         {
          "useHandCursor": true,
          "map": {
           "width": 30,
           "x": 200.7,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_1_map.gif",
              "width": 14,
              "class": "ImageResourceLevel",
              "height": 15
             }
            ]
           },
           "offsetY": 0,
           "height": 30,
           "y": 104.65
          },
          "rollOverDisplay": true,
          "data": {
           "label": "Image"
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 3)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "id": "overlay_C057DBDB_DD0A_6267_41DF_74197503054E",
          "image": {
           "x": 200.7,
           "class": "HotspotMapOverlayImage",
           "y": 104.65,
           "width": 30,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_1.png",
              "width": 29,
              "class": "ImageResourceLevel",
              "height": 30
             }
            ]
           },
           "height": 30
          }
         },
         {
          "useHandCursor": true,
          "map": {
           "width": 30,
           "x": 71.7,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_2_map.gif",
              "width": 14,
              "class": "ImageResourceLevel",
              "height": 15
             }
            ]
           },
           "offsetY": 0,
           "height": 30,
           "y": 106.65
          },
          "rollOverDisplay": true,
          "data": {
           "label": "Image"
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 31)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "id": "overlay_C1A62C4E_DD0B_E665_41E4_24E80204A343",
          "image": {
           "x": 71.7,
           "class": "HotspotMapOverlayImage",
           "y": 106.65,
           "width": 30,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_2.png",
              "width": 29,
              "class": "ImageResourceLevel",
              "height": 30
             }
            ]
           },
           "height": 30
          }
         },
         {
          "useHandCursor": true,
          "map": {
           "width": 30,
           "x": 73.7,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_3_map.gif",
              "width": 14,
              "class": "ImageResourceLevel",
              "height": 15
             }
            ]
           },
           "offsetY": 0,
           "height": 30,
           "y": 213.55
          },
          "rollOverDisplay": true,
          "data": {
           "label": "Image"
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 32)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "id": "overlay_C0CBF35A_DD0A_E26D_41D4_D1DC41F86387",
          "image": {
           "x": 73.7,
           "class": "HotspotMapOverlayImage",
           "y": 213.55,
           "width": 30,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_3.png",
              "width": 29,
              "class": "ImageResourceLevel",
              "height": 30
             }
            ]
           },
           "height": 30
          }
         },
         {
          "useHandCursor": true,
          "map": {
           "width": 30,
           "x": 302.7,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_4_map.gif",
              "width": 14,
              "class": "ImageResourceLevel",
              "height": 15
             }
            ]
           },
           "offsetY": 0,
           "height": 30,
           "y": 203.55
          },
          "rollOverDisplay": true,
          "data": {
           "label": "Image"
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 5)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "id": "overlay_C01B30DE_DD09_BE65_41DD_D62C14826FDF",
          "image": {
           "x": 302.7,
           "class": "HotspotMapOverlayImage",
           "y": 203.55,
           "width": 30,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_4.png",
              "width": 29,
              "class": "ImageResourceLevel",
              "height": 30
             }
            ]
           },
           "height": 30
          }
         },
         {
          "useHandCursor": true,
          "map": {
           "width": 30,
           "x": 328.6,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_5_map.gif",
              "width": 14,
              "class": "ImageResourceLevel",
              "height": 15
             }
            ]
           },
           "offsetY": 0,
           "height": 30,
           "y": 317.55
          },
          "rollOverDisplay": true,
          "data": {
           "label": "Image"
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 4)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "id": "overlay_C332A511_DD0E_A7FC_41E4_2786EB8DD2F7",
          "image": {
           "x": 328.6,
           "class": "HotspotMapOverlayImage",
           "y": 317.55,
           "width": 30,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_5.png",
              "width": 29,
              "class": "ImageResourceLevel",
              "height": 30
             }
            ]
           },
           "height": 30
          }
         },
         {
          "useHandCursor": true,
          "map": {
           "width": 30,
           "x": 200.7,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_6_map.gif",
              "width": 14,
              "class": "ImageResourceLevel",
              "height": 15
             }
            ]
           },
           "offsetY": 0,
           "height": 30,
           "y": 361.6
          },
          "rollOverDisplay": true,
          "data": {
           "label": "Image"
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 6)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "id": "overlay_C0B9B7F7_DD0E_6224_41E8_445361C5C9E4",
          "image": {
           "x": 200.7,
           "class": "HotspotMapOverlayImage",
           "y": 361.6,
           "width": 30,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_6.png",
              "width": 29,
              "class": "ImageResourceLevel",
              "height": 30
             }
            ]
           },
           "height": 30
          }
         },
         {
          "useHandCursor": true,
          "map": {
           "width": 30,
           "x": 318.7,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_7_map.gif",
              "width": 14,
              "class": "ImageResourceLevel",
              "height": 15
             }
            ]
           },
           "offsetY": 0,
           "height": 30,
           "y": 215.55
          },
          "rollOverDisplay": true,
          "data": {
           "label": "Image"
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 33)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "id": "overlay_C3F85A31_DD0F_E23C_41DC_6258471D9794",
          "image": {
           "x": 318.7,
           "class": "HotspotMapOverlayImage",
           "y": 215.55,
           "width": 30,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_7.png",
              "width": 29,
              "class": "ImageResourceLevel",
              "height": 30
             }
            ]
           },
           "height": 30
          }
         },
         {
          "useHandCursor": true,
          "map": {
           "width": 30,
           "x": 203.65,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_8_map.gif",
              "width": 14,
              "class": "ImageResourceLevel",
              "height": 15
             }
            ]
           },
           "offsetY": 0,
           "height": 30,
           "y": 85.55
          },
          "rollOverDisplay": true,
          "data": {
           "label": "Image"
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 35)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "id": "overlay_C30E80C5_DD0E_9E67_41E5_F7EA65B0847D",
          "image": {
           "x": 203.65,
           "class": "HotspotMapOverlayImage",
           "y": 85.55,
           "width": 30,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_8.png",
              "width": 29,
              "class": "ImageResourceLevel",
              "height": 30
             }
            ]
           },
           "height": 30
          }
         },
         {
          "useHandCursor": true,
          "map": {
           "width": 30,
           "x": 66.65,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_9_map.gif",
              "width": 14,
              "class": "ImageResourceLevel",
              "height": 15
             }
            ]
           },
           "offsetY": 0,
           "height": 30,
           "y": 217.55
          },
          "rollOverDisplay": true,
          "data": {
           "label": "Image"
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 34)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "id": "overlay_C3598F78_DD0E_622C_41E9_FCE2210BA50E",
          "image": {
           "x": 66.65,
           "class": "HotspotMapOverlayImage",
           "y": 217.55,
           "width": 30,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_9.png",
              "width": 29,
              "class": "ImageResourceLevel",
              "height": 30
             }
            ]
           },
           "height": 30
          }
         },
         {
          "useHandCursor": true,
          "map": {
           "width": 30,
           "x": 236.65,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_10_map.gif",
              "width": 14,
              "class": "ImageResourceLevel",
              "height": 15
             }
            ]
           },
           "offsetY": 0,
           "height": 30,
           "y": 304.6
          },
          "rollOverDisplay": true,
          "data": {
           "label": "Image"
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "id": "overlay_C3A2F1BB_DD09_9E2C_41E6_AEB47B5FEE36",
          "image": {
           "x": 236.65,
           "class": "HotspotMapOverlayImage",
           "y": 304.6,
           "width": 30,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_10.png",
              "width": 29,
              "class": "ImageResourceLevel",
              "height": 30
             }
            ]
           },
           "height": 30
          }
         },
         {
          "useHandCursor": true,
          "map": {
           "width": 30,
           "x": 202.7,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_11_map.gif",
              "width": 14,
              "class": "ImageResourceLevel",
              "height": 15
             }
            ]
           },
           "offsetY": 0,
           "height": 30,
           "y": 264.55
          },
          "rollOverDisplay": true,
          "data": {
           "label": "Image"
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "id": "overlay_C3966761_DD0A_E25F_41D3_527C5C447FFE",
          "image": {
           "x": 202.7,
           "class": "HotspotMapOverlayImage",
           "y": 264.55,
           "width": 30,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_11.png",
              "width": 29,
              "class": "ImageResourceLevel",
              "height": 30
             }
            ]
           },
           "height": 30
          }
         },
         {
          "useHandCursor": true,
          "map": {
           "width": 30,
           "x": 207.7,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_12_map.gif",
              "width": 14,
              "class": "ImageResourceLevel",
              "height": 15
             }
            ]
           },
           "offsetY": 0,
           "height": 30,
           "y": 160.55
          },
          "rollOverDisplay": true,
          "data": {
           "label": "Image"
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "id": "overlay_C2AD60A4_DD09_9E24_41E0_BE7A28E7C8F8",
          "image": {
           "x": 207.7,
           "class": "HotspotMapOverlayImage",
           "y": 160.55,
           "width": 30,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_12.png",
              "width": 29,
              "class": "ImageResourceLevel",
              "height": 30
             }
            ]
           },
           "height": 30
          }
         },
         {
          "useHandCursor": true,
          "map": {
           "width": 30,
           "x": 227.65,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_13_map.gif",
              "width": 15,
              "class": "ImageResourceLevel",
              "height": 15
             }
            ]
           },
           "offsetY": 0,
           "height": 30,
           "y": 415.8
          },
          "rollOverDisplay": true,
          "data": {
           "label": "Image"
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 8)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "id": "overlay_EFFAE3BA_DD3F_A22D_41DB_87FABC0F13CA",
          "image": {
           "x": 227.65,
           "class": "HotspotMapOverlayImage",
           "y": 415.8,
           "width": 30,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_13.png",
              "width": 30,
              "class": "ImageResourceLevel",
              "height": 30
             }
            ]
           },
           "height": 30
          }
         },
         {
          "useHandCursor": true,
          "map": {
           "width": 30,
           "x": 207.6,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_14_map.gif",
              "width": 15,
              "class": "ImageResourceLevel",
              "height": 15
             }
            ]
           },
           "offsetY": 0,
           "height": 30,
           "y": 215.15
          },
          "rollOverDisplay": true,
          "data": {
           "label": "Image"
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 37)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "id": "overlay_2A070BB7_27CE_576F_41AB_07E104B79EC6",
          "image": {
           "x": 207.6,
           "class": "HotspotMapOverlayImage",
           "y": 215.15,
           "width": 30,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_14.png",
              "width": 30,
              "class": "ImageResourceLevel",
              "height": 30
             }
            ]
           },
           "height": 30
          }
         },
         {
          "useHandCursor": true,
          "map": {
           "width": 30,
           "x": 174.85,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_15_map.gif",
              "width": 15,
              "class": "ImageResourceLevel",
              "height": 15
             }
            ]
           },
           "offsetY": 0,
           "height": 30,
           "y": 187.8
          },
          "rollOverDisplay": true,
          "data": {
           "label": "Image"
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 2)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "id": "overlay_376F3930_27CA_D361_4190_7CF2D4BA616B",
          "image": {
           "x": 174.85,
           "class": "HotspotMapOverlayImage",
           "y": 187.8,
           "width": 30,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_15.png",
              "width": 30,
              "class": "ImageResourceLevel",
              "height": 30
             }
            ]
           },
           "height": 30
          }
         },
         {
          "useHandCursor": true,
          "map": {
           "width": 30,
           "x": 202.9,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_16_map.gif",
              "width": 15,
              "class": "ImageResourceLevel",
              "height": 15
             }
            ]
           },
           "offsetY": 0,
           "height": 30,
           "y": 75.95
          },
          "rollOverDisplay": true,
          "data": {
           "label": "Image"
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 7)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "id": "overlay_3778DCE6_27D7_D2E1_41C3_D9B03693BA2C",
          "image": {
           "x": 202.9,
           "class": "HotspotMapOverlayImage",
           "y": 75.95,
           "width": 30,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_16.png",
              "width": 30,
              "class": "ImageResourceLevel",
              "height": 30
             }
            ]
           },
           "height": 30
          }
         },
         {
          "useHandCursor": true,
          "map": {
           "width": 30,
           "x": 58.95,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_17_map.gif",
              "width": 15,
              "class": "ImageResourceLevel",
              "height": 15
             }
            ]
           },
           "offsetY": 0,
           "height": 30,
           "y": 99.95
          },
          "rollOverDisplay": true,
          "data": {
           "label": "Image"
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 36)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "id": "overlay_3686017A_27D6_53E6_41C2_468B88D59841",
          "image": {
           "x": 58.95,
           "class": "HotspotMapOverlayImage",
           "y": 99.95,
           "width": 30,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_17.png",
              "width": 30,
              "class": "ImageResourceLevel",
              "height": 30
             }
            ]
           },
           "height": 30
          }
         }
        ],
        "label": "Planta",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070.png",
           "width": 415,
           "class": "ImageResourceLevel",
           "height": 558
          }
         ]
        },
        "width": 415,
        "initialZoomFactor": 1,
        "fieldOfViewOverlayRadiusScale": 0.19,
        "scaleMode": "fit_inside",
        "fieldOfViewOverlayOutsideOpacity": 0,
        "maximumZoomFactor": 1.2,
        "fieldOfViewOverlayInsideOpacity": 0.4,
        "height": 558
       },
       "x": 217.7,
       "angle": -83.39,
       "class": "PanoramaMapLocation",
       "y": 434.55
      }
     ],
     "vfov": 180,
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_t.jpg",
     "id": "panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
     "label": "Lobby",
     "pitch": 0,
     "hfov": 360,
     "hfovMin": 80,
     "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
     "frames": [
      {
       "overlays": [
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_D3B8EDC8_DE61_DD60_41E4_6FA86771D03B); this.mainPlayList.set('selectedIndex', 37)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_1_0.png",
              "width": 119,
              "class": "ImageResourceLevel",
              "height": 119
             }
            ]
           },
           "pitch": -5.46,
           "yaw": 87.33
          }
         ],
         "id": "overlay_D2A966DF_DC6A_7B64_41DD_D822CC7BCA86",
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104, this.camera_D38BBDD8_DE61_DD60_41DD_978763804A87); this.mainPlayList.set('selectedIndex', 8)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.7,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_0_0.png",
              "width": 117,
              "class": "ImageResourceLevel",
              "height": 118
             }
            ]
           },
           "pitch": -13.09,
           "yaw": -176.55
          }
         ],
         "id": "overlay_D319ECF0_DC6A_6F3C_41EA_8C8FADFED6AD",
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_5F372E49_160C_6584_4186_1E0077946A37, this.camera_D3965DE8_DE61_DD20_41EB_045E3ED55EA2); this.mainPlayList.set('selectedIndex', 30)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.84,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_2_0.png",
              "width": 119,
              "class": "ImageResourceLevel",
              "height": 119
             }
            ]
           },
           "pitch": -12.75,
           "yaw": -91.69
          }
         ],
         "id": "overlay_D614592A_DCA8_1C07_41D4_0BED3A3F1AB1",
         "enabledInCardboard": true
        },
        {
         "bleaching": 0.7,
         "yaw": -92.76,
         "class": "LensFlarePanoramaOverlay",
         "pitch": -1.05,
         "id": "overlay_D7DEC935_DCEA_FB36_41D7_D4FB63048649",
         "bleachingDistance": 0.4
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.showPopupPanoramaOverlay(this.popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, this.ImageResource_C406C318_D4FF_7ACD_41B8_0A98872E7CE5, null, null, null, null, false)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.64,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_6_0.png",
              "width": 122,
              "class": "ImageResourceLevel",
              "height": 103
             }
            ]
           },
           "pitch": -21.91,
           "yaw": 7.39
          }
         ],
         "id": "overlay_D926478A_D4EF_39C2_41AE_D01A03A371F6",
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "maps": [],
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "image",
           "click": "this.showPopupPanoramaOverlay(this.popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, this.ImageResource_C4896E50_D4F3_6B5D_41D3_2EEBDC3443C4, null, null, null, null, false)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.04,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_7_0.png",
              "width": 122,
              "class": "ImageResourceLevel",
              "height": 103
             }
            ]
           },
           "pitch": -12.51,
           "yaw": 163.85
          }
         ],
         "id": "overlay_D9A90784_D4ED_39C5_4189_5758A99D263E",
         "enabledInCardboard": true
        },
        {
         "popupMaxHeight": "95%",
         "hideDuration": 500,
         "yaw": 163.85,
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "rotationY": 0,
         "hideEasing": "cubic_out",
         "rotationX": 0,
         "rotationZ": 0,
         "hfov": 8.04,
         "id": "popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_2.jpg",
            "width": 1024,
            "class": "ImageResourceLevel",
            "height": 682
           }
          ]
         },
         "pitch": -12.51,
         "popupDistance": 100,
         "popupMaxWidth": "95%",
         "showEasing": "cubic_in"
        },
        {
         "popupMaxHeight": "95%",
         "hideDuration": 500,
         "yaw": 7.39,
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "rotationY": 0,
         "hideEasing": "cubic_out",
         "rotationX": 0,
         "rotationZ": 0,
         "hfov": 7.64,
         "id": "popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_2.jpg",
            "width": 1024,
            "class": "ImageResourceLevel",
            "height": 682
           }
          ]
         },
         "pitch": -21.91,
         "popupDistance": 100,
         "popupMaxWidth": "95%",
         "showEasing": "cubic_in"
        }
       ],
       "thumbnailUrl": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_t.jpg",
       "cube": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_hq.jpeg",
          "width": 10224,
          "tags": [
           "oculusgo",
           "ipadpro"
          ],
          "class": "ImageResourceLevel",
          "height": 1704
         },
         {
          "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6.jpeg",
          "width": 6144,
          "class": "ImageResourceLevel",
          "height": 1024
         }
        ]
       },
       "class": "CubicPanoramaFrame"
      }
     ],
     "hfovMax": 120,
     "partial": false,
     "adjacentPanoramas": [
      {
       "backwardYaw": 32.92,
       "panorama": {
        "mapLocations": [
         {
          "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
          "x": 222.6,
          "angle": 138.19,
          "class": "PanoramaMapLocation",
          "y": 230.15
         }
        ],
        "vfov": 180,
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_t.jpg",
        "id": "panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
        "label": "asensores",
        "pitch": 0,
        "hfov": 360,
        "hfovMin": 80,
        "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
        "frames": [
         {
          "overlays": [
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_D0D8BEB3_DE61_DF20_41E0_B405527CA896); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.87,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_0_0.png",
                 "width": 117,
                 "class": "ImageResourceLevel",
                 "height": 118
                }
               ]
              },
              "pitch": -4.96,
              "yaw": 32.92
             }
            ],
            "id": "overlay_28CE795F_2513_8FCA_4188_1998B7E06EBC",
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3, this.camera_D0ABBEC2_DE61_DF60_41E0_C8B719062876); this.mainPlayList.set('selectedIndex', 2)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.88,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_1_0.png",
                 "width": 118,
                 "class": "ImageResourceLevel",
                 "height": 117
                }
               ]
              },
              "pitch": -8.74,
              "yaw": -166.68
             }
            ],
            "id": "overlay_2B261325_2512_837E_41B0_050021E9F08E",
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_D0B51ED2_DE61_DF60_41E8_CB48CC26A1C7); this.mainPlayList.set('selectedIndex', 6)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.82,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_2_0.png",
                 "width": 117,
                 "class": "ImageResourceLevel",
                 "height": 118
                }
               ]
              },
              "pitch": -8,
              "yaw": -76.25
             }
            ],
            "id": "overlay_2AFE1E17_2516_855A_41C1_80A7DE3B763C",
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_D0864EE2_DE61_DF20_41C4_255F15C16B5F); this.mainPlayList.set('selectedIndex', 7)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.72,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_3_0.png",
                 "width": 117,
                 "class": "ImageResourceLevel",
                 "height": 118
                }
               ]
              },
              "pitch": -12.22,
              "yaw": -16.11
             }
            ],
            "id": "overlay_2AA13E2D_2512_854F_417F_F5763DB0AB5B",
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_D0CF1EA3_DE61_DF20_41CA_494AD945DD3A); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.82,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_4_0.png",
                 "width": 118,
                 "class": "ImageResourceLevel",
                 "height": 118
                }
               ]
              },
              "pitch": -8.17,
              "yaw": -139.07
             }
            ],
            "id": "overlay_354312DB_254C_E20F_41B9_80BC77A75D32",
            "enabledInCardboard": true
           },
           {
            "bleaching": 0.7,
            "yaw": -108.98,
            "class": "LensFlarePanoramaOverlay",
            "pitch": 44.67,
            "id": "overlay_39E9E5BE_37C2_E4C0_41C8_ED2101A9B7E1",
            "bleachingDistance": 0.4
           },
           {
            "bleaching": 0.7,
            "yaw": 14.17,
            "class": "LensFlarePanoramaOverlay",
            "pitch": 28.8,
            "id": "overlay_39F9CEF7_37C2_E441_4193_83EA81D1DE6F",
            "bleachingDistance": 0.4
           }
          ],
          "thumbnailUrl": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_hq.jpeg",
             "width": 5376,
             "tags": [
              "oculusgo",
              "ipadpro"
             ],
             "class": "ImageResourceLevel",
             "height": 2688
            },
            {
             "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F.jpeg",
             "width": 3217,
             "class": "ImageResourceLevel",
             "height": 1608
            }
           ]
          }
         }
        ],
        "hfovMax": 120,
        "partial": false,
        "adjacentPanoramas": [
         {
          "backwardYaw": 96.47,
          "panorama": {
           "mapLocations": [
            {
             "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
             "x": 215.7,
             "angle": 87.93,
             "class": "PanoramaMapLocation",
             "y": 119.65
            }
           ],
           "vfov": 180,
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_t.jpg",
           "id": "panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
           "label": "Main Floor",
           "pitch": 0,
           "hfov": 360,
           "hfovMin": 80,
           "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
           "frames": [
            {
             "overlays": [
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_D34B5BE4_DE62_2520_41E5_F569333D9189); this.mainPlayList.set('selectedIndex', 37)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.88,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_0_HS_1_0.png",
                    "width": 120,
                    "class": "ImageResourceLevel",
                    "height": 120
                   }
                  ]
                 },
                 "pitch": -11.41,
                 "yaw": 96.47
                }
               ],
               "id": "overlay_D3E0C739_DC56_B92C_41E9_6C44CB4D0781",
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_D3787BD4_DE62_2560_41E3_6600E2F5AD09); this.mainPlayList.set('selectedIndex', 31)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.97,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_0_HS_0_0.png",
                    "width": 120,
                    "class": "ImageResourceLevel",
                    "height": 120
                   }
                  ]
                 },
                 "pitch": -7.14,
                 "yaw": -176.41
                }
               ],
               "id": "overlay_D3BB78D6_DC56_5764_41BF_4CD3DB34B52B",
               "enabledInCardboard": true
              },
              {
               "bleaching": 0.7,
               "yaw": -0.95,
               "class": "LensFlarePanoramaOverlay",
               "pitch": 19.14,
               "id": "overlay_D4BE7E36_DF66_3FBD_41E5_D711B6782282",
               "bleachingDistance": 0.4
              },
              {
               "bleaching": 0.7,
               "yaw": 164.38,
               "class": "LensFlarePanoramaOverlay",
               "pitch": 17.62,
               "id": "overlay_D4BB02EB_DF66_04AB_41E7_314E72AF48E7",
               "bleachingDistance": 0.4
              }
             ],
             "thumbnailUrl": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_t.jpg",
             "cube": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_hq.jpeg",
                "width": 10224,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "class": "ImageResourceLevel",
                "height": 1704
               },
               {
                "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0.jpeg",
                "width": 6144,
                "class": "ImageResourceLevel",
                "height": 1024
               }
              ]
             },
             "class": "CubicPanoramaFrame"
            }
           ],
           "hfovMax": 120,
           "partial": false,
           "adjacentPanoramas": [
            {
             "backwardYaw": 3.46,
             "panorama": {
              "mapLocations": [
               {
                "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                "x": 86.7,
                "angle": 80.77,
                "class": "PanoramaMapLocation",
                "y": 121.65
               }
              ],
              "vfov": 180,
              "class": "Panorama",
              "thumbnailUrl": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_t.jpg",
              "id": "panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
              "label": "9",
              "pitch": 0,
              "hfov": 360,
              "hfovMin": 80,
              "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
              "frames": [
               {
                "overlays": [
                 {
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_D0791E07_DE61_DEE0_41E3_8775019C0999); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.86,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_0_HS_1_0.png",
                       "width": 118,
                       "class": "ImageResourceLevel",
                       "height": 119
                      }
                     ]
                    },
                    "pitch": -5.56,
                    "yaw": 3.46
                   }
                  ],
                  "id": "overlay_CC5E5224_DC56_7B24_41D5_3769EA774666",
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_D0442E07_DE61_DEE0_41E8_D0D3EE044379); this.mainPlayList.set('selectedIndex', 32)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.85,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_0_HS_0_0.png",
                       "width": 118,
                       "class": "ImageResourceLevel",
                       "height": 119
                      }
                     ]
                    },
                    "pitch": -6.24,
                    "yaw": 99.45
                   }
                  ],
                  "id": "overlay_CCE05196_DC55_F9E4_41C9_7E05949C0230",
                  "enabledInCardboard": true
                 },
                 {
                  "bleaching": 0.7,
                  "yaw": -0.57,
                  "class": "LensFlarePanoramaOverlay",
                  "pitch": 16.86,
                  "id": "overlay_D364F048_DF66_03D5_41E1_5EA3BC9637F0",
                  "bleachingDistance": 0.4
                 },
                 {
                  "bleaching": 0.7,
                  "yaw": 164.38,
                  "class": "LensFlarePanoramaOverlay",
                  "pitch": 16.1,
                  "id": "overlay_D37D2F7A_DF66_1DB5_41C0_1FB80896FEB3",
                  "bleachingDistance": 0.4
                 }
                ],
                "thumbnailUrl": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_t.jpg",
                "cube": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_hq.jpeg",
                   "width": 10224,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ],
                   "class": "ImageResourceLevel",
                   "height": 1704
                  },
                  {
                   "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B.jpeg",
                   "width": 6144,
                   "class": "ImageResourceLevel",
                   "height": 1024
                  }
                 ]
                },
                "class": "CubicPanoramaFrame"
               }
              ],
              "hfovMax": 120,
              "partial": false,
              "adjacentPanoramas": [
               {
                "backwardYaw": -176.41,
                "panorama": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
                "yaw": 3.46,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "backwardYaw": -85.38,
                "panorama": {
                 "mapLocations": [
                  {
                   "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                   "x": 88.7,
                   "angle": 83.39,
                   "class": "PanoramaMapLocation",
                   "y": 228.55
                  }
                 ],
                 "vfov": 180,
                 "class": "Panorama",
                 "thumbnailUrl": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_t.jpg",
                 "id": "panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
                 "label": "14",
                 "pitch": 0,
                 "hfov": 360,
                 "hfovMin": 80,
                 "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
                 "frames": [
                  {
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_D339DC13_DE62_22E0_41E0_2A4D459750E9); this.mainPlayList.set('selectedIndex', 31)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.88,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_1_0.png",
                          "width": 118,
                          "class": "ImageResourceLevel",
                          "height": 118
                         }
                        ]
                       },
                       "pitch": -4.65,
                       "yaw": -85.38
                      }
                     ],
                     "id": "overlay_CC04F239_DC5A_BB2F_41D9_32A30344941E",
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_D32EEC13_DE62_22E0_41D5_5B0487E0C050); this.mainPlayList.set('selectedIndex', 5)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.87,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_0_0.png",
                          "width": 118,
                          "class": "ImageResourceLevel",
                          "height": 118
                         }
                        ]
                       },
                       "pitch": -5.22,
                       "yaw": 72.07
                      }
                     ],
                     "id": "overlay_CD93F058_DCAA_D76C_41E3_66E7F2CC4E96",
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "image",
                       "click": "this.showPopupPanoramaOverlay(this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, this.ImageResource_D082516E_DCEA_7368_41CB_9D0CFA830713, null, null, null, null, false)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.22,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_4_0.png",
                          "width": 123,
                          "class": "ImageResourceLevel",
                          "height": 104
                         }
                        ]
                       },
                       "pitch": -3.43,
                       "yaw": -36.13
                      }
                     ],
                     "id": "overlay_D67088C0_DCEE_3198_41E6_EACE23A23D4D",
                     "enabledInCardboard": true
                    },
                    {
                     "popupMaxHeight": "95%",
                     "hideDuration": 500,
                     "yaw": -36.13,
                     "showDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "rotationY": 0,
                     "hideEasing": "cubic_out",
                     "rotationX": 0,
                     "rotationZ": 0,
                     "hfov": 8.22,
                     "id": "popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_1.jpg",
                        "width": 1024,
                        "class": "ImageResourceLevel",
                        "height": 682
                       }
                      ]
                     },
                     "pitch": -3.43,
                     "popupDistance": 100,
                     "popupMaxWidth": "95%",
                     "showEasing": "cubic_in"
                    },
                    {
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "image",
                       "click": "this.showPopupPanoramaOverlay(this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, this.ImageResource_D38C2C6E_DFA1_73F8_41C3_8C1C155D72CB, null, null, null, null, false)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.15,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_3_0.png",
                          "width": 123,
                          "class": "ImageResourceLevel",
                          "height": 104
                         }
                        ]
                       },
                       "pitch": -8.1,
                       "yaw": -170.82
                      }
                     ],
                     "id": "overlay_D623BF6C_DCE9_EF68_41E5_EA1EE4AA1D99",
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "image",
                       "click": "this.showPopupPanoramaOverlay(this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, this.ImageResource_D09DC170_DCEA_7378_41EB_423962A6DDEA, null, null, null, null, false)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.24,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_2_0.png",
                          "width": 123,
                          "class": "ImageResourceLevel",
                          "height": 104
                         }
                        ]
                       },
                       "pitch": -0.5,
                       "yaw": 102.19
                      }
                     ],
                     "id": "overlay_D644FD83_DCEA_5398_41CF_FDE7075B148D",
                     "enabledInCardboard": true
                    },
                    {
                     "popupMaxHeight": "95%",
                     "hideDuration": 500,
                     "yaw": 102.19,
                     "showDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "rotationY": 0,
                     "hideEasing": "cubic_out",
                     "rotationX": 0,
                     "rotationZ": 0,
                     "hfov": 8.24,
                     "id": "popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_1.jpg",
                        "width": 1024,
                        "class": "ImageResourceLevel",
                        "height": 682
                       }
                      ]
                     },
                     "pitch": -0.5,
                     "popupDistance": 100,
                     "popupMaxWidth": "95%",
                     "showEasing": "cubic_in"
                    },
                    {
                     "bleaching": 0.7,
                     "yaw": 4,
                     "class": "LensFlarePanoramaOverlay",
                     "pitch": 29.81,
                     "id": "overlay_D4A17713_DF66_0D7B_41EA_88920C3D3D96",
                     "bleachingDistance": 0.4
                    },
                    {
                     "bleaching": 0.7,
                     "yaw": 125.52,
                     "class": "LensFlarePanoramaOverlay",
                     "pitch": 33.62,
                     "id": "overlay_D4BC6C09_DF66_0357_41CE_9C3B75EE1C61",
                     "bleachingDistance": 0.4
                    },
                    {
                     "bleaching": 0.7,
                     "yaw": -105.71,
                     "class": "LensFlarePanoramaOverlay",
                     "pitch": 19.14,
                     "id": "overlay_D4BAE022_DF66_0355_41EA_F8574F4021B9",
                     "bleachingDistance": 0.4
                    },
                    {
                     "popupMaxHeight": "95%",
                     "hideDuration": 500,
                     "yaw": -170.82,
                     "showDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "rotationY": 0,
                     "hideEasing": "cubic_out",
                     "rotationX": 0,
                     "rotationZ": 0,
                     "hfov": 8.15,
                     "id": "popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_1.jpg",
                        "width": 1024,
                        "class": "ImageResourceLevel",
                        "height": 777
                       }
                      ]
                     },
                     "pitch": -8.1,
                     "popupDistance": 100,
                     "popupMaxWidth": "95%",
                     "showEasing": "cubic_in"
                    }
                   ],
                   "thumbnailUrl": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_t.jpg",
                   "cube": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_hq.jpeg",
                      "width": 10224,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ],
                      "class": "ImageResourceLevel",
                      "height": 1704
                     },
                     {
                      "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A.jpeg",
                      "width": 6144,
                      "class": "ImageResourceLevel",
                      "height": 1024
                     }
                    ]
                   },
                   "class": "CubicPanoramaFrame"
                  }
                 ],
                 "hfovMax": 120,
                 "partial": false,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": -117.42,
                   "panorama": {
                    "mapLocations": [
                     {
                      "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                      "x": 317.7,
                      "angle": 92.31,
                      "class": "PanoramaMapLocation",
                      "y": 218.55
                     }
                    ],
                    "vfov": 180,
                    "class": "Panorama",
                    "thumbnailUrl": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_t.jpg",
                    "id": "panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
                    "label": "Conference Room",
                    "pitch": 0,
                    "hfov": 360,
                    "hfovMin": 80,
                    "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
                    "frames": [
                     {
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "maps": [],
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_D06CEDF7_DE61_DD20_41C5_165688BDDC21); this.mainPlayList.set('selectedIndex', 32)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.02,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_0_HS_1_0.png",
                             "width": 120,
                             "class": "ImageResourceLevel",
                             "height": 120
                            }
                           ]
                          },
                          "pitch": -3.5,
                          "yaw": -117.42
                         }
                        ],
                        "id": "overlay_CDB4D373_DCAD_D923_41DA_BEF903345F6C",
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "maps": [],
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D, this.camera_D061BDE8_DE61_DD20_41D8_AA72D9753192); this.mainPlayList.set('selectedIndex', 4)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.9,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_0_HS_0_0.png",
                             "width": 120,
                             "class": "ImageResourceLevel",
                             "height": 120
                            }
                           ]
                          },
                          "pitch": -10.48,
                          "yaw": 66.4
                         }
                        ],
                        "id": "overlay_CD17C810_DCAE_D6FC_41E9_DAACF2C28087",
                        "enabledInCardboard": true
                       }
                      ],
                      "thumbnailUrl": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_t.jpg",
                      "cube": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_hq.jpeg",
                         "width": 10224,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ],
                         "class": "ImageResourceLevel",
                         "height": 1704
                        },
                        {
                         "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E.jpeg",
                         "width": 6144,
                         "class": "ImageResourceLevel",
                         "height": 1024
                        }
                       ]
                      },
                      "class": "CubicPanoramaFrame"
                     }
                    ],
                    "hfovMax": 120,
                    "partial": false,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": -176.35,
                      "panorama": {
                       "mapLocations": [
                        {
                         "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                         "x": 343.6,
                         "angle": -191.07,
                         "class": "PanoramaMapLocation",
                         "y": 332.55
                        }
                       ],
                       "vfov": 180,
                       "class": "Panorama",
                       "thumbnailUrl": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_t.jpg",
                       "id": "panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
                       "label": "Dining Room",
                       "pitch": 0,
                       "hfov": 360,
                       "hfovMin": 80,
                       "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
                       "frames": [
                        {
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_D3053C23_DE62_2321_41D1_DECBD587AD1F); this.mainPlayList.set('selectedIndex', 5)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 7.97,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_0_HS_0_0.png",
                                "width": 120,
                                "class": "ImageResourceLevel",
                                "height": 119
                               }
                              ]
                             },
                             "pitch": -7.24,
                             "yaw": -176.35
                            }
                           ],
                           "id": "overlay_CD4CB2EB_DCAE_5B2C_41DC_F7E2F745A878",
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "image",
                             "click": "this.showPopupPanoramaOverlay(this.popup_D60305E4_DCEA_D39F_419B_D9B149482827, {'pressedBackgroundColorDirection':'vertical','rollOverIconColor':'#CCCCCC','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0.09803921568627451],'rollOverBorderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'pressedBorderSize':0,'paddingTop':5,'pressedIconHeight':50,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'rollOverBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'iconHeight':50,'paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000'],'paddingLeft':5}, this.ImageResource_D09C8172_DCEA_737B_41C7_76727B821C90, null, null, null, null, false)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.23,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_0_HS_1_0.png",
                                "width": 123,
                                "class": "ImageResourceLevel",
                                "height": 103
                               }
                              ]
                             },
                             "pitch": -1.54,
                             "yaw": 72.56
                            }
                           ],
                           "id": "overlay_D672A178_DCEA_F368_41D5_479F8DEF3160",
                           "enabledInCardboard": true
                          },
                          {
                           "popupMaxHeight": "95%",
                           "hideDuration": 500,
                           "yaw": 72.56,
                           "showDuration": 500,
                           "class": "PopupPanoramaOverlay",
                           "rotationY": 0,
                           "hideEasing": "cubic_out",
                           "rotationX": 0,
                           "rotationZ": 0,
                           "hfov": 8.23,
                           "id": "popup_D60305E4_DCEA_D39F_419B_D9B149482827",
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_1.jpg",
                              "width": 1024,
                              "class": "ImageResourceLevel",
                              "height": 682
                             }
                            ]
                           },
                           "pitch": -1.54,
                           "popupDistance": 100,
                           "popupMaxWidth": "95%",
                           "showEasing": "cubic_in"
                          }
                         ],
                         "thumbnailUrl": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_t.jpg",
                         "cube": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_hq.jpeg",
                            "width": 10224,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ],
                            "class": "ImageResourceLevel",
                            "height": 1704
                           },
                           {
                            "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D.jpeg",
                            "width": 6144,
                            "class": "ImageResourceLevel",
                            "height": 1024
                           }
                          ]
                         },
                         "class": "CubicPanoramaFrame"
                        }
                       ],
                       "hfovMax": 120,
                       "partial": false,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": 66.4,
                         "panorama": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
                         "yaw": -176.35,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        }
                       ]
                      },
                      "yaw": 66.4,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "backwardYaw": 72.07,
                      "panorama": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
                      "yaw": -117.42,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     }
                    ]
                   },
                   "yaw": 72.07,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "backwardYaw": 99.45,
                   "panorama": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
                   "yaw": -85.38,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ]
                },
                "yaw": 99.45,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ]
             },
             "yaw": -176.41,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": -139.07,
             "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
             "yaw": 96.47,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ]
          },
          "yaw": -139.07,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "backwardYaw": 87.33,
          "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
          "yaw": 32.92,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "backwardYaw": 27.08,
          "panorama": {
           "mapLocations": [
            {
             "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
             "x": 189.85,
             "angle": 59.39,
             "class": "PanoramaMapLocation",
             "y": 202.8
            }
           ],
           "vfov": 180,
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_t.jpg",
           "id": "panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
           "label": "Restrooms",
           "pitch": 0,
           "hfov": 360,
           "hfovMin": 80,
           "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
           "frames": [
            {
             "overlays": [
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_D3047D6B_DE61_DD20_41D1_7663CD5D699D); this.mainPlayList.set('selectedIndex', 37)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.64,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_0_HS_0_0.png",
                    "width": 120,
                    "class": "ImageResourceLevel",
                    "height": 120
                   }
                  ]
                 },
                 "pitch": -18.14,
                 "yaw": 27.08
                }
               ],
               "id": "overlay_2B9DAFA3_2515_837B_41BD_B2A12DB79FE4",
               "enabledInCardboard": true
              },
              {
               "bleaching": 0.7,
               "yaw": -74.61,
               "class": "LensFlarePanoramaOverlay",
               "pitch": 59.4,
               "id": "overlay_FE341697_EE9B_B5BB_41CC_1DCF1E1B9FE9",
               "bleachingDistance": 0.4
              },
              {
               "bleaching": 0.7,
               "yaw": -13.79,
               "class": "LensFlarePanoramaOverlay",
               "pitch": 28.05,
               "id": "overlay_FE452B9D_EE9B_93AF_41C8_E05C00B1EC74",
               "bleachingDistance": 0.4
              },
              {
               "bleaching": 0.7,
               "yaw": -151.67,
               "class": "LensFlarePanoramaOverlay",
               "pitch": 31.07,
               "id": "overlay_FE59F0F5_EE9B_8D7F_41E8_C632466F366D",
               "bleachingDistance": 0.4
              }
             ],
             "thumbnailUrl": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_hq.jpeg",
                "width": 5376,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "class": "ImageResourceLevel",
                "height": 2688
               },
               {
                "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3.jpeg",
                "width": 3217,
                "class": "ImageResourceLevel",
                "height": 1608
               }
              ]
             }
            }
           ],
           "hfovMax": 120,
           "partial": false,
           "adjacentPanoramas": [
            {
             "backwardYaw": -166.68,
             "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
             "yaw": 27.08,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ]
          },
          "yaw": -166.68,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "backwardYaw": -170.05,
          "panorama": {
           "mapLocations": [
            {
             "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
             "x": 215.7,
             "angle": 177.75,
             "class": "PanoramaMapLocation",
             "y": 376.6
            }
           ],
           "vfov": 180,
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_t.jpg",
           "id": "panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
           "label": "Empty Shell",
           "pitch": 0,
           "hfov": 360,
           "hfovMin": 80,
           "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
           "frames": [
            {
             "overlays": [
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_D1720F11_DE61_DEE1_41B4_4BA577A3E0D6); this.mainPlayList.set('selectedIndex', 33)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.84,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_1_0.png",
                    "width": 118,
                    "class": "ImageResourceLevel",
                    "height": 119
                   }
                  ]
                 },
                 "pitch": -7.44,
                 "yaw": -134.96
                }
               ],
               "id": "overlay_CE8CA507_DCAE_5EE3_41E1_5677CFA0DCC5",
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_D1436F20_DE61_DD20_41DF_0A7702989987); this.mainPlayList.set('selectedIndex', 34)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.82,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_0_0.png",
                    "width": 118,
                    "class": "ImageResourceLevel",
                    "height": 119
                   }
                  ]
                 },
                 "pitch": -8.14,
                 "yaw": 147.18
                }
               ],
               "id": "overlay_CE501F2B_DCB6_692C_41E9_C5E62C500A79",
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_D14CDF30_DE61_DD20_41E6_BAC17C6B15F2); this.mainPlayList.set('selectedIndex', 37)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.89,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_3_0.png",
                    "width": 118,
                    "class": "ImageResourceLevel",
                    "height": 118
                   }
                  ]
                 },
                 "pitch": -2.91,
                 "yaw": -170.05
                }
               ],
               "id": "overlay_3690BC3C_2513_854E_41B9_F52311509481",
               "enabledInCardboard": true
              }
             ],
             "thumbnailUrl": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_t.jpg",
             "cube": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_hq.jpeg",
                "width": 10224,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "class": "ImageResourceLevel",
                "height": 1704
               },
               {
                "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F.jpeg",
                "width": 6144,
                "class": "ImageResourceLevel",
                "height": 1024
               }
              ]
             },
             "class": "CubicPanoramaFrame"
            }
           ],
           "hfovMax": 120,
           "partial": false,
           "adjacentPanoramas": [
            {
             "backwardYaw": 39.43,
             "panorama": {
              "mapLocations": [
               {
                "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                "x": 333.7,
                "angle": -175.06,
                "class": "PanoramaMapLocation",
                "y": 230.55
               }
              ],
              "vfov": 180,
              "class": "Panorama",
              "thumbnailUrl": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_t.jpg",
              "id": "panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
              "label": "18",
              "pitch": 0,
              "hfov": 360,
              "hfovMin": 80,
              "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
              "frames": [
               {
                "overlays": [
                 {
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_D3ADBDC8_DE61_DD60_41C3_B01C26293931); this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.84,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_0_HS_1_0.png",
                       "width": 118,
                       "class": "ImageResourceLevel",
                       "height": 119
                      }
                     ]
                    },
                    "pitch": -7.1,
                    "yaw": 39.43
                   }
                  ],
                  "id": "overlay_CE5312DE_DCB6_5B64_41BB_6CD92A705CA6",
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_D3A2ADB9_DE61_DD20_41E6_4F576500918E); this.mainPlayList.set('selectedIndex', 35)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.82,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_0_HS_0_0.png",
                       "width": 118,
                       "class": "ImageResourceLevel",
                       "height": 119
                      }
                     ]
                    },
                    "pitch": -8.27,
                    "yaw": 133.34
                   }
                  ],
                  "id": "overlay_CFB8AD78_DCB7_E92D_41BC_33566693B151",
                  "enabledInCardboard": true
                 }
                ],
                "thumbnailUrl": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_t.jpg",
                "cube": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_hq.jpeg",
                   "width": 10224,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ],
                   "class": "ImageResourceLevel",
                   "height": 1704
                  },
                  {
                   "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9.jpeg",
                   "width": 6144,
                   "class": "ImageResourceLevel",
                   "height": 1024
                  }
                 ]
                },
                "class": "CubicPanoramaFrame"
               }
              ],
              "hfovMax": 120,
              "partial": false,
              "adjacentPanoramas": [
               {
                "backwardYaw": -31.12,
                "panorama": {
                 "mapLocations": [
                  {
                   "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                   "x": 218.65,
                   "angle": 180,
                   "class": "PanoramaMapLocation",
                   "y": 100.55
                  }
                 ],
                 "vfov": 180,
                 "class": "Panorama",
                 "thumbnailUrl": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_t.jpg",
                 "id": "panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
                 "label": "19",
                 "pitch": 0,
                 "hfov": 360,
                 "hfovMin": 80,
                 "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
                 "frames": [
                  {
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_D2926CFD_DE62_2320_41D8_CB358AEAD50A); this.mainPlayList.set('selectedIndex', 33)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.98,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_1_0.png",
                          "width": 119,
                          "class": "ImageResourceLevel",
                          "height": 119
                         }
                        ]
                       },
                       "pitch": -7.02,
                       "yaw": -31.12
                      }
                     ],
                     "id": "overlay_CFB5EC7B_DCB6_6F2C_41DB_6256013DCD9F",
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "maps": [],
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_D2858CFD_DE62_2320_41E9_7CFC06678A94); this.mainPlayList.set('selectedIndex', 34)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.83,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_0_0.png",
                          "width": 118,
                          "class": "ImageResourceLevel",
                          "height": 119
                         }
                        ]
                       },
                       "pitch": -7.66,
                       "yaw": 56.43
                      }
                     ],
                     "id": "overlay_CF3BB706_DCB6_DAE5_41C3_D53007E5C556",
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_2_0_0_map.gif",
                          "width": 65,
                          "class": "ImageResourceLevel",
                          "height": 57
                         }
                        ]
                       },
                       "yaw": -1.47,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -8.5,
                       "hfov": 8.68
                      }
                     ],
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.mainPlayList.set('selectedIndex', 1)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.68,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_2_0.png",
                          "width": 131,
                          "class": "ImageResourceLevel",
                          "height": 115
                         }
                        ]
                       },
                       "pitch": -8.5,
                       "yaw": -1.47
                      }
                     ],
                     "id": "overlay_D6ACF640_DCF9_E25D_41B7_FC333768C35D",
                     "enabledInCardboard": true
                    }
                   ],
                   "thumbnailUrl": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_t.jpg",
                   "cube": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_hq.jpeg",
                      "width": 10224,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ],
                      "class": "ImageResourceLevel",
                      "height": 1704
                     },
                     {
                      "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09.jpeg",
                      "width": 6144,
                      "class": "ImageResourceLevel",
                      "height": 1024
                     }
                    ]
                   },
                   "class": "CubicPanoramaFrame"
                  }
                 ],
                 "hfovMax": 120,
                 "partial": false,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": -146.27,
                   "panorama": {
                    "mapLocations": [
                     {
                      "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                      "x": 81.65,
                      "angle": 171.27,
                      "class": "PanoramaMapLocation",
                      "y": 232.55
                     }
                    ],
                    "vfov": 180,
                    "class": "Panorama",
                    "thumbnailUrl": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_t.jpg",
                    "id": "panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
                    "label": "20",
                    "pitch": 0,
                    "hfov": 360,
                    "hfovMin": 80,
                    "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
                    "frames": [
                     {
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "maps": [],
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_D2CC605A_DE61_E360_41E8_5DDEA9922A81); this.mainPlayList.set('selectedIndex', 35)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.82,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_0_HS_1_0.png",
                             "width": 117,
                             "class": "ImageResourceLevel",
                             "height": 118
                            }
                           ]
                          },
                          "pitch": -8.35,
                          "yaw": -146.27
                         }
                        ],
                        "id": "overlay_CF2655CA_DCB5_F96D_41B7_34C2794364A6",
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "maps": [],
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_D2DA906A_DE61_E320_41DB_FB6C69E1F8CA); this.mainPlayList.set('selectedIndex', 6)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.84,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_0_HS_0_0.png",
                             "width": 117,
                             "class": "ImageResourceLevel",
                             "height": 118
                            }
                           ]
                          },
                          "pitch": -7.11,
                          "yaw": -34.22
                         }
                        ],
                        "id": "overlay_C886FB4D_DCBA_6967_415D_6C46FDD1DF7E",
                        "enabledInCardboard": true
                       }
                      ],
                      "thumbnailUrl": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_t.jpg",
                      "cube": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_hq.jpeg",
                         "width": 10224,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ],
                         "class": "ImageResourceLevel",
                         "height": 1704
                        },
                        {
                         "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8.jpeg",
                         "width": 6144,
                         "class": "ImageResourceLevel",
                         "height": 1024
                        }
                       ]
                      },
                      "class": "CubicPanoramaFrame"
                     }
                    ],
                    "hfovMax": 120,
                    "partial": false,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": 56.43,
                      "panorama": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
                      "yaw": -146.27,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "backwardYaw": 147.18,
                      "panorama": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
                      "yaw": -34.22,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     }
                    ]
                   },
                   "yaw": 56.43,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6"
                  },
                  {
                   "backwardYaw": 133.34,
                   "panorama": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
                   "yaw": -31.12,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ]
                },
                "yaw": 133.34,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "backwardYaw": -134.96,
                "panorama": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
                "yaw": 39.43,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ]
             },
             "yaw": -134.96,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": -34.22,
             "panorama": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
             "yaw": 147.18,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": -76.25,
             "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
             "yaw": -170.05,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ]
          },
          "yaw": -76.25,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "backwardYaw": -3.13,
          "panorama": {
           "mapLocations": [
            {
             "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
             "x": 217.9,
             "angle": 180,
             "class": "PanoramaMapLocation",
             "y": 90.95
            }
           ],
           "vfov": 180,
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_t.jpg",
           "id": "panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
           "label": "Parking Garage",
           "pitch": 0,
           "hfov": 360,
           "hfovMin": 80,
           "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
           "frames": [
            {
             "overlays": [
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_D3D7BDA9_DE61_DD20_41E8_90EDA6FBACEF); this.mainPlayList.set('selectedIndex', 37)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.9,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_0_HS_0_0.png",
                    "width": 118,
                    "class": "ImageResourceLevel",
                    "height": 119
                   }
                  ]
                 },
                 "pitch": -1.31,
                 "yaw": -3.13
                }
               ],
               "id": "overlay_358E55A7_2512_877B_41B8_E929438E29B7",
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175, this.camera_D3C48DA9_DE61_DD20_41CD_ED2041A2380E); this.mainPlayList.set('selectedIndex', 36)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.83,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_0_HS_1_0.png",
                    "width": 118,
                    "class": "ImageResourceLevel",
                    "height": 119
                   }
                  ]
                 },
                 "pitch": -7.96,
                 "yaw": 99.63
                }
               ],
               "id": "overlay_3737BAD2_2512_82DA_419C_050096C450A4",
               "enabledInCardboard": true
              }
             ],
             "thumbnailUrl": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_hq.jpeg",
                "width": 5376,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "class": "ImageResourceLevel",
                "height": 2688
               },
               {
                "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042.jpeg",
                "width": 3217,
                "class": "ImageResourceLevel",
                "height": 1608
               }
              ]
             }
            }
           ],
           "hfovMax": 120,
           "partial": false,
           "adjacentPanoramas": [
            {
             "backwardYaw": -61.02,
             "panorama": {
              "mapLocations": [
               {
                "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                "x": 73.95,
                "angle": -207.49,
                "class": "PanoramaMapLocation",
                "y": 114.95
               }
              ],
              "vfov": 180,
              "class": "Panorama",
              "thumbnailUrl": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_t.jpg",
              "id": "panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
              "label": "parking2",
              "pitch": 0,
              "hfov": 360,
              "hfovMin": 80,
              "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
              "frames": [
               {
                "overlays": [
                 {
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_D15DDF3F_DE61_DD20_41E0_4790E23CFBDA); this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.88,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_0_HS_0_0.png",
                       "width": 118,
                       "class": "ImageResourceLevel",
                       "height": 119
                      }
                     ]
                    },
                    "pitch": -3.91,
                    "yaw": -61.02
                   }
                  ],
                  "id": "overlay_3460957D_251D_87CE_4190_36CE7946E825",
                  "enabledInCardboard": true
                 },
                 {
                  "bleaching": 0.7,
                  "yaw": 95.38,
                  "class": "LensFlarePanoramaOverlay",
                  "pitch": 16.72,
                  "id": "overlay_39DF8AEE_37C2_AC40_417A_6242CBF48B68",
                  "bleachingDistance": 0.4
                 }
                ],
                "thumbnailUrl": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_hq.jpeg",
                   "width": 5376,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ],
                   "class": "ImageResourceLevel",
                   "height": 2688
                  },
                  {
                   "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175.jpeg",
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "height": 1608
                  }
                 ]
                }
               }
              ],
              "hfovMax": 120,
              "partial": false,
              "adjacentPanoramas": [
               {
                "backwardYaw": 99.63,
                "panorama": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
                "yaw": -61.02,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ]
             },
             "yaw": 99.63,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": -16.11,
             "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
             "yaw": -3.13,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ]
          },
          "yaw": -16.11,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ]
       },
       "yaw": 87.33,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "backwardYaw": 176.9,
       "panorama": {
        "mapLocations": [
         {
          "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
          "x": 242.65,
          "angle": -267.85,
          "class": "PanoramaMapLocation",
          "y": 430.8
         }
        ],
        "vfov": 180,
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_t.jpg",
        "id": "panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
        "label": "3_1",
        "pitch": 0,
        "hfov": 360,
        "hfovMin": 80,
        "cardboardMenu": "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
        "frames": [
         {
          "overlays": [
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_D1C08F7F_DE61_DD20_41B6_CE065C4F1815); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.73,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_0_HS_0_0.png",
                 "width": 120,
                 "class": "ImageResourceLevel",
                 "height": 120
                }
               ]
              },
              "pitch": -15.9,
              "yaw": 176.9
             }
            ],
            "id": "overlay_D329AC1C_DC55_AEE5_41D2_6176DAFC3236",
            "enabledInCardboard": true
           }
          ],
          "thumbnailUrl": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_t.jpg",
          "cube": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_hq.jpeg",
             "width": 10224,
             "tags": [
              "oculusgo",
              "ipadpro"
             ],
             "class": "ImageResourceLevel",
             "height": 1704
            },
            {
             "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104.jpeg",
             "width": 6144,
             "class": "ImageResourceLevel",
             "height": 1024
            }
           ]
          },
          "class": "CubicPanoramaFrame"
         }
        ],
        "hfovMax": 120,
        "partial": false,
        "adjacentPanoramas": [
         {
          "backwardYaw": -176.55,
          "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
          "yaw": 176.9,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ]
       },
       "yaw": -176.55,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "backwardYaw": 53.21,
       "panorama": "this.panorama_5F372E49_160C_6584_4186_1E0077946A37",
       "yaw": -91.69,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ]
    },
    "yaw": 53.21,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56"
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_474FEAEC_160C_229C_41B5_A893F886FCB3"
   },
   {
    "backwardYaw": 163.35,
    "panorama": "this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7",
    "yaw": 103.06,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ]
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D36C80B8_DE61_E320_4194_A227670B482A",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_28636F1D_380A_B0E2_41CB_11AF37DE0FBA",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -76.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D0126E65_DE61_DF20_41CC_292A9D504162"
 },
 {
  "id": "ImageResource_D0B2815B_DCEA_70A9_41E8_E7BBC7DE2A6B",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D67F207D_DCE6_3169_41C5_15346C9DD144_0_0.jpg",
    "width": 2500,
    "class": "ImageResourceLevel",
    "height": 1667
   },
   {
    "url": "media/popup_D67F207D_DCE6_3169_41C5_15346C9DD144_0_1.jpg",
    "width": 2048,
    "class": "ImageResourceLevel",
    "height": 1365
   },
   {
    "url": "media/popup_D67F207D_DCE6_3169_41C5_15346C9DD144_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_D67F207D_DCE6_3169_41C5_15346C9DD144_0_3.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 {
  "initialPosition": {
   "yaw": 117.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D160CF01_DE61_DEE0_41C3_972B968F8F9B"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_E35A021A_ED68_457D_41DB_F92702D0649E",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 19.29,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D0978EF1_DE61_DF20_41D6_B0D5D07F595D"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D37320B8_DE61_E320_41E7_0802D241EBD9",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A7D6B15_1A54_58A3_41B2_1638439C39F6",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D377A0B8_DE61_E320_41E6_D74C6FDE7B4B",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_3D79567C_1674_627C_41A0_54E172548A16_camera"
 },
 {
  "initialPosition": {
   "yaw": 103.75,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D14CDF30_DE61_DD20_41E6_BAC17C6B15F2"
 },
 {
  "initialPosition": {
   "yaw": -169.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2BA5089_DE61_E3E0_41DA_81BB17456C37"
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_2867FF26_380A_AF2E_41CA_F4F651A21969",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
 "this.panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2",
 {
  "initialPosition": {
   "yaw": 38.61,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D1ACBF9F_DE61_DDE1_41E0_C8F5C30A5BB8"
 },
 {
  "initialPosition": {
   "yaw": 159.37,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D37F7D2C_DE61_DD20_41E4_8D7BA098EDDA"
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_2C7FFD45_279C_C425_4191_328659A964C7_camera"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_28651F1F_380A_AF1E_41C2_63F69A3A4274",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "ImageResource_9C57885A_1634_6D84_41A1_9B25A7190911",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_94B2E7EE_160C_E29C_41AF_8F6F1B527001_0_0.jpg",
    "width": 1280,
    "class": "ImageResourceLevel",
    "height": 720
   },
   {
    "url": "media/popup_94B2E7EE_160C_E29C_41AF_8F6F1B527001_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   },
   {
    "url": "media/popup_94B2E7EE_160C_E29C_41AF_8F6F1B527001_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 288
   }
  ]
 },
 {
  "items": [
   {
    "start": "this.viewer_uidD2CDFB09_DE62_26E0_41E9_8ED2C3A7E500VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_D2BAFB48_DE62_2560_41E3_0B3A98EB503D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_D2BAFB48_DE62_2560_41E3_0B3A98EB503D, 0)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidD2CDFB09_DE62_26E0_41E9_8ED2C3A7E500VideoPlayer)",
    "media": {
     "class": "Video",
     "thumbnailUrl": "media/video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787_t.jpg",
     "scaleMode": "fit_inside",
     "width": 1280,
     "label": "Intro_video_music_2",
     "loop": false,
     "id": "video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787",
     "height": 720,
     "video": {
      "width": 1280,
      "height": 720,
      "class": "VideoResource",
      "mp4Url": "media/video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787.mp4"
     }
    },
    "player": {
     "viewerArea": {
      "toolTipPaddingTop": 4,
      "playbackBarHeadBorderRadius": 0,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeight": 10,
      "paddingBottom": 0,
      "toolTipBorderSize": 1,
      "width": "100%",
      "progressLeft": 0,
      "id": "viewer_uidD2CDFB09_DE62_26E0_41E9_8ED2C3A7E500",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadWidth": 6,
      "toolTipDisplayTime": 600,
      "minHeight": 50,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarBackgroundColorDirection": "vertical",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarProgressOpacity": 1,
      "toolTipShadowSpread": 0,
      "minWidth": 100,
      "playbackBarRight": 0,
      "toolTipFontSize": "1.11vh",
      "toolTipBorderColor": "#767676",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBorderSize": 0,
      "height": "100%",
      "playbackBarLeft": 0,
      "playbackBarBackgroundOpacity": 1,
      "toolTipShadowOpacity": 1,
      "progressBarBorderSize": 0,
      "progressBorderSize": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipShadowBlurRadius": 3,
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "paddingRight": 0,
      "progressBottom": 2,
      "toolTipOpacity": 1,
      "progressHeight": 10,
      "playbackBarProgressBorderRadius": 0,
      "toolTipFontStyle": "normal",
      "progressBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "paddingLeft": 0,
      "playbackBarHeadShadowColor": "#000000",
      "toolTipFontFamily": "Arial",
      "progressOpacity": 1,
      "shadow": false,
      "progressBarBackgroundColorDirection": "vertical",
      "progressBarBorderColor": "#000000",
      "transitionDuration": 500,
      "progressBarBorderRadius": 0,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "toolTipShadowVerticalLength": 0,
      "propagateClick": false,
      "playbackBarBottom": 0,
      "borderSize": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadow": true,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "class": "ViewerArea",
      "paddingTop": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarOpacity": 1,
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipFontColor": "#606060",
      "displayTooltipInTouchScreens": true,
      "toolTipPaddingRight": 6,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "transitionMode": "blending",
      "toolTipPaddingLeft": 6,
      "data": {
       "name": "ViewerArea1728"
      },
      "playbackBarProgressBorderColor": "#000000",
      "progressBarOpacity": 1,
      "playbackBarBorderColor": "#FFFFFF"
     },
     "id": "viewer_uidD2CDFB09_DE62_26E0_41E9_8ED2C3A7E500VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true
    }
   }
  ],
  "id": "PlayList_D2BAFB48_DE62_2560_41E3_0B3A98EB503D",
  "class": "PlayList"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_EF6DD038_F622_38BB_41E2_201047C6007C",
  "class": "FadeInEffect",
  "duration": 2000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D36FE0A8_DE61_E320_41E2_F15F2A209E36",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D36DC0A8_DE61_E320_41EB_0F93B34A2720",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -92.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D0D8BEB3_DE61_DF20_41E0_B405527CA896"
 },
 "this.video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787",
 {
  "initialPosition": {
   "yaw": 127.56,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D1A33F9F_DE61_DDE1_41DF_BC9AA4B6FBF5"
 },
 {
  "initialPosition": {
   "yaw": -16.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3230D4B_DE61_DD60_41E5_E5AB01168CB8"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_E3586214_ED68_4574_41E5_D2720D677B2E",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A7CFB12_1A54_58A6_41A1_E0F17F3A1142",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D370C0B8_DE61_E320_41E8_C4854590BD72",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.popup_3BBE3C5B_107F_C340_4178_756995F5135C",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37090B8_DE61_E320_41D0_1A450D800A9B",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 100
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_2C00DBFF_279B_43E5_418A_2C175D957337_camera"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D36C80A8_DE61_E320_41E1_52281AB22823",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 136.46,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 100
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D1F74F7F_DE61_DD20_41D0_A45A9DB1E0C5"
 },
 "this.panorama_3D79DBC0_1674_E284_418F_8382C3D75914",
 {
  "easing": "cubic_in_out",
  "id": "effect_28661F20_380A_AF22_419F_884C1B4CE9BA",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 88.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3506D4B_DE61_DD60_41A9_79891BEB37F3"
 },
 "this.popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37790C7_DE61_E360_41C8_9E0B80C4F709",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.popup_4AF7186F_1614_2D9C_419D_7F5145DBB3BC",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37280B8_DE61_E320_41DE_0B0BF7EB9F8D",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D373B0B8_DE61_E320_41E8_3DDC594BA5AB",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D36FC0A8_DE61_E320_41E2_1E6A2A85FA43",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_camera"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D37180B8_DE61_E320_41E9_E14684A1BDDA",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 94.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D0442E07_DE61_DEE0_41E8_D0D3EE044379"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D373C0B8_DE61_E320_41E7_E62C956C4084",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "id": "ImageResource_D09C8172_DCEA_737B_41C7_76727B821C90",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_0.jpg",
    "width": 1200,
    "class": "ImageResourceLevel",
    "height": 800
   },
   {
    "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 {
  "initialPosition": {
   "yaw": 34.34,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2AD3079_DE61_E320_41E9_AE8181465A7C"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_EF6C1355_F62E_F8F5_41C5_B9A5C5CCED3E",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 "this.popup_D67F207D_DCE6_3169_41C5_15346C9DD144",
 "this.popup_4F3F1249_1634_DD84_41B1_1B09E44C11EB",
 {
  "easing": "cubic_in_out",
  "id": "effect_28667F25_380A_AF22_41AA_8AF78832719A",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D37370B8_DE61_E320_41B0_56029EDB87BE",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 126.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D1E5FF70_DE61_DD20_41DB_00BF36013DA9"
 },
 "this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA",
 {
  "easing": "cubic_in_out",
  "id": "effect_E3598214_ED68_4574_41E8_2F261C5C21DC",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -41.27,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D287D099_DE61_E3E1_41E3_69B4C32571BC"
 },
 {
  "initialPosition": {
   "yaw": 100.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2CC5CBF_DE62_2320_41D0_1F2ADF39FA28"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A4A2AF7_1A54_596F_41A0_A23BA651ABF1",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.panorama_2C7FFD45_279C_C425_4191_328659A964C7",
 {
  "easing": "cubic_in_out",
  "id": "effect_D36D40A8_DE61_E320_41EA_D5E174776A71",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.popup_D60305E4_DCEA_D39F_419B_D9B149482827",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_265F15C6_37AF_1EBA_41BA_48E8514F715E",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D36C50B8_DE61_E320_41D2_059961003553",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337",
 "this.Menu_D2B9AB57_DE62_2560_41EB_18ADB508B798",
 {
  "easing": "cubic_in_out",
  "id": "effect_D372C0B8_DE61_E320_4170_8E6E7D75357C",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A415AEA_1A54_5961_418D_A446E9A0AD27",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_camera"
 },
 "this.panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37300B8_DE61_E320_41E9_0D8A7D849446",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -123.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2CC605A_DE61_E360_41E8_5DDEA9922A81"
 },
 {
  "initialPosition": {
   "yaw": -171.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 100
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D0267E36_DE61_DF20_41E8_4FB93FA675AD"
 },
 "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37350B8_DE61_E320_41E9_70F5F308BC0B",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 3.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D1C08F7F_DE61_DD20_41B6_CE065C4F1815"
 },
 "this.panorama_3D795AB8_1674_6284_41B2_996F167C34AA",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_3D7997D7_1674_228C_41AA_D403F76C06DC_camera"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D373C0B8_DE61_E320_41DC_50312A0866F8",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D36D80A8_DE61_E320_41CF_B04C64525327",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -179.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3573BF4_DE62_2527_41E2_238137255759"
 },
 {
  "id": "ImageResource_20FB6245_107F_4740_41A8_9C0A46A92B4D",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_0.jpg",
    "width": 1067,
    "class": "ImageResourceLevel",
    "height": 800
   },
   {
    "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 767
   },
   {
    "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 383
   }
  ]
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A7C1B14_1A54_58A1_4182_E91E1718D19E",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -147.25,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D218FC90_DE62_23E0_41C3_6A435FC77598"
 },
 "this.panorama_3D79567C_1674_627C_41A0_54E172548A16",
 {
  "easing": "cubic_in_out",
  "id": "effect_27B39297_36BD_1CC5_41CA_0DA85ED17A20",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A4BDAF9_1A54_5962_41B5_D8C782C19266",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_265FB5C7_37AF_1EBB_41C2_D284D8411ADC",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D000CE55_DE61_DF60_41C7_CAEDD575D5C7"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_954C299C_160C_2EBC_41A2_795A81ADC662",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D373A0B8_DE61_E320_41E1_C12A11CE7972",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_camera"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D36DB0A8_DE61_E320_41E7_06D435AF96D9",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "id": "ImageResource_D082516E_DCEA_7368_41CB_9D0CFA830713",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_0.jpg",
    "width": 1200,
    "class": "ImageResourceLevel",
    "height": 800
   },
   {
    "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D36C10B8_DE61_E320_41E5_EB14B4006639",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D36CC0A8_DE61_E320_41D8_D3C5A03A0EFF",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D371C0B8_DE61_E320_41D4_49A31F3E7F6E",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 145.09,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D0FDCE94_DE61_DFE7_41E2_0810AEE09217"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D37160B8_DE61_E320_41E4_E6C4F5418BC6",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 "this.popup_94B2E7EE_160C_E29C_41AF_8F6F1B527001",
 {
  "initialPosition": {
   "yaw": 77.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2F0D03B_DE61_E320_41D1_0F6895F4E283"
 },
 {
  "id": "ImageResource_D38C2C6E_DFA1_73F8_41C3_8C1C155D72CB",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_0.jpg",
    "width": 1053,
    "class": "ImageResourceLevel",
    "height": 800
   },
   {
    "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 777
   },
   {
    "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 388
   }
  ]
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_265ED5C6_37AF_1EBD_41C7_FC5F42967E65",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_28656F1F_380A_AF1E_41AE_25190AD81FE8",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -32.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2DA906A_DE61_E320_41DB_FB6C69E1F8CA"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_2654D5CE_37AF_1E4D_41B6_E558742F5F68",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_14581B06_1AFD_10E9_41B7_EBE2377910B5_t.jpg",
  "scaleMode": "fit_inside",
  "width": 1280,
  "label": "Rotonda_LQ_short_2",
  "loop": false,
  "id": "video_14581B06_1AFD_10E9_41B7_EBE2377910B5",
  "height": 720,
  "video": {
   "width": 1280,
   "height": 720,
   "class": "VideoResource",
   "mp4Url": "media/video_14581B06_1AFD_10E9_41B7_EBE2377910B5.mp4"
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_2901D6DE_3812_BF51_41AE_CDB2AB2279BC",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 3.59,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D0791E07_DE61_DEE0_41E3_8775019C0999"
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_camera"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A7ADB15_1A54_58A2_41AB_CE902CEB2D2F",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_EAEC9FF0_E507_80D4_41DE_26E787ED8CCE",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 50.59,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D0375E45_DE61_DF60_41C8_1036022F2725"
 },
 {
  "initialPosition": {
   "yaw": -4.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D054FE26_DE61_DF20_41CD_C3BDCF669BB1"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D37390B8_DE61_E320_41D5_321F104E666B",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_E3587215_ED68_4577_4183_716A0D8E6DA7",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -177.3,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D237BC61_DE62_2320_41B5_ED8DE093D610"
 },
 {
  "initialPosition": {
   "yaw": 40.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D34B5BE4_DE62_2520_41E5_F569333D9189"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A7DCB14_1A54_58A2_41A0_7589B647DC76",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -91.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2083FED_DE61_DD20_41E4_1A24B12E7A5B"
 },
 {
  "buttonCardboardView": {
   "toolTipPaddingTop": 4,
   "toolTipFontStyle": "normal",
   "paddingBottom": 0,
   "toolTipFontWeight": "normal",
   "width": 75,
   "toolTipFontFamily": "Arial",
   "id": "IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667",
   "horizontalAlign": "center",
   "toolTipBorderSize": 1,
   "shadow": false,
   "toolTipDisplayTime": 600,
   "borderSize": 0,
   "minHeight": 1,
   "verticalAlign": "middle",
   "propagateClick": false,
   "toolTipShadowColor": "#333333",
   "toolTipShadowHorizontalLength": 0,
   "toolTipPaddingBottom": 4,
   "toolTipTextShadowOpacity": 0,
   "toolTip": "VR",
   "toolTipShadowVerticalLength": 0,
   "toolTipShadowSpread": 0,
   "minWidth": 1,
   "mode": "push",
   "class": "IconButton",
   "toolTipFontSize": 12,
   "toolTipBorderColor": "#767676",
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipBorderRadius": 3,
   "transparencyActive": false,
   "paddingTop": 0,
   "toolTipShadowOpacity": 1,
   "height": 50,
   "toolTipPaddingLeft": 6,
   "toolTipFontColor": "#606060",
   "toolTipPaddingRight": 6,
   "backgroundOpacity": 0,
   "borderRadius": 0,
   "toolTipTextShadowColor": "#000000",
   "toolTipTextShadowBlurRadius": 3,
   "data": {
    "name": "Button_VR"
   },
   "toolTipShadowBlurRadius": 3,
   "paddingRight": 0,
   "iconURL": "skin/IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667.png",
   "cursor": "hand",
   "paddingLeft": 0,
   "toolTipOpacity": 1
  },
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "initialPosition": {
   "yaw": -60.91,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3171D7A_DE61_DD20_41E3_C568CC913C3B"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A4B0AFA_1A54_5961_41A1_87E1ED6C15A7",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_263D2C60_37A3_6E76_41B0_3698A63496C3",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 69.27,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D0ECBE84_DE61_DFE0_41EA_5908528D3709"
 },
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "media": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
    "player": {
     "viewerArea": {
      "toolTipPaddingTop": 4,
      "playbackBarHeadBorderRadius": 0,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeight": 10,
      "paddingBottom": 0,
      "toolTipBorderSize": 1,
      "width": "99.417%",
      "progressLeft": 0,
      "id": "MapViewer",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadWidth": 6,
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarBackgroundColorDirection": "vertical",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarProgressOpacity": 1,
      "toolTipShadowSpread": 0,
      "minWidth": 1,
      "playbackBarRight": 0,
      "toolTipFontSize": 12,
      "toolTipBorderColor": "#767676",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBorderSize": 0,
      "height": "70.806%",
      "playbackBarLeft": 0,
      "playbackBarBackgroundOpacity": 1,
      "toolTipShadowOpacity": 1,
      "progressBarBorderSize": 0,
      "progressBorderSize": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipShadowBlurRadius": 3,
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "paddingRight": 0,
      "progressBottom": 2,
      "toolTipOpacity": 1,
      "progressHeight": 10,
      "playbackBarProgressBorderRadius": 0,
      "toolTipFontStyle": "normal",
      "progressBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "paddingLeft": 0,
      "playbackBarHeadShadowColor": "#000000",
      "toolTipFontFamily": "Arial",
      "progressOpacity": 1,
      "shadow": false,
      "progressBarBackgroundColorDirection": "vertical",
      "progressBarBorderColor": "#000000",
      "transitionDuration": 500,
      "progressBarBorderRadius": 0,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "toolTipShadowVerticalLength": 0,
      "propagateClick": false,
      "playbackBarBottom": 0,
      "borderSize": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadow": true,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "class": "ViewerArea",
      "paddingTop": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarOpacity": 1,
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipFontColor": "#606060",
      "displayTooltipInTouchScreens": true,
      "toolTipPaddingRight": 6,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "transitionMode": "blending",
      "toolTipPaddingLeft": 6,
      "data": {
       "name": "MapViewer"
      },
      "playbackBarProgressBorderColor": "#000000",
      "progressBarOpacity": 1,
      "playbackBarBorderColor": "#FFFFFF"
     },
     "id": "MapViewerMapPlayer",
     "movementMode": "constrained",
     "class": "MapPlayer"
    },
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_D2A50B29_DE62_2521_41A9_A6C4065243C9",
  "class": "PlayList"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D37270B8_DE61_E320_41D9_83350AE4D0A2",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 "this.panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E",
 "this.panorama_35E83422_1617_E584_4186_08583C185C08",
 {
  "initialPosition": {
   "yaw": 8.17,
   "class": "PanoramaCameraPosition",
   "pitch": -2.94,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A4B1AF8_1A54_5961_4192_288452C55C7E",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_2864FF1E_380A_AF1E_4198_2E923EA5658C",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_camera"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D377C0B8_DE61_E320_41DD_FAB63D2A5692",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
 {
  "easing": "cubic_in_out",
  "id": "effect_0B500FD7_1A54_37AE_41A9_19AE8C776076",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
 "this.popup_4B7F179F_4511_AA24_41C8_4D4C956B0736",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37270B8_DE61_E320_41CF_71526DA6D8D8",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A7B3B16_1A54_58AE_41AD_F6E2596D1449",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -155.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 100
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D32E7D5B_DE61_DD60_41E1_439ACDC2BB0F"
 },
 "this.popup_4A0C3726_1614_238F_4172_E61A531742AA",
 {
  "easing": "cubic_in_out",
  "id": "effect_D36C70B8_DE61_E320_41E2_5853B4CCDA65",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_28250014_3802_F537_4188_3C7B2FC7EB36",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "items": [
   {
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_D2A4CB29_DE62_2521_41D2_3A1C48F03ECA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_D2A4CB29_DE62_2521_41D2_3A1C48F03ECA, 0)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_14581B06_1AFD_10E9_41B7_EBE2377910B5",
    "player": {
     "viewerArea": "this.MainViewer",
     "id": "MainViewerVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true
    }
   }
  ],
  "id": "playList_D2A4CB29_DE62_2521_41D2_3A1C48F03ECA",
  "class": "PlayList"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_28647F1E_380A_AF1E_41B0_E5F978729211",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_camera"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D371D0B8_DE61_E320_41D5_5B5D115EFD78",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -159.28,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D20BBC80_DE62_23E0_41EB_36EDCD5081A3"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D36D30A8_DE61_E320_41EA_3EBC96EC7579",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
 {
  "easing": "cubic_in_out",
  "id": "effect_26077C68_37A3_6E75_41BD_CC48A65FF42C",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D36C60B8_DE61_E320_41E2_8D4DF475013D",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "items": [
   {
    "media": "this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A415AEA_1A54_5961_418D_A446E9A0AD27, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_D36FE0A8_DE61_E320_41E2_F15F2A209E36, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A4EDAEC_1A54_5962_41AC_C2003F20CB9F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_D36FC0A8_DE61_E320_41E2_1E6A2A85FA43, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_D36FD0A8_DE61_E320_41D3_A56F14B3AFA9, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_EAEC9FF0_E507_80D4_41DE_26E787ED8CCE, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_D36DC0A8_DE61_E320_41EB_0F93B34A2720, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_27B39297_36BD_1CC5_41CA_0DA85ED17A20, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_EF694FB9_F622_67BA_41E1_905F7693BFFD, 'hideEffect', false); if(this.existsKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842')){ if(this.getKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842')) { this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true, -1, this.effect_D36DB0A8_DE61_E320_41E7_06D435AF96D9, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_263D2C60_37A3_6E76_41B0_3698A63496C3, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842'); if(this.existsKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')){ if(this.getKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')) { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_D36D80A8_DE61_E320_41CF_B04C64525327, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_263D6C61_37A3_6E77_419A_EFCCEC8B9C13, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E'); if(this.existsKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')){ if(this.getKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')) { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_D36D40A8_DE61_E320_41EA_D5E174776A71, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_263D9C61_37A3_6E77_41B5_2D93BDF0ECDD, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')",
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515', this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515.get('visible')); this.registerKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E', this.Label_E216BE12_F622_684F_41EC_C2D2817E217E.get('visible')); this.registerKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842', this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842.get('visible')); this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2AB4B29_DE62_2521_41BB_64A64E38CCC4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A415AEA_1A54_5961_418D_A446E9A0AD27, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A4EDAEC_1A54_5962_41AC_C2003F20CB9F, 'showEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_EAEC9FF0_E507_80D4_41DE_26E787ED8CCE, 'hideEffect', false); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_27B39297_36BD_1CC5_41CA_0DA85ED17A20, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true, -1, this.effect_EF6DD038_F622_38BB_41E2_201047C6007C, 'showEffect', false); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_263D2C60_37A3_6E76_41B0_3698A63496C3, 'hideEffect', false); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false); this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_263D6C61_37A3_6E77_419A_EFCCEC8B9C13, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_263D9C61_37A3_6E77_41B5_2D93BDF0ECDD, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2AB4B29_DE62_2521_41BB_64A64E38CCC4",
    "camera": "this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_camera"
   },
   {
    "media": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D36D20A8_DE61_E320_41D6_98B4543C9EA1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_D36D30A8_DE61_E320_41EA_3EBC96EC7579, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_D36D00A8_DE61_E320_41C0_095EA5D03A03, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2AABB29_DE62_2521_41B9_9D41E8D70C74, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_EF6DE039_F622_38BD_41E2_3149DB234972, 'showEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2AABB29_DE62_2521_41B9_9D41E8D70C74",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera"
    }
   },
   {
    "media": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_D2AA6B29_DE62_2521_41DA_EC97A6D729AF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2AA6B29_DE62_2521_41DA_EC97A6D729AF",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera"
    }
   },
   {
    "media": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D36CC0A8_DE61_E320_41D8_D3C5A03A0EFF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2A9CB29_DE62_2521_41E8_A734DF4B4D2F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2A9CB29_DE62_2521_41E8_A734DF4B4D2F",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera"
    }
   },
   {
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D36C80A8_DE61_E320_41E1_52281AB22823, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2A9AB29_DE62_2521_41E0_3F807C3CB3F0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2A9AB29_DE62_2521_41E0_3F807C3CB3F0",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera"
    }
   },
   {
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D36C40A8_DE61_E320_41E6_E057996E8C46, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2A91B29_DE62_2521_41D4_84E08D80507F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2A91B29_DE62_2521_41D4_84E08D80507F",
    "camera": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera"
   },
   {
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D36C10B8_DE61_E320_41E5_EB14B4006639, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2A8CB29_DE62_2521_41E3_B06B5B8111AF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2A8CB29_DE62_2521_41E3_B06B5B8111AF",
    "camera": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera"
   },
   {
    "media": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_D2A8BB38_DE62_2520_41D3_E2050C6AE51B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2A8BB38_DE62_2520_41D3_E2050C6AE51B",
    "camera": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera"
   },
   {
    "media": "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D373C0B8_DE61_E320_41E7_E62C956C4084, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2A80B38_DE62_2520_41D2_C5EE2DB1F052, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2A80B38_DE62_2520_41D2_C5EE2DB1F052",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera"
    }
   },
   {
    "media": "this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D373A0B8_DE61_E320_41E1_C12A11CE7972, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28636F1D_380A_B0E2_41CB_11AF37DE0FBA, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2AFEB38_DE62_2520_41E2_29A13191B8F2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28636F1D_380A_B0E2_41CB_11AF37DE0FBA, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2AFEB38_DE62_2520_41E2_29A13191B8F2",
    "camera": "this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_camera"
   },
   {
    "media": "this.panorama_2BBC8600_279C_C41B_41AA_7212826C3A68",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D37390B8_DE61_E320_41CC_A6DFDD888CAF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_2864FF1E_380A_AF1E_4198_2E923EA5658C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2AF5B38_DE62_2520_41C8_87C90FDA84E6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_2864FF1E_380A_AF1E_4198_2E923EA5658C, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2AF5B38_DE62_2520_41C8_87C90FDA84E6",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_camera"
    }
   },
   {
    "media": "this.panorama_2C7FFD45_279C_C425_4191_328659A964C7",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D37370B8_DE61_E320_41BD_AE346883489F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28647F1E_380A_AF1E_41B0_E5F978729211, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2AF3B38_DE62_2520_41B6_1C71CF944839, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28647F1E_380A_AF1E_41B0_E5F978729211, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2AF3B38_DE62_2520_41B6_1C71CF944839",
    "camera": "this.panorama_2C7FFD45_279C_C425_4191_328659A964C7_camera"
   },
   {
    "media": "this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D37320B8_DE61_E320_41E7_0802D241EBD9, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28651F1F_380A_AF1E_41C2_63F69A3A4274, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2AE9B38_DE62_2520_41E4_99B30216E757, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28651F1F_380A_AF1E_41C2_63F69A3A4274, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2AE9B38_DE62_2520_41E4_99B30216E757",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_camera"
    }
   },
   {
    "media": "this.panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D36C80B8_DE61_E320_4194_A227670B482A, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28656F1F_380A_AF1E_41AE_25190AD81FE8, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2AE5B38_DE62_2520_41DE_32B1D7ACAF1F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28656F1F_380A_AF1E_41AE_25190AD81FE8, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2AE5B38_DE62_2520_41DE_32B1D7ACAF1F",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686_camera"
    }
   },
   {
    "media": "this.panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D36C60B8_DE61_E320_41E2_8D4DF475013D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28661F20_380A_AF22_419F_884C1B4CE9BA, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2AE3B38_DE62_2520_41E6_F9C9DC540C28, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28661F20_380A_AF22_419F_884C1B4CE9BA, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2AE3B38_DE62_2520_41E6_F9C9DC540C28",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1_camera"
    }
   },
   {
    "media": "this.panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D36C70B8_DE61_E320_41E2_5853B4CCDA65, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28667F25_380A_AF22_41AA_8AF78832719A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2AD9B38_DE62_2520_41E3_9E070ACB17C8, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28667F25_380A_AF22_41AA_8AF78832719A, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2AD9B38_DE62_2520_41E3_9E070ACB17C8",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E_camera"
    }
   },
   {
    "media": "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D36C50B8_DE61_E320_41D2_059961003553, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_2867FF26_380A_AF2E_41CA_F4F651A21969, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2AD7B38_DE62_2520_41D8_A305F50B8E5E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 17); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_2867FF26_380A_AF2E_41CA_F4F651A21969, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2AD7B38_DE62_2520_41D8_A305F50B8E5E",
    "camera": "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337_camera"
   },
   {
    "media": "this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D36C30B8_DE61_E320_41E0_117DAF25C9A0, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_954C799B_160C_2E84_41B0_AFCA77FBB962, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')){ if(this.getKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')) { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_954C299C_160C_2EBC_41A2_795A81ADC662, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_D373E0B8_DE61_E320_41E5_F8D442156C4F, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E', this.Label_E216BE12_F622_684F_41EC_C2D2817E217E.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2ACCB38_DE62_2520_41A5_83672AC6A0D4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 18); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_954C799B_160C_2E84_41B0_AFCA77FBB962, 'hideEffect', false); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false); this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_954C299C_160C_2EBC_41A2_795A81ADC662, 'showEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2ACCB38_DE62_2520_41A5_83672AC6A0D4",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_camera"
    }
   },
   {
    "media": "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0B500FD7_1A54_37AE_41A9_19AE8C776076, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_D373C0B8_DE61_E320_41DC_50312A0866F8, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D373B0B8_DE61_E320_41E8_3DDC594BA5AB, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')){ if(this.getKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')) { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true, -1, this.effect_D37390B8_DE61_E320_41D5_321F104E666B, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_2606DC67_37A3_6E7A_417B_82BAC7B62691, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197'); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_EF6C1355_F62E_F8F5_41C5_B9A5C5CCED3E, 'hideEffect', false); if(this.existsKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')){ if(this.getKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')) { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_D37370B8_DE61_E320_41B0_56029EDB87BE, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_26077C68_37A3_6E75_41BD_CC48A65FF42C, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E'); if(this.existsKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')){ if(this.getKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')) { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_D37350B8_DE61_E320_41E9_70F5F308BC0B, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')",
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515', this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515.get('visible')); this.registerKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E', this.Label_E216BE12_F622_684F_41EC_C2D2817E217E.get('visible')); this.registerKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197', this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2AE3B38_DE62_2520_41EA_BDA0D82E1D02, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 18, 19); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0B500FD7_1A54_37AE_41A9_19AE8C776076, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_2606DC67_37A3_6E7A_417B_82BAC7B62691, 'hideEffect', false); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true, -1, this.effect_EF6CE355_F62E_F8F5_41E6_CBD8B4202E02, 'showEffect', false); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false); this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_26077C68_37A3_6E75_41BD_CC48A65FF42C, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2AE3B38_DE62_2520_41EA_BDA0D82E1D02",
    "camera": {
     "initialPosition": {
      "yaw": 53.23,
      "class": "PanoramaCameraPosition",
      "pitch": 1.41,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_E6145D91_EF14_5D6A_41D9_45623053016B_camera"
    }
   },
   {
    "media": "this.panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A78BB17_1A54_58AF_41B2_578B2CDC47A4, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_D37300B8_DE61_E320_41E9_0D8A7D849446, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A78CB17_1A54_58AF_419D_7A41EB5E63C2, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_D372E0B8_DE61_E320_41D4_E3BEF080CF3E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2AD9B38_DE62_2520_41D6_5FDD54ADCFC9, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 19, 20); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A78BB17_1A54_58AF_41B2_578B2CDC47A4, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A78CB17_1A54_58AF_419D_7A41EB5E63C2, 'showEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2AD9B38_DE62_2520_41D6_5FDD54ADCFC9",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2_camera"
    }
   },
   {
    "media": "this.panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_2901D6DE_3812_BF51_41AE_CDB2AB2279BC, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_D372C0B8_DE61_E320_4170_8E6E7D75357C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')){ if(this.getKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')) { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true, -1, this.effect_D372A0B8_DE61_E320_41EA_4D2D33B33972, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_265ED5C6_37AF_1EBD_41C7_FC5F42967E65, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197'); if(this.existsKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842')){ if(this.getKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842')) { this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true, -1, this.effect_D37280B8_DE61_E320_41DE_0B0BF7EB9F8D, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_265F15C6_37AF_1EBA_41BA_48E8514F715E, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842'); if(this.existsKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')){ if(this.getKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')) { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_D37260B8_DE61_E320_41E4_2E744A302C8E, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_265F65C6_37AF_1EBA_41BB_44A1D43822E5, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E'); if(this.existsKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')){ if(this.getKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')) { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_D37270B8_DE61_E320_41CF_71526DA6D8D8, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_265FB5C7_37AF_1EBB_41C2_D284D8411ADC, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515', this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515.get('visible')); this.registerKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E', this.Label_E216BE12_F622_684F_41EC_C2D2817E217E.get('visible')); this.registerKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842', this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842.get('visible')); this.registerKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197', this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2AD4B38_DE62_2520_41E1_DBF1C1CDCE6E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 20, 21); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_2901D6DE_3812_BF51_41AE_CDB2AB2279BC, 'showEffect', false); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_265ED5C6_37AF_1EBD_41C7_FC5F42967E65, 'hideEffect', false); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_265F15C6_37AF_1EBA_41BA_48E8514F715E, 'hideEffect', false); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false); this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_265F65C6_37AF_1EBA_41BB_44A1D43822E5, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_265FB5C7_37AF_1EBB_41C2_D284D8411ADC, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2AD4B38_DE62_2520_41E1_DBF1C1CDCE6E",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56_camera"
    }
   },
   {
    "media": "this.panorama_474FEAEC_160C_229C_41B5_A893F886FCB3",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7CFB12_1A54_58A6_41A1_E0F17F3A1142, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_D37250B8_DE61_E320_41EB_B5BA4FD99936, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7C1B12_1A54_58A6_41AF_D15E3F52DC69, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_D37200B8_DE61_E320_41E2_5404BEA0C2B5, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2AD3B38_DE62_2520_41CC_883BD16663A0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 21, 22); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7CFB12_1A54_58A6_41A1_E0F17F3A1142, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7C1B12_1A54_58A6_41AF_D15E3F52DC69, 'showEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2AD3B38_DE62_2520_41CC_883BD16663A0",
    "camera": "this.panorama_474FEAEC_160C_229C_41B5_A893F886FCB3_camera"
   },
   {
    "media": "this.panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7B8B16_1A54_58A1_41A7_2BF2E9F05601, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_D371E0B8_DE61_E320_41E8_86436EA3CFC1, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7B3B16_1A54_58AE_41AD_F6E2596D1449, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_D371C0B8_DE61_E320_41D4_49A31F3E7F6E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2AC9B38_DE62_2520_41E9_AFBFDFEFCE72, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 22, 23); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7B8B16_1A54_58A1_41A7_2BF2E9F05601, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7B3B16_1A54_58AE_41AD_F6E2596D1449, 'showEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2AC9B38_DE62_2520_41E9_AFBFDFEFCE72",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_camera"
    }
   },
   {
    "media": "this.panorama_3D79567C_1674_627C_41A0_54E172548A16",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7DCB14_1A54_58A2_41A0_7589B647DC76, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_D37180B8_DE61_E320_41E9_E14684A1BDDA, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7D6B15_1A54_58A3_41B2_1638439C39F6, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_D37160B8_DE61_E320_41E4_E6C4F5418BC6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2AC7B38_DE62_2520_41D4_46D899CD9570, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 23, 24); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7DCB14_1A54_58A2_41A0_7589B647DC76, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7D6B15_1A54_58A3_41B2_1638439C39F6, 'showEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2AC7B38_DE62_2520_41D4_46D899CD9570",
    "camera": "this.panorama_3D79567C_1674_627C_41A0_54E172548A16_camera"
   },
   {
    "media": "this.panorama_3D795AB8_1674_6284_41B2_996F167C34AA",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A4BDAF9_1A54_5962_41B5_D8C782C19266, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_D37140B8_DE61_E320_41C9_994A10CF301D, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A4B0AFA_1A54_5961_41A1_87E1ED6C15A7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_D37120B8_DE61_E320_41D0_72B55A53A2CE, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2B3CB48_DE62_2560_4192_66E7C1F3F996, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 24, 25); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A4BDAF9_1A54_5962_41B5_D8C782C19266, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A4B0AFA_1A54_5961_41A1_87E1ED6C15A7, 'showEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2B3CB48_DE62_2560_4192_66E7C1F3F996",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_3D795AB8_1674_6284_41B2_996F167C34AA_camera"
    }
   },
   {
    "media": "this.panorama_35E83422_1617_E584_4186_08583C185C08",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7C1B14_1A54_58A1_4182_E91E1718D19E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_D37100B8_DE61_E320_41D7_16363CF95AE3, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7C5B14_1A54_58A1_4196_8491F9269B01, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_D37280B8_DE61_E320_41DB_5936335C9363, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2B35B48_DE62_2560_41B1_CBAE90FB702E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 25, 26); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7C1B14_1A54_58A1_4182_E91E1718D19E, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7C5B14_1A54_58A1_4196_8491F9269B01, 'showEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2B35B48_DE62_2560_41B1_CBAE90FB702E",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_35E83422_1617_E584_4186_08583C185C08_camera"
    }
   },
   {
    "media": "this.panorama_3D79D3BF_1674_22FC_4196_7C67831E524C",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A4BFAF8_1A54_5961_419C_A651C34FFF29, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_D37270B8_DE61_E320_41D9_83350AE4D0A2, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A4B1AF8_1A54_5961_4192_288452C55C7E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_D37250B8_DE61_E320_41E2_A2ACDA688DD1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2B30B48_DE62_2560_41AE_A18608E82424, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 26, 27); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A4BFAF8_1A54_5961_419C_A651C34FFF29, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A4B1AF8_1A54_5961_4192_288452C55C7E, 'showEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2B30B48_DE62_2560_41AE_A18608E82424",
    "camera": "this.panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_camera"
   },
   {
    "media": "this.panorama_3D7997D7_1674_228C_41AA_D403F76C06DC",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7DCB13_1A54_58A7_41B9_176107C63C7F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_D37230B8_DE61_E320_41E6_1AEC9D7228BE, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7D0B13_1A54_58A6_41A3_F79144E8BD4D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_D37210B8_DE61_E320_41B7_B16FCFFECEF1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2B2FB48_DE62_2560_41E8_80B6019664AE, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 27, 28); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7DCB13_1A54_58A7_41B9_176107C63C7F, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7D0B13_1A54_58A6_41A3_F79144E8BD4D, 'showEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2B2FB48_DE62_2560_41E8_80B6019664AE",
    "camera": "this.panorama_3D7997D7_1674_228C_41AA_D403F76C06DC_camera"
   },
   {
    "media": "this.panorama_3D79DBC0_1674_E284_418F_8382C3D75914",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7ADB15_1A54_58A2_41AB_CE902CEB2D2F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_D371F0B8_DE61_E320_41EB_AB9861BA577F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7A0B15_1A54_58A2_41AB_A63D9E32E6AE, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_D371D0B8_DE61_E320_41D5_5B5D115EFD78, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2B25B48_DE62_2560_41E3_BD8C2DE70445, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 28, 29); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7ADB15_1A54_58A2_41AB_CE902CEB2D2F, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7A0B15_1A54_58A2_41AB_A63D9E32E6AE, 'showEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2B25B48_DE62_2560_41E3_BD8C2DE70445",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_3D79DBC0_1674_E284_418F_8382C3D75914_camera"
    }
   },
   {
    "media": "this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A751B07_1A54_58AF_41B6_994BD0BB5150, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_D37180B8_DE61_E320_41CC_3BF84E95F155, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A72BB07_1A54_58AF_41B9_E0139F2ABDA7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_D37160B8_DE61_E320_41DC_572DA86FBD79, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')){ if(this.getKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')) { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true, -1, this.effect_D37150B8_DE61_E320_41E8_0FDC48E2567B, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_28250014_3802_F537_4188_3C7B2FC7EB36, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197'); if(this.existsKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842')){ if(this.getKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842')) { this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true, -1, this.effect_D37130B8_DE61_E320_41C8_6F1748DBD735, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_2827C014_3802_F537_41C3_FC95DAE82DA1, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842'); if(this.existsKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')){ if(this.getKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')) { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_D370E0B8_DE61_E320_41E4_6B00C80DAF9D, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_28260015_3802_F531_41C1_E14F08D374DD, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E'); if(this.existsKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')){ if(this.getKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')) { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_D370C0B8_DE61_E320_41E8_C4854590BD72, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_28264015_3802_F531_4190_725BE50AAA5D, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')",
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515', this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515.get('visible')); this.registerKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E', this.Label_E216BE12_F622_684F_41EC_C2D2817E217E.get('visible')); this.registerKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842', this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842.get('visible')); this.registerKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197', this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2B23B48_DE62_2560_41BD_0D3DC3EC8041, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 29, 30); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A751B07_1A54_58AF_41B6_994BD0BB5150, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A72BB07_1A54_58AF_41B9_E0139F2ABDA7, 'showEffect', false); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_28250014_3802_F537_4188_3C7B2FC7EB36, 'hideEffect', false); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_2827C014_3802_F537_41C3_FC95DAE82DA1, 'hideEffect', false); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false); this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_28260015_3802_F531_41C1_E14F08D374DD, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_28264015_3802_F531_4190_725BE50AAA5D, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2B23B48_DE62_2560_41BD_0D3DC3EC8041",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_camera"
    }
   },
   {
    "media": "this.panorama_5F372E49_160C_6584_4186_1E0077946A37",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A4A2AF7_1A54_596F_41A0_A23BA651ABF1, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_D370B0B8_DE61_E320_41E6_10F779AA0F2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A4A5AF7_1A54_596E_4160_0BC7A9E29E78, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_D37090B8_DE61_E320_41D0_1A450D800A9B, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_D37070B8_DE61_E320_41E0_4E0E2451C8DF, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_4DCC9BCA_5DE4_1D9E_4189_6DD46A997BAE, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); if(this.existsKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')){ if(this.getKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')) { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true, -1, this.effect_D37040B8_DE61_E320_4193_D5802BD418FA, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_265485CE_37AF_1E4D_41BF_B2096F69C00B, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197'); if(this.existsKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842')){ if(this.getKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842')) { this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true, -1, this.effect_D37050B8_DE61_E320_41B4_9E0AF71E1927, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_2654D5CE_37AF_1E4D_41B6_E558742F5F68, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842'); if(this.existsKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')){ if(this.getKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')) { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_D37000B8_DE61_E320_41E4_F77F75EB730A, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_265555CE_37AF_1E4A_41C8_58F45ECAFC24, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E'); if(this.existsKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')){ if(this.getKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')) { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_D37010B8_DE61_E320_41AC_84BDDCDBD195, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2653E5CF_37AF_1E4B_41CB_C2FB1B6AD4FB, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')",
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515', this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515.get('visible')); this.registerKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E', this.Label_E216BE12_F622_684F_41EC_C2D2817E217E.get('visible')); this.registerKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842', this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842.get('visible')); this.registerKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197', this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197.get('visible')); this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2B19B48_DE62_2560_41E0_121249821A6D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 30, 31); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A4A2AF7_1A54_596F_41A0_A23BA651ABF1, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A4A5AF7_1A54_596E_4160_0BC7A9E29E78, 'showEffect', false); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_4DCC9BCA_5DE4_1D9E_4189_6DD46A997BAE, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_265485CE_37AF_1E4D_41BF_B2096F69C00B, 'hideEffect', false); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_2654D5CE_37AF_1E4D_41B6_E558742F5F68, 'hideEffect', false); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false); this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_265555CE_37AF_1E4A_41C8_58F45ECAFC24, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2653E5CF_37AF_1E4B_41CB_C2FB1B6AD4FB, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2B19B48_DE62_2560_41E0_121249821A6D",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_5F372E49_160C_6584_4186_1E0077946A37_camera"
    }
   },
   {
    "media": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D377C0B8_DE61_E320_41DD_FAB63D2A5692, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2B11B48_DE62_2560_41E1_D6D450615EC2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 31, 32); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2B11B48_DE62_2560_41E1_D6D450615EC2",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_camera"
    }
   },
   {
    "media": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D377A0B8_DE61_E320_41E6_D74C6FDE7B4B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2B0CB48_DE62_2560_41D6_C38CBC726C39, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 32, 33); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2B0CB48_DE62_2560_41D6_C38CBC726C39",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_camera"
    }
   },
   {
    "media": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D37780B8_DE61_E320_41E4_BBFF76E5FEC8, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2B0AB48_DE62_2560_41E1_2CA85FA0E0AC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 33, 34); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2B0AB48_DE62_2560_41E1_2CA85FA0E0AC",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_camera"
    }
   },
   {
    "media": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D370C0B8_DE61_E320_41EA_D05543DC3C0F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2B00B48_DE62_2560_41D6_F17021F28662, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 34, 35); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2B00B48_DE62_2560_41D6_F17021F28662",
    "camera": {
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_camera"
    }
   },
   {
    "media": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D370A0B8_DE61_E320_41EB_6D1D99638A41, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D2B7FB48_DE62_2560_41E8_05A26C19D29C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 35, 36); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2B7FB48_DE62_2560_41E8_05A26C19D29C",
    "camera": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_camera"
   },
   {
    "media": "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_D2B75B48_DE62_2560_41E5_65D0C329656E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 36, 37)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2B75B48_DE62_2560_41E5_65D0C329656E",
    "camera": "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_camera"
   },
   {
    "media": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_D2B70B48_DE62_2560_41BC_BCAF541DBEF6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 37, 38)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D2B70B48_DE62_2560_41BC_BCAF541DBEF6",
    "camera": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_camera"
   },
   {
    "end": "this.trigger('tourEnded')",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 38, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 38)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 38, 0)",
    "media": "this.video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787",
    "player": "this.MainViewerVideoPlayer"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37370B8_DE61_E320_41BD_AE346883489F",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -152.92,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D0ABBEC2_DE61_DF60_41E0_C8B719062876"
 },
 {
  "initialPosition": {
   "yaw": 9.95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D0B51ED2_DE61_DF60_41E8_CB48CC26A1C7"
 },
 {
  "items": [
   {
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D37050C7_DE61_E360_417C_220A7C7EFEC8, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_D37030C7_DE61_E360_41D4_91E1AA9C5B31, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_D37010C7_DE61_E360_41E6_0EC70B1A1680, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 0, 1); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_EF6DE039_F622_38BD_41E2_3149DB234972, 'showEffect', false)",
    "media": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 1, 2)",
    "media": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera"
   },
   {
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D377C0C7_DE61_E360_41E8_AD1D19F123C7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 2, 3); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera"
   },
   {
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D37790C7_DE61_E360_41C8_9E0B80C4F709, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 3, 4); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera"
   },
   {
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D37770C7_DE61_E360_41E3_70D1C29C7D01, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 4, 5); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera"
   },
   {
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D37720C7_DE61_E360_419B_7A8098D42EE3, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 5, 6); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 6, 0)",
    "media": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera"
   }
  ],
  "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
  "class": "PlayList"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A7B8B16_1A54_58A1_41A7_2BF2E9F05601",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "id": "ImageResource_C406C318_D4FF_7ACD_41B8_0A98872E7CE5",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_0.jpg",
    "width": 3861,
    "class": "ImageResourceLevel",
    "height": 2574
   },
   {
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_1.jpg",
    "width": 2048,
    "class": "ImageResourceLevel",
    "height": 1365
   },
   {
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_3.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 {
  "id": "ImageResource_E253E6BD_EF1D_EC9A_41EA_C503E65D3053",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_0.jpg",
    "width": 2000,
    "class": "ImageResourceLevel",
    "height": 1236
   },
   {
    "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 632
   },
   {
    "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 316
   }
  ]
 },
 {
  "id": "ImageResource_4AF68F62_4510_BA1D_4190_FDDC2A486BCE",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4B7F179F_4511_AA24_41C8_4D4C956B0736_0_0.jpg",
    "width": 1600,
    "class": "ImageResourceLevel",
    "height": 896
   },
   {
    "url": "media/popup_4B7F179F_4511_AA24_41C8_4D4C956B0736_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 573
   },
   {
    "url": "media/popup_4B7F179F_4511_AA24_41C8_4D4C956B0736_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 286
   }
  ]
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D371F0B8_DE61_E320_41EB_AB9861BA577F",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -23.59,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D29BF0A8_DE61_E320_41AB_1647CFDB8F8F"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A78CB17_1A54_58AF_419D_7A41EB5E63C2",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37140B8_DE61_E320_41C9_994A10CF301D",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 28.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2E6ACA0_DE62_23DF_41B9_71FD1627CE9C"
 },
 {
  "initialPosition": {
   "yaw": -49.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D12FBF3F_DE61_DD20_41E4_25318A4CC7D3"
 },
 "this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37250B8_DE61_E320_41E2_A2ACDA688DD1",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_263D6C61_37A3_6E77_419A_EFCCEC8B9C13",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 "this.popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C",
 "this.popup_4AC282AC_160C_E29C_41A5_60234192F5B3",
 {
  "easing": "cubic_in_out",
  "id": "effect_0A7DCB13_1A54_58A7_41B9_176107C63C7F",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -66.4,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D28CE099_DE61_E3E1_41E3_3FDFD12A1FA9"
 },
 {
  "initialPosition": {
   "yaw": 33.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2858CFD_DE62_2320_41E9_7CFC06678A94"
 },
 {
  "initialPosition": {
   "yaw": 7.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2D9BCCE_DE62_2360_41EA_B461DB6DB2DB"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A7D0B13_1A54_58A6_41A3_F79144E8BD4D",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 47.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D11ADF60_DE61_DD20_41CA_FD4F0E609C96"
 },
 "this.popup_86BC6426_88BB_A07B_41C5_61F799090724",
 "this.panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686_camera",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "media": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_D2A55B29_DE62_2521_41B1_D661C947BAA8",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "media": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_D2A5BB29_DE62_2521_41D4_D12404CE07B0",
  "class": "PlayList"
 },
 "this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37280B8_DE61_E320_41DB_5936335C9363",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "ImageResource_E252A6BD_EF1D_EC9A_41D3_31F4A8966575",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_0.jpg",
    "width": 1280,
    "class": "ImageResourceLevel",
    "height": 936
   },
   {
    "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 748
   },
   {
    "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 374
   }
  ]
 },
 "this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1",
 "this.panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56",
 {
  "easing": "cubic_in_out",
  "id": "effect_4DCC9BCA_5DE4_1D9E_4189_6DD46A997BAE",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
 {
  "initialPosition": {
   "yaw": 97.92,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2EF702B_DE61_E320_41EA_A01342DC5FA2"
 },
 "this.panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_265F65C6_37AF_1EBA_41BB_44A1D43822E5",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 "this.map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
 {
  "initialPosition": {
   "yaw": 145.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D1436F20_DE61_DD20_41DF_0A7702989987"
 },
 "this.panorama_474FEAEC_160C_229C_41B5_A893F886FCB3",
 {
  "easing": "cubic_in_out",
  "id": "effect_D370A0B8_DE61_E320_41EB_6D1D99638A41",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -80.37,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D15DDF3F_DE61_DD20_41E0_4790E23CFBDA"
 },
 "this.panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56_camera",
 {
  "initialPosition": {
   "yaw": 45.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3ADBDC8_DE61_DD60_41C3_B01C26293931"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D37200B8_DE61_E320_41E2_5404BEA0C2B5",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -140.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D1720F11_DE61_DEE1_41B4_4BA577A3E0D6"
 },
 {
  "id": "ImageResource_69C3B37A_160C_2384_419C_79046B4034AF",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4A0C3726_1614_238F_4172_E61A531742AA_0_0.jpg",
    "width": 2000,
    "class": "ImageResourceLevel",
    "height": 1333
   },
   {
    "url": "media/popup_4A0C3726_1614_238F_4172_E61A531742AA_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_4A0C3726_1614_238F_4172_E61A531742AA_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37150B8_DE61_E320_41E8_0FDC48E2567B",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A4EDAEC_1A54_5962_41AC_C2003F20CB9F",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A7C5B14_1A54_58A1_4196_8491F9269B01",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_0A7A0B15_1A54_58A2_41AB_A63D9E32E6AE",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "backgroundColorDirection": "vertical",
  "closeButtonBackgroundColor": [
   "#000000"
  ],
  "paddingBottom": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "verticalAlign": "middle",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "id": "window_D5A5F731_DE62_2D21_41EA_A008C140FFFA",
  "horizontalAlign": "center",
  "closeButtonPressedBorderSize": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "titleFontFamily": "Arial",
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPaddingLeft": 5,
  "closeButtonIconColor": "#FFFFFF",
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "bodyPaddingBottom": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "minHeight": 20,
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "modal": true,
  "closeButtonIconHeight": 50,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonRollOverIconColor": "#CCCCCC",
  "backgroundColor": [],
  "minWidth": 20,
  "closeButtonIconLineWidth": 5,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "shadowOpacity": 0.5,
  "scrollBarMargin": 2,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "scrollBarOpacity": 0.5,
  "closeButtonBorderColor": "#000000",
  "backgroundOpacity": 1,
  "shadowBlurRadius": 6,
  "titlePaddingTop": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "borderRadius": 5,
  "shadowSpread": 1,
  "headerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "paddingLeft": 0,
  "closeButtonBackgroundColorDirection": "vertical",
  "headerBackgroundOpacity": 0,
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "children": [
   {
    "toolTipPaddingTop": 4,
    "playbackBarHeadBorderRadius": 0,
    "toolTipFontWeight": "normal",
    "playbackBarHeadBorderColor": "#000000",
    "playbackBarHeight": 10,
    "paddingBottom": 0,
    "toolTipBorderSize": 1,
    "width": "100%",
    "progressLeft": 0,
    "id": "viewer_uidD2D87B19_DE62_26E0_414E_2EA200352615",
    "progressBackgroundColor": [
     "#FFFFFF"
    ],
    "playbackBarHeadBorderSize": 0,
    "playbackBarHeadWidth": 6,
    "toolTipDisplayTime": 600,
    "minHeight": 50,
    "progressBackgroundColorRatios": [
     0
    ],
    "progressBarBackgroundColor": [
     "#3399FF"
    ],
    "playbackBarBackgroundColorDirection": "vertical",
    "progressBorderRadius": 0,
    "playbackBarProgressBackgroundColorRatios": [
     0
    ],
    "playbackBarProgressOpacity": 1,
    "toolTipShadowSpread": 0,
    "minWidth": 100,
    "playbackBarRight": 0,
    "toolTipFontSize": "1.11vh",
    "toolTipBorderColor": "#767676",
    "toolTipBackgroundColor": "#F6F6F6",
    "toolTipBorderRadius": 3,
    "playbackBarBorderSize": 0,
    "height": "100%",
    "playbackBarLeft": 0,
    "playbackBarBackgroundOpacity": 1,
    "toolTipShadowOpacity": 1,
    "progressBarBorderSize": 0,
    "progressBorderSize": 0,
    "playbackBarHeadShadowBlurRadius": 3,
    "borderRadius": 0,
    "toolTipTextShadowColor": "#000000",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipShadowBlurRadius": 3,
    "playbackBarProgressBorderSize": 0,
    "playbackBarHeadHeight": 15,
    "playbackBarHeadBackgroundColor": [
     "#111111",
     "#666666"
    ],
    "playbackBarHeadBackgroundColorRatios": [
     0,
     1
    ],
    "paddingRight": 0,
    "progressBottom": 2,
    "toolTipOpacity": 1,
    "progressHeight": 10,
    "playbackBarProgressBorderRadius": 0,
    "toolTipFontStyle": "normal",
    "progressBackgroundColorDirection": "vertical",
    "progressRight": 0,
    "paddingLeft": 0,
    "playbackBarHeadShadowColor": "#000000",
    "toolTipFontFamily": "Arial",
    "progressOpacity": 1,
    "shadow": false,
    "progressBarBackgroundColorDirection": "vertical",
    "progressBarBorderColor": "#000000",
    "transitionDuration": 500,
    "progressBarBorderRadius": 0,
    "progressBarBackgroundColorRatios": [
     0
    ],
    "playbackBarHeadBackgroundColorDirection": "vertical",
    "progressBorderColor": "#000000",
    "toolTipShadowVerticalLength": 0,
    "propagateClick": false,
    "playbackBarBottom": 0,
    "borderSize": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowHorizontalLength": 0,
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowOpacity": 0,
    "playbackBarHeadShadow": true,
    "playbackBarBorderRadius": 0,
    "playbackBarHeadShadowHorizontalLength": 0,
    "playbackBarHeadShadowVerticalLength": 0,
    "progressBackgroundOpacity": 1,
    "playbackBarProgressBackgroundColor": [
     "#3399FF"
    ],
    "class": "ViewerArea",
    "paddingTop": 0,
    "playbackBarProgressBackgroundColorDirection": "vertical",
    "playbackBarOpacity": 1,
    "playbackBarHeadOpacity": 1,
    "playbackBarHeadShadowOpacity": 0.7,
    "toolTipFontColor": "#606060",
    "displayTooltipInTouchScreens": true,
    "toolTipPaddingRight": 6,
    "playbackBarBackgroundColor": [
     "#FFFFFF"
    ],
    "transitionMode": "blending",
    "toolTipPaddingLeft": 6,
    "data": {
     "name": "ViewerArea1729"
    },
    "playbackBarProgressBorderColor": "#000000",
    "progressBarOpacity": 1,
    "playbackBarBorderColor": "#FFFFFF"
   }
  ],
  "contentOpaque": false,
  "bodyPaddingLeft": 0,
  "shadowColor": "#000000",
  "titlePaddingLeft": 5,
  "closeButtonBorderSize": 0,
  "shadow": true,
  "titleFontSize": "1.29vh",
  "shadowVerticalLength": 0,
  "headerPaddingBottom": 5,
  "closeButtonRollOverIconLineWidth": 5,
  "bodyBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "propagateClick": false,
  "layout": "vertical",
  "scrollBarVisible": "rollOver",
  "titlePaddingRight": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundOpacity": 0,
  "footerHeight": 5,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "headerVerticalAlign": "middle",
  "veilOpacity": 0.4,
  "closeButtonPressedIconColor": "#FF0000",
  "class": "Window",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonPaddingTop": 5,
  "backgroundColorRatios": [],
  "paddingTop": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "closeButtonBackgroundColorRatios": [
   0.1
  ],
  "closeButtonPaddingBottom": 5,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowHorizontalLength": 3,
  "closeButtonPaddingRight": 5,
  "closeButtonIconWidth": 50,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyBackgroundOpacity": 0,
  "closeButtonBackgroundOpacity": 0.5,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonBorderRadius": 0,
  "gap": 10,
  "bodyPaddingRight": 0,
  "data": {
   "name": "Window554"
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "headerPaddingRight": 0
 },
 {
  "initialPosition": {
   "yaw": 113.39,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D219B00C_DE61_E2E0_41E3_D9CF0870C17A"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A78BB17_1A54_58AF_41B2_578B2CDC47A4",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A4BFAF8_1A54_5961_419C_A651C34FFF29",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D36C30B8_DE61_E320_41E0_117DAF25C9A0",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D373E0B8_DE61_E320_41E5_F8D442156C4F",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 "this.panorama_3D79DBC0_1674_E284_418F_8382C3D75914_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37120B8_DE61_E320_41D0_72B55A53A2CE",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "ImageResource_D09DC170_DCEA_7378_41EB_423962A6DDEA",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_0.jpg",
    "width": 1200,
    "class": "ImageResourceLevel",
    "height": 800
   },
   {
    "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 "this.popup_4AC31A49_1614_6D84_41A8_70E2088E8A0A",
 "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
 {
  "easing": "cubic_in_out",
  "id": "effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D36C40A8_DE61_E320_41E6_E057996E8C46",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 162.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2B39CDE_DE62_2360_41D1_E6050B7CDBEF"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D37050C7_DE61_E360_417C_220A7C7EFEC8",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -21.17,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 100
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2A6BCDE_DE62_2360_41E5_377E16F5C7C8"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D370C0B8_DE61_E320_41EA_D05543DC3C0F",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A7C1B12_1A54_58A6_41AF_D15E3F52DC69",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 118.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3C48DA9_DE61_DD20_41CD_ED2041A2380E"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_E3582213_ED68_454C_41D3_299F2B40CFF6",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D37010C7_DE61_E360_41E6_0EC70B1A1680",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -3.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D38BBDD8_DE61_DD60_41DD_978763804A87"
 },
 {
  "initialPosition": {
   "yaw": -94.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 100
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D1D1CF8F_DE61_DDE0_41B1_07472A841B54"
 },
 "this.panorama_2BBC8600_279C_C41B_41AA_7212826C3A68",
 {
  "easing": "cubic_in_out",
  "id": "effect_2827C014_3802_F537_41C3_FC95DAE82DA1",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D37390B8_DE61_E320_41CC_A6DFDD888CAF",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_EF6CE355_F62E_F8F5_41E6_CBD8B4202E02",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.MainViewerVideoPlayer",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37130B8_DE61_E320_41C8_6F1748DBD735",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D372E0B8_DE61_E320_41D4_E3BEF080CF3E",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
 {
  "items": [
   {
    "start": "this.viewer_uidD2C70B09_DE62_26E0_41D3_F5EA47D70069VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_D2C08B09_DE62_26E0_41D4_7233093F9021, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_D2C08B09_DE62_26E0_41D4_7233093F9021, 0)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidD2C70B09_DE62_26E0_41D3_F5EA47D70069VideoPlayer)",
    "media": "this.video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787",
    "player": {
     "viewerArea": {
      "toolTipPaddingTop": 4,
      "playbackBarHeadBorderRadius": 0,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeight": 10,
      "paddingBottom": 0,
      "toolTipBorderSize": 1,
      "width": "100%",
      "progressLeft": 0,
      "id": "viewer_uidD2C70B09_DE62_26E0_41D3_F5EA47D70069",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadWidth": 6,
      "toolTipDisplayTime": 600,
      "minHeight": 50,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarBackgroundColorDirection": "vertical",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarProgressOpacity": 1,
      "toolTipShadowSpread": 0,
      "minWidth": 100,
      "playbackBarRight": 0,
      "toolTipFontSize": "1.11vh",
      "toolTipBorderColor": "#767676",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarBorderSize": 0,
      "height": "100%",
      "playbackBarLeft": 0,
      "playbackBarBackgroundOpacity": 1,
      "toolTipShadowOpacity": 1,
      "progressBarBorderSize": 0,
      "progressBorderSize": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipShadowBlurRadius": 3,
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "paddingRight": 0,
      "progressBottom": 2,
      "toolTipOpacity": 1,
      "progressHeight": 10,
      "playbackBarProgressBorderRadius": 0,
      "toolTipFontStyle": "normal",
      "progressBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "paddingLeft": 0,
      "playbackBarHeadShadowColor": "#000000",
      "toolTipFontFamily": "Arial",
      "progressOpacity": 1,
      "shadow": false,
      "progressBarBackgroundColorDirection": "vertical",
      "progressBarBorderColor": "#000000",
      "transitionDuration": 500,
      "progressBarBorderRadius": 0,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "toolTipShadowVerticalLength": 0,
      "propagateClick": false,
      "playbackBarBottom": 0,
      "borderSize": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadow": true,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "class": "ViewerArea",
      "paddingTop": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarOpacity": 1,
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipFontColor": "#606060",
      "displayTooltipInTouchScreens": true,
      "toolTipPaddingRight": 6,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "transitionMode": "blending",
      "toolTipPaddingLeft": 6,
      "data": {
       "name": "ViewerArea1727"
      },
      "playbackBarProgressBorderColor": "#000000",
      "progressBarOpacity": 1,
      "playbackBarBorderColor": "#FFFFFF"
     },
     "id": "viewer_uidD2C70B09_DE62_26E0_41D3_F5EA47D70069VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true
    }
   }
  ],
  "id": "playList_D2C08B09_DE62_26E0_41D4_7233093F9021",
  "class": "PlayList"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D37070B8_DE61_E320_41E0_4E0E2451C8DF",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 95.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D20C7FFC_DE61_DD20_41DB_4BA464FA2EC2"
 },
 "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
 "this.popup_72B251D5_160C_5E8C_418F_F3A0A38135F3",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37210B8_DE61_E320_41B7_B16FCFFECEF1",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_EF694FB9_F622_67BA_41E1_905F7693BFFD",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 "this.panorama_3D795AB8_1674_6284_41B2_996F167C34AA_camera",
 "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37010B8_DE61_E320_41AC_84BDDCDBD195",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "backgroundColorDirection": "vertical",
  "closeButtonBackgroundColor": [
   "#000000"
  ],
  "paddingBottom": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "verticalAlign": "middle",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "id": "window_D5ABE731_DE62_2D21_41E9_2ED5ED01B107",
  "horizontalAlign": "center",
  "closeButtonPressedBorderSize": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "titleFontFamily": "Arial",
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPaddingLeft": 5,
  "closeButtonIconColor": "#FFFFFF",
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "bodyPaddingBottom": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "minHeight": 20,
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "modal": true,
  "closeButtonIconHeight": 50,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonRollOverIconColor": "#CCCCCC",
  "backgroundColor": [],
  "minWidth": 20,
  "closeButtonIconLineWidth": 5,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "shadowOpacity": 0.5,
  "scrollBarMargin": 2,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "scrollBarOpacity": 0.5,
  "closeButtonBorderColor": "#000000",
  "backgroundOpacity": 1,
  "shadowBlurRadius": 6,
  "titlePaddingTop": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "borderRadius": 5,
  "shadowSpread": 1,
  "headerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "paddingLeft": 0,
  "closeButtonBackgroundColorDirection": "vertical",
  "headerBackgroundOpacity": 0,
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "children": [
   "this.viewer_uidD2CDFB09_DE62_26E0_41E9_8ED2C3A7E500"
  ],
  "contentOpaque": false,
  "bodyPaddingLeft": 0,
  "shadowColor": "#000000",
  "titlePaddingLeft": 5,
  "closeButtonBorderSize": 0,
  "shadow": true,
  "titleFontSize": "1.29vh",
  "shadowVerticalLength": 0,
  "headerPaddingBottom": 5,
  "closeButtonRollOverIconLineWidth": 5,
  "bodyBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "propagateClick": false,
  "layout": "vertical",
  "scrollBarVisible": "rollOver",
  "titlePaddingRight": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundOpacity": 0,
  "footerHeight": 5,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "headerVerticalAlign": "middle",
  "veilOpacity": 0.4,
  "closeButtonPressedIconColor": "#FF0000",
  "class": "Window",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonPaddingTop": 5,
  "backgroundColorRatios": [],
  "paddingTop": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "closeButtonBackgroundColorRatios": [
   0.1
  ],
  "closeButtonPaddingBottom": 5,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowHorizontalLength": 3,
  "closeButtonPaddingRight": 5,
  "closeButtonIconWidth": 50,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyBackgroundOpacity": 0,
  "closeButtonBackgroundOpacity": 0.5,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonBorderRadius": 0,
  "gap": 10,
  "bodyPaddingRight": 0,
  "data": {
   "name": "Window555"
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "headerPaddingRight": 0
 },
 {
  "initialPosition": {
   "yaw": 56.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3EE8D8A_DE61_DDE0_41E4_67C265CE5D89"
 },
 "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_D370E0B8_DE61_E320_41E4_6B00C80DAF9D",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.popup_209897EC_11B3_4D40_41A2_837DB50E3A59",
 "this.MapViewerMapPlayer",
 "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
 {
  "id": "ImageResource_69C4237A_160C_2384_41A8_784DA62FB6ED",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4AC282AC_160C_E29C_41A5_60234192F5B3_0_0.jpg",
    "width": 1687,
    "class": "ImageResourceLevel",
    "height": 1189
   },
   {
    "url": "media/popup_4AC282AC_160C_E29C_41A5_60234192F5B3_0_1.jpg",
    "width": 1023,
    "class": "ImageResourceLevel",
    "height": 721
   },
   {
    "url": "media/popup_4AC282AC_160C_E29C_41A5_60234192F5B3_0_2.jpg",
    "width": 511,
    "class": "ImageResourceLevel",
    "height": 360
   }
  ]
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D37260B8_DE61_E320_41E4_2E744A302C8E",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.panorama_35E83422_1617_E584_4186_08583C185C08_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37180B8_DE61_E320_41CC_3BF84E95F155",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "media": "this.map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_D2A57B29_DE62_2521_419B_AE82BF71218F",
  "class": "PlayList"
 },
 "this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37250B8_DE61_E320_41EB_B5BA4FD99936",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 163.89,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3D7BDA9_DE61_DD20_41E8_90EDA6FBACEF"
 },
 {
  "initialPosition": {
   "yaw": -54.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D226BC51_DE62_2360_41E2_415A715AACF0"
 },
 {
  "easing": "linear",
  "id": "effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0A72BB07_1A54_58AF_41B9_E0139F2ABDA7",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
 {
  "initialPosition": {
   "yaw": -147.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3B8EDC8_DE61_DD60_41E4_6FA86771D03B"
 },
 "this.popup_3CC23B7F_107F_4540_4180_ABF478E71F9A",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37230B8_DE61_E320_41E6_1AEC9D7228BE",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 139.18,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3446D3C_DE61_DD20_41CD_81E5403E7E8E"
 },
 "this.panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1_camera",
 "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
 {
  "initialPosition": {
   "yaw": 124.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3725D2C_DE61_DD20_41E3_6C449B4E3716"
 },
 {
  "initialPosition": {
   "yaw": 90.28,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3235C03_DE62_22E0_41B7_85392A06F734"
 },
 "this.panorama_3D7997D7_1674_228C_41AA_D403F76C06DC",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37160B8_DE61_E320_41DC_572DA86FBD79",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "backgroundColorDirection": "vertical",
  "closeButtonBackgroundColor": [],
  "paddingBottom": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "width": 400,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "id": "window_86D78109_88BC_A049_41BB_B0E11F92E0CE",
  "horizontalAlign": "center",
  "verticalAlign": "middle",
  "titleFontFamily": "Arial",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#B2B2B2",
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "bodyPaddingBottom": 0,
  "minHeight": 20,
  "titlePaddingBottom": 5,
  "headerPaddingLeft": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "modal": true,
  "closeButtonIconHeight": 20,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "height": 600,
  "minWidth": 20,
  "closeButtonIconLineWidth": 2,
  "titleFontColor": "#000000",
  "backgroundColor": [],
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "shadowOpacity": 0.5,
  "scrollBarMargin": 2,
  "headerBorderColor": "#000000",
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "headerBorderSize": 0,
  "scrollBarOpacity": 0.5,
  "backgroundOpacity": 1,
  "shadowBlurRadius": 6,
  "titlePaddingTop": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "borderRadius": 5,
  "shadowSpread": 1,
  "headerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonRollOverBackgroundColor": [],
  "paddingRight": 0,
  "paddingLeft": 0,
  "title": "",
  "headerBackgroundOpacity": 0,
  "closeButtonPressedIconLineWidth": 3,
  "titleTextDecoration": "none",
  "children": [
   "this.viewer_uidD2C70B09_DE62_26E0_41D3_F5EA47D70069"
  ],
  "contentOpaque": false,
  "bodyPaddingLeft": 0,
  "shadowColor": "#000000",
  "titlePaddingLeft": 5,
  "shadow": true,
  "titleFontSize": 14,
  "shadowVerticalLength": 0,
  "headerPaddingBottom": 5,
  "bodyBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "propagateClick": false,
  "layout": "vertical",
  "scrollBarVisible": "rollOver",
  "veilColorDirection": "horizontal",
  "titlePaddingRight": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "footerBackgroundOpacity": 0,
  "footerHeight": 5,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "headerVerticalAlign": "middle",
  "veilOpacity": 0.4,
  "closeButtonPressedIconColor": "#FFFFFF",
  "class": "Window",
  "titleFontStyle": "normal",
  "titleFontWeight": "normal",
  "backgroundColorRatios": [],
  "paddingTop": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "closeButtonBackgroundColorRatios": [],
  "closeButtonPressedBackgroundColor": [],
  "shadowHorizontalLength": 3,
  "closeButtonIconWidth": 20,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyBackgroundOpacity": 0,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonBorderRadius": 11,
  "gap": 10,
  "bodyPaddingRight": 0,
  "data": {
   "name": "Window4617"
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "headerPaddingRight": 0
 },
 {
  "initialPosition": {
   "yaw": 4.18,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2B8ACEE_DE62_2320_417A_09D3640DC166"
 },
 "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_D370B0B8_DE61_E320_41E6_10F779AA0F2E",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -148.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D222EC42_DE62_2360_41D2_B88AD0409E8F"
 },
 "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
 {
  "items": [
   {
    "start": "this.viewer_uidD2D87B19_DE62_26E0_414E_2EA200352615VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_D2BAAB57_DE62_2560_4197_8530CCB4BC6B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_D2BAAB57_DE62_2560_4197_8530CCB4BC6B, 0)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidD2D87B19_DE62_26E0_414E_2EA200352615VideoPlayer)",
    "media": "this.video_14581B06_1AFD_10E9_41B7_EBE2377910B5",
    "player": {
     "viewerArea": "this.viewer_uidD2D87B19_DE62_26E0_414E_2EA200352615",
     "id": "viewer_uidD2D87B19_DE62_26E0_414E_2EA200352615VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true
    }
   }
  ],
  "id": "PlayList_D2BAAB57_DE62_2560_4197_8530CCB4BC6B",
  "class": "PlayList"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D37100B8_DE61_E320_41D7_16363CF95AE3",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 "this.popup_940D3F6C_160D_E39C_4182_27B26B33C63C",
 {
  "initialPosition": {
   "yaw": -107.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D06CEDF7_DE61_DD20_41C5_165688BDDC21"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D36D00A8_DE61_E320_41C0_095EA5D03A03",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "linear",
  "id": "effect_D3728F7A_DF8C_960C_417C_830810DD2653",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 "this.popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "media": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_D2A5AB29_DE62_2521_41E9_D43BE062801E",
  "class": "PlayList"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D37770C7_DE61_E360_41E3_70D1C29C7D01",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -44.61,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3E3FD8A_DE61_DDE0_41E0_6D5E844F25D9"
 },
 {
  "initialPosition": {
   "yaw": 129.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D138AF4F_DE61_DD60_41D4_E807B9903D81"
 },
 "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
 {
  "easing": "cubic_in_out",
  "id": "effect_265555CE_37AF_1E4A_41C8_58F45ECAFC24",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 31.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D1099F60_DE61_DD20_41CA_2A349B26E286"
 },
 "this.popup_14DC7652_1AFD_7168_41B0_2871B449D01E",
 "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
 {
  "easing": "cubic_in_out",
  "id": "effect_0A751B07_1A54_58AF_41B6_994BD0BB5150",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_954C799B_160C_2E84_41B0_AFCA77FBB962",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 148.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3A2ADB9_DE61_DD20_41E6_4F576500918E"
 },
 "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37030C7_DE61_E360_41D4_91E1AA9C5B31",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D36FD0A8_DE61_E320_41D3_A56F14B3AFA9",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 62.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D32EEC13_DE62_22E0_41D5_5B0487E0C050"
 },
 "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
 {
  "initialPosition": {
   "yaw": 3.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D061BDE8_DE61_DD20_41D8_AA72D9753192"
 },
 "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B_camera",
 {
  "initialPosition": {
   "yaw": 98.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3397D6B_DE61_DD20_41DB_69F413D313D6"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_2653E5CF_37AF_1E4B_41CB_C2FB1B6AD4FB",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -80.55,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D339DC13_DE62_22E0_41E0_2A4D459750E9"
 },
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "media": "this.map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_D2A4DB29_DE62_2521_41E5_EE5509F6C8D4",
  "class": "PlayList"
 },
 "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
 "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_D36D20A8_DE61_E320_41D6_98B4543C9EA1",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
 {
  "easing": "cubic_in_out",
  "id": "effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -50.56,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2C6304A_DE61_E360_41E3_9FD912765B96"
 },
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "media": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_D2A52B29_DE62_2521_41C0_7872C0789488",
  "class": "PlayList"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_2606DC67_37A3_6E7A_417B_82BAC7B62691",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_28260015_3802_F531_41C1_E14F08D374DD",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "ImageResource_9C5AF85C_1634_6DBC_41A3_32718963AC15",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_940D3F6C_160D_E39C_4182_27B26B33C63C_0_0.jpg",
    "width": 2000,
    "class": "ImageResourceLevel",
    "height": 1333
   },
   {
    "url": "media/popup_940D3F6C_160D_E39C_4182_27B26B33C63C_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_940D3F6C_160D_E39C_4182_27B26B33C63C_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 {
  "initialPosition": {
   "yaw": 98.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2EC0CA0_DE62_23DF_41E2_46C616A546D5"
 },
 "this.panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686",
 {
  "initialPosition": {
   "yaw": 79.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2C7ACBF_DE62_2320_41B8_AC65114883F4"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_F083FF13_E49C_8716_41EC_3E7D67287F82",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "id": "ImageResource_69DDF38B_160C_2284_41B3_8E5E6CAD0985",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4AC31A49_1614_6D84_41A8_70E2088E8A0A_0_0.jpg",
    "width": 3890,
    "class": "ImageResourceLevel",
    "height": 2593
   },
   {
    "url": "media/popup_4AC31A49_1614_6D84_41A8_70E2088E8A0A_0_1.jpg",
    "width": 2047,
    "class": "ImageResourceLevel",
    "height": 1365
   },
   {
    "url": "media/popup_4AC31A49_1614_6D84_41A8_70E2088E8A0A_0_2.jpg",
    "width": 1023,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_4AC31A49_1614_6D84_41A8_70E2088E8A0A_0_3.jpg",
    "width": 511,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_265485CE_37AF_1E4D_41BF_B2096F69C00B",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -116.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3F9BD9A_DE61_DDE3_41DB_4E7785E5E305"
 },
 "this.panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2_camera",
 "this.popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37050B8_DE61_E320_41B4_9E0AF71E1927",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 64.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2E6102B_DE61_E320_41E6_6F938C4BAD82"
 },
 {
  "initialPosition": {
   "yaw": 13.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3047D6B_DE61_DD20_41D1_7663CD5D699D"
 },
 "this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_D37000B8_DE61_E320_41E4_F77F75EB730A",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 35.26,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2129C80_DE62_23E0_41E1_B384C41DB352"
 },
 {
  "initialPosition": {
   "yaw": -46.66,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2926CFD_DE62_2320_41D8_CB358AEAD50A"
 },
 {
  "initialPosition": {
   "yaw": 58.95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 100
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D0E34E74_DE61_DF20_4178_7F0B50F02F88"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D37040B8_DE61_E320_4193_D5802BD418FA",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
 "this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7",
 {
  "easing": "cubic_in_out",
  "id": "effect_0A4A5AF7_1A54_596E_4160_0BC7A9E29E78",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": -83.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D0CF1EA3_DE61_DF20_41CA_494AD945DD3A"
 },
 {
  "initialPosition": {
   "yaw": 176.87,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D0864EE2_DE61_DF20_41C4_255F15C16B5F"
 },
 "this.panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1",
 {
  "easing": "cubic_in_out",
  "id": "effect_28264015_3802_F531_4190_725BE50AAA5D",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 150.05,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 100
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D298CD0D_DE62_22E0_41D3_D22902961E97"
 },
 {
  "initialPosition": {
   "yaw": 70.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2289C61_DE62_2320_41C1_69669820906A"
 },
 {
  "initialPosition": {
   "yaw": -113.6,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3053C23_DE62_2321_41D1_DECBD587AD1F"
 },
 {
  "initialPosition": {
   "yaw": 176.84,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2FFD04A_DE61_E360_41D5_574C9637E1EB"
 },
 {
  "initialPosition": {
   "yaw": -147.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 100
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2A7D079_DE61_E320_41DB_13A878EFE4DE"
 },
 {
  "initialPosition": {
   "yaw": -74.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D23D8C71_DE62_2321_41DD_C6790FEE3144"
 },
 {
  "initialPosition": {
   "yaw": -126.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3965DE8_DE61_DD20_41EB_045E3ED55EA2"
 },
 {
  "initialPosition": {
   "yaw": -30.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D365BD1D_DE62_22E1_41E9_8FDDB177C48C"
 },
 "this.panorama_5F372E49_160C_6584_4186_1E0077946A37_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_D377C0C7_DE61_E360_41E8_AD1D19F123C7",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_263D9C61_37A3_6E77_41B5_2D93BDF0ECDD",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 "this.panorama_3D79D3BF_1674_22FC_4196_7C67831E524C",
 {
  "id": "ImageResource_C4896E50_D4F3_6B5D_41D3_2EEBDC3443C4",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_0.jpg",
    "width": 3861,
    "class": "ImageResourceLevel",
    "height": 2574
   },
   {
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_1.jpg",
    "width": 2048,
    "class": "ImageResourceLevel",
    "height": 1365
   },
   {
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_3.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_D37780B8_DE61_E320_41E4_BBFF76E5FEC8",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_E35A8219_ED68_457C_41E5_C52BA0340B76",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 98.55,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D217500C_DE61_E2E0_41C2_DD2C63A64896"
 },
 "this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15",
 {
  "easing": "cubic_in_out",
  "id": "effect_E359B21B_ED68_4573_41E3_2134D2902989",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "media": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_D2A51B29_DE62_2521_41D2_2BDFDC260FA2",
  "class": "PlayList"
 },
 {
  "initialPosition": {
   "yaw": -176.54,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D3787BD4_DE62_2560_41E3_6600E2F5AD09"
 },
 "this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
 {
  "easing": "cubic_in_out",
  "id": "effect_EF6DE039_F622_38BD_41E2_3149DB234972",
  "class": "FadeInEffect",
  "duration": 0
 },
 {
  "initialPosition": {
   "yaw": 172.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2F9ECAF_DE62_2320_41B1_824E6D14198A"
 },
 "this.popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43",
 "this.panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E_camera",
 "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_D371E0B8_DE61_E320_41E8_86436EA3CFC1",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "initialPosition": {
   "yaw": 97.3,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_D2E3001C_DE61_E2E7_41E5_DD4C4AAA2DC7"
 },
 "this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E"
], "children": [
 {
  "toolTipPaddingTop": 4,
  "playbackBarHeadBorderRadius": 0,
  "left": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeight": 10,
  "paddingBottom": 0,
  "toolTipFontWeight": "normal",
  "toolTipBorderSize": 1,
  "width": "100%",
  "progressLeft": 0,
  "id": "MainViewer",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadWidth": 6,
  "toolTipDisplayTime": 600,
  "minHeight": 50,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressOpacity": 1,
  "toolTipShadowSpread": 0,
  "minWidth": 100,
  "playbackBarRight": 0,
  "toolTipFontSize": 12,
  "toolTipBorderColor": "#767676",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipBorderRadius": 3,
  "playbackBarBorderSize": 0,
  "height": "100%",
  "playbackBarLeft": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipShadowOpacity": 1,
  "progressBarBorderSize": 0,
  "progressBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowBlurRadius": 3,
  "playbackBarProgressBorderSize": 0,
  "paddingRight": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBorderRadius": 0,
  "progressBottom": 0,
  "toolTipOpacity": 1,
  "progressHeight": 10,
  "paddingLeft": 0,
  "toolTipFontStyle": "normal",
  "progressBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipFontFamily": "Arial",
  "progressOpacity": 1,
  "shadow": false,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarBorderColor": "#000000",
  "transitionDuration": 500,
  "progressBarBorderRadius": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "toolTipShadowVerticalLength": 0,
  "propagateClick": false,
  "playbackBarBottom": 5,
  "borderSize": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowHorizontalLength": 0,
  "top": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadShadow": true,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipPaddingBottom": 4,
  "progressBackgroundOpacity": 1,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "class": "ViewerArea",
  "paddingTop": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipFontColor": "#606060",
  "displayTooltipInTouchScreens": true,
  "toolTipPaddingRight": 6,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "transitionMode": "blending",
  "toolTipPaddingLeft": 6,
  "data": {
   "name": "Main Viewer"
  },
  "playbackBarProgressBorderColor": "#000000",
  "progressBarOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF"
 },
 {
  "children": [
   {
    "children": [
     {
      "toolTipPaddingTop": 4,
      "toolTipFontStyle": "normal",
      "paddingBottom": 0,
      "toolTipFontWeight": "normal",
      "width": 75,
      "toolTipFontFamily": "Arial",
      "id": "IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9",
      "horizontalAlign": "center",
      "toolTipBorderSize": 1,
      "shadow": false,
      "verticalAlign": "middle",
      "toolTipDisplayTime": 600,
      "borderSize": 0,
      "minHeight": 1,
      "pressedIconURL": "skin/IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9_pressed.png",
      "toolTipShadowVerticalLength": 0,
      "propagateClick": false,
      "toolTipShadowColor": "#333333",
      "toolTipShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "toolTip": "Info",
      "toolTipShadowSpread": 0,
      "minWidth": 1,
      "mode": "toggle",
      "class": "IconButton",
      "toolTipFontSize": 12,
      "toolTipBorderColor": "#767676",
      "click": "this.showPopupMedia(this.window_86D78109_88BC_A049_41BB_B0E11F92E0CE, this.video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787, this.playList_D2C08B09_DE62_26E0_41D4_7233093F9021, '90%', '90%', false, true)",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "transparencyActive": true,
      "paddingTop": 0,
      "toolTipShadowOpacity": 1,
      "height": 50,
      "toolTipPaddingLeft": 6,
      "toolTipFontColor": "#606060",
      "toolTipPaddingRight": 6,
      "backgroundOpacity": 0,
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipTextShadowBlurRadius": 3,
      "data": {
       "name": "Button55836"
      },
      "toolTipShadowBlurRadius": 3,
      "paddingRight": 0,
      "iconURL": "skin/IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9.png",
      "cursor": "hand",
      "paddingLeft": 0,
      "toolTipOpacity": 1
     },
     {
      "toolTipPaddingTop": 4,
      "toolTipFontStyle": "normal",
      "paddingBottom": 0,
      "toolTipFontWeight": "normal",
      "width": 75,
      "toolTipFontFamily": "Arial",
      "id": "IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0",
      "horizontalAlign": "center",
      "toolTipBorderSize": 1,
      "shadow": false,
      "verticalAlign": "middle",
      "toolTipDisplayTime": 600,
      "borderSize": 0,
      "minHeight": 1,
      "pressedIconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0_pressed.png",
      "toolTipShadowVerticalLength": 0,
      "propagateClick": false,
      "toolTipShadowColor": "#333333",
      "toolTipShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "toolTip": "Home",
      "toolTipShadowSpread": 0,
      "minWidth": 1,
      "mode": "toggle",
      "class": "IconButton",
      "toolTipFontSize": 12,
      "toolTipBorderColor": "#767676",
      "click": "this.mainPlayList.set('selectedIndex', 0)",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "transparencyActive": true,
      "paddingTop": 0,
      "toolTipShadowOpacity": 1,
      "height": 50,
      "toolTipPaddingLeft": 6,
      "toolTipFontColor": "#606060",
      "toolTipPaddingRight": 6,
      "backgroundOpacity": 0,
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipTextShadowBlurRadius": 3,
      "data": {
       "name": "Button_home"
      },
      "toolTipShadowBlurRadius": 3,
      "paddingRight": 0,
      "iconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0.png",
      "cursor": "hand",
      "paddingLeft": 0,
      "toolTipOpacity": 1
     },
     {
      "toolTipPaddingTop": 4,
      "toolTipFontStyle": "normal",
      "paddingBottom": 0,
      "toolTipFontWeight": "normal",
      "width": 75,
      "toolTipFontFamily": "Arial",
      "id": "IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2",
      "horizontalAlign": "center",
      "toolTipBorderSize": 1,
      "shadow": false,
      "verticalAlign": "middle",
      "toolTipDisplayTime": 600,
      "borderSize": 0,
      "minHeight": 1,
      "pressedIconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2_pressed.png",
      "toolTipShadowVerticalLength": 0,
      "propagateClick": false,
      "toolTipShadowColor": "#333333",
      "toolTipShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "toolTip": "Map",
      "toolTipShadowSpread": 0,
      "minWidth": 1,
      "mode": "toggle",
      "class": "IconButton",
      "toolTipFontSize": 12,
      "toolTipBorderColor": "#767676",
      "click": "if(!this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, true, 0, this.effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42, 'showEffect', false) } else { this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, false, 0, this.effect_D3728F7A_DF8C_960C_417C_830810DD2653, 'hideEffect', false) }",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "transparencyActive": true,
      "paddingTop": 0,
      "toolTipShadowOpacity": 1,
      "height": 50,
      "toolTipPaddingLeft": 6,
      "toolTipFontColor": "#606060",
      "toolTipPaddingRight": 6,
      "backgroundOpacity": 0,
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipTextShadowBlurRadius": 3,
      "data": {
       "name": "Button_Map"
      },
      "toolTipShadowBlurRadius": 3,
      "paddingRight": 0,
      "iconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2.png",
      "cursor": "hand",
      "paddingLeft": 0,
      "toolTipOpacity": 1
     },
     "this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667"
    ],
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "contentOpaque": false,
    "width": 334,
    "id": "Container_FD43509A_EC70_8CA6_41E8_9E5B7D453FAE",
    "horizontalAlign": "center",
    "shadow": false,
    "verticalAlign": "middle",
    "gap": 10,
    "borderSize": 0,
    "minHeight": 77,
    "propagateClick": false,
    "layout": "horizontal",
    "scrollBarVisible": "rollOver",
    "height": 77,
    "minWidth": 334,
    "class": "Container",
    "backgroundColorRatios": [
     0.8
    ],
    "paddingTop": 0,
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "scrollBarWidth": 10,
    "backgroundColor": [
     "#000000"
    ],
    "backgroundOpacity": 0.1,
    "borderRadius": 0,
    "scrollBarOpacity": 0.5,
    "data": {
     "name": "Container_btones"
    },
    "paddingRight": 0,
    "backgroundColorDirection": "vertical",
    "paddingLeft": 0
   }
  ],
  "paddingBottom": 0,
  "left": "0%",
  "contentOpaque": false,
  "verticalAlign": "middle",
  "id": "Container_D19AA380_DE1B_2AF3_41EA_D9B3468B686F",
  "shadow": false,
  "width": "100%",
  "horizontalAlign": "center",
  "gap": 10,
  "borderSize": 0,
  "minHeight": 1,
  "propagateClick": false,
  "layout": "horizontal",
  "scrollBarVisible": "rollOver",
  "bottom": "0%",
  "minWidth": 1,
  "class": "Container",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "height": "18.033%",
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "data": {
   "name": "Container_Menu"
  },
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "paddingLeft": 0
 },
 {
  "children": [
   {
    "children": [
     "this.MapViewer",
     {
      "maxHeight": 264,
      "maxWidth": 448,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "id": "Image_E84AED1C_E346_1439_41DD_9142DAACB163",
      "horizontalAlign": "center",
      "shadow": false,
      "width": "100%",
      "url": "skin/Image_E84AED1C_E346_1439_41DD_9142DAACB163.png",
      "borderSize": 0,
      "minHeight": 1,
      "propagateClick": false,
      "minWidth": 1,
      "class": "Image",
      "paddingTop": 0,
      "height": "27.233%",
      "backgroundOpacity": 0,
      "borderRadius": 0,
      "data": {
       "name": "Simbologia"
      },
      "scaleMode": "fit_inside",
      "paddingRight": 0,
      "paddingLeft": 0
     }
    ],
    "paddingBottom": 0,
    "contentOpaque": false,
    "verticalAlign": "middle",
    "id": "Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5",
    "horizontalAlign": "center",
    "shadow": false,
    "width": "100%",
    "gap": 10,
    "borderSize": 0,
    "minHeight": 1,
    "propagateClick": false,
    "layout": "vertical",
    "scrollBarVisible": "rollOver",
    "minWidth": 1,
    "class": "Container",
    "paddingTop": 0,
    "scrollBarMargin": 2,
    "height": "81.45%",
    "overflow": "scroll",
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "data": {
     "name": "Container_Map"
    },
    "paddingRight": 0,
    "scrollBarColor": "#000000",
    "paddingLeft": 0
   }
  ],
  "paddingBottom": 0,
  "contentOpaque": false,
  "verticalAlign": "top",
  "id": "Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F",
  "horizontalAlign": "center",
  "right": "0%",
  "shadow": false,
  "width": "29.316%",
  "gap": 10,
  "borderSize": 0,
  "minHeight": 1,
  "propagateClick": false,
  "layout": "vertical",
  "scrollBarVisible": "rollOver",
  "minWidth": 1,
  "class": "Container",
  "top": "2.05%",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "height": "77.049%",
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "data": {
   "name": "Main_Container"
  },
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "paddingLeft": 0
 },
 {
  "children": [
   {
    "popUpFontColor": "#000000",
    "fontFamily": "Arial",
    "gap": 0,
    "height": "27.397%",
    "paddingBottom": 0,
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "width": "20.256%",
    "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F",
    "playList": "this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
    "shadow": false,
    "popUpShadowColor": "#000000",
    "popUpShadow": false,
    "arrowColor": "#0066FF",
    "selectedPopUpFontColor": "#FFFFFF",
    "popUpBorderRadius": 0,
    "borderSize": 0,
    "minHeight": 20,
    "propagateClick": false,
    "arrowBeforeLabel": false,
    "popUpShadowOpacity": 0,
    "prompt": "Location List",
    "popUpGap": 0,
    "minWidth": 200,
    "popUpBackgroundOpacity": 0.72,
    "backgroundColorRatios": [
     0,
     1
    ],
    "popUpShadowSpread": 1,
    "class": "DropDown",
    "paddingTop": 0,
    "fontSize": 14,
    "backgroundColor": [
     "#00CCFF",
     "#0099FF"
    ],
    "fontColor": "#333333",
    "popUpBackgroundColor": "#FFFFFF",
    "fontStyle": "normal",
    "backgroundOpacity": 0.72,
    "borderRadius": 4,
    "selectedPopUpBackgroundColor": "#0066FF",
    "data": {
     "name": "Location List"
    },
    "paddingRight": 5,
    "textDecoration": "none",
    "popUpShadowBlurRadius": 6,
    "backgroundColorDirection": "vertical",
    "fontWeight": "normal",
    "paddingLeft": 5
   }
  ],
  "paddingBottom": 0,
  "left": "0%",
  "contentOpaque": false,
  "verticalAlign": "top",
  "id": "Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F",
  "shadow": false,
  "width": "100%",
  "horizontalAlign": "left",
  "gap": 10,
  "borderSize": 0,
  "minHeight": 1,
  "propagateClick": false,
  "layout": "horizontal",
  "scrollBarVisible": "rollOver",
  "minWidth": 1,
  "class": "Container",
  "top": "0.96%",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "height": "10%",
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "data": {
   "name": "ContainerDropDown"
  },
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "paddingLeft": 0
 },
 {
  "fontFamily": "Arial",
  "paddingBottom": 0,
  "left": "0%",
  "textShadowBlurRadius": 3,
  "verticalAlign": "middle",
  "id": "Label_E2D61738_F65E_D8BA_41DD_6888E340C197",
  "shadow": false,
  "width": "100%",
  "horizontalAlign": "center",
  "textShadowHorizontalLength": 1,
  "text": "La Lima Free Zone",
  "minHeight": 1,
  "propagateClick": false,
  "borderSize": 0,
  "minWidth": 1,
  "class": "Label",
  "top": "0%",
  "textShadowOpacity": 1,
  "textShadowColor": "#000000",
  "paddingTop": 0,
  "fontSize": 20,
  "height": "10%",
  "fontColor": "#FFFFFF",
  "textShadowVerticalLength": 1,
  "fontStyle": "normal",
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "data": {
   "name": "Label_La Lima Free Zone"
  },
  "paddingRight": 0,
  "textDecoration": "none",
  "visible": false,
  "fontWeight": "normal",
  "paddingLeft": 0
 },
 {
  "fontFamily": "Arial",
  "paddingBottom": 0,
  "left": "0%",
  "textShadowBlurRadius": 3,
  "verticalAlign": "middle",
  "id": "Label_E253EC4C_F622_28DA_41DB_546DF82EE842",
  "shadow": false,
  "width": "100%",
  "horizontalAlign": "center",
  "textShadowHorizontalLength": 1,
  "text": "Cartago City",
  "minHeight": 1,
  "propagateClick": false,
  "borderSize": 0,
  "minWidth": 1,
  "class": "Label",
  "top": "0%",
  "textShadowOpacity": 1,
  "textShadowColor": "#000000",
  "paddingTop": 0,
  "fontSize": 20,
  "height": "10%",
  "fontColor": "#FFFFFF",
  "textShadowVerticalLength": 1,
  "fontStyle": "normal",
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "data": {
   "name": "Label_Cartago City"
  },
  "paddingRight": 0,
  "textDecoration": "none",
  "visible": false,
  "fontWeight": "normal",
  "paddingLeft": 0
 },
 {
  "fontFamily": "Arial",
  "paddingBottom": 0,
  "left": "0%",
  "textShadowBlurRadius": 3,
  "verticalAlign": "middle",
  "id": "Label_E216BE12_F622_684F_41EC_C2D2817E217E",
  "shadow": false,
  "width": "100%",
  "horizontalAlign": "center",
  "textShadowHorizontalLength": 1,
  "text": "Corporate Center Project",
  "minHeight": 1,
  "propagateClick": false,
  "borderSize": 0,
  "minWidth": 1,
  "class": "Label",
  "top": "0%",
  "textShadowOpacity": 1,
  "textShadowColor": "#000000",
  "paddingTop": 0,
  "fontSize": 20,
  "height": "13.108%",
  "fontColor": "#FFFFFF",
  "textShadowVerticalLength": 1,
  "fontStyle": "normal",
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "data": {
   "name": "Label_Corporate Center"
  },
  "paddingRight": 0,
  "textDecoration": "none",
  "visible": false,
  "fontWeight": "normal",
  "paddingLeft": 0
 },
 {
  "fontFamily": "Arial",
  "paddingBottom": 0,
  "left": "0%",
  "textShadowBlurRadius": 3,
  "verticalAlign": "middle",
  "id": "Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515",
  "shadow": false,
  "width": "100%",
  "horizontalAlign": "center",
  "textShadowHorizontalLength": 1,
  "text": "Corporate Building",
  "minHeight": 1,
  "propagateClick": false,
  "borderSize": 0,
  "minWidth": 1,
  "class": "Label",
  "top": "6%",
  "textShadowOpacity": 1,
  "textShadowColor": "#000000",
  "paddingTop": 0,
  "fontSize": 20,
  "height": "3.5%",
  "fontColor": "#FFFFFF",
  "textShadowVerticalLength": 1,
  "fontStyle": "normal",
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "data": {
   "name": "Label_Corporate Building"
  },
  "paddingRight": 0,
  "textDecoration": "none",
  "visible": false,
  "fontWeight": "normal",
  "paddingLeft": 0
 },
 {
  "children": [
   {
    "children": [
     {
      "height": "100%",
      "paddingBottom": 0,
      "width": "99.907%",
      "id": "WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21",
      "right": "0%",
      "shadow": false,
      "scrollEnabled": true,
      "url": "https://www.xline3d.com/360/lalimav6.html",
      "borderSize": 0,
      "minHeight": 1,
      "propagateClick": false,
      "insetBorder": false,
      "top": "0%",
      "minWidth": 1,
      "backgroundColorRatios": [
       0
      ],
      "class": "WebFrame",
      "paddingTop": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "backgroundOpacity": 1,
      "borderRadius": 0,
      "data": {
       "name": "WebFrame"
      },
      "paddingRight": 0,
      "backgroundColorDirection": "vertical",
      "paddingLeft": 0
     },
     {
      "maxHeight": 396,
      "maxWidth": 394,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "id": "Image_8DEE620A_9CF3_CE34_41DA_A961CBC52418",
      "horizontalAlign": "center",
      "right": "0%",
      "shadow": false,
      "width": "6.97%",
      "url": "skin/Image_8DEE620A_9CF3_CE34_41DA_A961CBC52418.png",
      "borderSize": 0,
      "minHeight": 40,
      "propagateClick": false,
      "minWidth": 40,
      "class": "Image",
      "top": "0%",
      "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, false, 0, null, null, false)",
      "paddingTop": 0,
      "height": "10.979%",
      "backgroundOpacity": 0,
      "borderRadius": 0,
      "data": {
       "name": "Button CloseFrame"
      },
      "scaleMode": "fit_inside",
      "paddingRight": 0,
      "paddingLeft": 0
     }
    ],
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "left": "4.32%",
    "contentOpaque": false,
    "verticalAlign": "top",
    "id": "Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41",
    "shadow": false,
    "width": "91.341%",
    "horizontalAlign": "left",
    "gap": 10,
    "borderSize": 0,
    "minHeight": 1,
    "propagateClick": false,
    "layout": "absolute",
    "scrollBarVisible": "rollOver",
    "bottom": "3.11%",
    "minWidth": 1,
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "paddingTop": 0,
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "overflow": "scroll",
    "scrollBarWidth": 10,
    "height": "91.081%",
    "backgroundOpacity": 0.3,
    "borderRadius": 0,
    "scrollBarOpacity": 0.5,
    "data": {
     "name": "Web container "
    },
    "paddingRight": 0,
    "backgroundColorDirection": "vertical",
    "paddingLeft": 0
   }
  ],
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "left": "0%",
  "contentOpaque": false,
  "verticalAlign": "top",
  "id": "Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E",
  "creationPolicy": "inAdvance",
  "shadow": false,
  "width": "100%",
  "height": "100%",
  "horizontalAlign": "left",
  "gap": 10,
  "borderSize": 0,
  "minHeight": 1,
  "propagateClick": false,
  "layout": "absolute",
  "top": "0%",
  "scrollBarVisible": "rollOver",
  "minWidth": 1,
  "backgroundColorRatios": [
   0
  ],
  "class": "Container",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "backgroundColor": [
   "#000000"
  ],
  "backgroundOpacity": 0.3,
  "borderRadius": 0,
  "scrollBarOpacity": 0.5,
  "data": {
   "name": "Main Container Web link"
  },
  "visible": false,
  "paddingRight": 0,
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0
 },
 {
  "paddingBottom": 0,
  "left": 0,
  "id": "veilPopupPanorama",
  "right": 0,
  "shadow": false,
  "borderSize": 0,
  "minHeight": 0,
  "propagateClick": false,
  "top": 0,
  "bottom": 0,
  "minWidth": 0,
  "backgroundColorRatios": [
   0
  ],
  "class": "UIComponent",
  "paddingTop": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "backgroundColor": [
   "#000000"
  ],
  "backgroundOpacity": 0.55,
  "borderRadius": 0,
  "data": {
   "name": "UIComponent1730"
  },
  "visible": false,
  "paddingRight": 0,
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0
 },
 {
  "paddingBottom": 0,
  "left": 0,
  "id": "zoomImagePopupPanorama",
  "right": 0,
  "shadow": false,
  "borderSize": 0,
  "minHeight": 0,
  "propagateClick": false,
  "top": 0,
  "bottom": 0,
  "minWidth": 0,
  "backgroundColorRatios": [],
  "class": "ZoomImage",
  "paddingTop": 0,
  "backgroundColor": [],
  "backgroundOpacity": 1,
  "borderRadius": 0,
  "data": {
   "name": "ZoomImage1731"
  },
  "visible": false,
  "scaleMode": "custom",
  "paddingRight": 0,
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0
 },
 {
  "fontFamily": "Arial",
  "iconWidth": 20,
  "data": {
   "name": "CloseButton1732"
  },
  "gap": 5,
  "paddingBottom": 5,
  "verticalAlign": "middle",
  "id": "closeButtonPopupPanorama",
  "horizontalAlign": "center",
  "right": 10,
  "shadow": false,
  "shadowColor": "#000000",
  "iconHeight": 20,
  "fontSize": "1.29vh",
  "borderSize": 0,
  "minHeight": 0,
  "propagateClick": false,
  "borderColor": "#000000",
  "fontWeight": "normal",
  "top": 10,
  "layout": "horizontal",
  "iconBeforeLabel": true,
  "minWidth": 0,
  "mode": "push",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "label": "",
  "class": "CloseButton",
  "paddingTop": 5,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "rollOverIconColor": "#666666",
  "iconLineWidth": 5,
  "fontColor": "#FFFFFF",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundOpacity": 0.3,
  "borderRadius": 0,
  "pressedIconColor": "#888888",
  "fontStyle": "normal",
  "shadowBlurRadius": 6,
  "visible": false,
  "paddingRight": 5,
  "iconColor": "#000000",
  "textDecoration": "none",
  "cursor": "hand",
  "backgroundColorDirection": "vertical",
  "shadowSpread": 1,
  "paddingLeft": 5
 }
], 
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_D2A51B29_DE62_2521_41D2_2BDFDC260FA2.set('selectedIndex', 0)",
 "gap": 10,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "contentOpaque": false,
 "verticalAlign": "top",
 "id": "rootPlayer",
 "horizontalAlign": "left",
 "shadow": false,
 "width": "100%",
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "class": "Player",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "scripts": {
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "existsKey": function(key){  return key in window; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getKey": function(key){  return window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } }
 },
 "height": "100%",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Player7285"
 },
 "vrPolyfillScale": 0.5,
 "desktopMipmappingEnabled": false,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "paddingLeft": 0
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
