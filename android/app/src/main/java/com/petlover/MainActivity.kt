package com.petlover

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.zoontek.rnbootsplash.RNBootSplash

// import io.wazo.callkeep.RNCallKeepModule

class MainActivity : ReactActivity() {
  // override fun onRequestPermissionsResult(
  //         requestCode: Int,
  //         permissions: Array<out String>,
  //         grantResults: IntArray
  // ) {
  //   super.onRequestPermissionsResult(requestCode, permissions, grantResults)
  //   when (requestCode) {
  //     RNCallKeepModule.REQUEST_READ_PHONE_STATE -> {
  //       RNCallKeepModule.onRequestPermissionsResult(requestCode, permissions, grantResults)
  //     }
  //   }
  // }

  // Setup react-native boot-splash
  override fun onCreate(savedInstanceState: Bundle?) {
    RNBootSplash.init(this, R.style.BootTheme) // ⬅️ initialize the splash screen
    super.onCreate(savedInstanceState) // super.onCreate(null) with react-native-screens
  }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "PetLover"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
          DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
