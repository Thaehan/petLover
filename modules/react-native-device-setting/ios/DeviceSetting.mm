#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(DeviceSetting, NSObject)

// RCT_EXTERN_METHOD(multiply:(float)a withB:(float)b
//                  withResolver:(RCTPromiseResolveBlock)resolve
//                  withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(startListeningCompass)
RCT_EXTERN_METHOD(stopListeningCompass)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
