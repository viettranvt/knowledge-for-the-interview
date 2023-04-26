# REPLAY ATTACH API

## client

key = 1
time = send request get data time server
nonce = sessionId || random
signClient = md5(uid=100&time=19h00&nonce=12456 + key) xxxx
https://api.com?uid=100&time=19h00&nonce=12456&sig=xxxx

## server

key=1
signServer = md5(uid=100&time=19h00&nonce=12456 + key) xxxx

if (now = time > 1) {
return false
}

if (redis.hasKey(nonce)) {
return false
}

if (signClient === signServer) {
return data
}

//process database

## MÃ HÓA MD5, SHA1, DES, AES, RSA

## MÃ HÓA và CHỮ KÝ

- Mã hóa ngăn chặn thông tin rò rỉ
- Chữ ký ngăn thông tin giả mạo

## MÃ HÓA RSA (Không đối xứng)

- Gửi Key sẽ gửi bằng duờng truyền mạng
- Quy trình mã hóa

![replay-attack](https://i.imgur.com/encY1Mh.png)

- Quy trình mã hóa và chữ ký

![replay-attack](https://i.imgur.com/UgteDIc.png)

## Thuật toán trao đổi key DIFFIE HELLMAN

---

## Go Home [click here](/README)
