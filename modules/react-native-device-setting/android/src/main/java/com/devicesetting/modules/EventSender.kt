package com.devicesetting

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.modules.core.DeviceEventManagerModule

class EventSender(context: ReactApplicationContext) {
  private var reactContext: ReactApplicationContext? = context

  fun sendEvent(eventName: String, eventData: EventData) {
    try {
      reactContext
              ?.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
              ?.emit(eventName, eventData.getEventData())
    } catch (e: RuntimeException) {
      e.printStackTrace()
    }
  }
}
