package com.devicesetting

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class DeviceSettingModule(reactContext: ReactApplicationContext) :
        ReactContextBaseJavaModule(reactContext) {
  private val compassSensorManager = CompassModule(reactContext)

  override fun getName(): String {
    return "DeviceSetting"
  }

  @ReactMethod
  fun startListeningCompass(promise: Promise) {
    compassSensorManager.startListening { azimuth -> promise.resolve(azimuth) }
  }

  @ReactMethod
  fun stopListeningCompass() {
    compassSensorManager.stopListening()
  }

  @Override fun removeListeners() {}
}
