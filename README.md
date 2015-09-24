# nodejs-bitcore-http-generate-bitcoin-address
Simple http server running in nodejs using the bitcore library to securely generate bitcoin addresses with HD public key

### Requirements
nodejs

bitcore (npm install bitcore)

sudo/root rights (to bind to a port)

### Usage
nodejs --harmony keyserver.js

### Example Output
<pre>
telnet localhost 18332
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
GET /1 HTTP/1.1
host: localhost

HTTP/1.1 200 OK
Content-Type: text/plain
Date: Thu, 24 Sep 2015 18:27:14 GMT
Connection: keep-alive
Transfer-Encoding: chunked

33
{ "Address" : "15a9kchSAaHbfLemRAm4piFoY68yoLUjwZ"}
0

GET /a HTTP/1.1
host: localhost

HTTP/1.1 400 Bad Request
Content-Type: text/plain
Date: Thu, 24 Sep 2015 18:27:30 GMT
Connection: keep-alive
Transfer-Encoding: chunked

16
You sent a bad request
0

GET /123 HTTP/1.1
host: localhost

HTTP/1.1 200 OK
Content-Type: text/plain
Date: Thu, 24 Sep 2015 18:27:44 GMT
Connection: keep-alive
Transfer-Encoding: chunked

33
{ "Address" : "16xi9AvbFwEJnvSdLpnCsjD8qh2VE8p7ik"}
0
</pre>
