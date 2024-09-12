package com.devicesetting

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap

class EventData {
  private var eventData: WritableMap = Arguments.createMap()

  constructor(initData: WritableMap?) {
    if (initData === null) {
      return
    }
    eventData = initData
  }

  fun getEventData(): WritableMap {
    return eventData
  }
}
