# Dự án Tìm danh sách tìm kiếm Momo ⭐️.

# Thông số môi trường 🔥:
- JDK 17.
- Node 18.

# Chi tiết về bài toán 🔥:
1. Phần yêu cầu kỹ thuật: Đã hoàn thành đầy đủ.
2. Phần tính năng nâng cao:
- Chi tiết về cách tối ưu phần trải nghiệm người dùng của chức năng tìm kiếm:
   - Sử dụng kỹ thuật Debounce: Xử lý việc tìm kiếm sau khi người dùng ngừng nhập, giảm thiểu đáng kể số lượt tìm kiếm dư thừa.
   - Tối ưu thuật toán tìm kiếm: Ý tưởng thuật toán (Chi tiết trong file Algorithm.ts): Gọi n là số lượng phần tử trong mảng, lặp qua mảng 1 lần để lọc những phần tử để lấy ra những phần tử phù hợp kèm theo là thông tin kết quả phù hợp nhất dựa trên thứ tự xuất hiện đầu tiên của query. Sau đó, chạy thêm một vòng lặp để có thể sort nhờ hàm sort trong js bằng việc so sánh phần tử được thêm vào.
   - Sử dụng thư viện react-native-flash-list: Cho một hiệu năng tổng thể khi render danh sách cao hơn hiệu năng của Flatlist của ReactNative.
   - Sử dụng thư viện react-native-fast-image: Cho một hiệu năng cao hơn Image của React Native với một số ảnh có kích thước lớn chẳng hạn.
   - Sử dụng MMVK thay vì các storage khác để lưu trữ offline cho một hiệu năng rất cao, có thể chạy đồng bộ tác vụ được.
- Implement cache: Sử dụng React-Query để cache và quản lý thời gian làm mới.
- Hỗ trợ làm việc offline: Sử dụng MMKV-storage cho hiệu năng đọc ghi rất cao và React-Query hỗ trợ quản lý trạng thái sau với những lần fetch. Để đảm bảo dữ liệu offline luôn được mới nhất nhưng không tốn quá nhiều tài nguyên cho việc thực hiện lưu dữ liệu offline, em đã thực hiện: Sử dụng useQuery để gọi API -> với lần đầu tiên success hoặc những lần thực hiện refetch sẽ thực hiện thay đổi dữ liệu offline trong máy.
- Hiển thị chỉ báo khi dữ liệu đang được tải: Em không hiểu yêu cầu của ý này lắm ạ.
- Unit testing: Do việc tích hợp unit test với các thư viện khác khá mất thời gian nên em xin phép được bỏ qua ạ. Em có dự án đã viết Test cơ bản bằng Jest tại [Twitter Clone](https://github.com/Thaehan/Twitter-clone/tree/master/__test__).

# Lời cảm ơn 🙇‍♂️:

Xin phép em được gửi đến đội ngũ tuyển dụng của Momo và đặc biệt là các tiền bối đi trước một lời cảm ơn trân trọng nhất. Bài toán trên là một bài toán thông dụng, được sử dụng trong nhiều trường hợp thực tiễn. Em xin chân thành cảm ơn các anh đã gửi đến em một bài toán rất hay ạ.

Em xin chân thành cảm ơn!
