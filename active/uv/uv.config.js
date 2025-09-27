self.__uv$config = {
    prefix: '/t0mb/active/go/',
    bare:'https://qms.diddy.ptchat.net/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/t0mb/active/uv/uv.handler.js',
    bundle: '/t0mb/active/uv/uv.bundle.js',
    config: '/t0mb/active/uv/uv.config.js',
    sw: '/t0mb/active/uv/uv.sw.js',
};
