(function(){
    var script = { "definitions": [
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345CDD8F_20DF_6B94_41B6_C00B98F530E1",
  "easing": "cubic_in_out"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_70D97E94_6009_0CB6_4197_89EC8A0502B9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -103.1,
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_t.jpg",
    "overlays": [
     {
      "maps": [],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_712F7A9A_6009_14B2_41D6_4A90D8F2B4AA); this.mainPlayList.set('selectedIndex', 14)",
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
      "maps": [],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_711D4A8E_6009_1492_41BE_51B3A6C5027A); this.mainPlayList.set('selectedIndex', 6)",
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
    "cube": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_hq.jpeg",
       "width": 10224,
       "tags": [
        "oculusgo",
        "ipadpro"
       ],
       "height": 1704
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
  "label": "20",
  "id": "panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "frames": [
      {
       "class": "CubicPanoramaFrame",
       "thumbnailUrl": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_t.jpg",
       "overlays": [
        {
         "maps": [],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_6F381BE8_6009_149E_41CE_494A071808F9); this.mainPlayList.set('selectedIndex', 12)",
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
         "maps": [],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_6F36ABF5_6009_1476_41BD_BE4F0F523F54); this.mainPlayList.set('selectedIndex', 13)",
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
         "maps": [],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_6F238BDB_6009_14B2_41B6_2DC347AEA7FE); this.mainPlayList.set('selectedIndex', 16)",
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
       "cube": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_hq.jpeg",
          "width": 10224,
          "tags": [
           "oculusgo",
           "ipadpro"
          ],
          "height": 1704
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
     "label": "Empty Shell",
     "id": "panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
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
             "tags": [
              "oculusgo",
              "ipadpro"
             ],
             "height": 2688
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F.jpeg",
             "width": 3217,
             "height": 1608
            }
           ]
          },
          "thumbnailUrl": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_t.jpg",
          "overlays": [
           {
            "maps": [],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_70903A0C_6009_1796_41C1_71383658D196); this.mainPlayList.set('selectedIndex', 1)",
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
            "maps": [],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3, this.camera_70AC8A23_6009_1792_41D4_0BD35F30C1BE); this.mainPlayList.set('selectedIndex', 2)",
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
            "maps": [],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_70CA7A3F_6009_17F2_41B9_BBD74CDB6EFE); this.mainPlayList.set('selectedIndex', 6)",
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
            "maps": [],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_708509F5_6009_1476_41C3_9120A0B8FC62); this.mainPlayList.set('selectedIndex', 7)",
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
            "maps": [],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_70BFAA33_6009_17F2_41D6_4B17D197C098); this.mainPlayList.set('selectedIndex', 3)",
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
            "bleaching": 0.7,
            "pitch": 44.67,
            "class": "LensFlarePanoramaOverlay",
            "id": "overlay_39E9E5BE_37C2_E4C0_41C8_ED2101A9B7E1",
            "yaw": -108.98,
            "bleachingDistance": 0.4
           },
           {
            "bleaching": 0.7,
            "pitch": 28.8,
            "class": "LensFlarePanoramaOverlay",
            "id": "overlay_39F9CEF7_37C2_E441_4193_83EA81D1DE6F",
            "yaw": 14.17,
            "bleachingDistance": 0.4
           }
          ]
         }
        ],
        "label": "asensores",
        "id": "panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
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
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "height": 2688
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042.jpeg",
                "width": 3217,
                "height": 1608
               }
              ]
             },
             "thumbnailUrl": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_t.jpg",
             "overlays": [
              {
               "maps": [],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_7051C9A2_6009_1492_41D3_AAD775D034FD); this.mainPlayList.set('selectedIndex', 16)",
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
               "maps": [],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175, this.camera_706CB9B6_6009_14F2_41C6_456146DDF746); this.mainPlayList.set('selectedIndex', 15)",
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
             ]
            }
           ],
           "label": "Parking Garage",
           "id": "panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
             "yaw": -3.13,
             "distance": 1,
             "backwardYaw": -16.11
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
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
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ],
                   "height": 2688
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175.jpeg",
                   "width": 3217,
                   "height": 1608
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_t.jpg",
                "overlays": [
                 {
                  "maps": [],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_701E8CE0_6009_0C8E_417C_C19A03F2000C); this.mainPlayList.set('selectedIndex', 7)",
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
                  "bleaching": 0.7,
                  "pitch": 16.72,
                  "class": "LensFlarePanoramaOverlay",
                  "id": "overlay_39DF8AEE_37C2_AC40_417A_6242CBF48B68",
                  "yaw": 95.38,
                  "bleachingDistance": 0.4
                 }
                ]
               }
              ],
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
              "class": "Panorama",
              "pitch": 0,
              "thumbnailUrl": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_t.jpg",
              "hfovMax": 120,
              "mapLocations": [
               {
                "map": {
                 "minimumZoomFactor": 0.5,
                 "fieldOfViewOverlayInsideColor": "#000000",
                 "height": 558,
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
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070.png",
                    "width": 415,
                    "height": 558
                   }
                  ]
                 },
                 "thumbnailUrl": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_t.png",
                 "scaleMode": "fit_inside",
                 "overlays": [
                  {
                   "useHandCursor": true,
                   "rollOverDisplay": true,
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
                   "id": "overlay_C10F34C4_DD09_E665_41EB_0E9F8F32C5EE",
                   "data": {
                    "label": "Image"
                   }
                  },
                  {
                   "useHandCursor": true,
                   "rollOverDisplay": true,
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
                   "id": "overlay_C057DBDB_DD0A_6267_41DF_74197503054E",
                   "data": {
                    "label": "Image"
                   }
                  },
                  {
                   "useHandCursor": true,
                   "rollOverDisplay": true,
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
                   "id": "overlay_C1A62C4E_DD0B_E665_41E4_24E80204A343",
                   "data": {
                    "label": "Image"
                   }
                  },
                  {
                   "useHandCursor": true,
                   "rollOverDisplay": true,
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
                   "id": "overlay_C0CBF35A_DD0A_E26D_41D4_D1DC41F86387",
                   "data": {
                    "label": "Image"
                   }
                  },
                  {
                   "useHandCursor": true,
                   "rollOverDisplay": true,
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
                   "id": "overlay_C01B30DE_DD09_BE65_41DD_D62C14826FDF",
                   "data": {
                    "label": "Image"
                   }
                  },
                  {
                   "useHandCursor": true,
                   "rollOverDisplay": true,
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
                   "id": "overlay_C332A511_DD0E_A7FC_41E4_2786EB8DD2F7",
                   "data": {
                    "label": "Image"
                   }
                  },
                  {
                   "useHandCursor": true,
                   "rollOverDisplay": true,
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
                   "id": "overlay_C0B9B7F7_DD0E_6224_41E8_445361C5C9E4",
                   "data": {
                    "label": "Image"
                   }
                  },
                  {
                   "useHandCursor": true,
                   "rollOverDisplay": true,
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
                   "id": "overlay_C3F85A31_DD0F_E23C_41DC_6258471D9794",
                   "data": {
                    "label": "Image"
                   }
                  },
                  {
                   "useHandCursor": true,
                   "rollOverDisplay": true,
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
                   "id": "overlay_C30E80C5_DD0E_9E67_41E5_F7EA65B0847D",
                   "data": {
                    "label": "Image"
                   }
                  },
                  {
                   "useHandCursor": true,
                   "rollOverDisplay": true,
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
                   "id": "overlay_C3598F78_DD0E_622C_41E9_FCE2210BA50E",
                   "data": {
                    "label": "Image"
                   }
                  },
                  {
                   "useHandCursor": true,
                   "rollOverDisplay": true,
                   "id": "overlay_C3A2F1BB_DD09_9E2C_41E6_AEB47B5FEE36",
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
                   "areas": [
                    {
                     "class": "HotspotMapOverlayArea",
                     "mapColor": "#FF0000"
                    }
                   ],
                   "data": {
                    "label": "Image"
                   }
                  },
                  {
                   "useHandCursor": true,
                   "rollOverDisplay": true,
                   "id": "overlay_C3966761_DD0A_E25F_41D3_527C5C447FFE",
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
                   "areas": [
                    {
                     "class": "HotspotMapOverlayArea",
                     "mapColor": "#FF0000"
                    }
                   ],
                   "data": {
                    "label": "Image"
                   }
                  },
                  {
                   "useHandCursor": true,
                   "rollOverDisplay": true,
                   "id": "overlay_C2AD60A4_DD09_9E24_41E0_BE7A28E7C8F8",
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
                   "areas": [
                    {
                     "class": "HotspotMapOverlayArea",
                     "mapColor": "#FF0000"
                    }
                   ],
                   "data": {
                    "label": "Image"
                   }
                  },
                  {
                   "useHandCursor": true,
                   "rollOverDisplay": true,
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
                   "id": "overlay_EFFAE3BA_DD3F_A22D_41DB_87FABC0F13CA",
                   "data": {
                    "label": "Image"
                   }
                  },
                  {
                   "useHandCursor": true,
                   "rollOverDisplay": true,
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
                   "id": "overlay_2A070BB7_27CE_576F_41AB_07E104B79EC6",
                   "data": {
                    "label": "Image"
                   }
                  },
                  {
                   "useHandCursor": true,
                   "rollOverDisplay": true,
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
                   "id": "overlay_376F3930_27CA_D361_4190_7CF2D4BA616B",
                   "data": {
                    "label": "Image"
                   }
                  },
                  {
                   "useHandCursor": true,
                   "rollOverDisplay": true,
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
                   "id": "overlay_3778DCE6_27D7_D2E1_41C3_D9B03693BA2C",
                   "data": {
                    "label": "Image"
                   }
                  },
                  {
                   "useHandCursor": true,
                   "rollOverDisplay": true,
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
                   "id": "overlay_3686017A_27D6_53E6_41C2_468B88D59841",
                   "data": {
                    "label": "Image"
                   }
                  }
                 ],
                 "fieldOfViewOverlayOutsideOpacity": 0,
                 "initialZoomFactor": 1,
                 "fieldOfViewOverlayInsideOpacity": 0.4,
                 "fieldOfViewOverlayOutsideColor": "#000000"
                },
                "x": 73.95,
                "angle": -207.49,
                "y": 114.95,
                "class": "PanoramaMapLocation"
               }
              ],
              "vfov": 180,
              "cardboardMenu": {
               "fontFamily": "Arial",
               "selectedBackgroundColor": "#202020",
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
               "rollOverOpacity": 0.8,
               "id": "Menu_701E2928_6009_159E_41D3_3E961EFF05B8",
               "fontColor": "#FFFFFF",
               "class": "Menu",
               "rollOverFontColor": "#FFFFFF",
               "selectedFontColor": "#FFFFFF",
               "opacity": 0.4,
               "rollOverBackgroundColor": "#000000",
               "backgroundColor": "#404040"
              },
              "hfovMin": 100,
              "hfov": 360,
              "partial": false
             },
             "yaw": 99.63,
             "distance": 1,
             "backwardYaw": -61.02
            }
           ],
           "class": "Panorama",
           "pitch": 0,
           "thumbnailUrl": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_t.jpg",
           "hfovMax": 120,
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
           "cardboardMenu": "this.Menu_701E2928_6009_159E_41D3_3E961EFF05B8",
           "hfovMin": 100,
           "hfov": 360,
           "partial": false
          },
          "yaw": -16.11,
          "distance": 1,
          "backwardYaw": -3.13
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "frames": [
            {
             "class": "CubicPanoramaFrame",
             "thumbnailUrl": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_t.jpg",
             "overlays": [
              {
               "maps": [],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_6EFC3B9B_6009_14B2_41C3_A1FEAD2F0D5D); this.mainPlayList.set('selectedIndex', 16)",
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
               "maps": [],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104, this.camera_6F0A1BA8_6009_149E_41D5_BEAD29DC44F5); this.mainPlayList.set('selectedIndex', 8)",
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
               "bleaching": 0.7,
               "pitch": -1.05,
               "class": "LensFlarePanoramaOverlay",
               "id": "overlay_D7DEC935_DCEA_FB36_41D7_D4FB63048649",
               "yaw": -92.76,
               "bleachingDistance": 0.4
              },
              {
               "maps": [],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0, {'rollOverIconColor':'#CCCCCC','iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','paddingLeft':5,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_C406C318_D4FF_7ACD_41B8_0A98872E7CE5, null, null, null, null, false)",
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
               "maps": [],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D, {'rollOverIconColor':'#CCCCCC','iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','paddingLeft':5,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_C4896E50_D4F3_6B5D_41D3_2EEBDC3443C4, null, null, null, null, false)",
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
               "rotationX": 0,
               "popupMaxWidth": "95%",
               "popupDistance": 100,
               "rotationZ": 0,
               "hideDuration": 500,
               "class": "PopupPanoramaOverlay",
               "id": "popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D",
               "showDuration": 500,
               "hfov": 8.04,
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
               "yaw": 163.85,
               "hideEasing": "cubic_out",
               "popupMaxHeight": "95%"
              },
              {
               "showEasing": "cubic_in",
               "rotationX": 0,
               "popupMaxWidth": "95%",
               "popupDistance": 100,
               "rotationZ": 0,
               "hideDuration": 500,
               "class": "PopupPanoramaOverlay",
               "id": "popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0",
               "showDuration": 500,
               "hfov": 7.64,
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
               "yaw": 7.39,
               "hideEasing": "cubic_out",
               "popupMaxHeight": "95%"
              },
              {
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 7.94,
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
                 "pitch": -4.64
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_6F015BB5_6009_14F6_41C7_29CF302595D1); this.setMediaBehaviour(this.playList_6FE808F0_6009_148E_41D2_4CAAC70E9B2A, 0, this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6)",
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
             "cube": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_hq.jpeg",
                "width": 10224,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "height": 1704
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
           "label": "Lobby",
           "id": "panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
             "yaw": 87.33,
             "distance": 1,
             "backwardYaw": 32.92
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "frames": [
               {
                "class": "CubicPanoramaFrame",
                "thumbnailUrl": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_t.jpg",
                "overlays": [
                 {
                  "maps": [],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_70C59A4B_6009_1792_41D0_12DF14E1E648); this.mainPlayList.set('selectedIndex', 1)",
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
                "cube": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_hq.jpeg",
                   "width": 10224,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ],
                   "height": 1704
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
              "class": "Panorama",
              "pitch": 0,
              "thumbnailUrl": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_t.jpg",
              "hfovMax": 120,
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
              "cardboardMenu": "this.Menu_701E2928_6009_159E_41D3_3E961EFF05B8",
              "hfovMin": 100,
              "hfov": 360,
              "partial": false
             },
             "yaw": -176.55,
             "distance": 1,
             "backwardYaw": 176.9
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
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
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ],
                   "height": 3217
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09.jpeg",
                   "width": 4002,
                   "height": 2001
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_t.jpg",
                "overlays": [
                 {
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.92,
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
                    "pitch": -2.1
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_6FC31C92_6009_0CB2_41A2_C30EEED1A19C); this.setMediaBehaviour(this.playList_6FEB98ED_6009_1491_41BE_CE43752DC015, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
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
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.92,
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
                    "pitch": 1.04
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 0)",
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
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.92,
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
                    "pitch": -0.36
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748, this.camera_6FB11C84_6009_0C96_41A0_8A182717066B); this.setMediaBehaviour(this.playList_6FFB78FF_6009_1472_41D6_945E5F069B75, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
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
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.92,
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
                    "pitch": -2.53
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_6FAB4C6A_6009_1392_41AE_C9E9B9A1F6F1); this.mainPlayList.set('selectedIndex', 1)",
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
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.91,
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
                    "pitch": -3.81
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_6FA6EC77_6009_0C72_41D7_30F425B13237); this.setMediaBehaviour(this.playList_6FE178F7_6009_1472_41D4_5B964B82917C, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
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
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.67,
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
                    "pitch": 16.63
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.showPopupPanoramaOverlay(this.popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E, {'rollOverIconColor':'#666666','iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','paddingLeft':5,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_0AA1E95D_2068_946A_419A_A79BE517FB92, null, null, null, null, false)",
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
                  "rotationX": 0,
                  "popupMaxWidth": "95%",
                  "popupDistance": 100,
                  "rotationZ": 0,
                  "hideDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "id": "popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E",
                  "showDuration": 500,
                  "hfov": 3.78,
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
                  "yaw": -55.53,
                  "hideEasing": "cubic_out",
                  "popupMaxHeight": "95%"
                 },
                 {
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 4.52,
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
                    "pitch": 40.22
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 8, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
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
                ]
               }
              ],
              "label": "3-Detail CC",
              "id": "panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
                "yaw": -59.69,
                "distance": 1,
                "backwardYaw": -91.85
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
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
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ],
                      "height": 3217
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B.jpeg",
                      "width": 4002,
                      "height": 2001
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_t.jpg",
                   "overlays": [
                    {
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.88,
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
                       "pitch": -7.02
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_70017CD4_6009_0CB6_41D6_0A3A90513163); this.setMediaBehaviour(this.playList_6FEB98ED_6009_1491_41BE_CE43752DC015, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
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
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.91,
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
                       "pitch": -3.74
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_6FF72CC6_6009_0C93_41C3_756722BA4EC3); this.setMediaBehaviour(this.playList_6FFB2901_6009_158E_41D7_AE4EFBA65DD2, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
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
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.91,
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
                       "pitch": -3.14
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246, this.camera_6FE50CBA_6009_0CF2_41D5_5A959C89A482); this.setMediaBehaviour(this.playList_6FFB6901_6009_158E_41D1_A1804781461F, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
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
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.92,
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
                       "pitch": 0.87
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0B7B5A27_1FEB_7426_4195_945554348391, this.camera_6FDF1CA0_6009_0C8E_41C7_CC756DEA873B); this.setMediaBehaviour(this.playList_6FE718FA_6009_1472_41CB_E4E122465710, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
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
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.91,
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
                       "pitch": -2.79
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_6FEAFCAC_6009_0C96_41C7_48F1202B26EE); this.setMediaBehaviour(this.playList_6FE808F0_6009_148E_41D2_4CAAC70E9B2A, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
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
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.85,
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
                       "pitch": 8.64
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.showPopupPanoramaOverlay(this.popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7, {'rollOverIconColor':'#666666','iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','paddingLeft':5,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, null, null, null, null, null, false)",
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
                     "rotationX": 0,
                     "popupMaxWidth": "95%",
                     "popupDistance": 100,
                     "rotationZ": 0,
                     "hideDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "id": "popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7",
                     "showDuration": 500,
                     "hfov": 5.85,
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
                     "yaw": -45.57,
                     "hideEasing": "cubic_out",
                     "popupMaxHeight": "95%"
                    },
                    {
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 4.82,
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
                       "pitch": 35.54
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
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
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.92,
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
                       "pitch": -1.15
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.showPopupPanoramaOverlay(this.popup_36E9C513_249E_702C_41C0_2CA0C18AAE54, {'rollOverIconColor':'#666666','iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','paddingLeft':5,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_32BB558C_24AE_9034_41A0_905F3B8026D3, null, null, null, null, false)",
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
                     "rotationX": 0,
                     "popupMaxWidth": "95%",
                     "popupDistance": 100,
                     "rotationZ": 0,
                     "hideDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "id": "popup_36E9C513_249E_702C_41C0_2CA0C18AAE54",
                     "showDuration": 500,
                     "hfov": 5.92,
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
                     "yaw": -13.2,
                     "hideEasing": "cubic_out",
                     "popupMaxHeight": "95%"
                    },
                    {
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.92,
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
                       "pitch": -1.52
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_37E7B455_24BA_B0D4_41A5_EF23708D6C53, {'rollOverIconColor':'#666666','iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','paddingLeft':5,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, true) } else { this.showPopupMedia(this.window_6B99DE72_6009_0C72_41D0_89DF6ACA567A, this.video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB, this.PlayList_7019B925_6009_1596_41C5_7BD4329ED0C5, '95%', '95%', true, true) }",
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
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_8_0.png",
                          "width": 105,
                          "height": 105
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
                     "enabledInCardboard": true
                    },
                    {
                     "showEasing": "cubic_in",
                     "rotationX": 0,
                     "popupMaxWidth": "95%",
                     "popupDistance": 100,
                     "rotationZ": 0,
                     "hideDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "id": "popup_37E7B455_24BA_B0D4_41A5_EF23708D6C53",
                     "showDuration": 500,
                     "rotationY": 0,
                     "hfov": 5.92,
                     "loop": false,
                     "autoplay": true,
                     "pitch": -1.52,
                     "yaw": 34.02,
                     "hideEasing": "cubic_out",
                     "popupMaxHeight": "95%",
                     "video": {
                      "class": "VideoResource",
                      "width": 1280,
                      "height": 720,
                      "mp4Url": "media/video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB.mp4"
                     }
                    }
                   ]
                  }
                 ],
                 "label": "4-Frente Rotonda",
                 "id": "panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
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
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ],
                         "height": 3217
                        },
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391.jpeg",
                         "width": 4002,
                         "height": 2001
                        }
                       ]
                      },
                      "thumbnailUrl": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_t.jpg",
                      "overlays": [
                       {
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 5.91,
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
                          "pitch": -3.74
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_6F784C36_6009_13F2_41D7_C541A5D01E44); this.setMediaBehaviour(this.playList_6FFB2901_6009_158E_41D7_AE4EFBA65DD2, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)",
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
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 5.92,
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
                          "pitch": -1.39
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_6F743C43_6009_1392_41C7_0BE2C4768CE2); this.setMediaBehaviour(this.playList_6FE178F7_6009_1472_41D4_5B964B82917C, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)",
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
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 5.28,
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
                          "pitch": 27.01
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)",
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
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7.09,
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
                          "pitch": -16.71
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.media_0BA5C089_2079_B4ED_41A8_D2AC2349E041, this.camera_57ED2843_5884_EE2E_41C5_05C9E202BB3A); this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false)",
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
                      ]
                     }
                    ],
                    "label": "17-Construcci\u00f3n Coloplast",
                    "id": "panorama_0B7B5A27_1FEB_7426_4195_945554348391",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
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
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ],
                            "height": 3217
                           },
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC.jpeg",
                            "width": 4002,
                            "height": 2001
                           }
                          ]
                         },
                         "thumbnailUrl": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_t.jpg",
                         "overlays": [
                          {
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 5.91,
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
                             "pitch": -3.15
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_70759D9B_6009_0CB2_41C1_AAA292175192); this.setMediaBehaviour(this.playList_6FE178F7_6009_1472_41D4_5B964B82917C, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
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
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 5.89,
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
                             "pitch": -5.49
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E, this.camera_7087BDC8_6009_0C9E_41BB_FAA10909FB57); this.setMediaBehaviour(this.playList_6FE0A8F9_6009_147E_41C9_9674D9757377, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
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
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 5.92,
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
                             "pitch": -2.4
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0B7B5A27_1FEB_7426_4195_945554348391, this.camera_70790D71_6009_0D8E_41D6_FDD14EDAC812); this.setMediaBehaviour(this.playList_6FE718FA_6009_1472_41CB_E4E122465710, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
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
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 4.73,
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
                             "pitch": 36.98
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
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
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 4.64,
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
                             "pitch": -38.46
                            }
                           ],
                           "rollOverDisplay": false,
                           "id": "overlay_36086152_2497_F02C_41B3_25B12E8D5B06",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
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
                             "yaw": -18.22
                            }
                           ],
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          }
                         ]
                        }
                       ],
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
                         "panorama": {
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_hq.jpeg",
                               "width": 6434,
                               "tags": [
                                "oculusgo",
                                "ipadpro"
                               ],
                               "height": 3217
                              },
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B.jpeg",
                               "width": 4002,
                               "height": 2001
                              }
                             ]
                            },
                            "thumbnailUrl": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_t.jpg",
                            "overlays": [
                             {
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 5.86,
                                "yaw": 36.44,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_0_0_0_map.gif",
                                   "width": 16,
                                   "height": 16
                                  }
                                 ]
                                },
                                "pitch": 8.45
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1, this.camera_71AD7B0F_6009_1592_41D4_000F3CE07662); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 8, this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B)",
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_0_0.png",
                                   "width": 105,
                                   "height": 105
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
                              "enabledInCardboard": true
                             },
                             {
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 5.85,
                                "yaw": 76.9,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_1_0_0_map.gif",
                                   "width": 16,
                                   "height": 16
                                  }
                                 ]
                                },
                                "pitch": 8.85
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765, this.camera_71BEBB1B_6009_15B1_41C6_03FBD4DB762F); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 10, this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B)",
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_1_0.png",
                                   "width": 105,
                                   "height": 105
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
                              "enabledInCardboard": true
                             },
                             {
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 5.84,
                                "yaw": 128.57,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_2_0_0_map.gif",
                                   "width": 16,
                                   "height": 16
                                  }
                                 ]
                                },
                                "pitch": 9.2
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A, this.camera_6ED22B59_6009_15BE_4186_86F61DE25083); this.setMediaBehaviour(this.playList_6FFCA908_6009_159E_41CD_5C8881129E14, 0, this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B)",
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_2_0.png",
                                   "width": 105,
                                   "height": 105
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
                              "enabledInCardboard": true
                             },
                             {
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 5.16,
                                "yaw": 39.71,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_3_0_0_map.gif",
                                   "width": 16,
                                   "height": 16
                                  }
                                 ]
                                },
                                "pitch": -29.28
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.setMediaBehaviour(this.playList_6FE0A8F9_6009_147E_41C9_9674D9757377, 0, this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B)",
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_3_0.png",
                                   "width": 105,
                                   "height": 105
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
                              "enabledInCardboard": true
                             },
                             {
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 5.61,
                                "yaw": 10.63,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_4_0_0_map.gif",
                                   "width": 16,
                                   "height": 16
                                  }
                                 ]
                                },
                                "pitch": -18.62
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, true, 0, null, null, false)",
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
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_0_HS_4_0.png",
                                   "width": 105,
                                   "height": 105
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
                              }
                             }
                            ]
                           }
                          ],
                          "label": "IMG_20180114_184740_00_077-edit",
                          "id": "panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_hq.jpeg",
                                  "width": 6434,
                                  "tags": [
                                   "oculusgo",
                                   "ipadpro"
                                  ],
                                  "height": 3217
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1.jpeg",
                                  "width": 4002,
                                  "height": 2001
                                 }
                                ]
                               },
                               "thumbnailUrl": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_t.jpg",
                               "overlays": [
                                {
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 5.85,
                                   "yaw": 154.31,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_0_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": 8.98
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765, this.camera_714B0AB3_6009_14F2_41B9_D591F174846F); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 10, this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1)",
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_0_0.png",
                                      "width": 105,
                                      "height": 105
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
                                 "enabledInCardboard": true
                                },
                                {
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 5.89,
                                   "yaw": -104.82,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_1_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": 5.81
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B, this.camera_7144AAC0_6009_148E_41BB_66433C240FC4); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1)",
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_1_0.png",
                                      "width": 105,
                                      "height": 105
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
                                 "enabledInCardboard": true
                                },
                                {
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 5.89,
                                   "yaw": -157.61,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_2_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": 5.93
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A, this.camera_71541ACD_6009_1496_41D1_A175066BD371); this.setMediaBehaviour(this.playList_6FFCA908_6009_159E_41CD_5C8881129E14, 0, this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1)",
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_2_0.png",
                                      "width": 105,
                                      "height": 105
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
                                 "enabledInCardboard": true
                                },
                                {
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 3.26,
                                   "yaw": -25.74,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_3_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": -74.02
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.mainPlayList.set('selectedIndex', 0)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 3.26,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_3_0.png",
                                      "width": 211,
                                      "height": 211
                                     }
                                    ]
                                   },
                                   "pitch": -74.02,
                                   "yaw": -25.74
                                  }
                                 ],
                                 "id": "overlay_2A4CB51F_26DE_FCF5_41B8_45183B2D41C4",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 4.86,
                                   "yaw": -49.24,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_4_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": -34.78
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false)",
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_4_0.png",
                                      "width": 105,
                                      "height": 105
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
                                 }
                                },
                                {
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 5.42,
                                   "yaw": -45.25,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_5_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": -23.82
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_34BBD83C_246A_F055_41C1_EBEF48C7F767, {'rollOverIconColor':'#666666','iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','paddingLeft':5,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_32CBA59C_24AE_9054_41C1_95FEFF54BD80, null, null, null, null, false)",
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
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_0_HS_5_0.png",
                                      "width": 105,
                                      "height": 105
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
                                 "enabledInCardboard": true
                                },
                                {
                                 "showEasing": "cubic_in",
                                 "rotationX": 0,
                                 "popupMaxWidth": "95%",
                                 "popupDistance": 100,
                                 "rotationZ": 0,
                                 "hideDuration": 500,
                                 "class": "PopupPanoramaOverlay",
                                 "id": "popup_34BBD83C_246A_F055_41C1_EBEF48C7F767",
                                 "showDuration": 500,
                                 "hfov": 5.42,
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
                                 "pitch": -23.82,
                                 "yaw": -45.25,
                                 "hideEasing": "cubic_out",
                                 "popupMaxHeight": "95%"
                                }
                               ]
                              }
                             ],
                             "label": "IMG_20180114_162347_00_013-edit",
                             "id": "panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1",
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_hq.jpeg",
                                     "width": 6434,
                                     "tags": [
                                      "oculusgo",
                                      "ipadpro"
                                     ],
                                     "height": 3217
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765.jpeg",
                                     "width": 4002,
                                     "height": 2001
                                    }
                                   ]
                                  },
                                  "thumbnailUrl": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_t.jpg",
                                  "overlays": [
                                   {
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 5.8,
                                      "yaw": -64.23,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_0_0_0_map.gif",
                                         "width": 16,
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "pitch": 11.59
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1, this.camera_70C9EE57_6009_0FB2_41C4_FE5D6B5E8419); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 8, this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 5.8,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_0_0.png",
                                         "width": 105,
                                         "height": 105
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
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 5.79,
                                      "yaw": -165.51,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_1_0_0_map.gif",
                                         "width": 16,
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "pitch": 12.12
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A, this.camera_70EB0EB3_6009_0CF2_41D4_C1DABD3515BC); this.setMediaBehaviour(this.playList_6FFCA908_6009_159E_41CD_5C8881129E14, 0, this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
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
                                         "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_1_0.png",
                                         "width": 105,
                                         "height": 105
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
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 5.8,
                                      "yaw": -114.68,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_2_0_0_map.gif",
                                         "width": 16,
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "pitch": 11.56
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B, this.camera_70D97E94_6009_0CB6_4197_89EC8A0502B9); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 5.8,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_2_0.png",
                                         "width": 105,
                                         "height": 105
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
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 0.36,
                                      "yaw": 69.84,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_3_0_0_map.gif",
                                         "width": 16,
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "pitch": -86.56
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.setMediaBehaviour(this.playList_6FE1F8F8_6009_147E_41D0_1DD6ACF5329F, 0, this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 0.36,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_3_0.png",
                                         "width": 105,
                                         "height": 105
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
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 4.73,
                                      "yaw": -175.56,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_4_0_0_map.gif",
                                         "width": 16,
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "pitch": -37.04
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
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
                                         "url": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_0_HS_4_0.png",
                                         "width": 105,
                                         "height": 105
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
                                    }
                                   }
                                  ]
                                 }
                                ],
                                "label": "IMG_20180114_182756_00_062-edit",
                                "id": "panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765",
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1",
                                  "yaw": -64.23,
                                  "distance": 1,
                                  "backwardYaw": 154.31
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B",
                                  "yaw": -114.68,
                                  "distance": 1,
                                  "backwardYaw": 76.9
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_hq.jpeg",
                                        "width": 6434,
                                        "tags": [
                                         "oculusgo",
                                         "ipadpro"
                                        ],
                                        "height": 3217
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A.jpeg",
                                        "width": 4002,
                                        "height": 2001
                                       }
                                      ]
                                     },
                                     "thumbnailUrl": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_t.jpg",
                                     "overlays": [
                                      {
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 5.87,
                                         "yaw": -103.84,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_0_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": 7.56
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765, this.camera_70ADFE17_6009_0FB2_41C9_B07C44C2AAD1); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 10, this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A)",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.87,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_0_0.png",
                                            "width": 105,
                                            "height": 105
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
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 5.87,
                                         "yaw": -137.64,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_1_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": 7.26
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1, this.camera_70919DF0_6009_0C8E_41D6_2C762365FF3D); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 8, this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A)",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.87,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_1_0.png",
                                            "width": 105,
                                            "height": 105
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
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 5.85,
                                         "yaw": 169.03,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_2_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": 8.7
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B, this.camera_70BE1E39_6009_0FFE_41AF_9A642530430B); this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A)",
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
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_2_0.png",
                                            "width": 105,
                                            "height": 105
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
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 5.72,
                                         "yaw": -175.18,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_3_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": -49.88
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.setMediaBehaviour(this.playList_6FE048F9_6009_147E_41CB_F1CC870514B6, 0, this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A)",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
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
                                            "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_3_0.png",
                                            "width": 158,
                                            "height": 158
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
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 6.91,
                                         "yaw": 150.56,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_4_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": -54.28
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.showPopupPanoramaOverlay(this.popup_25AB8A34_3513_DE40_41C8_119007832823, {'rollOverIconColor':'#666666','iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','paddingLeft':5,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_232B696E_352D_BAC0_41B1_E8DFF9648419, null, null, null, null, false)",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 6.91,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_0_HS_4_0.png",
                                            "width": 211,
                                            "height": 211
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
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "showEasing": "cubic_in",
                                       "rotationX": 0,
                                       "popupMaxWidth": "95%",
                                       "popupDistance": 100,
                                       "rotationZ": 0,
                                       "hideDuration": 500,
                                       "class": "PopupPanoramaOverlay",
                                       "id": "popup_25AB8A34_3513_DE40_41C8_119007832823",
                                       "showDuration": 500,
                                       "hfov": 6.91,
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
                                       "pitch": -54.28,
                                       "yaw": 150.56,
                                       "hideEasing": "cubic_out",
                                       "popupMaxHeight": "95%"
                                      }
                                     ]
                                    }
                                   ],
                                   "label": "IMG_20180114_164030_00_037(Opci\u00f3n2)-edit",
                                   "id": "panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A",
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1",
                                     "yaw": -137.64,
                                     "distance": 1,
                                     "backwardYaw": -157.61
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765",
                                     "yaw": -103.84,
                                     "distance": 1,
                                     "backwardYaw": -165.51
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B",
                                     "yaw": 169.03,
                                     "distance": 1,
                                     "backwardYaw": 128.57
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
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
                                           "tags": [
                                            "oculusgo",
                                            "ipadpro"
                                           ],
                                           "height": 3217
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E.jpeg",
                                           "width": 4002,
                                           "height": 2001
                                          }
                                         ]
                                        },
                                        "thumbnailUrl": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_t.jpg",
                                        "overlays": [
                                         {
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 5.92,
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
                                            "pitch": -0.71
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525, this.camera_6ED6EB66_6009_1592_41D2_D54D719DC339); this.setMediaBehaviour(this.playList_6FE008F8_6009_147E_41D1_8460933E48D9, 0, this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E)",
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
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 3.49,
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
                                            "pitch": -1.78
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368, this.camera_6EE95B74_6009_1476_41A8_737B3FB980DD); this.setMediaBehaviour(this.playList_6FE098F9_6009_147E_4178_0C74F0A81F38, 0, this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
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
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 5.84,
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
                                            "pitch": 9.33
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.showPopupPanoramaOverlay(this.popup_3A24E5A5_20F8_BCDA_41A8_FE67D62CDC94, {'rollOverIconColor':'#666666','iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','paddingLeft':5,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_0AACC979_2068_942D_41A4_C9A0C0413384, null, null, null, null, false)",
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
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_0_HS_2_0.png",
                                               "width": 105,
                                               "height": 105
                                              }
                                             ]
                                            },
                                            "pitch": 9.33,
                                            "yaw": -30.73
                                           }
                                          ],
                                          "id": "overlay_3AEAF3EB_20F9_742D_41AB_09B61C7F5B0F",
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "showEasing": "cubic_in",
                                          "rotationX": 0,
                                          "popupMaxWidth": "95%",
                                          "popupDistance": 100,
                                          "rotationZ": 0,
                                          "hideDuration": 500,
                                          "class": "PopupPanoramaOverlay",
                                          "id": "popup_3A24E5A5_20F8_BCDA_41A8_FE67D62CDC94",
                                          "showDuration": 500,
                                          "hfov": 5.84,
                                          "rotationY": 0,
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
                                          "yaw": -30.73,
                                          "hideEasing": "cubic_out",
                                          "popupMaxHeight": "95%"
                                         },
                                         {
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 3.43,
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
                                            "pitch": 54.6
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.setMediaBehaviour(this.playList_6FFCA908_6009_159E_41CD_5C8881129E14, 0, this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
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
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 5.91,
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
                                            "pitch": -4.11
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.showPopupPanoramaOverlay(this.popup_35287B51_2496_902F_41BD_231499C70738, {'rollOverIconColor':'#666666','iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','paddingLeft':5,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_32B0359C_24AE_9054_41B2_D241F29053B7, null, null, null, null, false)",
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
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_0_HS_4_0.png",
                                               "width": 105,
                                               "height": 105
                                              }
                                             ]
                                            },
                                            "pitch": -4.11,
                                            "yaw": 11.93
                                           }
                                          ],
                                          "id": "overlay_3617C190_2496_902D_41AA_A2B17A28CB65",
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "showEasing": "cubic_in",
                                          "rotationX": 0,
                                          "popupMaxWidth": "95%",
                                          "popupDistance": 100,
                                          "rotationZ": 0,
                                          "hideDuration": 500,
                                          "class": "PopupPanoramaOverlay",
                                          "id": "popup_35287B51_2496_902F_41BD_231499C70738",
                                          "showDuration": 500,
                                          "hfov": 5.91,
                                          "rotationY": 0,
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
                                          "yaw": 11.93,
                                          "hideEasing": "cubic_out",
                                          "popupMaxHeight": "95%"
                                         }
                                        ]
                                       }
                                      ],
                                      "label": "15-Esquina Heraus",
                                      "id": "panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E",
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A"
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
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
                                              "tags": [
                                               "oculusgo",
                                               "ipadpro"
                                              ],
                                              "height": 3217
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525.jpeg",
                                              "width": 4002,
                                              "height": 2001
                                             }
                                            ]
                                           },
                                           "thumbnailUrl": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_t.jpg",
                                           "overlays": [
                                            {
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 5.92,
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
                                               "pitch": -1.9
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_70E02A68_6009_179E_41CD_05A5939A4C89); this.setMediaBehaviour(this.playList_6FE1A8F8_6009_147E_41C6_ED95FD1EED58, 0, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)",
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
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 5.92,
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
                                               "pitch": -2.52
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E, this.camera_70D0DA5A_6009_17B2_41D5_6E3DC8879E02); this.setMediaBehaviour(this.playList_6FE048F9_6009_147E_41CB_F1CC870514B6, 0, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)",
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
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 4.48,
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
                                               "pitch": 40.89
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "id": "overlay_0468197D_2059_7425_41B5_13CA67FE1091",
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
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            }
                                           ]
                                          }
                                         ],
                                         "label": "14-Entre Zollner y Heraus",
                                         "id": "panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E",
                                           "yaw": 99.68,
                                           "distance": 1,
                                           "backwardYaw": 27.45
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": {
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
                                                 "tags": [
                                                  "oculusgo",
                                                  "ipadpro"
                                                 ],
                                                 "height": 3217
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7.jpeg",
                                                 "width": 4002,
                                                 "height": 2001
                                                }
                                               ]
                                              },
                                              "thumbnailUrl": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_t.jpg",
                                              "overlays": [
                                               {
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 5.9,
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
                                                  "pitch": -4.4
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246, this.camera_7133FF60_6009_0D8E_41D0_B60DF33D3318); this.setMediaBehaviour(this.playList_6FFB6901_6009_158E_41D1_A1804781461F, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
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
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 5.92,
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
                                                  "pitch": -0.99
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525, this.camera_71222F45_6009_0D96_41D5_3138383D17FE); this.setMediaBehaviour(this.playList_6FE008F8_6009_147E_41D1_8460933E48D9, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
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
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 5.92,
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
                                                  "pitch": -1.59
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E, this.camera_7110BF28_6009_0D9E_41D6_804F64FBCA42); this.setMediaBehaviour(this.playList_6FE1F8F8_6009_147E_41D0_1DD6ACF5329F, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
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
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 5.82,
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
                                                  "pitch": 10.53
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.showPopupPanoramaOverlay(this.popup_3A3C822F_20F8_9425_41B2_B5F3B1085960, {'rollOverIconColor':'#666666','iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','paddingLeft':5,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_0AAA2971_2068_943D_41B4_10DFF5B38D1B, null, null, null, null, false)",
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
                                                "rotationX": 0,
                                                "popupMaxWidth": "95%",
                                                "popupDistance": 100,
                                                "rotationZ": 0,
                                                "hideDuration": 500,
                                                "class": "PopupPanoramaOverlay",
                                                "id": "popup_3A3C822F_20F8_9425_41B2_B5F3B1085960",
                                                "showDuration": 500,
                                                "hfov": 5.82,
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
                                                "yaw": 32.81,
                                                "hideEasing": "cubic_out",
                                                "popupMaxHeight": "95%"
                                               },
                                               {
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 5.34,
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
                                                  "pitch": 25.67
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 10, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
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
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 5.1,
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
                                                  "pitch": 30.52
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "id": "overlay_04CC30D3_2059_947D_41A8_BC5DCD223313",
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
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 5.66,
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
                                                  "pitch": 17.08
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.showPopupPanoramaOverlay(this.popup_3638CA38_249B_905C_41B3_EA26EB9333F0, {'rollOverIconColor':'#666666','iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','paddingLeft':5,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_32CC759C_24AE_9054_419F_511B2D533327, null, null, null, null, false)",
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
                                                "rotationX": 0,
                                                "popupMaxWidth": "95%",
                                                "popupDistance": 100,
                                                "rotationZ": 0,
                                                "hideDuration": 500,
                                                "class": "PopupPanoramaOverlay",
                                                "id": "popup_3638CA38_249B_905C_41B3_EA26EB9333F0",
                                                "showDuration": 500,
                                                "hfov": 5.66,
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
                                                "yaw": -32.7,
                                                "hideEasing": "cubic_out",
                                                "popupMaxHeight": "95%"
                                               },
                                               {
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 5.91,
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
                                                  "pitch": -4.09
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.showPopupPanoramaOverlay(this.popup_369EF53B_249A_B05C_41BC_AE1E970C16EA, {'rollOverIconColor':'#666666','iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','paddingLeft':5,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_32CD359C_24AE_9054_41BC_CF812CF11760, null, null, null, null, false)",
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
                                                "rotationX": 0,
                                                "popupMaxWidth": "95%",
                                                "popupDistance": 100,
                                                "rotationZ": 0,
                                                "hideDuration": 500,
                                                "class": "PopupPanoramaOverlay",
                                                "id": "popup_369EF53B_249A_B05C_41BC_AE1E970C16EA",
                                                "showDuration": 500,
                                                "hfov": 5.91,
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
                                                "yaw": 101.53,
                                                "hideEasing": "cubic_out",
                                                "popupMaxHeight": "95%"
                                               },
                                               {
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 5.91,
                                                  "yaw": -60.3,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_8_0_0_map.gif",
                                                     "width": 16,
                                                     "height": 16
                                                    }
                                                   ]
                                                  },
                                                  "pitch": 3.49
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false)",
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
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_8_0.png",
                                                     "width": 105,
                                                     "height": 105
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
                                                }
                                               }
                                              ]
                                             }
                                            ],
                                            "label": "12-Entre Zollner y Coloplast",
                                            "id": "panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765"
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": {
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
                                                    "tags": [
                                                     "oculusgo",
                                                     "ipadpro"
                                                    ],
                                                    "height": 3217
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E.jpeg",
                                                    "width": 4002,
                                                    "height": 2001
                                                   }
                                                  ]
                                                 },
                                                 "thumbnailUrl": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_t.jpg",
                                                 "overlays": [
                                                  {
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 5.9,
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
                                                     "pitch": -4.38
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_7167FADA_6009_14B2_41D7_701317EE59BB); this.setMediaBehaviour(this.playList_6FE1A8F8_6009_147E_41C6_ED95FD1EED58, 0, this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E)",
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
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 3.6,
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
                                                     "pitch": 52.59
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 10, this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E)",
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
                                                   "maps": [],
                                                   "rollOverDisplay": false,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.startPanoramaWithCamera(this.media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7, this.camera_5564A635_5884_E26A_41CD_F65940AE1D0F); this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false)",
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
                                                 ]
                                                }
                                               ],
                                               "label": "helipuerto",
                                               "id": "panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
                                               "adjacentPanoramas": [
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765"
                                                },
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
                                                 "yaw": -117.3,
                                                 "distance": 1,
                                                 "backwardYaw": -90.48
                                                }
                                               ],
                                               "class": "Panorama",
                                               "pitch": 0,
                                               "thumbnailUrl": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_t.jpg",
                                               "hfovMax": 130,
                                               "mapLocations": [
                                                {
                                                 "map": {
                                                  "minimumZoomFactor": 0.5,
                                                  "fieldOfViewOverlayInsideColor": "#000000",
                                                  "height": 485,
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
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6.png",
                                                     "width": 500,
                                                     "height": 485
                                                    }
                                                   ]
                                                  },
                                                  "thumbnailUrl": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_t.png",
                                                  "scaleMode": "fit_inside",
                                                  "overlays": [
                                                   {
                                                    "useHandCursor": true,
                                                    "rollOverDisplay": false,
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
                                                    "id": "overlay_C85F514D_DD1A_7E64_41E9_30CB45494AAF",
                                                    "data": {
                                                     "label": "Entrada"
                                                    }
                                                   },
                                                   {
                                                    "useHandCursor": true,
                                                    "rollOverDisplay": false,
                                                    "areas": [
                                                     {
                                                      "class": "HotspotMapOverlayArea",
                                                      "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_6FE178F7_6009_1472_41D4_5B964B82917C.set('selectedIndex', -1); }, this); this.playList_6FE178F7_6009_1472_41D4_5B964B82917C.set('selectedIndex', 0)",
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
                                                    "id": "overlay_CA4EA4DE_DD1B_A664_41E0_AE0B0C78521C",
                                                    "data": {
                                                     "label": "Rotonda"
                                                    }
                                                   },
                                                   {
                                                    "useHandCursor": true,
                                                    "rollOverDisplay": true,
                                                    "areas": [
                                                     {
                                                      "class": "HotspotMapOverlayArea",
                                                      "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_6FE808F0_6009_148E_41D2_4CAAC70E9B2A.set('selectedIndex', -1); }, this); this.playList_6FE808F0_6009_148E_41D2_4CAAC70E9B2A.set('selectedIndex', 0)",
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
                                                    "id": "overlay_CB611BF8_DD1A_A22C_41D9_CBADF82A7516",
                                                    "data": {
                                                     "label": "CC"
                                                    }
                                                   },
                                                   {
                                                    "useHandCursor": true,
                                                    "rollOverDisplay": false,
                                                    "areas": [
                                                     {
                                                      "class": "HotspotMapOverlayArea",
                                                      "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_6FE1A8F8_6009_147E_41C6_ED95FD1EED58.set('selectedIndex', -1); }, this); this.playList_6FE1A8F8_6009_147E_41C6_ED95FD1EED58.set('selectedIndex', 0)",
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
                                                    "id": "overlay_CB150A1A_DD16_ADEC_41E0_7B7C63D3E43F",
                                                    "data": {
                                                     "label": "Esquina Izquierda"
                                                    }
                                                   },
                                                   {
                                                    "useHandCursor": true,
                                                    "rollOverDisplay": false,
                                                    "areas": [
                                                     {
                                                      "class": "HotspotMapOverlayArea",
                                                      "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_6FE1F8F8_6009_147E_41D0_1DD6ACF5329F.set('selectedIndex', -1); }, this); this.playList_6FE1F8F8_6009_147E_41D0_1DD6ACF5329F.set('selectedIndex', 0)",
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
                                                    "id": "overlay_C5D00BE4_DD09_E224_4193_1E7B3F21AC96",
                                                    "data": {
                                                     "label": "Izquierda 3"
                                                    }
                                                   },
                                                   {
                                                    "useHandCursor": true,
                                                    "rollOverDisplay": true,
                                                    "areas": [
                                                     {
                                                      "class": "HotspotMapOverlayArea",
                                                      "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_6FE008F8_6009_147E_41D1_8460933E48D9.set('selectedIndex', -1); }, this); this.playList_6FE008F8_6009_147E_41D1_8460933E48D9.set('selectedIndex', 0)",
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
                                                    "id": "overlay_CAE100A4_DD0B_BE24_41EB_507D59E649BA",
                                                    "data": {
                                                     "label": "Edwards-Hareus"
                                                    }
                                                   },
                                                   {
                                                    "useHandCursor": true,
                                                    "rollOverDisplay": false,
                                                    "areas": [
                                                     {
                                                      "class": "HotspotMapOverlayArea",
                                                      "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_6FE048F9_6009_147E_41CB_F1CC870514B6.set('selectedIndex', -1); }, this); this.playList_6FE048F9_6009_147E_41CB_F1CC870514B6.set('selectedIndex', 0)",
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
                                                    "id": "overlay_CB9F085C_DD0A_AE64_41AF_81B501144D5C",
                                                    "data": {
                                                     "label": "Esquina Atras"
                                                    }
                                                   },
                                                   {
                                                    "useHandCursor": true,
                                                    "rollOverDisplay": true,
                                                    "areas": [
                                                     {
                                                      "class": "HotspotMapOverlayArea",
                                                      "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_6FE098F9_6009_147E_4178_0C74F0A81F38.set('selectedIndex', -1); }, this); this.playList_6FE098F9_6009_147E_4178_0C74F0A81F38.set('selectedIndex', 0)",
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
                                                    "id": "overlay_CABD30AB_DD0E_9E23_41E5_2606484DA696",
                                                    "data": {
                                                     "label": "Atras1"
                                                    }
                                                   },
                                                   {
                                                    "useHandCursor": true,
                                                    "rollOverDisplay": true,
                                                    "areas": [
                                                     {
                                                      "class": "HotspotMapOverlayArea",
                                                      "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_6FE0A8F9_6009_147E_41C9_9674D9757377.set('selectedIndex', -1); }, this); this.playList_6FE0A8F9_6009_147E_41C9_9674D9757377.set('selectedIndex', 0)",
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
                                                    "id": "overlay_C53D65EB_DD09_A62C_41B4_A4FE1383C9E0",
                                                    "data": {
                                                     "label": "Plantas de tratamiento"
                                                    }
                                                   },
                                                   {
                                                    "useHandCursor": true,
                                                    "rollOverDisplay": true,
                                                    "areas": [
                                                     {
                                                      "class": "HotspotMapOverlayArea",
                                                      "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_6FE718FA_6009_1472_41CB_E4E122465710.set('selectedIndex', -1); }, this); this.playList_6FE718FA_6009_1472_41CB_E4E122465710.set('selectedIndex', 0)",
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
                                                    "id": "overlay_CA1A2975_DD0B_AE24_41D6_FDACEA0678CB",
                                                    "data": {
                                                     "label": "Derecha 1"
                                                    }
                                                   },
                                                   {
                                                    "useHandCursor": true,
                                                    "rollOverDisplay": false,
                                                    "areas": [
                                                     {
                                                      "class": "HotspotMapOverlayArea",
                                                      "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_6FE728FA_6009_1472_41D5_5D476C65E858.set('selectedIndex', -1); }, this); this.playList_6FE728FA_6009_1472_41D5_5D476C65E858.set('selectedIndex', 0)",
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
                                                    "id": "overlay_31036381_2420_B4E9_41BB_D2ED760E3DE7",
                                                    "data": {
                                                     "label": "Image"
                                                    }
                                                   }
                                                  ],
                                                  "fieldOfViewOverlayOutsideOpacity": 0,
                                                  "initialZoomFactor": 1,
                                                  "fieldOfViewOverlayInsideOpacity": 0.31,
                                                  "fieldOfViewOverlayOutsideColor": "#000000"
                                                 },
                                                 "x": 96.9,
                                                 "angle": 122.43,
                                                 "y": 435.15,
                                                 "class": "PanoramaMapLocation"
                                                }
                                               ],
                                               "vfov": 180,
                                               "hfovMin": 100,
                                               "hfov": 360,
                                               "partial": false
                                              },
                                              "yaw": -90.48,
                                              "distance": 1,
                                              "backwardYaw": -117.3
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
                                                    "tags": [
                                                     "oculusgo",
                                                     "ipadpro"
                                                    ],
                                                    "height": 3217
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246.jpeg",
                                                    "width": 4002,
                                                    "height": 2001
                                                   }
                                                  ]
                                                 },
                                                 "thumbnailUrl": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_t.jpg",
                                                 "overlays": [
                                                  {
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 5.92,
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
                                                     "pitch": -2.03
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_6F569C1C_6009_13B6_41B3_7678F97A2ABC); this.setMediaBehaviour(this.playList_6FE178F7_6009_1472_41D4_5B964B82917C, 0, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)",
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
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 5.9,
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
                                                     "pitch": -5.21
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_6F621C29_6009_139E_41D4_799E53E56886); this.setMediaBehaviour(this.playList_6FE1A8F8_6009_147E_41C6_ED95FD1EED58, 0, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)",
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
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 5.84,
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
                                                     "pitch": 9.36
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.showPopupPanoramaOverlay(this.popup_3A305B90_20FB_94FB_4193_FEB3450979FC, {'rollOverIconColor':'#666666','iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','paddingLeft':5,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, null, null, null, null, null, false)",
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
                                                   "rotationX": 0,
                                                   "popupMaxWidth": "95%",
                                                   "popupDistance": 100,
                                                   "rotationZ": 0,
                                                   "hideDuration": 500,
                                                   "class": "PopupPanoramaOverlay",
                                                   "id": "popup_3A305B90_20FB_94FB_4193_FEB3450979FC",
                                                   "showDuration": 500,
                                                   "hfov": 5.84,
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
                                                   "yaw": -56.26,
                                                   "hideEasing": "cubic_out",
                                                   "popupMaxHeight": "95%"
                                                  },
                                                  {
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 5.27,
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
                                                     "pitch": 27.18
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 10, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)",
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
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 5.88,
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
                                                     "pitch": -6.52
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.showPopupPanoramaOverlay(this.popup_36258FF0_249D_EFED_41AB_54067BE4CE8C, {'rollOverIconColor':'#666666','iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','paddingLeft':5,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_32C8659C_24AE_9054_4187_C8E2724888E0, null, null, null, null, false)",
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
                                                   "rotationX": 0,
                                                   "popupMaxWidth": "95%",
                                                   "popupDistance": 100,
                                                   "rotationZ": 0,
                                                   "hideDuration": 500,
                                                   "class": "PopupPanoramaOverlay",
                                                   "id": "popup_36258FF0_249D_EFED_41AB_54067BE4CE8C",
                                                   "showDuration": 500,
                                                   "hfov": 5.88,
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
                                                   "yaw": -50.51,
                                                   "hideEasing": "cubic_out",
                                                   "popupMaxHeight": "95%"
                                                  },
                                                  {
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 5.92,
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
                                                     "pitch": 1.45
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.showPopupPanoramaOverlay(this.popup_36539A9C_24AE_9054_41AC_911079BB2A7C, {'rollOverIconColor':'#666666','iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','paddingLeft':5,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_32C8A59C_24AE_9054_41B0_230945BD42EC, null, null, null, null, false)",
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
                                                   "rotationX": 0,
                                                   "popupMaxWidth": "95%",
                                                   "popupDistance": 100,
                                                   "rotationZ": 0,
                                                   "hideDuration": 500,
                                                   "class": "PopupPanoramaOverlay",
                                                   "id": "popup_36539A9C_24AE_9054_41AC_911079BB2A7C",
                                                   "showDuration": 500,
                                                   "hfov": 5.92,
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
                                                   "yaw": -76.59,
                                                   "hideEasing": "cubic_out",
                                                   "popupMaxHeight": "95%"
                                                  }
                                                 ]
                                                }
                                               ],
                                               "label": "11-Entre Edwards y Coloplast",
                                               "id": "panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
                                               "adjacentPanoramas": [
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765"
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
                                                 "panorama": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
                                                 "yaw": -94.64,
                                                 "distance": 1,
                                                 "backwardYaw": 179.05
                                                }
                                               ],
                                               "class": "Panorama",
                                               "pitch": 0,
                                               "thumbnailUrl": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_t.jpg",
                                               "hfovMax": 130,
                                               "vfov": 180,
                                               "hfovMin": 100,
                                               "hfov": 360,
                                               "partial": false
                                              },
                                              "yaw": 179.05,
                                              "distance": 1,
                                              "backwardYaw": -94.64
                                             }
                                            ],
                                            "class": "Panorama",
                                            "pitch": 0,
                                            "thumbnailUrl": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_t.jpg",
                                            "hfovMax": 130,
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
                                            "hfovMin": 100,
                                            "hfov": 360,
                                            "partial": false
                                           },
                                           "yaw": -95.46,
                                           "distance": 1,
                                           "backwardYaw": 79.43
                                          }
                                         ],
                                         "class": "Panorama",
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_t.jpg",
                                         "hfovMax": 130,
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
                                         "hfovMin": 100,
                                         "hfov": 360,
                                         "partial": false
                                        },
                                        "yaw": 27.45,
                                        "distance": 1,
                                        "backwardYaw": 99.68
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
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
                                              "tags": [
                                               "oculusgo",
                                               "ipadpro"
                                              ],
                                              "height": 3217
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368.jpeg",
                                              "width": 4002,
                                              "height": 2001
                                             }
                                            ]
                                           },
                                           "thumbnailUrl": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_t.jpg",
                                           "overlays": [
                                            {
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 5.92,
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
                                               "pitch": -0.2
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E, this.camera_70F23A75_6009_1476_41CE_B6D0AE035E82); this.setMediaBehaviour(this.playList_6FE048F9_6009_147E_41CB_F1CC870514B6, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
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
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 5.9,
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
                                               "pitch": -4.59
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9, this.camera_71033A82_6009_1492_41D7_E1670776F4AA); this.setMediaBehaviour(this.playList_6FE728FA_6009_1472_41D5_5D476C65E858, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
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
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 4.28,
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
                                               "pitch": 43.73
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.setMediaBehaviour(this.playList_6FFCA908_6009_159E_41CD_5C8881129E14, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
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
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 4.46,
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
                                               "pitch": 41.06
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
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
                                           ]
                                          }
                                         ],
                                         "label": "8-Pastizal Atr\u00e1s",
                                         "id": "panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B"
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A"
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E",
                                           "yaw": 72.35,
                                           "distance": 1,
                                           "backwardYaw": -63.16
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": {
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
                                                 "tags": [
                                                  "oculusgo",
                                                  "ipadpro"
                                                 ],
                                                 "height": 3217
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9.jpeg",
                                                 "width": 4002,
                                                 "height": 2001
                                                }
                                               ]
                                              },
                                              "thumbnailUrl": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_t.jpg",
                                              "overlays": [
                                               {
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 5.91,
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
                                                  "pitch": -2.78
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E, this.camera_7068BD46_6009_0D92_41C6_D9CD727FA830); this.setMediaBehaviour(this.playList_6FE0A8F9_6009_147E_41C9_9674D9757377, 0, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)",
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
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 5.92,
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
                                                  "pitch": -2.02
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368, this.camera_705C2D22_6009_0D93_41D5_65F84ADD31CE); this.setMediaBehaviour(this.playList_6FE098F9_6009_147E_4178_0C74F0A81F38, 0, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)",
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
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 1.81,
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
                                                  "pitch": 72.16
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)",
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
                                              ]
                                             }
                                            ],
                                            "label": "7-Centro Atr\u00e1s",
                                            "id": "panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B"
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
                                              "yaw": 107.65,
                                              "distance": 1,
                                              "backwardYaw": -112.38
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": {
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
                                                    "tags": [
                                                     "oculusgo",
                                                     "ipadpro"
                                                    ],
                                                    "height": 3217
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E.jpeg",
                                                    "width": 4002,
                                                    "height": 2001
                                                   }
                                                  ]
                                                 },
                                                 "thumbnailUrl": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_t.jpg",
                                                 "overlays": [
                                                  {
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 5.92,
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
                                                     "pitch": -1.5
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_6F825C51_6009_138E_41AC_540832C17520); this.setMediaBehaviour(this.playList_6FFB2901_6009_158E_41D7_AE4EFBA65DD2, 0, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)",
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
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 5.91,
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
                                                     "pitch": -2.97
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9, this.camera_6F9E3C5E_6009_13B2_41D7_2E3285D72306); this.setMediaBehaviour(this.playList_6FE728FA_6009_1472_41D5_5D476C65E858, 0, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)",
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
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 2.4,
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
                                                     "pitch": 66.14
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)",
                                                     "mapColor": "#FF0000"
                                                    }
                                                   ],
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
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
                                                   },
                                                   "enabledInCardboard": true
                                                  }
                                                 ]
                                                }
                                               ],
                                               "label": "6-Lagunas de Retencion",
                                               "id": "panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
                                               "adjacentPanoramas": [
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
                                                 "yaw": -30.03,
                                                 "distance": 1,
                                                 "backwardYaw": -5.23
                                                },
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B"
                                                },
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
                                                 "yaw": 139.43,
                                                 "distance": 1,
                                                 "backwardYaw": 23.32
                                                }
                                               ],
                                               "class": "Panorama",
                                               "pitch": 0,
                                               "thumbnailUrl": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_t.jpg",
                                               "hfovMax": 130,
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
                                               "hfovMin": 100,
                                               "hfov": 360,
                                               "partial": false
                                              },
                                              "yaw": 23.32,
                                              "distance": 1,
                                              "backwardYaw": 139.43
                                             }
                                            ],
                                            "class": "Panorama",
                                            "pitch": 0,
                                            "thumbnailUrl": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_t.jpg",
                                            "hfovMax": 130,
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
                                            "hfovMin": 100,
                                            "hfov": 360,
                                            "partial": false
                                           },
                                           "yaw": -112.38,
                                           "distance": 1,
                                           "backwardYaw": 107.65
                                          }
                                         ],
                                         "class": "Panorama",
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_t.jpg",
                                         "hfovMax": 130,
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
                                         "hfovMin": 100,
                                         "hfov": 360,
                                         "partial": false
                                        },
                                        "yaw": -63.16,
                                        "distance": 1,
                                        "backwardYaw": 72.35
                                       }
                                      ],
                                      "class": "Panorama",
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_t.jpg",
                                      "hfovMax": 130,
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
                                      "hfovMin": 100,
                                      "hfov": 360,
                                      "partial": false
                                     }
                                    }
                                   ],
                                   "class": "Panorama",
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_t.jpg",
                                   "hfovMax": 130,
                                   "vfov": 180,
                                   "hfovMin": 100,
                                   "hfov": 360,
                                   "partial": false
                                  },
                                  "yaw": -165.51,
                                  "distance": 1,
                                  "backwardYaw": -103.84
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E"
                                 }
                                ],
                                "class": "Panorama",
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_t.jpg",
                                "hfovMax": 130,
                                "vfov": 180,
                                "hfovMin": 100,
                                "hfov": 360,
                                "partial": false
                               },
                               "yaw": 154.31,
                               "distance": 1,
                               "backwardYaw": -64.23
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B",
                               "yaw": -104.82,
                               "distance": 1,
                               "backwardYaw": 36.44
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A",
                               "yaw": -157.61,
                               "distance": 1,
                               "backwardYaw": -137.64
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
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
                                     "tags": [
                                      "oculusgo",
                                      "ipadpro"
                                     ],
                                     "height": 3217
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714.jpeg",
                                     "width": 4002,
                                     "height": 2001
                                    }
                                   ]
                                  },
                                  "thumbnailUrl": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_t.jpg",
                                  "overlays": [
                                   {
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 5.9,
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
                                      "pitch": -5.22
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_71777AE8_6009_149E_41BF_3B7CCB878836); this.setMediaBehaviour(this.playList_6FEB98ED_6009_1491_41BE_CE43752DC015, 0, this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714)",
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
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 5.9,
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
                                      "pitch": -4.39
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.showPopupPanoramaOverlay(this.popup_3509F7CC_246E_7035_41AB_BB188EF81D62, {'rollOverIconColor':'#666666','iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','paddingLeft':5,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_3294856D_24AE_90F4_418D_8D9776AE9FF3, null, null, null, null, false)",
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
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 4.85,
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
                                      "pitch": 34.99
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 8, this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714)",
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
                                    },
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "showEasing": "cubic_in",
                                    "rotationX": 0,
                                    "popupMaxWidth": "95%",
                                    "popupDistance": 100,
                                    "rotationZ": 0,
                                    "hideDuration": 500,
                                    "class": "PopupPanoramaOverlay",
                                    "id": "popup_3509F7CC_246E_7035_41AB_BB188EF81D62",
                                    "showDuration": 500,
                                    "hfov": 5.9,
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
                                    "yaw": -68.51,
                                    "hideEasing": "cubic_out",
                                    "popupMaxHeight": "95%"
                                   }
                                  ]
                                 }
                                ],
                                "label": "Main Entrance",
                                "id": "panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1"
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
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
                                        "tags": [
                                         "oculusgo",
                                         "ipadpro"
                                        ],
                                        "height": 3217
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677.jpeg",
                                        "width": 4002,
                                        "height": 2001
                                       }
                                      ]
                                     },
                                     "thumbnailUrl": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_t.jpg",
                                     "overlays": [
                                      {
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 5.92,
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
                                         "pitch": 0.8
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714, this.camera_71070F0D_6009_0D96_41D1_B1BDE829CB1C); this.mainPlayList.set('selectedIndex', 0)",
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
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 5.92,
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
                                         "pitch": -2.08
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_70F5BEF1_6009_0C8E_41C4_D9EAD0602DCC); this.setMediaBehaviour(this.playList_6FE808F0_6009_148E_41D2_4CAAC70E9B2A, 0, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)",
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
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 5.9,
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
                                         "pitch": -5.35
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_70E46ED1_6009_0C8E_41CC_4A432D3C0A41); this.setMediaBehaviour(this.playList_6FE178F7_6009_1472_41D4_5B964B82917C, 0, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)",
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
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 5.92,
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
                                         "pitch": 0.15
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.showPopupPanoramaOverlay(this.popup_3AF279F7_20F8_9425_41B8_727B1C05B69A, {'rollOverIconColor':'#666666','iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','paddingLeft':5,'borderSize':0,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_095FC95D_2068_946A_41A5_88BA52F0CF59, null, null, null, null, false)",
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
                                       "rotationX": 0,
                                       "popupMaxWidth": "95%",
                                       "popupDistance": 100,
                                       "rotationZ": 0,
                                       "hideDuration": 500,
                                       "class": "PopupPanoramaOverlay",
                                       "id": "popup_3AF279F7_20F8_9425_41B8_727B1C05B69A",
                                       "showDuration": 500,
                                       "hfov": 5.92,
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
                                       "yaw": 81.82,
                                       "hideEasing": "cubic_out",
                                       "popupMaxHeight": "95%"
                                      },
                                      {
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 5.21,
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
                                         "pitch": 28.31
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)",
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
                                     ]
                                    }
                                   ],
                                   "label": "1.2-Main Entrance",
                                   "id": "panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B"
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
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
                                     "panorama": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
                                     "yaw": 150.13,
                                     "distance": 1,
                                     "backwardYaw": -19.33
                                    }
                                   ],
                                   "class": "Panorama",
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_t.jpg",
                                   "hfovMax": 130,
                                   "vfov": 180,
                                   "hfovMin": 100,
                                   "hfov": 360,
                                   "partial": false
                                  },
                                  "yaw": -19.33,
                                  "distance": 1,
                                  "backwardYaw": 150.13
                                 }
                                ],
                                "class": "Panorama",
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_t.jpg",
                                "hfovMax": 130,
                                "mapLocations": [
                                 {
                                  "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                  "x": 281.15,
                                  "angle": 0,
                                  "y": 422.75,
                                  "class": "PanoramaMapLocation"
                                 }
                                ],
                                "vfov": 180,
                                "cardboardMenu": "this.Menu_701E2928_6009_159E_41D3_3E961EFF05B8",
                                "hfovMin": 100,
                                "hfov": 360,
                                "partial": false
                               }
                              }
                             ],
                             "class": "Panorama",
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_t.jpg",
                             "hfovMax": 130,
                             "vfov": 180,
                             "hfovMin": 100,
                             "hfov": 360,
                             "partial": false
                            },
                            "yaw": 36.44,
                            "distance": 1,
                            "backwardYaw": -104.82
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765",
                            "yaw": 76.9,
                            "distance": 1,
                            "backwardYaw": -114.68
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A",
                            "yaw": 128.57,
                            "distance": 1,
                            "backwardYaw": 169.03
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E"
                           }
                          ],
                          "class": "Panorama",
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_t.jpg",
                          "hfovMax": 130,
                          "vfov": 180,
                          "hfovMin": 100,
                          "hfov": 360,
                          "partial": false
                         }
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
                         "yaw": -164.09,
                         "distance": 1,
                         "backwardYaw": 6.44
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
                         "yaw": -5.23,
                         "distance": 1,
                         "backwardYaw": -30.03
                        }
                       ],
                       "class": "Panorama",
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_t.jpg",
                       "hfovMax": 130,
                       "vfov": 180,
                       "hfovMin": 100,
                       "hfov": 360,
                       "partial": false
                      },
                      "yaw": -155.58,
                      "distance": 1,
                      "backwardYaw": 69.33
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B"
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
                      "yaw": -174.5,
                      "distance": 1,
                      "backwardYaw": 66.08
                     }
                    ],
                    "class": "Panorama",
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_t.jpg",
                    "hfovMax": 130,
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
                    "hfovMin": 100,
                    "hfov": 360,
                    "partial": false
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
                   "panorama": "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
                   "yaw": -78.27,
                   "distance": 1,
                   "backwardYaw": 88.55
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
                   "yaw": 6.44,
                   "distance": 1,
                   "backwardYaw": -164.09
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B"
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
                   "yaw": 174.57,
                   "distance": 1,
                   "backwardYaw": -25.53
                  }
                 ],
                 "class": "Panorama",
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_t.jpg",
                 "hfovMax": 130,
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
                 "hfovMin": 100,
                 "hfov": 360,
                 "partial": false
                },
                "yaw": -157.73,
                "distance": 1,
                "backwardYaw": 137.01
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
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
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ],
                      "height": 3217
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748.jpeg",
                      "width": 4002,
                      "height": 2001
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_t.jpg",
                   "overlays": [
                    {
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.91,
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
                       "pitch": -3.64
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_6EE40B8E_6009_1492_41C9_6625988E52BB); this.setMediaBehaviour(this.playList_6FE808F0_6009_148E_41D2_4CAAC70E9B2A, 0, this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748)",
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
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.88,
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
                       "pitch": 6.51
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1, this.camera_460CEEE7_492B_027B_41D1_2B81CCA4EC0E); this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, true, 0, null, null, false); this.setComponentVisibility(this.Image_57742DA6_5884_2676_41C4_D20EEA93A077, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false)",
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
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 3.96,
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
                       "pitch": 48.04
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.setMediaBehaviour(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 8, this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748)",
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
                     },
                     "enabledInCardboard": true
                    }
                   ]
                  }
                 ],
                 "label": "16-Oficinas Parque",
                 "id": "panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1"
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
                   "yaw": 176.92,
                   "distance": 1,
                   "backwardYaw": 50.1
                  }
                 ],
                 "class": "Panorama",
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_t.jpg",
                 "hfovMax": 130,
                 "vfov": 180,
                 "hfovMin": 100,
                 "hfov": 360,
                 "partial": false
                },
                "yaw": 50.1,
                "distance": 1,
                "backwardYaw": 176.92
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1"
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
                "panorama": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714"
               }
              ],
              "class": "Panorama",
              "pitch": 0,
              "thumbnailUrl": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_t.jpg",
              "hfovMax": 130,
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
              "hfovMin": 100,
              "hfov": 360,
              "partial": false
             },
             "yaw": -91.85,
             "distance": 1,
             "backwardYaw": -59.69
            }
           ],
           "class": "Panorama",
           "pitch": 0,
           "thumbnailUrl": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_t.jpg",
           "hfovMax": 120,
           "mapLocations": [
            {
             "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
             "x": 217.7,
             "angle": -83.39,
             "y": 434.55,
             "class": "PanoramaMapLocation"
            }
           ],
           "vfov": 180,
           "cardboardMenu": "this.Menu_701E2928_6009_159E_41D3_3E961EFF05B8",
           "hfovMin": 100,
           "hfov": 360,
           "partial": false
          },
          "yaw": 32.92,
          "distance": 1,
          "backwardYaw": 87.33
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
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
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "height": 2688
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3.jpeg",
                "width": 3217,
                "height": 1608
               }
              ]
             },
             "thumbnailUrl": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_t.jpg",
             "overlays": [
              {
               "maps": [],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_7139AAA6_6009_1493_41D4_7BDC42C93C25); this.mainPlayList.set('selectedIndex', 16)",
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
               "bleaching": 0.7,
               "pitch": 59.4,
               "class": "LensFlarePanoramaOverlay",
               "id": "overlay_FE341697_EE9B_B5BB_41CC_1DCF1E1B9FE9",
               "yaw": -74.61,
               "bleachingDistance": 0.4
              },
              {
               "bleaching": 0.7,
               "pitch": 28.05,
               "class": "LensFlarePanoramaOverlay",
               "id": "overlay_FE452B9D_EE9B_93AF_41C8_E05C00B1EC74",
               "yaw": -13.79,
               "bleachingDistance": 0.4
              },
              {
               "bleaching": 0.7,
               "pitch": 31.07,
               "class": "LensFlarePanoramaOverlay",
               "id": "overlay_FE59F0F5_EE9B_8D7F_41E8_C632466F366D",
               "yaw": -151.67,
               "bleachingDistance": 0.4
              }
             ]
            }
           ],
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
           "class": "Panorama",
           "pitch": 0,
           "thumbnailUrl": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_t.jpg",
           "hfovMax": 120,
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
           "cardboardMenu": "this.Menu_701E2928_6009_159E_41D3_3E961EFF05B8",
           "hfovMin": 100,
           "hfov": 360,
           "partial": false
          },
          "yaw": -166.68,
          "distance": 1,
          "backwardYaw": 27.08
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "frames": [
            {
             "class": "CubicPanoramaFrame",
             "thumbnailUrl": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_t.jpg",
             "overlays": [
              {
               "maps": [],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_70295CED_6009_0C96_41D5_787D8278688C); this.mainPlayList.set('selectedIndex', 16)",
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
               "maps": [],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_70242CF9_6009_0C7E_4195_15941DA72E3E); this.mainPlayList.set('selectedIndex', 10)",
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
               "bleaching": 0.7,
               "pitch": 19.14,
               "class": "LensFlarePanoramaOverlay",
               "id": "overlay_D4BE7E36_DF66_3FBD_41E5_D711B6782282",
               "yaw": -0.95,
               "bleachingDistance": 0.4
              },
              {
               "bleaching": 0.7,
               "pitch": 17.62,
               "class": "LensFlarePanoramaOverlay",
               "id": "overlay_D4BB02EB_DF66_04AB_41E7_314E72AF48E7",
               "yaw": 164.38,
               "bleachingDistance": 0.4
              }
             ],
             "cube": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_hq.jpeg",
                "width": 10224,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "height": 1704
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
           "label": "Main Floor",
           "id": "panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
             "yaw": 96.47,
             "distance": 1,
             "backwardYaw": -139.07
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "frames": [
               {
                "class": "CubicPanoramaFrame",
                "thumbnailUrl": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_t.jpg",
                "overlays": [
                 {
                  "maps": [],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_6F159BCE_6009_1492_41C0_E7EF701A90C6); this.mainPlayList.set('selectedIndex', 3)",
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
                  "maps": [],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_6F1F9BC1_6009_148E_41A1_CDF2D18A2ABC); this.mainPlayList.set('selectedIndex', 11)",
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
                  "bleaching": 0.7,
                  "pitch": 16.86,
                  "class": "LensFlarePanoramaOverlay",
                  "id": "overlay_D364F048_DF66_03D5_41E1_5EA3BC9637F0",
                  "yaw": -0.57,
                  "bleachingDistance": 0.4
                 },
                 {
                  "bleaching": 0.7,
                  "pitch": 16.1,
                  "class": "LensFlarePanoramaOverlay",
                  "id": "overlay_D37D2F7A_DF66_1DB5_41C0_1FB80896FEB3",
                  "yaw": 164.38,
                  "bleachingDistance": 0.4
                 }
                ],
                "cube": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_hq.jpeg",
                   "width": 10224,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ],
                   "height": 1704
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
              "label": "9",
              "id": "panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "frames": [
                  {
                   "class": "CubicPanoramaFrame",
                   "thumbnailUrl": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_t.jpg",
                   "overlays": [
                    {
                     "maps": [],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_707F59CD_6009_1496_41D2_00D75D1E59FF); this.mainPlayList.set('selectedIndex', 10)",
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
                     "maps": [],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_708A59E4_6009_1496_41C6_1D36AB848E26); this.mainPlayList.set('selectedIndex', 5)",
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
                     "maps": [],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.showPopupPanoramaOverlay(this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4, {'rollOverIconColor':'#CCCCCC','iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','paddingLeft':5,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_D082516E_DCEA_7368_41CB_9D0CFA830713, null, null, null, null, false)",
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
                     "rotationX": 0,
                     "popupMaxWidth": "95%",
                     "popupDistance": 100,
                     "rotationZ": 0,
                     "hideDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "id": "popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
                     "showDuration": 500,
                     "hfov": 8.22,
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
                     "yaw": -36.13,
                     "hideEasing": "cubic_out",
                     "popupMaxHeight": "95%"
                    },
                    {
                     "maps": [],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.showPopupPanoramaOverlay(this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE, {'rollOverIconColor':'#CCCCCC','iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','paddingLeft':5,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_D38C2C6E_DFA1_73F8_41C3_8C1C155D72CB, null, null, null, null, false)",
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
                     "maps": [],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.showPopupPanoramaOverlay(this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA, {'rollOverIconColor':'#CCCCCC','iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','paddingLeft':5,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_D09DC170_DCEA_7378_41EB_423962A6DDEA, null, null, null, null, false)",
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
                     "rotationX": 0,
                     "popupMaxWidth": "95%",
                     "popupDistance": 100,
                     "rotationZ": 0,
                     "hideDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "id": "popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
                     "showDuration": 500,
                     "hfov": 8.24,
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
                     "yaw": 102.19,
                     "hideEasing": "cubic_out",
                     "popupMaxHeight": "95%"
                    },
                    {
                     "bleaching": 0.7,
                     "pitch": 29.81,
                     "class": "LensFlarePanoramaOverlay",
                     "id": "overlay_D4A17713_DF66_0D7B_41EA_88920C3D3D96",
                     "yaw": 4,
                     "bleachingDistance": 0.4
                    },
                    {
                     "bleaching": 0.7,
                     "pitch": 33.62,
                     "class": "LensFlarePanoramaOverlay",
                     "id": "overlay_D4BC6C09_DF66_0357_41CE_9C3B75EE1C61",
                     "yaw": 125.52,
                     "bleachingDistance": 0.4
                    },
                    {
                     "bleaching": 0.7,
                     "pitch": 19.14,
                     "class": "LensFlarePanoramaOverlay",
                     "id": "overlay_D4BAE022_DF66_0355_41EA_F8574F4021B9",
                     "yaw": -105.71,
                     "bleachingDistance": 0.4
                    },
                    {
                     "showEasing": "cubic_in",
                     "rotationX": 0,
                     "popupMaxWidth": "95%",
                     "popupDistance": 100,
                     "rotationZ": 0,
                     "hideDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "id": "popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
                     "showDuration": 500,
                     "hfov": 8.15,
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
                     "yaw": -170.82,
                     "hideEasing": "cubic_out",
                     "popupMaxHeight": "95%"
                    }
                   ],
                   "cube": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_hq.jpeg",
                      "width": 10224,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ],
                      "height": 1704
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
                 "label": "14",
                 "id": "panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
                   "yaw": -85.38,
                   "distance": 1,
                   "backwardYaw": 99.45
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "frames": [
                     {
                      "class": "CubicPanoramaFrame",
                      "thumbnailUrl": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_t.jpg",
                      "overlays": [
                       {
                        "maps": [],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_70374D06_6009_0D92_419F_9275C8C75C89); this.mainPlayList.set('selectedIndex', 11)",
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
                        "maps": [],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D, this.camera_7043ED13_6009_0DB2_41C5_580C28DA764C); this.mainPlayList.set('selectedIndex', 4)",
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
                      "cube": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_hq.jpeg",
                         "width": 10224,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ],
                         "height": 1704
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
                    "label": "Conference Room",
                    "id": "panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
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
                       "frames": [
                        {
                         "class": "CubicPanoramaFrame",
                         "thumbnailUrl": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_t.jpg",
                         "overlays": [
                          {
                           "maps": [],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_6EECAB80_6009_148E_41CD_837509B7DC43); this.mainPlayList.set('selectedIndex', 5)",
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
                           "maps": [],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.showPopupPanoramaOverlay(this.popup_D60305E4_DCEA_D39F_419B_D9B149482827, {'rollOverIconColor':'#CCCCCC','iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','paddingLeft':5,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_D09C8172_DCEA_737B_41C7_76727B821C90, null, null, null, null, false)",
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
                           "rotationX": 0,
                           "popupMaxWidth": "95%",
                           "popupDistance": 100,
                           "rotationZ": 0,
                           "hideDuration": 500,
                           "class": "PopupPanoramaOverlay",
                           "id": "popup_D60305E4_DCEA_D39F_419B_D9B149482827",
                           "showDuration": 500,
                           "hfov": 8.23,
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
                           "yaw": 72.56,
                           "hideEasing": "cubic_out",
                           "popupMaxHeight": "95%"
                          }
                         ],
                         "cube": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_hq.jpeg",
                            "width": 10224,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ],
                            "height": 1704
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
                       "class": "Panorama",
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_t.jpg",
                       "hfovMax": 120,
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
                       "cardboardMenu": "this.Menu_701E2928_6009_159E_41D3_3E961EFF05B8",
                       "hfovMin": 100,
                       "hfov": 360,
                       "partial": false
                      },
                      "yaw": 66.4,
                      "distance": 1,
                      "backwardYaw": -176.35
                     }
                    ],
                    "class": "Panorama",
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_t.jpg",
                    "hfovMax": 120,
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
                    "cardboardMenu": "this.Menu_701E2928_6009_159E_41D3_3E961EFF05B8",
                    "hfovMin": 100,
                    "hfov": 360,
                    "partial": false
                   },
                   "yaw": 72.07,
                   "distance": 1,
                   "backwardYaw": -117.42
                  }
                 ],
                 "class": "Panorama",
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_t.jpg",
                 "hfovMax": 120,
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
                 "cardboardMenu": "this.Menu_701E2928_6009_159E_41D3_3E961EFF05B8",
                 "hfovMin": 80,
                 "hfov": 360,
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
              "class": "Panorama",
              "pitch": 0,
              "thumbnailUrl": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_t.jpg",
              "hfovMax": 120,
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
              "cardboardMenu": "this.Menu_701E2928_6009_159E_41D3_3E961EFF05B8",
              "hfovMin": 80,
              "hfov": 360,
              "partial": false
             },
             "yaw": -176.41,
             "distance": 1,
             "backwardYaw": 3.46
            }
           ],
           "class": "Panorama",
           "pitch": 0,
           "thumbnailUrl": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_t.jpg",
           "hfovMax": 120,
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
           "cardboardMenu": "this.Menu_701E2928_6009_159E_41D3_3E961EFF05B8",
           "hfovMin": 100,
           "hfov": 360,
           "partial": false
          },
          "yaw": -139.07,
          "distance": 1,
          "backwardYaw": 96.47
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
          "yaw": -76.25,
          "distance": 1,
          "backwardYaw": -170.05
         }
        ],
        "class": "Panorama",
        "pitch": 0,
        "thumbnailUrl": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_t.jpg",
        "hfovMax": 120,
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
        "cardboardMenu": "this.Menu_701E2928_6009_159E_41D3_3E961EFF05B8",
        "hfovMin": 100,
        "hfov": 360,
        "partial": false
       },
       "yaw": -170.05,
       "distance": 1,
       "backwardYaw": -76.25
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "frames": [
         {
          "class": "CubicPanoramaFrame",
          "thumbnailUrl": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_t.jpg",
          "overlays": [
           {
            "maps": [],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_71819AF6_6009_1472_41D0_A649B051E0EA); this.mainPlayList.set('selectedIndex', 6)",
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
            "maps": [],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_71938B02_6009_1593_41D1_F9DF3EC77523); this.mainPlayList.set('selectedIndex', 14)",
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
          "cube": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_hq.jpeg",
             "width": 10224,
             "tags": [
              "oculusgo",
              "ipadpro"
             ],
             "height": 1704
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
        "label": "18",
        "id": "panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
          "yaw": 39.43,
          "distance": 1,
          "backwardYaw": -134.96
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "frames": [
            {
             "class": "CubicPanoramaFrame",
             "thumbnailUrl": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_t.jpg",
             "overlays": [
              {
               "maps": [],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_6F434C02_6009_1392_41D3_B69F3E79367E); this.mainPlayList.set('selectedIndex', 12)",
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
               "maps": [],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_6F582C0E_6009_1392_4194_B9A96039B588); this.mainPlayList.set('selectedIndex', 13)",
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
               "maps": [],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.mainPlayList.set('selectedIndex', 1)",
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
             "cube": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_hq.jpeg",
                "width": 10224,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "height": 1704
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
           "label": "19",
           "id": "panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6"
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
             "yaw": -31.12,
             "distance": 1,
             "backwardYaw": 133.34
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
             "yaw": 56.43,
             "distance": 1,
             "backwardYaw": -146.27
            }
           ],
           "class": "Panorama",
           "pitch": 0,
           "thumbnailUrl": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_t.jpg",
           "hfovMax": 120,
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
           "cardboardMenu": "this.Menu_701E2928_6009_159E_41D3_3E961EFF05B8",
           "hfovMin": 100,
           "hfov": 360,
           "partial": false
          },
          "yaw": 133.34,
          "distance": 1,
          "backwardYaw": -31.12
         }
        ],
        "class": "Panorama",
        "pitch": 0,
        "thumbnailUrl": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_t.jpg",
        "hfovMax": 120,
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
        "cardboardMenu": "this.Menu_701E2928_6009_159E_41D3_3E961EFF05B8",
        "hfovMin": 100,
        "hfov": 360,
        "partial": false
       },
       "yaw": -134.96,
       "distance": 1,
       "backwardYaw": 39.43
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
       "yaw": 147.18,
       "distance": 1,
       "backwardYaw": -34.22
      }
     ],
     "class": "Panorama",
     "pitch": 0,
     "thumbnailUrl": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_t.jpg",
     "hfovMax": 120,
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
     "cardboardMenu": "this.Menu_701E2928_6009_159E_41D3_3E961EFF05B8",
     "hfovMin": 100,
     "hfov": 360,
     "partial": false
    },
    "yaw": -34.22,
    "distance": 1,
    "backwardYaw": 147.18
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
    "yaw": -146.27,
    "distance": 1,
    "backwardYaw": 56.43
   }
  ],
  "class": "Panorama",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_t.jpg",
  "hfovMax": 120,
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
  "cardboardMenu": "this.Menu_701E2928_6009_159E_41D3_3E961EFF05B8",
  "hfovMin": 100,
  "hfov": 360,
  "partial": false
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_715A2F7A_6009_0C72_41C5_9ECF86AF8DA3",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345CFD97_20DF_6BB4_41BB_97095DF13BBA",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345E6D8F_20DF_6B94_41A3_46A48BBB0ACC",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_715BEF78_6009_0C7E_4191_3427881CDB92",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_7139AAA6_6009_1493_41D4_7BDC42C93C25",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 13.32,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_7152EF8D_6009_0C96_41D0_A68B5FC6D464",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345EAD84_20DF_6B95_41B9_72E06ABF1981",
  "easing": "cubic_in_out"
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
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_EF6C1355_F62E_F8F5_41C5_B9A5C5CCED3E",
  "easing": "cubic_in_out"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_70790D71_6009_0D8E_41D6_FDD14EDAC812",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 24.42,
   "pitch": 0
  }
 },
 "this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_71440F77_6009_0C72_41B1_CB0F76B1F0AD",
  "easing": "cubic_in_out"
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
 "this.popup_3638CA38_249B_905C_41B3_EA26EB9333F0",
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345FBD97_20DF_6BB3_41A7_CB088826B439",
  "easing": "cubic_in_out"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_71033A82_6009_1492_41D7_E1670776F4AA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -72.35,
   "pitch": 0
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_7068BD46_6009_0D92_41C6_D9CD727FA830",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -40.57,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_711D4A8E_6009_1492_41BE_51B3A6C5027A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -32.82,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_715FDF83_6009_0C92_41C3_00887275EC91",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_34590D8F_20DF_6B94_41BB_A45E78753DDE",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_70242CF9_6009_0C7E_4195_15941DA72E3E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": -176.54,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_34597D8F_20DF_6B94_41AA_44DC8A057CBB",
  "easing": "cubic_in_out"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_714B0AB3_6009_14F2_41B9_D591F174846F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 115.77,
   "pitch": 0
  }
 },
 "this.popup_3AF279F7_20F8_9425_41B8_727B1C05B69A",
 "this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345EBD8F_20DF_6B94_41A4_072F6F80B3A4",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1",
  "easing": "cubic_in_out"
 },
 "this.popup_36539A9C_24AE_9054_41AC_911079BB2A7C",
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345EDD8F_20DF_6B94_41BF_D2C5F914980C",
  "easing": "cubic_in_out"
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_232B696E_352D_BAC0_41B1_E8DFF9648419",
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
  ]
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
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": {
     "class": "Video",
     "label": "Rotonda_LQ_short_2",
     "scaleMode": "fit_inside",
     "width": 1280,
     "loop": false,
     "id": "video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB",
     "thumbnailUrl": "media/video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB_t.jpg",
     "height": 720,
     "video": {
      "class": "VideoResource",
      "width": 1280,
      "height": 720,
      "mp4Url": "media/video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB.mp4"
     }
    },
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_700B5915_6009_15B6_41CF_AF44ECB3E79B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_700B5915_6009_15B6_41CF_AF44ECB3E79B, 0)",
    "class": "VideoPlayListItem",
    "player": {
     "class": "VideoPlayer",
     "id": "MainViewerVideoPlayer",
     "viewerArea": "this.MainViewer",
     "displayPlaybackBar": true
    }
   }
  ],
  "id": "playList_700B5915_6009_15B6_41CF_AF44ECB3E79B"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_E35A8219_ED68_457C_41E5_C52BA0340B76",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345CCD8F_20DF_6B94_41BC_F061530E83AF",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345EFD8F_20DF_6B94_41B7_4853257F85EE",
  "easing": "cubic_in_out"
 },
 "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_71532F86_6009_0C92_41D0_871FC190D50C",
  "easing": "cubic_in_out"
 },
 "this.popup_35287B51_2496_902F_41BD_231499C70738",
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
  "automaticZoomSpeed": 10,
  "id": "panorama_160D346A_1A28_89C6_418E_CDA086A7E714_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -21.7,
   "pitch": -5.28
  }
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD",
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A",
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
      "toolTipPaddingRight": 6,
      "width": 75,
      "toolTipPaddingLeft": 6,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipDisplayTime": 600,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "borderSize": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipOpacity": 1,
      "minWidth": 1,
      "verticalAlign": "middle",
      "toolTipFontWeight": "normal",
      "mode": "push",
      "toolTipPaddingTop": 4,
      "toolTipFontFamily": "Arial",
      "shadow": false,
      "toolTipShadowColor": "#333333",
      "height": 50,
      "toolTipFontStyle": "normal",
      "minHeight": 1,
      "paddingRight": 0,
      "paddingLeft": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderSize": 1,
      "toolTipBorderColor": "#767676",
      "toolTipShadowSpread": 0,
      "toolTip": "VR",
      "iconURL": "skin/IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667.png",
      "propagateClick": false,
      "data": {
       "name": "Button_VR"
      },
      "toolTipTextShadowOpacity": 0,
      "horizontalAlign": "center",
      "toolTipPaddingBottom": 4,
      "cursor": "hand",
      "paddingBottom": 0,
      "paddingTop": 0
     },
     "gyroscopeVerticalDraggingEnabled": true,
     "mouseControlMode": "drag_acceleration",
     "displayPlaybackBar": true,
     "class": "PanoramaPlayer",
     "id": "MainViewerPanoramaPlayer",
     "viewerArea": "this.MainViewer",
     "touchControlMode": "drag_rotation"
    },
    "camera": {
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
     "automaticZoomSpeed": 10,
     "id": "panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 110,
      "yaw": -160.79,
      "pitch": -16.48
     }
    }
   }
  ],
  "id": "playList_6FFCA908_6009_159E_41CD_5C8881129E14"
 },
 "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_E35A021A_ED68_457D_41DB_F92702D0649E",
  "easing": "cubic_in_out"
 },
 {
  "showEasing": "cubic_in",
  "rotationX": 0,
  "popupMaxWidth": "95%",
  "popupDistance": 100,
  "rotationZ": 0,
  "hideDuration": 500,
  "class": "PopupPanoramaOverlay",
  "id": "popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43",
  "showDuration": 500,
  "hfov": 6.66,
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
  "yaw": -123.25,
  "hideEasing": "cubic_out",
  "popupMaxHeight": "95%"
 },
 {
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
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
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBackgroundOpacity": 1,
   "toolTipShadowOpacity": 1,
   "toolTipTextShadowColor": "#000000",
   "playbackBarOpacity": 1,
   "width": "99.417%",
   "toolTipShadowBlurRadius": 3,
   "borderRadius": 0,
   "borderSize": 0,
   "toolTipOpacity": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBarOpacity": 1,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarBorderColor": "#FFFFFF",
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontFamily": "Arial",
   "shadow": false,
   "toolTipShadowColor": "#333333",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressLeft": 0,
   "playbackBarHeight": 10,
   "toolTipFontStyle": "normal",
   "minHeight": 1,
   "paddingRight": 0,
   "playbackBarBackgroundOpacity": 1,
   "progressBorderSize": 0,
   "playbackBarProgressOpacity": 1,
   "playbackBarBorderSize": 0,
   "paddingLeft": 0,
   "playbackBarHeadWidth": 6,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadBorderSize": 0,
   "progressBackgroundColorRatios": [
    0
   ],
   "propagateClick": false,
   "toolTipTextShadowOpacity": 0,
   "playbackBarLeft": 0,
   "progressBorderRadius": 0,
   "toolTipPaddingBottom": 4,
   "playbackBarBackgroundColorDirection": "vertical",
   "transitionDuration": 500,
   "height": "70.806%",
   "playbackBarRight": 0,
   "playbackBarHeadHeight": 15,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "progressBarBorderSize": 0,
   "transitionMode": "blending",
   "class": "ViewerArea",
   "toolTipFontColor": "#606060",
   "toolTipPaddingLeft": 6,
   "toolTipPaddingRight": 6,
   "playbackBarProgressBorderRadius": 0,
   "displayTooltipInTouchScreens": true,
   "playbackBarProgressBorderSize": 0,
   "toolTipDisplayTime": 600,
   "progressBarBorderColor": "#000000",
   "minWidth": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadShadowColor": "#000000",
   "progressBarBorderRadius": 0,
   "progressRight": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadOpacity": 1,
   "toolTipPaddingTop": 4,
   "toolTipFontWeight": "normal",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "paddingTop": 0,
   "playbackBarHeadBorderRadius": 0,
   "playbackBarBorderRadius": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipBorderSize": 1,
   "toolTipBorderColor": "#767676",
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
   "playbackBarHeadBackgroundColorDirection": "vertical"
  },
  "movementMode": "constrained"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345F4D97_20DF_6BB3_41BF_89E603E3F0DA",
  "easing": "cubic_in_out"
 },
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
 "this.popup_3A3C822F_20F8_9425_41B2_B5F3B1085960",
 "this.MainViewerVideoPlayer",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_708509F5_6009_1476_41C3_9120A0B8FC62",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 176.87,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_70058922_6009_1592_41D2_1B6D52088AA0, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345ECD8F_20DF_6B94_41AE_2D20B974323E, 'hideEffect', false)",
    "media": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
    "camera": {
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
     "automaticZoomSpeed": 10,
     "id": "panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 110,
      "yaw": 0,
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EDD8F_20DF_6B94_41BF_D2C5F914980C, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_70058922_6009_1592_41D2_1B6D52088AA0"
   }
  ],
  "id": "playList_6FE808F0_6009_148E_41D2_4CAAC70E9B2A"
 },
 "this.popup_37E7B455_24BA_B0D4_41A5_EF23708D6C53",
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345CAD97_20DF_6BB3_41A6_3E97E260CACE",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_7043ED13_6009_0DB2_41C5_580C28DA764C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 3.65,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_70CA7A3F_6009_17F2_41B9_BBD74CDB6EFE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 9.95,
   "pitch": 0
  }
 },
 "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_2606DC67_37A3_6E7A_417B_82BAC7B62691",
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_701B6924_6009_1596_41D5_C6050CB963F0, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F4D97_20DF_6BB3_41BF_89E603E3F0DA, 'hideEffect', false)",
    "media": "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
    "camera": {
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
     "automaticZoomSpeed": 10,
     "id": "panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 110,
      "yaw": 0,
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F5D99_20DF_6BBF_41BD_058622C73035, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_701B6924_6009_1596_41D5_C6050CB963F0"
   }
  ],
  "id": "playList_6FE098F9_6009_147E_4178_0C74F0A81F38"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345EAD8F_20DF_6B94_41A5_6F5908EFA5C8",
  "easing": "cubic_in_out"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_7087BDC8_6009_0C9E_41BB_FAA10909FB57",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 149.97,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345C8D97_20DF_6BB3_41AB_11DFCCAD81C0",
  "easing": "cubic_in_out"
 },
 "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345E2D97_20DF_6BB3_41B0_9902D5E426BC",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42",
  "easing": "linear"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345CED8F_20DF_6B94_41B4_61907719F453",
  "easing": "cubic_in_out"
 },
 "this.popup_3509F7CC_246E_7035_41AB_BB188EF81D62",
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345FCD97_20DF_6BB3_41B7_5533F0603364",
  "easing": "cubic_in_out"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_70C9EE57_6009_0FB2_41C4_FE5D6B5E8419",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -25.69,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_70044923_6009_1592_41C3_8C8D9DA4BFC8, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CDD8F_20DF_6B94_41B6_C00B98F530E1, 'hideEffect', false)",
    "media": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
    "camera": {
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
     "automaticZoomSpeed": 10,
     "id": "panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 110,
      "yaw": 0,
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CED8F_20DF_6B94_41B4_61907719F453, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_70044923_6009_1592_41C3_8C8D9DA4BFC8"
   }
  ],
  "id": "playList_6FE1A8F8_6009_147E_41C6_ED95FD1EED58"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345F5D99_20DF_6BBF_41BD_058622C73035",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345E4D8F_20DF_6B94_41B8_3FE607FF9006",
  "easing": "cubic_in_out"
 },
 {
  "showEasing": "cubic_in",
  "rotationX": 0,
  "popupMaxWidth": "95%",
  "popupDistance": 100,
  "rotationZ": 0,
  "hideDuration": 500,
  "class": "PopupPanoramaOverlay",
  "id": "popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6",
  "showDuration": 500,
  "hfov": 8.24,
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
  "yaw": 43.77,
  "hideEasing": "cubic_out",
  "popupMaxHeight": "95%"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": {
     "minimumZoomFactor": 0.5,
     "fieldOfViewOverlayInsideColor": "#FFFFFF",
     "height": 209,
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
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17.png",
        "width": 300,
        "height": 209
       }
      ]
     },
     "thumbnailUrl": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_t.png",
     "scaleMode": "fit_inside",
     "overlays": [
      {
       "useHandCursor": true,
       "rollOverDisplay": true,
       "id": "overlay_FCFECF03_DD1A_A3DC_41C3_A9E15DF295E9",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "data": {
        "label": "Image"
       }
      },
      {
       "useHandCursor": true,
       "rollOverDisplay": true,
       "id": "overlay_FFCF2D2D_DD19_A627_41B8_CFCAE1C65CD2",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "data": {
        "label": "Image"
       }
      },
      {
       "useHandCursor": true,
       "rollOverDisplay": true,
       "id": "overlay_FEA879B1_DD16_6E3C_41E7_2FF39A318D51",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "data": {
        "label": "Image"
       }
      },
      {
       "useHandCursor": true,
       "rollOverDisplay": true,
       "id": "overlay_FF9139DD_DD16_AE64_41E7_9B2CF203BB6B",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "data": {
        "label": "Image"
       }
      },
      {
       "useHandCursor": true,
       "rollOverDisplay": true,
       "id": "overlay_FEFCC206_DD17_9DE5_41C8_3ECC72F63227",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "data": {
        "label": "Image"
       }
      },
      {
       "useHandCursor": true,
       "rollOverDisplay": true,
       "id": "overlay_FF91DE69_DD17_A22C_41DE_D1342F576EA9",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "data": {
        "label": "Image"
       }
      },
      {
       "useHandCursor": true,
       "rollOverDisplay": true,
       "id": "overlay_FFB50497_DD16_A6E4_41E4_5BEA266BE86F",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "data": {
        "label": "Image"
       }
      },
      {
       "useHandCursor": true,
       "rollOverDisplay": true,
       "id": "overlay_FE5AF794_DD09_A2E4_41D0_61777F7E15D3",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "data": {
        "label": "Image"
       }
      },
      {
       "useHandCursor": true,
       "rollOverDisplay": true,
       "id": "overlay_01B54DAD_1A41_CF78_41A6_909B29F94B5F",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "data": {
        "label": "Image"
       }
      }
     ],
     "fieldOfViewOverlayOutsideOpacity": 0,
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "fieldOfViewOverlayOutsideColor": "#000000"
    },
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_700B1915_6009_15B6_41D7_5C4A9DF9896D"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345E5D8F_20DF_6B94_4193_ABB7E016F309",
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_701B2923_6009_1592_41A8_450B1899EF40, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CAD97_20DF_6BB3_41A6_3E97E260CACE, 'hideEffect', false)",
    "media": "this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E",
    "camera": {
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
     "automaticZoomSpeed": 10,
     "id": "panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 110,
      "yaw": 0,
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E2D97_20DF_6BB3_41B0_9902D5E426BC, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_701B2923_6009_1592_41A8_450B1899EF40"
   }
  ],
  "id": "playList_6FE048F9_6009_147E_41CB_F1CC870514B6"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345E8D8F_20DF_6B94_419E_3AE578883B9D",
  "easing": "cubic_in_out"
 },
 "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345F2D8F_20DF_6B94_4160_462A4AF9B97A",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_70295CED_6009_0C96_41D5_787D8278688C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 40.93,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_6EE95B74_6009_1476_41A8_737B3FB980DD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -107.65,
   "pitch": 0
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_6ED6EB66_6009_1592_41D2_D54D719DC339",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -80.32,
   "pitch": 0
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_71222F45_6009_0D96_41D5_3138383D17FE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 84.54,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6FFFB903_6009_1592_41B7_AA38003A47E8VideoPlayer)",
    "media": "this.video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB",
    "start": "this.viewer_uid6FFFB903_6009_1592_41B7_AA38003A47E8VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_7019B925_6009_1596_41C5_7BD4329ED0C5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_7019B925_6009_1596_41C5_7BD4329ED0C5, 0)",
    "class": "VideoPlayListItem",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid6FFFB903_6009_1592_41B7_AA38003A47E8VideoPlayer",
     "viewerArea": {
      "paddingBottom": 0,
      "toolTipFontSize": "1.11vh",
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "viewer_uid6FFFB903_6009_1592_41B7_AA38003A47E8",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadShadow": true,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "progressBackgroundOpacity": 1,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "playbackBarOpacity": 1,
      "width": "100%",
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "borderSize": 0,
      "toolTipOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBarOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontFamily": "Arial",
      "shadow": false,
      "toolTipShadowColor": "#333333",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "progressLeft": 0,
      "playbackBarHeight": 10,
      "toolTipFontStyle": "normal",
      "minHeight": 50,
      "paddingRight": 0,
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarBorderSize": 0,
      "paddingLeft": 0,
      "playbackBarHeadWidth": 6,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "propagateClick": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarLeft": 0,
      "progressBorderRadius": 0,
      "toolTipPaddingBottom": 4,
      "playbackBarBackgroundColorDirection": "vertical",
      "transitionDuration": 500,
      "height": "100%",
      "playbackBarRight": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "class": "ViewerArea",
      "toolTipFontColor": "#606060",
      "toolTipPaddingLeft": 6,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBorderRadius": 0,
      "displayTooltipInTouchScreens": true,
      "playbackBarProgressBorderSize": 0,
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "minWidth": 100,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowColor": "#000000",
      "progressBarBorderRadius": 0,
      "progressRight": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadOpacity": 1,
      "toolTipPaddingTop": 4,
      "toolTipFontWeight": "normal",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "paddingTop": 0,
      "playbackBarHeadBorderRadius": 0,
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipBorderSize": 1,
      "toolTipBorderColor": "#767676",
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "data": {
       "name": "ViewerArea2160"
      },
      "progressBottom": 2,
      "progressHeight": 10,
      "playbackBarHeadBackgroundColorDirection": "vertical"
     },
     "displayPlaybackBar": true
    }
   }
  ],
  "id": "PlayList_7019B925_6009_1596_41C5_7BD4329ED0C5"
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
  "id": "playList_6FF4C914_6009_15B6_41D5_BEB27A1D1AEE"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_7004B923_6009_1592_41C4_FDC5CB333496, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EBD8F_20DF_6B94_41A4_072F6F80B3A4, 'hideEffect', false)",
    "media": "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
    "camera": {
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
     "automaticZoomSpeed": 10,
     "id": "panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 110,
      "yaw": 0,
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E4D8F_20DF_6B94_41B8_3FE607FF9006, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_7004B923_6009_1592_41C4_FDC5CB333496"
   }
  ],
  "id": "playList_6FE1F8F8_6009_147E_41D0_1DD6ACF5329F"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345F8D97_20DF_6BB3_41B5_1A0A5D57797F",
  "easing": "cubic_in_out"
 },
 "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_71938B02_6009_1593_41D1_F9DF3EC77523",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 148.88,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_701A3924_6009_1596_41C0_704F73A19A60, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E8D8F_20DF_6B94_419E_3AE578883B9D, 'hideEffect', false)",
    "media": "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
    "camera": {
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
     "automaticZoomSpeed": 10,
     "id": "panorama_0B7B5A27_1FEB_7426_4195_945554348391_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 110,
      "yaw": 0,
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD8F_20DF_6B94_41A5_6F5908EFA5C8, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_701A3924_6009_1596_41C0_704F73A19A60"
   }
  ],
  "id": "playList_6FE718FA_6009_1472_41CB_E4E122465710"
 },
 "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_camera",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_E6145D91_EF14_5D6A_41D9_45623053016B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 53.23,
   "pitch": 1.41
  }
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345EED8F_20DF_6B94_417E_826782EEF8F0",
  "easing": "cubic_in_out"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -132.07,
   "pitch": -40.96
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_6F621C29_6009_139E_41D4_799E53E56886",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -0.95,
   "pitch": 0
  }
 },
 "this.MainViewerPanoramaPlayer",
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345ECD8F_20DF_6B94_41AE_2D20B974323E",
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
  "id": "playList_6FF48914_6009_15B6_41D5_42990FCB7FC2"
 },
 "this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1",
 "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_70EB0EB3_6009_0CF2_41D4_C1DABD3515BC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 76.16,
   "pitch": 0
  }
 },
 "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_6F36ABF5_6009_1476_41BD_BE4F0F523F54",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 145.78,
   "pitch": 0
  }
 },
 "this.popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0",
 {
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
  "automaticZoomSpeed": 10,
  "id": "panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_71594F81_6009_0C8E_41D2_9880716CE02B",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_F083FF13_E49C_8716_41EC_3E7D67287F82",
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_701BC924_6009_1596_41A2_C60B14AE3EBD, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F2D8F_20DF_6B94_4160_462A4AF9B97A, 'hideEffect', false)",
    "media": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
    "camera": {
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
     "automaticZoomSpeed": 10,
     "id": "panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 110,
      "yaw": 0,
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CCD8F_20DF_6B94_41BC_F061530E83AF, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_701BC924_6009_1596_41A2_C60B14AE3EBD"
   }
  ],
  "id": "playList_6FE0A8F9_6009_147E_41C9_9674D9757377"
 },
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
 "this.popup_D60305E4_DCEA_D39F_419B_D9B149482827",
 "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_E3587215_ED68_4577_4183_716A0D8E6DA7",
  "easing": "cubic_in_out"
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_6F0A1BA8_6009_149E_41D5_BEAD29DC44F5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -3.1,
   "pitch": 0
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  }
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_708A59E4_6009_1496_41C6_1D36AB848E26",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 62.58,
   "pitch": 0
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_705C2D22_6009_0D93_41D5_65F84ADD31CE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 67.62,
   "pitch": 0
  }
 },
 "this.popup_369EF53B_249A_B05C_41BC_AE1E970C16EA",
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345F6D8F_20DF_6B94_410B_52B44954FB30",
  "easing": "cubic_in_out"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_6F825C51_6009_138E_41AC_540832C17520",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 174.77,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_706CB9B6_6009_14F2_41C6_456146DDF746",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 118.98,
   "pitch": 0
  }
 },
 "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
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
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_6ED22B59_6009_15BE_4186_86F61DE25083",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -10.97,
   "pitch": 0
  }
 },
 "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_camera",
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345F5D8F_20DF_6B94_41B1_D214F66E6293",
  "easing": "cubic_in_out"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_71541ACD_6009_1496_41D1_A175066BD371",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 42.36,
   "pitch": 0
  }
 },
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
 {
  "showEasing": "cubic_in",
  "rotationX": 0,
  "popupMaxWidth": "95%",
  "popupDistance": 100,
  "rotationZ": 0,
  "hideDuration": 500,
  "class": "PopupPanoramaOverlay",
  "id": "popup_3CC23B7F_107F_4540_4180_ABF478E71F9A",
  "showDuration": 500,
  "hfov": 6.7,
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
  "yaw": -105.77,
  "hideEasing": "cubic_out",
  "popupMaxHeight": "95%"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_71591F80_6009_0C8E_41C7_A429FB8C5F7F",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_707F59CD_6009_1496_41D2_00D75D1E59FF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": -80.55,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_E359B21B_ED68_4573_41E3_2134D2902989",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_715B7F78_6009_0C7E_41C5_F040B7EF4061",
  "easing": "cubic_in_out"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_6FC31C92_6009_0CB2_41A2_C30EEED1A19C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -138.7,
   "pitch": 0
  }
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
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345E3D97_20DF_6BB3_41B7_C907450FD669",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE",
  "easing": "cubic_in_out"
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
  "id": "playList_6FF44914_6009_15B6_41C6_2AF5BD67FE88"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345F7D8F_20DF_6B94_41B8_4073C3801F63",
  "easing": "cubic_in_out"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_70F23A75_6009_1476_41CE_B6D0AE035E82",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 116.84,
   "pitch": 0
  }
 },
 "this.popup_34BBD83C_246A_F055_41C1_EBEF48C7F767",
 {
  "minimumZoomFactor": 0.5,
  "fieldOfViewOverlayInsideColor": "#000000",
  "height": 563,
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
     "class": "ImageResourceLevel",
     "url": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C.png",
     "width": 500,
     "height": 563
    }
   ]
  },
  "thumbnailUrl": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_t.png",
  "scaleMode": "fit_inside",
  "overlays": [
   {
    "useHandCursor": true,
    "rollOverDisplay": false,
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
    "id": "overlay_E2A9E771_EFFC_6DAB_41ED_732E2F091F5A",
    "data": {
     "label": "Image"
    }
   }
  ],
  "fieldOfViewOverlayOutsideOpacity": 0,
  "initialZoomFactor": 1,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9",
  "easing": "cubic_in_out"
 },
 "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_70017CD4_6009_0CB6_41D6_0A3A90513163",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 154.47,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345F0D8F_20DF_6B94_419D_ABD4CFF44CF3",
  "easing": "cubic_in_out"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_70ADFE17_6009_0FB2_41C9_B07C44C2AAD1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 14.49,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_71819AF6_6009_1472_41D0_A649B051E0EA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 45.04,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_E3582213_ED68_454C_41D3_299F2B40CFF6",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_701E8CE0_6009_0C8E_417C_C19A03F2000C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -80.37,
   "pitch": 0
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_71AD7B0F_6009_1592_41D4_000F3CE07662",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 75.18,
   "pitch": 0
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_6FEAFCAC_6009_0C96_41C7_48F1202B26EE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 22.27,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_700AD918_6009_15BE_41C0_406ABB132385, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06, 'hideEffect', false)",
    "media": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
    "camera": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD84_20DF_6B95_41B9_72E06ABF1981, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_700AD918_6009_15BE_41C0_406ABB132385"
   },
   {
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_700D691B_6009_15B2_418A_61C93B0E509A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_EF6DE039_F622_38BD_41E2_3149DB234972, 'showEffect', false)",
    "media": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
    "camera": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_71440F77_6009_0C72_41B1_CB0F76B1F0AD, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_71447F77_6009_0C72_41B1_F9B20A90FEC9, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_7144BF77_6009_0C72_41CB_D915407A51D4, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_700D691B_6009_15B2_418A_61C93B0E509A"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_700DC91C_6009_15B6_41B3_41DF80F123E4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 110,
      "yaw": 0,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_700DC91C_6009_15B6_41B3_41DF80F123E4"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_700C291C_6009_15B6_41D3_0CDE081361C5, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 110,
      "yaw": 0,
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_715B7F78_6009_0C7E_41C5_F040B7EF4061, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_700C291C_6009_15B6_41D3_0CDE081361C5"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_700C991C_6009_15B6_41D0_951AD5E30506, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 110,
      "yaw": 0,
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_715BEF78_6009_0C7E_4191_3427881CDB92, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_700C991C_6009_15B6_41D0_951AD5E30506"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_700D691D_6009_15B6_41CB_D60B4E75BBB6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "camera": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7144EF79_6009_0C7E_41A3_72CEA0746A48, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_700D691D_6009_15B6_41CB_D60B4E75BBB6"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_700DF91D_6009_15B6_41D0_4370C42CD1C8, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 110,
      "yaw": 0,
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_715B6F7A_6009_0C72_41D5_0B8A42801BB3, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_700DF91D_6009_15B6_41D0_4370C42CD1C8"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_700C291D_6009_15B6_41D5_F63848293269, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 110,
      "yaw": 8.17,
      "pitch": -2.94
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_700C291D_6009_15B6_41D5_F63848293269"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_700CB91E_6009_15B2_41CA_26267A01FB62, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 110,
      "yaw": 0,
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_715A2F7A_6009_0C72_41C5_9ECF86AF8DA3, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_700CB91E_6009_15B2_41CA_26267A01FB62"
   },
   {
    "begin": "this.registerKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515', this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515.get('visible')); this.registerKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E', this.Label_E216BE12_F622_684F_41EC_C2D2817E217E.get('visible')); this.registerKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197', this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_700CE91E_6009_15B2_41C0_9C3B22390F97, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0B500FD7_1A54_37AE_41A9_19AE8C776076, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_2606DC67_37A3_6E7A_417B_82BAC7B62691, 'hideEffect', false); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true, -1, this.effect_EF6CE355_F62E_F8F5_41E6_CBD8B4202E02, 'showEffect', false); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false); this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_26077C68_37A3_6E75_41BD_CC48A65FF42C, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9, 'hideEffect', false)",
    "media": {
     "frames": [
      {
       "class": "CubicPanoramaFrame",
       "thumbnailUrl": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_t.jpg",
       "overlays": [
        {
         "maps": [],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_D5FC472D_D8F6_F99D_41E1_837FC723BF15, this.camera_D0DA93EE_DE6E_2520_41CD_8775B6E7F959)",
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
         "maps": [],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C, {'rollOverIconColor':'#CCCCCC','iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','paddingLeft':5,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, null, null, null, null, null, false)",
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
         "maps": [],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6, {'rollOverIconColor':'#CCCCCC','iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','paddingLeft':5,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, null, null, null, null, null, false)",
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
         "maps": [],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865, {'rollOverIconColor':'#CCCCCC','iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','paddingLeft':5,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_E252A6BD_EF1D_EC9A_41D3_31F4A8966575, null, null, null, null, false)",
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
        "this.popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6",
        {
         "showEasing": "cubic_in",
         "rotationX": 0,
         "popupMaxWidth": "95%",
         "popupDistance": 100,
         "rotationZ": 0,
         "hideDuration": 500,
         "class": "PopupPanoramaOverlay",
         "id": "popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C",
         "showDuration": 500,
         "hfov": 8.24,
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
         "yaw": 85.84,
         "hideEasing": "cubic_out",
         "popupMaxHeight": "95%"
        },
        {
         "showEasing": "cubic_in",
         "rotationX": 0,
         "popupMaxWidth": "95%",
         "popupDistance": 100,
         "rotationZ": 0,
         "hideDuration": 500,
         "class": "PopupPanoramaOverlay",
         "id": "popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865",
         "showDuration": 500,
         "hfov": 6.64,
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
         "yaw": -73.96,
         "hideEasing": "cubic_out",
         "popupMaxHeight": "95%"
        },
        {
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 17.78,
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
           "pitch": 1.59
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_E37E9453_EF2C_E3EE_41CE_DD0115CEB1E5",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
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
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 27.31,
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
           "pitch": 0.49
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_E29702E5_EF2C_24AA_41DF_D1E8119A0A3F",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
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
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43, {'rollOverIconColor':'#CCCCCC','iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','paddingLeft':5,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_E253E6BD_EF1D_EC9A_41EA_C503E65D3053, null, null, null, null, false)",
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
        "this.popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43",
        {
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 8.66,
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
           "pitch": -5.8
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_E63D12C8_F662_39DB_4170_7EF640601D86",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
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
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 15.83,
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
           "pitch": 1.23
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_E75D89D8_F662_2BFB_41BB_D9250A0A17F6",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
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
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 12.22,
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
           "pitch": 7.99
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_E6D140FE_F662_D9B7_41ED_B6DDE5F11AEE",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
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
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_3CC23B7F_107F_4540_4180_ABF478E71F9A, {'rollOverIconColor':'#CCCCCC','iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','paddingLeft':5,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_20FB6245_107F_4740_41A8_9C0A46A92B4D, null, null, null, null, false)",
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
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 19.47,
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
           "pitch": 3.74
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_381D894C_1071_C540_41AF_D6F0E2E79C30",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
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
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_3BBE3C5B_107F_C340_4178_756995F5135C, {'rollOverIconColor':'#CCCCCC','iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','paddingLeft':5,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, null, null, null, null, null, false)",
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
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 22.05,
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
           "pitch": -2.84
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_3BFABA4C_1071_4740_4194_C4FC9991EEE4",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
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
        "this.popup_3CC23B7F_107F_4540_4180_ABF478E71F9A",
        {
         "showEasing": "cubic_in",
         "rotationX": 0,
         "popupMaxWidth": "95%",
         "popupDistance": 100,
         "rotationZ": 0,
         "hideDuration": 500,
         "class": "PopupPanoramaOverlay",
         "id": "popup_3BBE3C5B_107F_C340_4178_756995F5135C",
         "showDuration": 500,
         "hfov": 6.69,
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
         "yaw": -99.48,
         "hideEasing": "cubic_out",
         "popupMaxHeight": "95%"
        },
        {
         "maps": [],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_209897EC_11B3_4D40_41A2_837DB50E3A59, {'rollOverIconColor':'#CCCCCC','iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','paddingLeft':5,'borderSize':0,'pressedIconHeight':50,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':50,'iconWidth':50,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#000000'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, null, null, null, null, null, false)",
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
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 17.1,
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
           "pitch": 1.99
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_21F8CB1B_11B7_C6C1_41A4_790E87B46214",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
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
         "showEasing": "cubic_in",
         "rotationX": 0,
         "popupMaxWidth": "95%",
         "popupDistance": 100,
         "rotationZ": 0,
         "hideDuration": 500,
         "class": "PopupPanoramaOverlay",
         "id": "popup_209897EC_11B3_4D40_41A2_837DB50E3A59",
         "showDuration": 500,
         "hfov": 6.69,
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
         "yaw": -80.67,
         "hideEasing": "cubic_out",
         "popupMaxHeight": "95%"
        }
       ],
       "cube": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_hq.jpeg",
          "width": 10224,
          "tags": [
           "oculusgo",
           "ipadpro"
          ],
          "height": 1704
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
     "label": "Cartago City",
     "id": "panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
     "class": "Panorama",
     "pitch": 0,
     "thumbnailUrl": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_t.jpg",
     "hfovMax": 120,
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
     "cardboardMenu": "this.Menu_701E2928_6009_159E_41D3_3E961EFF05B8",
     "hfovMin": 100,
     "hfov": 360,
     "partial": false
    },
    "camera": "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B_camera",
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0B500FD7_1A54_37AE_41A9_19AE8C776076, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_715ABF80_6009_0C8E_41CE_9575028DD1D2, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_715ACF80_6009_0C8E_41C8_BD36BB7FC35A, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')){ if(this.getKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')) { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true, -1, this.effect_71591F80_6009_0C8E_41C7_A429FB8C5F7F, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_2606DC67_37A3_6E7A_417B_82BAC7B62691, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197'); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_EF6C1355_F62E_F8F5_41C5_B9A5C5CCED3E, 'hideEffect', false); if(this.existsKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')){ if(this.getKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')) { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_71594F81_6009_0C8E_41D2_9880716CE02B, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_26077C68_37A3_6E75_41BD_CC48A65FF42C, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E'); if(this.existsKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')){ if(this.getKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')) { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_71598F81_6009_0C8E_41CC_8CE123BEC675, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')",
    "id": "PanoramaPlayListItem_700CE91E_6009_15B2_41C0_9C3B22390F97"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_7003791E_6009_15B2_41D2_60C13F0BD4CB, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 105,
      "yaw": 0,
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7159FF81_6009_0C8E_4183_D8AC5A3571BD, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_7003791E_6009_15B2_41D2_60C13F0BD4CB"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_7003D91F_6009_15B2_41D2_F8919123A292, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
    "camera": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_camera",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_71589F82_6009_0C92_41D6_193F2F6CF80F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_7003D91F_6009_15B2_41D2_F8919123A292"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_7002091F_6009_15B2_4170_E8E660038DF2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
    "camera": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_camera",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_715F0F83_6009_0C92_41D4_69F858980799, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_7002091F_6009_15B2_4170_E8E660038DF2"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_7002691F_6009_15B2_41C3_CB919CEF8E2B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
    "camera": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_camera",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_715FDF83_6009_0C92_41C3_00887275EC91, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_7002691F_6009_15B2_41C3_CB919CEF8E2B"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_7002F91F_6009_15B2_41C9_24B410D3162E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 110,
      "yaw": 0,
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_715E7F84_6009_0C96_41CB_69EEF61C482B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "id": "PanoramaPlayListItem_7002F91F_6009_15B2_41C9_24B410D3162E"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_70015920_6009_158E_41CE_DC290A9EE614, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 110,
      "yaw": 0,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_70015920_6009_158E_41CE_DC290A9EE614"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_7001D920_6009_158E_41D5_DA30F5267D76, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 0)",
    "media": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
    "camera": {
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10,
     "id": "panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 110,
      "yaw": 0,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.trigger('tourEnded')",
    "id": "PanoramaPlayListItem_7001D920_6009_158E_41D5_DA30F5267D76"
   }
  ],
  "id": "mainPlayList"
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
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_7144EF79_6009_0C7E_41A3_72CEA0746A48",
  "easing": "cubic_in_out"
 },
 "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
 "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
 "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_6F238BDB_6009_14B2_41B6_2DC347AEA7FE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 103.75,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_70BFAA33_6009_17F2_41D6_4B17D197C098",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -83.53,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_715B6F7A_6009_0C72_41D5_0B8A42801BB3",
  "easing": "cubic_in_out"
 },
 "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
 "this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E_camera",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_6F434C02_6009_1392_41D3_B69F3E79367E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -46.66,
   "pitch": 0
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_70BE1E39_6009_0FFE_41AF_9A642530430B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -51.43,
   "pitch": 0
  }
 },
 "this.popup_209897EC_11B3_4D40_41A2_837DB50E3A59",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_6FAB4C6A_6009_1392_41AE_C9E9B9A1F6F1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 88.15,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_715DEF85_6009_0C96_41D7_1E472A3B2F12",
  "easing": "cubic_in_out"
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
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_715C3F85_6009_0C96_41AC_4D564883538E",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_E3598214_ED68_4574_41E8_2F261C5C21DC",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_7144BF77_6009_0C72_41CB_D915407A51D4",
  "easing": "cubic_in_out"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_70E02A68_6009_179E_41CD_05A5939A4C89",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -100.57,
   "pitch": 0
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_7133FF60_6009_0D8E_41D0_B60DF33D3318",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 85.36,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_71598F81_6009_0C8E_41CC_8CE123BEC675",
  "easing": "cubic_in_out"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_71777AE8_6009_149E_41BF_3B7CCB878836",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -29.87,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_26077C68_37A3_6E75_41BD_CC48A65FF42C",
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_7005E923_6009_1592_41D0_39D01292AF10, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E5D8F_20DF_6B94_4193_ABB7E016F309, 'hideEffect', false)",
    "media": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
    "camera": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E6D8F_20DF_6B94_41A3_46A48BBB0ACC, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_7005E923_6009_1592_41D0_39D01292AF10"
   }
  ],
  "id": "playList_6FE178F7_6009_1472_41D4_5B964B82917C"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_715C6F85_6009_0C96_41C9_77E73F8D70CD",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_6F381BE8_6009_149E_41CE_494A071808F9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -140.57,
   "pitch": 0
  }
 },
 "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_camera",
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_34593D8F_20DF_6B94_41B9_C6D005829662",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_71447F77_6009_0C72_41B1_F9B20A90FEC9",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_D3728F7A_DF8C_960C_417C_830810DD2653",
  "easing": "linear"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_6FB11C84_6009_0C96_41A0_8A182717066B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -3.08,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_0B500FD7_1A54_37AE_41A9_19AE8C776076",
  "easing": "cubic_in_out"
 },
 "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_camera",
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_71589F82_6009_0C92_41D6_193F2F6CF80F",
  "easing": "cubic_in_out"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_7144AAC0_6009_148E_41BB_66433C240FC4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -143.56,
   "pitch": 0
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -143.47,
   "pitch": -37.77
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_70E46ED1_6009_0C8E_41CC_4A432D3C0A41",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -5.43,
   "pitch": 0
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_6F743C43_6009_1392_41C7_0BE2C4768CE2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -113.92,
   "pitch": 0
  }
 },
 "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345E7D8F_20DF_6B94_41B1_383A596C4C67",
  "easing": "cubic_in_out"
 },
 "this.Menu_701E2928_6009_159E_41D3_3E961EFF05B8",
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_71070F0D_6009_0D96_41D1_B1BDE829CB1C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 160.67,
   "pitch": 0
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_6FE50CBA_6009_0CF2_41D5_5A959C89A482",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -91.45,
   "pitch": 0
  }
 },
 "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_camera",
 "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_70AC8A23_6009_1792_41D4_0BD35F30C1BE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -152.92,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C",
  "easing": "cubic_in_out"
 },
 "this.video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB",
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_7153DF86_6009_0C92_4174_C5DE59ACD6C8",
  "easing": "cubic_in_out"
 },
 "this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A_camera",
 "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_7159FF81_6009_0C8E_4183_D8AC5A3571BD",
  "easing": "cubic_in_out"
 },
 "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
 "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera",
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_70F5BEF1_6009_0C8E_41C4_D9EAD0602DCC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -29.95,
   "pitch": 0
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_715ACF80_6009_0C8E_41C8_BD36BB7FC35A",
  "easing": "cubic_in_out"
 },
 "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
 "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
 "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
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
  "id": "window_6B99DE72_6009_0C72_41D0_89DF6ACA567A",
  "titlePaddingTop": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowSpread": 1,
  "closeButtonBackgroundOpacity": 0.3,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "borderRadius": 5,
  "scrollBarMargin": 2,
  "modal": true,
  "verticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "overflow": "scroll",
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
  "headerVerticalAlign": "middle",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "backgroundColor": [],
  "bodyPaddingTop": 0,
  "titleFontFamily": "Arial",
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": true,
  "footerBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 5,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBorderColor": "#000000",
  "minHeight": 20,
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "closeButtonIconColor": "#000000",
  "paddingLeft": 0,
  "closeButtonIconHeight": 20,
  "bodyPaddingRight": 0,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "contentOpaque": false,
  "headerBackgroundColorDirection": "vertical",
  "closeButtonBorderSize": 0,
  "propagateClick": false,
  "titlePaddingBottom": 5,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 0,
  "closeButtonPaddingTop": 5,
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPaddingBottom": 5,
  "backgroundColorRatios": [],
  "headerPaddingTop": 10,
  "class": "Window",
  "scrollBarVisible": "rollOver",
  "closeButtonPaddingRight": 5,
  "children": [
   "this.viewer_uid6FFFB903_6009_1592_41B7_AA38003A47E8"
  ],
  "shadowColor": "#000000",
  "closeButtonIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "titleFontSize": "1.29vh",
  "closeButtonBorderRadius": 0,
  "closeButtonPressedBorderColor": "#000000",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "minWidth": 20,
  "backgroundColorDirection": "vertical",
  "bodyPaddingBottom": 0,
  "titlePaddingRight": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilOpacity": 0.4,
  "shadowHorizontalLength": 3,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonRollOverBorderSize": 0,
  "headerBackgroundOpacity": 0,
  "paddingTop": 0,
  "closeButtonIconWidth": 20,
  "layout": "vertical",
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
  "veilColorRatios": [
   0,
   1
  ],
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
  "shadowOpacity": 0.5
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_715E7F84_6009_0C96_41CB_69EEF61C482B",
  "easing": "cubic_in_out"
 },
 "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
 "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
 "this.popup_3BBE3C5B_107F_C340_4178_756995F5135C",
 "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_camera",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_70374D06_6009_0D92_419F_9275C8C75C89",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": -107.93,
   "pitch": 0
  }
 },
 "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
 "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
 "this.popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7",
 "this.popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865",
 "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_camera",
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_34592D8F_20DF_6B94_41B2_36A2D8C28548",
  "easing": "cubic_in_out"
 },
 "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_camera",
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EED8F_20DF_6B94_417E_826782EEF8F0, 'hideEffect', false)",
    "media": "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
    "camera": {
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
     "automaticZoomSpeed": 10,
     "id": "panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 110,
      "yaw": 0,
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EFD8F_20DF_6B94_41B7_4853257F85EE, 'hideEffect', false)"
   }
  ],
  "id": "playList_6FFB78FF_6009_1472_41D6_945E5F069B75"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_6EE40B8E_6009_1492_41C9_6625988E52BB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -129.9,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F5D8F_20DF_6B94_41B1_D214F66E6293, 'hideEffect', false)",
    "media": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
    "camera": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F6D8F_20DF_6B94_410B_52B44954FB30, 'hideEffect', false)"
   }
  ],
  "id": "playList_6FFB2901_6009_158E_41D7_AE4EFBA65DD2"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_701A4924_6009_1596_41C9_8AA9AE483FB7, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E3D97_20DF_6BB3_41B7_C907450FD669, 'hideEffect', false)",
    "media": "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
    "camera": "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345FCD97_20DF_6BB3_41B7_5533F0603364, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_701A4924_6009_1596_41C9_8AA9AE483FB7"
   }
  ],
  "id": "playList_6FE728FA_6009_1472_41D5_5D476C65E858"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_6FA6EC77_6009_0C72_41D7_30F425B13237",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -42.99,
   "pitch": 0
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_7110BF28_6009_0D9E_41D6_804F64FBCA42",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 62.7,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34597D8F_20DF_6B94_41AA_44DC8A057CBB, 'hideEffect', false)",
    "media": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
    "camera": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34590D8F_20DF_6B94_41BB_A45E78753DDE, 'hideEffect', false)"
   }
  ],
  "id": "playList_6FEB98ED_6009_1491_41BE_CE43752DC015"
 },
 "this.popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E",
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
  "id": "playList_6FF49914_6009_15B6_41D6_F2595EF42393"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_6F569C1C_6009_13B6_41B3_7678F97A2ABC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 101.73,
   "pitch": 0
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_6FF72CC6_6009_0C93_41C3_756722BA4EC3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 15.91,
   "pitch": 0
  }
 },
 "this.popup_25AB8A34_3513_DE40_41C8_119007832823",
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
  "id": "playList_6FF4D914_6009_15B6_41D5_396F4F9D5D7D"
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
 "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
 {
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
  "automaticZoomSpeed": 10,
  "id": "panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -102.2,
   "pitch": -43.45
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_70D0DA5A_6009_17B2_41D5_6E3DC8879E02",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -152.55,
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
  "id": "playList_700B0915_6009_15B6_4184_36A14400AE5A"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06",
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
  "id": "playList_6FF4E915_6009_15B6_41BD_E09B951964DD"
 },
 "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
 "this.popup_36E9C513_249E_702C_41C0_2CA0C18AAE54",
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
 {
  "class": "FadeInEffect",
  "duration": 0,
  "id": "effect_EF6DE039_F622_38BD_41E2_3149DB234972",
  "easing": "cubic_in_out"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F7D8F_20DF_6B94_41B8_4073C3801F63, 'hideEffect', false)",
    "media": "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
    "camera": {
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
     "automaticZoomSpeed": 10,
     "id": "panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "hfov": 110,
      "yaw": 0,
      "pitch": 0
     }
    },
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F0D8F_20DF_6B94_419D_ABD4CFF44CF3, 'hideEffect', false)"
   }
  ],
  "id": "playList_6FFB6901_6009_158E_41D1_A1804781461F"
 },
 "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
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
 "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_camera",
 "this.popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C",
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
 "this.panorama_0F005D0F_1FF8_EDE5_41A7_3B573BF1C48E",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_6EECAB80_6009_148E_41CD_837509B7DC43",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -113.6,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_6F159BCE_6009_1492_41C0_E7EF701A90C6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 3.59,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_7004E923_6009_1592_4190_33096BE08DB7, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F8D97_20DF_6BB3_41B5_1A0A5D57797F, 'hideEffect', false)",
    "media": "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
    "camera": "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345FBD97_20DF_6BB3_41A7_CB088826B439, 'hideEffect', false)",
    "id": "PanoramaPlayListItem_7004E923_6009_1592_4190_33096BE08DB7"
   }
  ],
  "id": "playList_6FE008F8_6009_147E_41D1_8460933E48D9"
 },
 "this.popup_3A24E5A5_20F8_BCDA_41A8_FE67D62CDC94",
 "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391_camera",
 "this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_6F784C36_6009_13F2_41D7_C541A5D01E44",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -110.67,
   "pitch": 0
  }
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_6F015BB5_6009_14F6_41C7_29CF302595D1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 120.31,
   "pitch": 0
  }
 },
 "this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765",
 "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_camera",
 "this.popup_36258FF0_249D_EFED_41AB_54067BE4CE8C",
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
  "automaticZoomSpeed": 10,
  "id": "camera_70759D9B_6009_0CB2_41C1_AAA292175192",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -173.56,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_71524F8C_6009_0C96_41CE_46242B06F3CA",
  "easing": "cubic_in_out"
 },
 "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera",
 "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_7167FADA_6009_14B2_41D7_701317EE59BB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 89.52,
   "pitch": 0
  }
 },
 "this.popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D",
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_70919DF0_6009_0C8E_41D6_2C762365FF3D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 22.39,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 0, 1); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06, 'hideEffect', false)",
    "media": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
    "camera": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD84_20DF_6B95_41B9_72E06ABF1981, 'hideEffect', false)"
   },
   {
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 1, 2); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_EF6DE039_F622_38BD_41E2_3149DB234972, 'showEffect', false)",
    "media": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
    "camera": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_715DEF85_6009_0C96_41D7_1E472A3B2F12, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_715C3F85_6009_0C96_41AC_4D564883538E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_715C6F85_6009_0C96_41C9_77E73F8D70CD, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)"
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
    "camera": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_71532F86_6009_0C92_41D0_871FC190D50C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 4, 5); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "camera": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7153DF86_6009_0C92_4174_C5DE59ACD6C8, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 5, 6); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "camera": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_71524F8C_6009_0C96_41CE_46242B06F3CA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 6, 7); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "camera": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_7152EF8D_6009_0C96_41D0_A68B5FC6D464, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 7, 8)",
    "media": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
    "camera": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 8, 9); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34592D8F_20DF_6B94_41B2_36A2D8C28548, 'hideEffect', false)",
    "media": "this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1",
    "camera": "this.panorama_2A53251E_26DE_FCF7_41C1_EA580747D5D1_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34593D8F_20DF_6B94_41B9_C6D005829662, 'hideEffect', false)"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 9, 10); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E7D8F_20DF_6B94_41B1_383A596C4C67, 'hideEffect', false)",
    "media": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B",
    "camera": "this.panorama_28CE3CD3_26DF_8D4D_418A_00FC418A3C5B_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E0D8F_20DF_6B94_41AE_F32FBDDF5924, 'hideEffect', false)"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 10, 0); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CFD97_20DF_6BB4_41BB_97095DF13BBA, 'hideEffect', false)",
    "media": "this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765",
    "camera": "this.panorama_288A4024_26DD_B4CB_41C0_7902A2D1B765_camera",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345C8D97_20DF_6BB3_41AB_11DFCCAD81C0, 'hideEffect', false)"
   }
  ],
  "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist"
 },
 "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_camera",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_6EFC3B9B_6009_14B2_41C3_A1FEAD2F0D5D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -147.08,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_7051C9A2_6009_1492_41D3_AAD775D034FD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 163.89,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_70C59A4B_6009_1792_41D0_12DF14E1E648",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 3.45,
   "pitch": 0
  }
 },
 "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
 "this.popup_3A305B90_20FB_94FB_4193_FEB3450979FC",
 "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
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
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_EF6CE355_F62E_F8F5_41E6_CBD8B4202E02",
  "easing": "cubic_in_out"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_71BEBB1B_6009_15B1_41C6_03FBD4DB762F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 65.32,
   "pitch": 0
  }
 },
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
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_E3586214_ED68_4574_41E5_D2720D677B2E",
  "easing": "cubic_in_out"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_6F9E3C5E_6009_13B2_41D7_2E3285D72306",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -156.68,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_6F582C0E_6009_1392_4194_B9A96039B588",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 33.73,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_E359A214_ED68_4575_41DB_B895523643F9",
  "easing": "cubic_in_out"
 },
 "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_712F7A9A_6009_14B2_41D6_4A90D8F2B4AA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -123.57,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_715ABF80_6009_0C8E_41CE_9575028DD1D2",
  "easing": "cubic_in_out"
 },
 "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_715F0F83_6009_0C92_41D4_69F858980799",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_70903A0C_6009_1796_41C1_71383658D196",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -92.67,
   "pitch": 0
  }
 },
 "this.panorama_3ADC2F11_3514_D640_41C9_D1EE3042194A",
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F",
  "easing": "cubic_in_out"
 },
 "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_6F1F9BC1_6009_148E_41A1_CDF2D18A2ABC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": 94.62,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_345E0D8F_20DF_6B94_41AE_F32FBDDF5924",
  "easing": "cubic_in_out"
 },
 {
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
  "automaticZoomSpeed": 10,
  "id": "camera_6FDF1CA0_6009_0C8E_41C7_CC756DEA873B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 5.5,
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
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBackgroundOpacity": 1,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipTextShadowColor": "#000000",
  "playbackBarOpacity": 1,
  "width": "100%",
  "toolTipShadowBlurRadius": 3,
  "borderRadius": 0,
  "borderSize": 0,
  "toolTipOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontFamily": "Arial",
  "shadow": false,
  "toolTipShadowColor": "#333333",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressLeft": 0,
  "playbackBarHeight": 10,
  "toolTipFontStyle": "normal",
  "minHeight": 50,
  "paddingRight": 0,
  "playbackBarBackgroundOpacity": 1,
  "progressBorderSize": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarBorderSize": 0,
  "paddingLeft": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBorderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "propagateClick": false,
  "toolTipTextShadowOpacity": 0,
  "playbackBarLeft": 0,
  "progressBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarBackgroundColorDirection": "vertical",
  "transitionDuration": 500,
  "height": "100%",
  "playbackBarRight": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderSize": 0,
  "transitionMode": "blending",
  "class": "ViewerArea",
  "toolTipFontColor": "#606060",
  "toolTipPaddingLeft": 6,
  "toolTipPaddingRight": 6,
  "playbackBarProgressBorderRadius": 0,
  "displayTooltipInTouchScreens": true,
  "playbackBarProgressBorderSize": 0,
  "toolTipDisplayTime": 600,
  "progressBarBorderColor": "#000000",
  "minWidth": 100,
  "top": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBorderRadius": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressRight": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadOpacity": 1,
  "toolTipPaddingTop": 4,
  "toolTipFontWeight": "normal",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingTop": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipBorderSize": 1,
  "toolTipBorderColor": "#767676",
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
  "playbackBarHeadBackgroundColorDirection": "vertical"
 },
 {
  "left": "0%",
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "id": "Container_D19AA380_DE1B_2AF3_41EA_D9B3468B686F",
  "class": "Container",
  "width": "100%",
  "children": [
   {
    "backgroundColorRatios": [
     0.8
    ],
    "class": "Container",
    "id": "Container_FD43509A_EC70_8CA6_41E8_9E5B7D453FAE",
    "backgroundOpacity": 0.1,
    "scrollBarVisible": "rollOver",
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
      "toolTipPaddingRight": 6,
      "width": 75,
      "toolTipPaddingLeft": 6,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipDisplayTime": 600,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "borderSize": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipOpacity": 1,
      "minWidth": 1,
      "verticalAlign": "middle",
      "pressedIconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0_pressed.png",
      "toolTipFontWeight": "normal",
      "mode": "toggle",
      "toolTipPaddingTop": 4,
      "toolTipFontFamily": "Arial",
      "shadow": false,
      "click": "this.openLink('https://www.lalimafreezone.com/', '_top')",
      "toolTipShadowColor": "#333333",
      "height": 50,
      "toolTipFontStyle": "normal",
      "minHeight": 1,
      "paddingRight": 0,
      "paddingLeft": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderSize": 1,
      "toolTipBorderColor": "#767676",
      "toolTipShadowSpread": 0,
      "toolTip": "Home",
      "iconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0.png",
      "propagateClick": false,
      "data": {
       "name": "Button_home"
      },
      "toolTipTextShadowOpacity": 0,
      "horizontalAlign": "center",
      "toolTipPaddingBottom": 4,
      "cursor": "hand",
      "paddingBottom": 0,
      "paddingTop": 0
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
      "toolTipPaddingRight": 6,
      "width": 75,
      "toolTipPaddingLeft": 6,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipDisplayTime": 600,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "borderSize": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipOpacity": 1,
      "minWidth": 1,
      "verticalAlign": "middle",
      "pressedIconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2_pressed.png",
      "toolTipFontWeight": "normal",
      "mode": "toggle",
      "toolTipPaddingTop": 4,
      "toolTipFontFamily": "Arial",
      "shadow": false,
      "click": "if(!this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, true, 0, this.effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42, 'showEffect', false) } else { this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, false, 0, this.effect_D3728F7A_DF8C_960C_417C_830810DD2653, 'hideEffect', false) }",
      "toolTipShadowColor": "#333333",
      "height": 50,
      "toolTipFontStyle": "normal",
      "minHeight": 1,
      "paddingRight": 0,
      "paddingLeft": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderSize": 1,
      "toolTipBorderColor": "#767676",
      "toolTipShadowSpread": 0,
      "toolTip": "Map",
      "iconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2.png",
      "propagateClick": false,
      "data": {
       "name": "Button_Map"
      },
      "toolTipTextShadowOpacity": 0,
      "horizontalAlign": "center",
      "toolTipPaddingBottom": 4,
      "cursor": "hand",
      "paddingBottom": 0,
      "paddingTop": 0
     },
     {
      "class": "Image",
      "backgroundOpacity": 0,
      "id": "Image_5DD52A9D_53AB_71BB_41D2_61C6638CC12D",
      "width": 75,
      "maxWidth": 225,
      "borderRadius": 0,
      "borderSize": 0,
      "url": "skin/Image_5DD52A9D_53AB_71BB_41D2_61C6638CC12D.png",
      "minWidth": 1,
      "verticalAlign": "middle",
      "maxHeight": 225,
      "shadow": false,
      "click": "this.openLink('https://www.lalimafreezone.com/real-estate', '_top')",
      "height": 50,
      "minHeight": 1,
      "paddingRight": 0,
      "paddingLeft": 0,
      "propagateClick": false,
      "data": {
       "name": "Image2280"
      },
      "horizontalAlign": "center",
      "scaleMode": "fit_inside",
      "cursor": "hand",
      "paddingBottom": 0,
      "paddingTop": 0
     },
     "this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667"
    ],
    "width": 334,
    "borderRadius": 0,
    "borderSize": 0,
    "minWidth": 334,
    "backgroundColorDirection": "vertical",
    "verticalAlign": "middle",
    "scrollBarOpacity": 0.5,
    "overflow": "scroll",
    "scrollBarWidth": 10,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "height": 77,
    "shadow": false,
    "minHeight": 77,
    "paddingRight": 0,
    "backgroundColor": [
     "#000000"
    ],
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container_btones"
    },
    "horizontalAlign": "center",
    "gap": 10,
    "paddingBottom": 0,
    "paddingTop": 0
   }
  ],
  "borderRadius": 0,
  "borderSize": 0,
  "minWidth": 1,
  "layout": "horizontal",
  "verticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "bottom": "0%",
  "shadow": false,
  "height": "18.033%",
  "minHeight": 1,
  "paddingRight": 0,
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Container_Menu"
  },
  "horizontalAlign": "center",
  "gap": 10,
  "paddingBottom": 0,
  "paddingTop": 0
 },
 {
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "id": "Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F",
  "right": "0%",
  "class": "Container",
  "width": "29.316%",
  "children": [
   {
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver",
    "id": "Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5",
    "class": "Container",
    "width": "100%",
    "children": [
     "this.MapViewer",
     {
      "backgroundOpacity": 0,
      "id": "Image_E84AED1C_E346_1439_41DD_9142DAACB163",
      "class": "Image",
      "url": "skin/Image_E84AED1C_E346_1439_41DD_9142DAACB163.png",
      "width": "100%",
      "maxWidth": 448,
      "borderRadius": 0,
      "borderSize": 0,
      "minWidth": 1,
      "verticalAlign": "middle",
      "maxHeight": 264,
      "shadow": false,
      "height": "27.233%",
      "minHeight": 1,
      "paddingRight": 0,
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "propagateClick": false,
      "data": {
       "name": "Simbologia"
      },
      "scaleMode": "fit_inside",
      "paddingBottom": 0,
      "paddingTop": 0
     }
    ],
    "borderRadius": 0,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "minWidth": 1,
    "layout": "vertical",
    "verticalAlign": "middle",
    "scrollBarOpacity": 0.5,
    "overflow": "scroll",
    "scrollBarMargin": 2,
    "shadow": false,
    "height": "81.45%",
    "minHeight": 1,
    "paddingRight": 0,
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container_Map"
    },
    "horizontalAlign": "center",
    "gap": 10,
    "paddingBottom": 0,
    "paddingTop": 0
   }
  ],
  "borderRadius": 0,
  "borderSize": 0,
  "minWidth": 1,
  "creationPolicy": "inAdvance",
  "verticalAlign": "top",
  "scrollBarOpacity": 0.5,
  "top": "2.05%",
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "layout": "vertical",
  "scrollBarMargin": 2,
  "shadow": false,
  "height": "77.049%",
  "minHeight": 1,
  "paddingRight": 0,
  "paddingLeft": 0,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Main_Container"
  },
  "horizontalAlign": "center",
  "gap": 10,
  "visible": false,
  "paddingBottom": 0,
  "paddingTop": 0
 },
 {
  "left": "0%",
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "id": "Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F",
  "class": "Container",
  "width": "100%",
  "children": [
   {
    "fontFamily": "Arial",
    "backgroundColorRatios": [
     0,
     1
    ],
    "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F",
    "class": "DropDown",
    "popUpShadowOpacity": 0,
    "selectedPopUpBackgroundColor": "#0066FF",
    "popUpBackgroundColor": "#FFFFFF",
    "backgroundOpacity": 0.72,
    "borderRadius": 4,
    "borderSize": 0,
    "popUpBorderRadius": 0,
    "width": "20.256%",
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "minWidth": 200,
    "backgroundColorDirection": "vertical",
    "arrowBeforeLabel": false,
    "popUpShadowColor": "#000000",
    "popUpShadowSpread": 1,
    "selectedPopUpFontColor": "#FFFFFF",
    "shadow": false,
    "fontColor": "#333333",
    "backgroundColor": [
     "#00CCFF",
     "#0099FF"
    ],
    "fontSize": 14,
    "minHeight": 20,
    "paddingRight": 5,
    "height": "27.397%",
    "paddingLeft": 5,
    "fontStyle": "normal",
    "popUpShadow": false,
    "playList": "this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
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
    "paddingBottom": 0,
    "paddingTop": 0
   }
  ],
  "borderRadius": 0,
  "borderSize": 0,
  "minWidth": 1,
  "layout": "horizontal",
  "verticalAlign": "top",
  "scrollBarOpacity": 0.5,
  "top": "0.96%",
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "height": "10%",
  "minHeight": 1,
  "paddingRight": 0,
  "paddingLeft": 0,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "ContainerDropDown"
  },
  "horizontalAlign": "left",
  "gap": 10,
  "paddingBottom": 0,
  "paddingTop": 0
 },
 {
  "fontFamily": "Arial",
  "left": "0%",
  "backgroundOpacity": 0,
  "id": "Label_E2D61738_F65E_D8BA_41DD_6888E340C197",
  "class": "Label",
  "textShadowOpacity": 1,
  "width": "100%",
  "borderRadius": 0,
  "text": "La Lima Free Zone",
  "borderSize": 0,
  "verticalAlign": "middle",
  "textShadowVerticalLength": 1,
  "top": "0%",
  "textShadowBlurRadius": 3,
  "minWidth": 1,
  "textShadowColor": "#000000",
  "shadow": false,
  "fontColor": "#FFFFFF",
  "height": "10%",
  "fontSize": 20,
  "minHeight": 1,
  "paddingRight": 0,
  "textShadowHorizontalLength": 1,
  "paddingLeft": 0,
  "fontStyle": "normal",
  "propagateClick": false,
  "data": {
   "name": "Label_La Lima Free Zone"
  },
  "horizontalAlign": "center",
  "textDecoration": "none",
  "visible": false,
  "fontWeight": "normal",
  "paddingBottom": 0,
  "paddingTop": 0
 },
 {
  "fontFamily": "Arial",
  "left": "0%",
  "backgroundOpacity": 0,
  "id": "Label_E253EC4C_F622_28DA_41DB_546DF82EE842",
  "class": "Label",
  "textShadowOpacity": 1,
  "width": "100%",
  "borderRadius": 0,
  "text": "Cartago City",
  "borderSize": 0,
  "verticalAlign": "middle",
  "textShadowVerticalLength": 1,
  "top": "0%",
  "textShadowBlurRadius": 3,
  "minWidth": 1,
  "textShadowColor": "#000000",
  "shadow": false,
  "fontColor": "#FFFFFF",
  "height": "10%",
  "fontSize": 20,
  "minHeight": 1,
  "paddingRight": 0,
  "textShadowHorizontalLength": 1,
  "paddingLeft": 0,
  "fontStyle": "normal",
  "propagateClick": false,
  "data": {
   "name": "Label_Cartago City"
  },
  "horizontalAlign": "center",
  "textDecoration": "none",
  "visible": false,
  "fontWeight": "normal",
  "paddingBottom": 0,
  "paddingTop": 0
 },
 {
  "fontFamily": "Arial",
  "left": "0%",
  "backgroundOpacity": 0,
  "id": "Label_E216BE12_F622_684F_41EC_C2D2817E217E",
  "class": "Label",
  "textShadowOpacity": 1,
  "width": "100%",
  "borderRadius": 0,
  "text": "Corporate Center Project",
  "borderSize": 0,
  "verticalAlign": "middle",
  "textShadowVerticalLength": 1,
  "top": "0%",
  "textShadowBlurRadius": 3,
  "minWidth": 1,
  "textShadowColor": "#000000",
  "shadow": false,
  "fontColor": "#FFFFFF",
  "height": "13.108%",
  "fontSize": 20,
  "minHeight": 1,
  "paddingRight": 0,
  "textShadowHorizontalLength": 1,
  "paddingLeft": 0,
  "fontStyle": "normal",
  "propagateClick": false,
  "data": {
   "name": "Label_Corporate Center"
  },
  "horizontalAlign": "center",
  "textDecoration": "none",
  "visible": false,
  "fontWeight": "normal",
  "paddingBottom": 0,
  "paddingTop": 0
 },
 {
  "fontFamily": "Arial",
  "left": "0%",
  "backgroundOpacity": 0,
  "id": "Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515",
  "class": "Label",
  "textShadowOpacity": 1,
  "width": "100%",
  "borderRadius": 0,
  "text": "Corporate Building",
  "borderSize": 0,
  "verticalAlign": "middle",
  "textShadowVerticalLength": 1,
  "top": "6%",
  "textShadowBlurRadius": 3,
  "minWidth": 1,
  "textShadowColor": "#000000",
  "shadow": false,
  "fontColor": "#FFFFFF",
  "height": "3.5%",
  "fontSize": 20,
  "minHeight": 1,
  "paddingRight": 0,
  "textShadowHorizontalLength": 1,
  "paddingLeft": 0,
  "fontStyle": "normal",
  "propagateClick": false,
  "data": {
   "name": "Label_Corporate Building"
  },
  "horizontalAlign": "center",
  "textDecoration": "none",
  "visible": false,
  "fontWeight": "normal",
  "paddingBottom": 0,
  "paddingTop": 0
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "id": "Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E",
  "left": "0%",
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "id": "Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41",
    "left": "4.32%",
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "children": [
     {
      "backgroundColorRatios": [
       0
      ],
      "id": "WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21",
      "class": "WebFrame",
      "right": "0%",
      "backgroundOpacity": 1,
      "borderRadius": 0,
      "borderSize": 0,
      "url": "https://www.dailymotion.com/embed/video/kzStCdckcK75zLvzVdv?queue-enable=false\n",
      "width": "99.907%",
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "top": "0%",
      "shadow": false,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 1,
      "paddingRight": 0,
      "height": "100%",
      "paddingLeft": 0,
      "scrollEnabled": true,
      "propagateClick": false,
      "data": {
       "name": "WebFrame_Zollner"
      },
      "visible": false,
      "insetBorder": false,
      "paddingBottom": 0,
      "paddingTop": 0
     },
     {
      "backgroundColorRatios": [
       0
      ],
      "id": "WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB",
      "left": "0%",
      "class": "WebFrame",
      "backgroundOpacity": 1,
      "borderRadius": 0,
      "borderSize": 0,
      "url": "https://www.dailymotion.com/embed/video/k5CPUN2JVgV5TXvAxxe?queue-enable=false",
      "width": "100%",
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "top": "0%",
      "shadow": false,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 1,
      "paddingRight": 0,
      "height": "100%",
      "paddingLeft": 0,
      "scrollEnabled": true,
      "propagateClick": false,
      "data": {
       "name": "WebFrame_CC"
      },
      "visible": false,
      "insetBorder": false,
      "paddingBottom": 0,
      "paddingTop": 0
     },
     {
      "backgroundColorRatios": [
       0
      ],
      "id": "WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411",
      "left": "0%",
      "class": "WebFrame",
      "backgroundOpacity": 1,
      "borderRadius": 0,
      "borderSize": 0,
      "url": "https://www.dailymotion.com/embed/video/k1DHnDG2YiE1ncvzVks?queue-enable=false",
      "width": "100%",
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "top": "0%",
      "shadow": false,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 1,
      "paddingRight": 0,
      "height": "100%",
      "paddingLeft": 0,
      "scrollEnabled": true,
      "propagateClick": false,
      "data": {
       "name": "WebFrame_Coloplast"
      },
      "visible": false,
      "insetBorder": false,
      "paddingBottom": 0,
      "paddingTop": 0
     },
     {
      "id": "Image_57742DA6_5884_2676_41C4_D20EEA93A077",
      "backgroundOpacity": 0,
      "right": "0%",
      "class": "Image",
      "url": "skin/Image_57742DA6_5884_2676_41C4_D20EEA93A077.png",
      "width": "6.97%",
      "maxWidth": 394,
      "borderRadius": 0,
      "borderSize": 0,
      "minWidth": 1,
      "verticalAlign": "middle",
      "top": "0%",
      "maxHeight": 396,
      "shadow": false,
      "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, false, 0, null, null, false)",
      "height": "10.98%",
      "minHeight": 1,
      "paddingRight": 0,
      "paddingLeft": 0,
      "propagateClick": false,
      "data": {
       "name": "Button_Close"
      },
      "horizontalAlign": "center",
      "scaleMode": "fit_inside",
      "paddingBottom": 0,
      "paddingTop": 0
     }
    ],
    "backgroundOpacity": 0.3,
    "borderRadius": 0,
    "borderSize": 0,
    "width": "91.341%",
    "minWidth": 1,
    "backgroundColorDirection": "vertical",
    "verticalAlign": "top",
    "scrollBarOpacity": 0.5,
    "overflow": "scroll",
    "scrollBarWidth": 10,
    "layout": "absolute",
    "bottom": "3.11%",
    "shadow": false,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "minHeight": 1,
    "paddingRight": 0,
    "height": "91.081%",
    "paddingLeft": 0,
    "scrollBarMargin": 2,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Web container "
    },
    "horizontalAlign": "left",
    "gap": 10,
    "paddingBottom": 0,
    "paddingTop": 0
   }
  ],
  "backgroundOpacity": 0.3,
  "borderRadius": 0,
  "borderSize": 0,
  "width": "100%",
  "minWidth": 1,
  "backgroundColorDirection": "vertical",
  "verticalAlign": "top",
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "overflow": "scroll",
  "scrollBarWidth": 10,
  "creationPolicy": "inAdvance",
  "scrollBarMargin": 2,
  "layout": "absolute",
  "shadow": false,
  "backgroundColor": [
   "#000000"
  ],
  "minHeight": 1,
  "paddingRight": 0,
  "height": "100%",
  "paddingLeft": 0,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Main Container Web link"
  },
  "horizontalAlign": "left",
  "gap": 10,
  "visible": false,
  "paddingBottom": 0,
  "paddingTop": 0
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
  "borderRadius": 0,
  "borderSize": 0,
  "minWidth": 0,
  "backgroundColorDirection": "vertical",
  "top": 0,
  "bottom": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "shadow": false,
  "backgroundColor": [
   "#000000"
  ],
  "minHeight": 0,
  "paddingRight": 0,
  "paddingLeft": 0,
  "propagateClick": false,
  "data": {
   "name": "UIComponent2161"
  },
  "visible": false,
  "paddingBottom": 0,
  "paddingTop": 0
 },
 {
  "backgroundColorRatios": [],
  "class": "ZoomImage",
  "id": "zoomImagePopupPanorama",
  "left": 0,
  "backgroundOpacity": 1,
  "right": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "minWidth": 0,
  "backgroundColorDirection": "vertical",
  "top": 0,
  "bottom": 0,
  "shadow": false,
  "backgroundColor": [],
  "minHeight": 0,
  "paddingRight": 0,
  "paddingLeft": 0,
  "propagateClick": false,
  "data": {
   "name": "ZoomImage2162"
  },
  "visible": false,
  "scaleMode": "custom",
  "paddingBottom": 0,
  "paddingTop": 0
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
  "gap": 5,
  "shadowSpread": 1,
  "borderRadius": 0,
  "borderSize": 0,
  "shadowBlurRadius": 6,
  "minWidth": 0,
  "backgroundColorDirection": "vertical",
  "verticalAlign": "middle",
  "top": 10,
  "borderColor": "#000000",
  "shadowColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "iconBeforeLabel": true,
  "mode": "push",
  "shadow": false,
  "label": "",
  "fontColor": "#FFFFFF",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "minHeight": 0,
  "paddingRight": 5,
  "iconColor": "#000000",
  "layout": "horizontal",
  "fontSize": "1.29vh",
  "paddingLeft": 5,
  "fontStyle": "normal",
  "rollOverIconColor": "#666666",
  "iconLineWidth": 5,
  "propagateClick": false,
  "data": {
   "name": "CloseButton2163"
  },
  "iconWidth": 20,
  "horizontalAlign": "center",
  "textDecoration": "none",
  "visible": false,
  "fontWeight": "normal",
  "iconHeight": 20,
  "cursor": "hand",
  "paddingBottom": 5,
  "paddingTop": 5
 }
], 
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_6FF44914_6009_15B6_41C6_2AF5BD67FE88.set('selectedIndex', 0)",
 "id": "rootPlayer",
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "mobileMipmappingEnabled": false,
 "borderRadius": 0,
 "borderSize": 0,
 "width": "100%",
 "minWidth": 20,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "vrPolyfillScale": 0.5,
 "shadow": false,
 "minHeight": 20,
 "paddingRight": 0,
 "height": "100%",
 "scripts": {
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "getKey": function(key){  return window[key]; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "existsKey": function(key){  return key in window; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; }
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "propagateClick": false,
 "data": {
  "name": "Player7285"
 },
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "desktopMipmappingEnabled": false,
 "paddingBottom": 0,
 "paddingTop": 0
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
