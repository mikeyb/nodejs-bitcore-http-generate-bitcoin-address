'use strict';
const
    bitcore = require('bitcore'),
    http    = require('http'),
    HDPub   = new bitcore.HDPublicKey('xpub6CcENgpegLm4DxzSryveqxNDNSic5o45x18NT9ZvYbn6pSvB92YtQdubAmEXGMxNfGLzdv7qDZQkub6E8NJiAcLWE5v3xjaRumtcEprUhLS');
 
http.createServer( function (req, res) {
    var method = req.method;
    var url    = req.url;
    var urlre  = /^\d+$/;
    var urlInt = null;
 
    if (! req.method === 'GET' ) {
        res.writeHead( 400, {'Content-Type': 'text/plain'} );
        res.end( 'You sent a bad request' );
    };
 
    url = url.substr(1);
    if (! url.match(urlre) ) {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.end( 'You sent a bad request' );
    };

    urlInt = parseInt(url);
 
    var address = new bitcore.Address( HDPub.derive(urlInt).publicKey, bitcore.Networks.livenet );
 
    res.writeHead( 200, {'Content-Type': 'text/plain'} );
    res.end( '{ "Address" : "' + address + '"}' );
 
}).listen(18332, '127.0.0.1');
