package com.devicesetting

import android.content.Context
import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorEventListener
import android.hardware.SensorManager
import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext

class CompassModule : SensorEventListener {
  private var sensorManager: SensorManager? = null
  private var accelerometerSensor: Sensor? = null
  private var magnetometerSensor: Sensor? = null
  private var promise: ((Double) -> Unit)? = null
  private var listener = null

  private val eventName = "COMPASS_EVENT"
  private val accelerometerReading = FloatArray(3)
  private val magnetometerReading = FloatArray(3)
  private val rotationMatrix = FloatArray(9)
  private val orientationAngles = FloatArray(3)

  private var eventSender: EventSender? = null

  constructor(context: ReactApplicationContext) {
    eventSender = EventSender(context)
    sensorManager = context.getSystemService(Context.SENSOR_SERVICE) as SensorManager
    accelerometerSensor = sensorManager?.getDefaultSensor(Sensor.TYPE_ACCELEROMETER)
    // magnetometerSensor = sensorManager.getDefaultSensor(Sensor.TYPE_MAGNETIC_FIELD)
    if (magnetometerSensor == null || accelerometerSensor == null) {
      Log.e("CompassSensorManager", "Compass sensor is not available")
    } else {
      Log.i("CompassSensorManager", "Compass sensor is available")
    }
  }

  fun startListening(onHeadingUpdated: (Double) -> Unit) {
    promise = onHeadingUpdated
    accelerometerSensor?.let {
      sensorManager?.registerListener(this, it, SensorManager.SENSOR_DELAY_UI)
    }
    magnetometerSensor?.let {
      sensorManager?.registerListener(this, it, SensorManager.SENSOR_DELAY_UI)
    }
  }

  fun stopListening() {
    sensorManager?.unregisterListener(this)
  }

  override fun onSensorChanged(event: SensorEvent?) {
    var mapData = Arguments.createMap()

    if (event != null) {
      var eventData = EventData(mapData)
      eventSender?.sendEvent(eventName, eventData)
      mapData.putDouble("x", event.values.get(0).toDouble())
      mapData.putDouble("y", event.values.get(1).toDouble())
      mapData.putDouble("z", event.values.get(2).toDouble())
    }

    event?.let {
      when (it.sensor.type) {
        Sensor.TYPE_ACCELEROMETER ->
                System.arraycopy(it.values, 0, accelerometerReading, 0, accelerometerReading.size)
        Sensor.TYPE_MAGNETIC_FIELD ->
                System.arraycopy(it.values, 0, magnetometerReading, 0, magnetometerReading.size)
      }

      // Tính toán hướng la bàn nếu cả hai cảm biến đều hoạt động
      if (SensorManager.getRotationMatrix(
                      rotationMatrix,
                      null,
                      accelerometerReading,
                      magnetometerReading
              )
      ) {
        SensorManager.getOrientation(rotationMatrix, orientationAngles)
        val azimuthInRadians = orientationAngles[0]
        val azimuthInDegrees = Math.toDegrees(azimuthInRadians.toDouble())
        promise?.invoke(azimuthInDegrees)
      }
    }
  }

  override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {
    // Không cần xử lý thay đổi độ chính xác
  }
}
