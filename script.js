(function(){
    var script = { "definitions": [
 {
  "duration": 1000,
  "id": "effect_965C2E0B_8615_E144_41D9_2FAF5B68CAFF",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_89EC1A9A_8615_E147_41C6_E2614DB127B4",
  "initialPosition": {
   "hfov": 110,
   "yaw": -140.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_977CDC4E_8615_E1DF_41E0_5085F5EC919B",
  "initialPosition": {
   "hfov": 110,
   "yaw": -123.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_965C6E0B_8615_E144_41D5_EABF3A5352EA",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_345E7D8F_20DF_6B94_41B1_383A596C4C67",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "selectedBackgroundColor": "#202020",
  "rollOverFontColor": "#FFFFFF",
  "children": [
   {
    "label": "Main Entrance",
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
    "label": "Cartago City",
    "click": "this.mainPlayList.set('selectedIndex', 9)",
    "class": "MenuItem"
   },
   {
    "label": "9",
    "click": "this.mainPlayList.set('selectedIndex', 10)",
    "class": "MenuItem"
   },
   {
    "label": "14",
    "click": "this.mainPlayList.set('selectedIndex', 11)",
    "class": "MenuItem"
   },
   {
    "label": "18",
    "click": "this.mainPlayList.set('selectedIndex', 12)",
    "class": "MenuItem"
   },
   {
    "label": "20",
    "click": "this.mainPlayList.set('selectedIndex', 13)",
    "class": "MenuItem"
   },
   {
    "label": "19",
    "click": "this.mainPlayList.set('selectedIndex', 14)",
    "class": "MenuItem"
   },
   {
    "label": "parking2",
    "click": "this.mainPlayList.set('selectedIndex', 15)",
    "class": "MenuItem"
   },
   {
    "label": "asensores",
    "click": "this.mainPlayList.set('selectedIndex', 16)",
    "class": "MenuItem"
   }
  ],
  "label": "Media",
  "rollOverOpacity": 0.8,
  "id": "Menu_965238FB_8615_E2C4_41E0_B690DE45C316",
  "selectedFontColor": "#FFFFFF",
  "fontColor": "#FFFFFF",
  "opacity": 0.4,
  "class": "Menu",
  "rollOverBackgroundColor": "#000000",
  "backgroundColor": "#404040",
  "fontFamily": "Arial"
 },
 {
  "duration": 1000,
  "id": "effect_34593D8F_20DF_6B94_41B9_C6D005829662",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_96227E0B_8615_E144_41B3_AD5B03D21C2E",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "frames": [
   {
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
    "overlays": [
     {
      "maps": [],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714, this.camera_89826D77_8615_E3CC_41D7_543DD8984F16); this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
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
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "maps": [],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':50,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#FFFFFF','rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, null, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
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
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "maps": [],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':50,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#FFFFFF','rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, null, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
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
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "maps": [],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':50,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#FFFFFF','rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, this.ImageResource_E252A6BD_EF1D_EC9A_41D3_31F4A8966575, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
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
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "rotationY": 0,
      "showDuration": 500,
      "popupDistance": 100,
      "rotationZ": 0,
      "hideDuration": 500,
      "id": "popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6",
      "popupMaxHeight": "95%",
      "rotationX": 0,
      "hfov": 8.24,
      "hideEasing": "cubic_out",
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
      "popupMaxWidth": "95%",
      "yaw": 43.77,
      "class": "PopupPanoramaOverlay",
      "showEasing": "cubic_in"
     },
     {
      "rotationY": 0,
      "showDuration": 500,
      "popupDistance": 100,
      "rotationZ": 0,
      "hideDuration": 500,
      "id": "popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C",
      "popupMaxHeight": "95%",
      "rotationX": 0,
      "hfov": 8.24,
      "hideEasing": "cubic_out",
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
      "popupMaxWidth": "95%",
      "yaw": 85.84,
      "class": "PopupPanoramaOverlay",
      "showEasing": "cubic_in"
     },
     {
      "rotationY": 0,
      "showDuration": 500,
      "popupDistance": 100,
      "rotationZ": 0,
      "hideDuration": 500,
      "id": "popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865",
      "popupMaxHeight": "95%",
      "rotationX": 0,
      "hfov": 6.64,
      "hideEasing": "cubic_out",
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
      "popupMaxWidth": "95%",
      "yaw": -73.96,
      "class": "PopupPanoramaOverlay",
      "showEasing": "cubic_in"
     },
     {
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
        "hfov": 17.78,
        "yaw": -132.82,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 1.59
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_E37E9453_EF2C_E3EE_41CE_DD0115CEB1E5",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
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
        "hfov": 17.78,
        "distance": 50,
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "La Lima"
      },
      "enabledInCardboard": true
     },
     {
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
        "hfov": 27.31,
        "yaw": 61,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.49
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_E29702E5_EF2C_24AA_41DF_D1E8119A0A3F",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
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
        "hfov": 27.31,
        "distance": 50,
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "TEC University"
      },
      "enabledInCardboard": true
     },
     {
      "maps": [],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':50,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#FFFFFF','rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, this.ImageResource_E253E6BD_EF1D_EC9A_41EA_C503E65D3053, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
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
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
      "rotationY": 0,
      "showDuration": 500,
      "popupDistance": 100,
      "rotationZ": 0,
      "hideDuration": 500,
      "id": "popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43",
      "popupMaxHeight": "95%",
      "rotationX": 0,
      "hfov": 6.66,
      "hideEasing": "cubic_out",
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
      "popupMaxWidth": "95%",
      "yaw": -123.25,
      "class": "PopupPanoramaOverlay",
      "showEasing": "cubic_in"
     },
     {
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
        "hfov": 8.66,
        "yaw": -116.34,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.8
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_E63D12C8_F662_39DB_4170_7EF640601D86",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
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
        "hfov": 8.66,
        "distance": 50,
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "INA"
      },
      "enabledInCardboard": true
     },
     {
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
        "hfov": 15.83,
        "yaw": 97.38,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 1.23
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_E75D89D8_F662_2BFB_41BB_D9250A0A17F6",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
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
        "hfov": 15.83,
        "distance": 50,
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "Basilica"
      },
      "enabledInCardboard": true
     },
     {
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
        "hfov": 12.22,
        "yaw": -64.87,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 7.99
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_E6D140FE_F662_D9B7_41ED_B6DDE5F11AEE",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
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
        "hfov": 12.22,
        "distance": 50,
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "Irazu"
      },
      "enabledInCardboard": true
     },
     {
      "maps": [],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_3CC23B7F_107F_4540_4180_ABF478E71F9A, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':50,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#FFFFFF','rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, this.ImageResource_20FB6245_107F_4740_41A8_9C0A46A92B4D, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
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
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
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
        "hfov": 19.47,
        "yaw": -104.29,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 3.74
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_381D894C_1071_C540_41AF_D6F0E2E79C30",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
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
        "hfov": 19.47,
        "distance": 50,
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "Bus Station"
      },
      "enabledInCardboard": true
     },
     {
      "maps": [],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_3BBE3C5B_107F_C340_4178_756995F5135C, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':50,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#FFFFFF','rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, null, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
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
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
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
        "hfov": 22.05,
        "yaw": -85.73,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.84
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_3BFABA4C_1071_4740_4194_C4FC9991EEE4",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
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
        "hfov": 22.05,
        "distance": 50,
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "Train Station"
      },
      "enabledInCardboard": true
     },
     {
      "rotationY": 0,
      "showDuration": 500,
      "popupDistance": 100,
      "rotationZ": 0,
      "hideDuration": 500,
      "id": "popup_3CC23B7F_107F_4540_4180_ABF478E71F9A",
      "popupMaxHeight": "95%",
      "rotationX": 0,
      "hfov": 6.7,
      "hideEasing": "cubic_out",
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
      "popupMaxWidth": "95%",
      "yaw": -105.77,
      "class": "PopupPanoramaOverlay",
      "showEasing": "cubic_in"
     },
     {
      "rotationY": 0,
      "showDuration": 500,
      "popupDistance": 100,
      "rotationZ": 0,
      "hideDuration": 500,
      "id": "popup_3BBE3C5B_107F_C340_4178_756995F5135C",
      "popupMaxHeight": "95%",
      "rotationX": 0,
      "hfov": 6.69,
      "hideEasing": "cubic_out",
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
      "popupMaxWidth": "95%",
      "yaw": -99.48,
      "class": "PopupPanoramaOverlay",
      "showEasing": "cubic_in"
     },
     {
      "maps": [],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_209897EC_11B3_4D40_41A2_837DB50E3A59, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':50,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#FFFFFF','rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, null, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
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
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     },
     {
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
        "hfov": 17.1,
        "yaw": -69.51,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 1.99
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_21F8CB1B_11B7_C6C1_41A4_790E87B46214",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "items": [
       {
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
        "hfov": 17.1,
        "distance": 50,
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "COVAO"
      },
      "enabledInCardboard": true
     },
     {
      "rotationY": 0,
      "showDuration": 500,
      "popupDistance": 100,
      "rotationZ": 0,
      "hideDuration": 500,
      "id": "popup_209897EC_11B3_4D40_41A2_837DB50E3A59",
      "popupMaxHeight": "95%",
      "rotationX": 0,
      "hfov": 6.69,
      "hideEasing": "cubic_out",
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
      "popupMaxWidth": "95%",
      "yaw": -80.67,
      "class": "PopupPanoramaOverlay",
      "showEasing": "cubic_in"
     }
    ],
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_t.jpg"
   }
  ],
  "label": "Cartago City",
  "id": "panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
  "cardboardMenu": "this.Menu_965238FB_8615_E2C4_41E0_B690DE45C316",
  "pitch": 0,
  "hfovMax": 120,
  "mapLocations": [
   {
    "map": {
     "minimumZoomFactor": 0.5,
     "fieldOfViewOverlayInsideColor": "#000000",
     "class": "Map",
     "label": "Costa-Rica-Map",
     "fieldOfViewOverlayRadiusScale": 0.33,
     "id": "map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
     "maximumZoomFactor": 1.2,
     "width": 500,
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
     "thumbnailUrl": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_t.png",
     "scaleMode": "fit_inside",
     "overlays": [
      {
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
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 9)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_E2A9E771_EFFC_6DAB_41ED_732E2F091F5A",
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 280.3,
        "height": 50,
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
        "class": "HotspotMapOverlayImage"
       }
      }
     ],
     "fieldOfViewOverlayOutsideOpacity": 0,
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "height": 563
    },
    "x": 305.3,
    "angle": 93.36,
    "class": "PanoramaMapLocation",
    "y": 253.1
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_t.jpg",
  "hfovMin": 100,
  "hfov": 360,
  "class": "Panorama",
  "adjacentPanoramas": [
   {
    "backwardYaw": 159.92,
    "yaw": -144.74,
    "distance": 1,
    "class": "AdjacentPanorama",
    "panorama": {
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_hq.jpeg",
          "width": 6434,
          "tags": [
           "oculusgo",
           "ipadpro"
          ],
          "class": "ImageResourceLevel",
          "height": 3217
         },
         {
          "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714.jpeg",
          "width": 4002,
          "class": "ImageResourceLevel",
          "height": 2001
         }
        ]
       },
       "overlays": [
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_0_0_0_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "hfov": 5.9,
           "yaw": -19.33,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -5.22
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_894B49E6_8615_E2CC_41DF_0300B0396E24); this.setMediaBehaviour(this.playList_961778A1_8615_E14B_41CB_34C40A62053F, 0, this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.9,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_0_0.png",
              "width": 105,
              "class": "ImageResourceLevel",
              "height": 105
             }
            ]
           },
           "pitch": -5.22,
           "yaw": -19.33
          }
         ],
         "id": "overlay_17C11FBD_1A28_9742_41B9_9B996ADB4A90",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_1_0_0_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "hfov": 5.9,
           "yaw": -68.51,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -4.39
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.showPopupPanoramaOverlay(this.popup_3509F7CC_246E_7035_41AB_BB188EF81D62, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#000000','rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_3294856D_24AE_90F4_418D_8D9776AE9FF3, null, null, null, null, false)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.9,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_1_0.png",
              "width": 105,
              "class": "ImageResourceLevel",
              "height": 105
             }
            ]
           },
           "pitch": -4.39,
           "yaw": -68.51
          }
         ],
         "id": "overlay_3A5D32D6_20F9_F467_41BA_B0E40E6ED2F2",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_2_0_0_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "hfov": 4.85,
           "yaw": -54.75,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 34.99
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 8, this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 4.85,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_2_0.png",
              "width": 105,
              "class": "ImageResourceLevel",
              "height": 105
             }
            ]
           },
           "pitch": 34.99,
           "yaw": -54.75
          }
         ],
         "id": "overlay_3ACFD642_2028_9C5E_41A8_AC5EE8DD4659",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "rotationY": 0,
         "showDuration": 500,
         "popupDistance": 100,
         "rotationZ": 0,
         "hideDuration": 500,
         "id": "popup_3509F7CC_246E_7035_41AB_BB188EF81D62",
         "popupMaxHeight": "95%",
         "rotationX": 0,
         "hfov": 5.9,
         "hideEasing": "cubic_out",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "url": "media/popup_3509F7CC_246E_7035_41AB_BB188EF81D62_0_1.jpg",
            "width": 1024,
            "class": "ImageResourceLevel",
            "height": 682
           }
          ]
         },
         "pitch": -4.39,
         "popupMaxWidth": "95%",
         "yaw": -68.51,
         "class": "PopupPanoramaOverlay",
         "showEasing": "cubic_in"
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_3_0_0_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "hfov": 6.84,
           "yaw": 159.92,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 22.39
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B, this.camera_895589D9_8615_E2C4_41D5_6EF263F1A010); this.mainPlayList.set('selectedIndex', 9)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.84,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_3_0.png",
              "width": 132,
              "class": "ImageResourceLevel",
              "height": 132
             }
            ]
           },
           "pitch": 22.39,
           "yaw": 159.92
          }
         ],
         "id": "overlay_8F204BB5_812C_2B1B_41D4_BB2B9CE81079",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_t.jpg"
      }
     ],
     "label": "Main Entrance",
     "id": "panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
     "cardboardMenu": "this.Menu_965238FB_8615_E2C4_41E0_B690DE45C316",
     "pitch": 0,
     "hfovMax": 130,
     "mapLocations": [
      {
       "map": {
        "minimumZoomFactor": 0.5,
        "fieldOfViewOverlayInsideColor": "#000000",
        "class": "Map",
        "label": "Zona Franca",
        "fieldOfViewOverlayRadiusScale": 0.24,
        "id": "map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
        "maximumZoomFactor": 1.2,
        "width": 500,
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
        "thumbnailUrl": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_t.png",
        "scaleMode": "fit_inside",
        "overlays": [
         {
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
          "areas": [
           {
            "click": "this.mainPlayList.set('selectedIndex', 0)",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "id": "overlay_C85F514D_DD1A_7E64_41E9_30CB45494AAF",
          "data": {
           "label": "Entrada"
          },
          "image": {
           "x": 241.15,
           "height": 80,
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
           "class": "HotspotMapOverlayImage"
          }
         },
         {
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
          "areas": [
           {
            "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_960A18B5_8615_E14C_41AD_98470B3DFDD7.set('selectedIndex', -1); }, this); this.playList_960A18B5_8615_E14C_41AD_98470B3DFDD7.set('selectedIndex', 0)",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "id": "overlay_CA4EA4DE_DD1B_A664_41E0_AE0B0C78521C",
          "data": {
           "label": "Rotonda"
          },
          "image": {
           "x": 262.7,
           "height": 40,
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
           "class": "HotspotMapOverlayImage"
          }
         },
         {
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
          "areas": [
           {
            "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_961498A6_8615_E14C_41D3_04B28978C107.set('selectedIndex', -1); }, this); this.playList_961498A6_8615_E14C_41D3_04B28978C107.set('selectedIndex', 0)",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "id": "overlay_CB611BF8_DD1A_A22C_41D9_CBADF82A7516",
          "data": {
           "label": "CC"
          },
          "image": {
           "x": 286.9,
           "height": 20,
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
           "class": "HotspotMapOverlayImage"
          }
         },
         {
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
          "areas": [
           {
            "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_960A98B5_8615_E14C_41CE_4E901B396B8A.set('selectedIndex', -1); }, this); this.playList_960A98B5_8615_E14C_41CE_4E901B396B8A.set('selectedIndex', 0)",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "id": "overlay_CB150A1A_DD16_ADEC_41E0_7B7C63D3E43F",
          "data": {
           "label": "Esquina Izquierda"
          },
          "image": {
           "x": 69.75,
           "height": 40,
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
           "class": "HotspotMapOverlayImage"
          }
         },
         {
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
          "areas": [
           {
            "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_960AF8B5_8615_E14C_41C2_2F112648E3E1.set('selectedIndex', -1); }, this); this.playList_960AF8B5_8615_E14C_41C2_2F112648E3E1.set('selectedIndex', 0)",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "id": "overlay_C5D00BE4_DD09_E224_4193_1E7B3F21AC96",
          "data": {
           "label": "Izquierda 3"
          },
          "image": {
           "x": 76.9,
           "height": 40,
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
           "class": "HotspotMapOverlayImage"
          }
         },
         {
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
          "areas": [
           {
            "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_960938B5_8615_E14C_41DA_25272CBC2E58.set('selectedIndex', -1); }, this); this.playList_960938B5_8615_E14C_41DA_25272CBC2E58.set('selectedIndex', 0)",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "id": "overlay_CAE100A4_DD0B_BE24_41EB_507D59E649BA",
          "data": {
           "label": "Edwards-Hareus"
          },
          "image": {
           "x": 72.45,
           "height": 20,
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
           "class": "HotspotMapOverlayImage"
          }
         },
         {
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
          "id": "overlay_CB9F085C_DD0A_AE64_41AF_81B501144D5C",
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "data": {
           "label": "Esquina Atras"
          },
          "image": {
           "x": 58.4,
           "height": 40,
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
           "class": "HotspotMapOverlayImage"
          }
         },
         {
          "map": {
           "width": 20,
           "x": 178.3,
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
           "y": 127.95
          },
          "rollOverDisplay": true,
          "areas": [
           {
            "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_960998B5_8615_E14C_41DF_6388137003A2.set('selectedIndex', -1); }, this); this.playList_960998B5_8615_E14C_41DF_6388137003A2.set('selectedIndex', 0)",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "id": "overlay_CABD30AB_DD0E_9E23_41E5_2606484DA696",
          "data": {
           "label": "Atras1"
          },
          "image": {
           "x": 178.3,
           "height": 20,
           "y": 127.95,
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
           "class": "HotspotMapOverlayImage"
          }
         },
         {
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
          "areas": [
           {
            "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_9609F8B5_8615_E14C_41E0_619014D78E72.set('selectedIndex', -1); }, this); this.playList_9609F8B5_8615_E14C_41E0_619014D78E72.set('selectedIndex', 0)",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "id": "overlay_C53D65EB_DD09_A62C_41B4_A4FE1383C9E0",
          "data": {
           "label": "Plantas de tratamiento"
          },
          "image": {
           "x": 283.95,
           "height": 20,
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
           "class": "HotspotMapOverlayImage"
          }
         },
         {
          "map": {
           "width": 20,
           "x": 347.9,
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
           "y": 254.95
          },
          "rollOverDisplay": true,
          "areas": [
           {
            "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_960858B5_8615_E14C_41DB_C6A3A01DD970.set('selectedIndex', -1); }, this); this.playList_960858B5_8615_E14C_41DB_C6A3A01DD970.set('selectedIndex', 0)",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "id": "overlay_CA1A2975_DD0B_AE24_41D6_FDACEA0678CB",
          "data": {
           "label": "Derecha 1"
          },
          "image": {
           "x": 347.9,
           "height": 20,
           "y": 254.95,
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
           "class": "HotspotMapOverlayImage"
          }
         },
         {
          "map": {
           "width": 40,
           "x": 263,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_14_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "offsetY": 0,
           "height": 40,
           "y": 121
          },
          "rollOverDisplay": false,
          "areas": [
           {
            "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_960888B5_8615_E14C_41D7_64C1B6BB69BC.set('selectedIndex', -1); }, this); this.playList_960888B5_8615_E14C_41D7_64C1B6BB69BC.set('selectedIndex', 0)",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000"
           }
          ],
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "id": "overlay_31036381_2420_B4E9_41BB_D2ED760E3DE7",
          "data": {
           "label": "Image"
          },
          "image": {
           "x": 263,
           "height": 40,
           "y": 121,
           "width": 40,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_14.png",
              "width": 40,
              "class": "ImageResourceLevel",
              "height": 40
             }
            ]
           },
           "class": "HotspotMapOverlayImage"
          }
         }
        ],
        "fieldOfViewOverlayOutsideOpacity": 0,
        "initialZoomFactor": 1,
        "fieldOfViewOverlayInsideOpacity": 0.31,
        "fieldOfViewOverlayOutsideColor": "#000000",
        "height": 485
       },
       "x": 281.15,
       "angle": 0,
       "class": "PanoramaMapLocation",
       "y": 422.75
      }
     ],
     "vfov": 180,
     "thumbnailUrl": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_t.jpg",
     "hfovMin": 100,
     "hfov": 360,
     "class": "Panorama",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_hq.jpeg",
             "width": 6434,
             "tags": [
              "oculusgo",
              "ipadpro"
             ],
             "class": "ImageResourceLevel",
             "height": 3217
            },
            {
             "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8.jpeg",
             "width": 4002,
             "class": "ImageResourceLevel",
             "height": 2001
            }
           ]
          },
          "overlays": [
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_0_0_0_map.gif",
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "height": 16
                }
               ]
              },
              "hfov": 5.85,
              "yaw": 154.31,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 8.98
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90, this.camera_89620D50_8615_E3C3_41D8_E855B61C1702); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 10, this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.85,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_0_0.png",
                 "width": 105,
                 "class": "ImageResourceLevel",
                 "height": 105
                }
               ]
              },
              "pitch": 8.98,
              "yaw": 154.31
             }
            ],
            "id": "overlay_8C913D20_820E_09EE_41C0_C2A48E7AC870",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_1_0_0_map.gif",
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "height": 16
                }
               ]
              },
              "hfov": 5.89,
              "yaw": -104.82,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 5.81
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94, this.camera_896EFD45_8615_E3CC_41C4_815EA0D88A50); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.89,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_1_0.png",
                 "width": 105,
                 "class": "ImageResourceLevel",
                 "height": 105
                }
               ]
              },
              "pitch": 5.81,
              "yaw": -104.82
             }
            ],
            "id": "overlay_8C917D20_820E_09EE_41C3_5AECB06FB2EA",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_2_0_0_map.gif",
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "height": 16
                }
               ]
              },
              "hfov": 5.89,
              "yaw": -157.61,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 5.93
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F, this.camera_8998BD5A_8615_E3C4_41CC_8DE2AFC8621F); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 11, this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.89,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_2_0.png",
                 "width": 105,
                 "class": "ImageResourceLevel",
                 "height": 105
                }
               ]
              },
              "pitch": 5.93,
              "yaw": -157.61
             }
            ],
            "id": "overlay_8C908D20_820E_09EE_41B5_1BB84CF0B784",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_3_0_0_map.gif",
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "height": 16
                }
               ]
              },
              "hfov": 8.47,
              "yaw": -22.77,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -73.38
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.47,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_3_0.png",
                 "width": 529,
                 "class": "ImageResourceLevel",
                 "height": 529
                }
               ]
              },
              "pitch": -73.38,
              "yaw": -22.77
             }
            ],
            "id": "overlay_8C90BD20_820E_09EE_41A7_39485D48F171",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_5_0_0_map.gif",
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "height": 16
                }
               ]
              },
              "hfov": 5.42,
              "yaw": -45.25,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -23.82
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.showPopupPanoramaOverlay(this.popup_34BBD83C_246A_F055_41C1_EBEF48C7F767, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#000000','rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_32CBA59C_24AE_9054_41C1_95FEFF54BD80, null, null, null, null, false)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.42,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_5_0.png",
                 "width": 105,
                 "class": "ImageResourceLevel",
                 "height": 105
                }
               ]
              },
              "pitch": -23.82,
              "yaw": -45.25
             }
            ],
            "id": "overlay_8C90ED20_820E_09EE_41BB_BDC80546ABA8",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "rotationY": 0,
            "showDuration": 500,
            "popupDistance": 100,
            "rotationZ": 0,
            "hideDuration": 500,
            "id": "popup_34BBD83C_246A_F055_41C1_EBEF48C7F767",
            "popupMaxHeight": "95%",
            "rotationX": 0,
            "hfov": 5.42,
            "hideEasing": "cubic_out",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "url": "media/popup_34BBD83C_246A_F055_41C1_EBEF48C7F767_0_1.jpg",
               "width": 1024,
               "class": "ImageResourceLevel",
               "height": 639
              }
             ]
            },
            "pitch": -23.82,
            "popupMaxWidth": "95%",
            "yaw": -45.25,
            "class": "PopupPanoramaOverlay",
            "showEasing": "cubic_in"
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_6_0_0_map.gif",
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "height": 16
                }
               ]
              },
              "hfov": 4.86,
              "yaw": -49.24,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -34.78
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 4.86,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_6_0.png",
                 "width": 105,
                 "class": "ImageResourceLevel",
                 "height": 105
                }
               ]
              },
              "pitch": -34.78,
              "yaw": -49.24
             }
            ],
            "id": "overlay_88BDB18A_861C_2344_41C1_AA695961FD57",
            "data": {
             "label": "Image"
            }
           }
          ],
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_t.jpg"
         }
        ],
        "label": "IMG_20180114_162347_00_013-edit",
        "id": "panorama_8C911D20_820E_09EE_41C0_C274C66438F8",
        "pitch": 0,
        "hfovMax": 130,
        "vfov": 180,
        "thumbnailUrl": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_t.jpg",
        "hfovMin": 100,
        "hfov": 360,
        "class": "Panorama",
        "adjacentPanoramas": [
         {
          "backwardYaw": 36.44,
          "yaw": -104.82,
          "distance": 1,
          "class": "AdjacentPanorama",
          "panorama": {
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_hq.jpeg",
                "width": 6434,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "class": "ImageResourceLevel",
                "height": 3217
               },
               {
                "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94.jpeg",
                "width": 4002,
                "class": "ImageResourceLevel",
                "height": 2001
               }
              ]
             },
             "overlays": [
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_0_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "hfov": 5.86,
                 "yaw": 36.44,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 8.45
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8, this.camera_96BDBB5F_8615_E7FC_41BC_B03FCE5BC0EB); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 8, this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.86,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_0_0.png",
                    "width": 105,
                    "class": "ImageResourceLevel",
                    "height": 105
                   }
                  ]
                 },
                 "pitch": 8.45,
                 "yaw": 36.44
                }
               ],
               "id": "overlay_8C8403C2_820D_F8B2_41CF_C1FCA5A3BC27",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_1_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "hfov": 5.85,
                 "yaw": 76.9,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 8.85
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90, this.camera_96AEAB70_8615_E7C4_41D6_421988781D95); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 10, this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.85,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_1_0.png",
                    "width": 105,
                    "class": "ImageResourceLevel",
                    "height": 105
                   }
                  ]
                 },
                 "pitch": 8.85,
                 "yaw": 76.9
                }
               ],
               "id": "overlay_8C8413C2_820D_F8B2_419E_DB601EA765BE",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_2_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "hfov": 5.84,
                 "yaw": 128.57,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 9.2
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F, this.camera_96A02B85_8615_E74C_41D5_50BCA056F70E); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 11, this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.84,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_2_0.png",
                    "width": 105,
                    "class": "ImageResourceLevel",
                    "height": 105
                   }
                  ]
                 },
                 "pitch": 9.2,
                 "yaw": 128.57
                }
               ],
               "id": "overlay_8C8423C2_820D_F8B2_41D9_2B21DD6CE7E6",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_3_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "hfov": 5.16,
                 "yaw": 39.71,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -29.28
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.setMediaBehaviour(this.playList_9609F8B5_8615_E14C_41E0_619014D78E72, 0, this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.16,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_3_0.png",
                    "width": 105,
                    "class": "ImageResourceLevel",
                    "height": 105
                   }
                  ]
                 },
                 "pitch": -29.28,
                 "yaw": 39.71
                }
               ],
               "id": "overlay_8C8433C2_820D_F8B2_41C6_1AA68E1C515F",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_5_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "hfov": 5.61,
                 "yaw": 10.63,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -18.62
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, true, 0, null, null, false)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.61,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_5_0.png",
                    "width": 105,
                    "class": "ImageResourceLevel",
                    "height": 105
                   }
                  ]
                 },
                 "pitch": -18.62,
                 "yaw": 10.63
                }
               ],
               "id": "overlay_88B5A80F_861C_215C_4167_0101AB69FBA4",
               "data": {
                "label": "Image"
               }
              }
             ],
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_t.jpg"
            }
           ],
           "label": "IMG_20180114_184740_00_077-edit",
           "id": "panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94",
           "pitch": 0,
           "hfovMax": 130,
           "vfov": 180,
           "thumbnailUrl": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_t.jpg",
           "hfovMin": 100,
           "hfov": 360,
           "class": "Panorama",
           "adjacentPanoramas": [
            {
             "backwardYaw": -104.82,
             "yaw": 36.44,
             "distance": 1,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8"
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_hq.jpeg",
                   "width": 6434,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ],
                   "class": "ImageResourceLevel",
                   "height": 3217
                  },
                  {
                   "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E.jpeg",
                   "width": 4002,
                   "class": "ImageResourceLevel",
                   "height": 2001
                  }
                 ]
                },
                "overlays": [
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_0_0_0_map.gif",
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "height": 16
                      }
                     ]
                    },
                    "hfov": 5.92,
                    "yaw": -30.03,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -1.5
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_96057ABB_8615_E144_41D6_82E6EF2D5089); this.setMediaBehaviour(this.playList_960188BF_8615_E2BC_41E0_8CC9B788723F, 0, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.92,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_0_0.png",
                       "width": 105,
                       "class": "ImageResourceLevel",
                       "height": 105
                      }
                     ]
                    },
                    "pitch": -1.5,
                    "yaw": -30.03
                   }
                  ],
                  "id": "overlay_09EEE157_1AA0_9757_41AD_5F9390667B4A",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_1_0_0_map.gif",
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "height": 16
                      }
                     ]
                    },
                    "hfov": 5.91,
                    "yaw": 139.43,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -2.97
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9, this.camera_9637EAC5_8615_E6CC_41C2_9D55DE07F0B4); this.setMediaBehaviour(this.playList_960888B5_8615_E14C_41D7_64C1B6BB69BC, 0, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.91,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_1_0.png",
                       "width": 105,
                       "class": "ImageResourceLevel",
                       "height": 105
                      }
                     ]
                    },
                    "pitch": -2.97,
                    "yaw": 139.43
                   }
                  ],
                  "id": "overlay_093185C8_1AA1_9FB9_41B3_EF254AE2BC40",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_2_0_0_map.gif",
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "height": 16
                      }
                     ]
                    },
                    "hfov": 6.12,
                    "yaw": 146.16,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 65.57
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.12,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_2_0.png",
                       "width": 264,
                       "class": "ImageResourceLevel",
                       "height": 264
                      }
                     ]
                    },
                    "pitch": 65.57,
                    "yaw": 146.16
                   }
                  ],
                  "id": "overlay_037A2FFE_2029_6C26_41B6_1BF59A245E5D",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 }
                ],
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_t.jpg"
               }
              ],
              "label": "6-Lagunas de Retencion",
              "id": "panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
              "pitch": 0,
              "mapLocations": [
               {
                "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                "x": 293.95,
                "angle": 202.87,
                "class": "PanoramaMapLocation",
                "y": 216.9
               }
              ],
              "hfovMax": 130,
              "vfov": 180,
              "thumbnailUrl": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_t.jpg",
              "hfovMin": 100,
              "hfov": 360,
              "class": "Panorama",
              "adjacentPanoramas": [
               {
                "backwardYaw": -5.23,
                "yaw": -30.03,
                "distance": 1,
                "class": "AdjacentPanorama",
                "panorama": {
                 "frames": [
                  {
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_hq.jpeg",
                      "width": 6434,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ],
                      "class": "ImageResourceLevel",
                      "height": 3217
                     },
                     {
                      "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC.jpeg",
                      "width": 4002,
                      "class": "ImageResourceLevel",
                      "height": 2001
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_0_0_0_map.gif",
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "height": 16
                         }
                        ]
                       },
                       "hfov": 5.91,
                       "yaw": -164.09,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -3.15
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_892F4CE3_8615_E2C4_41D2_9CBDD4A1F42C); this.setMediaBehaviour(this.playList_960A18B5_8615_E14C_41AD_98470B3DFDD7, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.91,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_0_0.png",
                          "width": 105,
                          "class": "ImageResourceLevel",
                          "height": 105
                         }
                        ]
                       },
                       "pitch": -3.15,
                       "yaw": -164.09
                      }
                     ],
                     "id": "overlay_0A67E474_1AA0_BD6A_41B7_BED35C5683B5",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_1_0_0_map.gif",
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "height": 16
                         }
                        ]
                       },
                       "hfov": 5.89,
                       "yaw": -5.23,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -5.49
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E, this.camera_89349CD4_8615_E2CC_41A5_1C31B0380E0A); this.setMediaBehaviour(this.playList_9609F8B5_8615_E14C_41E0_619014D78E72, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.89,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_1_0.png",
                          "width": 105,
                          "class": "ImageResourceLevel",
                          "height": 105
                         }
                        ]
                       },
                       "pitch": -5.49,
                       "yaw": -5.23
                      }
                     ],
                     "id": "overlay_0A062D73_1AA1_EF6F_41B3_28BC82B7EFA3",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_2_0_0_map.gif",
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "height": 16
                         }
                        ]
                       },
                       "hfov": 5.92,
                       "yaw": 69.33,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -2.4
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_0B7B5A27_1FEB_7426_4195_945554348391, this.camera_893ABCC9_8615_E2C4_41D5_59D8344555B8); this.setMediaBehaviour(this.playList_960858B5_8615_E14C_41DB_C6A3A01DD970, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.92,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_2_0.png",
                          "width": 105,
                          "class": "ImageResourceLevel",
                          "height": 105
                         }
                        ]
                       },
                       "pitch": -2.4,
                       "yaw": 69.33
                      }
                     ],
                     "id": "overlay_0B9BBAA4_1FE8_94DA_41A4_80FF2E6D9882",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_3_0_0_map.gif",
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "height": 16
                         }
                        ]
                       },
                       "hfov": 4.95,
                       "yaw": -1.18,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 33.3
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 4.95,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_3_0.png",
                          "width": 105,
                          "class": "ImageResourceLevel",
                          "height": 105
                         }
                        ]
                       },
                       "pitch": 33.3,
                       "yaw": -1.18
                      }
                     ],
                     "id": "overlay_02E95182_2028_B4DE_41B1_F1922BBD0381",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_t.jpg"
                  }
                 ],
                 "label": "5-Arte Rotonda",
                 "id": "panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
                 "pitch": 0,
                 "hfovMax": 130,
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_t.jpg",
                 "hfovMin": 100,
                 "hfov": 360,
                 "class": "Panorama",
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": -155.58,
                   "yaw": 69.33,
                   "distance": 1,
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "frames": [
                     {
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_hq.jpeg",
                         "width": 6434,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ],
                         "class": "ImageResourceLevel",
                         "height": 3217
                        },
                        {
                         "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391.jpeg",
                         "width": 4002,
                         "class": "ImageResourceLevel",
                         "height": 2001
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_0_0_0_map.gif",
                             "width": 16,
                             "class": "ImageResourceLevel",
                             "height": 16
                            }
                           ]
                          },
                          "hfov": 5.91,
                          "yaw": -155.58,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -3.74
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_891EA978_8615_E3C4_41C4_6A39C75F0A7A); this.setMediaBehaviour(this.playList_960188BF_8615_E2BC_41E0_8CC9B788723F, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 5.91,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_0_0.png",
                             "width": 105,
                             "class": "ImageResourceLevel",
                             "height": 105
                            }
                           ]
                          },
                          "pitch": -3.74,
                          "yaw": -155.58
                         }
                        ],
                        "id": "overlay_0AB7C55F_1FE8_FC66_41AA_FC4B185C3724",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_1_0_0_map.gif",
                             "width": 16,
                             "class": "ImageResourceLevel",
                             "height": 16
                            }
                           ]
                          },
                          "hfov": 5.92,
                          "yaw": -174.5,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -1.39
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_89132987_8615_E34C_41DB_22D746F73A77); this.setMediaBehaviour(this.playList_960A18B5_8615_E14C_41AD_98470B3DFDD7, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 5.92,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_1_0.png",
                             "width": 105,
                             "class": "ImageResourceLevel",
                             "height": 105
                            }
                           ]
                          },
                          "pitch": -1.39,
                          "yaw": -174.5
                         }
                        ],
                        "id": "overlay_0902A392_1FD9_94FE_41B7_54ABDCF246F7",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_2_0_0_map.gif",
                             "width": 16,
                             "class": "ImageResourceLevel",
                             "height": 16
                            }
                           ]
                          },
                          "hfov": 5.28,
                          "yaw": -90.59,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": 27.01
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 5.28,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_2_0.png",
                             "width": 105,
                             "class": "ImageResourceLevel",
                             "height": 105
                            }
                           ]
                          },
                          "pitch": 27.01,
                          "yaw": -90.59
                         }
                        ],
                        "id": "overlay_065D4D65_2058_EC5A_41A3_9655B97D1F55",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_4_0_0_map.gif",
                             "width": 16,
                             "class": "ImageResourceLevel",
                             "height": 16
                            }
                           ]
                          },
                          "hfov": 7.09,
                          "yaw": 172.46,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -16.71
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.media_0BA5C089_2079_B4ED_41A8_D2AC2349E041, this.camera_57ED2843_5884_EE2E_41C5_05C9E202BB3A); this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.09,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_4_0.png",
                             "width": 132,
                             "class": "ImageResourceLevel",
                             "height": 132
                            }
                           ]
                          },
                          "pitch": -16.71,
                          "yaw": 172.46
                         }
                        ],
                        "id": "overlay_88D8A213_861C_E144_41CB_EBF813B55232",
                        "data": {
                         "label": "Image"
                        }
                       }
                      ],
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_t.jpg"
                     }
                    ],
                    "label": "17-Construcci\u00f3n Coloplast",
                    "id": "panorama_0B7B5A27_1FEB_7426_4195_945554348391",
                    "pitch": 0,
                    "mapLocations": [
                     {
                      "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                      "x": 357.9,
                      "angle": 48.7,
                      "class": "PanoramaMapLocation",
                      "y": 264.95
                     }
                    ],
                    "hfovMax": 130,
                    "vfov": 180,
                    "thumbnailUrl": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_t.jpg",
                    "hfovMin": 100,
                    "hfov": 360,
                    "class": "Panorama",
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": 69.33,
                      "yaw": -155.58,
                      "distance": 1,
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC"
                     },
                     {
                      "backwardYaw": 66.08,
                      "yaw": -174.5,
                      "distance": 1,
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "frames": [
                        {
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_hq.jpeg",
                            "width": 6434,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ],
                            "class": "ImageResourceLevel",
                            "height": 3217
                           },
                           {
                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B.jpeg",
                            "width": 4002,
                            "class": "ImageResourceLevel",
                            "height": 2001
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_0_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                               }
                              ]
                             },
                             "hfov": 5.88,
                             "yaw": 174.57,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -7.02
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_9759AC2C_8615_E15C_41D6_2B7C4009D19E); this.setMediaBehaviour(this.playList_961778A1_8615_E14B_41CB_34C40A62053F, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5.88,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_0_0.png",
                                "width": 105,
                                "class": "ImageResourceLevel",
                                "height": 105
                               }
                              ]
                             },
                             "pitch": -7.02,
                             "yaw": 174.57
                            }
                           ],
                           "id": "overlay_0BB92A75_1AA1_956B_41AC_0351AD6A37FC",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_1_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                               }
                              ]
                             },
                             "hfov": 5.91,
                             "yaw": 6.44,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -3.74
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_9708EBEE_8615_E6DC_41DB_2E37103FC53C); this.setMediaBehaviour(this.playList_960188BF_8615_E2BC_41E0_8CC9B788723F, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5.91,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_1_0.png",
                                "width": 105,
                                "class": "ImageResourceLevel",
                                "height": 105
                               }
                              ]
                             },
                             "pitch": -3.74,
                             "yaw": 6.44
                            }
                           ],
                           "id": "overlay_0B49D73A_1AA1_BCD9_41B4_8D43FC88B793",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_2_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                               }
                              ]
                             },
                             "hfov": 5.91,
                             "yaw": -78.27,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -3.14
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246, this.camera_97298C19_8615_E144_41AB_2CA46A6D7A7E); this.setMediaBehaviour(this.playList_9601F8BF_8615_E2BC_41BD_0C865053920F, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5.91,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_2_0.png",
                                "width": 105,
                                "class": "ImageResourceLevel",
                                "height": 105
                               }
                              ]
                             },
                             "pitch": -3.14,
                             "yaw": -78.27
                            }
                           ],
                           "id": "overlay_0CC2B1E1_1AE1_4D00_41B1_ACF7784104D5",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_3_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                               }
                              ]
                             },
                             "hfov": 5.92,
                             "yaw": 66.08,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 0.87
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_0B7B5A27_1FEB_7426_4195_945554348391, this.camera_9716ABDC_8615_E6FC_41C4_E7EA3514DC20); this.setMediaBehaviour(this.playList_960858B5_8615_E14C_41DB_C6A3A01DD970, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5.92,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_3_0.png",
                                "width": 105,
                                "class": "ImageResourceLevel",
                                "height": 105
                               }
                              ]
                             },
                             "pitch": 0.87,
                             "yaw": 66.08
                            }
                           ],
                           "id": "overlay_0AAAE042_1FD7_745F_419C_D12F60591797",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_4_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                               }
                              ]
                             },
                             "hfov": 5.91,
                             "yaw": 137.01,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -2.79
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_97370C02_8615_E144_41B0_521847C7F29A); this.setMediaBehaviour(this.playList_961498A6_8615_E14C_41D3_04B28978C107, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5.91,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_4_0.png",
                                "width": 105,
                                "class": "ImageResourceLevel",
                                "height": 105
                               }
                              ]
                             },
                             "pitch": -2.79,
                             "yaw": 137.01
                            }
                           ],
                           "id": "overlay_07A64819_1FD9_93EA_41BA_D3C6BE78DFAB",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_5_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                               }
                              ]
                             },
                             "hfov": 5.85,
                             "yaw": -45.57,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 8.64
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "this.showPopupPanoramaOverlay(this.popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#000000','rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, null, null, null, null, null, false)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5.85,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_5_0.png",
                                "width": 105,
                                "class": "ImageResourceLevel",
                                "height": 105
                               }
                              ]
                             },
                             "pitch": 8.64,
                             "yaw": -45.57
                            }
                           ],
                           "id": "overlay_3AF637F8_20F8_9C2A_419C_75BB4D5E26FF",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "rotationY": 0,
                           "showDuration": 500,
                           "popupDistance": 100,
                           "rotationZ": 0,
                           "hideDuration": 500,
                           "id": "popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7",
                           "popupMaxHeight": "95%",
                           "rotationX": 0,
                           "hfov": 5.85,
                           "hideEasing": "cubic_out",
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "url": "media/popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7_0_0.jpg",
                              "width": 850,
                              "class": "ImageResourceLevel",
                              "height": 625
                             },
                             {
                              "url": "media/popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7_0_1.jpg",
                              "width": 511,
                              "class": "ImageResourceLevel",
                              "height": 376
                             }
                            ]
                           },
                           "pitch": 8.64,
                           "popupMaxWidth": "95%",
                           "yaw": -45.57,
                           "class": "PopupPanoramaOverlay",
                           "showEasing": "cubic_in"
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_6_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                               }
                              ]
                             },
                             "hfov": 4.82,
                             "yaw": 21.44,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 35.54
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 4.82,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_6_0.png",
                                "width": 105,
                                "class": "ImageResourceLevel",
                                "height": 105
                               }
                              ]
                             },
                             "pitch": 35.54,
                             "yaw": 21.44
                            }
                           ],
                           "id": "overlay_02A28332_202F_943F_41B9_DA9F604BA994",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_7_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                               }
                              ]
                             },
                             "hfov": 5.92,
                             "yaw": -13.2,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -1.15
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "this.showPopupPanoramaOverlay(this.popup_36E9C513_249E_702C_41C0_2CA0C18AAE54, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#000000','rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_32BB558C_24AE_9034_41A0_905F3B8026D3, null, null, null, null, false)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5.92,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_7_0.png",
                                "width": 105,
                                "class": "ImageResourceLevel",
                                "height": 105
                               }
                              ]
                             },
                             "pitch": -1.15,
                             "yaw": -13.2
                            }
                           ],
                           "id": "overlay_36D502D1_249E_F02C_41C1_D3ABB6A0C079",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "rotationY": 0,
                           "showDuration": 500,
                           "popupDistance": 100,
                           "rotationZ": 0,
                           "hideDuration": 500,
                           "id": "popup_36E9C513_249E_702C_41C0_2CA0C18AAE54",
                           "popupMaxHeight": "95%",
                           "rotationX": 0,
                           "hfov": 5.92,
                           "hideEasing": "cubic_out",
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "url": "media/popup_36E9C513_249E_702C_41C0_2CA0C18AAE54_0_1.jpg",
                              "width": 1024,
                              "class": "ImageResourceLevel",
                              "height": 682
                             }
                            ]
                           },
                           "pitch": -1.15,
                           "popupMaxWidth": "95%",
                           "yaw": -13.2,
                           "class": "PopupPanoramaOverlay",
                           "showEasing": "cubic_in"
                          },
                          {
                           "rotationY": 0,
                           "showDuration": 500,
                           "popupDistance": 100,
                           "rotationZ": 0,
                           "showEasing": "cubic_in",
                           "id": "popup_37E7B455_24BA_B0D4_41A5_EF23708D6C53",
                           "popupMaxHeight": "95%",
                           "rotationX": 0,
                           "autoplay": true,
                           "hfov": 5.92,
                           "loop": false,
                           "class": "PopupPanoramaOverlay",
                           "pitch": -1.52,
                           "popupMaxWidth": "95%",
                           "hideEasing": "cubic_out",
                           "yaw": 34.02,
                           "hideDuration": 500,
                           "video": {
                            "width": 1280,
                            "height": 720,
                            "class": "VideoResource",
                            "mp4Url": "media/video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB.mp4"
                           }
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_9_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                               }
                              ]
                             },
                             "hfov": 5.92,
                             "yaw": 34.02,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -1.52
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_37E7B455_24BA_B0D4_41A5_EF23708D6C53, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#000000','rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, true) } else { this.showPopupMedia(this.window_8D897D08_8614_2344_41B3_E77830EF723A, this.video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB, this.PlayList_9657D8FB_8615_E2C4_41E0_0368364395A8, '95%', '95%', true, true) }",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5.92,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_9_0.png",
                                "width": 105,
                                "class": "ImageResourceLevel",
                                "height": 105
                               }
                              ]
                             },
                             "pitch": -1.52,
                             "yaw": 34.02
                            }
                           ],
                           "id": "overlay_88A2D7C6_861C_6ECC_41C6_474A95487C7A",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          }
                         ],
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_t.jpg"
                        }
                       ],
                       "label": "4-Frente Rotonda",
                       "id": "panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
                       "pitch": 0,
                       "mapLocations": [
                        {
                         "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                         "x": 282.7,
                         "angle": 0,
                         "class": "PanoramaMapLocation",
                         "y": 306.8
                        }
                       ],
                       "hfovMax": 130,
                       "vfov": 180,
                       "thumbnailUrl": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_t.jpg",
                       "hfovMin": 100,
                       "hfov": 360,
                       "class": "Panorama",
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": -174.5,
                         "yaw": 66.08,
                         "distance": 1,
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391"
                        },
                        {
                         "backwardYaw": -164.09,
                         "yaw": 6.44,
                         "distance": 1,
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC"
                        },
                        {
                         "backwardYaw": -157.73,
                         "yaw": 137.01,
                         "distance": 1,
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "frames": [
                           {
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_hq.jpeg",
                               "width": 6434,
                               "tags": [
                                "oculusgo",
                                "ipadpro"
                               ],
                               "class": "ImageResourceLevel",
                               "height": 3217
                              },
                              {
                               "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09.jpeg",
                               "width": 4002,
                               "class": "ImageResourceLevel",
                               "height": 2001
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_0_0_0_map.gif",
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ]
                                },
                                "hfov": 5.92,
                                "yaw": 150.05,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -2.1
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_89008CBC_8615_E2BC_41E0_811DFD9E475F); this.setMediaBehaviour(this.playList_961778A1_8615_E14B_41CB_34C40A62053F, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.92,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_0_0.png",
                                   "width": 105,
                                   "class": "ImageResourceLevel",
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": -2.1,
                                "yaw": 150.05
                               }
                              ],
                              "id": "overlay_15E21563_1A28_8BC5_417C_4669528975E0",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_1_0_0_map.gif",
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ]
                                },
                                "hfov": 5.92,
                                "yaw": 79.36,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 1.04
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.mainPlayList.set('selectedIndex', 0)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.92,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_1_0.png",
                                   "width": 105,
                                   "class": "ImageResourceLevel",
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": 1.04,
                                "yaw": 79.36
                               }
                              ],
                              "id": "overlay_0A16DB8F_1A2B_9F5E_41A4_EC4CC09E3A83",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_2_0_0_map.gif",
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ]
                                },
                                "hfov": 5.92,
                                "yaw": 50.1,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -0.36
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748, this.camera_976D5C5C_8615_E1FC_41D0_F014C6366141); this.setMediaBehaviour(this.playList_9603A8BF_8615_E2BC_41CD_EBBF5BA34035, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.92,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_2_0.png",
                                   "width": 105,
                                   "class": "ImageResourceLevel",
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": -0.36,
                                "yaw": 50.1
                               }
                              ],
                              "id": "overlay_0A8869D2_1A28_BAC6_41B3_CB74A246FC3A",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_3_0_0_map.gif",
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ]
                                },
                                "hfov": 5.92,
                                "yaw": -59.69,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -2.53
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_978E6C78_8615_E1C4_419C_03A312F46E8C); this.mainPlayList.set('selectedIndex', 1)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.92,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_3_0.png",
                                   "width": 105,
                                   "class": "ImageResourceLevel",
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": -2.53,
                                "yaw": -59.69
                               }
                              ],
                              "id": "overlay_08D9C3C6_1FD8_9467_41A6_E690DF743C75",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_4_0_0_map.gif",
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ]
                                },
                                "hfov": 5.91,
                                "yaw": -157.73,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -3.81
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_979C1C6B_8615_E1C4_41B5_372E0A71927D); this.setMediaBehaviour(this.playList_960A18B5_8615_E14C_41AD_98470B3DFDD7, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.91,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_4_0.png",
                                   "width": 105,
                                   "class": "ImageResourceLevel",
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": -3.81,
                                "yaw": -157.73
                               }
                              ],
                              "id": "overlay_07EAD80C_1FD8_F3EB_415E_63A7F8220FDC",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_5_0_0_map.gif",
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ]
                                },
                                "hfov": 5.67,
                                "yaw": -55.53,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 16.63
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.showPopupPanoramaOverlay(this.popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#000000','rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_0AA1E95D_2068_946A_419A_A79BE517FB92, null, null, null, null, false)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.67,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_5_0.png",
                                   "width": 105,
                                   "class": "ImageResourceLevel",
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": 16.63,
                                "yaw": -55.53
                               }
                              ],
                              "id": "overlay_3A30E0F6_20F8_9427_41A0_D90681FFF89C",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "rotationY": 0,
                              "showDuration": 500,
                              "popupDistance": 100,
                              "rotationZ": 0,
                              "hideDuration": 500,
                              "id": "popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E",
                              "popupMaxHeight": "95%",
                              "rotationX": 0,
                              "hfov": 3.78,
                              "hideEasing": "cubic_out",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_2.jpg",
                                 "width": 682,
                                 "class": "ImageResourceLevel",
                                 "height": 1024
                                }
                               ]
                              },
                              "pitch": 16.63,
                              "popupMaxWidth": "95%",
                              "yaw": -55.53,
                              "class": "PopupPanoramaOverlay",
                              "showEasing": "cubic_in"
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_6_0_0_map.gif",
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ]
                                },
                                "hfov": 4.52,
                                "yaw": 78.46,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 40.22
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 8, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 4.52,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_6_0.png",
                                   "width": 105,
                                   "class": "ImageResourceLevel",
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": 40.22,
                                "yaw": 78.46
                               }
                              ],
                              "id": "overlay_0118AD21_2029_ADDC_41B1_BAD512D9277C",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             }
                            ],
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_t.jpg"
                           }
                          ],
                          "label": "3-Detail CC",
                          "id": "panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
                          "pitch": 0,
                          "mapLocations": [
                           {
                            "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                            "x": 296.9,
                            "angle": 86.7,
                            "class": "PanoramaMapLocation",
                            "y": 333.85
                           }
                          ],
                          "hfovMax": 130,
                          "vfov": 180,
                          "thumbnailUrl": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_t.jpg",
                          "hfovMin": 100,
                          "hfov": 360,
                          "class": "Panorama",
                          "adjacentPanoramas": [
                           {
                            "backwardYaw": 176.92,
                            "yaw": 50.1,
                            "distance": 1,
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "frames": [
                              {
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_hq.jpeg",
                                  "width": 6434,
                                  "tags": [
                                   "oculusgo",
                                   "ipadpro"
                                  ],
                                  "class": "ImageResourceLevel",
                                  "height": 3217
                                 },
                                 {
                                  "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748.jpeg",
                                  "width": 4002,
                                  "class": "ImageResourceLevel",
                                  "height": 2001
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_0_0_0_map.gif",
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "hfov": 5.91,
                                   "yaw": 176.92,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -3.64
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_898C3D6A_8615_E3C4_41BA_F69F9BCF00E0); this.setMediaBehaviour(this.playList_961498A6_8615_E14C_41D3_04B28978C107, 0, this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.91,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_0_0.png",
                                      "width": 105,
                                      "class": "ImageResourceLevel",
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": -3.64,
                                   "yaw": 176.92
                                  }
                                 ],
                                 "id": "overlay_17E9486E_1AA7_B579_41B0_203FA3864F4E",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_2_0_0_map.gif",
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "hfov": 3.96,
                                   "yaw": 27.83,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 48.04
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 8, this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 3.96,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_2_0.png",
                                      "width": 105,
                                      "class": "ImageResourceLevel",
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": 48.04,
                                   "yaw": 27.83
                                  }
                                 ],
                                 "id": "overlay_017ADF7E_202F_6C26_41B8_C56A5105BC33",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_3_0_0_map.gif",
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "hfov": 5.88,
                                   "yaw": -85.83,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 6.51
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1, this.camera_460CEEE7_492B_027B_41D1_2B81CCA4EC0E); this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.88,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_3_0.png",
                                      "width": 105,
                                      "class": "ImageResourceLevel",
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": 6.51,
                                   "yaw": -85.83
                                  }
                                 ],
                                 "id": "overlay_88ACC0FD_861C_22BC_4192_BA49B9CDF7C1",
                                 "data": {
                                  "label": "Image"
                                 }
                                }
                               ],
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_t.jpg"
                              }
                             ],
                             "label": "16-Oficinas Parque",
                             "id": "panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
                             "pitch": 0,
                             "hfovMax": 130,
                             "vfov": 180,
                             "thumbnailUrl": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_t.jpg",
                             "hfovMin": 100,
                             "hfov": 360,
                             "class": "Panorama",
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8"
                              },
                              {
                               "backwardYaw": 50.1,
                               "yaw": 176.92,
                               "distance": 1,
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09"
                              }
                             ],
                             "partial": false
                            }
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8"
                           },
                           {
                            "backwardYaw": 137.01,
                            "yaw": -157.73,
                            "distance": 1,
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B"
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714"
                           },
                           {
                            "backwardYaw": -91.85,
                            "yaw": -59.69,
                            "distance": 1,
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "frames": [
                              {
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
                               "overlays": [
                                {
                                 "maps": [],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_96298AD0_8615_E6C3_41C4_68C85BF6D566); this.mainPlayList.set('selectedIndex', 16)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "image"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
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
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "maps": [],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104, this.camera_965B2AE0_8615_E6C4_41D4_DE61CCD7D6EA); this.mainPlayList.set('selectedIndex', 8)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "image"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
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
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "yaw": -92.76,
                                 "class": "LensFlarePanoramaOverlay",
                                 "pitch": -1.05,
                                 "id": "overlay_D7DEC935_DCEA_FB36_41D7_D4FB63048649",
                                 "bleachingDistance": 0.4,
                                 "bleaching": 0.7
                                },
                                {
                                 "maps": [],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.showPopupPanoramaOverlay(this.popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':50,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#FFFFFF','rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, this.ImageResource_C406C318_D4FF_7ACD_41B8_0A98872E7CE5, null, null, null, null, false)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "image"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
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
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "maps": [],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.showPopupPanoramaOverlay(this.popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':50,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#FFFFFF','rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, this.ImageResource_C4896E50_D4F3_6B5D_41D3_2EEBDC3443C4, null, null, null, null, false)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "image"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
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
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "rotationY": 0,
                                 "showDuration": 500,
                                 "popupDistance": 100,
                                 "rotationZ": 0,
                                 "hideDuration": 500,
                                 "id": "popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D",
                                 "popupMaxHeight": "95%",
                                 "rotationX": 0,
                                 "hfov": 8.04,
                                 "hideEasing": "cubic_out",
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
                                 "popupMaxWidth": "95%",
                                 "yaw": 163.85,
                                 "class": "PopupPanoramaOverlay",
                                 "showEasing": "cubic_in"
                                },
                                {
                                 "rotationY": 0,
                                 "showDuration": 500,
                                 "popupDistance": 100,
                                 "rotationZ": 0,
                                 "hideDuration": 500,
                                 "id": "popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0",
                                 "popupMaxHeight": "95%",
                                 "rotationX": 0,
                                 "hfov": 7.64,
                                 "hideEasing": "cubic_out",
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
                                 "popupMaxWidth": "95%",
                                 "yaw": 7.39,
                                 "class": "PopupPanoramaOverlay",
                                 "showEasing": "cubic_in"
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_8_0_0_map.gif",
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "hfov": 7.94,
                                   "yaw": -91.85,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -4.64
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_964EBAEA_8615_E6C7_41DB_9CED365C0486); this.setMediaBehaviour(this.playList_961498A6_8615_E14C_41D3_04B28978C107, 0, this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 7.94,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_8_0.png",
                                      "width": 119,
                                      "class": "ImageResourceLevel",
                                      "height": 118
                                     }
                                    ]
                                   },
                                   "pitch": -4.64,
                                   "yaw": -91.85
                                  }
                                 ],
                                 "id": "overlay_087339E0_1FDB_745A_4192_8E56F7FC7082",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                }
                               ],
                               "class": "CubicPanoramaFrame",
                               "thumbnailUrl": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_t.jpg"
                              }
                             ],
                             "label": "Lobby",
                             "id": "panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
                             "cardboardMenu": "this.Menu_965238FB_8615_E2C4_41E0_B690DE45C316",
                             "pitch": 0,
                             "hfovMax": 120,
                             "mapLocations": [
                              {
                               "map": {
                                "minimumZoomFactor": 0.5,
                                "fieldOfViewOverlayInsideColor": "#000000",
                                "class": "Map",
                                "label": "Planta",
                                "fieldOfViewOverlayRadiusScale": 0.19,
                                "id": "map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                "maximumZoomFactor": 1.2,
                                "width": 415,
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
                                "thumbnailUrl": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_t.png",
                                "scaleMode": "fit_inside",
                                "overlays": [
                                 {
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
                                  "areas": [
                                   {
                                    "click": "this.mainPlayList.set('selectedIndex', 1)",
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "class": "AreaHotspotMapOverlay",
                                  "useHandCursor": true,
                                  "id": "overlay_C10F34C4_DD09_E665_41EB_0E9F8F32C5EE",
                                  "data": {
                                   "label": "Image"
                                  },
                                  "image": {
                                   "x": 202.7,
                                   "height": 30,
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
                                   "class": "HotspotMapOverlayImage"
                                  }
                                 },
                                 {
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
                                  "areas": [
                                   {
                                    "click": "this.mainPlayList.set('selectedIndex', 3)",
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "class": "AreaHotspotMapOverlay",
                                  "useHandCursor": true,
                                  "id": "overlay_C057DBDB_DD0A_6267_41DF_74197503054E",
                                  "data": {
                                   "label": "Image"
                                  },
                                  "image": {
                                   "x": 200.7,
                                   "height": 30,
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
                                   "class": "HotspotMapOverlayImage"
                                  }
                                 },
                                 {
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
                                  "areas": [
                                   {
                                    "click": "this.mainPlayList.set('selectedIndex', 10)",
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "class": "AreaHotspotMapOverlay",
                                  "useHandCursor": true,
                                  "id": "overlay_C1A62C4E_DD0B_E665_41E4_24E80204A343",
                                  "data": {
                                   "label": "Image"
                                  },
                                  "image": {
                                   "x": 71.7,
                                   "height": 30,
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
                                   "class": "HotspotMapOverlayImage"
                                  }
                                 },
                                 {
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
                                  "areas": [
                                   {
                                    "click": "this.mainPlayList.set('selectedIndex', 11)",
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "class": "AreaHotspotMapOverlay",
                                  "useHandCursor": true,
                                  "id": "overlay_C0CBF35A_DD0A_E26D_41D4_D1DC41F86387",
                                  "data": {
                                   "label": "Image"
                                  },
                                  "image": {
                                   "x": 73.7,
                                   "height": 30,
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
                                   "class": "HotspotMapOverlayImage"
                                  }
                                 },
                                 {
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
                                  "areas": [
                                   {
                                    "click": "this.mainPlayList.set('selectedIndex', 5)",
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "class": "AreaHotspotMapOverlay",
                                  "useHandCursor": true,
                                  "id": "overlay_C01B30DE_DD09_BE65_41DD_D62C14826FDF",
                                  "data": {
                                   "label": "Image"
                                  },
                                  "image": {
                                   "x": 302.7,
                                   "height": 30,
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
                                   "class": "HotspotMapOverlayImage"
                                  }
                                 },
                                 {
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
                                  "areas": [
                                   {
                                    "click": "this.mainPlayList.set('selectedIndex', 4)",
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "class": "AreaHotspotMapOverlay",
                                  "useHandCursor": true,
                                  "id": "overlay_C332A511_DD0E_A7FC_41E4_2786EB8DD2F7",
                                  "data": {
                                   "label": "Image"
                                  },
                                  "image": {
                                   "x": 328.6,
                                   "height": 30,
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
                                   "class": "HotspotMapOverlayImage"
                                  }
                                 },
                                 {
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
                                  "areas": [
                                   {
                                    "click": "this.mainPlayList.set('selectedIndex', 6)",
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "class": "AreaHotspotMapOverlay",
                                  "useHandCursor": true,
                                  "id": "overlay_C0B9B7F7_DD0E_6224_41E8_445361C5C9E4",
                                  "data": {
                                   "label": "Image"
                                  },
                                  "image": {
                                   "x": 200.7,
                                   "height": 30,
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
                                   "class": "HotspotMapOverlayImage"
                                  }
                                 },
                                 {
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
                                  "areas": [
                                   {
                                    "click": "this.mainPlayList.set('selectedIndex', 12)",
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "class": "AreaHotspotMapOverlay",
                                  "useHandCursor": true,
                                  "id": "overlay_C3F85A31_DD0F_E23C_41DC_6258471D9794",
                                  "data": {
                                   "label": "Image"
                                  },
                                  "image": {
                                   "x": 318.7,
                                   "height": 30,
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
                                   "class": "HotspotMapOverlayImage"
                                  }
                                 },
                                 {
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
                                  "areas": [
                                   {
                                    "click": "this.mainPlayList.set('selectedIndex', 14)",
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "class": "AreaHotspotMapOverlay",
                                  "useHandCursor": true,
                                  "id": "overlay_C30E80C5_DD0E_9E67_41E5_F7EA65B0847D",
                                  "data": {
                                   "label": "Image"
                                  },
                                  "image": {
                                   "x": 203.65,
                                   "height": 30,
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
                                   "class": "HotspotMapOverlayImage"
                                  }
                                 },
                                 {
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
                                  "areas": [
                                   {
                                    "click": "this.mainPlayList.set('selectedIndex', 13)",
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "class": "AreaHotspotMapOverlay",
                                  "useHandCursor": true,
                                  "id": "overlay_C3598F78_DD0E_622C_41E9_FCE2210BA50E",
                                  "data": {
                                   "label": "Image"
                                  },
                                  "image": {
                                   "x": 66.65,
                                   "height": 30,
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
                                   "class": "HotspotMapOverlayImage"
                                  }
                                 },
                                 {
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
                                  "id": "overlay_C3A2F1BB_DD09_9E2C_41E6_AEB47B5FEE36",
                                  "class": "AreaHotspotMapOverlay",
                                  "useHandCursor": true,
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "data": {
                                   "label": "Image"
                                  },
                                  "image": {
                                   "x": 236.65,
                                   "height": 30,
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
                                   "class": "HotspotMapOverlayImage"
                                  }
                                 },
                                 {
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
                                  "id": "overlay_C3966761_DD0A_E25F_41D3_527C5C447FFE",
                                  "class": "AreaHotspotMapOverlay",
                                  "useHandCursor": true,
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "data": {
                                   "label": "Image"
                                  },
                                  "image": {
                                   "x": 202.7,
                                   "height": 30,
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
                                   "class": "HotspotMapOverlayImage"
                                  }
                                 },
                                 {
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
                                  "id": "overlay_C2AD60A4_DD09_9E24_41E0_BE7A28E7C8F8",
                                  "class": "AreaHotspotMapOverlay",
                                  "useHandCursor": true,
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "data": {
                                   "label": "Image"
                                  },
                                  "image": {
                                   "x": 207.7,
                                   "height": 30,
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
                                   "class": "HotspotMapOverlayImage"
                                  }
                                 },
                                 {
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
                                  "areas": [
                                   {
                                    "click": "this.mainPlayList.set('selectedIndex', 8)",
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "class": "AreaHotspotMapOverlay",
                                  "useHandCursor": true,
                                  "id": "overlay_EFFAE3BA_DD3F_A22D_41DB_87FABC0F13CA",
                                  "data": {
                                   "label": "Image"
                                  },
                                  "image": {
                                   "x": 227.65,
                                   "height": 30,
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
                                   "class": "HotspotMapOverlayImage"
                                  }
                                 },
                                 {
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
                                  "areas": [
                                   {
                                    "click": "this.mainPlayList.set('selectedIndex', 16)",
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "class": "AreaHotspotMapOverlay",
                                  "useHandCursor": true,
                                  "id": "overlay_2A070BB7_27CE_576F_41AB_07E104B79EC6",
                                  "data": {
                                   "label": "Image"
                                  },
                                  "image": {
                                   "x": 207.6,
                                   "height": 30,
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
                                   "class": "HotspotMapOverlayImage"
                                  }
                                 },
                                 {
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
                                  "areas": [
                                   {
                                    "click": "this.mainPlayList.set('selectedIndex', 2)",
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "class": "AreaHotspotMapOverlay",
                                  "useHandCursor": true,
                                  "id": "overlay_376F3930_27CA_D361_4190_7CF2D4BA616B",
                                  "data": {
                                   "label": "Image"
                                  },
                                  "image": {
                                   "x": 174.85,
                                   "height": 30,
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
                                   "class": "HotspotMapOverlayImage"
                                  }
                                 },
                                 {
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
                                  "areas": [
                                   {
                                    "click": "this.mainPlayList.set('selectedIndex', 7)",
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "class": "AreaHotspotMapOverlay",
                                  "useHandCursor": true,
                                  "id": "overlay_3778DCE6_27D7_D2E1_41C3_D9B03693BA2C",
                                  "data": {
                                   "label": "Image"
                                  },
                                  "image": {
                                   "x": 202.9,
                                   "height": 30,
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
                                   "class": "HotspotMapOverlayImage"
                                  }
                                 },
                                 {
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
                                  "areas": [
                                   {
                                    "click": "this.mainPlayList.set('selectedIndex', 15)",
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "class": "AreaHotspotMapOverlay",
                                  "useHandCursor": true,
                                  "id": "overlay_3686017A_27D6_53E6_41C2_468B88D59841",
                                  "data": {
                                   "label": "Image"
                                  },
                                  "image": {
                                   "x": 58.95,
                                   "height": 30,
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
                                   "class": "HotspotMapOverlayImage"
                                  }
                                 }
                                ],
                                "fieldOfViewOverlayOutsideOpacity": 0,
                                "initialZoomFactor": 1,
                                "fieldOfViewOverlayInsideOpacity": 0.4,
                                "fieldOfViewOverlayOutsideColor": "#000000",
                                "height": 558
                               },
                               "x": 217.7,
                               "angle": -83.39,
                               "class": "PanoramaMapLocation",
                               "y": 434.55
                              }
                             ],
                             "vfov": 180,
                             "thumbnailUrl": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_t.jpg",
                             "hfovMin": 100,
                             "hfov": 360,
                             "class": "Panorama",
                             "adjacentPanoramas": [
                              {
                               "backwardYaw": 32.92,
                               "yaw": 87.33,
                               "distance": 1,
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "frames": [
                                 {
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
                                  },
                                  "overlays": [
                                   {
                                    "maps": [],
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_9673FB12_8615_E744_41E0_642627CF1912); this.mainPlayList.set('selectedIndex', 1)",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "image"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
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
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "maps": [],
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3, this.camera_96654B26_8615_E74C_41D7_6F32B5EB5A55); this.mainPlayList.set('selectedIndex', 2)",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "image"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
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
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "maps": [],
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_9698FB36_8615_E74C_41D2_92524D90E48E); this.mainPlayList.set('selectedIndex', 6)",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "image"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
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
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "maps": [],
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_96401B04_8615_E74C_41BD_9E717B86C56E); this.mainPlayList.set('selectedIndex', 7)",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "image"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
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
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "maps": [],
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_968A9B44_8615_E7CC_41D3_310A0215EA2E); this.mainPlayList.set('selectedIndex', 3)",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "image"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
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
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "yaw": -108.98,
                                    "class": "LensFlarePanoramaOverlay",
                                    "pitch": 44.67,
                                    "id": "overlay_39E9E5BE_37C2_E4C0_41C8_ED2101A9B7E1",
                                    "bleachingDistance": 0.4,
                                    "bleaching": 0.7
                                   },
                                   {
                                    "yaw": 14.17,
                                    "class": "LensFlarePanoramaOverlay",
                                    "pitch": 28.8,
                                    "id": "overlay_39F9CEF7_37C2_E441_4193_83EA81D1DE6F",
                                    "bleachingDistance": 0.4,
                                    "bleaching": 0.7
                                   }
                                  ],
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_t.jpg"
                                 }
                                ],
                                "label": "asensores",
                                "id": "panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                                "cardboardMenu": "this.Menu_965238FB_8615_E2C4_41E0_B690DE45C316",
                                "pitch": 0,
                                "hfovMax": 120,
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
                                "thumbnailUrl": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_t.jpg",
                                "hfovMin": 100,
                                "hfov": 360,
                                "class": "Panorama",
                                "adjacentPanoramas": [
                                 {
                                  "backwardYaw": -3.13,
                                  "yaw": -16.11,
                                  "distance": 1,
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "frames": [
                                    {
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
                                     },
                                     "overlays": [
                                      {
                                       "maps": [],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_96C39BA9_8615_E745_41D1_D558E64BFC4D); this.mainPlayList.set('selectedIndex', 16)",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "image"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
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
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "maps": [],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175, this.camera_96D2FB94_8615_E74C_41DE_0DBEBBCF24B8); this.mainPlayList.set('selectedIndex', 15)",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "image"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
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
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      }
                                     ],
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_t.jpg"
                                    }
                                   ],
                                   "label": "Parking Garage",
                                   "id": "panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
                                   "cardboardMenu": "this.Menu_965238FB_8615_E2C4_41E0_B690DE45C316",
                                   "pitch": 0,
                                   "hfovMax": 120,
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
                                   "thumbnailUrl": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_t.jpg",
                                   "hfovMin": 100,
                                   "hfov": 360,
                                   "class": "Panorama",
                                   "adjacentPanoramas": [
                                    {
                                     "backwardYaw": -61.02,
                                     "yaw": 99.63,
                                     "distance": 1,
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "frames": [
                                       {
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
                                        },
                                        "overlays": [
                                         {
                                          "maps": [],
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_89B15A4F_8615_E1DC_41D0_FD59F6E5AD5D); this.mainPlayList.set('selectedIndex', 7)",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "image"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
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
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "yaw": 95.38,
                                          "class": "LensFlarePanoramaOverlay",
                                          "pitch": 16.72,
                                          "id": "overlay_39DF8AEE_37C2_AC40_417A_6242CBF48B68",
                                          "bleachingDistance": 0.4,
                                          "bleaching": 0.7
                                         }
                                        ],
                                        "class": "SphericPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_t.jpg"
                                       }
                                      ],
                                      "label": "parking2",
                                      "id": "panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
                                      "cardboardMenu": "this.Menu_965238FB_8615_E2C4_41E0_B690DE45C316",
                                      "pitch": 0,
                                      "hfovMax": 120,
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
                                      "thumbnailUrl": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_t.jpg",
                                      "hfovMin": 100,
                                      "hfov": 360,
                                      "class": "Panorama",
                                      "adjacentPanoramas": [
                                       {
                                        "backwardYaw": 99.63,
                                        "yaw": -61.02,
                                        "distance": 1,
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042"
                                       }
                                      ],
                                      "partial": false
                                     }
                                    },
                                    {
                                     "backwardYaw": -16.11,
                                     "yaw": -3.13,
                                     "distance": 1,
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F"
                                    }
                                   ],
                                   "partial": false
                                  }
                                 },
                                 {
                                  "backwardYaw": 87.33,
                                  "yaw": 32.92,
                                  "distance": 1,
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6"
                                 },
                                 {
                                  "backwardYaw": 27.08,
                                  "yaw": -166.68,
                                  "distance": 1,
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "frames": [
                                    {
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
                                     },
                                     "overlays": [
                                      {
                                       "maps": [],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_89D08A73_8615_E1C4_41C4_1CF927253189); this.mainPlayList.set('selectedIndex', 16)",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "image"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
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
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "yaw": -74.61,
                                       "class": "LensFlarePanoramaOverlay",
                                       "pitch": 59.4,
                                       "id": "overlay_FE341697_EE9B_B5BB_41CC_1DCF1E1B9FE9",
                                       "bleachingDistance": 0.4,
                                       "bleaching": 0.7
                                      },
                                      {
                                       "yaw": -13.79,
                                       "class": "LensFlarePanoramaOverlay",
                                       "pitch": 28.05,
                                       "id": "overlay_FE452B9D_EE9B_93AF_41C8_E05C00B1EC74",
                                       "bleachingDistance": 0.4,
                                       "bleaching": 0.7
                                      },
                                      {
                                       "yaw": -151.67,
                                       "class": "LensFlarePanoramaOverlay",
                                       "pitch": 31.07,
                                       "id": "overlay_FE59F0F5_EE9B_8D7F_41E8_C632466F366D",
                                       "bleachingDistance": 0.4,
                                       "bleaching": 0.7
                                      }
                                     ],
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_t.jpg"
                                    }
                                   ],
                                   "label": "Restrooms",
                                   "id": "panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
                                   "cardboardMenu": "this.Menu_965238FB_8615_E2C4_41E0_B690DE45C316",
                                   "pitch": 0,
                                   "hfovMax": 120,
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
                                   "thumbnailUrl": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_t.jpg",
                                   "hfovMin": 100,
                                   "hfov": 360,
                                   "class": "Panorama",
                                   "adjacentPanoramas": [
                                    {
                                     "backwardYaw": -166.68,
                                     "yaw": 27.08,
                                     "distance": 1,
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F"
                                    }
                                   ],
                                   "partial": false
                                  }
                                 },
                                 {
                                  "backwardYaw": -170.05,
                                  "yaw": -76.25,
                                  "distance": 1,
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "frames": [
                                    {
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
                                     "overlays": [
                                      {
                                       "maps": [],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_89EC1A9A_8615_E147_41C6_E2614DB127B4); this.mainPlayList.set('selectedIndex', 12)",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "image"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
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
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "maps": [],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_89E0FAA6_8615_E14C_41D7_3AECD6F3F22D); this.mainPlayList.set('selectedIndex', 13)",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "image"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
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
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "maps": [],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_9613CAB0_8615_E144_41A7_5036C4BCE91F); this.mainPlayList.set('selectedIndex', 16)",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "image"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
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
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      }
                                     ],
                                     "class": "CubicPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_t.jpg"
                                    }
                                   ],
                                   "label": "Empty Shell",
                                   "id": "panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
                                   "cardboardMenu": "this.Menu_965238FB_8615_E2C4_41E0_B690DE45C316",
                                   "pitch": 0,
                                   "hfovMax": 120,
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
                                   "thumbnailUrl": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_t.jpg",
                                   "hfovMin": 100,
                                   "hfov": 360,
                                   "class": "Panorama",
                                   "adjacentPanoramas": [
                                    {
                                     "backwardYaw": 39.43,
                                     "yaw": -134.96,
                                     "distance": 1,
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "frames": [
                                       {
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
                                        "overlays": [
                                         {
                                          "maps": [],
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_89C0DDBF_8615_E2BC_41DF_B3884B4AE1BA); this.mainPlayList.set('selectedIndex', 6)",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "image"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
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
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "maps": [],
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_89F57DCB_8615_E2C4_4190_E1D469E7DEC1); this.mainPlayList.set('selectedIndex', 14)",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "image"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
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
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         }
                                        ],
                                        "class": "CubicPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_t.jpg"
                                       }
                                      ],
                                      "label": "18",
                                      "id": "panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
                                      "cardboardMenu": "this.Menu_965238FB_8615_E2C4_41E0_B690DE45C316",
                                      "pitch": 0,
                                      "hfovMax": 120,
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
                                      "thumbnailUrl": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_t.jpg",
                                      "hfovMin": 100,
                                      "hfov": 360,
                                      "class": "Panorama",
                                      "adjacentPanoramas": [
                                       {
                                        "backwardYaw": -134.96,
                                        "yaw": 39.43,
                                        "distance": 1,
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F"
                                       },
                                       {
                                        "backwardYaw": -31.12,
                                        "yaw": 133.34,
                                        "distance": 1,
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "frames": [
                                          {
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
                                           "overlays": [
                                            {
                                             "maps": [],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_89C5CA7D_8615_E1BC_41DB_99C8F4D97D96); this.mainPlayList.set('selectedIndex', 12)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
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
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "maps": [],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_89F91A8F_8615_E15C_41D2_BE24BAB1CA50); this.mainPlayList.set('selectedIndex', 13)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
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
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "maps": [],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.mainPlayList.set('selectedIndex', 1)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
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
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            }
                                           ],
                                           "class": "CubicPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_t.jpg"
                                          }
                                         ],
                                         "label": "19",
                                         "id": "panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
                                         "cardboardMenu": "this.Menu_965238FB_8615_E2C4_41E0_B690DE45C316",
                                         "pitch": 0,
                                         "hfovMax": 120,
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
                                         "thumbnailUrl": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_t.jpg",
                                         "hfovMin": 100,
                                         "hfov": 360,
                                         "class": "Panorama",
                                         "adjacentPanoramas": [
                                          {
                                           "backwardYaw": 133.34,
                                           "yaw": -31.12,
                                           "distance": 1,
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9"
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6"
                                          },
                                          {
                                           "backwardYaw": -146.27,
                                           "yaw": 56.43,
                                           "distance": 1,
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "frames": [
                                             {
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
                                              "overlays": [
                                               {
                                                "maps": [],
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_977CDC4E_8615_E1DF_41E0_5085F5EC919B); this.mainPlayList.set('selectedIndex', 14)",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image"
                                                 }
                                                ],
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
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
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "maps": [],
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_974A2C39_8615_E144_41B5_D1B55D28D063); this.mainPlayList.set('selectedIndex', 6)",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image"
                                                 }
                                                ],
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
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
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               }
                                              ],
                                              "class": "CubicPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_t.jpg"
                                             }
                                            ],
                                            "label": "20",
                                            "id": "panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
                                            "cardboardMenu": "this.Menu_965238FB_8615_E2C4_41E0_B690DE45C316",
                                            "pitch": 0,
                                            "hfovMax": 120,
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
                                            "thumbnailUrl": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_t.jpg",
                                            "hfovMin": 100,
                                            "hfov": 360,
                                            "class": "Panorama",
                                            "adjacentPanoramas": [
                                             {
                                              "backwardYaw": 147.18,
                                              "yaw": -34.22,
                                              "distance": 1,
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F"
                                             },
                                             {
                                              "backwardYaw": 56.43,
                                              "yaw": -146.27,
                                              "distance": 1,
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09"
                                             }
                                            ],
                                            "partial": false
                                           }
                                          }
                                         ],
                                         "partial": false
                                        }
                                       }
                                      ],
                                      "partial": false
                                     }
                                    },
                                    {
                                     "backwardYaw": -34.22,
                                     "yaw": 147.18,
                                     "distance": 1,
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8"
                                    },
                                    {
                                     "backwardYaw": -76.25,
                                     "yaw": -170.05,
                                     "distance": 1,
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F"
                                    }
                                   ],
                                   "partial": false
                                  }
                                 },
                                 {
                                  "backwardYaw": 96.47,
                                  "yaw": -139.07,
                                  "distance": 1,
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "frames": [
                                    {
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
                                     "overlays": [
                                      {
                                       "maps": [],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_89AC1D8C_8615_E35C_41C7_B9CB13D9628D); this.mainPlayList.set('selectedIndex', 16)",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "image"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
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
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "maps": [],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_89B77D82_8615_E344_41D8_D9B547B16A34); this.mainPlayList.set('selectedIndex', 10)",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "image"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
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
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "yaw": -0.95,
                                       "class": "LensFlarePanoramaOverlay",
                                       "pitch": 19.14,
                                       "id": "overlay_D4BE7E36_DF66_3FBD_41E5_D711B6782282",
                                       "bleachingDistance": 0.4,
                                       "bleaching": 0.7
                                      },
                                      {
                                       "yaw": 164.38,
                                       "class": "LensFlarePanoramaOverlay",
                                       "pitch": 17.62,
                                       "id": "overlay_D4BB02EB_DF66_04AB_41E7_314E72AF48E7",
                                       "bleachingDistance": 0.4,
                                       "bleaching": 0.7
                                      }
                                     ],
                                     "class": "CubicPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_t.jpg"
                                    }
                                   ],
                                   "label": "Main Floor",
                                   "id": "panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
                                   "cardboardMenu": "this.Menu_965238FB_8615_E2C4_41E0_B690DE45C316",
                                   "pitch": 0,
                                   "hfovMax": 120,
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
                                   "thumbnailUrl": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_t.jpg",
                                   "hfovMin": 100,
                                   "hfov": 360,
                                   "class": "Panorama",
                                   "adjacentPanoramas": [
                                    {
                                     "backwardYaw": 3.46,
                                     "yaw": -176.41,
                                     "distance": 1,
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "frames": [
                                       {
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
                                        "overlays": [
                                         {
                                          "maps": [],
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_961E2DDF_8615_E2FC_41CA_A36B5ED78FC0); this.mainPlayList.set('selectedIndex', 3)",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "image"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
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
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "maps": [],
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_89EA2DD5_8615_E2CC_41D8_859A79326CE8); this.mainPlayList.set('selectedIndex', 11)",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "image"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
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
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "yaw": -0.57,
                                          "class": "LensFlarePanoramaOverlay",
                                          "pitch": 16.86,
                                          "id": "overlay_D364F048_DF66_03D5_41E1_5EA3BC9637F0",
                                          "bleachingDistance": 0.4,
                                          "bleaching": 0.7
                                         },
                                         {
                                          "yaw": 164.38,
                                          "class": "LensFlarePanoramaOverlay",
                                          "pitch": 16.1,
                                          "id": "overlay_D37D2F7A_DF66_1DB5_41C0_1FB80896FEB3",
                                          "bleachingDistance": 0.4,
                                          "bleaching": 0.7
                                         }
                                        ],
                                        "class": "CubicPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_t.jpg"
                                       }
                                      ],
                                      "label": "9",
                                      "id": "panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
                                      "cardboardMenu": "this.Menu_965238FB_8615_E2C4_41E0_B690DE45C316",
                                      "pitch": 0,
                                      "hfovMax": 120,
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
                                      "thumbnailUrl": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_t.jpg",
                                      "hfovMin": 80,
                                      "hfov": 360,
                                      "class": "Panorama",
                                      "adjacentPanoramas": [
                                       {
                                        "backwardYaw": -85.38,
                                        "yaw": 99.45,
                                        "distance": 1,
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "frames": [
                                          {
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
                                           "overlays": [
                                            {
                                             "maps": [],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_96E6BBC7_8615_E6CC_41E0_BED5B106C2EF); this.mainPlayList.set('selectedIndex', 10)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
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
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "maps": [],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_96F41BB3_8615_E744_41CE_B2E7D8ACB5E4); this.mainPlayList.set('selectedIndex', 5)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
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
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "maps": [],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.showPopupPanoramaOverlay(this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':50,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#FFFFFF','rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, this.ImageResource_D082516E_DCEA_7368_41CB_9D0CFA830713, null, null, null, null, false)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
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
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "rotationY": 0,
                                             "showDuration": 500,
                                             "popupDistance": 100,
                                             "rotationZ": 0,
                                             "hideDuration": 500,
                                             "id": "popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
                                             "popupMaxHeight": "95%",
                                             "rotationX": 0,
                                             "hfov": 8.22,
                                             "hideEasing": "cubic_out",
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
                                             "popupMaxWidth": "95%",
                                             "yaw": -36.13,
                                             "class": "PopupPanoramaOverlay",
                                             "showEasing": "cubic_in"
                                            },
                                            {
                                             "maps": [],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.showPopupPanoramaOverlay(this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':50,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#FFFFFF','rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, this.ImageResource_D38C2C6E_DFA1_73F8_41C3_8C1C155D72CB, null, null, null, null, false)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
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
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "maps": [],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.showPopupPanoramaOverlay(this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':50,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#FFFFFF','rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, this.ImageResource_D09DC170_DCEA_7378_41EB_423962A6DDEA, null, null, null, null, false)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
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
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "rotationY": 0,
                                             "showDuration": 500,
                                             "popupDistance": 100,
                                             "rotationZ": 0,
                                             "hideDuration": 500,
                                             "id": "popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
                                             "popupMaxHeight": "95%",
                                             "rotationX": 0,
                                             "hfov": 8.24,
                                             "hideEasing": "cubic_out",
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
                                             "popupMaxWidth": "95%",
                                             "yaw": 102.19,
                                             "class": "PopupPanoramaOverlay",
                                             "showEasing": "cubic_in"
                                            },
                                            {
                                             "yaw": 4,
                                             "class": "LensFlarePanoramaOverlay",
                                             "pitch": 29.81,
                                             "id": "overlay_D4A17713_DF66_0D7B_41EA_88920C3D3D96",
                                             "bleachingDistance": 0.4,
                                             "bleaching": 0.7
                                            },
                                            {
                                             "yaw": 125.52,
                                             "class": "LensFlarePanoramaOverlay",
                                             "pitch": 33.62,
                                             "id": "overlay_D4BC6C09_DF66_0357_41CE_9C3B75EE1C61",
                                             "bleachingDistance": 0.4,
                                             "bleaching": 0.7
                                            },
                                            {
                                             "yaw": -105.71,
                                             "class": "LensFlarePanoramaOverlay",
                                             "pitch": 19.14,
                                             "id": "overlay_D4BAE022_DF66_0355_41EA_F8574F4021B9",
                                             "bleachingDistance": 0.4,
                                             "bleaching": 0.7
                                            },
                                            {
                                             "rotationY": 0,
                                             "showDuration": 500,
                                             "popupDistance": 100,
                                             "rotationZ": 0,
                                             "hideDuration": 500,
                                             "id": "popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
                                             "popupMaxHeight": "95%",
                                             "rotationX": 0,
                                             "hfov": 8.15,
                                             "hideEasing": "cubic_out",
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
                                             "popupMaxWidth": "95%",
                                             "yaw": -170.82,
                                             "class": "PopupPanoramaOverlay",
                                             "showEasing": "cubic_in"
                                            }
                                           ],
                                           "class": "CubicPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_t.jpg"
                                          }
                                         ],
                                         "label": "14",
                                         "id": "panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
                                         "cardboardMenu": "this.Menu_965238FB_8615_E2C4_41E0_B690DE45C316",
                                         "pitch": 0,
                                         "hfovMax": 120,
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
                                         "thumbnailUrl": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_t.jpg",
                                         "hfovMin": 80,
                                         "hfov": 360,
                                         "class": "Panorama",
                                         "adjacentPanoramas": [
                                          {
                                           "backwardYaw": -117.42,
                                           "yaw": 72.07,
                                           "distance": 1,
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "frames": [
                                             {
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
                                              "overlays": [
                                               {
                                                "maps": [],
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_8941B9F6_8615_E2CF_41E0_7724FDBF43D4); this.mainPlayList.set('selectedIndex', 11)",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image"
                                                 }
                                                ],
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
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
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "maps": [],
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "click": "this.startPanoramaWithCamera(this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D, this.camera_8976CA02_8615_E144_41D3_14BF298AF8EA); this.mainPlayList.set('selectedIndex', 4)",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image"
                                                 }
                                                ],
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
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
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               }
                                              ],
                                              "class": "CubicPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_t.jpg"
                                             }
                                            ],
                                            "label": "Conference Room",
                                            "id": "panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
                                            "cardboardMenu": "this.Menu_965238FB_8615_E2C4_41E0_B690DE45C316",
                                            "pitch": 0,
                                            "hfovMax": 120,
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
                                            "thumbnailUrl": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_t.jpg",
                                            "hfovMin": 100,
                                            "hfov": 360,
                                            "class": "Panorama",
                                            "adjacentPanoramas": [
                                             {
                                              "backwardYaw": 72.07,
                                              "yaw": -117.42,
                                              "distance": 1,
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A"
                                             },
                                             {
                                              "backwardYaw": -176.35,
                                              "yaw": 66.4,
                                              "distance": 1,
                                              "class": "AdjacentPanorama",
                                              "panorama": {
                                               "frames": [
                                                {
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
                                                 "overlays": [
                                                  {
                                                   "maps": [],
                                                   "rollOverDisplay": false,
                                                   "areas": [
                                                    {
                                                     "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_8955FD11_8615_E344_41AE_B7F12D89F60B); this.mainPlayList.set('selectedIndex', 5)",
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "image"
                                                    }
                                                   ],
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
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
                                                   "data": {
                                                    "label": "Image"
                                                   },
                                                   "enabledInCardboard": true
                                                  },
                                                  {
                                                   "maps": [],
                                                   "rollOverDisplay": false,
                                                   "areas": [
                                                    {
                                                     "click": "this.showPopupPanoramaOverlay(this.popup_D60305E4_DCEA_D39F_419B_D9B149482827, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':50,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#FFFFFF','rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, this.ImageResource_D09C8172_DCEA_737B_41C7_76727B821C90, null, null, null, null, false)",
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "image"
                                                    }
                                                   ],
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
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
                                                   "data": {
                                                    "label": "Image"
                                                   },
                                                   "enabledInCardboard": true
                                                  },
                                                  {
                                                   "rotationY": 0,
                                                   "showDuration": 500,
                                                   "popupDistance": 100,
                                                   "rotationZ": 0,
                                                   "hideDuration": 500,
                                                   "id": "popup_D60305E4_DCEA_D39F_419B_D9B149482827",
                                                   "popupMaxHeight": "95%",
                                                   "rotationX": 0,
                                                   "hfov": 8.23,
                                                   "hideEasing": "cubic_out",
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
                                                   "popupMaxWidth": "95%",
                                                   "yaw": 72.56,
                                                   "class": "PopupPanoramaOverlay",
                                                   "showEasing": "cubic_in"
                                                  }
                                                 ],
                                                 "class": "CubicPanoramaFrame",
                                                 "thumbnailUrl": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_t.jpg"
                                                }
                                               ],
                                               "label": "Dining Room",
                                               "id": "panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
                                               "cardboardMenu": "this.Menu_965238FB_8615_E2C4_41E0_B690DE45C316",
                                               "pitch": 0,
                                               "hfovMax": 120,
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
                                               "thumbnailUrl": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_t.jpg",
                                               "hfovMin": 100,
                                               "hfov": 360,
                                               "class": "Panorama",
                                               "adjacentPanoramas": [
                                                {
                                                 "backwardYaw": 66.4,
                                                 "yaw": -176.35,
                                                 "distance": 1,
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E"
                                                }
                                               ],
                                               "partial": false
                                              }
                                             }
                                            ],
                                            "partial": false
                                           }
                                          },
                                          {
                                           "backwardYaw": 99.45,
                                           "yaw": -85.38,
                                           "distance": 1,
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B"
                                          }
                                         ],
                                         "partial": false
                                        }
                                       },
                                       {
                                        "backwardYaw": -176.41,
                                        "yaw": 3.46,
                                        "distance": 1,
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0"
                                       }
                                      ],
                                      "partial": false
                                     }
                                    },
                                    {
                                     "backwardYaw": -139.07,
                                     "yaw": 96.47,
                                     "distance": 1,
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F"
                                    }
                                   ],
                                   "partial": false
                                  }
                                 }
                                ],
                                "partial": false
                               }
                              },
                              {
                               "backwardYaw": 176.9,
                               "yaw": -176.55,
                               "distance": 1,
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "frames": [
                                 {
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
                                  "overlays": [
                                   {
                                    "maps": [],
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_893429B0_8615_E344_41CB_548C5DAE92FF); this.mainPlayList.set('selectedIndex', 1)",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "image"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
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
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   }
                                  ],
                                  "class": "CubicPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_t.jpg"
                                 }
                                ],
                                "label": "3_1",
                                "id": "panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
                                "cardboardMenu": "this.Menu_965238FB_8615_E2C4_41E0_B690DE45C316",
                                "pitch": 0,
                                "hfovMax": 120,
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
                                "thumbnailUrl": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_t.jpg",
                                "hfovMin": 100,
                                "hfov": 360,
                                "class": "Panorama",
                                "adjacentPanoramas": [
                                 {
                                  "backwardYaw": -176.55,
                                  "yaw": 176.9,
                                  "distance": 1,
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6"
                                 }
                                ],
                                "partial": false
                               }
                              },
                              {
                               "backwardYaw": -59.69,
                               "yaw": -91.85,
                               "distance": 1,
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09"
                              }
                             ],
                             "partial": false
                            }
                           },
                           {
                            "backwardYaw": 41.3,
                            "yaw": 150.05,
                            "distance": 1,
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "frames": [
                              {
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_hq.jpeg",
                                  "width": 6434,
                                  "tags": [
                                   "oculusgo",
                                   "ipadpro"
                                  ],
                                  "class": "ImageResourceLevel",
                                  "height": 3217
                                 },
                                 {
                                  "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677.jpeg",
                                  "width": 4002,
                                  "class": "ImageResourceLevel",
                                  "height": 2001
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_0_0_0_map.gif",
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "hfov": 5.92,
                                   "yaw": 150.13,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 0.8
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714, this.camera_89936A2C_8615_E15C_41D2_05EFF77CB92A); this.mainPlayList.set('selectedIndex', 0)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.92,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_0_0.png",
                                      "width": 105,
                                      "class": "ImageResourceLevel",
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": 0.8,
                                   "yaw": 150.13
                                  }
                                 ],
                                 "id": "overlay_141C837B_1A3F_A892_41B1_D62D2C270786",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_1_0_0_map.gif",
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "hfov": 5.92,
                                   "yaw": 41.3,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -2.08
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_89BC3A40_8615_E1C4_41DB_2B2F63B3FBD7); this.setMediaBehaviour(this.playList_961498A6_8615_E14C_41D3_04B28978C107, 0, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.92,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_1_0.png",
                                      "width": 105,
                                      "class": "ImageResourceLevel",
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": -2.08,
                                   "yaw": 41.3
                                  }
                                 ],
                                 "id": "overlay_14FCE98C_1A38_D876_41A2_FBAB1A82AA38",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_2_0_0_map.gif",
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "hfov": 5.9,
                                   "yaw": -25.53,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -5.35
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_89881A36_8615_E14F_41D9_676DB0C83946); this.setMediaBehaviour(this.playList_960A18B5_8615_E14C_41AD_98470B3DFDD7, 0, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.9,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_2_0.png",
                                      "width": 105,
                                      "class": "ImageResourceLevel",
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": -5.35,
                                   "yaw": -25.53
                                  }
                                 ],
                                 "id": "overlay_1504A38A_1AA1_9BB9_41A4_59E6AD12A17D",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_3_0_0_map.gif",
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "hfov": 5.92,
                                   "yaw": 81.82,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 0.15
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.showPopupPanoramaOverlay(this.popup_3AF279F7_20F8_9425_41B8_727B1C05B69A, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#000000','rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_095FC95D_2068_946A_41A5_88BA52F0CF59, null, null, null, null, false)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.92,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_3_0.png",
                                      "width": 105,
                                      "class": "ImageResourceLevel",
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": 0.15,
                                   "yaw": 81.82
                                  }
                                 ],
                                 "id": "overlay_3A3F00CC_20F8_946A_41A7_92092B2FF4A5",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "rotationY": 0,
                                 "showDuration": 500,
                                 "popupDistance": 100,
                                 "rotationZ": 0,
                                 "hideDuration": 500,
                                 "id": "popup_3AF279F7_20F8_9425_41B8_727B1C05B69A",
                                 "popupMaxHeight": "95%",
                                 "rotationX": 0,
                                 "hfov": 5.92,
                                 "hideEasing": "cubic_out",
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "url": "media/popup_3AF279F7_20F8_9425_41B8_727B1C05B69A_0_1.jpg",
                                    "width": 1024,
                                    "class": "ImageResourceLevel",
                                    "height": 682
                                   }
                                  ]
                                 },
                                 "pitch": 0.15,
                                 "popupMaxWidth": "95%",
                                 "yaw": 81.82,
                                 "class": "PopupPanoramaOverlay",
                                 "showEasing": "cubic_in"
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_4_0_0_map.gif",
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "hfov": 5.21,
                                   "yaw": -16.74,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 28.31
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.21,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_4_0.png",
                                      "width": 105,
                                      "class": "ImageResourceLevel",
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": 28.31,
                                   "yaw": -16.74
                                  }
                                 ],
                                 "id": "overlay_019BD876_2028_9426_4190_6C82CB626EB3",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                }
                               ],
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_t.jpg"
                              }
                             ],
                             "label": "1.2-Main Entrance",
                             "id": "panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
                             "pitch": 0,
                             "hfovMax": 130,
                             "vfov": 180,
                             "thumbnailUrl": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_t.jpg",
                             "hfovMin": 100,
                             "hfov": 360,
                             "class": "Panorama",
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
                              },
                              {
                               "backwardYaw": -19.33,
                               "yaw": 150.13,
                               "distance": 1,
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714"
                              },
                              {
                               "backwardYaw": 174.57,
                               "yaw": -25.53,
                               "distance": 1,
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B"
                              },
                              {
                               "backwardYaw": 150.05,
                               "yaw": 41.3,
                               "distance": 1,
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09"
                              }
                             ],
                             "partial": false
                            }
                           }
                          ],
                          "partial": false
                         }
                        },
                        {
                         "backwardYaw": 88.55,
                         "yaw": -78.27,
                         "distance": 1,
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "frames": [
                           {
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_hq.jpeg",
                               "width": 6434,
                               "tags": [
                                "oculusgo",
                                "ipadpro"
                               ],
                               "class": "ImageResourceLevel",
                               "height": 3217
                              },
                              {
                               "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246.jpeg",
                               "width": 4002,
                               "class": "ImageResourceLevel",
                               "height": 2001
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_0_0_0_map.gif",
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ]
                                },
                                "hfov": 5.92,
                                "yaw": 88.55,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -2.03
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_892A19BD_8615_E2BC_41D0_539C5A1C0B50); this.setMediaBehaviour(this.playList_960A18B5_8615_E14C_41AD_98470B3DFDD7, 0, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.92,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_0_0.png",
                                   "width": 105,
                                   "class": "ImageResourceLevel",
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": -2.03,
                                "yaw": 88.55
                               }
                              ],
                              "id": "overlay_0F87F0EF_1AE3_4B00_41B1_E78788DE1BFA",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_1_0_0_map.gif",
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ]
                                },
                                "hfov": 5.9,
                                "yaw": -94.64,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -5.21
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_895F09CD_8615_E2DC_41CC_07615EB7A2E7); this.setMediaBehaviour(this.playList_960A98B5_8615_E14C_41CE_4E901B396B8A, 0, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.9,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_1_0.png",
                                   "width": 105,
                                   "class": "ImageResourceLevel",
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": -5.21,
                                "yaw": -94.64
                               }
                              ],
                              "id": "overlay_0FBACA90_1AE1_7F00_41A2_DEDEB5A439B2",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_2_0_0_map.gif",
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ]
                                },
                                "hfov": 5.84,
                                "yaw": -56.26,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 9.36
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.showPopupPanoramaOverlay(this.popup_3A305B90_20FB_94FB_4193_FEB3450979FC, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#000000','rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, null, null, null, null, null, false)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.84,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_2_0.png",
                                   "width": 105,
                                   "class": "ImageResourceLevel",
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": 9.36,
                                "yaw": -56.26
                               }
                              ],
                              "id": "overlay_3AE1C5BB_20F8_BC2E_41B5_14023BA58135",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "rotationY": 0,
                              "showDuration": 500,
                              "popupDistance": 100,
                              "rotationZ": 0,
                              "hideDuration": 500,
                              "id": "popup_3A305B90_20FB_94FB_4193_FEB3450979FC",
                              "popupMaxHeight": "95%",
                              "rotationX": 0,
                              "hfov": 5.84,
                              "hideEasing": "cubic_out",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "url": "media/popup_3A305B90_20FB_94FB_4193_FEB3450979FC_0_0.jpg",
                                 "width": 807,
                                 "class": "ImageResourceLevel",
                                 "height": 752
                                },
                                {
                                 "url": "media/popup_3A305B90_20FB_94FB_4193_FEB3450979FC_0_1.jpg",
                                 "width": 512,
                                 "class": "ImageResourceLevel",
                                 "height": 477
                                }
                               ]
                              },
                              "pitch": 9.36,
                              "popupMaxWidth": "95%",
                              "yaw": -56.26,
                              "class": "PopupPanoramaOverlay",
                              "showEasing": "cubic_in"
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_3_0_0_map.gif",
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ]
                                },
                                "hfov": 5.27,
                                "yaw": -148.61,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 27.18
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 10, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.27,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_3_0.png",
                                   "width": 105,
                                   "class": "ImageResourceLevel",
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": 27.18,
                                "yaw": -148.61
                               }
                              ],
                              "id": "overlay_034C27D3_205F_BC7D_4190_BF1D51573EA7",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_4_0_0_map.gif",
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ]
                                },
                                "hfov": 5.88,
                                "yaw": -50.51,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -6.52
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.showPopupPanoramaOverlay(this.popup_36258FF0_249D_EFED_41AB_54067BE4CE8C, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#000000','rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_32C8659C_24AE_9054_4187_C8E2724888E0, null, null, null, null, false)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.88,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_4_0.png",
                                   "width": 105,
                                   "class": "ImageResourceLevel",
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": -6.52,
                                "yaw": -50.51
                               }
                              ],
                              "id": "overlay_3690AC61_249D_B0EC_41C1_867DE64A0008",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "rotationY": 0,
                              "showDuration": 500,
                              "popupDistance": 100,
                              "rotationZ": 0,
                              "hideDuration": 500,
                              "id": "popup_36258FF0_249D_EFED_41AB_54067BE4CE8C",
                              "popupMaxHeight": "95%",
                              "rotationX": 0,
                              "hfov": 5.88,
                              "hideEasing": "cubic_out",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "url": "media/popup_36258FF0_249D_EFED_41AB_54067BE4CE8C_0_1.jpg",
                                 "width": 1024,
                                 "class": "ImageResourceLevel",
                                 "height": 682
                                }
                               ]
                              },
                              "pitch": -6.52,
                              "popupMaxWidth": "95%",
                              "yaw": -50.51,
                              "class": "PopupPanoramaOverlay",
                              "showEasing": "cubic_in"
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_5_0_0_map.gif",
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ]
                                },
                                "hfov": 5.92,
                                "yaw": -76.59,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 1.45
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.showPopupPanoramaOverlay(this.popup_36539A9C_24AE_9054_41AC_911079BB2A7C, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#000000','rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_32C8A59C_24AE_9054_41B0_230945BD42EC, null, null, null, null, false)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.92,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_5_0.png",
                                   "width": 105,
                                   "class": "ImageResourceLevel",
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": 1.45,
                                "yaw": -76.59
                               }
                              ],
                              "id": "overlay_3562069C_24AD_B054_41A5_FF17B3BEF357",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "rotationY": 0,
                              "showDuration": 500,
                              "popupDistance": 100,
                              "rotationZ": 0,
                              "hideDuration": 500,
                              "id": "popup_36539A9C_24AE_9054_41AC_911079BB2A7C",
                              "popupMaxHeight": "95%",
                              "rotationX": 0,
                              "hfov": 5.92,
                              "hideEasing": "cubic_out",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "url": "media/popup_36539A9C_24AE_9054_41AC_911079BB2A7C_0_1.jpg",
                                 "width": 1024,
                                 "class": "ImageResourceLevel",
                                 "height": 682
                                }
                               ]
                              },
                              "pitch": 1.45,
                              "popupMaxWidth": "95%",
                              "yaw": -76.59,
                              "class": "PopupPanoramaOverlay",
                              "showEasing": "cubic_in"
                             }
                            ],
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_t.jpg"
                           }
                          ],
                          "label": "11-Entre Edwards y Coloplast",
                          "id": "panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
                          "pitch": 0,
                          "hfovMax": 130,
                          "vfov": 180,
                          "thumbnailUrl": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_t.jpg",
                          "hfovMin": 100,
                          "hfov": 360,
                          "class": "Panorama",
                          "adjacentPanoramas": [
                           {
                            "backwardYaw": -78.27,
                            "yaw": 88.55,
                            "distance": 1,
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B"
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "frames": [
                              {
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_hq.jpeg",
                                  "width": 6434,
                                  "tags": [
                                   "oculusgo",
                                   "ipadpro"
                                  ],
                                  "class": "ImageResourceLevel",
                                  "height": 3217
                                 },
                                 {
                                  "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90.jpeg",
                                  "width": 4002,
                                  "class": "ImageResourceLevel",
                                  "height": 2001
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_0_0_0_map.gif",
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "hfov": 5.81,
                                   "yaw": -23.17,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 11.26
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8, this.camera_89426D2E_8615_E35C_41D7_55F3E2A6D8B6); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 8, this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.81,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_0_0.png",
                                      "width": 105,
                                      "class": "ImageResourceLevel",
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": 11.26,
                                   "yaw": -23.17
                                  }
                                 ],
                                 "id": "overlay_8D2BE4DA_820A_3852_41C4_953F6BBC31A7",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_1_0_0_map.gif",
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "hfov": 5.83,
                                   "yaw": -121.06,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 9.97
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F, this.camera_894DCD1C_8615_E37C_41D8_0086E32D050E); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 11, this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.83,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_1_0.png",
                                      "width": 105,
                                      "class": "ImageResourceLevel",
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": 9.97,
                                   "yaw": -121.06
                                  }
                                 ],
                                 "id": "overlay_8D2BF4DA_820A_3852_41D1_6DA1F4580975",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_2_0_0_map.gif",
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "hfov": 5.82,
                                   "yaw": -73.9,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 10.77
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94, this.camera_89779D3B_8615_E344_41CE_C774F6B1550D); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.82,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_2_0.png",
                                      "width": 105,
                                      "class": "ImageResourceLevel",
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": 10.77,
                                   "yaw": -73.9
                                  }
                                 ],
                                 "id": "overlay_8D2BD4DA_820A_3852_41BB_98EAF3E35F8D",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_5_0_0_map.gif",
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "hfov": 8.7,
                                   "yaw": -91.23,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -72.9
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.setMediaBehaviour(this.playList_960AF8B5_8615_E14C_41C2_2F112648E3E1, 0, this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.7,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_5_0.png",
                                      "width": 529,
                                      "class": "ImageResourceLevel",
                                      "height": 529
                                     }
                                    ]
                                   },
                                   "pitch": -72.9,
                                   "yaw": -91.23
                                  }
                                 ],
                                 "id": "overlay_8D2B14DF_820A_3852_41BE_9EA51FD889E9",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_6_0_0_map.gif",
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "hfov": 4.76,
                                   "yaw": -123.87,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -36.51
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 4.76,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_6_0.png",
                                      "width": 105,
                                      "class": "ImageResourceLevel",
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": -36.51,
                                   "yaw": -123.87
                                  }
                                 ],
                                 "id": "overlay_88AFE2DE_861C_66FC_41DD_2507ADE89A8A",
                                 "data": {
                                  "label": "Image"
                                 }
                                }
                               ],
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_t.jpg"
                              }
                             ],
                             "label": "IMG_20180114_182756_00_062-edit",
                             "id": "panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90",
                             "pitch": 0,
                             "hfovMax": 130,
                             "vfov": 180,
                             "thumbnailUrl": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_t.jpg",
                             "hfovMin": 100,
                             "hfov": 360,
                             "class": "Panorama",
                             "adjacentPanoramas": [
                              {
                               "backwardYaw": 125.87,
                               "yaw": -121.06,
                               "distance": 1,
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "frames": [
                                 {
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_hq.jpeg",
                                     "width": 6434,
                                     "tags": [
                                      "oculusgo",
                                      "ipadpro"
                                     ],
                                     "class": "ImageResourceLevel",
                                     "height": 3217
                                    },
                                    {
                                     "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F.jpeg",
                                     "width": 4002,
                                     "class": "ImageResourceLevel",
                                     "height": 2001
                                    }
                                   ]
                                  },
                                  "overlays": [
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_3_0_0_map.gif",
                                         "width": 16,
                                         "class": "ImageResourceLevel",
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "hfov": 5.66,
                                      "yaw": 82.6,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -50.37
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "click": "this.setMediaBehaviour(this.playList_963AD8CE_8615_E2DC_41D9_7465F25D6154, 0, this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F)",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 5.66,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_3_0.png",
                                         "width": 158,
                                         "class": "ImageResourceLevel",
                                         "height": 158
                                        }
                                       ]
                                      },
                                      "pitch": -50.37,
                                      "yaw": 82.6
                                     }
                                    ],
                                    "id": "overlay_92D34187_820A_38B2_41C6_4223C787B441",
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_4_0_0_map.gif",
                                         "width": 16,
                                         "class": "ImageResourceLevel",
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "hfov": 8.16,
                                      "yaw": 53.72,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -46.43
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "click": "this.showPopupPanoramaOverlay(this.popup_25AB8A34_3513_DE40_41C8_119007832823, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#000000','rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_232B696E_352D_BAC0_41B1_E8DFF9648419, null, null, null, null, false)",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 8.16,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_4_0.png",
                                         "width": 211,
                                         "class": "ImageResourceLevel",
                                         "height": 211
                                        }
                                       ]
                                      },
                                      "pitch": -46.43,
                                      "yaw": 53.72
                                     }
                                    ],
                                    "id": "overlay_92D35187_820A_38B2_41D5_8D1D32A1EB8A",
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "rotationY": 0,
                                    "showDuration": 500,
                                    "popupDistance": 100,
                                    "rotationZ": 0,
                                    "hideDuration": 500,
                                    "id": "popup_25AB8A34_3513_DE40_41C8_119007832823",
                                    "popupMaxHeight": "95%",
                                    "rotationX": 0,
                                    "hfov": 8.16,
                                    "hideEasing": "cubic_out",
                                    "image": {
                                     "class": "ImageResource",
                                     "levels": [
                                      {
                                       "url": "media/popup_25AB8A34_3513_DE40_41C8_119007832823_0_1.jpg",
                                       "width": 1024,
                                       "class": "ImageResourceLevel",
                                       "height": 573
                                      }
                                     ]
                                    },
                                    "pitch": -46.43,
                                    "popupMaxWidth": "95%",
                                    "yaw": 53.72,
                                    "class": "PopupPanoramaOverlay",
                                    "showEasing": "cubic_in"
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_5_0_0_map.gif",
                                         "width": 16,
                                         "class": "ImageResourceLevel",
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "hfov": 5.86,
                                      "yaw": 84.52,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": 8.19
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94, this.camera_895C9D07_8615_E34C_41B4_DAB5C59C7CCF); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F)",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 5.86,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_5_0.png",
                                         "width": 105,
                                         "class": "ImageResourceLevel",
                                         "height": 105
                                        }
                                       ]
                                      },
                                      "pitch": 8.19,
                                      "yaw": 84.52
                                     }
                                    ],
                                    "id": "overlay_88FE142D_861C_215C_41CC_731DBD310429",
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_6_0_0_map.gif",
                                         "width": 16,
                                         "class": "ImageResourceLevel",
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "hfov": 5.84,
                                      "yaw": 125.87,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": 9.37
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90, this.camera_89237CFD_8615_E2BC_41E0_C059E03E755D); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 10, this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F)",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 5.84,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_6_0.png",
                                         "width": 105,
                                         "class": "ImageResourceLevel",
                                         "height": 105
                                        }
                                       ]
                                      },
                                      "pitch": 9.37,
                                      "yaw": 125.87
                                     }
                                    ],
                                    "id": "overlay_8891C9B0_861F_E344_41DD_9B7FCBCFE18B",
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_7_0_0_map.gif",
                                         "width": 16,
                                         "class": "ImageResourceLevel",
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "hfov": 5.84,
                                      "yaw": 164.85,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": 9.21
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8, this.camera_89298CF0_8615_E2C4_41D2_EA69C0D868B2); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 8, this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F)",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 5.84,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_7_0.png",
                                         "width": 105,
                                         "class": "ImageResourceLevel",
                                         "height": 105
                                        }
                                       ]
                                      },
                                      "pitch": 9.21,
                                      "yaw": 164.85
                                     }
                                    ],
                                    "id": "overlay_88AE510C_861C_2343_41E0_75B9A97850D7",
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   }
                                  ],
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_t.jpg"
                                 }
                                ],
                                "label": "IMG_20180114_164030_00_037(Opci\u00f3n2)-edit",
                                "id": "panorama_92DCC187_820A_38B2_41E0_0245C2CF622F",
                                "pitch": 0,
                                "hfovMax": 130,
                                "vfov": 180,
                                "thumbnailUrl": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_t.jpg",
                                "hfovMin": 100,
                                "hfov": 360,
                                "class": "Panorama",
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "frames": [
                                    {
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_hq.jpeg",
                                        "width": 6434,
                                        "tags": [
                                         "oculusgo",
                                         "ipadpro"
                                        ],
                                        "class": "ImageResourceLevel",
                                        "height": 3217
                                       },
                                       {
                                        "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5.jpeg",
                                        "width": 4002,
                                        "class": "ImageResourceLevel",
                                        "height": 2001
                                       }
                                      ]
                                     },
                                     "overlays": [
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_0_0_0_map.gif",
                                            "width": 16,
                                            "class": "ImageResourceLevel",
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "hfov": 5.92,
                                         "yaw": 109.75,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -2.42
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525, this.camera_89A78A5E_8615_E1FC_41E0_6EBD57E34BBA); this.setMediaBehaviour(this.playList_960938B5_8615_E14C_41DA_25272CBC2E58, 0, this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5)",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.92,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_0_0.png",
                                            "width": 105,
                                            "class": "ImageResourceLevel",
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": -2.42,
                                         "yaw": 109.75
                                        }
                                       ],
                                       "id": "overlay_6B6299CB_64A7_866E_41B2_B25C63FF2DAB",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_1_0_0_map.gif",
                                            "width": 16,
                                            "class": "ImageResourceLevel",
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "hfov": 5.92,
                                         "yaw": 21.18,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -1.96
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368, this.camera_89DB9A69_8615_E1C5_41D8_3DCAFD7132BC); this.setMediaBehaviour(this.playList_960998B5_8615_E14C_41DF_6388137003A2, 0, this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5)",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.92,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_1_0.png",
                                            "width": 105,
                                            "class": "ImageResourceLevel",
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": -1.96,
                                         "yaw": 21.18
                                        }
                                       ],
                                       "id": "overlay_746F0EE4_64A4_FA5A_41C6_4B55C78675E3",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_2_0_0_map.gif",
                                            "width": 16,
                                            "class": "ImageResourceLevel",
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "hfov": 5.9,
                                         "yaw": 95.76,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -4.32
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "click": "this.showPopupPanoramaOverlay(this.popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#000000','rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_72699DCF_64A4_9E66_417A_2D9BA948AEB2, null, null, null, null, false)",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.9,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_2_0.png",
                                            "width": 105,
                                            "class": "ImageResourceLevel",
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": -4.32,
                                         "yaw": 95.76
                                        }
                                       ],
                                       "id": "overlay_76C3634B_64AC_8A6E_41D8_69DA9A55BC14",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "rotationY": 0,
                                       "showDuration": 500,
                                       "popupDistance": 100,
                                       "rotationZ": 0,
                                       "hideDuration": 500,
                                       "id": "popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8",
                                       "popupMaxHeight": "95%",
                                       "rotationX": 0,
                                       "hfov": 5.9,
                                       "hideEasing": "cubic_out",
                                       "image": {
                                        "class": "ImageResource",
                                        "levels": [
                                         {
                                          "url": "media/popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8_0_1.jpg",
                                          "width": 1024,
                                          "class": "ImageResourceLevel",
                                          "height": 682
                                         }
                                        ]
                                       },
                                       "pitch": -4.32,
                                       "popupMaxWidth": "95%",
                                       "yaw": 95.76,
                                       "class": "PopupPanoramaOverlay",
                                       "showEasing": "cubic_in"
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_3_0_0_map.gif",
                                            "width": 16,
                                            "class": "ImageResourceLevel",
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "hfov": 6.52,
                                         "yaw": -116.66,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": 42.73
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 11, this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5)",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 6.52,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_3_0.png",
                                            "width": 158,
                                            "class": "ImageResourceLevel",
                                            "height": 158
                                           }
                                          ]
                                         },
                                         "pitch": 42.73,
                                         "yaw": -116.66
                                        }
                                       ],
                                       "id": "overlay_7081F47D_64AC_8E2A_41B0_7F938951B55C",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      }
                                     ],
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_t.jpg"
                                    }
                                   ],
                                   "label": "15-Esquina Heraus",
                                   "id": "panorama_69A80F4D_649D_BA6A_4181_FB07157852B5",
                                   "pitch": 0,
                                   "hfovMax": 120,
                                   "vfov": 180,
                                   "thumbnailUrl": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_t.jpg",
                                   "hfovMin": 100,
                                   "hfov": 360,
                                   "class": "Panorama",
                                   "adjacentPanoramas": [
                                    {
                                     "backwardYaw": 99.68,
                                     "yaw": 109.75,
                                     "distance": 1,
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "frames": [
                                       {
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_hq.jpeg",
                                           "width": 6434,
                                           "tags": [
                                            "oculusgo",
                                            "ipadpro"
                                           ],
                                           "class": "ImageResourceLevel",
                                           "height": 3217
                                          },
                                          {
                                           "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525.jpeg",
                                           "width": 4002,
                                           "class": "ImageResourceLevel",
                                           "height": 2001
                                          }
                                         ]
                                        },
                                        "overlays": [
                                         {
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_0_0_0_map.gif",
                                               "width": 16,
                                               "class": "ImageResourceLevel",
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "hfov": 5.92,
                                            "yaw": -95.46,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -1.9
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_96043DF6_8615_E2CC_41CD_3459CC6BA20F); this.setMediaBehaviour(this.playList_960A98B5_8615_E14C_41CE_4E901B396B8A, 0, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 5.92,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_0_0.png",
                                               "width": 105,
                                               "class": "ImageResourceLevel",
                                               "height": 105
                                              }
                                             ]
                                            },
                                            "pitch": -1.9,
                                            "yaw": -95.46
                                           }
                                          ],
                                          "id": "overlay_0FB017A6_1FE8_BC27_41AF_F1D0B02F7726",
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_1_0_0_map.gif",
                                               "width": 16,
                                               "class": "ImageResourceLevel",
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "hfov": 5.92,
                                            "yaw": 99.68,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -2.52
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5, this.camera_96126DEC_8615_E2DC_41D2_037BDA0417C4); this.setMediaBehaviour(this.playList_963AD8CE_8615_E2DC_41D9_7465F25D6154, 0, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 5.92,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_1_0.png",
                                               "width": 105,
                                               "class": "ImageResourceLevel",
                                               "height": 105
                                              }
                                             ]
                                            },
                                            "pitch": -2.52,
                                            "yaw": 99.68
                                           }
                                          ],
                                          "id": "overlay_0EAE3862_1FEF_B45E_41AE_199087399F1A",
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_2_0_0_map.gif",
                                               "width": 16,
                                               "class": "ImageResourceLevel",
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "hfov": 4.48,
                                            "yaw": 92,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": 40.89
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 11, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 4.48,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_2_0.png",
                                               "width": 105,
                                               "class": "ImageResourceLevel",
                                               "height": 105
                                              }
                                             ]
                                            },
                                            "pitch": 40.89,
                                            "yaw": 92
                                           }
                                          ],
                                          "id": "overlay_0468197D_2059_7425_41B5_13CA67FE1091",
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         }
                                        ],
                                        "class": "SphericPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_t.jpg"
                                       }
                                      ],
                                      "label": "14-Entre Zollner y Heraus",
                                      "id": "panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
                                      "pitch": 0,
                                      "mapLocations": [
                                       {
                                        "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                        "x": 82.45,
                                        "angle": -78.76,
                                        "class": "PanoramaMapLocation",
                                        "y": 218.05
                                       }
                                      ],
                                      "hfovMax": 130,
                                      "vfov": 180,
                                      "thumbnailUrl": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_t.jpg",
                                      "hfovMin": 100,
                                      "hfov": 360,
                                      "class": "Panorama",
                                      "adjacentPanoramas": [
                                       {
                                        "backwardYaw": 109.75,
                                        "yaw": 99.68,
                                        "distance": 1,
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5"
                                       },
                                       {
                                        "backwardYaw": 79.43,
                                        "yaw": -95.46,
                                        "distance": 1,
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "frames": [
                                          {
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_hq.jpeg",
                                              "width": 6434,
                                              "tags": [
                                               "oculusgo",
                                               "ipadpro"
                                              ],
                                              "class": "ImageResourceLevel",
                                              "height": 3217
                                             },
                                             {
                                              "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7.jpeg",
                                              "width": 4002,
                                              "class": "ImageResourceLevel",
                                              "height": 2001
                                             }
                                            ]
                                           },
                                           "overlays": [
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_0_0_0_map.gif",
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "height": 16
                                                 }
                                                ]
                                               },
                                               "hfov": 5.9,
                                               "yaw": 179.05,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -4.4
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246, this.camera_89A1AD99_8615_E344_41DF_463BC6DEDE6D); this.setMediaBehaviour(this.playList_9601F8BF_8615_E2BC_41BD_0C865053920F, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 5.9,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_0_0.png",
                                                  "width": 105,
                                                  "class": "ImageResourceLevel",
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": -4.4,
                                               "yaw": 179.05
                                              }
                                             ],
                                             "id": "overlay_0CCF7EED_1AE7_F700_4193_75795E2C9EA0",
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_1_0_0_map.gif",
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "height": 16
                                                 }
                                                ]
                                               },
                                               "hfov": 5.92,
                                               "yaw": 79.43,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -0.99
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525, this.camera_89D7FDA6_8615_E34C_41E0_1EDFB71765DF); this.setMediaBehaviour(this.playList_960938B5_8615_E14C_41DA_25272CBC2E58, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 5.92,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_1_0.png",
                                                  "width": 105,
                                                  "class": "ImageResourceLevel",
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": -0.99,
                                               "yaw": 79.43
                                              }
                                             ],
                                             "id": "overlay_0C21DAC6_1AA3_5F03_4176_5DA7616EB4A4",
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_2_0_0_map.gif",
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "height": 16
                                                 }
                                                ]
                                               },
                                               "hfov": 5.92,
                                               "yaw": -90.48,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -1.59
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E, this.camera_89CBDDB0_8615_E344_41DA_DC4EE2DFE2D8); this.setMediaBehaviour(this.playList_960AF8B5_8615_E14C_41C2_2F112648E3E1, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 5.92,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_2_0.png",
                                                  "width": 105,
                                                  "class": "ImageResourceLevel",
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": -1.59,
                                               "yaw": -90.48
                                              }
                                             ],
                                             "id": "overlay_38B9BC59_2028_AC6A_41AE_2C7905BA9A19",
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_3_0_0_map.gif",
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "height": 16
                                                 }
                                                ]
                                               },
                                               "hfov": 5.82,
                                               "yaw": 32.81,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": 10.53
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.showPopupPanoramaOverlay(this.popup_3A3C822F_20F8_9425_41B2_B5F3B1085960, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#000000','rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_0AAA2971_2068_943D_41B4_10DFF5B38D1B, null, null, null, null, false)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 5.82,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_3_0.png",
                                                  "width": 105,
                                                  "class": "ImageResourceLevel",
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": 10.53,
                                               "yaw": 32.81
                                              }
                                             ],
                                             "id": "overlay_3AE247CE_20F8_FC66_41BD_400C31C50BE9",
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "rotationY": 0,
                                             "showDuration": 500,
                                             "popupDistance": 100,
                                             "rotationZ": 0,
                                             "hideDuration": 500,
                                             "id": "popup_3A3C822F_20F8_9425_41B2_B5F3B1085960",
                                             "popupMaxHeight": "95%",
                                             "rotationX": 0,
                                             "hfov": 5.82,
                                             "hideEasing": "cubic_out",
                                             "image": {
                                              "class": "ImageResource",
                                              "levels": [
                                               {
                                                "url": "media/popup_3A3C822F_20F8_9425_41B2_B5F3B1085960_0_1.jpg",
                                                "width": 1024,
                                                "class": "ImageResourceLevel",
                                                "height": 682
                                               }
                                              ]
                                             },
                                             "pitch": 10.53,
                                             "popupMaxWidth": "95%",
                                             "yaw": 32.81,
                                             "class": "PopupPanoramaOverlay",
                                             "showEasing": "cubic_in"
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_4_0_0_map.gif",
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "height": 16
                                                 }
                                                ]
                                               },
                                               "hfov": 5.34,
                                               "yaw": -84.07,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": 25.67
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 10, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 5.34,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_4_0.png",
                                                  "width": 105,
                                                  "class": "ImageResourceLevel",
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": 25.67,
                                               "yaw": -84.07
                                              }
                                             ],
                                             "id": "overlay_04A14CB0_2058_AC3A_41B5_4627074CA778",
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_5_0_0_map.gif",
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "height": 16
                                                 }
                                                ]
                                               },
                                               "hfov": 5.1,
                                               "yaw": 76.78,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": 30.52
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 11, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 5.1,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_5_0.png",
                                                  "width": 105,
                                                  "class": "ImageResourceLevel",
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": 30.52,
                                               "yaw": 76.78
                                              }
                                             ],
                                             "id": "overlay_04CC30D3_2059_947D_41A8_BC5DCD223313",
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_6_0_0_map.gif",
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "height": 16
                                                 }
                                                ]
                                               },
                                               "hfov": 5.66,
                                               "yaw": -32.7,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": 17.08
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.showPopupPanoramaOverlay(this.popup_3638CA38_249B_905C_41B3_EA26EB9333F0, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#000000','rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_32CC759C_24AE_9054_419F_511B2D533327, null, null, null, null, false)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 5.66,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_6_0.png",
                                                  "width": 105,
                                                  "class": "ImageResourceLevel",
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": 17.08,
                                               "yaw": -32.7
                                              }
                                             ],
                                             "id": "overlay_369A2505_249A_9034_41B6_15BA718D5598",
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "rotationY": 0,
                                             "showDuration": 500,
                                             "popupDistance": 100,
                                             "rotationZ": 0,
                                             "hideDuration": 500,
                                             "id": "popup_3638CA38_249B_905C_41B3_EA26EB9333F0",
                                             "popupMaxHeight": "95%",
                                             "rotationX": 0,
                                             "hfov": 5.66,
                                             "hideEasing": "cubic_out",
                                             "image": {
                                              "class": "ImageResource",
                                              "levels": [
                                               {
                                                "url": "media/popup_3638CA38_249B_905C_41B3_EA26EB9333F0_0_1.jpg",
                                                "width": 1024,
                                                "class": "ImageResourceLevel",
                                                "height": 580
                                               }
                                              ]
                                             },
                                             "pitch": 17.08,
                                             "popupMaxWidth": "95%",
                                             "yaw": -32.7,
                                             "class": "PopupPanoramaOverlay",
                                             "showEasing": "cubic_in"
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_7_0_0_map.gif",
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "height": 16
                                                 }
                                                ]
                                               },
                                               "hfov": 5.91,
                                               "yaw": 101.53,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -4.09
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.showPopupPanoramaOverlay(this.popup_369EF53B_249A_B05C_41BC_AE1E970C16EA, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'iconColor':'#000000','rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_32CD359C_24AE_9054_41BC_CF812CF11760, null, null, null, null, false)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 5.91,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_7_0.png",
                                                  "width": 105,
                                                  "class": "ImageResourceLevel",
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": -4.09,
                                               "yaw": 101.53
                                              }
                                             ],
                                             "id": "overlay_36DB0F2E_249A_9074_41B4_8E4380CB0F7A",
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "rotationY": 0,
                                             "showDuration": 500,
                                             "popupDistance": 100,
                                             "rotationZ": 0,
                                             "hideDuration": 500,
                                             "id": "popup_369EF53B_249A_B05C_41BC_AE1E970C16EA",
                                             "popupMaxHeight": "95%",
                                             "rotationX": 0,
                                             "hfov": 5.91,
                                             "hideEasing": "cubic_out",
                                             "image": {
                                              "class": "ImageResource",
                                              "levels": [
                                               {
                                                "url": "media/popup_369EF53B_249A_B05C_41BC_AE1E970C16EA_0_1.jpg",
                                                "width": 1024,
                                                "class": "ImageResourceLevel",
                                                "height": 682
                                               }
                                              ]
                                             },
                                             "pitch": -4.09,
                                             "popupMaxWidth": "95%",
                                             "yaw": 101.53,
                                             "class": "PopupPanoramaOverlay",
                                             "showEasing": "cubic_in"
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_9_0_0_map.gif",
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "height": 16
                                                 }
                                                ]
                                               },
                                               "hfov": 5.91,
                                               "yaw": -60.3,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": 3.49
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 5.91,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_9_0.png",
                                                  "width": 105,
                                                  "class": "ImageResourceLevel",
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": 3.49,
                                               "yaw": -60.3
                                              }
                                             ],
                                             "id": "overlay_88A858B7_861C_614C_41D7_302B57BA017B",
                                             "data": {
                                              "label": "Image"
                                             }
                                            }
                                           ],
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_t.jpg"
                                          }
                                         ],
                                         "label": "12-Entre Zollner y Coloplast",
                                         "id": "panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
                                         "pitch": 0,
                                         "mapLocations": [
                                          {
                                           "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                           "x": 89.75,
                                           "angle": 266.01,
                                           "class": "PanoramaMapLocation",
                                           "y": 307.7
                                          }
                                         ],
                                         "hfovMax": 130,
                                         "vfov": 180,
                                         "thumbnailUrl": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_t.jpg",
                                         "hfovMin": 100,
                                         "hfov": 360,
                                         "class": "Panorama",
                                         "adjacentPanoramas": [
                                          {
                                           "backwardYaw": -94.64,
                                           "yaw": 179.05,
                                           "distance": 1,
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246"
                                          },
                                          {
                                           "backwardYaw": -95.46,
                                           "yaw": 79.43,
                                           "distance": 1,
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525"
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90"
                                          },
                                          {
                                           "backwardYaw": -117.3,
                                           "yaw": -90.48,
                                           "distance": 1,
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "frames": [
                                             {
                                              "sphere": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_hq.jpeg",
                                                 "width": 6434,
                                                 "tags": [
                                                  "oculusgo",
                                                  "ipadpro"
                                                 ],
                                                 "class": "ImageResourceLevel",
                                                 "height": 3217
                                                },
                                                {
                                                 "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E.jpeg",
                                                 "width": 4002,
                                                 "class": "ImageResourceLevel",
                                                 "height": 2001
                                                }
                                               ]
                                              },
                                              "overlays": [
                                               {
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_0_0_0_map.gif",
                                                     "width": 16,
                                                     "class": "ImageResourceLevel",
                                                     "height": 16
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 5.9,
                                                  "yaw": -117.3,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "pitch": -4.38
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_96371E01_8615_E145_41A0_52C5C860F3AF); this.setMediaBehaviour(this.playList_960A98B5_8615_E14C_41CE_4E901B396B8A, 0, this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E)",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 5.9,
                                                  "distance": 50,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_0_0.png",
                                                     "width": 105,
                                                     "class": "ImageResourceLevel",
                                                     "height": 105
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -4.38,
                                                  "yaw": -117.3
                                                 }
                                                ],
                                                "id": "overlay_398BC00D_2028_B3E5_41A1_4D2435BCEAF9",
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_1_0_0_map.gif",
                                                     "width": 16,
                                                     "class": "ImageResourceLevel",
                                                     "height": 16
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 3.6,
                                                  "yaw": 62.4,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "pitch": 52.59
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 10, this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E)",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 3.6,
                                                  "distance": 50,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_1_0.png",
                                                     "width": 105,
                                                     "class": "ImageResourceLevel",
                                                     "height": 105
                                                    }
                                                   ]
                                                  },
                                                  "pitch": 52.59,
                                                  "yaw": 62.4
                                                 }
                                                ],
                                                "id": "overlay_07984367_2057_9426_41B6_282E6C99CB32",
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "maps": [],
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "click": "this.startPanoramaWithCamera(this.media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7, this.camera_5564A635_5884_E26A_41CD_F65940AE1D0F); this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false)",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image"
                                                 }
                                                ],
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 5.92,
                                                  "distance": 50,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_2_0.png",
                                                     "width": 105,
                                                     "class": "ImageResourceLevel",
                                                     "height": 105
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -2.4,
                                                  "yaw": -144.51
                                                 }
                                                ],
                                                "id": "overlay_0B2ACEE1_2079_EC5D_41A5_63855793A591",
                                                "data": {
                                                 "label": "Image"
                                                }
                                               }
                                              ],
                                              "class": "SphericPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_t.jpg"
                                             }
                                            ],
                                            "label": "helipuerto",
                                            "id": "panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
                                            "pitch": 0,
                                            "mapLocations": [
                                             {
                                              "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                              "x": 96.9,
                                              "angle": 122.43,
                                              "class": "PanoramaMapLocation",
                                              "y": 435.15
                                             }
                                            ],
                                            "hfovMax": 130,
                                            "vfov": 180,
                                            "thumbnailUrl": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_t.jpg",
                                            "hfovMin": 100,
                                            "hfov": 360,
                                            "class": "Panorama",
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90"
                                             },
                                             {
                                              "backwardYaw": -90.48,
                                              "yaw": -117.3,
                                              "distance": 1,
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7"
                                             }
                                            ],
                                            "partial": false
                                           }
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F"
                                          }
                                         ],
                                         "partial": false
                                        }
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F"
                                       }
                                      ],
                                      "partial": false
                                     }
                                    },
                                    {
                                     "backwardYaw": 72.35,
                                     "yaw": 21.18,
                                     "distance": 1,
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "frames": [
                                       {
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_hq.jpeg",
                                           "width": 6434,
                                           "tags": [
                                            "oculusgo",
                                            "ipadpro"
                                           ],
                                           "class": "ImageResourceLevel",
                                           "height": 3217
                                          },
                                          {
                                           "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368.jpeg",
                                           "width": 4002,
                                           "class": "ImageResourceLevel",
                                           "height": 2001
                                          }
                                         ]
                                        },
                                        "overlays": [
                                         {
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_0_0_0_map.gif",
                                               "width": 16,
                                               "class": "ImageResourceLevel",
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "hfov": 5.92,
                                            "yaw": 72.35,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -0.2
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5, this.camera_896ADA0E_8615_E15C_41D8_178FF77FC046); this.setMediaBehaviour(this.playList_963AD8CE_8615_E2DC_41D9_7465F25D6154, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 5.92,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_0_0.png",
                                               "width": 105,
                                               "class": "ImageResourceLevel",
                                               "height": 105
                                              }
                                             ]
                                            },
                                            "pitch": -0.2,
                                            "yaw": 72.35
                                           }
                                          ],
                                          "id": "overlay_0C999A3C_1FF8_B42A_41B2_78A976AB4804",
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_1_0_0_map.gif",
                                               "width": 16,
                                               "class": "ImageResourceLevel",
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "hfov": 5.9,
                                            "yaw": -112.38,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -4.59
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9, this.camera_899F2A18_8615_E144_41C9_58DD9D486C2D); this.setMediaBehaviour(this.playList_960888B5_8615_E14C_41D7_64C1B6BB69BC, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 5.9,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_1_0.png",
                                               "width": 105,
                                               "class": "ImageResourceLevel",
                                               "height": 105
                                              }
                                             ]
                                            },
                                            "pitch": -4.59,
                                            "yaw": -112.38
                                           }
                                          ],
                                          "id": "overlay_0B0D3357_1FF9_B465_41A7_A52733D8BBA6",
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_2_0_0_map.gif",
                                               "width": 16,
                                               "class": "ImageResourceLevel",
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "hfov": 4.28,
                                            "yaw": 82.3,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": 43.73
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 11, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 4.28,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_2_0.png",
                                               "width": 105,
                                               "class": "ImageResourceLevel",
                                               "height": 105
                                              }
                                             ]
                                            },
                                            "pitch": 43.73,
                                            "yaw": 82.3
                                           }
                                          ],
                                          "id": "overlay_0563FED1_2058_AC7D_41B4_554C5D71DDD6",
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_3_0_0_map.gif",
                                               "width": 16,
                                               "class": "ImageResourceLevel",
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "hfov": 4.46,
                                            "yaw": -106.31,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": 41.06
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 4.46,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_3_0.png",
                                               "width": 105,
                                               "class": "ImageResourceLevel",
                                               "height": 105
                                              }
                                             ]
                                            },
                                            "pitch": 41.06,
                                            "yaw": -106.31
                                           }
                                          ],
                                          "id": "overlay_075305AF_2059_9C26_4154_35D04C13FEEA",
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         }
                                        ],
                                        "class": "SphericPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_t.jpg"
                                       }
                                      ],
                                      "label": "8-Pastizal Atr\u00e1s",
                                      "id": "panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
                                      "pitch": 0,
                                      "mapLocations": [
                                       {
                                        "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                        "x": 188.3,
                                        "angle": 178.51,
                                        "class": "PanoramaMapLocation",
                                        "y": 137.95
                                       }
                                      ],
                                      "hfovMax": 130,
                                      "vfov": 180,
                                      "thumbnailUrl": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_t.jpg",
                                      "hfovMin": 100,
                                      "hfov": 360,
                                      "class": "Panorama",
                                      "adjacentPanoramas": [
                                       {
                                        "backwardYaw": 21.18,
                                        "yaw": 72.35,
                                        "distance": 1,
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5"
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
                                       },
                                       {
                                        "backwardYaw": 107.65,
                                        "yaw": -112.38,
                                        "distance": 1,
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "frames": [
                                          {
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_hq.jpeg",
                                              "width": 6434,
                                              "tags": [
                                               "oculusgo",
                                               "ipadpro"
                                              ],
                                              "class": "ImageResourceLevel",
                                              "height": 3217
                                             },
                                             {
                                              "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9.jpeg",
                                              "width": 4002,
                                              "class": "ImageResourceLevel",
                                              "height": 2001
                                             }
                                            ]
                                           },
                                           "overlays": [
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_0_0_0_map.gif",
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "height": 16
                                                 }
                                                ]
                                               },
                                               "hfov": 5.91,
                                               "yaw": 23.32,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -2.78
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E, this.camera_890AC995_8615_E34C_41C6_EB50CFDBD32F); this.setMediaBehaviour(this.playList_9609F8B5_8615_E14C_41E0_619014D78E72, 0, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 5.91,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_0_0.png",
                                                  "width": 105,
                                                  "class": "ImageResourceLevel",
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": -2.78,
                                               "yaw": 23.32
                                              }
                                             ],
                                             "id": "overlay_0E28870F_1AA3_FCB7_419D_633D3C55FE98",
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_1_0_0_map.gif",
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "height": 16
                                                 }
                                                ]
                                               },
                                               "hfov": 5.92,
                                               "yaw": 107.65,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -2.02
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368, this.camera_893FC9A4_8615_E343_4190_15AAA33F60CC); this.setMediaBehaviour(this.playList_960998B5_8615_E14C_41DF_6388137003A2, 0, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 5.92,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_1_0.png",
                                                  "width": 105,
                                                  "class": "ImageResourceLevel",
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": -2.02,
                                               "yaw": 107.65
                                              }
                                             ],
                                             "id": "overlay_0C1F6F55_1FE8_EC65_41B8_E66540C53853",
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_2_0_0_map.gif",
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "height": 16
                                                 }
                                                ]
                                               },
                                               "hfov": 1.81,
                                               "yaw": 102.37,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": 72.16
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 1.81,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_2_0.png",
                                                  "width": 105,
                                                  "class": "ImageResourceLevel",
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": 72.16,
                                               "yaw": 102.37
                                              }
                                             ],
                                             "id": "overlay_0317EC11_202B_B3FA_4176_A41CD4A39466",
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            }
                                           ],
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_t.jpg"
                                          }
                                         ],
                                         "label": "7-Centro Atr\u00e1s",
                                         "id": "panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
                                         "pitch": 0,
                                         "mapLocations": [
                                          {
                                           "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                           "x": 283,
                                           "angle": 176.01,
                                           "class": "PanoramaMapLocation",
                                           "y": 141
                                          }
                                         ],
                                         "hfovMax": 130,
                                         "vfov": 180,
                                         "thumbnailUrl": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_t.jpg",
                                         "hfovMin": 100,
                                         "hfov": 360,
                                         "class": "Panorama",
                                         "adjacentPanoramas": [
                                          {
                                           "backwardYaw": 139.43,
                                           "yaw": 23.32,
                                           "distance": 1,
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E"
                                          },
                                          {
                                           "backwardYaw": -112.38,
                                           "yaw": 107.65,
                                           "distance": 1,
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368"
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
                                          }
                                         ],
                                         "partial": false
                                        }
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F"
                                       }
                                      ],
                                      "partial": false
                                     }
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F"
                                    }
                                   ],
                                   "partial": false
                                  }
                                 },
                                 {
                                  "backwardYaw": -157.61,
                                  "yaw": 164.85,
                                  "distance": 1,
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8"
                                 },
                                 {
                                  "backwardYaw": -121.06,
                                  "yaw": 125.87,
                                  "distance": 1,
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90"
                                 },
                                 {
                                  "backwardYaw": 128.57,
                                  "yaw": 84.52,
                                  "distance": 1,
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
                                 }
                                ],
                                "partial": false
                               }
                              },
                              {
                               "backwardYaw": 154.31,
                               "yaw": -23.17,
                               "distance": 1,
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8"
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E"
                              },
                              {
                               "backwardYaw": 76.9,
                               "yaw": -73.9,
                               "distance": 1,
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
                              }
                             ],
                             "partial": false
                            }
                           },
                           {
                            "backwardYaw": 179.05,
                            "yaw": -94.64,
                            "distance": 1,
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7"
                           }
                          ],
                          "partial": false
                         }
                        },
                        {
                         "backwardYaw": -25.53,
                         "yaw": 174.57,
                         "distance": 1,
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677"
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
                        }
                       ],
                       "partial": false
                      }
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
                     }
                    ],
                    "partial": false
                   }
                  },
                  {
                   "backwardYaw": -30.03,
                   "yaw": -5.23,
                   "distance": 1,
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E"
                  },
                  {
                   "backwardYaw": 6.44,
                   "yaw": -164.09,
                   "distance": 1,
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B"
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
                  }
                 ],
                 "partial": false
                }
               },
               {
                "backwardYaw": 23.32,
                "yaw": 139.43,
                "distance": 1,
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9"
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
               }
              ],
              "partial": false
             }
            },
            {
             "backwardYaw": -73.9,
             "yaw": 76.9,
             "distance": 1,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90"
            },
            {
             "backwardYaw": 84.52,
             "yaw": 128.57,
             "distance": 1,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F"
            }
           ],
           "partial": false
          }
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714"
         },
         {
          "backwardYaw": -23.17,
          "yaw": 154.31,
          "distance": 1,
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90"
         },
         {
          "backwardYaw": 164.85,
          "yaw": -157.61,
          "distance": 1,
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F"
         }
        ],
        "partial": false
       }
      },
      {
       "backwardYaw": -144.74,
       "yaw": 159.92,
       "distance": 1,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B"
      },
      {
       "backwardYaw": 150.13,
       "yaw": -19.33,
       "distance": 1,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677"
      }
     ],
     "partial": false
    }
   }
  ],
  "partial": false
 },
 {
  "duration": 1000,
  "id": "effect_345E8D8F_20DF_6B94_419E_3AE578883B9D",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_96204E0B_8615_E144_41CB_EAC5369E8E1B",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "media": {
     "minimumZoomFactor": 0.5,
     "fieldOfViewOverlayInsideColor": "#FFFFFF",
     "class": "Map",
     "label": "Centro Corporativo",
     "fieldOfViewOverlayRadiusScale": 0.19,
     "id": "map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
     "maximumZoomFactor": 1.2,
     "width": 300,
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
     "thumbnailUrl": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_t.png",
     "scaleMode": "fit_inside",
     "overlays": [
      {
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
       "id": "overlay_FCFECF03_DD1A_A3DC_41C3_A9E15DF295E9",
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 16.55,
        "height": 20,
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
        "class": "HotspotMapOverlayImage"
       }
      },
      {
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
       "id": "overlay_FFCF2D2D_DD19_A627_41B8_CFCAE1C65CD2",
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 83.5,
        "height": 20,
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
        "class": "HotspotMapOverlayImage"
       }
      },
      {
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
       "id": "overlay_FEA879B1_DD16_6E3C_41E7_2FF39A318D51",
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 24.05,
        "height": 20,
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
        "class": "HotspotMapOverlayImage"
       }
      },
      {
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
       "id": "overlay_FF9139DD_DD16_AE64_41E7_9B2CF203BB6B",
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 138,
        "height": 20,
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
        "class": "HotspotMapOverlayImage"
       }
      },
      {
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
       "id": "overlay_FEFCC206_DD17_9DE5_41C8_3ECC72F63227",
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 141.5,
        "height": 20,
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
        "class": "HotspotMapOverlayImage"
       }
      },
      {
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
       "id": "overlay_FF91DE69_DD17_A22C_41DE_D1342F576EA9",
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 271,
        "height": 20,
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
        "class": "HotspotMapOverlayImage"
       }
      },
      {
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
       "id": "overlay_FFB50497_DD16_A6E4_41E4_5BEA266BE86F",
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 206.1,
        "height": 20,
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
        "class": "HotspotMapOverlayImage"
       }
      },
      {
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
       "id": "overlay_FE5AF794_DD09_A2E4_41D0_61777F7E15D3",
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 141.5,
        "height": 20,
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
        "class": "HotspotMapOverlayImage"
       }
      },
      {
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
       "id": "overlay_01B54DAD_1A41_CF78_41A6_909B29F94B5F",
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 37.65,
        "height": 20.27,
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
        "class": "HotspotMapOverlayImage"
       }
      }
     ],
     "fieldOfViewOverlayOutsideOpacity": 0,
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "height": 209
    },
    "player": {
     "viewerArea": {
      "paddingBottom": 0,
      "toolTipFontSize": 12,
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "MapViewer",
      "playbackBarHeadBorderColor": "#000000",
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadShadow": true,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "width": "99.417%",
      "progressBackgroundOpacity": 1,
      "toolTipBorderRadius": 3,
      "playbackBarOpacity": 1,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "minHeight": 1,
      "toolTipOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "minWidth": 1,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadShadowOpacity": 0.7,
      "progressLeft": 0,
      "playbackBarProgressOpacity": 1,
      "toolTipFontStyle": "normal",
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "height": "70.806%",
      "toolTipShadowColor": "#333333",
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "paddingRight": 0,
      "playbackBarBorderColor": "#FFFFFF",
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "playbackBarHeight": 10,
      "playbackBarHeadWidth": 6,
      "borderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "propagateClick": false,
      "playbackBarBackgroundColorDirection": "vertical",
      "transitionDuration": 500,
      "progressBorderRadius": 0,
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarLeft": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarRight": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBorderSize": 0,
      "toolTipPaddingLeft": 6,
      "paddingLeft": 0,
      "toolTipDisplayTime": 600,
      "transitionMode": "blending",
      "shadow": false,
      "toolTipFontColor": "#606060",
      "displayTooltipInTouchScreens": true,
      "playbackBarProgressBorderSize": 0,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowColor": "#000000",
      "progressBarBorderRadius": 0,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipPaddingTop": 4,
      "progressRight": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "data": {
       "name": "MapViewer"
      },
      "progressBottom": 2,
      "progressHeight": 10,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorDirection": "vertical"
     },
     "id": "MapViewerMapPlayer",
     "class": "MapPlayer",
     "movementMode": "constrained"
    },
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_962E68DE_8615_E2FC_41DD_9E6F61084DF0",
  "class": "PlayList"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_896EFD45_8615_E3CC_41C4_815EA0D88A50",
  "initialPosition": {
   "hfov": 110,
   "yaw": -143.56,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "media": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_962EF8DE_8615_E2FC_41C3_A4BA2BCF4AE4",
  "class": "PlayList"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_89881A36_8615_E14F_41D9_676DB0C83946",
  "initialPosition": {
   "hfov": 110,
   "yaw": -5.43,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_965EBE0B_8615_E144_41D5_2037E748B592",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
 {
  "duration": 1000,
  "id": "effect_345ECD8F_20DF_6B94_41AE_2D20B974323E",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_89779D3B_8615_E344_41CE_C774F6B1550D",
  "initialPosition": {
   "hfov": 110,
   "yaw": -103.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_8C911D20_820E_09EE_41C0_C274C66438F8_camera",
  "initialPosition": {
   "hfov": 110,
   "yaw": -102.2,
   "class": "PanoramaCameraPosition",
   "pitch": -43.45
  }
 },
 {
  "items": [
   {
    "media": "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "initialSequence": {
      "movements": [
       {
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       }
      ],
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence"
     },
     "id": "panorama_0B7B5A27_1FEB_7426_4195_945554348391_camera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_965818F6_8615_E2CC_41D9_62F9FF0FAED8, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E8D8F_20DF_6B94_419E_3AE578883B9D, 'hideEffect', false)",
    "player": {
     "displayPlaybackBar": true,
     "id": "MainViewerPanoramaPlayer",
     "mouseControlMode": "drag_acceleration",
     "touchControlMode": "drag_rotation",
     "gyroscopeVerticalDraggingEnabled": true,
     "viewerArea": "this.MainViewer",
     "buttonCardboardView": {
      "toolTipFontSize": 12,
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667",
      "toolTipPaddingLeft": 6,
      "width": 75,
      "paddingLeft": 0,
      "toolTipBorderRadius": 3,
      "transparencyActive": false,
      "shadow": false,
      "toolTipFontColor": "#606060",
      "toolTipDisplayTime": 600,
      "backgroundOpacity": 0,
      "toolTipPaddingRight": 6,
      "toolTipShadowOpacity": 1,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "minHeight": 1,
      "toolTipOpacity": 1,
      "verticalAlign": "middle",
      "toolTipTextShadowColor": "#000000",
      "height": 50,
      "toolTipFontWeight": "normal",
      "toolTipShadowHorizontalLength": 0,
      "minWidth": 1,
      "mode": "push",
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipFontStyle": "normal",
      "toolTipFontFamily": "Arial",
      "paddingTop": 0,
      "toolTip": "VR",
      "toolTipBorderSize": 1,
      "borderSize": 0,
      "toolTipBorderColor": "#767676",
      "paddingRight": 0,
      "horizontalAlign": "center",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667.png",
      "propagateClick": false,
      "data": {
       "name": "Button_VR"
      },
      "toolTipPaddingBottom": 4,
      "class": "IconButton",
      "cursor": "hand",
      "toolTipTextShadowBlurRadius": 3,
      "paddingBottom": 0,
      "toolTipShadowVerticalLength": 0
     },
     "class": "PanoramaPlayer"
    },
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD8F_20DF_6B94_41A5_6F5908EFA5C8, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_965818F6_8615_E2CC_41D9_62F9FF0FAED8"
   }
  ],
  "id": "playList_960858B5_8615_E14C_41DB_C6A3A01DD970",
  "class": "PlayList"
 },
 "this.popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D",
 {
  "duration": 1000,
  "id": "effect_345C8D97_20DF_6BB3_41AB_11DFCCAD81C0",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_96E6BBC7_8615_E6CC_41E0_BED5B106C2EF",
  "initialPosition": {
   "hfov": 105,
   "yaw": -80.55,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
 {
  "duration": 1000,
  "id": "effect_965A8E14_8615_E143_41C9_85EC4D9A813F",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
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
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_89A78A5E_8615_E1FC_41E0_6EBD57E34BBA",
  "initialPosition": {
   "hfov": 110,
   "yaw": -80.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_34590D8F_20DF_6B94_41BB_A45E78753DDE",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_898C3D6A_8615_E3C4_41BA_F69F9BCF00E0",
  "initialPosition": {
   "hfov": 110,
   "yaw": -129.9,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_camera",
  "initialPosition": {
   "hfov": 110,
   "yaw": -109.83,
   "class": "PanoramaCameraPosition",
   "pitch": -5.19
  }
 },
 {
  "id": "ImageResource_32CBA59C_24AE_9054_41C1_95FEFF54BD80",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_34BBD83C_246A_F055_41C1_EBEF48C7F767_0_0.jpg",
    "width": 1500,
    "class": "ImageResourceLevel",
    "height": 937
   },
   {
    "url": "media/popup_34BBD83C_246A_F055_41C1_EBEF48C7F767_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 639
   },
   {
    "url": "media/popup_34BBD83C_246A_F055_41C1_EBEF48C7F767_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 319
   }
  ]
 },
 {
  "duration": 1000,
  "id": "effect_0B500FD7_1A54_37AE_41A9_19AE8C776076",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_891EA978_8615_E3C4_41C4_6A39C75F0A7A",
  "initialPosition": {
   "hfov": 110,
   "yaw": -110.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_345F4D97_20DF_6BB3_41BF_89E603E3F0DA",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_345EAD8F_20DF_6B94_41A5_6F5908EFA5C8",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_E35A8219_ED68_457C_41E5_C52BA0340B76",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_9759AC2C_8615_E15C_41D6_2B7C4009D19E",
  "initialPosition": {
   "hfov": 110,
   "yaw": 154.47,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_97370C02_8615_E144_41B0_521847C7F29A",
  "initialPosition": {
   "hfov": 110,
   "yaw": 22.27,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_D3728F7A_DF8C_960C_417C_830810DD2653",
  "class": "FadeOutEffect",
  "easing": "linear"
 },
 {
  "items": [
   {
    "media": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "initialSequence": {
      "movements": [
       {
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       }
      ],
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence"
     },
     "id": "panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_camera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_965B08F6_8615_E2CC_41DB_914F2ED0A90F, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345ECD8F_20DF_6B94_41AE_2D20B974323E, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EDD8F_20DF_6B94_41BF_D2C5F914980C, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_965B08F6_8615_E2CC_41DB_914F2ED0A90F"
   }
  ],
  "id": "playList_961498A6_8615_E14C_41D3_04B28978C107",
  "class": "PlayList"
 },
 {
  "duration": 1000,
  "id": "effect_965D6E0B_8615_E144_41CB_9C81CA1479A8",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_26077C68_37A3_6E75_41BD_CC48A65FF42C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_89620D50_8615_E3C3_41D8_E855B61C1702",
  "initialPosition": {
   "hfov": 110,
   "yaw": 156.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_345F7D8F_20DF_6B94_41B8_4073C3801F63",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_345CCD8F_20DF_6B94_41BC_F061530E83AF",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_camera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_89D08A73_8615_E1C4_41C4_1CF927253189",
  "initialPosition": {
   "hfov": 110,
   "yaw": 13.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_345EBD8F_20DF_6B94_41A4_072F6F80B3A4",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "items": [
   {
    "media": "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "initialSequence": {
      "movements": [
       {
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       }
      ],
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence"
     },
     "id": "panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_camera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_965AF8F6_8615_E2CC_41AD_82DAB5083221, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F4D97_20DF_6BB3_41BF_89E603E3F0DA, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F5D99_20DF_6BBF_41BD_058622C73035, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_965AF8F6_8615_E2CC_41AD_82DAB5083221"
   }
  ],
  "id": "playList_960998B5_8615_E14C_41DF_6388137003A2",
  "class": "PlayList"
 },
 {
  "duration": 1000,
  "id": "effect_345E0D8F_20DF_6B94_41AE_F32FBDDF5924",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.popup_3AF279F7_20F8_9425_41B8_727B1C05B69A",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_96401B04_8615_E74C_41BD_9E717B86C56E",
  "initialPosition": {
   "hfov": 110,
   "yaw": 176.87,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_96217E0B_8615_E144_41C9_216062E28DE9",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_345F6D8F_20DF_6B94_410B_52B44954FB30",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerVideoPlayer",
  "class": "VideoPlayer",
  "displayPlaybackBar": true
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
 {
  "duration": 1000,
  "id": "effect_345F2D8F_20DF_6B94_4160_462A4AF9B97A",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_89826D77_8615_E3CC_41D7_543DD8984F16",
  "initialPosition": {
   "hfov": 110,
   "yaw": -20.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_345F5D99_20DF_6BBF_41BD_058622C73035",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "id": "ImageResource_232B696E_352D_BAC0_41B1_E8DFF9648419",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_25AB8A34_3513_DE40_41C8_119007832823_0_0.jpg",
    "width": 1600,
    "class": "ImageResourceLevel",
    "height": 896
   },
   {
    "url": "media/popup_25AB8A34_3513_DE40_41C8_119007832823_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 573
   },
   {
    "url": "media/popup_25AB8A34_3513_DE40_41C8_119007832823_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 286
   }
  ]
 },
 {
  "duration": 1000,
  "id": "effect_345FBD97_20DF_6BB3_41A7_CB088826B439",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.popup_3A305B90_20FB_94FB_4193_FEB3450979FC",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_89DB9A69_8615_E1C5_41D8_3DCAFD7132BC",
  "initialPosition": {
   "hfov": 110,
   "yaw": -107.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "items": [
   {
    "media": "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
    "camera": "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_965A38F6_8615_E2CC_41D0_ABFBF7074BC8, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EBD8F_20DF_6B94_41A4_072F6F80B3A4, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E4D8F_20DF_6B94_41B8_3FE607FF9006, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_965A38F6_8615_E2CC_41D0_ABFBF7074BC8"
   }
  ],
  "id": "playList_960AF8B5_8615_E14C_41C2_2F112648E3E1",
  "class": "PlayList"
 },
 {
  "duration": 1000,
  "id": "effect_345CFD97_20DF_6BB4_41BB_97095DF13BBA",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_965FDE0B_8615_E144_41A7_68F13A431E31",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_89BC3A40_8615_E1C4_41DB_2B2F63B3FBD7",
  "initialPosition": {
   "hfov": 110,
   "yaw": -29.95,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_9621EE0B_8615_E144_41DD_13219E131AE0",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "this.popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C",
 {
  "items": [
   {
    "media": {
     "thumbnailUrl": "media/video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB_t.jpg",
     "label": "Rotonda_LQ_short_2",
     "scaleMode": "fit_inside",
     "width": 1280,
     "loop": false,
     "id": "video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB",
     "class": "Video",
     "height": 720,
     "video": {
      "width": 1280,
      "height": 720,
      "class": "VideoResource",
      "mp4Url": "media/video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB.mp4"
     }
    },
    "start": "this.viewer_uid963D28C4_8615_E2CC_41DA_23BF91519E0BVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_9657D8FB_8615_E2C4_41E0_0368364395A8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_9657D8FB_8615_E2C4_41E0_0368364395A8, 0)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid963D28C4_8615_E2CC_41DA_23BF91519E0BVideoPlayer)",
    "player": {
     "viewerArea": {
      "paddingBottom": 0,
      "toolTipFontSize": "1.11vh",
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "viewer_uid963D28C4_8615_E2CC_41DA_23BF91519E0B",
      "playbackBarHeadBorderColor": "#000000",
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadShadow": true,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "width": "100%",
      "progressBackgroundOpacity": 1,
      "toolTipBorderRadius": 3,
      "playbackBarOpacity": 1,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "minHeight": 50,
      "toolTipOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "minWidth": 100,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadShadowOpacity": 0.7,
      "progressLeft": 0,
      "playbackBarProgressOpacity": 1,
      "toolTipFontStyle": "normal",
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "height": "100%",
      "toolTipShadowColor": "#333333",
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "paddingRight": 0,
      "playbackBarBorderColor": "#FFFFFF",
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "playbackBarHeight": 10,
      "playbackBarHeadWidth": 6,
      "borderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "propagateClick": false,
      "playbackBarBackgroundColorDirection": "vertical",
      "transitionDuration": 500,
      "progressBorderRadius": 0,
      "toolTipPaddingBottom": 4,
      "class": "ViewerArea",
      "playbackBarLeft": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarRight": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBorderSize": 0,
      "toolTipPaddingLeft": 6,
      "paddingLeft": 0,
      "toolTipDisplayTime": 600,
      "transitionMode": "blending",
      "shadow": false,
      "toolTipFontColor": "#606060",
      "displayTooltipInTouchScreens": true,
      "playbackBarProgressBorderSize": 0,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowColor": "#000000",
      "progressBarBorderRadius": 0,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipPaddingTop": 4,
      "progressRight": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "data": {
       "name": "ViewerArea5979"
      },
      "progressBottom": 2,
      "progressHeight": 10,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorDirection": "vertical"
     },
     "id": "viewer_uid963D28C4_8615_E2CC_41DA_23BF91519E0BVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true
    }
   }
  ],
  "id": "PlayList_9657D8FB_8615_E2C4_41E0_0368364395A8",
  "class": "PlayList"
 },
 {
  "duration": 1000,
  "id": "effect_965B8E14_8615_E143_41D6_11ED8DA35098",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_89F91A8F_8615_E15C_41D2_BE24BAB1CA50",
  "initialPosition": {
   "hfov": 110,
   "yaw": 33.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
 {
  "duration": 1000,
  "id": "effect_345E4D8F_20DF_6B94_41B8_3FE607FF9006",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_965E0E0B_8615_E144_41E0_759A33B7DF12",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "this.popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6",
 "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
 {
  "duration": 1000,
  "id": "effect_E3598214_ED68_4574_41E8_2F261C5C21DC",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_camera",
 "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
 {
  "duration": 1000,
  "id": "effect_345FCD97_20DF_6BB3_41B7_5533F0603364",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_89237CFD_8615_E2BC_41E0_C059E03E755D",
  "initialPosition": {
   "hfov": 110,
   "yaw": 58.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_camera",
  "initialPosition": {
   "hfov": 110,
   "yaw": -143.47,
   "class": "PanoramaCameraPosition",
   "pitch": -37.77
  }
 },
 "this.popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43",
 "this.MapViewerMapPlayer",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_camera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_965D0E0B_8615_E144_41D6_30659396B59E",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_34597D8F_20DF_6B94_41AA_44DC8A057CBB",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_96D2FB94_8615_E74C_41DE_0DBEBBCF24B8",
  "initialPosition": {
   "hfov": 110,
   "yaw": 118.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "ImageResource_32C8659C_24AE_9054_4187_C8E2724888E0",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_36258FF0_249D_EFED_41AB_54067BE4CE8C_0_0.jpg",
    "width": 1500,
    "class": "ImageResourceLevel",
    "height": 1000
   },
   {
    "url": "media/popup_36258FF0_249D_EFED_41AB_54067BE4CE8C_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_36258FF0_249D_EFED_41AB_54067BE4CE8C_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 {
  "items": [
   {
    "media": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "initialSequence": {
      "movements": [
       {
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       }
      ],
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence"
     },
     "id": "panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_camera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F5D8F_20DF_6B94_41B1_D214F66E6293, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F6D8F_20DF_6B94_410B_52B44954FB30, 'hideEffect', false)"
   }
  ],
  "id": "playList_960188BF_8615_E2BC_41E0_8CC9B788723F",
  "class": "PlayList"
 },
 {
  "duration": 1000,
  "id": "effect_345E5D8F_20DF_6B94_4193_ABB7E016F309",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.popup_3BBE3C5B_107F_C340_4178_756995F5135C",
 {
  "duration": 1000,
  "id": "effect_E35A021A_ED68_457D_41DB_F92702D0649E",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
 "this.popup_36539A9C_24AE_9054_41AC_911079BB2A7C",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_890AC995_8615_E34C_41C6_EB50CFDBD32F",
  "initialPosition": {
   "hfov": 110,
   "yaw": -40.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_camera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_EF6CE355_F62E_F8F5_41E6_CBD8B4202E02",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.popup_37E7B455_24BA_B0D4_41A5_EF23708D6C53",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_894DCD1C_8615_E37C_41D8_0086E32D050E",
  "initialPosition": {
   "hfov": 110,
   "yaw": -54.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
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
  "id": "playList_962E18DE_8615_E2FC_41A3_9F090C8EDD6A",
  "class": "PlayList"
 },
 "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
 {
  "items": [
   {
    "media": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "initialSequence": {
      "movements": [
       {
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       }
      ],
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence"
     },
     "id": "panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_camera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_965978F6_8615_E2CC_41C3_6672B624CA0C, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F2D8F_20DF_6B94_4160_462A4AF9B97A, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CCD8F_20DF_6B94_41BC_F061530E83AF, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_965978F6_8615_E2CC_41C3_6672B624CA0C"
   }
  ],
  "id": "playList_9609F8B5_8615_E14C_41E0_619014D78E72",
  "class": "PlayList"
 },
 {
  "duration": 1000,
  "id": "effect_965EFE0B_8615_E144_41C8_24916BA30785",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_96F41BB3_8615_E744_41CE_B2E7D8ACB5E4",
  "initialPosition": {
   "hfov": 110,
   "yaw": 62.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_345E3D97_20DF_6BB3_41B7_C907450FD669",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.popup_3638CA38_249B_905C_41B3_EA26EB9333F0",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_899F2A18_8615_E144_41C9_58DD9D486C2D",
  "initialPosition": {
   "hfov": 110,
   "yaw": -72.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_camera",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8955FD11_8615_E344_41AE_B7F12D89F60B",
  "initialPosition": {
   "hfov": 110,
   "yaw": -113.6,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_965F6E0B_8615_E144_41DB_6BBD9B926DEA",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_968A9B44_8615_E7CC_41D3_310A0215EA2E",
  "initialPosition": {
   "hfov": 110,
   "yaw": -83.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_89AC1D8C_8615_E35C_41C7_B9CB13D9628D",
  "initialPosition": {
   "hfov": 110,
   "yaw": 40.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
 "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F",
 {
  "duration": 1000,
  "id": "effect_345F0D8F_20DF_6B94_419D_ABD4CFF44CF3",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_camera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_96C39BA9_8615_E745_41D1_D558E64BFC4D",
  "initialPosition": {
   "hfov": 110,
   "yaw": 163.89,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
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
  "items": [
   {
    "media": "this.video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_962D48DE_8615_E2FC_41D3_4F0F2C76B07B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_962D48DE_8615_E2FC_41D3_4F0F2C76B07B, 0)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "player": "this.MainViewerVideoPlayer"
   }
  ],
  "id": "playList_962D48DE_8615_E2FC_41D3_4F0F2C76B07B",
  "class": "PlayList"
 },
 {
  "duration": 1000,
  "id": "effect_345F5D8F_20DF_6B94_41B1_D214F66E6293",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_893429B0_8615_E344_41CB_548C5DAE92FF",
  "initialPosition": {
   "hfov": 110,
   "yaw": 3.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_895589D9_8615_E2C4_41D5_6EF263F1A010",
  "initialPosition": {
   "hfov": 110,
   "yaw": 35.26,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_96223E0B_8615_E144_41A2_27933D9828BE",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_E3586214_ED68_4574_41E5_D2720D677B2E",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_E3582213_ED68_454C_41D3_299F2B40CFF6",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_camera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_89008CBC_8615_E2BC_41E0_811DFD9E475F",
  "initialPosition": {
   "hfov": 110,
   "yaw": -138.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_F083FF13_E49C_8716_41EC_3E7D67287F82",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_camera",
  "initialPosition": {
   "hfov": 110,
   "yaw": -160.79,
   "class": "PanoramaCameraPosition",
   "pitch": -16.48
  }
 },
 "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_camera",
 {
  "items": [
   {
    "media": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "initialSequence": {
      "movements": [
       {
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       }
      ],
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence"
     },
     "id": "panorama_160D346A_1A28_89C6_418E_CDA086A7E714_camera",
     "initialPosition": {
      "hfov": 110,
      "yaw": -21.7,
      "class": "PanoramaCameraPosition",
      "pitch": -5.28
     }
    },
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_962BB8E7_8615_E2CC_41CE_84FD9BD4E67E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD84_20DF_6B95_41B9_72E06ABF1981, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_962BB8E7_8615_E2CC_41CE_84FD9BD4E67E"
   },
   {
    "media": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
    "camera": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_962678EC_8615_E2DC_4181_2C2D57FD932C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_EF6DE039_F622_38BD_41E2_3149DB234972, 'showEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_96223E0B_8615_E144_41A2_27933D9828BE, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_96227E0B_8615_E144_41B3_AD5B03D21C2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_96226E0B_8615_E144_41A3_00ABBE82684C, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_962678EC_8615_E2DC_4181_2C2D57FD932C"
   },
   {
    "media": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
    "camera": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_9626F8EC_8615_E2DC_41A7_365DDED4CC15, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_9626F8EC_8615_E2DC_41A7_365DDED4CC15"
   },
   {
    "media": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_962588EC_8615_E2DC_41D7_976DFCD10EA5, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_96211E0B_8615_E144_41C1_61DF87D9E1DD, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_962588EC_8615_E2DC_41D7_976DFCD10EA5"
   },
   {
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_962418EC_8615_E2DC_41E0_B0B908ECE9CE, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_96217E0B_8615_E144_41C9_216062E28DE9, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_962418EC_8615_E2DC_41E0_B0B908ECE9CE"
   },
   {
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "camera": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_962498EC_8615_E2DC_41DC_3DF99CCEE3AF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_9621EE0B_8615_E144_41DD_13219E131AE0, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_962498EC_8615_E2DC_41DC_3DF99CCEE3AF"
   },
   {
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_962548EC_8615_E2DC_41D4_E59B676BDD86, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_96204E0B_8615_E144_41CB_EAC5369E8E1B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_962548EC_8615_E2DC_41D4_E59B676BDD86"
   },
   {
    "media": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 8.17,
      "class": "PanoramaCameraPosition",
      "pitch": -2.94
     }
    },
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_9625C8EC_8615_E2DC_41DC_730D65321973, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_9625C8EC_8615_E2DC_41DC_730D65321973"
   },
   {
    "media": "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_962458EC_8615_E2DC_41CA_4D5A3BE5187D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_965F1E0B_8615_E144_41BB_BF23B6C303DA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_962458EC_8615_E2DC_41CA_4D5A3BE5187D"
   },
   {
    "media": "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_E6145D91_EF14_5D6A_41D9_45623053016B_camera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 53.23,
      "class": "PanoramaCameraPosition",
      "pitch": 1.41
     }
    },
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515', this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515.get('visible')); this.registerKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E', this.Label_E216BE12_F622_684F_41EC_C2D2817E217E.get('visible')); this.registerKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197', this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_9624B8EC_8615_E2DC_41D0_25CB26AAC7FF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0B500FD7_1A54_37AE_41A9_19AE8C776076, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_2606DC67_37A3_6E7A_417B_82BAC7B62691, 'hideEffect', false); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true, -1, this.effect_EF6CE355_F62E_F8F5_41E6_CBD8B4202E02, 'showEffect', false); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false); this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_26077C68_37A3_6E75_41BD_CC48A65FF42C, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0B500FD7_1A54_37AE_41A9_19AE8C776076, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_965F6E0B_8615_E144_41DB_6BBD9B926DEA, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_965FBE0B_8615_E144_41D5_BAE931A8E0E7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')){ if(this.getKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')) { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true, -1, this.effect_965FDE0B_8615_E144_41A7_68F13A431E31, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_2606DC67_37A3_6E7A_417B_82BAC7B62691, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197'); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_EF6C1355_F62E_F8F5_41C5_B9A5C5CCED3E, 'hideEffect', false); if(this.existsKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')){ if(this.getKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')) { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_965E0E0B_8615_E144_41E0_759A33B7DF12, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_26077C68_37A3_6E75_41BD_CC48A65FF42C, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E'); if(this.existsKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')){ if(this.getKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')) { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_965E5E0B_8615_E144_41D5_E08EE157979E, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')",
    "id": "PanoramaPlayListItem_9624B8EC_8615_E2DC_41D0_25CB26AAC7FF"
   },
   {
    "media": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_camera",
     "initialPosition": {
      "hfov": 105,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_962328EC_8615_E2DC_41D7_025D4751D5D2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_965EBE0B_8615_E144_41D5_2037E748B592, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_962328EC_8615_E2DC_41D7_025D4751D5D2"
   },
   {
    "media": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_camera",
     "initialPosition": {
      "hfov": 105,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_9623A8EC_8615_E2DC_41D4_D4574343B5A1, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_965D0E0B_8615_E144_41D6_30659396B59E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_9623A8EC_8615_E2DC_41D4_D4574343B5A1"
   },
   {
    "media": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_camera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_962228EC_8615_E2DC_41D4_110E3467E672, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_965D6E0B_8615_E144_41CB_9C81CA1479A8, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_962228EC_8615_E2DC_41D4_110E3467E672"
   },
   {
    "media": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
    "camera": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_camera",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_9622D8EC_8615_E2DC_41DF_9ACDA27E3AD2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_965C1E0B_8615_E144_41B9_7DA009E97536, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_9622D8EC_8615_E2DC_41DF_9ACDA27E3AD2"
   },
   {
    "media": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_camera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_962128EC_8615_E2DC_41C7_D1E1C51C2E16, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_965EFE0B_8615_E144_41C8_24916BA30785, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_962128EC_8615_E2DC_41C7_D1E1C51C2E16"
   },
   {
    "media": "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_camera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_962188EC_8615_E2DC_41C4_2B7B051EA9B6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_962188EC_8615_E2DC_41C4_2B7B051EA9B6"
   },
   {
    "media": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_camera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_962008EC_8615_E2DC_41E0_1D9B11D527A2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.trigger('tourEnded')",
    "id": "PanoramaPlayListItem_962008EC_8615_E2DC_41E0_1D9B11D527A2"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_9716ABDC_8615_E6FC_41C4_E7EA3514DC20",
  "initialPosition": {
   "hfov": 110,
   "yaw": 5.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_965F1E0B_8615_E144_41BB_BF23B6C303DA",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_96226E0B_8615_E144_41A3_00ABBE82684C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_892F4CE3_8615_E2C4_41D2_9CBDD4A1F42C",
  "initialPosition": {
   "hfov": 110,
   "yaw": -173.56,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
 "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714_camera",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_96A02B85_8615_E74C_41D5_50BCA056F70E",
  "initialPosition": {
   "hfov": 110,
   "yaw": -95.48,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_345EFD8F_20DF_6B94_41B7_4853257F85EE",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_2606DC67_37A3_6E7A_417B_82BAC7B62691",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
 "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8",
 "this.popup_3A3C822F_20F8_9425_41B2_B5F3B1085960",
 {
  "items": [
   {
    "media": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
    "camera": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 0, 1); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD84_20DF_6B95_41B9_72E06ABF1981, 'hideEffect', false)"
   },
   {
    "media": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
    "camera": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 1, 2); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_EF6DE039_F622_38BD_41E2_3149DB234972, 'showEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_965C1E0B_8615_E144_41B3_C1D3DA618636, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_965C2E0B_8615_E144_41D9_2FAF5B68CAFF, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_965C6E0B_8615_E144_41D5_EABF3A5352EA, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)"
   },
   {
    "media": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
    "camera": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
    "camera": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 3, 4); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_965B2E13_8615_E144_41CC_F89BC65EC83A, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')"
   },
   {
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "camera": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 4, 5); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_965B8E14_8615_E143_41D6_11ED8DA35098, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')"
   },
   {
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "camera": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 5, 6); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_965A1E14_8615_E143_41D5_E9240B557435, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')"
   },
   {
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "camera": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 6, 7); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_965A8E14_8615_E143_41C9_85EC4D9A813F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')"
   },
   {
    "media": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
    "camera": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 7, 8)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8",
    "camera": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 8, 9); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34592D8F_20DF_6B94_41B2_36A2D8C28548, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34593D8F_20DF_6B94_41B9_C6D005829662, 'hideEffect', false)"
   },
   {
    "media": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "initialSequence": {
      "movements": [
       {
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       }
      ],
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence"
     },
     "id": "panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_camera",
     "initialPosition": {
      "hfov": 110,
      "yaw": -132.07,
      "class": "PanoramaCameraPosition",
      "pitch": -40.96
     }
    },
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, 10); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E7D8F_20DF_6B94_41B1_383A596C4C67, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E0D8F_20DF_6B94_41AE_F32FBDDF5924, 'hideEffect', false)"
   },
   {
    "media": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90",
    "camera": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 10, 11); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CFD97_20DF_6BB4_41BB_97095DF13BBA, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345C8D97_20DF_6BB3_41AB_11DFCCAD81C0, 'hideEffect', false)"
   },
   {
    "media": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F",
    "camera": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 11, 0)",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
  "class": "PlayList"
 },
 {
  "duration": 1000,
  "id": "effect_965C1E0B_8615_E144_41B3_C1D3DA618636",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_893FC9A4_8615_E343_4190_15AAA33F60CC",
  "initialPosition": {
   "hfov": 110,
   "yaw": 67.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_89936A2C_8615_E15C_41D2_05EFF77CB92A",
  "initialPosition": {
   "hfov": 110,
   "yaw": 160.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
 "this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8976CA02_8615_E144_41D3_14BF298AF8EA",
  "initialPosition": {
   "hfov": 110,
   "yaw": 3.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB",
 "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_camera",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "media": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_962ED8DE_8615_E2FC_41B0_0AF83A920ACF",
  "class": "PlayList"
 },
 "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_89B15A4F_8615_E1DC_41D0_FD59F6E5AD5D",
  "initialPosition": {
   "hfov": 110,
   "yaw": -80.37,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "ImageResource_3294856D_24AE_90F4_418D_8D9776AE9FF3",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3509F7CC_246E_7035_41AB_BB188EF81D62_0_0.jpg",
    "width": 1500,
    "class": "ImageResourceLevel",
    "height": 1000
   },
   {
    "url": "media/popup_3509F7CC_246E_7035_41AB_BB188EF81D62_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_3509F7CC_246E_7035_41AB_BB188EF81D62_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 {
  "duration": 1000,
  "id": "effect_345EDD8F_20DF_6B94_41BF_D2C5F914980C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
 {
  "duration": 1000,
  "id": "effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42",
  "class": "FadeInEffect",
  "easing": "linear"
 },
 "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
 {
  "id": "ImageResource_72699DCF_64A4_9E66_417A_2D9BA948AEB2",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8_0_0.jpg",
    "width": 1500,
    "class": "ImageResourceLevel",
    "height": 1000
   },
   {
    "url": "media/popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_8941B9F6_8615_E2CF_41E0_7724FDBF43D4",
  "initialPosition": {
   "hfov": 105,
   "yaw": -107.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_camera",
 {
  "duration": 1000,
  "id": "effect_345EED8F_20DF_6B94_417E_826782EEF8F0",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E",
 "this.popup_34BBD83C_246A_F055_41C1_EBEF48C7F767",
 {
  "duration": 1000,
  "id": "effect_965A1E14_8615_E143_41D5_E9240B557435",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_964EBAEA_8615_E6C7_41DB_9CED365C0486",
  "initialPosition": {
   "hfov": 110,
   "yaw": 120.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "initialSequence": {
      "movements": [
       {
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       }
      ],
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence"
     },
     "id": "panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_camera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 67.14,
      "class": "PanoramaCameraPosition",
      "pitch": -0.98
     }
    },
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_963AD8CE_8615_E2DC_41D9_7465F25D6154",
  "class": "PlayList"
 },
 "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
 {
  "id": "ImageResource_32CD359C_24AE_9054_41BC_CF812CF11760",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_369EF53B_249A_B05C_41BC_AE1E970C16EA_0_0.jpg",
    "width": 1500,
    "class": "ImageResourceLevel",
    "height": 1000
   },
   {
    "url": "media/popup_369EF53B_249A_B05C_41BC_AE1E970C16EA_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_369EF53B_249A_B05C_41BC_AE1E970C16EA_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 {
  "duration": 1000,
  "id": "effect_345E6D8F_20DF_6B94_41A3_46A48BBB0ACC",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "id": "ImageResource_0AAA2971_2068_943D_41B4_10DFF5B38D1B",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3A3C822F_20F8_9425_41B2_B5F3B1085960_0_0.jpg",
    "width": 2000,
    "class": "ImageResourceLevel",
    "height": 1333
   },
   {
    "url": "media/popup_3A3C822F_20F8_9425_41B2_B5F3B1085960_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_3A3C822F_20F8_9425_41B2_B5F3B1085960_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
 {
  "items": [
   {
    "media": "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "initialSequence": {
      "movements": [
       {
        "easing": "cubic_in",
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "linear",
        "yawDelta": 323,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "cubic_out",
        "yawDelta": 18.5,
        "yawSpeed": 7.96,
        "class": "DistancePanoramaCameraMovement"
       }
      ],
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence"
     },
     "id": "panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_camera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_965A88F6_8615_E2CC_41E0_137346299B47, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F8D97_20DF_6BB3_41B5_1A0A5D57797F, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345FBD97_20DF_6BB3_41A7_CB088826B439, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_965A88F6_8615_E2CC_41E0_137346299B47"
   }
  ],
  "id": "playList_960938B5_8615_E14C_41DA_25272CBC2E58",
  "class": "PlayList"
 },
 "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B_camera",
 {
  "duration": 1000,
  "id": "effect_345CDD8F_20DF_6B94_41B6_C00B98F530E1",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_894B49E6_8615_E2CC_41DF_0300B0396E24",
  "initialPosition": {
   "hfov": 110,
   "yaw": -29.87,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_96AEAB70_8615_E7C4_41D6_421988781D95",
  "initialPosition": {
   "hfov": 110,
   "yaw": 106.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0",
 "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
 "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_895C9D07_8615_E34C_41B4_DAB5C59C7CCF",
  "initialPosition": {
   "hfov": 110,
   "yaw": -51.43,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "id": "window_8D897D08_8614_2344_41B3_E77830EF723A",
  "shadowOpacity": 0.5,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonRollOverIconColor": "#666666",
  "verticalAlign": "middle",
  "backgroundOpacity": 1,
  "closeButtonBackgroundColorDirection": "vertical",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "shadowSpread": 1,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titlePaddingBottom": 5,
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "closeButtonBorderSize": 0,
  "bodyBackgroundOpacity": 0,
  "shadowBlurRadius": 6,
  "bodyPaddingTop": 0,
  "minHeight": 20,
  "borderRadius": 5,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "overflow": "scroll",
  "closeButtonIconHeight": 20,
  "shadowVerticalLength": 0,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColor": [],
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyPaddingRight": 0,
  "titleFontFamily": "Arial",
  "minWidth": 20,
  "footerBackgroundOpacity": 0,
  "closeButtonIconColor": "#000000",
  "scrollBarColor": "#000000",
  "closeButtonRollOverIconLineWidth": 5,
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "paddingRight": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPressedIconColor": "#888888",
  "borderSize": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPaddingTop": 5,
  "closeButtonIconLineWidth": 5,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingLeft": 0,
  "headerPaddingTop": 10,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "propagateClick": false,
  "shadowHorizontalLength": 3,
  "closeButtonPaddingRight": 5,
  "contentOpaque": false,
  "class": "Window",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPaddingBottom": 5,
  "footerHeight": 5,
  "backgroundColorRatios": [],
  "closeButtonRollOverBorderColor": "#000000",
  "children": [
   "this.viewer_uid963D28C4_8615_E2CC_41DA_23BF91519E0B"
  ],
  "scrollBarVisible": "rollOver",
  "bodyPaddingBottom": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBorderRadius": 0,
  "paddingLeft": 0,
  "shadowColor": "#000000",
  "headerBackgroundOpacity": 0,
  "shadow": true,
  "closeButtonIconWidth": 20,
  "titlePaddingRight": 5,
  "closeButtonPressedBorderColor": "#000000",
  "titleFontSize": "1.29vh",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPaddingLeft": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerPaddingRight": 0,
  "closeButtonRollOverBorderSize": 0,
  "layout": "vertical",
  "backgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "veilOpacity": 0.4,
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingTop": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundOpacity": 0.3,
  "headerPaddingLeft": 10,
  "gap": 10,
  "horizontalAlign": "center",
  "titlePaddingTop": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "data": {
   "name": "Window525"
  },
  "headerVerticalAlign": "middle",
  "headerPaddingBottom": 5,
  "paddingBottom": 0
 },
 "this.popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865",
 "this.popup_D60305E4_DCEA_D39F_419B_D9B149482827",
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
 "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_893ABCC9_8615_E2C4_41D5_59D8344555B8",
  "initialPosition": {
   "hfov": 110,
   "yaw": 24.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "ImageResource_32CC759C_24AE_9054_419F_511B2D533327",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3638CA38_249B_905C_41B3_EA26EB9333F0_0_0.jpg",
    "width": 1500,
    "class": "ImageResourceLevel",
    "height": 851
   },
   {
    "url": "media/popup_3638CA38_249B_905C_41B3_EA26EB9333F0_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 580
   },
   {
    "url": "media/popup_3638CA38_249B_905C_41B3_EA26EB9333F0_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 290
   }
  ]
 },
 {
  "duration": 1000,
  "id": "effect_E359A214_ED68_4575_41DB_B895523643F9",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_9637EAC5_8615_E6CC_41C2_9D55DE07F0B4",
  "initialPosition": {
   "hfov": 110,
   "yaw": -156.68,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "ImageResource_0AA1E95D_2068_946A_419A_A79BE517FB92",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_0.jpg",
    "width": 2000,
    "class": "ImageResourceLevel",
    "height": 3000
   },
   {
    "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_1.jpg",
    "width": 1365,
    "class": "ImageResourceLevel",
    "height": 2048
   },
   {
    "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_2.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   },
   {
    "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_3.jpg",
    "width": 341,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_961E2DDF_8615_E2FC_41CA_A36B5ED78FC0",
  "initialPosition": {
   "hfov": 110,
   "yaw": 3.59,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_976D5C5C_8615_E1FC_41D0_F014C6366141",
  "initialPosition": {
   "hfov": 110,
   "yaw": -3.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_89A1AD99_8615_E344_41DF_463BC6DEDE6D",
  "initialPosition": {
   "hfov": 110,
   "yaw": 85.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_camera",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_97298C19_8615_E144_41AB_2CA46A6D7A7E",
  "initialPosition": {
   "hfov": 110,
   "yaw": -91.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_9613CAB0_8615_E144_41A7_5036C4BCE91F",
  "initialPosition": {
   "hfov": 110,
   "yaw": 103.75,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391_camera",
 "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90",
 {
  "duration": 1000,
  "id": "effect_34592D8F_20DF_6B94_41B2_36A2D8C28548",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_camera",
 {
  "items": [
   {
    "media": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
    "camera": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_965BD8F6_8615_E2CC_41C4_621A68CA3994, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CDD8F_20DF_6B94_41B6_C00B98F530E1, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CED8F_20DF_6B94_41B4_61907719F453, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_965BD8F6_8615_E2CC_41C4_621A68CA3994"
   }
  ],
  "id": "playList_960A98B5_8615_E14C_41CE_4E901B396B8A",
  "class": "PlayList"
 },
 "this.popup_3509F7CC_246E_7035_41AB_BB188EF81D62",
 "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5",
 "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
 "this.popup_209897EC_11B3_4D40_41A2_837DB50E3A59",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_camera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_965FBE0B_8615_E144_41D5_BAE931A8E0E7",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_9698FB36_8615_E74C_41D2_92524D90E48E",
  "initialPosition": {
   "hfov": 110,
   "yaw": 9.95,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_892A19BD_8615_E2BC_41D0_539C5A1C0B50",
  "initialPosition": {
   "hfov": 110,
   "yaw": 101.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_89D7FDA6_8615_E34C_41E0_1EDFB71765DF",
  "initialPosition": {
   "hfov": 110,
   "yaw": 84.54,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
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
  "duration": 1000,
  "id": "effect_345CED8F_20DF_6B94_41B4_61907719F453",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_96126DEC_8615_E2DC_41D2_037BDA0417C4",
  "initialPosition": {
   "hfov": 110,
   "yaw": -70.25,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_89349CD4_8615_E2CC_41A5_1C31B0380E0A",
  "initialPosition": {
   "hfov": 110,
   "yaw": 149.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_96654B26_8615_E74C_41D7_6F32B5EB5A55",
  "initialPosition": {
   "hfov": 110,
   "yaw": -152.92,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
 "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_895F09CD_8615_E2DC_41CC_07615EB7A2E7",
  "initialPosition": {
   "hfov": 110,
   "yaw": -0.95,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
 {
  "items": [
   {
    "media": "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
    "camera": "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F7D8F_20DF_6B94_41B8_4073C3801F63, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F0D8F_20DF_6B94_419D_ABD4CFF44CF3, 'hideEffect', false)"
   }
  ],
  "id": "playList_9601F8BF_8615_E2BC_41BD_0C865053920F",
  "class": "PlayList"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_89132987_8615_E34C_41DB_22D746F73A77",
  "initialPosition": {
   "hfov": 110,
   "yaw": -113.92,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
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
 "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
 "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_camera",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "media": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_962E38DE_8615_E2FC_41D1_6080B3D553CE",
  "class": "PlayList"
 },
 "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_96057ABB_8615_E144_41D6_82E6EF2D5089",
  "initialPosition": {
   "hfov": 110,
   "yaw": 174.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_96298AD0_8615_E6C3_41C4_68C85BF6D566",
  "initialPosition": {
   "hfov": 110,
   "yaw": -147.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "items": [
   {
    "media": "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
    "camera": "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_965828F6_8615_E2CC_41D5_E128BAEC7A37, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E3D97_20DF_6BB3_41B7_C907450FD669, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345FCD97_20DF_6BB3_41B7_5533F0603364, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_965828F6_8615_E2CC_41D5_E128BAEC7A37"
   }
  ],
  "id": "playList_960888B5_8615_E14C_41D7_64C1B6BB69BC",
  "class": "PlayList"
 },
 "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_camera",
 "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
 {
  "items": [
   {
    "media": "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
    "camera": "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EED8F_20DF_6B94_417E_826782EEF8F0, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EFD8F_20DF_6B94_41B7_4853257F85EE, 'hideEffect', false)"
   }
  ],
  "id": "playList_9603A8BF_8615_E2BC_41CD_EBBF5BA34035",
  "class": "PlayList"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_965B2AE0_8615_E6C4_41D4_DE61CCD7D6EA",
  "initialPosition": {
   "hfov": 110,
   "yaw": -3.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_9708EBEE_8615_E6DC_41DB_2E37103FC53C",
  "initialPosition": {
   "hfov": 110,
   "yaw": 15.91,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
 "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_camera",
 {
  "items": [
   {
    "media": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
    "camera": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34597D8F_20DF_6B94_41AA_44DC8A057CBB, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34590D8F_20DF_6B94_41BB_A45E78753DDE, 'hideEffect', false)"
   }
  ],
  "id": "playList_961778A1_8615_E14B_41CB_34C40A62053F",
  "class": "PlayList"
 },
 "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_camera",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_89EA2DD5_8615_E2CC_41D8_859A79326CE8",
  "initialPosition": {
   "hfov": 105,
   "yaw": 94.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_camera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_89CBDDB0_8615_E344_41DA_DC4EE2DFE2D8",
  "initialPosition": {
   "hfov": 110,
   "yaw": 62.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "ImageResource_095FC95D_2068_946A_41A5_88BA52F0CF59",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3AF279F7_20F8_9425_41B8_727B1C05B69A_0_0.jpg",
    "width": 2000,
    "class": "ImageResourceLevel",
    "height": 1333
   },
   {
    "url": "media/popup_3AF279F7_20F8_9425_41B8_727B1C05B69A_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_3AF279F7_20F8_9425_41B8_727B1C05B69A_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 "this.MainViewerPanoramaPlayer",
 "this.popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_978E6C78_8615_E1C4_419C_03A312F46E8C",
  "initialPosition": {
   "hfov": 110,
   "yaw": 88.15,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_96211E0B_8615_E144_41C1_61DF87D9E1DD",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "media": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_962D08DE_8615_E2FC_419A_E00EADE61986",
  "class": "PlayList"
 },
 {
  "duration": 1000,
  "id": "effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.popup_36258FF0_249D_EFED_41AB_54067BE4CE8C",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_8998BD5A_8615_E3C4_41CC_8DE2AFC8621F",
  "initialPosition": {
   "hfov": 110,
   "yaw": -15.15,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_974A2C39_8615_E144_41B5_D1B55D28D063",
  "initialPosition": {
   "hfov": 110,
   "yaw": -32.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_89426D2E_8615_E35C_41D7_55F3E2A6D8B6",
  "initialPosition": {
   "hfov": 110,
   "yaw": -25.69,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_96371E01_8615_E145_41A0_52C5C860F3AF",
  "initialPosition": {
   "hfov": 110,
   "yaw": 89.52,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_89C5CA7D_8615_E1BC_41DB_99C8F4D97D96",
  "initialPosition": {
   "hfov": 110,
   "yaw": -46.66,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
 {
  "duration": 1000,
  "id": "effect_E359B21B_ED68_4573_41E3_2134D2902989",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_89298CF0_8615_E2C4_41D2_EA69C0D868B2",
  "initialPosition": {
   "hfov": 110,
   "yaw": 22.39,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_896ADA0E_8615_E15C_41D8_178FF77FC046",
  "initialPosition": {
   "hfov": 110,
   "yaw": -158.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_965E5E0B_8615_E144_41D5_E08EE157979E",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "this.popup_369EF53B_249A_B05C_41BC_AE1E970C16EA",
 "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_camera",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_89F57DCB_8615_E2C4_4190_E1D469E7DEC1",
  "initialPosition": {
   "hfov": 110,
   "yaw": 148.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_96BDBB5F_8615_E7FC_41BC_B03FCE5BC0EB",
  "initialPosition": {
   "hfov": 110,
   "yaw": 75.18,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
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
  "id": "playList_962E88DE_8615_E2FC_41D4_40347E1DF29C",
  "class": "PlayList"
 },
 {
  "duration": 1000,
  "id": "effect_E3587215_ED68_4577_4183_716A0D8E6DA7",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.popup_3CC23B7F_107F_4540_4180_ABF478E71F9A",
 {
  "duration": 1000,
  "id": "effect_965B2E13_8615_E144_41CC_F89BC65EC83A",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
 "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
 "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
 "this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
 {
  "duration": 1000,
  "id": "effect_345F8D97_20DF_6BB3_41B5_1A0A5D57797F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
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
 "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "media": "this.map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_962D38DE_8615_E2FC_41D4_7499275527FE",
  "class": "PlayList"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_89E0FAA6_8615_E14C_41D7_3AECD6F3F22D",
  "initialPosition": {
   "hfov": 110,
   "yaw": 145.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_89B77D82_8615_E344_41D8_D9B547B16A34",
  "initialPosition": {
   "hfov": 105,
   "yaw": -176.54,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "ImageResource_32C8A59C_24AE_9054_41B0_230945BD42EC",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_36539A9C_24AE_9054_41AC_911079BB2A7C_0_0.jpg",
    "width": 1500,
    "class": "ImageResourceLevel",
    "height": 1000
   },
   {
    "url": "media/popup_36539A9C_24AE_9054_41AC_911079BB2A7C_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_36539A9C_24AE_9054_41AC_911079BB2A7C_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_89C0DDBF_8615_E2BC_41DF_B3884B4AE1BA",
  "initialPosition": {
   "hfov": 110,
   "yaw": 45.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_979C1C6B_8615_E1C4_41B5_372E0A71927D",
  "initialPosition": {
   "hfov": 110,
   "yaw": -42.99,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "duration": 1000,
  "id": "effect_345EAD84_20DF_6B95_41B9_72E06ABF1981",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 0,
  "id": "effect_EF6DE039_F622_38BD_41E2_3149DB234972",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "items": [
   {
    "media": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
    "camera": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_965B68F6_8615_E2CC_41B7_C791F76752F0, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E5D8F_20DF_6B94_4193_ABB7E016F309, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E6D8F_20DF_6B94_41A3_46A48BBB0ACC, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_965B68F6_8615_E2CC_41B7_C791F76752F0"
   }
  ],
  "id": "playList_960A18B5_8615_E14C_41AD_98470B3DFDD7",
  "class": "PlayList"
 },
 "this.popup_25AB8A34_3513_DE40_41C8_119007832823",
 {
  "id": "ImageResource_32BB558C_24AE_9034_41A0_905F3B8026D3",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_36E9C513_249E_702C_41C0_2CA0C18AAE54_0_0.jpg",
    "width": 1500,
    "class": "ImageResourceLevel",
    "height": 1000
   },
   {
    "url": "media/popup_36E9C513_249E_702C_41C0_2CA0C18AAE54_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_36E9C513_249E_702C_41C0_2CA0C18AAE54_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 "this.popup_36E9C513_249E_702C_41C0_2CA0C18AAE54",
 {
  "duration": 1000,
  "id": "effect_965C1E0B_8615_E144_41B9_7DA009E97536",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_9673FB12_8615_E744_41E0_642627CF1912",
  "initialPosition": {
   "hfov": 110,
   "yaw": -92.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_96043DF6_8615_E2CC_41CD_3459CC6BA20F",
  "initialPosition": {
   "hfov": 110,
   "yaw": -100.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
 "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_camera",
 {
  "duration": 1000,
  "id": "effect_EF6C1355_F62E_F8F5_41C5_B9A5C5CCED3E",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8"
], "children": [
 {
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "toolTipBackgroundColor": "#F6F6F6",
  "id": "MainViewer",
  "left": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadow": true,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderColor": "#000000",
  "width": "100%",
  "progressBackgroundOpacity": 1,
  "toolTipBorderRadius": 3,
  "playbackBarOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "minHeight": 50,
  "toolTipOpacity": 1,
  "progressBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "minWidth": 100,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "progressLeft": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipFontStyle": "normal",
  "toolTipFontFamily": "Arial",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "height": "100%",
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBorderSize": 0,
  "playbackBarBorderSize": 0,
  "paddingRight": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarBackgroundOpacity": 1,
  "progressBorderSize": 0,
  "playbackBarHeight": 10,
  "playbackBarHeadWidth": 6,
  "borderSize": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "propagateClick": false,
  "playbackBarBackgroundColorDirection": "vertical",
  "transitionDuration": 500,
  "progressBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "class": "ViewerArea",
  "playbackBarLeft": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarRight": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "paddingLeft": 0,
  "toolTipDisplayTime": 600,
  "transitionMode": "blending",
  "shadow": false,
  "toolTipFontColor": "#606060",
  "displayTooltipInTouchScreens": true,
  "playbackBarProgressBorderSize": 0,
  "toolTipPaddingRight": 6,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBorderColor": "#000000",
  "top": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBorderRadius": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipFontWeight": "normal",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingTop": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipPaddingTop": 4,
  "progressRight": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipBorderSize": 1,
  "toolTipBorderColor": "#767676",
  "playbackBarBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "progressOpacity": 1,
  "playbackBarBottom": 5,
  "data": {
   "name": "Main Viewer"
  },
  "progressBottom": 0,
  "progressHeight": 10,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical"
 },
 {
  "children": [
   {
    "backgroundColorRatios": [
     0.8
    ],
    "children": [
     {
      "toolTipFontSize": 12,
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0",
      "toolTipPaddingLeft": 6,
      "width": 75,
      "paddingLeft": 0,
      "toolTipBorderRadius": 3,
      "transparencyActive": true,
      "shadow": false,
      "toolTipFontColor": "#606060",
      "toolTipDisplayTime": 600,
      "backgroundOpacity": 0,
      "toolTipPaddingRight": 6,
      "toolTipShadowOpacity": 1,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "minHeight": 1,
      "toolTipOpacity": 1,
      "verticalAlign": "middle",
      "toolTipTextShadowColor": "#000000",
      "height": 50,
      "toolTipFontWeight": "normal",
      "toolTipShadowHorizontalLength": 0,
      "minWidth": 1,
      "mode": "toggle",
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipFontStyle": "normal",
      "click": "this.openLink('https://www.lalimafreezone.com/', '_top')",
      "toolTipFontFamily": "Arial",
      "pressedIconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0_pressed.png",
      "paddingTop": 0,
      "toolTip": "Home",
      "toolTipBorderSize": 1,
      "borderSize": 0,
      "toolTipBorderColor": "#767676",
      "paddingRight": 0,
      "horizontalAlign": "center",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0.png",
      "propagateClick": false,
      "data": {
       "name": "Button_home"
      },
      "toolTipPaddingBottom": 4,
      "class": "IconButton",
      "cursor": "hand",
      "toolTipTextShadowBlurRadius": 3,
      "paddingBottom": 0,
      "toolTipShadowVerticalLength": 0
     },
     {
      "toolTipFontSize": 12,
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2",
      "toolTipPaddingLeft": 6,
      "width": 75,
      "paddingLeft": 0,
      "toolTipBorderRadius": 3,
      "transparencyActive": true,
      "shadow": false,
      "toolTipFontColor": "#606060",
      "toolTipDisplayTime": 600,
      "backgroundOpacity": 0,
      "toolTipPaddingRight": 6,
      "toolTipShadowOpacity": 1,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "minHeight": 1,
      "toolTipOpacity": 1,
      "verticalAlign": "middle",
      "toolTipTextShadowColor": "#000000",
      "height": 50,
      "toolTipFontWeight": "normal",
      "toolTipShadowHorizontalLength": 0,
      "minWidth": 1,
      "mode": "toggle",
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipFontStyle": "normal",
      "click": "if(!this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, true, 0, this.effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42, 'showEffect', false) } else { this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, false, 0, this.effect_D3728F7A_DF8C_960C_417C_830810DD2653, 'hideEffect', false) }",
      "toolTipFontFamily": "Arial",
      "pressedIconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2_pressed.png",
      "paddingTop": 0,
      "toolTip": "Map",
      "toolTipBorderSize": 1,
      "borderSize": 0,
      "toolTipBorderColor": "#767676",
      "paddingRight": 0,
      "horizontalAlign": "center",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2.png",
      "propagateClick": false,
      "data": {
       "name": "Button_Map"
      },
      "toolTipPaddingBottom": 4,
      "class": "IconButton",
      "cursor": "hand",
      "toolTipTextShadowBlurRadius": 3,
      "paddingBottom": 0,
      "toolTipShadowVerticalLength": 0
     },
     {
      "maxHeight": 225,
      "id": "Image_5DD52A9D_53AB_71BB_41D2_61C6638CC12D",
      "width": 75,
      "maxWidth": 225,
      "backgroundOpacity": 0,
      "shadow": false,
      "paddingLeft": 0,
      "url": "skin/Image_5DD52A9D_53AB_71BB_41D2_61C6638CC12D.png",
      "borderRadius": 0,
      "minHeight": 1,
      "verticalAlign": "middle",
      "height": 50,
      "minWidth": 1,
      "click": "this.openLink('https://www.lalimafreezone.com/real-estate', '_top')",
      "paddingTop": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "propagateClick": false,
      "data": {
       "name": "Image2280"
      },
      "scaleMode": "fit_inside",
      "class": "Image",
      "cursor": "hand",
      "paddingBottom": 0
     },
     "this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667"
    ],
    "id": "Container_FD43509A_EC70_8CA6_41E8_9E5B7D453FAE",
    "width": 334,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "backgroundOpacity": 0.1,
    "shadow": false,
    "borderRadius": 0,
    "minHeight": 77,
    "layout": "horizontal",
    "scrollBarWidth": 10,
    "backgroundColorDirection": "vertical",
    "verticalAlign": "middle",
    "scrollBarOpacity": 0.5,
    "overflow": "scroll",
    "height": 77,
    "minWidth": 334,
    "scrollBarColor": "#000000",
    "backgroundColor": [
     "#000000"
    ],
    "paddingTop": 0,
    "scrollBarMargin": 2,
    "paddingRight": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container_btones"
    },
    "gap": 10,
    "class": "Container",
    "paddingBottom": 0
   }
  ],
  "id": "Container_D19AA380_DE1B_2AF3_41EA_D9B3468B686F",
  "left": "0%",
  "width": "100%",
  "scrollBarVisible": "rollOver",
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "shadow": false,
  "borderRadius": 0,
  "layout": "horizontal",
  "scrollBarWidth": 10,
  "minHeight": 1,
  "scrollBarOpacity": 0.5,
  "height": "18.033%",
  "verticalAlign": "middle",
  "minWidth": 1,
  "overflow": "scroll",
  "bottom": "0%",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "paddingRight": 0,
  "borderSize": 0,
  "horizontalAlign": "center",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Container_Menu"
  },
  "gap": 10,
  "class": "Container",
  "paddingBottom": 0
 },
 {
  "children": [
   {
    "children": [
     "this.MapViewer",
     {
      "maxHeight": 264,
      "id": "Image_E84AED1C_E346_1439_41DD_9142DAACB163",
      "width": "100%",
      "maxWidth": 448,
      "backgroundOpacity": 0,
      "shadow": false,
      "paddingLeft": 0,
      "url": "skin/Image_E84AED1C_E346_1439_41DD_9142DAACB163.png",
      "borderRadius": 0,
      "minHeight": 1,
      "height": "27.233%",
      "verticalAlign": "middle",
      "minWidth": 1,
      "paddingTop": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "propagateClick": false,
      "data": {
       "name": "Simbologia"
      },
      "scaleMode": "fit_inside",
      "class": "Image",
      "paddingBottom": 0
     }
    ],
    "id": "Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5",
    "width": "100%",
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "minHeight": 1,
    "layout": "vertical",
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "height": "81.45%",
    "verticalAlign": "middle",
    "minWidth": 1,
    "overflow": "scroll",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "paddingRight": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container_Map"
    },
    "gap": 10,
    "class": "Container",
    "paddingBottom": 0
   }
  ],
  "id": "Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F",
  "width": "29.316%",
  "scrollBarVisible": "rollOver",
  "paddingLeft": 0,
  "right": "0%",
  "shadow": false,
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "creationPolicy": "inAdvance",
  "minHeight": 1,
  "layout": "vertical",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "top": "2.05%",
  "height": "77.049%",
  "verticalAlign": "top",
  "minWidth": 1,
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "paddingRight": 0,
  "borderSize": 0,
  "horizontalAlign": "center",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Main_Container"
  },
  "gap": 10,
  "visible": false,
  "class": "Container",
  "paddingBottom": 0
 },
 {
  "children": [
   {
    "fontFamily": "Arial",
    "backgroundColorRatios": [
     0,
     1
    ],
    "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F",
    "prompt": "Location List",
    "popUpBackgroundOpacity": 0.72,
    "width": "20.256%",
    "paddingLeft": 5,
    "backgroundOpacity": 0.72,
    "popUpShadowOpacity": 0,
    "shadow": false,
    "popUpBackgroundColor": "#FFFFFF",
    "arrowBeforeLabel": false,
    "selectedPopUpBackgroundColor": "#0066FF",
    "borderRadius": 4,
    "minHeight": 20,
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "backgroundColorDirection": "vertical",
    "popUpShadowColor": "#000000",
    "fontColor": "#333333",
    "backgroundColor": [
     "#00CCFF",
     "#0099FF"
    ],
    "minWidth": 200,
    "popUpBorderRadius": 0,
    "popUpShadowSpread": 1,
    "popUpGap": 0,
    "height": "27.397%",
    "paddingTop": 0,
    "paddingRight": 5,
    "selectedPopUpFontColor": "#FFFFFF",
    "borderSize": 0,
    "fontStyle": "normal",
    "popUpShadow": false,
    "playList": "this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
    "arrowColor": "#0066FF",
    "popUpShadowBlurRadius": 6,
    "propagateClick": false,
    "data": {
     "name": "Location List"
    },
    "fontSize": 14,
    "textDecoration": "none",
    "popUpFontColor": "#000000",
    "class": "DropDown",
    "gap": 0,
    "paddingBottom": 0,
    "fontWeight": "normal"
   }
  ],
  "id": "Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F",
  "left": "0%",
  "width": "100%",
  "scrollBarVisible": "rollOver",
  "paddingLeft": 0,
  "shadow": false,
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "minHeight": 1,
  "layout": "horizontal",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "top": "0.96%",
  "height": "10%",
  "verticalAlign": "top",
  "minWidth": 1,
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "paddingRight": 0,
  "borderSize": 0,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "ContainerDropDown"
  },
  "gap": 10,
  "class": "Container",
  "paddingBottom": 0
 },
 {
  "fontFamily": "Arial",
  "id": "Label_E2D61738_F65E_D8BA_41DD_6888E340C197",
  "left": "0%",
  "width": "100%",
  "paddingLeft": 0,
  "textShadowOpacity": 1,
  "shadow": false,
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "text": "La Lima Free Zone",
  "minHeight": 1,
  "textShadowVerticalLength": 1,
  "top": "0%",
  "fontColor": "#FFFFFF",
  "height": "10%",
  "textShadowColor": "#000000",
  "minWidth": 1,
  "textShadowBlurRadius": 3,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "paddingRight": 0,
  "borderSize": 0,
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "propagateClick": false,
  "data": {
   "name": "Label_La Lima Free Zone"
  },
  "fontSize": 20,
  "textDecoration": "none",
  "visible": false,
  "class": "Label",
  "textShadowHorizontalLength": 1,
  "paddingBottom": 0,
  "fontWeight": "normal"
 },
 {
  "fontFamily": "Arial",
  "id": "Label_E253EC4C_F622_28DA_41DB_546DF82EE842",
  "left": "0%",
  "width": "100%",
  "paddingLeft": 0,
  "textShadowOpacity": 1,
  "shadow": false,
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "text": "Cartago City",
  "minHeight": 1,
  "textShadowVerticalLength": 1,
  "top": "0%",
  "fontColor": "#FFFFFF",
  "height": "10%",
  "textShadowColor": "#000000",
  "minWidth": 1,
  "textShadowBlurRadius": 3,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "paddingRight": 0,
  "borderSize": 0,
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "propagateClick": false,
  "data": {
   "name": "Label_Cartago City"
  },
  "fontSize": 20,
  "textDecoration": "none",
  "visible": false,
  "class": "Label",
  "textShadowHorizontalLength": 1,
  "paddingBottom": 0,
  "fontWeight": "normal"
 },
 {
  "fontFamily": "Arial",
  "id": "Label_E216BE12_F622_684F_41EC_C2D2817E217E",
  "left": "0%",
  "width": "100%",
  "paddingLeft": 0,
  "textShadowOpacity": 1,
  "shadow": false,
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "text": "Corporate Center Project",
  "minHeight": 1,
  "textShadowVerticalLength": 1,
  "top": "0%",
  "fontColor": "#FFFFFF",
  "height": "13.108%",
  "textShadowColor": "#000000",
  "minWidth": 1,
  "textShadowBlurRadius": 3,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "paddingRight": 0,
  "borderSize": 0,
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "propagateClick": false,
  "data": {
   "name": "Label_Corporate Center"
  },
  "fontSize": 20,
  "textDecoration": "none",
  "visible": false,
  "class": "Label",
  "textShadowHorizontalLength": 1,
  "paddingBottom": 0,
  "fontWeight": "normal"
 },
 {
  "fontFamily": "Arial",
  "id": "Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515",
  "left": "0%",
  "width": "100%",
  "paddingLeft": 0,
  "textShadowOpacity": 1,
  "shadow": false,
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "text": "Corporate Building",
  "minHeight": 1,
  "textShadowVerticalLength": 1,
  "top": "6%",
  "fontColor": "#FFFFFF",
  "height": "3.5%",
  "textShadowColor": "#000000",
  "minWidth": 1,
  "textShadowBlurRadius": 3,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "paddingRight": 0,
  "borderSize": 0,
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "propagateClick": false,
  "data": {
   "name": "Label_Corporate Building"
  },
  "fontSize": 20,
  "textDecoration": "none",
  "visible": false,
  "class": "Label",
  "textShadowHorizontalLength": 1,
  "paddingBottom": 0,
  "fontWeight": "normal"
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "children": [
     {
      "backgroundColorRatios": [
       0
      ],
      "id": "WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21",
      "width": "99.907%",
      "paddingLeft": 0,
      "backgroundOpacity": 1,
      "right": "0%",
      "shadow": false,
      "url": "https://www.dailymotion.com/embed/video/kzStCdckcK75zLvzVdv?queue-enable=false\n",
      "borderRadius": 0,
      "minHeight": 1,
      "backgroundColorDirection": "vertical",
      "top": "0%",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minWidth": 1,
      "height": "100%",
      "paddingTop": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "scrollEnabled": true,
      "propagateClick": false,
      "data": {
       "name": "WebFrame_Zollner"
      },
      "visible": false,
      "class": "WebFrame",
      "insetBorder": false,
      "paddingBottom": 0
     },
     {
      "backgroundColorRatios": [
       0
      ],
      "id": "WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB",
      "left": "0%",
      "width": "100%",
      "paddingLeft": 0,
      "backgroundOpacity": 1,
      "shadow": false,
      "url": "https://www.dailymotion.com/embed/video/k5CPUN2JVgV5TXvAxxe?queue-enable=false",
      "borderRadius": 0,
      "minHeight": 1,
      "backgroundColorDirection": "vertical",
      "top": "0%",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minWidth": 1,
      "height": "100%",
      "paddingTop": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "scrollEnabled": true,
      "propagateClick": false,
      "data": {
       "name": "WebFrame_CC"
      },
      "visible": false,
      "class": "WebFrame",
      "insetBorder": false,
      "paddingBottom": 0
     },
     {
      "backgroundColorRatios": [
       0
      ],
      "id": "WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411",
      "left": "0%",
      "width": "100%",
      "paddingLeft": 0,
      "backgroundOpacity": 1,
      "shadow": false,
      "url": "https://www.dailymotion.com/embed/video/k1DHnDG2YiE1ncvzVks?queue-enable=false",
      "borderRadius": 0,
      "minHeight": 1,
      "backgroundColorDirection": "vertical",
      "top": "0%",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minWidth": 1,
      "height": "100%",
      "paddingTop": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "scrollEnabled": true,
      "propagateClick": false,
      "data": {
       "name": "WebFrame_Coloplast"
      },
      "visible": false,
      "class": "WebFrame",
      "insetBorder": false,
      "paddingBottom": 0
     },
     {
      "maxHeight": 396,
      "id": "Image_57742DA6_5884_2676_41C4_D20EEA93A077",
      "width": "6.97%",
      "maxWidth": 394,
      "backgroundOpacity": 0,
      "right": "0%",
      "shadow": false,
      "paddingLeft": 0,
      "url": "skin/Image_57742DA6_5884_2676_41C4_D20EEA93A077.png",
      "borderRadius": 0,
      "minHeight": 1,
      "top": "0%",
      "height": "10.98%",
      "verticalAlign": "middle",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, false, 0, null, null, false)",
      "paddingTop": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "propagateClick": false,
      "data": {
       "name": "Button_Close"
      },
      "scaleMode": "fit_inside",
      "class": "Image",
      "paddingBottom": 0
     }
    ],
    "id": "Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41",
    "left": "4.32%",
    "width": "91.341%",
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "backgroundOpacity": 0.3,
    "shadow": false,
    "borderRadius": 0,
    "layout": "absolute",
    "scrollBarWidth": 10,
    "minHeight": 1,
    "scrollBarOpacity": 0.5,
    "backgroundColorDirection": "vertical",
    "bottom": "3.11%",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "verticalAlign": "top",
    "minWidth": 1,
    "overflow": "scroll",
    "scrollBarColor": "#000000",
    "height": "91.081%",
    "paddingTop": 0,
    "scrollBarMargin": 2,
    "paddingRight": 0,
    "borderSize": 0,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Web container "
    },
    "gap": 10,
    "class": "Container",
    "paddingBottom": 0
   }
  ],
  "id": "Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E",
  "left": "0%",
  "width": "100%",
  "scrollBarVisible": "rollOver",
  "paddingLeft": 0,
  "backgroundOpacity": 0.3,
  "shadow": false,
  "borderRadius": 0,
  "creationPolicy": "inAdvance",
  "minHeight": 1,
  "layout": "absolute",
  "scrollBarWidth": 10,
  "backgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "backgroundColor": [
   "#000000"
  ],
  "verticalAlign": "top",
  "minWidth": 1,
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "height": "100%",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "paddingRight": 0,
  "borderSize": 0,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Main Container Web link"
  },
  "gap": 10,
  "visible": false,
  "class": "Container",
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "id": "veilPopupPanorama",
  "left": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0.55,
  "right": 0,
  "shadow": false,
  "borderRadius": 0,
  "minHeight": 0,
  "top": 0,
  "backgroundColorDirection": "vertical",
  "bottom": 0,
  "backgroundColor": [
   "#000000"
  ],
  "showEffect": {
   "duration": 350,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "minWidth": 0,
  "paddingTop": 0,
  "paddingRight": 0,
  "borderSize": 0,
  "propagateClick": false,
  "data": {
   "name": "UIComponent5980"
  },
  "visible": false,
  "class": "UIComponent",
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [],
  "id": "zoomImagePopupPanorama",
  "left": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 1,
  "right": 0,
  "shadow": false,
  "borderRadius": 0,
  "minHeight": 0,
  "top": 0,
  "backgroundColorDirection": "vertical",
  "bottom": 0,
  "backgroundColor": [],
  "minWidth": 0,
  "paddingTop": 0,
  "paddingRight": 0,
  "borderSize": 0,
  "propagateClick": false,
  "data": {
   "name": "ZoomImage5981"
  },
  "visible": false,
  "scaleMode": "custom",
  "class": "ZoomImage",
  "paddingBottom": 0
 },
 {
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "closeButtonPopupPanorama",
  "pressedIconColor": "#888888",
  "paddingLeft": 5,
  "backgroundOpacity": 0.3,
  "fontSize": "1.29vh",
  "right": 10,
  "shadow": false,
  "shadowSpread": 1,
  "borderRadius": 0,
  "minHeight": 0,
  "layout": "horizontal",
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "verticalAlign": "middle",
  "top": 10,
  "borderColor": "#000000",
  "shadowColor": "#000000",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "rollOverIconColor": "#666666",
  "showEffect": {
   "duration": 350,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "minWidth": 0,
  "mode": "push",
  "label": "",
  "paddingTop": 5,
  "gap": 5,
  "paddingRight": 5,
  "iconColor": "#000000",
  "borderSize": 0,
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "iconBeforeLabel": true,
  "iconLineWidth": 5,
  "propagateClick": false,
  "data": {
   "name": "CloseButton5982"
  },
  "iconWidth": 20,
  "fontColor": "#FFFFFF",
  "visible": false,
  "class": "CloseButton",
  "textDecoration": "none",
  "iconHeight": 20,
  "cursor": "hand",
  "paddingBottom": 5,
  "fontWeight": "normal"
 }
], 
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_962E18DE_8615_E2FC_41A3_9F090C8EDD6A.set('selectedIndex', 0)",
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 20,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "height": "100%",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "borderSize": 0,
 "scripts": {
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "existsKey": function(key){  return key in window; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "unregisterKey": function(key){  delete window[key]; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); }
 },
 "horizontalAlign": "left",
 "contentOpaque": false,
 "propagateClick": false,
 "data": {
  "name": "Player7285"
 },
 "mouseWheelEnabled": true,
 "gap": 10,
 "class": "Player",
 "desktopMipmappingEnabled": false,
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true
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
