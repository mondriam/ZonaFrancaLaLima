(function(){
    var script = { "definitions": [
 {
  "easing": "cubic_in_out",
  "id": "effect_7FBDE7BB_64BC_8A2E_41D1_96CD21BC7A3F",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7D58D66F_64BC_8A26_41A0_A02F9CD87A16",
  "initialPosition": {
   "yaw": 94.62,
   "hfov": 105,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "rotationY": 0,
  "rotationX": 0,
  "yaw": -32.7,
  "hideEasing": "cubic_out",
  "rotationZ": 0,
  "popupMaxWidth": "95%",
  "showEasing": "cubic_in",
  "id": "popup_3638CA38_249B_905C_41B3_EA26EB9333F0",
  "hfov": 5.66,
  "popupMaxHeight": "95%",
  "showDuration": 500,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/popup_3638CA38_249B_905C_41B3_EA26EB9333F0_0_1.jpg",
     "width": 1024,
     "height": 580,
     "class": "ImageResourceLevel"
    }
   ]
  },
  "pitch": 17.08,
  "hideDuration": 500,
  "popupDistance": 100,
  "class": "PopupPanoramaOverlay"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_7FBA87C6_64BC_8A66_41D8_AF8888F9F40E",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_7FA0F7BB_64BC_8A2E_41BA_50D24F689ABA",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_7FBC37C3_64BC_8A5E_41D8_A87237B63291",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "thumbnailUrl": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_t.jpg",
  "label": "Cartago City",
  "id": "panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "cardboardMenu": {
   "fontFamily": "Arial",
   "class": "Menu",
   "selectedBackgroundColor": "#202020",
   "label": "Media",
   "id": "Menu_7E5DD2BB_64BC_8A2E_41CC_93B6A583CFF8",
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
   "rollOverBackgroundColor": "#000000",
   "selectedFontColor": "#FFFFFF",
   "rollOverOpacity": 0.8,
   "opacity": 0.4,
   "backgroundColor": "#404040",
   "rollOverFontColor": "#FFFFFF",
   "fontColor": "#FFFFFF"
  },
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 100,
  "frames": [
   {
    "cube": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_hq.jpeg",
       "width": 10224,
       "height": 1704,
       "class": "ImageResourceLevel",
       "tags": [
        "oculusgo",
        "ipadpro"
       ]
      },
      {
       "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B.jpeg",
       "width": 6144,
       "height": 1024,
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15, this.camera_D0DA93EE_DE6E_2520_41CD_8775B6E7F959)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [],
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
           "height": 118,
           "class": "ImageResourceLevel"
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
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':50,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':50,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#FF0000','backgroundColorRatios':[0.09803921568627451],'borderSize':0,'iconColor':'#FFFFFF','backgroundOpacity':0.5,'rollOverBorderColor':'#000000','iconWidth':50,'borderColor':'#000000','pressedIconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#CCCCCC','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconHeight':50,'paddingTop':5}, null, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [],
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
           "height": 106,
           "class": "ImageResourceLevel"
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
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':50,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':50,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#FF0000','backgroundColorRatios':[0.09803921568627451],'borderSize':0,'iconColor':'#FFFFFF','backgroundOpacity':0.5,'rollOverBorderColor':'#000000','iconWidth':50,'borderColor':'#000000','pressedIconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#CCCCCC','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconHeight':50,'paddingTop':5}, null, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [],
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
           "height": 104,
           "class": "ImageResourceLevel"
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
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':50,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':50,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#FF0000','backgroundColorRatios':[0.09803921568627451],'borderSize':0,'iconColor':'#FFFFFF','backgroundOpacity':0.5,'rollOverBorderColor':'#000000','iconWidth':50,'borderColor':'#000000','pressedIconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#CCCCCC','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconHeight':50,'paddingTop':5}, this.ImageResource_E252A6BD_EF1D_EC9A_41D3_31F4A8966575, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [],
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
           "height": 104,
           "class": "ImageResourceLevel"
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
      "class": "HotspotPanoramaOverlay"
     },
     {
      "rotationY": 0,
      "rotationX": 0,
      "yaw": 43.77,
      "hideEasing": "cubic_out",
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "showEasing": "cubic_in",
      "id": "popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6",
      "hfov": 8.24,
      "popupMaxHeight": "95%",
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6_0_0.jpg",
         "width": 787,
         "height": 552,
         "class": "ImageResourceLevel"
        },
        {
         "url": "media/popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6_0_1.jpg",
         "width": 512,
         "height": 359,
         "class": "ImageResourceLevel"
        }
       ]
      },
      "pitch": 0.27,
      "hideDuration": 500,
      "popupDistance": 100,
      "class": "PopupPanoramaOverlay"
     },
     {
      "rotationY": 0,
      "rotationX": 0,
      "yaw": 85.84,
      "hideEasing": "cubic_out",
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "showEasing": "cubic_in",
      "id": "popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C",
      "hfov": 8.24,
      "popupMaxHeight": "95%",
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C_0_0.jpg",
         "width": 800,
         "height": 535,
         "class": "ImageResourceLevel"
        },
        {
         "url": "media/popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C_0_1.jpg",
         "width": 512,
         "height": 342,
         "class": "ImageResourceLevel"
        }
       ]
      },
      "pitch": 0.52,
      "hideDuration": 500,
      "popupDistance": 100,
      "class": "PopupPanoramaOverlay"
     },
     {
      "rotationY": 0,
      "rotationX": 0,
      "yaw": -73.96,
      "hideEasing": "cubic_out",
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "showEasing": "cubic_in",
      "id": "popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865",
      "hfov": 6.64,
      "popupMaxHeight": "95%",
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_1.jpg",
         "width": 1024,
         "height": 748,
         "class": "ImageResourceLevel"
        }
       ]
      },
      "pitch": 7.67,
      "hideDuration": 500,
      "popupDistance": 100,
      "class": "PopupPanoramaOverlay"
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "yaw": -132.82,
        "hfov": 17.78,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_2_0_map.gif",
           "width": 53,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 1.59,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_2_0.png",
           "width": 265,
           "height": 80,
           "class": "ImageResourceLevel"
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
      "id": "overlay_E37E9453_EF2C_E3EE_41CE_DD0115CEB1E5",
      "data": {
       "label": "La Lima"
      },
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "yaw": 61,
        "hfov": 27.31,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_1_0_map.gif",
           "width": 80,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 0.49,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_1_0.png",
           "width": 407,
           "height": 81,
           "class": "ImageResourceLevel"
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
      "id": "overlay_E29702E5_EF2C_24AA_41DF_D1E8119A0A3F",
      "data": {
       "label": "TEC University"
      },
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':50,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':50,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#FF0000','backgroundColorRatios':[0.09803921568627451],'borderSize':0,'iconColor':'#FFFFFF','backgroundOpacity':0.5,'rollOverBorderColor':'#000000','iconWidth':50,'borderColor':'#000000','pressedIconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#CCCCCC','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconHeight':50,'paddingTop':5}, this.ImageResource_E253E6BD_EF1D_EC9A_41EA_C503E65D3053, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [],
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
           "height": 99,
           "class": "ImageResourceLevel"
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
      "class": "HotspotPanoramaOverlay"
     },
     {
      "rotationY": 0,
      "rotationX": 0,
      "yaw": -123.25,
      "hideEasing": "cubic_out",
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "showEasing": "cubic_in",
      "id": "popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43",
      "hfov": 6.66,
      "popupMaxHeight": "95%",
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_1.jpg",
         "width": 1024,
         "height": 632,
         "class": "ImageResourceLevel"
        }
       ]
      },
      "pitch": -5.64,
      "hideDuration": 500,
      "popupDistance": 100,
      "class": "PopupPanoramaOverlay"
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "yaw": -116.34,
        "hfov": 8.66,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_11_0_map.gif",
           "width": 24,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.8,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_11_0.png",
           "width": 129,
           "height": 85,
           "class": "ImageResourceLevel"
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
      "id": "overlay_E63D12C8_F662_39DB_4170_7EF640601D86",
      "data": {
       "label": "INA"
      },
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "yaw": 97.38,
        "hfov": 15.83,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_10_0_map.gif",
           "width": 52,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 1.23,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_10_0.png",
           "width": 236,
           "height": 72,
           "class": "ImageResourceLevel"
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
      "id": "overlay_E75D89D8_F662_2BFB_41BB_D9250A0A17F6",
      "data": {
       "label": "Basilica"
      },
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "yaw": -64.87,
        "hfov": 12.22,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_9_0_map.gif",
           "width": 39,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 7.99,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_9_0.png",
           "width": 184,
           "height": 74,
           "class": "ImageResourceLevel"
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
      "id": "overlay_E6D140FE_F662_D9B7_41ED_B6DDE5F11AEE",
      "data": {
       "label": "Irazu"
      },
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_3CC23B7F_107F_4540_4180_ABF478E71F9A, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':50,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':50,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#FF0000','backgroundColorRatios':[0.09803921568627451],'borderSize':0,'iconColor':'#FFFFFF','backgroundOpacity':0.5,'rollOverBorderColor':'#000000','iconWidth':50,'borderColor':'#000000','pressedIconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#CCCCCC','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconHeight':50,'paddingTop':5}, this.ImageResource_20FB6245_107F_4740_41A8_9C0A46A92B4D, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [],
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
           "height": 104,
           "class": "ImageResourceLevel"
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
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "yaw": -104.29,
        "hfov": 19.47,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_13_0_map.gif",
           "width": 63,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 3.74,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_13_0.png",
           "width": 291,
           "height": 73,
           "class": "ImageResourceLevel"
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
      "id": "overlay_381D894C_1071_C540_41AF_D6F0E2E79C30",
      "data": {
       "label": "Bus Station"
      },
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_3BBE3C5B_107F_C340_4178_756995F5135C, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':50,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':50,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#FF0000','backgroundColorRatios':[0.09803921568627451],'borderSize':0,'iconColor':'#FFFFFF','backgroundOpacity':0.5,'rollOverBorderColor':'#000000','iconWidth':50,'borderColor':'#000000','pressedIconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#CCCCCC','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconHeight':50,'paddingTop':5}, null, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [],
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
           "height": 103,
           "class": "ImageResourceLevel"
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
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "yaw": -85.73,
        "hfov": 22.05,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_15_0_map.gif",
           "width": 66,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.84,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_15_0.png",
           "width": 329,
           "height": 79,
           "class": "ImageResourceLevel"
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
      "id": "overlay_3BFABA4C_1071_4740_4194_C4FC9991EEE4",
      "data": {
       "label": "Train Station"
      },
      "class": "HotspotPanoramaOverlay"
     },
     {
      "rotationY": 0,
      "rotationX": 0,
      "yaw": -105.77,
      "hideEasing": "cubic_out",
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "showEasing": "cubic_in",
      "id": "popup_3CC23B7F_107F_4540_4180_ABF478E71F9A",
      "hfov": 6.7,
      "popupMaxHeight": "95%",
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_1.jpg",
         "width": 1024,
         "height": 767,
         "class": "ImageResourceLevel"
        }
       ]
      },
      "pitch": -0.52,
      "hideDuration": 500,
      "popupDistance": 100,
      "class": "PopupPanoramaOverlay"
     },
     {
      "rotationY": 0,
      "rotationX": 0,
      "yaw": -99.48,
      "hideEasing": "cubic_out",
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "showEasing": "cubic_in",
      "id": "popup_3BBE3C5B_107F_C340_4178_756995F5135C",
      "hfov": 6.69,
      "popupMaxHeight": "95%",
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_3BBE3C5B_107F_C340_4178_756995F5135C_0_0.jpg",
         "width": 941,
         "height": 641,
         "class": "ImageResourceLevel"
        },
        {
         "url": "media/popup_3BBE3C5B_107F_C340_4178_756995F5135C_0_1.jpg",
         "width": 511,
         "height": 348,
         "class": "ImageResourceLevel"
        }
       ]
      },
      "pitch": -2.91,
      "hideDuration": 500,
      "popupDistance": 100,
      "class": "PopupPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_209897EC_11B3_4D40_41A2_837DB50E3A59, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':50,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':50,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#FF0000','backgroundColorRatios':[0.09803921568627451],'borderSize':0,'iconColor':'#FFFFFF','backgroundOpacity':0.5,'rollOverBorderColor':'#000000','iconWidth':50,'borderColor':'#000000','pressedIconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#CCCCCC','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconHeight':50,'paddingTop':5}, null, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [],
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
           "height": 103,
           "class": "ImageResourceLevel"
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
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "yaw": -69.51,
        "hfov": 17.1,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_17_0_map.gif",
           "width": 59,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 1.99,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_17_0.png",
           "width": 255,
           "height": 69,
           "class": "ImageResourceLevel"
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
      "id": "overlay_21F8CB1B_11B7_C6C1_41A4_790E87B46214",
      "data": {
       "label": "COVAO"
      },
      "class": "HotspotPanoramaOverlay"
     },
     {
      "rotationY": 0,
      "rotationX": 0,
      "yaw": -80.67,
      "hideEasing": "cubic_out",
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "showEasing": "cubic_in",
      "id": "popup_209897EC_11B3_4D40_41A2_837DB50E3A59",
      "hfov": 6.69,
      "popupMaxHeight": "95%",
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_209897EC_11B3_4D40_41A2_837DB50E3A59_0_0.jpg",
         "width": 960,
         "height": 720,
         "class": "ImageResourceLevel"
        },
        {
         "url": "media/popup_209897EC_11B3_4D40_41A2_837DB50E3A59_0_1.jpg",
         "width": 512,
         "height": 384,
         "class": "ImageResourceLevel"
        }
       ]
      },
      "pitch": 2,
      "hideDuration": 500,
      "popupDistance": 100,
      "class": "PopupPanoramaOverlay"
     }
    ],
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_t.jpg"
   }
  ],
  "mapLocations": [
   {
    "map": {
     "initialZoomFactor": 1,
     "thumbnailUrl": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_t.png",
     "label": "Costa-Rica-Map",
     "id": "map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "width": 500,
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C.png",
        "width": 500,
        "height": 563,
        "class": "ImageResourceLevel"
       }
      ]
     },
     "fieldOfViewOverlayInsideColor": "#000000",
     "maximumZoomFactor": 1.2,
     "fieldOfViewOverlayRadiusScale": 0.33,
     "scaleMode": "fit_inside",
     "overlays": [
      {
       "map": {
        "width": 50,
        "x": 280.3,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_HS_0_map.gif",
           "width": 25,
           "height": 24,
           "class": "ImageResourceLevel"
          }
         ]
        },
        "offsetX": 0,
        "y": 228.1,
        "offsetY": 0,
        "height": 50,
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 9)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 280.3,
        "height": 50,
        "y": 228.1,
        "class": "HotspotMapOverlayImage",
        "width": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_HS_0.png",
           "width": 50,
           "height": 49,
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_E2A9E771_EFFC_6DAB_41ED_732E2F091F5A",
       "data": {
        "label": "Image"
       },
       "rollOverDisplay": false
      }
     ],
     "minimumZoomFactor": 0.5,
     "height": 563,
     "class": "Map"
    },
    "x": 305.3,
    "angle": 93.36,
    "y": 253.1,
    "class": "PanoramaMapLocation"
   }
  ],
  "class": "Panorama"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D26D5FF_64BC_8E26_41A0_574CFF2E2FD8",
  "initialPosition": {
   "yaw": -72.35,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345F6D8F_20DF_6B94_410B_52B44954FB30",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "levels": [
   {
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_0.jpg",
    "width": 3861,
    "height": 2574,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_1.jpg",
    "width": 2048,
    "height": 1365,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_2.jpg",
    "width": 1024,
    "height": 682,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_3.jpg",
    "width": 512,
    "height": 341,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_C4896E50_D4F3_6B5D_41D3_2EEBDC3443C4",
  "class": "ImageResource"
 },
 "this.popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C",
 {
  "easing": "cubic_in_out",
  "id": "effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7EAAF67B_64BC_8A2E_41C6_06CE5608EF8D",
  "initialPosition": {
   "yaw": 14.49,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_camera",
  "initialPosition": {
   "yaw": 0,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345E7D8F_20DF_6B94_41B1_383A596C4C67",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_EF6DE039_F622_38BD_41E2_3149DB234972",
  "duration": 0,
  "class": "FadeInEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_789CE458_64BC_8E6A_41C0_9308A4EDAE8A",
  "initialPosition": {
   "yaw": 76.16,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_camera",
  "initialPosition": {
   "yaw": 0,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7FC3937F_64BC_8A26_41D2_3BCB2667D533",
  "initialPosition": {
   "yaw": -40.57,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_camera",
  "initialPosition": {
   "yaw": 67.14,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": -0.98
  }
 },
 {
  "rotationY": 0,
  "rotationX": 0,
  "yaw": -13.2,
  "hideEasing": "cubic_out",
  "rotationZ": 0,
  "popupMaxWidth": "95%",
  "showEasing": "cubic_in",
  "id": "popup_36E9C513_249E_702C_41C0_2CA0C18AAE54",
  "hfov": 5.92,
  "popupMaxHeight": "95%",
  "showDuration": 500,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/popup_36E9C513_249E_702C_41C0_2CA0C18AAE54_0_1.jpg",
     "width": 1024,
     "height": 682,
     "class": "ImageResourceLevel"
    }
   ]
  },
  "pitch": -1.15,
  "hideDuration": 500,
  "popupDistance": 100,
  "class": "PopupPanoramaOverlay"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7D899583_64BC_8EDE_41D6_4B8E5E257DCF",
  "initialPosition": {
   "yaw": 118.98,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "thumbnailUrl": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_t.jpg",
  "label": "7-Centro Atr\u00e1s",
  "id": "panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
  "adjacentPanoramas": [
   {
    "panorama": {
     "thumbnailUrl": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_t.jpg",
     "label": "6-Lagunas de Retencion",
     "id": "panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
       "yaw": 139.43,
       "backwardYaw": 23.32,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "panorama": {
        "thumbnailUrl": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_t.jpg",
        "label": "5-Arte Rotonda",
        "id": "panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
          "yaw": -5.23,
          "backwardYaw": -30.03,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "panorama": {
           "thumbnailUrl": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_t.jpg",
           "label": "IMG_20180114_184740_00_077-edit",
           "id": "panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B",
           "adjacentPanoramas": [
            {
             "panorama": {
              "thumbnailUrl": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_t.jpg",
              "label": "IMG_20180114_182756_00_062-edit",
              "id": "panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765",
              "adjacentPanoramas": [
               {
                "panorama": {
                 "thumbnailUrl": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_t.jpg",
                 "label": "helipuerto",
                 "id": "panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
                 "adjacentPanoramas": [
                  {
                   "panorama": {
                    "thumbnailUrl": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_t.jpg",
                    "label": "12-Entre Zollner y Coloplast",
                    "id": "panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765",
                      "class": "AdjacentPanorama"
                     },
                     {
                      "panorama": "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
                      "yaw": -90.48,
                      "backwardYaw": -117.3,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "panorama": {
                       "thumbnailUrl": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_t.jpg",
                       "label": "11-Entre Edwards y Coloplast",
                       "id": "panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765",
                         "class": "AdjacentPanorama"
                        },
                        {
                         "panorama": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
                         "yaw": -94.64,
                         "backwardYaw": 179.05,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "panorama": {
                          "thumbnailUrl": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_t.jpg",
                          "label": "4-Frente Rotonda",
                          "id": "panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B",
                            "class": "AdjacentPanorama"
                           },
                           {
                            "panorama": "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
                            "yaw": -78.27,
                            "backwardYaw": 88.55,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "panorama": {
                             "thumbnailUrl": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_t.jpg",
                             "label": "1.2-Main Entrance",
                             "id": "panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B",
                               "class": "AdjacentPanorama"
                              },
                              {
                               "panorama": {
                                "thumbnailUrl": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_t.jpg",
                                "label": "Main Entrance",
                                "id": "panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
                                  "yaw": -19.33,
                                  "backwardYaw": 150.13,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": {
                                   "thumbnailUrl": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_t.jpg",
                                   "label": "IMG_20180114_162347_00_013-edit",
                                   "id": "panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1",
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765",
                                     "yaw": 154.31,
                                     "backwardYaw": -64.23,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    },
                                    {
                                     "panorama": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B",
                                     "yaw": -104.82,
                                     "backwardYaw": 36.44,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    },
                                    {
                                     "panorama": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
                                     "class": "AdjacentPanorama"
                                    },
                                    {
                                     "panorama": {
                                      "thumbnailUrl": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_t.jpg",
                                      "label": "IMG_20180114_164030_00_037(Opci\u00f3n2)-edit",
                                      "id": "panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A",
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765",
                                        "yaw": -103.84,
                                        "backwardYaw": -165.51,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       },
                                       {
                                        "panorama": {
                                         "thumbnailUrl": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_t.jpg",
                                         "label": "15-Esquina Heraus",
                                         "id": "panorama_69A80F4D_649D_BA6A_4181_FB07157852B5",
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": {
                                            "thumbnailUrl": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_t.jpg",
                                            "label": "8-Pastizal Atr\u00e1s",
                                            "id": "panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
                                              "yaw": -112.38,
                                              "backwardYaw": 107.65,
                                              "distance": 1,
                                              "class": "AdjacentPanorama"
                                             },
                                             {
                                              "panorama": "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5",
                                              "yaw": 72.35,
                                              "backwardYaw": 21.18,
                                              "distance": 1,
                                              "class": "AdjacentPanorama"
                                             },
                                             {
                                              "panorama": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B",
                                              "class": "AdjacentPanorama"
                                             },
                                             {
                                              "panorama": "this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A",
                                              "class": "AdjacentPanorama"
                                             }
                                            ],
                                            "pitch": 0,
                                            "partial": false,
                                            "vfov": 180,
                                            "hfovMax": 130,
                                            "hfov": 360,
                                            "hfovMin": 100,
                                            "frames": [
                                             {
                                              "sphere": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_hq.jpeg",
                                                 "width": 6434,
                                                 "height": 3217,
                                                 "class": "ImageResourceLevel",
                                                 "tags": [
                                                  "oculusgo",
                                                  "ipadpro"
                                                 ]
                                                },
                                                {
                                                 "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368.jpeg",
                                                 "width": 4002,
                                                 "height": 2001,
                                                 "class": "ImageResourceLevel"
                                                }
                                               ]
                                              },
                                              "overlays": [
                                               {
                                                "areas": [
                                                 {
                                                  "click": "this.startPanoramaWithCamera(this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5, this.camera_7D3D660B_64BC_8DEE_41D6_36EB1BE942A2); this.setMediaBehaviour(this.playList_7E6D428C_64BC_8AEA_415B_2FCA8937AA64, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "useHandCursor": true,
                                                "maps": [
                                                 {
                                                  "yaw": 72.35,
                                                  "hfov": 5.92,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_0_0_0_map.gif",
                                                     "width": 16,
                                                     "height": 16,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -0.2,
                                                  "class": "HotspotPanoramaOverlayMap"
                                                 }
                                                ],
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
                                                     "height": 105,
                                                     "class": "ImageResourceLevel"
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
                                                "class": "HotspotPanoramaOverlay"
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9, this.camera_7D26D5FF_64BC_8E26_41A0_574CFF2E2FD8); this.setMediaBehaviour(this.playList_7E015278_64BC_8A2A_41BF_67761E8AF2EA, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "useHandCursor": true,
                                                "maps": [
                                                 {
                                                  "yaw": -112.38,
                                                  "hfov": 5.9,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_1_0_0_map.gif",
                                                     "width": 16,
                                                     "height": 16,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -4.59,
                                                  "class": "HotspotPanoramaOverlayMap"
                                                 }
                                                ],
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
                                                     "height": 105,
                                                     "class": "ImageResourceLevel"
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
                                                "class": "HotspotPanoramaOverlay"
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "click": "this.setMediaBehaviour(this.playList_7E6C628C_64BC_8AEA_41BE_2C5A509C2039, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "useHandCursor": true,
                                                "maps": [
                                                 {
                                                  "yaw": 82.3,
                                                  "hfov": 4.28,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_2_0_0_map.gif",
                                                     "width": 16,
                                                     "height": 16,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": 43.73,
                                                  "class": "HotspotPanoramaOverlayMap"
                                                 }
                                                ],
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
                                                     "height": 105,
                                                     "class": "ImageResourceLevel"
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
                                                "class": "HotspotPanoramaOverlay"
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "click": "this.setMediaBehaviour(this.playList_7E1AA278_64BC_8A2A_41D6_31B54B5AA00F, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "useHandCursor": true,
                                                "maps": [
                                                 {
                                                  "yaw": -106.31,
                                                  "hfov": 4.46,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_3_0_0_map.gif",
                                                     "width": 16,
                                                     "height": 16,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": 41.06,
                                                  "class": "HotspotPanoramaOverlayMap"
                                                 }
                                                ],
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
                                                     "height": 105,
                                                     "class": "ImageResourceLevel"
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
                                                "class": "HotspotPanoramaOverlay"
                                               }
                                              ],
                                              "class": "SphericPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_t.jpg"
                                             }
                                            ],
                                            "mapLocations": [
                                             {
                                              "map": {
                                               "initialZoomFactor": 1,
                                               "thumbnailUrl": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_t.png",
                                               "label": "Zona Franca",
                                               "id": "map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                               "fieldOfViewOverlayOutsideOpacity": 0,
                                               "width": 500,
                                               "fieldOfViewOverlayInsideOpacity": 0.31,
                                               "fieldOfViewOverlayOutsideColor": "#000000",
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6.png",
                                                  "width": 500,
                                                  "height": 485,
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ]
                                               },
                                               "fieldOfViewOverlayInsideColor": "#000000",
                                               "maximumZoomFactor": 1.2,
                                               "fieldOfViewOverlayRadiusScale": 0.24,
                                               "scaleMode": "fit_inside",
                                               "overlays": [
                                                {
                                                 "map": {
                                                  "width": 80,
                                                  "x": 241.15,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_0_map.gif",
                                                     "width": 40,
                                                     "height": 40,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  },
                                                  "offsetX": 0,
                                                  "y": 382.75,
                                                  "offsetY": 0,
                                                  "height": 80,
                                                  "class": "HotspotMapOverlayMap"
                                                 },
                                                 "areas": [
                                                  {
                                                   "click": "this.mainPlayList.set('selectedIndex', 0)",
                                                   "mapColor": "#FF0000",
                                                   "class": "HotspotMapOverlayArea"
                                                  }
                                                 ],
                                                 "image": {
                                                  "x": 241.15,
                                                  "height": 80,
                                                  "y": 382.75,
                                                  "class": "HotspotMapOverlayImage",
                                                  "width": 80,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_0.png",
                                                     "width": 80,
                                                     "height": 80,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  }
                                                 },
                                                 "class": "AreaHotspotMapOverlay",
                                                 "useHandCursor": true,
                                                 "id": "overlay_C85F514D_DD1A_7E64_41E9_30CB45494AAF",
                                                 "data": {
                                                  "label": "Entrada"
                                                 },
                                                 "rollOverDisplay": false
                                                },
                                                {
                                                 "map": {
                                                  "width": 40,
                                                  "x": 262.7,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_1_map.gif",
                                                     "width": 20,
                                                     "height": 20,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  },
                                                  "offsetX": 0,
                                                  "y": 286.8,
                                                  "offsetY": 0,
                                                  "height": 40,
                                                  "class": "HotspotMapOverlayMap"
                                                 },
                                                 "areas": [
                                                  {
                                                   "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_7E062269_64BC_8A2A_41D3_887D0793443F.set('selectedIndex', -1); }, this); this.playList_7E062269_64BC_8A2A_41D3_887D0793443F.set('selectedIndex', 0)",
                                                   "mapColor": "#FF0000",
                                                   "class": "HotspotMapOverlayArea"
                                                  }
                                                 ],
                                                 "image": {
                                                  "x": 262.7,
                                                  "height": 40,
                                                  "y": 286.8,
                                                  "class": "HotspotMapOverlayImage",
                                                  "width": 40,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_1.png",
                                                     "width": 40,
                                                     "height": 40,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  }
                                                 },
                                                 "class": "AreaHotspotMapOverlay",
                                                 "useHandCursor": true,
                                                 "id": "overlay_CA4EA4DE_DD1B_A664_41E0_AE0B0C78521C",
                                                 "data": {
                                                  "label": "Rotonda"
                                                 },
                                                 "rollOverDisplay": false
                                                },
                                                {
                                                 "map": {
                                                  "width": 20,
                                                  "x": 286.9,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_2_map.gif",
                                                     "width": 10,
                                                     "height": 10,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  },
                                                  "offsetX": 0,
                                                  "y": 323.85,
                                                  "offsetY": 0,
                                                  "height": 20,
                                                  "class": "HotspotMapOverlayMap"
                                                 },
                                                 "areas": [
                                                  {
                                                   "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_7E33425F_64BC_8A66_41D1_9FF547E6DB9D.set('selectedIndex', -1); }, this); this.playList_7E33425F_64BC_8A66_41D1_9FF547E6DB9D.set('selectedIndex', 0)",
                                                   "mapColor": "#FF0000",
                                                   "class": "HotspotMapOverlayArea"
                                                  }
                                                 ],
                                                 "image": {
                                                  "x": 286.9,
                                                  "height": 20,
                                                  "y": 323.85,
                                                  "class": "HotspotMapOverlayImage",
                                                  "width": 20,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_2.png",
                                                     "width": 20,
                                                     "height": 20,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  }
                                                 },
                                                 "class": "AreaHotspotMapOverlay",
                                                 "useHandCursor": true,
                                                 "id": "overlay_CB611BF8_DD1A_A22C_41D9_CBADF82A7516",
                                                 "data": {
                                                  "label": "CC"
                                                 },
                                                 "rollOverDisplay": true
                                                },
                                                {
                                                 "map": {
                                                  "width": 40,
                                                  "x": 69.75,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_3_map.gif",
                                                     "width": 20,
                                                     "height": 20,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  },
                                                  "offsetX": 0,
                                                  "y": 287.7,
                                                  "offsetY": 0,
                                                  "height": 40,
                                                  "class": "HotspotMapOverlayMap"
                                                 },
                                                 "areas": [
                                                  {
                                                   "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_7E052269_64BC_8A2A_41CE_90BE4563B181.set('selectedIndex', -1); }, this); this.playList_7E052269_64BC_8A2A_41CE_90BE4563B181.set('selectedIndex', 0)",
                                                   "mapColor": "#FF0000",
                                                   "class": "HotspotMapOverlayArea"
                                                  }
                                                 ],
                                                 "image": {
                                                  "x": 69.75,
                                                  "height": 40,
                                                  "y": 287.7,
                                                  "class": "HotspotMapOverlayImage",
                                                  "width": 40,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_3.png",
                                                     "width": 40,
                                                     "height": 40,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  }
                                                 },
                                                 "class": "AreaHotspotMapOverlay",
                                                 "useHandCursor": true,
                                                 "id": "overlay_CB150A1A_DD16_ADEC_41E0_7B7C63D3E43F",
                                                 "data": {
                                                  "label": "Esquina Izquierda"
                                                 },
                                                 "rollOverDisplay": false
                                                },
                                                {
                                                 "map": {
                                                  "width": 40,
                                                  "x": 76.9,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_5_map.gif",
                                                     "width": 20,
                                                     "height": 20,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  },
                                                  "offsetX": 0,
                                                  "y": 415.15,
                                                  "offsetY": 0,
                                                  "height": 40,
                                                  "class": "HotspotMapOverlayMap"
                                                 },
                                                 "areas": [
                                                  {
                                                   "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_7E04B269_64BC_8A2A_41B3_E5968AC6AE2C.set('selectedIndex', -1); }, this); this.playList_7E04B269_64BC_8A2A_41B3_E5968AC6AE2C.set('selectedIndex', 0)",
                                                   "mapColor": "#FF0000",
                                                   "class": "HotspotMapOverlayArea"
                                                  }
                                                 ],
                                                 "image": {
                                                  "x": 76.9,
                                                  "height": 40,
                                                  "y": 415.15,
                                                  "class": "HotspotMapOverlayImage",
                                                  "width": 40,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_5.png",
                                                     "width": 40,
                                                     "height": 40,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  }
                                                 },
                                                 "class": "AreaHotspotMapOverlay",
                                                 "useHandCursor": true,
                                                 "id": "overlay_C5D00BE4_DD09_E224_4193_1E7B3F21AC96",
                                                 "data": {
                                                  "label": "Izquierda 3"
                                                 },
                                                 "rollOverDisplay": false
                                                },
                                                {
                                                 "map": {
                                                  "width": 20,
                                                  "x": 72.45,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_6_map.gif",
                                                     "width": 10,
                                                     "height": 10,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  },
                                                  "offsetX": 0,
                                                  "y": 208.05,
                                                  "offsetY": 0,
                                                  "height": 20,
                                                  "class": "HotspotMapOverlayMap"
                                                 },
                                                 "areas": [
                                                  {
                                                   "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_7E03E273_64BC_8A3E_41CD_9F708FB1A65E.set('selectedIndex', -1); }, this); this.playList_7E03E273_64BC_8A3E_41CD_9F708FB1A65E.set('selectedIndex', 0)",
                                                   "mapColor": "#FF0000",
                                                   "class": "HotspotMapOverlayArea"
                                                  }
                                                 ],
                                                 "image": {
                                                  "x": 72.45,
                                                  "height": 20,
                                                  "y": 208.05,
                                                  "class": "HotspotMapOverlayImage",
                                                  "width": 20,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_6.png",
                                                     "width": 20,
                                                     "height": 20,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  }
                                                 },
                                                 "class": "AreaHotspotMapOverlay",
                                                 "useHandCursor": true,
                                                 "id": "overlay_CAE100A4_DD0B_BE24_41EB_507D59E649BA",
                                                 "data": {
                                                  "label": "Edwards-Hareus"
                                                 },
                                                 "rollOverDisplay": true
                                                },
                                                {
                                                 "map": {
                                                  "width": 40,
                                                  "x": 58.4,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_7_map.gif",
                                                     "width": 20,
                                                     "height": 20,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  },
                                                  "offsetX": 0,
                                                  "y": 118.6,
                                                  "offsetY": 0,
                                                  "height": 40,
                                                  "class": "HotspotMapOverlayMap"
                                                 },
                                                 "areas": [
                                                  {
                                                   "class": "HotspotMapOverlayArea",
                                                   "mapColor": "#FF0000"
                                                  }
                                                 ],
                                                 "image": {
                                                  "x": 58.4,
                                                  "height": 40,
                                                  "y": 118.6,
                                                  "class": "HotspotMapOverlayImage",
                                                  "width": 40,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_7.png",
                                                     "width": 40,
                                                     "height": 40,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  }
                                                 },
                                                 "rollOverDisplay": false,
                                                 "useHandCursor": true,
                                                 "id": "overlay_CB9F085C_DD0A_AE64_41AF_81B501144D5C",
                                                 "data": {
                                                  "label": "Esquina Atras"
                                                 },
                                                 "class": "AreaHotspotMapOverlay"
                                                },
                                                {
                                                 "map": {
                                                  "width": 20,
                                                  "x": 178.3,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_8_map.gif",
                                                     "width": 10,
                                                     "height": 10,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  },
                                                  "offsetX": 0,
                                                  "y": 127.95,
                                                  "offsetY": 0,
                                                  "height": 20,
                                                  "class": "HotspotMapOverlayMap"
                                                 },
                                                 "areas": [
                                                  {
                                                   "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_7E031273_64BC_8A3E_41D4_271303DAAC76.set('selectedIndex', -1); }, this); this.playList_7E031273_64BC_8A3E_41D4_271303DAAC76.set('selectedIndex', 0)",
                                                   "mapColor": "#FF0000",
                                                   "class": "HotspotMapOverlayArea"
                                                  }
                                                 ],
                                                 "image": {
                                                  "x": 178.3,
                                                  "height": 20,
                                                  "y": 127.95,
                                                  "class": "HotspotMapOverlayImage",
                                                  "width": 20,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_8.png",
                                                     "width": 20,
                                                     "height": 20,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  }
                                                 },
                                                 "class": "AreaHotspotMapOverlay",
                                                 "useHandCursor": true,
                                                 "id": "overlay_CABD30AB_DD0E_9E23_41E5_2606484DA696",
                                                 "data": {
                                                  "label": "Atras1"
                                                 },
                                                 "rollOverDisplay": true
                                                },
                                                {
                                                 "map": {
                                                  "width": 20,
                                                  "x": 283.95,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_10_map.gif",
                                                     "width": 10,
                                                     "height": 10,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  },
                                                  "offsetX": 0,
                                                  "y": 206.9,
                                                  "offsetY": 0,
                                                  "height": 20,
                                                  "class": "HotspotMapOverlayMap"
                                                 },
                                                 "areas": [
                                                  {
                                                   "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_7E02A273_64BC_8A3E_418D_0FCC68F68CE1.set('selectedIndex', -1); }, this); this.playList_7E02A273_64BC_8A3E_418D_0FCC68F68CE1.set('selectedIndex', 0)",
                                                   "mapColor": "#FF0000",
                                                   "class": "HotspotMapOverlayArea"
                                                  }
                                                 ],
                                                 "image": {
                                                  "x": 283.95,
                                                  "height": 20,
                                                  "y": 206.9,
                                                  "class": "HotspotMapOverlayImage",
                                                  "width": 20,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_10.png",
                                                     "width": 20,
                                                     "height": 20,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  }
                                                 },
                                                 "class": "AreaHotspotMapOverlay",
                                                 "useHandCursor": true,
                                                 "id": "overlay_C53D65EB_DD09_A62C_41B4_A4FE1383C9E0",
                                                 "data": {
                                                  "label": "Plantas de tratamiento"
                                                 },
                                                 "rollOverDisplay": true
                                                },
                                                {
                                                 "map": {
                                                  "width": 20,
                                                  "x": 347.9,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_11_map.gif",
                                                     "width": 10,
                                                     "height": 10,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  },
                                                  "offsetX": 0,
                                                  "y": 254.95,
                                                  "offsetY": 0,
                                                  "height": 20,
                                                  "class": "HotspotMapOverlayMap"
                                                 },
                                                 "areas": [
                                                  {
                                                   "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_7E01C278_64BC_8A2A_41B1_2891A216580D.set('selectedIndex', -1); }, this); this.playList_7E01C278_64BC_8A2A_41B1_2891A216580D.set('selectedIndex', 0)",
                                                   "mapColor": "#FF0000",
                                                   "class": "HotspotMapOverlayArea"
                                                  }
                                                 ],
                                                 "image": {
                                                  "x": 347.9,
                                                  "height": 20,
                                                  "y": 254.95,
                                                  "class": "HotspotMapOverlayImage",
                                                  "width": 20,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_11.png",
                                                     "width": 20,
                                                     "height": 20,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  }
                                                 },
                                                 "class": "AreaHotspotMapOverlay",
                                                 "useHandCursor": true,
                                                 "id": "overlay_CA1A2975_DD0B_AE24_41D6_FDACEA0678CB",
                                                 "data": {
                                                  "label": "Derecha 1"
                                                 },
                                                 "rollOverDisplay": true
                                                },
                                                {
                                                 "map": {
                                                  "width": 40,
                                                  "x": 263,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_14_map.gif",
                                                     "width": 16,
                                                     "height": 16,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  },
                                                  "offsetX": 0,
                                                  "y": 121,
                                                  "offsetY": 0,
                                                  "height": 40,
                                                  "class": "HotspotMapOverlayMap"
                                                 },
                                                 "areas": [
                                                  {
                                                   "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_7E015278_64BC_8A2A_41BF_67761E8AF2EA.set('selectedIndex', -1); }, this); this.playList_7E015278_64BC_8A2A_41BF_67761E8AF2EA.set('selectedIndex', 0)",
                                                   "mapColor": "#FF0000",
                                                   "class": "HotspotMapOverlayArea"
                                                  }
                                                 ],
                                                 "image": {
                                                  "x": 263,
                                                  "height": 40,
                                                  "y": 121,
                                                  "class": "HotspotMapOverlayImage",
                                                  "width": 40,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_14.png",
                                                     "width": 40,
                                                     "height": 40,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  }
                                                 },
                                                 "class": "AreaHotspotMapOverlay",
                                                 "useHandCursor": true,
                                                 "id": "overlay_31036381_2420_B4E9_41BB_D2ED760E3DE7",
                                                 "data": {
                                                  "label": "Image"
                                                 },
                                                 "rollOverDisplay": false
                                                }
                                               ],
                                               "minimumZoomFactor": 0.5,
                                               "height": 485,
                                               "class": "Map"
                                              },
                                              "x": 188.3,
                                              "angle": 178.51,
                                              "y": 137.95,
                                              "class": "PanoramaMapLocation"
                                             }
                                            ],
                                            "class": "Panorama"
                                           },
                                           "yaw": 21.18,
                                           "backwardYaw": 72.35,
                                           "distance": 1,
                                           "class": "AdjacentPanorama"
                                          },
                                          {
                                           "panorama": {
                                            "thumbnailUrl": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_t.jpg",
                                            "label": "14-Entre Zollner y Heraus",
                                            "id": "panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5",
                                              "yaw": 99.68,
                                              "backwardYaw": 109.75,
                                              "distance": 1,
                                              "class": "AdjacentPanorama"
                                             },
                                             {
                                              "panorama": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
                                              "yaw": -95.46,
                                              "backwardYaw": 79.43,
                                              "distance": 1,
                                              "class": "AdjacentPanorama"
                                             },
                                             {
                                              "panorama": "this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A",
                                              "class": "AdjacentPanorama"
                                             }
                                            ],
                                            "pitch": 0,
                                            "partial": false,
                                            "vfov": 180,
                                            "hfovMax": 130,
                                            "hfov": 360,
                                            "hfovMin": 100,
                                            "frames": [
                                             {
                                              "sphere": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_hq.jpeg",
                                                 "width": 6434,
                                                 "height": 3217,
                                                 "class": "ImageResourceLevel",
                                                 "tags": [
                                                  "oculusgo",
                                                  "ipadpro"
                                                 ]
                                                },
                                                {
                                                 "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525.jpeg",
                                                 "width": 4002,
                                                 "height": 2001,
                                                 "class": "ImageResourceLevel"
                                                }
                                               ]
                                              },
                                              "overlays": [
                                               {
                                                "areas": [
                                                 {
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_7F6463FC_64BC_8A2A_41BC_28FAB8A4930E); this.setMediaBehaviour(this.playList_7E052269_64BC_8A2A_41CE_90BE4563B181, 0, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)",
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "useHandCursor": true,
                                                "maps": [
                                                 {
                                                  "yaw": -95.46,
                                                  "hfov": 5.92,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_0_0_0_map.gif",
                                                     "width": 16,
                                                     "height": 16,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -1.9,
                                                  "class": "HotspotPanoramaOverlayMap"
                                                 }
                                                ],
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
                                                     "height": 105,
                                                     "class": "ImageResourceLevel"
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
                                                "class": "HotspotPanoramaOverlay"
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "click": "this.startPanoramaWithCamera(this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5, this.camera_7F11D3F1_64BC_8A3A_41D6_ABA32524A88D); this.setMediaBehaviour(this.playList_7E6D428C_64BC_8AEA_415B_2FCA8937AA64, 0, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)",
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "useHandCursor": true,
                                                "maps": [
                                                 {
                                                  "yaw": 99.68,
                                                  "hfov": 5.92,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_1_0_0_map.gif",
                                                     "width": 16,
                                                     "height": 16,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -2.52,
                                                  "class": "HotspotPanoramaOverlayMap"
                                                 }
                                                ],
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
                                                     "height": 105,
                                                     "class": "ImageResourceLevel"
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
                                                "class": "HotspotPanoramaOverlay"
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "click": "this.setMediaBehaviour(this.playList_7E6C628C_64BC_8AEA_41BE_2C5A509C2039, 0, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)",
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "useHandCursor": true,
                                                "maps": [
                                                 {
                                                  "yaw": 92,
                                                  "hfov": 4.48,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_2_0_0_map.gif",
                                                     "width": 16,
                                                     "height": 16,
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": 40.89,
                                                  "class": "HotspotPanoramaOverlayMap"
                                                 }
                                                ],
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
                                                     "height": 105,
                                                     "class": "ImageResourceLevel"
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
                                                "class": "HotspotPanoramaOverlay"
                                               }
                                              ],
                                              "class": "SphericPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_t.jpg"
                                             }
                                            ],
                                            "mapLocations": [
                                             {
                                              "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                              "x": 82.45,
                                              "angle": -78.76,
                                              "y": 218.05,
                                              "class": "PanoramaMapLocation"
                                             }
                                            ],
                                            "class": "Panorama"
                                           },
                                           "yaw": 109.75,
                                           "backwardYaw": 99.68,
                                           "distance": 1,
                                           "class": "AdjacentPanorama"
                                          },
                                          {
                                           "panorama": "this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A",
                                           "class": "AdjacentPanorama"
                                          }
                                         ],
                                         "pitch": 0,
                                         "partial": false,
                                         "vfov": 180,
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "hfovMin": 100,
                                         "frames": [
                                          {
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_hq.jpeg",
                                              "width": 6434,
                                              "height": 3217,
                                              "class": "ImageResourceLevel",
                                              "tags": [
                                               "oculusgo",
                                               "ipadpro"
                                              ]
                                             },
                                             {
                                              "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5.jpeg",
                                              "width": 4002,
                                              "height": 2001,
                                              "class": "ImageResourceLevel"
                                             }
                                            ]
                                           },
                                           "overlays": [
                                            {
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525, this.camera_7E1DC723_64BC_8BDE_41D8_9503387CBAA2); this.setMediaBehaviour(this.playList_7E03E273_64BC_8A3E_41CD_9F708FB1A65E, 0, this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5)",
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "useHandCursor": true,
                                             "maps": [
                                              {
                                               "yaw": 109.75,
                                               "hfov": 5.92,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_0_0_0_map.gif",
                                                  "width": 16,
                                                  "height": 16,
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ]
                                               },
                                               "pitch": -2.42,
                                               "class": "HotspotPanoramaOverlayMap"
                                              }
                                             ],
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
                                                  "height": 105,
                                                  "class": "ImageResourceLevel"
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
                                             "class": "HotspotPanoramaOverlay"
                                            },
                                            {
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368, this.camera_7E0B5716_64BC_8BE6_41D1_56B7D2A7E69F); this.setMediaBehaviour(this.playList_7E031273_64BC_8A3E_41D4_271303DAAC76, 0, this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5)",
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "useHandCursor": true,
                                             "maps": [
                                              {
                                               "yaw": 21.18,
                                               "hfov": 5.92,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_1_0_0_map.gif",
                                                  "width": 16,
                                                  "height": 16,
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ]
                                               },
                                               "pitch": -1.96,
                                               "class": "HotspotPanoramaOverlayMap"
                                              }
                                             ],
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
                                                  "height": 105,
                                                  "class": "ImageResourceLevel"
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
                                             "class": "HotspotPanoramaOverlay"
                                            },
                                            {
                                             "areas": [
                                              {
                                               "click": "this.showPopupPanoramaOverlay(this.popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'iconColor':'#000000','backgroundOpacity':0.3,'rollOverBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'paddingTop':5}, this.ImageResource_72699DCF_64A4_9E66_417A_2D9BA948AEB2, null, null, null, null, false)",
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "useHandCursor": true,
                                             "maps": [
                                              {
                                               "yaw": 95.76,
                                               "hfov": 5.9,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_2_0_0_map.gif",
                                                  "width": 16,
                                                  "height": 16,
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ]
                                               },
                                               "pitch": -4.32,
                                               "class": "HotspotPanoramaOverlayMap"
                                              }
                                             ],
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
                                                  "height": 105,
                                                  "class": "ImageResourceLevel"
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
                                             "class": "HotspotPanoramaOverlay"
                                            },
                                            {
                                             "rotationY": 0,
                                             "rotationX": 0,
                                             "yaw": 95.76,
                                             "hideEasing": "cubic_out",
                                             "rotationZ": 0,
                                             "popupMaxWidth": "95%",
                                             "showEasing": "cubic_in",
                                             "id": "popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8",
                                             "hfov": 5.9,
                                             "popupMaxHeight": "95%",
                                             "showDuration": 500,
                                             "image": {
                                              "class": "ImageResource",
                                              "levels": [
                                               {
                                                "url": "media/popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8_0_1.jpg",
                                                "width": 1024,
                                                "height": 682,
                                                "class": "ImageResourceLevel"
                                               }
                                              ]
                                             },
                                             "pitch": -4.32,
                                             "hideDuration": 500,
                                             "popupDistance": 100,
                                             "class": "PopupPanoramaOverlay"
                                            },
                                            {
                                             "areas": [
                                              {
                                               "click": "this.setMediaBehaviour(this.playList_7E6C628C_64BC_8AEA_41BE_2C5A509C2039, 0, this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5)",
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "useHandCursor": true,
                                             "maps": [
                                              {
                                               "yaw": -116.66,
                                               "hfov": 6.52,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_3_0_0_map.gif",
                                                  "width": 16,
                                                  "height": 16,
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ]
                                               },
                                               "pitch": 42.73,
                                               "class": "HotspotPanoramaOverlayMap"
                                              }
                                             ],
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
                                                  "height": 158,
                                                  "class": "ImageResourceLevel"
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
                                             "class": "HotspotPanoramaOverlay"
                                            }
                                           ],
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_t.jpg"
                                          }
                                         ],
                                         "class": "Panorama"
                                        },
                                        "class": "AdjacentPanorama"
                                       },
                                       {
                                        "panorama": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B",
                                        "yaw": 169.03,
                                        "backwardYaw": 128.57,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       },
                                       {
                                        "panorama": "this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1",
                                        "yaw": -137.64,
                                        "backwardYaw": -157.61,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       }
                                      ],
                                      "pitch": 0,
                                      "partial": false,
                                      "vfov": 180,
                                      "hfovMax": 130,
                                      "hfov": 360,
                                      "hfovMin": 100,
                                      "frames": [
                                       {
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_hq.jpeg",
                                           "width": 6434,
                                           "height": 3217,
                                           "class": "ImageResourceLevel",
                                           "tags": [
                                            "oculusgo",
                                            "ipadpro"
                                           ]
                                          },
                                          {
                                           "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A.jpeg",
                                           "width": 4002,
                                           "height": 2001,
                                           "class": "ImageResourceLevel"
                                          }
                                         ]
                                        },
                                        "overlays": [
                                         {
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765, this.camera_7EAAF67B_64BC_8A2E_41C6_06CE5608EF8D); this.setMediaBehaviour(this.playList_7E103287_64BC_8AE6_41B1_C1FBA62DF62E, 0, this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A)",
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "yaw": -103.84,
                                            "hfov": 5.87,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_0_0_0_map.gif",
                                               "width": 16,
                                               "height": 16,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "pitch": 7.56,
                                            "class": "HotspotPanoramaOverlayMap"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 5.87,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_0_0.png",
                                               "width": 105,
                                               "height": 105,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "pitch": 7.56,
                                            "yaw": -103.84
                                           }
                                          ],
                                          "id": "overlay_3AF1064A_3514_B6C0_41B6_C8FDA6C3A7EF",
                                          "data": {
                                           "label": "Image"
                                          },
                                          "class": "HotspotPanoramaOverlay"
                                         },
                                         {
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1, this.camera_7EB0F68F_64BC_8AE6_41D6_90CDC69EFA3F); this.setMediaBehaviour(this.playList_7E35425F_64BC_8A66_41D1_8097051CDAED, 0, this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A)",
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "yaw": -137.64,
                                            "hfov": 5.87,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_1_0_0_map.gif",
                                               "width": 16,
                                               "height": 16,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "pitch": 7.26,
                                            "class": "HotspotPanoramaOverlayMap"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 5.87,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_1_0.png",
                                               "width": 105,
                                               "height": 105,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "pitch": 7.26,
                                            "yaw": -137.64
                                           }
                                          ],
                                          "id": "overlay_3AE3A224_3514_4E40_41B6_E5A9F3519057",
                                          "data": {
                                           "label": "Image"
                                          },
                                          "class": "HotspotPanoramaOverlay"
                                         },
                                         {
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B, this.camera_7EBEB685_64BC_8ADA_41CA_AA812E80437D); this.setMediaBehaviour(this.playList_7E1AA278_64BC_8A2A_41D6_31B54B5AA00F, 0, this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A)",
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "yaw": 169.03,
                                            "hfov": 5.85,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_2_0_0_map.gif",
                                               "width": 16,
                                               "height": 16,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "pitch": 8.7,
                                            "class": "HotspotPanoramaOverlayMap"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 5.85,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_2_0.png",
                                               "width": 105,
                                               "height": 105,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "pitch": 8.7,
                                            "yaw": 169.03
                                           }
                                          ],
                                          "id": "overlay_255682F9_3515_CFC0_41C5_2311EBF9376C",
                                          "data": {
                                           "label": "Image"
                                          },
                                          "class": "HotspotPanoramaOverlay"
                                         },
                                         {
                                          "areas": [
                                           {
                                            "click": "this.setMediaBehaviour(this.playList_7E6D428C_64BC_8AEA_415B_2FCA8937AA64, 0, this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A)",
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "yaw": -175.18,
                                            "hfov": 5.72,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_3_0_0_map.gif",
                                               "width": 16,
                                               "height": 16,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "pitch": -49.88,
                                            "class": "HotspotPanoramaOverlayMap"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 5.72,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_3_0.png",
                                               "width": 158,
                                               "height": 158,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "pitch": -49.88,
                                            "yaw": -175.18
                                           }
                                          ],
                                          "id": "overlay_25BCE11B_3514_CA40_41A6_5589E74670BF",
                                          "data": {
                                           "label": "Image"
                                          },
                                          "class": "HotspotPanoramaOverlay"
                                         },
                                         {
                                          "areas": [
                                           {
                                            "click": "this.showPopupPanoramaOverlay(this.popup_25AB8A34_3513_DE40_41C8_119007832823, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'iconColor':'#000000','backgroundOpacity':0.3,'rollOverBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'paddingTop':5}, this.ImageResource_232B696E_352D_BAC0_41B1_E8DFF9648419, null, null, null, null, false)",
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "yaw": 150.56,
                                            "hfov": 6.91,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_4_0_0_map.gif",
                                               "width": 16,
                                               "height": 16,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "pitch": -54.28,
                                            "class": "HotspotPanoramaOverlayMap"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 6.91,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_4_0.png",
                                               "width": 211,
                                               "height": 211,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "pitch": -54.28,
                                            "yaw": 150.56
                                           }
                                          ],
                                          "id": "overlay_259EF162_3513_CAC0_41C0_2958CC9D8253",
                                          "data": {
                                           "label": "Image"
                                          },
                                          "class": "HotspotPanoramaOverlay"
                                         },
                                         {
                                          "rotationY": 0,
                                          "rotationX": 0,
                                          "yaw": 150.56,
                                          "hideEasing": "cubic_out",
                                          "rotationZ": 0,
                                          "popupMaxWidth": "95%",
                                          "showEasing": "cubic_in",
                                          "id": "popup_25AB8A34_3513_DE40_41C8_119007832823",
                                          "hfov": 6.91,
                                          "popupMaxHeight": "95%",
                                          "showDuration": 500,
                                          "image": {
                                           "class": "ImageResource",
                                           "levels": [
                                            {
                                             "url": "media/popup_25AB8A34_3513_DE40_41C8_119007832823_0_1.jpg",
                                             "width": 1024,
                                             "height": 573,
                                             "class": "ImageResourceLevel"
                                            }
                                           ]
                                          },
                                          "pitch": -54.28,
                                          "hideDuration": 500,
                                          "popupDistance": 100,
                                          "class": "PopupPanoramaOverlay"
                                         }
                                        ],
                                        "class": "SphericPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_t.jpg"
                                       }
                                      ],
                                      "class": "Panorama"
                                     },
                                     "yaw": -157.61,
                                     "backwardYaw": -137.64,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    }
                                   ],
                                   "pitch": 0,
                                   "partial": false,
                                   "vfov": 180,
                                   "hfovMax": 130,
                                   "hfov": 360,
                                   "hfovMin": 100,
                                   "frames": [
                                    {
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_hq.jpeg",
                                        "width": 6434,
                                        "height": 3217,
                                        "class": "ImageResourceLevel",
                                        "tags": [
                                         "oculusgo",
                                         "ipadpro"
                                        ]
                                       },
                                       {
                                        "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1.jpeg",
                                        "width": 4002,
                                        "height": 2001,
                                        "class": "ImageResourceLevel"
                                       }
                                      ]
                                     },
                                     "overlays": [
                                      {
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765, this.camera_7ED6E6EC_64BC_8A2A_41CB_70AAFDDDB314); this.setMediaBehaviour(this.playList_7E103287_64BC_8AE6_41B1_C1FBA62DF62E, 0, this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1)",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "yaw": 154.31,
                                         "hfov": 5.85,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_0_0_0_map.gif",
                                            "width": 16,
                                            "height": 16,
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "pitch": 8.98,
                                         "class": "HotspotPanoramaOverlayMap"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.85,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_0_0.png",
                                            "width": 105,
                                            "height": 105,
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "pitch": 8.98,
                                         "yaw": 154.31
                                        }
                                       ],
                                       "id": "overlay_2A4CE51E_26DE_FCF7_4196_D6334F9FAF8E",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "class": "HotspotPanoramaOverlay"
                                      },
                                      {
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B, this.camera_7E27F6FB_64BC_8A2E_41D0_44E3240503B0); this.setMediaBehaviour(this.playList_7E1AA278_64BC_8A2A_41D6_31B54B5AA00F, 0, this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1)",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "yaw": -104.82,
                                         "hfov": 5.89,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_1_0_0_map.gif",
                                            "width": 16,
                                            "height": 16,
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "pitch": 5.81,
                                         "class": "HotspotPanoramaOverlayMap"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.89,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_1_0.png",
                                            "width": 105,
                                            "height": 105,
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "pitch": 5.81,
                                         "yaw": -104.82
                                        }
                                       ],
                                       "id": "overlay_2A4C951F_26DE_FCF5_41BE_E5D2C0016208",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "class": "HotspotPanoramaOverlay"
                                      },
                                      {
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A, this.camera_7E3A4709_64BC_8BEA_41CD_142B2C4E1098); this.setMediaBehaviour(this.playList_7E6C628C_64BC_8AEA_41BE_2C5A509C2039, 0, this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1)",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "yaw": -157.61,
                                         "hfov": 5.89,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_2_0_0_map.gif",
                                            "width": 16,
                                            "height": 16,
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "pitch": 5.93,
                                         "class": "HotspotPanoramaOverlayMap"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.89,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_2_0.png",
                                            "width": 105,
                                            "height": 105,
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "pitch": 5.93,
                                         "yaw": -157.61
                                        }
                                       ],
                                       "id": "overlay_2A4CA51F_26DE_FCF5_41A8_1632167373F7",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "class": "HotspotPanoramaOverlay"
                                      },
                                      {
                                       "areas": [
                                        {
                                         "click": "this.mainPlayList.set('selectedIndex', 0)",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "yaw": -22.77,
                                         "hfov": 8.47,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_3_0_0_map.gif",
                                            "width": 16,
                                            "height": 16,
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "pitch": -73.38,
                                         "class": "HotspotPanoramaOverlayMap"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 8.47,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_3_0.png",
                                            "width": 529,
                                            "height": 529,
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "pitch": -73.38,
                                         "yaw": -22.77
                                        }
                                       ],
                                       "id": "overlay_2A4CB51F_26DE_FCF5_41B8_45183B2D41C4",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "class": "HotspotPanoramaOverlay"
                                      },
                                      {
                                       "areas": [
                                        {
                                         "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false)",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "yaw": -49.24,
                                         "hfov": 4.86,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_4_0_0_map.gif",
                                            "width": 16,
                                            "height": 16,
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "pitch": -34.78,
                                         "class": "HotspotPanoramaOverlayMap"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 4.86,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_4_0.png",
                                            "width": 105,
                                            "height": 105,
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "pitch": -34.78,
                                         "yaw": -49.24
                                        }
                                       ],
                                       "id": "overlay_2A4C451F_26DE_FCF5_41B8_F4374578DD78",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "class": "HotspotPanoramaOverlay"
                                      },
                                      {
                                       "areas": [
                                        {
                                         "click": "this.showPopupPanoramaOverlay(this.popup_34BBD83C_246A_F055_41C1_EBEF48C7F767, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'iconColor':'#000000','backgroundOpacity':0.3,'rollOverBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'paddingTop':5}, this.ImageResource_32CBA59C_24AE_9054_41C1_95FEFF54BD80, null, null, null, null, false)",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "yaw": -45.25,
                                         "hfov": 5.42,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_5_0_0_map.gif",
                                            "width": 16,
                                            "height": 16,
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "pitch": -23.82,
                                         "class": "HotspotPanoramaOverlayMap"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.42,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_5_0.png",
                                            "width": 105,
                                            "height": 105,
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "pitch": -23.82,
                                         "yaw": -45.25
                                        }
                                       ],
                                       "id": "overlay_2A4C651F_26DE_FCF5_41BA_D6B40A3FE833",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "class": "HotspotPanoramaOverlay"
                                      },
                                      {
                                       "rotationY": 0,
                                       "rotationX": 0,
                                       "yaw": -45.25,
                                       "hideEasing": "cubic_out",
                                       "rotationZ": 0,
                                       "popupMaxWidth": "95%",
                                       "showEasing": "cubic_in",
                                       "id": "popup_34BBD83C_246A_F055_41C1_EBEF48C7F767",
                                       "hfov": 5.42,
                                       "popupMaxHeight": "95%",
                                       "showDuration": 500,
                                       "image": {
                                        "class": "ImageResource",
                                        "levels": [
                                         {
                                          "url": "media/popup_34BBD83C_246A_F055_41C1_EBEF48C7F767_0_1.jpg",
                                          "width": 1024,
                                          "height": 639,
                                          "class": "ImageResourceLevel"
                                         }
                                        ]
                                       },
                                       "pitch": -23.82,
                                       "hideDuration": 500,
                                       "popupDistance": 100,
                                       "class": "PopupPanoramaOverlay"
                                      }
                                     ],
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_t.jpg"
                                    }
                                   ],
                                   "class": "Panorama"
                                  },
                                  "class": "AdjacentPanorama"
                                 }
                                ],
                                "pitch": 0,
                                "partial": false,
                                "vfov": 180,
                                "cardboardMenu": "this.Menu_7E5DD2BB_64BC_8A2E_41CC_93B6A583CFF8",
                                "hfovMax": 130,
                                "hfov": 360,
                                "hfovMin": 100,
                                "frames": [
                                 {
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_hq.jpeg",
                                     "width": 6434,
                                     "height": 3217,
                                     "class": "ImageResourceLevel",
                                     "tags": [
                                      "oculusgo",
                                      "ipadpro"
                                     ]
                                    },
                                    {
                                     "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714.jpeg",
                                     "width": 4002,
                                     "height": 2001,
                                     "class": "ImageResourceLevel"
                                    }
                                   ]
                                  },
                                  "overlays": [
                                   {
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_7DE535B5_64BC_8E3A_41B2_8CA50394CFDB); this.setMediaBehaviour(this.playList_7E36025F_64BC_8A66_41B6_222EEA525106, 0, this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714)",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "yaw": -19.33,
                                      "hfov": 5.9,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_0_0_0_map.gif",
                                         "width": 16,
                                         "height": 16,
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "pitch": -5.22,
                                      "class": "HotspotPanoramaOverlayMap"
                                     }
                                    ],
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
                                         "height": 105,
                                         "class": "ImageResourceLevel"
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
                                    "class": "HotspotPanoramaOverlay"
                                   },
                                   {
                                    "areas": [
                                     {
                                      "click": "this.showPopupPanoramaOverlay(this.popup_3509F7CC_246E_7035_41AB_BB188EF81D62, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'iconColor':'#000000','backgroundOpacity':0.3,'rollOverBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'paddingTop':5}, this.ImageResource_3294856D_24AE_90F4_418D_8D9776AE9FF3, null, null, null, null, false)",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "yaw": -68.51,
                                      "hfov": 5.9,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_1_0_0_map.gif",
                                         "width": 16,
                                         "height": 16,
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "pitch": -4.39,
                                      "class": "HotspotPanoramaOverlayMap"
                                     }
                                    ],
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
                                         "height": 105,
                                         "class": "ImageResourceLevel"
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
                                    "class": "HotspotPanoramaOverlay"
                                   },
                                   {
                                    "areas": [
                                     {
                                      "click": "this.setMediaBehaviour(this.playList_7E35425F_64BC_8A66_41D1_8097051CDAED, 0, this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714)",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "yaw": -54.75,
                                      "hfov": 4.85,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_2_0_0_map.gif",
                                         "width": 16,
                                         "height": 16,
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "pitch": 34.99,
                                      "class": "HotspotPanoramaOverlayMap"
                                     }
                                    ],
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
                                         "height": 105,
                                         "class": "ImageResourceLevel"
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
                                    "class": "HotspotPanoramaOverlay"
                                   },
                                   {
                                    "rotationY": 0,
                                    "rotationX": 0,
                                    "yaw": -68.51,
                                    "hideEasing": "cubic_out",
                                    "rotationZ": 0,
                                    "popupMaxWidth": "95%",
                                    "showEasing": "cubic_in",
                                    "id": "popup_3509F7CC_246E_7035_41AB_BB188EF81D62",
                                    "hfov": 5.9,
                                    "popupMaxHeight": "95%",
                                    "showDuration": 500,
                                    "image": {
                                     "class": "ImageResource",
                                     "levels": [
                                      {
                                       "url": "media/popup_3509F7CC_246E_7035_41AB_BB188EF81D62_0_1.jpg",
                                       "width": 1024,
                                       "height": 682,
                                       "class": "ImageResourceLevel"
                                      }
                                     ]
                                    },
                                    "pitch": -4.39,
                                    "hideDuration": 500,
                                    "popupDistance": 100,
                                    "class": "PopupPanoramaOverlay"
                                   }
                                  ],
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_t.jpg"
                                 }
                                ],
                                "mapLocations": [
                                 {
                                  "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                  "x": 281.15,
                                  "angle": 0,
                                  "y": 422.75,
                                  "class": "PanoramaMapLocation"
                                 }
                                ],
                                "class": "Panorama"
                               },
                               "yaw": 150.13,
                               "backwardYaw": -19.33,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "panorama": {
                                "thumbnailUrl": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_t.jpg",
                                "label": "3-Detail CC",
                                "id": "panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1",
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
                                  "yaw": 150.05,
                                  "backwardYaw": 41.3,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
                                  "yaw": -157.73,
                                  "backwardYaw": 137.01,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": {
                                   "thumbnailUrl": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_t.jpg",
                                   "label": "16-Oficinas Parque",
                                   "id": "panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
                                     "yaw": 176.92,
                                     "backwardYaw": 50.1,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    },
                                    {
                                     "panorama": "this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1",
                                     "class": "AdjacentPanorama"
                                    }
                                   ],
                                   "pitch": 0,
                                   "partial": false,
                                   "vfov": 180,
                                   "hfovMax": 130,
                                   "hfov": 360,
                                   "hfovMin": 100,
                                   "frames": [
                                    {
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_hq.jpeg",
                                        "width": 6434,
                                        "height": 3217,
                                        "class": "ImageResourceLevel",
                                        "tags": [
                                         "oculusgo",
                                         "ipadpro"
                                        ]
                                       },
                                       {
                                        "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748.jpeg",
                                        "width": 4002,
                                        "height": 2001,
                                        "class": "ImageResourceLevel"
                                       }
                                      ]
                                     },
                                     "overlays": [
                                      {
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_78A92430_64BC_8E3A_41C4_B759D8C8FEB8); this.setMediaBehaviour(this.playList_7E33425F_64BC_8A66_41D1_9FF547E6DB9D, 0, this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748)",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "yaw": 176.92,
                                         "hfov": 5.91,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_0_0_0_map.gif",
                                            "width": 16,
                                            "height": 16,
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "pitch": -3.64,
                                         "class": "HotspotPanoramaOverlayMap"
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
                                            "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_0_0.png",
                                            "width": 105,
                                            "height": 105,
                                            "class": "ImageResourceLevel"
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
                                       "class": "HotspotPanoramaOverlay"
                                      },
                                      {
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1, this.camera_460CEEE7_492B_027B_41D1_2B81CCA4EC0E); this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false)",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "yaw": -85.83,
                                         "hfov": 5.88,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_1_0_0_map.gif",
                                            "width": 16,
                                            "height": 16,
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "pitch": 6.51,
                                         "class": "HotspotPanoramaOverlayMap"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.88,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_1_0.png",
                                            "width": 105,
                                            "height": 105,
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "pitch": 6.51,
                                         "yaw": -85.83
                                        }
                                       ],
                                       "id": "overlay_17E9786E_1AA7_B579_4145_9DE47703D9D8",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "class": "HotspotPanoramaOverlay"
                                      },
                                      {
                                       "areas": [
                                        {
                                         "click": "this.setMediaBehaviour(this.playList_7E35425F_64BC_8A66_41D1_8097051CDAED, 0, this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748)",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "yaw": 27.83,
                                         "hfov": 3.96,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_2_0_0_map.gif",
                                            "width": 16,
                                            "height": 16,
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "pitch": 48.04,
                                         "class": "HotspotPanoramaOverlayMap"
                                        }
                                       ],
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
                                            "height": 105,
                                            "class": "ImageResourceLevel"
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
                                       "class": "HotspotPanoramaOverlay"
                                      }
                                     ],
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_t.jpg"
                                    }
                                   ],
                                   "class": "Panorama"
                                  },
                                  "yaw": 50.1,
                                  "backwardYaw": 176.92,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": {
                                   "thumbnailUrl": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_t.jpg",
                                   "label": "Lobby",
                                   "id": "panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": {
                                      "thumbnailUrl": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_t.jpg",
                                      "label": "3_1",
                                      "id": "panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
                                        "yaw": 176.9,
                                        "backwardYaw": -176.55,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       }
                                      ],
                                      "pitch": 0,
                                      "partial": false,
                                      "vfov": 180,
                                      "cardboardMenu": "this.Menu_7E5DD2BB_64BC_8A2E_41CC_93B6A583CFF8",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "hfovMin": 100,
                                      "frames": [
                                       {
                                        "cube": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_hq.jpeg",
                                           "width": 10224,
                                           "height": 1704,
                                           "class": "ImageResourceLevel",
                                           "tags": [
                                            "oculusgo",
                                            "ipadpro"
                                           ]
                                          },
                                          {
                                           "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104.jpeg",
                                           "width": 6144,
                                           "height": 1024,
                                           "class": "ImageResourceLevel"
                                          }
                                         ]
                                        },
                                        "overlays": [
                                         {
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_7DDB65E3_64BC_8E5E_41CA_9D43570868CA); this.mainPlayList.set('selectedIndex', 1)",
                                            "mapColor": "image",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "useHandCursor": true,
                                          "maps": [],
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
                                               "height": 120,
                                               "class": "ImageResourceLevel"
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
                                          "class": "HotspotPanoramaOverlay"
                                         }
                                        ],
                                        "class": "CubicPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_t.jpg"
                                       }
                                      ],
                                      "mapLocations": [
                                       {
                                        "map": {
                                         "initialZoomFactor": 1,
                                         "thumbnailUrl": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_t.png",
                                         "label": "Planta",
                                         "id": "map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                         "fieldOfViewOverlayOutsideOpacity": 0,
                                         "width": 415,
                                         "fieldOfViewOverlayInsideOpacity": 0.4,
                                         "fieldOfViewOverlayOutsideColor": "#000000",
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070.png",
                                            "width": 415,
                                            "height": 558,
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "fieldOfViewOverlayInsideColor": "#000000",
                                         "maximumZoomFactor": 1.2,
                                         "fieldOfViewOverlayRadiusScale": 0.19,
                                         "scaleMode": "fit_inside",
                                         "overlays": [
                                          {
                                           "map": {
                                            "width": 30,
                                            "x": 202.7,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_0_map.gif",
                                               "width": 14,
                                               "height": 15,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "offsetX": 0,
                                            "y": 419.55,
                                            "offsetY": 0,
                                            "height": 30,
                                            "class": "HotspotMapOverlayMap"
                                           },
                                           "areas": [
                                            {
                                             "click": "this.mainPlayList.set('selectedIndex', 1)",
                                             "mapColor": "#FF0000",
                                             "class": "HotspotMapOverlayArea"
                                            }
                                           ],
                                           "image": {
                                            "x": 202.7,
                                            "height": 30,
                                            "y": 419.55,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_0.png",
                                               "width": 29,
                                               "height": 30,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true,
                                           "id": "overlay_C10F34C4_DD09_E665_41EB_0E9F8F32C5EE",
                                           "data": {
                                            "label": "Image"
                                           },
                                           "rollOverDisplay": true
                                          },
                                          {
                                           "map": {
                                            "width": 30,
                                            "x": 200.7,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_1_map.gif",
                                               "width": 14,
                                               "height": 15,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "offsetX": 0,
                                            "y": 104.65,
                                            "offsetY": 0,
                                            "height": 30,
                                            "class": "HotspotMapOverlayMap"
                                           },
                                           "areas": [
                                            {
                                             "click": "this.mainPlayList.set('selectedIndex', 3)",
                                             "mapColor": "#FF0000",
                                             "class": "HotspotMapOverlayArea"
                                            }
                                           ],
                                           "image": {
                                            "x": 200.7,
                                            "height": 30,
                                            "y": 104.65,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_1.png",
                                               "width": 29,
                                               "height": 30,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true,
                                           "id": "overlay_C057DBDB_DD0A_6267_41DF_74197503054E",
                                           "data": {
                                            "label": "Image"
                                           },
                                           "rollOverDisplay": true
                                          },
                                          {
                                           "map": {
                                            "width": 30,
                                            "x": 71.7,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_2_map.gif",
                                               "width": 14,
                                               "height": 15,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "offsetX": 0,
                                            "y": 106.65,
                                            "offsetY": 0,
                                            "height": 30,
                                            "class": "HotspotMapOverlayMap"
                                           },
                                           "areas": [
                                            {
                                             "click": "this.mainPlayList.set('selectedIndex', 10)",
                                             "mapColor": "#FF0000",
                                             "class": "HotspotMapOverlayArea"
                                            }
                                           ],
                                           "image": {
                                            "x": 71.7,
                                            "height": 30,
                                            "y": 106.65,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_2.png",
                                               "width": 29,
                                               "height": 30,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true,
                                           "id": "overlay_C1A62C4E_DD0B_E665_41E4_24E80204A343",
                                           "data": {
                                            "label": "Image"
                                           },
                                           "rollOverDisplay": true
                                          },
                                          {
                                           "map": {
                                            "width": 30,
                                            "x": 73.7,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_3_map.gif",
                                               "width": 14,
                                               "height": 15,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "offsetX": 0,
                                            "y": 213.55,
                                            "offsetY": 0,
                                            "height": 30,
                                            "class": "HotspotMapOverlayMap"
                                           },
                                           "areas": [
                                            {
                                             "click": "this.mainPlayList.set('selectedIndex', 11)",
                                             "mapColor": "#FF0000",
                                             "class": "HotspotMapOverlayArea"
                                            }
                                           ],
                                           "image": {
                                            "x": 73.7,
                                            "height": 30,
                                            "y": 213.55,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_3.png",
                                               "width": 29,
                                               "height": 30,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true,
                                           "id": "overlay_C0CBF35A_DD0A_E26D_41D4_D1DC41F86387",
                                           "data": {
                                            "label": "Image"
                                           },
                                           "rollOverDisplay": true
                                          },
                                          {
                                           "map": {
                                            "width": 30,
                                            "x": 302.7,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_4_map.gif",
                                               "width": 14,
                                               "height": 15,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "offsetX": 0,
                                            "y": 203.55,
                                            "offsetY": 0,
                                            "height": 30,
                                            "class": "HotspotMapOverlayMap"
                                           },
                                           "areas": [
                                            {
                                             "click": "this.mainPlayList.set('selectedIndex', 5)",
                                             "mapColor": "#FF0000",
                                             "class": "HotspotMapOverlayArea"
                                            }
                                           ],
                                           "image": {
                                            "x": 302.7,
                                            "height": 30,
                                            "y": 203.55,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_4.png",
                                               "width": 29,
                                               "height": 30,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true,
                                           "id": "overlay_C01B30DE_DD09_BE65_41DD_D62C14826FDF",
                                           "data": {
                                            "label": "Image"
                                           },
                                           "rollOverDisplay": true
                                          },
                                          {
                                           "map": {
                                            "width": 30,
                                            "x": 328.6,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_5_map.gif",
                                               "width": 14,
                                               "height": 15,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "offsetX": 0,
                                            "y": 317.55,
                                            "offsetY": 0,
                                            "height": 30,
                                            "class": "HotspotMapOverlayMap"
                                           },
                                           "areas": [
                                            {
                                             "click": "this.mainPlayList.set('selectedIndex', 4)",
                                             "mapColor": "#FF0000",
                                             "class": "HotspotMapOverlayArea"
                                            }
                                           ],
                                           "image": {
                                            "x": 328.6,
                                            "height": 30,
                                            "y": 317.55,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_5.png",
                                               "width": 29,
                                               "height": 30,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true,
                                           "id": "overlay_C332A511_DD0E_A7FC_41E4_2786EB8DD2F7",
                                           "data": {
                                            "label": "Image"
                                           },
                                           "rollOverDisplay": true
                                          },
                                          {
                                           "map": {
                                            "width": 30,
                                            "x": 200.7,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_6_map.gif",
                                               "width": 14,
                                               "height": 15,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "offsetX": 0,
                                            "y": 361.6,
                                            "offsetY": 0,
                                            "height": 30,
                                            "class": "HotspotMapOverlayMap"
                                           },
                                           "areas": [
                                            {
                                             "click": "this.mainPlayList.set('selectedIndex', 6)",
                                             "mapColor": "#FF0000",
                                             "class": "HotspotMapOverlayArea"
                                            }
                                           ],
                                           "image": {
                                            "x": 200.7,
                                            "height": 30,
                                            "y": 361.6,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_6.png",
                                               "width": 29,
                                               "height": 30,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true,
                                           "id": "overlay_C0B9B7F7_DD0E_6224_41E8_445361C5C9E4",
                                           "data": {
                                            "label": "Image"
                                           },
                                           "rollOverDisplay": true
                                          },
                                          {
                                           "map": {
                                            "width": 30,
                                            "x": 318.7,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_7_map.gif",
                                               "width": 14,
                                               "height": 15,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "offsetX": 0,
                                            "y": 215.55,
                                            "offsetY": 0,
                                            "height": 30,
                                            "class": "HotspotMapOverlayMap"
                                           },
                                           "areas": [
                                            {
                                             "click": "this.mainPlayList.set('selectedIndex', 12)",
                                             "mapColor": "#FF0000",
                                             "class": "HotspotMapOverlayArea"
                                            }
                                           ],
                                           "image": {
                                            "x": 318.7,
                                            "height": 30,
                                            "y": 215.55,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_7.png",
                                               "width": 29,
                                               "height": 30,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true,
                                           "id": "overlay_C3F85A31_DD0F_E23C_41DC_6258471D9794",
                                           "data": {
                                            "label": "Image"
                                           },
                                           "rollOverDisplay": true
                                          },
                                          {
                                           "map": {
                                            "width": 30,
                                            "x": 203.65,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_8_map.gif",
                                               "width": 14,
                                               "height": 15,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "offsetX": 0,
                                            "y": 85.55,
                                            "offsetY": 0,
                                            "height": 30,
                                            "class": "HotspotMapOverlayMap"
                                           },
                                           "areas": [
                                            {
                                             "click": "this.mainPlayList.set('selectedIndex', 14)",
                                             "mapColor": "#FF0000",
                                             "class": "HotspotMapOverlayArea"
                                            }
                                           ],
                                           "image": {
                                            "x": 203.65,
                                            "height": 30,
                                            "y": 85.55,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_8.png",
                                               "width": 29,
                                               "height": 30,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true,
                                           "id": "overlay_C30E80C5_DD0E_9E67_41E5_F7EA65B0847D",
                                           "data": {
                                            "label": "Image"
                                           },
                                           "rollOverDisplay": true
                                          },
                                          {
                                           "map": {
                                            "width": 30,
                                            "x": 66.65,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_9_map.gif",
                                               "width": 14,
                                               "height": 15,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "offsetX": 0,
                                            "y": 217.55,
                                            "offsetY": 0,
                                            "height": 30,
                                            "class": "HotspotMapOverlayMap"
                                           },
                                           "areas": [
                                            {
                                             "click": "this.mainPlayList.set('selectedIndex', 13)",
                                             "mapColor": "#FF0000",
                                             "class": "HotspotMapOverlayArea"
                                            }
                                           ],
                                           "image": {
                                            "x": 66.65,
                                            "height": 30,
                                            "y": 217.55,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_9.png",
                                               "width": 29,
                                               "height": 30,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true,
                                           "id": "overlay_C3598F78_DD0E_622C_41E9_FCE2210BA50E",
                                           "data": {
                                            "label": "Image"
                                           },
                                           "rollOverDisplay": true
                                          },
                                          {
                                           "map": {
                                            "width": 30,
                                            "x": 236.65,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_10_map.gif",
                                               "width": 14,
                                               "height": 15,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "offsetX": 0,
                                            "y": 304.6,
                                            "offsetY": 0,
                                            "height": 30,
                                            "class": "HotspotMapOverlayMap"
                                           },
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000"
                                            }
                                           ],
                                           "image": {
                                            "x": 236.65,
                                            "height": 30,
                                            "y": 304.6,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_10.png",
                                               "width": 29,
                                               "height": 30,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            }
                                           },
                                           "rollOverDisplay": true,
                                           "useHandCursor": true,
                                           "id": "overlay_C3A2F1BB_DD09_9E2C_41E6_AEB47B5FEE36",
                                           "data": {
                                            "label": "Image"
                                           },
                                           "class": "AreaHotspotMapOverlay"
                                          },
                                          {
                                           "map": {
                                            "width": 30,
                                            "x": 202.7,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_11_map.gif",
                                               "width": 14,
                                               "height": 15,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "offsetX": 0,
                                            "y": 264.55,
                                            "offsetY": 0,
                                            "height": 30,
                                            "class": "HotspotMapOverlayMap"
                                           },
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000"
                                            }
                                           ],
                                           "image": {
                                            "x": 202.7,
                                            "height": 30,
                                            "y": 264.55,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_11.png",
                                               "width": 29,
                                               "height": 30,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            }
                                           },
                                           "rollOverDisplay": true,
                                           "useHandCursor": true,
                                           "id": "overlay_C3966761_DD0A_E25F_41D3_527C5C447FFE",
                                           "data": {
                                            "label": "Image"
                                           },
                                           "class": "AreaHotspotMapOverlay"
                                          },
                                          {
                                           "map": {
                                            "width": 30,
                                            "x": 207.7,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_12_map.gif",
                                               "width": 14,
                                               "height": 15,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "offsetX": 0,
                                            "y": 160.55,
                                            "offsetY": 0,
                                            "height": 30,
                                            "class": "HotspotMapOverlayMap"
                                           },
                                           "areas": [
                                            {
                                             "class": "HotspotMapOverlayArea",
                                             "mapColor": "#FF0000"
                                            }
                                           ],
                                           "image": {
                                            "x": 207.7,
                                            "height": 30,
                                            "y": 160.55,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_12.png",
                                               "width": 29,
                                               "height": 30,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            }
                                           },
                                           "rollOverDisplay": true,
                                           "useHandCursor": true,
                                           "id": "overlay_C2AD60A4_DD09_9E24_41E0_BE7A28E7C8F8",
                                           "data": {
                                            "label": "Image"
                                           },
                                           "class": "AreaHotspotMapOverlay"
                                          },
                                          {
                                           "map": {
                                            "width": 30,
                                            "x": 227.65,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_13_map.gif",
                                               "width": 15,
                                               "height": 15,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "offsetX": 0,
                                            "y": 415.8,
                                            "offsetY": 0,
                                            "height": 30,
                                            "class": "HotspotMapOverlayMap"
                                           },
                                           "areas": [
                                            {
                                             "click": "this.mainPlayList.set('selectedIndex', 8)",
                                             "mapColor": "#FF0000",
                                             "class": "HotspotMapOverlayArea"
                                            }
                                           ],
                                           "image": {
                                            "x": 227.65,
                                            "height": 30,
                                            "y": 415.8,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_13.png",
                                               "width": 30,
                                               "height": 30,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true,
                                           "id": "overlay_EFFAE3BA_DD3F_A22D_41DB_87FABC0F13CA",
                                           "data": {
                                            "label": "Image"
                                           },
                                           "rollOverDisplay": true
                                          },
                                          {
                                           "map": {
                                            "width": 30,
                                            "x": 207.6,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_14_map.gif",
                                               "width": 15,
                                               "height": 15,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "offsetX": 0,
                                            "y": 215.15,
                                            "offsetY": 0,
                                            "height": 30,
                                            "class": "HotspotMapOverlayMap"
                                           },
                                           "areas": [
                                            {
                                             "click": "this.mainPlayList.set('selectedIndex', 16)",
                                             "mapColor": "#FF0000",
                                             "class": "HotspotMapOverlayArea"
                                            }
                                           ],
                                           "image": {
                                            "x": 207.6,
                                            "height": 30,
                                            "y": 215.15,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_14.png",
                                               "width": 30,
                                               "height": 30,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true,
                                           "id": "overlay_2A070BB7_27CE_576F_41AB_07E104B79EC6",
                                           "data": {
                                            "label": "Image"
                                           },
                                           "rollOverDisplay": true
                                          },
                                          {
                                           "map": {
                                            "width": 30,
                                            "x": 174.85,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_15_map.gif",
                                               "width": 15,
                                               "height": 15,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "offsetX": 0,
                                            "y": 187.8,
                                            "offsetY": 0,
                                            "height": 30,
                                            "class": "HotspotMapOverlayMap"
                                           },
                                           "areas": [
                                            {
                                             "click": "this.mainPlayList.set('selectedIndex', 2)",
                                             "mapColor": "#FF0000",
                                             "class": "HotspotMapOverlayArea"
                                            }
                                           ],
                                           "image": {
                                            "x": 174.85,
                                            "height": 30,
                                            "y": 187.8,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_15.png",
                                               "width": 30,
                                               "height": 30,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true,
                                           "id": "overlay_376F3930_27CA_D361_4190_7CF2D4BA616B",
                                           "data": {
                                            "label": "Image"
                                           },
                                           "rollOverDisplay": true
                                          },
                                          {
                                           "map": {
                                            "width": 30,
                                            "x": 202.9,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_16_map.gif",
                                               "width": 15,
                                               "height": 15,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "offsetX": 0,
                                            "y": 75.95,
                                            "offsetY": 0,
                                            "height": 30,
                                            "class": "HotspotMapOverlayMap"
                                           },
                                           "areas": [
                                            {
                                             "click": "this.mainPlayList.set('selectedIndex', 7)",
                                             "mapColor": "#FF0000",
                                             "class": "HotspotMapOverlayArea"
                                            }
                                           ],
                                           "image": {
                                            "x": 202.9,
                                            "height": 30,
                                            "y": 75.95,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_16.png",
                                               "width": 30,
                                               "height": 30,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true,
                                           "id": "overlay_3778DCE6_27D7_D2E1_41C3_D9B03693BA2C",
                                           "data": {
                                            "label": "Image"
                                           },
                                           "rollOverDisplay": true
                                          },
                                          {
                                           "map": {
                                            "width": 30,
                                            "x": 58.95,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_17_map.gif",
                                               "width": 15,
                                               "height": 15,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            },
                                            "offsetX": 0,
                                            "y": 99.95,
                                            "offsetY": 0,
                                            "height": 30,
                                            "class": "HotspotMapOverlayMap"
                                           },
                                           "areas": [
                                            {
                                             "click": "this.mainPlayList.set('selectedIndex', 15)",
                                             "mapColor": "#FF0000",
                                             "class": "HotspotMapOverlayArea"
                                            }
                                           ],
                                           "image": {
                                            "x": 58.95,
                                            "height": 30,
                                            "y": 99.95,
                                            "class": "HotspotMapOverlayImage",
                                            "width": 30,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_17.png",
                                               "width": 30,
                                               "height": 30,
                                               "class": "ImageResourceLevel"
                                              }
                                             ]
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true,
                                           "id": "overlay_3686017A_27D6_53E6_41C2_468B88D59841",
                                           "data": {
                                            "label": "Image"
                                           },
                                           "rollOverDisplay": true
                                          }
                                         ],
                                         "minimumZoomFactor": 0.5,
                                         "height": 558,
                                         "class": "Map"
                                        },
                                        "x": 242.65,
                                        "angle": -267.85,
                                        "y": 430.8,
                                        "class": "PanoramaMapLocation"
                                       }
                                      ],
                                      "class": "Panorama"
                                     },
                                     "yaw": -176.55,
                                     "backwardYaw": 176.9,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    },
                                    {
                                     "panorama": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
                                     "yaw": -91.85,
                                     "backwardYaw": -59.69,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    },
                                    {
                                     "panorama": {
                                      "thumbnailUrl": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_t.jpg",
                                      "label": "asensores",
                                      "id": "panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
                                        "yaw": 32.92,
                                        "backwardYaw": 87.33,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       },
                                       {
                                        "panorama": {
                                         "thumbnailUrl": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_t.jpg",
                                         "label": "Parking Garage",
                                         "id": "panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": {
                                            "thumbnailUrl": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_t.jpg",
                                            "label": "parking2",
                                            "id": "panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
                                              "yaw": -61.02,
                                              "backwardYaw": 99.63,
                                              "distance": 1,
                                              "class": "AdjacentPanorama"
                                             }
                                            ],
                                            "pitch": 0,
                                            "partial": false,
                                            "vfov": 180,
                                            "cardboardMenu": "this.Menu_7E5DD2BB_64BC_8A2E_41CC_93B6A583CFF8",
                                            "hfovMax": 120,
                                            "hfov": 360,
                                            "hfovMin": 100,
                                            "frames": [
                                             {
                                              "sphere": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_hq.jpeg",
                                                 "width": 5376,
                                                 "height": 2688,
                                                 "class": "ImageResourceLevel",
                                                 "tags": [
                                                  "oculusgo",
                                                  "ipadpro"
                                                 ]
                                                },
                                                {
                                                 "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175.jpeg",
                                                 "width": 3217,
                                                 "height": 1608,
                                                 "class": "ImageResourceLevel"
                                                }
                                               ]
                                              },
                                              "overlays": [
                                               {
                                                "areas": [
                                                 {
                                                  "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_7EC5E6DF_64BC_8A66_41B5_1322C01CB6A5); this.mainPlayList.set('selectedIndex', 7)",
                                                  "mapColor": "image",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "useHandCursor": true,
                                                "maps": [],
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
                                                     "height": 119,
                                                     "class": "ImageResourceLevel"
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
                                                "class": "HotspotPanoramaOverlay"
                                               },
                                               {
                                                "bleaching": 0.7,
                                                "id": "overlay_39DF8AEE_37C2_AC40_417A_6242CBF48B68",
                                                "bleachingDistance": 0.4,
                                                "pitch": 16.72,
                                                "yaw": 95.38,
                                                "class": "LensFlarePanoramaOverlay"
                                               }
                                              ],
                                              "class": "SphericPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_t.jpg"
                                             }
                                            ],
                                            "mapLocations": [
                                             {
                                              "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                              "x": 73.95,
                                              "angle": -207.49,
                                              "y": 114.95,
                                              "class": "PanoramaMapLocation"
                                             }
                                            ],
                                            "class": "Panorama"
                                           },
                                           "yaw": 99.63,
                                           "backwardYaw": -61.02,
                                           "distance": 1,
                                           "class": "AdjacentPanorama"
                                          },
                                          {
                                           "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                                           "yaw": -3.13,
                                           "backwardYaw": -16.11,
                                           "distance": 1,
                                           "class": "AdjacentPanorama"
                                          }
                                         ],
                                         "pitch": 0,
                                         "partial": false,
                                         "vfov": 180,
                                         "cardboardMenu": "this.Menu_7E5DD2BB_64BC_8A2E_41CC_93B6A583CFF8",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "hfovMin": 100,
                                         "frames": [
                                          {
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_hq.jpeg",
                                              "width": 5376,
                                              "height": 2688,
                                              "class": "ImageResourceLevel",
                                              "tags": [
                                               "oculusgo",
                                               "ipadpro"
                                              ]
                                             },
                                             {
                                              "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042.jpeg",
                                              "width": 3217,
                                              "height": 1608,
                                              "class": "ImageResourceLevel"
                                             }
                                            ]
                                           },
                                           "overlays": [
                                            {
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_7D83E58D_64BC_8EEA_41D4_35B41C404EA9); this.mainPlayList.set('selectedIndex', 16)",
                                               "mapColor": "image",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "useHandCursor": true,
                                             "maps": [],
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
                                                  "height": 119,
                                                  "class": "ImageResourceLevel"
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
                                             "class": "HotspotPanoramaOverlay"
                                            },
                                            {
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175, this.camera_7D899583_64BC_8EDE_41D6_4B8E5E257DCF); this.mainPlayList.set('selectedIndex', 15)",
                                               "mapColor": "image",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "useHandCursor": true,
                                             "maps": [],
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
                                                  "height": 119,
                                                  "class": "ImageResourceLevel"
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
                                             "class": "HotspotPanoramaOverlay"
                                            }
                                           ],
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_t.jpg"
                                          }
                                         ],
                                         "mapLocations": [
                                          {
                                           "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                           "x": 217.9,
                                           "angle": 180,
                                           "y": 90.95,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
                                         "class": "Panorama"
                                        },
                                        "yaw": -16.11,
                                        "backwardYaw": -3.13,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       },
                                       {
                                        "panorama": {
                                         "thumbnailUrl": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_t.jpg",
                                         "label": "Main Floor",
                                         "id": "panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                                           "yaw": 96.47,
                                           "backwardYaw": -139.07,
                                           "distance": 1,
                                           "class": "AdjacentPanorama"
                                          },
                                          {
                                           "panorama": {
                                            "thumbnailUrl": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_t.jpg",
                                            "label": "9",
                                            "id": "panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
                                              "yaw": 3.46,
                                              "backwardYaw": -176.41,
                                              "distance": 1,
                                              "class": "AdjacentPanorama"
                                             },
                                             {
                                              "panorama": {
                                               "thumbnailUrl": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_t.jpg",
                                               "label": "14",
                                               "id": "panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
                                               "adjacentPanoramas": [
                                                {
                                                 "panorama": {
                                                  "thumbnailUrl": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_t.jpg",
                                                  "label": "Conference Room",
                                                  "id": "panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
                                                  "adjacentPanoramas": [
                                                   {
                                                    "panorama": {
                                                     "thumbnailUrl": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_t.jpg",
                                                     "label": "Dining Room",
                                                     "id": "panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
                                                     "adjacentPanoramas": [
                                                      {
                                                       "panorama": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
                                                       "yaw": -176.35,
                                                       "backwardYaw": 66.4,
                                                       "distance": 1,
                                                       "class": "AdjacentPanorama"
                                                      }
                                                     ],
                                                     "pitch": 0,
                                                     "partial": false,
                                                     "vfov": 180,
                                                     "cardboardMenu": "this.Menu_7E5DD2BB_64BC_8A2E_41CC_93B6A583CFF8",
                                                     "hfovMax": 120,
                                                     "hfov": 360,
                                                     "hfovMin": 100,
                                                     "frames": [
                                                      {
                                                       "cube": {
                                                        "class": "ImageResource",
                                                        "levels": [
                                                         {
                                                          "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_hq.jpeg",
                                                          "width": 10224,
                                                          "height": 1704,
                                                          "class": "ImageResourceLevel",
                                                          "tags": [
                                                           "oculusgo",
                                                           "ipadpro"
                                                          ]
                                                         },
                                                         {
                                                          "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D.jpeg",
                                                          "width": 6144,
                                                          "height": 1024,
                                                          "class": "ImageResourceLevel"
                                                         }
                                                        ]
                                                       },
                                                       "overlays": [
                                                        {
                                                         "areas": [
                                                          {
                                                           "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_7F97B313_64BC_8BFE_41C7_632EA7408E01); this.mainPlayList.set('selectedIndex', 5)",
                                                           "mapColor": "image",
                                                           "class": "HotspotPanoramaOverlayArea"
                                                          }
                                                         ],
                                                         "enabledInCardboard": true,
                                                         "rollOverDisplay": false,
                                                         "useHandCursor": true,
                                                         "maps": [],
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
                                                              "height": 119,
                                                              "class": "ImageResourceLevel"
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
                                                         "class": "HotspotPanoramaOverlay"
                                                        },
                                                        {
                                                         "areas": [
                                                          {
                                                           "click": "this.showPopupPanoramaOverlay(this.popup_D60305E4_DCEA_D39F_419B_D9B149482827, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':50,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':50,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#FF0000','backgroundColorRatios':[0.09803921568627451],'borderSize':0,'iconColor':'#FFFFFF','backgroundOpacity':0.5,'rollOverBorderColor':'#000000','iconWidth':50,'borderColor':'#000000','pressedIconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#CCCCCC','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconHeight':50,'paddingTop':5}, this.ImageResource_D09C8172_DCEA_737B_41C7_76727B821C90, null, null, null, null, false)",
                                                           "mapColor": "image",
                                                           "class": "HotspotPanoramaOverlayArea"
                                                          }
                                                         ],
                                                         "enabledInCardboard": true,
                                                         "rollOverDisplay": false,
                                                         "useHandCursor": true,
                                                         "maps": [],
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
                                                              "height": 103,
                                                              "class": "ImageResourceLevel"
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
                                                         "class": "HotspotPanoramaOverlay"
                                                        },
                                                        {
                                                         "rotationY": 0,
                                                         "rotationX": 0,
                                                         "yaw": 72.56,
                                                         "hideEasing": "cubic_out",
                                                         "rotationZ": 0,
                                                         "popupMaxWidth": "95%",
                                                         "showEasing": "cubic_in",
                                                         "id": "popup_D60305E4_DCEA_D39F_419B_D9B149482827",
                                                         "hfov": 8.23,
                                                         "popupMaxHeight": "95%",
                                                         "showDuration": 500,
                                                         "image": {
                                                          "class": "ImageResource",
                                                          "levels": [
                                                           {
                                                            "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_1.jpg",
                                                            "width": 1024,
                                                            "height": 682,
                                                            "class": "ImageResourceLevel"
                                                           }
                                                          ]
                                                         },
                                                         "pitch": -1.54,
                                                         "hideDuration": 500,
                                                         "popupDistance": 100,
                                                         "class": "PopupPanoramaOverlay"
                                                        }
                                                       ],
                                                       "class": "CubicPanoramaFrame",
                                                       "thumbnailUrl": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_t.jpg"
                                                      }
                                                     ],
                                                     "mapLocations": [
                                                      {
                                                       "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                                       "x": 343.6,
                                                       "angle": -191.07,
                                                       "y": 332.55,
                                                       "class": "PanoramaMapLocation"
                                                      }
                                                     ],
                                                     "class": "Panorama"
                                                    },
                                                    "yaw": 66.4,
                                                    "backwardYaw": -176.35,
                                                    "distance": 1,
                                                    "class": "AdjacentPanorama"
                                                   },
                                                   {
                                                    "panorama": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
                                                    "yaw": -117.42,
                                                    "backwardYaw": 72.07,
                                                    "distance": 1,
                                                    "class": "AdjacentPanorama"
                                                   }
                                                  ],
                                                  "pitch": 0,
                                                  "partial": false,
                                                  "vfov": 180,
                                                  "cardboardMenu": "this.Menu_7E5DD2BB_64BC_8A2E_41CC_93B6A583CFF8",
                                                  "hfovMax": 120,
                                                  "hfov": 360,
                                                  "hfovMin": 100,
                                                  "frames": [
                                                   {
                                                    "cube": {
                                                     "class": "ImageResource",
                                                     "levels": [
                                                      {
                                                       "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_hq.jpeg",
                                                       "width": 10224,
                                                       "height": 1704,
                                                       "class": "ImageResourceLevel",
                                                       "tags": [
                                                        "oculusgo",
                                                        "ipadpro"
                                                       ]
                                                      },
                                                      {
                                                       "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E.jpeg",
                                                       "width": 6144,
                                                       "height": 1024,
                                                       "class": "ImageResourceLevel"
                                                      }
                                                     ]
                                                    },
                                                    "overlays": [
                                                     {
                                                      "areas": [
                                                       {
                                                        "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_7DEFE5A7_64BC_8E26_41CD_C16EC1E1CA55); this.mainPlayList.set('selectedIndex', 11)",
                                                        "mapColor": "image",
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       }
                                                      ],
                                                      "enabledInCardboard": true,
                                                      "rollOverDisplay": false,
                                                      "useHandCursor": true,
                                                      "maps": [],
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
                                                           "height": 120,
                                                           "class": "ImageResourceLevel"
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
                                                      "class": "HotspotPanoramaOverlay"
                                                     },
                                                     {
                                                      "areas": [
                                                       {
                                                        "click": "this.startPanoramaWithCamera(this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D, this.camera_7D99D597_64BC_8EE6_41AA_61BAF16AA46E); this.mainPlayList.set('selectedIndex', 4)",
                                                        "mapColor": "image",
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       }
                                                      ],
                                                      "enabledInCardboard": true,
                                                      "rollOverDisplay": false,
                                                      "useHandCursor": true,
                                                      "maps": [],
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
                                                           "height": 120,
                                                           "class": "ImageResourceLevel"
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
                                                      "class": "HotspotPanoramaOverlay"
                                                     }
                                                    ],
                                                    "class": "CubicPanoramaFrame",
                                                    "thumbnailUrl": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_t.jpg"
                                                   }
                                                  ],
                                                  "mapLocations": [
                                                   {
                                                    "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                                    "x": 317.7,
                                                    "angle": 92.31,
                                                    "y": 218.55,
                                                    "class": "PanoramaMapLocation"
                                                   }
                                                  ],
                                                  "class": "Panorama"
                                                 },
                                                 "yaw": 72.07,
                                                 "backwardYaw": -117.42,
                                                 "distance": 1,
                                                 "class": "AdjacentPanorama"
                                                },
                                                {
                                                 "panorama": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
                                                 "yaw": -85.38,
                                                 "backwardYaw": 99.45,
                                                 "distance": 1,
                                                 "class": "AdjacentPanorama"
                                                }
                                               ],
                                               "pitch": 0,
                                               "partial": false,
                                               "vfov": 180,
                                               "cardboardMenu": "this.Menu_7E5DD2BB_64BC_8A2E_41CC_93B6A583CFF8",
                                               "hfovMax": 120,
                                               "hfov": 360,
                                               "hfovMin": 80,
                                               "frames": [
                                                {
                                                 "cube": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_hq.jpeg",
                                                    "width": 10224,
                                                    "height": 1704,
                                                    "class": "ImageResourceLevel",
                                                    "tags": [
                                                     "oculusgo",
                                                     "ipadpro"
                                                    ]
                                                   },
                                                   {
                                                    "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A.jpeg",
                                                    "width": 6144,
                                                    "height": 1024,
                                                    "class": "ImageResourceLevel"
                                                   }
                                                  ]
                                                 },
                                                 "overlays": [
                                                  {
                                                   "areas": [
                                                    {
                                                     "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_7F23B3BE_64BC_8A26_41CF_BFA5BFB3AD30); this.mainPlayList.set('selectedIndex', 10)",
                                                     "mapColor": "image",
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "useHandCursor": true,
                                                   "maps": [],
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
                                                        "height": 118,
                                                        "class": "ImageResourceLevel"
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
                                                   "class": "HotspotPanoramaOverlay"
                                                  },
                                                  {
                                                   "areas": [
                                                    {
                                                     "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_7F2E43A9_64BC_8A2A_41CD_B1D14D4CA020); this.mainPlayList.set('selectedIndex', 5)",
                                                     "mapColor": "image",
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "useHandCursor": true,
                                                   "maps": [],
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
                                                        "height": 118,
                                                        "class": "ImageResourceLevel"
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
                                                   "class": "HotspotPanoramaOverlay"
                                                  },
                                                  {
                                                   "areas": [
                                                    {
                                                     "click": "this.showPopupPanoramaOverlay(this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':50,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':50,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#FF0000','backgroundColorRatios':[0.09803921568627451],'borderSize':0,'iconColor':'#FFFFFF','backgroundOpacity':0.5,'rollOverBorderColor':'#000000','iconWidth':50,'borderColor':'#000000','pressedIconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#CCCCCC','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconHeight':50,'paddingTop':5}, this.ImageResource_D082516E_DCEA_7368_41CB_9D0CFA830713, null, null, null, null, false)",
                                                     "mapColor": "image",
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "useHandCursor": true,
                                                   "maps": [],
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
                                                        "height": 104,
                                                        "class": "ImageResourceLevel"
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
                                                   "class": "HotspotPanoramaOverlay"
                                                  },
                                                  {
                                                   "rotationY": 0,
                                                   "rotationX": 0,
                                                   "yaw": -36.13,
                                                   "hideEasing": "cubic_out",
                                                   "rotationZ": 0,
                                                   "popupMaxWidth": "95%",
                                                   "showEasing": "cubic_in",
                                                   "id": "popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
                                                   "hfov": 8.22,
                                                   "popupMaxHeight": "95%",
                                                   "showDuration": 500,
                                                   "image": {
                                                    "class": "ImageResource",
                                                    "levels": [
                                                     {
                                                      "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_1.jpg",
                                                      "width": 1024,
                                                      "height": 682,
                                                      "class": "ImageResourceLevel"
                                                     }
                                                    ]
                                                   },
                                                   "pitch": -3.43,
                                                   "hideDuration": 500,
                                                   "popupDistance": 100,
                                                   "class": "PopupPanoramaOverlay"
                                                  },
                                                  {
                                                   "areas": [
                                                    {
                                                     "click": "this.showPopupPanoramaOverlay(this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':50,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':50,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#FF0000','backgroundColorRatios':[0.09803921568627451],'borderSize':0,'iconColor':'#FFFFFF','backgroundOpacity':0.5,'rollOverBorderColor':'#000000','iconWidth':50,'borderColor':'#000000','pressedIconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#CCCCCC','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconHeight':50,'paddingTop':5}, this.ImageResource_D38C2C6E_DFA1_73F8_41C3_8C1C155D72CB, null, null, null, null, false)",
                                                     "mapColor": "image",
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "useHandCursor": true,
                                                   "maps": [],
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
                                                        "height": 104,
                                                        "class": "ImageResourceLevel"
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
                                                   "class": "HotspotPanoramaOverlay"
                                                  },
                                                  {
                                                   "areas": [
                                                    {
                                                     "click": "this.showPopupPanoramaOverlay(this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':50,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':50,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#FF0000','backgroundColorRatios':[0.09803921568627451],'borderSize':0,'iconColor':'#FFFFFF','backgroundOpacity':0.5,'rollOverBorderColor':'#000000','iconWidth':50,'borderColor':'#000000','pressedIconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#CCCCCC','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconHeight':50,'paddingTop':5}, this.ImageResource_D09DC170_DCEA_7378_41EB_423962A6DDEA, null, null, null, null, false)",
                                                     "mapColor": "image",
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "useHandCursor": true,
                                                   "maps": [],
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
                                                        "height": 104,
                                                        "class": "ImageResourceLevel"
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
                                                   "class": "HotspotPanoramaOverlay"
                                                  },
                                                  {
                                                   "rotationY": 0,
                                                   "rotationX": 0,
                                                   "yaw": 102.19,
                                                   "hideEasing": "cubic_out",
                                                   "rotationZ": 0,
                                                   "popupMaxWidth": "95%",
                                                   "showEasing": "cubic_in",
                                                   "id": "popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
                                                   "hfov": 8.24,
                                                   "popupMaxHeight": "95%",
                                                   "showDuration": 500,
                                                   "image": {
                                                    "class": "ImageResource",
                                                    "levels": [
                                                     {
                                                      "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_1.jpg",
                                                      "width": 1024,
                                                      "height": 682,
                                                      "class": "ImageResourceLevel"
                                                     }
                                                    ]
                                                   },
                                                   "pitch": -0.5,
                                                   "hideDuration": 500,
                                                   "popupDistance": 100,
                                                   "class": "PopupPanoramaOverlay"
                                                  },
                                                  {
                                                   "bleaching": 0.7,
                                                   "id": "overlay_D4A17713_DF66_0D7B_41EA_88920C3D3D96",
                                                   "bleachingDistance": 0.4,
                                                   "pitch": 29.81,
                                                   "yaw": 4,
                                                   "class": "LensFlarePanoramaOverlay"
                                                  },
                                                  {
                                                   "bleaching": 0.7,
                                                   "id": "overlay_D4BC6C09_DF66_0357_41CE_9C3B75EE1C61",
                                                   "bleachingDistance": 0.4,
                                                   "pitch": 33.62,
                                                   "yaw": 125.52,
                                                   "class": "LensFlarePanoramaOverlay"
                                                  },
                                                  {
                                                   "bleaching": 0.7,
                                                   "id": "overlay_D4BAE022_DF66_0355_41EA_F8574F4021B9",
                                                   "bleachingDistance": 0.4,
                                                   "pitch": 19.14,
                                                   "yaw": -105.71,
                                                   "class": "LensFlarePanoramaOverlay"
                                                  },
                                                  {
                                                   "rotationY": 0,
                                                   "rotationX": 0,
                                                   "yaw": -170.82,
                                                   "hideEasing": "cubic_out",
                                                   "rotationZ": 0,
                                                   "popupMaxWidth": "95%",
                                                   "showEasing": "cubic_in",
                                                   "id": "popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
                                                   "hfov": 8.15,
                                                   "popupMaxHeight": "95%",
                                                   "showDuration": 500,
                                                   "image": {
                                                    "class": "ImageResource",
                                                    "levels": [
                                                     {
                                                      "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_1.jpg",
                                                      "width": 1024,
                                                      "height": 777,
                                                      "class": "ImageResourceLevel"
                                                     }
                                                    ]
                                                   },
                                                   "pitch": -8.1,
                                                   "hideDuration": 500,
                                                   "popupDistance": 100,
                                                   "class": "PopupPanoramaOverlay"
                                                  }
                                                 ],
                                                 "class": "CubicPanoramaFrame",
                                                 "thumbnailUrl": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_t.jpg"
                                                }
                                               ],
                                               "mapLocations": [
                                                {
                                                 "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                                 "x": 88.7,
                                                 "angle": 83.39,
                                                 "y": 228.55,
                                                 "class": "PanoramaMapLocation"
                                                }
                                               ],
                                               "class": "Panorama"
                                              },
                                              "yaw": 99.45,
                                              "backwardYaw": -85.38,
                                              "distance": 1,
                                              "class": "AdjacentPanorama"
                                             }
                                            ],
                                            "pitch": 0,
                                            "partial": false,
                                            "vfov": 180,
                                            "cardboardMenu": "this.Menu_7E5DD2BB_64BC_8A2E_41CC_93B6A583CFF8",
                                            "hfovMax": 120,
                                            "hfov": 360,
                                            "hfovMin": 80,
                                            "frames": [
                                             {
                                              "cube": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_hq.jpeg",
                                                 "width": 10224,
                                                 "height": 1704,
                                                 "class": "ImageResourceLevel",
                                                 "tags": [
                                                  "oculusgo",
                                                  "ipadpro"
                                                 ]
                                                },
                                                {
                                                 "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B.jpeg",
                                                 "width": 6144,
                                                 "height": 1024,
                                                 "class": "ImageResourceLevel"
                                                }
                                               ]
                                              },
                                              "overlays": [
                                               {
                                                "areas": [
                                                 {
                                                  "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_7D455665_64BC_8A5A_41D0_1BA0CB8662A7); this.mainPlayList.set('selectedIndex', 3)",
                                                  "mapColor": "image",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "useHandCursor": true,
                                                "maps": [],
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
                                                     "height": 119,
                                                     "class": "ImageResourceLevel"
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
                                                "class": "HotspotPanoramaOverlay"
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_7D58D66F_64BC_8A26_41A0_A02F9CD87A16); this.mainPlayList.set('selectedIndex', 11)",
                                                  "mapColor": "image",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "useHandCursor": true,
                                                "maps": [],
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
                                                     "height": 119,
                                                     "class": "ImageResourceLevel"
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
                                                "class": "HotspotPanoramaOverlay"
                                               },
                                               {
                                                "bleaching": 0.7,
                                                "id": "overlay_D364F048_DF66_03D5_41E1_5EA3BC9637F0",
                                                "bleachingDistance": 0.4,
                                                "pitch": 16.86,
                                                "yaw": -0.57,
                                                "class": "LensFlarePanoramaOverlay"
                                               },
                                               {
                                                "bleaching": 0.7,
                                                "id": "overlay_D37D2F7A_DF66_1DB5_41C0_1FB80896FEB3",
                                                "bleachingDistance": 0.4,
                                                "pitch": 16.1,
                                                "yaw": 164.38,
                                                "class": "LensFlarePanoramaOverlay"
                                               }
                                              ],
                                              "class": "CubicPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_t.jpg"
                                             }
                                            ],
                                            "mapLocations": [
                                             {
                                              "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                              "x": 86.7,
                                              "angle": 80.77,
                                              "y": 121.65,
                                              "class": "PanoramaMapLocation"
                                             }
                                            ],
                                            "class": "Panorama"
                                           },
                                           "yaw": -176.41,
                                           "backwardYaw": 3.46,
                                           "distance": 1,
                                           "class": "AdjacentPanorama"
                                          }
                                         ],
                                         "pitch": 0,
                                         "partial": false,
                                         "vfov": 180,
                                         "cardboardMenu": "this.Menu_7E5DD2BB_64BC_8A2E_41CC_93B6A583CFF8",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "hfovMin": 100,
                                         "frames": [
                                          {
                                           "cube": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_hq.jpeg",
                                              "width": 10224,
                                              "height": 1704,
                                              "class": "ImageResourceLevel",
                                              "tags": [
                                               "oculusgo",
                                               "ipadpro"
                                              ]
                                             },
                                             {
                                              "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0.jpeg",
                                              "width": 6144,
                                              "height": 1024,
                                              "class": "ImageResourceLevel"
                                             }
                                            ]
                                           },
                                           "overlays": [
                                            {
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_7DADB545_64BC_8E5A_41D3_811009A603DA); this.mainPlayList.set('selectedIndex', 16)",
                                               "mapColor": "image",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "useHandCursor": true,
                                             "maps": [],
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
                                                  "height": 120,
                                                  "class": "ImageResourceLevel"
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
                                             "class": "HotspotPanoramaOverlay"
                                            },
                                            {
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_7DA68550_64BC_8E7A_41CE_6AFB796EE259); this.mainPlayList.set('selectedIndex', 10)",
                                               "mapColor": "image",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "useHandCursor": true,
                                             "maps": [],
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
                                                  "height": 120,
                                                  "class": "ImageResourceLevel"
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
                                             "class": "HotspotPanoramaOverlay"
                                            },
                                            {
                                             "bleaching": 0.7,
                                             "id": "overlay_D4BE7E36_DF66_3FBD_41E5_D711B6782282",
                                             "bleachingDistance": 0.4,
                                             "pitch": 19.14,
                                             "yaw": -0.95,
                                             "class": "LensFlarePanoramaOverlay"
                                            },
                                            {
                                             "bleaching": 0.7,
                                             "id": "overlay_D4BB02EB_DF66_04AB_41E7_314E72AF48E7",
                                             "bleachingDistance": 0.4,
                                             "pitch": 17.62,
                                             "yaw": 164.38,
                                             "class": "LensFlarePanoramaOverlay"
                                            }
                                           ],
                                           "class": "CubicPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_t.jpg"
                                          }
                                         ],
                                         "mapLocations": [
                                          {
                                           "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                           "x": 215.7,
                                           "angle": 87.93,
                                           "y": 119.65,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
                                         "class": "Panorama"
                                        },
                                        "yaw": -139.07,
                                        "backwardYaw": 96.47,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       },
                                       {
                                        "panorama": {
                                         "thumbnailUrl": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_t.jpg",
                                         "label": "Restrooms",
                                         "id": "panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                                           "yaw": 27.08,
                                           "backwardYaw": -166.68,
                                           "distance": 1,
                                           "class": "AdjacentPanorama"
                                          }
                                         ],
                                         "pitch": 0,
                                         "partial": false,
                                         "vfov": 180,
                                         "cardboardMenu": "this.Menu_7E5DD2BB_64BC_8A2E_41CC_93B6A583CFF8",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "hfovMin": 100,
                                         "frames": [
                                          {
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_hq.jpeg",
                                              "width": 5376,
                                              "height": 2688,
                                              "class": "ImageResourceLevel",
                                              "tags": [
                                               "oculusgo",
                                               "ipadpro"
                                              ]
                                             },
                                             {
                                              "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3.jpeg",
                                              "width": 3217,
                                              "height": 1608,
                                              "class": "ImageResourceLevel"
                                             }
                                            ]
                                           },
                                           "overlays": [
                                            {
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_7FCEE36D_64BC_8A2A_41D3_A8CD733D27A3); this.mainPlayList.set('selectedIndex', 16)",
                                               "mapColor": "image",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "useHandCursor": true,
                                             "maps": [],
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
                                                  "height": 120,
                                                  "class": "ImageResourceLevel"
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
                                             "class": "HotspotPanoramaOverlay"
                                            },
                                            {
                                             "bleaching": 0.7,
                                             "id": "overlay_FE341697_EE9B_B5BB_41CC_1DCF1E1B9FE9",
                                             "bleachingDistance": 0.4,
                                             "pitch": 59.4,
                                             "yaw": -74.61,
                                             "class": "LensFlarePanoramaOverlay"
                                            },
                                            {
                                             "bleaching": 0.7,
                                             "id": "overlay_FE452B9D_EE9B_93AF_41C8_E05C00B1EC74",
                                             "bleachingDistance": 0.4,
                                             "pitch": 28.05,
                                             "yaw": -13.79,
                                             "class": "LensFlarePanoramaOverlay"
                                            },
                                            {
                                             "bleaching": 0.7,
                                             "id": "overlay_FE59F0F5_EE9B_8D7F_41E8_C632466F366D",
                                             "bleachingDistance": 0.4,
                                             "pitch": 31.07,
                                             "yaw": -151.67,
                                             "class": "LensFlarePanoramaOverlay"
                                            }
                                           ],
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_t.jpg"
                                          }
                                         ],
                                         "mapLocations": [
                                          {
                                           "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                           "x": 189.85,
                                           "angle": 59.39,
                                           "y": 202.8,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
                                         "class": "Panorama"
                                        },
                                        "yaw": -166.68,
                                        "backwardYaw": 27.08,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       },
                                       {
                                        "panorama": {
                                         "thumbnailUrl": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_t.jpg",
                                         "label": "Empty Shell",
                                         "id": "panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": {
                                            "thumbnailUrl": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_t.jpg",
                                            "label": "20",
                                            "id": "panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": {
                                               "thumbnailUrl": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_t.jpg",
                                               "label": "19",
                                               "id": "panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
                                               "adjacentPanoramas": [
                                                {
                                                 "panorama": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
                                                 "yaw": 56.43,
                                                 "backwardYaw": -146.27,
                                                 "distance": 1,
                                                 "class": "AdjacentPanorama"
                                                },
                                                {
                                                 "panorama": {
                                                  "thumbnailUrl": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_t.jpg",
                                                  "label": "18",
                                                  "id": "panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
                                                  "adjacentPanoramas": [
                                                   {
                                                    "panorama": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
                                                    "yaw": 133.34,
                                                    "backwardYaw": -31.12,
                                                    "distance": 1,
                                                    "class": "AdjacentPanorama"
                                                   },
                                                   {
                                                    "panorama": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
                                                    "yaw": 39.43,
                                                    "backwardYaw": -134.96,
                                                    "distance": 1,
                                                    "class": "AdjacentPanorama"
                                                   }
                                                  ],
                                                  "pitch": 0,
                                                  "partial": false,
                                                  "vfov": 180,
                                                  "cardboardMenu": "this.Menu_7E5DD2BB_64BC_8A2E_41CC_93B6A583CFF8",
                                                  "hfovMax": 120,
                                                  "hfov": 360,
                                                  "hfovMin": 100,
                                                  "frames": [
                                                   {
                                                    "cube": {
                                                     "class": "ImageResource",
                                                     "levels": [
                                                      {
                                                       "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_hq.jpeg",
                                                       "width": 10224,
                                                       "height": 1704,
                                                       "class": "ImageResourceLevel",
                                                       "tags": [
                                                        "oculusgo",
                                                        "ipadpro"
                                                       ]
                                                      },
                                                      {
                                                       "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9.jpeg",
                                                       "width": 6144,
                                                       "height": 1024,
                                                       "class": "ImageResourceLevel"
                                                      }
                                                     ]
                                                    },
                                                    "overlays": [
                                                     {
                                                      "areas": [
                                                       {
                                                        "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_7D060626_64BC_8A26_41D5_AF24A71D4487); this.mainPlayList.set('selectedIndex', 6)",
                                                        "mapColor": "image",
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       }
                                                      ],
                                                      "enabledInCardboard": true,
                                                      "rollOverDisplay": false,
                                                      "useHandCursor": true,
                                                      "maps": [],
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
                                                           "height": 119,
                                                           "class": "ImageResourceLevel"
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
                                                      "class": "HotspotPanoramaOverlay"
                                                     },
                                                     {
                                                      "areas": [
                                                       {
                                                        "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_7D324615_64BC_8DFA_41D8_79653D2B1F1B); this.mainPlayList.set('selectedIndex', 14)",
                                                        "mapColor": "image",
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       }
                                                      ],
                                                      "enabledInCardboard": true,
                                                      "rollOverDisplay": false,
                                                      "useHandCursor": true,
                                                      "maps": [],
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
                                                           "height": 119,
                                                           "class": "ImageResourceLevel"
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
                                                      "class": "HotspotPanoramaOverlay"
                                                     }
                                                    ],
                                                    "class": "CubicPanoramaFrame",
                                                    "thumbnailUrl": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_t.jpg"
                                                   }
                                                  ],
                                                  "mapLocations": [
                                                   {
                                                    "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                                    "x": 333.7,
                                                    "angle": -175.06,
                                                    "y": 230.55,
                                                    "class": "PanoramaMapLocation"
                                                   }
                                                  ],
                                                  "class": "Panorama"
                                                 },
                                                 "yaw": -31.12,
                                                 "backwardYaw": 133.34,
                                                 "distance": 1,
                                                 "class": "AdjacentPanorama"
                                                },
                                                {
                                                 "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
                                                 "class": "AdjacentPanorama"
                                                }
                                               ],
                                               "pitch": 0,
                                               "partial": false,
                                               "vfov": 180,
                                               "cardboardMenu": "this.Menu_7E5DD2BB_64BC_8A2E_41CC_93B6A583CFF8",
                                               "hfovMax": 120,
                                               "hfov": 360,
                                               "hfovMin": 100,
                                               "frames": [
                                                {
                                                 "cube": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_hq.jpeg",
                                                    "width": 10224,
                                                    "height": 1704,
                                                    "class": "ImageResourceLevel",
                                                    "tags": [
                                                     "oculusgo",
                                                     "ipadpro"
                                                    ]
                                                   },
                                                   {
                                                    "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09.jpeg",
                                                    "width": 6144,
                                                    "height": 1024,
                                                    "class": "ImageResourceLevel"
                                                   }
                                                  ]
                                                 },
                                                 "overlays": [
                                                  {
                                                   "areas": [
                                                    {
                                                     "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_78E0146E_64BC_8E26_41CE_1ED4F43D5972); this.mainPlayList.set('selectedIndex', 12)",
                                                     "mapColor": "image",
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "useHandCursor": true,
                                                   "maps": [],
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
                                                        "height": 119,
                                                        "class": "ImageResourceLevel"
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
                                                   "class": "HotspotPanoramaOverlay"
                                                  },
                                                  {
                                                   "areas": [
                                                    {
                                                     "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_78EEA462_64BC_8E5E_41A0_9D6E891768F0); this.mainPlayList.set('selectedIndex', 13)",
                                                     "mapColor": "image",
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "useHandCursor": true,
                                                   "maps": [],
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
                                                        "height": 119,
                                                        "class": "ImageResourceLevel"
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
                                                   "class": "HotspotPanoramaOverlay"
                                                  },
                                                  {
                                                   "areas": [
                                                    {
                                                     "click": "this.mainPlayList.set('selectedIndex', 1)",
                                                     "mapColor": "image",
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "useHandCursor": true,
                                                   "maps": [],
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
                                                        "height": 115,
                                                        "class": "ImageResourceLevel"
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
                                                   "class": "HotspotPanoramaOverlay"
                                                  }
                                                 ],
                                                 "class": "CubicPanoramaFrame",
                                                 "thumbnailUrl": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_t.jpg"
                                                }
                                               ],
                                               "mapLocations": [
                                                {
                                                 "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                                 "x": 218.65,
                                                 "angle": 180,
                                                 "y": 100.55,
                                                 "class": "PanoramaMapLocation"
                                                }
                                               ],
                                               "class": "Panorama"
                                              },
                                              "yaw": -146.27,
                                              "backwardYaw": 56.43,
                                              "distance": 1,
                                              "class": "AdjacentPanorama"
                                             },
                                             {
                                              "panorama": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
                                              "yaw": -34.22,
                                              "backwardYaw": 147.18,
                                              "distance": 1,
                                              "class": "AdjacentPanorama"
                                             }
                                            ],
                                            "pitch": 0,
                                            "partial": false,
                                            "vfov": 180,
                                            "cardboardMenu": "this.Menu_7E5DD2BB_64BC_8A2E_41CC_93B6A583CFF8",
                                            "hfovMax": 120,
                                            "hfov": 360,
                                            "hfovMin": 100,
                                            "frames": [
                                             {
                                              "cube": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_hq.jpeg",
                                                 "width": 10224,
                                                 "height": 1704,
                                                 "class": "ImageResourceLevel",
                                                 "tags": [
                                                  "oculusgo",
                                                  "ipadpro"
                                                 ]
                                                },
                                                {
                                                 "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8.jpeg",
                                                 "width": 6144,
                                                 "height": 1024,
                                                 "class": "ImageResourceLevel"
                                                }
                                               ]
                                              },
                                              "overlays": [
                                               {
                                                "areas": [
                                                 {
                                                  "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_7C493508_64BC_8FEA_41C7_DC37B1CDEBD6); this.mainPlayList.set('selectedIndex', 14)",
                                                  "mapColor": "image",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "useHandCursor": true,
                                                "maps": [],
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
                                                     "height": 118,
                                                     "class": "ImageResourceLevel"
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
                                                "class": "HotspotPanoramaOverlay"
                                               },
                                               {
                                                "areas": [
                                                 {
                                                  "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_7C43B512_64BC_8FFE_41C2_9C809D09ED7C); this.mainPlayList.set('selectedIndex', 6)",
                                                  "mapColor": "image",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "useHandCursor": true,
                                                "maps": [],
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
                                                     "height": 118,
                                                     "class": "ImageResourceLevel"
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
                                                "class": "HotspotPanoramaOverlay"
                                               }
                                              ],
                                              "class": "CubicPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_t.jpg"
                                             }
                                            ],
                                            "mapLocations": [
                                             {
                                              "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                              "x": 81.65,
                                              "angle": 171.27,
                                              "y": 232.55,
                                              "class": "PanoramaMapLocation"
                                             }
                                            ],
                                            "class": "Panorama"
                                           },
                                           "yaw": 147.18,
                                           "backwardYaw": -34.22,
                                           "distance": 1,
                                           "class": "AdjacentPanorama"
                                          },
                                          {
                                           "panorama": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
                                           "yaw": -134.96,
                                           "backwardYaw": 39.43,
                                           "distance": 1,
                                           "class": "AdjacentPanorama"
                                          },
                                          {
                                           "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                                           "yaw": -170.05,
                                           "backwardYaw": -76.25,
                                           "distance": 1,
                                           "class": "AdjacentPanorama"
                                          }
                                         ],
                                         "pitch": 0,
                                         "partial": false,
                                         "vfov": 180,
                                         "cardboardMenu": "this.Menu_7E5DD2BB_64BC_8A2E_41CC_93B6A583CFF8",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "hfovMin": 100,
                                         "frames": [
                                          {
                                           "cube": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_hq.jpeg",
                                              "width": 10224,
                                              "height": 1704,
                                              "class": "ImageResourceLevel",
                                              "tags": [
                                               "oculusgo",
                                               "ipadpro"
                                              ]
                                             },
                                             {
                                              "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F.jpeg",
                                              "width": 6144,
                                              "height": 1024,
                                              "class": "ImageResourceLevel"
                                             }
                                            ]
                                           },
                                           "overlays": [
                                            {
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_7F479419_64BC_8DEA_41BF_F44A0931475A); this.mainPlayList.set('selectedIndex', 12)",
                                               "mapColor": "image",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "useHandCursor": true,
                                             "maps": [],
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
                                                  "height": 119,
                                                  "class": "ImageResourceLevel"
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
                                             "class": "HotspotPanoramaOverlay"
                                            },
                                            {
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_7F76340D_64BC_8DE5_41D4_1CAEDC7D6410); this.mainPlayList.set('selectedIndex', 13)",
                                               "mapColor": "image",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "useHandCursor": true,
                                             "maps": [],
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
                                                  "height": 119,
                                                  "class": "ImageResourceLevel"
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
                                             "class": "HotspotPanoramaOverlay"
                                            },
                                            {
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_7F59B423_64BC_8DDE_41C5_4F2E4A1A2E91); this.mainPlayList.set('selectedIndex', 16)",
                                               "mapColor": "image",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "useHandCursor": true,
                                             "maps": [],
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
                                                  "height": 118,
                                                  "class": "ImageResourceLevel"
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
                                             "class": "HotspotPanoramaOverlay"
                                            }
                                           ],
                                           "class": "CubicPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_t.jpg"
                                          }
                                         ],
                                         "mapLocations": [
                                          {
                                           "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                           "x": 215.7,
                                           "angle": 177.75,
                                           "y": 376.6,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
                                         "class": "Panorama"
                                        },
                                        "yaw": -76.25,
                                        "backwardYaw": -170.05,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       }
                                      ],
                                      "pitch": 0,
                                      "partial": false,
                                      "vfov": 180,
                                      "cardboardMenu": "this.Menu_7E5DD2BB_64BC_8A2E_41CC_93B6A583CFF8",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "hfovMin": 100,
                                      "frames": [
                                       {
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_hq.jpeg",
                                           "width": 5376,
                                           "height": 2688,
                                           "class": "ImageResourceLevel",
                                           "tags": [
                                            "oculusgo",
                                            "ipadpro"
                                           ]
                                          },
                                          {
                                           "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F.jpeg",
                                           "width": 3217,
                                           "height": 1608,
                                           "class": "ImageResourceLevel"
                                          }
                                         ]
                                        },
                                        "overlays": [
                                         {
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_7E8406A1_64BC_8ADD_41C5_305566DEC73D); this.mainPlayList.set('selectedIndex', 1)",
                                            "mapColor": "image",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "useHandCursor": true,
                                          "maps": [],
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
                                               "height": 118,
                                               "class": "ImageResourceLevel"
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
                                          "class": "HotspotPanoramaOverlay"
                                         },
                                         {
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3, this.camera_7EFE16C2_64BC_8A5E_41D7_A3CE7767489C); this.mainPlayList.set('selectedIndex', 2)",
                                            "mapColor": "image",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "useHandCursor": true,
                                          "maps": [],
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
                                               "height": 117,
                                               "class": "ImageResourceLevel"
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
                                          "class": "HotspotPanoramaOverlay"
                                         },
                                         {
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_7EF156CD_64BC_8A6A_41C6_DAB2188F2851); this.mainPlayList.set('selectedIndex', 6)",
                                            "mapColor": "image",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "useHandCursor": true,
                                          "maps": [],
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
                                               "height": 118,
                                               "class": "ImageResourceLevel"
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
                                          "class": "HotspotPanoramaOverlay"
                                         },
                                         {
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_7E9756AE_64BC_8A26_41D8_9198A4955191); this.mainPlayList.set('selectedIndex', 7)",
                                            "mapColor": "image",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "useHandCursor": true,
                                          "maps": [],
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
                                               "height": 118,
                                               "class": "ImageResourceLevel"
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
                                          "class": "HotspotPanoramaOverlay"
                                         },
                                         {
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_7EEAD6B8_64BC_8A2B_41A3_262F4AC09343); this.mainPlayList.set('selectedIndex', 3)",
                                            "mapColor": "image",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "useHandCursor": true,
                                          "maps": [],
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
                                               "height": 118,
                                               "class": "ImageResourceLevel"
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
                                          "class": "HotspotPanoramaOverlay"
                                         },
                                         {
                                          "bleaching": 0.7,
                                          "id": "overlay_39E9E5BE_37C2_E4C0_41C8_ED2101A9B7E1",
                                          "bleachingDistance": 0.4,
                                          "pitch": 44.67,
                                          "yaw": -108.98,
                                          "class": "LensFlarePanoramaOverlay"
                                         },
                                         {
                                          "bleaching": 0.7,
                                          "id": "overlay_39F9CEF7_37C2_E441_4193_83EA81D1DE6F",
                                          "bleachingDistance": 0.4,
                                          "pitch": 28.8,
                                          "yaw": 14.17,
                                          "class": "LensFlarePanoramaOverlay"
                                         }
                                        ],
                                        "class": "SphericPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_t.jpg"
                                       }
                                      ],
                                      "mapLocations": [
                                       {
                                        "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                        "x": 222.6,
                                        "angle": 138.19,
                                        "y": 230.15,
                                        "class": "PanoramaMapLocation"
                                       }
                                      ],
                                      "class": "Panorama"
                                     },
                                     "yaw": 87.33,
                                     "backwardYaw": 32.92,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    }
                                   ],
                                   "pitch": 0,
                                   "partial": false,
                                   "vfov": 180,
                                   "cardboardMenu": "this.Menu_7E5DD2BB_64BC_8A2E_41CC_93B6A583CFF8",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "hfovMin": 100,
                                   "frames": [
                                    {
                                     "cube": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_hq.jpeg",
                                        "width": 10224,
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "tags": [
                                         "oculusgo",
                                         "ipadpro"
                                        ]
                                       },
                                       {
                                        "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6.jpeg",
                                        "width": 6144,
                                        "height": 1024,
                                        "class": "ImageResourceLevel"
                                       }
                                      ]
                                     },
                                     "overlays": [
                                      {
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_7DB13579_64BC_8E2A_41D3_6A1B9F5C84D2); this.mainPlayList.set('selectedIndex', 16)",
                                         "mapColor": "image",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [],
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
                                            "height": 119,
                                            "class": "ImageResourceLevel"
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
                                       "class": "HotspotPanoramaOverlay"
                                      },
                                      {
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104, this.camera_7DA0355A_64BC_8E6E_41C6_1E78C2EF24A1); this.mainPlayList.set('selectedIndex', 8)",
                                         "mapColor": "image",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [],
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
                                            "height": 118,
                                            "class": "ImageResourceLevel"
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
                                       "class": "HotspotPanoramaOverlay"
                                      },
                                      {
                                       "bleaching": 0.7,
                                       "id": "overlay_D7DEC935_DCEA_FB36_41D7_D4FB63048649",
                                       "bleachingDistance": 0.4,
                                       "pitch": -1.05,
                                       "yaw": -92.76,
                                       "class": "LensFlarePanoramaOverlay"
                                      },
                                      {
                                       "areas": [
                                        {
                                         "click": "this.showPopupPanoramaOverlay(this.popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':50,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':50,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#FF0000','backgroundColorRatios':[0.09803921568627451],'borderSize':0,'iconColor':'#FFFFFF','backgroundOpacity':0.5,'rollOverBorderColor':'#000000','iconWidth':50,'borderColor':'#000000','pressedIconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#CCCCCC','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconHeight':50,'paddingTop':5}, this.ImageResource_C406C318_D4FF_7ACD_41B8_0A98872E7CE5, null, null, null, null, false)",
                                         "mapColor": "image",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [],
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
                                            "height": 103,
                                            "class": "ImageResourceLevel"
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
                                       "class": "HotspotPanoramaOverlay"
                                      },
                                      {
                                       "areas": [
                                        {
                                         "click": "this.showPopupPanoramaOverlay(this.popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':50,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':50,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#FF0000','backgroundColorRatios':[0.09803921568627451],'borderSize':0,'iconColor':'#FFFFFF','backgroundOpacity':0.5,'rollOverBorderColor':'#000000','iconWidth':50,'borderColor':'#000000','pressedIconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#CCCCCC','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverIconHeight':50,'paddingTop':5}, this.ImageResource_C4896E50_D4F3_6B5D_41D3_2EEBDC3443C4, null, null, null, null, false)",
                                         "mapColor": "image",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [],
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
                                            "height": 103,
                                            "class": "ImageResourceLevel"
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
                                       "class": "HotspotPanoramaOverlay"
                                      },
                                      {
                                       "rotationY": 0,
                                       "rotationX": 0,
                                       "yaw": 163.85,
                                       "hideEasing": "cubic_out",
                                       "rotationZ": 0,
                                       "popupMaxWidth": "95%",
                                       "showEasing": "cubic_in",
                                       "id": "popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D",
                                       "hfov": 8.04,
                                       "popupMaxHeight": "95%",
                                       "showDuration": 500,
                                       "image": {
                                        "class": "ImageResource",
                                        "levels": [
                                         {
                                          "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_2.jpg",
                                          "width": 1024,
                                          "height": 682,
                                          "class": "ImageResourceLevel"
                                         }
                                        ]
                                       },
                                       "pitch": -12.51,
                                       "hideDuration": 500,
                                       "popupDistance": 100,
                                       "class": "PopupPanoramaOverlay"
                                      },
                                      {
                                       "rotationY": 0,
                                       "rotationX": 0,
                                       "yaw": 7.39,
                                       "hideEasing": "cubic_out",
                                       "rotationZ": 0,
                                       "popupMaxWidth": "95%",
                                       "showEasing": "cubic_in",
                                       "id": "popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0",
                                       "hfov": 7.64,
                                       "popupMaxHeight": "95%",
                                       "showDuration": 500,
                                       "image": {
                                        "class": "ImageResource",
                                        "levels": [
                                         {
                                          "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_2.jpg",
                                          "width": 1024,
                                          "height": 682,
                                          "class": "ImageResourceLevel"
                                         }
                                        ]
                                       },
                                       "pitch": -21.91,
                                       "hideDuration": 500,
                                       "popupDistance": 100,
                                       "class": "PopupPanoramaOverlay"
                                      },
                                      {
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_7DB8156C_64BC_8E2A_41D3_29FEB1E9B8A5); this.setMediaBehaviour(this.playList_7E33425F_64BC_8A66_41D1_9FF547E6DB9D, 0, this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6)",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "yaw": -91.85,
                                         "hfov": 7.94,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_8_0_0_map.gif",
                                            "width": 16,
                                            "height": 16,
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "pitch": -4.64,
                                         "class": "HotspotPanoramaOverlayMap"
                                        }
                                       ],
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
                                            "height": 118,
                                            "class": "ImageResourceLevel"
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
                                       "class": "HotspotPanoramaOverlay"
                                      }
                                     ],
                                     "class": "CubicPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_t.jpg"
                                    }
                                   ],
                                   "mapLocations": [
                                    {
                                     "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                     "x": 217.7,
                                     "angle": -83.39,
                                     "y": 434.55,
                                     "class": "PanoramaMapLocation"
                                    }
                                   ],
                                   "class": "Panorama"
                                  },
                                  "yaw": -59.69,
                                  "backwardYaw": -91.85,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 }
                                ],
                                "pitch": 0,
                                "partial": false,
                                "vfov": 180,
                                "hfovMax": 130,
                                "hfov": 360,
                                "hfovMin": 100,
                                "frames": [
                                 {
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_hq.jpeg",
                                     "width": 6434,
                                     "height": 3217,
                                     "class": "ImageResourceLevel",
                                     "tags": [
                                      "oculusgo",
                                      "ipadpro"
                                     ]
                                    },
                                    {
                                     "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09.jpeg",
                                     "width": 4002,
                                     "height": 2001,
                                     "class": "ImageResourceLevel"
                                    }
                                   ]
                                  },
                                  "overlays": [
                                   {
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_7E720769_64BC_8A2A_41BD_2A2935F9ED91); this.setMediaBehaviour(this.playList_7E36025F_64BC_8A66_41B6_222EEA525106, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "yaw": 150.05,
                                      "hfov": 5.92,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_0_0_0_map.gif",
                                         "width": 16,
                                         "height": 16,
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "pitch": -2.1,
                                      "class": "HotspotPanoramaOverlayMap"
                                     }
                                    ],
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
                                         "height": 105,
                                         "class": "ImageResourceLevel"
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
                                    "class": "HotspotPanoramaOverlay"
                                   },
                                   {
                                    "areas": [
                                     {
                                      "click": "this.mainPlayList.set('selectedIndex', 0)",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "yaw": 79.36,
                                      "hfov": 5.92,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_1_0_0_map.gif",
                                         "width": 16,
                                         "height": 16,
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "pitch": 1.04,
                                      "class": "HotspotPanoramaOverlayMap"
                                     }
                                    ],
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
                                         "height": 105,
                                         "class": "ImageResourceLevel"
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
                                    "class": "HotspotPanoramaOverlay"
                                   },
                                   {
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748, this.camera_7E55F792_64BC_8AFE_41C7_1323249083D5); this.setMediaBehaviour(this.playList_7E19627D_64BC_8A2A_41D6_CF77ACE58867, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "yaw": 50.1,
                                      "hfov": 5.92,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_2_0_0_map.gif",
                                         "width": 16,
                                         "height": 16,
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "pitch": -0.36,
                                      "class": "HotspotPanoramaOverlayMap"
                                     }
                                    ],
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
                                         "height": 105,
                                         "class": "ImageResourceLevel"
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
                                    "class": "HotspotPanoramaOverlay"
                                   },
                                   {
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_7FA7D7AF_64BC_8A26_41A1_7C1096040318); this.mainPlayList.set('selectedIndex', 1)",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "yaw": -59.69,
                                      "hfov": 5.92,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_3_0_0_map.gif",
                                         "width": 16,
                                         "height": 16,
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "pitch": -2.53,
                                      "class": "HotspotPanoramaOverlayMap"
                                     }
                                    ],
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
                                         "height": 105,
                                         "class": "ImageResourceLevel"
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
                                    "class": "HotspotPanoramaOverlay"
                                   },
                                   {
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_7E430782_64BC_8ADE_41D8_E41929313EE4); this.setMediaBehaviour(this.playList_7E062269_64BC_8A2A_41D3_887D0793443F, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "yaw": -157.73,
                                      "hfov": 5.91,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_4_0_0_map.gif",
                                         "width": 16,
                                         "height": 16,
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "pitch": -3.81,
                                      "class": "HotspotPanoramaOverlayMap"
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
                                         "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_4_0.png",
                                         "width": 105,
                                         "height": 105,
                                         "class": "ImageResourceLevel"
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
                                    "class": "HotspotPanoramaOverlay"
                                   },
                                   {
                                    "areas": [
                                     {
                                      "click": "this.showPopupPanoramaOverlay(this.popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'iconColor':'#000000','backgroundOpacity':0.3,'rollOverBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'paddingTop':5}, this.ImageResource_0AA1E95D_2068_946A_419A_A79BE517FB92, null, null, null, null, false)",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "yaw": -55.53,
                                      "hfov": 5.67,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_5_0_0_map.gif",
                                         "width": 16,
                                         "height": 16,
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "pitch": 16.63,
                                      "class": "HotspotPanoramaOverlayMap"
                                     }
                                    ],
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
                                         "height": 105,
                                         "class": "ImageResourceLevel"
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
                                    "class": "HotspotPanoramaOverlay"
                                   },
                                   {
                                    "rotationY": 0,
                                    "rotationX": 0,
                                    "yaw": -55.53,
                                    "hideEasing": "cubic_out",
                                    "rotationZ": 0,
                                    "popupMaxWidth": "95%",
                                    "showEasing": "cubic_in",
                                    "id": "popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E",
                                    "hfov": 3.78,
                                    "popupMaxHeight": "95%",
                                    "showDuration": 500,
                                    "image": {
                                     "class": "ImageResource",
                                     "levels": [
                                      {
                                       "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_2.jpg",
                                       "width": 682,
                                       "height": 1024,
                                       "class": "ImageResourceLevel"
                                      }
                                     ]
                                    },
                                    "pitch": 16.63,
                                    "hideDuration": 500,
                                    "popupDistance": 100,
                                    "class": "PopupPanoramaOverlay"
                                   },
                                   {
                                    "areas": [
                                     {
                                      "click": "this.setMediaBehaviour(this.playList_7E35425F_64BC_8A66_41D1_8097051CDAED, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "yaw": 78.46,
                                      "hfov": 4.52,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_6_0_0_map.gif",
                                         "width": 16,
                                         "height": 16,
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "pitch": 40.22,
                                      "class": "HotspotPanoramaOverlayMap"
                                     }
                                    ],
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
                                         "height": 105,
                                         "class": "ImageResourceLevel"
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
                                    "class": "HotspotPanoramaOverlay"
                                   }
                                  ],
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_t.jpg"
                                 }
                                ],
                                "mapLocations": [
                                 {
                                  "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                  "x": 296.9,
                                  "angle": 86.7,
                                  "y": 333.85,
                                  "class": "PanoramaMapLocation"
                                 }
                                ],
                                "class": "Panorama"
                               },
                               "yaw": 41.3,
                               "backwardYaw": 150.05,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
                               "yaw": -25.53,
                               "backwardYaw": 174.57,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              }
                             ],
                             "pitch": 0,
                             "partial": false,
                             "vfov": 180,
                             "hfovMax": 130,
                             "hfov": 360,
                             "hfovMin": 100,
                             "frames": [
                              {
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_hq.jpeg",
                                  "width": 6434,
                                  "height": 3217,
                                  "class": "ImageResourceLevel",
                                  "tags": [
                                   "oculusgo",
                                   "ipadpro"
                                  ]
                                 },
                                 {
                                  "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677.jpeg",
                                  "width": 4002,
                                  "height": 2001,
                                  "class": "ImageResourceLevel"
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714, this.camera_7F3693CC_64BC_8A6A_41D2_80597DF4607E); this.mainPlayList.set('selectedIndex', 0)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "yaw": 150.13,
                                   "hfov": 5.92,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_0_0_0_map.gif",
                                      "width": 16,
                                      "height": 16,
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "pitch": 0.8,
                                   "class": "HotspotPanoramaOverlayMap"
                                  }
                                 ],
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
                                      "height": 105,
                                      "class": "ImageResourceLevel"
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
                                 "class": "HotspotPanoramaOverlay"
                                },
                                {
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_7F0B53DB_64BC_8A6E_41CD_2BEF0E5A5ADA); this.setMediaBehaviour(this.playList_7E33425F_64BC_8A66_41D1_9FF547E6DB9D, 0, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "yaw": 41.3,
                                   "hfov": 5.92,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_1_0_0_map.gif",
                                      "width": 16,
                                      "height": 16,
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "pitch": -2.08,
                                   "class": "HotspotPanoramaOverlayMap"
                                  }
                                 ],
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
                                      "height": 105,
                                      "class": "ImageResourceLevel"
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
                                 "class": "HotspotPanoramaOverlay"
                                },
                                {
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_7F1E83E7_64BC_8A26_41C0_9A847384A382); this.setMediaBehaviour(this.playList_7E062269_64BC_8A2A_41D3_887D0793443F, 0, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "yaw": -25.53,
                                   "hfov": 5.9,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_2_0_0_map.gif",
                                      "width": 16,
                                      "height": 16,
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "pitch": -5.35,
                                   "class": "HotspotPanoramaOverlayMap"
                                  }
                                 ],
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
                                      "height": 105,
                                      "class": "ImageResourceLevel"
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
                                 "class": "HotspotPanoramaOverlay"
                                },
                                {
                                 "areas": [
                                  {
                                   "click": "this.showPopupPanoramaOverlay(this.popup_3AF279F7_20F8_9425_41B8_727B1C05B69A, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'iconColor':'#000000','backgroundOpacity':0.3,'rollOverBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'paddingTop':5}, this.ImageResource_095FC95D_2068_946A_41A5_88BA52F0CF59, null, null, null, null, false)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "yaw": 81.82,
                                   "hfov": 5.92,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_3_0_0_map.gif",
                                      "width": 16,
                                      "height": 16,
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "pitch": 0.15,
                                   "class": "HotspotPanoramaOverlayMap"
                                  }
                                 ],
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
                                      "height": 105,
                                      "class": "ImageResourceLevel"
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
                                 "class": "HotspotPanoramaOverlay"
                                },
                                {
                                 "rotationY": 0,
                                 "rotationX": 0,
                                 "yaw": 81.82,
                                 "hideEasing": "cubic_out",
                                 "rotationZ": 0,
                                 "popupMaxWidth": "95%",
                                 "showEasing": "cubic_in",
                                 "id": "popup_3AF279F7_20F8_9425_41B8_727B1C05B69A",
                                 "hfov": 5.92,
                                 "popupMaxHeight": "95%",
                                 "showDuration": 500,
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "url": "media/popup_3AF279F7_20F8_9425_41B8_727B1C05B69A_0_1.jpg",
                                    "width": 1024,
                                    "height": 682,
                                    "class": "ImageResourceLevel"
                                   }
                                  ]
                                 },
                                 "pitch": 0.15,
                                 "hideDuration": 500,
                                 "popupDistance": 100,
                                 "class": "PopupPanoramaOverlay"
                                },
                                {
                                 "areas": [
                                  {
                                   "click": "this.setMediaBehaviour(this.playList_7E1AA278_64BC_8A2A_41D6_31B54B5AA00F, 0, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "yaw": -16.74,
                                   "hfov": 5.21,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_4_0_0_map.gif",
                                      "width": 16,
                                      "height": 16,
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "pitch": 28.31,
                                   "class": "HotspotPanoramaOverlayMap"
                                  }
                                 ],
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
                                      "height": 105,
                                      "class": "ImageResourceLevel"
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
                                 "class": "HotspotPanoramaOverlay"
                                }
                               ],
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_t.jpg"
                              }
                             ],
                             "class": "Panorama"
                            },
                            "yaw": 174.57,
                            "backwardYaw": -25.53,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "panorama": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
                            "yaw": 6.44,
                            "backwardYaw": -164.09,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "panorama": {
                             "thumbnailUrl": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_t.jpg",
                             "label": "17-Construcci\u00f3n Coloplast",
                             "id": "panorama_0B7B5A27_1FEB_7426_4195_945554348391",
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
                               "yaw": -155.58,
                               "backwardYaw": 69.33,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "panorama": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B",
                               "class": "AdjacentPanorama"
                              },
                              {
                               "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
                               "yaw": -174.5,
                               "backwardYaw": 66.08,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              }
                             ],
                             "pitch": 0,
                             "partial": false,
                             "vfov": 180,
                             "hfovMax": 130,
                             "hfov": 360,
                             "hfovMin": 100,
                             "frames": [
                              {
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_hq.jpeg",
                                  "width": 6434,
                                  "height": 3217,
                                  "class": "ImageResourceLevel",
                                  "tags": [
                                   "oculusgo",
                                   "ipadpro"
                                  ]
                                 },
                                 {
                                  "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391.jpeg",
                                  "width": 4002,
                                  "height": 2001,
                                  "class": "ImageResourceLevel"
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_7E6E972D_64BC_8A2A_41B3_85D71374F7F5); this.setMediaBehaviour(this.playList_7E16127D_64BC_8A2A_41D3_29DBC0915C3A, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "yaw": -155.58,
                                   "hfov": 5.91,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_0_0_0_map.gif",
                                      "width": 16,
                                      "height": 16,
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "pitch": -3.74,
                                   "class": "HotspotPanoramaOverlayMap"
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
                                      "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_0_0.png",
                                      "width": 105,
                                      "height": 105,
                                      "class": "ImageResourceLevel"
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
                                 "class": "HotspotPanoramaOverlay"
                                },
                                {
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_7E617752_64BC_8A7E_41D2_2469E51779B4); this.setMediaBehaviour(this.playList_7E062269_64BC_8A2A_41D3_887D0793443F, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "yaw": -174.5,
                                   "hfov": 5.92,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_1_0_0_map.gif",
                                      "width": 16,
                                      "height": 16,
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "pitch": -1.39,
                                   "class": "HotspotPanoramaOverlayMap"
                                  }
                                 ],
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
                                      "height": 105,
                                      "class": "ImageResourceLevel"
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
                                 "class": "HotspotPanoramaOverlay"
                                },
                                {
                                 "areas": [
                                  {
                                   "click": "this.setMediaBehaviour(this.playList_7E1AA278_64BC_8A2A_41D6_31B54B5AA00F, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "yaw": -90.59,
                                   "hfov": 5.28,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_2_0_0_map.gif",
                                      "width": 16,
                                      "height": 16,
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "pitch": 27.01,
                                   "class": "HotspotPanoramaOverlayMap"
                                  }
                                 ],
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
                                      "height": 105,
                                      "class": "ImageResourceLevel"
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
                                 "class": "HotspotPanoramaOverlay"
                                },
                                {
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.media_0BA5C089_2079_B4ED_41A8_D2AC2349E041, this.camera_57ED2843_5884_EE2E_41C5_05C9E202BB3A); this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "yaw": 172.46,
                                   "hfov": 7.09,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_3_0_0_map.gif",
                                      "width": 16,
                                      "height": 16,
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "pitch": -16.71,
                                   "class": "HotspotPanoramaOverlayMap"
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
                                      "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_3_0.png",
                                      "width": 132,
                                      "height": 132,
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "pitch": -16.71,
                                   "yaw": 172.46
                                  }
                                 ],
                                 "id": "overlay_09633245_2078_9465_41B8_9D4E53C35E27",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay"
                                }
                               ],
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_t.jpg"
                              }
                             ],
                             "mapLocations": [
                              {
                               "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                               "x": 357.9,
                               "angle": 48.7,
                               "y": 264.95,
                               "class": "PanoramaMapLocation"
                              }
                             ],
                             "class": "Panorama"
                            },
                            "yaw": 66.08,
                            "backwardYaw": -174.5,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "panorama": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
                            "yaw": 137.01,
                            "backwardYaw": -157.73,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           }
                          ],
                          "pitch": 0,
                          "partial": false,
                          "vfov": 180,
                          "hfovMax": 130,
                          "hfov": 360,
                          "hfovMin": 100,
                          "frames": [
                           {
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_hq.jpeg",
                               "width": 6434,
                               "height": 3217,
                               "class": "ImageResourceLevel",
                               "tags": [
                                "oculusgo",
                                "ipadpro"
                               ]
                              },
                              {
                               "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B.jpeg",
                               "width": 4002,
                               "height": 2001,
                               "class": "ImageResourceLevel"
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_7C7E54D5_64BC_8E7A_41C8_DA76F4F13EE3); this.setMediaBehaviour(this.playList_7E36025F_64BC_8A66_41B6_222EEA525106, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "yaw": 174.57,
                                "hfov": 5.88,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_0_0_0_map.gif",
                                   "width": 16,
                                   "height": 16,
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "pitch": -7.02,
                                "class": "HotspotPanoramaOverlayMap"
                               }
                              ],
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
                                   "height": 105,
                                   "class": "ImageResourceLevel"
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
                              "class": "HotspotPanoramaOverlay"
                             },
                             {
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_7C78D4E4_64BC_8E5A_41D5_D3673771E728); this.setMediaBehaviour(this.playList_7E16127D_64BC_8A2A_41D3_29DBC0915C3A, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "yaw": 6.44,
                                "hfov": 5.91,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_1_0_0_map.gif",
                                   "width": 16,
                                   "height": 16,
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "pitch": -3.74,
                                "class": "HotspotPanoramaOverlayMap"
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
                                   "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_1_0.png",
                                   "width": 105,
                                   "height": 105,
                                   "class": "ImageResourceLevel"
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
                              "class": "HotspotPanoramaOverlay"
                             },
                             {
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246, this.camera_78CFD47B_64BC_8E2E_41D8_900258DC0ACC); this.setMediaBehaviour(this.playList_7E15627D_64BC_8A2A_41D0_1CF5E3D803C3, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "yaw": -78.27,
                                "hfov": 5.91,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_2_0_0_map.gif",
                                   "width": 16,
                                   "height": 16,
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "pitch": -3.14,
                                "class": "HotspotPanoramaOverlayMap"
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
                                   "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_2_0.png",
                                   "width": 105,
                                   "height": 105,
                                   "class": "ImageResourceLevel"
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
                              "class": "HotspotPanoramaOverlay"
                             },
                             {
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_0B7B5A27_1FEB_7426_4195_945554348391, this.camera_7C7444F1_64BC_8E3A_41C2_EFFC37AA269A); this.setMediaBehaviour(this.playList_7E01C278_64BC_8A2A_41B1_2891A216580D, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "yaw": 66.08,
                                "hfov": 5.92,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_3_0_0_map.gif",
                                   "width": 16,
                                   "height": 16,
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "pitch": 0.87,
                                "class": "HotspotPanoramaOverlayMap"
                               }
                              ],
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
                                   "height": 105,
                                   "class": "ImageResourceLevel"
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
                              "class": "HotspotPanoramaOverlay"
                             },
                             {
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_7C4EA4FE_64BC_8E26_41C4_687D925F0C27); this.setMediaBehaviour(this.playList_7E33425F_64BC_8A66_41D1_9FF547E6DB9D, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "yaw": 137.01,
                                "hfov": 5.91,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_4_0_0_map.gif",
                                   "width": 16,
                                   "height": 16,
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "pitch": -2.79,
                                "class": "HotspotPanoramaOverlayMap"
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
                                   "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_4_0.png",
                                   "width": 105,
                                   "height": 105,
                                   "class": "ImageResourceLevel"
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
                              "class": "HotspotPanoramaOverlay"
                             },
                             {
                              "areas": [
                               {
                                "click": "this.showPopupPanoramaOverlay(this.popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'iconColor':'#000000','backgroundOpacity':0.3,'rollOverBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'paddingTop':5}, null, null, null, null, null, false)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "yaw": -45.57,
                                "hfov": 5.85,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_5_0_0_map.gif",
                                   "width": 16,
                                   "height": 16,
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "pitch": 8.64,
                                "class": "HotspotPanoramaOverlayMap"
                               }
                              ],
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
                                   "height": 105,
                                   "class": "ImageResourceLevel"
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
                              "class": "HotspotPanoramaOverlay"
                             },
                             {
                              "rotationY": 0,
                              "rotationX": 0,
                              "yaw": -45.57,
                              "hideEasing": "cubic_out",
                              "rotationZ": 0,
                              "popupMaxWidth": "95%",
                              "showEasing": "cubic_in",
                              "id": "popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7",
                              "hfov": 5.85,
                              "popupMaxHeight": "95%",
                              "showDuration": 500,
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "url": "media/popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7_0_0.jpg",
                                 "width": 850,
                                 "height": 625,
                                 "class": "ImageResourceLevel"
                                },
                                {
                                 "url": "media/popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7_0_1.jpg",
                                 "width": 511,
                                 "height": 376,
                                 "class": "ImageResourceLevel"
                                }
                               ]
                              },
                              "pitch": 8.64,
                              "hideDuration": 500,
                              "popupDistance": 100,
                              "class": "PopupPanoramaOverlay"
                             },
                             {
                              "areas": [
                               {
                                "click": "this.setMediaBehaviour(this.playList_7E1AA278_64BC_8A2A_41D6_31B54B5AA00F, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "yaw": 21.44,
                                "hfov": 4.82,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_6_0_0_map.gif",
                                   "width": 16,
                                   "height": 16,
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "pitch": 35.54,
                                "class": "HotspotPanoramaOverlayMap"
                               }
                              ],
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
                                   "height": 105,
                                   "class": "ImageResourceLevel"
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
                              "class": "HotspotPanoramaOverlay"
                             },
                             {
                              "areas": [
                               {
                                "click": "this.showPopupPanoramaOverlay(this.popup_36E9C513_249E_702C_41C0_2CA0C18AAE54, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'iconColor':'#000000','backgroundOpacity':0.3,'rollOverBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'paddingTop':5}, this.ImageResource_32BB558C_24AE_9034_41A0_905F3B8026D3, null, null, null, null, false)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "yaw": -13.2,
                                "hfov": 5.92,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_7_0_0_map.gif",
                                   "width": 16,
                                   "height": 16,
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "pitch": -1.15,
                                "class": "HotspotPanoramaOverlayMap"
                               }
                              ],
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
                                   "height": 105,
                                   "class": "ImageResourceLevel"
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
                              "class": "HotspotPanoramaOverlay"
                             },
                             "this.popup_36E9C513_249E_702C_41C0_2CA0C18AAE54",
                             {
                              "areas": [
                               {
                                "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_37E7B455_24BA_B0D4_41A5_EF23708D6C53, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'iconColor':'#000000','backgroundOpacity':0.3,'rollOverBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'paddingTop':5}, true) } else { this.showPopupMedia(this.window_6FC7C885_649C_86DA_4190_A737FDB62B16, this.video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB, this.PlayList_77D1A5C8_64AC_8E6A_419B_370D86953148, '95%', '95%', true, true) }",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "yaw": 34.02,
                                "hfov": 5.92,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_8_0_0_map.gif",
                                   "width": 16,
                                   "height": 16,
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "pitch": -1.52,
                                "class": "HotspotPanoramaOverlayMap"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.92,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_8_0.png",
                                   "width": 105,
                                   "height": 105,
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "pitch": -1.52,
                                "yaw": 34.02
                               }
                              ],
                              "id": "overlay_309020BC_24AA_B054_41A4_52F08D805B2F",
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay"
                             },
                             {
                              "rotationY": 0,
                              "hideDuration": 500,
                              "yaw": 34.02,
                              "hideEasing": "cubic_out",
                              "rotationZ": 0,
                              "popupMaxWidth": "95%",
                              "showEasing": "cubic_in",
                              "id": "popup_37E7B455_24BA_B0D4_41A5_EF23708D6C53",
                              "hfov": 5.92,
                              "popupMaxHeight": "95%",
                              "showDuration": 500,
                              "loop": false,
                              "pitch": -1.52,
                              "rotationX": 0,
                              "autoplay": true,
                              "popupDistance": 100,
                              "class": "PopupPanoramaOverlay",
                              "video": {
                               "width": 1280,
                               "mp4Url": "media/video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB.mp4",
                               "height": 720,
                               "class": "VideoResource"
                              }
                             }
                            ],
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_t.jpg"
                           }
                          ],
                          "mapLocations": [
                           {
                            "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                            "x": 282.7,
                            "angle": 0,
                            "y": 306.8,
                            "class": "PanoramaMapLocation"
                           }
                          ],
                          "class": "Panorama"
                         },
                         "yaw": 88.55,
                         "backwardYaw": -78.27,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        }
                       ],
                       "pitch": 0,
                       "partial": false,
                       "vfov": 180,
                       "hfovMax": 130,
                       "hfov": 360,
                       "hfovMin": 100,
                       "frames": [
                        {
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_hq.jpeg",
                            "width": 6434,
                            "height": 3217,
                            "class": "ImageResourceLevel",
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ]
                           },
                           {
                            "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246.jpeg",
                            "width": 4002,
                            "height": 2001,
                            "class": "ImageResourceLevel"
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_7D6C163D_64BC_8A2A_417C_4AD890BBE755); this.setMediaBehaviour(this.playList_7E062269_64BC_8A2A_41D3_887D0793443F, 0, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "yaw": 88.55,
                             "hfov": 5.92,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_0_0_0_map.gif",
                                "width": 16,
                                "height": 16,
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": -2.03,
                             "class": "HotspotPanoramaOverlayMap"
                            }
                           ],
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
                                "height": 105,
                                "class": "ImageResourceLevel"
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
                           "class": "HotspotPanoramaOverlay"
                          },
                          {
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_7D180633_64BC_8A3E_41A9_BEF6F332A44D); this.setMediaBehaviour(this.playList_7E052269_64BC_8A2A_41CE_90BE4563B181, 0, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "yaw": -94.64,
                             "hfov": 5.9,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_1_0_0_map.gif",
                                "width": 16,
                                "height": 16,
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": -5.21,
                             "class": "HotspotPanoramaOverlayMap"
                            }
                           ],
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
                                "height": 105,
                                "class": "ImageResourceLevel"
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
                           "class": "HotspotPanoramaOverlay"
                          },
                          {
                           "areas": [
                            {
                             "click": "this.showPopupPanoramaOverlay(this.popup_3A305B90_20FB_94FB_4193_FEB3450979FC, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'iconColor':'#000000','backgroundOpacity':0.3,'rollOverBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'paddingTop':5}, null, null, null, null, null, false)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "yaw": -56.26,
                             "hfov": 5.84,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_2_0_0_map.gif",
                                "width": 16,
                                "height": 16,
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": 9.36,
                             "class": "HotspotPanoramaOverlayMap"
                            }
                           ],
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
                                "height": 105,
                                "class": "ImageResourceLevel"
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
                           "class": "HotspotPanoramaOverlay"
                          },
                          {
                           "rotationY": 0,
                           "rotationX": 0,
                           "yaw": -56.26,
                           "hideEasing": "cubic_out",
                           "rotationZ": 0,
                           "popupMaxWidth": "95%",
                           "showEasing": "cubic_in",
                           "id": "popup_3A305B90_20FB_94FB_4193_FEB3450979FC",
                           "hfov": 5.84,
                           "popupMaxHeight": "95%",
                           "showDuration": 500,
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "url": "media/popup_3A305B90_20FB_94FB_4193_FEB3450979FC_0_0.jpg",
                              "width": 807,
                              "height": 752,
                              "class": "ImageResourceLevel"
                             },
                             {
                              "url": "media/popup_3A305B90_20FB_94FB_4193_FEB3450979FC_0_1.jpg",
                              "width": 512,
                              "height": 477,
                              "class": "ImageResourceLevel"
                             }
                            ]
                           },
                           "pitch": 9.36,
                           "hideDuration": 500,
                           "popupDistance": 100,
                           "class": "PopupPanoramaOverlay"
                          },
                          {
                           "areas": [
                            {
                             "click": "this.setMediaBehaviour(this.playList_7E103287_64BC_8AE6_41B1_C1FBA62DF62E, 0, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "yaw": -148.61,
                             "hfov": 5.27,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_3_0_0_map.gif",
                                "width": 16,
                                "height": 16,
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": 27.18,
                             "class": "HotspotPanoramaOverlayMap"
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
                                "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_3_0.png",
                                "width": 105,
                                "height": 105,
                                "class": "ImageResourceLevel"
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
                           "class": "HotspotPanoramaOverlay"
                          },
                          {
                           "areas": [
                            {
                             "click": "this.showPopupPanoramaOverlay(this.popup_36258FF0_249D_EFED_41AB_54067BE4CE8C, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'iconColor':'#000000','backgroundOpacity':0.3,'rollOverBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'paddingTop':5}, this.ImageResource_32C8659C_24AE_9054_4187_C8E2724888E0, null, null, null, null, false)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "yaw": -50.51,
                             "hfov": 5.88,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_4_0_0_map.gif",
                                "width": 16,
                                "height": 16,
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": -6.52,
                             "class": "HotspotPanoramaOverlayMap"
                            }
                           ],
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
                                "height": 105,
                                "class": "ImageResourceLevel"
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
                           "class": "HotspotPanoramaOverlay"
                          },
                          {
                           "rotationY": 0,
                           "rotationX": 0,
                           "yaw": -50.51,
                           "hideEasing": "cubic_out",
                           "rotationZ": 0,
                           "popupMaxWidth": "95%",
                           "showEasing": "cubic_in",
                           "id": "popup_36258FF0_249D_EFED_41AB_54067BE4CE8C",
                           "hfov": 5.88,
                           "popupMaxHeight": "95%",
                           "showDuration": 500,
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "url": "media/popup_36258FF0_249D_EFED_41AB_54067BE4CE8C_0_1.jpg",
                              "width": 1024,
                              "height": 682,
                              "class": "ImageResourceLevel"
                             }
                            ]
                           },
                           "pitch": -6.52,
                           "hideDuration": 500,
                           "popupDistance": 100,
                           "class": "PopupPanoramaOverlay"
                          },
                          {
                           "areas": [
                            {
                             "click": "this.showPopupPanoramaOverlay(this.popup_36539A9C_24AE_9054_41AC_911079BB2A7C, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'iconColor':'#000000','backgroundOpacity':0.3,'rollOverBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'paddingTop':5}, this.ImageResource_32C8A59C_24AE_9054_41B0_230945BD42EC, null, null, null, null, false)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "yaw": -76.59,
                             "hfov": 5.92,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_5_0_0_map.gif",
                                "width": 16,
                                "height": 16,
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": 1.45,
                             "class": "HotspotPanoramaOverlayMap"
                            }
                           ],
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
                                "height": 105,
                                "class": "ImageResourceLevel"
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
                           "class": "HotspotPanoramaOverlay"
                          },
                          {
                           "rotationY": 0,
                           "rotationX": 0,
                           "yaw": -76.59,
                           "hideEasing": "cubic_out",
                           "rotationZ": 0,
                           "popupMaxWidth": "95%",
                           "showEasing": "cubic_in",
                           "id": "popup_36539A9C_24AE_9054_41AC_911079BB2A7C",
                           "hfov": 5.92,
                           "popupMaxHeight": "95%",
                           "showDuration": 500,
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "url": "media/popup_36539A9C_24AE_9054_41AC_911079BB2A7C_0_1.jpg",
                              "width": 1024,
                              "height": 682,
                              "class": "ImageResourceLevel"
                             }
                            ]
                           },
                           "pitch": 1.45,
                           "hideDuration": 500,
                           "popupDistance": 100,
                           "class": "PopupPanoramaOverlay"
                          }
                         ],
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_t.jpg"
                        }
                       ],
                       "class": "Panorama"
                      },
                      "yaw": 179.05,
                      "backwardYaw": -94.64,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "panorama": "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
                      "yaw": 79.43,
                      "backwardYaw": -95.46,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "panorama": "this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A",
                      "class": "AdjacentPanorama"
                     }
                    ],
                    "pitch": 0,
                    "partial": false,
                    "vfov": 180,
                    "hfovMax": 130,
                    "hfov": 360,
                    "hfovMin": 100,
                    "frames": [
                     {
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_hq.jpeg",
                         "width": 6434,
                         "height": 3217,
                         "class": "ImageResourceLevel",
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ]
                        },
                        {
                         "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7.jpeg",
                         "width": 4002,
                         "height": 2001,
                         "class": "ImageResourceLevel"
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246, this.camera_7DF055CF_64BC_8E66_41D6_C778EDE8052A); this.setMediaBehaviour(this.playList_7E15627D_64BC_8A2A_41D0_1CF5E3D803C3, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "yaw": 179.05,
                          "hfov": 5.9,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_0_0_0_map.gif",
                             "width": 16,
                             "height": 16,
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": -4.4,
                          "class": "HotspotPanoramaOverlayMap"
                         }
                        ],
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
                             "height": 105,
                             "class": "ImageResourceLevel"
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
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525, this.camera_7DC565D9_64BC_8E6A_41CF_732C8CAF618E); this.setMediaBehaviour(this.playList_7E03E273_64BC_8A3E_41CD_9F708FB1A65E, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "yaw": 79.43,
                          "hfov": 5.92,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_1_0_0_map.gif",
                             "width": 16,
                             "height": 16,
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": -0.99,
                          "class": "HotspotPanoramaOverlayMap"
                         }
                        ],
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
                             "height": 105,
                             "class": "ImageResourceLevel"
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
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E, this.camera_7DFB55C1_64BC_8E5A_41C1_9772FA8C7A91); this.setMediaBehaviour(this.playList_7E04B269_64BC_8A2A_41B3_E5968AC6AE2C, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "yaw": -90.48,
                          "hfov": 5.92,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_2_0_0_map.gif",
                             "width": 16,
                             "height": 16,
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": -1.59,
                          "class": "HotspotPanoramaOverlayMap"
                         }
                        ],
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
                             "height": 105,
                             "class": "ImageResourceLevel"
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
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "areas": [
                         {
                          "click": "this.showPopupPanoramaOverlay(this.popup_3A3C822F_20F8_9425_41B2_B5F3B1085960, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'iconColor':'#000000','backgroundOpacity':0.3,'rollOverBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'paddingTop':5}, this.ImageResource_0AAA2971_2068_943D_41B4_10DFF5B38D1B, null, null, null, null, false)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "yaw": 32.81,
                          "hfov": 5.82,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_3_0_0_map.gif",
                             "width": 16,
                             "height": 16,
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": 10.53,
                          "class": "HotspotPanoramaOverlayMap"
                         }
                        ],
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
                             "height": 105,
                             "class": "ImageResourceLevel"
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
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "rotationY": 0,
                        "rotationX": 0,
                        "yaw": 32.81,
                        "hideEasing": "cubic_out",
                        "rotationZ": 0,
                        "popupMaxWidth": "95%",
                        "showEasing": "cubic_in",
                        "id": "popup_3A3C822F_20F8_9425_41B2_B5F3B1085960",
                        "hfov": 5.82,
                        "popupMaxHeight": "95%",
                        "showDuration": 500,
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "url": "media/popup_3A3C822F_20F8_9425_41B2_B5F3B1085960_0_1.jpg",
                           "width": 1024,
                           "height": 682,
                           "class": "ImageResourceLevel"
                          }
                         ]
                        },
                        "pitch": 10.53,
                        "hideDuration": 500,
                        "popupDistance": 100,
                        "class": "PopupPanoramaOverlay"
                       },
                       {
                        "areas": [
                         {
                          "click": "this.setMediaBehaviour(this.playList_7E103287_64BC_8AE6_41B1_C1FBA62DF62E, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "yaw": -84.07,
                          "hfov": 5.34,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_4_0_0_map.gif",
                             "width": 16,
                             "height": 16,
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": 25.67,
                          "class": "HotspotPanoramaOverlayMap"
                         }
                        ],
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
                             "height": 105,
                             "class": "ImageResourceLevel"
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
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "areas": [
                         {
                          "click": "this.setMediaBehaviour(this.playList_7E6C628C_64BC_8AEA_41BE_2C5A509C2039, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "yaw": 76.78,
                          "hfov": 5.1,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_5_0_0_map.gif",
                             "width": 16,
                             "height": 16,
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": 30.52,
                          "class": "HotspotPanoramaOverlayMap"
                         }
                        ],
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
                             "height": 105,
                             "class": "ImageResourceLevel"
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
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "areas": [
                         {
                          "click": "this.showPopupPanoramaOverlay(this.popup_3638CA38_249B_905C_41B3_EA26EB9333F0, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'iconColor':'#000000','backgroundOpacity':0.3,'rollOverBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'paddingTop':5}, this.ImageResource_32CC759C_24AE_9054_419F_511B2D533327, null, null, null, null, false)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "yaw": -32.7,
                          "hfov": 5.66,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_6_0_0_map.gif",
                             "width": 16,
                             "height": 16,
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": 17.08,
                          "class": "HotspotPanoramaOverlayMap"
                         }
                        ],
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
                             "height": 105,
                             "class": "ImageResourceLevel"
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
                        "class": "HotspotPanoramaOverlay"
                       },
                       "this.popup_3638CA38_249B_905C_41B3_EA26EB9333F0",
                       {
                        "areas": [
                         {
                          "click": "this.showPopupPanoramaOverlay(this.popup_369EF53B_249A_B05C_41BC_AE1E970C16EA, {'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'iconColor':'#000000','backgroundOpacity':0.3,'rollOverBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'paddingTop':5}, this.ImageResource_32CD359C_24AE_9054_41BC_CF812CF11760, null, null, null, null, false)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "yaw": 101.53,
                          "hfov": 5.91,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_7_0_0_map.gif",
                             "width": 16,
                             "height": 16,
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": -4.09,
                          "class": "HotspotPanoramaOverlayMap"
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
                             "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_7_0.png",
                             "width": 105,
                             "height": 105,
                             "class": "ImageResourceLevel"
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
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "rotationY": 0,
                        "rotationX": 0,
                        "yaw": 101.53,
                        "hideEasing": "cubic_out",
                        "rotationZ": 0,
                        "popupMaxWidth": "95%",
                        "showEasing": "cubic_in",
                        "id": "popup_369EF53B_249A_B05C_41BC_AE1E970C16EA",
                        "hfov": 5.91,
                        "popupMaxHeight": "95%",
                        "showDuration": 500,
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "url": "media/popup_369EF53B_249A_B05C_41BC_AE1E970C16EA_0_1.jpg",
                           "width": 1024,
                           "height": 682,
                           "class": "ImageResourceLevel"
                          }
                         ]
                        },
                        "pitch": -4.09,
                        "hideDuration": 500,
                        "popupDistance": 100,
                        "class": "PopupPanoramaOverlay"
                       },
                       {
                        "areas": [
                         {
                          "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "yaw": -60.3,
                          "hfov": 5.91,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_8_0_0_map.gif",
                             "width": 16,
                             "height": 16,
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": 3.49,
                          "class": "HotspotPanoramaOverlayMap"
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
                             "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_8_0.png",
                             "width": 105,
                             "height": 105,
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": 3.49,
                          "yaw": -60.3
                         }
                        ],
                        "id": "overlay_4C6220C2_58BD_DE2E_41C0_710B6FA2336F",
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay"
                       }
                      ],
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_t.jpg"
                     }
                    ],
                    "mapLocations": [
                     {
                      "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                      "x": 89.75,
                      "angle": 266.01,
                      "y": 307.7,
                      "class": "PanoramaMapLocation"
                     }
                    ],
                    "class": "Panorama"
                   },
                   "yaw": -117.3,
                   "backwardYaw": -90.48,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "panorama": "this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765",
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "pitch": 0,
                 "partial": false,
                 "vfov": 180,
                 "hfovMax": 130,
                 "hfov": 360,
                 "hfovMin": 100,
                 "frames": [
                  {
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_hq.jpeg",
                      "width": 6434,
                      "height": 3217,
                      "class": "ImageResourceLevel",
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ]
                     },
                     {
                      "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E.jpeg",
                      "width": 4002,
                      "height": 2001,
                      "class": "ImageResourceLevel"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_7DD1E5F3_64BC_8E3E_41B0_EE1CFBDAB533); this.setMediaBehaviour(this.playList_7E052269_64BC_8A2A_41CE_90BE4563B181, 0, this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "maps": [
                      {
                       "yaw": -117.3,
                       "hfov": 5.9,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_0_0_0_map.gif",
                          "width": 16,
                          "height": 16,
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -4.38,
                       "class": "HotspotPanoramaOverlayMap"
                      }
                     ],
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
                          "height": 105,
                          "class": "ImageResourceLevel"
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
                     "class": "HotspotPanoramaOverlay"
                    },
                    {
                     "areas": [
                      {
                       "click": "this.setMediaBehaviour(this.playList_7E103287_64BC_8AE6_41B1_C1FBA62DF62E, 0, this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "maps": [
                      {
                       "yaw": 62.4,
                       "hfov": 3.6,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_1_0_0_map.gif",
                          "width": 16,
                          "height": 16,
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": 52.59,
                       "class": "HotspotPanoramaOverlayMap"
                      }
                     ],
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
                          "height": 105,
                          "class": "ImageResourceLevel"
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
                     "class": "HotspotPanoramaOverlay"
                    },
                    {
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7, this.camera_5564A635_5884_E26A_41CD_F65940AE1D0F); this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false)",
                       "mapColor": "image",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "maps": [],
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
                          "height": 105,
                          "class": "ImageResourceLevel"
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
                     },
                     "class": "HotspotPanoramaOverlay"
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_t.jpg"
                  }
                 ],
                 "mapLocations": [
                  {
                   "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                   "x": 96.9,
                   "angle": 122.43,
                   "y": 435.15,
                   "class": "PanoramaMapLocation"
                  }
                 ],
                 "class": "Panorama"
                },
                "class": "AdjacentPanorama"
               },
               {
                "panorama": "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
                "class": "AdjacentPanorama"
               },
               {
                "panorama": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B",
                "yaw": -114.68,
                "backwardYaw": 76.9,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "panorama": "this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1",
                "yaw": -64.23,
                "backwardYaw": 154.31,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "panorama": "this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A",
                "yaw": -165.51,
                "backwardYaw": -103.84,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "hfovMax": 130,
              "hfov": 360,
              "hfovMin": 100,
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_hq.jpeg",
                   "width": 6434,
                   "height": 3217,
                   "class": "ImageResourceLevel",
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765.jpeg",
                   "width": 4002,
                   "height": 2001,
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "overlays": [
                 {
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1, this.camera_788B0449_64BC_8E6A_41AA_CBAF692FEC49); this.setMediaBehaviour(this.playList_7E35425F_64BC_8A66_41D1_8097051CDAED, 0, this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "maps": [
                   {
                    "yaw": -64.23,
                    "hfov": 5.8,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_0_0_0_map.gif",
                       "width": 16,
                       "height": 16,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": 11.59,
                    "class": "HotspotPanoramaOverlayMap"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.8,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_0_0.png",
                       "width": 105,
                       "height": 105,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": 11.59,
                    "yaw": -64.23
                   }
                  ],
                  "id": "overlay_288AB024_26DD_B4CB_4179_78B3783EB1AB",
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay"
                 },
                 {
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A, this.camera_789CE458_64BC_8E6A_41C0_9308A4EDAE8A); this.setMediaBehaviour(this.playList_7E6C628C_64BC_8AEA_41BE_2C5A509C2039, 0, this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "maps": [
                   {
                    "yaw": -165.51,
                    "hfov": 5.79,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_1_0_0_map.gif",
                       "width": 16,
                       "height": 16,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": 12.12,
                    "class": "HotspotPanoramaOverlayMap"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.79,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_1_0.png",
                       "width": 105,
                       "height": 105,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": 12.12,
                    "yaw": -165.51
                   }
                  ],
                  "id": "overlay_288A9024_26DD_B4CB_41B4_19F7795F04A7",
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay"
                 },
                 {
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B, this.camera_78BAF43A_64BC_8E2E_41D3_0641B3C5F5AA); this.setMediaBehaviour(this.playList_7E1AA278_64BC_8A2A_41D6_31B54B5AA00F, 0, this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "maps": [
                   {
                    "yaw": -114.68,
                    "hfov": 5.8,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_2_0_0_map.gif",
                       "width": 16,
                       "height": 16,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": 11.56,
                    "class": "HotspotPanoramaOverlayMap"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.8,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_2_0.png",
                       "width": 105,
                       "height": 105,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": 11.56,
                    "yaw": -114.68
                   }
                  ],
                  "id": "overlay_288AE024_26DD_B4CB_41C1_897611AC4934",
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay"
                 },
                 {
                  "areas": [
                   {
                    "click": "this.setMediaBehaviour(this.playList_7E04B269_64BC_8A2A_41B3_E5968AC6AE2C, 0, this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "maps": [
                   {
                    "yaw": 69.84,
                    "hfov": 0.36,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_3_0_0_map.gif",
                       "width": 16,
                       "height": 16,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -86.56,
                    "class": "HotspotPanoramaOverlayMap"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 0.36,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_3_0.png",
                       "width": 105,
                       "height": 105,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -86.56,
                    "yaw": 69.84
                   }
                  ],
                  "id": "overlay_288AC024_26DD_B4CB_4194_C04DD9F24F07",
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay"
                 },
                 {
                  "areas": [
                   {
                    "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "maps": [
                   {
                    "yaw": -175.56,
                    "hfov": 4.73,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_4_0_0_map.gif",
                       "width": 16,
                       "height": 16,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -37.04,
                    "class": "HotspotPanoramaOverlayMap"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 4.73,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_4_0.png",
                       "width": 105,
                       "height": 105,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -37.04,
                    "yaw": -175.56
                   }
                  ],
                  "id": "overlay_288AD024_26DD_B4CB_41B2_7D53521C9024",
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay"
                 },
                 {
                  "areas": [
                   {
                    "click": "this.setMediaBehaviour(this.playList_7E04B269_64BC_8A2A_41B3_E5968AC6AE2C, 0, this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "maps": [
                   {
                    "yaw": -139.96,
                    "hfov": 7.57,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_5_0_0_map.gif",
                       "width": 16,
                       "height": 16,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -75.19,
                    "class": "HotspotPanoramaOverlayMap"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.57,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_5_0.png",
                       "width": 529,
                       "height": 529,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -75.19,
                    "yaw": -139.96
                   }
                  ],
                  "id": "overlay_72FA37AD_62FA_F04B_41CF_68F93F66C6D1",
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay"
                 }
                ],
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_t.jpg"
               }
              ],
              "class": "Panorama"
             },
             "yaw": 76.9,
             "backwardYaw": -114.68,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "panorama": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
             "class": "AdjacentPanorama"
            },
            {
             "panorama": "this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1",
             "yaw": 36.44,
             "backwardYaw": -104.82,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "panorama": "this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A",
             "yaw": 128.57,
             "backwardYaw": 169.03,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "pitch": 0,
           "partial": false,
           "vfov": 180,
           "hfovMax": 130,
           "hfov": 360,
           "hfovMin": 100,
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_hq.jpeg",
                "width": 6434,
                "height": 3217,
                "class": "ImageResourceLevel",
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ]
               },
               {
                "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B.jpeg",
                "width": 4002,
                "height": 2001,
                "class": "ImageResourceLevel"
               }
              ]
             },
             "overlays": [
              {
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1, this.camera_7FE20345_64BC_8A5A_41A6_194D16C7A849); this.setMediaBehaviour(this.playList_7E35425F_64BC_8A66_41D1_8097051CDAED, 0, this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "yaw": 36.44,
                 "hfov": 5.86,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_0_0_0_map.gif",
                    "width": 16,
                    "height": 16,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": 8.45,
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.86,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_0_0.png",
                    "width": 105,
                    "height": 105,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": 8.45,
                 "yaw": 36.44
                }
               ],
               "id": "overlay_28CE5CD3_26DF_8D4D_41A4_3E84AE047921",
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay"
              },
              {
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765, this.camera_7FED832C_64BC_8A2A_41C5_F71029B355F4); this.setMediaBehaviour(this.playList_7E103287_64BC_8AE6_41B1_C1FBA62DF62E, 0, this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "yaw": 76.9,
                 "hfov": 5.85,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_1_0_0_map.gif",
                    "width": 16,
                    "height": 16,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": 8.85,
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.85,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_1_0.png",
                    "width": 105,
                    "height": 105,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": 8.85,
                 "yaw": 76.9
                }
               ],
               "id": "overlay_28CE7CD3_26DF_8D4D_41A7_B69B91B1E90E",
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay"
              },
              {
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A, this.camera_7FF88359_64BC_8A6A_41B5_6D87A5577828); this.setMediaBehaviour(this.playList_7E6C628C_64BC_8AEA_41BE_2C5A509C2039, 0, this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "yaw": 128.57,
                 "hfov": 5.84,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_2_0_0_map.gif",
                    "width": 16,
                    "height": 16,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": 9.2,
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.84,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_2_0.png",
                    "width": 105,
                    "height": 105,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": 9.2,
                 "yaw": 128.57
                }
               ],
               "id": "overlay_28CE8CD3_26DF_8D4D_4191_CF7076716C88",
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay"
              },
              {
               "areas": [
                {
                 "click": "this.setMediaBehaviour(this.playList_7E02A273_64BC_8A3E_418D_0FCC68F68CE1, 0, this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "yaw": 39.71,
                 "hfov": 5.16,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_3_0_0_map.gif",
                    "width": 16,
                    "height": 16,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -29.28,
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.16,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_3_0.png",
                    "width": 105,
                    "height": 105,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -29.28,
                 "yaw": 39.71
                }
               ],
               "id": "overlay_28CEACD3_26DF_8D4D_41AE_3F29041F26C6",
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay"
              },
              {
               "areas": [
                {
                 "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, true, 0, null, null, false)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "yaw": 10.63,
                 "hfov": 5.61,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_4_0_0_map.gif",
                    "width": 16,
                    "height": 16,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -18.62,
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.61,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_4_0.png",
                    "width": 105,
                    "height": 105,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -18.62,
                 "yaw": 10.63
                }
               ],
               "id": "overlay_28CECCD3_26DF_8D4D_41B3_A6D90373E63D",
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay"
              }
             ],
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_t.jpg"
            }
           ],
           "class": "Panorama"
          },
          "class": "AdjacentPanorama"
         },
         {
          "panorama": "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
          "yaw": 69.33,
          "backwardYaw": -155.58,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
          "yaw": -164.09,
          "backwardYaw": 6.44,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "pitch": 0,
        "partial": false,
        "vfov": 180,
        "hfovMax": 130,
        "hfov": 360,
        "hfovMin": 100,
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_hq.jpeg",
             "width": 6434,
             "height": 3217,
             "class": "ImageResourceLevel",
             "tags": [
              "oculusgo",
              "ipadpro"
             ]
            },
            {
             "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC.jpeg",
             "width": 4002,
             "height": 2001,
             "class": "ImageResourceLevel"
            }
           ]
          },
          "overlays": [
           {
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_7C53B53C_64BC_8E2A_41C2_96DB1AEC8F54); this.setMediaBehaviour(this.playList_7E062269_64BC_8A2A_41D3_887D0793443F, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "yaw": -164.09,
              "hfov": 5.91,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_0_0_0_map.gif",
                 "width": 16,
                 "height": 16,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -3.15,
              "class": "HotspotPanoramaOverlayMap"
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
                 "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_0_0.png",
                 "width": 105,
                 "height": 105,
                 "class": "ImageResourceLevel"
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
            "class": "HotspotPanoramaOverlay"
           },
           {
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E, this.camera_7C5EF51D_64BC_8FEA_41C1_99453DC93D5F); this.setMediaBehaviour(this.playList_7E02A273_64BC_8A3E_418D_0FCC68F68CE1, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "yaw": -5.23,
              "hfov": 5.89,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_1_0_0_map.gif",
                 "width": 16,
                 "height": 16,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -5.49,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
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
                 "height": 105,
                 "class": "ImageResourceLevel"
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
            "class": "HotspotPanoramaOverlay"
           },
           {
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_0B7B5A27_1FEB_7426_4195_945554348391, this.camera_7C58952F_64BC_8E26_41D4_1CABA568C40D); this.setMediaBehaviour(this.playList_7E01C278_64BC_8A2A_41B1_2891A216580D, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "yaw": 69.33,
              "hfov": 5.92,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_2_0_0_map.gif",
                 "width": 16,
                 "height": 16,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -2.4,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
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
                 "height": 105,
                 "class": "ImageResourceLevel"
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
            "class": "HotspotPanoramaOverlay"
           },
           {
            "areas": [
             {
              "click": "this.setMediaBehaviour(this.playList_7E1AA278_64BC_8A2A_41D6_31B54B5AA00F, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "yaw": -1.18,
              "hfov": 4.95,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_3_0_0_map.gif",
                 "width": 16,
                 "height": 16,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": 33.3,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
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
                 "height": 105,
                 "class": "ImageResourceLevel"
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
            "class": "HotspotPanoramaOverlay"
           }
          ],
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_t.jpg"
         }
        ],
        "class": "Panorama"
       },
       "yaw": -30.03,
       "backwardYaw": -5.23,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "panorama": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B",
       "class": "AdjacentPanorama"
      }
     ],
     "pitch": 0,
     "partial": false,
     "vfov": 180,
     "hfovMax": 130,
     "hfov": 360,
     "hfovMin": 100,
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_hq.jpeg",
          "width": 6434,
          "height": 3217,
          "class": "ImageResourceLevel",
          "tags": [
           "oculusgo",
           "ipadpro"
          ]
         },
         {
          "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E.jpeg",
          "width": 4002,
          "height": 2001,
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_7D721656_64BC_8A66_41C0_70AF779674BE); this.setMediaBehaviour(this.playList_7E16127D_64BC_8A2A_41D3_29DBC0915C3A, 0, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "yaw": -30.03,
           "hfov": 5.92,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_0_0_0_map.gif",
              "width": 16,
              "height": 16,
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -1.5,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
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
              "height": 105,
              "class": "ImageResourceLevel"
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
         "class": "HotspotPanoramaOverlay"
        },
        {
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9, this.camera_7D7E6648_64BC_8A6A_41C6_22783B846605); this.setMediaBehaviour(this.playList_7E015278_64BC_8A2A_41BF_67761E8AF2EA, 0, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "yaw": 139.43,
           "hfov": 5.91,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_1_0_0_map.gif",
              "width": 16,
              "height": 16,
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -2.97,
           "class": "HotspotPanoramaOverlayMap"
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
              "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_1_0.png",
              "width": 105,
              "height": 105,
              "class": "ImageResourceLevel"
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
         "class": "HotspotPanoramaOverlay"
        },
        {
         "areas": [
          {
           "click": "this.setMediaBehaviour(this.playList_7E1AA278_64BC_8A2A_41D6_31B54B5AA00F, 0, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "yaw": 146.16,
           "hfov": 6.12,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_2_0_0_map.gif",
              "width": 16,
              "height": 16,
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 65.57,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
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
              "height": 264,
              "class": "ImageResourceLevel"
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
         "class": "HotspotPanoramaOverlay"
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_t.jpg"
      }
     ],
     "mapLocations": [
      {
       "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
       "x": 293.95,
       "angle": 202.87,
       "y": 216.9,
       "class": "PanoramaMapLocation"
      }
     ],
     "class": "Panorama"
    },
    "yaw": 23.32,
    "backwardYaw": 139.43,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "panorama": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B",
    "class": "AdjacentPanorama"
   },
   {
    "panorama": "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
    "yaw": 107.65,
    "backwardYaw": -112.38,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "pitch": 0,
  "partial": false,
  "vfov": 180,
  "hfovMax": 130,
  "hfov": 360,
  "hfovMin": 100,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_hq.jpeg",
       "width": 6434,
       "height": 3217,
       "class": "ImageResourceLevel",
       "tags": [
        "oculusgo",
        "ipadpro"
       ]
      },
      {
       "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9.jpeg",
       "width": 4002,
       "height": 2001,
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E, this.camera_7FC3937F_64BC_8A26_41D2_3BCB2667D533); this.setMediaBehaviour(this.playList_7E02A273_64BC_8A3E_418D_0FCC68F68CE1, 0, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "yaw": 23.32,
        "hfov": 5.91,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_0_0_0_map.gif",
           "width": 16,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.78,
        "class": "HotspotPanoramaOverlayMap"
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
           "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_0_0.png",
           "width": 105,
           "height": 105,
           "class": "ImageResourceLevel"
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
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368, this.camera_7FD95395_64BC_8AFA_41C9_D509D2D09DDE); this.setMediaBehaviour(this.playList_7E031273_64BC_8A3E_41D4_271303DAAC76, 0, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "yaw": 107.65,
        "hfov": 5.92,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_1_0_0_map.gif",
           "width": 16,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.02,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
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
           "height": 105,
           "class": "ImageResourceLevel"
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
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.setMediaBehaviour(this.playList_7E1AA278_64BC_8A2A_41D6_31B54B5AA00F, 0, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "yaw": 102.37,
        "hfov": 1.81,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_2_0_0_map.gif",
           "width": 16,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 72.16,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
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
           "height": 105,
           "class": "ImageResourceLevel"
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
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_t.jpg"
   }
  ],
  "mapLocations": [
   {
    "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
    "x": 283,
    "angle": 176.01,
    "y": 141,
    "class": "PanoramaMapLocation"
   }
  ],
  "class": "Panorama"
 },
 "this.popup_36258FF0_249D_EFED_41AB_54067BE4CE8C",
 {
  "easing": "cubic_in_out",
  "id": "effect_7FA467B1_64BC_8A3A_41C1_3A419AAA5795",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7EB0F68F_64BC_8AE6_41D6_90CDC69EFA3F",
  "initialPosition": {
   "yaw": 22.39,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "levels": [
   {
    "url": "media/popup_3A3C822F_20F8_9425_41B2_B5F3B1085960_0_0.jpg",
    "width": 2000,
    "height": 1333,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_3A3C822F_20F8_9425_41B2_B5F3B1085960_0_1.jpg",
    "width": 1024,
    "height": 682,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_3A3C822F_20F8_9425_41B2_B5F3B1085960_0_2.jpg",
    "width": 512,
    "height": 341,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_0AAA2971_2068_943D_41B4_10DFF5B38D1B",
  "class": "ImageResource"
 },
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "media": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
    "player": {
     "movementMode": "constrained",
     "id": "MapViewerMapPlayer",
     "viewerArea": {
      "paddingBottom": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowOpacity": 0.7,
      "progressLeft": 0,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "id": "MapViewer",
      "playbackBarProgressOpacity": 1,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBarOpacity": 1,
      "borderSize": 0,
      "toolTipFontFamily": "Arial",
      "width": "99.417%",
      "toolTipShadowColor": "#333333",
      "toolTipFontStyle": "normal",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBorderSize": 0,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarBorderColor": "#FFFFFF",
      "playbackBarHeadBorderSize": 0,
      "minHeight": 1,
      "playbackBarHeight": 10,
      "progressBorderSize": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "displayTooltipInTouchScreens": true,
      "playbackBarHeadWidth": 6,
      "class": "ViewerArea",
      "toolTipShadowHorizontalLength": 0,
      "toolTipTextShadowOpacity": 0,
      "minWidth": 1,
      "propagateClick": false,
      "playbackBarLeft": 0,
      "paddingRight": 0,
      "height": "70.806%",
      "playbackBarBackgroundColorDirection": "vertical",
      "toolTipPaddingBottom": 4,
      "progressBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadHeight": 15,
      "transitionDuration": 500,
      "toolTipPaddingLeft": 6,
      "playbackBarRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarProgressBorderSize": 0,
      "toolTipFontColor": "#606060",
      "toolTipDisplayTime": 600,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBorderRadius": 0,
      "transitionMode": "blending",
      "progressBarBorderRadius": 0,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressRight": 0,
      "playbackBarHeadShadowColor": "#000000",
      "paddingLeft": 0,
      "shadow": false,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadOpacity": 1,
      "toolTipPaddingTop": 4,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarBorderRadius": 0,
      "progressOpacity": 1,
      "toolTipBorderSize": 1,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBorderColor": "#000000",
      "toolTipShadowSpread": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "paddingTop": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarBottom": 0,
      "playbackBarHeadBorderRadius": 0,
      "playbackBarHeadShadow": true,
      "toolTipTextShadowBlurRadius": 3,
      "progressBottom": 2,
      "progressBorderColor": "#000000",
      "progressHeight": 10,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarHeadBorderColor": "#000000",
      "toolTipFontSize": 12,
      "playbackBarOpacity": 1,
      "toolTipBorderRadius": 3,
      "toolTipOpacity": 1,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipShadowOpacity": 1,
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "data": {
       "name": "MapViewer"
      }
     },
     "class": "MapPlayer"
    },
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_7E75C2A0_64BC_8ADA_41D2_960DD9E1E86B",
  "class": "PlayList"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_7FBFF7BB_64BC_8A2E_41D8_F34E07AC22D4",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7E9756AE_64BC_8A26_41D8_9198A4955191",
  "initialPosition": {
   "yaw": 176.87,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_26077C68_37A3_6E75_41BD_CC48A65FF42C",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "levels": [
   {
    "url": "media/popup_34BBD83C_246A_F055_41C1_EBEF48C7F767_0_0.jpg",
    "width": 1500,
    "height": 937,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_34BBD83C_246A_F055_41C1_EBEF48C7F767_0_1.jpg",
    "width": 1024,
    "height": 639,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_34BBD83C_246A_F055_41C1_EBEF48C7F767_0_2.jpg",
    "width": 512,
    "height": 319,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_32CBA59C_24AE_9054_41C1_95FEFF54BD80",
  "class": "ImageResource"
 },
 "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7F2E43A9_64BC_8A2A_41CD_B1D14D4CA020",
  "initialPosition": {
   "yaw": 62.58,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_E3582213_ED68_454C_41D3_299F2B40CFF6",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_7FBD57C3_64BC_8A5E_41C5_8782D37B8CA8",
  "duration": 1000,
  "class": "FadeOutEffect"
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
  "id": "playList_7E7682A0_64BC_8ADA_41D5_5A83B407FC30",
  "class": "PlayList"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345E0D8F_20DF_6B94_41AE_F32FBDDF5924",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D3D660B_64BC_8DEE_41D6_36EB1BE942A2",
  "initialPosition": {
   "yaw": -158.82,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
 {
  "items": [
   {
    "media": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EDD8F_20DF_6B94_41BF_D2C5F914980C, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
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
      "class": "PanoramaCameraSequence"
     },
     "id": "panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_camera",
     "initialPosition": {
      "yaw": 0,
      "hfov": 110,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_7E4752B4_64BC_8A3A_41D1_77B530A4EC83, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345ECD8F_20DF_6B94_41AE_2D20B974323E, 'hideEffect', false)",
    "player": {
     "mouseControlMode": "drag_acceleration",
     "viewerArea": "this.MainViewer",
     "gyroscopeVerticalDraggingEnabled": true,
     "buttonCardboardView": {
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowBlurRadius": 3,
      "transparencyActive": false,
      "width": 75,
      "verticalAlign": "middle",
      "id": "IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667",
      "paddingLeft": 0,
      "borderSize": 0,
      "toolTipFontFamily": "Arial",
      "toolTipPaddingTop": 4,
      "shadow": false,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "minHeight": 1,
      "toolTipBorderSize": 1,
      "toolTipShadowColor": "#333333",
      "iconURL": "skin/IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667.png",
      "toolTipShadowSpread": 0,
      "paddingBottom": 0,
      "toolTipBorderColor": "#767676",
      "class": "IconButton",
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipTextShadowOpacity": 0,
      "mode": "push",
      "height": 50,
      "minWidth": 1,
      "propagateClick": false,
      "paddingRight": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "VR",
      "toolTipPaddingBottom": 4,
      "toolTipShadowVerticalLength": 0,
      "horizontalAlign": "center",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipFontSize": 12,
      "toolTipPaddingLeft": 6,
      "toolTipBorderRadius": 3,
      "toolTipShadowOpacity": 1,
      "data": {
       "name": "Button_VR"
      },
      "toolTipFontColor": "#606060",
      "backgroundOpacity": 0,
      "toolTipDisplayTime": 600,
      "toolTipPaddingRight": 6,
      "borderRadius": 0,
      "toolTipOpacity": 1,
      "cursor": "hand"
     },
     "id": "MainViewerPanoramaPlayer",
     "touchControlMode": "drag_rotation",
     "class": "PanoramaPlayer",
     "displayPlaybackBar": true
    },
    "id": "PanoramaPlayListItem_7E4752B4_64BC_8A3A_41D1_77B530A4EC83",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_7E33425F_64BC_8A66_41D1_9FF547E6DB9D",
  "class": "PlayList"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_7FA057BB_64BC_8A2E_41B5_77F676263715",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_7FBDA7BB_64BC_8A2E_41C5_4BE874C414AE",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 "this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7FA7D7AF_64BC_8A26_41A1_7C1096040318",
  "initialPosition": {
   "yaw": 88.15,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7C53B53C_64BC_8E2A_41C2_96DB1AEC8F54",
  "initialPosition": {
   "yaw": -173.56,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "items": [
   {
    "media": {
     "class": "Video",
     "label": "Rotonda_LQ_short_2",
     "scaleMode": "fit_inside",
     "width": 1280,
     "loop": false,
     "id": "video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB",
     "height": 720,
     "thumbnailUrl": "media/video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB_t.jpg",
     "video": {
      "width": 1280,
      "mp4Url": "media/video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB.mp4",
      "height": 720,
      "class": "VideoResource"
     }
    },
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7E7502A0_64BC_8ADA_4195_76981E961DB4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7E7502A0_64BC_8ADA_4195_76981E961DB4, 0)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "player": {
     "displayPlaybackBar": true,
     "id": "MainViewerVideoPlayer",
     "viewerArea": "this.MainViewer",
     "class": "VideoPlayer"
    },
    "class": "VideoPlayListItem"
   }
  ],
  "id": "playList_7E7502A0_64BC_8ADA_4195_76981E961DB4",
  "class": "PlayList"
 },
 "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
 {
  "easing": "cubic_in_out",
  "id": "effect_345EDD8F_20DF_6B94_41BF_D2C5F914980C",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345F5D99_20DF_6BBF_41BD_058622C73035",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_34590D8F_20DF_6B94_41BB_A45E78753DDE",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7C58952F_64BC_8E26_41D4_1CABA568C40D",
  "initialPosition": {
   "yaw": 24.42,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "levels": [
   {
    "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_0.jpg",
    "width": 1200,
    "height": 800,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_1.jpg",
    "width": 1024,
    "height": 682,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_2.jpg",
    "width": 512,
    "height": 341,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_D09DC170_DCEA_7378_41EB_423962A6DDEA",
  "class": "ImageResource"
 },
 "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
 "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
 {
  "easing": "cubic_in_out",
  "id": "effect_345F8D97_20DF_6BB3_41B5_1A0A5D57797F",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7E55F792_64BC_8AFE_41C7_1323249083D5",
  "initialPosition": {
   "yaw": -3.08,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
  "initialPosition": {
   "yaw": 0,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_7FBF77BB_64BC_8A2E_41C3_FC4A9D0ED384",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D6C163D_64BC_8A2A_417C_4AD890BBE755",
  "initialPosition": {
   "yaw": 101.73,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D721656_64BC_8A66_41C0_70AF779674BE",
  "initialPosition": {
   "yaw": 174.77,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
 {
  "easing": "cubic_in_out",
  "id": "effect_345E3D97_20DF_6BB3_41B7_C907450FD669",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345E5D8F_20DF_6B94_4193_ABB7E016F309",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 "this.popup_3BBE3C5B_107F_C340_4178_756995F5135C",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
  "initialPosition": {
   "yaw": 0,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1",
 {
  "easing": "cubic_in_out",
  "id": "effect_7FA597B1_64BC_8A3A_41A4_BF0CDB65598A",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
 {
  "items": [
   {
    "media": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD84_20DF_6B95_41B9_72E06ABF1981, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
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
      "class": "PanoramaCameraSequence"
     },
     "id": "panorama_160D346A_1A28_89C6_418E_CDA086A7E714_camera",
     "initialPosition": {
      "yaw": -21.7,
      "hfov": 110,
      "class": "PanoramaCameraPosition",
      "pitch": -5.28
     }
    },
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_7E75D2A5_64BC_8ADA_41D3_C2E3F57D4779, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E75D2A5_64BC_8ADA_41D3_C2E3F57D4779",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7FA617B1_64BC_8A3A_41BE_A59B06EE65A4, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_7FA5C7B1_64BC_8A3A_41CE_A453C1D03BE3, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_7FA597B1_64BC_8A3A_41A4_BF0CDB65598A, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
     "initialPosition": {
      "yaw": 0,
      "hfov": 110,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_7E7522A5_64BC_8ADA_41C1_9FE1C00C7777, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_EF6DE039_F622_38BD_41E2_3149DB234972, 'showEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E7522A5_64BC_8ADA_41C1_9FE1C00C7777",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
     "initialPosition": {
      "yaw": 0,
      "hfov": 110,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_7E7462A5_64BC_8ADA_41D1_C047C057EFD9, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E7462A5_64BC_8ADA_41D1_C047C057EFD9",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7FA4E7B1_64BC_8A3A_41B9_475C903BDA96, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_7E7382A5_64BC_8ADA_41B2_D8F950D30DFE, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E7382A5_64BC_8ADA_41B2_D8F950D30DFE",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7FA467B1_64BC_8A3A_41C1_3A419AAA5795, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
     "initialPosition": {
      "yaw": 0,
      "hfov": 110,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_7E7322AA_64BC_8A2E_41D7_F41934233551, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E7322AA_64BC_8A2E_41D7_F41934233551",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7FA397B1_64BC_8A3A_41C6_4AE12AB86B10, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
     "initialPosition": {
      "yaw": 0,
      "hfov": 110,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_7E72B2AA_64BC_8A2E_41D3_096253027FFE, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E72B2AA_64BC_8A2E_41D3_096253027FFE",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7FA317B1_64BC_8A3A_41D7_D0B93DE69A00, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_7E71E2AA_64BC_8A2E_41B8_EDD535113596, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E71E2AA_64BC_8A2E_41B8_EDD535113596",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera",
     "initialPosition": {
      "yaw": 8.17,
      "hfov": 110,
      "class": "PanoramaCameraPosition",
      "pitch": -2.94
     }
    },
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_7E7102AA_64BC_8A2E_41D8_422306A31DC2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E7102AA_64BC_8A2E_41D8_422306A31DC2",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7FA207B9_64BC_8A2A_41C5_B7FF8EB26C45, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera",
     "initialPosition": {
      "yaw": 0,
      "hfov": 110,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_7E70F2AA_64BC_8A2E_41C1_5076892FC516, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E70F2AA_64BC_8A2E_41C1_5076892FC516",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0B500FD7_1A54_37AE_41A9_19AE8C776076, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_7FA187B9_64BC_8A2A_41C0_8C52298A9AE0, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7FA1B7B9_64BC_8A2A_41D5_4C1231E8CCBB, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')){ if(this.getKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')) { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true, -1, this.effect_7FA117B9_64BC_8A2A_41CC_6FB8588AE8CE, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_2606DC67_37A3_6E7A_417B_82BAC7B62691, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197'); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_EF6C1355_F62E_F8F5_41C5_B9A5C5CCED3E, 'hideEffect', false); if(this.existsKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')){ if(this.getKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')) { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_7FA0F7BB_64BC_8A2E_41BA_50D24F689ABA, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_26077C68_37A3_6E75_41BD_CC48A65FF42C, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E'); if(this.existsKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')){ if(this.getKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')) { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_7FA0B7BB_64BC_8A2E_41A9_E05545EFCECD, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')",
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_E6145D91_EF14_5D6A_41D9_45623053016B_camera",
     "initialPosition": {
      "yaw": 53.23,
      "hfov": 110,
      "class": "PanoramaCameraPosition",
      "pitch": 1.41
     }
    },
    "begin": "this.registerKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515', this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515.get('visible')); this.registerKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E', this.Label_E216BE12_F622_684F_41EC_C2D2817E217E.get('visible')); this.registerKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197', this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_7E7012AA_64BC_8A2E_41CA_2F70AFF03441, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0B500FD7_1A54_37AE_41A9_19AE8C776076, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_2606DC67_37A3_6E7A_417B_82BAC7B62691, 'hideEffect', false); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true, -1, this.effect_EF6CE355_F62E_F8F5_41E6_CBD8B4202E02, 'showEffect', false); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false); this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_26077C68_37A3_6E75_41BD_CC48A65FF42C, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E7012AA_64BC_8A2E_41CA_2F70AFF03441",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7FA037BB_64BC_8A2E_41CC_E8558B9B3B19, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_camera",
     "initialPosition": {
      "yaw": 0,
      "hfov": 105,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_7E4F42AA_64BC_8A2E_41D4_2177727B237C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E4F42AA_64BC_8A2E_41D4_2177727B237C",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7FBF47BB_64BC_8A2E_41D0_550A4ADE1BB3, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_camera",
     "initialPosition": {
      "yaw": 0,
      "hfov": 105,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_7E4EF2AA_64BC_8A2E_41D3_46D7E32A19B7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E4EF2AA_64BC_8A2E_41D3_46D7E32A19B7",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7FA057BB_64BC_8A2E_41B5_77F676263715, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_camera",
     "initialPosition": {
      "yaw": 0,
      "hfov": 110,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_7E4E22AA_64BC_8A2E_419E_5B68F0030066, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E4E22AA_64BC_8A2E_419E_5B68F0030066",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7FBFF7BB_64BC_8A2E_41D8_F34E07AC22D4, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_camera",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_7E4DA2AA_64BC_8A2E_41D5_B677A9E2297A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E4DA2AA_64BC_8A2E_41D5_B677A9E2297A",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7FBF77BB_64BC_8A2E_41C3_FC4A9D0ED384, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_camera",
     "initialPosition": {
      "yaw": 0,
      "hfov": 110,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_7E4CD2AA_64BC_8A2E_41AC_BF744F58704D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E4CD2AA_64BC_8A2E_41AC_BF744F58704D",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_camera",
     "initialPosition": {
      "yaw": 0,
      "hfov": 110,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_7E4C52AA_64BC_8A2E_41C6_FE8771562D3C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E4C52AA_64BC_8A2E_41C6_FE8771562D3C",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
    "end": "this.trigger('tourEnded')",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_camera",
     "initialPosition": {
      "yaw": 0,
      "hfov": 110,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_7E4BF2AA_64BC_8A2E_41D1_FFA2E26A77F5, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E4BF2AA_64BC_8A2E_41D1_FFA2E26A77F5",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7EBEB685_64BC_8ADA_41CA_AA812E80437D",
  "initialPosition": {
   "yaw": -51.43,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "items": [
   {
    "media": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34590D8F_20DF_6B94_41BB_A45E78753DDE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_camera",
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34597D8F_20DF_6B94_41AA_44DC8A057CBB, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_7E36025F_64BC_8A66_41B6_222EEA525106",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_camera"
   }
  ],
  "id": "playList_7E6D428C_64BC_8AEA_415B_2FCA8937AA64",
  "class": "PlayList"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345EAD8F_20DF_6B94_41A5_6F5908EFA5C8",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_camera",
  "initialPosition": {
   "yaw": 0,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_camera",
  "initialPosition": {
   "yaw": 0,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "levels": [
   {
    "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_0.jpg",
    "width": 1053,
    "height": 800,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_1.jpg",
    "width": 1024,
    "height": 777,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_2.jpg",
    "width": 512,
    "height": 388,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_D38C2C6E_DFA1_73F8_41C3_8C1C155D72CB",
  "class": "ImageResource"
 },
 {
  "levels": [
   {
    "url": "media/popup_36E9C513_249E_702C_41C0_2CA0C18AAE54_0_0.jpg",
    "width": 1500,
    "height": 1000,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_36E9C513_249E_702C_41C0_2CA0C18AAE54_0_1.jpg",
    "width": 1024,
    "height": 682,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_36E9C513_249E_702C_41C0_2CA0C18AAE54_0_2.jpg",
    "width": 512,
    "height": 341,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_32BB558C_24AE_9034_41A0_905F3B8026D3",
  "class": "ImageResource"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7E6E972D_64BC_8A2A_41B3_85D71374F7F5",
  "initialPosition": {
   "yaw": -110.67,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A",
 {
  "easing": "cubic_in_out",
  "id": "effect_E359B21B_ED68_4573_41E3_2134D2902989",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "items": [
   {
    "media": "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E4D8F_20DF_6B94_41B8_3FE607FF9006, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_camera",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_7E4582B4_64BC_8A3A_41C1_F99CC3DA5382, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EBD8F_20DF_6B94_41A4_072F6F80B3A4, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E4582B4_64BC_8A3A_41C1_F99CC3DA5382",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_7E04B269_64BC_8A2A_41B3_E5968AC6AE2C",
  "class": "PlayList"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7F6463FC_64BC_8A2A_41BC_28FAB8A4930E",
  "initialPosition": {
   "yaw": -100.57,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
 {
  "easing": "cubic_in_out",
  "id": "effect_345F7D8F_20DF_6B94_41B8_4073C3801F63",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345E4D8F_20DF_6B94_41B8_3FE607FF9006",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7DFB55C1_64BC_8E5A_41C1_9772FA8C7A91",
  "initialPosition": {
   "yaw": 62.7,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345CCD8F_20DF_6B94_41BC_F061530E83AF",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345EFD8F_20DF_6B94_41B7_4853257F85EE",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_788B0449_64BC_8E6A_41AA_CBAF692FEC49",
  "initialPosition": {
   "yaw": -25.69,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "items": [
   {
    "media": "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345FCD97_20DF_6BB3_41B7_5533F0603364, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_camera",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_7E44F2B4_64BC_8A3A_41D5_EF5449C5177B, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E3D97_20DF_6BB3_41B7_C907450FD669, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E44F2B4_64BC_8A3A_41D5_EF5449C5177B",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_7E015278_64BC_8A2A_41BF_67761E8AF2EA",
  "class": "PlayList"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7F1E83E7_64BC_8A26_41C0_9A847384A382",
  "initialPosition": {
   "yaw": -5.43,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345E8D8F_20DF_6B94_419E_3AE578883B9D",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_camera",
  "initialPosition": {
   "yaw": 0,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7F59B423_64BC_8DDE_41C5_4F2E4A1A2E91",
  "initialPosition": {
   "yaw": 103.75,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_345CDD8F_20DF_6B94_41B6_C00B98F530E1",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
 {
  "initialZoomFactor": 1,
  "thumbnailUrl": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_t.png",
  "label": "Centro Corporativo",
  "id": "map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "width": 300,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17.png",
     "width": 300,
     "height": 209,
     "class": "ImageResourceLevel"
    }
   ]
  },
  "fieldOfViewOverlayInsideColor": "#FFFFFF",
  "maximumZoomFactor": 1.2,
  "fieldOfViewOverlayRadiusScale": 0.19,
  "scaleMode": "fit_inside",
  "overlays": [
   {
    "map": {
     "width": 20,
     "x": 16.55,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_0_map.gif",
        "width": 9,
        "height": 9,
        "class": "ImageResourceLevel"
       }
      ]
     },
     "offsetX": 0,
     "y": 149.55,
     "offsetY": 0,
     "height": 20,
     "class": "HotspotMapOverlayMap"
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000"
     }
    ],
    "image": {
     "x": 16.55,
     "height": 20,
     "y": 149.55,
     "class": "HotspotMapOverlayImage",
     "width": 20,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_0.png",
        "width": 19,
        "height": 19,
        "class": "ImageResourceLevel"
       }
      ]
     }
    },
    "rollOverDisplay": true,
    "useHandCursor": true,
    "id": "overlay_FCFECF03_DD1A_A3DC_41C3_A9E15DF295E9",
    "data": {
     "label": "Image"
    },
    "class": "AreaHotspotMapOverlay"
   },
   {
    "map": {
     "width": 20,
     "x": 83.5,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_1_map.gif",
        "width": 9,
        "height": 9,
        "class": "ImageResourceLevel"
       }
      ]
     },
     "offsetX": 0,
     "y": 151.55,
     "offsetY": 0,
     "height": 20,
     "class": "HotspotMapOverlayMap"
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000"
     }
    ],
    "image": {
     "x": 83.5,
     "height": 20,
     "y": 151.55,
     "class": "HotspotMapOverlayImage",
     "width": 20,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_1.png",
        "width": 19,
        "height": 19,
        "class": "ImageResourceLevel"
       }
      ]
     }
    },
    "rollOverDisplay": true,
    "useHandCursor": true,
    "id": "overlay_FFCF2D2D_DD19_A627_41B8_CFCAE1C65CD2",
    "data": {
     "label": "Image"
    },
    "class": "AreaHotspotMapOverlay"
   },
   {
    "map": {
     "width": 20,
     "x": 24.05,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_2_map.gif",
        "width": 9,
        "height": 9,
        "class": "ImageResourceLevel"
       }
      ]
     },
     "offsetX": 0,
     "y": 6.6,
     "offsetY": 0,
     "height": 20,
     "class": "HotspotMapOverlayMap"
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000"
     }
    ],
    "image": {
     "x": 24.05,
     "height": 20,
     "y": 6.6,
     "class": "HotspotMapOverlayImage",
     "width": 20,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_2.png",
        "width": 19,
        "height": 19,
        "class": "ImageResourceLevel"
       }
      ]
     }
    },
    "rollOverDisplay": true,
    "useHandCursor": true,
    "id": "overlay_FEA879B1_DD16_6E3C_41E7_2FF39A318D51",
    "data": {
     "label": "Image"
    },
    "class": "AreaHotspotMapOverlay"
   },
   {
    "map": {
     "width": 20,
     "x": 138,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_3_map.gif",
        "width": 9,
        "height": 9,
        "class": "ImageResourceLevel"
       }
      ]
     },
     "offsetX": 0,
     "y": 5.6,
     "offsetY": 0,
     "height": 20,
     "class": "HotspotMapOverlayMap"
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000"
     }
    ],
    "image": {
     "x": 138,
     "height": 20,
     "y": 5.6,
     "class": "HotspotMapOverlayImage",
     "width": 20,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_3.png",
        "width": 19,
        "height": 19,
        "class": "ImageResourceLevel"
       }
      ]
     }
    },
    "rollOverDisplay": true,
    "useHandCursor": true,
    "id": "overlay_FF9139DD_DD16_AE64_41E7_9B2CF203BB6B",
    "data": {
     "label": "Image"
    },
    "class": "AreaHotspotMapOverlay"
   },
   {
    "map": {
     "width": 20,
     "x": 141.5,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_4_map.gif",
        "width": 9,
        "height": 9,
        "class": "ImageResourceLevel"
       }
      ]
     },
     "offsetX": 0,
     "y": 96.5,
     "offsetY": 0,
     "height": 20,
     "class": "HotspotMapOverlayMap"
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000"
     }
    ],
    "image": {
     "x": 141.5,
     "height": 20,
     "y": 96.5,
     "class": "HotspotMapOverlayImage",
     "width": 20,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_4.png",
        "width": 19,
        "height": 19,
        "class": "ImageResourceLevel"
       }
      ]
     }
    },
    "rollOverDisplay": true,
    "useHandCursor": true,
    "id": "overlay_FEFCC206_DD17_9DE5_41C8_3ECC72F63227",
    "data": {
     "label": "Image"
    },
    "class": "AreaHotspotMapOverlay"
   },
   {
    "map": {
     "width": 20,
     "x": 271,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_5_map.gif",
        "width": 9,
        "height": 9,
        "class": "ImageResourceLevel"
       }
      ]
     },
     "offsetX": 0,
     "y": 12.6,
     "offsetY": 0,
     "height": 20,
     "class": "HotspotMapOverlayMap"
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000"
     }
    ],
    "image": {
     "x": 271,
     "height": 20,
     "y": 12.6,
     "class": "HotspotMapOverlayImage",
     "width": 20,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_5.png",
        "width": 19,
        "height": 19,
        "class": "ImageResourceLevel"
       }
      ]
     }
    },
    "rollOverDisplay": true,
    "useHandCursor": true,
    "id": "overlay_FF91DE69_DD17_A22C_41DE_D1342F576EA9",
    "data": {
     "label": "Image"
    },
    "class": "AreaHotspotMapOverlay"
   },
   {
    "map": {
     "width": 20,
     "x": 206.1,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_6_map.gif",
        "width": 9,
        "height": 9,
        "class": "ImageResourceLevel"
       }
      ]
     },
     "offsetX": 0,
     "y": 162,
     "offsetY": 0,
     "height": 20,
     "class": "HotspotMapOverlayMap"
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000"
     }
    ],
    "image": {
     "x": 206.1,
     "height": 20,
     "y": 162,
     "class": "HotspotMapOverlayImage",
     "width": 20,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_6.png",
        "width": 19,
        "height": 19,
        "class": "ImageResourceLevel"
       }
      ]
     }
    },
    "rollOverDisplay": true,
    "useHandCursor": true,
    "id": "overlay_FFB50497_DD16_A6E4_41E4_5BEA266BE86F",
    "data": {
     "label": "Image"
    },
    "class": "AreaHotspotMapOverlay"
   },
   {
    "map": {
     "width": 20,
     "x": 141.5,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_7_map.gif",
        "width": 9,
        "height": 9,
        "class": "ImageResourceLevel"
       }
      ]
     },
     "offsetX": 0,
     "y": 81.55,
     "offsetY": 0,
     "height": 20,
     "class": "HotspotMapOverlayMap"
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000"
     }
    ],
    "image": {
     "x": 141.5,
     "height": 20,
     "y": 81.55,
     "class": "HotspotMapOverlayImage",
     "width": 20,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_7.png",
        "width": 19,
        "height": 19,
        "class": "ImageResourceLevel"
       }
      ]
     }
    },
    "rollOverDisplay": true,
    "useHandCursor": true,
    "id": "overlay_FE5AF794_DD09_A2E4_41D0_61777F7E15D3",
    "data": {
     "label": "Image"
    },
    "class": "AreaHotspotMapOverlay"
   },
   {
    "map": {
     "width": 20.27,
     "x": 37.65,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_8_map.gif",
        "width": 10,
        "height": 10,
        "class": "ImageResourceLevel"
       }
      ]
     },
     "offsetX": 0,
     "y": 72.45,
     "offsetY": 0,
     "height": 20.27,
     "class": "HotspotMapOverlayMap"
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000"
     }
    ],
    "image": {
     "x": 37.65,
     "height": 20.27,
     "y": 72.45,
     "class": "HotspotMapOverlayImage",
     "width": 20.27,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_8.png",
        "width": 20,
        "height": 20,
        "class": "ImageResourceLevel"
       }
      ]
     }
    },
    "rollOverDisplay": true,
    "useHandCursor": true,
    "id": "overlay_01B54DAD_1A41_CF78_41A6_909B29F94B5F",
    "data": {
     "label": "Image"
    },
    "class": "AreaHotspotMapOverlay"
   }
  ],
  "minimumZoomFactor": 0.5,
  "height": 209,
  "class": "Map"
 },
 "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B_camera",
 {
  "easing": "linear",
  "id": "effect_D3728F7A_DF8C_960C_417C_830810DD2653",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_camera",
  "initialPosition": {
   "yaw": -160.79,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": -16.48
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345CFD97_20DF_6BB4_41BB_97095DF13BBA",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 "this.popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7",
 "this.popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_78E0146E_64BC_8E26_41CE_1ED4F43D5972",
  "initialPosition": {
   "yaw": -46.66,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.popup_3A3C822F_20F8_9425_41B2_B5F3B1085960",
 "this.popup_3AF279F7_20F8_9425_41B8_727B1C05B69A",
 {
  "levels": [
   {
    "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_0.jpg",
    "width": 1200,
    "height": 800,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_1.jpg",
    "width": 1024,
    "height": 682,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_2.jpg",
    "width": 512,
    "height": 341,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_D09C8172_DCEA_737B_41C7_76727B821C90",
  "class": "ImageResource"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_34593D8F_20DF_6B94_41B9_C6D005829662",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 "this.popup_34BBD83C_246A_F055_41C1_EBEF48C7F767",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7E8406A1_64BC_8ADD_41C5_305566DEC73D",
  "initialPosition": {
   "yaw": -92.67,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7C4EA4FE_64BC_8E26_41C4_687D925F0C27",
  "initialPosition": {
   "yaw": 22.27,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7E720769_64BC_8A2A_41BD_2A2935F9ED91",
  "initialPosition": {
   "yaw": -138.7,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "levels": [
   {
    "url": "media/popup_3AF279F7_20F8_9425_41B8_727B1C05B69A_0_0.jpg",
    "width": 2000,
    "height": 1333,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_3AF279F7_20F8_9425_41B8_727B1C05B69A_0_1.jpg",
    "width": 1024,
    "height": 682,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_3AF279F7_20F8_9425_41B8_727B1C05B69A_0_2.jpg",
    "width": 512,
    "height": 341,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_095FC95D_2068_946A_41A5_88BA52F0CF59",
  "class": "ImageResource"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345F5D8F_20DF_6B94_41B1_D214F66E6293",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_7FA187B9_64BC_8A2A_41C0_8C52298A9AE0",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_0B500FD7_1A54_37AE_41A9_19AE8C776076",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345F0D8F_20DF_6B94_419D_ABD4CFF44CF3",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345C8D97_20DF_6BB3_41AB_11DFCCAD81C0",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_E3587215_ED68_4577_4183_716A0D8E6DA7",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7D455665_64BC_8A5A_41D0_1BA0CB8662A7",
  "initialPosition": {
   "yaw": 3.59,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_345FBD97_20DF_6BB3_41A7_CB088826B439",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345F4D97_20DF_6BB3_41BF_89E603E3F0DA",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345EED8F_20DF_6B94_417E_826782EEF8F0",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7D83E58D_64BC_8EEA_41D4_35B41C404EA9",
  "initialPosition": {
   "yaw": 163.89,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_2606DC67_37A3_6E7A_417B_82BAC7B62691",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "items": [
   {
    "media": "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EFD8F_20DF_6B94_41B7_4853257F85EE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
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
      "class": "PanoramaCameraSequence"
     },
     "id": "panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_camera",
     "initialPosition": {
      "yaw": 0,
      "hfov": 110,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     }
    },
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EED8F_20DF_6B94_417E_826782EEF8F0, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_7E19627D_64BC_8A2A_41D6_CF77ACE58867",
  "class": "PlayList"
 },
 "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
 "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_camera",
  "initialPosition": {
   "yaw": 0,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_78EEA462_64BC_8E5E_41A0_9D6E891768F0",
  "initialPosition": {
   "yaw": 33.73,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
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
  "id": "playList_7E7642A0_64BC_8ADA_41C8_28952F0A3A54",
  "class": "PlayList"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_camera",
  "initialPosition": {
   "yaw": -102.2,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": -43.45
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_7FA117B9_64BC_8A2A_41CC_6FB8588AE8CE",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 "this.popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0",
 {
  "easing": "cubic_in_out",
  "id": "effect_E3586214_ED68_4574_41E5_D2720D677B2E",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_camera",
  "initialPosition": {
   "yaw": 0,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "levels": [
   {
    "url": "media/popup_36258FF0_249D_EFED_41AB_54067BE4CE8C_0_0.jpg",
    "width": 1500,
    "height": 1000,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_36258FF0_249D_EFED_41AB_54067BE4CE8C_0_1.jpg",
    "width": 1024,
    "height": 682,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_36258FF0_249D_EFED_41AB_54067BE4CE8C_0_2.jpg",
    "width": 512,
    "height": 341,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_32C8659C_24AE_9054_4187_C8E2724888E0",
  "class": "ImageResource"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345CED8F_20DF_6B94_41B4_61907719F453",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7EFE16C2_64BC_8A5E_41D7_A3CE7767489C",
  "initialPosition": {
   "yaw": -152.92,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7C7444F1_64BC_8E3A_41C2_EFFC37AA269A",
  "initialPosition": {
   "yaw": 5.5,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7E617752_64BC_8A7E_41D2_2469E51779B4",
  "initialPosition": {
   "yaw": -113.92,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_camera",
  "initialPosition": {
   "yaw": 0,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_E359A214_ED68_4575_41DB_B895523643F9",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7C493508_64BC_8FEA_41C7_DC37B1CDEBD6",
  "initialPosition": {
   "yaw": -123.57,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "levels": [
   {
    "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_0.jpg",
    "width": 1200,
    "height": 800,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_1.jpg",
    "width": 1024,
    "height": 682,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_2.jpg",
    "width": 512,
    "height": 341,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_D082516E_DCEA_7368_41CB_9D0CFA830713",
  "class": "ImageResource"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_78A92430_64BC_8E3A_41C4_B759D8C8FEB8",
  "initialPosition": {
   "yaw": -129.9,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.Menu_7E5DD2BB_64BC_8A2E_41CC_93B6A583CFF8",
 {
  "easing": "cubic_in_out",
  "id": "effect_7FA617B1_64BC_8A3A_41BE_A59B06EE65A4",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_camera"
   }
  ],
  "id": "playList_7E6C628C_64BC_8AEA_41BE_2C5A509C2039",
  "class": "PlayList"
 },
 {
  "levels": [
   {
    "url": "media/popup_36539A9C_24AE_9054_41AC_911079BB2A7C_0_0.jpg",
    "width": 1500,
    "height": 1000,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_36539A9C_24AE_9054_41AC_911079BB2A7C_0_1.jpg",
    "width": 1024,
    "height": 682,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_36539A9C_24AE_9054_41AC_911079BB2A7C_0_2.jpg",
    "width": 512,
    "height": 341,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_32C8A59C_24AE_9054_41B0_230945BD42EC",
  "class": "ImageResource"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7E27F6FB_64BC_8A2E_41D0_44E3240503B0",
  "initialPosition": {
   "yaw": -143.56,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_camera",
 "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera",
 "this.popup_3509F7CC_246E_7035_41AB_BB188EF81D62",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "media": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_7E75B2A0_64BC_8ADA_41D6_1D14D140A84F",
  "class": "PlayList"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_camera",
  "initialPosition": {
   "yaw": -143.47,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": -37.77
  }
 },
 {
  "items": [
   {
    "media": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CED8F_20DF_6B94_41B4_61907719F453, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_camera",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_7E4662B4_64BC_8A3A_41D5_BB4F8DE97C4D, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CDD8F_20DF_6B94_41B6_C00B98F530E1, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E4662B4_64BC_8A3A_41D5_BB4F8DE97C4D",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_7E052269_64BC_8A2A_41CE_90BE4563B181",
  "class": "PlayList"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_7FBCA7C3_64BC_8A5E_4192_A0C741968C53",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
 "this.popup_369EF53B_249A_B05C_41BC_AE1E970C16EA",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D7E6648_64BC_8A6A_41C6_22783B846605",
  "initialPosition": {
   "yaw": -156.68,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.MainViewerPanoramaPlayer",
 "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
 "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_78BAF43A_64BC_8E2E_41D3_0641B3C5F5AA",
  "initialPosition": {
   "yaw": -103.1,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_7FA0B7BB_64BC_8A2E_41A9_E05545EFCECD",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera",
 "this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_camera",
  "initialPosition": {
   "yaw": 0,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_7FA317B1_64BC_8A3A_41D7_D0B93DE69A00",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_camera",
  "initialPosition": {
   "yaw": 0,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.popup_3A305B90_20FB_94FB_4193_FEB3450979FC",
 {
  "items": [
   {
    "media": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E0D8F_20DF_6B94_41AE_F32FBDDF5924, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
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
      "class": "PanoramaCameraSequence"
     },
     "id": "panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_camera",
     "initialPosition": {
      "yaw": -132.07,
      "hfov": 110,
      "class": "PanoramaCameraPosition",
      "pitch": -40.96
     }
    },
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E7D8F_20DF_6B94_41B1_383A596C4C67, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_7E1AA278_64BC_8A2A_41D6_31B54B5AA00F",
  "class": "PlayList"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_7FA4E7B1_64BC_8A3A_41B9_475C903BDA96",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "items": [
   {
    "media": "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345FBD97_20DF_6BB3_41A7_CB088826B439, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_camera",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_7E4562B4_64BC_8A3A_41D4_900B92374D0A, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F8D97_20DF_6BB3_41B5_1A0A5D57797F, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E4562B4_64BC_8A3A_41D4_900B92374D0A",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_7E03E273_64BC_8A3E_41CD_9F708FB1A65E",
  "class": "PlayList"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7DDB65E3_64BC_8E5E_41CA_9D43570868CA",
  "initialPosition": {
   "yaw": 3.45,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "items": [
   {
    "media": "this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345C8D97_20DF_6BB3_41AB_11DFCCAD81C0, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_camera",
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CFD97_20DF_6BB4_41BB_97095DF13BBA, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_7E103287_64BC_8AE6_41B1_C1FBA62DF62E",
  "class": "PlayList"
 },
 "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_EF6C1355_F62E_F8F5_41C5_B9A5C5CCED3E",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "levels": [
   {
    "url": "media/popup_3509F7CC_246E_7035_41AB_BB188EF81D62_0_0.jpg",
    "width": 1500,
    "height": 1000,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_3509F7CC_246E_7035_41AB_BB188EF81D62_0_1.jpg",
    "width": 1024,
    "height": 682,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_3509F7CC_246E_7035_41AB_BB188EF81D62_0_2.jpg",
    "width": 512,
    "height": 341,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_3294856D_24AE_90F4_418D_8D9776AE9FF3",
  "class": "ImageResource"
 },
 "this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
 {
  "easing": "cubic_in_out",
  "id": "effect_EF6CE355_F62E_F8F5_41E6_CBD8B4202E02",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7FED832C_64BC_8A2A_41C5_F71029B355F4",
  "initialPosition": {
   "yaw": 65.32,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7DA0355A_64BC_8E6E_41C6_1E78C2EF24A1",
  "initialPosition": {
   "yaw": -3.1,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
 {
  "easing": "cubic_in_out",
  "id": "effect_E35A021A_ED68_457D_41DB_F92702D0649E",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7F0B53DB_64BC_8A6E_41CD_2BEF0E5A5ADA",
  "initialPosition": {
   "yaw": -29.95,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B",
 {
  "easing": "cubic_in_out",
  "id": "effect_345EBD8F_20DF_6B94_41A4_072F6F80B3A4",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345ECD8F_20DF_6B94_41AE_2D20B974323E",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "items": [
   {
    "media": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CCD8F_20DF_6B94_41BC_F061530E83AF, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_camera",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_7E4412B4_64BC_8A3A_41D2_60036B52A1F1, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F2D8F_20DF_6B94_4160_462A4AF9B97A, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E4412B4_64BC_8A3A_41D2_60036B52A1F1",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_7E02A273_64BC_8A3E_418D_0FCC68F68CE1",
  "class": "PlayList"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_F083FF13_E49C_8716_41EC_3E7D67287F82",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "id": "effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42",
  "duration": 1000,
  "class": "FadeInEffect"
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
  "id": "playList_7E76D2A0_64BC_8ADA_41D8_58623C799317",
  "class": "PlayList"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_7FBB57C6_64BC_8A66_41D1_9CB24B8BCDEF",
  "duration": 1000,
  "class": "FadeInEffect"
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
  "id": "playList_7E7562A0_64BC_8ADA_41CF_D456AC01B44A",
  "class": "PlayList"
 },
 "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
 {
  "easing": "cubic_in_out",
  "id": "effect_7FA207B9_64BC_8A2A_41C5_B7FF8EB26C45",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 "this.MapViewerMapPlayer",
 {
  "easing": "cubic_in_out",
  "id": "effect_345F2D8F_20DF_6B94_4160_462A4AF9B97A",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 "this.popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43",
 {
  "levels": [
   {
    "url": "media/popup_25AB8A34_3513_DE40_41C8_119007832823_0_0.jpg",
    "width": 1600,
    "height": 896,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_25AB8A34_3513_DE40_41C8_119007832823_0_1.jpg",
    "width": 1024,
    "height": 573,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_25AB8A34_3513_DE40_41C8_119007832823_0_2.jpg",
    "width": 512,
    "height": 286,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_232B696E_352D_BAC0_41B1_E8DFF9648419",
  "class": "ImageResource"
 },
 "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_camera",
 "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
 {
  "easing": "cubic_in_out",
  "id": "effect_7FBF47BB_64BC_8A2E_41D0_550A4ADE1BB3",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "items": [
   {
    "media": "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F5D99_20DF_6BBF_41BD_058622C73035, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_camera",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_7E44E2B4_64BC_8A3A_41A9_E4899FA5BD33, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F4D97_20DF_6BB3_41BF_89E603E3F0DA, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E44E2B4_64BC_8A3A_41A9_E4899FA5BD33",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_7E031273_64BC_8A3E_41D4_271303DAAC76",
  "class": "PlayList"
 },
 {
  "levels": [
   {
    "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_0.jpg",
    "width": 2000,
    "height": 1236,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_1.jpg",
    "width": 1024,
    "height": 632,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_2.jpg",
    "width": 512,
    "height": 316,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_E253E6BD_EF1D_EC9A_41EA_C503E65D3053",
  "class": "ImageResource"
 },
 "this.popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_0B7B5A27_1FEB_7426_4195_945554348391_camera",
  "initialPosition": {
   "yaw": 0,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7FF88359_64BC_8A6A_41B5_6D87A5577828",
  "initialPosition": {
   "yaw": -10.97,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "levels": [
   {
    "url": "media/popup_3638CA38_249B_905C_41B3_EA26EB9333F0_0_0.jpg",
    "width": 1500,
    "height": 851,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_3638CA38_249B_905C_41B3_EA26EB9333F0_0_1.jpg",
    "width": 1024,
    "height": 580,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_3638CA38_249B_905C_41B3_EA26EB9333F0_0_2.jpg",
    "width": 512,
    "height": 290,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_32CC759C_24AE_9054_419F_511B2D533327",
  "class": "ImageResource"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_camera",
  "initialPosition": {
   "yaw": 0,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7F479419_64BC_8DEA_41BF_F44A0931475A",
  "initialPosition": {
   "yaw": -140.57,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7FCEE36D_64BC_8A2A_41D3_A8CD733D27A3",
  "initialPosition": {
   "yaw": 13.32,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7EEAD6B8_64BC_8A2B_41A3_262F4AC09343",
  "initialPosition": {
   "yaw": -83.53,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E",
 {
  "levels": [
   {
    "url": "media/popup_369EF53B_249A_B05C_41BC_AE1E970C16EA_0_0.jpg",
    "width": 1500,
    "height": 1000,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_369EF53B_249A_B05C_41BC_AE1E970C16EA_0_1.jpg",
    "width": 1024,
    "height": 682,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_369EF53B_249A_B05C_41BC_AE1E970C16EA_0_2.jpg",
    "width": 512,
    "height": 341,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_32CD359C_24AE_9054_41BC_CF812CF11760",
  "class": "ImageResource"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7F3693CC_64BC_8A6A_41D2_80597DF4607E",
  "initialPosition": {
   "yaw": 160.67,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7DE535B5_64BC_8E3A_41B2_8CA50394CFDB",
  "initialPosition": {
   "yaw": -29.87,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
 {
  "levels": [
   {
    "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_0.jpg",
    "width": 2000,
    "height": 3000,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_1.jpg",
    "width": 1365,
    "height": 2048,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_2.jpg",
    "width": 682,
    "height": 1024,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_3.jpg",
    "width": 341,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_0AA1E95D_2068_946A_419A_A79BE517FB92",
  "class": "ImageResource"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7FD95395_64BC_8AFA_41C9_D509D2D09DDE",
  "initialPosition": {
   "yaw": 67.62,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7E0B5716_64BC_8BE6_41D1_56B7D2A7E69F",
  "initialPosition": {
   "yaw": -107.65,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_camera",
 "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7D324615_64BC_8DFA_41D8_79653D2B1F1B",
  "initialPosition": {
   "yaw": 148.88,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
 "this.video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB",
 "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_camera",
 "this.map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7FE20345_64BC_8A5A_41A6_194D16C7A849",
  "initialPosition": {
   "yaw": 75.18,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7DADB545_64BC_8E5A_41D3_811009A603DA",
  "initialPosition": {
   "yaw": 40.93,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.popup_D60305E4_DCEA_D39F_419B_D9B149482827",
 "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
 "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7C7E54D5_64BC_8E7A_41C8_DA76F4F13EE3",
  "initialPosition": {
   "yaw": 154.47,
   "hfov": 110,
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
  "id": "playList_7E7602A0_64BC_8ADA_41D2_388F222DA43D",
  "class": "PlayList"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7D060626_64BC_8A26_41D5_AF24A71D4487",
  "initialPosition": {
   "yaw": 45.04,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7F23B3BE_64BC_8A26_41CF_BFA5BFB3AD30",
  "initialPosition": {
   "yaw": -80.55,
   "hfov": 105,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "media": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_7E75F2A0_64BC_8ADA_419D_0E1ECF5207F3",
  "class": "PlayList"
 },
 {
  "levels": [
   {
    "url": "media/popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8_0_0.jpg",
    "width": 1500,
    "height": 1000,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8_0_1.jpg",
    "width": 1024,
    "height": 682,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8_0_2.jpg",
    "width": 512,
    "height": 341,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_72699DCF_64A4_9E66_417A_2D9BA948AEB2",
  "class": "ImageResource"
 },
 "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7DD1E5F3_64BC_8E3E_41B0_EE1CFBDAB533",
  "initialPosition": {
   "yaw": 89.52,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.MainViewerVideoPlayer",
 "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7C43B512_64BC_8FFE_41C2_9C809D09ED7C",
  "initialPosition": {
   "yaw": -32.82,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "levels": [
   {
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_0.jpg",
    "width": 3861,
    "height": 2574,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_1.jpg",
    "width": 2048,
    "height": 1365,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_2.jpg",
    "width": 1024,
    "height": 682,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_3.jpg",
    "width": 512,
    "height": 341,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_C406C318_D4FF_7ACD_41B8_0A98872E7CE5",
  "class": "ImageResource"
 },
 "this.popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7DEFE5A7_64BC_8E26_41CD_C16EC1E1CA55",
  "initialPosition": {
   "yaw": -107.93,
   "hfov": 105,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.popup_209897EC_11B3_4D40_41A2_837DB50E3A59",
 "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7DB13579_64BC_8E2A_41D3_6A1B9F5C84D2",
  "initialPosition": {
   "yaw": -147.08,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7C5EF51D_64BC_8FEA_41C1_99453DC93D5F",
  "initialPosition": {
   "yaw": 149.97,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "items": [
   {
    "media": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F6D8F_20DF_6B94_410B_52B44954FB30, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_camera",
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F5D8F_20DF_6B94_41B1_D214F66E6293, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_7E16127D_64BC_8A2A_41D3_29DBC0915C3A",
  "class": "PlayList"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_E35A8219_ED68_457C_41E5_C52BA0340B76",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 "this.popup_3CC23B7F_107F_4540_4180_ABF478E71F9A",
 {
  "easing": "cubic_in_out",
  "id": "effect_345E6D8F_20DF_6B94_41A3_46A48BBB0ACC",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7ED6E6EC_64BC_8A2A_41CB_70AAFDDDB314",
  "initialPosition": {
   "yaw": 115.77,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7DC565D9_64BC_8E6A_41CF_732C8CAF618E",
  "initialPosition": {
   "yaw": 84.54,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7DB8156C_64BC_8E2A_41D3_29FEB1E9B8A5",
  "initialPosition": {
   "yaw": 120.31,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.popup_36539A9C_24AE_9054_41AC_911079BB2A7C",
 {
  "easing": "cubic_in_out",
  "id": "effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 "this.popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7C78D4E4_64BC_8E5A_41D5_D3673771E728",
  "initialPosition": {
   "yaw": 15.91,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_34592D8F_20DF_6B94_41B2_36A2D8C28548",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7F11D3F1_64BC_8A3A_41D6_ABA32524A88D",
  "initialPosition": {
   "yaw": -70.25,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_E3598214_ED68_4574_41E8_2F261C5C21DC",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "items": [
   {
    "media": "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F0D8F_20DF_6B94_419D_ABD4CFF44CF3, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_camera",
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F7D8F_20DF_6B94_41B8_4073C3801F63, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_7E15627D_64BC_8A2A_41D0_1CF5E3D803C3",
  "class": "PlayList"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D180633_64BC_8A3E_41A9_BEF6F332A44D",
  "initialPosition": {
   "yaw": -0.95,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
 "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
 {
  "easing": "cubic_in_out",
  "id": "effect_34597D8F_20DF_6B94_41AA_44DC8A057CBB",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7F76340D_64BC_8DE5_41D4_1CAEDC7D6410",
  "initialPosition": {
   "yaw": 145.78,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "items": [
   {
    "media": "this.video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB",
    "start": "this.viewer_uid779B8598_64AC_8EEA_41B0_BDD09C9B97C3VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_77D1A5C8_64AC_8E6A_419B_370D86953148, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_77D1A5C8_64AC_8E6A_419B_370D86953148, 0)",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid779B8598_64AC_8EEA_41B0_BDD09C9B97C3VideoPlayer)",
    "player": {
     "displayPlaybackBar": true,
     "id": "viewer_uid779B8598_64AC_8EEA_41B0_BDD09C9B97C3VideoPlayer",
     "viewerArea": {
      "paddingBottom": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowOpacity": 0.7,
      "progressLeft": 0,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "id": "viewer_uid7E13127D_64BC_8A2A_41C8_F00C69831C0A",
      "playbackBarProgressOpacity": 1,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBarOpacity": 1,
      "borderSize": 0,
      "toolTipFontFamily": "Arial",
      "width": "100%",
      "toolTipShadowColor": "#333333",
      "toolTipFontStyle": "normal",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBorderSize": 0,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarBorderColor": "#FFFFFF",
      "playbackBarHeadBorderSize": 0,
      "minHeight": 50,
      "playbackBarHeight": 10,
      "progressBorderSize": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "displayTooltipInTouchScreens": true,
      "playbackBarHeadWidth": 6,
      "class": "ViewerArea",
      "toolTipShadowHorizontalLength": 0,
      "toolTipTextShadowOpacity": 0,
      "minWidth": 100,
      "propagateClick": false,
      "playbackBarLeft": 0,
      "paddingRight": 0,
      "height": "100%",
      "playbackBarBackgroundColorDirection": "vertical",
      "toolTipPaddingBottom": 4,
      "progressBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadHeight": 15,
      "transitionDuration": 500,
      "toolTipPaddingLeft": 6,
      "playbackBarRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarProgressBorderSize": 0,
      "toolTipFontColor": "#606060",
      "toolTipDisplayTime": 600,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBorderRadius": 0,
      "transitionMode": "blending",
      "progressBarBorderRadius": 0,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressRight": 0,
      "playbackBarHeadShadowColor": "#000000",
      "paddingLeft": 0,
      "shadow": false,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadOpacity": 1,
      "toolTipPaddingTop": 4,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarBorderRadius": 0,
      "progressOpacity": 1,
      "toolTipBorderSize": 1,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBorderColor": "#000000",
      "toolTipShadowSpread": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "paddingTop": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarBottom": 0,
      "playbackBarHeadBorderRadius": 0,
      "playbackBarHeadShadow": true,
      "toolTipTextShadowBlurRadius": 3,
      "progressBottom": 2,
      "progressBorderColor": "#000000",
      "progressHeight": 10,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarHeadBorderColor": "#000000",
      "toolTipFontSize": "1.11vh",
      "playbackBarOpacity": 1,
      "toolTipBorderRadius": 3,
      "toolTipOpacity": 1,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipShadowOpacity": 1,
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "data": {
       "name": "ViewerArea17337"
      }
     },
     "class": "VideoPlayer"
    },
    "class": "VideoPlayListItem"
   }
  ],
  "id": "PlayList_77D1A5C8_64AC_8E6A_419B_370D86953148",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E6D8F_20DF_6B94_41A3_46A48BBB0ACC, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_camera",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_7E46D2B4_64BC_8A3A_41D0_B25FA0387E54, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E5D8F_20DF_6B94_4193_ABB7E016F309, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E46D2B4_64BC_8A3A_41D0_B25FA0387E54",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_7E062269_64BC_8A2A_41D3_887D0793443F",
  "class": "PlayList"
 },
 "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
 "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
 {
  "easing": "cubic_in_out",
  "id": "effect_345FCD97_20DF_6BB3_41B7_5533F0603364",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 "this.popup_25AB8A34_3513_DE40_41C8_119007832823",
 {
  "easing": "cubic_in_out",
  "id": "effect_7FA1B7B9_64BC_8A2A_41D5_4C1231E8CCBB",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7DF055CF_64BC_8E66_41D6_C778EDE8052A",
  "initialPosition": {
   "yaw": 85.36,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "shadowBlurRadius": 6,
  "paddingBottom": 0,
  "overflow": "scroll",
  "verticalAlign": "middle",
  "id": "window_6FC7C885_649C_86DA_4190_A737FDB62B16",
  "bodyBackgroundOpacity": 0,
  "borderSize": 0,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "closeButtonRollOverIconColor": "#666666",
  "modal": true,
  "bodyPaddingTop": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "minHeight": 20,
  "headerVerticalAlign": "middle",
  "closeButtonPressedIconColor": "#888888",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "veilOpacity": 0.4,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "contentOpaque": false,
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonPressedIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "backgroundColor": [],
  "class": "Window",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonBorderSize": 0,
  "bodyPaddingRight": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "minWidth": 20,
  "propagateClick": false,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "closeButtonBorderColor": "#000000",
  "closeButtonIconHeight": 20,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBorderSize": 0,
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "headerBackgroundColorDirection": "vertical",
  "closeButtonIconColor": "#000000",
  "scrollBarVisible": "rollOver",
  "closeButtonPaddingTop": 5,
  "backgroundColorRatios": [],
  "footerHeight": 5,
  "closeButtonBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontSize": "1.29vh",
  "titlePaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "titleFontFamily": "Arial",
  "closeButtonPaddingRight": 5,
  "bodyBackgroundColorDirection": "vertical",
  "children": [
   "this.viewer_uid7E13127D_64BC_8A2A_41C8_F00C69831C0A"
  ],
  "footerBackgroundColorDirection": "vertical",
  "backgroundColorDirection": "vertical",
  "bodyPaddingLeft": 0,
  "shadowColor": "#000000",
  "closeButtonPressedBorderColor": "#000000",
  "titlePaddingTop": 5,
  "paddingLeft": 0,
  "closeButtonPaddingBottom": 5,
  "shadow": true,
  "titlePaddingRight": 5,
  "shadowHorizontalLength": 3,
  "closeButtonRollOverBorderColor": "#000000",
  "headerBackgroundOpacity": 0,
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingTop": 0,
  "closeButtonIconWidth": 20,
  "bodyPaddingBottom": 0,
  "headerPaddingBottom": 5,
  "footerBackgroundOpacity": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "layout": "vertical",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "gap": 10,
  "closeButtonPressedBorderSize": 0,
  "shadowSpread": 1,
  "shadowOpacity": 0.5,
  "closeButtonPaddingLeft": 5,
  "horizontalAlign": "center",
  "headerPaddingTop": 10,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundOpacity": 1,
  "data": {
   "name": "Window527"
  },
  "closeButtonBorderRadius": 0,
  "scrollBarMargin": 2,
  "borderRadius": 5,
  "headerPaddingLeft": 10,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "scrollBarOpacity": 0.5,
  "scrollBarWidth": 10
 },
 "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_78CFD47B_64BC_8E2E_41D8_900258DC0ACC",
  "initialPosition": {
   "yaw": -91.45,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7E3A4709_64BC_8BEA_41CD_142B2C4E1098",
  "initialPosition": {
   "yaw": 42.36,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "items": [
   {
    "media": "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD8F_20DF_6B94_41A5_6F5908EFA5C8, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391_camera",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_7E4572B4_64BC_8A3A_419F_25F81D9B7CCC, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E8D8F_20DF_6B94_419E_3AE578883B9D, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_7E4572B4_64BC_8A3A_419F_25F81D9B7CCC",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_7E01C278_64BC_8A2A_41B1_2891A216580D",
  "class": "PlayList"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_345EAD84_20DF_6B95_41B9_72E06ABF1981",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7DA68550_64BC_8E7A_41CE_6AFB796EE259",
  "initialPosition": {
   "yaw": -176.54,
   "hfov": 105,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7EF156CD_64BC_8A6A_41C6_DAB2188F2851",
  "initialPosition": {
   "yaw": 9.95,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7EC5E6DF_64BC_8A66_41B5_1322C01CB6A5",
  "initialPosition": {
   "yaw": -80.37,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.popup_37E7B455_24BA_B0D4_41A5_EF23708D6C53",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7D99D597_64BC_8EE6_41AA_61BAF16AA46E",
  "initialPosition": {
   "yaw": 3.65,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_7FA5C7B1_64BC_8A3A_41CE_A453C1D03BE3",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7E1DC723_64BC_8BDE_41D8_9503387CBAA2",
  "initialPosition": {
   "yaw": -80.32,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_7F97B313_64BC_8BFE_41C7_632EA7408E01",
  "initialPosition": {
   "yaw": -113.6,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_7FA397B1_64BC_8A3A_41C6_4AE12AB86B10",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "levels": [
   {
    "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_0.jpg",
    "width": 1280,
    "height": 936,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_1.jpg",
    "width": 1024,
    "height": 748,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_2.jpg",
    "width": 512,
    "height": 374,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_E252A6BD_EF1D_EC9A_41D3_31F4A8966575",
  "class": "ImageResource"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
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
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7E430782_64BC_8ADE_41D8_E41929313EE4",
  "initialPosition": {
   "yaw": -42.99,
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "items": [
   {
    "media": "this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34593D8F_20DF_6B94_41B9_C6D005829662, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_camera",
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34592D8F_20DF_6B94_41B2_36A2D8C28548, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_7E35425F_64BC_8A66_41D1_8097051CDAED",
  "class": "PlayList"
 },
 {
  "levels": [
   {
    "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_0.jpg",
    "width": 1067,
    "height": 800,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_1.jpg",
    "width": 1024,
    "height": 767,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_2.jpg",
    "width": 512,
    "height": 383,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_20FB6245_107F_4740_41A8_9C0A46A92B4D",
  "class": "ImageResource"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_7FA037BB_64BC_8A2E_41CC_E8558B9B3B19",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "items": [
   {
    "media": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD84_20DF_6B95_41B9_72E06ABF1981, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 0, 1); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7FBDE7BB_64BC_8A2E_41D1_96CD21BC7A3F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_7FBDA7BB_64BC_8A2E_41C5_4BE874C414AE, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_7FBD57C3_64BC_8A5E_41C5_8782D37B8CA8, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "camera": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 1, 2); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_EF6DE039_F622_38BD_41E2_3149DB234972, 'showEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
    "camera": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7FBCA7C3_64BC_8A5E_4192_A0C741968C53, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 3, 4); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7FBC37C3_64BC_8A5E_41D8_A87237B63291, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 4, 5); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7FBB57C6_64BC_8A66_41D1_9CB24B8BCDEF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 5, 6); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7FBA87C6_64BC_8A66_41D8_AF8888F9F40E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 6, 7); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
    "camera": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 7, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
  "class": "PlayList"
 }
], "children": [
 {
  "paddingBottom": 0,
  "toolTipShadowBlurRadius": 3,
  "left": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressLeft": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "id": "MainViewer",
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarOpacity": 1,
  "borderSize": 0,
  "toolTipFontFamily": "Arial",
  "width": "100%",
  "toolTipShadowColor": "#333333",
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBorderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadBorderSize": 0,
  "minHeight": 50,
  "playbackBarHeight": 10,
  "progressBorderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "displayTooltipInTouchScreens": true,
  "playbackBarHeadWidth": 6,
  "class": "ViewerArea",
  "toolTipShadowHorizontalLength": 0,
  "toolTipTextShadowOpacity": 0,
  "minWidth": 100,
  "propagateClick": false,
  "playbackBarLeft": 0,
  "paddingRight": 0,
  "height": "100%",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipPaddingBottom": 4,
  "progressBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadHeight": 15,
  "transitionDuration": 500,
  "toolTipPaddingLeft": 6,
  "playbackBarRight": 0,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "playbackBarProgressBorderSize": 0,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingRight": 6,
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "toolTipDisplayTime": 600,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressRight": 0,
  "playbackBarHeadShadowColor": "#000000",
  "paddingLeft": 0,
  "shadow": false,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadOpacity": 1,
  "toolTipPaddingTop": 4,
  "toolTipFontWeight": "normal",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBorderRadius": 0,
  "progressOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipShadowSpread": 0,
  "top": 0,
  "paddingTop": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBottom": 5,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowBlurRadius": 3,
  "progressBottom": 0,
  "playbackBarHeadBorderRadius": 0,
  "progressBorderColor": "#000000",
  "progressHeight": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBackgroundOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontSize": 12,
  "playbackBarOpacity": 1,
  "toolTipBorderRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowOpacity": 1,
  "borderRadius": 0,
  "toolTipOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "data": {
   "name": "Main Viewer"
  }
 },
 {
  "children": [
   {
    "children": [
     {
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowBlurRadius": 3,
      "transparencyActive": true,
      "width": 75,
      "verticalAlign": "middle",
      "id": "IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0",
      "paddingLeft": 0,
      "borderSize": 0,
      "toolTipFontFamily": "Arial",
      "toolTipPaddingTop": 4,
      "shadow": false,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "minHeight": 1,
      "toolTipBorderSize": 1,
      "toolTipShadowColor": "#333333",
      "iconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0.png",
      "toolTipShadowSpread": 0,
      "paddingBottom": 0,
      "toolTipBorderColor": "#767676",
      "class": "IconButton",
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipTextShadowOpacity": 0,
      "mode": "toggle",
      "height": 50,
      "minWidth": 1,
      "propagateClick": false,
      "click": "this.openLink('https://www.lalimafreezone.com/', '_top')",
      "paddingRight": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "Home",
      "toolTipPaddingBottom": 4,
      "toolTipShadowVerticalLength": 0,
      "horizontalAlign": "center",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipFontSize": 12,
      "pressedIconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0_pressed.png",
      "toolTipPaddingLeft": 6,
      "toolTipBorderRadius": 3,
      "toolTipShadowOpacity": 1,
      "data": {
       "name": "Button_home"
      },
      "toolTipFontColor": "#606060",
      "backgroundOpacity": 0,
      "toolTipDisplayTime": 600,
      "toolTipPaddingRight": 6,
      "borderRadius": 0,
      "toolTipOpacity": 1,
      "cursor": "hand"
     },
     {
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowBlurRadius": 3,
      "transparencyActive": true,
      "width": 75,
      "verticalAlign": "middle",
      "id": "IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2",
      "paddingLeft": 0,
      "borderSize": 0,
      "toolTipFontFamily": "Arial",
      "toolTipPaddingTop": 4,
      "shadow": false,
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "minHeight": 1,
      "toolTipBorderSize": 1,
      "toolTipShadowColor": "#333333",
      "iconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2.png",
      "toolTipShadowSpread": 0,
      "paddingBottom": 0,
      "toolTipBorderColor": "#767676",
      "class": "IconButton",
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipTextShadowOpacity": 0,
      "mode": "toggle",
      "height": 50,
      "minWidth": 1,
      "propagateClick": false,
      "click": "if(!this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, true, 0, this.effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42, 'showEffect', false) } else { this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, false, 0, this.effect_D3728F7A_DF8C_960C_417C_830810DD2653, 'hideEffect', false) }",
      "paddingRight": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "Map",
      "toolTipPaddingBottom": 4,
      "toolTipShadowVerticalLength": 0,
      "horizontalAlign": "center",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipFontSize": 12,
      "pressedIconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2_pressed.png",
      "toolTipPaddingLeft": 6,
      "toolTipBorderRadius": 3,
      "toolTipShadowOpacity": 1,
      "data": {
       "name": "Button_Map"
      },
      "toolTipFontColor": "#606060",
      "backgroundOpacity": 0,
      "toolTipDisplayTime": 600,
      "toolTipPaddingRight": 6,
      "borderRadius": 0,
      "toolTipOpacity": 1,
      "cursor": "hand"
     },
     {
      "maxWidth": 225,
      "maxHeight": 225,
      "width": 75,
      "scaleMode": "fit_inside",
      "verticalAlign": "middle",
      "id": "Image_5DD52A9D_53AB_71BB_41D2_61C6638CC12D",
      "paddingLeft": 0,
      "borderSize": 0,
      "url": "skin/Image_5DD52A9D_53AB_71BB_41D2_61C6638CC12D.png",
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "class": "Image",
      "paddingTop": 0,
      "height": 50,
      "minWidth": 1,
      "propagateClick": false,
      "click": "this.openLink('https://www.lalimafreezone.com/real-estate', '_top')",
      "paddingRight": 0,
      "horizontalAlign": "center",
      "data": {
       "name": "Image2280"
      },
      "backgroundOpacity": 0,
      "borderRadius": 0,
      "cursor": "hand"
     },
     "this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667"
    ],
    "paddingBottom": 0,
    "backgroundColorDirection": "vertical",
    "width": 334,
    "verticalAlign": "middle",
    "id": "Container_FD43509A_EC70_8CA6_41E8_9E5B7D453FAE",
    "paddingLeft": 0,
    "borderSize": 0,
    "overflow": "scroll",
    "shadow": false,
    "scrollBarColor": "#000000",
    "minHeight": 77,
    "layout": "horizontal",
    "contentOpaque": false,
    "height": 77,
    "class": "Container",
    "backgroundColor": [
     "#000000"
    ],
    "minWidth": 334,
    "propagateClick": false,
    "paddingRight": 0,
    "paddingTop": 0,
    "gap": 10,
    "scrollBarVisible": "rollOver",
    "horizontalAlign": "center",
    "backgroundColorRatios": [
     0.8
    ],
    "backgroundOpacity": 0.1,
    "data": {
     "name": "Container_btones"
    },
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10
   }
  ],
  "left": "0%",
  "overflow": "scroll",
  "width": "100%",
  "verticalAlign": "middle",
  "id": "Container_D19AA380_DE1B_2AF3_41EA_D9B3468B686F",
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "paddingBottom": 0,
  "height": "18.033%",
  "class": "Container",
  "paddingTop": 0,
  "contentOpaque": false,
  "minWidth": 1,
  "propagateClick": false,
  "bottom": "0%",
  "paddingRight": 0,
  "layout": "horizontal",
  "gap": 10,
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "center",
  "data": {
   "name": "Container_Menu"
  },
  "backgroundOpacity": 0,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "scrollBarOpacity": 0.5,
  "scrollBarWidth": 10
 },
 {
  "children": [
   {
    "children": [
     "this.MapViewer",
     {
      "maxWidth": 448,
      "maxHeight": 264,
      "width": "100%",
      "verticalAlign": "middle",
      "id": "Image_E84AED1C_E346_1439_41DD_9142DAACB163",
      "paddingLeft": 0,
      "borderSize": 0,
      "url": "skin/Image_E84AED1C_E346_1439_41DD_9142DAACB163.png",
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "height": "27.233%",
      "class": "Image",
      "paddingTop": 0,
      "minWidth": 1,
      "propagateClick": false,
      "paddingRight": 0,
      "horizontalAlign": "center",
      "data": {
       "name": "Simbologia"
      },
      "backgroundOpacity": 0,
      "scaleMode": "fit_inside",
      "borderRadius": 0
     }
    ],
    "overflow": "scroll",
    "width": "100%",
    "verticalAlign": "middle",
    "id": "Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5",
    "paddingLeft": 0,
    "borderSize": 0,
    "shadow": false,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "paddingBottom": 0,
    "height": "81.45%",
    "class": "Container",
    "paddingTop": 0,
    "contentOpaque": false,
    "minWidth": 1,
    "propagateClick": false,
    "paddingRight": 0,
    "layout": "vertical",
    "gap": 10,
    "scrollBarVisible": "rollOver",
    "horizontalAlign": "center",
    "data": {
     "name": "Container_Map"
    },
    "backgroundOpacity": 0,
    "scrollBarMargin": 2,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "borderRadius": 0
   }
  ],
  "overflow": "scroll",
  "width": "29.316%",
  "verticalAlign": "top",
  "id": "Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F",
  "right": "0%",
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "creationPolicy": "inAdvance",
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "layout": "vertical",
  "paddingBottom": 0,
  "top": "2.05%",
  "class": "Container",
  "paddingTop": 0,
  "contentOpaque": false,
  "height": "77.049%",
  "minWidth": 1,
  "propagateClick": false,
  "paddingRight": 0,
  "gap": 10,
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "center",
  "data": {
   "name": "Main_Container"
  },
  "backgroundOpacity": 0,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "visible": false,
  "scrollBarOpacity": 0.5,
  "scrollBarWidth": 10
 },
 {
  "children": [
   {
    "fontFamily": "Arial",
    "data": {
     "name": "Location List"
    },
    "paddingBottom": 0,
    "backgroundColorDirection": "vertical",
    "popUpShadowOpacity": 0,
    "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F",
    "paddingLeft": 5,
    "width": "20.256%",
    "borderSize": 0,
    "popUpFontColor": "#000000",
    "shadow": false,
    "fontColor": "#333333",
    "minHeight": 20,
    "popUpShadow": false,
    "popUpShadowSpread": 1,
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "backgroundColor": [
     "#00CCFF",
     "#0099FF"
    ],
    "class": "DropDown",
    "height": "27.397%",
    "popUpBackgroundOpacity": 0.72,
    "minWidth": 200,
    "propagateClick": false,
    "arrowColor": "#0066FF",
    "paddingRight": 5,
    "fontSize": 14,
    "paddingTop": 0,
    "playList": "this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
    "popUpShadowColor": "#000000",
    "gap": 0,
    "popUpBorderRadius": 0,
    "selectedPopUpBackgroundColor": "#0066FF",
    "fontStyle": "normal",
    "popUpShadowBlurRadius": 6,
    "backgroundColorRatios": [
     0,
     1
    ],
    "arrowBeforeLabel": false,
    "backgroundOpacity": 0.72,
    "popUpGap": 0,
    "popUpBackgroundColor": "#FFFFFF",
    "selectedPopUpFontColor": "#FFFFFF",
    "borderRadius": 4,
    "textDecoration": "none",
    "prompt": "Location List",
    "fontWeight": "normal"
   }
  ],
  "left": "0%",
  "overflow": "scroll",
  "width": "100%",
  "verticalAlign": "top",
  "id": "Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F",
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "layout": "horizontal",
  "paddingBottom": 0,
  "top": "0.96%",
  "class": "Container",
  "paddingTop": 0,
  "contentOpaque": false,
  "height": "10%",
  "minWidth": 1,
  "propagateClick": false,
  "paddingRight": 0,
  "gap": 10,
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "left",
  "data": {
   "name": "ContainerDropDown"
  },
  "backgroundOpacity": 0,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "scrollBarOpacity": 0.5,
  "scrollBarWidth": 10
 },
 {
  "fontFamily": "Arial",
  "left": "0%",
  "width": "100%",
  "verticalAlign": "middle",
  "id": "Label_E2D61738_F65E_D8BA_41DD_6888E340C197",
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "text": "La Lima Free Zone",
  "minHeight": 1,
  "fontColor": "#FFFFFF",
  "textShadowColor": "#000000",
  "paddingBottom": 0,
  "top": "0%",
  "class": "Label",
  "paddingTop": 0,
  "textShadowBlurRadius": 3,
  "height": "10%",
  "minWidth": 1,
  "propagateClick": false,
  "textShadowVerticalLength": 1,
  "paddingRight": 0,
  "fontSize": 20,
  "textShadowOpacity": 1,
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "textShadowHorizontalLength": 1,
  "data": {
   "name": "Label_La Lima Free Zone"
  },
  "backgroundOpacity": 0,
  "fontWeight": "normal",
  "borderRadius": 0,
  "textDecoration": "none",
  "visible": false
 },
 {
  "fontFamily": "Arial",
  "left": "0%",
  "width": "100%",
  "verticalAlign": "middle",
  "id": "Label_E253EC4C_F622_28DA_41DB_546DF82EE842",
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "text": "Cartago City",
  "minHeight": 1,
  "fontColor": "#FFFFFF",
  "textShadowColor": "#000000",
  "paddingBottom": 0,
  "top": "0%",
  "class": "Label",
  "paddingTop": 0,
  "textShadowBlurRadius": 3,
  "height": "10%",
  "minWidth": 1,
  "propagateClick": false,
  "textShadowVerticalLength": 1,
  "paddingRight": 0,
  "fontSize": 20,
  "textShadowOpacity": 1,
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "textShadowHorizontalLength": 1,
  "data": {
   "name": "Label_Cartago City"
  },
  "backgroundOpacity": 0,
  "fontWeight": "normal",
  "borderRadius": 0,
  "textDecoration": "none",
  "visible": false
 },
 {
  "fontFamily": "Arial",
  "left": "0%",
  "width": "100%",
  "verticalAlign": "middle",
  "id": "Label_E216BE12_F622_684F_41EC_C2D2817E217E",
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "text": "Corporate Center Project",
  "minHeight": 1,
  "fontColor": "#FFFFFF",
  "textShadowColor": "#000000",
  "paddingBottom": 0,
  "top": "0%",
  "class": "Label",
  "paddingTop": 0,
  "textShadowBlurRadius": 3,
  "height": "13.108%",
  "minWidth": 1,
  "propagateClick": false,
  "textShadowVerticalLength": 1,
  "paddingRight": 0,
  "fontSize": 20,
  "textShadowOpacity": 1,
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "textShadowHorizontalLength": 1,
  "data": {
   "name": "Label_Corporate Center"
  },
  "backgroundOpacity": 0,
  "fontWeight": "normal",
  "borderRadius": 0,
  "textDecoration": "none",
  "visible": false
 },
 {
  "fontFamily": "Arial",
  "left": "0%",
  "width": "100%",
  "verticalAlign": "middle",
  "id": "Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515",
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "text": "Corporate Building",
  "minHeight": 1,
  "fontColor": "#FFFFFF",
  "textShadowColor": "#000000",
  "paddingBottom": 0,
  "top": "6%",
  "class": "Label",
  "paddingTop": 0,
  "textShadowBlurRadius": 3,
  "height": "3.5%",
  "minWidth": 1,
  "propagateClick": false,
  "textShadowVerticalLength": 1,
  "paddingRight": 0,
  "fontSize": 20,
  "textShadowOpacity": 1,
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "textShadowHorizontalLength": 1,
  "data": {
   "name": "Label_Corporate Building"
  },
  "backgroundOpacity": 0,
  "fontWeight": "normal",
  "borderRadius": 0,
  "textDecoration": "none",
  "visible": false
 },
 {
  "children": [
   {
    "children": [
     {
      "paddingBottom": 0,
      "backgroundColorDirection": "vertical",
      "width": "99.907%",
      "id": "WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21",
      "right": "0%",
      "paddingLeft": 0,
      "borderSize": 0,
      "url": "https://www.dailymotion.com/embed/video/kzStCdckcK75zLvzVdv?queue-enable=false\n",
      "shadow": false,
      "scrollEnabled": true,
      "minHeight": 1,
      "insetBorder": false,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "class": "WebFrame",
      "height": "100%",
      "top": "0%",
      "minWidth": 1,
      "propagateClick": false,
      "paddingRight": 0,
      "paddingTop": 0,
      "backgroundColorRatios": [
       0
      ],
      "backgroundOpacity": 1,
      "data": {
       "name": "WebFrame_Zollner"
      },
      "visible": false,
      "borderRadius": 0
     },
     {
      "left": "0%",
      "paddingBottom": 0,
      "backgroundColorDirection": "vertical",
      "width": "100%",
      "id": "WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB",
      "paddingLeft": 0,
      "borderSize": 0,
      "url": "https://www.dailymotion.com/embed/video/k5CPUN2JVgV5TXvAxxe?queue-enable=false",
      "shadow": false,
      "scrollEnabled": true,
      "minHeight": 1,
      "insetBorder": false,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "class": "WebFrame",
      "height": "100%",
      "top": "0%",
      "minWidth": 1,
      "propagateClick": false,
      "paddingRight": 0,
      "paddingTop": 0,
      "backgroundColorRatios": [
       0
      ],
      "backgroundOpacity": 1,
      "data": {
       "name": "WebFrame_CC"
      },
      "visible": false,
      "borderRadius": 0
     },
     {
      "left": "0%",
      "paddingBottom": 0,
      "backgroundColorDirection": "vertical",
      "width": "100%",
      "id": "WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411",
      "paddingLeft": 0,
      "borderSize": 0,
      "url": "https://www.dailymotion.com/embed/video/k1DHnDG2YiE1ncvzVks?queue-enable=false",
      "shadow": false,
      "scrollEnabled": true,
      "minHeight": 1,
      "insetBorder": false,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "class": "WebFrame",
      "height": "100%",
      "top": "0%",
      "minWidth": 1,
      "propagateClick": false,
      "paddingRight": 0,
      "paddingTop": 0,
      "backgroundColorRatios": [
       0
      ],
      "backgroundOpacity": 1,
      "data": {
       "name": "WebFrame_Coloplast"
      },
      "visible": false,
      "borderRadius": 0
     },
     {
      "maxWidth": 394,
      "maxHeight": 396,
      "width": "6.97%",
      "verticalAlign": "middle",
      "id": "Image_57742DA6_5884_2676_41C4_D20EEA93A077",
      "right": "0%",
      "paddingLeft": 0,
      "borderSize": 0,
      "url": "skin/Image_57742DA6_5884_2676_41C4_D20EEA93A077.png",
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "top": "0%",
      "class": "Image",
      "paddingTop": 0,
      "height": "10.98%",
      "minWidth": 1,
      "propagateClick": false,
      "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, false, 0, null, null, false)",
      "paddingRight": 0,
      "horizontalAlign": "center",
      "backgroundOpacity": 0,
      "data": {
       "name": "Button_Close"
      },
      "scaleMode": "fit_inside",
      "borderRadius": 0
     }
    ],
    "left": "4.32%",
    "paddingBottom": 0,
    "backgroundColorDirection": "vertical",
    "width": "91.341%",
    "verticalAlign": "top",
    "id": "Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41",
    "paddingLeft": 0,
    "borderSize": 0,
    "overflow": "scroll",
    "shadow": false,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "layout": "absolute",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "class": "Container",
    "contentOpaque": false,
    "height": "91.081%",
    "minWidth": 1,
    "propagateClick": false,
    "bottom": "3.11%",
    "paddingRight": 0,
    "paddingTop": 0,
    "gap": 10,
    "scrollBarVisible": "rollOver",
    "horizontalAlign": "left",
    "backgroundColorRatios": [
     0,
     1
    ],
    "backgroundOpacity": 0.3,
    "data": {
     "name": "Web container "
    },
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10
   }
  ],
  "left": "0%",
  "paddingBottom": 0,
  "backgroundColorDirection": "vertical",
  "width": "100%",
  "verticalAlign": "top",
  "id": "Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E",
  "paddingLeft": 0,
  "borderSize": 0,
  "overflow": "scroll",
  "shadow": false,
  "creationPolicy": "inAdvance",
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "layout": "absolute",
  "backgroundColor": [
   "#000000"
  ],
  "class": "Container",
  "contentOpaque": false,
  "height": "100%",
  "top": "0%",
  "minWidth": 1,
  "propagateClick": false,
  "paddingRight": 0,
  "paddingTop": 0,
  "gap": 10,
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "left",
  "backgroundColorRatios": [
   0
  ],
  "backgroundOpacity": 0.3,
  "data": {
   "name": "Main Container Web link"
  },
  "visible": false,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "scrollBarOpacity": 0.5,
  "scrollBarWidth": 10
 },
 {
  "left": 0,
  "paddingBottom": 0,
  "backgroundColorDirection": "vertical",
  "id": "veilPopupPanorama",
  "right": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "minHeight": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "backgroundColor": [
   "#000000"
  ],
  "class": "UIComponent",
  "top": 0,
  "minWidth": 0,
  "propagateClick": false,
  "bottom": 0,
  "paddingRight": 0,
  "paddingTop": 0,
  "backgroundColorRatios": [
   0
  ],
  "backgroundOpacity": 0.55,
  "data": {
   "name": "UIComponent17338"
  },
  "visible": false,
  "borderRadius": 0
 },
 {
  "left": 0,
  "paddingBottom": 0,
  "backgroundColorDirection": "vertical",
  "scaleMode": "custom",
  "id": "zoomImagePopupPanorama",
  "right": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "minHeight": 0,
  "backgroundColor": [],
  "class": "ZoomImage",
  "top": 0,
  "minWidth": 0,
  "propagateClick": false,
  "bottom": 0,
  "paddingRight": 0,
  "paddingTop": 0,
  "backgroundColorRatios": [],
  "backgroundOpacity": 1,
  "data": {
   "name": "ZoomImage17339"
  },
  "visible": false,
  "borderRadius": 0
 },
 {
  "iconHeight": 20,
  "fontFamily": "Arial",
  "paddingBottom": 5,
  "backgroundColorDirection": "vertical",
  "rollOverIconColor": "#666666",
  "verticalAlign": "middle",
  "id": "closeButtonPopupPanorama",
  "right": 10,
  "paddingLeft": 5,
  "borderSize": 0,
  "shadowColor": "#000000",
  "iconBeforeLabel": true,
  "shadow": false,
  "fontColor": "#FFFFFF",
  "iconLineWidth": 5,
  "minHeight": 0,
  "layout": "horizontal",
  "borderColor": "#000000",
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "class": "CloseButton",
  "mode": "push",
  "top": 10,
  "minWidth": 0,
  "propagateClick": false,
  "label": "",
  "paddingRight": 5,
  "paddingTop": 5,
  "iconColor": "#000000",
  "gap": 5,
  "shadowSpread": 1,
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "fontSize": "1.29vh",
  "backgroundOpacity": 0.3,
  "pressedIconColor": "#888888",
  "data": {
   "name": "CloseButton17340"
  },
  "iconWidth": 20,
  "borderRadius": 0,
  "textDecoration": "none",
  "visible": false,
  "cursor": "hand",
  "shadowBlurRadius": 6,
  "fontWeight": "normal"
 }
], 
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_7E76D2A0_64BC_8ADA_41D8_58623C799317.set('selectedIndex', 0)",
 "paddingBottom": 0,
 "width": "100%",
 "verticalAlign": "top",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "borderSize": 0,
 "scripts": {
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getKey": function(key){  return window[key]; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "existsKey": function(key){  return key in window; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "registerKey": function(key, value){  window[key] = value; }
 },
 "overflow": "visible",
 "shadow": false,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "desktopMipmappingEnabled": false,
 "class": "Player",
 "contentOpaque": false,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "paddingRight": 0,
 "paddingTop": 0,
 "layout": "absolute",
 "gap": 10,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "data": {
  "name": "Player7285"
 },
 "mouseWheelEnabled": true,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10
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
