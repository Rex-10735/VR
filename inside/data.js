var APP_DATA = {
  "scenes": [
    {
      "id": "0--",
      "name": "生技園區-側門",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2643846408455648,
          "pitch": 0.31552803865956847,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9356025576874423,
          "pitch": 0.006106664367763415,
          "title": "???",
          "text": "???"
        }	  
	  ]
    },
    {
      "id": "1-",
      "name": "走廊",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06585003569210457,
          "pitch": 0.31063036786725995,
          "rotation": 0,
          "target": "2-"
        },
        {
          "yaw": -1.6841306991281737,
          "pitch": 0.23850409316155563,
          "rotation": 0,
          "target": "0--"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4423758591623663,
          "pitch": -0.10477734434561015,
          "title": "早旬咖啡廳",
          "text": "一家咖啡廳"
        }
      ]
    },
    {
      "id": "2-",
      "name": "咖啡廳",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0691087114880826,
          "pitch": 0.1966772864001598,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "inside",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
