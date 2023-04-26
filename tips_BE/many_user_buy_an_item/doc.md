# Many user order an item

- Cache vào redis vì redis có tốc độ gấp 100k lần so với sql và là quy trình đơn luồng (mỗi lần xử lý một yêu cầu, còn lại sẽ đưa vào hàng chờ)
- Nếu có đồng thơi nhiều người đặt hàng cùng lúc thì nên dùng **setnx** vì nó chỉ set một lần cùng lúc (tính nguyên tử)

- test benchmark: **ab -n n -c c url** //n là số lượng request, c số lượng request cùng một thời điểm, url la link

---

## Go Home [click here](/README)
