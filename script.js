TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": 20.72,
    "yaw": 2.7,
    "distance": 1,
    "panorama": {
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 31.68,
       "yaw": 130.67,
       "distance": 1,
       "panorama": {
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 130.67,
          "yaw": 31.68,
          "distance": 1,
          "panorama": "this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1"
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": -50.06,
          "yaw": 119.09,
          "distance": 1,
          "panorama": {
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 119.09,
             "yaw": -50.06,
             "distance": 1,
             "panorama": "this.panorama_3D79D3BF_1674_22FC_4196_7C67831E524C"
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 135.39,
             "yaw": 129.44,
             "distance": 1,
             "panorama": {
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 129.44,
                "yaw": 135.39,
                "distance": 1,
                "panorama": "this.panorama_3D7997D7_1674_228C_41AA_D403F76C06DC"
               }
              ],
              "hfovMin": 80,
              "id": "panorama_3D79DBC0_1674_E284_418F_8382C3D75914",
              "vfov": 180,
              "class": "Panorama",
              "hfovMax": 120,
              "pitch": 0,
              "mapLocations": [
               {
                "x": 96.9,
                "map": {
                 "fieldOfViewOverlayRadiusScale": 0.24,
                 "width": 500,
                 "id": "map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                 "class": "Map",
                 "minimumZoomFactor": 0.5,
                 "image": {
                  "levels": [
                   {
                    "height": 485,
                    "width": 500,
                    "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6.png",
                    "class": "ImageResourceLevel"
                   },
                   {
                    "height": 242,
                    "grayscale": true,
                    "width": 250,
                    "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_lq.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "fieldOfViewOverlayOutsideOpacity": 0,
                 "thumbnailUrl": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_t.png",
                 "label": "Zona Franca",
                 "overlays": [
                  {
                   "id": "overlay_C85F514D_DD1A_7E64_41E9_30CB45494AAF",
                   "rollOverDisplay": false,
                   "map": {
                    "offsetY": 0,
                    "x": 241.15,
                    "width": 80,
                    "y": 382.75,
                    "class": "HotspotMapOverlayMap",
                    "height": 80,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 40,
                       "width": 40,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "areas": [
                    {
                     "class": "HotspotMapOverlayArea",
                     "click": "this.mainPlayList.set('selectedIndex', 0)",
                     "mapColor": "#FF0000"
                    }
                   ],
                   "image": {
                    "x": 241.15,
                    "y": 382.75,
                    "width": 80,
                    "class": "HotspotMapOverlayImage",
                    "height": 80,
                    "image": {
                     "levels": [
                      {
                       "height": 80,
                       "width": 80,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "useHandCursor": true
                  },
                  {
                   "id": "overlay_CA4EA4DE_DD1B_A664_41E0_AE0B0C78521C",
                   "rollOverDisplay": false,
                   "map": {
                    "offsetY": 0,
                    "x": 262.7,
                    "width": 40,
                    "y": 286.8,
                    "class": "HotspotMapOverlayMap",
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 20,
                       "width": 20,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_1_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "areas": [
                    {
                     "class": "HotspotMapOverlayArea",
                     "click": "this.mainPlayList.set('selectedIndex', 29)",
                     "mapColor": "#FF0000"
                    }
                   ],
                   "image": {
                    "x": 262.7,
                    "y": 286.8,
                    "width": 40,
                    "class": "HotspotMapOverlayImage",
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 40,
                       "width": 40,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_1.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "useHandCursor": true
                  },
                  {
                   "id": "overlay_CB611BF8_DD1A_A22C_41D9_CBADF82A7516",
                   "rollOverDisplay": true,
                   "map": {
                    "offsetY": 0,
                    "x": 286.9,
                    "width": 20,
                    "y": 323.85,
                    "class": "HotspotMapOverlayMap",
                    "height": 20,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 10,
                       "width": 10,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_2_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "areas": [
                    {
                     "class": "HotspotMapOverlayArea",
                     "click": "this.mainPlayList.set('selectedIndex', 30)",
                     "mapColor": "#FF0000"
                    }
                   ],
                   "image": {
                    "x": 286.9,
                    "y": 323.85,
                    "width": 20,
                    "class": "HotspotMapOverlayImage",
                    "height": 20,
                    "image": {
                     "levels": [
                      {
                       "height": 20,
                       "width": 20,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_2.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "useHandCursor": true
                  },
                  {
                   "id": "overlay_CB150A1A_DD16_ADEC_41E0_7B7C63D3E43F",
                   "rollOverDisplay": false,
                   "map": {
                    "offsetY": 0,
                    "x": 69.75,
                    "width": 40,
                    "y": 287.7,
                    "class": "HotspotMapOverlayMap",
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 20,
                       "width": 20,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_3_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "areas": [
                    {
                     "class": "HotspotMapOverlayArea",
                     "click": "this.mainPlayList.set('selectedIndex', 26)",
                     "mapColor": "#FF0000"
                    }
                   ],
                   "image": {
                    "x": 69.75,
                    "y": 287.7,
                    "width": 40,
                    "class": "HotspotMapOverlayImage",
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 40,
                       "width": 40,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_3.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "useHandCursor": true
                  },
                  {
                   "id": "overlay_CA475950_DD17_AE7D_41E8_4EEDBA4F4AC7",
                   "rollOverDisplay": true,
                   "map": {
                    "offsetY": 0,
                    "x": 82.35,
                    "width": 20,
                    "y": 360.9,
                    "class": "HotspotMapOverlayMap",
                    "height": 20,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 10,
                       "width": 10,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_4_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "areas": [
                    {
                     "class": "HotspotMapOverlayArea",
                     "click": "this.mainPlayList.set('selectedIndex', 27)",
                     "mapColor": "#FF0000"
                    }
                   ],
                   "image": {
                    "x": 82.35,
                    "y": 360.9,
                    "width": 20,
                    "class": "HotspotMapOverlayImage",
                    "height": 20,
                    "image": {
                     "levels": [
                      {
                       "height": 20,
                       "width": 20,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_4.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "useHandCursor": true
                  },
                  {
                   "id": "overlay_C5D00BE4_DD09_E224_4193_1E7B3F21AC96",
                   "rollOverDisplay": false,
                   "map": {
                    "offsetY": 0,
                    "x": 76.9,
                    "width": 40,
                    "y": 415.15,
                    "class": "HotspotMapOverlayMap",
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 20,
                       "width": 20,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_5_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "areas": [
                    {
                     "class": "HotspotMapOverlayArea",
                     "click": "this.mainPlayList.set('selectedIndex', 28)",
                     "mapColor": "#FF0000"
                    }
                   ],
                   "image": {
                    "x": 76.9,
                    "y": 415.15,
                    "width": 40,
                    "class": "HotspotMapOverlayImage",
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 40,
                       "width": 40,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_5.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "useHandCursor": true
                  },
                  {
                   "id": "overlay_CAE100A4_DD0B_BE24_41EB_507D59E649BA",
                   "rollOverDisplay": true,
                   "map": {
                    "offsetY": 0,
                    "x": 72.45,
                    "width": 20,
                    "y": 208.05,
                    "class": "HotspotMapOverlayMap",
                    "height": 20,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 10,
                       "width": 10,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_6_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "areas": [
                    {
                     "class": "HotspotMapOverlayArea",
                     "click": "this.mainPlayList.set('selectedIndex', 25)",
                     "mapColor": "#FF0000"
                    }
                   ],
                   "image": {
                    "x": 72.45,
                    "y": 208.05,
                    "width": 20,
                    "class": "HotspotMapOverlayImage",
                    "height": 20,
                    "image": {
                     "levels": [
                      {
                       "height": 20,
                       "width": 20,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_6.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "useHandCursor": true
                  },
                  {
                   "id": "overlay_CB9F085C_DD0A_AE64_41AF_81B501144D5C",
                   "rollOverDisplay": false,
                   "map": {
                    "offsetY": 0,
                    "x": 58.4,
                    "width": 40,
                    "y": 118.6,
                    "class": "HotspotMapOverlayMap",
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 20,
                       "width": 20,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_7_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "areas": [
                    {
                     "class": "HotspotMapOverlayArea",
                     "click": "this.mainPlayList.set('selectedIndex', 24)",
                     "mapColor": "#FF0000"
                    }
                   ],
                   "image": {
                    "x": 58.4,
                    "y": 118.6,
                    "width": 40,
                    "class": "HotspotMapOverlayImage",
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 40,
                       "width": 40,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_7.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "useHandCursor": true
                  },
                  {
                   "id": "overlay_CABD30AB_DD0E_9E23_41E5_2606484DA696",
                   "rollOverDisplay": true,
                   "map": {
                    "offsetY": 0,
                    "x": 152.3,
                    "width": 20,
                    "y": 126.95,
                    "class": "HotspotMapOverlayMap",
                    "height": 20,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 10,
                       "width": 10,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_8_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "areas": [
                    {
                     "class": "HotspotMapOverlayArea",
                     "click": "this.mainPlayList.set('selectedIndex', 23)",
                     "mapColor": "#FF0000"
                    }
                   ],
                   "image": {
                    "x": 152.3,
                    "y": 126.95,
                    "width": 20,
                    "class": "HotspotMapOverlayImage",
                    "height": 20,
                    "image": {
                     "levels": [
                      {
                       "height": 20,
                       "width": 20,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_8.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "useHandCursor": true
                  },
                  {
                   "id": "overlay_C422196A_DD0E_6E2D_41E0_5F593066B4B9",
                   "rollOverDisplay": false,
                   "map": {
                    "offsetY": 0,
                    "x": 227.75,
                    "width": 40,
                    "y": 118.55,
                    "class": "HotspotMapOverlayMap",
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 20,
                       "width": 20,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_9_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "areas": [
                    {
                     "class": "HotspotMapOverlayArea",
                     "click": "this.mainPlayList.set('selectedIndex', 22)",
                     "mapColor": "#FF0000"
                    }
                   ],
                   "image": {
                    "x": 227.75,
                    "y": 118.55,
                    "width": 40,
                    "class": "HotspotMapOverlayImage",
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 40,
                       "width": 40,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_9.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "useHandCursor": true
                  },
                  {
                   "id": "overlay_C53D65EB_DD09_A62C_41B4_A4FE1383C9E0",
                   "rollOverDisplay": true,
                   "map": {
                    "offsetY": 0,
                    "x": 283.95,
                    "width": 20,
                    "y": 206.9,
                    "class": "HotspotMapOverlayMap",
                    "height": 20,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 10,
                       "width": 10,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_10_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "areas": [
                    {
                     "class": "HotspotMapOverlayArea",
                     "click": "this.mainPlayList.set('selectedIndex', 21)",
                     "mapColor": "#FF0000"
                    }
                   ],
                   "image": {
                    "x": 283.95,
                    "y": 206.9,
                    "width": 20,
                    "class": "HotspotMapOverlayImage",
                    "height": 20,
                    "image": {
                     "levels": [
                      {
                       "height": 20,
                       "width": 20,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_10.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "useHandCursor": true
                  },
                  {
                   "id": "overlay_CA1A2975_DD0B_AE24_41D6_FDACEA0678CB",
                   "rollOverDisplay": true,
                   "map": {
                    "offsetY": 0,
                    "x": 372.9,
                    "width": 20,
                    "y": 291.95,
                    "class": "HotspotMapOverlayMap",
                    "height": 20,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 10,
                       "width": 10,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_11_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "areas": [
                    {
                     "class": "HotspotMapOverlayArea",
                     "click": "this.mainPlayList.set('selectedIndex', 20)",
                     "mapColor": "#FF0000"
                    }
                   ],
                   "image": {
                    "x": 372.9,
                    "y": 291.95,
                    "width": 20,
                    "class": "HotspotMapOverlayImage",
                    "height": 20,
                    "image": {
                     "levels": [
                      {
                       "height": 20,
                       "width": 20,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_11.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "useHandCursor": true
                  },
                  {
                   "id": "overlay_CA99B622_DD0A_A5DD_41E3_37E965944C63",
                   "rollOverDisplay": false,
                   "map": {
                    "offsetY": 0,
                    "x": 419.1,
                    "width": 40,
                    "y": 145.3,
                    "class": "HotspotMapOverlayMap",
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 20,
                       "width": 20,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_12_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "areas": [
                    {
                     "class": "HotspotMapOverlayArea",
                     "click": "this.mainPlayList.set('selectedIndex', 19)",
                     "mapColor": "#FF0000"
                    }
                   ],
                   "image": {
                    "x": 419.1,
                    "y": 145.3,
                    "width": 40,
                    "class": "HotspotMapOverlayImage",
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 40,
                       "width": 40,
                       "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_12.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "useHandCursor": true
                  }
                 ],
                 "fieldOfViewOverlayOutsideColor": "#000000",
                 "initialZoomFactor": 1,
                 "maximumZoomFactor": 1.2,
                 "fieldOfViewOverlayInsideColor": "#000000",
                 "fieldOfViewOverlayInsideOpacity": 0.31,
                 "scaleMode": "fit_inside",
                 "height": 485
                },
                "class": "PanoramaMapLocation",
                "angle": -110.47,
                "y": 435.15
               }
              ],
              "thumbnailUrl": "media/panorama_3D79DBC0_1674_E284_418F_8382C3D75914_t.jpg",
              "hfov": 360,
              "label": "3-Esquina izquierda",
              "partial": false,
              "frames": [
               {
                "sphere": {
                 "levels": [
                  {
                   "height": 2688,
                   "width": 5376,
                   "url": "media/panorama_3D79DBC0_1674_E284_418F_8382C3D75914_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_3D79DBC0_1674_E284_418F_8382C3D75914.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_3D79DBC0_1674_E284_418F_8382C3D75914_t.jpg",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "id": "overlay_2604F7BF_167C_22FC_4193_617054DB2FCA",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 59,
                       "width": 58,
                       "url": "media/panorama_3D79DBC0_1674_E284_418F_8382C3D75914_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 135.39,
                    "hfov": 7.82,
                    "pitch": -8.43
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_3D7997D7_1674_228C_41AA_D403F76C06DC, this.camera_8D2E6F6C_9D1A_6C08_41E1_1EB9BBCD7F3D); this.mainPlayList.set('selectedIndex', 27)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": 135.39,
                    "pitch": -8.43,
                    "hfov": 7.82,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 118,
                       "width": 117,
                       "url": "media/panorama_3D79DBC0_1674_E284_418F_8382C3D75914_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_40316135_163D_DF8C_41A9_4D9D3925AEC7",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 58,
                       "width": 59,
                       "url": "media/panorama_3D79DBC0_1674_E284_418F_8382C3D75914_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 164.68,
                    "hfov": 7.09,
                    "pitch": 27.14
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": 164.68,
                    "pitch": 27.14,
                    "hfov": 7.09,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 117,
                       "width": 118,
                       "url": "media/panorama_3D79DBC0_1674_E284_418F_8382C3D75914_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "bleaching": 0.7,
                  "bleachingDistance": 0.4,
                  "id": "overlay_39CA657B_37C3_E440_41C7_9AF4D5A18AFA",
                  "class": "LensFlarePanoramaOverlay",
                  "yaw": -84.05,
                  "pitch": 42.78
                 }
                ],
                "class": "SphericPanoramaFrame"
               }
              ]
             }
            }
           ],
           "hfovMin": 80,
           "id": "panorama_3D7997D7_1674_228C_41AA_D403F76C06DC",
           "vfov": 180,
           "class": "Panorama",
           "hfovMax": 120,
           "pitch": 0,
           "mapLocations": [
            {
             "x": 92.35,
             "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
             "class": "PanoramaMapLocation",
             "angle": 43.65,
             "y": 370.9
            }
           ],
           "thumbnailUrl": "media/panorama_3D7997D7_1674_228C_41AA_D403F76C06DC_t.jpg",
           "hfov": 360,
           "label": "4-Izquierdo_2",
           "partial": false,
           "frames": [
            {
             "sphere": {
              "levels": [
               {
                "height": 2688,
                "width": 5376,
                "url": "media/panorama_3D7997D7_1674_228C_41AA_D403F76C06DC_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_3D7997D7_1674_228C_41AA_D403F76C06DC.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_3D7997D7_1674_228C_41AA_D403F76C06DC_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "id": "overlay_261051F1_167D_DE84_41AD_4433EE752517",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 59,
                    "width": 59,
                    "url": "media/panorama_3D7997D7_1674_228C_41AA_D403F76C06DC_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 129.44,
                 "hfov": 7.9,
                 "pitch": -0.09
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_3D79DBC0_1674_E284_418F_8382C3D75914, this.camera_8DC69C0D_9D1A_6C08_41E2_74BD9AE8D5B1); this.mainPlayList.set('selectedIndex', 28)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 129.44,
                 "pitch": -0.09,
                 "hfov": 7.9,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 118,
                    "width": 118,
                    "url": "media/panorama_3D7997D7_1674_228C_41AA_D403F76C06DC_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 }
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_2494017B_167C_5F84_418F_2EBE67C00F50",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 59,
                    "width": 59,
                    "url": "media/panorama_3D7997D7_1674_228C_41AA_D403F76C06DC_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -50.06,
                 "hfov": 7.73,
                 "pitch": -11.95
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_3D79D3BF_1674_22FC_4196_7C67831E524C, this.camera_8DCDCC00_9D1A_73F9_41D4_4FEC052B1162); this.mainPlayList.set('selectedIndex', 26)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -50.06,
                 "pitch": -11.95,
                 "hfov": 7.73,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 118,
                    "width": 118,
                    "url": "media/panorama_3D7997D7_1674_228C_41AA_D403F76C06DC_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 }
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_4037BDB8_163C_2684_419C_4B67846338E3",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 59,
                    "width": 59,
                    "url": "media/panorama_3D7997D7_1674_228C_41AA_D403F76C06DC_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 7.53,
                 "hfov": 7.56,
                 "pitch": 18.39
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 7.53,
                 "pitch": 18.39,
                 "hfov": 7.56,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 118,
                    "width": 118,
                    "url": "media/panorama_3D7997D7_1674_228C_41AA_D403F76C06DC_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 }
                }
               ]
              },
              {
               "bleaching": 0.7,
               "bleachingDistance": 0.4,
               "id": "overlay_39D47865_37C3_EC40_418D_902B267BFD0B",
               "class": "LensFlarePanoramaOverlay",
               "yaw": 85.94,
               "pitch": 51.09
              }
             ],
             "class": "SphericPanoramaFrame"
            }
           ]
          }
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": -148.94,
          "yaw": -62.51,
          "distance": 1,
          "panorama": {
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -62.51,
             "yaw": -148.94,
             "distance": 1,
             "panorama": "this.panorama_3D79D3BF_1674_22FC_4196_7C67831E524C"
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -160.71,
             "yaw": 32.75,
             "distance": 1,
             "panorama": {
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 32.75,
                "yaw": -160.71,
                "distance": 1,
                "panorama": "this.panorama_35E83422_1617_E584_4186_08583C185C08"
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -151.94,
                "yaw": 113.6,
                "distance": 1,
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 156.41,
                   "yaw": -7.8,
                   "distance": 1,
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -100.12,
                      "yaw": 0.22,
                      "distance": 1,
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": -89.72,
                         "yaw": -172.27,
                         "distance": 1,
                         "panorama": {
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": -79.36,
                            "yaw": 105.2,
                            "distance": 1,
                            "panorama": "this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1"
                           },
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": -172.27,
                            "yaw": -89.72,
                            "distance": 1,
                            "panorama": "this.panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2"
                           }
                          ],
                          "hfovMin": 80,
                          "id": "panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56",
                          "vfov": 180,
                          "class": "Panorama",
                          "hfovMax": 120,
                          "pitch": 0,
                          "mapLocations": [
                           {
                            "x": 382.9,
                            "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                            "class": "PanoramaMapLocation",
                            "angle": 159.2,
                            "y": 301.95
                           }
                          ],
                          "thumbnailUrl": "media/panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56_t.jpg",
                          "hfov": 360,
                          "label": "12-derecha_1",
                          "partial": false,
                          "frames": [
                           {
                            "sphere": {
                             "levels": [
                              {
                               "height": 2688,
                               "width": 5376,
                               "url": "media/panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "url": "media/panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "thumbnailUrl": "media/panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56_t.jpg",
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "id": "overlay_1706E455_1AA3_6DA9_419E_DCA62F92E2B5",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 59,
                                   "width": 59,
                                   "url": "media/panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "yaw": 105.2,
                                "hfov": 7.82,
                                "pitch": -8.08
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1, this.camera_93CF413D_9D1A_140B_41D4_3BBB44406E11); this.mainPlayList.set('selectedIndex', 29)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "yaw": 105.2,
                                "pitch": -8.08,
                                "hfov": 7.82,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 118,
                                   "width": 118,
                                   "url": "media/panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                }
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_14442551_1AA3_EFA9_41B2_B2FE35E19AFB",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 59,
                                   "width": 59,
                                   "url": "media/panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56_0_HS_2_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "yaw": -89.72,
                                "hfov": 7.86,
                                "pitch": -5.91
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2, this.camera_93C59149_9D1A_1408_41C9_76630C400E42); this.mainPlayList.set('selectedIndex', 19)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "yaw": -89.72,
                                "pitch": -5.91,
                                "hfov": 7.86,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 118,
                                   "width": 118,
                                   "url": "media/panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56_0_HS_2_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                }
                               }
                              ]
                             },
                             {
                              "bleaching": 0.7,
                              "bleachingDistance": 0.4,
                              "id": "overlay_39C8F945_37C2_AC40_41A0_C161645E482D",
                              "class": "LensFlarePanoramaOverlay",
                              "yaw": -16.81,
                              "pitch": 63.56
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_892E9712_9CCD_D654_41D9_2E3CCD5FB7BE",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 59,
                                   "width": 58,
                                   "url": "media/panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56_0_HS_3_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "yaw": 140.05,
                                "hfov": 7.61,
                                "pitch": 15.71
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "yaw": 140.05,
                                "pitch": 15.71,
                                "hfov": 7.61,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 119,
                                   "width": 117,
                                   "url": "media/panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56_0_HS_3_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                }
                               }
                              ]
                             }
                            ],
                            "class": "SphericPanoramaFrame"
                           }
                          ]
                         }
                        },
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": 0.22,
                         "yaw": -100.12,
                         "distance": 1,
                         "panorama": "this.panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF"
                        }
                       ],
                       "hfovMin": 80,
                       "id": "panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2",
                       "vfov": 180,
                       "class": "Panorama",
                       "hfovMax": 120,
                       "pitch": 0,
                       "mapLocations": [
                        {
                         "x": 439.1,
                         "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                         "class": "PanoramaMapLocation",
                         "angle": 359.73,
                         "y": 165.3
                        }
                       ],
                       "thumbnailUrl": "media/panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2_t.jpg",
                       "hfov": 360,
                       "label": "14 derecha_3",
                       "partial": false,
                       "frames": [
                        {
                         "sphere": {
                          "levels": [
                           {
                            "height": 2688,
                            "width": 5376,
                            "url": "media/panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1608,
                            "width": 3217,
                            "url": "media/panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2_t.jpg",
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "id": "overlay_2E4B3D72_1674_6784_41A6_95533FAF44D6",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 59,
                                "width": 59,
                                "url": "media/panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -100.12,
                             "hfov": 7.9,
                             "pitch": -1.45
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF, this.camera_8D69DFC1_9D1A_6C78_41C5_EBAA410CD2B4); this.mainPlayList.set('selectedIndex', 22)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": -100.12,
                             "pitch": -1.45,
                             "hfov": 7.9,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 118,
                                "width": 118,
                                "url": "media/panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_2E390388_160C_6284_41B0_A9866C7CCB19",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 59,
                                "width": 59,
                                "url": "media/panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2_0_HS_1_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -172.27,
                             "hfov": 7.9,
                             "pitch": -0.59
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56, this.camera_8D7DCFB6_9D1A_6C18_41A0_6D1999A4B8B4); this.mainPlayList.set('selectedIndex', 20)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": -172.27,
                             "pitch": -0.59,
                             "hfov": 7.9,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 118,
                                "width": 118,
                                "url": "media/panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_4005B68C_163C_229C_4185_099E355858EC",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 58,
                                "width": 59,
                                "url": "media/panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2_0_HS_2_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -147.78,
                             "hfov": 7.39,
                             "pitch": 22.03
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": -147.78,
                             "pitch": 22.03,
                             "hfov": 7.39,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 117,
                                "width": 119,
                                "url": "media/panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2_0_HS_2_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          },
                          {
                           "bleaching": 0.7,
                           "bleachingDistance": 0.4,
                           "id": "overlay_39CA1F05_37C2_A5C0_41B2_095B0FE8C7F0",
                           "class": "LensFlarePanoramaOverlay",
                           "yaw": 95.01,
                           "pitch": 68.09
                          }
                         ],
                         "class": "SphericPanoramaFrame"
                        }
                       ]
                      }
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -81.43,
                      "yaw": 63.17,
                      "distance": 1,
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": -123.06,
                         "yaw": 125.92,
                         "distance": 1,
                         "panorama": "this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1"
                        },
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": 63.17,
                         "yaw": -81.43,
                         "distance": 1,
                         "panorama": "this.panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF"
                        }
                       ],
                       "hfovMin": 80,
                       "id": "panorama_474FEAEC_160C_229C_41B5_A893F886FCB3",
                       "vfov": 180,
                       "class": "Panorama",
                       "hfovMax": 120,
                       "pitch": 0,
                       "mapLocations": [
                        {
                         "x": 293.95,
                         "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                         "class": "PanoramaMapLocation",
                         "angle": 422.74,
                         "y": 216.9
                        }
                       ],
                       "thumbnailUrl": "media/panorama_474FEAEC_160C_229C_41B5_A893F886FCB3_t.jpg",
                       "hfov": 360,
                       "label": "11-Cemtro_1",
                       "partial": false,
                       "frames": [
                        {
                         "sphere": {
                          "levels": [
                           {
                            "height": 2688,
                            "width": 5376,
                            "url": "media/panorama_474FEAEC_160C_229C_41B5_A893F886FCB3_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1608,
                            "width": 3217,
                            "url": "media/panorama_474FEAEC_160C_229C_41B5_A893F886FCB3.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_474FEAEC_160C_229C_41B5_A893F886FCB3_t.jpg",
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "id": "overlay_47E57275_1634_7D8C_4185_8CEBB4823AB9",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 59,
                                "width": 58,
                                "url": "media/panorama_474FEAEC_160C_229C_41B5_A893F886FCB3_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -81.43,
                             "hfov": 7.9,
                             "pitch": -2.08
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF, this.camera_8D903FD8_9D1A_6C09_41E0_93556E766489); this.mainPlayList.set('selectedIndex', 22)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": -81.43,
                             "pitch": -2.08,
                             "hfov": 7.9,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 119,
                                "width": 117,
                                "url": "media/panorama_474FEAEC_160C_229C_41B5_A893F886FCB3_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_43FA09A5_1634_2E8C_4185_528ED1192B2D",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 59,
                                "width": 58,
                                "url": "media/panorama_474FEAEC_160C_229C_41B5_A893F886FCB3_0_HS_1_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": 125.92,
                             "hfov": 7.87,
                             "pitch": -4.84
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1, this.camera_8D647FCD_9D1A_6C08_41DB_F953A20721A8); this.mainPlayList.set('selectedIndex', 29)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": 125.92,
                             "pitch": -4.84,
                             "hfov": 7.87,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 119,
                                "width": 117,
                                "url": "media/panorama_474FEAEC_160C_229C_41B5_A893F886FCB3_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_403C2208_1633_FD84_4190_F21D840213AC",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 84,
                                "width": 85,
                                "url": "media/panorama_474FEAEC_160C_229C_41B5_A893F886FCB3_0_HS_2_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -164.46,
                             "hfov": 10.01,
                             "pitch": 28.8
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": -164.46,
                             "pitch": 28.8,
                             "hfov": 10.01,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 169,
                                "width": 170,
                                "url": "media/panorama_474FEAEC_160C_229C_41B5_A893F886FCB3_0_HS_2_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          },
                          {
                           "bleaching": 0.7,
                           "bleachingDistance": 0.4,
                           "id": "overlay_39D53355_37C2_9C40_41C5_F3918D442D8E",
                           "class": "LensFlarePanoramaOverlay",
                           "yaw": 78.38,
                           "pitch": 59.4
                          }
                         ],
                         "class": "SphericPanoramaFrame"
                        }
                       ]
                      }
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -7.8,
                      "yaw": 156.41,
                      "distance": 1,
                      "panorama": "this.panorama_3D79567C_1674_627C_41A0_54E172548A16"
                     }
                    ],
                    "hfovMin": 80,
                    "id": "panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF",
                    "vfov": 180,
                    "class": "Panorama",
                    "hfovMax": 120,
                    "pitch": 0,
                    "mapLocations": [
                     {
                      "x": 247.75,
                      "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                      "class": "PanoramaMapLocation",
                      "angle": 83.78,
                      "y": 138.55
                     }
                    ],
                    "thumbnailUrl": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_t.jpg",
                    "hfov": 360,
                    "label": "10-atras 3",
                    "partial": false,
                    "frames": [
                     {
                      "sphere": {
                       "levels": [
                        {
                         "height": 2688,
                         "width": 5376,
                         "url": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_t.jpg",
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "id": "overlay_22BBB7ED_1674_229C_41B4_D76F4986B173",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "height": 59,
                             "width": 58,
                             "url": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": 156.41,
                          "hfov": 7.88,
                          "pitch": -4.63
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_3D79567C_1674_627C_41A0_54E172548A16, this.camera_93D4DD69_9D1A_6C0B_41D3_851E8950FA93); this.mainPlayList.set('selectedIndex', 23)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": 156.41,
                          "pitch": -4.63,
                          "hfov": 7.88,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 119,
                             "width": 117,
                             "url": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_20A50E33_1674_6584_4198_4F0BDE9A7BBF",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "height": 59,
                             "width": 58,
                             "url": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_0_HS_1_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": 63.17,
                          "hfov": 7.89,
                          "pitch": -3.2
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_474FEAEC_160C_229C_41B5_A893F886FCB3, this.camera_93DDDD5D_9D1A_6C08_41C8_76378418EF39); this.mainPlayList.set('selectedIndex', 21)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": 63.17,
                          "pitch": -3.2,
                          "hfov": 7.89,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 119,
                             "width": 117,
                             "url": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_2131C2D9_1674_6284_41B5_025E21A38F30",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "height": 59,
                             "width": 58,
                             "url": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_0_HS_2_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": 0.22,
                          "hfov": 7.9,
                          "pitch": -1.93
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2, this.camera_93A7CD50_9D1A_6C18_41C4_46A0611BBD3D); this.mainPlayList.set('selectedIndex', 19)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": 0.22,
                          "pitch": -1.93,
                          "hfov": 7.9,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 119,
                             "width": 117,
                             "url": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_0_HS_2_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_400529F0_163C_2E84_41B0_9650B5319C54",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "height": 58,
                             "width": 59,
                             "url": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_0_HS_3_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": 107.42,
                          "hfov": 7.28,
                          "pitch": 24.08
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": 107.42,
                          "pitch": 24.08,
                          "hfov": 7.28,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 117,
                             "width": 119,
                             "url": "media/panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_0_HS_3_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         }
                        ]
                       },
                       {
                        "bleaching": 0.7,
                        "bleachingDistance": 0.4,
                        "id": "overlay_39CF8087_37C3_7CC1_41C3_2BAB3D14C7EF",
                        "class": "LensFlarePanoramaOverlay",
                        "yaw": 47.41,
                        "pitch": 57.51
                       }
                      ],
                      "class": "SphericPanoramaFrame"
                     }
                    ]
                   }
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 113.6,
                   "yaw": -151.94,
                   "distance": 1,
                   "panorama": "this.panorama_3D795AB8_1674_6284_41B2_996F167C34AA"
                  }
                 ],
                 "hfovMin": 80,
                 "id": "panorama_3D79567C_1674_627C_41A0_54E172548A16",
                 "vfov": 180,
                 "class": "Panorama",
                 "hfovMax": 120,
                 "pitch": 0,
                 "mapLocations": [
                  {
                   "x": 162.3,
                   "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                   "class": "PanoramaMapLocation",
                   "angle": 79.57,
                   "y": 136.95
                  }
                 ],
                 "thumbnailUrl": "media/panorama_3D79567C_1674_627C_41A0_54E172548A16_t.jpg",
                 "hfov": 360,
                 "label": "9-atras2",
                 "partial": false,
                 "frames": [
                  {
                   "sphere": {
                    "levels": [
                     {
                      "height": 2688,
                      "width": 5376,
                      "url": "media/panorama_3D79567C_1674_627C_41A0_54E172548A16_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_3D79567C_1674_627C_41A0_54E172548A16.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_3D79567C_1674_627C_41A0_54E172548A16_t.jpg",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "id": "overlay_2599046B_1674_2584_41AE_134F6F970C38",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_3D79567C_1674_627C_41A0_54E172548A16_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -151.94,
                       "hfov": 7.78,
                       "pitch": -9.91
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_3D795AB8_1674_6284_41B2_996F167C34AA, this.camera_92B02E82_9D1A_6CF8_41E3_416D3C6ED86E); this.mainPlayList.set('selectedIndex', 24)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": -151.94,
                       "pitch": -9.91,
                       "hfov": 7.78,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 119,
                          "width": 118,
                          "url": "media/panorama_3D79567C_1674_627C_41A0_54E172548A16_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_239E9F13_1674_E384_41B1_3CB1B3553A5C",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_3D79567C_1674_627C_41A0_54E172548A16_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -7.8,
                       "hfov": 7.88,
                       "pitch": -3.96
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF, this.camera_92865E76_9D1A_6C19_41BA_B1D011B82704); this.mainPlayList.set('selectedIndex', 22)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": -7.8,
                       "pitch": -3.96,
                       "hfov": 7.88,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 119,
                          "width": 118,
                          "url": "media/panorama_3D79567C_1674_627C_41A0_54E172548A16_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_4006DCE8_163C_6684_41B4_AE76AF064B1D",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_3D79567C_1674_627C_41A0_54E172548A16_0_HS_2_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 101.05,
                       "hfov": 7.47,
                       "pitch": 20.44
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": 101.05,
                       "pitch": 20.44,
                       "hfov": 7.47,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 118,
                          "width": 119,
                          "url": "media/panorama_3D79567C_1674_627C_41A0_54E172548A16_0_HS_2_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       }
                      }
                     ]
                    },
                    {
                     "bleaching": 0.7,
                     "bleachingDistance": 0.4,
                     "id": "overlay_39D4DAA8_37C3_6CCF_41C9_8498C94239EB",
                     "class": "LensFlarePanoramaOverlay",
                     "yaw": 62.14,
                     "pitch": 57.89
                    }
                   ],
                   "class": "SphericPanoramaFrame"
                  }
                 ]
                }
               }
              ],
              "hfovMin": 80,
              "id": "panorama_3D795AB8_1674_6284_41B2_996F167C34AA",
              "vfov": 180,
              "class": "Panorama",
              "hfovMax": 120,
              "pitch": 0,
              "mapLocations": [
               {
                "x": 78.4,
                "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                "class": "PanoramaMapLocation",
                "angle": 346.8,
                "y": 138.6
               }
              ],
              "thumbnailUrl": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_t.jpg",
              "hfov": 360,
              "label": "7-Esquina Izquierda_atras_2",
              "partial": false,
              "frames": [
               {
                "sphere": {
                 "levels": [
                  {
                   "height": 2688,
                   "width": 5376,
                   "url": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_t.jpg",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "id": "overlay_25390383_167C_6284_41B1_AF3FF6CEB78D",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 59,
                       "width": 58,
                       "url": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 113.6,
                    "hfov": 7.85,
                    "pitch": -6.41
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_3D79567C_1674_627C_41A0_54E172548A16, this.camera_92984E54_9D1A_6C19_41E1_13DBFA40C01F); this.mainPlayList.set('selectedIndex', 23)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": 113.6,
                    "pitch": -6.41,
                    "hfov": 7.85,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 118,
                       "width": 117,
                       "url": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_2074083D_167C_6DFC_41AB_875BA2A40641",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 59,
                       "width": 58,
                       "url": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -160.71,
                    "hfov": 7.88,
                    "pitch": -3.9
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_35E83422_1617_E584_4186_08583C185C08, this.camera_926E7E49_9D1A_6C08_41E2_940E98417290); this.mainPlayList.set('selectedIndex', 25)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -160.71,
                    "pitch": -3.9,
                    "hfov": 7.88,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 118,
                       "width": 117,
                       "url": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_4006720B_163C_5D84_4184_2BB8C097FC47",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 52,
                       "width": 61,
                       "url": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_0_HS_2_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -101.83,
                    "hfov": 8.21,
                    "pitch": -4.31
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.showPopupPanoramaOverlay(this.popup_4B7F179F_4511_AA24_41C8_4D4C956B0736, {'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':20,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_4AF68F62_4510_BA1D_4190_FDDC2A486BCE, null, null, null, null, false)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -101.83,
                    "pitch": -4.31,
                    "hfov": 8.21,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 104,
                       "width": 122,
                       "url": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_0_HS_2_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_4ED70D3D_163C_27FC_41B5_9BAF8B91B9D0",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 51,
                       "width": 61,
                       "url": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_0_HS_3_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 164.95,
                    "hfov": 8.06,
                    "pitch": 11.77
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.showPopupPanoramaOverlay(this.popup_4AC31A49_1614_6D84_41A8_70E2088E8A0A, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_69DDF38B_160C_2284_41B3_8E5E6CAD0985, null, null, null, null, false)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": 164.95,
                    "pitch": 11.77,
                    "hfov": 8.06,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 103,
                       "width": 122,
                       "url": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_0_HS_3_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_40167EA4_163D_E28C_41A6_BC6472463BC6",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 58,
                       "width": 59,
                       "url": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_0_HS_4_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 175.62,
                    "hfov": 6.83,
                    "pitch": 30.98
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": 175.62,
                    "pitch": 30.98,
                    "hfov": 6.83,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 117,
                       "width": 118,
                       "url": "media/panorama_3D795AB8_1674_6284_41B2_996F167C34AA_0_HS_4_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "rotationX": 0,
                  "rotationZ": 0,
                  "yaw": 164.95,
                  "hfov": 8.06,
                  "hideEasing": "cubic_out",
                  "showEasing": "cubic_in",
                  "popupMaxWidth": "95%",
                  "id": "popup_4AC31A49_1614_6D84_41A8_70E2088E8A0A",
                  "hideDuration": 500,
                  "showDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "popupMaxHeight": "95%",
                  "image": {
                   "levels": [
                    {
                     "height": 682,
                     "width": 1023,
                     "url": "media/popup_4AC31A49_1614_6D84_41A8_70E2088E8A0A_0_2.jpg",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "rotationY": 0,
                  "pitch": 11.77
                 },
                 {
                  "bleaching": 0.7,
                  "bleachingDistance": 0.4,
                  "id": "overlay_39C964A8_37C3_A4CF_41BF_69267FCD914E",
                  "class": "LensFlarePanoramaOverlay",
                  "yaw": 161.11,
                  "pitch": 51.09
                 },
                 {
                  "rotationX": 0,
                  "rotationZ": 0,
                  "yaw": -101.83,
                  "hfov": 8.21,
                  "hideEasing": "cubic_out",
                  "showEasing": "cubic_in",
                  "popupMaxWidth": "95%",
                  "id": "popup_4B7F179F_4511_AA24_41C8_4D4C956B0736",
                  "hideDuration": 500,
                  "showDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "popupMaxHeight": "95%",
                  "image": {
                   "levels": [
                    {
                     "height": 573,
                     "width": 1024,
                     "url": "media/popup_4B7F179F_4511_AA24_41C8_4D4C956B0736_0_1.jpg",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "rotationY": 0,
                  "pitch": -4.31
                 }
                ],
                "class": "SphericPanoramaFrame"
               }
              ]
             }
            }
           ],
           "hfovMin": 80,
           "id": "panorama_35E83422_1617_E584_4186_08583C185C08",
           "vfov": 180,
           "class": "Panorama",
           "hfovMax": 120,
           "pitch": 0,
           "mapLocations": [
            {
             "x": 82.45,
             "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
             "class": "PanoramaMapLocation",
             "angle": -31.01,
             "y": 218.05
            }
           ],
           "thumbnailUrl": "media/panorama_35E83422_1617_E584_4186_08583C185C08_t.jpg",
           "hfov": 360,
           "label": "6-Izquierda_3",
           "partial": false,
           "frames": [
            {
             "sphere": {
              "levels": [
               {
                "height": 2688,
                "width": 5376,
                "url": "media/panorama_35E83422_1617_E584_4186_08583C185C08_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_35E83422_1617_E584_4186_08583C185C08.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_35E83422_1617_E584_4186_08583C185C08_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "id": "overlay_35E03B27_1614_238C_41A5_92F66155D17A",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 59,
                    "width": 59,
                    "url": "media/panorama_35E83422_1617_E584_4186_08583C185C08_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 32.75,
                 "hfov": 7.83,
                 "pitch": -7.62
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_3D795AB8_1674_6284_41B2_996F167C34AA, this.camera_928C6E6B_9D1A_6C08_41B3_82CB2E666BC2); this.mainPlayList.set('selectedIndex', 24)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 32.75,
                 "pitch": -7.62,
                 "hfov": 7.83,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 118,
                    "width": 118,
                    "url": "media/panorama_35E83422_1617_E584_4186_08583C185C08_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 }
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_32E6ECA3_1614_6684_41AE_CC855598CE63",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 59,
                    "width": 59,
                    "url": "media/panorama_35E83422_1617_E584_4186_08583C185C08_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -148.94,
                 "hfov": 7.89,
                 "pitch": -3.12
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_3D79D3BF_1674_22FC_4196_7C67831E524C, this.camera_9293BE5F_9D1A_6C07_41DB_FC339E2E1F6B); this.mainPlayList.set('selectedIndex', 26)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -148.94,
                 "pitch": -3.12,
                 "hfov": 7.89,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 118,
                    "width": 118,
                    "url": "media/panorama_35E83422_1617_E584_4186_08583C185C08_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 }
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_4034DA81_163C_6284_41B0_6084DC4BB113",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 84,
                    "width": 85,
                    "url": "media/panorama_35E83422_1617_E584_4186_08583C185C08_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 172.33,
                 "hfov": 9.66,
                 "pitch": 32.27
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 172.33,
                 "pitch": 32.27,
                 "hfov": 9.66,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 169,
                    "width": 170,
                    "url": "media/panorama_35E83422_1617_E584_4186_08583C185C08_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 }
                }
               ]
              },
              {
               "bleaching": 0.7,
               "bleachingDistance": 0.4,
               "id": "overlay_39D734D3_37C3_A440_41B4_6F4CA957785E",
               "class": "LensFlarePanoramaOverlay",
               "yaw": 170.18,
               "pitch": 61.29
              }
             ],
             "class": "SphericPanoramaFrame"
            }
           ]
          }
         }
        ],
        "hfovMin": 80,
        "id": "panorama_3D79D3BF_1674_22FC_4196_7C67831E524C",
        "vfov": 180,
        "class": "Panorama",
        "hfovMax": 120,
        "pitch": 0,
        "mapLocations": [
         {
          "x": 89.75,
          "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
          "class": "PanoramaMapLocation",
          "angle": 54.31,
          "y": 307.7
         }
        ],
        "thumbnailUrl": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_t.jpg",
        "hfov": 360,
        "label": "5-Esquina Izquierda_1",
        "partial": false,
        "frames": [
         {
          "sphere": {
           "levels": [
            {
             "height": 2688,
             "width": 5376,
             "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "id": "overlay_2757F538_167C_2784_41A3_A596A7C83C5C",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 59,
                 "width": 58,
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 31.68,
              "hfov": 7.89,
              "pitch": -3.01
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1, this.camera_93B070E3_9D1A_1438_41DF_FDB957B216CF); this.mainPlayList.set('selectedIndex', 29)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 31.68,
              "pitch": -3.01,
              "hfov": 7.89,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 118,
                 "width": 117,
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_24D0F661_167C_2584_4190_B60E876415EB",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 59,
                 "width": 58,
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 119.09,
              "hfov": 7.87,
              "pitch": -5.49
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_3D7997D7_1674_228C_41AA_D403F76C06DC, this.camera_93B640EE_9D1A_1409_41D9_5F7B78BFF7D3); this.mainPlayList.set('selectedIndex', 27)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 119.09,
              "pitch": -5.49,
              "hfov": 7.87,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 118,
                 "width": 117,
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_2447874C_167C_239C_4189_A71E4FED3221",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 59,
                 "width": 58,
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -62.51,
              "hfov": 7.88,
              "pitch": -4.21
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_35E83422_1617_E584_4186_08583C185C08, this.camera_93ACF0F9_9D1A_140B_41DB_0669AC31A3A7); this.mainPlayList.set('selectedIndex', 25)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -62.51,
              "pitch": -4.21,
              "hfov": 7.88,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 118,
                 "width": 117,
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_40372E91_163C_2284_41A6_C3CB81F3601B",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 52,
                 "width": 61,
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_3_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 1.2,
              "hfov": 7.98,
              "pitch": 14.26
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_4F3F1249_1634_DD84_41B1_1B09E44C11EB, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, null, null, null, null, null, false)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 1.2,
              "pitch": 14.26,
              "hfov": 7.98,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 104,
                 "width": 123,
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_41596D4A_163C_6784_4193_56C0B893F942",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 52,
                 "width": 61,
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_4_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -21.34,
              "hfov": 8.11,
              "pitch": 10
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_4AC282AC_160C_E29C_41A5_60234192F5B3, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_69C4237A_160C_2384_41A8_784DA62FB6ED, null, null, null, null, false)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -21.34,
              "pitch": 10,
              "hfov": 8.11,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 104,
                 "width": 123,
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_4_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_4E5FC6EB_163C_2284_417B_761BA55450F2",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 52,
                 "width": 61,
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_5_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -33.18,
              "hfov": 8.14,
              "pitch": 8.82
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_72B251D5_160C_5E8C_418F_F3A0A38135F3, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, null, null, null, null, null, false)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -33.18,
              "pitch": 8.82,
              "hfov": 8.14,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 104,
                 "width": 123,
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_5_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_4C3A859B_163F_E684_41A0_6D1D2079D309",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 52,
                 "width": 61,
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_6_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -43.89,
              "hfov": 8.18,
              "pitch": 6.96
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_4AF7186F_1614_2D9C_419D_7F5145DBB3BC, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, null, null, null, null, null, false)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -43.89,
              "pitch": 6.96,
              "hfov": 8.18,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 104,
                 "width": 123,
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_6_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_4EB4E7FB_163C_6284_418E_63D196C15D47",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 52,
                 "width": 61,
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_7_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -172.76,
              "hfov": 8.2,
              "pitch": 5.62
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_4A0C3726_1614_238F_4172_E61A531742AA, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_69C3B37A_160C_2384_419C_79046B4034AF, null, null, null, null, false)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -172.76,
              "pitch": 5.62,
              "hfov": 8.2,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 104,
                 "width": 123,
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_7_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_4EBE53C3_1634_2285_4168_9EB3D6A93FAC",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 59,
                 "width": 59,
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_8_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 44.29,
              "hfov": 7.19,
              "pitch": 25.6
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 44.29,
              "pitch": 25.6,
              "hfov": 7.19,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 118,
                 "width": 118,
                 "url": "media/panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_0_HS_8_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             }
            ]
           },
           {
            "rotationX": 0,
            "rotationZ": 0,
            "yaw": 1.2,
            "hfov": 7.98,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupMaxWidth": "95%",
            "id": "popup_4F3F1249_1634_DD84_41B1_1B09E44C11EB",
            "hideDuration": 500,
            "showDuration": 500,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "image": {
             "levels": [
              {
               "height": 625,
               "width": 850,
               "url": "media/popup_4F3F1249_1634_DD84_41B1_1B09E44C11EB_0_0.jpg",
               "class": "ImageResourceLevel"
              },
              {
               "height": 376,
               "width": 511,
               "url": "media/popup_4F3F1249_1634_DD84_41B1_1B09E44C11EB_0_1.jpg",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationY": 0,
            "pitch": 14.26
           },
           {
            "rotationX": 0,
            "rotationZ": 0,
            "yaw": -21.34,
            "hfov": 8.11,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupMaxWidth": "95%",
            "id": "popup_4AC282AC_160C_E29C_41A5_60234192F5B3",
            "hideDuration": 500,
            "showDuration": 500,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "image": {
             "levels": [
              {
               "height": 721,
               "width": 1023,
               "url": "media/popup_4AC282AC_160C_E29C_41A5_60234192F5B3_0_1.jpg",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationY": 0,
            "pitch": 10
           },
           {
            "rotationX": 0,
            "rotationZ": 0,
            "yaw": -33.18,
            "hfov": 8.14,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupMaxWidth": "95%",
            "id": "popup_72B251D5_160C_5E8C_418F_F3A0A38135F3",
            "hideDuration": 500,
            "showDuration": 500,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "image": {
             "levels": [
              {
               "height": 752,
               "width": 807,
               "url": "media/popup_72B251D5_160C_5E8C_418F_F3A0A38135F3_0_0.jpg",
               "class": "ImageResourceLevel"
              },
              {
               "height": 477,
               "width": 512,
               "url": "media/popup_72B251D5_160C_5E8C_418F_F3A0A38135F3_0_1.jpg",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationY": 0,
            "pitch": 8.82
           },
           {
            "rotationX": 0,
            "rotationZ": 0,
            "yaw": -43.89,
            "hfov": 8.18,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupMaxWidth": "95%",
            "id": "popup_4AF7186F_1614_2D9C_419D_7F5145DBB3BC",
            "hideDuration": 500,
            "showDuration": 500,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "image": {
             "levels": [
              {
               "height": 421,
               "width": 581,
               "url": "media/popup_4AF7186F_1614_2D9C_419D_7F5145DBB3BC_0_0.jpg",
               "class": "ImageResourceLevel"
              },
              {
               "height": 371,
               "width": 512,
               "url": "media/popup_4AF7186F_1614_2D9C_419D_7F5145DBB3BC_0_1.jpg",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationY": 0,
            "pitch": 6.96
           },
           {
            "rotationX": 0,
            "rotationZ": 0,
            "yaw": -172.76,
            "hfov": 8.2,
            "hideEasing": "cubic_out",
            "showEasing": "cubic_in",
            "popupMaxWidth": "95%",
            "id": "popup_4A0C3726_1614_238F_4172_E61A531742AA",
            "hideDuration": 500,
            "showDuration": 500,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "95%",
            "image": {
             "levels": [
              {
               "height": 682,
               "width": 1024,
               "url": "media/popup_4A0C3726_1614_238F_4172_E61A531742AA_0_1.jpg",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotationY": 0,
            "pitch": 5.62
           },
           {
            "bleaching": 0.7,
            "bleachingDistance": 0.4,
            "id": "overlay_39D23F00_37C3_A5C0_41C5_0716DB8457E3",
            "class": "LensFlarePanoramaOverlay",
            "yaw": 86.32,
            "pitch": 51.47
           }
          ],
          "class": "SphericPanoramaFrame"
         }
        ]
       }
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 125.92,
       "yaw": -123.06,
       "distance": 1,
       "panorama": "this.panorama_474FEAEC_160C_229C_41B5_A893F886FCB3"
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 2.7,
       "yaw": 20.72,
       "distance": 1,
       "panorama": "this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15"
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -109.06,
       "yaw": -40.82,
       "distance": 1,
       "panorama": {
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "backwardYaw": -40.82,
          "yaw": -109.06,
          "distance": 1,
          "panorama": "this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1"
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": -91.69,
          "yaw": 53.21,
          "distance": 1,
          "panorama": {
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 32.92,
             "yaw": 87.33,
             "distance": 1,
             "panorama": {
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -3.13,
                "yaw": -16.11,
                "distance": 1,
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -61.02,
                   "yaw": 99.63,
                   "distance": 1,
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": 99.63,
                      "yaw": -61.02,
                      "distance": 1,
                      "panorama": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042"
                     }
                    ],
                    "hfovMin": 80,
                    "id": "panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
                    "vfov": 180,
                    "class": "Panorama",
                    "hfovMax": 120,
                    "pitch": 0,
                    "mapLocations": [
                     {
                      "x": 73.95,
                      "map": {
                       "fieldOfViewOverlayRadiusScale": 0.19,
                       "width": 415,
                       "id": "map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                       "class": "Map",
                       "minimumZoomFactor": 0.5,
                       "image": {
                        "levels": [
                         {
                          "height": 558,
                          "width": 415,
                          "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070.png",
                          "class": "ImageResourceLevel"
                         },
                         {
                          "height": 279,
                          "grayscale": true,
                          "width": 207,
                          "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_lq.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "fieldOfViewOverlayOutsideOpacity": 0,
                       "thumbnailUrl": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_t.png",
                       "label": "Planta",
                       "overlays": [
                        {
                         "id": "overlay_C10F34C4_DD09_E665_41EB_0E9F8F32C5EE",
                         "rollOverDisplay": true,
                         "map": {
                          "offsetY": 0,
                          "x": 202.7,
                          "width": 30,
                          "y": 419.55,
                          "class": "HotspotMapOverlayMap",
                          "height": 30,
                          "offsetX": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 15,
                             "width": 14,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 1)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 202.7,
                          "y": 419.55,
                          "width": 30,
                          "class": "HotspotMapOverlayImage",
                          "height": 30,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 29,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "useHandCursor": true
                        },
                        {
                         "id": "overlay_C057DBDB_DD0A_6267_41DF_74197503054E",
                         "rollOverDisplay": true,
                         "map": {
                          "offsetY": 0,
                          "x": 200.7,
                          "width": 30,
                          "y": 104.65,
                          "class": "HotspotMapOverlayMap",
                          "height": 30,
                          "offsetX": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 15,
                             "width": 14,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_1_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 3)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 200.7,
                          "y": 104.65,
                          "width": 30,
                          "class": "HotspotMapOverlayImage",
                          "height": 30,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 29,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_1.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "useHandCursor": true
                        },
                        {
                         "id": "overlay_C1A62C4E_DD0B_E665_41E4_24E80204A343",
                         "rollOverDisplay": true,
                         "map": {
                          "offsetY": 0,
                          "x": 71.7,
                          "width": 30,
                          "y": 106.65,
                          "class": "HotspotMapOverlayMap",
                          "height": 30,
                          "offsetX": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 15,
                             "width": 14,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_2_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 31)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 71.7,
                          "y": 106.65,
                          "width": 30,
                          "class": "HotspotMapOverlayImage",
                          "height": 30,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 29,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_2.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "useHandCursor": true
                        },
                        {
                         "id": "overlay_C0CBF35A_DD0A_E26D_41D4_D1DC41F86387",
                         "rollOverDisplay": true,
                         "map": {
                          "offsetY": 0,
                          "x": 73.7,
                          "width": 30,
                          "y": 213.55,
                          "class": "HotspotMapOverlayMap",
                          "height": 30,
                          "offsetX": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 15,
                             "width": 14,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_3_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 32)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 73.7,
                          "y": 213.55,
                          "width": 30,
                          "class": "HotspotMapOverlayImage",
                          "height": 30,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 29,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_3.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "useHandCursor": true
                        },
                        {
                         "id": "overlay_C01B30DE_DD09_BE65_41DD_D62C14826FDF",
                         "rollOverDisplay": true,
                         "map": {
                          "offsetY": 0,
                          "x": 302.7,
                          "width": 30,
                          "y": 203.55,
                          "class": "HotspotMapOverlayMap",
                          "height": 30,
                          "offsetX": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 15,
                             "width": 14,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_4_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 5)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 302.7,
                          "y": 203.55,
                          "width": 30,
                          "class": "HotspotMapOverlayImage",
                          "height": 30,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 29,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_4.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "useHandCursor": true
                        },
                        {
                         "id": "overlay_C332A511_DD0E_A7FC_41E4_2786EB8DD2F7",
                         "rollOverDisplay": true,
                         "map": {
                          "offsetY": 0,
                          "x": 328.6,
                          "width": 30,
                          "y": 317.55,
                          "class": "HotspotMapOverlayMap",
                          "height": 30,
                          "offsetX": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 15,
                             "width": 14,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_5_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 4)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 328.6,
                          "y": 317.55,
                          "width": 30,
                          "class": "HotspotMapOverlayImage",
                          "height": 30,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 29,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_5.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "useHandCursor": true
                        },
                        {
                         "id": "overlay_C0B9B7F7_DD0E_6224_41E8_445361C5C9E4",
                         "rollOverDisplay": true,
                         "map": {
                          "offsetY": 0,
                          "x": 200.7,
                          "width": 30,
                          "y": 361.6,
                          "class": "HotspotMapOverlayMap",
                          "height": 30,
                          "offsetX": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 15,
                             "width": 14,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_6_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 6)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 200.7,
                          "y": 361.6,
                          "width": 30,
                          "class": "HotspotMapOverlayImage",
                          "height": 30,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 29,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_6.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "useHandCursor": true
                        },
                        {
                         "id": "overlay_C3F85A31_DD0F_E23C_41DC_6258471D9794",
                         "rollOverDisplay": true,
                         "map": {
                          "offsetY": 0,
                          "x": 318.7,
                          "width": 30,
                          "y": 215.55,
                          "class": "HotspotMapOverlayMap",
                          "height": 30,
                          "offsetX": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 15,
                             "width": 14,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_7_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 33)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 318.7,
                          "y": 215.55,
                          "width": 30,
                          "class": "HotspotMapOverlayImage",
                          "height": 30,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 29,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_7.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "useHandCursor": true
                        },
                        {
                         "id": "overlay_C30E80C5_DD0E_9E67_41E5_F7EA65B0847D",
                         "rollOverDisplay": true,
                         "map": {
                          "offsetY": 0,
                          "x": 203.65,
                          "width": 30,
                          "y": 85.55,
                          "class": "HotspotMapOverlayMap",
                          "height": 30,
                          "offsetX": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 15,
                             "width": 14,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_8_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 35)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 203.65,
                          "y": 85.55,
                          "width": 30,
                          "class": "HotspotMapOverlayImage",
                          "height": 30,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 29,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_8.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "useHandCursor": true
                        },
                        {
                         "id": "overlay_C3598F78_DD0E_622C_41E9_FCE2210BA50E",
                         "rollOverDisplay": true,
                         "map": {
                          "offsetY": 0,
                          "x": 66.65,
                          "width": 30,
                          "y": 217.55,
                          "class": "HotspotMapOverlayMap",
                          "height": 30,
                          "offsetX": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 15,
                             "width": 14,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_9_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 34)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 66.65,
                          "y": 217.55,
                          "width": 30,
                          "class": "HotspotMapOverlayImage",
                          "height": 30,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 29,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_9.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "useHandCursor": true
                        },
                        {
                         "id": "overlay_C3A2F1BB_DD09_9E2C_41E6_AEB47B5FEE36",
                         "rollOverDisplay": true,
                         "map": {
                          "offsetY": 0,
                          "x": 236.65,
                          "width": 30,
                          "y": 304.6,
                          "class": "HotspotMapOverlayMap",
                          "height": 30,
                          "offsetX": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 15,
                             "width": 14,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_10_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "areas": [
                          {
                           "mapColor": "#FF0000",
                           "class": "HotspotMapOverlayArea"
                          }
                         ],
                         "image": {
                          "x": 236.65,
                          "y": 304.6,
                          "width": 30,
                          "class": "HotspotMapOverlayImage",
                          "height": 30,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 29,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_10.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "useHandCursor": true
                        },
                        {
                         "id": "overlay_C3966761_DD0A_E25F_41D3_527C5C447FFE",
                         "rollOverDisplay": true,
                         "map": {
                          "offsetY": 0,
                          "x": 202.7,
                          "width": 30,
                          "y": 264.55,
                          "class": "HotspotMapOverlayMap",
                          "height": 30,
                          "offsetX": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 15,
                             "width": 14,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_11_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "areas": [
                          {
                           "mapColor": "#FF0000",
                           "class": "HotspotMapOverlayArea"
                          }
                         ],
                         "image": {
                          "x": 202.7,
                          "y": 264.55,
                          "width": 30,
                          "class": "HotspotMapOverlayImage",
                          "height": 30,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 29,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_11.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "useHandCursor": true
                        },
                        {
                         "id": "overlay_C2AD60A4_DD09_9E24_41E0_BE7A28E7C8F8",
                         "rollOverDisplay": true,
                         "map": {
                          "offsetY": 0,
                          "x": 207.7,
                          "width": 30,
                          "y": 160.55,
                          "class": "HotspotMapOverlayMap",
                          "height": 30,
                          "offsetX": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 15,
                             "width": 14,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_12_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "areas": [
                          {
                           "mapColor": "#FF0000",
                           "class": "HotspotMapOverlayArea"
                          }
                         ],
                         "image": {
                          "x": 207.7,
                          "y": 160.55,
                          "width": 30,
                          "class": "HotspotMapOverlayImage",
                          "height": 30,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 29,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_12.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "useHandCursor": true
                        },
                        {
                         "id": "overlay_EFFAE3BA_DD3F_A22D_41DB_87FABC0F13CA",
                         "rollOverDisplay": true,
                         "map": {
                          "offsetY": 0,
                          "x": 227.65,
                          "width": 30,
                          "y": 415.8,
                          "class": "HotspotMapOverlayMap",
                          "height": 30,
                          "offsetX": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 15,
                             "width": 15,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_13_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 8)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 227.65,
                          "y": 415.8,
                          "width": 30,
                          "class": "HotspotMapOverlayImage",
                          "height": 30,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 30,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_13.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "useHandCursor": true
                        },
                        {
                         "id": "overlay_2A070BB7_27CE_576F_41AB_07E104B79EC6",
                         "rollOverDisplay": true,
                         "map": {
                          "offsetY": 0,
                          "x": 207.6,
                          "width": 30,
                          "y": 215.15,
                          "class": "HotspotMapOverlayMap",
                          "height": 30,
                          "offsetX": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 15,
                             "width": 15,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_14_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 37)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 207.6,
                          "y": 215.15,
                          "width": 30,
                          "class": "HotspotMapOverlayImage",
                          "height": 30,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 30,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_14.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "useHandCursor": true
                        },
                        {
                         "id": "overlay_376F3930_27CA_D361_4190_7CF2D4BA616B",
                         "rollOverDisplay": true,
                         "map": {
                          "offsetY": 0,
                          "x": 174.85,
                          "width": 30,
                          "y": 187.8,
                          "class": "HotspotMapOverlayMap",
                          "height": 30,
                          "offsetX": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 15,
                             "width": 15,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_15_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 2)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 174.85,
                          "y": 187.8,
                          "width": 30,
                          "class": "HotspotMapOverlayImage",
                          "height": 30,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 30,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_15.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "useHandCursor": true
                        },
                        {
                         "id": "overlay_3778DCE6_27D7_D2E1_41C3_D9B03693BA2C",
                         "rollOverDisplay": true,
                         "map": {
                          "offsetY": 0,
                          "x": 202.9,
                          "width": 30,
                          "y": 75.95,
                          "class": "HotspotMapOverlayMap",
                          "height": 30,
                          "offsetX": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 15,
                             "width": 15,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_16_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 7)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 202.9,
                          "y": 75.95,
                          "width": 30,
                          "class": "HotspotMapOverlayImage",
                          "height": 30,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 30,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_16.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "useHandCursor": true
                        },
                        {
                         "id": "overlay_3686017A_27D6_53E6_41C2_468B88D59841",
                         "rollOverDisplay": true,
                         "map": {
                          "offsetY": 0,
                          "x": 58.95,
                          "width": 30,
                          "y": 99.95,
                          "class": "HotspotMapOverlayMap",
                          "height": 30,
                          "offsetX": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 15,
                             "width": 15,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_17_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "areas": [
                          {
                           "class": "HotspotMapOverlayArea",
                           "click": "this.mainPlayList.set('selectedIndex', 36)",
                           "mapColor": "#FF0000"
                          }
                         ],
                         "image": {
                          "x": 58.95,
                          "y": 99.95,
                          "width": 30,
                          "class": "HotspotMapOverlayImage",
                          "height": 30,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 30,
                             "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_17.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         },
                         "useHandCursor": true
                        }
                       ],
                       "fieldOfViewOverlayOutsideColor": "#000000",
                       "initialZoomFactor": 1,
                       "maximumZoomFactor": 1.2,
                       "fieldOfViewOverlayInsideColor": "#000000",
                       "fieldOfViewOverlayInsideOpacity": 0.4,
                       "scaleMode": "fit_inside",
                       "height": 558
                      },
                      "class": "PanoramaMapLocation",
                      "angle": -207.49,
                      "y": 114.95
                     }
                    ],
                    "thumbnailUrl": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_t.jpg",
                    "hfov": 360,
                    "label": "parking2",
                    "partial": false,
                    "frames": [
                     {
                      "sphere": {
                       "levels": [
                        {
                         "height": 2688,
                         "width": 5376,
                         "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_t.jpg",
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "id": "overlay_3460957D_251D_87CE_4190_36CE7946E825",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "height": 59,
                             "width": 59,
                             "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -61.02,
                          "hfov": 7.88,
                          "pitch": -3.91
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_8DAF6006_9D1A_13F9_41D5_4B11B6A68983); this.mainPlayList.set('selectedIndex', 7)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": -61.02,
                          "pitch": -3.91,
                          "hfov": 7.88,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 119,
                             "width": 118,
                             "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         }
                        ]
                       },
                       {
                        "bleaching": 0.7,
                        "bleachingDistance": 0.4,
                        "id": "overlay_39DF8AEE_37C2_AC40_417A_6242CBF48B68",
                        "class": "LensFlarePanoramaOverlay",
                        "yaw": 95.38,
                        "pitch": 16.72
                       }
                      ],
                      "class": "SphericPanoramaFrame"
                     }
                    ]
                   }
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -16.11,
                   "yaw": -3.13,
                   "distance": 1,
                   "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F"
                  }
                 ],
                 "hfovMin": 80,
                 "id": "panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
                 "vfov": 180,
                 "class": "Panorama",
                 "hfovMax": 120,
                 "pitch": 0,
                 "mapLocations": [
                  {
                   "x": 217.9,
                   "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                   "class": "PanoramaMapLocation",
                   "angle": 180,
                   "y": 90.95
                  }
                 ],
                 "thumbnailUrl": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_t.jpg",
                 "hfov": 360,
                 "label": "Parking Garage",
                 "partial": false,
                 "frames": [
                  {
                   "sphere": {
                    "levels": [
                     {
                      "height": 2688,
                      "width": 5376,
                      "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_t.jpg",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "id": "overlay_358E55A7_2512_877B_41B8_E929438E29B7",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -3.13,
                       "hfov": 7.9,
                       "pitch": -1.31
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_92A3FE98_9D1A_6C09_41D9_63020A65DB70); this.mainPlayList.set('selectedIndex', 37)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": -3.13,
                       "pitch": -1.31,
                       "hfov": 7.9,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 119,
                          "width": 118,
                          "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_3737BAD2_2512_82DA_419C_050096C450A4",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 99.63,
                       "hfov": 7.83,
                       "pitch": -7.96
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175, this.camera_92A84E8D_9D1A_6C0B_41CE_C1E137D43392); this.mainPlayList.set('selectedIndex', 36)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": 99.63,
                       "pitch": -7.96,
                       "hfov": 7.83,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 119,
                          "width": 118,
                          "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       }
                      }
                     ]
                    }
                   ],
                   "class": "SphericPanoramaFrame"
                  }
                 ]
                }
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 87.33,
                "yaw": 32.92,
                "distance": 1,
                "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6"
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 27.08,
                "yaw": -166.68,
                "distance": 1,
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -166.68,
                   "yaw": 27.08,
                   "distance": 1,
                   "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F"
                  }
                 ],
                 "hfovMin": 80,
                 "id": "panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
                 "vfov": 180,
                 "class": "Panorama",
                 "hfovMax": 120,
                 "pitch": 0,
                 "mapLocations": [
                  {
                   "x": 189.85,
                   "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                   "class": "PanoramaMapLocation",
                   "angle": 59.39,
                   "y": 202.8
                  }
                 ],
                 "thumbnailUrl": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_t.jpg",
                 "hfov": 360,
                 "label": "Restrooms",
                 "partial": false,
                 "frames": [
                  {
                   "sphere": {
                    "levels": [
                     {
                      "height": 2688,
                      "width": 5376,
                      "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_t.jpg",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "id": "overlay_2B9DAFA3_2515_837B_41BD_B2A12DB79FE4",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "height": 60,
                          "width": 60,
                          "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 27.08,
                       "hfov": 7.64,
                       "pitch": -18.14
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_92DDEEA4_9D1A_6C38_41A9_6141F20659E3); this.mainPlayList.set('selectedIndex', 37)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": 27.08,
                       "pitch": -18.14,
                       "hfov": 7.64,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 120,
                          "width": 120,
                          "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       }
                      }
                     ]
                    },
                    {
                     "bleaching": 0.7,
                     "bleachingDistance": 0.4,
                     "id": "overlay_FE341697_EE9B_B5BB_41CC_1DCF1E1B9FE9",
                     "class": "LensFlarePanoramaOverlay",
                     "yaw": -74.61,
                     "pitch": 59.4
                    },
                    {
                     "bleaching": 0.7,
                     "bleachingDistance": 0.4,
                     "id": "overlay_FE452B9D_EE9B_93AF_41C8_E05C00B1EC74",
                     "class": "LensFlarePanoramaOverlay",
                     "yaw": -13.79,
                     "pitch": 28.05
                    },
                    {
                     "bleaching": 0.7,
                     "bleachingDistance": 0.4,
                     "id": "overlay_FE59F0F5_EE9B_8D7F_41E8_C632466F366D",
                     "class": "LensFlarePanoramaOverlay",
                     "yaw": -151.67,
                     "pitch": 31.07
                    }
                   ],
                   "class": "SphericPanoramaFrame"
                  }
                 ]
                }
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -170.05,
                "yaw": -76.25,
                "distance": 1,
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -34.22,
                   "yaw": 147.18,
                   "distance": 1,
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": 147.18,
                      "yaw": -34.22,
                      "distance": 1,
                      "panorama": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F"
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": 56.43,
                      "yaw": -146.27,
                      "distance": 1,
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": -146.27,
                         "yaw": 56.43,
                         "distance": 1,
                         "panorama": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8"
                        },
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": 133.34,
                         "yaw": -31.12,
                         "distance": 1,
                         "panorama": {
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": -134.96,
                            "yaw": 39.43,
                            "distance": 1,
                            "panorama": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F"
                           },
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": -31.12,
                            "yaw": 133.34,
                            "distance": 1,
                            "panorama": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09"
                           }
                          ],
                          "hfovMin": 80,
                          "id": "panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
                          "vfov": 180,
                          "class": "Panorama",
                          "hfovMax": 120,
                          "pitch": 0,
                          "mapLocations": [
                           {
                            "x": 333.7,
                            "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                            "class": "PanoramaMapLocation",
                            "angle": -175.06,
                            "y": 230.55
                           }
                          ],
                          "thumbnailUrl": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_t.jpg",
                          "hfov": 360,
                          "label": "18",
                          "partial": false,
                          "frames": [
                           {
                            "front": {
                             "levels": [
                              {
                               "height": 1704,
                               "width": 1704,
                               "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_f_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1024,
                               "width": 1024,
                               "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_f.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "top": {
                             "levels": [
                              {
                               "height": 1704,
                               "width": 1704,
                               "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_u_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1024,
                               "width": 1024,
                               "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_u.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "right": {
                             "levels": [
                              {
                               "height": 1704,
                               "width": 1704,
                               "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_r_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1024,
                               "width": 1024,
                               "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_r.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "class": "CubicPanoramaFrame",
                            "back": {
                             "levels": [
                              {
                               "height": 1704,
                               "width": 1704,
                               "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_b_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1024,
                               "width": 1024,
                               "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_b.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "thumbnailUrl": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_t.jpg",
                            "bottom": {
                             "levels": [
                              {
                               "height": 1704,
                               "width": 1704,
                               "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_d_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1024,
                               "width": 1024,
                               "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_d.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "id": "overlay_CE5312DE_DCB6_5B64_41BB_6CD92A705CA6",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 59,
                                   "width": 59,
                                   "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_0_HS_1_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "yaw": 39.43,
                                "hfov": 7.84,
                                "pitch": -7.1
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_92EA9EE9_9D1A_6C0B_41D7_E102C3D2456E); this.mainPlayList.set('selectedIndex', 6)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "yaw": 39.43,
                                "pitch": -7.1,
                                "hfov": 7.84,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 119,
                                   "width": 118,
                                   "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_0_HS_1_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                }
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_CFB8AD78_DCB7_E92D_41BC_33566693B151",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 59,
                                   "width": 59,
                                   "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "yaw": 133.34,
                                "hfov": 7.82,
                                "pitch": -8.27
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_92E54EFB_9D1A_6C08_41C1_BD77B83E57B0); this.mainPlayList.set('selectedIndex', 35)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "yaw": 133.34,
                                "pitch": -8.27,
                                "hfov": 7.82,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 119,
                                   "width": 118,
                                   "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                }
                               }
                              ]
                             }
                            ],
                            "left": {
                             "levels": [
                              {
                               "height": 1704,
                               "width": 1704,
                               "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_l_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1024,
                               "width": 1024,
                               "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_l.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            }
                           }
                          ]
                         }
                        }
                       ],
                       "hfovMin": 80,
                       "id": "panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
                       "vfov": 180,
                       "class": "Panorama",
                       "hfovMax": 120,
                       "pitch": 0,
                       "mapLocations": [
                        {
                         "x": 218.65,
                         "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                         "class": "PanoramaMapLocation",
                         "angle": 180,
                         "y": 100.55
                        }
                       ],
                       "thumbnailUrl": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_t.jpg",
                       "hfov": 360,
                       "label": "19",
                       "partial": false,
                       "frames": [
                        {
                         "front": {
                          "levels": [
                           {
                            "height": 1704,
                            "width": 1704,
                            "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_f_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1024,
                            "width": 1024,
                            "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_f.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "top": {
                          "levels": [
                           {
                            "height": 1704,
                            "width": 1704,
                            "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_u_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1024,
                            "width": 1024,
                            "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_u.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "right": {
                          "levels": [
                           {
                            "height": 1704,
                            "width": 1704,
                            "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_r_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1024,
                            "width": 1024,
                            "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_r.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "CubicPanoramaFrame",
                         "back": {
                          "levels": [
                           {
                            "height": 1704,
                            "width": 1704,
                            "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_b_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1024,
                            "width": 1024,
                            "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_b.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_t.jpg",
                         "bottom": {
                          "levels": [
                           {
                            "height": 1704,
                            "width": 1704,
                            "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_d_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1024,
                            "width": 1024,
                            "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_d.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "id": "overlay_CFB5EC7B_DCB6_6F2C_41DB_6256013DCD9F",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 59,
                                "width": 59,
                                "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_1_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -31.12,
                             "hfov": 7.98,
                             "pitch": -7.02
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_92149DC1_9D1A_6C7B_41AB_E42DAD6C0BAB); this.mainPlayList.set('selectedIndex', 33)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": -31.12,
                             "pitch": -7.02,
                             "hfov": 7.98,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 119,
                                "width": 119,
                                "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_CF3BB706_DCB6_DAE5_41C3_D53007E5C556",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 59,
                                "width": 59,
                                "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": 56.43,
                             "hfov": 7.83,
                             "pitch": -7.66
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_921BADB5_9D1A_6C18_41E0_4DF78BE92142); this.mainPlayList.set('selectedIndex', 34)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": 56.43,
                             "pitch": -7.66,
                             "hfov": 7.83,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 119,
                                "width": 118,
                                "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_D6ACF640_DCF9_E25D_41B7_FC333768C35D",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 57,
                                "width": 65,
                                "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_2_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -1.47,
                             "hfov": 8.68,
                             "pitch": -8.5
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.mainPlayList.set('selectedIndex', 1)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": -1.47,
                             "pitch": -8.5,
                             "hfov": 8.68,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 115,
                                "width": 131,
                                "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_2_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          }
                         ],
                         "left": {
                          "levels": [
                           {
                            "height": 1704,
                            "width": 1704,
                            "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_l_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1024,
                            "width": 1024,
                            "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_l.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         }
                        }
                       ]
                      }
                     }
                    ],
                    "hfovMin": 80,
                    "id": "panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
                    "vfov": 180,
                    "class": "Panorama",
                    "hfovMax": 120,
                    "pitch": 0,
                    "mapLocations": [
                     {
                      "x": 81.65,
                      "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                      "class": "PanoramaMapLocation",
                      "angle": 171.27,
                      "y": 232.55
                     }
                    ],
                    "thumbnailUrl": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_t.jpg",
                    "hfov": 360,
                    "label": "20",
                    "partial": false,
                    "frames": [
                     {
                      "front": {
                       "levels": [
                        {
                         "height": 1704,
                         "width": 1704,
                         "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_f_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1024,
                         "width": 1024,
                         "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_f.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "top": {
                       "levels": [
                        {
                         "height": 1704,
                         "width": 1704,
                         "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_u_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1024,
                         "width": 1024,
                         "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_u.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "right": {
                       "levels": [
                        {
                         "height": 1704,
                         "width": 1704,
                         "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_r_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1024,
                         "width": 1024,
                         "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_r.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "CubicPanoramaFrame",
                      "back": {
                       "levels": [
                        {
                         "height": 1704,
                         "width": 1704,
                         "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_b_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1024,
                         "width": 1024,
                         "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_b.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_t.jpg",
                      "bottom": {
                       "levels": [
                        {
                         "height": 1704,
                         "width": 1704,
                         "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_d_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1024,
                         "width": 1024,
                         "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_d.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "id": "overlay_CF2655CA_DCB5_F96D_41B7_34C2794364A6",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "height": 59,
                             "width": 58,
                             "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_0_HS_1_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -146.27,
                          "hfov": 7.82,
                          "pitch": -8.35
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_93A77110_9D1A_1418_41BE_1458F951051F); this.mainPlayList.set('selectedIndex', 35)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": -146.27,
                          "pitch": -8.35,
                          "hfov": 7.82,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 118,
                             "width": 117,
                             "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_C886FB4D_DCBA_6967_415D_6C46FDD1DF7E",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "height": 59,
                             "width": 58,
                             "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -34.22,
                          "hfov": 7.84,
                          "pitch": -7.11
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_93A2C105_9D1A_15F8_41D8_B760B37FC32B); this.mainPlayList.set('selectedIndex', 6)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": -34.22,
                          "pitch": -7.11,
                          "hfov": 7.84,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 118,
                             "width": 117,
                             "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         }
                        ]
                       }
                      ],
                      "left": {
                       "levels": [
                        {
                         "height": 1704,
                         "width": 1704,
                         "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_l_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1024,
                         "width": 1024,
                         "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_l.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      }
                     }
                    ]
                   }
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 39.43,
                   "yaw": -134.96,
                   "distance": 1,
                   "panorama": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9"
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -76.25,
                   "yaw": -170.05,
                   "distance": 1,
                   "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F"
                  }
                 ],
                 "hfovMin": 80,
                 "id": "panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
                 "vfov": 180,
                 "class": "Panorama",
                 "hfovMax": 120,
                 "pitch": 0,
                 "mapLocations": [
                  {
                   "x": 215.7,
                   "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                   "class": "PanoramaMapLocation",
                   "angle": 177.75,
                   "y": 376.6
                  }
                 ],
                 "thumbnailUrl": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_t.jpg",
                 "hfov": 360,
                 "label": "Empty Shell",
                 "partial": false,
                 "frames": [
                  {
                   "front": {
                    "levels": [
                     {
                      "height": 1704,
                      "width": 1704,
                      "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_f_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1024,
                      "width": 1024,
                      "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_f.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "top": {
                    "levels": [
                     {
                      "height": 1704,
                      "width": 1704,
                      "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_u_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1024,
                      "width": 1024,
                      "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_u.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "right": {
                    "levels": [
                     {
                      "height": 1704,
                      "width": 1704,
                      "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_r_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1024,
                      "width": 1024,
                      "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_r.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "levels": [
                     {
                      "height": 1704,
                      "width": 1704,
                      "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_b_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1024,
                      "width": 1024,
                      "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_b.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_t.jpg",
                   "bottom": {
                    "levels": [
                     {
                      "height": 1704,
                      "width": 1704,
                      "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_d_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1024,
                      "width": 1024,
                      "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_d.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "id": "overlay_CE8CA507_DCAE_5EE3_41E1_5677CFA0DCC5",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -134.96,
                       "hfov": 7.84,
                       "pitch": -7.44
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_8DE92C26_9D1A_6C39_41CC_58606AE67CB5); this.mainPlayList.set('selectedIndex', 33)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": -134.96,
                       "pitch": -7.44,
                       "hfov": 7.84,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 119,
                          "width": 118,
                          "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_CE501F2B_DCB6_692C_41E9_C5E62C500A79",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 147.18,
                       "hfov": 7.82,
                       "pitch": -8.14
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_8DFFCC19_9D1A_6C0B_41A2_78EB50BC1B6B); this.mainPlayList.set('selectedIndex', 34)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": 147.18,
                       "pitch": -8.14,
                       "hfov": 7.82,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 119,
                          "width": 118,
                          "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_3690BC3C_2513_854E_41B9_F52311509481",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_3_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -170.05,
                       "hfov": 7.89,
                       "pitch": -2.91
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_8DE3FC33_9D1A_6C18_41DD_49E7147532D6); this.mainPlayList.set('selectedIndex', 37)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": -170.05,
                       "pitch": -2.91,
                       "hfov": 7.89,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 118,
                          "width": 118,
                          "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_3_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       }
                      }
                     ]
                    }
                   ],
                   "left": {
                    "levels": [
                     {
                      "height": 1704,
                      "width": 1704,
                      "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_l_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1024,
                      "width": 1024,
                      "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_l.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ]
                }
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 96.47,
                "yaw": -139.07,
                "distance": 1,
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 3.46,
                   "yaw": -176.41,
                   "distance": 1,
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -85.38,
                      "yaw": 99.45,
                      "distance": 1,
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": -117.42,
                         "yaw": 72.07,
                         "distance": 1,
                         "panorama": {
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": 72.07,
                            "yaw": -117.42,
                            "distance": 1,
                            "panorama": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A"
                           },
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": -176.35,
                            "yaw": 66.4,
                            "distance": 1,
                            "panorama": {
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "backwardYaw": 66.4,
                               "yaw": -176.35,
                               "distance": 1,
                               "panorama": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E"
                              }
                             ],
                             "hfovMin": 80,
                             "id": "panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
                             "vfov": 180,
                             "class": "Panorama",
                             "hfovMax": 120,
                             "pitch": 0,
                             "mapLocations": [
                              {
                               "x": 343.6,
                               "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                               "class": "PanoramaMapLocation",
                               "angle": -191.07,
                               "y": 332.55
                              }
                             ],
                             "thumbnailUrl": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_t.jpg",
                             "hfov": 360,
                             "label": "Dining Room",
                             "partial": false,
                             "frames": [
                              {
                               "front": {
                                "levels": [
                                 {
                                  "height": 1704,
                                  "width": 1704,
                                  "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_f_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 1024,
                                  "width": 1024,
                                  "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_f.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "top": {
                                "levels": [
                                 {
                                  "height": 1704,
                                  "width": 1704,
                                  "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_u_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 1024,
                                  "width": 1024,
                                  "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_u.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "right": {
                                "levels": [
                                 {
                                  "height": 1704,
                                  "width": 1704,
                                  "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_r_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 1024,
                                  "width": 1024,
                                  "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_r.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "class": "CubicPanoramaFrame",
                               "back": {
                                "levels": [
                                 {
                                  "height": 1704,
                                  "width": 1704,
                                  "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_b_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 1024,
                                  "width": 1024,
                                  "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_b.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_t.jpg",
                               "bottom": {
                                "levels": [
                                 {
                                  "height": 1704,
                                  "width": 1704,
                                  "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_d_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 1024,
                                  "width": 1024,
                                  "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_d.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_CD4CB2EB_DCAE_5B2C_41DC_F7E2F745A878",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 59,
                                      "width": 60,
                                      "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_0_HS_0_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "yaw": -176.35,
                                   "hfov": 7.97,
                                   "pitch": -7.24
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_938F80B5_9D1A_141B_41DF_73047B79B436); this.mainPlayList.set('selectedIndex', 5)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "yaw": -176.35,
                                   "pitch": -7.24,
                                   "hfov": 7.97,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 119,
                                      "width": 120,
                                      "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_0_HS_0_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   }
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_D672A178_DCEA_F368_41D5_479F8DEF3160",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 52,
                                      "width": 61,
                                      "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_0_HS_1_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "yaw": 72.56,
                                   "hfov": 8.23,
                                   "pitch": -1.54
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_D60305E4_DCEA_D39F_419B_D9B149482827, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_D09C8172_DCEA_737B_41C7_76727B821C90, null, null, null, null, false)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "yaw": 72.56,
                                   "pitch": -1.54,
                                   "hfov": 8.23,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 104,
                                      "width": 123,
                                      "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_0_HS_1_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   }
                                  }
                                 ]
                                },
                                {
                                 "rotationX": 0,
                                 "rotationZ": 0,
                                 "yaw": 72.56,
                                 "hfov": 8.23,
                                 "hideEasing": "cubic_out",
                                 "showEasing": "cubic_in",
                                 "popupMaxWidth": "95%",
                                 "id": "popup_D60305E4_DCEA_D39F_419B_D9B149482827",
                                 "hideDuration": 500,
                                 "showDuration": 500,
                                 "class": "PopupPanoramaOverlay",
                                 "popupMaxHeight": "95%",
                                 "image": {
                                  "levels": [
                                   {
                                    "height": 682,
                                    "width": 1024,
                                    "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_1.jpg",
                                    "class": "ImageResourceLevel"
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "rotationY": 0,
                                 "pitch": -1.54
                                }
                               ],
                               "left": {
                                "levels": [
                                 {
                                  "height": 1704,
                                  "width": 1704,
                                  "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_l_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 1024,
                                  "width": 1024,
                                  "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_l.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ]
                            }
                           }
                          ],
                          "hfovMin": 80,
                          "id": "panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
                          "vfov": 180,
                          "class": "Panorama",
                          "hfovMax": 120,
                          "pitch": 0,
                          "mapLocations": [
                           {
                            "x": 317.7,
                            "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                            "class": "PanoramaMapLocation",
                            "angle": 92.31,
                            "y": 218.55
                           }
                          ],
                          "thumbnailUrl": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_t.jpg",
                          "hfov": 360,
                          "label": "Conference Room",
                          "partial": false,
                          "frames": [
                           {
                            "front": {
                             "levels": [
                              {
                               "height": 1704,
                               "width": 1704,
                               "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_f_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1024,
                               "width": 1024,
                               "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_f.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "top": {
                             "levels": [
                              {
                               "height": 1704,
                               "width": 1704,
                               "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_u_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1024,
                               "width": 1024,
                               "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_u.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "right": {
                             "levels": [
                              {
                               "height": 1704,
                               "width": 1704,
                               "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_r_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1024,
                               "width": 1024,
                               "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_r.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "class": "CubicPanoramaFrame",
                            "back": {
                             "levels": [
                              {
                               "height": 1704,
                               "width": 1704,
                               "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_b_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1024,
                               "width": 1024,
                               "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_b.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "thumbnailUrl": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_t.jpg",
                            "bottom": {
                             "levels": [
                              {
                               "height": 1704,
                               "width": 1704,
                               "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_d_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1024,
                               "width": 1024,
                               "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_d.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "id": "overlay_CDB4D373_DCAD_D923_41DA_BEF903345F6C",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 60,
                                   "width": 60,
                                   "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_0_HS_1_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "yaw": -117.42,
                                "hfov": 8.02,
                                "pitch": -3.5
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_920D3DCE_9D1A_6C08_41E1_426FF47140D7); this.mainPlayList.set('selectedIndex', 32)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "yaw": -117.42,
                                "pitch": -3.5,
                                "hfov": 8.02,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 120,
                                   "width": 120,
                                   "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_0_HS_1_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                }
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_CD17C810_DCAE_D6FC_41E9_DAACF2C28087",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 60,
                                   "width": 60,
                                   "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "yaw": 66.4,
                                "hfov": 7.9,
                                "pitch": -10.48
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D, this.camera_9207EDDB_9D1A_6C08_41D6_B485D09DA89E); this.mainPlayList.set('selectedIndex', 4)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "yaw": 66.4,
                                "pitch": -10.48,
                                "hfov": 7.9,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 120,
                                   "width": 120,
                                   "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                }
                               }
                              ]
                             }
                            ],
                            "left": {
                             "levels": [
                              {
                               "height": 1704,
                               "width": 1704,
                               "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_l_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1024,
                               "width": 1024,
                               "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_l.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            }
                           }
                          ]
                         }
                        },
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": 99.45,
                         "yaw": -85.38,
                         "distance": 1,
                         "panorama": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B"
                        }
                       ],
                       "hfovMin": 80,
                       "id": "panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
                       "vfov": 180,
                       "class": "Panorama",
                       "hfovMax": 120,
                       "pitch": 0,
                       "mapLocations": [
                        {
                         "x": 88.7,
                         "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                         "class": "PanoramaMapLocation",
                         "angle": 83.39,
                         "y": 228.55
                        }
                       ],
                       "thumbnailUrl": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_t.jpg",
                       "hfov": 360,
                       "label": "14",
                       "partial": false,
                       "frames": [
                        {
                         "front": {
                          "levels": [
                           {
                            "height": 1704,
                            "width": 1704,
                            "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_f_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1024,
                            "width": 1024,
                            "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_f.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "top": {
                          "levels": [
                           {
                            "height": 1704,
                            "width": 1704,
                            "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_u_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1024,
                            "width": 1024,
                            "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_u.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "right": {
                          "levels": [
                           {
                            "height": 1704,
                            "width": 1704,
                            "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_r_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1024,
                            "width": 1024,
                            "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_r.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "CubicPanoramaFrame",
                         "back": {
                          "levels": [
                           {
                            "height": 1704,
                            "width": 1704,
                            "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_b_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1024,
                            "width": 1024,
                            "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_b.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_t.jpg",
                         "bottom": {
                          "levels": [
                           {
                            "height": 1704,
                            "width": 1704,
                            "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_d_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1024,
                            "width": 1024,
                            "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_d.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "id": "overlay_CC04F239_DC5A_BB2F_41D9_32A30344941E",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 59,
                                "width": 59,
                                "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_1_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -85.38,
                             "hfov": 7.88,
                             "pitch": -4.65
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_8C161C4C_9D1A_6C08_41E0_43EF925FC96A); this.mainPlayList.set('selectedIndex', 31)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": -85.38,
                             "pitch": -4.65,
                             "hfov": 7.88,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 118,
                                "width": 118,
                                "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_CD93F058_DCAA_D76C_41E3_66E7F2CC4E96",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 59,
                                "width": 59,
                                "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": 72.07,
                             "hfov": 7.87,
                             "pitch": -5.22
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_8C1DAC3F_9D1A_6C07_419E_A3EB336304F4); this.mainPlayList.set('selectedIndex', 5)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": 72.07,
                             "pitch": -5.22,
                             "hfov": 7.87,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 118,
                                "width": 118,
                                "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_D67088C0_DCEE_3198_41E6_EACE23A23D4D",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 52,
                                "width": 61,
                                "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_4_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -36.13,
                             "hfov": 8.22,
                             "pitch": -3.43
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupPanoramaOverlay(this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_D082516E_DCEA_7368_41CB_9D0CFA830713, null, null, null, null, false)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": -36.13,
                             "pitch": -3.43,
                             "hfov": 8.22,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 104,
                                "width": 123,
                                "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_4_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          },
                          {
                           "rotationX": 0,
                           "rotationZ": 0,
                           "yaw": -36.13,
                           "hfov": 8.22,
                           "hideEasing": "cubic_out",
                           "showEasing": "cubic_in",
                           "popupMaxWidth": "95%",
                           "id": "popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
                           "hideDuration": 500,
                           "showDuration": 500,
                           "class": "PopupPanoramaOverlay",
                           "popupMaxHeight": "95%",
                           "image": {
                            "levels": [
                             {
                              "height": 682,
                              "width": 1024,
                              "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_1.jpg",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "rotationY": 0,
                           "pitch": -3.43
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_D623BF6C_DCE9_EF68_41E5_EA1EE4AA1D99",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 52,
                                "width": 61,
                                "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_3_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -170.82,
                             "hfov": 8.15,
                             "pitch": -8.1
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupPanoramaOverlay(this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_D38C2C6E_DFA1_73F8_41C3_8C1C155D72CB, null, null, null, null, false)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": -170.82,
                             "pitch": -8.1,
                             "hfov": 8.15,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 104,
                                "width": 123,
                                "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_3_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_D644FD83_DCEA_5398_41CF_FDE7075B148D",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 52,
                                "width": 61,
                                "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_2_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": 102.19,
                             "hfov": 8.24,
                             "pitch": -0.5
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupPanoramaOverlay(this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_D09DC170_DCEA_7378_41EB_423962A6DDEA, null, null, null, null, false)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": 102.19,
                             "pitch": -0.5,
                             "hfov": 8.24,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 104,
                                "width": 123,
                                "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_2_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          },
                          {
                           "rotationX": 0,
                           "rotationZ": 0,
                           "yaw": 102.19,
                           "hfov": 8.24,
                           "hideEasing": "cubic_out",
                           "showEasing": "cubic_in",
                           "popupMaxWidth": "95%",
                           "id": "popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
                           "hideDuration": 500,
                           "showDuration": 500,
                           "class": "PopupPanoramaOverlay",
                           "popupMaxHeight": "95%",
                           "image": {
                            "levels": [
                             {
                              "height": 682,
                              "width": 1024,
                              "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_1.jpg",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "rotationY": 0,
                           "pitch": -0.5
                          },
                          {
                           "bleaching": 0.7,
                           "bleachingDistance": 0.4,
                           "id": "overlay_D4A17713_DF66_0D7B_41EA_88920C3D3D96",
                           "class": "LensFlarePanoramaOverlay",
                           "yaw": 4,
                           "pitch": 29.81
                          },
                          {
                           "bleaching": 0.7,
                           "bleachingDistance": 0.4,
                           "id": "overlay_D4BC6C09_DF66_0357_41CE_9C3B75EE1C61",
                           "class": "LensFlarePanoramaOverlay",
                           "yaw": 125.52,
                           "pitch": 33.62
                          },
                          {
                           "bleaching": 0.7,
                           "bleachingDistance": 0.4,
                           "id": "overlay_D4BAE022_DF66_0355_41EA_F8574F4021B9",
                           "class": "LensFlarePanoramaOverlay",
                           "yaw": -105.71,
                           "pitch": 19.14
                          },
                          {
                           "rotationX": 0,
                           "rotationZ": 0,
                           "yaw": -170.82,
                           "hfov": 8.15,
                           "hideEasing": "cubic_out",
                           "showEasing": "cubic_in",
                           "popupMaxWidth": "95%",
                           "id": "popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
                           "hideDuration": 500,
                           "showDuration": 500,
                           "class": "PopupPanoramaOverlay",
                           "popupMaxHeight": "95%",
                           "image": {
                            "levels": [
                             {
                              "height": 777,
                              "width": 1024,
                              "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_1.jpg",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "rotationY": 0,
                           "pitch": -8.1
                          }
                         ],
                         "left": {
                          "levels": [
                           {
                            "height": 1704,
                            "width": 1704,
                            "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_l_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1024,
                            "width": 1024,
                            "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_l.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         }
                        }
                       ]
                      }
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -176.41,
                      "yaw": 3.46,
                      "distance": 1,
                      "panorama": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0"
                     }
                    ],
                    "hfovMin": 80,
                    "id": "panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
                    "vfov": 180,
                    "class": "Panorama",
                    "hfovMax": 120,
                    "pitch": 0,
                    "mapLocations": [
                     {
                      "x": 86.7,
                      "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                      "class": "PanoramaMapLocation",
                      "angle": 80.77,
                      "y": 121.65
                     }
                    ],
                    "thumbnailUrl": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_t.jpg",
                    "hfov": 360,
                    "label": "9",
                    "partial": false,
                    "frames": [
                     {
                      "front": {
                       "levels": [
                        {
                         "height": 1704,
                         "width": 1704,
                         "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_f_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1024,
                         "width": 1024,
                         "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_f.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "top": {
                       "levels": [
                        {
                         "height": 1704,
                         "width": 1704,
                         "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_u_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1024,
                         "width": 1024,
                         "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_u.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "right": {
                       "levels": [
                        {
                         "height": 1704,
                         "width": 1704,
                         "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_r_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1024,
                         "width": 1024,
                         "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_r.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "CubicPanoramaFrame",
                      "back": {
                       "levels": [
                        {
                         "height": 1704,
                         "width": 1704,
                         "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_b_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1024,
                         "width": 1024,
                         "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_b.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_t.jpg",
                      "bottom": {
                       "levels": [
                        {
                         "height": 1704,
                         "width": 1704,
                         "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_d_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1024,
                         "width": 1024,
                         "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_d.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "id": "overlay_CC5E5224_DC56_7B24_41D5_3769EA774666",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "height": 59,
                             "width": 59,
                             "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_0_HS_1_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": 3.46,
                          "hfov": 7.86,
                          "pitch": -5.56
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_8C207C7F_9D1A_6C08_41A8_88C9863AF5F6); this.mainPlayList.set('selectedIndex', 3)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": 3.46,
                          "pitch": -5.56,
                          "hfov": 7.86,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 119,
                             "width": 118,
                             "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_CCE05196_DC55_F9E4_41C9_7E05949C0230",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "height": 59,
                             "width": 59,
                             "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": 99.45,
                          "hfov": 7.85,
                          "pitch": -6.24
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_8C34CC72_9D1A_6C18_41DB_83BBE5E0AA9B); this.mainPlayList.set('selectedIndex', 32)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": 99.45,
                          "pitch": -6.24,
                          "hfov": 7.85,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 119,
                             "width": 118,
                             "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         }
                        ]
                       },
                       {
                        "bleaching": 0.7,
                        "bleachingDistance": 0.4,
                        "id": "overlay_D364F048_DF66_03D5_41E1_5EA3BC9637F0",
                        "class": "LensFlarePanoramaOverlay",
                        "yaw": -0.57,
                        "pitch": 16.86
                       },
                       {
                        "bleaching": 0.7,
                        "bleachingDistance": 0.4,
                        "id": "overlay_D37D2F7A_DF66_1DB5_41C0_1FB80896FEB3",
                        "class": "LensFlarePanoramaOverlay",
                        "yaw": 164.38,
                        "pitch": 16.1
                       }
                      ],
                      "left": {
                       "levels": [
                        {
                         "height": 1704,
                         "width": 1704,
                         "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_l_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1024,
                         "width": 1024,
                         "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_l.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      }
                     }
                    ]
                   }
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -139.07,
                   "yaw": 96.47,
                   "distance": 1,
                   "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F"
                  }
                 ],
                 "hfovMin": 80,
                 "id": "panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
                 "vfov": 180,
                 "class": "Panorama",
                 "hfovMax": 120,
                 "pitch": 0,
                 "mapLocations": [
                  {
                   "x": 215.7,
                   "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                   "class": "PanoramaMapLocation",
                   "angle": 87.93,
                   "y": 119.65
                  }
                 ],
                 "thumbnailUrl": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_t.jpg",
                 "hfov": 360,
                 "label": "Main Floor",
                 "partial": false,
                 "frames": [
                  {
                   "front": {
                    "levels": [
                     {
                      "height": 1704,
                      "width": 1704,
                      "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_f_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1024,
                      "width": 1024,
                      "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_f.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "top": {
                    "levels": [
                     {
                      "height": 1704,
                      "width": 1704,
                      "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_u_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1024,
                      "width": 1024,
                      "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_u.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "right": {
                    "levels": [
                     {
                      "height": 1704,
                      "width": 1704,
                      "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_r_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1024,
                      "width": 1024,
                      "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_r.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "levels": [
                     {
                      "height": 1704,
                      "width": 1704,
                      "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_b_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1024,
                      "width": 1024,
                      "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_b.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_t.jpg",
                   "bottom": {
                    "levels": [
                     {
                      "height": 1704,
                      "width": 1704,
                      "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_d_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1024,
                      "width": 1024,
                      "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_d.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "id": "overlay_D3E0C739_DC56_B92C_41E9_6C44CB4D0781",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "height": 60,
                          "width": 60,
                          "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 96.47,
                       "hfov": 7.88,
                       "pitch": -11.41
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_8C3ACC65_9D1A_6C3B_41E1_6672A7EF3FFF); this.mainPlayList.set('selectedIndex', 37)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": 96.47,
                       "pitch": -11.41,
                       "hfov": 7.88,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 120,
                          "width": 120,
                          "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_D3BB78D6_DC56_5764_41BF_4CD3DB34B52B",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "height": 60,
                          "width": 60,
                          "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -176.41,
                       "hfov": 7.97,
                       "pitch": -7.14
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_8C00CC59_9D1A_6C08_41C3_D59AB2C6F87C); this.mainPlayList.set('selectedIndex', 31)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": -176.41,
                       "pitch": -7.14,
                       "hfov": 7.97,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 120,
                          "width": 120,
                          "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       }
                      }
                     ]
                    },
                    {
                     "bleaching": 0.7,
                     "bleachingDistance": 0.4,
                     "id": "overlay_D4BE7E36_DF66_3FBD_41E5_D711B6782282",
                     "class": "LensFlarePanoramaOverlay",
                     "yaw": -0.95,
                     "pitch": 19.14
                    },
                    {
                     "bleaching": 0.7,
                     "bleachingDistance": 0.4,
                     "id": "overlay_D4BB02EB_DF66_04AB_41E7_314E72AF48E7",
                     "class": "LensFlarePanoramaOverlay",
                     "yaw": 164.38,
                     "pitch": 17.62
                    }
                   ],
                   "left": {
                    "levels": [
                     {
                      "height": 1704,
                      "width": 1704,
                      "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_l_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1024,
                      "width": 1024,
                      "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_l.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ]
                }
               }
              ],
              "hfovMin": 80,
              "id": "panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
              "vfov": 180,
              "class": "Panorama",
              "hfovMax": 120,
              "pitch": 0,
              "mapLocations": [
               {
                "x": 222.6,
                "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                "class": "PanoramaMapLocation",
                "angle": 138.19,
                "y": 230.15
               }
              ],
              "thumbnailUrl": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_t.jpg",
              "hfov": 360,
              "label": "asensores",
              "partial": false,
              "frames": [
               {
                "sphere": {
                 "levels": [
                  {
                   "height": 2688,
                   "width": 5376,
                   "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_t.jpg",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "id": "overlay_28CE795F_2513_8FCA_4188_1998B7E06EBC",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 59,
                       "width": 58,
                       "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 32.92,
                    "hfov": 7.87,
                    "pitch": -4.96
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_8DD5801D_9D1A_140B_41D8_11F023C3012D); this.mainPlayList.set('selectedIndex', 1)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": 32.92,
                    "pitch": -4.96,
                    "hfov": 7.87,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 118,
                       "width": 117,
                       "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_2B261325_2512_837E_41B0_050021E9F08E",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 58,
                       "width": 59,
                       "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -166.68,
                    "hfov": 7.88,
                    "pitch": -8.74
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3, this.camera_8DC02028_9D1A_1409_41E0_9E83A1A15B4B); this.mainPlayList.set('selectedIndex', 2)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -166.68,
                    "pitch": -8.74,
                    "hfov": 7.88,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 117,
                       "width": 118,
                       "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_2AFE1E17_2516_855A_41C1_80A7DE3B763C",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 59,
                       "width": 58,
                       "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_2_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -76.25,
                    "hfov": 7.82,
                    "pitch": -8
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_8DFC8034_9D1A_1418_41C9_128B1A87B461); this.mainPlayList.set('selectedIndex', 6)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -76.25,
                    "pitch": -8,
                    "hfov": 7.82,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 118,
                       "width": 117,
                       "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_2_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_2AA13E2D_2512_854F_417F_F5763DB0AB5B",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 59,
                       "width": 58,
                       "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_3_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -16.11,
                    "hfov": 7.72,
                    "pitch": -12.22
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_8DD96012_9D1A_1418_41E0_B7AB077E2361); this.mainPlayList.set('selectedIndex', 7)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -16.11,
                    "pitch": -12.22,
                    "hfov": 7.72,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 118,
                       "width": 117,
                       "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_3_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_354312DB_254C_E20F_41B9_80BC77A75D32",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 59,
                       "width": 59,
                       "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_4_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -139.07,
                    "hfov": 7.82,
                    "pitch": -8.17
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_8DE9D03F_9D1A_1407_41E1_EDF3FF8A5EEE); this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -139.07,
                    "pitch": -8.17,
                    "hfov": 7.82,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 118,
                       "width": 118,
                       "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_4_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "bleaching": 0.7,
                  "bleachingDistance": 0.4,
                  "id": "overlay_39E9E5BE_37C2_E4C0_41C8_ED2101A9B7E1",
                  "class": "LensFlarePanoramaOverlay",
                  "yaw": -108.98,
                  "pitch": 44.67
                 },
                 {
                  "bleaching": 0.7,
                  "bleachingDistance": 0.4,
                  "id": "overlay_39F9CEF7_37C2_E441_4193_83EA81D1DE6F",
                  "class": "LensFlarePanoramaOverlay",
                  "yaw": 14.17,
                  "pitch": 28.8
                 }
                ],
                "class": "SphericPanoramaFrame"
               }
              ]
             }
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 176.9,
             "yaw": -176.55,
             "distance": 1,
             "panorama": {
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -176.55,
                "yaw": 176.9,
                "distance": 1,
                "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6"
               }
              ],
              "hfovMin": 80,
              "id": "panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
              "vfov": 180,
              "class": "Panorama",
              "hfovMax": 120,
              "pitch": 0,
              "mapLocations": [
               {
                "x": 242.65,
                "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                "class": "PanoramaMapLocation",
                "angle": -267.85,
                "y": 430.8
               }
              ],
              "thumbnailUrl": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_t.jpg",
              "hfov": 360,
              "label": "3_1",
              "partial": false,
              "frames": [
               {
                "front": {
                 "levels": [
                  {
                   "height": 1704,
                   "width": 1704,
                   "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_f_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1024,
                   "width": 1024,
                   "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_f.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "top": {
                 "levels": [
                  {
                   "height": 1704,
                   "width": 1704,
                   "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_u_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1024,
                   "width": 1024,
                   "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_u.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "right": {
                 "levels": [
                  {
                   "height": 1704,
                   "width": 1704,
                   "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_r_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1024,
                   "width": 1024,
                   "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_r.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "levels": [
                  {
                   "height": 1704,
                   "width": 1704,
                   "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_b_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1024,
                   "width": 1024,
                   "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_b.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_t.jpg",
                "bottom": {
                 "levels": [
                  {
                   "height": 1704,
                   "width": 1704,
                   "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_d_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1024,
                   "width": 1024,
                   "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_d.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "overlays": [
                 {
                  "useHandCursor": true,
                  "id": "overlay_D329AC1C_DC55_AEE5_41D2_6176DAFC3236",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 60,
                       "width": 60,
                       "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 176.9,
                    "hfov": 7.73,
                    "pitch": -15.9
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_9383C0C1_9D1A_1478_4184_A1DD6AA9832F); this.mainPlayList.set('selectedIndex', 1)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": 176.9,
                    "pitch": -15.9,
                    "hfov": 7.73,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 120,
                       "width": 120,
                       "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 }
                ],
                "left": {
                 "levels": [
                  {
                   "height": 1704,
                   "width": 1704,
                   "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_l_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1024,
                   "width": 1024,
                   "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_l.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                }
               }
              ]
             }
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 53.21,
             "yaw": -91.69,
             "distance": 1,
             "panorama": "this.panorama_5F372E49_160C_6584_4186_1E0077946A37"
            }
           ],
           "hfovMin": 80,
           "id": "panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
           "vfov": 180,
           "class": "Panorama",
           "hfovMax": 120,
           "pitch": 0,
           "mapLocations": [
            {
             "x": 217.7,
             "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
             "class": "PanoramaMapLocation",
             "angle": -83.39,
             "y": 434.55
            }
           ],
           "thumbnailUrl": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_t.jpg",
           "hfov": 360,
           "label": "Lobby",
           "partial": false,
           "frames": [
            {
             "front": {
              "levels": [
               {
                "height": 1704,
                "width": 1704,
                "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_f_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1024,
                "width": 1024,
                "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_f.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "height": 1704,
                "width": 1704,
                "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_u_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1024,
                "width": 1024,
                "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_u.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "right": {
              "levels": [
               {
                "height": 1704,
                "width": 1704,
                "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_r_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1024,
                "width": 1024,
                "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_r.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "height": 1704,
                "width": 1704,
                "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_b_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1024,
                "width": 1024,
                "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_b.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_t.jpg",
             "bottom": {
              "levels": [
               {
                "height": 1704,
                "width": 1704,
                "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_d_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1024,
                "width": 1024,
                "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_d.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "overlays": [
              {
               "useHandCursor": true,
               "id": "overlay_D2A966DF_DC6A_7B64_41DD_D822CC7BCA86",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 59,
                    "width": 59,
                    "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 87.33,
                 "hfov": 8,
                 "pitch": -5.46
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_8D5AEF82_9D1A_6CF8_41DA_23ECEEEB0F29); this.mainPlayList.set('selectedIndex', 37)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 87.33,
                 "pitch": -5.46,
                 "hfov": 8,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 119,
                    "width": 119,
                    "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 }
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_D319ECF0_DC6A_6F3C_41EA_8C8FADFED6AD",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 59,
                    "width": 58,
                    "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -176.55,
                 "hfov": 7.7,
                 "pitch": -13.09
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104, this.camera_8D569F98_9D1A_6C08_41E1_03D39049933C); this.mainPlayList.set('selectedIndex', 8)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -176.55,
                 "pitch": -13.09,
                 "hfov": 7.7,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 118,
                    "width": 117,
                    "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 }
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_D614592A_DCA8_1C07_41D4_0BED3A3F1AB1",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 59,
                    "width": 59,
                    "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -91.69,
                 "hfov": 7.84,
                 "pitch": -12.75
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_5F372E49_160C_6584_4186_1E0077946A37, this.camera_8D416FAA_9D1A_6C08_41C7_0CBA52E27086); this.mainPlayList.set('selectedIndex', 30)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -91.69,
                 "pitch": -12.75,
                 "hfov": 7.84,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 119,
                    "width": 119,
                    "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 }
                }
               ]
              },
              {
               "bleaching": 0.7,
               "bleachingDistance": 0.4,
               "id": "overlay_D7DEC935_DCEA_FB36_41D7_D4FB63048649",
               "class": "LensFlarePanoramaOverlay",
               "yaw": -92.76,
               "pitch": -1.05
              }
             ],
             "left": {
              "levels": [
               {
                "height": 1704,
                "width": 1704,
                "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_l_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1024,
                "width": 1024,
                "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_l.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             }
            }
           ]
          }
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 163.35,
          "yaw": 103.06,
          "distance": 1,
          "panorama": {
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 103.06,
             "yaw": 163.35,
             "distance": 1,
             "panorama": "this.panorama_5F372E49_160C_6584_4186_1E0077946A37"
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 8.58,
             "yaw": -115.43,
             "distance": 1,
             "panorama": {
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -82.08,
                "yaw": 158.83,
                "distance": 1,
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 158.83,
                   "yaw": -82.08,
                   "distance": 1,
                   "panorama": "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337"
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -175.82,
                   "yaw": -52.44,
                   "distance": 1,
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": 85.67,
                      "yaw": -82.7,
                      "distance": 1,
                      "panorama": "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337"
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -52.44,
                      "yaw": -175.82,
                      "distance": 1,
                      "panorama": "this.panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1"
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -141.39,
                      "yaw": 10.35,
                      "distance": 1,
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": 10.35,
                         "yaw": -141.39,
                         "distance": 1,
                         "panorama": "this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA"
                        },
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": 32.03,
                         "yaw": -102.17,
                         "distance": 1,
                         "panorama": "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337"
                        },
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": 138.73,
                         "yaw": -86,
                         "distance": 1,
                         "panorama": "this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7"
                        },
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": -145.66,
                         "yaw": -55.33,
                         "distance": 1,
                         "panorama": {
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": -29.95,
                            "yaw": -66.61,
                            "distance": 1,
                            "panorama": "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337"
                           },
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": 149.67,
                            "yaw": -53.51,
                            "distance": 1,
                            "panorama": {
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "backwardYaw": -43.54,
                               "yaw": -81.45,
                               "distance": 1,
                               "panorama": "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337"
                              },
                              {
                               "class": "AdjacentPanorama",
                               "backwardYaw": -132.65,
                               "yaw": -34.91,
                               "distance": 1,
                               "panorama": {
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": -121.05,
                                  "yaw": -84.17,
                                  "distance": 1,
                                  "panorama": "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337"
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": -34.91,
                                  "yaw": -132.65,
                                  "distance": 1,
                                  "panorama": "this.panorama_2BBC8600_279C_C41B_41AA_7212826C3A68"
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": -110.73,
                                  "yaw": -17.47,
                                  "distance": 1,
                                  "panorama": "this.panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1"
                                 }
                                ],
                                "frames": [
                                 {
                                  "sphere": {
                                   "levels": [
                                    {
                                     "height": 2048,
                                     "width": 4096,
                                     "url": "media/panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E_hq.jpeg",
                                     "class": "ImageResourceLevel"
                                    },
                                    {
                                     "height": 1608,
                                     "width": 3217,
                                     "url": "media/panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E.jpeg",
                                     "class": "ImageResourceLevel"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E_t.jpg",
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_2CCFDB45_279C_CC25_41B5_E014B5E1933D",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 36,
                                         "width": 35,
                                         "url": "media/panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E_0_HS_0_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "yaw": -17.47,
                                      "hfov": 6.27,
                                      "pitch": -1.02
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1, this.camera_93EB816B_9D1A_140F_41B6_542562453044); this.mainPlayList.set('selectedIndex', 14)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "items": [
                                     {
                                      "yaw": -17.47,
                                      "pitch": -1.02,
                                      "hfov": 6.27,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 72,
                                         "width": 71,
                                         "url": "media/panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E_0_HS_0_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_2CC80B45_279C_CC25_41A0_92921E9D8840",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 35,
                                         "width": 36,
                                         "url": "media/panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E_0_HS_1_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "yaw": -84.17,
                                      "hfov": 5.91,
                                      "pitch": 20.97
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337, this.camera_93FBC154_9D1A_1419_418C_4B7CB412F87A); this.mainPlayList.set('selectedIndex', 16)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "items": [
                                     {
                                      "yaw": -84.17,
                                      "pitch": 20.97,
                                      "hfov": 5.91,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 71,
                                         "width": 72,
                                         "url": "media/panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E_0_HS_1_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_2CC82B45_279C_CC25_41B5_00FF5FF50D0E",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 36,
                                         "width": 35,
                                         "url": "media/panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E_0_HS_2_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "yaw": -132.65,
                                      "hfov": 6.27,
                                      "pitch": -2.36
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_2BBC8600_279C_C41B_41AA_7212826C3A68, this.camera_93F24160_9D1A_1438_41B3_B73121C8C599); this.mainPlayList.set('selectedIndex', 10)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "items": [
                                     {
                                      "yaw": -132.65,
                                      "pitch": -2.36,
                                      "hfov": 6.27,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 72,
                                         "width": 71,
                                         "url": "media/panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E_0_HS_2_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     }
                                    ]
                                   },
                                   {
                                    "bleaching": 0.7,
                                    "bleachingDistance": 0.4,
                                    "id": "overlay_39CFC332_37C2_9DC0_41C7_D1100F9CF9C7",
                                    "class": "LensFlarePanoramaOverlay",
                                    "yaw": -107.09,
                                    "pitch": 63.18
                                   }
                                  ],
                                  "class": "SphericPanoramaFrame"
                                 }
                                ],
                                "hfovMin": 80,
                                "id": "panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E",
                                "vfov": 180,
                                "class": "Panorama",
                                "hfovMax": 120,
                                "pitch": 0,
                                "mapLocations": [
                                 {
                                  "x": 216.1,
                                  "map": {
                                   "fieldOfViewOverlayRadiusScale": 0.19,
                                   "width": 300,
                                   "id": "map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
                                   "class": "Map",
                                   "minimumZoomFactor": 0.5,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 209,
                                      "width": 300,
                                      "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17.png",
                                      "class": "ImageResourceLevel"
                                     },
                                     {
                                      "height": 104,
                                      "grayscale": true,
                                      "width": 150,
                                      "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_lq.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "fieldOfViewOverlayOutsideOpacity": 0,
                                   "thumbnailUrl": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_t.png",
                                   "label": "Centro Corporativo",
                                   "overlays": [
                                    {
                                     "id": "overlay_FCFECF03_DD1A_A3DC_41C3_A9E15DF295E9",
                                     "rollOverDisplay": true,
                                     "map": {
                                      "offsetY": 0,
                                      "x": 16.55,
                                      "width": 20,
                                      "y": 149.55,
                                      "class": "HotspotMapOverlayMap",
                                      "height": 20,
                                      "offsetX": 0,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 9,
                                         "width": 9,
                                         "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 9)",
                                       "mapColor": "#FF0000"
                                      }
                                     ],
                                     "image": {
                                      "x": 16.55,
                                      "y": 149.55,
                                      "width": 20,
                                      "class": "HotspotMapOverlayImage",
                                      "height": 20,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 19,
                                         "width": 19,
                                         "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     },
                                     "useHandCursor": true
                                    },
                                    {
                                     "id": "overlay_FFCF2D2D_DD19_A627_41B8_CFCAE1C65CD2",
                                     "rollOverDisplay": true,
                                     "map": {
                                      "offsetY": 0,
                                      "x": 83.5,
                                      "width": 20,
                                      "y": 151.55,
                                      "class": "HotspotMapOverlayMap",
                                      "height": 20,
                                      "offsetX": 0,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 9,
                                         "width": 9,
                                         "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_1_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 10)",
                                       "mapColor": "#FF0000"
                                      }
                                     ],
                                     "image": {
                                      "x": 83.5,
                                      "y": 151.55,
                                      "width": 20,
                                      "class": "HotspotMapOverlayImage",
                                      "height": 20,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 19,
                                         "width": 19,
                                         "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_1.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     },
                                     "useHandCursor": true
                                    },
                                    {
                                     "id": "overlay_FEA879B1_DD16_6E3C_41E7_2FF39A318D51",
                                     "rollOverDisplay": true,
                                     "map": {
                                      "offsetY": 0,
                                      "x": 24.05,
                                      "width": 20,
                                      "y": 6.6,
                                      "class": "HotspotMapOverlayMap",
                                      "height": 20,
                                      "offsetX": 0,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 9,
                                         "width": 9,
                                         "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_2_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 11)",
                                       "mapColor": "#FF0000"
                                      }
                                     ],
                                     "image": {
                                      "x": 24.05,
                                      "y": 6.6,
                                      "width": 20,
                                      "class": "HotspotMapOverlayImage",
                                      "height": 20,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 19,
                                         "width": 19,
                                         "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_2.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     },
                                     "useHandCursor": true
                                    },
                                    {
                                     "id": "overlay_FF9139DD_DD16_AE64_41E7_9B2CF203BB6B",
                                     "rollOverDisplay": true,
                                     "map": {
                                      "offsetY": 0,
                                      "x": 138,
                                      "width": 20,
                                      "y": 5.6,
                                      "class": "HotspotMapOverlayMap",
                                      "height": 20,
                                      "offsetX": 0,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 9,
                                         "width": 9,
                                         "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_3_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 12)",
                                       "mapColor": "#FF0000"
                                      }
                                     ],
                                     "image": {
                                      "x": 138,
                                      "y": 5.6,
                                      "width": 20,
                                      "class": "HotspotMapOverlayImage",
                                      "height": 20,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 19,
                                         "width": 19,
                                         "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_3.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     },
                                     "useHandCursor": true
                                    },
                                    {
                                     "id": "overlay_FEFCC206_DD17_9DE5_41C8_3ECC72F63227",
                                     "rollOverDisplay": true,
                                     "map": {
                                      "offsetY": 0,
                                      "x": 141.5,
                                      "width": 20,
                                      "y": 96.5,
                                      "class": "HotspotMapOverlayMap",
                                      "height": 20,
                                      "offsetX": 0,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 9,
                                         "width": 9,
                                         "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_4_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 16)",
                                       "mapColor": "#FF0000"
                                      }
                                     ],
                                     "image": {
                                      "x": 141.5,
                                      "y": 96.5,
                                      "width": 20,
                                      "class": "HotspotMapOverlayImage",
                                      "height": 20,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 19,
                                         "width": 19,
                                         "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_4.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     },
                                     "useHandCursor": true
                                    },
                                    {
                                     "id": "overlay_FF91DE69_DD17_A22C_41DE_D1342F576EA9",
                                     "rollOverDisplay": true,
                                     "map": {
                                      "offsetY": 0,
                                      "x": 271,
                                      "width": 20,
                                      "y": 12.6,
                                      "class": "HotspotMapOverlayMap",
                                      "height": 20,
                                      "offsetX": 0,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 9,
                                         "width": 9,
                                         "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_5_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 14)",
                                       "mapColor": "#FF0000"
                                      }
                                     ],
                                     "image": {
                                      "x": 271,
                                      "y": 12.6,
                                      "width": 20,
                                      "class": "HotspotMapOverlayImage",
                                      "height": 20,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 19,
                                         "width": 19,
                                         "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_5.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     },
                                     "useHandCursor": true
                                    },
                                    {
                                     "id": "overlay_FFB50497_DD16_A6E4_41E4_5BEA266BE86F",
                                     "rollOverDisplay": true,
                                     "map": {
                                      "offsetY": 0,
                                      "x": 206.1,
                                      "width": 20,
                                      "y": 162,
                                      "class": "HotspotMapOverlayMap",
                                      "height": 20,
                                      "offsetX": 0,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 9,
                                         "width": 9,
                                         "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_6_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 15)",
                                       "mapColor": "#FF0000"
                                      }
                                     ],
                                     "image": {
                                      "x": 206.1,
                                      "y": 162,
                                      "width": 20,
                                      "class": "HotspotMapOverlayImage",
                                      "height": 20,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 19,
                                         "width": 19,
                                         "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_6.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     },
                                     "useHandCursor": true
                                    },
                                    {
                                     "id": "overlay_FE5AF794_DD09_A2E4_41D0_61777F7E15D3",
                                     "rollOverDisplay": true,
                                     "map": {
                                      "offsetY": 0,
                                      "x": 141.5,
                                      "width": 20,
                                      "y": 81.55,
                                      "class": "HotspotMapOverlayMap",
                                      "height": 20,
                                      "offsetX": 0,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 9,
                                         "width": 9,
                                         "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_7_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 13)",
                                       "mapColor": "#FF0000"
                                      }
                                     ],
                                     "image": {
                                      "x": 141.5,
                                      "y": 81.55,
                                      "width": 20,
                                      "class": "HotspotMapOverlayImage",
                                      "height": 20,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 19,
                                         "width": 19,
                                         "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_7.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     },
                                     "useHandCursor": true
                                    },
                                    {
                                     "id": "overlay_01B54DAD_1A41_CF78_41A6_909B29F94B5F",
                                     "rollOverDisplay": true,
                                     "map": {
                                      "offsetY": 0,
                                      "x": 37.65,
                                      "width": 20.27,
                                      "y": 72.45,
                                      "class": "HotspotMapOverlayMap",
                                      "height": 20.27,
                                      "offsetX": 0,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 10,
                                         "width": 10,
                                         "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_8_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "areas": [
                                      {
                                       "class": "HotspotMapOverlayArea",
                                       "click": "this.mainPlayList.set('selectedIndex', 17)",
                                       "mapColor": "#FF0000"
                                      }
                                     ],
                                     "image": {
                                      "x": 37.65,
                                      "y": 72.45,
                                      "width": 20.27,
                                      "class": "HotspotMapOverlayImage",
                                      "height": 20.27,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 20,
                                         "width": 20,
                                         "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_8.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      }
                                     },
                                     "useHandCursor": true
                                    }
                                   ],
                                   "fieldOfViewOverlayOutsideColor": "#000000",
                                   "initialZoomFactor": 1,
                                   "maximumZoomFactor": 1.2,
                                   "fieldOfViewOverlayInsideColor": "#FFFFFF",
                                   "fieldOfViewOverlayInsideOpacity": 0.4,
                                   "scaleMode": "fit_inside",
                                   "height": 209
                                  },
                                  "class": "PanoramaMapLocation",
                                  "angle": 54.63,
                                  "y": 172
                                 }
                                ],
                                "thumbnailUrl": "media/panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E_t.jpg",
                                "hfov": 360,
                                "label": "CC_Project_7",
                                "partial": false
                               }
                              },
                              {
                               "class": "AdjacentPanorama",
                               "backwardYaw": -53.51,
                               "yaw": 149.67,
                               "distance": 1,
                               "panorama": "this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E"
                              }
                             ],
                             "frames": [
                              {
                               "sphere": {
                                "levels": [
                                 {
                                  "height": 2048,
                                  "width": 4096,
                                  "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_t.jpg",
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_2BBCE600_279C_C41B_41A5_3384CAD7C738",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 36,
                                      "width": 35,
                                      "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_0_HS_0_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "yaw": -144.52,
                                   "hfov": 6.27,
                                   "pitch": 1.33
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.mainPlayList.set('selectedIndex', 11)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "yaw": -144.52,
                                   "pitch": 1.33,
                                   "hfov": 6.27,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 72,
                                      "width": 71,
                                      "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_0_HS_0_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   }
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_2BBCD600_279C_C41B_41B7_32915E7BCA74",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 36,
                                      "width": 35,
                                      "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_0_HS_1_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "yaw": 149.67,
                                   "hfov": 6.26,
                                   "pitch": -3.74
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E, this.camera_92FEEED3_9D1A_6C1F_41B4_5170A5475446); this.mainPlayList.set('selectedIndex', 9)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "yaw": 149.67,
                                   "pitch": -3.74,
                                   "hfov": 6.26,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 72,
                                      "width": 71,
                                      "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_0_HS_1_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   }
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_2BBCC600_279C_C41B_41AE_900AEF9C3B88",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 36,
                                      "width": 35,
                                      "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_0_HS_2_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "yaw": -147.58,
                                   "hfov": 6.18,
                                   "pitch": -10.22
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.mainPlayList.set('selectedIndex', 17)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "yaw": -147.58,
                                   "pitch": -10.22,
                                   "hfov": 6.18,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 72,
                                      "width": 71,
                                      "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_0_HS_2_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   }
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_2BBD3600_279C_C41B_41C0_C312927E4A82",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 35,
                                      "width": 36,
                                      "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_0_HS_3_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "yaw": -81.45,
                                   "hfov": 6.13,
                                   "pitch": 14.28
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337, this.camera_92D7AEAF_9D1A_6C07_41BF_E39961587B68); this.mainPlayList.set('selectedIndex', 16)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "yaw": -81.45,
                                   "pitch": 14.28,
                                   "hfov": 6.13,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 71,
                                      "width": 72,
                                      "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_0_HS_3_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   }
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_2BBD1600_279C_C41B_41BA_AED3959B497C",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 29,
                                      "width": 29,
                                      "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_0_HS_5_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "yaw": -34.91,
                                   "hfov": 5.18,
                                   "pitch": -2.56
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E, this.camera_92C21EBB_9D1A_6C08_41BA_CAE1F717A680); this.mainPlayList.set('selectedIndex', 15)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "yaw": -34.91,
                                   "pitch": -2.56,
                                   "hfov": 5.18,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 59,
                                      "width": 58,
                                      "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_0_HS_5_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   }
                                  }
                                 ]
                                },
                                {
                                 "bleaching": 0.7,
                                 "bleachingDistance": 0.4,
                                 "id": "overlay_39D5CF6C_37C2_E447_41A8_3301DA4EA642",
                                 "class": "LensFlarePanoramaOverlay",
                                 "yaw": 169.42,
                                 "pitch": 63.93
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_32585F73_3C96_8674_415C_ACF54E6DE46E",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 75,
                                      "width": 75,
                                      "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_0_HS_6_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "yaw": 145.47,
                                   "hfov": 12.5,
                                   "pitch": -18.56
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.mainPlayList.set('selectedIndex', 0)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "yaw": 145.47,
                                   "pitch": -18.56,
                                   "hfov": 12.5,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 150,
                                      "width": 150,
                                      "url": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_0_HS_6_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   }
                                  }
                                 ]
                                }
                               ],
                               "class": "SphericPanoramaFrame"
                              }
                             ],
                             "hfovMin": 80,
                             "id": "panorama_2BBC8600_279C_C41B_41AA_7212826C3A68",
                             "vfov": 180,
                             "class": "Panorama",
                             "hfovMax": 120,
                             "pitch": 0,
                             "mapLocations": [
                              {
                               "x": 93.5,
                               "map": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
                               "class": "PanoramaMapLocation",
                               "angle": 118.81,
                               "y": 161.55
                              }
                             ],
                             "thumbnailUrl": "media/panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_t.jpg",
                             "hfov": 360,
                             "label": "CC_Project_2",
                             "partial": false
                            }
                           },
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": -55.33,
                            "yaw": -145.66,
                            "distance": 1,
                            "panorama": "this.panorama_2C7FFD45_279C_C425_4191_328659A964C7"
                           },
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": -20.63,
                            "yaw": -129.41,
                            "distance": 1,
                            "panorama": "this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7"
                           }
                          ],
                          "frames": [
                           {
                            "sphere": {
                             "levels": [
                              {
                               "height": 2048,
                               "width": 4096,
                               "url": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "url": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "thumbnailUrl": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_t.jpg",
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "id": "overlay_2BCB7F16_279C_C426_41B9_765CC69671D6",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 29,
                                   "width": 29,
                                   "url": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "yaw": -145.66,
                                "hfov": 5.27,
                                "pitch": 2.72
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_2C7FFD45_279C_C425_4191_328659A964C7, this.camera_8D384F3F_9D1A_6C08_41D5_0873446E9EC3); this.mainPlayList.set('selectedIndex', 11)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "yaw": -145.66,
                                "pitch": 2.72,
                                "hfov": 5.27,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 59,
                                   "width": 59,
                                   "url": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                }
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_2BCB6F16_279C_C426_41BF_B6222A173D20",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 29,
                                   "width": 29,
                                   "url": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_0_HS_1_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "yaw": -53.51,
                                "hfov": 5.27,
                                "pitch": -2.54
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_2BBC8600_279C_C41B_41AA_7212826C3A68, this.camera_8D0DCF28_9D1A_6C08_41D1_D0313AA15044); this.mainPlayList.set('selectedIndex', 10)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "yaw": -53.51,
                                "pitch": -2.54,
                                "hfov": 5.27,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 59,
                                   "width": 59,
                                   "url": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_0_HS_1_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                }
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_2BCB4F16_279C_C426_4133_E14B33B03FC4",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 43,
                                   "width": 43,
                                   "url": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_0_HS_2_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "yaw": -66.61,
                                "hfov": 7.28,
                                "pitch": 19.18
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337, this.camera_8D111F11_9D1A_6C18_41D0_1CE52D7B9C31); this.mainPlayList.set('selectedIndex', 16)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "yaw": -66.61,
                                "pitch": 19.18,
                                "hfov": 7.28,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 86,
                                   "width": 87,
                                   "url": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_0_HS_2_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                }
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_2BCB8F16_279C_C427_41AE_7785314B102C",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 29,
                                   "width": 29,
                                   "url": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_0_HS_4_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "yaw": -129.41,
                                "hfov": 5.18,
                                "pitch": -2.31
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7, this.camera_8D343F55_9D1A_6C18_41B9_16D92571DFEC); this.mainPlayList.set('selectedIndex', 17)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "yaw": -129.41,
                                "pitch": -2.31,
                                "hfov": 5.18,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 59,
                                   "width": 58,
                                   "url": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_0_HS_4_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                }
                               }
                              ]
                             },
                             {
                              "bleaching": 0.7,
                              "bleachingDistance": 0.4,
                              "id": "overlay_39C85BAF_37C2_ECC0_41C5_2D737B82A895",
                              "class": "LensFlarePanoramaOverlay",
                              "yaw": 153.93,
                              "pitch": 62.05
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_32611913_3C9A_8BBB_41AA_B761E002E74F",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 75,
                                   "width": 75,
                                   "url": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_0_HS_5_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "yaw": 49.94,
                                "hfov": 13.01,
                                "pitch": -9.27
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.mainPlayList.set('selectedIndex', 0)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "yaw": 49.94,
                                "pitch": -9.27,
                                "hfov": 13.01,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 150,
                                   "width": 150,
                                   "url": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_0_HS_5_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                }
                               }
                              ]
                             }
                            ],
                            "class": "SphericPanoramaFrame"
                           }
                          ],
                          "hfovMin": 80,
                          "id": "panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E",
                          "vfov": 180,
                          "class": "Panorama",
                          "hfovMax": 120,
                          "pitch": 0,
                          "mapLocations": [
                           {
                            "x": 26.55,
                            "map": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
                            "class": "PanoramaMapLocation",
                            "angle": 136.79,
                            "y": 159.55
                           }
                          ],
                          "thumbnailUrl": "media/panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_t.jpg",
                          "hfov": 360,
                          "label": "CC_Project_1",
                          "partial": false
                         }
                        }
                       ],
                       "frames": [
                        {
                         "sphere": {
                          "levels": [
                           {
                            "height": 2048,
                            "width": 4096,
                            "url": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1608,
                            "width": 3217,
                            "url": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_t.jpg",
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "id": "overlay_2C7FCD46_279C_C426_41B2_B92E5530F0B6",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 29,
                                "width": 29,
                                "url": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -86,
                             "hfov": 4.97,
                             "pitch": -16.61
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7, this.camera_93B09D1E_9D1A_6C08_41A3_C52DF4005900); this.mainPlayList.set('selectedIndex', 17)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": -86,
                             "pitch": -16.61,
                             "hfov": 4.97,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 59,
                                "width": 58,
                                "url": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_2C7FDD46_279C_C426_4185_A258B7CEF2E8",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 29,
                                "width": 29,
                                "url": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_0_HS_1_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -55.33,
                             "hfov": 5.17,
                             "pitch": -5.03
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E, this.camera_93B55D2A_9D1A_6C09_41CD_2F6E517F2C11); this.mainPlayList.set('selectedIndex', 9)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": -55.33,
                             "pitch": -5.03,
                             "hfov": 5.17,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 59,
                                "width": 58,
                                "url": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_2C783D46_279C_C426_41B6_2DE1D84A1212",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 29,
                                "width": 29,
                                "url": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_0_HS_2_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -141.39,
                             "hfov": 5.11,
                             "pitch": -9.96
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA, this.camera_93840D05_9D1A_6DF8_41DA_670D3C1F8614); this.mainPlayList.set('selectedIndex', 12)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": -141.39,
                             "pitch": -9.96,
                             "hfov": 5.11,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 59,
                                "width": 58,
                                "url": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_0_HS_2_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_2C780D46_279C_C426_41B9_2EF3D1867274",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 29,
                                "width": 29,
                                "url": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_0_HS_3_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -102.17,
                             "hfov": 5.15,
                             "pitch": 10.03
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337, this.camera_93BA3D11_9D1A_6C1B_41CA_6CDB9587FB93); this.mainPlayList.set('selectedIndex', 16)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": -102.17,
                             "pitch": 10.03,
                             "hfov": 5.15,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 58,
                                "width": 59,
                                "url": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_0_HS_3_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          },
                          {
                           "bleaching": 0.7,
                           "bleachingDistance": 0.4,
                           "id": "overlay_39CFA664_37C2_E440_4192_D5E0E8F22285",
                           "class": "LensFlarePanoramaOverlay",
                           "yaw": 68.94,
                           "pitch": 62.05
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_32528A50_3C97_89B4_41CB_0C680996E5DD",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 49,
                                "width": 49,
                                "url": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_0_HS_5_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -46.26,
                             "hfov": 8.76,
                             "pitch": -4.51
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.mainPlayList.set('selectedIndex', 0)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": -46.26,
                             "pitch": -4.51,
                             "hfov": 8.76,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 99,
                                "width": 99,
                                "url": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_0_HS_5_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          }
                         ],
                         "class": "SphericPanoramaFrame"
                        }
                       ],
                       "hfovMin": 80,
                       "id": "panorama_2C7FFD45_279C_C425_4191_328659A964C7",
                       "vfov": 180,
                       "class": "Panorama",
                       "hfovMax": 120,
                       "pitch": 0,
                       "mapLocations": [
                        {
                         "x": 34.05,
                         "map": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
                         "class": "PanoramaMapLocation",
                         "angle": 233.38,
                         "y": 16.6
                        }
                       ],
                       "thumbnailUrl": "media/panorama_2C7FFD45_279C_C425_4191_328659A964C7_t.jpg",
                       "hfov": 360,
                       "label": "CC_Project_3",
                       "partial": false
                      }
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": 88.96,
                      "yaw": -81.03,
                      "distance": 1,
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": -81.03,
                         "yaw": 88.96,
                         "distance": 1,
                         "panorama": "this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA"
                        },
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": 24.93,
                         "yaw": -3.16,
                         "distance": 1,
                         "panorama": "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337"
                        }
                       ],
                       "frames": [
                        {
                         "sphere": {
                          "levels": [
                           {
                            "height": 2048,
                            "width": 4096,
                            "url": "media/panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1608,
                            "width": 3217,
                            "url": "media/panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686_t.jpg",
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "id": "overlay_2CFA6C5B_279C_C42D_41BA_47146D607154",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 65,
                                "width": 64,
                                "url": "media/panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": 88.96,
                             "hfov": 11.23,
                             "pitch": 7.6
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA, this.camera_93AB0D37_9D1A_6C18_41DA_2EC8F8EC9360); this.mainPlayList.set('selectedIndex', 12)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": 88.96,
                             "pitch": 7.6,
                             "hfov": 11.23,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 130,
                                "width": 128,
                                "url": "media/panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_2CFA9C5B_279C_C42D_41AF_1F1894A7C795",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "height": 64,
                                "width": 65,
                                "url": "media/panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686_0_HS_1_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -3.16,
                             "hfov": 2.25,
                             "pitch": 78.67
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337, this.camera_93A17D43_9D1A_6C7F_4173_51D6B28D1A7E); this.mainPlayList.set('selectedIndex', 16)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": -3.16,
                             "pitch": 78.67,
                             "hfov": 2.25,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 128,
                                "width": 130,
                                "url": "media/panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ]
                          },
                          {
                           "bleaching": 0.7,
                           "bleachingDistance": 0.4,
                           "id": "overlay_39C862BC_37C2_BCC7_41B5_FB4C51602CA1",
                           "class": "LensFlarePanoramaOverlay",
                           "yaw": 29.28,
                           "pitch": 62.05
                          }
                         ],
                         "class": "SphericPanoramaFrame"
                        }
                       ],
                       "hfovMin": 80,
                       "id": "panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686",
                       "vfov": 180,
                       "class": "Panorama",
                       "hfovMax": 120,
                       "pitch": 0,
                       "mapLocations": [
                        {
                         "x": 151.5,
                         "map": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
                         "class": "PanoramaMapLocation",
                         "angle": 277.61,
                         "y": 91.55
                        }
                       ],
                       "thumbnailUrl": "media/panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686_t.jpg",
                       "hfov": 360,
                       "label": "CC_Project_5",
                       "partial": false
                      }
                     }
                    ],
                    "frames": [
                     {
                      "sphere": {
                       "levels": [
                        {
                         "height": 2048,
                         "width": 4096,
                         "url": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_t.jpg",
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "id": "overlay_2C01C4C3_279C_C41E_41BA_71279D90A134",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "height": 36,
                             "width": 35,
                             "url": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -81.03,
                          "hfov": 6.09,
                          "pitch": -13.93
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686, this.camera_8C3B906D_9D1A_140B_41D5_C8B527EA20D6); this.mainPlayList.set('selectedIndex', 13)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": -81.03,
                          "pitch": -13.93,
                          "hfov": 6.09,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 72,
                             "width": 71,
                             "url": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_2C01D4C3_279C_C41D_418F_88428E219946",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "height": 35,
                             "width": 36,
                             "url": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_0_HS_1_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -82.7,
                          "hfov": 6.03,
                          "pitch": 17.62
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337, this.camera_8DE5404A_9D1A_1409_41D3_A885123267ED); this.mainPlayList.set('selectedIndex', 16)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": -82.7,
                          "pitch": 17.62,
                          "hfov": 6.03,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 71,
                             "width": 72,
                             "url": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_2C0224C3_279C_C41D_41B1_7F652BAD75D7",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "height": 36,
                             "width": 35,
                             "url": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_0_HS_2_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": 10.35,
                          "hfov": 6.27,
                          "pitch": 1.49
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_2C7FFD45_279C_C425_4191_328659A964C7, this.camera_8C0E0062_9D1A_1438_41DA_C4D71E401B1C); this.mainPlayList.set('selectedIndex', 11)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": 10.35,
                          "pitch": 1.49,
                          "hfov": 6.27,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 72,
                             "width": 71,
                             "url": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_0_HS_2_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_2C0234C3_279C_C41D_41B7_F9A8028F8DC4",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "height": 36,
                             "width": 35,
                             "url": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_0_HS_3_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -175.82,
                          "hfov": 6.27,
                          "pitch": 3.16
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1, this.camera_8C12F056_9D1A_1418_41D7_447BF5BF28EB); this.mainPlayList.set('selectedIndex', 14)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": -175.82,
                          "pitch": 3.16,
                          "hfov": 6.27,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 72,
                             "width": 71,
                             "url": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_0_HS_3_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         }
                        ]
                       },
                       {
                        "bleaching": 0.7,
                        "bleachingDistance": 0.4,
                        "id": "overlay_39D43F68_37C2_A440_41C4_E6449E3E2B65",
                        "class": "LensFlarePanoramaOverlay",
                        "yaw": 37.59,
                        "pitch": 61.29
                       }
                      ],
                      "class": "SphericPanoramaFrame"
                     }
                    ],
                    "hfovMin": 80,
                    "id": "panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA",
                    "vfov": 180,
                    "class": "Panorama",
                    "hfovMax": 120,
                    "pitch": 0,
                    "mapLocations": [
                     {
                      "x": 148,
                      "map": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
                      "class": "PanoramaMapLocation",
                      "angle": 260.49,
                      "y": 15.6
                     }
                    ],
                    "thumbnailUrl": "media/panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_t.jpg",
                    "hfov": 360,
                    "label": "CC_Project_4",
                    "partial": false
                   }
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -17.47,
                   "yaw": -110.73,
                   "distance": 1,
                   "panorama": "this.panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E"
                  }
                 ],
                 "frames": [
                  {
                   "sphere": {
                    "levels": [
                     {
                      "height": 2048,
                      "width": 4096,
                      "url": "media/panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1_t.jpg",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "id": "overlay_2CA6D3E3_279C_DC1E_41B9_36A15A92DBCF",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "height": 29,
                          "width": 29,
                          "url": "media/panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -52.44,
                       "hfov": 5.12,
                       "pitch": -9.09
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA, this.camera_93D34127_9D1A_1438_41D0_519798D93C43); this.mainPlayList.set('selectedIndex', 12)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": -52.44,
                       "pitch": -9.09,
                       "hfov": 5.12,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 59,
                          "width": 58,
                          "url": "media/panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_2CA6C3E3_279C_DC1E_41A2_5AA02B788064",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "height": 29,
                          "width": 29,
                          "url": "media/panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1_0_HS_2_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -110.73,
                       "hfov": 5.18,
                       "pitch": -2.72
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E, this.camera_93C95132_9D1A_1418_41C9_5D2ED110D00C); this.mainPlayList.set('selectedIndex', 15)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": -110.73,
                       "pitch": -2.72,
                       "hfov": 5.18,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 59,
                          "width": 58,
                          "url": "media/panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1_0_HS_2_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_2CA6F3E3_279C_DC1E_4181_D55F82F8B7F7",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "height": 35,
                          "width": 36,
                          "url": "media/panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1_0_HS_3_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -82.08,
                       "hfov": 6.14,
                       "pitch": 14.07
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337, this.camera_93DD111B_9D1A_140F_41E2_C6A932574705); this.mainPlayList.set('selectedIndex', 16)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": -82.08,
                       "pitch": 14.07,
                       "hfov": 6.14,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 71,
                          "width": 72,
                          "url": "media/panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1_0_HS_3_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       }
                      }
                     ]
                    },
                    {
                     "bleaching": 0.7,
                     "bleachingDistance": 0.4,
                     "id": "overlay_39CACAA0_37C2_ACFF_4197_1DF153490C33",
                     "class": "LensFlarePanoramaOverlay",
                     "yaw": -28.14,
                     "pitch": 63.56
                    }
                   ],
                   "class": "SphericPanoramaFrame"
                  }
                 ],
                 "hfovMin": 80,
                 "id": "panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1",
                 "vfov": 180,
                 "class": "Panorama",
                 "hfovMax": 120,
                 "pitch": 0,
                 "mapLocations": [
                  {
                   "x": 281,
                   "map": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
                   "class": "PanoramaMapLocation",
                   "angle": 317.08,
                   "y": 22.6
                  }
                 ],
                 "thumbnailUrl": "media/panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1_t.jpg",
                 "hfov": 360,
                 "label": "CC_Project_6",
                 "partial": false
                }
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -102.17,
                "yaw": 32.03,
                "distance": 1,
                "panorama": "this.panorama_2C7FFD45_279C_C425_4191_328659A964C7"
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -84.17,
                "yaw": -121.05,
                "distance": 1,
                "panorama": "this.panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E"
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -82.7,
                "yaw": 85.67,
                "distance": 1,
                "panorama": "this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA"
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -81.45,
                "yaw": -43.54,
                "distance": 1,
                "panorama": "this.panorama_2BBC8600_279C_C41B_41AA_7212826C3A68"
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -115.43,
                "yaw": 8.58,
                "distance": 1,
                "panorama": "this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7"
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -3.16,
                "yaw": 24.93,
                "distance": 1,
                "panorama": "this.panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686"
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -66.61,
                "yaw": -29.95,
                "distance": 1,
                "panorama": "this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E"
               }
              ],
              "hfovMin": 80,
              "id": "panorama_2C00DBFF_279B_43E5_418A_2C175D957337",
              "vfov": 180,
              "class": "Panorama",
              "hfovMax": 100,
              "pitch": 0,
              "mapLocations": [
               {
                "x": 151.5,
                "map": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
                "class": "PanoramaMapLocation",
                "angle": 271.87,
                "y": 106.5
               }
              ],
              "thumbnailUrl": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_t.jpg",
              "hfov": 360,
              "label": "CC_Project_8",
              "partial": false,
              "frames": [
               {
                "sphere": {
                 "levels": [
                  {
                   "height": 2048,
                   "width": 4096,
                   "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_t.jpg",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "id": "overlay_2C00BC00_279B_441A_41A9_2E76910C36F0",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 30,
                       "width": 30,
                       "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -29.95,
                    "hfov": 4.07,
                    "pitch": -39.47
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E, this.camera_92745E3E_9D1A_6C08_41BC_38C7D0E08C53); this.mainPlayList.set('selectedIndex', 9)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -29.95,
                    "pitch": -39.47,
                    "hfov": 4.07,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 60,
                       "width": 60,
                       "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_2C007C00_279B_441A_41C0_E3A7B6A036C8",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 30,
                       "width": 30,
                       "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -43.54,
                    "hfov": 3.2,
                    "pitch": -52.58
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2BBC8600_279C_C41B_41AA_7212826C3A68, this.camera_9257BE19_9D1A_6C0B_41C0_EF5A3EDA4409); this.mainPlayList.set('selectedIndex', 10)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -43.54,
                    "pitch": -52.58,
                    "hfov": 3.2,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 60,
                       "width": 60,
                       "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_2C005C00_279B_441B_41C2_4F5A683D497C",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 30,
                       "width": 30,
                       "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_2_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 32.03,
                    "hfov": 4.13,
                    "pitch": -38.39
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2C7FFD45_279C_C425_4191_328659A964C7, this.camera_922BBDF4_9D1A_6C18_41BA_8B237C4294F5); this.mainPlayList.set('selectedIndex', 11)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": 32.03,
                    "pitch": -38.39,
                    "hfov": 4.13,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 60,
                       "width": 60,
                       "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_2_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_2C004C00_279B_441B_41B2_C9CF4743FEA0",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 30,
                       "width": 30,
                       "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_3_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 8.58,
                    "hfov": 3.55,
                    "pitch": -47.65
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7, this.camera_92404E26_9D1A_6C38_41B5_6FF446369739); this.mainPlayList.set('selectedIndex', 17)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": 8.58,
                    "pitch": -47.65,
                    "hfov": 3.55,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 60,
                       "width": 60,
                       "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_3_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_2C001C00_279B_441B_41BD_8BC16CC38810",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 30,
                       "width": 30,
                       "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_4_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -121.05,
                    "hfov": 2.88,
                    "pitch": -56.91
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E, this.camera_9223EE00_9D1A_6FF9_41D1_18047DC2CF08); this.mainPlayList.set('selectedIndex', 15)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -121.05,
                    "pitch": -56.91,
                    "hfov": 2.88,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 60,
                       "width": 60,
                       "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_4_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_2C000C00_279B_441B_41B8_87BF4CC774E8",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 30,
                       "width": 30,
                       "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_5_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 24.93,
                    "hfov": 0.29,
                    "pitch": -86.86
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686, this.camera_927BBE32_9D1A_6C19_41DD_F04C44ACA094); this.mainPlayList.set('selectedIndex', 13)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": 24.93,
                    "pitch": -86.86,
                    "hfov": 0.29,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 60,
                       "width": 60,
                       "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_5_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_2C07DC00_279B_441B_41C1_A9C8777E703C",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 30,
                       "width": 30,
                       "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_6_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 85.67,
                    "hfov": 3.37,
                    "pitch": -50.28
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA, this.camera_925DFE0D_9D1A_6C08_41C1_E43FE510DE80); this.mainPlayList.set('selectedIndex', 12)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": 85.67,
                    "pitch": -50.28,
                    "hfov": 3.37,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 60,
                       "width": 60,
                       "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_6_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_2C079C00_279B_441B_41BB_F6AA42D4FAA8",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 30,
                       "width": 30,
                       "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_7_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 158.83,
                    "hfov": 4.66,
                    "pitch": -27.99
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1, this.camera_9231ADE7_9D1A_6C07_4195_D3EBF5A9AE3F); this.mainPlayList.set('selectedIndex', 14)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": 158.83,
                    "pitch": -27.99,
                    "hfov": 4.66,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 60,
                       "width": 60,
                       "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_7_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 },
                 {
                  "bleaching": 0.7,
                  "bleachingDistance": 0.4,
                  "id": "overlay_39CCA57D_37C5_6440_41CB_8528AECC6E40",
                  "class": "LensFlarePanoramaOverlay",
                  "yaw": 27.39,
                  "pitch": 62.42
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_326DF1C8_3C8A_FA95_41C2_A1F274D2FEED",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 59,
                       "width": 59,
                       "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_9_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -23.46,
                    "hfov": 8.79,
                    "pitch": -32.85
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 0)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -23.46,
                    "pitch": -32.85,
                    "hfov": 8.79,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 118,
                       "width": 119,
                       "url": "media/panorama_2C00DBFF_279B_43E5_418A_2C175D957337_0_HS_9_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame"
               }
              ]
             }
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -86,
             "yaw": 138.73,
             "distance": 1,
             "panorama": "this.panorama_2C7FFD45_279C_C425_4191_328659A964C7"
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -129.41,
             "yaw": -20.63,
             "distance": 1,
             "panorama": "this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E"
            }
           ],
           "hfovMin": 80,
           "id": "panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7",
           "vfov": 180,
           "class": "Panorama",
           "hfovMax": 120,
           "pitch": 0,
           "mapLocations": [
            {
             "x": 47.79,
             "map": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
             "class": "PanoramaMapLocation",
             "angle": 202.59,
             "y": 82.59
            }
           ],
           "thumbnailUrl": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_t.jpg",
           "hfov": 360,
           "label": "CC_Project_9",
           "partial": false,
           "frames": [
            {
             "sphere": {
              "levels": [
               {
                "height": 2048,
                "width": 4096,
                "url": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "id": "overlay_4A56E6F5_161C_628C_41A8_2F0FD3F1AE41",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 60,
                    "width": 60,
                    "url": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -20.63,
                 "hfov": 10.55,
                 "pitch": -0.53
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E, this.camera_93E15DA8_9D1A_6C09_41D4_88B1F8B5DE61); this.mainPlayList.set('selectedIndex', 9)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -20.63,
                 "pitch": -0.53,
                 "hfov": 10.55,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 120,
                    "width": 120,
                    "url": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 }
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_49345E89_161C_6284_4190_2B15006E97A0",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 59,
                    "width": 58,
                    "url": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 138.73,
                 "hfov": 10.37,
                 "pitch": 0.74
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_2C7FFD45_279C_C425_4191_328659A964C7, this.camera_93E80D9C_9D1A_6C08_41D5_6153B3F02AD2); this.mainPlayList.set('selectedIndex', 11)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 138.73,
                 "pitch": 0.74,
                 "hfov": 10.37,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 119,
                    "width": 117,
                    "url": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 }
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_4A551A94_1613_E28C_41B1_242B46338C0C",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 58,
                    "width": 59,
                    "url": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_0_HS_3_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -115.43,
                 "hfov": 9.68,
                 "pitch": 22.22
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337, this.camera_93FFED8F_9D1A_6C07_41D5_346CF091F696); this.mainPlayList.set('selectedIndex', 16)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -115.43,
                 "pitch": 22.22,
                 "hfov": 9.68,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 117,
                    "width": 119,
                    "url": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_0_HS_3_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 }
                }
               ]
              },
              {
               "bleaching": 0.7,
               "bleachingDistance": 0.4,
               "id": "overlay_39E68CB3_37C5_64C0_41C2_93E192773C97",
               "class": "LensFlarePanoramaOverlay",
               "yaw": 92.74,
               "pitch": 63.56
              },
              {
               "useHandCursor": true,
               "id": "overlay_3215E5FC_3C9B_9A6D_41BA_6C657A221EE9",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 75,
                    "width": 75,
                    "url": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_0_HS_4_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 12.92,
                 "hfov": 13.18,
                 "pitch": 0.22
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.mainPlayList.set('selectedIndex', 0)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 12.92,
                 "pitch": 0.22,
                 "hfov": 13.18,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 150,
                    "width": 150,
                    "url": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_0_HS_4_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 }
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_2F385F6A_3C8A_8794_41CD_54DF555CB5E8",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 59,
                    "width": 59,
                    "url": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_0_HS_5_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 163.35,
                 "hfov": 9.38,
                 "pitch": -25.3
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_5F372E49_160C_6584_4186_1E0077946A37, this.camera_93C54D82_9D1A_6CF9_41E1_3A1068730B18); this.mainPlayList.set('selectedIndex', 30)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 163.35,
                 "pitch": -25.3,
                 "hfov": 9.38,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 119,
                    "width": 118,
                    "url": "media/panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_0_HS_5_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 }
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame"
            }
           ]
          }
         }
        ],
        "hfovMin": 80,
        "id": "panorama_5F372E49_160C_6584_4186_1E0077946A37",
        "vfov": 180,
        "class": "Panorama",
        "hfovMax": 120,
        "pitch": 0,
        "mapLocations": [
         {
          "x": 296.9,
          "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
          "class": "PanoramaMapLocation",
          "angle": 44.34,
          "y": 333.85
         }
        ],
        "thumbnailUrl": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_t.jpg",
        "hfov": 360,
        "label": "2-Frente_edificio_6",
        "partial": false,
        "frames": [
         {
          "sphere": {
           "levels": [
            {
             "height": 2688,
             "width": 5376,
             "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "id": "overlay_51EB4792_1634_2284_41B5_0C972AE8FCB9",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 70,
                 "width": 70,
                 "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 53.21,
              "hfov": 9.33,
              "pitch": -5.55
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_8D876FEF_9D1A_6C07_41C8_84609879C23D); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 53.21,
              "pitch": -5.55,
              "hfov": 9.33,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 140,
                 "width": 140,
                 "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_51F0DF07_1634_638C_41B2_9A4E63809788",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 59,
                 "width": 59,
                 "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 103.06,
              "hfov": 8.03,
              "pitch": 2.19
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7, this.camera_8DB31FFB_9D1A_6C08_41C5_665FEBE0BF08); this.mainPlayList.set('selectedIndex', 17)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 103.06,
              "pitch": 2.19,
              "hfov": 8.03,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 119,
                 "width": 119,
                 "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_5E155A5E_1634_2DBC_41B1_FF60E5DE5478",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 59,
                 "width": 59,
                 "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -109.06,
              "hfov": 7.85,
              "pitch": -6.87
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1, this.camera_8D8CEFE4_9D1A_6C38_41CC_8648EDDE29EE); this.mainPlayList.set('selectedIndex', 29)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -109.06,
              "pitch": -6.87,
              "hfov": 7.85,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 119,
                 "width": 118,
                 "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_594362D6_161C_228C_41AC_CB29F9722029",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 59,
                 "width": 59,
                 "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_0_HS_3_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 2.03,
              "hfov": 7.9,
              "pitch": -1.63
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 20)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 2.03,
              "pitch": -1.63,
              "hfov": 7.9,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 118,
                 "width": 118,
                 "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_4E7D4D1E_160C_67BC_418A_DF582ABC0F4E",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 59,
                 "width": 58,
                 "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_0_HS_4_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -47.37,
              "hfov": 7.88,
              "pitch": -3.91
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 21)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -47.37,
              "pitch": -3.91,
              "hfov": 7.88,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 118,
                 "width": 117,
                 "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_0_HS_4_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_40C9F966_1634_EF8C_41A2_3D0C21E87BB3",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 59,
                 "width": 59,
                 "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_0_HS_5_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -83.56,
              "hfov": 7.13,
              "pitch": 26.59
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -83.56,
              "pitch": 26.59,
              "hfov": 7.13,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 118,
                 "width": 118,
                 "url": "media/panorama_5F372E49_160C_6584_4186_1E0077946A37_0_HS_5_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             }
            ]
           },
           {
            "bleaching": 0.7,
            "bleachingDistance": 0.4,
            "id": "overlay_39D2CB6A_37C3_AC40_41A9_BE5EE8895F34",
            "class": "LensFlarePanoramaOverlay",
            "yaw": 82.16,
            "pitch": 58.65
           }
          ],
          "class": "SphericPanoramaFrame"
         }
        ]
       }
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 105.2,
       "yaw": -79.36,
       "distance": 1,
       "panorama": "this.panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56"
      }
     ],
     "hfovMin": 80,
     "id": "panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1",
     "vfov": 180,
     "class": "Panorama",
     "hfovMax": 120,
     "pitch": 0,
     "mapLocations": [
      {
       "x": 282.7,
       "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
       "class": "PanoramaMapLocation",
       "angle": 136.49,
       "y": 306.8
      }
     ],
     "thumbnailUrl": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_t.jpg",
     "hfov": 360,
     "label": "2-Frente CC_3",
     "partial": false,
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "height": 2688,
          "width": 5376,
          "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "id": "overlay_386F356F_1674_679C_41AB_45D7D10D951D",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 59,
              "width": 59,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 20.72,
           "hfov": 7.87,
           "pitch": -4.81
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15, this.camera_93955CDF_9D1A_6C07_41E2_E8644E4846E2); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 20.72,
           "pitch": -4.81,
           "hfov": 7.87,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 119,
              "width": 118,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_39BB0967_1674_EF8C_4188_3E87C5B6962A",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 59,
              "width": 59,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -109.65,
           "hfov": 7.69,
           "pitch": -13.45
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_14DC7652_1AFD_7168_41B0_2871B449D01E, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}) } else { this.showPopupMedia(this.window_968D0544_9D16_3C79_41C6_41E263F72302, this.video_14581B06_1AFD_10E9_41B7_EBE2377910B5, this.PlayList_90D4A00F_9D16_3407_4182_E05A73F99347, '95%', '95%', true, true); this.PlayList_90D4A00F_9D16_3407_4182_E05A73F99347.set('selectedIndex', 0); ; this.viewer_uid90B10FDA_9D16_2C08_41E1_CAE70A70D59EVideoPlayer.play();  }",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -109.65,
           "pitch": -13.45,
           "hfov": 7.69,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 119,
              "width": 118,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_38EA0EC1_1675_E284_41AE_F7FC482A7B4D",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 60,
              "width": 60,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 130.67,
           "hfov": 8.02,
           "pitch": -2.99
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_3D79D3BF_1674_22FC_4196_7C67831E524C, this.camera_8C5B5C8B_9D1A_6C0F_41E0_6C12E7E66273); this.mainPlayList.set('selectedIndex', 26)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 130.67,
           "pitch": -2.99,
           "hfov": 8.02,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 120,
              "width": 120,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_2B56ABDE_1613_E2BC_41AF_E2CC7D148DC8",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 59,
              "width": 59,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_3_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -40.82,
           "hfov": 7.84,
           "pitch": -7.23
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_5F372E49_160C_6584_4186_1E0077946A37, this.camera_938ACCEC_9D1A_6C08_419F_B7BB363CE5FC); this.mainPlayList.set('selectedIndex', 30)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -40.82,
           "pitch": -7.23,
           "hfov": 7.84,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 119,
              "width": 118,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_299B8510_1614_6784_41AB_976344A899D8",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 59,
              "width": 59,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_5_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -123.06,
           "hfov": 7.85,
           "pitch": -6.3
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_474FEAEC_160C_229C_41B5_A893F886FCB3, this.camera_9392ACD2_9D1A_6C18_41D3_2158A48086BF); this.mainPlayList.set('selectedIndex', 21)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -123.06,
           "pitch": -6.3,
           "hfov": 7.85,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 119,
              "width": 118,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_5_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_5860B00C_1614_3D9C_4191_7FC67CA38654",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 52,
              "width": 61,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_6_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -172.08,
           "hfov": 8.14,
           "pitch": 8.92
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_94B2E7EE_160C_E29C_41AF_8F6F1B527001, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_9C57885A_1634_6D84_41A1_9B25A7190911, null, null, null, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -172.08,
           "pitch": 8.92,
           "hfov": 8.14,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 104,
              "width": 122,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_6_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_4035AF50_163C_2384_41A2_0F3A3A6E8E9E",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 84,
              "width": 85,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_7_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 114.77,
           "hfov": 10.24,
           "pitch": 26.34
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 114.77,
           "pitch": 26.34,
           "hfov": 10.24,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 169,
              "width": 170,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_7_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_6FCAB64F_1614_659C_41B3_E272D6EFCE0B",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 59,
              "width": 59,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_8_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -79.36,
           "hfov": 7.9,
           "pitch": -1.94
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56, this.camera_938FECF8_9D1A_6C09_41AF_4F0BFCC32F7C); this.mainPlayList.set('selectedIndex', 20)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -79.36,
           "pitch": -1.94,
           "hfov": 7.9,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 119,
              "width": 118,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_8_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_97F366C7_160C_228C_4189_0D54D95674F4",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 52,
              "width": 61,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_9_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 0.97,
           "hfov": 8.23,
           "pitch": -1.24
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_940D3F6C_160D_E39C_4182_27B26B33C63C, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_9C5AF85C_1634_6DBC_41A3_32718963AC15, null, null, null, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 0.97,
           "pitch": -1.24,
           "hfov": 8.23,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 104,
              "width": 123,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_9_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "rotationX": 0,
         "rotationZ": 0,
         "yaw": 0.97,
         "hfov": 8.23,
         "hideEasing": "cubic_out",
         "showEasing": "cubic_in",
         "popupMaxWidth": "95%",
         "id": "popup_940D3F6C_160D_E39C_4182_27B26B33C63C",
         "hideDuration": 500,
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "popupMaxHeight": "95%",
         "image": {
          "levels": [
           {
            "height": 682,
            "width": 1024,
            "url": "media/popup_940D3F6C_160D_E39C_4182_27B26B33C63C_0_1.jpg",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "rotationY": 0,
         "pitch": -1.24
        },
        {
         "rotationX": 0,
         "rotationZ": 0,
         "yaw": -172.08,
         "hfov": 8.14,
         "hideEasing": "cubic_out",
         "showEasing": "cubic_in",
         "popupMaxWidth": "95%",
         "id": "popup_94B2E7EE_160C_E29C_41AF_8F6F1B527001",
         "hideDuration": 500,
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "popupMaxHeight": "95%",
         "image": {
          "levels": [
           {
            "height": 576,
            "width": 1024,
            "url": "media/popup_94B2E7EE_160C_E29C_41AF_8F6F1B527001_0_1.jpg",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "rotationY": 0,
         "pitch": 8.92
        },
        {
         "rotationX": 0,
         "rotationZ": 0,
         "yaw": -109.65,
         "hfov": 7.69,
         "video": {
          "height": 720,
          "mp4Url": "media/video_14581B06_1AFD_10E9_41B7_EBE2377910B5.mp4",
          "width": 1280,
          "class": "VideoResource"
         },
         "hideEasing": "cubic_out",
         "showEasing": "cubic_in",
         "popupMaxWidth": "95%",
         "id": "popup_14DC7652_1AFD_7168_41B0_2871B449D01E",
         "hideDuration": 500,
         "loop": false,
         "class": "PopupPanoramaOverlay",
         "popupMaxHeight": "95%",
         "autoplay": true,
         "rotationY": 0,
         "showDuration": 500,
         "pitch": -13.45
        },
        {
         "useHandCursor": true,
         "id": "overlay_15E8F9D5_1B2D_360E_41B4_C826F748F6D7",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 59,
              "width": 59,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_10_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -16.66,
           "hfov": 7.96,
           "pitch": 1.99
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 17)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -16.66,
           "pitch": 1.99,
           "hfov": 7.96,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 118,
              "width": 119,
              "url": "media/panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_0_HS_10_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "bleaching": 0.7,
         "bleachingDistance": 0.4,
         "id": "overlay_39D82917_37C3_ADC0_41B1_848C5093B06F",
         "class": "LensFlarePanoramaOverlay",
         "yaw": -19.83,
         "pitch": 63.18
        }
       ],
       "class": "SphericPanoramaFrame"
      }
     ]
    }
   },
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -144.74,
    "yaw": 175.65,
    "distance": 1,
    "panorama": {
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 175.65,
       "yaw": -144.74,
       "distance": 1,
       "panorama": "this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15"
      }
     ],
     "hfovMin": 80,
     "id": "panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
     "vfov": 180,
     "class": "Panorama",
     "hfovMax": 120,
     "pitch": 0,
     "mapLocations": [
      {
       "x": 305.3,
       "map": {
        "fieldOfViewOverlayRadiusScale": 0.33,
        "width": 500,
        "id": "map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
        "class": "Map",
        "minimumZoomFactor": 0.5,
        "image": {
         "levels": [
          {
           "height": 563,
           "width": 500,
           "url": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C.png",
           "class": "ImageResourceLevel"
          },
          {
           "height": 281,
           "grayscale": true,
           "width": 250,
           "url": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_lq.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "fieldOfViewOverlayOutsideOpacity": 0,
        "thumbnailUrl": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_t.png",
        "label": "Costa-Rica-Map",
        "overlays": [
         {
          "id": "overlay_E2A9E771_EFFC_6DAB_41ED_732E2F091F5A",
          "rollOverDisplay": false,
          "map": {
           "offsetY": 0,
           "x": 280.3,
           "width": 50,
           "y": 228.1,
           "class": "HotspotMapOverlayMap",
           "height": 50,
           "offsetX": 0,
           "image": {
            "levels": [
             {
              "height": 24,
              "width": 25,
              "url": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_HS_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "click": "this.mainPlayList.set('selectedIndex', 18)",
            "mapColor": "#FF0000"
           }
          ],
          "image": {
           "x": 280.3,
           "y": 228.1,
           "width": 50,
           "class": "HotspotMapOverlayImage",
           "height": 50,
           "image": {
            "levels": [
             {
              "height": 49,
              "width": 50,
              "url": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_HS_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "useHandCursor": true
         }
        ],
        "fieldOfViewOverlayOutsideColor": "#000000",
        "initialZoomFactor": 1,
        "maximumZoomFactor": 1.2,
        "fieldOfViewOverlayInsideColor": "#000000",
        "fieldOfViewOverlayInsideOpacity": 0.4,
        "scaleMode": "fit_inside",
        "height": 563
       },
       "class": "PanoramaMapLocation",
       "angle": 93.36,
       "y": 253.1
      }
     ],
     "thumbnailUrl": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_t.jpg",
     "hfov": 360,
     "label": "Cartago City",
     "partial": false,
     "frames": [
      {
       "front": {
        "levels": [
         {
          "height": 1704,
          "width": 1704,
          "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_f_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1024,
          "width": 1024,
          "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_f.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "height": 1704,
          "width": 1704,
          "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_u_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1024,
          "width": 1024,
          "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_u.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "right": {
        "levels": [
         {
          "height": 1704,
          "width": 1704,
          "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_r_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1024,
          "width": 1024,
          "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_r.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "height": 1704,
          "width": 1704,
          "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_b_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1024,
          "width": 1024,
          "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_b.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_t.jpg",
       "bottom": {
        "levels": [
         {
          "height": 1704,
          "width": 1704,
          "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_d_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1024,
          "width": 1024,
          "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_d.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "useHandCursor": true,
         "id": "overlay_E5CD8369_EF1C_25BA_41E1_3E44CA6907EB",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 59,
              "width": 59,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_7_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -144.74,
           "hfov": 7.9,
           "pitch": 1.37
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15, this.camera_93CD8D76_9D1A_6C18_41A5_B6150E10F6BA); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -144.74,
           "pitch": 1.37,
           "hfov": 7.9,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 118,
              "width": 118,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_7_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_E5DFA8E5_EF2C_64AA_41E7_45A9551591C4",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 53,
              "width": 61,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_5_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 85.84,
           "hfov": 8.24,
           "pitch": 0.52
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, null, null, null, null, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 85.84,
           "pitch": 0.52,
           "hfov": 8.24,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 106,
              "width": 122,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_5_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_E420ED42_EF2C_5DE9_41E2_85CF49AA9D29",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 52,
              "width": 61,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_4_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 43.77,
           "hfov": 8.24,
           "pitch": 0.27
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, null, null, null, null, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 43.77,
           "pitch": 0.27,
           "hfov": 8.24,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 104,
              "width": 122,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_4_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_E5C47084_EF2D_E36A_41D0_6FB86F1AA8C0",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 52,
              "width": 49,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_3_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -73.96,
           "hfov": 6.64,
           "pitch": 7.67
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_E252A6BD_EF1D_EC9A_41D3_31F4A8966575, null, null, null, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -73.96,
           "pitch": 7.67,
           "hfov": 6.64,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 104,
              "width": 99,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "rotationX": 0,
         "rotationZ": 0,
         "yaw": 43.77,
         "hfov": 8.24,
         "hideEasing": "cubic_out",
         "showEasing": "cubic_in",
         "popupMaxWidth": "95%",
         "id": "popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6",
         "hideDuration": 500,
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "popupMaxHeight": "95%",
         "image": {
          "levels": [
           {
            "height": 552,
            "width": 787,
            "url": "media/popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6_0_0.jpg",
            "class": "ImageResourceLevel"
           },
           {
            "height": 359,
            "width": 512,
            "url": "media/popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6_0_1.jpg",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "rotationY": 0,
         "pitch": 0.27
        },
        {
         "rotationX": 0,
         "rotationZ": 0,
         "yaw": 85.84,
         "hfov": 8.24,
         "hideEasing": "cubic_out",
         "showEasing": "cubic_in",
         "popupMaxWidth": "95%",
         "id": "popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C",
         "hideDuration": 500,
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "popupMaxHeight": "95%",
         "image": {
          "levels": [
           {
            "height": 535,
            "width": 800,
            "url": "media/popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C_0_0.jpg",
            "class": "ImageResourceLevel"
           },
           {
            "height": 342,
            "width": 512,
            "url": "media/popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C_0_1.jpg",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "rotationY": 0,
         "pitch": 0.52
        },
        {
         "rotationX": 0,
         "rotationZ": 0,
         "yaw": -73.96,
         "hfov": 6.64,
         "hideEasing": "cubic_out",
         "showEasing": "cubic_in",
         "popupMaxWidth": "95%",
         "id": "popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865",
         "hideDuration": 500,
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "popupMaxHeight": "95%",
         "image": {
          "levels": [
           {
            "height": 748,
            "width": 1024,
            "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_1.jpg",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "rotationY": 0,
         "pitch": 7.67
        },
        {
         "useHandCursor": true,
         "id": "overlay_E37E9453_EF2C_E3EE_41CE_DD0115CEB1E5",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 53,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_2_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -132.82,
           "hfov": 17.78,
           "pitch": 1.59
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -132.82,
           "pitch": 1.59,
           "hfov": 17.78,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 80,
              "width": 265,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_E29702E5_EF2C_24AA_41DF_D1E8119A0A3F",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 80,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 61,
           "hfov": 27.31,
           "pitch": 0.49
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 61,
           "pitch": 0.49,
           "hfov": 27.31,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 81,
              "width": 407,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_E4BB9F35_EF34_3DAA_41DC_06016B04BD96",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 49,
              "width": 49,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -123.25,
           "hfov": 6.66,
           "pitch": -5.64
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_E253E6BD_EF1D_EC9A_41EA_C503E65D3053, null, null, null, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -123.25,
           "pitch": -5.64,
           "hfov": 6.66,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 99,
              "width": 99,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "rotationX": 0,
         "rotationZ": 0,
         "yaw": -123.25,
         "hfov": 6.66,
         "hideEasing": "cubic_out",
         "showEasing": "cubic_in",
         "popupMaxWidth": "95%",
         "id": "popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43",
         "hideDuration": 500,
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "popupMaxHeight": "95%",
         "image": {
          "levels": [
           {
            "height": 632,
            "width": 1024,
            "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_1.jpg",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "rotationY": 0,
         "pitch": -5.64
        },
        {
         "useHandCursor": true,
         "id": "overlay_E63D12C8_F662_39DB_4170_7EF640601D86",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 24,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_11_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -116.34,
           "hfov": 8.66,
           "pitch": -5.8
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -116.34,
           "pitch": -5.8,
           "hfov": 8.66,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 85,
              "width": 129,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_11_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_E75D89D8_F662_2BFB_41BB_D9250A0A17F6",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 52,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_10_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 97.38,
           "hfov": 15.83,
           "pitch": 1.23
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 97.38,
           "pitch": 1.23,
           "hfov": 15.83,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 72,
              "width": 236,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_10_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_E6D140FE_F662_D9B7_41ED_B6DDE5F11AEE",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 39,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_9_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -64.87,
           "hfov": 12.22,
           "pitch": 7.99
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -64.87,
           "pitch": 7.99,
           "hfov": 12.22,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 74,
              "width": 184,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_9_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_39C6394A_1091_C543_41A0_4400E90D35FB",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 52,
              "width": 49,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_12_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -105.77,
           "hfov": 6.7,
           "pitch": -0.52
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_3CC23B7F_107F_4540_4180_ABF478E71F9A, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_20FB6245_107F_4740_41A8_9C0A46A92B4D, null, null, null, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -105.77,
           "pitch": -0.52,
           "hfov": 6.7,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 104,
              "width": 99,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_12_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_381D894C_1071_C540_41AF_D6F0E2E79C30",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 63,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_13_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -104.29,
           "hfov": 19.47,
           "pitch": 3.74
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -104.29,
           "pitch": 3.74,
           "hfov": 19.47,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 73,
              "width": 291,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_13_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_3A9BE60C_1071_4EC7_41AC_F23BD1106998",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 51,
              "width": 49,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_14_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -99.48,
           "hfov": 6.69,
           "pitch": -2.91
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_3BBE3C5B_107F_C340_4178_756995F5135C, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, null, null, null, null, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -99.48,
           "pitch": -2.91,
           "hfov": 6.69,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 103,
              "width": 99,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_14_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_3BFABA4C_1071_4740_4194_C4FC9991EEE4",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 66,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_15_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -85.73,
           "hfov": 22.05,
           "pitch": -2.84
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -85.73,
           "pitch": -2.84,
           "hfov": 22.05,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 79,
              "width": 329,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_15_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "rotationX": 0,
         "rotationZ": 0,
         "yaw": -105.77,
         "hfov": 6.7,
         "hideEasing": "cubic_out",
         "showEasing": "cubic_in",
         "popupMaxWidth": "95%",
         "id": "popup_3CC23B7F_107F_4540_4180_ABF478E71F9A",
         "hideDuration": 500,
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "popupMaxHeight": "95%",
         "image": {
          "levels": [
           {
            "height": 767,
            "width": 1024,
            "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_1.jpg",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "rotationY": 0,
         "pitch": -0.52
        },
        {
         "rotationX": 0,
         "rotationZ": 0,
         "yaw": -99.48,
         "hfov": 6.69,
         "hideEasing": "cubic_out",
         "showEasing": "cubic_in",
         "popupMaxWidth": "95%",
         "id": "popup_3BBE3C5B_107F_C340_4178_756995F5135C",
         "hideDuration": 500,
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "popupMaxHeight": "95%",
         "image": {
          "levels": [
           {
            "height": 641,
            "width": 941,
            "url": "media/popup_3BBE3C5B_107F_C340_4178_756995F5135C_0_0.jpg",
            "class": "ImageResourceLevel"
           },
           {
            "height": 348,
            "width": 511,
            "url": "media/popup_3BBE3C5B_107F_C340_4178_756995F5135C_0_1.jpg",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "rotationY": 0,
         "pitch": -2.91
        },
        {
         "useHandCursor": true,
         "id": "overlay_212C2018_11B1_C2CF_4164_CA1A96AC721E",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 51,
              "width": 49,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_16_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -80.67,
           "hfov": 6.69,
           "pitch": 2
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_209897EC_11B3_4D40_41A2_837DB50E3A59, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, null, null, null, null, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -80.67,
           "pitch": 2,
           "hfov": 6.69,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 103,
              "width": 99,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_16_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_21F8CB1B_11B7_C6C1_41A4_790E87B46214",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 59,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_17_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -69.51,
           "hfov": 17.1,
           "pitch": 1.99
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -69.51,
           "pitch": 1.99,
           "hfov": 17.1,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 69,
              "width": 255,
              "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_17_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "rotationX": 0,
         "rotationZ": 0,
         "yaw": -80.67,
         "hfov": 6.69,
         "hideEasing": "cubic_out",
         "showEasing": "cubic_in",
         "popupMaxWidth": "95%",
         "id": "popup_209897EC_11B3_4D40_41A2_837DB50E3A59",
         "hideDuration": 500,
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "popupMaxHeight": "95%",
         "image": {
          "levels": [
           {
            "height": 720,
            "width": 960,
            "url": "media/popup_209897EC_11B3_4D40_41A2_837DB50E3A59_0_0.jpg",
            "class": "ImageResourceLevel"
           },
           {
            "height": 384,
            "width": 512,
            "url": "media/popup_209897EC_11B3_4D40_41A2_837DB50E3A59_0_1.jpg",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "rotationY": 0,
         "pitch": 2
        }
       ],
       "left": {
        "levels": [
         {
          "height": 1704,
          "width": 1704,
          "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_l_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1024,
          "width": 1024,
          "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_l.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ]
    }
   }
  ],
  "hfovMin": 80,
  "id": "panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15",
  "vfov": 180,
  "class": "Panorama",
  "hfovMax": 120,
  "pitch": 0,
  "mapLocations": [
   {
    "x": 281.15,
    "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
    "class": "PanoramaMapLocation",
    "angle": 0,
    "y": 422.75
   }
  ],
  "thumbnailUrl": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_t.jpg",
  "hfov": 360,
  "label": "Main Acces",
  "partial": false,
  "frames": [
   {
    "front": {
     "levels": [
      {
       "height": 1704,
       "width": 1704,
       "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_f_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_f.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "height": 1704,
       "width": 1704,
       "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_u_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_u.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "height": 1704,
       "width": 1704,
       "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_r_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_r.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "height": 1704,
       "width": 1704,
       "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_b_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_b.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_t.jpg",
    "bottom": {
     "levels": [
      {
       "height": 1704,
       "width": 1704,
       "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_d_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_d.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "id": "overlay_D75F5845_D8F2_D78D_41C5_11AB9C06DCE7",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 59,
           "width": 59,
           "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 2.7,
        "hfov": 7.87,
        "pitch": -11.7
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1, this.camera_938700CC_9D1A_1409_41DE_B4733B185B88); this.mainPlayList.set('selectedIndex', 29)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 2.7,
        "pitch": -11.7,
        "hfov": 7.87,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 119,
           "width": 119,
           "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       }
      ]
     },
     {
      "bleaching": 0.7,
      "bleachingDistance": 0.4,
      "id": "overlay_D4C76E50_DC47_E1C9_41C3_9FDE3321574E",
      "class": "LensFlarePanoramaOverlay",
      "yaw": 150.67,
      "pitch": 42.76
     },
     {
      "useHandCursor": true,
      "id": "overlay_D5516A0E_DCE6_30A8_41E8_FE694E725AE4",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 60,
           "width": 60,
           "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -108.06,
        "hfov": 8.03,
        "pitch": 2.22
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_D67F207D_DCE6_3169_41C5_15346C9DD144, {'backgroundColorRatios':[0.09803921568627451],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':50,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':50,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':50,'pressedIconWidth':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.5,'rollOverIconWidth':50,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':50,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#FFFFFF','rollOverIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#FF0000','rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_D0B2815B_DCEA_70A9_41E8_E7BBC7DE2A6B, null, null, null, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -108.06,
        "pitch": 2.22,
        "hfov": 8.03,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 120,
           "width": 120,
           "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "yaw": -108.06,
      "hfov": 8.03,
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "popupMaxWidth": "95%",
      "id": "popup_D67F207D_DCE6_3169_41C5_15346C9DD144",
      "hideDuration": 500,
      "showDuration": 500,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "95%",
      "image": {
       "levels": [
        {
         "height": 682,
         "width": 1024,
         "url": "media/popup_D67F207D_DCE6_3169_41C5_15346C9DD144_0_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "pitch": 2.22
     },
     {
      "useHandCursor": true,
      "id": "overlay_EEB0B142_DD76_BE5D_41D0_2BBD62BD6380",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 60,
           "width": 60,
           "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 3.25,
        "hfov": 6.29,
        "pitch": 38.43
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 3.25,
        "pitch": 38.43,
        "hfov": 6.29,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 120,
           "width": 120,
           "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       }
      ]
     },
     {
      "useHandCursor": true,
      "id": "overlay_E5576D9D_EF14_5C9B_41D9_618184C5D0AE",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 65,
           "width": 68,
           "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 175.65,
        "hfov": 8.95,
        "pitch": 14.24
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B, this.camera_93BBF0D7_9D1A_1407_41C0_3064765EE59B); this.mainPlayList.set('selectedIndex', 18)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 175.65,
        "pitch": 14.24,
        "hfov": 8.95,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 130,
           "width": 137,
           "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       }
      ]
     },
     {
      "useHandCursor": true,
      "id": "overlay_E5CE6902_EF90_2799_418E_AA622D462845",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 59,
           "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 160.88,
        "hfov": 24.24,
        "pitch": 13.91
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 160.88,
        "pitch": 13.91,
        "hfov": 24.24,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 100,
           "width": 370,
           "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       }
      ]
     },
     {
      "useHandCursor": true,
      "id": "overlay_E30D676E_EFB0_6A69_41EC_2EF65EBAC682",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 67,
           "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_7_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 75.88,
        "hfov": 23.83,
        "pitch": 2.22
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 75.88,
        "pitch": 2.22,
        "hfov": 23.83,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 84,
           "width": 354,
           "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       }
      ]
     },
     {
      "useHandCursor": true,
      "id": "overlay_FAC3B108_F023_B5C2_41D0_0924B5263A18",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 59,
           "width": 59,
           "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_9_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 60.38,
        "hfov": 7.96,
        "pitch": 2.02
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_86BC6426_88BB_A07B_41C5_61F799090724, {'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'borderSize':0,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'iconWidth':20,'paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','rollOverBorderSize':0,'pressedBorderSize':0}) } else { this.showPopupMedia(this.window_968AF544_9D16_3C79_41E0_AC79EAFD2842, this.video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787, this.PlayList_90D4900F_9D16_3407_41E3_176610C47177, '95%', '95%', true, true); this.PlayList_90D4900F_9D16_3407_41E3_176610C47177.set('selectedIndex', 0); ; this.viewer_uid908AFFCA_9D16_2C09_4196_BD8FC3998886VideoPlayer.play();  }",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 60.38,
        "pitch": 2.02,
        "hfov": 7.96,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 118,
           "width": 118,
           "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_0_HS_9_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "yaw": 60.38,
      "hfov": 7.96,
      "video": {
       "height": 720,
       "mp4Url": "media/video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787.mp4",
       "width": 1280,
       "class": "VideoResource"
      },
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "popupMaxWidth": "95%",
      "id": "popup_86BC6426_88BB_A07B_41C5_61F799090724",
      "hideDuration": 500,
      "loop": false,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "95%",
      "autoplay": true,
      "rotationY": 0,
      "showDuration": 500,
      "pitch": 2.02
     }
    ],
    "left": {
     "levels": [
      {
       "height": 1704,
       "width": 1704,
       "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_l_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_l.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ]
 },
 {
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "buttonCardboardView": {
   "toolTipShadowHorizontalLength": 0,
   "verticalAlign": "middle",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipFontFamily": "Arial",
   "paddingRight": 0,
   "toolTipPaddingTop": 4,
   "borderSize": 0,
   "width": 75,
   "toolTipFontStyle": "normal",
   "height": 50,
   "toolTipTextShadowOpacity": 0,
   "toolTipShadowSpread": 0,
   "iconURL": "skin/IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667.png",
   "mode": "push",
   "toolTipPaddingRight": 6,
   "paddingLeft": 0,
   "toolTipPaddingLeft": 6,
   "horizontalAlign": "center",
   "transparencyActive": false,
   "shadow": false,
   "minHeight": 1,
   "borderRadius": 0,
   "cursor": "hand",
   "toolTipOpacity": 1,
   "toolTipFontSize": 12,
   "paddingBottom": 0,
   "id": "IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667",
   "class": "IconButton",
   "toolTipBackgroundColor": "#F6F6F6",
   "minWidth": 1,
   "backgroundOpacity": 0,
   "toolTipShadowColor": "#333333",
   "paddingTop": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipShadowBlurRadius": 3,
   "toolTip": "VR",
   "toolTipPaddingBottom": 4,
   "toolTipFontColor": "#606060",
   "toolTipTextShadowColor": "#000000",
   "toolTipBorderSize": 1,
   "toolTipShadowOpacity": 1,
   "toolTipBorderColor": "#767676",
   "toolTipBorderRadius": 3,
   "toolTipFontWeight": "normal"
  },
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false
 },
 {
  "viewerArea": {
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontWeight": "normal",
   "toolTipFontFamily": "Arial",
   "paddingRight": 0,
   "toolTipPaddingTop": 4,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadShadow": true,
   "progressBackgroundColorRatios": [
    0
   ],
   "toolTipTextShadowOpacity": 0,
   "progressBarBorderRadius": 0,
   "playbackBarLeft": 0,
   "playbackBarHeadHeight": 15,
   "progressBottom": 2,
   "progressBarBorderSize": 0,
   "toolTipPaddingLeft": 6,
   "paddingLeft": 0,
   "toolTipPaddingRight": 6,
   "progressHeight": 10,
   "progressBackgroundOpacity": 1,
   "playbackBarProgressBorderColor": "#000000",
   "progressBarBorderColor": "#000000",
   "shadow": false,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarBorderSize": 0,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "progressBackgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "playbackBarBorderColor": "#FFFFFF",
   "toolTipOpacity": 1,
   "class": "ViewerArea",
   "transitionMode": "blending",
   "toolTipShadowColor": "#333333",
   "paddingTop": 0,
   "playbackBarProgressBorderSize": 0,
   "playbackBarProgressOpacity": 1,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadBorderSize": 0,
   "toolTipBorderColor": "#767676",
   "playbackBarHeadShadowColor": "#000000",
   "playbackBarHeadShadowOpacity": 0.7,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "toolTipTextShadowBlurRadius": 3,
   "progressBorderSize": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "borderSize": 0,
   "playbackBarRight": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "toolTipFontStyle": "normal",
   "height": "70.806%",
   "progressBorderRadius": 0,
   "width": "99.417%",
   "playbackBarHeadOpacity": 1,
   "toolTipShadowSpread": 0,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadBorderRadius": 0,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarBorderRadius": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "minHeight": 1,
   "playbackBarOpacity": 1,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "borderRadius": 0,
   "toolTipFontSize": 12,
   "playbackBarHeight": 10,
   "id": "MapViewer",
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipBackgroundColor": "#F6F6F6",
   "progressBorderColor": "#000000",
   "minWidth": 1,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarBottom": 0,
   "progressRight": 0,
   "toolTipShadowBlurRadius": 3,
   "progressBarOpacity": 1,
   "toolTipShadowVerticalLength": 0,
   "playbackBarHeadBorderColor": "#000000",
   "toolTipPaddingBottom": 4,
   "toolTipFontColor": "#606060",
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadWidth": 6,
   "toolTipShadowOpacity": 1,
   "toolTipShadowHorizontalLength": 0,
   "toolTipBorderRadius": 3,
   "progressLeft": 0,
   "toolTipBorderSize": 1,
   "progressOpacity": 1
  },
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.17,
   "hfov": 105,
   "pitch": -2.94
  },
  "id": "panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_2BBC8600_279C_C41B_41AA_7212826C3A68",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_2C7FFD45_279C_C425_4191_328659A964C7",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_2C7FFD45_279C_C425_4191_328659A964C7_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 100,
   "pitch": 0
  },
  "id": "panorama_2C00DBFF_279B_43E5_418A_2C175D957337_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 53.23,
   "hfov": 105,
   "pitch": 1.41
  },
  "id": "panorama_E6145D91_EF14_5D6A_41D9_45623053016B_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_474FEAEC_160C_229C_41B5_A893F886FCB3",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_474FEAEC_160C_229C_41B5_A893F886FCB3_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_3D79567C_1674_627C_41A0_54E172548A16",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_3D79567C_1674_627C_41A0_54E172548A16_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_3D795AB8_1674_6284_41B2_996F167C34AA",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_3D795AB8_1674_6284_41B2_996F167C34AA_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_35E83422_1617_E584_4186_08583C185C08",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_35E83422_1617_E584_4186_08583C185C08_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_3D79D3BF_1674_22FC_4196_7C67831E524C",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_3D7997D7_1674_228C_41AA_D403F76C06DC",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_3D7997D7_1674_228C_41AA_D403F76C06DC_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_3D79DBC0_1674_E284_418F_8382C3D75914",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_3D79DBC0_1674_E284_418F_8382C3D75914_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_5F372E49_160C_6584_4186_1E0077946A37",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_5F372E49_160C_6584_4186_1E0077946A37_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 105,
   "pitch": 0
  },
  "id": "panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787_t.jpg",
  "label": "Intro_video_music_2",
  "video": {
   "height": 720,
   "mp4Url": "media/video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787.mp4",
   "width": 1280,
   "class": "VideoResource"
  },
  "width": 1280,
  "id": "video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787",
  "loop": false,
  "class": "Video",
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "id": "MainViewerVideoPlayer",
  "class": "VideoPlayer"
 },
 {
  "items": [
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D686B9F_9D1A_7407_41D1_0F71077A4E0F, this.MapViewerMapPlayer)",
    "camera": "this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D686B9F_9D1A_7407_41D1_0F71077A4E0F",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A415AEA_1A54_5961_418D_A446E9A0AD27, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_93ECD16C_9D1A_1408_41CC_5A7955E21279, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A4EDAEC_1A54_5962_41AC_C2003F20CB9F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_93EC816C_9D1A_1408_41E1_7C90B297CA64, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_93EC916C_9D1A_1409_41D7_FDE496DE1030, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_EAEC9FF0_E507_80D4_41DE_26E787ED8CCE, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_93ECA16C_9D1A_1409_41C1_593C967CC9A9, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_27B39297_36BD_1CC5_41CA_0DA85ED17A20, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_EF694FB9_F622_67BA_41E1_905F7693BFFD, 'hideEffect', false); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_EF694FB9_F622_67BA_41E1_905F7693BFFD, 'hideEffect', false); if(this.existsKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842')){ if(this.getKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842')) { this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true, -1, this.effect_93EC516D_9D1A_1408_419A_D9C96FF65B82, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_263D2C60_37A3_6E76_41B0_3698A63496C3, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842'); if(this.existsKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')){ if(this.getKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')) { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_93EC716D_9D1A_1408_41D2_155277E79DDD, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_263D6C61_37A3_6E77_419A_EFCCEC8B9C13, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E'); if(this.existsKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')){ if(this.getKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')) { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_93EC116D_9D1A_140B_41D9_4E670145F87F, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_263D9C61_37A3_6E77_41B5_2D93BDF0ECDD, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')",
    "begin": "this.registerKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515', this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515.get('visible')); this.registerKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E', this.Label_E216BE12_F622_684F_41EC_C2D2817E217E.get('visible')); this.registerKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842', this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842.get('visible')); this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A415AEA_1A54_5961_418D_A446E9A0AD27, 'showEffect', false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A4EDAEC_1A54_5962_41AC_C2003F20CB9F, 'showEffect', false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_EAEC9FF0_E507_80D4_41DE_26E787ED8CCE, 'hideEffect', false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_27B39297_36BD_1CC5_41CA_0DA85ED17A20, 'hideEffect', false); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true, -1, this.effect_EF6DD038_F622_38BB_41E2_201047C6007C, 'showEffect', false); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_263D2C60_37A3_6E76_41B0_3698A63496C3, 'hideEffect', false); this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_263D6C61_37A3_6E77_419A_EFCCEC8B9C13, 'hideEffect', false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_263D9C61_37A3_6E77_41B5_2D93BDF0ECDD, 'hideEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D692B9F_9D1A_7407_41DB_66BF360A8FCD, this.MapViewerMapPlayer)",
    "camera": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D692B9F_9D1A_7407_41DB_66BF360A8FCD",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93EC216D_9D1A_140B_41E2_FEE752574F94, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_93EDC16E_9D1A_1408_41BA_908D74B6C33D, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_93EDD16E_9D1A_1408_41E2_5EDC9F03250F, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)",
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_EF6DE039_F622_38BD_41E2_3149DB234972, 'showEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D6A8B9F_9D1A_7407_4165_FD4E26FDE316, this.MapViewerMapPlayer)",
    "camera": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D6A8B9F_9D1A_7407_4165_FD4E26FDE316",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D6A6B9F_9D1A_7407_41D4_AF3D31A21BF8, this.MapViewerMapPlayer)",
    "camera": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D6A6B9F_9D1A_7407_41D4_AF3D31A21BF8",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93EDE16E_9D1A_1409_41D3_90DC6027E731, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D6BEB9F_9D1A_7407_41D8_E6B06AE34985, this.MapViewerMapPlayer)",
    "camera": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D6BEB9F_9D1A_7407_41D8_E6B06AE34985",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93ED816F_9D1A_1407_41D3_5028EE1AC7D1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D6CAB9F_9D1A_7407_41D7_2C341EA4732F, this.MapViewerMapPlayer)",
    "camera": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D6CAB9F_9D1A_7407_41D7_2C341EA4732F",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93EDA16F_9D1A_1407_41D3_0EA2CEF96A5B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D6C0B9F_9D1A_7407_41B2_8CD631310743, this.MapViewerMapPlayer)",
    "camera": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D6C0B9F_9D1A_7407_41B2_8CD631310743",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93EDB170_9D1A_1419_41E1_C7323DAD5BFC, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D6D8B9F_9D1A_7407_41E0_E214B4787F3A, this.MapViewerMapPlayer)",
    "camera": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D6D8B9F_9D1A_7407_41E0_E214B4787F3A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D6D5B9F_9D1A_7407_41E0_93BD4F49F2BD, this.MapViewerMapPlayer)",
    "camera": "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D6D5B9F_9D1A_7407_41E0_93BD4F49F2BD",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93ED4171_9D1A_1418_41CE_C8BDC5894132, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 8, 9); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D6ECB9F_9D1A_7407_41E2_7580EA3ED8CE, this.MapViewerMapPlayer)",
    "camera": "this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2BCB0F16_279C_C426_41BC_BA64377ADA6E",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D6ECB9F_9D1A_7407_41E2_7580EA3ED8CE",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93ED6171_9D1A_141B_41D6_4437622CABB4, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28636F1D_380A_B0E2_41CB_11AF37DE0FBA, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28636F1D_380A_B0E2_41CB_11AF37DE0FBA, 'hideEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D6FAB9F_9D1A_7407_41D9_15658A669DC5, this.MapViewerMapPlayer)",
    "camera": "this.panorama_2BBC8600_279C_C41B_41AA_7212826C3A68_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2BBC8600_279C_C41B_41AA_7212826C3A68",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D6FAB9F_9D1A_7407_41D9_15658A669DC5",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93ED7172_9D1A_1418_418F_B563508C37D0, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_2864FF1E_380A_AF1E_4198_2E923EA5658C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 10, 11); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_2864FF1E_380A_AF1E_4198_2E923EA5658C, 'hideEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D6F7B9F_9D1A_7407_41D9_79F0D75841A8, this.MapViewerMapPlayer)",
    "camera": "this.panorama_2C7FFD45_279C_C425_4191_328659A964C7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C7FFD45_279C_C425_4191_328659A964C7",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D6F7B9F_9D1A_7407_41D9_79F0D75841A8",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93ED0172_9D1A_1418_41DB_C8918147B40B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28647F1E_380A_AF1E_41B0_E5F978729211, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 11, 12); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28647F1E_380A_AF1E_41B0_E5F978729211, 'hideEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D60DB9F_9D1A_7407_41D2_6F003F275020, this.MapViewerMapPlayer)",
    "camera": "this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C01E4C3_279C_C41E_41BA_500E78AED2CA",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D60DB9F_9D1A_7407_41D2_6F003F275020",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93ED1172_9D1A_1419_41E0_ED4C744F61B0, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28651F1F_380A_AF1E_41C2_63F69A3A4274, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 12, 13); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28651F1F_380A_AF1E_41C2_63F69A3A4274, 'hideEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D61AB9F_9D1A_7407_41E0_B085CAE27DE1, this.MapViewerMapPlayer)",
    "camera": "this.panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2CFA4C5B_279C_C42D_41B8_5710E557F686",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D61AB9F_9D1A_7407_41E0_B085CAE27DE1",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93ED3173_9D1A_1418_41D3_7C510C64D50E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28656F1F_380A_AF1E_41AE_25190AD81FE8, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 13, 14); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28656F1F_380A_AF1E_41AE_25190AD81FE8, 'hideEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D611B9F_9D1A_7407_41D5_225BE0D0EBD0, this.MapViewerMapPlayer)",
    "camera": "this.panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2CA6A3E3_279C_DC1E_41B8_8C4020718CD1",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D611B9F_9D1A_7407_41D5_225BE0D0EBD0",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93EC5173_9D1A_141F_41E3_547E5FA03A69, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28661F20_380A_AF22_419F_884C1B4CE9BA, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 14, 15); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28661F20_380A_AF22_419F_884C1B4CE9BA, 'hideEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D62FB9F_9D1A_7407_41E1_CD7538354201, this.MapViewerMapPlayer)",
    "camera": "this.panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2CCFAB45_279C_CC1A_41AA_7703E9A3393E",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D62FB9F_9D1A_7407_41E1_CD7538354201",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93EC6173_9D1A_141F_41DE_B7461B71CA54, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28667F25_380A_AF22_41AA_8AF78832719A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 15, 16); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_28667F25_380A_AF22_41AA_8AF78832719A, 'hideEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D625B9F_9D1A_7407_41BF_D31BEC610B51, this.MapViewerMapPlayer)",
    "camera": "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C00DBFF_279B_43E5_418A_2C175D957337",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D625B9F_9D1A_7407_41BF_D31BEC610B51",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93EC7174_9D1A_1418_41E2_ADD3505EC355, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_2867FF26_380A_AF2E_41CA_F4F651A21969, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 16, 17); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_2867FF26_380A_AF2E_41CA_F4F651A21969, 'hideEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D630B9F_9D1A_7407_41BD_2EE7FA7B4DF6, this.MapViewerMapPlayer)",
    "camera": "this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4AFC9680_161C_2284_41B2_7B463C08A5B7",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D630B9F_9D1A_7407_41BD_2EE7FA7B4DF6",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93EC0174_9D1A_1419_41B0_A13FEF06CE3C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_954C799B_160C_2E84_41B0_AFCA77FBB962, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')){ if(this.getKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')) { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_954C299C_160C_2EBC_41A2_795A81ADC662, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_93EC2174_9D1A_1419_41E1_4160A593C72D, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')",
    "begin": "this.registerKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E', this.Label_E216BE12_F622_684F_41EC_C2D2817E217E.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 17, 18); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_954C799B_160C_2E84_41B0_AFCA77FBB962, 'hideEffect', false); this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_954C299C_160C_2EBC_41A2_795A81ADC662, 'showEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D64DB9F_9D1A_7407_41E0_F0973D74D9D9, this.MapViewerMapPlayer)",
    "camera": "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D64DB9F_9D1A_7407_41E0_F0973D74D9D9",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0B500FD7_1A54_37AE_41A9_19AE8C776076, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_93EDC175_9D1A_1418_41DF_71E9A2407D9E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93EDD175_9D1A_141B_41DB_B40B7CADF8A6, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')){ if(this.getKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')) { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true, -1, this.effect_93EDF175_9D1A_141B_41B7_C05B7891C32A, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_2606DC67_37A3_6E7A_417B_82BAC7B62691, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197'); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_EF6C1355_F62E_F8F5_41C5_B9A5C5CCED3E, 'hideEffect', false); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_EF6C1355_F62E_F8F5_41C5_B9A5C5CCED3E, 'hideEffect', false); if(this.existsKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')){ if(this.getKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')) { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_93ED9176_9D1A_1418_41A9_6E06EE5751A3, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_26077C68_37A3_6E75_41BD_CC48A65FF42C, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E'); if(this.existsKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')){ if(this.getKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')) { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_93EDA176_9D1A_1418_41D2_2C68A42FD06C, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')",
    "begin": "this.registerKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515', this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515.get('visible')); this.registerKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E', this.Label_E216BE12_F622_684F_41EC_C2D2817E217E.get('visible')); this.registerKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197', this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setEndToItemIndex(this.mainPlayList, 18, 19); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0B500FD7_1A54_37AE_41A9_19AE8C776076, 'showEffect', false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD, 'hideEffect', false); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_2606DC67_37A3_6E7A_417B_82BAC7B62691, 'hideEffect', false); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true, -1, this.effect_EF6CE355_F62E_F8F5_41E6_CBD8B4202E02, 'showEffect', false); this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_26077C68_37A3_6E75_41BD_CC48A65FF42C, 'hideEffect', false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9, 'hideEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D635B9F_9D1A_7407_41D0_C7FBCFA408C3, this.MapViewerMapPlayer)",
    "camera": "this.panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3D78E6E3_1675_E284_41B0_55CDC9391AE2",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D635B9F_9D1A_7407_41D0_C7FBCFA408C3",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A78BB17_1A54_58AF_41B2_578B2CDC47A4, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_93EDB176_9D1A_1419_41CE_3369732AA0E1, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A78CB17_1A54_58AF_419D_7A41EB5E63C2, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_93ED4176_9D1A_1419_41CE_7B956099B5C1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setEndToItemIndex(this.mainPlayList, 19, 20); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A78BB17_1A54_58AF_41B2_578B2CDC47A4, 'showEffect', false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A78CB17_1A54_58AF_419D_7A41EB5E63C2, 'showEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D643B9F_9D1A_7407_41D8_D0F60C3B90A0, this.MapViewerMapPlayer)",
    "camera": "this.panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_164C3812_1AA2_E5AB_41AE_FFACC87CDC56",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D643B9F_9D1A_7407_41D8_D0F60C3B90A0",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_2901D6DE_3812_BF51_41AE_CDB2AB2279BC, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_93ED6177_9D1A_1418_41DE_8755BB74693F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')){ if(this.getKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')) { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true, -1, this.effect_93ED7177_9D1A_1418_41D2_3A2A5E03748E, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_265ED5C6_37AF_1EBD_41C7_FC5F42967E65, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197'); if(this.existsKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842')){ if(this.getKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842')) { this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true, -1, this.effect_93ED0177_9D1A_1407_41B5_DA3BCD3879BF, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_265F15C6_37AF_1EBA_41BA_48E8514F715E, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842'); if(this.existsKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')){ if(this.getKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')) { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_93ED1177_9D1A_1407_41BF_DB86F7FFA685, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_265F65C6_37AF_1EBA_41BB_44A1D43822E5, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E'); if(this.existsKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')){ if(this.getKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')) { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_93ED2178_9D1A_1408_41BD_5327EDD94DB0, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_265FB5C7_37AF_1EBB_41C2_D284D8411ADC, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')",
    "begin": "this.registerKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515', this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515.get('visible')); this.registerKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E', this.Label_E216BE12_F622_684F_41EC_C2D2817E217E.get('visible')); this.registerKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842', this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842.get('visible')); this.registerKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197', this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 20, 21); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_2901D6DE_3812_BF51_41AE_CDB2AB2279BC, 'showEffect', false); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_265ED5C6_37AF_1EBD_41C7_FC5F42967E65, 'hideEffect', false); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_265F15C6_37AF_1EBA_41BA_48E8514F715E, 'hideEffect', false); this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_265F65C6_37AF_1EBA_41BB_44A1D43822E5, 'hideEffect', false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_265FB5C7_37AF_1EBB_41C2_D284D8411ADC, 'hideEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D65BB9F_9D1A_7407_41C9_1C39F869D1CF, this.MapViewerMapPlayer)",
    "camera": "this.panorama_474FEAEC_160C_229C_41B5_A893F886FCB3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_474FEAEC_160C_229C_41B5_A893F886FCB3",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D65BB9F_9D1A_7407_41C9_1C39F869D1CF",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7CFB12_1A54_58A6_41A1_E0F17F3A1142, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_93ED3178_9D1A_1408_41B2_8E377F325E85, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7C1B12_1A54_58A6_41AF_D15E3F52DC69, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_93EED178_9D1A_1409_41BB_6C3358FE6EC8, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setEndToItemIndex(this.mainPlayList, 21, 22); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7CFB12_1A54_58A6_41A1_E0F17F3A1142, 'showEffect', false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7C1B12_1A54_58A6_41AF_D15E3F52DC69, 'showEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D650B9F_9D1A_7407_41DB_0FFCCEAB8F22, this.MapViewerMapPlayer)",
    "camera": "this.panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3D7952C8_1674_2284_41AD_55A5A100BAEF",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D650B9F_9D1A_7407_41DB_0FFCCEAB8F22",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7B8B16_1A54_58A1_41A7_2BF2E9F05601, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_93EEE178_9D1A_1409_41C7_6651D3CBA08A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7B3B16_1A54_58AE_41AD_F6E2596D1449, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_93EEF179_9D1A_1408_41DA_3428D62FA059, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setEndToItemIndex(this.mainPlayList, 22, 23); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7B8B16_1A54_58A1_41A7_2BF2E9F05601, 'showEffect', false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7B3B16_1A54_58AE_41AD_F6E2596D1449, 'showEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D663B9F_9D1A_7407_41D7_3853810E3D80, this.MapViewerMapPlayer)",
    "camera": "this.panorama_3D79567C_1674_627C_41A0_54E172548A16_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3D79567C_1674_627C_41A0_54E172548A16",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D663B9F_9D1A_7407_41D7_3853810E3D80",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7DCB14_1A54_58A2_41A0_7589B647DC76, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_93EE8179_9D1A_140B_41C4_608EE805FFE1, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7D6B15_1A54_58A3_41B2_1638439C39F6, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_93EE9179_9D1A_140B_41B6_C99817EA0837, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setEndToItemIndex(this.mainPlayList, 23, 24); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7DCB14_1A54_58A2_41A0_7589B647DC76, 'showEffect', false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7D6B15_1A54_58A3_41B2_1638439C39F6, 'showEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D67AB9F_9D1A_7407_41DD_F2DC330FD0CF, this.MapViewerMapPlayer)",
    "camera": "this.panorama_3D795AB8_1674_6284_41B2_996F167C34AA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3D795AB8_1674_6284_41B2_996F167C34AA",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D67AB9F_9D1A_7407_41DD_F2DC330FD0CF",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A4BDAF9_1A54_5962_41B5_D8C782C19266, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_93EEB17A_9D1A_1408_41D3_17BBCF68A364, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A4B0AFA_1A54_5961_41A1_87E1ED6C15A7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_93EE517A_9D1A_1408_41E0_4D448A494010, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setEndToItemIndex(this.mainPlayList, 24, 25); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A4BDAF9_1A54_5962_41B5_D8C782C19266, 'showEffect', false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A4B0AFA_1A54_5961_41A1_87E1ED6C15A7, 'showEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D670B9F_9D1A_7407_41E2_A66557821992, this.MapViewerMapPlayer)",
    "camera": "this.panorama_35E83422_1617_E584_4186_08583C185C08_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_35E83422_1617_E584_4186_08583C185C08",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D670B9F_9D1A_7407_41E2_A66557821992",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7C1B14_1A54_58A1_4182_E91E1718D19E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_93EE717A_9D1A_1409_41D5_E33683C53025, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7C5B14_1A54_58A1_4196_8491F9269B01, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_93EE017A_9D1A_1409_41B3_76FB81D354FF, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setEndToItemIndex(this.mainPlayList, 25, 26); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7C1B14_1A54_58A1_4182_E91E1718D19E, 'showEffect', false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7C5B14_1A54_58A1_4196_8491F9269B01, 'showEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D98FB9F_9D1A_7407_41D0_BBCBDA644336, this.MapViewerMapPlayer)",
    "camera": "this.panorama_3D79D3BF_1674_22FC_4196_7C67831E524C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3D79D3BF_1674_22FC_4196_7C67831E524C",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D98FB9F_9D1A_7407_41D0_BBCBDA644336",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A4BFAF8_1A54_5961_419C_A651C34FFF29, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_93ED817B_9D1A_1408_41D6_E1B389D42E7C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A4B1AF8_1A54_5961_4192_288452C55C7E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_93ED917B_9D1A_140F_41E3_205F3286A622, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setEndToItemIndex(this.mainPlayList, 26, 27); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A4BFAF8_1A54_5961_419C_A651C34FFF29, 'showEffect', false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A4B1AF8_1A54_5961_4192_288452C55C7E, 'showEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D999B9F_9D1A_7407_41DB_0DC2953EBDBB, this.MapViewerMapPlayer)",
    "camera": "this.panorama_3D7997D7_1674_228C_41AA_D403F76C06DC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3D7997D7_1674_228C_41AA_D403F76C06DC",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D999B9F_9D1A_7407_41DB_0DC2953EBDBB",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7DCB13_1A54_58A7_41B9_176107C63C7F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_93EDA17B_9D1A_140F_41E1_72E58750FFB4, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7D0B13_1A54_58A6_41A3_F79144E8BD4D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_93EDB17C_9D1A_1408_419A_385F82CA43E7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setEndToItemIndex(this.mainPlayList, 27, 28); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7DCB13_1A54_58A7_41B9_176107C63C7F, 'showEffect', false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7D0B13_1A54_58A6_41A3_F79144E8BD4D, 'showEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D990B9F_9D1A_7407_41E1_E595EB25A706, this.MapViewerMapPlayer)",
    "camera": "this.panorama_3D79DBC0_1674_E284_418F_8382C3D75914_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3D79DBC0_1674_E284_418F_8382C3D75914",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D990B9F_9D1A_7407_41E1_E595EB25A706",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7ADB15_1A54_58A2_41AB_CE902CEB2D2F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_93ED417C_9D1A_1409_41BF_1EB5B4AF49DF, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7A0B15_1A54_58A2_41AB_A63D9E32E6AE, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_93ED617C_9D1A_1409_41DF_9105ECCE483D, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')",
    "begin": "this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setEndToItemIndex(this.mainPlayList, 28, 29); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A7ADB15_1A54_58A2_41AB_CE902CEB2D2F, 'showEffect', false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A7A0B15_1A54_58A2_41AB_A63D9E32E6AE, 'showEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D9ACB9F_9D1A_7407_41E1_429A82859944, this.MapViewerMapPlayer)",
    "camera": "this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3D7BE34E_1674_E39C_41A3_CC28FC1FC1C1",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D9ACB9F_9D1A_7407_41E1_429A82859944",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A751B07_1A54_58AF_41B6_994BD0BB5150, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_93ED017D_9D1A_1408_41E0_44597C1E2E44, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A72BB07_1A54_58AF_41B9_E0139F2ABDA7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_93ED217D_9D1A_140B_41DE_F8B8F9CD8733, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')){ if(this.getKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')) { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true, -1, this.effect_93ED317D_9D1A_140B_41E3_901A8943211F, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_28250014_3802_F537_4188_3C7B2FC7EB36, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197'); if(this.existsKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842')){ if(this.getKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842')) { this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true, -1, this.effect_93EED17D_9D1A_140B_41DE_87DC670FFF83, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_2827C014_3802_F537_41C3_FC95DAE82DA1, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842'); if(this.existsKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')){ if(this.getKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')) { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_93EEF17E_9D1A_1408_418C_36776761794A, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_28260015_3802_F531_41C1_E14F08D374DD, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E'); if(this.existsKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')){ if(this.getKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')) { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_93EE817E_9D1A_1408_41CF_006906C8C769, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_28264015_3802_F531_4190_725BE50AAA5D, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')",
    "begin": "this.registerKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515', this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515.get('visible')); this.registerKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E', this.Label_E216BE12_F622_684F_41EC_C2D2817E217E.get('visible')); this.registerKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842', this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842.get('visible')); this.registerKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197', this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setEndToItemIndex(this.mainPlayList, 29, 30); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A751B07_1A54_58AF_41B6_994BD0BB5150, 'showEffect', false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A72BB07_1A54_58AF_41B9_E0139F2ABDA7, 'showEffect', false); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_28250014_3802_F537_4188_3C7B2FC7EB36, 'hideEffect', false); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_2827C014_3802_F537_41C3_FC95DAE82DA1, 'hideEffect', false); this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_28260015_3802_F531_41C1_E14F08D374DD, 'hideEffect', false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_28264015_3802_F531_4190_725BE50AAA5D, 'hideEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D9BFB9F_9D1A_7407_41E0_1125063E89E6, this.MapViewerMapPlayer)",
    "camera": "this.panorama_5F372E49_160C_6584_4186_1E0077946A37_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5F372E49_160C_6584_4186_1E0077946A37",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D9BFB9F_9D1A_7407_41E0_1125063E89E6",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A4A2AF7_1A54_596F_41A0_A23BA651ABF1, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_93EEB17E_9D1A_1409_41D8_851A467BFE28, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A4A5AF7_1A54_596E_4160_0BC7A9E29E78, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_93EE417F_9D1A_1408_41DF_5C38B0C5C1E3, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_93EE517F_9D1A_1408_41CC_7CA3C5E2ABBB, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_4DCC9BCA_5DE4_1D9E_4189_6DD46A997BAE, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); if(this.existsKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')){ if(this.getKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')) { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true, -1, this.effect_93EE717F_9D1A_1408_41B6_51C37C2C4F76, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_265485CE_37AF_1E4D_41BF_B2096F69C00B, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197'); if(this.existsKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842')){ if(this.getKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842')) { this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true, -1, this.effect_93EE117F_9D1A_1407_41D0_0B0A05AAC4F9, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_2654D5CE_37AF_1E4D_41B6_E558742F5F68, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842'); if(this.existsKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')){ if(this.getKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')) { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_93EE217F_9D1A_1407_41C6_54A34F648065, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_265555CE_37AF_1E4A_41C8_58F45ECAFC24, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E'); if(this.existsKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')){ if(this.getKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')) { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_93EFD180_9D1A_14F8_41D2_FD2543B5284F, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2653E5CF_37AF_1E4B_41CB_C2FB1B6AD4FB, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')",
    "begin": "this.registerKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515', this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515.get('visible')); this.registerKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E', this.Label_E216BE12_F622_684F_41EC_C2D2817E217E.get('visible')); this.registerKey('visibility_Label_E253EC4C_F622_28DA_41DB_546DF82EE842', this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842.get('visible')); this.registerKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197', this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197.get('visible')); this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setEndToItemIndex(this.mainPlayList, 30, 31); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0A4A2AF7_1A54_596F_41A0_A23BA651ABF1, 'showEffect', false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_0A4A5AF7_1A54_596E_4160_0BC7A9E29E78, 'showEffect', false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_4DCC9BCA_5DE4_1D9E_4189_6DD46A997BAE, 'hideEffect', false); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_265485CE_37AF_1E4D_41BF_B2096F69C00B, 'hideEffect', false); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_2654D5CE_37AF_1E4D_41B6_E558742F5F68, 'hideEffect', false); this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_265555CE_37AF_1E4A_41C8_58F45ECAFC24, 'hideEffect', false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2653E5CF_37AF_1E4B_41CB_C2FB1B6AD4FB, 'hideEffect', false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D9B4BAF_9D1A_7408_41DD_3ADC3BDB77EF, this.MapViewerMapPlayer)",
    "camera": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D9B4BAF_9D1A_7408_41DD_3ADC3BDB77EF",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93EF8180_9D1A_14F8_41B0_219E02BC3164, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 31, 32); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D9C2BAF_9D1A_7408_41E1_C06EE9B93090, this.MapViewerMapPlayer)",
    "camera": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D9C2BAF_9D1A_7408_41E1_C06EE9B93090",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93EFA180_9D1A_14F9_41D3_325ECB4F858E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 32, 33); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D9DFBAF_9D1A_7408_41BB_5DFB27AFBE95, this.MapViewerMapPlayer)",
    "camera": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D9DFBAF_9D1A_7408_41BB_5DFB27AFBE95",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93EF5181_9D1A_14FB_41D4_15B3DD532F94, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 33, 34); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D9D7BAF_9D1A_7408_41CA_31C650099D9F, this.MapViewerMapPlayer)",
    "camera": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D9D7BAF_9D1A_7408_41CA_31C650099D9F",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93EF7181_9D1A_14FB_41DF_65E62D12AF38, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 34, 35); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D9E3BAF_9D1A_7408_41B0_5D3E75BF1FA0, this.MapViewerMapPlayer)",
    "camera": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D9E3BAF_9D1A_7408_41B0_5D3E75BF1FA0",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93EE9182_9D1A_14F9_41DD_DA670FA4037C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.mainPlayList, 35, 36); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D9F9BAF_9D1A_7408_41D2_FFFF4D451BE3, this.MapViewerMapPlayer)",
    "camera": "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D9F9BAF_9D1A_7408_41D2_FFFF4D451BE3",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8D9F1BAF_9D1A_7408_41E1_B05FF33ED4BD, this.MapViewerMapPlayer)",
    "camera": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8D9F1BAF_9D1A_7408_41E1_B05FF33ED4BD",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 38, 0)",
    "media": "this.video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 38, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 38, this.video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "camera": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 0, 1); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_EF6DE039_F622_38BD_41E2_3149DB234972, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93EFC183_9D1A_14FF_41C7_9FED9C3D0A47, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_93EFD183_9D1A_14FF_41D7_FC30261C9323, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_93EFF184_9D1A_14F8_41D7_14D3F0CD4134, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)"
   },
   {
    "camera": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 1, 2)",
    "media": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 2, 3); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93EFA184_9D1A_14F8_41DE_D45AA48DDD35, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')"
   },
   {
    "camera": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 3, 4); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93EF6185_9D1A_14F8_41C4_1F5DA7C880AD, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')"
   },
   {
    "camera": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 4, 5); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93EF0185_9D1A_14FB_41D4_14806FC3697F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')"
   },
   {
    "camera": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 5, 6); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_93EF3185_9D1A_14FB_41B2_56F136453CD7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')"
   },
   {
    "camera": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 6, 0)",
    "media": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid90824FBA_9D16_2C09_41CD_DBE08869A640VideoPlayer)",
    "media": "this.video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787",
    "class": "VideoPlayListItem",
    "player": {
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontWeight": "normal",
      "toolTipFontFamily": "Arial",
      "paddingRight": 0,
      "toolTipPaddingTop": 4,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadShadow": true,
      "progressBackgroundColorRatios": [
       0
      ],
      "toolTipTextShadowOpacity": 0,
      "progressBarBorderRadius": 0,
      "playbackBarLeft": 0,
      "playbackBarHeadHeight": 15,
      "progressBottom": 2,
      "progressBarBorderSize": 0,
      "toolTipPaddingLeft": 6,
      "paddingLeft": 0,
      "toolTipPaddingRight": 6,
      "progressHeight": 10,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBorderColor": "#000000",
      "shadow": false,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 0,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBackgroundColorDirection": "vertical",
      "paddingBottom": 0,
      "playbackBarBorderColor": "#FFFFFF",
      "toolTipOpacity": 1,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipShadowColor": "#333333",
      "paddingTop": 0,
      "playbackBarProgressBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadBorderSize": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadShadowOpacity": 0.7,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipTextShadowBlurRadius": 3,
      "progressBorderSize": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "borderSize": 0,
      "playbackBarRight": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "toolTipFontStyle": "normal",
      "height": "100%",
      "progressBorderRadius": 0,
      "width": "100%",
      "playbackBarHeadOpacity": 1,
      "toolTipShadowSpread": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBorderRadius": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "minHeight": 50,
      "playbackBarOpacity": 1,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "borderRadius": 0,
      "toolTipFontSize": 12,
      "playbackBarHeight": 10,
      "id": "viewer_uid8D264B4A_9D1A_7409_41DE_E5D0C57483F3",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "progressBorderColor": "#000000",
      "minWidth": 100,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarBottom": 0,
      "progressRight": 0,
      "toolTipShadowBlurRadius": 3,
      "progressBarOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipPaddingBottom": 4,
      "toolTipFontColor": "#606060",
      "toolTipTextShadowColor": "#000000",
      "playbackBarHeadWidth": 6,
      "toolTipShadowOpacity": 1,
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderRadius": 3,
      "progressLeft": 0,
      "toolTipBorderSize": 1,
      "progressOpacity": 1
     },
     "id": "viewer_uid90824FBA_9D16_2C09_41CD_DBE08869A640VideoPlayer",
     "class": "VideoPlayer"
    },
    "start": "this.viewer_uid90824FBA_9D16_2C09_41CD_DBE08869A640VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_90850FBA_9D16_2C09_41D1_679953215E48, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_90850FBA_9D16_2C09_41D1_679953215E48, 0, this.video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787)"
   }
  ],
  "id": "playList_90850FBA_9D16_2C09_41D1_679953215E48",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid908AFFCA_9D16_2C09_4196_BD8FC3998886VideoPlayer)",
    "media": "this.video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787",
    "class": "VideoPlayListItem",
    "player": {
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontWeight": "normal",
      "toolTipFontFamily": "Arial",
      "paddingRight": 0,
      "toolTipPaddingTop": 4,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadShadow": true,
      "progressBackgroundColorRatios": [
       0
      ],
      "toolTipTextShadowOpacity": 0,
      "progressBarBorderRadius": 0,
      "playbackBarLeft": 0,
      "playbackBarHeadHeight": 15,
      "progressBottom": 2,
      "progressBarBorderSize": 0,
      "toolTipPaddingLeft": 6,
      "paddingLeft": 0,
      "toolTipPaddingRight": 6,
      "progressHeight": 10,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBorderColor": "#000000",
      "shadow": false,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 0,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBackgroundColorDirection": "vertical",
      "paddingBottom": 0,
      "playbackBarBorderColor": "#FFFFFF",
      "toolTipOpacity": 1,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipShadowColor": "#333333",
      "paddingTop": 0,
      "playbackBarProgressBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadBorderSize": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadShadowOpacity": 0.7,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipTextShadowBlurRadius": 3,
      "progressBorderSize": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "borderSize": 0,
      "playbackBarRight": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "toolTipFontStyle": "normal",
      "height": "100%",
      "progressBorderRadius": 0,
      "width": "100%",
      "playbackBarHeadOpacity": 1,
      "toolTipShadowSpread": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBorderRadius": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "minHeight": 50,
      "playbackBarOpacity": 1,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "borderRadius": 0,
      "toolTipFontSize": 12,
      "playbackBarHeight": 10,
      "id": "viewer_uid8D5A1B5A_9D1A_7409_41DA_A9A187BFB3CB",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "progressBorderColor": "#000000",
      "minWidth": 100,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarBottom": 0,
      "progressRight": 0,
      "toolTipShadowBlurRadius": 3,
      "progressBarOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipPaddingBottom": 4,
      "toolTipFontColor": "#606060",
      "toolTipTextShadowColor": "#000000",
      "playbackBarHeadWidth": 6,
      "toolTipShadowOpacity": 1,
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderRadius": 3,
      "progressLeft": 0,
      "toolTipBorderSize": 1,
      "progressOpacity": 1
     },
     "id": "viewer_uid908AFFCA_9D16_2C09_4196_BD8FC3998886VideoPlayer",
     "class": "VideoPlayer"
    },
    "start": "this.viewer_uid908AFFCA_9D16_2C09_4196_BD8FC3998886VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_90D4900F_9D16_3407_41E3_176610C47177, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_90D4900F_9D16_3407_41E3_176610C47177, 0, this.video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787)"
   }
  ],
  "id": "PlayList_90D4900F_9D16_3407_41E3_176610C47177",
  "class": "PlayList"
 },
 {
  "thumbnailUrl": "media/video_14581B06_1AFD_10E9_41B7_EBE2377910B5_t.jpg",
  "label": "Rotonda_LQ_short_2",
  "video": {
   "height": 720,
   "mp4Url": "media/video_14581B06_1AFD_10E9_41B7_EBE2377910B5.mp4",
   "width": 1280,
   "class": "VideoResource"
  },
  "width": 1280,
  "id": "video_14581B06_1AFD_10E9_41B7_EBE2377910B5",
  "loop": false,
  "class": "Video",
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid90B10FDA_9D16_2C08_41E1_CAE70A70D59EVideoPlayer)",
    "media": "this.video_14581B06_1AFD_10E9_41B7_EBE2377910B5",
    "class": "VideoPlayListItem",
    "player": {
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontWeight": "normal",
      "toolTipFontFamily": "Arial",
      "paddingRight": 0,
      "toolTipPaddingTop": 4,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadShadow": true,
      "progressBackgroundColorRatios": [
       0
      ],
      "toolTipTextShadowOpacity": 0,
      "progressBarBorderRadius": 0,
      "playbackBarLeft": 0,
      "playbackBarHeadHeight": 15,
      "progressBottom": 2,
      "progressBarBorderSize": 0,
      "toolTipPaddingLeft": 6,
      "paddingLeft": 0,
      "toolTipPaddingRight": 6,
      "progressHeight": 10,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBorderColor": "#000000",
      "shadow": false,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderSize": 0,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBackgroundColorDirection": "vertical",
      "paddingBottom": 0,
      "playbackBarBorderColor": "#FFFFFF",
      "toolTipOpacity": 1,
      "class": "ViewerArea",
      "transitionMode": "blending",
      "toolTipShadowColor": "#333333",
      "paddingTop": 0,
      "playbackBarProgressBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadBorderSize": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadShadowOpacity": 0.7,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipTextShadowBlurRadius": 3,
      "progressBorderSize": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "borderSize": 0,
      "playbackBarRight": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "toolTipFontStyle": "normal",
      "height": "100%",
      "progressBorderRadius": 0,
      "width": "100%",
      "playbackBarHeadOpacity": 1,
      "toolTipShadowSpread": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBorderRadius": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "minHeight": 50,
      "playbackBarOpacity": 1,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "borderRadius": 0,
      "toolTipFontSize": 12,
      "playbackBarHeight": 10,
      "id": "viewer_uid8D45FB80_9D1A_74F8_41C6_FF28EF471FA0",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "progressBorderColor": "#000000",
      "minWidth": 100,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarBottom": 0,
      "progressRight": 0,
      "toolTipShadowBlurRadius": 3,
      "progressBarOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipPaddingBottom": 4,
      "toolTipFontColor": "#606060",
      "toolTipTextShadowColor": "#000000",
      "playbackBarHeadWidth": 6,
      "toolTipShadowOpacity": 1,
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderRadius": 3,
      "progressLeft": 0,
      "toolTipBorderSize": 1,
      "progressOpacity": 1
     },
     "id": "viewer_uid90B10FDA_9D16_2C08_41E1_CAE70A70D59EVideoPlayer",
     "class": "VideoPlayer"
    },
    "start": "this.viewer_uid90B10FDA_9D16_2C08_41E1_CAE70A70D59EVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_90D4A00F_9D16_3407_4182_E05A73F99347, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_90D4A00F_9D16_3407_4182_E05A73F99347, 0, this.video_14581B06_1AFD_10E9_41B7_EBE2377910B5)"
   }
  ],
  "id": "PlayList_90D4A00F_9D16_3407_4182_E05A73F99347",
  "class": "PlayList"
 },
 "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_8D77CB90_9D1A_7418_41CE_80424A826C11",
  "class": "PlayList"
 },
 "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_8D771B90_9D1A_7418_41BE_625E988963A7",
  "class": "PlayList"
 },
 "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_8D770B90_9D1A_7418_41C7_A3A39CFF0480",
  "class": "PlayList"
 },
 "this.map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_8D68AB9F_9D1A_7407_41DB_EF3CFE3676D5",
  "class": "PlayList"
 },
 {
  "backgroundColorRatios": [],
  "titlePaddingBottom": 5,
  "verticalAlign": "middle",
  "footerBackgroundColorDirection": "vertical",
  "backgroundColor": [],
  "paddingRight": 0,
  "titleFontColor": "#000000",
  "headerPaddingRight": 0,
  "modal": true,
  "closeButtonIconLineWidth": 2,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "headerPaddingLeft": 10,
  "gap": 10,
  "headerBackgroundColorDirection": "vertical",
  "titleFontFamily": "Arial",
  "paddingLeft": 0,
  "titleFontSize": 14,
  "veilColorRatios": [
   0,
   1
  ],
  "bodyBackgroundOpacity": 0,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "shadowVerticalLength": 0,
  "bodyPaddingTop": 0,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "horizontalAlign": "center",
  "title": "",
  "closeButtonIconHeight": 20,
  "veilColorDirection": "horizontal",
  "backgroundColorDirection": "vertical",
  "layout": "vertical",
  "paddingBottom": 0,
  "titlePaddingTop": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "shadowColor": "#000000",
  "class": "Window",
  "paddingTop": 0,
  "closeButtonBackgroundColor": [],
  "headerBorderSize": 0,
  "titleFontStyle": "normal",
  "closeButtonIconColor": "#B2B2B2",
  "shadowOpacity": 0.5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerPaddingTop": 10,
  "bodyBackgroundColorDirection": "vertical",
  "veilOpacity": 0.4,
  "children": [
   "this.viewer_uid8D264B4A_9D1A_7409_41DE_E5D0C57483F3"
  ],
  "scrollBarVisible": "rollOver",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "borderSize": 0,
  "width": 400,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "height": 600,
  "closeButtonPressedIconColor": "#FFFFFF",
  "shadowHorizontalLength": 3,
  "contentOpaque": false,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "footerHeight": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "bodyPaddingLeft": 0,
  "closeButtonBorderRadius": 11,
  "scrollBarMargin": 2,
  "minHeight": 20,
  "headerBorderColor": "#000000",
  "bodyPaddingRight": 0,
  "closeButtonPressedIconLineWidth": 3,
  "borderRadius": 5,
  "headerBackgroundOpacity": 0,
  "titleFontWeight": "normal",
  "bodyPaddingBottom": 0,
  "closeButtonRollOverBackgroundColor": [],
  "closeButtonIconWidth": 20,
  "close": "this.playList_90850FBA_9D16_2C09_41D1_679953215E48.set('selectedIndex', -1);",
  "shadowBlurRadius": 6,
  "titleTextDecoration": "none",
  "closeButtonBackgroundColorRatios": [],
  "backgroundOpacity": 1,
  "shadowSpread": 1,
  "titlePaddingLeft": 5,
  "id": "window_86D78109_88BC_A049_41BB_B0E11F92E0CE",
  "footerBackgroundOpacity": 0,
  "scrollBarColor": "#000000",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPressedBackgroundColor": [],
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "minWidth": 20,
  "overflow": "scroll",
  "headerVerticalAlign": "middle",
  "headerPaddingBottom": 5,
  "titlePaddingRight": 5,
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  }
 },
 {
  "duration": 1000,
  "easing": "linear",
  "id": "effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42",
  "class": "FadeInEffect"
 },
 {
  "duration": 1000,
  "easing": "linear",
  "id": "effect_D3728F7A_DF8C_960C_417C_830810DD2653",
  "class": "FadeOutEffect"
 },
 "this.popup_D67F207D_DCE6_3169_41C5_15346C9DD144",
 {
  "levels": [
   {
    "height": 1667,
    "width": 2500,
    "url": "media/popup_D67F207D_DCE6_3169_41C5_15346C9DD144_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1365,
    "width": 2048,
    "url": "media/popup_D67F207D_DCE6_3169_41C5_15346C9DD144_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 682,
    "width": 1024,
    "url": "media/popup_D67F207D_DCE6_3169_41C5_15346C9DD144_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 341,
    "width": 512,
    "url": "media/popup_D67F207D_DCE6_3169_41C5_15346C9DD144_0_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_D0B2815B_DCEA_70A9_41E8_E7BBC7DE2A6B",
  "class": "ImageResource"
 },
 {
  "backgroundColorRatios": [],
  "titlePaddingBottom": 5,
  "verticalAlign": "middle",
  "closeButtonBackgroundOpacity": 0.3,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "backgroundColor": [],
  "paddingRight": 0,
  "headerPaddingRight": 0,
  "modal": true,
  "closeButtonIconLineWidth": 5,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "headerPaddingLeft": 10,
  "gap": 10,
  "headerBackgroundColorDirection": "vertical",
  "titleFontFamily": "Arial",
  "closeButtonBorderSize": 0,
  "paddingLeft": 0,
  "titleFontSize": 14,
  "veilColorRatios": [
   0,
   1
  ],
  "bodyBackgroundOpacity": 0,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "bodyPaddingTop": 0,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonIconHeight": 20,
  "backgroundColorDirection": "vertical",
  "layout": "vertical",
  "paddingBottom": 0,
  "titlePaddingTop": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingTop": 10,
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "class": "Window",
  "paddingTop": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonPaddingBottom": 5,
  "closeButtonIconColor": "#000000",
  "shadowOpacity": 0.5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "veilOpacity": 0.4,
  "children": [
   "this.viewer_uid8D5A1B5A_9D1A_7409_41DA_A9A187BFB3CB"
  ],
  "scrollBarVisible": "rollOver",
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "borderSize": 0,
  "closeButtonPressedIconColor": "#888888",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "shadowVerticalLength": 0,
  "contentOpaque": false,
  "closeButtonRollOverIconColor": "#666666",
  "footerHeight": 5,
  "closeButtonPaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "closeButtonBackgroundColorDirection": "vertical",
  "bodyPaddingLeft": 0,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonBorderRadius": 0,
  "scrollBarMargin": 2,
  "minHeight": 20,
  "closeButtonRollOverBorderSize": 0,
  "bodyPaddingRight": 0,
  "closeButtonPressedIconLineWidth": 5,
  "borderRadius": 5,
  "headerBackgroundOpacity": 0,
  "bodyPaddingBottom": 0,
  "closeButtonIconWidth": 20,
  "close": "this.PlayList_90D4900F_9D16_3407_41E3_176610C47177.set('selectedIndex', -1);",
  "shadowBlurRadius": 6,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundOpacity": 1,
  "shadowSpread": 1,
  "titlePaddingLeft": 5,
  "id": "window_968AF544_9D16_3C79_41E0_AC79EAFD2842",
  "footerBackgroundOpacity": 0,
  "scrollBarColor": "#000000",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "minWidth": 20,
  "overflow": "scroll",
  "headerVerticalAlign": "middle",
  "closeButtonPaddingTop": 5,
  "headerPaddingBottom": 5,
  "titlePaddingRight": 5,
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  }
 },
 "this.popup_86BC6426_88BB_A07B_41C5_61F799090724",
 "this.popup_D60305E4_DCEA_D39F_419B_D9B149482827",
 {
  "levels": [
   {
    "height": 800,
    "width": 1200,
    "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 682,
    "width": 1024,
    "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 341,
    "width": 512,
    "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_D09C8172_DCEA_737B_41C7_76727B821C90",
  "class": "ImageResource"
 },
 "this.popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C",
 "this.popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6",
 "this.popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865",
 {
  "levels": [
   {
    "height": 936,
    "width": 1280,
    "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 748,
    "width": 1024,
    "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 374,
    "width": 512,
    "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_E252A6BD_EF1D_EC9A_41D3_31F4A8966575",
  "class": "ImageResource"
 },
 "this.popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43",
 {
  "levels": [
   {
    "height": 1236,
    "width": 2000,
    "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 632,
    "width": 1024,
    "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 316,
    "width": 512,
    "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_E253E6BD_EF1D_EC9A_41EA_C503E65D3053",
  "class": "ImageResource"
 },
 "this.popup_3CC23B7F_107F_4540_4180_ABF478E71F9A",
 {
  "levels": [
   {
    "height": 800,
    "width": 1067,
    "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 767,
    "width": 1024,
    "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 383,
    "width": 512,
    "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_20FB6245_107F_4740_41A8_9C0A46A92B4D",
  "class": "ImageResource"
 },
 "this.popup_3BBE3C5B_107F_C340_4178_756995F5135C",
 "this.popup_209897EC_11B3_4D40_41A2_837DB50E3A59",
 "this.popup_4B7F179F_4511_AA24_41C8_4D4C956B0736",
 {
  "levels": [
   {
    "height": 896,
    "width": 1600,
    "url": "media/popup_4B7F179F_4511_AA24_41C8_4D4C956B0736_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 573,
    "width": 1024,
    "url": "media/popup_4B7F179F_4511_AA24_41C8_4D4C956B0736_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 286,
    "width": 512,
    "url": "media/popup_4B7F179F_4511_AA24_41C8_4D4C956B0736_0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_4AF68F62_4510_BA1D_4190_FDDC2A486BCE",
  "class": "ImageResource"
 },
 "this.popup_4AC31A49_1614_6D84_41A8_70E2088E8A0A",
 {
  "levels": [
   {
    "height": 2593,
    "width": 3890,
    "url": "media/popup_4AC31A49_1614_6D84_41A8_70E2088E8A0A_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1365,
    "width": 2047,
    "url": "media/popup_4AC31A49_1614_6D84_41A8_70E2088E8A0A_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 682,
    "width": 1023,
    "url": "media/popup_4AC31A49_1614_6D84_41A8_70E2088E8A0A_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 341,
    "width": 511,
    "url": "media/popup_4AC31A49_1614_6D84_41A8_70E2088E8A0A_0_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_69DDF38B_160C_2284_41B3_8E5E6CAD0985",
  "class": "ImageResource"
 },
 "this.popup_4F3F1249_1634_DD84_41B1_1B09E44C11EB",
 "this.popup_4AC282AC_160C_E29C_41A5_60234192F5B3",
 {
  "levels": [
   {
    "height": 1189,
    "width": 1687,
    "url": "media/popup_4AC282AC_160C_E29C_41A5_60234192F5B3_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 721,
    "width": 1023,
    "url": "media/popup_4AC282AC_160C_E29C_41A5_60234192F5B3_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 360,
    "width": 511,
    "url": "media/popup_4AC282AC_160C_E29C_41A5_60234192F5B3_0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_69C4237A_160C_2384_41A8_784DA62FB6ED",
  "class": "ImageResource"
 },
 "this.popup_72B251D5_160C_5E8C_418F_F3A0A38135F3",
 "this.popup_4AF7186F_1614_2D9C_419D_7F5145DBB3BC",
 "this.popup_4A0C3726_1614_238F_4172_E61A531742AA",
 {
  "levels": [
   {
    "height": 1333,
    "width": 2000,
    "url": "media/popup_4A0C3726_1614_238F_4172_E61A531742AA_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 682,
    "width": 1024,
    "url": "media/popup_4A0C3726_1614_238F_4172_E61A531742AA_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 341,
    "width": 512,
    "url": "media/popup_4A0C3726_1614_238F_4172_E61A531742AA_0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_69C3B37A_160C_2384_419C_79046B4034AF",
  "class": "ImageResource"
 },
 {
  "backgroundColorRatios": [],
  "titlePaddingBottom": 5,
  "verticalAlign": "middle",
  "closeButtonBackgroundOpacity": 0.5,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "backgroundColor": [],
  "paddingRight": 0,
  "headerPaddingRight": 0,
  "modal": true,
  "closeButtonIconLineWidth": 5,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "headerPaddingLeft": 10,
  "gap": 10,
  "headerBackgroundColorDirection": "vertical",
  "titleFontFamily": "Arial",
  "closeButtonBorderSize": 0,
  "paddingLeft": 0,
  "titleFontSize": 14,
  "veilColorRatios": [
   0,
   1
  ],
  "bodyBackgroundOpacity": 0,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "bodyPaddingTop": 0,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonIconHeight": 50,
  "backgroundColorDirection": "vertical",
  "layout": "vertical",
  "paddingBottom": 0,
  "titlePaddingTop": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingTop": 10,
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "class": "Window",
  "paddingTop": 0,
  "closeButtonBackgroundColor": [
   "#000000"
  ],
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonPaddingBottom": 5,
  "closeButtonIconColor": "#FFFFFF",
  "shadowOpacity": 0.5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "veilOpacity": 0.4,
  "children": [
   "this.viewer_uid8D45FB80_9D1A_74F8_41C6_FF28EF471FA0"
  ],
  "scrollBarVisible": "rollOver",
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "borderSize": 0,
  "closeButtonPressedIconColor": "#FF0000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "shadowVerticalLength": 0,
  "contentOpaque": false,
  "closeButtonRollOverIconColor": "#CCCCCC",
  "footerHeight": 5,
  "closeButtonPaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "closeButtonBackgroundColorDirection": "vertical",
  "bodyPaddingLeft": 0,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonBorderRadius": 0,
  "scrollBarMargin": 2,
  "minHeight": 20,
  "closeButtonRollOverBorderSize": 0,
  "bodyPaddingRight": 0,
  "closeButtonPressedIconLineWidth": 5,
  "borderRadius": 5,
  "headerBackgroundOpacity": 0,
  "bodyPaddingBottom": 0,
  "closeButtonIconWidth": 50,
  "close": "this.PlayList_90D4A00F_9D16_3407_4182_E05A73F99347.set('selectedIndex', -1);",
  "shadowBlurRadius": 6,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonBackgroundColorRatios": [
   0.1
  ],
  "backgroundOpacity": 1,
  "shadowSpread": 1,
  "titlePaddingLeft": 5,
  "id": "window_968D0544_9D16_3C79_41C6_41E263F72302",
  "footerBackgroundOpacity": 0,
  "scrollBarColor": "#000000",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "minWidth": 20,
  "overflow": "scroll",
  "headerVerticalAlign": "middle",
  "closeButtonPaddingTop": 5,
  "headerPaddingBottom": 5,
  "titlePaddingRight": 5,
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  }
 },
 "this.popup_14DC7652_1AFD_7168_41B0_2871B449D01E",
 "this.popup_94B2E7EE_160C_E29C_41AF_8F6F1B527001",
 {
  "levels": [
   {
    "height": 720,
    "width": 1280,
    "url": "media/popup_94B2E7EE_160C_E29C_41AF_8F6F1B527001_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 576,
    "width": 1024,
    "url": "media/popup_94B2E7EE_160C_E29C_41AF_8F6F1B527001_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 288,
    "width": 512,
    "url": "media/popup_94B2E7EE_160C_E29C_41AF_8F6F1B527001_0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_9C57885A_1634_6D84_41A1_9B25A7190911",
  "class": "ImageResource"
 },
 "this.popup_940D3F6C_160D_E39C_4182_27B26B33C63C",
 {
  "levels": [
   {
    "height": 1333,
    "width": 2000,
    "url": "media/popup_940D3F6C_160D_E39C_4182_27B26B33C63C_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 682,
    "width": 1024,
    "url": "media/popup_940D3F6C_160D_E39C_4182_27B26B33C63C_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 341,
    "width": 512,
    "url": "media/popup_940D3F6C_160D_E39C_4182_27B26B33C63C_0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_9C5AF85C_1634_6DBC_41A3_32718963AC15",
  "class": "ImageResource"
 },
 "this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
 {
  "levels": [
   {
    "height": 800,
    "width": 1200,
    "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 682,
    "width": 1024,
    "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 341,
    "width": 512,
    "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_D082516E_DCEA_7368_41CB_9D0CFA830713",
  "class": "ImageResource"
 },
 "this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
 {
  "levels": [
   {
    "height": 800,
    "width": 1053,
    "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 777,
    "width": 1024,
    "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 388,
    "width": 512,
    "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_D38C2C6E_DFA1_73F8_41C3_8C1C155D72CB",
  "class": "ImageResource"
 },
 "this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
 {
  "levels": [
   {
    "height": 800,
    "width": 1200,
    "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 682,
    "width": 1024,
    "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 341,
    "width": 512,
    "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_D09DC170_DCEA_7378_41EB_423962A6DDEA",
  "class": "ImageResource"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -60.91,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8DCDCC00_9D1A_73F9_41D4_4FEC052B1162",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -44.61,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8DC69C0D_9D1A_6C08_41E2_74BD9AE8D5B1",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 145.78,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8DFFCC19_9D1A_6C0B_41A2_78EB50BC1B6B",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -140.57,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8DE92C26_9D1A_6C39_41CC_58606AE67CB5",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 103.75,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8DE3FC33_9D1A_6C18_41DD_49E7147532D6",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 62.58,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8C1DAC3F_9D1A_6C07_419E_A3EB336304F4",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.55,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8C161C4C_9D1A_6C08_41E0_43EF925FC96A",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -176.54,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8C00CC59_9D1A_6C08_41C3_D59AB2C6F87C",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 40.93,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8C3ACC65_9D1A_6C3B_41E1_6672A7EF3FFF",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 94.62,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8C34CC72_9D1A_6C18_41DB_83BBE5E0AA9B",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.59,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8C207C7F_9D1A_6C08_41A8_88C9863AF5F6",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -148.32,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8C5B5C8B_9D1A_6C0F_41E0_6C12E7E66273",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -54.08,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_9392ACD2_9D1A_6C18_41D3_2158A48086BF",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.3,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_93955CDF_9D1A_6C07_41E2_E8644E4846E2",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 70.94,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_938ACCEC_9D1A_6C08_419F_B7BB363CE5FC",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -74.8,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_938FECF8_9D1A_6C09_41AF_4F0BFCC32F7C",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -169.65,
   "pitch": 0
  },
  "id": "camera_93840D05_9D1A_6DF8_41DA_670D3C1F8614",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -147.97,
   "hfov": 100,
   "pitch": 0
  },
  "id": "camera_93BA3D11_9D1A_6C1B_41CA_6CDB9587FB93",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -41.27,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_93B09D1E_9D1A_6C08_41A3_C52DF4005900",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 34.34,
   "pitch": 0
  },
  "id": "camera_93B55D2A_9D1A_6C09_41CD_2F6E517F2C11",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 98.97,
   "pitch": 0
  },
  "id": "camera_93AB0D37_9D1A_6C18_41DA_2EC8F8EC9360",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -155.07,
   "hfov": 100,
   "pitch": 0
  },
  "id": "camera_93A17D43_9D1A_6C7F_4173_51D6B28D1A7E",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 79.88,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_93A7CD50_9D1A_6C18_41C4_46A0611BBD3D",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 98.57,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_93DDDD5D_9D1A_6C08_41C8_76378418EF39",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 172.2,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_93D4DD69_9D1A_6C0B_41D3_851E8950FA93",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -4.35,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_93CD8D76_9D1A_6C18_41A5_B6150E10F6BA",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -76.94,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_93C54D82_9D1A_6CF9_41E1_3A1068730B18",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -171.42,
   "hfov": 100,
   "pitch": 0
  },
  "id": "camera_93FFED8F_9D1A_6C07_41D5_346CF091F696",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 94,
   "pitch": 0
  },
  "id": "camera_93E80D9C_9D1A_6C08_41D5_6153B3F02AD2",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 50.59,
   "pitch": 0
  },
  "id": "camera_93E15DA8_9D1A_6C09_41D4_88B1F8B5DE61",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 33.73,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_921BADB5_9D1A_6C18_41E0_4DF78BE92142",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -46.66,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_92149DC1_9D1A_6C7B_41AB_E42DAD6C0BAB",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -107.93,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_920D3DCE_9D1A_6C08_41E1_426FF47140D7",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.65,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_9207EDDB_9D1A_6C08_41D6_B485D09DA89E",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 97.92,
   "pitch": 0
  },
  "id": "camera_9231ADE7_9D1A_6C07_4195_D3EBF5A9AE3F",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 77.83,
   "pitch": 0
  },
  "id": "camera_922BBDF4_9D1A_6C18_41BA_8B237C4294F5",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 95.83,
   "pitch": 0
  },
  "id": "camera_9223EE00_9D1A_6FF9_41D1_18047DC2CF08",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 97.3,
   "pitch": 0
  },
  "id": "camera_925DFE0D_9D1A_6C08_41C1_E43FE510DE80",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 98.55,
   "pitch": 0
  },
  "id": "camera_9257BE19_9D1A_6C0B_41C0_EF5A3EDA4409",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 64.57,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_92404E26_9D1A_6C38_41B5_6FF446369739",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.84,
   "pitch": 0
  },
  "id": "camera_927BBE32_9D1A_6C19_41DD_F04C44ACA094",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 113.39,
   "pitch": 0
  },
  "id": "camera_92745E3E_9D1A_6C08_41BC_38C7D0E08C53",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -147.25,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_926E7E49_9D1A_6C08_41E2_940E98417290",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 28.06,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_92984E54_9D1A_6C19_41E1_13DBFA40C01F",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 117.49,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_9293BE5F_9D1A_6C07_41DB_FC339E2E1F6B",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 19.29,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_928C6E6B_9D1A_6C08_41B3_82CB2E666BC2",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -23.59,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_92865E76_9D1A_6C19_41BA_B1D011B82704",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -66.4,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_92B02E82_9D1A_6CF8_41E3_416D3C6ED86E",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 118.98,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_92A84E8D_9D1A_6C0B_41CE_C1E137D43392",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 163.89,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_92A3FE98_9D1A_6C09_41D9_63020A65DB70",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 13.32,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_92DDEEA4_9D1A_6C38_41A9_6141F20659E3",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 136.46,
   "hfov": 100,
   "pitch": 0
  },
  "id": "camera_92D7AEAF_9D1A_6C07_41BF_E39961587B68",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 47.35,
   "pitch": 0
  },
  "id": "camera_92C21EBB_9D1A_6C08_41BA_CAE1F717A680",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 126.49,
   "pitch": 0
  },
  "id": "camera_92FEEED3_9D1A_6C1F_41B4_5170A5475446",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 45.04,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_92EA9EE9_9D1A_6C0B_41D7_E102C3D2456E",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 148.88,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_92E54EFB_9D1A_6C08_41C1_BD77B83E57B0",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 150.05,
   "hfov": 100,
   "pitch": 0
  },
  "id": "camera_8D111F11_9D1A_6C18_41D0_1CE52D7B9C31",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -30.33,
   "pitch": 0
  },
  "id": "camera_8D0DCF28_9D1A_6C08_41D1_D0313AA15044",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 124.67,
   "pitch": 0
  },
  "id": "camera_8D384F3F_9D1A_6C08_41D5_0873446E9EC3",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 159.37,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8D343F55_9D1A_6C18_41B9_16D92571DFEC",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -50.56,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8D2E6F6C_9D1A_6C08_41E1_1EB9BBCD7F3D",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -147.08,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8D5AEF82_9D1A_6CF8_41DA_23ECEEEB0F29",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.1,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8D569F98_9D1A_6C08_41E1_03D39049933C",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -126.79,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8D416FAA_9D1A_6C08_41C7_0CBA52E27086",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 90.28,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8D7DCFB6_9D1A_6C18_41A0_6D1999A4B8B4",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.78,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8D69DFC1_9D1A_6C78_41C5_EBAA410CD2B4",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 56.94,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8D647FCD_9D1A_6C08_41DB_F953A20721A8",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -116.83,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8D903FD8_9D1A_6C09_41E0_93556E766489",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 139.18,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8D8CEFE4_9D1A_6C38_41CC_8648EDDE29EE",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.31,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8D876FEF_9D1A_6C07_41C8_84609879C23D",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.65,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8DB31FFB_9D1A_6C08_41C5_665FEBE0BF08",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.37,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8DAF6006_9D1A_13F9_41D5_4B11B6A68983",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.87,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8DD96012_9D1A_1418_41E0_B7AB077E2361",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.67,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8DD5801D_9D1A_140B_41D8_11F023C3012D",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -152.92,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8DC02028_9D1A_1409_41E0_9E83A1A15B4B",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.95,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8DFC8034_9D1A_1418_41C9_128B1A87B461",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -83.53,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_8DE9D03F_9D1A_1407_41E1_EDF3FF8A5EEE",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -94.33,
   "hfov": 100,
   "pitch": 0
  },
  "id": "camera_8DE5404A_9D1A_1409_41D3_A885123267ED",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 127.56,
   "pitch": 0
  },
  "id": "camera_8C12F056_9D1A_1418_41D7_447BF5BF28EB",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 38.61,
   "pitch": 0
  },
  "id": "camera_8C0E0062_9D1A_1438_41DA_C4D71E401B1C",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -91.04,
   "pitch": 0
  },
  "id": "camera_8C3B906D_9D1A_140B_41D5_C8B527EA20D6",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -113.6,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_938F80B5_9D1A_141B_41DF_73047B79B436",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.45,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_9383C0C1_9D1A_1478_4184_A1DD6AA9832F",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -159.28,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_938700CC_9D1A_1409_41DE_B4733B185B88",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 35.26,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_93BBF0D7_9D1A_1407_41C0_3064765EE59B",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -49.33,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_93B070E3_9D1A_1438_41DF_FDB957B216CF",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 129.94,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_93B640EE_9D1A_1409_41D9_5F7B78BFF7D3",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 31.06,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_93ACF0F9_9D1A_140B_41DB_0669AC31A3A7",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -32.82,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_93A2C105_9D1A_15F8_41D8_B760B37FC32B",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -123.57,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_93A77110_9D1A_1418_41BE_1458F951051F",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -21.17,
   "hfov": 100,
   "pitch": 0
  },
  "id": "camera_93DD111B_9D1A_140F_41E2_C6A932574705",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 4.18,
   "pitch": 0
  },
  "id": "camera_93D34127_9D1A_1438_41D0_519798D93C43",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 162.53,
   "pitch": 0
  },
  "id": "camera_93C95132_9D1A_1418_41C9_5D2ED110D00C",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 100.64,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_93CF413D_9D1A_140B_41D4_3BBB44406E11",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.73,
   "hfov": 105,
   "pitch": 0
  },
  "id": "camera_93C59149_9D1A_1408_41C9_76630C400E42",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 58.95,
   "hfov": 100,
   "pitch": 0
  },
  "id": "camera_93FBC154_9D1A_1419_418C_4B7CB412F87A",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 145.09,
   "pitch": 0
  },
  "id": "camera_93F24160_9D1A_1438_41B3_B73121C8C599",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 69.27,
   "pitch": 0
  },
  "id": "camera_93EB816B_9D1A_140F_41B6_542562453044",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A415AEA_1A54_5961_418D_A446E9A0AD27",
  "class": "FadeInEffect"
 },
 "this.effect_0A415AEA_1A54_5961_418D_A446E9A0AD27",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ECD16C_9D1A_1408_41CC_5A7955E21279",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A4EDAEC_1A54_5962_41AC_C2003F20CB9F",
  "class": "FadeInEffect"
 },
 "this.effect_0A4EDAEC_1A54_5962_41AC_C2003F20CB9F",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EC816C_9D1A_1408_41E1_7C90B297CA64",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_EAEC9FF0_E507_80D4_41DE_26E787ED8CCE",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EC916C_9D1A_1409_41D7_FDE496DE1030",
  "class": "FadeInEffect"
 },
 "this.effect_EAEC9FF0_E507_80D4_41DE_26E787ED8CCE",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_27B39297_36BD_1CC5_41CA_0DA85ED17A20",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ECA16C_9D1A_1409_41C1_593C967CC9A9",
  "class": "FadeInEffect"
 },
 "this.effect_27B39297_36BD_1CC5_41CA_0DA85ED17A20",
 {
  "duration": 2000,
  "easing": "cubic_in_out",
  "id": "effect_EF6DD038_F622_38BB_41E2_201047C6007C",
  "class": "FadeInEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_EF694FB9_F622_67BA_41E1_905F7693BFFD",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_263D2C60_37A3_6E76_41B0_3698A63496C3",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EC516D_9D1A_1408_419A_D9C96FF65B82",
  "class": "FadeInEffect"
 },
 "this.effect_263D2C60_37A3_6E76_41B0_3698A63496C3",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_263D6C61_37A3_6E77_419A_EFCCEC8B9C13",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EC716D_9D1A_1408_41D2_155277E79DDD",
  "class": "FadeInEffect"
 },
 "this.effect_263D6C61_37A3_6E77_419A_EFCCEC8B9C13",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_263D9C61_37A3_6E77_41B5_2D93BDF0ECDD",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EC116D_9D1A_140B_41D9_4E670145F87F",
  "class": "FadeInEffect"
 },
 "this.effect_263D9C61_37A3_6E77_41B5_2D93BDF0ECDD",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_E3582213_ED68_454C_41D3_299F2B40CFF6",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EC216D_9D1A_140B_41E2_FEE752574F94",
  "class": "FadeInEffect"
 },
 "this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_F083FF13_E49C_8716_41EC_3E7D67287F82",
  "class": "FadeInEffect"
 },
 "this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EDC16E_9D1A_1408_41BA_908D74B6C33D",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1",
  "class": "FadeInEffect"
 },
 "this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EDD16E_9D1A_1408_41E2_5EDC9F03250F",
  "class": "FadeOutEffect"
 },
 {
  "duration": 0,
  "easing": "cubic_in_out",
  "id": "effect_EF6DE039_F622_38BD_41E2_3149DB234972",
  "class": "FadeInEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_E3586214_ED68_4574_41E5_D2720D677B2E",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EDE16E_9D1A_1409_41D3_90DC6027E731",
  "class": "FadeInEffect"
 },
 "this.effect_E3586214_ED68_4574_41E5_D2720D677B2E",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_E3598214_ED68_4574_41E8_2F261C5C21DC",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED816F_9D1A_1407_41D3_5028EE1AC7D1",
  "class": "FadeInEffect"
 },
 "this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_E359A214_ED68_4575_41DB_B895523643F9",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EDA16F_9D1A_1407_41D3_0EA2CEF96A5B",
  "class": "FadeInEffect"
 },
 "this.effect_E359A214_ED68_4575_41DB_B895523643F9",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_E3587215_ED68_4577_4183_716A0D8E6DA7",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EDB170_9D1A_1419_41E1_C7323DAD5BFC",
  "class": "FadeInEffect"
 },
 "this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_E35A8219_ED68_457C_41E5_C52BA0340B76",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED4171_9D1A_1418_41CE_C8BDC5894132",
  "class": "FadeInEffect"
 },
 "this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_28636F1D_380A_B0E2_41CB_11AF37DE0FBA",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED6171_9D1A_141B_41D6_4437622CABB4",
  "class": "FadeInEffect"
 },
 "this.effect_28636F1D_380A_B0E2_41CB_11AF37DE0FBA",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_2864FF1E_380A_AF1E_4198_2E923EA5658C",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED7172_9D1A_1418_418F_B563508C37D0",
  "class": "FadeInEffect"
 },
 "this.effect_2864FF1E_380A_AF1E_4198_2E923EA5658C",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_28647F1E_380A_AF1E_41B0_E5F978729211",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED0172_9D1A_1418_41DB_C8918147B40B",
  "class": "FadeInEffect"
 },
 "this.effect_28647F1E_380A_AF1E_41B0_E5F978729211",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_28651F1F_380A_AF1E_41C2_63F69A3A4274",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED1172_9D1A_1419_41E0_ED4C744F61B0",
  "class": "FadeInEffect"
 },
 "this.effect_28651F1F_380A_AF1E_41C2_63F69A3A4274",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_28656F1F_380A_AF1E_41AE_25190AD81FE8",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED3173_9D1A_1418_41D3_7C510C64D50E",
  "class": "FadeInEffect"
 },
 "this.effect_28656F1F_380A_AF1E_41AE_25190AD81FE8",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_28661F20_380A_AF22_419F_884C1B4CE9BA",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EC5173_9D1A_141F_41E3_547E5FA03A69",
  "class": "FadeInEffect"
 },
 "this.effect_28661F20_380A_AF22_419F_884C1B4CE9BA",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_28667F25_380A_AF22_41AA_8AF78832719A",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EC6173_9D1A_141F_41DE_B7461B71CA54",
  "class": "FadeInEffect"
 },
 "this.effect_28667F25_380A_AF22_41AA_8AF78832719A",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_2867FF26_380A_AF2E_41CA_F4F651A21969",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EC7174_9D1A_1418_41E2_ADD3505EC355",
  "class": "FadeInEffect"
 },
 "this.effect_2867FF26_380A_AF2E_41CA_F4F651A21969",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_954C799B_160C_2E84_41B0_AFCA77FBB962",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EC0174_9D1A_1419_41B0_A13FEF06CE3C",
  "class": "FadeInEffect"
 },
 "this.effect_954C799B_160C_2E84_41B0_AFCA77FBB962",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_954C299C_160C_2EBC_41A2_795A81ADC662",
  "class": "FadeInEffect"
 },
 "this.effect_954C299C_160C_2EBC_41A2_795A81ADC662",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EC2174_9D1A_1419_41E1_4160A593C72D",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0B500FD7_1A54_37AE_41A9_19AE8C776076",
  "class": "FadeInEffect"
 },
 "this.effect_0B500FD7_1A54_37AE_41A9_19AE8C776076",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EDC175_9D1A_1418_41DF_71E9A2407D9E",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EDD175_9D1A_141B_41DB_B40B7CADF8A6",
  "class": "FadeInEffect"
 },
 "this.effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_2606DC67_37A3_6E7A_417B_82BAC7B62691",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EDF175_9D1A_141B_41B7_C05B7891C32A",
  "class": "FadeInEffect"
 },
 "this.effect_2606DC67_37A3_6E7A_417B_82BAC7B62691",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_EF6CE355_F62E_F8F5_41E6_CBD8B4202E02",
  "class": "FadeInEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_EF6C1355_F62E_F8F5_41C5_B9A5C5CCED3E",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_26077C68_37A3_6E75_41BD_CC48A65FF42C",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED9176_9D1A_1418_41A9_6E06EE5751A3",
  "class": "FadeInEffect"
 },
 "this.effect_26077C68_37A3_6E75_41BD_CC48A65FF42C",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EDA176_9D1A_1418_41D2_2C68A42FD06C",
  "class": "FadeInEffect"
 },
 "this.effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A78BB17_1A54_58AF_41B2_578B2CDC47A4",
  "class": "FadeInEffect"
 },
 "this.effect_0A78BB17_1A54_58AF_41B2_578B2CDC47A4",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EDB176_9D1A_1419_41CE_3369732AA0E1",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A78CB17_1A54_58AF_419D_7A41EB5E63C2",
  "class": "FadeInEffect"
 },
 "this.effect_0A78CB17_1A54_58AF_419D_7A41EB5E63C2",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED4176_9D1A_1419_41CE_7B956099B5C1",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_2901D6DE_3812_BF51_41AE_CDB2AB2279BC",
  "class": "FadeInEffect"
 },
 "this.effect_2901D6DE_3812_BF51_41AE_CDB2AB2279BC",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED6177_9D1A_1418_41DE_8755BB74693F",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_265ED5C6_37AF_1EBD_41C7_FC5F42967E65",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED7177_9D1A_1418_41D2_3A2A5E03748E",
  "class": "FadeInEffect"
 },
 "this.effect_265ED5C6_37AF_1EBD_41C7_FC5F42967E65",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_265F15C6_37AF_1EBA_41BA_48E8514F715E",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED0177_9D1A_1407_41B5_DA3BCD3879BF",
  "class": "FadeInEffect"
 },
 "this.effect_265F15C6_37AF_1EBA_41BA_48E8514F715E",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_265F65C6_37AF_1EBA_41BB_44A1D43822E5",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED1177_9D1A_1407_41BF_DB86F7FFA685",
  "class": "FadeInEffect"
 },
 "this.effect_265F65C6_37AF_1EBA_41BB_44A1D43822E5",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_265FB5C7_37AF_1EBB_41C2_D284D8411ADC",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED2178_9D1A_1408_41BD_5327EDD94DB0",
  "class": "FadeInEffect"
 },
 "this.effect_265FB5C7_37AF_1EBB_41C2_D284D8411ADC",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A7CFB12_1A54_58A6_41A1_E0F17F3A1142",
  "class": "FadeInEffect"
 },
 "this.effect_0A7CFB12_1A54_58A6_41A1_E0F17F3A1142",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED3178_9D1A_1408_41B2_8E377F325E85",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A7C1B12_1A54_58A6_41AF_D15E3F52DC69",
  "class": "FadeInEffect"
 },
 "this.effect_0A7C1B12_1A54_58A6_41AF_D15E3F52DC69",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EED178_9D1A_1409_41BB_6C3358FE6EC8",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A7B8B16_1A54_58A1_41A7_2BF2E9F05601",
  "class": "FadeInEffect"
 },
 "this.effect_0A7B8B16_1A54_58A1_41A7_2BF2E9F05601",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EEE178_9D1A_1409_41C7_6651D3CBA08A",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A7B3B16_1A54_58AE_41AD_F6E2596D1449",
  "class": "FadeInEffect"
 },
 "this.effect_0A7B3B16_1A54_58AE_41AD_F6E2596D1449",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EEF179_9D1A_1408_41DA_3428D62FA059",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A7DCB14_1A54_58A2_41A0_7589B647DC76",
  "class": "FadeInEffect"
 },
 "this.effect_0A7DCB14_1A54_58A2_41A0_7589B647DC76",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EE8179_9D1A_140B_41C4_608EE805FFE1",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A7D6B15_1A54_58A3_41B2_1638439C39F6",
  "class": "FadeInEffect"
 },
 "this.effect_0A7D6B15_1A54_58A3_41B2_1638439C39F6",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EE9179_9D1A_140B_41B6_C99817EA0837",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A4BDAF9_1A54_5962_41B5_D8C782C19266",
  "class": "FadeInEffect"
 },
 "this.effect_0A4BDAF9_1A54_5962_41B5_D8C782C19266",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EEB17A_9D1A_1408_41D3_17BBCF68A364",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A4B0AFA_1A54_5961_41A1_87E1ED6C15A7",
  "class": "FadeInEffect"
 },
 "this.effect_0A4B0AFA_1A54_5961_41A1_87E1ED6C15A7",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EE517A_9D1A_1408_41E0_4D448A494010",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A7C1B14_1A54_58A1_4182_E91E1718D19E",
  "class": "FadeInEffect"
 },
 "this.effect_0A7C1B14_1A54_58A1_4182_E91E1718D19E",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EE717A_9D1A_1409_41D5_E33683C53025",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A7C5B14_1A54_58A1_4196_8491F9269B01",
  "class": "FadeInEffect"
 },
 "this.effect_0A7C5B14_1A54_58A1_4196_8491F9269B01",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EE017A_9D1A_1409_41B3_76FB81D354FF",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A4BFAF8_1A54_5961_419C_A651C34FFF29",
  "class": "FadeInEffect"
 },
 "this.effect_0A4BFAF8_1A54_5961_419C_A651C34FFF29",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED817B_9D1A_1408_41D6_E1B389D42E7C",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A4B1AF8_1A54_5961_4192_288452C55C7E",
  "class": "FadeInEffect"
 },
 "this.effect_0A4B1AF8_1A54_5961_4192_288452C55C7E",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED917B_9D1A_140F_41E3_205F3286A622",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A7DCB13_1A54_58A7_41B9_176107C63C7F",
  "class": "FadeInEffect"
 },
 "this.effect_0A7DCB13_1A54_58A7_41B9_176107C63C7F",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EDA17B_9D1A_140F_41E1_72E58750FFB4",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A7D0B13_1A54_58A6_41A3_F79144E8BD4D",
  "class": "FadeInEffect"
 },
 "this.effect_0A7D0B13_1A54_58A6_41A3_F79144E8BD4D",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EDB17C_9D1A_1408_419A_385F82CA43E7",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A7ADB15_1A54_58A2_41AB_CE902CEB2D2F",
  "class": "FadeInEffect"
 },
 "this.effect_0A7ADB15_1A54_58A2_41AB_CE902CEB2D2F",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED417C_9D1A_1409_41BF_1EB5B4AF49DF",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A7A0B15_1A54_58A2_41AB_A63D9E32E6AE",
  "class": "FadeInEffect"
 },
 "this.effect_0A7A0B15_1A54_58A2_41AB_A63D9E32E6AE",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED617C_9D1A_1409_41DF_9105ECCE483D",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A751B07_1A54_58AF_41B6_994BD0BB5150",
  "class": "FadeInEffect"
 },
 "this.effect_0A751B07_1A54_58AF_41B6_994BD0BB5150",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED017D_9D1A_1408_41E0_44597C1E2E44",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A72BB07_1A54_58AF_41B9_E0139F2ABDA7",
  "class": "FadeInEffect"
 },
 "this.effect_0A72BB07_1A54_58AF_41B9_E0139F2ABDA7",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED217D_9D1A_140B_41DE_F8B8F9CD8733",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_28250014_3802_F537_4188_3C7B2FC7EB36",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93ED317D_9D1A_140B_41E3_901A8943211F",
  "class": "FadeInEffect"
 },
 "this.effect_28250014_3802_F537_4188_3C7B2FC7EB36",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_2827C014_3802_F537_41C3_FC95DAE82DA1",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EED17D_9D1A_140B_41DE_87DC670FFF83",
  "class": "FadeInEffect"
 },
 "this.effect_2827C014_3802_F537_41C3_FC95DAE82DA1",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_28260015_3802_F531_41C1_E14F08D374DD",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EEF17E_9D1A_1408_418C_36776761794A",
  "class": "FadeInEffect"
 },
 "this.effect_28260015_3802_F531_41C1_E14F08D374DD",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_28264015_3802_F531_4190_725BE50AAA5D",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EE817E_9D1A_1408_41CF_006906C8C769",
  "class": "FadeInEffect"
 },
 "this.effect_28264015_3802_F531_4190_725BE50AAA5D",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A4A2AF7_1A54_596F_41A0_A23BA651ABF1",
  "class": "FadeInEffect"
 },
 "this.effect_0A4A2AF7_1A54_596F_41A0_A23BA651ABF1",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EEB17E_9D1A_1409_41D8_851A467BFE28",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0A4A5AF7_1A54_596E_4160_0BC7A9E29E78",
  "class": "FadeInEffect"
 },
 "this.effect_0A4A5AF7_1A54_596E_4160_0BC7A9E29E78",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EE417F_9D1A_1408_41DF_5C38B0C5C1E3",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_4DCC9BCA_5DE4_1D9E_4189_6DD46A997BAE",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EE517F_9D1A_1408_41CC_7CA3C5E2ABBB",
  "class": "FadeInEffect"
 },
 "this.effect_4DCC9BCA_5DE4_1D9E_4189_6DD46A997BAE",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_265485CE_37AF_1E4D_41BF_B2096F69C00B",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EE717F_9D1A_1408_41B6_51C37C2C4F76",
  "class": "FadeInEffect"
 },
 "this.effect_265485CE_37AF_1E4D_41BF_B2096F69C00B",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_2654D5CE_37AF_1E4D_41B6_E558742F5F68",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EE117F_9D1A_1407_41D0_0B0A05AAC4F9",
  "class": "FadeInEffect"
 },
 "this.effect_2654D5CE_37AF_1E4D_41B6_E558742F5F68",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_265555CE_37AF_1E4A_41C8_58F45ECAFC24",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EE217F_9D1A_1407_41C6_54A34F648065",
  "class": "FadeInEffect"
 },
 "this.effect_265555CE_37AF_1E4A_41C8_58F45ECAFC24",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_2653E5CF_37AF_1E4B_41CB_C2FB1B6AD4FB",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EFD180_9D1A_14F8_41D2_FD2543B5284F",
  "class": "FadeInEffect"
 },
 "this.effect_2653E5CF_37AF_1E4B_41CB_C2FB1B6AD4FB",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EF8180_9D1A_14F8_41B0_219E02BC3164",
  "class": "FadeInEffect"
 },
 "this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EFA180_9D1A_14F9_41D3_325ECB4F858E",
  "class": "FadeInEffect"
 },
 "this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_E35A021A_ED68_457D_41DB_F92702D0649E",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EF5181_9D1A_14FB_41D4_15B3DD532F94",
  "class": "FadeInEffect"
 },
 "this.effect_E35A021A_ED68_457D_41DB_F92702D0649E",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_E359B21B_ED68_4573_41E3_2134D2902989",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EF7181_9D1A_14FB_41DF_65E62D12AF38",
  "class": "FadeInEffect"
 },
 "this.effect_E359B21B_ED68_4573_41E3_2134D2902989",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EE9182_9D1A_14F9_41DD_DA670FA4037C",
  "class": "FadeInEffect"
 },
 "this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F",
 "this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EFC183_9D1A_14FF_41C7_9FED9C3D0A47",
  "class": "FadeInEffect"
 },
 "this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6",
 "this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82",
 "this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EFD183_9D1A_14FF_41D7_FC30261C9323",
  "class": "FadeOutEffect"
 },
 "this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1",
 "this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EFF184_9D1A_14F8_41D7_14D3F0CD4134",
  "class": "FadeOutEffect"
 },
 "this.effect_EF6DE039_F622_38BD_41E2_3149DB234972",
 "this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE",
 "this.effect_E3586214_ED68_4574_41E5_D2720D677B2E",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EFA184_9D1A_14F8_41DE_D45AA48DDD35",
  "class": "FadeInEffect"
 },
 "this.effect_E3586214_ED68_4574_41E5_D2720D677B2E",
 "this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EF6185_9D1A_14F8_41C4_1F5DA7C880AD",
  "class": "FadeInEffect"
 },
 "this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC",
 "this.effect_E359A214_ED68_4575_41DB_B895523643F9",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EF0185_9D1A_14FB_41D4_14806FC3697F",
  "class": "FadeInEffect"
 },
 "this.effect_E359A214_ED68_4575_41DB_B895523643F9",
 "this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_93EF3185_9D1A_14FB_41B2_56F136453CD7",
  "class": "FadeInEffect"
 },
 "this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7"
], "children": [
 {
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontWeight": "normal",
  "toolTipShadowVerticalLength": 0,
  "toolTipFontFamily": "Arial",
  "paddingRight": 0,
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadShadow": true,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipTextShadowOpacity": 0,
  "progressBarBorderRadius": 0,
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "progressBottom": 0,
  "progressBarBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "paddingLeft": 0,
  "toolTipPaddingRight": 6,
  "progressHeight": 10,
  "progressBackgroundOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBorderColor": "#000000",
  "shadow": false,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarBorderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipOpacity": 1,
  "class": "ViewerArea",
  "transitionMode": "blending",
  "toolTipShadowColor": "#333333",
  "paddingTop": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBorderSize": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipTextShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "playbackBarRight": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "height": "100%",
  "progressBorderRadius": 0,
  "width": "100%",
  "playbackBarHeadOpacity": 1,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBorderRadius": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "minHeight": 50,
  "playbackBarOpacity": 1,
  "top": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeight": 10,
  "id": "MainViewer",
  "toolTipFontSize": 12,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBorderColor": "#000000",
  "minWidth": 100,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "borderRadius": 0,
  "progressRight": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBarOpacity": 1,
  "playbackBarBottom": 5,
  "left": 0,
  "toolTipPaddingBottom": 4,
  "toolTipFontColor": "#606060",
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "toolTipShadowOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "toolTipBorderRadius": 3,
  "progressLeft": 0,
  "toolTipBorderSize": 1,
  "progressOpacity": 1
 },
 {
  "children": [
   {
    "backgroundColorRatios": [
     0.8
    ],
    "children": [
     {
      "toolTipShadowHorizontalLength": 0,
      "verticalAlign": "middle",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipFontFamily": "Arial",
      "pressedIconURL": "skin/IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9_pressed.png",
      "paddingRight": 0,
      "mode": "toggle",
      "borderSize": 0,
      "width": 75,
      "toolTipFontStyle": "normal",
      "height": 50,
      "toolTipPaddingTop": 4,
      "toolTipShadowSpread": 0,
      "iconURL": "skin/IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9.png",
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "toolTipPaddingLeft": 6,
      "horizontalAlign": "center",
      "click": "this.showPopupMedia(this.window_86D78109_88BC_A049_41BB_B0E11F92E0CE, this.video_86AA3EBF_88BB_A049_41D3_F72BA9A8D787, this.playList_90850FBA_9D16_2C09_41D1_679953215E48, '90%', '90%', false, true); this.playList_90850FBA_9D16_2C09_41D1_679953215E48.set('selectedIndex', 0); ; this.viewer_uid90824FBA_9D16_2C09_41CD_DBE08869A640VideoPlayer.play(); ",
      "transparencyActive": true,
      "shadow": false,
      "minHeight": 1,
      "borderRadius": 0,
      "cursor": "hand",
      "toolTipOpacity": 1,
      "toolTipFontSize": 12,
      "paddingBottom": 0,
      "id": "IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9",
      "class": "IconButton",
      "toolTipBackgroundColor": "#F6F6F6",
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipShadowColor": "#333333",
      "paddingTop": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTip": "Info",
      "toolTipPaddingBottom": 4,
      "toolTipFontColor": "#606060",
      "toolTipTextShadowColor": "#000000",
      "toolTipBorderSize": 1,
      "toolTipShadowOpacity": 1,
      "toolTipBorderColor": "#767676",
      "toolTipBorderRadius": 3,
      "toolTipFontWeight": "normal"
     },
     {
      "toolTipShadowHorizontalLength": 0,
      "verticalAlign": "middle",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipFontFamily": "Arial",
      "pressedIconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0_pressed.png",
      "paddingRight": 0,
      "mode": "toggle",
      "borderSize": 0,
      "width": 75,
      "toolTipFontStyle": "normal",
      "height": 50,
      "toolTipPaddingTop": 4,
      "toolTipShadowSpread": 0,
      "iconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0.png",
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "toolTipPaddingLeft": 6,
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 0)",
      "transparencyActive": true,
      "shadow": false,
      "minHeight": 1,
      "borderRadius": 0,
      "cursor": "hand",
      "toolTipOpacity": 1,
      "toolTipFontSize": 12,
      "paddingBottom": 0,
      "id": "IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0",
      "class": "IconButton",
      "toolTipBackgroundColor": "#F6F6F6",
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipShadowColor": "#333333",
      "paddingTop": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTip": "Home",
      "toolTipPaddingBottom": 4,
      "toolTipFontColor": "#606060",
      "toolTipTextShadowColor": "#000000",
      "toolTipBorderSize": 1,
      "toolTipShadowOpacity": 1,
      "toolTipBorderColor": "#767676",
      "toolTipBorderRadius": 3,
      "toolTipFontWeight": "normal"
     },
     {
      "toolTipShadowHorizontalLength": 0,
      "verticalAlign": "middle",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipFontFamily": "Arial",
      "pressedIconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2_pressed.png",
      "paddingRight": 0,
      "mode": "toggle",
      "borderSize": 0,
      "width": 75,
      "toolTipFontStyle": "normal",
      "height": 50,
      "toolTipPaddingTop": 4,
      "toolTipShadowSpread": 0,
      "iconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2.png",
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "toolTipPaddingLeft": 6,
      "horizontalAlign": "center",
      "click": "if(!this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, true, 0, this.effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42, 'showEffect', false) } else if(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, false, 0, this.effect_D3728F7A_DF8C_960C_417C_830810DD2653, 'hideEffect', false) }",
      "transparencyActive": true,
      "shadow": false,
      "minHeight": 1,
      "borderRadius": 0,
      "cursor": "hand",
      "toolTipOpacity": 1,
      "toolTipFontSize": 12,
      "paddingBottom": 0,
      "id": "IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2",
      "class": "IconButton",
      "toolTipBackgroundColor": "#F6F6F6",
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipShadowColor": "#333333",
      "paddingTop": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTip": "Map",
      "toolTipPaddingBottom": 4,
      "toolTipFontColor": "#606060",
      "toolTipTextShadowColor": "#000000",
      "toolTipBorderSize": 1,
      "toolTipShadowOpacity": 1,
      "toolTipBorderColor": "#767676",
      "toolTipBorderRadius": 3,
      "toolTipFontWeight": "normal"
     },
     "this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667"
    ],
    "overflow": "scroll",
    "verticalAlign": "middle",
    "backgroundColor": [
     "#000000"
    ],
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "borderSize": 0,
    "width": 334,
    "height": 77,
    "layout": "horizontal",
    "contentOpaque": false,
    "gap": 10,
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "horizontalAlign": "center",
    "shadow": false,
    "scrollBarMargin": 2,
    "minHeight": 77,
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "paddingBottom": 0,
    "id": "Container_FD43509A_EC70_8CA6_41E8_9E5B7D453FAE",
    "class": "Container",
    "scrollBarColor": "#000000",
    "minWidth": 334,
    "backgroundOpacity": 0.1,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver"
   }
  ],
  "overflow": "scroll",
  "verticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "borderSize": 0,
  "width": "100%",
  "height": "18.033%",
  "layout": "horizontal",
  "contentOpaque": false,
  "gap": 10,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "shadow": false,
  "scrollBarMargin": 2,
  "minHeight": 1,
  "bottom": "0%",
  "borderRadius": 0,
  "paddingBottom": 0,
  "id": "Container_D19AA380_DE1B_2AF3_41EA_D9B3468B686F",
  "class": "Container",
  "scrollBarColor": "#000000",
  "minWidth": 1,
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "left": "0%"
 },
 {
  "children": [
   {
    "children": [
     "this.MapViewer",
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "borderSize": 0,
      "maxWidth": 448,
      "height": "27.233%",
      "maxHeight": 264,
      "paddingLeft": 0,
      "url": "skin/Image_E84AED1C_E346_1439_41DD_9142DAACB163.png",
      "width": "100%",
      "horizontalAlign": "center",
      "scaleMode": "fit_inside",
      "shadow": false,
      "minHeight": 1,
      "borderRadius": 0,
      "paddingBottom": 0,
      "id": "Image_E84AED1C_E346_1439_41DD_9142DAACB163",
      "class": "Image",
      "minWidth": 1,
      "backgroundOpacity": 0,
      "paddingTop": 0
     }
    ],
    "overflow": "scroll",
    "verticalAlign": "middle",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "borderSize": 0,
    "width": "100%",
    "height": "81.45%",
    "layout": "vertical",
    "contentOpaque": false,
    "gap": 10,
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "horizontalAlign": "center",
    "shadow": false,
    "scrollBarMargin": 2,
    "minHeight": 1,
    "borderRadius": 0,
    "paddingBottom": 0,
    "id": "Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5",
    "class": "Container",
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver"
   }
  ],
  "overflow": "scroll",
  "verticalAlign": "top",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "borderSize": 0,
  "width": "29.316%",
  "height": "77.049%",
  "layout": "vertical",
  "contentOpaque": false,
  "gap": 10,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "shadow": false,
  "scrollBarMargin": 2,
  "minHeight": 1,
  "top": "2.05%",
  "paddingBottom": 0,
  "id": "Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F",
  "borderRadius": 0,
  "class": "Container",
  "scrollBarColor": "#000000",
  "minWidth": 1,
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "right": "0%"
 },
 {
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "popUpBorderRadius": 0,
    "backgroundColor": [
     "#00CCFF",
     "#0099FF"
    ],
    "paddingRight": 5,
    "borderSize": 0,
    "width": "20.256%",
    "fontSize": 14,
    "arrowBeforeLabel": false,
    "popUpFontColor": "#000000",
    "gap": 0,
    "paddingLeft": 5,
    "fontFamily": "Arial",
    "popUpBackgroundOpacity": 0.72,
    "fontColor": "#333333",
    "height": "27.397%",
    "popUpShadowBlurRadius": 6,
    "fontStyle": "normal",
    "textDecoration": "none",
    "shadow": false,
    "minHeight": 20,
    "prompt": "Location List",
    "fontWeight": "normal",
    "arrowColor": "#0066FF",
    "backgroundColorDirection": "vertical",
    "popUpShadowOpacity": 0,
    "borderRadius": 4,
    "paddingBottom": 0,
    "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F",
    "selectedPopUpFontColor": "#FFFFFF",
    "class": "DropDown",
    "popUpShadowSpread": 1,
    "minWidth": 200,
    "backgroundOpacity": 0.72,
    "paddingTop": 0,
    "playList": "this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
    "popUpShadowColor": "#000000",
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "popUpShadow": false,
    "popUpBackgroundColor": "#FFFFFF",
    "selectedPopUpBackgroundColor": "#0066FF"
   }
  ],
  "overflow": "scroll",
  "verticalAlign": "top",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "borderSize": 0,
  "width": "100%",
  "height": "10%",
  "layout": "horizontal",
  "contentOpaque": false,
  "gap": 10,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "horizontalAlign": "left",
  "shadow": false,
  "scrollBarMargin": 2,
  "minHeight": 1,
  "top": "0.96%",
  "paddingBottom": 0,
  "id": "Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F",
  "borderRadius": 0,
  "class": "Container",
  "scrollBarColor": "#000000",
  "minWidth": 1,
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "left": "0%"
 },
 {
  "verticalAlign": "middle",
  "fontSize": 20,
  "borderSize": 0,
  "width": "100%",
  "paddingRight": 0,
  "textShadowHorizontalLength": 1,
  "height": "10%",
  "fontFamily": "Arial",
  "text": "La Lima Free Zone",
  "paddingLeft": 0,
  "fontStyle": "normal",
  "textShadowBlurRadius": 3,
  "fontColor": "#FFFFFF",
  "horizontalAlign": "center",
  "textDecoration": "none",
  "textShadowColor": "#000000",
  "shadow": false,
  "minHeight": 1,
  "fontWeight": "normal",
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "textShadowVerticalLength": 1,
  "id": "Label_E2D61738_F65E_D8BA_41DD_6888E340C197",
  "borderRadius": 0,
  "class": "Label",
  "minWidth": 1,
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "textShadowOpacity": 1,
  "left": "0%"
 },
 {
  "verticalAlign": "middle",
  "fontSize": 20,
  "borderSize": 0,
  "width": "100%",
  "paddingRight": 0,
  "textShadowHorizontalLength": 1,
  "height": "10%",
  "fontFamily": "Arial",
  "text": "Cartago City",
  "paddingLeft": 0,
  "fontStyle": "normal",
  "textShadowBlurRadius": 3,
  "fontColor": "#FFFFFF",
  "horizontalAlign": "center",
  "textDecoration": "none",
  "textShadowColor": "#000000",
  "shadow": false,
  "minHeight": 1,
  "fontWeight": "normal",
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "textShadowVerticalLength": 1,
  "id": "Label_E253EC4C_F622_28DA_41DB_546DF82EE842",
  "borderRadius": 0,
  "class": "Label",
  "minWidth": 1,
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "textShadowOpacity": 1,
  "left": "0%"
 },
 {
  "verticalAlign": "middle",
  "fontSize": 20,
  "borderSize": 0,
  "width": "100%",
  "paddingRight": 0,
  "textShadowHorizontalLength": 1,
  "height": "13.108%",
  "fontFamily": "Arial",
  "text": "Corporate Center Project",
  "paddingLeft": 0,
  "fontStyle": "normal",
  "textShadowBlurRadius": 3,
  "fontColor": "#FFFFFF",
  "horizontalAlign": "center",
  "textDecoration": "none",
  "textShadowColor": "#000000",
  "shadow": false,
  "minHeight": 1,
  "fontWeight": "normal",
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "textShadowVerticalLength": 1,
  "id": "Label_E216BE12_F622_684F_41EC_C2D2817E217E",
  "borderRadius": 0,
  "class": "Label",
  "minWidth": 1,
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "textShadowOpacity": 1,
  "left": "0%"
 },
 {
  "verticalAlign": "middle",
  "fontSize": 20,
  "borderSize": 0,
  "width": "100%",
  "paddingRight": 0,
  "textShadowHorizontalLength": 1,
  "height": "3.5%",
  "fontFamily": "Arial",
  "text": "Corporate Building",
  "paddingLeft": 0,
  "fontStyle": "normal",
  "textShadowBlurRadius": 3,
  "fontColor": "#FFFFFF",
  "horizontalAlign": "center",
  "textDecoration": "none",
  "textShadowColor": "#000000",
  "shadow": false,
  "minHeight": 1,
  "fontWeight": "normal",
  "top": "6%",
  "visible": false,
  "paddingBottom": 0,
  "textShadowVerticalLength": 1,
  "id": "Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515",
  "borderRadius": 0,
  "class": "Label",
  "minWidth": 1,
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "textShadowOpacity": 1,
  "left": "0%"
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
      "backgroundColor": [
       "#FFFFFF"
      ],
      "paddingRight": 0,
      "borderSize": 0,
      "width": "99.907%",
      "height": "100%",
      "url": "https://www.xline3d.com/360/lalimav6.html",
      "paddingLeft": 0,
      "scrollEnabled": true,
      "shadow": false,
      "minHeight": 1,
      "top": "0%",
      "backgroundColorDirection": "vertical",
      "paddingBottom": 0,
      "id": "WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21",
      "borderRadius": 0,
      "class": "WebFrame",
      "minWidth": 1,
      "backgroundOpacity": 1,
      "paddingTop": 0,
      "insetBorder": false,
      "right": "0%"
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "borderSize": 0,
      "maxWidth": 394,
      "height": "10.979%",
      "maxHeight": 396,
      "url": "skin/Image_8DEE620A_9CF3_CE34_41DA_A961CBC52418.png",
      "paddingLeft": 0,
      "width": "6.97%",
      "horizontalAlign": "center",
      "scaleMode": "fit_inside",
      "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, false, 0, null, null, false)",
      "shadow": false,
      "minHeight": 1,
      "borderRadius": 0,
      "top": "0%",
      "paddingBottom": 0,
      "id": "Image_8DEE620A_9CF3_CE34_41DA_A961CBC52418",
      "class": "Image",
      "minWidth": 1,
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "right": "0%"
     }
    ],
    "overflow": "scroll",
    "verticalAlign": "top",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "borderSize": 0,
    "width": "91.341%",
    "height": "91.081%",
    "layout": "absolute",
    "contentOpaque": false,
    "gap": 10,
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "horizontalAlign": "left",
    "shadow": false,
    "scrollBarMargin": 2,
    "minHeight": 1,
    "bottom": "3.11%",
    "borderRadius": 0,
    "paddingBottom": 0,
    "backgroundColorDirection": "vertical",
    "id": "Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41",
    "class": "Container",
    "minWidth": 1,
    "backgroundOpacity": 0.3,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "left": "4.32%"
   }
  ],
  "overflow": "scroll",
  "verticalAlign": "top",
  "backgroundColor": [
   "#000000"
  ],
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "borderSize": 0,
  "width": "100%",
  "height": "100%",
  "layout": "absolute",
  "contentOpaque": false,
  "gap": 10,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "horizontalAlign": "left",
  "shadow": false,
  "scrollBarMargin": 2,
  "minHeight": 1,
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "visible": false,
  "id": "Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E",
  "borderRadius": 0,
  "class": "Container",
  "minWidth": 1,
  "backgroundOpacity": 0.3,
  "paddingTop": 0,
  "scrollBarColor": "#000000",
  "scrollBarVisible": "rollOver",
  "left": "0%"
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "backgroundColor": [
   "#000000"
  ],
  "paddingRight": 0,
  "borderSize": 0,
  "paddingLeft": 0,
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "shadow": false,
  "minHeight": 0,
  "top": 0,
  "bottom": 0,
  "borderRadius": 0,
  "paddingBottom": 0,
  "visible": false,
  "backgroundColorDirection": "vertical",
  "id": "veilPopupPanorama",
  "class": "UIComponent",
  "minWidth": 0,
  "backgroundOpacity": 0.55,
  "paddingTop": 0,
  "left": 0,
  "right": 0
 },
 {
  "backgroundColorRatios": [],
  "backgroundColor": [],
  "paddingRight": 0,
  "borderSize": 0,
  "paddingLeft": 0,
  "scaleMode": "custom",
  "shadow": false,
  "minHeight": 0,
  "top": 0,
  "bottom": 0,
  "borderRadius": 0,
  "paddingBottom": 0,
  "visible": false,
  "backgroundColorDirection": "vertical",
  "id": "zoomImagePopupPanorama",
  "class": "ZoomImage",
  "minWidth": 0,
  "backgroundOpacity": 1,
  "paddingTop": 0,
  "left": 0,
  "right": 0
 },
 {
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "label": "",
  "verticalAlign": "middle",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "iconHeight": 20,
  "paddingRight": 5,
  "borderSize": 0,
  "fontSize": 12,
  "mode": "push",
  "fontFamily": "Arial",
  "iconWidth": 20,
  "paddingLeft": 5,
  "fontStyle": "normal",
  "fontColor": "#FFFFFF",
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "textDecoration": "none",
  "iconColor": "#000000",
  "shadow": false,
  "pressedIconColor": "#888888",
  "minHeight": 0,
  "iconLineWidth": 5,
  "fontWeight": "normal",
  "layout": "horizontal",
  "horizontalAlign": "center",
  "top": 10,
  "cursor": "hand",
  "backgroundColorDirection": "vertical",
  "rollOverIconColor": "#666666",
  "borderRadius": 0,
  "paddingBottom": 5,
  "visible": false,
  "id": "closeButtonPopupPanorama",
  "borderColor": "#000000",
  "class": "CloseButton",
  "minWidth": 0,
  "backgroundOpacity": 0.3,
  "shadowSpread": 1,
  "paddingTop": 5,
  "shadowColor": "#000000",
  "shadowBlurRadius": 6,
  "gap": 5,
  "iconBeforeLabel": true,
  "right": 10
 }
], 
 "overflow": "visible",
 "verticalAlign": "top",
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_8D77CB90_9D1A_7418_41CE_80424A826C11.set('selectedIndex', 0)",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "width": "100%",
 "height": "100%",
 "layout": "absolute",
 "contentOpaque": false,
 "gap": 10,
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "scripts": {
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "existsKey": function(key){  return key in window; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getKey": function(key){  return window[key]; },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); }
 },
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarMargin": 2,
 "minHeight": 20,
 "vrPolyfillScale": 0.5,
 "borderRadius": 0,
 "paddingBottom": 0,
 "id": "rootPlayer",
 "class": "Player",
 "minWidth": 20,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "mouseWheelEnabled": true
})