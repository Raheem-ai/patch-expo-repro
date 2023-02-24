const config = {
	"expo": {
	  "name": "patch-expo-repro",
	  "slug": "patch",
	  "owner": "raheem-ai",
	  "version": "1.0.0",
	  "orientation": "portrait",
	//   "icon": "./assets/patch_default_logo.png",
	  "scheme": "patch-expo-repro",
	  "splash": {
		// "image": "./assets/splash.png",
		"resizeMode": "cover",
		"backgroundColor": "#ffffff"
	  },
	  "plugins": [

	  ],
	  "updates": {
		"fallbackToCacheTimeout": 0
	  },
	  "assetBundlePatterns": [
		"**/*"
	  ],
	  "ios": {
		"supportsTablet": true,
		"infoPlist": {
		  "NSLocationAlwaysUsageDescription": "testing",
		  "UIBackgroundModes": [
			"location",
			"fetch",
			"remote-notification"
		  ]
		},
		"buildNumber": "1",
		"bundleIdentifier": "ai.raheem.patch.repro",
		"config": {
		}
	  },
	  "android": {
		// "icon": "./assets/patch_default_logo.png",
		// "googleServicesFile": servicesJsonPath,
		"versionCode": 1,
		// "adaptiveIcon": {
		//   "foregroundImage": "./assets/patch_adaptive_logo_foreground.png",
		//   "backgroundImage": "./assets/patch_adaptive_logo_background.png"
		// },
		"package": "ai.raheem.patch.repro",
		"permissions": [],
		"config": {
		}
	  },
	  "extra": {
		"eas": {
			"projectId": "ae020710-1c9f-46da-9651-9003dc40fc83"
		}
	  },
	  "runtimeVersion": {
		"policy": "nativeVersion"
	  },
	  "updates": {
		"url": "https://u.expo.dev/ae020710-1c9f-46da-9651-9003dc40fc83"
	  }
	}
}

// console.log(config)

export default config