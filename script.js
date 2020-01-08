(function(){
    var script = { "definitions": [
 {
  "class": "FadeInEffect",
  "id": "effect_90FD20A8_875E_9EC2_41D7_45D06576C4ED",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F5D8F_20DF_6B94_41B1_D214F66E6293, 'hideEffect', false)",
    "media": {
     "class": "Panorama",
     "label": "5-Arte Rotonda",
     "id": "panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "label": "4-Frente Rotonda",
        "id": "panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "label": "17-Construcci\u00f3n Coloplast",
           "id": "panorama_0B7B5A27_1FEB_7426_4195_945554348391",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
             "backwardYaw": 66.08,
             "yaw": -174.5,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
             "backwardYaw": 69.33,
             "yaw": -155.58,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "label": "IMG_20180114_184740_00_077-edit",
              "id": "panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "class": "Panorama",
                 "label": "IMG_20180114_162347_00_013-edit",
                 "id": "panorama_8C911D20_820E_09EE_41C0_C274C66438F8",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "class": "Panorama",
                    "label": "Main Entrance",
                    "id": "panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "class": "Panorama",
                       "label": "Cartago City",
                       "id": "panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
                         "backwardYaw": 159.92,
                         "yaw": -144.74,
                         "distance": 1
                        }
                       ],
                       "pitch": 0,
                       "partial": false,
                       "vfov": 180,
                       "cardboardMenu": {
                        "fontFamily": "Arial",
                        "selectedBackgroundColor": "#202020",
                        "rollOverFontColor": "#FFFFFF",
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
                        "id": "Menu_90F5FBAC_875E_A2C2_41CA_7C6A2740C6EA",
                        "opacity": 0.4,
                        "class": "Menu",
                        "fontColor": "#FFFFFF",
                        "selectedFontColor": "#FFFFFF",
                        "rollOverOpacity": 0.8,
                        "backgroundColor": "#404040",
                        "rollOverBackgroundColor": "#000000"
                       },
                       "hfovMax": 120,
                       "hfov": 360,
                       "hfovMin": 100,
                       "frames": [
                        {
                         "class": "CubicPanoramaFrame",
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714, this.camera_9F7FDCEF_875E_A65E_41DF_BE955273A324); this.mainPlayList.set('selectedIndex', 0)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
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
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_7_0.png",
                                "width": 118,
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
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupPanoramaOverlay(this.popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C, {'rollOverIconColor':'#CCCCCC','backgroundColorRatios':[0.09803921568627451],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverIconWidth':50,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, null, null, null, null, null, false)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
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
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_5_0.png",
                                "width": 122,
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
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupPanoramaOverlay(this.popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6, {'rollOverIconColor':'#CCCCCC','backgroundColorRatios':[0.09803921568627451],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverIconWidth':50,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, null, null, null, null, null, false)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
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
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_4_0.png",
                                "width": 122,
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
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupPanoramaOverlay(this.popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865, {'rollOverIconColor':'#CCCCCC','backgroundColorRatios':[0.09803921568627451],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverIconWidth':50,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_E252A6BD_EF1D_EC9A_41D3_31F4A8966575, null, null, null, null, false)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
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
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_3_0.png",
                                "width": 99,
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
                           "showEasing": "cubic_in",
                           "showDuration": 500,
                           "popupMaxWidth": "95%",
                           "yaw": 43.77,
                           "rotationZ": 0,
                           "hideDuration": 500,
                           "class": "PopupPanoramaOverlay",
                           "id": "popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6",
                           "hfov": 8.24,
                           "rotationX": 0,
                           "rotationY": 0,
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
                           "popupDistance": 100,
                           "hideEasing": "cubic_out",
                           "popupMaxHeight": "95%"
                          },
                          {
                           "showEasing": "cubic_in",
                           "showDuration": 500,
                           "popupMaxWidth": "95%",
                           "yaw": 85.84,
                           "rotationZ": 0,
                           "hideDuration": 500,
                           "class": "PopupPanoramaOverlay",
                           "id": "popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C",
                           "hfov": 8.24,
                           "rotationX": 0,
                           "rotationY": 0,
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
                           "popupDistance": 100,
                           "hideEasing": "cubic_out",
                           "popupMaxHeight": "95%"
                          },
                          {
                           "showEasing": "cubic_in",
                           "showDuration": 500,
                           "popupMaxWidth": "95%",
                           "yaw": -73.96,
                           "rotationZ": 0,
                           "hideDuration": 500,
                           "class": "PopupPanoramaOverlay",
                           "id": "popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865",
                           "hfov": 6.64,
                           "rotationX": 0,
                           "rotationY": 0,
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
                           "popupDistance": 100,
                           "hideEasing": "cubic_out",
                           "popupMaxHeight": "95%"
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -132.82,
                             "hfov": 17.78,
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
                             "pitch": 1.59
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
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
                             "hfov": 17.78,
                             "distance": 50
                            }
                           ],
                           "id": "overlay_E37E9453_EF2C_E3EE_41CE_DD0115CEB1E5",
                           "data": {
                            "label": "La Lima"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 61,
                             "hfov": 27.31,
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
                             "pitch": 0.49
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
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
                             "hfov": 27.31,
                             "distance": 50
                            }
                           ],
                           "id": "overlay_E29702E5_EF2C_24AA_41DF_D1E8119A0A3F",
                           "data": {
                            "label": "TEC University"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupPanoramaOverlay(this.popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43, {'rollOverIconColor':'#CCCCCC','backgroundColorRatios':[0.09803921568627451],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverIconWidth':50,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_E253E6BD_EF1D_EC9A_41EA_C503E65D3053, null, null, null, null, false)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
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
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_0_0.png",
                                "width": 99,
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
                           "showEasing": "cubic_in",
                           "showDuration": 500,
                           "popupMaxWidth": "95%",
                           "yaw": -123.25,
                           "rotationZ": 0,
                           "hideDuration": 500,
                           "class": "PopupPanoramaOverlay",
                           "id": "popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43",
                           "hfov": 6.66,
                           "rotationX": 0,
                           "rotationY": 0,
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
                           "popupDistance": 100,
                           "hideEasing": "cubic_out",
                           "popupMaxHeight": "95%"
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -116.34,
                             "hfov": 8.66,
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
                             "pitch": -5.8
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
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
                             "hfov": 8.66,
                             "distance": 50
                            }
                           ],
                           "id": "overlay_E63D12C8_F662_39DB_4170_7EF640601D86",
                           "data": {
                            "label": "INA"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 97.38,
                             "hfov": 15.83,
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
                             "pitch": 1.23
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
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
                             "hfov": 15.83,
                             "distance": 50
                            }
                           ],
                           "id": "overlay_E75D89D8_F662_2BFB_41BB_D9250A0A17F6",
                           "data": {
                            "label": "Basilica"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -64.87,
                             "hfov": 12.22,
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
                             "pitch": 7.99
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
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
                             "hfov": 12.22,
                             "distance": 50
                            }
                           ],
                           "id": "overlay_E6D140FE_F662_D9B7_41ED_B6DDE5F11AEE",
                           "data": {
                            "label": "Irazu"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupPanoramaOverlay(this.popup_3CC23B7F_107F_4540_4180_ABF478E71F9A, {'rollOverIconColor':'#CCCCCC','backgroundColorRatios':[0.09803921568627451],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverIconWidth':50,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_20FB6245_107F_4740_41A8_9C0A46A92B4D, null, null, null, null, false)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
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
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_12_0.png",
                                "width": 99,
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
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -104.29,
                             "hfov": 19.47,
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
                             "pitch": 3.74
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
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
                             "hfov": 19.47,
                             "distance": 50
                            }
                           ],
                           "id": "overlay_381D894C_1071_C540_41AF_D6F0E2E79C30",
                           "data": {
                            "label": "Bus Station"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupPanoramaOverlay(this.popup_3BBE3C5B_107F_C340_4178_756995F5135C, {'rollOverIconColor':'#CCCCCC','backgroundColorRatios':[0.09803921568627451],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverIconWidth':50,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, null, null, null, null, null, false)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
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
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_14_0.png",
                                "width": 99,
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
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -85.73,
                             "hfov": 22.05,
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
                             "pitch": -2.84
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
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
                             "hfov": 22.05,
                             "distance": 50
                            }
                           ],
                           "id": "overlay_3BFABA4C_1071_4740_4194_C4FC9991EEE4",
                           "data": {
                            "label": "Train Station"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "showEasing": "cubic_in",
                           "showDuration": 500,
                           "popupMaxWidth": "95%",
                           "yaw": -105.77,
                           "rotationZ": 0,
                           "hideDuration": 500,
                           "class": "PopupPanoramaOverlay",
                           "id": "popup_3CC23B7F_107F_4540_4180_ABF478E71F9A",
                           "hfov": 6.7,
                           "rotationX": 0,
                           "rotationY": 0,
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
                           "popupDistance": 100,
                           "hideEasing": "cubic_out",
                           "popupMaxHeight": "95%"
                          },
                          {
                           "showEasing": "cubic_in",
                           "showDuration": 500,
                           "popupMaxWidth": "95%",
                           "yaw": -99.48,
                           "rotationZ": 0,
                           "hideDuration": 500,
                           "class": "PopupPanoramaOverlay",
                           "id": "popup_3BBE3C5B_107F_C340_4178_756995F5135C",
                           "hfov": 6.69,
                           "rotationX": 0,
                           "rotationY": 0,
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
                           "popupDistance": 100,
                           "hideEasing": "cubic_out",
                           "popupMaxHeight": "95%"
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupPanoramaOverlay(this.popup_209897EC_11B3_4D40_41A2_837DB50E3A59, {'rollOverIconColor':'#CCCCCC','backgroundColorRatios':[0.09803921568627451],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverIconWidth':50,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, null, null, null, null, null, false)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
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
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_16_0.png",
                                "width": 99,
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
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -69.51,
                             "hfov": 17.1,
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
                             "pitch": 1.99
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
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
                             "hfov": 17.1,
                             "distance": 50
                            }
                           ],
                           "id": "overlay_21F8CB1B_11B7_C6C1_41A4_790E87B46214",
                           "data": {
                            "label": "COVAO"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "showEasing": "cubic_in",
                           "showDuration": 500,
                           "popupMaxWidth": "95%",
                           "yaw": -80.67,
                           "rotationZ": 0,
                           "hideDuration": 500,
                           "class": "PopupPanoramaOverlay",
                           "id": "popup_209897EC_11B3_4D40_41A2_837DB50E3A59",
                           "hfov": 6.69,
                           "rotationX": 0,
                           "rotationY": 0,
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
                           "popupDistance": 100,
                           "hideEasing": "cubic_out",
                           "popupMaxHeight": "95%"
                          }
                         ],
                         "thumbnailUrl": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_t.jpg",
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
                       "mapLocations": [
                        {
                         "map": {
                          "minimumZoomFactor": 0.5,
                          "fieldOfViewOverlayInsideColor": "#000000",
                          "class": "Map",
                          "label": "Costa-Rica-Map",
                          "id": "map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
                          "width": 500,
                          "fieldOfViewOverlayRadiusScale": 0.33,
                          "maximumZoomFactor": 1.2,
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
                          "scaleMode": "fit_inside",
                          "overlays": [
                           {
                            "useHandCursor": true,
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "click": "this.mainPlayList.set('selectedIndex', 9)",
                              "mapColor": "#FF0000"
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
                                "class": "ImageResourceLevel",
                                "url": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_HS_0.png",
                                "width": 50,
                                "height": 49
                               }
                              ]
                             }
                            },
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
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "id": "overlay_E2A9E771_EFFC_6DAB_41ED_732E2F091F5A",
                            "data": {
                             "label": "Image"
                            }
                           }
                          ],
                          "fieldOfViewOverlayOutsideOpacity": 0,
                          "initialZoomFactor": 1,
                          "fieldOfViewOverlayInsideOpacity": 0.4,
                          "fieldOfViewOverlayOutsideColor": "#000000",
                          "height": 563,
                          "thumbnailUrl": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_t.png"
                         },
                         "x": 305.3,
                         "angle": 93.36,
                         "y": 253.1,
                         "class": "PanoramaMapLocation"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_t.jpg"
                      },
                      "backwardYaw": -144.74,
                      "yaw": 159.92,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8"
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "class": "Panorama",
                       "label": "1.2-Main Entrance",
                       "id": "panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
                         "backwardYaw": 174.57,
                         "yaw": -25.53,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
                         "backwardYaw": -19.33,
                         "yaw": 150.13,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "class": "Panorama",
                          "label": "3-Detail CC",
                          "id": "panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714"
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "class": "Panorama",
                             "label": "Lobby",
                             "id": "panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "class": "Panorama",
                                "label": "3_1",
                                "id": "panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
                                  "backwardYaw": -176.55,
                                  "yaw": 176.9,
                                  "distance": 1
                                 }
                                ],
                                "pitch": 0,
                                "partial": false,
                                "vfov": 180,
                                "cardboardMenu": "this.Menu_90F5FBAC_875E_A2C2_41CA_7C6A2740C6EA",
                                "hfovMax": 120,
                                "hfov": 360,
                                "hfovMin": 100,
                                "frames": [
                                 {
                                  "class": "CubicPanoramaFrame",
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_9F4A6CD7_875E_A64E_41C1_0BABC8A45D6C); this.mainPlayList.set('selectedIndex', 1)",
                                      "mapColor": "image"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_0_HS_0_0.png",
                                         "width": 120,
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
                                  "thumbnailUrl": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_t.jpg",
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
                                "mapLocations": [
                                 {
                                  "map": {
                                   "minimumZoomFactor": 0.5,
                                   "fieldOfViewOverlayInsideColor": "#000000",
                                   "class": "Map",
                                   "label": "Planta",
                                   "id": "map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                   "width": 415,
                                   "fieldOfViewOverlayRadiusScale": 0.19,
                                   "maximumZoomFactor": 1.2,
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
                                   "scaleMode": "fit_inside",
                                   "overlays": [
                                    {
                                     "useHandCursor": true,
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 1)",
                                       "mapColor": "#FF0000"
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_0.png",
                                         "width": 29,
                                         "height": 30
                                        }
                                       ]
                                      }
                                     },
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
                                     "class": "AreaHotspotMapOverlay",
                                     "rollOverDisplay": true,
                                     "id": "overlay_C10F34C4_DD09_E665_41EB_0E9F8F32C5EE",
                                     "data": {
                                      "label": "Image"
                                     }
                                    },
                                    {
                                     "useHandCursor": true,
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 3)",
                                       "mapColor": "#FF0000"
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_1.png",
                                         "width": 29,
                                         "height": 30
                                        }
                                       ]
                                      }
                                     },
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
                                     "class": "AreaHotspotMapOverlay",
                                     "rollOverDisplay": true,
                                     "id": "overlay_C057DBDB_DD0A_6267_41DF_74197503054E",
                                     "data": {
                                      "label": "Image"
                                     }
                                    },
                                    {
                                     "useHandCursor": true,
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 10)",
                                       "mapColor": "#FF0000"
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_2.png",
                                         "width": 29,
                                         "height": 30
                                        }
                                       ]
                                      }
                                     },
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
                                     "class": "AreaHotspotMapOverlay",
                                     "rollOverDisplay": true,
                                     "id": "overlay_C1A62C4E_DD0B_E665_41E4_24E80204A343",
                                     "data": {
                                      "label": "Image"
                                     }
                                    },
                                    {
                                     "useHandCursor": true,
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 11)",
                                       "mapColor": "#FF0000"
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_3.png",
                                         "width": 29,
                                         "height": 30
                                        }
                                       ]
                                      }
                                     },
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
                                     "class": "AreaHotspotMapOverlay",
                                     "rollOverDisplay": true,
                                     "id": "overlay_C0CBF35A_DD0A_E26D_41D4_D1DC41F86387",
                                     "data": {
                                      "label": "Image"
                                     }
                                    },
                                    {
                                     "useHandCursor": true,
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 5)",
                                       "mapColor": "#FF0000"
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_4.png",
                                         "width": 29,
                                         "height": 30
                                        }
                                       ]
                                      }
                                     },
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
                                     "class": "AreaHotspotMapOverlay",
                                     "rollOverDisplay": true,
                                     "id": "overlay_C01B30DE_DD09_BE65_41DD_D62C14826FDF",
                                     "data": {
                                      "label": "Image"
                                     }
                                    },
                                    {
                                     "useHandCursor": true,
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 4)",
                                       "mapColor": "#FF0000"
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_5.png",
                                         "width": 29,
                                         "height": 30
                                        }
                                       ]
                                      }
                                     },
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
                                     "class": "AreaHotspotMapOverlay",
                                     "rollOverDisplay": true,
                                     "id": "overlay_C332A511_DD0E_A7FC_41E4_2786EB8DD2F7",
                                     "data": {
                                      "label": "Image"
                                     }
                                    },
                                    {
                                     "useHandCursor": true,
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 6)",
                                       "mapColor": "#FF0000"
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_6.png",
                                         "width": 29,
                                         "height": 30
                                        }
                                       ]
                                      }
                                     },
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
                                     "class": "AreaHotspotMapOverlay",
                                     "rollOverDisplay": true,
                                     "id": "overlay_C0B9B7F7_DD0E_6224_41E8_445361C5C9E4",
                                     "data": {
                                      "label": "Image"
                                     }
                                    },
                                    {
                                     "useHandCursor": true,
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 12)",
                                       "mapColor": "#FF0000"
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_7.png",
                                         "width": 29,
                                         "height": 30
                                        }
                                       ]
                                      }
                                     },
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
                                     "class": "AreaHotspotMapOverlay",
                                     "rollOverDisplay": true,
                                     "id": "overlay_C3F85A31_DD0F_E23C_41DC_6258471D9794",
                                     "data": {
                                      "label": "Image"
                                     }
                                    },
                                    {
                                     "useHandCursor": true,
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 14)",
                                       "mapColor": "#FF0000"
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_8.png",
                                         "width": 29,
                                         "height": 30
                                        }
                                       ]
                                      }
                                     },
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
                                     "class": "AreaHotspotMapOverlay",
                                     "rollOverDisplay": true,
                                     "id": "overlay_C30E80C5_DD0E_9E67_41E5_F7EA65B0847D",
                                     "data": {
                                      "label": "Image"
                                     }
                                    },
                                    {
                                     "useHandCursor": true,
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 13)",
                                       "mapColor": "#FF0000"
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_9.png",
                                         "width": 29,
                                         "height": 30
                                        }
                                       ]
                                      }
                                     },
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
                                     "class": "AreaHotspotMapOverlay",
                                     "rollOverDisplay": true,
                                     "id": "overlay_C3598F78_DD0E_622C_41E9_FCE2210BA50E",
                                     "data": {
                                      "label": "Image"
                                     }
                                    },
                                    {
                                     "useHandCursor": true,
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_10.png",
                                         "width": 29,
                                         "height": 30
                                        }
                                       ]
                                      }
                                     },
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
                                     "class": "AreaHotspotMapOverlay",
                                     "rollOverDisplay": true,
                                     "id": "overlay_C3A2F1BB_DD09_9E2C_41E6_AEB47B5FEE36",
                                     "data": {
                                      "label": "Image"
                                     }
                                    },
                                    {
                                     "useHandCursor": true,
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_11.png",
                                         "width": 29,
                                         "height": 30
                                        }
                                       ]
                                      }
                                     },
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
                                     "class": "AreaHotspotMapOverlay",
                                     "rollOverDisplay": true,
                                     "id": "overlay_C3966761_DD0A_E25F_41D3_527C5C447FFE",
                                     "data": {
                                      "label": "Image"
                                     }
                                    },
                                    {
                                     "useHandCursor": true,
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_12.png",
                                         "width": 29,
                                         "height": 30
                                        }
                                       ]
                                      }
                                     },
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
                                     "class": "AreaHotspotMapOverlay",
                                     "rollOverDisplay": true,
                                     "id": "overlay_C2AD60A4_DD09_9E24_41E0_BE7A28E7C8F8",
                                     "data": {
                                      "label": "Image"
                                     }
                                    },
                                    {
                                     "useHandCursor": true,
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 8)",
                                       "mapColor": "#FF0000"
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_13.png",
                                         "width": 30,
                                         "height": 30
                                        }
                                       ]
                                      }
                                     },
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
                                     "class": "AreaHotspotMapOverlay",
                                     "rollOverDisplay": true,
                                     "id": "overlay_EFFAE3BA_DD3F_A22D_41DB_87FABC0F13CA",
                                     "data": {
                                      "label": "Image"
                                     }
                                    },
                                    {
                                     "useHandCursor": true,
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 16)",
                                       "mapColor": "#FF0000"
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_14.png",
                                         "width": 30,
                                         "height": 30
                                        }
                                       ]
                                      }
                                     },
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
                                     "class": "AreaHotspotMapOverlay",
                                     "rollOverDisplay": true,
                                     "id": "overlay_2A070BB7_27CE_576F_41AB_07E104B79EC6",
                                     "data": {
                                      "label": "Image"
                                     }
                                    },
                                    {
                                     "useHandCursor": true,
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 2)",
                                       "mapColor": "#FF0000"
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_15.png",
                                         "width": 30,
                                         "height": 30
                                        }
                                       ]
                                      }
                                     },
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
                                     "class": "AreaHotspotMapOverlay",
                                     "rollOverDisplay": true,
                                     "id": "overlay_376F3930_27CA_D361_4190_7CF2D4BA616B",
                                     "data": {
                                      "label": "Image"
                                     }
                                    },
                                    {
                                     "useHandCursor": true,
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 7)",
                                       "mapColor": "#FF0000"
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_16.png",
                                         "width": 30,
                                         "height": 30
                                        }
                                       ]
                                      }
                                     },
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
                                     "class": "AreaHotspotMapOverlay",
                                     "rollOverDisplay": true,
                                     "id": "overlay_3778DCE6_27D7_D2E1_41C3_D9B03693BA2C",
                                     "data": {
                                      "label": "Image"
                                     }
                                    },
                                    {
                                     "useHandCursor": true,
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 15)",
                                       "mapColor": "#FF0000"
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_17.png",
                                         "width": 30,
                                         "height": 30
                                        }
                                       ]
                                      }
                                     },
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
                                     "class": "AreaHotspotMapOverlay",
                                     "rollOverDisplay": true,
                                     "id": "overlay_3686017A_27D6_53E6_41C2_468B88D59841",
                                     "data": {
                                      "label": "Image"
                                     }
                                    }
                                   ],
                                   "fieldOfViewOverlayOutsideOpacity": 0,
                                   "initialZoomFactor": 1,
                                   "fieldOfViewOverlayInsideOpacity": 0.4,
                                   "fieldOfViewOverlayOutsideColor": "#000000",
                                   "height": 558,
                                   "thumbnailUrl": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_t.png"
                                  },
                                  "x": 242.65,
                                  "angle": -267.85,
                                  "y": 430.8,
                                  "class": "PanoramaMapLocation"
                                 }
                                ],
                                "thumbnailUrl": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_t.jpg"
                               },
                               "backwardYaw": 176.9,
                               "yaw": -176.55,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
                               "backwardYaw": -59.69,
                               "yaw": -91.85,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "class": "Panorama",
                                "label": "asensores",
                                "id": "panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "class": "Panorama",
                                   "label": "Parking Garage",
                                   "id": "panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "class": "Panorama",
                                      "label": "parking2",
                                      "id": "panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
                                        "backwardYaw": 99.63,
                                        "yaw": -61.02,
                                        "distance": 1
                                       }
                                      ],
                                      "pitch": 0,
                                      "partial": false,
                                      "vfov": 180,
                                      "cardboardMenu": "this.Menu_90F5FBAC_875E_A2C2_41CA_7C6A2740C6EA",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "hfovMin": 100,
                                      "frames": [
                                       {
                                        "class": "SphericPanoramaFrame",
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
                                        },
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_9F980D96_875E_A6CE_41BC_5AFB73988908); this.mainPlayList.set('selectedIndex', 7)",
                                            "mapColor": "image"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
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
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_0_HS_0_0.png",
                                               "width": 118,
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
                                          "bleachingDistance": 0.4,
                                          "pitch": 16.72,
                                          "class": "LensFlarePanoramaOverlay",
                                          "id": "overlay_39DF8AEE_37C2_AC40_417A_6242CBF48B68",
                                          "bleaching": 0.7
                                         }
                                        ],
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
                                      "thumbnailUrl": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_t.jpg"
                                     },
                                     "backwardYaw": -61.02,
                                     "yaw": 99.63,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                                     "backwardYaw": -16.11,
                                     "yaw": -3.13,
                                     "distance": 1
                                    }
                                   ],
                                   "pitch": 0,
                                   "partial": false,
                                   "vfov": 180,
                                   "cardboardMenu": "this.Menu_90F5FBAC_875E_A2C2_41CA_7C6A2740C6EA",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "hfovMin": 100,
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
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
                                     },
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_91288F52_875E_A246_41D5_12C967B2B5DB); this.mainPlayList.set('selectedIndex', 16)",
                                         "mapColor": "image"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
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
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_0_HS_0_0.png",
                                            "width": 118,
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
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175, this.camera_91204F45_875E_A242_41B1_1BAA156A9238); this.mainPlayList.set('selectedIndex', 15)",
                                         "mapColor": "image"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
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
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_0_HS_1_0.png",
                                            "width": 118,
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
                                   "thumbnailUrl": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_t.jpg"
                                  },
                                  "backwardYaw": -3.13,
                                  "yaw": -16.11,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "class": "Panorama",
                                   "label": "Restrooms",
                                   "id": "panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                                     "backwardYaw": -166.68,
                                     "yaw": 27.08,
                                     "distance": 1
                                    }
                                   ],
                                   "pitch": 0,
                                   "partial": false,
                                   "vfov": 180,
                                   "cardboardMenu": "this.Menu_90F5FBAC_875E_A2C2_41CA_7C6A2740C6EA",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "hfovMin": 100,
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
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
                                     },
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_91FE6F92_875E_A2C6_41DC_2F506BDA139D); this.mainPlayList.set('selectedIndex', 16)",
                                         "mapColor": "image"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
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
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_0_HS_0_0.png",
                                            "width": 120,
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
                                       "bleachingDistance": 0.4,
                                       "pitch": 59.4,
                                       "class": "LensFlarePanoramaOverlay",
                                       "id": "overlay_FE341697_EE9B_B5BB_41CC_1DCF1E1B9FE9",
                                       "bleaching": 0.7
                                      },
                                      {
                                       "yaw": -13.79,
                                       "bleachingDistance": 0.4,
                                       "pitch": 28.05,
                                       "class": "LensFlarePanoramaOverlay",
                                       "id": "overlay_FE452B9D_EE9B_93AF_41C8_E05C00B1EC74",
                                       "bleaching": 0.7
                                      },
                                      {
                                       "yaw": -151.67,
                                       "bleachingDistance": 0.4,
                                       "pitch": 31.07,
                                       "class": "LensFlarePanoramaOverlay",
                                       "id": "overlay_FE59F0F5_EE9B_8D7F_41E8_C632466F366D",
                                       "bleaching": 0.7
                                      }
                                     ],
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
                                   "thumbnailUrl": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_t.jpg"
                                  },
                                  "backwardYaw": 27.08,
                                  "yaw": -166.68,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "class": "Panorama",
                                   "label": "Main Floor",
                                   "id": "panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "class": "Panorama",
                                      "label": "9",
                                      "id": "panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
                                        "backwardYaw": -176.41,
                                        "yaw": 3.46,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "class": "Panorama",
                                         "label": "14",
                                         "id": "panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
                                           "backwardYaw": 99.45,
                                           "yaw": -85.38,
                                           "distance": 1
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "class": "Panorama",
                                            "label": "Conference Room",
                                            "id": "panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": {
                                               "class": "Panorama",
                                               "label": "Dining Room",
                                               "id": "panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
                                               "adjacentPanoramas": [
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
                                                 "backwardYaw": 66.4,
                                                 "yaw": -176.35,
                                                 "distance": 1
                                                }
                                               ],
                                               "pitch": 0,
                                               "partial": false,
                                               "vfov": 180,
                                               "cardboardMenu": "this.Menu_90F5FBAC_875E_A2C2_41CA_7C6A2740C6EA",
                                               "hfovMax": 120,
                                               "hfov": 360,
                                               "hfovMin": 100,
                                               "frames": [
                                                {
                                                 "class": "CubicPanoramaFrame",
                                                 "overlays": [
                                                  {
                                                   "useHandCursor": true,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_9E3C1E23_875E_A5C6_41B6_23E49537CD5C); this.mainPlayList.set('selectedIndex', 5)",
                                                     "mapColor": "image"
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
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
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_0_HS_0_0.png",
                                                        "width": 120,
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
                                                   "useHandCursor": true,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.showPopupPanoramaOverlay(this.popup_D60305E4_DCEA_D39F_419B_D9B149482827, {'rollOverIconColor':'#CCCCCC','backgroundColorRatios':[0.09803921568627451],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverIconWidth':50,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_D09C8172_DCEA_737B_41C7_76727B821C90, null, null, null, null, false)",
                                                     "mapColor": "image"
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
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
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_0_HS_1_0.png",
                                                        "width": 123,
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
                                                   "showEasing": "cubic_in",
                                                   "showDuration": 500,
                                                   "popupMaxWidth": "95%",
                                                   "yaw": 72.56,
                                                   "rotationZ": 0,
                                                   "hideDuration": 500,
                                                   "class": "PopupPanoramaOverlay",
                                                   "id": "popup_D60305E4_DCEA_D39F_419B_D9B149482827",
                                                   "hfov": 8.23,
                                                   "rotationX": 0,
                                                   "rotationY": 0,
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
                                                   "popupDistance": 100,
                                                   "hideEasing": "cubic_out",
                                                   "popupMaxHeight": "95%"
                                                  }
                                                 ],
                                                 "thumbnailUrl": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_t.jpg",
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
                                               "mapLocations": [
                                                {
                                                 "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                                 "x": 343.6,
                                                 "angle": -191.07,
                                                 "y": 332.55,
                                                 "class": "PanoramaMapLocation"
                                                }
                                               ],
                                               "thumbnailUrl": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_t.jpg"
                                              },
                                              "backwardYaw": -176.35,
                                              "yaw": 66.4,
                                              "distance": 1
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
                                              "backwardYaw": 72.07,
                                              "yaw": -117.42,
                                              "distance": 1
                                             }
                                            ],
                                            "pitch": 0,
                                            "partial": false,
                                            "vfov": 180,
                                            "cardboardMenu": "this.Menu_90F5FBAC_875E_A2C2_41CA_7C6A2740C6EA",
                                            "hfovMax": 120,
                                            "hfov": 360,
                                            "hfovMin": 100,
                                            "frames": [
                                             {
                                              "class": "CubicPanoramaFrame",
                                              "overlays": [
                                               {
                                                "useHandCursor": true,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_91A26FE8_875E_A242_41D5_AFC41560FD20); this.mainPlayList.set('selectedIndex', 11)",
                                                  "mapColor": "image"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
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
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_0_HS_1_0.png",
                                                     "width": 120,
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
                                                "useHandCursor": true,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D, this.camera_91BCBFDC_875E_A242_41CC_01518B86EF52); this.mainPlayList.set('selectedIndex', 4)",
                                                  "mapColor": "image"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
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
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_0_HS_0_0.png",
                                                     "width": 120,
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
                                              "thumbnailUrl": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_t.jpg",
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
                                            "mapLocations": [
                                             {
                                              "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                              "x": 317.7,
                                              "angle": 92.31,
                                              "y": 218.55,
                                              "class": "PanoramaMapLocation"
                                             }
                                            ],
                                            "thumbnailUrl": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_t.jpg"
                                           },
                                           "backwardYaw": -117.42,
                                           "yaw": 72.07,
                                           "distance": 1
                                          }
                                         ],
                                         "pitch": 0,
                                         "partial": false,
                                         "vfov": 180,
                                         "cardboardMenu": "this.Menu_90F5FBAC_875E_A2C2_41CA_7C6A2740C6EA",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "hfovMin": 80,
                                         "frames": [
                                          {
                                           "class": "CubicPanoramaFrame",
                                           "overlays": [
                                            {
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_9F656D01_875E_A7C2_41D1_27A9181C4342); this.mainPlayList.set('selectedIndex', 10)",
                                               "mapColor": "image"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
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
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_1_0.png",
                                                  "width": 118,
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
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_9F169D13_875E_A7C6_41C1_AFDAC1AE1F7D); this.mainPlayList.set('selectedIndex', 5)",
                                               "mapColor": "image"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
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
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_0_0.png",
                                                  "width": 118,
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
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.showPopupPanoramaOverlay(this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4, {'rollOverIconColor':'#CCCCCC','backgroundColorRatios':[0.09803921568627451],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverIconWidth':50,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_D082516E_DCEA_7368_41CB_9D0CFA830713, null, null, null, null, false)",
                                               "mapColor": "image"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
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
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_4_0.png",
                                                  "width": 123,
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
                                             "showEasing": "cubic_in",
                                             "showDuration": 500,
                                             "popupMaxWidth": "95%",
                                             "yaw": -36.13,
                                             "rotationZ": 0,
                                             "hideDuration": 500,
                                             "class": "PopupPanoramaOverlay",
                                             "id": "popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
                                             "hfov": 8.22,
                                             "rotationX": 0,
                                             "rotationY": 0,
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
                                             "popupDistance": 100,
                                             "hideEasing": "cubic_out",
                                             "popupMaxHeight": "95%"
                                            },
                                            {
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.showPopupPanoramaOverlay(this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE, {'rollOverIconColor':'#CCCCCC','backgroundColorRatios':[0.09803921568627451],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverIconWidth':50,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_D38C2C6E_DFA1_73F8_41C3_8C1C155D72CB, null, null, null, null, false)",
                                               "mapColor": "image"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
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
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_3_0.png",
                                                  "width": 123,
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
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.showPopupPanoramaOverlay(this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA, {'rollOverIconColor':'#CCCCCC','backgroundColorRatios':[0.09803921568627451],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverIconWidth':50,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_D09DC170_DCEA_7378_41EB_423962A6DDEA, null, null, null, null, false)",
                                               "mapColor": "image"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
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
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_2_0.png",
                                                  "width": 123,
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
                                             "showEasing": "cubic_in",
                                             "showDuration": 500,
                                             "popupMaxWidth": "95%",
                                             "yaw": 102.19,
                                             "rotationZ": 0,
                                             "hideDuration": 500,
                                             "class": "PopupPanoramaOverlay",
                                             "id": "popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
                                             "hfov": 8.24,
                                             "rotationX": 0,
                                             "rotationY": 0,
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
                                             "popupDistance": 100,
                                             "hideEasing": "cubic_out",
                                             "popupMaxHeight": "95%"
                                            },
                                            {
                                             "yaw": 4,
                                             "bleachingDistance": 0.4,
                                             "pitch": 29.81,
                                             "class": "LensFlarePanoramaOverlay",
                                             "id": "overlay_D4A17713_DF66_0D7B_41EA_88920C3D3D96",
                                             "bleaching": 0.7
                                            },
                                            {
                                             "yaw": 125.52,
                                             "bleachingDistance": 0.4,
                                             "pitch": 33.62,
                                             "class": "LensFlarePanoramaOverlay",
                                             "id": "overlay_D4BC6C09_DF66_0357_41CE_9C3B75EE1C61",
                                             "bleaching": 0.7
                                            },
                                            {
                                             "yaw": -105.71,
                                             "bleachingDistance": 0.4,
                                             "pitch": 19.14,
                                             "class": "LensFlarePanoramaOverlay",
                                             "id": "overlay_D4BAE022_DF66_0355_41EA_F8574F4021B9",
                                             "bleaching": 0.7
                                            },
                                            {
                                             "showEasing": "cubic_in",
                                             "showDuration": 500,
                                             "popupMaxWidth": "95%",
                                             "yaw": -170.82,
                                             "rotationZ": 0,
                                             "hideDuration": 500,
                                             "class": "PopupPanoramaOverlay",
                                             "id": "popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
                                             "hfov": 8.15,
                                             "rotationX": 0,
                                             "rotationY": 0,
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
                                             "popupDistance": 100,
                                             "hideEasing": "cubic_out",
                                             "popupMaxHeight": "95%"
                                            }
                                           ],
                                           "thumbnailUrl": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_t.jpg",
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
                                         "mapLocations": [
                                          {
                                           "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                           "x": 88.7,
                                           "angle": 83.39,
                                           "y": 228.55,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
                                         "thumbnailUrl": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_t.jpg"
                                        },
                                        "backwardYaw": -85.38,
                                        "yaw": 99.45,
                                        "distance": 1
                                       }
                                      ],
                                      "pitch": 0,
                                      "partial": false,
                                      "vfov": 180,
                                      "cardboardMenu": "this.Menu_90F5FBAC_875E_A2C2_41CA_7C6A2740C6EA",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "hfovMin": 80,
                                      "frames": [
                                       {
                                        "class": "CubicPanoramaFrame",
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_91821FC5_875E_A242_41E0_21F9156B6A7E); this.mainPlayList.set('selectedIndex', 3)",
                                            "mapColor": "image"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
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
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_0_HS_1_0.png",
                                               "width": 118,
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
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_9189AFD0_875E_A242_41D1_BBCF0813949C); this.mainPlayList.set('selectedIndex', 11)",
                                            "mapColor": "image"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
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
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_0_HS_0_0.png",
                                               "width": 118,
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
                                          "bleachingDistance": 0.4,
                                          "pitch": 16.86,
                                          "class": "LensFlarePanoramaOverlay",
                                          "id": "overlay_D364F048_DF66_03D5_41E1_5EA3BC9637F0",
                                          "bleaching": 0.7
                                         },
                                         {
                                          "yaw": 164.38,
                                          "bleachingDistance": 0.4,
                                          "pitch": 16.1,
                                          "class": "LensFlarePanoramaOverlay",
                                          "id": "overlay_D37D2F7A_DF66_1DB5_41C0_1FB80896FEB3",
                                          "bleaching": 0.7
                                         }
                                        ],
                                        "thumbnailUrl": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_t.jpg",
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
                                      "mapLocations": [
                                       {
                                        "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                        "x": 86.7,
                                        "angle": 80.77,
                                        "y": 121.65,
                                        "class": "PanoramaMapLocation"
                                       }
                                      ],
                                      "thumbnailUrl": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_t.jpg"
                                     },
                                     "backwardYaw": 3.46,
                                     "yaw": -176.41,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                                     "backwardYaw": -139.07,
                                     "yaw": 96.47,
                                     "distance": 1
                                    }
                                   ],
                                   "pitch": 0,
                                   "partial": false,
                                   "vfov": 180,
                                   "cardboardMenu": "this.Menu_90F5FBAC_875E_A2C2_41CA_7C6A2740C6EA",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "hfovMin": 100,
                                   "frames": [
                                    {
                                     "class": "CubicPanoramaFrame",
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_90008050_875E_9E42_41C4_C89EFBA7916C); this.mainPlayList.set('selectedIndex', 16)",
                                         "mapColor": "image"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
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
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_0_HS_1_0.png",
                                            "width": 120,
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
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_901FD043_875E_9E46_41B1_4610D50FDE69); this.mainPlayList.set('selectedIndex', 10)",
                                         "mapColor": "image"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
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
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_0_HS_0_0.png",
                                            "width": 120,
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
                                       "bleachingDistance": 0.4,
                                       "pitch": 19.14,
                                       "class": "LensFlarePanoramaOverlay",
                                       "id": "overlay_D4BE7E36_DF66_3FBD_41E5_D711B6782282",
                                       "bleaching": 0.7
                                      },
                                      {
                                       "yaw": 164.38,
                                       "bleachingDistance": 0.4,
                                       "pitch": 17.62,
                                       "class": "LensFlarePanoramaOverlay",
                                       "id": "overlay_D4BB02EB_DF66_04AB_41E7_314E72AF48E7",
                                       "bleaching": 0.7
                                      }
                                     ],
                                     "thumbnailUrl": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_t.jpg",
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
                                   "mapLocations": [
                                    {
                                     "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                     "x": 215.7,
                                     "angle": 87.93,
                                     "y": 119.65,
                                     "class": "PanoramaMapLocation"
                                    }
                                   ],
                                   "thumbnailUrl": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_t.jpg"
                                  },
                                  "backwardYaw": 96.47,
                                  "yaw": -139.07,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
                                  "backwardYaw": 87.33,
                                  "yaw": 32.92,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "class": "Panorama",
                                   "label": "Empty Shell",
                                   "id": "panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "class": "Panorama",
                                      "label": "18",
                                      "id": "panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "class": "Panorama",
                                         "label": "19",
                                         "id": "panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
                                           "backwardYaw": 133.34,
                                           "yaw": -31.12,
                                           "distance": 1
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "class": "Panorama",
                                            "label": "20",
                                            "id": "panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
                                              "backwardYaw": 147.18,
                                              "yaw": -34.22,
                                              "distance": 1
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
                                              "backwardYaw": 56.43,
                                              "yaw": -146.27,
                                              "distance": 1
                                             }
                                            ],
                                            "pitch": 0,
                                            "partial": false,
                                            "vfov": 180,
                                            "cardboardMenu": "this.Menu_90F5FBAC_875E_A2C2_41CA_7C6A2740C6EA",
                                            "hfovMax": 120,
                                            "hfov": 360,
                                            "hfovMin": 100,
                                            "frames": [
                                             {
                                              "class": "CubicPanoramaFrame",
                                              "overlays": [
                                               {
                                                "useHandCursor": true,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_9039D06B_875E_9E46_41DE_FBF6D99EAB45); this.mainPlayList.set('selectedIndex', 14)",
                                                  "mapColor": "image"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
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
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_0_HS_1_0.png",
                                                     "width": 117,
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
                                                "useHandCursor": true,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_9035A05F_875E_9E7E_41D3_9AA9C6C574AD); this.mainPlayList.set('selectedIndex', 6)",
                                                  "mapColor": "image"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
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
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_0_HS_0_0.png",
                                                     "width": 117,
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
                                              "thumbnailUrl": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_t.jpg",
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
                                            "mapLocations": [
                                             {
                                              "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                              "x": 81.65,
                                              "angle": 171.27,
                                              "y": 232.55,
                                              "class": "PanoramaMapLocation"
                                             }
                                            ],
                                            "thumbnailUrl": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_t.jpg"
                                           },
                                           "backwardYaw": -146.27,
                                           "yaw": 56.43,
                                           "distance": 1
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6"
                                          }
                                         ],
                                         "pitch": 0,
                                         "partial": false,
                                         "vfov": 180,
                                         "cardboardMenu": "this.Menu_90F5FBAC_875E_A2C2_41CA_7C6A2740C6EA",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "hfovMin": 100,
                                         "frames": [
                                          {
                                           "class": "CubicPanoramaFrame",
                                           "overlays": [
                                            {
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_9FAE6DBC_875E_A6C2_4137_DE9ED38918B0); this.mainPlayList.set('selectedIndex', 12)",
                                               "mapColor": "image"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
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
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_1_0.png",
                                                  "width": 119,
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
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_9E504DC8_875E_A642_41DF_A7B5CBF3A8A5); this.mainPlayList.set('selectedIndex', 13)",
                                               "mapColor": "image"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
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
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_0_0.png",
                                                  "width": 118,
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
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.mainPlayList.set('selectedIndex', 1)",
                                               "mapColor": "image"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
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
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_2_0.png",
                                                  "width": 131,
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
                                           "thumbnailUrl": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_t.jpg",
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
                                         "mapLocations": [
                                          {
                                           "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                           "x": 218.65,
                                           "angle": 180,
                                           "y": 100.55,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
                                         "thumbnailUrl": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_t.jpg"
                                        },
                                        "backwardYaw": -31.12,
                                        "yaw": 133.34,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
                                        "backwardYaw": -134.96,
                                        "yaw": 39.43,
                                        "distance": 1
                                       }
                                      ],
                                      "pitch": 0,
                                      "partial": false,
                                      "vfov": 180,
                                      "cardboardMenu": "this.Menu_90F5FBAC_875E_A2C2_41CA_7C6A2740C6EA",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "hfovMin": 100,
                                      "frames": [
                                       {
                                        "class": "CubicPanoramaFrame",
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_9F967D8A_875E_A6C6_4178_BD7BE618558F); this.mainPlayList.set('selectedIndex', 6)",
                                            "mapColor": "image"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
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
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_0_HS_1_0.png",
                                               "width": 118,
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
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_9FE5BD7E_875E_A63E_41CE_2EECAEC028F1); this.mainPlayList.set('selectedIndex', 14)",
                                            "mapColor": "image"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
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
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_0_HS_0_0.png",
                                               "width": 118,
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
                                        "thumbnailUrl": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_t.jpg",
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
                                      "mapLocations": [
                                       {
                                        "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                        "x": 333.7,
                                        "angle": -175.06,
                                        "y": 230.55,
                                        "class": "PanoramaMapLocation"
                                       }
                                      ],
                                      "thumbnailUrl": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_t.jpg"
                                     },
                                     "backwardYaw": 39.43,
                                     "yaw": -134.96,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
                                     "backwardYaw": -34.22,
                                     "yaw": 147.18,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                                     "backwardYaw": -76.25,
                                     "yaw": -170.05,
                                     "distance": 1
                                    }
                                   ],
                                   "pitch": 0,
                                   "partial": false,
                                   "vfov": 180,
                                   "cardboardMenu": "this.Menu_90F5FBAC_875E_A2C2_41CA_7C6A2740C6EA",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "hfovMin": 100,
                                   "frames": [
                                    {
                                     "class": "CubicPanoramaFrame",
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_9E2EAE2F_875E_A5DE_41D3_C2D3F8202E47); this.mainPlayList.set('selectedIndex', 12)",
                                         "mapColor": "image"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
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
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_1_0.png",
                                            "width": 118,
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
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_9ED08E3B_875E_A5C6_41AA_05685690035D); this.mainPlayList.set('selectedIndex', 13)",
                                         "mapColor": "image"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
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
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_0_0.png",
                                            "width": 118,
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
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_91493E86_875E_A2CE_41E0_9841E3C7B081); this.mainPlayList.set('selectedIndex', 16)",
                                         "mapColor": "image"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
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
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_3_0.png",
                                            "width": 118,
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
                                     "thumbnailUrl": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_t.jpg",
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
                                   "mapLocations": [
                                    {
                                     "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                                     "x": 215.7,
                                     "angle": 177.75,
                                     "y": 376.6,
                                     "class": "PanoramaMapLocation"
                                    }
                                   ],
                                   "thumbnailUrl": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_t.jpg"
                                  },
                                  "backwardYaw": -170.05,
                                  "yaw": -76.25,
                                  "distance": 1
                                 }
                                ],
                                "pitch": 0,
                                "partial": false,
                                "vfov": 180,
                                "cardboardMenu": "this.Menu_90F5FBAC_875E_A2C2_41CA_7C6A2740C6EA",
                                "hfovMax": 120,
                                "hfov": 360,
                                "hfovMin": 100,
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
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
                                  },
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_9165AEB6_875E_A2CE_41AE_C9D93CC33882); this.mainPlayList.set('selectedIndex', 1)",
                                      "mapColor": "image"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_0_0.png",
                                         "width": 117,
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
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3, this.camera_917ECE9E_875E_A2FE_41C6_68715D4FB248); this.mainPlayList.set('selectedIndex', 2)",
                                      "mapColor": "image"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_1_0.png",
                                         "width": 118,
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
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_916E4EC3_875E_A246_41A0_62F0738BACBB); this.mainPlayList.set('selectedIndex', 6)",
                                      "mapColor": "image"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_2_0.png",
                                         "width": 117,
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
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_9175EE92_875E_A2C6_41C0_26DFB433FD5C); this.mainPlayList.set('selectedIndex', 7)",
                                      "mapColor": "image"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_3_0.png",
                                         "width": 117,
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
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_917B3EAA_875E_A2C6_4119_571F29AF0B80); this.mainPlayList.set('selectedIndex', 3)",
                                      "mapColor": "image"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_4_0.png",
                                         "width": 118,
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
                                    "bleachingDistance": 0.4,
                                    "pitch": 44.67,
                                    "class": "LensFlarePanoramaOverlay",
                                    "id": "overlay_39E9E5BE_37C2_E4C0_41C8_ED2101A9B7E1",
                                    "bleaching": 0.7
                                   },
                                   {
                                    "yaw": 14.17,
                                    "bleachingDistance": 0.4,
                                    "pitch": 28.8,
                                    "class": "LensFlarePanoramaOverlay",
                                    "id": "overlay_39F9CEF7_37C2_E441_4193_83EA81D1DE6F",
                                    "bleaching": 0.7
                                   }
                                  ],
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
                                "thumbnailUrl": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_t.jpg"
                               },
                               "backwardYaw": 32.92,
                               "yaw": 87.33,
                               "distance": 1
                              }
                             ],
                             "pitch": 0,
                             "partial": false,
                             "vfov": 180,
                             "cardboardMenu": "this.Menu_90F5FBAC_875E_A2C2_41CA_7C6A2740C6EA",
                             "hfovMax": 120,
                             "hfov": 360,
                             "hfovMin": 100,
                             "frames": [
                              {
                               "class": "CubicPanoramaFrame",
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_9139EF3A_875E_A3C6_41C6_2DE1C25CF558); this.mainPlayList.set('selectedIndex', 16)",
                                   "mapColor": "image"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_1_0.png",
                                      "width": 119,
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
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104, this.camera_91349F20_875E_A3C2_41C4_73D830AE286C); this.mainPlayList.set('selectedIndex', 8)",
                                   "mapColor": "image"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_0_0.png",
                                      "width": 117,
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
                                 "bleachingDistance": 0.4,
                                 "pitch": -1.05,
                                 "class": "LensFlarePanoramaOverlay",
                                 "id": "overlay_D7DEC935_DCEA_FB36_41D7_D4FB63048649",
                                 "bleaching": 0.7
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0, {'rollOverIconColor':'#CCCCCC','backgroundColorRatios':[0.09803921568627451],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverIconWidth':50,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_C406C318_D4FF_7ACD_41B8_0A98872E7CE5, null, null, null, null, false)",
                                   "mapColor": "image"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_6_0.png",
                                      "width": 122,
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
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D, {'rollOverIconColor':'#CCCCCC','backgroundColorRatios':[0.09803921568627451],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverIconWidth':50,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','borderSize':0,'paddingLeft':5,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':50,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_C4896E50_D4F3_6B5D_41D3_2EEBDC3443C4, null, null, null, null, false)",
                                   "mapColor": "image"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_7_0.png",
                                      "width": 122,
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
                                 "showEasing": "cubic_in",
                                 "showDuration": 500,
                                 "popupMaxWidth": "95%",
                                 "yaw": 163.85,
                                 "rotationZ": 0,
                                 "hideDuration": 500,
                                 "class": "PopupPanoramaOverlay",
                                 "id": "popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D",
                                 "hfov": 8.04,
                                 "rotationX": 0,
                                 "rotationY": 0,
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
                                 "popupDistance": 100,
                                 "hideEasing": "cubic_out",
                                 "popupMaxHeight": "95%"
                                },
                                {
                                 "showEasing": "cubic_in",
                                 "showDuration": 500,
                                 "popupMaxWidth": "95%",
                                 "yaw": 7.39,
                                 "rotationZ": 0,
                                 "hideDuration": 500,
                                 "class": "PopupPanoramaOverlay",
                                 "id": "popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0",
                                 "hfov": 7.64,
                                 "rotationX": 0,
                                 "rotationY": 0,
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
                                 "popupDistance": 100,
                                 "hideEasing": "cubic_out",
                                 "popupMaxHeight": "95%"
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_913EDF2D_875E_A3C2_41E0_E2903063FEF1); this.setMediaBehaviour(this.playList_9029CB7E_875E_A23E_41CC_3FEFB6B0EB2A, 0, this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -91.85,
                                   "hfov": 7.94,
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
                                   "pitch": -4.64
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_8_0.png",
                                      "width": 119,
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
                               "thumbnailUrl": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_t.jpg",
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
                             "mapLocations": [
                              {
                               "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                               "x": 217.7,
                               "angle": -83.39,
                               "y": 434.55,
                               "class": "PanoramaMapLocation"
                              }
                             ],
                             "thumbnailUrl": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_t.jpg"
                            },
                            "backwardYaw": -91.85,
                            "yaw": -59.69,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
                            "backwardYaw": 137.01,
                            "yaw": -157.73,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8"
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
                            "backwardYaw": 41.3,
                            "yaw": 150.05,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "class": "Panorama",
                             "label": "16-Oficinas Parque",
                             "id": "panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
                               "backwardYaw": 50.1,
                               "yaw": 176.92,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8"
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
                               "class": "SphericPanoramaFrame",
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
                               },
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_9F2FED4A_875E_A646_4156_66798546BFC8); this.setMediaBehaviour(this.playList_9029CB7E_875E_A23E_41CC_3FEFB6B0EB2A, 0, this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 176.92,
                                   "hfov": 5.91,
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
                                   "pitch": -3.64
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_0_0.png",
                                      "width": 105,
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
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.setMediaBehaviour(this.playList_90289B7D_875E_A242_417F_63B46583EC5B, 0, this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 28.17,
                                   "hfov": 4.63,
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
                                   "pitch": 38.51
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 4.63,
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
                                   "pitch": 38.51,
                                   "yaw": 28.17
                                  }
                                 ],
                                 "id": "overlay_017ADF7E_202F_6C26_41B8_C56A5105BC33",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1, this.camera_460CEEE7_492B_027B_41D1_2B81CCA4EC0E); this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9794EE68_874E_17EB_41E0_8C30D23829E3, false, 0, null, null, false)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -85.83,
                                   "hfov": 5.88,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_4_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": 6.51
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_4_0.png",
                                      "width": 105,
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": 6.51,
                                   "yaw": -85.83
                                  }
                                 ],
                                 "id": "overlay_A50717A7_867B_32A5_41C2_63C0C5FBE2A4",
                                 "data": {
                                  "label": "Image"
                                 }
                                }
                               ],
                               "thumbnailUrl": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_t.jpg"
                              }
                             ],
                             "thumbnailUrl": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_t.jpg"
                            },
                            "backwardYaw": 176.92,
                            "yaw": 50.1,
                            "distance": 1
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
                            "class": "SphericPanoramaFrame",
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
                            },
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_90C0C092_875E_9EC6_41D3_7FF81694A752); this.setMediaBehaviour(this.playList_902B3B7C_875E_A242_41D7_9D386686C5E2, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 150.05,
                                "hfov": 5.92,
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
                                "pitch": -2.1
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_0_0.png",
                                   "width": 105,
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
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.mainPlayList.set('selectedIndex', 0)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 79.36,
                                "hfov": 5.92,
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
                                "pitch": 1.04
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_1_0.png",
                                   "width": 105,
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
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748, this.camera_90F4D09F_875E_9EFE_41CA_A7E73A982FCC); this.setMediaBehaviour(this.playList_90DC2B8B_875E_A2C6_4180_496E779C9009, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 50.1,
                                "hfov": 5.92,
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
                                "pitch": -0.36
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_2_0.png",
                                   "width": 105,
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
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_902A9078_875E_9E42_41DC_E60A1C6E5094); this.mainPlayList.set('selectedIndex', 1)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -59.69,
                                "hfov": 5.92,
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
                                "pitch": -2.53
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_3_0.png",
                                   "width": 105,
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
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_90DED085_875E_9EC2_41DD_AF7092592564); this.setMediaBehaviour(this.playList_90D08B84_875E_A2C2_41DB_56B61FBFE6CD, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -157.73,
                                "hfov": 5.91,
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
                                "pitch": -3.81
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_4_0.png",
                                   "width": 105,
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
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.showPopupPanoramaOverlay(this.popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_0AA1E95D_2068_946A_419A_A79BE517FB92, null, null, null, null, false)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -55.53,
                                "hfov": 5.67,
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
                                "pitch": 16.63
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_5_0.png",
                                   "width": 105,
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
                              "showEasing": "cubic_in",
                              "showDuration": 500,
                              "popupMaxWidth": "95%",
                              "yaw": -55.53,
                              "rotationZ": 0,
                              "hideDuration": 500,
                              "class": "PopupPanoramaOverlay",
                              "id": "popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E",
                              "hfov": 3.78,
                              "rotationX": 0,
                              "rotationY": 0,
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
                              "popupDistance": 100,
                              "hideEasing": "cubic_out",
                              "popupMaxHeight": "95%"
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.setMediaBehaviour(this.playList_90289B7D_875E_A242_417F_63B46583EC5B, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 78.46,
                                "hfov": 4.52,
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
                                "pitch": 40.22
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_6_0.png",
                                   "width": 105,
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
                            "thumbnailUrl": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_t.jpg"
                           }
                          ],
                          "mapLocations": [
                           {
                            "map": {
                             "minimumZoomFactor": 0.5,
                             "fieldOfViewOverlayInsideColor": "#000000",
                             "class": "Map",
                             "label": "Zona Franca",
                             "id": "map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                             "width": 500,
                             "fieldOfViewOverlayRadiusScale": 0.24,
                             "maximumZoomFactor": 1.2,
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
                             "scaleMode": "fit_inside",
                             "overlays": [
                              {
                               "useHandCursor": true,
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "click": "this.mainPlayList.set('selectedIndex', 0)",
                                 "mapColor": "#FF0000"
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_0.png",
                                   "width": 80,
                                   "height": 80
                                  }
                                 ]
                                }
                               },
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
                               "class": "AreaHotspotMapOverlay",
                               "rollOverDisplay": false,
                               "id": "overlay_C85F514D_DD1A_7E64_41E9_30CB45494AAF",
                               "data": {
                                "label": "Entrada"
                               }
                              },
                              {
                               "useHandCursor": true,
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_90D08B84_875E_A2C2_41DB_56B61FBFE6CD.set('selectedIndex', -1); }, this); this.playList_90D08B84_875E_A2C2_41DB_56B61FBFE6CD.set('selectedIndex', 0)",
                                 "mapColor": "#FF0000"
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_1.png",
                                   "width": 40,
                                   "height": 40
                                  }
                                 ]
                                }
                               },
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
                               "class": "AreaHotspotMapOverlay",
                               "rollOverDisplay": false,
                               "id": "overlay_CA4EA4DE_DD1B_A664_41E0_AE0B0C78521C",
                               "data": {
                                "label": "Rotonda"
                               }
                              },
                              {
                               "useHandCursor": true,
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_9029CB7E_875E_A23E_41CC_3FEFB6B0EB2A.set('selectedIndex', -1); }, this); this.playList_9029CB7E_875E_A23E_41CC_3FEFB6B0EB2A.set('selectedIndex', 0)",
                                 "mapColor": "#FF0000"
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_2.png",
                                   "width": 20,
                                   "height": 20
                                  }
                                 ]
                                }
                               },
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
                               "class": "AreaHotspotMapOverlay",
                               "rollOverDisplay": true,
                               "id": "overlay_CB611BF8_DD1A_A22C_41D9_CBADF82A7516",
                               "data": {
                                "label": "CC"
                               }
                              },
                              {
                               "useHandCursor": true,
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_90D0FB85_875E_A2C2_41C9_C87BC84AE015.set('selectedIndex', -1); }, this); this.playList_90D0FB85_875E_A2C2_41C9_C87BC84AE015.set('selectedIndex', 0)",
                                 "mapColor": "#FF0000"
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_3.png",
                                   "width": 40,
                                   "height": 40
                                  }
                                 ]
                                }
                               },
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
                               "class": "AreaHotspotMapOverlay",
                               "rollOverDisplay": false,
                               "id": "overlay_CB150A1A_DD16_ADEC_41E0_7B7C63D3E43F",
                               "data": {
                                "label": "Esquina Izquierda"
                               }
                              },
                              {
                               "useHandCursor": true,
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_90D01B85_875E_A2C2_41CC_A076349A62C8.set('selectedIndex', -1); }, this); this.playList_90D01B85_875E_A2C2_41CC_A076349A62C8.set('selectedIndex', 0)",
                                 "mapColor": "#FF0000"
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_5.png",
                                   "width": 40,
                                   "height": 40
                                  }
                                 ]
                                }
                               },
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
                               "class": "AreaHotspotMapOverlay",
                               "rollOverDisplay": false,
                               "id": "overlay_C5D00BE4_DD09_E224_4193_1E7B3F21AC96",
                               "data": {
                                "label": "Izquierda 3"
                               }
                              },
                              {
                               "useHandCursor": true,
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_90D03B85_875E_A2CD_41D1_B55EAFBD7FF1.set('selectedIndex', -1); }, this); this.playList_90D03B85_875E_A2CD_41D1_B55EAFBD7FF1.set('selectedIndex', 0)",
                                 "mapColor": "#FF0000"
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_6.png",
                                   "width": 20,
                                   "height": 20
                                  }
                                 ]
                                }
                               },
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
                               "class": "AreaHotspotMapOverlay",
                               "rollOverDisplay": true,
                               "id": "overlay_CAE100A4_DD0B_BE24_41EB_507D59E649BA",
                               "data": {
                                "label": "Edwards-Hareus"
                               }
                              },
                              {
                               "useHandCursor": true,
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_7.png",
                                   "width": 40,
                                   "height": 40
                                  }
                                 ]
                                }
                               },
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
                               "class": "AreaHotspotMapOverlay",
                               "rollOverDisplay": false,
                               "id": "overlay_CB9F085C_DD0A_AE64_41AF_81B501144D5C",
                               "data": {
                                "label": "Esquina Atras"
                               }
                              },
                              {
                               "useHandCursor": true,
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_90D07B86_875E_A2CE_41BE_B73A9C7CE7EE.set('selectedIndex', -1); }, this); this.playList_90D07B86_875E_A2CE_41BE_B73A9C7CE7EE.set('selectedIndex', 0)",
                                 "mapColor": "#FF0000"
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_8.png",
                                   "width": 20,
                                   "height": 20
                                  }
                                 ]
                                }
                               },
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
                               "class": "AreaHotspotMapOverlay",
                               "rollOverDisplay": true,
                               "id": "overlay_CABD30AB_DD0E_9E23_41E5_2606484DA696",
                               "data": {
                                "label": "Atras1"
                               }
                              },
                              {
                               "useHandCursor": true,
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_90D18B86_875E_A2CE_41C7_8F54EE0F18A8.set('selectedIndex', -1); }, this); this.playList_90D18B86_875E_A2CE_41C7_8F54EE0F18A8.set('selectedIndex', 0)",
                                 "mapColor": "#FF0000"
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_10.png",
                                   "width": 20,
                                   "height": 20
                                  }
                                 ]
                                }
                               },
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
                               "class": "AreaHotspotMapOverlay",
                               "rollOverDisplay": true,
                               "id": "overlay_C53D65EB_DD09_A62C_41B4_A4FE1383C9E0",
                               "data": {
                                "label": "Plantas de tratamiento"
                               }
                              },
                              {
                               "useHandCursor": true,
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_90D1DB86_875E_A2CE_41C6_795B3E126703.set('selectedIndex', -1); }, this); this.playList_90D1DB86_875E_A2CE_41C6_795B3E126703.set('selectedIndex', 0)",
                                 "mapColor": "#FF0000"
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_11.png",
                                   "width": 20,
                                   "height": 20
                                  }
                                 ]
                                }
                               },
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
                               "class": "AreaHotspotMapOverlay",
                               "rollOverDisplay": true,
                               "id": "overlay_CA1A2975_DD0B_AE24_41D6_FDACEA0678CB",
                               "data": {
                                "label": "Derecha 1"
                               }
                              },
                              {
                               "useHandCursor": true,
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_90D1FB87_875E_A2CE_41B3_C166516E5A55.set('selectedIndex', -1); }, this); this.playList_90D1FB87_875E_A2CE_41B3_C166516E5A55.set('selectedIndex', 0)",
                                 "mapColor": "#FF0000"
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_14.png",
                                   "width": 40,
                                   "height": 40
                                  }
                                 ]
                                }
                               },
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
                               "class": "AreaHotspotMapOverlay",
                               "rollOverDisplay": false,
                               "id": "overlay_31036381_2420_B4E9_41BB_D2ED760E3DE7",
                               "data": {
                                "label": "Image"
                               }
                              }
                             ],
                             "fieldOfViewOverlayOutsideOpacity": 0,
                             "initialZoomFactor": 1,
                             "fieldOfViewOverlayInsideOpacity": 0.31,
                             "fieldOfViewOverlayOutsideColor": "#000000",
                             "height": 485,
                             "thumbnailUrl": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_t.png"
                            },
                            "x": 296.9,
                            "angle": 86.7,
                            "y": 333.85,
                            "class": "PanoramaMapLocation"
                           }
                          ],
                          "thumbnailUrl": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_t.jpg"
                         },
                         "backwardYaw": 150.05,
                         "yaw": 41.3,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
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
                         "class": "SphericPanoramaFrame",
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
                         },
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714, this.camera_9E75EDE2_875E_A646_41D8_4328D87EC6B7); this.mainPlayList.set('selectedIndex', 0)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 150.13,
                             "hfov": 5.92,
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
                             "pitch": 0.8
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
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_0_0.png",
                                "width": 105,
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
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_9E665DF0_875E_A642_41DB_443C216C69BC); this.setMediaBehaviour(this.playList_9029CB7E_875E_A23E_41CC_3FEFB6B0EB2A, 0, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 41.3,
                             "hfov": 5.92,
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
                             "pitch": -2.08
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
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_1_0.png",
                                "width": 105,
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
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_9E42FDD5_875E_A642_41DE_4FEB0B9FC976); this.setMediaBehaviour(this.playList_90D08B84_875E_A2C2_41DB_56B61FBFE6CD, 0, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -25.53,
                             "hfov": 5.9,
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
                             "pitch": -5.35
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
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_2_0.png",
                                "width": 105,
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
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupPanoramaOverlay(this.popup_3AF279F7_20F8_9425_41B8_727B1C05B69A, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_095FC95D_2068_946A_41A5_88BA52F0CF59, null, null, null, null, false)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 81.82,
                             "hfov": 5.92,
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
                             "pitch": 0.15
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
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_3_0.png",
                                "width": 105,
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
                           "showEasing": "cubic_in",
                           "showDuration": 500,
                           "popupMaxWidth": "95%",
                           "yaw": 81.82,
                           "rotationZ": 0,
                           "hideDuration": 500,
                           "class": "PopupPanoramaOverlay",
                           "id": "popup_3AF279F7_20F8_9425_41B8_727B1C05B69A",
                           "hfov": 5.92,
                           "rotationX": 0,
                           "rotationY": 0,
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
                           "popupDistance": 100,
                           "hideEasing": "cubic_out",
                           "popupMaxHeight": "95%"
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.setMediaBehaviour(this.playList_90DCEB8A_875E_A2C6_41C6_DA6DA3374F65, 0, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -16.74,
                             "hfov": 5.21,
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
                             "pitch": 28.31
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
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_4_0.png",
                                "width": 105,
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
                         "thumbnailUrl": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_t.jpg"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_t.jpg"
                      },
                      "backwardYaw": 150.13,
                      "yaw": -19.33,
                      "distance": 1
                     }
                    ],
                    "pitch": 0,
                    "partial": false,
                    "vfov": 180,
                    "cardboardMenu": "this.Menu_90F5FBAC_875E_A2C2_41CA_7C6A2740C6EA",
                    "hfovMax": 130,
                    "hfov": 360,
                    "hfovMin": 100,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
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
                      },
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_91146EDC_875E_A242_41CA_6B4B1A89FF0C); this.setMediaBehaviour(this.playList_902B3B7C_875E_A242_41D7_9D386686C5E2, 0, this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -19.33,
                          "hfov": 5.9,
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
                          "pitch": -5.22
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
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_0_0.png",
                             "width": 105,
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
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.showPopupPanoramaOverlay(this.popup_3509F7CC_246E_7035_41AB_BB188EF81D62, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_3294856D_24AE_90F4_418D_8D9776AE9FF3, null, null, null, null, false)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -68.51,
                          "hfov": 5.9,
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
                          "pitch": -4.39
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
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_1_0.png",
                             "width": 105,
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
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.setMediaBehaviour(this.playList_90289B7D_875E_A242_417F_63B46583EC5B, 0, this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -30.51,
                          "hfov": 4.94,
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
                          "pitch": 33.49
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 4.94,
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
                          "pitch": 33.49,
                          "yaw": -30.51
                         }
                        ],
                        "id": "overlay_3ACFD642_2028_9C5E_41A8_AC5EE8DD4659",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "showEasing": "cubic_in",
                        "showDuration": 500,
                        "popupMaxWidth": "95%",
                        "yaw": -68.51,
                        "rotationZ": 0,
                        "hideDuration": 500,
                        "class": "PopupPanoramaOverlay",
                        "id": "popup_3509F7CC_246E_7035_41AB_BB188EF81D62",
                        "hfov": 5.9,
                        "rotationX": 0,
                        "rotationY": 0,
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
                        "popupDistance": 100,
                        "hideEasing": "cubic_out",
                        "popupMaxHeight": "95%"
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B, this.camera_9168DECF_875E_A25E_41DB_BB09ADCF3F42); this.mainPlayList.set('selectedIndex', 9)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 159.92,
                          "hfov": 6.84,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_3_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": 22.39
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.84,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_3_0.png",
                             "width": 132,
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
                    "thumbnailUrl": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_t.jpg"
                   }
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "class": "Panorama",
                    "label": "IMG_20180114_182756_00_062-edit",
                    "id": "panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8",
                      "backwardYaw": 154.31,
                      "yaw": -23.17,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "class": "Panorama",
                       "label": "helipuerto",
                       "id": "panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90"
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "class": "Panorama",
                          "label": "12-Entre Zollner y Coloplast",
                          "id": "panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90"
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "class": "Panorama",
                             "label": "14-Entre Zollner y Heraus",
                             "id": "panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "class": "Panorama",
                                "label": "15-Esquina Heraus",
                                "id": "panorama_69A80F4D_649D_BA6A_4181_FB07157852B5",
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
                                  "backwardYaw": 99.68,
                                  "yaw": 109.75,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "class": "Panorama",
                                   "label": "8-Pastizal Atr\u00e1s",
                                   "id": "panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "class": "Panorama",
                                      "label": "7-Centro Atr\u00e1s",
                                      "id": "panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "class": "Panorama",
                                         "label": "6-Lagunas de Retencion",
                                         "id": "panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
                                           "backwardYaw": -5.23,
                                           "yaw": -30.03,
                                           "distance": 1
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
                                           "backwardYaw": 23.32,
                                           "yaw": 139.43,
                                           "distance": 1
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
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
                                           "class": "SphericPanoramaFrame",
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
                                           },
                                           "overlays": [
                                            {
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_9F5EACB3_875E_A6C6_41BD_DF2F777BB46A); this.setMediaBehaviour(this.playList_90DD3B8D_875E_A2C2_41DF_0CA37809525D, 0, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -30.03,
                                               "hfov": 5.92,
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
                                               "pitch": -1.5
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
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_0_0.png",
                                                  "width": 105,
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
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9, this.camera_9F455CC5_875E_A642_41D5_F90BE18DA478); this.setMediaBehaviour(this.playList_90D1FB87_875E_A2CE_41B3_C166516E5A55, 0, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 139.43,
                                               "hfov": 5.91,
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
                                               "pitch": -2.97
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
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_1_0.png",
                                                  "width": 105,
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
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.setMediaBehaviour(this.playList_90DCEB8A_875E_A2C6_41C6_DA6DA3374F65, 0, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 146.16,
                                               "hfov": 6.12,
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
                                               "pitch": 65.57
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
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_2_0.png",
                                                  "width": 264,
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
                                         "thumbnailUrl": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_t.jpg"
                                        },
                                        "backwardYaw": 139.43,
                                        "yaw": 23.32,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
                                        "backwardYaw": -112.38,
                                        "yaw": 107.65,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
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
                                        "class": "SphericPanoramaFrame",
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
                                        },
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E, this.camera_911FAEEA_875E_A246_41B1_06EE62D1AF68); this.setMediaBehaviour(this.playList_90D18B86_875E_A2CE_41C7_8F54EE0F18A8, 0, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 23.32,
                                            "hfov": 5.91,
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
                                            "pitch": -2.78
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
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_0_0.png",
                                               "width": 105,
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
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368, this.camera_91190EF8_875E_A242_41D7_F6417C35130C); this.setMediaBehaviour(this.playList_90D07B86_875E_A2CE_41BE_B73A9C7CE7EE, 0, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 107.65,
                                            "hfov": 5.92,
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
                                            "pitch": -2.02
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
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_1_0.png",
                                               "width": 105,
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
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.setMediaBehaviour(this.playList_90DCEB8A_875E_A2C6_41C6_DA6DA3374F65, 0, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 102.37,
                                            "hfov": 1.81,
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
                                            "pitch": 72.16
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
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_2_0.png",
                                               "width": 105,
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
                                      "thumbnailUrl": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_t.jpg"
                                     },
                                     "backwardYaw": 107.65,
                                     "yaw": -112.38,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "class": "Panorama",
                                      "label": "IMG_20180114_164030_00_037(Opci\u00f3n2)-edit",
                                      "id": "panorama_92DCC187_820A_38B2_41E0_0245C2CF622F",
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8",
                                        "backwardYaw": -157.61,
                                        "yaw": 164.85,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90",
                                        "backwardYaw": -121.06,
                                        "yaw": 125.87,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94",
                                        "backwardYaw": 128.57,
                                        "yaw": 84.52,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5"
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
                                        "class": "SphericPanoramaFrame",
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_hq.jpeg",
                                           "width": 6434,
                                           "height": 3217,
                                           "tags": [
                                            "oculusgo",
                                            "ipadpro"
                                           ]
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F.jpeg",
                                           "width": 4002,
                                           "height": 2001
                                          }
                                         ]
                                        },
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.setMediaBehaviour(this.playList_90D8EB92_875E_A2C6_41DE_D7CA36E0F848, 0, this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 82.6,
                                            "hfov": 5.66,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_3_0_0_map.gif",
                                               "width": 16,
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "pitch": -50.37
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
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_3_0.png",
                                               "width": 158,
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
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.showPopupPanoramaOverlay(this.popup_25AB8A34_3513_DE40_41C8_119007832823, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_232B696E_352D_BAC0_41B1_E8DFF9648419, null, null, null, null, false)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 53.72,
                                            "hfov": 8.16,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_4_0_0_map.gif",
                                               "width": 16,
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "pitch": -46.43
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 8.16,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_4_0.png",
                                               "width": 211,
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
                                          "showEasing": "cubic_in",
                                          "showDuration": 500,
                                          "popupMaxWidth": "95%",
                                          "yaw": 53.72,
                                          "rotationZ": 0,
                                          "hideDuration": 500,
                                          "class": "PopupPanoramaOverlay",
                                          "id": "popup_25AB8A34_3513_DE40_41C8_119007832823",
                                          "hfov": 8.16,
                                          "rotationX": 0,
                                          "rotationY": 0,
                                          "image": {
                                           "class": "ImageResource",
                                           "levels": [
                                            {
                                             "class": "ImageResourceLevel",
                                             "url": "media/popup_25AB8A34_3513_DE40_41C8_119007832823_0_1.jpg",
                                             "width": 1024,
                                             "height": 573
                                            }
                                           ]
                                          },
                                          "pitch": -46.43,
                                          "popupDistance": 100,
                                          "hideEasing": "cubic_out",
                                          "popupMaxHeight": "95%"
                                         },
                                         {
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94, this.camera_9042500F_875E_9DDE_41CB_823A4ACDAE6D); this.setMediaBehaviour(this.playList_90DCEB8A_875E_A2C6_41C6_DA6DA3374F65, 0, this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 84.52,
                                            "hfov": 5.86,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_5_0_0_map.gif",
                                               "width": 16,
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "pitch": 8.19
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
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_5_0.png",
                                               "width": 105,
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
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90, this.camera_905C1001_875E_9DC2_41CB_6DE6CBA4EC90); this.setMediaBehaviour(this.playList_90DB5B90_875E_A2C2_41CF_3A9EE379D9C1, 0, this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 125.87,
                                            "hfov": 5.84,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_6_0_0_map.gif",
                                               "width": 16,
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "pitch": 9.37
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
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_6_0.png",
                                               "width": 105,
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
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8, this.camera_91A9BFF5_875E_A242_41D7_99B55E92D7D8); this.setMediaBehaviour(this.playList_90289B7D_875E_A242_417F_63B46583EC5B, 0, this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 164.85,
                                            "hfov": 5.84,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_7_0_0_map.gif",
                                               "width": 16,
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "pitch": 9.21
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
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_7_0.png",
                                               "width": 105,
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
                                        "thumbnailUrl": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_t.jpg"
                                       }
                                      ],
                                      "thumbnailUrl": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_t.jpg"
                                     }
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5",
                                     "backwardYaw": 21.18,
                                     "yaw": 72.35,
                                     "distance": 1
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
                                     "class": "SphericPanoramaFrame",
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
                                     },
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5, this.camera_9F0A3D30_875E_A7C2_41CC_E36E47306210); this.setMediaBehaviour(this.playList_90D8EB92_875E_A2C6_41DE_D7CA36E0F848, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 72.35,
                                         "hfov": 5.92,
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
                                         "pitch": -0.2
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
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_0_0.png",
                                            "width": 105,
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
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9, this.camera_9F1BBD23_875E_A7C6_41C9_B797D751FB7C); this.setMediaBehaviour(this.playList_90D1FB87_875E_A2CE_41B3_C166516E5A55, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -112.38,
                                         "hfov": 5.9,
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
                                         "pitch": -4.59
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
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_1_0.png",
                                            "width": 105,
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
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.setMediaBehaviour(this.playList_90D83B93_875E_A2C6_41DD_E61BD192C814, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 82.3,
                                         "hfov": 4.28,
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
                                         "pitch": 43.73
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
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_2_0.png",
                                            "width": 105,
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
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.setMediaBehaviour(this.playList_90DCEB8A_875E_A2C6_41C6_DA6DA3374F65, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -106.31,
                                         "hfov": 4.46,
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
                                         "pitch": 41.06
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
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_3_0.png",
                                            "width": 105,
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
                                     "thumbnailUrl": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_t.jpg"
                                    }
                                   ],
                                   "mapLocations": [
                                    {
                                     "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                     "x": 188.3,
                                     "angle": 178.51,
                                     "y": 137.95,
                                     "class": "PanoramaMapLocation"
                                    }
                                   ],
                                   "thumbnailUrl": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_t.jpg"
                                  },
                                  "backwardYaw": 72.35,
                                  "yaw": 21.18,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F"
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
                                  "class": "SphericPanoramaFrame",
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_hq.jpeg",
                                     "width": 6434,
                                     "height": 3217,
                                     "tags": [
                                      "oculusgo",
                                      "ipadpro"
                                     ]
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5.jpeg",
                                     "width": 4002,
                                     "height": 2001
                                    }
                                   ]
                                  },
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525, this.camera_9F8D5DA3_875E_A6C6_41D7_33F8E3302382); this.setMediaBehaviour(this.playList_90D03B85_875E_A2CD_41D1_B55EAFBD7FF1, 0, this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 109.75,
                                      "hfov": 5.92,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_0_0_0_map.gif",
                                         "width": 16,
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "pitch": -2.42
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_0_0.png",
                                         "width": 105,
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
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368, this.camera_9FBDADB0_875E_A6C2_41CD_C69FD5628656); this.setMediaBehaviour(this.playList_90D07B86_875E_A2CE_41BE_B73A9C7CE7EE, 0, this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 21.18,
                                      "hfov": 5.92,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_1_0_0_map.gif",
                                         "width": 16,
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "pitch": -1.96
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_1_0.png",
                                         "width": 105,
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
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.showPopupPanoramaOverlay(this.popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_72699DCF_64A4_9E66_417A_2D9BA948AEB2, null, null, null, null, false)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 95.76,
                                      "hfov": 5.9,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_2_0_0_map.gif",
                                         "width": 16,
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "pitch": -4.32
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_2_0.png",
                                         "width": 105,
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
                                    "showEasing": "cubic_in",
                                    "showDuration": 500,
                                    "popupMaxWidth": "95%",
                                    "yaw": 95.76,
                                    "rotationZ": 0,
                                    "hideDuration": 500,
                                    "class": "PopupPanoramaOverlay",
                                    "id": "popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8",
                                    "hfov": 5.9,
                                    "rotationX": 0,
                                    "rotationY": 0,
                                    "image": {
                                     "class": "ImageResource",
                                     "levels": [
                                      {
                                       "class": "ImageResourceLevel",
                                       "url": "media/popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8_0_1.jpg",
                                       "width": 1024,
                                       "height": 682
                                      }
                                     ]
                                    },
                                    "pitch": -4.32,
                                    "popupDistance": 100,
                                    "hideEasing": "cubic_out",
                                    "popupMaxHeight": "95%"
                                   },
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.setMediaBehaviour(this.playList_90D83B93_875E_A2C6_41DD_E61BD192C814, 0, this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -116.66,
                                      "hfov": 6.52,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_3_0_0_map.gif",
                                         "width": 16,
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "pitch": 42.73
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
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_3_0.png",
                                         "width": 158,
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
                                  "thumbnailUrl": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_t.jpg"
                                 }
                                ],
                                "thumbnailUrl": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_t.jpg"
                               },
                               "backwardYaw": 109.75,
                               "yaw": 99.68,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F"
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
                               "backwardYaw": 79.43,
                               "yaw": -95.46,
                               "distance": 1
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
                               "class": "SphericPanoramaFrame",
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
                               },
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_910DCF14_875E_A3C2_41C8_92928611DFE9); this.setMediaBehaviour(this.playList_90D0FB85_875E_A2C2_41C9_C87BC84AE015, 0, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -95.46,
                                   "hfov": 5.92,
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
                                   "pitch": -1.9
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_0_0.png",
                                      "width": 105,
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
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5, this.camera_9102AF06_875E_A3CE_41A0_FD238590A2E2); this.setMediaBehaviour(this.playList_90D8EB92_875E_A2C6_41DE_D7CA36E0F848, 0, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 99.68,
                                   "hfov": 5.92,
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
                                   "pitch": -2.52
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_1_0.png",
                                      "width": 105,
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
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.setMediaBehaviour(this.playList_90D83B93_875E_A2C6_41DD_E61BD192C814, 0, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 92,
                                   "hfov": 4.48,
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
                                   "pitch": 40.89
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_2_0.png",
                                      "width": 105,
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
                             "thumbnailUrl": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_t.jpg"
                            },
                            "backwardYaw": -95.46,
                            "yaw": 79.43,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
                            "backwardYaw": -117.3,
                            "yaw": -90.48,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F"
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "class": "Panorama",
                             "label": "11-Entre Edwards y Coloplast",
                             "id": "panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
                               "backwardYaw": -78.27,
                               "yaw": 88.55,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90"
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
                               "backwardYaw": 179.05,
                               "yaw": -94.64,
                               "distance": 1
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
                               "class": "SphericPanoramaFrame",
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
                               },
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_91C3FF79_875E_A242_41E0_A639D84E88E6); this.setMediaBehaviour(this.playList_90D08B84_875E_A2C2_41DB_56B61FBFE6CD, 0, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 88.55,
                                   "hfov": 5.92,
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
                                   "pitch": -2.03
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_0_0.png",
                                      "width": 105,
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
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_91C80F86_875E_A2CE_41D7_DF2A42213080); this.setMediaBehaviour(this.playList_90D0FB85_875E_A2C2_41C9_C87BC84AE015, 0, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -94.64,
                                   "hfov": 5.9,
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
                                   "pitch": -5.21
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_1_0.png",
                                      "width": 105,
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
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_3A305B90_20FB_94FB_4193_FEB3450979FC, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, null, null, null, null, null, false)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -56.26,
                                   "hfov": 5.84,
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
                                   "pitch": 9.36
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_2_0.png",
                                      "width": 105,
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
                                 "showEasing": "cubic_in",
                                 "showDuration": 500,
                                 "popupMaxWidth": "95%",
                                 "yaw": -56.26,
                                 "rotationZ": 0,
                                 "hideDuration": 500,
                                 "class": "PopupPanoramaOverlay",
                                 "id": "popup_3A305B90_20FB_94FB_4193_FEB3450979FC",
                                 "hfov": 5.84,
                                 "rotationX": 0,
                                 "rotationY": 0,
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
                                 "popupDistance": 100,
                                 "hideEasing": "cubic_out",
                                 "popupMaxHeight": "95%"
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.setMediaBehaviour(this.playList_90DB5B90_875E_A2C2_41CF_3A9EE379D9C1, 0, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -148.61,
                                   "hfov": 5.27,
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
                                   "pitch": 27.18
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_3_0.png",
                                      "width": 105,
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
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_36258FF0_249D_EFED_41AB_54067BE4CE8C, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_32C8659C_24AE_9054_4187_C8E2724888E0, null, null, null, null, false)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -50.51,
                                   "hfov": 5.88,
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
                                   "pitch": -6.52
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_4_0.png",
                                      "width": 105,
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
                                 "showEasing": "cubic_in",
                                 "showDuration": 500,
                                 "popupMaxWidth": "95%",
                                 "yaw": -50.51,
                                 "rotationZ": 0,
                                 "hideDuration": 500,
                                 "class": "PopupPanoramaOverlay",
                                 "id": "popup_36258FF0_249D_EFED_41AB_54067BE4CE8C",
                                 "hfov": 5.88,
                                 "rotationX": 0,
                                 "rotationY": 0,
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
                                 "popupDistance": 100,
                                 "hideEasing": "cubic_out",
                                 "popupMaxHeight": "95%"
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_36539A9C_24AE_9054_41AC_911079BB2A7C, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_32C8A59C_24AE_9054_41B0_230945BD42EC, null, null, null, null, false)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -76.59,
                                   "hfov": 5.92,
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
                                   "pitch": 1.45
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_5_0.png",
                                      "width": 105,
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
                                 "showEasing": "cubic_in",
                                 "showDuration": 500,
                                 "popupMaxWidth": "95%",
                                 "yaw": -76.59,
                                 "rotationZ": 0,
                                 "hideDuration": 500,
                                 "class": "PopupPanoramaOverlay",
                                 "id": "popup_36539A9C_24AE_9054_41AC_911079BB2A7C",
                                 "hfov": 5.92,
                                 "rotationX": 0,
                                 "rotationY": 0,
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
                                 "popupDistance": 100,
                                 "hideEasing": "cubic_out",
                                 "popupMaxHeight": "95%"
                                }
                               ],
                               "thumbnailUrl": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_t.jpg"
                              }
                             ],
                             "thumbnailUrl": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_t.jpg"
                            },
                            "backwardYaw": -94.64,
                            "yaw": 179.05,
                            "distance": 1
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
                            "class": "SphericPanoramaFrame",
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
                            },
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246, this.camera_906A6036_875E_9DCE_41D1_3A2E0AA80DCA); this.setMediaBehaviour(this.playList_90DD7B8D_875E_A2C2_41BE_DE424F02198F, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 179.05,
                                "hfov": 5.9,
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
                                "pitch": -4.4
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_0_0.png",
                                   "width": 105,
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
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525, this.camera_9074601B_875E_9DC6_4192_D603368E7BC3); this.setMediaBehaviour(this.playList_90D03B85_875E_A2CD_41D1_B55EAFBD7FF1, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 79.43,
                                "hfov": 5.92,
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
                                "pitch": -0.99
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_1_0.png",
                                   "width": 105,
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
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E, this.camera_9079A028_875E_9DC2_418F_8D236F725215); this.setMediaBehaviour(this.playList_90D01B85_875E_A2C2_41CC_A076349A62C8, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -90.48,
                                "hfov": 5.92,
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
                                "pitch": -1.59
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_2_0.png",
                                   "width": 105,
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
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.showPopupPanoramaOverlay(this.popup_3A3C822F_20F8_9425_41B2_B5F3B1085960, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_0AAA2971_2068_943D_41B4_10DFF5B38D1B, null, null, null, null, false)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 32.81,
                                "hfov": 5.82,
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
                                "pitch": 10.53
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_3_0.png",
                                   "width": 105,
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
                              "showEasing": "cubic_in",
                              "showDuration": 500,
                              "popupMaxWidth": "95%",
                              "yaw": 32.81,
                              "rotationZ": 0,
                              "hideDuration": 500,
                              "class": "PopupPanoramaOverlay",
                              "id": "popup_3A3C822F_20F8_9425_41B2_B5F3B1085960",
                              "hfov": 5.82,
                              "rotationX": 0,
                              "rotationY": 0,
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
                              "popupDistance": 100,
                              "hideEasing": "cubic_out",
                              "popupMaxHeight": "95%"
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.setMediaBehaviour(this.playList_90DB5B90_875E_A2C2_41CF_3A9EE379D9C1, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -84.07,
                                "hfov": 5.34,
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
                                "pitch": 25.67
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_4_0.png",
                                   "width": 105,
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
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.setMediaBehaviour(this.playList_90D83B93_875E_A2C6_41DD_E61BD192C814, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 76.78,
                                "hfov": 5.1,
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
                                "pitch": 30.52
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_5_0.png",
                                   "width": 105,
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
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.showPopupPanoramaOverlay(this.popup_3638CA38_249B_905C_41B3_EA26EB9333F0, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_32CC759C_24AE_9054_419F_511B2D533327, null, null, null, null, false)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -32.7,
                                "hfov": 5.66,
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
                                "pitch": 17.08
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_6_0.png",
                                   "width": 105,
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
                              "showEasing": "cubic_in",
                              "showDuration": 500,
                              "popupMaxWidth": "95%",
                              "yaw": -32.7,
                              "rotationZ": 0,
                              "hideDuration": 500,
                              "class": "PopupPanoramaOverlay",
                              "id": "popup_3638CA38_249B_905C_41B3_EA26EB9333F0",
                              "hfov": 5.66,
                              "rotationX": 0,
                              "rotationY": 0,
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
                              "popupDistance": 100,
                              "hideEasing": "cubic_out",
                              "popupMaxHeight": "95%"
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.showPopupPanoramaOverlay(this.popup_369EF53B_249A_B05C_41BC_AE1E970C16EA, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_32CD359C_24AE_9054_41BC_CF812CF11760, null, null, null, null, false)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 101.53,
                                "hfov": 5.91,
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
                                "pitch": -4.09
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_7_0.png",
                                   "width": 105,
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
                              "showEasing": "cubic_in",
                              "showDuration": 500,
                              "popupMaxWidth": "95%",
                              "yaw": 101.53,
                              "rotationZ": 0,
                              "hideDuration": 500,
                              "class": "PopupPanoramaOverlay",
                              "id": "popup_369EF53B_249A_B05C_41BC_AE1E970C16EA",
                              "hfov": 5.91,
                              "rotationX": 0,
                              "rotationY": 0,
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
                              "popupDistance": 100,
                              "hideEasing": "cubic_out",
                              "popupMaxHeight": "95%"
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -58.3,
                                "hfov": 5.89,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_10_0_0_map.gif",
                                   "width": 16,
                                   "height": 16
                                  }
                                 ]
                                },
                                "pitch": 5.67
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_10_0.png",
                                   "width": 105,
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": 5.67,
                                "yaw": -58.3
                               }
                              ],
                              "id": "overlay_A50C052B_8679_77AC_41C1_447A80B2F13D",
                              "data": {
                               "label": "Image"
                              }
                             }
                            ],
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
                          "thumbnailUrl": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_t.jpg"
                         },
                         "backwardYaw": -90.48,
                         "yaw": -117.3,
                         "distance": 1
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
                         "class": "SphericPanoramaFrame",
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
                         },
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_9F3D4D3D_875E_A7C2_41C3_2408478759E6); this.setMediaBehaviour(this.playList_90D0FB85_875E_A2C2_41C9_C87BC84AE015, 0, this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -117.3,
                             "hfov": 5.9,
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
                             "pitch": -4.38
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
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_0_0.png",
                                "width": 105,
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
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.setMediaBehaviour(this.playList_90DB5B90_875E_A2C2_41CF_3A9EE379D9C1, 0, this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 62.4,
                             "hfov": 3.6,
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
                             "pitch": 52.59
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
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_1_0.png",
                                "width": 105,
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
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7, this.camera_5564A635_5884_E26A_41CD_F65940AE1D0F); this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
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
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_2_0.png",
                                "width": 105,
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
                       "thumbnailUrl": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_t.jpg"
                      }
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94",
                      "backwardYaw": 76.9,
                      "yaw": -73.9,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F",
                      "backwardYaw": 125.87,
                      "yaw": -121.06,
                      "distance": 1
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
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_hq.jpeg",
                         "width": 6434,
                         "height": 3217,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ]
                        },
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90.jpeg",
                         "width": 4002,
                         "height": 2001
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8, this.camera_91E29F9F_875E_A2FE_41D1_F9B19C9F7B2D); this.setMediaBehaviour(this.playList_90289B7D_875E_A242_417F_63B46583EC5B, 0, this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -23.17,
                          "hfov": 5.81,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_0_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": 11.26
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 5.81,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_0_0.png",
                             "width": 105,
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
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F, this.camera_919F2FB8_875E_A2C2_41D9_516203D7EA11); this.setMediaBehaviour(this.playList_90D83B93_875E_A2C6_41DD_E61BD192C814, 0, this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -121.06,
                          "hfov": 5.83,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_1_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": 9.97
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 5.83,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_1_0.png",
                             "width": 105,
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
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94, this.camera_91EB7FAC_875E_A2C2_41B1_9DE994C990E8); this.setMediaBehaviour(this.playList_90DCEB8A_875E_A2C6_41C6_DA6DA3374F65, 0, this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -73.9,
                          "hfov": 5.82,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_2_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": 10.77
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
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_2_0.png",
                             "width": 105,
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
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.setMediaBehaviour(this.playList_90D01B85_875E_A2C2_41CC_A076349A62C8, 0, this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -91.23,
                          "hfov": 8.7,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_5_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": -72.9
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.7,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_5_0.png",
                             "width": 529,
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
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9794EE68_874E_17EB_41E0_8C30D23829E3, false, 0, null, null, false)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -125.38,
                          "hfov": 4.83,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_7_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": -35.34
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 4.83,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_7_0.png",
                             "width": 105,
                             "height": 105
                            }
                           ]
                          },
                          "pitch": -35.34,
                          "yaw": -125.38
                         }
                        ],
                        "id": "overlay_A51288CA_8678_FEEC_41D4_86498750207E",
                        "data": {
                         "label": "Image"
                        }
                       }
                      ],
                      "thumbnailUrl": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_t.jpg"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_t.jpg"
                   },
                   "backwardYaw": -23.17,
                   "yaw": 154.31,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94",
                   "backwardYaw": 36.44,
                   "yaw": -104.82,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F",
                   "backwardYaw": 164.85,
                   "yaw": -157.61,
                   "distance": 1
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
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_hq.jpeg",
                      "width": 6434,
                      "height": 3217,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ]
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8.jpeg",
                      "width": 4002,
                      "height": 2001
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90, this.camera_9E16ADFD_875E_A642_41D8_41470E67E1B8); this.setMediaBehaviour(this.playList_90DB5B90_875E_A2C2_41CF_3A9EE379D9C1, 0, this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 154.31,
                       "hfov": 5.85,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_0_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": 8.98
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
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_0_0.png",
                          "width": 105,
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
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94, this.camera_9E1B5E0A_875E_A5C6_41D0_87BE9A82E14B); this.setMediaBehaviour(this.playList_90DCEB8A_875E_A2C6_41C6_DA6DA3374F65, 0, this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -104.82,
                       "hfov": 5.89,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_1_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": 5.81
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
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_1_0.png",
                          "width": 105,
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
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F, this.camera_9E0A2E17_875E_A5CE_41D0_9A5112D0A549); this.setMediaBehaviour(this.playList_90D83B93_875E_A2C6_41DD_E61BD192C814, 0, this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -157.61,
                       "hfov": 5.89,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_2_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": 5.93
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
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_2_0.png",
                          "width": 105,
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
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.mainPlayList.set('selectedIndex', 0)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -22.77,
                       "hfov": 8.47,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_3_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -73.38
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
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_3_0.png",
                          "width": 529,
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
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.showPopupPanoramaOverlay(this.popup_34BBD83C_246A_F055_41C1_EBEF48C7F767, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_32CBA59C_24AE_9054_41C1_95FEFF54BD80, null, null, null, null, false)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -54.43,
                       "hfov": 6.74,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_5_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -24.34
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 6.74,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_5_0.png",
                          "width": 132,
                          "height": 132
                         }
                        ]
                       },
                       "pitch": -24.34,
                       "yaw": -54.43
                      }
                     ],
                     "id": "overlay_8C90ED20_820E_09EE_41BB_BDC80546ABA8",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "showEasing": "cubic_in",
                     "showDuration": 500,
                     "popupMaxWidth": "95%",
                     "yaw": -54.43,
                     "rotationZ": 0,
                     "hideDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "id": "popup_34BBD83C_246A_F055_41C1_EBEF48C7F767",
                     "hfov": 6.74,
                     "rotationX": 0,
                     "rotationY": 0,
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
                     "pitch": -24.34,
                     "popupDistance": 100,
                     "hideEasing": "cubic_out",
                     "popupMaxHeight": "95%"
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9794EE68_874E_17EB_41E0_8C30D23829E3, false, 0, null, null, false)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -48.83,
                       "hfov": 6.11,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_8_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -34.37
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 6.11,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_8_0.png",
                          "width": 132,
                          "height": 132
                         }
                        ]
                       },
                       "pitch": -34.37,
                       "yaw": -48.83
                      }
                     ],
                     "id": "overlay_A5EE1590_867F_577C_41D1_C3506CB27C9D",
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9794EE68_874E_17EB_41E0_8C30D23829E3, true, 0, null, null, false); this.setComponentVisibility(this.Image_97A8F4AB_874A_EB6D_41DC_914C3E0931EC, true, 0, null, null, false)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -44.16,
                       "hfov": 5.41,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_9_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -24.05
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.41,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_9_0.png",
                          "width": 105,
                          "height": 105
                         }
                        ]
                       },
                       "pitch": -24.05,
                       "yaw": -44.16
                      }
                     ],
                     "id": "overlay_AA422BCD_8638_D2E5_41BC_E7B12B68AC83",
                     "data": {
                      "label": "Image"
                     }
                    }
                   ],
                   "thumbnailUrl": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_t.jpg"
                },
                "backwardYaw": -104.82,
                "yaw": 36.44,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E"
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90",
                "backwardYaw": -73.9,
                "yaw": 76.9,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F",
                "backwardYaw": 84.52,
                "yaw": 128.57,
                "distance": 1
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
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_hq.jpeg",
                   "width": 6434,
                   "height": 3217,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94.jpeg",
                   "width": 4002,
                   "height": 2001
                  }
                 ]
                },
                "overlays": [
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8, this.camera_90BDCC6C_875E_A642_4198_1D3BAD948F06); this.setMediaBehaviour(this.playList_90289B7D_875E_A242_417F_63B46583EC5B, 0, this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 36.44,
                    "hfov": 5.86,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_0_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": 8.45
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
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_0_0.png",
                       "width": 105,
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
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90, this.camera_90A22C84_875E_A6C2_41DD_1F447BB7EEE3); this.setMediaBehaviour(this.playList_90DB5B90_875E_A2C2_41CF_3A9EE379D9C1, 0, this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 76.9,
                    "hfov": 5.85,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_1_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": 8.85
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
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_1_0.png",
                       "width": 105,
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
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F, this.camera_90ABEC98_875E_A6C2_41DC_C65B90CA4EBC); this.setMediaBehaviour(this.playList_90D83B93_875E_A2C6_41DD_E61BD192C814, 0, this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 128.57,
                    "hfov": 5.84,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_2_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": 9.2
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
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_2_0.png",
                       "width": 105,
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
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.setMediaBehaviour(this.playList_90D18B86_875E_A2CE_41C7_8F54EE0F18A8, 0, this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 39.71,
                    "hfov": 5.16,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_3_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -29.28
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
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_3_0.png",
                       "width": 105,
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
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9794EE68_874E_17EB_41E0_8C30D23829E3, false, 0, null, null, false)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 10.63,
                    "hfov": 5.61,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_6_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -18.62
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
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_6_0.png",
                       "width": 105,
                       "height": 105
                      }
                     ]
                    },
                    "pitch": -18.62,
                    "yaw": 10.63
                   }
                  ],
                  "id": "overlay_A510F1F8_867F_2EAC_41D5_64A5F70A77F5",
                  "data": {
                   "label": "Image"
                  }
                 }
                ],
                "thumbnailUrl": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_t.jpg"
             }
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
             "class": "SphericPanoramaFrame",
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
             },
             "overlays": [
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_91DA0F6C_875E_A242_41DC_06CBB9F10CBE); this.setMediaBehaviour(this.playList_90DD3B8D_875E_A2C2_41DF_0CA37809525D, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -155.58,
                 "hfov": 5.91,
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
                 "pitch": -3.74
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
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_0_0.png",
                    "width": 105,
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
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_91D0FF5F_875E_A27E_41BB_126B087DA502); this.setMediaBehaviour(this.playList_90D08B84_875E_A2C2_41DB_56B61FBFE6CD, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -174.5,
                 "hfov": 5.92,
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
                 "pitch": -1.39
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
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_1_0.png",
                    "width": 105,
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
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.setMediaBehaviour(this.playList_90DCEB8A_875E_A2C6_41C6_DA6DA3374F65, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -90.59,
                 "hfov": 5.28,
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
                 "pitch": 27.01
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
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_2_0.png",
                    "width": 105,
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
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.media_0BA5C089_2079_B4ED_41A8_D2AC2349E041, this.camera_57ED2843_5884_EE2E_41C5_05C9E202BB3A); this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9794EE68_874E_17EB_41E0_8C30D23829E3, false, 0, null, null, false)",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 172.46,
                 "hfov": 7.09,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_5_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -16.71
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
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_5_0.png",
                    "width": 132,
                    "height": 132
                   }
                  ]
                 },
                 "pitch": -16.71,
                 "yaw": 172.46
                }
               ],
               "id": "overlay_A5180004_8679_2D5B_41D1_CA276DC13AEC",
               "data": {
                "label": "Image"
               }
              }
             ],
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
           "thumbnailUrl": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_t.jpg"
          },
          "backwardYaw": -174.5,
          "yaw": 66.08,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
          "backwardYaw": -157.73,
          "yaw": 137.01,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
          "backwardYaw": -164.09,
          "yaw": 6.44,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
          "backwardYaw": -25.53,
          "yaw": 174.57,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
          "backwardYaw": 88.55,
          "yaw": -78.27,
          "distance": 1
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
          "class": "SphericPanoramaFrame",
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
          },
          "overlays": [
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_908C2C3F_875E_A63E_41CF_F99F84BBDED3); this.setMediaBehaviour(this.playList_902B3B7C_875E_A242_41D7_9D386686C5E2, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 174.57,
              "hfov": 5.88,
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
              "pitch": -7.02
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
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_0_0.png",
                 "width": 105,
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
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_9083AC2C_875E_A5C2_41C2_7C662D0F156B); this.setMediaBehaviour(this.playList_90DD3B8D_875E_A2C2_41DF_0CA37809525D, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 6.44,
              "hfov": 5.91,
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
              "pitch": -3.74
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
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_1_0.png",
                 "width": 105,
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
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246, this.camera_90B5FC58_875E_A642_41E0_9ADD6D6F3498); this.setMediaBehaviour(this.playList_90DD7B8D_875E_A2C2_41BE_DE424F02198F, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -78.27,
              "hfov": 5.91,
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
              "pitch": -3.14
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
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_2_0.png",
                 "width": 105,
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
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0B7B5A27_1FEB_7426_4195_945554348391, this.camera_90918C01_875E_A5C2_41C5_1B22652205D9); this.setMediaBehaviour(this.playList_90D1DB86_875E_A2CE_41C6_795B3E126703, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 66.08,
              "hfov": 5.92,
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
              "pitch": 0.87
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
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_3_0.png",
                 "width": 105,
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
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_909B7C19_875E_A5C2_41CD_86997C60BE1C); this.setMediaBehaviour(this.playList_9029CB7E_875E_A23E_41CC_3FEFB6B0EB2A, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 137.01,
              "hfov": 5.91,
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
              "pitch": -2.79
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
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_4_0.png",
                 "width": 105,
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
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, null, null, null, null, null, false)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -45.57,
              "hfov": 5.85,
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
              "pitch": 8.64
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
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_5_0.png",
                 "width": 105,
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
            "showEasing": "cubic_in",
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "yaw": -45.57,
            "rotationZ": 0,
            "hideDuration": 500,
            "class": "PopupPanoramaOverlay",
            "id": "popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7",
            "hfov": 5.85,
            "rotationX": 0,
            "rotationY": 0,
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
            "popupDistance": 100,
            "hideEasing": "cubic_out",
            "popupMaxHeight": "95%"
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.setMediaBehaviour(this.playList_90DCEB8A_875E_A2C6_41C6_DA6DA3374F65, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 21.44,
              "hfov": 4.82,
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
              "pitch": 35.54
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
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_6_0.png",
                 "width": 105,
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
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_36E9C513_249E_702C_41C0_2CA0C18AAE54, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_32BB558C_24AE_9034_41A0_905F3B8026D3, null, null, null, null, false)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -13.2,
              "hfov": 5.92,
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
              "pitch": -1.15
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
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_7_0.png",
                 "width": 105,
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
            "showEasing": "cubic_in",
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "yaw": -13.2,
            "rotationZ": 0,
            "hideDuration": 500,
            "class": "PopupPanoramaOverlay",
            "id": "popup_36E9C513_249E_702C_41C0_2CA0C18AAE54",
            "hfov": 5.92,
            "rotationX": 0,
            "rotationY": 0,
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
            "popupDistance": 100,
            "hideEasing": "cubic_out",
            "popupMaxHeight": "95%"
           },
           {
            "showEasing": "cubic_in",
            "showDuration": 500,
            "popupMaxWidth": "95%",
            "yaw": 34.02,
            "rotationZ": 0,
            "hideDuration": 500,
            "class": "PopupPanoramaOverlay",
            "id": "popup_37E7B455_24BA_B0D4_41A5_EF23708D6C53",
            "hfov": 5.92,
            "rotationX": 0,
            "rotationY": 0,
            "loop": false,
            "autoplay": true,
            "pitch": -1.52,
            "popupDistance": 100,
            "hideEasing": "cubic_out",
            "popupMaxHeight": "95%",
            "video": {
             "class": "VideoResource",
             "width": 1280,
             "mp4Url": "media/video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB.mp4",
             "height": 720
            }
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_37E7B455_24BA_B0D4_41A5_EF23708D6C53, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, true) } else { this.showPopupMedia(this.window_8CCDF9D5_874E_AE42_41D9_2EFB2C0C6948, this.video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB, this.PlayList_8B1C1BEB_874E_6246_41D9_B0297732D210, '95%', '95%', true, true) }",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 34.02,
              "hfov": 5.92,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_9_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": -1.52
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
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_9_0.png",
                 "width": 105,
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
        "thumbnailUrl": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_t.jpg"
       },
       "backwardYaw": 6.44,
       "yaw": -164.09,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
       "backwardYaw": -155.58,
       "yaw": 69.33,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
       "backwardYaw": -30.03,
       "yaw": -5.23,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
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
       "class": "SphericPanoramaFrame",
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
       },
       "overlays": [
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_9FDEDD58_875E_A642_41C2_4F6F0B38C287); this.setMediaBehaviour(this.playList_90D08B84_875E_A2C2_41DB_56B61FBFE6CD, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -164.09,
           "hfov": 5.91,
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
           "pitch": -3.15
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
              "class": "ImageResourceLevel",
              "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_0_0.png",
              "width": 105,
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
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E, this.camera_9FF26D71_875E_A645_41C3_DBD8BB5E2870); this.setMediaBehaviour(this.playList_90D18B86_875E_A2CE_41C7_8F54EE0F18A8, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -5.23,
           "hfov": 5.89,
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
           "pitch": -5.49
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
              "class": "ImageResourceLevel",
              "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_1_0.png",
              "width": 105,
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
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0B7B5A27_1FEB_7426_4195_945554348391, this.camera_9FC08D65_875E_A642_41C1_FD306FFC7746); this.setMediaBehaviour(this.playList_90D1DB86_875E_A2CE_41C6_795B3E126703, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 69.33,
           "hfov": 5.92,
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
           "pitch": -2.4
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
              "class": "ImageResourceLevel",
              "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_2_0.png",
              "width": 105,
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
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.setMediaBehaviour(this.playList_90DCEB8A_875E_A2C6_41C6_DA6DA3374F65, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -1.18,
           "hfov": 4.95,
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
           "pitch": 33.3
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
              "class": "ImageResourceLevel",
              "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_3_0.png",
              "width": 105,
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
       "thumbnailUrl": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_t.jpg"
    },
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F6D8F_20DF_6B94_410B_52B44954FB30, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
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
     "id": "panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": {
     "buttonCardboardView": {
      "toolTipFontSize": 12,
      "class": "IconButton",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "toolTipTextShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "id": "IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667",
      "transparencyActive": false,
      "paddingLeft": 0,
      "width": 75,
      "borderSize": 0,
      "toolTipPaddingLeft": 6,
      "shadow": false,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipOpacity": 1,
      "verticalAlign": "middle",
      "minHeight": 1,
      "toolTipFontWeight": "normal",
      "mode": "push",
      "toolTipPaddingTop": 4,
      "minWidth": 1,
      "toolTip": "VR",
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "height": 50,
      "toolTipFontFamily": "Arial",
      "toolTipFontStyle": "normal",
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderSize": 1,
      "paddingTop": 0,
      "toolTipBorderColor": "#767676",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667.png",
      "propagateClick": false,
      "data": {
       "name": "Button_VR"
      },
      "horizontalAlign": "center",
      "toolTipPaddingBottom": 4,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipShadowVerticalLength": 0
     },
     "mouseControlMode": "drag_acceleration",
     "class": "PanoramaPlayer",
     "viewerArea": "this.MainViewer",
     "id": "MainViewerPanoramaPlayer",
     "gyroscopeVerticalDraggingEnabled": true,
     "touchControlMode": "drag_rotation",
     "displayPlaybackBar": true
    }
   }
  ],
  "id": "playList_90DD3B8D_875E_A2C2_41DF_0CA37809525D"
 },
 "this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
 {
  "class": "FadeOutEffect",
  "id": "effect_E3587215_ED68_4577_4183_716A0D8E6DA7",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9079A028_875E_9DC2_418F_8D236F725215",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 62.7,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_0AA1E95D_2068_946A_419A_A79BE517FB92"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_90FAE0AA_875E_9EC6_41D9_8EC9EBA280CF",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_90F350A3_875E_9EC6_41C8_C74D38887B33",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid8B774BC9_874E_6242_41C5_044CD4994562VideoPlayer)",
    "media": {
     "label": "Rotonda_LQ_short_2",
     "scaleMode": "fit_inside",
     "width": 1280,
     "loop": false,
     "id": "video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB",
     "class": "Video",
     "height": 720,
     "thumbnailUrl": "media/video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB_t.jpg",
     "video": {
      "class": "VideoResource",
      "width": 1280,
      "mp4Url": "media/video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB.mp4",
      "height": 720
     }
    },
    "start": "this.viewer_uid8B774BC9_874E_6242_41C5_044CD4994562VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_8B1C1BEB_874E_6246_41D9_B0297732D210, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_8B1C1BEB_874E_6246_41D9_B0297732D210, 0)",
    "class": "VideoPlayListItem",
    "player": {
     "class": "VideoPlayer",
     "viewerArea": {
      "paddingBottom": 0,
      "toolTipFontSize": "1.11vh",
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "viewer_uid90DA6B8F_875E_A2DE_41D0_AE3EC80E40F6",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadShadow": true,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "borderSize": 0,
      "progressBackgroundOpacity": 1,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "playbackBarOpacity": 1,
      "width": "100%",
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 50,
      "progressBarOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressOpacity": 1,
      "toolTipFontStyle": "normal",
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "progressLeft": 0,
      "minWidth": 100,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "playbackBarHeadWidth": 6,
      "playbackBarHeight": 10,
      "height": "100%",
      "toolTipTextShadowOpacity": 0,
      "transitionDuration": 500,
      "propagateClick": false,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderRadius": 0,
      "toolTipPaddingBottom": 4,
      "playbackBarRight": 0,
      "playbackBarHeadHeight": 15,
      "class": "ViewerArea",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "displayTooltipInTouchScreens": true,
      "toolTipFontColor": "#606060",
      "toolTipPaddingLeft": 6,
      "paddingLeft": 0,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "playbackBarProgressBorderSize": 0,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
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
      "toolTipPaddingTop": 4,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "progressRight": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipBorderSize": 1,
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipBorderColor": "#767676",
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "data": {
       "name": "ViewerArea6717"
      },
      "progressBottom": 2,
      "progressHeight": 10,
      "playbackBarHeadBackgroundColorDirection": "vertical"
     },
     "id": "viewer_uid8B774BC9_874E_6242_41C5_044CD4994562VideoPlayer",
     "displayPlaybackBar": true
    }
   }
  ],
  "id": "PlayList_8B1C1BEB_874E_6246_41D9_B0297732D210"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_90F170A5_875E_9EC2_41D2_B2CFD4CA17DA",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_91DA0F6C_875E_A242_41DC_06CBB9F10CBE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -110.67,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9168DECF_875E_A25E_41DB_BB09ADCF3F42",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 35.26,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345FCD97_20DF_6BB3_41B7_5533F0603364",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7",
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": {
     "minimumZoomFactor": 0.5,
     "fieldOfViewOverlayInsideColor": "#FFFFFF",
     "class": "Map",
     "label": "Centro Corporativo",
     "id": "map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
     "width": 300,
     "fieldOfViewOverlayRadiusScale": 0.19,
     "maximumZoomFactor": 1.2,
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
     "scaleMode": "fit_inside",
     "overlays": [
      {
       "useHandCursor": true,
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
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_0.png",
           "width": 19,
           "height": 19
          }
         ]
        }
       },
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
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_FCFECF03_DD1A_A3DC_41C3_A9E15DF295E9",
       "data": {
        "label": "Image"
       }
      },
      {
       "useHandCursor": true,
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
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_1.png",
           "width": 19,
           "height": 19
          }
         ]
        }
       },
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
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_FFCF2D2D_DD19_A627_41B8_CFCAE1C65CD2",
       "data": {
        "label": "Image"
       }
      },
      {
       "useHandCursor": true,
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
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_2.png",
           "width": 19,
           "height": 19
          }
         ]
        }
       },
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
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_FEA879B1_DD16_6E3C_41E7_2FF39A318D51",
       "data": {
        "label": "Image"
       }
      },
      {
       "useHandCursor": true,
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
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_3.png",
           "width": 19,
           "height": 19
          }
         ]
        }
       },
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
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_FF9139DD_DD16_AE64_41E7_9B2CF203BB6B",
       "data": {
        "label": "Image"
       }
      },
      {
       "useHandCursor": true,
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
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_4.png",
           "width": 19,
           "height": 19
          }
         ]
        }
       },
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
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_FEFCC206_DD17_9DE5_41C8_3ECC72F63227",
       "data": {
        "label": "Image"
       }
      },
      {
       "useHandCursor": true,
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
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_5.png",
           "width": 19,
           "height": 19
          }
         ]
        }
       },
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
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_FF91DE69_DD17_A22C_41DE_D1342F576EA9",
       "data": {
        "label": "Image"
       }
      },
      {
       "useHandCursor": true,
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
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_6.png",
           "width": 19,
           "height": 19
          }
         ]
        }
       },
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
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_FFB50497_DD16_A6E4_41E4_5BEA266BE86F",
       "data": {
        "label": "Image"
       }
      },
      {
       "useHandCursor": true,
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
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_7.png",
           "width": 19,
           "height": 19
          }
         ]
        }
       },
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
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_FE5AF794_DD09_A2E4_41D0_61777F7E15D3",
       "data": {
        "label": "Image"
       }
      },
      {
       "useHandCursor": true,
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
           "class": "ImageResourceLevel",
           "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_8.png",
           "width": 20,
           "height": 20
          }
         ]
        }
       },
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
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_01B54DAD_1A41_CF78_41A6_909B29F94B5F",
       "data": {
        "label": "Image"
       }
      }
     ],
     "fieldOfViewOverlayOutsideOpacity": 0,
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "height": 209,
     "thumbnailUrl": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_t.png"
    },
    "player": {
     "class": "MapPlayer",
     "viewerArea": {
      "paddingBottom": 0,
      "toolTipFontSize": 12,
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "MapViewer",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadShadow": true,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "borderSize": 0,
      "progressBackgroundOpacity": 1,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "playbackBarOpacity": 1,
      "width": "99.417%",
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 1,
      "progressBarOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressOpacity": 1,
      "toolTipFontStyle": "normal",
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "progressLeft": 0,
      "minWidth": 1,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "playbackBarHeadWidth": 6,
      "playbackBarHeight": 10,
      "height": "70.806%",
      "toolTipTextShadowOpacity": 0,
      "transitionDuration": 500,
      "propagateClick": false,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderRadius": 0,
      "toolTipPaddingBottom": 4,
      "playbackBarRight": 0,
      "playbackBarHeadHeight": 15,
      "class": "ViewerArea",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "displayTooltipInTouchScreens": true,
      "toolTipFontColor": "#606060",
      "toolTipPaddingLeft": 6,
      "paddingLeft": 0,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "playbackBarProgressBorderSize": 0,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
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
      "toolTipPaddingTop": 4,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "progressRight": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipBorderSize": 1,
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipBorderColor": "#767676",
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "data": {
       "name": "MapViewer"
      },
      "progressBottom": 2,
      "progressHeight": 10,
      "playbackBarHeadBackgroundColorDirection": "vertical"
     },
     "id": "MapViewerMapPlayer",
     "movementMode": "constrained"
    },
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_90C2EB9F_875E_A2FE_41DA_0CB08933BBAE"
 },
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_32CD359C_24AE_9054_41BC_CF812CF11760"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_90C56B9F_875E_A2FE_41D4_9CDF115E3CE0"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_2606DC67_37A3_6E7A_417B_82BAC7B62691",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9F2FED4A_875E_A646_4156_66798546BFC8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -129.9,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "id": "effect_90FEB0A5_875E_9EC2_41DE_01B9E437440E",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9E0A2E17_875E_A5CE_41D0_9A5112D0A549",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -15.15,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9042500F_875E_9DDE_41CB_823A4ACDAE6D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -51.43,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_91190EF8_875E_A242_41D7_F6417C35130C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 67.62,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_90F2E0A0_875E_9EC2_41DC_E5D57A264191",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9074601B_875E_9DC6_4192_D603368E7BC3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 84.54,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_90C83BA6_875E_A2CE_41D8_96446FDC573E, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E5D8F_20DF_6B94_4193_ABB7E016F309, 'hideEffect', false)",
    "media": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E6D8F_20DF_6B94_41A3_46A48BBB0ACC, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C83BA6_875E_A2CE_41D8_96446FDC573E"
   }
  ],
  "id": "playList_90D08B84_875E_A2C2_41DB_56B61FBFE6CD"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_E3586214_ED68_4574_41E5_D2720D677B2E",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_32C8A59C_24AE_9054_41B0_230945BD42EC"
 },
 "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
 "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
 {
  "class": "FadeOutEffect",
  "id": "effect_90F040A4_875E_9EC2_41CD_075EA9E25CD9",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9E2EAE2F_875E_A5DE_41D3_C2D3F8202E47",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -140.57,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.popup_3509F7CC_246E_7035_41AB_BB188EF81D62",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9E665DF0_875E_A642_41DB_443C216C69BC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -29.95,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "id": "effect_90FED0A5_875E_9EC2_41E0_7A665814B577",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_90C99BA8_875E_A2C2_417A_6B4200D385DE, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E3D97_20DF_6BB3_41B7_C907450FD669, 'hideEffect', false)",
    "media": "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345FCD97_20DF_6BB3_41B7_5533F0603364, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
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
     "id": "panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C99BA8_875E_A2C2_417A_6B4200D385DE"
   }
  ],
  "id": "playList_90D1FB87_875E_A2CE_41B3_C166516E5A55"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_90C85BA8_875E_A2C2_41DC_1E4551C5C854, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E8D8F_20DF_6B94_419E_3AE578883B9D, 'hideEffect', false)",
    "media": "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD8F_20DF_6B94_41A5_6F5908EFA5C8, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
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
     "id": "panorama_0B7B5A27_1FEB_7426_4195_945554348391_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C85BA8_875E_A2C2_41DC_1E4551C5C854"
   }
  ],
  "id": "playList_90D1DB86_875E_A2CE_41C6_795B3E126703"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_90BDCC6C_875E_A642_4198_1D3BAD948F06",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 75.18,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345CED8F_20DF_6B94_41B4_61907719F453",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345F2D8F_20DF_6B94_4160_462A4AF9B97A",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
 {
  "class": "FadeOutEffect",
  "id": "effect_345E6D8F_20DF_6B94_41A3_46A48BBB0ACC",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_D3728F7A_DF8C_960C_417C_830810DD2653",
  "duration": 1000,
  "easing": "linear"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_911FAEEA_875E_A246_41B1_06EE62D1AF68",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -40.57,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34597D8F_20DF_6B94_41AA_44DC8A057CBB, 'hideEffect', false)",
    "media": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34590D8F_20DF_6B94_41BB_A45E78753DDE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
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
     "id": "panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "playList_902B3B7C_875E_A242_41D7_9D386686C5E2"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "panorama_8C911D20_820E_09EE_41C0_C274C66438F8_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -102.2,
   "hfov": 110,
   "pitch": -43.45
  }
 },
 "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
 {
  "class": "FadeInEffect",
  "id": "effect_90F1A0A4_875E_9EC2_41BA_E2EA45E2349B",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_91821FC5_875E_A242_41E0_21F9156B6A7E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.59,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
 "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "id": "effect_F083FF13_E49C_8716_41EC_3E7D67287F82",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_90C28B9F_875E_A2FE_41DF_43FC8A21BAD8"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 67.14,
   "hfov": 110,
   "pitch": -0.98
  }
 },
 "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
 "this.popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865",
 {
  "class": "FadeOutEffect",
  "id": "effect_345F8D97_20DF_6BB3_41B5_1A0A5D57797F",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345E8D8F_20DF_6B94_419E_3AE578883B9D",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345E4D8F_20DF_6B94_41B8_3FE607FF9006",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345EBD8F_20DF_6B94_41A4_072F6F80B3A4",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
 {
  "class": "FadeOutEffect",
  "id": "effect_90FD60A8_875E_9EC2_41E0_460963B571B5",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_20FB6245_107F_4740_41A8_9C0A46A92B4D"
 },
 "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_90C98BA7_875E_A2CE_41CB_DC4AB5A761AC, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CDD8F_20DF_6B94_41B6_C00B98F530E1, 'hideEffect', false)",
    "media": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CED8F_20DF_6B94_41B4_61907719F453, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
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
     "id": "panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C98BA7_875E_A2CE_41CB_DC4AB5A761AC"
   }
  ],
  "id": "playList_90D0FB85_875E_A2C2_41C9_C87BC84AE015"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_EF6C1355_F62E_F8F5_41C5_B9A5C5CCED3E",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9F980D96_875E_A6CE_41BC_5AFB73988908",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.37,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "id": "effect_90F1F0A4_875E_9EC2_41D5_06EC251F325B",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345E5D8F_20DF_6B94_4193_ABB7E016F309",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8",
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EED8F_20DF_6B94_417E_826782EEF8F0, 'hideEffect', false)",
    "media": "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EFD8F_20DF_6B94_41B7_4853257F85EE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
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
     "id": "panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "playList_90DC2B8B_875E_A2C6_4180_496E779C9009"
 },
 "this.video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB",
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_C4896E50_D4F3_6B5D_41D3_2EEBDC3443C4"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_E3598214_ED68_4574_41E8_2F261C5C21DC",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345EED8F_20DF_6B94_417E_826782EEF8F0",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_90ABEC98_875E_A6C2_41DC_C65B90CA4EBC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -95.48,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.popup_3BBE3C5B_107F_C340_4178_756995F5135C",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9F3D4D3D_875E_A7C2_41C3_2408478759E6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.52,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": {
     "label": "Video LLCC_1",
     "scaleMode": "fit_inside",
     "width": 1920,
     "loop": false,
     "id": "video_AACF54D1_863F_D6FD_41DE_40A992E518BA",
     "class": "Video",
     "height": 1078,
     "thumbnailUrl": "media/video_AACF54D1_863F_D6FD_41DE_40A992E518BA_t.jpg",
     "video": {
      "class": "VideoResource",
      "width": 1920,
      "mp4Url": "media/video_AACF54D1_863F_D6FD_41DE_40A992E518BA.mp4",
      "height": 1078
     }
    },
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_90C50BA0_875E_A2C2_41AC_84EC6A0FC877, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_90C50BA0_875E_A2C2_41AC_84EC6A0FC877, 0)",
    "class": "VideoPlayListItem",
    "player": {
     "class": "VideoPlayer",
     "viewerArea": "this.MainViewer",
     "id": "MainViewerVideoPlayer",
     "displayPlaybackBar": true
    }
   }
  ],
  "id": "playList_90C50BA0_875E_A2C2_41AC_84EC6A0FC877"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9E42FDD5_875E_A642_41DE_4FEB0B9FC976",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -5.43,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_34592D8F_20DF_6B94_41B2_36A2D8C28548",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_D082516E_DCEA_7368_41CB_9D0CFA830713"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_91EB7FAC_875E_A2C2_41B1_9DE994C990E8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -103.1,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_90A22C84_875E_A6C2_41DD_1F447BB7EEE3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 106.1,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345C8D97_20DF_6BB3_41AB_11DFCCAD81C0",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9E1B5E0A_875E_A5C6_41D0_87BE9A82E14B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -143.56,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_919F2FB8_875E_A2C2_41D9_516203D7EA11",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -54.13,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9E504DC8_875E_A642_41DF_A7B5CBF3A8A5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 33.73,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
 {
  "class": "FadeInEffect",
  "id": "effect_90FD80A9_875E_9EC2_41CA_8FE00978C16A",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_91BCBFDC_875E_A242_41CC_01518B86EF52",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.65,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -160.79,
   "hfov": 110,
   "pitch": -16.48
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_91A9BFF5_875E_A242_41D7_99B55E92D7D8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 22.39,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "id": "effect_90FF20A6_875E_9ECE_41C0_687849863087",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_91FE6F92_875E_A2C6_41DC_2F506BDA139D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 13.32,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_90C8EBA8_875E_A2C2_41D5_49D62977A4E8, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F2D8F_20DF_6B94_4160_462A4AF9B97A, 'hideEffect', false)",
    "media": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CCD8F_20DF_6B94_41BC_F061530E83AF, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
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
     "id": "panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C8EBA8_875E_A2C2_41D5_49D62977A4E8"
   }
  ],
  "id": "playList_90D18B86_875E_A2CE_41C7_8F54EE0F18A8"
 },
 "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
 {
  "class": "FadeOutEffect",
  "id": "effect_345CCD8F_20DF_6B94_41BC_F061530E83AF",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.Menu_90F5FBAC_875E_A2C2_41CA_7C6A2740C6EA",
 {
  "class": "FadeInEffect",
  "id": "effect_90F020A3_875E_9EC6_41DB_6283EAE04F72",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_90C2AB9F_875E_A2FE_41D1_9D28EFCE8752"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_91146EDC_875E_A242_41CA_6B4B1A89FF0C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -29.87,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_90C9DBA7_875E_A2CE_41A7_278A7B201015, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EBD8F_20DF_6B94_41A4_072F6F80B3A4, 'hideEffect', false)",
    "media": "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E4D8F_20DF_6B94_41B8_3FE607FF9006, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
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
     "id": "panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": -109.83,
      "hfov": 110,
      "pitch": -5.19
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C9DBA7_875E_A2CE_41A7_278A7B201015"
   }
  ],
  "id": "playList_90D01B85_875E_A2C2_41CC_A076349A62C8"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_91349F20_875E_A3C2_41C4_73D830AE286C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.1,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
 "this.popup_36E9C513_249E_702C_41C0_2CA0C18AAE54",
 {
  "class": "FadeOutEffect",
  "id": "effect_345FBD97_20DF_6BB3_41A7_CB088826B439",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_90F330A2_875E_9EC6_41B7_278855A31C95",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_3294856D_24AE_90F4_418D_8D9776AE9FF3"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_90DED085_875E_9EC2_41DD_AF7092592564",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -42.99,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_E6145D91_EF14_5D6A_41D9_45623053016B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 53.23,
   "hfov": 110,
   "pitch": 1.41
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9E75EDE2_875E_A646_41D8_4328D87EC6B7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 160.67,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9F169D13_875E_A7C6_41C1_AFDAC1AE1F7D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 62.58,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_916E4EC3_875E_A246_41A0_62F0738BACBB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.95,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_E359B21B_ED68_4573_41E3_2134D2902989",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.popup_36539A9C_24AE_9054_41AC_911079BB2A7C",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9F967D8A_875E_A6C6_4178_BD7BE618558F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 45.04,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_910DCF14_875E_A3C2_41C8_92928611DFE9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -100.57,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345F6D8F_20DF_6B94_410B_52B44954FB30",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_905C1001_875E_9DC2_41CB_6DE6CBA4EC90",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 58.94,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.17,
   "hfov": 110,
   "pitch": -2.94
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345E0D8F_20DF_6B94_41AE_F32FBDDF5924",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43",
 {
  "class": "FadeInEffect",
  "id": "effect_90F2A0A0_875E_9EC2_4195_3499771A9415",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_90FA60AA_875E_9EC6_41CC_14EEAE92EE0D",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345F7D8F_20DF_6B94_41B8_4073C3801F63",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.popup_3AF279F7_20F8_9425_41B8_727B1C05B69A",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_90B5FC58_875E_A642_41E0_9ADD6D6F3498",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -91.45,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "footerBackgroundOpacity": 0,
  "paddingBottom": 0,
  "closeButtonBorderColor": "#000000",
  "backgroundOpacity": 1,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "window_8CCDF9D5_874E_AE42_41D9_2EFB2C0C6948",
  "titlePaddingTop": 5,
  "borderSize": 0,
  "shadowSpread": 1,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "shadowBlurRadius": 6,
  "verticalAlign": "middle",
  "closeButtonBackgroundOpacity": 0.3,
  "borderRadius": 5,
  "scrollBarMargin": 2,
  "modal": true,
  "headerVerticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "minHeight": 20,
  "scrollBarWidth": 10,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColor": [],
  "overflow": "scroll",
  "titleFontFamily": "Arial",
  "closeButtonPressedIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "minWidth": 20,
  "bodyPaddingTop": 0,
  "headerPaddingBottom": 5,
  "paddingRight": 0,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonIconColor": "#000000",
  "footerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonBackgroundColorDirection": "vertical",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonIconHeight": 20,
  "bodyPaddingRight": 0,
  "bodyBackgroundOpacity": 0,
  "contentOpaque": false,
  "headerBackgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "propagateClick": false,
  "titlePaddingBottom": 5,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 0,
  "closeButtonPaddingTop": 5,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerHeight": 5,
  "closeButtonPaddingBottom": 5,
  "backgroundColorRatios": [],
  "headerPaddingTop": 10,
  "class": "Window",
  "scrollBarVisible": "rollOver",
  "closeButtonPaddingRight": 5,
  "children": [
   "this.viewer_uid90DA6B8F_875E_A2DE_41D0_AE3EC80E40F6"
  ],
  "shadowColor": "#000000",
  "paddingLeft": 0,
  "closeButtonIconLineWidth": 5,
  "shadow": true,
  "titleFontSize": "1.29vh",
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyPaddingBottom": 0,
  "titlePaddingRight": 5,
  "closeButtonRollOverBorderSize": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "layout": "vertical",
  "veilOpacity": 0.4,
  "paddingTop": 0,
  "closeButtonIconWidth": 20,
  "headerBackgroundOpacity": 0,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverIconLineWidth": 5,
  "horizontalAlign": "center",
  "headerPaddingLeft": 10,
  "gap": 10,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "data": {
   "name": "Window526"
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowHorizontalLength": 3,
  "shadowOpacity": 0.5
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_E359A214_ED68_4575_41DB_B895523643F9",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345CDD8F_20DF_6B94_41B6_C00B98F530E1",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9165AEB6_875E_A2CE_41AE_C9D93CC33882",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.67,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9035A05F_875E_9E7E_41D3_9AA9C6C574AD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -32.82,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_91E29F9F_875E_A2FE_41D1_F9B19C9F7B2D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -25.69,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_E35A8219_ED68_457C_41E5_C52BA0340B76",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_90FCB0A7_875E_9ECE_41B2_B56E0857DE30",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345E7D8F_20DF_6B94_41B1_383A596C4C67",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_906A6036_875E_9DCE_41D1_3A2E0AA80DCA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 85.36,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94",
 {
  "class": "FadeInEffect",
  "id": "effect_90F120A4_875E_9EC2_41AC_3999563AB047",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345E3D97_20DF_6BB3_41B7_C907450FD669",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345F5D99_20DF_6BBF_41BD_058622C73035",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345EDD8F_20DF_6B94_41BF_D2C5F914980C",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_90C2ABA0_875E_A2C2_41D2_8B6C9C2A05A2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06, 'hideEffect', false)",
    "media": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD84_20DF_6B95_41B9_72E06ABF1981, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
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
     "id": "panorama_160D346A_1A28_89C6_418E_CDA086A7E714_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": -21.7,
      "hfov": 110,
      "pitch": -5.28
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C2ABA0_875E_A2C2_41D2_8B6C9C2A05A2"
   },
   {
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_90C22BA0_875E_A2C2_41D9_DF0B6AC04B62, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_EF6DE039_F622_38BD_41E2_3149DB234972, 'showEffect', false)",
    "media": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_90F2A0A0_875E_9EC2_4195_3499771A9415, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_90F2E0A0_875E_9EC2_41DC_E5D57A264191, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_90F220A0_875E_9EC2_41CC_0593563FA75B, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C22BA0_875E_A2C2_41D9_DF0B6AC04B62"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_90C39BA1_875E_A2C2_41DE_3E99B693E179, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
    "camera": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C39BA1_875E_A2C2_41DE_3E99B693E179"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_90C3FBA1_875E_A2C2_41C0_69ABB0B08306, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_90F3A0A1_875E_9EC2_413F_31BFE9B16EFC, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C3FBA1_875E_A2C2_41C0_69ABB0B08306"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_90C35BA1_875E_A2C2_41B7_F465C46D67F5, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_90F3E0A2_875E_9EC6_41CB_FBAC86829B7D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C35BA1_875E_A2C2_41B7_F465C46D67F5"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_90C0BBA1_875E_A2C2_41DC_D60F9263DF34, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_90F330A2_875E_9EC6_41B7_278855A31C95, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C0BBA1_875E_A2C2_41DC_D60F9263DF34"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_90C01BA2_875E_A2C6_41E0_6DD92E15963F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_90F350A3_875E_9EC6_41C8_C74D38887B33, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C01BA2_875E_A2C6_41E0_6DD92E15963F"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_90C05BA2_875E_A2C6_41A2_0455F2ED048E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
    "camera": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C05BA2_875E_A2C6_41A2_0455F2ED048E"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_90C18BA2_875E_A2C6_41DA_ACCB1C607CFA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_90F020A3_875E_9EC6_41DB_6283EAE04F72, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C18BA2_875E_A2C6_41DA_ACCB1C607CFA"
   },
   {
    "begin": "this.registerKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515', this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515.get('visible')); this.registerKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E', this.Label_E216BE12_F622_684F_41EC_C2D2817E217E.get('visible')); this.registerKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197', this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_90C1FBA2_875E_A2C6_41E0_1728CE49A281, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0B500FD7_1A54_37AE_41A9_19AE8C776076, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_2606DC67_37A3_6E7A_417B_82BAC7B62691, 'hideEffect', false); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true, -1, this.effect_EF6CE355_F62E_F8F5_41E6_CBD8B4202E02, 'showEffect', false); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false); this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_26077C68_37A3_6E75_41BD_CC48A65FF42C, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9, 'hideEffect', false)",
    "media": "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0B500FD7_1A54_37AE_41A9_19AE8C776076, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_90F040A4_875E_9EC2_41CD_075EA9E25CD9, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_90F1A0A4_875E_9EC2_41BA_E2EA45E2349B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')){ if(this.getKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')) { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true, -1, this.effect_90F1F0A4_875E_9EC2_41D5_06EC251F325B, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_2606DC67_37A3_6E7A_417B_82BAC7B62691, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197'); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_EF6C1355_F62E_F8F5_41C5_B9A5C5CCED3E, 'hideEffect', false); if(this.existsKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')){ if(this.getKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')) { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_90F120A4_875E_9EC2_41AC_3999563AB047, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_26077C68_37A3_6E75_41BD_CC48A65FF42C, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E'); if(this.existsKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')){ if(this.getKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')) { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_90F170A5_875E_9EC2_41D2_B2CFD4CA17DA, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')",
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "camera": "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C1FBA2_875E_A2C6_41E0_1728CE49A281"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_90C15BA3_875E_A2C6_41C8_4FF0233F6DFE, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_90FEB0A5_875E_9EC2_41DE_01B9E437440E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 105,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C15BA3_875E_A2C6_41C8_4FF0233F6DFE"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_90CF6BA3_875E_A2C6_4196_7AFF305456E6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_90FED0A5_875E_9EC2_41E0_7A665814B577, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 105,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90CF6BA3_875E_A2C6_4196_7AFF305456E6"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_90CCCBA3_875E_A2C6_41D3_23D0ED5A10AC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_90FE50A6_875E_9ECE_41B5_6B4CE959B40B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90CCCBA3_875E_A2C6_41D3_23D0ED5A10AC"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_90CC3BA3_875E_A2C6_41D1_0013E7D85EB5, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_90FF20A6_875E_9ECE_41C0_687849863087, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90CC3BA3_875E_A2C6_41D1_0013E7D85EB5"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_90CD9BA4_875E_A2C2_41E0_7612BB5EA8E1, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_90FCB0A7_875E_9ECE_41B2_B56E0857DE30, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90CD9BA4_875E_A2C2_41E0_7612BB5EA8E1"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_90CDCBA4_875E_A2C2_41D4_6EF953F55145, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
    "camera": "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90CDCBA4_875E_A2C2_41D4_6EF953F55145"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_90CD2BA4_875E_A2C2_41CA_08656A69654F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 0)",
    "media": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
    "end": "this.trigger('tourEnded')",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90CD2BA4_875E_A2C2_41CA_08656A69654F"
   }
  ],
  "id": "mainPlayList"
 },
 "this.popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D",
 {
  "class": "FadeOutEffect",
  "id": "effect_34590D8F_20DF_6B94_41BB_A45E78753DDE",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0",
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_90C2FB9F_875E_A2FE_41CC_14E31F43FAD6"
 },
 "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_917B3EAA_875E_A2C6_4119_571F29AF0B80",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -83.53,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8",
 "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_camera",
 {
  "class": "FadeOutEffect",
  "id": "effect_345F5D8F_20DF_6B94_41B1_D214F66E6293",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E7D8F_20DF_6B94_41B1_383A596C4C67, 'hideEffect', false)",
    "media": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E0D8F_20DF_6B94_41AE_F32FBDDF5924, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
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
     "id": "panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": -132.07,
      "hfov": 110,
      "pitch": -40.96
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "playList_90DCEB8A_875E_A2C6_41C6_DA6DA3374F65"
 },
 "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
 "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_91288F52_875E_A246_41D5_12C967B2B5DB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 163.89,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_0AAA2971_2068_943D_41B4_10DFF5B38D1B"
 },
 "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
 "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_90F4D09F_875E_9EFE_41CA_A7E73A982FCC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.08,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9FF26D71_875E_A645_41C3_DBD8BB5E2870",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 149.97,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
 "this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
 {
  "class": "FadeOutEffect",
  "id": "effect_345EFD8F_20DF_6B94_41B7_4853257F85EE",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_camera",
 {
  "class": "FadeInEffect",
  "id": "effect_EF6CE355_F62E_F8F5_41E6_CBD8B4202E02",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F7D8F_20DF_6B94_41B8_4073C3801F63, 'hideEffect', false)",
    "media": "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F0D8F_20DF_6B94_419D_ABD4CFF44CF3, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "playList_90DD7B8D_875E_A2C2_41BE_DE424F02198F"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9FDEDD58_875E_A642_41C2_4F6F0B38C287",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -173.56,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_D38C2C6E_DFA1_73F8_41C3_8C1C155D72CB"
 },
 "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_camera",
 {
  "class": "FadeInEffect",
  "id": "effect_90FD00A9_875E_9EC2_41C1_9D3B1296245D",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_camera"
   }
  ],
  "id": "playList_90D8EB92_875E_A2C6_41DE_D7CA36E0F848"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_90008050_875E_9E42_41C4_C89EFBA7916C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 40.93,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345EAD84_20DF_6B95_41B9_72E06ABF1981",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9139EF3A_875E_A3C6_41C6_2DE1C25CF558",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -147.08,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9E3C1E23_875E_A5C6_41B6_23E49537CD5C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -113.6,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_91C80F86_875E_A2CE_41D7_DF2A42213080",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -0.95,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
 {
  "class": "FadeOutEffect",
  "id": "effect_34597D8F_20DF_6B94_41AA_44DC8A057CBB",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_E3582213_ED68_454C_41D3_299F2B40CFF6",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 0, 1); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06, 'hideEffect', false)",
    "media": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD84_20DF_6B95_41B9_72E06ABF1981, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 1, 2); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_EF6DE039_F622_38BD_41E2_3149DB234972, 'showEffect', false)",
    "media": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_90FD20A8_875E_9EC2_41D7_45D06576C4ED, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_90FD60A8_875E_9EC2_41E0_460963B571B5, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_90FCD0A8_875E_9EC2_41D9_245CB1FC3F44, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "camera": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 2, 3)",
    "media": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
    "camera": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 3, 4); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_90FD80A9_875E_9EC2_41CA_8FE00978C16A, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 4, 5); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_90FD00A9_875E_9EC2_41C1_9D3B1296245D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 5, 6); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_90FAE0AA_875E_9EC6_41D9_8EC9EBA280CF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 6, 7); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_90FA60AA_875E_9EC6_41CC_14EEAE92EE0D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 7, 0)",
    "media": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
    "camera": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_90FE50A6_875E_9ECE_41B5_6B4CE959B40B",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_camera",
 "this.video_AACF54D1_863F_D6FD_41DE_40A992E518BA",
 {
  "class": "FadeOutEffect",
  "id": "effect_90F220A0_875E_9EC2_41CC_0593563FA75B",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_095FC95D_2068_946A_41A5_88BA52F0CF59"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_90C21B9F_875E_A2FE_41D7_15029842A290"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_90FCD0A8_875E_9EC2_41D9_245CB1FC3F44",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_32C8659C_24AE_9054_4187_C8E2724888E0"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_32CC759C_24AE_9054_419F_511B2D533327"
 },
 "this.popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C",
 "this.popup_D60305E4_DCEA_D39F_419B_D9B149482827",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_90C0C092_875E_9EC6_41D3_7FF81694A752",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -138.7,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.popup_37E7B455_24BA_B0D4_41A5_EF23708D6C53",
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_E253E6BD_EF1D_EC9A_41EA_C503E65D3053"
 },
 "this.popup_369EF53B_249A_B05C_41BC_AE1E970C16EA",
 "this.popup_36258FF0_249D_EFED_41AB_54067BE4CE8C",
 "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_32CBA59C_24AE_9054_41C1_95FEFF54BD80"
 },
 "this.popup_3A3C822F_20F8_9425_41B2_B5F3B1085960",
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_90C8FBA6_875E_A2CE_41DF_C266455348A7, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345ECD8F_20DF_6B94_41AE_2D20B974323E, 'hideEffect', false)",
    "media": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EDD8F_20DF_6B94_41BF_D2C5F914980C, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C8FBA6_875E_A2CE_41DF_C266455348A7"
   }
  ],
  "id": "playList_9029CB7E_875E_A23E_41CC_3FEFB6B0EB2A"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9F5EACB3_875E_A6C6_41BD_DF2F777BB46A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 174.77,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_C406C318_D4FF_7ACD_41B8_0A98872E7CE5"
 },
 "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9FAE6DBC_875E_A6C2_4137_DE9ED38918B0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -46.66,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9FE5BD7E_875E_A63E_41CE_2EECAEC028F1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 148.88,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345F0D8F_20DF_6B94_419D_ABD4CFF44CF3",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345ECD8F_20DF_6B94_41AE_2D20B974323E",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_camera",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_25AB8A34_3513_DE40_41C8_119007832823_0_0.jpg",
    "width": 1600,
    "height": 896
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_25AB8A34_3513_DE40_41C8_119007832823_0_1.jpg",
    "width": 1024,
    "height": 573
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_25AB8A34_3513_DE40_41C8_119007832823_0_2.jpg",
    "width": 512,
    "height": 286
   }
  ],
  "id": "ImageResource_232B696E_352D_BAC0_41B1_E8DFF9648419"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9F8D5DA3_875E_A6C6_41D7_33F8E3302382",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.32,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_917ECE9E_875E_A2FE_41C6_68715D4FB248",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -152.92,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "id": "effect_EF6DE039_F622_38BD_41E2_3149DB234972",
  "duration": 0,
  "easing": "cubic_in_out"
 },
 "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_camera",
 {
  "class": "FadeOutEffect",
  "id": "effect_E35A021A_ED68_457D_41DB_F92702D0649E",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_908C2C3F_875E_A63E_41CF_F99F84BBDED3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 154.47,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_26077C68_37A3_6E75_41BD_CC48A65FF42C",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8_0_0.jpg",
    "width": 1500,
    "height": 1000
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ],
  "id": "ImageResource_72699DCF_64A4_9E66_417A_2D9BA948AEB2"
 },
 "this.map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
 "this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
 {
  "class": "FadeOutEffect",
  "id": "effect_345F4D97_20DF_6BB3_41BF_89E603E3F0DA",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_90C2BB9F_875E_A2FE_41C6_1165C3E294CF"
 },
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_D09C8172_DCEA_737B_41C7_76727B821C90"
 },
 "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9F7FDCEF_875E_A65E_41DF_BE955273A324",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -20.08,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9F656D01_875E_A7C2_41D1_27A9181C4342",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.55,
   "hfov": 105,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9FBDADB0_875E_A6C2_41CD_C69FD5628656",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -107.65,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9ED08E3B_875E_A5C6_41AA_05685690035D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 145.78,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5",
 "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
 {
  "class": "FadeInEffect",
  "id": "effect_90F3A0A1_875E_9EC2_413F_31BFE9B16EFC",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -143.47,
   "hfov": 110,
   "pitch": -37.77
  }
 },
 "this.popup_25AB8A34_3513_DE40_41C8_119007832823",
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_90C90BA7_875E_A2CE_41CD_976F3D4F83E9, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F8D97_20DF_6BB3_41B5_1A0A5D57797F, 'hideEffect', false)",
    "media": "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345FBD97_20DF_6BB3_41A7_CB088826B439, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C90BA7_875E_A2CE_41CD_976F3D4F83E9"
   }
  ],
  "id": "playList_90D03B85_875E_A2CD_41D1_B55EAFBD7FF1"
 },
 "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
 {
  "class": "FadeOutEffect",
  "id": "effect_345CFD97_20DF_6BB4_41BB_97095DF13BBA",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_camera"
   }
  ],
  "id": "playList_90D83B93_875E_A2C6_41DD_E61BD192C814"
 },
 "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_90C94BA7_875E_A2CE_41AF_C0DF55856BE4, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F4D97_20DF_6BB3_41BF_89E603E3F0DA, 'hideEffect', false)",
    "media": "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F5D99_20DF_6BBF_41BD_058622C73035, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_90C94BA7_875E_A2CE_41AF_C0DF55856BE4"
   }
  ],
  "id": "playList_90D07B86_875E_A2CE_41BE_B73A9C7CE7EE"
 },
 "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_camera",
 "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9102AF06_875E_A3CE_41A0_FD238590A2E2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -70.25,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
 "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
 "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F",
 "this.popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9FC08D65_875E_A642_41C1_FD306FFC7746",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 24.42,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "id": "effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42",
  "duration": 1000,
  "easing": "linear"
 },
 "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CFD97_20DF_6BB4_41BB_97095DF13BBA, 'hideEffect', false)",
    "media": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345C8D97_20DF_6BB3_41AB_11DFCCAD81C0, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "playList_90DB5B90_875E_A2C2_41CF_3A9EE379D9C1"
 },
 "this.popup_3638CA38_249B_905C_41B3_EA26EB9333F0",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9189AFD0_875E_A242_41D1_BBCF0813949C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 94.62,
   "hfov": 105,
   "pitch": 0
  }
 },
 "this.MainViewerPanoramaPlayer",
 "this.popup_3A305B90_20FB_94FB_4193_FEB3450979FC",
 "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
 "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9E16ADFD_875E_A642_41D8_41470E67E1B8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 156.83,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9F455CC5_875E_A642_41D5_F90BE18DA478",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -156.68,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.MapViewerMapPlayer",
 "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_D09DC170_DCEA_7378_41EB_423962A6DDEA"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_34593D8F_20DF_6B94_41B9_C6D005829662",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_91204F45_875E_A242_41B1_1BAA156A9238",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 118.98,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9083AC2C_875E_A5C2_41C2_7C662D0F156B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 15.91,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_90C2CB9F_875E_A2FE_41DA_1E6E7C389B35"
 },
 "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9175EE92_875E_A2C6_41C0_26DFB433FD5C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.87,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_90918C01_875E_A5C2_41C5_1B22652205D9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.5,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.MainViewerVideoPlayer",
 "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_91C3FF79_875E_A242_41E0_A639D84E88E6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 101.73,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.popup_34BBD83C_246A_F055_41C1_EBEF48C7F767",
 "this.popup_3CC23B7F_107F_4540_4180_ABF478E71F9A",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9F4A6CD7_875E_A64E_41C1_0BABC8A45D6C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.45,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34592D8F_20DF_6B94_41B2_36A2D8C28548, 'hideEffect', false)",
    "media": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34593D8F_20DF_6B94_41B9_C6D005829662, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "playList_90289B7D_875E_A242_417F_63B46583EC5B"
 },
 "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_9039D06B_875E_9E46_41DE_FBF6D99EAB45",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -123.57,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "id": "effect_90F3E0A2_875E_9EC6_41CB_FBAC86829B7D",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_909B7C19_875E_A5C2_41CD_86997C60BE1C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 22.27,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_91A26FE8_875E_A242_41D5_AFC41560FD20",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -107.93,
   "hfov": 105,
   "pitch": 0
  }
 },
 "this.popup_209897EC_11B3_4D40_41A2_837DB50E3A59",
 {
  "class": "FadeOutEffect",
  "id": "effect_345EAD8F_20DF_6B94_41A5_6F5908EFA5C8",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_E252A6BD_EF1D_EC9A_41D3_31F4A8966575"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9F1BBD23_875E_A7C6_41C9_B797D751FB7C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -72.35,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_913EDF2D_875E_A3C2_41E0_E2903063FEF1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 120.31,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_902A9078_875E_9E42_41DC_E60A1C6E5094",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.15,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_91493E86_875E_A2CE_41E0_9841E3C7B081",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 103.75,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_901FD043_875E_9E46_41B1_4610D50FDE69",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -176.54,
   "hfov": 105,
   "pitch": 0
  }
 },
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_32BB558C_24AE_9034_41A0_905F3B8026D3"
 },
 "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714_camera",
 {
  "class": "FadeInEffect",
  "id": "effect_0B500FD7_1A54_37AE_41A9_19AE8C776076",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_90C51BA0_875E_A2C2_41D9_E57593886E6A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_90C51BA0_875E_A2C2_41D9_E57593886E6A, 0)",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer"
   }
  ],
  "id": "playList_90C51BA0_875E_A2C2_41D9_E57593886E6A"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_9F0A3D30_875E_A7C2_41CC_E36E47306210",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -158.82,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
  "id": "camera_91D0FF5F_875E_A27E_41BB_126B087DA502",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -113.92,
   "hfov": 110,
   "pitch": 0
  }
 }
], "children": [
 {
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "toolTipBackgroundColor": "#F6F6F6",
  "id": "MainViewer",
  "left": 0,
  "playbackBarHeadShadow": true,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipBorderRadius": 3,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "borderSize": 0,
  "progressBackgroundOpacity": 1,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipTextShadowColor": "#000000",
  "playbackBarOpacity": 1,
  "width": "100%",
  "toolTipShadowBlurRadius": 3,
  "borderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "minHeight": 50,
  "progressBarOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressOpacity": 1,
  "toolTipFontStyle": "normal",
  "toolTipShadowColor": "#333333",
  "paddingRight": 0,
  "progressLeft": 0,
  "minWidth": 100,
  "playbackBarHeadBorderSize": 0,
  "playbackBarBorderSize": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBackgroundOpacity": 1,
  "progressBorderSize": 0,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadWidth": 6,
  "playbackBarHeight": 10,
  "height": "100%",
  "toolTipTextShadowOpacity": 0,
  "transitionDuration": 500,
  "propagateClick": false,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarLeft": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarRight": 0,
  "playbackBarHeadHeight": 15,
  "class": "ViewerArea",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderSize": 0,
  "transitionMode": "blending",
  "displayTooltipInTouchScreens": true,
  "toolTipFontColor": "#606060",
  "toolTipPaddingLeft": 6,
  "paddingLeft": 0,
  "playbackBarProgressBorderRadius": 0,
  "shadow": false,
  "playbackBarProgressBorderSize": 0,
  "toolTipPaddingRight": 6,
  "toolTipDisplayTime": 600,
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
  "toolTipPaddingTop": 4,
  "paddingTop": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressRight": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipBorderSize": 1,
  "playbackBarBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipBorderColor": "#767676",
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "progressOpacity": 1,
  "playbackBarBottom": 5,
  "data": {
   "name": "Main Viewer"
  },
  "progressBottom": 0,
  "progressHeight": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical"
 },
 {
  "class": "Container",
  "left": "0%",
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "id": "Container_D19AA380_DE1B_2AF3_41EA_D9B3468B686F",
  "paddingLeft": 0,
  "children": [
   {
    "backgroundColorRatios": [
     0.8
    ],
    "class": "Container",
    "id": "Container_FD43509A_EC70_8CA6_41E8_9E5B7D453FAE",
    "backgroundOpacity": 0.1,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "children": [
     {
      "toolTipFontSize": 12,
      "class": "IconButton",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "toolTipTextShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "id": "IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0",
      "transparencyActive": true,
      "paddingLeft": 0,
      "width": 75,
      "borderSize": 0,
      "toolTipPaddingLeft": 6,
      "shadow": false,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipOpacity": 1,
      "verticalAlign": "middle",
      "minHeight": 1,
      "pressedIconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0_pressed.png",
      "toolTipFontWeight": "normal",
      "mode": "toggle",
      "toolTipPaddingTop": 4,
      "minWidth": 1,
      "toolTip": "Home",
      "click": "this.openLink('https://www.lalimafreezone.com/', '_top')",
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "height": 50,
      "toolTipFontFamily": "Arial",
      "toolTipFontStyle": "normal",
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderSize": 1,
      "paddingTop": 0,
      "toolTipBorderColor": "#767676",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0.png",
      "propagateClick": false,
      "data": {
       "name": "Button_home"
      },
      "horizontalAlign": "center",
      "toolTipPaddingBottom": 4,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipShadowVerticalLength": 0
     },
     {
      "toolTipFontSize": 12,
      "class": "IconButton",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "toolTipTextShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "id": "IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2",
      "transparencyActive": true,
      "paddingLeft": 0,
      "width": 75,
      "borderSize": 0,
      "toolTipPaddingLeft": 6,
      "shadow": false,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipOpacity": 1,
      "verticalAlign": "middle",
      "minHeight": 1,
      "pressedIconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2_pressed.png",
      "toolTipFontWeight": "normal",
      "mode": "toggle",
      "toolTipPaddingTop": 4,
      "minWidth": 1,
      "toolTip": "Map",
      "click": "if(!this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, true, 0, this.effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42, 'showEffect', false) } else { this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, false, 0, this.effect_D3728F7A_DF8C_960C_417C_830810DD2653, 'hideEffect', false) }",
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "height": 50,
      "toolTipFontFamily": "Arial",
      "toolTipFontStyle": "normal",
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderSize": 1,
      "paddingTop": 0,
      "toolTipBorderColor": "#767676",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2.png",
      "propagateClick": false,
      "data": {
       "name": "Button_Map"
      },
      "horizontalAlign": "center",
      "toolTipPaddingBottom": 4,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipShadowVerticalLength": 0
     },
     {
      "maxWidth": 225,
      "class": "Image",
      "maxHeight": 225,
      "backgroundOpacity": 0,
      "id": "Image_5DD52A9D_53AB_71BB_41D2_61C6638CC12D",
      "paddingLeft": 0,
      "width": 75,
      "borderSize": 0,
      "shadow": false,
      "borderRadius": 0,
      "url": "skin/Image_5DD52A9D_53AB_71BB_41D2_61C6638CC12D.png",
      "verticalAlign": "middle",
      "minHeight": 1,
      "minWidth": 1,
      "click": "this.openLink('https://www.lalimafreezone.com/real-estate', '_top')",
      "paddingRight": 0,
      "height": 50,
      "paddingTop": 0,
      "propagateClick": false,
      "data": {
       "name": "Image2280"
      },
      "horizontalAlign": "center",
      "scaleMode": "fit_inside",
      "cursor": "hand",
      "paddingBottom": 0
     },
     "this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667"
    ],
    "borderSize": 0,
    "shadow": false,
    "width": 334,
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "verticalAlign": "middle",
    "scrollBarOpacity": 0.5,
    "minHeight": 77,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "height": 77,
    "minWidth": 334,
    "overflow": "scroll",
    "paddingRight": 0,
    "backgroundColor": [
     "#000000"
    ],
    "paddingTop": 0,
    "layout": "horizontal",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container_btones"
    },
    "horizontalAlign": "center",
    "gap": 10,
    "paddingBottom": 0
   }
  ],
  "borderSize": 0,
  "shadow": false,
  "width": "100%",
  "borderRadius": 0,
  "scrollBarOpacity": 0.5,
  "minHeight": 1,
  "scrollBarWidth": 10,
  "bottom": "0%",
  "verticalAlign": "middle",
  "minWidth": 1,
  "overflow": "scroll",
  "paddingRight": 0,
  "height": "18.033%",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "layout": "horizontal",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Container_Menu"
  },
  "horizontalAlign": "center",
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "id": "Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F",
  "right": "0%",
  "paddingLeft": 0,
  "children": [
   {
    "class": "Container",
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver",
    "id": "Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5",
    "paddingLeft": 0,
    "children": [
     "this.MapViewer",
     {
      "maxWidth": 448,
      "class": "Image",
      "maxHeight": 264,
      "backgroundOpacity": 0,
      "id": "Image_E84AED1C_E346_1439_41DD_9142DAACB163",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "url": "skin/Image_E84AED1C_E346_1439_41DD_9142DAACB163.png",
      "width": "100%",
      "borderRadius": 0,
      "minHeight": 1,
      "verticalAlign": "middle",
      "minWidth": 1,
      "paddingRight": 0,
      "height": "27.233%",
      "paddingTop": 0,
      "horizontalAlign": "center",
      "propagateClick": false,
      "data": {
       "name": "Simbologia"
      },
      "scaleMode": "fit_inside",
      "paddingBottom": 0
     }
    ],
    "borderSize": 0,
    "shadow": false,
    "scrollBarMargin": 2,
    "width": "100%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "verticalAlign": "middle",
    "overflow": "scroll",
    "paddingRight": 0,
    "height": "81.45%",
    "minWidth": 1,
    "paddingTop": 0,
    "layout": "vertical",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container_Map"
    },
    "horizontalAlign": "center",
    "gap": 10,
    "paddingBottom": 0
   }
  ],
  "borderSize": 0,
  "shadow": false,
  "width": "29.316%",
  "borderRadius": 0,
  "creationPolicy": "inAdvance",
  "scrollBarOpacity": 0.5,
  "top": "2.05%",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "top",
  "minWidth": 1,
  "overflow": "scroll",
  "paddingRight": 0,
  "height": "77.049%",
  "paddingTop": 0,
  "layout": "vertical",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Main_Container"
  },
  "horizontalAlign": "center",
  "gap": 10,
  "visible": false,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "left": "0%",
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "id": "Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F",
  "paddingLeft": 0,
  "children": [
   {
    "fontFamily": "Arial",
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "DropDown",
    "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F",
    "backgroundOpacity": 0.72,
    "popUpShadowOpacity": 0,
    "paddingLeft": 5,
    "borderSize": 0,
    "shadow": false,
    "popUpBackgroundColor": "#FFFFFF",
    "width": "20.256%",
    "selectedPopUpBackgroundColor": "#0066FF",
    "borderRadius": 4,
    "popUpBorderRadius": 0,
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "backgroundColorDirection": "vertical",
    "popUpShadowColor": "#000000",
    "minHeight": 20,
    "arrowBeforeLabel": false,
    "selectedPopUpFontColor": "#FFFFFF",
    "minWidth": 200,
    "popUpShadowSpread": 1,
    "paddingRight": 5,
    "backgroundColor": [
     "#00CCFF",
     "#0099FF"
    ],
    "paddingTop": 0,
    "fontColor": "#333333",
    "fontSize": 14,
    "fontStyle": "normal",
    "playList": "this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
    "height": "27.397%",
    "popUpShadow": false,
    "popUpGap": 0,
    "popUpShadowBlurRadius": 6,
    "propagateClick": false,
    "data": {
     "name": "Location List"
    },
    "textDecoration": "none",
    "popUpFontColor": "#000000",
    "popUpBackgroundOpacity": 0.72,
    "fontWeight": "normal",
    "arrowColor": "#0066FF",
    "gap": 0,
    "prompt": "Location List",
    "paddingBottom": 0
   }
  ],
  "borderSize": 0,
  "shadow": false,
  "width": "100%",
  "borderRadius": 0,
  "scrollBarOpacity": 0.5,
  "top": "0.96%",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "top",
  "minWidth": 1,
  "overflow": "scroll",
  "paddingRight": 0,
  "height": "10%",
  "paddingTop": 0,
  "layout": "horizontal",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "ContainerDropDown"
  },
  "horizontalAlign": "left",
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "fontFamily": "Arial",
  "class": "Label",
  "left": "0%",
  "backgroundOpacity": 0,
  "id": "Label_E2D61738_F65E_D8BA_41DD_6888E340C197",
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "textShadowOpacity": 1,
  "width": "100%",
  "borderRadius": 0,
  "text": "La Lima Free Zone",
  "top": "0%",
  "minHeight": 1,
  "textShadowColor": "#000000",
  "verticalAlign": "middle",
  "minWidth": 1,
  "textShadowBlurRadius": 3,
  "paddingRight": 0,
  "height": "10%",
  "paddingTop": 0,
  "fontColor": "#FFFFFF",
  "fontSize": 20,
  "textShadowVerticalLength": 1,
  "fontStyle": "normal",
  "propagateClick": false,
  "data": {
   "name": "Label_La Lima Free Zone"
  },
  "horizontalAlign": "center",
  "textDecoration": "none",
  "visible": false,
  "textShadowHorizontalLength": 1,
  "fontWeight": "normal",
  "paddingBottom": 0
 },
 {
  "fontFamily": "Arial",
  "class": "Label",
  "left": "0%",
  "backgroundOpacity": 0,
  "id": "Label_E253EC4C_F622_28DA_41DB_546DF82EE842",
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "textShadowOpacity": 1,
  "width": "100%",
  "borderRadius": 0,
  "text": "Cartago City",
  "top": "0%",
  "minHeight": 1,
  "textShadowColor": "#000000",
  "verticalAlign": "middle",
  "minWidth": 1,
  "textShadowBlurRadius": 3,
  "paddingRight": 0,
  "height": "10%",
  "paddingTop": 0,
  "fontColor": "#FFFFFF",
  "fontSize": 20,
  "textShadowVerticalLength": 1,
  "fontStyle": "normal",
  "propagateClick": false,
  "data": {
   "name": "Label_Cartago City"
  },
  "horizontalAlign": "center",
  "textDecoration": "none",
  "visible": false,
  "textShadowHorizontalLength": 1,
  "fontWeight": "normal",
  "paddingBottom": 0
 },
 {
  "fontFamily": "Arial",
  "class": "Label",
  "left": "0%",
  "backgroundOpacity": 0,
  "id": "Label_E216BE12_F622_684F_41EC_C2D2817E217E",
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "textShadowOpacity": 1,
  "width": "100%",
  "borderRadius": 0,
  "text": "Corporate Center Project",
  "top": "0%",
  "minHeight": 1,
  "textShadowColor": "#000000",
  "verticalAlign": "middle",
  "minWidth": 1,
  "textShadowBlurRadius": 3,
  "paddingRight": 0,
  "height": "13.108%",
  "paddingTop": 0,
  "fontColor": "#FFFFFF",
  "fontSize": 20,
  "textShadowVerticalLength": 1,
  "fontStyle": "normal",
  "propagateClick": false,
  "data": {
   "name": "Label_Corporate Center"
  },
  "horizontalAlign": "center",
  "textDecoration": "none",
  "visible": false,
  "textShadowHorizontalLength": 1,
  "fontWeight": "normal",
  "paddingBottom": 0
 },
 {
  "fontFamily": "Arial",
  "class": "Label",
  "left": "0%",
  "backgroundOpacity": 0,
  "id": "Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515",
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "textShadowOpacity": 1,
  "width": "100%",
  "borderRadius": 0,
  "text": "Corporate Building",
  "top": "6%",
  "minHeight": 1,
  "textShadowColor": "#000000",
  "verticalAlign": "middle",
  "minWidth": 1,
  "textShadowBlurRadius": 3,
  "paddingRight": 0,
  "height": "3.5%",
  "paddingTop": 0,
  "fontColor": "#FFFFFF",
  "fontSize": 20,
  "textShadowVerticalLength": 1,
  "fontStyle": "normal",
  "propagateClick": false,
  "data": {
   "name": "Label_Corporate Building"
  },
  "horizontalAlign": "center",
  "textDecoration": "none",
  "visible": false,
  "textShadowHorizontalLength": 1,
  "fontWeight": "normal",
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "class": "Container",
  "id": "Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E",
  "left": "0%",
  "backgroundOpacity": 0.3,
  "scrollBarVisible": "rollOver",
  "paddingLeft": 0,
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "id": "Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41",
    "left": "4.32%",
    "backgroundOpacity": 0.3,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "children": [
     {
      "backgroundColorRatios": [
       0
      ],
      "class": "WebFrame",
      "id": "WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21",
      "backgroundOpacity": 1,
      "right": "0%",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "width": "99.907%",
      "borderRadius": 0,
      "url": "https://www.dailymotion.com/embed/video/kzStCdckcK75zLvzVdv?queue-enable=false\n",
      "backgroundColorDirection": "vertical",
      "top": "0%",
      "minHeight": 1,
      "minWidth": 1,
      "paddingRight": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "paddingTop": 0,
      "height": "100%",
      "scrollEnabled": true,
      "propagateClick": false,
      "data": {
       "name": "WebFrame_Zollner"
      },
      "visible": false,
      "insetBorder": false,
      "paddingBottom": 0
     },
     {
      "backgroundColorRatios": [
       0
      ],
      "class": "WebFrame",
      "id": "WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB",
      "left": "0%",
      "backgroundOpacity": 1,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "width": "100%",
      "borderRadius": 0,
      "url": "https://www.dailymotion.com/embed/video/k5CPUN2JVgV5TXvAxxe?queue-enable=false",
      "backgroundColorDirection": "vertical",
      "top": "0%",
      "minHeight": 1,
      "minWidth": 1,
      "paddingRight": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "paddingTop": 0,
      "height": "100%",
      "scrollEnabled": true,
      "propagateClick": false,
      "data": {
       "name": "WebFrame_CC"
      },
      "visible": false,
      "insetBorder": false,
      "paddingBottom": 0
     },
     {
      "backgroundColorRatios": [
       0
      ],
      "class": "WebFrame",
      "id": "WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411",
      "left": "0%",
      "backgroundOpacity": 1,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "width": "100%",
      "borderRadius": 0,
      "url": "https://www.dailymotion.com/embed/video/k1DHnDG2YiE1ncvzVks?queue-enable=false",
      "backgroundColorDirection": "vertical",
      "top": "0%",
      "minHeight": 1,
      "minWidth": 1,
      "paddingRight": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "paddingTop": 0,
      "height": "100%",
      "scrollEnabled": true,
      "propagateClick": false,
      "data": {
       "name": "WebFrame_Coloplast"
      },
      "visible": false,
      "insetBorder": false,
      "paddingBottom": 0
     },
     {
      "backgroundColorRatios": [
       0
      ],
      "class": "WebFrame",
      "id": "WebFrame_9794EE68_874E_17EB_41E0_8C30D23829E3",
      "left": "0%",
      "backgroundOpacity": 1,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "width": "100%",
      "borderRadius": 0,
      "url": "https://www.dailymotion.com/embed/video/k4nUdPSpMq4U2rvCZSh",
      "backgroundColorDirection": "vertical",
      "top": "0%",
      "minHeight": 1,
      "minWidth": 1,
      "paddingRight": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "paddingTop": 0,
      "height": "100%",
      "scrollEnabled": true,
      "propagateClick": false,
      "data": {
       "name": "WebFrame_video3D"
      },
      "visible": false,
      "insetBorder": false,
      "paddingBottom": 0
     },
     {
      "maxWidth": 394,
      "class": "Image",
      "id": "Image_97A8F4AB_874A_EB6D_41DC_914C3E0931EC",
      "maxHeight": 396,
      "backgroundOpacity": 0,
      "right": "0%",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "url": "skin/Image_97A8F4AB_874A_EB6D_41DC_914C3E0931EC.png",
      "width": "10%",
      "borderRadius": 0,
      "top": "0%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, false, 0, null, null, false)",
      "paddingRight": 0,
      "height": "15%",
      "paddingTop": 0,
      "propagateClick": false,
      "data": {
       "name": "Button_Close"
      },
      "horizontalAlign": "center",
      "scaleMode": "fit_inside",
      "paddingBottom": 0
     }
    ],
    "borderSize": 0,
    "shadow": false,
    "width": "91.341%",
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "scrollBarWidth": 10,
    "bottom": "3.11%",
    "verticalAlign": "top",
    "minWidth": 1,
    "overflow": "scroll",
    "paddingRight": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingTop": 0,
    "scrollBarMargin": 2,
    "layout": "absolute",
    "height": "91.081%",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Web container "
    },
    "horizontalAlign": "left",
    "gap": 10,
    "visible": false,
    "paddingBottom": 0
   }
  ],
  "borderSize": 0,
  "shadow": false,
  "width": "100%",
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "top",
  "minWidth": 1,
  "overflow": "scroll",
  "creationPolicy": "inAdvance",
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingTop": 0,
  "layout": "absolute",
  "height": "100%",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Main Container Web link"
  },
  "horizontalAlign": "left",
  "gap": 10,
  "visible": false,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "class": "UIComponent",
  "id": "veilPopupPanorama",
  "left": 0,
  "backgroundOpacity": 0.55,
  "right": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "top": 0,
  "minHeight": 0,
  "bottom": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "minWidth": 0,
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingTop": 0,
  "propagateClick": false,
  "data": {
   "name": "UIComponent6718"
  },
  "visible": false,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [],
  "class": "ZoomImage",
  "id": "zoomImagePopupPanorama",
  "left": 0,
  "backgroundOpacity": 1,
  "right": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "top": 0,
  "minHeight": 0,
  "bottom": 0,
  "minWidth": 0,
  "paddingRight": 0,
  "backgroundColor": [],
  "paddingTop": 0,
  "propagateClick": false,
  "data": {
   "name": "ZoomImage6719"
  },
  "visible": false,
  "scaleMode": "custom",
  "paddingBottom": 0
 },
 {
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "class": "CloseButton",
  "id": "closeButtonPopupPanorama",
  "backgroundOpacity": 0.3,
  "pressedIconColor": "#888888",
  "right": 10,
  "paddingLeft": 5,
  "borderSize": 0,
  "shadow": false,
  "gap": 5,
  "shadowSpread": 1,
  "borderRadius": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "verticalAlign": "middle",
  "layout": "horizontal",
  "top": 10,
  "minHeight": 0,
  "shadowColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "rollOverIconColor": "#666666",
  "iconBeforeLabel": true,
  "mode": "push",
  "minWidth": 0,
  "borderColor": "#000000",
  "paddingRight": 5,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingTop": 5,
  "label": "",
  "fontColor": "#FFFFFF",
  "fontSize": "1.29vh",
  "fontStyle": "normal",
  "iconColor": "#000000",
  "iconLineWidth": 5,
  "propagateClick": false,
  "data": {
   "name": "CloseButton6720"
  },
  "iconWidth": 20,
  "horizontalAlign": "center",
  "textDecoration": "none",
  "visible": false,
  "fontWeight": "normal",
  "iconHeight": 20,
  "cursor": "hand",
  "paddingBottom": 5
 }
], 
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_90C56B9F_875E_A2FE_41D4_9CDF115E3CE0.set('selectedIndex', 0)",
 "class": "Player",
 "id": "rootPlayer",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "borderSize": 0,
 "shadow": false,
 "width": "100%",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "overflow": "visible",
 "paddingRight": 0,
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%",
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getKey": function(key){  return window[key]; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; }
 },
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "propagateClick": false,
 "data": {
  "name": "Player7285"
 },
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundPreloadEnabled": true,
 "desktopMipmappingEnabled": false,
 "paddingBottom": 0
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
