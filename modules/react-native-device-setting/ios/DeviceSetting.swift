import Foundation
import React
import CoreLocation

@objc(DeviceSetting)
class DeviceSetting: RCTEventEmitter, CLLocationManagerDelegate {

    private let locationManager = CLLocationManager()

    override static func requiresMainQueueSetup() -> Bool {
        return true
    }

    override func supportedEvents() -> [String]! {
        return ["COMPASS_EVENT"]
    }

    @objc func startListeningCompass() -> Void {
        locationManager.delegate = self
        locationManager.startUpdatingHeading()
    }

    @objc func stopListeningCompass() -> Void {
        locationManager.stopUpdatingHeading()
    }

    func locationManager(_ manager: CLLocationManager, didUpdateHeading newHeading: CLHeading) {
        let headingData = ["trueHeading": newHeading.trueHeading, "magneticHeading": newHeading.magneticHeading]
        self.sendEvent(withName: "COMPASS_EVENT", body: headingData)
    }

    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
        print("Failed to get heading: \(error.localizedDescription)")
    }
}
