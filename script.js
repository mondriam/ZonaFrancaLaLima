(function(){
    var script = { "definitions": [
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_30960366_24BE_70F4_419F_51C97CE28919",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42",
  "duration": 1000
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 76.35,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_3C8ECD4B_24BD_903C_41A0_258C7B28BD6C"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9",
  "duration": 1000
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera"
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_3096B356_24BE_70D4_419C_1ED4CA1E4B7D",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E3587215_ED68_4577_4183_716A0D8E6DA7",
  "duration": 1000
 },
 {
  "mapLocations": [
   {
    "map": {
     "initialZoomFactor": 1,
     "class": "Map",
     "thumbnailUrl": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_t.png",
     "id": "map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
     "overlays": [
      {
       "useHandCursor": true,
       "map": {
        "width": 80,
        "x": 241.15,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_0_map.gif",
           "width": 40,
           "height": 40
          }
         ]
        },
        "y": 382.75,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 80,
        "offsetX": 0
       },
       "image": {
        "x": 241.15,
        "y": 382.75,
        "class": "HotspotMapOverlayImage",
        "width": 80,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_0.png",
           "width": 80,
           "height": 80
          }
         ]
        },
        "height": 80
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "id": "overlay_C85F514D_DD1A_7E64_41E9_30CB45494AAF",
       "rollOverDisplay": false,
       "data": {
        "label": "Entrada"
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 40,
        "x": 262.7,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_1_map.gif",
           "width": 20,
           "height": 20
          }
         ]
        },
        "y": 286.8,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 40,
        "offsetX": 0
       },
       "image": {
        "x": 262.7,
        "y": 286.8,
        "class": "HotspotMapOverlayImage",
        "width": 40,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_1.png",
           "width": 40,
           "height": 40
          }
         ]
        },
        "height": 40
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_33CA6C80_24BD_902C_41B5_B431A8DE4AAB.set('selectedIndex', -1); }, this); this.playList_33CA6C80_24BD_902C_41B5_B431A8DE4AAB.set('selectedIndex', 0)"
        }
       ],
       "id": "overlay_CA4EA4DE_DD1B_A664_41E0_AE0B0C78521C",
       "rollOverDisplay": false,
       "data": {
        "label": "Rotonda"
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 20,
        "x": 286.9,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_2_map.gif",
           "width": 10,
           "height": 10
          }
         ]
        },
        "y": 323.85,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "image": {
        "x": 286.9,
        "y": 323.85,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_2.png",
           "width": 20,
           "height": 20
          }
         ]
        },
        "height": 20
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_33C43C70_24BD_90ED_4173_90A8830AB198.set('selectedIndex', -1); }, this); this.playList_33C43C70_24BD_90ED_4173_90A8830AB198.set('selectedIndex', 0)"
        }
       ],
       "id": "overlay_CB611BF8_DD1A_A22C_41D9_CBADF82A7516",
       "rollOverDisplay": true,
       "data": {
        "label": "CC"
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 40,
        "x": 69.75,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_3_map.gif",
           "width": 20,
           "height": 20
          }
         ]
        },
        "y": 287.7,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 40,
        "offsetX": 0
       },
       "image": {
        "x": 69.75,
        "y": 287.7,
        "class": "HotspotMapOverlayImage",
        "width": 40,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_3.png",
           "width": 40,
           "height": 40
          }
         ]
        },
        "height": 40
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_33CB6C90_24BD_902C_41BD_0EECAC71B6BC.set('selectedIndex', -1); }, this); this.playList_33CB6C90_24BD_902C_41BD_0EECAC71B6BC.set('selectedIndex', 0)"
        }
       ],
       "id": "overlay_CB150A1A_DD16_ADEC_41E0_7B7C63D3E43F",
       "rollOverDisplay": false,
       "data": {
        "label": "Esquina Izquierda"
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 40,
        "x": 76.9,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_5_map.gif",
           "width": 20,
           "height": 20
          }
         ]
        },
        "y": 415.15,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 40,
        "offsetX": 0
       },
       "image": {
        "x": 76.9,
        "y": 415.15,
        "class": "HotspotMapOverlayImage",
        "width": 40,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_5.png",
           "width": 40,
           "height": 40
          }
         ]
        },
        "height": 40
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_33CB1C90_24BD_902C_41BB_F420397B113F.set('selectedIndex', -1); }, this); this.playList_33CB1C90_24BD_902C_41BB_F420397B113F.set('selectedIndex', 0)"
        }
       ],
       "id": "overlay_C5D00BE4_DD09_E224_4193_1E7B3F21AC96",
       "rollOverDisplay": false,
       "data": {
        "label": "Izquierda 3"
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 20,
        "x": 72.45,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_6_map.gif",
           "width": 10,
           "height": 10
          }
         ]
        },
        "y": 208.05,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "image": {
        "x": 72.45,
        "y": 208.05,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_6.png",
           "width": 20,
           "height": 20
          }
         ]
        },
        "height": 20
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_33F47C90_24BD_902C_41B3_70299EFEE89E.set('selectedIndex', -1); }, this); this.playList_33F47C90_24BD_902C_41B3_70299EFEE89E.set('selectedIndex', 0)"
        }
       ],
       "id": "overlay_CAE100A4_DD0B_BE24_41EB_507D59E649BA",
       "rollOverDisplay": true,
       "data": {
        "label": "Edwards-Hareus"
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 40,
        "x": 58.4,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_7_map.gif",
           "width": 20,
           "height": 20
          }
         ]
        },
        "y": 118.6,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 40,
        "offsetX": 0
       },
       "image": {
        "x": 58.4,
        "y": 118.6,
        "class": "HotspotMapOverlayImage",
        "width": 40,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_7.png",
           "width": 40,
           "height": 40
          }
         ]
        },
        "height": 40
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_33F4CC90_24BD_902C_41B1_A5AB9E30EE23.set('selectedIndex', -1); }, this); this.playList_33F4CC90_24BD_902C_41B1_A5AB9E30EE23.set('selectedIndex', 0)"
        }
       ],
       "id": "overlay_CB9F085C_DD0A_AE64_41AF_81B501144D5C",
       "rollOverDisplay": false,
       "data": {
        "label": "Esquina Atras"
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 20,
        "x": 178.3,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_8_map.gif",
           "width": 10,
           "height": 10
          }
         ]
        },
        "y": 127.95,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "image": {
        "x": 178.3,
        "y": 127.95,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_8.png",
           "width": 20,
           "height": 20
          }
         ]
        },
        "height": 20
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_33F55C90_24BD_902C_418A_14893D3C0F1A.set('selectedIndex', -1); }, this); this.playList_33F55C90_24BD_902C_418A_14893D3C0F1A.set('selectedIndex', 0)"
        }
       ],
       "id": "overlay_CABD30AB_DD0E_9E23_41E5_2606484DA696",
       "rollOverDisplay": true,
       "data": {
        "label": "Atras1"
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 20,
        "x": 283.95,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_10_map.gif",
           "width": 10,
           "height": 10
          }
         ]
        },
        "y": 206.9,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "image": {
        "x": 283.95,
        "y": 206.9,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_10.png",
           "width": 20,
           "height": 20
          }
         ]
        },
        "height": 20
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_33F5BC90_24BD_902C_41A0_5EAB16DCBB23.set('selectedIndex', -1); }, this); this.playList_33F5BC90_24BD_902C_41A0_5EAB16DCBB23.set('selectedIndex', 0)"
        }
       ],
       "id": "overlay_C53D65EB_DD09_A62C_41B4_A4FE1383C9E0",
       "rollOverDisplay": true,
       "data": {
        "label": "Plantas de tratamiento"
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 20,
        "x": 347.9,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_11_map.gif",
           "width": 10,
           "height": 10
          }
         ]
        },
        "y": 254.95,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "image": {
        "x": 347.9,
        "y": 254.95,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_11.png",
           "width": 20,
           "height": 20
          }
         ]
        },
        "height": 20
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_33F60C90_24BD_902C_41B0_8F04A1D97645.set('selectedIndex', -1); }, this); this.playList_33F60C90_24BD_902C_41B0_8F04A1D97645.set('selectedIndex', 0)"
        }
       ],
       "id": "overlay_CA1A2975_DD0B_AE24_41D6_FDACEA0678CB",
       "rollOverDisplay": true,
       "data": {
        "label": "Derecha 1"
       }
      },
      {
       "useHandCursor": true,
       "map": {
        "width": 40,
        "x": 263,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_14_map.gif",
           "width": 16,
           "height": 16
          }
         ]
        },
        "y": 121,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 40,
        "offsetX": 0
       },
       "image": {
        "x": 263,
        "y": 121,
        "class": "HotspotMapOverlayImage",
        "width": 40,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_14.png",
           "width": 40,
           "height": 40
          }
         ]
        },
        "height": 40
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_33F74C90_24BD_902C_41BC_C48867BCD9CD.set('selectedIndex', -1); }, this); this.playList_33F74C90_24BD_902C_41BC_C48867BCD9CD.set('selectedIndex', 0)"
        }
       ],
       "id": "overlay_31036381_2420_B4E9_41BB_D2ED760E3DE7",
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       }
      }
     ],
     "label": "Zona Franca",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6.png",
        "width": 500,
        "height": 485
       }
      ]
     },
     "width": 500,
     "maximumZoomFactor": 1.2,
     "fieldOfViewOverlayOutsideOpacity": 0,
     "fieldOfViewOverlayInsideOpacity": 0.31,
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayInsideColor": "#000000",
     "fieldOfViewOverlayOutsideColor": "#000000",
     "fieldOfViewOverlayRadiusScale": 0.24,
     "minimumZoomFactor": 0.5,
     "height": 485
    },
    "x": 281.15,
    "angle": 0,
    "y": 422.75,
    "class": "PanoramaMapLocation"
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_t.jpg",
  "id": "panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
  "class": "Panorama",
  "label": "Main Entrance",
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": {
   "opacity": 0.4,
   "rollOverBackgroundColor": "#000000",
   "fontFamily": "Arial",
   "children": [
    {
     "class": "MenuItem",
     "label": "Main Entrance",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "Lobby",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "Restrooms",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "class": "MenuItem",
     "label": "Main Floor",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "Dining Room",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "class": "MenuItem",
     "label": "Conference Room",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "class": "MenuItem",
     "label": "Empty Shell",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "class": "MenuItem",
     "label": "Parking Garage",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "class": "MenuItem",
     "label": "3_1",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "class": "MenuItem",
     "label": "Cartago City",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    },
    {
     "class": "MenuItem",
     "label": "9",
     "click": "this.mainPlayList.set('selectedIndex', 10)"
    },
    {
     "class": "MenuItem",
     "label": "14",
     "click": "this.mainPlayList.set('selectedIndex', 11)"
    },
    {
     "class": "MenuItem",
     "label": "18",
     "click": "this.mainPlayList.set('selectedIndex', 12)"
    },
    {
     "class": "MenuItem",
     "label": "20",
     "click": "this.mainPlayList.set('selectedIndex', 13)"
    },
    {
     "class": "MenuItem",
     "label": "19",
     "click": "this.mainPlayList.set('selectedIndex', 14)"
    },
    {
     "class": "MenuItem",
     "label": "parking2",
     "click": "this.mainPlayList.set('selectedIndex', 15)"
    },
    {
     "class": "MenuItem",
     "label": "asensores",
     "click": "this.mainPlayList.set('selectedIndex', 16)"
    }
   ],
   "label": "Media",
   "selectedBackgroundColor": "#202020",
   "rollOverOpacity": 0.8,
   "class": "Menu",
   "selectedFontColor": "#FFFFFF",
   "id": "Menu_333F7CCE_24BD_9034_41C0_9091ABB344FE",
   "fontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF",
   "backgroundColor": "#404040"
  },
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_t.jpg",
    "overlays": [
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_3050CEF1_24BD_91EC_41B4_F636EF58D14D); this.setMediaBehaviour(this.playList_33D99C70_24BD_90ED_4192_3209C1BFFB0A, 0, this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -19.33,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_0_0_0_map.gif",
           "width": 16,
           "height": 16
          }
         ]
        },
        "pitch": -5.22,
        "hfov": 5.9
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "hfov": 5.9,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_0_0.png",
           "width": 105,
           "height": 105
          }
         ]
        },
        "pitch": -5.22,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -19.33
       }
      ],
      "id": "overlay_17C11FBD_1A28_9742_41B9_9B996ADB4A90",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_3509F7CC_246E_7035_41AB_BB188EF81D62, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'paddingTop':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':20,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000'}, this.ImageResource_3294856D_24AE_90F4_418D_8D9776AE9FF3, null, null, null, null, false)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -68.51,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_1_0_0_map.gif",
           "width": 16,
           "height": 16
          }
         ]
        },
        "pitch": -4.39,
        "hfov": 5.9
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "hfov": 5.9,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_1_0.png",
           "width": 105,
           "height": 105
          }
         ]
        },
        "pitch": -4.39,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -68.51
       }
      ],
      "id": "overlay_3A5D32D6_20F9_F467_41BA_B0E40E6ED2F2",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9, this.camera_30440F00_24BD_902D_41B4_AEBDB66DB9A6); this.setMediaBehaviour(this.playList_33DACC70_24BD_90ED_41AF_424AB4CDB7B0, 0, this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -54.75,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_2_0_0_map.gif",
           "width": 16,
           "height": 16
          }
         ]
        },
        "pitch": 34.99,
        "hfov": 4.85
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "hfov": 4.85,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_2_0.png",
           "width": 105,
           "height": 105
          }
         ]
        },
        "pitch": 34.99,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -54.75
       }
      ],
      "id": "overlay_3ACFD642_2028_9C5E_41A8_AC5EE8DD4659",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "rotationY": 0,
      "hideDuration": 500,
      "rotationX": 0,
      "showDuration": 500,
      "rotationZ": 0,
      "class": "PopupPanoramaOverlay",
      "popupDistance": 100,
      "popupMaxWidth": "95%",
      "hfov": 5.9,
      "hideEasing": "cubic_out",
      "popupMaxHeight": "95%",
      "id": "popup_3509F7CC_246E_7035_41AB_BB188EF81D62",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/popup_3509F7CC_246E_7035_41AB_BB188EF81D62_0_1.jpg",
         "width": 1024,
         "height": 682
        }
       ]
      },
      "pitch": -4.39,
      "showEasing": "cubic_in",
      "yaw": -68.51
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_hq.jpeg",
       "width": 6434,
       "height": 3217,
       "tags": [
        "oculusgo",
        "ipadpro"
       ]
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714.jpeg",
       "width": 4002,
       "height": 2001
      }
     ]
    }
   }
  ],
  "hfovMin": 100,
  "hfovMax": 130,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "vfov": 180,
     "thumbnailUrl": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_t.jpg",
     "id": "panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
     "hfov": 360,
     "class": "Panorama",
     "label": "1.2-Main Entrance",
     "pitch": 0,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_t.jpg",
       "overlays": [
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714, this.camera_32FED0E5_24BE_71F4_41C1_05B5399359FC); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 150.13,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_0_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": 0.8,
           "hfov": 5.92
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
           "hfov": 5.92,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_0_0.png",
              "width": 105,
              "height": 105
             }
            ]
           },
           "pitch": 0.8,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 150.13
          }
         ],
         "id": "overlay_141C837B_1A3F_A892_41B1_D62D2C270786",
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_32CFB0D5_24BE_71D7_41B3_D4F5526BE8E9); this.setMediaBehaviour(this.playList_33C43C70_24BD_90ED_4173_90A8830AB198, 0, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 41.3,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_1_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": -2.08,
           "hfov": 5.92
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
           "hfov": 5.92,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_1_0.png",
              "width": 105,
              "height": 105
             }
            ]
           },
           "pitch": -2.08,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 41.3
          }
         ],
         "id": "overlay_14FCE98C_1A38_D876_41A2_FBAB1A82AA38",
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_32DA20B6_24BE_7054_41B9_3019C57D83CE); this.setMediaBehaviour(this.playList_33CA6C80_24BD_902C_41B5_B431A8DE4AAB, 0, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -25.53,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_2_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": -5.35,
           "hfov": 5.9
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
           "hfov": 5.9,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_2_0.png",
              "width": 105,
              "height": 105
             }
            ]
           },
           "pitch": -5.35,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -25.53
          }
         ],
         "id": "overlay_1504A38A_1AA1_9BB9_41A4_59E6AD12A17D",
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.showPopupPanoramaOverlay(this.popup_3AF279F7_20F8_9425_41B8_727B1C05B69A, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'paddingTop':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':20,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000'}, this.ImageResource_095FC95D_2068_946A_41A5_88BA52F0CF59, null, null, null, null, false)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 81.82,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_3_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": 0.15,
           "hfov": 5.92
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
           "hfov": 5.92,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_3_0.png",
              "width": 105,
              "height": 105
             }
            ]
           },
           "pitch": 0.15,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 81.82
          }
         ],
         "id": "overlay_3A3F00CC_20F8_946A_41A7_92092B2FF4A5",
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "rotationY": 0,
         "hideDuration": 500,
         "rotationX": 0,
         "showDuration": 500,
         "rotationZ": 0,
         "class": "PopupPanoramaOverlay",
         "popupDistance": 100,
         "popupMaxWidth": "95%",
         "hfov": 5.92,
         "hideEasing": "cubic_out",
         "popupMaxHeight": "95%",
         "id": "popup_3AF279F7_20F8_9425_41B8_727B1C05B69A",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/popup_3AF279F7_20F8_9425_41B8_727B1C05B69A_0_1.jpg",
            "width": 1024,
            "height": 682
           }
          ]
         },
         "pitch": 0.15,
         "showEasing": "cubic_in",
         "yaw": 81.82
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.setMediaBehaviour(this.playList_33FF5C90_24BD_902C_41AA_42F2E9853222, 0, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -16.74,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_4_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": 28.31,
           "hfov": 5.21
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
           "hfov": 5.21,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_4_0.png",
              "width": 105,
              "height": 105
             }
            ]
           },
           "pitch": 28.31,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -16.74
          }
         ],
         "id": "overlay_019BD876_2028_9426_4190_6C82CB626EB3",
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_hq.jpeg",
          "width": 6434,
          "height": 3217,
          "tags": [
           "oculusgo",
           "ipadpro"
          ]
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677.jpeg",
          "width": 4002,
          "height": 2001
         }
        ]
       }
      }
     ],
     "hfovMin": 100,
     "hfovMax": 130,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "mapLocations": [
         {
          "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
          "x": 282.7,
          "angle": 0,
          "y": 306.8,
          "class": "PanoramaMapLocation"
         }
        ],
        "vfov": 180,
        "thumbnailUrl": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_t.jpg",
        "id": "panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
        "hfov": 360,
        "class": "Panorama",
        "label": "4-Frente Rotonda",
        "pitch": 0,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_t.jpg",
          "overlays": [
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_31A28F5E_24BD_90D5_4188_95D42995EC4F); this.setMediaBehaviour(this.playList_33D99C70_24BD_90ED_4192_3209C1BFFB0A, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 174.57,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_0_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": -7.02,
              "hfov": 5.88
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "hfov": 5.88,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_0_0.png",
                 "width": 105,
                 "height": 105
                }
               ]
              },
              "pitch": -7.02,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 174.57
             }
            ],
            "id": "overlay_0BB92A75_1AA1_956B_41AC_0351AD6A37FC",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_31D0EF6E_24BD_90F4_41BE_0CE6EB8373B7); this.setMediaBehaviour(this.playList_33E46C9F_24BD_9054_4196_4ED1780ABE00, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 6.44,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_1_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": -3.74,
              "hfov": 5.91
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "hfov": 5.91,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_1_0.png",
                 "width": 105,
                 "height": 105
                }
               ]
              },
              "pitch": -3.74,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 6.44
             }
            ],
            "id": "overlay_0B49D73A_1AA1_BCD9_41B4_8D43FC88B793",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246, this.camera_319B5F3F_24BD_9054_41BF_0F3D062BE4EE); this.setMediaBehaviour(this.playList_33E4AC9F_24BD_9054_41BD_18D15CB68C15, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -78.27,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_2_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": -3.14,
              "hfov": 5.91
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "hfov": 5.91,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_2_0.png",
                 "width": 105,
                 "height": 105
                }
               ]
              },
              "pitch": -3.14,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -78.27
             }
            ],
            "id": "overlay_0CC2B1E1_1AE1_4D00_41B1_ACF7784104D5",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0B7B5A27_1FEB_7426_4195_945554348391, this.camera_31888F4F_24BD_9034_41B7_4FD1BF22A9C5); this.setMediaBehaviour(this.playList_33F60C90_24BD_902C_41B0_8F04A1D97645, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 66.08,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_3_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": 0.87,
              "hfov": 5.92
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "hfov": 5.92,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_3_0.png",
                 "width": 105,
                 "height": 105
                }
               ]
              },
              "pitch": 0.87,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 66.08
             }
            ],
            "id": "overlay_0AAAE042_1FD7_745F_419C_D12F60591797",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_31BD6F4F_24BD_9034_419B_54A56E8D5EC9); this.setMediaBehaviour(this.playList_33C43C70_24BD_90ED_4173_90A8830AB198, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 137.01,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_4_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": -2.79,
              "hfov": 5.91
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "hfov": 5.91,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_4_0.png",
                 "width": 105,
                 "height": 105
                }
               ]
              },
              "pitch": -2.79,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 137.01
             }
            ],
            "id": "overlay_07A64819_1FD9_93EA_41BA_D3C6BE78DFAB",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.showPopupPanoramaOverlay(this.popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'paddingTop':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':20,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000'}, null, null, null, null, null, false)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -45.57,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_5_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": 8.64,
              "hfov": 5.85
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "hfov": 5.85,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_5_0.png",
                 "width": 105,
                 "height": 105
                }
               ]
              },
              "pitch": 8.64,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -45.57
             }
            ],
            "id": "overlay_3AF637F8_20F8_9C2A_419C_75BB4D5E26FF",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "rotationY": 0,
            "hideDuration": 500,
            "rotationX": 0,
            "showDuration": 500,
            "rotationZ": 0,
            "class": "PopupPanoramaOverlay",
            "popupDistance": 100,
            "popupMaxWidth": "95%",
            "hfov": 5.85,
            "hideEasing": "cubic_out",
            "popupMaxHeight": "95%",
            "id": "popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "url": "media/popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7_0_0.jpg",
               "width": 850,
               "height": 625
              },
              {
               "class": "ImageResourceLevel",
               "url": "media/popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7_0_1.jpg",
               "width": 511,
               "height": 376
              }
             ]
            },
            "pitch": 8.64,
            "showEasing": "cubic_in",
            "yaw": -45.57
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.setMediaBehaviour(this.playList_33FF5C90_24BD_902C_41AA_42F2E9853222, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 21.44,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_6_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": 35.54,
              "hfov": 4.82
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "hfov": 4.82,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_6_0.png",
                 "width": 105,
                 "height": 105
                }
               ]
              },
              "pitch": 35.54,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 21.44
             }
            ],
            "id": "overlay_02A28332_202F_943F_41B9_DA9F604BA994",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.showPopupPanoramaOverlay(this.popup_36E9C513_249E_702C_41C0_2CA0C18AAE54, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'paddingTop':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':20,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000'}, this.ImageResource_32BB558C_24AE_9034_41A0_905F3B8026D3, null, null, null, null, false)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -13.2,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_7_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": -1.15,
              "hfov": 5.92
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "hfov": 5.92,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_7_0.png",
                 "width": 105,
                 "height": 105
                }
               ]
              },
              "pitch": -1.15,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -13.2
             }
            ],
            "id": "overlay_36D502D1_249E_F02C_41C1_D3ABB6A0C079",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "rotationY": 0,
            "hideDuration": 500,
            "rotationX": 0,
            "showDuration": 500,
            "rotationZ": 0,
            "class": "PopupPanoramaOverlay",
            "popupDistance": 100,
            "popupMaxWidth": "95%",
            "hfov": 5.92,
            "hideEasing": "cubic_out",
            "popupMaxHeight": "95%",
            "id": "popup_36E9C513_249E_702C_41C0_2CA0C18AAE54",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "url": "media/popup_36E9C513_249E_702C_41C0_2CA0C18AAE54_0_1.jpg",
               "width": 1024,
               "height": 682
              }
             ]
            },
            "pitch": -1.15,
            "showEasing": "cubic_in",
            "yaw": -13.2
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_37E7B455_24BA_B0D4_41A5_EF23708D6C53, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'paddingTop':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':20,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000'}, true) } else { this.showPopupMedia(this.window_3751753F_24BA_B053_419D_8F7A92EE6363, this.video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB, this.PlayList_3758460D_24BA_9037_4172_167C9CF1D5D7, '95%', '95%', true, true) }"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 34.02,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_8_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": -1.52,
              "hfov": 5.92
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "hfov": 5.92,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_8_0.png",
                 "width": 105,
                 "height": 105
                }
               ]
              },
              "pitch": -1.52,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 34.02
             }
            ],
            "id": "overlay_309020BC_24AA_B054_41A4_52F08D805B2F",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "rotationY": 0,
            "popupDistance": 100,
            "rotationX": 0,
            "showDuration": 500,
            "rotationZ": 0,
            "class": "PopupPanoramaOverlay",
            "hideDuration": 500,
            "id": "popup_37E7B455_24BA_B0D4_41A5_EF23708D6C53",
            "popupMaxWidth": "95%",
            "hfov": 5.92,
            "hideEasing": "cubic_out",
            "popupMaxHeight": "95%",
            "showEasing": "cubic_in",
            "pitch": -1.52,
            "autoplay": true,
            "loop": false,
            "yaw": 34.02,
            "video": {
             "class": "VideoResource",
             "width": 1280,
             "mp4Url": "media/video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB.mp4",
             "height": 720
            }
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_hq.jpeg",
             "width": 6434,
             "height": 3217,
             "tags": [
              "oculusgo",
              "ipadpro"
             ]
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B.jpeg",
             "width": 4002,
             "height": 2001
            }
           ]
          }
         }
        ],
        "hfovMin": 100,
        "hfovMax": 130,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "vfov": 180,
           "thumbnailUrl": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_t.jpg",
           "id": "panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
           "hfov": 360,
           "class": "Panorama",
           "label": "11-Entre Edwards y Coloplast",
           "pitch": 0,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_t.jpg",
             "overlays": [
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_326E41C0_24BE_702C_41B5_07EBECC4353C); this.setMediaBehaviour(this.playList_33CA6C80_24BD_902C_41B5_B431A8DE4AAB, 0, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 88.55,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_0_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -2.03,
                 "hfov": 5.92
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "hfov": 5.92,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_0_0.png",
                    "width": 105,
                    "height": 105
                   }
                  ]
                 },
                 "pitch": -2.03,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 88.55
                }
               ],
               "id": "overlay_0F87F0EF_1AE3_4B00_41B1_E78788DE1BFA",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_327F21B0_24BE_706C_41AB_9A75A64A327A); this.setMediaBehaviour(this.playList_33CB6C90_24BD_902C_41BD_0EECAC71B6BC, 0, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -94.64,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_1_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -5.21,
                 "hfov": 5.9
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "hfov": 5.9,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_1_0.png",
                    "width": 105,
                    "height": 105
                   }
                  ]
                 },
                 "pitch": -5.21,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -94.64
                }
               ],
               "id": "overlay_0FBACA90_1AE1_7F00_41A2_DEDEB5A439B2",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.showPopupPanoramaOverlay(this.popup_3A305B90_20FB_94FB_4193_FEB3450979FC, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'paddingTop':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':20,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000'}, null, null, null, null, null, false)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -56.26,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_2_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": 9.36,
                 "hfov": 5.84
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "hfov": 5.84,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_2_0.png",
                    "width": 105,
                    "height": 105
                   }
                  ]
                 },
                 "pitch": 9.36,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -56.26
                }
               ],
               "id": "overlay_3AE1C5BB_20F8_BC2E_41B5_14023BA58135",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "rotationY": 0,
               "hideDuration": 500,
               "rotationX": 0,
               "showDuration": 500,
               "rotationZ": 0,
               "class": "PopupPanoramaOverlay",
               "popupDistance": 100,
               "popupMaxWidth": "95%",
               "hfov": 5.84,
               "hideEasing": "cubic_out",
               "popupMaxHeight": "95%",
               "id": "popup_3A305B90_20FB_94FB_4193_FEB3450979FC",
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_3A305B90_20FB_94FB_4193_FEB3450979FC_0_0.jpg",
                  "width": 807,
                  "height": 752
                 },
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_3A305B90_20FB_94FB_4193_FEB3450979FC_0_1.jpg",
                  "width": 512,
                  "height": 477
                 }
                ]
               },
               "pitch": 9.36,
               "showEasing": "cubic_in",
               "yaw": -56.26
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.setMediaBehaviour(this.playList_33E23C9F_24BD_9054_41A6_802C37DBAE10, 0, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -148.61,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_3_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": 27.18,
                 "hfov": 5.27
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "hfov": 5.27,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_3_0.png",
                    "width": 105,
                    "height": 105
                   }
                  ]
                 },
                 "pitch": 27.18,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -148.61
                }
               ],
               "id": "overlay_034C27D3_205F_BC7D_4190_BF1D51573EA7",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.showPopupPanoramaOverlay(this.popup_36258FF0_249D_EFED_41AB_54067BE4CE8C, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'paddingTop':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':20,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000'}, this.ImageResource_32C8659C_24AE_9054_4187_C8E2724888E0, null, null, null, null, false)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -50.51,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_4_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -6.52,
                 "hfov": 5.88
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "hfov": 5.88,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_4_0.png",
                    "width": 105,
                    "height": 105
                   }
                  ]
                 },
                 "pitch": -6.52,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -50.51
                }
               ],
               "id": "overlay_3690AC61_249D_B0EC_41C1_867DE64A0008",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "rotationY": 0,
               "hideDuration": 500,
               "rotationX": 0,
               "showDuration": 500,
               "rotationZ": 0,
               "class": "PopupPanoramaOverlay",
               "popupDistance": 100,
               "popupMaxWidth": "95%",
               "hfov": 5.88,
               "hideEasing": "cubic_out",
               "popupMaxHeight": "95%",
               "id": "popup_36258FF0_249D_EFED_41AB_54067BE4CE8C",
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_36258FF0_249D_EFED_41AB_54067BE4CE8C_0_1.jpg",
                  "width": 1024,
                  "height": 682
                 }
                ]
               },
               "pitch": -6.52,
               "showEasing": "cubic_in",
               "yaw": -50.51
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.showPopupPanoramaOverlay(this.popup_36539A9C_24AE_9054_41AC_911079BB2A7C, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'paddingTop':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':20,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000'}, this.ImageResource_32C8A59C_24AE_9054_41B0_230945BD42EC, null, null, null, null, false)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -76.59,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_5_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": 1.45,
                 "hfov": 5.92
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "hfov": 5.92,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_5_0.png",
                    "width": 105,
                    "height": 105
                   }
                  ]
                 },
                 "pitch": 1.45,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -76.59
                }
               ],
               "id": "overlay_3562069C_24AD_B054_41A5_FF17B3BEF357",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "rotationY": 0,
               "hideDuration": 500,
               "rotationX": 0,
               "showDuration": 500,
               "rotationZ": 0,
               "class": "PopupPanoramaOverlay",
               "popupDistance": 100,
               "popupMaxWidth": "95%",
               "hfov": 5.92,
               "hideEasing": "cubic_out",
               "popupMaxHeight": "95%",
               "id": "popup_36539A9C_24AE_9054_41AC_911079BB2A7C",
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_36539A9C_24AE_9054_41AC_911079BB2A7C_0_1.jpg",
                  "width": 1024,
                  "height": 682
                 }
                ]
               },
               "pitch": 1.45,
               "showEasing": "cubic_in",
               "yaw": -76.59
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_hq.jpeg",
                "width": 6434,
                "height": 3217,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ]
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246.jpeg",
                "width": 4002,
                "height": 2001
               }
              ]
             }
            }
           ],
           "hfovMin": 100,
           "hfovMax": 130,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "mapLocations": [
               {
                "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                "x": 89.75,
                "angle": 266.01,
                "y": 307.7,
                "class": "PanoramaMapLocation"
               }
              ],
              "vfov": 180,
              "thumbnailUrl": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_t.jpg",
              "id": "panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
              "hfov": 360,
              "class": "Panorama",
              "label": "12-Entre Zollner y Coloplast",
              "pitch": 0,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_t.jpg",
                "overlays": [
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246, this.camera_30870DF7_24BD_93D4_41B2_6B10CF3B8F3E); this.setMediaBehaviour(this.playList_33E4AC9F_24BD_9054_41BD_18D15CB68C15, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 179.05,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_0_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -4.4,
                    "hfov": 5.9
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "items": [
                   {
                    "hfov": 5.9,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_0_0.png",
                       "width": 105,
                       "height": 105
                      }
                     ]
                    },
                    "pitch": -4.4,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 179.05
                   }
                  ],
                  "id": "overlay_0CCF7EED_1AE7_F700_4193_75795E2C9EA0",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525, this.camera_308AEE16_24BD_9054_41BF_6BC5233809E0); this.setMediaBehaviour(this.playList_33F47C90_24BD_902C_41B3_70299EFEE89E, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 79.43,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_1_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -0.99,
                    "hfov": 5.92
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "items": [
                   {
                    "hfov": 5.92,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_1_0.png",
                       "width": 105,
                       "height": 105
                      }
                     ]
                    },
                    "pitch": -0.99,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 79.43
                   }
                  ],
                  "id": "overlay_0C21DAC6_1AA3_5F03_4176_5DA7616EB4A4",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E, this.camera_308C4E06_24BD_9035_41BB_AB491B646D75); this.setMediaBehaviour(this.playList_33CB1C90_24BD_902C_41BB_F420397B113F, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -90.48,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_2_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -1.59,
                    "hfov": 5.92
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "items": [
                   {
                    "hfov": 5.92,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_2_0.png",
                       "width": 105,
                       "height": 105
                      }
                     ]
                    },
                    "pitch": -1.59,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -90.48
                   }
                  ],
                  "id": "overlay_38B9BC59_2028_AC6A_41AE_2C7905BA9A19",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.showPopupPanoramaOverlay(this.popup_3A3C822F_20F8_9425_41B2_B5F3B1085960, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'paddingTop':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':20,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000'}, this.ImageResource_0AAA2971_2068_943D_41B4_10DFF5B38D1B, null, null, null, null, false)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 32.81,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_3_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": 10.53,
                    "hfov": 5.82
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "items": [
                   {
                    "hfov": 5.82,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_3_0.png",
                       "width": 105,
                       "height": 105
                      }
                     ]
                    },
                    "pitch": 10.53,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 32.81
                   }
                  ],
                  "id": "overlay_3AE247CE_20F8_FC66_41BD_400C31C50BE9",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "rotationY": 0,
                  "hideDuration": 500,
                  "rotationX": 0,
                  "showDuration": 500,
                  "rotationZ": 0,
                  "class": "PopupPanoramaOverlay",
                  "popupDistance": 100,
                  "popupMaxWidth": "95%",
                  "hfov": 5.82,
                  "hideEasing": "cubic_out",
                  "popupMaxHeight": "95%",
                  "id": "popup_3A3C822F_20F8_9425_41B2_B5F3B1085960",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "url": "media/popup_3A3C822F_20F8_9425_41B2_B5F3B1085960_0_1.jpg",
                     "width": 1024,
                     "height": 682
                    }
                   ]
                  },
                  "pitch": 10.53,
                  "showEasing": "cubic_in",
                  "yaw": 32.81
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.setMediaBehaviour(this.playList_33E23C9F_24BD_9054_41A6_802C37DBAE10, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -84.07,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_4_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": 25.67,
                    "hfov": 5.34
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "items": [
                   {
                    "hfov": 5.34,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_4_0.png",
                       "width": 105,
                       "height": 105
                      }
                     ]
                    },
                    "pitch": 25.67,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -84.07
                   }
                  ],
                  "id": "overlay_04A14CB0_2058_AC3A_41B5_4627074CA778",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.setMediaBehaviour(this.playList_33EE9C9F_24BD_9054_41A7_1A54EB1B9594, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 76.78,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_5_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": 30.52,
                    "hfov": 5.1
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "items": [
                   {
                    "hfov": 5.1,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_5_0.png",
                       "width": 105,
                       "height": 105
                      }
                     ]
                    },
                    "pitch": 30.52,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 76.78
                   }
                  ],
                  "id": "overlay_04CC30D3_2059_947D_41A8_BC5DCD223313",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.showPopupPanoramaOverlay(this.popup_3638CA38_249B_905C_41B3_EA26EB9333F0, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'paddingTop':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':20,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000'}, this.ImageResource_32CC759C_24AE_9054_419F_511B2D533327, null, null, null, null, false)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -32.7,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_6_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": 17.08,
                    "hfov": 5.66
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "items": [
                   {
                    "hfov": 5.66,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_6_0.png",
                       "width": 105,
                       "height": 105
                      }
                     ]
                    },
                    "pitch": 17.08,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -32.7
                   }
                  ],
                  "id": "overlay_369A2505_249A_9034_41B6_15BA718D5598",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "rotationY": 0,
                  "hideDuration": 500,
                  "rotationX": 0,
                  "showDuration": 500,
                  "rotationZ": 0,
                  "class": "PopupPanoramaOverlay",
                  "popupDistance": 100,
                  "popupMaxWidth": "95%",
                  "hfov": 5.66,
                  "hideEasing": "cubic_out",
                  "popupMaxHeight": "95%",
                  "id": "popup_3638CA38_249B_905C_41B3_EA26EB9333F0",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "url": "media/popup_3638CA38_249B_905C_41B3_EA26EB9333F0_0_1.jpg",
                     "width": 1024,
                     "height": 580
                    }
                   ]
                  },
                  "pitch": 17.08,
                  "showEasing": "cubic_in",
                  "yaw": -32.7
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.showPopupPanoramaOverlay(this.popup_369EF53B_249A_B05C_41BC_AE1E970C16EA, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'paddingTop':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':20,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000'}, this.ImageResource_32CD359C_24AE_9054_41BC_CF812CF11760, null, null, null, null, false)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 101.53,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_7_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -4.09,
                    "hfov": 5.91
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "items": [
                   {
                    "hfov": 5.91,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_7_0.png",
                       "width": 105,
                       "height": 105
                      }
                     ]
                    },
                    "pitch": -4.09,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 101.53
                   }
                  ],
                  "id": "overlay_36DB0F2E_249A_9074_41B4_8E4380CB0F7A",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "rotationY": 0,
                  "hideDuration": 500,
                  "rotationX": 0,
                  "showDuration": 500,
                  "rotationZ": 0,
                  "class": "PopupPanoramaOverlay",
                  "popupDistance": 100,
                  "popupMaxWidth": "95%",
                  "hfov": 5.91,
                  "hideEasing": "cubic_out",
                  "popupMaxHeight": "95%",
                  "id": "popup_369EF53B_249A_B05C_41BC_AE1E970C16EA",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "url": "media/popup_369EF53B_249A_B05C_41BC_AE1E970C16EA_0_1.jpg",
                     "width": 1024,
                     "height": 682
                    }
                   ]
                  },
                  "pitch": -4.09,
                  "showEasing": "cubic_in",
                  "yaw": 101.53
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_hq.jpeg",
                   "width": 6434,
                   "height": 3217,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7.jpeg",
                   "width": 4002,
                   "height": 2001
                  }
                 ]
                }
               }
              ],
              "hfovMin": 100,
              "hfovMax": 130,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
                "yaw": 179.05,
                "distance": 1,
                "backwardYaw": -94.64
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "mapLocations": [
                  {
                   "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                   "x": 96.9,
                   "angle": 122.43,
                   "y": 435.15,
                   "class": "PanoramaMapLocation"
                  }
                 ],
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_t.jpg",
                 "id": "panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
                 "hfov": 360,
                 "class": "Panorama",
                 "label": "helipuerto",
                 "pitch": 0,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_t.jpg",
                   "overlays": [
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_30E57E93_24BD_9053_41A9_DEFD200B6574); this.setMediaBehaviour(this.playList_33CB6C90_24BD_902C_41BD_0EECAC71B6BC, 0, this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -117.3,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_0_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -4.38,
                       "hfov": 5.9
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "items": [
                      {
                       "hfov": 5.9,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_0_0.png",
                          "width": 105,
                          "height": 105
                         }
                        ]
                       },
                       "pitch": -4.38,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -117.3
                      }
                     ],
                     "id": "overlay_398BC00D_2028_B3E5_41A1_4D2435BCEAF9",
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83, this.camera_30EECEA3_24BD_906C_41AE_3A400E486FA8); this.setMediaBehaviour(this.playList_33E23C9F_24BD_9054_41A6_802C37DBAE10, 0, this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 62.4,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_1_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": 52.59,
                       "hfov": 3.6
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "items": [
                      {
                       "hfov": 3.6,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_1_0.png",
                          "width": 105,
                          "height": 105
                         }
                        ]
                       },
                       "pitch": 52.59,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 62.4
                      }
                     ],
                     "id": "overlay_07984367_2057_9426_41B6_282E6C99CB32",
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7, this.camera_3010EEA3_24BD_906C_41C1_598B49BFFF19); this.setMediaBehaviour(this.playList_33E37C9F_24BD_9054_41A8_4936AC3F0F89, 0, this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E); this.MainViewerPanoramaPlayer.play()"
                      }
                     ],
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "items": [
                      {
                       "hfov": 5.92,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_2_0.png",
                          "width": 105,
                          "height": 105
                         }
                        ]
                       },
                       "pitch": -2.4,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -144.51
                      }
                     ],
                     "id": "overlay_0B2ACEE1_2079_EC5D_41A5_63855793A591",
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    }
                   ],
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_hq.jpeg",
                      "width": 6434,
                      "height": 3217,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ]
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E.jpeg",
                      "width": 4002,
                      "height": 2001
                     }
                    ]
                   }
                  }
                 ],
                 "hfovMin": 100,
                 "hfovMax": 130,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
                   "yaw": -117.3,
                   "distance": 1,
                   "backwardYaw": -90.48
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "vfov": 180,
                    "thumbnailUrl": "media/panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_t.jpg",
                    "id": "panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83",
                    "hfov": 360,
                    "class": "Panorama",
                    "label": "IMG_20180114_182756_00_062-edit",
                    "pitch": 0,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_t.jpg",
                      "overlays": [
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9, this.camera_32135114_24BE_7054_41B6_1C0E0F328416); this.setMediaBehaviour(this.playList_33DACC70_24BD_90ED_41AF_424AB4CDB7B0, 0, this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -82.34,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_0_HS_0_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": 11.88,
                          "hfov": 5.79
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "items": [
                         {
                          "hfov": 5.79,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_0_HS_0_0.png",
                             "width": 105,
                             "height": 105
                            }
                           ]
                          },
                          "pitch": 11.88,
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -82.34
                         }
                        ],
                        "id": "overlay_3C9B5DAE_2028_AC27_4190_B52A4E5DB0C7",
                        "rollOverDisplay": false,
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913, this.camera_32EDE104_24BE_7035_41A0_391B263616B7); this.setMediaBehaviour(this.playList_33EE9C9F_24BD_9054_41A7_1A54EB1B9594, 0, this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 173.4,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_0_HS_1_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": 15,
                          "hfov": 5.72
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "items": [
                         {
                          "hfov": 5.72,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_0_HS_1_0.png",
                             "width": 105,
                             "height": 105
                            }
                           ]
                          },
                          "pitch": 15,
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 173.4
                         }
                        ],
                        "id": "overlay_3D8A571F_2038_BDE6_41B0_86A3FD7A806A",
                        "rollOverDisplay": false,
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F, this.camera_32372143_24BE_702C_41BC_E9D01200FEB9); this.setMediaBehaviour(this.playList_33FF5C90_24BD_902C_41AA_42F2E9853222, 0, this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -137.91,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_0_HS_2_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": 12.97,
                          "hfov": 5.77
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "items": [
                         {
                          "hfov": 5.77,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_0_HS_2_0.png",
                             "width": 105,
                             "height": 105
                            }
                           ]
                          },
                          "pitch": 12.97,
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -137.91
                         }
                        ],
                        "id": "overlay_3C22B53A_2039_7C2E_41BE_610A90637DB1",
                        "rollOverDisplay": false,
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E, this.camera_32018123_24BE_7073_41B2_6D64CAD4FC85); this.setMediaBehaviour(this.playList_33CB1C90_24BD_902C_41BB_F420397B113F, 0, this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 46.35,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_0_HS_3_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": -84.35,
                          "hfov": 0.58
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "items": [
                         {
                          "hfov": 0.58,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_0_HS_3_0.png",
                             "width": 105,
                             "height": 105
                            }
                           ]
                          },
                          "pitch": -84.35,
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 46.35
                         }
                        ],
                        "id": "overlay_342A492D_246B_9074_4192_E354F111CCC2",
                        "rollOverDisplay": false,
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.setMediaBehaviour(this.playList_33E37C9F_24BD_9054_41A8_4936AC3F0F89, 0, this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83); this.MainViewerPanoramaPlayer.play()"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 167.33,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_0_HS_4_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": -38.34,
                          "hfov": 4.64
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "items": [
                         {
                          "hfov": 4.64,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_0_HS_4_0.png",
                             "width": 105,
                             "height": 105
                            }
                           ]
                          },
                          "pitch": -38.34,
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 167.33
                         }
                        ],
                        "id": "overlay_34D2E4AA_246A_907D_41B1_1A7776B57802",
                        "rollOverDisplay": false,
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       }
                      ],
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_hq.jpeg",
                         "width": 6434,
                         "height": 3217,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ]
                        },
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83.jpeg",
                         "width": 4002,
                         "height": 2001
                        }
                       ]
                      }
                     }
                    ],
                    "hfovMin": 100,
                    "hfovMax": 130,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "vfov": 180,
                       "thumbnailUrl": "media/panorama_392AB3A7_202B_B425_41B4_97BA77B34913_t.jpg",
                       "id": "panorama_392AB3A7_202B_B425_41B4_97BA77B34913",
                       "hfov": 360,
                       "class": "Panorama",
                       "label": "IMG_20180114_164030_00_037-edit",
                       "pitch": 0,
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_392AB3A7_202B_B425_41B4_97BA77B34913_t.jpg",
                         "overlays": [
                          {
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83, this.camera_300E1EC2_24BD_902C_4174_0C73693DE3C6); this.setMediaBehaviour(this.playList_33E23C9F_24BD_9054_41A6_802C37DBAE10, 0, this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -8.49,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_392AB3A7_202B_B425_41B4_97BA77B34913_0_HS_0_0_0_map.gif",
                                "width": 16,
                                "height": 16
                               }
                              ]
                             },
                             "pitch": 13.97,
                             "hfov": 5.75
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "hfov": 5.75,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_392AB3A7_202B_B425_41B4_97BA77B34913_0_HS_0_0.png",
                                "width": 105,
                                "height": 105
                               }
                              ]
                             },
                             "pitch": 13.97,
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -8.49
                            }
                           ],
                           "id": "overlay_3C60DC5F_2038_EC65_4185_38D0FADF74B8",
                           "rollOverDisplay": false,
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9, this.camera_301B1EB2_24BD_906D_41BF_39FB9936F1E7); this.setMediaBehaviour(this.playList_33DACC70_24BD_90ED_41AF_424AB4CDB7B0, 0, this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -47.62,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_392AB3A7_202B_B425_41B4_97BA77B34913_0_HS_1_0_0_map.gif",
                                "width": 16,
                                "height": 16
                               }
                              ]
                             },
                             "pitch": 14.3,
                             "hfov": 5.74
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "hfov": 5.74,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_392AB3A7_202B_B425_41B4_97BA77B34913_0_HS_1_0.png",
                                "width": 105,
                                "height": 105
                               }
                              ]
                             },
                             "pitch": 14.3,
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -47.62
                            }
                           ],
                           "id": "overlay_3DB6F882_203F_94DE_41BA_8F0A0B004768",
                           "rollOverDisplay": false,
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F, this.camera_30379ED2_24BD_902C_41C1_C9F3C999C6BE); this.setMediaBehaviour(this.playList_33FF5C90_24BD_902C_41AA_42F2E9853222, 0, this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -90.76,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_392AB3A7_202B_B425_41B4_97BA77B34913_0_HS_2_0_0_map.gif",
                                "width": 16,
                                "height": 16
                               }
                              ]
                             },
                             "pitch": 14.14,
                             "hfov": 5.74
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "hfov": 5.74,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_392AB3A7_202B_B425_41B4_97BA77B34913_0_HS_2_0.png",
                                "width": 105,
                                "height": 105
                               }
                              ]
                             },
                             "pitch": 14.14,
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -90.76
                            }
                           ],
                           "id": "overlay_3C793618_2039_9FEB_419C_B7CA81A1CC95",
                           "rollOverDisplay": false,
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E, this.camera_303BEEE1_24BD_91EF_41A4_8CAAB889ED8D); this.setMediaBehaviour(this.playList_33F4CC90_24BD_902C_41B1_A5AB9E30EE23, 0, this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -89.42,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_392AB3A7_202B_B425_41B4_97BA77B34913_0_HS_3_0_0_map.gif",
                                "width": 16,
                                "height": 16
                               }
                              ]
                             },
                             "pitch": -47.4,
                             "hfov": 4.01
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "hfov": 4.01,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_392AB3A7_202B_B425_41B4_97BA77B34913_0_HS_3_0.png",
                                "width": 105,
                                "height": 105
                               }
                              ]
                             },
                             "pitch": -47.4,
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -89.42
                            }
                           ],
                           "id": "overlay_2BA307FD_246A_9FD4_41BD_1058692FB391",
                           "rollOverDisplay": false,
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.showPopupPanoramaOverlay(this.popup_348D9211_246E_902F_4199_6E447B6CCD8A, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'paddingTop':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':20,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000'}, this.ImageResource_32C5559C_24AE_9054_4190_2CEBE3C7DFAC, null, null, null, null, false)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -121.86,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_392AB3A7_202B_B425_41B4_97BA77B34913_0_HS_4_0_0_map.gif",
                                "width": 16,
                                "height": 16
                               }
                              ]
                             },
                             "pitch": -50.57,
                             "hfov": 3.76
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "hfov": 3.76,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_392AB3A7_202B_B425_41B4_97BA77B34913_0_HS_4_0.png",
                                "width": 105,
                                "height": 105
                               }
                              ]
                             },
                             "pitch": -50.57,
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -121.86
                            }
                           ],
                           "id": "overlay_349A7DB9_2476_905F_41AF_1DDB444DBAA2",
                           "rollOverDisplay": false,
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "rotationY": 0,
                           "hideDuration": 500,
                           "rotationX": 0,
                           "showDuration": 500,
                           "rotationZ": 0,
                           "class": "PopupPanoramaOverlay",
                           "popupDistance": 100,
                           "popupMaxWidth": "95%",
                           "hfov": 3.76,
                           "hideEasing": "cubic_out",
                           "popupMaxHeight": "95%",
                           "id": "popup_348D9211_246E_902F_4199_6E447B6CCD8A",
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "class": "ImageResourceLevel",
                              "url": "media/popup_348D9211_246E_902F_4199_6E447B6CCD8A_0_1.jpg",
                              "width": 1024,
                              "height": 632
                             }
                            ]
                           },
                           "pitch": -50.57,
                           "showEasing": "cubic_in",
                           "yaw": -121.86
                          }
                         ],
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_392AB3A7_202B_B425_41B4_97BA77B34913_hq.jpeg",
                            "width": 6434,
                            "height": 3217,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ]
                           },
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_392AB3A7_202B_B425_41B4_97BA77B34913.jpeg",
                            "width": 4002,
                            "height": 2001
                           }
                          ]
                         }
                        }
                       ],
                       "hfovMin": 100,
                       "hfovMax": 130,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "vfov": 180,
                          "thumbnailUrl": "media/panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_t.jpg",
                          "id": "panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9",
                          "hfov": 360,
                          "class": "Panorama",
                          "label": "IMG_20180114_162347_00_013-edit",
                          "pitch": 0,
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_t.jpg",
                            "overlays": [
                             {
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83, this.camera_32545172_24BE_70EC_41B7_D1755A2778EE); this.setMediaBehaviour(this.playList_33E23C9F_24BD_9054_41A6_802C37DBAE10, 0, this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9)"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 153.01,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_0_HS_0_0_0_map.gif",
                                   "width": 16,
                                   "height": 16
                                  }
                                 ]
                                },
                                "pitch": 13.27,
                                "hfov": 5.76
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "hfov": 5.76,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_0_HS_0_0.png",
                                   "width": 105,
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": 13.27,
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 153.01
                               }
                              ],
                              "id": "overlay_3D016EE4_202B_AC5B_419A_EF724BB8E210",
                              "rollOverDisplay": false,
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F, this.camera_325B5181_24BE_702F_41BE_CF508624F36A); this.setMediaBehaviour(this.playList_33FF5C90_24BD_902C_41AA_42F2E9853222, 0, this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9)"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -103.65,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_0_HS_1_0_0_map.gif",
                                   "width": 16,
                                   "height": 16
                                  }
                                 ]
                                },
                                "pitch": 10.75,
                                "hfov": 5.82
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "hfov": 5.82,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_0_HS_1_0.png",
                                   "width": 105,
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": 10.75,
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -103.65
                               }
                              ],
                              "id": "overlay_3CD6003A_2028_B42F_41AE_90AF011D1E71",
                              "rollOverDisplay": false,
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913, this.camera_3226E152_24BE_702D_41B0_2F69CA323BD3); this.setMediaBehaviour(this.playList_33EE9C9F_24BD_9054_41A7_1A54EB1B9594, 0, this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9)"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -156.7,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_0_HS_2_0_0_map.gif",
                                   "width": 16,
                                   "height": 16
                                  }
                                 ]
                                },
                                "pitch": 11.92,
                                "hfov": 5.79
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "hfov": 5.79,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_0_HS_2_0.png",
                                   "width": 105,
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": 11.92,
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -156.7
                               }
                              ],
                              "id": "overlay_3DD4E7EE_2038_9C27_41BA_6627AB36F43E",
                              "rollOverDisplay": false,
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714, this.camera_324A3191_24BE_702C_41A6_A1F3CC8BA7FF); this.mainPlayList.set('selectedIndex', 0)"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -26.53,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_0_HS_3_0_0_map.gif",
                                   "width": 16,
                                   "height": 16
                                  }
                                 ]
                                },
                                "pitch": -73.57,
                                "hfov": 1.67
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "hfov": 1.67,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_0_HS_3_0.png",
                                   "width": 105,
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": -73.57,
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -26.53
                               }
                              ],
                              "id": "overlay_2A5C5824_246E_7075_41B4_1B4F60D2FCA3",
                              "rollOverDisplay": false,
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.setMediaBehaviour(this.playList_33FAFC9F_24BD_9054_41AC_CDA0AE38F08B, 0, this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9); this.MainViewerPanoramaPlayer.play()"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -49.24,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_0_HS_4_0_0_map.gif",
                                   "width": 16,
                                   "height": 16
                                  }
                                 ]
                                },
                                "pitch": -34.78,
                                "hfov": 4.86
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "hfov": 4.86,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_0_HS_4_0.png",
                                   "width": 105,
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": -34.78,
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -49.24
                               }
                              ],
                              "id": "overlay_34D30286_2476_9035_41AC_28BF9E882B07",
                              "rollOverDisplay": false,
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.showPopupPanoramaOverlay(this.popup_34BBD83C_246A_F055_41C1_EBEF48C7F767, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'paddingTop':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':20,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000'}, this.ImageResource_32CBA59C_24AE_9054_41C1_95FEFF54BD80, null, null, null, null, false)"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -45.25,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_0_HS_5_0_0_map.gif",
                                   "width": 16,
                                   "height": 16
                                  }
                                 ]
                                },
                                "pitch": -23.82,
                                "hfov": 5.42
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "hfov": 5.42,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_0_HS_5_0.png",
                                   "width": 105,
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": -23.82,
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -45.25
                               }
                              ],
                              "id": "overlay_357A9663_246A_B0F3_41C1_3CBEFE39E6A1",
                              "rollOverDisplay": false,
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "rotationY": 0,
                              "hideDuration": 500,
                              "rotationX": 0,
                              "showDuration": 500,
                              "rotationZ": 0,
                              "class": "PopupPanoramaOverlay",
                              "popupDistance": 100,
                              "popupMaxWidth": "95%",
                              "hfov": 5.42,
                              "hideEasing": "cubic_out",
                              "popupMaxHeight": "95%",
                              "id": "popup_34BBD83C_246A_F055_41C1_EBEF48C7F767",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "class": "ImageResourceLevel",
                                 "url": "media/popup_34BBD83C_246A_F055_41C1_EBEF48C7F767_0_1.jpg",
                                 "width": 1024,
                                 "height": 639
                                }
                               ]
                              },
                              "pitch": -23.82,
                              "showEasing": "cubic_in",
                              "yaw": -45.25
                             }
                            ],
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_hq.jpeg",
                               "width": 6434,
                               "height": 3217,
                               "tags": [
                                "oculusgo",
                                "ipadpro"
                               ]
                              },
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9.jpeg",
                               "width": 4002,
                               "height": 2001
                              }
                             ]
                            }
                           }
                          ],
                          "hfovMin": 100,
                          "hfovMax": 130,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "vfov": 180,
                             "thumbnailUrl": "media/media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1_t.jpg",
                             "id": "media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1",
                             "hfov": 360,
                             "overlays": [
                              {
                               "areas": [
                                {
                                 "class": "HotspotPanoramaOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.startPanoramaWithCamera(this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748, this.camera_30992DE7_24BD_93F3_41C0_E24A5E73A89D); this.setMediaBehaviour(this.playList_33FC1C90_24BD_902C_41BC_F46569BB0BA1, 0, this.media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1)"
                                }
                               ],
                               "maps": [
                                {
                                 "class": "HotspotPanoramaOverlayMap",
                                 "yaw": 0,
                                 "playbackPositions": [
                                  {
                                   "roll": 0,
                                   "timestamp": 0,
                                   "pitch": -9.23,
                                   "class": "PanoramaOverlayPlaybackPosition",
                                   "opacity": 1,
                                   "yaw": -118.47,
                                   "hfov": 9.25
                                  }
                                 ],
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "class": "ImageResourceLevel",
                                    "url": "media/media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1_HS_0_0_0_map.gif",
                                    "width": 16,
                                    "height": 16
                                   }
                                  ]
                                 },
                                 "pitch": 0
                                }
                               ],
                               "class": "HotspotPanoramaOverlay",
                               "useHandCursor": true,
                               "items": [
                                {
                                 "playbackPositions": [
                                  {
                                   "roll": 0,
                                   "timestamp": 0,
                                   "pitch": -9.23,
                                   "class": "PanoramaOverlayPlaybackPosition",
                                   "opacity": 1,
                                   "yaw": -118.47,
                                   "hfov": 9.25
                                  }
                                 ],
                                 "distance": 50,
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "class": "ImageResourceLevel",
                                    "url": "media/media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1_HS_0_0.png",
                                    "width": 118,
                                    "height": 119
                                   }
                                  ]
                                 },
                                 "pitch": 0,
                                 "class": "HotspotPanoramaOverlayImage",
                                 "yaw": 0
                                }
                               ],
                               "id": "overlay_09100D07_2079_EDE6_41B8_138A2C8C06B3",
                               "rollOverDisplay": false,
                               "data": {
                                "label": "Image"
                               },
                               "enabledInCardboard": true
                              }
                             ],
                             "label": "CC Fase2_1",
                             "loop": true,
                             "pitch": 0,
                             "class": "Video360",
                             "hfovMax": 140,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "vfov": 180,
                                "thumbnailUrl": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_t.jpg",
                                "id": "panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
                                "hfov": 360,
                                "class": "Panorama",
                                "label": "16-Oficinas Parque",
                                "pitch": 0,
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_t.jpg",
                                  "overlays": [
                                   {
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_33EC527B_24BE_70D3_41B6_DC512D9842C5); this.setMediaBehaviour(this.playList_33C43C70_24BD_90ED_4173_90A8830AB198, 0, this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748)"
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 176.92,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_0_0_0_map.gif",
                                         "width": 16,
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "pitch": -3.64,
                                      "hfov": 5.91
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "items": [
                                     {
                                      "hfov": 5.91,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_0_0.png",
                                         "width": 105,
                                         "height": 105
                                        }
                                       ]
                                      },
                                      "pitch": -3.64,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 176.92
                                     }
                                    ],
                                    "id": "overlay_17E9486E_1AA7_B579_41B0_203FA3864F4E",
                                    "rollOverDisplay": false,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1, this.camera_3312627B_24BE_70D3_41B0_DF4387ECC272); this.setMediaBehaviour(this.playList_33FAFC9F_24BD_9054_41AC_CDA0AE38F08B, 0, this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748); this.MainViewerPanoramaPlayer.play()"
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -85.83,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_1_0_0_map.gif",
                                         "width": 16,
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "pitch": 6.51,
                                      "hfov": 5.88
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "items": [
                                     {
                                      "hfov": 5.88,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_1_0.png",
                                         "width": 105,
                                         "height": 105
                                        }
                                       ]
                                      },
                                      "pitch": 6.51,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -85.83
                                     }
                                    ],
                                    "id": "overlay_17E9786E_1AA7_B579_4145_9DE47703D9D8",
                                    "rollOverDisplay": false,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.setMediaBehaviour(this.playList_33DACC70_24BD_90ED_41AF_424AB4CDB7B0, 0, this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748)"
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 27.83,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_2_0_0_map.gif",
                                         "width": 16,
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "pitch": 48.04,
                                      "hfov": 3.96
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "items": [
                                     {
                                      "hfov": 3.96,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_2_0.png",
                                         "width": 105,
                                         "height": 105
                                        }
                                       ]
                                      },
                                      "pitch": 48.04,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 27.83
                                     }
                                    ],
                                    "id": "overlay_017ADF7E_202F_6C26_41B8_C56A5105BC33",
                                    "rollOverDisplay": false,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   }
                                  ],
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_hq.jpeg",
                                     "width": 6434,
                                     "height": 3217,
                                     "tags": [
                                      "oculusgo",
                                      "ipadpro"
                                     ]
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748.jpeg",
                                     "width": 4002,
                                     "height": 2001
                                    }
                                   ]
                                  }
                                 }
                                ],
                                "hfovMin": 100,
                                "hfovMax": 130,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9"
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "mapLocations": [
                                    {
                                     "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                     "x": 296.9,
                                     "angle": 86.7,
                                     "y": 333.85,
                                     "class": "PanoramaMapLocation"
                                    }
                                   ],
                                   "vfov": 180,
                                   "thumbnailUrl": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_t.jpg",
                                   "id": "panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
                                   "hfov": 360,
                                   "class": "Panorama",
                                   "label": "3-Detail CC",
                                   "pitch": 0,
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_t.jpg",
                                     "overlays": [
                                      {
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_3773D317_24BE_7053_41B2_19D3EC079C0E); this.setMediaBehaviour(this.playList_33D99C70_24BD_90ED_4192_3209C1BFFB0A, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)"
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 150.05,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_0_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": -2.1,
                                         "hfov": 5.92
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "hfov": 5.92,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_0_0.png",
                                            "width": 105,
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": -2.1,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 150.05
                                        }
                                       ],
                                       "id": "overlay_15E21563_1A28_8BC5_417C_4669528975E0",
                                       "rollOverDisplay": false,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.mainPlayList.set('selectedIndex', 0)"
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 79.36,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_1_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": 1.04,
                                         "hfov": 5.92
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "hfov": 5.92,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_1_0.png",
                                            "width": 105,
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": 1.04,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 79.36
                                        }
                                       ],
                                       "id": "overlay_0A16DB8F_1A2B_9F5E_41A4_EC4CC09E3A83",
                                       "rollOverDisplay": false,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748, this.camera_37701308_24BE_703C_419F_EE66C3495FBF); this.setMediaBehaviour(this.playList_33FC1C90_24BD_902C_41BC_F46569BB0BA1, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)"
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 50.1,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_2_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": -0.36,
                                         "hfov": 5.92
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "hfov": 5.92,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_2_0.png",
                                            "width": 105,
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": -0.36,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 50.1
                                        }
                                       ],
                                       "id": "overlay_0A8869D2_1A28_BAC6_41B3_CB74A246FC3A",
                                       "rollOverDisplay": false,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_37785327_24BE_7074_4170_CAB69E9229EB); this.mainPlayList.set('selectedIndex', 1)"
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -59.69,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_3_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": -2.53,
                                         "hfov": 5.92
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "hfov": 5.92,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_3_0.png",
                                            "width": 105,
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": -2.53,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -59.69
                                        }
                                       ],
                                       "id": "overlay_08D9C3C6_1FD8_9467_41A6_E690DF743C75",
                                       "rollOverDisplay": false,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_37663337_24BE_7054_4198_25919D586220); this.setMediaBehaviour(this.playList_33CA6C80_24BD_902C_41B5_B431A8DE4AAB, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)"
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -157.73,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_4_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": -3.81,
                                         "hfov": 5.91
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "hfov": 5.91,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_4_0.png",
                                            "width": 105,
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": -3.81,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -157.73
                                        }
                                       ],
                                       "id": "overlay_07EAD80C_1FD8_F3EB_415E_63A7F8220FDC",
                                       "rollOverDisplay": false,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.showPopupPanoramaOverlay(this.popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'paddingTop':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':20,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000'}, this.ImageResource_0AA1E95D_2068_946A_419A_A79BE517FB92, null, null, null, null, false)"
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -55.53,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_5_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": 16.63,
                                         "hfov": 5.67
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "hfov": 5.67,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_5_0.png",
                                            "width": 105,
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": 16.63,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -55.53
                                        }
                                       ],
                                       "id": "overlay_3A30E0F6_20F8_9427_41A0_D90681FFF89C",
                                       "rollOverDisplay": false,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "rotationY": 0,
                                       "hideDuration": 500,
                                       "rotationX": 0,
                                       "showDuration": 500,
                                       "rotationZ": 0,
                                       "class": "PopupPanoramaOverlay",
                                       "popupDistance": 100,
                                       "popupMaxWidth": "95%",
                                       "hfov": 3.78,
                                       "hideEasing": "cubic_out",
                                       "popupMaxHeight": "95%",
                                       "id": "popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E",
                                       "image": {
                                        "class": "ImageResource",
                                        "levels": [
                                         {
                                          "class": "ImageResourceLevel",
                                          "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_2.jpg",
                                          "width": 682,
                                          "height": 1024
                                         }
                                        ]
                                       },
                                       "pitch": 16.63,
                                       "showEasing": "cubic_in",
                                       "yaw": -55.53
                                      },
                                      {
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.setMediaBehaviour(this.playList_33DACC70_24BD_90ED_41AF_424AB4CDB7B0, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)"
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 78.46,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_6_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": 40.22,
                                         "hfov": 4.52
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "hfov": 4.52,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_6_0.png",
                                            "width": 105,
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": 40.22,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 78.46
                                        }
                                       ],
                                       "id": "overlay_0118AD21_2029_ADDC_41B1_BAD512D9277C",
                                       "rollOverDisplay": false,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      }
                                     ],
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_hq.jpeg",
                                        "width": 6434,
                                        "height": 3217,
                                        "tags": [
                                         "oculusgo",
                                         "ipadpro"
                                        ]
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09.jpeg",
                                        "width": 4002,
                                        "height": 2001
                                       }
                                      ]
                                     }
                                    }
                                   ],
                                   "hfovMin": 100,
                                   "hfovMax": 130,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
                                     "yaw": 50.1,
                                     "distance": 1,
                                     "backwardYaw": 176.92
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
                                     "yaw": 150.05,
                                     "distance": 1,
                                     "backwardYaw": 41.3
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "mapLocations": [
                                       {
                                        "map": {
                                         "initialZoomFactor": 1,
                                         "class": "Map",
                                         "thumbnailUrl": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_t.png",
                                         "id": "map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                         "overlays": [
                                          {
                                           "useHandCursor": true,
                                           "map": {
                                            "width": 30,
                                            "x": 202.7,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_0_map.gif",
                                               "width": 14,
                                               "height": 15
                                              }
                                             ]
                                            },
                                            "y": 419.55,
                                            "class": "HotspotMapOverlayMap",
                                            "offsetY": 0,
                                            "height": 30,
                                            "offsetX": 0
                                           },
                                           "image": {
                                            "x": 202.7,
                                            "y": 419.55,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_0.png",
                                               "width": 29,
                                               "height": 30
                                              }
                                             ]
                                            },
                                            "height": 30
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000",
                                             "click": "this.mainPlayList.set('selectedIndex', 1)"
                                            }
                                           ],
                                           "id": "overlay_C10F34C4_DD09_E665_41EB_0E9F8F32C5EE",
                                           "rollOverDisplay": true,
                                           "data": {
                                            "label": "Image"
                                           }
                                          },
                                          {
                                           "useHandCursor": true,
                                           "map": {
                                            "width": 30,
                                            "x": 200.7,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_1_map.gif",
                                               "width": 14,
                                               "height": 15
                                              }
                                             ]
                                            },
                                            "y": 104.65,
                                            "class": "HotspotMapOverlayMap",
                                            "offsetY": 0,
                                            "height": 30,
                                            "offsetX": 0
                                           },
                                           "image": {
                                            "x": 200.7,
                                            "y": 104.65,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_1.png",
                                               "width": 29,
                                               "height": 30
                                              }
                                             ]
                                            },
                                            "height": 30
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000",
                                             "click": "this.mainPlayList.set('selectedIndex', 3)"
                                            }
                                           ],
                                           "id": "overlay_C057DBDB_DD0A_6267_41DF_74197503054E",
                                           "rollOverDisplay": true,
                                           "data": {
                                            "label": "Image"
                                           }
                                          },
                                          {
                                           "useHandCursor": true,
                                           "map": {
                                            "width": 30,
                                            "x": 71.7,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_2_map.gif",
                                               "width": 14,
                                               "height": 15
                                              }
                                             ]
                                            },
                                            "y": 106.65,
                                            "class": "HotspotMapOverlayMap",
                                            "offsetY": 0,
                                            "height": 30,
                                            "offsetX": 0
                                           },
                                           "image": {
                                            "x": 71.7,
                                            "y": 106.65,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_2.png",
                                               "width": 29,
                                               "height": 30
                                              }
                                             ]
                                            },
                                            "height": 30
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000",
                                             "click": "this.mainPlayList.set('selectedIndex', 10)"
                                            }
                                           ],
                                           "id": "overlay_C1A62C4E_DD0B_E665_41E4_24E80204A343",
                                           "rollOverDisplay": true,
                                           "data": {
                                            "label": "Image"
                                           }
                                          },
                                          {
                                           "useHandCursor": true,
                                           "map": {
                                            "width": 30,
                                            "x": 73.7,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_3_map.gif",
                                               "width": 14,
                                               "height": 15
                                              }
                                             ]
                                            },
                                            "y": 213.55,
                                            "class": "HotspotMapOverlayMap",
                                            "offsetY": 0,
                                            "height": 30,
                                            "offsetX": 0
                                           },
                                           "image": {
                                            "x": 73.7,
                                            "y": 213.55,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_3.png",
                                               "width": 29,
                                               "height": 30
                                              }
                                             ]
                                            },
                                            "height": 30
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000",
                                             "click": "this.mainPlayList.set('selectedIndex', 11)"
                                            }
                                           ],
                                           "id": "overlay_C0CBF35A_DD0A_E26D_41D4_D1DC41F86387",
                                           "rollOverDisplay": true,
                                           "data": {
                                            "label": "Image"
                                           }
                                          },
                                          {
                                           "useHandCursor": true,
                                           "map": {
                                            "width": 30,
                                            "x": 302.7,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_4_map.gif",
                                               "width": 14,
                                               "height": 15
                                              }
                                             ]
                                            },
                                            "y": 203.55,
                                            "class": "HotspotMapOverlayMap",
                                            "offsetY": 0,
                                            "height": 30,
                                            "offsetX": 0
                                           },
                                           "image": {
                                            "x": 302.7,
                                            "y": 203.55,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_4.png",
                                               "width": 29,
                                               "height": 30
                                              }
                                             ]
                                            },
                                            "height": 30
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000",
                                             "click": "this.mainPlayList.set('selectedIndex', 5)"
                                            }
                                           ],
                                           "id": "overlay_C01B30DE_DD09_BE65_41DD_D62C14826FDF",
                                           "rollOverDisplay": true,
                                           "data": {
                                            "label": "Image"
                                           }
                                          },
                                          {
                                           "useHandCursor": true,
                                           "map": {
                                            "width": 30,
                                            "x": 328.6,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_5_map.gif",
                                               "width": 14,
                                               "height": 15
                                              }
                                             ]
                                            },
                                            "y": 317.55,
                                            "class": "HotspotMapOverlayMap",
                                            "offsetY": 0,
                                            "height": 30,
                                            "offsetX": 0
                                           },
                                           "image": {
                                            "x": 328.6,
                                            "y": 317.55,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_5.png",
                                               "width": 29,
                                               "height": 30
                                              }
                                             ]
                                            },
                                            "height": 30
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000",
                                             "click": "this.mainPlayList.set('selectedIndex', 4)"
                                            }
                                           ],
                                           "id": "overlay_C332A511_DD0E_A7FC_41E4_2786EB8DD2F7",
                                           "rollOverDisplay": true,
                                           "data": {
                                            "label": "Image"
                                           }
                                          },
                                          {
                                           "useHandCursor": true,
                                           "map": {
                                            "width": 30,
                                            "x": 200.7,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_6_map.gif",
                                               "width": 14,
                                               "height": 15
                                              }
                                             ]
                                            },
                                            "y": 361.6,
                                            "class": "HotspotMapOverlayMap",
                                            "offsetY": 0,
                                            "height": 30,
                                            "offsetX": 0
                                           },
                                           "image": {
                                            "x": 200.7,
                                            "y": 361.6,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_6.png",
                                               "width": 29,
                                               "height": 30
                                              }
                                             ]
                                            },
                                            "height": 30
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000",
                                             "click": "this.mainPlayList.set('selectedIndex', 6)"
                                            }
                                           ],
                                           "id": "overlay_C0B9B7F7_DD0E_6224_41E8_445361C5C9E4",
                                           "rollOverDisplay": true,
                                           "data": {
                                            "label": "Image"
                                           }
                                          },
                                          {
                                           "useHandCursor": true,
                                           "map": {
                                            "width": 30,
                                            "x": 318.7,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_7_map.gif",
                                               "width": 14,
                                               "height": 15
                                              }
                                             ]
                                            },
                                            "y": 215.55,
                                            "class": "HotspotMapOverlayMap",
                                            "offsetY": 0,
                                            "height": 30,
                                            "offsetX": 0
                                           },
                                           "image": {
                                            "x": 318.7,
                                            "y": 215.55,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_7.png",
                                               "width": 29,
                                               "height": 30
                                              }
                                             ]
                                            },
                                            "height": 30
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000",
                                             "click": "this.mainPlayList.set('selectedIndex', 12)"
                                            }
                                           ],
                                           "id": "overlay_C3F85A31_DD0F_E23C_41DC_6258471D9794",
                                           "rollOverDisplay": true,
                                           "data": {
                                            "label": "Image"
                                           }
                                          },
                                          {
                                           "useHandCursor": true,
                                           "map": {
                                            "width": 30,
                                            "x": 203.65,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_8_map.gif",
                                               "width": 14,
                                               "height": 15
                                              }
                                             ]
                                            },
                                            "y": 85.55,
                                            "class": "HotspotMapOverlayMap",
                                            "offsetY": 0,
                                            "height": 30,
                                            "offsetX": 0
                                           },
                                           "image": {
                                            "x": 203.65,
                                            "y": 85.55,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_8.png",
                                               "width": 29,
                                               "height": 30
                                              }
                                             ]
                                            },
                                            "height": 30
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000",
                                             "click": "this.mainPlayList.set('selectedIndex', 14)"
                                            }
                                           ],
                                           "id": "overlay_C30E80C5_DD0E_9E67_41E5_F7EA65B0847D",
                                           "rollOverDisplay": true,
                                           "data": {
                                            "label": "Image"
                                           }
                                          },
                                          {
                                           "useHandCursor": true,
                                           "map": {
                                            "width": 30,
                                            "x": 66.65,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_9_map.gif",
                                               "width": 14,
                                               "height": 15
                                              }
                                             ]
                                            },
                                            "y": 217.55,
                                            "class": "HotspotMapOverlayMap",
                                            "offsetY": 0,
                                            "height": 30,
                                            "offsetX": 0
                                           },
                                           "image": {
                                            "x": 66.65,
                                            "y": 217.55,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_9.png",
                                               "width": 29,
                                               "height": 30
                                              }
                                             ]
                                            },
                                            "height": 30
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000",
                                             "click": "this.mainPlayList.set('selectedIndex', 13)"
                                            }
                                           ],
                                           "id": "overlay_C3598F78_DD0E_622C_41E9_FCE2210BA50E",
                                           "rollOverDisplay": true,
                                           "data": {
                                            "label": "Image"
                                           }
                                          },
                                          {
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000"
                                            }
                                           ],
                                           "map": {
                                            "width": 30,
                                            "x": 236.65,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_10_map.gif",
                                               "width": 14,
                                               "height": 15
                                              }
                                             ]
                                            },
                                            "y": 304.6,
                                            "class": "HotspotMapOverlayMap",
                                            "offsetY": 0,
                                            "height": 30,
                                            "offsetX": 0
                                           },
                                           "image": {
                                            "x": 236.65,
                                            "y": 304.6,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_10.png",
                                               "width": 29,
                                               "height": 30
                                              }
                                             ]
                                            },
                                            "height": 30
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true,
                                           "id": "overlay_C3A2F1BB_DD09_9E2C_41E6_AEB47B5FEE36",
                                           "rollOverDisplay": true,
                                           "data": {
                                            "label": "Image"
                                           }
                                          },
                                          {
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000"
                                            }
                                           ],
                                           "map": {
                                            "width": 30,
                                            "x": 202.7,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_11_map.gif",
                                               "width": 14,
                                               "height": 15
                                              }
                                             ]
                                            },
                                            "y": 264.55,
                                            "class": "HotspotMapOverlayMap",
                                            "offsetY": 0,
                                            "height": 30,
                                            "offsetX": 0
                                           },
                                           "image": {
                                            "x": 202.7,
                                            "y": 264.55,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_11.png",
                                               "width": 29,
                                               "height": 30
                                              }
                                             ]
                                            },
                                            "height": 30
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true,
                                           "id": "overlay_C3966761_DD0A_E25F_41D3_527C5C447FFE",
                                           "rollOverDisplay": true,
                                           "data": {
                                            "label": "Image"
                                           }
                                          },
                                          {
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000"
                                            }
                                           ],
                                           "map": {
                                            "width": 30,
                                            "x": 207.7,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_12_map.gif",
                                               "width": 14,
                                               "height": 15
                                              }
                                             ]
                                            },
                                            "y": 160.55,
                                            "class": "HotspotMapOverlayMap",
                                            "offsetY": 0,
                                            "height": 30,
                                            "offsetX": 0
                                           },
                                           "image": {
                                            "x": 207.7,
                                            "y": 160.55,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_12.png",
                                               "width": 29,
                                               "height": 30
                                              }
                                             ]
                                            },
                                            "height": 30
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true,
                                           "id": "overlay_C2AD60A4_DD09_9E24_41E0_BE7A28E7C8F8",
                                           "rollOverDisplay": true,
                                           "data": {
                                            "label": "Image"
                                           }
                                          },
                                          {
                                           "useHandCursor": true,
                                           "map": {
                                            "width": 30,
                                            "x": 227.65,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_13_map.gif",
                                               "width": 15,
                                               "height": 15
                                              }
                                             ]
                                            },
                                            "y": 415.8,
                                            "class": "HotspotMapOverlayMap",
                                            "offsetY": 0,
                                            "height": 30,
                                            "offsetX": 0
                                           },
                                           "image": {
                                            "x": 227.65,
                                            "y": 415.8,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_13.png",
                                               "width": 30,
                                               "height": 30
                                              }
                                             ]
                                            },
                                            "height": 30
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000",
                                             "click": "this.mainPlayList.set('selectedIndex', 8)"
                                            }
                                           ],
                                           "id": "overlay_EFFAE3BA_DD3F_A22D_41DB_87FABC0F13CA",
                                           "rollOverDisplay": true,
                                           "data": {
                                            "label": "Image"
                                           }
                                          },
                                          {
                                           "useHandCursor": true,
                                           "map": {
                                            "width": 30,
                                            "x": 207.6,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_14_map.gif",
                                               "width": 15,
                                               "height": 15
                                              }
                                             ]
                                            },
                                            "y": 215.15,
                                            "class": "HotspotMapOverlayMap",
                                            "offsetY": 0,
                                            "height": 30,
                                            "offsetX": 0
                                           },
                                           "image": {
                                            "x": 207.6,
                                            "y": 215.15,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_14.png",
                                               "width": 30,
                                               "height": 30
                                              }
                                             ]
                                            },
                                            "height": 30
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000",
                                             "click": "this.mainPlayList.set('selectedIndex', 16)"
                                            }
                                           ],
                                           "id": "overlay_2A070BB7_27CE_576F_41AB_07E104B79EC6",
                                           "rollOverDisplay": true,
                                           "data": {
                                            "label": "Image"
                                           }
                                          },
                                          {
                                           "useHandCursor": true,
                                           "map": {
                                            "width": 30,
                                            "x": 174.85,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_15_map.gif",
                                               "width": 15,
                                               "height": 15
                                              }
                                             ]
                                            },
                                            "y": 187.8,
                                            "class": "HotspotMapOverlayMap",
                                            "offsetY": 0,
                                            "height": 30,
                                            "offsetX": 0
                                           },
                                           "image": {
                                            "x": 174.85,
                                            "y": 187.8,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_15.png",
                                               "width": 30,
                                               "height": 30
                                              }
                                             ]
                                            },
                                            "height": 30
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000",
                                             "click": "this.mainPlayList.set('selectedIndex', 2)"
                                            }
                                           ],
                                           "id": "overlay_376F3930_27CA_D361_4190_7CF2D4BA616B",
                                           "rollOverDisplay": true,
                                           "data": {
                                            "label": "Image"
                                           }
                                          },
                                          {
                                           "useHandCursor": true,
                                           "map": {
                                            "width": 30,
                                            "x": 202.9,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_16_map.gif",
                                               "width": 15,
                                               "height": 15
                                              }
                                             ]
                                            },
                                            "y": 75.95,
                                            "class": "HotspotMapOverlayMap",
                                            "offsetY": 0,
                                            "height": 30,
                                            "offsetX": 0
                                           },
                                           "image": {
                                            "x": 202.9,
                                            "y": 75.95,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_16.png",
                                               "width": 30,
                                               "height": 30
                                              }
                                             ]
                                            },
                                            "height": 30
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000",
                                             "click": "this.mainPlayList.set('selectedIndex', 7)"
                                            }
                                           ],
                                           "id": "overlay_3778DCE6_27D7_D2E1_41C3_D9B03693BA2C",
                                           "rollOverDisplay": true,
                                           "data": {
                                            "label": "Image"
                                           }
                                          },
                                          {
                                           "useHandCursor": true,
                                           "map": {
                                            "width": 30,
                                            "x": 58.95,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_17_map.gif",
                                               "width": 15,
                                               "height": 15
                                              }
                                             ]
                                            },
                                            "y": 99.95,
                                            "class": "HotspotMapOverlayMap",
                                            "offsetY": 0,
                                            "height": 30,
                                            "offsetX": 0
                                           },
                                           "image": {
                                            "x": 58.95,
                                            "y": 99.95,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_17.png",
                                               "width": 30,
                                               "height": 30
                                              }
                                             ]
                                            },
                                            "height": 30
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000",
                                             "click": "this.mainPlayList.set('selectedIndex', 15)"
                                            }
                                           ],
                                           "id": "overlay_3686017A_27D6_53E6_41C2_468B88D59841",
                                           "rollOverDisplay": true,
                                           "data": {
                                            "label": "Image"
                                           }
                                          }
                                         ],
                                         "label": "Planta",
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070.png",
                                            "width": 415,
                                            "height": 558
                                           }
                                          ]
                                         },
                                         "width": 415,
                                         "maximumZoomFactor": 1.2,
                                         "fieldOfViewOverlayOutsideOpacity": 0,
                                         "fieldOfViewOverlayInsideOpacity": 0.4,
                                         "scaleMode": "fit_inside",
                                         "fieldOfViewOverlayInsideColor": "#000000",
                                         "fieldOfViewOverlayOutsideColor": "#000000",
                                         "fieldOfViewOverlayRadiusScale": 0.19,
                                         "minimumZoomFactor": 0.5,
                                         "height": 558
                                        },
                                        "x": 217.7,
                                        "angle": -83.39,
                                        "y": 434.55,
                                        "class": "PanoramaMapLocation"
                                       }
                                      ],
                                      "vfov": 180,
                                      "thumbnailUrl": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_t.jpg",
                                      "id": "panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
                                      "class": "Panorama",
                                      "label": "Lobby",
                                      "pitch": 0,
                                      "hfov": 360,
                                      "cardboardMenu": "this.Menu_333F7CCE_24BD_9034_41C0_9091ABB344FE",
                                      "frames": [
                                       {
                                        "class": "CubicPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_t.jpg",
                                        "overlays": [
                                         {
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "image",
                                            "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_3C918D2C_24BD_9074_418C_69146C8DB1FA); this.mainPlayList.set('selectedIndex', 16)"
                                           }
                                          ],
                                          "maps": [],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "hfov": 8,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_1_0.png",
                                               "width": 119,
                                               "height": 119
                                              }
                                             ]
                                            },
                                            "pitch": -5.46,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 87.33
                                           }
                                          ],
                                          "id": "overlay_D2A966DF_DC6A_7B64_41DD_D822CC7BCA86",
                                          "rollOverDisplay": false,
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "image",
                                            "click": "this.startPanoramaWithCamera(this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104, this.camera_33657D0C_24BD_9035_41C0_58C30DDF780D); this.mainPlayList.set('selectedIndex', 8)"
                                           }
                                          ],
                                          "maps": [],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "hfov": 7.7,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_0_0.png",
                                               "width": 117,
                                               "height": 118
                                              }
                                             ]
                                            },
                                            "pitch": -13.09,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -176.55
                                           }
                                          ],
                                          "id": "overlay_D319ECF0_DC6A_6F3C_41EA_8C8FADFED6AD",
                                          "rollOverDisplay": false,
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "yaw": -92.76,
                                          "pitch": -1.05,
                                          "bleachingDistance": 0.4,
                                          "class": "LensFlarePanoramaOverlay",
                                          "id": "overlay_D7DEC935_DCEA_FB36_41D7_D4FB63048649",
                                          "bleaching": 0.7
                                         },
                                         {
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "image",
                                            "click": "this.showPopupPanoramaOverlay(this.popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0.09803921568627451],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#CCCCCC','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.5,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundColor':['#000000'],'iconColor':'#FFFFFF'}, this.ImageResource_C406C318_D4FF_7ACD_41B8_0A98872E7CE5, null, null, null, null, false)"
                                           }
                                          ],
                                          "maps": [],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "hfov": 7.64,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_6_0.png",
                                               "width": 122,
                                               "height": 103
                                              }
                                             ]
                                            },
                                            "pitch": -21.91,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 7.39
                                           }
                                          ],
                                          "id": "overlay_D926478A_D4EF_39C2_41AE_D01A03A371F6",
                                          "rollOverDisplay": false,
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "image",
                                            "click": "this.showPopupPanoramaOverlay(this.popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0.09803921568627451],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#CCCCCC','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.5,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundColor':['#000000'],'iconColor':'#FFFFFF'}, this.ImageResource_C4896E50_D4F3_6B5D_41D3_2EEBDC3443C4, null, null, null, null, false)"
                                           }
                                          ],
                                          "maps": [],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "hfov": 8.04,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_7_0.png",
                                               "width": 122,
                                               "height": 103
                                              }
                                             ]
                                            },
                                            "pitch": -12.51,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 163.85
                                           }
                                          ],
                                          "id": "overlay_D9A90784_D4ED_39C5_4189_5758A99D263E",
                                          "rollOverDisplay": false,
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "rotationY": 0,
                                          "hideDuration": 500,
                                          "rotationX": 0,
                                          "showDuration": 500,
                                          "rotationZ": 0,
                                          "class": "PopupPanoramaOverlay",
                                          "popupDistance": 100,
                                          "popupMaxWidth": "95%",
                                          "hfov": 8.04,
                                          "hideEasing": "cubic_out",
                                          "popupMaxHeight": "95%",
                                          "id": "popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D",
                                          "image": {
                                           "class": "ImageResource",
                                           "levels": [
                                            {
                                             "class": "ImageResourceLevel",
                                             "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_2.jpg",
                                             "width": 1024,
                                             "height": 682
                                            }
                                           ]
                                          },
                                          "pitch": -12.51,
                                          "showEasing": "cubic_in",
                                          "yaw": 163.85
                                         },
                                         {
                                          "rotationY": 0,
                                          "hideDuration": 500,
                                          "rotationX": 0,
                                          "showDuration": 500,
                                          "rotationZ": 0,
                                          "class": "PopupPanoramaOverlay",
                                          "popupDistance": 100,
                                          "popupMaxWidth": "95%",
                                          "hfov": 7.64,
                                          "hideEasing": "cubic_out",
                                          "popupMaxHeight": "95%",
                                          "id": "popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0",
                                          "image": {
                                           "class": "ImageResource",
                                           "levels": [
                                            {
                                             "class": "ImageResourceLevel",
                                             "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_2.jpg",
                                             "width": 1024,
                                             "height": 682
                                            }
                                           ]
                                          },
                                          "pitch": -21.91,
                                          "showEasing": "cubic_in",
                                          "yaw": 7.39
                                         },
                                         {
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_33683D1C_24BD_9054_41B6_9EC10AD6D4D6); this.setMediaBehaviour(this.playList_33C43C70_24BD_90ED_4173_90A8830AB198, 0, this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6)"
                                           }
                                          ],
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -91.85,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_8_0_0_map.gif",
                                               "width": 16,
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "pitch": -4.64,
                                            "hfov": 7.94
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "hfov": 7.94,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_8_0.png",
                                               "width": 119,
                                               "height": 118
                                              }
                                             ]
                                            },
                                            "pitch": -4.64,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -91.85
                                           }
                                          ],
                                          "id": "overlay_087339E0_1FDB_745A_4192_8E56F7FC7082",
                                          "rollOverDisplay": false,
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         }
                                        ],
                                        "cube": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_hq.jpeg",
                                           "width": 10224,
                                           "height": 1704,
                                           "tags": [
                                            "oculusgo",
                                            "ipadpro"
                                           ]
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6.jpeg",
                                           "width": 6144,
                                           "height": 1024
                                          }
                                         ]
                                        }
                                       }
                                      ],
                                      "hfovMin": 100,
                                      "hfovMax": 120,
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "mapLocations": [
                                          {
                                           "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                           "x": 242.65,
                                           "angle": -267.85,
                                           "y": 430.8,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
                                         "vfov": 180,
                                         "thumbnailUrl": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_t.jpg",
                                         "id": "panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
                                         "class": "Panorama",
                                         "label": "3_1",
                                         "pitch": 0,
                                         "hfov": 360,
                                         "cardboardMenu": "this.Menu_333F7CCE_24BD_9034_41C0_9091ABB344FE",
                                         "frames": [
                                          {
                                           "class": "CubicPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_t.jpg",
                                           "overlays": [
                                            {
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image",
                                               "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_313C8FCC_24BD_9034_41B4_1B0231921B39); this.mainPlayList.set('selectedIndex', 1)"
                                              }
                                             ],
                                             "maps": [],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "hfov": 7.73,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_0_HS_0_0.png",
                                                  "width": 120,
                                                  "height": 120
                                                 }
                                                ]
                                               },
                                               "pitch": -15.9,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 176.9
                                              }
                                             ],
                                             "id": "overlay_D329AC1C_DC55_AEE5_41D2_6176DAFC3236",
                                             "rollOverDisplay": false,
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            }
                                           ],
                                           "cube": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_hq.jpeg",
                                              "width": 10224,
                                              "height": 1704,
                                              "tags": [
                                               "oculusgo",
                                               "ipadpro"
                                              ]
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104.jpeg",
                                              "width": 6144,
                                              "height": 1024
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "hfovMin": 100,
                                         "hfovMax": 120,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
                                           "yaw": 176.9,
                                           "distance": 1,
                                           "backwardYaw": -176.55
                                          }
                                         ],
                                         "partial": false
                                        },
                                        "yaw": -176.55,
                                        "distance": 1,
                                        "backwardYaw": 176.9
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
                                        "yaw": -91.85,
                                        "distance": 1,
                                        "backwardYaw": -59.69
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "mapLocations": [
                                          {
                                           "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                           "x": 222.6,
                                           "angle": 138.19,
                                           "y": 230.15,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
                                         "vfov": 180,
                                         "thumbnailUrl": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_t.jpg",
                                         "id": "panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                                         "class": "Panorama",
                                         "label": "asensores",
                                         "pitch": 0,
                                         "hfov": 360,
                                         "cardboardMenu": "this.Menu_333F7CCE_24BD_9034_41C0_9091ABB344FE",
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_t.jpg",
                                           "overlays": [
                                            {
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image",
                                               "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_31C51F7D_24BD_90D7_4166_06FF7029EE1B); this.mainPlayList.set('selectedIndex', 1)"
                                              }
                                             ],
                                             "maps": [],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "hfov": 7.87,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_0_0.png",
                                                  "width": 117,
                                                  "height": 118
                                                 }
                                                ]
                                               },
                                               "pitch": -4.96,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 32.92
                                              }
                                             ],
                                             "id": "overlay_28CE795F_2513_8FCA_4188_1998B7E06EBC",
                                             "rollOverDisplay": false,
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image",
                                               "click": "this.startPanoramaWithCamera(this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3, this.camera_31FD7F8D_24BD_9037_41A8_4CB4A20B0B7B); this.mainPlayList.set('selectedIndex', 2)"
                                              }
                                             ],
                                             "maps": [],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "hfov": 7.88,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_1_0.png",
                                                  "width": 118,
                                                  "height": 117
                                                 }
                                                ]
                                               },
                                               "pitch": -8.74,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -166.68
                                              }
                                             ],
                                             "id": "overlay_2B261325_2512_837E_41B0_050021E9F08E",
                                             "rollOverDisplay": false,
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image",
                                               "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_31160FAC_24BD_9075_41AB_D0F16D8E1446); this.mainPlayList.set('selectedIndex', 6)"
                                              }
                                             ],
                                             "maps": [],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "hfov": 7.82,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_2_0.png",
                                                  "width": 117,
                                                  "height": 118
                                                 }
                                                ]
                                               },
                                               "pitch": -8,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -76.25
                                              }
                                             ],
                                             "id": "overlay_2AFE1E17_2516_855A_41C1_80A7DE3B763C",
                                             "rollOverDisplay": false,
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image",
                                               "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_31E1FF9D_24BD_9054_41B9_1A8A56BD42A7); this.mainPlayList.set('selectedIndex', 7)"
                                              }
                                             ],
                                             "maps": [],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "hfov": 7.72,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_3_0.png",
                                                  "width": 117,
                                                  "height": 118
                                                 }
                                                ]
                                               },
                                               "pitch": -12.22,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -16.11
                                              }
                                             ],
                                             "id": "overlay_2AA13E2D_2512_854F_417F_F5763DB0AB5B",
                                             "rollOverDisplay": false,
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image",
                                               "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_31C8FF8D_24BD_9037_418F_78D8F45139E2); this.mainPlayList.set('selectedIndex', 3)"
                                              }
                                             ],
                                             "maps": [],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "hfov": 7.82,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_4_0.png",
                                                  "width": 118,
                                                  "height": 118
                                                 }
                                                ]
                                               },
                                               "pitch": -8.17,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -139.07
                                              }
                                             ],
                                             "id": "overlay_354312DB_254C_E20F_41B9_80BC77A75D32",
                                             "rollOverDisplay": false,
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "yaw": -108.98,
                                             "pitch": 44.67,
                                             "bleachingDistance": 0.4,
                                             "class": "LensFlarePanoramaOverlay",
                                             "id": "overlay_39E9E5BE_37C2_E4C0_41C8_ED2101A9B7E1",
                                             "bleaching": 0.7
                                            },
                                            {
                                             "yaw": 14.17,
                                             "pitch": 28.8,
                                             "bleachingDistance": 0.4,
                                             "class": "LensFlarePanoramaOverlay",
                                             "id": "overlay_39F9CEF7_37C2_E441_4193_83EA81D1DE6F",
                                             "bleaching": 0.7
                                            }
                                           ],
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_hq.jpeg",
                                              "width": 5376,
                                              "height": 2688,
                                              "tags": [
                                               "oculusgo",
                                               "ipadpro"
                                              ]
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F.jpeg",
                                              "width": 3217,
                                              "height": 1608
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "hfovMin": 100,
                                         "hfovMax": 120,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
                                           "yaw": 32.92,
                                           "distance": 1,
                                           "backwardYaw": 87.33
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "mapLocations": [
                                             {
                                              "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                              "x": 215.7,
                                              "angle": 87.93,
                                              "y": 119.65,
                                              "class": "PanoramaMapLocation"
                                             }
                                            ],
                                            "vfov": 180,
                                            "thumbnailUrl": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_t.jpg",
                                            "id": "panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
                                            "class": "Panorama",
                                            "label": "Main Floor",
                                            "pitch": 0,
                                            "hfov": 360,
                                            "cardboardMenu": "this.Menu_333F7CCE_24BD_9034_41C0_9091ABB344FE",
                                            "frames": [
                                             {
                                              "class": "CubicPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_t.jpg",
                                              "overlays": [
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_31976F2F_24BD_9073_41AE_7082F66DE110); this.mainPlayList.set('selectedIndex', 16)"
                                                 }
                                                ],
                                                "maps": [],
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "hfov": 7.88,
                                                  "distance": 50,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_0_HS_1_0.png",
                                                     "width": 120,
                                                     "height": 120
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -11.41,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": 96.47
                                                 }
                                                ],
                                                "id": "overlay_D3E0C739_DC56_B92C_41E9_6C44CB4D0781",
                                                "rollOverDisplay": false,
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_30627F20_24BD_906C_41AD_74A603BA917C); this.mainPlayList.set('selectedIndex', 10)"
                                                 }
                                                ],
                                                "maps": [],
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "hfov": 7.97,
                                                  "distance": 50,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_0_HS_0_0.png",
                                                     "width": 120,
                                                     "height": 120
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -7.14,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -176.41
                                                 }
                                                ],
                                                "id": "overlay_D3BB78D6_DC56_5764_41BF_4CD3DB34B52B",
                                                "rollOverDisplay": false,
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "yaw": -0.95,
                                                "pitch": 19.14,
                                                "bleachingDistance": 0.4,
                                                "class": "LensFlarePanoramaOverlay",
                                                "id": "overlay_D4BE7E36_DF66_3FBD_41E5_D711B6782282",
                                                "bleaching": 0.7
                                               },
                                               {
                                                "yaw": 164.38,
                                                "pitch": 17.62,
                                                "bleachingDistance": 0.4,
                                                "class": "LensFlarePanoramaOverlay",
                                                "id": "overlay_D4BB02EB_DF66_04AB_41E7_314E72AF48E7",
                                                "bleaching": 0.7
                                               }
                                              ],
                                              "cube": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_hq.jpeg",
                                                 "width": 10224,
                                                 "height": 1704,
                                                 "tags": [
                                                  "oculusgo",
                                                  "ipadpro"
                                                 ]
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0.jpeg",
                                                 "width": 6144,
                                                 "height": 1024
                                                }
                                               ]
                                              }
                                             }
                                            ],
                                            "hfovMin": 100,
                                            "hfovMax": 120,
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": {
                                               "mapLocations": [
                                                {
                                                 "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                                 "x": 86.7,
                                                 "angle": 80.77,
                                                 "y": 121.65,
                                                 "class": "PanoramaMapLocation"
                                                }
                                               ],
                                               "vfov": 180,
                                               "thumbnailUrl": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_t.jpg",
                                               "id": "panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
                                               "class": "Panorama",
                                               "label": "9",
                                               "pitch": 0,
                                               "hfov": 360,
                                               "cardboardMenu": "this.Menu_333F7CCE_24BD_9034_41C0_9091ABB344FE",
                                               "frames": [
                                                {
                                                 "class": "CubicPanoramaFrame",
                                                 "thumbnailUrl": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_t.jpg",
                                                 "overlays": [
                                                  {
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "image",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_3381B1EF_24BE_73F4_41A3_536D4E18B903); this.mainPlayList.set('selectedIndex', 3)"
                                                    }
                                                   ],
                                                   "maps": [],
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
                                                   "items": [
                                                    {
                                                     "hfov": 7.86,
                                                     "distance": 50,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_0_HS_1_0.png",
                                                        "width": 118,
                                                        "height": 119
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -5.56,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": 3.46
                                                    }
                                                   ],
                                                   "id": "overlay_CC5E5224_DC56_7B24_41D5_3769EA774666",
                                                   "rollOverDisplay": false,
                                                   "data": {
                                                    "label": "Image"
                                                   },
                                                   "enabledInCardboard": true
                                                  },
                                                  {
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "image",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_339C61DF_24BE_73D4_419F_2CB6A96E56BB); this.mainPlayList.set('selectedIndex', 11)"
                                                    }
                                                   ],
                                                   "maps": [],
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
                                                   "items": [
                                                    {
                                                     "hfov": 7.85,
                                                     "distance": 50,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_0_HS_0_0.png",
                                                        "width": 118,
                                                        "height": 119
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -6.24,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": 99.45
                                                    }
                                                   ],
                                                   "id": "overlay_CCE05196_DC55_F9E4_41C9_7E05949C0230",
                                                   "rollOverDisplay": false,
                                                   "data": {
                                                    "label": "Image"
                                                   },
                                                   "enabledInCardboard": true
                                                  },
                                                  {
                                                   "yaw": -0.57,
                                                   "pitch": 16.86,
                                                   "bleachingDistance": 0.4,
                                                   "class": "LensFlarePanoramaOverlay",
                                                   "id": "overlay_D364F048_DF66_03D5_41E1_5EA3BC9637F0",
                                                   "bleaching": 0.7
                                                  },
                                                  {
                                                   "yaw": 164.38,
                                                   "pitch": 16.1,
                                                   "bleachingDistance": 0.4,
                                                   "class": "LensFlarePanoramaOverlay",
                                                   "id": "overlay_D37D2F7A_DF66_1DB5_41C0_1FB80896FEB3",
                                                   "bleaching": 0.7
                                                  }
                                                 ],
                                                 "cube": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_hq.jpeg",
                                                    "width": 10224,
                                                    "height": 1704,
                                                    "tags": [
                                                     "oculusgo",
                                                     "ipadpro"
                                                    ]
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B.jpeg",
                                                    "width": 6144,
                                                    "height": 1024
                                                   }
                                                  ]
                                                 }
                                                }
                                               ],
                                               "hfovMin": 80,
                                               "hfovMax": 120,
                                               "adjacentPanoramas": [
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": {
                                                  "mapLocations": [
                                                   {
                                                    "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                                    "x": 88.7,
                                                    "angle": 83.39,
                                                    "y": 228.55,
                                                    "class": "PanoramaMapLocation"
                                                   }
                                                  ],
                                                  "vfov": 180,
                                                  "thumbnailUrl": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_t.jpg",
                                                  "id": "panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
                                                  "class": "Panorama",
                                                  "label": "14",
                                                  "pitch": 0,
                                                  "hfov": 360,
                                                  "cardboardMenu": "this.Menu_333F7CCE_24BD_9034_41C0_9091ABB344FE",
                                                  "frames": [
                                                   {
                                                    "class": "CubicPanoramaFrame",
                                                    "thumbnailUrl": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_t.jpg",
                                                    "overlays": [
                                                     {
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "image",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_31563FDB_24BE_6FD3_41AD_9690244A3B97); this.mainPlayList.set('selectedIndex', 10)"
                                                       }
                                                      ],
                                                      "maps": [],
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true,
                                                      "items": [
                                                       {
                                                        "hfov": 7.88,
                                                        "distance": 50,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_1_0.png",
                                                           "width": 118,
                                                           "height": 118
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -4.65,
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": -85.38
                                                       }
                                                      ],
                                                      "id": "overlay_CC04F239_DC5A_BB2F_41D9_32A30344941E",
                                                      "rollOverDisplay": false,
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "image",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_3121CFDB_24BE_6FD3_419C_6D7E622B8522); this.mainPlayList.set('selectedIndex', 5)"
                                                       }
                                                      ],
                                                      "maps": [],
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true,
                                                      "items": [
                                                       {
                                                        "hfov": 7.87,
                                                        "distance": 50,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_0_0.png",
                                                           "width": 118,
                                                           "height": 118
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -5.22,
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": 72.07
                                                       }
                                                      ],
                                                      "id": "overlay_CD93F058_DCAA_D76C_41E3_66E7F2CC4E96",
                                                      "rollOverDisplay": false,
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "image",
                                                        "click": "this.showPopupPanoramaOverlay(this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0.09803921568627451],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#CCCCCC','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.5,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundColor':['#000000'],'iconColor':'#FFFFFF'}, this.ImageResource_D082516E_DCEA_7368_41CB_9D0CFA830713, null, null, null, null, false)"
                                                       }
                                                      ],
                                                      "maps": [],
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true,
                                                      "items": [
                                                       {
                                                        "hfov": 8.22,
                                                        "distance": 50,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_4_0.png",
                                                           "width": 123,
                                                           "height": 104
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -3.43,
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": -36.13
                                                       }
                                                      ],
                                                      "id": "overlay_D67088C0_DCEE_3198_41E6_EACE23A23D4D",
                                                      "rollOverDisplay": false,
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "rotationY": 0,
                                                      "hideDuration": 500,
                                                      "rotationX": 0,
                                                      "showDuration": 500,
                                                      "rotationZ": 0,
                                                      "class": "PopupPanoramaOverlay",
                                                      "popupDistance": 100,
                                                      "popupMaxWidth": "95%",
                                                      "hfov": 8.22,
                                                      "hideEasing": "cubic_out",
                                                      "popupMaxHeight": "95%",
                                                      "id": "popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
                                                      "image": {
                                                       "class": "ImageResource",
                                                       "levels": [
                                                        {
                                                         "class": "ImageResourceLevel",
                                                         "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_1.jpg",
                                                         "width": 1024,
                                                         "height": 682
                                                        }
                                                       ]
                                                      },
                                                      "pitch": -3.43,
                                                      "showEasing": "cubic_in",
                                                      "yaw": -36.13
                                                     },
                                                     {
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "image",
                                                        "click": "this.showPopupPanoramaOverlay(this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0.09803921568627451],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#CCCCCC','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.5,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundColor':['#000000'],'iconColor':'#FFFFFF'}, this.ImageResource_D38C2C6E_DFA1_73F8_41C3_8C1C155D72CB, null, null, null, null, false)"
                                                       }
                                                      ],
                                                      "maps": [],
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true,
                                                      "items": [
                                                       {
                                                        "hfov": 8.15,
                                                        "distance": 50,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_3_0.png",
                                                           "width": 123,
                                                           "height": 104
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -8.1,
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": -170.82
                                                       }
                                                      ],
                                                      "id": "overlay_D623BF6C_DCE9_EF68_41E5_EA1EE4AA1D99",
                                                      "rollOverDisplay": false,
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "image",
                                                        "click": "this.showPopupPanoramaOverlay(this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0.09803921568627451],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#CCCCCC','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.5,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundColor':['#000000'],'iconColor':'#FFFFFF'}, this.ImageResource_D09DC170_DCEA_7378_41EB_423962A6DDEA, null, null, null, null, false)"
                                                       }
                                                      ],
                                                      "maps": [],
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true,
                                                      "items": [
                                                       {
                                                        "hfov": 8.24,
                                                        "distance": 50,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_2_0.png",
                                                           "width": 123,
                                                           "height": 104
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -0.5,
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": 102.19
                                                       }
                                                      ],
                                                      "id": "overlay_D644FD83_DCEA_5398_41CF_FDE7075B148D",
                                                      "rollOverDisplay": false,
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "rotationY": 0,
                                                      "hideDuration": 500,
                                                      "rotationX": 0,
                                                      "showDuration": 500,
                                                      "rotationZ": 0,
                                                      "class": "PopupPanoramaOverlay",
                                                      "popupDistance": 100,
                                                      "popupMaxWidth": "95%",
                                                      "hfov": 8.24,
                                                      "hideEasing": "cubic_out",
                                                      "popupMaxHeight": "95%",
                                                      "id": "popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
                                                      "image": {
                                                       "class": "ImageResource",
                                                       "levels": [
                                                        {
                                                         "class": "ImageResourceLevel",
                                                         "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_1.jpg",
                                                         "width": 1024,
                                                         "height": 682
                                                        }
                                                       ]
                                                      },
                                                      "pitch": -0.5,
                                                      "showEasing": "cubic_in",
                                                      "yaw": 102.19
                                                     },
                                                     {
                                                      "yaw": 4,
                                                      "pitch": 29.81,
                                                      "bleachingDistance": 0.4,
                                                      "class": "LensFlarePanoramaOverlay",
                                                      "id": "overlay_D4A17713_DF66_0D7B_41EA_88920C3D3D96",
                                                      "bleaching": 0.7
                                                     },
                                                     {
                                                      "yaw": 125.52,
                                                      "pitch": 33.62,
                                                      "bleachingDistance": 0.4,
                                                      "class": "LensFlarePanoramaOverlay",
                                                      "id": "overlay_D4BC6C09_DF66_0357_41CE_9C3B75EE1C61",
                                                      "bleaching": 0.7
                                                     },
                                                     {
                                                      "yaw": -105.71,
                                                      "pitch": 19.14,
                                                      "bleachingDistance": 0.4,
                                                      "class": "LensFlarePanoramaOverlay",
                                                      "id": "overlay_D4BAE022_DF66_0355_41EA_F8574F4021B9",
                                                      "bleaching": 0.7
                                                     },
                                                     {
                                                      "rotationY": 0,
                                                      "hideDuration": 500,
                                                      "rotationX": 0,
                                                      "showDuration": 500,
                                                      "rotationZ": 0,
                                                      "class": "PopupPanoramaOverlay",
                                                      "popupDistance": 100,
                                                      "popupMaxWidth": "95%",
                                                      "hfov": 8.15,
                                                      "hideEasing": "cubic_out",
                                                      "popupMaxHeight": "95%",
                                                      "id": "popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
                                                      "image": {
                                                       "class": "ImageResource",
                                                       "levels": [
                                                        {
                                                         "class": "ImageResourceLevel",
                                                         "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_1.jpg",
                                                         "width": 1024,
                                                         "height": 777
                                                        }
                                                       ]
                                                      },
                                                      "pitch": -8.1,
                                                      "showEasing": "cubic_in",
                                                      "yaw": -170.82
                                                     }
                                                    ],
                                                    "cube": {
                                                     "class": "ImageResource",
                                                     "levels": [
                                                      {
                                                       "class": "ImageResourceLevel",
                                                       "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_hq.jpeg",
                                                       "width": 10224,
                                                       "height": 1704,
                                                       "tags": [
                                                        "oculusgo",
                                                        "ipadpro"
                                                       ]
                                                      },
                                                      {
                                                       "class": "ImageResourceLevel",
                                                       "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A.jpeg",
                                                       "width": 6144,
                                                       "height": 1024
                                                      }
                                                     ]
                                                    }
                                                   }
                                                  ],
                                                  "hfovMin": 80,
                                                  "hfovMax": 120,
                                                  "adjacentPanoramas": [
                                                   {
                                                    "class": "AdjacentPanorama",
                                                    "panorama": {
                                                     "mapLocations": [
                                                      {
                                                       "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                                       "x": 317.7,
                                                       "angle": 92.31,
                                                       "y": 218.55,
                                                       "class": "PanoramaMapLocation"
                                                      }
                                                     ],
                                                     "vfov": 180,
                                                     "thumbnailUrl": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_t.jpg",
                                                     "id": "panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
                                                     "class": "Panorama",
                                                     "label": "Conference Room",
                                                     "pitch": 0,
                                                     "hfov": 360,
                                                     "cardboardMenu": "this.Menu_333F7CCE_24BD_9034_41C0_9091ABB344FE",
                                                     "frames": [
                                                      {
                                                       "class": "CubicPanoramaFrame",
                                                       "thumbnailUrl": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_t.jpg",
                                                       "overlays": [
                                                        {
                                                         "areas": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "mapColor": "image",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_30977DC8_24BD_903C_41AC_706CC7DA127A); this.mainPlayList.set('selectedIndex', 11)"
                                                          }
                                                         ],
                                                         "maps": [],
                                                         "class": "HotspotPanoramaOverlay",
                                                         "useHandCursor": true,
                                                         "items": [
                                                          {
                                                           "hfov": 8.02,
                                                           "distance": 50,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_0_HS_1_0.png",
                                                              "width": 120,
                                                              "height": 120
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -3.5,
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "yaw": -117.42
                                                          }
                                                         ],
                                                         "id": "overlay_CDB4D373_DCAD_D923_41DA_BEF903345F6C",
                                                         "rollOverDisplay": false,
                                                         "data": {
                                                          "label": "Image"
                                                         },
                                                         "enabledInCardboard": true
                                                        },
                                                        {
                                                         "areas": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "mapColor": "image",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D, this.camera_309CFDD8_24BD_93DC_41B4_4045E5C9AF7C); this.mainPlayList.set('selectedIndex', 4)"
                                                          }
                                                         ],
                                                         "maps": [],
                                                         "class": "HotspotPanoramaOverlay",
                                                         "useHandCursor": true,
                                                         "items": [
                                                          {
                                                           "hfov": 7.9,
                                                           "distance": 50,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_0_HS_0_0.png",
                                                              "width": 120,
                                                              "height": 120
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -10.48,
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "yaw": 66.4
                                                          }
                                                         ],
                                                         "id": "overlay_CD17C810_DCAE_D6FC_41E9_DAACF2C28087",
                                                         "rollOverDisplay": false,
                                                         "data": {
                                                          "label": "Image"
                                                         },
                                                         "enabledInCardboard": true
                                                        }
                                                       ],
                                                       "cube": {
                                                        "class": "ImageResource",
                                                        "levels": [
                                                         {
                                                          "class": "ImageResourceLevel",
                                                          "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_hq.jpeg",
                                                          "width": 10224,
                                                          "height": 1704,
                                                          "tags": [
                                                           "oculusgo",
                                                           "ipadpro"
                                                          ]
                                                         },
                                                         {
                                                          "class": "ImageResourceLevel",
                                                          "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E.jpeg",
                                                          "width": 6144,
                                                          "height": 1024
                                                         }
                                                        ]
                                                       }
                                                      }
                                                     ],
                                                     "hfovMin": 100,
                                                     "hfovMax": 120,
                                                     "adjacentPanoramas": [
                                                      {
                                                       "class": "AdjacentPanorama",
                                                       "panorama": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
                                                       "yaw": -117.42,
                                                       "distance": 1,
                                                       "backwardYaw": 72.07
                                                      },
                                                      {
                                                       "class": "AdjacentPanorama",
                                                       "panorama": {
                                                        "mapLocations": [
                                                         {
                                                          "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                                          "x": 343.6,
                                                          "angle": -191.07,
                                                          "y": 332.55,
                                                          "class": "PanoramaMapLocation"
                                                         }
                                                        ],
                                                        "vfov": 180,
                                                        "thumbnailUrl": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_t.jpg",
                                                        "id": "panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
                                                        "class": "Panorama",
                                                        "label": "Dining Room",
                                                        "pitch": 0,
                                                        "hfov": 360,
                                                        "cardboardMenu": "this.Menu_333F7CCE_24BD_9034_41C0_9091ABB344FE",
                                                        "frames": [
                                                         {
                                                          "class": "CubicPanoramaFrame",
                                                          "thumbnailUrl": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_t.jpg",
                                                          "overlays": [
                                                           {
                                                            "areas": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea",
                                                              "mapColor": "image",
                                                              "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_33B7F1FE_24BE_73D5_4183_978F5CE3E6FA); this.mainPlayList.set('selectedIndex', 5)"
                                                             }
                                                            ],
                                                            "maps": [],
                                                            "class": "HotspotPanoramaOverlay",
                                                            "useHandCursor": true,
                                                            "items": [
                                                             {
                                                              "hfov": 7.97,
                                                              "distance": 50,
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_0_HS_0_0.png",
                                                                 "width": 120,
                                                                 "height": 119
                                                                }
                                                               ]
                                                              },
                                                              "pitch": -7.24,
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "yaw": -176.35
                                                             }
                                                            ],
                                                            "id": "overlay_CD4CB2EB_DCAE_5B2C_41DC_F7E2F745A878",
                                                            "rollOverDisplay": false,
                                                            "data": {
                                                             "label": "Image"
                                                            },
                                                            "enabledInCardboard": true
                                                           },
                                                           {
                                                            "areas": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea",
                                                              "mapColor": "image",
                                                              "click": "this.showPopupPanoramaOverlay(this.popup_D60305E4_DCEA_D39F_419B_D9B149482827, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0.09803921568627451],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#CCCCCC','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.5,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundColor':['#000000'],'iconColor':'#FFFFFF'}, this.ImageResource_D09C8172_DCEA_737B_41C7_76727B821C90, null, null, null, null, false)"
                                                             }
                                                            ],
                                                            "maps": [],
                                                            "class": "HotspotPanoramaOverlay",
                                                            "useHandCursor": true,
                                                            "items": [
                                                             {
                                                              "hfov": 8.23,
                                                              "distance": 50,
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_0_HS_1_0.png",
                                                                 "width": 123,
                                                                 "height": 103
                                                                }
                                                               ]
                                                              },
                                                              "pitch": -1.54,
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "yaw": 72.56
                                                             }
                                                            ],
                                                            "id": "overlay_D672A178_DCEA_F368_41D5_479F8DEF3160",
                                                            "rollOverDisplay": false,
                                                            "data": {
                                                             "label": "Image"
                                                            },
                                                            "enabledInCardboard": true
                                                           },
                                                           {
                                                            "rotationY": 0,
                                                            "hideDuration": 500,
                                                            "rotationX": 0,
                                                            "showDuration": 500,
                                                            "rotationZ": 0,
                                                            "class": "PopupPanoramaOverlay",
                                                            "popupDistance": 100,
                                                            "popupMaxWidth": "95%",
                                                            "hfov": 8.23,
                                                            "hideEasing": "cubic_out",
                                                            "popupMaxHeight": "95%",
                                                            "id": "popup_D60305E4_DCEA_D39F_419B_D9B149482827",
                                                            "image": {
                                                             "class": "ImageResource",
                                                             "levels": [
                                                              {
                                                               "class": "ImageResourceLevel",
                                                               "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_1.jpg",
                                                               "width": 1024,
                                                               "height": 682
                                                              }
                                                             ]
                                                            },
                                                            "pitch": -1.54,
                                                            "showEasing": "cubic_in",
                                                            "yaw": 72.56
                                                           }
                                                          ],
                                                          "cube": {
                                                           "class": "ImageResource",
                                                           "levels": [
                                                            {
                                                             "class": "ImageResourceLevel",
                                                             "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_hq.jpeg",
                                                             "width": 10224,
                                                             "height": 1704,
                                                             "tags": [
                                                              "oculusgo",
                                                              "ipadpro"
                                                             ]
                                                            },
                                                            {
                                                             "class": "ImageResourceLevel",
                                                             "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D.jpeg",
                                                             "width": 6144,
                                                             "height": 1024
                                                            }
                                                           ]
                                                          }
                                                         }
                                                        ],
                                                        "hfovMin": 100,
                                                        "hfovMax": 120,
                                                        "adjacentPanoramas": [
                                                         {
                                                          "class": "AdjacentPanorama",
                                                          "panorama": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
                                                          "yaw": -176.35,
                                                          "distance": 1,
                                                          "backwardYaw": 66.4
                                                         }
                                                        ],
                                                        "partial": false
                                                       },
                                                       "yaw": 66.4,
                                                       "distance": 1,
                                                       "backwardYaw": -176.35
                                                      }
                                                     ],
                                                     "partial": false
                                                    },
                                                    "yaw": 72.07,
                                                    "distance": 1,
                                                    "backwardYaw": -117.42
                                                   },
                                                   {
                                                    "class": "AdjacentPanorama",
                                                    "panorama": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
                                                    "yaw": -85.38,
                                                    "distance": 1,
                                                    "backwardYaw": 99.45
                                                   }
                                                  ],
                                                  "partial": false
                                                 },
                                                 "yaw": 99.45,
                                                 "distance": 1,
                                                 "backwardYaw": -85.38
                                                },
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
                                                 "yaw": 3.46,
                                                 "distance": 1,
                                                 "backwardYaw": -176.41
                                                }
                                               ],
                                               "partial": false
                                              },
                                              "yaw": -176.41,
                                              "distance": 1,
                                              "backwardYaw": 3.46
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                                              "yaw": 96.47,
                                              "distance": 1,
                                              "backwardYaw": -139.07
                                             }
                                            ],
                                            "partial": false
                                           },
                                           "yaw": -139.07,
                                           "distance": 1,
                                           "backwardYaw": 96.47
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "mapLocations": [
                                             {
                                              "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                              "x": 189.85,
                                              "angle": 59.39,
                                              "y": 202.8,
                                              "class": "PanoramaMapLocation"
                                             }
                                            ],
                                            "vfov": 180,
                                            "thumbnailUrl": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_t.jpg",
                                            "id": "panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
                                            "class": "Panorama",
                                            "label": "Restrooms",
                                            "pitch": 0,
                                            "hfov": 360,
                                            "cardboardMenu": "this.Menu_333F7CCE_24BD_9034_41C0_9091ABB344FE",
                                            "frames": [
                                             {
                                              "class": "SphericPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_t.jpg",
                                              "overlays": [
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_302E1EE1_24BD_91EF_41C0_9CB8AAE0080F); this.mainPlayList.set('selectedIndex', 16)"
                                                 }
                                                ],
                                                "maps": [],
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "hfov": 7.64,
                                                  "distance": 50,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_0_HS_0_0.png",
                                                     "width": 120,
                                                     "height": 120
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -18.14,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": 27.08
                                                 }
                                                ],
                                                "id": "overlay_2B9DAFA3_2515_837B_41BD_B2A12DB79FE4",
                                                "rollOverDisplay": false,
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "yaw": -74.61,
                                                "pitch": 59.4,
                                                "bleachingDistance": 0.4,
                                                "class": "LensFlarePanoramaOverlay",
                                                "id": "overlay_FE341697_EE9B_B5BB_41CC_1DCF1E1B9FE9",
                                                "bleaching": 0.7
                                               },
                                               {
                                                "yaw": -13.79,
                                                "pitch": 28.05,
                                                "bleachingDistance": 0.4,
                                                "class": "LensFlarePanoramaOverlay",
                                                "id": "overlay_FE452B9D_EE9B_93AF_41C8_E05C00B1EC74",
                                                "bleaching": 0.7
                                               },
                                               {
                                                "yaw": -151.67,
                                                "pitch": 31.07,
                                                "bleachingDistance": 0.4,
                                                "class": "LensFlarePanoramaOverlay",
                                                "id": "overlay_FE59F0F5_EE9B_8D7F_41E8_C632466F366D",
                                                "bleaching": 0.7
                                               }
                                              ],
                                              "sphere": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_hq.jpeg",
                                                 "width": 5376,
                                                 "height": 2688,
                                                 "tags": [
                                                  "oculusgo",
                                                  "ipadpro"
                                                 ]
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3.jpeg",
                                                 "width": 3217,
                                                 "height": 1608
                                                }
                                               ]
                                              }
                                             }
                                            ],
                                            "hfovMin": 100,
                                            "hfovMax": 120,
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                                              "yaw": 27.08,
                                              "distance": 1,
                                              "backwardYaw": -166.68
                                             }
                                            ],
                                            "partial": false
                                           },
                                           "yaw": -166.68,
                                           "distance": 1,
                                           "backwardYaw": 27.08
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "mapLocations": [
                                             {
                                              "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                              "x": 217.9,
                                              "angle": 180,
                                              "y": 90.95,
                                              "class": "PanoramaMapLocation"
                                             }
                                            ],
                                            "vfov": 180,
                                            "thumbnailUrl": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_t.jpg",
                                            "id": "panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
                                            "class": "Panorama",
                                            "label": "Parking Garage",
                                            "pitch": 0,
                                            "hfov": 360,
                                            "cardboardMenu": "this.Menu_333F7CCE_24BD_9034_41C0_9091ABB344FE",
                                            "frames": [
                                             {
                                              "class": "SphericPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_t.jpg",
                                              "overlays": [
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_30DA2E64_24BD_90F5_41C0_E5D284735376); this.mainPlayList.set('selectedIndex', 16)"
                                                 }
                                                ],
                                                "maps": [],
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "hfov": 7.9,
                                                  "distance": 50,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_0_HS_0_0.png",
                                                     "width": 118,
                                                     "height": 119
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -1.31,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -3.13
                                                 }
                                                ],
                                                "id": "overlay_358E55A7_2512_877B_41B8_E929438E29B7",
                                                "rollOverDisplay": false,
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175, this.camera_30D36E55_24BD_90D4_417F_9FD2A5ABA913); this.mainPlayList.set('selectedIndex', 15)"
                                                 }
                                                ],
                                                "maps": [],
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "hfov": 7.83,
                                                  "distance": 50,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_0_HS_1_0.png",
                                                     "width": 118,
                                                     "height": 119
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -7.96,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": 99.63
                                                 }
                                                ],
                                                "id": "overlay_3737BAD2_2512_82DA_419C_050096C450A4",
                                                "rollOverDisplay": false,
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               }
                                              ],
                                              "sphere": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_hq.jpeg",
                                                 "width": 5376,
                                                 "height": 2688,
                                                 "tags": [
                                                  "oculusgo",
                                                  "ipadpro"
                                                 ]
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042.jpeg",
                                                 "width": 3217,
                                                 "height": 1608
                                                }
                                               ]
                                              }
                                             }
                                            ],
                                            "hfovMin": 100,
                                            "hfovMax": 120,
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": {
                                               "mapLocations": [
                                                {
                                                 "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                                 "x": 73.95,
                                                 "angle": -207.49,
                                                 "y": 114.95,
                                                 "class": "PanoramaMapLocation"
                                                }
                                               ],
                                               "vfov": 180,
                                               "thumbnailUrl": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_t.jpg",
                                               "id": "panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
                                               "class": "Panorama",
                                               "label": "parking2",
                                               "pitch": 0,
                                               "hfov": 360,
                                               "cardboardMenu": "this.Menu_333F7CCE_24BD_9034_41C0_9091ABB344FE",
                                               "frames": [
                                                {
                                                 "class": "SphericPanoramaFrame",
                                                 "thumbnailUrl": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_t.jpg",
                                                 "overlays": [
                                                  {
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "image",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_317E8029_24BE_707F_41AE_4D753F885076); this.mainPlayList.set('selectedIndex', 7)"
                                                    }
                                                   ],
                                                   "maps": [],
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
                                                   "items": [
                                                    {
                                                     "hfov": 7.88,
                                                     "distance": 50,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_0_HS_0_0.png",
                                                        "width": 118,
                                                        "height": 119
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -3.91,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": -61.02
                                                    }
                                                   ],
                                                   "id": "overlay_3460957D_251D_87CE_4190_36CE7946E825",
                                                   "rollOverDisplay": false,
                                                   "data": {
                                                    "label": "Image"
                                                   },
                                                   "enabledInCardboard": true
                                                  },
                                                  {
                                                   "yaw": 95.38,
                                                   "pitch": 16.72,
                                                   "bleachingDistance": 0.4,
                                                   "class": "LensFlarePanoramaOverlay",
                                                   "id": "overlay_39DF8AEE_37C2_AC40_417A_6242CBF48B68",
                                                   "bleaching": 0.7
                                                  }
                                                 ],
                                                 "sphere": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_hq.jpeg",
                                                    "width": 5376,
                                                    "height": 2688,
                                                    "tags": [
                                                     "oculusgo",
                                                     "ipadpro"
                                                    ]
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175.jpeg",
                                                    "width": 3217,
                                                    "height": 1608
                                                   }
                                                  ]
                                                 }
                                                }
                                               ],
                                               "hfovMin": 100,
                                               "hfovMax": 120,
                                               "adjacentPanoramas": [
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
                                                 "yaw": -61.02,
                                                 "distance": 1,
                                                 "backwardYaw": 99.63
                                                }
                                               ],
                                               "partial": false
                                              },
                                              "yaw": 99.63,
                                              "distance": 1,
                                              "backwardYaw": -61.02
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                                              "yaw": -3.13,
                                              "distance": 1,
                                              "backwardYaw": -16.11
                                             }
                                            ],
                                            "partial": false
                                           },
                                           "yaw": -16.11,
                                           "distance": 1,
                                           "backwardYaw": -3.13
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "mapLocations": [
                                             {
                                              "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                              "x": 215.7,
                                              "angle": 177.75,
                                              "y": 376.6,
                                              "class": "PanoramaMapLocation"
                                             }
                                            ],
                                            "vfov": 180,
                                            "thumbnailUrl": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_t.jpg",
                                            "id": "panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
                                            "class": "Panorama",
                                            "label": "Empty Shell",
                                            "pitch": 0,
                                            "hfov": 360,
                                            "cardboardMenu": "this.Menu_333F7CCE_24BD_9034_41C0_9091ABB344FE",
                                            "frames": [
                                             {
                                              "class": "CubicPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_t.jpg",
                                              "overlays": [
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_30CF9E74_24BD_90D4_41AC_8FD10C5F90A4); this.mainPlayList.set('selectedIndex', 12)"
                                                 }
                                                ],
                                                "maps": [],
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "hfov": 7.84,
                                                  "distance": 50,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_1_0.png",
                                                     "width": 118,
                                                     "height": 119
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -7.44,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -134.96
                                                 }
                                                ],
                                                "id": "overlay_CE8CA507_DCAE_5EE3_41E1_5677CFA0DCC5",
                                                "rollOverDisplay": false,
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_30C7BE74_24BD_90D4_41AF_B337C2925543); this.mainPlayList.set('selectedIndex', 13)"
                                                 }
                                                ],
                                                "maps": [],
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "hfov": 7.82,
                                                  "distance": 50,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_0_0.png",
                                                     "width": 118,
                                                     "height": 119
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -8.14,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": 147.18
                                                 }
                                                ],
                                                "id": "overlay_CE501F2B_DCB6_692C_41E9_C5E62C500A79",
                                                "rollOverDisplay": false,
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_30F23E83_24BD_9033_41A3_DEED2A728778); this.mainPlayList.set('selectedIndex', 16)"
                                                 }
                                                ],
                                                "maps": [],
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "hfov": 7.89,
                                                  "distance": 50,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_3_0.png",
                                                     "width": 118,
                                                     "height": 118
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -2.91,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -170.05
                                                 }
                                                ],
                                                "id": "overlay_3690BC3C_2513_854E_41B9_F52311509481",
                                                "rollOverDisplay": false,
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               }
                                              ],
                                              "cube": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_hq.jpeg",
                                                 "width": 10224,
                                                 "height": 1704,
                                                 "tags": [
                                                  "oculusgo",
                                                  "ipadpro"
                                                 ]
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F.jpeg",
                                                 "width": 6144,
                                                 "height": 1024
                                                }
                                               ]
                                              }
                                             }
                                            ],
                                            "hfovMin": 100,
                                            "hfovMax": 120,
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": {
                                               "mapLocations": [
                                                {
                                                 "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                                 "x": 81.65,
                                                 "angle": 171.27,
                                                 "y": 232.55,
                                                 "class": "PanoramaMapLocation"
                                                }
                                               ],
                                               "vfov": 180,
                                               "thumbnailUrl": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_t.jpg",
                                               "id": "panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
                                               "class": "Panorama",
                                               "label": "20",
                                               "pitch": 0,
                                               "hfov": 360,
                                               "cardboardMenu": "this.Menu_333F7CCE_24BD_9034_41C0_9091ABB344FE",
                                               "frames": [
                                                {
                                                 "class": "CubicPanoramaFrame",
                                                 "thumbnailUrl": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_t.jpg",
                                                 "overlays": [
                                                  {
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "image",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_33CF525C_24BE_70D4_4198_E823E12210FD); this.mainPlayList.set('selectedIndex', 14)"
                                                    }
                                                   ],
                                                   "maps": [],
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
                                                   "items": [
                                                    {
                                                     "hfov": 7.82,
                                                     "distance": 50,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_0_HS_1_0.png",
                                                        "width": 117,
                                                        "height": 118
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -8.35,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": -146.27
                                                    }
                                                   ],
                                                   "id": "overlay_CF2655CA_DCB5_F96D_41B7_34C2794364A6",
                                                   "rollOverDisplay": false,
                                                   "data": {
                                                    "label": "Image"
                                                   },
                                                   "enabledInCardboard": true
                                                  },
                                                  {
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "image",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_33FC926C_24BE_70F4_41BB_C065CB1674AA); this.mainPlayList.set('selectedIndex', 6)"
                                                    }
                                                   ],
                                                   "maps": [],
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
                                                   "items": [
                                                    {
                                                     "hfov": 7.84,
                                                     "distance": 50,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_0_HS_0_0.png",
                                                        "width": 117,
                                                        "height": 118
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -7.11,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": -34.22
                                                    }
                                                   ],
                                                   "id": "overlay_C886FB4D_DCBA_6967_415D_6C46FDD1DF7E",
                                                   "rollOverDisplay": false,
                                                   "data": {
                                                    "label": "Image"
                                                   },
                                                   "enabledInCardboard": true
                                                  }
                                                 ],
                                                 "cube": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_hq.jpeg",
                                                    "width": 10224,
                                                    "height": 1704,
                                                    "tags": [
                                                     "oculusgo",
                                                     "ipadpro"
                                                    ]
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8.jpeg",
                                                    "width": 6144,
                                                    "height": 1024
                                                   }
                                                  ]
                                                 }
                                                }
                                               ],
                                               "hfovMin": 100,
                                               "hfovMax": 120,
                                               "adjacentPanoramas": [
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": {
                                                  "mapLocations": [
                                                   {
                                                    "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                                    "x": 218.65,
                                                    "angle": 180,
                                                    "y": 100.55,
                                                    "class": "PanoramaMapLocation"
                                                   }
                                                  ],
                                                  "vfov": 180,
                                                  "thumbnailUrl": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_t.jpg",
                                                  "id": "panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
                                                  "class": "Panorama",
                                                  "label": "19",
                                                  "pitch": 0,
                                                  "hfov": 360,
                                                  "cardboardMenu": "this.Menu_333F7CCE_24BD_9034_41C0_9091ABB344FE",
                                                  "frames": [
                                                   {
                                                    "class": "CubicPanoramaFrame",
                                                    "thumbnailUrl": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_t.jpg",
                                                    "overlays": [
                                                     {
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "image",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_32A59097_24BE_7054_41C1_5C1E7DCE83FA); this.mainPlayList.set('selectedIndex', 12)"
                                                       }
                                                      ],
                                                      "maps": [],
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true,
                                                      "items": [
                                                       {
                                                        "hfov": 7.98,
                                                        "distance": 50,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_1_0.png",
                                                           "width": 119,
                                                           "height": 119
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -7.02,
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": -31.12
                                                       }
                                                      ],
                                                      "id": "overlay_CFB5EC7B_DCB6_6F2C_41DB_6256013DCD9F",
                                                      "rollOverDisplay": false,
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "image",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_32B03087_24BE_7033_41C0_7E84B61211EE); this.mainPlayList.set('selectedIndex', 13)"
                                                       }
                                                      ],
                                                      "maps": [],
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true,
                                                      "items": [
                                                       {
                                                        "hfov": 7.83,
                                                        "distance": 50,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_0_0.png",
                                                           "width": 118,
                                                           "height": 119
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -7.66,
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": 56.43
                                                       }
                                                      ],
                                                      "id": "overlay_CF3BB706_DCB6_DAE5_41C3_D53007E5C556",
                                                      "rollOverDisplay": false,
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "image",
                                                        "click": "this.mainPlayList.set('selectedIndex', 1)"
                                                       }
                                                      ],
                                                      "maps": [],
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true,
                                                      "items": [
                                                       {
                                                        "hfov": 8.68,
                                                        "distance": 50,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_2_0.png",
                                                           "width": 131,
                                                           "height": 115
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -8.5,
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": -1.47
                                                       }
                                                      ],
                                                      "id": "overlay_D6ACF640_DCF9_E25D_41B7_FC333768C35D",
                                                      "rollOverDisplay": false,
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "enabledInCardboard": true
                                                     }
                                                    ],
                                                    "cube": {
                                                     "class": "ImageResource",
                                                     "levels": [
                                                      {
                                                       "class": "ImageResourceLevel",
                                                       "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_hq.jpeg",
                                                       "width": 10224,
                                                       "height": 1704,
                                                       "tags": [
                                                        "oculusgo",
                                                        "ipadpro"
                                                       ]
                                                      },
                                                      {
                                                       "class": "ImageResourceLevel",
                                                       "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09.jpeg",
                                                       "width": 6144,
                                                       "height": 1024
                                                      }
                                                     ]
                                                    }
                                                   }
                                                  ],
                                                  "hfovMin": 100,
                                                  "hfovMax": 120,
                                                  "adjacentPanoramas": [
                                                   {
                                                    "class": "AdjacentPanorama",
                                                    "panorama": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
                                                    "yaw": 56.43,
                                                    "distance": 1,
                                                    "backwardYaw": -146.27
                                                   },
                                                   {
                                                    "class": "AdjacentPanorama",
                                                    "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6"
                                                   },
                                                   {
                                                    "class": "AdjacentPanorama",
                                                    "panorama": {
                                                     "mapLocations": [
                                                      {
                                                       "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                                       "x": 333.7,
                                                       "angle": -175.06,
                                                       "y": 230.55,
                                                       "class": "PanoramaMapLocation"
                                                      }
                                                     ],
                                                     "vfov": 180,
                                                     "thumbnailUrl": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_t.jpg",
                                                     "id": "panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
                                                     "class": "Panorama",
                                                     "label": "18",
                                                     "pitch": 0,
                                                     "hfov": 360,
                                                     "cardboardMenu": "this.Menu_333F7CCE_24BD_9034_41C0_9091ABB344FE",
                                                     "frames": [
                                                      {
                                                       "class": "CubicPanoramaFrame",
                                                       "thumbnailUrl": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_t.jpg",
                                                       "overlays": [
                                                        {
                                                         "areas": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "mapColor": "image",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_30BE6E26_24BD_9074_417A_A18F1E988768); this.mainPlayList.set('selectedIndex', 6)"
                                                          }
                                                         ],
                                                         "maps": [],
                                                         "class": "HotspotPanoramaOverlay",
                                                         "useHandCursor": true,
                                                         "items": [
                                                          {
                                                           "hfov": 7.84,
                                                           "distance": 50,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_0_HS_1_0.png",
                                                              "width": 118,
                                                              "height": 119
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -7.1,
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "yaw": 39.43
                                                          }
                                                         ],
                                                         "id": "overlay_CE5312DE_DCB6_5B64_41BB_6CD92A705CA6",
                                                         "rollOverDisplay": false,
                                                         "data": {
                                                          "label": "Image"
                                                         },
                                                         "enabledInCardboard": true
                                                        },
                                                        {
                                                         "areas": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "mapColor": "image",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_30B79E16_24BD_9054_41C1_3E630E103634); this.mainPlayList.set('selectedIndex', 14)"
                                                          }
                                                         ],
                                                         "maps": [],
                                                         "class": "HotspotPanoramaOverlay",
                                                         "useHandCursor": true,
                                                         "items": [
                                                          {
                                                           "hfov": 7.82,
                                                           "distance": 50,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_0_HS_0_0.png",
                                                              "width": 118,
                                                              "height": 119
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -8.27,
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "yaw": 133.34
                                                          }
                                                         ],
                                                         "id": "overlay_CFB8AD78_DCB7_E92D_41BC_33566693B151",
                                                         "rollOverDisplay": false,
                                                         "data": {
                                                          "label": "Image"
                                                         },
                                                         "enabledInCardboard": true
                                                        }
                                                       ],
                                                       "cube": {
                                                        "class": "ImageResource",
                                                        "levels": [
                                                         {
                                                          "class": "ImageResourceLevel",
                                                          "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_hq.jpeg",
                                                          "width": 10224,
                                                          "height": 1704,
                                                          "tags": [
                                                           "oculusgo",
                                                           "ipadpro"
                                                          ]
                                                         },
                                                         {
                                                          "class": "ImageResourceLevel",
                                                          "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9.jpeg",
                                                          "width": 6144,
                                                          "height": 1024
                                                         }
                                                        ]
                                                       }
                                                      }
                                                     ],
                                                     "hfovMin": 100,
                                                     "hfovMax": 120,
                                                     "adjacentPanoramas": [
                                                      {
                                                       "class": "AdjacentPanorama",
                                                       "panorama": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
                                                       "yaw": 133.34,
                                                       "distance": 1,
                                                       "backwardYaw": -31.12
                                                      },
                                                      {
                                                       "class": "AdjacentPanorama",
                                                       "panorama": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
                                                       "yaw": 39.43,
                                                       "distance": 1,
                                                       "backwardYaw": -134.96
                                                      }
                                                     ],
                                                     "partial": false
                                                    },
                                                    "yaw": -31.12,
                                                    "distance": 1,
                                                    "backwardYaw": 133.34
                                                   }
                                                  ],
                                                  "partial": false
                                                 },
                                                 "yaw": -146.27,
                                                 "distance": 1,
                                                 "backwardYaw": 56.43
                                                },
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
                                                 "yaw": -34.22,
                                                 "distance": 1,
                                                 "backwardYaw": 147.18
                                                }
                                               ],
                                               "partial": false
                                              },
                                              "yaw": 147.18,
                                              "distance": 1,
                                              "backwardYaw": -34.22
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
                                              "yaw": -134.96,
                                              "distance": 1,
                                              "backwardYaw": 39.43
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                                              "yaw": -170.05,
                                              "distance": 1,
                                              "backwardYaw": -76.25
                                             }
                                            ],
                                            "partial": false
                                           },
                                           "yaw": -76.25,
                                           "distance": 1,
                                           "backwardYaw": -170.05
                                          }
                                         ],
                                         "partial": false
                                        },
                                        "yaw": 87.33,
                                        "distance": 1,
                                        "backwardYaw": 32.92
                                       }
                                      ],
                                      "partial": false
                                     },
                                     "yaw": -59.69,
                                     "distance": 1,
                                     "backwardYaw": -91.85
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9"
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
                                     "yaw": -157.73,
                                     "distance": 1,
                                     "backwardYaw": 137.01
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714"
                                    }
                                   ],
                                   "partial": false
                                  },
                                  "yaw": 176.92,
                                  "distance": 1,
                                  "backwardYaw": 50.1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1",
                                  "yaw": -85.83,
                                  "distance": 1,
                                  "backwardYaw": -118.47
                                 }
                                ],
                                "partial": false
                               },
                               "yaw": -118.47,
                               "distance": 1,
                               "backwardYaw": -85.83
                              }
                             ],
                             "hfovMin": 60,
                             "partial": false,
                             "video": [
                              {
                               "width": 3840,
                               "type": "video/mp4",
                               "bitrate": 9017,
                               "class": "Video360Resource",
                               "posterURL": "media/media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1_poster.jpg",
                               "url": "media/media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1.mp4",
                               "framerate": 25,
                               "height": 2160
                              },
                              {
                               "width": 3168,
                               "type": "video/mp4",
                               "bitrate": 9017,
                               "class": "Video360Resource",
                               "posterURL": "media/media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1_poster.jpg",
                               "url": "media/media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1_ios.mp4",
                               "framerate": 25,
                               "height": 1782
                              }
                             ]
                            }
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913",
                            "yaw": -156.7,
                            "distance": 1,
                            "backwardYaw": -47.62
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83",
                            "yaw": 153.01,
                            "distance": 1,
                            "backwardYaw": -82.34
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "vfov": 180,
                             "thumbnailUrl": "media/panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_t.jpg",
                             "id": "panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F",
                             "hfov": 360,
                             "class": "Panorama",
                             "label": "IMG_20180114_184740_00_077-edit",
                             "pitch": 0,
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_t.jpg",
                               "overlays": [
                                {
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9, this.camera_3C8ECD4B_24BD_903C_41A0_258C7B28BD6C); this.setMediaBehaviour(this.playList_33DACC70_24BD_90ED_41AF_424AB4CDB7B0, 0, this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F)"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -136.07,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_0_HS_0_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": 17.15,
                                   "hfov": 5.66
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "hfov": 5.66,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_0_HS_0_0.png",
                                      "width": 105,
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": 17.15,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -136.07
                                  }
                                 ],
                                 "id": "overlay_3C762CAF_2037_AC25_41A3_83F067EFAA70",
                                 "rollOverDisplay": false,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83, this.camera_376CEDB8_24BD_905D_41A1_762B8AE5609B); this.setMediaBehaviour(this.playList_33E23C9F_24BD_9054_41A6_802C37DBAE10, 0, this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F)"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -91.43,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_0_HS_1_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": 16.64,
                                   "hfov": 5.67
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "hfov": 5.67,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_0_HS_1_0.png",
                                      "width": 105,
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": 16.64,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -91.43
                                  }
                                 ],
                                 "id": "overlay_3D9D570A_2037_9DEF_41B5_D907B3F37D68",
                                 "rollOverDisplay": false,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913, this.camera_3C857D3B_24BD_9053_41B3_9644DDA95821); this.setMediaBehaviour(this.playList_33EE9C9F_24BD_9054_41A7_1A54EB1B9594, 0, this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F)"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -41.93,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_0_HS_2_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": 16.98,
                                   "hfov": 5.66
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "hfov": 5.66,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_0_HS_2_0.png",
                                      "width": 105,
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": 16.98,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -41.93
                                  }
                                 ],
                                 "id": "overlay_3DC56285_2039_74E5_41B0_D0728579773C",
                                 "rollOverDisplay": false,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E, this.camera_376A4DC8_24BD_903C_41BF_C45031AB4841); this.setMediaBehaviour(this.playList_33F5BC90_24BD_902C_41A0_5EAB16DCBB23, 0, this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F)"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -131.22,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_0_HS_3_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": -29.84,
                                   "hfov": 5.14
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "hfov": 5.14,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_0_HS_3_0.png",
                                      "width": 105,
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": -29.84,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -131.22
                                  }
                                 ],
                                 "id": "overlay_2B56207E_246E_90D5_41B4_17AA9F0532B3",
                                 "rollOverDisplay": false,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.setMediaBehaviour(this.playList_33ED0C9F_24BD_9054_4197_A392A1B93D71, 0, this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F); this.MainViewerPanoramaPlayer.play()"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -158.68,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_0_HS_4_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": -18.07,
                                   "hfov": 5.63
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "hfov": 5.63,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_0_HS_4_0.png",
                                      "width": 105,
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": -18.07,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -158.68
                                  }
                                 ],
                                 "id": "overlay_343C6599_2475_905F_41C0_8CE7E3EBC936",
                                 "rollOverDisplay": false,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                }
                               ],
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_hq.jpeg",
                                  "width": 6434,
                                  "height": 3217,
                                  "tags": [
                                   "oculusgo",
                                   "ipadpro"
                                  ]
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F.jpeg",
                                  "width": 4002,
                                  "height": 2001
                                 }
                                ]
                               }
                              }
                             ],
                             "hfovMin": 100,
                             "hfovMax": 130,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913",
                               "yaw": -41.93,
                               "distance": 1,
                               "backwardYaw": -90.76
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9",
                               "yaw": -136.07,
                               "distance": 1,
                               "backwardYaw": -103.65
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83",
                               "yaw": -91.43,
                               "distance": 1,
                               "backwardYaw": -137.91
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "vfov": 180,
                                "thumbnailUrl": "media/media_0BA5C089_2079_B4ED_41A8_D2AC2349E041_t.jpg",
                                "id": "media_0BA5C089_2079_B4ED_41A8_D2AC2349E041",
                                "hfov": 360,
                                "overlays": [
                                 {
                                  "areas": [
                                   {
                                    "class": "HotspotPanoramaOverlayArea",
                                    "mapColor": "#FF0000",
                                    "click": "this.startPanoramaWithCamera(this.panorama_0B7B5A27_1FEB_7426_4195_945554348391, this.camera_377442F8_24BE_71DD_41BD_089977BCFB3C); this.setMediaBehaviour(this.playList_33F60C90_24BD_902C_41B0_8F04A1D97645, 0, this.media_0BA5C089_2079_B4ED_41A8_D2AC2349E041)"
                                   }
                                  ],
                                  "maps": [
                                   {
                                    "class": "HotspotPanoramaOverlayMap",
                                    "yaw": 0,
                                    "playbackPositions": [
                                     {
                                      "roll": 0,
                                      "timestamp": 0,
                                      "pitch": 2.5,
                                      "class": "PanoramaOverlayPlaybackPosition",
                                      "opacity": 1,
                                      "yaw": 104.85,
                                      "hfov": 9.37
                                     }
                                    ],
                                    "image": {
                                     "class": "ImageResource",
                                     "levels": [
                                      {
                                       "class": "ImageResourceLevel",
                                       "url": "media/media_0BA5C089_2079_B4ED_41A8_D2AC2349E041_HS_0_0_0_map.gif",
                                       "width": 16,
                                       "height": 16
                                      }
                                     ]
                                    },
                                    "pitch": 0
                                   }
                                  ],
                                  "class": "HotspotPanoramaOverlay",
                                  "useHandCursor": true,
                                  "items": [
                                   {
                                    "playbackPositions": [
                                     {
                                      "roll": 0,
                                      "timestamp": 0,
                                      "pitch": 2.5,
                                      "class": "PanoramaOverlayPlaybackPosition",
                                      "opacity": 1,
                                      "yaw": 104.85,
                                      "hfov": 9.37
                                     }
                                    ],
                                    "distance": 50,
                                    "image": {
                                     "class": "ImageResource",
                                     "levels": [
                                      {
                                       "class": "ImageResourceLevel",
                                       "url": "media/media_0BA5C089_2079_B4ED_41A8_D2AC2349E041_HS_0_0.png",
                                       "width": 118,
                                       "height": 119
                                      }
                                     ]
                                    },
                                    "pitch": 0,
                                    "class": "HotspotPanoramaOverlayImage",
                                    "yaw": 0
                                   }
                                  ],
                                  "id": "overlay_0A3F492F_207B_B425_41BC_52C0E074EC22",
                                  "rollOverDisplay": false,
                                  "data": {
                                   "label": "Image"
                                  },
                                  "enabledInCardboard": true
                                 }
                                ],
                                "label": "VID_20180114_173636_00_050_1_1",
                                "loop": true,
                                "pitch": 0,
                                "class": "Video360",
                                "hfovMax": 140,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "mapLocations": [
                                    {
                                     "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                     "x": 357.9,
                                     "angle": 48.7,
                                     "y": 264.95,
                                     "class": "PanoramaMapLocation"
                                    }
                                   ],
                                   "vfov": 180,
                                   "thumbnailUrl": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_t.jpg",
                                   "id": "panorama_0B7B5A27_1FEB_7426_4195_945554348391",
                                   "hfov": 360,
                                   "class": "Panorama",
                                   "label": "17-Construcci\u00f3n Coloplast",
                                   "pitch": 0,
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_t.jpg",
                                     "overlays": [
                                      {
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_30AB8E45_24BD_9034_41B5_40403BEF5299); this.setMediaBehaviour(this.playList_33E46C9F_24BD_9054_4196_4ED1780ABE00, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)"
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -155.58,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_0_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": -3.74,
                                         "hfov": 5.91
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "hfov": 5.91,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_0_0.png",
                                            "width": 105,
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": -3.74,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -155.58
                                        }
                                       ],
                                       "id": "overlay_0AB7C55F_1FE8_FC66_41AA_FC4B185C3724",
                                       "rollOverDisplay": false,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_30BBBE35_24BD_9057_41B5_6A5657809B5C); this.setMediaBehaviour(this.playList_33CA6C80_24BD_902C_41B5_B431A8DE4AAB, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)"
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -174.5,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_1_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": -1.39,
                                         "hfov": 5.92
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "hfov": 5.92,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_1_0.png",
                                            "width": 105,
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": -1.39,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -174.5
                                        }
                                       ],
                                       "id": "overlay_0902A392_1FD9_94FE_41B7_54ABDCF246F7",
                                       "rollOverDisplay": false,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.setMediaBehaviour(this.playList_33FF5C90_24BD_902C_41AA_42F2E9853222, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)"
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -90.59,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_2_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": 27.01,
                                         "hfov": 5.28
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "hfov": 5.28,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_2_0.png",
                                            "width": 105,
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": 27.01,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -90.59
                                        }
                                       ],
                                       "id": "overlay_065D4D65_2058_EC5A_41A3_9655B97D1F55",
                                       "rollOverDisplay": false,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.media_0BA5C089_2079_B4ED_41A8_D2AC2349E041, this.camera_30A3FE45_24BD_9034_4193_3BC4E011FD23); this.setMediaBehaviour(this.playList_33ED0C9F_24BD_9054_4197_A392A1B93D71, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391); this.MainViewerPanoramaPlayer.play()"
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 172.46,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_3_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": -16.71,
                                         "hfov": 7.09
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "hfov": 7.09,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_3_0.png",
                                            "width": 132,
                                            "height": 132
                                           }
                                          ]
                                         },
                                         "pitch": -16.71,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 172.46
                                        }
                                       ],
                                       "id": "overlay_09633245_2078_9465_41B8_9D4E53C35E27",
                                       "rollOverDisplay": false,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      }
                                     ],
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_hq.jpeg",
                                        "width": 6434,
                                        "height": 3217,
                                        "tags": [
                                         "oculusgo",
                                         "ipadpro"
                                        ]
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391.jpeg",
                                        "width": 4002,
                                        "height": 2001
                                       }
                                      ]
                                     }
                                    }
                                   ],
                                   "hfovMin": 100,
                                   "hfovMax": 130,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
                                     "yaw": -174.5,
                                     "distance": 1,
                                     "backwardYaw": 66.08
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.media_0BA5C089_2079_B4ED_41A8_D2AC2349E041",
                                     "yaw": 172.46,
                                     "distance": 1,
                                     "backwardYaw": 104.85
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "vfov": 180,
                                      "thumbnailUrl": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_t.jpg",
                                      "id": "panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
                                      "hfov": 360,
                                      "class": "Panorama",
                                      "label": "5-Arte Rotonda",
                                      "pitch": 0,
                                      "frames": [
                                       {
                                        "class": "SphericPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_t.jpg",
                                        "overlays": [
                                         {
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_37628337_24BE_7054_4180_CEEAB5956989); this.setMediaBehaviour(this.playList_33CA6C80_24BD_902C_41B5_B431A8DE4AAB, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)"
                                           }
                                          ],
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -164.09,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_0_0_0_map.gif",
                                               "width": 16,
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "pitch": -3.15,
                                            "hfov": 5.91
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "hfov": 5.91,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_0_0.png",
                                               "width": 105,
                                               "height": 105
                                              }
                                             ]
                                            },
                                            "pitch": -3.15,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -164.09
                                           }
                                          ],
                                          "id": "overlay_0A67E474_1AA0_BD6A_41B7_BED35C5683B5",
                                          "rollOverDisplay": false,
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E, this.camera_30959356_24BE_70D4_41C1_34C5D3890198); this.setMediaBehaviour(this.playList_33F5BC90_24BD_902C_41A0_5EAB16DCBB23, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)"
                                           }
                                          ],
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -5.23,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_1_0_0_map.gif",
                                               "width": 16,
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "pitch": -5.49,
                                            "hfov": 5.89
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "hfov": 5.89,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_1_0.png",
                                               "width": 105,
                                               "height": 105
                                              }
                                             ]
                                            },
                                            "pitch": -5.49,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -5.23
                                           }
                                          ],
                                          "id": "overlay_0A062D73_1AA1_EF6F_41B3_28BC82B7EFA3",
                                          "rollOverDisplay": false,
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0B7B5A27_1FEB_7426_4195_945554348391, this.camera_37694346_24BE_7035_4197_8504D602AB55); this.setMediaBehaviour(this.playList_33F60C90_24BD_902C_41B0_8F04A1D97645, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)"
                                           }
                                          ],
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 69.33,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_2_0_0_map.gif",
                                               "width": 16,
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "pitch": -2.4,
                                            "hfov": 5.92
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "hfov": 5.92,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_2_0.png",
                                               "width": 105,
                                               "height": 105
                                              }
                                             ]
                                            },
                                            "pitch": -2.4,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 69.33
                                           }
                                          ],
                                          "id": "overlay_0B9BBAA4_1FE8_94DA_41A4_80FF2E6D9882",
                                          "rollOverDisplay": false,
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.setMediaBehaviour(this.playList_33FF5C90_24BD_902C_41AA_42F2E9853222, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)"
                                           }
                                          ],
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 0.33,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_3_0_0_map.gif",
                                               "width": 16,
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "pitch": 36.98,
                                            "hfov": 4.73
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "hfov": 4.73,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_3_0.png",
                                               "width": 105,
                                               "height": 105
                                              }
                                             ]
                                            },
                                            "pitch": 36.98,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 0.33
                                           }
                                          ],
                                          "id": "overlay_02E95182_2028_B4DE_41B1_F1922BBD0381",
                                          "rollOverDisplay": false,
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -18.22,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_4_0_0_map.gif",
                                               "width": 16,
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "pitch": -38.46,
                                            "hfov": 4.64
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "hfov": 4.64,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_4_0.png",
                                               "width": 105,
                                               "height": 105
                                              }
                                             ]
                                            },
                                            "pitch": -38.46,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -18.22
                                           }
                                          ],
                                          "id": "overlay_36086152_2497_F02C_41B3_25B12E8D5B06",
                                          "rollOverDisplay": false,
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         }
                                        ],
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_hq.jpeg",
                                           "width": 6434,
                                           "height": 3217,
                                           "tags": [
                                            "oculusgo",
                                            "ipadpro"
                                           ]
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC.jpeg",
                                           "width": 4002,
                                           "height": 2001
                                          }
                                         ]
                                        }
                                       }
                                      ],
                                      "hfovMin": 100,
                                      "hfovMax": 130,
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
                                        "yaw": -164.09,
                                        "distance": 1,
                                        "backwardYaw": 6.44
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
                                        "yaw": 69.33,
                                        "distance": 1,
                                        "backwardYaw": -155.58
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F"
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "mapLocations": [
                                          {
                                           "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                           "x": 293.95,
                                           "angle": 202.87,
                                           "y": 216.9,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
                                         "vfov": 180,
                                         "thumbnailUrl": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_t.jpg",
                                         "id": "panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
                                         "hfov": 360,
                                         "class": "Panorama",
                                         "label": "6-Lagunas de Retencion",
                                         "pitch": 0,
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_t.jpg",
                                           "overlays": [
                                            {
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_32933058_24BE_70DD_41AC_1E0C9AC223D6); this.setMediaBehaviour(this.playList_33E46C9F_24BD_9054_4196_4ED1780ABE00, 0, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)"
                                              }
                                             ],
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -30.03,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_0_0_0_map.gif",
                                                  "width": 16,
                                                  "height": 16
                                                 }
                                                ]
                                               },
                                               "pitch": -1.5,
                                               "hfov": 5.92
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "hfov": 5.92,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_0_0.png",
                                                  "width": 105,
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": -1.5,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -30.03
                                              }
                                             ],
                                             "id": "overlay_09EEE157_1AA0_9757_41AD_5F9390667B4A",
                                             "rollOverDisplay": false,
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9, this.camera_316DA049_24BE_703C_41B8_CDE2ECF6161B); this.setMediaBehaviour(this.playList_33F74C90_24BD_902C_41BC_C48867BCD9CD, 0, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)"
                                              }
                                             ],
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 139.43,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_1_0_0_map.gif",
                                                  "width": 16,
                                                  "height": 16
                                                 }
                                                ]
                                               },
                                               "pitch": -2.97,
                                               "hfov": 5.91
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "hfov": 5.91,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_1_0.png",
                                                  "width": 105,
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": -2.97,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 139.43
                                              }
                                             ],
                                             "id": "overlay_093185C8_1AA1_9FB9_41B3_EF254AE2BC40",
                                             "rollOverDisplay": false,
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F, this.camera_32826068_24BE_70FC_4186_E139640EF4AD); this.setMediaBehaviour(this.playList_33FF5C90_24BD_902C_41AA_42F2E9853222, 0, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)"
                                              }
                                             ],
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 142.5,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_2_0_0_map.gif",
                                                  "width": 16,
                                                  "height": 16
                                                 }
                                                ]
                                               },
                                               "pitch": 66.14,
                                               "hfov": 2.4
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "hfov": 2.4,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_2_0.png",
                                                  "width": 105,
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": 66.14,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 142.5
                                              }
                                             ],
                                             "id": "overlay_037A2FFE_2029_6C26_41B6_1BF59A245E5D",
                                             "rollOverDisplay": false,
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            }
                                           ],
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_hq.jpeg",
                                              "width": 6434,
                                              "height": 3217,
                                              "tags": [
                                               "oculusgo",
                                               "ipadpro"
                                              ]
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E.jpeg",
                                              "width": 4002,
                                              "height": 2001
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "hfovMin": 100,
                                         "hfovMax": 130,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "mapLocations": [
                                             {
                                              "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                              "x": 283,
                                              "angle": 176.01,
                                              "y": 141,
                                              "class": "PanoramaMapLocation"
                                             }
                                            ],
                                            "vfov": 180,
                                            "thumbnailUrl": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_t.jpg",
                                            "id": "panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
                                            "hfov": 360,
                                            "class": "Panorama",
                                            "label": "7-Centro Atr\u00e1s",
                                            "pitch": 0,
                                            "frames": [
                                             {
                                              "class": "SphericPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_t.jpg",
                                              "overlays": [
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E, this.camera_3149601A_24BE_705C_41A0_F80F04D5DA39); this.setMediaBehaviour(this.playList_33F5BC90_24BD_902C_41A0_5EAB16DCBB23, 0, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)"
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 23.32,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_0_0_0_map.gif",
                                                     "width": 16,
                                                     "height": 16
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -2.78,
                                                  "hfov": 5.91
                                                 }
                                                ],
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "hfov": 5.91,
                                                  "distance": 50,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_0_0.png",
                                                     "width": 105,
                                                     "height": 105
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -2.78,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": 23.32
                                                 }
                                                ],
                                                "id": "overlay_0E28870F_1AA3_FCB7_419D_633D3C55FE98",
                                                "rollOverDisplay": false,
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368, this.camera_31445FEB_24BE_6FFC_41B3_5809686207F8); this.setMediaBehaviour(this.playList_33F55C90_24BD_902C_418A_14893D3C0F1A, 0, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)"
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 107.65,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_1_0_0_map.gif",
                                                     "width": 16,
                                                     "height": 16
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -2.02,
                                                  "hfov": 5.92
                                                 }
                                                ],
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "hfov": 5.92,
                                                  "distance": 50,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_1_0.png",
                                                     "width": 105,
                                                     "height": 105
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -2.02,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": 107.65
                                                 }
                                                ],
                                                "id": "overlay_0C1F6F55_1FE8_EC65_41B8_E66540C53853",
                                                "rollOverDisplay": false,
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.setMediaBehaviour(this.playList_33FF5C90_24BD_902C_41AA_42F2E9853222, 0, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)"
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 102.37,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_2_0_0_map.gif",
                                                     "width": 16,
                                                     "height": 16
                                                    }
                                                   ]
                                                  },
                                                  "pitch": 72.16,
                                                  "hfov": 1.81
                                                 }
                                                ],
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "hfov": 1.81,
                                                  "distance": 50,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_2_0.png",
                                                     "width": 105,
                                                     "height": 105
                                                    }
                                                   ]
                                                  },
                                                  "pitch": 72.16,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": 102.37
                                                 }
                                                ],
                                                "id": "overlay_0317EC11_202B_B3FA_4176_A41CD4A39466",
                                                "rollOverDisplay": false,
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               }
                                              ],
                                              "sphere": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_hq.jpeg",
                                                 "width": 6434,
                                                 "height": 3217,
                                                 "tags": [
                                                  "oculusgo",
                                                  "ipadpro"
                                                 ]
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9.jpeg",
                                                 "width": 4002,
                                                 "height": 2001
                                                }
                                               ]
                                              }
                                             }
                                            ],
                                            "hfovMin": 100,
                                            "hfovMax": 130,
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": {
                                               "mapLocations": [
                                                {
                                                 "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                                 "x": 188.3,
                                                 "angle": 178.51,
                                                 "y": 137.95,
                                                 "class": "PanoramaMapLocation"
                                                }
                                               ],
                                               "vfov": 180,
                                               "thumbnailUrl": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_t.jpg",
                                               "id": "panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
                                               "hfov": 360,
                                               "class": "Panorama",
                                               "label": "8-Pastizal Atr\u00e1s",
                                               "pitch": 0,
                                               "frames": [
                                                {
                                                 "class": "SphericPanoramaFrame",
                                                 "thumbnailUrl": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_t.jpg",
                                                 "overlays": [
                                                  {
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E, this.camera_307D1F20_24BD_906C_41BC_94F8BB9384A0); this.setMediaBehaviour(this.playList_33F4CC90_24BD_902C_41B1_A5AB9E30EE23, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)"
                                                    }
                                                   ],
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": 72.35,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_0_0_0_map.gif",
                                                        "width": 16,
                                                        "height": 16
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -0.2,
                                                     "hfov": 5.92
                                                    }
                                                   ],
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
                                                   "items": [
                                                    {
                                                     "hfov": 5.92,
                                                     "distance": 50,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_0_0.png",
                                                        "width": 105,
                                                        "height": 105
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -0.2,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": 72.35
                                                    }
                                                   ],
                                                   "id": "overlay_0C999A3C_1FF8_B42A_41B2_78A976AB4804",
                                                   "rollOverDisplay": false,
                                                   "data": {
                                                    "label": "Image"
                                                   },
                                                   "enabledInCardboard": true
                                                  },
                                                  {
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9, this.camera_304F9F10_24BD_902D_41B8_325AED75EA95); this.setMediaBehaviour(this.playList_33F74C90_24BD_902C_41BC_C48867BCD9CD, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)"
                                                    }
                                                   ],
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": -112.38,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_1_0_0_map.gif",
                                                        "width": 16,
                                                        "height": 16
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -4.59,
                                                     "hfov": 5.9
                                                    }
                                                   ],
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
                                                   "items": [
                                                    {
                                                     "hfov": 5.9,
                                                     "distance": 50,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_1_0.png",
                                                        "width": 105,
                                                        "height": 105
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -4.59,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": -112.38
                                                    }
                                                   ],
                                                   "id": "overlay_0B0D3357_1FF9_B465_41A7_A52733D8BBA6",
                                                   "rollOverDisplay": false,
                                                   "data": {
                                                    "label": "Image"
                                                   },
                                                   "enabledInCardboard": true
                                                  },
                                                  {
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000",
                                                     "click": "this.setMediaBehaviour(this.playList_33EE9C9F_24BD_9054_41A7_1A54EB1B9594, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)"
                                                    }
                                                   ],
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": 82.3,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_2_0_0_map.gif",
                                                        "width": 16,
                                                        "height": 16
                                                       }
                                                      ]
                                                     },
                                                     "pitch": 43.73,
                                                     "hfov": 4.28
                                                    }
                                                   ],
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
                                                   "items": [
                                                    {
                                                     "hfov": 4.28,
                                                     "distance": 50,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_2_0.png",
                                                        "width": 105,
                                                        "height": 105
                                                       }
                                                      ]
                                                     },
                                                     "pitch": 43.73,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": 82.3
                                                    }
                                                   ],
                                                   "id": "overlay_0563FED1_2058_AC7D_41B4_554C5D71DDD6",
                                                   "rollOverDisplay": false,
                                                   "data": {
                                                    "label": "Image"
                                                   },
                                                   "enabledInCardboard": true
                                                  },
                                                  {
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000",
                                                     "click": "this.setMediaBehaviour(this.playList_33FF5C90_24BD_902C_41AA_42F2E9853222, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)"
                                                    }
                                                   ],
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": -106.31,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_3_0_0_map.gif",
                                                        "width": 16,
                                                        "height": 16
                                                       }
                                                      ]
                                                     },
                                                     "pitch": 41.06,
                                                     "hfov": 4.46
                                                    }
                                                   ],
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
                                                   "items": [
                                                    {
                                                     "hfov": 4.46,
                                                     "distance": 50,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_3_0.png",
                                                        "width": 105,
                                                        "height": 105
                                                       }
                                                      ]
                                                     },
                                                     "pitch": 41.06,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": -106.31
                                                    }
                                                   ],
                                                   "id": "overlay_075305AF_2059_9C26_4154_35D04C13FEEA",
                                                   "rollOverDisplay": false,
                                                   "data": {
                                                    "label": "Image"
                                                   },
                                                   "enabledInCardboard": true
                                                  }
                                                 ],
                                                 "sphere": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_hq.jpeg",
                                                    "width": 6434,
                                                    "height": 3217,
                                                    "tags": [
                                                     "oculusgo",
                                                     "ipadpro"
                                                    ]
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368.jpeg",
                                                    "width": 4002,
                                                    "height": 2001
                                                   }
                                                  ]
                                                 }
                                                }
                                               ],
                                               "hfovMin": 100,
                                               "hfovMax": 130,
                                               "adjacentPanoramas": [
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913"
                                                },
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
                                                 "yaw": -112.38,
                                                 "distance": 1,
                                                 "backwardYaw": 107.65
                                                },
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": {
                                                  "mapLocations": [
                                                   {
                                                    "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                                    "x": 78.4,
                                                    "angle": 143.13,
                                                    "y": 138.6,
                                                    "class": "PanoramaMapLocation"
                                                   }
                                                  ],
                                                  "vfov": 180,
                                                  "thumbnailUrl": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_t.jpg",
                                                  "id": "panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E",
                                                  "hfov": 360,
                                                  "class": "Panorama",
                                                  "label": "15-Esquina Heraus",
                                                  "pitch": 0,
                                                  "frames": [
                                                   {
                                                    "class": "SphericPanoramaFrame",
                                                    "thumbnailUrl": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_t.jpg",
                                                    "overlays": [
                                                     {
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "#FF0000",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525, this.camera_33D9224C_24BE_7035_41A3_834A0EFBF1CE); this.setMediaBehaviour(this.playList_33F47C90_24BD_902C_41B3_70299EFEE89E, 0, this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E)"
                                                       }
                                                      ],
                                                      "maps": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "yaw": 27.45,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_0_HS_0_0_0_map.gif",
                                                           "width": 16,
                                                           "height": 16
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -0.71,
                                                        "hfov": 5.92
                                                       }
                                                      ],
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true,
                                                      "items": [
                                                       {
                                                        "hfov": 5.92,
                                                        "distance": 50,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_0_HS_0_0.png",
                                                           "width": 105,
                                                           "height": 105
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -0.71,
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": 27.45
                                                       }
                                                      ],
                                                      "id": "overlay_0D67D590_1FF8_9CFA_41B0_E874938AA003",
                                                      "rollOverDisplay": false,
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "#FF0000",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368, this.camera_33ABB22D_24BE_7074_41B0_97FA6ACBC9F5); this.setMediaBehaviour(this.playList_33F55C90_24BD_902C_418A_14893D3C0F1A, 0, this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E)"
                                                       }
                                                      ],
                                                      "maps": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "yaw": -63.16,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_0_HS_1_0_0_map.gif",
                                                           "width": 16,
                                                           "height": 16
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -1.78,
                                                        "hfov": 3.49
                                                       }
                                                      ],
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true,
                                                      "items": [
                                                       {
                                                        "hfov": 3.49,
                                                        "distance": 50,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_0_HS_1_0.png",
                                                           "width": 62,
                                                           "height": 62
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -1.78,
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": -63.16
                                                       }
                                                      ],
                                                      "id": "overlay_0D20317E_1FF9_B426_41B0_73281C7DB384",
                                                      "rollOverDisplay": false,
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "#FF0000",
                                                        "click": "this.showPopupPanoramaOverlay(this.popup_3A24E5A5_20F8_BCDA_41A8_FE67D62CDC94, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'paddingTop':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':20,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000'}, this.ImageResource_0AACC979_2068_942D_41A4_C9A0C0413384, null, null, null, null, false)"
                                                       }
                                                      ],
                                                      "maps": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "yaw": -30.73,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_0_HS_2_0_0_map.gif",
                                                           "width": 16,
                                                           "height": 16
                                                          }
                                                         ]
                                                        },
                                                        "pitch": 9.33,
                                                        "hfov": 5.84
                                                       }
                                                      ],
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true,
                                                      "items": [
                                                       {
                                                        "hfov": 5.84,
                                                        "distance": 50,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_0_HS_2_0.png",
                                                           "width": 105,
                                                           "height": 105
                                                          }
                                                         ]
                                                        },
                                                        "pitch": 9.33,
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": -30.73
                                                       }
                                                      ],
                                                      "id": "overlay_3AEAF3EB_20F9_742D_41AB_09B61C7F5B0F",
                                                      "rollOverDisplay": false,
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "rotationY": 0,
                                                      "hideDuration": 500,
                                                      "rotationX": 0,
                                                      "showDuration": 500,
                                                      "rotationZ": 0,
                                                      "class": "PopupPanoramaOverlay",
                                                      "popupDistance": 100,
                                                      "popupMaxWidth": "95%",
                                                      "hfov": 5.84,
                                                      "hideEasing": "cubic_out",
                                                      "popupMaxHeight": "95%",
                                                      "id": "popup_3A24E5A5_20F8_BCDA_41A8_FE67D62CDC94",
                                                      "image": {
                                                       "class": "ImageResource",
                                                       "levels": [
                                                        {
                                                         "class": "ImageResourceLevel",
                                                         "url": "media/popup_3A24E5A5_20F8_BCDA_41A8_FE67D62CDC94_0_2.jpg",
                                                         "width": 1023,
                                                         "height": 682
                                                        }
                                                       ]
                                                      },
                                                      "pitch": 9.33,
                                                      "showEasing": "cubic_in",
                                                      "yaw": -30.73
                                                     },
                                                     {
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "#FF0000",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913, this.camera_33A4D21D_24BE_7057_41B2_0E73E340791F); this.setMediaBehaviour(this.playList_33EE9C9F_24BD_9054_41A7_1A54EB1B9594, 0, this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E)"
                                                       }
                                                      ],
                                                      "maps": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "yaw": 147.85,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_0_HS_3_0_0_map.gif",
                                                           "width": 16,
                                                           "height": 16
                                                          }
                                                         ]
                                                        },
                                                        "pitch": 54.6,
                                                        "hfov": 3.43
                                                       }
                                                      ],
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true,
                                                      "items": [
                                                       {
                                                        "hfov": 3.43,
                                                        "distance": 50,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_0_HS_3_0.png",
                                                           "width": 105,
                                                           "height": 105
                                                          }
                                                         ]
                                                        },
                                                        "pitch": 54.6,
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": 147.85
                                                       }
                                                      ],
                                                      "id": "overlay_05B83903_2058_95DE_418E_11245F463B12",
                                                      "rollOverDisplay": false,
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "#FF0000",
                                                        "click": "this.showPopupPanoramaOverlay(this.popup_35287B51_2496_902F_41BD_231499C70738, {'rollOverIconHeight':20,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'paddingTop':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','iconHeight':20,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000'}, this.ImageResource_32B0359C_24AE_9054_41B2_D241F29053B7, null, null, null, null, false)"
                                                       }
                                                      ],
                                                      "maps": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "yaw": 11.93,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_0_HS_4_0_0_map.gif",
                                                           "width": 16,
                                                           "height": 16
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -4.11,
                                                        "hfov": 5.91
                                                       }
                                                      ],
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true,
                                                      "items": [
                                                       {
                                                        "hfov": 5.91,
                                                        "distance": 50,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_0_HS_4_0.png",
                                                           "width": 105,
                                                           "height": 105
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -4.11,
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": 11.93
                                                       }
                                                      ],
                                                      "id": "overlay_3617C190_2496_902D_41AA_A2B17A28CB65",
                                                      "rollOverDisplay": false,
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "rotationY": 0,
                                                      "hideDuration": 500,
                                                      "rotationX": 0,
                                                      "showDuration": 500,
                                                      "rotationZ": 0,
                                                      "class": "PopupPanoramaOverlay",
                                                      "popupDistance": 100,
                                                      "popupMaxWidth": "95%",
                                                      "hfov": 5.91,
                                                      "hideEasing": "cubic_out",
                                                      "popupMaxHeight": "95%",
                                                      "id": "popup_35287B51_2496_902F_41BD_231499C70738",
                                                      "image": {
                                                       "class": "ImageResource",
                                                       "levels": [
                                                        {
                                                         "class": "ImageResourceLevel",
                                                         "url": "media/popup_35287B51_2496_902F_41BD_231499C70738_0_1.jpg",
                                                         "width": 1024,
                                                         "height": 682
                                                        }
                                                       ]
                                                      },
                                                      "pitch": -4.11,
                                                      "showEasing": "cubic_in",
                                                      "yaw": 11.93
                                                     }
                                                    ],
                                                    "sphere": {
                                                     "class": "ImageResource",
                                                     "levels": [
                                                      {
                                                       "class": "ImageResourceLevel",
                                                       "url": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_hq.jpeg",
                                                       "width": 6434,
                                                       "height": 3217,
                                                       "tags": [
                                                        "oculusgo",
                                                        "ipadpro"
                                                       ]
                                                      },
                                                      {
                                                       "class": "ImageResourceLevel",
                                                       "url": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E.jpeg",
                                                       "width": 4002,
                                                       "height": 2001
                                                      }
                                                     ]
                                                    }
                                                   }
                                                  ],
                                                  "hfovMin": 100,
                                                  "hfovMax": 130,
                                                  "adjacentPanoramas": [
                                                   {
                                                    "class": "AdjacentPanorama",
                                                    "panorama": "this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913",
                                                    "yaw": 147.85,
                                                    "distance": 1,
                                                    "backwardYaw": -89.42
                                                   },
                                                   {
                                                    "class": "AdjacentPanorama",
                                                    "panorama": "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
                                                    "yaw": -63.16,
                                                    "distance": 1,
                                                    "backwardYaw": 72.35
                                                   },
                                                   {
                                                    "class": "AdjacentPanorama",
                                                    "panorama": {
                                                     "mapLocations": [
                                                      {
                                                       "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                                       "x": 82.45,
                                                       "angle": -78.76,
                                                       "y": 218.05,
                                                       "class": "PanoramaMapLocation"
                                                      }
                                                     ],
                                                     "vfov": 180,
                                                     "thumbnailUrl": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_t.jpg",
                                                     "id": "panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
                                                     "hfov": 360,
                                                     "class": "Panorama",
                                                     "label": "14-Entre Zollner y Heraus",
                                                     "pitch": 0,
                                                     "frames": [
                                                      {
                                                       "class": "SphericPanoramaFrame",
                                                       "thumbnailUrl": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_t.jpg",
                                                       "overlays": [
                                                        {
                                                         "areas": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "mapColor": "#FF0000",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_31043FAC_24BD_9075_4186_243C1FE85F4B); this.setMediaBehaviour(this.playList_33CB6C90_24BD_902C_41BD_0EECAC71B6BC, 0, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)"
                                                          }
                                                         ],
                                                         "maps": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "yaw": -95.46,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_0_0_0_map.gif",
                                                              "width": 16,
                                                              "height": 16
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -1.9,
                                                           "hfov": 5.92
                                                          }
                                                         ],
                                                         "class": "HotspotPanoramaOverlay",
                                                         "useHandCursor": true,
                                                         "items": [
                                                          {
                                                           "hfov": 5.92,
                                                           "distance": 50,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_0_0.png",
                                                              "width": 105,
                                                              "height": 105
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -1.9,
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "yaw": -95.46
                                                          }
                                                         ],
                                                         "id": "overlay_0FB017A6_1FE8_BC27_41AF_F1D0B02F7726",
                                                         "rollOverDisplay": false,
                                                         "data": {
                                                          "label": "Image"
                                                         },
                                                         "enabledInCardboard": true
                                                        },
                                                        {
                                                         "areas": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "mapColor": "#FF0000",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E, this.camera_31082FBC_24BD_9054_41C1_2562F5EF138C); this.setMediaBehaviour(this.playList_33F4CC90_24BD_902C_41B1_A5AB9E30EE23, 0, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)"
                                                          }
                                                         ],
                                                         "maps": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "yaw": 99.68,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_1_0_0_map.gif",
                                                              "width": 16,
                                                              "height": 16
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -2.52,
                                                           "hfov": 5.92
                                                          }
                                                         ],
                                                         "class": "HotspotPanoramaOverlay",
                                                         "useHandCursor": true,
                                                         "items": [
                                                          {
                                                           "hfov": 5.92,
                                                           "distance": 50,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_1_0.png",
                                                              "width": 105,
                                                              "height": 105
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -2.52,
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "yaw": 99.68
                                                          }
                                                         ],
                                                         "id": "overlay_0EAE3862_1FEF_B45E_41AE_199087399F1A",
                                                         "rollOverDisplay": false,
                                                         "data": {
                                                          "label": "Image"
                                                         },
                                                         "enabledInCardboard": true
                                                        },
                                                        {
                                                         "areas": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "mapColor": "#FF0000",
                                                           "click": "this.setMediaBehaviour(this.playList_33EE9C9F_24BD_9054_41A7_1A54EB1B9594, 0, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)"
                                                          }
                                                         ],
                                                         "maps": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "yaw": 92,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_2_0_0_map.gif",
                                                              "width": 16,
                                                              "height": 16
                                                             }
                                                            ]
                                                           },
                                                           "pitch": 40.89,
                                                           "hfov": 4.48
                                                          }
                                                         ],
                                                         "class": "HotspotPanoramaOverlay",
                                                         "useHandCursor": true,
                                                         "items": [
                                                          {
                                                           "hfov": 4.48,
                                                           "distance": 50,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_2_0.png",
                                                              "width": 105,
                                                              "height": 105
                                                             }
                                                            ]
                                                           },
                                                           "pitch": 40.89,
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "yaw": 92
                                                          }
                                                         ],
                                                         "id": "overlay_0468197D_2059_7425_41B5_13CA67FE1091",
                                                         "rollOverDisplay": false,
                                                         "data": {
                                                          "label": "Image"
                                                         },
                                                         "enabledInCardboard": true
                                                        }
                                                       ],
                                                       "sphere": {
                                                        "class": "ImageResource",
                                                        "levels": [
                                                         {
                                                          "class": "ImageResourceLevel",
                                                          "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_hq.jpeg",
                                                          "width": 6434,
                                                          "height": 3217,
                                                          "tags": [
                                                           "oculusgo",
                                                           "ipadpro"
                                                          ]
                                                         },
                                                         {
                                                          "class": "ImageResourceLevel",
                                                          "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525.jpeg",
                                                          "width": 4002,
                                                          "height": 2001
                                                         }
                                                        ]
                                                       }
                                                      }
                                                     ],
                                                     "hfovMin": 100,
                                                     "hfovMax": 130,
                                                     "adjacentPanoramas": [
                                                      {
                                                       "class": "AdjacentPanorama",
                                                       "panorama": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
                                                       "yaw": -95.46,
                                                       "distance": 1,
                                                       "backwardYaw": 79.43
                                                      },
                                                      {
                                                       "class": "AdjacentPanorama",
                                                       "panorama": "this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913"
                                                      },
                                                      {
                                                       "class": "AdjacentPanorama",
                                                       "panorama": "this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E",
                                                       "yaw": 99.68,
                                                       "distance": 1,
                                                       "backwardYaw": 27.45
                                                      }
                                                     ],
                                                     "partial": false
                                                    },
                                                    "yaw": 27.45,
                                                    "distance": 1,
                                                    "backwardYaw": 99.68
                                                   }
                                                  ],
                                                  "partial": false
                                                 },
                                                 "yaw": 72.35,
                                                 "distance": 1,
                                                 "backwardYaw": -63.16
                                                },
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F"
                                                }
                                               ],
                                               "partial": false
                                              },
                                              "yaw": 107.65,
                                              "distance": 1,
                                              "backwardYaw": -112.38
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F"
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
                                              "yaw": 23.32,
                                              "distance": 1,
                                              "backwardYaw": 139.43
                                             }
                                            ],
                                            "partial": false
                                           },
                                           "yaw": 139.43,
                                           "distance": 1,
                                           "backwardYaw": 23.32
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
                                           "yaw": -30.03,
                                           "distance": 1,
                                           "backwardYaw": -5.23
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F",
                                           "yaw": 142.5,
                                           "distance": 1,
                                           "backwardYaw": -131.22
                                          }
                                         ],
                                         "partial": false
                                        },
                                        "yaw": -5.23,
                                        "distance": 1,
                                        "backwardYaw": -30.03
                                       }
                                      ],
                                      "partial": false
                                     },
                                     "yaw": -155.58,
                                     "distance": 1,
                                     "backwardYaw": 69.33
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F"
                                    }
                                   ],
                                   "partial": false
                                  },
                                  "yaw": 104.85,
                                  "distance": 1,
                                  "backwardYaw": 172.46
                                 }
                                ],
                                "hfovMin": 60,
                                "partial": false,
                                "video": [
                                 {
                                  "width": 3840,
                                  "type": "video/mp4",
                                  "bitrate": 10020,
                                  "class": "Video360Resource",
                                  "posterURL": "media/media_0BA5C089_2079_B4ED_41A8_D2AC2349E041_poster.jpg",
                                  "url": "media/media_0BA5C089_2079_B4ED_41A8_D2AC2349E041.mp4",
                                  "framerate": 25,
                                  "height": 2160
                                 },
                                 {
                                  "width": 3168,
                                  "type": "video/mp4",
                                  "bitrate": 10020,
                                  "class": "Video360Resource",
                                  "posterURL": "media/media_0BA5C089_2079_B4ED_41A8_D2AC2349E041_poster.jpg",
                                  "url": "media/media_0BA5C089_2079_B4ED_41A8_D2AC2349E041_ios.mp4",
                                  "framerate": 25,
                                  "height": 1782
                                 }
                                ]
                               }
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
                               "yaw": -131.22,
                               "distance": 1,
                               "backwardYaw": 142.5
                              }
                             ],
                             "partial": false
                            },
                            "yaw": -103.65,
                            "distance": 1,
                            "backwardYaw": -136.07
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
                            "yaw": -26.53,
                            "distance": 1,
                            "backwardYaw": -54.75
                           }
                          ],
                          "partial": false
                         },
                         "yaw": -47.62,
                         "distance": 1,
                         "backwardYaw": -156.7
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83",
                         "yaw": -8.49,
                         "distance": 1,
                         "backwardYaw": 173.4
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F",
                         "yaw": -90.76,
                         "distance": 1,
                         "backwardYaw": -41.93
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E",
                         "yaw": -89.42,
                         "distance": 1,
                         "backwardYaw": 147.85
                        }
                       ],
                       "partial": false
                      },
                      "yaw": 173.4,
                      "distance": 1,
                      "backwardYaw": -8.49
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9",
                      "yaw": -82.34,
                      "distance": 1,
                      "backwardYaw": 153.01
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
                      "yaw": 46.35,
                      "distance": 1,
                      "backwardYaw": 62.4
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "vfov": 180,
                       "thumbnailUrl": "media/media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7_t.jpg",
                       "id": "media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7",
                       "hfov": 360,
                       "overlays": [
                        {
                         "areas": [
                          {
                           "class": "HotspotPanoramaOverlayArea",
                           "mapColor": "#FF0000",
                           "click": "this.startPanoramaWithCamera(this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E, this.camera_32AB30A6_24BE_7075_41A1_8977269972B4); this.setMediaBehaviour(this.playList_33CB1C90_24BD_902C_41BB_F420397B113F, 0, this.media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7)"
                          }
                         ],
                         "maps": [
                          {
                           "class": "HotspotPanoramaOverlayMap",
                           "yaw": 0,
                           "playbackPositions": [
                            {
                             "roll": 0,
                             "timestamp": 0,
                             "pitch": 0.14,
                             "class": "PanoramaOverlayPlaybackPosition",
                             "opacity": 1,
                             "yaw": -80.79,
                             "hfov": 9.37
                            }
                           ],
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "class": "ImageResourceLevel",
                              "url": "media/media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7_HS_0_0_0_map.gif",
                              "width": 16,
                              "height": 16
                             }
                            ]
                           },
                           "pitch": 0
                          }
                         ],
                         "class": "HotspotPanoramaOverlay",
                         "useHandCursor": true,
                         "items": [
                          {
                           "playbackPositions": [
                            {
                             "roll": 0,
                             "timestamp": 0,
                             "pitch": 0.14,
                             "class": "PanoramaOverlayPlaybackPosition",
                             "opacity": 1,
                             "yaw": -80.79,
                             "hfov": 9.37
                            }
                           ],
                           "distance": 50,
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "class": "ImageResourceLevel",
                              "url": "media/media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7_HS_0_0.png",
                              "width": 118,
                              "height": 119
                             }
                            ]
                           },
                           "pitch": 0,
                           "class": "HotspotPanoramaOverlayImage",
                           "yaw": 0
                          }
                         ],
                         "id": "overlay_0B568079_2077_742D_418C_ECAE137D4E12",
                         "rollOverDisplay": false,
                         "data": {
                          "label": "Image"
                         },
                         "enabledInCardboard": true
                        }
                       ],
                       "label": "VID_20180114_174842_00_051 (VR2 Output)_1",
                       "loop": true,
                       "pitch": 0,
                       "class": "Video360",
                       "hfovMax": 140,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
                         "yaw": -80.79,
                         "distance": 1,
                         "backwardYaw": -144.51
                        }
                       ],
                       "hfovMin": 60,
                       "partial": false,
                       "video": [
                        {
                         "width": 3840,
                         "type": "video/mp4",
                         "bitrate": 9931,
                         "class": "Video360Resource",
                         "posterURL": "media/media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7_poster.jpg",
                         "url": "media/media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7.mp4",
                         "framerate": 30,
                         "height": 2160
                        },
                        {
                         "width": 3168,
                         "type": "video/mp4",
                         "bitrate": 9931,
                         "class": "Video360Resource",
                         "posterURL": "media/media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7_poster.jpg",
                         "url": "media/media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7_ios.mp4",
                         "framerate": 30,
                         "height": 1782
                        }
                       ]
                      }
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F",
                      "yaw": -137.91,
                      "distance": 1,
                      "backwardYaw": -91.43
                     }
                    ],
                    "partial": false
                   },
                   "yaw": 62.4,
                   "distance": 1,
                   "backwardYaw": 46.35
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7",
                   "yaw": -144.51,
                   "distance": 1,
                   "backwardYaw": -80.79
                  }
                 ],
                 "partial": false
                },
                "yaw": -90.48,
                "distance": 1,
                "backwardYaw": -117.3
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913"
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83"
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
                "yaw": 79.43,
                "distance": 1,
                "backwardYaw": -95.46
               }
              ],
              "partial": false
             },
             "yaw": -94.64,
             "distance": 1,
             "backwardYaw": 179.05
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
             "yaw": 88.55,
             "distance": 1,
             "backwardYaw": -78.27
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83"
            }
           ],
           "partial": false
          },
          "yaw": -78.27,
          "distance": 1,
          "backwardYaw": 88.55
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
          "yaw": 66.08,
          "distance": 1,
          "backwardYaw": -174.5
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F"
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
          "yaw": 137.01,
          "distance": 1,
          "backwardYaw": -157.73
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
          "yaw": 174.57,
          "distance": 1,
          "backwardYaw": -25.53
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
          "yaw": 6.44,
          "distance": 1,
          "backwardYaw": -164.09
         }
        ],
        "partial": false
       },
       "yaw": -25.53,
       "distance": 1,
       "backwardYaw": 174.57
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
       "yaw": 41.3,
       "distance": 1,
       "backwardYaw": 150.05
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F"
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
       "yaw": 150.13,
       "distance": 1,
       "backwardYaw": -19.33
      }
     ],
     "partial": false
    },
    "yaw": -19.33,
    "distance": 1,
    "backwardYaw": 150.13
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9",
    "yaw": -54.75,
    "distance": 1,
    "backwardYaw": -26.53
   }
  ],
  "partial": false
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06",
  "duration": 1000
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.67,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_31C51F7D_24BD_90D7_4166_06FF7029EE1B"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_30963356_24BE_70D4_41B7_2DCAB75BD7BE",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C",
  "duration": 1000
 },
 {
  "initialZoomFactor": 1,
  "class": "Map",
  "thumbnailUrl": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_t.png",
  "id": "map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
  "overlays": [
   {
    "useHandCursor": true,
    "map": {
     "width": 50,
     "x": 280.3,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_HS_0_map.gif",
        "width": 25,
        "height": 24
       }
      ]
     },
     "y": 228.1,
     "class": "HotspotMapOverlayMap",
     "offsetY": 0,
     "height": 50,
     "offsetX": 0
    },
    "image": {
     "x": 280.3,
     "y": 228.1,
     "class": "HotspotMapOverlayImage",
     "width": 50,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_HS_0.png",
        "width": 50,
        "height": 49
       }
      ]
     },
     "height": 50
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 9)"
     }
    ],
    "id": "overlay_E2A9E771_EFFC_6DAB_41ED_732E2F091F5A",
    "rollOverDisplay": false,
    "data": {
     "label": "Image"
    }
   }
  ],
  "label": "Costa-Rica-Map",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C.png",
     "width": 500,
     "height": 563
    }
   ]
  },
  "width": 500,
  "maximumZoomFactor": 1.2,
  "fieldOfViewOverlayOutsideOpacity": 0,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayInsideColor": "#000000",
  "fieldOfViewOverlayOutsideColor": "#000000",
  "fieldOfViewOverlayRadiusScale": 0.33,
  "minimumZoomFactor": 0.5,
  "height": 563
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -132.07,
   "pitch": -40.96,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_camera"
 },
 {
  "automaticRotationSpeed": 10,
  "initialPosition": {
   "class": "RotationalCameraPosition",
   "yaw": 61.53,
   "pitch": 0,
   "hfov": 120
  },
  "class": "RotationalCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_3312627B_24BE_70D3_41B0_DF4387ECC272",
  "manualRotationSpeed": 1800,
  "manualZoomSpeed": 1
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_30968356_24BE_70D4_41BD_DD82D6D7B8A7",
  "duration": 1000
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -107.65,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_33ABB22D_24BE_7074_41B0_97FA6ACBC9F5"
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1",
  "duration": 1000
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_095FC95D_2068_946A_41A5_88BA52F0CF59",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3AF279F7_20F8_9425_41B8_727B1C05B69A_0_0.jpg",
    "width": 2000,
    "height": 1333
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3AF279F7_20F8_9425_41B8_727B1C05B69A_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3AF279F7_20F8_9425_41B8_727B1C05B69A_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ]
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 62.7,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_308C4E06_24BD_9035_41BB_AB491B646D75"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_33354CCE_24BD_9034_41B5_F638603C009C, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CAD97_20DF_6BB3_41A6_3E97E260CACE, 'hideEffect', false)",
    "media": "this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E2D97_20DF_6BB3_41B0_9902D5E426BC, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": {
     "gyroscopeVerticalDraggingEnabled": true,
     "buttonCardboardView": {
      "paddingLeft": 0,
      "toolTipTextShadowBlurRadius": 3,
      "class": "IconButton",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "horizontalAlign": "center",
      "width": 75,
      "id": "IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667",
      "toolTipFontWeight": "normal",
      "toolTipPaddingTop": 4,
      "toolTipFontStyle": "normal",
      "shadow": false,
      "toolTipOpacity": 1,
      "toolTipBorderSize": 1,
      "verticalAlign": "middle",
      "toolTipDisplayTime": 600,
      "borderSize": 0,
      "minHeight": 1,
      "toolTipPaddingLeft": 6,
      "toolTipFontFamily": "Arial",
      "toolTip": "VR",
      "propagateClick": false,
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowOpacity": 0,
      "toolTipShadowHorizontalLength": 0,
      "mode": "push",
      "height": 50,
      "minWidth": 1,
      "toolTipShadowSpread": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "transparencyActive": false,
      "paddingTop": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontSize": 12,
      "toolTipBorderRadius": 3,
      "toolTipShadowVerticalLength": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipBorderColor": "#767676",
      "toolTipFontColor": "#606060",
      "toolTipShadowOpacity": 1,
      "borderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipShadowBlurRadius": 3,
      "paddingRight": 0,
      "iconURL": "skin/IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667.png",
      "cursor": "hand",
      "data": {
       "name": "Button_VR"
      }
     },
     "mouseControlMode": "drag_acceleration",
     "displayPlaybackBar": true,
     "class": "PanoramaPlayer",
     "viewerArea": "this.MainViewer",
     "id": "MainViewerPanoramaPlayer",
     "touchControlMode": "drag_rotation"
    },
    "id": "PanoramaPlayListItem_33354CCE_24BD_9034_41B5_F638603C009C",
    "camera": {
     "initialSequence": {
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       }
      ],
      "restartMovementOnUserInteraction": false
     },
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_camera"
    }
   }
  ],
  "id": "playList_33F4CC90_24BD_902C_41B1_A5AB9E30EE23"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_34593D8F_20DF_6B94_41B9_C6D005829662",
  "duration": 1000
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.08,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_37701308_24BE_703C_419F_EE66C3495FBF"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34597D8F_20DF_6B94_41AA_44DC8A057CBB, 'hideEffect', false)",
    "media": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34590D8F_20DF_6B94_41BB_A45E78753DDE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "initialSequence": {
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       }
      ],
      "restartMovementOnUserInteraction": false
     },
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_camera"
    }
   }
  ],
  "id": "playList_33D99C70_24BD_90ED_4192_3209C1BFFB0A"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E35A021A_ED68_457D_41DB_F92702D0649E",
  "duration": 1000
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 40.93,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_31976F2F_24BD_9073_41AE_7082F66DE110"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_33370CCE_24BD_9034_41B3_991A01B7E613, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E3D97_20DF_6BB3_41B7_C907450FD669, 'hideEffect', false)",
    "media": "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345FCD97_20DF_6BB3_41B7_5533F0603364, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_33370CCE_24BD_9034_41B3_991A01B7E613",
    "camera": {
     "initialSequence": {
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       }
      ],
      "restartMovementOnUserInteraction": false
     },
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_camera"
    }
   }
  ],
  "id": "playList_33F74C90_24BD_902C_41BC_C48867BCD9CD"
 },
 "this.popup_35287B51_2496_902F_41BD_231499C70738",
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_3096D356_24BE_70D4_41AF_D78F05DB8E73",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_30975356_24BE_70D4_41B7_D9B45EBAF099",
  "duration": 1000
 },
 "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.17,
   "pitch": -2.94,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345EDD8F_20DF_6B94_41BF_D2C5F914980C",
  "duration": 1000
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 153.47,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_30440F00_24BD_902D_41B4_AEBDB66DB9A6"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -156.68,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_316DA049_24BE_703C_41B8_CDE2ECF6161B"
 },
 "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD",
  "duration": 1000
 },
 "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
 {
  "class": "ImageResource",
  "id": "ImageResource_3294856D_24AE_90F4_418D_8D9776AE9FF3",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3509F7CC_246E_7035_41AB_BB188EF81D62_0_0.jpg",
    "width": 1500,
    "height": 1000
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3509F7CC_246E_7035_41AB_BB188EF81D62_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3509F7CC_246E_7035_41AB_BB188EF81D62_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ]
 },
 "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 24.42,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_37694346_24BE_7035_4197_8504D602AB55"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -152.55,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_31082FBC_24BD_9054_41C1_2562F5EF138C"
 },
 "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 120.31,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_33683D1C_24BD_9054_41B6_9EC10AD6D4D6"
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_EF6DE039_F622_38BD_41E2_3149DB234972",
  "duration": 0
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 0, 1); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06, 'hideEffect', false)",
    "media": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD84_20DF_6B95_41B9_72E06ABF1981, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "initialSequence": {
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       }
      ],
      "restartMovementOnUserInteraction": false
     },
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": -21.7,
      "pitch": -5.28,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_160D346A_1A28_89C6_418E_CDA086A7E714_camera"
    }
   },
   {
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 1, 2); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_EF6DE039_F622_38BD_41E2_3149DB234972, 'showEffect', false)",
    "media": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3097F366_24BE_70F4_41C1_E1BFD98F427C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_3097D366_24BE_70F4_41C0_A6253BD6AC8F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_3097B366_24BE_70F4_41B3_CAED69F992B5, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera"
    }
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 2, 3)",
    "media": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera"
    }
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 3, 4); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3097A366_24BE_70F4_419B_9F805BFB2F51, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 4, 5); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_30961366_24BE_70F4_41B0_87C781E05937, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera"
    }
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 5, 6); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_30960366_24BE_70F4_419F_51C97CE28919, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera"
    }
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 6, 7); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3096F366_24BE_70F4_41B3_9CEB476E79D3, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera"
    }
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 7, 0)",
    "media": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera"
   }
  ],
  "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345FDD97_20DF_6BB3_41BB_5D593B956B06, 'hideEffect', false)",
    "media": "this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345FED97_20DF_6BB3_41B8_E885D262EE6C, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "initialSequence": {
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       }
      ],
      "restartMovementOnUserInteraction": false
     },
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": -72.03,
      "pitch": -38.54,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_392AB3A7_202B_B425_41B4_97BA77B34913_camera"
    }
   }
  ],
  "id": "playList_33EE9C9F_24BD_9054_41A7_1A54EB1B9594"
 },
 "this.MainViewerPanoramaPlayer",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_26077C68_37A3_6E75_41BD_CC48A65FF42C",
  "duration": 1000
 },
 "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_3097A366_24BE_70F4_419B_9F805BFB2F51",
  "duration": 1000
 },
 "this.media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7",
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_3097F366_24BE_70F4_41C1_E1BFD98F427C",
  "duration": 1000
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 171.51,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_32EDE104_24BE_7035_41A0_391B263616B7"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
    "media": "this.media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_33E37C9F_24BD_9054_41A8_4936AC3F0F89, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_33E37C9F_24BD_9054_41A8_4936AC3F0F89, 0)",
    "class": "Video360PlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "automaticRotationSpeed": 10,
     "initialPosition": {
      "class": "RotationalCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 120
     },
     "class": "RotationalCamera",
     "automaticZoomSpeed": 10,
     "id": "media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7_camera",
     "manualRotationSpeed": 1800,
     "manualZoomSpeed": 1
    }
   }
  ],
  "id": "playList_33E37C9F_24BD_9054_41A8_4936AC3F0F89"
 },
 "this.popup_3AF279F7_20F8_9425_41B8_727B1C05B69A",
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_30971356_24BE_70D4_41BD_BC023E6B09AC",
  "duration": 1000
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_C406C318_D4FF_7ACD_41B8_0A98872E7CE5",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_0.jpg",
    "width": 3861,
    "height": 2574
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_1.jpg",
    "width": 2048,
    "height": 1365
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_2.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_3.jpg",
    "width": 512,
    "height": 341
   }
  ]
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -117.6,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_32018123_24BE_7073_41B2_6D64CAD4FC85"
 },
 "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_30974356_24BE_70D4_41A0_7386DFD18060",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E3582213_ED68_454C_41D3_299F2B40CFF6",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_330BCCBE_24BD_9055_41B8_3BD41EBC5D78, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CDD8F_20DF_6B94_41B6_C00B98F530E1, 'hideEffect', false)",
    "media": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CED8F_20DF_6B94_41B4_61907719F453, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_330BCCBE_24BD_9055_41B8_3BD41EBC5D78",
    "camera": {
     "initialSequence": {
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       }
      ],
      "restartMovementOnUserInteraction": false
     },
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_camera"
    }
   }
  ],
  "id": "playList_33CB6C90_24BD_902C_41BD_0EECAC71B6BC"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345E5D8F_20DF_6B94_4193_ABB7E016F309",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345EAD84_20DF_6B95_41B9_72E06ABF1981",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": {
     "class": "MapPlayer",
     "viewerArea": {
      "paddingBottom": 0,
      "toolTipPaddingTop": 4,
      "playbackBarHeight": 10,
      "id": "MapViewer",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontWeight": "normal",
      "playbackBarHeadBorderColor": "#000000",
      "progressLeft": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipBorderSize": 1,
      "width": "99.417%",
      "playbackBarHeadWidth": 6,
      "toolTipDisplayTime": 600,
      "progressBorderSize": 0,
      "toolTipPaddingLeft": 6,
      "minHeight": 1,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "progressBorderRadius": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarProgressOpacity": 1,
      "playbackBarRight": 0,
      "minWidth": 1,
      "toolTipShadowSpread": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarBorderSize": 0,
      "height": "70.806%",
      "toolTipFontSize": 12,
      "playbackBarBackgroundOpacity": 1,
      "toolTipBorderRadius": 3,
      "progressBarBorderSize": 0,
      "playbackBarLeft": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "toolTipBorderColor": "#767676",
      "toolTipShadowOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowBlurRadius": 3,
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
      "progressBottom": 2,
      "playbackBarHeadHeight": 15,
      "paddingLeft": 0,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarProgressBorderSize": 0,
      "class": "ViewerArea",
      "playbackBarHeadShadowColor": "#000000",
      "progressHeight": 10,
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "playbackBarBottom": 0,
      "toolTipFontStyle": "normal",
      "transitionDuration": 500,
      "progressBarBackgroundColorDirection": "vertical",
      "progressOpacity": 1,
      "shadow": false,
      "toolTipOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "borderSize": 0,
      "progressBarBorderRadius": 0,
      "progressBarBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadShadow": true,
      "toolTipFontFamily": "Arial",
      "propagateClick": false,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBorderRadius": 0,
      "toolTipPaddingBottom": 4,
      "toolTipShadowHorizontalLength": 0,
      "paddingTop": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "displayTooltipInTouchScreens": true,
      "playbackBarHeadOpacity": 1,
      "playbackBarProgressBorderColor": "#000000",
      "transitionMode": "blending",
      "toolTipFontColor": "#606060",
      "data": {
       "name": "MapViewer"
      },
      "playbackBarBorderColor": "#FFFFFF",
      "toolTipPaddingRight": 6
     },
     "id": "MapViewerMapPlayer",
     "movementMode": "constrained"
    }
   }
  ],
  "id": "playList_33057CAF_24BD_9074_41BA_3396BA6D22DC"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_camera"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345EFD8F_20DF_6B94_41B7_4853257F85EE",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345ECD8F_20DF_6B94_41AE_2D20B974323E",
  "duration": 1000
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -133.65,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_30EECEA3_24BD_906C_41AE_3A400E486FA8"
 },
 "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345E8D8F_20DF_6B94_419E_3AE578883B9D",
  "duration": 1000
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_32CC759C_24AE_9054_419F_511B2D533327",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3638CA38_249B_905C_41B3_EA26EB9333F0_0_0.jpg",
    "width": 1500,
    "height": 851
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3638CA38_249B_905C_41B3_EA26EB9333F0_0_1.jpg",
    "width": 1024,
    "height": 580
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3638CA38_249B_905C_41B3_EA26EB9333F0_0_2.jpg",
    "width": 512,
    "height": 290
   }
  ]
 },
 "this.popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0",
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_33358CCE_24BD_9034_41A5_3FFBBCB1C96C, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F4D97_20DF_6BB3_41BF_89E603E3F0DA, 'hideEffect', false)",
    "media": "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F5D99_20DF_6BBF_41BD_058622C73035, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_33358CCE_24BD_9034_41A5_3FFBBCB1C96C",
    "camera": {
     "initialSequence": {
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       }
      ],
      "restartMovementOnUserInteraction": false
     },
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_camera"
    }
   }
  ],
  "id": "playList_33F55C90_24BD_902C_418A_14893D3C0F1A"
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_30960356_24BE_70D4_416D_2752A5CB69F4",
  "duration": 1000
 },
 {
  "automaticRotationSpeed": 10,
  "initialPosition": {
   "class": "RotationalCameraPosition",
   "yaw": 99.21,
   "pitch": 0,
   "hfov": 120
  },
  "class": "RotationalCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_3010EEA3_24BD_906C_41C1_598B49BFFF19",
  "manualRotationSpeed": 1800,
  "manualZoomSpeed": 1
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -176.54,
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_30627F20_24BD_906C_41AD_74A603BA917C"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_camera"
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_30961366_24BE_70F4_41B0_87C781E05937",
  "duration": 1000
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_32BB558C_24AE_9034_41A0_905F3B8026D3",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36E9C513_249E_702C_41C0_2CA0C18AAE54_0_0.jpg",
    "width": 1500,
    "height": 1000
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36E9C513_249E_702C_41C0_2CA0C18AAE54_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36E9C513_249E_702C_41C0_2CA0C18AAE54_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ]
 },
 {
  "rotationY": 0,
  "hideDuration": 500,
  "rotationX": 0,
  "showDuration": 500,
  "rotationZ": 0,
  "class": "PopupPanoramaOverlay",
  "popupDistance": 100,
  "popupMaxWidth": "95%",
  "hfov": 8.24,
  "hideEasing": "cubic_out",
  "popupMaxHeight": "95%",
  "id": "popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6_0_0.jpg",
     "width": 787,
     "height": 552
    },
    {
     "class": "ImageResourceLevel",
     "url": "media/popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6_0_1.jpg",
     "width": 512,
     "height": 359
    }
   ]
  },
  "pitch": 0.27,
  "showEasing": "cubic_in",
  "yaw": 43.77
 },
 "this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_3097B366_24BE_70F4_41B3_CAED69F992B5",
  "duration": 1000
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -32.15,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_303BEEE1_24BD_91EF_41A4_8CAAB889ED8D"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E7D8F_20DF_6B94_41B1_383A596C4C67, 'hideEffect', false)",
    "media": "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E0D8F_20DF_6B94_41AE_F32FBDDF5924, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_camera"
   }
  ],
  "id": "playList_33FF5C90_24BD_902C_41AA_42F2E9853222"
 },
 "this.popup_3638CA38_249B_905C_41B3_EA26EB9333F0",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345E4D8F_20DF_6B94_41B8_3FE607FF9006",
  "duration": 1000
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_0AAA2971_2068_943D_41B4_10DFF5B38D1B",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A3C822F_20F8_9425_41B2_B5F3B1085960_0_0.jpg",
    "width": 2000,
    "height": 1333
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A3C822F_20F8_9425_41B2_B5F3B1085960_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A3C822F_20F8_9425_41B2_B5F3B1085960_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ]
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 84.54,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_308AEE16_24BD_9054_41BF_6BC5233809E0"
 },
 "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345F4D97_20DF_6BB3_41BF_89E603E3F0DA",
  "duration": 1000
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_32CD359C_24AE_9054_41BC_CF812CF11760",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_369EF53B_249A_B05C_41BC_AE1E970C16EA_0_0.jpg",
    "width": 1500,
    "height": 1000
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_369EF53B_249A_B05C_41BC_AE1E970C16EA_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_369EF53B_249A_B05C_41BC_AE1E970C16EA_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ]
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E3598214_ED68_4574_41E8_2F261C5C21DC",
  "duration": 1000
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 22.27,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_31BD6F4F_24BD_9034_419B_54A56E8D5EC9"
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_EF6CE355_F62E_F8F5_41E6_CBD8B4202E02",
  "duration": 1000
 },
 "this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 23.3,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_301B1EB2_24BD_906D_41BF_39FB9936F1E7"
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_32C5559C_24AE_9054_4190_2CEBE3C7DFAC",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_348D9211_246E_902F_4199_6E447B6CCD8A_0_0.jpg",
    "width": 1168,
    "height": 721
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_348D9211_246E_902F_4199_6E447B6CCD8A_0_1.jpg",
    "width": 1024,
    "height": 632
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_348D9211_246E_902F_4199_6E447B6CCD8A_0_2.jpg",
    "width": 512,
    "height": 316
   }
  ]
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_3096E356_24BE_70D4_41C0_F8EF3AAFD75C",
  "duration": 1000
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 43.93,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_325B5181_24BE_702F_41BE_CF508624F36A"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E359B21B_ED68_4573_41E3_2134D2902989",
  "duration": 1000
 },
 "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -91.45,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_319B5F3F_24BD_9054_41BF_0F3D062BE4EE"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 148.88,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_30B79E16_24BD_9054_41C1_3E630E103634"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": {
     "initialZoomFactor": 1,
     "class": "Map",
     "thumbnailUrl": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_t.png",
     "id": "map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
     "overlays": [
      {
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "map": {
        "width": 20,
        "x": 16.55,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_0_map.gif",
           "width": 9,
           "height": 9
          }
         ]
        },
        "y": 149.55,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "image": {
        "x": 16.55,
        "y": 149.55,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_0.png",
           "width": 19,
           "height": 19
          }
         ]
        },
        "height": 20
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_FCFECF03_DD1A_A3DC_41C3_A9E15DF295E9",
       "rollOverDisplay": true,
       "data": {
        "label": "Image"
       }
      },
      {
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "map": {
        "width": 20,
        "x": 83.5,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_1_map.gif",
           "width": 9,
           "height": 9
          }
         ]
        },
        "y": 151.55,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "image": {
        "x": 83.5,
        "y": 151.55,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_1.png",
           "width": 19,
           "height": 19
          }
         ]
        },
        "height": 20
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_FFCF2D2D_DD19_A627_41B8_CFCAE1C65CD2",
       "rollOverDisplay": true,
       "data": {
        "label": "Image"
       }
      },
      {
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "map": {
        "width": 20,
        "x": 24.05,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_2_map.gif",
           "width": 9,
           "height": 9
          }
         ]
        },
        "y": 6.6,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "image": {
        "x": 24.05,
        "y": 6.6,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_2.png",
           "width": 19,
           "height": 19
          }
         ]
        },
        "height": 20
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_FEA879B1_DD16_6E3C_41E7_2FF39A318D51",
       "rollOverDisplay": true,
       "data": {
        "label": "Image"
       }
      },
      {
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "map": {
        "width": 20,
        "x": 138,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_3_map.gif",
           "width": 9,
           "height": 9
          }
         ]
        },
        "y": 5.6,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "image": {
        "x": 138,
        "y": 5.6,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_3.png",
           "width": 19,
           "height": 19
          }
         ]
        },
        "height": 20
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_FF9139DD_DD16_AE64_41E7_9B2CF203BB6B",
       "rollOverDisplay": true,
       "data": {
        "label": "Image"
       }
      },
      {
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "map": {
        "width": 20,
        "x": 141.5,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_4_map.gif",
           "width": 9,
           "height": 9
          }
         ]
        },
        "y": 96.5,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "image": {
        "x": 141.5,
        "y": 96.5,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_4.png",
           "width": 19,
           "height": 19
          }
         ]
        },
        "height": 20
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_FEFCC206_DD17_9DE5_41C8_3ECC72F63227",
       "rollOverDisplay": true,
       "data": {
        "label": "Image"
       }
      },
      {
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "map": {
        "width": 20,
        "x": 271,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_5_map.gif",
           "width": 9,
           "height": 9
          }
         ]
        },
        "y": 12.6,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "image": {
        "x": 271,
        "y": 12.6,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_5.png",
           "width": 19,
           "height": 19
          }
         ]
        },
        "height": 20
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_FF91DE69_DD17_A22C_41DE_D1342F576EA9",
       "rollOverDisplay": true,
       "data": {
        "label": "Image"
       }
      },
      {
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "map": {
        "width": 20,
        "x": 206.1,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_6_map.gif",
           "width": 9,
           "height": 9
          }
         ]
        },
        "y": 162,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "image": {
        "x": 206.1,
        "y": 162,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_6.png",
           "width": 19,
           "height": 19
          }
         ]
        },
        "height": 20
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_FFB50497_DD16_A6E4_41E4_5BEA266BE86F",
       "rollOverDisplay": true,
       "data": {
        "label": "Image"
       }
      },
      {
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "map": {
        "width": 20,
        "x": 141.5,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_7_map.gif",
           "width": 9,
           "height": 9
          }
         ]
        },
        "y": 81.55,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "image": {
        "x": 141.5,
        "y": 81.55,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_7.png",
           "width": 19,
           "height": 19
          }
         ]
        },
        "height": 20
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_FE5AF794_DD09_A2E4_41D0_61777F7E15D3",
       "rollOverDisplay": true,
       "data": {
        "label": "Image"
       }
      },
      {
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "map": {
        "width": 20.27,
        "x": 37.65,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_8_map.gif",
           "width": 10,
           "height": 10
          }
         ]
        },
        "y": 72.45,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20.27,
        "offsetX": 0
       },
       "image": {
        "x": 37.65,
        "y": 72.45,
        "class": "HotspotMapOverlayImage",
        "width": 20.27,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_8.png",
           "width": 20,
           "height": 20
          }
         ]
        },
        "height": 20.27
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_01B54DAD_1A41_CF78_41A6_909B29F94B5F",
       "rollOverDisplay": true,
       "data": {
        "label": "Image"
       }
      }
     ],
     "label": "Centro Corporativo",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17.png",
        "width": 300,
        "height": 209
       }
      ]
     },
     "width": 300,
     "maximumZoomFactor": 1.2,
     "fieldOfViewOverlayOutsideOpacity": 0,
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayInsideColor": "#FFFFFF",
     "fieldOfViewOverlayOutsideColor": "#000000",
     "fieldOfViewOverlayRadiusScale": 0.19,
     "minimumZoomFactor": 0.5,
     "height": 209
    },
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer"
   }
  ],
  "id": "playList_33049CAF_24BD_9074_41C0_7FB74A426E62"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345EBD8F_20DF_6B94_41A4_072F6F80B3A4",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D3728F7A_DF8C_960C_417C_830810DD2653",
  "duration": 1000
 },
 "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_camera",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_34597D8F_20DF_6B94_41AA_44DC8A057CBB",
  "duration": 1000
 },
 "this.popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E",
 "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345E6D8F_20DF_6B94_41A3_46A48BBB0ACC",
  "duration": 1000
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 101.73,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_326E41C0_24BE_702C_41B5_07EBECC4353C"
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_0B500FD7_1A54_37AE_41A9_19AE8C776076",
  "duration": 1000
 },
 {
  "automaticRotationSpeed": 10,
  "initialPosition": {
   "class": "RotationalCameraPosition",
   "yaw": 0,
   "pitch": 0,
   "hfov": 120
  },
  "class": "RotationalCamera",
  "automaticZoomSpeed": 10,
  "id": "media_0BA5C089_2079_B4ED_41A8_D2AC2349E041_camera",
  "manualRotationSpeed": 1800,
  "manualZoomSpeed": 1
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345CDD8F_20DF_6B94_41B6_C00B98F530E1",
  "duration": 1000
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -107.93,
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_30977DC8_24BD_903C_41AC_706CC7DA127A"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.1,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_33657D0C_24BD_9035_41C0_58C30DDF780D"
 },
 "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_34592D8F_20DF_6B94_41B2_36A2D8C28548",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_3096F356_24BE_70D4_41BC_E3D099E42436",
  "duration": 1000
 },
 "this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9",
 "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345FCD97_20DF_6BB3_41B7_5533F0603364",
  "duration": 1000
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 97.66,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_32545172_24BE_70EC_41B7_D1755A2778EE"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EED8F_20DF_6B94_417E_826782EEF8F0, 'hideEffect', false)",
    "media": "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EFD8F_20DF_6B94_41B7_4853257F85EE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "initialSequence": {
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       }
      ],
      "restartMovementOnUserInteraction": false
     },
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_camera"
    }
   }
  ],
  "id": "playList_33FC1C90_24BD_902C_41BC_F46569BB0BA1"
 },
 "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_camera",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345F6D8F_20DF_6B94_410B_52B44954FB30",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F5D8F_20DF_6B94_41B1_D214F66E6293, 'hideEffect', false)",
    "media": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F6D8F_20DF_6B94_410B_52B44954FB30, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "initialSequence": {
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       }
      ],
      "restartMovementOnUserInteraction": false
     },
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_camera"
    }
   }
  ],
  "id": "playList_33E46C9F_24BD_9054_4196_4ED1780ABE00"
 },
 {
  "mapLocations": [
   {
    "map": "this.map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
    "x": 305.3,
    "angle": 93.36,
    "y": 253.1,
    "class": "PanoramaMapLocation"
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_t.jpg",
  "id": "panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
  "class": "Panorama",
  "label": "Cartago City",
  "pitch": 0,
  "hfov": 360,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_t.jpg",
    "overlays": [
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15, this.camera_D0DA93EE_DE6E_2520_41CD_8775B6E7F959)"
       }
      ],
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "hfov": 7.9,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_7_0.png",
           "width": 118,
           "height": 118
          }
         ]
        },
        "pitch": 1.37,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -144.74
       }
      ],
      "id": "overlay_E5CD8369_EF1C_25BA_41E1_3E44CA6907EB",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      }
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.showPopupPanoramaOverlay(this.popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0.09803921568627451],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#CCCCCC','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.5,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundColor':['#000000'],'iconColor':'#FFFFFF'}, null, null, null, null, null, false)"
       }
      ],
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "hfov": 8.24,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_5_0.png",
           "width": 122,
           "height": 106
          }
         ]
        },
        "pitch": 0.52,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 85.84
       }
      ],
      "id": "overlay_E5DFA8E5_EF2C_64AA_41E7_45A9551591C4",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.showPopupPanoramaOverlay(this.popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0.09803921568627451],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#CCCCCC','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.5,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundColor':['#000000'],'iconColor':'#FFFFFF'}, null, null, null, null, null, false)"
       }
      ],
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "hfov": 8.24,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_4_0.png",
           "width": 122,
           "height": 104
          }
         ]
        },
        "pitch": 0.27,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 43.77
       }
      ],
      "id": "overlay_E420ED42_EF2C_5DE9_41E2_85CF49AA9D29",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.showPopupPanoramaOverlay(this.popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0.09803921568627451],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#CCCCCC','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.5,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundColor':['#000000'],'iconColor':'#FFFFFF'}, this.ImageResource_E252A6BD_EF1D_EC9A_41D3_31F4A8966575, null, null, null, null, false)"
       }
      ],
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "hfov": 6.64,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_3_0.png",
           "width": 99,
           "height": 104
          }
         ]
        },
        "pitch": 7.67,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -73.96
       }
      ],
      "id": "overlay_E5C47084_EF2D_E36A_41D0_6FB86F1AA8C0",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     "this.popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6",
     {
      "rotationY": 0,
      "hideDuration": 500,
      "rotationX": 0,
      "showDuration": 500,
      "rotationZ": 0,
      "class": "PopupPanoramaOverlay",
      "popupDistance": 100,
      "popupMaxWidth": "95%",
      "hfov": 8.24,
      "hideEasing": "cubic_out",
      "popupMaxHeight": "95%",
      "id": "popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C_0_0.jpg",
         "width": 800,
         "height": 535
        },
        {
         "class": "ImageResourceLevel",
         "url": "media/popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C_0_1.jpg",
         "width": 512,
         "height": 342
        }
       ]
      },
      "pitch": 0.52,
      "showEasing": "cubic_in",
      "yaw": 85.84
     },
     {
      "rotationY": 0,
      "hideDuration": 500,
      "rotationX": 0,
      "showDuration": 500,
      "rotationZ": 0,
      "class": "PopupPanoramaOverlay",
      "popupDistance": 100,
      "popupMaxWidth": "95%",
      "hfov": 6.64,
      "hideEasing": "cubic_out",
      "popupMaxHeight": "95%",
      "id": "popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_1.jpg",
         "width": 1024,
         "height": 748
        }
       ]
      },
      "pitch": 7.67,
      "showEasing": "cubic_in",
      "yaw": -73.96
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -132.82,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_2_0_map.gif",
           "width": 53,
           "height": 16
          }
         ]
        },
        "pitch": 1.59,
        "hfov": 17.78
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 17.78,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_2_0.png",
           "width": 265,
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
      "rollOverDisplay": false,
      "data": {
       "label": "La Lima"
      },
      "enabledInCardboard": true
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 61,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_1_0_map.gif",
           "width": 80,
           "height": 16
          }
         ]
        },
        "pitch": 0.49,
        "hfov": 27.31
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 27.31,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_1_0.png",
           "width": 407,
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
      "rollOverDisplay": false,
      "data": {
       "label": "TEC University"
      },
      "enabledInCardboard": true
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.showPopupPanoramaOverlay(this.popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0.09803921568627451],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#CCCCCC','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.5,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundColor':['#000000'],'iconColor':'#FFFFFF'}, this.ImageResource_E253E6BD_EF1D_EC9A_41EA_C503E65D3053, null, null, null, null, false)"
       }
      ],
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "hfov": 6.66,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_0_0.png",
           "width": 99,
           "height": 99
          }
         ]
        },
        "pitch": -5.64,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -123.25
       }
      ],
      "id": "overlay_E4BB9F35_EF34_3DAA_41DC_06016B04BD96",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "rotationY": 0,
      "hideDuration": 500,
      "rotationX": 0,
      "showDuration": 500,
      "rotationZ": 0,
      "class": "PopupPanoramaOverlay",
      "popupDistance": 100,
      "popupMaxWidth": "95%",
      "hfov": 6.66,
      "hideEasing": "cubic_out",
      "popupMaxHeight": "95%",
      "id": "popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_1.jpg",
         "width": 1024,
         "height": 632
        }
       ]
      },
      "pitch": -5.64,
      "showEasing": "cubic_in",
      "yaw": -123.25
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -116.34,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_11_0_map.gif",
           "width": 24,
           "height": 16
          }
         ]
        },
        "pitch": -5.8,
        "hfov": 8.66
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.66,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_11_0.png",
           "width": 129,
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
      "rollOverDisplay": false,
      "data": {
       "label": "INA"
      },
      "enabledInCardboard": true
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 97.38,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_10_0_map.gif",
           "width": 52,
           "height": 16
          }
         ]
        },
        "pitch": 1.23,
        "hfov": 15.83
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 15.83,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_10_0.png",
           "width": 236,
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
      "rollOverDisplay": false,
      "data": {
       "label": "Basilica"
      },
      "enabledInCardboard": true
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -64.87,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_9_0_map.gif",
           "width": 39,
           "height": 16
          }
         ]
        },
        "pitch": 7.99,
        "hfov": 12.22
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.22,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_9_0.png",
           "width": 184,
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
      "rollOverDisplay": false,
      "data": {
       "label": "Irazu"
      },
      "enabledInCardboard": true
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.showPopupPanoramaOverlay(this.popup_3CC23B7F_107F_4540_4180_ABF478E71F9A, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0.09803921568627451],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#CCCCCC','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.5,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundColor':['#000000'],'iconColor':'#FFFFFF'}, this.ImageResource_20FB6245_107F_4740_41A8_9C0A46A92B4D, null, null, null, null, false)"
       }
      ],
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "hfov": 6.7,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_12_0.png",
           "width": 99,
           "height": 104
          }
         ]
        },
        "pitch": -0.52,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -105.77
       }
      ],
      "id": "overlay_39C6394A_1091_C543_41A0_4400E90D35FB",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -104.29,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_13_0_map.gif",
           "width": 63,
           "height": 16
          }
         ]
        },
        "pitch": 3.74,
        "hfov": 19.47
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 19.47,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_13_0.png",
           "width": 291,
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
      "rollOverDisplay": false,
      "data": {
       "label": "Bus Station"
      },
      "enabledInCardboard": true
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.showPopupPanoramaOverlay(this.popup_3BBE3C5B_107F_C340_4178_756995F5135C, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0.09803921568627451],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#CCCCCC','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.5,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundColor':['#000000'],'iconColor':'#FFFFFF'}, null, null, null, null, null, false)"
       }
      ],
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "hfov": 6.69,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_14_0.png",
           "width": 99,
           "height": 103
          }
         ]
        },
        "pitch": -2.91,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -99.48
       }
      ],
      "id": "overlay_3A9BE60C_1071_4EC7_41AC_F23BD1106998",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -85.73,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_15_0_map.gif",
           "width": 66,
           "height": 16
          }
         ]
        },
        "pitch": -2.84,
        "hfov": 22.05
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 22.05,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_15_0.png",
           "width": 329,
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
      "rollOverDisplay": false,
      "data": {
       "label": "Train Station"
      },
      "enabledInCardboard": true
     },
     {
      "rotationY": 0,
      "hideDuration": 500,
      "rotationX": 0,
      "showDuration": 500,
      "rotationZ": 0,
      "class": "PopupPanoramaOverlay",
      "popupDistance": 100,
      "popupMaxWidth": "95%",
      "hfov": 6.7,
      "hideEasing": "cubic_out",
      "popupMaxHeight": "95%",
      "id": "popup_3CC23B7F_107F_4540_4180_ABF478E71F9A",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_1.jpg",
         "width": 1024,
         "height": 767
        }
       ]
      },
      "pitch": -0.52,
      "showEasing": "cubic_in",
      "yaw": -105.77
     },
     {
      "rotationY": 0,
      "hideDuration": 500,
      "rotationX": 0,
      "showDuration": 500,
      "rotationZ": 0,
      "class": "PopupPanoramaOverlay",
      "popupDistance": 100,
      "popupMaxWidth": "95%",
      "hfov": 6.69,
      "hideEasing": "cubic_out",
      "popupMaxHeight": "95%",
      "id": "popup_3BBE3C5B_107F_C340_4178_756995F5135C",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/popup_3BBE3C5B_107F_C340_4178_756995F5135C_0_0.jpg",
         "width": 941,
         "height": 641
        },
        {
         "class": "ImageResourceLevel",
         "url": "media/popup_3BBE3C5B_107F_C340_4178_756995F5135C_0_1.jpg",
         "width": 511,
         "height": 348
        }
       ]
      },
      "pitch": -2.91,
      "showEasing": "cubic_in",
      "yaw": -99.48
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.showPopupPanoramaOverlay(this.popup_209897EC_11B3_4D40_41A2_837DB50E3A59, {'rollOverIconHeight':50,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverIconWidth':50,'paddingBottom':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'paddingTop':5,'backgroundColorRatios':[0.09803921568627451],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#CCCCCC','iconHeight':50,'rollOverBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'paddingRight':5,'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.5,'pressedIconColor':'#FF0000','pressedIconWidth':50,'backgroundColor':['#000000'],'iconColor':'#FFFFFF'}, null, null, null, null, null, false)"
       }
      ],
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "hfov": 6.69,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_16_0.png",
           "width": 99,
           "height": 103
          }
         ]
        },
        "pitch": 2,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -80.67
       }
      ],
      "id": "overlay_212C2018_11B1_C2CF_4164_CA1A96AC721E",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -69.51,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_17_0_map.gif",
           "width": 59,
           "height": 16
          }
         ]
        },
        "pitch": 1.99,
        "hfov": 17.1
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 17.1,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_17_0.png",
           "width": 255,
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
      "rollOverDisplay": false,
      "data": {
       "label": "COVAO"
      },
      "enabledInCardboard": true
     },
     {
      "rotationY": 0,
      "hideDuration": 500,
      "rotationX": 0,
      "showDuration": 500,
      "rotationZ": 0,
      "class": "PopupPanoramaOverlay",
      "popupDistance": 100,
      "popupMaxWidth": "95%",
      "hfov": 6.69,
      "hideEasing": "cubic_out",
      "popupMaxHeight": "95%",
      "id": "popup_209897EC_11B3_4D40_41A2_837DB50E3A59",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/popup_209897EC_11B3_4D40_41A2_837DB50E3A59_0_0.jpg",
         "width": 960,
         "height": 720
        },
        {
         "class": "ImageResourceLevel",
         "url": "media/popup_209897EC_11B3_4D40_41A2_837DB50E3A59_0_1.jpg",
         "width": 512,
         "height": 384
        }
       ]
      },
      "pitch": 2,
      "showEasing": "cubic_in",
      "yaw": -80.67
     }
    ],
    "cube": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_hq.jpeg",
       "width": 10224,
       "height": 1704,
       "tags": [
        "oculusgo",
        "ipadpro"
       ]
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B.jpeg",
       "width": 6144,
       "height": 1024
      }
     ]
    }
   }
  ],
  "hfovMin": 100,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_333F7CCE_24BD_9034_41C0_9091ABB344FE",
  "partial": false
 },
 "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345F5D99_20DF_6BBF_41BD_058622C73035",
  "duration": 1000
 },
 "this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.95,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_31160FAC_24BD_9075_41AB_D0F16D8E1446"
 },
 "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345E0D8F_20DF_6B94_41AE_F32FBDDF5924",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_33342CCE_24BD_9034_41BE_2C2536369F0C, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EBD8F_20DF_6B94_41A4_072F6F80B3A4, 'hideEffect', false)",
    "media": "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E4D8F_20DF_6B94_41B8_3FE607FF9006, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_33342CCE_24BD_9034_41BE_2C2536369F0C",
    "camera": {
     "initialSequence": {
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       }
      ],
      "restartMovementOnUserInteraction": false
     },
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_camera"
    }
   }
  ],
  "id": "playList_33CB1C90_24BD_902C_41BB_F420397B113F"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.52,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_30E57E93_24BD_9053_41A9_DEFD200B6574"
 },
 "this.popup_3509F7CC_246E_7035_41AB_BB188EF81D62",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -113.6,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_33B7F1FE_24BE_73D5_4183_978F5CE3E6FA"
 },
 "this.popup_3A305B90_20FB_94FB_4193_FEB3450979FC",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_camera"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345CED8F_20DF_6B94_41B4_61907719F453",
  "duration": 1000
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 138.07,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_30379ED2_24BD_902C_41C1_C9F3C999C6BE"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 45.04,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_30BE6E26_24BD_9074_417A_A18F1E988768"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 118.98,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_30D36E55_24BD_90D4_417F_9FD2A5ABA913"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345EAD8F_20DF_6B94_41A5_6F5908EFA5C8",
  "duration": 1000
 },
 "this.popup_34BBD83C_246A_F055_41C1_EBEF48C7F767",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_camera"
 },
 "this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345F8D97_20DF_6BB3_41B5_1A0A5D57797F",
  "duration": 1000
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.55,
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_31563FDB_24BE_6FD3_41AD_9690244A3B97"
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB_t.jpg",
  "scaleMode": "fit_inside",
  "width": 1280,
  "label": "Rotonda_LQ_short_2",
  "loop": false,
  "id": "video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB",
  "height": 720,
  "video": {
   "class": "VideoResource",
   "width": 1280,
   "mp4Url": "media/video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB.mp4",
   "height": 720
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -83.53,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_31C8FF8D_24BD_9037_418F_78D8F45139E2"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345CAD97_20DF_6BB3_41A6_3E97E260CACE",
  "duration": 1000
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_D082516E_DCEA_7368_41CB_9D0CFA830713",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_0.jpg",
    "width": 1200,
    "height": 800
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ]
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_32C8659C_24AE_9054_4187_C8E2724888E0",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36258FF0_249D_EFED_41AB_54067BE4CE8C_0_0.jpg",
    "width": 1500,
    "height": 1000
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36258FF0_249D_EFED_41AB_54067BE4CE8C_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36258FF0_249D_EFED_41AB_54067BE4CE8C_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ]
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_0AACC979_2068_942D_41A4_C9A0C0413384",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A24E5A5_20F8_BCDA_41A8_FE67D62CDC94_0_0.jpg",
    "width": 3890,
    "height": 2593
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A24E5A5_20F8_BCDA_41A8_FE67D62CDC94_0_1.jpg",
    "width": 2047,
    "height": 1365
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A24E5A5_20F8_BCDA_41A8_FE67D62CDC94_0_2.jpg",
    "width": 1023,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A24E5A5_20F8_BCDA_41A8_FE67D62CDC94_0_3.jpg",
    "width": 511,
    "height": 341
   }
  ]
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34592D8F_20DF_6B94_41B2_36A2D8C28548, 'hideEffect', false)",
    "media": "this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34593D8F_20DF_6B94_41B9_C6D005829662, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "initialSequence": {
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       }
      ],
      "restartMovementOnUserInteraction": false
     },
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": -102.2,
      "pitch": -43.45,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_camera"
    }
   }
  ],
  "id": "playList_33DACC70_24BD_90ED_41AF_424AB4CDB7B0"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -46.66,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_32A59097_24BE_7054_41C1_5C1E7DCE83FA"
 },
 "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_camera",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345EED8F_20DF_6B94_417E_826782EEF8F0",
  "duration": 1000
 },
 "this.popup_369EF53B_249A_B05C_41BC_AE1E970C16EA",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.65,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_309CFDD8_24BD_93DC_41B4_4045E5C9AF7C"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 145.78,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_30C7BE74_24BD_90D4_41AF_B337C2925543"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345FBD97_20DF_6BB3_41A7_CB088826B439",
  "duration": 1000
 },
 "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_camera",
 {
  "automaticRotationSpeed": 10,
  "initialPosition": {
   "class": "RotationalCameraPosition",
   "yaw": 0,
   "pitch": 0,
   "hfov": 120
  },
  "class": "RotationalCamera",
  "automaticZoomSpeed": 10,
  "id": "media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1_camera",
  "manualRotationSpeed": 1800,
  "manualZoomSpeed": 1
 },
 "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345E7D8F_20DF_6B94_41B1_383A596C4C67",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345E3D97_20DF_6BB3_41B7_C907450FD669",
  "duration": 1000
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -32.82,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_33FC926C_24BE_70F4_41BB_C065CB1674AA"
 },
 "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345E2D97_20DF_6BB3_41B0_9902D5E426BC",
  "duration": 1000
 },
 "this.popup_3A24E5A5_20F8_BCDA_41A8_FE67D62CDC94",
 "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 35.49,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_32AB30A6_24BE_7075_41A1_8977269972B4"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1",
  "duration": 1000
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_D09DC170_DCEA_7378_41EB_423962A6DDEA",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_0.jpg",
    "width": 1200,
    "height": 800
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ]
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 42.09,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_376CEDB8_24BD_905D_41A1_762B8AE5609B"
 },
 "this.popup_3A3C822F_20F8_9425_41B2_B5F3B1085960",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.5,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_31888F4F_24BD_9034_41B7_4FD1BF22A9C5"
 },
 "this.popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345CFD97_20DF_6BB4_41BB_97095DF13BBA",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E3586214_ED68_4574_41E5_D2720D677B2E",
  "duration": 1000
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 103.75,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_30F23E83_24BD_9033_41A3_DEED2A728778"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_330ACCBE_24BD_9055_41B9_A511067788C5, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345ECD8F_20DF_6B94_41AE_2D20B974323E, 'hideEffect', false)",
    "media": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EDD8F_20DF_6B94_41BF_D2C5F914980C, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_330ACCBE_24BD_9055_41B9_A511067788C5",
    "camera": {
     "initialSequence": {
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       }
      ],
      "restartMovementOnUserInteraction": false
     },
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_camera"
    }
   }
  ],
  "id": "playList_33C43C70_24BD_90ED_4173_90A8830AB198"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_34590D8F_20DF_6B94_41BB_A45E78753DDE",
  "duration": 1000
 },
 "this.popup_37E7B455_24BA_B0D4_41A5_EF23708D6C53",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 85.36,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_30870DF7_24BD_93D4_41B2_6B10CF3B8F3E"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345F2D8F_20DF_6B94_4160_462A4AF9B97A",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_33066CAF_24BD_9074_41C1_7022F3AF272F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06, 'hideEffect', false)",
    "media": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD84_20DF_6B95_41B9_72E06ABF1981, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_33066CAF_24BD_9074_41C1_7022F3AF272F",
    "camera": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714_camera"
   },
   {
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_33076CAF_24BD_9074_41B7_0A4765361764, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_EF6DE039_F622_38BD_41E2_3149DB234972, 'showEffect', false)",
    "media": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_30965356_24BE_70D4_41B3_A64426C08293, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_30963356_24BE_70D4_41B7_2DCAB75BD7BE, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_30962356_24BE_70D4_419D_33B83E2E58BB, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_33076CAF_24BD_9074_41B7_0A4765361764",
    "camera": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3307DCAF_24BD_9074_41C1_9EDC8F82FB0B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3307DCAF_24BD_9074_41C1_9EDC8F82FB0B",
    "camera": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_33005CBE_24BD_9055_41A8_2020A9C41EBD, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_30961356_24BE_70D4_41A5_DDB9FD0A2F8D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_33005CBE_24BD_9055_41A8_2020A9C41EBD",
    "camera": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_3300BCBE_24BD_9055_41BF_82F1B425273D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_30960356_24BE_70D4_416D_2752A5CB69F4, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3300BCBE_24BD_9055_41BF_82F1B425273D",
    "camera": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_33010CBE_24BD_9055_4195_9A7EB65C5B00, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3096F356_24BE_70D4_41BC_E3D099E42436, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_33010CBE_24BD_9055_4195_9A7EB65C5B00",
    "camera": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_3301BCBE_24BD_9055_41B1_ECCCF932BFBE, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3096E356_24BE_70D4_41C0_F8EF3AAFD75C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3301BCBE_24BD_9055_41B1_ECCCF932BFBE",
    "camera": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_33020CBE_24BD_9055_41BB_F2C74D06CCD0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_33020CBE_24BD_9055_41BB_F2C74D06CCD0",
    "camera": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_33036CBE_24BD_9055_41B4_BFBD7D07CF11, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3096D356_24BE_70D4_41AF_D78F05DB8E73, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_33036CBE_24BD_9055_41B4_BFBD7D07CF11",
    "camera": "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera"
   },
   {
    "begin": "this.registerKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515', this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515.get('visible')); this.registerKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E', this.Label_E216BE12_F622_684F_41EC_C2D2817E217E.get('visible')); this.registerKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197', this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_3303FCBE_24BD_9055_41B7_58CFCE4B347E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0B500FD7_1A54_37AE_41A9_19AE8C776076, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_2606DC67_37A3_6E7A_417B_82BAC7B62691, 'hideEffect', false); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true, -1, this.effect_EF6CE355_F62E_F8F5_41E6_CBD8B4202E02, 'showEffect', false); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false); this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_26077C68_37A3_6E75_41BD_CC48A65FF42C, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9, 'hideEffect', false)",
    "media": "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0B500FD7_1A54_37AE_41A9_19AE8C776076, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_3096C356_24BE_70D4_41B9_35EF2FA0D78E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3096B356_24BE_70D4_419C_1ED4CA1E4B7D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')){ if(this.getKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')) { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true, -1, this.effect_3096A356_24BE_70D4_41BD_D5D4C9EB59AA, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_2606DC67_37A3_6E7A_417B_82BAC7B62691, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197'); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_EF6C1355_F62E_F8F5_41C5_B9A5C5CCED3E, 'hideEffect', false); if(this.existsKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')){ if(this.getKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')) { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_30968356_24BE_70D4_41BD_DD82D6D7B8A7, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_26077C68_37A3_6E75_41BD_CC48A65FF42C, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E'); if(this.existsKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')){ if(this.getKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')) { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_30977356_24BE_70D4_41B2_AF88321AC91E, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')",
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3303FCBE_24BD_9055_41B7_58CFCE4B347E",
    "camera": {
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 53.23,
      "pitch": 1.41,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_E6145D91_EF14_5D6A_41D9_45623053016B_camera"
    }
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_330C5CBE_24BD_9055_4196_A5F00567AAAC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_30976356_24BE_70D4_41BC_A82EBE29FAD9, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_330C5CBE_24BD_9055_4196_A5F00567AAAC",
    "camera": {
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_camera"
    }
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_330C9CBE_24BD_9055_41B6_9E80A4F58C2C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_30975356_24BE_70D4_41B7_D9B45EBAF099, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_330C9CBE_24BD_9055_41B6_9E80A4F58C2C",
    "camera": {
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 105
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_camera"
    }
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_330DFCBE_24BD_9055_41BC_EAC4F84E9FEC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_30974356_24BE_70D4_41A0_7386DFD18060, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_330DFCBE_24BD_9055_41BC_EAC4F84E9FEC",
    "camera": {
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_camera"
    }
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_330E5CBE_24BD_9055_4195_2A74CDB67F8F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_30972356_24BE_70D4_41BC_AFFCD38DF1D0, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_330E5CBE_24BD_9055_4195_2A74CDB67F8F",
    "camera": {
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_camera"
    }
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_330EDCBE_24BD_9055_41C1_31E353AFE0F9, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_30971356_24BE_70D4_41BD_BC023E6B09AC, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_330EDCBE_24BD_9055_41C1_31E353AFE0F9",
    "camera": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_camera"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_330F5CBE_24BD_9055_41A1_6FE7313222C7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_330F5CBE_24BD_9055_41A1_6FE7313222C7",
    "camera": {
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_camera"
    }
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_330FBCBE_24BD_9055_41B0_C2716236168C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 0)",
    "media": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_330FBCBE_24BD_9055_41B0_C2716236168C",
    "camera": {
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0,
      "hfov": 110
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_camera"
    }
   }
  ],
  "id": "mainPlayList"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer"
   }
  ],
  "id": "playList_3305DCAF_24BD_9074_41BF_1668F8EE32C9"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -143.47,
   "pitch": -37.77,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_camera"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -6.6,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_300E1EC2_24BD_902C_4174_0C73693DE3C6"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE",
  "duration": 1000
 },
 "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
 "this.popup_209897EC_11B3_4D40_41A2_837DB50E3A59",
 {
  "class": "ImageResource",
  "id": "ImageResource_D38C2C6E_DFA1_73F8_41C3_8C1C155D72CB",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_0.jpg",
    "width": 1053,
    "height": 800
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_1.jpg",
    "width": 1024,
    "height": 777
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_2.jpg",
    "width": 512,
    "height": 388
   }
  ]
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer"
   }
  ],
  "id": "playList_33050CAF_24BD_9074_41AD_8EE24544A50B"
 },
 "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_33053CAF_24BD_9074_415E_B8D412BC184E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_33053CAF_24BD_9074_415E_B8D412BC184E, 0)",
    "class": "VideoPlayListItem",
    "player": {
     "class": "VideoPlayer",
     "viewerArea": "this.MainViewer",
     "id": "MainViewerVideoPlayer",
     "displayPlaybackBar": true
    }
   }
  ],
  "id": "playList_33053CAF_24BD_9074_415E_B8D412BC184E"
 },
 "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_camera",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_camera"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer"
   }
  ],
  "id": "playList_33042CAF_24BD_9074_41C2_1764543AAC0E"
 },
 "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345CCD8F_20DF_6B94_41BC_F061530E83AF",
  "duration": 1000
 },
 "this.Menu_333F7CCE_24BD_9034_41C0_9091ABB344FE",
 "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_camera",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 174.77,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_32933058_24BE_70DD_41AC_1E0C9AC223D6"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345F5D8F_20DF_6B94_41B1_D214F66E6293",
  "duration": 1000
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -40.57,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_3149601A_24BE_705C_41A0_F80F04D5DA39"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 149.97,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_30959356_24BE_70D4_41C1_34C5D3890198"
 },
 "this.MapViewerMapPlayer",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -7.54,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_377442F8_24BE_71DD_41BD_089977BCFB3C"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.32,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_33D9224C_24BE_7035_41A3_834A0EFBF1CE"
 },
 "this.media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345F0D8F_20DF_6B94_419D_ABD4CFF44CF3",
  "duration": 1000
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -129.9,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_33EC527B_24BE_70D3_41B6_DC512D9842C5"
 },
 "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
 "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345FED97_20DF_6BB3_41B8_E885D262EE6C",
  "duration": 1000
 },
 "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_camera",
 "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_30961356_24BE_70D4_41A5_DDB9FD0A2F8D",
  "duration": 1000
 },
 "this.popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865",
 "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_camera",
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_F083FF13_E49C_8716_41EC_3E7D67287F82",
  "duration": 1000
 },
 "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 94.17,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_30992DE7_24BD_93F3_41C0_E24A5E73A89D"
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_32B0359C_24AE_9054_41B2_D241F29053B7",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_35287B51_2496_902F_41BD_231499C70738_0_0.jpg",
    "width": 1500,
    "height": 1000
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_35287B51_2496_902F_41BD_231499C70738_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_35287B51_2496_902F_41BD_231499C70738_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ]
 },
 "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_camera",
 "this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -123.57,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_33CF525C_24BE_70D4_4198_E823E12210FD"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 125.25,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_324A3191_24BE_702C_41A6_A1F3CC8BA7FF"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
    "media": "this.media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_33FAFC9F_24BD_9054_41AC_CDA0AE38F08B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_33FAFC9F_24BD_9054_41AC_CDA0AE38F08B, 0)",
    "class": "Video360PlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1_camera"
   }
  ],
  "id": "playList_33FAFC9F_24BD_9054_41AC_CDA0AE38F08B"
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_D09C8172_DCEA_737B_41C7_76727B821C90",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_0.jpg",
    "width": 1200,
    "height": 800
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ]
 },
 "this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_camera",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 62.58,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_3121CFDB_24BE_6FD3_419C_6D7E622B8522"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345C8D97_20DF_6BB3_41AB_11DFCCAD81C0",
  "duration": 1000
 },
 "this.popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E35A8219_ED68_457C_41E5_C52BA0340B76",
  "duration": 1000
 },
 "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_30962356_24BE_70D4_419D_33B83E2E58BB",
  "duration": 1000
 },
 "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -140.57,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_30CF9E74_24BD_90D4_41AC_8FD10C5F90A4"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E359A214_ED68_4575_41DB_B895523643F9",
  "duration": 1000
 },
 "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345F7D8F_20DF_6B94_41B8_4073C3801F63",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_330B4CBE_24BD_9055_416E_D87ECBAB32C2, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E5D8F_20DF_6B94_4193_ABB7E016F309, 'hideEffect', false)",
    "media": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E6D8F_20DF_6B94_41A3_46A48BBB0ACC, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_330B4CBE_24BD_9055_416E_D87ECBAB32C2",
    "camera": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_camera"
   }
  ],
  "id": "playList_33CA6C80_24BD_902C_41B5_B431A8DE4AAB"
 },
 "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
 "this.media_0BA5C089_2079_B4ED_41A8_D2AC2349E041",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 154.47,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_31A28F5E_24BD_90D5_4188_95D42995EC4F"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -113.92,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_30BBBE35_24BD_9057_41B5_6A5657809B5C"
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_C4896E50_D4F3_6B5D_41D3_2EEBDC3443C4",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_0.jpg",
    "width": 3861,
    "height": 2574
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_1.jpg",
    "width": 2048,
    "height": 1365
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_2.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_3.jpg",
    "width": 512,
    "height": 341
   }
  ]
 },
 "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_camera",
 "this.popup_3CC23B7F_107F_4540_4180_ABF478E71F9A",
 "this.popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -29.95,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_32CFB0D5_24BE_71D7_41B3_D4F5526BE8E9"
 },
 "this.popup_36E9C513_249E_702C_41C0_2CA0C18AAE54",
 {
  "class": "ImageResource",
  "id": "ImageResource_32C8A59C_24AE_9054_41B0_230945BD42EC",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36539A9C_24AE_9054_41AC_911079BB2A7C_0_0.jpg",
    "width": 1500,
    "height": 1000
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36539A9C_24AE_9054_41AC_911079BB2A7C_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36539A9C_24AE_9054_41AC_911079BB2A7C_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ]
 },
 {
  "closeButtonPressedBackgroundOpacity": 0.3,
  "backgroundColorDirection": "vertical",
  "closeButtonPressedIconColor": "#888888",
  "paddingBottom": 0,
  "horizontalAlign": "center",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPressedBorderColor": "#000000",
  "id": "window_3751753F_24BA_B053_419D_8F7A92EE6363",
  "verticalAlign": "middle",
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titlePaddingTop": 5,
  "closeButtonBackgroundOpacity": 0.3,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "titleFontFamily": "Arial",
  "modal": true,
  "headerPaddingBottom": 5,
  "bodyPaddingTop": 0,
  "footerHeight": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerVerticalAlign": "middle",
  "veilColorRatios": [
   0,
   1
  ],
  "minHeight": 20,
  "scrollBarMargin": 2,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundOpacity": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColor": [],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "overflow": "scroll",
  "minWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedIconLineWidth": 5,
  "shadowOpacity": 0.5,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBorderColor": "#000000",
  "scrollBarWidth": 10,
  "shadowHorizontalLength": 3,
  "closeButtonIconColor": "#000000",
  "closeButtonIconHeight": 20,
  "bodyPaddingRight": 0,
  "headerBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#666666",
  "scrollBarColor": "#000000",
  "titlePaddingBottom": 5,
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "titlePaddingLeft": 5,
  "shadowBlurRadius": 6,
  "closeButtonPaddingTop": 5,
  "closeButtonBorderSize": 0,
  "contentOpaque": false,
  "paddingRight": 0,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundOpacity": 1,
  "paddingLeft": 0,
  "headerPaddingTop": 10,
  "class": "Window",
  "bodyPaddingLeft": 0,
  "closeButtonPaddingBottom": 5,
  "closeButtonPaddingRight": 5,
  "shadowSpread": 1,
  "children": [
   {
    "paddingBottom": 0,
    "toolTipPaddingTop": 4,
    "playbackBarHeight": 10,
    "id": "viewer_uid33E69C9F_24BD_9054_41AE_CC5E692EF3BB",
    "progressBarBackgroundColor": [
     "#3399FF"
    ],
    "toolTipFontWeight": "normal",
    "playbackBarHeadBorderColor": "#000000",
    "progressLeft": 0,
    "playbackBarHeadBorderRadius": 0,
    "toolTipBorderSize": 1,
    "width": "100%",
    "playbackBarHeadWidth": 6,
    "toolTipDisplayTime": 600,
    "progressBorderSize": 0,
    "toolTipPaddingLeft": 6,
    "minHeight": 50,
    "playbackBarHeadBorderSize": 0,
    "playbackBarBackgroundColorDirection": "vertical",
    "progressBorderRadius": 0,
    "progressBackgroundColorRatios": [
     0
    ],
    "progressBackgroundColor": [
     "#FFFFFF"
    ],
    "playbackBarProgressBackgroundColorRatios": [
     0
    ],
    "playbackBarProgressOpacity": 1,
    "playbackBarRight": 0,
    "minWidth": 100,
    "toolTipShadowSpread": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "playbackBarBorderSize": 0,
    "height": "100%",
    "toolTipFontSize": "1.11vh",
    "playbackBarBackgroundOpacity": 1,
    "toolTipBorderRadius": 3,
    "progressBarBorderSize": 0,
    "playbackBarLeft": 0,
    "playbackBarHeadShadowBlurRadius": 3,
    "toolTipTextShadowColor": "#000000",
    "toolTipBorderColor": "#767676",
    "toolTipShadowOpacity": 1,
    "borderRadius": 0,
    "toolTipShadowBlurRadius": 3,
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
    "progressBottom": 2,
    "playbackBarHeadHeight": 15,
    "paddingLeft": 0,
    "toolTipTextShadowBlurRadius": 3,
    "playbackBarProgressBorderSize": 0,
    "class": "ViewerArea",
    "playbackBarHeadShadowColor": "#000000",
    "progressHeight": 10,
    "playbackBarHeadShadowHorizontalLength": 0,
    "progressBackgroundColorDirection": "vertical",
    "progressRight": 0,
    "playbackBarBottom": 0,
    "toolTipFontStyle": "normal",
    "transitionDuration": 500,
    "progressBarBackgroundColorDirection": "vertical",
    "progressOpacity": 1,
    "shadow": false,
    "toolTipOpacity": 1,
    "playbackBarHeadBackgroundColorDirection": "vertical",
    "progressBorderColor": "#000000",
    "borderSize": 0,
    "progressBarBorderRadius": 0,
    "progressBarBorderColor": "#000000",
    "playbackBarProgressBackgroundColor": [
     "#3399FF"
    ],
    "playbackBarHeadShadow": true,
    "toolTipFontFamily": "Arial",
    "propagateClick": false,
    "progressBarBackgroundColorRatios": [
     0
    ],
    "toolTipShadowColor": "#333333",
    "toolTipTextShadowOpacity": 0,
    "progressBackgroundOpacity": 1,
    "playbackBarBorderRadius": 0,
    "toolTipPaddingBottom": 4,
    "toolTipShadowHorizontalLength": 0,
    "paddingTop": 0,
    "toolTipShadowVerticalLength": 0,
    "playbackBarHeadShadowVerticalLength": 0,
    "playbackBarProgressBackgroundColorDirection": "vertical",
    "playbackBarOpacity": 1,
    "progressBarOpacity": 1,
    "playbackBarHeadShadowOpacity": 0.7,
    "playbackBarBackgroundColor": [
     "#FFFFFF"
    ],
    "displayTooltipInTouchScreens": true,
    "playbackBarHeadOpacity": 1,
    "playbackBarProgressBorderColor": "#000000",
    "transitionMode": "blending",
    "toolTipFontColor": "#606060",
    "data": {
     "name": "ViewerArea25170"
    },
    "playbackBarBorderColor": "#FFFFFF",
    "toolTipPaddingRight": 6
   }
  ],
  "shadowColor": "#000000",
  "closeButtonIconLineWidth": 5,
  "shadow": true,
  "titleFontSize": "1.29vh",
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "borderSize": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonRollOverBorderSize": 0,
  "layout": "vertical",
  "bodyPaddingBottom": 0,
  "propagateClick": false,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "veilOpacity": 0.4,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerBackgroundOpacity": 0,
  "headerPaddingRight": 0,
  "paddingTop": 0,
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "closeButtonIconWidth": 20,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedBorderSize": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverIconLineWidth": 5,
  "headerPaddingLeft": 10,
  "gap": 10,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundOpacity": 0,
  "data": {
   "name": "Window24784"
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 94.62,
   "pitch": 0,
   "hfov": 105
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_339C61DF_24BE_73D4_419F_2CB6A96E56BB"
 },
 "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_camera",
 "this.popup_348D9211_246E_902F_4199_6E447B6CCD8A",
 {
  "class": "ImageResource",
  "id": "ImageResource_20FB6245_107F_4740_41A8_9C0A46A92B4D",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_0.jpg",
    "width": 1067,
    "height": 800
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_1.jpg",
    "width": 1024,
    "height": 767
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_2.jpg",
    "width": 512,
    "height": 383
   }
  ]
 },
 "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B_camera",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.45,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_313C8FCC_24BD_9034_41B4_1B0231921B39"
 },
 "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_30976356_24BE_70D4_41BC_A82EBE29FAD9",
  "duration": 1000
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -147.08,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_3C918D2C_24BD_9074_418C_69146C8DB1FA"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.59,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_3381B1EF_24BE_73F4_41A3_536D4E18B903"
 },
 "this.popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -0.95,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_327F21B0_24BE_706C_41AB_9A75A64A327A"
 },
 "this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_camera",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -72.35,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_304F9F10_24BD_902D_41B8_325AED75EA95"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_3097D366_24BE_70F4_41C0_A6253BD6AC8F",
  "duration": 1000
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_E253E6BD_EF1D_EC9A_41EA_C503E65D3053",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_0.jpg",
    "width": 2000,
    "height": 1236
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_1.jpg",
    "width": 1024,
    "height": 632
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_2.jpg",
    "width": 512,
    "height": 316
   }
  ]
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -100.57,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_31043FAC_24BD_9075_4186_243C1FE85F4B"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 67.62,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_31445FEB_24BE_6FFC_41B3_5809686207F8"
 },
 "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -110.67,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_30AB8E45_24BD_9034_41B5_40403BEF5299"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 160.67,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_32FED0E5_24BE_71F4_41C1_05B5399359FC"
 },
 "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_3096A356_24BE_70D4_41BD_D5D4C9EB59AA",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer"
   }
  ],
  "id": "playList_33055CAF_24BD_9074_41B8_F82640CDFE47"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_2606DC67_37A3_6E7A_417B_82BAC7B62691",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345FDD97_20DF_6BB3_41BB_5D593B956B06",
  "duration": 1000
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 132.38,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_3226E152_24BE_702D_41B0_2F69CA323BD3"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -5.43,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_32DA20B6_24BE_7054_41B9_3019C57D83CE"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_33360CCE_24BD_9034_41C0_26CC1041D63C, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F2D8F_20DF_6B94_4160_462A4AF9B97A, 'hideEffect', false)",
    "media": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CCD8F_20DF_6B94_41BC_F061530E83AF, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_33360CCE_24BD_9034_41C0_26CC1041D63C",
    "camera": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_camera"
   }
  ],
  "id": "playList_33F5BC90_24BD_902C_41A0_5EAB16DCBB23"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -173.56,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_37628337_24BE_7054_4180_CEEAB5956989"
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_30965356_24BE_70D4_41B3_A64426C08293",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3724E5EE_24BA_93F4_4180_BAC3BE3B6FC1VideoPlayer)",
    "media": "this.video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB",
    "start": "this.viewer_uid3724E5EE_24BA_93F4_4180_BAC3BE3B6FC1VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3758460D_24BA_9037_4172_167C9CF1D5D7, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3758460D_24BA_9037_4172_167C9CF1D5D7, 0)",
    "class": "VideoPlayListItem",
    "player": {
     "class": "VideoPlayer",
     "viewerArea": "this.viewer_uid33E69C9F_24BD_9054_41AE_CC5E692EF3BB",
     "id": "viewer_uid3724E5EE_24BA_93F4_4180_BAC3BE3B6FC1VideoPlayer",
     "displayPlaybackBar": true
    }
   }
  ],
  "id": "PlayList_3758460D_24BA_9037_4172_167C9CF1D5D7"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -138.7,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_3773D317_24BE_7053_41B2_19D3EC079C0E"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_0B7B5A27_1FEB_7426_4195_945554348391_camera"
 },
 "this.popup_3BBE3C5B_107F_C340_4178_756995F5135C",
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_30972356_24BE_70D4_41BC_AFFCD38DF1D0",
  "duration": 1000
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_32CBA59C_24AE_9054_41C1_95FEFF54BD80",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_34BBD83C_246A_F055_41C1_EBEF48C7F767_0_0.jpg",
    "width": 1500,
    "height": 937
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_34BBD83C_246A_F055_41C1_EBEF48C7F767_0_1.jpg",
    "width": 1024,
    "height": 639
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_34BBD83C_246A_F055_41C1_EBEF48C7F767_0_2.jpg",
    "width": 512,
    "height": 319
   }
  ]
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_E252A6BD_EF1D_EC9A_41D3_31F4A8966575",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_0.jpg",
    "width": 1280,
    "height": 936
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_1.jpg",
    "width": 1024,
    "height": 748
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_2.jpg",
    "width": 512,
    "height": 374
   }
  ]
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -29.87,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_3050CEF1_24BD_91EC_41B4_F636EF58D14D"
 },
 "this.popup_36539A9C_24AE_9054_41AC_911079BB2A7C",
 "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_3096F366_24BE_70F4_41B3_9CEB476E79D3",
  "duration": 1000
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 48.78,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_32826068_24BE_70FC_4186_E139640EF4AD"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
    "media": "this.media_0BA5C089_2079_B4ED_41A8_D2AC2349E041",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_33ED0C9F_24BD_9054_4197_A392A1B93D71, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_33ED0C9F_24BD_9054_4197_A392A1B93D71, 0)",
    "class": "Video360PlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.media_0BA5C089_2079_B4ED_41A8_D2AC2349E041_camera"
   }
  ],
  "id": "playList_33ED0C9F_24BD_9054_4197_A392A1B93D71"
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_30977356_24BE_70D4_41B2_AF88321AC91E",
  "duration": 1000
 },
 "this.MainViewerVideoPlayer",
 "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 33.73,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_32B03087_24BE_7033_41C0_7E84B61211EE"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F7D8F_20DF_6B94_41B8_4073C3801F63, 'hideEffect', false)",
    "media": "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F0D8F_20DF_6B94_419D_ABD4CFF44CF3, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_camera"
   }
  ],
  "id": "playList_33E4AC9F_24BD_9054_41BD_18D15CB68C15"
 },
 "this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 116.84,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_307D1F20_24BD_906C_41BC_94F8BB9384A0"
 },
 "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_camera",
 {
  "class": "ImageResource",
  "id": "ImageResource_0AA1E95D_2068_946A_419A_A79BE517FB92",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_0.jpg",
    "width": 2000,
    "height": 3000
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_1.jpg",
    "width": 1365,
    "height": 2048
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_2.jpg",
    "width": 682,
    "height": 1024
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_3.jpg",
    "width": 341,
    "height": 512
   }
  ]
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CFD97_20DF_6BB4_41BB_97095DF13BBA, 'hideEffect', false)",
    "media": "this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345C8D97_20DF_6BB3_41AB_11DFCCAD81C0, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_camera"
   }
  ],
  "id": "playList_33E23C9F_24BD_9054_41A6_802C37DBAE10"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -26.99,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_32135114_24BE_7054_41B6_1C0E0F328416"
 },
 "this.popup_36258FF0_249D_EFED_41AB_54067BE4CE8C",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 90.58,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_33A4D21D_24BE_7057_41B2_0E73E340791F"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -152.92,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_31FD7F8D_24BD_9037_41A8_4CB4A20B0B7B"
 },
 "this.popup_D60305E4_DCEA_D39F_419B_D9B149482827",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_3096C356_24BE_70D4_41B9_35EF2FA0D78E",
  "duration": 1000
 },
 {
  "automaticRotationSpeed": 10,
  "initialPosition": {
   "class": "RotationalCameraPosition",
   "yaw": -75.15,
   "pitch": 0,
   "hfov": 120
  },
  "class": "RotationalCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_30A3FE45_24BD_9034_4193_3BC4E011FD23",
  "manualRotationSpeed": 1800,
  "manualZoomSpeed": 1
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer"
   }
  ],
  "id": "playList_3304ACAF_24BD_9074_41C0_DE9A2F8E3665"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.15,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_37785327_24BE_7074_4170_CAB69E9229EB"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 163.89,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_30DA2E64_24BD_90F5_41C0_E5D284735376"
 },
 "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_camera",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.57,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_32372143_24BE_702C_41BC_E9D01200FEB9"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.24,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_3C857D3B_24BD_9053_41B3_9644DDA95821"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 15.91,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_31D0EF6E_24BD_90F4_41BE_0CE6EB8373B7"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -42.99,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_37663337_24BE_7054_4198_25919D586220"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3334DCCE_24BD_9034_41BC_636EDE736FFE, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F8D97_20DF_6BB3_41B5_1A0A5D57797F, 'hideEffect', false)",
    "media": "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345FBD97_20DF_6BB3_41A7_CB088826B439, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3334DCCE_24BD_9034_41BC_636EDE736FFE",
    "camera": "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_camera"
   }
  ],
  "id": "playList_33F47C90_24BD_902C_41B3_70299EFEE89E"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -37.5,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_376A4DC8_24BD_903C_41BF_C45031AB4841"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_EF6C1355_F62E_F8F5_41C5_B9A5C5CCED3E",
  "duration": 1000
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.87,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_31E1FF9D_24BD_9054_41B9_1A8A56BD42A7"
 },
 "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
 "this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913_camera",
 "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_camera",
 "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3336ACCE_24BD_9034_41C2_12DD00C19DE6, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E8D8F_20DF_6B94_419E_3AE578883B9D, 'hideEffect', false)",
    "media": "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD8F_20DF_6B94_41A5_6F5908EFA5C8, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3336ACCE_24BD_9034_41C2_12DD00C19DE6",
    "camera": "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391_camera"
   }
  ],
  "id": "playList_33F60C90_24BD_902C_41B0_8F04A1D97645"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 13.32,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_302E1EE1_24BD_91EF_41C0_9CB8AAE0080F"
 },
 "this.media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7_camera",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.37,
   "pitch": 0,
   "hfov": 110
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_317E8029_24BE_707F_41AE_4D753F885076"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer"
   }
  ],
  "id": "playList_33041CAF_24BD_9074_418C_BAEE601AAE95"
 },
 "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
 "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714_camera"
], "children": [
 {
  "paddingBottom": 0,
  "left": 0,
  "toolTipPaddingTop": 4,
  "playbackBarHeight": 10,
  "id": "MainViewer",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontWeight": "normal",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "playbackBarHeadBorderRadius": 0,
  "toolTipBorderSize": 1,
  "width": "100%",
  "progressLeft": 0,
  "toolTipDisplayTime": 600,
  "progressBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "minHeight": 50,
  "playbackBarHeadBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBorderRadius": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressOpacity": 1,
  "playbackBarRight": 0,
  "minWidth": 100,
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarBorderSize": 0,
  "height": "100%",
  "toolTipFontSize": 12,
  "playbackBarBackgroundOpacity": 1,
  "toolTipBorderRadius": 3,
  "progressBarBorderSize": 0,
  "playbackBarLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowColor": "#000000",
  "toolTipBorderColor": "#767676",
  "toolTipShadowOpacity": 1,
  "borderRadius": 0,
  "toolTipShadowBlurRadius": 3,
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
  "playbackBarHeadHeight": 15,
  "paddingLeft": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBorderSize": 0,
  "class": "ViewerArea",
  "playbackBarHeadShadowColor": "#000000",
  "progressHeight": 10,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "playbackBarBottom": 5,
  "toolTipFontStyle": "normal",
  "transitionDuration": 500,
  "progressBarBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "shadow": false,
  "toolTipOpacity": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "borderSize": 0,
  "progressBarBorderRadius": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipFontFamily": "Arial",
  "top": 0,
  "propagateClick": false,
  "playbackBarHeadShadow": true,
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowOpacity": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "toolTipShadowHorizontalLength": 0,
  "paddingTop": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "progressBarOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "displayTooltipInTouchScreens": true,
  "playbackBarHeadOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "transitionMode": "blending",
  "toolTipFontColor": "#606060",
  "data": {
   "name": "Main Viewer"
  },
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipPaddingRight": 6
 },
 {
  "paddingLeft": 0,
  "class": "Container",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "left": "0%",
  "id": "Container_D19AA380_DE1B_2AF3_41EA_D9B3468B686F",
  "horizontalAlign": "center",
  "verticalAlign": "middle",
  "children": [
   {
    "paddingLeft": 0,
    "backgroundColorDirection": "vertical",
    "class": "Container",
    "backgroundOpacity": 0.1,
    "paddingBottom": 0,
    "horizontalAlign": "center",
    "width": 334,
    "id": "Container_FD43509A_EC70_8CA6_41E8_9E5B7D453FAE",
    "children": [
     {
      "paddingLeft": 0,
      "toolTipTextShadowBlurRadius": 3,
      "class": "IconButton",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "horizontalAlign": "center",
      "width": 75,
      "id": "IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0",
      "toolTipFontWeight": "normal",
      "toolTipPaddingTop": 4,
      "toolTipFontStyle": "normal",
      "shadow": false,
      "toolTipOpacity": 1,
      "toolTipBorderSize": 1,
      "verticalAlign": "middle",
      "toolTipDisplayTime": 600,
      "borderSize": 0,
      "minHeight": 1,
      "toolTipPaddingLeft": 6,
      "toolTipFontFamily": "Arial",
      "toolTip": "Home",
      "propagateClick": false,
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowOpacity": 0,
      "toolTipShadowHorizontalLength": 0,
      "mode": "toggle",
      "height": 50,
      "minWidth": 1,
      "toolTipShadowSpread": 0,
      "click": "this.mainPlayList.set('selectedIndex', 0)",
      "toolTipBackgroundColor": "#F6F6F6",
      "transparencyActive": true,
      "paddingTop": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontSize": 12,
      "toolTipBorderRadius": 3,
      "toolTipShadowVerticalLength": 0,
      "pressedIconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0_pressed.png",
      "toolTipTextShadowColor": "#000000",
      "toolTipBorderColor": "#767676",
      "toolTipFontColor": "#606060",
      "toolTipShadowOpacity": 1,
      "borderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipShadowBlurRadius": 3,
      "paddingRight": 0,
      "iconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0.png",
      "cursor": "hand",
      "data": {
       "name": "Button_home"
      }
     },
     {
      "paddingLeft": 0,
      "toolTipTextShadowBlurRadius": 3,
      "class": "IconButton",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "horizontalAlign": "center",
      "width": 75,
      "id": "IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2",
      "toolTipFontWeight": "normal",
      "toolTipPaddingTop": 4,
      "toolTipFontStyle": "normal",
      "shadow": false,
      "toolTipOpacity": 1,
      "toolTipBorderSize": 1,
      "verticalAlign": "middle",
      "toolTipDisplayTime": 600,
      "borderSize": 0,
      "minHeight": 1,
      "toolTipPaddingLeft": 6,
      "toolTipFontFamily": "Arial",
      "toolTip": "Map",
      "propagateClick": false,
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowOpacity": 0,
      "toolTipShadowHorizontalLength": 0,
      "mode": "toggle",
      "height": 50,
      "minWidth": 1,
      "toolTipShadowSpread": 0,
      "click": "if(!this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, true, 0, this.effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42, 'showEffect', false) } else { this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, false, 0, this.effect_D3728F7A_DF8C_960C_417C_830810DD2653, 'hideEffect', false) }",
      "toolTipBackgroundColor": "#F6F6F6",
      "transparencyActive": true,
      "paddingTop": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontSize": 12,
      "toolTipBorderRadius": 3,
      "toolTipShadowVerticalLength": 0,
      "pressedIconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2_pressed.png",
      "toolTipTextShadowColor": "#000000",
      "toolTipBorderColor": "#767676",
      "toolTipFontColor": "#606060",
      "toolTipShadowOpacity": 1,
      "borderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipShadowBlurRadius": 3,
      "paddingRight": 0,
      "iconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2.png",
      "cursor": "hand",
      "data": {
       "name": "Button_Map"
      }
     },
     "this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667"
    ],
    "shadow": false,
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "layout": "horizontal",
    "minHeight": 77,
    "propagateClick": false,
    "scrollBarMargin": 2,
    "height": 77,
    "overflow": "scroll",
    "minWidth": 334,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "backgroundColorRatios": [
     0.8
    ],
    "backgroundColor": [
     "#000000"
    ],
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000",
    "gap": 10,
    "borderRadius": 0,
    "paddingRight": 0,
    "contentOpaque": false,
    "data": {
     "name": "Container_btones"
    }
   }
  ],
  "shadow": false,
  "width": "100%",
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "layout": "horizontal",
  "minHeight": 1,
  "propagateClick": false,
  "scrollBarMargin": 2,
  "bottom": "0%",
  "height": "18.033%",
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000",
  "gap": 10,
  "borderRadius": 0,
  "paddingRight": 0,
  "contentOpaque": false,
  "data": {
   "name": "Container_Menu"
  }
 },
 {
  "visible": false,
  "paddingLeft": 0,
  "class": "Container",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "horizontalAlign": "center",
  "id": "Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F",
  "verticalAlign": "top",
  "children": [
   {
    "paddingLeft": 0,
    "class": "Container",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "horizontalAlign": "center",
    "id": "Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5",
    "verticalAlign": "middle",
    "children": [
     "this.MapViewer",
     {
      "paddingLeft": 0,
      "maxWidth": 448,
      "class": "Image",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "horizontalAlign": "center",
      "maxHeight": 264,
      "id": "Image_E84AED1C_E346_1439_41DD_9142DAACB163",
      "verticalAlign": "middle",
      "shadow": false,
      "url": "skin/Image_E84AED1C_E346_1439_41DD_9142DAACB163.png",
      "width": "100%",
      "borderSize": 0,
      "minHeight": 1,
      "propagateClick": false,
      "height": "27.233%",
      "minWidth": 1,
      "paddingTop": 0,
      "borderRadius": 0,
      "scaleMode": "fit_inside",
      "paddingRight": 0,
      "data": {
       "name": "Simbologia"
      }
     }
    ],
    "shadow": false,
    "width": "100%",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "layout": "vertical",
    "minHeight": 1,
    "propagateClick": false,
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "height": "81.45%",
    "minWidth": 1,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "gap": 10,
    "borderRadius": 0,
    "paddingRight": 0,
    "contentOpaque": false,
    "data": {
     "name": "Container_Map"
    }
   }
  ],
  "shadow": false,
  "right": "0%",
  "width": "29.316%",
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "layout": "vertical",
  "minHeight": 1,
  "top": "2.05%",
  "propagateClick": false,
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "height": "77.049%",
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "creationPolicy": "inAdvance",
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000",
  "gap": 10,
  "borderRadius": 0,
  "paddingRight": 0,
  "contentOpaque": false,
  "data": {
   "name": "Main_Container"
  }
 },
 {
  "paddingLeft": 0,
  "class": "Container",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "left": "0%",
  "id": "Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F",
  "horizontalAlign": "left",
  "verticalAlign": "top",
  "children": [
   {
    "paddingLeft": 5,
    "backgroundColorDirection": "vertical",
    "data": {
     "name": "Location List"
    },
    "class": "DropDown",
    "backgroundOpacity": 0.72,
    "paddingBottom": 0,
    "popUpShadowColor": "#000000",
    "popUpFontColor": "#000000",
    "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F",
    "selectedPopUpBackgroundColor": "#0066FF",
    "width": "20.256%",
    "shadow": false,
    "fontFamily": "Arial",
    "popUpBackgroundOpacity": 0.72,
    "borderSize": 0,
    "fontColor": "#333333",
    "popUpShadow": false,
    "minHeight": 20,
    "selectedPopUpFontColor": "#FFFFFF",
    "popUpBackgroundColor": "#FFFFFF",
    "popUpShadowOpacity": 0,
    "propagateClick": false,
    "prompt": "Location List",
    "arrowColor": "#0066FF",
    "backgroundColor": [
     "#00CCFF",
     "#0099FF"
    ],
    "minWidth": 200,
    "popUpShadowSpread": 1,
    "popUpGap": 0,
    "paddingTop": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "popUpBorderRadius": 0,
    "fontSize": 14,
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "fontStyle": "normal",
    "popUpShadowBlurRadius": 6,
    "playList": "this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
    "gap": 0,
    "borderRadius": 4,
    "arrowBeforeLabel": false,
    "paddingRight": 5,
    "textDecoration": "none",
    "height": "27.397%",
    "fontWeight": "normal"
   }
  ],
  "shadow": false,
  "width": "100%",
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "layout": "horizontal",
  "minHeight": 1,
  "top": "0.96%",
  "propagateClick": false,
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "height": "10%",
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000",
  "gap": 10,
  "borderRadius": 0,
  "paddingRight": 0,
  "contentOpaque": false,
  "data": {
   "name": "ContainerDropDown"
  }
 },
 {
  "visible": false,
  "paddingLeft": 0,
  "textShadowBlurRadius": 3,
  "data": {
   "name": "Label_La Lima Free Zone"
  },
  "class": "Label",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "left": "0%",
  "id": "Label_E2D61738_F65E_D8BA_41DD_6888E340C197",
  "fontFamily": "Arial",
  "textShadowHorizontalLength": 1,
  "verticalAlign": "middle",
  "shadow": false,
  "fontColor": "#FFFFFF",
  "width": "100%",
  "text": "La Lima Free Zone",
  "minHeight": 1,
  "borderSize": 0,
  "horizontalAlign": "center",
  "textShadowVerticalLength": 1,
  "top": "0%",
  "propagateClick": false,
  "textShadowOpacity": 1,
  "textShadowColor": "#000000",
  "minWidth": 1,
  "paddingTop": 0,
  "fontSize": 20,
  "height": "10%",
  "fontStyle": "normal",
  "borderRadius": 0,
  "paddingRight": 0,
  "textDecoration": "none",
  "fontWeight": "normal"
 },
 {
  "visible": false,
  "paddingLeft": 0,
  "textShadowBlurRadius": 3,
  "data": {
   "name": "Label_Cartago City"
  },
  "class": "Label",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "left": "0%",
  "id": "Label_E253EC4C_F622_28DA_41DB_546DF82EE842",
  "fontFamily": "Arial",
  "textShadowHorizontalLength": 1,
  "verticalAlign": "middle",
  "shadow": false,
  "fontColor": "#FFFFFF",
  "width": "100%",
  "text": "Cartago City",
  "minHeight": 1,
  "borderSize": 0,
  "horizontalAlign": "center",
  "textShadowVerticalLength": 1,
  "top": "0%",
  "propagateClick": false,
  "textShadowOpacity": 1,
  "textShadowColor": "#000000",
  "minWidth": 1,
  "paddingTop": 0,
  "fontSize": 20,
  "height": "10%",
  "fontStyle": "normal",
  "borderRadius": 0,
  "paddingRight": 0,
  "textDecoration": "none",
  "fontWeight": "normal"
 },
 {
  "visible": false,
  "paddingLeft": 0,
  "textShadowBlurRadius": 3,
  "data": {
   "name": "Label_Corporate Center"
  },
  "class": "Label",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "left": "0%",
  "id": "Label_E216BE12_F622_684F_41EC_C2D2817E217E",
  "fontFamily": "Arial",
  "textShadowHorizontalLength": 1,
  "verticalAlign": "middle",
  "shadow": false,
  "fontColor": "#FFFFFF",
  "width": "100%",
  "text": "Corporate Center Project",
  "minHeight": 1,
  "borderSize": 0,
  "horizontalAlign": "center",
  "textShadowVerticalLength": 1,
  "top": "0%",
  "propagateClick": false,
  "textShadowOpacity": 1,
  "textShadowColor": "#000000",
  "minWidth": 1,
  "paddingTop": 0,
  "fontSize": 20,
  "height": "13.108%",
  "fontStyle": "normal",
  "borderRadius": 0,
  "paddingRight": 0,
  "textDecoration": "none",
  "fontWeight": "normal"
 },
 {
  "visible": false,
  "paddingLeft": 0,
  "textShadowBlurRadius": 3,
  "data": {
   "name": "Label_Corporate Building"
  },
  "class": "Label",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "left": "0%",
  "id": "Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515",
  "fontFamily": "Arial",
  "textShadowHorizontalLength": 1,
  "verticalAlign": "middle",
  "shadow": false,
  "fontColor": "#FFFFFF",
  "width": "100%",
  "text": "Corporate Building",
  "minHeight": 1,
  "borderSize": 0,
  "horizontalAlign": "center",
  "textShadowVerticalLength": 1,
  "top": "6%",
  "propagateClick": false,
  "textShadowOpacity": 1,
  "textShadowColor": "#000000",
  "minWidth": 1,
  "paddingTop": 0,
  "fontSize": 20,
  "height": "3.5%",
  "fontStyle": "normal",
  "borderRadius": 0,
  "paddingRight": 0,
  "textDecoration": "none",
  "fontWeight": "normal"
 },
 {
  "visible": false,
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "class": "Container",
  "backgroundOpacity": 0.3,
  "paddingBottom": 0,
  "left": "0%",
  "id": "Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E",
  "horizontalAlign": "left",
  "verticalAlign": "top",
  "children": [
   {
    "paddingLeft": 0,
    "backgroundColorDirection": "vertical",
    "class": "Container",
    "backgroundOpacity": 0.3,
    "paddingBottom": 0,
    "left": "4.32%",
    "id": "Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41",
    "horizontalAlign": "left",
    "verticalAlign": "top",
    "children": [
     {
      "paddingLeft": 0,
      "backgroundColorDirection": "vertical",
      "class": "WebFrame",
      "backgroundOpacity": 1,
      "paddingBottom": 0,
      "id": "WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21",
      "width": "99.907%",
      "shadow": false,
      "right": "0%",
      "url": "https://www.xline3d.com/360/lalimav6.html",
      "borderSize": 0,
      "minHeight": 1,
      "top": "0%",
      "propagateClick": false,
      "insetBorder": false,
      "scrollEnabled": true,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minWidth": 1,
      "paddingTop": 0,
      "backgroundColorRatios": [
       0
      ],
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "data": {
       "name": "WebFrame"
      }
     },
     {
      "paddingLeft": 0,
      "maxWidth": 394,
      "class": "Image",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "horizontalAlign": "center",
      "maxHeight": 396,
      "id": "Image_8DEE620A_9CF3_CE34_41DA_A961CBC52418",
      "verticalAlign": "middle",
      "shadow": false,
      "right": "0%",
      "url": "skin/Image_8DEE620A_9CF3_CE34_41DA_A961CBC52418.png",
      "width": "6.97%",
      "borderSize": 0,
      "minHeight": 40,
      "top": "0%",
      "propagateClick": false,
      "height": "10.979%",
      "minWidth": 40,
      "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, false, 0, null, null, false)",
      "paddingTop": 0,
      "borderRadius": 0,
      "scaleMode": "fit_inside",
      "paddingRight": 0,
      "data": {
       "name": "Button CloseFrame"
      }
     }
    ],
    "shadow": false,
    "width": "91.341%",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "minHeight": 1,
    "layout": "absolute",
    "propagateClick": false,
    "scrollBarMargin": 2,
    "bottom": "3.11%",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "minWidth": 1,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "overflow": "scroll",
    "height": "91.081%",
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000",
    "gap": 10,
    "borderRadius": 0,
    "paddingRight": 0,
    "contentOpaque": false,
    "data": {
     "name": "Web container "
    }
   }
  ],
  "shadow": false,
  "width": "100%",
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "minHeight": 1,
  "layout": "absolute",
  "top": "0%",
  "propagateClick": false,
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "backgroundColor": [
   "#000000"
  ],
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "backgroundColorRatios": [
   0
  ],
  "creationPolicy": "inAdvance",
  "height": "100%",
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000",
  "gap": 10,
  "borderRadius": 0,
  "paddingRight": 0,
  "contentOpaque": false,
  "data": {
   "name": "Main Container Web link"
  }
 },
 {
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "class": "UIComponent",
  "paddingBottom": 0,
  "left": 0,
  "id": "veilPopupPanorama",
  "backgroundOpacity": 0.55,
  "right": 0,
  "shadow": false,
  "borderSize": 0,
  "minHeight": 0,
  "top": 0,
  "propagateClick": false,
  "bottom": 0,
  "backgroundColor": [
   "#000000"
  ],
  "minWidth": 0,
  "paddingTop": 0,
  "backgroundColorRatios": [
   0
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "borderRadius": 0,
  "paddingRight": 0,
  "visible": false,
  "data": {
   "name": "UIComponent25171"
  }
 },
 {
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "class": "ZoomImage",
  "paddingBottom": 0,
  "left": 0,
  "id": "zoomImagePopupPanorama",
  "backgroundOpacity": 1,
  "right": 0,
  "shadow": false,
  "borderSize": 0,
  "minHeight": 0,
  "top": 0,
  "propagateClick": false,
  "bottom": 0,
  "backgroundColor": [],
  "minWidth": 0,
  "paddingTop": 0,
  "backgroundColorRatios": [],
  "borderRadius": 0,
  "scaleMode": "custom",
  "paddingRight": 0,
  "visible": false,
  "data": {
   "name": "ZoomImage25172"
  }
 },
 {
  "visible": false,
  "paddingLeft": 5,
  "backgroundColorDirection": "vertical",
  "data": {
   "name": "CloseButton25173"
  },
  "class": "CloseButton",
  "backgroundOpacity": 0.3,
  "paddingBottom": 5,
  "horizontalAlign": "center",
  "shadowSpread": 1,
  "id": "closeButtonPopupPanorama",
  "fontColor": "#FFFFFF",
  "pressedIconColor": "#888888",
  "right": 10,
  "verticalAlign": "middle",
  "iconBeforeLabel": true,
  "shadow": false,
  "borderSize": 0,
  "fontFamily": "Arial",
  "layout": "horizontal",
  "minHeight": 0,
  "iconHeight": 20,
  "fontWeight": "normal",
  "top": 10,
  "propagateClick": false,
  "rollOverIconColor": "#666666",
  "shadowColor": "#000000",
  "mode": "push",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "minWidth": 0,
  "borderColor": "#000000",
  "paddingTop": 5,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "fontSize": "1.29vh",
  "label": "",
  "fontStyle": "normal",
  "gap": 5,
  "borderRadius": 0,
  "iconLineWidth": 5,
  "paddingRight": 5,
  "iconColor": "#000000",
  "textDecoration": "none",
  "cursor": "hand",
  "iconWidth": 20,
  "shadowBlurRadius": 6
 }
], 
 "paddingLeft": 0,
 "class": "Player",
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_33055CAF_24BD_9074_41B8_F82640CDFE47.set('selectedIndex', 0)",
 "verticalAlign": "top",
 "shadow": false,
 "backgroundPreloadEnabled": true,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "layout": "absolute",
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "desktopMipmappingEnabled": false,
 "scripts": {
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "registerKey": function(key, value){  window[key] = value; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getKey": function(key){  return window[key]; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "existsKey": function(key){  return key in window; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "height": "100%",
 "scrollBarWidth": 10,
 "width": "100%",
 "vrPolyfillScale": 0.5,
 "mobileMipmappingEnabled": false,
 "scrollBarColor": "#000000",
 "gap": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "contentOpaque": false,
 "data": {
  "name": "Player7285"
 }
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
