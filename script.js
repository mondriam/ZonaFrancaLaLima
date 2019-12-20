(function(){
    var script = { "definitions": [
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345E2D97_20DF_6BB3_41B0_9902D5E426BC",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_34C7CF92_2462_35EB_41BC_B680871E4163",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.08,
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
  "easing": "cubic_in_out",
  "id": "effect_345F6D8F_20DF_6B94_410B_52B44954FB30",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2A374D50_2462_3567_41C0_E8CF136B194E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -107.93,
   "hfov": 105,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E3587215_ED68_4577_4183_716A0D8E6DA7",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_3565BFF0_2462_3527_41BB_8006D34BDC0A",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_EF6CE355_F62E_F8F5_41E6_CBD8B4202E02",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_34D03FA2_2462_352B_41C1_1176338CD561",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -138.7,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "label": "CC Fase2_1",
  "id": "media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "label": "16-Oficinas Parque",
     "id": "panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "label": "IMG_20180114_162347_00_013-edit",
        "id": "panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "label": "IMG_20180114_164030_00_037-edit",
           "id": "panorama_392AB3A7_202B_B425_41B4_97BA77B34913",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9",
             "yaw": -47.62,
             "distance": 1,
             "backwardYaw": -156.29
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "label": "IMG_20180114_184740_00_077-edit",
              "id": "panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9",
                "yaw": -136.07,
                "distance": 1,
                "backwardYaw": -99.84
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913",
                "yaw": -41.93,
                "distance": 1,
                "backwardYaw": -90.76
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "class": "Panorama",
                 "label": "IMG_20180114_182756_00_062-edit",
                 "id": "panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9",
                   "yaw": -82.34,
                   "distance": 1,
                   "backwardYaw": 152.2
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913",
                   "yaw": 173.4,
                   "distance": 1,
                   "backwardYaw": -8.49
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F",
                   "yaw": -137.91,
                   "distance": 1,
                   "backwardYaw": -91.43
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
                   },
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9, this.camera_2987DCD3_2462_3B69_41B9_CE72BD4BA82D); this.setMediaBehaviour(this.playList_2999EADE_2462_3F1A_41B2_4D569B09D1A6, 0, this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -82.34,
                       "hfov": 5.79,
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
                       "pitch": 11.88
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
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_0_HS_0_0.png",
                          "width": 105,
                          "height": 105
                         }
                        ]
                       },
                       "pitch": 11.88,
                       "yaw": -82.34
                      }
                     ],
                     "id": "overlay_3C9B5DAE_2028_AC27_4190_B52A4E5DB0C7",
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913, this.camera_298D3CE3_2462_3B29_41A4_1A96D0A35A03); this.setMediaBehaviour(this.playList_2A6C4AEE_2462_3F3A_41B5_AD386BFA30AA, 0, this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 173.4,
                       "hfov": 5.72,
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
                       "pitch": 15
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
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_0_HS_1_0.png",
                          "width": 105,
                          "height": 105
                         }
                        ]
                       },
                       "pitch": 15,
                       "yaw": 173.4
                      }
                     ],
                     "id": "overlay_3D8A571F_2038_BDE6_41B0_86A3FD7A806A",
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F, this.camera_299B8CF2_2462_3B2B_41C0_39751B78FF3A); this.setMediaBehaviour(this.playList_2A69FAEE_2462_3F3A_4155_2AF5BE65C8E7, 0, this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -137.91,
                       "hfov": 5.77,
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
                       "pitch": 12.97
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
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
                       "yaw": -137.91
                      }
                     ],
                     "id": "overlay_3C22B53A_2039_7C2E_41BE_610A90637DB1",
                     "data": {
                      "label": "Image"
                     }
                    }
                   ],
                   "thumbnailUrl": "media/panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_t.jpg"
                },
                "yaw": -91.43,
                "distance": 1,
                "backwardYaw": -137.91
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
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9, this.camera_2A748D12_2462_3AEA_4183_64E0296E23EE); this.setMediaBehaviour(this.playList_2999EADE_2462_3F1A_41B2_4D569B09D1A6, 0, this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -136.07,
                    "hfov": 5.66,
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
                    "pitch": 17.15
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
                       "url": "media/panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_0_HS_0_0.png",
                       "width": 105,
                       "height": 105
                      }
                     ]
                    },
                    "pitch": 17.15,
                    "yaw": -136.07
                   }
                  ],
                  "id": "overlay_3C762CAF_2037_AC25_41A3_83F067EFAA70",
                  "data": {
                   "label": "Image"
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83, this.camera_2A485D21_2462_3529_41B0_577D2268F99C); this.setMediaBehaviour(this.playList_2A6DDAEE_2462_3F3A_41A8_F8AB88A24ABF, 0, this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -91.43,
                    "hfov": 5.67,
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
                    "pitch": 16.64
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
                       "url": "media/panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_0_HS_1_0.png",
                       "width": 105,
                       "height": 105
                      }
                     ]
                    },
                    "pitch": 16.64,
                    "yaw": -91.43
                   }
                  ],
                  "id": "overlay_3D9D570A_2037_9DEF_41B5_D907B3F37D68",
                  "data": {
                   "label": "Image"
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913, this.camera_2A437D21_2462_3529_4182_80C12CF5AE07); this.setMediaBehaviour(this.playList_2A6C4AEE_2462_3F3A_41B5_AD386BFA30AA, 0, this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -41.93,
                    "hfov": 5.66,
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
                    "pitch": 16.98
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
                       "url": "media/panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_0_HS_2_0.png",
                       "width": 105,
                       "height": 105
                      }
                     ]
                    },
                    "pitch": 16.98,
                    "yaw": -41.93
                   }
                  ],
                  "id": "overlay_3DC56285_2039_74E5_41B0_D0728579773C",
                  "data": {
                   "label": "Image"
                  }
                 }
                ],
                "thumbnailUrl": "media/panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_t.jpg"
             },
             "yaw": -90.76,
             "distance": 1,
             "backwardYaw": -41.93
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83",
             "yaw": -8.49,
             "distance": 1,
             "backwardYaw": 173.4
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
             },
             "overlays": [
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83, this.camera_2BD0AE98_2462_37E7_41B0_003BB68A0DD4); this.setMediaBehaviour(this.playList_2A6DDAEE_2462_3F3A_41A8_F8AB88A24ABF, 0, this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913)",
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -8.49,
                 "hfov": 5.75,
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
                 "pitch": 13.97
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
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
                 "yaw": -8.49
                }
               ],
               "id": "overlay_3C60DC5F_2038_EC65_4185_38D0FADF74B8",
               "data": {
                "label": "Image"
               }
              },
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9, this.camera_2BF48E79_2462_3719_41C0_F98AED8A0416); this.setMediaBehaviour(this.playList_2999EADE_2462_3F1A_41B2_4D569B09D1A6, 0, this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913)",
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -47.62,
                 "hfov": 5.74,
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
                 "pitch": 14.3
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
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
                 "yaw": -47.62
                }
               ],
               "id": "overlay_3DB6F882_203F_94DE_41BA_8F0A0B004768",
               "data": {
                "label": "Image"
               }
              },
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F, this.camera_2BC5DE89_2462_37E6_4190_9D8240E51110); this.setMediaBehaviour(this.playList_2A69FAEE_2462_3F3A_4155_2AF5BE65C8E7, 0, this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913)",
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -90.76,
                 "hfov": 5.74,
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
                 "pitch": 14.14
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
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
                 "yaw": -90.76
                }
               ],
               "id": "overlay_3C793618_2039_9FEB_419C_B7CA81A1CC95",
               "data": {
                "label": "Image"
               }
              }
             ],
             "thumbnailUrl": "media/panorama_392AB3A7_202B_B425_41B4_97BA77B34913_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_392AB3A7_202B_B425_41B4_97BA77B34913_t.jpg"
          },
          "yaw": -156.29,
          "distance": 1,
          "backwardYaw": -47.62
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F",
          "yaw": -99.84,
          "distance": 1,
          "backwardYaw": -136.07
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83",
          "yaw": 152.2,
          "distance": 1,
          "backwardYaw": -82.34
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
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83, this.camera_2B81AEB8_2462_3726_41B7_E6143FA7D31E); this.setMediaBehaviour(this.playList_2A6DDAEE_2462_3F3A_41A8_F8AB88A24ABF, 0, this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9)",
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 152.2,
              "hfov": 5.57,
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
              "pitch": 19.79
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.57,
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
              "pitch": 19.79,
              "yaw": 152.2
             }
            ],
            "id": "overlay_3D016EE4_202B_AC5B_419A_EF724BB8E210",
            "data": {
             "label": "Image"
            }
           },
           {
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F, this.camera_2BB1DEA8_2462_3727_4197_CD0B5F50D7AC); this.setMediaBehaviour(this.playList_2A69FAEE_2462_3F3A_4155_2AF5BE65C8E7, 0, this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9)",
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -99.84,
              "hfov": 5.65,
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
              "pitch": 17.27
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.65,
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
              "pitch": 17.27,
              "yaw": -99.84
             }
            ],
            "id": "overlay_3CD6003A_2028_B42F_41AE_90AF011D1E71",
            "data": {
             "label": "Image"
            }
           },
           {
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913, this.camera_2BA0BE98_2462_37E7_41B1_FE91AD9C967B); this.setMediaBehaviour(this.playList_2A6C4AEE_2462_3F3A_41B5_AD386BFA30AA, 0, this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9)",
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -156.29,
              "hfov": 5.66,
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
              "pitch": 17.07
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
                 "url": "media/panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_0_HS_2_0.png",
                 "width": 105,
                 "height": 105
                }
               ]
              },
              "pitch": 17.07,
              "yaw": -156.29
             }
            ],
            "id": "overlay_3DD4E7EE_2038_9C27_41BA_6627AB36F43E",
            "data": {
             "label": "Image"
            }
           }
          ],
          "thumbnailUrl": "media/panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_t.jpg"
       }
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
          "panorama": "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
          "yaw": 51.74,
          "distance": 1,
          "backwardYaw": 176.92
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
             "panorama": {
              "class": "Panorama",
              "label": "Main Entrance",
              "id": "panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
                "yaw": -19.33,
                "distance": 1,
                "backwardYaw": 150.13
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9"
               }
              ],
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "cardboardMenu": {
               "fontFamily": "Arial",
               "rollOverOpacity": 0.8,
               "rollOverBackgroundColor": "#000000",
               "label": "Media",
               "id": "Menu_2A492B0D_2462_3EFE_41C1_4BBC15726E11",
               "fontColor": "#FFFFFF",
               "selectedFontColor": "#FFFFFF",
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
               "rollOverFontColor": "#FFFFFF",
               "class": "Menu",
               "opacity": 0.4,
               "selectedBackgroundColor": "#202020",
               "backgroundColor": "#404040"
              },
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
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_2AC82DAE_2462_353A_41A0_7F56E4A1104C); this.setMediaBehaviour(this.playList_299A5ADE_2462_3F1A_41A9_41A3B4AF792E, 0, this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
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
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.showPopupPanoramaOverlay(this.popup_3A3EE0E8_20F8_B42B_41BC_69EB00174351, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#666666','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'pressedIconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','iconHeight':20,'backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0}, this.ImageResource_095DF95B_2068_946E_41BC_F6A772F09771, null, null, null, null, false)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
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
                  }
                 },
                 {
                  "showEasing": "cubic_in",
                  "rotationX": 0,
                  "rotationZ": 0,
                  "class": "PopupPanoramaOverlay",
                  "id": "popup_3A3EE0E8_20F8_B42B_41BC_69EB00174351",
                  "hfov": 5.9,
                  "hideDuration": 500,
                  "rotationY": 0,
                  "popupDistance": 100,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "url": "media/popup_3A3EE0E8_20F8_B42B_41BC_69EB00174351_0_2.jpg",
                     "width": 1024,
                     "height": 682
                    }
                   ]
                  },
                  "pitch": -4.39,
                  "popupMaxWidth": "95%",
                  "hideEasing": "cubic_out",
                  "yaw": -68.51,
                  "popupMaxHeight": "95%",
                  "showDuration": 500
                 },
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.setMediaBehaviour(this.playList_2999EADE_2462_3F1A_41B2_4D569B09D1A6, 0, this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -54.75,
                    "hfov": 4.85,
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
                    "pitch": 34.99
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
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_2_0.png",
                       "width": 105,
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
                  }
                 }
                ],
                "thumbnailUrl": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_t.jpg"
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
                     "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_2A607ADE_2462_3F1A_41B1_186048A57112.set('selectedIndex', -1); }, this); this.playList_2A607ADE_2462_3F1A_41B1_186048A57112.set('selectedIndex', 0)",
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
                     "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_2998DADE_2462_3F1A_41BF_1BDF1396F478.set('selectedIndex', -1); }, this); this.playList_2998DADE_2462_3F1A_41BF_1BDF1396F478.set('selectedIndex', 0)",
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
                     "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_2A66AADE_2462_3F1A_41A4_2E4324190EE2.set('selectedIndex', -1); }, this); this.playList_2A66AADE_2462_3F1A_41A4_2E4324190EE2.set('selectedIndex', 0)",
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
                     "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_2A664ADE_2462_3F1A_41A8_DECD6137FE42.set('selectedIndex', -1); }, this); this.playList_2A664ADE_2462_3F1A_41A8_DECD6137FE42.set('selectedIndex', 0)",
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
                     "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_2A667ADE_2462_3F1A_4199_70379E28AAD3.set('selectedIndex', -1); }, this); this.playList_2A667ADE_2462_3F1A_4199_70379E28AAD3.set('selectedIndex', 0)",
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
                     "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_2A663ADE_2462_3F1A_41AF_6D0B1A60DB41.set('selectedIndex', -1); }, this); this.playList_2A663ADE_2462_3F1A_41AF_6D0B1A60DB41.set('selectedIndex', 0)",
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
                     "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_2A65EADE_2462_3F1A_4196_275437319D9E.set('selectedIndex', -1); }, this); this.playList_2A65EADE_2462_3F1A_4196_275437319D9E.set('selectedIndex', 0)",
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
                     "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_2A65AADE_2462_3F1A_41A3_EAD3156F3452.set('selectedIndex', -1); }, this); this.playList_2A65AADE_2462_3F1A_41A3_EAD3156F3452.set('selectedIndex', 0)",
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
                     "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_2A656AEE_2462_3F3A_41B7_03F326C32581.set('selectedIndex', -1); }, this); this.playList_2A656AEE_2462_3F3A_41B7_03F326C32581.set('selectedIndex', 0)",
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
                     "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_2A652AEE_2462_3F3A_41C0_606D6B933062.set('selectedIndex', -1); }, this); this.playList_2A652AEE_2462_3F3A_41C0_606D6B933062.set('selectedIndex', 0)",
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
                "x": 281.15,
                "angle": 0,
                "y": 422.75,
                "class": "PanoramaMapLocation"
               }
              ],
              "thumbnailUrl": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_t.jpg"
             },
             "yaw": 150.13,
             "distance": 1,
             "backwardYaw": -19.33
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
                   "panorama": {
                    "class": "Panorama",
                    "label": "5-Arte Rotonda",
                    "id": "panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
                    "adjacentPanoramas": [
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
                       "class": "Panorama",
                       "label": "6-Lagunas de Retencion",
                       "id": "panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
                       "adjacentPanoramas": [
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
                             "label": "8-Pastizal Atr\u00e1s",
                             "id": "panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "class": "Panorama",
                                "label": "15-Esquina Heraus",
                                "id": "panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E",
                                "adjacentPanoramas": [
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
                                      "label": "12-Entre Zollner y Coloplast",
                                      "id": "panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
                                      "adjacentPanoramas": [
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
                                           "yaw": 88.55,
                                           "distance": 1,
                                           "backwardYaw": -80.71
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
                                           "yaw": -94.64,
                                           "distance": 1,
                                           "backwardYaw": 179.05
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83"
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
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_2AE49B8B_2462_3DF9_4194_FD3E6211133A); this.setMediaBehaviour(this.playList_2A607ADE_2462_3F1A_41B1_186048A57112, 0, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
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
                                             }
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_2AF6EBAA_2462_3D3B_41A2_253693D8559B); this.setMediaBehaviour(this.playList_2A66AADE_2462_3F1A_41A4_2E4324190EE2, 0, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
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
                                             }
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.showPopupPanoramaOverlay(this.popup_3A305B90_20FB_94FB_4193_FEB3450979FC, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#666666','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'pressedIconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','iconHeight':20,'backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0}, null, null, null, null, null, false)",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -57.55,
                                               "hfov": 5.82,
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
                                               "pitch": 10.34
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
                                                  "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_2_0.png",
                                                  "width": 105,
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": 10.34,
                                               "yaw": -57.55
                                              }
                                             ],
                                             "id": "overlay_3AE1C5BB_20F8_BC2E_41B5_14023BA58135",
                                             "data": {
                                              "label": "Image"
                                             }
                                            },
                                            {
                                             "showEasing": "cubic_in",
                                             "rotationX": 0,
                                             "rotationZ": 0,
                                             "class": "PopupPanoramaOverlay",
                                             "id": "popup_3A305B90_20FB_94FB_4193_FEB3450979FC",
                                             "hfov": 5.82,
                                             "hideDuration": 500,
                                             "rotationY": 0,
                                             "popupDistance": 100,
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
                                             "pitch": 10.34,
                                             "popupMaxWidth": "95%",
                                             "hideEasing": "cubic_out",
                                             "yaw": -57.55,
                                             "popupMaxHeight": "95%",
                                             "showDuration": 500
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.setMediaBehaviour(this.playList_2A6DDAEE_2462_3F3A_41A8_F8AB88A24ABF, 0, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
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
                                             }
                                            }
                                           ],
                                           "thumbnailUrl": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_t.jpg"
                                          }
                                         ],
                                         "thumbnailUrl": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_t.jpg"
                                        },
                                        "yaw": 179.05,
                                        "distance": 1,
                                        "backwardYaw": -94.64
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
                                        "yaw": 79.43,
                                        "distance": 1,
                                        "backwardYaw": -95.46
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
                                           "panorama": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
                                           "yaw": -117.3,
                                           "distance": 1,
                                           "backwardYaw": -90.48
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "label": "VID_20180114_174842_00_051 (VR2 Output)_1",
                                            "id": "media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7",
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
                                              "yaw": -80.79,
                                              "distance": 1,
                                              "backwardYaw": -144.51
                                             }
                                            ],
                                            "class": "Video360",
                                            "loop": true,
                                            "pitch": 0,
                                            "partial": false,
                                            "vfov": 180,
                                            "hfov": 360,
                                            "overlays": [
                                             {
                                              "rollOverDisplay": false,
                                              "areas": [
                                               {
                                                "class": "HotspotPanoramaOverlayArea",
                                                "click": "this.startPanoramaWithCamera(this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E, this.camera_34F7CF73_2462_3529_41B8_1DF6EB053FF3); this.setMediaBehaviour(this.playList_2A664ADE_2462_3F1A_41A8_DECD6137FE42, 0, this.media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7)",
                                                "mapColor": "#FF0000"
                                               }
                                              ],
                                              "useHandCursor": true,
                                              "enabledInCardboard": true,
                                              "class": "HotspotPanoramaOverlay",
                                              "maps": [
                                               {
                                                "class": "HotspotPanoramaOverlayMap",
                                                "yaw": 0,
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
                                                "pitch": 0,
                                                "playbackPositions": [
                                                 {
                                                  "roll": 0,
                                                  "timestamp": 0,
                                                  "pitch": 0.14,
                                                  "class": "PanoramaOverlayPlaybackPosition",
                                                  "yaw": -80.79,
                                                  "hfov": 9.37,
                                                  "opacity": 1
                                                 }
                                                ]
                                               }
                                              ],
                                              "items": [
                                               {
                                                "class": "HotspotPanoramaOverlayImage",
                                                "playbackPositions": [
                                                 {
                                                  "roll": 0,
                                                  "timestamp": 0,
                                                  "pitch": 0.14,
                                                  "class": "PanoramaOverlayPlaybackPosition",
                                                  "yaw": -80.79,
                                                  "hfov": 9.37,
                                                  "opacity": 1
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
                                                "yaw": 0
                                               }
                                              ],
                                              "id": "overlay_0B568079_2077_742D_418C_ECAE137D4E12",
                                              "data": {
                                               "label": "Image"
                                              }
                                             }
                                            ],
                                            "hfovMax": 140,
                                            "hfovMin": 60,
                                            "thumbnailUrl": "media/media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7_t.jpg",
                                            "video": [
                                             {
                                              "width": 3840,
                                              "type": "video/mp4",
                                              "framerate": 30,
                                              "bitrate": 9931,
                                              "class": "Video360Resource",
                                              "url": "media/media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7.mp4",
                                              "height": 2160,
                                              "posterURL": "media/media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7_poster.jpg"
                                             },
                                             {
                                              "width": 3168,
                                              "type": "video/mp4",
                                              "framerate": 30,
                                              "bitrate": 9931,
                                              "class": "Video360Resource",
                                              "url": "media/media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7_ios.mp4",
                                              "height": 1782,
                                              "posterURL": "media/media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7_poster.jpg"
                                             }
                                            ]
                                           },
                                           "yaw": -144.51,
                                           "distance": 1,
                                           "backwardYaw": -80.79
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83"
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
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_2B264C66_2462_3B2A_41B6_B4565F8125FF); this.setMediaBehaviour(this.playList_2A66AADE_2462_3F1A_41A4_2E4324190EE2, 0, this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E)",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
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
                                             }
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.setMediaBehaviour(this.playList_2A6DDAEE_2462_3F3A_41A8_F8AB88A24ABF, 0, this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E)",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
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
                                             }
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7, this.camera_2B302C75_2462_3B29_4167_DC36EAF9EF76); this.setMediaBehaviour(this.playList_2A6D8AEE_2462_3F3A_414E_FB27FE84CAE8, 0, this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E); this.MainViewerPanoramaPlayer.play()",
                                               "mapColor": "image"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
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
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246, this.camera_2B07AC75_2462_3B29_41A8_D5DFA793FADF); this.setMediaBehaviour(this.playList_2A6FAAEE_2462_3F3A_41B6_4A5D33DCB15E, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
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
                                          }
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525, this.camera_29AACCA4_2462_3B2F_4195_F977F96F04F7); this.setMediaBehaviour(this.playList_2A667ADE_2462_3F1A_4199_70379E28AAD3, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
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
                                          }
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E, this.camera_29AD0CB4_2462_3B2E_41AF_426EF8D9BA17); this.setMediaBehaviour(this.playList_2A664ADE_2462_3F1A_41A8_DECD6137FE42, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
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
                                          }
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.showPopupPanoramaOverlay(this.popup_3A3C822F_20F8_9425_41B2_B5F3B1085960, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#666666','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'pressedIconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','iconHeight':20,'backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0}, this.ImageResource_0AAA2971_2068_943D_41B4_10DFF5B38D1B, null, null, null, null, false)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -3.96,
                                            "hfov": 5.78,
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
                                            "pitch": 12.42
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 5.78,
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
                                            "pitch": 12.42,
                                            "yaw": -3.96
                                           }
                                          ],
                                          "id": "overlay_3AE247CE_20F8_FC66_41BD_400C31C50BE9",
                                          "data": {
                                           "label": "Image"
                                          }
                                         },
                                         {
                                          "showEasing": "cubic_in",
                                          "rotationX": 0,
                                          "rotationZ": 0,
                                          "class": "PopupPanoramaOverlay",
                                          "id": "popup_3A3C822F_20F8_9425_41B2_B5F3B1085960",
                                          "hfov": 5.78,
                                          "hideDuration": 500,
                                          "rotationY": 0,
                                          "popupDistance": 100,
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
                                          "pitch": 12.42,
                                          "popupMaxWidth": "95%",
                                          "hideEasing": "cubic_out",
                                          "yaw": -3.96,
                                          "popupMaxHeight": "95%",
                                          "showDuration": 500
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.setMediaBehaviour(this.playList_2A6DDAEE_2462_3F3A_41A8_F8AB88A24ABF, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
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
                                          }
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.setMediaBehaviour(this.playList_2A6C4AEE_2462_3F3A_41B5_AD386BFA30AA, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
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
                                     "yaw": -95.46,
                                     "distance": 1,
                                     "backwardYaw": 79.43
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E",
                                     "yaw": 99.68,
                                     "distance": 1,
                                     "backwardYaw": 27.45
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913"
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
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_2A56DD31_2462_3526_41B4_1AE52CB4B152); this.setMediaBehaviour(this.playList_2A66AADE_2462_3F1A_41A4_2E4324190EE2, 0, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
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
                                       }
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E, this.camera_2A5C2D41_2462_3566_419A_5677B860C8D7); this.setMediaBehaviour(this.playList_2A663ADE_2462_3F1A_41AF_6D0B1A60DB41, 0, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
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
                                       }
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.setMediaBehaviour(this.playList_2A6C4AEE_2462_3F3A_41B5_AD386BFA30AA, 0, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
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
                                       }
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
                                  "yaw": 27.45,
                                  "distance": 1,
                                  "backwardYaw": 99.68
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
                                  "panorama": "this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913"
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
                                  },
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525, this.camera_3416FF54_2462_356E_41BD_124C3AB38200); this.setMediaBehaviour(this.playList_2A667ADE_2462_3F1A_4199_70379E28AAD3, 0, this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 27.45,
                                      "hfov": 5.92,
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
                                      "pitch": -0.71
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
                                         "url": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_0_HS_0_0.png",
                                         "width": 105,
                                         "height": 105
                                        }
                                       ]
                                      },
                                      "pitch": -0.71,
                                      "yaw": 27.45
                                     }
                                    ],
                                    "id": "overlay_0D67D590_1FF8_9CFA_41B0_E874938AA003",
                                    "data": {
                                     "label": "Image"
                                    }
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368, this.camera_34E69F63_2462_3529_41C1_42AA2071EF73); this.setMediaBehaviour(this.playList_2A65EADE_2462_3F1A_4196_275437319D9E, 0, this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -63.16,
                                      "hfov": 3.49,
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
                                      "pitch": -1.78
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "yaw": -63.16
                                     }
                                    ],
                                    "id": "overlay_0D20317E_1FF9_B426_41B0_73281C7DB384",
                                    "data": {
                                     "label": "Image"
                                    }
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.showPopupPanoramaOverlay(this.popup_3A24E5A5_20F8_BCDA_41A8_FE67D62CDC94, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#666666','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'pressedIconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','iconHeight':20,'backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0}, this.ImageResource_0AACC979_2068_942D_41A4_C9A0C0413384, null, null, null, null, false)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -7.65,
                                      "hfov": 5.75,
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
                                      "pitch": 13.94
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 5.75,
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
                                      "pitch": 13.94,
                                      "yaw": -7.65
                                     }
                                    ],
                                    "id": "overlay_3AEAF3EB_20F9_742D_41AB_09B61C7F5B0F",
                                    "data": {
                                     "label": "Image"
                                    }
                                   },
                                   {
                                    "showEasing": "cubic_in",
                                    "rotationX": 0,
                                    "rotationZ": 0,
                                    "class": "PopupPanoramaOverlay",
                                    "id": "popup_3A24E5A5_20F8_BCDA_41A8_FE67D62CDC94",
                                    "hfov": 5.75,
                                    "hideDuration": 500,
                                    "rotationY": 0,
                                    "popupDistance": 100,
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
                                    "pitch": 13.94,
                                    "popupMaxWidth": "95%",
                                    "hideEasing": "cubic_out",
                                    "yaw": -7.65,
                                    "popupMaxHeight": "95%",
                                    "showDuration": 500
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.setMediaBehaviour(this.playList_2A6C4AEE_2462_3F3A_41B5_AD386BFA30AA, 0, this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 147.85,
                                      "hfov": 3.43,
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
                                      "pitch": 54.6
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "yaw": 147.85
                                     }
                                    ],
                                    "id": "overlay_05B83903_2058_95DE_418E_11245F463B12",
                                    "data": {
                                     "label": "Image"
                                    }
                                   }
                                  ],
                                  "thumbnailUrl": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_t.jpg"
                                 }
                                ],
                                "mapLocations": [
                                 {
                                  "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                  "x": 78.4,
                                  "angle": 143.13,
                                  "y": 138.6,
                                  "class": "PanoramaMapLocation"
                                 }
                                ],
                                "thumbnailUrl": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_t.jpg"
                               },
                               "yaw": 72.35,
                               "distance": 1,
                               "backwardYaw": -63.16
                              },
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
                               "panorama": "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F"
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
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E, this.camera_2AD59DAE_2462_353A_41A5_2304F1F630BA); this.setMediaBehaviour(this.playList_2A663ADE_2462_3F1A_41AF_6D0B1A60DB41, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
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
                                 }
                                },
                                {
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9, this.camera_2AA14DBE_2462_351A_41BD_492717DDAB6A); this.setMediaBehaviour(this.playList_2A652AEE_2462_3F3A_41C0_606D6B933062, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
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
                                 }
                                },
                                {
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.setMediaBehaviour(this.playList_2A6C4AEE_2462_3F3A_41B5_AD386BFA30AA, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
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
                                 }
                                },
                                {
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.setMediaBehaviour(this.playList_2A69FAEE_2462_3F3A_4155_2AF5BE65C8E7, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
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
                                 }
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
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E, this.camera_2AAF8C08_2462_3AE7_41B7_FFCAF00CA382); this.setMediaBehaviour(this.playList_2A65AADE_2462_3F1A_41A3_EAD3156F3452, 0, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
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
                              }
                             },
                             {
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368, this.camera_2ADE8BF9_2462_3D26_41B6_D68A37A07881); this.setMediaBehaviour(this.playList_2A65EADE_2462_3F1A_4196_275437319D9E, 0, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
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
                              }
                             },
                             {
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.setMediaBehaviour(this.playList_2A69FAEE_2462_3F3A_4155_2AF5BE65C8E7, 0, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
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
                              }
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
                         "yaw": 139.43,
                         "distance": 1,
                         "backwardYaw": 23.32
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F"
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
                         "yaw": -30.03,
                         "distance": 1,
                         "backwardYaw": -5.23
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
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_348C5FE0_2462_3527_41BB_FF6AAE1AA6AE); this.setMediaBehaviour(this.playList_2A6FFAEE_2462_3F3A_41B9_ED299D2720D6, 0, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
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
                           }
                          },
                          {
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9, this.camera_34833FE0_2462_3527_41BD_DA8A8E9919DA); this.setMediaBehaviour(this.playList_2A652AEE_2462_3F3A_41C0_606D6B933062, 0, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
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
                           }
                          },
                          {
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.setMediaBehaviour(this.playList_2A69FAEE_2462_3F3A_4155_2AF5BE65C8E7, 0, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 142.5,
                             "hfov": 2.4,
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
                             "pitch": 66.14
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
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
                             "yaw": 142.5
                            }
                           ],
                           "id": "overlay_037A2FFE_2029_6C26_41B6_1BF59A245E5D",
                           "data": {
                            "label": "Image"
                           }
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
                      "yaw": -5.23,
                      "distance": 1,
                      "backwardYaw": -30.03
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
                      "yaw": -164.09,
                      "distance": 1,
                      "backwardYaw": 12.49
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
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_2B5BEE2B_2462_3739_41B6_F152A031C03F); this.setMediaBehaviour(this.playList_2A607ADE_2462_3F1A_41B1_186048A57112, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
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
                        }
                       },
                       {
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E, this.camera_2B48DE1C_2462_371E_41BB_B43EE97060A2); this.setMediaBehaviour(this.playList_2A65AADE_2462_3F1A_41A3_EAD3156F3452, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
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
                        }
                       },
                       {
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0B7B5A27_1FEB_7426_4195_945554348391, this.camera_2B7E8E0C_2462_36FE_41AA_0CE76CD964A9); this.setMediaBehaviour(this.playList_2A656AEE_2462_3F3A_41B7_03F326C32581, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
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
                        }
                       },
                       {
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.setMediaBehaviour(this.playList_2A69FAEE_2462_3F3A_4155_2AF5BE65C8E7, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 0.33,
                          "hfov": 4.73,
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
                          "pitch": 36.98
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
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_3_0.png",
                             "width": 105,
                             "height": 105
                            }
                           ]
                          },
                          "pitch": 36.98,
                          "yaw": 0.33
                         }
                        ],
                        "id": "overlay_02E95182_2028_B4DE_41B1_F1922BBD0381",
                        "data": {
                         "label": "Image"
                        }
                       }
                      ],
                      "thumbnailUrl": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_t.jpg"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_t.jpg"
                   },
                   "yaw": -155.58,
                   "distance": 1,
                   "backwardYaw": 69.33
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "label": "VID_20180114_173636_00_050_1_1",
                    "id": "media_0BA5C089_2079_B4ED_41A8_D2AC2349E041",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
                      "yaw": 104.85,
                      "distance": 1,
                      "backwardYaw": 172.46
                     }
                    ],
                    "class": "Video360",
                    "loop": true,
                    "pitch": 0,
                    "partial": false,
                    "vfov": 180,
                    "hfov": 360,
                    "overlays": [
                     {
                      "rollOverDisplay": false,
                      "areas": [
                       {
                        "class": "HotspotPanoramaOverlayArea",
                        "click": "this.startPanoramaWithCamera(this.panorama_0B7B5A27_1FEB_7426_4195_945554348391, this.camera_2A19EB7B_2462_3D19_41B7_7C16EF2990E1); this.setMediaBehaviour(this.playList_2A656AEE_2462_3F3A_41B7_03F326C32581, 0, this.media_0BA5C089_2079_B4ED_41A8_D2AC2349E041)",
                        "mapColor": "#FF0000"
                       }
                      ],
                      "useHandCursor": true,
                      "enabledInCardboard": true,
                      "class": "HotspotPanoramaOverlay",
                      "maps": [
                       {
                        "class": "HotspotPanoramaOverlayMap",
                        "yaw": 0,
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
                        "pitch": 0,
                        "playbackPositions": [
                         {
                          "roll": 0,
                          "timestamp": 0,
                          "pitch": 2.5,
                          "class": "PanoramaOverlayPlaybackPosition",
                          "yaw": 104.85,
                          "hfov": 9.37,
                          "opacity": 1
                         }
                        ]
                       }
                      ],
                      "items": [
                       {
                        "class": "HotspotPanoramaOverlayImage",
                        "playbackPositions": [
                         {
                          "roll": 0,
                          "timestamp": 0,
                          "pitch": 2.5,
                          "class": "PanoramaOverlayPlaybackPosition",
                          "yaw": 104.85,
                          "hfov": 9.37,
                          "opacity": 1
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
                        "yaw": 0
                       }
                      ],
                      "id": "overlay_0A3F492F_207B_B425_41BC_52C0E074EC22",
                      "data": {
                       "label": "Image"
                      }
                     }
                    ],
                    "hfovMax": 140,
                    "hfovMin": 60,
                    "thumbnailUrl": "media/media_0BA5C089_2079_B4ED_41A8_D2AC2349E041_t.jpg",
                    "video": [
                     {
                      "width": 3840,
                      "type": "video/mp4",
                      "framerate": 25,
                      "bitrate": 10020,
                      "class": "Video360Resource",
                      "url": "media/media_0BA5C089_2079_B4ED_41A8_D2AC2349E041.mp4",
                      "height": 2160,
                      "posterURL": "media/media_0BA5C089_2079_B4ED_41A8_D2AC2349E041_poster.jpg"
                     },
                     {
                      "width": 3168,
                      "type": "video/mp4",
                      "framerate": 25,
                      "bitrate": 10020,
                      "class": "Video360Resource",
                      "url": "media/media_0BA5C089_2079_B4ED_41A8_D2AC2349E041_ios.mp4",
                      "height": 1782,
                      "posterURL": "media/media_0BA5C089_2079_B4ED_41A8_D2AC2349E041_poster.jpg"
                     }
                    ]
                   },
                   "yaw": 172.46,
                   "distance": 1,
                   "backwardYaw": 104.85
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F"
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
                   "yaw": -174.5,
                   "distance": 1,
                   "backwardYaw": 66.08
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
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_2AADBDCD_2462_3579_41AE_F551F0EF5B0F); this.setMediaBehaviour(this.playList_2A6FFAEE_2462_3F3A_41B9_ED299D2720D6, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
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
                     }
                    },
                    {
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_2A8B2DDD_2462_351E_41C0_668A0C6AEA7B); this.setMediaBehaviour(this.playList_2A607ADE_2462_3F1A_41B1_186048A57112, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
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
                     }
                    },
                    {
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.setMediaBehaviour(this.playList_2A69FAEE_2462_3F3A_4155_2AF5BE65C8E7, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
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
                     }
                    },
                    {
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.media_0BA5C089_2079_B4ED_41A8_D2AC2349E041, this.camera_2AB99DDD_2462_351E_41B5_E282036EF84C); this.setMediaBehaviour(this.playList_2A6D3AEE_2462_3F3A_419E_BC84B1432A3C, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391); this.MainViewerPanoramaPlayer.play()",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
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
                          "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_3_0_0_map.gif",
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
                          "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_3_0.png",
                          "width": 132,
                          "height": 132
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
                "yaw": 66.08,
                "distance": 1,
                "backwardYaw": -174.5
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
                "yaw": 12.49,
                "distance": 1,
                "backwardYaw": -164.09
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
                "yaw": -80.71,
                "distance": 1,
                "backwardYaw": 88.55
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F"
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
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_2B755C47_2462_3B6A_41B8_CA293AC789E5); this.setMediaBehaviour(this.playList_299A5ADE_2462_3F1A_41A9_41A3B4AF792E, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
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
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_2B458C47_2462_3B6A_41A8_FAC22154F55C); this.setMediaBehaviour(this.playList_2A6FFAEE_2462_3F3A_41B9_ED299D2720D6, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 12.49,
                    "hfov": 5.9,
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
                    "pitch": -4.53
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
                       "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_1_0.png",
                       "width": 105,
                       "height": 105
                      }
                     ]
                    },
                    "pitch": -4.53,
                    "yaw": 12.49
                   }
                  ],
                  "id": "overlay_0B49D73A_1AA1_BCD9_41B4_8D43FC88B793",
                  "data": {
                   "label": "Image"
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246, this.camera_2B554C56_2462_3B6B_41B8_FE93CCB8633E); this.setMediaBehaviour(this.playList_2A6FAAEE_2462_3F3A_41B6_4A5D33DCB15E, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -80.71,
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
                       "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_2_0.png",
                       "width": 105,
                       "height": 105
                      }
                     ]
                    },
                    "pitch": -3.81,
                    "yaw": -80.71
                   }
                  ],
                  "id": "overlay_0CC2B1E1_1AE1_4D00_41B1_ACF7784104D5",
                  "data": {
                   "label": "Image"
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0B7B5A27_1FEB_7426_4195_945554348391, this.camera_2A9BFC27_2462_3B29_41AF_FFD2570731AC); this.setMediaBehaviour(this.playList_2A656AEE_2462_3F3A_41B7_03F326C32581, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
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
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_2B6BFC37_2462_3B2A_41B7_5D3901856868); this.setMediaBehaviour(this.playList_2998DADE_2462_3F1A_41BF_1BDF1396F478, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
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
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.showPopupPanoramaOverlay(this.popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#666666','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'pressedIconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','iconHeight':20,'backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0}, null, null, null, null, null, false)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -44.81,
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
                    "pitch": 8.62
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
                    "pitch": 8.62,
                    "yaw": -44.81
                   }
                  ],
                  "id": "overlay_3AF637F8_20F8_9C2A_419C_75BB4D5E26FF",
                  "data": {
                   "label": "Image"
                  }
                 },
                 {
                  "showEasing": "cubic_in",
                  "rotationX": 0,
                  "rotationZ": 0,
                  "class": "PopupPanoramaOverlay",
                  "id": "popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7",
                  "hfov": 5.85,
                  "hideDuration": 500,
                  "rotationY": 0,
                  "popupDistance": 100,
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
                  "pitch": 8.62,
                  "popupMaxWidth": "95%",
                  "hideEasing": "cubic_out",
                  "yaw": -44.81,
                  "popupMaxHeight": "95%",
                  "showDuration": 500
                 },
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.setMediaBehaviour(this.playList_2A69FAEE_2462_3F3A_4155_2AF5BE65C8E7, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
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
                  }
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
             "yaw": -25.53,
             "distance": 1,
             "backwardYaw": 174.57
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
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714, this.camera_2B0F1E5A_2462_371A_41BD_59E597E173BB); this.mainPlayList.set('selectedIndex', 0)",
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
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
               }
              },
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_2B18CE69_2462_3739_41A7_B48B894256CD); this.setMediaBehaviour(this.playList_2998DADE_2462_3F1A_41BF_1BDF1396F478, 0, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)",
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
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
               }
              },
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_2BEBBE69_2462_3739_41C0_B0E32EF15754); this.setMediaBehaviour(this.playList_2A607ADE_2462_3F1A_41B1_186048A57112, 0, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)",
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
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
               }
              },
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_3AF279F7_20F8_9425_41B8_727B1C05B69A, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#666666','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'pressedIconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','iconHeight':20,'backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0}, this.ImageResource_095FC95D_2068_946A_41A5_88BA52F0CF59, null, null, null, null, false)",
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
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
               }
              },
              {
               "showEasing": "cubic_in",
               "rotationX": 0,
               "rotationZ": 0,
               "class": "PopupPanoramaOverlay",
               "id": "popup_3AF279F7_20F8_9425_41B8_727B1C05B69A",
               "hfov": 5.92,
               "hideDuration": 500,
               "rotationY": 0,
               "popupDistance": 100,
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
               "popupMaxWidth": "95%",
               "hideEasing": "cubic_out",
               "yaw": 81.82,
               "popupMaxHeight": "95%",
               "showDuration": 500
              },
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.setMediaBehaviour(this.playList_2A69FAEE_2462_3F3A_4155_2AF5BE65C8E7, 0, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)",
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
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
               }
              }
             ],
             "thumbnailUrl": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_t.jpg"
          },
          "yaw": 150.05,
          "distance": 1,
          "backwardYaw": 41.3
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714"
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9"
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
             "panorama": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
             "yaw": -91.85,
             "distance": 1,
             "backwardYaw": -59.69
            },
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
                "yaw": 176.9,
                "distance": 1,
                "backwardYaw": -176.55
               }
              ],
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "cardboardMenu": "this.Menu_2A492B0D_2462_3EFE_41C1_4BBC15726E11",
              "hfovMax": 120,
              "hfov": 360,
              "hfovMin": 100,
              "frames": [
               {
                "class": "CubicPanoramaFrame",
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_343BCF25_2462_3529_418C_85F1C39F69FF); this.mainPlayList.set('selectedIndex', 1)",
                    "mapColor": "image"
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
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
                  }
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
             "yaw": -176.55,
             "distance": 1,
             "backwardYaw": 176.9
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
                 "label": "Restrooms",
                 "id": "panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                   "yaw": 27.08,
                   "distance": 1,
                   "backwardYaw": -166.68
                  }
                 ],
                 "pitch": 0,
                 "partial": false,
                 "vfov": 180,
                 "cardboardMenu": "this.Menu_2A492B0D_2462_3EFE_41C1_4BBC15726E11",
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
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_2A3C9B3C_2462_3D1E_41BB_6F621549D0F8); this.mainPlayList.set('selectedIndex', 16)",
                       "mapColor": "image"
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
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
                     }
                    },
                    {
                     "bleaching": 0.7,
                     "bleachingDistance": 0.4,
                     "class": "LensFlarePanoramaOverlay",
                     "yaw": -74.61,
                     "id": "overlay_FE341697_EE9B_B5BB_41CC_1DCF1E1B9FE9",
                     "pitch": 59.4
                    },
                    {
                     "bleaching": 0.7,
                     "bleachingDistance": 0.4,
                     "class": "LensFlarePanoramaOverlay",
                     "yaw": -13.79,
                     "id": "overlay_FE452B9D_EE9B_93AF_41C8_E05C00B1EC74",
                     "pitch": 28.05
                    },
                    {
                     "bleaching": 0.7,
                     "bleachingDistance": 0.4,
                     "class": "LensFlarePanoramaOverlay",
                     "yaw": -151.67,
                     "id": "overlay_FE59F0F5_EE9B_8D7F_41E8_C632466F366D",
                     "pitch": 31.07
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
                "yaw": -166.68,
                "distance": 1,
                "backwardYaw": 27.08
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
                      "yaw": 3.46,
                      "distance": 1,
                      "backwardYaw": -176.41
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
                               "yaw": -176.35,
                               "distance": 1,
                               "backwardYaw": 66.4
                              }
                             ],
                             "pitch": 0,
                             "partial": false,
                             "vfov": 180,
                             "cardboardMenu": "this.Menu_2A492B0D_2462_3EFE_41C1_4BBC15726E11",
                             "hfovMax": 120,
                             "hfov": 360,
                             "hfovMin": 100,
                             "frames": [
                              {
                               "class": "CubicPanoramaFrame",
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_2A0FFB5C_2462_3D1F_4164_30E431DCED12); this.mainPlayList.set('selectedIndex', 5)",
                                   "mapColor": "image"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
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
                                 }
                                },
                                {
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_D60305E4_DCEA_D39F_419B_D9B149482827, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#CCCCCC','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#FF0000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconWidth':50,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0.09803921568627451],'iconWidth':50,'borderColor':'#000000','iconHeight':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':50,'rollOverIconWidth':50,'backgroundColor':['#000000'],'pressedBorderSize':0}, this.ImageResource_D09C8172_DCEA_737B_41C7_76727B821C90, null, null, null, null, false)",
                                   "mapColor": "image"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
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
                                 }
                                },
                                {
                                 "showEasing": "cubic_in",
                                 "rotationX": 0,
                                 "rotationZ": 0,
                                 "class": "PopupPanoramaOverlay",
                                 "id": "popup_D60305E4_DCEA_D39F_419B_D9B149482827",
                                 "hfov": 8.23,
                                 "hideDuration": 500,
                                 "rotationY": 0,
                                 "popupDistance": 100,
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
                                 "popupMaxWidth": "95%",
                                 "hideEasing": "cubic_out",
                                 "yaw": 72.56,
                                 "popupMaxHeight": "95%",
                                 "showDuration": 500
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
                            "yaw": 66.4,
                            "distance": 1,
                            "backwardYaw": -176.35
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
                            "yaw": -117.42,
                            "distance": 1,
                            "backwardYaw": 72.07
                           }
                          ],
                          "pitch": 0,
                          "partial": false,
                          "vfov": 180,
                          "cardboardMenu": "this.Menu_2A492B0D_2462_3EFE_41C1_4BBC15726E11",
                          "hfovMax": 120,
                          "hfov": 360,
                          "hfovMin": 100,
                          "frames": [
                           {
                            "class": "CubicPanoramaFrame",
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_2A374D50_2462_3567_41C0_E8CF136B194E); this.mainPlayList.set('selectedIndex', 11)",
                                "mapColor": "image"
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
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
                              }
                             },
                             {
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D, this.camera_2A2A3D50_2462_3567_41C1_4686127C2177); this.mainPlayList.set('selectedIndex', 4)",
                                "mapColor": "image"
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
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
                              }
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
                       "pitch": 0,
                       "partial": false,
                       "vfov": 180,
                       "cardboardMenu": "this.Menu_2A492B0D_2462_3EFE_41C1_4BBC15726E11",
                       "hfovMax": 120,
                       "hfov": 360,
                       "hfovMin": 80,
                       "frames": [
                        {
                         "class": "CubicPanoramaFrame",
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_347F2EE6_2462_372B_4195_F92023D1CF32); this.mainPlayList.set('selectedIndex', 10)",
                             "mapColor": "image"
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
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
                           }
                          },
                          {
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_346DFED7_2462_376A_41B7_0C15F3B14536); this.mainPlayList.set('selectedIndex', 5)",
                             "mapColor": "image"
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
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
                           }
                          },
                          {
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupPanoramaOverlay(this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#CCCCCC','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#FF0000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconWidth':50,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0.09803921568627451],'iconWidth':50,'borderColor':'#000000','iconHeight':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':50,'rollOverIconWidth':50,'backgroundColor':['#000000'],'pressedBorderSize':0}, this.ImageResource_D082516E_DCEA_7368_41CB_9D0CFA830713, null, null, null, null, false)",
                             "mapColor": "image"
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
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
                           }
                          },
                          {
                           "showEasing": "cubic_in",
                           "rotationX": 0,
                           "rotationZ": 0,
                           "class": "PopupPanoramaOverlay",
                           "id": "popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
                           "hfov": 8.22,
                           "hideDuration": 500,
                           "rotationY": 0,
                           "popupDistance": 100,
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
                           "popupMaxWidth": "95%",
                           "hideEasing": "cubic_out",
                           "yaw": -36.13,
                           "popupMaxHeight": "95%",
                           "showDuration": 500
                          },
                          {
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupPanoramaOverlay(this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#CCCCCC','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#FF0000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconWidth':50,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0.09803921568627451],'iconWidth':50,'borderColor':'#000000','iconHeight':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':50,'rollOverIconWidth':50,'backgroundColor':['#000000'],'pressedBorderSize':0}, this.ImageResource_D38C2C6E_DFA1_73F8_41C3_8C1C155D72CB, null, null, null, null, false)",
                             "mapColor": "image"
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
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
                           }
                          },
                          {
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupPanoramaOverlay(this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#CCCCCC','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#FF0000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconWidth':50,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0.09803921568627451],'iconWidth':50,'borderColor':'#000000','iconHeight':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':50,'rollOverIconWidth':50,'backgroundColor':['#000000'],'pressedBorderSize':0}, this.ImageResource_D09DC170_DCEA_7378_41EB_423962A6DDEA, null, null, null, null, false)",
                             "mapColor": "image"
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
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
                           }
                          },
                          {
                           "showEasing": "cubic_in",
                           "rotationX": 0,
                           "rotationZ": 0,
                           "class": "PopupPanoramaOverlay",
                           "id": "popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
                           "hfov": 8.24,
                           "hideDuration": 500,
                           "rotationY": 0,
                           "popupDistance": 100,
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
                           "popupMaxWidth": "95%",
                           "hideEasing": "cubic_out",
                           "yaw": 102.19,
                           "popupMaxHeight": "95%",
                           "showDuration": 500
                          },
                          {
                           "bleaching": 0.7,
                           "bleachingDistance": 0.4,
                           "class": "LensFlarePanoramaOverlay",
                           "yaw": 4,
                           "id": "overlay_D4A17713_DF66_0D7B_41EA_88920C3D3D96",
                           "pitch": 29.81
                          },
                          {
                           "bleaching": 0.7,
                           "bleachingDistance": 0.4,
                           "class": "LensFlarePanoramaOverlay",
                           "yaw": 125.52,
                           "id": "overlay_D4BC6C09_DF66_0357_41CE_9C3B75EE1C61",
                           "pitch": 33.62
                          },
                          {
                           "bleaching": 0.7,
                           "bleachingDistance": 0.4,
                           "class": "LensFlarePanoramaOverlay",
                           "yaw": -105.71,
                           "id": "overlay_D4BAE022_DF66_0355_41EA_F8574F4021B9",
                           "pitch": 19.14
                          },
                          {
                           "showEasing": "cubic_in",
                           "rotationX": 0,
                           "rotationZ": 0,
                           "class": "PopupPanoramaOverlay",
                           "id": "popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
                           "hfov": 8.15,
                           "hideDuration": 500,
                           "rotationY": 0,
                           "popupDistance": 100,
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
                           "popupMaxWidth": "95%",
                           "hideEasing": "cubic_out",
                           "yaw": -170.82,
                           "popupMaxHeight": "95%",
                           "showDuration": 500
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
                      "yaw": 99.45,
                      "distance": 1,
                      "backwardYaw": -85.38
                     }
                    ],
                    "pitch": 0,
                    "partial": false,
                    "vfov": 180,
                    "cardboardMenu": "this.Menu_2A492B0D_2462_3EFE_41C1_4BBC15726E11",
                    "hfovMax": 120,
                    "hfov": 360,
                    "hfovMin": 80,
                    "frames": [
                     {
                      "class": "CubicPanoramaFrame",
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_2AC10BBA_2462_3D1A_41B0_EA8CADAE7AF5); this.mainPlayList.set('selectedIndex', 3)",
                          "mapColor": "image"
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
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
                        }
                       },
                       {
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_2AD38BD9_2462_3D19_4168_143D438E27A8); this.mainPlayList.set('selectedIndex', 11)",
                          "mapColor": "image"
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
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
                        }
                       },
                       {
                        "bleaching": 0.7,
                        "bleachingDistance": 0.4,
                        "class": "LensFlarePanoramaOverlay",
                        "yaw": -0.57,
                        "id": "overlay_D364F048_DF66_03D5_41E1_5EA3BC9637F0",
                        "pitch": 16.86
                       },
                       {
                        "bleaching": 0.7,
                        "bleachingDistance": 0.4,
                        "class": "LensFlarePanoramaOverlay",
                        "yaw": 164.38,
                        "id": "overlay_D37D2F7A_DF66_1DB5_41C0_1FB80896FEB3",
                        "pitch": 16.1
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
                 "pitch": 0,
                 "partial": false,
                 "vfov": 180,
                 "cardboardMenu": "this.Menu_2A492B0D_2462_3EFE_41C1_4BBC15726E11",
                 "hfovMax": 120,
                 "hfov": 360,
                 "hfovMin": 100,
                 "frames": [
                  {
                   "class": "CubicPanoramaFrame",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_2B31CE3B_2462_371A_41BD_C79F63DEA3EB); this.mainPlayList.set('selectedIndex', 16)",
                       "mapColor": "image"
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
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
                     }
                    },
                    {
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_2B26CE3B_2462_371A_41AB_116B3D414700); this.mainPlayList.set('selectedIndex', 10)",
                       "mapColor": "image"
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
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
                     }
                    },
                    {
                     "bleaching": 0.7,
                     "bleachingDistance": 0.4,
                     "class": "LensFlarePanoramaOverlay",
                     "yaw": -0.95,
                     "id": "overlay_D4BE7E36_DF66_3FBD_41E5_D711B6782282",
                     "pitch": 19.14
                    },
                    {
                     "bleaching": 0.7,
                     "bleachingDistance": 0.4,
                     "class": "LensFlarePanoramaOverlay",
                     "yaw": 164.38,
                     "id": "overlay_D4BB02EB_DF66_04AB_41E7_314E72AF48E7",
                     "pitch": 17.62
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
                "yaw": -139.07,
                "distance": 1,
                "backwardYaw": 96.47
               },
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
                      "yaw": -61.02,
                      "distance": 1,
                      "backwardYaw": 99.63
                     }
                    ],
                    "pitch": 0,
                    "partial": false,
                    "vfov": 180,
                    "cardboardMenu": "this.Menu_2A492B0D_2462_3EFE_41C1_4BBC15726E11",
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
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_34055F44_2462_356F_41B8_8E9F5D4371FC); this.mainPlayList.set('selectedIndex', 7)",
                          "mapColor": "image"
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
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
                        }
                       },
                       {
                        "bleaching": 0.7,
                        "bleachingDistance": 0.4,
                        "class": "LensFlarePanoramaOverlay",
                        "yaw": 95.38,
                        "id": "overlay_39DF8AEE_37C2_AC40_417A_6242CBF48B68",
                        "pitch": 16.72
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
                 "pitch": 0,
                 "partial": false,
                 "vfov": 180,
                 "cardboardMenu": "this.Menu_2A492B0D_2462_3EFE_41C1_4BBC15726E11",
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
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_2A6F9D02_2462_3AEB_41C0_4235477188E1); this.mainPlayList.set('selectedIndex', 16)",
                       "mapColor": "image"
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
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
                     }
                    },
                    {
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175, this.camera_2A61ECF2_2462_3B2B_41A9_D11CBDE64FC3); this.mainPlayList.set('selectedIndex', 15)",
                       "mapColor": "image"
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
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
                     }
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
                "yaw": -16.11,
                "distance": 1,
                "backwardYaw": -3.13
               },
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
                 "class": "Panorama",
                 "label": "Empty Shell",
                 "id": "panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "class": "Panorama",
                    "label": "20",
                    "id": "panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
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
                         "panorama": {
                          "class": "Panorama",
                          "label": "18",
                          "id": "panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
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
                          "pitch": 0,
                          "partial": false,
                          "vfov": 180,
                          "cardboardMenu": "this.Menu_2A492B0D_2462_3EFE_41C1_4BBC15726E11",
                          "hfovMax": 120,
                          "hfov": 360,
                          "hfovMin": 100,
                          "frames": [
                           {
                            "class": "CubicPanoramaFrame",
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_2A8ABC27_2462_3B29_412F_A62179F68790); this.mainPlayList.set('selectedIndex', 6)",
                                "mapColor": "image"
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
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
                              }
                             },
                             {
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_2AB8DC18_2462_3AE6_41C1_9911DBCA20D4); this.mainPlayList.set('selectedIndex', 14)",
                                "mapColor": "image"
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
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
                              }
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
                         "yaw": -31.12,
                         "distance": 1,
                         "backwardYaw": 133.34
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6"
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
                         "yaw": 56.43,
                         "distance": 1,
                         "backwardYaw": -146.27
                        }
                       ],
                       "pitch": 0,
                       "partial": false,
                       "vfov": 180,
                       "cardboardMenu": "this.Menu_2A492B0D_2462_3EFE_41C1_4BBC15726E11",
                       "hfovMax": 120,
                       "hfov": 360,
                       "hfovMin": 100,
                       "frames": [
                        {
                         "class": "CubicPanoramaFrame",
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_29B7ACC4_2462_3B6E_41B7_BBA18C108D2D); this.mainPlayList.set('selectedIndex', 12)",
                             "mapColor": "image"
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
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
                           }
                          },
                          {
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_29B89CD3_2462_3B69_41B4_78D1615810E0); this.mainPlayList.set('selectedIndex', 13)",
                             "mapColor": "image"
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
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
                           }
                          },
                          {
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.mainPlayList.set('selectedIndex', 1)",
                             "mapColor": "image"
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
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
                           }
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
                    "pitch": 0,
                    "partial": false,
                    "vfov": 180,
                    "cardboardMenu": "this.Menu_2A492B0D_2462_3EFE_41C1_4BBC15726E11",
                    "hfovMax": 120,
                    "hfov": 360,
                    "hfovMin": 100,
                    "frames": [
                     {
                      "class": "CubicPanoramaFrame",
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_2A3C6D60_2462_3526_41BD_50B293C10078); this.mainPlayList.set('selectedIndex', 14)",
                          "mapColor": "image"
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
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
                        }
                       },
                       {
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_2A098D6F_2462_3539_41A3_BE3482CC796C); this.mainPlayList.set('selectedIndex', 6)",
                          "mapColor": "image"
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
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
                        }
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
                 "pitch": 0,
                 "partial": false,
                 "vfov": 180,
                 "cardboardMenu": "this.Menu_2A492B0D_2462_3EFE_41C1_4BBC15726E11",
                 "hfovMax": 120,
                 "hfov": 360,
                 "hfovMin": 100,
                 "frames": [
                  {
                   "class": "CubicPanoramaFrame",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_34599F06_2462_36EA_41BA_BA31E3683422); this.mainPlayList.set('selectedIndex', 12)",
                       "mapColor": "image"
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
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
                     }
                    },
                    {
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_3448BEF6_2462_372B_41BC_90438FEA1BE7); this.mainPlayList.set('selectedIndex', 13)",
                       "mapColor": "image"
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
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
                     }
                    },
                    {
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_342ADF15_2462_36E9_41BE_FD8AF3289C7C); this.mainPlayList.set('selectedIndex', 16)",
                       "mapColor": "image"
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
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
                     }
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
                "yaw": -76.25,
                "distance": 1,
                "backwardYaw": -170.05
               }
              ],
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "cardboardMenu": "this.Menu_2A492B0D_2462_3EFE_41C1_4BBC15726E11",
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
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_2AF7BD8F_2462_35FA_41A2_8B9A1B3001B0); this.mainPlayList.set('selectedIndex', 1)",
                    "mapColor": "image"
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
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
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3, this.camera_2A173D6F_2462_3539_41A7_CABB0B56CF27); this.mainPlayList.set('selectedIndex', 2)",
                    "mapColor": "image"
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
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
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_2AFC1D9E_2462_351B_41C1_E570D1A8FDC7); this.mainPlayList.set('selectedIndex', 6)",
                    "mapColor": "image"
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
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
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_2AEA5D8F_2462_35FA_41B1_63101D22D6B7); this.mainPlayList.set('selectedIndex', 7)",
                    "mapColor": "image"
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
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
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_2A1C1D7F_2462_3519_41C0_343738950990); this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "image"
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
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
                  }
                 },
                 {
                  "bleaching": 0.7,
                  "bleachingDistance": 0.4,
                  "class": "LensFlarePanoramaOverlay",
                  "yaw": -108.98,
                  "id": "overlay_39E9E5BE_37C2_E4C0_41C8_ED2101A9B7E1",
                  "pitch": 44.67
                 },
                 {
                  "bleaching": 0.7,
                  "bleachingDistance": 0.4,
                  "class": "LensFlarePanoramaOverlay",
                  "yaw": 14.17,
                  "id": "overlay_39F9CEF7_37C2_E441_4193_83EA81D1DE6F",
                  "pitch": 28.8
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
             "yaw": 87.33,
             "distance": 1,
             "backwardYaw": 32.92
            }
           ],
           "pitch": 0,
           "partial": false,
           "vfov": 180,
           "cardboardMenu": "this.Menu_2A492B0D_2462_3EFE_41C1_4BBC15726E11",
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 100,
           "frames": [
            {
             "class": "CubicPanoramaFrame",
             "overlays": [
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_2B6CEE0C_2462_36FE_41BA_EB1AE17FB0F8); this.mainPlayList.set('selectedIndex', 16)",
                 "mapColor": "image"
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
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
               }
              },
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104, this.camera_2B602DFC_2462_351F_41C1_714064CA48AF); this.mainPlayList.set('selectedIndex', 8)",
                 "mapColor": "image"
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
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
               }
              },
              {
               "bleaching": 0.7,
               "bleachingDistance": 0.4,
               "class": "LensFlarePanoramaOverlay",
               "yaw": -92.76,
               "id": "overlay_D7DEC935_DCEA_FB36_41D7_D4FB63048649",
               "pitch": -1.05
              },
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#CCCCCC','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#FF0000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconWidth':50,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0.09803921568627451],'iconWidth':50,'borderColor':'#000000','iconHeight':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':50,'rollOverIconWidth':50,'backgroundColor':['#000000'],'pressedBorderSize':0}, this.ImageResource_C406C318_D4FF_7ACD_41B8_0A98872E7CE5, null, null, null, null, false)",
                 "mapColor": "image"
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
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
               }
              },
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#CCCCCC','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#FF0000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconWidth':50,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0.09803921568627451],'iconWidth':50,'borderColor':'#000000','iconHeight':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':50,'rollOverIconWidth':50,'backgroundColor':['#000000'],'pressedBorderSize':0}, this.ImageResource_C4896E50_D4F3_6B5D_41D3_2EEBDC3443C4, null, null, null, null, false)",
                 "mapColor": "image"
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
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
               }
              },
              {
               "showEasing": "cubic_in",
               "rotationX": 0,
               "rotationZ": 0,
               "class": "PopupPanoramaOverlay",
               "id": "popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D",
               "hfov": 8.04,
               "hideDuration": 500,
               "rotationY": 0,
               "popupDistance": 100,
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
               "popupMaxWidth": "95%",
               "hideEasing": "cubic_out",
               "yaw": 163.85,
               "popupMaxHeight": "95%",
               "showDuration": 500
              },
              {
               "showEasing": "cubic_in",
               "rotationX": 0,
               "rotationZ": 0,
               "class": "PopupPanoramaOverlay",
               "id": "popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0",
               "hfov": 7.64,
               "hideDuration": 500,
               "rotationY": 0,
               "popupDistance": 100,
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
               "popupMaxWidth": "95%",
               "hideEasing": "cubic_out",
               "yaw": 7.39,
               "popupMaxHeight": "95%",
               "showDuration": 500
              },
              {
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_2A951DEC_2462_353F_41A9_631BA904AA0A); this.setMediaBehaviour(this.playList_2998DADE_2462_3F1A_41BF_1BDF1396F478, 0, this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6)",
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
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
               }
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
          "yaw": -59.69,
          "distance": 1,
          "backwardYaw": -91.85
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
          "yaw": -157.73,
          "distance": 1,
          "backwardYaw": 137.01
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
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_34D03FA2_2462_352B_41C1_1176338CD561); this.setMediaBehaviour(this.playList_299A5ADE_2462_3F1A_41A9_41A3B4AF792E, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
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
            }
           },
           {
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
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
            }
           },
           {
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748, this.camera_34C7CF92_2462_35EB_41BC_B680871E4163); this.setMediaBehaviour(this.playList_2A690AEE_2462_3F3A_41B7_1993BEFF42CE, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 51.74,
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
              "pitch": -1.65
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
              "pitch": -1.65,
              "yaw": 51.74
             }
            ],
            "id": "overlay_0A8869D2_1A28_BAC6_41B3_CB74A246FC3A",
            "data": {
             "label": "Image"
            }
           },
           {
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_34A31FB2_2462_352A_41BC_3375309BC718); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
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
            }
           },
           {
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_34B28FD1_2462_3566_41B6_12D04FA3C64E); this.setMediaBehaviour(this.playList_2A607ADE_2462_3F1A_41B1_186048A57112, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
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
            }
           },
           {
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#666666','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'pressedIconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','iconHeight':20,'backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':20,'rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0}, this.ImageResource_0AA1E95D_2068_946A_419A_A79BE517FB92, null, null, null, null, false)",
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
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
            }
           },
           {
            "showEasing": "cubic_in",
            "rotationX": 0,
            "rotationZ": 0,
            "class": "PopupPanoramaOverlay",
            "id": "popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E",
            "hfov": 3.78,
            "hideDuration": 500,
            "rotationY": 0,
            "popupDistance": 100,
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
            "popupMaxWidth": "95%",
            "hideEasing": "cubic_out",
            "yaw": -55.53,
            "popupMaxHeight": "95%",
            "showDuration": 500
           },
           {
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.setMediaBehaviour(this.playList_2999EADE_2462_3F1A_41B2_4D569B09D1A6, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
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
            }
           }
          ],
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
        "thumbnailUrl": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_t.jpg"
       },
       "yaw": 176.92,
       "distance": 1,
       "backwardYaw": 51.74
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1",
       "yaw": -85.83,
       "distance": 1,
       "backwardYaw": -118.47
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
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_2B92FEC7_2462_3769_41B4_D4A675689206); this.setMediaBehaviour(this.playList_2998DADE_2462_3F1A_41BF_1BDF1396F478, 0, this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748)",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
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
         }
        },
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1, this.camera_2B9C4EC7_2462_3769_41B6_CB0DB10D657C); this.setMediaBehaviour(this.playList_2A687AEE_2462_3F3A_41B1_8945C9643985, 0, this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748); this.MainViewerPanoramaPlayer.play()",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
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
              "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_1_0_0_map.gif",
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
              "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_1_0.png",
              "width": 105,
              "height": 105
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
         }
        },
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.setMediaBehaviour(this.playList_2999EADE_2462_3F1A_41B2_4D569B09D1A6, 0, this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748)",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 27.83,
           "hfov": 3.96,
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
           "pitch": 48.04
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
              "class": "ImageResourceLevel",
              "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_2_0.png",
              "width": 105,
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
         }
        }
       ],
       "thumbnailUrl": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_t.jpg"
    },
    "yaw": -118.47,
    "distance": 1,
    "backwardYaw": -85.83
   }
  ],
  "class": "Video360",
  "loop": true,
  "pitch": 0,
  "partial": false,
  "vfov": 180,
  "hfov": 360,
  "overlays": [
   {
    "rollOverDisplay": false,
    "areas": [
     {
      "class": "HotspotPanoramaOverlayArea",
      "click": "this.startPanoramaWithCamera(this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748, this.camera_2B03EE4A_2462_377B_41BD_27D92DE5E749); this.setMediaBehaviour(this.playList_2A690AEE_2462_3F3A_41B7_1993BEFF42CE, 0, this.media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1)",
      "mapColor": "#FF0000"
     }
    ],
    "useHandCursor": true,
    "enabledInCardboard": true,
    "class": "HotspotPanoramaOverlay",
    "maps": [
     {
      "class": "HotspotPanoramaOverlayMap",
      "yaw": 0,
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
      "pitch": 0,
      "playbackPositions": [
       {
        "roll": 0,
        "timestamp": 0,
        "pitch": -9.23,
        "class": "PanoramaOverlayPlaybackPosition",
        "yaw": -118.47,
        "hfov": 9.25,
        "opacity": 1
       }
      ]
     }
    ],
    "items": [
     {
      "class": "HotspotPanoramaOverlayImage",
      "playbackPositions": [
       {
        "roll": 0,
        "timestamp": 0,
        "pitch": -9.23,
        "class": "PanoramaOverlayPlaybackPosition",
        "yaw": -118.47,
        "hfov": 9.25,
        "opacity": 1
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
      "yaw": 0
     }
    ],
    "id": "overlay_09100D07_2079_EDE6_41B8_138A2C8C06B3",
    "data": {
     "label": "Image"
    }
   }
  ],
  "hfovMax": 140,
  "hfovMin": 60,
  "thumbnailUrl": "media/media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1_t.jpg",
  "video": [
   {
    "width": 3840,
    "type": "video/mp4",
    "framerate": 25,
    "bitrate": 9017,
    "class": "Video360Resource",
    "url": "media/media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1.mp4",
    "height": 2160,
    "posterURL": "media/media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1_poster.jpg"
   },
   {
    "width": 3168,
    "type": "video/mp4",
    "framerate": 25,
    "bitrate": 9017,
    "class": "Video360Resource",
    "url": "media/media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1_ios.mp4",
    "height": 1782,
    "posterURL": "media/media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1_poster.jpg"
   }
  ]
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_35699FF0_2462_3527_41A5_27BC7EEAE5D9",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_356A0FF0_2462_3527_41B7_A9D3A7BA3B36",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_298D3CE3_2462_3B29_41A4_1A96D0A35A03",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 171.51,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
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
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2B48DE1C_2462_371E_41BB_B43EE97060A2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 149.97,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_3569AFF0_2462_3527_41A1_15A3C14000AC",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2A485D21_2462_3529_41B0_577D2268F99C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 42.09,
   "hfov": 110,
   "pitch": 0
  }
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
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E359B21B_ED68_4573_41E3_2134D2902989",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345F4D97_20DF_6BB3_41BF_89E603E3F0DA",
  "duration": 1000
 },
 {
  "showEasing": "cubic_in",
  "rotationX": 0,
  "rotationZ": 0,
  "class": "PopupPanoramaOverlay",
  "id": "popup_3BBE3C5B_107F_C340_4178_756995F5135C",
  "hfov": 6.69,
  "hideDuration": 500,
  "rotationY": 0,
  "popupDistance": 100,
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
  "popupMaxWidth": "95%",
  "hideEasing": "cubic_out",
  "yaw": -99.48,
  "popupMaxHeight": "95%",
  "showDuration": 500
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
      "class": "PanoramaCameraSequence",
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
    "player": {
     "gyroscopeVerticalDraggingEnabled": true,
     "buttonCardboardView": {
      "backgroundOpacity": 0,
      "class": "IconButton",
      "verticalAlign": "middle",
      "toolTipShadowColor": "#333333",
      "id": "IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667",
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingRight": 6,
      "width": 75,
      "toolTipShadowBlurRadius": 3,
      "transparencyActive": false,
      "borderSize": 0,
      "shadow": false,
      "paddingLeft": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontFamily": "Arial",
      "iconURL": "skin/IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667.png",
      "toolTipPaddingTop": 4,
      "minHeight": 1,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "height": 50,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "minWidth": 1,
      "toolTip": "VR",
      "toolTipShadowSpread": 0,
      "mode": "push",
      "toolTipTextShadowOpacity": 0,
      "paddingRight": 0,
      "toolTipBorderColor": "#767676",
      "propagateClick": false,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingBottom": 4,
      "horizontalAlign": "center",
      "toolTipBackgroundColor": "#F6F6F6",
      "data": {
       "name": "Button_VR"
      },
      "toolTipFontSize": 12,
      "toolTipPaddingLeft": 6,
      "toolTipBorderRadius": 3,
      "toolTipDisplayTime": 600,
      "toolTipFontColor": "#606060",
      "cursor": "hand",
      "toolTipOpacity": 1,
      "paddingBottom": 0,
      "toolTipShadowOpacity": 1
     },
     "mouseControlMode": "drag_acceleration",
     "class": "PanoramaPlayer",
     "viewerArea": "this.MainViewer",
     "id": "MainViewerPanoramaPlayer",
     "touchControlMode": "drag_rotation",
     "displayPlaybackBar": true
    }
   }
  ],
  "id": "playList_299A5ADE_2462_3F1A_41A9_41A3B4AF792E"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345EED8F_20DF_6B94_417E_826782EEF8F0",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2B31CE3B_2462_371A_41BD_C79F63DEA3EB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 40.93,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_356C5FF0_2462_3527_41B7_BD15AA7A4852",
  "duration": 1000
 },
 "this.popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345FBD97_20DF_6BB3_41A7_CB088826B439",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345E4D8F_20DF_6B94_41B8_3FE607FF9006",
  "duration": 1000
 },
 "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
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
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E7D8F_20DF_6B94_41B1_383A596C4C67, 'hideEffect', false)",
    "media": "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E0D8F_20DF_6B94_41AE_F32FBDDF5924, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
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
      "class": "PanoramaCameraSequence",
      "restartMovementOnUserInteraction": false
     },
     "id": "panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_camera",
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
  "id": "playList_2A69FAEE_2462_3F3A_4155_2AF5BE65C8E7"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2BD0AE98_2462_37E7_41B0_003BB68A0DD4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -6.6,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_347F2EE6_2462_372B_4195_F92023D1CF32",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.55,
   "hfov": 105,
   "pitch": 0
  }
 },
 "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_356A8FF0_2462_3527_4194_5B2B87CA7051",
  "duration": 1000
 },
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
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F5D8F_20DF_6B94_41B1_D214F66E6293, 'hideEffect', false)",
    "media": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F6D8F_20DF_6B94_410B_52B44954FB30, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
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
      "class": "PanoramaCameraSequence",
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
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "playList_2A6FFAEE_2462_3F3A_41B9_ED299D2720D6"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_2A454B0D_2462_3EFE_41BA_B9F67F752805, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E3D97_20DF_6BB3_41B7_C907450FD669, 'hideEffect', false)",
    "media": "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345FCD97_20DF_6BB3_41B7_5533F0603364, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
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
      "class": "PanoramaCameraSequence",
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
    "id": "PanoramaPlayListItem_2A454B0D_2462_3EFE_41BA_B9F67F752805"
   }
  ],
  "id": "playList_2A652AEE_2462_3F3A_41C0_606D6B933062"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345F5D99_20DF_6BBF_41BD_058622C73035",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345FCD97_20DF_6BB3_41B7_5533F0603364",
  "duration": 1000
 },
 {
  "automaticRotationSpeed": 10,
  "manualRotationSpeed": 1800,
  "automaticZoomSpeed": 10,
  "class": "RotationalCamera",
  "id": "media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1_camera",
  "manualZoomSpeed": 1,
  "initialPosition": {
   "class": "RotationalCameraPosition",
   "yaw": 0,
   "hfov": 120,
   "pitch": 0
  }
 },
 "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9",
  "duration": 1000
 },
 "this.media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7",
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
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
    "player": {
     "class": "MapPlayer",
     "viewerArea": {
      "toolTipBorderRadius": 3,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "id": "MapViewer",
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "playbackBarOpacity": 1,
      "toolTipShadowBlurRadius": 3,
      "progressBackgroundOpacity": 1,
      "width": "99.417%",
      "borderSize": 0,
      "progressBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "progressLeft": 0,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarHeadShadowOpacity": 0.7,
      "minHeight": 1,
      "toolTipFontStyle": "normal",
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBorderSize": 0,
      "toolTipShadowColor": "#333333",
      "playbackBarBorderColor": "#FFFFFF",
      "displayTooltipInTouchScreens": true,
      "playbackBarBorderSize": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBackgroundOpacity": 1,
      "minWidth": 1,
      "progressBorderSize": 0,
      "playbackBarHeight": 10,
      "playbackBarHeadWidth": 6,
      "paddingRight": 0,
      "height": "70.806%",
      "progressBackgroundColorRatios": [
       0
      ],
      "propagateClick": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "toolTipPaddingBottom": 4,
      "progressBorderRadius": 0,
      "playbackBarLeft": 0,
      "transitionDuration": 500,
      "playbackBarHeadHeight": 15,
      "playbackBarRight": 0,
      "toolTipPaddingLeft": 6,
      "toolTipDisplayTime": 600,
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "toolTipPaddingRight": 6,
      "toolTipFontColor": "#606060",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarProgressBorderRadius": 0,
      "class": "ViewerArea",
      "progressBarBorderRadius": 0,
      "playbackBarProgressBorderSize": 0,
      "progressBarBorderColor": "#000000",
      "paddingLeft": 0,
      "shadow": false,
      "playbackBarHeadShadowColor": "#000000",
      "toolTipFontWeight": "normal",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadOpacity": 1,
      "toolTipPaddingTop": 4,
      "progressRight": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipBorderSize": 1,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "paddingTop": 0,
      "playbackBarBorderRadius": 0,
      "progressOpacity": 1,
      "toolTipBorderColor": "#767676",
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowSpread": 0,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowVerticalLength": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowHorizontalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "progressBorderColor": "#000000",
      "playbackBarBottom": 0,
      "progressBottom": 2,
      "progressHeight": 10,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarHeadShadow": true,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "data": {
       "name": "MapViewer"
      },
      "toolTipFontSize": 12,
      "toolTipOpacity": 1,
      "paddingBottom": 0,
      "toolTipShadowOpacity": 1
     },
     "id": "MapViewerMapPlayer",
     "movementMode": "constrained"
    },
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_2A76AAFD_2462_3F19_418E_EB64BEEA4E78"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345EDD8F_20DF_6B94_41BF_D2C5F914980C",
  "duration": 1000
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_34833FE0_2462_3527_41BD_DA8A8E9919DA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -156.68,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticRotationSpeed": 10,
  "manualRotationSpeed": 1800,
  "automaticZoomSpeed": 10,
  "class": "RotationalCamera",
  "id": "camera_2B302C75_2462_3B29_4167_DC36EAF9EF76",
  "manualZoomSpeed": 1,
  "initialPosition": {
   "class": "RotationalCameraPosition",
   "yaw": 99.21,
   "hfov": 120,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345C8D97_20DF_6BB3_41AB_11DFCCAD81C0",
  "duration": 1000
 },
 {
  "showEasing": "cubic_in",
  "rotationX": 0,
  "rotationZ": 0,
  "class": "PopupPanoramaOverlay",
  "id": "popup_3CC23B7F_107F_4540_4180_ABF478E71F9A",
  "hfov": 6.7,
  "hideDuration": 500,
  "rotationY": 0,
  "popupDistance": 100,
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
  "popupMaxWidth": "95%",
  "hideEasing": "cubic_out",
  "yaw": -105.77,
  "popupMaxHeight": "95%",
  "showDuration": 500
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_356D2FF0_2462_3527_41A8_9FF8CF77572D",
  "duration": 1000
 },
 {
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
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345CCD8F_20DF_6B94_41BC_F061530E83AF",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_348C5FE0_2462_3527_41BB_FF6AAE1AA6AE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 174.77,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticRotationSpeed": 10,
  "manualRotationSpeed": 1800,
  "automaticZoomSpeed": 10,
  "class": "RotationalCamera",
  "id": "camera_2B9C4EC7_2462_3769_41B6_CB0DB10D657C",
  "manualZoomSpeed": 1,
  "initialPosition": {
   "class": "RotationalCameraPosition",
   "yaw": 61.53,
   "hfov": 120,
   "pitch": 0
  }
 },
 "this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913",
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
 "this.popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E",
 "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_camera",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345E6D8F_20DF_6B94_41A3_46A48BBB0ACC",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_35676FF0_2462_3527_41C1_26D2F6511ADB",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_356F3FF0_2462_3527_4194_E76DFFB60D5E",
  "duration": 1000
 },
 "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_356E8FF0_2462_3527_416B_FC7D6C353A1C",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2B92FEC7_2462_3769_41B4_D4A675689206",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -128.26,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
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
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345F0D8F_20DF_6B94_419D_ABD4CFF44CF3",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_35670FF0_2462_3527_41A8_AE6A373B3FBE",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
    "media": "this.media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_2A687AEE_2462_3F3A_41B1_8945C9643985, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_2A687AEE_2462_3F3A_41B1_8945C9643985, 0)",
    "camera": "this.media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1_camera",
    "class": "Video360PlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "playList_2A687AEE_2462_3F3A_41B1_8945C9643985"
 },
 "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E35A8219_ED68_457C_41E5_C52BA0340B76",
  "duration": 1000
 },
 "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2AF7BD8F_2462_35FA_41A2_8B9A1B3001B0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.67,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_34597D8F_20DF_6B94_41AA_44DC8A057CBB",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
    "media": "this.media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_2A6D8AEE_2462_3F3A_414E_FB27FE84CAE8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_2A6D8AEE_2462_3F3A_414E_FB27FE84CAE8, 0)",
    "camera": {
     "automaticRotationSpeed": 10,
     "manualRotationSpeed": 1800,
     "automaticZoomSpeed": 10,
     "class": "RotationalCamera",
     "id": "media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7_camera",
     "manualZoomSpeed": 1,
     "initialPosition": {
      "class": "RotationalCameraPosition",
      "yaw": 0,
      "hfov": 120,
      "pitch": 0
     }
    },
    "class": "Video360PlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "playList_2A6D8AEE_2462_3F3A_414E_FB27FE84CAE8"
 },
 "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2A19EB7B_2462_3D19_41B7_7C16EF2990E1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -7.54,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345E3D97_20DF_6BB3_41B7_C907450FD669",
  "duration": 1000
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
  "id": "panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345F5D8F_20DF_6B94_41B1_D214F66E6293",
  "duration": 1000
 },
 {
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
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2B6BFC37_2462_3B2A_41B7_5D3901856868",
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
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2A5C2D41_2462_3566_419A_5677B860C8D7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -152.55,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_3573FFF0_2462_3527_41BC_1348226C6170",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2987DCD3_2462_3B69_41B9_CE72BD4BA82D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -27.8,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_356A5FF0_2462_3527_41BD_1EC529679F89",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2B7E8E0C_2462_36FE_41AA_0CE76CD964A9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 24.42,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345CDD8F_20DF_6B94_41B6_C00B98F530E1",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_2A476B0D_2462_3EFE_41B3_00C99AD43D7D, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EBD8F_20DF_6B94_41A4_072F6F80B3A4, 'hideEffect', false)",
    "media": "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E4D8F_20DF_6B94_41B8_3FE607FF9006, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
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
      "class": "PanoramaCameraSequence",
      "restartMovementOnUserInteraction": false
     },
     "id": "panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 110,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A476B0D_2462_3EFE_41B3_00C99AD43D7D"
   }
  ],
  "id": "playList_2A664ADE_2462_3F1A_41A8_DECD6137FE42"
 },
 "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345E8D8F_20DF_6B94_419E_3AE578883B9D",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2A2A3D50_2462_3567_41C1_4686127C2177",
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
  "id": "panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera",
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
  "id": "panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
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
  "id": "camera_2AB8DC18_2462_3AE6_41C1_9911DBCA20D4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 148.88,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2AF6EBAA_2462_3D3B_41A2_253693D8559B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -0.95,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
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
 {
  "automaticRotationSpeed": 10,
  "manualRotationSpeed": 1800,
  "automaticZoomSpeed": 10,
  "class": "RotationalCamera",
  "id": "media_0BA5C089_2079_B4ED_41A8_D2AC2349E041_camera",
  "manualZoomSpeed": 1,
  "initialPosition": {
   "class": "RotationalCameraPosition",
   "yaw": 0,
   "hfov": 120,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2ADE8BF9_2462_3D26_41B6_D68A37A07881",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 67.62,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_2A465B0D_2462_3EFE_41A3_8D886FC99D6E, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F4D97_20DF_6BB3_41BF_89E603E3F0DA, 'hideEffect', false)",
    "media": "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F5D99_20DF_6BBF_41BD_058622C73035, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
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
      "class": "PanoramaCameraSequence",
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
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A465B0D_2462_3EFE_41A3_8D886FC99D6E"
   }
  ],
  "id": "playList_2A65EADE_2462_3F1A_4196_275437319D9E"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_34E69F63_2462_3529_41C1_42AA2071EF73",
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
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2B18CE69_2462_3739_41A7_B48B894256CD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -29.95,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2AC10BBA_2462_3D1A_41B0_EA8CADAE7AF5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.59,
   "hfov": 110,
   "pitch": 0
  }
 },
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
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_2A75EAFD_2462_3F19_41B1_5EABC9EF93B3"
 },
 {
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
 "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2BEBBE69_2462_3739_41C0_B0E32EF15754",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -5.43,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2B03EE4A_2462_377B_41BD_27D92DE5E749",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 94.17,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
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
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2AD38BD9_2462_3D19_4168_143D438E27A8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 94.62,
   "hfov": 105,
   "pitch": 0
  }
 },
 "this.Menu_2A492B0D_2462_3EFE_41C1_4BBC15726E11",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2AEA5D8F_2462_35FA_41B1_63101D22D6B7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.87,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345F8D97_20DF_6BB3_41B5_1A0A5D57797F",
  "duration": 1000
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
 "this.MapViewerMapPlayer",
 "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
 "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2A56DD31_2462_3526_41B4_1AE52CB4B152",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -100.57,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
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
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_3569EFF0_2462_3527_41B8_5128A93E5B86",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_34F7CF73_2462_3529_41B8_1DF6EB053FF3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 35.49,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_EF6DE039_F622_38BD_41E2_3149DB234972",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345EAD8F_20DF_6B94_41A5_6F5908EFA5C8",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2AD59DAE_2462_353A_41A5_2304F1F630BA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 116.84,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_29AACCA4_2462_3B2F_4195_F977F96F04F7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 84.54,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_34592D8F_20DF_6B94_41B2_36A2D8C28548",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345E7D8F_20DF_6B94_41B1_383A596C4C67",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_34A31FB2_2462_352A_41BC_3375309BC718",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.15,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "showEasing": "cubic_in",
  "rotationX": 0,
  "rotationZ": 0,
  "class": "PopupPanoramaOverlay",
  "id": "popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6",
  "hfov": 8.24,
  "hideDuration": 500,
  "rotationY": 0,
  "popupDistance": 100,
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
  "popupMaxWidth": "95%",
  "hideEasing": "cubic_out",
  "yaw": 43.77,
  "popupMaxHeight": "95%",
  "showDuration": 500
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_camera",
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
  "id": "camera_2B26CE3B_2462_371A_41AB_116B3D414700",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -176.54,
   "hfov": 105,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345E5D8F_20DF_6B94_4193_ABB7E016F309",
  "duration": 1000
 },
 "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2B0F1E5A_2462_371A_41BD_59E597E173BB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 160.67,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.media_0BA5C089_2079_B4ED_41A8_D2AC2349E041",
 "this.popup_3AF279F7_20F8_9425_41B8_727B1C05B69A",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2A951DEC_2462_353F_41A9_631BA904AA0A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 120.31,
   "hfov": 110,
   "pitch": 0
  }
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
  "easing": "cubic_in_out",
  "id": "effect_345FDD97_20DF_6BB3_41BB_5D593B956B06",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2B6CEE0C_2462_36FE_41BA_EB1AE17FB0F8",
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
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -102.2,
   "hfov": 110,
   "pitch": -43.45
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2A1C1D7F_2462_3519_41C0_343738950990",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -83.53,
   "hfov": 110,
   "pitch": 0
  }
 },
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
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_356F3FF0_2462_3527_4194_E76DFFB60D5E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_356E8FF0_2462_3527_416B_FC7D6C353A1C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_356E4FF0_2462_3527_41C0_AD6924FCC6CD, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)",
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
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_356D9FF0_2462_3527_41B8_A46838DCDA74, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 4, 5); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_356D2FF0_2462_3527_41A8_9FF8CF77572D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": {
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
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 5, 6); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_356C5FF0_2462_3527_41B7_BD15AA7A4852, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 6, 7); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3573FFF0_2462_3527_41BC_1348226C6170, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_29B7ACC4_2462_3B6E_41B7_BBA18C108D2D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -46.66,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_2A47DB0D_2462_3EFE_41BB_5C66A03DFCB2, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E5D8F_20DF_6B94_4193_ABB7E016F309, 'hideEffect', false)",
    "media": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E6D8F_20DF_6B94_41A3_46A48BBB0ACC, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
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
      "class": "PanoramaCameraSequence",
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
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A47DB0D_2462_3EFE_41BB_5C66A03DFCB2"
   }
  ],
  "id": "playList_2A607ADE_2462_3F1A_41B1_186048A57112"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2AA14DBE_2462_351A_41BD_492717DDAB6A",
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_29AD0CB4_2462_3B2E_41AF_426EF8D9BA17",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 62.7,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2A3C9B3C_2462_3D1E_41BB_6F621549D0F8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 13.32,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345F2D8F_20DF_6B94_4160_462A4AF9B97A",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345EBD8F_20DF_6B94_41A4_072F6F80B3A4",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345EFD8F_20DF_6B94_41B7_4853257F85EE",
  "duration": 1000
 },
 "this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83",
 "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2B554C56_2462_3B6B_41B8_FE93CCB8633E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -91.45,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_EF6C1355_F62E_F8F5_41C5_B9A5C5CCED3E",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2B81AEB8_2462_3726_41B7_E6143FA7D31E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 97.66,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_2A743AFD_2462_3F19_41B2_BF590733AF77, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06, 'hideEffect', false)",
    "media": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD84_20DF_6B95_41B9_72E06ABF1981, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A743AFD_2462_3F19_41B2_BF590733AF77"
   },
   {
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_2A7F5AFD_2462_3F19_41BC_E8B05C28FB12, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_EF6DE039_F622_38BD_41E2_3149DB234972, 'showEffect', false)",
    "media": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3567FFF0_2462_3527_41BE_6932621B3902, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_35676FF0_2462_3527_41C1_26D2F6511ADB, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_35670FF0_2462_3527_41A8_AE6A373B3FBE, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "camera": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A7F5AFD_2462_3F19_41BC_E8B05C28FB12"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_2A78AAFD_2462_3F19_4183_924589D25071, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
    "camera": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A78AAFD_2462_3F19_4183_924589D25071"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_2A780AFD_2462_3F19_41B9_6EE7048F57E1, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_35661FF0_2462_3527_41C0_8A95806C432A, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A780AFD_2462_3F19_41B9_6EE7048F57E1"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_2A7FFAFD_2462_3F19_41B0_5D7AB650045C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3565BFF0_2462_3527_41BB_8006D34BDC0A, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A7FFAFD_2462_3F19_41B0_5D7AB650045C"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_2A7F5AFD_2462_3F19_41B2_3E529E31D2BF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3564AFF0_2462_3527_41B9_11E40E4942FB, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A7F5AFD_2462_3F19_41B2_3E529E31D2BF"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_2A7F3AFD_2462_3F19_41C0_7279F0E432BA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_35643FF0_2462_3527_41B6_161870C0C1F1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A7F3AFD_2462_3F19_41C0_7279F0E432BA"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_2A7E8AFD_2462_3F19_4197_6B43C58D43A2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
    "camera": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A7E8AFD_2462_3F19_4197_6B43C58D43A2"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_2A7E6AFD_2462_3F19_418E_47ACCD3D43C8, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_356B7FF0_2462_3527_41BB_5D1A8D78EC2B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A7E6AFD_2462_3F19_418E_47ACCD3D43C8"
   },
   {
    "begin": "this.registerKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515', this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515.get('visible')); this.registerKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E', this.Label_E216BE12_F622_684F_41EC_C2D2817E217E.get('visible')); this.registerKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197', this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_2A7DCAFD_2462_3F19_41C1_2AC918300025, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0B500FD7_1A54_37AE_41A9_19AE8C776076, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_2606DC67_37A3_6E7A_417B_82BAC7B62691, 'hideEffect', false); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true, -1, this.effect_EF6CE355_F62E_F8F5_41E6_CBD8B4202E02, 'showEffect', false); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false); this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_26077C68_37A3_6E75_41BD_CC48A65FF42C, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9, 'hideEffect', false)",
    "media": {
     "class": "Panorama",
     "label": "Cartago City",
     "id": "panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
     "partial": false,
     "pitch": 0,
     "vfov": 180,
     "cardboardMenu": "this.Menu_2A492B0D_2462_3EFE_41C1_4BBC15726E11",
     "hfovMax": 120,
     "hfov": 360,
     "hfovMin": 100,
     "frames": [
      {
       "class": "CubicPanoramaFrame",
       "overlays": [
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15, this.camera_D0DA93EE_DE6E_2520_41CD_8775B6E7F959)",
           "mapColor": "image"
          }
         ],
         "useHandCursor": true,
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
         }
        },
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#CCCCCC','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#FF0000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconWidth':50,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0.09803921568627451],'iconWidth':50,'borderColor':'#000000','iconHeight':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':50,'rollOverIconWidth':50,'backgroundColor':['#000000'],'pressedBorderSize':0}, null, null, null, null, null, false)",
           "mapColor": "image"
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
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
         }
        },
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#CCCCCC','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#FF0000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconWidth':50,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0.09803921568627451],'iconWidth':50,'borderColor':'#000000','iconHeight':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':50,'rollOverIconWidth':50,'backgroundColor':['#000000'],'pressedBorderSize':0}, null, null, null, null, null, false)",
           "mapColor": "image"
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
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
         }
        },
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#CCCCCC','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#FF0000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconWidth':50,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0.09803921568627451],'iconWidth':50,'borderColor':'#000000','iconHeight':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':50,'rollOverIconWidth':50,'backgroundColor':['#000000'],'pressedBorderSize':0}, this.ImageResource_E252A6BD_EF1D_EC9A_41D3_31F4A8966575, null, null, null, null, false)",
           "mapColor": "image"
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
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
         }
        },
        "this.popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6",
        {
         "showEasing": "cubic_in",
         "rotationX": 0,
         "rotationZ": 0,
         "class": "PopupPanoramaOverlay",
         "id": "popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C",
         "hfov": 8.24,
         "hideDuration": 500,
         "rotationY": 0,
         "popupDistance": 100,
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
         "popupMaxWidth": "95%",
         "hideEasing": "cubic_out",
         "yaw": 85.84,
         "popupMaxHeight": "95%",
         "showDuration": 500
        },
        {
         "showEasing": "cubic_in",
         "rotationX": 0,
         "rotationZ": 0,
         "class": "PopupPanoramaOverlay",
         "id": "popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865",
         "hfov": 6.64,
         "hideDuration": 500,
         "rotationY": 0,
         "popupDistance": 100,
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
         "popupMaxWidth": "95%",
         "hideEasing": "cubic_out",
         "yaw": -73.96,
         "popupMaxHeight": "95%",
         "showDuration": 500
        },
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
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
         }
        },
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
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
         }
        },
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#CCCCCC','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#FF0000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconWidth':50,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0.09803921568627451],'iconWidth':50,'borderColor':'#000000','iconHeight':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':50,'rollOverIconWidth':50,'backgroundColor':['#000000'],'pressedBorderSize':0}, this.ImageResource_E253E6BD_EF1D_EC9A_41EA_C503E65D3053, null, null, null, null, false)",
           "mapColor": "image"
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
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
         }
        },
        {
         "showEasing": "cubic_in",
         "rotationX": 0,
         "rotationZ": 0,
         "class": "PopupPanoramaOverlay",
         "id": "popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43",
         "hfov": 6.66,
         "hideDuration": 500,
         "rotationY": 0,
         "popupDistance": 100,
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
         "popupMaxWidth": "95%",
         "hideEasing": "cubic_out",
         "yaw": -123.25,
         "popupMaxHeight": "95%",
         "showDuration": 500
        },
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
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
         }
        },
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
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
         }
        },
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
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
         }
        },
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_3CC23B7F_107F_4540_4180_ABF478E71F9A, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#CCCCCC','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#FF0000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconWidth':50,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0.09803921568627451],'iconWidth':50,'borderColor':'#000000','iconHeight':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':50,'rollOverIconWidth':50,'backgroundColor':['#000000'],'pressedBorderSize':0}, this.ImageResource_20FB6245_107F_4740_41A8_9C0A46A92B4D, null, null, null, null, false)",
           "mapColor": "image"
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
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
         }
        },
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
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
         }
        },
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_3BBE3C5B_107F_C340_4178_756995F5135C, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#CCCCCC','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#FF0000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconWidth':50,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0.09803921568627451],'iconWidth':50,'borderColor':'#000000','iconHeight':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':50,'rollOverIconWidth':50,'backgroundColor':['#000000'],'pressedBorderSize':0}, null, null, null, null, null, false)",
           "mapColor": "image"
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
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
         }
        },
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
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
         }
        },
        "this.popup_3CC23B7F_107F_4540_4180_ABF478E71F9A",
        "this.popup_3BBE3C5B_107F_C340_4178_756995F5135C",
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_209897EC_11B3_4D40_41A2_837DB50E3A59, {'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconColor':'#CCCCCC','paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#FFFFFF','pressedBorderColor':'#000000','paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconLineWidth':5,'borderSize':0,'iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'rollOverBorderSize':0,'pressedIconColor':'#FF0000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':50,'pressedIconWidth':50,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0.09803921568627451],'iconWidth':50,'borderColor':'#000000','iconHeight':50,'backgroundOpacity':0.5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconHeight':50,'rollOverIconWidth':50,'backgroundColor':['#000000'],'pressedBorderSize':0}, null, null, null, null, null, false)",
           "mapColor": "image"
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
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
         }
        },
        {
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
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
         }
        },
        {
         "showEasing": "cubic_in",
         "rotationX": 0,
         "rotationZ": 0,
         "class": "PopupPanoramaOverlay",
         "id": "popup_209897EC_11B3_4D40_41A2_837DB50E3A59",
         "hfov": 6.69,
         "hideDuration": 500,
         "rotationY": 0,
         "popupDistance": 100,
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
         "popupMaxWidth": "95%",
         "hideEasing": "cubic_out",
         "yaw": -80.67,
         "popupMaxHeight": "95%",
         "showDuration": 500
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
       "map": "this.map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
       "x": 305.3,
       "angle": 93.36,
       "y": 253.1,
       "class": "PanoramaMapLocation"
      }
     ],
     "thumbnailUrl": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_t.jpg"
    },
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0B500FD7_1A54_37AE_41A9_19AE8C776076, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_356A8FF0_2462_3527_4194_5B2B87CA7051, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_356A5FF0_2462_3527_41BD_1EC529679F89, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')){ if(this.getKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')) { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true, -1, this.effect_356A0FF0_2462_3527_4180_CEB57BB6D08C, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_2606DC67_37A3_6E7A_417B_82BAC7B62691, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197'); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_EF6C1355_F62E_F8F5_41C5_B9A5C5CCED3E, 'hideEffect', false); if(this.existsKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')){ if(this.getKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')) { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_3569EFF0_2462_3527_41B8_5128A93E5B86, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_26077C68_37A3_6E75_41BD_CC48A65FF42C, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E'); if(this.existsKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')){ if(this.getKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')) { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_35699FF0_2462_3527_41A5_27BC7EEAE5D9, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')",
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "camera": {
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
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A7DCAFD_2462_3F19_41C1_2AC918300025"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_2A7D9AFD_2462_3F19_41A3_493B3EC95DD9, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_35692FF0_2462_3527_41BA_0A9A2ABDF7B8, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A7D9AFD_2462_3F19_41A3_493B3EC95DD9"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_2A7D1B0D_2462_3EFE_41BF_88907EF0F28D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_356A0FF0_2462_3527_41B7_A9D3A7BA3B36, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A7D1B0D_2462_3EFE_41BF_88907EF0F28D"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_2A7CEB0D_2462_3EFE_41AC_25961AAC0BD1, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3569AFF0_2462_3527_41A1_15A3C14000AC, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
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
    "id": "PanoramaPlayListItem_2A7CEB0D_2462_3EFE_41AC_25961AAC0BD1"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_2A7C4B0D_2462_3EFE_41C1_DE6DC038AE8C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_35693FF0_2462_3527_41B8_76001D35F78E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": {
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
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A7C4B0D_2462_3EFE_41C1_DE6DC038AE8C"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_2A7C3B0D_2462_3EFE_41A4_F5006BA09296, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_35684FF0_2462_3527_41A5_FC60DDC3ECE0, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
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
    "id": "PanoramaPlayListItem_2A7C3B0D_2462_3EFE_41A4_F5006BA09296"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_2A43AB0D_2462_3EFE_4185_EAAC2E62DB33, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
    "camera": "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A43AB0D_2462_3EFE_4185_EAAC2E62DB33"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_2A437B0D_2462_3EFE_41AE_9F4375B936F6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 0)",
    "media": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
    "end": "this.trigger('tourEnded')",
    "camera": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A437B0D_2462_3EFE_41AE_9F4375B936F6"
   }
  ],
  "id": "mainPlayList"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
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
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_2A761AFD_2462_3F19_41B1_563B0D6B37C9"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2AADBDCD_2462_3579_41AE_F551F0EF5B0F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -110.67,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
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
 "this.popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0",
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
  "id": "playList_2A75FAFD_2462_3F19_41AA_54DF69E0D151"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_34599F06_2462_36EA_41BA_BA31E3683422",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -140.57,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.popup_3A3EE0E8_20F8_B42B_41BC_69EB00174351",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_2A468B0D_2462_3EFE_41B6_5C5805209EA6, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CAD97_20DF_6BB3_41A6_3E97E260CACE, 'hideEffect', false)",
    "media": "this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E2D97_20DF_6BB3_41B0_9902D5E426BC, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A468B0D_2462_3EFE_41B6_5C5805209EA6"
   }
  ],
  "id": "playList_2A663ADE_2462_3F1A_41AF_6D0B1A60DB41"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34592D8F_20DF_6B94_41B2_36A2D8C28548, 'hideEffect', false)",
    "media": "this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34593D8F_20DF_6B94_41B9_C6D005829662, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "playList_2999EADE_2462_3F1A_41B2_4D569B09D1A6"
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_35661FF0_2462_3527_41C0_8A95806C432A",
  "duration": 1000
 },
 "this.popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7",
 "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_34B28FD1_2462_3566_41B6_12D04FA3C64E",
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
  "id": "camera_346DFED7_2462_376A_41B7_0C15F3B14536",
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
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2B264C66_2462_3B2A_41B6_B4565F8125FF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.52,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
 "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345CAD97_20DF_6BB3_41A6_3E97E260CACE",
  "duration": 1000
 },
 "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
 "this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2B5BEE2B_2462_3739_41B6_F152A031C03F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -167.51,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_356A0FF0_2462_3527_4180_CEB57BB6D08C",
  "duration": 1000
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
  "id": "playList_2A764AFD_2462_3F19_41BD_8EEB4932EFF3"
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1",
  "duration": 1000
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
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2A3C6D60_2462_3526_41BD_50B293C10078",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -123.57,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_3567FFF0_2462_3527_41BE_6932621B3902",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_35684FF0_2462_3527_41A5_FC60DDC3ECE0",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_35693FF0_2462_3527_41B8_76001D35F78E",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_2A47BB0D_2462_3EFE_41C0_7CC6F62D88E6, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CDD8F_20DF_6B94_41B6_C00B98F530E1, 'hideEffect', false)",
    "media": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CED8F_20DF_6B94_41B4_61907719F453, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A47BB0D_2462_3EFE_41C0_7CC6F62D88E6"
   }
  ],
  "id": "playList_2A66AADE_2462_3F1A_41A4_2E4324190EE2"
 },
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2B458C47_2462_3B6A_41A8_FAC22154F55C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 15.91,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_392AB3A7_202B_B425_41B4_97BA77B34913_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -72.03,
   "hfov": 110,
   "pitch": -38.54
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345ECD8F_20DF_6B94_41AE_2D20B974323E",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_2A458B0D_2462_3EFE_41AC_11ACBA1123E9, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E8D8F_20DF_6B94_419E_3AE578883B9D, 'hideEffect', false)",
    "media": "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD8F_20DF_6B94_41A5_6F5908EFA5C8, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A458B0D_2462_3EFE_41AC_11ACBA1123E9"
   }
  ],
  "id": "playList_2A656AEE_2462_3F3A_41B7_03F326C32581"
 },
 "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2BA0BE98_2462_37E7_41B1_FE91AD9C967B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 132.38,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -143.47,
   "hfov": 110,
   "pitch": -37.77
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_2606DC67_37A3_6E7A_417B_82BAC7B62691",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2AAF8C08_2462_3AE7_41B7_FFCAF00CA382",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -40.57,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_29B89CD3_2462_3B69_41B4_78D1615810E0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 33.73,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_356B7FF0_2462_3527_41BB_5D1A8D78EC2B",
  "duration": 1000
 },
 "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_camera",
 "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2A437D21_2462_3529_4182_80C12CF5AE07",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.24,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_342ADF15_2462_36E9_41BE_FD8AF3289C7C",
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
  "id": "camera_2A8ABC27_2462_3B29_412F_A62179F68790",
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
  "id": "camera_2A6F9D02_2462_3AEB_41C0_4235477188E1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 163.89,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.popup_3A24E5A5_20F8_BCDA_41A8_FE67D62CDC94",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2AC82DAE_2462_353A_41A0_7F56E4A1104C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -29.87,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_356E4FF0_2462_3527_41C0_AD6924FCC6CD",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2A8B2DDD_2462_351E_41C0_668A0C6AEA7B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -113.92,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_343BCF25_2462_3529_418C_85F1C39F69FF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.45,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticRotationSpeed": 10,
  "manualRotationSpeed": 1800,
  "automaticZoomSpeed": 10,
  "class": "RotationalCamera",
  "id": "camera_2AB99DDD_2462_351E_41B5_E282036EF84C",
  "manualZoomSpeed": 1,
  "initialPosition": {
   "class": "RotationalCameraPosition",
   "yaw": -75.15,
   "hfov": 120,
   "pitch": 0
  }
 },
 "this.popup_3A3C822F_20F8_9425_41B2_B5F3B1085960",
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_35643FF0_2462_3527_41B6_161870C0C1F1",
  "duration": 1000
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
 "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
 "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_0B500FD7_1A54_37AE_41A9_19AE8C776076",
  "duration": 1000
 },
 "this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2A173D6F_2462_3539_41A7_CABB0B56CF27",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -152.92,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_299B8CF2_2462_3B2B_41C0_39751B78FF3A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.57,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D3728F7A_DF8C_960C_417C_830810DD2653",
  "duration": 1000
 },
 "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E35A021A_ED68_457D_41DB_F92702D0649E",
  "duration": 1000
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A3EE0E8_20F8_B42B_41BC_69EB00174351_0_0.jpg",
    "width": 2500,
    "height": 1667
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A3EE0E8_20F8_B42B_41BC_69EB00174351_0_1.jpg",
    "width": 2048,
    "height": 1365
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A3EE0E8_20F8_B42B_41BC_69EB00174351_0_2.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A3EE0E8_20F8_B42B_41BC_69EB00174351_0_3.jpg",
    "width": 512,
    "height": 341
   }
  ],
  "id": "ImageResource_095DF95B_2068_946E_41BC_F6A772F09771"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_3416FF54_2462_356E_41BD_124C3AB38200",
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
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2A9BFC27_2462_3B29_41AF_FFD2570731AC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.5,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C",
  "duration": 1000
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
  "id": "playList_2A6FAAEE_2462_3F3A_41B6_4A5D33DCB15E"
 },
 "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_camera",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E3582213_ED68_454C_41D3_299F2B40CFF6",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_3564AFF0_2462_3527_41B9_11E40E4942FB",
  "duration": 1000
 },
 "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_34593D8F_20DF_6B94_41B9_C6D005829662",
  "duration": 1000
 },
 "this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2B07AC75_2462_3B29_41A8_D5DFA793FADF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 85.36,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_2A461B0D_2462_3EFE_41A6_43C76114F99A, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F2D8F_20DF_6B94_4160_462A4AF9B97A, 'hideEffect', false)",
    "media": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CCD8F_20DF_6B94_41BC_F061530E83AF, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
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
      "class": "PanoramaCameraSequence",
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
    "id": "PanoramaPlayListItem_2A461B0D_2462_3EFE_41A6_43C76114F99A"
   }
  ],
  "id": "playList_2A65AADE_2462_3F1A_41A3_EAD3156F3452"
 },
 "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_camera",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_34590D8F_20DF_6B94_41BB_A45E78753DDE",
  "duration": 1000
 },
 "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_camera",
 "this.panorama_3A476FAA_202B_EC2F_41B6_0DE7F90860E9",
 "this.popup_D60305E4_DCEA_D39F_419B_D9B149482827",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2B602DFC_2462_351F_41C1_714064CA48AF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.1,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3448BEF6_2462_372B_41BC_90438FEA1BE7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 145.78,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CFD97_20DF_6BB4_41BB_97095DF13BBA, 'hideEffect', false)",
    "media": "this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345C8D97_20DF_6BB3_41AB_11DFCCAD81C0, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_3916B1C4_202B_745B_41B2_6FE5D30CAC83_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "playList_2A6DDAEE_2462_3F3A_41A8_F8AB88A24ABF"
 },
 "this.popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2A61ECF2_2462_3B2B_41A9_D11CBDE64FC3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 118.98,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_26077C68_37A3_6E75_41BD_CC48A65FF42C",
  "duration": 1000
 },
 "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_camera",
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
    "media": "this.media_0BA5C089_2079_B4ED_41A8_D2AC2349E041",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_2A6D3AEE_2462_3F3A_419E_BC84B1432A3C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_2A6D3AEE_2462_3F3A_419E_BC84B1432A3C, 0)",
    "camera": "this.media_0BA5C089_2079_B4ED_41A8_D2AC2349E041_camera",
    "class": "Video360PlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "playList_2A6D3AEE_2462_3F3A_419E_BC84B1432A3C"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E3598214_ED68_4574_41E8_2F261C5C21DC",
  "duration": 1000
 },
 "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345FED97_20DF_6BB3_41B8_E885D262EE6C",
  "duration": 1000
 },
 "this.media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7_camera",
 "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
 "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
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
 "this.popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865",
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
  "id": "playList_2A763AFD_2462_3F19_4196_8D40ABE42168"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2AFC1D9E_2462_351B_41C1_E570D1A8FDC7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.95,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43",
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_2A46CB0D_2462_3EFE_4174_A320FB140AB6, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F8D97_20DF_6BB3_41B5_1A0A5D57797F, 'hideEffect', false)",
    "media": "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345FBD97_20DF_6BB3_41A7_CB088826B439, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A46CB0D_2462_3EFE_4174_A320FB140AB6"
   }
  ],
  "id": "playList_2A667ADE_2462_3F1A_4199_70379E28AAD3"
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_F083FF13_E49C_8716_41EC_3E7D67287F82",
  "duration": 1000
 },
 "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B_camera",
 "this.MainViewerPanoramaPlayer",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2AE49B8B_2462_3DF9_4194_FD3E6211133A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 99.29,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2B755C47_2462_3B6A_41B8_CA293AC789E5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 154.47,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2A748D12_2462_3AEA_4183_64E0296E23EE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 80.16,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_camera",
 "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_35692FF0_2462_3527_41BA_0A9A2ABDF7B8",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2A0FFB5C_2462_3D1F_4164_30E431DCED12",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -113.6,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E359A214_ED68_4575_41DB_B895523643F9",
  "duration": 1000
 },
 "this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
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
 "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2BB1DEA8_2462_3727_4197_CD0B5F50D7AC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 43.93,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_2A407B0D_2462_3EFE_41AA_E6D37CCD7AAB, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345ECD8F_20DF_6B94_41AE_2D20B974323E, 'hideEffect', false)",
    "media": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EDD8F_20DF_6B94_41BF_D2C5F914980C, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_2A407B0D_2462_3EFE_41AA_E6D37CCD7AAB"
   }
  ],
  "id": "playList_2998DADE_2462_3F1A_41BF_1BDF1396F478"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345CED8F_20DF_6B94_41B4_61907719F453",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345FDD97_20DF_6BB3_41BB_5D593B956B06, 'hideEffect', false)",
    "media": "this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345FED97_20DF_6BB3_41B8_E885D262EE6C, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_392AB3A7_202B_B425_41B4_97BA77B34913_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "playList_2A6C4AEE_2462_3F3A_41B5_AD386BFA30AA"
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EED8F_20DF_6B94_417E_826782EEF8F0, 'hideEffect', false)",
    "media": "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EFD8F_20DF_6B94_41B7_4853257F85EE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "playList_2A690AEE_2462_3F3A_41B7_1993BEFF42CE"
 },
 "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F",
  "duration": 1000
 },
 "this.panorama_39285205_2028_B7DA_41A0_D6F4D6B9CA9F",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_E3586214_ED68_4574_41E5_D2720D677B2E",
  "duration": 1000
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
  "id": "playList_2A768AFD_2462_3F19_4182_123A91E133C7"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2BF48E79_2462_3719_41C0_F98AED8A0416",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 23.71,
   "hfov": 110,
   "pitch": 0
  }
 },
 "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2A098D6F_2462_3539_41A3_BE3482CC796C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -32.82,
   "hfov": 110,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345CFD97_20DF_6BB4_41BB_97095DF13BBA",
  "duration": 1000
 },
 "this.popup_209897EC_11B3_4D40_41A2_837DB50E3A59",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_34055F44_2462_356F_41B8_8E9F5D4371FC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.37,
   "hfov": 110,
   "pitch": 0
  }
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
  "id": "playList_2A767AFD_2462_3F19_41C0_EDDC9E2C38B1"
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_356D9FF0_2462_3527_41B8_A46838DCDA74",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_2BC5DE89_2462_37E6_4190_9D8240E51110",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 138.07,
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
 "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_camera",
 "this.popup_3A305B90_20FB_94FB_4193_FEB3450979FC",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_345EAD84_20DF_6B95_41B9_72E06ABF1981",
  "duration": 1000
 },
 "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
 "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_camera",
 {
  "class": "ImageResource",
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
  ],
  "id": "ImageResource_0AACC979_2068_942D_41A4_C9A0C0413384"
 }
], "children": [
 {
  "toolTipBorderRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "id": "MainViewer",
  "left": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "borderRadius": 0,
  "width": "100%",
  "borderSize": 0,
  "progressBackgroundOpacity": 1,
  "progressBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressLeft": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontFamily": "Arial",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "minHeight": 50,
  "toolTipFontStyle": "normal",
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarBorderColor": "#FFFFFF",
  "displayTooltipInTouchScreens": true,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBackgroundOpacity": 1,
  "minWidth": 100,
  "progressBorderSize": 0,
  "playbackBarHeight": 10,
  "playbackBarHeadWidth": 6,
  "paddingRight": 0,
  "height": "100%",
  "progressBackgroundColorRatios": [
   0
  ],
  "propagateClick": false,
  "toolTipTextShadowOpacity": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipPaddingBottom": 4,
  "progressBorderRadius": 0,
  "playbackBarLeft": 0,
  "transitionDuration": 500,
  "playbackBarHeadHeight": 15,
  "playbackBarRight": 0,
  "toolTipPaddingLeft": 6,
  "toolTipDisplayTime": 600,
  "progressBarBorderSize": 0,
  "transitionMode": "blending",
  "toolTipPaddingRight": 6,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressBorderRadius": 0,
  "class": "ViewerArea",
  "progressBarBorderRadius": 0,
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "paddingLeft": 0,
  "shadow": false,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipFontWeight": "normal",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "toolTipPaddingTop": 4,
  "progressRight": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "top": 0,
  "toolTipBorderSize": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingTop": 0,
  "playbackBarBorderRadius": 0,
  "progressOpacity": 1,
  "toolTipBorderColor": "#767676",
  "toolTipShadowHorizontalLength": 0,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0,
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowVerticalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBorderColor": "#000000",
  "playbackBarBottom": 5,
  "progressBottom": 0,
  "progressHeight": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadShadow": true,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "data": {
   "name": "Main Viewer"
  },
  "toolTipShadowOpacity": 1,
  "toolTipOpacity": 1,
  "paddingBottom": 0,
  "toolTipFontSize": 12
 },
 {
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "id": "Container_D19AA380_DE1B_2AF3_41EA_D9B3468B686F",
  "left": "0%",
  "contentOpaque": false,
  "borderRadius": 0,
  "paddingLeft": 0,
  "width": "100%",
  "children": [
   {
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "overflow": "scroll",
    "id": "Container_FD43509A_EC70_8CA6_41E8_9E5B7D453FAE",
    "borderRadius": 0,
    "width": 334,
    "contentOpaque": false,
    "paddingLeft": 0,
    "backgroundColorDirection": "vertical",
    "children": [
     {
      "backgroundOpacity": 0,
      "class": "IconButton",
      "verticalAlign": "middle",
      "toolTipShadowColor": "#333333",
      "id": "IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0",
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingRight": 6,
      "width": 75,
      "toolTipShadowBlurRadius": 3,
      "transparencyActive": true,
      "borderSize": 0,
      "shadow": false,
      "paddingLeft": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontFamily": "Arial",
      "iconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0.png",
      "toolTipPaddingTop": 4,
      "minHeight": 1,
      "toolTipFontStyle": "normal",
      "pressedIconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0_pressed.png",
      "toolTipBorderSize": 1,
      "height": 50,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "minWidth": 1,
      "toolTip": "Home",
      "toolTipShadowSpread": 0,
      "mode": "toggle",
      "toolTipTextShadowOpacity": 0,
      "paddingRight": 0,
      "toolTipBorderColor": "#767676",
      "click": "this.mainPlayList.set('selectedIndex', 0)",
      "propagateClick": false,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingBottom": 4,
      "horizontalAlign": "center",
      "toolTipBackgroundColor": "#F6F6F6",
      "data": {
       "name": "Button_home"
      },
      "toolTipFontSize": 12,
      "toolTipPaddingLeft": 6,
      "toolTipBorderRadius": 3,
      "toolTipDisplayTime": 600,
      "toolTipFontColor": "#606060",
      "cursor": "hand",
      "toolTipOpacity": 1,
      "paddingBottom": 0,
      "toolTipShadowOpacity": 1
     },
     {
      "backgroundOpacity": 0,
      "class": "IconButton",
      "verticalAlign": "middle",
      "toolTipShadowColor": "#333333",
      "id": "IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2",
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingRight": 6,
      "width": 75,
      "toolTipShadowBlurRadius": 3,
      "transparencyActive": true,
      "borderSize": 0,
      "shadow": false,
      "paddingLeft": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontFamily": "Arial",
      "iconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2.png",
      "toolTipPaddingTop": 4,
      "minHeight": 1,
      "toolTipFontStyle": "normal",
      "pressedIconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2_pressed.png",
      "toolTipBorderSize": 1,
      "height": 50,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "minWidth": 1,
      "toolTip": "Map",
      "toolTipShadowSpread": 0,
      "mode": "toggle",
      "toolTipTextShadowOpacity": 0,
      "paddingRight": 0,
      "toolTipBorderColor": "#767676",
      "click": "if(!this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, true, 0, this.effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42, 'showEffect', false) } else { this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, false, 0, this.effect_D3728F7A_DF8C_960C_417C_830810DD2653, 'hideEffect', false) }",
      "propagateClick": false,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingBottom": 4,
      "horizontalAlign": "center",
      "toolTipBackgroundColor": "#F6F6F6",
      "data": {
       "name": "Button_Map"
      },
      "toolTipFontSize": 12,
      "toolTipPaddingLeft": 6,
      "toolTipBorderRadius": 3,
      "toolTipDisplayTime": 600,
      "toolTipFontColor": "#606060",
      "cursor": "hand",
      "toolTipOpacity": 1,
      "paddingBottom": 0,
      "toolTipShadowOpacity": 1
     },
     "this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667"
    ],
    "borderSize": 0,
    "shadow": false,
    "scrollBarMargin": 2,
    "minHeight": 77,
    "verticalAlign": "middle",
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10,
    "height": 77,
    "paddingTop": 0,
    "backgroundColor": [
     "#000000"
    ],
    "minWidth": 334,
    "paddingRight": 0,
    "propagateClick": false,
    "gap": 10,
    "scrollBarColor": "#000000",
    "layout": "horizontal",
    "horizontalAlign": "center",
    "backgroundColorRatios": [
     0.8
    ],
    "data": {
     "name": "Container_btones"
    },
    "backgroundOpacity": 0.1,
    "paddingBottom": 0
   }
  ],
  "borderSize": 0,
  "shadow": false,
  "scrollBarMargin": 2,
  "minHeight": 1,
  "scrollBarOpacity": 0.5,
  "scrollBarWidth": 10,
  "bottom": "0%",
  "height": "18.033%",
  "paddingTop": 0,
  "verticalAlign": "middle",
  "minWidth": 1,
  "paddingRight": 0,
  "propagateClick": false,
  "gap": 10,
  "scrollBarColor": "#000000",
  "layout": "horizontal",
  "horizontalAlign": "center",
  "data": {
   "name": "Container_Menu"
  },
  "backgroundOpacity": 0,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "id": "Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F",
  "borderRadius": 0,
  "contentOpaque": false,
  "right": "0%",
  "paddingLeft": 0,
  "width": "29.316%",
  "children": [
   {
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "id": "Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5",
    "borderRadius": 0,
    "contentOpaque": false,
    "width": "100%",
    "children": [
     "this.MapViewer",
     {
      "maxWidth": 448,
      "class": "Image",
      "verticalAlign": "middle",
      "id": "Image_E84AED1C_E346_1439_41DD_9142DAACB163",
      "borderRadius": 0,
      "maxHeight": 264,
      "width": "100%",
      "borderSize": 0,
      "shadow": false,
      "paddingLeft": 0,
      "url": "skin/Image_E84AED1C_E346_1439_41DD_9142DAACB163.png",
      "minHeight": 1,
      "height": "27.233%",
      "paddingTop": 0,
      "minWidth": 1,
      "paddingRight": 0,
      "propagateClick": false,
      "horizontalAlign": "center",
      "scaleMode": "fit_inside",
      "data": {
       "name": "Simbologia"
      },
      "backgroundOpacity": 0,
      "paddingBottom": 0
     }
    ],
    "borderSize": 0,
    "shadow": false,
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "overflow": "scroll",
    "minHeight": 1,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10,
    "height": "81.45%",
    "paddingTop": 0,
    "verticalAlign": "middle",
    "minWidth": 1,
    "paddingRight": 0,
    "propagateClick": false,
    "gap": 10,
    "scrollBarColor": "#000000",
    "layout": "vertical",
    "horizontalAlign": "center",
    "data": {
     "name": "Container_Map"
    },
    "backgroundOpacity": 0,
    "paddingBottom": 0
   }
  ],
  "borderSize": 0,
  "shadow": false,
  "minHeight": 1,
  "scrollBarMargin": 2,
  "creationPolicy": "inAdvance",
  "scrollBarOpacity": 0.5,
  "top": "2.05%",
  "scrollBarWidth": 10,
  "height": "77.049%",
  "paddingTop": 0,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingRight": 0,
  "propagateClick": false,
  "scrollBarColor": "#000000",
  "horizontalAlign": "center",
  "layout": "vertical",
  "gap": 10,
  "data": {
   "name": "Main_Container"
  },
  "visible": false,
  "backgroundOpacity": 0,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "id": "Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F",
  "left": "0%",
  "contentOpaque": false,
  "borderRadius": 0,
  "paddingLeft": 0,
  "width": "100%",
  "children": [
   {
    "popUpBorderRadius": 0,
    "class": "DropDown",
    "popUpShadowSpread": 1,
    "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F",
    "borderRadius": 4,
    "popUpBackgroundOpacity": 0.72,
    "selectedPopUpBackgroundColor": "#0066FF",
    "fontFamily": "Arial",
    "prompt": "Location List",
    "paddingLeft": 5,
    "backgroundColorDirection": "vertical",
    "borderSize": 0,
    "shadow": false,
    "width": "20.256%",
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "popUpBackgroundColor": "#FFFFFF",
    "minHeight": 20,
    "popUpShadowOpacity": 0,
    "fontColor": "#333333",
    "popUpShadowColor": "#000000",
    "backgroundColor": [
     "#00CCFF",
     "#0099FF"
    ],
    "arrowBeforeLabel": false,
    "paddingTop": 0,
    "selectedPopUpFontColor": "#FFFFFF",
    "height": "27.397%",
    "minWidth": 200,
    "playList": "this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
    "paddingRight": 5,
    "fontSize": 14,
    "propagateClick": false,
    "gap": 0,
    "popUpShadow": false,
    "popUpGap": 0,
    "fontStyle": "normal",
    "arrowColor": "#0066FF",
    "popUpShadowBlurRadius": 6,
    "backgroundColorRatios": [
     0,
     1
    ],
    "data": {
     "name": "Location List"
    },
    "textDecoration": "none",
    "backgroundOpacity": 0.72,
    "popUpFontColor": "#000000",
    "paddingBottom": 0,
    "fontWeight": "normal"
   }
  ],
  "borderSize": 0,
  "shadow": false,
  "minHeight": 1,
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "top": "0.96%",
  "scrollBarWidth": 10,
  "height": "10%",
  "paddingTop": 0,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingRight": 0,
  "propagateClick": false,
  "scrollBarColor": "#000000",
  "horizontalAlign": "left",
  "layout": "horizontal",
  "gap": 10,
  "data": {
   "name": "ContainerDropDown"
  },
  "backgroundOpacity": 0,
  "paddingBottom": 0
 },
 {
  "class": "Label",
  "verticalAlign": "middle",
  "textShadowBlurRadius": 3,
  "id": "Label_E2D61738_F65E_D8BA_41DD_6888E340C197",
  "left": "0%",
  "borderRadius": 0,
  "paddingLeft": 0,
  "width": "100%",
  "borderSize": 0,
  "fontWeight": "normal",
  "shadow": false,
  "fontFamily": "Arial",
  "textShadowVerticalLength": 1,
  "text": "La Lima Free Zone",
  "minHeight": 1,
  "fontColor": "#FFFFFF",
  "top": "0%",
  "height": "10%",
  "textShadowColor": "#000000",
  "paddingTop": 0,
  "textShadowHorizontalLength": 1,
  "textShadowOpacity": 1,
  "minWidth": 1,
  "paddingRight": 0,
  "fontSize": 20,
  "propagateClick": false,
  "horizontalAlign": "center",
  "fontStyle": "normal",
  "data": {
   "name": "Label_La Lima Free Zone"
  },
  "textDecoration": "none",
  "visible": false,
  "backgroundOpacity": 0,
  "paddingBottom": 0
 },
 {
  "class": "Label",
  "verticalAlign": "middle",
  "textShadowBlurRadius": 3,
  "id": "Label_E253EC4C_F622_28DA_41DB_546DF82EE842",
  "left": "0%",
  "borderRadius": 0,
  "paddingLeft": 0,
  "width": "100%",
  "borderSize": 0,
  "fontWeight": "normal",
  "shadow": false,
  "fontFamily": "Arial",
  "textShadowVerticalLength": 1,
  "text": "Cartago City",
  "minHeight": 1,
  "fontColor": "#FFFFFF",
  "top": "0%",
  "height": "10%",
  "textShadowColor": "#000000",
  "paddingTop": 0,
  "textShadowHorizontalLength": 1,
  "textShadowOpacity": 1,
  "minWidth": 1,
  "paddingRight": 0,
  "fontSize": 20,
  "propagateClick": false,
  "horizontalAlign": "center",
  "fontStyle": "normal",
  "data": {
   "name": "Label_Cartago City"
  },
  "textDecoration": "none",
  "visible": false,
  "backgroundOpacity": 0,
  "paddingBottom": 0
 },
 {
  "class": "Label",
  "verticalAlign": "middle",
  "textShadowBlurRadius": 3,
  "id": "Label_E216BE12_F622_684F_41EC_C2D2817E217E",
  "left": "0%",
  "borderRadius": 0,
  "paddingLeft": 0,
  "width": "100%",
  "borderSize": 0,
  "fontWeight": "normal",
  "shadow": false,
  "fontFamily": "Arial",
  "textShadowVerticalLength": 1,
  "text": "Corporate Center Project",
  "minHeight": 1,
  "fontColor": "#FFFFFF",
  "top": "0%",
  "height": "13.108%",
  "textShadowColor": "#000000",
  "paddingTop": 0,
  "textShadowHorizontalLength": 1,
  "textShadowOpacity": 1,
  "minWidth": 1,
  "paddingRight": 0,
  "fontSize": 20,
  "propagateClick": false,
  "horizontalAlign": "center",
  "fontStyle": "normal",
  "data": {
   "name": "Label_Corporate Center"
  },
  "textDecoration": "none",
  "visible": false,
  "backgroundOpacity": 0,
  "paddingBottom": 0
 },
 {
  "class": "Label",
  "verticalAlign": "middle",
  "textShadowBlurRadius": 3,
  "id": "Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515",
  "left": "0%",
  "borderRadius": 0,
  "paddingLeft": 0,
  "width": "100%",
  "borderSize": 0,
  "fontWeight": "normal",
  "shadow": false,
  "fontFamily": "Arial",
  "textShadowVerticalLength": 1,
  "text": "Corporate Building",
  "minHeight": 1,
  "fontColor": "#FFFFFF",
  "top": "6%",
  "height": "3.5%",
  "textShadowColor": "#000000",
  "paddingTop": 0,
  "textShadowHorizontalLength": 1,
  "textShadowOpacity": 1,
  "minWidth": 1,
  "paddingRight": 0,
  "fontSize": 20,
  "propagateClick": false,
  "horizontalAlign": "center",
  "fontStyle": "normal",
  "data": {
   "name": "Label_Corporate Building"
  },
  "textDecoration": "none",
  "visible": false,
  "backgroundOpacity": 0,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "id": "Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E",
  "left": "0%",
  "contentOpaque": false,
  "borderRadius": 0,
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "children": [
   {
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "overflow": "scroll",
    "id": "Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41",
    "left": "4.32%",
    "contentOpaque": false,
    "borderRadius": 0,
    "paddingLeft": 0,
    "backgroundColorDirection": "vertical",
    "children": [
     {
      "insetBorder": false,
      "class": "WebFrame",
      "id": "WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21",
      "borderRadius": 0,
      "right": "0%",
      "paddingLeft": 0,
      "backgroundColorDirection": "vertical",
      "borderSize": 0,
      "shadow": false,
      "url": "https://www.xline3d.com/360/lalimav6.html",
      "width": "99.907%",
      "minHeight": 1,
      "top": "0%",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "paddingTop": 0,
      "height": "100%",
      "minWidth": 1,
      "paddingRight": 0,
      "propagateClick": false,
      "scrollEnabled": true,
      "backgroundColorRatios": [
       0
      ],
      "data": {
       "name": "WebFrame"
      },
      "backgroundOpacity": 1,
      "paddingBottom": 0
     },
     {
      "maxWidth": 394,
      "class": "Image",
      "verticalAlign": "middle",
      "id": "Image_8DEE620A_9CF3_CE34_41DA_A961CBC52418",
      "borderRadius": 0,
      "maxHeight": 396,
      "right": "0%",
      "paddingLeft": 0,
      "width": "6.97%",
      "borderSize": 0,
      "shadow": false,
      "url": "skin/Image_8DEE620A_9CF3_CE34_41DA_A961CBC52418.png",
      "minHeight": 40,
      "top": "0%",
      "height": "10.979%",
      "minWidth": 40,
      "paddingRight": 0,
      "paddingTop": 0,
      "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, false, 0, null, null, false)",
      "propagateClick": false,
      "horizontalAlign": "center",
      "scaleMode": "fit_inside",
      "data": {
       "name": "Button CloseFrame"
      },
      "backgroundOpacity": 0,
      "paddingBottom": 0
     }
    ],
    "borderSize": 0,
    "shadow": false,
    "width": "91.341%",
    "scrollBarMargin": 2,
    "minHeight": 1,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10,
    "bottom": "3.11%",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingTop": 0,
    "verticalAlign": "top",
    "height": "91.081%",
    "minWidth": 1,
    "paddingRight": 0,
    "propagateClick": false,
    "gap": 10,
    "scrollBarColor": "#000000",
    "layout": "absolute",
    "horizontalAlign": "left",
    "backgroundColorRatios": [
     0,
     1
    ],
    "data": {
     "name": "Web container "
    },
    "backgroundOpacity": 0.3,
    "paddingBottom": 0
   }
  ],
  "borderSize": 0,
  "shadow": false,
  "width": "100%",
  "scrollBarMargin": 2,
  "minHeight": 1,
  "creationPolicy": "inAdvance",
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "scrollBarWidth": 10,
  "backgroundColor": [
   "#000000"
  ],
  "paddingTop": 0,
  "verticalAlign": "top",
  "height": "100%",
  "minWidth": 1,
  "paddingRight": 0,
  "propagateClick": false,
  "gap": 10,
  "scrollBarColor": "#000000",
  "layout": "absolute",
  "horizontalAlign": "left",
  "backgroundColorRatios": [
   0
  ],
  "data": {
   "name": "Main Container Web link"
  },
  "visible": false,
  "backgroundOpacity": 0.3,
  "paddingBottom": 0
 },
 {
  "class": "UIComponent",
  "id": "veilPopupPanorama",
  "left": 0,
  "borderRadius": 0,
  "right": 0,
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "borderSize": 0,
  "shadow": false,
  "minHeight": 0,
  "top": 0,
  "bottom": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingTop": 0,
  "minWidth": 0,
  "paddingRight": 0,
  "propagateClick": false,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "backgroundColorRatios": [
   0
  ],
  "data": {
   "name": "UIComponent2661"
  },
  "visible": false,
  "backgroundOpacity": 0.55,
  "paddingBottom": 0
 },
 {
  "class": "ZoomImage",
  "id": "zoomImagePopupPanorama",
  "left": 0,
  "borderRadius": 0,
  "right": 0,
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "borderSize": 0,
  "shadow": false,
  "minHeight": 0,
  "top": 0,
  "bottom": 0,
  "backgroundColor": [],
  "paddingTop": 0,
  "minWidth": 0,
  "paddingRight": 0,
  "propagateClick": false,
  "backgroundColorRatios": [],
  "data": {
   "name": "ZoomImage2662"
  },
  "visible": false,
  "scaleMode": "custom",
  "backgroundOpacity": 1,
  "paddingBottom": 0
 },
 {
  "iconHeight": 20,
  "class": "CloseButton",
  "verticalAlign": "middle",
  "borderColor": "#000000",
  "id": "closeButtonPopupPanorama",
  "shadowBlurRadius": 6,
  "borderRadius": 0,
  "right": 10,
  "paddingLeft": 5,
  "backgroundColorDirection": "vertical",
  "borderSize": 0,
  "shadowColor": "#000000",
  "shadow": false,
  "fontFamily": "Arial",
  "fontWeight": "normal",
  "minHeight": 0,
  "fontColor": "#FFFFFF",
  "top": 10,
  "iconWidth": 20,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingTop": 5,
  "rollOverIconColor": "#666666",
  "iconLineWidth": 5,
  "minWidth": 0,
  "iconBeforeLabel": true,
  "mode": "push",
  "paddingRight": 5,
  "label": "",
  "propagateClick": false,
  "iconColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "gap": 5,
  "horizontalAlign": "center",
  "layout": "horizontal",
  "fontSize": "1.29vh",
  "fontStyle": "normal",
  "pressedIconColor": "#888888",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowSpread": 1,
  "textDecoration": "none",
  "visible": false,
  "backgroundOpacity": 0.3,
  "data": {
   "name": "CloseButton2663"
  },
  "cursor": "hand",
  "paddingBottom": 5
 }
], 
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "id": "rootPlayer",
 "borderRadius": 0,
 "mobileMipmappingEnabled": false,
 "contentOpaque": false,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_2A768AFD_2462_3F19_4182_123A91E133C7.set('selectedIndex', 0)",
 "paddingLeft": 0,
 "borderSize": 0,
 "shadow": false,
 "width": "100%",
 "scrollBarMargin": 2,
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10,
 "backgroundPreloadEnabled": true,
 "vrPolyfillScale": 0.5,
 "paddingTop": 0,
 "verticalAlign": "top",
 "height": "100%",
 "minWidth": 20,
 "scripts": {
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "existsKey": function(key){  return key in window; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getKey": function(key){  return window[key]; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); }
 },
 "paddingRight": 0,
 "propagateClick": false,
 "gap": 10,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "horizontalAlign": "left",
 "data": {
  "name": "Player7285"
 },
 "desktopMipmappingEnabled": false,
 "mouseWheelEnabled": true,
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
