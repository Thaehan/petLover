package com.devicesetting

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule

class EventSender(context: ReactApplicationContext) {
  private var reactContext: ReactApplicationContext? = context

  fun setReactContext(context: ReactApplicationContext?) {
    if (context == null) {
      Log.d("UtilInbody", "setReactContext, context == null")
    }
    reactContext = context
  }

  fun getReactContext(): ReactApplicationContext? {
    if (reactContext == null) {
      Log.d("UtilInbody", "context == null 2")
    }
    return reactContext
  }

  fun sendEvent(eventName: String, mapData: WritableMap) {
    try {
      Log.d("UtilInbody", "context == null 2")
      print(eventName)
      print(mapData)
      reactContext
              ?.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
              ?.emit(eventName, mapData)
    } catch (e: RuntimeException) {
      Log.e(
              "ERROR",
              "java.lang.RuntimeException: Trying to invoke JS before CatalystInstance has been set!"
      )
    }
  }
}
