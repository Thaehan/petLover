import Foundation
import UIKit
import React

@objc(ScreenBrightness)
class ScreenBrightness: NSObject {

  @objc
  func setBrightness(_ value: CGFloat, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    DispatchQueue.main.async {
      UIScreen.main.brightness = value
      resolve("Brightness set successfully")
    }
  }

  @objc
  func getBrightness(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    DispatchQueue.main.async {
      let brightness = UIScreen.main.brightness
      resolve(brightness)
    }
  }
}
