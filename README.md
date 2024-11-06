# Base react-native application ⭐️.

# Thông số môi trường 🔥:
- JDK 17.
- Node 18.
- React Native 0.74.3

# Chi tiết 🔥:
1. Project structure:
```PlainText
├── android: Thư mục quản lý source Android.
├── ios: Thư mục quản lý source iOS.
├── assets: Một số assets liên quan đến setup đặc thù của dự án (font, ...).
├── modules: Các native modules được viết ở đây.
└── src
    ├── Api (Quản lý Api)
    │   ├── index.ts: Implement axios instance cho các interceptors.
    │   ├── AuthApi: Axios api để call cho module Auth.
    │   ├── MeetApi: Axios api để call cho module Meeting.
    │   └── ...
    ├── Assets (Quản lý tài nguyên local)
    │   ├── Images: Quản lý hình ảnh local của ứng dụng.
    │   ├── Svgs: Quản lý hình ảnh svg của ứng dụng.
    │   └── Lotties: Quản lý hình ảnh động lottie của ứng dụng.
    ├── Components (Quản lý các component dùng chung)
    │   ├── Button
    │   ├── TextField
    │   ├── Text
    │   ├── DatePicker
    │   ├── Icon
    │   ├── ImageView
    │   └── ...
    ├── Constant (Các hằng số của ứng dụng)
    │   ├── SreenKeys: Tên các màn hình.
    │   ├── QueryKeys: Tên các Keys quản lý với Tanstack/query.
    │   └── Commons: Các thông tin liên quan đến kích thước màn hình cùng các thiết lập mặc định của một số dịch vụ.
    ├── Hooks: Các Hooks sử dụng chung cho nhiều trường hợp (VD: debounce, dispatch, focusScreen, ...)
    ├── Navigations (Quản lý react-navigation)
    │   ├── MainNavigator: Navigator khởi tạo.
    │   ├── DrawerNavigator: Navigator cho Drawer.
    │   ├── BottomNavigator: Navigator cho stack sau khi đăng nhập.
    │   └── StackNavigator: Các StackNavigator cho từng BottomTab.
    ├── Screens (Quản lý các màn hình, mỗi màn hình là một thư mục)
    │   ├── Screen1
    │   │   ├── Components: Các component riêng của màn hình được dựng trên Base Component.
    │   │   ├── Services: Các hooks và modules xử lý dữ liệu.
    │   │   └── Screen1.tsx: Export Component màn hình.
    │   └── Screen2 ...
    ├── Store (Quản lý redux)
    │   ├── mmkvStorage
    │   ├── index.ts: Setup store (redux, redux-persist, mmkv, middleWares).
    │   ├── Sagas: sagas.
    │   └── Slices: Các slices sử dụng toolkits.
    ├── Theme (Quản lý cài đặt theme)
    ├── Translation (Quản lý đa ngôn ngữ)
    │   ├── Localization: Cài đặt định dạng ngày tháng của vùng miền với dayjs.
    │   └── Languages: Cài đặt ngôn ngữ với i18n.
    └── Utils (Quản lý khai báo các hàm dùng chung, các dạng convert phổ biến).
```
2. Chi tiết các công nghệ sử dụng:
- MMKV storage: Một dạng LocalStorage nhanh hơn, mạnh hơn AsyncStorage tới nghìn lần. Cùng với việc có thể kết hợp với redux tạo ra một bộ công cụ mạnh mẽ quản lý trạng thái.
- Tanstack/Query: Một thư viện quản lý trạng thái bất đồng bộ xử lý đặc thù cho fetchApi kết hợp cùng axios.
- React Native Bottom Sheet: Thư viện quản lý bottom sheet hiệu quả thay vì các Modal truyền thống.
- Lottie React Native: Thư viện chạy loạt ảnh animation dựa trên bộ thư viện Lottie.
- Shopify/Flashlist: Thư viện render các list một cách hiệu quả.
- Việc triển khai theo mô hình module sẽ đóng gói các các phần, hạn chế tối đa sự liên quan giữa các module, tách biệt riêng rẽ, rõ ràng giữa các phần.
- Sử dụng kiến trúc Model-View-ViewModel cho triển khai các màn hình để tối ưu khả năng đọc hiểu của code.
3. Tham chiếu:
- [Functional Programming](https://www.geeksforgeeks.org/functional-programming-paradigm)
- [MMKV storage](https://github.com/mrousavy/react-native-mmkv)
- [Tanstack/query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [Model-View-ViewModel](https://learn.microsoft.com/en-us/dotnet/architecture/maui/mvvm)
# Lời cảm ơn 🙇‍♂️:
Em xin chân thành cảm ơn anh đã bỏ thời gian quan tâm đến project này. Em hy vọng rằng với kiến thức và kinh nghiệm em tích luỹ được sẽ giúp ích cho dự án sắp tới của mình.
