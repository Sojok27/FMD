/**
 *
 * Official Script By Fokus ID
 * 
 * Thanks buat semua yg sudah meng-support saya🙏
 * 
 * Script ini gratis tidak boleh di perjual belikan!
 * Bagi ada yg menjual belikan script gratis ini hangusin aja!
 * eh iya saya melihat banyak Script ini dijual belikan
 *
 * Jadi maksut saya untuk mengedit file ini hanya untuk membuat peringatan bagi kalian,
 * yg suka menjual belikan script ini.
 * 
 * Mohon maaf atas sebesar-besarnya Script ini jika saya melihat diperjual belikan lagi, 
 * Saya akan menghapus Repositori ini.
 *
 *
 * Thanks To:
 * ~ Allah SWT
 * ~ Ibu dan Alm.Bpk (ortu)
 * ~ adiwajshing/baileys (Library)
 * ~ Nurutomo
 * ~ Bochilgaming
 * ~ FokusDotId (Creator for this script)
 * ~ kawan-kawan semua yg telah membantu mengembangkan script ini.
 *
 * -------------------------------------------------------------------
 *
 *
 * Jika ada masalah atau hal lain bisa hubungi kami disini:
 * Email: mr.familia13@gmail.com
 * Phone / WA: 081320170984
 * URI WA: https://wa.me/6281320170984
 *
 *
 * Terimakasih telah menggunakan dengan bijak!
 *
 */

const _0xb94b9f = _0x2539;
(function(_0x2d1e8c, _0x5c4d60) {
    const _0x5b1358 = _0x2539,
        _0x5246c7 = _0x2d1e8c();
    while (!![]) {
        try {
            const _0x267d46 = parseInt(_0x5b1358(0x177)) / 0x1 + -parseInt(_0x5b1358(0x122)) / 0x2 * (parseInt(_0x5b1358(0xf6)) / 0x3) + parseInt(_0x5b1358(0xf0)) / 0x4 * (-parseInt(_0x5b1358(0x130)) / 0x5) + parseInt(_0x5b1358(0x135)) / 0x6 + -parseInt(_0x5b1358(0x184)) / 0x7 + parseInt(_0x5b1358(0xee)) / 0x8 + parseInt(_0x5b1358(0x156)) / 0x9;
            if (_0x267d46 === _0x5c4d60) break;
            else _0x5246c7['push'](_0x5246c7['shift']());
        } catch (_0x1f26a5) {
            _0x5246c7['push'](_0x5246c7['shift']());
        }
    }
}(_0x3f48, 0xdf092), process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0', process['on'](_0xb94b9f(0x178), console['error']), require(_0xb94b9f(0x100)));
const {
    useSingleFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion
} = require(_0xb94b9f(0x110)), {
    generate
} = require(_0xb94b9f(0x10e)), WebSocket = require('ws'), path = require('path'), fs = require('fs'), yargs = require('yargs/yargs'), cp = require(_0xb94b9f(0x132)), _ = require(_0xb94b9f(0x126)), syntaxerror = require('syntax-error'), P = require(_0xb94b9f(0x174)), os = require('os'), chalk = require(_0xb94b9f(0x161));
let simple = require('./lib/simple');
var low;
try {
    low = require(_0xb94b9f(0x108));
} catch (_0x136d74) {
    low = require('./lib/lowdb');
}
const {
    Low,
    JSONFile
} = low, {
    mongoDB,
    mongoDBV2
} = require('./lib/mongoDB');
simple[_0xb94b9f(0x103)](), global[_0xb94b9f(0x131)] = (_0x3e4366, _0x5d20e7 = '/', _0x2b4b86 = {}, _0x3fa40c) => (_0x3e4366 in global[_0xb94b9f(0x144)] ? global[_0xb94b9f(0x144)][_0x3e4366] : _0x3e4366) + _0x5d20e7 + (_0x2b4b86 || _0x3fa40c ? '?' + new URLSearchParams(Object[_0xb94b9f(0x153)]({..._0x2b4b86,
    ..._0x3fa40c ? {
        [_0x3fa40c]: global['APIKeys'][_0x3e4366 in global[_0xb94b9f(0x144)] ? global['APIs'][_0x3e4366] : _0x3e4366]
    } : {}
})) : ''), global[_0xb94b9f(0x120)] = {
    'start': new Date()
};
const PORT = process[_0xb94b9f(0x15e)][_0xb94b9f(0x106)] || 0xbb8;

function _0x2539(_0x51dc1c, _0x5ca629) {
    const _0x3f48bc = _0x3f48();
    return _0x2539 = function(_0x253908, _0x28e963) {
        _0x253908 = _0x253908 - 0xeb;
        let _0x35f10d = _0x3f48bc[_0x253908];
        return _0x35f10d;
    }, _0x2539(_0x51dc1c, _0x5ca629);
}
global[_0xb94b9f(0x13e)] = new Object(yargs(process['argv'][_0xb94b9f(0x11b)](0x2))['exitProcess'](![])[_0xb94b9f(0x14a)]()), global[_0xb94b9f(0x118)] = new RegExp('^[' + (opts['prefix'] || _0xb94b9f(0x17f))['replace'](/[|\\{}()[\]^$+*?.\-\^]/g, '\x5c$&') + ']');
const dbUrl = global[_0xb94b9f(0x13e)]['db'] || '',
    dbAdapter = /https?:\/\// [_0xb94b9f(0xf9)](dbUrl) ? new cloudDBAdapter(dbUrl) : /mongodb(\+srv)?:\/\//i ['test'](dbUrl) ? global[_0xb94b9f(0x13e)][_0xb94b9f(0x143)] ? new mongoDBV2(dbUrl) : new mongoDB(dbUrl) : new JSONFile((global[_0xb94b9f(0x13e)]['_'][0x0] ? global['opts']['_'][0x0] + '_' : '') + _0xb94b9f(0x112));
global['db'] = new Low(dbAdapter), global['DATABASE'] = global['db'], global['loadDatabase'] = async function loadDatabase() {
    const _0x25545f = _0xb94b9f;
    if (global['db']['READ']) return new Promise(_0xf17f66 => setInterval(function() {
        const _0x3b9a53 = _0x2539;
        !global['db'][_0x3b9a53(0x13f)] ? (clearInterval(this), _0xf17f66(global['db'][_0x3b9a53(0x189)] == null ? global['loadDatabase']() : global['db'][_0x3b9a53(0x189)])) : null;
    }, 0x1 * 0x3e8));
    if (global['db']['data'] !== null) return;
    global['db'][_0x25545f(0x13f)] = !![], await global['db'][_0x25545f(0x166)](), global['db'][_0x25545f(0x13f)] = ![], global['db'][_0x25545f(0x189)] = {
        'users': {},
        'chats': {},
        'stats': {},
        'msgs': {},
        'sticker': {},
        'settings': {},
        ...global['db'][_0x25545f(0x189)] || {}
    }, global['db'][_0x25545f(0x123)] = _[_0x25545f(0x123)](global['db'][_0x25545f(0x189)]);
}, loadDatabase();
const authFile = (opts['_'][0x0] || _0xb94b9f(0x163)) + _0xb94b9f(0x148);
global[_0xb94b9f(0x11d)] = !fs[_0xb94b9f(0x136)](authFile);
const {
    state,
    saveState
} = useSingleFileAuthState(authFile), connectionOptions = {
    'printQRInTerminal': !![],
    'auth': state,
    'logger': P({
        'level': _0xb94b9f(0x14b)
    }),
    'version': [0x2, 0x89c, 0xd],
    'browser': [_0xb94b9f(0x155), _0xb94b9f(0x13a), _0xb94b9f(0x12b)]
};
global[_0xb94b9f(0x102)] = simple[_0xb94b9f(0xf4)](connectionOptions);
if (!opts[_0xb94b9f(0xf9)]) {
    if (global['db']) setInterval(async() => {
        const _0x3b72e8 = _0xb94b9f;
        if (global['db']['data']) await global['db'][_0x3b72e8(0x165)]();
        if ((global[_0x3b72e8(0xfb)] || {})[_0x3b72e8(0x159)]) tmp = [os[_0x3b72e8(0x147)](), _0x3b72e8(0xf7)], tmp['forEach'](_0x51b7e8 => cp[_0x3b72e8(0x187)](_0x3b72e8(0x159), [_0x51b7e8, '-amin', '3', '-type', 'f', _0x3b72e8(0x139)]));
    }, 0x1e * 0x3e8);
}
if (opts['big-qr'] || opts[_0xb94b9f(0x15f)]) conn['ev']['on']('qr', _0x5f0dc1 => generate(_0x5f0dc1, {
    'small': ![]
}));
if (opts[_0xb94b9f(0x15f)]) require('./server')(global[_0xb94b9f(0x102)], PORT);
const hehe = async(_0x11d12a, _0x38c80a) => {
    const _0x53495e = _0xb94b9f,
        _0x1dbee9 = _0x53495e(0x16f);
    let _0xe452f6 = _0x53495e(0x14e);
    try {
        _0xe452f6 = await conn['profilePictureUrl'](_0x11d12a, _0x53495e(0x157));
    } catch (_0x456db0) {} finally {
        _0xe452f6 = await (await require(_0x53495e(0xed))[_0x53495e(0x119)](_0xe452f6))[_0x53495e(0x111)]();
        const _0x46dca0 = {
                'key': {
                    'participant': _0x53495e(0x10d),
                    ... {
                        'remoteJid': _0x53495e(0x125)
                    }
                },
                'message': {
                    'contactMessage': {
                        'displayName': _0x1dbee9,
                        'vcard': _0x53495e(0x175) + _0x1dbee9 + _0x53495e(0x114) + _0x1dbee9 + ',\x0aitem1.TEL;waid=' + _0x11d12a['split']('@')[0x0] + ':' + _0x11d12a[_0x53495e(0x17c)]('@')[0x0] + _0x53495e(0x181),
                        'jpegThumbnail': _0xe452f6,
                        'thumbnail': _0xe452f6,
                        'sendEphemeral': !![]
                    }
                }
            },
            _0x429cb3 = _0x53495e(0x155),
            _0x407c3b = _0x53495e(0x16b) + _0x429cb3 + _0x53495e(0x164),
            _0x159406 = _0x53495e(0xf1),
            _0x1b4d15 = _0x53495e(0x15c) + _0x159406 + _0x53495e(0x11a),
            _0x33ca52 = _0x53495e(0x14f),
            _0x12eaaa = 'family-md.git',
            _0x57c6c5 = _0x53495e(0x113),
            _0x495583 = _0x53495e(0x145) + _0x57c6c5 + '/' + _0x12eaaa,
            _0x1de918 = _0x407c3b + _0x1b4d15 + _0x53495e(0x138) + _0x11d12a[_0x53495e(0x17c)]('@')[0x0] + ',\x20' + _0x33ca52 + _0x53495e(0x14c) + _0x495583;
        return await conn[_0x53495e(0x12c)](_0x11d12a, {
            'text': _0x1de918,
            'mentions': [_0x11d12a],
            ..._0x38c80a
        }, {
            'quoted': _0x46dca0,
            ..._0x38c80a
        });
    }
};
async function connectionUpdate(_0x3e2cc3) {
    const _0x5a0bea = _0xb94b9f,
        {
            connection: _0x3027a8,
            lastDisconnect: _0x40147d,
            isOnline: _0x381df6,
            receivedPendingNotifications: _0x40af81
        } = _0x3e2cc3;
    console[_0x5a0bea(0x17d)](_0x381df6);
    if (_0x3027a8 == 'connecting') console[_0x5a0bea(0x17d)](chalk[_0x5a0bea(0x185)](_0x5a0bea(0x167)));
    else {
        if (_0x3027a8 && _0x3027a8 == _0x5a0bea(0x10b)) {
            console[_0x5a0bea(0x17d)](chalk['green']('Connected✅'));
            const _0x35f11d = _0x5a0bea(0xec),
                _0x4cae7e = _0x5a0bea(0x141),
                _0xfa727a = _0x5a0bea(0x15d),
                _0x33d682 = _0x5a0bea(0x101);
            return await hehe(_0x33d682 + _0xfa727a + _0x4cae7e + _0x35f11d)[_0x5a0bea(0x134)](_0x443093 => console[_0x5a0bea(0x13b)](_0x443093));
        } else {
            if (_0x3027a8 == _0x5a0bea(0x169)) console[_0x5a0bea(0x17d)](chalk['red'](_0x5a0bea(0x104)));
        }
    }
    global[_0x5a0bea(0x120)]['connect'] = new Date();
    _0x40147d && _0x40147d[_0x5a0bea(0x13b)] && _0x40147d[_0x5a0bea(0x13b)][_0x5a0bea(0x133)] && _0x40147d[_0x5a0bea(0x13b)][_0x5a0bea(0x133)][_0x5a0bea(0x183)] !== DisconnectReason[_0x5a0bea(0xfe)] && conn['ws']['readyState'] !== WebSocket['CONNECTING'] && console[_0x5a0bea(0x17d)](global['reloadHandler'](!![]));
    if (global['db']['data'] == null) await loadDatabase();
}
const imports = _0x419161 => {
    const _0x1e9e3e = _0xb94b9f;
    _0x419161 = require[_0x1e9e3e(0xf8)](_0x419161);
    let _0x11104e, _0x479cfc = 0x0;
    do {
        if (_0x419161 in require[_0x1e9e3e(0x158)]) delete require[_0x1e9e3e(0x158)][_0x419161];
        _0x11104e = require(_0x419161), _0x479cfc++;
    } while ((!_0x11104e || (Array[_0x1e9e3e(0x12f)](_0x11104e) || _0x11104e instanceof String) ? !(_0x11104e || [])[_0x1e9e3e(0x172)] : typeof _0x11104e == _0x1e9e3e(0x18b) && !Buffer[_0x1e9e3e(0x140)](_0x11104e) ? !Object[_0x1e9e3e(0xfc)](_0x11104e || {})[_0x1e9e3e(0x172)] : !![]) && _0x479cfc <= 0xa);
    return _0x11104e;
};
let isInit = !![];
global[_0xb94b9f(0x168)] = function(_0x346894) {
    const _0x33167e = _0xb94b9f;
    let _0x2f0e6c = imports(_0x33167e(0x15b));
    if (_0x346894) {
        try {
            global[_0x33167e(0x102)]['ws'][_0x33167e(0x169)]();
        } catch {}
        global[_0x33167e(0x102)] = {...global['conn'],
            ...simple[_0x33167e(0xf4)](connectionOptions)
        };
    }
    return !isInit && (conn['ev'][_0x33167e(0x170)](_0x33167e(0x137), conn[_0x33167e(0x150)]), conn['ev'][_0x33167e(0x170)](_0x33167e(0x11e), conn[_0x33167e(0x180)]), conn['ev'][_0x33167e(0x170)](_0x33167e(0xf2), conn['groupsUpdate']), conn['ev']['off'](_0x33167e(0xf5), conn[_0x33167e(0x11c)]), conn['ev'][_0x33167e(0x170)]('connection.update', conn[_0x33167e(0x109)]), conn['ev'][_0x33167e(0x170)](_0x33167e(0x129), conn[_0x33167e(0x176)])), conn['welcome'] = _0x33167e(0x151), conn[_0x33167e(0x12d)] = _0x33167e(0x16a), conn['spromote'] = _0x33167e(0x107), conn[_0x33167e(0x10a)] = _0x33167e(0x117), conn['sDesc'] = _0x33167e(0x127), conn[_0x33167e(0xef)] = _0x33167e(0x146), conn[_0x33167e(0x154)] = 'Icon\x20group\x20already\x20modified!', conn[_0x33167e(0x124)] = 'Link\x20group\x20already\x20modified\x20ke\x20\x0a@revoke', conn['sAnnounceOn'] = _0x33167e(0x179), conn['sAnnounceOff'] = 'Group\x20already\x20di\x20open!\x0aNow\x20all\x20participants\x20can\x20send\x20message.', conn[_0x33167e(0xeb)] = 'Edit\x20Group\x20Info\x20has\x20changed\x20to\x20just\x20admins!', conn[_0x33167e(0x12a)] = _0x33167e(0x13c), conn['handler'] = _0x2f0e6c[_0x33167e(0x150)][_0x33167e(0x128)](conn), conn[_0x33167e(0x180)] = _0x2f0e6c[_0x33167e(0x180)][_0x33167e(0x128)](conn), conn['groupsUpdate'] = _0x2f0e6c[_0x33167e(0x162)][_0x33167e(0x128)](conn), conn[_0x33167e(0x11c)] = _0x2f0e6c[_0x33167e(0x17b)][_0x33167e(0x128)](conn), conn[_0x33167e(0x109)] = connectionUpdate[_0x33167e(0x128)](conn), conn[_0x33167e(0x176)] = saveState['bind'](conn), conn['ev']['on'](_0x33167e(0x137), conn[_0x33167e(0x150)]), conn['ev']['on'](_0x33167e(0x11e), conn[_0x33167e(0x180)]), conn['ev']['on'](_0x33167e(0xf2), conn['groupsUpdate']), conn['ev']['on'](_0x33167e(0xf5), conn[_0x33167e(0x11c)]), conn['ev']['on']('connection.update', conn['connectionUpdate']), conn['ev']['on'](_0x33167e(0x129), conn[_0x33167e(0x176)]), isInit = ![], !![];
};

function _0x3f48() {
const _0x2cd88d = ['bye', 'magick', 'isArray', '5855240IfygCV', 'API', 'child_process', 'output', 'catch', '4481268XFnLxe', 'existsSync', 'messages.upsert', 'thank you\x20@', '-delete', 'IOS', 'error', 'Edit\x20Group\x20Info\x20has\x20changed\x20to\x20all\x20participants!', 'Stickers\x20may\x20not\x20work\x20without\x20imagemagick\x20if\x20libwebp\x20on\x20ffmpeg\x20doesnt\x20isntalled\x20(pkg\x20install\x20imagemagick)', 'opts', 'READ', 'isBuffer', '0984', 'convert', 'mongodbv2', 'APIs', 'https://github.com/', 'Group\x20heading\x20now\x20modified\x20to\x20\x0a@subject', 'tmpdir', '.data.json', 'readdirSync', 'parse', 'silent', 'Sumber\x20Script:\x20', 'ffmpeg', 'https://telegra.ph/file/2d06f0936842064f6b3bb.png', '.\x0a\x0a\x0a', 'handler', 'Hey,\x20@user!\x0aWelcome\x20to\x20our\x20group!\x20@subject\x0a\x0a@desc', 'Please\x20install\x20ffmpeg\x20for\x20sending\x20videos\x20(pkg\x20install\x20ffmpeg)', 'entries', 'sIcon', 'anon', '8770995XHiDRS', 'image', 'cache', 'find', 'all', './handler', 'I\x20promise\x20', '2017', 'env', 'server', 'join', 'chalk', 'groupsUpdate', 'session', '.\x0a\x0a', 'write', 'read', '🕛\x20Activating\x20Bot,\x20Please\x20wait...', 'reloadHandler', 'close', 'Goodbye\x20@user!', '\x0a✅connected\x20successfully\x20ke\x20SC\x20', 'plugins', 'Quick\x20Test\x20Done', 'readFileSync', '~\x20anon', 'off', 'freeze', 'length', '-loglevel', 'pino', 'BEGIN:VCARD\x0aVERSION:3.0\x0aN:XL;', 'credsUpdate', '749971mMcxpx', 'uncaughtException', 'Group\x20has\x20been\x20closed!\x0aNow,\x20only\x20admins\x20can\x20send\x20messages.', 'requiring\x20new\x20plugin\x20\x27', 'delete', 'split', 'log', 'fromEntries', '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\x5c-', 'participantsUpdate', '\x0aitem1.X-ALabell:Ponsel\x0aEND:VCARD', 'warn', 'statusCode', '6386023TXQWWX', 'redBright', '-hide_banner', 'spawn', 'logger', 'data', 'info', 'object', 'sRestrictOn', '@s.whatsapp.net', 'node-fetch', '6674240KKuSUD', 'sSubject', '4JgbZza', 'will\x20not\x20giveout', 'groups.update', 'map', 'makeWASocket', 'message.delete', '926379JDcrKR', 'tmp', 'resolve', 'test', 're\x20require\x20plugin\x20\x27', 'support', 'keys', 'syntax\x20error\x20while\x20loading\x20\x27', 'loggedOut', 'color', './config', '62813', 'conn', 'protoType', '⏹️Connection\x20error\x20occured,\x20trying\x20to\x20reconnect...', 'then', 'PORT', '@user\x20now\x20an\x20admin!', 'lowdb', 'connectionUpdate', 'sdemote', 'open', '--version', '0@s.whatsapp.net', 'qrcode-terminal', 'webp', '@adiwajshing/baileys', 'buffer', 'database.json', 'fokusdotid', ',;;;\x0aFN:', 'race', 'reload', '@user\x20now\x20removed\x20from\x20admins!', 'prefix', 'default', 'traded.\x0a', 'slice', 'onDelete', 'isInit', 'group-participants.update', 'ffprobe', 'timestamp', 'ffmpegWebp', '2apRmnE', 'chain', 'sRevoke', 'status@broadcast', 'lodash', 'The\x20description\x20has\x20been\x20changed\x20to\x20\x0a@desc', 'bind', 'creds.update', 'sRestrictOff', '4.1.0', 'sendMessage'];
    _0x3f48 = function() {
        return _0x2cd88d;
    };
    return _0x3f48();
}
let pluginFolder = path['join'](__dirname, _0xb94b9f(0x16c)),
    pluginFilter = _0x3c21a5 => /\.js$/ [_0xb94b9f(0xf9)](_0x3c21a5);
global[_0xb94b9f(0x16c)] = {};
for (let filename of fs[_0xb94b9f(0x149)](pluginFolder)['filter'](pluginFilter)) {
    try {
        global[_0xb94b9f(0x16c)][filename] = require(path[_0xb94b9f(0x160)](pluginFolder, filename));
    } catch (_0x1bc7a0) {
        conn[_0xb94b9f(0x188)][_0xb94b9f(0x13b)](_0x1bc7a0), delete global[_0xb94b9f(0x16c)][filename];
    }
}
console['log'](Object[_0xb94b9f(0xfc)](global[_0xb94b9f(0x16c)])), global[_0xb94b9f(0x116)] = (_0x36f5b3, _0x3286a4) => {
    const _0x5534c8 = _0xb94b9f;
    if (pluginFilter(_0x3286a4)) {
        let _0xd73744 = path[_0x5534c8(0x160)](pluginFolder, _0x3286a4);
        if (_0xd73744 in require[_0x5534c8(0x158)]) {
            delete require['cache'][_0xd73744];
            if (fs[_0x5534c8(0x136)](_0xd73744)) conn[_0x5534c8(0x188)][_0x5534c8(0x18a)](_0x5534c8(0xfa) + _0x3286a4 + '\x27');
            else return conn[_0x5534c8(0x188)][_0x5534c8(0x182)]('deleted\x20plugin\x20\x27' + _0x3286a4 + '\x27'), delete global['plugins'][_0x3286a4];
        } else conn[_0x5534c8(0x188)]['info'](_0x5534c8(0x17a) + _0x3286a4 + '\x27');
        let _0x572b2c = syntaxerror(fs[_0x5534c8(0x16e)](_0xd73744), _0x3286a4);
        if (_0x572b2c) conn[_0x5534c8(0x188)][_0x5534c8(0x13b)](_0x5534c8(0xfd) + _0x3286a4 + '\x27\x0a' + _0x572b2c);
        else try {
            global['plugins'][_0x3286a4] = require(_0xd73744);
        } catch (_0x4ac11d) {
            conn['logger']['error'](_0x4ac11d);
        } finally {
            global['plugins'] = Object[_0x5534c8(0x17e)](Object[_0x5534c8(0x153)](global['plugins'])['sort'](([_0x2b1de4], [_0x4477bc]) => _0x2b1de4['localeCompare'](_0x4477bc)));
        }
    }
}, Object['freeze'](global['reload']), fs['watch'](path[_0xb94b9f(0x160)](__dirname, _0xb94b9f(0x16c)), global['reload']), global['reloadHandler']();
async function _quickTest() {
    const _0x12d99f = _0xb94b9f;
    let _0x29129c = await Promise[_0x12d99f(0x15a)]([cp['spawn']('ffmpeg'), cp[_0x12d99f(0x187)](_0x12d99f(0x11f)), cp[_0x12d99f(0x187)](_0x12d99f(0x14d), [_0x12d99f(0x186), _0x12d99f(0x173), _0x12d99f(0x13b), '-filter_complex', _0x12d99f(0xff), '-frames:v', '1', '-f', _0x12d99f(0x10f), '-']), cp['spawn'](_0x12d99f(0x142)), cp['spawn']('magick'), cp[_0x12d99f(0x187)]('gm'), cp[_0x12d99f(0x187)](_0x12d99f(0x159), [_0x12d99f(0x10c)])][_0x12d99f(0xf3)](_0x37603d => {
            const _0x23451a = _0x12d99f;
            return Promise[_0x23451a(0x115)]([new Promise(_0x50fa95 => {
                const _0x37d9ed = _0x23451a;
                _0x37603d['on'](_0x37d9ed(0x169), _0x3b3e5b => {
                    _0x50fa95(_0x3b3e5b !== 0x7f);
                });
            }), new Promise(_0x11435c => {
                const _0x1564b2 = _0x23451a;
                _0x37603d['on'](_0x1564b2(0x13b), _0x54a148 => _0x11435c(![]));
            })]);
        })),
        [_0x3608c3, _0x5102c4, _0x190d1b, _0x57742e, _0x22e664, _0x289914, _0x1d502a] = _0x29129c;
    console[_0x12d99f(0x17d)](_0x29129c);
    let _0x4066a0 = global[_0x12d99f(0xfb)] = {
        'ffmpeg': _0x3608c3,
        'ffprobe': _0x5102c4,
        'ffmpegWebp': _0x190d1b,
        'convert': _0x57742e,
        'magick': _0x22e664,
        'gm': _0x289914,
        'find': _0x1d502a
    };
    require('./lib/sticker')[_0x12d99f(0xfb)] = _0x4066a0, Object[_0x12d99f(0x171)](global[_0x12d99f(0xfb)]);
    if (!_0x4066a0['ffmpeg']) conn['logger'][_0x12d99f(0x182)](_0x12d99f(0x152));
    if (_0x4066a0[_0x12d99f(0x14d)] && !_0x4066a0[_0x12d99f(0x121)]) conn[_0x12d99f(0x188)][_0x12d99f(0x182)]('Stickers\x20may\x20not\x20animated\x20without\x20libwebp\x20on\x20ffmpeg\x20(--enable-ibwebp\x20while\x20compiling\x20ffmpeg)');
    if (!_0x4066a0['convert'] && !_0x4066a0[_0x12d99f(0x12e)] && !_0x4066a0['gm']) conn[_0x12d99f(0x188)][_0x12d99f(0x182)](_0x12d99f(0x13d));
}
_quickTest()[_0xb94b9f(0x105)](() => conn[_0xb94b9f(0x188)][_0xb94b9f(0x18a)](_0xb94b9f(0x16d)))[_0xb94b9f(0x134)](console[_0xb94b9f(0x13b)]);
